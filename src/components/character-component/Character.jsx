import React, { useState, useEffect } from 'react';
import '../../App.css';
import './character.css';

// All Core profession Icons
import warriorImage from './images/Warrior.png';
import elementalistImage from './images/Elementalist.png';
import engineerImage from './images/Engineer.png';
import guardianImage from './images/Guardian.png';
import mesmerImage from './images/Mesmer.png';
import necromancerImage from './images/Necromancer.png';
import rangerImage from './images/Ranger.png';
import revenantImage from './images/Revenant.png';
import thiefImage from './images/Thief.png';

// Profession art 
import warriorArtImage from './images/WarriorArt.png';
import elementalistArtImage from './images/ElementalistArt.png';
import engineerArtImage from './images/EngineerArt.png';
import guardianArtImage from './images/GuardianArt.png';
import mesmerArtImage from './images/MesmerArt.png';
import necromancerArtImage from './images/NecromancerArt.png';
import rangerArtImage from './images/RangerArt.png';
import revenantArtImage from './images/RevenantArt.jpg';
import thiefArtImage from './images/ThiefArt.png';

// A mapping so when the user selects one of their characters in the drop down menu
// the profession icon will appear
const professionImageMap = {
  warrior: warriorImage,
  elementalist: elementalistImage,
  engineer: engineerImage,
  guardian: guardianImage,
  mesmer: mesmerImage,
  necromancer: necromancerImage,
  ranger: rangerImage,
  revenant: revenantImage,
  thief: thiefImage,
};

// A mapping so when the user selects one of their characters in the drop down menu
// art of that profession will appear
const professionArtMap = {
  warrior: warriorArtImage,
  elementalist: elementalistArtImage,
  engineer: engineerArtImage,
  guardian: guardianArtImage,
  mesmer: mesmerArtImage,
  necromancer: necromancerArtImage,
  ranger: rangerArtImage,
  revenant: revenantArtImage,
  thief: thiefArtImage,
};

// Function to get the character class for background color change or profession details
function getCharacterClass(profession) {
  switch (profession?.toLowerCase()) {
    case 'warrior':
      return 'warrior-class';
    case 'elementalist':
      return 'elementalist-class';
    case 'necromancer':
      return 'necromancer-class';
    case 'thief':
      return 'thief-class';
    case 'revenant':
      return 'revenant-class';
    case 'engineer':
      return 'engineer-class';
    case 'mesmer':
      return 'mesmer-class';
    case 'guardian':
      return 'guardian-class';
    case 'ranger':
      return 'ranger-class';
    default:
      return '';
  }
}

function Character(props) {
  const { apiKey } = props;
  const [characterList, setCharacterList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [titleName, setTitleName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch the list of the users characters based of off their apikey
        const characterResponse = await fetch(
          `https://api.guildwars2.com/v2/characters?ids=all&access_token=${apiKey}`
        );
        const characterData = await characterResponse.json();
        setCharacterList(characterData);
        setIsLoading(false);

        // Grabbing the icon ids for each profession
        const professionResponse = await fetch('https://api.guildwars2.com/v2/professions');
        const professionData = await professionResponse.json();
        const professionIconMap = {};
        professionData.forEach((profession) => {
          professionIconMap[profession.id] = profession.icon;
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    if (apiKey) {
      fetchData();
    }
  }, [apiKey]);

  // Function to handle character selection
  const handleCharacterSelect = async (event) => {
    const characterName = event.target.value;
    const selectedCharacterData = characterList.find((character) => character.name === characterName);
    setSelectedCharacter(selectedCharacterData);
    try {
      // Fetch the title name
      const titleResponse = await fetch(`https://api.guildwars2.com/v2/titles/${selectedCharacterData.title}`);
      const titleData = await titleResponse.json();
      setTitleName(titleData.name);
    } catch (error) {
      console.error('Error fetching title data:', error);
      setTitleName('Unknown Title');
    }
  };

  // Function to format age in hours
  const formatAge = (ageInSeconds) => {
    const secondsPerHour = 3600;
    const hours = Math.floor(ageInSeconds / secondsPerHour);
    return `${hours} hours`;
  };

  // Function to format created date as DD-MM-YYYY
  const formatCreatedDate = (createdDate) => {
    const date = new Date(createdDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <section id="characterInfo">
      <h2>Character Information</h2>
      <div className="character-container">
        <div className="character-dropdown">
          <label htmlFor="characterSelect">Select a Character:</label>
          <select
            id="characterSelect"
            onChange={handleCharacterSelect}
            value={selectedCharacter ? selectedCharacter.name : ''}>
            <option value="" disabled>Select a Character</option>
            {characterList.map((character) => (
              <option key={character.name} value={character.name}>{character.name}</option>
            ))}
          </select>
        </div>
        <div className='image-wrapper'>
          <img src={selectedCharacter ? professionArtMap[selectedCharacter.profession.toLowerCase()] : ''} alt={selectedCharacter?.profession || ''}/>
        </div>
        <div className={`character-details ${getCharacterClass(selectedCharacter?.profession)}`}>
          {isLoading ? (
            <p>Loading character data...</p>
          ) : (
            selectedCharacter && (
              <div className="details">
                <h3>Details:</h3>
                <img src={professionImageMap[selectedCharacter.profession.toLowerCase()]} alt={selectedCharacter.profession}/>
                <p><strong>Profession:</strong> {selectedCharacter.profession}</p>
                <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
                <p><strong>Race:</strong> {selectedCharacter.race}</p>
                <p><strong>Age:</strong> {formatAge(selectedCharacter.age)}</p>
                <p><strong>Created:</strong> {formatCreatedDate(selectedCharacter.created)}</p>
                <p><strong>Deaths:</strong> {selectedCharacter.deaths}</p>
                <p><strong>Title:</strong> {titleName || 'No Title'}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Character;
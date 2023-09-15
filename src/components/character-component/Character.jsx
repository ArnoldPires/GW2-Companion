import React, { useState, useEffect } from 'react';
import '../../App.css';
import './character.css';
import Warrior from './images/Warrior.png';
import WarriorArt from './images/WarriorArt.png';
import Elementalist from './images/Elementalist.png';
import ElementalistArt from './images/ElementalistArt.png';
import Engineer from './images/Engineer.png';
import EngineerArt from './images/EngineerArt.png';
import Guardian from './images/Guardian.png';
import GuardianArt from './images/GuardianArt.png';
import Mesmer from './images/Mesmer.png';
import MesmerArt from './images/MesmerArt.png';
import Necromancer from './images/Necromancer.png';
import NecromancerArt from './images/NecromancerArt.png';
import Ranger from './images/Ranger.png';
import RangerArt from './images/RangerArt.png';
import Revenant from './images/Revenant.png';
import RevenantArt from './images/RevenantArt.jpg';
import Thief from './images/Thief.png';
import ThiefArt from './images/ThiefArt.png';

// Create a mapping of professions to their art images
const professionArtMap = {
  warrior: WarriorArt,
  elementalist: ElementalistArt,
  engineer: EngineerArt,
  guardian: GuardianArt,
  mesmer: MesmerArt,
  necromancer: NecromancerArt,
  ranger: RangerArt,
  revenant: RevenantArt,
  thief: ThiefArt,
};

// Function to get the character class for styling
function getCharacterClass(profession) {
  // Map each profession to a CSS class name for background color
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
  const [professionIcons, setProfessionIcons] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch the list of characters
        const characterResponse = await fetch(
          `https://api.guildwars2.com/v2/characters?ids=all&access_token=${apiKey}`
        );
        const characterData = await characterResponse.json();
        setCharacterList(characterData);
        setIsLoading(false);

        // Fetch profession icons
        const professionResponse = await fetch('https://api.guildwars2.com/v2/professions');
        const professionData = await professionResponse.json();
        const professionIconMap = {};
        professionData.forEach((profession) => {
          professionIconMap[profession.id] = profession.icon;
        });
        setProfessionIcons(professionIconMap);
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

  // Function to get the image for a profession
  function getImageForProfession(profession) {
    // Map each profession to its corresponding image
    switch (profession.toLowerCase()) {
      case 'warrior':
        return Warrior;
      case 'elementalist':
        return Elementalist;
      case 'necromancer':
        return Necromancer;
      case 'thief':
        return Thief;
      case 'revenant':
        return Revenant;
      case 'engineer':
        return Engineer;
      case 'mesmer':
        return Mesmer;
      case 'guardian':
        return Guardian;
      case 'ranger':
        return Ranger;
      default:
        return ''; // Return a default image or handle missing images
    }
  }

  return (
    <section id="characterInfo">
      <h2>Character Information</h2>
      <div className="character-container">
        <div className="character-dropdown">
          <label htmlFor="characterSelect">Select a Character:</label>
          <select
            id="characterSelect"
            onChange={handleCharacterSelect}
            value={selectedCharacter ? selectedCharacter.name : ''}
          >
            <option value="" disabled>
              Select a Character
            </option>
            {characterList.map((character) => (
              <option key={character.name} value={character.name}>
                {character.name}
              </option>
            ))}
          </select>
        </div>
        <div className='image-wrapper'>
          <img
          src={selectedCharacter ? professionArtMap[selectedCharacter.profession.toLowerCase()] : ''}
          alt={selectedCharacter?.profession || ''}
        />
        </div>
        <div className={`character-details ${getCharacterClass(selectedCharacter?.profession)}`}>
          {isLoading ? (
            <p>Loading character data...</p>
          ) : (
            selectedCharacter && (
              <div className="details">
                <h3>Details:</h3>
                <img
                  src={getImageForProfession(selectedCharacter.profession)}
                  alt={selectedCharacter.profession}
                  style={{ marginLeft: '10px' }}
                />
                <p>
                  <strong>Profession:</strong> {selectedCharacter.profession}
                </p>
                <p>
                  <strong>Gender:</strong> {selectedCharacter.gender}
                </p>
                <p>
                  <strong>Race:</strong> {selectedCharacter.race}
                </p>
                <p>
                  <strong>Age:</strong> {formatAge(selectedCharacter.age)}
                </p>
                <p>
                  <strong>Created:</strong> {formatCreatedDate(selectedCharacter.created)}
                </p>
                <p>
                  <strong>Deaths:</strong> {selectedCharacter.deaths}
                </p>
                <p>
                  <strong>Title:</strong> {titleName || 'No Title'}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Character;

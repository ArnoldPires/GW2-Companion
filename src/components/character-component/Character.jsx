import React, { useState, useEffect } from 'react';
import '../../App.css';
import './character.css';
import Warrior from './images/Warrior.png';
import Elementalist from './images/Elementalist.png';
import Engineer from './images/Engineer.png';
import Guardian from './images/Guardian.png';
import Mesmer from './images/Mesmer.png';
import Necromancer from './images/Necromancer.png';
import Ranger from './images/Ranger.png';
import Revenant from './images/Revenant.png';
import Thief from './images/Thief.png';

function Character(props) {
  const { apiKey } = props;
  const [characterList, setCharacterList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [titleName, setTitleName] = useState('');
  const [professionIcons, setProfessionIcons] = useState({}); // Corrected state variable name

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the list of characters
        const characterResponse = await fetch(
          `https://api.guildwars2.com/v2/characters?ids=all&access_token=${apiKey}`
        );
        const characterData = await characterResponse.json();
        setCharacterList(characterData);

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
      }
    };

    if (apiKey) {
      fetchData();
    }
  }, [apiKey]);

  // Function to handle character selection
  const handleCharacterClick = async (characterName, titleId) => {
    const selectedCharacterData = characterList.find((character) => character.name === characterName);
    setSelectedCharacter(selectedCharacterData);
    try {
      // Fetch the title name
      const titleResponse = await fetch(`https://api.guildwars2.com/v2/titles/${titleId}`);
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
    return `${day}-${month}-${year}`;
  };

  return (
    <section id="characterInfo">
      <h2>Character Information</h2>
      <div className="character-container">
        <div className="character-names">
          <ul>
            {characterList.map((character) => (
              <li key={character.name}>
                <span onClick={() => handleCharacterClick(character.name, character.title)}>
                  {character.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`character-details ${selectedCharacter && selectedCharacter.profession.toLowerCase()}`}>
          {selectedCharacter && (
            <div className="details">
              <h3>Details:</h3>
              <img
                src={getImageForProfession(selectedCharacter.profession)}
                alt={selectedCharacter.profession}
                style={{ marginLeft: '10px' }}
              />
              <p><strong>Profession:</strong> {selectedCharacter.profession}</p>
              <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
              <p><strong>Race:</strong> {selectedCharacter.race}</p>
              <p><strong>Age:</strong> {formatAge(selectedCharacter.age)}</p>
              <p><strong>Created:</strong> {formatCreatedDate(selectedCharacter.created)}</p>
              <p><strong>Deaths:</strong> {selectedCharacter.deaths}</p>
              <p><strong>Title:</strong> {titleName || 'No Title'}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );

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
}

export default Character;

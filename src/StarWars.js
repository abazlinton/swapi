import React, { Fragment, useState, useEffect } from 'react'
import CharacterSelect from './CharacterSelect'
import CharacterDetail from './CharacterDetail';

const StarWars = () => {

  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState({})
  const [selectedCharacterHomeWorld, setselectedCharacterHomeWorld] = useState({})

  useEffect(() => {
    if (characters.length === 0) {
      fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(data => setCharacters(data.results))
    }
  })

  useEffect(() => {
    if (selectedCharacter.homeworld) {
      fetch(selectedCharacter.homeworld)
        .then(res => res.json())
        .then(data => setselectedCharacterHomeWorld(data))
    }
  }, [selectedCharacter])

  function handleCharacterSelected(index) {
    const selectedCharacter = characters[index]
    setSelectedCharacter(selectedCharacter)
  }

    return (
      <Fragment>
        <CharacterSelect
          characters={characters}
          onCharacterSelected={handleCharacterSelected}
        />
        <CharacterDetail
          character={selectedCharacter}
          homeworld={selectedCharacterHomeWorld}
        >
        </CharacterDetail>
      </Fragment>
    )

}

export default StarWars
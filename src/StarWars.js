import React, { Fragment, useState, useEffect } from 'react'
import CharacterSelect from './CharacterSelect'
import CharacterDetail from './CharacterDetail';
import CharacterSearch from './CharacterSearch';

const StarWars = () => {

  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState({})
  const [selectedCharacterHomeWorld, setselectedCharacterHomeWorld] = useState({})
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
      fetch(`https://swapi.co/api/people?search=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
          setCharacters(data.results)
          let newSelectedCharacter = {}
          if (data.count > 0) newSelectedCharacter = data.results[0]
          setSelectedCharacter(newSelectedCharacter)
          setselectedCharacterHomeWorld({})
        })
  }, [searchTerm])

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
    setselectedCharacterHomeWorld({})
  }

  function handleSearchText(text){
    setSearchTerm(text)
  }

    return (
      <Fragment>  
        <CharacterDetail
          character={selectedCharacter}
          homeworld={selectedCharacterHomeWorld}
        >
        </CharacterDetail>
        <CharacterSearch
          onSearchText={handleSearchText}
        />
        <CharacterSelect
          characters={characters}
          onCharacterSelected={handleCharacterSelected}
        />
      </Fragment>
    )
}

export default StarWars
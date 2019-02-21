import React, { Fragment, useState, useEffect } from 'react'
import CharacterSelect from './CharacterSelect'
import CharacterDetail from './CharacterDetail';
import CharacterSearch from './CharacterSearch';

const StarWars = () => {

  const [characters, setCharacters] = useState([])
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(-1)
  const [selectedCharacterHomeWorld, setselectedCharacterHomeWorld] = useState({})
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
      fetch(`https://swapi.co/api/people?search=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
          setCharacters(data.results)
          setSelectedCharacterIndex(0)
          setselectedCharacterHomeWorld({})
        })
  }, [searchTerm])

  useEffect(() => {
    let selectedCharacter = characters[selectedCharacterIndex]
    if (!selectedCharacter) selectedCharacter = {}
    if (selectedCharacter.homeworld) {
      fetch(selectedCharacter.homeworld)
        .then(res => res.json())
        .then(data => setselectedCharacterHomeWorld(data))
    }
  }, [selectedCharacterIndex])

  function handleCharacterSelected(index) {
    setSelectedCharacterIndex(index)
    setselectedCharacterHomeWorld({})
  }

  function handleSearchText(text){
    setSearchTerm(text)
  }

    return (
      <Fragment>  
        <CharacterDetail
          character={characters[selectedCharacterIndex]}
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
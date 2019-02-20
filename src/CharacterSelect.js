import React from 'react'

const CharacterSelect = ({ characters, onCharacterSelected }) => {

  const options = characters.map((character, index) =>
    <option
      key={index}
      value={index}
    >
      {character.name}
    </option>)

  function handleChange(e) {
    onCharacterSelected(e.target.value)
  }

  return <select
    onChange={handleChange}
  >
    {options}
  </select>

}

export default CharacterSelect
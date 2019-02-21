import React from 'react'

const CharacterSelect = ({ characters, onCharacterSelected }) => {

  if (!characters) return null;

  let options = characters.map((character, index) =>
    <option
      key={index}
      value={index}
    >
      {character.name}
    </option>)

  if (options.length === 0) options = [<option key={-1}>Enter search above</option>]

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
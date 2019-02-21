import React from 'react'

const CharacterSearch = ({ onSearchText }) => {

  return <form
    onSubmit={(e) => {
      e.preventDefault()
      onSearchText(e.target.searchTerm.value)
    }}
  >
    <input 
      id="searchTerm"
      autoComplete="off"
    >
    </input>
    <input 
      type="submit"
    />
  </form>

}

export default CharacterSearch
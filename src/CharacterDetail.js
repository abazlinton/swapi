import React from 'react'

const CharacterDetail = ({character, homeworld}) => {

  if (!character) character = {}
  if (!homeworld) homeworld = {}

  
  return <dl>
    <dt>Name</dt>
    <dd>{character.name}</dd>
    <dt>Gender</dt>
    <dd>{character.gender}</dd>
    <dt>Homeworld</dt>
    <dd>{homeworld.name}</dd>
  </dl>
}

export default CharacterDetail
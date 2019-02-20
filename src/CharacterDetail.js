import React from 'react'

const CharacterDetail = ({name, homeplanet, gender}) => {

  return <dl>
    <dt>Name</dt>
    <dd>{name}</dd>
    <dt>Gender</dt>
    <dd>{gender}</dd>
    <dt>Homeplanet</dt>
    <dd>{homeplanet}</dd>
  </dl>
}

export default CharacterDetail
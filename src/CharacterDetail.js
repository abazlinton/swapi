import React, { Fragment } from 'react'
import ReactJson from 'react-json-view'

const CharacterDetail = ({ character, homeworld }) => {

  if (!character) character = {}
  if (!homeworld) homeworld = {}

  return <Fragment>
    <dl>
      <dt>Name</dt>
      <dd>{character.name}</dd>
      <dt>Gender</dt>
      <dd>{character.gender}</dd>
      <dt>Homeworld</dt>
      <dd>{homeworld.name}</dd>
    </dl>
    <ReactJson
      src={character}
      theme="summerfruit:inverted"
    />
  </Fragment>


}

export default CharacterDetail
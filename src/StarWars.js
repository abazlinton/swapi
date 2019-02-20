import React, { Component, Fragment } from 'react'
import CharacterSelect from './CharacterSelect'
import CharacterDetail from './CharacterDetail';

class StarWars extends Component {

  constructor() {
    super()
    this.state = { characters: [], selectedCharacter: {}, selectedHomeWorld: {} }
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          characters: data.results, 
          selectedCharacter: data.results[0]
        })
        this.handleCharacterSelected(0)
      })
  }

  handleCharacterSelected(index) {
    const selectedCharacter = this.state.characters[index]
    this.setState({ selectedCharacter, selectedHomeWorld: {} })
    fetch(selectedCharacter.homeworld)
      .then(res => res.json())
      .then(data => {
        this.setState({ selectedHomeWorld: data })
      })
  }

  render() {
    return (
      <Fragment>
        <CharacterSelect
          characters={this.state.characters}
          onCharacterSelected={this.handleCharacterSelected}
        />
        <CharacterDetail
          name={this.state.selectedCharacter.name}
          homeplanet={this.state.selectedHomeWorld.name}
          gender={this.state.selectedCharacter.gender}
        >
        </CharacterDetail>
      </Fragment>

    )
  }
}

export default StarWars
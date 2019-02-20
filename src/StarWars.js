import React, { Component } from 'react'
import CharacterSelect from './CharacterSelect'

class StarWars extends Component {

  constructor() {
    super()
    this.state = { characters: [], selectedCharacter: {}, selectedHomeWorld: {}}
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(data => this.setState({ characters: data.results }))
  }

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index]
    this.setState({selectedCharacter})
    fetch(selectedCharacter.homeworld)
      .then(res => res.json())
      .then(data => {
        this.setState({selectedHomeWorld: data})
      })
  }

  render() {
    return (
      <CharacterSelect
        characters={this.state.characters }
        onCharacterSelected={this.handleCharacterSelected}
      />
    )
  }
}

export default StarWars
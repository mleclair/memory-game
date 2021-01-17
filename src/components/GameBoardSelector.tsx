import React from "react";
import GameBoardName from "../models/GameBoardName";

interface IProps {
  gameBoardNames: GameBoardName[],
  onGameBoardSelectionChange: (event: Object) => string,
  onLanguageSelectionChange: (name: string) => string
}

interface IState {
  isMenuOpen: boolean,
  selectedGameName: string,
  selectedLanguage: string
}

export default class GameBoardSelector extends React.Component<IProps, IState>  {

  constructor(props) {
    super(props)
  
    this.onGameBoardSelectionChange = this.onGameBoardSelectionChange.bind(this)
    //this.onLanguageSelectionChange = this.onLanguageSelectionChange.bind(this)

    this.state = {
      isMenuOpen: props.state.isMenuOpen,
      selectedGameName: props.state.selectedGameName,
      selectedLanguage: props.state.selectedLanguage
    }

    this.gameBoardNames = []

    props.gameBoardNames.forEach(gameBoardName => this.gameBoardNames.push(new GameBoardName(gameBoardName.name, gameBoardName.displayNames, gameBoardName.include)))
  }

  gameBoardNames: GameBoardName[]

  /*    */
  onGameBoardSelectionChange(event) {
    var val = event.target.value;
    //alert(val)
    this.props.onGameBoardSelectionChange(val)
    this.setState({ selectedGameName: val })
  }

  // onLanguageSelectionChange(name) {
  //   alert(name)
  //   //alert(this.state.selectedGameName)
  // }

  render() {
    const lang = this.state.selectedLanguage

    return (
      <select id="gameSelector" onChange={this.onGameBoardSelectionChange} value={this.state.selectedGameName}>
        {this.gameBoardNames.map(function(gameBoardName: GameBoardName) {
          return <option value={gameBoardName.name}>{gameBoardName.displayNames.filter(f => f.language === lang)[0].name}</option>
        })}
      </select>
    )
  }
}
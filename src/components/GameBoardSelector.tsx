import React from "react";
import GameBoardName from "../models/GameBoardName";
import Resources from "../resources/Resources";

interface IProps {
  gameBoardNames: GameBoardName[],
  onGameBoardSelectionChange: (event: Object) => void,
  //onLanguageSelectionChange: (name: string) => void,
  isMenuOpen: boolean,
  selectedLanguage: string,
  selectedGameName: string
}

export default class GameBoardSelector extends React.Component<IProps>  {

  constructor(props) {
    super(props)
  
    this.onGameBoardSelectionChange = this.onGameBoardSelectionChange.bind(this)
    //this.onLanguageSelectionChange = this.onLanguageSelectionChange.bind(this)

    this.selectedLanguage = props.selectedLanguage
    this.selectedGameName = props.selectedGameName
    this.gameBoardNames = []

    props.gameBoardNames.forEach(gameBoardName => this.gameBoardNames.push(new GameBoardName(gameBoardName.name, gameBoardName.displayNames, gameBoardName.include)))
  }

  gameBoardNames: GameBoardName[]
  selectedLanguage: string
  selectedGameName: string

  /*    */
  onGameBoardSelectionChange(event) {
    var val = event.target.value;
    this.props.onGameBoardSelectionChange(val)
    this.setState({ selectedGameName: val })
  }

  /*  
  onLanguageSelectionChange(name: string) {
    this.render()
    alert('fdasdf')
    return name
  }  */

  renderOptions(): React.Component[] {
    let arr = [];
    for (let gameBoardName of Resources.gameBoardNames)
    {
      arr.push(<option value={gameBoardName.name}>{gameBoardName.displayNames.find(f => f.language === this.props.selectedLanguage).name}</option>)
    }
    return arr
  }

  render() {
    return (
      <select id="gameSelector" onChange={this.onGameBoardSelectionChange} value={this.props.selectedGameName}>
        {this.renderOptions()}
      </select>
    )
  }
}
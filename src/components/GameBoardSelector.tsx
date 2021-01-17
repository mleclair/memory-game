import React from "react";
import GameBoardName from "../models/GameBoardName";
import Resources from "../resources/Resources";

interface IProps {
  gameBoardNames: GameBoardName[],
  onGameBoardSelectionChange: (name: string) => void,
  isMenuOpen: boolean,
  selectedLanguage: string,
  selectedGameBoardName: string
}

export default class GameBoardSelector extends React.Component<IProps>  {

  constructor(props) {
    super(props)
  
    this.onGameBoardSelectionChange = this.onGameBoardSelectionChange.bind(this)

    this.selectedLanguage = props.selectedLanguage
    this.selectedGameBoardName = props.selectedGameBoardName
    this.gameBoardNames = []

    props.gameBoardNames.forEach(gameBoardName => this.gameBoardNames.push(new GameBoardName(gameBoardName.name, gameBoardName.displayNames, gameBoardName.include)))
  }

  gameBoardNames: GameBoardName[]
  selectedLanguage: string
  selectedGameBoardName: string

  /*  Fires whenever the selected option changes  */
  onGameBoardSelectionChange(event) {
    var name = event.target.value;
    this.setState({ selectedGameBoardName: name })
    this.props.onGameBoardSelectionChange(name)
  }

  /*  Renders the select options from datasource  */
  renderOptions(): React.Component[] {
    let arr = []
    let i = 0
    for (let gameBoardName of Resources.gameBoardNames)
    {
      arr.push(<option key={i++} value={gameBoardName.name}>{gameBoardName.displayNames.find(f => f.language === this.props.selectedLanguage).name}</option>)
    }
    return arr
  }

  render() {
    return (
      <select id="gameSelector" onChange={this.onGameBoardSelectionChange} value={this.props.selectedGameBoardName}>
        {this.renderOptions()}
      </select>
    )
  }
}
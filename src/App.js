import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board.js";
import Menu from "./components/Menu";
import Score from "./components/Score";
import Resources from "./resources/Resources.ts";
import GameBoard from "./models/GameBoard.ts";
import HamburgerMenu from "../node_modules/react-hamburger-menu/dist/HamburgerMenu.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game icons={Resources.icons} gameBoardNames={Resources.gameBoardNames} />
      </div>
    );
  }
}

var defaultSelectedGameBoardName = "jet"
var defaultSelectedLanguage = "en"
  
class Game extends React.Component {
  constructor(props) {
    super(props)

    this.onTimerStart = this.onTimerStart.bind(this)
    this.onHamburgerMenuClick = this.onHamburgerMenuClick.bind(this)
    this.onFoundMatch = this.onFoundMatch.bind(this)
    this.onNoMatch = this.onNoMatch.bind(this)
    this.onWin = this.onWin.bind(this)
    this.getGameBoard = this.getGameBoard.bind(this)
    this.onLanguageSelectionChange = this.onLanguageSelectionChange.bind(this)
    
    this.onGameBoardNameSelectionChange = this.onGameBoardNameSelectionChange.bind(this)
    this.resetBoard = this.resetBoard.bind(this)

    this.gameBoardNames = this.getGameBoardNames()

    this.gameBoardCards = this.getGameBoardCards()

    this.languageSettings = this.getLanguageSettings()

    this.scoreLabels = this.getScoreLabels()
  
    this.gameBoards = this.getGameBoards()

    this.gameBoard = this.getGameBoard(defaultSelectedGameBoardName)

    this.state = {
      attemptCount: 0,
      matchesMade: 0,
      found: [],
      isTimerOn: false,
      startTime: 1,
      elapsed: 0,
      showScore: false,
      isMenuOpen: false,
      selectedLanguage: defaultSelectedLanguage,
      selectedGameBoardName: defaultSelectedGameBoardName,
      gameBoard: this.gameBoard,
      pairs: this.gameBoard.pairs,
      pairCount: this.gameBoard.pairCount,
      circles: this.gameBoard.circles,
      winner: false
    }
  }
  
  componentDidMount() {
    let gameBoard = this.getGameBoard(this.state.selectedGameBoardName)
    this.setState({gameBoard: gameBoard, selectedGameBoardName: gameBoard.name, pairs: gameBoard.pairs, pairCount: gameBoard.pairCount, circles: gameBoard.circles})
    this.setDocumentTitle(this.state.selectedLanguage, gameBoard.name)
  }

  /*    */
  setDocumentTitle (language, gameName) {
    language = language ?? this.state.selectedLanguage
    let scoreLabel = this.scoreLabels.find(sl => sl.labelType === "game-title");
    let displayName = scoreLabel.displayNames.find(dn => dn.language === language)
    gameName = gameName ?? (this.state.selectedGameBoardName ? this.state.selectedGameBoardName : defaultSelectedGameBoardName)
    let selectedGameBoardName = this.gameBoardNames.find(ls => ls.name === gameName)
    let selectedGameTitle = selectedGameBoardName.displayNames.find(dn => dn.language === language)
    document.title = displayName.name + (selectedGameTitle && selectedGameTitle.name ? " - " + selectedGameTitle.name : "")
  }

  /*    */
  getGameBoardCards () {
    return Resources.gameBoardCards
  }
  
  /*    */
  getGameBoards() {
    let arr = []
    for (var gameBoardCard of this.gameBoardCards) {
      arr.push(new GameBoard(gameBoardCard.name, gameBoardCard.circles, Resources.icons))
    }
    return arr
  }

  /*    */
  getGameBoard (gameName) {
    return this.gameBoards.find(gb => gb.name === gameName)
  }

  /*    */
  setGameBoard (gameBoard) {
    this.setState({
      attemptCount: 0,
      matchesMade: 0,
      found: [],
      isTimerOn: false,
      startTime: 1,
      elapsed: 0,
      showScore: false,
      //isMenuOpen: false,  set to true if you want to immediately close menu after selection change
      selectedGameBoardName: gameBoard.name,
      gameBoard: gameBoard,
      pairs: gameBoard.pairs,
      pairCount: gameBoard.pairCount,
      circles: gameBoard.circles,
      winner: false
    })
  }

  /*  Datasource  */
  getGameBoardNames = () => Resources.gameBoardNames

  /*  Datasource  */
  getLanguageSettings = () => Resources.languageSettings

  /*  Datasource  */
  getScoreLabels = () => Resources.scoreLabels

  /*    */
  onGameBoardNameSelectionChange(gameName) {
    //alert('app.onGameBoardSelectionChange    ' + gameName)
    // let gameBoard = this.getGameBoard(gameName)
    // this.setState({ selectedGameBoardName: gameName, gameBoard: gameBoard })
    this.stopTimer()
    const gameBoard = this.getGameBoard(gameName)
    this.setGameBoard(gameBoard)
    this.resetBoard(gameBoard.name)
    this.setDocumentTitle(this.state.selectedLanguage, gameBoard.name)
    this.onChangeGameBoard(gameBoard.name)
  }

  /*    */
  onChangeGameBoard(gameName) {
    //alert("onChangeGameBoard(" + gameName + ")")
  }

  /*    */
  onLanguageSelectionChange(name) {
    this.setState({ selectedLanguage: name })
    this.setDocumentTitle(name)
  }

  /*    */
  onTimerStart = () => this.startTimer()

  /*    */
  onTimerStop = () => this.stopTimer()

  /*    */
  startTimer() {
    this.setState({
      isTimerOn: true,
      elapsed: this.state.elapsed,
      startTime: Date.now() - this.state.elapsed
    })

    this.timer = setInterval(() => this.setState({
      elapsed: Date.now() - this.state.startTime
    }), 1000)
  }

  /*    */
  stopTimer() {
    this.setState({ isTimerOn: false })
    clearInterval(this.timer)
  }

  /*    */
  resetTimer = () => this.setState({ elapsed: 0, isTimerOn: false })

  /*    */
  onFoundMatch(icon) {
    this.setState({
      attemptCount: this.state.attemptCount + 1,
      matchesMade: this.state.matchesMade + 1
    });

    this.setState(prevState => ({
      found: [...prevState.found, icon]
    }))

    this.setState({ showScore: true })

    if (this.state.matchesMade === this.state.gameBoard.pairCount - 1) {
      this.onWin()
    }
    else {
      setTimeout(() => this.setState({ showScore: false }), 2500)
    }
  }

  /*    */
  onNoMatch() {
    this.setState({
      attemptCount: this.state.attemptCount + 1
    })
    setTimeout(() => this.setState({ showScore: false }), 2500)
  }

  /*    */
  onWin() {
    this.stopTimer()
    this.setState({ showScore: true, winner: true })
  }

  /*    */
  onReset() {
    this.resetBoard()
    //window.location.reload()
  }

  /*    */
  resetBoard(selectedGameBoardName) {
    //this.setState({ selectedGameBoardName: selectedGameBoardName, gameBoard: Resources.gameBoards.find(gb => gb.name === selectedGameBoardName)})
    //alert('app.resetBoard('+this.state.gameBoard.name+')')
    //alert('app.resetBoard('+selectedGameBoardName+')')
    //this.render()  
  }

  /*    */
  onHamburgerMenuClick = (e) => this.setState({ isMenuOpen: !this.state.isMenuOpen })

  /*    */
  render() {
    return (
      <div>
        <div className="menu">
          <Menu isMenuOpen={this.state.isMenuOpen}
                selectedGameBoardName={this.state.selectedGameBoardName}
                selectedLanguage={this.state.selectedLanguage}
                onGameBoardNameSelectionChange={this.onGameBoardNameSelectionChange}
                onLanguageSelectionChange={this.onLanguageSelectionChange}
                resetBoardName={this.resetBoardName}
                gameBoardNames={this.gameBoardNames}
                languageSettings={this.languageSettings} />
        </div>
        <div>
          <div className="outer">
            <Board selectedGameBoardName={this.state.selectedGameBoardName}
                   gameBoard={this.state.gameBoard}
                   pairs={this.state.pairs}
                   pairCount={this.state.pairCount}
                   circles={this.state.circles}
                   onTimerStart={this.onTimerStart}
                   onFoundMatch={this.onFoundMatch}
                   onNoMatch={this.onNoMatch}
                   onWin={this.onWin}
                   resetBoard={this.resetBoard}
                   onChangeGameBoard={this.onChangeGameBoard}
                   onGameBoardSelectionChange={this.onGameBoardSelectionChange} />
          </div>
          <div className="game-info">
            <Score show={this.state.show}
                   showScore={this.state.showScore}
                   winner={this.state.winner}
                   icons={this.state.gameBoard.icons}
                   found={this.state.found}
                   pairCount={this.state.pairCount}
                   foundCount={this.state.foundCount}
                   matchesMade={this.state.matchesMade}
                   attemptCount={this.state.attemptCount}
                   elapsed={this.state.elapsed}
                   selectedLanguage={this.state.selectedLanguage}
                   selectedGameBoard={this.state.gameBoard}
                   scoreLabels={Resources.scoreLabels}
                   onReset={this.onReset} />
          </div>
          <div className="hamburger">
            <HamburgerMenu isOpen={this.state.isMenuOpen}
                           menuClicked={this.onHamburgerMenuClick}
                           width={0}
                           height={0}
                           strokeWidth={5}
                           rotate={0}
                           color="darkgray"
                           borderRadius={0}
                           animationDuration={0.5} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById("root")
);

export default App;

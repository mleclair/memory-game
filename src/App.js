import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board.js";
import Menu from "./components/Menu.js";
import Score from "./components/Score.js";
import Resources from "./resources/Resources.ts";
import GameBoard from "./models/GameBoard.ts";
import HamburgerMenu from "../node_modules/react-hamburger-menu/dist/HamburgerMenu.js";
import GameBoardName from "./models/GameBoardName.ts";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Game icons={Resources.icons} />
      </div>
    );
  }
}

var defaultSelectedGameName = "jet"
var lang = "en"
var gameBoardNames = [];
  
class Game extends React.Component {
  constructor(props) {
    super(props)

    this.onTimerStart = this.onTimerStart.bind(this)
    this.onTimerStop = this.onTimerStop.bind(this)
    this.onFoundMatch = this.onFoundMatch.bind(this)
    this.onNoMatch = this.onNoMatch.bind(this)
    this.onWin = this.onWin.bind(this)
    this.onMenuClick = this.onMenuClick.bind(this)
    this.getGameBoard = this.getGameBoard.bind(this)
    this.onGameBoardSelectionChange = this.onGameBoardSelectionChange.bind(this)
    
    //this.gameBoardNames = this.gameBoardNames.bind(this)
    this.pairCount = props.pairCount;
  
    this.state = {
      attemptCount: 0,
      matchesMade: 0,
      found: [],
      isTimerOn: false,
      startTime: 1,
      elapsed: 0,
      showScore: false,
      isMenuOpen: false,
      language: lang,
      winner: false,
      selectedGameName: defaultSelectedGameName,
      gameBoard: this.getGameBoard(defaultSelectedGameName)
    }
    
    //gameBoardNames = [];
  }

  /*    */
  getGameBoard (gameName) {
    //alert(gameName)
    var board = Resources.boards.filter(e => e.name === gameName)[0]
    return new GameBoard(gameName,
                         board.circles,
                         Resources.icons)
  }

  getGameBoardNames () {
    //Resources.boards.forEach(board => {
      //gameBoardNames.push(new )
    //});
  }

  /*    */
  onGameBoardSelectionChange(gameName) {
     this.setState({ gameBoard: this.getGameBoard(gameName) })
     this.resetBoard()
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
  //onLanguageChange = () => this.setState({ language: this.state.language === "en" ? "en" : "fr" })
  onLanguageChange() {
    if (this.state.language === "en") {
      this.setState({ language: "fr" })
    }
    else {
      this.setState({ language: "en" })
    }
  }

  /*    */
  onWin() {
    this.stopTimer()
    this.setState({ showScore: true, winner: true })
  }

  /*    */
  onReset() {
    window.location.reload(true)
  }

  /*    */
  resetBoard() {
    alert("!!")
  }

  /*    */
  onMenuClick = (e) => this.setState({ isMenuOpen: !this.state.isMenuOpen })

  /*    */
  render() {
    return (
      <div>
        <div className="menu">
          <Menu state={this.state}
                onGameBoardSelectionChange={this.onGameBoardSelectionChange} 
                gameBoardList={this.gameBoardList} />
        </div>
        <div>
          <div className="outer">
            <Board state={this.state}
              cards={this.state.gameBoard.pairs}
              pairCount={this.state.gameBoard.pairCount}
              circles={this.state.gameBoard.circles}
              onTimerStart={this.onTimerStart}
              onFoundMatch={this.onFoundMatch}
              onNoMatch={this.onNoMatch}
              onWin={this.onWin}
              resetBoard={this.resetBoard}
              onGameBoardSelectionChange={this.onGameBoardSelectionChange} />
          </div>
          <div className="game-info">
            <Score state={this.state}
              icons={this.state.gameBoard.icons}
              onFoundMatch={this.onFoundMatch}
              onReset={this.onReset} />
          </div>
          <div id="lang" onClick={() => this.onLanguageChange(this)}>{this.state.language}</div>
          <div id="hamburger" className="hamburger">
            <HamburgerMenu
              isOpen={this.state.isMenuOpen}
              menuClicked={this.onMenuClick}
              width={0}
              height={0}
              strokeWidth={2}
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

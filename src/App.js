import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board.js";
import Menu from "./components/Menu.js";
import Score from "./components/Score.js";
import Resources from "./resources/Resources.ts";
import Utilities from "./resources/Utilities.ts";
import HamburgerMenu from "../node_modules/react-hamburger-menu/dist/HamburgerMenu.js";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Game icons={Resources.icons} />
      </div>
    );
  }
}

const gameNumber = 2;

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.onTimerStart = this.onTimerStart.bind(this)
    this.onTimerStop = this.onTimerStop.bind(this)
    this.onFoundMatch = this.onFoundMatch.bind(this)
    this.onNoMatch = this.onNoMatch.bind(this)
    this.onWin = this.onWin.bind(this)
    this.onMenuClick = this.onMenuClick.bind(this)

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
      language: "en",
      winner: false
    }
  }

  static icos = Game.getRandomIcons(Resources.icons)
  static randomPairs = Game.randomizedCardPairs()
  static pairCount;
 
  /*    */
  static getRandomIcons(icons) {
    let ic = icons
    ic = Utilities.Shuffle(ic)
    return ic.slice(0, Resources.boards[gameNumber].pairCount);
  }

  /*    */
  static randomizedCardPairs() {
    let cards = Utilities.Shuffle(this.icos)

    // Add them a second time to get pairs
    let pairs = cards.concat(cards)

    return Utilities.Shuffle(pairs);
  }

  /*    */
  onTimerStart() {
    this.startTimer()
  }

  /*    */
  onTimerStop() {
    this.stopTimer()
  }

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
  resetTimer() {
    this.setState({ elapsed: 0, isTimerOn: false })
  }

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

    if (this.state.matchesMade === Resources.boards[gameNumber].pairCount - 1) {
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
  onLanguageChange() {
    if (this.state.language === "en") {
      this.setState({ language: "fr" })
    }
    else {
      this.setState({ language: "en" })
    }
  }

  /*    */
  getCirlces(circles) {
    return [].concat.apply([], circles);
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
  onMenuClick() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
    //alert("menu open: " + String(this.state.isMenuOpen))
  }

  /*    */
  render() {
    return (
      <div>
        <div className="menu">
          <Menu state={this.state} />
        </div>
        <div>
          <div className="outer">
            <Board state={this.state}
              cards={Game.randomPairs}
              pairCount={Resources.boards[gameNumber].pairCount}
              circles={this.getCirlces(Resources.boards[gameNumber].circles)}
              onTimerStart={this.onTimerStart}
              onFoundMatch={this.onFoundMatch}
              onNoMatch={this.onNoMatch}
              onWin={this.onWin} />
          </div>
          <div className="game-info">
            <Score state={this.state}
              icons={Game.icos}
              onFoundMatch={this.onFoundMatch}
              onReset={this.onReset} />
          </div>
          <div id="lang" onClick={() => this.onLanguageChange(this)}>{this.state.language}</div>
          <div id="hamburger" className="hamburger">
            <HamburgerMenu
              isOpen={this.state.isMenuOpen}
              menuClicked={this.onMenuClick}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color='darkgray'
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

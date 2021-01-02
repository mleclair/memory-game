import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board.js";
import Score from "./components/Score.js";

const icons = [
  "airplane", "american-football", "aperture", "basketball", "beer", "bicycle", "book", "build", "bulb", "cafe", "cellular", "cog", "construct", "cube", "female", "fitness", "flag", "flame", "flash", "flask", "gift", "glasses", "globe", "hammer", "heart", "home", "hourglass", "ice-cream", "infinite", "jet", "leaf", "male", "megaphone", "mic", "moon", "musical-notes", "nuclear", "nutrition", "paw", "pin", "pizza", "planet", "pulse", "rainy", "recording", "restaurant", "ribbon", "rocket", "school", "send", "settings", "shirt", "shuffle", "snow", "speedometer", "star-outline", "stats", "sunny", "switch", "tennisball", "thermometer", "thumbs-up", "thunderstorm", "timer", "train", "transgender", "trophy", "tv", "umbrella", "unlock", "videocam", "volume-off", "walk", "wallet", "wifi", "wine", "woman"
];

const boardCircles = [{
  "name": "ice-cube",
  "circles":
    [
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans", "skyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "skyblu", "skyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "skyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "skyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "skyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "skyblu", "skyblu", "skyblu", "ltskyblu", "trans", "trans"]
    ]
},
{
  "name": "numbris",
  "circles":
    [
      ["trans", "trans", "aqua", "grn", "trans", "navy", "navy", "navy", "trans", "trans", "trans", "trans", "navy", "navy", "navy", "navy"],
      ["trans", "trans", "trans", "ltgrn", "ltblu", "navy", "ltblu", "navy", "navy", "trans", "trans", "trans", "navy", "grn", "navy", "navy"],
      ["ltgrn", "trans", "grn", "trans", "grn", "navy", "navy", "ltblu", "navy", "grn", "trans", "trans", "navy", "navy", "navy", "navy"],
      ["trans", "trans", "trans", "ltblu", "navy", "grn", "navy", "navy", "ltblu", "navy", "navy", "trans", "ltblu", "navy", "navy", "navy"],
      ["trans", "trans", "grn", "ltblu", "ltblu", "navy", "ltgrn", "navy", "navy", "navy", "navy", "navy", "navy", "ltgrn", "navy", "navy"],
      ["ltgrn", "trans", "trans", "grn", "navy", "ltblu", "navy", "ltblu", "ltblu", "navy", "navy", "navy", "navy", "navy", "grn", "navy"],
      ["trans", "ltgrn", "ltblu", "trans", "navy", "ltgrn", "ltblu", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy"],
      ["trans", "trans", "trans", "trans", "ltblu", "ltblu", "navy", "grn", "navy", "navy", "navy", "ltblu", "navy", "ltblu", "navy", "navy"],
      ["ltblu", "trans", "grn", "trans", "grn", "navy", "navy", "navy", "trans", "navy", "ltgrn", "navy", "navy", "navy", "grn", "navy"],
      ["trans", "trans", "ltgrn", "ltblu", "trans", "navy", "navy", "ltblu", "trans", "trans", "navy", "ltblu", "navy", "ltblu", "navy", "navy"],
      ["trans", "trans", "trans", "trans", "grn", "navy", "ltblu", "navy", "trans", "trans", "trans", "navy", "ltblu", "navy", "navy", "navy"],
      ["trans", "ltgrn", "ltblu", "trans", "navy", "navy", "navy", "ltgrn", "trans", "trans", "trans", "trans", "navy", "navy", "ltblu", "navy"]
    ]
}];

const totalCards = 70;

class App extends Component {

  render() {
    return (
      <div className="App">
        <Game icons={icons} />
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.onTimerStart = this.onTimerStart.bind(this)
    this.onTimerStop = this.onTimerStop.bind(this)
    this.onFoundMatch = this.onFoundMatch.bind(this)
    this.onNoMatch = this.onNoMatch.bind(this)
    this.onWin = this.onWin.bind(this)

    this.state = {
      attemptCount: 0,
      matchesMade: 0,
      found: [],
      isTimerOn: false,
      startTime: 1,
      elapsed: 0,
      showScore: false,
      language: "en",
      winner: false
    }
  }

  static icos = Game.getRandomIcons(icons)
  static randomPairs = Game.randomizedCardPairs()

  /*    */
  static getRandomIcons(icons) {
    let ic = icons
    ic = this.shuffle(ic)
    return ic.slice(0, totalCards);
  }

  /*    */
  static randomizedCardPairs() {
    let cards = this.shuffle(this.icos)

    // Add them a second time to get pairs
    let pairs = cards.concat(cards)

    return this.shuffle(pairs);
  }

  /*  Randomly shuffles an array  */
  static shuffle(array) {
    if (array) {
      var currentIndex = array.length, temporaryValue, randomIndex

      while (0 !== currentIndex) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // Swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }
    }
    return array;
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

    if (this.state.matchesMade === totalCards - 1) {
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

    // If they did it in less than 10 minutes with accuracy better than 80%
    if (this.state.elapsed < 600000 && ((this.props.state.matchesMade / this.props.state.attemptCount) > .80)) {
      // Email Frank... --> 'Where's my 5 bucks??'

    }
  }

  /*    */
  onReset() {
    window.location.reload(true)
  }

  render() {
    return (
      <div>
        <div className="outer">
          <Board state={this.state}
            cards={Game.randomPairs}
            totalCards={totalCards}
            circles={this.getCirlces(boardCircles[0].circles)}
            onTimerStart={this.onTimerStart}
            onFoundMatch={this.onFoundMatch}
            onNoMatch={this.onNoMatch}
            onWin={this.onWin} />
        </div>
        <div className="menu">
          <Score state={this.state}
            icons={Game.icos}
            onFoundMatch={this.onFoundMatch}
            onReset={this.onReset} />
        </div>
        <div id="lang" onClick={() => this.onLanguageChange(this)}>{this.state.language}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById("root")
);

export default App;

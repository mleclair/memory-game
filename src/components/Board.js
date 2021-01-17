import React from "react";
import Card from "./Card.js";

export default class Board extends React.Component {
  constructor(props) {
    super(props)

    this.onTimerStart = this.onTimerStart.bind(this)
    this.onFoundMatch = this.onFoundMatch.bind(this)
    this.onNoMatch = this.onNoMatch.bind(this)
    this.onWin = this.onWin.bind(this)
    this.resetBoard = this.resetBoard.bind(this)

    this.state = {
      firstCardSelection: true,
      lockedDown: "grid-container game-on",
      selectedCircle: null,
      selectCard: null,
      gameBoard: props.state.gameBoard
    };
  }

  /*      */
  onTimerStart() {
    this.props.onTimerStart()
    this.setState({ className: "grid-container game-on" })
  }

  /*      */
  onNoMatch(e) {
    this.props.onNoMatch()
    this.resetBoardSelection(e)
    this.deselectCard(this.state.selectedCircle)
    this.setState({ firstCardSelection: true })
  }

  /*      */
  onFoundMatch(icon, i1, i2, e) {
    // Remove pair from play
    this.props.onFoundMatch(icon)
    this.refs[i1].setState({ className: "found" })
    this.refs[i2].setState({ className: "found" })

    if (this.props.state.matchesMade === this.props.pairCount - 1) {
      // We have a wienner!!
      this.onWin()
    }
    else {
      this.resetBoardSelection(e)
    }
  }

  /*      */
  onWin() {
    // Reset classnames to original
    let i = 0;
    for (var ref in this.refs) {
      this.refs[ref].setState({ className: this.props.circles[i++] })
    }

    // Adding class 'winner' animates the board
    this.setState({
      firstCardSelection: true,
      lockedDown: "grid-container winner",
      selectedCircle: null,
      selectedCard: null
    })

    this.props.onWin()
  }

  /*  Remove clicked styling  */
  deselectCard(index) {
    this.refs[index].setState({ className: this.refs[index].props.className.replace("clicked", "") })
  }

  /*   Remove lockdown styling.  Need to blur after state change.   */
  resetBoardSelection(e) {
    this.setState({
      firstCardSelection: true,
      lockedDown: "grid-container game-on",
      selectedCircle: null,
      selectedCard: null
    });

    e.target.parentElement.blur()
  }

  /*      */
  handleCardClick(e, i, icon) {
    if (!this.state.isTimerOn) this.onTimerStart()

    e.target.parentElement.blur()

    if (this.refs[i].state.className === "trans" || this.refs[i].state.className === "found") return;

    if (this.state.firstCardSelection) {  // User selected first card, stop hover effect on all circles
      this.setState({
        firstCardSelection: false,
        lockedDown: "grid-container no-hover game-on",
        selectedCircle: i,
        selectedCard: icon
      })

      this.refs[i].setState({ className: this.refs[i].state.className + " clicked" })  // Keep selected open
      return;
    }
    else if (this.state.selectedCircle === i) {  // Clicked same element twice, so deselect
      this.deselectCard(i)
      this.resetBoardSelection(e)
      return;
    }
    else if (this.state.selectedCard === icon) {  // User found matching card
      this.onFoundMatch(icon, i, this.state.selectedCircle, e)
      return;
    }
    
    this.onNoMatch(e);
  }

  /*    */
  resetBoard() {
    alert('fdasdf')
    this.render()
  }

  /*    */
  renderCard(index, props) {
    return (
      <Card key={index}
            value={props}
            ref={index}
            className={props.circle}
            onClick={(e) => this.handleCardClick(e, index, props.icon)} />
    );
  }

  /*      */
  renderCards() {
    let counter = 0;
    let arr = [];

    // Add an icon for each non-transparent dot 
    for (let i = 0; i < this.props.circles.length; i++) {
      let props = {
        id: i,
        circle: this.props.circles[i],
        icon: this.props.cards[counter],
        iconUniqueId: "i" + counter
      }

      arr.push(this.renderCard(i, props))

      if (this.props.circles[i] !== "trans") counter++;
    }
    return arr;
  }

  /*  Render Board  */
  render() {
    return (
      <div className="box">
        <div className={this.state.lockedDown}>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}
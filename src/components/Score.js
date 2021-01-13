import React from "react";

export default class Score extends React.Component {
  constructor(props) {
    super(props)

    this.onReset = this.onReset.bind(this)

    this.state = {
      foundCount: 0,
      show: false
    }
  }

  /*    */
  onReset() {
    this.props.onReset()
  }

  /*  Renders a bin of distinct icons, hidden, to be revealed when a match on the board is made  */
  renderHiddenIcons() {
    let arr = []

    for (let i = 0; i < this.props.icons.length; i++) {
      arr.push(
        <div key={"f" + i} ref={"found-" + this.props.icons[i]} className={this.props.state.found.includes(this.props.icons[i]) ? "found" : ""}>
          <i key={"fi" + i} className={"ion ion-md-" + this.props.icons[i]}></i>
        </div>)
    }
    return arr
  }

  render() {
    const remaining = this.props.icons.length - this.props.state.matchesMade
    const completion = Math.round(100.0 * ((this.props.icons === undefined) ? 0 : (this.props.state.matchesMade / this.props.icons.length)))
    const accuracy = this.props.state.attemptCount === 0 ? 0 : Math.round((this.props.state.matchesMade * 100) / (this.props.state.attemptCount))
    const elaspsed = this.props.state.elapsed < 60000 ? 0 : Math.floor(this.props.state.elapsed / 60000)

    return (
      <div className={this.props.state.showScore ? "container show" : "container"}>
        <div style={{ position: "relative" }}>
          <div className="title"
            style={{
              flex: 1,
              pointerEvents: this.props.state.winner ? "auto" : "none",
              cursor: this.props.state.winner ? "pointer" : "default",
              color: this.props.state.winner ? "#62A744" : "#1B3668"
            }}
            onClick={() => this.onReset(this)}>
            {this.props.state.language === "fr" ? "MÉMOIRE" : "REMEMBER"}
          </div>
          <div className="scoreboard" style={{ flex: 4 }}>
            <div className="scoreboard-grid">
              <div>
                <span className="title">{this.props.state.language === "fr" ? "TOTAL DES PAIRES" : "TOTAL PAIRS"}</span>
              </div>
              <div>
                <span className="title">{this.props.icons.length}</span>
              </div>
              <div>
                <span className="title">{this.props.state.language === "fr" ? "TROUVÉ" : "FOUND"}</span>
              </div>
              <div>
                <span className="title">{this.props.state.matchesMade}</span>
              </div>
              <div>
                <span className="title">{this.props.state.language === "fr" ? "RESTANT" : "REMAINING"}</span>
              </div>
              <div>
                <span className="title">{remaining}</span>
              </div>
              <div>
                <span className="title">{this.props.state.language === "fr" ? "TENTATIVES" : "ATTEMPTS"}</span>
              </div>
              <div>
                <span className="title">{this.props.state.attemptCount}</span>
              </div>
              <div>
                <span className="title">{this.props.state.language === "fr" ? "COMPLET" : "COMPLETION"}</span>
              </div>
              <div>
                <span className="title percent">{completion}</span>
              </div>
              <div>
                <span className="title">{this.props.state.language === "fr" ? "PRÉCISION" : "ACCURACY"}</span>
              </div>
              <div>
                <span className="title percent">{accuracy}</span>
              </div>
              <div>
                <span className="title">{this.props.state.language === "fr" ? "HEURE" : "TIME"}</span>
              </div>
              <div>
                <span className="title minutes">{elaspsed}</span>
              </div>
            </div>
          </div>
          <div className="found-cards" style={{ flex: 3, flexGrow: 3 }}>
            {this.renderHiddenIcons()}
          </div>
        </div>
      </div>
    );
  }
}
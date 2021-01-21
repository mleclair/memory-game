import React from "react";
import ScoreLabel from "../models/ScoreLabel";
import Resources from "../resources/Resources";

interface IProps {
  show: boolean,
  showScore: boolean,
  winner: boolean,
  icons: string[],
  found: string[],
  pairCount: number,
  foundCount: number,
  matchesMade: number,
  attemptCount: number,
  elapsed: number,
  selectedLanguage: string,
  scoreLabels: ScoreLabel[],
  onReset: () => void,
}
export default class Score extends React.Component<IProps> {
  
  constructor(props) {
    super(props)
    this.onReset = this.onReset.bind(this)
  }

  /*  Reset score on game reset  */
  onReset = () => this.props.onReset()

  /*  Renders a bin of distinct icons, hidden, to be revealed when a match on the board is made  */
  renderHiddenIcons(): React.Component[] {
    let arr = []

    for (let i = 0; i < this.props.icons.length; i++) {
      arr.push(
        <div key={"f" + i} ref={"found-" + this.props.icons[i]} className={this.props.found.includes(this.props.icons[i]) ? "found" : ""}>
          <i key={"fi" + i} className={"ion ion-md-" + this.props.icons[i]}></i>
        </div>)
    }
    return arr
  }

  render() {
    const remaining = this.props.icons.length - this.props.matchesMade
    const completion = Math.round(100.0 * ((this.props.icons === undefined) ? 0 : (this.props.matchesMade / this.props.icons.length)))
    const accuracy = this.props.attemptCount === 0 ? 0 : Math.round((this.props.matchesMade * 100) / (this.props.attemptCount))
    const elaspsed = (this.props.elapsed < 60000) ? 0 : Math.floor(this.props.elapsed / 60000)

    const labelTitle = Resources.scoreLabels.find(sl => sl.labelType === "game-title").displayNames
    const labelTotalPairs = Resources.scoreLabels.find(sl => sl.labelType === "total-pairs").displayNames
    const labelFound = Resources.scoreLabels.find(sl => sl.labelType === "found").displayNames
    const labelRemaining = Resources.scoreLabels.find(sl => sl.labelType === "remaining").displayNames
    const labelAttempts = Resources.scoreLabels.find(sl => sl.labelType === "attempts").displayNames
    const labelCompletion = Resources.scoreLabels.find(sl => sl.labelType === "completion").displayNames
    const lableAccuracy = Resources.scoreLabels.find(sl => sl.labelType === "accuracy").displayNames
    const labelTime = Resources.scoreLabels.find(sl => sl.labelType === "time").displayNames

    return (
      <div className={this.props.showScore ? "container show" : "container"}>
        <div style={{ position: "relative" }}>
          <div className={this.props.winner ? "title winner" : "title"} style={{ flex: 1 }} onClick={() => this.onReset()}>
                {labelTitle.find(dn => dn.language === this.props.selectedLanguage).name}
          </div>
          <div className="scoreboard" style={{ flex: 4 }}>
            <div className="scoreboard-grid">
              <div>
                <span className="title">{labelTotalPairs.find(dn => dn.language === this.props.selectedLanguage).name}</span>
              </div>
              <div>
                <span className="title">{this.props.pairCount}</span>
              </div>
              <div>
                <span className="title">{labelFound.find(dn => dn.language === this.props.selectedLanguage).name}</span>
              </div>
              <div>
                <span className="title">{this.props.matchesMade}</span>
              </div>
              <div>
                <span className="title">{labelRemaining.find(dn => dn.language === this.props.selectedLanguage).name}</span>
              </div>
              <div>
                <span className="title">{remaining}</span>
              </div>
              <div>
                <span className="title">{labelAttempts.find(dn => dn.language === this.props.selectedLanguage).name}</span>
              </div>
              <div>
                <span className="title">{this.props.attemptCount}</span>
              </div>
              <div>
                <span className="title">{labelCompletion.find(dn => dn.language === this.props.selectedLanguage).name}</span>
              </div>
              <div>
                <span className="title percent">{completion}</span>
              </div>
              <div>
                <span className="title">{lableAccuracy.find(dn => dn.language === this.props.selectedLanguage).name}</span>
              </div>
              <div>
                <span className="title percent">{accuracy}</span>
              </div>
              <div>
                <span className="title">{labelTime.find(dn => dn.language === this.props.selectedLanguage).name}</span>
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
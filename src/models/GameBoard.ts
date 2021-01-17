import Utilities from "../resources/Utilities";
//import GameBoardName from "./GameBoardName";

export default class GameBoard {
  name: string;
  circles: string[];
  public pairs: string[];
  icons: string[];
  pairCount: number;

  constructor(name: string, circles: string[][], icons: string[]) {
    this.name = name
    this.circles = [];
    if (circles !== null && circles !== undefined) {
      var x = circles.reduce((accumulator, value) => accumulator.concat(value), []);

      if (x !== null && x !== undefined) this.circles = x;
    }
    this.pairCount = this.circles.filter(p => p !== "trans").length / 2
    this.icons = this.getRandomIcons(icons);
    this.pairs = this.randomizedCardPairs(this.icons);

    //this.getPairCount = this.getPairCount.bind(this)
    this.getRandomIcons = this.getRandomIcons.bind(this)
    this.randomizedCardPairs = this.randomizedCardPairs.bind(this)
  }
  
  //public getPairCount = () : number => this.circles.length / 2
    
  /*    */
  getRandomIcons(icons: string[]) {
    if (icons && icons.length > 0) {
      let ic = icons
      ic = Utilities.Shuffle(ic)
      return ic.slice(0, this.pairCount);
    }
    else {
      return []
    }
  }

  randomizedCardPairs(icons: string[]) {
    let cards = Utilities.Shuffle(icons)

    // Add them a second time to get pairs
    let pairs = cards.concat(cards)

    return Utilities.Shuffle(pairs);
  }
}
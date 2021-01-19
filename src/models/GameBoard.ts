import Utilities from "../resources/Utilities";

export default class GameBoard {
  name: string;
  circles: string[];
  pairs: string[];
  icons: string[];
  pairCount: number;

  constructor(name: string, circles: string[][], icons: string[]) {
    this.name = name
    this.circles = [];
    if (circles && circles.length > 0) {
      var x = circles.reduce((accumulator, value) => accumulator.concat(value), []);

      if (x !== null && x !== undefined) this.circles = x;
    }
    else {
      this.circles = []
    }
    this.pairCount = this.circles.filter(p => p !== "trans").length / 2
    this.icons = this.getRandomIcons(icons);
    this.pairs = this.randomizedCardPairs(this.icons);

    this.getRandomIcons = this.getRandomIcons.bind(this)
    this.randomizedCardPairs = this.randomizedCardPairs.bind(this)
  }
    
  /*  Of the available icons, get the correct number for selected game  */
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

  /*  Shuffle the icons, pair them, then shuffle again for good measure  */
  randomizedCardPairs(icons: string[]) {
    let cards = Utilities.Shuffle(icons)

    // Add them a second time to get pairs
    let pairs = cards.concat(cards)

    return Utilities.Shuffle(pairs);
  }
}
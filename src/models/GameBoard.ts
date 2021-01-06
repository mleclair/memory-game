import Utilities from "../resources/Utilities";

export default class GameBoard {
  name: string;
  displayNames: string[][];
  include: boolean;
  circles: string[];
  public pairs: string[];
  icons: string[];

  constructor(name: string, displayNames: string[][], include: boolean, circles: string[][], icons: string[]) {
    this.name = name;
    this.displayNames = displayNames;
    this.include = include;
    this.circles = circles.reduce((accumulator, value) => accumulator.concat(value), []);
    this.icons = this.getRandomIcons(icons);
    this.pairs = this.randomizedCardPairs(this.icons);

    this.getPairCount = this.getPairCount.bind(this)
    this.getRandomIcons = this.getRandomIcons.bind(this)
    this.randomizedCardPairs = this.randomizedCardPairs.bind(this) 
  }
  
  public getDisplayName(lang: string) {
      let x = this.displayNames.find(f => f[0] === lang);
      return x && x.length === 2 ? x[1] : "";
  }
  
  public getPairCount = () : number => this.circles.length / 2
    
  /*    */
  getRandomIcons(icons: string[]) {
    let ic = icons
    ic = Utilities.Shuffle(ic)
    return ic.slice(0, this.getPairCount());
  }

  randomizedCardPairs(icons: string[]) {
    let cards = Utilities.Shuffle(icons)

    // Add them a second time to get pairs
    let pairs = cards.concat(cards)

    return Utilities.Shuffle(pairs);
  }
}
export default class GameBoardName {
  name: string;
  displayNames: string[][];
  include: boolean;

  constructor(name: string, displayNames: string[][], include: boolean) {
    this.name = name
    this.displayNames = displayNames
    this.include = include
  }
    
  public getDisplayName(lang: string) {
    let x = this.displayNames.find(f => f[0] === lang);
    return x && x.length === 2 ? x[1] : "";
  }
}
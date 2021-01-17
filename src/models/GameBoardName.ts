import DisplayName from "./DisplayName";

export default class GameBoardName {
  public name: string;
  public displayNames: DisplayName[];
  public include: boolean;

  constructor(name: string, displayNames: DisplayName[], include: boolean) {
    this.name = name
    this.include = include
    this.displayNames = displayNames
  }
}
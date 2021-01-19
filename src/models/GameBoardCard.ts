export default class GameBoardCard {
    name: string;
    circles: string[][]

    constructor(name: string, circles: string[][]) {
        this.name = name
        this.circles = circles
    }
}
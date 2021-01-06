export default class GameBoard {
    name: string;
    displayNames: string[][];
    include: boolean;
    circles: number[];

    constructor(name: string, displayNames: string[][], include: boolean, circles: number[][]) {
        this.name = name;
        this.displayNames = displayNames;
        this.include = include;
        this.circles = circles.reduce((accumulator, value) => accumulator.concat(value), []);
    }
    
    public getDisplayName(lang: string) {
        let x = this.displayNames.find(f => f[0] === lang);
        return x && x.length === 2 ? x[1] : "";
    }
    
    public getPairCount = () : number => this.circles.length / 2
}
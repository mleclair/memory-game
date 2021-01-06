export default class GameBoard {
    name: string;
    displayNames: string[][];
    include: boolean;
    circles: number[][];

    constructor(name: string, displayNames: string[][], include: boolean, circles: number[][]) {
        this.name = name;
        this.displayNames = displayNames;
        this.include = include;
        this.circles = circles;
    }
    
    public getDisplayName(lang: string) {
        let x = this.displayNames.find(f => f[0] === lang);

        if (x && x.length === 2) {
            return x[1]
        } else {
            return "";
        }
    }
    
    public getPairCount() : number {
        return this.circles.reduce((accumulator, value) => accumulator.concat(value), []).length;
    }
}
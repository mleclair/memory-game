import DisplayName from "./DisplayName"

export default class ScoreLabel {
    public labelType: string
    public displayNames: DisplayName[]

    constructor(labelType: string, displayNames: DisplayName[]) {
        this.labelType = labelType
        this.displayNames = displayNames
    }
}
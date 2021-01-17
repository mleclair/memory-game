import React from "react";
import GameBoardSelector from "./GameBoardSelector";
import LanguageSelector from "./LanguageSelector";
import Resources from "../resources/Resources";

interface IProps {
    onMenuClick: (event: Object) => void,
    onGameBoardSelectionChange: (name: string) => void,
    onLanguageSelectionChange: (name: string ) => void,
    isMenuOpen: boolean,
    selectedGameName: string,
    selectedLanguage: string
}
 
export default class Menu extends React.Component<IProps> {
    constructor(props) {
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this)

        this.onGameBoardSelectionChange = this.onGameBoardSelectionChange.bind(this)
        this.onLanguageSelectionChange = this.onLanguageSelectionChange.bind(this)

        this.isMenuOpen = props.isMenuOpen
        this.selectedLanguage = props.selectedLanguage
        this.selectedGameName = props.selectedGameName
    }

    isMenuOpen: boolean
    selectedLanguage: string
    selectedGameName: string

    /*    */
    onMenuClick = (e) => this.props.onMenuClick(e)

    /*    */
    onGameBoardSelectionChange(value) {
        this.props.onGameBoardSelectionChange(value)
    }

    /*    */
    onLanguageSelectionChange(name) {
        this.props.onLanguageSelectionChange(name)
        this.setState({ selectedLanguage: name })
    }

    render() {
        return (
            <div className={this.props.isMenuOpen ? "visible" : "hidden"}>
                <div className="menu-options">
                    <ul>
                        <li className=""><i className="ion ion-md-settings" /></li>
                        <li className=""><i className="ion ion-md-information-circle" /></li>
                        <li className=""><i className="ion ion-md-stats" /></li>
                        <li className=""><i className="ion ion-md-switch" /></li>
                    </ul>
                </div>
                <div className="menu-option-panel">
                    <ul>
                        <li>
                            <GameBoardSelector isMenuOpen={this.props.isMenuOpen}
                                               selectedLanguage={this.props.selectedLanguage}
                                               selectedGameName={this.props.selectedGameName}
                                               gameBoardNames={Resources.gameBoardNames}
                                               onGameBoardSelectionChange={this.onGameBoardSelectionChange} />
                        </li>
                        <li>
                            <LanguageSelector selectedLanguage={this.props.selectedLanguage}
                                              languageSettings={Resources.languageSettings}
                                              onLanguageSelectionChange={this.onLanguageSelectionChange} />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
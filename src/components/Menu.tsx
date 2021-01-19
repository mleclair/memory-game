import React from "react";
import GameBoardSelector from "./GameBoardSelector";
import LanguageSelector from "./LanguageSelector";
import Resources from "../resources/Resources";

interface IProps {
    onHamburgerMenuClick: (event: Object) => void,
    onGameBoardNameSelectionChange: (name: string) => void,
    onLanguageSelectionChange: (name: string ) => void,
    isMenuOpen: boolean,
    selectedGameBoardName: string,
    selectedLanguage: string
}
 
export default class Menu extends React.Component<IProps> {
    constructor(props) {
        super(props);

        this.onHamburgerMenuClick = this.onHamburgerMenuClick.bind(this)
        this.onGameBoardNameSelectionChange = this.onGameBoardNameSelectionChange.bind(this)
        this.onLanguageSelectionChange = this.onLanguageSelectionChange.bind(this)

        this.isMenuOpen = props.isMenuOpen
        this.selectedLanguage = props.selectedLanguage
        //this.selectedGameBoardName = props.selectedGameBoardName
    }

    isMenuOpen: boolean
    selectedLanguage: string
    //selectedGameBoardName: string

    /*    */
    onHamburgerMenuClick = (e) => this.props.onHamburgerMenuClick(e)

    /*    */
    onGameBoardNameSelectionChange(name: string) {
        this.props.onGameBoardNameSelectionChange(name)
        //this.props.resetBoard()
        //alert(name)
    }

    /*    */
    onLanguageSelectionChange(name) {
        this.setState({ selectedLanguage: name })
        this.props.onLanguageSelectionChange(name)
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
                                               selectedGameBoardName={this.props.selectedGameBoardName}
                                               gameBoardNames={Resources.gameBoardNames}
                                               onGameBoardNameSelectionChange={this.onGameBoardNameSelectionChange} />
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
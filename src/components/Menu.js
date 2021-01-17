import React from "react";
import GameBoardSelector from "./GameBoardSelector";
import LanguageSelector from "./LanguageSelector";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this)

        this.onGameBoardSelectionChange = this.onGameBoardSelectionChange.bind(this)
        this.onLanguageSelectionChange = this.onLanguageSelectionChange.bind(this)

        this.state = {
            isMenuOpen: props.state.isMenuOpen,
            selectedGameName: props.state.selectedGameName,
            gameBoardNames: props.gameBoardNames,
            languageSettings: props.languageSettings,
            selectedLanguage: props.state.selectedLanguage
        }
    }

    onMenuClick = (e) => this.props.onMenuClick(e)

    onGameBoardSelectionChange(value) {
        this.props.onGameBoardSelectionChange(value)
    }

    onLanguageSelectionChange(name) {
        this.props.onLanguageSelectionChange(name)
        //this.setState({ selectedLanguage: name })
        //alert(this.state.selectedLanguage)
    }

    render() {
        return (
            <div className={this.props.state.isMenuOpen ? "visible" : "hidden"}>
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
                            <GameBoardSelector state={this.state}
                                               gameBoardNames={this.props.gameBoardNames}
                                               onGameBoardSelectionChange={this.onGameBoardSelectionChange}
                                               onLanguageSelectionChange={this.onLanguageSelectionChange} />
                        </li>
                        <li>
                            <LanguageSelector state={this.state}
                                              languageSettings={this.props.languageSettings}
                                              onLanguageSelectionChange={this.onLanguageSelectionChange} />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
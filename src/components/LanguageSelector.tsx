import React from "react";
import LanguageSetting from "../models/LanguageSetting"
//import Utilities from "../resources/Utilities";


interface Props {
    languageSettings: LanguageSetting[],
    onLanguageSelectionChange
}

interface State {
    selectedLanguage: string
}

export default class LanguageSelector extends React.Component<Props, State> {
    constructor(props) {
        super(props)
      
        this.onLanguageSelectionChange = this.onLanguageSelectionChange.bind(this)

        this.state = {
          selectedLanguage: props.state.selectedLanguage
        }

        this.languageSettings = props.languageSettings
    }

    languageSettings: LanguageSetting[]

    /*      */
    onLanguageSelectionChange(event) {
        var val = event.target.value;
        //alert(val)
        this.props.onLanguageSelectionChange(val)
        this.setState({ selectedLanguage: val })
        //alert(this.state.selectedLanguage)
    }

    render() {
        return (
            <select id="gameSelector" onChange={this.onLanguageSelectionChange} value={this.state.selectedLanguage}>
                {this.languageSettings.map(function(languageSetting: LanguageSetting) {
                    return <option value={languageSetting.language}>{languageSetting.name}</option>
                })}
            </select>
        )
    }
}
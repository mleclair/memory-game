import React from "react";
import LanguageSetting from "../models/LanguageSetting"
//import Utilities from "../resources/Utilities";


interface Props {
    languageSettings: LanguageSetting[],
    onLanguageSelectionChange,
    selectedLanguage: string
}

// interface State {
//     selectedLanguage: string
// }

export default class LanguageSelector extends React.Component<Props> {
    constructor(props) {
        super(props)
      
        this.onLanguageSelectionChange = this.onLanguageSelectionChange.bind(this)

        // this.state = {
        //   selectedLanguage: props.state.selectedLanguage
        // }

        this.selectedLanguage = props.selectedLanguage
        this.languageSettings = props.languageSettings
    }

    languageSettings: LanguageSetting[]
    selectedLanguage: string
    
    /*      */
    onLanguageSelectionChange(event) {
        var val = event.target.value;
        //alert(val)
        this.props.onLanguageSelectionChange(val)
        this.setState({ selectedLanguage: val })
    }

    render() {
        return (
            <select id="gameSelector" onChange={this.onLanguageSelectionChange} value={this.props.selectedLanguage}>
                {this.languageSettings.map(function(languageSetting: LanguageSetting) {
                    return <option value={languageSetting.language}>{languageSetting.name}</option>
                })}
            </select>
        )
    }
}
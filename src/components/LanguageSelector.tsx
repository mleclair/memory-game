import React from "react";
import LanguageSetting from "../models/LanguageSetting"

interface Props {
    languageSettings: LanguageSetting[],
    onLanguageSelectionChange,
    selectedLanguage: string
}

export default class LanguageSelector extends React.Component<Props> {
    constructor(props) {
        super(props)
      
        this.onLanguageSelectionChange = this.onLanguageSelectionChange.bind(this)

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

    /*  Renders the select options from datasource  */
    renderOptions(): React.Component[] {
        let arr = []
        let i = 0
        for (let languageSetting of this.languageSettings)
        {
            arr.push(<option key={i++} value={languageSetting.language}>{languageSetting.name}</option>)
        }
        return arr
    }

    render() {
        return (
            <select id="gameSelector" onChange={this.onLanguageSelectionChange} value={this.props.selectedLanguage}>
                {this.renderOptions()}
            </select>
        )
    }
}
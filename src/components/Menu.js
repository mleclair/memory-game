import React from "react";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this)

        this.state = {
            isMenuOpen: props.state.isMenuOpen
            //alert('chngd')
        }
    }

    onMenuClick() {
        this.props.onMenuClick()
    }

    /*  Render Menu  */
    render() {
        return (
            <div className={this.props.state.isMenuOpen ? "visible" : "hidden"} />
        );
    }
}


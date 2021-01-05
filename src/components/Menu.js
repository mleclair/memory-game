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
            <div className={this.props.state.isMenuOpen ? "visible" : "hidden"}>
                <div>
                    <ul>
                        <li className=""><i className="ion ion-md-settings" /></li>
                        <li className=""><i className="ion ion-md-information-circle" /></li>
                        <li className=""><i className="ion ion-md-stats" /></li>
                        <li className=""><i className="ion ion-md-switch" /></li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        );
    }
}


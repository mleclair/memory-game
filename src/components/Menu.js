import React from "react";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this)

        this.onGameBoardSelectionChange = this.onGameBoardSelectionChange.bind(this)

        this.state = {
            isMenuOpen: props.state.isMenuOpen,
            selectedGameName: props.state.selectedGameName
        }
    }

    onMenuClick = (e) => this.props.onMenuClick(e)

    onGameBoardSelectionChange(event) {
        var val = event.target.value;
        //alert(val)
        this.props.onGameBoardSelectionChange(val)
        this.setState({ selectedGameName: val })
    }

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
                    <ul>
                        <li>
                            <select id="selectedGame" onChange={this.onGameBoardSelectionChange} value={this.state.selectedGameName}>
                                <option value="ice-cube">Ice Cube</option>
                                <option value="jet">Jet</option>
                                <option value="letterM">Letter M</option>
                                <option value="numbris">Forgotten</option>
                                
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

// var mydropDown = React.createClass({
//     getInitialState: function() {
//         return { value: "select" }
//     },
//     change: function(event) {
//         this.setState({ selectedGameName: event.target.value })
//     },
//     render: function() {
//         return (
//             <select id="selectedGame" onChange={this.onGameBoardSelectionChange} value={this.state.selectedGameName}>
//                 <option value="ice-cube">Ice Cube</option>
//                 <option value="jet">Jet</option>
//                 <option value="letterM">Letter M</option>
//                 <option value="numbris">Forgotten</option>
//             </select>
//         );
//     }
// })



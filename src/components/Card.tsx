import * as React from "react";
import * as ReactDOM from "react-dom";

interface State {
  className: string,
  hovering: boolean
}

interface Props {
  value: string,
  onClick: function name(params:type) {
    
  }
}

export default class Card extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      className: props.value.circle,
      hovering: false
    }
  }

  render() {
    // const leave ="webkitTransform: 'translateZ(0) translateY(0) scaleX(1.5) scaleY(1.5)', msTransform: 'translateZ(0) scale(1.5)', transform: 'translateZ(0) translateY(0) scaleX(1.5) scaleY(1.5)', zIndex: 1000"
    // const hover = "animationTimingFunction: 'ease-in-out', transitionDuration: 0.4, webkitTransform: 'translateZ(0) scaleX(-1) scaleY(1)', msTransform: 'translateZ(0) scale(1)' transform: 'translateZ(0) translateY(0) scaleX(-1) scaleY(1)'"

    // const onMouseEnter = () => this.setState({hovering: true})
    // const onMouseLeave = () => this.setState({hovering: false})
    // styles={this.state.hovering ? {hover} : {leave}}
    return (
      <div>
        <div tabIndex={this.props.value.circle === "trans" ? undefined : this.props.value.id}
          className={this.state.className}
          onClick={this.props.onClick}
        //  onMouseEnter={onMouseEnter}
        //  onMouseLeave={onMouseLeave}
        >
          {this.props.value.circle !== "trans" &&
            <i key={this.props.value.iconUniqueId} className={"ion ion-md-" + this.props.value.icon}></i>
          }
        </div>
      </div>
    )
  }
}
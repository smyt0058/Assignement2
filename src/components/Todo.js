import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";


class Todo extends Component {
    render() {
        return (
            <li className={this.props.status ? "done" : "open"} id={"todo-" + this.props.id}>
                <button className="todo" onClick={this.props.statusToggle}>{this.props.status ? "✅" : "❎"}</button>
                {this.props.text}
            </li>
        )
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        statusToggle : () => dispatch(actions.statusToggle(ownProps.id))
    };
}

export default connect(undefined,mapDispatchToProps)(Todo);
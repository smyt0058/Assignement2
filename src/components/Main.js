import React, {Component} from "react";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";
import * as actions from "../actions";
import { connect } from "react-redux";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todolist></Todolist>
                <AddNewTodo/>
            </div>
        );
    }
}
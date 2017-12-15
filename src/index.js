
require("./main.scss");

import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";


let state = {
     todoList: [
         {key: 1, id: 1, text: "Learn React", status: 1},
         {key: 2, id: 2, text: "Learn Redux", status: 1},
         {key: 3, id: 3, text: "Reduxify this app", status: 0},
         {key: 4, id: 4, text: "Learn React Native", status: 0}
     ],
     addTodoValue: ""
 };


let store = createStore(reducers, state);

render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("react-app")
);
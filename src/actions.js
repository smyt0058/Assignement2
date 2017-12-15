
export const TOGGLE_STATUS = "TOGGLE_STATUS";

export const ADD_TODO_CHANGED = "ADD_TODO_CHANGED";

export const SAVE_NEW_TODO = "SAVE_NEW_TODO";


export function statusToggle(id){
    return {
        type: TOGGLE_STATUS,
        id: id
    };
}

export function addTodoChanged(value){
    return {
        type: ADD_TODO_CHANGED,
        value: value
    };
}

export function saveNewTodo(){
    return {
        type: SAVE_NEW_TODO
    };
}
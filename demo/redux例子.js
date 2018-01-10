import redux from 'redux';

const reducer = function (state, action) {
    switch (action.type) {
        case 'add_Todo':
            return state.concat(action.text);
        default:
            return state;
    }
};

const addTodo = function (text) {//actionAreator
    return {
        type: 'add_Todo',
        text: text
    };
};

const store = redux.createStore(reducer, []);

store.dispatch(addTodo('xxx'));
store.getState();
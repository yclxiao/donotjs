import React from "react";
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import reducers from "./reducers";
import Counter from "./components/Counter";

const store = createStore(reducers,1);

const render = () =>
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: "INCREMENT" })}
            onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />,
        document.getElementById("root")
    );
render();

store.subscribe(render);

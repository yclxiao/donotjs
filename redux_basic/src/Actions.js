import * as ActionTypes from './ActionTypes.js';

export const increment = (counterCaption) => {
    return {
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    };
};

export const decrement = (counterCaption) => {
    return {
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    };
};

export const incrementAsyn = (counterCaption) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({
                type: ActionTypes.INCREMENT,
                counterCaption: counterCaption
            })
        }, 3000)
    }
}
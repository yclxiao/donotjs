function createThunkMiddleware(extraArgument) {
    // return ({ dispatch, getState }) => next => action => {
    //     if (typeof action === 'function') {
    //         return action(dispatch, getState, extraArgument);
    //     }

    //     return next(action);
    // };

    return ({ dispatch, getState }) => {
        return function nextFunction(next){
            return function actionFunction(action) {
                if(typeof action === 'function') {
                    return action(dispatch, getState, extraArgument)
                }

                return next(action)
            }
        }
    }
}

const thunk = createThunkMiddleware();
export default thunk;
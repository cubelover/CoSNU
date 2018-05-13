import * as actions from './actions';
import { combineReducers } from 'redux';

const user_state = (user_state = {}, action) => {
    switch(action.type) {
        case actions.USER_LOGOUT:
            return {};
        case actions.SET_USER_INFO:
            return {"id": action.id, "username": action.username, "email": action.email, "lectures": action.lectures}
        /*will be erased*/
        case actions.USER_LOGIN:
            return {"username": action.username}
        default:
            return user_state;
    }
}

const cosnu_reducer = combineReducers({
    user_state
});
/*
const promises_reducer = combineReducers({
    promise_state,
    user_state
});
*/
    
export default cosnu_reducer;

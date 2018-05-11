/*
import * as actions from './actions';
import { combineReducers } from 'redux';

const promise_state = (promise_state = {'inviter':[], 'invitee':[]}, action) => {
    switch(action.type) {
        case actions.REPLACE_PROMISE:
            return action.promise_list;
        case actions.USER_LOGOUT:
            return {'inviter':[], 'invitee':[]};
        default:
            return promise_state;
    }
}
const user_state = (user_state = {}, action) => {
    switch(action.type) {
        case actions.USER_LOGOUT:
            return {};
        case actions.USER_LOGIN:
            return {'username':action.username, 'password':action.password, 'userid':action.userid};
        default:
            return user_state;
    }
}

const promises_reducer = combineReducers({
    promise_state,
    user_state
});

export default promises_reducer;
*/
import * as actions from './actions';
import { combineReducers } from 'redux';

const initialState = {pk: 0, username: "", email: "", token: "", lectures: [], currunt_articles:[]}

const user_state = (user_state = initialState, action) => {
    switch(action.type) {
        case actions.SET_USERINFO:
            return {pk: action.pk, username: action.username, email: action.email, token: action.token, lectures: action.lectures, currunt_articles:[]}
        case actions.SET_ARTICLES:
            return {...user_state, currunt_articles: action.articles}
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

import * as actions from './actions';
import { combineReducers } from 'redux';

const initialState = {
    pk: 0, 
    username: "", email: "", token: "", lectures: [], 
    current_articles:[], 
    current_article:{
        id: 0,
        title: "",
        author: "",
        create_time: "",
        contents: "",
        comments: []
    }
}
  
const user_state = (user_state = initialState, action) => {
    switch(action.type) {
        case actions.LOGIN_FAIL:
        case actions.USER_LOGOUT:
            return {...user_state, "pk": 0, "username": "", "email": "", "token": "", "lectures": [], current_articles:[]}
        case actions.SET_USERINFO:
            return {...user_state, pk: action.pk, username: action.username, email: action.email, token: action.token, lectures: action.lectures}
        case actions.SET_ARTICLES:
            return {...user_state, current_articles: action.articles}
        case actions.SET_ARTICLE:
            return {...user_state, current_article: action.article}
        default:
            return user_state;
    }
}

const cosnu_reducer = combineReducers({
    user_state
});
    
export default cosnu_reducer;

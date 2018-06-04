import * as actions from './actions';
import { combineReducers } from 'redux';

const initialUserState = {
    pk: 0, username: "", email: "", token: "", lectures: [], 
}
const initialArticleState = {
    current_articles:{
        count: 0,
        next: null,
        previous: null,
        results: []
    }, 
    current_article:{
        id: 0,
        title: "",
        author: "",
        create_time: "",
        contents: "",
        comments: []
    },
}
  
const user_state = (user_state = initialUserState, action) => {
    switch(action.type) {
        case actions.LOGIN_FAIL:
        case actions.USER_LOGOUT:
            return initialUserState
        case actions.SET_USERINFO:
            return {...user_state, pk: action.pk, username: action.username, email: action.email, token: action.token, lectures: action.lectures}
        default:
            return user_state
    }
}
const article_state = (article_state = initialArticleState, action) => {
    switch(action.type) {
        case actions.LOGIN_FAIL:
        case actions.USER_LOGOUT:
            return initialArticleState
        case actions.SET_ARTICLES:
            return {...article_state, current_articles: action.articles}
        case actions.SET_ARTICLE:
            return {...article_state, current_article: action.article}
        default:
            return article_state
    }
}

const cosnu_reducer = combineReducers({
    user_state,
    article_state
});
    
export default cosnu_reducer;

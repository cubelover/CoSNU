import { takeEvery, put, call, fork, select } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

export function* watchValidateToken(action){
    const {token} = action
    const response = yield call (fetch, '/api/user/', {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
    })
    if(response.ok){
        const result = yield call(() => response.json())
        yield put(actions.set_userinfo(result.id, result.username, result.email, token, result.lectures))
        localStorage.setItem("auth-token", token)
    }
    else{
        yield put(actions.login_fail())
    }
}
export function* watchLogout(action) {
    yield put(actions.set_userinfo(0, "", "", "", []))
    localStorage.setItem("auth-token", "")
}

export function* watchLogin(action) {
    const {username, password} = action
    const response = yield call (fetch, '/api/obtain-auth-token/', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password})
    })
    if(response.ok) {
        const result = yield call(() => response.json())
        yield put(actions.validate_token(result.token))
    }
    else {
        yield put(actions.login_fail())
    }
}

export function* watchGetArticles(action){
    const token = yield select((state) => state.cosnu.user_state.token)
    const lecture_id = action.lecture_id
    const response = yield call (fetch, `/api/lecture/${lecture_id}/article/`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
    })
    if(response.ok){
        const result = yield call(() => response.json())
        yield put(actions.set_articles(result))
    }
    else{
        yield put(actions.login_fail())
    }
}

export function* watchGetArticle(action){
    const token = yield select((state) => state.cosnu.user_state.token)
    const {lecture_id, article_id} = action
    const response = yield call (fetch, `/api/lecture/${lecture_id}/article/${article_id}/`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
    })
    if(response.ok){
        const result = yield call(() => response.json())
        yield put(actions.set_article(result))
    }
    else{
        yield put(actions.login_fail())
    }
}

export default function* () {
    yield takeEvery(actions.USER_LOGIN, watchLogin)
    yield takeEvery(actions.VALIDATE_TOKEN, watchValidateToken)
    yield takeEvery(actions.GET_ARTICLES, watchGetArticles)
    yield takeEvery(actions.GET_ARTICLE, watchGetArticle)
    yield takeEvery(actions.USER_LOGOUT, watchLogout)
    
    let token = localStorage.getItem("auth-token")
    yield put(actions.validate_token(token))
}
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

export function* watchPostArticle(action){
    const token = yield select((state) => state.cosnu.user_state.token)
    const lecture_id = action.lecture_id

    const response = yield call (fetch, `/api/lecture/${lecture_id}/article/`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
    });
    if(response.ok){
        const result = yield call(() => response.json())
        console.log(result)
    }
    else{
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

export function* watchUSERINFO(action) {
    localStorage.setItem("user_info", JSON.stringify({"pk": action.pk, "username": action.username, "email": action.email, "token": action.token, lectures: action.lectures, current_articles:[]}));
}

export function* watchLoginFail(){
    localStorage.setItem("user_info", JSON.stringify({"pk": 0, "username": "", "email": "", "token": "", "lectures": [], current_articles:[]}));
}

export default function* () {
    yield takeEvery(actions.USER_LOGIN, watchLogin)
    yield takeEvery(actions.VALIDATE_TOKEN, watchValidateToken)
    yield takeEvery(actions.GET_ARTICLES, watchGetArticles)
    yield takeEvery(actions.GET_ARTICLE, watchGetArticle)
    // local storage related saga
    yield takeEvery(actions.SET_USERINFO, watchUSERINFO)
    yield takeEvery(actions.USER_LOGOUT, watchLoginFail)
    yield takeEvery(actions.LOGIN_FAIL, watchLoginFail)
}




/*
export function* getPromiseForId(userid) {
    const request = yield call (fetch, users_url, {method: 'GET'});
    if(request.status == 200) {
        const allList = yield call (request.json.bind(request));
        const user = allList.find((user)=>(user.id==userid));
        yield put(actions.replace_promise({'inviter':user['promises_as_inviter'], 'invitee':user['promises_as_invitee']}));
    }
}

export function* postPromise(user_state, sinceWhen, tilWhen, user2) {
    const username = user_state['username'], password = user_state['password'], userid = user_state['userid'];
    const getIdRequest = yield call (fetch, users_url, {method: 'GET'});
    const userList = yield call (getIdRequest.json.bind(getIdRequest));
    const user = userList.find((user)=>(user.username==user2));
    if(user != undefined) {
        const userId = user['id'];
        const hash = new Buffer(`${username}:${password}`).toString('base64');
        const response = yield call (fetch, post_url, {
            method: 'POST',
            headers: {
                'Authorization' : `Basic ${hash}`,
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({sinceWhen, tilWhen, 'user2':userId})
        });
        if(response.status == 201) {
            yield call(getPromiseForId, userid);
        }
    }
}

export function* watchPostPromise(action) {
    const { username, password, sinceWhen, tilWhen, user2 } = action;
    yield call(postPromise, username, password, sinceWhen, tilWhen, user2)
}*/

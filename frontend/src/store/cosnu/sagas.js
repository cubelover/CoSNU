import { takeEvery, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

const user_url = 'http://127.0.0.1:8000/user/';
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

export function* testLogin(username, password) {
    const hash = new Buffer(`${username}:${password}`).toString('base64');
    const response = yield call (fetch, login_url, {
        method: 'POST',
        headers: {
            'Authorization' : `Basic ${hash}`
        }
    });
    console.log(response.status);
    if(response.status == 400) {
        console.log("login success in sagas.js");
        const getIdRequest = yield call (fetch, users_url, {method: 'GET'});
        const userList = yield call (getIdRequest.json.bind(getIdRequest));
        const user = userList.find((user)=>(user.username==username));
        if(user != undefined) {
            const userid = user['id'];
            yield put(actions.user_login(username, password, userid));
            yield call(getPromiseForId, userid);
        }
    }
}
export function* watchPostPromise(action) {
    const { username, password, sinceWhen, tilWhen, user2 } = action;
    yield call(postPromise, username, password, sinceWhen, tilWhen, user2)
}
export function* watchTestLogin(action) {
    const {username, password} = action
    yield call(testLogin, username, password);        
}

export default function* () {
    yield takeEvery(actions.POST_PROMISE, watchPostPromise);
    yield takeEvery(actions.TEST_LOGIN, watchTestLogin);
}

*/
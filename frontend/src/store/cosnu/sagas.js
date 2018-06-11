import { takeEvery, put, call, fork, select, throttle } from 'redux-saga/effects'
import {delay} from 'redux-saga';
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
    else{
        yield put(actions.login_fail())
    }
}

export function* watchDelAlert() {
    yield put(actions.del_alert())
}
export function* watchVerifyEmail(action){
    const response = yield call (fetch, `/api/email-auth/`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'email': action.email
        })
	});
	
    console.log(response)
    if(response.ok){
        yield put(actions.send_alert('valid email'))
    }else if(response.status == 400){
        yield put(actions.send_alert('invalid email'))
    }
}
export function* watchSendAlert(action) {
    yield put(actions.add_alert(action.message))
    yield call(delay, 5000)
    yield put(actions.del_alert())
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
        body: JSON.stringify({
            'title': action.title,
            'contents': action.contents
        })
    });
    console.log(response)
    if(response.ok){
        console.log(response.status)
        yield put(actions.get_articles(lecture_id, 1))
    }
    else if(response.status == 401){
        yield put(actions.login_fail())
    }
}

export function* watchPostComment(action){
    const token = yield select((state) => state.cosnu.user_state.token)
    const lecture_id = action.lecture_id
    const article_id = action.article_id

    const response = yield call (fetch, `/api/lecture/${lecture_id}/article/${article_id}/comment/`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
        body: JSON.stringify({
            'contents': action.comment_content
        })
    });
    if(response.ok){
        console.log(response.status)
        yield put(actions.get_article(lecture_id, article_id))
    }
    else if(response.status == 401){
        yield put(actions.login_fail())
    }
}

export function* watchPostUpvote(action){
    const token = yield select((state) => state.cosnu.user_state.token)
    const {lecture_id, article_id, cur_page} = action

    const response = yield call (fetch, `/api/lecture/${lecture_id}/article/${article_id}/upvote/`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        }
    });
    if(response.ok){
        console.log(response.status)
        yield put(actions.get_article(lecture_id, article_id))
        yield put(actions.get_articles(lecture_id, cur_page))
    }
    else if(response.status == 401){
        yield put(actions.login_fail())
    }
}

export function* watchPostDownvote(action){
    const token = yield select((state) => state.cosnu.user_state.token)
    const {lecture_id, article_id, cur_page} = action

    const response = yield call (fetch, `/api/lecture/${lecture_id}/article/${article_id}/downvote/`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        }
    });
    if(response.ok){
        console.log(response.status)
        yield put(actions.get_article(lecture_id, article_id))
        yield put(actions.get_articles(lecture_id, cur_page))
    }
    else if(response.status == 401){
        yield put(actions.login_fail())
    }
}

export function* watchDeleteArticle(action){
    const token = yield select((state) => state.cosnu.user_state.token)
    const lecture_id = action.lecture_id
    const article_id = action.article_id

    const response = yield call (fetch, `/api/lecture/${lecture_id}/article/${article_id}/`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
    });
    if(response.ok){
        console.log(response.status)
        yield put(actions.get_articles(lecture_id, 1))
    }
    else if(response.status == 401){
        yield put(actions.login_fail())
    }
}

export function* watchGetArticles(action){
    const token = yield select((state) => state.cosnu.user_state.token)
    const {lecture_id, cur_page} = action
    const response = yield call (fetch, `/api/lecture/${lecture_id}/article/?page=${cur_page}`, {
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
    else if(response.status == 401){
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
    else if(response.status == 401){
        yield put(actions.login_fail())
    }
}

export function* watchSearchLecture(action) {
    const token = yield select((state) => state.cosnu.user_state.token)
    const {name, code, page} = action
    const response = yield call (fetch, `/api/lectures/?name=${name}&code=${code}&page=${page}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
    })
    if(response.ok){
        const result = yield call(() => response.json())
        yield put(actions.set_search_lecture(result))
    }else if(response.status == 401){
        yield put(actions.login_fail())
    }
}

export function* watchUSERINFO(action) {
    localStorage.setItem("user_info", JSON.stringify({"pk": action.pk, "username": action.username, "email": action.email, "token": action.token, lectures: action.lectures, current_articles:[],
    current_article:{
        id: 0,
        title: "",
        author: "",
        create_time: "",
        contents: "",
        comments: []
    }}));
}

export function* watchSignUp(action){

    const response = yield call (fetch, `/api/user/`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'username': action.username,
            'password': action.password,
            'email': action.email,
            'verify': action.verify_code
        })
    });
    if(response.ok){
    }
    else if(response.status == 401){
    }

}

export function* watchLoginFail() {
    localStorage.setItem("user_info", JSON.stringify({"pk": 0, "username": "", "email": "", "token": "", "lectures": [], current_articles:[],
    current_article:{
        id: 0,
        title: "",
        author: "",
        create_time: "",
        contents: "",
        comments: []
    }}));
}

export function* watchRegisterLecture(action) {
    const token = yield select((state) => state.cosnu.user_state.token)
    const {lecture_id, nickname, alias} = action
    const response = yield call (fetch, '/api/register/', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
        body: JSON.stringify({lecture:lecture_id, nickname, alias})
    })
    if(response.ok) {
        const result = yield call(() => response.json())
        console.log(response.status)
        yield put(actions.validate_token(token))
    }
    else if(response.status == 401){
        yield put(actions.login_fail())
    }
}


export default function* () {
    yield takeEvery(actions.USER_LOGIN, watchLogin)
    yield takeEvery(actions.VALIDATE_TOKEN, watchValidateToken)
    yield takeEvery(actions.GET_ARTICLES, watchGetArticles)
    yield takeEvery(actions.GET_ARTICLE, watchGetArticle)
    yield takeEvery(actions.POST_ARTICLE, watchPostArticle)
    yield takeEvery(actions.DELETE_ARTICLE, watchDeleteArticle)
    yield takeEvery(actions.POST_COMMENT, watchPostComment)
    yield takeEvery(actions.SET_USERINFO, watchUSERINFO)
    yield takeEvery(actions.USER_LOGOUT, watchLogout)
    yield takeEvery(actions.LOGIN_FAIL, watchLoginFail)
    yield takeEvery(actions.POST_UPVOTE, watchPostUpvote)
    yield takeEvery(actions.POST_DOWNVOTE, watchPostDownvote)
    yield takeEvery(actions.SIGN_UP, watchSignUp)
    
    yield takeEvery(actions.SEARCH_LECTURE, watchSearchLecture)
    yield takeEvery(actions.VERIFY_EMAIL, watchVerifyEmail)

    yield takeEvery(actions.REGISTER_LECTURE, watchRegisterLecture)
    
    yield takeEvery(actions.SEND_ALERT, watchSendAlert)
}

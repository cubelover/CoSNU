import { takeEvery, put, call, fork, select, throttle } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import {delay} from 'redux-saga';
import api from 'services/api'
import * as actions from './actions'


export function* watchTokenToUser(action){
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
        yield put(actions.send_alert('정상적으로 로그인 되었습니다.'))
    }
    else{
        yield put(actions.login_fail())
    }
}
export function* watchLogout(action) {
    yield put(actions.set_userinfo(0, "", "", "", []))
    yield put(actions.send_alert('정상적으로 로그아웃 되었습니다.'))
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
        yield put(actions.send_alert('올바른 아이디 혹은 비밀번호를 입력해주세요.'))
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
        yield put(actions.send_alert('메일이 전송되었습니다. 코드를 입력해주세요.'))
    }else if(response.status == 400){
        yield put(actions.send_alert('올바른 이메일을 입력하십시오. (@snu.ac.kr) '))
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

export function* watchPostReport(action){
    const token = yield select((state) => state.cosnu.user_state.token)
    const {lecture_id, article_id, title, contents, cur_page} = action

    const response = yield call (fetch, `/api/lecture/${lecture_id}/article/${article_id}/report/`, {
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
    if(response.ok){
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
    console.log(response.status);
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
        yield put(actions.send_alert('정상적으로 회원가입이 완료되었습니다.'))
        yield put(push('/'))
    }
    else if(response.status == 400){
        yield put(actions.send_alert('이미 존재하는 아이디거나, 인증코드가 올바르지 않습니다.'))
    }
}

export function* watchLoginFail() {
    yield put(actions.send_alert('로그인을 먼저 해주십시오.'))
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
        yield put(actions.token_to_user(token))
        yield put(actions.send_alert('정상적으로 등록 되었습니다.'))
    }
    else if(response.status == 401){
        yield put(actions.login_fail())
    }
    else if(response.status == 400){
        yield put(actions.send_alert('비정상적인 값이거나 이미 등록되어 있는 강의입니다.'))
    }
}
export function* watchModifyLecture(action) {
    const token = yield select((state) => state.cosnu.user_state.token)
    const {author_id, lecture_id, nickname, alias} = action
    console.log("saga", author_id)
    const response = yield call (fetch, `/api/author/${author_id}/`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
        body: JSON.stringify({nickname, alias})
    })
    if(response.ok) {
        yield put(actions.token_to_user(token))
        yield put(actions.send_alert('정상적으로 수정 되었습니다.'))
    }
    else if(response.status == 401){
        yield put(actions.login_fail())
    }
    else if(response.status == 400){
        yield put(actions.send_alert('정상적인 값을 입력해주세요.'))
    }
}
export function* watchDeleteLecture(action) {
    const token = yield select((state) => state.cosnu.user_state.token)
    const {author_id, lecture_id} = action
    const response = yield call (fetch, `/api/author/${author_id}/`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
    })
    if(response.ok) {
        yield put(actions.token_to_user(token))
        yield put(actions.send_alert('정상적으로 삭제 되었습니다.'))
    }
    else if(response.status == 401){
        yield put(actions.login_fail())
    }
}
export function* watchSetPassword(action) {
    const token = yield select((state) => state.cosnu.user_state.token)
    const {password} = action
    const response = yield call (fetch, `/api/user/set_password/`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + token
        },
        body: JSON.stringify({password})
    })
    if(response.ok) {
        yield put(actions.send_alert('정상적으로 변경되었습니다.'))
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
    yield takeEvery(actions.POST_REPORT, watchPostReport)
    yield takeEvery(actions.REGISTER_LECTURE, watchRegisterLecture)
    yield takeEvery(actions.SEND_ALERT, watchSendAlert)

    yield takeEvery(actions.TOKEN_TO_USER, watchTokenToUser)

    yield takeEvery(actions.MODIFY_LECTURE, watchModifyLecture)
    yield takeEvery(actions.DELETE_LECTURE, watchDeleteLecture)
    
    yield takeEvery(actions.SET_PASSWORD, watchSetPassword)

}

export const MODIFY_LECTURE = 'MODIFY_LECTURE'
export const DELETE_LECTURE = 'DELETE_LECTURE'
export const modify_lecture = (author_id, lecture_id, register_nickname, register_alias) => ({type: MODIFY_LECTURE, author_id, lecture_id, register_nickname, register_alias})
export const delete_lecture = (author_id, lecture_id) => ({type: DELETE_LECTURE, author_id, lecture_id})

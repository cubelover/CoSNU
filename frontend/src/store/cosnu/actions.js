export const USER_LOGIN = 'USER_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const VALIDATE_TOKEN = 'VALIDATE_TOKEN'

export const SET_USERINFO = 'SET_USERINFO'
export const USER_LOGOUT = 'USER_LOGOUT'
export const SIGN_UP = 'SIGN_UP'
export const VERIFY_EMAIL = 'VERIFY_EMAIL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_LECTUREINFO = 'SET_LECTUREINFO'

export const user_login = (username, password) => ({type: USER_LOGIN, username, password})
export const login_success = () => ({type: LOGIN_SUCCESS})
export const login_fail = () => ({type: LOGIN_FAIL})
export const validate_token = (token) => ({type: VALIDATE_TOKEN, token})

export const set_userinfo = (pk, username, email, token, lectures) => ({type: SET_USERINFO, pk, username, email, token, lectures})
export const user_logout = () => ({type: USER_LOGOUT})
export const sign_up = (username, password, email, verify_code) => ({type: SIGN_UP, username, password, email, verify_code})
export const verify_email = (email) => ({type: VERIFY_EMAIL, email});
export const set_password = (password, new_password) => ({type: SET_PASSWORD, password, new_password});
export const set_lectureinfo = () => ({type: SET_LECTUREINFO});

/*
export const REPLACE_PROMISE = 'REPLACE_PROMISE'
export const GET_ALL_PROMISE = 'GET_ALL_PROMISE'
export const POST_PROMISE = 'POST_PROMISE'

export const test_login = (username, password) => ({type: TEST_LOGIN,username,password})
export const user_login = (username, password, userid) => ({type: USER_LOGIN, username, password, userid})

export const user_logout = () => ({type: USER_LOGOUT})

export const replace_promise = (promise_list) => {
    return {
        type: REPLACE_PROMISE,
        promise_list
    }
}


export const post_promise = (username, password, sinceWhen, tilWhen, user2) => {
    return {
        type: POST_PROMISE,
        username, 
        password, 
        sinceWhen,
        tilWhen,
        user2
    }
}
*/
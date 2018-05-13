export const USER_LOGIN = 'USER_LOGIN_BEFORE_CHK'
export const SET_USER_INFO = 'SET_USER_INFO'
export const USER_LOGOUT = 'USER_LOGOUT'
export const SIGN_UP = 'SIGN_UP'
export const VERIFY_EMAIL = 'VERIFY_EMAIL'

export const user_login = (username, password) => ({type: USER_LOGIN, username, password})
export const set_user_info = (id, username, email, lectures) => ({type: SET_USER_INFO, id, username, email, lectures})
export const user_logout = () => ({type: USER_LOGOUT})
export const sign_up = (username, password, email, verify_code) => 
({type: SIGN_UP, username, password, email, verify_code})
export const verify_email = (email) => ({type: VERIFY_EMAIL, email});

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
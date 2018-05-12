export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const user_login = (id, username, email, lectures) => ({type: USER_LOGIN, id, username, email, lectures})
export const user_logout = () => ({type: USER_LOGOUT})

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
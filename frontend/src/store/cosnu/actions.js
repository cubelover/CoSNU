export const USER_LOGIN = 'USER_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const VALIDATE_TOKEN = 'VALIDATE_TOKEN'

export const SET_ARTICLE = 'SET_ARTICLE'
export const GET_ARTICLE = 'GET_ARTICLE'
export const SET_ARTICLES = 'SET_ARTICLES'
export const GET_ARTICLES = 'GET_ARTICLES'
export const POST_ARTICLE = 'POST_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'
export const POST_COMMENT = 'POST_COMMENT'
export const POST_UPVOTE = 'POST_UPVOTE'
export const POST_DOWNVOTE = 'POST_DOWNVOTE'

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
export const verify_email = (email) => ({type: VERIFY_EMAIL, email})
export const set_password = (password, new_password) => ({type: SET_PASSWORD, password, new_password})
export const set_lectureinfo = () => ({type: SET_LECTUREINFO})

export const set_article = (article) => ({type: SET_ARTICLE, article})
export const get_article = (lecture_id, article_id) => ({type: GET_ARTICLE, lecture_id, article_id})
export const set_articles = (articles) => ({type: SET_ARTICLES, articles})
export const get_articles = (lecture_id, cur_page) => ({type: GET_ARTICLES, lecture_id, cur_page})
export const post_article = (lecture_id, title, contents) => ({type: POST_ARTICLE, lecture_id, title, contents})
export const delete_article = (lecture_id, article_id) => ({type: DELETE_ARTICLE, lecture_id, article_id})
export const post_comment = (lecture_id, article_id, comment_content) => ({type: POST_COMMENT, lecture_id, article_id, comment_content})
export const post_upvote = (lecture_id, article_id) => ({type: POST_UPVOTE, lecture_id, article_id})
export const post_downvote = (lecture_id, article_id) => ({type: POST_DOWNVOTE, lecture_id, article_id})

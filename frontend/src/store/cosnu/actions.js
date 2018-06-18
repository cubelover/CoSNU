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
export const POST_REPORT = 'POST_REPORT'

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
export const post_upvote = (lecture_id, article_id, cur_page) => ({type: POST_UPVOTE, lecture_id, article_id, cur_page})
export const post_downvote = (lecture_id, article_id, cur_page) => ({type: POST_DOWNVOTE, lecture_id, article_id, cur_page})
export const post_report = (lecture_id, article_id, title, contents, cur_page) => ({type: POST_REPORT, lecture_id, article_id, title, contents, cur_page})


export const SEARCH_LECTURE = 'SEARCH_LECTURE'
export const SET_SEARCH_LECTURE = 'SET_SEARCH_LECTURE'
export const search_lecture = (search, page) => ({type: SEARCH_LECTURE, search, page})
export const set_search_lecture = (result) => ({type: SET_SEARCH_LECTURE, result})

export const DEL_ALERT = 'DEL_ALERT'
export const ADD_ALERT = 'ADD_ALERT'
export const SEND_ALERT = 'SEND_ALERT'
export const del_alert = () => ({type:DEL_ALERT})
export const add_alert = (message) => ({type:ADD_ALERT, message})
export const send_alert = (message) => ({type:SEND_ALERT, message})

export const REGISTER_LECTURE = 'REGISTER_LECTURE'
export const register_lecture = (lecture_id, nickname, alias) => ({type: REGISTER_LECTURE, lecture_id, nickname, alias})

export const TOKEN_TO_USER = 'TOKEN_TO_USER'
export const token_to_user = (token) => ({type: TOKEN_TO_USER, token})

export const MODIFY_LECTURE = 'MODIFY_LECTURE'
export const DELETE_LECTURE = 'DELETE_LECTURE'
export const modify_lecture = (author_id, lecture_id, nickname, alias) => ({type: MODIFY_LECTURE, author_id, lecture_id, nickname, alias})
export const delete_lecture = (author_id, lecture_id) => ({type: DELETE_LECTURE, author_id, lecture_id})

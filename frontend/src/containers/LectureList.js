import { connect } from 'react-redux'
import { LectureList } from 'components'
//import { test_login, user_logout } from '../store/promises/actions'

const mapStateToProps = (state) => (
    {}
    /*
    {user_state : state.promises.user_state}
    */
)
const mapDispatchToProps = (dispatch) => {
    return {

    }
    /*
    return {
        onLogin: (username, password) => {
            dispatch(test_login(username, password))
        },
        onLogout: () => {
            dispatch(user_logout()) 
        }
    }
    */
}
export default connect(mapStateToProps, mapDispatchToProps)(LectureList)

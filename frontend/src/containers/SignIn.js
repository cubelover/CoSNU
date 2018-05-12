import { connect } from 'react-redux'
import { SignIn } from 'components'

const mapStateToProps = (state) => ({user_state : state.cosnu.user_state})
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => {
            dispatch(test_login(username, password))
        },
        onLogout: () => {
            dispatch(user_logout()) 
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

import { connect } from 'react-redux'
import { SignIn } from 'components'

const mapStateToProps = (state) => (
    {user_state : state.cosnu.user_state}
)
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

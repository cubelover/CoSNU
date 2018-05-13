import { connect } from 'react-redux'
import { SignUpPage } from 'components'
import { set_password, set_lectureinfo } from '../store/cosnu/actions'


const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => {
    return {
        send_set_password: (password, new_password) => {
            dispatch(set_password(password, new_password))
        },
        send_set_lectureinfo: () => {
            dispatch(set_lectureinfo()) 
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)

import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { SignOut } from 'components'
import { SignIn } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AccountInfo = ( {user_state, action_login, action_logout}) => {
  console.log(user_state.username);
  return (
    <Wrapper>
      {
        user_state.username ? (<SignOut username={user_state.username} action_logout={action_logout}/>) : (<SignIn action_login={action_login}/>) 
      }
    </Wrapper>
  )
}

AccountInfo.propTypes = {
  reverse: PropTypes.bool,
}

export default AccountInfo

import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { SignOut } from 'components'
import { SignIn } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AccountInfo = ( {user_state, action_login, action_logout, children, ...props}) => {
  var testname = "";
  if(typeof(user_state) != undefined && user_state != null) {
    testname = user_state.username;
  }

  console.log(testname);
  if(testname == undefined)testname = ""
  console.log(typeof(testname))
  return (
    <Wrapper {...props}>
      {
        testname != "" ? (<SignOut username={testname} action_logout={action_logout}/>) : (<SignIn action_login={action_login}/>) 
      }
      {children}
    </Wrapper>
  )
}

AccountInfo.propTypes = {
  reverse: PropTypes.bool,
}

export default AccountInfo

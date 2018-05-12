import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { SignOut } from 'components'
import { SignIn } from 'components'
//import { SignIn } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AccountInfo = ( {user_state}) => {
  console.log(user_state)
  return (
    <Wrapper>
      <SignIn/>
      <SignOut/>
    </Wrapper>
  )
}

AccountInfo.propTypes = {
  reverse: PropTypes.bool,
}

export default AccountInfo

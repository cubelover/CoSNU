import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { SignIn, SignOut } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AccountInfo = () => {
  return (
    <Wrapper>
      <SignIn/>
      <SignOut/>
    </Wrapper>
  )
  /*
  return (
    <Wrapper {...props}>content</Wrapper>
  )
  */
}

AccountInfo.propTypes = {
  reverse: PropTypes.bool,
}

export default AccountInfo

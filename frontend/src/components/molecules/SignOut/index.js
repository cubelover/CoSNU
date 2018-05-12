import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SignOut = () => {
  return (
    <Wrapper>
      <span>Welcome User!</span>
      <Button>Sign Out</Button>
      <Button>Edit Profile</Button>
    </Wrapper>
  )
}

SignOut.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SignOut

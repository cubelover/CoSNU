import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SignIn = ({ children, ...props }) => {
  return (
    <Wrapper>
      <Input type="text"></Input>
      <Input type="password"></Input>
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </Wrapper>
  )
}

SignIn.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SignIn

import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import { Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SignOut = ( {username, action_logout, children, ...props}) => {
  const send_logout = () => {
    action_logout();
  }
  return (
    <Wrapper {...props}>
      <span>Welcome {username}!</span>
      <Button onClick={send_logout}>Sign Out</Button>
      <Link to = "/edit"><Button>Edit Profile</Button></Link>
      {children}
    </Wrapper>
  )
}

SignOut.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SignOut

import React, { PropTypes } from 'react'
import { Component } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Input, Button } from 'components'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SignIn = ({ action_login, children, ...props }) => {
  let username, password;
  const send_login = () => {
    if(username.value != undefined && password.value != undefined) {
      console.log(username.value);
      action_login(username.value, password.value);
      username.value = password.value = '';
    }
  }
  return (
    <Wrapper {...props}>
      <input type="text" placeholder="username" ref={(ref) => {username = ref;}}></input>
      <input type="password" placeholder="password" ref={(ref) => {password = ref}}></input>
      <Button onClick={send_login}>Sign In</Button>
      <Link to="/signup"><Button>Sign Up</Button></Link>
      {children}
    </Wrapper>
  )
}


SignIn.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SignIn

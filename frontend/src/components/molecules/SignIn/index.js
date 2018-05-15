import React, { PropTypes } from 'react'
import { Component } from 'react'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

import { Input, Button } from 'components'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const InputStyles = css`
  padding: .5rem .75rem;
  border: 1px solid #ccc;
  border-radius: .3rem;
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
      <Input type="text" placeholder="username" innerRef={(ref) => {username = ref;}}></Input>
      &nbsp;
      <Input type="password" placeholder="password" innerRef={(ref) => {password = ref}}></Input>
      &nbsp;
      <Button onClick={send_login}>Sign In</Button>
      &nbsp;
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

import React, { PropTypes } from 'react'
import { Component } from 'react'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

import { Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const InputStyles = css`
  padding: .5rem .75rem;
  border: 1px solid #ccc;
  border-radius: .3rem;
`

const InputBase = styled.input`${InputStyles}`

const SignIn = ({ action_login, children, ...props }) => {
  let username, password;
  const send_login = () => {
    if(username.value != undefined && password.value != undefined) {
      action_login(username.value, password.value);
      username.value = password.value = '';
    }
  }
  return (
    <Wrapper>
      <InputBase type="text" placeholder="username" ref={(ref) => {username = ref;}}></InputBase>
      &nbsp;
      <InputBase type="password" placeholder="password" ref={(ref) => {password = ref}}></InputBase>
      &nbsp;
      <Button onClick={send_login}>Sign In</Button>
      &nbsp;
      <Button>Sign Up</Button>
    </Wrapper>
  )
}


SignIn.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SignIn

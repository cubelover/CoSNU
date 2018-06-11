import React from 'react'

import { PageTemplate } from 'components'
import { Input, Button } from 'components'

const SignUpPage = ({ alert_state, action_verify_email, action_sign_up, children, ...props }) => {
  let username, password, confirm_password, email, verify_code;
  const send_verify_email = () => {
    if(email.value != undefined) {
      action_verify_email(email.value);
    }else{

    }
  }
  const send_sign_up = () => {
    if(username.value != undefined && password.value != undefined && confirm_password.value != undefined && email.value != undefined && verify_code.value != undefined && password.value == confirm_password.value) {
      action_sign_up(username.value, password.value, email.value, verify_code.value);
    }else{

    }
  }
  return (
    <PageTemplate>
      <h1>SignUpPage</h1>
      <Input type="text" placeholder="username" innerRef={(ref) => {username = ref;}}></Input>
      <Input type="password" placeholder="password" innerRef={(ref) => {password = ref;}}></Input>
      <Input type="password" placeholder="confirm_password" innerRef={(ref) => {confirm_password = ref;}}></Input>
      <Input type="text" placeholder="email" innerRef={(ref) => {email = ref;}}></Input>
      <Button onClick={send_verify_email}>Verify</Button>
      <span>{alert_state.message}</span>
      <Input type="text" placeholder="verify_code" innerRef={(ref) => {verify_code = ref;}}></Input>
      <Button onClick={send_sign_up}>Sign Up</Button>
      {children}
    </PageTemplate>
  )
}

export default SignUpPage

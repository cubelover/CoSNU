import React from 'react'

import { PageTemplate } from 'components'
import { LectureList } from 'components'
import { Button } from 'components'

const SignUpPage = ({ action_verify_email, action_sign_up }) => {
  let username, password, confirm_password, email, verify_code;
  const send_verify_email = () => {
    if(email.value != undefined) {
      console.log("SEND_VERIFY_EMAIL")
      action_verify_email(email.value);
    }else{

    }
  }
  const send_sign_up = () => {
    if(username.value != undefined && password.value != undefined && confirm_password.value != undefined && email.value != undefined && verify_code.value != undefined && password.value == confirm_password.value) {
      console.log("SEND_SIGN_UP")
      action_sign_up(username.value, password.value, email.value, verify_code.value);
    }else{

    }
  }
  return (
    <PageTemplate>
      <h1>SignUpPage</h1>
      <input type="text" placeholder="username" ref={(ref) => {username = ref;}}></input>
      <input type="password" placeholder="password" ref={(ref) => {password = ref;}}></input>
      <input type="password" placeholder="confirm_password" ref={(ref) => {confirm_password = ref;}}></input>
      <input type="text" placeholder="email" ref={(ref) => {email = ref;}}></input>
      <Button onClick={send_verify_email}>Verify</Button>
      <input type="text" placeholder="verify_code" ref={(ref) => {verify_code = ref;}}></input>
      <Button onClick={send_sign_up}>Sign Up</Button>
    </PageTemplate>
  )
}

export default SignUpPage

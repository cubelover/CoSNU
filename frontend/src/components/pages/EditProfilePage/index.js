import React from 'react'

import { PageTemplate } from 'components'
import { Button } from 'components'
import { Link } from 'react-router'

const EditProfilePage = ({children, ...props}) => {
  var lectures = [];
  for(var i=0; i<6; i++) lectures.push({
    lecture:{name: "Lecture" + i, id: i+1, code: "4190.309A / " + i, professor:"professor" + i, semester:"semester"+i},
    "nickname": "Nickname" + i,
    "alias": "Alias" + i,
  });

  let password, new_password, confirm_new_password;
  const send_set_password = () => {
    if(password.value != undefined && new_password.value != undefined && confirm_new_password.value != undefined && new_password.value == confirm_new_password.value) {
      console.log("SEND_SET_PASSWORD")
      action_set_password(password.value, new_password.value);
    }else{
    }
  }
  const send_set_lectureinfo = () => {
    console.log("SEND_SET_LECTUREINFO")
    //todo
  }
  return (
    <PageTemplate>
      <h1>EditProfilePage</h1>
      <input type="password" placeholder="password" ref={(ref) => {password = ref;}}></input>
      <input type="password" placeholder="new_password" ref={(ref) => {new_password = ref;}}></input>
      <input type="password" placeholder="confirm_new_password" ref={(ref) => {confirm_new_password = ref;}}></input>
      <Button onClick={send_set_password}>Change Password</Button>
      
      <table>
        <thead><tr>
          <td>name</td>
          <td>nickname</td>
          <td>alias</td>
        </tr></thead>
        <tbody>
          {lectures.map( (lecture) =>
            <tr key={lecture.lecture.id}>
              <td>{lecture.lecture.name}</td>
              <td><input type="text" value={lecture.nickname}></input></td>
              <td><input type="text" value={lecture.alias}></input></td>
            </tr>
          )}
        </tbody>
      </table>
      <Button onClick={send_set_lectureinfo}>Edit Lecture Information</Button>
    </PageTemplate>
  )
}

export default EditProfilePage

import React from 'react'

import { PageTemplate } from 'components'
import { Input, Button, Table, Tr, Th, Td } from 'components'
import { Link } from 'react-router'

const EditProfilePage = ({children, ...props}) => {
  var lectures = []
  for(var i=0; i<6; i++) lectures.push({
    lecture:{name: "Lecture" + i, id: i+1, code: "4190.309A / " + i, professor:"professor" + i, semester:"semester"+i},
    "nickname": "Nickname" + i,
    "alias": "Alias" + i,
  })

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
      <Input type="password" placeholder="password" innerRef={(ref) => {password = ref;}}></Input>
      <Input type="password" placeholder="new_password" innerRef={(ref) => {new_password = ref;}}></Input>
      <Input type="password" placeholder="confirm_new_password" innerRef={(ref) => {confirm_new_password = ref;}}></Input>
      <Button onClick={send_set_password}>Change Password</Button>
      
      <Table>
        <thead><tr>
          <Th>name</Th>
          <Th>nickname</Th>
          <Th>alias</Th>
        </tr></thead>
        <tbody>
          {lectures.map( (lecture) =>
            <tr key={lecture.lecture.id}>
              <Td>{lecture.lecture.name}</Td>
              <Td><Input type="text" value={lecture.nickname}></Input></Td>
              <Td><Input type="text" value={lecture.alias}></Input></Td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button onClick={send_set_lectureinfo}>Edit Lecture Information</Button>
      {children}
    </PageTemplate>
  )
}

export default EditProfilePage

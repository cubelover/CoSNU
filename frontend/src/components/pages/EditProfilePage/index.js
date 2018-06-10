import React from 'react'

import { LectureList } from 'components'
import { PageTemplate } from 'components'
import { Input, Button } from 'components'
import { Link } from 'react-router'

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    //var {lecture_id, article_id} = this.props.params;
    //this.props.get_article(lecture_id, article_id)
  }
  componentWillReceiveProps(nextProps) {
    //if(nextProps.params.lecture_id == this.props.params.lecture_id && nextProps.params.article_id == this.props.params.article_id) return;
    //this.props.get_article(nextProps.params.lecture_id, nextProps.params.article_id)
  }
  render() {
    var {user_state, search_state} = this.props
    var {action_set_password, action_set_lectureinfo, action_search_lecture} = this.props
    var {location, children, ...props} = this.props
    let cur_page = (location.query.page ? parseInt(location.query.page, 10) : 1);
    if(isNaN(cur_page)) cur_page = 1;
    var user_lectures = {count: user_state.lectures.length, results:[]}
    for(var i=0; i<user_state.lectures.length; i++) user_lectures.results.push(user_state.lectures[i].lecture);

    let password, new_password, confirm_new_password
    const send_set_password = () => {
      if(password.value != undefined && new_password.value != undefined && confirm_new_password.value != undefined && new_password.value == confirm_new_password.value) {
        console.log("SEND_SET_PASSWORD")
        action_set_password(password.value, new_password.value)
      }else{
      }
    }
    const send_set_lectureinfo = () => {
      console.log("SEND_SET_LECTUREINFO")
      //todo
    }
    let lecture_name, lecture_code;
    const send_search_lecture = () => {
      action_search_lecture(lecture_name.value, lecture_code.value)
    }
    return (
      <PageTemplate>
        <h1>EditProfilePage</h1>

        <h2>Change Password</h2>
        <Input type="password" placeholder="password" innerRef={(ref) => {password = ref;}}></Input>
        <Input type="password" placeholder="new_password" innerRef={(ref) => {new_password = ref;}}></Input>
        <Input type="password" placeholder="confirm_new_password" innerRef={(ref) => {confirm_new_password = ref;}}></Input>
        <Button onClick={send_set_password}>Change Password</Button>

        <h2>Change Alias</h2>
        <table>
          <thead><tr>
            <td>name</td>
            <td>nickname</td>
            <td>alias</td>
          </tr></thead>
          <tbody>
            {user_state.lectures.map( (lecture) =>
              <tr key={lecture.lecture.id}>
                <td>{lecture.lecture.name}</td>
                <td><Input type="text" value={lecture.nickname}></Input></td>
                <td><Input type="text" value={lecture.alias}></Input></td>
              </tr>
            )}
          </tbody>
        </table>
        <Button onClick={send_set_lectureinfo}>Edit Lecture Information (Todo)</Button>

        <LectureList lectures={user_lectures} location={location}/>
        <Input type="text" placeholder="name" innerRef={(ref) => {lecture_name = ref;}}></Input>
        <Input type="text" placeholder="code" innerRef={(ref) => {lecture_code = ref;}}></Input>
        <Button onClick={send_search_lecture}>Search Lectures With Name and Code</Button>
        <LectureList lectures={search_state} location={location} cur_page={cur_page}/>
        {children}
      </PageTemplate>
    )
  }
}

export default EditProfilePage

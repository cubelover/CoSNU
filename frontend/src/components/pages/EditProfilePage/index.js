import React from 'react'

import { LectureList } from 'components'
import { SearchLectureList, } from 'components'
import { EditLectureTable } from 'containers'
import { PageTemplate } from 'components'
import { Input, Button, Table, Tr, Th, Td } from 'components'
import { Link } from 'react-router'

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.memo_name = "no name";
    this.memo_code = "no code";
    this.cur_page = 1;
  }
  componentDidMount() {
    var {location} = this.props
    this.cur_page = (location.query.page ? parseInt(location.query.page, 10) : 1)
    if(isNaN(this.cur_page)) this.cur_page = 1
    this.props.action_search_lecture(this.memo_name, this.memo_code, this.cur_page)
  }
  componentWillReceiveProps(nextProps) {
    var {location} = nextProps;
    var next_page = (location.query.page ? parseInt(location.query.page, 10) : 1)
    if(isNaN(next_page)) next_page = 1
    if(next_page == this.cur_page) return
    this.cur_page = next_page
    this.props.action_search_lecture(this.memo_name, this.memo_code, this.cur_page)
  }
  render() {
    var {user_state, search_state} = this.props
    var {action_send_alert, action_set_password, action_set_lectureinfo, action_search_lecture} = this.props
    var {location, children, ...props} = this.props
    var user_lectures = {count: user_state.lectures.length, results:[]}
    for(var i=0; i<user_state.lectures.length; i++) user_lectures.results.push(user_state.lectures[i].lecture);

    let new_password, confirm_new_password
    const send_set_password = () => {
      if(new_password.value != undefined && confirm_new_password.value != undefined && new_password.value == confirm_new_password.value) {
        action_set_password(new_password.value)
      }else{
        action_send_alert("입력하신 비밀번호가 일치하지 않습니다.")
      }
    }
    const send_set_lectureinfo = () => {
      //todo
    }
    let lecture_name, lecture_code;
    var lectures_tmp = user_state.lectures;
    var tp = lectures_tmp.find(item => item.lecture.id == 1)

    const send_search_lecture = () => {
      this.memo_name = lecture_name.value
      this.memo_code = lecture_code.value
      this.cur_page = 2;
    }

    return (
      <PageTemplate {...props}>
        <h1>설정</h1>

        <h2>Change Password</h2>
        <Input type="password" placeholder="new_password" innerRef={(ref) => {new_password = ref;}}></Input>
        <Input type="password" placeholder="confirm_new_password" innerRef={(ref) => {confirm_new_password = ref;}}></Input>
        <Button onClick={send_set_password}>Change Password</Button>

        <h2>Change Alias</h2>
        <EditLectureTable lectures={user_state.lectures}/>

        <LectureList lectures={user_lectures}/>
        <Input type="text" placeholder="name" innerRef={(ref) => {lecture_name = ref;}}></Input>
        <Input type="text" placeholder="code" innerRef={(ref) => {lecture_code = ref;}}></Input>

        <Link to={{pathname : location.pathname, query: {page: 1}}}>
          <Button onClick={send_search_lecture}>Search Lectures With Name and Code</Button>
        </Link>
        <SearchLectureList lectures={search_state} location={location} cur_page={this.cur_page}/>
        {children}
      </PageTemplate>
    )
  }
//  <SearchLectureList lectures={search_state} location={location} cur_page={this.cur_page}/>
}

export default EditProfilePage

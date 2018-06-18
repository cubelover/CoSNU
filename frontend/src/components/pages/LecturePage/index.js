import React from 'react'

import { PageTemplate } from 'components'
import { ArticleList } from 'containers'
import { Input, Button, Table, Tr, Th, Td } from 'components'
import { Link } from 'react-router'

const LecturePage = ({ user_lectures, params, location, children, ...props}) => {
  console.log(user_lectures)
  let lecture_id = params.lecture_id;
  let cur_page = (location.query.page ? parseInt(location.query.page, 10) : 1);
  if(isNaN(cur_page)) cur_page = 1;

  var lecture_name = "none_lecture_id", lecture_alias = "none_lecture_id"
  for(var i=0; i<user_lectures.length; i++) {
    if((user_lectures[i].lecture.id).toString() == lecture_id) {
      lecture_name = user_lectures[i].lecture.name
      lecture_alias = user_lectures[i].alias
      break;
    }
  }
  if(lecture_name == "none_lecture_id") {
    return (
      <PageTemplate {...props}>
        <h1>Invalid</h1>
        <Link to="/"><Button>Home</Button></Link>
        {children}
      </PageTemplate>
    )
  }else{
    return (
      <PageTemplate {...props}>
        <h1>{lecture_alias}({lecture_name})</h1>
        <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
        {children}
      </PageTemplate>
    )
  }
}

export default LecturePage

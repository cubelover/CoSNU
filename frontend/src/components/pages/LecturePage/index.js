import React from 'react'

import { PageTemplate } from 'components'
import { ArticleList } from 'containers'

const LecturePage = ({ params, location, children, ...props}) => {
  let lecture_id = params.lecture_id;
  let cur_page = (location.query.page ? parseInt(location.query.page, 10) : 1);
  if(isNaN(cur_page)) cur_page = 1;
  console.log("cur_page", cur_page);
  return (
    <PageTemplate>
      <h1>LecturePage {lecture_id}</h1>
      <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
      {children}
    </PageTemplate>
  )
}

export default LecturePage

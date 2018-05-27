import React from 'react'

import { PageTemplate } from 'components'
import { ArticleList } from 'containers'

const LecturePage = ({ params, location, children, ...props}) => {
  let lecture_id = params.lecture_id;
  let cur_page = 1//(query ? (query && query.page ? parseInt(query.page, 10) : 1) : 1);
  if(isNaN(cur_page)) cur_page = 1;
  return (
    <PageTemplate>
      <h1>LecturePage {lecture_id}</h1>
      <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
      {children}
    </PageTemplate>
  )
}

export default LecturePage

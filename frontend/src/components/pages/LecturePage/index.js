import React from 'react'

import { PageTemplate, ArticleList } from 'components'
//import { PageTemplate, Header, Hero, Footer, FeatureList } from 'components'

const LecturePage = ({ params, location: { query }, children, ...props}) => {
  let lecture_id = params.lecture_id;
  let cur_page = query && query.page ? parseInt(query.page, 10) : 1;
  if(isNaN(cur_page)) cur_page = 1;
  return (
    <PageTemplate>
      <h1>LecturePage {lecture_id}</h1>
      <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
    </PageTemplate>
  )
  /*
  return (
    <PageTemplate header={<Header />} hero={<Hero />} footer={<Footer />}>
      <h1>LecturePage</h1>
      <FeatureList />
    </PageTemplate>
  )
  */
}

export default LecturePage

import React from 'react'

import { PageTemplate } from 'components'
import { ArticleList } from 'containers'
//import { PageTemplate, Header, Hero, Footer, FeatureList } from 'components'

const LecturePage = ({ params, location, children, ...props}) => {
  if(typeof(params) !== 'undefined' || params != null) {
  }else{
    params = {"lecture_id": "1", "article_id": "1"};
  }

  let lecture_id = params.lecture_id;
  let cur_page = 1;//(query ? (query && query.page ? parseInt(query.page, 10) : 1) : 1);
  if(isNaN(cur_page)) cur_page = 1;
  return (
    <PageTemplate>
      <h1>LecturePage {lecture_id}</h1>
      <ArticleList lecture_id={lecture_id} cur_page={cur_page}/>
      {children}
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

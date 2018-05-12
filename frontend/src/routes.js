import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, LecturePage, NotFoundPage, ArticlePage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path = "index" component = {HomePage} />
    <Route path = "lecture/:lecture_id/list"  component = {LecturePage} />
    <Route path = "lecture/:lecture_id/article/:article_id"  component = {ArticlePage} />
    <Route path = '*' component={NotFoundPage} />
  </Route>
)

export default routes

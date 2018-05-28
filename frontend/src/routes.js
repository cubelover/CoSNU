import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage } from 'components'
import { LecturePage } from 'components'
import { NotFoundPage } from 'components'
import { ArticlePage } from 'components'
import { SignUpPage } from 'containers'
import { EditProfilePage } from 'components'
import { WriteArticlePage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path = "index" component = {HomePage} />
    <Route path = "signup" component = {SignUpPage} />
    <Route path = "edit" component = {EditProfilePage} />
    <Route path = "lecture/:lecture_id/list"  component = {LecturePage} />
    <Route path = "lecture/:lecture_id/article/:article_id"  component = {ArticlePage} />
    <Route path = "lecture/:lecture_id/write" component = {WriteArticlePage} />
    <Route path = '*' component={NotFoundPage} />
  </Route>
)

export default routes

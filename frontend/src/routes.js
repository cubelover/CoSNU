import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage } from 'components'
import { LecturePage } from 'components'
import { NotFoundPage } from 'components'
import { ArticlePage } from 'containers'
import { SignUpPage } from 'containers'
import { EditProfilePage } from 'components'
import { WriteArticlePage } from 'containers'

export const routes = (store) => {
  const authRequired = (nextState, replace) => {
    const state = store.getState();
    let username = state.cosnu.user_state.username;
    if (username === "") {
      replace('/needlogin')
      //replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  };
  const authNotRequired = (nextState, replace) => {
    const state = store.getState();
    let username = state.cosnu.user_state.username;
    if (username === "") {
      replace('/needlogin')
      //replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="needlogin" component = {NotFoundPage} />
      <Route path="index" component = {HomePage} />
      <Route onEnter={authNotRequired}>
        <Route path="signup" component = {SignUpPage} />
      </Route>
      <Route onEnter={authRequired}>
        <Route path="edit" component = {EditProfilePage} />
        <Route path="lecture/:lecture_id/list"  component = {LecturePage}/>
        <Route path="lecture/:lecture_id/article/:article_id"  component = {ArticlePage} />
        <Route path="lecture/:lecture_id/write" component = {WriteArticlePage} />
      </Route>
      <Route path='*' component={NotFoundPage} />
    </Route>
  );
}


export default routes

import React from 'react'

import { LectureList } from 'components'
import { PageTemplate } from 'components'

const HomePage = ( {user_state, children, ...props}) => {

  var user_lectures = {count: user_state.lectures.length, results:[]}
  for(var i=0; i<user_state.lectures.length; i++) user_lectures.results.push(user_state.lectures[i].lecture);
return (
      <PageTemplate {...props}>
      {
        user_state.username == "" 
        ? (<h3>로그인 이후 이용하실 수 있습니다.</h3>) 
        : (<LectureList lectures={user_lectures} />)
      }
      {children}
    </PageTemplate>
  )
}

export default HomePage

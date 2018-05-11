import React from 'react'

import { AccountInfo, LectureList } from 'containers'
import { PageTemplate } from 'components'



const HomePage = () => {
  return (
    <div>
      <AccountInfo/>
      <LectureList/>
    </div>
  )
  /*
  return (
    <PageTemplate>Hello World</PageTemplate>
  )
  */
}

export default HomePage

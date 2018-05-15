import React from 'react'

import { LectureList } from 'containers'
import { PageTemplate } from 'components'

const HomePage = ( {children, ...props}) => {
  return (
    <PageTemplate>
      <LectureList/>
      {children}
    </PageTemplate>
  )
}

export default HomePage

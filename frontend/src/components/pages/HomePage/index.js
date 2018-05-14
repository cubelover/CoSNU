import React from 'react'

import { LectureList } from 'components'
import { PageTemplate } from 'components'

const HomePage = ( {children, ...props}) => {
  return (
    <PageTemplate>
      <LectureList/>
    </PageTemplate>
  )
}

export default HomePage

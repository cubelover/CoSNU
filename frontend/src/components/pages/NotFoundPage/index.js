import React from 'react'

import { PageTemplate } from 'components'

const NotFoundPage = ( {children, ...props}) => {
  return (
    <PageTemplate {...props}>
      <h1>Not Found</h1>
      {children}
    </PageTemplate>
  )
}

export default NotFoundPage

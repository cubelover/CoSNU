import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ReportPage } from 'components'

storiesOf('ReportPage', module)
  .add('default', () => (
    <ReportPage />
  ))

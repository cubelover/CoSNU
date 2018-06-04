import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WriteArticlePage } from 'components'

storiesOf('WriteArticlePage', module)
  .add('default', () => (
    <WriteArticlePage />
  ))

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { LecturePage } from 'components'

storiesOf('LecturePage', module)
  .add('default', () => (
    <LecturePage />
  ))

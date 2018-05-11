import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { LectureList } from 'components'

storiesOf('LectureList', module)
  .add('default', () => (
    <LectureList />
  ))
  .add('reverse', () => (
    <LectureList reverse />
  ))

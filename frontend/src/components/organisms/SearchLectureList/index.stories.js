import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchLectureList } from 'components'

storiesOf('SearchLectureList', module)
  .add('default', () => (
    <SearchLectureList />
  ))
  .add('reverse', () => (
    <SearchLectureList reverse />
  ))

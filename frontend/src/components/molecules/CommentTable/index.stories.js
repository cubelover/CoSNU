import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CommentTable } from 'components'

storiesOf('CommentTable', module)
  .add('default', () => (
    <CommentTable>Hello</CommentTable>
  ))
  .add('reverse', () => (
    <CommentTable reverse>Hello</CommentTable>
  ))

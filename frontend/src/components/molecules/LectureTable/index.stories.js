import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Lecture } from 'components'

storiesOf('Lecture', module)
  .add('default', () => (
    <Lecture>Hello</Lecture>
  ))
  .add('reverse', () => (
    <Lecture reverse>Hello</Lecture>
  ))

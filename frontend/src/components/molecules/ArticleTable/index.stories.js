import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Article } from 'components'

storiesOf('Article', module)
  .add('default', () => (
    <Article>Hello</Article>
  ))
  .add('reverse', () => (
    <Article reverse>Hello</Article>
  ))

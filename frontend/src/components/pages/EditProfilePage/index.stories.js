import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { EditProfilePage } from 'components'

storiesOf('EditProfilePage', module)
  .add('default', () => (
    <EditProfilePage />
  ))

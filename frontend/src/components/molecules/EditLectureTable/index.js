import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { StyledLink, Table, Tr, Th, Td, Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const EditLectureTable = ({lectures, children, ...props}) => {
  console.log("hihiihihi", lectures);
  return (
    <Wrapper {...props}>
      <Table>
        <thead><tr>
          <Th>name</Th>
          <Th>nickname</Th>
          <Th>alias</Th>
          <Th>Modify</Th>
          <Th>Delete</Th>
        </tr></thead>
        <tbody>
          {lectures.map( (lecture) =>
            <tr key={lecture.lecture.id}>
              <Td>{lecture.lecture.name}</Td>
              <Td><Input type="text" value={lecture.nickname}></Input></Td>
              <Td><Input type="text" value={lecture.alias}></Input></Td>
              <Td><Button>Modify</Button></Td>
              <Td><Button>Delete</Button></Td>
            </tr>
          )}
        </tbody>
      </Table>
      {children}
    </Wrapper>
  )
}

EditLectureTable.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default EditLectureTable

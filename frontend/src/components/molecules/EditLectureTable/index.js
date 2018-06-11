import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { StyledLink, Table, Tr, Th, Td, Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class EditLectureTable extends React.Component {
  constructor( props ){
    super(props)
    //this.lecture_id = -1;
    this.modify = this.modify.bind(this);
    this.delete = this.delete.bind(this);
  }
  modify(author_id, lecture_id) {
    console.log(author_id, lecture_id, register_nickname.value, register_alias.value);
    //action_modify_lecture(author_id, lecture_id, register_nickname.value, register_alias.value)
    this.forceUpdate()
  }
  delete(author_id, lecture_id) {
    console.log(author_id, lecture_id);
    //action_delete_lecture(author_id, lecture_id)
    this.forceUpdate()
  }
  render(){
    var {lectures, children, ...props} = this.props
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
            {lectures.map( (lecture) => {
              var register_nickname, register_alias
              return (
                <tr key={lecture.lecture.id}>
                  <Td>{lecture.lecture.name}</Td>
                  <Td><Input type="text" value={lecture.nickname}></Input></Td>
                  <Td><Input type="text" value={lecture.alias}></Input></Td>
                  <Td><Button onClick={()=>this.modify(lecture.id, lecture.lecture.id)}>Modify</Button></Td>
                  <Td><Button onClick={()=>this.delete(lecture.id, lecture.lecture.id)}>Delete</Button></Td>
                </tr>
              )
            }
            )}
          </tbody>
        </Table>
        {children}
      </Wrapper>
    )
  }
}

EditLectureTable.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default EditLectureTable

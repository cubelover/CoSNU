import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { StyledLink, Table, Tr, Th, Td } from 'components'
import { Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class SearchLectureTable extends React.Component {
  constructor( props ){
    super(props)
    this.lecture_id = -1;
    this.row_click = this.row_click.bind(this);
  }
  row_click(id) {
    this.lecture_id = id;
    this.forceUpdate()
  }
  render(){
    var {lectures, children, ...props} = this.props
    var register_nickname, register_alias
    const send_register_lecture = () => {
      
      action_register_lecture(register_nickname.value, register_alias.value, this.lecture_id)
    }    
    return (
      <Wrapper {...props}>
        <Table>
          <thead><tr>
            <Th>name</Th>
            <Th>code</Th>
            <Th>professor</Th>
            <Th>semester</Th>
          </tr></thead>
          <tbody>
            {lectures.map( (lecture) =>
              <tr key={lecture.id} onClick={()=>this.row_click(lecture.id)}>
                <Td>{lecture.name+(this.lecture_id == lecture.id ? " " + "select" : "")}</Td>
                <Td>{lecture.code}</Td>
                <Td>{lecture.professor}</Td>
                <Td>{lecture.semester}</Td>
              </tr>
            )}
          </tbody>
        </Table>
        <div>
          <Input type="text" placeholder="nickname" innerRef={(ref) => {register_nickname = ref;}}></Input>
          <Input type="text" placeholder="alias" innerRef={(ref) => {register_alias = ref;}}></Input>
          <Button onClick={send_register_lecture}>Register Lecture</Button>
        </div>
        {children}
      </Wrapper>
    )
  }
}
SearchLectureTable.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SearchLectureTable

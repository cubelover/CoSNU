import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { StyledLink, Table, Tr, Th, Td } from 'components'
import { Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const HoverTr = styled.tr`
  &:hover {
    background-color: #bdf;
  }
`

const SelectTr = styled.tr`
  background-color: #fdb;
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
    var {action_register_lecture, lectures, children, ...props} = this.props
    var register_nickname, register_alias
    const send_register_lecture = () => {
      for(var i=0; i<lectures.length; i++) {
        if(lectures[i].id == this.lecture_id) {
          console.log(this.lecture_id, register_nickname.value, register_alias.value)
          action_register_lecture(this.lecture_id, register_nickname.value, register_alias.value)
          break;
        }
      }
    }    
    return (
      <Wrapper {...props}>
        <Table>
          <thead><tr>
            <Th>강의명</Th>
            <Th>강의코드</Th>
            <Th>교수</Th>
            <Th>학기</Th>
          </tr></thead>
          <tbody>
            {lectures.map( (lecture) =>
              {return this.lecture_id == lecture.id ?
                <SelectTr key={lecture.id} onClick={()=>this.row_click(lecture.id)}>
                  <Td>{lecture.name}</Td>
                  <Td>{lecture.code}</Td>
                  <Td>{lecture.professor}</Td>
                  <Td>{lecture.semester}</Td>
                </SelectTr>
                :
                <HoverTr key={lecture.id} onClick={()=>this.row_click(lecture.id)}>
                  <Td>{lecture.name}</Td>
                  <Td>{lecture.code}</Td>
                  <Td>{lecture.professor}</Td>
                  <Td>{lecture.semester}</Td>
                </HoverTr>
              }
            )}
          </tbody>
        </Table>
        <div>
          <Input type="text" placeholder="nickname" innerRef={(ref) => {register_nickname = ref;}}></Input>
          <Input type="text" placeholder="alias" innerRef={(ref) => {register_alias = ref;}}></Input>
          <Button onClick={send_register_lecture}>등록하기</Button>
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

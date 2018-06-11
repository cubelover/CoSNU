import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { StyledLink, Table, Tr, Th, Td } from 'components'

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
            {lectures.map( (lecture, index) =>
              <tr key={lecture.id} onClick={()=>this.row_click(lecture.id)}>
                <Td>{lecture.name+(this.lecture_id == lecture.id ? " " + "select" : "")}</Td>
                <Td>{lecture.code}</Td>
                <Td>{lecture.professor}</Td>
                <Td>{lecture.semester}</Td>
              </tr>
            )}
          </tbody>
        </Table>
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

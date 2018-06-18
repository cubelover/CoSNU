import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { StyledLink, Table, Tr, Th, Td, Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class TimeStamp extends React.Component {
  constructor( props ){
    super(props)
    //this.lecture_id = -1;
  }
  /*
  modify(author_id, lecture_id, nickname, alias) {
    this.props.action_modify_lecture(author_id, lecture_id, nickname, alias)
    this.forceUpdate()
  }
  */
  render(){
    var {timestamp, children, ...props} = this.props
    var numberPattern = /\d+/g;
    var list = timestamp.match(numberPattern)
    if(list == null || list.length < 7) {
      return (
        <Wrapper {...props}>
          <StyledLink title="None">"None"</StyledLink>        
          {children}
        </Wrapper>
      )
    }
    var articleDate = new Date(list[0], parseInt(list[1])-1, list[2], list[3], list[4], list[5], list[6].substr(0, 3));
    var diffMiliSecond = (new Date()).getTime() - (articleDate.getTime()) - 9 * 3600 * 1000
    console.log(list)
    console.log(diffMiliSecond)
    var times = ["년", "월", "일", "시", "분", "초"]
    var koreanTimeStr = ""
    for(var i=0; i<6; i++) {
      koreanTimeStr = koreanTimeStr + list[i] + times[i];
      if(i+1 < 6) koreanTimeStr = koreanTimeStr + " "
    }
    var second = Math.floor(diffMiliSecond / 1000)
    var minute = Math.floor(diffMiliSecond / 1000 / 60)
    var hour = Math.floor(diffMiliSecond / 1000 / 60 / 60)
    var day = Math.floor(diffMiliSecond / 1000 / 60 / 60 / 24)
    var reletive = ""
    //'방금 전' if d < 60 else '%d분 전' % (d // 60) if d < 3600 else '%d시간 전' % (d // 3600) if d < 259200 else '%d일 전' % (d // 86400)
    if(second == 0) reletive = "방금 전"
    else if(second < 60) reletive = second + "초 전"
    else if(minute < 60) reletive = minute + "분 전"
    else if(hour < 60) reletive = hour + "시간 전"
    else if(day < 60) reletive = day + "일 전"
    return (
      <Wrapper {...props}>
        <StyledLink title={koreanTimeStr}>{reletive}</StyledLink>        
        {children}
      </Wrapper>
    )
  }
}

TimeStamp.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default TimeStamp

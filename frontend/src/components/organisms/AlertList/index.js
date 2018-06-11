import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

import { Page, CurrPage, ArticleTable, Input, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class AlertList extends React.Component {
  constructor( props ){
    super(props)
  }
  componentDidMount(){
    //this.props.get_articles(this.props.lecture_id, this.props.cur_page)
  }
  componentWillReceiveProps(nextProps) {
    //if(nextProps.cur_page == this.props.cur_page && nextProps.lecture_id == this.props.lecture_id) return;
    //this.props.get_articles(nextProps.lecture_id, nextProps.cur_page)
  }
  render(){
    var {alert_state, ...props} = this.props
    return (
      <Wrapper {...props}>
        {(alert_state.messages).map( (message, index) =>      
          <h2 key={index}>{message}</h2>
        )}
      </Wrapper>
    )
  }
}

AlertList.propTypes = {
  reverse: PropTypes.bool,
}

export default AlertList

import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './style.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreates } from './store'
class Detail extends PureComponent{
  render(){
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state)=>({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispath = (dispath)=>({
  getDetail(id){
    dispath(actionCreates.getDetail(id))
  }
})

export default connect(mapState, mapDispath)(withRouter(Detail));

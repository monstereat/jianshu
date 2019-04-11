import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from '../style.js'
import { connect } from 'react-redux'

class Recommend extends PureComponent{
  render(){
    const { list } = this.props
    return (
      <RecommendWrapper>
      {
        list.map((item)=>{
          return(
            <RecommendItem alt="" key={item.get("id")} imgUrl={item.get("imgUrl")}/>
          )
        })
      }
      </RecommendWrapper>
    )
  }
}
const mapState = (state)=>({
  list: state.getIn(['home','recommendList'])
})
export default connect(mapState, null)(Recommend);

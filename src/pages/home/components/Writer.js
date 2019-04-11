import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  WriteTitle,
  WriteTitleWrapper,
  WriteItem,
  WriteInfoWrapper,
  WriteInfo
 } from '../style.js'
class Writer extends PureComponent{
  render(){
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriteTitle>推荐作者</WriteTitle>
        <WriteTitleWrapper>
        {
          list.map((item, index)=>{
            return(
              <WriteItem key={index}>
                <img className='author-img' src={item.get('imgUrl')} alt=""/>
                <WriteInfoWrapper>
                  {item.get('name')}
                  <i className="author-fllow">关注</i>
                </WriteInfoWrapper>
                <WriteInfo>{item.get('infoLike')}</WriteInfo>
              </WriteItem>
            )
          })
        }
        </WriteTitleWrapper>
      </WriterWrapper>
    )
  }
}

const mapState = (state)=>({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer);

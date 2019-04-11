import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreates } from '../store'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListInfo,
  LoadMore
 } from '../../home/style.js'


class List extends PureComponent{
  render(){
    const { list, getMoreList, page } = this.props;
    return (
      <div>
      {
        list.map((item, index)=>{
          return (
            <Link to={"/detail/" + item.get('id')} key={index}>
              <ListItem>
                <img className="pic" alt="" src={item.get('imgUrl')} />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc" >{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })
      }
      <LoadMore onClick={()=>getMoreList(page)}>
        加载更多
      </LoadMore>
      </div>
    )
  }
}
const mapState = (state)=>({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','artilcePage'])
})

const mapDispath = (dispath)=>({
  getMoreList(page){
    dispath(actionCreates.getMoreList(page))
  }
})

export default connect(mapState, mapDispath)(List);

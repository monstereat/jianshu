import React, { PureComponent } from 'react'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreates } from './store'
import { connect } from 'react-redux'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
 } from './style.js'

class Home extends PureComponent{
  handleScrollTop(){
    window.scrollTo(0, 0)
  }
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt="图片" src='http://upload.jianshu.io/admin_banners/web_images/4614/860581df72e818f1c4046b077f6e20ea2069c6ca.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ?
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
          : null
        }

      </HomeWrapper>
    )
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
  componentDidMount(){
    this.props.changeHomeData()
    this.bindEvent()
  }
  bindEvent(){
   window.addEventListener('scroll', this.props.changeScrollTopShow);
 }
}

const mapState = (state)=>({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispath = (dispath)=>({
  changeHomeData(){
    dispath(actionCreates.getHomeInof())
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 100){
      dispath(actionCreates.toggleTopShow(true))
    }else{
      dispath(actionCreates.toggleTopShow(false))
    }
  }
})
export default connect(mapState, mapDispath)(Home);

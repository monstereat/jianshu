import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreates } from './store'
import { actionCreates as loginActionCreates } from '../../pages/login/store'
import { Link } from 'react-router-dom'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'
/*
热搜显示控制
const getListArea = (show) => {
  if(show) {
    return(
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>
            换一批
          </SearchInfoSwitch>
          <SearchInfoList>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
          </SearchInfoList>
        </SearchInfoTitle>
      </SearchInfo>
    )
  }else {
    return null;
  }
}
*/
class Header extends Component{

    getListArea = () => {
      const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
      const newList = list.toJS();
      const pageList = []
      if(newList.length){
        let allList = page * 10
        if(allList > newList.length){
          allList = newList.length
        }
        for (let i = (page - 1) * 10; i < allList; i++) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    if(focused || mouseIn) {
      return(
        <SearchInfo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={()=>{handleChangePage(page, totalPage, this.spinIcon)}}
            >
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render(){
    const { focused, list, handleInputFocus, handleInputBlur, login, logout} = this.props;
    return(
      <div>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            {
              login ? <NavItem
              onClick={logout} className="right">退出</NavItem> :
              <Link to="/login">
              <NavItem className="right">登陆</NavItem>
              </Link>
            }
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={()=>{handleInputFocus(list)}}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe62b;
              </i>
              {this.getListArea()}
            </SearchWrapper>
            <Addition>
              <Link to="/write">
                <Button className="writting">
                  <i className="iconfont">&#xe615;</i>
                  写文章
                </Button>
              </Link>
                <Button className="reg">注册</Button>
            </Addition>
          </Nav>
       </HeaderWrapper>
      </div>
    )
  }
}

/*
const Header = (props)=>{
  return(
    <div>
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={props.focused ? 'focused' : ''}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe62b;
            </i>
            {getListArea(props.focused)}
          </SearchWrapper>
          <Addition>
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
              <Button className="reg">注册</Button>
          </Addition>
        </Nav>
     </HeaderWrapper>
    </div>
  )
}
*/
/*
class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   focused: false
  //   // }
  //   this.handleInputFocus = this.handleInputFocus.bind(this)
  //   this.handleInputBlur = this.handleInputBlur.bind(this)
  // }
  render(){
    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <NavItem className="right">登陆</NavItem>
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={this.props.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={this.props.focused ? 'focused' : ''}
                  onFocus={this.props.handleInputFocus}
                  onBlur={this.props.handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={this.props.focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe62b;</i>
            </SearchWrapper>
            <Addition>
              <Button className="writting">
                <i className="iconfont">&#xe615;</i>
                写文章
              </Button>
                <Button className="reg">注册</Button>
            </Addition>
          </Nav>
       </HeaderWrapper>
      </div>
    )
  }
  // handleInputFocus() {
  //   this.setState({
  //     focused: true
  //   })
  // }
  // handleInputBlur(){
  //   this.setState({
  //     focused: false
  //   })
  // }
}
*/
const mapStateToProps = (state)=> {
  return {
    focused: state.getIn(['header', 'focused']),
    // state.get('header').get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleInputFocus(list){
      // const action = {
      //   type: 'search_focus'
      // }
      (list.size === 0) && dispatch(actionCreates.getList());
      // dispatch(actionCreates.getList())
      dispatch(actionCreates.searchFocus())
    },
    handleInputBlur(){
      // const action = {
      //   type: 'search_blur'
      // }
      dispatch(actionCreates.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreates.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreates.mouseLeave())
    },
    handleChangePage(page, totalPage, spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle){
        originAngle = parseInt(originAngle, 10)
      }else{
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if(page < totalPage){
        dispatch(actionCreates.changePage(page + 1))
      }else {
        dispatch(actionCreates.changePage(1))
      }
    },
    logout(){
      dispatch(loginActionCreates.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

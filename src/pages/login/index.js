import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreates } from './store'
import { Redirect } from 'react-router-dom'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style.js'

class Login extends PureComponent{
  render(){
    const { loginStatus } = this.props;
    console.log(loginStatus)
    if(!loginStatus){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="帐号" ref={(input)=>{this.account = input}}/>
            <Input placeholder="密码"  type="password" ref={(input)=>{this.password = input}}/>
            <Button onClick={()=>{this.props.login(this.account, this.password)}}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Redirect to="/" />
    }
  }

}

const mapState = (state)=>({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispath = (dispath)=>({
  login(accountElem, passwordElem){
    dispath(actionCreates.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispath)(Login);

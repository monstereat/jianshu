import axios from 'axios'
import * as constants from './constants.js'
const changeLogin = ()=>({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const logout = ()=>({
  type: constants.LOGOUT,
  value: false
})

export const login = (account, password)=>{
  return (dispath)=>{
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=>{
      const data = res.data.data
      if(data){
        dispath(changeLogin())
      }else{
        alert('登陆失败')
      }
    })
  }
}

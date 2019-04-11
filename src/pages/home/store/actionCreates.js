import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'
const getHomeData = (result)=>({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList,
  writerList: result.writerList
})

const addHomeList = (list, nextPage) =>({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})
export const toggleTopShow = (show)=>({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})

export const getHomeInof = ()=>{
  return(dispath)=>{
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data
      dispath(getHomeData(result))
    })
  }
}
export const getMoreList = (page)=>{
  return (dispath)=>{
    axios.get('/api/homeList.json?page=' + page).then((res)=>{
      const data = res.data.data
      dispath(addHomeList(data, page + 1))
    })
  }
}

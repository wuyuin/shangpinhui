

import {reqCategoryList,reqCateBannerList, reqCateFloorList} from "@/api/index"
//state数据
const state ={
  categorylist:[],
  //返回的数据是数组Array(4)
  bannerlist:[],
  floorlist: []
}
// 修改数据
const mutations ={
  CATEGORYLIST(state,categorylist) {
    state.categorylist=categorylist
  },
  CATEBANNERLIST(state,bannerlist) {
    state.bannerlist=bannerlist
   
  },
  CATEFLOORLIST(state,floorlist) {
    state.floorlist = floorlist
  } 
  
}

const actions = {
   async getCategoryList({commit}) {
      // 请求返回的结果是Promise对象  promise成功的回调  失败的回调
    let result = await reqCategoryList()
    if(result.code===200){
      commit("CATEGORYLIST",result.data)

    }
    
   

  },
  async getBannerList({commit}) {
    //发送reqCateBannerList请求 模拟  结果是个对象
    let result = await reqCateBannerList()
    console.log(result)
    if(result.code==200){
      //commit("mutations方法名",数据(发送到mutations的数据))
      commit("CATEBANNERLIST",result.data)
     
      
    }
    


  },
  async getFloorList({commit}) {
    let result = await reqCateFloorList();
    if(result.code==200){
      commit("CATEFLOORLIST",result.data)
    }
  } 
  
}
const getters= {}
export default {
  state,
  mutations,
  getters,
  actions
}
// 当前的模块   对所有的api接口进行统一管理
import requests from "./requests";
// 三级联动的接口  get 无参 /api/product/getBaseCategoryList   http://gmall-h5-api.atguigu.cn

import mockRuquest from "./mockAjax"



// 获取三级联动的数据   export const 函数名=箭头函数 分别暴露  引入方式 ----解构赋值  import {变量名/函数名} from "文件路径"
export const reqCategoryList = ()=> requests.get('/product/getBaseCategoryList')

// 获取轮播图的接口
export const reqCateBannerList = ()=> mockRuquest.get("/banner")

//获取floor的接口
export const reqCateFloorList = () => mockRuquest.get('/floor')




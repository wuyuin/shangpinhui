import Mock from "mockjs"
import banner from "./banner.json"
// webpack 默认暴露：图片js./floor1.json暴露的 别的模块可以直接引入
import floor from "./floor.json"

Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});






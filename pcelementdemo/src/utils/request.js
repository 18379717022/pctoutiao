import axios from 'axios'

//创建一个axios实例,说白了就是复制了一个axios
const request=axios.create({
    baseURL:'http://ttapi.research.itcast.cn/'
})

//导出请求方法
export default request

//谁要使用就加载 request 模块
//import request from 'request.js'
import axios from "axios";
import useMainStore from "@/stores/modules/main";

import { BASE_URL, TIMEOUT } from "./config";

const mainStore = useMainStore()

class YQRequest {
  // 传入默认配置信息, 创建新的实例
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    }),
    // 网络请求时通过拦截器控制loading是否显示
    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      mainStore.isLoading = false
      return res
    }, err => {
      mainStore.isLoading = false
      return err
    })
  }

  // 1.封装request
  request(config) {
    

    // 返回一个Promise, 对数据转换
    return new Promise((reslove, reject) => {
      this.instance.request(config).then(res => {
        reslove(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  // 2.封装get
  get(config) {
    //  调用自己的request函数
    return this.request({ ...config, methods: "get" })
  }

  // 3.封装psot
  post(config) {
    //  调用自己的request函数
    return this.request({ ...config, methods: "post" })
  }
}

export default new YQRequest(BASE_URL, TIMEOUT)
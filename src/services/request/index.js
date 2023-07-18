import axios from "axios"
import { BASE_URL, TIME_OUT } from "./config"

class WJXRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      return err
    })
  }

  /**
   * request方法
   * @param {Object} config 
   * @returns Promise
   */
  request(config) {
    return this.instance.request(config)
  }

  /**
   * get方法
   * @param {Object} config 
   * @returns Promise
   */
  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  /**
   * post方法
   * @param {Object} config 
   * @returns Promise
   */
  post(config) {
    return this.request({ ...config, method: 'post' })

  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new WJXRequest(BASE_URL, TIME_OUT)
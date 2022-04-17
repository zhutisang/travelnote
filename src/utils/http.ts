import axios from 'axios'

const configBaseUrl = 'http://localhost:3000'
const instance = axios.create({
    baseURL: configBaseUrl,
    timeout: 5000
})

/**
 * 请求拦截
 */
instance.interceptors.request.use(config => {
    return config
}, (err: any) => {
    console.error(err)
})

/**
 * 响应拦截
 */
instance.interceptors.response.use(res => {
    return res
}, (err: any) => {
    console.error(err)
})

/**
 * 
 * @param option 配置对象，属性包括：
 * method 请求方法
 * path 请求接口地址
 * params 请求参数
 */
export default async function http (option: any = {}) {
    let result = null
    switch (option.method) {
        case 'get':
            await instance.get(
                option.path, {
                params: option.params
            }
            ).then(res => {
                result = res
            }).catch(err => {
                result = err
            })
            break
        case 'post':
            await instance.post(
                option.path,
                option.params
            ).then(res => {
                result = res
            }).catch(err => {
                result = err
            })
            break
        case 'delete':
            await instance.delete(
                option.path, {
                params: option.params
            }
            ).then(res => {
                result = res
            }).catch(err => {
                result = err
            })
            break
        case 'put':
            await instance.put(
                option.path, {
                params: option.params
            }
            ).then(res => {
                result = res
            }).catch(err => {
                result = err
            })
            break
    }
    return result
}

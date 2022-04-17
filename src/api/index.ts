
import url from './url'

const {get, post} = axios

export const detailItemAxios = (data: object) => {
  get(url.Login,data)
}
import axios from 'axios'

const URL_BASE = 'http://myapi.com'
const URL_DATA = URL_BASE + '/data'

export const getData = ({ exampleParam }) => {
   return axios({
      method: 'get',
      url: URL_DATA,
      params: {
         exampleParam
      }
   })
}

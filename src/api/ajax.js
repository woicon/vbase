import axios from 'axios';
export default (url, params) => {
  return axios.get(url, {
    　　params:　　params
    }).then(res => {
    return res.data
  })
}

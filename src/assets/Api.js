import {axiosUrl, config, config2, ENUM} from './config'
import axios from 'axios'

export const API = {
  // data for the word
  getData(params) {
    return axios.post(axiosUrl + 'Counterwork/getRecentOrderList', params, config)
      .then((res) => {
        return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
      });
  },
  getData2(params) {
    return axios.get(axiosUrl + 'Counterwork/getRecentOrderList', {
      params: {
        num: params
      }
    })
      .then((res) => {
        return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
      });
  }
};

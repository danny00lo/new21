export const config = {
  url:'/user',
  method:'post',
  baseURL:'http://115.28.190.212/zhongzi/v2.php/',

  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }],
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  timeout:50000,
  responseType:'json'
};

export const config2 = {
  url:'/user',
  method:'get',
  baseURL:'http://115.28.190.212/zhongzi/v2.php/',

  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }],
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  timeout:50000,
  responseType:'json'
};

//常量
export const axiosUrl = 'http://115.28.190.212/zhongzi/v2.php/';  //测试服务器
// export const axiosUrl = 'http://192.168.1.37:8087/'; //本地测试服务器

export const downloadURL = "http://www.idothing.com/download.html";

// 定义网络类型
export const ENUM ={
  ERROR_CODE: {
    OK: 200 // 正常
    // "UNKNOWN_ERROR": 10000, // 内部错误
    // "TOKEN_INVALID": 10001, // Token 无效
    // "TOKEN_EXPIRED": 10002, // Token 过期
    // "SIGN_INVALID": 10003, // Sign 无效
    // "SIGN_EXPIRED": 10004, // Sign 过期
  }
};

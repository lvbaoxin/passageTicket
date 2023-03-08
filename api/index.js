import {
  request
} from './request'

module.exports = {
  // 获取导航
  getNavList: (data) => request('nav/', 'GET', data),
}
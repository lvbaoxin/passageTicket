import {
  request
} from './request'

module.exports = {
  // 获取文章详情
  getArticles: (data) => request('portal/articles/1', 'GET', data),
}


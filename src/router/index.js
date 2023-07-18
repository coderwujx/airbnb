import React from 'react'
import { Navigate } from 'react-router-dom'

//页面懒加载
const Home = React.lazy(() => import('@/views/home'))
const Detail = React.lazy(() => import('@/views/detail'))
const Entire = React.lazy(() => import('@/views/entire'))
const NotFound = React.lazy(() => import('@/views/notfound'))

//路由配置
const routes = [
  // 重定向
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: < Home />
  }, {
    path: '/detail',
    element: <Detail />
  }, {
    path: '/entire',
    element: <Entire />
  },
  //页面不存在
  {
    path: '/*',
    element: <NotFound />
  },
]

export default routes
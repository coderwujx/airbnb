import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

const App = memo((props) => {
  return (
    <div className='app'>
      <AppHeader />
      <div className='page'>
        {/* 配置路由 */}
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  )
})


export default App
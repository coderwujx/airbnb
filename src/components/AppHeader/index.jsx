import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderCenter from './c-cpns/HeaderCenter'
import HeaderLeft from './c-cpns/HeaderLeft'
import HeaderRight from './c-cpns/HeaderRight'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader
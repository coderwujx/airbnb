import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  //panel显示状态
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    //监听window点击
    window.addEventListener('click', () => {
      setShowPanel(false)
    }, true)
    return () => {
      window.removeEventListener('click', () => {
        setShowPanel(false)
      }, true)
    }
  }, [])

  // 修改panel的显示

  function profileClickHandle() {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>

      <div className='profile' onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        {
          showPanel && <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
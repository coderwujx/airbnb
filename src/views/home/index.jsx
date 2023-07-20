import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import React, { memo, useEffect } from 'react'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/HomeBanner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/SectionHeader'


const Home = memo(() => {
  //拿到state中的数据
  const { goodPriceInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  //发送网络请求
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])


  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
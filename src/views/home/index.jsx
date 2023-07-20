import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import React, { memo, useEffect } from 'react'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/HomeBanner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/SectionHeader'
import RoomItem from '@/components/RoomItem'


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
          <ul className='room-list'>
            {
              goodPriceInfo?.list?.slice(0, 8)?.map(item => {
                return <RoomItem itemData={item} key={item.id} />
              })
            }
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
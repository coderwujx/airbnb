import React, { memo } from 'react'
import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData } = props

  return (
    <ItemWrapper>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">
          {itemData?.verify_info.messages?.join("·")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
      </div>
    </ItemWrapper>
  )
})

export default RoomItem
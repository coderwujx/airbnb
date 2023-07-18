import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './modules/home'
import entireSlice from './modules/entire'
import detailSlice from './modules/detail'

const store = configureStore({
  reducer: {
    home: homeSlice,
    entire: entireSlice,
    detail: detailSlice
  }
})

export default store
import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './components/CartSlice'

const store = configureStore({
  reducer:{
    cart:CartSlice
  }
})

export default store;
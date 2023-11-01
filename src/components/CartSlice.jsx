import {createSlice} from '@reduxjs/toolkit'

const initialState = [];

const CartSlice = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
           return state.filter((item)=>item.id !== action.payload)
        }
    }

})

export const {addtoCart,remove} = CartSlice.actions
export default CartSlice.reducer
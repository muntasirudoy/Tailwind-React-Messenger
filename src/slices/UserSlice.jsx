import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 users:{
    name: ""
 }
}

export const userSlice = createSlice({
  name: 'storeUser',
  initialState,
  reducers: {
    storeUser: (state, action) => {
       console.log(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const {storeUser} = userSlice.actions

export default userSlice.reducer
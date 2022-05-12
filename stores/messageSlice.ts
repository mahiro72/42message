import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Message {
    text: string
}

const initialState: Message = {
    text: "",
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
    reset: (state) => {
      state.text = ""
    },
  },
})

// Action creators are generated for each case reducer function
export const {update, reset } = messageSlice.actions

export default messageSlice.reducer

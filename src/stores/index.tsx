import { configureStore } from '@reduxjs/toolkit'

const placeholderReducer = (state = {}) => state

export const store = configureStore({
  reducer: {
    placeholder: placeholderReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

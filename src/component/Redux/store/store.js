import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../RootReducer/rootReducer'
export default configureStore({
    reducer: {rootReducer},
    devTools: true,
  
  })
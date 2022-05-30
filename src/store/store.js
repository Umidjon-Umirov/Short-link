import { configureStore } from "@reduxjs/toolkit";
import fetchLinksReducer from './LinksSlice.js'
export default configureStore({
   reducer:{
      links:fetchLinksReducer,
   }
})
import { combineReducers } from "@reduxjs/toolkit";
import estimateSlice from "./estimateSlice";
import { blackjackApi } from "./exampleService";
const rootReducer = combineReducers({
  estimate: estimateSlice.reducer,
  game: blackjackApi.reducer,
});

export default rootReducer;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";

const rootReducer = combineReducers({
  team: cardReducer
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}
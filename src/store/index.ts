import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";
import filterReducer from "./slices/filterSlice";

const rootReducer = combineReducers({
  player: cardReducer,
  team: filterReducer,
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
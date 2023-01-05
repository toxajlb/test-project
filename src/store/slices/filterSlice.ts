import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICardFilter } from "../../models/models"

interface FilterState {
  loading: boolean
  filters: ICardFilter[]  
}

const initialState: FilterState = {
  loading: false,
  filters: []
}

export const filterSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSucces(state, action: PayloadAction<ICardFilter[]>) {
      state.loading = false;
      state.filters = action.payload;
    },
  }
})

export default filterSlice.reducer;
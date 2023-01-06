import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICardFilter } from "../../models/models"

interface FilterState {
  loading: boolean
  filters: ICardFilter[]  
  error: string
}

const initialState: FilterState = {
  loading: false,
  filters: [],
  error: ''
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
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export default filterSlice.reducer;
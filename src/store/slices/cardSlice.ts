import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICard } from "../../models/models"

interface CardState {
  loading: boolean,
  error: string,
  cards: ICard[]  
}

const initialState: CardState = {
  loading: false,
  error: '',
  cards: []
}

export const cardSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSucces(state, action: PayloadAction<ICard[]>) {
      state.loading = false;
      state.cards = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
})

export default cardSlice.reducer;
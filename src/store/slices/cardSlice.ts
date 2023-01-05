import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICard, ISelect } from "../../models/models"

interface CardState {
  loading: boolean
  error: string
  cards: ICard[] 
  cardContainer: ICard[] 
}

const initialState: CardState = {
  loading: false,
  error: '',
  cards: [],
  cardContainer: [],
}

export const cardSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<ICard[]>) {
      state.loading = false;
      state.cards = action.payload;
      state.cardContainer = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    cardFilter(state, action: PayloadAction<ISelect>) {
      state.cards = state.cardContainer
        .filter(card => card.team.city.includes(action.payload.city))
        .filter(card => card.team.name.includes(action.payload.name))
    }
  }
})

export default cardSlice.reducer;
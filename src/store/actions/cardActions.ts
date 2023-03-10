import { AppDispatch } from ".."
import axios from "../../axios"
import { ICard, ServerResponse } from "../../models/models";
import { cardSlice } from "../slices/cardSlice";

export const fetchCards = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(cardSlice.actions.fetching());

      const options = {
        method: 'GET',
        url: 'players',
        params: {page: '0', per_page: '50'},
        headers: {
          'X-RapidAPI-Key': '83b3d850f0mshb26091a1bc7956fp1209cfjsnc49d0963a38a',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
      }; 

      const response = await axios.request<ServerResponse<ICard>>(options);

      dispatch(cardSlice.actions.fetchSuccess(response.data.data));
    }
    catch (e) {
      dispatch(cardSlice.actions.fetchError(e as Error));
    }
  }
}
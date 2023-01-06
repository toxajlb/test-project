import { AppDispatch } from ".."
import axios from "../../axios"
import { ICardFilter, ServerResponse } from "../../models/models";
import { filterSlice } from "../slices/filterSlice";

export const fetchFilter = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(filterSlice.actions.fetching());

      const options = {
        method: 'GET',
        url: 'teams',
        params: {page: '0'},
        headers: {
          'X-RapidAPI-Key': '83b3d850f0mshb26091a1bc7956fp1209cfjsnc49d0963a38a',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
      };
      const response = await axios.request<ServerResponse<ICardFilter>>(options);
      
      dispatch(filterSlice.actions.fetchSucces(response.data.data));
    }
    catch (e) {
      dispatch(filterSlice.actions.fetchError(e as Error));
    }
  }
}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useDebounce } from "../../hooks/debounce";
import { useInput } from "../../hooks/input";
import { ICard, ServerResponse } from "../../models/models";
import classes from "./Search.module.scss";

export function Search() {
  const input = useInput('');
  const debounced = useDebounce<string>(input.value, 400);
  const [players, setPlayers] = useState<ICard[]>([]);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  async function searchCards() {
    const options = {
      method: 'GET',
      url: 'players',
      params: {search: debounced, per_page: '10'},
      headers: {
        'X-RapidAPI-Key': '83b3d850f0mshb26091a1bc7956fp1209cfjsnc49d0963a38a',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    }; 
    const response = await axios.request<ServerResponse<ICard>>(options);
    
    setPlayers(response.data.data)
  } 

  useEffect(() => {
    if (input.value.length > 2) {
      searchCards().then(() => setDropdown(true));
    }
    else {
      setDropdown(false);
    }
  }, [debounced])

  return (
    <div className={classes.container}>
      <input 
        type="text"
        className={classes.input}
        placeholder="Search..."
        {...input}
      />   

     {dropdown && <ul className={classes.search}>
        {
          players.map(player => (
            <li key={player.id}
                className={classes.query}
                onClick={() => navigate(`/detail/${player.id}`)}>
              {player.first_name} {player.last_name}
            </li>
          ))
        }
      </ul>}
    </div>

  )
}

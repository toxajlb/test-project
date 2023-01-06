import { useParams } from "react-router-dom";
import classes from "./DetailSinglePage.module.scss";
import axios from "../../axios";
import { ICard } from "../../models/models";
import { useState, useEffect } from "react";

export function DetailSinglePage() {
  
  const params = useParams<'id'>();
  const [card, setCard] = useState<ICard | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchDetail() {
    const options = {
      method: 'GET',
      url: `players/${params.id}`,
      headers: {
        'X-RapidAPI-Key': '83b3d850f0mshb26091a1bc7956fp1209cfjsnc49d0963a38a',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };
    const response = await axios.request<ICard>(options);
    setCard(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchDetail();
  }, []);

  if (loading) {
    return <div className={classes.loader}></div>
  }

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h4><p>Name: {card?.first_name} {card?.last_name}</p></h4> 
        <p>Position: {card?.position}</p> 
        <p>City: {card?.team.city}</p>
        <p>Conference: {card?.team.conference}</p>  
        <p>Division: {card?.team.division}</p>  
        <p>Team full name: {card?.team.full_name}</p>  
        <p>Team short name: {card?.team.name}</p> 
      </div>
    </div>
  )
}

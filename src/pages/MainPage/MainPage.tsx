import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
import classes from "./MainPage.module.scss";
import { useEffect } from "react";
import { fetchCards } from "../../store/actions/cardActions";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export function MainPage() {
  const dispatch = useAppDispatch();
  const { cards, error, loading } = useAppSelector(state => state.team);

  useEffect(() => {
    dispatch(fetchCards());
  }, [])
  
  
  if(loading) {
    return <div className={classes.loader}></div>
  }
  if(error) {
    return <p className={classes.error}>{error}</p>
  }

  return (
    <div className={classes.container}>
      <Search/>
      <Filter/>


      <div className={classes.cards}>
        {
        cards.map(card => <Card key={card.id} card={card} />)
        }
      </div>
      
    </div>
  )
}

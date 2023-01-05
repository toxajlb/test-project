import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import classes from "./Filter.module.scss";
import { ISelect } from "../../models/models";
import { cardSlice } from "../../store/slices/cardSlice";
import { ChangeEvent, useEffect, useState, MouseEvent } from "react";

export function Filter() {
  
  const {filters, loading} = useAppSelector(state => state.team);
  const dispatch = useAppDispatch();

  const [select, setSelect] = useState<ISelect>({
    city: '',
    name: ''
  });

  const hasFilter = () => {
    return select.city || select.name;
  }

  useEffect(() => {
    dispatch(cardSlice.actions.cardFilter(select))
  }, [select]);

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelect(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  const clearHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setSelect({
      city: '',
      name: ''
    })
  }

  if (loading) {
    return <div className={classes.loader}></div>
  }

  return (
    <div className={classes.container}>
      
      <span>Filter players by</span> 

      <form>
        <label htmlFor="name">team name: </label>
        <select name="name" className={classes.choose} onChange={changeHandler} value={select.name}>
        <option disabled value="">Choose team name</option>
        { filters.map(filter => <option key={filter.id}>{filter.name}</option>)}
        </select>
      </form>

      <form>
        <label htmlFor="city">city of the team: </label>
        <select name="city" className={classes.choose} onChange={changeHandler} value={select.city}>
        <option disabled value="">Choose city</option>
        {filters.map(filter => <option key={filter.id}>{filter.city}</option>)}
        </select>
      </form>

      {hasFilter() && <button className={classes.clear} onClick={clearHandler}>Clear filter</button>}
    </div>
  )
}

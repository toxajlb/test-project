import { useAppSelector } from "../../hooks/redux";
import classes from "./Filter.module.scss";

export function Filter() {
  
  const {filters, loading} = useAppSelector(state => state.team);

  if (loading) {
    return <div className={classes.loader}></div>
  }

  return (
    <div className={classes.container}>
      
      <span>Filter players by</span> 

      <form>
        <label htmlFor="name">team name: </label>
        <select name="name">
        { filters.map(filter => <option key={filter.id}>{filter.name}</option>)}
        </select>
      </form>

      <form>
        <label htmlFor="city">city of the team: </label>
        <select name="city">
        {filters.map(filter => <option key={filter.id}>{filter.city}</option>)}
        </select>
      </form>
    </div>
  )
}

import { Card } from "../../components/Card";
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
import classes from "./MainPage.module.scss";

export function MainPage() {
  
  return (
    <div className={classes.container}>
      <Search/>
      <Filter/>
      <Card/>
    </div>
  )
}

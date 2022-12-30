import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";

export function Navigation() {
  
  return (
    <nav className={classes.navigation}>

      <Link to="/" className={classes.main}>LOGO</Link>
      <div className={classes.authBlock}>
        <Link to="/signin"><button className={classes.btn}>Вход</button></Link>
        <Link to="/signup"><button className={classes.btn}>Регистрация</button></Link>
      </div>
    </nav>
  )
}

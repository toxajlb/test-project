import { Link } from "react-router-dom";
import * as AuthService from "../../services/auth.service";
import classes from "./Navigation.module.scss";
import { getCurrentUser } from "../../services/auth.service";

export function Navigation() {

  const currentUser = getCurrentUser();

  const logOut = () => {
    AuthService.logout();
  };
  
  return (
    <nav className={classes.navigation}>

      <Link to="/" className={classes.main}>NBA PLAYERS INFO</Link>

      {currentUser && 
      <>
        <Link to={"/profile"} className={classes.main}>
          {currentUser.username}
        </Link>

        <Link to={"/favorites"} className={classes.main}>
          Favorites
        </Link>

        <Link to={"/history"} className={classes.main}>
          History
        </Link>
      </>
      }

        {currentUser ? (
          <div>
            <a href="/signin" className={classes.main} onClick={logOut}>
              LogOut
            </a>
          </div>
        ) : (
          <div className={classes.authBlock}>
            <Link to="/signin"><button className={classes.btn}>LogIn</button></Link>
            <Link to="/signup"><button className={classes.btn}>SignUp</button></Link>
          </div>
        )}
    </nav>
  )
}

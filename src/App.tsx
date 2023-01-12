import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { useAppDispatch } from "./hooks/redux";
import { DetailSinglePage } from "./pages/DetailSinglePage/DetailSinglePage";
import { Favorites } from "./pages/Favorites";
import { MainPage } from "./pages/MainPage/MainPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { History } from "./pages/History";
import { fetchFilter } from "./store/actions/filterActions";
import { getCurrentUser } from "./services/auth.service";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const dispatch = useAppDispatch();
  const currentUser = getCurrentUser();

  useEffect(() => {
    dispatch(fetchFilter());
  }, [dispatch]);
  
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/signup" element={ <Register/> } />
        <Route path="/signin" element={ <Login/> } />
        <Route path="/detail/:id" element={!currentUser ? <h4 className="mt-5 text-center">Please, LogIn to see more information</h4> : <DetailSinglePage/> } />
        <Route path="/profile" element={!currentUser ? <Navigate to="/signin" replace /> : <Profile />} />
        <Route path="/history" element={!currentUser ? <Navigate to="/signin" replace /> : <History /> } />
        <Route path="/favorites" element={!currentUser ? <Navigate to="/signin" replace /> : <Favorites />} />
      </Routes>
    </>
  );
}

export default App;

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const dispatch = useAppDispatch();

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:id" element={ <DetailSinglePage/> } />
        <Route path="/history" element={<History />} />
        <Route path="/favorites" element={ <Favorites/> } />
      </Routes>
    </>
  );
}

export default App;

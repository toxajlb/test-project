import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { useAppDispatch } from "./hooks/redux";
import { DetailSinglePage } from "./pages/DetailSinglePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { SigninPage } from "./pages/SigninPage";
import { SignupPage } from "./pages/SignupPage";
import { fetchFilter } from "./store/actions/filterActions";

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
        <Route path="/signup" element={ <SignupPage/> } />
        <Route path="/signin" element={ <SigninPage/> } />
        <Route path="/detail/:id" element={ <DetailSinglePage/> } />
        <Route path="/favorites" element={ <FavoritesPage/> } />
      </Routes>
    </>
  );
}

export default App;

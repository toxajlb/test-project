import { Routes, Route } from "react-router-dom";
import { DetailSinglePage } from "./pages/DetailSinglePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { MainPage } from "./pages/MainPage";
import { SigninPage } from "./pages/SigninPage";
import { SignupPage } from "./pages/SignupPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/signup" element={ <SignupPage/> } />
        <Route path="/signin" element={ <SigninPage/> } />
        <Route path="/detail/:id" element={ <DetailSinglePage/> } />
        <Route path="/favorites" element={ <FavoritesPage/> } />
      </Routes>
    </div>
  );
}

export default App;

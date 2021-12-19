import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Favourites from "./pages/Favourites";
import Button from "./Components/Button";


function App() {
  return (
    <div className="App">
      <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"></img><br></br>
      <NavLink to="/">Home </NavLink>
      <NavLink to="characters">Characters </NavLink>
      <NavLink to="favourites">Favourites </NavLink>
      <NavLink to="episodes">Episodes </NavLink>

      <Routes>
        <Route path="/" element={<h2>Welcome to Rick and Morty</h2>} />
        <Route path="characters" element={<Characters />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="episodes" element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;

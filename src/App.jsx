import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty Wiki</h1>
      <NavLink to="/">Home </NavLink>
      <NavLink to="characters">Characters </NavLink>
      <NavLink to="favourites">Favourites </NavLink>
      <NavLink to="episodes">Episodes </NavLink>

      <Routes>
        <Route path="/" element={<h2>Welcome to Rick and Morty</h2>} />
        <Route path="characters" element={<Characters />} />
        <Route path="episodes" element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;

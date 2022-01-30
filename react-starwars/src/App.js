import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import HeroesPage from "./components/HeroesPage";
import MoviesPage from "./components/MoviesPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />

        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/heroes' element={<HeroesPage />} />
          <Route exact path='/movies' element={<MoviesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

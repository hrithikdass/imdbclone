import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieLise";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<> </>} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<h1>Hello</h1>} />
          <Route path="movie/:id" element={<Home />} />
          <Route path="movies/:type" element={<h1>Movies list page</h1>} />
          <Route path="/*" element={<h1>Error page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

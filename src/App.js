import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />

        <Route path="/articles" element={<Articles />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/*" element={<p>404 page not found!</p>} />
      </Routes>
    </div>
  );
}

export default App;

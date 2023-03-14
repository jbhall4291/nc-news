import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Articles />
    </div>
  );
}

export default App;

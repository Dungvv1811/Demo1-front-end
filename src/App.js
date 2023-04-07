import "./App.css";
import Table from "react-bootstrap";
import Header from "./components/Header";
import Headline from "./components/Headline";
import Home from "./components/Home";
// import Table from "react-bootstrap/Table";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <style>padding:50px; background-color:black;</style> */}
      <Home />
    </div>
  );
}

export default App;

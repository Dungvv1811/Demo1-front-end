import "./App.css";
import Table from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Home from "./components/Home";
import List from "./components/products/List";
import Create from "./components/products/Create";
import { BrowserRouter } from "react-router-dom";
// import Table from "react-bootstrap/Table";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          sadfdasfads
          <List />
          <Create />
          {/* <Header /> */}
          {/* <Home /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

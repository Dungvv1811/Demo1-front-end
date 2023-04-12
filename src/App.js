import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CreateProduct from "./components/products/Create";
import List from "./components/products/List";
import EditUser from "./components/products/Edit";
// import Table from "react-bootstrap/Table";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          sadfdasfads
          <List />
          <CreateProduct />
          {/* <EditUser /> */}
          {/* <Header /> */}
          {/* <Home /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

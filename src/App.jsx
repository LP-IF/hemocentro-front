import "./appStyle.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Donor from "./components/donor";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<Donor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

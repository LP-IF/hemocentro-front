import "./appStyle.css";
//fazer paths corretamente - donor -> /donor e admin -> /admin
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Donor from "./components/donor";
import Admin from "./components/admin";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          {/* <Route path="/" element={<Donor />}></Route> */}
          <Route path="/" element={<Admin />}>/</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

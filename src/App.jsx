import "./appStyle.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

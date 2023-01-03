import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./css/Main.css";
import App from "./component/App";
import Home from "./component/Home";
import DoneList from "./component/DoneList";
import DoingList from "./component/DoingList";
import MadeBy from "./component/MadeBy";
import More from "./component/More";

function Main() {
  return (
    <BrowserRouter>
      <div>
        <nav class="menu">
          <ul>
            <li className="list">
              <Link to="/">Home</Link>
            </li>
            <li className="list">
              <Link to="/todo">Todo List</Link>
            </li>
            <li className="list">
              <Link to="/doing">Doing List</Link>
            </li>
            <li className="list">
              <Link to="/done">Done List</Link>
            </li>
            <li className="list">
              <Link to="/madeby">Profile</Link>
            </li>
            <li className="list">
              <Link to="/more">Opinion</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<App />} />
          <Route path="/doing" element={<DoingList />} />
          <Route path="/done" element={<DoneList />} />
          <Route path="/madeby" element={<MadeBy />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;

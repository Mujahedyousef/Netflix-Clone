import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import FavList from "./components/FavList ";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/favList" element={<FavList />} />
      </Routes>



    </>
  );
}






import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import FavList from "./components/FavList/FavList ";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from 'react';

export default function App() {
const[favListData,setfavListData ]=useState()

async function getDataFromDB(){
  const response= await fetch(`${process.env.REACT_APP_SERVER}/movieInDatabase`)
  const data= await response.json()
  setfavListData(data)
}

useEffect(()=>{
  getDataFromDB()
},[])

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/favList" element={<FavList  favListData={favListData}    />} />
      </Routes>



    </>
  );
}






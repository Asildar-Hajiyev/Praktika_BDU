import React from 'react'
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Table from './components/Table';
import Person from "./data/Person.json"
import Register from './components/Register';
import Project from './pages/Project';
import Reseption from './build/Reseption';
import Floors from './build/Floors';
import Room1 from './build/Room1';
import Room2 from './build/Room2';
import Room3 from './build/Room3';
import Room4 from './build/Room4';
import SingIn from './pages/SingIn';

function App() {
  return (
    <div className="App">
    <Header/> 
   
    <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/reseption' element={<Reseption/>}/>
          <Route path='/floors' element={<Floors/>}/>
          <Route path='/room1' element={<Room1/>}/>
          <Route path='/room2' element={<Room2/>}/>
          <Route path='/room3' element={<Room3/>}/>
          <Route path='/room4' element={<Room4/>}/>
          <Route path='/singin' element={<SingIn/>}/>
          <Route path="/table" element={<Table
           head={[
            { name: "Name", sortable: true },
            { name: "Email" },
            { name: "Phone", sortable: true },
            { name: "IBAN", width: 200 },
          ]}
          body={Person?.map((user) => [
            user?.name,
            user?.email,
            user?.phone,
            user?.list?.slice(0, 10),
          ])} />} />
        </Routes>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import data from './babyNamesData.json';
import ListBabyNames from './ListBabyNames';
import BoySymbol from './babyboysymbol';
import GirlSymbol from './babygirlsymbol';
import BoyGirlSymbol from './babyboygirl';

const  App = () => {

  const [names, setName] = useState('')
  const [babyName, setBabyName] = useState ([])

  const handleChange = e => {
    setName((e.target.value).toLowerCase())
  }

  useEffect( () => {
    setBabyName (data.filter( item => item.name.toLowerCase().includes(names)))
  }, [names])

    return (
      <div className="App">
        <div className="nav-bar">
          <input className="search-input" label='Search Names' placeholder="Search names" onChange={handleChange}></input> 
          <div  className='baby-icons'>
            <GirlSymbol data={data} setBabyName={setBabyName}/>
            <BoySymbol data={data} setBabyName={setBabyName}/>
            <BoySymbol data={data} setBabyName={setBabyName}/>
          </div>
        </div>
        <ListBabyNames babyNames = {babyName}/>
        <hr className="line"></hr>
      </div>
    );
}
export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import data from './babyNamesData.json';
import ListBabyNames from './ListBabyNames';

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
        {<input className="search-input" label='Search Names' placeholder="Search names" onChange={handleChange}></input> }
        <ListBabyNames babyNames = {babyName}/>
        <hr className="line"></hr>
      </div>
    );
}
export default App;

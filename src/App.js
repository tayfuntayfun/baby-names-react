import React, { useState } from 'react';
import './App.css';
import data from './babyNamesData.json';
import ListBabyNames from './ListBabyNames';
import BoySymbol from './babyboysymbol';
import GirlSymbol from './babygirlsymbol';
import BabyBoyGirl from './babyboygirl';

const  App = () => {

  const [names, setNames] = useState(data)

  const handleChange = e => {
    const name = e.target.value.toLowerCase();
    const filteredNames = data.filter(item => item.name.toLowerCase().includes(name));
    setNames(filteredNames)
  }

  const filterByGender = gender => {
    if(gender.length > 0){
      const filteredNames = data.filter(item => item.sex === gender)
      setNames(filteredNames)
    } else {
      setNames(data)
    }
  }

    return (
      <div className="App">
        <div className="nav-bar">
          <input className="search-input" label='Search Names' 
            placeholder="Search names" onChange={handleChange}></input> 
          <div  className='baby-icons'>
            <GirlSymbol data={data} setBabyName={filterByGender}/>
            <BoySymbol data={data} setBabyName={filterByGender}/>
            <BabyBoyGirl data={data} setBabyName={filterByGender}/>
          </div>
        </div>
        <ListBabyNames babyNames = {names}/>
        <hr className="line"></hr>
      </div>
    );
}
export default App;

import React, { useState } from 'react';
import './App.css';
import data from './babyNamesData.json';
import ListBabyNames from './ListBabyNames';
import BoySymbol from './BoySymbol';
import GirlSymbol from './GirlSymbol';
import BabyBoyGirl from './Babyboygirl';
import FavoriteNames from './FavoriteNames';

const  App = () => {

  const [names, setNames] = useState(data)
  const [favoriteNames, setFavoriteNames] = useState([]);

  const handleChange = e => {
    const name = e.target.value.toLowerCase();
    const filteredNames = data.filter(item => item.name.toLowerCase().includes(name));
    setNames(filteredNames)
  }

  const filterByGender = gender => {
    if(gender.length > 0){
      const genderFilteredNames = data.filter(item => item.sex === gender)
      setNames(genderFilteredNames)
    } else {
      setNames(data)
    }
  }

  const addToFavorites = value => {
    setFavoriteNames([...favoriteNames, value]);
    // const updatedNames = names.filter(name => name.id !== (value.id));  IF YOU WANT TO REMOVE/ADD FAVORITES FROM THE VISUALISED NAMES
    // setNames(updatedNames)
  };

  const removeFromFavorites = value => {
    const updatedFavoriteNames = favoriteNames.filter(name => name.id !== value.id);
    setFavoriteNames(updatedFavoriteNames);
    // const updatedNames = [...names, value];  IF YOU WANT TO REMOVE/ADD FAVORITES FROM THE VISUALISED NAMES
    // setNames(updatedNames)
  };

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
        <div>
          <FavoriteNames addNames={favoriteNames} removeNames={removeFromFavorites} />
          <hr width='80%' color='blue'/> 
        </div>
        <ListBabyNames babyNames = {names} addToFavorites={addToFavorites}/>
        <hr className="line"></hr>
      </div>
    );
}
export default App;

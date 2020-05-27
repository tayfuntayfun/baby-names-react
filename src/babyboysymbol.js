import React from 'react';

const BoySymbol = (props) => {
    const imgClick = () => {
        props.setBabyName (props.data.filter( item => item.sex === 'm'))
      }  
    return (
        <div className='baby-icons'>
            <img className="baby-boy-icon" src='https://cdn.clipart.email/22c31379614a58db46ba8d122feafb4f_cropped-baby-boy-footprint-clipart-1png-platvoet-platteland_512-512.png' onClick = {() => imgClick()} height="40" alt=''></img>
        </div>
    )
} 

export default BoySymbol


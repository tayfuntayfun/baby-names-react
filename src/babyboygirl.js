import React from 'react';

const BoyGirlSymbol = (props) => {
    const imgClick = () => {
        props.setBabyName (props.data.filter( item => item))
      }  
    return (
        <div className='baby-icons'>
            <img className="baby-boy-icon" src='https://cdn.clipart.email/d6c4fbdb1f12237456d4e044ba807801_free-baby-footprints-download-free-clip-art-free-clip-art-on-_600-518.png' onClick = {() => imgClick()} height="40" alt=''></img>
        </div>
    )
} 

export default BoyGirlSymbol








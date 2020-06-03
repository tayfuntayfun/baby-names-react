import React from 'react';

const GirlSymbol = (props) => {
    return (
        <div>
            <img className="baby-icon" src='https://cdn.clipart.email/7c795a0c1c7a8c6843a0cac42dfa20a6_pink-baby-feet-clip-art-baby-footprint-clipart-469-296-zion-_469-296.png' onClick = {() => props.setBabyName('f')} height="40" ></img>
        </div>
    )
} 

export default GirlSymbol


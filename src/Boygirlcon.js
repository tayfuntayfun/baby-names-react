import React from 'react';

const BabyBoyGirl = (props) => {
    
    return (
        <div className='boy-girl-icon'>
            <img className="baby-icon" src='https://cdn.clipart.email/d6c4fbdb1f12237456d4e044ba807801_free-baby-footprints-download-free-clip-art-free-clip-art-on-_600-518.png' 
            onClick = {() => props.setBabyName('')} height="40" alt=''>
            </img>
        </div>
    )
} 

export default BabyBoyGirl







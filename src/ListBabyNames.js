import React from 'react';

const ListBabyNames = (props) => { 
    return (
        <div className='allBabyNames'>
            {props.babyNames
                .sort((aBaby, bBaby) => aBaby.name > bBaby.name ? 1 : -1 )
                .map((baby, index)=> (
                <p key={index} className={baby.sex} onClick={()=>props.addToFavorites(baby)}>{baby.name}</p>)
                )
            }
        </div>
    )
}

export default ListBabyNames;
import React, {useState} from 'react'

const FavoriteNames = (props) => {
    return (
        <div>
            <div className="favorites">
            <span>Favorite Names</span>
            {props.addNames.map((name) => (
                <span
                key={name.id}
                className={name.sex}
                onClick={() => props.removeNames(name)}
                >
                {name.name}
                </span>
            ))}
            </div>
        </div>
    )

}

export default FavoriteNames;
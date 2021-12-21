import React from 'react'
import Square from './Squere'

const Game = ({Square,onClick}) => {
    const renderSquare = i =>{
        return (
                <Square
                value={Square[i]}
                onClick={() => {
                onClick(i);
                }}
                />
        )
    }

    return(
        <>
        <div className="border-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        </>
    )
}

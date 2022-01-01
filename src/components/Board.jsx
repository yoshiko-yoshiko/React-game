import React from 'react'
import Square from './Square'

const Board = ({ square,onClick }) =>{
    // Game コンポーネントから { squares, onClick } = props を受け取っている
    const renderSquare = i => {
        return (
            <Square
                value={square[i]}
                onClick={() =>{
                    onClick(i);
                }}
            />
        );
    };

    return (
        <>
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        </>
    );
};
export default Board;
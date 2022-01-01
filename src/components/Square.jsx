import React from 'react'

// Board（盤面） コンポーネントから { onClick, value } = props を受け取っている
const Square = ({onClick,value}) =>{
    return(
        <button onClick={onClick}>
            {value}
        </button>
    )
}
export default Square;
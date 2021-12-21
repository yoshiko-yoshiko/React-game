import React from 'react'

const Square = ({onClick,value}) => {
    return (
        <div>
            <button className='square' onClick={() => - props.onClick()}>
                {props.value}
            </button>
        </div>
    )
}

export default Square;
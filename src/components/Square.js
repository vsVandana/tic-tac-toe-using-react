import React from 'react'

const Square = ({value, onSquareClick}) => {
   
  return (
    <div>
        <div className='square' onClick={onSquareClick}>{value}</div>
    </div>
  )
}

export default Square
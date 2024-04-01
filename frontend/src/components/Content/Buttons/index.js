import React from 'react'

function Buttons() {
  return (
    <div className='buttons-container'>  
      <div>
        <button className='btn btn-like'>This is Funny!</button>
      </div>
      <div>
        <button className='btn btn-dislike'>This is not funny.</button>
      </div>
    </div>
  )
}

export default Buttons
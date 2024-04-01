import React from 'react'

function Buttons({ handleNextStory }) {
  return (
    <div className='buttons-container'>  
      <div>
        <button onClick={handleNextStory} className='btn btn-like'>This is Funny!</button>
      </div>
      <div>
        <button onClick={handleNextStory} className='btn btn-dislike'>This is not funny.</button>
      </div>
    </div>
  )
}

export default Buttons
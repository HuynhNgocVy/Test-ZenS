import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Buttons from './Buttons'
import { jokes } from "../../data/jokes"

function Content() {
  const [cookies, setCookie] = useCookies(['readJokes'])
  const readJokes = cookies.readJokes || []
  const [ visable, setVisiable ] = useState(true)
  const [ storyIndex, setStoryIndex ] = useState(() => {
    if (readJokes.length === jokes.length) {
      setVisiable(false)
      return -1
    } else {
      const unreadJokes = jokes
        .map((_, index) => index)
        .filter(index => !readJokes.includes(index));
      const randomIndex = Math.floor(Math.random() * unreadJokes.length)
      return unreadJokes[randomIndex]; 
    }
  })
  const handleNextStory = () => {
    const unreadJokes = jokes
      .map((_, index) => index) 
      .filter(index => !readJokes.includes(index))

    if (unreadJokes.length === 0) {
      setStoryIndex(-1)
      setVisiable(false)
      return
    }
  
    const randomIndex = Math.floor(Math.random() * unreadJokes.length);
    setStoryIndex(unreadJokes[randomIndex])
    setCookie('readJokes', [...readJokes, unreadJokes[randomIndex]], { path: '/' })
  }

  useEffect(() => {
    if (readJokes.length === jokes.length) {
      setStoryIndex(-1)
      setVisiable(false)
    }
  }, [readJokes])
  return (
    <main id='content'>
      <div className='container'>
        <div className='content-joke'>
          <p>
            {jokes[storyIndex] ? jokes[storyIndex] : "That's all the jokes for today! Come back another day!"}
          </p>
        </div>
        { visable &&
            <>
              <div className='line'></div>
              <Buttons handleNextStory={handleNextStory}/> 
            </>
        }
      </div>
    </main>
  )
}

export default Content
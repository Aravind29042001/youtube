import React from 'react'
import Btns1 from './Btns1'

function Buttonlist() {
  var listitem1 = ["All", "Music", "songs", "play", "All", "Music", "songs", "play", "All", "Music", "songs", "play", "All", "Music", "songs", "play"]
  return (
    <div className='btn2'>
      {
        listitem1.map((list) =>
        (
          <Btns1 value={list} />
        )
        )
      }
    </div>
  )
}

export default Buttonlist
import React from 'react'
import "./greenbutton.css";

function GreenButton({link,text}) {
  return (
        <a href={link} className='green_button'>
            {text}
        </a>
  )
}

export default GreenButton
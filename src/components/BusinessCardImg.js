import React from 'react'

export default function BusinessCardImg(props) {
  return (
    <div class='cardimg'>
        <a href={`https://www.${props.web}.com`} target="_blank" rel="noopener noreferrer"><img src={props.src} alt="twitter"/></a> 
    </div>
  )
}

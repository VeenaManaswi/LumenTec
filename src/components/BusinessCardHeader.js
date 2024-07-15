import React from 'react'
import Girl from '../images/BusinessCardGirl.jpg'

export default function BusinessCardHeader() {
  return (
    <div class='CardTop' align='center'>
      <img src={Girl} alt="Girl" />
      <h2>Anshika</h2>
      <h4>Owner of Floweralla</h4>
      <ul>
        <li><button>Email</button></li>
        <li><button>Linkedin</button></li>
      </ul>
    </div>
  )
}

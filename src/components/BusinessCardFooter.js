import React from 'react'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.jpg' 
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import BusinessCardImg from './BusinessCardImg'

export default function BusinessCardFooter() {
  return (
    <div class='cardimages'>
      <BusinessCardImg src={twitter} web="twitter"/>
      <BusinessCardImg src={instagram} web="instagram"/>
      <BusinessCardImg src={github} web="github"/>
      <BusinessCardImg src={linkedin} web="linkedin"/>
    </div>
  )
}

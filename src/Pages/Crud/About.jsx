import React, { useEffect } from 'react'
import axios from "axios"


const About = () => {
  useEffect(async () => {
    document.title = "About page"
    const res = await axios.get('https://67f351c1ec56ec1a36d568c5.mockapi.io/Api');  
    console.log(res.data)
  },[])
 
  return (
    <div>
        <h1>About page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reiciendis magnam ad, provident architecto aliquam alias ipsam doloribus illum tempore, deserunt pariatur quis quas voluptatum deleniti sequi, dolores ut rem odio itaque odit perspiciatis nulla? Dolorum amet repellendus architecto alias, quibusdam vero illum repudiandae dolore voluptatum, aut, distinctio a sequi?</p>
    </div>
  )
}

export default About
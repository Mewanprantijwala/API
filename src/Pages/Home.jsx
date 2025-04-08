import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.title = "CARAUTOPARTS"
  }, [])

  return (
    <div>
      <h1>CARAUTOPARTS</h1>
      <p>Welcome to CARAUTOPARTS, your one-stop shop for all your automotive needs. Explore our wide range of car parts and accessories to keep your vehicle running smoothly.</p>
    </div>
  )
}

export default Home

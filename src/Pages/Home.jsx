import React from 'react'
import './Home.css'
import foto from './../Assets/BC.jpeg'

function Home() {
  return (
    <section className='container-Home'>
        <div className='container-foto'>
          <img src={foto} alt="Foto" />
        </div>
        <div className='container-capt'>
          <div className="caption-Home">
            <h3>Привет!</h3>
            <h4>My name is Akira Rizky Rosyadi. I’m Final-year student in Russian Technological University and I’m a Front-end Engineer and UI/UX Designer.</h4>
          </div>
        </div>
    </section>
  )
}

export default Home
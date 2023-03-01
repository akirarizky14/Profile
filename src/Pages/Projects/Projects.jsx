import React from 'react';
import dummy from './../../Assets/dummy-1.jpg';
import './Projects.css';
import color from './../../Assets/color.jpg';
import maths from './../../Assets/maths.jpg';
import OD from './../../Assets/OD.jpg';
import tw from './../../Assets/tw.png';
import python from './../../Assets/python.jpg';
import android from './../../Assets/android.jpg';
function Projects() {
  return (
    <section className='container-Projects'>
        <div className='title-projects'>
            <h1>PROJECTS</h1>
            <hr />
        </div>
        <div className='projects-cards'>
            <a href="https://akirarizky14.github.io/Color_generator/" className='container-cards'>
                <img src={color} alt="dummy" />
                <h3>Color generator</h3>
            </a>
            <a href='https://akirarizky14.github.io/Random_Number/' className='container-cards'>
                <img src={maths} alt="dummy" />
                <h3>Random Number</h3>
            </a>
            <a href='https://github.com/akirarizky14/ObjectDetection-OpenCv-Python' className='container-cards'>
                <img src={OD} alt="dummy" />
                <h3>Object Detection AI</h3>
            </a>
            <a href='https://www.figma.com/file/c667IWKmauctQy6wVfDVSK/Untitled?node-id=0%3A1&t=2X5UgfCXG2uamBEZ-1' className='container-cards'>
                <img src={tw} alt="dummy" />
                <h3>Design with Figma</h3>
            </a>
            <a href='https://github.com/akirarizky14/Python2-Semester-4' className='container-cards'>
                <img src={python} alt="dummy" />
                <h3>100+ Algorithms PY</h3>
            </a>
            <a href='https://github.com/akirarizky14/Practice2-MobileApps' className='container-cards'>
                <img src={android} alt="dummy" />
                <h3>Android Studio</h3>
            </a>
        </div>
    </section>
  )
}

export default Projects
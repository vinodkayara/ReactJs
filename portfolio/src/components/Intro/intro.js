import React from 'react';
import './intro.css';
import bg from '../Intro/vinod.jpeg';
import { Link } from 'react-scroll';
import btnImg from '../Intro/hireme.png';

function Intro() {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='intoText'>I'm <span className="introName">Vinod</span> <br /> Website Designer</span>
        <p className='introPara'>I am a skilled web designer with experience in creating <br />visually appealing and user-friendly websites.</p>

        <div className="buttonContainer">
          <Link>
            {/* <button className='btn'>
              <img src={btnImg} alt="Hire" className='btnImg' /> Hire Me
            </button> */}
          </Link>
          <a href="https://drive.google.com/file/d/1jr-AI1OF96Y7_Y7lU9jJ15v8GEjdUk4T/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className='btn'>
              <img src={btnImg} alt="Resume" className='btnImg' /> Download Resume
            </button>
          </a>
        </div>
      </div>
      <img src={bg} alt="profile" className='bg' />
    </section>
  );
}

export default Intro;

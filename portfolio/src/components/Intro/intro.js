import React from 'react';
import './intro.css';
import bg from '../Intro/vinod.jpeg';
import {Link} from 'react-scroll';
import btnImg from '../Intro/hireme.png';

function intro() {
  return (
  <section id='intro'>
    <div className='introContent'>
                    <span className='hello'>Hello,</span>
                    <span className='intoText'>I'm<span className="introName">Vinod</span> <br/> Website Designer</span>
                    <p className='introPara'>I am a skilled web designer with experience in creating <br/>visually appealing and user-friendly Website.</p>
                    <Link><button className='btn'><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button>
                    </Link>
    </div>
    <img src={bg} alt="profile" className='bg'/>
  </section>
  );
}

export default intro;
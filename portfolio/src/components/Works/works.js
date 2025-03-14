import React from 'react';
import './works.css';
import Portfolio1 from '../Works/portfolio-1.png';
import Portfolio2 from '../Works/portfolio-2.png';
import Portfolio3 from '../Works/portfolio-3.png';
import Portfolio4 from '../Works/portfolio-4.png';
import Portfolio5 from '../Works/portfolio-5.png';
import Portfolio6 from '../Works/portfolio-6.png';

function works() {
  return (
    <section id ='works'>
      <h2 className='workstitle'>My Portfolio </h2>
      <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my worj is pixel perfect. I am exited to bring my skills and experience to help businesses achieve their goals and create a strong online presence</span>
      <div className='worksImgs'>
          <img src={Portfolio1} alt="" className='worksImg'/>
          <img src={Portfolio2} alt="" className='worksImg'/>
          <img src={Portfolio3} alt="" className='worksImg'/>
          <img src={Portfolio4} alt="" className='worksImg'/>
          <img src={Portfolio5} alt="" className='worksImg'/>
          <img src={Portfolio6} alt="" className='worksImg'/>
      </div>
      <button className='worksbtn'> See More</button>
    </section>
  )
}

export default works;
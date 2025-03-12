import React from 'react';
import './skills.css';
import UIDesign from '../Skills/ui-design.png';
import WebDesign from '../Skills/website-design.png';
import AppDesign from '../Skills/app-design.png';

function skills() {
  return (
   <section id='skills'>
        <span className ='skillTitle'>What I do</span>
        <span className ='skillDesc'>I am a skilled and passionate web designer with expereinece in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen wyw for detail. Iam proficient in HTML,CSS, and Javscript, as well as design software.</span>
        <div className='skillBars'>
            <div className='skillBar'>
            <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
             <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>
                      I have undertaken the project ehic is relayed to UI?UX Design.
                </p>
             </div>
         </div>
        

        <div className='skillBar'>
            <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Website Design</h2>
                <p>
                   I created ecommerece website and personal website using REact Js .
                </p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>
                    App Design
                </h2>
                <p>
                     
                     I did some projects on mobile app development
                </p>
            </div>
        </div>
    </div>

    </section>
  );
}

export default skills;
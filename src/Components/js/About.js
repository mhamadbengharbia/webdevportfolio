import React  from 'react';
import './style.css';
import mypic from "../src/Mypic.webp";
function About() {
  return (
    <div className="about "  id="about">
    <div className='abouttop'>
        <div className='aboutleft'>
            <img src={mypic} alt='my picture' />
            </div>    
            <div className='aboutrigth'>
                <h1>About Me /></h1>
                <p className=''>
Passionate about the web and possessing a
great curiosity, I am a Coding Dojo-certified full-stack web developer.
Like a child playing puzzles, coding
is a passion that allows me to express my added value by creating
intuitive interfaces. I want to join a team where I can constantly develop my
skills and grow together.

                </p>
            </div>   
    </div>        
    <div className='aboutbuttom'>
        <div>
            <h3>Contact</h3>
            <p>mhamedbengharbia@gmail.com</p>
        </div>
        <div>
            <h3>Phone</h3>
            <p>(+216) 21 420 848</p>
        </div>
        <div>
            <h3>Date of birth</h3>
            <p>November 02, 1994</p>
        </div>
        <div>
            <h3>Spoken Languages</h3>
            <p>English - Arabic - French</p>
        </div>
        <div id="interets">
            <h3>Interest</h3>
            <p>Camping, Chess, Technology</p>
        </div>
    </div>
    <hr />

    </div>   

  );
}


 



export default About;

import React from 'react';
import './style.css';
import img1 from "../src/server.webp";
import img2 from "../src/reseau.webp";
import img3 from "../src/web.webp";

function Skills() {
 

  return (
    <div className="Skills"  id="skills">
      <div className='skillstop'>
        <h1>I'm Glad You're Still Here</h1>
        <p>"Like a child solving a puzzle, I find passion in designing and implementing networking solutions that connect systems seamlessly and enhance communication."
        </p>
      </div>

    <div className='buttomskills'>

 <div> 
            <img src={img3} />    
            <h1> Front-end</h1>
            <p>I enjoy coding from scratch, building intuitive interfaces with clean design patterns and structured content, bringing ideas to life in the browser.
            </p>
            <h1>Languages & Tools:</h1>
            <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Bootstrap</li>
     <li>jQuery</li>
    <li>WordPress</li>
     <li>GitHub</li>
</ul>
        </div>








        <div> 
            <img src={img2} />    
            <h1> Back-end</h1>
            <p>
From managing APIs to handling authentication and data flow, I focus on building reliable 
back-end systems that keep everything running smoothly behind the scenes.




</p>
            <h1>Key Skills & Tools:</h1>
            <ul>
    <li>Python</li>
    <li>Flask</li>
    <li>C# / .NET</li>
    <li>Express.js</li>
    <li>OOP</li>
    <li>Mongoose</li>
    <li>Sql</li>
    <li>Node.js</li>
</ul>
        </div>
       
 
        <div> 
            <img src={img1} />    
            <h1> Databases </h1>
<p>
Whether working with SQL or NoSQL solutions, I focus on designing clean schemas and 
maintaining data integrity to support scalable, high-performance applications.
</p>
<h1>Technologies:</h1>
<ul>
    <li>MySQL</li>
    <li>MongoDB</li>
 
</ul>
<h1>Clouds:</h1>
<ul>
    <li>AWS</li>
    <li>Oracle</li>
    <li>Azure</li>
 
</ul>


        </div>




       
    </div>
 
    </div>
  );
}

export default Skills;

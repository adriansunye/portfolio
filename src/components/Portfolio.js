import React from 'react';
import {useNavigate} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

import hero from "../media/hero.svg";
import frontEnd from "../media/frontend.svg";
import covidTracker from "../media/2.webp";
import toquenDom from "../media/1.webp"; 
import movieApp from "../media/3.webp";  

function Portfolio() {
  let navigate = useNavigate();
  return (
    <main class="mt-2">
      <div>
      <section class="section-title text-center">
        <div class="section-body">
        <h1 class="title">Front-end and Back-End Developer</h1>
          <h2 class="subtitle">I code simple things that work, and I love what I do.</h2>
          <div class="section-foot">
            <div class="container "><img class="section-img" src={hero}/></div>
          </div> 
        </div> 
      </section>
      <section class="section-skills text-center">
        <div class="box">
          <div class="">
            <figure class="image"><img class="is-skill-icon" src={frontEnd}/></figure>
            <h1 class="bold">Front-end and Back-end Developer</h1>
            <p>I like to code things using logic, and enjoy seeing all come together.</p>
            <p class="list-title">Languages I speak:</p>
            <p>HTML, CSS, Sass, Less, JS, Java, PHP, mySQL</p>
            <p class="list-title">Dev Tools:</p>
            <ul class="list-skills">
              <li>React</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Codepen</li>
              <li>Github</li>
              <li>Terminal</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section-projects text-center container">
      <div class="container container-projects">
        <h1 class="title-projects">My Recent Work</h1>
        <h2 class="subtitle">Here are a few design projects I've worked on recently. Want to see more? <a onClick={() => window.location = 'mailto:adrian.sunye@gmail.com'}>Email me</a>.</h2>
        <div class="project-grid">  
          <div class="columns">
            <div class="column">
              <figure class="image-projects"><img class="project-thumb" src={covidTracker}/>
                <figcaption>
                  <h1 class="title-hover">Covid tracker, tracks a lot of data about Coronavirus.</h1><a class="btn btn-outline-info btn-hover" href="" target="_blank"><span>Visit Website</span><span class="icon"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
            <div class="column">
              <figure class="image-projects"><img class="project-thumb" src={toquenDom}/>
                <figcaption>
                  <h1 class="title-hover">Piano, created with CSS and using eventListeners to reproduce music</h1><a class="btn btn-outline-info btn-hover" href="" target="_blank"><span>Visit Website</span><span class="icon"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
            <div class="column">
              <figure class="image-projects"><img class="project-thumb" src={movieApp}/>
                <figcaption>
                  <h1 class="title-hover">Movie App, calling The Movie DB organize and search movies.</h1><a class="btn btn-outline-info btn-hover" href="" target="_blank"><span>Visit Website</span><span class="icon"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div> 
  <section class="section-contact text-center">
    <div class="box bg-dark">
      <div class="container container-projects">
        <h1 class="title">Start a project</h1>
      </div>
      <div class="">
        <p>Interested in working together? We should queue up a chat.</p>
      </div>
      <div class=""><a class="btn btn-info" onClick={() => 
            {navigate("/contact")
          }} >Let's do this</a></div>
    </div>
    <footer class="section text-center">
      
    </footer>
  </section>
  </main>
  );
}

export default Portfolio;
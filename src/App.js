import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section class="s1">

          <div class="main-container">
              <div class="greeting-wrapper">
                  <h1>Hi, i'm Elvis Batsista </h1>
              </div>

              <div class="intro-wrapper">

                  <div class="nav-wrapper">
                      <div class="dots-wrapper">
                          <div id= "dot-1" class="browser-dot"></div>
                          <div id= "dot-2" class="browser-dot"></div>
                          <div id= "dot-3" class="browser-dot"></div>
                      </div>
                      <ul id="dnavigation">
                          <li><a href="">Contact</a></li>
                      </ul>
                  </div>

                  <div class="left-column">
                      <img id="profile-pic" src="" alt=""></img>
                      <h5 className = "theme-selector">Personalize theme</h5>
                      <div id="theme-options-wrapper">
                          <div id = "light-mode"class="theme-dot"></div>
                          <div id = "blue-mode"class="theme-dot"></div>
                          <div id = "green-mode"class="theme-dot"></div>
                          <div id = "purple-mode"class="theme-dot"></div>
                      </div>

                      <p id="settings-note"> *Theme settings will be saved for<br/> your next visit</p>
                  </div>

                  <div class="right-column">

                      <div id="preview-shadow">

                          <div id="preview">
                              <div id= "corner-TL" class="corner"></div>
                              <div id= "corner-TR" class="corner"></div>
                              <h3>What I Do</h3>
                              <p>"Some inspirational shit" Some inspirational shit Some inspirational shit</p>
                              
                              <div id= "corner-BL" class="corner"></div>
                              <div id= "corner-BR" class="corner"></div>
                          </div>

                      </div>
                      
                  </div>
              </div>

          </div>

      </section>

      <section class="s2">

          <div class="main-container">
              <div class="about-section">
                  <div class="more-about-me">
                      <div class="aboutMe-wrapper">
                          <h5>More about me</h5>
                          <p class="inforBoutMe">
                              I'm a 19 years old college student that likes to build new projects
                              to solve problems in my souroudings.
                              <br/>
                              <br/>
                              While university takes up a lot of time i still take my time to
                              do projects and participate in interviews in search of a great team &
                              projects i could get to find interesting.
                              
                          </p>
                      </div>
                  </div>
                  
                  <div class= "top-expertise">
                      <h5>TOP EXPERTISE </h5>
                      <p>Junior developer with primary focus on React: <a href="#"> <br/>Download Resume</a></p>
                      <div class="experiences-wrapper">
                          <div class="languages-wrapper">
                              <div class="languages">
                                  <p>Python</p>
                                  <p>HTML/CSS</p>
                                  <p>React</p>
                                  <p>JavaScript</p>
                                  <p>C#</p>
                              </div>
                          </div>
                      </div>
                      
                  </div>
                  <div class="social-section">
                      <div>
                          <img class="gitHub-image" src="" alt=""></img>
                      </div>
                      <div class = "GH-link">
                          <a href="https://github.com/Kakuhiry">@Kakuhiry</a>
                      </div>
                      
                  </div>
              </div>
          </div>

      </section>

      <section class="s1">

          <div class="main-container">
              Portafolio
          </div>

      </section>

      <section class="s2">

          <div class="main-container">
              Contact
          </div>

      </section>
      </div>
  );
}

export default App;

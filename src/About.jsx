import React, { useState } from 'react';

import './About.css';
function About() {

  const [showSkills, setShowSkills] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('backend');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowSkills(true); // Set to true to display skills when category is clicked
  };
  return (
    <>


      <section id="about" class="about">


        <div class="about-me container">

          <div class="section-title">
            <h1 style={{ letterSpacing: "2px" }}> <b>WHAT I DO.</b></h1>
            <br></br>
          </div>

          <div class="row">

            <div class="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h2>Software Engineer</h2>

              <p>
                I am a software engineer with a knack of exploring new technologies and honing my skills in it .
                I have experience of 1.6 years in the industry and currently working as a Software Engineer that focuses on building APIs for microservices, nitty-gritty business logics and AWS services. </p>
              <br></br>
              <p>Here are few technologies that are cup of my tea </p>
              {/* <div class="row" style={{ paddingTop: "15px" }}>
                <div class="col-lg-4">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Java</strong> </li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Spring Boot</strong> </li>
                    <li><i class="bi bi-chevron-right"></i> <strong>SQL</strong> </li>
                    <li><i class="bi bi-chevron-right"></i> <strong>AWS</strong> </li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Azure Devops</strong> </li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul>

                    <li><i class="bi bi-chevron-right"></i> <strong>Hibernate</strong></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Microservices</strong></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>JavaScript</strong></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>React</strong></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Git </strong> </li>
                  </ul>
                </div>
              </div> */}
              <div className="skills-box">
                <div className="top-box">

                  <ul className="category-links">
                    <li>
                      <button onClick={() => handleCategoryClick('backend')}>Backend</button>
                    </li>
                    <li>
                      <button onClick={() => handleCategoryClick('frontend')}>Frontend</button>
                    </li>
                    <li>
                      <button onClick={() => handleCategoryClick('tools')}>Others</button>
                    </li>
                  </ul>
                </div>
                {showSkills && selectedCategory === 'backend' && (
                  <div className="skills-list">

                    <div class="row">
                      <div class="col-lg-4">
                        <ul   >
                          <li><i class="bi bi-chevron-right"></i> <strong>Java</strong> </li>
                          <li><i class="bi bi-chevron-right"></i> <strong>Spring Boot</strong> </li>


                        </ul>

                      </div>
                      <div class="col-lg-4" >
                        <ul >

                          <li><i class="bi bi-chevron-right"></i> <strong>Spring MVC</strong></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>SQL</strong></li>

                        </ul>
                      </div>

                      <div class="col-lg-4 "  >
                        <ul  >

                          <li><i class="bi bi-chevron-right"></i> <strong>Hibernate</strong></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>REST</strong> </li>

                        </ul>
                      </div>
                    </div>
                  </div>

                )}
                {showSkills && selectedCategory === 'frontend' && (
                  <div className="skills-list">
                    <div class="row">
                      <div class="col-lg-4">
                        <ul>
                          <li><i class="bi bi-chevron-right"></i> <strong>HTML</strong> </li>
                          <li><i class="bi bi-chevron-right"></i> <strong>CSS</strong> </li>
                          
                        </ul>
                      </div>
                      <div class="col-lg-4">
                        <ul>

                          <li><i class="bi bi-chevron-right"></i> <strong>JavaScript</strong></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>React</strong></li>
                         
                        </ul>
                      </div>
                      <div class="col-lg-4">
                        <ul>

                          <li><i class="bi bi-chevron-right"></i> <strong>Material UI</strong></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>Bootstrap</strong></li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                 {showSkills && selectedCategory === 'tools' && (
                  <div className="skills-list">

                    <div class="row">
                      <div class="col-lg-4">
                        <ul   >
                          <li><i class="bi bi-chevron-right"></i> <strong>AWS</strong> </li>
                          <li><i class="bi bi-chevron-right"></i> <strong>Azure Devops</strong> </li>


                        </ul>

                      </div>
                      <div class="col-lg-4" >
                        <ul >

                          <li><i class="bi bi-chevron-right"></i> <strong>Splunk</strong></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>Git</strong></li>

                        </ul>
                      </div>

                      <div class="col-lg-4 "  >
                        <ul  >

                          <li><i class="bi bi-chevron-right"></i> <strong>Jira</strong></li>
                          {/* <li><i class="bi bi-chevron-right"></i> <strong></strong> </li> */}

                        </ul>
                      </div>
                    </div>
                  </div>

                )}
              </div>
            </div>
          </div>

        </div>


      </section>

    </>);
}

export default About;
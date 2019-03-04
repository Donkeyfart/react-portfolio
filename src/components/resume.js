import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Jonathan Ho</h2>
            <h4 style={{color: 'grey'}}>Front End Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I specialize in applications written in React, PHP, and Python. Recently I became also a huge fan of one-way data flow and Redux-like architecture and also typed languages, e.g. TypeScript. My current experience and skills in front-end include: lead TypeScript/JavaScript development: bootstrapping or refactoring an existing app architecture, by improving its’ extensibility and reliability; full integration of front-end development using tools like Webpack with features like automatic code reload, code minifications, multiple environments support, good sense of design and UX, by having some small past experience in graphic design knowledge and huge experience in many JS ecosystem, by using many libraries like React, Redux, Redux-Observable, RxJS, Angular, Ionic Framework, Backbone, jQuery, Lodash/Underscore and whatever else was needed. 11single page applications done completely in Angular or React7talks given about front-end development</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2010}
              endYear={2014}
              schoolName="Norco College"
              schoolDescription="Norco College is a public community college in Norco, California. Each year Norco College serves over 13,000 students from the cities of Norco, Corona, and Eastvale, as well as surrounding communities."
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="UC Irvine"
                 schoolDescription="The University of California, Irvine, is a public research university located in Irvine, California. It is one of the 10 campuses in the University of California system. UC Irvine offers 80 undergraduate degrees and 98 graduate and professional degrees.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="Aluminum Wheels MFG Inc. (Regional Sales Expert)"
              jobDescription="Responsible for handling the sales and distribution of semi truck and trailer wheels in the states of Washington/Oregon/California/Arizona/Nevada/ and Utah"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Vue"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;

import './App.css'

import Experience from './components/Experience';
import Project from './components/Project';
import Education from './components/Education';
import Header from './components/Header';
import Skill from './components/Skill';

const data = {
  personal: {
    name: "Annu Ranjan",
    role: "Frontend Developer",
    description: `Skilled Frontend Developer with about 5 years of experience, adept in developing, 
    maintaining, and delivering cutting-edge web-apps. Experience in React, Angular and Vue.`,
    email: "dev.annuranjan@gmail.com",
    phone: "90699 97998",
    linkedInLink: "https://www.linkedin.com/in/annu-ranjan-ba2ab5209/",
    githubLink: "https://github.com/dev-annuranjan"
  },
  experiences: [{
    company: "Softmind Infotech",
    role: "Frontend Developer",
    startFrom: "06/2019",
    upTo: "12/2020",
    description: [
      `My role: This is a sister company of the previous company. In addition to my previous roles, I meet clients, took their requirements and deliver them the solution. I also assisted and troubleshooted problems of other developers in the company.`,
    ]
  }, {
    company: "Mymind Infotech",
    role: "Software Developer",
    startFrom: "04/2016",
    upTo: "05/2019",
    description: [
      `My role: to understand, develop, maintain, collaborate with others on various tasks on frontend and backend(Java). Resolve issues when they arise.`,
    ]
  }],
  skills: [{ title: "", keys: ["Javascript", "HTML", "CSS", "SQL", "NodeJS", "Rest API"] },
  { title: "", keys: ["Bootstrap", "Sass", "Material Design", "Flexbox", "Tailwind"] },
  { title: "Javascript Frameworks", keys: ["React", "Angular", "Vue.js", "React Native"] },
  { title: "Tools", keys: ["GraphQL", "Jira", "Figma", "Adobe XD"] },
  { title: "State Management", keys: ["Redux", "Context API"] },
  { title: "Version Control", keys: ["Git", "SVN"] },
  ],
  projects: [
    {
      title: "iFlip",
      description: [
        {
          title: "", description: `iFlip is an investing platform. This was a feature rich project which had a complex on-boarding process. 
        Dashboard had users portfolio as well as real time display of various tickers and stocks, suggestions and 
        news related to the stocks in the users portfolio.`},
        { title: "", description: `I was the one who started the project from scratch, developed the UI pixel perfectly according to their UI design and implemented wide variety of various features.` },
        { title: "Tech Stack", description: `React JS, Material UI, Styled Components, Redux, Axios, Thunk` },
        { title: "Link", description: `https://iflipinvest.com/` }]
    },
    {
      title: "Discover Daycare",
      description: [
        {
          title: "", description: `Discover Daycare is a New Zealand based daycare management app. The app enroll, wait list, room transitions, 
      staff attendance, child attendance, child pickup and drop off time, visitors tracking, payments among various features.`},
        { title: "", description: `I worked on various ticket across the app, debugging and resolving various issues that arose, as well as developing new features as per the needs of the client` },
        { title: "Tech Stack", description: `Angular 5, Ionic 4, Apache Cordova, Typescript, HTML5` },
        { title: "Apple App Store link", description: "https://apps.apple.com/nz/app/discover-childcare/id1259891435" },
        { title: "Android App link", description: "https://play.google.com/store/apps/details?id=com.discoverchildcare&hl=en_AU" }
      ]
    },
    {
      title: "Sincera Consulting",
      description: [
        {
          title: "", description: `This project was an enterprise project, the task for which was to execute DB queries from the UI. Among the features, 
      users had various roles which decided permission levels for different actions, facilities to give request to execute different queries, 
      histories of queries and records for analysis for the performance of the queries and other metrics for analysis.`},
        { title: "", description: `I was involved in implementation of their entirely new UI and developing features` },
        { title: "Tech Stack", description: `React, Kendo React, Axios, Redux, Thunk` },
      ]
    },
    {
      title: "Homitag",
      description: [
        { title: "", description: `Homitag is online marketplace to sell and buy stuffs.` },
        { title: "", description: `I developed their payment section, user sections, resolving tickets and debugging issues as they arose in the app.` },
        { title: "Tech Stack", description: `React, material-ui, chart.js, formik, saga, stripe` },
        { title: "Link", description: `https://www.homitag.com/` }]
    }
  ],
  educations: [
    {
      degree: "M.Sc in Computer Application",
      status: "Pursuing",
      college: "Scaler Neoversity (Woolf University)"
    },
    {
      degree: "M. Tech in Chemical Engineering",
      status: "7.6 CGPA",
      college: "IIT Kharagpur, Kharagpur"
    },
    {
      degree: "B.E in Chemical Engineering",
      status: "68%",
      college: "Sinhgad College of Engineering (Pune University)"
    }
  ]
}

function App() {

  const getExperiences = () => {
    return data.experiences.map((exp, index) => <Experience data={exp} key={index}></Experience>);
  }

  const getProjects = () => {
    return data.projects.map((project, index) => <Project data={project} key={index}></Project>);
  }

  const getSkills = () => {
    return data.skills.map((skill, index) => <Skill data={skill} key={index}>{skill}</Skill>);
  }

  const getEducations = () => {
    return data.educations.map((deg, index) => <Education data={deg} key={index}></Education>);
  }

  return (
    <div className='main-container'>
      <header>
        <Header data={data.personal}></Header>
      </header>
      <main>
        <article className='page-panel'>
          <section>
            <h2 className='section-title'>Work Experience</h2>
            {getExperiences()}
          </section>
          <section>
            <h2 className='section-title'>Projects</h2>
            {getProjects()}
          </section>
          {/* </article>
        <article className='page-panel'> */}
          <section>
            <h2 className='section-title'>Skills</h2>
            {getSkills()}
          </section>
          <section>
            <h2 className='section-title'>Education</h2>
            {getEducations()}
          </section>
          {/* <section style={{ visibility: "hidden" }}>
            <h2 className='section-title'>Languages</h2>
            <div>English</div>
          </section> */}
        </article>
      </main>
    </div >
  )
}

export default App

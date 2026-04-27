import type { JSX } from "react";
import TopNav from "./nav/TopNav";

const About = (): JSX.Element => {
  return (
    <>
      <head>
        <title>About</title>
      </head>

      <body>
        <div className="combine_containers">
          <TopNav />
          <main className="content">
            <a href="https://github.com/craankism">
              <img
                className="content-item logo"
                src="../src/assets/GitHub_Lockup_Black.svg"
                alt="GitHub Link to Repository"
              />
            </a>
            <a href="https://roadmap.sh">
              <img
                id="roadmap"
                className="content-item logo"
                src="https://roadmap.sh/card/wide/687e7516d8402b4cbdcdfc33?variant=dark&roadmaps=full-stack%2Cgolang%2Cjavascript%2Cjava"
                alt="Link to roadmap.sh"
              />
            </a>
            <p className="content-item">
              Hey, I'm Sascha "craankism" Schwellnus, a passionate, mostly
              self-taught, developer. I'm currently enrolled in a course for
              software development at{" "}
              <a href="https://codersbay.wien/">CODERS.BAY Vienna</a>, to be
              more specific, Fullstack-Development. My trained profession is
              electrical engineering with a focus on operational technology. I
              commited to change my career path, as I found my true passion in
              coding. The main aspect that fascinates me, is the ability to
              create something out of nothing with a deep logical thinking
              process. I love to solve problems and continuously learn new
              things.
            </p>
            <div className="grid">
              <section className="list-start">
                <h2 className="list-header">CODERS.BAY program:</h2>
                <ul className="content-item">
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>HTML & CSS</li>
                  <li>React with TypeScript</li>
                  <li>Spring Boot</li>
                  <li>PostgreSQL</li>
                  <li>Git & GitLab</li>
                  <li>Docker</li>
                  <li>REST-API</li>
                  <li>Requirments Engineering</li>
                  <li>SCRUM</li>
                </ul>
                <br />
                <a href="https://codersbay.wien/ams-kurse">Link zum Kurs</a>
              </section>
              <section className="list-start">
                <h2 className="list-header">
                  Technologies I am familiar with:
                </h2>
                <ul className="content-item">
                  <li>Go</li>
                  <li>JavaScript and React</li>
                  <li>Java and Spring Boot</li>
                  <li>HTML & CSS</li>
                  <li>SQL (PostgreSQL, MySQL, MariaDB)</li>
                  <li>Arduino</li>
                  <li>Git & GitHub</li>
                  <li>Linux</li>
                  <li>CI/CD with GitHub Actions</li>
                  <li>Docker</li>
                </ul>
              </section>
              <section className="list-start">
                <h2 className="list-header">Hobbies:</h2>
                <ul>
                  <li>Gaming</li>
                  <li>Japan</li>
                  <li>Anime</li>
                  <li>Coding</li>
                  <li>Music</li>
                </ul>
              </section>
              <section className="list-start">
                <h2 className="list-header">Favourite Music Genre:</h2>
                <ul>
                  <li>Rap</li>
                  <li>Drum and Bass</li>
                  <li>Nu Metal</li>
                  <li>Metal Core</li>
                </ul>
              </section>
            </div>
          </main>
        </div>
      </body>
    </>
  );
};

export default About;

import "./App.css";
import Card, { CertificateCard, ProjectCard } from "./Card";

function App() {
  return (
    <div className="App">
      <div className="error">
        {" "}
        Please <i class="fa fa-refresh"> turn </i> your phone to make the screen to be more than 1200 pixels
        wide. Lower resolutions are not currently supported for this page yet
        &#128546;.
      </div>
      <nav>
        {/* About Experience Certificates Projects Contact */}
        <ul>
          <li>
            <a href="#about">#About</a>
          </li>
          <li>
            <a href="#experience">#Experience</a>
          </li>
          <li>
            <a href="#certificates">#Certificates</a>
          </li>
          <li>
            <a href="#project">#Projects</a>
          </li>
          <li>
            <a href="#contact">#Contact Me</a>
          </li>
        </ul>
      </nav>
      <section className="about" id="about">
        {/* About */}
        <p>
          <div className="intro1">Hi!, my name is</div>
          <div className="intro2">Biswadeep Roy.</div>
          <div className="intro3">I build websites.</div>
          <div className="intro-para">
            I'm a software developer who loves creating (and sometimes
            designing) the best digital web experiences.<br></br> Currently I am
            working and handling projects as an UI expert for <a>Amdocs</a>.
          </div>
        </p>
        <img
          src="/muimui.png"
          alt="profile picture"
          height="270px"
          width="270px"
        ></img>
      </section>
      <header className="experience" id="experience">
        <h1>{`<Experience />`}</h1>
      </header>
      <section className="experience-data" id="experience-data">
        <Card
          organization={"<Amdocs />"}
          period={"2021 - Present"}
          title={"<Software Developer Advanced /> - UI"}
          information={[
            "// Works as an UI expert for development, consultation and client issues.",
            "// Participates actively in Task allocation, estimation and breakdown for the UI Team.",
            "// Conducted interviews for the team and participated in brainstorming sessions for new innovations.",
          ]}
          link="Pune - India"
        />
        <Card
          organization={"<Capgemini />"}
          period={"2018 - 2021"}
          title={"<Associate Consultant /> - UI"}
          information={[
            "// Worked both as an frontend and backend developer in separate projects.",
            "// As a frontend developer migrated UI code from Angular to latest Micro-Frontend framework.",
            "// As a backend developer integrated front-end, middletier and database of the app, using JSON response and requests.",
          ]}
          link="Pune/Chennai - India"
        />
      </section>
      <header className="certificates" id="certificates">
        <h1>{`<Certificates />`}</h1>
      </header>
      <section className="certificates-data" id="certificates-data">
        <CertificateCard
          organization={"<Udacity />"}
          period={"2020"}
          title={"# Udacity React Nanodegree Program Graduate"}
          link="https://graduation.udacity.com/confirm/RNL3LNUL"
        />
        <CertificateCard
          organization={"<Udacity />"}
          period={"2020"}
          title={
            "# Udacity Front End Web Developer Nanodegree Program Graduate"
          }
          link="https://graduation.udacity.com/confirm/ZAY5ZSPK"
        />
        <CertificateCard
          organization={"<Udemy />"}
          period={"2021"}
          title={"# Microfrontends with React"}
        />
        <CertificateCard
          organization={"<Oracle />"}
          period={"2018"}
          title={"# Java Certification(Credential ID - 341657944)"}
        />
      </section>
      <header className="project" id="project">
        <h1>{`<Projects />`}</h1>
      </header>
      <section className="project-data" id="project-data">
        <ProjectCard
          organization={"<Movie Booking App />"}
          technology={"React-HTML-CSS"}
          icon={<i class="fa fa-film"></i>}
          link="https://github.com/BiswadeepRoy/movie-booking-co"
        />
        <ProjectCard
          organization={"<Video Search Engine />"}
          technology={"JS-HTML-CSS"}
          icon={<i class="fa fa-file-video-o"></i>}
          link="https://github.com/BiswadeepRoy/Simple-Video-Search-Engine"
        />
        <ProjectCard
          organization={"<Jumpy Bird Game />"}
          technology={"C#-Unity Studio"}
          icon={<i class="fa fa-gamepad"></i>}
          link="https://www.dropbox.com/home?preview=JumpyBird+2.0.zip"
        />
      </section>
      <div className="blank"></div>
      <footer id="contact">
        <div className="contact-header">
          <h2>Contact Me.</h2>
        </div>
        <div className="contact-info">
          <table>
            <tr>
              <td>#Email :</td>
              <td>biswadeep.bibguru96@gmail.com</td>
            </tr>
            <tr>
              <td>#Phone :</td>
              <td>(+91)-91638-37537</td>
            </tr>
            <tr colspan="2" className="contact-table-resume">
              <td>
                <a
                  href="\Biswadeep_Roy_Resume(2).pdf"
                  download="Biswadeep_Roy_Resume.pdf"
                >
                  Resume <i class="fa fa-download"></i>
                </a>
              </td>
            </tr>
          </table>
        </div>
        <div className="contact-social">
          <a href="https://www.linkedin.com/in/biswadeep--roy/" target="_blank">
            <i class="fa fa-linkedin-square"></i> | linkedin
          </a>
          <a href="https://github.com/BiswadeepRoy" target="_blank">
            <i class="fa fa-github"></i> | github
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

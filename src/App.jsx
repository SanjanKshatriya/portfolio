import "./App.css";
import RobotVision from "./RobotVision";
import profilephoto from "./assets/image.png";
function App() {
  if (window.location.pathname === "/robot-vision") {
    return <RobotVision />;
  }

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">Sanjan.</h2>

     <div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#achievements">Achievements</a>
  <a href="#contact">Contact</a>
</div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-image">
          <img src={profilephoto} alt="Profile" />
        </div>
        <div className="hero-content">
          <p className="hello">Hello, I'm</p>

          <h1>
            Sanjan N Kshatriya
          </h1>

          <h2>
            Aspiring Software Developer
          </h2>

          <p className="hero-text">
            B.E. Information Science student passionate about
            software development, web technologies and problem solving.
          </p>
<div className="hero-buttons">
  <a href="#projects" className="btn secondary">
    View Projects
  </a>

  <a href="#contact" className="btn secondary">
    Contact Me
  </a>
  <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn secondary"
>
  Resume
</a>
  <a
    href="https://github.com/SanjanKshatriya"
    target="_blank"
    rel="noopener noreferrer"
    className="btn secondary"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/sanjan-kshatriya-3b981b331"
    target="_blank"
    rel="noopener noreferrer"
    className="btn secondary"
  >
    LinkedIn
  </a>
</div>
        </div>
      </section>

      {/* About */}
  <section id="about" className="section about-section">
  <h2>About Me</h2>

  <div className="about-content">

    <div className="about-text">
      <p>
        I'm Sanjan N Kshatriya, a B.E. Information Science
        student at Vivekananda Institute of Technology, Bangalore.
      </p>

      <p>
        I'm passionate about software development and currently
        learning full-stack web development with the MERN stack.
        I also have experience working with Python, Java and C.
      </p>

      <p>
        I enjoy participating in hackathons, building practical
        projects and solving real-world problems through technology.
      </p>
    </div>

    <div className="about-cards">

      <div className="about-card">
        <h3>🎓 Education</h3>
        <p>B.E. Information Science</p>
        <span>VKIT, Bangalore • 2024–2028</span>
      </div>

      <div className="about-card">
        <h3>💻 Focus</h3>
        <p>Full-Stack Development</p>
        <span>MERN Stack</span>
      </div>

      <div className="about-card">
        <h3>🏆 Hackathons</h3>
        <p>2× Hackathon Winner</p>
        <span>Multiple competitions</span>
      </div>

    </div>

  </div>
</section>

 <section id="skills" className="section">
  <h2>Skills</h2>

  <p className="section-intro">
    Technologies and tools I'm currently learning and working with.
  </p>

  <div className="skills-grid">

    <div className="skill-card">
      <div className="skill-icon">🐍</div>
      <h3>Python</h3>
      <p>Programming & Problem Solving</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">C</div>
      <h3>C</h3>
      <p>Data Structures & Algorithms</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">☕</div>
      <h3>Java</h3>
      <p>Object-Oriented Programming</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🌐</div>
      <h3>HTML & CSS</h3>
      <p>Web Development</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">JS</div>
      <h3>JavaScript</h3>
      <p>Frontend Development</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">⚛️</div>
      <h3>React</h3>
      <p>Frontend Development</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🟢</div>
      <h3>Node.js</h3>
      <p>Backend Development</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🍃</div>
      <h3>MongoDB</h3>
      <p>Database</p>
    </div>

  </div>
</section>

      {/* Projects */}
  
<section id="projects" className="section">
  <h2>Projects</h2>

  <p className="section-intro">
    Some of the projects I've worked on while learning and building.
  </p>

  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">01</span>
        <span className="project-status">In Development</span>
      </div>

      <h3>AGROASSIST</h3>

      <p>
        An AI-powered web platform designed to help both farmers and
        consumers by providing detailed information about crops,
        climate, weather, crop prices, government schemes and
        agricultural markets. The platform aims to make agricultural
        information easier to access and support better decision-making.
      </p>

      <div className="project-tech">
        <span>Python</span>
        <span>Streamlit</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>JSON</span>
        <span>AI</span>
      </div>

      <div className="project-buttons">
        <a
  href="https://github.com/SanjanKshatriya/AGROASSIST"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  View Project
</a>
      </div>
    </div>


    {/* Project 2 */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">02</span>
        <span className="project-status">Completed</span>
      </div>

      <h3>Robotics Vision System</h3>

      <p>
        A computer vision based system designed for a robot to
        detect objects, colors and shapes at different zones.
        The system processes camera frames and stores detection
        results in a database.
      </p>

      <div className="project-tech">
        <span>Python</span>
        <span>OpenCV</span>
        <span>pycharm</span>
        <span>aurdino ide</span>
        <span>ESP32</span>
      </div>

      <div className="project-buttons">
        <a href="/robot-vision" className="project-link">
          View Details 
        </a>
      </div>
    </div>


    {/* Project 3 */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">03</span>
        <span className="project-status">In Progress</span>
      </div>

      <h3>Personal Portfolio</h3>

      <p>
        A responsive personal portfolio website built with React
        and Vite to showcase my skills, projects, achievements
        and experience as an aspiring software developer.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Vite</span>
        <span>JavaScript</span>
        <span>CSS</span>
      </div>

      <div className="project-buttons">
        <a href="#home" className="project-link">
          Live Website 
        </a>
      </div>
    </div>

  </div>
</section>



<section className="section" id="achievements">
  <h2>Achievements</h2>

  <p className="section-intro">
    Hackathons and events where I have collaborated, built solutions,
    and challenged myself to solve real-world problems.
  </p>

  <div className="achievements-grid">

    {/* Achievement 1 */}
    <div className="achievement-card">
      <div className="achievement-icon">🏆</div>

      <div>
        <span className="achievement-label">WINNER</span>

        <h3>Inter-College Hackathon</h3>

        <p>
          Won an inter-college hackathon conducted by the Mechanical
          Engineering Department at Vivekananda Institute of Technology
          in collaboration with Robomanthan.
        </p>

        <span className="achievement-date">
          25 March 2026
        </span>
      </div>
    </div>


    {/* Achievement 2 */}
    <div className="achievement-card">
      <div className="achievement-icon">🏆</div>

      <div>
        <span className="achievement-label">WINNER</span>

        <h3>Advaitha 2026</h3>

        <p>
          Won Advaitha 2026, an inter-college hackathon conducted
          by the Artificial Intelligence and Machine Learning
          Department at VKIT.
        </p>

        <span className="achievement-date">
          6 April 2026
        </span>
      </div>
    </div>


    {/* Achievement 3 */}
    <div className="achievement-card">
      <div className="achievement-icon">🚀</div>

      <div>
        <span className="achievement-label participant">
          PARTICIPANT
        </span>

        <h3>Solaries X</h3>

        <p>
          Participated in Solaries X, a 24-hour National Level
          Hackathon hosted by RNS Institute of Technology, Bangalore.
        </p>

        <span className="achievement-date">
          8–9 April 2026
        </span>
      </div>
    </div>


    {/* Achievement 4 */}
    <div className="achievement-card">
      <div className="achievement-icon">💡</div>

      <div>
        <span className="achievement-label participant">
          PARTICIPANT
        </span>

        <h3>IBM Technology Event</h3>

        <p>
          Participated in an IBM technology event held at
          Vivekananda Institute of Technology.
        </p>

        <span className="achievement-date">
          VKIT, Bangalore
        </span>
      </div>
    </div>

  </div>
</section>



     
<section id="contact" className="section contact-section">
  <h2>Let's Connect</h2>

  <p className="section-intro">
    Have a project idea, internship opportunity, or just want to connect?
    Feel free to reach out.
  </p>

  <div className="contact-container">

    {/* Contact Information */}
    <div className="contact-info">

      <h3>Get In Touch</h3>

      <p>
        I'm always interested in learning, collaborating and
        working on interesting technology projects.
      </p>

      <div className="contact-links">

        <a href="mailto:your-email@gmail.com">
          📧 <span>sanjan11kshatriya@gmail.com</span>
        </a>

        <a
          href="https://github.com/SanjanKshatriya"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sanjan-kshatriya-3b981b331"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 <span>LinkedIn</span>
        </a>

      </div>

    </div>

<form
  className="contact-form"
  action="https://formspree.io/f/xeajgpbl"
  method="POST"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows="6"
    required
  ></textarea>

  <button type="submit" className="btn primary">
    Send Message →
  </button>
</form>

  </div>
</section>


      {/* Footer */}
      <footer>
        <p>© 2026 Sanjan N Kshatriya. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
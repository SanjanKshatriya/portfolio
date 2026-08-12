import "./RobotVision.css";

function RobotVision() {
return ( <div className="robot-page"> <div className="robot-content"> <a href="/" className="back-link">← Back to Portfolio</a>

```
    <h1>🤖 Robot Vision System</h1>

    <p className="intro">
      A hardware-integrated robotics and computer vision project developed
      during a hackathon. The system combines a mobile robot with an
      ESP32/Arduino-based control system and Python-based computer vision
      to identify objects and their characteristics while the robot moves
      through predefined zones.
    </p>

    <h2>🎯 Project Objective</h2>
    <p>
      The goal of the project is to enable a robot to move through a
      predefined rectangular path and perform different computer-vision
      tasks at specific zones.
    </p>

    <h2>⚙️ How It Works</h2>
    <p>
      The robot moves along a rectangular path of approximately 45 cm ×
      75 cm. At different locations, the system performs specific vision
      tasks.
    </p>

    <div className="zone">
      <h3>Zone 1 — Color Detection</h3>
      <ul>
        <li>Detects multiple objects.</li>
        <li>Identifies the colors of detected objects.</li>
      </ul>
    </div>

    <div className="zone">
      <h3>Zone 2 — Shape Detection</h3>
      <ul>
        <li>Identifies object shapes such as circles and other geometric shapes.</li>
      </ul>
    </div>

    <div className="zone">
      <h3>Zone 3 — Combined Detection</h3>
      <ul>
        <li>Detects objects based on both color and shape.</li>
        <li>Example: identifying blue squares.</li>
      </ul>
    </div>

    <h2>🧠 Computer Vision</h2>
    <p>
      The system uses Python and OpenCV for image processing and object
      detection.
    </p>

    <ul>
      <li>Detects multiple objects.</li>
      <li>Identifies object colors.</li>
      <li>Identifies object shapes.</li>
      <li>Processes camera images.</li>
      <li>Provides detection results.</li>
    </ul>

    <h2>🔧 Hardware & Software</h2>

    <h3>Hardware</h3>
    <ul>
      <li>ESP32</li>
      <li>Arduino</li>
      <li>Robot chassis and motors</li>
      <li>Ultrasonic sensor</li>
      <li>Camera/Webcam</li>
    </ul>

    <h3>Software</h3>
    <ul>
      <li>Python</li>
      <li>OpenCV</li>
      <li>PyCharm</li>
      <li>Arduino IDE</li>
    </ul>

    <h2>🔊 Additional Features</h2>
    <ul>
      <li>Audio announcements for detected results.</li>
      <li>Camera-based image processing.</li>
      <li>Zone-specific detection logic.</li>
      <li>Hardware and software integration.</li>
    </ul>

    <h2>🏆 Hackathon Experience</h2>
    <p>
      This project was developed as part of a hardware-integrated software
      hackathon, providing practical experience in robotics, embedded
      systems, computer vision, Python programming, and hardware-software
      integration.
    </p>

    <h2>🚀 Future Improvements</h2>
    <ul>
      <li>AI-based object recognition.</li>
      <li>Improved autonomous navigation.</li>
      <li>Real-time robot monitoring.</li>
      <li>More advanced object classification.</li>
      <li>Mobile application for remote monitoring.</li>
    </ul>
  </div>
</div>


);
}

export default RobotVision;

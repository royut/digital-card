import './App.css'


export default function App() {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src="/src/assets/profile-pic.jpeg" alt="profile-pic" />
      </div>
      <div className="card-header">
        <span className="card-header-name">Sohrab Zareei</span>
        <span className="card-header-title">Frontend Developer</span>
        <div className="card-header-contact">
          <div className="card-header-button card-header-button-email">
            <a href="#">
              <img src="/src/assets/mail.svg" alt="email-icon"/>
              Email
            </a>
          </div>
          <div className="card-header-button card-header-button-linkedin">
            <a href="https://www.linkedin.com/in/m-zareei/">
              <img src="/src/assets/linkedin.svg" alt="linkedin-icon"/>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-body-section">
          <h4>About</h4>
          <p>
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>
        </div>
        <div className="card-body-section">
          <h4>Interests</h4>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-footer-button">
          <a href="#">
            <img src="/src/assets/twitter.svg" alt="twitter-icon"/>
          </a>
        </div>
        <div className="card-footer-button">
          <a href="#">
            <img src="/src/assets/facebook.svg" alt="facebook-icon"/>
          </a>
        </div>
        <div className="card-footer-button">
          <a href="#">
            <img src="/src/assets/instagram.svg" alt="instagram-icon"/>
          </a>
        </div>
        <div className="card-footer-button">
          <a href="#">
            <img src="/src/assets/github.svg" alt="github-icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}

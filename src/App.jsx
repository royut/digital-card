import './App.css'
import profilePic from './assets/profile-pic.jpeg'
import linkedinIcon from './assets/linkedin.svg'
import twitterIcon from './assets/twitter.svg'
import githubIcon from './assets/github.svg'
import facebookIcon from './assets/facebook.svg'
import instagramIcon from './assets/instagram.svg'
import mailIcon from './assets/mail.svg'


export default function App() {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={profilePic} alt="profile-pic" />
      </div>
      <div className="card-header">
        <span className="card-header-name">Sohrab Zareei</span>
        <span className="card-header-title">Frontend Developer</span>
        <div className="card-header-contact">
          <div className="card-header-button card-header-button-email">
            <a href="mailto:mohammadzareei36@gmail.com">
              <img src={mailIcon} alt="email-icon"/>
              Email
            </a>
          </div>
          <div className="card-header-button card-header-button-linkedin">
            <a href="https://www.linkedin.com/in/m-zareei/">
              <img src={linkedinIcon} alt="linkedin-icon"/>
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
            <img src={twitterIcon} alt="twitter-icon"/>
          </a>
        </div>
        <div className="card-footer-button">
          <a href="#">
            <img src={facebookIcon} alt="facebook-icon"/>
          </a>
        </div>
        <div className="card-footer-button">
          <a href="#">
            <img src={instagramIcon} alt="instagram-icon"/>
          </a>
        </div>
        <div className="card-footer-button">
          <a href="#">
            <img src={githubIcon} alt="github-icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}

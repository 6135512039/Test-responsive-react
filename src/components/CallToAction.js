import React from 'react'
import "./CallToAction.css"
import {FiCode} from 'react-icons/fi'

function CallToAction() {
  return (
    <div className="cta-bg">
        <div className="overlay"></div>
        <div className="container">
            <div className="cta-text">
                <FiCode className="FiCode"/>
                <h2>We're react dev team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="#" className="cta-btn">get to know us</a>
            </div>
        </div>
    </div>
  )
}

export default CallToAction
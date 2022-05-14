import React from 'react'
import './Banner.css'

let bannerData = {
    title: "React landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

function Banner() {
  return (
    <div className="banner-bg">
        <div className="container">
            <div className="banner-con">
                <div className="banner-text">
                    <h1>{bannerData.title}</h1>
                    <p>
                        {bannerData.desc}
                    </p>
                    <a href="#" className="banner-btn">Learn More</a>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default Banner;
import { Link } from "react-router-dom"

function AboutPage(){
    return(
        <div>
        <div className="banner-home">
            <h1 className="slogan-home">About Us</h1>
        </div>
        <div className="about-page">
            <div className="dev-card-container">
            <div className="developer-card">
                <img className="profile-pic" src="/assets/img/profilepic.png"/>
                <h1 className="dev-name">TIAGO SILVINA</h1>
                <a className="dev-link" href="link to linkedIn">LinkedIn</a>
                <a className="dev-link" href="link to github">GitHub</a>
            </div>

            <div className="developer-card">
                <img className="profile-pic" src="/assets/img/profilepic.png"/>
                <h1 className="dev-name">JOÃO GONÇALVES</h1>
                <a className="dev-link" href="link to linkedIn">LinkedIn</a>
                <a className="dev-link" href="link to github">GitHub</a>
            </div>
            </div>
        </div>
        </div>
    )
}
export default AboutPage
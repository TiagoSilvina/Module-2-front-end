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
                <a className="dev-link" href="https://www.linkedin.com/in/tiago-silvina-web-dev/">LinkedIn</a>
                <a className="dev-link" href="https://github.com/TiagoSilvina">GitHub</a>
            </div>

            <div className="developer-card">
                <img className="profile-pic" src="/assets/img/profilepic.png"/>
                <h1 className="dev-name">JOÃO GONÇALVES</h1>
                <a className="dev-link" href="https://www.linkedin.com/in/joao-gon%C3%A7alves-807800196/">LinkedIn</a>
                <a className="dev-link" href="https://github.com/JoaoGoncalves25">GitHub</a>
            </div>
            </div>
        </div>
        </div>
    )
}
export default AboutPage
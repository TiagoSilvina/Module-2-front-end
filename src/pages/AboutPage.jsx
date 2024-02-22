import { Link } from "react-router-dom"

function AboutPage(){
    return(
        <article className="about-page">
            <div className="developer-card">
                <h2>Name of developer</h2>
                <a href="link to linkedIn">LinkedIn</a>
                <a href="link to github">GitHub</a>
            </div>
            <div className="developer-card">
                <h2>Name of developer</h2>
                <a href="link to linkedIn">LinkedIn</a>
                <a href="link to github">GitHub</a>
            </div>
     
        <Link to="/"><button>Back to Home Page</button></Link>
        </article>
    )
}
export default AboutPage
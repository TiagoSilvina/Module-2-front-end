import { Link } from 'react-router-dom';

function NotFound(){
    return(
        <div className="not-found-page">
            
            <h1>You took a wrong turn</h1>
            <p>Page not found</p>
            <Link to="/"><button>Back to Home Page</button></Link>
            
        </div>
    )
}
export default NotFound;
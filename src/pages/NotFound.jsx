import { Link } from 'react-router-dom';

function NotFound(){
    return(
        <div>
        <div className="banner-home">
           <h1 className="slogan-home">Page Not Found</h1>
       </div>
       <div className="lost"><img src="/assets/img/lost.jpeg"/></div>
    </div>
    )
}
export default NotFound;
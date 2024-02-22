import { useEffect, useState } from "react"; 
import axios from 'axios';
import {Link} from 'react-router-dom';


const API ="https://module-2-back-end.onrender.com";

function CarsListPage(){
    const [cars, setCars] = useState([]);
    const [favorite, setFavorite] = useState(false);

    useEffect(()=>{
        axios.get(`${API}/cars`)
        .then((response)=> setCars(response.data))
        .catch((error)=> console.log(error));
    }, [])

/////////////////////////////////////////////////////////////////////
// Add favorite

    

////////////////////////////////////////////////////////////////////
    return(
    <div className="car-container">
      {cars && cars.map((car)=>{

        return (
          <div >
          <Link to={`/cars/${car.id}`}>
          <div className="car-data" key={car.id}>
            
                <img url={car.imageUrl} alt="Car"/>
                
                  <h3>{car.year} {car.brand} {car.model}</h3>
                  <p><b>KM: </b> {car.km}</p>
                  <Link to="/bids">
                  <button style={{ display: car.user !== "private" ? 'none' : 'inline-block' }}>Place bid</button>
                  </Link>
{/* link below not working only redirects*/}
                  <Link to="/favorites">
                  <button style={{ display: car.user !== "private" ? 'none' : 'inline-block' }}>Add to Favorites</button>
                  </Link>
                  <Link to={`/cars/${car.id}`}>
                  <button style={{ display: car.user === "private" ? 'none' : 'inline-block' }}>View Your Listing</button>
                  </Link>
                
          </div>
          </Link>
          </div>
          );
      })}  
    </div>)
}

export default CarsListPage
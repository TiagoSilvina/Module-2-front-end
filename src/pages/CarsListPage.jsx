import { useEffect, useState } from "react"; 
import axios from 'axios';
import {Link} from 'react-router-dom';


const API ="https://module-2-back-end.onrender.com";

function CarsListPage(){
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        axios.get(`${API}/cars`)
        .then((response)=> setCars(response.data))
        .catch((error)=> console.log(error));
    }, [])

    return(
    <div className="car-container">
      {cars && cars.map((car)=>{
        return (
          <div key={car.id}>
          <Link to={`/cars/${car.id}`}>
          <div className="card" >
          <img className="card-img" src={car.imgUrl} alt="Car"/>
            <div className="card-title"><h3>{car.year} {car.brand} {car.model}</h3></div>
            <div className="card-text"><p><b>KM: </b> {car.km}</p>
            <p><b>Asking Price: </b> {car.price}</p></div>
                  <div className="card-btn"><Link to="/bids">
                  <button className="card-btn"  style={{ display: car.user !== "private" ? 'none' : 'inline-block' }}>Place bid</button>
                  </Link></div>
                  <div className="card-btn"><Link to={`/cars/${car.id}`}>
                  <button className="card-btn" style={{ display: car.user === "private" ? 'none' : 'inline-block' }}>View Your Listing</button>
                  </Link>
            </div>
          </div>
          </Link>
          </div>
          );
      })}  
    </div>)
}

export default CarsListPage;
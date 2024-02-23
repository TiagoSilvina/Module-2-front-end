import { useParams, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const API ="https://module-2-back-end.onrender.com";;

function SearchPage() {

    const [searchedCars, setSearchedCars] = useSearchParams()

    const term = searchedCars.get("searchedCars");

    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get(`${API}/cars`)
            .then((response) => setCars(response.data))
            .catch((error) => console.log(error))
    }, [])


    const filteredCars = cars.filter(car =>
        car.brand.toLowerCase().includes(term.toLowerCase())
        || car.model.toLowerCase().includes(term.toLowerCase())
    );
    if (filteredCars.length === 0) {
        return (
            <h3>The car your looking for isn't avaliable at this time</h3>
        );
    }
    return (
        <div className="search-car-container" >
            {filteredCars && filteredCars.map((car) => {

    return (          
        <Link to={`/cars/${car.id}`}>
          <div className="card" key={car.id}>
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
                )
            })}
    
    </div>
    )
}
export default SearchPage



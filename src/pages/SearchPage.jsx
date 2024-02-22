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
        <div>
            {filteredCars && filteredCars.map((car) => {

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
                  <Link to={`/cars/${car.id}`}>
                  <button style={{ display: car.user === "private" ? 'none' : 'inline-block' }}>View Your Listing</button>
                  </Link>    
            </div>
            </Link>
            </div>  
                )
            })}
    
    </div>
    )
}
export default SearchPage



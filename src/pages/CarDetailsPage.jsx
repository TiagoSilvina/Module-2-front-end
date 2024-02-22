import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API ="http://localhost:5000";


function CarDetailsPage(){

    const [car, setCar]= useState("car details");
    const {id}= useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .get(`${API}/cars/${id}`)
            .then((response)=>setCar(response.data))
            .catch((error)=>console.log(error))
        },[]);

    function deleteCar(){
        
        axios
            .delete(`${API}/cars/${id}`, car)
            .then(() => { navigate("/cars");})
            .catch((error) => console.log(error));
            };
return(
    <div className="car-container">
    {car &&   
            <div className="car-data" key={car.id}>
                <img url={car.imageUrl} alt="Car"/>
                  <h3>{car.year} {car.brand} {car.model}</h3>
                  <p><b>KM: </b> {car.km}</p>
                  <p><b>Seller: </b> {car.user}</p>
                  <Link to="/bids">
                  <button style={{ display: car.user !== "private" ? 'none' : 'inline-block' }}>Place bid</button>
                  </Link>
{/* link below not working only redirects*/}
                  <Link to="/favorites">
                    <button style={{ display: car.user !== "private" ? 'none' : 'inline-block' }}>Add to Favorites</button>
                  </Link>
                  <button onClick={deleteCar} style={{ display: car.user === "private" ? 'none' : 'inline-block' }}>Remove Listing</button>
            </div>
    }
    </div>
    )
}
export default  CarDetailsPage;
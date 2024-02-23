import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API ="https://module-2-back-end.onrender.com";;


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

            function editCar() {
                axios
                  .get(`${API}/cars/${id}`)
                  .then(() => {
                    navigate(`/edit-car/${id}`);
                  })
                  .catch((error) => console.log(error));
              }

return(
    <div className="car-details-container"  key={car.id}>
    {car &&   
    <div >
            <div className="card">
            <img className="card-img" src={car.imgUrl} alt="Car"/>
              <div className="card-title"><h3>{car.year} {car.brand} {car.model}</h3></div>
              <div className="card-text"><p><b>KM: </b> {car.km}</p>
                    <p><b>Asking Price: </b> {car.price}</p>
                    <p><b>Seller: </b> {car.user}</p>
                    <Link to="/bids">
                    <button className="card-btn" style={{ display: car.user !== "private" ? 'none' : 'inline-block' }}>Place bid</button>
                    </Link>
                    <button className="card-btn" onClick={deleteCar} style={{ display: car.user === "private" ? 'none' : 'inline-block' }}>Remove Listing</button>
                    <Link to="/" >
                    <button className="card-btn" onClick={editCar} style={{ display: car.user === "private" ? 'none' : 'inline-block' }}>Edit Listing</button>
                    </Link>
              </div>
            </div>
            </div>
    }
    </div>
    )
}
export default  CarDetailsPage;
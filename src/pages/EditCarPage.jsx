import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";


const API = "https://module-2-back-end.onrender.com";

function EditCarPage(){

    const [year, setYear] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [km, setKm] = useState("");
    const [imgUrl, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [user, setUser] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{

        axios.get(`${API}/cars/${id}`)
        .then((response)=>{
            const oneCar = response.data;
              setYear(oneCar.year);
              setBrand(oneCar.brand);
              setModel(oneCar.model);
              setKm(oneCar.km);
              setImg(oneCar.imgUrl);
              setPrice(oneCar.price);
              setUser(oneCar.user);
           })
           .catch((error)=> console.log(error))
    }, [id])

    const requestCar ={
        year,
        brand,
        model,
        imgUrl,
        km,
        price,
        user
    };

function handleSubmit(e){
    e.preventDefault();
 
    axios
    .put(`${API}/cars/${id}`, requestCar)
    .then((response) => {
     navigate(`/cars/${id}`);
     })
    }

function deleteCar(){

    axios.delete(`${API}/cars/${id}`)
         .then(() => { navigate("/cars");})
         .catch((error) => console.log(error));
        };

    return(
        <div>
        <div className="banner-home">
        <h1 className="slogan-home">Edit your Listing</h1>
    </div>
    <form className="car-form" onSubmit={handleSubmit}>
        <label>Year:</label>
        <input className="car-input" value = {year} name="year" type="number" placeholder=" Year"
        min="1965" max="2000" 
         onChange={(e)=> setYear(e.target.value)}/>
        
        <label>Brand:</label>
        <input className="car-input" value = {brand} name="brand" type="text" placeholder=" Brand"
         onChange={(e)=> setBrand(e.target.value)}/>
        
        <label>Model:</label>
        <input className="car-input" value = {model} name="model" type="text" placeholder=" Model"
         onChange={(e)=> setModel(e.target.value)}/>
    
        <label>Km:</label>
        <input className="car-input" value = {km} name="km" type="number" placeholder=" Km"
        min="0" max="1000000"
         onChange={(e)=> setKm(e.target.value)}/>
        
        <label>Picture URL:</label>
        <input className="car-input" value = {imgUrl} name="img" type="text" placeholder=" Image Url"
         onChange={(e)=> setImg(e.target.value)}/>
        
        <label>User:</label>
        <input className="car-input" value = {user} name="user" type="text" placeholder=" User"
         onChange={(e)=> setUser(e.target.value)}/>
        
        <label>Asking Price:</label>
        <input className="car-input" value = {price} name="price" type="number" placeholder=" Asking Price"
        min="0"
         onChange={(e)=> setPrice(e.target.value)}/>

        <button className="car-input-btn" type='submit'>Edit</button>
        </form>

        <div className='del-container'>
            <button className="del-btn" onClick={deleteCar}>Remove Listing</button></div>
        </div>
    )
}
export default EditCarPage;
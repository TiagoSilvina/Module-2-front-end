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

        axios.get(`${API}/cars/${id}`).then((response)=>{
              setYear(response.data.year);
              setBrand(response.data.brand);
              setModel(response.data.model);
              setColor(response.data.color);
              setKm(response.data.km);
              setPrice(response.data.price);
           
        }).catch((error)=> console.log(error))
    }, [])

function handleSubmit(e){
    e.preventDefault();

    const car ={
        year,
        brand,
        model,
        imgUrl,
        color,
        km,
        price,
        user
    };

    axios.put(`${API}/cars/${id}`, data)
         .then(()=>{ navigate("/cars");})
         .catch((error)=>{console.log(error)})
    }

function deleteCar(){

    axios.delete(`${API}/cars/${id}`)
         .then(() => { navigate("/cars");})
         .catch((error) => console.log(error));
        };

    return(
        <div>
        <form className="car-form" onSubmit={handleSubmit}>

            <input value = {year} name="year" type="number" placeholder="Year"
            min="1965" max="2000"  
            required onChange={(e)=> setYear(e.target.value)}/>

            <input value = {brand} name="brand" type="text" placeholder="Brand" 
            required onChange={(e)=> setBrand(e.target.value)}/>

            <input value = {model} name="model" type="text" placeholder="Model"
            required onChange={(e)=> setModel(e.target.value)}/>

            <input value = {km} name="km" type="number" placeholder="Km"
            required onChange={(e)=> setKm(e.target.value)}/>

            <input value = {imgUrl} name="img" type="text" placeholder="Image Url"
            required onChange={(e)=> setImg(e.target.value)}/>

            <input value = {user} name="user" type="text" placeholder="User"
            required onChange={(e)=> setUser(e.target.value)}/>

            <input value = {price} name="price" type="number" placeholder="Asking Price"
            min="0"
            required onChange={(e)=> setPrice(e.target.value)}/>

            <button type='submit'>Edit Listing</button>
        </form>
        <button onClick={deleteCar}>Remove Listing</button>
        </div>
    )
}
export default EditCarPage
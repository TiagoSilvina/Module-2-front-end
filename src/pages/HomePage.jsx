import { useState } from "react";

const API ="https://module-2-back-end.onrender.com";

function HomePage({setResults}){

    const[input, setInput]= useState("");

    const fetchData =(value)=>{
        fetch(API)
        .then((response)=> response.json())
        .then((json)=>{
        const results = json.filter((cars)=> {
            return(
            value &&
            cars &&
            cars.brand &&
            cars.brand.toLowerCase().includes(value)
        );
        });
        setResults(results);
    })
    };

    const handleChange = (value)=>{
        setInput(value);
        fetchData(value);
    }

    return(
        <article className="homepage">
        <div className="homepage-container">
        <h1 className="homepage-text">Classic Car Auctions</h1>
        <h3 className="homepage-text">Find your dream classic car!</h3>
        </div>
        <input placeholder="Search..."
                value={input}
                onChange={(e)=>handleChange(e.target.value)} /> 
        </article>
    )
}
export default HomePage

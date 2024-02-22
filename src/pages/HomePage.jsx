import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API ="https://module-2-back-end.onrender.com";;

function HomePage({setResults}){

    const navigate = useNavigate()

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate({ pathname: "/search", search: `?searchedCars=${search}` })
        setSearch("")
    }

    return(
        <div className="homepage">

        <div className="homepage-container">
        <h1 className="homepage-text">Classic Car Auctions</h1>
        <h3 className="homepage-text">Find your dream classic car!</h3>
        </div>

        <form onSubmit={handleSubmit}> 
        <input  type='text' value={search}
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}></input>
        <button type="submit">Search</button>
        </form>

        </div>
    )
}
export default HomePage

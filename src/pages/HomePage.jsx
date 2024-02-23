import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarsListPage from "./CarsListPage";

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
        <div className="banner-home">
            <h1 className="slogan-home">Drive what inspires you</h1>
        </div>
        <div className="car-container">
            <CarsListPage />
        </div>
        </div>
    )
}
export default HomePage

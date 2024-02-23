import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate({ pathname: "/search", search: `?searchedCars=${search}` })
        setSearch("")}

    return (
        <div className="header">
            <Link to="/" className="logo">Classic Cars Club</Link>
        <div className="navbar">
            <Link className="navbar-item" to="/about"><h3> About</h3></Link>
            <Link className="navbar-item" to="/cars"><h3> Buy</h3></Link>
            <Link className="navbar-item" to="/add-car"><h3> Sell</h3></Link>
            <div className="search-container">
                <form onSubmit={handleSubmit}> 
                <input className="search-bar" type='text' value={search}
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}>
                </input>
                <button className="nav-button" type="submit">Search</button>
                </form>
            </div>
        </div>
        </div>
    );
}
export default Navbar;
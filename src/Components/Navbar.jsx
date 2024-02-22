import React from "react";
import { NavLink } from "react-router-dom";
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
        <nav className="navbar">
            <NavLink to="/"><h3>Home </h3></NavLink>
            <NavLink to="/about"><h3> About</h3></NavLink>
            <NavLink to="/cars"><h3> Buy</h3></NavLink>
            <NavLink to="/add-car"><h3> Sell</h3></NavLink>
            <div className="nav-search-bar">
                <form onSubmit={handleSubmit}> 
                <input  type='text' value={search}
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}>
                </input>
                <button type="submit">Find your dream car</button>
                </form>
            </div>
        </nav>
    );
}
export default Navbar;
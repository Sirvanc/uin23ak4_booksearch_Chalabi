import { useState } from "react"
import { redirect } from "react-router-dom"


export default function Searchbar ({setQuery}){


    const [search, setSearch] = useState("")

    let [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(search.length > 2){
            setErrorMessage("")
            setQuery(search.replaceAll(" ", "+"))
        } else {
            setErrorMessage("Søket må være tre tegn i søkefeltet!")
        }
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return(
        <>
        <div className="search">
            <form onSubmit={handleSubmit} className="searchbar">
                <label htmlFor="search">Søk etter en bok</label>
                <input type="text" id="search" placeholder="James bond..." onChange={handleChange} className="textField"></input>
                <input type="submit" value="Søk" className="submit"></input>
            </form>
            <span className="errorMessage">{errorMessage}</span>
        </div>
        </>
    )
}
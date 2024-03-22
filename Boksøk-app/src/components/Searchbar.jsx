import { useState } from "react"



export default function Searchbar({setQuery}){
    
    let[search, setSearch] = useState("")
    let [errorMessage, setErrorMessage] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault()
        if(search.length > 2 ){
            setErrorMessage("")
            setQuery(search.replaceAll("","+"))
        } else {setErrorMessage("Search must contain at least 3 letters")}

        {
            const handelChange = (event) => {
                setSearch(event.target.value)
            }
        }

    return(
        <>
        <div className="search">
        <form onSubmit={handelSubmit} className="searchbar">
            <label htmlFor="search"> Søk etter en bok</label>
            <input type="text" id="search" placeholder="Søk etter en bok" onChange={handelChange} className="textField"></input>
            <input type="submit" value="Search" className="submit"></input>
            </form>
        <span className="errorMessage">{errorMessage}</span>
        </div>
        </>
    )
}


        


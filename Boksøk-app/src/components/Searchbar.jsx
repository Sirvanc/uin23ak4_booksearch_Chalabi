import { useState } from "react"



export default function Searchbar ({setQuery}){
    
    let[search, setSearch] = useState("")
    let [errorMessage, setErrorMessage] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault()

        if(search.length > 2){
            setErrorMessage("")
            setQuery(search.replaceAll("","+"))
        } else {setErrorMessage("Søket må inneholde minst  tre tegn i søkefeltet")

        }

    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

        return(
            <>
            <div className="search">
                <form onSubmit={handleSubmit} className="searchbar">
                    <label htmlFor="search">Search for a book</label>
                    <input type="text" id="search" placeholder="James bond..." onChange={handleChange} className="textField"></input>
                    <input type="submit" value="Search" className="submit"></input>
                </form>
                <span className="errorMessage">{errorMessage}</span>
            </div>
            </>
        )
    }

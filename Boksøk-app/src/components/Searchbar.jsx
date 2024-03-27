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

/**
 * Denne koden definerer en React-komponent kalt Searchbar, som eksporteres som standard (default export) fra modulen. 
 * omponenten tar imot en prop kalt setQuery, som antas å være en funksjon som håndterer søket. 
 * Inne i komponenten brukes to tilstandsvariabler fra React Hooks: search og errorMessage. search holder styr på den aktuelle
 *  verdien til søkestrengen, mens errorMessage inneholder eventuelle feilmeldinger som skal vises.
 * Komponenten inneholder også to funksjoner: handleSubmit og handleChange. handleSubmit blir kalt når skjemafeltet blir sendt inn,
 *  og det validerer søkestrengen før den kaller setQuery med søket som argument hvis søket er gyldig.
 *  handleChange blir kalt hver gang verdien i inputfeltet for søk endres, og den oppdaterer search-tilstanden
 *  med den nye verdien som er skrevet inn i inputfeltet.
 * Til slutt returnerer komponenten JSX-markup som representerer en søkebjelke med et inputfelt og en submit-knapp. 
 * Når skjemaet sendes inn, kalles handleSubmit, og eventuelle feilmeldinger vises under inputfeltet
 */
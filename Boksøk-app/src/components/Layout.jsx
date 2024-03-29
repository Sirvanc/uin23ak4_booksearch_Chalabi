import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Layout({children, setQuery}){
    return(
        <>
            <header>
                <Link to="/" className="logo">Boksøk - Bøker til alle!</Link>
                <nav>
                    <Searchbar setQuery = {setQuery}/>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

/**
 * Denne koden definerer en React-funksjonskomponent kalt "Layout", som eksporteres som standard fra en modul.
 *  Den tar to props, "children" og "setQuery". Inne i komponenten er det definert HTML-struktur som inkluderer et
 *  overskriftselement (<header>) med en lenke til hjemmesiden og et navigasjonselement (<nav>) som inneholder en søkebjelkekomponent.
 *  Selve søkebjelkekomponenten blir rendret ved hjelp av en annen komponent kalt "Searchbar", som får propen "setQuery" fra "Layout". 
 * Deretter følger hovedinnholdet (<main>) som renderes dynamisk og kan variere avhengig av hva som er barna til "Layout". 
 * Dette oppsettet antyder et grunnleggende sideoppsett med en header, navigasjon, og hovedinnhold, der 
 * hovedinnholdet kan variere basert på barna til "Layout".
 */
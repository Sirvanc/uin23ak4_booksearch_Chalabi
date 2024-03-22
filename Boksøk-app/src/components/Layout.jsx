import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";



export default function Layout({children, setQuery}){
    return(
        <>
        <header>
            <Link to="/" className="logo">BookSøk</Link>
            <Searchbar setQuery={setQuery}/>
        </header>
        <main>
        {children}
        </main>
        </>
    )
}
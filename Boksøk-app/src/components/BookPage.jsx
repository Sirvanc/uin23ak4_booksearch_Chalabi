import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function BookPage(){
    const {id} = useParams()
    const contentIndex = parseInt(id.replaceAll(":", ""))
    let content = JSON.parse(localStorage.getItem("queryData"))
    let book = content[contentIndex]

    return (
        <div className="bookPage">
            <nav>{<><Link to={"/"} className="homeButton">Hjem</Link> {`> ${book.title}`}</>}</nav>
            <section className="bookPageContent">
                {book.cover_edition_key? (<img src={`https://covers.openlibrary.org/b/olid/${book?.cover_edition_key}-L.jpg`}  alt={`Coverbilde for ${book?.title}`}/>) :
                (<img src={"https://i.imgur.com/0ZzYCzH.png"} alt={`No coverimage found for this book`}/>)}
                <div>
                    <h1>{book.title}</h1>
                    <h2>Forfatter(s):</h2>
                    <ul className="authorList">
                        {book.author_name?.map((name, index) =>
                        <li key={"author"+ index} className="author">{name}</li>
                        )}
                    </ul>
                    <h3>Vurderinger:</h3>
                    <ul className="ratingsList">
                        <li>Gjennomsnitt: {book.ratings_average? (book.ratings_average.toFixed(1)):("none")}</li>
                        {book.ratings_count? (<li>Basert på: {book.ratings_count} rangeringer</li>) : (null)}
                    </ul>
                    <h3>Karakterer:</h3>
                    <ul className="charactersList">
                        {book.person_key?.map((char, idx) =>
                        <li key={"Char"+idx}>{char.replaceAll("_", " ")}</li>
                        )}
                    </ul>
                    <h3>Språk:</h3>
                    <ul className="languagesList">
                        {book.language?.map((lang, idx) =>
                        <li key={"lang"+idx}>{lang}</li>
                        )}
                    </ul>
                    <h4>Amazon-lenker:</h4>
                    <ul className="amazonList">
                        <li><Link to={`https://www.amazon.com/s?k=${book.title}`}>Amazon link 1</Link></li>
                        {book.amazoneId?.map((item, idx) => 
                        <li key={"amazonlink"+idx}><Link key={"amazonLink"+idx} to={`https://www.amazon.com/s?k=${item}`}>Amazon link {idx+2}</Link></li>
                        )}
                    </ul>
                </div>
            </section>
        </div>
    )
}

/**
 * Denne koden definerer en React-komponent kalt BookPage, som viser detaljer om en bok basert på dens ID. 
 * Først importerer den useParams-hooken fra react-router-dom, som lar komponenten hente ID-en fra URL-en.
 *  Deretter henter den innholdet fra lokal lagring basert på den oppgitte ID-en, og viser informasjon om boken, 
 * inkludert tittel, forfatter(e), gjennomsnittlig rangering, karakterer, språk og Amazon-lenker. Hvis det er tilgjengelig,
 *  vises også bokens omslagsbilde. Hvis noen data mangler, vises passende fallback-tekster eller standardbilder.
 *  Komponenten er også koblet til hjemmesiden ved hjelp av en hjem-knapp og viser en navigasjonssti fra hjemmesiden til 
 * den aktuelle bokens tittel.
 */
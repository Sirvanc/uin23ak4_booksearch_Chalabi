import Bookcard from "./Bookcard"

export default function Searchresults({content, query}){
    return(
        <>
            <section>
                <h1>{query.toUpperCase().replaceAll("+", " ")}</h1>
                <div className="searchResultsContent">
                {content?.map((book, index) =>
                <Bookcard key={"book"+ index} title={book.title} author={book.author_name} 
                year={book.first_publish_year} rating={book.ratings_average} amazoneId={book.id_amazon} 
                image={book.cover_edition_key} searchindex={index}/>
                )}
                </div>
            </section>
        </>
    )
}
/**
 * Denne koden definerer en React-funksjonskomponent kalt "Searchresults", som tar to prop-variabler, "content" og "query".
 *  Innenfor komponenten returneres JSX-markup som viser søkeresultatene. Overskriften viser søkeforespørselen i store bokstaver,
 *  med eventuelle mellomrom erstattet med pluss-tegn. 
 * Deretter mapper den over "content"-arrayen som antas å inneholde informasjon om bøker, og for hvert element i
 *  arrayen rendres en "Bookcard"-komponent. Hver bok vises med tittel, forfatter, utgivelsesår, gjennomsnittlig rangering, 
 * Amazon ID og et bilde. Hver "Bookcard" har en unik nøkkel som hjelper React med gjenbruk av komponenter, og
 *  denne nøkkelen er satt til "book" pluss indeksen til boken i arrayen. 
 * Til slutt er hele innholdet pakket inn i et <section>-element.
 */
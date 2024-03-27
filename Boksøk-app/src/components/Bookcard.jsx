import { Link } from "react-router-dom"

export default function Bookcard ({title, year, author, rating, amazoneId, image, searchindex}) {


    return  (
        <article className="articleCardBody">
            <div className="articleCard">
                {image? (<img src={`https://covers.openlibrary.org/b/olid/${image}-M.jpg`} alt={`Coverbilde for ${title}`}/>) : (<img src={"https://i.imgur.com/0ZzYCzH.png"} alt={`No coverimage found for this book`}/>)}
                <div>
                    <h2>{title}</h2>
                    <h3>Forfatter(s):</h3>
                    <ul className="articleCardAuthorList">
                    {author?.slice(0,3).map((item, index) =>
                         index > 1? 
                                (<li key={"author" + index}>
                                    <Link to={`/book/:${searchindex}`}>and more</Link>
                                </li>)
                            :
                                (<li key={"author" + index}>{item}</li>)
                            
                    )}
                    </ul>
                    <h4>Først publisert:</h4>
                    <p>{year}</p>
                    {rating?  (<><h4>Vurdering:</h4> <p>{rating?.toFixed(1)}</p></>) : (<><h4>Vurdering:</h4> <p>ingen</p></>) }
                    <h4>Amazon-lenker:</h4>
                    <ul className="articleCardAmazonList">
                        <li><Link to={`https://www.amazon.com/s?k=${title}`}>Link 1</Link></li>
                        {amazoneId?.slice(0, 3).map((item, idx) => 
                        <li key={"amazonlink"+idx}><Link key={"amazonLink"+idx} to={`https://www.amazon.com/s?k=${item}`}>Link {idx+2}</Link></li>
                        )}
                    </ul>
                </div>
            </div>
            <Link to={`/book/:${searchindex}`} className="readMore">Mer om boka</Link>
        </article>
    )
}

import { useState } from "react"

export default function Searchresults({content,query})

return(
    <>
    <section>
    <h1>{query.toUpperCase().replaceAll("+","")}</h1>
    <div className="searchResultsContent">
    {content?.map((book,index) =>
      <Bookcard key={"book"+ index} title={book.title} author={book.author} 
      year={book.first_publish_year} rating={book.ratings_average} amazoneId={book.id_amazon} 
       image={book.cover_edition_key} searchindex={index}/>)}
    </div>
    </section>
    </>
)
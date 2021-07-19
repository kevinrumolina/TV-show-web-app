import React, { useState, useEffect } from "react";
import { BackButton } from './BackButton';
import { SimilarFilm } from './SimilarFilm';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'a562a9a87fddcafca2a9c4dd28aaea99';
const imageUri = 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/';
const imagePoster = 'https://image.tmdb.org/t/p/w185/';

export const Detail = () => {
    const path = document.location.pathname;

    const sectionFetcher = path.includes('tv') ? 'tv' : 'movie';
    
    const [details, setDetails] = useState<any[any]>([]);

    useEffect(() => {
        fetch(`${apiUrl}${path}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setDetails(response)
        })
    }, [path, sectionFetcher])

    return (
        <main >
            <BackButton />
            <div className="film detail">
                <img className={`film-image`} 
                    src={details.backdrop_path ?  `${imageUri}${details.backdrop_path}` : `${imagePoster}${details.poster_path}`}
                    alt={details.name || details.title} />
                <div>
                    <h2 className="film-title">{details.name || details.title}</h2>
                    <p className="film-votes">{details.vote_average}</p>
                </div>
                <p className="film-overview">{details.overview}</p>
            </div>
            <SimilarFilm />
        </main>
    )
}
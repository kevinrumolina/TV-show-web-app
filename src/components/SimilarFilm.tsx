import React, { useState, useEffect } from "react";
import { Film } from './Film';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'a562a9a87fddcafca2a9c4dd28aaea99';

export const SimilarFilm = () => {
    const path = document.location.pathname;

    const [similarFilms, setSimilarFilms] = useState<any[any]>([]);

    useEffect(() => {
        fetch(`${apiUrl}${path}/similar?api_key=${apiKey}`)
        .then(response => response.json())
        .then(response => {
            console.log(response.results)
            setSimilarFilms(response.results)
        })
    }, [path])

    return (
        <section className="similar-films">
            <h2 className="similar-films__title">Similar Films</h2>
            <div className="section similar-films__container">
                {similarFilms.length > 0 && similarFilms.map((film:any) =>
                    <Film key={film.id} {...film} />
                )}
            </div>
        </section>
        
    )
}
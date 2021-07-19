import React from "react";
import { Link } from "react-router-dom";

const imageUri = 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2';
const imagePoster = 'https://image.tmdb.org/t/p/w185';

interface Props {
    name: string,
    id: number,
    backdrop_path: string,
    vote_average: number,
    title: string,
    poster_path: string
}

export const Film: React.FC<Props> = ({ name, id, backdrop_path, vote_average, title, poster_path }) => {
    const imageType = backdrop_path ? 'backdrop' : 'poster';

    const sectionFetcher = name ? 'tv' : 'movie';

    return (
        <Link to={document.location.pathname.includes(sectionFetcher) ? '/' + sectionFetcher + '/' + id : sectionFetcher + '/' + id}>
        <article className="film" id={`${id}`} >
            <img className={`film-image ${imageType}`} 
                src={backdrop_path ? `${imageUri}${backdrop_path}` : `${imagePoster}${poster_path}`} 
                alt={name || title} />
            <div>
                <h2 className="film-title">{name || title}</h2>
                <p className="film-votes">{vote_average}</p>
            </div>
        </article>
        </Link>
    )
}
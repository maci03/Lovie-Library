import React from "react";

const Movie = ({title, year}) =>{
    return(
        <div className="Movie">
            <h2>{title}</h2>
            <p>Year: {year}</p>
        </div>
    );
};

export default Movie;
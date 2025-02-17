import React from 'react';

function Movie(props) {

  const {
    Title: title,
    Year: year,
    Type: type,
    imdbID: id,
    Poster: poster
  } = props;

  return (

    <div class="card movie">
      <div class="card-image waves-effect waves-block waves-light">
        {
          poster === 'N/A' ? (
            <img class="activator" src={`https://placehold.co/300x400?text=${title}`} />
          ) : 
          ( <img class="activator" src={poster} />)
        }
        
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{title}</span>
        <p>{year} <span className='rigth'>{type}</span></p>
      </div>
    </div>
  );
}

export { Movie };
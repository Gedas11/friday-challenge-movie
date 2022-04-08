import React from "react";

const Movie = ({ name, origin_country }) => {
  return (
    <>
      <h4>{name}</h4>
      <h3>{origin_country}</h3>
      
      {/* <figcaption>{types || "tipo nera"}</figcaption> */}
    </>
  );
};

export default Movie;

import React from "react";

function CardDetail({ title, description, imageUrl }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} style={{ maxWidth: "500px" }} />
      <p>{description}</p>
    </div>
  );
}

export default CardDetail;

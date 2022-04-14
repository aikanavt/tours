import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} />
      <footer>
        <div className="tour-info">
          <h2>{name}</h2>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

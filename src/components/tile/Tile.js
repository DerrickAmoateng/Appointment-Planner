import React from "react";

export const Tile = (props) => {
  const contact = props.tile;

  return (
    <div className="tile-container">
      {Object.values(contact).map((value, index) =>
        <p key={index} className={`${index === 0? "tile-title" : ""} tile`}>
          {value}
        </p>
      )}
    </div>
  );
};

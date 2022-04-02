import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const tiles = props.list;

  return (
    <div>
      {tiles.map((contact, index) =>
        <Tile key={index} tile={contact} />)}
    </div>
  );
};

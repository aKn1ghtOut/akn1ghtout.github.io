import React from "react";

import "./Tile.css";

export const degToRad = deg => 0.0174533 * deg;

export const Tile = React.memo(({ x, y, z, posx, posy }) => {
	return (
		<img 
			alt="MapTile"
			className="mapTile"
			src={`https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}.png`}
			style={{
				left: (posx * 25) + "%",
				top: (posy * 25) + "%"
			}}
		/>
	);
});
import React, { Component } from 'react';

import { Tile, degToRad } from "./Tile"
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		latitude: 0,
		longitude: 0,
		zoom: 8,
		tiles: []
	}

	constructor(props)
	{
		super(props);
		this.getTiles = this.getTiles.bind(this);
	}

	getTiles()
	{
		const { latitude, longitude, zoom } = this.state;
		const z	=	Math.pow(2, zoom);
		const x	= 	z * ((longitude + 180) / 360);
		const y	= 	z * (1 - (Math.log(Math.tan(degToRad(latitude)) + Math.sec(degToRad(latitude))) / (22/7))) / 2;

		x = Math.round(x);
		y = Math.round(y);

		const tiles = [];
		for(let i = x - 2; i <= x+2; i++)
		{
			for(let j = y - 2; j <= y+2; j++)
			{
				tiles.push({
					x : i,
					y : j,
					z : z,
					posx: i - x + 2,
					posy: y - j + 2
				})
			}
		}

		this.setState({tiles: tiles});
	}
	
	render(){
		return (
			<div className="App">
				<div id="container">
					<h1>OSM Tiles Map Rendered demo</h1>
					<div className="maps_container">
					{
						this.state.tiles.map( obj => (<Tile zoom={this.state.zoom} {...obj}></Tile>))
					}
					</div>
				</div>
			</div>
		);
	}
}

export default App;

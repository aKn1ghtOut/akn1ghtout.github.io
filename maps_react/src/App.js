import React, { Component } from 'react';

import { Tile, degToRad } from "./Tile";
import './App.css';

class App extends Component {
	state = {
		latitude: 20.5937,
		longitude: 78.9629,
		zoom: 8,
		tiles: [],
		moveX: 0,
		moveY: 0
	}

	constructor(props)
	{
		super(props);
		this.getTiles = this.getTiles.bind(this);
		this.moveUp = this.moveUp.bind(this);
		this.moveDown = this.moveDown.bind(this);
		this.moveLeft = this.moveLeft.bind(this);
		this.moveRight = this.moveRight.bind(this);
		this.zoomIn = this.zoomIn.bind(this);
		this.zoomOut = this.zoomOut.bind(this);
	}

	sec = degrad => (1 / Math.cos(degrad));

	componentDidMount()
	{
		this.getTiles();
	}

	getTiles()
	{
		const tilesize = 150;

		const { latitude, longitude, zoom } = this.state;
		let z	=	Math.pow(2, zoom);
		let x	= 	z * ((longitude + 180) / 360);
		let y	= 	z * (1 - (Math.log(Math.tan(degToRad(latitude)) + this.sec(degToRad(latitude))) / (22/7))) / 2;

		let x1 = Math.floor(x);
		let y1 = Math.floor(y);

		const tiles = [];
		for(let i = x1 - 2; i <= x1 + 2; i++)
		{
			for(let j = y1 - 2; j <= y1 + 2; j++)
			{
				tiles.push({
					x : i,
					y : j,
					z : zoom,
					posx: i - x1 + 2,
					posy: y1 - j + 2
				})
			}
		}

		this.setState(
			{
				tiles: tiles,
				moveX: (x - x1) * tilesize,
				moveY: (y - y1) * tilesize
			}
		);
	}

	moveUp(){
		this.setState({
			latitude: this.state.latitude + (1 / this.state.zoom)
		});
		this.getTiles();
	}

	moveDown(){
		this.setState({
			latitude: this.state.latitude - (1 / this.state.zoom)
		});
		this.getTiles();
	}

	moveLeft(){
		this.setState({
			longitude: this.state.longitude - (1 / this.state.zoom)
		});
		this.getTiles();
	}

	moveRight(){
		this.setState({
			longitude: this.state.longitude + (1 / this.state.zoom)
		});
		this.getTiles();
	}

	zoomIn(){
		this.setState({
			zoom: this.state.zoom + 1
		});
		this.getTiles();
	}

	zoomOut(){
		this.setState({
			zoom: this.state.zoom - 1
		});
		this.getTiles();
	}
	
	render(){
		return (
			<div className="App">
				<h1>OSM Tiles Map Rendered demo</h1>
				<table>
					<tr>
						<td><strong>Latitude</strong></td>
						<td><strong>Longitude</strong></td>
					</tr>
					<tr>
						<td>{this.state.latitude}</td>
						<td>{this.state.longitude}</td>
					</tr>
					<tr>
						<td>
							<button onClick={this.moveLeft}>Move Left</button>
							<button onClick={this.moveRight}>Move Right</button>
						</td>
						<td>
							<button onClick={this.moveUp}>Move Up</button>
							<button onClick={this.moveDown}>Move Down</button>
						</td>
					</tr><tr>
						<td>
							<button onClick={this.zoomIn}>Zoom in</button>
						</td>
						<td>
							<button onClick={this.zoomOut}>Zoom Out</button>
						</td>
					</tr>
				</table>
				<div id="container">
					<div
						className="maps_container"
						style={{
							transform: `translateX(-${this.state.moveX}px) translateY(-${this.state.moveY}px)`
						}}
					>
					{
						this.state.tiles.map( (obj, i) => (<Tile key={i} zoom={this.state.zoom} {...obj}></Tile>))
					}
					</div>
					<div 
						id="marker"
						style={{
							position: "absolute",
							left: "50%",
							top: "50%",
							transform: "translateX(-50%) translateY(-50%)",
							borderRadius: "10px",
							height: "20px",
							width: "20px",
							backgroundColor: "blue"
						}}
					/>
				</div>
			</div>
		);
	}
}

export default App;

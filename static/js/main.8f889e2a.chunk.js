(this.webpackJsonpmaps_react=this.webpackJsonpmaps_react||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),i=a(3),l=a.n(i),s=(a(13),a(4)),c=a(5),r=a(1),m=a(6),u=a(7),h=(a(14),function(t){return.0174533*t}),d=n.a.memo((function(t){var e=t.x,a=t.y,o=t.z,i=t.posx,l=t.posy;return n.a.createElement("img",{alt:"MapTile",className:"mapTile",src:"https://maps.wikimedia.org/osm-intl/".concat(o,"/").concat(e,"/").concat(a,".png"),style:{left:150*i+"px",bottom:150*l+"px"}})})),v=(a(15),function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(t){var o;return Object(s.a)(this,a),(o=e.call(this,t)).state={latitude:20.5937,longitude:78.9629,zoom:8,tiles:[],moveX:0,moveY:0},o.sec=function(t){return 1/Math.cos(t)},o.getTiles=o.getTiles.bind(Object(r.a)(o)),o.moveUp=o.moveUp.bind(Object(r.a)(o)),o.moveDown=o.moveDown.bind(Object(r.a)(o)),o.moveLeft=o.moveLeft.bind(Object(r.a)(o)),o.moveRight=o.moveRight.bind(Object(r.a)(o)),o.zoomIn=o.zoomIn.bind(Object(r.a)(o)),o.zoomOut=o.zoomOut.bind(Object(r.a)(o)),o}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getTiles()}},{key:"getTiles",value:function(){for(var t=this.state,e=t.latitude,a=t.longitude,o=t.zoom,n=Math.pow(2,o),i=n*((a+180)/360),l=n*(1-Math.log(Math.tan(h(e))+this.sec(h(e)))/(22/7))/2,s=Math.floor(i),c=Math.floor(l),r=[],m=s-2;m<=s+2;m++)for(var u=c-2;u<=c+2;u++)r.push({x:m,y:u,z:o,posx:m-s+2,posy:c-u+2});this.setState({tiles:r,moveX:150*(i-s),moveY:150*(l-c)})}},{key:"moveUp",value:function(){this.setState({latitude:this.state.latitude+1/this.state.zoom}),this.getTiles()}},{key:"moveDown",value:function(){this.setState({latitude:this.state.latitude-1/this.state.zoom}),this.getTiles()}},{key:"moveLeft",value:function(){this.setState({longitude:this.state.longitude-1/this.state.zoom}),this.getTiles()}},{key:"moveRight",value:function(){this.setState({longitude:this.state.longitude+1/this.state.zoom}),this.getTiles()}},{key:"zoomIn",value:function(){this.setState({zoom:this.state.zoom+1}),this.getTiles()}},{key:"zoomOut",value:function(){this.setState({zoom:this.state.zoom-1}),this.getTiles()}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"OSM Tiles Map Rendered demo"),n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"Latitude")),n.a.createElement("td",null,n.a.createElement("strong",null,"Longitude"))),n.a.createElement("tr",null,n.a.createElement("td",null,this.state.latitude),n.a.createElement("td",null,this.state.longitude)),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("button",{onClick:this.moveLeft},"Move Left"),n.a.createElement("button",{onClick:this.moveRight},"Move Right")),n.a.createElement("td",null,n.a.createElement("button",{onClick:this.moveUp},"Move Up"),n.a.createElement("button",{onClick:this.moveDown},"Move Down"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("button",{onClick:this.zoomIn},"Zoom in")),n.a.createElement("td",null,n.a.createElement("button",{onClick:this.zoomOut},"Zoom Out")))),n.a.createElement("div",{id:"container"},n.a.createElement("div",{className:"maps_container",style:{transform:"translateX(-".concat(this.state.moveX,"px) translateY(-").concat(this.state.moveY,"px)")}},this.state.tiles.map((function(e,a){return n.a.createElement(d,Object.assign({key:a,zoom:t.state.zoom},e))}))),n.a.createElement("div",{id:"marker",style:{position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)",borderRadius:"10px",height:"20px",width:"20px",backgroundColor:"blue"}})))}}]),a}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.8f889e2a.chunk.js.map
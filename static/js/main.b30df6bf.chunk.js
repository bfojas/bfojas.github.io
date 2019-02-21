(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(47)},32:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),o=t.n(c),i=(t(32),t(6)),l=t(7),s=t(9),m=t(8),u=t(10),d=t(52),p=t(5),h=(t(38),t(51)),f=t(49),E=t(24),b=t(48);t(40);var g=Object(d.a)(function(e){return r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"head-content"},r.a.createElement("div",{className:"profile-image"}),r.a.createElement("div",{className:"head-info"},r.a.createElement("h1",null,"BRADLEY FOJAS"),r.a.createElement("h3",null,"FULL-STACK WEB DEVELOPER"))),r.a.createElement("div",{className:"icon-container"},r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-react"}),"React"),r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-node-js"}),"Node.js"),r.a.createElement("div",null,r.a.createElement("i",{className:"devicon-postgresql-plain"}),"PostgreSQL"),r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-js-square"}),"JavaScript"),r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-html5"}),"HTML5"),r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-css3-alt"}),"CSS3")),r.a.createElement("div",{className:"home-content"},r.a.createElement("p",null,"After many years as a biomedical technician tackling many complex technical issues, Bradley recently completed the Full-Stack Web Dev Immersive program at DevMountain Phoenix where he received much praise from his instructors and peers for his enthusiastic approach to learning and troubleshooting."),r.a.createElement("p",null,"Although he attended the coding bootcamp with no prior coding experience, Bradley was not only able to quickly gain comprehension of JavaScript, HTML and CSS, but also of a full-stack that included ReactJs, NodeJs and PostgreSQL."),r.a.createElement("p",{className:"last-p"},"Feel free to click around the menus above to find more info about Bradley and his projects.")))}),v={name:"",image:"",about:"",techUsed:""};var j="CARD_FUN",y="ROAD_TRIP",k="BLACKJACK";t(43);var N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).componentDidMount=function(){t.renderProject()},t.componentDidUpdate=function(e){e.match.params!==t.props.match.params&&t.renderProject()},t.renderProject=function(){var e=t.props,a=e.renderCardFun,n=e.renderRoadTrip,r=e.renderBlackjack,c=t.props.match.params.id;"roadTrip"===c&&n(),"cardFun"===c&&a(),"blackjack"===c&&r()},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.image,n=e.about,c=e.techUsed;return r.a.createElement("div",{className:"project-container"},r.a.createElement("div",{className:"project-head"},"".concat(a," PROJECT")),r.a.createElement("div",{className:"project-body"},r.a.createElement("div",{className:"image-box"},r.a.createElement("div",{className:"project-image"},r.a.createElement("img",{src:t}))),r.a.createElement("div",{className:"summary-box"},r.a.createElement("div",{className:"project-about"},n),r.a.createElement("div",{className:"tech-used"},"TECHNOLOGIES USED"),r.a.createElement("div",{className:"project-tech"},c))))}}]),a}(n.Component),S={renderCardFun:function(){return{type:j,payload:{name:"THE CARD GAME",image:"../images/card_fun.jpg",about:"It's a simple card game, but baby got back-end. Users play and chat together over web sockets in this card guessing game. Players have many profile customizations and a bank system to make the fun feel riskier.",techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  Web Sockets  |  PostgreSQL  |  Nginx  |  Digital Ocean  |  SASS  | Amazon AWS  |  Stripe  |   Auth0  |  ChartJs  |  React-Router"}}},renderRoadTrip:function(){return{type:y,payload:{name:"THE ROAD TRIP",image:"../images/road_trip.jpg",about:"A collaborative group project to bring the power of the Google Maps API to a user-friendly road trip planning app. Users can edit routes with a quick drag and drop, explore other trips and other road trippers.",techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  PostgreSQL  |  SASS  | Amazon AWS  |  B-Crypt  |  React-Router"}}},renderBlackjack:function(){return{type:k,payload:{name:"THE BLACKJACK",image:"../images/blackjack.jpg",about:"A standard blackjack app that I put together after only coding for a few weeks. This app lets the player play hands of blackjack against a dealer. Aces and busting logic are all there.",techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS"}}}},w=Object(d.a)(Object(p.b)(function(e){return{name:e.name,image:e.image,about:e.about,techUsed:e.techUsed}},S)(N)),O=(t(45),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).windowCheck=function(){"/"!==e.props.match.path?e.setState({hidden:"block"}):e.props.history.push("/home")},e.dragOn=function(){e.setState({dragging:!0})},e.mouseMove=function(a){e.state.dragging&&e.setState({top:a.clientY-25,left:a.clientX-25})},e.dragOff=function(a){e.setState({dragging:!1})},e.maximize=function(){e.setState({hidden:"block"})},e.minimize=function(){e.setState({hidden:"none"})},e.menuRender=function(a){var t=a.target.id;e.setState({about:!1,portfolio:!1}),t&&e.setState(Object(E.a)({},t,!0))},e.state={top:"".concat(window.innerHeight-125),left:50,dragging:!1,hidden:"none",about:!1,portfolio:!1},e}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.windowCheck()}},{key:"render",value:function(){var e=this,a=this.state,t=a.about?{display:"flex"}:{display:"none"},n=a.portfolio?{display:"flex"}:{display:"none"};return r.a.createElement("div",{className:"home",onMouseMove:function(a){return e.mouseMove(a)}},r.a.createElement("div",{className:"icon",style:{top:"".concat(this.state.top,"px"),left:"".concat(this.state.left,"px")},onMouseDown:function(){return e.dragOn()},onMouseUp:function(a){return e.dragOff(a)},onDoubleClick:function(){return e.maximize()}},r.a.createElement("i",{className:"fas fa-keyboard"}),"Bradley"),r.a.createElement("div",{className:"window-container",onClick:function(a){return e.menuRender(a)},style:{display:"".concat(this.state.hidden)}},r.a.createElement("div",{className:"window-top"},r.a.createElement("button",{className:"minimize-button",onClick:function(){return e.minimize()}},r.a.createElement("i",{className:"fas fa-caret-down"}))),r.a.createElement("div",{className:"window-menu"},r.a.createElement("ul",null,r.a.createElement(b.a,{to:"/home",style:{textDecoration:"none"}},r.a.createElement("li",null,"Home")),r.a.createElement("li",{id:"portfolio",onClick:function(a){return e.menuRender(a)}},"Portfolio",r.a.createElement("ul",{className:"portfolio-menu",style:n},r.a.createElement("li",{onClick:function(){e.props.history.push("/project/blackjack")}},"Blackjack"),r.a.createElement("li",{onClick:function(){e.props.history.push("/project/cardFun")}},"The Fun"),r.a.createElement("li",{onClick:function(){e.props.history.push("/project/roadTrip")}},"Road Trip"))),r.a.createElement("li",{id:"about",onClick:function(a){return e.menuRender(a)}},"About",r.a.createElement("ul",{className:"about-menu",style:t},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/bradley-fojas/"},"LinkedIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/bfojas"},"GitHub")))))),r.a.createElement("div",{className:"route-container"},"/home"===this.props.match.path&&r.a.createElement(g,null),"/project/:id"===this.props.match.path&&r.a.createElement(w,null))))}}]),a}(n.Component)),C=Object(d.a)(Object(p.b)(function(e){return{projectObject:e.projectObject}})(O)),R=r.a.createElement(h.a,null,r.a.createElement(f.a,{path:"/home",component:C}),r.a.createElement(f.a,{path:"/project/:id",component:C}),r.a.createElement(f.a,{path:"/",component:C})),A=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},R)}}]),a}(n.Component),T=Object(d.a)(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=t(50),D=t(13),J=Object(D.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case k:case j:case y:return a.payload;default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(p.a,{store:J},r.a.createElement(x.a,null,r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.b30df6bf.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(48)},31:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(22),r=a.n(i),c=(a(31),a(5)),s=a(6),l=a(9),m=a(7),p=a(10),u=a(52),d=(a(33),a(53)),h=a(50),f=a(49),g=a(8);a(39);var b=Object(u.a)(function(e){return o.a.createElement("div",{className:"home-container"},o.a.createElement("div",{className:"head-content"},o.a.createElement("div",{className:"profile-image"}),o.a.createElement("div",{className:"head-info"},o.a.createElement("h1",null,"BRADLEY FOJAS"),o.a.createElement("h3",null,"FULL-STACK WEB DEVELOPER"))),o.a.createElement("div",{className:"icon-container"},o.a.createElement("div",null,o.a.createElement("i",{className:"fab fa-react"}),"React"),o.a.createElement("div",null,o.a.createElement("i",{className:"fab fa-node-js"}),"Node.js"),o.a.createElement("div",null,o.a.createElement("i",{className:"devicon-postgresql-plain"}),"PostgreSQL"),o.a.createElement("div",null,o.a.createElement("i",{className:"fab fa-js-square"}),"JavaScript"),o.a.createElement("div",null,o.a.createElement("i",{className:"fab fa-html5"}),"HTML5"),o.a.createElement("div",null,o.a.createElement("i",{className:"fab fa-css3-alt"}),"CSS3")),o.a.createElement("div",{className:"home-content"},o.a.createElement("p",null,"After many years as a biomedical technician tackling complex technical issues, Bradley recently completed the Full-Stack Web Development Immersive program at DevMountain where he received much praise from his instructors and peers for his enthusiastic approach to learning and troubleshooting."),o.a.createElement("p",null,"Although he attended the coding bootcamp with no prior coding experience, Bradley was not only able to quickly gain comprehension of JavaScript, HTML and CSS, but also of a full-stack that included ReactJs, NodeJs and PostgreSQL. Other technologies Bradley has been able to learn include SASS, React-Native, Firebase, Nginx, Amazon S3, Socket.io, jQuery, and Jest."),o.a.createElement("p",{className:"last-p"},"Feel free to click around the menus above to find more info about Bradley and his projects.")))}),k=(a(42),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).previousImage=function(){var e=a.state.position,t=a.props.image;0===e?a.setState({position:t.length-1}):a.setState({position:e-1})},a.nextImage=function(){var e=a.state.position;e===a.props.image.length-1?a.setState({position:0}):a.setState({position:e+1})},a.state={position:0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({position:this.props.start})}},{key:"render",value:function(){var e=this.state.position,t=this.props,a=t.image,n=t.close;return o.a.createElement("div",{className:"image-container"},o.a.createElement("div",{className:"image-cover",onClick:n}),o.a.createElement("div",{className:"image-window"},o.a.createElement("div",{className:"image-top-bar"},o.a.createElement("div",{className:"image-name"},"Preview"),o.a.createElement("button",{className:"close-button",onClick:n},"X")),o.a.createElement("div",{className:"image-content",style:{backgroundImage:"url(".concat(a[e],")")}},o.a.createElement("i",{className:"fas fa-caret-left",onClick:this.previousImage}),o.a.createElement("i",{className:"fas fa-caret-right",onClick:this.nextImage}))))}}]),t}(n.Component)),E=Object(u.a)(Object(g.b)(function(e){return{image:e.image,imageHeight:e.imageHeight}})(k)),v={name:"",image:"",about:"",techUsed:""};var y="CARD_FUN",j="ROAD_TRIP",w="BLACKJACK",S="OHMS_LAW",N="PORTFOLIO";a(44);var O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.renderProject()},a.componentDidUpdate=function(e){e.match.params!==a.props.match.params&&a.renderProject()},a.openImages=function(e){a.setState({imageStart:e,imageModal:!0})},a.closeImage=function(){a.setState({imageModal:!1})},a.renderProject=function(){var e=a.props,t=e.renderCardFun,n=e.renderRoadTrip,o=e.renderBlackjack,i=e.renderOhms,r=e.renderPortfolio,c=a.props.match.params.id;"roadTrip"===c&&n(),"cardFun"===c&&t(),"blackjack"===c&&o(),"ohmsLaw"===c&&i(),"portfolio"===c&&r()},a.state={imageModal:!1,imageStart:0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.imageModal,n=t.imageStart,i=this.props,r=i.name,c=i.image,s=i.imageHeight,l=i.about,m=i.techUsed,p=i.projectLink,u=c&&c.map(function(t,a,n){return o.a.createElement("div",{key:a,className:"images",onClick:function(){return e.openImages(a)},style:{backgroundImage:"url(".concat(t,")"),height:s}})}),d=p&&p.map(function(e,t){return o.a.createElement("a",{key:t,href:e.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:e.linkType}))});return o.a.createElement("div",{className:"project-container"},o.a.createElement("div",{className:"project-head"},"".concat(r," PROJECT")),o.a.createElement("div",{className:"project-body"},o.a.createElement("div",{className:"image-box"},u),o.a.createElement("div",{className:"summary-box"},o.a.createElement("div",{className:"project-about"},l),o.a.createElement("div",{className:"project-subject"},"LINK:"),o.a.createElement("div",{className:"links-box"},d),o.a.createElement("div",{className:"project-subject"},"TECHNOLOGIES USED:"),o.a.createElement("div",{className:"project-tech"},m))),a?o.a.createElement(E,{start:n,close:this.closeImage}):null)}}]),t}(n.Component),T={renderCardFun:function(){return{type:y,payload:{name:"THE CARD GAME",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/card_fun1.png","https://s3.amazonaws.com/dev-fun-bucket/card_fun2.png","https://s3.amazonaws.com/dev-fun-bucket/card_fun4.png"],about:'It\'s a simple card game, but baby got back-end. Users play and chat together over web sockets in this card guessing game. Players have many profile customization options and a bank system to make the fun feel riskier. I implemented responsive design so it plays comfortably on mobile too. Voted as the "Most Technical" project for my DevMountain cohort.',projectLink:[{link:"https://www.dev-mountain.fun",linkType:"fab fa-internet-explorer"},{link:"https://github.com/bfojas/Personal-Project.git",linkType:"fab fa-github"}],techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  Web Sockets  |  PostgreSQL  |  Nginx  |  Digital Ocean  |  SASS  | Amazon AWS  |  Stripe  |   Auth0  |  ChartJs  |  React-Router"}}},renderRoadTrip:function(){return{type:j,payload:{name:"THE ROAD TRIP",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/road_trip1.png","https://s3.amazonaws.com/dev-fun-bucket/road_trip2.png","https://s3.amazonaws.com/dev-fun-bucket/road_trip4.png"],about:"A collaborative group project to bring the power of the Google Maps API to a user-friendly road trip planning app. Users can edit routes with a quick drag and drop, explore other trips and other road trippers.",projectLink:[{link:"https://github.com/bfojas/road-trip.git",linkType:"fab fa-github"}],techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  PostgreSQL  |  SASS  | Amazon AWS  |  B-Crypt  |  React-Router"}}},renderBlackjack:function(){return{type:w,payload:{name:"THE BLACKJACK",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/blackjack.png"],about:"A standard blackjack app that I put together within my first few weeks of coding. This app lets the player play hands of blackjack against a dealer. Aces and busting logic are all there.",projectLink:[{link:"https://blackjack-project-dded9.firebaseapp.com/",linkType:"fab fa-internet-explorer"},{link:"https://github.com/bfojas/nodb.git",linkType:"fab fa-github"}],techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  | Firebase"}}},renderOhms:function(){return{type:S,payload:{name:"THE OHM'S LAW",imageHeight:"700px",image:["https://lh3.googleusercontent.com/daCMT5ioYMFVZgY0ypIsYt14nHg1IAUdtOYvp3gyAjqc_qxo9c5PvhiXB0lFvo4qprLe=w400"],about:"I wanted to learn, build, and publish a React-Native-App in one day. This is what I came up with. It's a tool for calculating Ohm's Law. Plenty of apps like it out there, but this one also has a link that takes you back to this portfolio...",projectLink:[{link:"http://play.google.com/store/apps/details?id=bfojas.github.io",linkType:"fab fa-google-play"},{link:"https://github.com/bfojas/ohms-law.git",linkType:"fab fa-github"}],techUsed:"React-Native  |  Expo  |  JavaScript  |  HTML  |  CSS"}}},renderPortfolio:function(){return{type:N,payload:{name:"THE UH.. THIS THING",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/portfolio3.png","https://s3.amazonaws.com/dev-fun-bucket/portfolio2.png","https://s3.amazonaws.com/dev-fun-bucket/portfolio1.png"],about:"Woah, webception. This is my portfolio site. Basically the thing you are looking at right now. Don't let the simplistic looking design fool you. There's a lot going on here. This page that you are reading right now is a reusable component with props from Redux. This window is a styled modal. And the whole thing is mobile responsive",projectLink:[{link:"https://bfojas.github.io/portfolio/#/project/portfolio",linkType:"fab fa-internet-explorer"},{link:"https://github.com/bfojas/portfolio.git",linkType:"fab fa-github"}],techUsed:"ReactJS  |  Redux  |  Amazon AWS  |  React-Router  |  JavaScript  |  HTML  |  CSS  |  SASS  |  Github Pages"}}}},C=Object(u.a)(Object(g.b)(function(e){return{name:e.name,image:e.image,imageHeight:e.imageHeight,about:e.about,techUsed:e.techUsed,projectLink:e.projectLink}},T)(O)),L=(a(46),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).windowCheck=function(){"/"!==e.props.match.path?e.setState({hidden:"block"}):e.props.history.push("/home")},e.dragOn=function(){e.setState({dragging:!0})},e.mouseMove=function(t){e.state.dragging&&e.setState({top:t.clientY-25,left:t.clientX-25})},e.dragOff=function(t){e.setState({dragging:!1})},e.maximize=function(){e.setState({hidden:"block"})},e.minimize=function(){e.setState({hidden:"none"})},e.menuRender=function(t){var a=e.state,n=a.portfolio,o=a.about,i=a.email,r=t.target.id;"about"===r?e.setState({about:!o,portfolio:!1,email:!1}):"portfolio"===r?e.setState({portfolio:!n,about:!1,email:!1}):"email"===r?e.setState({email:!i,about:!1,portfolio:!1}):e.setState({about:!1,portfolio:!1})},e.state={top:"".concat(window.innerHeight-125),left:50,dragging:!1,hidden:"none",about:!1,portfolio:!1,email:!1},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.windowCheck()}},{key:"render",value:function(){var e=this,t=this.state,a=t.about,n=t.portfolio,i=t.email,r=[{name:"Road Trip",route:"roadTrip"},{name:"Ohm's Law",route:"ohmsLaw"},{name:"Blackjack",route:"blackjack"},{name:"Card Fun",route:"cardFun"},{name:"Windows Clone",route:"portfolio"}],c=n?{display:"flex",height:"".concat(30*r.length,"px")}:{display:"none"},s=a?{display:"flex"}:{display:"none"},l=i?{display:"flex"}:{display:"none"},m=r.map(function(t,a){return o.a.createElement("li",{key:a,onClick:function(){e.props.history.push("/project/".concat(t.route))}},t.name)});return o.a.createElement("div",{className:"home",onMouseMove:function(t){return e.mouseMove(t)}},o.a.createElement("div",{className:"icon",style:{top:"".concat(this.state.top,"px"),left:"".concat(this.state.left,"px")},onMouseDown:this.dragOn,onMouseUp:function(t){return e.dragOff(t)},onDoubleClick:this.maximize},o.a.createElement("i",{className:"fas fa-keyboard"}),"Bradley"),o.a.createElement("div",{className:"icon-mobile",onClick:this.maximize},o.a.createElement("i",{className:"fas fa-keyboard"}),"Bradley"),o.a.createElement("div",{className:"window-container",onClick:function(t){return e.menuRender(t)},style:{display:"".concat(this.state.hidden)}},o.a.createElement("div",{className:"window-top"},o.a.createElement("div",{className:"window-name"},"Bradley Fojas"),o.a.createElement("button",{className:"minimize-button",onClick:function(){return e.minimize()}},o.a.createElement("i",{className:"fas fa-caret-down"}))),o.a.createElement("div",{className:"window-menu"},o.a.createElement("ul",null,o.a.createElement(f.a,{to:"/home",style:{textDecoration:"none"}},o.a.createElement("li",null,"Home")),o.a.createElement("li",{id:"portfolio",onClick:function(t){return e.menuRender(t)}},"Portfolio",o.a.createElement("ul",{className:"portfolio-menu",style:c},m)),o.a.createElement("li",{id:"email",onClick:function(t){return e.menuRender(t)}},"Email",o.a.createElement("ul",{className:"email-menu",style:l},o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:brad.fojas@yahoo.com"},"brad.fojas@yahoo.com")))),o.a.createElement("li",{id:"about",onClick:function(t){return e.menuRender(t)}},"About",o.a.createElement("ul",{className:"about-menu",style:s},o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/bradley-fojas/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/bfojas",target:"_blank",rel:"noopener noreferrer"},"GitHub")))))),o.a.createElement("div",{className:"route-container"},"/home"===this.props.match.path&&o.a.createElement(b,null),"/project/:id"===this.props.match.path&&o.a.createElement(C,null))))}}]),t}(n.Component)),R=Object(u.a)(Object(g.b)(function(e){return{projectObject:e.projectObject}})(L)),x=o.a.createElement(d.a,null,o.a.createElement(h.a,{path:"/home",component:R}),o.a.createElement(h.a,{path:"/project/:id",component:R}),o.a.createElement(h.a,{path:"/",component:R})),A=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).updateWindow=function(){window.addEventListener("resize",function(){e.setState({screenHeight:window.innerHeight})})},e.state={screenHeight:window.innerHeight},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindow())}},{key:"render",value:function(){return o.a.createElement("div",{className:"App",style:{height:this.state.screenHeight}},x)}}]),t}(n.Component),H=Object(u.a)(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(51),M=a(13),_=Object(M.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case y:case j:case S:case N:return t.payload;default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(o.a.createElement(g.a,{store:_},o.a.createElement(I.a,null,o.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.87d6867a.chunk.js.map
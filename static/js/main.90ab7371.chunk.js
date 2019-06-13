(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(63)},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(22),c=a.n(i),r=(a(32),a(4)),s=a(5),l=a(7),m=a(6),u=a(8),p=a(68),h=a(65),d=a(67),f=a(23),g=a(64),b=(a(34),a(36),Object(d.a)(function(e){return o.a.createElement("div",{className:"head-content"},o.a.createElement("div",{className:"head-info",onClick:function(){return e.history.push("/home")}},o.a.createElement("h1",null,"BRADLEY FOJAS"),o.a.createElement("h3",null,"SOFTWARE ENGINEER")))})),v=(a(41),Object(d.a)(function(e){var t=[{icon:"fab fa-react",text:"React/ React-Native"},{icon:"fab fa-node-js",text:"NodeJs/ Express"},{icon:"devicon-postgresql-plain",text:"PostgreSQL"},{icon:"fab fa-js-square",text:"JavaScript ES6"},{icon:"fab fa-html5",text:"HTML5"},{icon:"fab fa-sass",text:"CSS/ SASS"},{icon:"https://s3.amazonaws.com/dev-fun-bucket/redux_transparent.png",text:"Redux",type:"image"},{icon:"fab fa-github-square",text:"Git/ GitHub"}],a=function(e){return"image"===e.type?o.a.createElement("div",{className:"single-icon",key:e.text},o.a.createElement("img",{className:"tech-icon",style:{height:"64px",width:"64px"},src:e.icon,alt:e.text}),e.text):o.a.createElement("div",{className:"single-icon",key:e.text},o.a.createElement("i",{className:"".concat(e.icon," tech-icon")}),e.text)};return o.a.createElement("div",{className:"icon-wrap ".concat(e.className)},o.a.createElement("div",{className:"icon-container"},o.a.createElement("div",{className:"four-icons"},o.a.createElement("div",{className:"two-icons"},a(t[0]),a(t[1])),o.a.createElement("div",{className:"two-icons"},a(t[2]),a(t[3]))),o.a.createElement("div",{className:"four-icons"},o.a.createElement("div",{className:"two-icons"},a(t[4]),a(t[5])),o.a.createElement("div",{className:"two-icons"},a(t[6]),a(t[7])))))})),k=Object(d.a)(function(e){return o.a.createElement("div",{className:"home-container"},o.a.createElement(b,null),o.a.createElement(v,null),o.a.createElement("div",{className:"home-content"},o.a.createElement("div",{className:"home-text"},o.a.createElement("p",null,"I'm a Software Engineer focusing mostly on React, React-Native, NodeJS, and PostgreSQL. I got my start in development after finishing the DevMountain (Phoenix) Web Dev Immersive program as a fully badged graduate and hackathon champion."),o.a.createElement("p",null,"I've also got a brain full of useless facts, in case you're down for some bar trivia."),o.a.createElement("p",{className:"last-p"},"Feel free to click around the menus above to find more info about me and my projects. Check out this picture of me awkwardly holding my dog.")),o.a.createElement("div",{className:"home-image"})))}),E=a(11),w=(a(45),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).startInterval=function(){a.props.image.length>1&&setInterval(a.nextImage,1e4)},a.previousImage=function(){var e=a.state.position,t=a.props.image;a.setState({width:"0",left:"calc(100% - 10px)",zIndex:"-900"}),0===e?a.setState({position:t.length-1}):a.setState({position:e-1}),setTimeout(function(){return a.setState({left:"5px"})},250),setTimeout(function(){a.setState({zIndex:"500",width:"calc(100% - 10px)"})},500)},a.nextImage=function(){var e=a.state.position,t=a.props.image;a.setState({width:"0",left:"5px",zIndex:"-900",backgroundSize:"cover"}),e===t.length-1?a.setState({position:0}):a.setState({position:e+1}),setTimeout(function(){return a.setState({left:"calc(100% - 10px)"})},250),setTimeout(function(){a.setState({zIndex:"500",width:"calc(100% - 10px)",backgroundSize:"contain",left:"5px"})},500)},a.state={position:0,width:"calc(100% - 10px)",left:"5px",zIndex:"500"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({position:this.props.start}),"image"===this.props.type&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.startInterval)}},{key:"render",value:function(){var e=this.state,t=e.position,a=e.width,n=e.left,i=e.zIndex,c=this.props,r=c.image,s=c.close,l=c.type,m=c.name,u="image"===l?"flex":"none",p="video"===l?"flex":"none";return o.a.createElement("div",{className:"image-container"},o.a.createElement("div",{className:"image-cover",onClick:s}),o.a.createElement("div",{className:"image-window"},o.a.createElement("div",{className:"image-top-bar"},o.a.createElement("div",{className:"image-name"},m," Preview"),o.a.createElement("button",{className:"close-button",onClick:s},o.a.createElement("i",{className:"fas fa-times"}))),o.a.createElement("div",{className:"image-content",style:{backgroundImage:"url(".concat(r[t],")"),display:u,width:a,left:n,zIndex:i}}),"image"===l&&r.length>1?o.a.createElement("div",{className:"nav-container"},o.a.createElement("i",{className:"fas fa-caret-left",onClick:this.previousImage}),o.a.createElement("i",{className:"fas fa-caret-right",onClick:this.nextImage})):null,o.a.createElement("div",{className:"image-content",style:{display:p}},o.a.createElement("video",{controls:!0,autoPlay:!0,height:"100%",width:"auto",style:{maxWidth:"calc(100% - 6px"}},o.a.createElement("source",{src:t})))))}}]),t}(n.Component)),j=Object(d.a)(Object(E.b)(function(e){return{name:e.name,image:e.image,imageHeight:e.imageHeight}})(w)),y={name:"",title:"",image:"",about:"",projectLink:"",techUsed:"",route:""},S=[{name:"Road Trip",title:"ROAD TRIP",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/road_trip1.png","https://s3.amazonaws.com/dev-fun-bucket/road_trip2.png","https://s3.amazonaws.com/dev-fun-bucket/road_trip4.png"],about:["A collaborative group project to bring the power of the Google Maps API to a user-friendly road trip planning app. Users can edit routes with a quick drag and drop, explore other trips and other road trippers."],projectLink:[{link:"https://s3.amazonaws.com/dev-fun-bucket/Road-trip-compressed-2.mp4",linkType:"fas fa-video"},{link:"https://github.com/bfojas/road-trip.git",linkType:"fab fa-github"}],techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS/SASS  |  Redux  |  PostgreSQL  |  Axios  |  Amazon S3  |  React-Router",route:"roadTrip"},{name:"Jobs For Hope",title:"JOBS FOR HOPE",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/JFH1.png","https://s3.amazonaws.com/dev-fun-bucket/JFH2.png","https://s3.amazonaws.com/dev-fun-bucket/JFH3.png"],about:["Jobs for Hope is an open source project through Hack for LA that looks to work with the LA County Homeless initiative to help aggregate job opportunities with homeless service providers and make it easier for them to connect with job seekers.","My contributions have included work on the responsive designs, SQL schemas, route and registration logic."],projectLink:[{link:"http://jobs-for-hope.herokuapp.com/",linkType:"fab fa-internet-explorer"},{link:"https://github.com/hackforla/jobs-for-hope",linkType:"fab fa-github"}],techUsed:"ReactJS  |  Express/NodeJS  |  PostgreSQL  |  Amazon S3  |  React-Router  |  JavaScript  |  HTML  |  CSS/SASS  |  Heroku",route:"jobsForHope"},{name:"My Portfolio",title:"UH.. THIS THING",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/portfolio3.png","https://s3.amazonaws.com/dev-fun-bucket/portfolio1.png","https://s3.amazonaws.com/dev-fun-bucket/portfolio2.png"],about:["Woah, webception. This is my portfolio site. Basically the thing you are looking at right now.  Don't let the simplistic looking design fool you. There's a lot going on here  (did you drag the desktop icons?).","This page that you are reading right now is a reusable component with props from Redux. This window is a styled modal. And the whole thing is mobile responsive."],projectLink:[{link:"https://bfojas.github.io/portfolio/#/project/portfolio",linkType:"fab fa-internet-explorer"},{link:"https://github.com/bfojas/portfolio.git",linkType:"fab fa-github"}],techUsed:"ReactJS  |  Redux  |  Amazon S3  |  React-Router  |  JavaScript  |  HTML  |  CSS/SASS  |  Github Pages",route:"portfolio"},{name:"Card Fun",title:"CARD GAME",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/card_fun1.png","https://s3.amazonaws.com/dev-fun-bucket/card_fun2.png","https://s3.amazonaws.com/dev-fun-bucket/card_fun4.png"],about:['It\'s a simple card game, but baby got back-end. Users play and chat together over web sockets in this card guessing game. Players have many profile customization options and a bank system to make the fun feel riskier. I implemented responsive design so it plays comfortably on mobile too. Voted as the "Most Technical" project for my DevMountain cohort.'],projectLink:[{link:"https://www.dev-mountain.fun",linkType:"fab fa-internet-explorer"},{link:"https://github.com/bfojas/Personal-Project.git",linkType:"fab fa-github"}],techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS/SASS  |  Redux  |  Web Sockets  |  PostgreSQL  |  Axios  |  Nginx  |  Digital Ocean  | Amazon S3  |  Stripe  |   Auth0  |  ChartJs  |  React-Router",route:"cardFun"},{name:"Blackjack",title:"BLACKJACK",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/blackjack.png"],about:["A standard blackjack app that I put together within my first few weeks of coding. This app lets the player play hands of blackjack against a dealer. Aces and busting logic are all there."],projectLink:[{link:"https://blackjack-project-dded9.firebaseapp.com/",linkType:"fab fa-internet-explorer"},{link:"https://github.com/bfojas/nodb.git",linkType:"fab fa-github"}],techUsed:"ReactJs  |  Express/NodeJs  |  Axios  |  JavaScript  |  HTML  |  CSS  | Firebase",route:"blackjack"},{name:"React-Native Reservation",title:"HOTEL RESERVATION",imageHeight:"700px",image:["https://s3.amazonaws.com/dev-fun-bucket/reservationList.png","https://s3.amazonaws.com/dev-fun-bucket/reservationSelect.png","https://s3.amazonaws.com/dev-fun-bucket/dateSelect.png","https://s3.amazonaws.com/dev-fun-bucket/login.png"],about:["A small React-Native assessment project I put together using a supplied GraphQL backend. I had about a week to learn GraphQL, TypeScript, and Jest. The app has two purposes, making reservations and viewing them."],projectLink:[{link:"https://github.com/bfojas/assessment_project",linkType:"fab fa-github"}],techUsed:"React-Native-CLI  |  Gradle  |  TypeScript  |  CSS  |  Jest  |  Apollo/GraphQL",route:"hotelReservation"},{name:"Math Challenge",title:"MATH CHALLENGE",imageHeight:"700px",image:["https://s3.amazonaws.com/dev-fun-bucket/math2.png","https://s3.amazonaws.com/dev-fun-bucket/math1.png","https://s3.amazonaws.com/dev-fun-bucket/math3.png"],about:["It's a small math game for mobile. Players are shown two math problems and have a set amount of time to figure out which one has the highest answer. This was my first time creating a React-Native app without expo."],projectLink:[{link:"https://s3.amazonaws.com/dev-fun-bucket/mathvid.mp4",linkType:"fas fa-video"},{link:"https://github.com/bfojas/math-challenge.git",linkType:"fab fa-github"}],techUsed:"React-Native-CLI  |  Gradle  |  JavaScript  |  CSS",route:"mathChallenge"},{name:"Ohm's Law Calc",title:"OHM'S LAW",imageHeight:"700px",image:["https://lh3.googleusercontent.com/daCMT5ioYMFVZgY0ypIsYt14nHg1IAUdtOYvp3gyAjqc_qxo9c5PvhiXB0lFvo4qprLe=w400"],about:["I wanted to learn React-Native, then build and publish an App, all in one day. This is what I came up with. It's a tool for calculating Ohm's Law. Plenty of apps like it out there, but this one also has a link that takes you back to this portfolio..."],projectLink:[{link:"http://play.google.com/store/apps/details?id=bfojas.github.io",linkType:"fab fa-google-play"},{link:"https://github.com/bfojas/ohms-law.git",linkType:"fab fa-github"}],techUsed:"React-Native  |  Expo  |  JavaScript  |  CSS",route:"ohmsLaw"}];a(47);var N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.renderPage()},a.componentDidUpdate=function(e){e.match.params.id!==a.props.match.params.id&&a.renderPage()},a.openImages=function(e){a.setState({modalType:"image",imageStart:e,imageModal:!0})},a.openVideo=function(e){a.setState({modalType:"video",imageStart:e,imageModal:!0})},a.closeImage=function(){a.setState({imageModal:!1})},a.renderPage=function(){var e=a.props.renderProject;switch(a.props.match.params.id){case"roadTrip":return e(0);case"jobsForHope":return e(1);case"portfolio":return e(2);case"cardFun":return e(3);case"blackjack":return e(4);case"hotelReservation":return e(5);case"mathChallenge":return e(6);case"ohmsLaw":return e(7);default:return null}},a.state={modalType:"",imageModal:!1,imageStart:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.imageModal,n=t.imageStart,i=t.modalType,c=this.props,r=c.title,s=c.image,l=c.imageHeight,m=c.about,u=c.techUsed,p=c.projectLink,h="700px"===l?o.a.createElement("div",{key:0,className:"images",onClick:function(){return e.openImages(0)},style:{backgroundImage:"url(".concat(s[[0]],")"),height:l}}):s&&s.map(function(t,a){return o.a.createElement("div",{key:a,className:"images",onClick:function(){return e.openImages(a)},style:{backgroundImage:"url(".concat(t,")"),height:l}})}),d=p&&p.map(function(t,a){return"fas fa-video"!==t.linkType?o.a.createElement("a",{key:a,href:t.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"links ".concat(t.linkType)})):o.a.createElement("i",{key:a,onClick:function(){return e.openVideo(t.link)},className:"links fas fa-video"})});return o.a.createElement("div",{className:"project-container",key:this.props.match.params.id},o.a.createElement("div",{className:"project-head"},o.a.createElement("div",{className:"project-name"},"".concat(r," PROJECT"))),o.a.createElement("div",{className:"project-body"},o.a.createElement("div",{className:"image-box"},h),o.a.createElement("div",{className:"summary-box"},o.a.createElement("div",{className:"project-about"},m&&m.map(function(e,t){return o.a.createElement("p",{key:t},e)})),o.a.createElement("div",{className:"project-subject"},"LINKS:"),o.a.createElement("div",{className:"links-box"},d),o.a.createElement("div",{className:"project-subject"},"TECHNOLOGIES USED:"),o.a.createElement("div",{className:"project-tech"},u))),a?o.a.createElement(j,{start:n,type:i,close:this.closeImage}):null)}}]),t}(n.Component),x=Object(d.a)(Object(E.b)(function(e){return{title:e.title,image:e.image,imageHeight:e.imageHeight,about:e.about,techUsed:e.techUsed,projectLink:e.projectLink}},{renderProject:function(e){return{type:"RENDER_PROJECT",payload:S[e]}}})(N)),O=(a(49),Object(d.a)(function(e){var t=e.val,a="250px"===t.imageHeight?"web":"mobile";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"project-image ".concat(a),style:{backgroundImage:"url(".concat(t.image[0],")")},onClick:function(){e.history.push("/project/".concat(t.route))}},o.a.createElement("div",{className:"image-cover"},"".concat(t.title," PROJECT"))))})),C=(a(51),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).selector=function(e){a.setState({selected:e}),a.scrollRef.current.scrollIntoView({behavior:"smooth"})},a.state={selected:"web"},a.scrollRef=o.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.selected,a=[],n=[];S.forEach(function(e){"250px"===e.imageHeight?a.push(e):n.push(e)});var i=function(e,t){return o.a.createElement(O,{val:e,key:e.route})},c=a.map(i),r=n.map(i);return o.a.createElement("div",{className:"all-container"},o.a.createElement(b,null),o.a.createElement(v,null),o.a.createElement("div",{className:"selector-container"},o.a.createElement("div",{ref:this.scrollRef,className:"selector-tabs"},o.a.createElement("p",{className:"selector ".concat("web"===t?"active":null),onClick:function(){return e.selector("web")}},o.a.createElement("span",{className:"break"},"|"),"Web Projects",o.a.createElement("span",{className:"break"},"..")),o.a.createElement("p",{className:"selector ".concat("mobile"===t?"active":null),onClick:function(){return e.selector("mobile")}},"Mobile Projects")),o.a.createElement("div",{className:"image-container ".concat("web"===t?"web-images":"mobile-images")},"web"===t?c:r)))}}]),t}(n.Component)),R=(a(53),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).menuRender=function(e){e.stopPropagation();var t=e.target.id;"about"===t?a.setState({about:!0,portfolio:!1,email:!1}):"portfolio"===t?a.setState({portfolio:!0,about:!1,email:!1}):"email"===t&&a.setState({email:!0,about:!1,portfolio:!1})},a.menuClose=function(){a.setState({about:!1,portfolio:!1,email:!1})},a.state={about:!1,portfolio:!1,email:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.about,n=t.portfolio,i=t.email,c=this.props.minimize,r=[{name:"Road Trip",route:"roadTrip"},{name:"Hotel Project",route:"hotelReservation"},{name:"Math Challenge",route:"mathChallenge"},{name:"Card Fun",route:"cardFun"}],s=n?{height:"".concat(30*(r.length+1),"px")}:{height:0,border:0,fontSize:0},l=a?{height:"120px"}:{height:0,border:0,fontSize:0},m=i?{height:"30px"}:{height:0,border:0,fontSize:0},u=r.map(function(t,a){return o.a.createElement("li",{key:a,onClick:function(){e.props.history.push("/project/".concat(t.route))}},t.name)});return o.a.createElement("div",{className:"window-container",onClick:this.menuClose,style:{display:"".concat(this.props.hidden)}},o.a.createElement("div",{className:"window-top"},o.a.createElement("div",{className:"window-name"},"Bradley Fojas"),o.a.createElement("button",{className:"minimize-button",onClick:c},o.a.createElement("i",{className:"fas fa-times"}))),o.a.createElement("div",{className:"window-menu"},o.a.createElement("ul",null,o.a.createElement("li",{id:"portfolio",onMouseEnter:function(t){return e.menuRender(t)},onClick:function(t){return e.menuRender(t)}},"Projects",o.a.createElement("ul",{className:"portfolio-menu",style:s,onClick:this.menuClose},o.a.createElement("li",{style:{borderBottom:n?"1px solid black":"0"},key:"all",onClick:function(){e.props.history.push("/project")}},"View All"),u)),o.a.createElement("li",{id:"email",onMouseEnter:function(t){return e.menuRender(t)},onClick:function(t){return e.menuRender(t)}},"Contact",o.a.createElement("ul",{className:"email-menu",style:m,onClick:this.menuClose},o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:bradfojas@gmail.com"},"bradfojas@gmail.com")))),o.a.createElement("li",{id:"about",onMouseEnter:function(t){return e.menuRender(t)},onClick:function(t){return e.menuRender(t)}},"About",o.a.createElement("ul",{className:"about-menu",style:l,onClick:this.menuClose},o.a.createElement("li",null,o.a.createElement(g.a,{to:"/home",style:{textDecoration:"none"},onClick:this.menuClose},"Bradley")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/bradley-fojas/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/bfojas",target:"_blank",rel:"noopener noreferrer"},"GitHub")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.hackerrank.com/dollartaco",target:"_blank",rel:"noopener noreferrer"},"HackerRank")))))),o.a.createElement("div",{className:"route-container"},o.a.createElement(p.a,null,o.a.createElement(h.a,{path:"/home",component:k}),o.a.createElement(h.a,{path:"/project/:id",render:function(e){return o.a.createElement(x,null)}}),o.a.createElement(h.a,{path:"/project",component:C}))))}}]),t}(n.Component)),T=Object(d.a)(R),I=(a(55),function(e){return o.a.createElement("div",{className:"pic-contain"},o.a.createElement("div",{className:"bradley"}),o.a.createElement("div",{className:"bubble"},o.a.createElement("span",null,"Hi, I'm a Web Developer! "),o.a.createElement("p",null,o.a.createElement("span",{className:"mobile-span"}," Double-"),"Click an icon in the corner to learn more about me.")))}),L=(a(57),a(59),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidUpdate=function(e){e!==a.props&&a.setState({top:"".concat(a.props.position[0]),left:a.props.position[1]})},a.state={top:"".concat(a.props.position[0]),left:a.props.position[1],dragging:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.maximize,n=e.dragOn,i=e.dragOff,c=e.value,r=e.icon;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"draggable-icon-container",style:{top:"".concat(this.state.top,"px"),left:"".concat(this.state.left,"px")},onMouseDown:function(){return n(c)},onMouseUp:i,onDoubleClick:function(){return a(c)}},o.a.createElement("div",{className:"icon",style:{backgroundImage:"url(".concat(r,")")}}),o.a.createElement("div",{className:"name"},t)),o.a.createElement("div",{className:"icon-mobile-container",style:{bottom:"".concat(this.state.left-35,"px"),left:"20px"},onClick:function(){return a(c)}},o.a.createElement("img",{className:"icon-mobile",src:r,alt:"icon"}),o.a.createElement("div",{className:"name"},t)))}}]),t}(n.Component)),z=Object(d.a)(L),H=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).componentWillUnmount=function(){window.removeEventListener("scroll",e.handleScroll)},e.windowCheck=function(){"/"!==e.props.match.path?e.setState({hidden:"block"}):e.props.history.push("/project")},e.updateWindow=function(){window.addEventListener("resize",function(){e.setState({screenHeight:window.innerHeight}),e.iconDefault()})},e.iconDefault=function(){e.setState({home:[window.innerHeight-125,50],project:[window.innerHeight-125,150]})},e.dragOn=function(t){e.setState({dragging:t}),window.addEventListener("mousemove",e.mouseMove),window.addEventListener("mouseup",e.dragOff)},e.mouseMove=function(t){e.state.dragging&&e.setState(Object(f.a)({},e.state.dragging,[t.clientY-25,t.clientX-25]))},e.dragOff=function(){e.setState({dragging:!1}),window.removeEventListener("mousemove",e.mouseMove),window.removeEventListener("mouseup",e.dragOff)},e.maximize=function(t){"/".concat(t)!==e.props.match.path&&(console.log(t,e.props.match.path),e.props.history.push("".concat(t))),e.setState({hidden:"block"})},e.minimize=function(){e.setState({hidden:"none"})},e.state={bradDragging:!1,home:[window.innerHeight-125,25],project:[window.innerHeight-125,125],hidden:"none",screenHeight:window.innerHeight},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindow()),this.windowCheck()}},{key:"render",value:function(){return o.a.createElement("div",{className:"desktop",style:{height:this.state.screenHeight},onMouseLeave:this.dragOff},o.a.createElement(I,null),o.a.createElement(z,{value:"home",name:"Bradley",position:this.state.home,maximize:this.maximize,dragOn:this.dragOn,dragOff:this.dragOff,icon:"https://dev-fun-bucket.s3.amazonaws.com/icon-transparent.png"}),o.a.createElement(z,{value:"project",name:"Projects",position:this.state.project,maximize:this.maximize,dragOn:this.dragOn,dragOff:this.dragOff,icon:"https://dev-fun-bucket.s3.amazonaws.com/folder_icon_transparent.png"}),o.a.createElement(T,{minimize:this.minimize,hidden:this.state.hidden}))}}]),t}(n.Component),A=Object(d.a)(H),M=(a(61),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p.a,null,o.a.createElement(h.a,{path:"/home",component:A}),o.a.createElement(h.a,{path:"/project/:id",component:A}),o.a.createElement(h.a,{path:"/project",component:A}),o.a.createElement(h.a,{path:"/",component:A})))}}]),t}(n.Component)),J=Object(d.a)(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(66),_=a(15),D=Object(_.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RENDER_PROJECT":return t.payload;default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(o.a.createElement(E.a,{store:D},o.a.createElement(P.a,null,o.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.90ab7371.chunk.js.map
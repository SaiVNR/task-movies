(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},27:function(e,t,a){e.exports=a(46)},32:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),o=a.n(i),c=(a(32),a(5)),l=a(6),s=a(10),u=a(7),m=a(11),v=a(9),d=a(2),h=a(8),E=(a(14),a(16)),b=Object(E.a)(),p={ADD_MOVIE_TO_MOVIE_DATA:"ADD_MOVIE_TO_MOVIE_DATA",CLEAR_MOVIE_DATA:"CLEAR_MOVIE_DATA",ADD_MOVIE_BANNER_DATA:"ADD_MOVIE_BANNER_DATA",ADD_MOVIE_TO_MOVIE_DATA_GENRE:"ADD_MOVIE_TO_MOVIE_DATA_GENRE",SET_SEARCH:"SET_SEARCH",SET_DISPLAY_MESSAGE:"SET_DISPLAY_MESSAGE"},O=function(e){return{type:p.ADD_MOVIE_TO_MOVIE_DATA,payload:e}},y=function(){return{type:p.CLEAR_MOVIE_DATA,payload:[]}},M=function(e){return{type:p.ADD_MOVIE_BANNER_DATA,payload:e}},D=function(e){return{type:p.ADD_MOVIE_TO_MOVIE_DATA_GENRE,payload:e}},g=function(e){return{type:p.SET_SEARCH,payload:e}},f=function(e){return{type:p.SET_DISPLAY_MESSAGE,payload:e}},N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).setMovieBanner=a.setMovieBanner.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setMovieBanner",value:function(){b.push("/displayMovieDetails/"+this.props.movieData.id)}},{key:"render",value:function(){var e=this.props.movieData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("div",{className:"panel panel-primary"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("strong",null,r.a.createElement("h4",null,e.title))),r.a.createElement("div",{className:"panel-body"},r.a.createElement("img",{src:e.poster_path,alt:e.title,className:"movieBanner"})),r.a.createElement("div",{className:"panel-footer text-left"},r.a.createElement("h5",null,"Released on: ",e.release_date),r.a.createElement("h5",null,"Rating: ",e.vote_average),r.a.createElement("p",{id:"overview"},e.overview," "),r.a.createElement("h5",null," Genre: ",e.genres.join(", ")),r.a.createElement("center",null,r.a.createElement("button",{type:"button",onClick:this.setMovieBanner,className:"btn btn-info btn-lg","data-toggle":"modal","data-target":"#myModal"},"Description"))))))}}]),t}(n.Component);var _=Object(v.b)(null,function(e){return Object(h.a)({addMovieBannerDataGenre:D,addMovieBannerData:M,clearMovieData:y,setSearch:g},e)})(N),j=(a(38),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.movieReducer.moviesData;if(!this.props.movieReducer.areMoviesFound)return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,this.props.movieReducer.displayMessage));var t=1;return r.a.createElement("div",{className:"container belowBody"},e.map(function(e){return t++%3===0?r.a.createElement("div",{key:Math.random(),className:"row"},r.a.createElement(_,{key:e.id+10*Math.random(),movieData:e})):r.a.createElement(_,{key:e.id+10*Math.random(),movieData:e})}))}}]),t}(n.Component));var S=Object(v.b)(function(e){return{movieReducer:e.movieReducer}})(j),A=(a(17),new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"buildUrl",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"title";return"http://react-cdp-api.herokuapp.com/movies?sortBy="+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"vote_average")+"&search="+e+"&sortOrder=desc&searchBy="+t+"&limit=15"}},{key:"getData",value:function(e){return new Promise(function(t,a){var n=new XMLHttpRequest;n.open("GET",e),n.onload=function(){200===n.status?t(JSON.parse(n.response)):a(Error(n.statusText))},n.onerror=function(){a(Error("Network Error"))},n.send()})}}]),e}())),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={title:e.title,value:"",isByMovieName:!0,isByRating:!0,movieData:[]},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a.handleSearchByMovie=a.handleSearchByMovie.bind(Object(d.a)(Object(d.a)(a))),a.handleSearchByGenre=a.handleSearchByGenre.bind(Object(d.a)(Object(d.a)(a))),a.handleSortByRating=a.handleSortByRating.bind(Object(d.a)(Object(d.a)(a))),a.handleSortByReleaseDate=a.handleSortByReleaseDate.bind(Object(d.a)(Object(d.a)(a))),a.enterCheck=a.enterCheck.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSearchByMovie",value:function(e){e.preventDefault(),this.setState({isByMovieName:!0})}},{key:"handleSearchByGenre",value:function(e){e.preventDefault(),this.setState({isByMovieName:!1})}},{key:"handleSortByRating",value:function(e){e.preventDefault(),this.setState({isByRating:!0})}},{key:"handleSortByReleaseDate",value:function(e){e.preventDefault(),this.setState({isByRating:!1})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value.toLowerCase()})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),this.props.clearMovieData(),this.setState({movieData:[]}),0!==this.state.value.length){this.props.setDisplayMessage("Searching...");var a=A.buildUrl(this.state.value,this.state.isByMovieName?"title":"genres",this.state.isByRating?"vote_average":"release_date");A.getData(a).then(function(e){return e.data}).then(function(e){0===e.length?t.props.setDisplayMessage("No Movies Found"):e.map(function(e){return t.props.addMovieToMovieData(e)})})}else this.props.setDisplayMessage("Enter movie name...")}},{key:"enterCheck",value:function(e){13===e.keyCode&&document.getElementById("btnSearch").click()}},{key:"render",value:function(){return r.a.createElement("div",{className:"TopContainer text-center "},r.a.createElement("div",{className:"child-data"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("h2",{className:"siteHeader"},"Find your Movie"),r.a.createElement("input",{className:"form-control inputText",type:"text",value:this.state.value,onChange:this.handleChange,onKeyDown:this.enterCheck,placeholder:this.state.isByMovieName?"Enter Movie Name":"Enter Genre"})),r.a.createElement("br",null),r.a.createElement("button",{className:this.state.isByMovieName?"button-margin btn-danger":"button-margin ",onClick:this.handleSearchByMovie},"Title"),r.a.createElement("button",{className:this.state.isByMovieName?"button-margin ":"button-margin btn-danger",onClick:this.handleSearchByGenre},"Genre"),r.a.createElement("br",null),r.a.createElement("button",{className:this.state.isByRating?"button-margin btn-danger":"button-margin ",onClick:this.handleSortByRating},"Rating"),r.a.createElement("button",{className:this.state.isByRating?"button-margin":"button-margin btn-danger",onClick:this.handleSortByReleaseDate},"Release Date"),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"}),r.a.createElement("div",{className:"col-sm-4"}," ",r.a.createElement("input",{className:"button-margin form-control btn-danger",type:"submit",value:"Submit",id:"btnSearch"})," "),r.a.createElement("div",{className:"col-sm-4"})))),r.a.createElement("p",{className:"text-center text-white"},"Top ",r.a.createElement("span",{className:"badge"},this.props.movieReducer.totalNumberOfMoviesFound)," Movie(s) found"))}}]),t}(n.Component);var R=Object(v.b)(function(e){return{movieReducer:e.movieReducer}},function(e){return Object(h.a)({addMovieToMovieData:O,clearMovieData:y,setDisplayMessage:f},e)})(B),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App row "},r.a.createElement(R,null),r.a.createElement(S,null))}}]),t}(n.Component);var T=Object(v.b)(function(e){return{movieReducer:e.movieReducer}})(w),k=a(47),C=(a(41),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("errors"),r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null," 404! Page not Found... You can still Navigate to home "),r.a.createElement(k.a,{to:"/"}," ",r.a.createElement("h3",null,"Go Home ")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(50),V=a(49),G=a(48),x=a(13),F={moviesData:[],areMoviesFound:!1,showSearch:!0,movieBannerData:null,totalNumberOfMoviesFound:0,displayMessage:"Enter your movie"},H=Object(h.b)({movieReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.ADD_MOVIE_TO_MOVIE_DATA:var a=e.moviesData;return null===a&&(a=[]),a.push(t.payload),{moviesData:a,areMoviesFound:!0,showSearch:!0,movieBannerData:null,totalNumberOfMoviesFound:e.moviesData.length,displayMessage:"Enter your movie"};case p.ADD_MOVIE_TO_MOVIE_DATA_GENRE:return null===(a=e.moviesData)&&(a=[]),a.push(t.payload),Object(x.a)({},e,{moviesData:a,areMoviesFound:!0,showSearch:!1,totalNumberOfMoviesFound:e.moviesData.length,displayMessage:"Enter your movie"});case p.CLEAR_MOVIE_DATA:return Object(x.a)({},e,{moviesData:[],areMoviesFound:!1,showSearch:!0,totalNumberOfMoviesFound:0,displayMessage:"Enter your movie"});case p.ADD_MOVIE_BANNER_DATA:return Object(x.a)({},e,{areMoviesFound:!0,showSearch:!1,movieBannerData:t.payload,totalNumberOfMoviesFound:e.moviesData.length,displayMessage:"Enter your movie"});case p.SET_SEARCH:return Object(x.a)({},e,{showSearch:t.payload});case p.SET_DISPLAY_MESSAGE:return Object(x.a)({},e,{displayMessage:t.payload});default:return e}}}),L=(a(43),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).isEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},a.showSearch=a.showSearch.bind(Object(d.a)(Object(d.a)(a))),a.convertMinsToHrsMins=a.convertMinsToHrsMins.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"showSearch",value:function(){this.props.clearMovieData(),b.push("/")}},{key:"convertMinsToHrsMins",value:function(e){var t=Math.floor(e/60),a=e%60;return a=a<10?"0"+a:a,"".concat(t=t<10?"0"+t:t,":").concat(a)}},{key:"render",value:function(){var e=this,t=this.props.movieReducer.movieBannerData;return null!=t?this.isEmpty(t)?r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null," 404! Page not Found... You can still Navigate to home "),r.a.createElement(k.a,{to:"/"}," ",r.a.createElement("h3",null,"Go Home "))):r.a.createElement("div",null,r.a.createElement("div",{className:"row fullMovieBanner"},r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("img",{src:t.poster_path,alt:t.title,className:"movieBanner"}),r.a.createElement("h3",{className:"text-white"},"Movies with same genre: ",t.genres[0])),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("h1",{className:"text-red inline"},t.title+"  "),r.a.createElement("h1",{className:"circle text-red inline"},t.vote_average),r.a.createElement("div",{className:"text-white"},r.a.createElement("h3",null,t.tagline),r.a.createElement("h3",null,t.release_date.split("-")[0]),r.a.createElement("h3",null,this.convertMinsToHrsMins(t.runtime)," hrs")),r.a.createElement("div",{className:"row text-white"},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("h4",null,t.overview)),r.a.createElement("div",{className:"col-sm-2"}))),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("button",{onClick:function(){e.showSearch()},className:"btn-danger form-control"},"Search")," "))))):r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null," Loading...Please Wait "))}}]),t}(n.Component));var P=Object(v.b)(function(e){return{movieReducer:e.movieReducer}},function(e){return Object(h.a)({clearMovieData:y},e)})(L),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App row "},r.a.createElement(P,null),r.a.createElement(S,null))}}],[{key:"getGenreData",value:function(e,t){t.clearMovieData(),t.setDisplayMessage("Searching related genre Movies...");var a=A.buildUrl(e,"genres");A.getData(a).then(function(e){return e.data}).then(function(e){return e.map(function(e){return t.addMovieBannerDataGenre(e)})})}},{key:"getDerivedStateFromProps",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.setDisplayMessage("Searching...");var n="http://react-cdp-api.herokuapp.com/movies/"+e.match.params.id;return A.getData(n).then(function(a){e.addMovieBannerData(a),t.getGenreData(a.genres[0],e)}),a}}]),t}(n.Component);var J=Object(v.b)(null,function(e){return Object(h.a)({addMovieBannerDataGenre:D,addMovieBannerData:M,clearMovieData:y,setDisplayMessage:f},e)})(Y);console.log("Search your Favorite Movie");var U=Object(h.c)(H);o.a.render(r.a.createElement(v.a,{store:U},r.a.createElement(I.a,{history:b},r.a.createElement(V.a,null,r.a.createElement(G.a,{path:"/displayMovieDetails/:id",component:J}),r.a.createElement(G.a,{exact:!0,path:"/",component:T}),r.a.createElement(G.a,{path:"/*",component:C})))),document.getElementById("header")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.228b848d.chunk.js.map
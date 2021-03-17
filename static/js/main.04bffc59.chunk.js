(this["webpackJsonpspotify-app"]=this["webpackJsonpspotify-app"]||[]).push([[0],{67:function(e,n,t){},68:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){"use strict";t.r(n);var c,i,a,r,s,o,l,j,d,b,p,x,h,u,O,g,f,m,v,y,_,w,S=t(0),k=t.n(S),I=t(28),E=t.n(I),L=(t(67),t(15)),T=(t(68),t(3)),N=t(4),P=N.a.div(c||(c=Object(T.a)(["\n  display: grid;\n  place-items: center;\n  height: 100vh;\n  background-color: black;\n"]))),z=N.a.img(i||(i=Object(T.a)(["\n  width: 100%;\n  height: auto;\n  max-width: 450px;\n"]))),Y=N.a.a(a||(a=Object(T.a)(["\n  padding: 20px;\n  background-color: #1db954;\n  border-radius: 99px;\n  font-weight: 800;\n  color: white;\n  text-decoration: none;\n  border: none;\n"]))),A="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("6b972af4432c4a06bcecffb05b1a6b97","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),C=t(1),R=function(){return Object(C.jsxs)(P,{children:[Object(C.jsx)(z,{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"Logo"}),Object(C.jsx)(Y,{href:A,children:"LOGIN WI TH SPOTIFY"})]})},U=N.a.div(r||(r=Object(T.a)(["\n  background: #040404;\n  min-width: 230px;\n  padding: 0px 10px;\n  height: 100vh;\n  color: white;\n  flex: 0.2;\n"]))),F=N.a.img(s||(s=Object(T.a)(["\n  margin-right: auto;\n  object-fit: contain;\n  height: 70px;\n  //width: 100%;\n  padding: 10px;\n"]))),M=N.a.div(o||(o=Object(T.a)(["\n  //border-bottom: 2px solid white;\n  //padding-bottom: 10px;\n"]))),B=N.a.h4(l||(l=Object(T.a)(["\n  border-bottom: 1px solid #282828;\n  text-align: left;\n  padding: 10px 0px;\n  margin: 10px auto;\n"]))),D=N.a.div(j||(j=Object(T.a)(["\n  color: grey;\n  height: 40px;\n  cursor: pointer;\n  text-align: left;\n  transition: 200ms color ease-in;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  &:hover {\n    color: white;\n  }\n\n  p,\n  h4 {\n    margin-left: 15px;\n  }\n"]))),H=function(e){var n=e.title,t=e.Icon;return Object(C.jsxs)(D,{children:[t&&Object(C.jsx)(t,{}),t?Object(C.jsx)("h4",{children:n}):Object(C.jsx)("p",{children:n})]})},W=t(42),K=t.n(W),V=t(32),G=t.n(V),J=t(47),q=t.n(J),X=Object(S.createContext)(),Z=function(e){var n=e.reducer,t=e.initialState,c=e.children;return Object(C.jsx)(X.Provider,{value:Object(S.useReducer)(n,t),children:c})},Q=function(){return Object(S.useContext)(X)},$=function(){var e,n=Q(),t=Object(L.a)(n,2),c=t[0].playlists;t[1];return Object(C.jsxs)(U,{children:[Object(C.jsx)(F,{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"Spotify Logo"}),Object(C.jsxs)(M,{children:[Object(C.jsx)(H,{Icon:K.a,title:"Home"}),Object(C.jsx)(H,{Icon:G.a,title:"Search"}),Object(C.jsx)(H,{Icon:q.a,title:"Your Library"})]}),Object(C.jsx)(B,{children:"PLAYLISTS"}),null===c||void 0===c||null===(e=c.items)||void 0===e?void 0:e.map((function(e){return Object(C.jsx)(H,{title:e.name})})),Object(C.jsx)(H,{title:"Hip hop"}),Object(C.jsx)(H,{title:"Rock"}),Object(C.jsx)(H,{title:"Rnb"})]})},ee=N.a.div(d||(d=Object(T.a)(["\n  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));\n  overflow-y: overlay;\n  padding: 30px;\n  height: 100vh;\n  color: white;\n  flex: 0.8;\n"]))),ne=N.a.div(b||(b=Object(T.a)(["\n  display: flex;\n  align-items: flex-end;\n  padding: 10px;\n"]))),te=N.a.img(p||(p=Object(T.a)(["\n  max-width: 192px;\n  height: 20vh;\n  margin: 0px 20px;\n  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);\n  object-fit: contain;\n"]))),ce=N.a.div(x||(x=Object(T.a)(["\n  padding: 10px;\n  text-align: left;\n  flex: 1;\n\n  p {\n    font-weight: bold;\n    font-size: 14px;\n  }\n\n  h2 {\n    font-size: 48px;\n    margin-bottom: 10px;\n  }\n"]))),ie=N.a.div(h||(h=Object(T.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  .MuiSvgIcon-root {\n    margin-right: 20px;\n    cursor: pointer;\n  }\n"]))),ae=N.a.div(u||(u=Object(T.a)(["\n  .MuiSvgIcon-root {\n    font-size: 80px !important;\n    margin: 20px 20px 20px 30px;\n  }\n  .MuiSvgIcon-root:hover {\n    transition: 100ms transform ease-in;\n    transform: scale(1.08);\n  }\n"]))),re=N.a.div(O||(O=Object(T.a)([""]))),se=N.a.div(g||(g=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  align-items: center;\n"]))),oe=N.a.div(f||(f=Object(T.a)(["\n  background-color: white;\n  min-width: 80px;\n  max-width: 200px;\n  color: gray;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  flex: 0.5;\n\n  input {\n    border: none;\n    width: 100%;\n  }\n"]))),le=N.a.div(m||(m=Object(T.a)(["\n  display: flex;\n  align-items: center;\n\n  h4 {\n    margin-left: 10px;\n  }\n"]))),je=t(91),de=function(){var e,n=Q(),t=Object(L.a)(n,2),c=t[0].user;t[1];return Object(C.jsxs)(se,{children:[Object(C.jsxs)(oe,{children:[Object(C.jsx)(G.a,{}),Object(C.jsx)("input",{placeholder:"Search for Artists, Songs",type:"text"})]}),Object(C.jsxs)(le,{children:[Object(C.jsx)(je.a,{src:null===c||void 0===c||null===(e=c.images[0])||void 0===e?void 0:e.url,alt:"User Name"}),Object(C.jsx)("h4",{children:null===c||void 0===c?void 0:c.display_name})]})]})},be=t(48),pe=t.n(be),xe=t(49),he=t.n(xe),ue=t(50),Oe=t.n(ue),ge=N.a.div(v||(v=Object(T.a)(["\n  margin-left: 20px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  z-index: 100;\n  color: white;\n\n  &:hover {\n    cursor: pointer;\n    background-color: black;\n    opacity: 0.8;\n  }\n"]))),fe=N.a.div(y||(y=Object(T.a)(["\n  margin-left: 20px;\n  text-align: left;\n\n  h2 {\n    font-size: 16px;\n  }\n\n  p {\n    font-size: 14px;\n    margin-top: 3px;\n    color: gray;\n  }\n"]))),me=N.a.img(_||(_=Object(T.a)(["\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n"]))),ve=function(e){var n=e.track;return Object(C.jsxs)(ge,{children:[Object(C.jsx)(me,{src:n.album.images[0].url,alt:"song image"}),Object(C.jsxs)(fe,{children:[Object(C.jsx)("h2",{children:n.name}),Object(C.jsxs)("p",{children:[n.artists.map((function(e){return e.name})),n.album.name]})]})]})},ye=function(e){var n=e.spotify,t=Q(),c=Object(L.a)(t,2),i=c[0].discover_weekly;c[1];return Object(C.jsxs)(ee,{children:[Object(C.jsx)(de,{spotify:n}),Object(C.jsxs)(ne,{children:[Object(C.jsx)(te,{src:null===i||void 0===i?void 0:i.images[0].url,alt:"Banner playlist"}),Object(C.jsxs)(ce,{children:[Object(C.jsx)("h4",{children:"PLAYLIST"}),Object(C.jsx)("h2",{children:"Discover Weekly"}),Object(C.jsx)("p",{children:null===i||void 0===i?void 0:i.description})]})]}),Object(C.jsxs)(ie,{children:[Object(C.jsx)(ae,{children:Object(C.jsx)(pe.a,{})}),Object(C.jsx)(he.a,{}),Object(C.jsx)(Oe.a,{})]}),Object(C.jsx)(re,{children:null===i||void 0===i?void 0:i.tracks.items.map((function(e){return Object(C.jsx)(ve,{track:e.track})}))})]})},_e=(t(75),t(53)),we=t.n(_e),Se=t(52),ke=t.n(Se),Ie=t(54),Ee=t.n(Ie),Le=t(51),Te=t.n(Le),Ne=t(55),Pe=t.n(Ne),ze=t(56),Ye=t.n(ze),Ae=t(57),Ce=t.n(Ae),Re=t(89),Ue=t(90),Fe=function(){return Object(C.jsxs)("div",{className:"footer",children:[Object(C.jsxs)("div",{className:"left__wrapper",children:[Object(C.jsx)("img",{className:"footer__albumLogo",src:"https://cdn.arstechnica.net/wp-content/uploads/2021/01/NUVIA_SeriesB-800x451.jpg",alt:""}),Object(C.jsxs)("div",{className:"footer__songIngo",children:[Object(C.jsx)("h4",{children:"Yeah!"}),Object(C.jsx)("p",{children:"Usher"})]})]}),Object(C.jsxs)("div",{className:"center__wrapper",children:[Object(C.jsx)(Te.a,{className:"footer__green"}),Object(C.jsx)(ke.a,{className:"footer__icon"}),Object(C.jsx)(we.a,{fontSize:"large",className:"footer__icon"}),Object(C.jsx)(Ee.a,{className:"footer__songInfo footer__icon"}),Object(C.jsx)(Pe.a,{className:"footer__green"})]}),Object(C.jsx)("div",{className:"right__wrapper",children:Object(C.jsxs)(Re.a,{container:!0,spacing:2,children:[Object(C.jsx)(Re.a,{item:!0,children:Object(C.jsx)(Ye.a,{})}),Object(C.jsx)(Re.a,{item:!0,children:Object(C.jsx)(Ce.a,{})}),Object(C.jsx)(Re.a,{item:!0,xs:!0,children:Object(C.jsx)(Ue.a,{})})]})})]})},Me=N.a.div(w||(w=Object(T.a)(["\n  display: flex;\n"]))),Be=function(e){var n=e.spotify;return Object(C.jsxs)(Me,{children:[Object(C.jsx)($,{}),Object(C.jsx)(ye,{spotify:n}),Object(C.jsx)(Fe,{})]})},De=t(58),He=new(t.n(De).a);var We=function(){var e=Object(S.useState)(null),n=Object(L.a)(e,2),t=n[0],c=n[1],i=Q(),a=Object(L.a)(i,2),r=(a[0].user,a[1]);return Object(S.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,n){var t=n.split("=");return e[t[0]]=decodeURIComponent(t[1]),e}),{});window.location.hash="";var n=e.access_token;n&&(c(n),He.setAccessToken(n),He.getMe().then((function(e){r({type:"SET_USER",user:e})})),He.getUserPlaylists().then((function(e){r({type:"SET_PLAYLISTS",playlists:e})})),He.getPlaylist("2EZGcPOwH4zzI96kbq9niX").then((function(e){return r({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),Object(C.jsx)("div",{className:"App",children:t?Object(C.jsx)(Be,{spotify:He}):Object(C.jsx)(R,{})})},Ke=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,93)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))},Ve=t(16),Ge=function(e,n){switch(console.log(n),n.type){case"SET_USER":return Object(Ve.a)(Object(Ve.a)({},e),{},{user:n.user});case"SET_TOKEN":return Object(Ve.a)(Object(Ve.a)({},e),{},{token:n.token});case"SET_PLAYLISTS":return Object(Ve.a)(Object(Ve.a)({},e),{},{playlists:n.playlists});case"SET_DISCOVER_WEEKLY":return Object(Ve.a)(Object(Ve.a)({},e),{},{discover_weekly:n.discover_weekly});default:return e}};E.a.render(Object(C.jsx)(k.a.StrictMode,{children:Object(C.jsx)(Z,{initialState:{user:null,playlists:[],playing:!1,item:null},reducer:Ge,children:Object(C.jsx)(We,{})})}),document.getElementById("root")),Ke()}},[[76,1,2]]]);
//# sourceMappingURL=main.04bffc59.chunk.js.map
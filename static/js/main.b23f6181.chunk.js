(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a(317)},317:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),i=a.n(r),c=a(71),l=a.n(c),s=(a(139),a(19)),u=a(48),d=a(54),m=a(35),p=a(55),h=a.n(p),f=a(117),g=a.n(f),v=a(118),b=a.n(v),E=a(16),w=a.n(E),y=a(119),C=a.n(y),j=a(120),k=a.n(j),O=a(123),S=a.n(O),x=a(122),N=a.n(x),A=a(121),q=a.n(A),W=a(22),D=a.n(W),G=a(70),I=a.n(G),R=a(124),B=a.n(R),L=a(127),P=a.n(L),z=a(72),T=a.n(z),U=a(125),F=a.n(U),M=a(126),J=a.n(M),K=a(24),V=a.n(K),H=a(49),$=a(50),_=a(52),Q=a(51),X=a(53),Y=a(115),Z=a.n(Y),ee=a(111),te=a.n(ee),ae=a(116),ne=a.n(ae),oe=a(113),re=a.n(oe),ie=a(114),ce=a.n(ie),le=a(112),se=a.n(le),ue=a(107),de=a.n(ue),me=a(109),pe=a.n(me),he=a(110),fe=a.n(he),ge=function(e){function t(){var e,a;Object(H.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(_.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},a.handleClose=function(e,t){"clickaway"!==t&&a.setState({open:!1})},a}return Object(X.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.open;e&&this.setState({open:e})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement(de.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("span",{id:"message-id"},"Salvo com sucesso."),action:[o.a.createElement(pe.a,{key:"close","aria-label":"Close",color:"inherit",className:e.close,onClick:this.handleClose},o.a.createElement(fe.a,null))]}))}}]),t}(o.a.Component),ve=Object(m.withStyles)(function(e){return{close:{padding:e.spacing.unit/2}}})(ge),be=function(e){function t(){var e,a;Object(H.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(_.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,success:!1,input:""},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleChange=function(e){a.setState({input:e.target.value})},a.handleSave=function(){var e=a.props,t=e.firestore,n=e.user,o=a.state.input;t.collection("users").doc(n).update({requestedGift:o}).then(function(){a.setState({open:!1,success:!0})})},a}return Object(X.a)(t,e),Object($.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(D.a,{size:"small",color:"primary",onClick:this.handleClickOpen},"Presente Desejado"),o.a.createElement(te.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},o.a.createElement(se.a,{id:"form-dialog-title"},"Presente Desejado"),o.a.createElement(re.a,null,o.a.createElement(ce.a,null,"Digite a baixo qual \xe9 o presente que voc\xea deseja."),o.a.createElement(Z.a,{autoFocus:!0,margin:"dense",id:"gift",label:"Presente",type:"text",fullWidth:!0,onChange:this.handleChange,value:this.state.input})),o.a.createElement(ne.a,null,o.a.createElement(D.a,{onClick:this.handleClose,color:"secondary"},"Cancelar"),o.a.createElement(D.a,{onClick:this.handleSave,color:"primary"},"Confirmar"))),this.state.success&&o.a.createElement(ve,{open:!0}))}}]),t}(o.a.Component),Ee=Object(s.d)(be),we=function(){var e=window.location.href.split("?"),t=e[e.length-1].split("&").map(function(e){return Object(u.a)({},e.split("=")[0],e.split("=")[1])}).reduce(function(e,t){return Object(d.a)({},e,t)},{}).user;return void 0===t?"null":t},ye=function(e,t){return function(){e.collection("users").get().then(function(a){var n=[];a.forEach(function(e){e.id!==t&&n.push(Object(d.a)({id:e.id},e.data()))});var o,r=n.filter(function(e){return void 0!==e.friend}).map(function(e){return e.friend.path.replace("users/","")}),i=n.filter(function(e){var t=e.id;return-1===r.indexOf(t)});if(i.length>0){var c=i[(o=i.length,Math.floor(Math.random()*o))],l=e.collection("users").doc(t),s=e.collection("users").doc(c.id);l.update({friend:s})}else console.error("Vish mano, deu ruim nos usu\xe1rios disponiveis.")}).catch(function(e){console.log("Error getting documents: ",e)})}},Ce=Object(s.d)(Object(m.withStyles)(function(e){return{root:{flexGrow:1},loading:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},appBar:{backgroundColor:"#7e57c2",alignItems:"center",justifyContent:"center"},card:{margin:"12px 15px"},media:{height:180},listRoot:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},paperRoot:Object(d.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,margin:"12px 15px"}),avatarWaiting:{backgroundColor:"#fff176",color:"#202020"},avatarDone:{backgroundColor:"#aed581",color:"#202020"}}})(function(e){var t=e.classes,a=e.firestore;return o.a.createElement("div",{className:t.root},o.a.createElement(g.a,{position:"static",color:"primary",className:t.appBar},o.a.createElement(b.a,null,o.a.createElement(w.a,{variant:"h6",color:"inherit"},"Amigo Secreto"))),o.a.createElement(C.a,{className:t.card},o.a.createElement(s.b,{path:"users/".concat(we()),render:function(e){var n=e.isLoading,r=e.data;return n?o.a.createElement("div",{className:t.loading},o.a.createElement(h.a,{type:"bars",color:"#000",height:"30%",width:"30%"})):o.a.createElement("div",null,o.a.createElement(k.a,null,o.a.createElement(q.a,{className:t.media,image:"https://www.topgallant-partners.com/wp-content/uploads/2012/05/stormtrooper.jpg",title:"Avatar"}),o.a.createElement(N.a,null,o.a.createElement(w.a,{gutterBottom:!0,variant:"h5",component:"h2"},r.name||"Invalid User"),o.a.createElement(w.a,{variant:"subtitle1",color:"textSecondary"},void 0===r.requestedGift||0===r.requestedGift.length?"Ainda n\xe3o escolheu o que deseja receber.":"Deseja receber ".concat(r.requestedGift,".")),r.friend&&o.a.createElement(s.b,{path:r.friend.path,render:function(e){var a=e.isLoading,n=e.data;return a?o.a.createElement("div",{className:t.loading},o.a.createElement(h.a,{type:"dots",color:"#000",height:"30%",width:"30%"})):o.a.createElement(w.a,{variant:"subtitle1",color:"textSecondary"},"Tirou ",n.name," no sorteio, ",n.name," ",void 0===n.requestedGift||0===n.requestedGift.length?"ainda n\xe3o escolheu o que receber.":"deseja receber ".concat(n.requestedGift,"."),".")}}))),void 0!==r.name&&o.a.createElement(S.a,null,o.a.createElement(Ee,{user:we()}),void 0===r.friend&&o.a.createElement(D.a,{size:"small",color:"secondary",onClick:ye(a,we())},"Sortear Amigo")))}})),o.a.createElement(s.a,{path:"users",sort:"name",render:function(e){var a=e.isLoading,n=e.data;return a?o.a.createElement("div",{className:t.loading},o.a.createElement(h.a,{type:"bars",color:"#000",height:"30%",width:"30%"})):o.a.createElement(V.a,{className:t.paperRoot,elevation:1},o.a.createElement(w.a,{variant:"h5",component:"h3"},"Lista de Participantes"),o.a.createElement(I.a,{className:t.listRoot},n.map(function(e){var a=e.id,n=e.name,r=e.requestedGift,i=e.friend;return o.a.createElement(B.a,{key:a},void 0===i?o.a.createElement(T.a,{className:t.avatarWaiting},o.a.createElement(F.a,null)):o.a.createElement(T.a,{className:t.avatarDone},o.a.createElement(J.a,null)),o.a.createElement(P.a,{primary:n,secondary:r}))})))}}))})),je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ke(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.initializeApp({apiKey:"AIzaSyCnt_hFF7wwAz8iEM8maeuSsVFKCqix6Ng",authDomain:"amigo-secreto-bbe75.firebaseapp.com",databaseURL:"https://amigo-secreto-bbe75.firebaseio.com",projectId:"amigo-secreto-bbe75",storageBucket:"amigo-secreto-bbe75.appspot.com",messagingSenderId:"569745142440"}),i.a.render(o.a.createElement(s.c,{firebase:l.a,useTimestampsInSnapshots:!0},o.a.createElement(Ce,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/simple-friend-giver",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/simple-friend-giver","/service-worker.js");je?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ke(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ke(t,e)})}}()}},[[128,2,1]]]);
//# sourceMappingURL=main.b23f6181.chunk.js.map
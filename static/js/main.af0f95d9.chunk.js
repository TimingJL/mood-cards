(this["webpackJsonpmood-cards"]=this["webpackJsonpmood-cards"]||[]).push([[0],{49:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(7),i=n.n(a),r=(n(49),n(36)),c=n(86),s=n.p+"static/media/taiwan-national-flag.b64ddc98.png",l=n.p+"static/media/amen-boom_01.9c92b1a0.png",d=n.p+"static/media/amen-yellow-outlined.19175e6a.png",u=n.p+"static/media/word-is-best_01.8dc5cb18.png",g=n.p+"static/media/thanks-lord.6778848e.png",h=n.p+"static/media/triple-great.02eb47c5.png",f=n.p+"static/media/i-love-you.f277c8ca.png",b=n.p+"static/media/pink-heart.aeea5fd8.png",m=[{key:"tripleGreat",text:"\u8b9a\u8b9a\u8b9a",imagePath:h,backgroundColor:"#ffffff"},{key:"amen-boom_01",text:"\u963f\u5011_01",imagePath:l,backgroundColor:"#ECC344"},{key:"amen-yellow-outlined",text:"\u963f\u5011_02",imagePath:d,backgroundColor:"#FCDB17"},{key:"word-is-best_01",text:"\u8a71\u8a9e\u6700\u68d2",imagePath:u,backgroundColor:"#69C2C2"},{key:"lord-is-the-best",text:"\u4e3b\u6700\u68d2",imagePath:n.p+"static/media/lord-is-the-best.c2f1da64.png",backgroundColor:"#F2F1F0"},{key:"thanks-lord",text:"\u611f\u8b1d\u4e3b",imagePath:g,backgroundColor:"#ffffff"},{key:"i-love-you",text:"\u6211\u611b\u4f60",imagePath:f,backgroundColor:"#F15268"},{key:"pink-heart",text:"\u611b\u5fc3-\u7c89\u7d05",imagePath:b,backgroundColor:"#000000"},{key:"taiwan-national-flag",text:"\u53f0\u7063\u570b\u65d7",imagePath:s,backgroundColor:"#000000"}],p=n(4),k=Object(c.a)((function(){return{root:function(e){return{background:e.backgroundColor,height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},orientation:{"@media only screen and (orientation: portrait)":{maxHeight:"100%",width:"100%"},"@media only screen and (orientation: landscape)":{maxWidth:"100%",height:"100%"}}}})),j=function(e){var t=e.selectedCardKey,n=m.find((function(e){return e.key===t})),o=k({backgroundColor:n.backgroundColor});return Object(p.jsx)("div",{className:o.root,children:Object(p.jsx)("img",{src:n.imagePath,alt:"",className:o.orientation})})},v=n(40),w=n.n(v),x=n(91),y=n(3),C=n(92),O=n(89),P=n(90),F=n(93),N=Object(c.a)({list:{width:250},image:{width:48,height:"auto",marginRight:8},selected:{background:"#e5f6ff","&:hover":{background:"#e5f6ff"},"&::before":{content:'""',position:"absolute",top:0,left:0,width:4,height:"100%",background:"#3ebeff"}}}),S=function(e){var t=e.isOpen,n=e.selectedCardKey,o=e.handleOnClose,a=e.handleSelectCard,i=N();return Object(p.jsx)(C.a,{anchor:"right",open:t,onClose:o,children:Object(p.jsx)("div",{className:i.list,children:Object(p.jsx)(O.a,{children:m.map((function(e){var t=e.key,o=e.imagePath,r=e.text,c=t===n;return Object(p.jsxs)(P.a,{button:!0,className:Object(y.a)(c&&i.selected),onClick:function(){return a({key:t})},children:[Object(p.jsx)("img",{src:o,alt:"",className:i.image}),Object(p.jsx)(F.a,{primary:r})]},t)}))})})})},W=m[0],B=Object(c.a)((function(e){return{root:{background:"pink",minHeight:"100vh",height:"100%",position:"relative"},appBar:{position:"absolute",left:0,width:"100vw",display:"flex",justifyContent:"flex-end"},iconButton:{margin:"4px 16px",color:"#5c5c5c8a"}}})),_=function(){var e=B(),t=Object(o.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1],c=Object(o.useState)(W.key),s=Object(r.a)(c,2),l=s[0],d=s[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsx)("div",{className:e.appBar,children:Object(p.jsx)(x.a,{"aria-label":"menu",className:e.iconButton,size:"medium",onClick:function(){return i(!0)},children:Object(p.jsx)(w.a,{})})}),Object(p.jsx)(j,{selectedCardKey:l})]}),Object(p.jsx)(S,{isOpen:a,selectedCardKey:l,handleOnClose:function(){return i(!1)},handleSelectCard:function(e){var t=e.key;d(t),i(!1)}})]})},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),i(e),r(e)}))};i.a.render(Object(p.jsx)(_,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mood-cards",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/mood-cards","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),L()}},[[59,1,2]]]);
//# sourceMappingURL=main.af0f95d9.chunk.js.map
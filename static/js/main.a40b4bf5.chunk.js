(this.webpackJsonpreplapp=this.webpackJsonpreplapp||[]).push([[0],{45:function(e,t,n){e.exports=n.p+"static/media/icone-tela-android.0b35598a.jpg"},59:function(e,t,n){e.exports=n(70)},64:function(e,t,n){},65:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),i=(n(64),n(65),n(41)),c=n(23),s=n(108),u=n(112),d=n(103);function m(e){var t=e.copyInfo;e.testez;return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:t||function(){}},"Copiar"))}var p=n(50),f=n(109),v=n(34),b=n(107),g=Object(p.a)({palette:{primary:{main:v.a[500]},secondary:{main:b.a[500]}}}),h=Object(s.a)((function(e){return{root:{},textField:{padding:"0.5%",color:"white"}}}));function E(e){var t=e.answer,n=e.theChange,o=Object(a.useState)(!1),l=Object(c.a)(o,2),i=l[0],s=l[1],d=Object(a.useRef)(null),p=(Object(a.useRef)(null),h());return r.a.createElement(f.a,{theme:g},r.a.createElement("div",{className:p.root},r.a.createElement(u.a,{id:"filled-full-width",label:"Digite o texto aqui",color:"secondary",autoFocus:!0,placeholder:"Digite",ref:d,margin:"normal",InputLabelProps:{shrink:!0,root:"#aaa",focused:"#fff"},InputProps:{className:p.textField},variant:"filled",onChange:n||function(){}}),r.a.createElement(u.a,{id:"filled-full-width",label:"Result",className:p.textField,placeholder:"Digite",margin:"normal",InputLabelProps:{shrink:!0,color:"primary"},InputProps:{className:p.textField},value:t||"",variant:"filled"}),"  ",r.a.createElement("br",null),r.a.createElement(m,{copyInfo:function(){navigator.clipboard.writeText("".concat(t))},testez:function(){console.log(i),s(!i)},style:{cursor:"not-allowed"}})))}var w=n(4),y=(Object(w.a)({root:{"& label.Mui-focused":{color:"green"},"& .MuiInput-underline:after":{borderBottomColor:"green"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"red"},"&:hover fieldset":{borderColor:"yellow"},"&.Mui-focused fieldset":{borderColor:"green"}}}})(E),n(111)),j=n(113),O=n(46),k=n(110),C=n(45),x=n.n(C);var S=Object(a.memo)((function(){return r.a.createElement("div",{className:"mb-3"},r.a.createElement(k.a,{elevation:3},r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h5",component:"span",color:"secondary"},"\xc9 uma ferramenta"),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h6",component:"span",color:"primary"},"que tamb\xe9m \xe9 app"),r.a.createElement("br",null),r.a.createElement("img",{src:x.a,alt:"adicione a sua tela inicial"}),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"body2",component:"span",color:"primary"},"adicione essa p\xe1gina a sua pagina inicial com o Chrome para usar como aplicativo "),r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement(y.a,{variant:"caption",component:"span",color:"#345",width:"2%"},"Gabriel Justino m. Couto"),r.a.createElement("br",null),r.a.createElement("br",null))}));function N(){var e=Object(i.a)(["\n  display: inline-block;\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n  display: block;\n"]);return N=function(){return e},e}var I=function(){var e=Object(a.useState)("______"),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(),i=Object(c.a)(l,2),u=i[0],d=i[1],m=Object(a.useState)(!1),p=Object(c.a)(m,2),f=p[0],v=p[1];O.a.div(N());var b=Object(s.a)({root:{fontSize:"10px"}})(),g=r.a.createElement("div",{className:b.root},r.a.createElement(y.a,{variant:"h4",gutterBottom:!0},"Removedor de Underlines")),h=r.a.createElement("div",null,r.a.createElement(E,{style:{marginTop:"25em"},theChange:function(e){var t=e.target;clearTimeout(u),d(setTimeout((function(){return function(e){try{e=e.replaceAll("_"," "),o(e)}catch(t){f||(v(!0),e.replace(new RegExp("_","g")," k"))}}(t.value)}),1e3))},answer:n}),f),w=r.a.createElement(j.a,{severity:"warning"},"Seu navegador \xe9 muito antigo -- atualize-o");return Object(a.useEffect)((function(){}),[]),r.a.createElement("div",null,g,f?w:r.a.createElement("br",null),h,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S,null))};var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(I,null)))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/replapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/replapp","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()}},[[59,1,2]]]);
//# sourceMappingURL=main.a40b4bf5.chunk.js.map
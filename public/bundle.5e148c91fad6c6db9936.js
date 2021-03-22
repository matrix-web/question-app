(()=>{"use strict";var e,n,r={740:(e,n,r)=>{r.r(n),r.d(n,{default:()=>i});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,"/**\r\n * Body CSS\r\n */\r\n\r\n html,\r\n body {\r\n   height: 100%;\r\n }\r\n \r\n html,\r\n body,\r\n input,\r\n textarea,\r\n button {\r\n   -webkit-font-smoothing: antialiased;\r\n   -moz-osx-font-smoothing: grayscale;\r\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n }\r\n \r\n \r\n /**\r\n  * Sidebar CSS\r\n  */\r\n \r\n #sidebar {\r\n   background-color: #2196f3;\r\n   padding: 15px;\r\n }\r\n \r\n @media (min-width: 768px) {\r\n   #sidebar {\r\n     position: fixed;\r\n     top: 0;\r\n     bottom: 0;\r\n     width: 180px;\r\n     height: 100%;\r\n     padding-top: 30px;\r\n   }\r\n }\r\n \r\n /**\r\n  * Content CSS\r\n  */\r\n@media (min-width: 768px) {\r\n  #content {\r\n    margin-left: 180px;\r\n  }\r\n}\r\n\r\n.author {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.floating-btn {\r\n  position: fixed;\r\n  bottom: 50px;\r\n  right: 50px;\r\n}\r\n\r\n.modal {\r\n  max-width: 600px;\r\n  min-height: 300px;\r\n  margin: 100px auto;\r\n  overflow-y: auto;\r\n  background-color: #fff;\r\n}\r\n\r\n.modal > h1 {\r\n  text-align: center;\r\n}\r\n\r\n.modal .modal-content {\r\n  padding: 1rem;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n\r\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},913:(e,n,r)=>{var t=r(379),o=r.n(t),i=r(740),a=o()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||e.hot.invalidate){var d=i.default.locals;e.hot.accept(740,(n=>{i=r(740),function(e,n,r){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(d,i.default.locals)?(d=i.default.locals,a(i.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),i.default.locals},379:(e,n,r)=>{var t,o=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),i=[];function a(e){for(var n=-1,r=0;r<i.length;r++)if(i[r].identifier===e){n=r;break}return n}function d(e,n){for(var r={},t=[],o=0;o<e.length;o++){var d=e[o],c=n.base?d[0]+n.base:d[0],s=r[c]||0,l="".concat(c," ").concat(s);r[c]=s+1;var u=a(l),f={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:m(f,n),references:1}),t.push(l)}return t}function c(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,h=0;function m(e,n){var r,t,o;if(n.singleton){var i=h++;r=p||(p=c(n)),t=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=c(n),t=f.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=a(r[t]);i[o].references--}for(var c=d(e,n),s=0;s<r.length;s++){var l=a(r[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=c}}}},406:(e,n,r)=>{function t(e){return e.length>=10}function o(e,n){const r=document.createElement("div");r.classList.add("modal");const t=`\n    <h1>${e}</h1>\n    <div class="modal-content">${n}</div>\n  `;r.insertAdjacentHTML("beforeend",t),mui.overlay("on",r)}class i{static create(e){return fetch("https://question-app-fa0db-default-rtdb.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=utf-8"}}).then((e=>e.json())).then((n=>(e.id=n.name,e))).then(a).then(i.renderList)}static renderList(){const e=d(),n=e.length?e.map(c).join(""):'<div class="mui--text-headline">Вы пока ничего не спрашивали</div>',r=document.getElementById("list");r.textContent="",r.insertAdjacentHTML("afterBegin",n)}static fetch(e){return e?fetch(`https://question-app-fa0db-default-rtdb.firebaseio.com/questions.json?auth=${e}`).then((e=>e.json())).then((e=>e?.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((n=>({...e[n],id:n}))):[])):Promise.resolve('<p class="error">У вас нет токена</p>')}static listToHTML(e){return e.length?`<ol>\n          ${e.map((e=>`<li>${e.text}</li>`)).join("")}\n        </ol>`:"<p>Вопросов пока нет</p>"}}function a(e){const n=d();n.push(e),localStorage.setItem("questions",JSON.stringify(n))}function d(){return JSON.parse(localStorage.getItem("questions")||"[]")}function c(e){return`\n    <div class="mui--text-black-54">\n      ${new Date(e.date).toLocaleDateString()}\n      ${new Date(e.date).toLocaleTimeString()}\n    </div>\n    <div>${e.text}</div>\n    <br>\n  `}r(913);const s=document.querySelector("#question-form"),l=document.getElementById("modal-btn"),u=s.querySelector("#question-input"),f=s.querySelector("#submit");function p(e){e.preventDefault();const n=e.target.querySelector("button"),r=e.target.querySelector("#email").value,t=e.target.querySelector("#password").value;n.disabled=!0,function(e,n){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6rf7yZjXpXGU0092EACroYfwxO_e04xA",{method:"POST",body:JSON.stringify({email:e,password:n,returnSecureToken:!0}),headers:{"Content-Type":"application/json; charset=utf-8"}}).then((e=>e.json())).then((e=>e.idToken))}(r,t).then((e=>i.fetch(e))).then(h).then((()=>n.disabled=!1))}function h(e){"string"==typeof e?o("Ошибка!",e):o("Список вопросов",i.listToHTML(e))}window.addEventListener("load",i.renderList),s.addEventListener("submit",(function(e){if(e.preventDefault(),t(u.value)){const e={text:u.value.trim(),date:(new Date).toJSON()};f.disabled=!0,i.create(e).then((()=>{u.value="",u.className="",f.disabled=!1}))}})),l.addEventListener("click",(function(){o("Авторизация",'\n    <form class="mui-form" id="auth-form">\n      <div class="mui-textfield mui-textfield--float-label">\n        <input type="email" id="email" required>\n        <label for="email">Email</label>\n      </div>\n      <div class="mui-textfield mui-textfield--float-label">\n        <input type="password" id="password" required>\n        <label for="password">Пароль</label>\n      </div>\n      <button \n        type="submit" \n        class="mui-btn mui-btn--raised mui-btn--primary"\n      >\n        Войти\n      </button>\n    </form>\n  '),document.getElementById("auth-form").addEventListener("submit",p,{once:!0})})),u.addEventListener("input",(()=>{f.disabled=!t(u.value)})),console.log("App working...")}},t={};function o(e){var n=t[e];if(void 0!==n){if(void 0!==n.error)throw n.error;return n.exports}var i=t[e]={id:e,exports:{}};try{var a={id:e,module:i,factory:r[e],require:o};o.i.forEach((function(e){e(a)})),i=a.module,a.factory.call(i.exports,i,i.exports,a.require)}catch(e){throw i.error=e,e}return i.exports}o.m=r,o.c=t,o.i=[],o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var r in n)o.o(n,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"1efcc3dde4d614fbc2f8",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e={},n="question-app:",o.l=(r,t,i,a)=>{if(e[r])e[r].push(t);else{var d,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var u=s[l];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==n+i){d=u;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",n+i),d.src=r),e[r]=[t];var f=(n,t)=>{d.onerror=d.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),c&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,n,r,t,i={},a=o.c,d=[],c=[],s="idle";function l(e){s=e;for(var n=0;n<c.length;n++)c[n].call(null,e)}function u(e){if(0===n.length)return e();var r=n;return n=[],Promise.all(r).then((function(){return u(e)}))}function f(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return l("check"),o.hmrM().then((function(t){if(!t)return l(m()?"ready":"idle"),null;l("prepare");var i=[];return n=[],r=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,n){return o.hmrC[n](t.c,t.r,t.m,e,r,i),e}),[])).then((function(){return u((function(){return e?h(e):(l("ready"),i)}))}))}))}function p(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var n=r.map((function(n){return n(e)}));r=void 0;var o,i=n.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return l("abort"),Promise.resolve().then((function(){throw i[0]}));l("dispose"),n.forEach((function(e){e.dispose&&e.dispose()})),l("apply");var a=function(e){o||(o=e)},d=[];return n.forEach((function(e){if(e.apply){var n=e.apply(a);if(n)for(var r=0;r<n.length;r++)d.push(n[r])}})),o?(l("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return d.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e})):(l("idle"),Promise.resolve(d))}function m(){if(t)return r||(r=[]),Object.keys(o.hmrI).forEach((function(e){t.forEach((function(n){o.hmrI[e](n,r)}))})),t=void 0,!0}o.hmrD=i,o.i.push((function(h){var m,v,y,b=h.module,g=function(r,t){var o=a[t];if(!o)return r;var i=function(n){if(o.hot.active){if(a[n]){var i=a[n].parents;-1===i.indexOf(t)&&i.push(t)}else d=[t],e=n;-1===o.children.indexOf(n)&&o.children.push(n)}else console.warn("[HMR] unexpected require("+n+") from disposed module "+t),d=[];return r(n)},c=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&"e"!==f&&Object.defineProperty(i,f,c(f));return i.e=function(e){return function(e){switch(s){case"ready":return l("prepare"),n.push(e),u((function(){l("ready")})),e;case"prepare":return n.push(e),e;default:return e}}(r.e(e))},i}(h.require,h.id);b.hot=(m=h.id,v=b,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==m,_requireSelf:function(){d=v.parents.slice(),e=m,o(m)},active:!0,accept:function(e,n,r){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._acceptedDependencies[e[t]]=n||function(){},y._acceptedErrorHandlers[e[t]]=r;else y._acceptedDependencies[e]=n||function(){},y._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._declinedDependencies[e[n]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=y._disposeHandlers.indexOf(e);n>=0&&y._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":r=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,r)})),l("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return s;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var n=c.indexOf(e);n>=0&&c.splice(n,1)},data:i[m]},e=void 0,y),b.parents=d,b.children=[],d=[],h.require=g})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e,n,r,t,i={179:0},a={};function d(e){return new Promise(((n,r)=>{a[e]=n;var t=o.p+o.hu(e),i=new Error;o.l(t,(n=>{if(a[e]){a[e]=void 0;var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,r(i)}}))}))}function c(a){function d(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),a=i.id,d=i.chain,s=o.c[a];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:a};for(var l=0;l<s.parents.length;l++){var u=s.parents[l],f=o.c[u];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:d.concat([u]),moduleId:a,parentId:u};-1===n.indexOf(u)&&(f.hot._acceptedDependencies[a]?(r[u]||(r[u]=[]),c(r[u],[a])):(delete r[u],n.push(u),t.push({chain:d.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function c(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,e=void 0;var s={},l=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(o.o(n,p)){var h,m=n[p],v=!1,y=!1,b=!1,g="";switch((h=m?d(p):{type:"disposed",moduleId:p}).chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":a.onDeclined&&a.onDeclined(h),a.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":a.onDeclined&&a.onDeclined(h),a.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":a.onUnaccepted&&a.onUnaccepted(h),a.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+g));break;case"accepted":a.onAccepted&&a.onAccepted(h),y=!0;break;case"disposed":a.onDisposed&&a.onDisposed(h),b=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(p in u[p]=m,c(l,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,p)&&(s[p]||(s[p]=[]),c(s[p],h.outdatedDependencies[p]));b&&(c(l,[h.moduleId]),u[p]=f)}n=void 0;for(var w,E=[],x=0;x<l.length;x++){var S=l[x],I=o.c[S];I&&I.hot._selfAccepted&&u[S]!==f&&!I.hot._selfInvalidated&&E.push({module:S,require:I.hot._requireSelf,errorHandler:I.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete i[e]})),r=void 0;for(var n,t=l.slice();t.length>0;){var a=t.pop(),d=o.c[a];if(d){var c={},u=d.hot._disposeHandlers;for(x=0;x<u.length;x++)u[x].call(null,c);for(o.hmrD[a]=c,d.hot.active=!1,delete o.c[a],delete s[a],x=0;x<d.children.length;x++){var f=o.c[d.children[x]];f&&(e=f.parents.indexOf(a))>=0&&f.parents.splice(e,1)}}}for(var p in s)if(o.o(s,p)&&(d=o.c[p]))for(w=s[p],x=0;x<w.length;x++)n=w[x],(e=d.children.indexOf(n))>=0&&d.children.splice(e,1)},apply:function(e){for(var n in u)o.o(u,n)&&(o.m[n]=u[n]);for(var r=0;r<t.length;r++)t[r](o);for(var i in s)if(o.o(s,i)){var d=o.c[i];if(d){w=s[i];for(var c=[],f=[],p=[],h=0;h<w.length;h++){var m=w[h],v=d.hot._acceptedDependencies[m],y=d.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),f.push(y),p.push(m)}}for(var b=0;b<c.length;b++)try{c[b].call(null,w)}catch(n){if("function"==typeof f[b])try{f[b](n,{moduleId:i,dependencyId:p[b]})}catch(r){a.onErrored&&a.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[b],error:r,originalError:n}),a.ignoreErrored||(e(r),e(n))}else a.onErrored&&a.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[b],error:n}),a.ignoreErrored||e(n)}}}for(var g=0;g<E.length;g++){var x=E[g],S=x.module;try{x.require(S)}catch(n){if("function"==typeof x.errorHandler)try{x.errorHandler(n,{moduleId:S,module:o.c[S]})}catch(r){a.onErrored&&a.onErrored({type:"self-accept-error-handler-errored",moduleId:S,error:r,originalError:n}),a.ignoreErrored||(e(r),e(n))}else a.onErrored&&a.onErrored({type:"self-accept-errored",moduleId:S,error:n}),a.ignoreErrored||e(n)}}return l}}}self.webpackHotUpdatequestion_app=(e,r,i)=>{for(var d in r)o.o(r,d)&&(n[d]=r[d]);i&&t.push(i),a[e]&&(a[e](),a[e]=void 0)},o.hmrI.jsonp=function(e,i){n||(n={},t=[],r=[],i.push(c)),o.o(n,e)||(n[e]=o.m[e])},o.hmrC.jsonp=function(a,s,l,u,f,p){f.push(c),e={},r=s,n=l.reduce((function(e,n){return e[n]=!1,e}),{}),t=[],a.forEach((function(n){o.o(i,n)&&void 0!==i[n]&&(u.push(d(n)),e[n]=!0)})),o.f&&(o.f.jsonpHmr=function(n,r){e&&!o.o(e,n)&&o.o(i,n)&&void 0!==i[n]&&(r.push(d(n)),e[n]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(406)})();
(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(820),t.b),l=a()(o()),u=s()(d);l.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\n#content {\n    padding: 3rem;\n    width: 100%;\n    min-height: 100vh;\n    background: linear-gradient(\n        rgba(0, 0, 0, 0.6), \n        rgba(0, 0, 0, 0.6)\n      ), url(${u});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.navbar {\n    min-height: 10rem;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-bottom: .2rem solid #ea580c;\n}\n\n.navbar ul {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 3rem;\n    list-style: none;\n}\n\n.navbar ul li {\n    font-size: 2rem;\n    text-decoration: none;\n    color: #fff;\n    text-transform: uppercase;\n    text-shadow: 2px 7px 5px rgba(0,0,0,0.3), \n    0px -4px 10px rgba(27, 22, 22, 0.3);\n    cursor: pointer;\n}\n\n.navbar ul li:hover {\n    text-decoration: underline #ea580c;\n}\n\n.home {\n    margin-top: 4rem;\n    height: 50vh;\n    max-width: 70%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    border-bottom: .2rem solid #ea580c;\n}\n\n#welcome {\n    font-style: italic;\n    color: #ea580c;\n    font-size: 6rem;\n    text-shadow: 2px 7px 5px rgba(0,0,0,0.3), \n    0px -4px 10px rgba(27, 22, 22, 0.3);\n}\n\n.home h1 {\n    font-size: 7rem;\n    color: #fff;\n    text-shadow: 2px 7px 5px rgba(0,0,0,0.3), \n    0px -4px 10px rgba(27, 22, 22, 0.3);\n}\n\n.home p {\n    font-size: 3rem;\n    color: #fff;\n    text-shadow: 2px 7px 5px rgba(0,0,0,0.3), \n    0px -4px 10px rgba(27, 22, 22, 0.3);\n    text-align: center;\n}\n\n.menu,\n.about {\n    margin-top: 4rem;\n    height: 60vh;\n    min-width: 90%;\n    background: rgba(0, 0, 0, 0.6);\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n    gap: 2rem;\n}\n\n.menu .title,\n.about .title {\n    font-size: 6rem;\n    color: #fff;\n    border-bottom: .2rem solid #ea580c;\n    text-transform: uppercase;\n    text-align: center;\n}\n\n.about p {\n    font-size: 2rem;\n    text-align: center;\n    margin-top: 4rem;\n    width: 70%;\n    color: #fff;\n}\n\n.about .contact {\n    width: 95%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    margin-top: 3rem;\n}\n\n.about .info {\n    color: #ea580c;\n    font-size: 1.7rem;\n    text-align: center;\n    margin: 0;\n    padding: 0;\n}\n\n.food {\n    max-width: 60%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    padding-bottom: 2rem;\n    border-bottom: .2rem solid #ea580c;\n}\n\n.food h1 {\n    color: #ea580c;\n    font-size: 3.5rem;\n    text-align: center;\n}\n\n.food p {\n    font-size: 2rem;\n    text-align: center;\n    color: #fff;\n}\n\n.image {\n    width: 30rem;\n    height: 20rem;\n    overflow: hidden;\n}\n\nimg {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: .5rem;\n}\n\n\nfooter {\n    width: 100%;\n    padding: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #333;\n}\n\nfooter p {\n    color: #fff;\n    font-size: 1.5rem;\n}\n\nfooter a {\n    text-decoration: none;\n}\n\nfooter i {\n    color: #ea580c;\n    font-size: 2rem;\n}\n\n@media(max-width: 768px) {\n    html {\n        font-size: 50%;\n    }\n}`,""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},820:(e,n,t)=>{e.exports=t.p+"02e4a74ac6c9e75cfaf9.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("home"),e.appendChild(n);const t=document.createElement("h1");t.setAttribute("id","welcome"),t.textContent="Bienvenidos",n.appendChild(t);const r=document.createElement("h1");r.textContent="Restaurant",n.appendChild(r);const o=document.createElement("p");o.textContent="Siempre lo mejor",n.appendChild(o)},g=t.p+"68abecb00148c296c12c.jpg",x=t.p+"10b3c169a9cee347f3ba.jpg",b=t.p+"e7a482a378a443c0bd3c.jpg",v=t.p+"fb566b6cfda94969d69e.jpg";function y(){const e=document.querySelector("#content"),n=e.children[1];n&&e.removeChild(n)}(function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("navbar"),e.appendChild(n);const t=document.createElement("ul");n.appendChild(t);const r=["Inicio","Menú","Nosotros"];for(let e=0;e<r.length;e++){const n=document.createElement("li");n.textContent=r[e],t.appendChild(n)}t.children[0].setAttribute("id","home"),t.children[1].setAttribute("id","menu"),t.children[2].setAttribute("id","about");const o=document.querySelector("#home"),i=document.querySelector("#menu"),a=document.querySelector("#about");o.addEventListener("click",(()=>{y(),h()})),i.addEventListener("click",(()=>{y(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("menu"),e.appendChild(n);const t=document.createElement("h1");t.classList.add("title"),t.textContent="menú",n.appendChild(t);for(let e=0;e<4;e++){const e=document.createElement("div");e.classList.add("food"),n.appendChild(e)}const r=document.querySelectorAll(".food");r.forEach((e=>{const n=document.createElement("h1");e.appendChild(n);const t=document.createElement("div");t.classList.add("image"),e.appendChild(t),t.appendChild(document.createElement("img"));const r=document.createElement("p");r.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem provident dolore assumenda sequi neque est.",e.appendChild(r)})),r[0].firstChild.textContent="Pollo a la brasa",r[1].firstChild.textContent="Parrilla mixta",r[2].firstChild.textContent="Espagueti",r[3].firstChild.textContent="Paella",r[0].children[1].firstChild.src=g,r[1].children[1].firstChild.src=x,r[2].children[1].firstChild.src=b,r[3].children[1].firstChild.src=v}()})),a.addEventListener("click",(()=>{y(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("about"),e.appendChild(n);const t=document.createElement("h1");t.classList.add("title"),t.textContent="Sobre Nosotros",n.appendChild(t);const r=document.createElement("p");r.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit suscipit quasi aut laborum amet omnis doloribus aliquam ducimus doloremque perspiciatis.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, facere qui id neque rem reprehenderit atque pariatur voluptas distinctio eum. Itaque repellat natus officiis fuga iure commodi aspernatur sed est!",n.appendChild(r);const o=document.createElement("div");o.classList.add("contact"),n.appendChild(o);for(let e=0;e<3;e++){const e=document.createElement("p");e.classList.add("info"),o.appendChild(e)}o.children[0].textContent="Dirección: Av. Lorem ipsum dolor, calle Lorem ipsum dolor",o.children[1].textContent="Teléfono: 0123-4567890",o.children[2].textContent="Correo: restaurant@correo.com"}()}))})(),h()})()})();
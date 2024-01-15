(()=>{"use strict";var e,n,t,i,r,o,a,d,c,l,s,p,u,m,f={426:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(81),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n\n}\n/* #container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n} */\n\n#bioContainer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n    background: linear-gradient(145deg, #0891b2 40%, white 40%);\n}\n\n#bioImgContainer {\n    position: relative;\n    text-align: center;\n    color: white;\n}\n\n#bioImgText {\n    font-size: 4.5em;\n    position: absolute;\n    bottom: 0%;\n    left: 5%;\n}\n\n#bioInfo {\n    display: grid;\n    min-width: 300px;\n    max-width: 600px;\n    grid-template-rows: min-content;\n}\n\n#bioIcons {\n    font-size: 1.5rem;\n    justify-self: end;\n}\n\n#bioInfo {\n    background-color: white;\n    border-style: solid;\n    border-left-width: 0;\n    padding: 1rem;\n}\n\n#projectContainer {\n    margin-top: 20px;\n    margin-left: 20px;\n}\n\n#cardsContainer {\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    grid-auto-rows: min-content;\n    gap: 5rem;\n}\n\n.card {\n    width: 400px;\n    display: grid;\n    grid-template-rows: min-content 1fr 1fr;\n    border-style: solid;\n}\n\n.card img {\n    width: 400px;\n    border-bottom: solid;\n}\n\n.cardHeader {\n    display: flex;\n    justify-content: space-between;\n}\n\n.cardIcons {\n    font-size: 1.5rem;\n}\n",""]);const d=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);i&&a[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var o={},a=[],d=0;d<e.length;d++){var c=e[d],l=i.base?c[0]+i.base:c[0],s=o[l]||0,p="".concat(l," ").concat(s);o[l]=s+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,i);i.byIndex=d,n.splice(d,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var d=t(o[a]);n[d].references--}for(var c=i(e,r),l=0;l<o.length;l++){var s=t(o[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function v(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return f[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),v.nc=void 0,e=v(379),n=v.n(e),t=v(795),i=v.n(t),r=v(569),o=v.n(r),a=v(565),d=v.n(a),c=v(216),l=v.n(c),s=v(589),p=v.n(s),u=v(426),(m={}).styleTagTransform=p(),m.setAttributes=d(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),n()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,function(){let e=document.createElement("div");e.id="bioContainer";let n=document.createElement("div");n.id="bioImgContainer";let t=document.createElement("img");t.id="bioImg",t.src="../src/imgs/portrait640w.jpg";let i=document.createElement("div");i.id="bioImgText",i.innerText="Suzie Williams";let r=document.createElement("div");r.id="bioInfo";let o=document.createElement("h1"),a=document.createElement("h3"),d=document.createElement("div");d.id="bioIcons";let c=document.createElement("i");c.classList.add("devicon-github-original");let l=document.createElement("i");l.classList.add("devicon-linkedin-plain");let s=document.createElement("i");s.classList.add("devicon-facebook-plain"),d.appendChild(c),d.appendChild(l),d.appendChild(s),o.innerHTML="About me",a.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis, magnam ex voluptatibus dolor vel iste sunt doloremque labore fugit obcaecati iure est recusandae error nisi provident, magni culpa eaque!. Saepe fugit totam necessitatibus enim placeat impedit quas debitis vitae. Deleniti animi magnam eos nisi dolores dicta, mollitia quidem odit non amet. ",r.appendChild(o),r.appendChild(a),r.appendChild(d),n.appendChild(t),n.appendChild(i),e.appendChild(n),e.appendChild(r),document.getElementById("container").appendChild(e)}(),function(){let e=document.createElement("div");e.id="projectContainer";let n=document.createElement("h1");n.innerText="My Work";let t=document.createElement("div");t.id="cardsContainer";for(let n=0;n<6;n++){let n=document.createElement("div");n.classList.add("card");let i=document.createElement("img");i.src="../src/imgs/project.jpg",document.createElement("div").classList.add("cardBody");let r=document.createElement("div");r.classList.add("cardHeader");let o=document.createElement("h3");o.innerHTML="Project name";let a=document.createElement("div");a.classList.add("cardIcons");let d=document.createElement("i");d.classList.add("devicon-github-original");let c=document.createElement("i");c.classList.add("devicon-bamboo-original");let l=document.createElement("p");l.classList.add("cardText"),l.innerHTML="Short description of the project. Just a couple of sentences will do",a.appendChild(d),a.appendChild(c),r.appendChild(o),r.appendChild(a),n.appendChild(i),n.appendChild(r),n.appendChild(l),t.appendChild(n),document.getElementById("container").appendChild(e)}e.appendChild(n),e.appendChild(t)}(),function(){let e=document.createElement("div");e.id="footerContainer";let n=document.createElement("img");n.src="../src/imgs/portrait640w.jpg";let t=document.createElement("div");t.id="footerInfo";let i=document.createElement("h1");i.innerText="Contact me";let r=document.createElement("p");r.innerHTML="Please get in touch if you think our work could be mutually beneficial!",footerIcons=document.createElement("div"),t.appendChild(i),t.appendChild(r),t.appendChild(footerIcons),e.appendChild(t),e.appendChild(n),document.getElementById("container").appendChild(e)}()})();
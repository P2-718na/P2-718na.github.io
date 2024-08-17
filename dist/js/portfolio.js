(()=>{var n={578:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(354),i=t.n(o),r=t(314),a=t.n(r)()(i());a.push([n.id,'a {\n  color: gold;\n  background-color: transparent;\n  text-underline: gold;\n}\n\n#container {\n  padding-bottom: 16vh;\n}\n\na:visited {\n  color: darkgoldenrod;\n  background-color: transparent;\n}\n\na:hover {\n  color: goldenrod;\n  background-color: transparent;\n  text-decoration: none;\n}\n\nfooter{\n  display: inline-block;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  font-size: 24px;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 4vw;\n  color: #937018;\n  background-color: rgba(0, 0, 0, .3);\n  width: 90%;\n  border-top: 0px solid #937018;\n  text-align: right;\n}\n\n\n#library {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  padding-right: 4vw;\n  padding-bottom: 12vw;\n}\n\n.box {\n  font-size: 30pt;\n  margin-bottom:4vh;\n}\n.diagonal {\n  transform: rotate(-45deg);\n  display: inline-block;\n  width: 30vw;\n}\n\n\n/* Style the button that is used to open and close the collapsible content */\n.collapsible {\n  background-color: #444;\n  color: whitesmoke;\n  cursor: pointer;\n  padding: 8px;\n  width: 100%;\n  text-align: left;\n  font-size: 16pt;\n  outline: none;\n  border:none;\n  margin-top: 2vh;\n  border-left: 2px solid white;\n  display: flex;\n}\n\n.active:before {\n  content: ">"; /* Unicode character for "minus" sign (-) */\n  height: 100%;\n  animation: down .1s ease-out;\n  animation-fill-mode: forwards;\n  vertical-align: middle;\n}\n\n.collapsible:before {\n  content: ">";\n  font-size: 16pt;\n  color: whitesmoke;\n  float: left;\n  margin-right: 2vw;\n  vertical-align: middle;\n}\n\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n.active, .collapsible:hover {\n  background-color: #222;\n}\n\n/* Style the collapsible content. Note: hidden by default */\n.content {\n  padding: 0 18px;\n  overflow: hidden;\n  background-color: #222;\n  color: whitesmoke;\n  border-left: 2px solid white;\n  display: none;\n  padding-bottom: 18px;\n  flex-direction: row-reverse;\n}\n\n.content {\n  vertical-align: top;\n  font-size: 13pt;\n}\n\n@media (max-aspect-ratio: 3/4)  {\n  .content {\n    font-size: 16pt;\n  }\n  .collapsible {\n    font-size: 18pt;\n  }\n}\n\n\n\n.content img {\n  display: inline-block;\n  width: 30%;\n  margin:18px;\n  object-fit: contain;\n}\n\n.textWithImage {\n  display: inline-block;\n}\n\n@keyframes down {\n  100% {\n    transform:rotate(90deg);\n  }\n}\n\n.item {\n  padding: 0px;\n}\n\n.clamp {\n  max-width: 20cm;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\n.poppins-thin {\n  font-family: "Poppins", sans-serif;\n  font-weight: 100;\n  font-style: normal;\n}\n\n.poppins-extralight {\n  font-family: "Poppins", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n}\n\n.poppins-light {\n  font-family: "Poppins", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.poppins-regular {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.poppins-medium {\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\n.poppins-semibold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-style: normal;\n}\n\n.poppins-bold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.poppins-extrabold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-style: normal;\n}\n\n.poppins-black {\n  font-family: "Poppins", sans-serif;\n  font-weight: 900;\n  font-style: normal;\n}\n\n.poppins-thin-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 100;\n  font-style: italic;\n}\n\n.poppins-extralight-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 200;\n  font-style: italic;\n}\n\n.poppins-light-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 300;\n  font-style: italic;\n}\n\n.poppins-regular-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n}\n\n.poppins-medium-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  font-style: italic;\n}\n\n.poppins-semibold-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-style: italic;\n}\n\n.poppins-bold-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 700;\n  font-style: italic;\n}\n\n.poppins-extrabold-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-style: italic;\n}\n\n.poppins-black-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 900;\n  font-style: italic;\n}\n',"",{version:3,sources:["webpack://./config/common.css"],names:[],mappings:"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",sourcesContent:['a {\n  color: gold;\n  background-color: transparent;\n  text-underline: gold;\n}\n\n#container {\n  padding-bottom: 16vh;\n}\n\na:visited {\n  color: darkgoldenrod;\n  background-color: transparent;\n}\n\na:hover {\n  color: goldenrod;\n  background-color: transparent;\n  text-decoration: none;\n}\n\nfooter{\n  display: inline-block;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  font-size: 24px;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 4vw;\n  color: #937018;\n  background-color: rgba(0, 0, 0, .3);\n  width: 90%;\n  border-top: 0px solid #937018;\n  text-align: right;\n}\n\n\n#library {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  padding-right: 4vw;\n  padding-bottom: 12vw;\n}\n\n.box {\n  font-size: 30pt;\n  margin-bottom:4vh;\n}\n.diagonal {\n  transform: rotate(-45deg);\n  display: inline-block;\n  width: 30vw;\n}\n\n\n/* Style the button that is used to open and close the collapsible content */\n.collapsible {\n  background-color: #444;\n  color: whitesmoke;\n  cursor: pointer;\n  padding: 8px;\n  width: 100%;\n  text-align: left;\n  font-size: 16pt;\n  outline: none;\n  border:none;\n  margin-top: 2vh;\n  border-left: 2px solid white;\n  display: flex;\n}\n\n.active:before {\n  content: ">"; /* Unicode character for "minus" sign (-) */\n  height: 100%;\n  animation: down .1s ease-out;\n  animation-fill-mode: forwards;\n  vertical-align: middle;\n}\n\n.collapsible:before {\n  content: ">";\n  font-size: 16pt;\n  color: whitesmoke;\n  float: left;\n  margin-right: 2vw;\n  vertical-align: middle;\n}\n\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n.active, .collapsible:hover {\n  background-color: #222;\n}\n\n/* Style the collapsible content. Note: hidden by default */\n.content {\n  padding: 0 18px;\n  overflow: hidden;\n  background-color: #222;\n  color: whitesmoke;\n  border-left: 2px solid white;\n  display: none;\n  padding-bottom: 18px;\n  flex-direction: row-reverse;\n}\n\n.content {\n  vertical-align: top;\n  font-size: 13pt;\n}\n\n@media (max-aspect-ratio: 3/4)  {\n  .content {\n    font-size: 16pt;\n  }\n  .collapsible {\n    font-size: 18pt;\n  }\n}\n\n\n\n.content img {\n  display: inline-block;\n  width: 30%;\n  margin:18px;\n  object-fit: contain;\n}\n\n.textWithImage {\n  display: inline-block;\n}\n\n@keyframes down {\n  100% {\n    transform:rotate(90deg);\n  }\n}\n\n.item {\n  padding: 0px;\n}\n\n.clamp {\n  max-width: 20cm;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\n.poppins-thin {\n  font-family: "Poppins", sans-serif;\n  font-weight: 100;\n  font-style: normal;\n}\n\n.poppins-extralight {\n  font-family: "Poppins", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n}\n\n.poppins-light {\n  font-family: "Poppins", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.poppins-regular {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.poppins-medium {\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\n.poppins-semibold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-style: normal;\n}\n\n.poppins-bold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.poppins-extrabold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-style: normal;\n}\n\n.poppins-black {\n  font-family: "Poppins", sans-serif;\n  font-weight: 900;\n  font-style: normal;\n}\n\n.poppins-thin-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 100;\n  font-style: italic;\n}\n\n.poppins-extralight-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 200;\n  font-style: italic;\n}\n\n.poppins-light-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 300;\n  font-style: italic;\n}\n\n.poppins-regular-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n}\n\n.poppins-medium-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  font-style: italic;\n}\n\n.poppins-semibold-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-style: italic;\n}\n\n.poppins-bold-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 700;\n  font-style: italic;\n}\n\n.poppins-extrabold-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-style: italic;\n}\n\n.poppins-black-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 900;\n  font-style: italic;\n}\n'],sourceRoot:""}]);const s=a},968:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(354),i=t.n(o),r=t(314),a=t.n(r)()(i());a.push([n.id,'/* https://github.com/dreampulse/computer-modern-web-font */\nbody {\n  font-family: "Computer Modern Serif", sans-serif;\n  background: black;\n  color: linen;\n  padding-left: 4vw;\n  padding-right: 4vw;\n  overflow: auto;\n\n}\n\n#container {\n  position: relative;\n  padding-right: 30vw;\n}\n\nh1 {\n  margin-block-start: .1em;\n  margin-block-end: .1em;\n}\n\n#splash {\n  color: whitesmoke;\n  font-size: 100pt;\n}\n\n#maintext {\n  color: lightgrey;\n  font-size: 13pt;\n  text-align: justify;\n}\n\n\n@media (max-aspect-ratio: 3/4)  {\n  #container {\n    padding-right: 5vw;\n  }\n  #maintext {\n    font-size: 16pt;\n  }\n}\n',"",{version:3,sources:["webpack://./pages/portfolio/portfolio.css"],names:[],mappings:"AAAA,2DAA2D;AAC3D;EACE,gDAAgD;EAChD,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;;AAEhB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;;AAGA;EACE;IACE,kBAAkB;EACpB;EACA;IACE,eAAe;EACjB;AACF",sourcesContent:['/* https://github.com/dreampulse/computer-modern-web-font */\nbody {\n  font-family: "Computer Modern Serif", sans-serif;\n  background: black;\n  color: linen;\n  padding-left: 4vw;\n  padding-right: 4vw;\n  overflow: auto;\n\n}\n\n#container {\n  position: relative;\n  padding-right: 30vw;\n}\n\nh1 {\n  margin-block-start: .1em;\n  margin-block-end: .1em;\n}\n\n#splash {\n  color: whitesmoke;\n  font-size: 100pt;\n}\n\n#maintext {\n  color: lightgrey;\n  font-size: 13pt;\n  text-align: justify;\n}\n\n\n@media (max-aspect-ratio: 3/4)  {\n  #container {\n    padding-right: 5vw;\n  }\n  #maintext {\n    font-size: 16pt;\n  }\n}\n'],sourceRoot:""}]);const s=a},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var A=0;A<n.length;A++){var p=[].concat(n[A]);o&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},354:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var l=n[s],A=o.base?l[0]+o.base:l[0],p=r[A]||0,c="".concat(A," ").concat(p);r[A]=p+1;var f=t(c),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var u=i(d,o);o.byIndex=s,e.splice(s,0,{identifier:c,updater:u,references:1})}a.push(c)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var l=o(n,i),A=0;A<r.length;A++){var p=t(r[A]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=l}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},284:n=>{"use strict";var e,t=(e=[],function(n,t){return e[n]=t,e.filter(Boolean).join("\n")});function o(n,e,o,i){var r;if(o)r="";else{r="",i.supports&&(r+="@supports (".concat(i.supports,") {")),i.media&&(r+="@media ".concat(i.media," {"));var a=void 0!==i.layer;a&&(r+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),r+=i.css,a&&(r+="}"),i.media&&(r+="}"),i.supports&&(r+="}")}if(n.styleSheet)n.styleSheet.cssText=t(e,r);else{var s=document.createTextNode(r),l=n.childNodes;l[e]&&n.removeChild(l[e]),l.length?n.insertBefore(s,l[e]):n.appendChild(s)}}var i={singleton:null,singletonCounter:0};n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=i.singletonCounter++,t=i.singleton||(i.singleton=n.insertStyleElement(n));return{update:function(n){o(t,e,!1,n)},remove:function(n){o(t,e,!0,n)}}}},514:function(n){var e;"undefined"!=typeof self&&self,e=()=>(()=>{var n={75:function(n){(function(){var e,t,o,i,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?n.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(n.exports=function(){return(e()-r)/1e6},t=process.hrtime,i=(e=function(){var n;return 1e9*(n=t())[0]+n[1]})(),a=1e9*process.uptime(),r=i-a):Date.now?(n.exports=function(){return Date.now()-o},o=Date.now()):(n.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},4087:(n,e,t)=>{for(var o=t(75),i="undefined"==typeof window?t.g:window,r=["moz","webkit"],a="AnimationFrame",s=i["request"+a],l=i["cancel"+a]||i["cancelRequest"+a],A=0;!s&&A<r.length;A++)s=i[r[A]+"Request"+a],l=i[r[A]+"Cancel"+a]||i[r[A]+"CancelRequest"+a];if(!s||!l){var p=0,c=0,f=[];s=function(n){if(0===f.length){var e=o(),t=Math.max(0,16.666666666666668-(e-p));p=t+e,setTimeout((function(){var n=f.slice(0);f.length=0;for(var e=0;e<n.length;e++)if(!n[e].cancelled)try{n[e].callback(p)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(t))}return f.push({handle:++c,callback:n,cancelled:!1}),c},l=function(n){for(var e=0;e<f.length;e++)f[e].handle===n&&(f[e].cancelled=!0)}}n.exports=function(n){return s.call(i,n)},n.exports.cancel=function(){l.apply(i,arguments)},n.exports.polyfill=function(n){n||(n=i),n.requestAnimationFrame=s,n.cancelAnimationFrame=l}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return n[o].call(r.exports,r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var o={};return(()=>{"use strict";t.d(o,{default:()=>k});var n=t(4087),e=t.n(n);const i=function(n){return new RegExp(/<[a-z][\s\S]*>/i).test(n)},r=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var a="TYPE_CHARACTER",s="REMOVE_CHARACTER",l="REMOVE_ALL",A="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",c="CALL_FUNCTION",f="ADD_HTML_TAG_ELEMENT",d="CHANGE_DELETE_SPEED",u="CHANGE_DELAY",m="CHANGE_CURSOR",g="PASTE_STRING",h="HTML_TAG";function E(n){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},E(n)}function C(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?C(Object(t),!0).forEach((function(e){b(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function B(n){return function(n){if(Array.isArray(n))return y(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(n){if("string"==typeof n)return y(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(n,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}function b(n,e,t){return(e=w(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w(n){var e=function(n){if("object"!==E(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!==E(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===E(e)?e:String(e)}const k=function(){function t(o,E){var C=this;if(function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),b(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),b(this,"setupWrapperElement",(function(){C.state.elements.container&&(C.state.elements.wrapper.className=C.options.wrapperClassName,C.state.elements.cursor.className=C.options.cursorClassName,C.state.elements.cursor.innerHTML=C.options.cursor,C.state.elements.container.innerHTML="",C.state.elements.container.appendChild(C.state.elements.wrapper),C.state.elements.container.appendChild(C.state.elements.cursor))})),b(this,"start",(function(){return C.state.eventLoopPaused=!1,C.runEventLoop(),C})),b(this,"pause",(function(){return C.state.eventLoopPaused=!0,C})),b(this,"stop",(function(){return C.state.eventLoop&&((0,n.cancel)(C.state.eventLoop),C.state.eventLoop=null),C})),b(this,"pauseFor",(function(n){return C.addEventToQueue(p,{ms:n}),C})),b(this,"typeOutAllStrings",(function(){return"string"==typeof C.options.strings?(C.typeString(C.options.strings).pauseFor(C.options.pauseFor),C):(C.options.strings.forEach((function(n){C.typeString(n).pauseFor(C.options.pauseFor).deleteAll(C.options.deleteSpeed)})),C)})),b(this,"typeString",(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(i(n))return C.typeOutHTMLString(n,e);if(n){var t=(C.options||{}).stringSplitter,o="function"==typeof t?t(n):n.split("");C.typeCharacters(o,e)}return C})),b(this,"pasteString",(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return i(n)?C.typeOutHTMLString(n,e,!0):(n&&C.addEventToQueue(g,{character:n,node:e}),C)})),b(this,"typeOutHTMLString",(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2?arguments[2]:void 0,o=function(n){var e=document.createElement("div");return e.innerHTML=n,e.childNodes}(n);if(o.length>0)for(var i=0;i<o.length;i++){var r=o[i],a=r.innerHTML;r&&3!==r.nodeType?(r.innerHTML="",C.addEventToQueue(f,{node:r,parentNode:e}),t?C.pasteString(a,r):C.typeString(a,r)):r.textContent&&(t?C.pasteString(r.textContent,e):C.typeString(r.textContent,e))}return C})),b(this,"deleteAll",(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return C.addEventToQueue(l,{speed:n}),C})),b(this,"changeDeleteSpeed",(function(n){if(!n)throw new Error("Must provide new delete speed");return C.addEventToQueue(d,{speed:n}),C})),b(this,"changeDelay",(function(n){if(!n)throw new Error("Must provide new delay");return C.addEventToQueue(u,{delay:n}),C})),b(this,"changeCursor",(function(n){if(!n)throw new Error("Must provide new cursor");return C.addEventToQueue(m,{cursor:n}),C})),b(this,"deleteChars",(function(n){if(!n)throw new Error("Must provide amount of characters to delete");for(var e=0;e<n;e++)C.addEventToQueue(s);return C})),b(this,"callFunction",(function(n,e){if(!n||"function"!=typeof n)throw new Error("Callback must be a function");return C.addEventToQueue(c,{cb:n,thisArg:e}),C})),b(this,"typeCharacters",(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach((function(n){C.addEventToQueue(a,{character:n,node:e})})),C})),b(this,"removeCharacters",(function(n){if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach((function(){C.addEventToQueue(s)})),C})),b(this,"addEventToQueue",(function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return C.addEventToStateProperty(n,e,t,"eventQueue")})),b(this,"addReverseCalledEvent",(function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return C.options.loop?C.addEventToStateProperty(n,e,t,"reverseCalledEvents"):C})),b(this,"addEventToStateProperty",(function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3?arguments[3]:void 0,i={eventName:n,eventArgs:e||{}};return C.state[o]=t?[i].concat(B(C.state[o])):[].concat(B(C.state[o]),[i]),C})),b(this,"runEventLoop",(function(){C.state.lastFrameTime||(C.state.lastFrameTime=Date.now());var n=Date.now(),t=n-C.state.lastFrameTime;if(!C.state.eventQueue.length){if(!C.options.loop)return;C.state.eventQueue=B(C.state.calledEvents),C.state.calledEvents=[],C.options=v({},C.state.initialOptions)}if(C.state.eventLoop=e()(C.runEventLoop),!C.state.eventLoopPaused){if(C.state.pauseUntil){if(n<C.state.pauseUntil)return;C.state.pauseUntil=null}var o,i=B(C.state.eventQueue),E=i.shift();if(!(t<=(o=E.eventName===A||E.eventName===s?"natural"===C.options.deleteSpeed?r(40,80):C.options.deleteSpeed:"natural"===C.options.delay?r(120,160):C.options.delay))){var y=E.eventName,b=E.eventArgs;switch(C.logInDevMode({currentEvent:E,state:C.state,delay:o}),y){case g:case a:var w=b.character,k=b.node,x=document.createTextNode(w),T=x;C.options.onCreateTextNode&&"function"==typeof C.options.onCreateTextNode&&(T=C.options.onCreateTextNode(w,x)),T&&(k?k.appendChild(T):C.state.elements.wrapper.appendChild(T)),C.state.visibleNodes=[].concat(B(C.state.visibleNodes),[{type:"TEXT_NODE",character:w,node:T}]);break;case s:i.unshift({eventName:A,eventArgs:{removingCharacterNode:!0}});break;case p:var S=E.eventArgs.ms;C.state.pauseUntil=Date.now()+parseInt(S);break;case c:var P=E.eventArgs,N=P.cb,j=P.thisArg;N.call(j,{elements:C.state.elements});break;case f:var O=E.eventArgs,_=O.node,D=O.parentNode;D?D.appendChild(_):C.state.elements.wrapper.appendChild(_),C.state.visibleNodes=[].concat(B(C.state.visibleNodes),[{type:h,node:_,parentNode:D||C.state.elements.wrapper}]);break;case l:var I=C.state.visibleNodes,L=b.speed,M=[];L&&M.push({eventName:d,eventArgs:{speed:L,temp:!0}});for(var R=0,z=I.length;R<z;R++)M.push({eventName:A,eventArgs:{removingCharacterNode:!1}});L&&M.push({eventName:d,eventArgs:{speed:C.options.deleteSpeed,temp:!0}}),i.unshift.apply(i,M);break;case A:var W=E.eventArgs.removingCharacterNode;if(C.state.visibleNodes.length){var F=C.state.visibleNodes.pop(),H=F.type,q=F.node,Q=F.character;C.options.onRemoveNode&&"function"==typeof C.options.onRemoveNode&&C.options.onRemoveNode({node:q,character:Q}),q&&q.parentNode.removeChild(q),H===h&&W&&i.unshift({eventName:A,eventArgs:{}})}break;case d:C.options.deleteSpeed=E.eventArgs.speed;break;case u:C.options.delay=E.eventArgs.delay;break;case m:C.options.cursor=E.eventArgs.cursor,C.state.elements.cursor.innerHTML=E.eventArgs.cursor}C.options.loop&&(E.eventName===A||E.eventArgs&&E.eventArgs.temp||(C.state.calledEvents=[].concat(B(C.state.calledEvents),[E]))),C.state.eventQueue=i,C.state.lastFrameTime=n}}})),o)if("string"==typeof o){var y=document.querySelector(o);if(!y)throw new Error("Could not find container element");this.state.elements.container=y}else this.state.elements.container=o;E&&(this.options=v(v({},this.options),E)),this.state.initialOptions=v({},this.options),this.init()}var o,E;return o=t,(E=[{key:"init",value:function(){var n;this.setupWrapperElement(),this.addEventToQueue(m,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((n=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(n),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(n){this.options.devMode&&console.log(n)}}])&&function(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,w(o.key),o)}}(o.prototype,E),Object.defineProperty(o,"prototype",{writable:!1}),t}()})(),o.default})(),n.exports=e()},774:n=>{"use strict";n.exports=JSON.parse('{"back":{"en":"Go back","it":"Torna indietro","order":0},"whoami":{"en":"Who am I?","it":"Chi sono?","order":0},"services":{"en":"What can I do?","it":"Cosa posso fare?","order":1},"story":{"en":"See my story","it":"Guarda la mia storia","order":3},"cv":{"en":"Download my CV","it":"Scarica il mio CV","order":2},"download":{"en":"Download","it":"Scarica","order":99},"portfolio":{"en":"Portfolio","it":"Portfolio","order":4},"abstract":{"en":"Abstract:","it":"Sommario:","order":99}}')}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),o=t(284),i=t.n(o),r=t(659),a=t.n(r),s=t(56),l=t.n(s),A=t(540),p=t.n(A),c=t(968),f={};f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),e()(c.A,f),c.A&&c.A.locals&&c.A.locals;var d=t(578),u={};u.setAttributes=l(),u.insert=a().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=p(),e()(d.A,u),d.A&&d.A.locals&&d.A.locals;const m=t(514),g=navigator.language||navigator.userLanguage,h=t(774),E=new m("#splash",{autoStart:!1,cursor:"_",delay:50}),C=document.getElementsByClassName("collapsible");Array.from(C).forEach((n=>{n.onclick=function(){this.classList.toggle("active");const n=this.nextElementSibling;n.style.display="flex"!==n.style.display?"flex":"none"}})),window.onload=()=>{const n=document.getElementsByClassName("diagonal"),e=document.getElementsByClassName("work");Array.from(n).forEach((n=>{n.innerText=h[n.innerText]["it-IT"===g?"it":"en"]})),Array.from(e).forEach((n=>{n.innerText=h[n.innerText]["it-IT"===g?"it":"en"]})),document.getElementById("maintext").innerHTML="it-IT"===g?"In questa pagina puoi dare un'occhiata ad alcuni progetti che ho svolto per l'universit&agrave;.\n  Clicca su un progetto qui sotto per avere pi&ugrave informazioni!":"On this page you can take a look at some projects I have done for university.\n  Click on a project below for more information!",document.getElementById("github").innerText="it-IT"===g?"La maggior parte dei progetti a cui sto lavorando si trovano sul mio GitHub.\n  Non tutte le repo sono tenute in ordine; ne vale comunque la pena di dare un'occiata.":"Most of the projects I am working on are available on my GitHub.\n  Not every repo is tidied up, but I think it is still worth it to have a look.",E.typeString("Portfolio").start()}})()})();
//# sourceMappingURL=portfolio.js.map
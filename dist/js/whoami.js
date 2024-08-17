(()=>{var e={578:(e,n,t)=>{"use strict";t.d(n,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([e.id,'/* https://github.com/dreampulse/computer-modern-web-font */\nbody {\n  background: black;\n  color: black;\n  padding-left: 4vw;\n  padding-right: 4vw;\n  overflow: auto;\n}\n\na {\n  color: gold;\n  background-color: transparent;\n  text-underline: gold;\n}\n\n#container {\n  padding-bottom: 16vh;\n}\n\na:visited {\n  color: darkgoldenrod;\n  background-color: transparent;\n}\n\na:hover {\n  color: goldenrod;\n  background-color: transparent;\n  text-decoration: none;\n}\n\nfooter{\n  display: inline-block;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  font-size: 24px;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 4vw;\n  color: #937018;\n  background-color: rgba(0, 0, 0, .3);\n  width: 90%;\n  border-top: 0px solid #937018;\n  text-align: right;\n}\n\n\n#library {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  padding-right: 4vw;\n  padding-bottom: 12vw;\n}\n\n.box {\n  font-size: 30pt;\n  margin-bottom:4vh;\n}\n.diagonal {\n  transform: rotate(-45deg);\n  display: inline-block;\n  width: 30vw;\n}\n\n\n/* Style the button that is used to open and close the collapsible content */\n.collapsible {\n  background-color: #444;\n  color: whitesmoke;\n  cursor: pointer;\n  padding: 8px;\n  width: 100%;\n  text-align: left;\n  font-size: 16pt;\n  outline: none;\n  border:none;\n  margin-top: 2vh;\n  border-left: 2px solid white;\n}\n\n.active:before {\n  content: ">"; /* Unicode character for "minus" sign (-) */\n  height: 100%;\n  animation: down .1s ease-out;\n  animation-fill-mode: forwards;\n  vertical-align: middle;\n}\n\n.collapsible:before {\n  content: ">";\n  font-size: 16pt;\n  color: whitesmoke;\n  float: left;\n  margin-right: 2vw;\n  vertical-align: middle;\n}\n\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n.active, .collapsible:hover {\n  background-color: #222;\n}\n\n/* Style the collapsible content. Note: hidden by default */\n.content {\n  padding: 0 18px;\n  overflow: hidden;\n  background-color: #222;\n  color: whitesmoke;\n  border-left: 2px solid white;\n  display: none;\n  padding-bottom: 18px;\n  flex-direction: row-reverse;\n}\n\n.content {\n  vertical-align: top;\n  font-size: 13pt;\n}\n\n@media (max-aspect-ratio: 3/4)  {\n  .content {\n    font-size: 16pt;\n  }\n  .collapsible {\n    font-size: 18pt;\n  }\n}\n\n\n\n.content img {\n  display: inline-block;\n  width: 30%;\n  margin:18px;\n  object-fit: contain;\n}\n\n.textWithImage {\n  display: inline-block;\n}\n\n@keyframes down {\n  100% {\n    transform:rotate(90deg);\n  }\n}\n\n.item {\n  padding: 0px;\n}\n\n.clamp {\n  max-width: 20cm;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\n.poppins-thin {\n  font-family: "Poppins", sans-serif;\n  font-weight: 100;\n  font-style: normal;\n}\n\n.poppins-extralight {\n  font-family: "Poppins", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n}\n\n.poppins-light {\n  font-family: "Poppins", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.poppins-regular {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.poppins-medium {\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\n.poppins-semibold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-style: normal;\n}\n\n.poppins-bold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.poppins-extrabold {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-style: normal;\n}\n\n.poppins-black {\n  font-family: "Poppins", sans-serif;\n  font-weight: 900;\n  font-style: normal;\n}\n\n.poppins-thin-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 100;\n  font-style: italic;\n}\n\n.poppins-extralight-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 200;\n  font-style: italic;\n}\n\n.poppins-light-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 300;\n  font-style: italic;\n}\n\n.poppins-regular-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n}\n\n.poppins-medium-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  font-style: italic;\n}\n\n.poppins-semibold-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-style: italic;\n}\n\n.poppins-bold-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 700;\n  font-style: italic;\n}\n\n.poppins-extrabold-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 800;\n  font-style: italic;\n}\n\n.poppins-black-italic {\n  font-family: "Poppins", sans-serif;\n  font-weight: 900;\n  font-style: italic;\n}\n',""]);const s=a},856:(e,n,t)=>{"use strict";t.d(n,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([e.id,"\n#container {\n  position: relative;\n  padding-right: 30vw;\n}\n\nh1 {\n  margin-block-start: .1em;\n  margin-block-end: .1em;\n}\n\n#splash {\n  color: whitesmoke;\n  font-size: 100pt;\n}\n\n#maintext {\n  color: lightgrey;\n  font-size: 13pt;\n  text-align: justify;\n}\n\n#me {\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  width: 40vw;\n  z-index:-1;\n}\n\n@media (max-aspect-ratio: 4/3) {\n  #me {\n    width: unset;\n    height: 70vh;\n  }\n  #maintext {\n    text-align: left;\n    font-size: 16pt;\n  }\n}\n\n.gradient {\n  background: linear-gradient(to bottom, rgba(255,0,0,0) 0%,rgba(255,255,255,0.65) 100%); /* W3C */\n}\n",""]);const s=a},314:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],p=i[c]||0,u="".concat(c," ").concat(p);i[c]=p+1;var d=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=r(f,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var l=o(e,r),c=0;c<i.length;c++){var p=t(i[c]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=l}}},659:e=>{"use strict";var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},284:e=>{"use strict";var n,t=(n=[],function(e,t){return n[e]=t,n.filter(Boolean).join("\n")});function o(e,n,o,r){var i;if(o)i="";else{i="",r.supports&&(i+="@supports (".concat(r.supports,") {")),r.media&&(i+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(i+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),i+=r.css,a&&(i+="}"),r.media&&(i+="}"),r.supports&&(i+="}")}if(e.styleSheet)e.styleSheet.cssText=t(n,i);else{var s=document.createTextNode(i),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(s,l[n]):e.appendChild(s)}}var r={singleton:null,singletonCounter:0};e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.singletonCounter++,t=r.singleton||(r.singleton=e.insertStyleElement(e));return{update:function(e){o(t,n,!1,e)},remove:function(e){o(t,n,!0,e)}}}},514:function(e){var n;"undefined"!=typeof self&&self,n=()=>(()=>{var e={75:function(e){(function(){var n,t,o,r,i,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(n()-i)/1e6},t=process.hrtime,r=(n=function(){var e;return 1e9*(e=t())[0]+e[1]})(),a=1e9*process.uptime(),i=r-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},4087:(e,n,t)=>{for(var o=t(75),r="undefined"==typeof window?t.g:window,i=["moz","webkit"],a="AnimationFrame",s=r["request"+a],l=r["cancel"+a]||r["cancelRequest"+a],c=0;!s&&c<i.length;c++)s=r[i[c]+"Request"+a],l=r[i[c]+"Cancel"+a]||r[i[c]+"CancelRequest"+a];if(!s||!l){var p=0,u=0,d=[];s=function(e){if(0===d.length){var n=o(),t=Math.max(0,16.666666666666668-(n-p));p=t+n,setTimeout((function(){var e=d.slice(0);d.length=0;for(var n=0;n<e.length;n++)if(!e[n].cancelled)try{e[n].callback(p)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(t))}return d.push({handle:++u,callback:e,cancelled:!1}),u},l=function(e){for(var n=0;n<d.length;n++)d[n].handle===e&&(d[n].cancelled=!0)}}e.exports=function(e){return s.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=s,e.cancelAnimationFrame=l}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var o={};return(()=>{"use strict";t.d(o,{default:()=>A});var e=t(4087),n=t.n(e);const r=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};var a="TYPE_CHARACTER",s="REMOVE_CHARACTER",l="REMOVE_ALL",c="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",u="CALL_FUNCTION",d="ADD_HTML_TAG_ELEMENT",f="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",v="CHANGE_CURSOR",h="PASTE_STRING",g="HTML_TAG";function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function x(e,n,t){return(n=S(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e){var n=function(e){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!==y(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(n)?n:String(n)}const A=function(){function t(o,y){var b=this;if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),x(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),x(this,"setupWrapperElement",(function(){b.state.elements.container&&(b.state.elements.wrapper.className=b.options.wrapperClassName,b.state.elements.cursor.className=b.options.cursorClassName,b.state.elements.cursor.innerHTML=b.options.cursor,b.state.elements.container.innerHTML="",b.state.elements.container.appendChild(b.state.elements.wrapper),b.state.elements.container.appendChild(b.state.elements.cursor))})),x(this,"start",(function(){return b.state.eventLoopPaused=!1,b.runEventLoop(),b})),x(this,"pause",(function(){return b.state.eventLoopPaused=!0,b})),x(this,"stop",(function(){return b.state.eventLoop&&((0,e.cancel)(b.state.eventLoop),b.state.eventLoop=null),b})),x(this,"pauseFor",(function(e){return b.addEventToQueue(p,{ms:e}),b})),x(this,"typeOutAllStrings",(function(){return"string"==typeof b.options.strings?(b.typeString(b.options.strings).pauseFor(b.options.pauseFor),b):(b.options.strings.forEach((function(e){b.typeString(e).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed)})),b)})),x(this,"typeString",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(r(e))return b.typeOutHTMLString(e,n);if(e){var t=(b.options||{}).stringSplitter,o="function"==typeof t?t(e):e.split("");b.typeCharacters(o,n)}return b})),x(this,"pasteString",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r(e)?b.typeOutHTMLString(e,n,!0):(e&&b.addEventToQueue(h,{character:e,node:n}),b)})),x(this,"typeOutHTMLString",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2?arguments[2]:void 0,o=function(e){var n=document.createElement("div");return n.innerHTML=e,n.childNodes}(e);if(o.length>0)for(var r=0;r<o.length;r++){var i=o[r],a=i.innerHTML;i&&3!==i.nodeType?(i.innerHTML="",b.addEventToQueue(d,{node:i,parentNode:n}),t?b.pasteString(a,i):b.typeString(a,i)):i.textContent&&(t?b.pasteString(i.textContent,n):b.typeString(i.textContent,n))}return b})),x(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return b.addEventToQueue(l,{speed:e}),b})),x(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return b.addEventToQueue(f,{speed:e}),b})),x(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return b.addEventToQueue(m,{delay:e}),b})),x(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return b.addEventToQueue(v,{cursor:e}),b})),x(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var n=0;n<e;n++)b.addEventToQueue(s);return b})),x(this,"callFunction",(function(e,n){if(!e||"function"!=typeof e)throw new Error("Callback must be a function");return b.addEventToQueue(u,{cb:e,thisArg:n}),b})),x(this,"typeCharacters",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){b.addEventToQueue(a,{character:e,node:n})})),b})),x(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){b.addEventToQueue(s)})),b})),x(this,"addEventToQueue",(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return b.addEventToStateProperty(e,n,t,"eventQueue")})),x(this,"addReverseCalledEvent",(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return b.options.loop?b.addEventToStateProperty(e,n,t,"reverseCalledEvents"):b})),x(this,"addEventToStateProperty",(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3?arguments[3]:void 0,r={eventName:e,eventArgs:n||{}};return b.state[o]=t?[r].concat(E(b.state[o])):[].concat(E(b.state[o]),[r]),b})),x(this,"runEventLoop",(function(){b.state.lastFrameTime||(b.state.lastFrameTime=Date.now());var e=Date.now(),t=e-b.state.lastFrameTime;if(!b.state.eventQueue.length){if(!b.options.loop)return;b.state.eventQueue=E(b.state.calledEvents),b.state.calledEvents=[],b.options=w({},b.state.initialOptions)}if(b.state.eventLoop=n()(b.runEventLoop),!b.state.eventLoopPaused){if(b.state.pauseUntil){if(e<b.state.pauseUntil)return;b.state.pauseUntil=null}var o,r=E(b.state.eventQueue),y=r.shift();if(!(t<=(o=y.eventName===c||y.eventName===s?"natural"===b.options.deleteSpeed?i(40,80):b.options.deleteSpeed:"natural"===b.options.delay?i(120,160):b.options.delay))){var T=y.eventName,x=y.eventArgs;switch(b.logInDevMode({currentEvent:y,state:b.state,delay:o}),T){case h:case a:var S=x.character,A=x.node,C=document.createTextNode(S),k=C;b.options.onCreateTextNode&&"function"==typeof b.options.onCreateTextNode&&(k=b.options.onCreateTextNode(S,C)),k&&(A?A.appendChild(k):b.state.elements.wrapper.appendChild(k)),b.state.visibleNodes=[].concat(E(b.state.visibleNodes),[{type:"TEXT_NODE",character:S,node:k}]);break;case s:r.unshift({eventName:c,eventArgs:{removingCharacterNode:!0}});break;case p:var P=y.eventArgs.ms;b.state.pauseUntil=Date.now()+parseInt(P);break;case u:var N=y.eventArgs,_=N.cb,O=N.thisArg;_.call(O,{elements:b.state.elements});break;case d:var I=y.eventArgs,L=I.node,M=I.parentNode;M?M.appendChild(L):b.state.elements.wrapper.appendChild(L),b.state.visibleNodes=[].concat(E(b.state.visibleNodes),[{type:g,node:L,parentNode:M||b.state.elements.wrapper}]);break;case l:var D=b.state.visibleNodes,j=x.speed,R=[];j&&R.push({eventName:f,eventArgs:{speed:j,temp:!0}});for(var F=0,H=D.length;F<H;F++)R.push({eventName:c,eventArgs:{removingCharacterNode:!1}});j&&R.push({eventName:f,eventArgs:{speed:b.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,R);break;case c:var Q=y.eventArgs.removingCharacterNode;if(b.state.visibleNodes.length){var z=b.state.visibleNodes.pop(),U=z.type,q=z.node,W=z.character;b.options.onRemoveNode&&"function"==typeof b.options.onRemoveNode&&b.options.onRemoveNode({node:q,character:W}),q&&q.parentNode.removeChild(q),U===g&&Q&&r.unshift({eventName:c,eventArgs:{}})}break;case f:b.options.deleteSpeed=y.eventArgs.speed;break;case m:b.options.delay=y.eventArgs.delay;break;case v:b.options.cursor=y.eventArgs.cursor,b.state.elements.cursor.innerHTML=y.eventArgs.cursor}b.options.loop&&(y.eventName===c||y.eventArgs&&y.eventArgs.temp||(b.state.calledEvents=[].concat(E(b.state.calledEvents),[y]))),b.state.eventQueue=r,b.state.lastFrameTime=e}}})),o)if("string"==typeof o){var T=document.querySelector(o);if(!T)throw new Error("Could not find container element");this.state.elements.container=T}else this.state.elements.container=o;y&&(this.options=w(w({},this.options),y)),this.state.initialOptions=w({},this.options),this.init()}var o,y;return o=t,(y=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(v,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&function(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,S(o.key),o)}}(o.prototype,y),Object.defineProperty(o,"prototype",{writable:!1}),t}()})(),o.default})(),e.exports=n()},774:e=>{"use strict";e.exports=JSON.parse('{"back":{"en":"Go back","it":"Torna indietro","order":0},"whoami":{"en":"Who am I?","it":"Chi sono?","order":0},"services":{"en":"What can I do?","it":"Cosa posso fare?","order":1},"story":{"en":"See my story","it":"Guarda la mia storia","order":3},"cv":{"en":"Download my CV","it":"Scarica il mio CV","order":2},"download":{"en":"Download","it":"Scarica","order":99},"portfolio":{"en":"Portfolio","it":"Portfolio","order":4},"abstract":{"en":"Abstract:","it":"Sommario:","order":99}}')}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";var e=t(72),n=t.n(e),o=t(284),r=t.n(o),i=t(659),a=t.n(i),s=t(56),l=t.n(s),c=t(540),p=t.n(c),u=t(856),d={};d.setAttributes=l(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=p(),n()(u.A,d),u.A&&u.A.locals&&u.A.locals;var f=t(578),m={};m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;const v=t(514),h=navigator.language||navigator.userLanguage,g=t(774);window.onload=()=>{document.getElementById("library");const e=document.getElementsByClassName("diagonal");Array.from(e).forEach((e=>{e.innerText=g[e.innerText]["it-IT"===h?"it":"en"]})),new v("#splash",{strings:["it-IT"===h?"Chi sono?":"Who am I?"],autoStart:!0,cursor:"_",delay:50,pauseFor:999999}),document.getElementById("maintext").innerHTML="it-IT"===h?"\nPiacere, sono Matteo. Sono uno studente magistrale di Fisica all'Universit&agrave; di Bologna (ma ora sono in Erasmus alla Sorbona di Parigi). Oltre a fare fisica, so programmare e so pilotare droni. Ho un po' di esperienza nella modellazione tecnica 3D e nella stampa 3D (se devi stampare dei modelli, chiamami!).\n\nInsomma, so fare un po' di tutto. Se vuoi farti un'idea migliore, puoi guardare il mio curriculum e il mio portfolio, sempre su questo sito. Se vuoi parlare con me, puoi scrivermi su uno dei social qua sotto.\n":"\nHi, I'm Matteo. I am a master's student of Physics at the University of Bologna\n(but now I'm on Erasmus at Sorbonne in Paris). In addition to physics, I know how to code and I am a drone pilot.\nI have some experience in technical 3D modeling and 3D printing (if you need to print some models, call me!).\n\nIn short, I can do a bit of everything. If you want to get a better idea, you can look at my CV and my portfolio on this website.\nIf you want to talk to me, you can write to me on one of the social networks below.\n"}})()})();
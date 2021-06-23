(self.webpackChunknodify_docs=self.webpackChunknodify_docs||[]).push([[4128],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},762:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a={id:"introduction",title:" ",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:" ",description:"\x3c!--",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/nodify/docs/",editUrl:"https://github.com/miroiu/nodify/edit/docs/docs/introduction.md",version:"current",sidebar_label:"Introduction",frontMatter:{id:"introduction",title:" ",sidebar_label:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/nodify/docs/getting-started/installation"}},s=[{value:"What is Nodify?",id:"what-is-nodify",children:[]},{value:"What to expect",id:"what-to-expect",children:[]},{value:"Why use Nodify?",id:"why-use-nodify",children:[]}],d={toc:s};function l(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ExampleInteraction",src:n(4710).Z})),(0,i.kt)("h2",{id:"what-is-nodify"},"What is Nodify?"),(0,i.kt)("p",null,"Nodify is a WPF node-based ",(0,i.kt)("a",{parentName:"p",href:"components/editor"},"editor control")," featuring a collection of useful components like ",(0,i.kt)("a",{parentName:"p",href:"components/nodes"},"nodes"),", ",(0,i.kt)("a",{parentName:"p",href:"components/connections"},"connections")," and ",(0,i.kt)("a",{parentName:"p",href:"components/connectors"},"connectors")," aiming to simplify the process of building node based tools."),(0,i.kt)("p",null,"It is mainly inspired by Unreal Engine's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/ProgrammingAndScripting/Blueprints/index.html"},"Blueprints Visual Scripting")," system, but focusing only on the user interface and user interaction part."),(0,i.kt)("p",null,"Unlike other node-based editors, Nodify can be embedded in any WPF application."),(0,i.kt)("h2",{id:"what-to-expect"},"What to expect"),(0,i.kt)("p",null,"Nodify itself is not an application, nor does it provide any business logic. It offers an editor component that you can embed in your own application, enabling you to focus on the business logic."),(0,i.kt)("p",null,"Nodify provides the UI logic like having an infinite area where you can place and move nodes around, select and drag groups of nodes, connect and disconnect nodes or connectors, zoom, automatically move the screen when dragging a node or a wire near the edge and much more."),(0,i.kt)("p",null,"You will have to write your own viewmodels."),(0,i.kt)("h2",{id:"why-use-nodify"},"Why use Nodify?"),(0,i.kt)("p",null,"It was built with love \u2764\ufe0f and it's free!"),(0,i.kt)("p",null,"Nodify is feature-rich and optimized for interaction with hundreds of nodes at once."),(0,i.kt)("p",null,"It is built to work with MVVM, meaning you can reuse the viewmodels if you plan to write your own node editor component from scratch."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/miroiu/nodify/tree/master/Examples"},(0,i.kt)("strong",{parentName:"a"},"example applications"))," and their source code."))))}l.isMDXComponent=!0},4710:function(e,t,n){"use strict";t.Z=n.p+"assets/images/editor-interaction-6132c0a827d07085c151ac6955ef1716.gif"}}]);
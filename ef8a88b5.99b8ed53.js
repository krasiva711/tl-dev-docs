(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{580:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),c=(n(0),n(620)),o={layout:"blockchain",title:"Trustlines Blockchain Nodes",image:"assets/images/tlbc.jpg"},i={unversionedId:"nodes",id:"nodes",isDocsHomePage:!1,title:"Trustlines Blockchain Nodes",description:"Public Nodes",source:"@site/blockchain/nodes.md",slug:"/nodes",permalink:"/blockchain/nodes",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/blockchain/nodes.md",version:"current",sidebar:"Blockchain",previous:{title:"Trustlines Blockchain",permalink:"/blockchain/tlbc"},next:{title:"Deployed contracts",permalink:"/blockchain/deployed_contracts"}},l=[{value:"Public Nodes",id:"public-nodes",children:[{value:"Trustlines Blockchain",id:"trustlines-blockchain",children:[]},{value:"Laika testnet",id:"laika-testnet",children:[]}]},{value:"Running a node locally",id:"running-a-node-locally",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"public-nodes"},"Public Nodes"),Object(c.b)("p",null,"Anyone can use these public RPC endpoints to connect to the Trustlines Blockchain and/or to the Laika testnet."),Object(c.b)("h3",{id:"trustlines-blockchain"},"Trustlines Blockchain"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://tlbc.rpc.anyblock.tools"}),"https://tlbc.rpc.anyblock.tools"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"wss://ws.tlbc.rpc.anyblock.tools"))),Object(c.b)("h3",{id:"laika-testnet"},"Laika testnet"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://laika.rpc.anyblock.tools"}),"https://laika.rpc.anyblock.tools"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"wss://ws.laika.rpc.anyblock.tools")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://access.laika.trustlines.foundation"}),"https://access.laika.trustlines.foundation")))),Object(c.b)("h2",{id:"running-a-node-locally"},"Running a node locally"),Object(c.b)("p",null,"See the recommended ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"tlbc#setup-with-the-quickstart-script"}),"Setup With the Quickstart Script")," or ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"tlbc#setup-with-docker"}),"Setup With Docker")," sections of the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"tlbc"}),"Blockchain Overview")," for more information about running a node locally."))}p.isMDXComponent=!0},620:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
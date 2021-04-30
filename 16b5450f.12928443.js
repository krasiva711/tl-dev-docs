(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(682)),c={title:"Usage"},l={unversionedId:"deploy_tools/usage",id:"version-1.3.0/deploy_tools/usage",isDocsHomePage:!1,title:"Usage",description:"Use tl-deploy --help to find out about the relevant commands:",source:"@site/contracts_versioned_docs/version-1.3.0/deploy_tools/usage.md",slug:"/deploy_tools/usage",permalink:"/contracts/1.3.0/deploy_tools/usage",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/contracts_versioned_docs/version-1.3.0/deploy_tools/usage.md",version:"1.3.0",sidebar:"version-1.3.0/Contracts",previous:{title:"Installation",permalink:"/contracts/1.3.0/deploy_tools/installation"}},i=[{value:"Deploy a Currency Network",id:"deploy-a-currency-network",children:[]},{value:"Deploy an Exchange",id:"deploy-an-exchange",children:[]},{value:"Deploy Identity Contracts",id:"deploy-identity-contracts",children:[{value:"Identity Implementation",id:"identity-implementation",children:[]},{value:"Proxy Factory",id:"proxy-factory",children:[]}]}],p={rightToc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"tl-deploy --help")," to find out about the relevant commands:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Usage: tl-deploy [OPTIONS] COMMAND [ARGS]...\n\n  Commandline tool to deploy the Trustlines contracts\n\nOptions:\n  --version  Prints the version of the software\n  --help     Show this message and exit.\n\nCommands:\n  currencynetwork          Deploy a currency network contract.\n  exchange                 Deploy an exchange contract.\n  identity-implementation  Deploy an identity implementation contract.\n  identity-proxy-factory   Deploy an identity proxy factory.\n  test                     Deploy contracts for testing.\n")),Object(a.b)("p",null,"To get help about a specific command use ",Object(a.b)("inlineCode",{parentName:"p"},"tl-deploy COMMAND --help"),"."),Object(a.b)("h2",{id:"deploy-a-currency-network"},"Deploy a Currency Network"),Object(a.b)("p",null,"A currency network contract handles all trustlines with the same denomination.\nIt allows for transfers between the users of this network."),Object(a.b)("p",null,"You can deploy a currency network with the name ",Object(a.b)("inlineCode",{parentName:"p"},"Testcoin")," and symbol ",Object(a.b)("inlineCode",{parentName:"p"},"TST")," by using the command"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tl-deploy currencynetwork Testcoin TST\n")),Object(a.b)("p",null,"To find out more about the possible options, use"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tl-deploy currencynetwork --help\n")),Object(a.b)("p",null,"The mandatory arguments are the ",Object(a.b)("inlineCode",{parentName:"p"},"NAME")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"SYMBOL")," of the network.\nAll other parameters are optional as they have either default values or are not needed in some cases."),Object(a.b)("h2",{id:"deploy-an-exchange"},"Deploy an Exchange"),Object(a.b)("p",null,"An exchange allows users of different currency networks to exchange 1. trustlines currencies,\n2. trustlines currency for ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md"}),"ERC 20")," tokens\nand 3. trustlines currency for wrapped Ether.\nThis exchange is an extension to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/0xProject"}),"0x protocol"),",\nadding support for Trustlines currencies."),Object(a.b)("p",null,"You can deploy an exchange with"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tl-deploy exchange\n")),Object(a.b)("p",null,"To get further information, use"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tl-deploy exchange --help\n")),Object(a.b)("p",null,"The address of this exchange can be used as input for the ",Object(a.b)("inlineCode",{parentName:"p"},"--exchange-contract")," option when creating a currency network."),Object(a.b)("h2",{id:"deploy-identity-contracts"},"Deploy Identity Contracts"),Object(a.b)("p",null,"We use identity proxy contracts to enable the use of meta-transactions.\nThrough that, new users can directly interact with the deployed currency network contracts\nwithout the need of coins to pay for transaction fees.\nTherefore two contracts need to be deployed."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Implementation of the identity contract"),Object(a.b)("li",{parentName:"ol"},"Identity proxy factory contract")),Object(a.b)("h3",{id:"identity-implementation"},"Identity Implementation"),Object(a.b)("p",null,"This contract is the implementation of an identity contract.\nWe need to deploy it to set the implementation of deployed identity proxies."),Object(a.b)("p",null,"Run"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tl-deploy identity-implementation\n")),Object(a.b)("p",null,"To get further information, run"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tl-deploy identity-implementation --help\n")),Object(a.b)("h3",{id:"proxy-factory"},"Proxy Factory"),Object(a.b)("p",null,"The proxy factory contract is used to create identity proxies, where the implementation need to be set."),Object(a.b)("p",null,"Run"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tl-deploy identity-proxy-factory\n")),Object(a.b)("p",null,"Same as above you can get further information on the usage by running"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tl-deploy identity-proxy-factory --help\n")))}s.isMDXComponent=!0},682:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,y=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(y,l(l({ref:t},p),{},{components:n})):o.a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
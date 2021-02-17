(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(658)),o={id:"contributing",title:"Contributing"},l={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"We appreciate all help! Depending on your knowledge you can help bye",source:"@site/relay/contributing.md",slug:"/contributing",permalink:"/relay/next/contributing",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay/contributing.md",version:"current",sidebar:"Relay",previous:{title:"Introduction",permalink:"/relay/next/introduction"},next:{title:"Run relay via docker-compose",permalink:"/relay/next/getting_started/docker"}},c=[{value:"Open an Issue",id:"open-an-issue",children:[{value:"Report a Bug",id:"report-a-bug",children:[]},{value:"Request a Feature",id:"request-a-feature",children:[]}]},{value:"Open a Pull Request",id:"open-a-pull-request",children:[{value:"Before Starting",id:"before-starting",children:[]},{value:"To Include",id:"to-include",children:[]}]},{value:"Changelog",id:"changelog",children:[]},{value:"Commit Messages",id:"commit-messages",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We appreciate all help! Depending on your knowledge you can help bye\nspreading the word, helping with documentation, reporting issues or even contributing to the source code."),Object(i.b)("p",null,"Feel free to checkout the code, play around with it and run the tests.\nBefore making a change, please first discuss the change via opening an issue on this\nrepository. If you just need some small question answered, you can also reach out to\nus via our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitter.im/trustlines/community"}),"gitter chat"),"."),Object(i.b)("h2",{id:"open-an-issue"},"Open an Issue"),Object(i.b)("p",null,"To request a feature or report a bug, please open an issue on the issue tracker in github."),Object(i.b)("h3",{id:"report-a-bug"},"Report a Bug"),Object(i.b)("p",null,"Please include a short description of the problem, including what you expected to happen and what did happen instead.\nPlease also include the version of the relay you were using, your operating system and the used configuration."),Object(i.b)("h3",{id:"request-a-feature"},"Request a Feature"),Object(i.b)("p",null,"Please include a description of what you would like to see implemented and an explanation of why you believe this would\nbe a good addition."),Object(i.b)("h2",{id:"open-a-pull-request"},"Open a Pull Request"),Object(i.b)("h3",{id:"before-starting"},"Before Starting"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Follow the Getting started guides to setup your development environment."),Object(i.b)("li",{parentName:"ul"},"Ensure that you can run the tests and that they pass. The tests can be run from the root with\n",Object(i.b)("inlineCode",{parentName:"li"},"./pytest tests")),Object(i.b)("li",{parentName:"ul"},"Ensure that you can run the end2end tests. You can find them in the\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/trustlines-protocol/end2end"}),"end2end repo"),":\nFirst build the docker image locally from the root of this repo with\n",Object(i.b)("inlineCode",{parentName:"li"},"docker build -t <tag-name> ."),"\nThen follow the instructions of the end2end repository to run the tests with that image.")),Object(i.b)("h3",{id:"to-include"},"To Include"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For a bug fix:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add a test that makes the bug explicit, and make sure that the test fails"),Object(i.b)("li",{parentName:"ul"},"Fix the bug, so that the test passes"))),Object(i.b)("li",{parentName:"ul"},"For a new feature:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add a test, that demonstrate the new feature. Consider also adding the new functionality\ntogether with an end2end test to the\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/trustlines-protocol/clientlib"}),"clientlib")," if necessary."),Object(i.b)("li",{parentName:"ul"},"Add or update related documentation if necessary."))),Object(i.b)("li",{parentName:"ul"},"Add an entry to the unreleased section of the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/trustlines-protocol/relay/blob/master/CHANGELOG.rst"}),"changelog"),"."),Object(i.b)("li",{parentName:"ul"},"Format your code changes with black. If you setup pre-commit, this will happen automatically on commit\n",Object(i.b)("inlineCode",{parentName:"li"},"black setup.py tests src")),Object(i.b)("li",{parentName:"ul"},"Check your code with ",Object(i.b)("inlineCode",{parentName:"li"},"flake8")," and ",Object(i.b)("inlineCode",{parentName:"li"},"mypy"),". If you setup pre-commit, this will happen automatically on commit.")),Object(i.b)("h2",{id:"changelog"},"Changelog"),Object(i.b)("p",null,"We loosely follow ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://keepachangelog.com/en/0.3.0/"}),"keep a changelog"),".\nAdd a new entry for every version with version number and release date.\nAll changes should start and should be grouped by one of the following keywords:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add: For new features that were added."),Object(i.b)("li",{parentName:"ul"},"Change: For changes in existing functionality."),Object(i.b)("li",{parentName:"ul"},"Deprecate: For already released features which will be removed."),Object(i.b)("li",{parentName:"ul"},"Remove: For removed features."),Object(i.b)("li",{parentName:"ul"},"Fix: For bug fixes."),Object(i.b)("li",{parentName:"ul"},"Security: For security relevant changes.\nPlease also add the marker ",Object(i.b)("inlineCode",{parentName:"li"},"BREAKING")," in case of a breaking change.\nFor the non released changes we keep an unreleased section on top.")),Object(i.b)("h2",{id:"commit-messages"},"Commit Messages"),Object(i.b)("p",null,"We loosely follow ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://chris.beams.io/posts/git-commit/"}),"How to write a git commit message"),"\nPlease fulfill at least these important criteria."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a subject line that summarizes what was done",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Limit the subject to 50 characters"),Object(i.b)("li",{parentName:"ul"},"Separate the subject from the body with a blank line"),Object(i.b)("li",{parentName:"ul"},"Capitalize the subject line"),Object(i.b)("li",{parentName:"ul"},"Use the imperative mood"),Object(i.b)("li",{parentName:"ul"},"Do not end the subject with a period."))),Object(i.b)("li",{parentName:"ul"},"Add a body if necessary to describe what was changed and why this change was necessary.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Wrap the body at 72 characters."),Object(i.b)("li",{parentName:"ul"},"Feel free to link resources via absolute link or issues via ",Object(i.b)("inlineCode",{parentName:"li"},"#<number>")," wherever necessary\nat the end.")))),Object(i.b)("p",null,"Sometimes a good chosen subject line is enough, but please think about if it is really obvious why this change is necessary\nor if some explanation would help."))}s.isMDXComponent=!0},658:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,h=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(h,l(l({ref:t},u),{},{components:n})):r.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
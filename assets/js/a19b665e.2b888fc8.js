"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[505],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35305:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Development install"},s=void 0,c={unversionedId:"development",id:"development",isDocsHomePage:!1,title:"Development install",description:"This guide explains how to install covfee for development. This is for usage patterns not supported by the normal install, like modifying the backend or making changes to the frontend that go beyond a custom task. A good understanding of Javascript is recommended.",source:"@site/docs/development.mdx",sourceDirName:".",slug:"/development",permalink:"/covfee/docs/development",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/development.mdx",version:"current",frontMatter:{title:"Development install"},sidebar:"docs",previous:{title:"Continuous Keypoint",permalink:"/covfee/docs/tasks/continuous_keypoint"},next:{title:"Developing custom tasks",permalink:"/covfee/docs/custom_task"}},p=[{value:"Setup",id:"setup",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide explains how to install covfee for development. This is for usage patterns not supported by the normal install, like modifying the backend or making changes to the frontend that go beyond a custom task. A good understanding of Javascript is recommended."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"The development environment makes use of a webpack development server for a more comfortable experience, including hot-reloading. This guide will get you to run covfee in development mode for one of the sample projects:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install version 12.x of ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"node.js"),". Make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," command is available in your terminal.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone this repository and install the python packege with pip, in editable mode. This allows that the changes to the source code immediately affect all the local installations of the package."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone git@github.com:josedvq/covfee.git\ncd covfee\npython3 -m pip install -e .\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create an app database. We will use one of the samples for now:")),(0,a.kt)("p",null,"cd samples/basic\nmkcovfee json --fpath basic.covfee.json"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Fire up webpack:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"webpack_fb\n")),(0,a.kt)("p",null,"In development mode, webpack serves the front-end code of covfee. That will include the Javascript code of your custom task. Webpack is configured for hot reloading meaning the results will refresh in your browser whenever you make changes to the code. Javascript errors may appear in this terminal or in the browser."),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"In another terminal, start the flask server in dev mode:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"covfee-dev\n")),(0,a.kt)("p",null,"You can now open the HIT link as explained in the main ",(0,a.kt)("a",{parentName:"p",href:"../README.md"},"README")),(0,a.kt)("p",null,"And that's it. The next section explains how to code a custom task in Javascript."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[3056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Routes",s={unversionedId:"code-base-works/routes",id:"code-base-works/routes",title:"Routes",description:"Location",source:"@site/docs/code-base-works/routes.md",sourceDirName:"code-base-works",slug:"/code-base-works/routes",permalink:"/dashboard/code-base-works/routes",draft:!1,tags:[],version:"current",lastUpdatedAt:1678730504,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Kubernetes Resources Data Load Optimizations",permalink:"/dashboard/code-base-works/kubernetes-resources-data-load"},next:{title:"Middleware",permalink:"/dashboard/code-base-works/middleware"}},c={},l=[{value:"Location",id:"location",level:2},{value:"Notes",id:"notes",level:2},{value:"Pattern",id:"pattern",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"routes"},"Routes"),(0,o.kt)("h2",{id:"location"},"Location"),(0,o.kt)("p",null,"The core dashboard routes are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/nuxt/router.js"),"."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"This file was generated by nuxt and will soon be redefined by hand. It's safe to add new routes to this file."),(0,o.kt)("h2",{id:"pattern"},"Pattern"),(0,o.kt)("p",null,"First instantiate a page component at the top of the file. Then define a new route at the bottom of the file by giving the page component a unique path and name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const about = () => interopDefault(import(\'../pages/about.vue\'))\n...\n{\n    path: "/about",\n    component: about,\n    name: "about"\n}\n...\n')))}p.isMDXComponent=!0}}]);
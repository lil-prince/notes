"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,v=u["".concat(c,".").concat(b)]||u[b]||d[b]||l;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={layout:"post",title:"HIVE\u4e2d\u5e38\u89c1\u7684\u5c0f\u6587\u4ef6\u5408\u5e76\u65b9\u6cd5",description:"hive\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5e94\u5c3d\u91cf\u907f\u514d\u4ea7\u751f\u5c0f\u6587\u4ef6",categories:["bigdata"],tags:["hive"]},o=void 0,i={permalink:"/notes/blog/2019/09/02/hive-small-file",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2019-09-02-hive-small-file.md",source:"@site/blog/2019-09-02-hive-small-file.md",title:"HIVE\u4e2d\u5e38\u89c1\u7684\u5c0f\u6587\u4ef6\u5408\u5e76\u65b9\u6cd5",description:"hive\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5e94\u5c3d\u91cf\u907f\u514d\u4ea7\u751f\u5c0f\u6587\u4ef6",date:"2019-09-02T00:00:00.000Z",formattedDate:"2019\u5e749\u67082\u65e5",tags:[{label:"hive",permalink:"/notes/blog/tags/hive"}],readingTime:.79,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"HIVE\u4e2d\u5e38\u89c1\u7684\u5c0f\u6587\u4ef6\u5408\u5e76\u65b9\u6cd5",description:"hive\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5e94\u5c3d\u91cf\u907f\u514d\u4ea7\u751f\u5c0f\u6587\u4ef6",categories:["bigdata"],tags:["hive"]},prevItem:{title:"shell style guide",permalink:"/notes/blog/2020/01/03/shell-standards"},nextItem:{title:"\u7cfb\u7edf\u4e2d\u7684\u968f\u673a\u6570\u548c\u71b5\u503c",permalink:"/notes/blog/2019/05/12/random-and-entropy-in-centos7"}},c={authorsImageUrls:[]},s=[{value:"hive\u7684\u6587\u4ef6\u4ea7\u751f\u8fc7\u7a0b",id:"hive\u7684\u6587\u4ef6\u4ea7\u751f\u8fc7\u7a0b",level:2},{value:"\u5c0f\u6587\u4ef6\u592a\u591a\u7684\u5f71\u54cd",id:"\u5c0f\u6587\u4ef6\u592a\u591a\u7684\u5f71\u54cd",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f1a\u4ea7\u751f\u5c0f\u6587\u4ef6",id:"\u4e3a\u4ec0\u4e48\u4f1a\u4ea7\u751f\u5c0f\u6587\u4ef6",level:2},{value:"\u5982\u4f55\u5904\u7406\u5c0f\u6587\u4ef6",id:"\u5982\u4f55\u5904\u7406\u5c0f\u6587\u4ef6",level:2},{value:"case 1",id:"case-1",level:3},{value:"case 2",id:"case-2",level:3},{value:"case 3",id:"case-3",level:3},{value:"case 4",id:"case-4",level:3},{value:"case 5",id:"case-5",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ecb\u7ecdhive\u5c0f\u6587\u4ef6\u5e38\u89c1\u5904\u7406\u65b9\u6cd5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,a.kt)("h2",{id:"hive\u7684\u6587\u4ef6\u4ea7\u751f\u8fc7\u7a0b"},"hive\u7684\u6587\u4ef6\u4ea7\u751f\u8fc7\u7a0b"),(0,a.kt)("h2",{id:"\u5c0f\u6587\u4ef6\u592a\u591a\u7684\u5f71\u54cd"},"\u5c0f\u6587\u4ef6\u592a\u591a\u7684\u5f71\u54cd"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f1a\u4ea7\u751f\u5c0f\u6587\u4ef6"},"\u4e3a\u4ec0\u4e48\u4f1a\u4ea7\u751f\u5c0f\u6587\u4ef6"),(0,a.kt)("h2",{id:"\u5982\u4f55\u5904\u7406\u5c0f\u6587\u4ef6"},"\u5982\u4f55\u5904\u7406\u5c0f\u6587\u4ef6"),(0,a.kt)("h3",{id:"case-1"},"case 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INSERT OVERWRITE TABLE tb1\n    SELECT * FROM tb2\nORDER BY 1;\nALTER TABLE tb2 RENAME TO b_tb2;\nALTER TABLE tb1 RENAME TO tb2;\n\n")),(0,a.kt)("h3",{id:"case-2"},"case 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INSERT TABLE tb1\nSELECT c1, c2 FROM (\n    SELECT c1, c2\n    FROM tb2\n    WHERE xxx\n      AND xxx\n) t\nORDER BY c1, c2;\n")),(0,a.kt)("h3",{id:"case-3"},"case 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT c1\nFROM  (\n    xxx\n) t\nGROUP BY x;\n")),(0,a.kt)("h3",{id:"case-4"},"case 4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INSERT OVERWRITE TABLE tb1\nSELECT\n    xxx\nFROM\n    xxx\n    WHERE\n        xxx) t\ndistribute by rand();\n")),(0,a.kt)("h3",{id:"case-5"},"case 5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INSERT TABLE tb1\nSELECT c1,c2\nFROM tb2\nWHERE xxx\nsort by c1;\n")))}u.isMDXComponent=!0}}]);
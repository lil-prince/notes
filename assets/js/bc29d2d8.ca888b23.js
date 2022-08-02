"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1269],{3905:(e,t,s)=>{s.d(t,{Zo:()=>o,kt:()=>u});var n=s(7294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)s=l[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)s=l[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},o=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var s=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),m=d(s),u=i,v=m["".concat(c,".").concat(u)]||m[u]||p[u]||l;return s?n.createElement(v,a(a({ref:t},o),{},{components:s})):n.createElement(v,a({ref:t},o))}));function u(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=s.length,a=new Array(l);a[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var d=2;d<l;d++)a[d]=s[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},1802:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=s(7462),i=(s(7294),s(3905));const l={layout:"post",title:"Systemd\u57fa\u672c\u4f7f\u7528\u4ecb\u7ecd",description:"",categories:["system"],tags:["systemd"]},a=void 0,r={permalink:"/notes/blog/2014/04/08/systemd-basic-usage",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2014-04-08-systemd-basic-usage.md",source:"@site/blog/2014-04-08-systemd-basic-usage.md",title:"Systemd\u57fa\u672c\u4f7f\u7528\u4ecb\u7ecd",description:"",date:"2014-04-08T00:00:00.000Z",formattedDate:"April 8, 2014",tags:[{label:"systemd",permalink:"/notes/blog/tags/systemd"}],readingTime:14.615,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Systemd\u57fa\u672c\u4f7f\u7528\u4ecb\u7ecd",description:"",categories:["system"],tags:["systemd"]},prevItem:{title:"shell\u811a\u672ccoding style\u603b\u7ed3",permalink:"/notes/blog/2014/05/23/bash-shell-coding-style"},nextItem:{title:"\u4f7f\u7528fpm2\u6765\u7ba1\u7406ssh\u5bc6\u7801",permalink:"/notes/blog/2013/11/12/use-fpm2-to-manage-password"}},c={authorsImageUrls:[]},d=[{value:"\u5173\u4e8ePID 1",id:"\u5173\u4e8epid-1",level:2},{value:"init\u7684\u8d23\u4efb",id:"init\u7684\u8d23\u4efb",level:2},{value:"\u540e\u8d77\u4e4b\u79c0",id:"\u540e\u8d77\u4e4b\u79c0",level:2},{value:"systemd\u7ba1\u7406\u5165\u95e8",id:"systemd\u7ba1\u7406\u5165\u95e8",level:2},{value:"1  \u5982\u4f55\u68c0\u67e5\u542f\u52a8\u9879",id:"1--\u5982\u4f55\u68c0\u67e5\u542f\u52a8\u9879",level:3},{value:"2 \u627e\u51fa\u6bcf\u9879\u670d\u52a1\u6240\u5bf9\u5e94\u7684\u8fdb\u7a0bid",id:"2-\u627e\u51fa\u6bcf\u9879\u670d\u52a1\u6240\u5bf9\u5e94\u7684\u8fdb\u7a0bid",level:3},{value:"3 \u5982\u4f55\u6b63\u786e\u7684\u6740\u6b7b\u670d\u52a1\u8fdb\u7a0b",id:"3-\u5982\u4f55\u6b63\u786e\u7684\u6740\u6b7b\u670d\u52a1\u8fdb\u7a0b",level:3},{value:"4 \u5982\u4f55\u505c\u6b62\u548c\u7981\u7528\u4e00\u9879\u670d\u52a1",id:"4-\u5982\u4f55\u505c\u6b62\u548c\u7981\u7528\u4e00\u9879\u670d\u52a1",level:3},{value:"5 \u68c0\u67e5\u7cfb\u7edf\u542f\u52a8\u6d88\u8017\u65f6\u95f4",id:"5-\u68c0\u67e5\u7cfb\u7edf\u542f\u52a8\u6d88\u8017\u65f6\u95f4",level:3},{value:"6 \u67e5\u770b\u5404\u9879\u670d\u52a1\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5",id:"6-\u67e5\u770b\u5404\u9879\u670d\u52a1\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5",level:3},{value:"7 \u6211\u4eec\u5fc5\u987b\u8981\u6ce8\u610f\u5230\u7684\u914d\u7f6e\u6587\u4ef6\u53d8\u66f4",id:"7-\u6211\u4eec\u5fc5\u987b\u8981\u6ce8\u610f\u5230\u7684\u914d\u7f6e\u6587\u4ef6\u53d8\u66f4",level:3}],o={toc:d};function p(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4f46\u662f\u7531\u4e8e\u8ba1\u7b97\u673a\u8f6f\u786c\u4ef6\u7684\u4e0d\u65ad\u53d1\u5c55\uff0c\u4eba\u4eec\u9010\u6e10\u53d1\u73b0sysvinit\u6240\u63d0\u4f9b\u7684\u529f\u80fd\u5df2\u7ecf\u65e0\u6cd5\u6ee1\u8db3\u5f53\u524d\u7684\u9700\u6c42\uff0c\u670d\u52a1\u591a\u5e74\u7684sysvinit\u7ec8\u5c06\u8fc7\u65f6\uff0c\u4e8e\u662f\u4e00\u4e9b\u66ff\u4ee3\u7684\u65b9\u6848\u5f00\u59cb\u51fa\u73b0\uff0c\u8fd9\u5176\u4e2d\u5305\u62ecupstart \uff0csystemd\u7b49\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,i.kt)("h2",{id:"\u5173\u4e8epid-1"},"\u5173\u4e8ePID 1"),(0,i.kt)("p",null,"\u5728linux\u7684\u4e16\u754c\u91cc\uff0c\u7b2c\u4e00\u4e2a\u542f\u52a8\u5230\u7528\u6237\u7a7a\u95f4\u7684\u8fdb\u7a0b\u540d\u53ebinit\uff0c\u5176pid\u4e3a1\uff0cinit\u8fdb\u7a0b\u542f\u52a8\u5b8c\u6bd5\u540e\uff0c\u5b83\u76f8\u5f53\u4e8e\u5176\u4ed6\u8fdb\u7a0b\u7684\u6839\uff0c\u8d1f\u8d23\u5c06\u5176\u4ed6\u7684\u670d\u52a1\u8fdb\u7a0b\u542f\u52a8\u8d77\u6765\uff0c\u6700\u7ec8\u542f\u52a8\u6210\u4e3a\u4e00\u4e2a\u5b8c\u6574\u53ef\u7528\u7684\u7cfb\u7edf\u3002\u800c\u63d0\u4f9b\u8fd9\u4e2ainit\u7a0b\u5e8f\u7684\u8f6f\u4ef6\u540d\u4e3asysvinit\uff0c\u5b83\u5728\u6574\u4e2alinux\u7cfb\u7edf\u4e2d\u6240\u62c5\u4efb\u7684\u89d2\u8272\u91cd\u8981\u7a0b\u5ea6\u65e0\u53ef\u539a\u975e\u3002\u4f46\u662f\u7531\u4e8e\u8ba1\u7b97\u673a\u8f6f\u786c\u4ef6\u7684\u4e0d\u65ad\u53d1\u5c55\uff0c\u4eba\u4eec\u9010\u6e10\u53d1\u73b0sysvinit\u6240\u63d0\u4f9b\u7684\u529f\u80fd\u5df2\u7ecf\u65e0\u6cd5\u6ee1\u8db3\u5f53\u524d\u7684\u9700\u6c42\uff0c\u670d\u52a1\u591a\u5e74\u7684sysvinit\u7ec8\u5c06\u8fc7\u65f6\uff0c\u4e8e\u662f\u4e00\u4e9b\u66ff\u4ee3\u7684\u65b9\u6848\u5f00\u59cb\u51fa\u73b0\uff0c\u8fd9\u5176\u4e2d\u5305\u62ecupstart \uff0csystemd\u7b49\u3002"),(0,i.kt)("h2",{id:"init\u7684\u8d23\u4efb"},"init\u7684\u8d23\u4efb"),(0,i.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8bf4sysvinit\u4f1a\u8fc7\u65f6\u5462\uff1f\u6211\u4eec\u4ece\u7528\u6237\u9700\u6c42\u7684\u89d2\u5ea6\u6765\u770b\u4e0d\u96be\u53d1\u73b0\uff0c\u5176\u5b9e\u6211\u4eec\u5bf9init\u7684\u6700\u539f\u59cb\u6700\u6838\u5fc3\u9700\u6c42\u662f\uff0c\u5c06\u7cfb\u7edf\u4ece\u5185\u6838\u5f15\u5bfc\u81f3\u7528\u6237\u7a7a\u95f4\uff0c\u800c\u7531\u4e8e\u73b0\u5728\u786c\u4ef6\u6c34\u5e73\u7684\u53d1\u5c55\uff0c\u4f7f\u5f97\u6211\u4eec\u5728\u5355\u7eaf\u7684\u539f\u59cb\u9700\u6c42\u4e4b\u4e0a\u4ea7\u751f\u4e86\u65b0\u7684\u6216\u8005\u66f4\u591a\u7684\u9700\u6c42\uff0c\u90a3\u5c31\u662f\u4e0d\u4ec5\u8981\u5f15\u5bfc\u7cfb\u7edf\uff0c\u800c\u4e14\u8981\u5feb\u901f\u7684\u5f15\u5bfc\u7cfb\u7edf\u3002\u800c\u65e9\u5728sysvinit\u8bde\u751f\u7684\u90a3\u4e2a\u65f6\u5019\u542f\u52a8\u901f\u5ea6\u7684\u91cd\u8981\u7a0b\u5ea6\u4f3c\u4e4e\u4e0d\u662f\u5f88\u9ad8\uff0c\u6240\u4ee5\u5b83\u5728\u8fd9\u65b9\u9762\u663e\u5f97\u6709\u4e9b\u8001\u662f\u5f88\u81ea\u7136\u7684\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u7ee7\u7eed\u601d\u8003\u4e00\u4e0b\u5982\u4f55\u624d\u80fd\u5b9e\u73b0\u5feb\u901f\u5f15\u5bfc\u3002\u8bd5\u60f3\uff0c\u5f53\u4e00\u4e2a\u7cfb\u7edf\u542f\u52a8\u7684\u65f6\u5019\u9700\u8981\u542f\u52a8\u957f\u957f\u7684\u4e00\u5217\u670d\u52a1\uff0c\u8fd9\u6837\u7684\u7cfb\u7edf\u542f\u52a8\u901f\u5ea6\u5e94\u8be5\u4e0d\u4f1a\u5feb\u5230\u54ea\u91cc\u53bb\uff0c\u5982\u5927\u591a\u6570\u4eba\u4f7f\u7528\u684c\u9762\u7cfb\u7edf\u7684\u60c5\u51b5\u4e00\u6837\uff0c\u4e00\u4e2a\u52a0\u5feb\u7cfb\u7edf\u542f\u52a8\u901f\u5ea6\u7684\u6700\u76f4\u63a5\u65b9\u6cd5\u5c31\u662f\u51cf\u5c11\u542f\u52a8\u9879\uff0c\u628a\u4e0d\u5fc5\u8981\u7684\u542f\u52a8\u9879\u7981\u6b62\u6389\u3002\u800c\u53e6\u5916\u4e00\u4e2a\u65b9\u6cd5\u5219\u5b9e\u73b0\u8d77\u6765\u4e0d\u50cf\u7b2c\u4e00\u4e2a\u8fd9\u4e48\u7b80\u5355\uff0c\u90a3\u5c31\u662f\u5e76\u884c\u542f\u52a8\u3002\u5e76\u884c\u542f\u52a8\u53ef\u4ee5\u5e26\u6765\u7684\u901f\u5ea6\u63d0\u5347\u663e\u800c\u6613\u89c1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5c3d\u53ef\u80fd\u4fdd\u8bc1\u8ba9\u66f4\u591a\u7684\u670d\u52a1\u53ef\u4ee5\u5e76\u884c\u542f\u52a8\u5373\u53ef\u3002\u800c\u4ece\u5176\u4ed6\u65b9\u9762\u6765\u770bsysvinit\u7531\u4e8e\u5bf9\u811a\u672c\u7684\u4f9d\u8d56\u5bfc\u81f4\u542f\u52a8\u5b8c\u6bd5\u6240\u6709\u670d\u52a1\u8fc7\u7a0b\u4e2d\u9700\u8981\u5927\u91cf\u7684\u6267\u884c\u5916\u90e8\u547d\u4ee4\uff0c\u8fd9\u4e00\u70b9\u4e5f\u5c06\u5bfc\u81f4\u5f15\u5bfc\u901f\u5ea6\u7684\u53d8\u6162\u3002"),(0,i.kt)("h2",{id:"\u540e\u8d77\u4e4b\u79c0"},"\u540e\u8d77\u4e4b\u79c0"),(0,i.kt)("p",null,"\u5f53\u4e00\u9879\u6807\u51c6\u5df2\u7ecf\u65e0\u6cd5\u6ee1\u8db3\u5f53\u4e0b\u53d1\u5c55\u7684\u9700\u6c42\u65f6\uff0c\u6700\u597d\u7684\u529e\u6cd5\u662f\u6253\u7834\u9648\u89c4\u8ba9\u81ea\u5df1\u53d8\u6210\u65b0\u7684\u6807\u51c6\u3002systemd\u5c31\u662f\u8fd9\u4e48\u505a\u7684\uff0c\u56e0\u4e3a\u73b0\u5b9e\u7684\u9700\u8981\u5b83\u5df2\u7ecf\u4e0d\u80fd\u987e\u53caPOSIX\u6807\u51c6\u4e86\uff0c\u4ee5\u4e0d\u81f3\u4e8e\u963b\u788d\u5176\u66f4\u597d\u7684\u53d1\u5c55\uff0c\u800csystemd\u5728\u8bbe\u8ba1\u4e4b\u521d\u4e5f\u548c\u82f9\u679c\u7684launchd\u5728\u67d0\u4e9b\u5730\u65b9\u4e0d\u8c0b\u800c\u5408\u3002\u5c3d\u7ba1\u5728\u6700\u521d\u7684\u65f6\u5019\u8fd9\u79cd\u505a\u6cd5\u6ca1\u6709\u5f97\u5230\u6240\u6709\u4eba\u7684\u8ba4\u53ef\u751a\u81f3\u662f\u60f9\u607c\u4e86\u4e00\u4e9b\u5bb6\u4f19\uff0c\u4f46\u662f\u73b0\u5728\u770b\u6765systemd\u5df2\u7ecf\u6210\u4e3a\u4e86\u4e8b\u5b9e\u4e0a\u7684\u6807\u51c6\u4e86\uff0c\u73b0\u5728\u5df2\u7ecf\u91c7\u7528systemd\u7684\u53d1\u884c\u7248\u6709fedora\uff0copensuse\uff0cdebian\uff0cubuntu\uff0crhel7\uff0carchlinux\u7b49\uff0c\u5c3d\u7ba1\u5728systemd\u7684\u63a8\u5e7f\u8fc7\u7a0b\u4e2d\u53d1\u751f\u4e86\u5f88\u591a\u66f2\u6298\uff0c\u4f46\u6700\u7ec8\u5927\u5bb6\u7684\u9009\u62e9\u662f\u4e00\u81f4\u7684---\u671d\u7740\u66f4\u597d\u7684\u65b9\u5411\u53d1\u5c55\u800c\u4e0d\u662f\u58a8\u5b88\u9648\u89c4\u3002\n\u5728\u529f\u80fd\u4e0a\uff0csystemd\u4e0d\u4ec5\u4ec5\u662f\u89e3\u51b3\u4e86\u73b0\u6709\u7a0b\u5e8f\u7684\u79cd\u79cd\u95ee\u9898\uff0c\u800c\u4e14\u5305\u542b\u4e86\u5927\u91cf\u65b0\u7684\u7279\u6027\uff0c\u8fd9\u610f\u5473\u7740\u7cfb\u7edf\u4e2d\u539f\u672c\u9700\u8981\u7684\u5f88\u591a\u7ec4\u4ef6\u73b0\u5728\u4e5f\u90fd\u53ef\u4ee5\u4e0b\u5c97\u4e86\uff0c\u4e0b\u9762\u6765\u770b\u770bsystemd\u7684\u4e00\u4e9b\u7279\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7ba1\u7406 - \u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u542f\u52a8/\u505c\u6b62/\u91cd\u542f/\u91cd\u8f7d \u800c\u4e0d\u518d\u9700\u8981\u7f16\u5199\u4e00\u5927\u5768\u811a\u672c\u6765\u5e72\u8fd9\u79cd\u539f\u672c\u5c31\u5e94\u8be5\u5341\u5206\u7b80\u5355\u57fa\u672c\u4e14\u91cd\u8981\u7684\u4e8b\u60c5\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u66f4\u4e3a\u7b80\u6d01\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u4e5f\u8868\u793a\u4eca\u540e\u7684\u7cfb\u7edf\u4e2d\u5404\u79cdservice\u542f\u52a8\u63a7\u5236\u7684\u7edf\u4e00\u6027\uff0c\u4f7f\u5f97daemon\u670d\u52a1\u5f00\u53d1\u8005\u514d\u4e8e\u7f16\u5199\u5404\u79cd\u770b\u4e0a\u53bb\u53c2\u5dee\u4e0d\u9f50\u7684\u542f\u52a8\u811a\u672c\uff0c\u589e\u52a0\u4e86\u901a\u7528\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},"socket\u7ba1\u7406 - \u652f\u6301\u76d1\u542csocket\uff0c\u8fd9\u4f7f\u5f97socket\u7684\u76d1\u542c\u548c\u670d\u52a1\u672c\u8eab\u53ef\u4ee5\u76f8\u4e92\u72ec\u7acb\uff0c\u4e00\u65b9\u9762\u53ef\u4ee5\u4ee5\u6b64\u63d0\u9ad8\u670d\u52a1\u542f\u52a8\u901f\u5ea6\uff0c\u53e6\u5916\u4e00\u65b9\u9762\u8fd8\u53ef\u4ee5\u8282\u7ea6\u7cfb\u7edf\u5f00\u9500\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u7ba1\u7406 - \u53ef\u4ee5\u914d\u5408udev\u89c4\u5219\u5bf9\u8bbe\u5907\u8fdb\u884c\u7ba1\u7406\uff0c\u8fd8\u53ef\u4ee5\u914d\u5408/etc/fstab\u6587\u4ef6\u5b9e\u73b0\u78c1\u76d8\u7684\u6302\u8f7d\u7ba1\u7406\uff0c\u751a\u81f3\u5b9e\u73b0\u66f4\u9ad8\u7ea7\u7684\u81ea\u52a8\u6302\u8f7d\uff1b"),(0,i.kt)("li",{parentName:"ul"},"target\u5206\u7ec4 - \u628a\u4e0d\u540c\u7684unit\u7ec4\u5408\u8d77\u6765\uff0c\u7ec4\u5408\u5230\u540c\u4e00\u4e2atarget\u91cc\u9762\uff0c\u5b8c\u5168\u53d6\u4ee3sysvinit\u7684\u8fd0\u884c\u7b49\u7ea7\u7684\u6982\u5ff5\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u72b6\u6001\u5feb\u7167 - \u53ef\u4ee5\u5bf9\u5f53\u524d\u7cfb\u7edf\u4e2d\u7684unit\u72b6\u6001\u8fdb\u884c\u5feb\u7167\uff0c\u8fd9\u4e2a\u6982\u5ff5\u6709\u4e9b\u7c7b\u4f3c\u4e8e\u7cfb\u7edf\u7684\u4f11\u7720\u4e0e\u6062\u590d\uff0c\u4f60\u53ef\u4ee5\u8ba9\u7cfb\u7edf\u4ece\u4e00\u4e2a\u72b6\u6001\u5207\u6362\u8fdb\u5165\u53e6\u5916\u4e00\u4e2a\u72b6\u6001\uff1b")),(0,i.kt)("h2",{id:"systemd\u7ba1\u7406\u5165\u95e8"},"systemd\u7ba1\u7406\u5165\u95e8"),(0,i.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e9b\u4f8b\u5b50\u6765\u6f14\u793a\u4e00\u4e9b\u57fa\u672c\u7684\u7ba1\u7406\u547d\u4ee4\uff0c\u8fd9\u4e9b\u547d\u4ee4\u5bf9\u4e8e\u7cfb\u7edf\u7ba1\u7406\u5458\u6765\u8bf4\u81f3\u5173\u91cd\u8981\u3002"),(0,i.kt)("h3",{id:"1--\u5982\u4f55\u68c0\u67e5\u542f\u52a8\u9879"},"1  \u5982\u4f55\u68c0\u67e5\u542f\u52a8\u9879"),(0,i.kt)("p",null,"\u4efb\u4f55\u542f\u52a8\u9879\uff0c\u53ea\u8981\u662f\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u6709\u88ab\u6267\u884c\u5230\uff0c\u4e0d\u8bba\u542f\u52a8\u6210\u529f\u8fd8\u662f\u5931\u8d25\uff0csystemd\u90fd\u80fd\u591f\u8bb0\u5f55\u4e0b\u4ed6\u4eec\u7684\u72b6\u6001\uff0c\u76f4\u63a5\u6267\u884c\u4e0d\u5e26\u53c2\u6570\u7684systemctl\u547d\u4ee4\u5373\u53ef\u89c2\u5bdf\u5230\uff0c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# systemctl\nUNIT                                             LOAD   ACTIVE SUB       DESCRIPTION\nproc-sys-fs-binfmt_misc.automount                loaded active waiting   Arbitrary Executable File Formats File System Aut\nsys-devices-pci...0-backlight-acpi_video1.device loaded active plugged   /sys/devices/pci0000:00/0000:00:01.0/0000:01:00.0\nsys-devices-pci...0-backlight-acpi_video0.device loaded active plugged   /sys/devices/pci0000:00/0000:00:02.0/backlight/ac\nsys-devices-pci...00-0000:00:19.0-net-em1.device loaded active plugged   82579LM Gigabit Network Connection\nsys-devices-pci...d1.4:1.0-bluetooth-hci0.device loaded active plugged   /sys/devices/pci0000:00/0000:00:1a.0/usb1/1-1/1-1\nsys-devices-pci...000:00:1b.0-sound-card0.device loaded active plugged   6 Series/C200 Series Chipset Family High Definiti\nsys-devices-pci...0000:03:00.0-net-wlp3s0.device loaded active plugged   RTL8188CE 802.11b/g/n WiFi Adapter\nsys-devices-pci...-0:0:0:0-block-sda-sda1.device loaded active plugged   ST9500420AS\nsys-devices-pci...-0:0:0:0-block-sda-sda2.device loaded active plugged   ST9500420AS\nsys-devices-pci...-0:0:0:0-block-sda-sda3.device loaded active plugged   ST9500420AS\nsys-devices-pci...-0:0:0:0-block-sda-sda5.device loaded active plugged   ST9500420AS\nsys-devices-pci...-0:0:0:0-block-sda-sda6.device loaded active plugged   ST9500420AS\nsys-devices-pci...-0:0:0:0-block-sda-sda7.device loaded active plugged   LVM PV EKHM59-PY9G-AoRX-Nr9k-nnxN-XxxO-DFcj4N on\nsys-devices-pci...0:0:0-0:0:0:0-block-sda.device loaded active plugged   ST9500420AS\nsys-devices-pci...-1:0:0:0-block-sdb-sdb1.device loaded active plugged   KINGSTON_SVP200S360G\nsys-devices-pci...-1:0:0:0-block-sdb-sdb2.device loaded active plugged   LVM PV rlRqSb-IlQn-DJQi-i7fg-sUV5-3bjI-g2npg7 on\nsys-devices-pci...1:0:0-1:0:0:0-block-sdb.device loaded active plugged   KINGSTON_SVP200S360G\n")),(0,i.kt)("p",null,"\u8981\u68c0\u67e5\u5177\u4f53\u7684\u670d\u52a1\uff0c\u5219\u4f7f\u7528status\u9009\u9879\u52a0\u4e0a\u670d\u52a1\u540d\u5373\u53ef\uff0c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# systemctl status libvirtd\nlibvirtd.service - Virtualization daemon\n   Loaded: loaded (/usr/lib/systemd/system/libvirtd.service; enabled)\n   Active: active (running) since \u4e00 2014-04-07 19:10:30 CST; 9min ago\n     Docs: man:libvirtd(8)\n           http://libvirt.org\n Main PID: 1673 (libvirtd)\n   CGroup: /system.slice/libvirtd.service\n           \u251c\u25001673 /usr/sbin/libvirtd\n           \u2514\u25001804 /sbin/dnsmasq --conf-file=/var/lib/libvirt/dnsmasq/default.conf\n\n\n4\u6708 07 19:10:33 localhost.localdomain dnsmasq[1804]: using nameserver 218.6.200.139#53\n4\u6708 07 19:10:33 localhost.localdomain dnsmasq[1804]: using nameserver 61.139.2.69#53\n4\u6708 07 19:10:33 localhost.localdomain dnsmasq[1804]: using local addresses only for unqualified names\n4\u6708 07 19:10:33 localhost.localdomain dnsmasq[1804]: read /etc/hosts - 3 addresses\n4\u6708 07 19:10:33 localhost.localdomain dnsmasq[1804]: read /var/lib/libvirt/dnsmasq/default.addnhosts - 0 addresses\n4\u6708 07 19:10:33 localhost.localdomain dnsmasq-dhcp[1804]: read /var/lib/libvirt/dnsmasq/default.hostsfile\nHint: Some lines were ellipsized, use -l to show in full.\n")),(0,i.kt)("p",null,"\u4ee5\u4e0a\u8fd9\u4e9b\u4fe1\u606f\u5411\u6211\u4eec\u5c55\u793a\u4e86\u670d\u52a1\u7684\u8fd0\u884c\u65f6\u95f4\uff0c\u5f53\u524d\u72b6\u6001\uff0c\u76f8\u5173\u8fdb\u7a0bpid\uff0c\u4ee5\u53ca\u6700\u8fd1\u7684\u6709\u5173\u8be5\u670d\u52a1\u7684\u65e5\u5fd7\u4fe1\u606f\uff0c\u662f\u4e0d\u662f\u5f88\u65b9\u4fbf\uff1f"),(0,i.kt)("h3",{id:"2-\u627e\u51fa\u6bcf\u9879\u670d\u52a1\u6240\u5bf9\u5e94\u7684\u8fdb\u7a0bid"},"2 \u627e\u51fa\u6bcf\u9879\u670d\u52a1\u6240\u5bf9\u5e94\u7684\u8fdb\u7a0bid"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u7cfb\u7edf\u7ba1\u7406\u6765\u8bf4\u8fd9\u662f\u6700\u5e38\u89c1\u7684\u5de5\u4f5c\uff0c\u4f46\u662f\u5728sysvinit\u65f6\u4ee3\u6211\u4eec\u53ea\u80fd\u501f\u52a9\u4f8b\u5982ps\u547d\u4ee4\u7b49\u6765\u5b8c\u6210\uff0c\u800csystemd\u5df2\u7ecf\u8003\u8651\u5230\u4e86\u7cfb\u7edf\u7ba1\u7406\u5458\u7684\u9700\u6c42\uff0c\u4e8e\u662f\u4e0b\u9762\u7684\u547d\u4ee4\u8bde\u751f\u4e86\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# systemd-cgls\n\u251c\u25001 /usr/lib/systemd/systemd --switched-root --system --deserialize 22\n\u251c\u2500user.slice\n\u2502 \u251c\u2500user-1000.slice\n\u2502 \u2502 \u251c\u2500session-1.scope\n\u2502 \u2502 \u2502 \u251c\u25001806 gdm-session-worker [pam/gdm-password]\n\u2502 \u2502 \u2502 \u251c\u25001820 /usr/bin/gnome-keyring-daemon --daemonize --login\n\u2502 \u2502 \u2502 \u251c\u25001822 gnome-session\n\u2502 \u2502 \u2502 \u251c\u25001830 dbus-launch --sh-syntax --exit-with-session\n\u2502 \u2502 \u2502 \u251c\u25001831 /bin/dbus-daemon --fork --print-pid 4 --print-address 6 --session\n\u2502 \u2502 \u2502 \u251c\u25001858 /usr/libexec/at-spi-bus-launcher\n\u2502 \u2502 \u2502 \u251c\u25001862 /bin/dbus-daemon --config-file=/etc/at-spi2/accessibility.conf --nofork --print-address 3\n\u2502 \u2502 \u2502 \u251c\u25001865 /usr/libexec/at-spi2-registryd --use-gnome-session\n\u2502 \u2502 \u2502 \u251c\u25001872 /usr/libexec/gvfsd\n... ...\n")),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5f88\u6e05\u6670\u7684\u770b\u5230\u54ea\u9879\u670d\u52a1\u542f\u52a8\u4e86\u54ea\u4e9b\u8fdb\u7a0b\uff0c\u5bf9\u4e8e\u7cfb\u7edf\u7ba1\u7406\u6765\u8bf4\u5341\u5206\u6709\u7528\uff1b"),(0,i.kt)("h3",{id:"3-\u5982\u4f55\u6b63\u786e\u7684\u6740\u6b7b\u670d\u52a1\u8fdb\u7a0b"},"3 \u5982\u4f55\u6b63\u786e\u7684\u6740\u6b7b\u670d\u52a1\u8fdb\u7a0b"),(0,i.kt)("p",null,"\u5728sysvinit\u7684\u65f6\u4ee3\uff0c\u5982\u679c\u9700\u8981\u7ed3\u675f\u4e00\u4e2a\u670d\u52a1\u53ca\u5176\u542f\u52a8\u7684\u6240\u6709\u8fdb\u7a0b\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u4e00\u4e9b\u7cdf\u7cd5\u7684\u8fdb\u7a0b\u65e0\u6cd5\u6b63\u786e\u7ed3\u675f\u6389\uff0c\u5373\u4fbf\u662f\u6211\u4eec\u4f7f\u7528kill\uff0ckillall\u7b49\u547d\u4ee4\u6765\u7ed3\u675f\u5b83\u4eec\uff0c\u5230\u4e86systemd\u7684\u65f6\u4ee3\u4e00\u5207\u90fd\u53d8\u5f97\u4e0d\u4e00\u6837\uff0csystemd\u53f7\u79f0\u662f\u7b2c\u4e00\u4e2a\u80fd\u6b63\u786e\u7684\u7ec8\u7ed3\u4e00\u9879\u670d\u52a1\u7684\u7a0b\u5e8f\uff0c\u4e0b\u9762\u6765\u770b\u770b\u5177\u4f53\u5982\u4f55\u64cd\u4f5c\u7684\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemctl kill crond.service")),(0,i.kt)("p",null,"\u6216\u8005\u6307\u5b9a\u4e00\u4e2a\u4fe1\u53f7\u53d1\u9001\u51fa\u53bb"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemctl kill -s SIGKILL crond.service")),(0,i.kt)("p",null,"\u4f8b\u5982\u53ef\u4ee5\u50cf\u8fd9\u6837\u6267\u884c\u4e00\u6b21reload\u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemctl kill -s HUP --kill-who=main crond.service")),(0,i.kt)("h3",{id:"4-\u5982\u4f55\u505c\u6b62\u548c\u7981\u7528\u4e00\u9879\u670d\u52a1"},"4 \u5982\u4f55\u505c\u6b62\u548c\u7981\u7528\u4e00\u9879\u670d\u52a1"),(0,i.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u56de\u987e\u4e00\u4e0b\u5728sysvinit\u65f6\u4ee3\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u6240\u5b9e\u73b0\u7684\u529f\u80fd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# service ntpd stop\n# chkconfig ntpd off\n")),(0,i.kt)("p",null,"\u5f88\u7b80\u5355\uff0c\u9996\u5148\u505c\u6b62\u670d\u52a1\uff0c\u5176\u6b21\u7981\u7528\u670d\u52a1\n\u90a3\u4e48\u5728systemd\u4e2d\u5e94\u8be5\u5982\u4f55\u64cd\u4f5c\u5462\uff1f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# systemctl stop ntpd.service\n# systemdctl disable ntpd.service\n")),(0,i.kt)("p",null,"\u5f88\u663e\u7136systemctl\u547d\u4ee4\u5df2\u7ecf\u53d6\u4ee3\u4e86service \u548cchkconfig\u4e24\u4e2a\u547d\u4ee4\u7684\u4f4d\u7f6e\uff0c\u4e0d\u5149\u5982\u6b64\uff0c\u6211\u4eec\u8fd8\u80fd\u5c06\u670d\u52a1\u8bbe\u7f6e\u4e3a\u8fde\u4eba\u5de5\u4e5f\u65e0\u6cd5\u542f\u52a8\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# ln -s /dev/null  /etc/systemd/system/ntpd.service\n# systemctl daemon-reload\n")),(0,i.kt)("h3",{id:"5-\u68c0\u67e5\u7cfb\u7edf\u542f\u52a8\u6d88\u8017\u65f6\u95f4"},"5 \u68c0\u67e5\u7cfb\u7edf\u542f\u52a8\u6d88\u8017\u65f6\u95f4"),(0,i.kt)("p",null,"\u5728\u8fc7\u53bb\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u7b2c\u4e09\u65b9\u5de5\u5177\u6765\u5b9e\u73b0\u5bf9\u7cfb\u7edf\u542f\u52a8\u8fc7\u7a0b\u7684\u8017\u65f6\u8ddf\u8e2a\uff0c\u73b0\u5728\u8fd9\u4e2a\u529f\u80fd\u5df2\u7ecf\u96c6\u6210\u5230systemd\u5f53\u4e2d\uff0c\u53ef\u4ee5\u5341\u5206\u65b9\u4fbf\u7684\u4e86\u89e3\u5230\u7cfb\u7edf\u542f\u52a8\u65f6\u5728\u5404\u4e2a\u9636\u6bb5\u6240\u82b1\u8d39\u7684\u65f6\u95f4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# systemd-analyze\nStartup finished in 1.669s (kernel) + 1.514s (initrd) + 7.106s (userspace) = 10.290s\n\u4ee5\u4e0a\u4fe1\u606f\u7b80\u8981\u7684\u5217\u51fa\u4e86\u4ece\u5185\u6838\u5230\u7528\u6237\u7a7a\u95f4\u6574\u4e2a\u5f15\u5bfc\u8fc7\u7a0b\u5927\u81f4\u82b1\u8d39\u7684\u65f6\u95f4\uff0c\u5982\u679c\u8981\u67e5\u770b\u5177\u4f53\u6bcf\u9879\u670d\u52a1\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u5219\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a\n# systemd-analyze blame\n          6.468s dnf-makecache.service\n          5.556s network.service\n          1.022s plymouth-start.service\n           812ms plymouth-quit-wait.service\n           542ms lvm2-pvscan@8:7.service\n           451ms systemd-udev-settle.service\n           306ms firewalld.service\n           246ms dmraid-activation.service\n           194ms lvm2-pvscan@8:18.service\n           171ms lvm2-monitor.service\n           145ms bluetooth.service\n           135ms accounts-daemon.service\n           113ms rtkit-daemon.service\n           111ms ModemManager.service\n           104ms avahi-daemon.service\n           102ms systemd-logind.service\n            79ms systemd-vconsole-setup.service\n            77ms acpid.service\n")),(0,i.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u7c7b\u4f3c\u4e0a\u9762\u8fd9\u4e9b\u5185\u5bb9\uff0c\u81f3\u6b64\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u7cfb\u7edf\u91cc\u6bcf\u4e00\u9879\u670d\u52a1\u7684\u542f\u52a8\u65f6\u95f4\uff0c\u636e\u6b64\u53ef\u4ee5\u5bf9\u7cfb\u7edf\u5f15\u5bfc\u8fc7\u7a0b\u4e86\u5982\u6307\u638c\uff0c\u5982\u679c\u4f60\u89c9\u5f97\u8fd9\u8fd8\u4e0d\u591f\u76f4\u89c2\uff0c\u90a3\u4e48\u53ef\u4ee5\u5c06\u7ed3\u679c\u5bfc\u51fa\u5230\u56fe\u50cf\u6587\u4ef6\u91cc\u9762\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemd-analyze plot >systemd.svg")),(0,i.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u5c06\u7cfb\u7edf\u7684\u542f\u52a8\u8fc7\u7a0b\u8f93\u51fa\u5230\u4e00\u5f20svg\u56fe\u50cf\u4e0a\u9762\uff0c\u66f4\u76f4\u89c2\u7684\u5c55\u73b0\u51fa\u5404\u4e2a\u670d\u52a1\u542f\u52a8\u6240\u82b1\u8d39\u7684\u65f6\u95f4\uff0c\u5728\u6211\u4eec\u9700\u8981\u5206\u6790\u548c\u4f18\u5316\u670d\u52a1\u542f\u52a8\u9879\u7684\u65f6\u5019\u5f88\u6709\u5e2e\u52a9\u3002"),(0,i.kt)("h3",{id:"6-\u67e5\u770b\u5404\u9879\u670d\u52a1\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5"},"6 \u67e5\u770b\u5404\u9879\u670d\u52a1\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5"),(0,i.kt)("p",null,"\u548ctop\u547d\u4ee4\u4e0d\u4e00\u6837\uff0ctop\u547d\u4ee4\u66f4\u4fa7\u91cd\u4e8e\u5c55\u793a\u4ee5\u8fdb\u7a0b\u4e3a\u5355\u4f4d\u7684\u8d44\u6e90\u72b6\u6001\uff0c\u800csystemd\u63d0\u4f9b\u4e86\u4e00\u4e2a\u547d\u4ee4\u6765\u65b9\u4fbf\u7684\u67e5\u770b\u6bcf\u9879\u670d\u52a1\u7684\u5b9e\u65f6\u8d44\u6e90\u6d88\u8017\u72b6\u6001\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# systemd-cgtop\nPath                                              Tasks   %CPU   Memory  Input/s Output/s\n/                                                   199   12.3     1.9G        -        -\n/system.slice/ModemManager.service                    1      -        -        -        -\n/system.slice/abrt-oops.service                       1      -        -        -        -\n/system.slice/abrt-xorg.service                       1      -        -        -        -\n/system.slice/abrtd.service                           1      -        -        -        -\n/system.slice/accounts-daemon.service                 1      -        -        -        -\n/system.slice/acpid.service                           1      -        -        -        -\n/system.slice/alsa-state.service                      1      -        -        -        -\n/system.slice/atd.service                             1      -        -        -        -\n/system.slice/auditd.service                          3      -        -        -        -\n/system.slice/avahi-daemon.service                    2      -        -        -        -\n/system.slice/bluetooth.service                       1      -        -        -        -\n/system.slice/chronyd.service                         1      -        -        -        -\n/system.slice/colord.service                          1      -        -        -        -\n/system.slice/crond.service                           1      -        -        -        -\n")),(0,i.kt)("h3",{id:"7-\u6211\u4eec\u5fc5\u987b\u8981\u6ce8\u610f\u5230\u7684\u914d\u7f6e\u6587\u4ef6\u53d8\u66f4"},"7 \u6211\u4eec\u5fc5\u987b\u8981\u6ce8\u610f\u5230\u7684\u914d\u7f6e\u6587\u4ef6\u53d8\u66f4"),(0,i.kt)("p",null,"systemd\u8003\u8651\u5230\u5404\u79cd\u53d1\u884c\u7248\u672c\u7684\u7528\u6237\u4f7f\u7528\u4e60\u60ef\uff0c\u5c3d\u91cf\u63d0\u4f9b\u66f4\u4e3a\u901a\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u4ee5\u65b9\u4fbf\u5404\u5bb6\u7edf\u4e00\uff0c\u65b9\u4fbf\u7528\u6237\u4f7f\u7528\uff0c\u4e0b\u9762\u5217\u51fa\u4e00\u4e9b\u57fa\u672c\u7684\u7edf\u4e00\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/etc/hostname\uff0cdebian\u548credhat\u5728\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e0a\u7684\u5dee\u5f02\u5bfc\u81f4\u4e86\u7cfb\u7edf\u7ba1\u7406\u6216\u591a\u6216\u5c11\u7684\u4e0d\u4fbf\uff0c\u6b64\u6587\u4ef6\u7684\u7edf\u4e00\u610f\u4e49\u91cd\u5927"),(0,i.kt)("li",{parentName:"ul"},"/etc/vconsole.conf\uff0c\u6b64\u6587\u4ef6\u7528\u6765\u7edf\u4e00\u7ba1\u7406console\u548c\u952e\u76d8\u6620\u5c04"),(0,i.kt)("li",{parentName:"ul"},"/etc/locale.conf \u914d\u7f6e\u7cfb\u7edf\u73af\u5883\u8bed\u7cfb"),(0,i.kt)("li",{parentName:"ul"},"/etc/modules-load.d/*.conf \u5185\u6838\u6a21\u5757\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"/etc/sysctl.d/*.conf \u5185\u6838\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\uff0c\u5bf9/etc/sysctl.conf\u7684\u6269\u5145"),(0,i.kt)("li",{parentName:"ul"},"/etc/tmpfiles.d/*.conf \u8fd0\u884c\u6001\u4e34\u65f6\u6587\u4ef6\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"/etc/os-release  /etc/machine-id  /etc/machine-info \u8fd9\u4e09\u4e2a\u6587\u4ef6\u7684\u7edf\u4e00\u5bf9\u7cfb\u7edf\u7ba1\u7406\u5458\u6765\u8bf4\u4e5f\u662f\u610f\u4e49\u6df1\u8fdc\uff0c\u5b83\u8ba9\u6211\u4eec\u6709\u4e86\u7edf\u4e00\u7684\u68c0\u6d4b\u53d1\u884c\u7248\u672c\u7b49\u4fe1\u606f\u7684\u5165\u53e3")),(0,i.kt)("p",null,"\u4ee5\u4e0a\u5185\u5bb9\u4ec5\u4ec5\u8ba9\u5404\u4f4d\u5bf9systemd\u5f62\u6210\u57fa\u672c\u7684\u8ba4\u8bc6\uff0c\u6211\u4eec\u5c06\u5728\u540e\u671f\u7684\u6587\u7ae0\u4e2d\u66f4\u52a0\u6df1\u5165\u5730\u8ba8\u8bbasystemd\u7684\u7279\u6027\u3002\u6700\u540e\uff0c\u518d\u6b21\u611f\u8c22\u4f5c\u8005Lennart\u7684\u8d21\u732e\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u94fe\u63a5\uff1a"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://cgit.freedesktop.org/systemd/"},"http://cgit.freedesktop.org/systemd/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://0pointer.de/blog/projects/"},"http://0pointer.de/blog/projects/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://linuxtoy.org/archives/interview-creater-of-systemd-and-pulseaudio-lennart.html"},"https://linuxtoy.org/archives/interview-creater-of-systemd-and-pulseaudio-lennart.html")))))}p.isMDXComponent=!0}}]);
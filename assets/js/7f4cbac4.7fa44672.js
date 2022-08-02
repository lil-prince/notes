"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(r),b=l,g=u["".concat(i,".").concat(b)]||u[b]||s[b]||a;return r?n.createElement(g,o(o({ref:t},m),{},{components:r})):n.createElement(g,o({ref:t},m))}));function b(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const a={layout:"post",title:"\u4f7f\u7528rpmrebuild\u4fee\u6539rpm\u5305\u5185\u5bb9",description:"\u4e00\u79cdrpm\u5305\u7684\u9b54\u6539\u65b9\u5f0f",categories:["shell"],tags:["bash","rpm","rpmrebuild"]},o=void 0,p={permalink:"/notes/blog/2020/04/07/change-rpm-file-using-rpmrebuild",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2020-04-07-change-rpm-file-using-rpmrebuild.md",source:"@site/blog/2020-04-07-change-rpm-file-using-rpmrebuild.md",title:"\u4f7f\u7528rpmrebuild\u4fee\u6539rpm\u5305\u5185\u5bb9",description:"\u4e00\u79cdrpm\u5305\u7684\u9b54\u6539\u65b9\u5f0f",date:"2020-04-07T00:00:00.000Z",formattedDate:"April 7, 2020",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"},{label:"rpm",permalink:"/notes/blog/tags/rpm"},{label:"rpmrebuild",permalink:"/notes/blog/tags/rpmrebuild"}],readingTime:1.41,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u4f7f\u7528rpmrebuild\u4fee\u6539rpm\u5305\u5185\u5bb9",description:"\u4e00\u79cdrpm\u5305\u7684\u9b54\u6539\u65b9\u5f0f",categories:["shell"],tags:["bash","rpm","rpmrebuild"]},prevItem:{title:"\u4f7f\u7528conventional-changelog\u548cStrapdown.js\u4e3agit\u4ed3\u5e93\u81ea\u52a8\u751f\u6210changelog html\u9875\u9762",permalink:"/notes/blog/2021/01/15/auto-create-changelog-html"},nextItem:{title:"python\u811a\u672c\u89e3\u538bgbk\u7f16\u7801zip",permalink:"/notes/blog/2020/03/27/unzip-gbk-with-python"}},i={authorsImageUrls:[]},c=[],m={toc:c};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u67d0\u4e9b\u7279\u6b8a\u7d27\u6025\u60c5\u51b5\u4e0b... ...")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,l.kt)("p",null,"\u67d0\u4e9b\u7279\u6b8a\u7d27\u6025\u60c5\u51b5\u4e0b\u6ca1\u6cd5\u7b49\u5230\u91cd\u65b0\u4ece\u6e90\u7801\u7f16\u8bd1\u6253\u5305\uff0c\u624b\u91cc\u53ea\u6709\u4e00\u4e2a\u6253\u5305\u597d\u7684rpm\uff0c\u4f46\u662f\u91cc\u9762\u5185\u5bb9\u9700\u8981\u5728\u5b89\u88c5\u524d\u5c31\u6539\u6389\uff0c\u6bd4\u5982\u4fee\u6539\u67d0\u4e2a\u6587\u4ef6\u5185\u5bb9\u7b49\uff0c\u8fd9\u4e2a\u65f6\u5019rpmrebuild\u547d\u4ee4\u53ef\u4ee5\u6d3e\u4e0a\u7528\u573a\u3002\nrpmrebuild\u5de5\u4f5c\u65f6\u4f1a\u628arpm\u5305\u5185\u5bb9\u91ca\u653e\u5230\u4e00\u4e2a\u4e34\u65f6\u76ee\u5f55\uff0c\u5982\u679c\u9700\u8981\u4fee\u6539rpm\u5305\u91cc\u9762\u7684\u6587\u4ef6\u7684\u8bdd\uff0c \u53ef\u4ee5\u901a\u8fc7-m\u53c2\u6570\u6307\u5b9a\u6267\u884c\u7684\u547d\u4ee4\uff0c\u6bd4\u5982/bin/bash\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u4ea4\u4e92\u5f0f\u7684shell\uff0c\n\u6709\u4e86\u4ea4\u4e92\u5f0fshell\u60f3\u8c61\u7a7a\u95f4\u5c31\u5f88\u5927\u4e86\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e2ashell\u73af\u5883\u4e0b\u5bf9rpm\u5305\u91ca\u653e\u51fa\u6765\u7684\u6587\u4ef6\u4efb\u610f\u4fee\u6539\uff0c\u5f53\u9000\u51fa\u8fd9\u4e2ashell\u65f6\uff0crpmrebuild\u4f1a\u628a\u6539\u52a8\u6253\u5305\u56de\u65b0\u7684rpm\u3002\n\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rpmrebuild -m /bin/bash -np rpm/xxx.rpm\n# \u6b64\u65f6\u6211\u4eec\u5f97\u5230\u4e00\u4e2a\u4ea4\u4e92shell\uff0c\n# \u6bd4\u5982\u77e5\u9053\u9700\u8981\u4fee\u6539\u7684\u6587\u4ef6\u540d\u4e3aaaa\uff0c\u53ef\u4ee5\u8fd9\u6837\u64cd\u4f5c\uff1a\nfind / -name aaa\n# \u5c3d\u60c5\u53d1\u6325\u5427\uff0c\u5b8c\u4e86\u9000\u51fa\nctrl+D\n")),(0,l.kt)("p",null,"\u73b0\u5728\u4f60\u5c31\u5f97\u5230\u4fee\u6539\u597d\u5185\u5bb9\u4e4b\u540e\u7684\u65b0rpm\u4e86\u3002"))}s.isMDXComponent=!0}}]);
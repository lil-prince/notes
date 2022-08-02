"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),b=l,f=m["".concat(c,".").concat(b)]||m[b]||u[b]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function b(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const a={layout:"post",title:"\u6b63\u786e\u4f7f\u7528shell\u8fd4\u56de\u503c",description:"about shell exit code",categories:["shell"],tags:["bash","exitcode"]},o=void 0,i={permalink:"/notes/blog/2013/05/17/bash-shell-exit-code",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2013-05-17-bash-shell-exit-code.md",source:"@site/blog/2013-05-17-bash-shell-exit-code.md",title:"\u6b63\u786e\u4f7f\u7528shell\u8fd4\u56de\u503c",description:"about shell exit code",date:"2013-05-17T00:00:00.000Z",formattedDate:"2013\u5e745\u670817\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"},{label:"exitcode",permalink:"/notes/blog/tags/exitcode"}],readingTime:2.49,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u6b63\u786e\u4f7f\u7528shell\u8fd4\u56de\u503c",description:"about shell exit code",categories:["shell"],tags:["bash","exitcode"]},prevItem:{title:"libvirt\u4e2d\u7684\u7f51\u7edc\u7ba1\u7406\u5b9e\u8df5",permalink:"/notes/blog/2013/10/01/libvirt-basic-usage"},nextItem:{title:"Ovirt\u4e2d\u7684stateless\u5b9e\u73b0\u673a\u5236",permalink:"/notes/blog/2013/03/14/ovirt-stateless"}},c={authorsImageUrls:[]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7f16\u5199shell\u811a\u672c\u7684\u65f6\u5019\uff0c\u6b63\u786e\u4f7f\u7528\u8fd4\u56de\u503c\u662f\u8fd0\u7ef4\u4eba\u5458\u7684\u57fa\u672c\u64cd\u5b88")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,l.kt)("p",null,"1.\u4e0b\u8868\u5217\u51fa\u4e86\u5e38\u89c1shell\u547d\u4ee4\u7684\u9000\u51fa\u8fd4\u56de\u503c\uff1a"),(0,l.kt)("p",null,'|---\n| \u8fd4\u56de\u503c | \u542b\u4e49 | \u793a\u4f8b | \u8bf4\u660e\n|-|:-|:-:|-:\n| 1  |  \u5404\u79cd\u5e38\u89c1\u9519\u8bef |   let "var1 = 1/0"  |  shell\u91cc\u9762\u6700\u5e38\u89c1\u7684\u9519\u8bef\u8fd4\u56de\u503c\n| 2  |  shell\u5185\u5efa\u529f\u80fd\u4f7f\u7528\u9519\u8bef |   empty_function() {}  |  \u5e38\u89c1\u4e8e\u5173\u952e\u5b57\u6216\u8005\u547d\u4ee4\u51fa\u9519\n| 126 |   \u547d\u4ee4\u65e0\u6cd5\u6267\u884c |   /dev/null  |  \u7531\u4e8e\u6743\u9650\u7b49\u5bfc\u81f4\u7684\u547d\u4ee4\u65e0\u6cd5\u6267\u884c\n| 127 |   \u547d\u4ee4\u65e0\u6cd5\u627e\u5230 |   illegal_command |   \u4e00\u822c\u662fPATH\u73af\u5883\u53d8\u91cf\u4e0d\u5bf9\u7b49\n| 128 |   \u9000\u51fa\u8fd4\u56de\u503c\u9519\u8bef |   exit 3.14159  |  \u8fd4\u56de\u503c\u53ea\u80fd\u662f\u6574\u6570\uff0c\u5c0f\u6570\u5c31\u4e0d\u5bf9\u4e86\n| 128+n |    \u4fe1\u53f7 "n"+128 |   kill -9 $PPID of script |   $? \u5373\u8fd4\u56de 137 (128 + 9)\n| 130 |   ctrl+c \u9000\u51fa |   Ctl-C  |  \u5176\u5b9ectrl+c\u8fd4\u56de\u7684\u662f2 (130 = 128 + 2)\n| 255* |   \u8fd4\u56de\u503c\u8d85\u51fa\u53ef\u63a5\u53d7\u7684\u8303\u56f4 |   exit  -1 |   \u53ea\u80fd\u662f 0 - 255'),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8868\u5217\u51fa\u4e86\u5173\u4e8e/etc/init.d/\u76ee\u5f55\u4e0b\u542f\u52a8\u63a7\u5236\u811a\u672c\u7684\u6807\u51c6\u8fd4\u56de\u503c\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0    \u7a0b\u5e8f\u5728\u8fd0\u884c\u6216\u8005\u670d\u52a1\u72b6\u6001OK"),(0,l.kt)("li",{parentName:"ul"},"1    \u7a0b\u5e8f\u5df2\u7ecf\u6b7b\u6389\uff0c\u4f46\u662f pid\u6587\u4ef6\u4ecd\u5728 /var/run\u76ee\u5f55\u4e0b\u5b58\u5728"),(0,l.kt)("li",{parentName:"ul"},"2    \u7a0b\u5e8f\u5df2\u7ecf\u6b7b\u6389\uff0c\u4f46\u662flock\u6587\u4ef6\u4ecd\u5728 /var/lock \u76ee\u5f55\u4e0b\u5b58\u5728"),(0,l.kt)("li",{parentName:"ul"},"3    \u7a0b\u5e8f\u6ca1\u6709\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"4    \u7a0b\u5e8f\u8fd0\u884c\u72b6\u6001\u672a\u77e5"),(0,l.kt)("li",{parentName:"ul"},"5-99    \u4f9bLSB\u6269\u5c55\u7684\u4fdd\u7559\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"100-149    \u4f9b\u7279\u5b9a\u7cfb\u7edf\u53d1\u884c\u7248\u4f7f\u7528\u7684\u4fdd\u7559\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"150-199    \u4f9b\u7279\u5b9a\u7a0b\u5e8f\u4f7f\u7528\u7684\u4fdd\u7559\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"200-254    \u4fdd\u7559\u6bb5")),(0,l.kt)("p",null,"\u5728\u5199shell\u811a\u672c\u7684\u65f6\u5019\u9700\u8981\u6ce8\u610f\u81ea\u5b9a\u4e49\u7684\u9000\u51fa\u8fd4\u56de\u503c\u6700\u597d\u4e0d\u8981\u4e0e\u4e0a\u9762\u8868\u683c\u4e2d\u6240\u5b9a\u4e49\u7684\u91cd\u590d\uff0c\u5bf9\u4e8e\u7ba1\u7406\u4eba\u5458\u6765\u8bf4\u517b\u6210\u826f\u597d\u7684\u4e60\u60ef\u6709\u52a9\u4e8e\u9047\u5230\u9519\u8bef\u65f6\u4f5c\u51fa\u6b63\u786e\u7684\u5224\u65ad\u3002\n\u6839\u636e\u4e0a\u8868\u81f3\u5c11\u53ef\u4ee5\u5f97\u51fa\uff0c\u5728\u81ea\u5b9a\u4e49\u8fd4\u56de\u503c\u7684\u65f6\u5019\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u597d\u4e0d\u8981\u7528\u7684\uff1a0-4 126-130 255"),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u907f\u514d\u4f7f\u7528\u7684\uff1a5-99"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u968f\u610f\u4f7f\u7528\u7684\uff1a100-125 131-254")),(0,l.kt)("p",null,"\u53c2\u8003\u6587\u6863:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://tldp.org/LDP/abs/html/exitcodes.html"},"http://tldp.org/LDP/abs/html/exitcodes.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://refspecs.linux-foundation.org/LSB_4.1.0/LSB-Core-generic/LSB-Core-generic/iniscrptact.html"},"http://refspecs.linux-foundation.org/LSB_4.1.0/LSB-Core-generic/LSB-Core-generic/iniscrptact.html"))))}u.isMDXComponent=!0}}]);
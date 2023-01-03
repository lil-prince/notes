"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:9},l="\u8fd4\u56de\u4e0e\u9000\u51fa",o={unversionedId:"shell-basic/syntax-exit",id:"shell-basic/syntax-exit",title:"\u8fd4\u56de\u4e0e\u9000\u51fa",description:"bash \u811a\u672c\u4e2d\u53ef\u4ee5\u901a\u8fc7\u8fd4\u56de(return)\u548c\u9000\u51fa(exit)\u6765\u7ec8\u6b62\u6267\u884c\u6d41\u7a0b\uff0c\u5176\u4e2d return \u53ea\u80fd\u51fa\u73b0\u5728\u51fd\u6570\u4e2d\u548csource\u52a0\u8f7d\u7684\u811a\u672c\u4e2d\uff0c\u7528\u4e8e\u9000\u51fa\u51fd\u6570\u6216\u4ee3\u7801\u5757\uff1bexit \u53ef\u4ee5\u5b58\u5728\u4e8e\u4efb\u4f55\u5730\u65b9\uff0c\u7528\u4e8e\u9000\u51fa\u8fdb\u7a0b\u3002return \u548c exit \u90fd\u80fd\u4ea7\u751f\u6307\u5b9a\u7684\u8fd4\u56de\u503c\uff0c\u4e0d\u6307\u5b9a\u9ed8\u8ba4\u4e3a\u6700\u540e\u4e00\u4e2a\u547d\u4ee4\u7684\u8fd4\u56de\u503c\uff0c 0\u4ee3\u8868\u6210\u529f\uff0c \u975e0\u4ee3\u8868\u5f02\u5e38\u3002",source:"@site/docs/01-shell-basic/09-syntax-exit.md",sourceDirName:"01-shell-basic",slug:"/shell-basic/syntax-exit",permalink:"/notes/docs/shell-basic/syntax-exit",draft:!1,editUrl:"https://github.com/itxx00/notes/tree/main/docs/01-shell-basic/09-syntax-exit.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u6587\u4ef6",permalink:"/notes/docs/shell-basic/syntax-file"},next:{title:"\u606d\u559c\u4e0a\u8f66!",permalink:"/notes/docs/shell-basic/congratulations"}},s={},p=[{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u9000\u51fa",id:"\u9000\u51fa",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8fd4\u56de\u4e0e\u9000\u51fa"},"\u8fd4\u56de\u4e0e\u9000\u51fa"),(0,a.kt)("p",null,"bash \u811a\u672c\u4e2d\u53ef\u4ee5\u901a\u8fc7\u8fd4\u56de(",(0,a.kt)("inlineCode",{parentName:"p"},"return"),")\u548c\u9000\u51fa(",(0,a.kt)("inlineCode",{parentName:"p"},"exit"),")\u6765\u7ec8\u6b62\u6267\u884c\u6d41\u7a0b\uff0c\u5176\u4e2d return \u53ea\u80fd\u51fa\u73b0\u5728\u51fd\u6570\u4e2d\u548csource\u52a0\u8f7d\u7684\u811a\u672c\u4e2d\uff0c\u7528\u4e8e\u9000\u51fa\u51fd\u6570\u6216\u4ee3\u7801\u5757\uff1bexit \u53ef\u4ee5\u5b58\u5728\u4e8e\u4efb\u4f55\u5730\u65b9\uff0c\u7528\u4e8e\u9000\u51fa\u8fdb\u7a0b\u3002return \u548c exit \u90fd\u80fd\u4ea7\u751f\u6307\u5b9a\u7684\u8fd4\u56de\u503c\uff0c\u4e0d\u6307\u5b9a\u9ed8\u8ba4\u4e3a\u6700\u540e\u4e00\u4e2a\u547d\u4ee4\u7684\u8fd4\u56de\u503c\uff0c 0\u4ee3\u8868\u6210\u529f\uff0c \u975e0\u4ee3\u8868\u5f02\u5e38\u3002"),(0,a.kt)("p",null,"\u5199\u51fa\u4e00\u6bb5\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8fd0\u884c\u7684\u811a\u672c\u76f8\u5bf9\u5bb9\u6613\uff0c\u4f46\u662f\u8981\u5199\u51fa\u4e00\u6bb5\u66f4\u52a0\u5065\u58ee\u7684\u3001\u80fd\u5e94\u5bf9\u5404\u79cd\u5f02\u5e38\u60c5\u51b5\u7684\u811a\u672c\u5c31\u975e\u5e38\u8bb2\u7a76\uff0c\u8fd9\u9700\u8981\u4e0d\u65ad\u7684\u7ecf\u9a8c\u79ef\u7d2f\u4ee5\u53ca\u6b63\u786e\u7684\u5f02\u5e38\u5904\u7406\u673a\u5236\u3002"),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"\u811a\u672c\u4e2d\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\u4f1a\u6709\u4e00\u4e2a\u8fd4\u56de\u503c\uff0c\u53d6\u503c\u4e3a0-255\uff0c\u5728\u4e0d\u4f7f\u7528 return \u6216 exit \u6307\u5b9a\u8fd4\u56de\u503c\u7684\u60c5\u51b5\u4e0b\uff0c\u51fd\u6570\u548c\u811a\u672c\u7684\u8fd4\u56de\u503c\u662f\u6700\u540e\u4e00\u4e2a\u547d\u4ee4\u7684\u8fd4\u56de\u503c\u3002\u8fd4\u56de\u503c\u5b58\u50a8\u5728\u4e00\u4e2a\u7279\u6b8a\u7684\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"$?")," \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"$?"),"\u53ea\u4f1a\u8bb0\u5f55\u6700\u540e\u4e00\u4e2a\u547d\u4ee4\u7684\u8fd4\u56de\u503c\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5c06\u6b64\u53d8\u91cf\u7684\u503c\u590d\u5236\u5230\u5176\u4ed6\u53d8\u91cf\u6765\u4fdd\u5b58\u6307\u5b9a\u547d\u4ee4\u7684\u8fd4\u56de\u503c\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"date\necho $?\n\ndate\nretval=$?\necho $retval\n")),(0,a.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,a.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"test_return() {\n    date\n    data\n}\ntest_return\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u811a\u672c\u6267\u884c\u7684\u8fd4\u56de\u503c\u662f127\uff0c\u5373\u6700\u540e\u4e00\u4e2a\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\u7684\u8fd4\u56de\u503c\uff0c\u56e0\u4e3a\u547d\u4ee4\u65e0\u6548\u6240\u4ee5\u8fd4\u56de\u4e86\u975e0\u503c\uff0c\u4e0b\u9762\u662f\u81ea\u5b9a\u4e49\u8fd4\u56de\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"test_return() {\n    date\n    data\n    return 0\n}\ntest_return\n")),(0,a.kt)("p",null,"\u8fd9\u65f6\u51fd\u6570\u7684\u8fd4\u56de\u503c\u5c31\u662f\u81ea\u5b9a\u4e49\u76840\u3002"),(0,a.kt)("h2",{id:"\u9000\u51fa"},"\u9000\u51fa"),(0,a.kt)("p",null,"\u63a5\u7740\u770b\u4e00\u4e2a\u9000\u51fa\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"test_return() {\n    date\n    exit 66\n}\ntest_return\necho $?\n")),(0,a.kt)("p",null,"\u6267\u884c\u4e0a\u9762\u8fd9\u6bb5\u811a\u672c\u540e\uff0c\u6700\u540e\u4e00\u884c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"echo $?"),"\u5e76\u4e0d\u4f1a\u6267\u884c\u5230\uff0c\u56e0\u4e3a\u51fd\u6570\u4e2d\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"exit"),"\uff0c\u800c\u51fd\u6570\u7684\u6267\u884c\u662f\u5728\u6b64\u811a\u672c\u7684\u8fd0\u884c\u8fdb\u884c\u4e2d\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u5f53 exit \u89e6\u53d1\u4e86\u8fdb\u7a0b\u9000\u51fa\u65f6\u540e\u9762\u7684\u5185\u5bb9\u4e5f\u5c31\u4e0d\u4f1a\u6267\u884c\u4e86\u3002\u6240\u4ee5\u5f53\u51fd\u6570\u6267\u884c\u5b8c\u8fd8\u6709\u5176\u4ed6\u903b\u8f91\u9700\u8981\u6267\u884c\u65f6\uff0c\u5207\u5fcc\u4e0d\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"exit"),"\u800c\u5e94\u8be5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"return"),"\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c\u4e0a\u9762\u7684\u8fd9\u4e2a\u51fd\u6570\u6709\u6ca1\u6709\u529e\u6cd5\u4e0d\u6539\u53d8exit\u53c8\u4e0d\u5f71\u54cd\u540e\u7eed\u7684\u6267\u884c\u5462\uff1f\u53ef\u4ee5\u8bd5\u8bd5\u5c06\u51fd\u6570\u653e\u5230\u5b50\u8fdb\u7a0b\u4e2d\u6267\u884c\uff0c\u7c7b\u4f3c",(0,a.kt)("inlineCode",{parentName:"p"},"(test_return)"),"\u8fd9\u6837\u7528\u62ec\u53f7\u62ec\u8d77\u6765\u7684\u5185\u5bb9\u4f1a\u88ab\u653e\u5230\u5b50\u8fdb\u7a0b\u4e2d\uff0c\u5f53exit\u65f6\u53ea\u4f1a\u9000\u51fa\u5b50\u8fdb\u7a0b\u800c\u4e0d\u5f71\u54cd\u4e3b\u8fdb\u7a0b\u3002"))}u.isMDXComponent=!0}}]);
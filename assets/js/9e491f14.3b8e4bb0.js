"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,h=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4},i="\u8fd0\u7b97\u4e0e\u6d4b\u8bd5",o={unversionedId:"shell-basic/syntax-calc",id:"shell-basic/syntax-calc",title:"\u8fd0\u7b97\u4e0e\u6d4b\u8bd5",description:"bash\u4e2d\u539f\u751f\u652f\u6301\u6574\u6570\u7684\u7b97\u672f\u8fd0\u7b97\uff0c\u6d6e\u70b9\u6570\u7684\u8ba1\u7b97\u9700\u8981\u901a\u8fc7\u5916\u90e8\u547d\u4ee4\u624d\u80fd\u5b8c\u6210\uff0c\u53e6\u5916\u4e5f\u80fd\u8fdb\u884c\u5173\u7cfb\u8fd0\u7b97\u3001\u903b\u8f91\u8fd0\u7b97\u7b49\u3002",source:"@site/docs/01-shell-basic/04-syntax-calc.md",sourceDirName:"01-shell-basic",slug:"/shell-basic/syntax-calc",permalink:"/notes/docs/shell-basic/syntax-calc",draft:!1,editUrl:"https://github.com/itxx00/notes/tree/main/docs/01-shell-basic/04-syntax-calc.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u91cf\u4e0e\u6570\u636e",permalink:"/notes/docs/shell-basic/syntax-vars"},next:{title:"\u5206\u652f\u4e0e\u6761\u4ef6",permalink:"/notes/docs/shell-basic/syntax-switch"}},p={},c=[{value:"\u8fd0\u7b97",id:"\u8fd0\u7b97",level:2},{value:"\u7b97\u672f\u8fd0\u7b97",id:"\u7b97\u672f\u8fd0\u7b97",level:3},{value:"\u8fdb\u5236\u8f6c\u6362",id:"\u8fdb\u5236\u8f6c\u6362",level:3},{value:"\u903b\u8f91\u8fd0\u7b97",id:"\u903b\u8f91\u8fd0\u7b97",level:3},{value:"\u5173\u7cfb\u8fd0\u7b97",id:"\u5173\u7cfb\u8fd0\u7b97",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8fd0\u7b97\u4e0e\u6d4b\u8bd5"},"\u8fd0\u7b97\u4e0e\u6d4b\u8bd5"),(0,r.kt)("p",null,"bash\u4e2d\u539f\u751f\u652f\u6301\u6574\u6570\u7684\u7b97\u672f\u8fd0\u7b97\uff0c\u6d6e\u70b9\u6570\u7684\u8ba1\u7b97\u9700\u8981\u901a\u8fc7\u5916\u90e8\u547d\u4ee4\u624d\u80fd\u5b8c\u6210\uff0c\u53e6\u5916\u4e5f\u80fd\u8fdb\u884c\u5173\u7cfb\u8fd0\u7b97\u3001\u903b\u8f91\u8fd0\u7b97\u7b49\u3002"),(0,r.kt)("h2",{id:"\u8fd0\u7b97"},"\u8fd0\u7b97"),(0,r.kt)("p",null,"\u7b97\u672f\u8fd0\u7b97\u652f\u6301\u52a0\u51cf\u4e58\u9664\u7b49\uff0c\u4e0b\u9762\u770b\u793a\u4f8b\uff1a"),(0,r.kt)("h3",{id:"\u7b97\u672f\u8fd0\u7b97"},"\u7b97\u672f\u8fd0\u7b97"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u52a0\necho $((1+2))\n# \u51cf\necho $((1-2))\n# \u4e58\necho $((1*2))\n# \u9664\necho $((1/2))\n# \u5e42\necho $((2**3))\n# \u4f59\u6570\necho $((-7%4))\n# \u540e\u7f6e\u81ea\u52a0\necho $((a++))\n# \u524d\u7f6e\u81ea\u51cf\necho $((--a))\n# \u4e09\u5143\u64cd\u4f5c\n((c = a<=1 ? 0 : 100))\n")),(0,r.kt)("h3",{id:"\u8fdb\u5236\u8f6c\u6362"},"\u8fdb\u5236\u8f6c\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5404\u79cd\u8fdb\u5236\u8f6c10\u8fdb\u5236, echo $((base#number)), \u4f8b\u5982\uff1a\necho $((2#11))  #3\necho $((8#12)) #10\necho $((012))  #\u6216\u80050\u5f00\u5934\u4e5f\u8868\u793a8\u8fdb\u5236\necho $((16#a)) #10\necho $((0xa)) #\u6216\u80050x\u5f00\u5934\u4e5f\u8868\u793a16\u8fdb\u5236\n")),(0,r.kt)("h3",{id:"\u903b\u8f91\u8fd0\u7b97"},"\u903b\u8f91\u8fd0\u7b97"),(0,r.kt)("p",null,"bash\u4e2d\u903b\u8f91\u8fd0\u7b97\u7b26\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"||")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"!"),"\uff0c\u5206\u522b\u8868\u793a",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e0e"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u6216")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u975e"),"\uff0c\u903b\u8f91\u8fd0\u7b97\u7b26\u8fde\u63a5\u4e24\u4e2a\u547d\u4ee4\uff0c\u901a\u8fc7\u5bf9\u4e24\u4e2a\u547d\u4ee4\u7684\u8fd4\u56de\u503c\u8fdb\u884c\u8ba1\u7b97\u5e76\u5f97\u5230\u903b\u8f91\u7ed3\u679c\u3002\u4e0b\u9762\u770b\u793a\u4f8b\uff0c\u901a\u8fc7\u8fd4\u56de\u503c\u6765\u89c2\u5bdf\u903b\u8f91\u8fd0\u7b97\u7ed3\u679c\uff0c\u6ce8\u610f\u8fd4\u56de\u503c0\u8868\u793a\u6210\u529f\uff0c\u975e0\u8868\u793a\u5931\u8d25\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"true && true ; echo $?  #\u8f93\u51fa0\ntrue && false ; echo $? #\u8f93\u51fa1\nfalse && false ; echo $?  #\u8f93\u51fa1\ntrue || true ; echo $?  #\u8f93\u51fa0\ntrue || false ; echo $?  #\u8f93\u51fa0\nfalse || true ; echo $?  #\u8f93\u51fa0\nfalse || false ; echo $?  #\u8f93\u51fa1\n! true ; echo $?  #\u8f93\u51fa1\n\uff01false ; echo $?  #\u8f93\u51fa0\n")),(0,r.kt)("h3",{id:"\u5173\u7cfb\u8fd0\u7b97"},"\u5173\u7cfb\u8fd0\u7b97"),(0,r.kt)("p",null,"\u5173\u7cfb\u8fd0\u7b97\u7528\u6765\u6bd4\u8f83\u6574\u6570\u7684\u5927\u5c0f\uff0c\u5173\u7cfb\u8fd0\u7b97\u5199\u6cd5\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"[[ \u6570\u5b571 \u8fd0\u7b97\u7b26 \u6570\u5b572 ]]")," \uff0c\u4e0b\u8868\u662f\u5173\u7cfb\u8fd0\u7b97\u7b26\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8fd0\u7b97\u7b26"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8fd0\u7b97\u7b26"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u8fd0\u7b97\u7b26"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4f5c\u7528"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"-gt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5927\u4e8e"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-lt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u4e8e"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-eq"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7b49\u4e8e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"-ge"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5927\u4e8e\u7b49\u4e8e"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-le"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u4e8e\u7b49\u4e8e"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-ne"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u7b49\u4e8e")))),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd4\u56de\u503c\u6765\u89c2\u5bdf\u8fd0\u7b97\u7ed3\u679c\uff0c\u4e0b\u9762\u770b\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[[ 1 -gt 2 ]] ; echo $?  #\u8f93\u51fa1\n[[ 1 -ge 2 ]] ; echo $?  #\u8f93\u51fa1\n[[ 1 -lt 2 ]] ; echo $?  #\u8f93\u51fa0\n[[ 1 -le 2 ]] ; echo $?  #\u8f93\u51fa0\n[[ 1 -eq 2 ]] ; echo $?  #\u8f93\u51fa1\n[[ 1 -ne 2 ]] ; echo $?  #\u8f93\u51fa0\n")),(0,r.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u5bf9\u4e8e\u6574\u6570\u7684\u5173\u7cfb\u8fd0\u7b97\u5916\uff0c\u8fd8\u652f\u6301\u5f88\u591a\u5176\u4ed6\u7c7b\u578b\u7684\u6d4b\u8bd5\uff0c\u4f8b\u5982\u6d4b\u8bd5\u53d8\u91cf\u3001\u6587\u4ef6\u7b49\uff0c\u6d4b\u8bd5\u7684\u5199\u6cd5\u4e5f\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"[[ \u6d4b\u8bd5\u7b26 \u5bf9\u8c61 ]]"),"\u5e38\u7528\u7684\u6d4b\u8bd5\u89c1\u4e0b\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6d4b\u8bd5\u7b26"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4f5c\u7528"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6587\u4ef6\u662f\u5426\u5b58\u5728")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6587\u4ef6\u5927\u5c0f\u662f\u5426\u5927\u4e8e0\u5b57\u8282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5757\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u666e\u901a\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-L"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u8f6f\u94fe\u63a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-r"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u53ef\u8bfb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-w"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u53ef\u5199")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u53ef\u6267\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u7b26\u4e32\u6709\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-z"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u7b26\u4e32\u4e3a\u7a7a")))),(0,r.kt)("p",null,"\u66f4\u591a\u7684\u6d4b\u8bd5\u65b9\u6cd5\u53ef\u4ee5\u67e5\u9605",(0,r.kt)("inlineCode",{parentName:"p"},"man test"),"\u6765\u4e86\u89e3\u5230\u3002\u4e0b\u9762\u770b\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"var1=1\nvar2=''\n[[ -n $var1 ]] ; echo $? #\u8f93\u51fa0\n[[ -z $var1 ]] ; echo $? #\u8f93\u51fa1\n[[ -z $var2 ]] ; echo $? #\u8f93\u51fa0\n[[ -x /bin/bash ]] ; echo $? #\u8f93\u51fa0\n[[ -b /bin/bash ]] ; echo $? #\u8f93\u51fa1\n")))}m.isMDXComponent=!0}}]);
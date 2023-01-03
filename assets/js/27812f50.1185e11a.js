"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:2},o="\u6587\u4ef6\u63cf\u8ff0\u7b26",c={unversionedId:"shell-advanced/file-descriptor",id:"shell-advanced/file-descriptor",title:"\u6587\u4ef6\u63cf\u8ff0\u7b26",description:"\u5728\u8f93\u5165\u8f93\u51fa\u4e0e\u7ba1\u9053\u4e2d\u6211\u63d0\u5230\u8fdb\u7a0b\u6253\u5f00\u6587\u4ef6\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u4f1a\u4ea7\u751f\u6587\u4ef6\u63cf\u8ff0\u7b26\uff08file descriptor\uff0c\u7b80\u79f0fd\uff09\uff0c\u53ef\u4ee5\u7b80\u5316\u5730\u7406\u89e3\u4e3a\uff0c\u5f53\u4e00\u4e2a\u8fdb\u7a0b\u5c06\u67d0\u4e2a\u6587\u4ef6\u6253\u5f00\u65f6\uff0c\u5185\u6838\u4f1a\u628a\u8fd9\u4e2a\u6587\u4ef6\u6253\u5f00\u7684\u4fe1\u606f\u8bb0\u5f55\u5230\u4e00\u4e2a\u8868\u91cc\u9762\uff0c\u7136\u540e\u8fd4\u56de\u7ed9\u8fdb\u7a0b\u4e00\u4e2a\u6307\u5411\u8fd9\u4e2a\u6587\u4ef6\u7684\u6570\u5b57\uff0c\u8fd9\u4e2a\u6570\u5b57\u5c31\u662f\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002\u5728bash\u4e2d\u4e5f\u6709\u529e\u6cd5\u5bf9\u6587\u4ef6\u63cf\u8ff0\u7b26\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u3002",source:"@site/docs/02-shell-advanced/02-file-descriptor.md",sourceDirName:"02-shell-advanced",slug:"/shell-advanced/file-descriptor",permalink:"/notes/docs/shell-advanced/file-descriptor",draft:!1,editUrl:"https://github.com/itxx00/notes/tree/main/docs/02-shell-advanced/02-file-descriptor.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u91cf\u8fdb\u9636",permalink:"/notes/docs/shell-advanced/advanced-var"},next:{title:"\u7f51\u7edc",permalink:"/notes/docs/shell-advanced/network"}},i={},s=[{value:"\u6253\u5f00\u6587\u4ef6\u63cf\u8ff0\u7b26",id:"\u6253\u5f00\u6587\u4ef6\u63cf\u8ff0\u7b26",level:2},{value:"\u4ece\u6587\u4ef6\u63cf\u8ff0\u7b26\u8bfb\u53d6",id:"\u4ece\u6587\u4ef6\u63cf\u8ff0\u7b26\u8bfb\u53d6",level:2},{value:"\u5411\u6587\u4ef6\u63cf\u8ff0\u7b26\u5199\u5165",id:"\u5411\u6587\u4ef6\u63cf\u8ff0\u7b26\u5199\u5165",level:2},{value:"\u5173\u95ed\u6587\u4ef6\u63cf\u8ff0\u7b26",id:"\u5173\u95ed\u6587\u4ef6\u63cf\u8ff0\u7b26",level:2},{value:"\u6587\u4ef6\u63cf\u8ff0\u7b26\u4f7f\u7528\u793a\u4f8b",id:"\u6587\u4ef6\u63cf\u8ff0\u7b26\u4f7f\u7528\u793a\u4f8b",level:2}],p={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6587\u4ef6\u63cf\u8ff0\u7b26"},"\u6587\u4ef6\u63cf\u8ff0\u7b26"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"/notes/docs/shell-basic/syntax-io"},"\u8f93\u5165\u8f93\u51fa\u4e0e\u7ba1\u9053"),"\u4e2d\u6211\u63d0\u5230\u8fdb\u7a0b\u6253\u5f00\u6587\u4ef6\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u4f1a\u4ea7\u751f\u6587\u4ef6\u63cf\u8ff0\u7b26\uff08file descriptor\uff0c\u7b80\u79f0fd\uff09\uff0c\u53ef\u4ee5\u7b80\u5316\u5730\u7406\u89e3\u4e3a\uff0c\u5f53\u4e00\u4e2a\u8fdb\u7a0b\u5c06\u67d0\u4e2a\u6587\u4ef6\u6253\u5f00\u65f6\uff0c\u5185\u6838\u4f1a\u628a\u8fd9\u4e2a\u6587\u4ef6\u6253\u5f00\u7684\u4fe1\u606f\u8bb0\u5f55\u5230\u4e00\u4e2a\u8868\u91cc\u9762\uff0c\u7136\u540e\u8fd4\u56de\u7ed9\u8fdb\u7a0b\u4e00\u4e2a\u6307\u5411\u8fd9\u4e2a\u6587\u4ef6\u7684\u6570\u5b57\uff0c\u8fd9\u4e2a\u6570\u5b57\u5c31\u662f\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002\u5728bash\u4e2d\u4e5f\u6709\u529e\u6cd5\u5bf9\u6587\u4ef6\u63cf\u8ff0\u7b26\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u6253\u5f00\u6587\u4ef6\u63cf\u8ff0\u7b26"},"\u6253\u5f00\u6587\u4ef6\u63cf\u8ff0\u7b26"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\u5e76\u5206\u914d\u6307\u5b9a\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u53ea\u8bfb\u6a21\u5f0f\u6253\u5f00\nexec 3</tmp/f1\n# \u53ea\u5199\u6a21\u5f0f\u6253\u5f00\nexec 4>/tmp/f1\n# \u8bfb\u5199\u6a21\u5f0f\nexec 5<>/tmp/f1\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u89c2\u5bdf\u5f53\u524d\u8fdb\u7a0b\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6743\u9650\u770b\u5230\u4e0d\u540c\u6a21\u5f0f\u7684\u5dee\u5f02\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"open file descriptor",src:n(3015).Z,width:"1750",height:"470"})),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u81ea\u5b9a\u4e49\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u8303\u56f4\u662f3\u5230ulimit -n\u4e4b\u95f4\u7684\u503c\uff0c\u56e0\u4e3a0 1 2 \u524d\u9762\u6709\u63d0\u5230\u8fc7\u662f\u7cfb\u7edf\u4fdd\u7559\u4f5c\u4e3a\u6807\u51c6\u8f93\u5165\u3001\u8f93\u51fa\u548c\u9519\u8bef\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002\u5f53\u7136\u4e5f\u5e76\u4e0d\u662f\u8bf4\u5c31\u4e0d\u80fd\u78b0\u8fd9\u4e09\u4e2a\uff0c\u5982\u679c\u5f3a\u5236\u8986\u76d6\u8fd9\u4e09\u4e2abash\u8fdb\u7a0b\u5df2\u7ecf\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u5e76\u6307\u5411\u5176\u4ed6\u6587\u4ef6\uff0c\u5219\u4f1a\u5bf9\u8f93\u5165\u8f93\u51fa\u9020\u6210\u5f71\u54cd\u3002"),(0,a.kt)("h2",{id:"\u4ece\u6587\u4ef6\u63cf\u8ff0\u7b26\u8bfb\u53d6"},"\u4ece\u6587\u4ef6\u63cf\u8ff0\u7b26\u8bfb\u53d6"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u53ef\u4ee5\u4ece\u6587\u4ef6\u63cf\u8ff0\u7b26\u8bfb\u53d6\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"exec 3</etc/passwd\n# \u4e00\u6b21\u6027\u5168\u90e8\u8bfb\u51fa\ncat <&3\n\u6216\u8005\u9010\u884c\u8bfb\u51fa\nexec 3</etc/passwd\nwhile read -u 3 line; do\n    echo $line\ndone\n\n")),(0,a.kt)("h2",{id:"\u5411\u6587\u4ef6\u63cf\u8ff0\u7b26\u5199\u5165"},"\u5411\u6587\u4ef6\u63cf\u8ff0\u7b26\u5199\u5165"),(0,a.kt)("p",null,"\u5199\u5165\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"exec 3>/tmp/f1\n# \u6807\u51c6\u8f93\u51fa\u5199\u51653\u53f7fd\ndate >&3\n# \u6807\u51c6\u9519\u8bef\u5199\u51653\u53f7fd\ndata 2>&3\n")),(0,a.kt)("p",null,"\u770b\u5230\u8fd9\u91cc\u5c31\u80fdget\u5230\uff0c\u5e38\u7528\u4e8e\u6807\u51c6\u9519\u8bef\u91cd\u5b9a\u5411\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"2>&1")," \u5c31\u662f\u5bf9\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u64cd\u4f5c\u3002 "),(0,a.kt)("h2",{id:"\u5173\u95ed\u6587\u4ef6\u63cf\u8ff0\u7b26"},"\u5173\u95ed\u6587\u4ef6\u63cf\u8ff0\u7b26"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u5173\u95ed\u4e00\u4e2a\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"exec 3<&-\n# \u6216\u8005\nexec 3>&-\n")),(0,a.kt)("h2",{id:"\u6587\u4ef6\u63cf\u8ff0\u7b26\u4f7f\u7528\u793a\u4f8b"},"\u6587\u4ef6\u63cf\u8ff0\u7b26\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("p",null,"\u901a\u8fc7\u6587\u4ef6\u63cf\u8ff0\u7b26\u6765\u64cd\u4f5c\u6587\u4ef6\u5bf9\u6bd4\u5e38\u7528\u7684\u5404\u79cd\u547d\u4ee4\u76f4\u63a5\u64cd\u4f5c\u6587\u4ef6\u6700\u5927\u7684\u4e0d\u540c\u662f\u6587\u4ef6\u63cf\u8ff0\u7b26\u4e00\u65e6\u4ea7\u751f\u5219\u6587\u4ef6\u5c31\u662f\u4e00\u76f4\u5904\u4e8e\u6253\u5f00\u72b6\u6001\u7684\uff0c\u5982\u679c\u9700\u8981\u6765\u6765\u56de\u56de\u5bf9\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\u53c8\u60f3\u907f\u514d\u91cd\u590d\u6253\u5f00\u5173\u95ed\u7684\u5f00\u9500\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u6587\u4ef6\u63cf\u8ff0\u7b26\u6765\u64cd\u4f5c\uff0c\u4e0b\u9762\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'exec 3<>/dev/tcp/baidu.com/80\necho -e "GET / HTTP/1.1\\r\\nHost: baidu.com\\r\\nConnection: close\\r\\n\\r\\n" >&3\ncat <&3\n')),(0,a.kt)("p",null,"\u793a\u4f8b\u4e2d\u901a\u8fc7\u6587\u4ef6\u63cf\u8ff0\u7b26\u6253\u5f00\u4e86\u4e00\u4e2a\u5230baidu.com\u4e3b\u673atcp 80\u7aef\u53e3\u7684\u6587\u4ef6\uff0c\u6b64\u65f6\u5c31\u5efa\u7acb\u4e86\u4e00\u4e2atcp\u94fe\u63a5\uff0c\u7d27\u63a5\u7740\u5411\u8fd9\u4e2a\u5df2\u7ecf\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u5199\u5165\u4e86\u4e00\u4e2aHTTP\u8bf7\u6c42\u7684\u660e\u6587\u5373\u662f\u53d1\u9001\u8bf7\u6c42\uff0c\u7136\u540e\u901a\u8fc7\u8bfb\u53d6\u6587\u4ef6\u63cf\u8ff0\u7b26\u53d6\u5f97\u5bf9\u5e94\u7684\u54cd\u5e94\u5185\u5bb9\uff0c\u4e0d\u51fa\u610f\u5916\u7684\u8bdd\u4e0a\u9762\u7684\u8bf7\u6c42\u5c06\u4f1a\u5f97\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'HTTP/1.1 200 OK\nDate: Mon, 03 Oct 2022 16:11:24 GMT\nServer: Apache\nLast-Modified: Tue, 12 Jan 2010 13:48:00 GMT\nContent-Length: 81\nCache-Control: max-age=86400\nExpires: Tue, 04 Oct 2022 16:11:24 GMT\nConnection: Close\nContent-Type: text/html\n\n<html>\n<meta http-equiv="refresh" content="0;url=http://www.baidu.com/">\n</html>\n')))}d.isMDXComponent=!0},3015:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fd1-b5d77c0e1798a2d1f6bf3b9ce121d8e7.png"}}]);
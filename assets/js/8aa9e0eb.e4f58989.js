"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[360],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9313:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:7},i="\u8f93\u5165\u8f93\u51fa\u4e0e\u7ba1\u9053",p={unversionedId:"shell-basic/syntax-io",id:"shell-basic/syntax-io",title:"\u8f93\u5165\u8f93\u51fa\u4e0e\u7ba1\u9053",description:"\u672c\u8282\u6211\u4eec\u719f\u6089bash\u4e2d\u7684\u8f93\u5165\u8f93\u51fa\u548c\u7ba1\u9053\u7684\u64cd\u4f5c\u3002",source:"@site/docs/01-shell-basic/07-syntax-io.md",sourceDirName:"01-shell-basic",slug:"/shell-basic/syntax-io",permalink:"/notes/docs/shell-basic/syntax-io",draft:!1,editUrl:"https://github.com/itxx00/notes/tree/main/docs/01-shell-basic/07-syntax-io.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u5faa\u73af",permalink:"/notes/docs/shell-basic/syntax-loop"},next:{title:"\u6587\u4ef6",permalink:"/notes/docs/shell-basic/syntax-file"}},o={},s=[{value:"\u6807\u51c6\u8f93\u5165\u8f93\u51fa",id:"\u6807\u51c6\u8f93\u5165\u8f93\u51fa",level:2},{value:"\u91cd\u5b9a\u5411",id:"\u91cd\u5b9a\u5411",level:2},{value:"\u7ba1\u9053",id:"\u7ba1\u9053",level:2}],d={toc:s};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8f93\u5165\u8f93\u51fa\u4e0e\u7ba1\u9053"},"\u8f93\u5165\u8f93\u51fa\u4e0e\u7ba1\u9053"),(0,r.kt)("p",null,"\u672c\u8282\u6211\u4eec\u719f\u6089bash\u4e2d\u7684\u8f93\u5165\u8f93\u51fa\u548c\u7ba1\u9053\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u6807\u51c6\u8f93\u5165\u8f93\u51fa"},"\u6807\u51c6\u8f93\u5165\u8f93\u51fa"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2abash\u8fdb\u7a0b\u542f\u52a8\u7684\u65f6\u5019\u4f1a\u4ea7\u751f\u4e00\u4e2a\u8fdb\u7a0bid\u5373pid\uff0c\u6bcf\u4e2apid\u4e0b\u9762\u4f1a\u6253\u5f00\u82e5\u5e72\u6587\u4ef6\uff0c\u4e00\u4e2a\u6587\u4ef6\u5bf9\u5e94\u4e00\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u7531\u4e00\u4e2a\u6570\u5b57\u8868\u793a\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4fdd\u7559\u6709\u4e09\u4e2a\u7279\u6b8a\u542b\u4e49\u7684\u6570\u5b570\u30011\u30012\uff0c\u5206\u522b\u8868\u793a\u6807\u51c6\u8f93\u5165(stdin)\uff0c\u6807\u51c6\u8f93\u51fa(stdout)\u548c\u6807\u51c6\u9519\u8bef(stderr)\uff0c\u5f53\u542f\u52a8\u4e00\u4e2abash\u8fdb\u7a0b\u7684\u65f6\u5019\u4ee5\u4e0a\u4e09\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\u9ed8\u8ba4\u6253\u5f00\uff0c\u5982\u679c\u6211\u4eec\u8981\u6253\u5f00\u65b0\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u800c\u53c8\u4e0d\u548c\u8fd9\u4e09\u4e2a\u51b2\u7a81\u7684\u8bdd\u5c31\u9700\u8981\u4ece3\u5f00\u59cb\u3002bash\u4e2d\u9ed8\u8ba4\u7684\u6807\u51c6\u8f93\u5165\u662f\u952e\u76d8\uff0c\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u662f\u5c4f\u5e55\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u6807\u51c6\u8f93\u5165\u8f93\u51fa\u8fdb\u884c\u91cd\u5b9a\u5411\u3002\n\u4e0b\u9762\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6765\u4e86\u89e3bash\u4e2d\u5982\u4f55\u64cd\u4f5c\u8f93\u5165\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ece\u952e\u76d8\u83b7\u53d6\u8f93\u5165\uff0c\u8d4b\u503c\u5230\u53d8\u91cfstr1\nread -p 'input plz: ' str1\n# \u5c06\u53d8\u91cf\u503c\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\necho $str1\n# \u5c06\u53d8\u91cf\u503c\u8f93\u51fa\u5230\u6807\u51c6\u9519\u8bef\necho $str1 >&2\n")),(0,r.kt)("p",null,"\u770b\u4e00\u4e0b\u6267\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"io",src:n(3341).Z,width:"1002",height:"236"})),(0,r.kt)("p",null,"\u4ee5\u4e0a\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"echo"),"\u547d\u4ee4\u6f14\u793a\u4e86\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u64cd\u4f5c\u6807\u51c6\u8f93\u5165\u3001\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u3002"),(0,r.kt)("h2",{id:"\u91cd\u5b9a\u5411"},"\u91cd\u5b9a\u5411"),(0,r.kt)("p",null,"\u8f93\u5165\u3001\u8f93\u51fa\u90fd\u652f\u6301\u91cd\u5b9a\u5411\uff0c\u610f\u601d\u662f\u8f93\u5165\u4e0d\u7528\u952e\u76d8\u800c\u6539\u7528\u5176\u4ed6\u7684\uff0c\u8f93\u51fa\u4e5f\u4e0d\u5230\u5c4f\u5e55\u4e86\u800c\u662f\u8f93\u51fa\u5230\u522b\u7684\u5730\u65b9\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"date >/dev/null\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u628adate\u547d\u4ee4\u7684\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u4e86null\u9ed1\u6d1e\u6587\u4ef6\uff0c\u8fd9\u6837\u5c4f\u5e55\u4e0a\u5c31\u4e0d\u4f1a\u8f93\u51fa\u4e86\u3002"),(0,r.kt)("p",null,"\u91cd\u5b9a\u5411\u7b26\u53f7 ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},">")," \u4e0e\u8f93\u5165\u8f93\u51fa\u7684\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\u8868\u6240\u793a\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6807\u51c6\u6587\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6587\u4ef6\u63cf\u8ff0\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u91cd\u5b9a\u5411\u7b26\u53f7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stdin"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"<")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stdout"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stderr"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"2>")))),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},">")," \u9ed8\u8ba4\u4e0d\u5e26\u6570\u5b57\u5c31\u6807\u51c6\u8f93\u51fa\uff0c\u6240\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"1>")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u53ef\u4ee5\u7701\u7565\u3002\u9664\u4e86\u6b64\u4ee5\u5916\u8fd8\u6709\u66f4\u591a\u7684\u91cd\u5b9a\u5411\u7b26\u53f7\uff0c\u5e38\u89c1\u7684\u6709\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7b26\u53f7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u6a21\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">>"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ffd\u52a0\u6a21\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&>"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u65f6\u91cd\u5b9a\u5411\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\uff0c\u8986\u76d6\u6a21\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&>>"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a\uff0c\u8ffd\u52a0\u6a21\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2>&1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u51c6\u9519\u8bef\u91cd\u5b9a\u5411\u5230\u6807\u51c6\u8f93\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">&2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u91cd\u5b9a\u5411\u6807\u51c6\u8f93\u51fa\u5230\u6807\u51c6\u9519\u8bef")))),(0,r.kt)("p",null,"\u4e0b\u9762\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nlog() {\n    echo "$*" >>a.log\n}\n\nlog "$(date)"\nlog "$(data 2>&1)"\n')),(0,r.kt)("p",null,"\u6267\u884c\u770b\u4e0b\u6548\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"redirect",src:n(7340).Z,width:"987",height:"196"})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230log\u51fd\u6570\u628a\u8f93\u5165\u91cd\u5b9a\u5411\u5230a.log\u6587\u4ef6\uff0c\u7b2c\u4e00\u884clog\u628adate\u547d\u4ee4\u7684\u6807\u51c6\u8f93\u51fa\u8bb0\u5f55\u4e0b\u6765\uff0c\u7b2c\u4e8c\u884clog\u540e\u9762\u56e0\u4e3a\u6267\u884c\u7684\u4e00\u4e2a\u65e0\u6548\u7684\u547d\u4ee4\uff0c\u56e0\u6b64\u4f1a\u4ea7\u751f\u6807\u51c6\u9519\u8bef\uff0c\u4f7f\u7528\u4e86\u91cd\u5b9a\u5411\u628a\u5b83\u8f93\u51fa\u5230\u4e86\u6807\u51c6\u8f93\u51fa\uff0c\u5426\u5219\u4f1a\u76f4\u63a5\u8f93\u51fa\u5230\u5c4f\u5e55\u3002"),(0,r.kt)("h2",{id:"\u7ba1\u9053"},"\u7ba1\u9053"),(0,r.kt)("p",null,"\u8bb2\u5230\u8f93\u5165\u8f93\u51fa\u5c31\u4e0d\u5f97\u4e0d\u63d0\u53ca\u7ba1\u9053\uff0c\u7ba1\u9053\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," \u7528\u4e8e\u8fde\u63a5\u4e24\u4e2a\u547d\u4ee4\u4f7f\u5f97\u7ba1\u9053\u5de6\u8fb9\u547d\u4ee4\u7684\u6807\u51c6\u8f93\u51fa\u4f5c\u4e3a\u7ba1\u9053\u540e\u8fb9\u547d\u4ee4\u7684\u6807\u51c6\u8f93\u5165\u3002\u7ba1\u9053\u5728bash\u811a\u672c\u7f16\u7a0b\u4e2d\u4f1a\u7ecf\u5e38\u7528\u5230\uff0c\u56e0\u4e3a\u5f88\u591a\u5e38\u7528\u547d\u4ee4\u90fd\u80fd\u63a5\u6536\u6807\u51c6\u8f93\u5165\uff0c\u901a\u8fc7\u7ba1\u9053\u8fde\u63a5\u4e0d\u540c\u7684\u547d\u4ee4\u7ec4\u5408\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u628a\u4e0d\u540c\u7684\u201c\u96f6\u90e8\u4ef6\u201d\u62fc\u63a5\u6210\u5404\u5f0f\u5404\u6837\u7684\u529f\u80fd\u6a21\u5757\u3002\u4e0b\u9762\u901a\u8fc7\u4f8b\u5b50\u611f\u53d7\u4e0b\u7ba1\u9053\u7684\u7528\u9014\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8f93\u51fa\u78c1\u76d8\u4f7f\u7528\u767e\u5206\u6bd4\u6700\u5927\u7684\u6302\u8f7d\u70b9\ndf -P | sort -n -k5 | tail -1 | awk '{print $NF}'\n# \u6740\u6b7b\u6240\u6709\u542bhttpd\u5173\u952e\u5b57\u7684\u8fdb\u7a0b\nps -ef | grep httpd | grep -v grep | awk '{print $2}' | xargs kill\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u901a\u8fc7\u7ba1\u9053\u8fde\u63a5\u591a\u4e2a\u547d\u4ee4\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u8fdb\u884c\u4e00\u7cfb\u5217\u7684\u7ec4\u5408\u64cd\u4f5c\uff0c\u800c\u4e0d\u9700\u8981\u518d\u5355\u72ec\u7ba1\u7406\u6bcf\u4e2a\u547d\u4ee4\u7684\u8f93\u51fa\uff0c\u8fd9\u6781\u5927\u63d0\u5347\u4e86\u7ec4\u5408\u62fc\u88c5\u7684\u6548\u7387\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u7ba1\u9053\u7b26",(0,r.kt)("inlineCode",{parentName:"p"},"|"),"\u9ed8\u8ba4\u53ea\u80fd\u5f80\u53f3\u8fb9\u4f20\u6807\u51c6\u8f93\u51fa\uff0c\u800c\u60f3\u8981\u628a\u6807\u51c6\u9519\u8bef\u4e5f\u4e00\u8d77\u4f20\u8fc7\u53bb\u5219\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"|&"),"  \uff0c\u6216\u8005\u63d0\u524d\u5c06\u6807\u51c6\u9519\u8bef\u91cd\u5b9a\u5411\u5230\u6807\u51c6\u8f93\u51fa\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u7f8e\u5973 |& \u91ce\u517d\n\u7f8e\u5973 2>&1 | \u91ce\u517d\n")))}u.isMDXComponent=!0},3341:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/io-e85e8c348de01db828293fd4e9e99e39.png"},7340:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/redirect-c20b7ab275107a254450b2e6ea5db98c.png"}}]);
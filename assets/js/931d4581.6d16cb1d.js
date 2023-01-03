"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1844],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,b=u["".concat(s,".").concat(d)]||u[d]||f[d]||l;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:8},i="\u6587\u4ef6",o={unversionedId:"shell-basic/syntax-file",id:"shell-basic/syntax-file",title:"\u6587\u4ef6",description:"\u672c\u8282\u5f00\u59cb\u4ecb\u7ecd\u6587\u4ef6\u7684\u8bfb\u5199\u64cd\u4f5c\u3002\u5728linux\u91cc\uff0c\u51e0\u4e4e\u6240\u6709\u4e1c\u897f\u90fd\u88ab\u8bbe\u8ba1\u6210\u6587\u4ef6\u7cfb\u7edf\uff0c\u6211\u4eec\u80fd\u5728\u7528\u6237\u7a7a\u95f4\u901a\u8fc7\u6587\u4ef6\u63a5\u53e3\u7684\u65b9\u5f0f\u6765\u64cd\u4f5c\u8fdb\u7a0b\uff0c\u8c03\u6574\u5185\u6838\uff0c\u64cd\u4f5c\u8bbe\u5907\uff0c\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\u7b49\u3002",source:"@site/docs/01-shell-basic/08-syntax-file.md",sourceDirName:"01-shell-basic",slug:"/shell-basic/syntax-file",permalink:"/notes/docs/shell-basic/syntax-file",draft:!1,editUrl:"https://github.com/itxx00/notes/tree/main/docs/01-shell-basic/08-syntax-file.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u8f93\u5165\u8f93\u51fa\u4e0e\u7ba1\u9053",permalink:"/notes/docs/shell-basic/syntax-io"},next:{title:"\u8fd4\u56de\u4e0e\u9000\u51fa",permalink:"/notes/docs/shell-basic/syntax-exit"}},s={},c=[{value:"\u6587\u4ef6\u5206\u7c7b",id:"\u6587\u4ef6\u5206\u7c7b",level:2},{value:"\u521b\u5efa\u5220\u9664\u6587\u4ef6",id:"\u521b\u5efa\u5220\u9664\u6587\u4ef6",level:2},{value:"\u8bfb\u53d6\u6587\u4ef6",id:"\u8bfb\u53d6\u6587\u4ef6",level:2},{value:"\u5176\u4ed6\u6587\u4ef6\u64cd\u4f5c",id:"\u5176\u4ed6\u6587\u4ef6\u64cd\u4f5c",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6587\u4ef6"},"\u6587\u4ef6"),(0,a.kt)("p",null,"\u672c\u8282\u5f00\u59cb\u4ecb\u7ecd\u6587\u4ef6\u7684\u8bfb\u5199\u64cd\u4f5c\u3002\u5728linux\u91cc\uff0c\u51e0\u4e4e\u6240\u6709\u4e1c\u897f\u90fd\u88ab\u8bbe\u8ba1\u6210\u6587\u4ef6\u7cfb\u7edf\uff0c\u6211\u4eec\u80fd\u5728\u7528\u6237\u7a7a\u95f4\u901a\u8fc7\u6587\u4ef6\u63a5\u53e3\u7684\u65b9\u5f0f\u6765\u64cd\u4f5c\u8fdb\u7a0b\uff0c\u8c03\u6574\u5185\u6838\uff0c\u64cd\u4f5c\u8bbe\u5907\uff0c\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\u7b49\u3002"),(0,a.kt)("h2",{id:"\u6587\u4ef6\u5206\u7c7b"},"\u6587\u4ef6\u5206\u7c7b"),(0,a.kt)("p",null,"linux\u7cfb\u7edf\u4e2d\u6587\u4ef6\u53ef\u4ee5\u5206\u4e3a\u5b57\u7b26\u8bbe\u5907(character)\u3001\u5757\u8bbe\u5907(block)\u3001\u76ee\u5f55(directory)\u3001\u8f6f\u94fe\u63a5(symbolic link)\u3001\u6709\u540d\u7ba1\u9053(named pipe)\u3001socket\u6587\u4ef6\u3001\u666e\u901a\u6587\u4ef6(regular)\u7b49\uff0c\u5176\u4e2d\u666e\u901a\u6587\u4ef6\u53c8\u53ef\u4ee5\u5927\u81f4\u5206\u4e3a\u53ef\u6267\u884c\u7684\u4e8c\u8fdb\u5236\u3001\u52a8\u6001\u5e93\u3001\u538b\u7f29\u6587\u4ef6\u3001\u6587\u672c\u6587\u4ef6\u3001\u7a7a\u6587\u4ef6\u3001\u5404\u79cd\u7279\u5b9a\u683c\u5f0f\u6570\u636e\u6587\u4ef6\u7b49\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"file"),"\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u7684\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528bash\u5185\u7f6e\u7684\u6d4b\u8bd5\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"test"),"\u547d\u4ee4\u6765\u5224\u65ad\u6587\u4ef6\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"file /bin/bash\n[[ -f /bin/bash ]]\n")),(0,a.kt)("h2",{id:"\u521b\u5efa\u5220\u9664\u6587\u4ef6"},"\u521b\u5efa\u5220\u9664\u6587\u4ef6"),(0,a.kt)("p",null,"\u521b\u5efa\u548c\u5220\u9664\u6587\u4ef6\u65b9\u6cd5\u5f88\u591a\uff0c\u4e0d\u540c\u7684\u7279\u6b8a\u6587\u4ef6\u6709\u4e0d\u540c\u7684\u521b\u5efa\u65b9\u5f0f\uff0c\u540e\u9762\u4f1a\u6709\u5185\u5bb9\u9010\u6b65\u4ecb\u7ecd\uff0c\u8fd9\u91cc\u5148\u770b\u6700\u7b80\u5355\u7684\u521b\u5efa\u5220\u9664\u666e\u901a\u6587\u4ef6\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\ntouch file1\n# \u6216\u8005\n>file1\n# \u5220\u9664\nrm file1\n# \u6216\u8005\nunlink file1\n")),(0,a.kt)("h2",{id:"\u8bfb\u53d6\u6587\u4ef6"},"\u8bfb\u53d6\u6587\u4ef6"),(0,a.kt)("p",null,"\u8981\u4ece\u6587\u4ef6\u91cc\u9762\u8bfb\u53d6\u5185\u5bb9\u65b9\u6cd5\u4e5f\u5f88\u591a\uff0c\u8fd9\u91cc\u8fd8\u662f\u4ece\u7b80\u5355\u7684\u5f00\u59cb\u5165\u624b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u8bfb\u53d6\u6574\u4e2a\u6587\u4ef6\ncat /etc/passwd\n# \u6216\u8005\necho "$(</etc/passwd)"\n# \u8bfb\u7b2c\u4e00\u884c\nhead -1 /etc/passwd\n# \u8bfb\u7b2c\u4e00\u4e2a\u5b57\u7b26\nhead -c1 /etc/passwd\n# \u8bfb\u6700\u540e\u4e00\u884c\ntail -1 /etc/passwd\n# \u8bfb\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\ntail -c1 /etc/passwd\n``\n\n## \u5199\u5165\u6587\u4ef6\n\u5199\u5165\u6587\u4ef6\u53ef\u4ee5\u5206\u4ea4\u4e92\u5f0f\u548c\u975e\u4ea4\u4e92\u5f0f\u7684\uff0c\u4ea4\u4e92\u5f0f\u5199\u5165\u6700\u5e38\u89c1\u7684\u65b9\u5f0f\u662f\u901a\u8fc7\u7f16\u8f91\u5668\u5982vi\u7b49\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\uff0c\u8f93\u5165\u5185\u5bb9\u7136\u540e\u4fdd\u5b58\u3002\u975e\u4ea4\u4e92\u5f0f\u7684\u5199\u5165\u6700\u5e38\u89c1\u7684\u662f\u5c06\u6807\u51c6\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6587\u4ef6\u3002\u4f8b\u5982\uff1a\n```bash\n# \u8986\u76d6\u5199\necho "hi" >file1\n# \u8ffd\u52a0\u5199\necho "hi" >>file1\n\n# \u4f7f\u7528tee\u5199\u5165\necho "hi" | tee file1\n# \u4f7f\u7528dd\u5199\u5165\ndd of=file1 <<<"hi"\n')),(0,a.kt)("h2",{id:"\u5176\u4ed6\u6587\u4ef6\u64cd\u4f5c"},"\u5176\u4ed6\u6587\u4ef6\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u79fb\u52a8\nmv file1 file2\n# \u590d\u5236\ncp file1 file2\n# \u6279\u91cf\u91cd\u547d\u540d\nrename .log .txt *.log\n# \u5408\u5e76\ncat file1 file2 >file3\n# \u62c6\u5206\nsplit file1\n# \u538b\u7f29\ntar czf file.tar.gz file*\n# \u89e3\u538b\ntar xf file.tar.gz\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),k=u(n),m=i,d=k["".concat(o,".").concat(m)]||k[m]||c[m]||r;return n?l.createElement(d,p(p({ref:t},s),{},{components:n})):l.createElement(d,p({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=k;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var u=2;u<r;u++)p[u]=n[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var l=n(7462),i=(n(7294),n(3905));const r={layout:"post",title:"NGINX\u6027\u80fd\u8c03\u4f18\u7b80\u8981",description:"",categories:["system"],tags:["nginx","performance"]},p=void 0,a={permalink:"/notes/zh-Hans/blog/2014/10/19/nginx-perf-tun",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2014-10-19-nginx-perf-tun.md",source:"@site/blog/2014-10-19-nginx-perf-tun.md",title:"NGINX\u6027\u80fd\u8c03\u4f18\u7b80\u8981",description:"",date:"2014-10-19T00:00:00.000Z",formattedDate:"2014\u5e7410\u670819\u65e5",tags:[{label:"nginx",permalink:"/notes/zh-Hans/blog/tags/nginx"},{label:"performance",permalink:"/notes/zh-Hans/blog/tags/performance"}],readingTime:12.605,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"NGINX\u6027\u80fd\u8c03\u4f18\u7b80\u8981",description:"",categories:["system"],tags:["nginx","performance"]},prevItem:{title:"CENTOS7\u7ba1\u7406\u4e4b\u52a8\u6001\u9632\u706b\u5899FIREWALLD",permalink:"/notes/zh-Hans/blog/2015/01/03/centos7-firewalld-basic"},nextItem:{title:"shell\u811a\u672ccoding style\u603b\u7ed3",permalink:"/notes/zh-Hans/blog/2014/05/23/bash-shell-coding-style"}},o={authorsImageUrls:[]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"Linux \u914d\u7f6e",id:"linux-\u914d\u7f6e",level:2},{value:"Backlog Queue",id:"backlog-queue",level:3},{value:"File Descriptors",id:"file-descriptors",level:3},{value:"Ephemeral ports",id:"ephemeral-ports",level:3},{value:"NGINX \u914d\u7f6e",id:"nginx-\u914d\u7f6e",level:2},{value:"Worker Processes",id:"worker-processes",level:3},{value:"Keepalives",id:"keepalives",level:3},{value:"Access Logging",id:"access-logging",level:3},{value:"Sendfile",id:"sendfile",level:3},{value:"Limits",id:"limits",level:3},{value:"\u5176\u4ed6\u8bbe\u7f6e",id:"\u5176\u4ed6\u8bbe\u7f6e",level:2},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",level:3},{value:"\u538b\u7f29",id:"\u538b\u7f29",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u662f\u6570\u5929\u524dNGINX\u5b98\u65b9\u535a\u5ba2\u53d1\u8868\u7684\u4e00\u7bc7\u6709\u5173nginx\u6027\u80fd\u4f18\u5316\u7684\u6587\u7ae0\uff0c\u5185\u5bb9\u7b80\u660e\u627c\u8981\uff0c\u503c\u5f97\u4e00\u8bfb\u3002\u8bd1\u6587\u5728\u539f\u6587\u57fa\u7840\u4e0a\u7565\u6709\u53d8\u52a8\uff0c\u5982\u6709\u4e0d\u8db3\uff0c\u6b22\u8fce\u6307\u6b63\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"NGINX\u4f5c\u4e3a\u4e00\u6b3e\u9ad8\u6027\u80fd\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u7f13\u5b58\u548cweb\u670d\u52a1\u5668\u88ab\u5927\u5bb6\u6240\u719f\u77e5\uff0c\u4e3a\u5168\u4e16\u754c40%\u7684\u7f51\u7ad9\u63d0\u4f9b\u7740\u670d\u52a1\u3002NGINX\u548cLinux\u7cfb\u7edf\u4e2d\u7684\u5927\u591a\u6570\u9ed8\u8ba4\u914d\u7f6e\u5bf9\u666e\u901a\u5e94\u7528\u6765\u8bf4\u5df2\u7ecf\u5f88\u5408\u9002\uff0c\u7136\u800c\u8981\u60f3\u8fbe\u5230\u66f4\u9ad8\u7684\u6027\u80fd\u4ee5\u5e94\u5bf9\u9ad8\u8d1f\u8f7d\u573a\u666f\u90a3\u4e48\u4e00\u4e9b\u6027\u80fd\u4f18\u5316\u662f\u5fc5\u987b\u7684\u3002\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4f1a\u63a2\u8ba8\u4e00\u4e9b\u5728\u6027\u80fd\u8c03\u4f18\u65f6\u6d89\u53ca\u5230\u7684NGINX\u548cLinux\u7cfb\u7edf\u53c2\u6570\u3002\u5f53\u7136\u53ef\u4f9b\u8c03\u8282\u7684\u53c2\u6570\u4f17\u591a\uff0c\u6211\u4eec\u8fd9\u91cc\u53ea\u4f1a\u6d89\u53ca\u90e8\u5206\u5bf9\u5927\u591a\u6570\u7528\u6237\u6765\u8bf4\u88ab\u4f7f\u7528\u6700\u591a\u7684\u3002\u5176\u4ed6\u6ca1\u6709\u88ab\u6d89\u53ca\u5230\u7684\u53c2\u6570\u591a\u662f\u9700\u8981\u5bf9\u7cfb\u7edf\u6709\u6df1\u5165\u4e86\u89e3\u4e4b\u540e\u624d\u9700\u8981\u63a5\u89e6\u5230\u7684\u3002"),(0,i.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"\u6211\u4eec\u5047\u5b9a\u6b64\u6587\u8bfb\u8005\u5bf9NGINX\u7684\u57fa\u672c\u67b6\u6784\u548c\u914d\u7f6e\u6709\u4e00\u5b9a\u4e86\u89e3\uff0c\u6b64\u6587\u4e0d\u4f1a\u91cd\u590dNGINX\u6587\u6863\u4e2d\u7684\u5185\u5bb9\uff0c\u5982\u6709\u6d89\u53ca\u6211\u4eec\u4ec5\u4f1a\u7ed9\u51fa\u94fe\u63a5\u3002"),(0,i.kt)("p",null,"\u5728\u505a\u6027\u80fd\u8c03\u4f18\u65f6\u4e00\u4e2a\u6700\u4f73\u5b9e\u8df5\u662f\u4e00\u6b21\u53ea\u52a8\u4e00\u4e2a\u53c2\u6570\uff0c\u5982\u679c\u8c03\u6574\u540e\u672a\u8fbe\u5230\u9884\u671f\u6548\u679c\uff0c\u5219\u5c06\u5176\u4fee\u6539\u56de\u521d\u59cb\u503c\u3002\u6211\u4eec\u5c06\u4eceLinux\u7cfb\u7edf\u7684\u4e00\u4e9b\u53c2\u6570\u5f00\u59cb\u8bb2\u8d77\uff0c\u8fd9\u4e9b\u53c2\u6570\u5c06\u5bf9\u540e\u7eed\u7684NGINX\u914d\u7f6e\u8c03\u6574\u6709\u7740\u81f3\u5173\u91cd\u8981\u7684\u4f5c\u7528\u3002"),(0,i.kt)("h2",{id:"linux-\u914d\u7f6e"},"Linux \u914d\u7f6e"),(0,i.kt)("p",null,"\u73b0\u4ee3Linux\u5185\u6838\uff082.6+\uff09\u4e2d\u7684\u5f88\u591a\u53c2\u6570\u8bbe\u7f6e\u90fd\u662f\u5341\u5206\u5230\u4f4d\u7684\uff0c\u4f46\u662f\u4ecd\u7136\u6709\u4e00\u4e9b\u662f\u9700\u8981\u6211\u4eec\u8fdb\u884c\u8c03\u6574\u7684\u3002\u5982\u679c\u4e00\u4e9b\u9ed8\u8ba4\u7684\u503c\u8bbe\u7f6e\u5f97\u592a\u5c0f\uff0c\u90a3\u4e48\u5728\u5185\u6838\u65e5\u5fd7\u4e2d\u5c06\u8bb0\u5f55\u7740\u9519\u8bef\u4fe1\u606f\uff0c\u8fd9\u9884\u793a\u7740\u6211\u4eec\u9700\u8981\u5bf9\u5176\u4e2d\u4e00\u4e9b\u53c2\u6570\u8fdb\u884c\u8c03\u6574\u4e86\u3002\u5728\u4f17\u591a\u9009\u9879\u5f53\u4e2d\u6211\u4eec\u53ea\u4f1a\u6d89\u53ca\u5230\u5bf9\u5927\u591a\u6570\u8d1f\u8f7d\u573a\u666f\u90fd\u5b9e\u7528\u7684\uff0c\u8bf7\u53c2\u8003Linux\u7cfb\u7edf\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u6709\u5173\u8fd9\u4e9b\u9009\u9879\u7684\u7ec6\u8282\u3002"),(0,i.kt)("h3",{id:"backlog-queue"},"Backlog Queue"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u8bbe\u7f6e\u4e0e\u7f51\u7edc\u8fde\u63a5\u548c\u8fde\u63a5\u961f\u5217\u6709\u76f4\u63a5\u5173\u8054\u3002\u5982\u679c\u4f60\u6709\u5927\u91cf\u7684\u63a5\u5165\u8bf7\u6c42\uff0c\u4e14\u5076\u5c14\u51fa\u73b0\u4e00\u4e9b\u5931\u6548\u8bf7\u6c42\u7684\u8bdd\uff0c\u90a3\u4e48\u4e0b\u9762\u7684\u8bbe\u7f6e\u5c06\u8d77\u5230\u4f18\u5316\u6548\u679c\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"net.core.somaxconn")),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u63a7\u5236NGINX\u7b49\u5f85\u8fde\u63a5\u7684\u961f\u5217\u5927\u5c0f\u3002\u56e0NGINX\u5904\u7406\u8fde\u63a5\u7684\u901f\u5ea6\u5feb\uff0c\u6240\u4ee5\u4e00\u822c\u8fd9\u4e2a\u53c2\u6570\u4e0d\u5efa\u8bae\u88ab\u8bbe\u7f6e\u592a\u5927\uff0c\u4f46\u662f\u9ed8\u8ba4\u503c\u6709\u70b9\u504f\u4f4e\uff0c\u6240\u4ee5\u9488\u5bf9\u5927\u6d41\u91cf\u7f51\u7ad9\u6765\u8bf4\u8c03\u6574\u8fd9\u4e2a\u53c2\u6570\u662f\u5fc5\u987b\u7684\uff0c\u5982\u679c\u6b64\u53c2\u6570\u88ab\u8bbe\u7f6e\u591a\u4f4e\u90a3\u4e48\u6709\u53ef\u80fd\u5728\u5185\u6838\u65e5\u5fd7\u4e2d\u770b\u5230\u62a5\u9519\uff0c\u8fd9\u65f6\u9700\u8981\u8c03\u6574\u6b64\u53c2\u6570\u76f4\u5230\u62a5\u9519\u6d88\u5931\u4e3a\u6b62\u3002\u6ce8\u610f\uff0c\u5982\u679c\u6b64\u53c2\u6570\u8bbe\u7f6e\u5927\u4e8e512\u7684\u8bdd\uff0c\u5219\u9700\u8981\u5bf9NGINX\u914d\u7f6e\u4e2d\u7684listen\u6307\u4ee4\u4e2d\u7684backlog\u53c2\u6570\u8fdb\u884c\u540c\u6b65\u8c03\u6574\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"net.core.netdev_max_backlog")),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u63a7\u5236\u6570\u636e\u5305\u5728\u8fdb\u5165CPU\u5904\u7406\u524d\uff0c\u5728\u7f51\u5361\u4e2d\u88ab\u7f13\u5b58\u7684\u91cf\uff0c\u9700\u8981\u5904\u7406\u5927\u5e26\u5bbd\u7684\u673a\u5668\u9700\u8981\u589e\u52a0\u6b64\u53c2\u6570\u7684\u503c\u3002\u8bbe\u7f6e\u6b64\u53c2\u6570\u9700\u8981\u53c2\u8003\u5177\u4f53\u7684\u7f51\u5361\u7684\u6587\u6863\u6216\u8005\u6839\u636e\u7cfb\u7edf\u9519\u8bef\u65e5\u5fd7\u8fdb\u884c\u8c03\u6574\u3002"),(0,i.kt)("h3",{id:"file-descriptors"},"File Descriptors"),(0,i.kt)("p",null,"\u6587\u4ef6\u63cf\u8ff0\u7b26\u662f\u7cfb\u7edf\u5728\u5904\u7406\u5982\u7f51\u7edc\u8fde\u63a5\u548c\u6253\u5f00\u6587\u4ef6\u65f6\u7684\u7cfb\u7edf\u8d44\u6e90\u3002NGINX\u4e2d\u6bcf\u4e2a\u8fde\u63a5\u7684\u5efa\u7acb\u53ef\u80fd\u9700\u8981\u5360\u7528\u4e24\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u4f8b\u5982\u4ee3\u7406\u6a21\u5f0f\u4e0b\uff0c\u4e00\u4e2a\u7528\u6765\u5904\u7406\u5ba2\u6237\u7aef\u8fde\u63a5\uff0c\u4e00\u4e2a\u7528\u6765\u5904\u7406\u5230\u540e\u7aef\u7684\u8fde\u63a5\uff0c\u800c\u5982\u679cHTTP keepalives\u88ab\u542f\u7528\u7684\u8bdd\u5bf9\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u6d88\u8017\u4f1a\u8f7b\u677e\u4e00\u4e9b\u3002\u9700\u8981\u5904\u7406\u9ad8\u5e76\u53d1\u7684\u673a\u5668\u5efa\u8bae\u8c03\u6574\u4e0b\u9762\u7684\u53c2\u6570\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sys.fs.file_max")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u53c2\u6570\u5f71\u54cd\u7cfb\u7edf\u5168\u5c40\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6253\u5f00\u6570\u91cf\u9650\u5236\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nofile")),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u5f71\u54cd\u5355\u4e2a\u7528\u6237\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf\uff0c\u5728/etc/security/limits.conf\u4e2d\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,i.kt)("h3",{id:"ephemeral-ports"},"Ephemeral ports"),(0,i.kt)("p",null,"\u5f53NGINX\u88ab\u4f5c\u4e3a\u4ee3\u7406\u670d\u52a1\u5668\u65f6\uff0c\u6bcf\u4e2a\u5230\u540e\u7aef\u670d\u52a1\u5668\u7684\u8fde\u63a5\u5c06\u5360\u7528\u4e00\u4e2a\u4e34\u65f6\u7684\uff0c\u6216\u77ed\u671f\u7684\u7aef\u53e3\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"net.ipv4.ip_local_port_range")),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u63a7\u5236\u53ef\u88ab\u7528\u4f5c\u4e34\u65f6\u7aef\u53e3\u7684\u8d77\u59cb\u8303\u56f4\uff0c\u4e00\u4e2a\u901a\u7528\u8bbe\u7f6e\u662f1024-65000"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"net.ipv4.tcp_fin_timeout")),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u63a7\u5236\u4e00\u4e2a\u8fde\u63a5\u4f7f\u7528\u5b8c\u6bd5\u540e\u7aef\u53e3\u88ab\u56de\u6536\u518d\u5229\u7528\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u4e00\u822c\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a60\u79d2\uff0c\u4f46\u662f\u4e00\u822c\u8bbe\u7f6e\u964d\u4f4e\u523030\u6216\u800515\u79d2\u90fd\u662f\u6ca1\u6709\u95ee\u9898\u7684\u3002"),(0,i.kt)("h2",{id:"nginx-\u914d\u7f6e"},"NGINX \u914d\u7f6e"),(0,i.kt)("p",null,"\u4e0b\u9762\u4ecb\u7ecdNGINX\u4e2d\u5bf9\u6027\u80fd\u6709\u5f71\u54cd\u7684\u53c2\u6570\uff0c\u5982\u4e0b\u9762\u63d0\u5230\u7684\u4e00\u6837\uff0c\u6211\u4eec\u53ea\u8bb2\u89e3\u4e00\u4e9b\u9002\u7528\u4e8e\u5927\u591a\u6570\u7528\u6237\u7684\u53c2\u6570\u8fdb\u884c\u8c03\u6574\uff0c\u5176\u4ed6\u672a\u63d0\u53ca\u7684\u53ef\u80fd\u662f\u4e0d\u5efa\u8bae\u8c03\u6574\u7684\u3002"),(0,i.kt)("h3",{id:"worker-processes"},"Worker Processes"),(0,i.kt)("p",null,"NGINX\u53ef\u4ee5\u540c\u65f6\u542f\u52a8\u591a\u4e2aworker\u8fdb\u7a0b\uff0c\u6bcf\u4e2a\u8fdb\u7a0b\u5904\u7406\u5927\u91cf\u7684\u8fde\u63a5\uff0c\u901a\u8fc7\u8c03\u6574\u4e0b\u9762\u7684\u53c2\u6570\u53ef\u4ee5\u63a7\u5236\u542f\u52a8\u7684\u8fdb\u7a0b\u6570\u91cf\u548c\u6bcf\u4e2a\u8fdb\u7a0b\u6240\u5904\u7406\u7684\u8fde\u63a5\u6570\u91cf\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"worker_processes")),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u63a7\u5236NGINX\u542f\u52a8\u8fdb\u7a0b\u7684\u6570\u91cf\uff0c\u5728\u591a\u6570\u60c5\u51b5\u4e0b\u6bcf\u4e2acpu\u6838\u5fc3\u5206\u914d\u4e00\u4e2a\u8fdb\u7a0b\u662f\u6700\u4f73\u7684\uff0c\u5c06\u53c2\u6570\u503c\u8bbe\u7f6e\u4e3aauto\u5373\u53ef\u8fbe\u5230\u3002\u5f88\u591a\u573a\u666f\u4e0b\u90fd\u9700\u8981\u589e\u52a0\u6b64\u53c2\u6570\u7684\u503c\uff0c\u5982\u5728\u9700\u8981\u5904\u7406\u5927\u91cf\u78c1\u76d8I/O\u7684\u573a\u666f\u3002\u9ed8\u8ba4\u7684\u503c\u662f1\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"worker_connections")),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u63a7\u5236\u5728\u540c\u4e00\u65f6\u523b\u5355\u4e2a\u8fdb\u7a0b\u53ef\u4ee5\u5904\u7406\u7684\u6700\u5927\u8fde\u63a5\u6570\u3002\u9ed8\u8ba4\u503c512\uff0c\u4f46\u5927\u591a\u6570\u7cfb\u7edf\u90fd\u53ef\u4ee5\u5904\u7406\u66f4\u5927\u7684\u91cf\u3002\u5176\u6700\u4f73\u503c\u4e0e\u5b9e\u9645\u573a\u666f\u548c\u7cfb\u7edf\u6709\u5173\uff0c\u9700\u8981\u7ecf\u8fc7\u53cd\u590d\u6d4b\u8bd5\u624d\u80fd\u5f97\u51fa\u3002"),(0,i.kt)("h3",{id:"keepalives"},"Keepalives"),(0,i.kt)("p",null,"Keepalive\u8fde\u63a5\u964d\u4f4e\u8fde\u63a5\u7684\u5efa\u7acb\u548c\u5173\u95ed\u5bf9CPU\u548c\u7f51\u7edc\u7684\u6d88\u8017\uff0c\u5bf9\u6027\u80fd\u6709\u7740\u5341\u5206\u91cd\u8981\u7684\u5f71\u54cd\u3002NGINX\u4f1a\u5173\u95ed\u6240\u6709\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\uff0c\u4e14\u4e0e\u540e\u7aef\u670d\u52a1\u5668\u7684\u8fde\u63a5\u90fd\u662f\u72ec\u7acb\u7684\u3002NGINX\u652f\u6301\u5230\u5ba2\u6237\u7aef\u548c\u540e\u7aef\u7684keepalive\uff0c\u4e0b\u9762\u7684\u53c2\u6570\u5bf9\u5ba2\u6237\u7aefkeepalive\u8fdb\u884c\u63a7\u5236\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"keepalive_requests")),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u63a7\u5236\u901a\u8fc7\u5355\u4e2akeepalive\u8fde\u63a5\u53ef\u4ee5\u5904\u7406\u7684\u5ba2\u6237\u7aef\u8bf7\u6c42\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u662f100\uff0c\u53ef\u4ee5\u8c03\u6574\u4e3a\u66f4\u5927\u7684\u503c\uff0c\u7279\u522b\u662f\u5728\u901a\u8fc7\u5355\u4e2a\u5ba2\u6237\u7aef\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5\u7684\u65f6\u5019\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"keepalive_timeout")),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u63a7\u5236\u5355\u4e2akeepalive\u8fde\u63a5\u5728\u7a7a\u95f2\u72b6\u6001\u4fdd\u6301\u8fde\u63a5\u7684\u65f6\u95f4\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u53c2\u6570\u5bf9\u540e\u7aefkeepalive\u8fdb\u884c\u63a7\u5236\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"keepalive")),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u63a7\u5236\u5355\u4e2aworker\u8fdb\u7a0b\u4fdd\u6301\u5230upstream server\u7684keepalive\u8fde\u63a5\u6570\u91cf\uff0c\u4e14\u9ed8\u8ba4\u6ca1\u6709\u8bbe\u7f6e\u3002\u5982\u9700\u542f\u52a8\u5230\u540e\u7aef\u7684keepalive\u8fde\u63a5\u5219\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u8bbe\u7f6e\uff1a "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"proxy_http_version 1.1;"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},'proxy_set_header Connection "";')),(0,i.kt)("h3",{id:"access-logging"},"Access Logging"),(0,i.kt)("p",null,"\u8bf7\u6c42\u4ea7\u751f\u7684\u65e5\u5fd7\u8bb0\u5f55\u5bf9CPU\u548cI/O\u90fd\u6709\u6d88\u8017\uff0c\u4e00\u4e2a\u53ef\u4ee5\u964d\u4f4e\u8d44\u6e90\u6d88\u8017\u7684\u529e\u6cd5\u662f\u542f\u7528\u65e5\u5fd7\u7f13\u5b58\u3002\u542f\u7528\u65e5\u5fd7\u7f13\u5b58\u540e\uff0cNGINX\u5c06\u7f13\u5b58\u90e8\u5206\u8bf7\u6c42\u65e5\u5fd7\uff0c\u7136\u540e\u4e00\u6b21\u6027\u5199\u5165\u6587\u4ef6\u3002\u8981\u542f\u7528\u65e5\u5fd7\u7f13\u5b58\u53ea\u9700\u8981\u5728access_log\u4e2d\u589e\u52a0\u201cbuffer=size\u201d\u7684\u8bbe\u7f6e\u5373\u53ef\uff0csize\u503c\u63a7\u5236\u7f13\u5b58\u7684\u5927\u5c0f\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u201cflush=time\u201d\u4ee5\u63a7\u5236\u7f13\u5b58\u7684\u65f6\u95f4\uff0c\u8bbe\u7f6e\u4e86\u4e24\u4e2a\u53c2\u6570\u540e\uff0cNGINX\u4f1a\u5728\u7f13\u5b58\u88ab\u5145\u6ee1\u6216\u8005\u65e5\u5fd7\u6761\u76ee\u6570\u8fbe\u5230flush\u503c\u65f6\u56de\u5199\u65e5\u5fd7\u3002\u5728worker\u8fdb\u7a0b\u91cd\u542f\u6216\u8005\u5173\u95ed\u65f6\u4e5f\u4f1a\u56de\u5199\u65e5\u5fd7\u3002\u800c\u6c38\u4e45\u7981\u7528\u65e5\u5fd7\u8bb0\u5f55\u4e5f\u662f\u53ef\u4ee5\u5b9e\u73b0\u7684\u3002"),(0,i.kt)("h3",{id:"sendfile"},"Sendfile"),(0,i.kt)("p",null,"Sendfile \u662f\u4e00\u9879\u64cd\u4f5c\u7cfb\u7edf\u7279\u6027\uff0c\u53ef\u4ee5\u88abNGINX\u542f\u7528\u3002\u5b83\u901a\u8fc7\u5bf9\u6570\u636e\u5728\u6587\u4ef6\u63cf\u8ff0\u7b26\u4e4b\u95f4\u8fdb\u884cin-kernel copying\u6765\u63d0\u4f9b\u66f4\u5feb\u7684tcp\u6570\u636e\u4f20\u8f93\u5904\u7406\uff0c\u4e00\u822c\u901a\u8fc7zero-copy\u6280\u672f\u5b9e\u73b0\u3002NGINX\u4f7f\u7528\u5b83\u6765\u5b8c\u6210\u7f13\u5b58\u6570\u636e\u6216\u8005\u78c1\u76d8\u6570\u636e\u5230socket\u7684\u5199\u64cd\u4f5c\uff0c\u4e0d\u4ea7\u751f\u4efb\u4f55\u7684\u7528\u6237\u7a7a\u95f4\u4e0a\u4e0b\u6587\u5207\u6362\u5f00\u9500\uff0c\u53ef\u964d\u4f4eCPU\u8d1f\u8f7d\u548c\u63d0\u9ad8\u5904\u7406\u901f\u5ea6\u3002\u5f53\u542f\u7528sendfile\u7279\u6027\u4e4b\u540e\uff0c\u7531\u4e8e\u6570\u636e\u4e0d\u7ecf\u8fc7\u7528\u6237\u7a7a\u95f4\uff0c\u4f7f\u5f97\u5bf9\u6570\u636e\u5185\u5bb9\u8fdb\u884c\u5904\u7406\u7684filter\u5c06\u4e0d\u8d77\u4f5c\u7528\uff0c\u4f8b\u5982gzip filter\u5c06\u9ed8\u8ba4\u88ab\u7981\u7528\u3002"),(0,i.kt)("h3",{id:"limits"},"Limits"),(0,i.kt)("p",null,"NGINX\u4e5f\u4e3a\u7528\u6237\u63d0\u4f9b\u8bbe\u7f6e\u8fde\u63a5\u9650\u5236\u7684\u80fd\u529b\uff0c\u7528\u6765\u5bf9\u5ba2\u6237\u8bf7\u6c42\u7684\u8d44\u6e90\u8fdb\u884c\u63a7\u5236\uff0c\u5bf9\u7cfb\u7edf\u6027\u80fd\uff0c\u7528\u6237\u4f53\u9a8c\u548c\u5b89\u5168\u6027\u4e5f\u4ea7\u751f\u6781\u5927\u7684\u5f71\u54cd\u3002\u4e0b\u9762\u662f\u90e8\u5206\u7528\u4e8e\u8bf7\u6c42\u9650\u5236\u7684\u6307\u4ee4\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"limit_conn/limit_conn_zone")),(0,i.kt)("p",null,"\u8fd9\u4e24\u4e2a\u6307\u4ee4\u7528\u6765\u63a7\u5236NGINX\u53ef\u63a5\u6536\u7684\u8fde\u63a5\u6570\uff0c\u4f8b\u5982\u6765\u81ea\u5355\u4e2a\u5ba2\u6237\u7aefIP\u7684\u8fde\u63a5\u8bf7\u6c42\u3002\u8fd9\u6709\u52a9\u4e8e\u9650\u5236\u5ba2\u6237\u7aef\u5efa\u7acb\u8fc7\u591a\u7684\u8fde\u63a5\u5e76\u6d88\u8017\u8fc7\u591a\u8d44\u6e90\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"limit_rate")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u6307\u4ee4\u63a7\u5236\u5355\u4e2a\u8fde\u63a5\u5141\u8bb8\u7684\u5ba2\u6237\u7aef\u6700\u5927\u5e26\u5bbd\u3002\u8fd9\u53ef\u4ee5\u907f\u514d\u7cfb\u7edf\u88ab\u90e8\u5206\u5ba2\u6237\u7aef\u8017\u5c3d\u8d44\u6e90\uff0c\u4fdd\u8bc1\u4e86\u4e3a\u6bcf\u4e2a\u5ba2\u6237\u7aef\u8bf7\u6c42\u63d0\u4f9b\u670d\u52a1\u7684\u8d28\u91cf\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"limit_req/limit_req_zone")),(0,i.kt)("p",null,"\u8fd9\u4e24\u4e2a\u6307\u4ee4\u53ef\u4ee5\u63a7\u5236NGINX\u7684\u8bf7\u6c42\u56de\u590d\u6c34\u5e73\uff0c\u4ee5\u4e0d\u81f3\u4e8e\u88ab\u90e8\u5206\u5ba2\u6237\u7aef\u62d6\u57ae\u3002\u4e5f\u88ab\u7528\u6765\u52a0\u5f3a\u5b89\u5168\u6027\uff0c\u7279\u522b\u662f\u5bf9\u767b\u9646\u9875\u9762\u7b49\u8fdb\u884c\u6709\u6548\u7684\u4fdd\u62a4\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"max_conns")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u6307\u4ee4\u7528\u6765\u63a7\u5236\u5230\u540e\u7aef\u670d\u52a1\u5668\u7684\u6700\u5927\u8fde\u63a5\u6570\uff0c\u4fdd\u62a4\u540e\u7aef\u670d\u52a1\u5668\u4e0d\u88ab\u62d6\u57ae\uff0c\u9ed8\u8ba4\u503c\u662fzero\uff0c\u6ca1\u6709\u4efb\u4f55\u9650\u5236\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"queue")),(0,i.kt)("p",null,"\u5982\u679cmax_conns\u88ab\u8bbe\u7f6e\uff0c\u90a3\u4e48\u6b64\u53c2\u6570\u5bf9\u8d85\u8fc7\u6700\u5927\u8fde\u63a5\u65f6\u7684\u72b6\u6001\u4ea7\u751f\u5f71\u54cd\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u961f\u5217\u4e2d\u8bf7\u6c42\u7684\u4e2a\u6570\u548c\u7f13\u51b2\u65f6\u95f4\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u5219\u961f\u5217\u4e0d\u5b58\u5728\u3002"),(0,i.kt)("h2",{id:"\u5176\u4ed6\u8bbe\u7f6e"},"\u5176\u4ed6\u8bbe\u7f6e"),(0,i.kt)("p",null,"NGINX\u8fd8\u6709\u4e00\u4e9b\u7279\u6027\u80fd\u5bf9\u67d0\u4e9b\u7279\u5b9a\u573a\u666f\u4e0b\u7684\u5e94\u7528\u8d77\u5230\u6027\u80fd\u4f18\u5316\u4f5c\u7528\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8\u5176\u4e2d\u7684\u4e24\u4e2a\u7279\u6027\u3002"),(0,i.kt)("h3",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,i.kt)("p",null,"\u5f53\u628aNGINX\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u5668\u6765\u4f7f\u7528\u7684\u573a\u666f\u4e0b\uff0c\u542f\u7528cache\u53ef\u4ee5\u663e\u8457\u6539\u5584\u5230\u5ba2\u6237\u7aef\u7684\u54cd\u5e94\u65f6\u95f4\uff0c\u4e14\u663e\u8457\u964d\u4f4e\u540e\u7aef\u670d\u52a1\u5668\u7684\u538b\u529b\u3002\u5982\u9700\u4e86\u89e3\u66f4\u591aNGINX\u7684caching\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u53c2\u8003\u6b64\u94fe\u63a5\uff1a: NGINX Admin Guide \u2013 Caching."),(0,i.kt)("h3",{id:"\u538b\u7f29"},"\u538b\u7f29"),(0,i.kt)("p",null,"\u5bf9\u56de\u5e94\u5185\u5bb9\u8fdb\u884c\u538b\u7f29\u5c06\u6709\u6548\u964d\u4f4e\u56de\u5e94\u5185\u5bb9\u7684\u5927\u5c0f\uff0c\u964d\u4f4e\u5e26\u5bbd\u6d88\u8017\uff0c\u7136\u800c\u538b\u7f29\u5c06\u589e\u52a0CPU\u7684\u5f00\u9500\uff0c\u6240\u4ee5\u5e26\u5bbd\u6210\u672c\u8f83\u9ad8\u65f6\u542f\u7528\u624d\u662f\u660e\u667a\u4e4b\u4e3e\u3002\u9700\u8981\u660e\u786e\u6ce8\u610f\u7684\u662f\u4e0d\u8981\u5bf9\u5df2\u7ecf\u538b\u7f29\u7684\u5185\u5bb9\u542f\u7528\u538b\u7f29\uff0c\u4f8b\u5982jpeg\u683c\u5f0f\u7684\u56fe\u7247\uff0c\u5982\u9700\u4e86\u89e3\u66f4\u591a\u6709\u5173\u538b\u7f29\u7684\u8bbe\u7f6e\u53ef\u4ee5\u53c2\u8003\u6b64\u6587\u6863\uff1a NGINX Admin Guide \u2013 Compression and Decompression"),(0,i.kt)("p",null,"\u539f\u6587\u94fe\u63a5:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://nginx.com/blog/tuning-nginx/"},"http://nginx.com/blog/tuning-nginx/")))}c.isMDXComponent=!0}}]);
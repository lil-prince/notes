"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={layout:"post",title:"CentOS\u4e2d\u53cc\u7f51\u5361\u9759\u6001\u8def\u7531\u914d\u7f6e",description:"\u6f14\u793a\u5982\u4f55\u4e3a\u53cc\u7f51\u5361\u914d\u7f6e\u72ec\u7acb\u7684\u8def\u7531\u89c4\u5219",categories:["system"],tags:["centos","route"]},o=void 0,i={permalink:"/notes/zh-Hans/blog/2013/11/11/centos-multi-network-interface-route",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2013-11-11-centos-multi-network-interface-route.md",source:"@site/blog/2013-11-11-centos-multi-network-interface-route.md",title:"CentOS\u4e2d\u53cc\u7f51\u5361\u9759\u6001\u8def\u7531\u914d\u7f6e",description:"\u6f14\u793a\u5982\u4f55\u4e3a\u53cc\u7f51\u5361\u914d\u7f6e\u72ec\u7acb\u7684\u8def\u7531\u89c4\u5219",date:"2013-11-11T00:00:00.000Z",formattedDate:"2013\u5e7411\u670811\u65e5",tags:[{label:"centos",permalink:"/notes/zh-Hans/blog/tags/centos"},{label:"route",permalink:"/notes/zh-Hans/blog/tags/route"}],readingTime:3.145,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"CentOS\u4e2d\u53cc\u7f51\u5361\u9759\u6001\u8def\u7531\u914d\u7f6e",description:"\u6f14\u793a\u5982\u4f55\u4e3a\u53cc\u7f51\u5361\u914d\u7f6e\u72ec\u7acb\u7684\u8def\u7531\u89c4\u5219",categories:["system"],tags:["centos","route"]},prevItem:{title:"\u4f7f\u7528fpm2\u6765\u7ba1\u7406ssh\u5bc6\u7801",permalink:"/notes/zh-Hans/blog/2013/11/12/use-fpm2-to-manage-password"},nextItem:{title:"libvirt\u4e2d\u7684\u7f51\u7edc\u7ba1\u7406\u5b9e\u8df5",permalink:"/notes/zh-Hans/blog/2013/10/01/libvirt-basic-usage"}},u={authorsImageUrls:[]},p=[{value:"\u6765\u81ea\u7f51\u4e0a\u641c\u7d22\u7684\u65b9\u6cd5",id:"\u6765\u81ea\u7f51\u4e0a\u641c\u7d22\u7684\u65b9\u6cd5",level:2},{value:"\u6765\u81ea\u7ea2\u5e3d\u6587\u6863\u4e2d\u7684\u65b9\u6cd5",id:"\u6765\u81ea\u7ea2\u5e3d\u6587\u6863\u4e2d\u7684\u65b9\u6cd5",level:2},{value:"\u914d\u7f6e\u9759\u6001\u8def\u7531",id:"\u914d\u7f6e\u9759\u6001\u8def\u7531",level:3},{value:"IP\u547d\u4ee4\u53c2\u6570\u6a21\u5f0f\uff1a",id:"ip\u547d\u4ee4\u53c2\u6570\u6a21\u5f0f",level:4},{value:"\u7f51\u7edc/\u63a9\u7801\u6307\u4ee4\u683c\u5f0f\uff1a",id:"\u7f51\u7edc\u63a9\u7801\u6307\u4ee4\u683c\u5f0f",level:4}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," \u4e00\u4e2a\u7f51\u5361\u7684\u8bdd\u4e0d\u9700\u8981\u9759\u6001\u8def\u7531\u7684\uff0c\u5982\u679c\u591a\u4e2a\u7f51\u5361\u7684\u8bdd\u53ef\u4ee5\u624b\u5de5\u914d\u7f6e\u9759\u6001\u8def\u7531\uff0c\u7279\u522b\u662f\u591a\u4e2a\u7f51\u5361\u8d70\u4e0d\u540c\u7684\u5b50\u7f51\u7684\u65f6\u5019\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,a.kt)("h2",{id:"\u6765\u81ea\u7f51\u4e0a\u641c\u7d22\u7684\u65b9\u6cd5"},"\u6765\u81ea\u7f51\u4e0a\u641c\u7d22\u7684\u65b9\u6cd5"),(0,a.kt)("p",null,"\u4e4b\u524d\u4e00\u76f4\u6ca1\u6709\u914d\u7f6e\u8fc7\u4e24\u4e2a\u7f51\u5361\u5206\u522b\u4f7f\u7528\u4e0d\u540c\u7684IP\uff0c\u8d70\u4e0d\u540c\u7684\u7f51\u5173\uff0cgoogle\u4e86\u4e0b\u53d1\u73b0\u4e86\u4e0b\u9762\u7684\u624b\u5de5\u6dfb\u52a0\u8def\u7531\u7684\u811a\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nip route add 10.1.1.0/24 dev br0 src 10.1.1.10 table bond0\nip route add default via 10.1.1.1 dev br0 table bond0\nip rule add from 10.1.1.10/32 table bond0\nip rule add to 10.1.1.10/32 table bond0\n\nip route add 192.168.1.0/24 dev br1 src 192.168.1.10 table bond1\nip route add default via 192.168.1.1 dev br1 table bond1\nip rule add from 192.168.1.10/32 table bond1\nip rule add to 192.168.1.10/32 table bond1\n")),(0,a.kt)("h2",{id:"\u6765\u81ea\u7ea2\u5e3d\u6587\u6863\u4e2d\u7684\u65b9\u6cd5"},"\u6765\u81ea\u7ea2\u5e3d\u6587\u6863\u4e2d\u7684\u65b9\u6cd5"),(0,a.kt)("p",null,"\u540e\u6765\u60f3\u4e86\u60f3\u8fd9\u6837\u7684\u95ee\u9898\u7cfb\u7edf\u80af\u5b9a\u5df2\u7ecf\u652f\u6301\u5f97\u5f88\u597d\u4e86\uff0c\u53ea\u662f\u6ca1\u6709\u627e\u5230\u914d\u7f6e\u65b9\u6cd5\uff0c\u4e8e\u662f\u627e\u4e86\u4e0b\u7ea2\u5e3d\u7684\u6587\u6863\uff0c\u53d1\u73b0\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u914d\u7f6e\uff1a"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u9759\u6001\u8def\u7531"},"\u914d\u7f6e\u9759\u6001\u8def\u7531"),(0,a.kt)("p",null," \u4e00\u4e2a\u7f51\u5361\u7684\u8bdd\u4e0d\u9700\u8981\u9759\u6001\u8def\u7531\u7684\uff0c\u5982\u679c\u591a\u4e2a\u7f51\u5361\u7684\u8bdd\u53ef\u4ee5\u624b\u5de5\u914d\u7f6e\u9759\u6001\u8def\u7531\uff0c\u7279\u522b\u662f\u591a\u4e2a\u7f51\u5361\u8d70\u4e0d\u540c\u7684\u5b50\u7f51\u7684\u65f6\u5019\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"route -n   #\u67e5\u770b\u5f53\u524d\u8def\u7531\u4fe1\u606f")),(0,a.kt)("p",null,"\u9759\u6001\u8def\u7531\u914d\u7f6e\u6587\u4ef6\u8def\u5f84:\n",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network-scripts/route-interface_name"),"\n\u5c31\u548c\u7f51\u5361\u7684\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u7ed3\u6784\u5dee\u4e0d\u591a\uff0c\u6bd4\u5982ifcfg-eth0\u53d8\u6210\u4e86route-eth0\u3002"),(0,a.kt)("p",null,"eth0\u7f51\u5361\u7684\u9759\u6001\u8def\u7531\u5c31\u4fdd\u5b58\u5728\u8fd9\u4e2a\u6587\u4ef6\u91cc\u9762\u3002\u8fd9\u4e2a\u6587\u4ef6\u53ef\u4ee5\u6709\u4e24\u79cd\u683c\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IP\u547d\u4ee4\u53c2\u6570\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc/\u63a9\u7801\u6307\u4ee4\u683c\u5f0f")),(0,a.kt)("h4",{id:"ip\u547d\u4ee4\u53c2\u6570\u6a21\u5f0f"},"IP\u547d\u4ee4\u53c2\u6570\u6a21\u5f0f\uff1a"),(0,a.kt)("p",null,"1\uff09\u7b2c\u4e00\u884c\u5b9a\u4e49\u9ed8\u8ba4\u8def\u7531\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"default via X.X.X.X dev interface\n")),(0,a.kt)("p",null,"X.X.X.X \u662f\u9ed8\u8ba4\u8def\u7531\u7684IP. interface\u662f\u53ef\u4ee5\u8fde\u63a5\u5230\u9ed8\u8ba4\u8def\u7531\u7684\u7f51\u5361\u63a5\u53e3\u540d."),(0,a.kt)("p",null,"2\uff09\u9759\u6001\u8def\u7531\u4e00\u884c\u4e00\u4e2a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"X.X.X.X/X via X.X.X.X dev interface\n")),(0,a.kt)("p",null,"X.X.X.X/X \u662f\u7f51\u7edc\u548c\u63a9\u7801. X.X.X.X \u548c interface \u662f\u5404\u81ea\u7f51\u6bb5\u7684\u7f51\u5173IP\u548c\u7f51\u5361\u63a5\u53e3."),(0,a.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b route-eth0\uff1a\n\u9ed8\u8ba4\u7f51\u5173 192.168.0.1, \u63a5\u53e3eth0. \u4e24\u6761\u9759\u6001\u8def\u7531\u5230 10.10.10.0/24 \u548c172.16.1.0/24 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"default via 192.168.0.1 dev eth0\n10.10.10.0/24 via 10.10.10.1 dev eth1\n172.16.1.0/24 via 192.168.0.1 dev eth0\n")),(0,a.kt)("h4",{id:"\u7f51\u7edc\u63a9\u7801\u6307\u4ee4\u683c\u5f0f"},"\u7f51\u7edc/\u63a9\u7801\u6307\u4ee4\u683c\u5f0f\uff1a"),(0,a.kt)("p",null,"route-interface\u6587\u4ef6\u7684\u7b2c\u4e8c\u79cd\u683c\u5f0f.\u4e0b\u9762\u662f\u6837\u677f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADDRESS0=X.X.X.X\nNETMASK0=X.X.X.X\nGATEWAY0=X.X.X.X\n")),(0,a.kt)("p",null,"ADDRESS0=X.X.X.X \u9759\u6001\u8def\u7531\u7684\u7f51\u7edc\u7f16\u53f7.\nNETMASK0=X.X.X.X \u4e3a\u4e0a\u9762\u90a3\u884c\u8bbe\u7f6e\u5b50\u7f51\u63a9\u7801 .\nGATEWAY0=X.X.X.X  \u80fd\u591f\u8fde\u63a5\u5230 ADDRESS0=X.X.X.X \u8fd9\u4e2a\u7f51\u7edc\u7684\u7f51\u5173"),(0,a.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b route-eth0\uff1a\n\u9ed8\u8ba4\u7f51\u5173 192.168.0.1, \u63a5\u53e3 eth0. \u4e24\u6761\u523010.10.10.0/24 \u548c172.16.1.0/24 \u7684\u9759\u6001\u8def\u7531\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADDRESS0=10.10.10.0\nNETMASK0=255.255.255.0\nGATEWAY0=10.10.10.1\nADDRESS1=172.16.1.0\nNETMASK1=255.255.255.0\nGATEWAY1=192.168.0.1\n")),(0,a.kt)("p",null,"ADDRESS0, ADDRESS1, ADDRESS2, \u8fd9\u6837\u7684\u7f16\u53f7\u5fc5\u987b\u662f\u4e00\u4e2a\u63a5\u4e00\u4e2a\u7684\u6570\u5b57\u3002"))}s.isMDXComponent=!0}}]);
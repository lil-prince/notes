"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2491],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>c});var n=r(7294);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,a=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),b=p(r),c=l,k=b["".concat(s,".").concat(c)]||b[c]||d[c]||a;return r?n.createElement(k,i(i({ref:e},u),{},{components:r})):n.createElement(k,i({ref:e},u))}));function c(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=r.length,i=new Array(a);i[0]=b;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1707:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const a={layout:"post",title:"libvirt\u4e2d\u7684\u7f51\u7edc\u7ba1\u7406\u5b9e\u8df5",description:"",categories:["virt"],tags:["libvirt","network"]},i=void 0,o={permalink:"/notes/zh-Hans/blog/2013/10/01/libvirt-basic-usage",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2013-10-01-libvirt-basic-usage.md",source:"@site/blog/2013-10-01-libvirt-basic-usage.md",title:"libvirt\u4e2d\u7684\u7f51\u7edc\u7ba1\u7406\u5b9e\u8df5",description:"",date:"2013-10-01T00:00:00.000Z",formattedDate:"2013\u5e7410\u67081\u65e5",tags:[{label:"libvirt",permalink:"/notes/zh-Hans/blog/tags/libvirt"},{label:"network",permalink:"/notes/zh-Hans/blog/tags/network"}],readingTime:13.765,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"libvirt\u4e2d\u7684\u7f51\u7edc\u7ba1\u7406\u5b9e\u8df5",description:"",categories:["virt"],tags:["libvirt","network"]},prevItem:{title:"CentOS\u4e2d\u53cc\u7f51\u5361\u9759\u6001\u8def\u7531\u914d\u7f6e",permalink:"/notes/zh-Hans/blog/2013/11/11/centos-multi-network-interface-route"},nextItem:{title:"\u6b63\u786e\u4f7f\u7528shell\u8fd4\u56de\u503c",permalink:"/notes/zh-Hans/blog/2013/05/17/bash-shell-exit-code"}},s={authorsImageUrls:[]},p=[{value:"libvirt\u7f51\u7edc\u57fa\u672c\u6982\u5ff5",id:"libvirt\u7f51\u7edc\u57fa\u672c\u6982\u5ff5",level:2},{value:"libvirt\u4e2d\u7f51\u7edc\u7684\u7c7b\u578b",id:"libvirt\u4e2d\u7f51\u7edc\u7684\u7c7b\u578b",level:2},{value:"nat",id:"nat",level:3},{value:"routed",id:"routed",level:3},{value:"\u81ea\u5b9a\u4e49routed\u7f51\u7edc",id:"\u81ea\u5b9a\u4e49routed\u7f51\u7edc",level:2},{value:"\u81ea\u5b9a\u4e49nat\u7f51\u7edc",id:"\u81ea\u5b9a\u4e49nat\u7f51\u7edc",level:2},{value:"route\u7f51\u7edc\u8f6c\u6362nat\u7f51\u7edc",id:"route\u7f51\u7edc\u8f6c\u6362nat\u7f51\u7edc",level:2},{value:"\u81ea\u5b9a\u4e49dnsmasq",id:"\u81ea\u5b9a\u4e49dnsmasq",level:2},{value:"\u91cd\u542fnetwork\u5bfc\u81f4\u7f51\u7edc\u4e2d\u65ad",id:"\u91cd\u542fnetwork\u5bfc\u81f4\u7f51\u7edc\u4e2d\u65ad",level:2}],u={toc:p};function d(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9010\u6b65\u5206\u6790libvirt\u4e2d\u7684\u7f51\u7edc\u7ba1\u7406\u65b9\u6cd5\u53ca\u5b9e\u8df5\uff0c\u5206\u6790\u5728nat\u7f51\u7edc\u4e2d\u9047\u5230\u7684\u95ee\u9898\u53ca\u89e3\u51b3\u601d\u8def")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,l.kt)("h2",{id:"libvirt\u7f51\u7edc\u57fa\u672c\u6982\u5ff5"},"libvirt\u7f51\u7edc\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("p",null,"libvirt\u9ed8\u8ba4\u4f7f\u7528\u4e86\u4e00\u4e2a\u540d\u4e3adefault\u7684nat\u7f51\u7edc\uff0c\u8fd9\u4e2a\u7f51\u7edc\u9ed8\u8ba4\u4f7f\u7528virbr0\u4f5c\u4e3a\u6865\u63a5\u63a5\u53e3\uff0c\u4f7f\u7528dnsmasq\u6765\u4e3a\u4f7f\u7528nat\u7f51\u7edc\u7684\u865a\u62df\u673a\u63d0\u4f9bdns\u53cadhcp\u670d\u52a1\uff0cdnsmasq\u751f\u6548\u540e\u7684\u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u4fdd\u5b58\u5728\u4ee5\u4e0b\u8def\u5f84\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/var/lib/libvirt/dnsmasq/default.hostsfile   mac&&ip\u7ed1\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"/var/lib/libvirt/dnsmasq/default.leases  dhcp\u5206\u914d\u5230\u865a\u62df\u673a\u7684ip\u5730\u5740\u5217\u8868"),(0,l.kt)("li",{parentName:"ul"},"/var/lib/libvirt/network/default.xml  default\u7f51\u7edc\u7684\u914d\u7f6e\u6587\u4ef6")),(0,l.kt)("p",null,"dnsmasq\u670d\u52a1\u7684\u542f\u52a8\u811a\u672c\u5728/etc/init.d/dnsmasq \uff0c\u4f46\u662f\u6211\u4eec\u5982\u679c\u624b\u52a8\u4f7f\u7528\u6b64\u811a\u672c\u6765\u542f\u52a8\u670d\u52a1\u5c06\u4f1a\u5bfc\u81f4dnsmasq\u8bfb\u53d6\u5176\u81ea\u5df1\u7684\u914d\u7f6e\u6587\u4ef6\u6765\u542f\u52a8\u6b64\u670d\u52a1\uff0c\u56e0\u6b64\u8fd9\u4e48\u505a\u662f\u4e0d\u63a8\u8350\u7684\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u670d\u52a1\u5b8c\u5168\u7531libvirtd\u5728\u63a5\u7ba1\uff0c\u5f53libvirtd\u670d\u52a1\u542f\u52a8\u7684\u65f6\u5019\uff0c\u5b83\u4f1a\u5c06\u5b83\u7ba1\u7406\u7684\u88ab\u6807\u8bb0\u4e3aautostart\u7684network\u4e00\u5e76\u542f\u52a8\u8d77\u6765\uff0c\u800c\u542f\u52a8network\u7684\u65f6\u5019\u5c31\u4f1a\u81ea\u52a8\u8c03\u7528dnsmasq\u5e76\u8d4b\u4e88\u5176\u9002\u5b9c\u7684\u914d\u7f6e\u6587\u4ef6\u6765\u8fd0\u884c\u670d\u52a1\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528libvirt\u7ba1\u7406\u7684\u7f51\u7edc\u90fd\u4f1a\u7528\u5230dnsmasq\u6765\u4ea7\u751f\u76f8\u5e94\u7684\u914d\u7f6e\uff0c\u6bd4\u5982\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3aroute110\u7684network\uff0c\u90a3\u4e48\u8fd9\u4e2aroute110\u5c06\u4f7f\u7528\u4e00\u4e2a\u65b0\u7684\u6865\u63a5\u63a5\u53e3virbr1\u6765\u63a5\u5165\u7f51\u7edc\uff0c\u5e76\u4f7f\u7528dnsmasq\u4ea7\u751f\u540d\u4e3aroute110.hostsfile\u548croute110.leases\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u5176\u5b9e\u8fd9\u91cc\u63d0\u5230\u7684virbr0\u548cvirbr1\u90fd\u662flibvirt\u4ea7\u751f\u7684\u865a\u62df\u7f51\u5361\uff0c\u5176\u4f5c\u7528\u5c31\u76f8\u5f53\u4e8e\u4e00\u4e2a\u865a\u62df\u4ea4\u6362\u673a\uff0c\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u7f51\u7edc\u8f6c\u53d1\u670d\u52a1\u3002"),(0,l.kt)("h2",{id:"libvirt\u4e2d\u7f51\u7edc\u7684\u7c7b\u578b"},"libvirt\u4e2d\u7f51\u7edc\u7684\u7c7b\u578b"),(0,l.kt)("p",null,"\u9996\u5148\u5206\u6790\u4e00\u4e0blibvirt\u6240\u80fd\u63d0\u4f9b\u7684\u7f51\u7edc\u7c7b\u578b\uff1aisolated \u548cforwarding,\u5176\u4e2d\uff0cisolated\u610f\u4e3a\u7edd\u5bf9\u9694\u79bb\u7684\u7f51\u7edc\uff0c\u4e5f\u5c31\u662f\u8bf4\u5904\u4e8e\u6b64\u7f51\u7edc\u5185\u7684\u865a\u62df\u673a\u5bf9\u4e8e\u5916\u754c\u662f\u9694\u79bb\u7684\uff0c\u8fd9\u79cd\u6a21\u5f0f\u53ef\u4ee5\u7528\u5230\u4e00\u4e9b\u7279\u6b8a\u7684\u573a\u5408\uff0c\u6bd4\u5982\u865a\u62df\u673a\u53ea\u63d0\u4f9b\u7ed9\u5185\u90e8\u4f7f\u7528\uff0c\u865a\u62df\u673a\u53ea\u8981\u6c42\u80fd\u76f8\u4e92\u901a\u4fe1\u800c\u4e0d\u9700\u8981\u4e0e\u4e92\u8054\u7f51\u901a\u4fe1\u3002\u53e6\u5916\u4e00\u7c7b\uff0cforwarding\uff0c\u5c31\u662f\u628a\u865a\u62df\u673a\u7684\u6570\u636eforward\u5230\u7269\u7406\u7f51\u7edc\u5b9e\u73b0\u4e0e\u5916\u90e8\u7f51\u7edc\u8fdb\u884c\u901a\u8baf\uff0c\u5176\u4e2dforwarding\u53c8\u5206\u4e3a\u4e24\u79cd\uff1anat\u548crouted\u3002"),(0,l.kt)("h3",{id:"nat"},"nat"),(0,l.kt)("p",null,"\u5c31\u662f\u628a\u865a\u62df\u673a\u7684\u7f51\u7edc\u6570\u636e\u5728\u7ecf\u8fc7\u7269\u7406\u673a\u7f51\u7edc\u7684\u65f6\u5019\u8fdb\u884cip\u4f2a\u88c5\uff0c\u8fd9\u6837\u6240\u6709\u865a\u62df\u673a\u51fa\u53bb\u7684\u7f51\u7edc\u6570\u636e\u90fd\u76f8\u5f53\u4e8e\u662f\u7269\u7406\u673a\u51fa\u53bb\u7684\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u5206\u914d\u7ed9\u4f7f\u7528nat\u7f51\u7edc\u7684\u865a\u62df\u673a\u4e00\u4e2a\u5185\u7f51ip\uff0c\u800c\u8fd9\u4e2a\u5185\u7f51ip\u7684\u865a\u62df\u673a\u8bbf\u95ee\u51fa\u53bb\u7684\u65f6\u5019\u5916\u90e8\u7f51\u7edc\u770b\u5230\u7684\u662f\u7269\u7406\u673a\u7684\u516c\u7f51ip\uff0c\u8fd9\u6837\u505a\u7684\u7528\u5904\u5c31\u662f\u5b9e\u73b0\u591a\u4e2a\u865a\u62df\u673a\u5171\u4eab\u7269\u7406\u4e3b\u673a\u7684\u516c\u7f51ip\uff0c\u8282\u7701\u516c\u7f51ip\u5730\u5740\uff1b\u5982\u524d\u6240\u8ff0\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0blibvirt\u5df2\u7ecf\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3adefault\u7684nat\u7f51\u7edc\uff0c\u5728\u4e0d\u9700\u8981\u8fdb\u884c\u4efb\u4f55\u914d\u7f6e\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528default\u7f51\u7edc\u7684\u865a\u62df\u673a\u5373\u53ef\u8bbf\u95ee\u4e92\u8054\u7f51\uff0c\u4f46\u662f\u4e92\u8054\u7f51\u5374\u65e0\u6cd5\u8bbf\u95ee\u865a\u62df\u673a\u63d0\u4f9b\u7684\u670d\u52a1\uff0c\u8fd9\u662f\u56e0\u4e3adefault\u7f51\u7edc\u53ea\u5bf9\u865a\u62df\u673a\u7684\u6570\u636e\u5305\u8fdb\u884c\u4e86\u4f2a\u88c5\uff0c\u800c\u6ca1\u6709\u8fdb\u884cdnat\u548csnat\u3002"),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662flibvirt\u6240\u5b9e\u73b0\u7684\u8fd9\u79cdnat\u7f51\u7edc\u662f\u901a\u8fc7\u7269\u7406\u673a\u7684iptables\u89c4\u5219\u6765\u5b9e\u73b0\u7684\uff0c\u4e5f\u5373\u662f\u5728\u865a\u62df\u673a\u6570\u636e\u7ecf\u8fc7nat\u8868\u7684postrouting\u94fe\u51fa\u53bb\u7684\u65f6\u5019\u5bf9\u5176\u8fdb\u884c\u4e86\u4f2a\u88c5\u3002"),(0,l.kt)("h3",{id:"routed"},"routed"),(0,l.kt)("p",null,"forwarding\u6a21\u5f0f\u7684\u53e6\u5916\u4e00\u79cd\uff0crouted\uff0c\u5c31\u662f\u5c06\u865a\u62df\u673a\u7684\u6570\u636e\u76f4\u63a5\u901a\u8fc7\u7269\u7406\u673aroute\u51fa\u53bb\uff0c\u548cnat\u4e00\u6837\uff0c\u4e5f\u662f\u9700\u8981\u4e00\u4e2avirbr\u865a\u62df\u7f51\u5361\u63a5\u53e3\u6765\u4e0e\u5916\u9762\u8fdb\u884c\u901a\u4fe1\uff0c\u8fd9\u79cd\u6a21\u5f0f\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u865a\u62df\u673a\u7684\u6570\u636e\u6ca1\u6709\u7ecf\u8fc7\u4f2a\u88c5\u4fbf\u76f4\u63a5\u4ea4\u7ed9\u4e86\u5916\u90e8\u7f51\u7edc\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f7f\u7528route\u6a21\u5f0f\u7f51\u7edc\u7684\u865a\u62df\u673a\u53ef\u4ee5\u4f7f\u7528\u516c\u7f51ip\u5730\u5740\uff0c\u800c\u7269\u7406\u673a\u5374\u6070\u6070\u5728\u8fd9\u4e2a\u65f6\u5019\u5b8c\u5168\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u5185\u7f51ip\u800c\u4e0d\u5bf9\u5916\u63d0\u4f9b\u8bbf\u95ee\uff0c\u8fd9\u6837\uff0c\u865a\u62df\u673a\u7684\u7f51\u5361\u4ec5\u4ec5\u628a\u7269\u7406\u673a\u5f53\u4f5c\u4e00\u4e2aroute\u6570\u636e\u7684\u5de5\u5177\uff0c\u6b64\u6a21\u5f0f\u5e94\u7528\u7684\u573a\u5408\u5f88\u591a\uff0c\u6bd4\u5982\u9700\u8981\u8ba9\u865a\u62df\u673a\u8fd0\u884c\u5728\u4e00\u4e2admz\u7f51\u7edc\u4e2d\u3002\u4f46\u662f\u4f7f\u7528route\u6a21\u5f0f\u6709\u8bf8\u591a\u9650\u5236\uff0c\u4f8b\u5982\u7269\u7406\u673a\u7684\u7f51\u7edc\u63a5\u53e3\u4e0d\u591f\u7528\u7684\u60c5\u51b5\u4e0b\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cnat\u6a21\u5f0f\u548croute\u6a21\u5f0f\u7684\u533a\u522b\u4ec5\u4ec5\u5728\u4e8e\u524d\u8005\u4f7f\u7528\u4e86iptables\u5bf9\u865a\u62df\u673a\u7684\u6570\u636e\u5305\u8fdb\u884c\u4e86\u4f2a\u88c5\uff0c\u800c\u540e\u8005\u6ca1\u6709\u3002"),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49routed\u7f51\u7edc"},"\u81ea\u5b9a\u4e49routed\u7f51\u7edc"),(0,l.kt)("p",null,"\u5728\u5b9e\u9645\u7684\u865a\u62df\u673a\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u78b0\u5230\u4e0b\u9762\u7684\u60c5\u51b5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 \u4f7f\u7528nat\u7f51\u7edc\u7684\u865a\u62df\u673a\u4e5f\u9700\u8981\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c"),(0,l.kt)("li",{parentName:"ul"},"2 \u7269\u7406\u673a\u53ea\u6709\u4e00\u4e2a\u7f51\u5361\u548c\u4e00\u4e2aip\uff0c\u800c\u6211\u4eec\u73b0\u5728\u65e2\u9700\u8981\u901a\u8fc7\u8fd9\u4e2a\u7f51\u5361\u6765\u7ba1\u7406\u865a\u62df\u673a\uff0c\u53c8\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a\u7f51\u5361\u6765\u63d0\u4f9broute\u7f51\u7edc\u3002")),(0,l.kt)("p",null,"\u5f53\u7136\u4f60\u6240\u80fd\u78b0\u5230\u7684\u95ee\u9898\u53ef\u80fd\u5343\u5947\u767e\u602a\uff0c\u4e5f\u53ef\u80fd\u6839\u672c\u6ca1\u6709\u78b0\u5230\u8fc7\u6b64\u7c7bbt\u95ee\u9898\u3002\u4e0b\u9762\u7684\u5185\u5bb9\u53ea\u4f5c\u4e3a\u5206\u6790\u548c\u89e3\u51b3\u95ee\u9898\u7684\u601d\u8def\uff0c\u4e0d\u80fd\u751f\u642c\u3002\u5728\u4e86\u89e3\u4e86libvirt\u7684\u7f51\u7edc\u7ba1\u7406\u6a21\u5f0f\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u81ea\u5df1\u52a8\u624b\u89e3\u51b3\u8fd9\u4e9b\u9650\u5236\uff0c\u4e0b\u9762\u91cd\u70b9\u89e3\u91ca\u7b2c\u4e8c\u79cd\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,"\u9996\u5148\u5047\u5b9aroute\u7f51\u7edc\u4f7f\u7528\u7684\u662fvirbr1\u865a\u62df\u7f51\u5361\uff0c\u800c\u865a\u62df\u673a\u4f7f\u7528virbr1\u6765\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u670d\u52a1\uff0c\u800c\u6211\u672c\u673a\u53c8\u6709\u4e86\u4e00\u4e2abr0\u4f5c\u4e3aem1\u7684\u6865\u63a5\u7f51\u5361\u6765\u5bf9\u5916\u63d0\u4f9b\u7f51\u7edc\u670d\u52a1\uff0cbr0\u7684ip\u662f192.168.1.51"),(0,l.kt)("p",null,"\u9996\u5148\u7981\u7528br0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ifdown br0\n")),(0,l.kt)("p",null,"\u5e76\u914d\u7f6ebr0\u7684onboot\u4e3ano,\u914d\u7f6e\u6587\u4ef6\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"onboot=no")),(0,l.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3aroute\u7684\u7f51\u7edc\uff0cvirbr1\u7684ip\u8bbe\u7f6e\u4e3a192.168.1.51 \uff0c\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u8ba9virbr1\u53d6\u4ee3\u4e4b\u524d\u7684br0."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<network>\n<name>route</name>\n<uuid>6224b437-386b-f510-11d5-58d58b1ce87a</uuid>\n<forward mode='route'/>\n<bridge name='virbr1' stp='on' delay='0' />\n<mac address='52:54:00:C8:9F:07'/>\n<ip address='192.168.1.51' netmask='255.255.255.0'>\n<dhcp>\n<range start='192.168.1.128' end='192.168.1.254' />\n</dhcp>\n</ip>\n</network>\n")),(0,l.kt)("p",null,"\u63a5\u7740\u751f\u6210\u5e76\u542f\u7528\u8be5\u7f51\u7edc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"virsh net-define route.xml\nvirsh net-start route\nvirsh net-autostart route\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/etc/libvirt/qemu/networks/  virsh net-define\u7684network\u4f1a\u4fdd\u5b58\u5230\u8fd9"),(0,l.kt)("li",{parentName:"ul"},"/var/lib/libvirt/network/  net-start\u542f\u52a8\u4e86\u7684network\u540c\u65f6\u4e5f\u4f1a\u4f1a\u4fdd\u5b58\u5230\u8fd9"),(0,l.kt)("li",{parentName:"ul"},"/etc/libvirt/qemu/networks/autostart/  net-autostart\u7684network\u540c\u65f6\u4e5f\u4f1a\u4fdd\u5b58\u5230\u8fd9")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u4fee\u6539em1\u7684\u914d\u7f6e\u5e76\u5c06\u5176\u6865\u63a5\u5230virbr1\u4e0a"),(0,l.kt)("p",null,"ifcfg-em1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'DEVICE="em1"\nONBOOT="yes"\nBRIDGE=virbr1\n')),(0,l.kt)("p",null,"\u63a5\u7740\u542f\u52a8em1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ifup em1\n")),(0,l.kt)("p",null,"\u81f3\u6b64em1\u5c31\u88ab\u6865\u63a5\u5230\u4e86virbr1\u4e0a\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u68c0\u67e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brctl show\n")),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u9700\u8981\u5728\u672c\u673a\u6dfb\u52a0\u4e00\u6761\u9ed8\u8ba4\u8def\u7531\uff0c\u4e0d\u7136\u865a\u62df\u673a\u662f\u8bbf\u95ee\u4e0d\u4e86\u5916\u9762\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"route add default gw 192.168.1.1 dev virbr1\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684192.168.1.1\u662f\u771f\u5b9e\u7684\u8def\u7531\u3002\u81f3\u6b64\uff0c\u95ee\u9898\u5df2\u7ecf\u89e3\u51b3\u4e86\u3002"),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49nat\u7f51\u7edc"},"\u81ea\u5b9a\u4e49nat\u7f51\u7edc"),(0,l.kt)("p",null,"\u4e0b\u9762\u8bf4\u8bf4\u95ee\u98981\u7684\u89e3\u51b3\u65b9\u6cd5\uff1a\n\u65e2\u7136\u77e5\u9053\u4e86nat\u51fa\u53bb\u7684\u865a\u62df\u673a\u53ea\u80fd\u8bbf\u95ee\u5916\u7f51\u800c\u5916\u7f51\u5374\u4e0d\u80fd\u8bbf\u95ee\u8fdb\u6765\uff0cnat\u53c8\u662f\u901a\u8fc7iptables\u6765\u505a\u7684\uff0c\u4e5f\u5c31\u662f\u5f53libvirt\u6bcf\u6b21\u542f\u52a8\u7684\u65f6\u5019\u90fd\u4f1a\u5f80iptables\u6700\u524d\u9762\u63d2\u5165\u81ea\u5df1\u7684\u89c4\u5219\u4ee5\u4fdd\u8bc1nat\u7684\u865a\u62df\u673a\u80fd\u6b63\u5e38\u8bbf\u95ee\u5916\u7f51\uff0c\u90a3\u4e48\u6211\u4eec\u662f\u4e0d\u662f\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539iptables\u7684\u89c4\u5219\u6765\u5b9e\u73b0\u5462\uff0c\u6bd4\u5982\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5185\u7f51ip\u7684\u865a\u62df\u673a\u5bf9\u5916\u63d0\u4f9b80\u670d\u52a1\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u628a\u7269\u7406\u673a\u768480\u7aef\u53e3\u6620\u5c04\u5230\u8fd9\u53f0\u865a\u62df\u673a\u768480\u7aef\u53e3\u4e0a\uff0c\u56e0\u4e3a\u6211\u4eec\u7684\u7269\u7406\u673a\u662f\u53ef\u4ee5\u76f4\u63a5\u548c\u865a\u62df\u673a\u901a\u4fe1\u7684\uff0c\u53ea\u662f\u5916\u7f51\u4e0d\u80fd\u800c\u5df2\uff0c\u4e0b\u9762\u6dfb\u52a0\u89c4\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"iptables -t nat -A PREROUTING -p tcp -i virbr1 --dport 80  -j DNAT --to-destination 192.168.122.2:80\n")),(0,l.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u5bf9\u5916\u90e8\u8bbf\u95ee80\u7aef\u53e3\u8fdb\u6765\u7684\u6570\u636e\u8fdb\u884c\u4e86dnat\uff0c\u800c\u51fa\u53bb\u7684\u6211\u4eec\u4e0d\u7528snat\uff0c\u53ea\u9700\u8981\u518d\u6dfb\u52a0\u5982\u4e0b\u89c4\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"iptables -I FORWARD -i virbr1 -o virbr0 -p tcp -m state --state NEW -j ACCEPT\n")),(0,l.kt)("p",null,"\u81f3\u6b64\u95ee\u9898\u770b\u4f3c\u5f97\u5230\u89e3\u51b3\uff0c\u4f46\u662f\u6211\u4eec\u5ffd\u7565\u4e86\u4e00\u4e2a\u5173\u952e\u7684\u95ee\u9898\uff0c\u90a3\u5c31\u662f\u6bcf\u5f53libvirt\u542f\u52a8\u7684\u65f6\u5019\u5c31\u4f1a\u5f80\u8868\u7684\u6700\u524d\u9762\u63d2\u5165\u5b83\u81ea\u5df1\u7684\u89c4\u5219\uff0c\u800ciptables\u7684\u89c4\u5219\u662f\u6709\u5148\u540e\u987a\u5e8f\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u6211\u4eec\u81ea\u5df1\u6dfb\u52a0\u7684\u89c4\u5219\u5728libvirtd\u670d\u52a1\u91cd\u542f\u4e4b\u540e\u5373\u88ablibvirt\u5b9a\u4e49\u7684\u89c4\u5219\u6240\u6df9\u6ca1\uff0c\u600e\u4e48\u529e\u5462\uff0c\u6211\u73b0\u5728\u53ea\u60f3\u5230\u4e86\u8fd9\u4e48\u4e00\u4e2a\u65b9\u6cd5\uff0c\u76f4\u63a5\u4fee\u6539libvirtd\u7684\u542f\u52a8\u811a\u672c\uff0c\u5728\u5b83\u7684\u89c4\u5219\u751f\u6548\u4e4b\u540e\u63d2\u5165\u6211\u4eec\u81ea\u5b9a\u4e49\u7684\u89c4\u5219\uff1a"),(0,l.kt)("p",null,"vi  /etc/init.d/libvirtd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'start() {\n    echo -n $"Starting $SERVICE daemon: "\n    initctl_check\n\n    mkdir -p /var/cache/libvirt\n    rm -rf /var/cache/libvirt/*\n    KRB5_KTNAME=$KRB5_KTNAME daemon --pidfile $PIDFILE --check $SERVICE $PROCESS --daemon $LIBVIRTD_CONFIG_ARGS $LIBVIRTD_ARGS\n    RETVAL=$?\n    echo\n    [ $RETVAL -eq 0 ] && touch /var/lock/subsys/$SERVICE\n    sleep 1\n    iptables -D FORWARD -i virbr1 -o virbr0 -p tcp -m state --state NEW -j ACCEPT\n    iptables -I FORWARD -i virbr1 -o virbr0 -p tcp -m state --state NEW -j ACCEPT\n... ...\n')),(0,l.kt)("p",null,"\u81f3\u6b64\u95ee\u9898\u57fa\u672c\u89e3\u51b3\u3002"),(0,l.kt)("h2",{id:"route\u7f51\u7edc\u8f6c\u6362nat\u7f51\u7edc"},"route\u7f51\u7edc\u8f6c\u6362nat\u7f51\u7edc"),(0,l.kt)("p",null,"\u53e6\u5916\u4e00\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u524d\u9762\u6709\u53d1\u73b0route\u548cnat\u7684\u7f51\u7edc\u533a\u522b\u4ec5\u4ec5\u662f\u4e00\u4e2a\u505a\u4e86nat\u7684iptables\u89c4\u5219\u4e00\u4e2a\u6ca1\u6709\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4e0d\u53ef\u4ee5\u81ea\u5df1\u5728iptables\u91cc\u9762\u6dfb\u52a0\u76f8\u5e94\u7684\u89c4\u5219\u5c06route\u7f51\u7edc\u53d8\u8eab\u4e3anat\u7f51\u7edc\u5462\uff1f\u7b54\u6848\u80af\u5b9a\u662f\u53ef\u4ee5\u7684\uff0c\u53ea\u9700\u8981\u6dfb\u52a0\u4e0a\u4e0b\u9762\u7684\u89c4\u5219\u5373\u53ef,\u539f\u7406\u8fd8\u8bf7\u89c2\u770b\u672c\u6587\u7684\u540c\u5b66\u81ea\u5df1\u5206\u6790\uff0c\u8fd9\u91cc\u5047\u8bbe\u6211\u4eecroute\u7f51\u7edc\u7ed9\u865a\u62df\u673a\u5206\u914d\u7684ip\u662f192.168.100.0/24\u7f51\u6bb5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"iptables -t nat -A POSTROUTING -s 192.168.100.0/24 -d ! 192.168.100.0/24 -j MASQUERADE\niptables -A FORWARD --destination 192.168.100.0/24 -m state --state RELATED,ESTABLISHED -j ACCEPT\n")),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49dnsmasq"},"\u81ea\u5b9a\u4e49dnsmasq"),(0,l.kt)("p",null,"\u8fd9\u91cc\u518d\u6dfb\u52a0\u4e00\u4e2a\u53ef\u4ee5\u624b\u5de5\u542f\u52a8dnsmasq\u7684\u5c0f\u811a\u672c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nbrctl addbr routebr\nifconfig routebr 192.168.122.1 netmask 255.255.255.0\niptables -t nat -A POSTROUTING -s 192.168.122.0/24 -d ! 192.168.122.0/24 -j MASQUERADE\niptables -A FORWARD --destination 192.168.122.0/24 -m state --state RELATED,ESTABLISHED -j ACCEPT\n/usr/sbin/dnsmasq \\\n--strict-order \\\n--bind-interfaces \\\n--pid-file=/usr/local/vps/network/default.pid \\\n--conf-file= \\\n--except-interface lo \\\n--listen-address 192.168.122.1 \\\n--dhcp-range 192.168.122.2,192.168.122.254 \\\n--dhcp-leasefile=/usr/local/vps/network/dnsmasq/default.leases \\\n--dhcp-lease-max=253 \\\n--dhcp-no-override \\\n--dhcp-hostsfile=/usr/local/vps/network/dnsmasq/default.hostsfile\n")),(0,l.kt)("h2",{id:"\u91cd\u542fnetwork\u5bfc\u81f4\u7f51\u7edc\u4e2d\u65ad"},"\u91cd\u542fnetwork\u5bfc\u81f4\u7f51\u7edc\u4e2d\u65ad"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u9700\u8981\u5b9e\u65f6\u4fee\u6539network\u7684\u914d\u7f6e\u5e76\u4f7f\u4e4b\u751f\u6548\u7684\u65f6\u5019\uff0c\u5c31\u5f97\u91cd\u65b0\u542f\u52a8\u6b64network\uff0c\u4e5f\u5c31\u662f\u9700\u8981net-destroy\u518dnet-start\u4e00\u4e0b\uff0c\u6211\u4eec\u7684\u914d\u7f6e\u624d\u80fd\u751f\u6548\uff0c\u4f46\u662f\u968f\u4e4b\u800c\u6765\u7684\u95ee\u9898\u662f\uff0c\u5f53network\u88ab\u91cd\u65b0\u542f\u52a8\u4e4b\u540e\uff0c\u865a\u62df\u673a\u4fbf\u65e0\u6cd5\u8bbf\u95ee\u7f51\u7edc\u4e86\uff0c\u9664\u975e\u628a\u865a\u62df\u673a\u7684network interface\u91cd\u65b0attach\u4e00\u4e0b\uff0c\u6216\u8005\u7b49\u5230\u865a\u62df\u673a\u91cd\u65b0\u542f\u52a8\uff0c\u90a3\u4e48\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\u8fd9\u6837\u7684\u95ee\u9898\u5462\uff1f\u6211\u4eec\u5148\u4ece\u5b83\u7684\u8868\u8c61\u5f00\u59cb\u5206\u6790\uff0c\u81f3\u4e8e\u662f\u5426\u8981\u8ffd\u7a76\u5230\u6e90\u7801\u91cc\u9762\u5c31\u53d6\u51b3\u4e8e\u540c\u5b66\u4eec\u81ea\u5df1\u4e86\uff0c\u53cd\u6b63\u6211\u6682\u65f6\u6ca1\u90a3\u529f\u592b\u3002\u8fd9\u91cc\u4ec5\u4ec5\u662f\u629b\u51fa\u6765\u4e86\u4e00\u5757\u7816\u3002"),(0,l.kt)("p",null,"\u5f53\u4e00\u4e2anetwork\u542f\u52a8\u4e4b\u540e\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u865a\u62df\u7f51\u5361\u63a5\u53e3\u5982virbr1\uff0c\u4e5f\u4f1a\u751f\u6210\u5176\u4ed6\u4e00\u4e9b\u9700\u8981\u7684\u4e1c\u897f\uff0c\u800c\u91cd\u65b0\u542f\u52a8\u4e86libvirt\u7684network\u4e4b\u540e\u8fd9\u4e2a\u63a5\u53e3\u4e5f\u4f1a\u88ab\u91cd\u542f\uff0c\u6240\u4ee5\u5c31\u5bfc\u81f4\u4e86\u4e2d\u9014\u6709\u4e00\u4e2a\u4e2d\u65ad\u7684\u8fc7\u7a0b\uff0c"),(0,l.kt)("p",null,"\u90a3\u4e8b\u60c5\u5c31\u6bd4\u8f83\u6e05\u6670\u4e86\uff0c\u5982\u679c\u4f60\u5c06libvirt\u542f\u52a8\u7f51\u7edc\u7684\u6240\u6709\u8fc7\u7a0b\u62c6\u5206\u5f00\u6765\u4e00\u4e2a\u4e00\u4e2a\u7684\u624b\u52a8\u751f\u6210\uff0c\u9700\u8981\u4fee\u6539\u67d0\u4e00\u90e8\u5206\u914d\u7f6e\u7684\u65f6\u5019\u5b9e\u9645\u4e0a\u4f60\u53ea\u9700\u8981\u4fee\u6539\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\u800c\u4e0d\u9700\u8981\u91cd\u65b0\u542f\u52a8\u8fd9\u4e2avirbr1\u63a5\u53e3\uff0c\u6bd4\u5982\u4e0a\u9762\u63d0\u5230\u7684mac+ip\u7684\u7ed1\u5b9a\uff0c\u5982\u679c\u628adnsmasq\u72ec\u7acb\u51fa\u6765\uff0c\u4e0d\u8ba9libvirt\u63a5\u7ba1\uff0c\u90a3\u4e48\u589e\u52a0\u4e86mac+ip\u7ed1\u5b9a\u4e4b\u540e\uff0c\u4ec5\u4ec5\u9700\u8981\u91cd\u542fdnsmasq\u8fd9\u4e2a\u670d\u52a1\u3002"))}d.isMDXComponent=!0}}]);
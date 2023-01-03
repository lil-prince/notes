"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),b=c(n),m=o,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||l;return n?r.createElement(u,s(s({ref:t},p),{},{components:n})):r.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[b]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={layout:"post",title:"\u4f7f\u7528cobbler\u6279\u91cf\u5b89\u88c5centos\u7cfb\u7edf",description:"\u63cf\u8ff0",categories:["shell"],tags:["bash"]},s=void 0,a={permalink:"/notes/blog/2022/04/20/pxe-cobbler-install",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2022-04-20-pxe-cobbler-install.md",source:"@site/blog/2022-04-20-pxe-cobbler-install.md",title:"\u4f7f\u7528cobbler\u6279\u91cf\u5b89\u88c5centos\u7cfb\u7edf",description:"\u63cf\u8ff0",date:"2022-04-20T00:00:00.000Z",formattedDate:"2022\u5e744\u670820\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"}],readingTime:11.21,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u4f7f\u7528cobbler\u6279\u91cf\u5b89\u88c5centos\u7cfb\u7edf",description:"\u63cf\u8ff0",categories:["shell"],tags:["bash"]},prevItem:{title:"pre-commit basic usage",permalink:"/notes/blog/2022/04/20/pre-commit-basic"},nextItem:{title:"CVM\u4f7f\u7528ISO\u955c\u50cf\u5b89\u88c5\u94f6\u6cb3\u9e92\u9e9fv10 arm\u7cfb\u7edf",permalink:"/notes/blog/2021/12/16/cvm-kylin-v10-iso-install"}},i={authorsImageUrls:[]},c=[{value:"\u57fa\u672c\u4ecb\u7ecd\uff1a",id:"\u57fa\u672c\u4ecb\u7ecd",level:3},{value:"cobbler\u5b89\u88c5\u914d\u7f6e\uff1a",id:"cobbler\u5b89\u88c5\u914d\u7f6e",level:3},{value:"\u7cfb\u7edf\u955c\u50cf\u51c6\u5907\uff1a",id:"\u7cfb\u7edf\u955c\u50cf\u51c6\u5907",level:3},{value:"\u4f7f\u7528\u865a\u62df\u673a\u6d4b\u8bd5PXE",id:"\u4f7f\u7528\u865a\u62df\u673a\u6d4b\u8bd5pxe",level:3}],p={toc:c};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,o.kt)("h3",{id:"\u57fa\u672c\u4ecb\u7ecd"},"\u57fa\u672c\u4ecb\u7ecd\uff1a"),(0,o.kt)("p",null,"PXE\uff08preboot execute environment\uff09\u7531Intel\u53d1\u660e\u7684\u901a\u8fc7\u7f51\u7edc\u5feb\u901f\u5f15\u5bfc\u64cd\u4f5c\u7cfb\u7edf\u7684\u6280\u672f\uff0c\u5176\u539f\u7406\u662f\u5728\u673a\u5668\u5f15\u5bfc\u65f6\u901a\u8fc7server\u7aef\u4e3a\u7f51\u5361DHCP\u5206\u914dIP\u4fe1\u606f\uff0c\u5e76\u901a\u77e5client\u7aefnext_server\u4e2d\u7684tftp\u5730\u5740\uff0cclient\u7aef\u7ee7\u7eed\u901a\u8fc7tftp\u4e0b\u8f7d\u7cfb\u7edf\u5f15\u5bfc\u955c\u50cf\uff0c\u52a0\u8f7d\u5e76\u5b8c\u6210\u542f\u52a8\u3002\u8fd9\u91cc\u6211\u4eec\u8fd8\u4f1a\u7528\u5230\u53e6\u5916\u4e00\u9879\u6280\u672f\u53ebkickstart\uff0c\u7531\u7ea2\u5e3d\u5f00\u53d1\uff0c\u65e9\u5148\u7528\u4e8e\u5176\u7cfb\u7edf\u5b89\u88c5\u5de5\u5177\u4e2d\u4ee5\u5b8c\u6210\u81ea\u52a8\u5316\u5b89\u88c5\uff0c\u5df2\u88ab\u4f17\u591a\u53d1\u884c\u7248\u652f\u6301\u3002\u7cfb\u7edf\u5f15\u5bfc\u65f6\u53ef\u4ee5\u901a\u8fc7kickstart\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u7684\u5b89\u88c5\u6d41\u7a0b\u81ea\u52a8\u5b8c\u6210\u540e\u7eed\u6b65\u9aa4\uff0c\u51cf\u5c11\u4eba\u5de5\u5e72\u9884\u3002\u800c\u901a\u5e38\u624b\u5de5\u914d\u7f6edhcp\u3001tftp\u3001kickstart\u7b49\u5f80\u5f80\u6bd4\u8f83\u7e41\u7410\uff0c\u8fd9\u91cc\u6211\u4eec\u4f1a\u5229\u7528\u7ea2\u5e3d\u5f00\u53d1\u7684\u53e6\u5916\u4e00\u6b3e\u5de5\u5177cobbler\uff0c\u901a\u8fc7cobbler\u6765\u5b8c\u6210\u6574\u4e2adhcp\u3001tftp\u3001kickstart\u7b49\u7ec4\u6210\u7684server\u7aef\u73af\u5883\u7684\u5feb\u901f\u642d\u5efa\u548c\u7ba1\u7406\uff0c\u4ee5\u6b64\u63d0\u9ad8\u6548\u7387\u3002"),(0,o.kt)("h3",{id:"cobbler\u5b89\u88c5\u914d\u7f6e"},"cobbler\u5b89\u88c5\u914d\u7f6e\uff1a"),(0,o.kt)("p",null,"\u6211\u4eec\u4f7f\u7528CentOS7\u4f5c\u4e3aserver\u7aef\u7cfb\u7edf\uff0c\u4e3a\u4e86\u8282\u7ea6\u73b0\u573a\u90e8\u7f72\u65f6\u95f4\uff0c\u6211\u4eec\u5c06\u63d0\u524d\u51c6\u5907\u597d\u73af\u5883\u5e76\u76f4\u63a5\u5e26\u5230\u73b0\u573a\u4f7f\u7528\uff0c\u4ee5\u4e0b\u6240\u6709\u64cd\u4f5c\u5c06\u5728\u4e00\u53f0ThinkPad\u4e0a\u5b8c\u6210\u3002"),(0,o.kt)("p",null,"\u56e0\u79c1\u6709\u5316\u73af\u5883\u65e0\u9700\u8fde\u5916\u7f51\uff0c\u56e0\u6b64\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\u6211\u4eec\u4e3a\u4e86\u7b80\u5316\u90e8\u7f72\u6d41\u7a0b\uff0c\u53ef\u4ee5\u5c06selinux\u548c\u9632\u706b\u5899\u7981\u7528\u6389\uff0c\u5982\u9700\u8981\u542f\u7528\u9632\u706b\u5899\u7684\u8bdd\u5219\u9700\u8981\u653e\u5f00http/dhcp/tftp\u7b49\u670d\u52a1\u7684\u5bf9\u5e94\u7aef\u53e3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# disable selinux\nsed -i 's/^SELINUX=.*$/SELINUX=disabled/' /etc/selinux/config\n\n# disable iptables\nsystemctl disable firewalld\nsystemctl stop firewalld\n\nreboot\n")),(0,o.kt)("p",null,"\xa0\u5b89\u88c5cobbler\u53ca\u76f8\u5173\u7684\u4f9d\u8d56\u5305\uff1acobbler\u63d0\u4f9b\u4e86\u547d\u4ee4\u884c\u7ba1\u7406\u5de5\u5177\u548c\u4e00\u4e2aweb\u7ba1\u7406\u5de5\u5177\uff0c\u5206\u522b\u7531cobbler\u548ccobbler-web\u4e24\u4e2a\u5305\u63d0\u4f9b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yum install epel-release\nyum install cobbler cobbler-web httpd dhcp tftp xinetd rsync bind\n")),(0,o.kt)("p",null,"\u914d\u7f6ecobbler\uff1acobbler\u914d\u7f6e\u6587\u4ef6\u653e\u7f6e\u5728/etc/cobbler\u76ee\u5f55\uff0c\u5728\u542f\u52a8\u4e4b\u524d\u9700\u8981server\u7aefIP\uff0cdhcp\u7b49\u76f8\u5173\u4fe1\u606f\uff0c\u9996\u5148\u4fee\u6539 /etc/cobbler/settings\u4e3b\u914d\u7f6e\u6587\u4ef6\uff0c\u9700\u8981\u4fee\u6539\u7684\u53c2\u6570\u6709\u4ee5\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# \u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210\u7cfb\u7edf\u5b89\u88c5\u540e\u7684\u9ed8\u8ba4root\u5bc6\u7801\nopenssl passwd -1\n# \u5e76\u5c06\u751f\u6210\u7684\u5bc6\u7801\u4fee\u6539\u5230\u914d\u7f6e\u4e2d\ndefault_password_crypted: \u201c$1$RUNYOYnz$QgzdhCD2T7qXWI1IPpAih0\u201d\n\n# server\u7aefip\uff0c\u5bf9\u5916\u63d0\u4f9bdhcp\u548chttp\u670d\u52a1\uff0c\u5fc5\u987b\u4e3a\u4e00\u4e2a\u56fa\u5b9a\u5185\u7f51ip\u5730\u5740\nserver: 192.168.1.1\n\n# next_server\u4e3atftp\u670d\u52a1\u6240\u5728ip\uff0c\u901a\u5e38\u662f\u9700\u8981\u548cserver\u4fdd\u6301\u4e00\u81f4\nnext_server: 192.168.1.1\n\n# \u6253\u5f00cobbler\u5bf9\u76f8\u5173\u670d\u52a1\u7684\u81ea\u52a8\u7ba1\u7406\u529f\u80fd\uff0c\u5982\u914d\u7f6e\u53d8\u66f4\u548c\u542f\u505c\u7b49\nmanage_dhcp: 1\nmanage_tftpd\uff1a1\n")),(0,o.kt)("p",null,"\xa0\u4fee\u6539\u4f9d\u8d56\u7ec4\u4ef6\u7684\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sed -i '/disable/c\\\\tdisable\\t\\t\\t= no' /etc/xinetd.d/tftp\nservice xinetd restart\n\u4fee\u6539dhcp\u7f51\u6bb5\uff1avi /etc/cobbler/dhcp.template\nsubnet 192.168.1.0 netmask 255.255.255.0 {\n     option routers             192.168.1.1;\n     option domain-name-servers 192.168.1.1;\n\xa0 \xa0 \xa0range dynamic-bootp \xa0 \xa0 \xa0 \xa0192.168.1.100 192.168.1.200;\n     option subnet-mask         255.255.255.0;\n     filename                   \"/pxelinux.0\";\n     default-lease-time         21600;\n     max-lease-time             43200;\n     next-server                $next_server;\n}\n")),(0,o.kt)("p",null,"\u542f\u52a8\u670d\u52a1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'systemctl start httpd\nsystemctl start cobblerd\n\nsystemctl enable httpd\nsystemctl enable cobblerd\n\xa0\u670d\u52a1\u68c0\u67e5\uff1acobbler\u63d0\u4f9b\u4e86check\u547d\u4ee4\u53ef\u7528\u4e8e\u68c0\u67e5\u5404\u9879\u914d\u7f6e\u662f\u5426\u6ee1\u8db3\u9700\u8981\n\ncobbler check\n# \u901a\u5e38\u7b2c\u4e00\u6b21\u4f1a\u63d0\u793a\u4e0b\u8f7dloader\ncobbler get-loaders\n# \u5982\u4e2d\u9014\u4fee\u6539cobbler\u914d\u7f6e\u540e\u9700\u91cd\u542fcobbler\u670d\u52a1\nsystemctl restart cobblerd\n# \u5982\u53d8\u66f4\u4e86dhcp\u3001tftp\u7b49\u76f8\u5173\u4fe1\u606f\u9700\u91cd\u65b0\u540c\u6b65\u914d\u7f6e\ncobbler sync\n# \u987a\u4fbf\u914d\u7f6e\u597dweb\u7ba1\u7406\u9875\u9762\u7684\u8bbf\u95ee\u5bc6\u7801\nhtdigest /etc/cobbler/users.digest "Cobbler" cobbler\n')),(0,o.kt)("p",null,"\xa0\u53ef\u4ee5\u53cd\u590d\u901a\u8fc7check\u547d\u4ee4\u6765\u68c0\u67e5\u73af\u5883\u662f\u5426\u90e8\u7f72OK\uff0c\u5e76\u6839\u636e\u5b9e\u9645\u9700\u6c42\u8c03\u6574\u5404\u9879\u914d\u7f6e\u6587\u4ef6\uff0c\u76f4\u81f3check\u7ed3\u679c\u590d\u5408\u8981\u6c42\u5373\u53ef\u3002\u81f3\u6b64cobbler\u7684\u5b89\u88c5\u53ca\u914d\u7f6e\u5b8c\u6210\u3002web\u7aef\u5de5\u5177\u8bbf\u95ee\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://192.168.1.1/cobbler_web"},"https://192.168.1.1/cobbler_web")),(0,o.kt)("h3",{id:"\u7cfb\u7edf\u955c\u50cf\u51c6\u5907"},"\u7cfb\u7edf\u955c\u50cf\u51c6\u5907\uff1a"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u5c06\u7cfb\u7edf\u955c\u50cf\u5bfc\u5165cobbler\u4e2d\uff0c\u5e76\u81ea\u5b9a\u4e49\u5b89\u88c5\u5f15\u5bfc\u7684kickstart\u914d\u7f6e\u3002\u6211\u4eec\u8981\u90e8\u7f72\u5230\u8282\u70b9\u4e0a\u7684\u7cfb\u7edf\u662fCentOS7\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u5982\u679c\u9700\u8981\u901a\u8fc7kickstart\u5b9a\u5236\u4e00\u4e9b\u57fa\u7840\u8f6f\u4ef6\u5305\u7684\u5b89\u88c5\uff0c\u90a3\u4e48\u9700\u8981\u4f7f\u7528\u8f6f\u4ef6\u5305\u66f4\u5168\u7684DVD iso\uff0c\u56e0minimal iso\u4e2d\u63d0\u4f9b\u7684\u8f6f\u4ef6\u5305\u6709\u9650\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# \u5c06iso\u6302\u8f7d\u5230\u672c\u5730\u76ee\u5f55\nmount -o auto CentOS-7-x86_64-DVD-1611.iso /mnt/\n# \u5bfc\u5165\u5230cobbler\u4e2d\ncobbler import --name=centos7 --arch=x86_64 --path=/mnt\n# \u67e5\u770b\u5bfc\u5165\u7684\u7cfb\u7edf\u53caprofile\ncobbler distro list\ncobbler distro report --name=centos7-x86_64\ncobbler profile list\n# \u5378\u8f7diso mount point\numount /mnt/\n")),(0,o.kt)("p",null,"\xa0\u53ef\u4ee5\u770b\u5230\u4e0a\u9762\u7684\u6b65\u9aa4\u4e2d\u6211\u4eec\u5c06CentOS7\u955c\u50cf\u5bfc\u5165\u5230cobbler\u4e2d\uff0c\u6709\u51e0\u4e2a\u6838\u5fc3\u6982\u5ff5\u9700\u8981\u7406\u89e3\uff1a"),(0,o.kt)("p",null,"distro - \u53ca\u7cfb\u7edf\u53d1\u884c\u7248\u672c\uff0c\u4e0d\u540c\u7684\u955c\u50cf\u5bfc\u5165\u540e\u5bf9\u5e94\u4e0d\u540c\u7684distro\uff0c\u5982centos7-x86_64\uff0c\u4e0d\u540c\u7684distro\u5bf9\u5e94\u4e0d\u540c\u7684\u5f15\u5bfc\u955c\u50cf\uff1b"),(0,o.kt)("p",null,"profile - distro\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4e00\u4e2adistro\u53ef\u4ee5\u6709\u591a\u4e2aprofile\uff0c\u9ed8\u8ba4\u5bfc\u5165\u65f6\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2aprofile\uff0c\u4e0d\u540c\u7684profile\u53ef\u4ee5\u5b9a\u4e49\u4e0d\u540c\u7684kernel\u9009\u9879\uff0c\u4f7f\u7528\u4e0d\u540c\u7684kickstart\u914d\u7f6e\uff1b"),(0,o.kt)("p",null,"system - \u5404\u4e2a\u673a\u5668\u6240\u4f7f\u7528\u7684profile\u5b9e\u4f8b\uff0c\u4e0e\u673a\u5668MAC\u5730\u5740\u7ed1\u5b9a\uff0c\u53ef\u4ee5\u7ec6\u5316\u5230\u673a\u5668\u7ea7\u522b\u7684\u81ea\u5b9a\u4e49\u5b89\u88c5\uff0c\u5982\u679c\u6240\u6709\u673a\u5668\u5b89\u88c5\u90fd\u662f\u7edf\u4e00\u7684\u5219\u65e0\u9700\u4f7f\u7528system\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\xa0\u63a5\u4e0b\u6765\u9700\u8981\u7406\u89e3\u7684\u662fcobbler\u4e2d\u5bf9kickstart\u6587\u4ef6\u7684\u7ba1\u7406\u65b9\u5f0f\uff0cks\u6587\u4ef6\u662f\u6211\u4eec\u9700\u8981\u91cd\u70b9\u5173\u6ce8\u7684\u4e2d\u95f4\u4ea7\u7269\uff0c\u51b3\u5b9a\u4e86\u7cfb\u7edf\u81ea\u52a8\u5316\u90e8\u7f72\u7684\u6267\u884c\u6d41\u7a0b\u548c\u6700\u7ec8\u6548\u679c\u3002ks\u6587\u4ef6\u4e0eprofile\u7ed1\u5b9a\uff0c\u9ed8\u8ba4\u751f\u6210\u7684profile\u4f1a\u6307\u5411\u4e00\u4e2a\u9ed8\u8ba4\u7684ks\u6587\u4ef6\uff0c\u901a\u5e38\u6211\u4eec\u9700\u8981\u5bf9\u5176\u8fdb\u884c\u81ea\u5b9a\u4e49\u6765\u6ee1\u8db3\u4e0d\u540c\u7684\u90e8\u7f72\u8981\u6c42\u3002\u5f53\u7cfb\u7edf\u901a\u8fc7PXE\u5f15\u5bfc\u81f3profile\u9009\u62e9\u83dc\u5355\u540e\uff0c\u4e00\u65e6\u9009\u5b9a\u4e86\u9700\u8981\u90e8\u7f72\u7684\u7cfb\u7edf\uff0c\u63a5\u4e0b\u6765\u5c31\u4f1a\u6309\u7167\u8be5profile\u6240\u5bf9\u5e94\u7684ks\u6587\u4ef6\u6765\u6267\u884c\u4e00\u7cfb\u5217\u7684\u5b89\u88c5\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u5728cobbler\u4e2dks\u6587\u4ef6\u7684\u5b9e\u4f8b\u662f\u901a\u8fc7cgi\u52a8\u6001\u751f\u6210\u7684\uff0c\u800c\u751f\u6210ks\u5b9e\u4f8b\u6240\u4f9d\u8d56\u7684\u5219\u662fks templates\u548csnippets\uff0c cobbler\u901a\u8fc7template\u6765\u5c06ks\u6587\u4ef6\u4e3b\u4f53\u6d41\u7a0b\u90e8\u5206\u6a21\u677f\u5316\uff0c\u901a\u8fc7snippets\u6765\u7ba1\u7406\u53ef\u4ee5\u5728\u4e0d\u540cks templates\u4e2d\u516c\u7528\u7684\u6d41\u7a0b\u7247\u6bb5\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u7684\u9700\u6c42\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"\u5b89\u88c5\u4e00\u4e2a\u7cbe\u7b80\u7684CentOS7\u7cfb\u7edf\uff1b\n\u540c\u65f6\u9ed8\u8ba4\u5b89\u88c5\u4e00\u4e9b\u5fc5\u8981\u7684\u8f6f\u4ef6\u5305\uff1b\n\u9996\u6b21\u5b89\u88c5\u65f6\u53ea\u5bf9\u7cfb\u7edf\u76d8\u8fdb\u884c\u5206\u533a\u548c\u683c\u5f0f\u5316\uff0c\u5176\u4ed6\u78c1\u76d8\u4e0d\u52a8\uff1b\n\u4e3a\u4e86\u4fbf\u4e8e\u7ba1\u7406\u6211\u4eec\u5c06\u66f4\u6539\u7f51\u5361\u540d\u4e3aethX\uff0c\u4e14\u9ed8\u8ba4\u7981\u7528IPv6,\uff1b\n\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\u865a\u62df\u673a\u6d4b\u8bd5\u6574\u4e2a\u5b89\u88c5\u6d41\u7a0b\uff0c\u9700\u8981\u5728\u78c1\u76d8\u5206\u533a\u65f6\u81ea\u52a8\u9002\u914d\u78c1\u76d8\u540d\u5982vda/sda\uff1b\n\u5b89\u88c5\u5b8c\u6210\u540e\u80fd\u5bf9\u4e00\u4e9b\u57fa\u7840\u914d\u7f6e\u8fdb\u884c\u521d\u59cb\u5316\u3002\xa0 \xa0 \xa0 \xa0"),(0,o.kt)("p",null,"\u9996\u5148\u62f7\u8d1dcobbler\u9ed8\u8ba4\u7684template\u751f\u6210\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684ks template\uff0c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kickstart template for TBDS\n# (includes %end blocks)\n# do not use with earlier distros\n\n#platform=x86, AMD64, or Intel EM64T\n# System authorization information\nauth --useshadow --enablemd5\n# System bootloader configuration\n#bootloader --location=mbr\n# Partition clearing information\nclearpart --all --initlabel\n# Use text mode install\ntext\n# Firewall configuration\nfirewall --disabled\n# Run the Setup Agent on first boot\nfirstboot --disable\n# System keyboard\nkeyboard us\n# System language\nlang en_US\n# Use network installation\nurl --url=$tree\n# If any cobbler repo definitions were referenced in the kickstart profile, include them here.\n$yum_repo_stanza\n# Network information\n$SNIPPET('network_config')\n# Reboot after installation\nreboot\n\n#Root password\nrootpw --iscrypted $default_password_crypted\n# SELinux configuration\nselinux --disabled\n# Do not configure the X Window System\nskipx\n# System timezone\ntimezone Asia/Shanghai\n\n# Install OS instead of upgrade\ninstall\n# Clear the Master Boot Record\nzerombr\n# Allow anaconda to partition the system as needed\n#autopart\n$SNIPPET('main_partition_select')\n\n%pre\n$SNIPPET('log_ks_pre')\n$SNIPPET('kickstart_start')\n$SNIPPET('pre_install_network_config')\n$SNIPPET('pre_partition_select_tbds')\n# Enable installation monitoring\n$SNIPPET('pre_anamon')\n%end\n\n%packages\n@^minimal\n@core\nchrony\nwget\nnet-tools\npython-setuptools\nrsync\nlrzsz\nexpect\ntcl\nntpdate\n-selinux-policy*\n-NetworkManager*\n-kexec-tools\n-snappy\n-wpa_supplicant\n-ppp\n%end\n\n%addon com_redhat_kdump --disable --reserve-mb='auto'\n\n%end\n\n%post --nochroot\n$SNIPPET('log_ks_post_nochroot')\n%end\n\n%post\n$SNIPPET('log_ks_post')\n# Start yum configuration\n$yum_config_stanza\n# End yum configuration\n$SNIPPET('post_install_kernel_options')\n$SNIPPET('post_install_network_config')\n$SNIPPET('download_config_files')\n$SNIPPET('cobbler_register')\n# Enable post-install boot notification\n$SNIPPET('post_anamon')\n$SNIPPET('post_install_custom_sys')\n# Start final steps\n$SNIPPET('kickstart_done')\n# End final steps\n\n%end\n")),(0,o.kt)("p",null,"\xa0\u6ce8\u610fks template\u4e2d\u7684\u7ea2\u8272\u90e8\u5206\u4e3a\u6211\u4eec\u589e\u52a0\u7684\u81ea\u5b9a\u4e49snippets\uff0c\u7b2c\u4e00\u4e2apre_partition_select_tbds\u4f5c\u7528\u662f\u81ea\u52a8\u6839\u636e\u78c1\u76d8\u7c7b\u578b\u6765\u751f\u6210\u5206\u533a\u548c\u683c\u5f0f\u5316\u9009\u9879\uff0c\u540c\u65f6\u517c\u5bb9\u865a\u62df\u673a\u548c\u7269\u7406\u673a\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Determine architecture-specific partitioning needs\nif [ -b /dev/vda ]; then\n  cat >/tmp/partinfo << EOF\nclearpart --initlabel --all\nignoredisk --only-use=vda\nbootloader --location=mbr --boot-drive=vda --driveorder=vda\nclearpart --initlabel --drives=vda\npart /boot --fstype=ext3 --ondisk=vda --size=500\npart / --fstype=xfs --size=1024 --grow --ondisk=vda --asprimary\nEOF\nelif [ -b /dev/sda ]; then\n  cat >/tmp/partinfo << EOF\nclearpart --initlabel --all\nignoredisk --only-use=sda\nbootloader --location=mbr --boot-drive=sda --driveorder=sda\npart /boot --fstype=ext3 --ondisk=sda --size=500\npart / --fstype=xfs --size=100000 --ondisk=sda --asprimary\npart /data --fstype=xfs --grow --ondisk=sda\nEOF\nfi\n")),(0,o.kt)("p",null,"\xa0\u7b2c\u4e8c\u4e2apost_install_custom_sys\u4f5c\u7528\u662f\u5728\u7cfb\u7edf\u5b89\u88c5\u6700\u540e\u9636\u6bb5\u5bf9\u4e00\u4e9b\u5fc5\u8981\u7684\u914d\u7f6e\u8fdb\u884c\u66f4\u6539\uff0c\u5176\u4e2d\u8fd0\u884c\u7684\u662fshell\u811a\u672c\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# cat snippets/post_install_custom_sys\nif ! grep -q 'custom_sysctl' /etc/sysctl.conf; then\n  cat >>/etc/sysctl.conf<<EOF\n## custom_sysctl\nfs.file-max = 262144\nnet.core.somaxconn = 10240\nvm.swappiness = 0\nnet.ipv4.ip_local_port_range = 1024 65000\nnet.core.rmem_max = 16777216\nnet.core.wmem_max = 16777216\nnet.core.rmem_default = 1048576\nnet.core.wmem_default = 524288\nnet.ipv4.tcp_rmem = 4096 87380 16777216\nnet.ipv4.tcp_wmem = 4096 65536 16777216\nnet.core.netdev_max_backlog = 2500\nnet.ipv4.tcp_max_syn_backlog = 40960\nnet.ipv4.tcp_syncookies = 1\nnet.ipv4.tcp_tw_reuse = 1\nnet.ipv4.tcp_tw_recycle = 1\nnet.ipv4.tcp_fin_timeout = 30\nEOF\nfi\n\nchmod +x /etc/rc.d/rc.local\n\nif grep -q '^UseDNS' /etc/ssh/sshd_config; then\n  sed -i 's/^UseDNS .*/UseDNS no/' /etc/ssh/sshd_config\nelse\n  sed -i 's/^#UseDNS .*/UseDNS no/' /etc/ssh/sshd_config\nfi\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u8fd8\u9700\u8981\u4fee\u6539\u5185\u6838\u5f15\u5bfc\u53c2\u6570\uff0c\u5b8c\u6210\u7f51\u5361\u540d\u5b57\u7684\u53d8\u66f4\u53caIPv6\u7981\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sed -i -e 's|^GRUB_CMDLINE_LINUX=\\\"|GRUB_CMDLINE_LINUX=\\\"net.ifnames=0 biosdevname=0 |g' /etc/default/grub\nsed -i -e 's|^GRUB_CMDLINE_LINUX=\\\"|GRUB_CMDLINE_LINUX=\\\"ipv6.disable=1 |g' /etc/default/grub\ngrub2-mkconfig -o /boot/grub2/grub.cfg\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd9\u51e0\u90e8\u5206\u7684\u7ec4\u5408\uff0c\u5373\u53ef\u751f\u6210\u4e00\u4e2a\u5b8c\u6574\u53ef\u7528\u7684ks\u6587\u4ef6\uff0c\u4e0b\u9762\u6211\u5c06\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u865a\u62df\u673a\u6765\u6d4b\u8bd5\u5b89\u88c5\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528\u865a\u62df\u673a\u6d4b\u8bd5pxe"},"\u4f7f\u7528\u865a\u62df\u673a\u6d4b\u8bd5PXE"),(0,o.kt)("p",null,"\u5b89\u88c5\u865a\u62df\u5316\u76f8\u5173\u8f6f\u4ef6\u5305\uff0c\u4f7f\u7528kvm\u865a\u62df\u673a\uff0c\u540c\u65f6\u5b89\u88c5\u56fe\u5f62\u754c\u9762\u865a\u62df\u673a\u7ba1\u7406\u5de5\u5177virt-manager\u65b9\u4fbf\u5b89\u88c5\u64cd\u4f5c\u3002\u7f51\u7edc\u9009\u62e9\u4f7f\u7528bridge\u6a21\u5f0f,\u70b9\u51fb\u65b0\u5efa\u865a\u62df\u673a\uff0c\u5728\u5b89\u88c5\u9009\u9879\u4e2d\u9009\u62e9PXE,\u6ce8\u610f\u5185\u5b58\u8bbe\u7f6e\u5fc5\u987b\u5927\u4e8e1G\uff0c\u5426\u5219PXE\u5f15\u5bfc\u8fdb\u5165\u7cfb\u7edf\u540e\u5f88\u53ef\u80fd\u62a5\u9519\u3002"))}b.isMDXComponent=!0}}]);
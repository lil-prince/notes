"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),b=l,d=m["".concat(c,".").concat(b)]||m[b]||p[b]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const o={layout:"post",title:"CVM\u4f7f\u7528ISO\u955c\u50cf\u5b89\u88c5\u94f6\u6cb3\u9e92\u9e9fv10 arm\u7cfb\u7edf",categories:["system","os"],tags:["kylin","cvm"]},a=void 0,i={permalink:"/notes/blog/2021/12/16/cvm-kylin-v10-iso-install",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2021-12-16-cvm-kylin-v10-iso-install.md",source:"@site/blog/2021-12-16-cvm-kylin-v10-iso-install.md",title:"CVM\u4f7f\u7528ISO\u955c\u50cf\u5b89\u88c5\u94f6\u6cb3\u9e92\u9e9fv10 arm\u7cfb\u7edf",description:"* Kramdown table of contents",date:"2021-12-16T00:00:00.000Z",formattedDate:"December 16, 2021",tags:[{label:"kylin",permalink:"/notes/blog/tags/kylin"},{label:"cvm",permalink:"/notes/blog/tags/cvm"}],readingTime:1.54,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"CVM\u4f7f\u7528ISO\u955c\u50cf\u5b89\u88c5\u94f6\u6cb3\u9e92\u9e9fv10 arm\u7cfb\u7edf",categories:["system","os"],tags:["kylin","cvm"]},prevItem:{title:"\u6807\u9898",permalink:"/notes/blog/2022/04/20/pxe-cobbler-install"},nextItem:{title:"\u94f6\u884c\u9e92\u9e9fv10 aarch64\u673a\u5668\u6784\u5efapercona-xtrabackup-80 rpm\u5305",permalink:"/notes/blog/2021/07/21/kylin-v10-aarch64-build-percona-xtrabackup-80-rpm"}},c={authorsImageUrls:[]},s=[{value:"1 \u51c6\u5907",id:"1-\u51c6\u5907",level:2},{value:"2 \u914d\u7f6egrub",id:"2-\u914d\u7f6egrub",level:2},{value:"3 \u5f00\u59cb\u88c5\u7cfb\u7edf",id:"3-\u5f00\u59cb\u88c5\u7cfb\u7edf",level:2},{value:"4 \u5236\u4f5c\u4e91\u955c\u50cf",id:"4-\u5236\u4f5c\u4e91\u955c\u50cf",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u80cc\u666f\uff1a\u4e91\u4e0a\u6ca1\u6709kylin\u7684arm\u955c\u50cf,\u9700\u8981\u81ea\u5df1\u505a\u4e00\u4e2a")),(0,l.kt)("h2",{id:"1-\u51c6\u5907"},"1 \u51c6\u5907"),(0,l.kt)("p",null,"iso: Kylin-Server-10-SP2-aarch64-Release-Build09-20210524.iso"),(0,l.kt)("p",null,"\u4e00\u53f0arm\u7684cvm, \u4e00\u5757\u6570\u636e\u76d8"),(0,l.kt)("p",null,"scp  Kylin-Server-10-SP2-aarch64-Release-Build09-20210524.iso  x.x.x.x:/kylin.iso"),(0,l.kt)("h2",{id:"2-\u914d\u7f6egrub"},"2 \u914d\u7f6egrub"),(0,l.kt)("p",null,"\u4fee\u6539grub\u914d\u7f6e\u589e\u52a0\u4eceiso\u5f15\u5bfc\u7684\u5165\u53e3\uff0c\u91cd\u542f\u673a\u5668\u65f6\u4eceiso\u5f15\u5bfc\u8fdb\u5165\u5b89\u88c5\u6d41\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n# cat /etc/grub.d/40_custom\n#!/bin/sh\nexec tail -n +3 $0\n# This file provides an easy way to add custom menu entries.  Simply type the\n# menu entries you want to add after this comment.  Be careful not to change\n# the 'exec tail' line above.\n\nmenuentry 'Install Kylin Linux Advanced Server V10' --class red --class gnu-linux --class gnu --class os {\n    set isolabel=\"Kylin-Server-10\"\n    set isofile=\"/kylin.iso\"\n    insmod iso9660\n    loopback loop $isofile\n    linux (loop)/images/pxeboot/vmlinuz inst.stage2=hd:LABEL=Kylin-Server-10 ro iso-scan/filename=$isofile console=tty0 video=efifb:off video=VGA-1:640x480-32@60me\n    initrd (loop)/images/pxeboot/initrd.img\n}\n\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u53c2\u6570\u4ece\u54ea\u83b7\u53d6\u6765\uff1f\n1 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mount /kylin.iso /mnt\nfind /mnt -name grub.cfg\n")),(0,l.kt)("p",null,"\u627e\u5230\u7684\u5185\u5bb9\u4f5c\u4e3alinux\u884c\u7684\u53c2\u8003"),(0,l.kt)("p",null,"2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"blkid /kylin.iso\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u83b7\u5f97isolabel\u4fe1\u606f"),(0,l.kt)("p",null,"\u4e0b\u4e00\u6b65"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vi /etc/default/grub\n#\u4fee\u6539GRUB_TIMEOUT=60 \u589e\u52a0timeout\u65b9\u4fbfweb vnc\u767b\u5f55\u64cd\u4f5c\ngrub2-mkconfig --ouput=/boot/grub2/grub.cfg\nsync\nreboot\n")),(0,l.kt)("h2",{id:"3-\u5f00\u59cb\u88c5\u7cfb\u7edf"},"3 \u5f00\u59cb\u88c5\u7cfb\u7edf"),(0,l.kt)("p",null,"\u7cfb\u7edf\u4f1a\u5b89\u88c5\u5230\u6570\u636e\u76d8\uff0c\u56e0\u4e3a\u7cfb\u7edf\u76d8\u88abiso\u5360\u7528\uff0cmount\u72b6\u6001\u65e0\u6cd5\u4f7f\u7528\uff0c\u5fc5\u987b\u6709\u72ec\u7acb\u7684\u6570\u636e\u76d8\u7528\u6765\u88c5\u7cfb\u7edf\n\u6ce8\u610f\u5b89\u88c5cloud-init\u5305\u3002"),(0,l.kt)("h2",{id:"4-\u5236\u4f5c\u4e91\u955c\u50cf"},"4 \u5236\u4f5c\u4e91\u955c\u50cf"),(0,l.kt)("p",null,"\u91cd\u542f\u56de\u5230\u539f\u5148\u7684\u7cfb\u7edf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yum -y install qemu-img\nqemu-img convert -f raw -O qcow2 /dev/vdb /kylin.qcow2\n")))}p.isMDXComponent=!0}}]);
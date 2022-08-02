"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=s(n),k=l,v=u["".concat(p,".").concat(k)]||u[k]||c[k]||i;return n?a.createElement(v,o(o({ref:t},m),{},{components:n})):a.createElement(v,o({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={layout:"post",title:"\u6d45\u6790snapshots, blockcommit,blockpull",description:"show how to create snapshot with libvirt and qemu-img.",categories:["virt"],tags:["libvirt","kvm","snapshot"],redirect_from:["/2012/11/23/"]},o=void 0,r={permalink:"/notes/zh-Hans/blog/2012/11/23/libvirt-snapshot-blockcommit-blockpull",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2012-11-23-libvirt-snapshot-blockcommit-blockpull.md",source:"@site/blog/2012-11-23-libvirt-snapshot-blockcommit-blockpull.md",title:"\u6d45\u6790snapshots, blockcommit,blockpull",description:"show how to create snapshot with libvirt and qemu-img.",date:"2012-11-23T00:00:00.000Z",formattedDate:"2012\u5e7411\u670823\u65e5",tags:[{label:"libvirt",permalink:"/notes/zh-Hans/blog/tags/libvirt"},{label:"kvm",permalink:"/notes/zh-Hans/blog/tags/kvm"},{label:"snapshot",permalink:"/notes/zh-Hans/blog/tags/snapshot"}],readingTime:16.89,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u6d45\u6790snapshots, blockcommit,blockpull",description:"show how to create snapshot with libvirt and qemu-img.",categories:["virt"],tags:["libvirt","kvm","snapshot"],redirect_from:["/2012/11/23/"]},prevItem:{title:"\u4f7f\u7528libvirt\u548ctc\u5b9e\u73b0vm\u5e26\u5bbd\u63a7\u5236",permalink:"/notes/zh-Hans/blog/2013/03/01/libvirt-tc-bandwidth-control"},nextItem:{title:"metasploit\u5b66\u4e60\u7b14\u8bb0",permalink:"/notes/zh-Hans/blog/2012/11/12/msf-study-note"}},p={authorsImageUrls:[]},s=[{value:"\u57fa\u7840\u77e5\u8bc6",id:"\u57fa\u7840\u77e5\u8bc6",level:2},{value:"QCOW2 backing files \u4e0e overlays",id:"qcow2-backing-files-\u4e0e-overlays",level:3},{value:"\u5177\u4f53\u64cd\u4f5c",id:"\u5177\u4f53\u64cd\u4f5c",level:2},{value:"\u521b\u5efasnapshots",id:"\u521b\u5efasnapshots",level:2},{value:"\u5408\u5e76\u5feb\u7167\u6587\u4ef6",id:"\u5408\u5e76\u5feb\u7167\u6587\u4ef6",level:2},{value:"blockcommit",id:"blockcommit",level:3},{value:"blockpull",id:"blockpull",level:3}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e00\u7bc7\u5173\u4e8esnapshots, blockpull, blockcommit\u7684\u7684\u4ecb\u7ecd.\u4f5c\u8005\u548cwith Eric Blake, Jeff Cody,Kevin Wolf\u4ee5\u53ca\u5f88\u591aIRC\u548cmailing lists\u91cc\u9762\u7684\u540c\u5b66\u5927\u91cf\u8ba8\u8bba\u4ee5\u53ca\u4f5c\u8005\u5927\u91cf\u7684\u7279\u5411\u6d4b\u8bd5\u7684\u57fa\u7840\u4e4b\u4e0a\u603b\u7ed3\u51fa\u6765\u7684")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,l.kt)("h2",{id:"\u57fa\u7840\u77e5\u8bc6"},"\u57fa\u7840\u77e5\u8bc6"),(0,l.kt)("p",null,"\u4e00\u4e2a\u865a\u62df\u673a\u5feb\u7167\u53ef\u88ab\u770b\u4f5c\u662f\u865a\u62df\u673a\u7684\u5728\u67d0\u4e2a\u6307\u5b9a\u65f6\u95f4\u7684\u89c6\u56fe\uff08\u5305\u62ec\u4ed6\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u6240\u6709\u7684\u7a0b\u5e8f\uff09.\u636e\u6b64\uff0c\u67d0\u53ef\u4ee5\u8fd8\u539f\u5230\u4e00\u4e2a\u4e4b\u524d\u7684\u5b8c\u6574\u7684\u72b6\u6001\uff0c\u6216\u8005\u5728guest\u8fd0\u884c\u7684\u65f6\u5019\u505a\u4e2a\u5907\u4efd.\u6240\u4ee5\uff0c\u5728\u6211\u4eec\u7ee7\u7eed\u6df1\u5165\u4e4b\u524d\u6211\u4eec\u5fc5\u987b\u641e\u61c2\u4e24\u4e2a\u540d\u8bcd\uff1abacking files\u548coverlays ."),(0,l.kt)("h3",{id:"qcow2-backing-files-\u4e0e-overlays"},"QCOW2 backing files \u4e0e overlays"),(0,l.kt)("p",null,"qcow2\uff08qemu copy-on-write\uff09\u5177\u6709\u521b\u5efa\u4e00\u4e2abase-image\uff0c\u4ee5\u53ca\u5728base-image\uff08\u5373backing file\uff09\u7684\u57fa\u7840\u4e0a\u521b\u5efa\u591a\u4e2acopy-on-write overlays\u955c\u50cf\u7684\u80fd\u529b.backing files\u548coverlays\u5341\u5206\u6709\u7528\uff0c\u53ef\u4ee5\u8fc5\u901f\u7684\u521b\u5efa\u7626\u88c5\u5907\u865a\u62df\u673a\u7684\u5b9e\u4f8b\uff0c\u7279\u522b\u662f\u5728\u5f00\u53d1\u6d4b\u8bd5\u7684\u65f6\u5019\u53ef\u4ee5\u8ba9\u4f60\u8fc5\u901f\u7684\u56de\u6eda\u5230\u4e4b\u524d\u7684\u67d0\u4e2a\u5df2\u77e5\u72b6\u6001\uff0c\u4e22\u5f03overlay."),(0,l.kt)("p",null,"Figure-1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".--------------.    .-------------.    .-------------.    .-------------.\n|              |    |             |    |             |    |             |\n| RootBase     |<---| Overlay-1   |<---| Overlay-1A  <--- | Overlay-1B  |\n| (raw/qcow2)  |    | (qcow2)     |    | (qcow2)     |    | (qcow2)     |\n'--------------'    '-------------'    '-------------'    '-------------'\n")),(0,l.kt)("p",null,"\u4e0a\u56fe\u8868\u660erootbase\u662foverlay-1\u7684backing file\uff0c\u4ee5\u6b64\u7c7b\u63a8."),(0,l.kt)("p",null,"Figure-2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".-----------.   .-----------.   .------------.  .------------.  .------------.\n|           |   |           |   |            |  |            |  |            |\n| RootBase  |<--- Overlay-1 |<--- Overlay-1A <--- Overlay-1B <--- Overlay-1C |\n|           |   |           |   |            |  |            |  | (Active)   |\n'-----------'   '-----------'   '------------'  '------------'  '------------'\n   ^    ^\n   |    |\n   |    |       .-----------.    .------------.\n   |    |       |           |    |            |\n   |    '-------| Overlay-2 |<---| Overlay-2A |\n   |            |           |    | (Active)   |\n   |            '-----------'    '------------'\n   |\n   |\n   |            .-----------.    .------------.\n   |            |           |    |            |\n   '------------| Overlay-3 |<---| Overlay-3A |\n                |           |    | (Active)   |\n                '-----------'    '------------'\n")),(0,l.kt)("p",null,"\u4e0a\u56fe\u8868\u660e\u6211\u4eec\u53ef\u4ee5\u53ea\u7528\u5355\u4e2abacking file\u6765\u521b\u5efa\u591a\u6761\u94fe."),(0,l.kt)("p",null,"\u6ce8\u610f : backing file \u603b\u662f \u53ea\u8bfb \u6253\u5f00\u7684. \u6362\u8a00\u4e4b, \u4e00\u65e6\u65b0\u5feb\u7167\u88ab\u521b\u5efa\uff0c\u4ed6\u7684\u540e\u7aef\u6587\u4ef6\u5c31\u4e0d\u80fd\u88ab\u4fee\u6539,(\u5feb\u7167\u4f9d\u8d56\u4e8e\u540e\u7aef\u6587\u4ef6\u7684\u8fd9\u79cd\u72b6\u6001).\u4e86\u89e3\u66f4\u591a\u53c2\u89c1\u540e\u9762\u7684('blockcommit' \u8282) ."),(0,l.kt)("p",null,"\u793a\u4f8b :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[FedoraBase.img] ----- <- [Fed-guest-1.qcow2] <- [Fed-w-updates.qcow2] <- [Fedora-guest-with-updates-1A]\n                 \\\n                  \\--- <- [Fed-guest-2.qcow2] <- [Fed-w-updates.qcow2] <- [Fedora-guest-with-updates-2A]\n")),(0,l.kt)("p",null,"\uff08\u6ce8\u610f\u7bad\u5934\u7684\u65b9\u5411\uff0cFed-w-updates.qcow2 \u7684backing file\u662f Fed-guest-1.qcow2\uff09"),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\u53ef\u4ee5\u770b\u5230 FedoraBase.img \u5b89\u88c5\u4e86\u4e00\u4e2afedora17\u7cfb\u7edf\uff0c\u5e76\u4f5c\u4e3a\u6211\u4eec\u7684backing file.\u73b0\u5728\u8fd9\u4e2abacking file\u5c06\u4f5c\u4e3a\u6a21\u677f\u5feb\u901f\u7684\u521b\u5efa\u4e24\u4e2a\u7626\u88c5\u5907\u5b9e\u4f8b\uff0c\u548c Figure-2 \u9053\u7406\u662f\u4e00\u6837\u7684."),(0,l.kt)("h2",{id:"\u5177\u4f53\u64cd\u4f5c"},"\u5177\u4f53\u64cd\u4f5c"),(0,l.kt)("p",null,"\u4f7f\u7528qemu-img\u4e3a\u5355\u4e2abacking file\u6765\u521b\u5efa\u4e24\u4e2afedora\u7684\u7626\u88c5\u5907\u514b\u9686:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# qemu-img create -b /export/vmimages/RootBase.img -f qcow2 \\\n  /export/vmimages/Fedora-guest-1.qcow2\n\n# qemu-img create -b /export/vmimages/RootBase.img -f qcow2 \\\n  /export/vmimages/Fedora-guest-2.qcow2\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u4e0a\u9762\u521b\u5efa\u51fa\u6765\u7684\u4e24\u4e2a\u955c\u50cf Fedora-guest-1 & Fedora-guest-2 \u90fd\u53ef\u4ee5\u7528\u6765\u542f\u52a8\u4e00\u4e2a\u865a\u62df\u673a\uff0c\u7ee7\u7eed\u6211\u4eec\u7684\u793a\u4f8b\uff0c\u73b0\u5728\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2af17\u7684\u5b9e\u4f8b\uff0c\u4f46\u662f\u8fd9\u6b21\u6211\u4eec\u9700\u8981\u521b\u5efa\u7684\u662f\u5177\u6709\u5b8c\u6574\u7684\u66f4\u65b0\u7684\u5b9e\u4f8b\uff0c\u8fd9\u65f6\u53ef\u4ee5\u521b\u5efa\u53e6\u5916\u4e00\u4e2aoverlay\uff08Fedora-guest-with-updates-1A\uff09\u800c\u8fd9\u4e2aoverlay\u7684backing file\u662f'Fed-w-updates.qcow2'\uff08\u4e00\u4e2a\u5305\u542b\u4e86\u5b8c\u6574\u66f4\u65b0\u7684\u955c\u50cf\uff09:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# qemu-img create -b /export/vmimages/Fed-w-updates.qcow2 -f qcow2 \\\n   /export/vmimages/Fedora-guest-with-updates-1A.qcow2\n")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528qemu-img\u547d\u4ee4\u6765\u67e5\u770b\u955c\u50cf\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u865a\u62df\u78c1\u76d8\u5927\u5c0f\uff0c\u4f7f\u7528\u5927\u5c0f\uff0cbacking file\u6307\u5411:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# qemu-img info /export/vmimages/Fedora-guest-with-updates-1A.qcow2\n")),(0,l.kt)("p",null,"\u6ce8\u610f: \u6700\u65b0\u7248\u672c\u7684qemu-img\u53ef\u4ee5\u9012\u5f52\u67e5\u8be2\u5230\u6574\u6761\u5b8c\u6574\u7684\u94fe:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# qemu-img info --backing-chain /export/vmimages/Fedora-guest-with-updates-1A.qcow2\n")),(0,l.kt)("p",null,"\u540d\u8bcd\u89e3\u91caSnapshot:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u5feb\u7167\uff08Internal Snapshots\uff09 -- \u5355\u4e2aqcow2\u955c\u50cf\u6587\u4ef6\u5b58\u50a8\u4e86\u5305\u62ec\u6570\u636e\u4ee5\u53ca\u5feb\u7167\u7684\u72b6\u6001\u4fe1\u606f\uff0c")),(0,l.kt)("p",null,"\u5185\u7f6e\u5feb\u7167\u53c8\u53ef\u4ee5\u7ec6\u5206\u4e00\u4e0b:-"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5185\u7f6e\u78c1\u76d8\u5feb\u7167\uff08Internal disk snapshot\uff09:")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5feb\u7167\u70b9\u7684\u78c1\u76d8\u72b6\u6001\uff0c\u6570\u636e\u548c\u5feb\u7167\u4fdd\u5b58\u5728\u5355\u4e2aqcow2\u6587\u4ef6\u4e2d\uff0c\u865a\u62df\u673a\u8fd0\u884c\u72b6\u6001\u548c\u5173\u95ed\u72b6\u6001\u90fd\u53ef\u4ee5\u521b\u5efa."))),(0,l.kt)("p",null,"Libvirt \u4f7f\u7528 'qemu-img' \u547d\u4ee4\u521b\u5efa\u5173\u673a\u72b6\u6001\u7684\u78c1\u76d8\u5feb\u7167.Libvirt \u4f7f\u7528 'savevm' \u547d\u4ee4\u521b\u5efa\u8fd0\u884c\u72b6\u6001\u7684\u78c1\u76d8\u5feb\u7167."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u7cfb\u7edf\u8fd8\u539f\u70b9\uff08Internal system checkpoint\uff09:")),(0,l.kt)("p",null,"\u5185\u5b58\u72b6\u6001\uff0c\u8bbe\u5907\u72b6\u6001\u548c\u78c1\u76d8\u72b6\u6001\uff0c\u53ef\u4ee5\u4e3a\u8fd0\u884c\u4e2d\u7684\u865a\u62df\u673a\u521b\u5efa\uff0c\u6240\u6709\u4fe1\u606f\u90fd\u5b58\u50a8\u5728\u540c\u4e00\u4e2aqcow2\u6587\u4ef6\u4e2d\uff0c\u53ea\u6709\u5728\u8fd0\u884c\u72b6\u6001\u624d\u80fd\u521b\u5efa\u5185\u7f6e\u7cfb\u7edf\u8fd8\u539f\u70b9."),(0,l.kt)("p",null,"Libvirt \u4f7f\u7528'savevm' \u547d\u4ee4\u6765\u521b\u5efa\u8fd9\u79cd\u5feb\u7167"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5916\u7f6e\u5feb\u7167\uff08External Snapshots\uff09 -- \u5f53\u4e00\u4e2a\u5feb\u7167\u88ab\u521b\u5efa\u65f6\uff0c\u521b\u5efa\u65f6\u5f53\u524d\u7684\u72b6\u6001\u4fdd\u5b58\u5728\u5f53\u524d\u4f7f\u7528\u7684\u78c1\u76d8\u6587\u4ef6\u4e2d\uff0c\u5373\u6210\u4e3a\u4e00\u4e2abacking file.\u6b64\u65f6\u4e00\u4e2a\u65b0\u7684overlay\u88ab\u521b\u5efa\u51fa\u6765\u4fdd\u5b58\u5f80\u540e\u7684\u6570\u636e.")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u4e5f\u53ef\u4ee5\u7ec6\u5206\u4e00\u4e0b:-"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5916\u7f6e\u78c1\u76d8\u5feb\u7167\uff08External disk snapshot\uff09: \u78c1\u76d8\u7684\u5feb\u7167\u88ab\u4fdd\u5b58\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u521b\u5efa\u65f6\u95f4\u70b9\u4ee5\u540e\u7684\u6570\u636e\u88ab\u8bb0\u5f55\u5230\u4e00\u4e2a\u65b0\u7684qcow2\u6587\u4ef6\u4e2d.\u540c\u6837\u53ef\u4ee5\u5728\u8fd0\u884c\u548c\u5173\u95ed\u72b6\u6001\u521b\u5efa.")),(0,l.kt)("p",null,"Libvirt \u4f7f\u7528 'transaction' \u547d\u4ee4\u6765\u4e3a\u8fd0\u884c\u72b6\u6001\u521b\u5efa\u8fd9\u79cd\u5feb\u7167.\nLibvirt \u4f7f\u7528'qemu-img' \u547d\u4ee4\u4e3a\u5173\u95ed\u72b6\u6001\u521b\u5efa\u8fd9\u79cd\u5feb\u7167(\u622a\u6b62\u76ee\u524d\u529f\u80fd\u8fd8\u5728\u5f00\u53d1\u4e2d)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5916\u7f6e\u7cfb\u7edf\u8fd8\u539f\u70b9\uff08External system checkpoint\uff09:")),(0,l.kt)("p",null,"\u865a\u62df\u673a\u7684\u78c1\u76d8\u72b6\u6001\u5c06\u88ab\u4fdd\u5b58\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u5185\u5b58\u548c\u8bbe\u5907\u7684\u72b6\u6001\u5c06\u88ab\u4fdd\u5b58\u5230\u53e6\u5916\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6\u4e2d\uff0c"),(0,l.kt)("p",null,"\uff08\u8fd9\u4e2a\u529f\u80fd\u4e5f\u8fd8\u5728\u5f00\u53d1\u4e2d\uff09."),(0,l.kt)("p",null,"VM\u72b6\u6001\uff08VM state\uff09:"),(0,l.kt)("p",null,"\u4fdd\u5b58\u8fd0\u884c\u72b6\u6001\u865a\u62df\u673a\u7684\u5185\u5b58\u8bbe\u5907\u72b6\u6001\u4fe1\u606f\u81f3\u6587\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6b64\u6587\u4ef6\u6062\u590d\u5230\u4fdd\u5b58\u65f6\u7684\u72b6\u6001\uff0c\u6709\u70b9\u7c7b\u4f3c\u7cfb\u7edf\u7684\u4f11\u7720.\uff08\u6ce8\u610f\u521b\u5efaVM\u72b6\u6001\u4fdd\u5b58\u7684\u65f6\u5019VM\u78c1\u76d8\u5fc5\u987b\u662f\u672a\u53d1\u751f\u5199\u5165\u6539\u52a8\u7684\uff09"),(0,l.kt)("p",null,"Libvirt\u4f7f\u7528 'migrate' (to file)\u547d\u4ee4\u6765\u5b8c\u6210VM\u72b6\u6001\u8f6c\u50a8."),(0,l.kt)("h2",{id:"\u521b\u5efasnapshots"},"\u521b\u5efasnapshots"),(0,l.kt)("p",null,"\u6bcf\u6b21\u4ea7\u751f\u4e00\u4e2a\u5916\u7f6esnapshot\uff0c\u4e00\u4e2a /new/ overlay \u955c\u50cf\u5c31\u4f1a\u968f\u4e4b\u751f\u6210\uff0c\u800c\u524d\u4e00\u4e2a\u955c\u50cf\u5c31\u53d8\u6210\u4e86\u4e00\u4e2a\u5feb\u7167."),(0,l.kt)("p",null,"diskonly\u5185\u7f6e\u5feb\u7167\u521b\u5efa"),(0,l.kt)("p",null,"\u5047\u5982\u9700\u8981\u4e3a\u540d\u4e3a'f17vm1'\u7684\u865a\u62df\u673a\u521b\u5efa\u4e00\u4e2a\u8fd0\u884c\u6001\u6216\u5173\u95ed\u6001\u7684\u5185\u7f6e\u5feb\u7167snap1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh snapshot-create-as f17vm1  snap1 snap1-desc\n")),(0,l.kt)("p",null,"\u5217\u51fa\u5feb\u7167\u5217\u8868\uff0c\u4f7f\u7528",(0,l.kt)("em",{parentName:"p"},"qemu-img"),"\u67e5\u770binfo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh snapshot-list f17vm1\n# qemu-img info /home/kashyap/vmimages/f17vm1.qcow2\n")),(0,l.kt)("p",null,"disk-only\u5916\u7f6e\u5feb\u7167\u521b\u5efa :"),(0,l.kt)("p",null,"\u67e5\u770b\u865a\u62df\u673a\u78c1\u76d8\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh domblklist f17-base\nTarget     Source\n---------------------------------------------\nvda        /export/vmimages/f17-base.qcow2\n\n")),(0,l.kt)("p",null,"\u521b\u5efa\u5916\u7f6edisk-only\u78c1\u76d8\u5feb\u7167\uff08VM",(0,l.kt)("em",{parentName:"p"},"\u8fd0\u884c\u6001"),"\uff09:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh snapshot-create-as --domain f17-base snap1 snap1-desc \\\n--disk-only --diskspec vda,snapshot=external,file=/export/vmimages/sn1-of-f17-base.qcow2 \\\n--atomic\nDomain snapshot snap1 created\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* \u4e00\u65e6\u4e0a\u9762\u7684\u547d\u4ee4\u88ab\u6267\u884c\uff0c\u5219\u539f\u6765\u7684\u955c\u50cff17-base\u5c06\u53d8\u4e3abacking file\uff0c\u4e00\u4e2a\u65b0\u7684\u955c\u50cf\u88ab\u521b\u5efa.\n")),(0,l.kt)("p",null,"\u73b0\u5728\u518d\u5217\u8868\u67e5\u770b\u865a\u62df\u673a\u78c1\u76d8\uff0c\u4f60\u4f1a\u53d1\u73b0\u65b0\u4ea7\u751f\u7684\u955c\u50cf\u5df2\u7ecf\u6295\u5165\u4f7f\u7528."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh domblklist f17-base\nTarget     Source\n----------------------------------------------------\nvda        /export/vmimages/sn1-of-f17-base.qcow2\n\n")),(0,l.kt)("p",null,"\u5feb\u7167\u56de\u6eda"),(0,l.kt)("p",null,"\u622a\u6b62\u5199\u6b64\u6587\u4e4b\u65f6\uff0c\u56de\u6eda\u81f3'\u5185\u7f6e\u5feb\u7167'(system checkpoint\u6216disk-only)\u662f\u53ef\u4ee5\u4f7f\u7528\u7684."),(0,l.kt)("p",null,"\u865a\u62df\u673af17vm1\u56de\u6eda\u81f3\u5feb\u7167'snap1'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh snapshot-revert --domain f17vm1 snap1\n")),(0,l.kt)("p",null,"\u4f7f\u7528 snapshot-revert \u56de\u6eda '\u5916\u7f6e\u78c1\u76d8\u5feb\u7167' \u7a0d\u5fae\u590d\u6742\u4e9b\uff0c\u9700\u8981\u6d89\u53ca\u5230\u7a0d\u5fae\u590d\u6742\u70b9\u7684\u95ee\u9898\uff0c\u9700\u8981\u8003\u8651\u7684\u662f\u5408\u5e76'base'\u81f3'top'\u8fd8\u662f\u5408\u5e76'top'\u81f3'base'.\u4e5f\u5c31\u662f\u8bf4\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u9009\u62e9\uff0c\u5916\u7f6e\u78c1\u76d8\u5feb\u7167\u94fe\u7684\u7f29\u77ed\u53ef\u4ee5\u4f7f\u7528 blockpull \u6216 blockcommit .\u622a\u6b62\u76ee\u524d\u4e0a\u6e38\u793e\u533a\u4ecd\u7136\u5728\u52aa\u529b\u5b8c\u5584\u8fd9\u9879\u529f\u80fd."),(0,l.kt)("h2",{id:"\u5408\u5e76\u5feb\u7167\u6587\u4ef6"},"\u5408\u5e76\u5feb\u7167\u6587\u4ef6"),(0,l.kt)("p",null,"\u5916\u7f6e\u5feb\u7167\u975e\u5e38\u6709\u7528\uff0c\u4f46\u8fd9\u91cc\u6709\u4e00\u4e2a\u95ee\u9898\u5c31\u662f\u5982\u4f55\u5408\u5e76\u5feb\u7167\u6587\u4ef6\u6765\u7f29\u77ed\u94fe\u7684\u957f\u5ea6\uff0c\u5982\u4e0a\u6240\u8ff0\u8fd9\u91cc"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u5f0f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"blockcommit: \u4ece top \u5408\u5e76\u6570\u636e\u5230 base (\u5373\u5408\u5e76overlays\u81f3backing files)."),(0,l.kt)("li",{parentName:"ul"},"blockpull: \u5c06backing file\u6570\u636e\u5408\u5e76\u81f3overlay\u4e2d.\u4ece base \u5230 top .")),(0,l.kt)("h3",{id:"blockcommit"},"blockcommit"),(0,l.kt)("p",null,"blockcommit\u53ef\u4ee5\u8ba9\u4f60\u5c06'top'\u955c\u50cf(\u5728\u540c\u4e00\u6761backing file\u94fe\u4e2d)\u5408\u5e76\u81f3\u5e95\u5c42\u7684'base'\u955c\u50cf.\u4e00\u65e6 blockcommit \u6267\u884c\u5b8c\u6210\uff0c\u5904\u4e8e\u6700\u4e0a\u9762\u7684overlay\u94fe\u5173\u7cfb\u5c06\u88ab\u6307\u5411\u5230\u5e95\u5c42\u7684overlay\u6216base.\u8fd9\u5728\u521b\u5efa\u4e86\u5f88\u957f\u4e00\u6761\u94fe\u4e4b\u540e\u7528\u6765\u7f29\u77ed\u94fe\u957f\u5ea6\u7684\u65f6\u5019\u5341\u5206\u6709\u7528."),(0,l.kt)("p",null,"\u4e0b\u9762\u6765\u4e2a\u56fe\u8bf4\u660e\u4e0b:"),(0,l.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u6709\u4e00\u4e2a\u955c\u50cf\u53eb'RootBase'\uff0c\u62e5\u67094\u4e2a\u5916\u7f6e\u5feb\u7167\uff0c'Active'\u4e3a\u5f53\u524dVM\u5199\u5165\u6570\u636e\u7684\uff0c"),(0,l.kt)("p",null,"\u4f7f\u7528'blockcommit'\u53ef\u4ee5\u6709\u4ee5\u4e0b\u591a\u79cdcase :"),(0,l.kt)("p",null,"\u5408\u5e76Snap-1, Snap-2 and Snap-3 \u81f3 'RootBase'\n\u53ea\u5408\u5e76Snap-1 and Snap-2 \u81f3 RootBase\n\u53ea\u5408\u5e76Snap-1 \u81f3 RootBase\n\u5408\u5e76Snap-2 \u81f3 Snap-1\n\u5408\u5e76Snap-3 \u81f3 Snap-2\n\u5408\u5e76Snap-2 \u548c Snap-3 \u81f3 Snap-1\n\u6ce8: \u5408\u5e76'Active'\u5c42(\u6700\u9876\u90e8\u7684overlay)\u81f3backing_files\u7684\u529f\u80fd\u8fd8\u5728\u5f00\u53d1\u4e2d."),(0,l.kt)("p",null,"(\u4e0b\u56fe\u89e3\u91cacase (6))"),(0,l.kt)("p",null,"Figure-3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".------------.  .------------.  .------------.  .------------.  .------------.\n|            |  |            |  |            |  |            |  |            |\n| RootBase   <---  Snap-1    <---  Snap-2    <---  Snap-3    <---  Snap-4    |\n|            |  |            |  |            |  |            |  | (Active)   |\n'------------'  '------------'  '------------'  '------------'  '------------'\n                                 /                  |\n                                /                   |\n                               /  commit data       |\n                              /                     |\n                             /                      |\n                            /                       |\n                           v           commit data  |\n.------------.  .------------. <--------------------'           .------------.\n|            |  |            |                                  |            |\n| RootBase   <---  Snap-1    |<---------------------------------|  Snap-4    |\n|            |  |            |       Backing File               | (Active)   |\n'------------'  '------------'                                  '------------'\n")),(0,l.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6709\u4ee5\u4e0b\u573a\u666f\uff1a"),(0,l.kt)("p",null,"\u5f53\u524d: ","[base]"," <- sn1 <- sn2 <- sn3 <- sn4(this is active)"),(0,l.kt)("p",null,"\u76ee\u6807: ","[base]"," <- sn1 <- sn4 (\u5982\u6b64\u6765\u4e22\u5f03sn2,sn3)"),(0,l.kt)("p",null,"  \u4e0b\u9762\u6709\u4e24\u79cd\u65b9\u5f0f\uff0cmethod-a\u66f4\u5feb,method-b \u6162\u4e9b\uff0c\u4f46\u662fsn2\u6709\u6548\u53ef\u7528. (VM\u8fd0\u884c\u6001)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        (method-a):\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"           # virsh blockcommit --domain f17 vda --base /export/vmimages/sn1.qcow2  \\\n\n               --top /export/vmimages/sn3.qcow2 --wait --verbose\n")),(0,l.kt)("p",null,"[OR]","\n(method-b):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh blockcommit --domain f17 vda  --base /export/vmimages/sn2.qcow2  \\\n    --top /export/vmimages/sn3.qcow2 --wait --verbose\n# virsh blockcommit --domain f17 vda  --base /export/vmimages/sn1.qcow2  \\\n    --top /export/vmimages/sn2.qcow2 --wait --verbose\n")),(0,l.kt)("p",null,"\u6ce8: \u5982\u679c\u624b\u5de5\u6267\u884c",(0,l.kt)("em",{parentName:"p"},"qemu-img"),"\u547d\u4ee4\u5b8c\u6210\u7684\u8bdd, \u73b0\u5728\u8fd8\u53ea\u80fd\u7528method-b.\nFigure-4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".------------.  .------------.  .------------.  .------------.  .------------.\n|            |  |            |  |            |  |            |  |            |\n| RootBase   <---  Snap-1    <---  Snap-2    <---  Snap-3    <---  Snap-4    |\n|            |  |            |  |            |  |            |  | (Active)   |\n'------------'  '------------'  '------------'  '------------'  '------------'\n                  /                  |             |\n                 /                   |             |\n                /                    |             |\n   commit data /         commit data |             |\n              /                      |             |\n             /                       | commit data |\n            v                        |             |\n.------------.<----------------------|-------------'            .------------.\n|            |<----------------------'                          |            |\n| RootBase   |                                                  |  Snap-4    |\n|            |<-------------------------------------------------| (Active)   |\n'------------'                  Backing File                    '------------'\n")),(0,l.kt)("p",null,"\u4e0a\u56fe\u6f14\u793a\u4e86case1\u7684blockcommit\u8d70\u5411\uff0c\u73b0\u5728sn4\u7684backing file\u6307\u5411rootbase."),(0,l.kt)("h3",{id:"blockpull"},"blockpull"),(0,l.kt)("p",null,"blockpull\uff08qemu\u4e2d\u4e5f\u79f0\u4f5c'block stream'\uff09\u53ef\u4ee5\u5c06backing\u5408\u5e76\u81f3active\uff0c\u4e0eblockcommit\u6b63\u597d\u76f8\u53cd.\u622a\u6b62\u76ee\u524d\u53ea\u80fd\u5c06backing file\u5408\u5e76\u81f3\u5f53\u524d\u4f7f\u7528\u7684active\u4e2d\uff0c\u4e5f\u5c31\u662f\u8bf4\u8fd8\u4e0d\u652f\u6301\u6307\u5b9atop\u7684\u5408\u5e76.\n\u8bbe\u60f3\u4e00\u4e2a\u4e0b\u9762\u7684\u573a\u666f:"),(0,l.kt)("p",null,"Figure-5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".------------.  .------------.  .------------.  .------------.  .------------.\n|            |  |            |  |            |  |            |  |            |\n| RootBase   <---  Snap-1    <---  Snap-2    <---  Snap-3    <---  Snap-4    |\n|            |  |            |  |            |  |            |  | (Active)   |\n'------------'  '------------'  '------------'  '------------'  '------------'\n                         |                 |              \\\n                         |                 |               \\\n                         |                 |                \\\n                         |                 |                 \\ stream data\n                         |                 | stream data      \\\n                         | stream data     |                   \\\n                         |                 |                    v\n     .------------.      |                 '---------------\x3e  .------------.\n     |            |      '---------------------------------\x3e  |            |\n     | RootBase   |                                           |  Snap-4    |\n     |            | <---------------------------------------- | (Active)   |\n     '------------'                 Backing File              '------------'\n")),(0,l.kt)("p",null,"\u4f7f\u7528blockpull\u6211\u4eec\u53ef\u4ee5\u5c06snap-1/2/3\u4e2d\u7684\u6570\u636e\u5408\u5e76\u81f3active\u5c42\uff0c\u6700\u7ec8rootbase\u5c06\u53d8\u6210active\u7684\u76f4\u63a5\u540e\u7aef."),(0,l.kt)("p",null,"\u547d\u4ee4\u5982\u4e0b:"),(0,l.kt)("p",null,"\u5047\u8bbe\u5feb\u7167\u5df2\u7ecf\u4f7f\u7528 \u521b\u5efaSnapshots \u5c0f\u8282\u4e2d\u7684\u65b9\u5f0f\u5b8c\u6210:"),(0,l.kt)("p",null,"\u5982",(0,l.kt)("em",{parentName:"p"},"Figure-5"),"\u4e2d\u63cf\u8ff0\u7684-- ","[RootBase]"," <- ","[Active]","."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh blockpull --domain RootBase  \\\n  --path /var/lib/libvirt/images/active.qcow2  \\\n  --base /var/lib/libvirt/images/RootBase.qcow2  \\\n  --wait --verbose\n")),(0,l.kt)("p",null,"\u540e\u7eed\u7684\u5de5\u4f5c\u662f\u6211\u4eec\u9700\u8981\u4f7f\u7528virsh\u6765\u6e05\u7406\u6389\u4e0d\u7528\u7684\u5feb\u7167"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh snapshot-delete --domain RootBase Snap-3 --metadata\n# virsh snapshot-delete --domain RootBase Snap-2 --metadata\n# virsh snapshot-delete --domain RootBase Snap-1 --metadata\n")),(0,l.kt)("p",null,"Figure-6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".------------.  .------------.  .------------.  .------------.  .------------.\n|            |  |            |  |            |  |            |  |            |\n| RootBase   <---  Snap-1    <---  Snap-2    <---  Snap-3    <---  Snap-4    |\n|            |  |            |  |            |  |            |  | (Active)   |\n'------------'  '------------'  '------------'  '------------'  '------------'\n      |                  |              |                  \\\n      |                  |              |                   \\\n      |                  |              |                    \\  stream data\n      |                  |              | stream data         \\\n      |                  |              |                      \\\n      |                  | stream data  |                       \\\n      |  stream data     |              '------------------\x3e     v\n      |                  |                                    .--------------.\n      |                  '---------------------------------\x3e  |              |\n      |                                                       |  Snap-4      |\n      '----------------------------------------------------\x3e  | (Active)     |\n                                                              '--------------'\n                                                                'Standalone'\n                                                                (w/o backing\n                                                                file)\n")),(0,l.kt)("p",null,"\u4e0a\u56fe\u8868\u793a\u7684\u662f\u5c06\u6240\u6709backing file\u5168\u90e8\u5408\u5e76\u81f3active"),(0,l.kt)("p",null,"\u5982\u4e0b\u6267\u884c\u547d\u4ee4:"),(0,l.kt)("p",null,"(1) \u5728\u6211\u4eec\u6267\u884c\u5408\u5e76 ",(0,l.kt)("em",{parentName:"p"},"\u4e4b\u524d")," \u67e5\u770b\u4e00\u4e0b\u5feb\u7167\u7684\u5927\u5c0f(\u6ce8\u610f\u89c2\u5bdf'Active'):\n::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        # ls -lash /var/lib/libvirt/images/RootBase.img\n        608M -rw-r--r--. 1 qemu qemu 1.0G Oct 11 17:54 /var/lib/libvirt/images/RootBase.img\n\n        # ls -lash /var/lib/libvirt/images/*Snap*\n        840K -rw-------. 1 qemu qemu 896K Oct 11 17:56 /var/lib/libvirt/images/Snap-1.qcow2\n        392K -rw-------. 1 qemu qemu 448K Oct 11 17:56 /var/lib/libvirt/images/Snap-2.qcow2\n        456K -rw-------. 1 qemu qemu 512K Oct 11 17:56 /var/lib/libvirt/images/Snap-3.qcow2\n        2.9M -rw-------. 1 qemu qemu 3.0M Oct 11 18:10 /var/lib/libvirt/images/Active.qcow2\n")),(0,l.kt)("p",null,"(2) \u5355\u72ec\u68c0\u67e5\u4e0b 'Active' \u6240\u6307\u5411\u7684backing file ::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        # qemu-img info /var/lib/libvirt/images/Active.qcow2\n        image: /var/lib/libvirt/images/Active.qcow2\n        file format: qcow2\n        virtual size: 1.0G (1073741824 bytes)\n        disk size: 2.9M\n        cluster_size: 65536\n        backing file: /var/lib/libvirt/images/Snap-3.qcow2\n")),(0,l.kt)("p",null,"(3) \u5f00\u59cb ",(0,l.kt)("strong",{parentName:"p"},"blockpull")," \u64cd\u4f5c.\n::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        # virsh blockpull --domain ptest2-base --path /var/lib/libvirt/images/Active.qcow2 --wait --verbose\n        Block Pull: [100 %]\n        Pull complete\n")),(0,l.kt)("p",null,"(4) \u518d\u68c0\u67e5\u4e0b\u5feb\u7167\u5927\u5c0f\uff0c 'Active'\u53d8\u5f97\u5f88\u5927\n::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        # ls -lash /var/lib/libvirt/images/*Snap*\n         840K -rw-------. 1 qemu qemu 896K Oct 11 17:56 /var/lib/libvirt/images/Snap-1.qcow2\n         392K -rw-------. 1 qemu qemu 448K Oct 11 17:56 /var/lib/libvirt/images/Snap-2.qcow2\n         456K -rw-------. 1 qemu qemu 512K Oct 11 17:56 /var/lib/libvirt/images/Snap-3.qcow2\n        1011M -rw-------. 1 qemu qemu 3.0M Oct 11 18:29 /var/lib/libvirt/images/Active.qcow2\n")),(0,l.kt)("p",null,"(5) \u68c0\u67e5'Active'\u4fe1\u606f\uff0c\u73b0\u5728\u5b83\u5df2\u7ecf\u4e0d\u9700\u8981backing file\u4e86\uff0c\u6b63\u5982",(0,l.kt)("em",{parentName:"p"},"Figure-6"),"\u6240\u793a::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        # qemu-img info /var/lib/libvirt/images/Active.qcow2\n        image: /var/lib/libvirt/images/Active.qcow2\n        file format: qcow2\n        virtual size: 1.0G (1073741824 bytes)\n        disk size: 1.0G\n        cluster_size: 65536\n")),(0,l.kt)("p",null,"(6) \u6e05\u7406\u73b0\u573a\n::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        # virsh snapshot-delete --domain RootBase Snap-3 --metadata\n")),(0,l.kt)("p",null,"(7) \u73b0\u5728\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4e0b guestfish  ",(0,l.kt)("strong",{parentName:"p"},"READ-ONLY"),"  \u6a21\u5f0f\u6765\u68c0\u67e5\u4e0b\u78c1\u76d8\u5185\u5bb9( ",(0,l.kt)("em",{parentName:"p"},"--ro")," \u9009\u9879)\n::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        # guestfish --ro -i -a /var/lib/libvirt/images/Active.qcow2\n")),(0,l.kt)("p",null,"\u5feb\u7167\u5220\u9664 (and 'offline commit')"),(0,l.kt)("p",null,"\u5220\u9664\uff08live/offline\uff09\u72b6\u6001\u7684",(0,l.kt)("em",{parentName:"p"},"\u5185\u7f6e\u5feb\u7167"),"\u5f88\u65b9\u4fbf ::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh snapshot-delete --domain f17vm --snapshotname snap6\n")),(0,l.kt)("p",null,"[OR]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# virsh snapshot-delete f17vm snap6\n")),(0,l.kt)("p",null,"libvirt\u73b0\u5728\u8fd8\u6ca1\u6709\u5220\u9664\u5916\u7f6e\u5feb\u7167\u7684\u529f\u80fd\uff0c\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("em",{parentName:"p"},"qemu-img"),"\u547d\u4ee4\u6765\u5b8c\u6210."),(0,l.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u6709\u8fd9\u6837\u4e00\u6761\u94fe(VM",(0,l.kt)("em",{parentName:"p"},"offline"),"\u72b6\u6001): base <- sn1 <- sn2 <- sn3"),(0,l.kt)("p",null,"\u73b0\u5728\u5220\u9664\u7b2c\u4e8c\u4e2a\u5feb\u7167(sn2).\u6709\u4e24\u79cd\u65b9\u5f0f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Method (1): base <- sn1 <- sn3 (by copying sn2 into sn1)"),(0,l.kt)("li",{parentName:"ul"},"Method (2): base <- sn1 <- sn3 (by copying sn2 into sn3)")),(0,l.kt)("p",null,"Method (1)"),(0,l.kt)("p",null,"(by copying sn2 into sn1)"),(0,l.kt)("p",null,"\u6ce8\u610f: \u5fc5\u987b\u4fdd\u8bc1sn1\u6ca1\u6709\u88ab\u5176\u4ed6\u5feb\u7167\u4f5c\u4e3a\u540e\u7aef,\u4e0d\u7136\u5c31\u6302\u4e86!!"),(0,l.kt)("p",null,"offline commit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# qemu-img commit sn2.qcow2\n")),(0,l.kt)("p",null,"\u5c06\u4f1a",(0,l.kt)("em",{parentName:"p"},"commit"),"\u6240\u6709\u5728sn2\u4e2d\u7684\u6539\u52a8\u5230sn2\u7684backing file(sn1).\nqemu-img commit\u548cvirsh blockcommit\u7c7b\u4f3c\n\u73b0\u5728\u628asn3\u7684\u540e\u7aef\u6307\u5411\u5230sn1."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# qemu-img rebase -u -b sn1.qcow2 sn3.qcow2\n")),(0,l.kt)("p",null,"\u6ce8\u610f: -u\u4ee3\u8868'Unsafe mode' -- \u6b64\u6a21\u5f0f\u4e0b\u4ec5\u4ec5\u4fee\u6539\u4e86\u6307\u5411\u5230\u7684backing file\u540d\u5b57\uff0c\u5fc5\u987b\u8c28\u614e\u64cd\u4f5c.\n\u73b0\u5728\u53ef\u4ee5\u76f4\u63a5\u5220\u9664sn2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# rm sn2.qcow2\n")),(0,l.kt)("p",null,"Method (2)"),(0,l.kt)("p",null,"(by copying sn2 into sn3)"),(0,l.kt)("p",null,"\u5408\u5e76\u6570\u636e\uff0crebase\u540e\u7aef:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# qemu-img rebase -b sn1.qcow2 sn3.qcow2\n")),(0,l.kt)("p",null,"\u672a\u4f7f\u7528-u\u6a21\u5f0f\u7684rebase\u5c06\u628a\u6570\u636e\u4e5f\u4e00\u5e76\u5408\u5e76\u8fc7\u53bb\uff0c\u5373sn2\u7684\u6570\u636e\u5199\u5165\u5230sn3.\n\u6362\u8a00\u4e4b: \u8fd9\u91cc\u4f7f\u7528\u7684'Safe mode',\u4e5f\u662f\u9ed8\u8ba4\u6a21\u5f0f --\u5bf9sn3\u800c\u8a00\u4efb\u4f55\u4ece\nqemu-img rebase(\u6ca1\u6709-u)\u548c\u548cvirsh blockpull\u7c7b\u4f3c.\nbackingfile\uff08sn1\uff09\u5230\u65e7\u7684backingfile\uff08sn2\uff09\u4e4b\u95f4\u53d1\u751f\u7684\u5dee\u5f02\u6539\u52a8\u90fd\u5c06\u88ab\u5408\u5e76\u5230sn3\u4e2d."),(0,l.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u5220\u9664sn2\u4e86"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# rm sn2.qcow2\n")))}c.isMDXComponent=!0}}]);
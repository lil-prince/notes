"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5662],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var r=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,l=function(e,t){if(null==e)return{};var o,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=r.createContext({}),i=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(o),b=l,f=u["".concat(s,".").concat(b)]||u[b]||h[b]||n;return o?r.createElement(f,a(a({ref:t},p),{},{components:o})):r.createElement(f,a({ref:t},p))}));function b(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=o.length,a=new Array(n);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var i=2;i<n;i++)a[i]=o[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7893:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var r=o(7462),l=(o(7294),o(3905));const n={layout:"post",title:"bashrc\u4e0eprofile\u7684\u52a0\u8f7d\u987a\u5e8f",description:"\u770b\u4e0bbashrc\u548cprofile\u7684\u6267\u884c\u987a\u5e8f\u5230\u5e95\u662f\u4ec0\u4e48\u6837\u7684",categories:["shell"],tags:["bash"]},a=void 0,c={permalink:"/notes/zh-Hans/blog/2021/02/24/bash-rc-profile-exec-order",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2021-02-24-bash-rc-profile-exec-order.md",source:"@site/blog/2021-02-24-bash-rc-profile-exec-order.md",title:"bashrc\u4e0eprofile\u7684\u52a0\u8f7d\u987a\u5e8f",description:"\u770b\u4e0bbashrc\u548cprofile\u7684\u6267\u884c\u987a\u5e8f\u5230\u5e95\u662f\u4ec0\u4e48\u6837\u7684",date:"2021-02-24T00:00:00.000Z",formattedDate:"2021\u5e742\u670824\u65e5",tags:[{label:"bash",permalink:"/notes/zh-Hans/blog/tags/bash"}],readingTime:3.55,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"bashrc\u4e0eprofile\u7684\u52a0\u8f7d\u987a\u5e8f",description:"\u770b\u4e0bbashrc\u548cprofile\u7684\u6267\u884c\u987a\u5e8f\u5230\u5e95\u662f\u4ec0\u4e48\u6837\u7684",categories:["shell"],tags:["bash"]},prevItem:{title:"\u4e2d\u6807\u9e92\u9e9f\u7cfb\u7edfansible\u6267\u884cyum\u6a21\u5757\u62a5\u9519\u7684\u95ee\u9898\u5206\u6790",permalink:"/notes/zh-Hans/blog/2021/03/22/neokylin-ansible-yum-module-not-work"},nextItem:{title:"\u4f7f\u7528conventional-changelog\u548cStrapdown.js\u4e3agit\u4ed3\u5e93\u81ea\u52a8\u751f\u6210changelog html\u9875\u9762",permalink:"/notes/zh-Hans/blog/2021/01/15/auto-create-changelog-html"}},s={authorsImageUrls:[]},i=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u5b9e\u9a8c",id:"\u5b9e\u9a8c",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}],p={toc:i};function h(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u4f7f\u7528bashrc\u548cprofile\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u65f6\uff0c\u5982\u679c\u591a\u4e2a\u5730\u65b9\u90fd\u6709\u540c\u4e00\u4e2a\u53d8\u91cf\u7684\u8bbe\u7f6e\uff0c\u5219\u9700\u8981\u6ce8\u610f\u4e0d\u540c\u914d\u7f6e\u6587\u4ef6\u7684\u52a0\u8f7d\u987a\u5e8f\u95ee\u9898")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,l.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"\u5982\u679c\u52a0\u8f7d\u987a\u5e8f\u6ca1\u5f04\u660e\u767d\uff0c\u6709\u53ef\u80fd\u4f1a\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u5404\u79cd\u56f0\u6270\uff0c\u6bd4\u5982\u4e3a\u4ec0\u4e48\u8bbe\u7f6e\u4e86profile\u4f46\u662f\u73af\u5883\u53d8\u91cf\u4e0d\u751f\u6548\uff1f\u4e3a\u4ec0\u4e48\u53d8\u91cfssh\u540e\u83b7\u53d6\u7684\u4e0d\u4e00\u6837\uff1f\u4e0b\u9762\u6211\u4eec\u4ee5CentOS7\u7cfb\u7edf\u4e3a\u4f8b\uff0c\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u5c0f\u5b9e\u9a8c\u6765\u89c2\u5bdf\u4e0b\u5230\u5e95bash\u7684\u51e0\u4e2a\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u987a\u5e8f\u662f\u600e\u6837\u7684\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u53ef\u4ee5\u7528\u6765\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u7684\u6587\u4ef6\u5e38\u7528\u7684\u6709\u4ee5\u4e0b\u51e0\u4e2a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/etc/profile"),(0,l.kt)("li",{parentName:"ul"},"/etc/profile.d/*.sh"),(0,l.kt)("li",{parentName:"ul"},"/etc/bashrc"),(0,l.kt)("li",{parentName:"ul"},"~/.bash_profile"),(0,l.kt)("li",{parentName:"ul"},"~/.bashrc")),(0,l.kt)("p",null,"\u800c\u4e0d\u540c\u7684\u6587\u4ef6\u52a0\u8f7d\u65f6\u673a\u53c8\u5206\u4e3alogin shell\u548cnon-login shell\u4e24\u79cd\u60c5\u51b5\u3002\u8fd9\u4e24\u79cd\u60c5\u51b5\u9700\u8981\u533a\u5206\u5bf9\u5f85\uff0c\u53ca\u4e0d\u540c\u7684\u6587\u4ef6\u8981\u5728\u5bf9\u5e94\u573a\u666f\u4e0b\u624d\u80fd\u751f\u6548\u3002\u5047\u8bbe\u6709\u4e00\u4e2a\u76f8\u540c\u7684\u53d8\u91cf\u8bbe\u7f6e\u51fa\u73b0\u5728\u5404\u4e2a\u6587\u4ef6\u91cc\u9762\uff0c\u901a\u8fc7\u5bf9\u4e0d\u540c\u6587\u4ef6\u7684\u53d8\u91cf\u503c\u8fdb\u884c\u5dee\u5f02\u8bbe\u7f6e\u5373\u53ef\u89c2\u5bdf\u51fa\u5404\u4e2a\u914d\u7f6e\u7684\u52a0\u8f7d\u4f18\u5148\u7ea7\u548c\u751f\u6548\u60c5\u51b5\u3002"),(0,l.kt)("h2",{id:"\u5b9e\u9a8c"},"\u5b9e\u9a8c"),(0,l.kt)("p",null,"\u5148\u5199\u5165\u5404\u4e2a\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# tail -n1 /etc/profile /etc/bashrc /etc/profile.d/well.sh ~/.bash_profile ~/.bashrc\n==> /etc/profile <==\nexport WELL=etc-profile\n\n==> /etc/bashrc <==\nexport WELL=etc-bashrc\n\n==> /etc/profile.d/well.sh <==\nexport WELL=etc-profile-d\n\n==> /root/.bash_profile <==\nexport WELL=home-bash-profile\n\n==> /root/.bashrc <==\nexport WELL=home-bashrc\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u5f00\u59cb\u89c2\u5bdf\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u6bcf\u6b21\u4fee\u6539\u914d\u7f6e\u4e4b\u540e\u65b0\u5f00shell\u91cd\u65b0\u52a0\u8f7d\u73af\u5883\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@localhost ~]# echo $WELL\nhome-bash-profile\n[root@localhost ~]# ssh localhost 'echo $WELL'\nhome-bashrc\n[root@localhost ~]#\n\n\n[root@localhost ~]# sed -i '$d' ~/.bashrc\n[root@localhost ~]# sed -i '$d' ~/.bash_profile\n[root@localhost ~]#\n\n\n[root@localhost ~]# echo $WELL\netc-bashrc\n[root@localhost ~]# ssh localhost 'echo $WELL'\netc-bashrc\n[root@localhost ~]#\n\n\n[root@localhost ~]# sed -i '$d' /etc/bashrc\n\n\n[root@localhost ~]# echo $WELL\netc-profile\n[root@localhost ~]# ssh localhost 'echo $WELL'\netc-profile-d\n[root@localhost ~]#\n\n# \u91cd\u65b0\u5199\u5165~/.bashrc\u540e\n[root@localhost ~]# echo $WELL\nhome-bashrc\n[root@localhost ~]# ssh localhost 'echo $WELL'\netc-profile-d\n[root@localhost ~]#\n\n\n# \u91cd\u65b0\u5199\u5165~/.bash_profile,\u53bb\u6389~/.bashrc\u540e\n[root@localhost ~]# echo $WELL\nhome-bash-profile\n[root@localhost ~]# ssh localhost 'echo $WELL'\netc-profile-d\n[root@localhost ~]#\n\n")),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u4ee5\u4e0a\u6d4b\u8bd5\u662f\u5c06\u53d8\u91cf\u653e\u5230\u6bcf\u4e2a\u914d\u7f6e\u672b\u884c\uff0c\u56e0\u4e3a\u914d\u7f6e\u4e4b\u95f4\u6709\u4e92\u76f8\u52a0\u8f7d\u7684\u673a\u5236\uff0c\u5982\u679c\u653e\u5728\u5176\u4ed6\u4f4d\u7f6e\u5219\u6d4b\u8bd5\u7ed3\u679c\u4f1a\u4e0d\u4e00\u6837\u3002"),(0,l.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,l.kt)("p",null,"\u89c2\u5bdf\u4e0a\u9762\u7684\u7ed3\u679c\uff0c\u53ef\u4ee5\u5f97\u51fa\u4ee5\u4e0b\u5b9e\u9a8c\u7ed3\u8bba\uff1a"),(0,l.kt)("p",null,"1 login shell\u4f1a\u52a0\u8f7d\u6240\u6709\u914d\u7f6e,\u4f18\u5148\u7ea7\u4e3a~/.bash_profile ~/.bashrc /etc/bashrc /etc/profile /etc/profile.d"),(0,l.kt)("p",null,"2 non-login shell\u65f6\u52a0\u8f7d\u4f18\u5148\u7ea7\u4e3a ~/.bashrc /etc/bashrc /etc/profile.d"),(0,l.kt)("p",null,"3 non-login shell\u4e0d\u4f1a\u52a0\u8f7d\u7684\u914d\u7f6e\u6709 ~/.bash_profile /etc/profile"),(0,l.kt)("p",null,"4 \u4e24\u79cd\u60c5\u51b5\u4e0b\u90fd\u4f1a\u52a0\u8f7d\u7684\u6709~/.bashrc /etc/bashrc /etc/profile.d"),(0,l.kt)("p",null,"\u90a3\u4e48\u5982\u679c\u6211\u4eec\u9700\u8981\u5728\u7cfb\u7edf\u5168\u5c40\u8bbe\u7f6e\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u8981\u4fdd\u8bc1login shell\u548cnon-login shell\u90fd\u80fd\u8868\u73b0\u4e00\u81f4\uff0c\u9700\u8981\u5982\u4f55\u8bbe\u7f6e\u5462\uff1f"),(0,l.kt)("p",null,"\u56e0\u4e3a~/.bashrc\u4e3a\u7528\u6237\u5c40\u90e8\u914d\u7f6e\u6587\u4ef6\uff0c\u4e0d\u5f71\u54cd\u5168\u5c40\uff0c\u800c/etc/bashrc\u4e3a\u7cfb\u7edf\u5185\u7f6e\u6587\u4ef6\u4e0d\u5efa\u8bae\u4fee\u6539\uff0c\u5982\u679c\u662f\u6709\u5168\u5c40\u73af\u5883\u53d8\u91cf\u9700\u8981\u8bbe\u7f6e\u5efa\u8bae\u653e\u7f6e\u5230/etc/profile.d"),(0,l.kt)("p",null,"over."))}h.isMDXComponent=!0}}]);
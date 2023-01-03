"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),w=a,f=u["".concat(o,".").concat(w)]||u[w]||m[w]||p;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=w;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<p;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},2682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const p={layout:"post",title:"\u4f7f\u7528wpa-supplicant\u914d\u7f6e\u65e0\u7ebf\u7f51\u7edc",description:"",categories:["system"],tags:["wpa-supplicant","wireless"]},l=void 0,i={permalink:"/notes/blog/2011/05/05/centos-wpa-supplicant-wireless",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2011-05-05-centos-wpa-supplicant-wireless.md",source:"@site/blog/2011-05-05-centos-wpa-supplicant-wireless.md",title:"\u4f7f\u7528wpa-supplicant\u914d\u7f6e\u65e0\u7ebf\u7f51\u7edc",description:"",date:"2011-05-05T00:00:00.000Z",formattedDate:"2011\u5e745\u67085\u65e5",tags:[{label:"wpa-supplicant",permalink:"/notes/blog/tags/wpa-supplicant"},{label:"wireless",permalink:"/notes/blog/tags/wireless"}],readingTime:2.175,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u4f7f\u7528wpa-supplicant\u914d\u7f6e\u65e0\u7ebf\u7f51\u7edc",description:"",categories:["system"],tags:["wpa-supplicant","wireless"]},prevItem:{title:"OpenVPN+MySQL\u73af\u5883\u642d\u5efa\u8bb0\u5f55",permalink:"/notes/blog/2011/09/02/openvpn-mysql-setup"},nextItem:{title:"\u4e3aBash\u589e\u52a0\u547d\u4ee4\u6267\u884c\u65e5\u5fd7",permalink:"/notes/blog/2011/02/17/bash-history-logging"}},o={authorsImageUrls:[]},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e4b\u524d\u5728\u4f7f\u7528\u684c\u9762\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u73b0\u5982\u679c\u9700\u8981\u8fde\u63a5\u65e0\u7ebf\u7f51 \uff0c \u90a3\u4e48networkmanager\u662f\u9996\u9009\u7684\uff0c\u81ea\u52a8\u7ba1\u7406\u7f51\u5361\uff0c\u81ea\u52a8\u626b\u63cf\u4fe1\u53f7\uff0c\u7528\u8d77\u6765\u5404\u79cd\u8212\u670d\uff1b\u4f46\u662f\u7a81\u7136\u6709\u4e00\u5929\u53d1\u73b0networkmanager\u5e72\u4e86\u67d0\u4e9b\u6211\u4e0d\u671f\u671b\u5b83\u5e72\u7684\u4e8b\u60c5\uff0c\u4e8e\u662f\u679c\u65adyum remove\u4e4b\uff0c\u7531\u4e8e\u4e00\u6c14\u4e4b\u4e0bremove\u6389\u4e86networkmanager\uff0c\u5e76\u6ca1\u6709\u8003\u8651\u5230\u8fd8\u5f97\u7528\u5b83\u6765\u8fde\u63a5\u65e0\u7ebf\uff0c\u5bfc\u81f4\u540e\u6765\u53d1\u73b0\u9700\u8981\u8fde\u65e0\u7ebf\u7684\u65f6\u5019\u6781\u4e3a\u4e0d\u65b9\u4fbf\uff0c\u6700\u7ec8\u53d1\u73b0\u53ef\u4ee5\u4f7f\u7528wpa-supplicant\u6765\u7ba1\u7406\u65e0\u7ebf\u7f51\u7edc\u8fde\u63a5\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,a.kt)("p",null,"\u5176\u5b9e\u5f88\u591a\u4eba\u90fd\u63a8\u8350\u7528\u8fd9\u4e2a\u4e86wpa_supplicant\uff0c\u4f46\u662f\u7531\u4e8e\u4e00\u76f4\u6ca1\u6709\u8fd9\u4e2a\u5fc5\u8981\u6240\u4ee5\u5c31\u4e00\u76f4\u6ca1\u6709\u5b66\u4f1a\u4f7f\u7528\uff0c\u4eca\u5929\u7528\u4e86\u4e0b\u611f\u89c9\u8fd8\u771f\u4e0d\u9519\u3002 wpa_supplicant\u9996\u5148\u5728/etc/init.d/wpa_supplicant \u6709\u4e00\u4e2a\u542f\u52a8\u63a7\u5236\u811a\u672c\uff0c\u7136\u540e\u6709/etc/wpa_supplicant/wpa_supplicant.conf\u8fd9\u4e2a\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd8\u6709\u4e00\u4e2a/etc/sysconfig/wpa_supplicant\u7684\u5168\u5c40\u914d\u7f6e\u6587\u4ef6\uff0c"),(0,a.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u4f7f\u7528yum\u5b89\u88c5\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"yum install wpa_supplicant"),"\uff0c\u5728/usr/share/doc\u4e0b\u6709\u5927\u91cf\u7684\u914d\u7f6e\u793a\u4f8b\u548c\u6587\u6863\uff0c"),(0,a.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u5b83\u4e4b\u524d\u9700\u8981\u4fee\u6539\u51e0\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u9996\u5148\u662fwpa_supplicant.conf  ,\u6bd4\u5982\u6211\u7684\u914d\u7f6e\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# cat /etc/wpa_supplicant/wpa_supplicant.conf\nctrl_interface=/var/run/wpa_supplicant\nctrl_interface_group=wheel\nnetwork={\nssid="yourssid"\n#scan_ssid=1\nproto=WPA2\nkey_mgmt=WPA-PSK\npairwise=CCMP\ngroup=CCMP\npsk="fightandfuck"\npriority=2\n}\n')),(0,a.kt)("p",null,"\u5173\u4e8e\u8fd9\u4e9b\u4fe1\u606f\u53ef\u4ee5\u5148\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"iwlist  wlan0 scan")," \u547d\u4ee4\u626b\u63cf\uff0c\u5e76\u505a\u76f8\u5e94\u8c03\u6574\u3002\u7136\u540e\u9700\u8981\u4fee\u6539\u5168\u5c40\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"cat /etc/sysconfig/wpa_supplicant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'INTERFACES="-iwlan0"\nDRIVERS="-Dwext"\nOTHER_ARGS="-f /var/log/wpa_supplicant.log -P /var/run/wpa_supplicant.pid"\n')),(0,a.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("p",null,"\u4fee\u6539\u5b8c\u8fd9\u4e9b\u540e\uff0c\u5373\u53ef\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"service wpa_supplicant start")," \u542f\u52a8\u7f51\u5361\u5e76\u8fde\u63a5\u8ba4\u8bc1\u4e86\uff0c\u5f53\u7136\u53ef\u80fd\u51fa\u73b0\u7684\u60c5\u51b5\u662f\u8ba4\u8bc1\u6210\u529f\u4e86\u4f46\u662f\u7f51\u5361\u6ca1\u6709\u83b7\u53d6\u5230ip\u5730\u5740\uff0c\u8fd9\u4e2a\u65f6\u5019\u53ea\u9700\u8981\u624b\u52a8dhclient\u4e00\u4e0b\u6216\u8005\u5199\u4e2aifcfg-wlan0\u5e76\u6307\u5b9a\u5176\u4f7f\u7528dhcp\u7136\u540eifup wlan0\u3002"),(0,a.kt)("p",null,"\u603b\u4e4b\uff0c\u65b9\u4fbf\u9002\u7528\u3002"))}u.isMDXComponent=!0}}]);
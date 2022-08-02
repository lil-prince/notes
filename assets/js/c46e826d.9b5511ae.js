"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,k=d["".concat(p,".").concat(u)]||d[u]||i[u]||a;return n?r.createElement(k,s(s({ref:t},m),{},{components:n})):r.createElement(k,s({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>i,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={layout:"post",title:"k8s\u6d4b\u8bd5\u73af\u5883\u90e8\u7f72\u8bb0\u5f55",description:"\u8bb0\u5f55k8s\u5728\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u7684\u90e8\u7f72\u8fc7\u7a0b",categories:["system"],tags:["k8s","kubernetes"]},s=void 0,l={permalink:"/notes/blog/2017/08/18/deploy-k8s-from-local-repo",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2017-08-18-deploy-k8s-from-local-repo.md",source:"@site/blog/2017-08-18-deploy-k8s-from-local-repo.md",title:"k8s\u6d4b\u8bd5\u73af\u5883\u90e8\u7f72\u8bb0\u5f55",description:"\u8bb0\u5f55k8s\u5728\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u7684\u90e8\u7f72\u8fc7\u7a0b",date:"2017-08-18T00:00:00.000Z",formattedDate:"August 18, 2017",tags:[{label:"k8s",permalink:"/notes/blog/tags/k-8-s"},{label:"kubernetes",permalink:"/notes/blog/tags/kubernetes"}],readingTime:4.845,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"k8s\u6d4b\u8bd5\u73af\u5883\u90e8\u7f72\u8bb0\u5f55",description:"\u8bb0\u5f55k8s\u5728\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u7684\u90e8\u7f72\u8fc7\u7a0b",categories:["system"],tags:["k8s","kubernetes"]},prevItem:{title:"HADOOP3.0.0\u7ea0\u5220\u7801\u6d4b\u8bd5",permalink:"/notes/blog/2017/08/20/hadoop3-ec-test"},nextItem:{title:"nftables\uff1anft man\u6587\u6863\u9605\u8bfb\u7b14\u8bb0",permalink:"/notes/blog/2017/06/13/nftables-man-page"}},p={authorsImageUrls:[]},c=[{value:"k8s \u4e2d\u7684\u8282\u70b9\u7c7b\u578b",id:"k8s-\u4e2d\u7684\u8282\u70b9\u7c7b\u578b",level:2},{value:"\u90e8\u7f72\u524d\u51c6\u5907",id:"\u90e8\u7f72\u524d\u51c6\u5907",level:2},{value:"\u642d\u5efaetcd\u96c6\u7fa4",id:"\u642d\u5efaetcd\u96c6\u7fa4",level:2},{value:"\u51c6\u5907\u955c\u50cf\u4ed3\u5e93",id:"\u51c6\u5907\u955c\u50cf\u4ed3\u5e93",level:2},{value:"\u90e8\u7f72k8s\u96c6\u7fa4",id:"\u90e8\u7f72k8s\u96c6\u7fa4",level:2}],m={toc:c};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u8bb0\u5f55\u4e86\u5728\u672c\u5730\u90e8\u7f72k8s\u6d4b\u8bd5\u73af\u5883\u7684\u8fc7\u7a0b\uff0c\u90e8\u7f72\u811a\u672c\u53c2\u8003github\u4e0a\u5176\u4ed6\u540c\u5b66\u5206\u4eab\u7684\u811a\u672c\uff0c\u5728\u5176\u57fa\u7840\u4e0a\u505a\u4e86\u4e9b\u5c0f\u6539\u52a8\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,o.kt)("h2",{id:"k8s-\u4e2d\u7684\u8282\u70b9\u7c7b\u578b"},"k8s \u4e2d\u7684\u8282\u70b9\u7c7b\u578b"),(0,o.kt)("p",null,"master \u8d1f\u8d23\u7ba1\u7406\u5176\u4ed6\u8282\u70b9\u7684\u8c03\u5ea6\u4e2d\u5fc3\uff0cmaster\u53ef\u4ee5\u6709\u5907\u673areplica\u505a\u5197\u4f59"),(0,o.kt)("p",null,"minion \u7531master\u7ba1\u7406\uff0c\u8fd0\u884c\u5bb9\u5668\u670d\u52a1\uff0c1\u4e2a\u96c6\u7fa4\u4e2d\u6709N\u4e2aminion\u8282\u70b9"),(0,o.kt)("h2",{id:"\u90e8\u7f72\u524d\u51c6\u5907"},"\u90e8\u7f72\u524d\u51c6\u5907"),(0,o.kt)("p",null,"\u90e8\u7f72\u6b64\u6d4b\u8bd5\u73af\u5883\u53c2\u8003\u4e86github\u4e0a\u5176\u4ed6\u540c\u5b66\u7684\u5206\u4eab\uff0c\u6211fork\u7684repo\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/5xops/k8s-deploy"},"https://github.com/5xops/k8s-deploy")),(0,o.kt)("p",null,"\u9996\u5148\u6309\u7167github repo\u4e2d\u7684readme\u90e8\u5206\u5c06k8s rpm\u5305\u4e0b\u8f7d\u5230\u672c\u5730\uff0c\u4ee5\u51c6\u5907\u79bb\u7ebf\u90e8\u7f72\u3002\u5176\u6b21\u6211\u5728\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u51c6\u5907\u4e866\u4ee5\u4e0a\u7684\u865a\u62df\u673a\u8282\u70b9\uff0c\u5176\u4e2d3\u4e2a\u8282\u70b9\u7528\u4e8e\u90e8\u7f72etcd\u96c6\u7fa4\uff0c2\u4e2a\u8282\u70b9\u7528\u4e8e\u90e8\u7f72k8s master\uff0c\u5176\u4f59\u8282\u70b9\u7528\u4e8e\u90e8\u7f72k8s minion\u3002\n\u6240\u6709\u865a\u62df\u673a\u5747\u8fd0\u884c\u5728\u4e00\u53f0\u7269\u7406\u670d\u52a1\u5668\u4e0a\uff0c\u7ba1\u7406\u865a\u62df\u673a\u7528\u4e86\u8fd9\u4e2a\u811a\u672c\uff08",(0,o.kt)("a",{parentName:"p",href:"https://github.com/itxx00/vmm%EF%BC%89%E3%80%82"},"https://github.com/itxx00/vmm\uff09\u3002")),(0,o.kt)("p",null,"\u9996\u5148\u521b\u5efa\u597d\u9700\u8981\u4f7f\u7528\u5230\u7684\u865a\u62df\u673a\u8282\u70b9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vmm create etcd1\nvmm create etcd2\nvmm create etcd3\nvmm create kubem1\nvmm create kubem2\nvmm create node1\nvmm create node2\n")),(0,o.kt)("p",null,"\u56e0\u90e8\u7f72k8s\u96c6\u7fa4\u65f6\u8981\u6c42\u6240\u6709\u8282\u70b9\u90fd\u914d\u7f6e\u597d\u4e3b\u673a\u540d\uff0c\u56e0\u4e3a\u9ed8\u8ba4\u521b\u5efa\u51fa\u6765\u7684\u865a\u62df\u673a\u6ca1\u6709\u4fee\u6539hostname\uff0c\u9700\u8981\u4f7f\u7528\u53e6\u5916\u4e00\u4e2a\u811a\u672c\u6765\u914d\u7f6ehostname\u5e76\u914d\u7f6e\u597d/etc/hosts\uff0c\u9996\u5148\u51c6\u5907\u597d\u521d\u59cb\u5316\u6267\u884c\u7684\u811a\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#!/bin/bash\n# content of ~/.vmm/init.sh\ncd /tmp\nhostnm=$(cat hostname)\n[[ -n $hostnm ]] || {\n    echo "err"\n    exit 1\n}\necho $hostnm >/etc/hostname\nhostname $hostnm\ncat /tmp/hosts.tmp >/etc/hosts\n\n')),(0,o.kt)("p",null,"\u63a5\u7740\u6267\u884c\u521d\u59cb\u5316\u64cd\u4f5c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vminit etcd1\nvminit etcd2\nvminit etcd3\nvminit kubem1\nvminit kubem2\nvminit node1\nvminit node2\n")),(0,o.kt)("p",null,"\u6bcf\u4e2a\u8282\u70b9\u7684hostname\u5c06\u88ab\u8bbe\u7f6e\u6210\u865a\u62df\u673a\u7684\u540d\u5b57\uff0c\u540c\u65f6vminit\u811a\u672c\u4f1a\u628a\u672c\u5730\u7684ssh\u516c\u94a5\u548c\u79c1\u94a5\u90fd\u62f7\u8d1d\u5230\u865a\u62df\u673a\u8282\u70b9\uff0c\u8fd9\u6837\u521d\u59cb\u5316\u4e4b\u540e\u7684\u8282\u70b9\u53ef\u4ee5\u901a\u8fc7\u76f8\u540c\u7684\u5bc6\u94a5\u4e92\u76f8\u514d\u5bc6\u767b\u5f55\uff0c\u6ce8\u610f\u8fd9\u6837\u7684\u64cd\u4f5c\u4ec5\u9002\u7528\u4e8e\u5feb\u901f\u642d\u5efa\u6d4b\u8bd5\u73af\u5883\uff0c\u751f\u4ea7\u73af\u5883\u5343\u4e07\u4e0d\u8981\u8fd9\u4e48\u5904\u7406\u3002\u6253\u901a\u514d\u5bc6ssh\u662f\u56e0\u4e3a\u540e\u9762\u90e8\u7f72k8s\u65f6\u4f1a\u7528\u5230\u3002"),(0,o.kt)("h2",{id:"\u642d\u5efaetcd\u96c6\u7fa4"},"\u642d\u5efaetcd\u96c6\u7fa4"),(0,o.kt)("p",null,"\u5728\u90e8\u7f72k8s\u96c6\u7fa4\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5148\u90e8\u7f72\u4e00\u4e2a\u72ec\u7acb\u7684etcd\u96c6\u7fa4\uff0ck8s\u4f1a\u7528\u5230\u8fd9\u4e2a\u96c6\u7fa4\u3002\u8fd9\u91cc\u6211\u91c7\u7528ansible playbook\u6765\u90e8\u7f72\uff0cplaybook\u5df2\u7ecf\u5206\u4eab\u5230github\u4e0a\u9762\uff0c\uff08",(0,o.kt)("a",{parentName:"p",href:"https://github.com/itxx00/ansible-etcd%EF%BC%89%EF%BC%8C%E6%8C%89%E7%85%A7repo%E4%B8%AD%E7%9A%84readme%E6%9D%A5%E5%87%86%E5%A4%87%E5%A5%BD%E9%9B%86%E7%BE%A4%E3%80%82"},"https://github.com/itxx00/ansible-etcd\uff09\uff0c\u6309\u7167repo\u4e2d\u7684readme\u6765\u51c6\u5907\u597d\u96c6\u7fa4\u3002")),(0,o.kt)("h2",{id:"\u51c6\u5907\u955c\u50cf\u4ed3\u5e93"},"\u51c6\u5907\u955c\u50cf\u4ed3\u5e93"),(0,o.kt)("p",null,"\u5c06\u4e0b\u8f7d\u4e0b\u6765\u7684k8s rpm\u5305\u548cdocker\u955c\u50cf\u653e\u5230/data/k8s-deploy\u76ee\u5f55\uff0c\u5176\u4e2drpms\u76ee\u5f55\u5b58\u653e\u4e86\u9700\u8981\u7528\u5230\u7684rpm\u5305\uff0cimages\u76ee\u5f55\u5b58\u653e\u9700\u8981\u7528\u5230\u7684docker\u955c\u50cf\uff0c\u56e0\u539f\u811a\u672c\u4e2d\u4e0d\u5305\u542bk8s dashboard\uff08\u4e00\u5957web ui\u7ba1\u7406\u754c\u9762\uff09\uff0c\u4e3a\u4e86\u80fd\u591f\u90e8\u7f72dashboard\uff0c\u5bf9\u539f\u811a\u672c\u4f5c\u4e86\u4fee\u6539\u589e\u52a0\u4e86\u90e8\u7f72dashboard\u7684\u9009\u9879\uff0c\u90e8\u7f72dashboard\u9700\u8981\u4e00\u4e9b\u989d\u5916\u7684docker\u955c\u50cf\u548c\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u91cc\u5148\u8865\u5145\u597ddocker\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yum -y install docker\nsystemctl start docker\ndocker pull googlecontainer/kubernetes-dashboard-amd64:v1.6.1\ndocker pull googlecontainer/heapster-influxdb-amd64:v1.1.1\ndocker pull googlecontainer/heapster-grafana-amd64:v4.0.2\ndocker pull googlecontainer/heapster-amd64:v1.3.0\ncd /data/k8s-deploly/images\ndocker save googlecontainer/kubernetes-dashboard-amd64 -o kubernetes-dashboard-amd64_v1.6.1.tar\ndocker save googlecontainer/heapster-influxdb-amd64 -o heapster-influxdb-amd64_v1.1.1.tar\ndocker save googlecontainer/heapster-grafana-amd64 -o heapster-grafana-amd64_v4.0.2.tar\ndocker save googlecontainer/heapster-amd64 -o heapster-amd64_v1.3.0.tar\n")),(0,o.kt)("p",null,"\u539f\u811a\u672c\u4e2d\u5b89\u88c5rpm\u5305\u662f\u5728\u5404\u8282\u70b9\u4e0b\u8f7d\u597d\u540e\u672c\u5730\u5b89\u88c5\u7684\uff0c\u6211\u6539\u8fdb\u4e86\u4e00\u4e0b\u91c7\u7528yum\u65b9\u5f0f\u5b89\u88c5\uff0c\u51c6\u5907yum\u4ed3\u5e93\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"createrepo /data/k8s-deploy/rpms\nyum -y install nginx\ncat >/etc/nginx/conf.d/k8srepo.conf <<EOF\nserver {\n    listen       8000;\n    server_name  _;\n    root         /data/k8s-deploy;\n    autoindex on;\n\n    location / {\n        autoindex on;\n    }\n}\nEOF\nsystemctl restart nginx\n")),(0,o.kt)("p",null,"\u81f3\u6b64yum repo\u548cdocker\u955c\u50cf\u51c6\u5907\u5b8c\u6210\u3002"),(0,o.kt)("h2",{id:"\u90e8\u7f72k8s\u96c6\u7fa4"},"\u90e8\u7f72k8s\u96c6\u7fa4"),(0,o.kt)("p",null,"\u90e8\u7f72\u8fc7\u7a0b\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/5xops/k8s-deploy/blob/master/README.md"},"https://github.com/5xops/k8s-deploy/blob/master/README.md")," \uff0c\u9700\u8981\u4fee\u6539repo\u4e2d\u7684k8slocal.repo\u6587\u4ef6\u4e2dip\u5730\u5740\u4e3ayum\u4ed3\u5e93\u5bf9\u5e94\u7684ip\u5730\u5740\uff0c\u90e8\u7f72master\u3001minion\u548creplica\u53ef\u53c2\u8003master.sh\uff0cminon.sh, replica.sh\u7684\u5185\u5bb9\u3002\n\u9700\u8981\u6ce8\u610f\u7684\u662f\u4e3a\u4e86\u90e8\u7f72dashboard\u670d\u52a1\u6211\u4eec\u989d\u5916\u589e\u52a0\u4e86dashboard\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5177\u4f53\u589e\u52a0\u7684\u5185\u5bb9\u8bf7\u53c2\u8003\u8fd9\u4e2acommit\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/5xops/k8s-deploy/commit/1766a675d76edb32f310acd98d5c6ed50a356e5b"},"https://github.com/5xops/k8s-deploy/commit/1766a675d76edb32f310acd98d5c6ed50a356e5b")),(0,o.kt)("p",null,"\u81f3\u6b64\uff0ck8s\u6d4b\u8bd5\u73af\u5883\u53ca\u642d\u5efa\u5b8c\u6210\uff0c\u540e\u7eed\u6211\u5c06\u4f7f\u7528\u8fd9\u4e2ak8s\u6d4b\u8bd5\u73af\u5883\u6765\u90e8\u7f72\u5176\u4ed6\u670d\u52a1\uff0c\u540e\u9762\u4f1a\u6162\u6162\u5206\u4eab\u3002"))}i.isMDXComponent=!0}}]);
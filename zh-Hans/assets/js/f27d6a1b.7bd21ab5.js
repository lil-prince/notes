"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2891],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var o=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,s=function(t,e){if(null==t)return{};var n,o,s={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,r(r({ref:e},p),{},{components:n})):o.createElement(f,r({ref:e},p))}));function m(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,r=new Array(a);r[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:s,r[1]=i;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7802:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),s=(n(7294),n(3905));const a={layout:"post",title:"Ovirt\u4e2d\u7684stateless\u5b9e\u73b0\u673a\u5236",description:"\u7b80\u5355\u5206\u6790ovirt\u7684stateless\u5b9e\u73b0\u673a\u5236",categories:["virt","system"],tags:["ovirt","stateless"]},r=void 0,i={permalink:"/notes/zh-Hans/blog/2013/03/14/ovirt-stateless",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2013-03-14-ovirt-stateless.md",source:"@site/blog/2013-03-14-ovirt-stateless.md",title:"Ovirt\u4e2d\u7684stateless\u5b9e\u73b0\u673a\u5236",description:"\u7b80\u5355\u5206\u6790ovirt\u7684stateless\u5b9e\u73b0\u673a\u5236",date:"2013-03-14T00:00:00.000Z",formattedDate:"2013\u5e743\u670814\u65e5",tags:[{label:"ovirt",permalink:"/notes/zh-Hans/blog/tags/ovirt"},{label:"stateless",permalink:"/notes/zh-Hans/blog/tags/stateless"}],readingTime:9.39,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Ovirt\u4e2d\u7684stateless\u5b9e\u73b0\u673a\u5236",description:"\u7b80\u5355\u5206\u6790ovirt\u7684stateless\u5b9e\u73b0\u673a\u5236",categories:["virt","system"],tags:["ovirt","stateless"]},prevItem:{title:"\u6b63\u786e\u4f7f\u7528shell\u8fd4\u56de\u503c",permalink:"/notes/zh-Hans/blog/2013/05/17/bash-shell-exit-code"},nextItem:{title:"\u4f7f\u7528libvirt\u548ctc\u5b9e\u73b0vm\u5e26\u5bbd\u63a7\u5236",permalink:"/notes/zh-Hans/blog/2013/03/01/libvirt-tc-bandwidth-control"}},l={authorsImageUrls:[]},c=[{value:"Ovirt\u7b80\u4ecb",id:"ovirt\u7b80\u4ecb",level:2},{value:"\u5173\u4e8estateless",id:"\u5173\u4e8estateless",level:2},{value:"\u5206\u6790\u5176\u5b9e\u73b0\u673a\u5236",id:"\u5206\u6790\u5176\u5b9e\u73b0\u673a\u5236",level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2}],p={toc:c};function d(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6211\u53d1\u73b0ovirt\u7684node\u4e5f\u5c31\u662f\u8fd0\u884c\u865a\u62df\u673a\u7684\u4e3b\u673a\u88ab\u8bbe\u8ba1\u6210\u4e86\u8fd9\u6837\uff1a\u6574\u4e2a\u6839\u6587\u4ef6\u7cfb\u7edf\u662f\u53ea\u8bfb\u7684\uff0c\u53ea\u6709\u90e8\u5206\u914d\u7f6e\u6587\u4ef6\u88ab\u72ec\u7acb\u51fa\u6765\u653e\u5230\u4e86\u53e6\u5916\u7684\u5206\u533a\uff0c\u95ee\u4e86\u51e0\u4f4dIBM\u548c\u7ea2\u5e3d\u7684\u5de5\u7a0b\u5e08\uff0c\u624d\u77e5\u9053\u8fd9\u53ebstateless\uff0c\u4e5f\u5c31\u662f\u662f\u65e0\u72b6\u6001\u6a21\u5f0f")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,s.kt)("h2",{id:"ovirt\u7b80\u4ecb"},"Ovirt\u7b80\u4ecb"),(0,s.kt)("p",null,"\u8fd9\u662f\u6765\u81eacentos wiki\u4e2d\u7684\u63cf\u8ff0\uff1a"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"oVirt \u662f\u4e2a\u7ba1\u7406\u865a\u62df\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u8a00\u4e0b\u4e4b\u610f\u5c31\u662f\u4f60\u53ef\u5229\u7528 oVirt \u7684\u7ba1\u7406\u754c\u9762\uff08oVirt \u5f15\u64ce\uff09\u6765\u7ba1\u7406\u786c\u4ef6\u8282\u70b9\u3001\u5b58\u50a8\u53ca\u7f51\u7edc\u8d44\u6e90\uff0c\u5e76\u90e8\u7f72\u53ca\u76d1\u63a7\u5728\u4f60\u7684\u6570\u636e\u4e2d\u5fc3\u5185\u8fd0\u884c\u7684\u865a\u62df\u673a\u5668\u3002\n\u5982\u679c\u4f60\u719f\u8bc6 VMware \u7684\u4ea7\u5668\uff0coVirt \u5728\u7406\u5ff5\u4e0a\u4e0e vSphere \u7c7b\u540c\u3002Red Hat \u4f01\u4e1a\u7ea7\u865a\u62df\u5316\u4ea7\u54c1\u4ee5 oVirt \u4f5c\u4e3a\u57fa\u7840\uff0c\u8fd9\u4e2a\u4e0a\u6e38\u8ba1\u5212\u5185\u5f00\u53d1\u7684\u65b0\u529f\u80fd\uff0c\u65e5\u540e\u4ea6\u4f1a\u5728\u83b7\u652f\u6301\u7684\u4ea7\u54c1\u5185\u51fa\u73b0\u3002")),(0,s.kt)("p",null,"ovirt\u662f\u4e00\u5957\u865a\u62df\u5316\u7ba1\u7406\u7684\u7cfb\u7edf\uff0c\u5176\u5bf9\u6807\u4ea7\u54c1\u662fvmware\u7684vsphere\uff0c\u5b83\u5206\u4e3aovirt-engine\u548covirt-node\uff0c\u53ef\u4ee5\u7528ovirt\u7684\u8fd9\u5957\u7cfb\u7edf\u6765\u7ba1\u7406\u865a\u62df\u673a\u7fa4\uff0c\u73b0\u5728\u865a\u62df\u5316\u76f8\u5173\u4ea7\u54c1\u4f17\u591a\uff0c\u5fae\u8f6f\uff0cvmware\uff0coracle\u7b49\u90fd\u5728\u505a\u8fd9\u65b9\u9762\u7684\u4ea7\u54c1\uff0c\u4e8e\u662fIBM\u7ea2\u5e3dubuntu\u7b49\u5382\u5546\u5c31\u8054\u5408\u8d77\u6765\u5f00\u59cb\u641e\u8fd9\u4e2a\u4e1c\u897f\u4e86\uff0c\u7ea2\u5e3d\u5f88\u65e9\u5c31\u5f00\u59cb\u6295\u5165kvm\u4e86\uff0c\u7ea2\u5e3d\u505a\u7684\u662fRHEV\u7684\u6574\u5957\u7cfb\u7edf\uff0c\u4e5f\u5206\u4e3anode\u548cengine\u53ea\u662f\u540d\u5b57\u4e0d\u4e00\u6837\uff0c\u540e\u6765\u5e72\u8106\u5c31\u628anode\u7684RHEV-H\u7ed9\u8d21\u732e\u51fa\u6765\uff0c\u5927\u5bb6\u4e00\u8d77\u641eovirt\u4e86\u3002\u524d\u51e0\u5929\u6211\u4e5f\u8bd5\u7528\u4e86\u4e00\u4e0bovirt\u548cRHEV\uff0c\u53d1\u73b0\u4ed6\u4eec\u7684node\u4e5f\u5c31\u662f\u8fd0\u884c\u865a\u62df\u673a\u7684\u4e3b\u673a\u88ab\u8bbe\u8ba1\u6210\u4e86\u8fd9\u6837: \u6574\u4e2a\u6839\u6587\u4ef6\u7cfb\u7edf\u662f\u53ea\u8bfb\u7684\uff0c\u53ea\u6709\u90e8\u5206\u914d\u7f6e\u6587\u4ef6\u88ab\u72ec\u7acb\u51fa\u6765\u653e\u5230\u4e86\u53e6\u5916\u7684\u5206\u533a\uff0c\u95ee\u4e86\u51e0\u4f4dIBM\u548c\u7ea2\u5e3d\u7684\u5de5\u7a0b\u5e08\uff0c\u624d\u77e5\u9053\u8fd9\u53ebstateless\uff0c\u65e0\u72b6\u6001\uff0c\u8fd9\u4e48\u505a\u7684\u597d\u5904\u662f\u8fd0\u884c\u73af\u5883\u548c\u5b58\u50a8\u5206\u79bb\uff0c\u63d0\u9ad8\u6574\u4f53\u53ef\u7528\u6027\u3002\u5728\u5206\u6790\u4e86ovirt\u4e2d\u7684stateless\u5b9e\u73b0\u673a\u5236\u4e4b\u540e\uff0c\u4e0b\u9762\u5c06\u5728centos6\u4e0a\u5c1d\u8bd5\u624b\u5de5\u914d\u7f6e\uff0c\u8fc7\u7a0b\u4e2d\u8bf7\u6559\u4e86\u51e0\u4f4dovirt\u7684\u5f00\u53d1,\u518d\u6b21\u8868\u793a\u611f\u8c22"),(0,s.kt)("h2",{id:"\u5173\u4e8estateless"},"\u5173\u4e8estateless"),(0,s.kt)("p",null,"\u8fd9\u79cdstateless\u7684\u8bbe\u8ba1\u6765\u81ea\u5f88\u65e9\u4e4b\u524d\u7ea2\u5e3d\u5728fedora\u91cc\u9762\u505a\u7684\u5c1d\u8bd5\uff0c\u76ee\u7684\u662f\u628a\u7cfb\u7edf\u505a\u6210liveCD\uff0c\u4e0b\u9762\u662f\u4e00\u4e9b\u5173\u4e8estateless\u7684\u63cf\u8ff0\uff1a"),(0,s.kt)("p",null,"read-only root file system(stateless linux)\nReadonly root support.\nThis was add to Fedora for Stateless Linux, i.e. for creating live Fedora CDs.\nHow to use:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Edit ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/readonly-root"),". Set 'READONLY' to 'yes'.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Add any exceptions that need to be writable that aren't in the stock ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/rwtab")," to an /etc/rwtab.d file. (See below)\nHow it works:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"On boot, we mount a tmpfs (by default, at /var/lib/stateless/writable), and then parse ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/rwtab")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/rwtab.d/*")," for things to put there.\nThese files have the format:\n",(0,s.kt)("inlineCode",{parentName:"p"},"<type>  <path>"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Types are as follows:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"empty: An empty path. Example:\n",(0,s.kt)("inlineCode",{parentName:"li"},"empty     /tmp")),(0,s.kt)("li",{parentName:"ul"},"dirs: A directory tree that is copied, empty. Example:\n",(0,s.kt)("inlineCode",{parentName:"li"},"dirs      /var/run")),(0,s.kt)("li",{parentName:"ul"},"files: A file or directory tree that is copied intact. Example:\n",(0,s.kt)("inlineCode",{parentName:"li"},"files     /etc/resolv.conf"))))),(0,s.kt)("p",null,"A stock rwtab is shipped with common things that need mounted.\nWhen your computer comes back up, the root and any other system\npartitions will be mounted read-only. All the files and directories\nlisted in ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/rwtab")," will be mounted read-write on a tmpfs filesystem.\nYou can add additional files and directories to rwtab to make them\nwritable after reboot."),(0,s.kt)("p",null,"Note that this system is stateless. When you reboot again, everything\nwritten to the tmpfs filesystem vanishes and the system will be exactly\nas it was the last time it was booted. You could add a writable\nfilesystem on disk or NFS for writing files you want to retain after\nrebooting."),(0,s.kt)("p",null,"Take a look at ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/rc.d/rc.sysinit"),' to see how the magic is done.\nThis capability is a "technology preview" (beta) and is buggy. Note that\n',(0,s.kt)("inlineCode",{parentName:"p"},"/etc/mtab"),' and thus "mount" do not show the complete list of filesystems\nbecause the /etc directory is on a read-only filesystem. /proc/mounts\nalways shows the correct mount information. You could update ',(0,s.kt)("inlineCode",{parentName:"p"},"/etc/mtab"),"\nfrom /proc/mounts to correct it both after boot and after running the\nmount or umount commands to change mounts."),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"fgrep -v rootfs /proc/mounts >/etc/mtab")," to correct ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/mtab"),".\nNote that mounting or symlinking /proc/mounts to /etc/mtab causes other\nproblems such as breaking the df command."),(0,s.kt)("p",null,"You can change your read-only root filesystem to read-write mode\nimmediately with this command run by the root user:\n",(0,s.kt)("inlineCode",{parentName:"p"},"mount -n -o remount,rw /")),(0,s.kt)("h2",{id:"\u5206\u6790\u5176\u5b9e\u73b0\u673a\u5236"},"\u5206\u6790\u5176\u5b9e\u73b0\u673a\u5236"),(0,s.kt)("p",null,"\u4e0b\u9762\u628a\u5206\u6790\u8fc7\u7a0b\u8bb0\u5f55\u4e0b\u6765\uff1a"),(0,s.kt)("p",null,"\u9996\u5148\u6211\u770b\u5230\u7684\u662ffstab\u6587\u4ef6"),(0,s.kt)("p",null,"/etc/fstab"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/dev/root / ext2 defaults,ro,noatime 0 0\ndevpts /dev/pts devpts gid=5,mode=620 0 0\ntmpfs /dev/shm tmpfs defaults 0 0\nproc /proc proc defaults 0 0\nsysfs /sys sysfs defaults 0 0\n/dev/HostVG/Config /config ext4 defaults,noauto,noatime 0 0\ndebugfs /sys/kernel/debug debugfs 0 0\n/dev/HostVG/Swap swap swap defaults 0 0\n/dev/HostVG/Logging /var/log ext4 defaults,noatime 0 0\n/dev/HostVG/Data /data ext4 defaults,noatime 0 0\n/data/images /var/lib/libvirt/images bind bind 0 0\n/data/core /var/log/core bind bind 0 0\n")),(0,s.kt)("p",null,"\u8fd9\u91cc\u8981\u6ce8\u610f\u7684\u5730\u65b9\u5c31\u662froot\u540e\u9762\u7684ro\uff0c\u4e5f\u5c31\u662f\u8bf4\u88ab\u6302\u8f7d\u6210\u4e86\u53ea\u8bfb\uff0c\u8fd9\u8bf4\u660estateless\u662f\u5728\u6302\u8f7d\u78c1\u76d8\u4e4b\u524d\u5c31\u5df2\u7ecf\u5b8c\u6210\uff0c\u90a3\u80af\u5b9a\u8ddf\u7cfb\u7edf\u542f\u52a8\u76f8\u5173\uff0c\n\u63a5\u7740\u6211\u4eec\u627e\u5230rc.sysinit\u8fd9\u4e2a\u5728\u7cfb\u7edf\u542f\u52a8\u9636\u6bb5\u6267\u884c\u7684\u811a\u672c\u4e2d\u4e0b\u9762\u8fd9\u6bb5\u5185\u5bb9:"),(0,s.kt)("p",null,"/etc/rc.d/rc.sysinit"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'for file in /etc/statetab /etc/statetab.d/* ; do\n    is_ignored_file "$file" && continue\n    [ ! -f "$file" ] && continue\n\n    if [ -f "$STATE_MOUNT/$file" ] ; then\n        mount -n --bind "$STATE_MOUNT/$file" "$file"\n    fi\n\n    for path in $(grep -v "^#" "$file" 2>/dev/null); do\n        mount_state "$path"\n        [ -n "$SELINUX_STATE" -a -e "$path" ] && restorecon -R "$path"\n    done\ndone\n')),(0,s.kt)("p",null,"\u8fd9\u6bb5shell\u91cc\u9762\u7275\u626f\u5230\u4e86\u4e2a/etc/statetab,\u800c\u4e14\u901a\u8fc7\u5bf9\u6bd4\u666e\u901a\u7cfb\u7edf\u8fd8\u53d1\u73b0\u5176\u4ed6\u5730\u65b9\u7684\u4e0d\u540c"),(0,s.kt)("p",null,"diff rc.sysinit /etc/rc.sysinit"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'102a103,108\n> elif [[ "$system_release" =~ "CentOS" ]]; then\n> [ "$BOOTUP" = "color" ] && echo -en "\\\\033[0;36m"\n> echo -en "CentOS"\n> [ "$BOOTUP" = "color" ] && echo -en "\\\\033[0;39m"\n> PRODUCT=$(sed "s/CentOS \\(.*\\) \\?release.*/\\1/" /etc/system-release)\n> echo " $PRODUCT"\n499c505\n< action $"Mounting local filesystems: " mount -a -t nonfs,nfs4,smbfs,ncpfs,cifs,gfs,gfs2,noproc,nosysfs,nodevpts -O no_netdev\n---\n> action $"Mounting local filesystems: " mount -a -t nonfs,nfs4,smbfs,ncpfs,cifs,gfs,gfs2 -O no_netdev\n501c507\n< action $"Mounting local filesystems: " mount -a -n -t nonfs,nfs4,smbfs,ncpfs,cifs,gfs,gfs2,noproc,nosysfs,nodevpts -O no_netdev\n---\n> action $"Mounting local filesystems: " mount -a -n -t nonfs,nfs4,smbfs,ncpfs,cifs,gfs,gfs2 -O no_netdev\n')),(0,s.kt)("p",null,"\u63a5\u7740\u770b\u770b\u8fd9\u4e2a/etc/statetab\u6587\u4ef6\u662f\u4e2a\u4ec0\u4e48\u6837\u5b50\u7684\uff1a"),(0,s.kt)("p",null,"/etc/statetab"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# A list of paths which should be bind-mounted from a\n# partition dedicated to persistent data\n#\n# See $STATE_LABEL in /etc/sysconfig/readonly-root\n#\n# Examples:\n#\n# /root\n# /etc/ssh\n# /var/spool/mail\n")),(0,s.kt)("p",null,"\u987a\u85e4\u6478\u74dc\u6211\u4eec\u53d1\u73b0\u548c/etc/sysconfig/readonly-root\u8fd9\u4e2a\u6587\u4ef6\u6709\u5173\uff0c\u4ece\u6587\u4ef6\u540d\u4e0a\u5373\u53ef\u5f97\u77e5\u548c\u53ea\u8bfb\u7684\u5173\u8054\uff1a"),(0,s.kt)("p",null,"/etc/sysconfig/readonly-root"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Set to 'yes' to mount the system filesystems read-only.\nREADONLY=yes\n# Set to 'yes' to mount various temporary state as either tmpfs\n# or on the block device labelled RW_LABEL. Implied by READONLY\nTEMPORARY_STATE=no\n# Place to put a tmpfs for temporary scratch writable space\nRW_MOUNT=/var/lib/stateless/writable\n# Label on local filesystem which can be used for temporary scratch space\nRW_LABEL=stateless-rw\n# Options to use for temporary mount\nRW_OPTIONS=\n# Label for partition with persistent data\nSTATE_LABEL=CONFIG \n# Where to mount to the persistent data\nSTATE_MOUNT=/config\n# Options to use for peristent mount\nSTATE_OPTIONS=\n# NFS server to use for persistent data?\nCLIENTSTATE=\n")),(0,s.kt)("p",null,"\u5c31\u662f\u8fd9\u4e2a\u4e86\uff0c\u9996\u5148\u5b83\u628aREADONLY\u8bbe\u7f6e\u4e3ayes\uff0c\u7136\u540e\u4f7f\u7528\u8bbe\u5907\u7684LABEL\u53f7\u6765\u6307\u5b9a\u9700\u8981\u6302\u8f7d\u4e3a\u8bfb\u5199\u7684\u8bbe\u5907\uff0c\u7136\u540e\u5c31\u662f\u6302\u8f7d\u7684\u4f4d\u7f6eSTATE_MOUNT"),(0,s.kt)("p",null,"\u540c\u65f6\u8fd8\u6709/etc/rwtab\u4ee5\u53carwtab.d\u76ee\u5f55\u4e0e\u8fd9\u4e2a\u6709\u5173\uff1a\n/etc/rwtab"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"#files /etc/adjtime\n#files /etc/ntp.conf\n#files /etc/resolv.conf\n#files /etc/lvm/.cache\n#files /etc/lvm/archive\n#files /etc/lvm/backup\n")),(0,s.kt)("p",null,"\u4e0a\u9762\u8fd9\u51e0\u9879\u5728ovirt-node\u91cc\u662f\u88ab\u6ce8\u91ca\u6389\u4e86\u7684\uff0c\u5b83\u4f7f\u7528\u81ea\u5df1\u7684\u65b9\u5f0f\u6765\u53d8\u66f4\u8fd9\u51e0\u4e2a\u6587\u4ef6"),(0,s.kt)("p",null,"/etc/rwtab.d/ovirt"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"files /etc\ndirs /var/lib/multipath\ndirs /var/lib/net-snmp\ndirs /var/lib/dnsmasq\nfiles /root/.ssh\ndirs /root/.uml\ndirs /root/.virt-manager\ndirs /home/admin/.virt-manager\nfiles /var/cache/libvirt\nfiles /var/empty/sshd/etc/localtime\nfiles /var/lib/libvirt\nfiles /var/lib/multipath\nfiles /var/cache/multipathd\nempty /mnt\nempty /live\nfiles /boot\nempty /boot-kdump\nempty /cgroup\n")),(0,s.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e9b\u662fovirt\u81ea\u5b9a\u4e49\u7684\u3002\u6700\u540e\u5c31\u662f\u770b/config\u4e0b\u9762\u7684files\u6587\u4ef6:"),(0,s.kt)("p",null,"/config/files"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/etc/fstab\n/etc/shadow\n/etc/default/ovirt\n/etc/ssh/ssh_host_key\n/etc/ssh/ssh_host_key.pub\n/etc/ssh/ssh_host_dsa_key\n/etc/ssh/ssh_host_dsa_key.pub\n/etc/ssh/ssh_host_rsa_key\n/etc/ssh/ssh_host_rsa_key.pub\n/etc/iscsi/initiatorname.iscsi\n/etc/sysconfig/network-scripts/ifcfg-eth0\n/etc/sysconfig/network-scripts/ifcfg-breth0\n/etc/sysconfig/network-scripts/ifcfg-eth1\n/etc/ntp.conf\n/etc/sysconfig/network\n/etc/hosts\n/etc/shadow\n/etc/ssh/sshd_config\n")),(0,s.kt)("p",null,"\u6b64\u5217\u8868\u5185\u7684\u6587\u4ef6\u5c31\u662frc.sysinit\u9700\u8981\u8bfb\u53d6\u7684\uff0c\u628a\u4ed6\u4eec\u4e00\u4e2a\u4e2a\u6302\u8f7d\u4e3a\u8bfb\u5199\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u53ef\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u767d\u540d\u5355\uff0c\u4e8e\u662f\u6211\u5c31\u52a8\u624b\u4fee\u6539\u4e86\u7cfb\u7edf\u91cc\u7684\u8fd9\u4e9b\u6587\u4ef6\uff0c\u91cd\u542f\uff0c\u4e00\u5207\u770b\u4f3c\u6b63\u5e38\uff0c\u4f46\u662f\u5f53\u5173\u673a\u7684\u65f6\u5019\u65b0\u7684\u95ee\u9898\u51fa\u73b0\u4e86\uff0c\u5173\u673a\u7684\u65f6\u5019\u63d0\u793a/etc\u65e0\u6cd5\u88ab\u5378\u8f7d\uff0c\u4e3a\u4ec0\u4e48\u5462\uff0c\u7136\u540e\u5c31\u627e\u5230\u4e0e\u5173\u673a\u6709\u5173\u7684\u811a\u672c\uff1a"),(0,s.kt)("p",null,"diff /etc/rc.d/init.d/halt.orig /etc/rc.d/init.d/halt"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"141c141\n< LANG=C __umount_loop '$2 ~ /^\\/$|^\\/proc|^\\/dev/{next}\n---\n> LANG=C __umount_loop '$2 ~ /^\\/$|^\\/proc|^\\/etc|^\\/dev/{next}\n")),(0,s.kt)("p",null,"\u539f\u6765\u5728halt\u6587\u4ef6\u91cc\u4e5f\u505a\u4e86\u201c\u624b\u811a\u201d\uff0c\u628a/etc\u7ed9\u52a0\u4e86\u8fdb\u53bb\uff0c\u91cd\u542f\uff0c\u4fee\u6539\uff0c\u5173\u673a\uff0c\u4e00\u5207\u6b63\u5e38\u3002"),(0,s.kt)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,s.kt)("p",null,"\u4e0b\u9762\u662f\u53ef\u4ee5\u53c2\u8003\u7684\u6587\u6863"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://fedoraproject.org/wiki/StatelessLinux/PrepareImage"},"http://fedoraproject.org/wiki/StatelessLinux/PrepareImage")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://fedoraproject.org/wiki/StatelessLinux/HOWTO"},"http://fedoraproject.org/wiki/StatelessLinux/HOWTO")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://blog.csdn.net/jcwkyl/article/details/6120547"},"http://blog.csdn.net/jcwkyl/article/details/6120547")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://plone.lucidsolutions.co.nz/linux/io/using-centos-5.2-stateless-linux-support-on-a-flash-based-root-filesystem"},"http://plone.lucidsolutions.co.nz/linux/io/using-centos-5.2-stateless-linux-support-on-a-flash-based-root-filesystem")),(0,s.kt)("li",{parentName:"ul"},"FYI: ",(0,s.kt)("a",{parentName:"li",href:"http://ovirt.org/wiki/File:Ovirt-node.pdf"},"http://ovirt.org/wiki/File:Ovirt-node.pdf")," (page 26)")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6757],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||p;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const p={layout:"post",title:"OpenVPN+MySQL\u73af\u5883\u642d\u5efa\u8bb0\u5f55",description:"",categories:["system"],tags:["openvpn","freeradius"]},l=void 0,o={permalink:"/notes/blog/2011/09/02/openvpn-mysql-setup",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2011-09-02-openvpn-mysql-setup.md",source:"@site/blog/2011-09-02-openvpn-mysql-setup.md",title:"OpenVPN+MySQL\u73af\u5883\u642d\u5efa\u8bb0\u5f55",description:"",date:"2011-09-02T00:00:00.000Z",formattedDate:"2011\u5e749\u67082\u65e5",tags:[{label:"openvpn",permalink:"/notes/blog/tags/openvpn"},{label:"freeradius",permalink:"/notes/blog/tags/freeradius"}],readingTime:8.075,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"OpenVPN+MySQL\u73af\u5883\u642d\u5efa\u8bb0\u5f55",description:"",categories:["system"],tags:["openvpn","freeradius"]},prevItem:{title:"\u5982\u4f55\u8ba9ThinkPad\u81ea\u5b9a\u4e49\u98ce\u6247\u8f6c\u901f",permalink:"/notes/blog/2012/05/21/thinkpad-fan-speed-control"},nextItem:{title:"\u4f7f\u7528wpa-supplicant\u914d\u7f6e\u65e0\u7ebf\u7f51\u7edc",permalink:"/notes/blog/2011/05/05/centos-wpa-supplicant-wireless"}},s={authorsImageUrls:[]},i=[],c={toc:i};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u8bb0\u5f55\u4e86\u5728centos5.5\u7cfb\u7edf\u4e2d\u642d\u5efaopenvpn+mysql+freeradius\u7684\u8fc7\u7a0b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,a.kt)("p",null,"\u7cfb\u7edf\u73af\u5883\uff1acentos5.5"),(0,a.kt)("p",null,"Eth0\uff1a192.168.0.2"),(0,a.kt)("p",null,"\u6821\u51c6\u7cfb\u7edf\u65f6\u95f4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ntpdate ntp.api.bz\nhwclock -w\n")),(0,a.kt)("p",null,"\u6240\u9700\u8f6f\u4ef6\u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum install openssl openssl-devel gcc gcc-c++ mysql mysql-devel mysql-server php php-gd php-devel php-pear php-pear-DB php-mysql php-pdo php-cli php-mbstring php-mcrypt httpd\n")),(0,a.kt)("p",null,"\u4e0b\u8f7d\u6e90\u7801\u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget http://www.oberhumer.com/opensource/lzo/download/lzo-2.05.tar.gz\nwget http://swupdate.openvpn.net/community/releases/openvpn-2.2.0.tar.gz\nwget ftp://ftp.freeradius.org/pub/freeradius/freeradius-server-2.1.10.tar.gz\nwget http://sourceforge.net/projects/daloradius/files/daloradius/daloradius0.9-9/daloradius-0.9-9-rc1.tar.gz/download\nwget http://www.nongnu.org/radiusplugin/radiusplugin_v2.1a_beta1.tar.gz\nwget http://sourceforge.net/projects/phpmyadmin/files%2FphpMyAdmin%2F2.11.11.3%2FphpMyAdmin-2.11.11.3-all-languages.tar.bz2/download\n")),(0,a.kt)("p",null,"1.\u5b89\u88c5lzo-2.0.5  \u4f7fopenvpn\u652f\u6301\u538b\u7f29\u529f\u80fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar xf lzo-2.05.tar.gz &&cd lzo-*\n./configure\nmake && make install\ncd ..\n")),(0,a.kt)("p",null,"2.\u5b89\u88c5openvpn\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar xf openvpn-2.2.0.tar.gz &&cd openvpn-*\n./configure\nmake && make install\n")),(0,a.kt)("p",null,"\u590d\u5236\u8bc1\u4e66\u751f\u6210\u6240\u9700\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir /etc/openvpn && cp easy-rsa /etc/openvpn -r\n")),(0,a.kt)("p",null,"3.\u5b89\u88c5radiusplugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar xf radiusplugin_v2.1a_beta1.tar.gz && cd radiusplugin_*\nmake #\u5c06\u4f1a\u751f\u6210radiusplugin.so \u5c06\u5176cp\u5230/etc/openvpn\u76ee\u5f55\u4e0b\ncp radiusplugin.cnf /etc/openvpn/conf/\n")),(0,a.kt)("p",null,"4.\u751f\u6210\u670d\u52a1\u7aef\u6240\u9700\u8bc1\u4e66"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /etc/openvpn/easy-rsa/2.0/\nvi vars   #\u7f16\u8f91\u53d8\u91cf\n.  vars  #source\u547d\u4ee4\u4f7f\u53d8\u91cf\u751f\u6548\n./clean-all\n./build-ca  #ca.crt ---Root CA\u8bc1\u4e66\uff0c\u7528\u4e8e\u7b7e\u53d1Server\u548cClient\u8bc1\u4e66\n./build-key-server server #server.crt server.key-\u521b\u5efa\u5e76\u7b7e\u53d1VPN Server\u4f7f\u7528\u7684CA\n./build-key client1 #client1.crt client1.key #\u5982\u679c\u5ba2\u6237\u7aef\u9700\u8981\u4f7f\u7528\u8bc1\u4e66\u65b9\u5f0f\u8ba4\u8bc1\u5219\u9700\u8981\u8fd9\u4e2a\u4e1c\u4e1c\uff0c\u521b\u5efa\u5ba2\u6237\u7aef\u8bc1\u4e66\uff0c\u4e00\u4e2a\u5ba2\u6237\u7aef\u4e00\u4e2a\u8bc1\u4e66\n./build-key client2\n./build-dh  #dh1024.pem--\u751f\u6210Diffie-Hellman\u6587\u4ef6 ,TLS\u7528\u5230\nopenvpn --genkey --secret keys/ta.key #\u751f\u6210tls auth key\n\n")),(0,a.kt)("p",null,"\u590d\u5236\u8bc1\u4e66\u6587\u4ef6\u5230\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir /etc/openvpn/conf && cd keys\ncp ca.crt server.crt server.key dh1024.pem ta.key /etc/openvpn/conf/\ntar czf clientkey.tgz ca.crt client1.crt client1.key # \u5982\u679c\u5ba2\u6237\u7aef\u4f7f\u7528\u8bc1\u4e66\u65b9\u5f0f\u8ba4\u8bc1\u5219\u8fd9\u91cc\u9700\u8981\u8fd9\u4e2a\u4e1c\u4e1c\uff0c\u672c\u6587\u4ecb\u7ecd\u7684radius\u65b9\u5f0f\u4e0d\u9700\u8981\u3002 \n")),(0,a.kt)("p",null,"5.\u7f16\u8f91openvpn\u670d\u52a1\u7aef\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"vi /etc/openvpn/conf/server.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'port 1194\nproto udp\ndev tap   #TAP\u8bbe\u5907\u662f\u4e00\u5757\u865a\u62df\u7684\u4ee5\u592a\u7f51\u5361\uff0cTUN\u8bbe\u5907\u662f\u4e00\u4e2a\u865a\u62df\u7684\u70b9\u5230\u70b9IP\u94fe\u63a5\u3002 \nca /etc/openvpn/conf/ca.crt\ncert /etc/openvpn/conf/server.crt\nkey /etc/openvpn/conf/server.key  # This file should be kept secret\ndh /etc/openvpn/conf/dh1024.pem\nserver 10.8.0.0 255.255.255.0\nifconfig-pool-persist ipp.txt\npush "redirect-gateway def1 bypass-dhcp"\npush "dhcp-option DNS 10.8.0.1"\npush "dhcp-option DNS 208.67.222.222"\npush "dhcp-option DNS 208.67.220.220"\nclient-to-client\nkeepalive 10 120\n\ntls-auth /etc/openvpn/conf/ta.key 0\n\ncomp-lzo\nuser nobody\ngroup nobody\npersist-key\npersist-tun\nstatus openvpn-status.log\nverb 3\n\nclient-to-client #\u5982\u679c\u8ba9Client\u4e4b\u95f4\u53ef\u4ee5\u76f8\u4e92\u770b\u89c1\uff0c\u53bb\u6389\u672c\u884c\u7684\u6ce8\u91ca\u6389\uff0c\u5426\u5219Client\u4e4b\u95f4\u65e0\u6cd5\u76f8\u4e92\u8bbf\u95ee\n\n;duplicate-cn  #\u662f\u5426\u5141\u8bb8\u4e00\u4e2aUser\u540c\u65f6\u767b\u5f55\u591a\u6b21\uff0c\u53bb\u6389\u672c\u884c\u6ce8\u91ca\u540e\u53ef\u4ee5\u4f7f\u7528\u540c\u4e00\u4e2a\u7528\u6237\u540d\u767b\u5f55\u591a\u6b21\n\nclient-cert-not-required #\u5ba2\u6237\u7aef\u4e0d\u4f7f\u7528CA\u8bc1\u4e66\u9a8c\u8bc1\n\nusername-as-common-name #\u4f7f\u7528\u5ba2\u6237\u63d0\u4f9b\u7684UserName\u4f5c\u4e3aCommon Name\n\n;max-clients 1000  #\u6700\u5927\u8fde\u63a5\u6570\n\nplugin /etc/openvpn/radiusplugin.so /etc/openvpn/conf/radiusplugin.cnf #radius\u63d2\u4ef6\n\nscript-security 3\n')),(0,a.kt)("p",null,"\u7f16\u8f91radius\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"vi /etc/openvpn/conf/radiusplugin.cnf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAS-Identifier=OpenVpn\nService-Type=5\nFramed-Protocol=1\nNAS-Port-Type=5\nNAS-IP-Address=127.0.0.1\nOpenVPNConfig=/etc/openvpn/conf/server.conf\nsubnet=255.255.255.0\noverwriteccfiles=true\nnonfatalaccounting=false\nserver\n{\n        # The UDP port for radius accounting.\n        acctport=1813\n        # The UDP port for radius authentication.\n        authport=1812\n        # The name or ip address of the radius server.\n        name=127.0.0.1\n        # How many times should the plugin send the if there is no response?\n        retry=1\n        # How long should the plugin wait for a response?\n        wait=1\n        # The shared secret.\n        sharedsecret=testpw\n}\n")),(0,a.kt)("p",null,"\u542f\u52a8openvpn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/usr/local/sbin/openvpn  --cd /etc/openvpn \\\n --config /etc/openvpn/conf/server.conf &\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u5185\u6838\u8def\u7531\u8f6c\u53d1\u548ciptables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sysctl -w net.ipv4.ip_forward=1\niptables -t nat -A POSTROUTING -j MASQUERADE\niptables -A INPUT -p udp  --dport 1194 -j ACCEPT\n")),(0,a.kt)("p",null,"6.\u5b89\u88c5freeradius"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar  xf  freeradius-server-2.1.10.tar.bz2\ncd  freeradius-*\n./configure\nmake && make install\nvi /etc/ld.so.conf\n#\u52a0\u5165:\n/usr/local/lib\n#\u7136\u540e\nldconfig\n")),(0,a.kt)("p",null,"\u542f\u52a8mysql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/etc/init.d/mysqld start\n#\u521d\u59cb\u5316mysql\nmysql_secure_installation\nmysql -uroot -p\ncreate database radius;\ncd /usr/local/etc/raddb/sql/mysql\nmysql -uroot -p radius < schema.sql\nmysql -uroot -p < admin.sql\n")),(0,a.kt)("p",null,"\u914d\u7f6eradiusd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /usr/local/etc/raddb\nvi radiusd.conf\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"prefix = /usr/local\nexec_prefix = ${prefix}\nsysconfdir = ${prefix}/etc\nlocalstatedir = ${prefix}/var\nsbindir = ${exec_prefix}/sbin\nlogdir = ${localstatedir}/log/radius\nraddbdir = ${sysconfdir}/raddb\nradacctdir = ${logdir}/radacct\nname = radiusd\nconfdir = ${raddbdir}\nrun_dir = ${localstatedir}/run/${name}\ndb_dir = ${raddbdir}\nlibdir = ${exec_prefix}/lib\npidfile = ${run_dir}/${name}.pid\nmax_request_time = 30\ncleanup_delay = 5\nmax_requests = 1024\nlisten {\n        type = auth\n        ipaddr = *\n        port = 0\n}\nlisten {\n        ipaddr = *\n        port = 0\n        type = acct\n}\nhostname_lookups = no\nallow_core_dumps = no\nregular_expressions     = yes\nextended_expressions    = yes\nlog {\n        destination = files\n        file = ${logdir}/radius.log\n        syslog_facility = daemon\n        stripped_names = no\n        auth = no\n        auth_badpass = no\n        auth_goodpass = no\n}\ncheckrad = ${sbindir}/checkrad\nsecurity {\n        max_attributes = 200\n        reject_delay = 1\n        status_server = yes\n}\nproxy_requests  = yes\n$INCLUDE proxy.conf\n$INCLUDE clients.conf\nthread pool {\n        start_servers = 5\n        max_servers = 32\n        min_spare_servers = 3\n        max_spare_servers = 10\n        max_requests_per_server = 0\n}\nmodules {\n        $INCLUDE ${confdir}/modules/\n        $INCLUDE eap.conf\n        $INCLUDE sql.conf\n        $INCLUDE sql/mysql/counter.conf\n        $INCLUDE sqlippool.conf\n}\ninstantiate {\n        exec\n        expr\n        expiration\n        logintime\n}\n$INCLUDE policy.conf\n$INCLUDE sites-enabled/\n")),(0,a.kt)("p",null,"vi clients.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"client localhost {\n        ipaddr = 127.0.0.1\n        secret          = testpw\n        require_message_authenticator = no\n}\nclient 192.168.0.2 {\n        ipaddr = 192.168.0.2\n        secret          = testpw\n        require_message_authenticator = no\n}\n")),(0,a.kt)("p",null,"vi sites-enabled/default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"authorize {\n        preprocess\n        chap\n        mschap\n        digest\n        suffix\n        eap {\n                ok = return\n        }\n        sql\n        expiration\n        logintime\n        pap\n}\nauthenticate {\n        Auth-Type PAP {\n                pap\n        }\n        Auth-Type CHAP {\n                chap\n        }\n        Auth-Type MS-CHAP {\n                mschap\n        }\n        digest\n        unix\n        eap\n}\npreacct {\n        preprocess\n        acct_unique\n        suffix\n        files\n}\naccounting {\n        detail\n        radutmp\n        sql\n        exec\n        attr_filter.accounting_response\n}\nsession {\n        radutmp\n}\npost-auth {\n        exec\n        Post-Auth-Type REJECT {\n                attr_filter.access_reject\n        }\n}\npost-proxy {\n        eap\n}\n")),(0,a.kt)("p",null,"vi  sql.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'sql {\n        database = "mysql"\n        driver = "rlm_sql_${database}"\n        server = "localhost"\n        port = 3306\n        login = "radius"\n        password = "radpass"\n        radius_db = "radius"\n        acct_table1 = "radacct"\n        acct_table2 = "radacct"\n        postauth_table = "radpostauth"\n        authcheck_table = "radcheck"\n        authreply_table = "radreply"\n        groupcheck_table = "radgroupcheck"\n        groupreply_table = "radgroupreply"\n        usergroup_table = "radusergroup"\n        deletestalesessions = yes\n        sqltrace = no\n        sqltracefile = ${logdir}/sqltrace.sql\n        num_sql_socks = 5\n        connect_failure_retry_delay = 60\n        lifetime = 0\n        max_queries = 0\n        readclients = yes\n        nas_table = "nas"\n        $INCLUDE sql/${database}/dialup.conf\n}\n')),(0,a.kt)("p",null,"\u542f\u52a8radius\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"radiusd  &")),(0,a.kt)("p",null,"\u5b89\u88c5phpmyadmin\u7ba1\u7406mysql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar xf phpMyAdmin-2.11.11.3-all-languages.tar.gz -C /var/www/\nmv /var/www/phpMyadmin* /var/www/phpmyadmin && cd /var/www/phpmyadmin\ncp config.sample.inc.php config.inc.php\nvi config.inc.php \u4fee\u6539\u4ee5\u4e0b\n$cfg['blowfish_secret'] = 'ADKFdkfjdl959435dfkds^%&';\n")),(0,a.kt)("p",null,"\u5b89\u88c5daloradius\u7ba1\u7406freeradius"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar xf daloradius-0.9-9-rc1.tar.gz -C /var/www/\ncd /var/www\nmv daloradius* daloradius\ncd /var/www/daloradius/contrib/db\nMysql -uroot -p radius < mysql-daloradius.sql\nMysql -uroot -p radius < fr2-mysql-daloradius-and-freeradius.sql\nchown apache:apache /var/www/daloradius -R\nchmod 644 /var/www/daloradius/library/daloradius.conf .php#\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u7ed9\u4e88\u5199\u6743\u9650\n")),(0,a.kt)("p",null,"vi /var/www/daloradius/library/daloradius.conf.php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$configValues['CONFIG_DB_ENGINE'] = 'mysql';\n$configValues['CONFIG_DB_HOST'] = 'localhost';\n$configValues['CONFIG_DB_USER'] = 'radiusadmin';\n$configValues['CONFIG_DB_PASS'] = 'radiusadmin';\n$configValues['CONFIG_DB_NAME'] = 'radius';\n")),(0,a.kt)("p",null,"\u6b64\u5904\u7684radiusadmin\u8d26\u53f7\u662f\u5728phpmyadmin\u91cc\u521b\u5efa\u7684\u5e76\u7ed9\u4e88radius\u5e93\u76f8\u5e94\u64cd\u4f5c\u6743\u9650\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"touch /tmp/daloradius.log\nchown apache.apache /tmp/daloradius.log\n")),(0,a.kt)("p",null,"vi /etc/httpd/conf/httpd.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Alias /radius "/var/www/daloradius/"\n<Directory /var/www/daloradius/>\n      Options None\n      order deny,allow\n      deny from all\n      allow from 127.0.0.1\n      allow from 192.168.0.0/24\n</Directory>\nAlias /phpmyadmin "/var/www/phpmyadmin/"\n<Directory /var/www/phpmyadmin/>\n      Options None\n      order deny,allow\n      deny from all\n      allow from 127.0.0.1\n      allow from 192.168.0.0/24\n   </Directory>\n')),(0,a.kt)("p",null,"\u542f\u52a8apache  ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/init.d/httpd restart")),(0,a.kt)("p",null,"\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://192.168.0.2/radius"},"http://192.168.0.2/radius")),(0,a.kt)("p",null,"username: administrator, password: radius"),(0,a.kt)("p",null,"\u5728\u7528\u6237\u7ba1\u7406\u91cc\u9762\u6dfb\u52a0\u4e00\u4e2a\u8d26\u53f7\uff0c\u5373\u53ef\u7528\u8fd9\u4e2a\u8d26\u53f7\u8fdb\u884c\u8ba4\u8bc1\u767b\u9646\u3002"),(0,a.kt)("p",null,"windows\u5ba2\u6237\u7aef\u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://swupdate.openvpn.net/community/releases/openvpn-2.2.0-install.exe"},"http://swupdate.openvpn.net/community/releases/openvpn-2.2.0-install.exe")),(0,a.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6X:\\Program Files\\OpenVPN\\config\\client.ovpn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"client\ndev tap\nproto udp\nremote 192.168.0.2 1194\n;remote-random\nresolv-retry infinite\nnobind\npersist-key\npersist-tun\nca ca.crt\nauth-user-pass\nns-cert-type server\n;tls-auth ta.key 0\ncomp-lzo\nverb 3\n")),(0,a.kt)("p",null,"\u540c\u65f6\u5c06\u670d\u52a1\u5668\u7aef\u7684ca.crt\u62f7\u8d1d\u5230X:\\Program Files\\OpenVPN\\config\\  \u76ee\u5f55\u4e0b\u3002\nwin7\u9700\u8981\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884cOpenVPN GUI \uff0c\u4f7f\u7528daloradius\u91cc\u6dfb\u52a0\u7684\u8d26\u53f7\u5bc6\u7801\u767b\u9646\u3002"),(0,a.kt)("p",null,"\u6dfb\u52a0ipv6\u652f\u6301\uff1a"),(0,a.kt)("p",null,"\u8ba9openvpn\u5ba2\u6237\u7aef\u652f\u6301Ipv6\u7f51\u7edc\uff0c\u9700\u8981\u5c06openvpn\u4f7f\u7528\u7684\u865a\u62df\u7f51\u5361\u4e0e\u5177\u6709ipv6\u5730\u5740\u7684\u7269\u7406\u7f51\u5361\u8fdb\u884c\u6865\u63a5\uff0c\u8ba9openvpn\u76d1\u542c\u5728\u6b64\u6865\u63a5\u7684\u865a\u62df\u7f51\u5361\u4e0a\uff0c\u7136\u540e\u901a\u8fc7\u81ea\u52a8DHCP\u5b9e\u73b0\u4e3a\u5ba2\u6237\u7aef\u5206\u914dipv6\u5730\u5740\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u914d\u7f6e\u7f51\u5361\u6865\u63a5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum  install bridge-utils\n")),(0,a.kt)("p",null,"\u7f16\u8f91bridge-start\u542f\u52a8\u811a\u672c\uff0c\u6839\u636e\u7cfb\u7edf\u7f51\u7edc\u8bbe\u5907\u5bf9\u5e94\u7f16\u8f91\u3002"),(0,a.kt)("p",null,"\u4e0b\u8f7dradvd\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://www.litech.org/radvd/dist/radvd-1.8.tar.gz"},"http://www.litech.org/radvd/dist/radvd-1.8.tar.gz")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar  xf radvd-* && cd radvd-*\n./configure --sysconfdir=/etc\nmake && make install\n")),(0,a.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 vi /etc/radvd.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"interface br0\n{\n    AdvSendAdvert on;\n    MinRtrAdvInterval 3;\n    MaxRtrAdvInterval 10;\n    AdvDefaultPreference low;\n    prefix 2001:250:1002:40::/64 //\u5ba2\u6237\u7aefIPv6\u524d\u7f00\n    {\n        AdvOnLink on;\n        AdvAutonomous on;\n        AdvRouterAddr on;\n    };\n};\n")),(0,a.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://howtoforge.org/authentication-authorization-and-accounting-with-freeradius-and-mysql-backend-and-webbased-management-with-daloradius"},"Authentication, Authorization & Accounting with FreeRadius & MySQL backend & web based Management with Daloradius")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,g=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={layout:"post",title:"pre-commit basic usage",authors:"itxx00",description:"\u63cf\u8ff0",categories:["shell"],tags:["bash"]},a=void 0,c={permalink:"/notes/blog/2022/04/20/pre-commit-basic",editUrl:"https://github.com/itxx00/notes/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-20-pre-commit-basic.md",source:"@site/blog/2022-04-20-pre-commit-basic.md",title:"pre-commit basic usage",description:"\u63cf\u8ff0",date:"2022-04-20T00:00:00.000Z",formattedDate:"April 20, 2022",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"}],readingTime:.795,hasTruncateMarker:!1,authors:[{name:"\u8001\u53f8\u673a",title:"Maintainer of this proj",url:"https://github.com/itxx00",imageURL:"https://github.com/itxx00.png",key:"itxx00"}],frontMatter:{layout:"post",title:"pre-commit basic usage",authors:"itxx00",description:"\u63cf\u8ff0",categories:["shell"],tags:["bash"]},nextItem:{title:"\u6807\u9898",permalink:"/notes/blog/2022/04/20/pxe-cobbler-install"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,o.kt)("p",null,"install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install pre-commit\n\n")),(0,o.kt)("p",null,"init"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://xxx/xxx.git\ncd xxx\npre-commit install\n\npre-commit sample-config >.pre-commit-config.yaml\n")),(0,o.kt)("p",null,"test"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pre-commit run --all-files\npre-commit run --files xxx.py\n\n")),(0,o.kt)("p",null,"sample conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n# See https://pre-commit.com for more information\n# See https://pre-commit.com/hooks.html for more hooks\nrepos:\n  - repo: https://github.com/pre-commit/pre-commit-hooks\n    rev: v4.1.0\n    hooks:\n      - id: trailing-whitespace\n      - id: end-of-file-fixer\n      - id: check-yaml\n      - id: check-added-large-files\n\n  - repo: https://github.com/talos-systems/conform\n    rev: v0.1.0-alpha.25\n    hooks:\n      - id: conform\n        stages:\n          - commit-msg\n\n#  - repo: https://github.com/koalaman/shellcheck-precommit\n#    rev: v0.7.2\n#    hooks:\n#      - id: shellcheck\n#        args:\n#          - --exclude=SC2009,SC2086\n\n  - repo: https://github.com/5xops/mirrors-shellcheck\n    rev: v1.0\n    hooks:\n      - id: shellcheck\n\n\n#  - repo: https://github.com/pre-commit/mirrors-mypy\n#    rev: v0.770\n#    hooks:\n#      - id: mypy\n#        language: python_venv\n#        exclude: ^(docs/|example-plugin/|tests/fixtures)\n\n  - repo: https://gitlab.com/pycqa/flake8.git\n    rev: 3.9.2\n    hooks:\n      - id: flake8\n        exclude: $(.tox/|.git/|__pycache__/|build/|dist/|.cache|.eggs/)\n        args:\n          - --ignore=E501,W503,E722,W605\n\n  - repo: https://github.com/PyCQA/pylint\n    rev: v2.12.2\n    hooks:\n      - id: pylint\n        language: python_venv\n        args:\n          - --disable=C0114,C0115,C0116,C0415,E0401,W1401,R0912,R0914,W0212\n          - --max-line-length=120\n")))}m.isMDXComponent=!0}}]);
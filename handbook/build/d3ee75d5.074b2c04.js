(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),c=(n(0),n(132)),o={id:"dbcontext-delete",title:"8.8 \u5220\u9664\u64cd\u4f5c",sidebar_label:"8.8 \u5220\u9664\u64cd\u4f5c"},i={unversionedId:"dbcontext-delete",id:"dbcontext-delete",isDocsHomePage:!1,title:"8.8 \u5220\u9664\u64cd\u4f5c",description:"8.8.1 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",source:"@site/docs\\dbcontext-delete.mdx",slug:"/dbcontext-delete",permalink:"/fur/docs/dbcontext-delete",editUrl:"https://gitee.com/monksoul/Fur/tree/rc1/handbook/docs/dbcontext-delete.mdx",version:"current",sidebar_label:"8.8 \u5220\u9664\u64cd\u4f5c",sidebar:"docs",previous:{title:"8.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",permalink:"/fur/docs/dbcontext-add-or-update"},next:{title:"8.9 \u67e5\u8be2\u64cd\u4f5c",permalink:"/fur/docs/dbcontext-query"}},s=[{value:"8.8.1 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"881-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"8.8.2 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"882-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"8.8.3 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"883-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"8.8.4 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"884-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"8.8.5 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"885-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"8.8.6 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"886-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"8.8.8 \u5047\u5220\u9664/\u8f6f\u5220\u9664",id:"888-\u5047\u5220\u9664\u8f6f\u5220\u9664",children:[]},{value:"8.8.9 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"889-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"881-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"8.8.1 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Delete(user);\n\n// \u793a\u4f8b\u4e8c\nuser.Delete();\n\n// \u793a\u4f8b\u4e09\nrepository.ChangeEntityState(user, EntityState.Deleted);\n\n// \u793a\u4f8b\u56db\nrepository.Entities.Remove(user);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteAsync();\n")),Object(c.b)("h2",{id:"882-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"8.8.2 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteNow(user);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteNow();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteNowAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteNowAsync();\n")),Object(c.b)("h2",{id:"883-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"8.8.3 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Delete(1);\n\n// \u793a\u4f8b\u4e8c\nuser.Delete(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteAsync(1);\n")),Object(c.b)("h2",{id:"884-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"8.8.4 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteNow(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteNow(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteNowAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteNowAsync(1);\n")),Object(c.b)("h2",{id:"885-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"8.8.5 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteExists(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteExists(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteExistsAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteExistsAsync(1);\n")),Object(c.b)("h2",{id:"886-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"8.8.6 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteExistsNow(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteExistsNow(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteExistsNowAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteExistsNowAsync(1);\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u77e5\u8bc6")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u6240\u6709\u5e26 ",Object(c.b)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u8868\u793a\u7acb\u5373\u63d0\u4ea4\u5230\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f\u7acb\u5373\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216 ",Object(c.b)("inlineCode",{parentName:"p"},"SaveChangesAsync"),"\u3002"))),Object(c.b)("h2",{id:"888-\u5047\u5220\u9664\u8f6f\u5220\u9664"},"8.8.8 \u5047\u5220\u9664/\u8f6f\u5220\u9664"),Object(c.b)("p",null,"\u53ea\u9700\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"repository.UpdateInclude(user, u=>u.IsDeleted);")," \u5373\u53ef\u3002"),Object(c.b)("h2",{id:"889-\u53cd\u9988\u4e0e\u5efa\u8bae"},"8.8.9 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u7ed9 Fur \u63d0 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/issues/new?issue"}),"Issue"),"\u3002"))))}b.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||c;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
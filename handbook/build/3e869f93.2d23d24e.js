(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,u=s["".concat(r,".").concat(m)]||s[m]||d[m]||i;return n?o.a.createElement(u,b(b({ref:t},p),{},{components:n})):o.a.createElement(u,b({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),i=(n(0),n(132)),r={id:"dbcontext",title:"8.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",sidebar_label:"8.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},b={unversionedId:"dbcontext",id:"dbcontext",isDocsHomePage:!1,title:"8.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",description:"8.1.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",source:"@site/docs\\dbcontext.mdx",slug:"/dbcontext",permalink:"/fur/docs/dbcontext",editUrl:"https://gitee.com/monksoul/Fur/tree/rc1/handbook/docs/dbcontext.mdx",version:"current",sidebar_label:"8.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",sidebar:"docs",previous:{title:"7. \u6570\u636e\u6821\u9a8c",permalink:"/fur/docs/data-validation"},next:{title:"8.2 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668",permalink:"/fur/docs/dbcontext-locator"}},c=[{value:"8.1.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"811-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"8.1.2 <code>AppDbContext</code>",id:"812-appdbcontext",children:[]},{value:"8.1.3 <code>AppDbContext</code> \u548c <code>DbContext</code> \u533a\u522b",id:"813-appdbcontext-\u548c-dbcontext-\u533a\u522b",children:[]},{value:"8.1.4 \u5982\u4f55\u5b9a\u4e49\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"814-\u5982\u4f55\u5b9a\u4e49\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[{value:"8.1.4.1 \u521b\u5efa\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"8141-\u521b\u5efa\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"8.1.4.2 \u521b\u5efa\u5176\u4ed6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"8142-\u521b\u5efa\u5176\u4ed6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]}]},{value:"8.1.5 \u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32",id:"815-\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32",children:[{value:"8.1.5.1 <code>Startup</code> \u65b9\u5f0f\u914d\u7f6e",id:"8151-startup-\u65b9\u5f0f\u914d\u7f6e",children:[]},{value:"8.1.5.2 <code>[DbContext]</code> \u65b9\u5f0f\u914d\u7f6e",id:"8152-dbcontext-\u65b9\u5f0f\u914d\u7f6e",children:[]},{value:"8.1.5.3 <code>OnConfiguring</code> \u65b9\u5f0f\u914d\u7f6e",id:"8153-onconfiguring-\u65b9\u5f0f\u914d\u7f6e",children:[]}]},{value:"8.1.6 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4e49\u4f4d\u7f6e",id:"816-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4e49\u4f4d\u7f6e",children:[]},{value:"8.1.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"817-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"811-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"8.1.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(i.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u662f\u8d1f\u8d23\u548c\u6570\u636e\u5e93\u4ea4\u4e92\u7684\u5bf9\u8c61\uff0c\u63d0\u4f9b\u7a0b\u5e8f\u5bf9\u6570\u636e\u5e93\u5b58\u53d6\u63d0\u4f9b\u4e86\u5927\u91cf\u7684\u65b9\u6cd5\u3002"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u96c6\u6210\u4e86\u5fae\u8f6f\u4eb2\u513f\u5b50\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"EntityFramework Core")," \uff0c\u4e5f\u5c31\u662f\u901a\u5e38\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u6307\u7684\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"DbContext")," \u7c7b\u6216\u5b83\u7684\u5b9e\u73b0\u7c7b\u3002"),Object(i.b)("h2",{id:"812-appdbcontext"},"8.1.2 ",Object(i.b)("inlineCode",{parentName:"h2"},"AppDbContext")),Object(i.b)("p",null,"\u5728\u6211\u4eec\u5b9e\u9645\u9879\u76ee\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"EFCore")," \u63d0\u4f9b\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"DbContext")," \u64cd\u4f5c\u5bf9\u8c61\u64cd\u4f5c\u6570\u636e\u5e93\u6709\u4e9b\u7e41\u7410\u548c\u590d\u6742\uff0c\u4e14\u9ed8\u8ba4\u4e0d\u5177\u5907\u8bfb\u5199\u5206\u79bb\u3001\u591a\u5e93\u7b49\u64cd\u4f5c\u529f\u80fd\u3002"),Object(i.b)("p",null,"\u6240\u4ee5\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"AppDbContext<TDbContext, TDbContextLocator>")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u8be5\u4e0a\u4e0b\u6587\u7ee7\u627f\u81ea ",Object(i.b)("inlineCode",{parentName:"p"},"DbContext"),"\u3002"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u7279\u522b\u8bf4\u660e")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u540e\u7eed\u7ae0\u8282\uff0c\u7686\u91c7\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"EFCore")," \u4ee3\u66ff ",Object(i.b)("inlineCode",{parentName:"p"},"EntityFramework Core"),"\u3002"))),Object(i.b)("h2",{id:"813-appdbcontext-\u548c-dbcontext-\u533a\u522b"},"8.1.3 ",Object(i.b)("inlineCode",{parentName:"h2"},"AppDbContext")," \u548c ",Object(i.b)("inlineCode",{parentName:"h2"},"DbContext")," \u533a\u522b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u7ee7\u627f\u81ea ",Object(i.b)("inlineCode",{parentName:"li"},"DbContext"),"\uff0c\u5177\u5907 ",Object(i.b)("inlineCode",{parentName:"li"},"DbContext")," \u6240\u6709\u529f\u80fd\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6cdb\u578b\u7248\u672c\uff0c\u5982\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext<TDbContext, TDbContextLocator>")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u81ea\u52a8\u914d\u7f6e\u5b9e\u4f53\u4fe1\u606f\uff0c\u65e0\u9700\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"OnModelCreating")," \u4e2d\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u652f\u6301\u5185\u7f6e\u591a\u79df\u6237\u652f\u6301"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u652f\u6301\u5168\u5c40\u6a21\u578b\u914d\u7f6e\u62e6\u622a\u5668"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u652f\u6301\u6570\u636e\u63d0\u4ea4\u66f4\u6539\u591a\u4e2a\u4e8b\u4ef6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u63d0\u4f9b\u66f4\u52a0\u5f3a\u5927\u7684\u6a21\u578b\u64cd\u4f5c\u80fd\u529b\uff0c\u5982\u679c ",Object(i.b)("inlineCode",{parentName:"li"},"Sql")," \u64cd\u4f5c\uff0c\u8bfb\u5199\u5206\u79bb\u7b49"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u80fd\u591f\u5f97\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"Fur")," \u6846\u67b6\u66f4\u591a\u7684\u529f\u80fd\u652f\u6301")),Object(i.b)("h2",{id:"814-\u5982\u4f55\u5b9a\u4e49\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"8.1.4 \u5982\u4f55\u5b9a\u4e49\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u4e2d\u4e86\uff0c\u63d0\u4f9b\u4e86\u4e24\u79cd ",Object(i.b)("inlineCode",{parentName:"p"},"AppDbContext")," \u5b9a\u4e49\u65b9\u5f0f\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext<TDbContext>")," \u64cd\u4f5c\u9ed8\u8ba4\u6570\u636e\u5e93"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext<TDbContext, TDbContextLocator>")," \u64cd\u4f5c N \u4e2a\u6570\u636e\u5e93")),Object(i.b)("p",null,"\u5176\u4e2d ",Object(i.b)("inlineCode",{parentName:"p"},"AppDbContext<TDbContext>")," \u9ed8\u8ba4\u7ee7\u627f\u81ea ",Object(i.b)("inlineCode",{parentName:"p"},"AppDbContext<TDbContext, TDbContextLocator>"),"\u3002"),Object(i.b)("p",null,"\u4e0b\u9762\u662f\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u521b\u5efa\u7684\u591a\u4e2a\u4f8b\u5b50\uff1a"),Object(i.b)("h3",{id:"8141-\u521b\u5efa\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"8.1.4.1 \u521b\u5efa\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,6,12}","{1,6,12}":!0}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Fur.EntityFramework.Core\n{\n    public class FurDbContext : AppDbContext<FurDbContext>  // \u7ee7\u627f AppDbContext<> \u7c7b\n    {\n        /// <summary>\n        /// \u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="options"></param>\n        public FurDbContext(DbContextOptions<FurDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"8142-\u521b\u5efa\u5176\u4ed6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"8.1.4.2 \u521b\u5efa\u5176\u4ed6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,6,12}","{1,6,12}":!0}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Fur.EntityFramework.Core\n{\n    public class FurOtherDbContext : AppDbContext<FurOtherDbContext, FurOtherDbContextLocator>  // \u7ee7\u627f AppDbContext<> \u7c7b\n    {\n        /// <summary>\n        /// \u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="options"></param>\n        public FurOtherDbContext(DbContextOptions<FurOtherDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u6240\u6709\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u90fd\u5e94\u8be5\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur.EntityFramework.Core")," \u9879\u76ee\u4e2d\u521b\u5efa\u3002\u5173\u4e8e ",Object(i.b)("inlineCode",{parentName:"p"},"TDbContextLocator")," \u5c06\u5728\u4e0b\u4e00\u7ae0\u8282 \u300a",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"dbcontext-locator"}),"8.2 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668"),"\u300b\u9610\u8ff0\u3002"))),Object(i.b)("h2",{id:"815-\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32"},"8.1.5 \u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u63d0\u4f9b\u591a\u79cd\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u65b9\u5f0f\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"Startup")," \u4e2d\u6dfb\u52a0\u670d\u52a1\uff1a",Object(i.b)("inlineCode",{parentName:"li"},'AddSqlServerPool<TDbContext>("\u8fde\u63a5\u5b57\u7b26\u4e32")')," \u65b9\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},'[DbContext("\u8fde\u63a5\u5b57\u7b26\u4e32/Key")]')," \u7279\u6027\u65b9\u5f0f\uff08\u53ea\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"AppDbContext \u5b9e\u73b0\u7c7b\u6709\u6548"),"\uff09",Object(i.b)("strong",{parentName:"li"},"\u63a8\u8350")),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7\u91cd\u5199 ",Object(i.b)("inlineCode",{parentName:"li"},"OnConfiguring(DbContextOptionsBuilder optionsBuilder)")," \u914d\u7f6e")),Object(i.b)("h3",{id:"8151-startup-\u65b9\u5f0f\u914d\u7f6e"},"8.1.5.1 ",Object(i.b)("inlineCode",{parentName:"h3"},"Startup")," \u65b9\u5f0f\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{5,23-26}","{5,23-26}":!0}),'using Fur.EntityFramework.Core;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Fur.Web.Entry\n{\n    public class Startup\n    {\n        public Startup(IConfiguration configuration)\n        {\n            Configuration = configuration;\n        }\n\n        public IConfiguration Configuration { get; }\n\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddApp(options =>\n            {\n                // \u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u652f\u6301N\u4e2a\u6570\u636e\u5e93\n                options.AddDatabaseAccessor(options =>\n                {\n                    options.AddSqlServerPool<FurDbContext>("\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32");\n                });\n            });\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            // \u5176\u4ed6\u4ee3\u7801\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"8152-dbcontext-\u65b9\u5f0f\u914d\u7f6e"},"8.1.5.2 ",Object(i.b)("inlineCode",{parentName:"h3"},"[DbContext]")," \u65b9\u5f0f\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,6}","{1,6}":!0}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Fur.EntityFramework.Core\n{\n    [DbContext("DbConnectionString")]   // \u652f\u6301 `appsetting.json` \u540d\u6216 \u8fde\u63a5\u5b57\u7b26\u4e32\n    public class FurDbContext : AppDbContext<FurDbContext>\n    {\n        /// <summary>\n        /// \u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="options"></param>\n        public FurDbContext(DbContextOptions<FurDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u63d0\u793a")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u63a8\u8350\u4f7f\u7528\u6b64\u65b9\u5f0f\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u3002"))),Object(i.b)("h3",{id:"8153-onconfiguring-\u65b9\u5f0f\u914d\u7f6e"},"8.1.5.3 ",Object(i.b)("inlineCode",{parentName:"h3"},"OnConfiguring")," \u65b9\u5f0f\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{16-20}","{16-20}":!0}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Fur.EntityFramework.Core\n{\n    public class FurDbContext : AppDbContext<FurDbContext>\n    {\n        /// <summary>\n        /// \u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="options"></param>\n        public FurDbContext(DbContextOptions<FurDbContext> options) : base(options)\n        {\n        }\n\n        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n        {\n            base.OnConfiguring(optionsBuilder);\n\n            optionsBuilder.UseSqlServer("\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32");\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"816-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4e49\u4f4d\u7f6e"},"8.1.6 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4e49\u4f4d\u7f6e"),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u4e2d\uff0c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u9700\u5b9a\u4e49\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur.EntityFramework.Core")," \u4e2d\uff0c\u4e14\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u90fd\u5fc5\u987b\u62e5\u6709\u552f\u4e00\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"DbContextLocator")," \u5b9a\u4f4d\u5668"))),Object(i.b)("h2",{id:"817-\u53cd\u9988\u4e0e\u5efa\u8bae"},"8.1.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u7ed9 Fur \u63d0 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/issues/new?issue"}),"Issue"),"\u3002"))),Object(i.b)("hr",null),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e86\u89e3\u66f4\u591a")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(i.b)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/zh-cn/ef/core/miscellaneous/configuring-dbcontext"}),"EF Core - \u914d\u7f6e DbContext")," \u7ae0\u8282\u3002"))))}l.isMDXComponent=!0}}]);
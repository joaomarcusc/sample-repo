(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"+RfB":function(t,e,r){"use strict";r.r(e);var n=r("mK0O"),o=r("aNYv"),a=r("UO5U"),i=r("mXGw"),c=r.n(i),l=r("qlrW"),u=r.n(l),s=r("9fEB"),p=r.n(s),f=r("eHG4"),d=function(t){return Object(f.a)({tag:"svg",attr:{viewBox:"0 0 14 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}}]})(t)};d.displayName="GoStar";var y=r("MNB/"),b=r("5050"),v=r("tgNW"),g=r("Buv9"),h=r("xl07"),O=r("4FtK"),m=r("6Tvm"),j=r("k8z1"),w=r("3HDz"),x=r("OTQ0"),S=r("NthX"),P=r.n(S),k=r("dV/x"),C=r("fT8r"),B=r("Cb+O"),T=r("4xI+"),E=r("t891"),I=r("9aiy"),D=r("0II3"),R=r.n(D),A=c.a.createElement;function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function $(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var q=null;function L(t){return q||(q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(I.a)((function(t,e){var r="your_github_auth_token";return{headers:$({},e.headers,{authorization:"Bearer ".concat(r)})}})),r=new E.a({uri:"https://api.github.com/graphql",credentials:"same-origin",fetch:R.a}),n=(new T.a).restore(t);return new B.a({ssrMode:!1,link:e.concat(r),cache:n})}(t)),q}var N=r("cLlx"),_=c.a.createElement;function G(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?G(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function M(){var t=Object(a.a)(["\n\tquery SearchRepositories($queryString: String!) {\n\t\tsearch(query: $queryString, type: REPOSITORY, first: 10) {\n\t\t\trepositoryCount\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t... on Repository {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tnameWithOwner\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\trepositoryTopics(first: 5) {\n\t\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttopic {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tstargazers {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\tforks {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\tupdatedAt\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return M=function(){return t},t}var F=u()(M());e.default=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ssr,n=void 0===e||e,o=function(e){var r=e.apolloClient,n=e.apolloState,o=Object(k.a)(e,["apolloClient","apolloState"]),a=r||L(n);return A(C.a,{client:a},A(t,o))};return(n||t.getInitialProps)&&(o.getInitialProps=function(e){var o,a,i,c,l,u;return P.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(o=e.AppTree,a=e.apolloClient=L(),!t.getInitialProps){s.next=8;break}return s.next=5,P.a.awrap(t.getInitialProps(e));case 5:s.t0=s.sent,s.next=9;break;case 8:s.t0={};case 9:i=s.t0,s.next=27;break;case 13:if(!n){s.next=27;break}return s.prev=14,s.next=17,P.a.awrap(Promise.all([r.e(0),r.e(27)]).then(r.bind(null,"r/Zx")));case 17:return c=s.sent,l=c.getDataFromTree,s.next=21,P.a.awrap(l(A(o,{pageProps:$({},i,{apolloClient:a})})));case 21:s.next=26;break;case 23:s.prev=23,s.t1=s.catch(14),console.error("Error while running `getDataFromTree`",s.t1);case 26:p.a.rewind();case 27:return u=a.cache.extract(),s.abrupt("return",$({},i,{apolloState:u}));case 29:case"end":return s.stop()}}),null,null,[[14,23]],Promise)}),o}((function(){var t,e,r=c.a.useState("react"),n=Object(o.a)(r,2),a=n[0],i=n[1],l=Object(N.c)(F,{variables:{queryString:"react"}}),u=l.data,s=l.loading,f=l.error,S=l.refetch;if(f)return _("div",null,"Error! $",f.message);return _(c.a.Fragment,null,_(p.a,null,_("title",null,"Github Search"," | INST."),_("meta",{name:"Description",content:"Inst Github app"})),_(m.a,null,_(b.a,{paddingTop:["0","0","0","40px"]},_(y.Row,null,_(y.Col,{lg:3},_(x.a,null)),_(y.Col,{lg:9},s?_(w.a,null):_(c.a.Fragment,null,_(b.a,{paddingTop:["10px","15px","30px","0"],paddingBottom:"25px"},_(b.a,{as:"h3",overrides:{Block:{style:function(t){var e=t.$theme;return Z({},e.typography.font450,{color:e.colors.primary,marginBottom:"10px"})}}}},"Github Search"),_(b.a,{as:"p",overrides:{Block:{style:function(t){var e=t.$theme;return Z({},e.typography.font200,{color:e.colors.contentSecondary})}}}},_(b.a,{as:"span",overrides:{Block:{style:function(t){return{color:t.$theme.colors.primary,marginRight:"5px"}}}}},null===u||void 0===u?void 0:null===(t=u.search)||void 0===t?void 0:t.repositoryCount))),_(b.a,{overrides:{Block:{style:function(t){var e=t.$theme;return{paddingBottom:"40px",borderBottom:"1px solid ".concat(e.colors.backgroundTertiary),"@media only screen and (max-width: 991px)":{paddingBottom:"30px"}}}}}},_("form",{onSubmit:function(t){t.preventDefault(),S({queryString:a})}},_(h.a,{overrides:{After:function(){return _(b.a,{overrides:{Block:{style:function(t){var e=t.$theme;return{display:"flex",alignItems:"center",paddingLeft:e.sizing.scale500,paddingRight:e.sizing.scale500}}}}},_(g.a,{size:"24px"}))}},placeholder:"Search",value:a,onChange:function(t){return i(t.target.value)}}))),null===u||void 0===u?void 0:null===(e=u.search)||void 0===e?void 0:e.edges.map((function(t){var e=t.node;return _(b.a,{key:"github-repo--key".concat(e.id),overrides:{Block:{style:function(t){var e=t.$theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"23px",paddingBottom:"20px",borderBottom:"1px solid ".concat(e.colors.backgroundTertiary)}}}}},_(j.a,{title:e.nameWithOwner,description:e.description,btn:e.repositoryTopics.nodes.map((function(t){return _(O.a,{key:t.id,overrides:{Root:{style:{marginTop:"15px"}}},closeable:!1,variant:"solid"},t.topic.name)})),style:{alignItems:"flex-start"}}),_(v.a,{kind:"secondary",overrides:{BaseButton:{style:function(t){return Z({minWidth:"80px",justifyContent:"space-around",flexShrink:0},t.$theme.typography.font250)}}}},_(d,{style:{flexShrink:0}}),_(b.a,{paddingLeft:"5px",paddingRight:"5px"},e.stargazers.totalCount)))}))))))))}))},Buv9:function(t,e,r){"use strict";var n=r("mXGw"),o=r("etL/"),a=r("Oqfq"),i=r("Azvf"),c=r("parB");function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.a=n.forwardRef((function(t,e){var r=d(Object(o.b)(),2)[1],u=t.overrides,p=void 0===u?{}:u,y=f(t,["overrides"]),b=Object(a.d)({component:r.icons&&r.icons.Search?r.icons.Search:null,props:s({title:"Search",viewBox:"0 0 24 24"},Object(c.a)(y))},p&&p.Svg?Object(a.f)(p.Svg):{});return n.createElement(i.a,l({title:"Search",viewBox:"0 0 24 24",ref:e,overrides:{Svg:b}},y),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 6C8.79086 6 7 7.79086 7 10C7 12.2091 8.79086 14 11 14C13.2091 14 15 12.2091 15 10C15 7.79086 13.2091 6 11 6ZM5 10C5 6.68629 7.68629 4 11 4C14.3137 4 17 6.68629 17 10C17 11.2958 16.5892 12.4957 15.8907 13.4765L19.7071 17.2929C20.0976 17.6834 20.0976 18.3166 19.7071 18.7071C19.3166 19.0976 18.6834 19.0976 18.2929 18.7071L14.4765 14.8907C13.4957 15.5892 12.2958 16 11 16C7.68629 16 5 13.3137 5 10Z"}))}))},TJjZ:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("YZeP");function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},YZeP:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},aNYv:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("TJjZ");function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},zTvd:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/github",function(){return r("+RfB")}])}},[["zTvd",1,0,2,3,4,5,6,7,8,9,10,11,15,28]]]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{40612:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return L},default:function(){return T}});var r=n(67294),i=(n(32484),n(85893)),o=function(e){var t=e.children,n=(0,r.useRef)(null),o=(0,r.useState)(!1),c=o[0],a=o[1],s=(0,r.useState)(!1),l=s[0],u=s[1];return(0,i.jsxs)("div",{ref:n,onMouseEnter:function(){a(!0)},onMouseLeave:function(){a(!1),u(!1)},style:{position:"relative"},children:[c&&(0,i.jsx)("button",{type:"button",className:"_1t0bhq10",onClick:function(){var e;if(n.current){u(!0);var t=(null===n||void 0===n||null===(e=n.current)||void 0===e?void 0:e.textContent.split("\n")).map((function(e){return e.substring(1,e.length-1)}));navigator.clipboard.writeText(t.join("\n")),setTimeout((function(){u(!1)}),2e3)}},children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:l?"text-green-400":"text-gray-300",children:l?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),t]})},c=n(17991),a=n(92809),s=n(91164),l=n(22557),u=n(84283),d=["node","inline","className","children"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){e.node;var t=e.inline,n=e.className,r=e.children,o=(0,s.Z)(e,d),c=/language-(\w+)/.exec(n||"");return!t&&c?(0,i.jsx)(l.Z,p(p({children:String(r).replace(/\n$/,""),language:c[1],PreTag:"pre",style:u.xm},o),{},{showLineNumbers:!0})):(0,i.jsx)("code",p(p({className:n},o),{},{children:r}))},j=n(45843),m=n(44777),g=n(25954),x=n(95002),v=n(50568),b=n(75350),w=n(36075),y=n(67683),k=n(74053),O=n(53416),_=(n(43232),n(15974),(0,O.x0)()),N=function(e){var t=e.data,n=Math.floor(10*Math.random());return(0,i.jsxs)("div",{className:"".concat("_193ltq22"," ").concat((0,k.K)({backgroundColor:"rainbow-".concat(0===n?1:n,"00")})),children:[(0,i.jsx)("h1",{children:t.title}),(0,i.jsx)("p",{children:t.date}),(0,i.jsx)("div",{className:"_193ltq21",children:t.tags.map((function(e){return(0,i.jsx)("span",{children:"#".concat(e)},"".concat(_,"-").concat(e))}))})]})},P=n(73886),Z=n(5128),E=function(e){var t=e.data,n=e.content,a=(0,r.useRef)(null),s=(0,P.T)(),l=function(){if(a.current&&a){var e=a.current.getBoundingClientRect(),t=e.top,n=e.bottom,r=(e.x,+(window.scrollY/(n-t-(window.innerHeight-90-.1*window.innerHeight))*100).toFixed(2));s((0,Z.JH)(r<=100?r:100))}};return(0,r.useEffect)((function(){return document.addEventListener("scroll",l),function(){document.removeEventListener("scroll",l),s((0,Z.JH)(0))}}),[]),n?(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{ref:a,children:[(0,i.jsx)(N,{data:t}),(0,i.jsx)("article",{className:"markdown-body",children:(0,i.jsx)(c.D,{remarkPlugins:[j.Z,m.Z,g.Z,x.Z,v.Z,[y.Z,{tight:!0}]],rehypePlugins:[b.Z,w.Z],components:{pre:o,code:f},children:n})})]}),(0,i.jsx)("div",{className:"_193ltq23"}),(0,i.jsx)("section",{ref:function(e){if(e){var t=document.createElement("script");t.src="https://utteranc.es/client.js",t.async=!0,t.setAttribute("repo","jhlee0409/jhlee0409.github.io"),t.setAttribute("issue-term","title"),t.setAttribute("theme","github-dark"),t.setAttribute("label","blog-comment"),t.crossOrigin="anonymous",e.appendChild(t)}}})]}):(0,i.jsx)("span",{children:"\ub85c\ub529 \uc911"})},M=n(72254),C=n(11163),L=!0,T=function(e){var t=e.data,n=e.content,r=(0,C.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.Z,{title:t.title,url:r.asPath}),(0,i.jsx)(E,{data:t,content:n})]})}},72254:function(e,t,n){"use strict";var r=n(9008),i=n(85893);t.Z=function(e){var t=e.title,n=void 0===t?"":t,o=e.description,c=e.url,a=e.image;return(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"Jack's Tech World : ".concat(n)||0}),(0,i.jsx)("meta",{name:"description",content:o||"Jack's World"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("meta",{property:"og:title",content:"Jack's Tech World : ".concat(n)}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:"https://jhlee0409.github.io".concat(c)||0}),(0,i.jsx)("meta",{property:"og:image",content:a||"/assets/default-image.png"}),(0,i.jsx)("meta",{property:"og:article:author",content:"Jack"})]})}},38239:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[categoryId]/article/[articleId]",function(){return n(40612)}])},15974:function(){},32484:function(){}},function(e){e.O(0,[812,774,888,179],(function(){return t=38239,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{40612:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return C},default:function(){return E}});var r=n(67294),a=(n(32484),n(85893)),o=function(t){var e=t.children,n=(0,r.useRef)(null),o=(0,r.useState)(!1),c=o[0],i=o[1],s=(0,r.useState)(!1),l=s[0],u=s[1];return(0,a.jsxs)("div",{ref:n,onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1),u(!1)},style:{position:"relative"},children:[c&&(0,a.jsx)("button",{type:"button",className:"_1t0bhq10",onClick:function(){var t;n.current&&(u(!0),navigator.clipboard.writeText(null===n||void 0===n||null===(t=n.current)||void 0===t?void 0:t.textContent),setTimeout((function(){u(!1)}),2e3))},children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:l?"text-green-400":"text-gray-300",children:l?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),e]})},c=n(17991),i=n(92809),s=n(91164),l=n(22557),u=n(84283),d=["node","inline","className","children"];function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j=function(t){t.node;var e=t.inline,n=t.className,r=t.children,o=(0,s.Z)(t,d),c=/language-(\w+)/.exec(n||"");return!e&&c?(0,a.jsx)(l.Z,p(p({children:String(r).replace(/\n$/,""),language:c[1],PreTag:"pre",style:u.xm},o),{},{showLineNumbers:!0})):(0,a.jsx)("code",p(p({className:n},o),{},{children:r}))},f=n(45843),m=n(44777),g=n(25954),x=n(95002),v=n(50568),b=n(75350),w=n(36075),y=n(67683),O=n(74053),k=n(53416),_=(n(91286),n(84881),(0,k.x0)()),N=function(t){var e=t.data,n=Math.floor(10*Math.random());return(0,a.jsxs)("div",{className:"".concat("_193ltq22"," ").concat((0,O.K)({backgroundColor:"rainbow-".concat(0===n?1:n,"00")})),children:[(0,a.jsx)("h1",{children:e.title}),(0,a.jsx)("p",{children:e.date}),(0,a.jsx)("div",{className:"_193ltq21",children:e.tags.map((function(t){return(0,a.jsx)("span",{children:"#".concat(t)},"".concat(_,"-").concat(t))}))})]})},P=function(t){var e=t.data,n=t.content;return n?(0,a.jsxs)("div",{children:[(0,a.jsx)(N,{data:e}),(0,a.jsx)("article",{className:"markdown-body",children:(0,a.jsx)(c.D,{remarkPlugins:[f.Z,m.Z,g.Z,x.Z,v.Z,[y.Z,{tight:!0}]],rehypePlugins:[b.Z,w.Z],components:{pre:o,code:j},children:n})}),(0,a.jsx)("div",{className:"_193ltq23"}),(0,a.jsx)("section",{ref:function(t){if(t){var e=document.createElement("script");e.src="https://utteranc.es/client.js",e.async=!0,e.setAttribute("repo","jhlee0409/jhlee0409.github.io"),e.setAttribute("issue-term","title"),e.setAttribute("theme","github-dark"),e.setAttribute("label","blog-comment"),e.crossOrigin="anonymous",t.appendChild(e)}}})]}):(0,a.jsx)("span",{children:"\ub85c\ub529 \uc911"})},Z=n(72254),M=n(11163),C=!0,E=function(t){var e=t.data,n=t.content,r=(0,M.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Z.Z,{title:e.title,url:r.asPath}),(0,a.jsx)(P,{data:e,content:n})]})}},72254:function(t,e,n){"use strict";var r=n(9008),a=n(85893);e.Z=function(t){var e=t.title,n=t.description,o=t.url,c=t.image;return(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:"JACK : ".concat(e)||0}),(0,a.jsx)("meta",{name:"description",content:n||"Jack's World"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,a.jsx)("meta",{property:"og:title",content:"JACK : ".concat(e)||0}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"https://jhlee0409.github.io".concat(o)||0}),(0,a.jsx)("meta",{property:"og:image",content:c||"/assets/default-image.png"}),(0,a.jsx)("meta",{property:"og:article:author",content:"Jack"})]})}},38239:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[categoryId]/article/[articleId]",function(){return n(40612)}])},84881:function(){},32484:function(){}},function(t){t.O(0,[812,774,888,179],(function(){return e=38239,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{61579:function(a,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var e=t(53416),c=t(74053),s=t(41664),l=t(11163),r=(t(43232),t(56631),t(85893)),i=(0,e.x0)(),d=function(a){var n,t=a.data,e=(a.isLast,(0,l.useRouter)());return(0,r.jsx)(s.default,{passHref:!0,href:"/".concat(e.query.categoryId||"".concat(t.mainCategory,"-").concat(t.subCategory),"/article/").concat(t.title.replaceAll(" ","-")),children:(0,r.jsx)("div",{className:"_1ypnalf0",children:(0,r.jsx)("div",{className:"_1ypnalf1",children:(0,r.jsx)("div",{className:"_1ypnalf2",children:(0,r.jsxs)("div",{className:"_1ypnalf4",children:[(0,r.jsx)("div",{className:"_1ypnalf5",children:t.date}),(0,r.jsx)("h1",{className:"_1ypnalf7",children:t.title}),(0,r.jsx)("p",{className:"_1ypnalf8",children:"- ".concat(t.summary)}),(0,r.jsx)("div",{className:"_1ypnalf6",children:null===(n=t.tags)||void 0===n?void 0:n.map((function(a,n){return(0,r.jsx)("span",{className:(0,c.K)({color:"rainbow-".concat(n+1,"00")}),children:"#".concat(a)},"".concat(i,"-").concat(a))}))})]})})})})})},o=(t(90783),(0,e.x0)()),u=function(a){var n=a.data;return(0,r.jsx)("div",{className:"_185z5f90",children:(0,r.jsx)("div",{className:"_185z5f91",children:0===(null===n||void 0===n?void 0:n.length)?(0,r.jsx)("div",{children:"\ub4f1\ub85d\ub41c \uac8c\uc2dc\ubb3c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"}):n?null===n||void 0===n?void 0:n.sort((function(a,n){return new Date(n.data.date)-new Date(a.data.date)})).map((function(a,t){var e=a.data;return(0,r.jsx)(d,{data:e,isLast:n.length-1===t},"".concat(o,"-").concat(e.title))})):(0,r.jsx)("div",{children:"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uce74\ud14c\uace0\ub9ac \uc785\ub2c8\ub2e4."})})})}},90783:function(){},56631:function(){},53416:function(a,n,t){"use strict";t.d(n,{x0:function(){return e}});let e=(a=21)=>crypto.getRandomValues(new Uint8Array(a)).reduce(((a,n)=>a+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"),"")}}]);
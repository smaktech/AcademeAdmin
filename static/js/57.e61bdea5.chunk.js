(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[57],{1819:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a(4),n=a(25),c=a(136),o=a(27),i=a(407),s=a(1824),l=a(269),d=a(1681),b=a(0),u=["links","activeLast"];function j(e){var t,a=e.links,o=e.activeLast,d=void 0!==o&&o,j=Object(n.a)(e,u),h=null===(t=Object(c.last)(a))||void 0===t?void 0:t.name,m=a.map((function(e){return Object(b.jsx)(p,{link:e},e.name)})),x=a.map((function(e){return Object(b.jsx)("div",{children:e.name!==h?Object(b.jsx)(p,{link:e}):Object(b.jsx)(i.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:h})},e.name)}));return Object(b.jsx)(s.a,Object(r.a)(Object(r.a)({separator:Object(b.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},j),{},{children:d?m:x}))}function p(e){var t=e.link,a=t.href,r=t.name,n=t.icon;return Object(b.jsxs)(d.a,{variant:"body2",component:o.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&Object(b.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),r]},r)}},1820:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(4),n=a(25),c=a(136),o=a(269),i=a(407),s=a(1681),l=a(1819),d=a(0),b=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,j=e.moreLink,p=void 0===j?[]:j,h=e.sx,m=Object(n.a)(e,b);return Object(d.jsxs)(o.a,{sx:Object(r.a)({mb:5},h),children:[Object(d.jsxs)(o.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(d.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:u}),Object(d.jsx)(l.a,Object(r.a)({links:t},m))]}),a&&Object(d.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(o.a,{sx:{mt:2},children:Object(c.isString)(p)?Object(d.jsx)(s.a,{href:p,target:"_blank",rel:"noopener",variant:"body2",children:p}):p.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var r=a(4),n=a(98),c=a(1009),o=a(1825),i=a(269),s=a(407),l=a(0);function d(e){var t=e.title,a=e.sx,s=e.children;return Object(l.jsxs)(c.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(n.a)(e.palette.grey[500],.04)}},children:[t&&Object(l.jsx)(o.a,{title:t}),Object(l.jsx)(i.a,{sx:Object(r.a)({p:5,minHeight:180},a),children:s})]})}function b(e){var t=e.title;return Object(l.jsx)(s.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},1824:function(e,t,a){"use strict";var r=a(16),n=a(3),c=a(10),o=a(2),i=a(13),s=a(1),l=(a(99),a(7),a(5)),d=a(300),b=a(12),u=a(18),j=a(407),p=a(98),h=a(59),m=a(0),x=Object(h.a)(Object(m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),O=a(1675),g=Object(b.a)(O.a,{skipSx:!0})((function(e){var t=e.theme;return Object(o.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(o.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(o.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(p.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(p.c)(t.palette.grey[600],.12)})})})),f=Object(b.a)(x)({width:24,height:16});var v=function(e){var t=e;return Object(m.jsx)("li",{children:Object(m.jsx)(g,Object(o.a)({focusRipple:!0},e,{ownerState:t,children:Object(m.jsx)(f,{ownerState:t})}))})},y=a(179),S=a(192);function w(e){return Object(y.a)("MuiBreadcrumbs",e)}var k=Object(S.a)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=Object(b.a)(j.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(c.a)({},"& .".concat(k.li),t.li),t.root]}})({}),N=Object(b.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),M=Object(b.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function B(e,t,a,r){return e.reduce((function(n,c,o){return o<e.length-1?n=n.concat(c,Object(m.jsx)(M,{"aria-hidden":!0,className:t,ownerState:r,children:a},"separator-".concat(o))):n.push(c),n}),[])}var T=s.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiBreadcrumbs"}),c=a.children,b=a.className,j=a.component,p=void 0===j?"nav":j,h=a.expandText,x=void 0===h?"Show path":h,O=a.itemsAfterCollapse,g=void 0===O?1:O,f=a.itemsBeforeCollapse,y=void 0===f?1:f,S=a.maxItems,k=void 0===S?8:S,M=a.separator,T=void 0===M?"/":M,H=Object(i.a)(a,C),A=s.useState(!1),I=Object(n.a)(A,2),z=I[0],L=I[1],G=Object(o.a)({},a,{component:p,expanded:z,expandText:x,itemsAfterCollapse:g,itemsBeforeCollapse:y,maxItems:k,separator:T}),P=function(e){var t=e.classes;return Object(d.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)}(G),W=s.useRef(null),J=s.Children.toArray(c).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return Object(m.jsx)("li",{className:P.li,children:e},"child-".concat(t))}));return Object(m.jsx)(R,Object(o.a)({ref:t,component:p,color:"text.secondary",className:Object(l.a)(P.root,b),ownerState:G},H,{children:Object(m.jsx)(N,{className:P.ol,ref:W,ownerState:G,children:B(z||k&&J.length<=k?J:function(e){return y+g>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[Object(m.jsx)(v,{"aria-label":x,onClick:function(){L(!0);var e=W.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(r.a)(e.slice(e.length-g,e.length)))}(J),P.separator,T,G)})}))}));t.a=T},1825:function(e,t,a){"use strict";var r=a(10),n=a(13),c=a(2),o=a(1),i=(a(7),a(5)),s=a(300),l=a(407),d=a(18),b=a(12),u=a(179),j=a(192);function p(e){return Object(u.a)("MuiCardHeader",e)}var h=Object(j.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=a(0),x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],O=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(r.a)(a,"& .".concat(h.title),t.title),Object(r.a)(a,"& .".concat(h.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),r=a.action,o=a.avatar,b=a.className,u=a.component,j=void 0===u?"div":u,h=a.disableTypography,y=void 0!==h&&h,S=a.subheader,w=a.subheaderTypographyProps,k=a.title,C=a.titleTypographyProps,R=Object(n.a)(a,x),N=Object(c.a)({},a,{component:j,disableTypography:y}),M=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(N),B=k;null==B||B.type===l.a||y||(B=Object(m.jsx)(l.a,Object(c.a)({variant:o?"body2":"h5",className:M.title,component:"span",display:"block"},C,{children:B})));var T=S;return null==T||T.type===l.a||y||(T=Object(m.jsx)(l.a,Object(c.a)({variant:o?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:T}))),Object(m.jsxs)(O,Object(c.a)({className:Object(i.a)(M.root,b),as:j,ref:t,ownerState:N},R,{children:[o&&Object(m.jsx)(g,{className:M.avatar,ownerState:N,children:o}),Object(m.jsxs)(v,{className:M.content,ownerState:N,children:[B,T]}),r&&Object(m.jsx)(f,{className:M.action,ownerState:N,children:r})]}))}));t.a=y},2769:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var r=a(3),n=a(1),c=a(12),o=a(68),i=a(1009),s=a(269),l=a(1785),d=a(1002),b=a(407),u=a(1781),j=a(1763),p=a(1803),h=a(1772),m=a(47),x=a(671),O=a(1820),g=a(1823),f=a(0),v=Object(c.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),y=Object(c.a)(i.a)((function(e){var t=e.theme;return{padding:t.spacing(5),border:"solid 1px ".concat(t.palette.divider),borderRadius:1.5*Number(t.shape.borderRadius),backgroundColor:t.palette.grey["light"===t.palette.mode?100:800]}})),S=["1col","2col","3col","4col","6col","12col"];function w(){var e=Object(o.a)(),t=Object(n.useState)(2),a=Object(r.a)(t,2),c=a[0],w=a[1],k=Object(n.useState)(3),C=Object(r.a)(k,2),R=C[0],N=C[1];return Object(f.jsx)(x.a,{title:"Foundations: Grid",children:Object(f.jsxs)(v,{children:[Object(f.jsx)(s.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(f.jsx)(l.a,{children:Object(f.jsx)(O.a,{heading:"Grid",links:[{name:"Components",href:m.d.components},{name:"Grid"}]})})}),Object(f.jsx)(l.a,{children:Object(f.jsxs)(d.a,{spacing:5,children:[Object(f.jsx)(g.a,{title:"Spacing",children:Object(f.jsxs)(y,{variant:"outlined",children:[Object(f.jsxs)(b.a,{variant:"body2",sx:{mb:3,textAlign:"center"},children:["Spacing: ",Object(f.jsx)("strong",{children:e.spacing(Number(c))})]}),Object(f.jsx)(u.a,{container:!0,spacing:c,children:[0,1,2,3,4,5,6,7,8,9,10,11].map((function(e){return Object(f.jsx)(u.a,{item:!0,xs:1,children:Object(f.jsx)(i.a,{sx:{height:80,boxShadow:function(e){return e.customShadows.z8}}})},e)}))}),Object(f.jsx)(j.a,{row:!0,name:"spacing",value:c.toString(),onChange:function(e){w(Number(e.target.value))},sx:{mt:3,display:"flex",justifyContent:"center"},children:[0,1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(f.jsx)(p.a,{value:e.toString(),label:e.toString(),control:Object(f.jsx)(h.a,{})},e)}))})]})}),Object(f.jsx)(g.a,{title:"Column",children:Object(f.jsxs)(y,{variant:"outlined",children:[Object(f.jsx)(u.a,{container:!0,spacing:3,children:[0,1,2,3,4,5,6,7,8,9,10,11].map((function(e){return Object(f.jsx)(u.a,{item:!0,xs:R,children:Object(f.jsxs)(i.a,{sx:{py:3,textAlign:"center",boxShadow:function(e){return e.customShadows.z8}},children:["xs = ",R]})},e)}))}),Object(f.jsx)(j.a,{row:!0,name:"column",value:R.toString(),onChange:function(e){N(Number(e.target.value))},sx:{mt:3,display:"flex",justifyContent:"center"},children:[12,6,4,3,2,1].map((function(e,t){return Object(f.jsx)(p.a,{value:e.toString(),label:S[t],control:Object(f.jsx)(h.a,{})},e)}))})]})})]})})]})})}}}]);
//# sourceMappingURL=57.e61bdea5.chunk.js.map
(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[64],{1819:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(4),r=a(25),i=a(136),c=a(27),o=a(407),l=a(1824),s=a(269),d=a(1681),j=a(0),b=["links","activeLast"];function u(e){var t,a=e.links,c=e.activeLast,d=void 0!==c&&c,u=Object(r.a)(e,b),x=null===(t=Object(i.last)(a))||void 0===t?void 0:t.name,O=a.map((function(e){return Object(j.jsx)(h,{link:e},e.name)})),m=a.map((function(e){return Object(j.jsx)("div",{children:e.name!==x?Object(j.jsx)(h,{link:e}):Object(j.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},e.name)}));return Object(j.jsx)(l.a,Object(n.a)(Object(n.a)({separator:Object(j.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},u),{},{children:d?O:m}))}function h(e){var t=e.link,a=t.href,n=t.name,r=t.icon;return Object(j.jsxs)(d.a,{variant:"body2",component:c.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&Object(j.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),n]},n)}},1820:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(4),r=a(25),i=a(136),c=a(269),o=a(407),l=a(1681),s=a(1819),d=a(0),j=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,a=e.action,b=e.heading,u=e.moreLink,h=void 0===u?[]:u,x=e.sx,O=Object(r.a)(e,j);return Object(d.jsxs)(c.a,{sx:Object(n.a)({mb:5},x),children:[Object(d.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(s.a,Object(n.a)({links:t},O))]}),a&&Object(d.jsx)(c.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(c.a,{sx:{mt:2},children:Object(i.isString)(h)?Object(d.jsx)(l.a,{href:h,target:"_blank",rel:"noopener",variant:"body2",children:h}):h.map((function(e){return Object(d.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(4),r=a(98),i=a(1009),c=a(1825),o=a(269),l=a(407),s=a(0);function d(e){var t=e.title,a=e.sx,l=e.children;return Object(s.jsxs)(i.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(r.a)(e.palette.grey[500],.04)}},children:[t&&Object(s.jsx)(c.a,{title:t}),Object(s.jsx)(o.a,{sx:Object(n.a)({p:5,minHeight:180},a),children:l})]})}function j(e){var t=e.title;return Object(s.jsx)(l.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},1824:function(e,t,a){"use strict";var n=a(16),r=a(3),i=a(10),c=a(2),o=a(13),l=a(1),s=(a(99),a(7),a(5)),d=a(300),j=a(12),b=a(18),u=a(407),h=a(98),x=a(59),O=a(0),m=Object(x.a)(Object(O.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=a(1675),f=Object(j.a)(p.a,{skipSx:!0})((function(e){var t=e.theme;return Object(c.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(c.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(c.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(h.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(h.c)(t.palette.grey[600],.12)})})})),v=Object(j.a)(m)({width:24,height:16});var g=function(e){var t=e;return Object(O.jsx)("li",{children:Object(O.jsx)(f,Object(c.a)({focusRipple:!0},e,{ownerState:t,children:Object(O.jsx)(v,{ownerState:t})}))})},y=a(179),w=a(192);function k(e){return Object(y.a)("MuiBreadcrumbs",e)}var C=Object(w.a)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=Object(j.a)(u.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(i.a)({},"& .".concat(C.li),t.li),t.root]}})({}),M=Object(j.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),T=Object(j.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function I(e,t,a,n){return e.reduce((function(r,i,c){return c<e.length-1?r=r.concat(i,Object(O.jsx)(T,{"aria-hidden":!0,className:t,ownerState:n,children:a},"separator-".concat(c))):r.push(i),r}),[])}var N=l.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiBreadcrumbs"}),i=a.children,j=a.className,u=a.component,h=void 0===u?"nav":u,x=a.expandText,m=void 0===x?"Show path":x,p=a.itemsAfterCollapse,f=void 0===p?1:p,v=a.itemsBeforeCollapse,y=void 0===v?1:v,w=a.maxItems,C=void 0===w?8:w,T=a.separator,N=void 0===T?"/":T,B=Object(o.a)(a,S),L=l.useState(!1),z=Object(r.a)(L,2),H=z[0],P=z[1],A=Object(c.a)({},a,{component:h,expanded:H,expandText:m,itemsAfterCollapse:f,itemsBeforeCollapse:y,maxItems:C,separator:N}),W=function(e){var t=e.classes;return Object(d.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(A),E=l.useRef(null),J=l.Children.toArray(i).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return Object(O.jsx)("li",{className:W.li,children:e},"child-".concat(t))}));return Object(O.jsx)(R,Object(c.a)({ref:t,component:h,color:"text.secondary",className:Object(s.a)(W.root,j),ownerState:A},B,{children:Object(O.jsx)(M,{className:W.ol,ref:E,ownerState:A,children:I(H||C&&J.length<=C?J:function(e){return y+f>=e.length?e:[].concat(Object(n.a)(e.slice(0,y)),[Object(O.jsx)(g,{"aria-label":m,onClick:function(){P(!0);var e=E.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(n.a)(e.slice(e.length-f,e.length)))}(J),W.separator,N,A)})}))}));t.a=N},1825:function(e,t,a){"use strict";var n=a(10),r=a(13),i=a(2),c=a(1),o=(a(7),a(5)),l=a(300),s=a(407),d=a(18),j=a(12),b=a(179),u=a(192);function h(e){return Object(b.a)("MuiCardHeader",e)}var x=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),O=a(0),m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],p=Object(j.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(i.a)((a={},Object(n.a)(a,"& .".concat(x.title),t.title),Object(n.a)(a,"& .".concat(x.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(j.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(j.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(j.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,c=a.avatar,j=a.className,b=a.component,u=void 0===b?"div":b,x=a.disableTypography,y=void 0!==x&&x,w=a.subheader,k=a.subheaderTypographyProps,C=a.title,S=a.titleTypographyProps,R=Object(r.a)(a,m),M=Object(i.a)({},a,{component:u,disableTypography:y}),T=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(M),I=C;null==I||I.type===s.a||y||(I=Object(O.jsx)(s.a,Object(i.a)({variant:c?"body2":"h5",className:T.title,component:"span",display:"block"},S,{children:I})));var N=w;return null==N||N.type===s.a||y||(N=Object(O.jsx)(s.a,Object(i.a)({variant:c?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:N}))),Object(O.jsxs)(p,Object(i.a)({className:Object(o.a)(T.root,j),as:u,ref:t,ownerState:M},R,{children:[c&&Object(O.jsx)(f,{className:T.avatar,ownerState:M,children:c}),Object(O.jsxs)(g,{className:T.content,ownerState:M,children:[I,N]}),n&&Object(O.jsx)(v,{className:T.action,ownerState:M,children:n})]}))}));t.a=y},2874:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var n=a(12),r=a(269),i=a(1785),c=a(1002),o=a(47),l=a(671),s=a(1820),d=a(1823),j=a(16),b=a(3),u=a(1),h=a(1805),x=a(1788),O=a(1741),m=a(1743),p=a(1774),f=a(1742),v=a(1781),g=a(544),y=a(41),w=a(0);function k(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function C(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function S(){var e=Object(u.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1],r=Object(u.useState)([0,1,2,3]),i=Object(b.a)(r,2),c=i[0],o=i[1],l=Object(u.useState)([4,5,6,7]),s=Object(b.a)(l,2),d=s[0],S=s[1],R=C(a,c),M=C(a,d),T=function(e){return function(){var t=a.indexOf(e),r=Object(j.a)(a);-1===t?r.push(e):r.splice(t,1),n(r)}},I=function(e){return Object(w.jsx)(h.a,{sx:{width:200,height:220,overflow:"auto",borderRadius:1.5},children:Object(w.jsx)(x.a,{dense:!0,component:"div",role:"list",children:e.map((function(e){var t="transfer-list-item-".concat(e,"-label");return Object(w.jsxs)(O.a,{role:"listitem",onClick:T(e),children:[Object(w.jsx)(m.a,{children:Object(w.jsx)(p.a,{checked:-1!==a.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(w.jsx)(f.a,{id:t,primary:"List item ".concat(e+1)})]},e)}))})})};return Object(w.jsxs)(v.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",py:3},children:[Object(w.jsx)(v.a,{item:!0,children:I(c)}),Object(w.jsx)(v.a,{item:!0,children:Object(w.jsxs)(v.a,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[Object(w.jsx)(g.a,{color:"inherit",variant:"outlined",size:"small",onClick:function(){S(d.concat(c)),o([])},disabled:0===c.length,"aria-label":"move all right",sx:{my:1},children:Object(w.jsx)(y.a,{icon:"eva:arrowhead-right-fill",width:18,height:18})}),Object(w.jsx)(g.a,{color:"inherit",variant:"outlined",size:"small",onClick:function(){S(d.concat(R)),o(k(c,R)),n(k(a,R))},disabled:0===R.length,"aria-label":"move selected right",sx:{my:1},children:Object(w.jsx)(y.a,{icon:"eva:arrow-ios-forward-fill",width:18,height:18})}),Object(w.jsx)(g.a,{color:"inherit",variant:"outlined",size:"small",onClick:function(){o(c.concat(M)),S(k(d,M)),n(k(a,M))},disabled:0===M.length,"aria-label":"move selected left",sx:{my:1},children:Object(w.jsx)(y.a,{icon:"eva:arrow-ios-back-fill",width:18,height:18})}),Object(w.jsx)(g.a,{color:"inherit",variant:"outlined",size:"small",onClick:function(){o(c.concat(d)),S([])},disabled:0===d.length,"aria-label":"move all left",sx:{my:1},children:Object(w.jsx)(y.a,{icon:"eva:arrowhead-left-fill",width:18,height:18})})]})}),Object(w.jsx)(v.a,{item:!0,children:I(d)})]})}var R=a(1825),M=a(1653);function T(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function I(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function N(){var e=Object(u.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1],r=Object(u.useState)([0,1,2,3]),i=Object(b.a)(r,2),c=i[0],o=i[1],l=Object(u.useState)([4,5,6,7]),s=Object(b.a)(l,2),d=s[0],k=s[1],C=I(a,c),S=I(a,d),N=function(e){return function(){var t=a.indexOf(e),r=Object(j.a)(a);-1===t?r.push(e):r.splice(t,1),n(r)}},B=function(e){return I(a,e).length},L=function(e){return function(){var t,r;B(e)===e.length?n(T(a,e)):n((t=a,r=e,[].concat(Object(j.a)(t),Object(j.a)(T(r,t)))))}},z=function(e,t){return Object(w.jsxs)(h.a,{sx:{borderRadius:1.5},children:[Object(w.jsx)(R.a,{avatar:Object(w.jsx)(p.a,{onClick:L(t),checked:B(t)===t.length&&0!==t.length,indeterminate:B(t)!==t.length&&0!==B(t),disabled:0===t.length,inputProps:{"aria-label":"all items selected"}}),title:e,subheader:"".concat(B(t),"/").concat(t.length," selected"),sx:{p:2}}),Object(w.jsx)(M.a,{}),Object(w.jsx)(x.a,{dense:!0,component:"div",role:"list",sx:{width:200,height:220,overflow:"auto"},children:t.map((function(e){var t="transfer-list-all-item-".concat(e,"-label");return Object(w.jsxs)(O.a,{role:"listitem",onClick:N(e),children:[Object(w.jsx)(m.a,{children:Object(w.jsx)(p.a,{checked:-1!==a.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(w.jsx)(f.a,{id:t,primary:"List item ".concat(e+1)})]},e)}))})]})};return Object(w.jsxs)(v.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",p:3},children:[Object(w.jsx)(v.a,{item:!0,children:z("Choices",c)}),Object(w.jsx)(v.a,{item:!0,children:Object(w.jsxs)(v.a,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[Object(w.jsx)(g.a,{color:"inherit",variant:"outlined",size:"small",onClick:function(){k(d.concat(C)),o(T(c,C)),n(T(a,C))},disabled:0===C.length,"aria-label":"move selected right",sx:{my:1},children:Object(w.jsx)(y.a,{icon:"eva:arrow-ios-forward-fill",width:18,height:18})}),Object(w.jsx)(g.a,{color:"inherit",variant:"outlined",size:"small",onClick:function(){o(c.concat(S)),k(T(d,S)),n(T(a,S))},disabled:0===S.length,"aria-label":"move selected left",sx:{my:1},children:Object(w.jsx)(y.a,{icon:"eva:arrow-ios-back-fill",width:18,height:18})})]})}),Object(w.jsx)(v.a,{item:!0,children:z("Chosen",d)})]})}var B={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},L=Object(n.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function z(){return Object(w.jsx)(l.a,{title:"Components: Transfer List",children:Object(w.jsxs)(L,{children:[Object(w.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(w.jsx)(i.a,{children:Object(w.jsx)(s.a,{heading:"Transfer List",links:[{name:"Components",href:o.d.components},{name:"Transfer List"}],moreLink:"https://mui.com/components/transfer-list"})})}),Object(w.jsx)(i.a,{children:Object(w.jsxs)(c.a,{spacing:3,children:[Object(w.jsx)(d.a,{title:"Simple",sx:B,children:Object(w.jsx)(S,{})}),Object(w.jsx)(d.a,{title:"Enhanced",sx:B,children:Object(w.jsx)(N,{})})]})})]})})}}}]);
//# sourceMappingURL=64.54595e74.chunk.js.map
(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[102],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(4),i=n(25),c=n(136),l=n(27),r=n(407),d=n(1824),s=n(269),o=n(1681),j=n(0),b=["links","activeLast"];function x(e){var t,n=e.links,l=e.activeLast,o=void 0!==l&&l,x=Object(i.a)(e,b),O=null===(t=Object(c.last)(n))||void 0===t?void 0:t.name,u=n.map((function(e){return Object(j.jsx)(h,{link:e},e.name)})),m=n.map((function(e){return Object(j.jsx)("div",{children:e.name!==O?Object(j.jsx)(h,{link:e}):Object(j.jsx)(r.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:O})},e.name)}));return Object(j.jsx)(d.a,Object(a.a)(Object(a.a)({separator:Object(j.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},x),{},{children:o?u:m}))}function h(e){var t=e.link,n=t.href,a=t.name,i=t.icon;return Object(j.jsxs)(o.a,{variant:"body2",component:l.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&Object(j.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),a]},a)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(4),i=n(25),c=n(136),l=n(269),r=n(407),d=n(1681),s=n(1819),o=n(0),j=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,x=e.moreLink,h=void 0===x?[]:x,O=e.sx,u=Object(i.a)(e,j);return Object(o.jsxs)(l.a,{sx:Object(a.a)({mb:5},O),children:[Object(o.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(o.jsxs)(l.a,{sx:{flexGrow:1},children:[Object(o.jsx)(r.a,{variant:"h4",gutterBottom:!0,children:b}),Object(o.jsx)(s.a,Object(a.a)({links:t},u))]}),n&&Object(o.jsx)(l.a,{sx:{flexShrink:0},children:n})]}),Object(o.jsx)(l.a,{sx:{mt:2},children:Object(c.isString)(h)?Object(o.jsx)(d.a,{href:h,target:"_blank",rel:"noopener",variant:"body2",children:h}):h.map((function(e){return Object(o.jsx)(d.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var a=n(4),i=n(98),c=n(1009),l=n(1825),r=n(269),d=n(407),s=n(0);function o(e){var t=e.title,n=e.sx,d=e.children;return Object(s.jsxs)(c.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(i.a)(e.palette.grey[500],.04)}},children:[t&&Object(s.jsx)(l.a,{title:t}),Object(s.jsx)(r.a,{sx:Object(a.a)({p:5,minHeight:180},n),children:d})]})}function j(e){var t=e.title;return Object(s.jsx)(d.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2804:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n(10),i=n(4),c=n(12),l=n(98),r=n(269),d=n(1785),s=n(2900),o=n(2880),j=n(2668),b=n(47),x=n(671),h=n(41),O=n(1820),u=n(1823),m=n(0),p=Object(c.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),f=Object(c.a)(s.a)({height:240,flexGrow:1,maxWidth:400}),v=Object(c.a)((function(e){return Object(m.jsx)(o.a,Object(i.a)({},e))}))((function(e){var t,n=e.theme;return t={},Object(a.a)(t,"& .".concat(j.a.iconContainer),{"& .close":{opacity:.3}}),Object(a.a)(t,"& .".concat(j.a.group),{marginLeft:15,paddingLeft:18,borderLeft:"1px dashed ".concat(Object(l.a)(n.palette.text.primary,.4))}),t}));function g(){return Object(m.jsx)(x.a,{title:"Components: Tree View",children:Object(m.jsxs)(p,{children:[Object(m.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(d.a,{children:Object(m.jsx)(O.a,{heading:"Tree View",links:[{name:"Components",href:b.d.components},{name:"Tree View"}],moreLink:"https://mui.com/components/tree-view"})})}),Object(m.jsx)(d.a,{children:Object(m.jsxs)(r.a,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"}},children:[Object(m.jsx)(u.a,{title:"Basic",children:Object(m.jsxs)(f,{defaultCollapseIcon:Object(m.jsx)(h.a,{icon:"eva:chevron-down-fill",width:20,height:20}),defaultExpandIcon:Object(m.jsx)(h.a,{icon:"eva:chevron-right-fill",width:20,height:20}),defaultEndIcon:null,children:[Object(m.jsxs)(o.a,{nodeId:"1",label:"Applications",children:[Object(m.jsx)(o.a,{nodeId:"2",label:"Calendar"}),Object(m.jsx)(o.a,{nodeId:"3",label:"Chrome"}),Object(m.jsx)(o.a,{nodeId:"4",label:"Webstorm"})]}),Object(m.jsxs)(o.a,{nodeId:"5",label:"Documents",children:[Object(m.jsx)(o.a,{nodeId:"10",label:"OSS"}),Object(m.jsx)(o.a,{nodeId:"6",label:"Material-UI",children:Object(m.jsxs)(o.a,{nodeId:"7",label:"src",children:[Object(m.jsx)(o.a,{nodeId:"8",label:"index.js"}),Object(m.jsx)(o.a,{nodeId:"9",label:"tree-view.js"})]})})]})]})}),Object(m.jsx)(u.a,{title:"Multi Select",children:Object(m.jsxs)(f,{multiSelect:!0,defaultCollapseIcon:Object(m.jsx)(h.a,{icon:"eva:chevron-down-fill",width:20,height:20}),defaultExpandIcon:Object(m.jsx)(h.a,{icon:"eva:chevron-right-fill",width:20,height:20}),defaultEndIcon:null,children:[Object(m.jsxs)(o.a,{nodeId:"1",label:"Applications",children:[Object(m.jsx)(o.a,{nodeId:"2",label:"Calendar"}),Object(m.jsx)(o.a,{nodeId:"3",label:"Chrome"}),Object(m.jsx)(o.a,{nodeId:"4",label:"Webstorm"})]}),Object(m.jsx)(o.a,{nodeId:"5",label:"Documents",children:Object(m.jsx)(o.a,{nodeId:"6",label:"Material-UI",children:Object(m.jsxs)(o.a,{nodeId:"7",label:"src",children:[Object(m.jsx)(o.a,{nodeId:"8",label:"index.js"}),Object(m.jsx)(o.a,{nodeId:"9",label:"tree-view.js"})]})})})]})}),Object(m.jsx)(u.a,{title:"Customization",children:Object(m.jsx)(f,{defaultExpanded:["1"],children:Object(m.jsxs)(v,{nodeId:"1",label:"Main",children:[Object(m.jsx)(v,{nodeId:"2",label:"Hello"}),Object(m.jsxs)(v,{nodeId:"3",label:"Subtree with children",children:[Object(m.jsx)(v,{nodeId:"6",label:"Hello"}),Object(m.jsxs)(v,{nodeId:"7",label:"Sub-subtree with children",children:[Object(m.jsx)(v,{nodeId:"9",label:"Child 1"}),Object(m.jsx)(v,{nodeId:"10",label:"Child 2"}),Object(m.jsx)(v,{nodeId:"11",label:"Child 3"})]}),Object(m.jsx)(v,{nodeId:"8",label:"Hello"})]}),Object(m.jsx)(v,{nodeId:"4",label:"World"}),Object(m.jsx)(v,{nodeId:"5",label:"Something something"})]})})})]})})]})})}}}]);
//# sourceMappingURL=102.4dfa378d.chunk.js.map
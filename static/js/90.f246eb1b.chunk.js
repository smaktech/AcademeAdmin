(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[90],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n(4),a=n(25),c=n(136),r=n(27),o=n(407),l=n(1824),s=n(269),j=n(1681),d=n(0),b=["links","activeLast"];function h(e){var t,n=e.links,r=e.activeLast,j=void 0!==r&&r,h=Object(a.a)(e,b),g=null===(t=Object(c.last)(n))||void 0===t?void 0:t.name,O=n.map((function(e){return Object(d.jsx)(x,{link:e},e.name)})),m=n.map((function(e){return Object(d.jsx)("div",{children:e.name!==g?Object(d.jsx)(x,{link:e}):Object(d.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:g})},e.name)}));return Object(d.jsx)(l.a,Object(i.a)(Object(i.a)({separator:Object(d.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},h),{},{children:j?O:m}))}function x(e){var t=e.link,n=t.href,i=t.name,a=t.icon;return Object(d.jsxs)(j.a,{variant:"body2",component:r.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&Object(d.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),i]},i)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(4),a=n(25),c=n(136),r=n(269),o=n(407),l=n(1681),s=n(1819),j=n(0),d=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,h=e.moreLink,x=void 0===h?[]:h,g=e.sx,O=Object(a.a)(e,d);return Object(j.jsxs)(r.a,{sx:Object(i.a)({mb:5},g),children:[Object(j.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(j.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(s.a,Object(i.a)({links:t},O))]}),n&&Object(j.jsx)(r.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(r.a,{sx:{mt:2},children:Object(c.isString)(x)?Object(j.jsx)(l.a,{href:x,target:"_blank",rel:"noopener",variant:"body2",children:x}):x.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return d}));var i=n(4),a=n(98),c=n(1009),r=n(1825),o=n(269),l=n(407),s=n(0);function j(e){var t=e.title,n=e.sx,l=e.children;return Object(s.jsxs)(c.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(a.a)(e.palette.grey[500],.04)}},children:[t&&Object(s.jsx)(r.a,{title:t}),Object(s.jsx)(o.a,{sx:Object(i.a)({p:5,minHeight:180},n),children:l})]})}function d(e){var t=e.title;return Object(s.jsx)(l.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2775:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var i=n(12),a=n(269),c=n(1785),r=n(1777),o=n(407),l=n(1843),s=n(47),j=n(671),d=n(41),b=n(1820),h=n(1823),x=n(0),g=Object(i.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function O(){return Object(x.jsx)(j.a,{title:"Components: Badge",children:Object(x.jsxs)(g,{children:[Object(x.jsx)(a.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(x.jsx)(c.a,{children:Object(x.jsx)(b.a,{heading:"Badge",links:[{name:"Components",href:s.d.components},{name:"Badge"}],moreLink:"https://mui.com/components/badges"})})}),Object(x.jsx)(c.a,{children:Object(x.jsxs)(l.a,{columns:{xs:1,md:2},spacing:3,children:[Object(x.jsxs)(h.a,{title:"Basic",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(x.jsx)(r.a,{badgeContent:4,children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})}),Object(x.jsx)(r.a,{badgeContent:4,color:"primary",children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})}),Object(x.jsx)(r.a,{badgeContent:4,color:"secondary",children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})}),Object(x.jsx)(r.a,{badgeContent:4,color:"info",children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})}),Object(x.jsx)(r.a,{badgeContent:4,color:"success",children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})}),Object(x.jsx)(r.a,{badgeContent:4,color:"warning",children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})}),Object(x.jsx)(r.a,{badgeContent:4,color:"error",children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})})]}),Object(x.jsxs)(h.a,{title:"Maximum value",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(x.jsx)(r.a,{badgeContent:99,color:"error",children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})}),Object(x.jsx)(r.a,{badgeContent:100,color:"error",children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})}),Object(x.jsx)(r.a,{badgeContent:1e3,max:999,color:"error",children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})})]}),Object(x.jsxs)(h.a,{title:"Dot badge",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(x.jsx)(r.a,{color:"info",variant:"dot",children:Object(x.jsx)(d.a,{icon:"eva:email-fill",width:24,height:24})}),Object(x.jsx)(r.a,{color:"info",variant:"dot",children:Object(x.jsx)(o.a,{children:"Typography"})})]}),Object(x.jsxs)(h.a,{title:"Badge overlap",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(x.jsx)(r.a,{color:"info",badgeContent:" ",children:Object(x.jsx)(a.a,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),Object(x.jsx)(r.a,{color:"info",badgeContent:" ",variant:"dot",children:Object(x.jsx)(a.a,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),Object(x.jsx)(r.a,{color:"info",overlap:"circular",badgeContent:" ",children:Object(x.jsx)(a.a,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})}),Object(x.jsx)(r.a,{color:"info",overlap:"circular",badgeContent:" ",variant:"dot",children:Object(x.jsx)(a.a,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})})]})]})})]})})}}}]);
//# sourceMappingURL=90.f246eb1b.chunk.js.map
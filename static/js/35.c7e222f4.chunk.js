(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[35],{1819:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(4),a=r(25),c=r(136),i=r(27),o=r(407),s=r(1824),l=r(269),j=r(1681),u=r(0),d=["links","activeLast"];function b(e){var t,r=e.links,i=e.activeLast,j=void 0!==i&&i,b=Object(a.a)(e,d),h=null===(t=Object(c.last)(r))||void 0===t?void 0:t.name,p=r.map((function(e){return Object(u.jsx)(x,{link:e},e.name)})),O=r.map((function(e){return Object(u.jsx)("div",{children:e.name!==h?Object(u.jsx)(x,{link:e}):Object(u.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:h})},e.name)}));return Object(u.jsx)(s.a,Object(n.a)(Object(n.a)({separator:Object(u.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},b),{},{children:j?p:O}))}function x(e){var t=e.link,r=t.href,n=t.name,a=t.icon;return Object(u.jsxs)(j.a,{variant:"body2",component:i.b,to:r||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&Object(u.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),n]},n)}},1820:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(4),a=r(25),c=r(136),i=r(269),o=r(407),s=r(1681),l=r(1819),j=r(0),u=["links","action","heading","moreLink","sx"];function d(e){var t=e.links,r=e.action,d=e.heading,b=e.moreLink,x=void 0===b?[]:b,h=e.sx,p=Object(a.a)(e,u);return Object(j.jsxs)(i.a,{sx:Object(n.a)({mb:5},h),children:[Object(j.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(j.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:d}),Object(j.jsx)(l.a,Object(n.a)({links:t},p))]}),r&&Object(j.jsx)(i.a,{sx:{flexShrink:0},children:r})]}),Object(j.jsx)(i.a,{sx:{mt:2},children:Object(c.isString)(x)?Object(j.jsx)(s.a,{href:x,target:"_blank",rel:"noopener",variant:"body2",children:x}):x.map((function(e){return Object(j.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1821:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return j}));var n=r(136),a=r(1829),c=r.n(a);function i(e){return c()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function o(e){return c()(e/100).format("0.0%")}function s(e){return c()(e).format()}function l(e){return Object(n.replace)(c()(e).format("0.00a"),".00","")}function j(e){return c()(e).format("0.0 b")}},1854:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(4),a=r(25),c=r(1009),i=r(407),o=r(0),s=["searchQuery"];function l(e){var t=e.searchQuery,r=void 0===t?"":t,l=Object(a.a)(e,s);return Object(o.jsxs)(c.a,Object(n.a)(Object(n.a)({},l),{},{children:[Object(o.jsx)(i.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(o.jsxs)(i.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(o.jsxs)("strong",{children:['"',r,'"']}),". Try checking for typos or using complete words."]})]}))}},1862:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return j})),r.d(t,"g",(function(){return d})),r.d(t,"h",(function(){return x})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return O})),r.d(t,"a",(function(){return f}));var n=r(16),a=r(1002),c=r(1939),i=r(0);function o(){return Object(i.jsx)(a.a,{spacing:8,children:Object(n.a)(Array(5)).map((function(e,t){return Object(i.jsx)(c.a,{variant:"rectangular",sx:{width:1,height:560,borderRadius:2}},t)}))})}var s=r(269);function l(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.a,{width:"100%",height:560,variant:"rectangular",sx:{borderRadius:2}}),Object(i.jsxs)(s.a,{sx:{mt:3,display:"flex",alignItems:"center"},children:[Object(i.jsx)(c.a,{variant:"circular",width:64,height:64}),Object(i.jsxs)(s.a,{sx:{flexGrow:1,ml:2},children:[Object(i.jsx)(c.a,{variant:"text",height:20}),Object(i.jsx)(c.a,{variant:"text",height:20}),Object(i.jsx)(c.a,{variant:"text",height:20})]})]})]})}function j(){return Object(i.jsx)(s.a,{sx:{mt:3,display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"}},children:Object(n.a)(Array(8)).map((function(e,t){return Object(i.jsxs)(s.a,{children:[Object(i.jsx)(c.a,{variant:"rectangular",width:"100%",sx:{height:200,borderRadius:2}}),Object(i.jsxs)(s.a,{sx:{display:"flex",mt:1.5},children:[Object(i.jsx)(c.a,{variant:"circular",sx:{width:40,height:40}}),Object(i.jsx)(c.a,{variant:"text",sx:{mx:1,flexGrow:1}})]})]},t)}))})}var u=r(1781);function d(){return Object(i.jsxs)(u.a,{container:!0,spacing:3,children:[Object(i.jsx)(u.a,{item:!0,xs:12,md:6,lg:7,children:Object(i.jsx)(c.a,{variant:"rectangular",width:"100%",sx:{paddingTop:"100%",borderRadius:2}})}),Object(i.jsxs)(u.a,{item:!0,xs:12,md:6,lg:5,children:[Object(i.jsx)(c.a,{variant:"circular",width:80,height:80}),Object(i.jsx)(c.a,{variant:"text",height:240}),Object(i.jsx)(c.a,{variant:"text",height:40}),Object(i.jsx)(c.a,{variant:"text",height:40}),Object(i.jsx)(c.a,{variant:"text",height:40})]})]})}var b=r(1805);function x(){return Object(i.jsxs)(b.a,{children:[Object(i.jsx)(c.a,{variant:"rectangular",sx:{paddingTop:"100%"}}),Object(i.jsxs)(a.a,{spacing:2,sx:{p:3},children:[Object(i.jsx)(c.a,{variant:"text",sx:{width:.5}}),Object(i.jsxs)(a.a,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(i.jsxs)(a.a,{direction:"row",children:[Object(i.jsx)(c.a,{variant:"circular",sx:{width:16,height:16}}),Object(i.jsx)(c.a,{variant:"circular",sx:{width:16,height:16}}),Object(i.jsx)(c.a,{variant:"circular",sx:{width:16,height:16}})]}),Object(i.jsx)(c.a,{variant:"text",sx:{width:40}})]})]})]})}var h=r(1009);function p(){return Object(i.jsx)(s.a,{sx:{display:"grid",gap:3,gridTemplateColumns:"repeat(4, 1fr)"},children:Object(n.a)(Array(3)).map((function(e,t){return Object(i.jsx)(h.a,{variant:"outlined",sx:{p:2.5,width:310},children:Object(i.jsxs)(a.a,{spacing:2,children:[Object(i.jsx)(c.a,{variant:"rectangular",sx:{paddingTop:"75%",borderRadius:1.5}}),0===t&&Object(i.jsx)(c.a,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}}),2!==t&&Object(i.jsx)(c.a,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}})]})},t)}))})}function O(){return Object(i.jsxs)(a.a,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1},children:[Object(i.jsx)(c.a,{variant:"circular",width:32,height:32}),Object(i.jsx)(c.a,{variant:"text",sx:{width:.25,height:16}})]})}function f(){return Object(i.jsxs)(a.a,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1.5},children:[Object(i.jsx)(c.a,{variant:"circular",width:48,height:48}),Object(i.jsxs)(a.a,{spacing:.5,sx:{flexGrow:1},children:[Object(i.jsx)(c.a,{variant:"text",sx:{width:.5,height:16}}),Object(i.jsx)(c.a,{variant:"text",sx:{width:.25,height:12}})]})]})}},2037:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(4),a=r(25),c=r(12),i=r(98),o=r(269),s=r(407),l=r(0),j=["colors","limit"],u=Object(c.a)(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"}),d=Object(c.a)("div")((function(e){var t=e.theme;return{marginLeft:-4,borderRadius:"50%",width:t.spacing(2),height:t.spacing(2),border:"solid 2px ".concat(t.palette.background.paper),boxShadow:"inset -1px 1px 2px ".concat(Object(i.a)(t.palette.common.black,.24))}}));function b(e){var t=e.colors,r=e.limit,c=void 0===r?3:r,i=Object(a.a)(e,j),o=t.slice(0,c),b=t.length-c;return Object(l.jsxs)(u,Object(n.a)(Object(n.a)({component:"span"},i),{},{children:[o.map((function(e,t){return Object(l.jsx)(d,{sx:{bgcolor:e}},e+t)})),t.length>c&&Object(l.jsx)(s.a,{variant:"subtitle2",children:"+".concat(b)})]}))}},2040:function(e,t,r){"use strict";function n(e){var t;switch(e){case"#00AB55":t="Green";break;case"#000000":t="Black";break;case"#FFFFFF":t="White";break;case"#FFC0CB":t="Pink";break;case"#FF4842":t="Red";break;case"#1890FF":t="Blue";break;case"#94D82D":t="Greenyellow";break;case"#FFC107":t="Orange";break;default:t=e}return t}r.d(t,"a",(function(){return n}))},2041:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(136),a=r(27),c=r(12),i=r(1777),o=r(29),s=r(47),l=r(41),j=r(0),u=Object(c.a)(a.b)((function(e){var t=e.theme;return{zIndex:999,right:0,display:"flex",cursor:"pointer",position:"fixed",alignItems:"center",top:t.spacing(16),height:t.spacing(5),paddingLeft:t.spacing(2),paddingRight:t.spacing(2),paddingTop:t.spacing(1.25),boxShadow:t.customShadows.z20,color:t.palette.text.primary,backgroundColor:t.palette.background.paper,borderTopLeftRadius:2*Number(t.shape.borderRadius),borderBottomLeftRadius:2*Number(t.shape.borderRadius),transition:t.transitions.create("opacity"),"&:hover":{opacity:.72}}}));function d(){var e=Object(o.e)((function(e){return e.product})).checkout,t=Object(n.sum)(e.cart.map((function(e){return e.quantity})));return Object(j.jsx)(u,{to:s.b.classes.checkout,children:Object(j.jsx)(i.a,{showZero:!0,badgeContent:t,color:"error",max:99,children:Object(j.jsx)(l.a,{icon:"eva:shopping-cart-fill",width:24,height:24})})})}},2844:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Be}));var n=r(8),a=r.n(n),c=r(15),i=r(3),o=r(243),s=r(1),l=r(136),j=r(1679),u=r(1804),d=r(1785),b=r(1002),x=r(407),h=r(29),p=r(677),O=r(47),f=r(137),g=r(671),m=r(1820),v=r(4),w=r(1911),y=r(12),k=r(68),F=r(2263),C=r(544),R=r(2040),S=r(41),I=r(0),B=Object(y.a)("div")({flexGrow:1,display:"flex",flexWrap:"wrap",alignItems:"center"}),A=Object(y.a)("div")((function(e){var t=e.theme;return{display:"flex",overflow:"hidden",alignItems:"stretch",margin:t.spacing(.5),borderRadius:t.shape.borderRadius,border:"solid 1px ".concat(t.palette.divider)}})),D=Object(y.a)((function(e){return Object(I.jsx)(x.a,Object(v.a)({component:"span",variant:"subtitle2"},e))}))((function(e){var t=e.theme;return{display:"flex",alignItems:"center",padding:t.spacing(0,1),color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,borderRight:"solid 1px ".concat(t.palette.divider)}}));function P(e){var t,r=e.formik,n=e.filters,a=e.isShowReset,c=e.onResetFilter,i=e.isDefault,o=Object(k.a)(),s=r.values,j=r.handleSubmit,u=r.setFieldValue,d=r.initialValues,x=n.gender,h=n.category,p=n.colors,O=n.priceRange,f=n.rating,g=s!==d&&!a;return Object(I.jsxs)(B,{children:[x.length>0&&Object(I.jsxs)(A,{children:[Object(I.jsx)(D,{children:"Gender:"}),Object(I.jsx)(b.a,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:x.map((function(e){return Object(I.jsx)(F.a,{label:e,size:"small",onDelete:function(){return function(e){var t=Object(l.filter)(x,(function(t){return t!==e}));j(),u("gender",t)}(e)},sx:{m:.5}},e)}))})]}),"All"!==h&&Object(I.jsxs)(A,{children:[Object(I.jsx)(D,{children:"Category:"}),Object(I.jsx)(b.a,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:Object(I.jsx)(F.a,{size:"small",label:h,onDelete:function(){j(),u("category","All")},sx:{m:.5}})})]}),p.length>0&&Object(I.jsxs)(A,{children:[Object(I.jsx)(D,{children:"Colors:"}),Object(I.jsx)(b.a,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:p.map((function(e){return Object(I.jsx)(F.a,{label:Object(R.a)(e),size:"small",onDelete:function(){return function(e){var t=Object(l.filter)(p,(function(t){return t!==e}));j(),u("colors",t)}(e)},sx:Object(v.a)({m:.5,bgcolor:e,color:o.palette.getContrastText(e)},("#FFFFFF"===e||"#000000"===e)&&{border:"solid 1px ".concat(o.palette.grey[50032]),"& .MuiChip-deleteIcon":{color:"text.disabled"}})},e)}))})]}),O&&Object(I.jsxs)(A,{children:[Object(I.jsx)(D,{children:"Price:"}),Object(I.jsx)(b.a,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:Object(I.jsx)(F.a,{size:"small",label:(t=O,"below"===t?"Below $25":"between"===t?"Between $25 - $75":"Above $75"),onDelete:function(){j(),u("priceRange","")},sx:{m:.5}})})]}),f&&Object(I.jsxs)(A,{children:[Object(I.jsx)(D,{children:"Rating:"}),Object(I.jsx)(b.a,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:Object(I.jsx)(F.a,{size:"small",label:Object(w.a)(f),onDelete:function(){j(),u("rating","")},sx:{m:.5}})})]}),g&&!i&&Object(I.jsx)(C.a,{color:"error",size:"small",type:"button",onClick:c,startIcon:Object(I.jsx)(S.a,{icon:"ic:round-clear-all"}),children:"Clear All"})]})}var z=r(1908),T=r(27),W=r(1805),L=r(269),$=r(1681),G=r(1821),M=r(545),N=r(349),E=r(2037);function H(e){var t=e.product,r=t.name,n=t.cover,a=t.price,c=t.colors,i=t.status,o=t.priceSale,s="".concat(O.b.classes.root,"/product/").concat(Object(z.a)(r));return Object(I.jsxs)(W.a,{children:[Object(I.jsxs)(L.a,{sx:{position:"relative"},children:[i&&Object(I.jsx)(M.a,{variant:"filled",color:"sale"===i?"error":"info",sx:{top:16,right:16,zIndex:9,position:"absolute",textTransform:"uppercase"},children:i}),Object(I.jsx)(N.a,{alt:r,src:n,ratio:"1/1"})]}),Object(I.jsxs)(b.a,{spacing:2,sx:{p:3},children:[Object(I.jsx)($.a,{to:s,color:"inherit",component:T.b,children:Object(I.jsx)(x.a,{variant:"subtitle2",noWrap:!0,children:r})}),Object(I.jsxs)(b.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(I.jsx)(E.a,{colors:c}),Object(I.jsxs)(x.a,{variant:"subtitle1",children:[Object(I.jsx)(x.a,{component:"span",variant:"body1",sx:{color:"text.disabled",textDecoration:"line-through"},children:o&&Object(G.a)(o)}),"\xa0",Object(G.a)(a)]})]})]})]})}var V=r(16),q=r(1862);function Q(e){var t=e.products,r=e.isDefault,n=!t.length&&r;return Object(I.jsx)(L.a,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"}},children:(n?Object(V.a)(Array(12)):t).map((function(e,t){return e?Object(I.jsx)(H,{product:e},e.id):Object(I.jsx)(q.h,{},t)}))})}var J=r(998),_=r(1796),K=[{value:"featured",label:"Featured"},{value:"newest",label:"Newest"},{value:"priceDesc",label:"Price: High-Low"},{value:"priceAsc",label:"Price: Low-High"}];function U(){var e,t=Object(h.d)(),r=Object(s.useState)(null),n=Object(i.a)(r,2),a=n[0],c=n[1],o=Object(h.e)((function(e){return e.product})).sortBy,l=function(){c(null)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(C.a,{color:"inherit",disableRipple:!0,onClick:function(e){return t=e.currentTarget,void c(t);var t},endIcon:Object(I.jsx)(S.a,{icon:a?"eva:chevron-up-fill":"eva:chevron-down-fill"}),children:["Sort By:\xa0",Object(I.jsx)(x.a,{component:"span",variant:"subtitle2",sx:{color:"text.secondary"},children:(e=o,"featured"===e?"Featured":"newest"===e?"Newest":"priceDesc"===e?"Price: High-Low":"Price: Low-High")})]}),Object(I.jsx)(J.a,{keepMounted:!0,anchorEl:a,open:Boolean(a),onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:K.map((function(e){return Object(I.jsx)(_.a,{selected:e.value===o,onClick:function(){return r=e.value,l(),void t(Object(p.q)(r));var r},sx:{typography:"body2"},children:e.label},e.value)}))})]})}var Z=r(1792),X=r(1682),Y=r(1653),ee=r(1685),te=r(1803),re=r(1774),ne=r(1763),ae=r(1772),ce=r(1962),ie=r(203),oe=r(25),se=["colors","onChecked","sx"],le=["sx"];function je(e){var t=e.colors,r=e.onChecked,n=e.sx,a=Object(oe.a)(e,se);return Object(I.jsx)(L.a,{sx:n,children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return Object(I.jsx)(re.a,Object(v.a)({size:"small",value:e,color:"default",checked:r(e),icon:Object(I.jsx)(ue,{sx:Object(v.a)({},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)}})}),checkedIcon:Object(I.jsx)(ue,{sx:Object(v.a)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat(e.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:e,"&:hover":{opacity:.72}}},a),e)}))})}function ue(e){var t=e.sx,r=Object(oe.a)(e,le);return Object(I.jsx)(L.a,Object(v.a)(Object(v.a)({sx:Object(v.a)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},t)},r),{},{children:Object(I.jsx)(S.a,{icon:"eva:checkmark-fill"})}))}var de=["Men","Women","Kids"],be=["All","Shose","Apparel","Accessories"],xe=["up4Star","up3Star","up2Star","up1Star"],he=[{value:"below",label:"Below $25"},{value:"between",label:"Between $25 - $75"},{value:"above",label:"Above $75"}],pe=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"];function Oe(e){var t=e.isOpenFilter,r=e.onResetFilter,n=e.onOpenFilter,a=e.onCloseFilter,c=e.formik,i=c.values,s=c.getFieldProps,l=c.handleChange;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(C.a,{disableRipple:!0,color:"inherit",endIcon:Object(I.jsx)(S.a,{icon:"ic:round-filter-list"}),onClick:n,children:"Filters\xa0"}),Object(I.jsx)(o.b,{value:c,children:Object(I.jsx)(o.a,{autoComplete:"off",noValidate:!0,children:Object(I.jsxs)(Z.a,{anchor:"right",open:t,onClose:a,PaperProps:{sx:{width:280,border:"none",overflow:"hidden"}},children:[Object(I.jsxs)(b.a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:1,py:2},children:[Object(I.jsx)(x.a,{variant:"subtitle1",sx:{ml:1},children:"Filters"}),Object(I.jsx)(X.a,{onClick:a,children:Object(I.jsx)(S.a,{icon:"eva:close-fill",width:20,height:20})})]}),Object(I.jsx)(Y.a,{}),Object(I.jsx)(ie.a,{children:Object(I.jsxs)(b.a,{spacing:3,sx:{p:3},children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(x.a,{variant:"subtitle1",gutterBottom:!0,children:"Gender"}),Object(I.jsx)(ee.a,{children:de.map((function(e){return Object(I.jsx)(te.a,{control:Object(I.jsx)(re.a,Object(v.a)(Object(v.a)({},s("gender")),{},{value:e,checked:i.gender.includes(e)})),label:e},e)}))})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(x.a,{variant:"subtitle1",gutterBottom:!0,children:"Category"}),Object(I.jsx)(ne.a,Object(v.a)(Object(v.a)({},s("category")),{},{children:be.map((function(e){return Object(I.jsx)(te.a,{value:e,control:Object(I.jsx)(ae.a,{}),label:e},e)}))}))]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(x.a,{variant:"subtitle1",gutterBottom:!0,children:"Colour"}),Object(I.jsx)(je,{name:"colors",colors:pe,onChange:l,onChecked:function(e){return i.colors.includes(e)},sx:{maxWidth:144}})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(x.a,{variant:"subtitle1",gutterBottom:!0,children:"Price"}),Object(I.jsx)(ne.a,Object(v.a)(Object(v.a)({},s("priceRange")),{},{children:he.map((function(e){return Object(I.jsx)(te.a,{value:e.value,control:Object(I.jsx)(ae.a,{}),label:e.label},e.value)}))}))]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(x.a,{variant:"subtitle1",gutterBottom:!0,children:"Rating"}),Object(I.jsx)(ne.a,Object(v.a)(Object(v.a)({},s("rating")),{},{children:xe.map((function(e,t){return Object(I.jsx)(te.a,{value:e,control:Object(I.jsx)(ae.a,{disableRipple:!0,color:"default",icon:Object(I.jsx)(ce.a,{readOnly:!0,value:4-t}),checkedIcon:Object(I.jsx)(ce.a,{readOnly:!0,value:4-t}),sx:{"&:hover":{bgcolor:"transparent"}}}),label:"& Up",sx:Object(v.a)({my:.5,borderRadius:1,"&:hover":{opacity:.48}},i.rating.includes(e)&&{bgcolor:"action.selected"})},e)}))}))]})]})}),Object(I.jsx)(L.a,{sx:{p:3},children:Object(I.jsx)(C.a,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"outlined",onClick:r,startIcon:Object(I.jsx)(S.a,{icon:"ic:round-clear-all"}),children:"Clear All"})})]})})})]})}var fe=r(1892),ge=r.n(fe),me=r(1893),ve=r.n(me),we=r(2878),ye=r(1798),ke=r(1795),Fe=r(64),Ce=r(1854),Re=Object(y.a)("div")((function(e){var t=e.theme;return{"& .MuiAutocomplete-root":{width:200,transition:t.transitions.create("width",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:240,"& .MuiAutocomplete-inputRoot":{boxShadow:t.customShadows.z12}}},"& .MuiAutocomplete-inputRoot":{"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}},"& .MuiAutocomplete-option":{"&:not(:last-of-type)":{borderBottom:"solid 1px ".concat(t.palette.divider)}}}}));function Se(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),r=t[0],n=t[1],o=Object(s.useState)([]),l=Object(i.a)(o,2),j=l[0],u=l[1],d=function(e){return"".concat(O.b.classes.root,"/product/").concat(Object(z.a)(e))},b=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n(t),!t){e.next=9;break}return e.next=5,Fe.a.get("/api/products/search",{params:{query:t}});case 5:r=e.sent,u(r.data.results),e.next=10;break;case 9:u([]);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(Re,{sx:Object(v.a)({},!r&&{"& .MuiAutocomplete-noOptions":{display:"none"}}),children:Object(I.jsx)(we.a,{size:"small",disablePortal:!0,popupIcon:null,options:j,onInputChange:function(e,t){return b(t)},getOptionLabel:function(e){return e.name},noOptionsText:Object(I.jsx)(Ce.a,{searchQuery:r}),renderInput:function(e){return Object(I.jsx)(ye.a,Object(v.a)(Object(v.a)({},e),{},{placeholder:"Search product...",InputProps:Object(v.a)(Object(v.a)({},e.InputProps),{},{startAdornment:Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ke.a,{position:"start",children:Object(I.jsx)(S.a,{icon:"eva:search-fill",sx:{ml:1,width:20,height:20,color:"text.disabled"}})}),e.InputProps.startAdornment]})})}))},renderOption:function(e,t,r){var n=r.inputValue,a=t.name,c=ve()(a,n),i=ge()(a,c);return Object(I.jsx)("li",Object(v.a)(Object(v.a)({},e),{},{children:Object(I.jsx)($.a,{to:d(a),component:T.b,underline:"none",children:i.map((function(e,t){return Object(I.jsx)(x.a,{component:"span",variant:"subtitle2",color:e.highlight?"primary":"textPrimary",children:e.text},t)}))})}))}})})}var Ie=r(2041);function Be(){var e=Object(f.a)().themeStretch,t=Object(h.d)(),r=Object(s.useState)(!1),n=Object(i.a)(r,2),v=n[0],w=n[1],y=Object(h.e)((function(e){return e.product})),k=y.products,F=y.sortBy,C=y.filters,R=function(e,t,r){"featured"===t&&(e=Object(l.orderBy)(e,["sold"],["desc"]));"newest"===t&&(e=Object(l.orderBy)(e,["createdAt"],["desc"]));"priceDesc"===t&&(e=Object(l.orderBy)(e,["price"],["desc"]));"priceAsc"===t&&(e=Object(l.orderBy)(e,["price"],["asc"]));r.gender.length>0&&(e=Object(l.filter)(e,(function(e){return Object(l.includes)(r.gender,e.gender)})));"All"!==r.category&&(e=Object(l.filter)(e,(function(e){return e.category===r.category})));r.colors.length>0&&(e=Object(l.filter)(e,(function(e){return e.colors.some((function(e){return r.colors.includes(e)}))})));r.priceRange&&(e=Object(l.filter)(e,(function(e){return"below"===r.priceRange?e.price<25:"between"===r.priceRange?e.price>=25&&e.price<=75:e.price>75})));r.rating&&(e=Object(l.filter)(e,(function(e){var t=function(e){return"up4Star"===e?4:"up3Star"===e?3:"up2Star"===e?2:1};return e.totalRating>t(r.rating)})));return e}(k,F,C),S=Object(o.d)({initialValues:{gender:C.gender,category:C.category,colors:C.colors,priceRange:C.priceRange,rating:C.rating},onSubmit:function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.setSubmitting,e.prev=1,e.next=4,new Promise((function(e){return setTimeout(e,500)}));case 4:n(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),n(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()}),B=S.values,A=S.resetForm,D=S.handleSubmit,z=S.isSubmitting,T=!B.priceRange&&!B.rating&&0===B.gender.length&&0===B.colors.length&&"All"===B.category;Object(s.useEffect)((function(){t(Object(p.k)())}),[t]),Object(s.useEffect)((function(){t(Object(p.h)(B))}),[t,B]);var W=function(){D(),A()};return Object(I.jsxs)(g.a,{title:"Ecommerce: Shop",children:[B&&Object(I.jsx)(j.a,{open:z,sx:{zIndex:9999},children:Object(I.jsx)(u.a,{})}),Object(I.jsxs)(d.a,{maxWidth:!e&&"lg",children:[Object(I.jsx)(m.a,{heading:"Shop",links:[{name:"Dashboard",href:O.b.root},{name:"E-Commerce",href:O.b.classes.root},{name:"Shop"}]}),Object(I.jsxs)(b.a,{spacing:2,direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:"space-between",sx:{mb:2},children:[Object(I.jsx)(Se,{}),Object(I.jsxs)(b.a,{direction:"row",spacing:1,flexShrink:0,sx:{my:1},children:[Object(I.jsx)(Oe,{formik:S,isOpenFilter:v,onResetFilter:W,onOpenFilter:function(){w(!0)},onCloseFilter:function(){w(!1)}}),Object(I.jsx)(U,{})]})]}),Object(I.jsx)(b.a,{sx:{mb:3},children:!T&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(x.a,{variant:"body2",gutterBottom:!0,children:[Object(I.jsx)("strong",{children:R.length}),"\xa0Products found"]}),Object(I.jsx)(P,{filters:C,formik:S,isShowReset:v,onResetFilter:W,isDefault:T})]})}),Object(I.jsx)(Q,{products:R,isDefault:T}),Object(I.jsx)(Ie.a,{})]})]})}}}]);
//# sourceMappingURL=35.c7e222f4.chunk.js.map
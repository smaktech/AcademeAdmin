(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[42],{1821:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return j}));var n=a(136),r=a(1829),i=a.n(r);function c(e){return i()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function o(e){return i()(e/100).format("0.0%")}function s(e){return i()(e).format()}function l(e){return Object(n.replace)(i()(e).format("0.00a"),".00","")}function j(e){return i()(e).format("0.0 b")}},1836:function(e,t,a){"use strict";function n(e){return e.charAt(0).toUpperCase()+e.substr(1)}a.d(t,"a",(function(){return n}))},1840:function(e,t,a){"use strict";a.d(t,"c",(function(){return j})),a.d(t,"b",(function(){return g})),a.d(t,"a",(function(){return S}));var n=a(4),r=a(12),i=a(269),c=a(0),o=Object(r.a)(i.a,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":Object(n.a)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),s=Object(r.a)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),l=Object(r.a)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function j(e){var t=null===e||void 0===e?void 0:e.color,a=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o,Object(n.a)(Object(n.a)({rounded:a,component:"ul"},e),{},{children:t}))})},customPaging:function(){return Object(c.jsx)(s,{children:Object(c.jsx)(l,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var d=a(25),b=a(68),h=a(1002),u=a(41),x=a(78),O=["filled","customIcon","onNext","onPrevious","children"],p=Object(r.a)(x.c,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,a=e.theme;return Object(n.a)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:a.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(a.shape.borderRadius),color:a.palette.common.white,backgroundColor:a.palette.grey[900],"&:hover":{opacity:1,color:a.palette.common.white,backgroundColor:a.palette.grey[900]}})}));function g(e){var t=e.filled,a=void 0!==t&&t,r=e.customIcon,o=e.onNext,s=e.onPrevious,l=e.children,j=Object(d.a)(e,O),u="rtl"===Object(b.a)().direction,x={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return l?Object(c.jsxs)(i.a,Object(n.a)(Object(n.a)({},j),{},{children:[Object(c.jsx)(i.a,{className:"arrow left",sx:Object(n.a)(Object(n.a)({},x),{},{left:0}),children:Object(c.jsx)(p,{filled:a,onClick:s,children:f(r,u)})}),l,Object(c.jsx)(i.a,{className:"arrow right",sx:Object(n.a)(Object(n.a)({},x),{},{right:0}),children:Object(c.jsx)(p,{filled:a,onClick:o,children:m(r,u)})})]})):Object(c.jsxs)(h.a,Object(n.a)(Object(n.a)({direction:"row",spacing:1},j),{},{children:[Object(c.jsx)(p,{className:"arrow left",filled:a,onClick:s,children:f(r,u)}),Object(c.jsx)(p,{className:"arrow right",filled:a,onClick:o,children:m(r,u)})]}))}var f=function(e,t){return Object(c.jsx)(u.a,{icon:e||"eva:arrow-right-fill",sx:Object(n.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},m=function(e,t){return Object(c.jsx)(u.a,{icon:e||"eva:arrow-right-fill",sx:Object(n.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},v=a(98),y=a(1682),w=a(407),C=["index","total","onNext","onPrevious","customIcon"],k=Object(r.a)(i.a)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:Object(v.a)(t.palette.grey[900],.48)}})),I=Object(r.a)(y.a)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function S(e){var t=e.index,a=e.total,r=e.onNext,i=e.onPrevious,o=e.customIcon,s=Object(d.a)(e,C),l="rtl"===Object(b.a)().direction;return Object(c.jsxs)(k,Object(n.a)(Object(n.a)({},s),{},{children:[Object(c.jsx)(I,{size:"small",onClick:i,children:R(o,l)}),Object(c.jsxs)(w.a,{variant:"subtitle2",children:[t+1,"/",a]}),Object(c.jsx)(I,{size:"small",onClick:r,children:D(o,l)})]}))}var R=function(e,t){return Object(c.jsx)(u.a,{icon:e||"eva:arrow-right-fill",sx:Object(n.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},D=function(e,t){return Object(c.jsx)(u.a,{icon:e||"eva:arrow-right-fill",sx:Object(n.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},1874:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(179),r=a(192);function i(e){return Object(n.a)("MuiDialogTitle",e)}var c=Object(r.a)("MuiDialogTitle",["root"]);t.a=c},1911:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(22),r=a(1688),i=a(1836);function c(e,t){var a=e.toLowerCase();return 0===t?Object(i.a)(a):a}function o(e,t){return void 0===t&&(t={}),Object(r.a)(e,Object(n.a)({delimiter:" ",transform:c},t))}},1940:function(e,t,a){"use strict";var n=a(13),r=a(2),i=a(1),c=(a(7),a(5)),o=a(300),s=a(12),l=a(18),j=a(179),d=a(192);function b(e){return Object(j.a)("MuiDialogActions",e)}Object(d.a)("MuiDialogActions",["root","spacing"]);var h=a(0),u=["className","disableSpacing"],x=Object(s.a)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),O=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiDialogActions"}),i=a.className,s=a.disableSpacing,j=void 0!==s&&s,d=Object(n.a)(a,u),O=Object(r.a)({},a,{disableSpacing:j}),p=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(o.a)(a,b,t)}(O);return Object(h.jsx)(x,Object(r.a)({className:Object(c.a)(p.root,i),ownerState:O,ref:t},d))}));t.a=O},2039:function(e,t,a){"use strict";var n=a(2),r=a(13),i=a(1),c=(a(7),a(5)),o=a(300),s=a(407),l=a(12),j=a(18),d=a(1874),b=a(686),h=a(0),u=["className","id"],x=Object(l.a)(s.a,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),O=i.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiDialogTitle"}),s=a.className,l=a.id,O=Object(r.a)(a,u),p=a,g=function(e){var t=e.classes;return Object(o.a)({root:["root"]},d.b,t)}(p),f=i.useContext(b.a).titleId,m=void 0===f?l:f;return Object(h.jsx)(x,Object(n.a)({component:"h2",className:Object(c.a)(g.root,s),ownerState:p,ref:t,variant:"h6",id:m},O))}));t.a=O},2842:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Me}));var n=a(1785),r=a(1781),i=a(1002),c=a(137),o=a(671),s=a(1805),l=a(1825),j=a(1678),d=a(1682),b=a(1010),h=a(269),u=a(407),x=a(544),O=a(350),p=a(41),g=a(0);function f(){return Object(g.jsxs)(s.a,{children:[Object(g.jsx)(l.a,{title:"Contacts",subheader:"You have 122 contacts",action:Object(g.jsx)(j.a,{title:"Add Contact",children:Object(g.jsx)(d.a,{color:"primary",size:"large",children:Object(g.jsx)(p.a,{icon:"eva:plus-fill",width:20,height:20})})})}),Object(g.jsxs)(i.a,{spacing:3,sx:{p:3},children:[O.k.map((function(e){return Object(g.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(g.jsx)(b.a,{src:e.avatar,sx:{width:48,height:48}}),Object(g.jsxs)(h.a,{sx:{flexGrow:1,ml:2,minWidth:100},children:[Object(g.jsx)(u.a,{variant:"subtitle2",sx:{mb:.5},noWrap:!0,children:e.name}),Object(g.jsx)(u.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:e.email})]}),Object(g.jsx)(j.a,{title:"Quick Transfer",children:Object(g.jsx)(d.a,{size:"small",children:Object(g.jsx)(p.a,{icon:"eva:flash-fill",width:22,height:22})})})]},e.id)})),Object(g.jsx)(x.a,{variant:"outlined",size:"large",color:"inherit",children:"View All"})]})]})}var m=a(25),v=a(4),y=a(3),w=a(1853),C=a.n(w),k=a(1),I=a(27),S=a(12),R=a(68),D=a(1681),z=a(1779),N=a(1745),W=a(1744),A=a(2039),M=a(1798),T=a(1940),P=a(1821),B=a(1840),E=["autoWidth","amount","onBlur","onChange","sx"],F=1e3,X=Object(S.a)(s.a)((function(e){return{boxShadow:"none",backgroundColor:e.theme.palette.background.neutral}}));function $(){var e=Object(R.a)(),t=Object(k.useRef)(null),a=Object(k.useState)(24),n=Object(y.a)(a,2),r=n[0],c=n[1],o=Object(k.useState)(!1),s=Object(y.a)(o,2),d=s[0],p=s[1],f=Object(k.useState)(0),m=Object(y.a)(f,2),w=m[0],S=m[1],N=Object(k.useState)(0),W=Object(y.a)(N,2),A=W[0],M=W[1],T=O.m.find((function(e,t){return t===w})),E={dots:!1,arrows:!1,slidesToShow:7,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,centerPadding:"0px",rtl:Boolean("rtl"===e.direction),beforeChange:function(e,t){return S(t)},responsive:[{breakpoint:e.breakpoints.values.xl,settings:{slidesToShow:5}}]};Object(k.useEffect)((function(){A&&$()}),[A]);var $=function(){var e=A.toString().length;c(22*e)},Y=function(e){M(""===e.target.value?"":Number(e.target.value))},_=function(){A<0?M(0):A>F&&M(F)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(X,{children:[Object(g.jsx)(l.a,{title:"Quick Transfer"}),Object(g.jsxs)(h.a,{sx:{p:3},children:[Object(g.jsxs)(i.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(g.jsx)(u.a,{variant:"overline",sx:{color:"text.secondary"},children:"Recent"}),Object(g.jsx)(D.a,{component:I.b,to:"#",sx:{typography:"button"},children:"View All"})]}),Object(g.jsx)(h.a,{sx:{position:"relative"},children:Object(g.jsx)(B.b,{filled:!0,onPrevious:function(){var e;null===(e=t.current)||void 0===e||e.slickPrev()},onNext:function(){var e;null===(e=t.current)||void 0===e||e.slickNext()},customIcon:"eva:arrow-ios-forward-fill",sx:{"& .arrow":{mt:"-14px","&.left":{left:-16},"&.right":{right:-16},"& button":{width:28,height:28,borderRadius:"50%",p:.75}}},children:Object(g.jsx)(C.a,Object(v.a)(Object(v.a)({ref:t},E),{},{children:O.m.map((function(e,t){return Object(g.jsx)(h.a,{sx:{py:5},children:Object(g.jsx)(h.a,{sx:{width:40,height:40},children:Object(g.jsx)(j.a,{title:e.name,arrow:!0,placement:"top",children:Object(g.jsx)(b.a,{src:e.avatar,sx:Object(v.a)({opacity:.48,cursor:"pointer",transition:function(e){return e.transitions.create("all")}},w===t&&{opacity:1,transform:"scale(1.25)",boxShadow:"-4px 12px 24px 0 rgb(0,0,0,0.24)"})})},e.id)})},e.id)}))}))})}),Object(g.jsxs)(i.a,{spacing:3,children:[Object(g.jsx)(u.a,{variant:"overline",sx:{color:"text.secondary"},children:"insert amount"}),Object(g.jsx)(J,{onBlur:_,onChange:Y,autoWidth:r,amount:A}),Object(g.jsx)(z.a,{value:"number"===typeof A?A:0,valueLabelDisplay:"auto",step:50,marks:!0,min:0,max:F,onChange:function(e,t){M(t)}}),Object(g.jsxs)(i.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(g.jsx)(u.a,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Your Balance"}),Object(g.jsx)(u.a,{variant:"subtitle1",children:Object(P.a)(34212)})]}),Object(g.jsx)(x.a,{variant:"contained",size:"large",disabled:0===A,onClick:function(){p(!0)},children:"Transfer Now"})]})]})]}),Object(g.jsx)(V,{open:d,autoWidth:r,amount:A,contactInfo:T,onClose:function(){p(!1)},onBlur:_,onChange:Y})]})}function J(e){var t=e.autoWidth,a=e.amount,n=e.onBlur,r=e.onChange,c=e.sx,o=Object(m.a)(e,E);return Object(g.jsxs)(i.a,{direction:"row",justifyContent:"center",spacing:1,sx:c,children:[Object(g.jsx)(u.a,{variant:"h5",children:"$"}),Object(g.jsx)(N.a,Object(v.a)({disableUnderline:!0,size:"small",value:a,onChange:r,onBlur:n,inputProps:{step:50,min:0,max:F,type:"number"},sx:{typography:"h3","& input":{p:0,textAlign:"center",width:t}}},o))]})}function V(e){var t=e.open,a=e.amount,n=e.autoWidth,r=e.contactInfo,c=e.onClose,o=e.onBlur,s=e.onChange;return Object(g.jsxs)(W.a,{open:t,fullWidth:!0,maxWidth:"xs",onClose:c,children:[Object(g.jsx)(A.a,{children:"Transfer to"}),Object(g.jsxs)(i.a,{spacing:3,sx:{p:3,pb:0},children:[Object(g.jsxs)(i.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(g.jsx)(b.a,{src:null===r||void 0===r?void 0:r.avatar,sx:{width:48,height:48}}),Object(g.jsxs)("div",{children:[Object(g.jsx)(u.a,{variant:"subtitle2",children:null===r||void 0===r?void 0:r.name}),Object(g.jsx)(u.a,{variant:"body2",sx:{color:"text.secondary"},children:null===r||void 0===r?void 0:r.email})]})]}),Object(g.jsx)(J,{onBlur:o,onChange:s,autoWidth:n,amount:a,disableUnderline:!1,sx:{justifyContent:"flex-end"}}),Object(g.jsx)(M.a,{fullWidth:!0,multiline:!0,rows:2,placeholder:"Write a message..."})]}),Object(g.jsxs)(T.a,{children:[Object(g.jsx)(x.a,{variant:"contained",disabled:0===a,onClick:c,children:"Confirm & Transfer"}),Object(g.jsx)(x.a,{onClick:c,children:"Cancel"})]})]})}var Y=a(98),_=a(1799),H=a(349),L=Object(S.a)(s.a)((function(e){var t=e.theme;return{marginTop:-120,boxShadow:"none",padding:t.spacing(5),paddingTop:t.spacing(16),color:t.palette.common.white,backgroundImage:"linear-gradient(135deg,\n    ".concat(t.palette.primary.main," 0%,\n    ").concat(t.palette.primary.dark," 100%)")}}));function U(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(H.a,{visibleByDefault:!0,disabledEffect:!0,src:"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_invite.png",sx:{left:40,zIndex:9,width:140,position:"relative",filter:"drop-shadow(0 12px 24px rgba(0,0,0,0.24))"}}),Object(g.jsxs)(L,{children:[Object(g.jsxs)(i.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(g.jsxs)(u.a,{variant:"h4",children:["Invite friends ",Object(g.jsx)("br",{})," and earn"]}),Object(g.jsx)(u.a,{variant:"h2",children:"$50"})]}),Object(g.jsx)(u.a,{variant:"body2",sx:{mt:2,mb:3},children:"Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam."}),Object(g.jsxs)(i.a,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",children:[Object(g.jsx)(_.a,{size:"small",placeholder:"Email",sx:{width:1,color:"common.white",fontWeight:"fontWeightMedium",bgcolor:function(e){return Object(Y.a)(e.palette.common.black,.16)},"& input::placeholder":{color:function(e){return Object(Y.a)(e.palette.common.white,.48)}},"& fieldset":{display:"none"}}}),Object(g.jsx)(x.a,{color:"warning",variant:"contained",children:"Invite"})]})]})]})}var q=a(136),G=a(1832),Q=a.n(G),K=a(673),Z=Object(S.a)(s.a)((function(){return{width:"100%",boxShadow:"none",position:"relative"}})),ee=Object(S.a)("div")((function(e){var t=e.theme;return{width:48,height:48,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",top:t.spacing(3),right:t.spacing(3),justifyContent:"center"}}));function te(e){var t=e.title,a=e.total,n=e.icon,r=e.percent,c=e.color,o=void 0===c?"primary":c,s=e.chartData,l=Object(R.a)(),j=Object(q.merge)(Object(K.a)(),{colors:[l.palette[o].main],chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},stroke:{width:4},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:function(e){return Object(P.a)(e)},title:{formatter:function(){return""}}}},fill:{gradient:{opacityFrom:.56,opacityTo:.56}}});return Object(g.jsxs)(Z,{sx:{color:function(e){return e.palette[o].darker},bgcolor:function(e){return e.palette[o].lighter}},children:[Object(g.jsx)(ee,{sx:{color:function(e){return e.palette[o].lighter},bgcolor:function(e){return e.palette[o].dark}},children:Object(g.jsx)(p.a,{icon:n,width:24,height:24})}),Object(g.jsxs)(i.a,{spacing:1,sx:{p:3},children:[Object(g.jsx)(u.a,{sx:{typography:"subtitle2"},children:t}),Object(g.jsx)(u.a,{sx:{typography:"h3"},children:Object(P.a)(a)}),Object(g.jsxs)(i.a,{direction:"row",alignItems:"center",flexWrap:"wrap",children:[Object(g.jsx)(p.a,{width:20,height:20,icon:r>=0?"eva:trending-up-fill":"eva:trending-down-fill"}),Object(g.jsxs)(u.a,{variant:"subtitle2",component:"span",sx:{ml:.5},children:[r>0&&"+",Object(P.d)(r)]}),Object(g.jsx)(u.a,{variant:"body2",component:"span",sx:{opacity:.72},children:"\xa0than last month"})]})]}),Object(g.jsx)(Q.a,{type:"area",series:[{data:s}],options:j,height:120})]})}var ae=a(1796),ne=a(253),re=Object(S.a)("div")((function(e){var t=e.theme;return{position:"relative",height:276,"& .slick-list":{borderRadius:2*Number(t.shape.borderRadius)}}})),ie=Object(S.a)("div")((function(e){var t=e.theme;return{position:"relative",height:260,backgroundSize:"cover",padding:t.spacing(3),backgroundRepeat:"no-repeat",color:t.palette.common.white,backgroundImage:'url("https://minimal-assets-api.vercel.app/assets/bg_card.png")',display:"flex",flexDirection:"column",justifyContent:"space-between"}})),ce={mx:"auto",width:"calc(100% - 16px)",borderRadius:2,position:"absolute",height:200,zIndex:8,bottom:8,left:0,right:0,bgcolor:"grey.500",opacity:.32};function oe(){var e=Object(R.a)(),t=Object(v.a)({dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===e.direction)},Object(B.c)({position:"absolute",right:16,bottom:16}));return Object(g.jsxs)(re,{children:[Object(g.jsx)(h.a,{sx:{position:"relative",zIndex:9},children:Object(g.jsx)(C.a,Object(v.a)(Object(v.a)({},t),{},{children:O.l.map((function(e){return Object(g.jsx)(se,{card:e},e.id)}))}))}),Object(g.jsx)(h.a,{sx:Object(v.a)({},ce)}),Object(g.jsx)(h.a,{sx:Object(v.a)(Object(v.a)({},ce),{},{opacity:.16,bottom:0,zIndex:7,width:"calc(100% - 40px)"})})]})}function se(e){var t=e.card,a=t.cardType,n=t.balance,r=t.cardHolder,c=t.cardNumber,o=t.cardValid,s=Object(k.useState)(!0),l=Object(y.a)(s,2),j=l[0],b=l[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(ie,{children:[Object(g.jsx)(h.a,{sx:{position:"absolute",top:16,right:16,zIndex:9},children:Object(g.jsx)(le,{})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(u.a,{sx:{mb:2,typography:"subtitle2",opacity:.72},children:"Current Balance"}),Object(g.jsxs)(i.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(g.jsx)(u.a,{sx:{typography:"h3"},children:j?"********":Object(P.a)(n)}),Object(g.jsx)(d.a,{color:"inherit",onClick:function(){b((function(e){return!e}))},sx:{opacity:.48},children:Object(g.jsx)(p.a,{icon:j?"eva:eye-fill":"eva:eye-off-fill"})})]})]}),Object(g.jsxs)(i.a,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:1,children:[Object(g.jsx)(H.a,{disabledEffect:!0,visibleByDefault:!0,src:"https://minimal-assets-api.vercel.app/assets/icons/ic_".concat("mastercard"===a?"mastercard":"visa",".svg"),sx:{height:24}}),Object(g.jsx)(u.a,{sx:{typography:"subtitle1",textAlign:"right"},children:c})]}),Object(g.jsxs)(i.a,{direction:"row",spacing:5,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(u.a,{sx:{mb:1,typography:"caption",opacity:.48},children:"Card Holder"}),Object(g.jsx)(u.a,{sx:{typography:"subtitle1"},children:r})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)(u.a,{sx:{mb:1,typography:"caption",opacity:.48},children:"Valid Dates"}),Object(g.jsx)(u.a,{sx:{typography:"subtitle1"},children:o})]})]})]})})}function le(){var e=Object(k.useRef)(null),t=Object(k.useState)(!1),a=Object(y.a)(t,2),n=a[0],r=a[1],i=function(){r(!1)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{ref:e,size:"large",color:"inherit",sx:{opacity:.48},onClick:function(){r(!0)},children:Object(g.jsx)(p.a,{icon:"eva:more-vertical-fill",width:20,height:20})}),Object(g.jsxs)(ne.a,{open:n,onClose:i,anchorEl:e.current,sx:{p:1,mt:-1,width:"auto"},children:[Object(g.jsxs)(ae.a,{onClick:i,sx:{py:.75,px:1.5,borderRadius:1},children:[Object(g.jsx)(p.a,{icon:"eva:edit-fill",sx:{width:20,height:20,flexShrink:0,mr:1}}),Object(g.jsx)(u.a,{variant:"body2",children:"Edit card"})]}),Object(g.jsxs)(ae.a,{onClick:i,sx:{py:.75,px:1.5,borderRadius:1,color:"error.main"},children:[Object(g.jsx)(p.a,{icon:"eva:trash-2-outline",sx:{width:20,height:20,flexShrink:0,mr:1}}),Object(g.jsx)(u.a,{variant:"body2",children:"Delete card"})]})]})]})}var je=a(674),de=[{year:"Week",data:[{name:"Income",data:[10,41,35,151,49,62,69,91,48]},{name:"Expenses",data:[10,34,13,56,77,88,99,77,45]}]},{year:"Month",data:[{name:"Income",data:[148,91,69,62,49,51,35,41,10]},{name:"Expenses",data:[45,77,99,88,77,56,13,34,10]}]},{year:"Year",data:[{name:"Income",data:[76,42,29,41,27,138,117,86,63]},{name:"Expenses",data:[80,55,34,114,80,130,15,28,55]}]}];function be(){var e=Object(k.useState)("Year"),t=Object(y.a)(e,2),a=t[0],n=t[1],r=Object(q.merge)(Object(je.a)(),{stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},tooltip:{y:{formatter:function(e){return"$".concat(e)}}}});return Object(g.jsxs)(s.a,{children:[Object(g.jsx)(l.a,{title:"Balance Statistics",subheader:"(+43% Income | +12% Expense) than last year",action:Object(g.jsx)(M.a,{select:!0,fullWidth:!0,value:a,SelectProps:{native:!0},onChange:function(e){n(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:de.map((function(e){return Object(g.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),de.map((function(e){return Object(g.jsx)(h.a,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===a&&Object(g.jsx)(Q.a,{type:"bar",series:e.data,options:r,height:364})},e.year)}))]})}var he=a(405),ue=a(1911),xe=a(1809),Oe=a(1810),pe=a(1811),ge=a(1806),fe=a(1807),me=a(1812),ve=a(1653),ye=a(998),we=a(545),Ce=a(203);function ke(){var e="light"===Object(R.a)().palette.mode,t=function(){},a=function(){},n=function(){},r=function(){};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(s.a,{children:[Object(g.jsx)(l.a,{title:"Recent Transitions",sx:{mb:3}}),Object(g.jsx)(Ce.a,{children:Object(g.jsx)(xe.a,{sx:{minWidth:720},children:Object(g.jsxs)(Oe.a,{children:[Object(g.jsx)(pe.a,{children:Object(g.jsxs)(ge.a,{children:[Object(g.jsx)(fe.a,{children:"Description"}),Object(g.jsx)(fe.a,{children:"Date"}),Object(g.jsx)(fe.a,{children:"Amount"}),Object(g.jsx)(fe.a,{children:"Status"}),Object(g.jsx)(fe.a,{})]})}),Object(g.jsx)(me.a,{children:O.n.map((function(i){return Object(g.jsxs)(ge.a,{children:[Object(g.jsx)(fe.a,{children:Object(g.jsxs)(h.a,{sx:{display:"flex",alignItems:"center"},children:[Object(g.jsxs)(h.a,{sx:{position:"relative"},children:[Se(i.category,i.avatar),Object(g.jsx)(h.a,{sx:Object(v.a)({right:0,bottom:0,width:18,height:18,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",color:"common.white",bgcolor:"error.main",justifyContent:"center"},"Income"===i.type&&{bgcolor:"success.main"}),children:Object(g.jsx)(p.a,{icon:"Income"===i.type?"eva:diagonal-arrow-left-down-fill":"eva:diagonal-arrow-right-up-fill",width:16,height:16})})]}),Object(g.jsxs)(h.a,{sx:{ml:2},children:[Object(g.jsx)(u.a,{variant:"body2",sx:{color:"text.secondary"},children:i.message}),Object(g.jsxs)(u.a,{variant:"subtitle2",children:[" ",i.category]})]})]})}),Object(g.jsxs)(fe.a,{children:[Object(g.jsx)(u.a,{variant:"subtitle2",children:Object(he.a)(new Date(i.date),"dd MMM yyyy")}),Object(g.jsx)(u.a,{variant:"body2",sx:{color:"text.secondary"},children:Object(he.a)(new Date(i.date),"p")})]}),Object(g.jsx)(fe.a,{children:Object(P.a)(i.amount)}),Object(g.jsx)(fe.a,{children:Object(g.jsx)(we.a,{variant:e?"ghost":"filled",color:("completed"===i.status?"success":"in_progress"===i.status&&"warning")||"error",children:Object(ue.a)(i.status)})}),Object(g.jsx)(fe.a,{align:"right",children:Object(g.jsx)(Re,{onDownload:t,onPrint:a,onShare:n,onDelete:r})})]},i.id)}))})]})})}),Object(g.jsx)(ve.a,{}),Object(g.jsx)(h.a,{sx:{p:2,textAlign:"right"},children:Object(g.jsx)(x.a,{to:"#",size:"small",color:"inherit",component:I.b,endIcon:Object(g.jsx)(p.a,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]})})}function Ie(e){var t=e.icon;return Object(g.jsx)(b.a,{sx:{width:48,height:48,color:"text.secondary",bgcolor:"background.neutral"},children:Object(g.jsx)(p.a,{icon:t,width:24,height:24})})}function Se(e,t){return"Books"===e?Object(g.jsx)(Ie,{icon:"eva:book-fill"}):"Beauty & Health"===e?Object(g.jsx)(Ie,{icon:"eva:heart-fill"}):t?Object(g.jsx)(b.a,{alt:e,src:t,sx:{width:48,height:48,boxShadow:function(e){return e.customShadows.z8}}}):null}function Re(e){var t=e.onDownload,a=e.onPrint,n=e.onShare,r=e.onDelete,i=Object(k.useRef)(null),c=Object(k.useState)(!1),o=Object(y.a)(c,2),s=o[0],l=o[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{ref:i,size:"large",onClick:function(){l(!0)},children:Object(g.jsx)(p.a,{icon:"eva:more-vertical-fill",width:20,height:20})}),Object(g.jsxs)(ye.a,{open:s,anchorEl:i.current,onClose:function(){l(!1)},PaperProps:{sx:{px:1,width:200,maxWidth:1}},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(g.jsxs)(ae.a,{onClick:t,sx:{borderRadius:1},children:[Object(g.jsx)(p.a,{icon:"eva:download-fill",width:20,height:20}),Object(g.jsx)(u.a,{variant:"body2",sx:{ml:2},children:"Download"})]}),Object(g.jsxs)(ae.a,{onClick:a,sx:{borderRadius:1},children:[Object(g.jsx)(p.a,{icon:"eva:printer-fill",width:20,height:20}),Object(g.jsx)(u.a,{variant:"body2",sx:{ml:2},children:"Print"})]}),Object(g.jsxs)(ae.a,{onClick:n,sx:{borderRadius:1},children:[Object(g.jsx)(p.a,{icon:"eva:share-fill",width:20,height:20}),Object(g.jsx)(u.a,{variant:"body2",sx:{ml:2},children:"Share"})]}),Object(g.jsx)(ve.a,{}),Object(g.jsxs)(ae.a,{onClick:r,sx:{color:"error.main",borderRadius:1},children:[Object(g.jsx)(p.a,{icon:"eva:trash-2-outline",width:20,height:20}),Object(g.jsx)(u.a,{variant:"body2",sx:{ml:2},children:"Delete"})]})]})]})}var De=a(10),ze=a(169),Ne=Object(S.a)(s.a)((function(e){var t=e.theme;return{"& .apexcharts-legend":Object(De.a)({width:240,margin:"auto"},t.breakpoints.up("sm"),{flexWrap:"wrap",height:160,width:"50%"}),"& .apexcharts-datalabels-group":{display:"none"}}})),We={labels:["Category 1","Category 2","Category 3","Category 4","Category 5","Category 6","Category 7","Category 8","Category 9"],data:[14,23,21,17,15,10,12,17,21]};function Ae(){var e=Object(R.a)(),t=Object(ze.a)("up","sm"),a=Object(q.merge)(Object(je.a)(),{labels:We.labels,colors:[e.palette.primary.main,e.palette.info.darker,e.palette.chart.yellow[0],e.palette.chart.blue[0],e.palette.chart.red[0],e.palette.chart.violet[2],e.palette.chart.violet[0],e.palette.success.darker,e.palette.chart.green[0]],stroke:{colors:[e.palette.background.paper]},fill:{opacity:.8},legend:{position:"right",itemMargin:{horizontal:10,vertical:5}},responsive:[{breakpoint:e.breakpoints.values.sm,options:{legend:{position:"bottom",horizontalAlign:"left"}}}]});return Object(g.jsxs)(Ne,{children:[Object(g.jsx)(l.a,{title:"Expenses Categories"}),Object(g.jsx)(h.a,{sx:{my:5},dir:"ltr",children:Object(g.jsx)(Q.a,{type:"polarArea",series:We.data,options:a,height:t?240:360})}),Object(g.jsx)(ve.a,{}),Object(g.jsxs)(i.a,{direction:"row",divider:Object(g.jsx)(ve.a,{orientation:"vertical",flexItem:!0}),children:[Object(g.jsxs)(h.a,{sx:{py:2,width:1,textAlign:"center"},children:[Object(g.jsx)(u.a,{sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),Object(g.jsx)(u.a,{sx:{typography:"h4"},children:"9"})]}),Object(g.jsxs)(h.a,{sx:{py:2,width:1,textAlign:"center"},children:[Object(g.jsx)(u.a,{sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),Object(g.jsx)(u.a,{sx:{typography:"h4"},children:"$18,765"})]})]})]})}function Me(){var e=Object(c.a)().themeStretch;return Object(g.jsx)(o.a,{title:"General: Banking",children:Object(g.jsx)(n.a,{maxWidth:!e&&"xl",children:Object(g.jsxs)(r.a,{container:!0,spacing:3,children:[Object(g.jsx)(r.a,{item:!0,xs:12,md:7,children:Object(g.jsxs)(i.a,{direction:{xs:"column",sm:"row"},spacing:3,children:[Object(g.jsx)(te,{title:"Income",icon:"eva:diagonal-arrow-left-down-fill",percent:2.6,total:18765,chartData:[111,136,76,108,74,54,57,84]}),Object(g.jsx)(te,{title:"Expenses",color:"warning",icon:"eva:diagonal-arrow-right-up-fill",percent:-.5,total:8938,chartData:[111,136,76,108,74,54,57,84]})]})}),Object(g.jsx)(r.a,{item:!0,xs:12,md:5,children:Object(g.jsx)(oe,{})}),Object(g.jsx)(r.a,{item:!0,xs:12,md:8,children:Object(g.jsxs)(i.a,{spacing:3,children:[Object(g.jsx)(be,{}),Object(g.jsx)(Ae,{}),Object(g.jsx)(ke,{})]})}),Object(g.jsx)(r.a,{item:!0,xs:12,md:4,children:Object(g.jsxs)(i.a,{spacing:3,children:[Object(g.jsx)($,{}),Object(g.jsx)(f,{}),Object(g.jsx)(U,{})]})})]})})})}}}]);
//# sourceMappingURL=42.6e1b477f.chunk.js.map
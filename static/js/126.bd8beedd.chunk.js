(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[126],{1821:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return j}));var r=n(136),i=n(1829),a=n.n(i);function c(e){return a()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function s(e){return a()(e/100).format("0.0%")}function o(e){return a()(e).format()}function l(e){return Object(r.replace)(a()(e).format("0.00a"),".00","")}function j(e){return a()(e).format("0.0 b")}},1840:function(e,t,n){"use strict";n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return R}));var r=n(4),i=n(12),a=n(269),c=n(0),s=Object(i.a)(a.a,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":Object(r.a)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),o=Object(i.a)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),l=Object(i.a)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function j(e){var t=null===e||void 0===e?void 0:e.color,n=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(s,Object(r.a)(Object(r.a)({rounded:n,component:"ul"},e),{},{children:t}))})},customPaging:function(){return Object(c.jsx)(o,{children:Object(c.jsx)(l,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var d=n(25),b=n(68),h=n(1002),x=n(41),u=n(78),O=["filled","customIcon","onNext","onPrevious","children"],m=Object(i.a)(u.c,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,n=e.theme;return Object(r.a)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:n.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(n.shape.borderRadius),color:n.palette.common.white,backgroundColor:n.palette.grey[900],"&:hover":{opacity:1,color:n.palette.common.white,backgroundColor:n.palette.grey[900]}})}));function p(e){var t=e.filled,n=void 0!==t&&t,i=e.customIcon,s=e.onNext,o=e.onPrevious,l=e.children,j=Object(d.a)(e,O),x="rtl"===Object(b.a)().direction,u={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return l?Object(c.jsxs)(a.a,Object(r.a)(Object(r.a)({},j),{},{children:[Object(c.jsx)(a.a,{className:"arrow left",sx:Object(r.a)(Object(r.a)({},u),{},{left:0}),children:Object(c.jsx)(m,{filled:n,onClick:o,children:g(i,x)})}),l,Object(c.jsx)(a.a,{className:"arrow right",sx:Object(r.a)(Object(r.a)({},u),{},{right:0}),children:Object(c.jsx)(m,{filled:n,onClick:s,children:f(i,x)})})]})):Object(c.jsxs)(h.a,Object(r.a)(Object(r.a)({direction:"row",spacing:1},j),{},{children:[Object(c.jsx)(m,{className:"arrow left",filled:n,onClick:o,children:g(i,x)}),Object(c.jsx)(m,{className:"arrow right",filled:n,onClick:s,children:f(i,x)})]}))}var g=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},f=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},v=n(98),w=n(1682),y=n(407),k=["index","total","onNext","onPrevious","customIcon"],C=Object(i.a)(a.a)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:Object(v.a)(t.palette.grey[900],.48)}})),I=Object(i.a)(w.a)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function R(e){var t=e.index,n=e.total,i=e.onNext,a=e.onPrevious,s=e.customIcon,o=Object(d.a)(e,k),l="rtl"===Object(b.a)().direction;return Object(c.jsxs)(C,Object(r.a)(Object(r.a)({},o),{},{children:[Object(c.jsx)(I,{size:"small",onClick:a,children:S(s,l)}),Object(c.jsxs)(y.a,{variant:"subtitle2",children:[t+1,"/",n]}),Object(c.jsx)(I,{size:"small",onClick:i,children:P(s,l)})]}))}var S=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},P=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},2840:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return we}));var r=n(1785),i=n(1781),a=n(137),c=n(671),s=n(3),o=n(1),l=n(405),j=n(1911),d=n(27),b=n(68),h=n(1805),x=n(1825),u=n(1809),O=n(1810),m=n(1811),p=n(1806),g=n(1807),f=n(1812),v=n(1002),w=n(1010),y=n(407),k=n(1653),C=n(269),I=n(544),R=n(1682),S=n(998),P=n(1796),N=n(350),z=n(545),T=n(41),B=n(203),W=n(0);function M(){var e="light"===Object(b.a)().palette.mode,t=function(){},n=function(){},r=function(){},i=function(){};return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(h.a,{children:[Object(W.jsx)(x.a,{title:"Booking Details",sx:{mb:3}}),Object(W.jsx)(B.a,{children:Object(W.jsx)(u.a,{sx:{minWidth:720},children:Object(W.jsxs)(O.a,{children:[Object(W.jsx)(m.a,{children:Object(W.jsxs)(p.a,{children:[Object(W.jsx)(g.a,{sx:{minWidth:240},children:"Booker"}),Object(W.jsx)(g.a,{sx:{minWidth:160},children:"Check In"}),Object(W.jsx)(g.a,{sx:{minWidth:160},children:"Check Out"}),Object(W.jsx)(g.a,{sx:{minWidth:120},children:"Status"}),Object(W.jsx)(g.a,{sx:{minWidth:200},children:"Phone"}),Object(W.jsx)(g.a,{sx:{minWidth:120},children:"Room Type"}),Object(W.jsx)(g.a,{})]})}),Object(W.jsx)(f.a,{children:N.q.map((function(a){return Object(W.jsxs)(p.a,{children:[Object(W.jsx)(g.a,{children:Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(W.jsx)(w.a,{alt:a.name,src:a.avatar}),Object(W.jsx)(y.a,{variant:"subtitle2",children:a.name})]})}),Object(W.jsx)(g.a,{children:Object(l.a)(new Date(a.checkIn),"dd MMM yyyy")}),Object(W.jsx)(g.a,{children:Object(l.a)(new Date(a.checkOut),"dd MMM yyyy")}),Object(W.jsx)(g.a,{children:Object(W.jsx)(z.a,{variant:e?"ghost":"filled",color:("paid"===a.status?"success":"pending"===a.status&&"warning")||"error",children:Object(j.a)(a.status)})}),Object(W.jsx)(g.a,{children:a.phoneNumber}),Object(W.jsx)(g.a,{sx:{textTransform:"capitalize"},children:a.roomType}),Object(W.jsx)(g.a,{align:"right",children:Object(W.jsx)(A,{onDownload:t,onPrint:n,onShare:r,onDelete:i})})]},a.id)}))})]})})}),Object(W.jsx)(k.a,{}),Object(W.jsx)(C.a,{sx:{p:2,textAlign:"right"},children:Object(W.jsx)(I.a,{to:"#",size:"small",color:"inherit",component:d.b,endIcon:Object(W.jsx)(T.a,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]})})}function A(e){var t=e.onDownload,n=e.onPrint,r=e.onShare,i=e.onDelete,a=Object(o.useRef)(null),c=Object(o.useState)(!1),l=Object(s.a)(c,2),j=l[0],d=l[1];return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(R.a,{ref:a,size:"large",onClick:function(){d(!0)},children:Object(W.jsx)(T.a,{icon:"eva:more-vertical-fill",width:20,height:20})}),Object(W.jsxs)(S.a,{open:j,anchorEl:a.current,onClose:function(){d(!1)},PaperProps:{sx:{px:1,width:200,maxWidth:1}},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(W.jsxs)(P.a,{onClick:t,sx:{borderRadius:1},children:[Object(W.jsx)(T.a,{icon:"eva:download-fill",width:20,height:20}),Object(W.jsx)(y.a,{variant:"body2",sx:{ml:2},children:"Download"})]}),Object(W.jsxs)(P.a,{onClick:n,sx:{borderRadius:1},children:[Object(W.jsx)(T.a,{icon:"eva:printer-fill",width:20,height:20}),Object(W.jsx)(y.a,{variant:"body2",sx:{ml:2},children:"Print"})]}),Object(W.jsxs)(P.a,{onClick:r,sx:{borderRadius:1},children:[Object(W.jsx)(T.a,{icon:"eva:share-fill",width:20,height:20}),Object(W.jsx)(y.a,{variant:"body2",sx:{ml:2},children:"Share"})]}),Object(W.jsx)(k.a,{}),Object(W.jsxs)(P.a,{onClick:i,sx:{color:"error.main",borderRadius:1},children:[Object(W.jsx)(T.a,{icon:"eva:trash-2-outline",width:20,height:20}),Object(W.jsx)(y.a,{variant:"body2",sx:{ml:2},children:"Delete"})]})]})]})}var D=n(4),F=n(1991),X=n(1821);function H(){return Object(W.jsxs)(h.a,{children:[Object(W.jsx)(x.a,{title:"Booked Room"}),Object(W.jsx)(v.a,{spacing:3,sx:{px:3,my:5},children:N.r.map((function(e){return Object(W.jsx)(F.a,{variant:"determinate",value:e.value,color:("Pending"===e.status?"warning":"Cancel"===e.status&&"error")||"success",sx:{height:8,bgcolor:"grey.50016"}},e.status)}))}),Object(W.jsx)(v.a,{direction:"row",justifyContent:"space-between",sx:{px:3,pb:3},children:N.r.map((function(e){return Object(W.jsxs)(v.a,{alignItems:"center",children:[Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",spacing:1,sx:{mb:1},children:[Object(W.jsx)(C.a,{sx:Object(D.a)(Object(D.a)({width:12,height:12,borderRadius:.5,bgcolor:"success.main"},"Pending"===e.status&&{bgcolor:"warning.main"}),"Cancel"===e.status&&{bgcolor:"error.main"})}),Object(W.jsx)(y.a,{variant:"subtitle2",sx:{color:"text.secondary"},children:e.status})]}),Object(W.jsx)(y.a,{variant:"h6",children:Object(X.e)(e.quantity)})]},e.status)}))})]})}var J=n(136),Y=n(1832),$=n.n(Y),q=n(12),G=n(673),L=Object(q.a)(h.a)((function(e){var t=e.theme;return{boxShadow:"none",padding:t.spacing(3),color:t.palette.primary.darker,backgroundColor:t.palette.primary.lighter}})),E=[{data:[111,136,76,108,74,54,57,84]}];function V(){var e=Object(J.merge)(Object(G.a)(),{chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},stroke:{width:4},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:function(e){return Object(X.a)(e)},title:{formatter:function(){return""}}}},fill:{gradient:{opacityFrom:0,opacityTo:0}}});return Object(W.jsxs)(L,{children:[Object(W.jsxs)(v.a,{direction:"row",justifyContent:"space-between",sx:{mb:3},children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(y.a,{sx:{mb:2,typography:"subtitle2"},children:"Total Incomes"}),Object(W.jsx)(y.a,{sx:{typography:"h3"},children:Object(X.a)(18765)})]}),Object(W.jsxs)("div",{children:[Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{mb:.6},children:[Object(W.jsx)(T.a,{width:20,height:20,icon:"eva:trending-up-fill"}),Object(W.jsxs)(y.a,{variant:"subtitle2",component:"span",sx:{ml:.5},children:["+",Object(X.d)(2.6)]})]}),Object(W.jsx)(y.a,{variant:"body2",component:"span",sx:{opacity:.72},children:"\xa0than last month"})]})]}),Object(W.jsx)($.a,{type:"area",series:E,options:e,height:132})]})}var K=n(674),Q=[75];function U(){var e=Object(b.a)(),t=Object(J.merge)(Object(K.a)(),{legend:{show:!1},grid:{padding:{top:-32,bottom:-32}},fill:{type:"gradient",gradient:{colorStops:[[{offset:0,color:e.palette.primary.light},{offset:100,color:e.palette.primary.main}]]}},plotOptions:{radialBar:{hollow:{size:"64%"},dataLabels:{name:{offsetY:-16},value:{offsetY:8},total:{label:"Rooms",formatter:function(){return Object(X.c)(186)}}}}}});return Object(W.jsxs)(h.a,{children:[Object(W.jsx)(x.a,{title:"Room Available",sx:{mb:8}}),Object(W.jsx)($.a,{type:"radialBar",series:Q,options:t,height:310}),Object(W.jsxs)(v.a,{spacing:2,sx:{p:5},children:[Object(W.jsx)(Z,{label:"Sold out",number:120}),Object(W.jsx)(Z,{label:"Available",number:66})]})]})}function Z(e){var t=e.label,n=e.number;return Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(W.jsx)(C.a,{sx:Object(D.a)({width:16,height:16,bgcolor:"grey.50016",borderRadius:.75},"Sold out"===t&&{bgcolor:"primary.main"})}),Object(W.jsx)(y.a,{variant:"subtitle2",sx:{color:"text.secondary"},children:t})]}),Object(W.jsxs)(y.a,{variant:"subtitle1",children:[n," Rooms"]})]})}var _=n(1853),ee=n.n(_),te=n(1009),ne=n(408),re=n(349),ie=n(1840);function ae(){var e=Object(b.a)(),t=Object(o.useRef)(null),n={dots:!1,arrows:!1,slidesToShow:4,slidesToScroll:1,rtl:Boolean("rtl"===e.direction),responsive:[{breakpoint:e.breakpoints.values.lg,settings:{slidesToShow:3}},{breakpoint:e.breakpoints.values.md,settings:{slidesToShow:2}},{breakpoint:e.breakpoints.values.sm,settings:{slidesToShow:1}}]};return Object(W.jsxs)(C.a,{sx:{py:2},children:[Object(W.jsx)(x.a,{title:"Newest Booking",subheader:"12 Booking",action:Object(W.jsx)(ie.b,{customIcon:"ic:round-keyboard-arrow-right",onNext:function(){var e;null===(e=t.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=t.current)||void 0===e||e.slickPrev()},sx:{"& .arrow":{width:28,height:28,p:0}}}),sx:{p:0,mb:3,"& .MuiCardHeader-action":{alignSelf:"center"}}}),Object(W.jsx)(ee.a,Object(D.a)(Object(D.a)({ref:t},n),{},{children:N.o.map((function(e){return Object(W.jsx)(ce,{item:e},e.id)}))}))]})}function ce(e){var t=e.item,n=t.avatar,r=t.name,i=t.roomNumber,a=t.bookdAt,c=t.person,s=t.cover,o=t.roomType;return Object(W.jsxs)(te.a,{sx:{mx:1.5,borderRadius:2,bgcolor:"background.neutral"},children:[Object(W.jsxs)(v.a,{spacing:2.5,sx:{p:3,pb:2.5},children:[Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(W.jsx)(w.a,{alt:r,src:n}),Object(W.jsxs)("div",{children:[Object(W.jsx)(y.a,{variant:"subtitle2",children:r}),Object(W.jsx)(y.a,{variant:"caption",sx:{color:"text.disabled",mt:.5,display:"block"},children:Object(ne.b)(a)})]})]}),Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",spacing:3,sx:{color:"text.secondary"},children:[Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(W.jsx)(T.a,{icon:"ic:round-vpn-key",width:16,height:16}),Object(W.jsxs)(y.a,{variant:"caption",children:["Room ",i]})]}),Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(W.jsx)(T.a,{icon:"eva:people-fill",width:16,height:16}),Object(W.jsxs)(y.a,{variant:"caption",children:[c," Person"]})]})]})]}),Object(W.jsxs)(C.a,{sx:{p:1,position:"relative"},children:[Object(W.jsx)(z.a,{variant:"filled",color:("king"===o?"error":"double"===o&&"info")||"warning",sx:{right:16,zIndex:9,bottom:16,position:"absolute",textTransform:"capitalize"},children:o}),Object(W.jsx)(re.a,{src:s,ratio:"1/1",sx:{borderRadius:1.5}})]})]})}var se=n(169),oe={width:106,height:106},le=[72],je=[64];function de(){var e=Object(b.a)(),t=Object(se.a)("up","sm"),n=Object(J.merge)(Object(K.a)(),{chart:{sparkline:{enabled:!0}},grid:{padding:{top:-9,bottom:-9}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"64%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,fontSize:e.typography.subtitle2.fontSize}}}}}),r=Object(D.a)(Object(D.a)({},n),{},{colors:[e.palette.chart.yellow[0]]});return Object(W.jsx)(h.a,{children:Object(W.jsxs)(v.a,{direction:{xs:"column",sm:"row"},divider:Object(W.jsx)(k.a,{orientation:t?"vertical":"horizontal",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",justifyContent:"center",spacing:3,sx:{width:1,py:5},children:[Object(W.jsx)($.a,Object(D.a)({type:"radialBar",series:le,options:n},oe)),Object(W.jsxs)("div",{children:[Object(W.jsx)(y.a,{variant:"h4",sx:{mb:.5},children:Object(X.c)(38566)}),Object(W.jsx)(y.a,{variant:"body2",sx:{opacity:.72},children:"Check In"})]})]}),Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",justifyContent:"center",spacing:3,sx:{width:1,py:5},children:[Object(W.jsx)($.a,Object(D.a)({type:"radialBar",series:je,options:r},oe)),Object(W.jsxs)("div",{children:[Object(W.jsx)(y.a,{variant:"h4",sx:{mb:.5},children:Object(X.c)(18472)}),Object(W.jsx)(y.a,{variant:"body2",sx:{opacity:.72},children:"Check Out"})]})]})]})})}var be=n(1962),he=n(2263);function xe(){var e=Object(b.a)(),t=Object(o.useRef)(null),n={dots:!1,arrows:!1,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===e.direction),adaptiveHeight:!0};return Object(W.jsxs)(h.a,{children:[Object(W.jsx)(x.a,{title:"Customer Reviews",subheader:"".concat(N.p.length," Reviews"),action:Object(W.jsx)(ie.b,{customIcon:"ic:round-keyboard-arrow-right",onNext:function(){var e;null===(e=t.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=t.current)||void 0===e||e.slickPrev()},sx:{"& .arrow":{width:28,height:28,p:0}}}),sx:{"& .MuiCardHeader-action":{alignSelf:"center"}}}),Object(W.jsx)(ee.a,Object(D.a)(Object(D.a)({ref:t},n),{},{children:N.p.map((function(e){return Object(W.jsx)(ue,{item:e},e.id)}))}))]})}function ue(e){var t=e.item,n=t.avatar,r=t.name,i=t.description,a=t.rating,c=t.postedAt,s=t.tags;return Object(W.jsxs)(v.a,{spacing:2,sx:{minHeight:402,position:"relative",p:3},children:[Object(W.jsxs)(v.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(W.jsx)(w.a,{alt:r,src:n}),Object(W.jsxs)("div",{children:[Object(W.jsx)(y.a,{variant:"subtitle2",children:r}),Object(W.jsxs)(y.a,{variant:"caption",sx:{color:"text.secondary",mt:.5,display:"block"},children:["Posted ",Object(ne.b)(c)]})]})]}),Object(W.jsx)(be.a,{value:a,size:"small",readOnly:!0,precision:.5}),Object(W.jsx)(y.a,{variant:"body2",children:i}),Object(W.jsx)(v.a,{direction:"row",flexWrap:"wrap",children:s.map((function(e){return Object(W.jsx)(he.a,{size:"small",label:e,sx:{mr:1,mb:1,color:"text.secondary"}},e)}))}),Object(W.jsxs)(v.a,{direction:"row",spacing:2,alignItems:"flex-end",sx:{flexGrow:1},children:[Object(W.jsx)(I.a,{fullWidth:!0,variant:"contained",endIcon:Object(W.jsx)(T.a,{icon:"eva:checkmark-circle-2-fill"}),children:"Accept"}),Object(W.jsx)(I.a,{fullWidth:!0,variant:"contained",color:"error",endIcon:Object(W.jsx)(T.a,{icon:"eva:close-circle-fill"}),children:"Reject"})]})]})}var Oe=n(1798),me=[{year:"Week",data:[{name:"Check In",data:[10,41,35,151,49,62,69,91,48]},{name:"Check Out",data:[10,34,13,56,77,88,99,77,45]}]},{year:"Month",data:[{name:"Check In",data:[148,91,69,62,49,51,35,41,10]},{name:"Check Out",data:[45,77,99,88,77,56,13,34,10]}]},{year:"Year",data:[{name:"Check In",data:[76,42,29,41,27,138,117,86,63]},{name:"Check Out",data:[80,55,34,114,80,130,15,28,55]}]}];function pe(){var e=Object(o.useState)("Year"),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(J.merge)(Object(K.a)(),{stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},tooltip:{y:{formatter:function(e){return"$".concat(e)}}}});return Object(W.jsxs)(h.a,{children:[Object(W.jsx)(x.a,{title:"Reservation Stats",subheader:"(+43% Check In | +12% Check Out) than last year",action:Object(W.jsx)(Oe.a,{select:!0,fullWidth:!0,value:n,SelectProps:{native:!0},onChange:function(e){r(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:me.map((function(e){return Object(W.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),me.map((function(e){return Object(W.jsx)(C.a,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===n&&Object(W.jsx)($.a,{type:"bar",series:e.data,options:i,height:364})},e.year)}))]})}var ge=Object(q.a)(h.a)((function(e){return{display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.theme.spacing(2,2,2,3)}}));function fe(e){var t=e.title,n=e.total,r=e.icon;return Object(W.jsxs)(ge,{children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(y.a,{variant:"h3",children:Object(X.e)(n)}),Object(W.jsx)(y.a,{variant:"subtitle2",sx:{color:"text.secondary"},children:t})]}),Object(W.jsx)(C.a,{sx:{width:120,height:120,lineHeight:0,borderRadius:"50%",bgcolor:"background.neutral"},children:r})]})}var ve=n(302);function we(){var e=Object(a.a)().themeStretch;return Object(W.jsx)(c.a,{title:"General: Banking",children:Object(W.jsx)(r.a,{maxWidth:!e&&"xl",children:Object(W.jsxs)(i.a,{container:!0,spacing:3,children:[Object(W.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(fe,{title:"Total Booking",total:714e3,icon:Object(W.jsx)(ve.a,{})})}),Object(W.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(fe,{title:"Check In",total:311e3,icon:Object(W.jsx)(ve.b,{})})}),Object(W.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(fe,{title:"Check Out",total:124e3,icon:Object(W.jsx)(ve.c,{})})}),Object(W.jsx)(i.a,{item:!0,xs:12,md:8,children:Object(W.jsxs)(i.a,{container:!0,spacing:3,children:[Object(W.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(W.jsx)(V,{})}),Object(W.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(W.jsx)(H,{})}),Object(W.jsx)(i.a,{item:!0,xs:12,md:12,children:Object(W.jsx)(de,{})})]})}),Object(W.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(U,{})}),Object(W.jsx)(i.a,{item:!0,xs:12,md:8,children:Object(W.jsx)(pe,{})}),Object(W.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(xe,{})}),Object(W.jsx)(i.a,{item:!0,xs:12,children:Object(W.jsx)(ae,{})}),Object(W.jsx)(i.a,{item:!0,xs:12,children:Object(W.jsx)(M,{})})]})})})}}}]);
//# sourceMappingURL=126.bd8beedd.chunk.js.map
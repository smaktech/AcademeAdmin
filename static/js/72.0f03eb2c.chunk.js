(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[72],{1819:function(e,t,l){"use strict";l.d(t,"a",(function(){return j}));var r=l(4),o=l(25),a=l(136),n=l(27),i=l(407),s=l(1824),c=l(269),d=l(1681),b=l(0),u=["links","activeLast"];function j(e){var t,l=e.links,n=e.activeLast,d=void 0!==n&&n,j=Object(o.a)(e,u),p=null===(t=Object(a.last)(l))||void 0===t?void 0:t.name,m=l.map((function(e){return Object(b.jsx)(q,{link:e},e.name)})),x=l.map((function(e){return Object(b.jsx)("div",{children:e.name!==p?Object(b.jsx)(q,{link:e}):Object(b.jsx)(i.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:p})},e.name)}));return Object(b.jsx)(s.a,Object(r.a)(Object(r.a)({separator:Object(b.jsx)(c.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},j),{},{children:d?m:x}))}function q(e){var t=e.link,l=t.href,r=t.name,o=t.icon;return Object(b.jsxs)(d.a,{variant:"body2",component:n.b,to:l||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&Object(b.jsx)(c.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),r]},r)}},1820:function(e,t,l){"use strict";l.d(t,"a",(function(){return u}));var r=l(4),o=l(25),a=l(136),n=l(269),i=l(407),s=l(1681),c=l(1819),d=l(0),b=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,l=e.action,u=e.heading,j=e.moreLink,q=void 0===j?[]:j,p=e.sx,m=Object(o.a)(e,b);return Object(d.jsxs)(n.a,{sx:Object(r.a)({mb:5},p),children:[Object(d.jsxs)(n.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(n.a,{sx:{flexGrow:1},children:[Object(d.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:u}),Object(d.jsx)(c.a,Object(r.a)({links:t},m))]}),l&&Object(d.jsx)(n.a,{sx:{flexShrink:0},children:l})]}),Object(d.jsx)(n.a,{sx:{mt:2},children:Object(a.isString)(q)?Object(d.jsx)(s.a,{href:q,target:"_blank",rel:"noopener",variant:"body2",children:q}):q.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1821:function(e,t,l){"use strict";l.d(t,"a",(function(){return n})),l.d(t,"d",(function(){return i})),l.d(t,"c",(function(){return s})),l.d(t,"e",(function(){return c})),l.d(t,"b",(function(){return d}));var r=l(136),o=l(1829),a=l.n(o);function n(e){return a()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function i(e){return a()(e/100).format("0.0%")}function s(e){return a()(e).format()}function c(e){return Object(r.replace)(a()(e).format("0.00a"),".00","")}function d(e){return a()(e).format("0.0 b")}},1867:function(e,t,l){"use strict";l.d(t,"a",(function(){return k}));var r=l(25),o=l(4),a=l(1864),n=l.n(a),i=l(12),s=l(41),c=Object(i.a)("div")((function(e){var t=e.theme,l="rtl"===t.direction;return{"& .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button:focus .ql-fill, .ql-snow .ql-toolbar button:focus .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill":{fill:t.palette.primary.main},"& .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected":{color:t.palette.primary.main},"& .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter":{stroke:t.palette.primary.main},"& .ql-stroke":{stroke:t.palette.text.primary},"& .ql-fill, .ql-stroke.ql-fill":{fill:t.palette.text.primary},"& .ql-picker, .ql-picker-options, .ql-picker-item, .ql-picker-label, button":{"&:focus":{outline:"none"}},"& .ql-toolbar.ql-snow":{border:"none",borderBottom:"solid 1px ".concat(t.palette.grey[50032]),"& .ql-formats":{"&:not(:last-of-type)":{marginRight:t.spacing(2)}},"& button":{padding:0,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,color:t.palette.text.primary},"& button svg, span svg":{width:20,height:20},"& .ql-picker-label":Object(o.a)(Object(o.a)({},t.typography.subtitle2),{},{color:t.palette.text.primary,"& .ql-stroke":{stroke:t.palette.text.primary}}),"& .ql-picker-label svg":Object(o.a)({},l&&{right:"0 !important",left:"auto !important"}),"& .ql-color,& .ql-background,& .ql-align ":{"& .ql-picker-label":{padding:0,display:"flex",alignItems:"center",justifyContent:"center"}},"& .ql-expanded":{"& .ql-picker-label":{borderRadius:4,color:t.palette.text.disabled,borderColor:"transparent !important",backgroundColor:t.palette.action.focus,"& .ql-stroke":{stroke:t.palette.text.disabled}},"& .ql-picker-options":{padding:0,marginTop:4,border:"none",maxHeight:200,overflow:"auto",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .ql-picker-item":{color:t.palette.text.primary},"&.ql-align":{"& .ql-picker-options":{padding:0,display:"flex"},"& .ql-picker-item":{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center"}},"&.ql-color, &.ql-background":{"& .ql-picker-options":{padding:8},"& .ql-picker-item":{margin:3,borderRadius:4,"&.ql-selected":{border:"solid 1px black"}}},"&.ql-font, &.ql-size, &.ql-header":{"& .ql-picker-options":{padding:t.spacing(1,0)},"& .ql-picker-item":{padding:t.spacing(.5,1.5)}}}}}})),d=l(0),b=["id","isSimple"],u=["Arial","Tahoma","Georgia","Impact","Verdana"],j=["8px","9px","10px","12px","14px","16px","20px","24px","32px","42px","54px","68px","84px","98px"],q=["Heading 1","Heading 2","Heading 3","Heading 4","Heading 5","Heading 6"];function p(){this.quill.history.undo()}function m(){this.quill.history.redo()}var x=a.Quill.import("attributors/style/size");x.whitelist=j,a.Quill.register(x,!0);var h=a.Quill.import("attributors/style/font");h.whitelist=u,a.Quill.register(h,!0);var f=["align","background","blockquote","bold","bullet","code","code-block","color","direction","font","formula","header","image","indent","italic","link","list","script","size","strike","table","underline","video"];function O(e){var t=e.id,l=e.isSimple,a=Object(r.a)(e,b);return Object(d.jsx)(c,Object(o.a)(Object(o.a)({},a),{},{children:Object(d.jsxs)("div",{id:t,children:[Object(d.jsxs)("div",{className:"ql-formats",children:[!l&&Object(d.jsxs)("select",{className:"ql-font",defaultValue:"",children:[Object(d.jsx)("option",{value:"",children:"Font"}),u.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))]}),!l&&Object(d.jsx)("select",{className:"ql-size",defaultValue:"16px",children:j.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))}),Object(d.jsxs)("select",{className:"ql-header",defaultValue:"",children:[q.map((function(e,t){return Object(d.jsx)("option",{value:t+1,children:e},e)})),Object(d.jsx)("option",{value:"",children:"Normal"})]})]}),Object(d.jsxs)("div",{className:"ql-formats",children:[Object(d.jsx)("button",{type:"button",className:"ql-bold"}),Object(d.jsx)("button",{type:"button",className:"ql-italic"}),Object(d.jsx)("button",{type:"button",className:"ql-underline"}),Object(d.jsx)("button",{type:"button",className:"ql-strike"})]}),!l&&Object(d.jsxs)("div",{className:"ql-formats",children:[Object(d.jsx)("select",{className:"ql-color"}),Object(d.jsx)("select",{className:"ql-background"})]}),Object(d.jsxs)("div",{className:"ql-formats",children:[Object(d.jsx)("button",{type:"button",className:"ql-list",value:"ordered"}),Object(d.jsx)("button",{type:"button",className:"ql-list",value:"bullet"}),!l&&Object(d.jsx)("button",{type:"button",className:"ql-indent",value:"-1"}),!l&&Object(d.jsx)("button",{type:"button",className:"ql-indent",value:"+1"})]}),!l&&Object(d.jsxs)("div",{className:"ql-formats",children:[Object(d.jsx)("button",{type:"button",className:"ql-script",value:"super"}),Object(d.jsx)("button",{type:"button",className:"ql-script",value:"sub"})]}),!l&&Object(d.jsxs)("div",{className:"ql-formats",children:[Object(d.jsx)("button",{type:"button",className:"ql-code-block"}),Object(d.jsx)("button",{type:"button",className:"ql-blockquote"})]}),Object(d.jsxs)("div",{className:"ql-formats",children:[Object(d.jsx)("button",{type:"button",className:"ql-direction",value:"rtl"}),Object(d.jsx)("select",{className:"ql-align"})]}),Object(d.jsxs)("div",{className:"ql-formats",children:[Object(d.jsx)("button",{type:"button",className:"ql-link"}),Object(d.jsx)("button",{type:"button",className:"ql-image"}),Object(d.jsx)("button",{type:"button",className:"ql-video"})]}),Object(d.jsxs)("div",{className:"ql-formats",children:[!l&&Object(d.jsx)("button",{type:"button",className:"ql-formula"}),Object(d.jsx)("button",{type:"button",className:"ql-clean"})]}),!l&&Object(d.jsxs)("div",{className:"ql-formats",children:[Object(d.jsx)("button",{type:"button",className:"ql-undo",children:Object(d.jsx)(s.a,{icon:"ic:round-undo",width:18,height:18})}),Object(d.jsx)("button",{type:"button",className:"ql-redo",children:Object(d.jsx)(s.a,{icon:"ic:round-redo",width:18,height:18})})]})]})}))}var v=["id","error","value","onChange","simple","sx"],g=Object(i.a)("div")((function(e){var t=e.theme;return{borderRadius:t.shape.borderRadius,border:"solid 1px ".concat(t.palette.grey[50032]),"& .ql-container.ql-snow":Object(o.a)(Object(o.a)({borderColor:"transparent"},t.typography.body1),{},{fontFamily:t.typography.fontFamily}),"& .ql-editor":{minHeight:200,"&.ql-blank::before":{fontStyle:"normal",color:t.palette.text.disabled},"& pre.ql-syntax":Object(o.a)(Object(o.a)({},t.typography.body2),{},{padding:t.spacing(2),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[900]})}}}));function k(e){var t=e.id,l=e.error,a=e.value,i=e.onChange,s=e.simple,c=void 0!==s&&s,b=e.sx,u=Object(r.a)(e,v),j={toolbar:{container:"#".concat(t),handlers:{undo:p,redo:m}},history:{delay:500,maxStack:100,userOnly:!0},syntax:!0,clipboard:{matchVisual:!1}};return Object(d.jsxs)(g,{sx:Object(o.a)(Object(o.a)({},l&&{border:function(e){return"solid 1px ".concat(e.palette.error.main)}}),b),children:[Object(d.jsx)(O,{id:t,isSimple:c}),Object(d.jsx)(n.a,Object(o.a)({value:a,onChange:i,modules:j,formats:f,placeholder:"Write something awesome..."},u))]})}},2877:function(e,t,l){"use strict";l.r(t),l.d(t,"defaultValues",(function(){return Q})),l.d(t,"FormSchema",(function(){return J})),l.d(t,"default",(function(){return U}));var r=l(194),o=l(12),a=l(269),n=l(1785),i=l(1781),s=l(1805),c=l(1825),d=l(1808),b=l(47),u=l(1821),j=l(671),q=l(1820),p=l(8),m=l.n(p),x=l(4),h=l(15),f=l(3),O=l(1),v=l(243),g=l(1002),k=l(1798),w=l(1802),y=l(1795),N=l(1682),D=l(407),S=l(544),C=l(1803),B=l(1774),F=l(1817),T=l(2785),E=l(408),P=l(1867),I=l(41),z=l(0);function R(){var e,t,l=Object(O.useRef)(null),r=Object(O.useState)(!1),o=Object(f.a)(r,2),a=o[0],n=o[1],i=Object(v.d)({initialValues:Q,validationSchema:J,onSubmit:function(){var e=Object(h.a)(m.a.mark((function e(t,l){var r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=l.resetForm,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:alert(JSON.stringify(Object(x.a)(Object(x.a)({},t),{},{photo:null===(r=t.photo)||void 0===r?void 0:r.name,startDate:t.startDate&&Object(E.d)(t.startDate),endDate:t.endDate&&Object(E.d)(t.endDate)}),null,2)),o();case 5:case"end":return e.stop()}}),e)})));return function(t,l){return e.apply(this,arguments)}}()}),s=i.dirty,c=i.errors,d=i.values,b=i.touched,j=i.isSubmitting,q=i.handleSubmit,p=i.setFieldValue,R=i.getFieldProps,W=function(){n((function(e){return!e}))};return Object(z.jsx)(v.b,{value:i,children:Object(z.jsx)(v.a,{autoComplete:"off",noValidate:!0,onSubmit:q,children:Object(z.jsxs)(g.a,{spacing:3,children:[Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({fullWidth:!0,label:"Full Name"},R("fullName")),{},{error:Boolean(b.fullName&&c.fullName),helperText:b.fullName&&c.fullName})),Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({fullWidth:!0,type:"email",label:"Email address"},R("email")),{},{error:Boolean(b.email&&c.email),helperText:b.email&&c.email})),Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({fullWidth:!0,label:"Age"},R("age")),{},{error:Boolean(b.age&&c.age),helperText:b.age&&c.age})),Object(z.jsxs)(g.a,{spacing:1,children:[Object(z.jsxs)(g.a,{spacing:{xs:2,sm:3},direction:{xs:"column",sm:"row"},children:[Object(z.jsx)(T.a,Object(x.a)(Object(x.a)({label:"Start date"},R("startDate")),{},{onChange:function(e){return p("startDate",e)},renderInput:function(e){return Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({fullWidth:!0},e),{},{error:Boolean(b.startDate&&c.startDate)}))},inputFormat:"dd/MM/yyyy"})),Object(z.jsx)(T.a,Object(x.a)(Object(x.a)({label:"End date"},R("endDate")),{},{onChange:function(e){return p("endDate",e)},renderInput:function(e){return Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({fullWidth:!0},e),{},{error:Boolean(b.endDate&&c.endDate)}))},inputFormat:"dd/MM/yyyy"}))]}),Boolean(b.startDate&&c.startDate)&&Object(z.jsx)(w.a,{sx:{px:2},error:!0,children:c.startDate}),Boolean(b.endDate&&c.endDate)&&Object(z.jsx)(w.a,{sx:{px:2},error:!0,children:c.endDate})]}),Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({fullWidth:!0,type:a?"text":"password",label:"Password"},R("password")),{},{InputProps:{endAdornment:Object(z.jsx)(y.a,{position:"end",children:Object(z.jsx)(N.a,{onClick:W,edge:"end",children:Object(z.jsx)(I.a,{icon:a?"eva:eye-fill":"eva:eye-off-fill"})})})},error:Boolean(b.password&&c.password),helperText:b.password&&c.password})),Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({fullWidth:!0,type:a?"text":"password",label:"Confirm Password"},R("confirmPassword")),{},{InputProps:{endAdornment:Object(z.jsx)(y.a,{position:"end",children:Object(z.jsx)(N.a,{onClick:W,edge:"end",children:Object(z.jsx)(I.a,{icon:a?"eva:eye-fill":"eva:eye-off-fill"})})})},error:Boolean(b.confirmPassword&&c.confirmPassword),helperText:b.confirmPassword&&c.confirmPassword})),Object(z.jsxs)("div",{children:[Object(z.jsx)(D.a,{variant:"subtitle2",sx:{color:"text.secondary"},gutterBottom:!0,children:"Editor"}),Object(z.jsx)(P.a,{id:"formik-content",value:d.quillEditor,onChange:function(e){return p("quillEditor",e)},error:Boolean(b.quillEditor&&c.quillEditor)}),b.quillEditor&&c.quillEditor&&Object(z.jsx)(w.a,{error:!0,sx:{px:2,textTransform:"capitalize"},children:b.quillEditor&&c.quillEditor})]}),Object(z.jsxs)("div",{children:[Object(z.jsxs)(g.a,{direction:"row",alignItems:"center",spacing:3,children:[Object(z.jsx)(S.a,{color:"warning",variant:"contained",onClick:function(){var e;null===(e=l.current)||void 0===e||e.click()},startIcon:Object(z.jsx)(I.a,{icon:"eva:cloud-upload-fill"}),children:"Upload photo"}),Object(z.jsxs)("div",{children:[(null===(e=d.photo)||void 0===e?void 0:e.name)&&Object(z.jsx)(D.a,{variant:"subtitle2",children:d.photo.name}),(null===(t=d.photo)||void 0===t?void 0:t.size)&&Object(z.jsx)(D.a,{variant:"caption",sx:{color:"text.secondary"},children:Object(u.b)(d.photo.size)})]}),Object(z.jsx)("input",{ref:l,id:"photo",name:"photo",type:"file",onChange:function(e){var t;p("photo",null===(t=e.target.files)||void 0===t?void 0:t[0])},style:{display:"none"}})]}),b.photo&&c.photo&&Object(z.jsx)(w.a,{sx:{px:2,display:"block"},error:!0,children:c.photo})]}),Object(z.jsxs)(g.a,{children:[Object(z.jsx)(C.a,{control:Object(z.jsx)(B.a,Object(x.a)(Object(x.a)({},R("terms")),{},{checked:d.terms})),label:" Terms and Conditions"}),b.terms&&c.terms&&Object(z.jsx)(w.a,{sx:{px:2},error:!0,children:c.terms})]}),Object(z.jsx)(F.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:j,disabled:!s,children:"Submit Formik Form"})]})})})}var W=l(2092),V=l(2725);function A(){var e,t,l,r,o,a=Object(O.useRef)(null),n=Object(O.useState)(!1),i=Object(f.a)(n,2),s=i[0],c=i[1],d=Object(W.e)({mode:"onTouched",resolver:Object(V.a)(J),defaultValues:Q}),b=d.watch,j=d.reset,q=d.control,p=d.register,v=d.setValue,R=d.handleSubmit,A=d.formState,M=A.errors,H=A.isSubmitting,L=A.isDirty,U=b(),G=function(){c((function(e){return!e}))},$=function(){var e=Object(h.a)(m.a.mark((function e(t){var l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:alert(JSON.stringify(Object(x.a)(Object(x.a)({},t),{},{photo:null===(l=t.photo)||void 0===l?void 0:l.name,startDate:t.startDate&&Object(E.d)(t.startDate),endDate:t.endDate&&Object(E.d)(t.endDate)}),null,2)),j();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsx)("form",{onSubmit:R($),children:Object(z.jsxs)(g.a,{spacing:3,children:[Object(z.jsx)(W.a,{name:"fullName",control:q,render:function(e){var t=e.field,l=e.fieldState.error;return Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({},t),{},{label:"Full Name",error:Boolean(l),helperText:null===l||void 0===l?void 0:l.message}))}}),Object(z.jsx)(W.a,{name:"email",control:q,render:function(e){var t=e.field,l=e.fieldState.error;return Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({},t),{},{label:"Email address",error:Boolean(l),helperText:null===l||void 0===l?void 0:l.message}))}}),Object(z.jsx)(W.a,{name:"age",control:q,render:function(e){var t=e.field,l=e.fieldState.error;return Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({},t),{},{label:"Age",error:Boolean(l),helperText:null===l||void 0===l?void 0:l.message}))}}),Object(z.jsxs)(g.a,{spacing:1,children:[Object(z.jsxs)(g.a,{spacing:{xs:2,sm:3},direction:{xs:"column",sm:"row"},children:[Object(z.jsx)(W.a,{name:"startDate",control:q,render:function(e){var t=e.field,l=e.fieldState.error;return Object(z.jsx)(T.a,Object(x.a)(Object(x.a)({},t),{},{label:"Start date",renderInput:function(e){return Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({fullWidth:!0},e),{},{error:Boolean(l)}))},inputFormat:"dd/MM/yyyy"}))}}),Object(z.jsx)(W.a,{name:"endDate",control:q,render:function(e){var t=e.field,l=e.fieldState.error;return Object(z.jsx)(T.a,Object(x.a)(Object(x.a)({},t),{},{label:"End date",renderInput:function(e){return Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({fullWidth:!0},e),{},{error:Boolean(l)}))},inputFormat:"dd/MM/yyyy"}))}})]}),Boolean(M.startDate)&&Object(z.jsx)(w.a,{sx:{px:2},error:!0,children:null===(e=M.startDate)||void 0===e?void 0:e.message}),Boolean(M.endDate)&&Object(z.jsx)(w.a,{sx:{px:2},error:!0,children:null===(t=M.endDate)||void 0===t?void 0:t.message})]}),Object(z.jsx)(W.a,{name:"password",control:q,render:function(e){var t=e.field,l=e.fieldState.error;return Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({},t),{},{label:"Password",type:s?"text":"password",InputProps:{endAdornment:Object(z.jsx)(y.a,{position:"end",children:Object(z.jsx)(N.a,{onClick:G,edge:"end",children:Object(z.jsx)(I.a,{icon:s?"eva:eye-fill":"eva:eye-off-fill"})})})},error:Boolean(l),helperText:null===l||void 0===l?void 0:l.message}))}}),Object(z.jsx)(W.a,{name:"confirmPassword",control:q,render:function(e){var t=e.field,l=e.fieldState.error;return Object(z.jsx)(k.a,Object(x.a)(Object(x.a)({},t),{},{label:"Confirm Password",type:s?"text":"password",InputProps:{endAdornment:Object(z.jsx)(y.a,{position:"end",children:Object(z.jsx)(N.a,{onClick:G,edge:"end",children:Object(z.jsx)(I.a,{icon:s?"eva:eye-fill":"eva:eye-off-fill"})})})},error:Boolean(l),helperText:null===l||void 0===l?void 0:l.message}))}}),Object(z.jsxs)("div",{children:[Object(z.jsx)(D.a,{variant:"subtitle2",sx:{color:"text.secondary"},gutterBottom:!0,children:"Editor"}),Object(z.jsx)(W.a,{name:"quillEditor",control:q,render:function(e){var t=e.field,l=e.fieldState.error;return Object(z.jsx)(P.a,{id:"hook-content",value:t.value,onChange:t.onChange,error:Boolean(l)})}}),Boolean(M.quillEditor)&&Object(z.jsx)(w.a,{error:!0,sx:{px:2,textTransform:"capitalize"},children:null===(l=M.quillEditor)||void 0===l?void 0:l.message})]}),Object(z.jsxs)("div",{children:[Object(z.jsxs)(g.a,{direction:"row",alignItems:"center",spacing:3,children:[Object(z.jsx)(S.a,{color:"warning",variant:"contained",onClick:function(){var e;null===(e=a.current)||void 0===e||e.click()},startIcon:Object(z.jsx)(I.a,{icon:"eva:cloud-upload-fill"}),children:"Upload photo"}),Object(z.jsxs)("div",{children:[(null===(r=U.photo)||void 0===r?void 0:r.name)&&Object(z.jsx)(D.a,{variant:"subtitle2",children:U.photo.name}),(null===(o=U.photo)||void 0===o?void 0:o.size)&&Object(z.jsx)(D.a,{variant:"caption",sx:{color:"text.secondary"},children:Object(u.b)(U.photo.size)})]}),Object(z.jsx)("input",Object(x.a)(Object(x.a)({},p("photo")),{},{ref:a,type:"file",onChange:function(e){var t,l=null===(t=e.target.files)||void 0===t?void 0:t[0];v("photo",l)},style:{display:"none"}}))]}),M.photo&&Object(z.jsx)(w.a,{sx:{px:2,display:"block"},error:!0,children:M.photo.message})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)(W.a,{name:"terms",control:q,render:function(e){var t=e.field;return Object(z.jsx)(C.a,{control:Object(z.jsx)(B.a,Object(x.a)(Object(x.a)({},t),{},{checked:t.value})),label:" Terms and Conditions"})}}),M.terms&&Object(z.jsx)(w.a,{sx:{px:2},error:!0,children:M.terms.message})]}),Object(z.jsx)(F.a,{fullWidth:!0,color:"info",size:"large",type:"submit",variant:"contained",loading:H,disabled:!L,children:"Submit React Hook Form"})]})})}var M=2e6,H=["image/jpg","image/jpeg","image/gif","image/png"],L=Object(o.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),Q={fullName:"",email:"",age:"",startDate:null,endDate:null,password:"",confirmPassword:"",quillEditor:"",draftEditor:"",photo:null,terms:!1},J=r.f().shape({fullName:r.h().required("Full name is required").min(6,"Mininum 6 characters").max(15,"Maximum 15 characters"),email:r.h().required("Email is required").email("That is not an email"),age:r.e().required("Age is required").positive("Age must be a positive number").integer().moreThan(18,"Age must be greater than or equal to 18").lessThan(120,"Age must be less than or equal to 120"),startDate:r.c().nullable().required("Start date is required"),endDate:r.c().required("End date is required").nullable().min(r.g("startDate"),"End date must be later than start date"),password:r.h().required("Password is required").min(6,"Password should be of minimum 6 characters length"),confirmPassword:r.h().required("Confirm password is required").oneOf([r.g("password")],"Password's not match"),quillEditor:r.h().required("Quill editor is required").min(200),draftEditor:r.d().test("max text","Draft editor Must Be At Least 200 Characters",(function(e){return e&&e.getCurrentContent().getPlainText("\x01").length>200})),terms:r.b().oneOf([!0],"Must Accept Terms and Conditions"),photo:r.d().required("Photo is is required").test("fileFormat","Unsupported Format",(function(e){return e&&H.includes(e.type)})).test("fileSize","File must be less than or equal to ".concat(Object(u.b)(M)),(function(e){return e&&e.size<=M}))});function U(){return Object(z.jsx)(j.a,{title:"Form Validation",children:Object(z.jsxs)(L,{children:[Object(z.jsx)(a.a,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(z.jsx)(n.a,{maxWidth:"lg",children:Object(z.jsx)(q.a,{heading:"Form Validation",links:[{name:"Components",href:b.d.components},{name:"Form Validation"}],moreLink:["https://formik.org/","https://react-hook-form.com/","https://github.com/jquense/yup"]})})}),Object(z.jsx)(n.a,{sx:{mt:10},children:Object(z.jsxs)(i.a,{container:!0,spacing:5,children:[Object(z.jsx)(i.a,{item:!0,xs:12,sm:6,children:Object(z.jsxs)(s.a,{sx:{position:"static"},children:[Object(z.jsx)(c.a,{title:"Formik Form"}),Object(z.jsx)(d.a,{children:Object(z.jsx)(R,{})})]})}),Object(z.jsx)(i.a,{item:!0,xs:12,sm:6,children:Object(z.jsxs)(s.a,{sx:{position:"static"},children:[Object(z.jsx)(c.a,{title:"React Hook Form"}),Object(z.jsx)(d.a,{children:Object(z.jsx)(A,{})})]})})]})})]})})}}}]);
//# sourceMappingURL=72.0f03eb2c.chunk.js.map
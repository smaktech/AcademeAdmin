(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[160],{2868:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var i=a(3),r=a(1),n=a(27),s=a(12),c=a(1785),l=a(269),o=a(407),u=a(544),j=a(717),m=a(47),b=a(671),d=a(4),h=a(8),x=a.n(h),O=a(15),p=a(194),f=a(243),g=a(1002),v=a(1770),y=a(1798),S=a(1817),w=a(105),k=a(415),E=a(474),P=a(0);function W(e){var t=e.onSent,a=e.onGetEmail,i=(Object(w.a)().resetPassword,Object(k.a)()),r=p.f().shape({email:p.h().email("Email must be a valid email address").required("Email is required")}),n=Object(f.d)({initialValues:{email:""},validationSchema:r,onSubmit:function(){var e=Object(O.a)(x.a.mark((function e(r,s){var c,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.setErrors,l=s.setSubmitting,e.prev=1,e.next=4,Object(E.c)(r.email);case 4:i.current&&(t(),a(n.values.email),l(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),i.current&&(c({afterSubmit:e.t0.message}),l(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}()}),s=n.errors,c=n.touched,l=n.isSubmitting,o=n.handleSubmit,u=n.getFieldProps;return Object(P.jsx)(f.b,{value:n,children:Object(P.jsx)(f.a,{autoComplete:"off",noValidate:!0,onSubmit:o,children:Object(P.jsxs)(g.a,{spacing:3,children:[s.afterSubmit&&Object(P.jsx)(v.a,{severity:"error",children:s.afterSubmit}),Object(P.jsx)(y.a,Object(d.a)(Object(d.a)({fullWidth:!0},u("email")),{},{type:"email",label:"Email address",error:Boolean(c.email&&s.email),helperText:c.email&&s.email})),Object(P.jsx)(S.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:l,children:"Reset Password"})]})})})}var B=a(302),q=Object(s.a)("div")((function(e){return{display:"flex",minHeight:"100%",alignItems:"center",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function z(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],d=Object(r.useState)(!1),h=Object(i.a)(d,2),x=h[0],O=h[1];return Object(P.jsx)(b.a,{title:"Reset Password",sx:{height:1},children:Object(P.jsxs)(q,{children:[Object(P.jsx)(j.a,{}),Object(P.jsx)(c.a,{children:Object(P.jsx)(l.a,{sx:{maxWidth:480,mx:"auto"},children:x?Object(P.jsxs)(l.a,{sx:{textAlign:"center"},children:[Object(P.jsx)(B.m,{sx:{mb:5,mx:"auto",height:160}}),Object(P.jsx)(o.a,{variant:"h3",gutterBottom:!0,children:"Request sent successfully"}),Object(P.jsxs)(o.a,{children:["We have sent a confirmation email to \xa0",Object(P.jsx)("strong",{children:a}),Object(P.jsx)("br",{}),"Please check your email."]}),Object(P.jsx)(u.a,{size:"large",variant:"contained",component:n.b,to:m.a.login,sx:{mt:5},children:"Back"})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(o.a,{variant:"h3",paragraph:!0,children:"Forgot your password?"}),Object(P.jsx)(o.a,{sx:{color:"text.secondary",mb:5},children:"Please enter the email address associated with your account and We will email you a link to reset your password."}),Object(P.jsx)(W,{onSent:function(){return O(!0)},onGetEmail:function(e){return s(e)}}),Object(P.jsx)(u.a,{fullWidth:!0,size:"large",component:n.b,to:m.a.login,sx:{mt:1},children:"Back"})]})})})]})})}}}]);
//# sourceMappingURL=160.2ff51e5b.chunk.js.map
(this.webpackJsonpcontest=this.webpackJsonpcontest||[]).push([[0],{35:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(28),a=c.n(r),s=(c(35),c(9)),j=c.n(s),i=c(13),b=c(10),d=c(14),l=c.n(d),u=c(1);var o=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(b.a)(a,2),d=s[0],o=s[1],O=Object(n.useState)(""),x=Object(b.a)(O,2),h=x[0],p=x[1],f=function(){var e=Object(i.a)(j.a.mark((function e(t,c,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("".concat("","/api/log/addlog"),{sdate:t,edate:c,desc:n});case 2:e.sent,alert("log entry added");case 4:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(c,d,h)},children:[Object(u.jsx)("label",{children:" Start Date "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{value:c,type:"datetime-local",name:"s_date",onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:" End Date "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{value:d,type:"datetime-local",name:"e_date",onChange:function(e){return o(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:" Description "}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{value:h,type:"textarea",name:"e_date",onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",children:" Submit "})]})})};var O=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],a=function(){var e=Object(i.a)(j.a.mark((function e(){var t,c,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat("","/api/log/list"));case 2:return t=e.sent,c=t.data,e.next=6,c;case 6:n=e.sent,a=n.result,r(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:" id "}),Object(u.jsx)("th",{children:" Start Date "}),Object(u.jsx)("th",{children:" End Date "}),Object(u.jsx)("th",{children:" Desc "})]})}),Object(u.jsx)("tbody",{children:c.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[" ",e.id," "]}),Object(u.jsx)("td",{children:e.startDate}),Object(u.jsx)("td",{children:e.endDate}),Object(u.jsxs)("td",{children:[" ",e.des," "]})]},e.id)}))})]})})},x=c(12);var h=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(x.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(x.b,{to:"/list",children:"List"})})]})})})},p=c(2);var f=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(h,{}),Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{exact:!0,path:"/list",component:O}),Object(u.jsx)(p.a,{exact:!0,path:"/",component:o})]})]})})};a.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.24417ba4.chunk.js.map
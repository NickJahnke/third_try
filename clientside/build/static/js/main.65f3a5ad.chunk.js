(this.webpackJsonpclientside=this.webpackJsonpclientside||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(19),i=n.n(r),o=(n(27),n.p,n(28),n(21)),j=n(2),u=n(4),h=n(5),l=n.n(h),b=function(e){var t=e.pirates,n=e.deletePirate;return Object(c.jsxs)("div",{children:[Object(c.jsx)(u.a,{to:"/new",children:"List new pirate!"}),t.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e,t){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Pirate name: ",Object(c.jsx)(u.a,{to:"/show/".concat(e._id),children:e.name})]}),Object(c.jsxs)("p",{children:["Pirate URL: ",e.url]}),Object(c.jsxs)("p",{children:["Pirate chests: ",e.treasureChests]}),Object(c.jsxs)("p",{children:["Pirate phrase: ",e.phrase]}),Object(c.jsxs)("p",{children:["Pirate position: ",e.position]}),Object(c.jsxs)("p",{children:["Peg Leg: ",e.pegLeg.toString()]}),Object(c.jsxs)("p",{children:["Eye Patch: ",e.eyePatch.toString()]}),Object(c.jsxs)("p",{children:["Hook Hand: ",e.hookHand.toString()]}),Object(c.jsx)("button",{onClick:function(t){return n=e._id,void Object(u.c)("/edit/".concat(n));var n},children:"Edit"}),Object(c.jsx)("button",{onClick:function(t){return n(e._id)},children:"Delete"})]},t)}))]})},d=function(e){var t=e.addPirate,n=Object(a.useState)(""),s=Object(j.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)(""),h=Object(j.a)(o,2),b=h[0],d=h[1],p=Object(a.useState)(0),O=Object(j.a)(p,2),x=O[0],g=O[1],f=Object(a.useState)(""),v=Object(j.a)(f,2),k=v[0],P=v[1],m=Object(a.useState)(""),C=Object(j.a)(m,2),S=C[0],y=C[1],L=Object(a.useState)(!1),D=Object(j.a)(L,2),H=D[0],w=D[1],E=Object(a.useState)(!1),_=Object(j.a)(E,2),N=_[0],U=_[1],F=Object(a.useState)(!1),R=Object(j.a)(F,2),A=R[0],B=R[1],I=Object(a.useState)([]),J=Object(j.a)(I,2),T=J[0],M=J[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"List a new product"}),T.map((function(e,t){return Object(c.jsxs)("p",{children:[e," "]},t)})),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:r,url:b,treasureChests:x,phrase:k,position:S,pegLeg:H,eyePatch:N,hookHand:A};l.a.post("http://localhost:4000/pirates/create",n).then((function(e){t(e.data),Object(u.c)("/pirates")})).catch((function(e){for(var t=e.response.data.errors,n=[],c=0,a=Object.keys(t);c<a.length;c++){var s=a[c];n.push(t[s].message)}console.log(n),M(n)}))},children:[Object(c.jsxs)("label",{children:["Pirate name:",Object(c.jsx)("input",{type:"text",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(c.jsxs)("label",{children:["Pirate URL:",Object(c.jsx)("input",{type:"text",value:b,onChange:function(e){return d(e.target.value)}})]}),Object(c.jsxs)("label",{children:["# treasure chests:",Object(c.jsx)("input",{type:"number",value:x,onChange:function(e){return g(e.target.value)}})]}),Object(c.jsxs)("label",{children:["Pirate phrase:",Object(c.jsx)("input",{type:"text",value:k,onChange:function(e){return P(e.target.value)}})]}),Object(c.jsxs)("label",{children:["Pirate position:",Object(c.jsxs)("select",{onChange:function(e){return y(e.target.value)},children:[Object(c.jsx)("option",{value:"Captain",children:" Captain "}),Object(c.jsx)("option",{value:"Deckhand",children:" Deckhand "}),Object(c.jsx)("option",{value:"Crow's Nest Scout",children:" Crow's Nest Scout "}),Object(c.jsx)("option",{value:"Deckhand",children:" Deckhand "}),Object(c.jsx)("option",{value:"Deckhand",children:" Deckhand "})]})]}),Object(c.jsxs)("label",{children:[" Peg Leg",Object(c.jsx)("input",{name:"pegLeg",type:"checkbox",checked:H,onChange:function(e){return w(e.target.checked)}})]}),Object(c.jsxs)("label",{children:[" Eye Patch",Object(c.jsx)("input",{name:"eyePatch",type:"checkbox",checked:N,onChange:function(e){return U(e.target.checked)}})]}),Object(c.jsxs)("label",{children:[" Hook Hand",Object(c.jsx)("input",{name:"hookHand",type:"checkbox",checked:A,onChange:function(e){return B(e.target.checked)}})]}),Object(c.jsx)("input",{type:"submit",value:"Add Pirate!"})]})]})},p=function(e){var t=e.id,n=e.updatePirate,s=Object(a.useState)({name:"",url:"",treasureChests:0,phrase:"",position:"",pegLeg:!1,eyePatch:!1,hookHand:!1}),r=Object(j.a)(s,2),i=r[0],o=r[1],h=Object(a.useState)(!1),b=Object(j.a)(h,2),d=b[0],p=b[1],O=Object(a.useState)(!1),x=Object(j.a)(O,2),g=x[0],f=x[1],v=Object(a.useState)(!1),k=Object(j.a)(v,2),P=k[0],m=k[1];Object(a.useEffect)((function(){l.a.get("http://localhost:4000/pirates/".concat(t)).then((function(e){console.log(e),o(e.data)})).catch((function(e){console.log(e)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Pirate name: ",i.name]}),Object(c.jsxs)("p",{children:["Pirate URL: ",i.url]}),Object(c.jsxs)("p",{children:["Pirate chests: ",i.treasureChests]}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.put("http://localhost:4000/pirates/".concat(t),{pegLeg:d,hookHand:P,eyePatch:g}).then((function(e){console.log(e),n(e.data)}))},children:[Object(c.jsxs)("p",{children:["Pegleg = ",i.pegLeg.toString()]}),Object(c.jsxs)("p",{children:["Hook hand = ",i.hookHand.toString()]}),Object(c.jsxs)("p",{children:["Eye patch = ",i.eyePatch.toString()]}),Object(c.jsxs)("label",{children:[" Peg Leg",Object(c.jsx)("input",{name:"pegLeg",type:"checkbox",onChange:function(e){return p(e.target.checked)}})]}),Object(c.jsxs)("label",{children:[" Eye Patch",Object(c.jsx)("input",{name:"eyePatch",type:"checkbox",onChange:function(e){return f(e.target.checked)}})]}),Object(c.jsxs)("label",{children:[" Hook Hand",Object(c.jsx)("input",{name:"hookHand",type:"checkbox",onChange:function(e){return m(e.target.checked)}})]}),Object(c.jsx)("input",{type:"submit"})]}),Object(c.jsxs)("p",{children:["Pirate phrase: ",i.phrase]}),Object(c.jsxs)("p",{children:["Pirate position: ",i.position]}),Object(c.jsx)(u.a,{to:"/pirates",children:"Home"})]})},O=function(e){var t=e.id,n=e.updatePirate,s=Object(a.useState)(""),r=Object(j.a)(s,2),i=r[0],o=r[1],h=Object(a.useState)(""),b=Object(j.a)(h,2),d=b[0],p=b[1],O=Object(a.useState)(0),x=Object(j.a)(O,2),g=x[0],f=x[1],v=Object(a.useState)(""),k=Object(j.a)(v,2),P=k[0],m=k[1],C=Object(a.useState)(""),S=Object(j.a)(C,2),y=S[0],L=S[1],D=Object(a.useState)(!1),H=Object(j.a)(D,2),w=H[0],E=H[1],_=Object(a.useState)(!1),N=Object(j.a)(_,2),U=N[0],F=N[1],R=Object(a.useState)(!1),A=Object(j.a)(R,2),B=A[0],I=A[1],J=Object(a.useState)([]),T=Object(j.a)(J,2),M=T[0],q=T[1];Object(a.useEffect)((function(){l.a.get("http://localhost:4000/pirates/".concat(t)).then((function(e){console.log(e),o(e.data.name),p(e.data.url),f(e.data.treasureChests),m(e.data.phrase),L(e.data.position),E(e.data.pegLeg),F(e.data.eyePatch),I(e.data.hookHand)})).catch((function(e){console.log(e)}))}),[]);return Object(c.jsxs)("div",{children:[M.map((function(e,t){return Object(c.jsxs)("p",{children:[e," "]},t)})),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.put("http://localhost:4000/pirates/".concat(t),{name:i,url:d,treasureChests:g,phrase:P,position:y,pegLeg:w,eyePatch:U,hookHand:B}).then((function(e){console.log(e),n(e.data),Object(u.c)("/pirates")})).catch((function(e){for(var t=e.response.data.errors,n=[],c=0,a=Object.keys(t);c<a.length;c++){var s=a[c];n.push(t[s].message)}console.log(n),q(n)}))},children:[Object(c.jsx)("input",{type:"text",value:i,onChange:function(e){return o(e.target.value)}}),Object(c.jsxs)("label",{children:["Pirate URL:",Object(c.jsx)("input",{type:"text",value:d,onChange:function(e){return p(e.target.value)}})]}),Object(c.jsxs)("label",{children:["# treasure chests:",Object(c.jsx)("input",{type:"number",value:g,onChange:function(e){return f(e.target.value)}})]}),Object(c.jsxs)("label",{children:["Pirate phrase:",Object(c.jsx)("input",{type:"text",value:P,onChange:function(e){return m(e.target.value)}})]}),Object(c.jsxs)("label",{children:["Pirate position:",Object(c.jsxs)("select",{onChange:function(e){return L(e.target.value)},children:[Object(c.jsx)("option",{value:"Captain",children:" Captain "}),Object(c.jsx)("option",{value:"Deckhand",children:" Deckhand "}),Object(c.jsx)("option",{value:"Crow's Nest Scout",children:" Crow's Nest Scout "}),Object(c.jsx)("option",{value:"Deckhand",children:" Deckhand "}),Object(c.jsx)("option",{value:"Deckhand",children:" Deckhand "})]})]}),Object(c.jsx)("input",{name:w,type:"checkbox",checked:w,onChange:function(e){return E(e.target.value)}}),Object(c.jsx)("input",{name:U,type:"checkbox",checked:U,onChange:function(e){return F(e.target.value)}}),Object(c.jsx)("input",{name:B,type:"checkbox",checked:B,onChange:function(e){return I(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Update"})]})]})},x=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1];Object(a.useEffect)((function(){l.a.get("http://localhost:4000/pirates").then((function(e){s(e.data)}))}),[]);var r=function(e){s(n.map((function(t){return t._id===e._id?e:t})))};return Object(c.jsx)("div",{children:Object(c.jsxs)(u.b,{children:[Object(c.jsx)(b,{path:"/pirates",pirates:n,deletePirate:function(e){l.a.delete("http://localhost:4000/pirates/".concat(e)).then((function(t){!function(e){s(n.filter((function(t){return t._id!==e})))}(e)}))}}),Object(c.jsx)(d,{path:"/new",addPirate:function(e){s([].concat(Object(o.a)(n),[e]))}}),Object(c.jsx)(p,{path:"/show/:id",updatePirate:r}),Object(c.jsx)(O,{path:"/edit/:id",updatePirate:r})]})})};var g=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(x,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),f()}},[[52,1,2]]]);
//# sourceMappingURL=main.65f3a5ad.chunk.js.map
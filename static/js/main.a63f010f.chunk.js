(this["webpackJsonpdelilah-resto-app"]=this["webpackJsonpdelilah-resto-app"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(0),r=a.n(n),o=a(25),s=a.n(o),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,146)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))},l=a(33),j=a(17),d=(a(109),a(110),a(111),a(139)),u=(a(112),a(58)),p=a.n(u),b=a(71),h=a(61),m=a(44),O=a(35),f=a(142);a(77);function x(){var e=Object(n.useState)({username:"",password:""}),t=Object(O.a)(e,2),a=t[0],r=t[1],o=function(e){var t=e.target.name,c=e.target.value;r(Object(m.a)(Object(m.a)({},a),{},Object(h.a)({},t,c)))},s=Object(j.f)(),i=function(){var e=Object(b.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.username&&a.password&&(c=Object(m.a)({},a),console.log(JSON.stringify(c)),function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3001/login",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,t.ok?(localStorage.setItem("token",a.token),s.push("/DelilahRestoApp/menu"),document.querySelector(".navBar").classList.remove("navBarHome")):alert("Usuario o contrase\xf1a incorrectos"),e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(0),alert("Network error"),e.abrupt("return","network error");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"login",children:Object(c.jsxs)(f.a,{className:"loginForm",onSubmit:i,children:[Object(c.jsxs)(f.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(f.a.Label,{children:"Usuario o correo eletr\xf3nico"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"Enter email or usename",name:"username",value:a.username,onChange:o})]}),Object(c.jsxs)(f.a.Group,{controlId:"formBasicPassword",children:[Object(c.jsx)(f.a.Label,{children:"Contrase\xf1a"}),Object(c.jsx)(f.a.Control,{type:"password",placeholder:"Password",name:"password",value:a.password,onChange:o,autoComplete:"on"})]}),Object(c.jsx)(d.a,{className:"submitBtn",type:"submit",variant:"contained",children:"INICIAR SESI\xd3N"})]})})}a(118);function g(){var e=Object(j.g)(),t=Object(n.useState)("/DelilahRestoApp"),a=Object(O.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){var e=window.location.pathname;o("/DelilahRestoApp"===e?"navBarHome":"/DelilahRestoApp/manage"===e?"navBarManage":"navBarMenu")}),[e]),Object(c.jsx)("div",{className:r,children:Object(c.jsx)("h1",{className:"title",children:"Delilah Rest\xf3"})})}a(80);var v=a(140),N=a(84),S=a.n(N),C=a(85),R=a.n(C);var A=function(e){var t=e.id,a=e.img,r=e.name,o=e.price,s=Object(n.useState)(!0),i=Object(O.a)(s,2),l=i[0],d=i[1],u=Object(j.g)();return Object(n.useEffect)((function(){var e=window.location.pathname;"/DelilahRestoApp/menu"===e?d(!0):"/DelilahRestoApp/order"===e&&d(!1)}),[u]),Object(c.jsxs)("div",{className:"productContainer",children:[Object(c.jsx)("img",{src:a,alt:"Food"}),Object(c.jsx)("h3",{children:r}),Object(c.jsxs)("h6",{children:["$",o]}),l?Object(c.jsx)(v.a,{className:"addBtn","aria-label":"delete",onClick:function(){var e=JSON.parse(localStorage.getItem("cart"));console.log(e),e.push({id:t,name:r,img:a,price:o}),console.log("add "+r+t),console.log(e),localStorage.setItem("cart",JSON.stringify(e))},children:Object(c.jsx)(S.a,{fontSize:"large",style:{color:"#fc885c"}})}):Object(c.jsx)(v.a,{className:"addBtn","aria-label":"delete",onClick:function(){var e=JSON.parse(localStorage.getItem("cart"));e=e.filter((function(e){return e.id!==t})),console.log(),console.log(e),localStorage.setItem("cart",JSON.stringify(e))},children:Object(c.jsx)(R.a,{fontSize:"large",style:{color:"#3addda"}})})]})},w=[{id:1,name:"Bagel de salm\xf3n",img:"./images/bagel-de-salmon.png",price:425},{id:2,name:"Hamburguesa Cl\xe1sica",img:"./images/hamburguesa-clasica.PNG",price:350},{id:3,name:"Sandwich veggie",img:"./images/sandwich-veggie.PNG",price:310},{id:4,name:"Ensalada veggie",img:"./images/ensalada-veggie.PNG",price:340},{id:5,name:"Focaccia",img:"./images/focaccia.PNG",price:300},{id:6,name:"Sandwich Focaccia",img:"./images/sandwich-focaccia.PNG",price:440}];var I=function(e){var t=e.removeEmptyCartAlert;return Object(n.useEffect)((function(){setTimeout((function(){t()}),3e3)})),Object(c.jsx)("div",{children:Object(c.jsx)("h3",{className:"alert",children:"Carrito vac\xedo"})})},D=a(143),y=a(141),B=a(145),E=(a(120),D.a.Option);var k=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("cart"))),t=Object(O.a)(e,2),a=t[0],r=t[1],o=Object(j.f)();return Object(n.useEffect)((function(){var e=function(){var e=JSON.parse(localStorage.getItem("cart"));r(e)};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[]),Object(c.jsxs)("div",{className:"order",children:[Object(c.jsxs)("section",{children:[Object(c.jsx)("h3",{className:"title",children:"Detalle"}),a.map((function(e){return Object(c.jsx)(A,Object(m.a)({},e),e.id)}))]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h3",{className:"title",children:"Forma de pago"}),Object(c.jsxs)(D.a,{suffixIcon:Object(c.jsx)(B.a,{}),className:"selectPayment",defaultValue:"Efectivo",style:{minWidth:50},onChange:function(e){console.log("selected ".concat(e))},bordered:!1,size:"large",dropdownMatchSelectWidth:!1,children:[Object(c.jsx)(E,{value:"cash",children:"Efectivo"}),Object(c.jsx)(E,{value:"card",children:"Tarjeta d\xe9bito o cr\xe9dito"})]})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h3",{className:"title",children:"Direcci\xf3n"}),Object(c.jsx)(y.a,{placeholder:"Direcci\xf3n de domicilio",size:"large",bordered:!1})]}),Object(c.jsx)(d.a,{className:"submitBtn",variant:"contained",onClick:function(){o.push("/DelilahRestoApp/confirmed")},children:"CONFIRMAR PEDIDO"}),Object(c.jsx)(d.a,{className:"linkBtn",variant:"outlined",onClick:function(){o.push("/DelilahRestoApp/menu")},children:"VOLVER AL MENU"})]})};var L=function(){return Object(c.jsx)("div",{})};var P=function(){return Object(c.jsx)("div",{})};var G=function(){return Object(c.jsx)("div",{})};var J=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Error"}),Object(c.jsx)(l.b,{to:"/DelilahRestoApp",children:"Inicio"})]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(g,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/DelilahRestoApp",component:function(){var e=Object(j.f)();return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(x,{}),Object(c.jsx)(d.a,{className:"linkBtn",variant:"outlined",onClick:function(){e.push("/DelilahRestoApp/register")},children:"REGISTRARSE"}),Object(c.jsx)(d.a,{className:"linkBtn",variant:"outlined",onClick:function(){localStorage.setItem("cart",JSON.stringify([])),e.push("/DelilahRestoApp/menu")},children:"Continuar sin usuario"})]})}}),Object(c.jsx)(j.a,{path:"/DelilahRestoApp/register",component:function(){var e=Object(j.f)();return Object(c.jsxs)("div",{className:"registerForm",children:[Object(c.jsxs)(f.a,{children:[Object(c.jsxs)(f.a.Group,{controlId:"formBasicUser",children:[Object(c.jsx)(f.a.Label,{children:"Usuario"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"User"})]}),Object(c.jsxs)(f.a.Group,{controlId:"formBasicName",children:[Object(c.jsx)(f.a.Label,{children:"Nombre y Apellido"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"Name"})]}),Object(c.jsxs)(f.a.Group,{controlId:"formBasicMail",children:[Object(c.jsx)(f.a.Label,{children:"Correo electr\xf3nico"}),Object(c.jsx)(f.a.Control,{type:"email",placeholder:"E-mail"})]}),Object(c.jsxs)(f.a.Group,{controlId:"formBasicTel",children:[Object(c.jsx)(f.a.Label,{children:"Tel\xe9fono"}),Object(c.jsx)(f.a.Control,{type:"tel",placeholder:"Telephone number"})]}),Object(c.jsxs)(f.a.Group,{controlId:"formBasicPassword",children:[Object(c.jsx)(f.a.Label,{children:"Direcci\xf3n de env\xedo"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"Direcci\xf3n de env\xedo"})]}),Object(c.jsxs)(f.a.Group,{controlId:"formBasicPassword",children:[Object(c.jsx)(f.a.Label,{children:"Contrase\xf1a"}),Object(c.jsx)(f.a.Control,{type:"password",placeholder:"Password",autoComplete:"on"})]}),Object(c.jsx)(d.a,{className:"submitBtn",type:"submit",variant:"contained",children:"CREAR CUENTA"})]}),Object(c.jsx)(d.a,{className:"linkBtn",variant:"outlined",onClick:function(){e.push("/DelilahRestoApp"),document.querySelector(".navBar").classList.add("navBarHome")},children:"INICAR SESI\xd3N"})]})}}),Object(c.jsx)(j.a,{path:"/DelilahRestoApp/menu",component:function(){var e=Object(n.useState)(w),t=Object(O.a)(e,2),a=t[0],r=(t[1],Object(j.f)()),o=Object(n.useState)(!1),s=Object(O.a)(o,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){console.log(a)}),[a]),Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsx)("h3",{className:"title",children:"Nuestros platos"}),a.map((function(e){return Object(c.jsx)(A,Object(m.a)({},e),e.id)})),i&&Object(c.jsx)(I,{removeEmptyCartAlert:function(){l(!1)}}),Object(c.jsx)(d.a,{className:"submitBtn",variant:"contained",onClick:function(){0===JSON.parse(localStorage.getItem("cart")).length?l(!0):r.push("/DelilahRestoApp/order")},children:"CARRITO"}),Object(c.jsx)(d.a,{className:"linkBtn",variant:"outlined",onClick:function(){r.push("/DelilahRestoApp")},children:"CERRAR SESI\xd3N"})]})}}),Object(c.jsx)(j.a,{path:"/DelilahRestoApp/order",component:k}),Object(c.jsx)(j.a,{path:"/DelilahRestoApp/confirmed",component:L}),Object(c.jsx)(j.a,{path:"/DelilahRestoApp/follow",component:P}),Object(c.jsx)(j.a,{path:"/DelilahRestoApp/manage",component:G}),Object(c.jsx)(j.a,{path:"*",component:J})]})]})}),document.getElementById("root")),i()},77:function(e,t,a){},80:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.a63f010f.chunk.js.map
(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{16:function(e,t,i){},20:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i(9),s=i.n(a),r=(i(15),i(3)),d=i(22),j=i.p+"static/media/scissors.a3c5c941.gif",n=i.p+"static/media/paper.4b763dd5.gif",o=i.p+"static/media/rock.17869112.gif",l=i.p+"static/media/rps.9f9674be.gif",h=(i(16),i(10)),O=i.n(h),b=(i(18),i(0));O.a.init();var m=function(e){var t={borderRadius:25};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"row",style:{marginTop:100,marginLeft:50,marginRight:50},children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("button",{onClick:function(){return e.onAddOption("piedra")},style:t,children:Object(b.jsx)("img",{src:o,width:"300",height:"300",style:t})})}),Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("button",{onClick:function(){return e.onAddOption("papel")},style:t,children:Object(b.jsx)("img",{src:n,width:"300",height:"300",style:t})})}),Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("button",{onClick:function(){return e.onAddOption("tijera")},style:t,children:Object(b.jsx)("img",{src:j,width:"300",style:t})})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-6",children:Object(b.jsxs)("h2",{className:"mt-5 text-center text-primary",children:["Your score ",Object(b.jsx)("h1",{children:e.score})]})}),Object(b.jsx)("div",{className:"col-6",children:Object(b.jsxs)("h2",{className:"mt-5 text-center text-primary",children:["The Machine's score ",Object(b.jsx)("h1",{children:e.pcScore})]})})]}),!1===e.load?Object(b.jsxs)(d.a,{className:"row",style:{marginTop:30,marginLeft:50,marginRight:50},children:[Object(b.jsx)("div",{className:"col d-flex justify-content-center",children:Object(b.jsxs)("div",{style:t,children:["piedra"===e.myChoice&&Object(b.jsx)("img",{src:o,width:"300",height:"300",style:t,"data-aos":"fade-right","data-aos-duration":"1500"}),"papel"===e.myChoice&&Object(b.jsx)("img",{src:n,width:"300",height:"300",style:t,"data-aos":"fade-right","data-aos-duration":"1500"}),"tijera"===e.myChoice&&Object(b.jsx)("img",{src:j,width:"300",height:"300",style:t,"data-aos":"fade-right","data-aos-duration":"1500"})]})}),Object(b.jsx)("div",{className:"col ",children:Object(b.jsxs)("div",{style:t,children:["piedra"===e.pcChoice&&Object(b.jsx)("img",{src:o,width:"300",height:"300",style:t,"data-aos":"fade-left","data-aos-duration":"1500"}),"papel"===e.pcChoice&&Object(b.jsx)("img",{src:n,width:"300",height:"300",style:t,"data-aos":"fade-left","data-aos-duration":"1500"}),"tijera"===e.pcChoice&&Object(b.jsx)("img",{src:j,width:"300",height:"300",style:t,"data-aos":"fade-left","data-aos-duration":"1500"})]})})]}):Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)("img",{src:l,width:"300",height:"300",style:t,"data-aos":"zoom-in","data-aos-duration":"1500"})})]})},p=i(23);var x=function(e){var t=Object(c.useState)(""),i=Object(r.a)(t,2),a=i[0],s=i[1],d=Object(c.useState)("start"),j=Object(r.a)(d,2),n=j[0],o=j[1],l=Object(c.useState)("0"),h=Object(r.a)(l,2),O=h[0],x=h[1],u=Object(c.useState)(0),g=Object(r.a)(u,2),f=g[0],y=g[1],v=Object(c.useState)(0),w=Object(r.a)(v,2),N=w[0],C=w[1],S=Object(c.useState)(0),A=Object(r.a)(S,2),R=A[0],T=A[1],Y=Object(c.useState)(!1),E=Object(r.a)(Y,2),k=E[0],L=E[1];return Object(b.jsxs)("div",{children:[R<5&&Object(b.jsx)(m,{myChoice:a,result:n,pcChoice:O,onAddOption:function(e){var t=["piedra","papel","tijera"];L(!0),setTimeout((function(){var i=t[Math.floor(3*Math.random())],c=e;T(R+1),"piedra"===c&&"papel"===i?(o("lose"),C(N+1)):"piedra"===c&&"tijera"===i||"papel"===c&&"piedra"===i?(o("win"),y(f+1)):"papel"===c&&"tijera"===i||"tijera"===c&&"piedra"===i?(o("lose"),C(N+1)):"tijera"===c&&"papel"===i?(o("win"),y(f+1)):c===i&&o("draw"),x(i),s(c),L(!1)}),2e3)},score:f,pcScore:N,load:k}),Object(b.jsx)("div",{className:"row",children:R>=5&&Object(b.jsxs)("div",{style:{marginTop:200,marginLeft:100},children:[Object(b.jsx)("div",{style:{fontFamily:"Lato"},children:f>=3?Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["YOU WON THE GAME!! YOUR SCORE WAS ",f," :)"]}),Object(b.jsx)("img",{src:"https://media.giphy.com/media/3oriO6RwVAK6Yoq2WY/giphy.gif",width:"450"})]}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["YOU LOST THE GAME!! YOUR SCORE WAS ",f]}),Object(b.jsx)("img",{src:"https://media.giphy.com/media/3osxYyAVLIq2wrEyeA/giphy.gif",width:"550"})]})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)(p.a,{className:"mt-5",variant:"outline-primary",value:"tijera",size:"lg",onClick:function(){return window.location.reload(!1)},children:"TRY AGAIN"})})]})})]})};i(20);function u(){return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(x,{})})})}s.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.33222976.chunk.js.map
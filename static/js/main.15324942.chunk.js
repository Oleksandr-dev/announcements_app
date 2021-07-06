(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{36:function(n,e,t){},37:function(n,e,t){},48:function(n,e,t){"use strict";t.r(e);var r,c,i,o,a,l,u,s,d,b,j,f,h,x,p,m,g=t(0),O=t.n(g),y=t(25),v=t.n(y),w=(t(36),t(3)),C=(t(37),t(11)),k=t(4),E=t(7),$=t(31),A=t(6),S=function(n,e){switch(e.type){case"DELETE_ANNOUNCE":return Object(A.a)(Object(A.a)({},n),{},{announces:n.announces.filter((function(n){return n.id!==e.payload}))});case"ADD_ANNOUNCE":return Object(A.a)(Object(A.a)({},n),{},{announces:[e.payload].concat(Object($.a)(n.announces))});case"EDIT_ANNOUNCE":return Object(A.a)(Object(A.a)({},n),{},{announces:n.announces.map((function(n){return n.id===e.payload.id&&(n.title=e.payload.title,n.text=e.payload.text,n.date=e.payload.date),n}))});case"SEARCH":return Object(A.a)(Object(A.a)({},n),{},{searchString:e.payload,searchResult:n.announces.filter((function(n){return n.title.toLowerCase().includes(e.payload.toLowerCase())}))});case"CLEAR_SEARCH":return Object(A.a)(Object(A.a)({},n),{},{searchString:"",searchResult:[]});default:return n}},N=t(1),R={announces:[{id:1,title:"test task",text:"this is test task",date:1625235894394},{id:2,title:"test",text:"task",date:1625236895394},{id:3,title:"task",text:"test",date:1625237896394}],searchString:"",searchResult:[]},D=Object(g.createContext)(R),F=function(n){var e=n.children,t=Object(g.useReducer)(S,R),r=Object(E.a)(t,2),c=r[0],i=r[1];return Object(N.jsx)(D.Provider,{value:{announces:c.announces,searchResult:c.searchResult,searchString:c.searchString,deleteAnnounce:function(n){i({type:"DELETE_ANNOUNCE",payload:n})},searchAnnounces:function(n){i({type:"SEARCH",payload:n})},cleanSearchResult:function(){i({type:"CLEAR_SEARCH"})},addAnnounce:function(n){i({type:"ADD_ANNOUNCE",payload:n})},editAnnounce:function(n){i({type:"EDIT_ANNOUNCE",payload:n})}},children:e})},L=t(2),z=["title","titleId"];function G(){return(G=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function T(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}function _(n,e){var t=n.title,O=n.titleId,y=T(n,z);return g.createElement("svg",G({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"451.847px",height:"451.847px",viewBox:"0 0 451.847 451.847",style:{enableBackground:"new 0 0 451.847 451.847"},xmlSpace:"preserve",fill:"#5d6d7d",ref:e,"aria-labelledby":O},y),t?g.createElement("title",{id:O},t):null,r||(r=g.createElement("g",null,g.createElement("path",{d:"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"}))),c||(c=g.createElement("g",null)),i||(i=g.createElement("g",null)),o||(o=g.createElement("g",null)),a||(a=g.createElement("g",null)),l||(l=g.createElement("g",null)),u||(u=g.createElement("g",null)),s||(s=g.createElement("g",null)),d||(d=g.createElement("g",null)),b||(b=g.createElement("g",null)),j||(j=g.createElement("g",null)),f||(f=g.createElement("g",null)),h||(h=g.createElement("g",null)),x||(x=g.createElement("g",null)),p||(p=g.createElement("g",null)),m||(m=g.createElement("g",null)))}var H,I,M,P,U,q,B,Y,J,X,K,Q,V,W,Z,nn,en,tn,rn,cn,on,an,ln,un,sn=g.forwardRef(_),dn=(t.p,L.c.div(H||(H=Object(w.a)(["\n  width: max-content;\n  min-width: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  background-color: ",";\n  border-radius: 6px;\n  cursor: pointer;\n  user-select: none;\n\n  text-transform: uppercase;\n  font-size: 12px;\n  color: ",";\n  font-family: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){var e=n.theme;return n.redColor?e.$red:e.$gray}),(function(n){return n.theme.$gainsboro}),(function(n){return n.theme.$secondaryFont}),(function(n){var e=n.theme;return n.redColor?e.$darkRed:e.$darkpurple}))),bn=function(n){var e=n.children,t=n.onClick,r=n.redColor;return Object(N.jsx)(dn,{onClick:t,redColor:r,children:e})},jn=L.c.div(I||(I=Object(w.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  \n  & > :first-child {\n      margin-right: 15px;\n  }\n\n  @media (max-width:445px) {\n    flex-direction: column;\n    margin: 0 0 0 0;\n    \n    & > * {\n    width: 100%;\n    }\n  & > :first-child {\n        margin-bottom: 15px;\n    }\n  }\n"]))),fn=function(n){var e=n.children;return Object(N.jsx)(jn,{children:e})},hn=t(29),xn=t.n(hn),pn=L.c.li(M||(M=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  background-color: ",";\n  transition: 20ms all 20ms;\n  border-radius: 6px;\n  fill: ",";\n\n  &:hover {\n    color: ",";\n    fill: ",";\n    background-color: ",";\n  }\n\n  ","\n"])),(function(n){return n.theme.$darkslategray}),(function(n){return n.theme.$textGray}),(function(n){return n.theme.$gainsboro}),(function(n){return n.theme.$gainsboro}),(function(n){return n.theme.$darkgray}),(function(n){var e=n.isActive,t=n.theme;return e&&"\n    color: ".concat(t.$gainsboro,";\n    fill: ").concat(t.$gainsboro,";\n    background-color: ").concat(t.$darkgray,";\n  ")})),mn=L.c.div(P||(P=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  & > :first-child{\n    margin-right: 15px;\n  }\n"]))),gn=L.c.span(U||(U=Object(w.a)(["\n  font-size: 18px;\n  font-family: ",";\n  &:first-letter {text-transform: uppercase}\n"])),(function(n){return n.theme.$secondaryFont})),On=Object(L.c)(sn)(q||(q=Object(w.a)(["\n  height: 20px;\n  width: 20px;\n  fill: context-fill;\n  margin-left: 15px;\n\n  ","\n"])),(function(n){return n.isActive&&"\n    transform: rotate(180deg);\n    transition: 0.50s;\n  "})),yn=L.c.div(B||(B=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n\n  & > :not(:last-child) {\n    margin-bottom: 15px;\n  }\n\n  & >:last-child {\n    margin: 0 auto;\n  }\n"]))),vn=L.c.div(Y||(Y=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),wn=function(n){var e,t=n.announce,r=Object(g.useState)(!1),c=Object(E.a)(r,2),i=c[0],o=c[1],a=Object(k.f)(),l=Object(g.useContext)(D).deleteAnnounce;return Object(N.jsxs)(pn,{isActive:i,children:[Object(N.jsxs)(mn,{onClick:function(){return o((function(n){return!n}))},children:[Object(N.jsx)(gn,{children:t.title}),Object(N.jsxs)(vn,{children:[Object(N.jsx)("span",{children:(e=t.date,xn()(e).format("HH:mm DD MMMM YYYY"))}),Object(N.jsx)(On,{isActive:i})]})]}),i&&Object(N.jsxs)(yn,{children:[Object(N.jsxs)("span",{children:["Text: ",t.text]}),Object(N.jsxs)(fn,{children:[Object(N.jsx)(bn,{onClick:function(){return n=t.id,void a.push("/editAnnouncement/".concat(n));var n},children:"Edit"}),Object(N.jsx)(bn,{onClick:function(){return l(t.id)},redColor:!0,children:"Delete"})]})]})]})},Cn=L.c.h3(J||(J=Object(w.a)(["\n  font-size: 23px;\n  color: ",";\n  margin-bottom: 15px;\n"])),(function(n){return n.theme.$gainsboro})),kn=function(n){var e=n.children;return Object(N.jsx)(Cn,{children:e})},En=t(22),$n=L.c.ul(X||(X=Object(w.a)(["\n  & > :not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),An=function(n){var e=n.searchedAnnouncements,t=void 0===e?[]:e,r=Object(g.useContext)(D),c=r.announces,i=r.searchString.length>0,o=(i?t:c).map((function(n){return Object(N.jsx)(wn,{announce:n},n.id)})),a=o.length?o:"No results",l=function(n,e){var t=e.filter((function(e){if(0===n.filter((function(n){if(n.id===e.id)return!0})).length)return!0})),r=new Set;n.forEach((function(n){var e=n.title.split(" ");console.log(e);var c,i=Object(En.a)(e);try{var o=function(){var e=c.value;t.forEach((function(t){if(console.log(typeof t.title),console.log(typeof e),console.log(t.title.includes(e)),t.title.toLowerCase().includes(e.toLowerCase())){var c,i=n.text.split(" "),o=Object(En.a)(i);try{for(o.s();!(c=o.n()).done;){var a=c.value;t.text.includes(a.toLowerCase())&&r.add(t)}}catch(l){o.e(l)}finally{o.f()}}}))};for(i.s();!(c=i.n()).done;)o()}catch(a){i.e(a)}finally{i.f()}}));var c=[];return r.forEach((function(n){return c.push(n)})),c}(t,c).map((function(n){return Object(N.jsx)(wn,{announce:n},n.id)}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(kn,{children:i?"Searched announcements":"History"}),Object(N.jsx)($n,{children:a}),Object(N.jsx)(kn,{children:i&&o.length?"Similar announcements":""}),Object(N.jsx)($n,{children:l})]})},Sn=L.c.input(K||(K=Object(w.a)(["\n  width: 100%;\n  min-width: 150px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  padding: 6px;\n  height: 36px;\n  background-color: ",";\n  border-radius: 6px;\n  font-size: 15px;\n  color: ",";\n  font-family: ",";\n  border: none;\n  \n  \n  &:hover {\n        border-color: ",";\n        cursor: auto;\n    }\n\n    &:focus-within {\n        outline: none;\n        border-color: ",";\n    }\n    \n    &::placeholder {\n            color: ",";\n            font-weight: normal;\n            opacity: 1;\n        }\n"])),(function(n){return n.theme.$gray}),(function(n){return n.theme.$gainsboro}),(function(n){return n.theme.$secondaryFont}),(function(n){return n.theme.$textGray}),(function(n){return n.theme.$textGray}),(function(n){return n.theme.$textGray})),Nn=function(n){return Object(N.jsx)(Sn,Object(A.a)({},n))},Rn=L.c.div(Q||(Q=Object(w.a)(["\n  position: relative;\n  //margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  & > :not(:last-child){\n    margin-right: 15px;\n  }\n\n  @media (max-width:650px) {\n    flex-direction: column;\n    margin: 0 0 0 0;\n\n    & > * {\n      width: 100%;\n    }\n    & > :not(:last-child) {\n      margin-bottom: 15px;\n    }\n  }\n"]))),Dn=L.c.div(V||(V=Object(w.a)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  & > :first-child{\n    margin-right: 15px;\n  }\n  \n  @media (max-width:450px) {\n    flex-direction: column;\n    margin: 0 0 0 0;\n\n    & > * {\n      width: 100%;\n    }\n    & > :not(:last-child) {\n      margin-bottom: 15px;\n    }\n"]))),Fn=(Object(L.c)(jn)(W||(W=Object(w.a)(["\n  justify-content: flex-start;\n  //padding-left: 20px;\n"]))),Object(L.c)(dn)(Z||(Z=Object(w.a)(["\n  /*margin-left: 15px;*/\n  //padding-right: 20px;\n"]))),Object(L.c)(Nn)(nn||(nn=Object(w.a)(["\n  padding-right: 10px ;\n  padding-left: 10px;\n"])))),Ln=function(){var n=Object(g.useState)(""),e=Object(E.a)(n,2),t=e[0],r=e[1],c=Object(g.useContext)(D),i=c.searchAnnounces,o=c.cleanSearchResult,a=Object(k.f)();return Object(N.jsxs)(Rn,{children:[Object(N.jsx)(bn,{onClick:function(){a.push("/newAnnouncement")},children:"+ New message"}),Object(N.jsxs)(Dn,{children:[Object(N.jsx)(Fn,{type:"search",value:t,onChange:function(n){var e=n.target.value;r(e),e?i(e):o()},placeholder:"Search"}),Object(N.jsx)(bn,{onClick:function(){r(""),o()},children:"Clear"})]})]})},zn=function(){var n=Object(g.useContext)(D),e=n.searchString,t=n.searchResult,r=Object(g.useState)([]),c=Object(E.a)(r,2),i=c[0],o=c[1];return Object(g.useEffect)((function(){o(""!==e?t:[])}),[e]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Ln,{}),Object(N.jsx)(An,{searchedAnnouncements:i})]})},Gn=t(30),Tn=L.c.textarea(en||(en=Object(w.a)(["\n  width: 100%;\n  min-height: 100px;\n  height: max-content;\n  min-width: 150px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  padding: 6px;\n  background-color: ",";\n  border-radius: 6px;\n  font-size: 15px;\n  color: ",";\n  font-family: ",";\n  border: none;\n  resize: none;\n  \n  \n  &:hover {\n        border-color: ",";\n        cursor: auto;\n    }\n\n    &:focus-within {\n        outline: none;\n        border-color: ",";\n    }\n    \n    &::placeholder {\n            color: ",";\n            font-weight: normal;\n            opacity: 1;\n        }\n"])),(function(n){return n.theme.$gray}),(function(n){return n.theme.$gainsboro}),(function(n){return n.theme.$secondaryFont}),(function(n){return n.theme.$textGray}),(function(n){return n.theme.$textGray}),(function(n){return n.theme.$textGray})),_n=function(n){return Object(N.jsx)(Tn,Object(A.a)({},n))},Hn=L.c.form(tn||(tn=Object(w.a)(["\n  height: 100%;\n  padding: 15px;\n  background-color: ",";\n  border-radius: 6px;\n  \n  & > :not(:last-child) {\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.$darkslategray})),In=function(){var n=Object(k.f)(),e=Object(g.useState)(""),t=Object(E.a)(e,2),r=t[0],c=t[1],i=Object(g.useState)(""),o=Object(E.a)(i,2),a=o[0],l=o[1],u=Object(g.useContext)(D).addAnnounce,s=function(e){e.preventDefault();var t=Date.now(),i={id:Object(Gn.uuid)(),title:r,text:a,date:t};u(i),c(""),l(""),n.push("/")};return Object(N.jsxs)(Hn,{onSubmit:s,children:[Object(N.jsx)(Nn,{type:"title",id:"title",name:"title",maxlength:"30",required:!0,value:r,placeholder:"Title",onChange:function(n){return c(n.target.value)}}),Object(N.jsx)(_n,{type:"text",id:"text",name:"text",maxlength:"500",rows:8,required:!0,value:a,placeholder:"Description",onChange:function(n){return l(n.target.value)}}),Object(N.jsxs)(fn,{children:[Object(N.jsx)(bn,{type:"submit",onClick:s,children:"Add"}),Object(N.jsx)(bn,{type:"reset",redColor:!0,onClick:function(){n.push("/")},children:"Cancel"})]})]})},Mn=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(kn,{children:"Add new announcement"}),Object(N.jsx)(In,{})]})},Pn=L.c.form(rn||(rn=Object(w.a)(["\n  height: 100%;\n  padding: 15px;\n  background-color: ",";\n  border-radius: 6px;\n  \n  & > :not(:last-child) {\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.$darkslategray})),Un=function(){var n=Object(g.useContext)(D).announces,e=Object(g.useContext)(D).editAnnounce,t=Object(k.g)(),r=Object(k.f)(),c={};n.forEach((function(n){n.id===t.id&&(c=Object(A.a)({},n))}));var i=Object(g.useState)(c.title),o=Object(E.a)(i,2),a=o[0],l=o[1],u=Object(g.useState)(c.text),s=Object(E.a)(u,2),d=s[0],b=s[1],j=function(n){n.preventDefault();var c=Date.now(),i={id:t.id,title:a,text:d,date:c};e(i),l(""),b(""),r.push("/")};return Object(N.jsxs)(Pn,{onSubmit:j,children:[Object(N.jsx)(Nn,{type:"title",id:"title",name:"title",maxlength:"30",required:!0,value:a,placeholder:"Title",onChange:function(n){return l(n.target.value)}}),Object(N.jsx)(_n,{type:"text",id:"text",name:"text",maxlength:"500",rows:8,required:!0,value:d,placeholder:"Description",onChange:function(n){return b(n.target.value)}}),Object(N.jsxs)(fn,{children:[Object(N.jsx)(bn,{type:"submit",onClick:j,children:"Save"}),Object(N.jsx)(bn,{type:"reset",redColor:!0,onClick:function(){r.push("/")},children:"Cancel"})]})]})},qn=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(kn,{children:"Edit announcement"}),Object(N.jsx)(Un,{})]})},Bn={$background:"#1d2431",$mediumslateblue:"#6860fa",$darkslategray:"#283142",$mediumpurple:"#847fe0",$darkpurple:"#423f6f",$darkgray:"#283445",$gainsboro:"#d9dedf",$textGray:"#5d6d7d",$gray:"#3c4460",$red:"#c2545d",$darkRed:"#91363d",$mainFont:"'Roboto', sans-serif",$secondaryFont:"'Lato', sans-serif"},Yn=Object(L.b)(cn||(cn=Object(w.a)(["\n    body {\n        background-color: ",";\n        font-family: ",";\n        font-size: 15px;\n        color: ",";\n    }\n\n    *,\n    *::before,\n    *::after{\n        margin: 0;\n        padding: 0;\n        box-sizing: inherit;\n    }\n\n    p {\n        margin: 0;\n    }\n\n    body {\n        margin: 0;\n    }\n\n    img {\n        border-style: none;\n    }\n\n    button,\n    input,\n    optgroup,\n    select,\n    textarea {\n        font-family: inherit;\n        font-size: 100%;\n        margin: 0; \n    }\n\n    button,\n    input {\n        overflow: visible;\n    }\n\n    button,\n    select {\n        text-transform: none;\n    }\n"])),(function(n){return n.theme.$background}),(function(n){return n.theme.$mainFont}),(function(n){return n.theme.$textGray})),Jn=Object(L.c)(C.b)(on||(on=Object(w.a)(["\n  padding: 6px;\n  border-radius: 6px;\n  cursor: pointer;\n  \n  &:hover {\n      background-color: ",";\n  }\n"])),(function(n){return n.theme.$darkslategray})),Xn=L.c.img(an||(an=Object(w.a)(["\n  height: 50px;\n"]))),Kn=function(){return Object(N.jsx)(Jn,{to:"/",children:Object(N.jsx)(Xn,{src:"header-logo.png"})})},Qn=L.c.div(ln||(ln=Object(w.a)(["\n  display: flex;\n  padding: 10px 50px;\n  margin-bottom: 20px;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ",";\n\n  @media (max-width:445px) {\n    padding: 5px 10px;\n  }\n"])),(function(n){return n.theme.$darkpurple})),Vn=function(){return Object(N.jsx)(Qn,{children:Object(N.jsx)(Kn,{})})},Wn=L.c.div(un||(un=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 0 50px;\n\n  & > :not(:last-child) {\n    margin-bottom: 15px;\n  }\n"])));var Zn=function(){return Object(N.jsxs)(L.a,{theme:Bn,children:[Object(N.jsx)(Yn,{}),Object(N.jsx)(F,{children:Object(N.jsxs)(C.a,{children:[Object(N.jsx)(Vn,{}),Object(N.jsx)(Wn,{children:Object(N.jsxs)(k.c,{children:[Object(N.jsx)(k.a,{path:"/",exact:!0,component:function(){return Object(N.jsx)(zn,{})}}),Object(N.jsx)(k.a,{path:"/newAnnouncement",component:function(){return Object(N.jsx)(Mn,{})}}),Object(N.jsx)(k.a,{path:"/editAnnouncement/:id",component:function(){return Object(N.jsx)(qn,{})}})]})})]})})]})},ne=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};v.a.render(Object(N.jsx)(O.a.StrictMode,{children:Object(N.jsx)(Zn,{})}),document.getElementById("root")),ne()}},[[48,1,2]]]);
//# sourceMappingURL=main.15324942.chunk.js.map
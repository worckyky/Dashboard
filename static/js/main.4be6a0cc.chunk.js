(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{16:function(e,t,n){e.exports={cards__container:"cards_cards__container__1MI67"}},20:function(e,t,n){e.exports={EditableText:"EditableText_EditableText__HyRBJ",EditableText__container:"EditableText_EditableText__container__16cOH",EditableText__deleteBtn:"EditableText_EditableText__deleteBtn__PodfU",EditableText__textArea:"EditableText_EditableText__textArea__zY3ZE"}},24:function(e,t,n){e.exports={imageContainer:"ImageContent_imageContainer__18x-t",imageDefault:"ImageContent_imageDefault__g4jzV"}},35:function(e,t,n){e.exports={select__container:"GraphContent_select__container__dJdxP"}},48:function(e,t,n){},49:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(2),c=n.n(r),i=n(22),o=n.n(i),u=(n(48),n(49),n(7)),s=n(12),l=n(16),d=n.n(l),f=n(20),p=n.n(f),b=n(41),j=function(e){var t=e.id,n=e.text,c=e.deleteText,i=e.changeText,o=Object(r.useState)(!1),u=Object(s.a)(o,2),l=u[0],d=u[1],f=Object(r.useState)(n),j=Object(s.a)(f,2),h=j[0],O=j[1],g=function(){0===h.length?i("Set Text"):i(h),d(!l)},T=function(){g()};return Object(a.jsx)("div",{className:p.a.EditableText__container,children:l?Object(a.jsx)(b.a,{value:h,autoFocus:!0,onChange:function(e){O(e.currentTarget.value)},onBlur:T,onKeyPress:function(e){"Enter"===e.key&&g()},className:p.a.EditableText__textArea,wrap:"soft"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{onDoubleClick:T,className:p.a.EditableText,children:n}),Object(a.jsx)("button",{className:p.a.EditableText__deleteBtn,onClick:function(){c()},children:"X"})]})},t)},h=n(9),O=n(10),g=n.n(O),T=n(14),m=n(40),_=n(29);n(56);_.a.initializeApp({apiKey:"AIzaSyB0q4QiB8a_7nUkqBb5LnVwJLu34KMmhcE",authDomain:"dashboard-f0f7b.firebaseapp.com",databaseURL:"https://dashboard-f0f7b-default-rtdb.firebaseio.com",projectId:"dashboard-f0f7b",storageBucket:"dashboard-f0f7b.appspot.com",messagingSenderId:"769801425490",appId:"1:769801425490:web:5f8a42b422dd1d4d0d458b"});var E,x=_.a.firestore().collection("Paragraph"),v={fetchSimpleContent:function(){var e=Object(T.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createParagraph:function(){var e=Object(T.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x.doc(t).set({id:t,Text:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deleteParagraph:function(){var e=Object(T.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x.doc(t).delete());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateParagraph:function(){var e=Object(T.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x.doc(t).update({id:t,Text:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()};!function(e){e.FETCH_SIMPLE_CONTENT_DATA="FETCH_SIMPLE_CONTENT_DATA",e.NEW_PARAGRAPH_TEXT="NEW_PARAGRAPH_TEXT"}(E||(E={}));var C,A={Title:"Simple title",Paragraph:[],newParagraph:""},y=function(e){return{type:E.NEW_PARAGRAPH_TEXT,text:e}},N=function(e){return{type:E.FETCH_SIMPLE_CONTENT_DATA,data:e}},S={fetchSimpleContentTC:function(){return function(){var e=Object(T.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.fetchSimpleContent();case 2:n=e.sent,t(N(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},createParagraphTC:function(e,t){return function(){var n=Object(T.a)(g.a.mark((function n(a){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.createParagraph(e,t);case 2:a(S.fetchSimpleContentTC());case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},deleteParagraphTC:function(e){return function(){var t=Object(T.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.deleteParagraph(e);case 2:n(S.fetchSimpleContentTC());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateParagraphTC:function(e,t){return function(){var n=Object(T.a)(g.a.mark((function n(a){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.updateParagraph(e,t);case 2:a(S.fetchSimpleContentTC());case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},I=n(58),D=function(){var e=Object(h.c)((function(e){return e.SimpleContent.Title})),t=Object(h.c)((function(e){return e.SimpleContent.Paragraph})),n=Object(h.c)((function(e){return e.SimpleContent.newParagraph})),c=Object(h.b)();Object(r.useEffect)((function(){c(S.fetchSimpleContentTC())}),[]);return Object(a.jsxs)("div",{className:d.a.cards__container,children:[Object(a.jsx)("h2",{children:e}),t.map((function(e){return Object(a.jsx)(j,{id:e.id,text:e.Text,deleteText:function(){c(S.deleteParagraphTC(e.id))},changeText:function(t){c(S.updateParagraphTC(e.id,t))}},e.id)})),Object(a.jsxs)("span",{children:[Object(a.jsx)("input",{type:"text",value:n,onChange:function(e){c(y(e.currentTarget.value))},placeholder:"Write some text"}),Object(a.jsx)("button",{onClick:function(){c(S.createParagraphTC(Object(I.a)(),n))},children:"Add Paragraph"})]})]})},w=n(24),P=n.n(w);!function(e){e.FETCH_IMAGE_CONTENT_DATA="FETCH_IMAGE_CONTENT_DATA",e.CHANGE_TITLE="CHANGE_TITLE",e.SET_IMAGE="SET_IMAGE"}(C||(C={}));var H={Title:"Image title",image:"",imageName:""},G=function(e){return localStorage.setItem("ImageContent",JSON.stringify(e)),e},V=function(e){return{type:C.FETCH_IMAGE_CONTENT_DATA,data:e}},R=function(e,t){return{type:C.SET_IMAGE,img:e,imageName:t}};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L=r.createElement("g",null,r.createElement("path",{d:"m457 101h-100.188l-9.743-29.23c-6.136-18.405-23.293-30.77-42.692-30.77h-96.754c-19.399 0-36.556 12.365-42.691 30.77l-9.744 29.23h-24.188v-25c0-19.299-15.701-35-35-35h-20c-19.299 0-35 15.701-35 35v26.812c-23.568 6.208-41 27.698-41 53.188v260c0 30.327 24.673 55 55 55h402c30.327 0 55-24.673 55-55v-260c0-30.327-24.673-55-55-55zm-386-25c0-2.757 2.243-5 5-5h20c2.757 0 5 2.243 5 5v25h-30zm411 340c0 13.785-11.215 25-25 25h-402c-13.785 0-25-11.215-25-25v-260c0-13.785 11.215-25 25-25h111c6.456 0 12.188-4.131 14.23-10.257l13.162-39.486c2.046-6.135 7.764-10.257 14.231-10.257h96.754c6.467 0 12.186 4.122 14.23 10.256l13.162 39.487c2.043 6.126 7.775 10.257 14.231 10.257h111c13.785 0 25 11.215 25 25z"}),r.createElement("circle",{cx:436,cy:176,r:15}),r.createElement("path",{d:"m106 161h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"}),r.createElement("g",null,r.createElement("path",{d:"m256 411c-74.439 0-135-60.561-135-135s60.561-135 135-135 135 60.561 135 135-60.561 135-135 135zm0-240c-57.897 0-105 47.103-105 105s47.103 105 105 105 105-47.103 105-105-47.103-105-105-105z"})),r.createElement("g",null,r.createElement("path",{d:"m256 351c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm0-120c-24.813 0-45 20.187-45 45s20.187 45 45 45 45-20.187 45-45-20.187-45-45-45z"})));function M(e,t){var n=e.title,a=e.titleId,c=F(e,["title","titleId"]);return r.createElement("svg",k({id:"Capa_1",enableBackground:"new 0 0 512 512",height:512,viewBox:"0 0 512 512",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,L)}var B,J=r.forwardRef(M),z=(n.p,function(){var e=Object(h.c)((function(e){return e.ImageContent})),t=e.image,n=e.imageName,c=e.Title,i=Object(r.useState)(""),o=Object(s.a)(i,2),u=o[0],l=o[1],f=Object(h.b)();Object(r.useEffect)((function(){var e=localStorage.getItem("ImageContent");null!==e&&f(V(JSON.parse(e)))}),[]);return Object(a.jsxs)("div",{className:d.a.cards__container,children:[Object(a.jsx)("h2",{children:c}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:n||"Some image Data"}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{onChange:function(e){var t=new FileReader,n=e.target.files&&e.target.files[0];n&&(l(URL.createObjectURL(n)),t.onloadend=function(){f(R(t.result,n.name))},t.readAsDataURL(n))},style:{display:"none"},type:"file",id:"file",accept:".jpg, .jpeg, .png"})}),Object(a.jsx)("label",{htmlFor:"file",children:function(e){return 0!==n.length?Object(a.jsx)("div",{className:P.a.imageContainer,style:{backgroundImage:"url(".concat(e||t,")")}}):Object(a.jsx)("div",{className:P.a.imageContainer,children:Object(a.jsx)(J,{className:P.a.imageDefault})})}(u)})]})]})}),U=function(e){var t=e.linkID,n=Object(r.useState)("VJmNtYZl8i4"),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(r.useEffect)((function(){11===t.length&&o(t)}),[t]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("iframe",{width:"100%",height:"auto",src:"https://www.youtube.com/embed/".concat(i),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})};!function(e){e.CHANGE_TITLE="CHANGE_TITLE",e.SET_VIDEO="SET_VIDEO",e.FETCH_VIDEO_DATA="FETCH_VIDEO_DATA"}(B||(B={}));var W,X={VideoID:"",VideoLink:"",Title:"Video title"},K=function(e){return localStorage.setItem("VideoContent",JSON.stringify(e)),e},q=function(e){return{type:B.FETCH_VIDEO_DATA,data:e}},Y=function(e,t){return{type:B.SET_VIDEO,videoLink:e,VideoID:t}},Z=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!0),o=Object(s.a)(i,2),u=o[0],l=o[1],f=Object(h.c)((function(e){return e.VideoContent})),p=f.Title,b=f.VideoID,j=Object(h.b)();Object(r.useEffect)((function(){var e=localStorage.getItem("VideoContent");null!==e&&j(q(JSON.parse(e)))}),[]);return Object(a.jsxs)("div",{className:d.a.cards__container,children:[Object(a.jsx)("h2",{children:p}),Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)("input",{type:"text",value:n,onChange:function(e){var t=e.currentTarget.value;43===t.length?l(!1):l(!0),c(t)},placeholder:"enter valid link name"}),Object(a.jsx)("button",{onClick:function(){j(Y(n,n.split("=").reverse()[0]))},disabled:u,children:"Search"})]}),Object(a.jsx)(U,{linkID:b})]})},Q=n(35),$=n.n(Q),ee=n(36),te=function(e){var t=e.data;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{style:{display:"flex",maxWidth:900},children:Object(a.jsx)(ee.a,{width:600,height:300,chartType:"ColumnChart",loader:Object(a.jsx)("div",{children:"Loading Chart"}),data:t,options:{vAxis:{minValue:0,maxValue:80}},legendToggle:!0})})})};!function(e){e.CHANGE_GRAPH_VALUE="CHANGE_GRAPH_VALUE",e.FETCH_GRAPH_CONTENT="FETCH_GRAPH_CONTENT"}(W||(W={}));var ne={Title:"Front End Frameworks",Graphs:[[["React","React"],["2016",60],["2017",50],["2018",40]],[["Vue","Vue"],["2016",70],["2017",80],["2018",40]],[["Angular","Angular"],["2016",40],["2017",60],["2018",80]],[["Ember","Ember"],["2016",70],["2017",30],["2018",80]]],DefaultData:[["React","React"],["2016",60],["2017",50],["2018",40]]},ae=function(e){return localStorage.setItem("GraphContent",JSON.stringify(e)),e},re=function(e){return{type:W.FETCH_GRAPH_CONTENT,data:e}},ce=function(e){return{type:W.CHANGE_GRAPH_VALUE,value:e}},ie=function(){var e=Object(h.c)((function(e){return e.GraphContent})).Graphs,t=Object(h.c)((function(e){return e.GraphContent})).DefaultData,n=Object(h.c)((function(e){return e.GraphContent.Title})),c=Object(h.b)();return Object(r.useEffect)((function(){var e=localStorage.getItem("GraphContent");null!==e&&c(re(JSON.parse(e)))}),[]),Object(a.jsxs)("div",{className:d.a.cards__container,children:[Object(a.jsx)("h2",{children:n}),Object(a.jsxs)("div",{className:$.a.select__container,children:[Object(a.jsx)("p",{children:"Chose Stack:"}),Object(a.jsx)("select",{name:"select",id:Object(I.a)(),onChange:function(e){c(ce(e.currentTarget.value))},children:e.map((function(e){return Object(a.jsx)("option",{value:e[0][0],children:e[0][0]},e[0][0])}))})]}),Object(a.jsx)(te,{data:t})]})},oe=function(){var e=Object(r.useState)([{position:0,order:0},{position:1,order:1},{position:2,order:2},{position:3,order:3}]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(),o=Object(s.a)(i,2),l=o[0],d=o[1];Object(r.useEffect)((function(){var e=localStorage.getItem("DashboardPosition");null!==e&&c(JSON.parse(e))}),[]);var f=[Object(a.jsx)(D,{}),Object(a.jsx)(z,{}),Object(a.jsx)(Z,{}),Object(a.jsx)(ie,{})],p=function(e,t){return"HOVER"===t?(e.currentTarget.style.background="#f6f8fa",e.currentTarget.style.border="1px dashed gray",e.currentTarget.style.borderRadius="6px"):(e.currentTarget.style.background="#ffffff",e.currentTarget.style.border="1px solid #ffffff",e.currentTarget.style.borderRadius="0px")},b=function(e){p(e,"END")};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Dashboard name"}),Object(a.jsx)("div",{style:{display:"Flex",flexWrap:"wrap"},children:n.sort((function(e,t){return e.order>t.order?1:-1})).map((function(e,t){return Object(a.jsx)("div",{style:{cursor:"Grab",padding:"8px"},draggable:"true",onDragStart:function(t){!function(e,t){d(t)}(0,e)},onDragLeave:function(e){b(e)},onDragEnd:function(e){b(e)},onDragOver:function(e){!function(e){e.preventDefault(),p(e,"HOVER")}(e)},onDrop:function(t){!function(e,t){e.preventDefault();var a=n.map((function(e){return e.position===t.position?Object(u.a)(Object(u.a)({},e),{},{order:(null===l||void 0===l?void 0:l.order)||0}):e.position===(null===l||void 0===l?void 0:l.position)?Object(u.a)(Object(u.a)({},e),{},{order:t.order}):e}));c(a),localStorage.setItem("DashboardPosition",JSON.stringify(a)),p(e,"END")}(t,e)},children:f[e.position]},t)}))})]})};var ue=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"App__container",children:Object(a.jsx)(oe,{})})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},le=n(18),de=n(38),fe=n(39),pe=Object(le.combineReducers)({SimpleContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.FETCH_SIMPLE_CONTENT_DATA:return Object(u.a)(Object(u.a)({},e),{},{Paragraph:Object(m.a)(t.data)});case E.NEW_PARAGRAPH_TEXT:return Object(u.a)(Object(u.a)({},e),{},{newParagraph:t.text});default:return e}},ImageContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.FETCH_IMAGE_CONTENT_DATA:return G(Object(u.a)(Object(u.a)({},e),t.data));case C.SET_IMAGE:return G(Object(u.a)(Object(u.a)({},e),{},{image:t.img,imageName:t.imageName}));default:return e}},VideoContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.FETCH_VIDEO_DATA:return K(Object(u.a)(Object(u.a)({},e),t.data));case B.CHANGE_TITLE:return K(Object(u.a)(Object(u.a)({},e),{},{Title:t.title}));case B.SET_VIDEO:return K(Object(u.a)(Object(u.a)({},e),{},{VideoLink:t.videoLink,VideoID:t.VideoID}));default:return e}},GraphContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.CHANGE_GRAPH_VALUE:return ae(Object(u.a)(Object(u.a)({},e),{},{DefaultData:e.Graphs.find((function(e){if(e[0][0]===t.value)return e}))||[]}));case W.FETCH_GRAPH_CONTENT:return ae(Object(u.a)(Object(u.a)({},e),t.data));default:return e}}}),be=Object(le.createStore)(pe,Object(de.composeWithDevTools)(Object(le.applyMiddleware)(fe.a)));o.a.render(Object(a.jsx)(h.a,{store:be,children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ue,{})})}),document.getElementById("root")),se()}},[[57,1,2]]]);
//# sourceMappingURL=main.4be6a0cc.chunk.js.map
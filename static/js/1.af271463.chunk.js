"use strict";(self.webpackChunksamurai_way_k2=self.webpackChunksamurai_way_k2||[]).push([[1],{7991:function(e,s,t){t.d(s,{B:function(){return d}});var n=t(1413),a=t(2791),r=t(1134),o="FormTextArea_form__++ufq",i="FormTextArea_error__BNSQL",c="FormTextArea_offError__-BI44",l=t(2060),u=t(184),d=(0,a.memo)((function(e){console.log("textarea");var s=(0,r.cI)(),t=s.register,a=s.handleSubmit,d=s.watch,_=s.formState.errors,m=s.reset;return(0,u.jsxs)("form",{onSubmit:a((function(s){console.log(s),e.addMessages(String(d("messages"))),m()})),className:o,children:[(0,u.jsx)("textarea",(0,n.Z)((0,n.Z)({},t("messages",{required:"\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e\u0435"})),{},{placeholder:_.messages?_.messages.message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",className:_.messages?i:c})),(0,u.jsx)(l.z,{name:e.nameBut,disabled:!1})]})}))},605:function(e,s,t){t.d(s,{s:function(){return u}});var n=t(1413),a=t(5987),r=(t(2791),t(7689)),o=t(3531),i=t(184),c=["isAuth"],l=function(e){return{isAuth:e.loginAuthorization.isAuth}};function u(e){return(0,o.$j)(l)((function(s){var t=s.isAuth,o=(0,a.Z)(s,c);return t?(0,i.jsx)(e,(0,n.Z)({},o)):(0,i.jsx)(r.Fg,{to:"/login"})}))}},1001:function(e,s,t){t.r(s),t.d(s,{default:function(){return Q}});var n=t(2791),a="ContentProfile_content__e1iS3",r=t(3531),o=t(7781),i="MyProfile_content__profile__Raojo",c="MyProfile_data__DGihs",l=t(2580),u=t(9439),d="MyProfileStatus_blockStatus__S5eeH",_="MyProfileStatus_span__hu22B",m=t(4051),f=t(5012),h=t(6916),x=function(e){return e.proFilePage.status},j=(0,h.P1)([function(e){return e.proFilePage.profile}],(function(e){return e})),g=t(184),v=function(){console.log("status");var e=(0,m.CG)(x),s=(0,m.TL)(),t=(0,n.useState)(!0),a=(0,u.Z)(t,2),r=a[0],o=a[1],i=(0,n.useState)(e),c=(0,u.Z)(i,2),l=c[0],h=c[1];return(0,n.useEffect)((function(){h(e)}),[e]),(0,g.jsx)("div",{className:d,children:r?(0,g.jsx)("span",{onDoubleClick:function(){o(!1)},className:_,children:e||"no status"}):(0,g.jsx)("input",{autoFocus:!0,onBlur:function(){o(!0),s((0,f.kL)(l))},onChange:function(e){h(e.currentTarget.value)},value:l,placeholder:"status"})})},P=t(7140),p=function(){var e,s,t;console.log("\u0432\u0435\u0441\u044c \u043f\u0440\u043e\u0444");var n=(0,m.CG)(j);return n?(0,g.jsxs)("div",{className:i,children:[(0,g.jsx)(v,{}),(0,g.jsx)("div",{className:c,children:(0,g.jsx)("table",{children:(0,g.jsxs)("tbody",{children:[(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Full name"}),(0,g.jsx)("td",{children:n.fullName})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"AboutMe"}),(0,g.jsx)("td",{children:n.aboutMe})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Contacts"}),(0,g.jsx)("td",{children:(0,g.jsx)("a",{href:null===(e=n.contacts)||void 0===e?void 0:e.facebook,children:(0,g.jsx)(P.e,{name:"faceBook"})})}),(0,g.jsx)("td",{children:(0,g.jsx)("a",{href:null===(s=n.contacts)||void 0===s?void 0:s.vk,children:(0,g.jsx)(P.e,{name:"vk"})})}),(0,g.jsx)("td",{children:(0,g.jsx)("a",{href:null===(t=n.contacts)||void 0===t?void 0:t.github,children:(0,g.jsx)(P.e,{name:"gitHub"})})})]})]})})})]}):(0,g.jsx)(l.g,{})},y={container:"MyPost_container__clo-n",content__myPost:"MyPost_content__myPost__815An"},N=t(7991),k="Post_containerPost__R3E0Q",b="Post_post__I++A9",D="Post_content__profUsers__zysyY",F="Post_img__MldoO",S="Post_postData__0g+PD",A="Post_message__hjs3M",C="Post_like__v7Iy6",M="Post_delPost__xpE7l",w="Post_dataPostContainer__Yn5-n",B="Post_dataPost__4VX6B",I="Post_psevdoElement__fFc35",Z=(0,h.P1)([function(e){return e.proFilePage.postData}],(function(e){return e})),U=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],E=(new Date).getDate(),T=(new Date).getFullYear(),z=(new Date).getMonth()+1,G=(new Date).getDay(),L=(0,n.memo)((function(){var e=(0,m.CG)(Z),s=(0,r.I0)(),t=(0,n.useCallback)((function(e,t){s((0,f.cK)(e,t))}),[e]),a=U[G-1];return(0,g.jsx)(g.Fragment,{children:e.map((function(e){return(0,g.jsxs)("div",{className:k,children:[(0,g.jsxs)("div",{className:b,children:[(0,g.jsxs)("div",{className:D,children:[(0,g.jsx)("div",{className:F,children:(0,g.jsx)("img",{src:"https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480",alt:""})}),(0,g.jsx)("div",{className:S,children:(0,g.jsx)("div",{className:A,children:e.sms})})]}),(0,g.jsxs)("div",{className:C,children:[(0,g.jsxs)("span",{onClick:function(){return t(e.id,e.like)},children:[(0,g.jsx)(P.e,{name:"like"}),e.like]}),(0,g.jsx)("div",{className:M,onClick:function(){return t=e.id,void s((0,f.Uc)(t));var t},children:(0,g.jsx)(P.e,{name:"delete"})})]})]}),(0,g.jsxs)("div",{className:w,children:[(0,g.jsxs)("div",{className:B,children:[(0,g.jsx)("div",{children:a}),(0,g.jsxs)("div",{children:[E,"/",z,"/",T]})]}),(0,g.jsx)("div",{className:I})]})]},e.id)}))})})),q=(0,n.memo)((function(e){return console.log("my post"),(0,g.jsxs)("div",{className:y.continer,children:[(0,g.jsx)("div",{className:y.content__myPost,children:(0,g.jsx)(N.B,{nameBut:"send",messages:e.postData,addMessages:e.addPost})}),(0,g.jsx)(L,{})]})})),H=(0,r.$j)((function(e){return{postData:e.proFilePage.postData}}),{addPost:f.Pi,deletePost:f.Uc})(q),Y=t(1413),$=t(7689),O=t(605),Q=(0,o.qC)((0,r.$j)((function(e){return{profile:e.proFilePage.profile,status:e.proFilePage.status,userId:e.loginAuthorization.id,isAuth:e.loginAuthorization.isAuth,postData:e.proFilePage.postData}}),{getUserProfile:f.om,setStatus:f.BS,updStatus:f.kL,deletePost:f.Uc}),(function(e){return function(s){var t=(0,$.TH)(),n=(0,$.UO)(),a=(0,$.s0)();return(0,g.jsx)(e,(0,Y.Z)((0,Y.Z)({},s),{},{location:t,params:n,navigate:a}))}}),O.s)((function(e){return(0,n.useEffect)((function(){var s=e.params.userId;s||(s=e.userId),e.getUserProfile(s),e.setStatus(s)}),[]),(0,g.jsxs)("section",{className:a,children:[(0,g.jsx)(p,{}),(0,g.jsx)(H,{})]})}))}}]);
//# sourceMappingURL=1.af271463.chunk.js.map
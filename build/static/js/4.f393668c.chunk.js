(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={card:"Card_card__2WWzN"}},46:function(e,t,c){e.exports={form:"QuoteForm_form__1bvDZ",loading:"QuoteForm_loading__3DtcI",control:"QuoteForm_control__2PHPf",actions:"QuoteForm_actions__1Hj1n"}},54:function(e,t,c){"use strict";c.r(t);var n=c(21),o=c(1),a=c(2),r=c(45),s=c.n(r),u=c(0),i=function(e){return Object(u.jsx)("div",{className:s.a.card,children:e.children})},l=c(14),d=c(46),j=c.n(d),b=function(e){var t=Object(o.useState)(!1),c=Object(n.a)(t,2),r=c[0],s=c[1],d=Object(o.useRef)(),b=Object(o.useRef)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a.a,{when:r,message:function(e){return"Are you sure that you want to leave?, all your data will be lost!"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){s(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;""!==c&&""!==n&&e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){s(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(19),h=c(20);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,n=Object(a.h)();Object(o.useEffect)((function(){"completed"===c&&n.push("/quotes")}),[c,n]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=4.f393668c.chunk.js.map
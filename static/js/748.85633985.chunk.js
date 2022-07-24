"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[748],{5748:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(885),r=n(2791),i=n(9434),s=function(e){return e.contacts},c=n(9939),l="filter_wrapper__Gb4yQ",o="filter_label__SNwht",u="filter_input__wmOeC",d=n(3329);function h(e){var t=e.title,n=e.filter;return(0,d.jsx)("div",{className:l,children:(0,d.jsxs)("label",{className:o,children:[t,(0,d.jsx)("input",{className:u,type:"text",onChange:function(e){return n(e)},required:!0})]})})}h.defaultProps={filter:function(){}};var m=h,p=n(514),f="contactsList_item__NsQoM",_="contactsList_number__WSEap";function x(e){var t=e.items,n=e.onClick,a=t.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,d.jsxs)("li",{className:f,children:[a,": ",(0,d.jsx)("span",{className:_,children:r}),(0,d.jsx)(p.Z,{text:"Delete",type:"button",onClick:function(){return n(t)}})]},t)}));return(0,d.jsx)("ul",{children:a})}x.defaultProps={contacts:[],onClick:function(){}};var b=(0,r.memo)(x),v=n(1413),j=n(158),Z={name:"",number:""},C={label:"Name",name:"name",placeholder:"Type contact full name",required:!0,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},S={label:"Phone",name:"number",placeholder:"Type contact phone",required:!0,type:"tel",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"},N=n(1655);function g(e){var t=e.onSubmit,n=(0,j.Z)({onSubmit:t,initialState:Z}),a=n.state,r=n.handleChange,i=n.handleSubmit,s=a.name,c=a.number;return(0,d.jsxs)("form",{onSubmit:i,children:[(0,d.jsx)(N.Z,(0,v.Z)({value:s,handleChange:r},C)),(0,d.jsx)(N.Z,(0,v.Z)({value:c,handleChange:r},S)),(0,d.jsx)(p.Z,{text:"Add contact",type:"submit"})]})}var y=g;g.defaultProps={onSubmit:function(){}};var w=n(5426),k="contacts_wrapper__wj1Ka",P="contacts_title__e2oUw",q="contacts_contactsList__uZUSZ";var A=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],l=t[1],o=(0,i.v9)(s),u=o.items,h=o.loading,p=o.error,f=(0,i.I0)();(0,r.useEffect)((function(){f((0,c.yF)())}),[f]);var _=n?u.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):u;return(0,d.jsxs)("div",{className:k,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:P,children:"Phonebook"}),(0,d.jsx)(y,{onSubmit:function(e){f((0,c.uK)(e))}})]}),(0,d.jsxs)("div",{className:q,children:[(0,d.jsx)("h2",{className:P,children:"Contacts"}),(0,d.jsx)(m,{filter:function(e){var t=e.target.value;l(t)}}),h&&(0,d.jsx)(w.Z,{}),p&&(0,d.jsx)("p",{children:p.message}),(0,d.jsx)(b,{items:_,onClick:function(e){f((0,c.zY)(e))}})]})]})};var F=function(){return(0,d.jsx)("main",{children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("section",{className:"section",children:[(0,d.jsx)("h1",{className:"title",children:"Contacts Page"}),(0,d.jsx)(A,{})]})})})}},1655:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(2791),r=n(6382),i="textField_wrapper__50VcK",s="textField_label__sEkJy",c="textField_input__0wJ6p",l=n(3329);function o(e){var t=e.label,n=e.name,o=e.value,u=e.handleChange,d=e.placeholder,h=e.required,m=e.type,p=e.pattern,f=e.title,_=(0,a.useMemo)((function(){return(0,r.x0)()}),[]);return(0,l.jsxs)("div",{className:i,children:[t&&(0,l.jsx)("label",{className:s,htmlFor:_,children:t}),(0,l.jsx)("input",{className:c,id:_,name:n,value:o,onChange:u,placeholder:d,type:m,required:h,pattern:p,title:f})]})}var u=o;o.defaultProps={required:!1,type:"text",handleChange:function(){}}},158:function(e,t,n){var a=n(4942),r=n(1413),i=n(885),s=n(2791),c=n(2007),l=n.n(c),o=function(e){var t=e.onSubmit,n=e.initialState,c=(0,s.useState)((0,r.Z)({},n)),l=(0,i.Z)(c,2),o=l[0],u=l[1],d=function(){u((0,r.Z)({},n))};return{state:o,setState:u,handleChange:function(e){var t=e.target,n=t.name,i=t.value,s=t.type,c=t.checked,l="checkbox"===s?c:i;u((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,l))}))},handleSubmit:function(e){e.preventDefault(),t((0,r.Z)({},o)),d()},reset:d}};t.Z=o,o.defaultProps={onSubmit:function(){},initialState:{}},o.propTypes={onSubmit:l().func.isRequired,initialState:l().object.isRequired}}}]);
//# sourceMappingURL=748.85633985.chunk.js.map
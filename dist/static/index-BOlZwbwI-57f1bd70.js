import{u as j,r as c,c as h,j as n,P as v,e as _,f as B,g as I,h as E,i as H,B as b,k,A as y,l as C}from"./sanity-a41879cc.js";var u=Object.freeze,g=Object.defineProperty,w=(e,t)=>u(g(e,"raw",{value:u(t||e.slice())})),d;const A=j(C)(d||(d=w([`
  position: relative;
`])));function R(e){const{children:t}=e,{collapsed:s}=B();return n.jsx(A,{hidden:s,height:"fill",overflow:"auto",children:t})}function S(e){const{actionHandlers:t,index:s,menuItems:a,menuItemGroups:r,title:i}=e,{features:o}=I();return!(a!=null&&a.length)&&!i?null:n.jsx(E,{actions:n.jsx(H,{menuItems:a,menuItemGroups:r,actionHandlers:t}),backButton:o.backButton&&s>0&&n.jsx(b,{as:k,"data-as":"a",icon:y,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function z(e){const{index:t,pane:s,paneKey:a,...r}=e,{child:i,component:o,menuItems:p,menuItemGroups:m,type:T,...f}=s,[l,x]=c.useState(null),{title:P=""}=h(s);return n.jsxs(v,{id:a,minWidth:320,selected:r.isSelected,children:[n.jsx(S,{actionHandlers:l==null?void 0:l.actionHandlers,index:t,menuItems:p,menuItemGroups:m,title:P}),n.jsxs(R,{children:[_.isValidElementType(o)&&c.createElement(o,{...r,...f,ref:x,child:i,paneKey:a}),c.isValidElement(o)&&o]})]})}export{z as default};

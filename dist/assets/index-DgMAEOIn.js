import{r as o,V as f,M as S,J as a,$ as j,a1 as y,a0 as A,a2 as z}from"./index-CXrtGaWz.js";import{C as v}from"./CandiCardDetail-CN5EFgnG.js";import{C as E}from"./CandiCard-Gx3ivOTu.js";import{P as b}from"./Pagination-CtQn9_b2.js";import"./checked-p_Qw5dOe.js";import"./phone-BqvL_23w.js";import"./star-igAWdCcK.js";import"./Button-DOwVWtb4.js";import"./RightOutlined-BqwRQCtM.js";import"./responsiveObserver-D4gP3zj0.js";import"./SearchOutlined-CPeMMu2H.js";import"./PurePanel-BIkGPv9h.js";import"./index-FLZHXiiR.js";import"./useIcons-CVeqLV_Z.js";function H(){const[g,d]=o.useState(0),[c,l]=o.useState(0),u=7,p=6,{objJob:s}=f(t=>t.jobReducer),{objCandidate:e,objCandiDetails:x}=f(t=>t.candidateReducer),r=S(),C=async(t,n)=>{const i=j(t,n);r(i)},D=async t=>{const n=y(t);r(n)},I=async(t,n)=>{const i=A(t,n);r(i)},m=async t=>{const n=z(t);r(n)};o.useEffect(()=>{C(c-1,u),I(c-1,p)},[c]),o.useEffect(()=>{if(s!=null&&s.content){const t=s.content[0];t&&D(t.jobId)}},[s]),o.useEffect(()=>{if(e!=null&&e.content){const t=e.content[0];t&&(d(t.id),m(t.id))}},[e]);const h=t=>{d(t),m(t)},P=()=>((e==null?void 0:e.content)??[]).map(t=>a.jsx("div",{children:a.jsx(E,{item:t,isSelected:g===t.id,onSelect:()=>h(t.id)})},t.id));return a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-[453px_minmax(0,_1fr)] gap-x-7 py-4 px-[72px] small-tablet:grid-cols-1 small-tablet:px-[20px]",children:[a.jsx("div",{className:"flex flex-col gap-8",children:P()}),a.jsx("div",{className:"small-tablet:hidden",children:x&&a.jsx(v,{item:x})})]}),a.jsx(b,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:c,pageSize:p,total:e==null?void 0:e.totalElements,onChange:t=>l(t),itemRender:(t,n,i)=>n==="page"?a.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>l(t),children:t}):i,prevIcon:a.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:a.jsx("span",{style:{fontSize:"30px"},children:">"})})]})}export{H as default};

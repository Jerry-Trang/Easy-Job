import{r as n,a as j,b,j as e,c as h,d as S}from"./index-DhI-xt9E.js";import{J}from"./JobCard-CU549bku.js";import{J as D}from"./JobCardDetail-C8Pwzh_t.js";import{P as I}from"./Pagination-99fwepKM.js";import"./checked-p_Qw5dOe.js";import"./location-C6017rog.js";import"./Button-CHgJIKcL.js";import"./Overflow-DSeIglUj.js";import"./responsiveObserver-CdEpBIj5.js";import"./useIcons-jDJYIqej.js";import"./index-p73gxAHu.js";import"./SearchOutlined-CgnCFxX1.js";function k(){const[x,m]=n.useState(1),[a,i]=n.useState(0),c=7,{objJob:s,objJobDetails:p}=j(t=>t.jobReducer),d=b(),u=async(t,r)=>{const o=h(t,r);d(o)},l=async t=>{const r=S(t);d(r)};n.useEffect(()=>{u(a-1,c),l(1)},[a]);const g=t=>{m(t),l(t)},f=()=>((s==null?void 0:s.content)??[]).map(t=>e.jsx("div",{children:e.jsx(J,{item:t,isSelected:x===t.jobId,onSelect:()=>g(t.jobId),width:"w-[191px]"})},t.jobId));return e.jsxs("div",{children:[e.jsxs("div",{className:"grid grid-cols-[453px_minmax(0,_1fr)] gap-x-7 py-4 px-[72px]",children:[e.jsx("div",{className:"flex flex-col gap-8",children:f()}),p&&e.jsx(D,{item:p})]}),e.jsx(I,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:a,pageSize:c,total:s==null?void 0:s.totalElements,onChange:t=>i(t),itemRender:(t,r,o)=>r==="page"?e.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>i(t),children:t}):o,prevIcon:e.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:e.jsx("span",{style:{fontSize:"30px"},children:">"})})]})}export{k as default};

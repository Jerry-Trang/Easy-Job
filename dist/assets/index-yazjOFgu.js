import{u as f,r,a as j,b as J,j as t,c as S,d as I}from"./index-3kzwSN3i.js";import{J as C}from"./JobCard-CMdoPO6q.js";import{J as D}from"./JobCardDetail-C39I5F-1.js";import{P}from"./Pagination-OtyDXjx9.js";import"./checked-p_Qw5dOe.js";import"./location-C6017rog.js";import"./Button-D3XyWGH3.js";import"./Overflow-BzQdQm83.js";import"./responsiveObserver-BmxyStWL.js";import"./useIcons-BvoA7mnv.js";import"./index-C_OZumJy.js";import"./SearchOutlined-B_il8kQr.js";function K(){const x=f(),[m,g]=r.useState(1),[n,i]=r.useState(0),c=7,{objJob:a,objJobDetails:l}=j(e=>e.jobReducer),d=J(),u=async(e,s)=>{const o=S(e,s);d(o)},p=async e=>{const s=I(e);d(s)};r.useEffect(()=>{u(n-1,c),p(1)},[n]);const h=e=>{g(e),p(e)},b=()=>((a==null?void 0:a.content)??[]).map(e=>{const s=()=>{console.log("Kích thước cửa sổ:",window.innerWidth),window.innerWidth<=840?x(`/card-detail-job/${e.jobId}`):h(e.jobId)};return t.jsx("div",{children:t.jsx(C,{item:e,isSelected:window.innerWidth>840?m===e.jobId:!1,onSelect:s,width:"w-[191px]"})},e.jobId)});return t.jsxs("div",{children:[t.jsxs("div",{className:"grid grid-cols-[453px_minmax(0,_1fr)] gap-x-7 py-4 px-[72px] small-tablet:grid-cols-1 small-tablet:px-[20px]",children:[t.jsx("div",{className:"flex flex-col gap-8",children:b()}),t.jsx("div",{className:"small-tablet:hidden",children:l&&t.jsx(D,{item:l})})]}),t.jsx(P,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:n,pageSize:c,total:a==null?void 0:a.totalElements,onChange:e=>i(e),itemRender:(e,s,o)=>s==="page"?t.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>i(e),children:e}):o,prevIcon:t.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:t.jsx("span",{style:{fontSize:"30px"},children:">"})})]})}export{K as default};

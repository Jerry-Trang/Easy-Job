import{U as I,r as n,V as v,M as w,$ as S,J as t,_ as C,a0 as D}from"./index-BqYTrS_w.js";import{J}from"./JobCard-Z_UiyRp0.js";import{J as P}from"./JobCardDetail-DNFGIVHH.js";import{B as y}from"./index-D-tFSurl.js";import{P as E}from"./Pagination-CEUZCBdn.js";import"./calendar-D2deYMYa.js";import"./Button-DkzGKUCp.js";import"./index-BzDc4yZP.js";import"./useAddress-K_M1E4kD.js";import"./SearchOutlined-iH0Q3d5o.js";import"./RightOutlined-DY8I-gEe.js";import"./responsiveObserver-Bg92iLVk.js";import"./Overflow-8ZuH5Ew2.js";import"./PurePanel-C8uJ_5g2.js";import"./index-uOuiSYYL.js";import"./useIcons-DDSOmkPf.js";function K(){const u=I(),[h,c]=n.useState(0),[r,l]=n.useState(0),d=7,{objJob:s,objJobDetails:p}=v(e=>e.jobReducer),x=w(),g=async(e,a)=>{const i=C(e,a);x(i)},m=async e=>{const a=D(e);x(a)};n.useEffect(()=>{g(r-1,d)},[r]),n.useEffect(()=>{if(s!=null&&s.content){const e=s.content[0];e&&(c(e.jobId),m(e.jobId))}},[s]);const j=e=>{c(e),m(e)},b=()=>((s==null?void 0:s.content)??[]).map(e=>{const a=()=>{window.innerWidth<=840?u(`/card-detail-job/${e.jobId}`):j(e.jobId)};return t.jsx("div",{children:t.jsx(J,{item:e,isSelected:window.innerWidth>840?h===e.jobId:!1,onSelect:a,width:"w-[191px]",widthAddress:"w-auto max-w-[160px]"})},e.jobId)}),f=new URLSearchParams(S().search).get("section"),o=n.useRef(null);return n.useEffect(()=>{f==="listJob"&&o.current&&o.current.scrollIntoView({behavior:"smooth"})},[f]),t.jsxs("div",{children:[t.jsx(y,{}),t.jsxs("div",{ref:o,className:"grid grid-cols-[453px_minmax(0,_1fr)] gap-x-7 pt-[66px] py-4 px-[72px] small-tablet:grid-cols-1 small-tablet:px-[20px]",children:[t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsxs("div",{className:"flex flex-col items-start",children:[t.jsxs("h1",{className:"text-2xl font-semibold",children:["Có tất cả ",s==null?void 0:s.totalElements," công việc"]}),t.jsx("div",{className:"border-2 border-solid border-[#DC2E55] w-[292px] "})]}),t.jsx("div",{className:"flex flex-col gap-8",children:b()})]}),t.jsx("div",{className:"small-tablet:hidden",children:p&&t.jsx(P,{item:p})})]}),t.jsx(E,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:r,pageSize:d,total:s==null?void 0:s.totalElements,onChange:e=>l(e),itemRender:(e,a,i)=>a==="page"?t.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>l(e),children:e}):i,prevIcon:t.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:t.jsx("span",{style:{fontSize:"30px"},children:">"})})]})}export{K as default};

import{N as c,a4 as x,M as m,V as n,r as l,a0 as p,a5 as f,J as e}from"./index-BtIFfj4n.js";import{J as b}from"./JobCardDetail-C2t6jHv-.js";import{J as j}from"./JobCard-BSRdrZCc.js";import"./checked-p_Qw5dOe.js";import"./Button-fOeklikT.js";import"./index-UvoDnsXk.js";import"./role.enum-_L9jGsOV.js";import"./calendar-D2deYMYa.js";function E(){const o=c(),{jobId:t}=x(),i=m(),{objJobDetails:a,objJobType:r}=n(s=>s.jobReducer);l.useEffect(()=>{t&&i(p(Number(t)))},[t]),l.useEffect(()=>{a&&a.jobType&&i(f(a.jobType.id))},[a]);const d=()=>((r==null?void 0:r.content)??[]).filter(s=>s.jobId!==(a==null?void 0:a.jobId)).slice(0,7).map(s=>e.jsx(j,{item:s,width:"w-[191px]",widthAddress:"w-auto max-w-[160px]",onSelect:()=>o(`/card-detail-job/${s.jobId}`)},s.jobId));return e.jsxs("div",{className:"grid grid-cols-[867px_minmax(0,_1fr)] gap-x-7 py-20 px-[72px] 2xl:grid-cols-[1300px_minmax(0,_1fr)] small-tablet:grid-cols-[minmax(0,_1fr)] small-tablet:px-2 small-tablet:py-5 ",children:[e.jsx("div",{children:a&&e.jsx(b,{item:a})}),e.jsxs("div",{className:"flex flex-col gap-6 small-tablet:hidden",children:[e.jsxs("div",{className:"flex flex-col items-end",children:[e.jsx("h1",{className:"text-2xl font-medium",children:"Loại công việc liên quan"}),e.jsx("div",{className:"border-2 border-solid border-[#2EE498] w-[292px] "})]}),e.jsx("div",{className:" flex flex-col gap-8",children:d()})]})]})}export{E as default};

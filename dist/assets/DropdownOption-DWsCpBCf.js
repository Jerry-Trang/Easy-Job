import{J as o,r as s}from"./index-BqYTrS_w.js";function f({htmlFor:e="",children:n,marginBottom:t="mb-8"}){return o.jsx("label",{htmlFor:e,className:`font-semibold cursor-pointer text-2xl  ${t}`,children:n})}const a=s.createContext(void 0);function x({children:e}){const[n,t]=s.useState(!1),r=s.useRef(null),l=()=>{t(i=>!i)},d=()=>{t(!1)};s.useEffect(()=>{const i=w=>{r.current&&!r.current.contains(w.target)&&d()};return window.addEventListener("click",i),()=>{window.removeEventListener("click",i)}},[]);const u={show:n,setShow:t,toggle:l,closeDropdown:d};return o.jsx(a.Provider,{value:u,children:o.jsx("div",{className:"w-full",ref:r,children:e})})}function c(){const e=s.useContext(a);if(typeof e>"u")throw new Error("useDropdown must be used within DropdownProvider");return e}function h({children:e,width:n="w-full"}){return o.jsx(x,{children:o.jsx("div",{className:`relative inline-block ${n}`,children:e})})}function m({value:e=""}){const{toggle:n,show:t}=c();return o.jsxs("div",{className:"flex items-center justify-between px-[20px] py-[16px] border border-solid border-[#DFDFDF] rounded-lg cursor-pointer font-medium",onClick:n,children:[o.jsx("span",{children:e}),o.jsx("span",{children:t?o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})}):o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})})]})}function v({children:e,height:n="h-[500px]",width:t="w-full"}){const{show:r}=c();return o.jsx(o.Fragment,{children:r&&o.jsx("div",{className:`absolute top-full left-0 w-full bg-white shadow-sm ${n} max-h-[300px] overflow-y-auto z-[99999999] ${t}`,children:e})})}function j({onClick:e,children:n,name:t}){const{setShow:r}=c(),l=()=>{e==null||e(),r(!1)};return o.jsx("div",{id:t,className:"px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-100",onClick:l,children:n})}export{h as D,f as L,m as a,v as b,j as c};

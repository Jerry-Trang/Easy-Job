import{r as s,J as e}from"./index-B-XH01OG.js";const a=s.createContext(void 0);function p({children:o}){const[n,t]=s.useState(!1),r=s.useRef(null),l=()=>{t(i=>!i)},d=()=>{t(!1)};s.useEffect(()=>{const i=w=>{r.current&&!r.current.contains(w.target)&&d()};return window.addEventListener("click",i),()=>{window.removeEventListener("click",i)}},[]);const u={show:n,setShow:t,toggle:l,closeDropdown:d};return e.jsx(a.Provider,{value:u,children:e.jsx("div",{className:"w-full",ref:r,children:o})})}function c(){const o=s.useContext(a);if(typeof o>"u")throw new Error("useDropdown must be used within DropdownProvider");return o}function f({children:o,width:n="w-full"}){return e.jsx(p,{children:e.jsx("div",{className:`relative inline-block ${n}`,children:o})})}function h({value:o=""}){const{toggle:n,show:t}=c();return e.jsxs("div",{className:"flex items-center justify-between px-[20px] py-[16px] border border-solid border-[#DFDFDF] rounded-lg cursor-pointer font-medium",onClick:n,children:[e.jsx("span",{children:o}),e.jsx("span",{children:t?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})})]})}function v({children:o,height:n="h-[500px]",width:t="w-full"}){const{show:r}=c();return e.jsx(e.Fragment,{children:e.jsx("div",{className:`absolute top-full left-0 w-full bg-white shadow-sm ${n} max-h-[300px] overflow-y-auto z-[99999999] ${t} transition-opacity duration-200 ${r?"opacity-100":"opacity-0 pointer-events-none"}`,children:o})})}function m({onClick:o,children:n,name:t}){const{setShow:r}=c(),l=()=>{o==null||o(),r(!1)};return e.jsx("div",{id:t,className:"px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-100 transition-colors duration-250",onClick:l,children:n})}export{f as D,h as a,v as b,m as c};

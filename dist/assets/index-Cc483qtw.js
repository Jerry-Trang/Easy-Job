import{J as e,r as o,V as R,M as V,a1 as m,a6 as B,a7 as O}from"./index-BqYTrS_w.js";import{u as z,a as K,F as n,b as d,I as Q,o as U,h as A,J as _}from"./moment-DzIw6upn.js";import{L as a,D as f,a as D,b,c as y}from"./DropdownOption-DWsCpBCf.js";import{B as q}from"./Button-DkzGKUCp.js";import{u as G}from"./useAddress-K_M1E4kD.js";import"./PurePanel-C8uJ_5g2.js";import"./Overflow-8ZuH5Ew2.js";import"./index-uOuiSYYL.js";import"./useIcons-DDSOmkPf.js";import"./SearchOutlined-iH0Q3d5o.js";import"./button-D-weic-p.js";function W({name:t="",placeholder:p,content:i,control:x,className:h}){const{field:c}=z({control:x,name:t,defaultValue:""});return e.jsx("div",{className:"relative w-full",children:e.jsx("textarea",{id:t,...c,className:`w-full py-4 px-5 rounded-lg font-medium transition-all border border-solid border-[#DFDFDF] resize-none min-h-[200px] focus:outline-none focus:ring-1 focus:ring-[#3F8CFF] ${h}`,placeholder:p,value:c.value,children:i})})}function ce(){const{control:t,handleSubmit:p,setValue:i,reset:x,formState:{errors:h}}=K({mode:"onChange",resolver:U(_),defaultValues:{title:"",phone:"",address:"",startDate:"",endDate:"",duration:0,districtId:0,provinceId:0,jobTypeId:0,description:"",imageJobDetails:void 0}}),[c,v]=o.useState(!1),{provinces:N,districts:F}=G(),{objJobType:S}=R(s=>s.typeReducer),T=V(),[u,w]=o.useState(),[j,J]=o.useState(),[g,M]=o.useState(),H=async s=>{w(s),i("jobTypeId",~~s.id)},k=s=>{J(s),i("provinceId",~~s.id)},E=s=>{M(s),i("districtId",~~s.id)},C=async()=>{const s=O();T(s)};o.useEffect(()=>{C()},[]);const[P,I]=o.useState([!1,!1,!1,!1]),$=s=>{I(r=>{const l=[...r];return l[s]=!0,l})},L=async s=>{try{const r={...s,startDate:s.startDate?A(s.startDate).format("YYYY-MM-DDTHH:mm:ss.ssssss"):null,endDate:s.endDate?A(s.endDate).format("YYYY-MM-DDTHH:mm:ss.ssssss"):null};if(console.log("Dữ liệu form:",r),await T(B(r)),P.some(l=>l)){m.error("Vui lòng tải lại ảnh!");return}m.success("Đã đăng bài thành công!"),x(),v(!0)}catch(r){m.error("Đăng bài thất bại!"),console.error("Add error:",r)}};return o.useEffect(()=>{c&&v(!1)},[c]),o.useEffect(()=>{var r;const s=Object.values(h);s.length>0&&m.error((r=s[0])==null?void 0:r.message)},[h]),console.log("🚀 ~ useEffect ~ arrErrors:",Object.values(h)),e.jsx("div",{className:"py-20 px-[72px]",children:e.jsxs("div",{className:"bg-white py-4 shadow-md px-11 rounded-xl",children:[e.jsx("div",{className:"mb-5 py-10",children:e.jsx("div",{children:e.jsx("h1",{className:"text-[40px] font-semibold capitalize",children:"Đăng bài ứng tuyển"})})}),e.jsxs("form",{onSubmit:p(L),children:[e.jsx("div",{className:"mb-5 lg:mb-10",children:e.jsxs(n,{children:[e.jsx(a,{htmlFor:"title",children:"Tiêu đề ứng tuyển"}),e.jsx(d,{name:"title",placeholder:"Nhập tiêu đề",control:t})]})}),e.jsxs("div",{className:"form-layout-col4",children:[e.jsx("div",{className:"col-span-1",children:e.jsxs(n,{children:[e.jsx(a,{htmlFor:"startDate",children:"Ngày bắt đầu"}),e.jsx(d,{type:"date",dateFormat:"YYYY-MM-DDTHH:mm:ss.ssssss",name:"startDate",placeholder:"Nhập ngày bắt đầu",control:t})]})}),e.jsx("div",{className:"col-span-1",children:e.jsxs(n,{children:[e.jsx(a,{htmlFor:"endDate",children:"Ngày kết thúc"}),e.jsx(d,{type:"date",dateFormat:"YYYY-MM-DDTHH:mm:ss.ssssss",name:"endDate",placeholder:"Nhập ngày kết thúc",control:t})]})}),e.jsx("div",{className:"col-span-2",children:e.jsxs(n,{children:[e.jsx(a,{htmlFor:"duration",children:"Khoảng thời gian"}),e.jsx(d,{type:"number",name:"duration",min:0,placeholder:"Nhập khoảng thời gian",control:t})]})})]}),e.jsxs("div",{className:"form-layout",children:[e.jsxs(n,{children:[e.jsx(a,{htmlFor:"phone",children:"Số điện thoại"}),e.jsx(d,{type:"tel",name:"phone",placeholder:"Nhập số điện thoại",control:t})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Loại công việc"}),e.jsxs(f,{children:[e.jsx(D,{value:`${(u==null?void 0:u.name)||"Loại công việc"}`}),e.jsx(b,{children:(Array.isArray(S)?S:[]).map(s=>e.jsx(y,{name:"jobTypeId",onClick:()=>H(s),children:s.name},s.id))})]})]})]}),e.jsxs("div",{className:"form-layout-col4",children:[e.jsx("div",{className:"col-span-2",children:e.jsxs(n,{children:[e.jsx(a,{htmlFor:"address",children:"Địa chỉ"}),e.jsx(d,{name:"address",placeholder:"Nhập địa chỉ, tên đường",control:t})]})}),e.jsx("div",{className:"col-span-1",children:e.jsxs(n,{children:[e.jsx(a,{children:"Tỉnh / Thành phố"}),e.jsxs(f,{children:[e.jsx(D,{value:`${(j==null?void 0:j.name)||"Tỉnh / Thành phố"}`}),e.jsx(b,{children:(Array.isArray(N)?N:[]).map(s=>e.jsx(y,{name:"provinceId",onClick:()=>k(s),children:s.name},s.id))})]})]})}),e.jsx("div",{className:"col-span-1",children:e.jsxs(n,{children:[e.jsx(a,{children:"Quận / Huyện"}),e.jsxs(f,{children:[e.jsx(D,{value:`${(g==null?void 0:g.name)||"Quận / Huyện"}`}),e.jsx(b,{children:(Array.isArray(F)?F:[]).map(s=>e.jsx(y,{name:"districtId",onClick:()=>E(s),children:s.name},s.id))})]})]})})]}),e.jsxs("div",{className:"mt-24",children:[e.jsx(a,{htmlFor:"",children:"Tải ảnh về công việc và nơi làm việc"}),e.jsx("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-10 mb-20",children:e.jsx("div",{className:"grid grid-cols-2 gap-6",children:Array.from({length:4},(s,r)=>e.jsx(Q,{name:`imageJobDetails${r+1}`,onFileSelect:l=>{l?(i(`imageJobDetails.${r+1}`,{file:l}),I(Y=>(Y[r]=!1,Y))):console.error("Không có tệp nào được chọn")},resetTrigger:c,onRemove:()=>$(r)},`imageJobDetails${r+1}`))})})]}),e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(a,{htmlFor:"description",children:"Mô tả"}),e.jsx(W,{name:"description",control:t,placeholder:"Mô tả ..."})]})}),e.jsx(q,{type:"submit",title:"Đăng Bài",className:"w-full mt-10"})]})]})})}export{ce as default};

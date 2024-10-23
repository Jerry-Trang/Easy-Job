import{e as j,S as n,y as e,T as h}from"./index-DYlZRc6b.js";import{u as g,I as c,F as i,L as l,a as t,o as u,P as f}from"./validation-KzIs2xuX.js";import{B as v}from"./Button-BCMRngJN.js";import{l as N}from"./star-BKvHbhJf.js";import"./PurePanel-ZqW0KHZt.js";import"./Overflow-CO8l2kxo.js";import"./index-BFZu2xPd.js";import"./SearchOutlined-BaykeU8z.js";import"./useIcons-CJfw30Qe.js";import"./button-BicO-EDq.js";const w="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Close'%3e%3crect%20id='Rectangle%2074'%20x='1'%20y='1'%20width='20'%20height='20'%20rx='5'%20stroke='%232B3F6C'%20stroke-width='1.5'/%3e%3cg%20id='Group%20235'%3e%3cpath%20id='Line'%20d='M8.8787%2013.1215L13.1213%208.87891'%20stroke='%232B3F6C'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Line_2'%20d='M8.8787%208.87894L13.1213%2013.1216'%20stroke='%232B3F6C'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Plus'%3e%3crect%20id='Rectangle%2074'%20x='1'%20y='1'%20width='20'%20height='20'%20rx='5'%20stroke='%232B3F6C'%20stroke-width='1.5'/%3e%3cpath%20id='Line'%20d='M8%2011H14'%20stroke='%232B3F6C'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Line_2'%20d='M11%207.99988L11%2013.9999'%20stroke='%232B3F6C'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e",m="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Phosphor%20Icons%20Regular%20/%20CaretDoubleRight'%3e%3cpath%20id='Vector%20(Stroke)'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.71967%203.96967C5.01256%203.67678%205.48744%203.67678%205.78033%203.96967L13.2803%2011.4697C13.5732%2011.7626%2013.5732%2012.2374%2013.2803%2012.5303L5.78033%2020.0303C5.48744%2020.3232%205.01256%2020.3232%204.71967%2020.0303C4.42678%2019.7374%204.42678%2019.2626%204.71967%2018.9697L11.6893%2012L4.71967%205.03033C4.42678%204.73744%204.42678%204.26256%204.71967%203.96967Z'%20fill='white'/%3e%3cpath%20id='Vector%20(Stroke)_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.2197%203.96967C12.5126%203.67678%2012.9874%203.67678%2013.2803%203.96967L20.7803%2011.4697C21.0732%2011.7626%2021.0732%2012.2374%2020.7803%2012.5303L13.2803%2020.0303C12.9874%2020.3232%2012.5126%2020.3232%2012.2197%2020.0303C11.9268%2019.7374%2011.9268%2019.2626%2012.2197%2018.9697L19.1893%2012L12.2197%205.03033C11.9268%204.73744%2011.9268%204.26256%2012.2197%203.96967Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e";function P(){const{control:r,handleSubmit:x,setValue:a,formState:{errors:d}}=g({mode:"onChange",resolver:u(f)}),p=async()=>{try{n.success("Đã cập nhật thông tin thành công!")}catch(s){n.error("Cập nhật thất bại!"),console.error("Update error:",s)}};return j.useEffect(()=>{var o;const s=Object.values(d);s.length>0&&n.error((o=s[0])==null?void 0:o.message)},[d]),console.log("🚀 ~ useEffect ~ arrErrors:",Object.values(d)),e.jsx("div",{className:"py-20 px-[72px]",children:e.jsxs("div",{className:"bg-white py-4 shadow-md px-11",children:[e.jsx("div",{className:"mb-5 flex items-start justify-between px-11 pt-10",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-[40px] font-semibold",children:"Thông tin tài khoản"}),e.jsx("p",{className:"text-xl font-semibold text-[rgba(10,_22,_41,_0.50)]",children:"Cập nhật thông tin tài khoản"})]})}),e.jsxs("form",{onSubmit:x(p),children:[e.jsx("div",{className:"w-[244px] h-[244px] rounded-full mx-auto mb-7",children:e.jsx(c,{listType:"picture-circle",name:"avatar",onFileSelect:s=>{s&&a("avatar",s)}})}),e.jsxs("div",{className:"flex items-end justify-center mb-10 pr-5",children:[e.jsx("div",{className:"w-14 h-14",children:e.jsx("img",{src:N,alt:"",className:"w-full h-full"})}),e.jsx("h1",{className:"text-4xl font-medium",children:"4.0"})]}),e.jsxs("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl pt-14 px-8 ",children:[e.jsxs("div",{className:"form-layout",children:[e.jsxs(i,{children:[e.jsx(l,{htmlFor:"fullName",children:"Họ tên đầy đủ"}),e.jsx(t,{name:"fullName",placeholder:"Nhập họ tên đầy đủ",control:r})]}),e.jsxs(i,{children:[e.jsx(l,{htmlFor:"date",children:"Ngày sinh"}),e.jsx(t,{type:"date",name:"date",placeholder:"Nhập ngày tháng năm sinh",control:r})]})]}),e.jsxs("div",{className:"form-layout ",children:[e.jsxs(i,{children:[e.jsx(l,{htmlFor:"phone",children:"Số điện thoại"}),e.jsx(t,{name:"phone",placeholder:"Nhập số điện thoại",control:r})]}),e.jsxs(i,{children:[e.jsx(l,{htmlFor:"join",children:"Tham gia từ"}),e.jsx(t,{name:"join",placeholder:"Thời gian tham gia",className:"text-center border-none focus:ring-0 invisible",control:r})]})]}),e.jsxs("div",{className:"form-layout ",children:[e.jsxs(i,{children:[e.jsx(l,{htmlFor:"address",children:"Địa chỉ"}),e.jsx(t,{name:"address",placeholder:"Nhập địa chỉ",control:r})]}),e.jsxs(i,{children:[e.jsx(l,{htmlFor:"email",children:"Email"}),e.jsx(t,{name:"email",placeholder:"Nhập email",type:"email",control:r})]})]})]}),e.jsxs("div",{className:"mt-24",children:[e.jsx(l,{htmlFor:"",children:"Tải ảnh CCCD / CMND"}),e.jsx("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5",children:e.jsxs("div",{className:"form-layout lg:mb-0",children:[e.jsx(c,{name:"frontCard",onFileSelect:s=>{s&&a("frontCard",s)}}),e.jsx(c,{name:"backCard",onFileSelect:s=>{s&&a("backCard",s)}})]})})]}),e.jsxs("div",{className:"mt-24",children:[e.jsx(l,{htmlFor:"",children:"Kĩ năng"}),e.jsxs("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5 flex gap-7",children:[e.jsx("div",{className:"inline-block rounded-[20px] bg-[#E8E8E8] px-7 py-5",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:"font-semibold text-2xl",children:"Dọn vệ sinh"}),e.jsx("div",{className:"w-6 h-6",children:e.jsx("img",{src:w,alt:"icon-close",className:"w-full h-full"})})]})}),e.jsx("div",{className:"inline-block rounded-[20px] bg-[#E8E8E8] px-7 py-5",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6",children:e.jsx("img",{src:b,alt:"",className:"w-full h-full"})}),e.jsx("p",{className:"font-semibold text-2xl text-[rgba(10,_22,_41,_0.50)]",children:"Thêm kỹ năng"})]})})]})]}),e.jsxs("div",{className:"mt-24",children:[e.jsx(l,{htmlFor:"",children:"Danh sách công việc"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5 w-[550px] 2xl:w-[800px]",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("p",{className:"text-2xl font-bold",children:"Đã hoàn thành"}),e.jsx("div",{className:"rounded-full w-3 h-3 bg-[#2EE498]"}),e.jsx("h1",{className:"text-2xl font-medium",children:"3"})]}),e.jsx("div",{className:"bg-[#2EE498] rounded-2xl p-3",children:e.jsxs(h,{to:"/more-card",className:"text-white flex items-center justify-between gap-10",children:["xem thêm",e.jsx("div",{className:"w-6 h-6",children:e.jsx("img",{src:m,alt:"icon-arrow",className:"w-full h-full"})})]})})]})}),e.jsx("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5 w-[550px] 2xl:w-[800px]",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("p",{className:"text-2xl font-bold",children:"Đang nộp"}),e.jsx("div",{className:"rounded-full w-3 h-3 bg-[#FF5758]"}),e.jsx("h1",{className:"text-2xl font-medium",children:"5"})]}),e.jsx("div",{className:"bg-[#FF5758] rounded-2xl p-3",children:e.jsxs(h,{to:"/more_card",className:"text-white flex items-center justify-between gap-10",children:["xem thêm",e.jsx("div",{className:"w-6 h-6",children:e.jsx("img",{src:m,alt:"icon-arrow",className:"w-full h-full"})})]})})]})})]})]}),e.jsx(v,{type:"submit",title:"Cập Nhật",className:"w-full mt-20 h-16"})]})]})})}export{P as default};

"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[602],{2624:function(e,i,r){var a=r(6934),n=r(8860);const l=(0,a.ZP)("div")({"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:n.Z.primary.main,cursor:"pointer"},"& .name-column--cell--capitalize":{textTransform:"capitalize"},"& .name-column--cell:hover":{textDecoration:"underline"},"& .MuiDataGrid-columnHeaders":{backgroundColor:n.Z.grey[200],borderBottom:"none",outline:"none !important",borderRadius:"0px"},"& .MuiDataGrid-virtualScroller":{scrollbarWidth:"1px"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{textTransform:"capitalize",fontSize:"15px"},".MuiDataGrid-cell:focus,.MuiDataGrid-columnHeader:focus,MuiDataGrid-columnHeaderCheckbox:focus":{outline:"none !important"},".css-1jiby6q-MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .css-1jiby6q-MuiDataGrid-root .MuiDataGrid-cell:focus-within":{outline:"none"}});i.Z=l},8860:function(e,i,r){var a=r(2065);const n={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24"},l={common:{black:"#000",white:"#fff"},primary:{lighter:"#D1E9FC",light:"#76B0F1",main:"#2065D1",dark:"#103996",darker:"#061B64",contrastText:"#fff"},secondary:{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff"},info:{lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff"},success:{lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:n[800]},warning:{lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:n[800]},error:{lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff"},grey:n,divider:(0,a.Fq)(n[500],.24),text:{primary:n[800],secondary:n[600],disabled:n[500]},background:{paper:"#fff",default:n[100],neutral:n[200]},action:{active:n[600],hover:(0,a.Fq)(n[500],.08),selected:(0,a.Fq)(n[500],.16),disabled:(0,a.Fq)(n[500],.8),disabledBackground:(0,a.Fq)(n[500],.24),focus:(0,a.Fq)(n[500],.24),hoverOpacity:.08,disabledOpacity:.48}};i.Z=l},5310:function(e,i,r){r.d(i,{Z:function(){return c}});var a=r(2007),n=r.n(a),l=r(2791),o=r(2711),t=r(4554),s=r(184);const d=(0,l.forwardRef)(((e,i)=>{let{icon:r,width:a=20,sx:n,...l}=e;return(0,s.jsx)(t.Z,{ref:i,component:o.JO,icon:r,sx:{width:a,height:a,...n},...l})}));d.propTypes={sx:n().object,width:n().oneOfType([n().number,n().string]),icon:n().oneOfType([n().element,n().string])};var c=d},2602:function(e,i,r){r.r(i),r.d(i,{default:function(){return _}});var a=r(2791),n=r(9164),l=r(3767),o=r(890),t=r(6151),s=r(4554),d=r(7621),c=r(2624),u=r(1956),h=r(39),m=r(5310),f=r(5289),x=r(1889),g=r(8096),p=r(7133),Z=r(8406),v=r(3786),j=r(7071),F=r(8550),b=r(7123),C=r(9157),y=r(1691),D=r(5661),A=r(5130),T=r(2506),S=r(1724),q=r(5985),N=r(8860),k=r(5294),w=r(1240),M=r(184);var E=e=>{const{open:i,handleClose:r,getStaff:a}=e,n=S.Ry({designation:S.Z_().required("Designation Type is required"),full_name:S.Z_().required("Name is required"),address:S.Z_().required("address is required"),qualification:S.Z_().required("Qualification is required"),phone:S.Z_().matches(/^[0-9]{10}$/,"Phone number is invalid").required("Phone number is required"),email:S.Z_().email("Invalid email").required("Email is required")}),l=(0,T.TA)({initialValues:{designation:"",name:"",phone:"",email:"",address:"",qualification:""},validationSchema:n,onSubmit:async e=>{console.log("values",e);const i=await k.Z.post(null===w.l||void 0===w.l?void 0:w.l.saveStaff,e);"internal server error"==i.data?q.Am.error(i.data):(await a(),q.Am.success("Staff Add successfully",{autoClose:600}),r(),l.resetForm())}});return(0,M.jsx)("div",{children:(0,M.jsxs)(f.Z,{open:i,onClose:r,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,M.jsxs)(D.Z,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)(o.Z,{variant:"h3",children:"ENTER STAFF DETAILS "}),(0,M.jsx)(o.Z,{children:(0,M.jsx)(A.Z,{onClick:r,style:{cursor:"pointer"}})})]}),(0,M.jsx)(C.Z,{dividers:!0,children:(0,M.jsxs)("form",{onSubmit:l.handleSubmit,children:[(0,M.jsxs)(y.Z,{id:"scroll-dialog-description",tabIndex:-1,children:[(0,M.jsx)(o.Z,{style:{marginBottom:"15px"},variant:"h6",children:"Staff Details"}),(0,M.jsxs)(x.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,M.jsx)(x.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,M.jsxs)(g.Z,{fullWidth:!0,children:[(0,M.jsx)(p.Z,{children:"Designation"}),(0,M.jsxs)(Z.Z,{labelId:"demo-simple-select-label",id:"designation",name:"designation",size:"small",fullWidth:!0,value:l.values.designation||"",onChange:l.handleChange,error:l.touched.designation&&Boolean(l.errors.designation),helperText:l.touched.designation&&l.errors.designation,children:[(0,M.jsx)(v.Z,{value:"Manager",children:"Manager"}),(0,M.jsx)(v.Z,{value:"Attendant",children:"Attendant"}),(0,M.jsx)(v.Z,{value:"Messenger",children:"Messenger"}),(0,M.jsx)(v.Z,{value:"Security",children:"Security"})]}),(0,M.jsx)(j.Z,{style:{color:N.Z.error.main},children:l.touched.designation&&l.errors.designation})]})}),(0,M.jsxs)(x.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,M.jsx)(p.Z,{children:"Full Name"}),(0,M.jsx)(F.Z,{name:"full_name",type:"string",size:"small",fullWidth:!0,value:l.values.full_name,onChange:l.handleChange,error:l.touched.full_name&&Boolean(l.errors.full_name),helperText:l.touched.full_name&&l.errors.full_name})]}),(0,M.jsxs)(x.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,M.jsx)(p.Z,{children:"Phone Number"}),(0,M.jsx)(F.Z,{name:"phone",type:"number",size:"small",fullWidth:!0,value:l.values.phone,onChange:l.handleChange,error:l.touched.phone&&Boolean(l.errors.phone),helperText:l.touched.phone&&l.errors.phone})]}),(0,M.jsxs)(x.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,M.jsx)(p.Z,{children:"Email"}),(0,M.jsx)(F.Z,{id:"email",name:"email",type:"email",size:"small",fullWidth:!0,value:l.values.email,onChange:l.handleChange,error:l.touched.email&&Boolean(l.errors.email),helperText:l.touched.email&&l.errors.email})]}),(0,M.jsxs)(x.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,M.jsx)(p.Z,{children:"Address"}),(0,M.jsx)(F.Z,{id:"address",name:"address",type:"string",size:"small",fullWidth:!0,value:l.values.address,onChange:l.handleChange,error:l.touched.address&&Boolean(l.errors.address),helperText:l.touched.address&&l.errors.address})]}),(0,M.jsx)(x.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,M.jsxs)(g.Z,{fullWidth:!0,children:[(0,M.jsx)(p.Z,{children:"Qualification"}),(0,M.jsxs)(Z.Z,{labelId:"demo-simple-select-label",id:"qualification",name:"qualification",size:"small",fullWidth:!0,value:l.values.qualification||"",onChange:l.handleChange,error:l.touched.qualification&&Boolean(l.errors.qualification),helperText:l.touched.qualification&&l.errors.qualification,children:[(0,M.jsx)(v.Z,{value:"UNDER-GRADUATION",children:"UNDER-GRADUATION"}),(0,M.jsx)(v.Z,{value:"POST-GRADUATION",children:"POST-GRADUATION"}),(0,M.jsx)(v.Z,{value:"MASTERS",children:"MASTERS"}),(0,M.jsx)(v.Z,{value:"INTER",children:"INTER"})]}),(0,M.jsx)(j.Z,{style:{color:N.Z.error.main},children:l.touched.qualification&&l.errors.qualification})]})})]})]}),(0,M.jsxs)(b.Z,{children:[(0,M.jsx)(t.Z,{onClick:l.handleSubmit,variant:"contained",color:"primary",children:"Save"}),(0,M.jsx)(t.Z,{onClick:()=>{l.resetForm(),r()},variant:"outlined",color:"error",children:"Cancel"})]})]})})]})})};var _=()=>{const[e,i]=(0,a.useState)(!1),[r,f]=(0,a.useState)([]),x=async()=>{try{const e=await k.Z.get(null===w.l||void 0===w.l?void 0:w.l.getAllStaff);console.log(e);const i=e&&e.data.map(((e,i)=>({staffId:null===e||void 0===e?void 0:e.reg_number,name:(null===e||void 0===e?void 0:e.full_name)||"-",phone:"+91 "+(null===e||void 0===e?void 0:e.phone)||0,email:(null===e||void 0===e?void 0:e.email)||"-",address:(null===e||void 0===e?void 0:e.address)||"-",position:(null===e||void 0===e?void 0:e.designation)||"-",id:(null===e||void 0===e?void 0:e._id)||i})));f(i)}catch(e){console.log(e)}};return(0,a.useEffect)((()=>{x()}),[]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(E,{open:e,handleClose:()=>i(!1),getStaff:x}),(0,M.jsxs)(n.Z,{children:[(0,M.jsxs)(l.Z,{direction:"row",alignItems:"center",mb:5,justifyContent:"space-between",children:[(0,M.jsx)(o.Z,{variant:"h4",children:"Staff-Management"}),(0,M.jsx)(l.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:2,children:(0,M.jsx)(t.Z,{variant:"contained",startIcon:(0,M.jsx)(m.Z,{icon:"eva:plus-fill"}),onClick:()=>i(!0),children:"Add New staff"})})]}),(0,M.jsx)(c.Z,{children:(0,M.jsx)(s.Z,{width:"100%",children:(0,M.jsx)(d.Z,{style:{height:"600px",paddingTop:"15px"},children:(0,M.jsx)(u._$,{rows:r,columns:[{field:"staffId",headerName:"STAFF ID",flex:1,cellClassName:"name-column--cell--capitalize"},{field:"name",headerName:"NAME",flex:1,cellClassName:"name-column--cell--capitalize"},{field:"phone",headerName:"PHONE",flex:1},{field:"email",headerName:"EMAIL",flex:1},{field:"address",headerName:"ADDRESS",flex:1},{field:"position",headerName:"POSITION",flex:1}],getRowId:null===r||void 0===r?void 0:r.id,slots:{toolbar:h.n},slotProps:{toolbar:{showQuickFilter:!0}}},null===r||void 0===r?void 0:r.id)})})})]})]})}},1691:function(e,i,r){r.d(i,{Z:function(){return p}});var a=r(3366),n=r(7462),l=r(2791),o=r(8182),t=r(4419),s=r(6934),d=r(1402),c=r(890),u=r(5878),h=r(1217);function m(e){return(0,h.Z)("MuiDialogContentText",e)}(0,u.Z)("MuiDialogContentText",["root"]);var f=r(184);const x=["children","className"],g=(0,s.ZP)(c.Z,{shouldForwardProp:e=>(0,s.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,i)=>i.root})({});var p=l.forwardRef((function(e,i){const r=(0,d.Z)({props:e,name:"MuiDialogContentText"}),{className:l}=r,s=(0,a.Z)(r,x),c=(e=>{const{classes:i}=e,r=(0,t.Z)({root:["root"]},m,i);return(0,n.Z)({},i,r)})(s);return(0,f.jsx)(g,(0,n.Z)({component:"p",variant:"body1",color:"text.secondary",ref:i,ownerState:s,className:(0,o.Z)(c.root,l)},r,{classes:c}))}))}}]);
//# sourceMappingURL=602.2dd8216f.chunk.js.map
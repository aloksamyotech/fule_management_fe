"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[594],{3786:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(3366),i=a(7462),n=a(2791),o=a(8182),s=a(4419),d=a(2065),l=a(6934),c=a(1402),p=a(6199),u=a(533),h=a(162),m=a(2071),v=a(133),g=a(6014),b=a(9849),f=a(5878),y=a(1217);function Z(e){return(0,y.Z)("MuiMenuItem",e)}var C=(0,f.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=a(184);const $=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],k=(0,l.ZP)(u.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:a}=e;return(0,i.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${C.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${C.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${C.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${v.Z.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${v.Z.inset}`]:{marginLeft:52},[`& .${b.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${b.Z.inset}`]:{paddingLeft:36},[`& .${g.Z.root}`]:{minWidth:36}},!a.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${g.Z.root} svg`]:{fontSize:"1.25rem"}}))}));var x=n.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:d=!1,component:l="li",dense:u=!1,divider:v=!1,disableGutters:g=!1,focusVisibleClassName:b,role:f="menuitem",tabIndex:y,className:C}=a,x=(0,r.Z)(a,$),S=n.useContext(p.Z),O=n.useMemo((()=>({dense:u||S.dense||!1,disableGutters:g})),[S.dense,u,g]),M=n.useRef(null);(0,h.Z)((()=>{d&&M.current&&M.current.focus()}),[d]);const R=(0,i.Z)({},a,{dense:O.dense,divider:v,disableGutters:g}),F=(e=>{const{disabled:t,dense:a,divider:r,disableGutters:n,selected:o,classes:d}=e,l={root:["root",a&&"dense",t&&"disabled",!n&&"gutters",r&&"divider",o&&"selected"]},c=(0,s.Z)(l,Z,d);return(0,i.Z)({},d,c)})(a),N=(0,m.Z)(M,t);let _;return a.disabled||(_=void 0!==y?y:-1),(0,w.jsx)(p.Z.Provider,{value:O,children:(0,w.jsx)(k,(0,i.Z)({ref:N,role:f,tabIndex:_,component:l,focusVisibleClassName:(0,o.Z)(F.focusVisible,b),className:(0,o.Z)(F.root,C)},x,{ownerState:R,classes:F}))})}))},7047:function(e,t,a){a.d(t,{Z:function(){return O}});var r=a(3366),i=a(7462),n=a(2791),o=a(8182),s=a(2554),d=a(4419);function l(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function c(e){return parseFloat(e)}var p=a(2065),u=a(6934),h=a(1402),m=a(5878),v=a(1217);function g(e){return(0,v.Z)("MuiSkeleton",e)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b=a(184);const f=["animation","className","component","height","style","variant","width"];let y,Z,C,w,$=e=>e;const k=(0,s.F4)(y||(y=$`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),x=(0,s.F4)(Z||(Z=$`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),S=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})((e=>{let{theme:t,ownerState:a}=e;const r=l(t.shape.borderRadius)||"px",n=c(t.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,p.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===a.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===a.variant&&{borderRadius:"50%"},"rounded"===a.variant&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})}),(e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,s.iv)(C||(C=$`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),k)}),(e=>{let{ownerState:t,theme:a}=e;return"wave"===t.animation&&(0,s.iv)(w||(w=$`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),x,(a.vars||a).palette.action.hover)}));var O=n.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:s,component:l="span",height:c,style:p,variant:u="text",width:m}=a,v=(0,r.Z)(a,f),y=(0,i.Z)({},a,{animation:n,component:l,variant:u,hasChildren:Boolean(v.children)}),Z=(e=>{const{classes:t,variant:a,animation:r,hasChildren:i,width:n,height:o}=e,s={root:["root",a,r,i&&"withChildren",i&&!n&&"fitContent",i&&!o&&"heightAuto"]};return(0,d.Z)(s,g,t)})(y);return(0,b.jsx)(S,(0,i.Z)({as:l,ref:t,className:(0,o.Z)(Z.root,s),ownerState:y},v,{style:(0,i.Z)({width:m,height:c},p)}))}))}}]);
//# sourceMappingURL=594.fe8e598f.chunk.js.map
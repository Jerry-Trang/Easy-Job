import{r as a,P as te,h as H,al as ue,D as X,a6 as q,an as ge,F as m,a3 as pe,M as be,I as $e,E as G,b6 as ve,b5 as V,J as he,G as F,aY as fe,X as Ie,o as Ce,S as Se,a9 as Be,N as oe,v as ne}from"./index-CXhAR8nH.js";import{D as xe,M as ye,g as we,u as Oe,S as ze,E as He,R as Me,a as Te}from"./index-BUFrl13P.js";import{i as Y}from"./Overflow-DsJAQy65.js";const re=a.createContext({}),k=a.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var je=function(o,t){var e={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(e[r[n]]=o[r[n]]);return e};const ie=o=>{const{prefixCls:t,className:e,dashed:r}=o,n=je(o,["prefixCls","className","dashed"]),{getPrefixCls:i}=a.useContext(te),c=i("menu",t),s=H({[`${c}-item-divider-dashed`]:!!r},e);return a.createElement(xe,Object.assign({className:s},n))},le=o=>{var t;const{className:e,children:r,icon:n,title:i,danger:c}=o,{prefixCls:s,firstLevel:l,direction:u,disableMenuItemTitleTooltip:$,inlineCollapsed:g}=a.useContext(k),I=S=>{const B=r==null?void 0:r[0],x=a.createElement("span",{className:`${s}-title-content`},r);return(!n||a.isValidElement(r)&&r.type==="span")&&r&&S&&l&&typeof B=="string"?a.createElement("div",{className:`${s}-inline-collapsed-noicon`},B.charAt(0)):x},{siderCollapsed:p}=a.useContext(re);let d=i;typeof i>"u"?d=l?r:"":i===!1&&(d="");const b={title:d};!p&&!g&&(b.title=null,b.open=!1);const f=ue(r).length;let v=a.createElement(ye,Object.assign({},X(o,["title","icon","danger"]),{className:H({[`${s}-item-danger`]:c,[`${s}-item-only-child`]:(n?f+1:f)===1},e),title:typeof i=="string"?i:void 0}),q(n,{className:H(a.isValidElement(n)?(t=n.props)===null||t===void 0?void 0:t.className:"",`${s}-item-icon`)}),I(g));return $||(v=a.createElement(ge,Object.assign({},b,{placement:u==="rtl"?"left":"right",overlayClassName:`${s}-inline-collapsed-tooltip`}),v)),v},U=a.createContext(null),Ee=o=>{const{componentCls:t,motionDurationSlow:e,horizontalLineHeight:r,colorSplit:n,lineWidth:i,lineType:c,itemPaddingInline:s}=o;return{[`${t}-horizontal`]:{lineHeight:r,border:0,borderBottom:`${m(i)} ${c} ${n}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:s},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},De=o=>{let{componentCls:t,menuArrowOffset:e,calc:r}=o;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${m(r(e).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${m(e)})`}}}}},Z=o=>Object.assign({},pe(o)),J=(o,t)=>{const{componentCls:e,itemColor:r,itemSelectedColor:n,groupTitleColor:i,itemBg:c,subMenuItemBg:s,itemSelectedBg:l,activeBarHeight:u,activeBarWidth:$,activeBarBorderWidth:g,motionDurationSlow:I,motionEaseInOut:p,motionEaseOut:d,itemPaddingInline:b,motionDurationMid:f,itemHoverColor:v,lineType:S,colorSplit:B,itemDisabledColor:x,dangerItemColor:y,dangerItemHoverColor:w,dangerItemSelectedColor:M,dangerItemActiveBg:T,dangerItemSelectedBg:h,popupBg:O,itemHoverBg:j,itemActiveBg:z,menuSubMenuBg:D,horizontalItemSelectedColor:C,horizontalItemSelectedBg:A,horizontalItemBorderRadius:P,horizontalItemHoverBg:R}=o;return{[`${e}-${t}, ${e}-${t} > ${e}`]:{color:r,background:c,[`&${e}-root:focus-visible`]:Object.assign({},Z(o)),[`${e}-item-group-title`]:{color:i},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:n}},[`${e}-item, ${e}-submenu-title`]:{color:r,[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},Z(o))},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${x} !important`},[`${e}-item:not(${e}-item-selected):not(${e}-submenu-selected)`]:{[`&:hover, > ${e}-submenu-title:hover`]:{color:v}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:j},"&:active":{backgroundColor:z}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:j},"&:active":{backgroundColor:z}}},[`${e}-item-danger`]:{color:y,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:w}},[`&${e}-item:active`]:{background:T}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:n,[`&${e}-item-danger`]:{color:M},"a, a:hover":{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:l,[`&${e}-item-danger`]:{backgroundColor:h}},[`&${e}-submenu > ${e}`]:{backgroundColor:D},[`&${e}-popup > ${e}`]:{backgroundColor:O},[`&${e}-submenu-popup > ${e}`]:{backgroundColor:O},[`&${e}-horizontal`]:Object.assign(Object.assign({},t==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:g,marginTop:o.calc(g).mul(-1).equal(),marginBottom:0,borderRadius:P,"&::after":{position:"absolute",insetInline:b,bottom:0,borderBottom:`${m(u)} solid transparent`,transition:`border-color ${I} ${p}`,content:'""'},"&:hover, &-active, &-open":{background:R,"&::after":{borderBottomWidth:u,borderBottomColor:C}},"&-selected":{color:C,backgroundColor:A,"&:hover":{backgroundColor:A},"&::after":{borderBottomWidth:u,borderBottomColor:C}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${m(g)} ${S} ${B}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:s},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${m($)} solid ${n}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${f} ${d}`,`opacity ${f} ${d}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:M}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${f} ${p}`,`opacity ${f} ${p}`].join(",")}}}}}},K=o=>{const{componentCls:t,itemHeight:e,itemMarginInline:r,padding:n,menuArrowSize:i,marginXS:c,itemMarginBlock:s,itemWidth:l,itemPaddingInline:u}=o,$=o.calc(i).add(n).add(c).equal();return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:e,lineHeight:m(e),paddingInline:u,overflow:"hidden",textOverflow:"ellipsis",marginInline:r,marginBlock:s,width:l},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:e,lineHeight:m(e)},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:$}}},Ae=o=>{const{componentCls:t,iconCls:e,itemHeight:r,colorTextLightSolid:n,dropdownWidth:i,controlHeightLG:c,motionEaseOut:s,paddingXL:l,itemMarginInline:u,fontSizeLG:$,motionDurationFast:g,motionDurationSlow:I,paddingXS:p,boxShadowSecondary:d,collapsedWidth:b,collapsedIconSize:f}=o,v={height:r,lineHeight:m(r),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":Object.assign({[`&${t}-root`]:{boxShadow:"none"}},K(o))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},K(o)),{boxShadow:d})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:i,maxHeight:`calc(100vh - ${m(o.calc(c).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${I}`,`background ${I}`,`padding ${g} ${s}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:v,[`& ${t}-item-group-title`]:{paddingInlineStart:l}},[`${t}-item`]:v}},{[`${t}-inline-collapsed`]:{width:b,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:$,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${m(o.calc($).div(2).equal())} - ${m(u)})`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${e}`]:{margin:0,fontSize:f,lineHeight:m(r),"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:n}},[`${t}-item-group-title`]:Object.assign(Object.assign({},be),{paddingInline:p})}}]},Q=o=>{const{componentCls:t,motionDurationSlow:e,motionDurationMid:r,motionEaseInOut:n,motionEaseOut:i,iconCls:c,iconSize:s,iconMarginInlineEnd:l}=o;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${e}`,`background ${e}`,`padding calc(${e} + 0.1s) ${n}`].join(","),[`${t}-item-icon, ${c}`]:{minWidth:s,fontSize:s,transition:[`font-size ${r} ${i}`,`margin ${e} ${n}`,`color ${e}`].join(","),"+ span":{marginInlineStart:l,opacity:1,transition:[`opacity ${e} ${n}`,`margin ${e}`,`color ${e}`].join(",")}},[`${t}-item-icon`]:Object.assign({},fe()),[`&${t}-item-only-child`]:{[`> ${c}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},ee=o=>{const{componentCls:t,motionDurationSlow:e,motionEaseInOut:r,borderRadius:n,menuArrowSize:i,menuArrowOffset:c}=o;return{[`${t}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:o.margin,width:i,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${r}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:o.calc(i).mul(.6).equal(),height:o.calc(i).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:n,transition:[`background ${e} ${r}`,`transform ${e} ${r}`,`top ${e} ${r}`,`color ${e} ${r}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${m(o.calc(c).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${m(c)})`}}}}},ke=o=>{const{antCls:t,componentCls:e,fontSize:r,motionDurationSlow:n,motionDurationMid:i,motionEaseInOut:c,paddingXS:s,padding:l,colorSplit:u,lineWidth:$,zIndexPopup:g,borderRadiusLG:I,subMenuItemBorderRadius:p,menuArrowSize:d,menuArrowOffset:b,lineType:f,groupTitleLineHeight:v,groupTitleFontSize:S}=o;return[{"":{[e]:Object.assign(Object.assign({},V()),{"&-hidden":{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},he(o)),V()),{marginBottom:0,paddingInlineStart:0,fontSize:r,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${n} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:o.itemBorderRadius},[`${e}-item-group-title`]:{padding:`${m(s)} ${m(l)}`,fontSize:S,lineHeight:v,transition:`all ${n}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${n} ${c}`,`background ${n} ${c}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${n} ${c}`,`background ${n} ${c}`,`padding ${i} ${c}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${n} ${c}`,`padding ${n} ${c}`].join(",")},[`${e}-title-content`]:{display:"inline-flex",alignItems:"center",transition:`color ${n}`,"> a:first-child":{flexGrow:1},[`> ${t}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${e}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:o.padding,fontSize:o.fontSizeSM,color:o.colorTextDescription}},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:u,borderStyle:f,borderWidth:0,borderTopWidth:$,marginBlock:$,padding:0,"&-dashed":{borderStyle:"dashed"}}}),Q(o)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${m(o.calc(r).mul(2).equal())} ${m(l)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:g,borderRadius:I,boxShadow:"none",transformOrigin:"0 0",[`&${e}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:I},Q(o)),ee(o)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:p},[`${e}-submenu-title::after`]:{transition:`transform ${n} ${c}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:o.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:o.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:o.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:o.paddingXS}}}),ee(o)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${m(b)})`},"&::after":{transform:`rotate(45deg) translateX(${m(o.calc(b).mul(-1).equal())})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(${m(o.calc(d).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${m(o.calc(b).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${m(b)})`}}})},{[`${t}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},Ne=o=>{var t,e,r;const{colorPrimary:n,colorError:i,colorTextDisabled:c,colorErrorBg:s,colorText:l,colorTextDescription:u,colorBgContainer:$,colorFillAlter:g,colorFillContent:I,lineWidth:p,lineWidthBold:d,controlItemBgActive:b,colorBgTextHover:f,controlHeightLG:v,lineHeight:S,colorBgElevated:B,marginXXS:x,padding:y,fontSize:w,controlHeightSM:M,fontSizeLG:T,colorTextLightSolid:h,colorErrorHover:O}=o,j=(t=o.activeBarWidth)!==null&&t!==void 0?t:0,z=(e=o.activeBarBorderWidth)!==null&&e!==void 0?e:p,D=(r=o.itemMarginInline)!==null&&r!==void 0?r:o.marginXXS,C=new F(h).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,itemBorderRadius:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,subMenuItemBorderRadius:o.borderRadiusSM,colorItemText:l,itemColor:l,colorItemTextHover:l,itemHoverColor:l,colorItemTextHoverHorizontal:n,horizontalItemHoverColor:n,colorGroupTitle:u,groupTitleColor:u,colorItemTextSelected:n,itemSelectedColor:n,colorItemTextSelectedHorizontal:n,horizontalItemSelectedColor:n,colorItemBg:$,itemBg:$,colorItemBgHover:f,itemHoverBg:f,colorItemBgActive:I,itemActiveBg:b,colorSubItemBg:g,subMenuItemBg:g,colorItemBgSelected:b,itemSelectedBg:b,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:j,colorActiveBarHeight:d,activeBarHeight:d,colorActiveBarBorderSize:p,activeBarBorderWidth:z,colorItemTextDisabled:c,itemDisabledColor:c,colorDangerItemText:i,dangerItemColor:i,colorDangerItemTextHover:i,dangerItemHoverColor:i,colorDangerItemTextSelected:i,dangerItemSelectedColor:i,colorDangerItemBgActive:s,dangerItemActiveBg:s,colorDangerItemBgSelected:s,dangerItemSelectedBg:s,itemMarginInline:D,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:v,groupTitleLineHeight:S,collapsedWidth:v*2,popupBg:B,itemMarginBlock:x,itemPaddingInline:y,horizontalLineHeight:`${v*1.15}px`,iconSize:w,iconMarginInlineEnd:M-w,collapsedIconSize:T,groupTitleFontSize:w,darkItemDisabledColor:new F(h).setAlpha(.25).toRgbString(),darkItemColor:C,darkDangerItemColor:i,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:h,darkItemSelectedBg:n,darkDangerItemSelectedBg:i,darkItemHoverBg:"transparent",darkGroupTitleColor:C,darkItemHoverColor:h,darkDangerItemHoverColor:O,darkDangerItemSelectedColor:h,darkDangerItemActiveBg:i,itemWidth:j?`calc(100% + ${z}px)`:`calc(100% - ${D*2}px)`}},Pe=function(o){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:o,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return $e("Menu",n=>{const{colorBgElevated:i,controlHeightLG:c,fontSize:s,darkItemColor:l,darkDangerItemColor:u,darkItemBg:$,darkSubMenuItemBg:g,darkItemSelectedColor:I,darkItemSelectedBg:p,darkDangerItemSelectedBg:d,darkItemHoverBg:b,darkGroupTitleColor:f,darkItemHoverColor:v,darkItemDisabledColor:S,darkDangerItemHoverColor:B,darkDangerItemSelectedColor:x,darkDangerItemActiveBg:y,popupBg:w,darkPopupBg:M}=n,T=n.calc(s).div(7).mul(5).equal(),h=G(n,{menuArrowSize:T,menuHorizontalHeight:n.calc(c).mul(1.15).equal(),menuArrowOffset:n.calc(T).mul(.25).equal(),menuSubMenuBg:i,calc:n.calc,popupBg:w}),O=G(h,{itemColor:l,itemHoverColor:v,groupTitleColor:f,itemSelectedColor:I,itemBg:$,popupBg:M,subMenuItemBg:g,itemActiveBg:"transparent",itemSelectedBg:p,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:b,itemDisabledColor:S,dangerItemColor:u,dangerItemHoverColor:B,dangerItemSelectedColor:x,dangerItemActiveBg:y,dangerItemSelectedBg:d,menuSubMenuBg:g,horizontalItemSelectedColor:I,horizontalItemSelectedBg:p});return[ke(h),Ee(h),Ae(h),J(h,"light"),J(O,"dark"),De(h),we(h),Y(h,"slide-up"),Y(h,"slide-down"),ve(h,"zoom-big")]},Ne,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:e,unitless:{groupTitleLineHeight:!0}})(o,t)},ae=o=>{var t;const{popupClassName:e,icon:r,title:n,theme:i}=o,c=a.useContext(k),{prefixCls:s,inlineCollapsed:l,theme:u}=c,$=Oe();let g;if(!r)g=l&&!$.length&&n&&typeof n=="string"?a.createElement("div",{className:`${s}-inline-collapsed-noicon`},n.charAt(0)):a.createElement("span",{className:`${s}-title-content`},n);else{const d=a.isValidElement(n)&&n.type==="span";g=a.createElement(a.Fragment,null,q(r,{className:H(a.isValidElement(r)?(t=r.props)===null||t===void 0?void 0:t.className:"",`${s}-item-icon`)}),d?n:a.createElement("span",{className:`${s}-title-content`},n))}const I=a.useMemo(()=>Object.assign(Object.assign({},c),{firstLevel:!1}),[c]),[p]=Ie("Menu");return a.createElement(k.Provider,{value:I},a.createElement(ze,Object.assign({},X(o,["icon"]),{title:g,popupClassName:H(s,e,`${s}-${i||u}`),popupStyle:Object.assign({zIndex:p},o.popupStyle)})))};var Re=function(o,t){var e={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(e[r[n]]=o[r[n]]);return e};function _(o){return o===null||o===!1}const We={item:le,submenu:ae,divider:ie},Le=a.forwardRef((o,t)=>{var e;const r=a.useContext(U),n=r||{},{getPrefixCls:i,getPopupContainer:c,direction:s,menu:l}=a.useContext(te),u=i(),{prefixCls:$,className:g,style:I,theme:p="light",expandIcon:d,_internalDisableMenuItemTitleTooltip:b,inlineCollapsed:f,siderCollapsed:v,rootClassName:S,mode:B,selectable:x,onClick:y,overflowedIndicatorPopupClassName:w}=o,M=Re(o,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),T=X(M,["collapsedWidth"]);(e=n.validator)===null||e===void 0||e.call(n,{mode:B});const h=Ce(function(){var E;y==null||y.apply(void 0,arguments),(E=n.onClick)===null||E===void 0||E.call(n)}),O=n.mode||B,j=x??n.selectable,z=a.useMemo(()=>v!==void 0?v:f,[f,v]),D={horizontal:{motionName:`${u}-slide-up`},inline:Be(u),other:{motionName:`${u}-zoom-big`}},C=i("menu",$||n.prefixCls),A=Se(C),[P,R,se]=Pe(C,A,!r),ce=H(`${C}-${p}`,l==null?void 0:l.className,g),de=a.useMemo(()=>{var E,W;if(typeof d=="function"||_(d))return d||null;if(typeof n.expandIcon=="function"||_(n.expandIcon))return n.expandIcon||null;if(typeof(l==null?void 0:l.expandIcon)=="function"||_(l==null?void 0:l.expandIcon))return(l==null?void 0:l.expandIcon)||null;const L=(E=d??(n==null?void 0:n.expandIcon))!==null&&E!==void 0?E:l==null?void 0:l.expandIcon;return q(L,{className:H(`${C}-submenu-expand-icon`,a.isValidElement(L)?(W=L.props)===null||W===void 0?void 0:W.className:void 0)})},[d,n==null?void 0:n.expandIcon,l==null?void 0:l.expandIcon,C]),me=a.useMemo(()=>({prefixCls:C,inlineCollapsed:z||!1,direction:s,firstLevel:!0,theme:p,mode:O,disableMenuItemTitleTooltip:b}),[C,z,s,b,p]);return P(a.createElement(U.Provider,{value:null},a.createElement(k.Provider,{value:me},a.createElement(He,Object.assign({getPopupContainer:c,overflowedIndicator:a.createElement(Me,null),overflowedIndicatorPopupClassName:H(C,`${C}-${p}`,w),mode:O,selectable:j,onClick:h},T,{inlineCollapsed:z,style:Object.assign(Object.assign({},l==null?void 0:l.style),I),className:ce,prefixCls:C,direction:s,defaultMotions:D,expandIcon:de,ref:t,rootClassName:H(S,R,n.rootClassName,se,A),_internalComponents:We})))))}),N=a.forwardRef((o,t)=>{const e=a.useRef(null),r=a.useContext(re);return a.useImperativeHandle(t,()=>({menu:e.current,focus:n=>{var i;(i=e.current)===null||i===void 0||i.focus(n)}})),a.createElement(Le,Object.assign({ref:e},o,r))});N.Item=le;N.SubMenu=ae;N.Divider=ie;N.ItemGroup=Te;var _e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},Xe=function(t,e){return a.createElement(oe,ne({},t,{ref:e,icon:_e}))},Ue=a.forwardRef(Xe),qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"}}]},name:"usergroup-add",theme:"outlined"},Ge=function(t,e){return a.createElement(oe,ne({},t,{ref:e,icon:qe}))},Ze=a.forwardRef(Ge);const Je="/assets/ava-qiargzz7.jpg",Ke="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1.5em'%20height='1.5em'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%2346be64'%20d='M12%202C6.5%202%202%206.5%202%2012s4.5%2010%2010%2010s10-4.5%2010-10S17.5%202%2012%202m-2%2015l-5-5l1.41-1.41L10%2014.17l7.59-7.59L19%208z'/%3e%3c/svg%3e",Qe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='0.8em'%20height='0.8em'%20viewBox='0%200%2048%2048'%3e%3cg%20fill='none'%20stroke='%23004e8a'%20stroke-linejoin='round'%20stroke-width='4'%3e%3crect%20width='36'%20height='36'%20x='6'%20y='6'%20rx='3'/%3e%3cpath%20stroke-linecap='round'%20d='M24%2016v16m-8-8h16'/%3e%3c/g%3e%3c/svg%3e";export{Je as A,N as M,Ue as R,Ze as a,Qe as b,Ke as l};

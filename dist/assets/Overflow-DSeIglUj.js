import{R as fe,ai as He,b0 as R,b1 as Je,r,D as W,y as C,k as le,m as b,A as Ie,w as Ze,o as g,q as et,aX as tt,x as nt}from"./index-DhI-xt9E.js";const _t=e=>{const a=fe.useContext(He);return fe.useMemo(()=>e?typeof e=="string"?e??a:e instanceof Function?e(a):a:a,[e,a])},rt=new R("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),at=new R("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),it=new R("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),st=new R("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),ot=new R("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ft=new R("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),lt=new R("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),ut=new R("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),ct={"slide-up":{inKeyframes:rt,outKeyframes:at},"slide-down":{inKeyframes:it,outKeyframes:st},"slide-left":{inKeyframes:ot,outKeyframes:ft},"slide-right":{inKeyframes:lt,outKeyframes:ut}},It=(e,a)=>{const{antCls:l}=e,s=`${l}-${a}`,{inKeyframes:f,outKeyframes:i}=ct[a];return[Je(s,f,i,e.motionDurationMid),{[`
      ${s}-enter,
      ${s}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${s}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};var dt=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],x=void 0;function mt(e,a){var l=e.prefixCls,s=e.invalidate,f=e.item,i=e.renderItem,u=e.responsive,p=e.responsiveDisabled,d=e.registerSize,_=e.itemKey,I=e.className,q=e.style,B=e.children,H=e.display,m=e.order,X=e.component,K=X===void 0?"div":X,D=W(e,dt),v=u&&!H;function A(S){d(_,S)}r.useEffect(function(){return function(){A(null)}},[]);var J=i&&f!==x?i(f):B,N;s||(N={opacity:v?0:1,height:v?0:x,overflowY:v?"hidden":x,order:u?m:x,pointerEvents:v?"none":x,position:v?"absolute":x});var U={};v&&(U["aria-hidden"]=!0);var E=r.createElement(K,C({className:le(!s&&l,I),style:b(b({},N),q)},U,D,{ref:a}),J);return u&&(E=r.createElement(Ie,{onResize:function(Z){var Y=Z.offsetWidth;A(Y)},disabled:p},E)),E}var $=r.forwardRef(mt);$.displayName="Item";function vt(e){if(typeof MessageChannel>"u")Ze(e);else{var a=new MessageChannel;a.port1.onmessage=function(){return e()},a.port2.postMessage(void 0)}}function yt(){var e=r.useRef(null),a=function(s){e.current||(e.current=[],vt(function(){tt.unstable_batchedUpdates(function(){e.current.forEach(function(f){f()}),e.current=null})})),e.current.push(s)};return a}function P(e,a){var l=r.useState(a),s=g(l,2),f=s[0],i=s[1],u=et(function(p){e(function(){i(p)})});return[f,u]}var G=fe.createContext(null),gt=["component"],pt=["className"],St=["className"],Rt=function(a,l){var s=r.useContext(G);if(!s){var f=a.component,i=f===void 0?"div":f,u=W(a,gt);return r.createElement(i,C({},u,{ref:l}))}var p=s.className,d=W(s,pt),_=a.className,I=W(a,St);return r.createElement(G.Provider,{value:null},r.createElement($,C({ref:l,className:le(p,_)},d,I)))},Ne=r.forwardRef(Rt);Ne.displayName="RawItem";var Et=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Oe="responsive",xe="invalidate";function ht(e){return"+ ".concat(e.length," ...")}function wt(e,a){var l=e.prefixCls,s=l===void 0?"rc-overflow":l,f=e.data,i=f===void 0?[]:f,u=e.renderItem,p=e.renderRawItem,d=e.itemKey,_=e.itemWidth,I=_===void 0?10:_,q=e.ssr,B=e.style,H=e.className,m=e.maxCount,X=e.renderRest,K=e.renderRawRest,D=e.suffix,v=e.component,A=v===void 0?"div":v,J=e.itemComponent,N=e.onVisibleChange,U=W(e,Et),E=q==="full",S=yt(),Z=P(S,null),Y=g(Z,2),F=Y[0],be=Y[1],h=F||0,Ke=P(S,new Map),ue=g(Ke,2),ce=ue[0],De=ue[1],Me=P(S,0),de=g(Me,2),ze=de[0],Pe=de[1],We=P(S,0),me=g(We,2),L=me[0],$e=me[1],Xe=P(S,0),ve=g(Xe,2),T=ve[0],Ae=ve[1],Ue=r.useState(null),ye=g(Ue,2),ee=ye[0],ge=ye[1],Ye=r.useState(null),pe=g(Ye,2),V=pe[0],Fe=pe[1],O=r.useMemo(function(){return V===null&&E?Number.MAX_SAFE_INTEGER:V||0},[V,F]),Le=r.useState(!1),Se=g(Le,2),Te=Se[0],Ve=Se[1],te="".concat(s,"-item"),Re=Math.max(ze,L),ne=m===Oe,y=i.length&&ne,Ee=m===xe,ke=y||typeof m=="number"&&i.length>m,w=r.useMemo(function(){var t=i;return y?F===null&&E?t=i:t=i.slice(0,Math.min(i.length,h/I)):typeof m=="number"&&(t=i.slice(0,m)),t},[i,I,F,m,y]),re=r.useMemo(function(){return y?i.slice(O+1):i.slice(w.length)},[i,w,y,O]),k=r.useCallback(function(t,n){var o;return typeof d=="function"?d(t):(o=d&&(t==null?void 0:t[d]))!==null&&o!==void 0?o:n},[d]),je=r.useCallback(u||function(t){return t},[u]);function j(t,n,o){V===t&&(n===void 0||n===ee)||(Fe(t),o||(Ve(t<i.length-1),N==null||N(t)),n!==void 0&&ge(n))}function Ge(t,n){be(n.clientWidth)}function he(t,n){De(function(o){var c=new Map(o);return n===null?c.delete(t):c.set(t,n),c})}function Qe(t,n){$e(n),Pe(L)}function qe(t,n){Ae(n)}function ae(t){return ce.get(k(w[t],t))}nt(function(){if(h&&typeof Re=="number"&&w){var t=T,n=w.length,o=n-1;if(!n){j(0,null);return}for(var c=0;c<n;c+=1){var z=ae(c);if(E&&(z=z||0),z===void 0){j(c-1,void 0,!0);break}if(t+=z,o===0&&t<=h||c===o-1&&t+ae(o)<=h){j(o,null);break}else if(t+Re>h){j(c-1,t-z-T+L);break}}D&&ae(0)+T>h&&ge(null)}},[h,ce,L,T,k,w]);var we=Te&&!!re.length,Ce={};ee!==null&&y&&(Ce={position:"absolute",left:ee,top:0});var M={prefixCls:te,responsive:y,component:J,invalidate:Ee},Be=p?function(t,n){var o=k(t,n);return r.createElement(G.Provider,{key:o,value:b(b({},M),{},{order:n,item:t,itemKey:o,registerSize:he,display:n<=O})},p(t,n))}:function(t,n){var o=k(t,n);return r.createElement($,C({},M,{order:n,key:o,item:t,renderItem:je,itemKey:o,registerSize:he,display:n<=O}))},ie,_e={order:we?O:Number.MAX_SAFE_INTEGER,className:"".concat(te,"-rest"),registerSize:Qe,display:we};if(K)K&&(ie=r.createElement(G.Provider,{value:b(b({},M),_e)},K(re)));else{var se=X||ht;ie=r.createElement($,C({},M,_e),typeof se=="function"?se(re):se)}var oe=r.createElement(A,C({className:le(!Ee&&s,H),style:B,ref:a},U),w.map(Be),ke?ie:null,D&&r.createElement($,C({},M,{responsive:ne,responsiveDisabled:!y,order:O,className:"".concat(te,"-suffix"),registerSize:qe,display:!0,style:Ce}),D));return ne&&(oe=r.createElement(Ie,{onResize:Ge,disabled:!y},oe)),oe}var Q=r.forwardRef(wt);Q.displayName="Overflow";Q.Item=Ne;Q.RESPONSIVE=Oe;Q.INVALIDATE=xe;export{Q as F,rt as a,st as b,at as c,It as i,it as s,_t as u};

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9221],{4013:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/TimeAgo",function(){return n(8815)}])},8815:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var c=n(5893),a=n(6465),o=n.n(a),r=n(7294);function s(e,t){let{useLocalTime:n=!0}=t,[a,s]=(0,r.useState)(""),l="".concat(e.año,"-").concat(e.mes,"-").concat(e.dia,"T").concat(e.hora,":00:00.000Z");return(0,r.useEffect)(()=>{let e=setInterval(()=>{let e;let t=new Date(l);n?e=new Date:(e=new Date().toUTCString(),e=new Date(e.slice(0,e.lastIndexOf(" ")-1)));let c=Math.floor((e-t)/1e3);c<60?s("".concat(c,"s")):c<3600?s("".concat(Math.floor(c/60),"m")):c<86400?s("".concat(Math.floor(c/3600),"h")):c<2592e3?s("".concat(Math.floor(c/86400),"d")):c<31536e3?s("".concat(Math.floor(c/2628e3)," meses")):s("".concat(Math.floor(c/31536e3)," a\xf1os"))},1e3);return()=>clearInterval(e)},[l,n]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:"jsx-b6596229129eca1",children:a}),(0,c.jsx)(o(),{id:"b6596229129eca1",children:"p.jsx-b6596229129eca1{font-size:12px}"})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=4013)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8209],{9683:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Filtrar/FilterMaestros/ButtonDayListMaestros",function(){return e(5186)}])},5186:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return i}});var n=e(5893),r=e(6465),s=e.n(r),o=e(7294);function i(t){let{articles:a,filterDay:e}=t,[r,i]=(0,o.useState)([]),[c,d]=(0,o.useState)(""),l=()=>{let t=[];return a.forEach(a=>{a.classes.forEach(a=>{a.dia&&!t.includes(a.dia)&&t.push(a.dia)})}),t};(0,o.useEffect)(()=>{let t=l();i(t.sort())},[a]);let u=t=>{d(t),e(t)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{className:"jsx-c68d59382ad24e4a",children:"Filtrar por d\xeda:"}),(0,n.jsx)("div",{className:"jsx-c68d59382ad24e4a ButtonDays",children:r&&r.length>0?r.map(t=>(0,n.jsx)("button",{type:"button",onClick:()=>u(t),className:"jsx-c68d59382ad24e4a "+"ButtonDayListContainer btn-day ".concat(c===t?"active":""),children:t},t)):(0,n.jsx)("p",{className:"jsx-c68d59382ad24e4a",children:"Loading..."})}),(0,n.jsx)(s(),{id:"c68d59382ad24e4a",children:".ButtonDays.jsx-c68d59382ad24e4a{display:grid;grid-template-columns:repeat(4,1fr);width:100%;gap:20px}.ButtonDayListContainer.jsx-c68d59382ad24e4a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;max-width:100%;padding:10px;cursor:pointer;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:12px;background:var(--manantial-color);color:var(--secondary-color);-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s;{}}.ButtonDayListContainer.jsx-c68d59382ad24e4a:hover{background:var(--secondary-color);color:var(--primary-color)}"})]})}}},function(t){t.O(0,[9774,2888,179],function(){return t(t.s=9683)}),_N_E=t.O()}]);
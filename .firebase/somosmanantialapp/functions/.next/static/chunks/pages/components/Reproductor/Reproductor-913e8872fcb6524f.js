(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3906],{8005:function(e,i,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Reproductor/Reproductor",function(){return o(2719)}])},2719:function(e,i,o){"use strict";o.r(i),o.d(i,{default:function(){return n}});var t=o(5893),r=o(6465),d=o.n(r),s=o(7294),c=o(1664),a=o.n(c);function n(e){let[i,o]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async function(){let i=await fetch("/api/detallesVideos"),t=await i.json();o(t[e.nombre][e.indice])})()},[e.nombre,e.indice]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"jsx-64896c203d06fb2 ReproductorContainer",children:[(0,t.jsx)("div",{className:"jsx-64896c203d06fb2 Reproductor",children:(0,t.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(i.embed,"?autohide=1&showinfo=0&rel=0&color=white&cc_load_policy=3"),frameborder:"0",allowfullscreen:"true",className:"jsx-64896c203d06fb2"})}),(0,t.jsxs)("div",{className:"jsx-64896c203d06fb2 InfoReproductorContainer",children:[(0,t.jsx)("h2",{className:"jsx-64896c203d06fb2",children:i.title}),(0,t.jsx)("div",{className:"jsx-64896c203d06fb2 InfoReproductor",children:(0,t.jsx)(a(),{href:encodeURI(i.profileURL),children:(0,t.jsxs)("div",{className:"jsx-64896c203d06fb2 InfoReproductor",children:[(0,t.jsx)("div",{className:"jsx-64896c203d06fb2 ProfilePicture",children:(0,t.jsx)("img",{src:i.picture,className:"jsx-64896c203d06fb2"})}),(0,t.jsx)("div",{className:"jsx-64896c203d06fb2 DetailsInfoReproductor",children:(0,t.jsx)("h4",{className:"jsx-64896c203d06fb2",children:i.autor})})]})})}),(0,t.jsx)("article",{className:"jsx-64896c203d06fb2 DescriptionContainer",children:(0,t.jsx)("div",{className:"jsx-64896c203d06fb2",children:(0,t.jsx)("p",{className:"jsx-64896c203d06fb2",children:" ".concat(i.date," • ").concat(i.desc," ")})})})]})]}),(0,t.jsx)(d(),{id:"64896c203d06fb2",children:".ReproductorContainer.jsx-64896c203d06fb2{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;gap:20px}.Reproductor.jsx-64896c203d06fb2{position:relative;padding-bottom:56.25%;padding-top:0px;height:0;overflow:hidden;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;background-color:var(--light-grey)}.Reproductor.jsx-64896c203d06fb2 iframe.jsx-64896c203d06fb2{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px}.InfoReproductorContainer.jsx-64896c203d06fb2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;gap:20px}.InfoReproductor.jsx-64896c203d06fb2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:20px}.ProfilePicture.jsx-64896c203d06fb2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:var(--light-grey)}.ProfilePicture.jsx-64896c203d06fb2 img.jsx-64896c203d06fb2{width:40px;height:40px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.DetailsInfoReproductor.jsx-64896c203d06fb2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.DescriptionContainer.jsx-64896c203d06fb2{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:auto;padding:20px;background-color:var(--light-grey);-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px}@media only screen and (max-width:860px){.Reproductor.jsx-64896c203d06fb2{position:fixed;z-index:9999;width:inherit;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background-color:transparent}.Reproductor.jsx-64896c203d06fb2 iframe.jsx-64896c203d06fb2{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.InfoReproductorContainer.jsx-64896c203d06fb2{padding:58vw 20px 0}}"})]})}}},function(e){e.O(0,[1664,6465,9774,2888,179],function(){return e(e.s=8005)}),_N_E=e.O()}]);
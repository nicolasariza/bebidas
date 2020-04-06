(this.webpackJsonpbebidas=this.webpackJsonpbebidas||[]).push([[0],{29:function(e,t,a){e.exports=a(56)},34:function(e,t,a){},35:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),s=(a(34),a(35),function(){return c.a.createElement("header",{className:"bg-alert"},c.a.createElement("h1",null,"Busca recetas de bebidas"))}),l=a(14),i=a(27),u=a(3),m=a(6),d=a.n(m),b=a(9),p=a(10),f=a.n(p),v=Object(n.createContext)(),h=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",e.next=3,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");case 3:t=e.sent,o(t.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(v.Provider,{value:{categorias:r}},e.children)},E=Object(n.createContext)(),g=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(!1),l=Object(u.a)(s,2),i=l[0],m=l[1],p=Object(n.useState)({ingrediente:"",categoria:""}),v=Object(u.a)(p,2),h=v[0],g=v[1],j=h.ingrediente,O=h.categoria;return Object(n.useEffect)((function(){i&&function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(j,"&c=").concat(O),e.next=3,f.a.get(t);case 3:a=e.sent,o(a.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[h]),c.a.createElement(E.Provider,{value:{recetas:r,buscarRecetas:g,setConsultaAPI:m}},e.children)},j=function(){var e=Object(n.useContext)(v).categorias,t=Object(n.useContext)(E),a=t.buscarRecetas,r=t.setConsultaAPI,o=Object(n.useState)({ingrediente:"",categoria:""}),s=Object(u.a)(o,2),m=s[0],d=s[1],b=function(e){d(Object(i.a)({},m,Object(l.a)({},e.target.name,e.target.value)))};return c.a.createElement("form",{className:"col-12",onSubmit:function(e){e.preventDefault(),a(m),r(!0)}},c.a.createElement("fieldset",{className:"text-center"},c.a.createElement("legend",null,"Busca bebidas por categor\xeda o ingrediente")),c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("input",{name:"ingrediente",className:"form-control",type:"text",placeholder:"Buscar por ingrediente",onChange:b})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("select",{className:"form-control",name:"categoria",onChange:b},c.a.createElement("option",{value:""},"--- Selecciona catergor\xeda--"),e.map((function(e){return c.a.createElement("option",{key:e.strCategory,value:e.strCategory},e.strCategory)})))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("input",{type:"submit",value:"Buscar bebidas",className:"btn btn-block btn-primary"}))))},O=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)({}),l=Object(u.a)(s,2),i=l[0],m=l[1];return Object(n.useEffect)((function(){r&&function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(r),e.next=3,f.a.get(t);case 3:a=e.sent,m(a.data.drinks[0]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r]),c.a.createElement(O.Provider,{value:{infoReceta:i,setIdReceta:o,setReceta:m}},e.children)},k=a(69),N=a(68);function y(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var x=Object(N.a)((function(e){return{paper:{position:"absolute",width:400,height:600,overflow:"scroll",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),C=function(e){var t=e.receta,a=Object(n.useState)(y),r=Object(u.a)(a,1)[0],o=Object(n.useState)(!1),s=Object(u.a)(o,2),l=s[0],i=s[1],m=x(),d=Object(n.useContext)(O),b=d.infoReceta,p=d.setIdReceta,f=d.setReceta;return c.a.createElement("div",{className:"col-md-4 mb-3"},c.a.createElement("div",{className:"card"},c.a.createElement("h2",{className:"card-header"},t.strDrink),c.a.createElement("img",{className:"card-img-top",src:t.strDrinkThumb,alt:"Imagen de ".concat(t.strDrink)}),c.a.createElement("div",{className:"card-body"},c.a.createElement("button",{type:"button",className:"btn btn-block btn-primary",onClick:function(){p(t.idDrink),i(!0)}},"Ver receta"),c.a.createElement(k.a,{open:l,onClose:function(){i(!1),p(null),f({})}},c.a.createElement("div",{style:r,className:m.paper},c.a.createElement("h2",null,b.strDrink),c.a.createElement("h3",{className:"mt-4"},"Instrucciones"),c.a.createElement("p",null,b.strInstructions),c.a.createElement("img",{className:"img-fluid my-4",src:b.strDrinkThumb}),c.a.createElement("h3",null,"Ingredientes y cantidades"),c.a.createElement("ul",null,function(e){for(var t=[],a=1;a<16;a++)e["strIngredient".concat(a)]&&t.push(c.a.createElement("li",null,e["strIngredient".concat(a)],e["strMeasure".concat(a)]));return t}(b)))))))},S=function(){var e=Object(n.useContext)(E).recetas;return c.a.createElement("div",{className:"row mt-5"},e.map((function(e){return c.a.createElement(C,{key:e.idDrink,receta:e})})))};var I=function(){return c.a.createElement(h,null,c.a.createElement(g,null,c.a.createElement(w,null,c.a.createElement(s,null),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("div",{className:"row"},c.a.createElement(j,null)),c.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a36a3ca3.chunk.js.map
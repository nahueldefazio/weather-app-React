(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{101:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(90),s=n.n(i),r=(n(101),n(12)),o=n(2),l=n(5),j=n(37),b=n.n(j),m=n(1),d=Object(a.createContext)(),u=d.Provider,h=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(l.a)(n,2),i=c[0],s=c[1],r=Object(a.useState)(!1),o=Object(l.a)(r,2),j=o[0],d=o[1];var h={getManualWeather:function(e){d(!0);var t=e.cityName,n="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("e8a1ffc4742780c265efd9993a509053","&lang=es&units=metric");b.a.get(n).then((function(e){s(e.data),d(!1)}))},weather:i,setWeather:s,loading:j};return Object(m.jsx)(u,{value:h,children:t})},x=d;var O=function(){var e=Object(a.useContext)(x).setWeather;return Object(m.jsxs)("div",{className:"container d-flex flex-column align-items-center",children:[Object(m.jsx)("h1",{children:"Weather App"}),Object(m.jsx)("img",{src:"https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif",className:"rounded-circle gif my-3"}),Object(m.jsx)(r.b,{to:"/auto-zone",className:"btn btn-danger w-50 my-4",children:"Auto-Detection Zone"}),Object(m.jsx)(r.b,{to:"manual-zone",className:"btn btn-info w-50",onClick:e(null),children:"Manual-Detection Zone"})]})};var f=function(){var e=Object(a.useContext)(x).weather;return console.log(e),null===e?null:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"d-flex align-items-center",children:[Object(m.jsxs)("h1",{children:[e.name," - ",e.sys.country]}),Object(m.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:"icon_weather"})]}),Object(m.jsxs)("h1",{children:["Temperatura: ",e.main.temp,"\xb0"]}),Object(m.jsxs)("h1",{children:["Sensaci\xf3n t\xe9rmica: ",e.main.feels_like,"\xb0"]}),Object(m.jsxs)("h1",{children:["Temp. Min: ",e.main.temp_min,"\xb0"]}),Object(m.jsxs)("h1",{children:["Temp. Max: ",e.main.temp_max,"\xb0"]}),Object(m.jsxs)("h1",{children:["Humedad: ",e.main.humidity,"%"]})]}),Object(m.jsx)(r.b,{to:"/",className:"btn btn-warning",children:"Menu"})]})},g=n(226),p=n(225);var v=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(a.useContext)(x).setWeather;function r(e){var t=e.coords,n=t.latitude,a=t.longitude,c="https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(a,"&appid=").concat("e8a1ffc4742780c265efd9993a509053","&lang=es&units=metric");b.a.get(c).then((function(e){console.log(e),s(e.data),i(e.statusText)}))}return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition(r)}),[]),"OK"===c?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(f,{})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(g.a,{variant:"primary",disabled:!0,className:"d-block m-auto mt-5",children:[Object(m.jsx)(p.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."]})})},w=n(44),y=n(58);var N=function(){var e=Object(a.useContext)(x),t=e.getManualWeather,n=e.loading,c=y.a().shape({cityName:y.b().required("Enter a valid city.").min(3,"City name is too short").max(20,"City name is too long")});return Object(m.jsxs)("div",{children:[Object(m.jsx)(r.b,{to:"/",className:"btn btn-success m-2",children:"Back"}),Object(m.jsx)(w.c,{initialValues:{cityName:""},onSubmit:function(e){t(e)},validationSchema:c,children:function(e){return Object(m.jsx)(w.b,{className:"m-auto w-50 center-form",children:Object(m.jsxs)("div",{className:"d-flex flex-column m-3 align-items-center",children:[Object(m.jsx)("h3",{className:"text-center mt-5 fs-1",children:"Enter city name:"}),Object(m.jsx)(w.a,{name:"cityName",type:"text",className:"w-100 form-control"}),Object(m.jsx)("small",{className:"error",children:e.errors.cityName}),Object(m.jsx)("button",{className:"btn btn-outline-success w-50 my-3",type:"submit",disabled:!e.isValid,children:" Send"})]})})}}),n?Object(m.jsx)(p.a,{animation:"border",variant:"danger"}):Object(m.jsx)(f,{})]})};var C=function(){return Object(m.jsx)(r.a,{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,component:O}),Object(m.jsx)(o.a,{path:"/auto-zone",exact:!0,component:v}),Object(m.jsx)(o.a,{path:"/manual-zone",exact:!0,component:N})]})})};n(223);var S=function(){return Object(m.jsx)(h,{children:Object(m.jsx)(C,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,227)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),F()}},[[224,1,2]]]);
//# sourceMappingURL=main.f0230fcb.chunk.js.map
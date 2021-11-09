(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{101:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(90),s=a.n(i),r=(a(101),a(12)),o=a(2),l=a(5),j=a(37),b=a.n(j),m=a(1),h=Object(n.createContext)(),d=h.Provider,u=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(l.a)(a,2),i=c[0],s=c[1],r=Object(n.useState)(!1),o=Object(l.a)(r,2),j=o[0],h=o[1];var u={getManualWeather:function(e){h(!0);var t=e.cityName,a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("e8a1ffc4742780c265efd9993a509053","&lang=es&units=metric");b.a.get(a).then((function(e){s(e.data),h(!1)}))},weather:i,setWeather:s,loading:j};return Object(m.jsx)(d,{value:u,children:t})},x=h;var p=function(){var e=Object(n.useContext)(x).setWeather;return Object(m.jsxs)("div",{className:"container d-flex flex-column align-items-center",children:[Object(m.jsx)("h1",{children:"Weather App"}),Object(m.jsx)("img",{src:"https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif",className:"rounded-circle gif my-3"}),Object(m.jsx)(r.b,{to:"/weather-app-React/auto-zone",className:"btn btn-danger w-50 my-4",children:"Auto-Detection Zone"}),Object(m.jsx)(r.b,{to:"/weather-app-React/manual-zone",className:"btn btn-info w-50",onClick:e(null),children:"Manual-Detection Zone"})]})};var O=function(){var e=Object(n.useContext)(x).weather;return console.log(e),null===e?null:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"d-flex align-items-center",children:[Object(m.jsxs)("h1",{children:[e.name," - ",e.sys.country]}),Object(m.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:"icon_weather"})]}),Object(m.jsxs)("h1",{children:["Temperatura: ",e.main.temp,"\xb0"]}),Object(m.jsxs)("h1",{children:["Sensaci\xf3n t\xe9rmica: ",e.main.feels_like,"\xb0"]}),Object(m.jsxs)("h1",{children:["Temp. Min: ",e.main.temp_min,"\xb0"]}),Object(m.jsxs)("h1",{children:["Temp. Max: ",e.main.temp_max,"\xb0"]}),Object(m.jsxs)("h1",{children:["Humedad: ",e.main.humidity,"%"]})]}),Object(m.jsx)(r.b,{to:"/weather-app-React/",className:"btn btn-warning",children:"Menu"})]})},f=a(226),g=a(225);var v=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],s=Object(n.useContext)(x).setWeather;function r(e){var t=e.coords,a=t.latitude,n=t.longitude,c="https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=").concat("e8a1ffc4742780c265efd9993a509053","&lang=es&units=metric");b.a.get(c).then((function(e){console.log(e),s(e.data),i(e.statusText)}))}return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition(r)}),[]),"OK"===c?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O,{})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(f.a,{variant:"primary",disabled:!0,className:"d-block m-auto mt-5",children:[Object(m.jsx)(g.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."]})})},w=a(44),y=a(58);var N=function(){var e=Object(n.useContext)(x),t=e.getManualWeather,a=e.loading,c=y.a().shape({cityName:y.b().required("Enter a valid city.").min(3,"City name is too short").max(20,"City name is too long")});return Object(m.jsxs)("div",{children:[Object(m.jsx)(r.b,{to:"/weather-app-React/",className:"btn btn-success m-2",children:"Back"}),Object(m.jsx)(w.c,{initialValues:{cityName:""},onSubmit:function(e){t(e)},validationSchema:c,children:function(e){return Object(m.jsx)(w.b,{className:"m-auto w-50 center-form",children:Object(m.jsxs)("div",{className:"d-flex flex-column m-3 align-items-center",children:[Object(m.jsx)("h3",{className:"text-center mt-5 fs-1",children:"Enter city name:"}),Object(m.jsx)(w.a,{name:"cityName",type:"text",className:"w-100 form-control"}),Object(m.jsx)("small",{className:"error",children:e.errors.cityName}),Object(m.jsx)("button",{className:"btn btn-outline-success w-50 my-3",type:"submit",disabled:!e.isValid,children:" Send"})]})})}}),a?Object(m.jsx)(g.a,{animation:"border",variant:"danger"}):Object(m.jsx)(O,{})]})};var C=function(){return Object(m.jsx)(r.a,{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/weather-app-React/",exact:!0,component:p}),Object(m.jsx)(o.a,{path:"/weather-app-React/auto-zone",exact:!0,component:v}),Object(m.jsx)(o.a,{path:"/weather-app-React/manual-zone",exact:!0,component:N})]})})};a(223);var S=function(){return Object(m.jsx)(u,{children:Object(m.jsx)(C,{})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,227)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),F()}},[[224,1,2]]]);
//# sourceMappingURL=main.a341de66.chunk.js.map
!function(e){var t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=BabelRuntimeHelpers.interopRequireDefault},function(e,t,a){"use strict";var l=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef((function(t,a){return r.default.createElement(o.default,(0,n.default)({ref:a},t),e)})));0;return a.muiName=o.default.muiName,a};var n=l(a(6)),r=l(a(0)),o=l(a(7))},function(e,t,a){e.exports=a(4)},function(e,t,a){"use strict";var l=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(n,r){function o(e){try{i(l.next(e))}catch(e){r(e)}}function u(e){try{i(l.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,u)}i((l=l.apply(e,t||[])).next())}))},n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(a(0)),u=r(a(5)),i=r(a(8)),c=r(a(9)),d=r(a(10)),s=a(11);hooks.setMenuHook("apps.lorawan",{primary:"LoRaWAN",icon:o.default.createElement(i.default,null),href:"#/apps/waziup.wazigate-lora/index.html"}),hooks.addDeviceMenuHook(e=>{const{device:t,handleMenuClose:a,setDevice:l}=e;return null===t||t.meta.lorawan?null:o.default.createElement(s.MenuItem,{onClick:()=>{a(),l(e=>Object.assign(Object.assign({},e),{meta:Object.assign(Object.assign({},e.meta),{lorawan:{profile:""}})}))},key:"waziup.wazigate-lora"},o.default.createElement(s.ListItemIcon,null,o.default.createElement(i.default,{fontSize:"small"})),o.default.createElement(s.ListItemText,{primary:"Make LoRaWAN",secondary:"Declare as LoRaWAN device"}))});const f=s.makeStyles(e=>({root:{overflow:"auto"},scrollBox:{padding:e.spacing(2),minWidth:"fit-content"},paper:{background:"#d8dee9",minWidth:"fit-content"},header:{color:"#34425a"},name:{flexGrow:1},body:{padding:e.spacing(2)},shortInput:{width:"200px"},longInput:{width:400,maxWidth:"100%"},button:{margin:"16px 8px 0px"},footer:{color:"#34425a"}}));hooks.addDeviceHook(e=>{const t=f(),{device:a,setDevice:n}=e,r=null==a?void 0:a.meta.lorawan,m=e=>{n(t=>Object.assign(Object.assign({},t),{meta:Object.assign(Object.assign({},t.meta),{lorawan:e})}))},[v,p]=o.useState(!1),h=e=>"AA555A00"+e;return o.default.createElement("div",{className:t.root},o.default.createElement("div",{className:t.scrollBox},o.default.createElement(s.Grow,{in:!!r,key:"waziup.wazigate-lora"},o.default.createElement(s.Paper,{variant:"outlined",className:t.paper},o.default.createElement(s.Toolbar,{className:t.header,variant:"dense"},o.default.createElement(s.IconButton,{edge:"start"},o.default.createElement(i.default,null)),o.default.createElement(s.Typography,{variant:"h6",noWrap:!0,className:t.name},"LoRaWAN Settings"),o.default.createElement(s.IconButton,{onClick:()=>{confirm("Do you want to remove the LoRaWAN settings from this device?")&&wazigate.setDeviceMeta(a.id,{lorawan:null}).then(()=>{m(null)},e=>{alert(e)})}},o.default.createElement(u.default,null))),o.default.createElement("div",{className:t.body},o.default.createElement(s.FormControl,{className:t.shortInput},o.default.createElement(s.InputLabel,{id:"lorawan-profile-label"},"LoRaWAN Profile"),o.default.createElement(s.Select,{labelId:"lorawan-profile-label",id:"lorawan-profile",value:(null==r?void 0:r.profile)||"",onChange:e=>{m(Object.assign(Object.assign({},r),{profile:e.target.value})),p(!0)}},o.default.createElement(s.MenuItem,{value:"WaziDev"},"WaziDev"),o.default.createElement(s.MenuItem,{value:""},"Other"))),o.default.createElement("br",null),"WaziDev"===(null==r?void 0:r.profile)?o.default.createElement(o.Fragment,null,o.default.createElement(s.TextField,{id:"lorawan-devaddr",label:"DevAddr (Device Address)",onChange:e=>{const t=e.target.value;m(Object.assign(Object.assign({},r),{devEUI:h(t),devAddr:t})),p(!0)},value:(null==r?void 0:r.devAddr)||"",className:t.shortInput}),o.default.createElement(s.Tooltip,{title:"Autogenerate"},o.default.createElement(s.IconButton,{size:"small",className:t.button,onClick:()=>l(void 0,void 0,void 0,(function*(){alert("This feature is not available right now.")}))},o.default.createElement(d.default,null))),o.default.createElement("br",null),o.default.createElement(s.TextField,{id:"lorawan-nwskey",label:"NwkSKey (Network Session Key)",onChange:e=>{m(Object.assign(Object.assign({},r),{nwkSEncKey:e.target.value})),p(!0)},value:(null==r?void 0:r.nwkSEncKey)||"",className:t.longInput}),o.default.createElement(s.Tooltip,{title:"Autogenerate"},o.default.createElement(s.IconButton,{size:"small",className:t.button,onClick:()=>{const e=()=>{for(var e=new Array(32),t=0;t<32;t++)e[t]="0123456789ABCDEF"[16*Math.random()|0];return e.join("")};m(Object.assign(Object.assign({},r),{nwkSEncKey:e(),appSKey:e()})),p(!0)}},o.default.createElement(d.default,null))),o.default.createElement("br",null),o.default.createElement(s.TextField,{id:"lorawan-appkey",label:"AppKey (App Key)",onChange:e=>{m(Object.assign(Object.assign({},r),{appSKey:e.target.value})),p(!0)},value:(null==r?void 0:r.appSKey)||"",className:t.longInput})):null),o.default.createElement(s.Grow,{in:v},o.default.createElement(s.CardActions,{className:t.footer},o.default.createElement(s.Button,{startIcon:o.default.createElement(c.default,null),onClick:()=>{wazigate.setDeviceMeta(a.id,{lorawan:r}).then(()=>{p(!1)},e=>{alert(e)})}},"Save")))))))}),hooks.resolve()},function(e,t,a){"use strict";var l=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=(0,l(a(2)).default)(n.default.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=r},function(e,t){e.exports=BabelRuntimeHelpers.extends},function(e,t){e.exports=MaterialUI.SvgIcon},function(e,t,a){"use strict";var l=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=(0,l(a(2)).default)(n.default.createElement("path",{d:"M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"}),"Router");t.default=r},function(e,t,a){"use strict";var l=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=(0,l(a(2)).default)(n.default.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=r},function(e,t,a){"use strict";var l=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=(0,l(a(2)).default)(n.default.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.default=r},function(e,t){e.exports=MaterialUI}]);
//# sourceMappingURL=hook.js.map
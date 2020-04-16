!function(e){var t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=BabelRuntimeHelpers.interopRequireDefault},function(e,t,a){"use strict";var l=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef((function(t,a){return r.default.createElement(o.default,(0,n.default)({ref:a},t),e)})));0;return a.muiName=o.default.muiName,a};var n=l(a(6)),r=l(a(0)),o=l(a(7))},function(e,t,a){e.exports=a(4)},function(e,t,a){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(0)),o=n(a(5)),u=n(a(8)),i=a(9);hooks.setMenuHook("apps.lorawan",{primary:"LoRaWAN",icon:r.default.createElement(u.default,null),href:"#/apps/waziup.wazigate-lora/index.html"}),hooks.addDeviceMenuHook(e=>{const{device:t,handleMenuClose:a,setDevice:l}=e;return null===t||t.meta.lorawan?null:r.default.createElement(i.MenuItem,{onClick:()=>{a(),l(e=>Object.assign(Object.assign({},e),{meta:Object.assign(Object.assign({},e.meta),{lorawan:{DevEUI:null}})}))},key:"waziup.wazigate-lora"},r.default.createElement(i.ListItemIcon,null,r.default.createElement(u.default,{fontSize:"small"})),r.default.createElement(i.ListItemText,{primary:"Make LoRaWAN",secondary:"Declare as LoRaWAN device"}))});const c=i.makeStyles(e=>({root:{overflow:"auto"},scrollBox:{padding:e.spacing(2),minWidth:"fit-content"},paper:{background:"lightblue",minWidth:"fit-content"},name:{flexGrow:1},body:{padding:e.spacing(2)},shortInput:{width:"200px"},longInput:{width:400,maxWidth:"100%"}}));hooks.addDeviceHook(e=>{const t=c(),{device:a,setDevice:l}=e,[n,d]=r.useState(""),s=null==a?void 0:a.meta.lorawan;return r.default.createElement("div",{className:t.root},r.default.createElement("div",{className:t.scrollBox},r.default.createElement(i.Grow,{in:!!s,key:"waziup.wazigate-lora"},r.default.createElement(i.Paper,{variant:"outlined",className:t.paper},r.default.createElement(i.Toolbar,{variant:"dense"},r.default.createElement(i.IconButton,{edge:"start"},r.default.createElement(u.default,null)),r.default.createElement(i.Typography,{variant:"h6",noWrap:!0,className:t.name},"LoRaWAN Settings"),r.default.createElement(i.IconButton,{onClick:()=>{confirm("Do you want to remove the LoRaWAN settings from this device?")&&l(e=>Object.assign(Object.assign({},e),{meta:Object.assign(Object.assign({},e.meta),{lorawan:void 0})}))}},r.default.createElement(o.default,null))),r.default.createElement("div",{className:t.body},r.default.createElement(i.FormControl,{className:t.shortInput},r.default.createElement(i.InputLabel,{id:"lorawan-profile-label"},"LoRaWAN Profile"),r.default.createElement(i.Select,{labelId:"lorawan-profile-label",id:"lorawan-profile",value:n,onChange:e=>{d(e.target.value)}},r.default.createElement(i.MenuItem,{value:"WaziDev"},"WaziDev"),r.default.createElement(i.MenuItem,{value:""},"Other"))),r.default.createElement("br",null),"WaziDev"===n?r.default.createElement(r.Fragment,null,r.default.createElement(i.TextField,{id:"lorawan-devaddr",label:"DevAddr (Device Address)",className:t.shortInput}),r.default.createElement("br",null),r.default.createElement(i.TextField,{id:"lorawan-nwskey",label:"NwkSKey (Network Session Key)",className:t.longInput}),r.default.createElement("br",null),r.default.createElement(i.TextField,{id:"lorawan-appkey",label:"AppKey (App Key)",className:t.longInput})):null)))))}),hooks.resolve()},function(e,t,a){"use strict";var l=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=(0,l(a(2)).default)(n.default.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=r},function(e,t){e.exports=BabelRuntimeHelpers.extends},function(e,t){e.exports=MaterialUI.SvgIcon},function(e,t,a){"use strict";var l=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=(0,l(a(2)).default)(n.default.createElement("path",{d:"M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"}),"Router");t.default=r},function(e,t){e.exports=MaterialUI}]);
//# sourceMappingURL=hook.js.map
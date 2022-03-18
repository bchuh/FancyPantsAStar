/*! For license information please see lib-halo-downloader.269ce8c5.js.LICENSE.txt */
(window.webpackJsonpsyzs=window.webpackJsonpsyzs||[]).push([["lib-halo-downloader"],{Faes:function(t,n,r){!function(t){"use strict";var n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,r)};function r(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}function e(t,n,r,e){return new(r||(r=Promise))((function(o,i){function s(t){try{u(e.next(t))}catch(t){i(t)}}function a(t){try{u(e.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(s,a)}u((e=e.apply(t,n||[])).next())}))}function o(t,n){var r,e,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,e&&(o=2&i[0]?e.return:i[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,i[1])).done)return o;switch(e=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,e=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],e=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var i={},s=function(){function t(t){this.stateCallbacks=[],this.req=t,this.key=JsBridge.getAppInfoKey(t),JsBridge.registerStateCallback(this.key,this.stateCallback.bind(this)),JsBridge.queryAppDownload(this.req).then(this.stateCallback.bind(this))}return Object.defineProperty(t.prototype,"isReady",{get:function(){return null!==this.state},enumerable:!1,configurable:!0}),t.create=function(n){var r=JsBridge.getAppInfoKey(n),e=i[r];return e||(e=new t(n),i[r]=e,e)},t.prototype.stateCallback=function(t){var n=this,r=t.state,e=t.progress,o=t.raw;t.key===this.key&&(this.state=r,this.progress=e,this.raw=o,this.stateCallbacks.forEach((function(r){return r.call(n,t)})))},t.prototype.addStateCallback=function(t){return this.stateCallbacks.push(t)},t.prototype.removeStateCallback=function(t){var n=this.stateCallbacks.indexOf(t);return-1!==n&&(this.stateCallbacks.splice(n,1),!0)},t.prototype.action=function(){var t;if(this.state)return(((t={}).ready=this.start,t.pending=this.stop,t.downloading=this.stop,t.paused=this.start,t.error=this.start,t.downloaded=this.install,t.installed=this.launch,t)[this.state]||this.start).call(this)},t.prototype.start=function(){return JsBridge.startAppDownload(this.req)},t.prototype.stop=function(){return JsBridge.stopAppDownload(this.req)},t.prototype.install=function(){return JsBridge.installDownloadedApp(this.req)},t.prototype.launch=function(){return JsBridge.launchApp(this.req)},t}();function a(t,n){var r=t.length;return function e(o){var i=t[o];return i(n,r===o+1?function(){}:e.bind(null,o+1))}(0)}var u=function(){function t(t){this.userDefinedPlugins=[],this.defaultPlugins=[],this.task=s.create(t),this.task.addStateCallback(this.stateCallback.bind(this)),this.state=this.task.state,this.progress=this.task.progress}return t.prototype.use=function(t){var n,r=Array.isArray(t)?t:[t];(n=this.userDefinedPlugins).push.apply(n,r)},t.prototype.hook=function(t,n){var r;this.use(((r={})[t]=n,r))},t.prototype.runHook=function(t,n){return e(this,void 0,void 0,(function(){var r,e;return o(this,(function(o){return r=function(){for(var t=0,n=0,r=arguments.length;n<r;n++)t+=arguments[n].length;var e=Array(t),o=0;for(n=0;n<r;n++)for(var i=arguments[n],s=0,a=i.length;s<a;s++,o++)e[o]=i[s];return e}(this.userDefinedPlugins,this.defaultPlugins),(e=r.map((function(n){return n[t]})).filter((function(t){return!!t}))).length?(a(e,{downloader:this,data:n}),[2]):[2,void 0]}))}))},t.prototype.action=function(){this.runHook("action")},t.prototype.start=function(){this.runHook("start")},t.prototype.stop=function(){this.runHook("stop")},t.prototype.install=function(){this.runHook("install")},t.prototype.launch=function(){this.runHook("launch")},t.prototype.stateCallback=function(t){this.runHook("state",t)},t.prototype.useDefaultPlugins=function(t){var n;if(t){var r=Array.isArray(t)?t:[t];(n=this.defaultPlugins).push.apply(n,r)}},t}(),c=function(){return{action:function(t,n){return e(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return t.downloader.task.action(),[4,n()];case 1:return r.sent(),[2]}}))}))},start:function(t,n){return e(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return t.downloader.task.start(),[4,n()];case 1:return r.sent(),[2]}}))}))},stop:function(t,n){return e(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return t.downloader.task.stop(),[4,n()];case 1:return r.sent(),[2]}}))}))},install:function(t,n){return e(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return t.downloader.task.install(),[4,n()];case 1:return r.sent(),[2]}}))}))},launch:function(t,n){return e(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return t.downloader.task.launch(),[4,n()];case 1:return r.sent(),[2]}}))}))},state:function(t,n){return e(this,void 0,void 0,(function(){var r,e,i,s,a;return o(this,(function(o){switch(o.label){case 0:if(r=t.downloader,e=t.data,s=(i=e).state,a=i.progress,!s)return[2,void 0];if(r.state=s,r.progress=a,null===r.state)throw TypeError("downloader packagename: "+r.task.req.packageName+" state "+r.state+" error");return r.runHook(r.state),[4,n()];case 1:return o.sent(),[2]}}))}))}}},l=function(){return{stop:function(t){t.downloader}}},p=function(t){function n(n){var r=t.call(this,n)||this;return r.useDefaultPlugins(c()),r}return r(n,t),n}(u),f=function(t){function n(n){var r=t.call(this,n)||this;return r.useDefaultPlugins({stop:function(t){t.downloader}}),r}return r(n,t),n}(u);t.ActivityAppDownloader=f,t.AppDownloadTask=s,t.AppDownloader=p,t.BaseAppDownloader=u,t.canNotStop=l,t.compose=a,t.downloadAction=c,t.report=function(){return{}},t.slientDownload=function(t){var n=!1;return{ready:function(t,n){var r=t.downloader;return e(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,n()];case 1:return t.sent(),r.start(),[2]}}))}))},action:function(t,r){return n=!0,r()},state:function(r,i){var s=r.downloader,a=r.data;return e(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return n?[4,i()]:(a.progress>=t&&s.stop(),[2]);case 1:return r.sent(),[2]}}))}))}}},Object.defineProperty(t,"__esModule",{value:!0})}(n)}}]);
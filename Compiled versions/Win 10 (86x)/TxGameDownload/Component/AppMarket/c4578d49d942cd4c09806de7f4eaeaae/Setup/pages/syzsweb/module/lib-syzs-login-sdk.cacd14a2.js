(window.webpackJsonpsyzs=window.webpackJsonpsyzs||[]).push([["lib-syzs-login-sdk"],{"8s5x":function(e,t,n){var r=n("DZ8K");"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,o);r.locals&&(e.exports=r.locals)},WwPU:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Wt}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{};function o(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var i=function(e){return e&&e.Math==Math&&e},c=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||Function("return this")(),a=function(e){try{return!!e()}catch(e){return!0}},s=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,f={f:u&&!l.call({1:2},1)?function(e){var t=u(this,e);return!!t&&t.enumerable}:l},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,h=function(e){return d.call(e).slice(8,-1)},g="".split,y=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==h(e)?g.call(e,""):Object(e)}:Object,v=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},m=function(e){return y(v(e))},b=function(e){return"object"==typeof e?null!==e:"function"==typeof e},w=function(e,t){if(!b(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!b(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!b(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!b(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},x={}.hasOwnProperty,E=function(e,t){return x.call(e,t)},S=c.document,O=b(S)&&b(S.createElement),C=!s&&!a((function(){return 7!=Object.defineProperty(("div",O?S.createElement("div"):{}),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,q={f:s?I:function(e,t){if(e=m(e),t=w(t,!0),C)try{return I(e,t)}catch(e){}if(E(e,t))return p(!f.f.call(e,t),e[t])}},z=function(e){if(!b(e))throw TypeError(String(e)+" is not an object");return e},j=Object.defineProperty,T={f:s?j:function(e,t,n){if(z(e),t=w(t,!0),z(n),C)try{return j(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},R=s?function(e,t,n){return T.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},k=function(e,t){try{R(c,e,t)}catch(n){c[e]=t}return t},A=c["__core-js_shared__"]||k("__core-js_shared__",{}),M=Function.toString;"function"!=typeof A.inspectSource&&(A.inspectSource=function(e){return M.call(e)});var N,_,L,B,P=A.inspectSource,D=c.WeakMap,U="function"==typeof D&&/native code/.test(P(D)),G=o((function(e){(e.exports=function(e,t){return A[e]||(A[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})})),Q=0,H=Math.random(),W=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++Q+H).toString(36)},X=G("keys"),Z={},F=c.WeakMap;if(U){var J=new F,Y=J.get,$=J.has,K=J.set;N=function(e,t){return K.call(J,e,t),t},_=function(e){return Y.call(J,e)||{}},L=function(e){return $.call(J,e)}}else{var V=X[B="state"]||(X[B]=W(B));Z[V]=!0,N=function(e,t){return R(e,V,t),t},_=function(e){return E(e,V)?e[V]:{}},L=function(e){return E(e,V)}}var ee,te,ne={set:N,get:_,has:L,enforce:function(e){return L(e)?_(e):N(e,{})},getterFor:function(e){return function(t){var n;if(!b(t)||(n=_(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},re=o((function(e){var t=ne.get,n=ne.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var a=!!i&&!!i.unsafe,s=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||E(o,"name")||R(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==c?(a?!l&&e[t]&&(s=!0):delete e[t],s?e[t]=o:R(e,t,o)):s?e[t]=o:k(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||P(this)}))})),oe=c,ie=function(e){return"function"==typeof e?e:void 0},ce=function(e,t){return arguments.length<2?ie(oe[e])||ie(c[e]):oe[e]&&oe[e][t]||c[e]&&c[e][t]},ae=Math.ceil,se=Math.floor,le=function(e){return isNaN(e=+e)?0:(e>0?se:ae)(e)},ue=Math.min,fe=function(e){return e>0?ue(le(e),9007199254740991):0},pe=Math.max,de=Math.min,he=function(e,t){var n=le(e);return n<0?pe(n+t,0):de(n,t)},ge=function(e){return function(t,n,r){var o,i=m(t),c=fe(i.length),a=he(r,c);if(e&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},ye={includes:ge(!0),indexOf:ge(!1)},ve=ye.indexOf,me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),be={f:Object.getOwnPropertyNames||function(e){return function(e,t){var n,r=m(e),o=0,i=[];for(n in r)!E(Z,n)&&E(r,n)&&i.push(n);for(;t.length>o;)E(r,n=t[o++])&&(~ve(i,n)||i.push(n));return i}(e,me)}},we={f:Object.getOwnPropertySymbols},xe=ce("Reflect","ownKeys")||function(e){var t=be.f(z(e)),n=we.f;return n?t.concat(n(e)):t},Ee=function(e,t){for(var n=xe(t),r=T.f,o=q.f,i=0;i<n.length;i++){var c=n[i];E(e,c)||r(e,c,o(t,c))}},Se=/#|\.prototype\./,Oe=function(e,t){var n=Ie[Ce(e)];return n==ze||n!=qe&&("function"==typeof t?a(t):!!t)},Ce=Oe.normalize=function(e){return String(e).replace(Se,".").toLowerCase()},Ie=Oe.data={},qe=Oe.NATIVE="N",ze=Oe.POLYFILL="P",je=Oe,Te=q.f,Re=function(e,t){var n,r,o,i,a,s=e.target,l=e.global,u=e.stat;if(n=l?c:u?c[s]||k(s,{}):(c[s]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(a=Te(n,r))&&a.value:n[r],!je(l?r:s+(u?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Ee(i,o)}(e.sham||o&&o.sham)&&R(i,"sham",!0),re(n,r,i,e)}},ke=Array.isArray||function(e){return"Array"==h(e)},Ae=function(e){return Object(v(e))},Me=function(e,t,n){var r=w(t);r in e?T.f(e,r,p(0,n)):e[r]=n},Ne=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())})),_e=Ne&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Le=G("wks"),Be=c.Symbol,Pe=_e?Be:Be&&Be.withoutSetter||W,De=function(e){return E(Le,e)||(Ne&&E(Be,e)?Le[e]=Be[e]:Le[e]=Pe("Symbol."+e)),Le[e]},Ue=De("species"),Ge=function(e,t){var n;return ke(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!ke(n.prototype)?b(n)&&null===(n=n[Ue])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},Qe=ce("navigator","userAgent")||"",He=c.process,We=He&&He.versions,Xe=We&&We.v8;Xe?te=(ee=Xe.split("."))[0]+ee[1]:Qe&&(!(ee=Qe.match(/Edge\/(\d+)/))||ee[1]>=74)&&(ee=Qe.match(/Chrome\/(\d+)/))&&(te=ee[1]);var Ze=te&&+te,Fe=De("species"),Je=function(e){return Ze>=51||!a((function(){var t=[];return(t.constructor={})[Fe]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},Ye=De("isConcatSpreadable"),$e=Ze>=51||!a((function(){var e=[];return e[Ye]=!1,e.concat()[0]!==e})),Ke=Je("concat"),Ve=function(e){if(!b(e))return!1;var t=e[Ye];return void 0!==t?!!t:ke(e)};Re({target:"Array",proto:!0,forced:!$e||!Ke},{concat:function(e){var t,n,r,o,i,c=Ae(this),a=Ge(c,0),s=0;for(t=-1,r=arguments.length;t<r;t++)if(Ve(i=-1===t?c:arguments[t])){if(s+(o=fe(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,s++)n in i&&Me(a,s,i[n])}else{if(s>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Me(a,s++,i)}return a.length=s,a}});var et=function(e,t){var n=[][e];return!!n&&a((function(){n.call(null,t||function(){throw 1},1)}))},tt=Object.defineProperty,nt={},rt=function(e){throw e},ot=function(e,t){if(E(nt,e))return nt[e];t||(t={});var n=[][e],r=!!E(t,"ACCESSORS")&&t.ACCESSORS,o=E(t,0)?t[0]:rt,i=E(t,1)?t[1]:void 0;return nt[e]=!!n&&!a((function(){if(r&&!s)return!0;var e={length:-1};r?tt(e,1,{enumerable:!0,get:rt}):e[1]=1,n.call(e,o,i)}))},it=ye.indexOf,ct=[].indexOf,at=!!ct&&1/[1].indexOf(1,-0)<0,st=et("indexOf"),lt=ot("indexOf",{ACCESSORS:!0,1:0});Re({target:"Array",proto:!0,forced:at||!st||!lt},{indexOf:function(e){return at?ct.apply(this,arguments)||0:it(this,e,arguments.length>1?arguments[1]:void 0)}});var ut=function(){var e=z(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t};function ft(e,t){return RegExp(e,t)}var pt,dt,ht={UNSUPPORTED_Y:a((function(){var e=ft("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:a((function(){var e=ft("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},gt=RegExp.prototype.exec,yt=String.prototype.replace,vt=gt,mt=(pt=/a/,dt=/b*/g,gt.call(pt,"a"),gt.call(dt,"a"),0!==pt.lastIndex||0!==dt.lastIndex),bt=ht.UNSUPPORTED_Y||ht.BROKEN_CARET,wt=void 0!==/()??/.exec("")[1];(mt||wt||bt)&&(vt=function(e){var t,n,r,o,i=this,c=bt&&i.sticky,a=ut.call(i),s=i.source,l=0,u=e;return c&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),u=String(e).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(s="(?: "+s+")",u=" "+u,l++),n=new RegExp("^(?:"+s+")",a)),wt&&(n=new RegExp("^"+s+"$(?!\\s)",a)),mt&&(t=i.lastIndex),r=gt.call(c?n:i,u),c?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:mt&&r&&(i.lastIndex=i.global?r.index+r[0].length:t),wt&&r&&r.length>1&&yt.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var xt=vt;Re({target:"RegExp",proto:!0,forced:/./.exec!==xt},{exec:xt});var Et=De("species"),St=(a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),"a".replace(/./,"$0"),De("replace")),Ot=(!!/./[St]&&/./[St]("a","$0"),!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}))),Ct=De("match"),It=De("species"),qt=function(e){return function(t,n){var r,o,i=String(v(t)),c=le(n),a=i.length;return c<0||c>=a?e?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===a||(o=i.charCodeAt(c+1))<56320||o>57343?e?i.charAt(c):r:e?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}},zt=(qt(!1),qt(!0)),jt=function(e,t,n){return t+(n?zt(e,t).length:1)},Tt=function(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==h(e))throw TypeError("RegExp#exec called on incompatible receiver");return xt.call(e,t)},Rt=[].push,kt=Math.min,At=!a((function(){return!RegExp(4294967295,"y")}));!function(e,t,n,r){var o=De(e),i=!a((function(){var t={};return t[o]=function(){return 7},7!=""[e](t)})),c=i&&!a((function(){var e=!1,t=/a/;return(t={}).constructor={},t.constructor[Et]=function(){return t},t.flags="",t[o]=/./[o],t.exec=function(){return e=!0,null},t[o](""),!e}));if(!i||!c||!Ot){var s=/./[o],l=n(o,""[e],(function(e,t,n,r,o){return t.exec===xt?i&&!o?{done:!0,value:s.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),u=l[0],f=l[1];re(String.prototype,e,u),re(RegExp.prototype,o,(function(e,t){return f.call(e,this,t)}))}r&&R(RegExp.prototype[o],"sham",!0)}("split",0,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r,o,i=String(v(this)),c=void 0===n?4294967295:n>>>0;if(0===c)return[];if(void 0===e)return[i];if(!b(r=e)||!(void 0!==(o=r[Ct])?o:"RegExp"==h(r)))return t.call(i,e,c);for(var a,s,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,d=new RegExp(e.source,f+"g");(a=xt.call(d,i))&&!((s=d.lastIndex)>p&&(u.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&Rt.apply(u,a.slice(1)),l=a[0].length,p=s,u.length>=c));)d.lastIndex===a.index&&d.lastIndex++;return p===i.length?!l&&d.test("")||u.push(""):u.push(i.slice(p)),u.length>c?u.slice(0,c):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=v(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,o,n):r.call(String(o),t,n)},function(e,o){var i=n(r,e,this,o,r!==t);if(i.done)return i.value;var c=z(e),a=String(this),s=function(e,t){var n,r=z(e).constructor;return void 0===r||null==(n=z(r)[It])?t:function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}(n)}(c,RegExp),l=c.unicode,u=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(At?"y":"g"),f=new s(At?c:"^(?:"+c.source+")",u),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===a.length)return null===Tt(f,a)?[a]:[];for(var d=0,h=0,g=[];h<a.length;){f.lastIndex=At?h:0;var y,v=Tt(f,At?a:a.slice(h));if(null===v||(y=kt(fe(f.lastIndex+(At?0:h)),a.length))===d)h=jt(a,h,l);else{if(g.push(a.slice(d,h)),g.length===p)return g;for(var m=1;m<=v.length-1;m++)if(g.push(v[m]),g.length===p)return g;h=d=y}}return g.push(a.slice(d)),g}]}),!At);var Mt=o((function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t})),Nt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_t=[].join,Lt=y!=Object,Bt=et("join",",");Re({target:"Array",proto:!0,forced:Lt||!Bt},{join:function(e){return _t.call(m(this),void 0===e?",":e)}});var Pt=Je("splice"),Dt=ot("splice",{ACCESSORS:!0,0:0,1:2}),Ut=Math.max,Gt=Math.min;Re({target:"Array",proto:!0,forced:!Pt||!Dt},{splice:function(e,t){var n,r,o,i,c,a,s=Ae(this),l=fe(s.length),u=he(e,l),f=arguments.length;if(0===f?n=r=0:1===f?(n=0,r=l-u):(n=f-2,r=Gt(Ut(le(t),0),l-u)),l+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(o=Ge(s,r),i=0;i<r;i++)(c=u+i)in s&&Me(o,i,s[c]);if(o.length=r,n<r){for(i=u;i<l-r;i++)a=i+n,(c=i+r)in s?s[a]=s[c]:delete s[a];for(i=l;i>l-r+n;i--)delete s[i-1]}else if(n>r)for(i=l-r;i>u;i--)a=i+n-1,(c=i+r-1)in s?s[a]=s[c]:delete s[a];for(i=0;i<n;i++)s[i+u]=arguments[i+2];return s.length=l-r+n,o}});var Qt=function(e,t){var n=e.className.split(" ");-1===n.indexOf(t)&&n.push(t),e.className=n.join(" ")},Ht={"qzs.qq.com":1,"imgcache.qq.com":2,"syzs.qq.com":1,"nutty.pcg.com":1,"syzsstyle.sparta.html5.qq.com":3,"yybstyle.sparta.html5.qq.com":4},Wt=function e(t){var n=this,r=t.root,o=t.type,i=void 0===o?"qq":o,c=t.onCancel,a=void 0===c?function(){}:c,s=t.onSucess,l=void 0===s?function(){}:s,u=t.onError,f=void 0===u?function(){}:u;if(Nt(this,e),this.type="qq",this.syzsQQAppID="101549767",this.syzsWXAppID="wxef99873dbfab493c",this.host="",this.url="",this.closeCallback=function(){},this.sucessCallback=function(){},this.errorCallback=function(){},this.changeUrl=function(){switch(n.type){case"qq":n.url=n.qqUrl(n.getRedirctUrl());break;case"wx":n.url=n.wxURl(n.getRedirctUrl())}},this.qqUrl=function(e){return"https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=".concat(n.syzsQQAppID,"&redirect_uri=").concat(e,"&state=").concat(100*Math.random())},this.wxURl=function(e){return"https://open.weixin.qq.com/connect/qrconnect?appid=".concat(n.syzsWXAppID,"&redirect_uri=").concat(e,"&response_type=code&scope=snsapi_login&state=").concat(100*Math.random(),"&self_redirect=true&href=data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDEzNHB4O30NCi5pbXBvd2VyQm94IC50aXRsZSB7ZGlzcGxheTogbm9uZTt9DQouaW1wb3dlckJveCAuaW5mbyB7d2lkdGg6IDIwMHB4O30NCi5zdGF0dXNfaWNvbiB7ZGlzcGxheTogbm9uZX0NCi5pbXBvd2VyQm94IC5zdGF0dXMge3RleHQtYWxpZ246IGNlbnRlcjt9#wechat_redirect")},this.isDOM="object"===("undefined"==typeof HTMLElement?"undefined":Mt(HTMLElement))?function(e){return e instanceof HTMLElement}:function(e){return e&&"object"===Mt(e)&&1===e.nodeType&&"string"==typeof e.nodeName},this.getHost=function(){var e="https://sy.guanjia.qq.com";return-1!==location.hostname.indexOf("sparta")&&(e="https://syzscgi.sparta.html5.qq.com"),"wx"===n.type&&(e="https://syzs.qq.com"),e},this.getRedirctUrl=function(){return"".concat(n.getHost(),"/api/auth?login_type=").concat(n.type,"&domain=").concat(Ht[location.hostname]||1)},this.addEvent=function(){n.onChangLoginType(),n.onClose(),n.onMessage()},this.removeEvent=function(){var e=document.getElementById("syzs-login-web-header"),t=document.getElementById("syzs-login-web-close");e&&e.removeEventListener("click",n.typeChangeEvent),t&&t.removeEventListener("click",n.closeEvent),window.removeEventListener("message",n.messageEvent)},this.messageEvent=function(e){var t=e.origin,r=e.data;if(t==="".concat(location.protocol,"//").concat(location.hostname)||/\.qq\.com$/.test(t))try{var o=JSON.parse(r);if(o&&"login"===o.type){if("success"===o.result)return n.sucessCallback(),void n.destroy();n.setIfram(),n.errorCallback()}}catch(e){n.errorCallback()}},this.closeEvent=function(){n.destroy(),n.closeCallback()},this.typeChangeEvent=function(e){var t=document.getElementById("syzs-login-web-header"),r=e.target||e.srcElement;if(2!==r.className.split(" ").length&&"syzs-login-web-close"!==r.className&&r!==t){var o,i,c,a=document.getElementById("syzs-login-web-".concat("syzs-login-web-wx-head"===r.className?"qq":"wx"));n.type="syzs-login-web-wx-head"===r.className?"wx":"qq",Qt(r,"active"),"active",(c=(i=(o=a).className.split(" ")).indexOf("active"))>-1&&i.splice(c,1),o.className=i.join(" "),n.changeUrl(),n.setIfram()}},this.onMessage=function(){window.addEventListener("message",n.messageEvent)},this.onClose=function(){var e=document.getElementById("syzs-login-web-close");e&&e.addEventListener("click",n.closeEvent)},this.onChangLoginType=function(){var e=document.getElementById("syzs-login-web-header");e&&e.addEventListener("click",n.typeChangeEvent)},this.setIfram=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];r?t=document.getElementById("syzs-login-web-iframe-wrapper"):(t=(e=document.getElementById("syzs-login-web-iframe")).parentNode).removeChild(e);var o=document.createElement("iframe");o.src=n.url,o.width="wx"===n.type?"340px":"800px",o.height="wx"===n.type?"400px":"600px",o.className=n.type,o.id="syzs-login-web-iframe",t.appendChild(o)},this.setActive=function(){Qt(document.getElementById("syzs-login-web-".concat(n.type)),"active")},this.show=function(){n.root.innerHTML='\n    <div class="syzs-login-web-wrapper">\n        <div id="syzs-login-web-header" class="syzs-login-web-login-head">\n            <div id="syzs-login-web-close" class="syzs-login-web-close"></div>\n            <div id="syzs-login-web-qq" class="syzs-login-web-qq-head">\n                QQ\u767b\u5f55\n            </div>\n            <div id="syzs-login-web-wx" class="syzs-login-web-wx-head">\n                \u5fae\u4fe1\u767b\u5f55\n            </div>\n        </div>\n        <div id="syzs-login-web-iframe-wrapper" class="syzs-login-web-iframe-wrapper">\n        </div>\n    </div>\n',n.setActive(),n.setIfram(!0),n.addEvent()},this.destroy=function(){n.root.innerHTML="",n.removeEvent()},!r)throw new Error("root cannot be empty");return document.domain="qq.com",this.root=this.isDOM(r)?r:document.getElementById(r),this.type=i,this.closeCallback=a,this.errorCallback=f,this.sucessCallback=l,this.changeUrl(),this},Xt=navigator.userAgent.toLocaleLowerCase();/mobile/i.test(Xt),/micromessenger/i.test(Xt),/ QQ/i.test(navigator.userAgent)}).call(this,n("yLpj"))}}]);
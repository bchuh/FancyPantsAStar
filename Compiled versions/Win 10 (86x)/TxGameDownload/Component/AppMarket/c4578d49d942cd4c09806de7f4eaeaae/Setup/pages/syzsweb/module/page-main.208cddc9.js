(window.webpackJsonpsyzs=window.webpackJsonpsyzs||[]).push([["page-main"],{0:function(e,t,a){a("r4fA"),e.exports=a("2YZa")},"2YZa":function(e,t,a){"use strict";a.r(t);var n=a("ohty"),r=a("q1tI"),o=a.n(r),c=a("i8i4"),i=a.n(c),s=a("ld/X"),l=a("QCBT"),d=a("uR+Q"),m=(a("5fTz"),a("9Hgl")),p=a("55Ip"),u=a("U0ZW"),y=a("cuOD"),h=a.n(y),b=(a("kVbL"),a("Ty5D"));const g=Object(b.j)((function(e){const{location:t}=e,a=d.s.game_detail.name,r=Object(n.parseQuery)(t.search);return o.a.createElement(d.m,{className:"domstic-main-content-app page-route",style:{paddingBottom:"75px"},sceneName:a,context:{list_s:{pkgname:[r.pkgname]}},key:"b0XU11"})})),f=Object(b.j)(e=>{const{location:t}=e,{authorId:a}=Object(n.parseQuery)(t.search),r={list_s:{authorId:[a]}};return o.a.createElement(d.m,{className:"domstic-main-page-author-details page-route",sceneName:d.s.author_details_page.name,context:r,key:"Yvfw11"})});function k(){return o.a.createElement(d.m,{className:"domstic-main-page-discovery page-route",style:{display:"flex",flex:1},sceneName:d.s.discovery.name,swOption:{sw_cache_mod:"network"},key:"i7so11"})}function w(){const e=Object(b.h)(),t=Object(n.parseQuery)(e.search),a=d.s.game_information.name;return o.a.createElement(d.m,{className:"domstic-main-page-discovery page-route",sceneName:a,context:{list_s:{pkgname:[t.pkgname]}},swOption:{sw_cache_mod:"network"},key:"wE+L11"})}function v(){return o.a.createElement(d.m,{className:"domstic-main-page-game-lib page-route",style:{display:"flex",flex:1},sceneName:d.s.library.name,key:"bE3111"})}function E(){return o.a.createElement(d.m,{className:"domstic-main-page-h5game page-route",sceneName:d.s.h5_game.name,key:"HMEc11"})}var _=a("OUlR"),O=a.n(_);const j=Object(b.j)(e=>{const{location:t}=e,a=Object(n.parseQuery)(t.search),[c,i]=Object(r.useState)(a.src),d=Object(r.useRef)();return Object(r.useEffect)(()=>{const e=document.querySelector("body");if(e&&e.classList.add("no-color"),!d.current)return;const t=d.current.querySelector("iframe"),a=()=>{if(t)try{const e=t.contentDocument.querySelector("head"),a=t.contentDocument.createElement("style");a.innerText=`@font-face {font-family:'Source Han Sans CN';src:url(${O.a}) format('truetype');font-weight: normal;}`,null===e||void 0===e||e.appendChild(a)}catch(e){}};return null===t||void 0===t||t.addEventListener("load",a),()=>{e&&e.classList.remove("no-color"),null===t||void 0===t||t.removeEventListener("load",a)}},[]),Object(s.H)({eventName:"refresh",listener:()=>{i("about:blank"),requestAnimationFrame(()=>{i(a.src)})}}),o.a.createElement("div",{className:"domstic-like-webview page-route",style:{height:"100%"},ref:e=>{d.current=e},key:"tp6+11"},o.a.createElement(l.v,{src:c,key:"tp6+21"}))});const x=Object(b.j)((function(e){const{location:t}=e,a=d.s.live_detail.name,{anchorId:c,platId:i}=Object(n.parseQuery)(t.search),l={list_i:{anchorId:[+c]},list_s:{platId:[i]}};return Object(r.useLayoutEffect)(()=>{Object(s.g)(a)},[c,i,a]),o.a.createElement(d.m,{className:"domstic-main-content-app page-route page100",sceneName:a,context:l,key:"/xgX11"})}));function N(){return o.a.createElement(d.m,{className:"domstic-main-content-live-list page-route",style:{display:"flex",flex:1},sceneName:d.s.live_library.name,key:"OtaH11"})}function S(){const e=Object(s.S)("ALLFILTERED"),{userInfo:t}=Object(s.E)();return e&&o.a.createElement(d.m,{className:"domstic-main-page-mine page-route",sceneName:d.s.my_2.name,context:{list_s:{pkgname:e},openid:null===t||void 0===t?void 0:t.openid},swOption:{sw_cache_mod:"network"},key:"9tBC11"})}function W(){const e=Object(b.h)(),t=d.s.news_detail.name,{cmsid:a}=Object(n.parseQuery)(e.search);return Object(r.useMemo)(()=>{Object(s.g)(t)},[t,a]),o.a.createElement(d.m,{className:"domstic-main-content-app page-route",sceneName:t,context:{list_s:{cmsid:[a]}},key:"7/tD11"})}function C(){const e=Object(s.S)("INSTALLED");return e&&o.a.createElement(d.m,{className:"domstic-main-page-recommend page-route",sceneName:d.s.frontpage.name,pagecount:20,offset:1,refreshInterval:18e5,context:{list_s:{installedApp:e}},loadMoreComp:o.a.createElement("div",{style:{margin:"30px 0"},key:"EQ4u21"},o.a.createElement(l.y,{key:"EQ4u31"})),key:"EQ4u11"},o.a.createElement(l.M,{key:"EQ4u41"}))}var A=a("fNN2");const I=o.a.memo(e=>{const{searchData:t}=e,a=Object(s.S)("INSTALLED");return a&&o.a.createElement(d.m,{className:"domstic-main-content-search page-route",sceneName:d.s.search_result.name,context:{list_s:{keyword:[t],installedApp:a},list_i:{pagesize:[30]}},swOption:{sw_cache_mod:"network"},key:"Q3uV11"})},(e,t)=>""+e.searchData===""+t.searchData);function K(){const{searchData:e}=Object(b.i)(),t=Object(b.h)();return Object(r.useEffect)(()=>()=>{Object(A.setSearchKey)("")},[]),t.pathname.startsWith("/search")?Object(A.setSearchKey)(e):Object(A.setSearchKey)(""),Object(r.useMemo)(()=>{Object(s.g)(d.s.search_result.name)},[e]),o.a.createElement(I,{searchData:e,key:"Q3uV21"})}const R=o.a.memo(e=>{const{searchData:t}=e;return o.a.createElement(d.m,{className:"domstic-main-content-search page-route",sceneName:d.s.search_result2.name,context:{list_s:{keyword:[t]},list_i:{pagesize:[15]}},_nk:"iAro1nJ11"})},(e,t)=>""+e.searchData===""+t.searchData);function D(){const{searchData:e}=Object(b.i)();return o.a.createElement(R,{searchData:e,key:"o1nJ21"})}const M=Object(b.j)((function(e){const{location:t}=e,a=d.s.topic_detail.name,c=Object(n.parseQuery)(t.search);return Object(r.useMemo)(()=>{Object(s.g)(a)},[a,c.topic_mid]),o.a.createElement(d.m,{className:"domstic-main-content-app page-route",sceneName:a,context:{list_s:{mid:[c.topic_mid]}},key:"4pNd11"})}));const T=Object(b.j)((function(e){const{location:t}=e,a=Object(n.parseQuery)(t.search);return o.a.createElement(d.m,{className:"domstic-main-content-video page-route page100",sceneName:d.s.video_detail.name,context:{list_s:{cmsid:[a.cmsid],vid:[a.vid]}},key:"pprz11"})}));function L(){return o.a.createElement(d.m,{className:"domstic-main-content-video-list page-route",style:{display:"flex",flex:1},sceneName:d.s.video_library.name,key:"2Zk111"})}var z=a("/UZO");const P=o.a.memo(e=>{const{pkgname:t,sceneName:a,userInfo:n}=e;return o.a.createElement(d.m,{className:"domstic-main-page-mine page-route",sceneName:a,context:{list_s:{pkgname:t,openid:null===n||void 0===n?void 0:n.openid}},swOption:{sw_cache_mod:"network"},_nk:"iArMhUG11"})},(e,t)=>{var a,n;return(null===(a=e.userInfo)||void 0===a?void 0:a.openid)===(null===(n=t.userInfo)||void 0===n?void 0:n.openid)&&`${e.sceneName}-${e.pkgname.join(",")}`===`${t.sceneName}-${t.pkgname.join(",")}`});o.a.memo((function(){const{userInfo:e}=Object(s.E)(),t=Object(s.w)(),{downLoadQueue:a}=t,[n,c]=Object(r.useState)([]);return Object(r.useEffect)(()=>{const e=[];Object.keys(a).forEach(t=>{[z.State.init,z.State.Uninstalling,z.State.EndUninstall].includes(a[t].stateText)||e.push(a[t].packageName)}),c(e)},[a]),o.a.createElement(P,{sceneName:d.s.my.name,pkgname:n,hasMyBooking:0,userInfo:e,key:"MhUG21"})}),(e,t)=>JSON.stringify(e)===JSON.stringify(t));const q=o.a.memo(e=>{const t=Object(r.useRef)(""),a=Object(r.useRef)(""),{drop:n,dropScope:c,clear:i,getCachingNodes:l}=Object(m.useAliveController)(),d=Object(r.useRef)({drop:n,dropScope:c,clear:i,getCachingNodes:l}),p=Object(b.h)();d.current={drop:n,dropScope:c,clear:i,getCachingNodes:l};const y=Object(r.useRef)({});Object(r.useEffect)(()=>{const e=setInterval(()=>{const e=l(),t=Date.now(),a=e.slice().sort((e,t)=>t.updateTime-e.updateTime);e.forEach((e,n)=>{e.name&&(a.length-n>5||t-e.updateTime>3e5)&&(c(e.name),Object.keys(y.current).forEach(t=>{y.current[t]&&y.current[t].cacheKey===e.name&&delete y.current[t]}))}),window.keepers=l()},1e4);return()=>{clearInterval(e)}},[c,l]),t.current=p.pathname+p.search,y.current[t.current]=y.current[t.current]||{scrollTop:0,isScrolled:!1,cacheKey:"",isActive:!0};const{children:h}=e,{ref:g}=Object(s.P)({delay:0,callbackFunc(){const e=y.current[t.current];e&&e.isActive&&(e.scrollTop=g.scrollTop,e.isScrolled=!1)}});return Object(s.H)({eventName:"onRender",listener:e=>{a.current=Object(s.k)(e);if(l().findIndex(e=>e.name===a.current)<0)return;const n=y.current[t.current];if(n){n.cacheKey=a.current;const e=n.scrollTop||0;n.isScrolled=!0,n.isActive=!0,g.scrollTop=e}Array.from(g.querySelectorAll("[tracking]")).forEach(e=>{u.haloReport.reporter.view.reobserve(e)}),Object(s.i)("update-sticky")}}),Object(s.H)({eventName:"onUnmounted",listener:e=>{const t=Object(s.k)(e);Object.keys(y.current).forEach(e=>{const a=y.current[e];a&&t===a.cacheKey&&(a.isScrolled=!1,a.isActive=!1)})}}),o.a.createElement(o.a.Fragment,null,h)},()=>!0);function $(){const e=Object(r.useRef)(),[t,a]=Object(r.useState)(!1),c=Object(b.h)(),i=Object(b.g)(),{rootWidth:l}=Object(s.M)(),{continuationPageUrl:d}=Object(n.parseQuery)(c.search);return Object(r.useEffect)(()=>{Object(s.o)({history:i})},[i]),Object(r.useEffect)(()=>{document.body.style.minWidth=l+"px"},[l]),Object(s.T)({continuationPageUrl:d?decodeURIComponent(d):void 0}),Object(s.H)({eventName:"toUrl",listener:e=>{i.push(e)}}),Object(s.H)({eventName:"updateScroll",listener:n=>{a(!t),(null===n||void 0===n?void 0:n.wheelDeltaY)&&(e.current.scrollTop-=n.wheelDeltaY)}}),o.a.createElement(h.a,{component:"div",className:"page-content no-report",options:{suppressScrollX:!0,scrollYMarginOffset:6,swipeEasing:!1,useBothWheelAxes:!0,suppressScrollY:t},id:"page-content",containerRef:t=>{e.current=t},key:"EWKr11"},o.a.createElement(q,{key:"EWKr21"},o.a.createElement(b.d,{key:"EWKr31"},o.a.createElement(b.b,{exact:!0,path:"/",key:"EWKr41"},o.a.createElement(b.a,{to:"/recommend",key:"EWKr51"})),o.a.createElement(b.b,{exact:!0,path:"/recommend",render:()=>o.a.createElement(C,{key:"EWKr61"}),key:"EWKr42"}),o.a.createElement(b.b,{exact:!0,path:"/gamelibrary/:subScene",key:"EWKr43"},o.a.createElement(v,{key:"EWKr71"})),o.a.createElement(b.b,{exact:!0,path:"/gamelibrary",key:"EWKr44"},o.a.createElement(b.a,{to:"/gamelibrary/library_all",key:"EWKr52"})),o.a.createElement(b.b,{exact:!0,path:"/discovery/:subScene",key:"EWKr45"},o.a.createElement(k,{key:"EWKr81"})),o.a.createElement(b.b,{exact:!0,path:"/h5game",key:"EWKr46"},o.a.createElement(E,{key:"EWKr91"})),o.a.createElement(b.b,{exact:!0,path:"/discovery",key:"EWKr47"},o.a.createElement(b.a,{to:"/discovery/discovery_recommend",key:"EWKr53"})),o.a.createElement(b.b,{exact:!0,path:"/game-information",key:"EWKr48"},o.a.createElement(w,{key:"EWKra1"})),o.a.createElement(b.b,{exact:!0,path:"/mine",key:"EWKr49"},o.a.createElement(S,{key:"EWKrb1"})),o.a.createElement(b.b,{exact:!0,path:"/search/:searchData",key:"EWKr4a"},o.a.createElement(K,{key:"EWKrc1"})),o.a.createElement(b.b,{exact:!0,path:"/search2/:searchData",key:"EWKr4b"},o.a.createElement(D,{key:"EWKrd1"})),o.a.createElement(b.b,{exact:!0,path:"/app",key:"EWKr4c"},o.a.createElement(g,{key:"EWKre1"})),o.a.createElement(b.b,{exact:!0,path:"/video-list",key:"EWKr4d"},o.a.createElement(L,{key:"EWKrf1"})),o.a.createElement(b.b,{exact:!0,path:"/video",key:"EWKr4e"},o.a.createElement(T,{key:"EWKrg1"})),o.a.createElement(b.b,{exact:!0,path:"/webview",key:"EWKr4f"},o.a.createElement(j,{key:"EWKrh1"})),o.a.createElement(b.b,{exact:!0,path:"/live-list",key:"EWKr4g"},o.a.createElement(N,{key:"EWKri1"})),o.a.createElement(b.b,{exact:!0,path:"/live-detail",key:"EWKr4h"},o.a.createElement(x,{key:"EWKrj1"})),o.a.createElement(b.b,{exact:!0,path:"/topic",key:"EWKr4i"},o.a.createElement(M,{key:"EWKrk1"})),o.a.createElement(b.b,{exact:!0,path:"/AuthorDetails",key:"EWKr4j"},o.a.createElement(f,{key:"EWKrl1"})),o.a.createElement(b.b,{exact:!0,path:"/news",key:"EWKr4k"},o.a.createElement(W,{key:"EWKrm1"})))))}var U=a("prSB");a("r/Cv");var H=Object(b.j)(e=>{const[t,a]=Object(r.useState)({});return Object(s.H)({eventName:"updateMainHeaderStyle",listener:e=>{a(e)}}),o.a.createElement("div",{className:"domstic-main-header","data-scene_id":"-10","data-scene-expose":!0,style:Object(U.a)({},t),key:"4mx/11"},o.a.createElement(d.b,{key:"4mx/21"}),o.a.createElement(d.p,{key:"4mx/31"}),o.a.createElement(d.o,{handleClickCallBack:t=>{const{history:a}=e;a.push(t.path)},key:"4mx/41"}))});const B=o.a.memo(()=>{const{refresh:e}=Object(s.y)(),t=Object(r.useRef)(e);return t.current=e,Object(r.useEffect)(()=>{t.current();const e=setInterval(()=>{t.current()},108e6);return()=>{clearInterval(e)}},[]),Object(s.H)({eventName:"refresh",listener:e}),o.a.createElement(o.a.Fragment,null)},()=>!0);var Y=()=>{const e=Object(s.M)(),{rootWidth:t}=e;return Object(r.useEffect)(()=>{document.body.style.minWidth=t+"px"},[t]),o.a.createElement(p.a,{key:"YvPY11"},o.a.createElement(B,{key:"YvPY21"}),o.a.createElement(d.f,{aegis:window.aegis,key:"YvPY31"},o.a.createElement(l.k,{key:"YvPY41"},o.a.createElement(H,{key:"YvPY51"}),o.a.createElement(m.AliveScope,{key:"YvPY61"},o.a.createElement($,{key:"YvPY71"})))))},Q=(a("ymJX"),a("butC")),J=a("Fsgo"),F=a("Hd7B");const G={frameApi:{targetDetailAndInstall(e){Object(s.i)("toUrl",Object(F.d)(e.params.pkg)+"&autoDownLoad=1&card_id=hitFaceAutoDownLoad&scene_id=-21")},openIframe(e){Object(s.i)("toUrl",Object(F.n)(e.params.url))},closeWindow(){Object(s.i)("closePopIframe")},closeAgreementWindow(){Object(s.i)("onCloseModel-AgreementWindow")}}};window.addEventListener("message",e=>{if(/\.qq\.com$/.test(e.origin)){var t;const a=e.data||{};(null===(t=G[a.type])||void 0===t?void 0:t[a.api])&&G[a.type][a.api](a)}});var V=a("dbal");const Z=Object(V.getIndexDbConnect)("continuation_info_cache",1,"continuation_cache");function X(e){setTimeout(()=>{s.l.history.push?s.l.history.push(e):X(e)},500)}function ee(){return(ee=Object(Q.a)((function*(e){const{pkgName:t,pkgArea:a,supplyid:r}=e;if(t)try{const o=(yield Object(F.e)(t,r,150))[t],c=yield Z.get(`${t}_${o.id}`);if("app"===o.app_type&&(u.haloReport.report("newdownload",null,{comp_id:"callDownLoadWithPkgName",pkgname:t,standy1:""+r,standy2:"showExternalCallContinuationPage",standy3:`isShown:${c?1:0},url:${null===o||void 0===o?void 0:o.url},app_type:${o.app_type}`}),Object(s.i)("callDownLoadWithPkgName",{pkgName:t,autoDownLoadArea:a,supplyid:r,canMultipleTrigger:!0,reportContextData:{card_id:"PkgAutoInstallInf",scene_id:"-19",standy1:"command_line,"}})),!c){if(null===o||void 0===o?void 0:o.url)switch(+o.open_type){case 1:X(Object(F.n)(o.url));break;case 2:Object(d.q)({url:o.url,_:Date.now()%1e4});break;default:window.aegis.report(`Market.PkgAutoInstallInf: unknown open_type ${JSON.stringify(e)} appinfo:${o}`)}else{if("offline"===o.app_type)return;X(""+Object(F.d)(t))}u.haloReport.report("newdownload",null,{comp_id:"syzsFirstEnterReport",pkgname:t,standy1:""+r,standy2:"showExternalCallContinuationPage",standy3:`isShown:${c?1:0},url:${null===o||void 0===o?void 0:o.url},app_type:${o.app_type}`}),Object(n.loadScript)("//nutty.gtimg.com/modules/syzs/syzs-first-enter-report.min.js"),Z.set(`${t}_${o.id}`,!0,(new Date).getTime()+86400030)}}catch(e){window.aegis.report(`showExternalCallContinuationPage error>> msg:${e.msg},stack:${e.stack}`)}}))).apply(this,arguments)}const te=window.__version__.modules;var ae=a("n5Vj"),ne=a.n(ae);const re=F.y?"dev":"formal",oe={dev:{cdn:[11286,11287],ajax:[11288,11289],asset:[11290,11291],install:[11292],activate:[11293],register:[11294]},formal:{cdn:[11275,11276],ajax:[11277,11278],asset:[11279,11280],install:[11281],activate:[11282],register:[11283],fetchTime:[11530],fetchRetry1:[11531],fetchRetry2:[11532],fetchRetrySuccess0:[11534],fetchRetrySuccess1:[11535],fetchRetrySuccess2:[11536],fetchFail:[11537]}}[re];"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",e=>{var t,a;if(window.navigator.onLine)switch(e.data.type){case"sw-reload":window.location.reload(!0);break;case"sw-report":(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.requestType)&&oe[e.data.data.requestType];break;case"sw-aegis":window.aegis.report(`serviceworker error: ${e.data.data}, url:${window.location.href}`)}});const ce=()=>{const{innerWidth:e}=window;z.Window.SetCaptionArea([{x:0,y:0,width:e-160,height:40}])};Object(F.b)(),window.addEventListener("resize",n._.debounce(()=>{ce()},100),!1),z.Window.SetResizable({resizable:!0}),ce(),z.Window.MoveCenter();let ie=!1;function se(e){ie=!0,Object(s.i)("toUrl",e),setTimeout(()=>{ie=!1},5e3)}function le(){const e=new Promise(e=>{setTimeout(e,3e3)}),t=z.Market.GetGuid().then(e=>{const t="0"===e?"web":e;Object(n.setCookie)("guid",""+t,"qq.com","/",8760),Object(n.setCookie)("guid",""+t,"gameloop.com","/",8760),localStorage.setItem("guid",""+t),Object(s.i)("setGuid",t),Object(s.o)({guid:t}),window.aegis.setConfig({id:["imgcache.qq.com","qzs.qq.com"].indexOf(window.location.host)<0?"2346":"2343",version:+window.__version__.buildTime,uin:""+t,beforeReport:e=>{if(e&&(null===e||void 0===e?void 0:e.msg.indexOf("tbsRecieveNativeEvent"))>-1)return!1},api:{retCodeHandler(e,t){const a={isErr:!1,code:0};if(t&&t.indexOf("//yybadaccess")>-1)try{const t=JSON.parse(e),n=["ret","Ret","code"].find(e=>Object.prototype.hasOwnProperty.call(t,e))||"code";0!==t[n]&&(a.isErr=!0,a.code=t[n])}catch(e){a.isErr=!0,a.code=-1e3}return a}},spa:!0,offlineLog:!1,repeat:3,reportApiSpeed:!0,reportAssetSpeed:!0})});return Promise.race([e,t])}function de(){return(de=Object(Q.a)((function*(){let e="zh_CN",t="CN";try{if(yield le(),z.Market.InitSettingTabs){const a=yield z.Market.InitSettingTabs();e=a.Basic.curLang,t=a.Basic.region}}catch(e){}Object(s.o)({region:t}),Object(J.setLocale)(e||J.LANG.zh_CN),u.haloReport.setReportLocale(e||J.LANG.zh_CN),u.haloReport.setReportRegion(t)}))).apply(this,arguments)}window.sw&&navigator&&navigator.serviceWorker&&ne.a.register().then(e=>{window.aegis.reportPv(oe[re].register[0])}).catch(e=>{}),sessionStorage.setItem("syzs_qq_connect_flag","true"),Object(n.setCookie)("syzs_isNewMarket",1,"qq.com"),Object(n.setCookie)("syzs_isNewMarket",1,"gameloop.com"),window.JsBridge=z,Object(Q.a)((function*(){u.haloReport.setConfig({onReport(e){z.Market.__asyncCallApi("BeaconReport.Report",e)}})}))(),z.tgbEventBus.$on("webcall.ResolveEnterUrl",e=>{try{const t=JSON.parse(decodeURIComponent(e.url.slice(e.url.indexOf("?")+1)));if(t.url){let e=!1;if(/^https:\/\/([A-Za-z0-9]*\.)*qq\.com/.test(t.url)&&(e=!0),/^https:\/\/gameloop\.fun/.test(t.url)&&(e=!0),e)switch(t.opentype){case"pop":z.Market.OpenUrlWithBrowser(t.url);break;case"url":default:se(""+Object(F.n)(t.url))}}else t.startpkg}catch(t){window.aegis.report("\u975e\u6cd5\u7684deeplink:"+e.url)}}),z.tgbEventBus.$on("Ipc.SendMessage",e=>{if(e.message)try{const t=JSON.parse(e.message);if("mainAction"===t.type)switch(t.action){case"switchLeftMenuTab":{const e=/#\/detail\/([^?^/]*)/.exec(t.params.url);e?se(Object(F.d)(e[1])+"&autoDownLoad=1&card_id=tipsAutoDownLoad&scene_id=-20"):z.Window.OpenPopupBrowserWindow({url:t.params.url,width:1200,height:700,modalMode:!1,resizable:!0,showTitlebar:!0,disableZoom:!0});break}case"toUrl":se(Object(F.n)(t.params.url))}}catch(e){}}),z.tgbEventBus.$on("Market.FinishPreDownloadAPK",()=>{Object(s.i)("toUrl",Object(F.r)())}),window.popupIframe=d.q;let me=!1;z.Window.GetWindowState().then(e=>{me=e.visible,u.haloReport.setBackend(e.visible?0:1)}),z.tgbEventBus.$on("Window.WindowStateChange",e=>{u.haloReport.setBackend(e.visible?0:1),e.visible&&!me&&e.visible&&(u.haloReport.report("awake"),ie||(z.Market.checkHasApi("Market.UpdateRightNow")&&Object(d.t)(d.d.NEW_AVUS_MarketActive),window.handleRefresh())),me=e.visible}),z.tgbEventBus.$on("Market.PkgAutoInstallInf",e=>{const{pkgName:t,pkgArea:a,supplyid:r,isPreDownloadItem:o=!1,overTime:c=0}=e;if(window.aegis.infoAll("downloadMsg: callDownLoadWithPkgName params "+JSON.stringify(e)),Object(n.setCookie)("syzs_newdownloadSupplyid",r,"qq.com","/",8760),Object(n.setCookie)("syzs_newdownloadPkgName",t,"qq.com","/",8760),o)return u.haloReport.report("newdownload",null,{comp_id:"callDownLoadWithPkgName",pkgname:t,standy1:r,standy2:"preDownloadItem"}),void Object(s.i)("callDownLoadWithPkgName",{pkgName:t,autoDownLoadArea:a,supplyid:r,canMultipleTrigger:!0,isPreDownloadItem:o,overTime:c,reportContextData:{card_id:o?"preDownloadTaskCallAutoDownLoad":"PkgAutoInstallInf",scene_id:o?"-22":"-19",standy1:o?"predownload":"command_line,"}});u.haloReport.report("newdownload",null,{comp_id:"showExternalCallContinuationPage",pkgname:t,standy1:r}),function(e){ee.apply(this,arguments)}({pkgName:t,pkgArea:a,supplyid:r})});"true"===localStorage.getItem("syzs_qq_connect_flag")||z.Market.getNativeApis(!0).then(()=>{z.Market.checkHasApi("Market.QqOpenidValid")&&(localStorage.setItem("syzs_qq_connect_flag","true"),z.Market.QqOpenidValid())}),setTimeout((function(){Object.values(te).forEach(e=>{const t=document.createElement("link");t.rel="prefetch",t.href=e,document.head.appendChild(t)})}),5e3);const pe=document.getElementById("root");(function(){return de.apply(this,arguments)})().then(()=>{try{i.a.render(o.a.createElement(Y,{key:"8/b/11"}),pe)}catch(e){window.aegis.report(e),function(){var e,t;(null===(e=navigator)||void 0===e||null===(t=e.serviceWorker)||void 0===t?void 0:t.controller)&&(navigator.serviceWorker.controller.postMessage({action:"CLEAN_ASSETS",assets:Object.values(window.__version__.modules).sort()}),navigator.serviceWorker.getRegistrations().then(e=>e.forEach(e=>{e.unregister()})))}()}});const ue=JSON.parse(JSON.stringify(window.__version__));window.checkHMR=(e=0)=>{var t;return null===(t=Object(n.loadScript)("./version.js?_="+Math.random()))||void 0===t?void 0:t.then(()=>{window.__version__.md5!==ue.md5&&setTimeout(()=>{!function(){var e,t;(null===(e=navigator)||void 0===e||null===(t=e.serviceWorker)||void 0===t?void 0:t.controller)?navigator.serviceWorker.controller.postMessage({action:"CHECK_ASSETS",assets:Object.values(window.__version__.modules).sort(),versionInfo:window.__version__,offlineBuildTime:window.__buildTime__}):window.location.reload(!0)}(),setTimeout(()=>{window.location.reload(!0)},3e4)},e)})},window.checkHMR(),setInterval(()=>{window.checkHMR(6e5)},36e5)},OUlR:function(e,t,a){e.exports=a.p+"static/media/SourceHanSansCN-Normal.1def9981.ttf"},"e/4m":function(e,t,a){var n=a("JPst"),r=a("HeW1"),o=a("OUlR");t=n(!1);var c=r(o);t.push([e.i,"*{border:0;margin:0;padding:0}body,html{font-family:Source Han Sans CN;-webkit-font-smoothing:antialiased;user-select:none;-webkit-user-select:none;height:100%;cursor:default}body{position:relative;background-color:#1b1b1d;color:#fff;overflow:hidden}body.no-color{background-color:unset}body.no-color ::-webkit-scrollbar{width:0}body .js-disable-x-scroll{overflow-x:hidden}button,input{font-family:inherit}button,div{outline:none;background:transparent}ul{list-style:none}#root{height:100%}@keyframes fade-out{0%{opacity:1}to{opacity:0;display:none}}.fade-out{animation:fade-out .3s ease-in forwards}a:-webkit-any-link{color:inherit;text-decoration:none}a:any-link{color:inherit;text-decoration:none}.float-left{float:left}.float-right{float:right}.page-null{height:100%;display:flex;justify-content:center;align-items:center}.page-null .refresh{cursor:pointer}@font-face{font-family:Source Han Sans CN;src:url("+c+') format("truetype");font-weight:400}.js-updating #root{display:none}.js-updating #root-bak{display:block}#root{display:flex;flex-direction:column}.page-content{height:calc(100vh - 88px);margin-top:88px;flex:1;display:flex;align-items:center;flex-direction:column}.page-content .ka-wrapper{width:100%}.page-content.scrollbar-container{position:relative;width:100%;height:100%}.page-content.scrollbar-container.suspendY{overflow:visible!important}.page-content.scrollbar-container .ps__rail-y{z-index:999}.page-content.scrollbar-container .ps__rail-y.ps--clicking,.page-content.scrollbar-container .ps__rail-y:focus,.page-content.scrollbar-container .ps__rail-y:hover{background-color:initial;opacity:1}.page-content.scrollbar-container .ps__rail-y.ps--clicking .ps__thumb-y,.page-content.scrollbar-container .ps__rail-y .ps__thumb-y,.page-content.scrollbar-container .ps__rail-y:focus .ps__thumb-y,.page-content.scrollbar-container .ps__rail-y:hover .ps__thumb-y{background-color:#474650}.page-content .page-route{width:100%;min-height:calc(100vh - 88px)}.page100{width:100%;height:calc(100vh - 88px)}::-webkit-scrollbar{width:18px;height:0}::-webkit-scrollbar:hover{cursor:pointer}::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset -10px 0 0 0 #474650;border:5px solid transparent}#login{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:10019;color:#000;background-color:rgba(0,0,0,.8)}',""]),e.exports=t},"r/Cv":function(e,t,a){var n=a("wS0f");"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(e.exports=n.locals)},wS0f:function(e,t,a){(t=a("JPst")(!1)).push([e.i,".domstic-main-header{position:fixed;top:0;left:0;right:0;background-color:#2e2d34;z-index:10000}",""]),e.exports=t},ymJX:function(e,t,a){var n=a("e/4m");"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(e.exports=n.locals)}},[[0,"runtime","reactVendors","lib-halo-jsbridge-syzs","lib-halo-utils","lib-halo-report","lib-syzs-login-sdk","lib-halo-util","lib-halo-downloader","lib-syzs-market-react-components","lib-syzs-market-ajax","lib-syzs-market-utils","lib-syzs-market-report","lib-syzs-market-i18n","lib-syzs-react-activation","i18n-de","i18n-id","i18n-en","i18n-zh_CN","common"]]]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-523a6471"],{"18ad":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:6}},[n("el-input",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"mini",placeholder:"搜索关键词"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),e._v(" "),n("el-tree",{staticClass:"tree-block",attrs:{"node-key":"uuid",data:e.treeListFilter,"default-expanded-keys":e.treeListFilterKeys,props:{children:"children",label:"label"}},on:{"node-click":e.onTreeNodeSelect}})],1),e._v(" "),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"btn-group"},[n("el-button-group",[n("el-button",{attrs:{type:e.oneScreen?"primary":""},on:{click:function(t){return e.onChangeShowType(e.SCREEN_NUM.one)}}},[e._v("单屏")]),e._v(" "),n("el-button",{attrs:{type:e.fourScreen?"primary":""},on:{click:function(t){return e.onChangeShowType(e.SCREEN_NUM.four)}}},[e._v("四分屏")]),e._v(" "),n("el-button",{attrs:{type:e.nineScreen?"primary":""},on:{click:function(t){return e.onChangeShowType(e.SCREEN_NUM.nine)}}},[e._v("九分屏")]),e._v(" "),e.isSupportFullscreen?n("el-button",{staticClass:"fullscreen-btn",attrs:{icon:"el-icon-rank",title:"全屏"},on:{click:e.onFullscreen}}):e._e()],1)],1),e._v(" "),n("div",{ref:"fullscreenDom",staticClass:"screen-block"},[n("el-row",{staticStyle:{height:"100%"}},[e.oneScreen?[n("el-col",{staticStyle:{height:"100%"},attrs:{span:24}},[n("div",{staticClass:"screen-item",class:{selected:1===e.selectIndex},on:{click:function(t){return e.onSelectItem(1)}}},[e.screenList[0]?[n("player",{key:e.screenList[0].uuid,attrs:{screen:e.screenList[0],type:e.playType}})]:[n("p",{staticStyle:{"text-align":"center"}},[e._v("无信号")])]],2)])]:e.fourScreen?[e._l(4,(function(t){return[n("el-col",{key:t,staticStyle:{height:"50%"},attrs:{span:12}},[n("div",{staticClass:"screen-item",class:{selected:e.selectIndex===t},on:{click:function(n){return e.onSelectItem(t)}}},[e.screenList[t-1]?n("player",{key:e.screenList[t-1].uuid,attrs:{screen:e.screenList[t-1],type:e.playType}}):[n("p",{staticStyle:{"text-align":"center"}},[e._v("无信号")])]],2)])]}))]:e.nineScreen?[e._l(9,(function(t){return[n("el-col",{key:t,staticStyle:{height:"33.33%"},attrs:{span:8}},[n("div",{staticClass:"screen-item",class:{selected:e.selectIndex===t},on:{click:function(n){return e.onSelectItem(t)}}},[e.screenList[t-1]?n("player",{key:e.screenList[t-1].uuid,attrs:{screen:e.screenList[t-1],type:e.playType}}):[n("p",{staticStyle:{"text-align":"center"}},[e._v("无信号")])]],2)])]}))]:e.sixteenScreen?[e._l(16,(function(t){return[n("el-col",{key:t,staticStyle:{height:"25%"},attrs:{span:6}},[n("div",{staticClass:"screen-item",class:{selected:e.selectIndex===t},on:{click:function(n){return e.onSelectItem(t)}}},[e.screenList[t-1]?n("player",{key:e.screenList[t-1].uuid,attrs:{screen:e.screenList[t-1],type:e.playType}}):[n("p",{staticStyle:{"text-align":"center"}},[e._v("无信号")])]],2)])]}))]:e._e()],2)],1),e._v(" "),!e.oneScreen&&e.streamList.length>0?n("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[n("pagination",{attrs:{"current-page":0,"page-size":e.screenPageSize,total:e.streamList.length},on:{"current-change":e.onCurrentChange}})],1):e._e()])],1)],1)},s=[],i=(n("8e6e"),n("456d"),n("bd86")),c=(n("7514"),n("ac6a"),n("333d")),a=n("2f62"),o=n("ed08"),l=n("93bf"),u=n.n(l),h=n("2435"),d={data:function(){return{searchKey:"",showType:h["b"].one,SCREEN_NUM:h["b"],selectIndex:1,treeList:[],screenList:Object(o["j"])(),isSupportFullscreen:u.a.isEnabled,playType:"jessibuca"}},computed:{treeListFilter:function(){var e=[],t=this.searchKey.trim();return t?this.treeList.forEach((function(n){var r={uuid:n.uuid,id:n.id,label:n.label,children:[]};n.children.forEach((function(e){-1!==e.label.indexOf(t)&&r.children.push(e)})),r.children.length>0&&e.push(r)})):e=this.treeList,e},treeListFilterKeys:function(){var e=[],t=this.searchKey.trim();return t&&(e=this.treeListFilter.map((function(e){return e.uuid}))),e},oneScreen:function(){return this.showType===h["b"].one},fourScreen:function(){return this.showType===h["b"].four},nineScreen:function(){return this.showType===h["b"].nine},sixteenScreen:function(){return this.showType===h["b"].sixteen},currentSelectItem:function(){return this.screenList[this.selectIndex-1]},screenPageSize:function(){return h["c"][this.showType]}},methods:{onSelectItem:function(e){this.selectIndex=e},onTreeNodeSelect:function(e){console.log(e),e.isChannel&&this.selectIndex&&(this.screenList.splice(this.selectIndex-1,1,e),this.nextSelectIndex())},onChangeShowType:function(e){this.showType=e,this.selectIndex=1,this.screenList=Object(o["j"])()},nextSelectIndex:function(){var e={one:1,four:4,nine:9,sixteen:16};this.selectIndex<e[this.showType]?this.selectIndex+=1:this.selectIndex=1},onFullscreen:function(){var e=this.$refs.fullscreenDom;e&&(this.selectIndex=0,u.a.request(e))},onCurrentChange:function(e){this.updateSelectScreen(e)}}},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player-wrap"},[e.stream?["webrtc"===e.type?n("webrtc-player",{attrs:{"stream-path":e.stream}}):n("jessibuca-player",{attrs:{"stream-path":e.stream,"has-audio":!1,"use-mse":e.screen.isH264}})]:n("div",{staticClass:"player-wrap-loading"},[e._v("\n    加载中...\n  ")])],2)},f=[],m=n("3724"),y=n("9cd3"),b={name:"Player",components:{JessibucaPlayer:y["a"],WebrtcPlayer:m["a"]},props:{screen:{type:Object,default:function(){return{id:"",streamPath:"",label:"",isH264:!1}}},type:{type:String,default:"jessibuca"}},data:function(){return{stream:""}},created:function(){},mounted:function(){this.init()},methods:{init:function(){var e=this;this.screen.streamPath&&this.$nextTick((function(){e.stream=e.screen.streamPath}))}}},g=b,v=n("2877"),S=Object(v["a"])(g,p,f,!1,null,"4c26d0b0",null),C=S.exports;function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={name:"square",components:{Pagination:c["a"],Player:C},mixins:[d],data:function(){return{}},watch:{streamList:{handler:function(e){if(0===this.treeList.length&&e&&e.length>0){var t=[],n=[];e.forEach((function(e){var r=e.streamPath.indexOf("/");if(-1!==r){var s=e.streamPath.substring(0,r),i=e.streamPath.substring(r+1),c=t.find((function(e){return e.id===s}));if(i&&(e.label=i),c)c.children.push(e);else{var a={uuid:Object(o["y"])(),id:s,label:s,children:[]};a.children.push(e),t.push(a)}}else n.push(e)})),n.length>0&&t.push({uuid:Object(o["y"])(),id:Object(o["y"])(),label:"其他",children:n}),this.treeList=t}},immediate:!0}},created:function(){},computed:P({},Object(a["b"])({streamList:function(e){return e.Streams.map((function(e,t){var n=Object.keys(e.AudioTracks||{}),r=Object.keys(e.VideoTracks||{});return e.audioTracks=n||[],e.videoTracks=r||[],{uuid:Object(o["y"])(),id:e.StreamPath,StreamPath:e.StreamPath,streamPath:e.StreamPath,_index:t,label:e.StreamPath,isH264:!0,isChannel:!0}}))}})),methods:{updateSelectScreen:function(e){var t=this;this.screenList=Object(o["j"])();var n=this.streamList.slice((e-1)*this.screenPageSize,e*this.screenPageSize);n.length>0&&(this.selectIndex=1,n.forEach((function(e){t.$nextTick((function(){t.onTreeNodeSelect(e)}))})),this.selectIndex=1)}}},w=k,_=(n("3920"),Object(v["a"])(w,r,s,!1,null,"e84e8050",null));t["default"]=_.exports},"333d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-pagination is-background"},[n("ul",{staticClass:"el-pager",on:{click:e.onPagerClick}},[e.pageCount>0?n("li",{staticClass:"number",class:{active:1===e.currentPage,disabled:e.disabled}},[e._v("1\n    ")]):e._e(),e._v(" "),e.showPrevMore?n("li",{staticClass:"el-icon more btn-quickprev",class:[e.quickprevIconClass,{disabled:e.disabled}],on:{mouseenter:function(t){return e.onMouseenter("left")},mouseleave:function(t){e.quickprevIconClass="el-icon-more"}}}):e._e(),e._v(" "),e._l(e.pagers,(function(t){return n("li",{key:t,staticClass:"number",class:{active:e.currentPage===t,disabled:e.disabled}},[e._v(e._s(t)+"\n    ")])})),e._v(" "),e.showNextMore?n("li",{staticClass:"el-icon more btn-quicknext",class:[e.quicknextIconClass,{disabled:e.disabled}],on:{mouseenter:function(t){return e.onMouseenter("right")},mouseleave:function(t){e.quicknextIconClass="el-icon-more"}}}):e._e(),e._v(" "),e.pageCount>1?n("li",{staticClass:"number",class:{active:e.currentPage===e.pageCount,disabled:e.disabled}},[e._v(e._s(e.pageCount)+"\n    ")]):e._e()],2)])},s=[],i=(n("c5f6"),{name:"Pagination",props:{currentPage:Number,pageSize:Number,total:Number,pagerCount:Number,disabled:Boolean},watch:{showPrevMore:function(e){e||(this.quickprevIconClass="el-icon-more")},showNextMore:function(e){e||(this.quicknextIconClass="el-icon-more")}},methods:{onPagerClick:function(e){var t=e.target;if("UL"!==t.tagName&&!this.disabled){var n=Number(e.target.textContent),r=this.pageCount,s=this.currentPage,i=this.pagerCount-2;-1!==t.className.indexOf("more")&&(-1!==t.className.indexOf("quickprev")?n=s-i:-1!==t.className.indexOf("quicknext")&&(n=s+i)),isNaN(n)||(n<1&&(n=1),n>r&&(n=r)),this.$emit("current-change",n)}},onMouseenter:function(e){this.disabled||("left"===e?this.quickprevIconClass="el-icon-d-arrow-left":this.quicknextIconClass="el-icon-d-arrow-right")}},computed:{pagers:function(){var e=this.pagerCount,t=(e-1)/2,n=Number(this.currentPage),r=Number(this.pageCount),s=!1,i=!1;r>e&&(n>e-t&&(s=!0),n<r-t&&(i=!0));var c=[];if(s&&!i)for(var a=r-(e-2),o=a;o<r;o++)c.push(o);else if(!s&&i)for(var l=2;l<e;l++)c.push(l);else if(s&&i)for(var u=Math.floor(e/2)-1,h=n-u;h<=n+u;h++)c.push(h);else for(var d=2;d<r;d++)c.push(d);return this.showPrevMore=s,this.showNextMore=i,c},pageCount:function(){return"number"===typeof this.total?Math.max(1,Math.ceil(this.total/this.pageSize)):null}},data:function(){return{current:null,showPrevMore:!1,showNextMore:!1,quicknextIconClass:"el-icon-more",quickprevIconClass:"el-icon-more"}}}),c=i,a=n("2877"),o=Object(a["a"])(c,r,s,!1,null,null,null);t["a"]=o.exports},3724:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player-wrap"},[e.loading?n("div",{staticClass:"player-loading"},[e._v("视频加载中...")]):e._e(),e._v(" "),e.rtcStream?[e.controls?[n("video",{attrs:{autoplay:"",controls:"",controlslist:"nodownload nofullscreen noremoteplayback",disablePictureInPicture:""},domProps:{srcObject:e.rtcStream}})]:[n("video",{attrs:{autoplay:""},domProps:{srcObject:e.rtcStream}})]]:e._e()],2)},s=[],i=(n("96cf"),n("3b8d")),c=n("4ec3"),a={name:"WebrtcPlayer",rtcPeerConnection:null,data:function(){return{iceConnectionState:"",rtcPeerConnectionInit:!1,rtcStream:null,loading:!0}},props:{streamPath:{type:String,default:""},controls:{type:Boolean,default:!0}},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.initRtcPeerConnection();case 2:if(console.log("initRtcPeerConnectioned"),!this.streamPath){e.next=10;break}return this.loading=!0,e.next=7,this.play(this.streamPath);case 7:this.loading=!1,console.log("played"),this.$emit("doPlayed");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{initRtcPeerConnection:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new RTCPeerConnection,t.addTransceiver("video",{direction:"recvonly"}),t.addTransceiver("audio",{direction:"recvonly"}),t.onsignalingstatechange=function(e){console.log("onsignalingstatechange",e)},t.oniceconnectionstatechange=function(e){console.log("oniceconnectionstatechange",t.iceConnectionState)},t.onicecandidate=function(e){console.log("onicecandidate",e)},t.ontrack=function(e){console.log("ontrack",e),"video"===e.track.kind&&(r.rtcStream=e.streams[0])},e.next=9,t.createOffer();case 9:return n=e.sent,e.next=12,t.setLocalDescription(n);case 12:this.rtcPeerConnectionInit=!0,this.$options.rtcPeerConnection=t;case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),play:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.$options.rtcPeerConnection,r=n.localDescription.toJSON(),e.prev=2,e.next=5,Object(c["p"])(t,r);case 5:if(s=e.sent,console.log(s),!s.errmsg){e.next=11;break}return this.$message({type:"error",message:s.errmsg}),this.close(),e.abrupt("return");case 11:n.setRemoteDescription(new RTCSessionDescription({type:s.type,sdp:s.sdp})),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),console.error(e.t0);case 17:case"end":return e.stop()}}),e,this,[[2,14]])})));function t(t){return e.apply(this,arguments)}return t}(),close:function(){var e=this.$options.rtcPeerConnection;e&&e.close()}},destroyed:function(){this.close()}},o=a,l=n("2877"),u=Object(l["a"])(o,r,s,!1,null,"1871937e",null);t["a"]=u.exports},3920:function(e,t,n){"use strict";n("d135")},"9cd3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player-wrap"},[n("div",{ref:"container",attrs:{id:"container"}})])},s=[],i=n("ed08"),c={name:"JessicaPlayerV3",jessibuca:null,props:{streamPath:{type:String,default:""},fullPath:{type:String,default:""},hasAudio:{type:Boolean,default:!0},useMse:{type:Boolean,default:!1},useWcs:{type:Boolean,default:!1},isMute:{type:Boolean,default:!1}},data:function(){return{reconnectTime:1}},mounted:function(){this.init()},methods:{init:function(){var e=this,t=new window.Jessibuca({container:this.$refs.container,videoBuffer:.2,loadingText:"疯狂加载中...",useWCS:!1,useMSE:!1,hasAudio:this.hasAudio,debug:!1,timeout:5,showBandwidth:!1});t.on("loadingTimeout",(function(){console.log("timeout:",e.reconnectTime),e.reconnectTime>3?e.$message({type:"error",message:"播放超时"}):(e.replay(),e.reconnectTime+=1)})),t.on("stats",(function(e){})),t.on("error",(function(e){console.error("jessibuca error: ",e)})),this.$options.jessibuca=t,this.play()},play:function(){var e=this,t="";if(this.streamPath){var n=Object(i["k"])();t=n+this.streamPath}else this.fullPath&&(t=this.fullPath);console.log("play url is",t);var r=this.$options.jessibuca;r&&r.play(t).then((function(){e.$emit("doPlayed"),e.hasAudio&&r.cancelMute()})).catch((function(t){e.$message({type:"error",message:"播放失败"})}))},replay:function(){var e=this;this.close().then((function(){e.play()}))},close:function(){return this.$options.jessibuca&&this.$options.jessibuca.close()}},destroyed:function(){this.$options.jessibuca&&this.$options.jessibuca.destroy()}},a=c,o=n("2877"),l=Object(o["a"])(a,r,s,!1,null,"e1ce2d8a",null);t["a"]=l.exports},d135:function(e,t,n){}}]);
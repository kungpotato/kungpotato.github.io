(this["webpackJsonppet-shop-react"]=this["webpackJsonppet-shop-react"]||[]).push([[11,16],{1936:function(t,e){},1944:function(t,e){},1946:function(t,e){},2001:function(t,e){},2160:function(t,e,n){"use strict";n.r(e),n.d(e,"WalletConnectV1Adapter",(function(){return y}));var r=n(13),a=n(5),i=n(6),c=n(10),o=n(34),s=n(30),u=n(7),h=n(8),d=n(0),p=n.n(d),l=n(17),f=n.n(l),v=n(818),w=n(15),b=n(1998),k=[{name:"Rainbow",chains:[w.g.EIP155],logo:"https://images.web3auth.io/login-rainbow.svg",mobile:{native:"rainbow:",universal:"https://rnbwapp.com"},desktop:{native:"",universal:""}},{name:"MetaMask",chains:[w.g.EIP155],logo:"https://images.web3auth.io/login-metamask.svg",mobile:{native:"metamask:",universal:"https://metamask.app.link"},desktop:{native:"",universal:""}}];function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){f()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(a.a)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),f()(Object(c.a)(t),"name",w.j.WALLET_CONNECT_V1),f()(Object(c.a)(t),"adapterNamespace",w.c.EIP155),f()(Object(c.a)(t),"currentChainNamespace",w.g.EIP155),f()(Object(c.a)(t),"type",w.a.EXTERNAL),f()(Object(c.a)(t),"adapterOptions",void 0),f()(Object(c.a)(t),"status",w.d.NOT_READY),f()(Object(c.a)(t),"adapterData",{uri:"",extensionAdapters:k}),f()(Object(c.a)(t),"connector",null),f()(Object(c.a)(t),"wcProvider",null),f()(Object(c.a)(t),"rehydrated",!1),t.adapterOptions=g({},r),t.chainConfig=r.chainConfig||null,t}return Object(i.a)(n,[{key:"connected",get:function(){var t;return!(null===(t=this.connector)||void 0===t||!t.connected)}},{key:"provider",get:function(){var t;return(null===(t=this.wcProvider)||void 0===t?void 0:t.provider)||null},set:function(t){throw new Error("Not implemented")}},{key:"init",value:function(){var t=Object(r.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(o.a)(Object(s.a)(n.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=Object(w.n)(w.g.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new b.WalletConnectProvider({config:{chainConfig:this.chainConfig},connector:this.connector}),this.emit(w.b.READY,w.j.WALLET_CONNECT_V1),this.status=w.d.READY,!this.connector.connected){t.next=10;break}return this.rehydrated=!0,t.next=10,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId});case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connect",value:function(){var t=Object(r.a)(p.a.mark((function t(){var e,a,i=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(o.a)(Object(s.a)(n.prototype),"checkConnectionRequirements",this).call(this),this.connector){t.next=3;break}throw w.k.notReady("Wallet adapter is not ready yet");case 3:if(!this.connected){t.next=7;break}return t.next=6,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId});case 6:return t.abrupt("return",this.provider);case 7:if(this.status===w.d.CONNECTING){t.next=13;break}return null!==(e=this.adapterOptions.adapterSettings)&&void 0!==e&&e.qrcodeModal&&(this.connector=this.getWalletConnectInstance(),this.wcProvider=new b.WalletConnectProvider({config:{chainConfig:this.chainConfig,skipLookupNetwork:null===(a=this.adapterOptions.adapterSettings)||void 0===a?void 0:a.skipNetworkSwitching},connector:this.connector})),t.next=11,this.createNewSession();case 11:this.status=w.d.CONNECTING,this.emit(w.b.CONNECTING,{adapter:w.j.WALLET_CONNECT_V1});case 13:return t.abrupt("return",new Promise((function(t,e){if(!i.connector)return e(w.k.notReady("Wallet adapter is not ready yet"));i.connector.on("modal_closed",Object(r.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.status=w.d.READY,i.emit(w.b.READY,w.j.WALLET_CONNECT_V1),t.abrupt("return",e(new Error("User closed modal")));case 3:case"end":return t.stop()}}),t)}))));try{i.connector.on("connect",function(){var e=Object(r.a)(p.a.mark((function e(n,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&i.emit(w.b.ERRORED,n),w.p.debug("connected event emitted by web3auth"),e.next=4,i.onConnectHandler(r.params[0]);case 4:return e.abrupt("return",t(i.provider));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}catch(n){w.p.error("Wallet connect v1 adapter error while connecting",n),i.status=w.d.READY,i.rehydrated=!0,i.emit(w.b.ERRORED,n),e(n instanceof w.m?n:w.l.connectionError("Failed to login with wallet connect: ".concat((null===n||void 0===n?void 0:n.message)||"")))}})));case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=Object(r.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connected){t.next=2;break}throw w.l.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=Object(r.a)(p.a.mark((function t(){var e,n,r=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:{cleanup:!1},n=e.cleanup,this.connector&&this.connected){t.next=4;break}throw w.l.notConnectedError("Not connected with wallet");case 4:return t.next=6,this.connector.killSession();case 6:this.rehydrated=!1,n?(this.connector=null,this.status=w.d.NOT_READY,this.wcProvider=null):this.status=w.d.READY,this.emit(w.b.DISCONNECTED);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"addChain",value:function(){var t=Object(r.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.wcProvider){t.next=3;break}throw w.k.notReady("Wallet adapter is not ready yet");case 3:if(!(r=null===(n=this.adapterOptions.adapterSettings)||void 0===n?void 0:n.networkSwitchModal)){t.next=7;break}return t.next=7,r.addNetwork({chainConfig:e,appOrigin:window.location.hostname});case 7:return t.next=9,this.wcProvider.addChain(e);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),w.p.error(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=Object(r.a)(p.a.mark((function t(e,n){var r,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.wcProvider){t.next=2;break}throw w.k.notReady("Wallet adapter is not ready yet");case 2:if(!(a=null===(r=this.adapterOptions.adapterSettings)||void 0===r?void 0:r.networkSwitchModal)){t.next=6;break}return t.next=6,a.switchNetwork({currentChainConfig:n,newChainConfig:e,appOrigin:window.location.hostname});case 6:return t.next=8,this.wcProvider.switchChain({chainId:n.chainId,lookup:!1,addChain:!1});case 8:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"createNewSession",value:function(){var t=Object(r.a)(p.a.mark((function t(){var e,n,a,i,c=this,o=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=o.length>0&&void 0!==o[0]?o[0]:{forceNewSession:!1},this.connector){t.next=3;break}throw w.k.notReady("Wallet adapter is not ready yet");case 3:if(!a.forceNewSession||!this.connector.pending){t.next=6;break}return t.next=6,this.connector.killSession();case 6:if(null===(e=this.adapterOptions)||void 0===e||null===(n=e.adapterSettings)||void 0===n||!n.qrcodeModal){t.next=10;break}return t.next=9,this.connector.createSession({chainId:parseInt((null===(i=this.chainConfig)||void 0===i?void 0:i.chainId)||"0x1",16)});case 9:return t.abrupt("return");case 10:return t.abrupt("return",new Promise((function(t,e){var n;if(!c.connector)return e(w.k.notReady("Wallet adapter is not ready yet"));w.p.debug("creating new session for web3auth wallet connect"),c.connector.on("display_uri",function(){var n=Object(r.a)(p.a.mark((function n(r,a){var i,o;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=3;break}return c.emit(w.b.ERRORED,w.l.connectionError("Failed to display wallet connect qr code")),n.abrupt("return",e(r));case 3:return o=a.params[0],c.updateAdapterData({uri:o,extensionAdapters:k}),null===(i=c.connector)||void 0===i||i.off("display_uri"),n.abrupt("return",t());case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),c.connector.createSession({chainId:parseInt((null===(n=c.chainConfig)||void 0===n?void 0:n.chainId)||"0x1",16)}).catch((function(t){return w.p.error("error while creating new wallet connect session",t),c.emit(w.b.ERRORED,t),e(t)}))})));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"onConnectHandler",value:function(){var t=Object(r.a)(p.a.mark((function t(e){var n,r,a,i,c,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connector&&this.wcProvider){t.next=2;break}throw w.k.notReady("Wallet adapter is not ready yet");case 2:if(this.chainConfig){t.next=4;break}throw w.k.invalidParams("Chain config is not set");case 4:if(n=e.chainId,w.p.debug("connected chainId in hex"),n===parseInt(this.chainConfig.chainId,16)){t.next=27;break}if(c=Object(w.n)(w.g.EIP155,n)||{chainId:"0x".concat(n.toString(16)),displayName:"Unknown Network"},(o=null===(r=this.adapterOptions.adapterSettings)||void 0===r?void 0:r.qrcodeModal)&&(!o||null!==(a=this.adapterOptions)&&void 0!==a&&null!==(i=a.adapterSettings)&&void 0!==i&&i.skipNetworkSwitching)){t.next=27;break}return t.prev=10,t.next=13,this.addChain(this.chainConfig);case 13:return t.next=15,this.switchChain(c,this.chainConfig);case 15:this.connector=this.getWalletConnectInstance(),t.next=27;break;case 18:return t.prev=18,t.t0=t.catch(10),w.p.error("error while chain switching",t.t0),t.next=23,this.createNewSession({forceNewSession:!0});case 23:return this.emit(w.b.ERRORED,w.k.fromCode(5e3,"Not connected to correct network. Expected: ".concat(this.chainConfig.displayName,", Current: ").concat((null===c||void 0===c?void 0:c.displayName)||n,", Please switch to correct network from wallet"))),this.status=w.d.READY,this.rehydrated=!0,t.abrupt("return");case 27:return t.next=29,this.wcProvider.setupProvider(this.connector);case 29:this.subscribeEvents(this.connector),this.status=w.d.CONNECTED,this.emit(w.b.CONNECTED,{adapter:w.j.WALLET_CONNECT_V1,reconnected:this.rehydrated});case 32:case"end":return t.stop()}}),t,this,[[10,18]])})));return function(e){return t.apply(this,arguments)}}()},{key:"subscribeEvents",value:function(t){var e=this;t.on("session_update",function(){var t=Object(r.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&e.emit(w.b.ERRORED,n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getWalletConnectInstance",value:function(){var t=this.adapterOptions.adapterSettings||{};return t.bridge=t.bridge||"https://bridge.walletconnect.org",new v.a(t)}}]),n}(w.e)}}]);
//# sourceMappingURL=11.5d63944d.chunk.js.map
(this["webpackJsonppet-shop-react"]=this["webpackJsonppet-shop-react"]||[]).push([[23],{2230:function(t,e,n){"use strict";n.r(e),n.d(e,"MetamaskAdapter",(function(){return b}));var r=n(14),a=n(5),i=n(6),s=n(9),c=n(35),o=n(30),h=n(7),u=n(8),d=n(0),p=n.n(d),l=n(18),m=n.n(l),f=n(782),v=n.n(f),k=n(12),b=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),m()(Object(s.a)(t),"adapterNamespace",k.c.EIP155),m()(Object(s.a)(t),"currentChainNamespace",k.g.EIP155),m()(Object(s.a)(t),"type",k.a.EXTERNAL),m()(Object(s.a)(t),"name",k.j.METAMASK),m()(Object(s.a)(t),"status",k.d.NOT_READY),m()(Object(s.a)(t),"rehydrated",!1),m()(Object(s.a)(t),"metamaskProvider",null),t.chainConfig=r.chainConfig||null,t}return Object(i.a)(n,[{key:"provider",get:function(){return this.status===k.d.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null},set:function(t){throw new Error("Not implemented")}},{key:"init",value:function(){var t=Object(r.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(c.a)(Object(o.a)(n.prototype),"checkInitializationRequirements",this).call(this),t.next=3,v()({mustBeMetaMask:!0});case 3:if(this.metamaskProvider=t.sent,this.metamaskProvider){t.next=6;break}throw k.k.notInstalled("Metamask extension is not installed");case 6:if(this.status=k.d.READY,this.emit(k.b.READY,k.j.METAMASK),t.prev=8,!e.autoConnect){t.next=13;break}return this.rehydrated=!0,t.next=13,this.connect();case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),this.emit(k.b.ERRORED,t.t0);case 18:case"end":return t.stop()}}),t,this,[[8,15]])})));return function(e){return t.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(t){}},{key:"connect",value:function(){var t=Object(r.a)(p.a.mark((function t(){var e=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(c.a)(Object(o.a)(n.prototype),"checkConnectionRequirements",this).call(this),this.chainConfig||(this.chainConfig=Object(k.n)(k.g.EIP155,1)),this.status=k.d.CONNECTING,this.emit(k.b.CONNECTING,{adapter:k.j.METAMASK}),this.metamaskProvider){t.next=6;break}throw k.l.notConnectedError("Not able to connect with metamask");case 6:return t.prev=6,t.next=9,this.metamaskProvider.request({method:"eth_requestAccounts"});case 9:if(this.metamaskProvider.chainId===this.chainConfig.chainId){t.next=13;break}return t.next=13,this.switchChain(this.chainConfig);case 13:if(this.status=k.d.CONNECTED,this.provider){t.next=16;break}throw k.l.notConnectedError("Failed to connect with provider");case 16:return this.provider.once("disconnect",(function(){e.disconnect()})),this.emit(k.b.CONNECTED,{adapter:k.j.METAMASK,reconnected:this.rehydrated}),t.abrupt("return",this.provider);case 21:throw t.prev=21,t.t0=t.catch(6),this.status=k.d.READY,this.rehydrated=!1,this.emit(k.b.ERRORED,t.t0),k.l.connectionError("Failed to login with metamask wallet");case 27:case"end":return t.stop()}}),t,this,[[6,21]])})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=Object(r.a)(p.a.mark((function t(){var e,n,r=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.length>0&&void 0!==r[0]?r[0]:{cleanup:!1},this.status===k.d.CONNECTED){t.next=3;break}throw k.l.disconnectionError("Not connected with wallet");case 3:null===(e=this.provider)||void 0===e||e.removeAllListeners(),n.cleanup?(this.status=k.d.NOT_READY,this.metamaskProvider=null):this.status=k.d.READY,this.rehydrated=!1,this.emit(k.b.DISCONNECTED);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=Object(r.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.status===k.d.CONNECTED){t.next=2;break}throw k.l.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=Object(r.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.metamaskProvider){t.next=2;break}throw k.l.notConnectedError("Not connected with wallet");case 2:return t.prev=2,t.next=5,this.metamaskProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:e.chainId}]});case 5:case 12:t.next=15;break;case 7:if(t.prev=7,t.t0=t.catch(2),4902!==t.t0.code){t.next=14;break}return t.next=12,this.metamaskProvider.request({method:"wallet_addEthereumChain",params:[{chainId:e.chainId,chainName:e.displayName,rpcUrls:[e.rpcTarget]}]});case 14:throw t.t0;case 15:case"end":return t.stop()}}),t,this,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()}]),n}(k.e)}}]);
//# sourceMappingURL=23.78976022.chunk.js.map
webpackJsonp([0],{"+ptz":function(t,n,e){"use strict";var i=function(){var t=this.$createElement,n=this._self._c||t;return n("section",[n("div",[this._v("hello world")]),this._v("\n    "+this._s(this.interm)+this._s(this.transcript)+"\n\t")])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};n.a=s},"/TYz":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Jb6F"),s=e("+ptz"),r=e("VU/8")(i.a,s.a,!1,null,null,null);r.options.__file="pages/index.vue",n.default=r.exports},Jb6F:function(t,n,e){"use strict";n.a={data:function(){return{recognition:null,interm:"",transcript:[]}},mounted:function(){"webkitSpeechRecognition"in window||"SpeechRecognition"in window||console.log("이 브라우저는 speech to text를 지원하지 않음");var t=new(window.webkitSpeechRecognition||window.SpeechRecognition);t.continuous=!0,t.interimResults=!0,t.lang="ko-KR",t.start();var n=this;t.onresult=function(t){for(var e="",i=t.resultIndex;i<t.results.length;++i)t.results[i].isFinal?n.transcript.push(t.results[i][0].transcript):e+=t.results[i][0].transcript;n.interm=e}}}}});
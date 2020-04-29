(function(n){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(n[r]=l[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,s=1;s<t.length;s++){var l=t[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("style-reader")],1)},o=[],i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"styleInTag",domProps:{innerHTML:n._s(n.currentStyleInTag)}}),t("div",{ref:"styleReader",staticClass:"styleReader"},[t("pre",{domProps:{innerHTML:n._s(n.currentStyle)}})]),t("div",{staticClass:"graph"})])},s=[],l=(t("96cf"),t("1da1")),c=t("c197"),u=t.n(c),d="\n/*\n* Inspired by http://strml.net/\n* Hello，我是QYW\n* 接下来让我们动起来，dangdangdang！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: #657b83;\n  background: #fdf6e3;\n}\n\n/* 文字离边框太近了 */\n.styleReader {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw;\n  height: 90vh;\n}\n\n/* 适配一下移动端 */\n@media (max-width: 700px) {\n  .styleReader {\n    width: 90vw;\n    height: 50vh;\n  }\n}\n\n/* 代码高亮 */\n.token.selector{ color: #2aa198; }\n.token.property{ color: #268bd2; }\n.token.punctuation{ color: #586e75; }\n.token.function{ color: #b58900; }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleReader {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n  transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我把 div 变成一个八卦图\n * 注意看好了\n * 首先，把 div 变成一个圆\n **/\n.graph{\n  margin-left: 50px;\n  border-radius: 50%;\n  box-shadow: 0 0 3px rgba(0,0,0,0.5);\n  border: none;\n  width: 250px;\n  height: 250px;\n}\n\n/* 八卦是阴阳形成的\n * 一黑一白\n **/\n.graph{\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/* 加两个神秘的小球 */\n.graph::before{\n  position: relative;\n  display: block;\n  content: '';\n  width: 125px;\n  height: 125px;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #000;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n\n.graph::after{\n  position: relative;\n  display: block;\n  content: '';\n  width: 125px;\n  height: 125px;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n}\n",p=(t("d3b7"),t("d4ec")),f=t("bee2"),g=function(){function n(e,t){Object(p["a"])(this,n),this.text=e||"",this.interval=t||50,this.length=e.length,this.index=0}return Object(f["a"])(n,[{key:"isEnd",value:function(){return this.index>=this.length}},{key:"readNext",value:function(n,e){var t=this;setTimeout((function(){t.index+=1;var r=t.text.substr(0,t.index);n(r),t.isEnd()?(console.log("end read"),e()):t.readNext(n,e)}),this.interval)}},{key:"read",value:function(n){var e=this;return console.log("start read"),new Promise((function(t){e.readNext(n,t)}))}}]),n}(),h=g,b={name:"StyleReader",data:function(){return{currentStyle:"",currentStyleInTag:"",reader:new h(d,1)}},created:function(){console.log("StyleReader created"),this.makeResume()},methods:{makeResume:function(){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.progressivelyShowStyle();case 2:case"end":return e.stop()}}),e)})))()},progressivelyShowStyle:function(){var n=this;return this.reader.read((function(e){n.currentStyle=u.a.highlight(e,u.a.languages.css),n.currentStyleInTag="<style>".concat(e,"</style>"),n.goBottom()}))},goBottom:function(){this.$refs.styleReader&&(this.$refs.styleReader.scrollTop=1e5)}}},v=b,y=(t("d580"),t("2877")),m=Object(y["a"])(v,i,s,!1,null,"ca413c60",null),x=m.exports,w=(t("fbb7"),{name:"App",components:{StyleReader:x}}),k=w,S=Object(y["a"])(k,a,o,!1,null,null,null),O=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(O)}}).$mount("#app")},"7eca":function(n,e,t){},d580:function(n,e,t){"use strict";var r=t("7eca"),a=t.n(r);a.a},fbb7:function(n,e,t){}});
//# sourceMappingURL=app.64a918ee.js.map
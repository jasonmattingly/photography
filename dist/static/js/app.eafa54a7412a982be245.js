webpackJsonp([0],{"00qE":function(t,e,n){t.exports=n.p+"static/img/sample-2.5a77348.jpg"},"7nyY":function(t,e,n){var i={"./sample-1.jpg":"LUGA","./sample-2.jpg":"X3ld"};function r(t){return n(o(t))}function o(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="7nyY"},Ahr4:function(t,e){t.exports=[{id:0,title:"Jasons first pic",filename:"sample-1.jpg",location:"Dark side of the moon",description:"It's a picture"},{id:1,title:"Jasons second Pic",filename:"sample-2.jpg",location:"Light side of the moon",description:"Good stuff"}]},Ie8F:function(t,e){},LUGA:function(t,e,n){t.exports=n.p+"static/img/sample-1.dbdabea.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},o=n("VU/8")(null,r,!1,null,null,null).exports,s=n("/ocq"),a=n("Ahr4"),l=n.n(a),c={name:"Gallery",data:function(){return{photos:l.a}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gallery"},[t._l(t.photos,function(t){return i("div",{key:t.id,staticClass:"gallery-panel"},[i("router-link",{attrs:{to:"/photo/"+t.id}},[i("img",{attrs:{src:n("a4nI")("./"+t.filename)}})])],1)}),t._v(" "),t._l(t.photos,function(t){return i("div",{key:t.id,staticClass:"gallery-panel"},[i("router-link",{attrs:{to:"/photo/"+t.id}},[i("img",{attrs:{src:n("a4nI")("./"+t.filename)}})])],1)}),t._v(" "),t._l(t.photos,function(t){return i("div",{key:t.id,staticClass:"gallery-panel"},[i("router-link",{attrs:{to:"/photo/"+t.id}},[i("img",{attrs:{src:n("a4nI")("./"+t.filename)}})])],1)}),t._v(" "),t._l(t.photos,function(t){return i("div",{key:t.id,staticClass:"gallery-panel"},[i("router-link",{attrs:{to:"/photo/"+t.id}},[i("img",{attrs:{src:n("a4nI")("./"+t.filename)}})])],1)}),t._v(" "),t._l(t.photos,function(t){return i("div",{key:t.id,staticClass:"gallery-panel"},[i("router-link",{attrs:{to:"/photo/"+t.id}},[i("img",{attrs:{src:n("a4nI")("./"+t.filename)}})])],1)})],2)},staticRenderFns:[]};var p=n("VU/8")(c,u,!1,function(t){n("zM5m")},null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"menu"},[e("li",[this._v("first thing")]),this._v(" "),e("li",[this._v("second thing")]),this._v(" "),e("li",[this._v("third thing")])])}]};var d=n("VU/8")(null,f,!1,function(t){n("YR9N")},null,null).exports,h={name:"home",components:{Gallery:p,Sidebar:d}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Sidebar"),this._v(" "),e("Gallery")],1)},staticRenderFns:[]},v=n("VU/8")(h,m,!1,null,null,null).exports,g={name:"Photo",data:function(){return{photos:l.a}},methods:{closeLightbox:function(){this.$router.push("/")}},computed:{photo:function(){var t=this;return this.photos.find(function(e){return e.id===Number(t.$route.params.id)})}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lightbox",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeLightbox(e)}}},[i("img",{attrs:{src:n("7nyY")("./"+t.photo.filename)}}),t._v(" "),i("div",{staticClass:"lightbox-info"},[i("div",{staticClass:"lightbox-info-inner"},[i("p",[t._v(t._s(t.photo.title))])])])])},staticRenderFns:[]};var y={name:"photo",components:{Gallery:p,Photo:n("VU/8")(g,_,!1,function(t){n("Ie8F")},null,null).exports,Sidebar:d}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Sidebar"),this._v(" "),e("Gallery"),this._v(" "),e("Photo")],1)},staticRenderFns:[]},b=n("VU/8")(y,x,!1,null,null,null).exports;i.a.use(s.a);var k=new s.a({routes:[{path:"/",name:"HomePage",component:v},{path:"/photo/:id",name:"Photo",component:b}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:k,components:{App:o},template:"<App/>"})},OARF:function(t,e,n){t.exports=n.p+"static/img/sample-1.16748a3.jpg"},X3ld:function(t,e,n){t.exports=n.p+"static/img/sample-2.bcfc9fa.jpg"},YR9N:function(t,e){},a4nI:function(t,e,n){var i={"./sample-1.jpg":"OARF","./sample-2.jpg":"00qE"};function r(t){return n(o(t))}function o(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="a4nI"},zM5m:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eafa54a7412a982be245.js.map
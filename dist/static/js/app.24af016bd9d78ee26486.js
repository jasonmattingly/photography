webpackJsonp([0],{"00qE":function(t,e,n){t.exports=n.p+"static/img/sample-2.5a77348.jpg"},"7nyY":function(t,e,n){var o={"./sample-1.jpg":"LUGA","./sample-2.jpg":"X3ld"};function r(t){return n(i(t))}function i(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="7nyY"},Ahr4:function(t,e){t.exports=[{id:0,title:"Jasons first pic",filename:"sample-1.jpg",location:"Dark side of the moon",description:"It's a picture"},{id:1,title:"Jasons second Pic",filename:"sample-2.jpg",location:"Light side of the moon",description:"Good stuff"}]},Ie8F:function(t,e){},LUGA:function(t,e,n){t.exports=n.p+"static/img/sample-1.dbdabea.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null).exports,s=n("/ocq"),a=n("Ahr4"),l=n.n(a),c={name:"Gallery",data:function(){return{photos:l.a}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallery"},this._l(this.photos,function(t){return e("div",{key:t.id,staticClass:"gallery-panel"},[e("router-link",{attrs:{to:"/photo/"+t.id}},[e("img",{attrs:{src:n("a4nI")("./"+t.filename)}})])],1)}),0)},staticRenderFns:[]};var p=n("VU/8")(c,u,!1,function(t){n("UfOI")},null,null).exports,f={name:"home",components:{Gallery:p}},d={render:function(){var t=this.$createElement;return(this._self._c||t)("Gallery")},staticRenderFns:[]},m=n("VU/8")(f,d,!1,null,null,null).exports,h={name:"Photo",data:function(){return{photos:l.a}},methods:{closeLightbox:function(){this.$router.push("/")}},computed:{photo:function(){var t=this;return this.photos.find(function(e){return e.id===Number(t.$route.params.id)})}}},g={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lightbox",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeLightbox(e)}}},[o("img",{attrs:{src:n("7nyY")("./"+t.photo.filename)}}),t._v(" "),o("div",{staticClass:"lightbox-info"},[o("div",{staticClass:"lightbox-info-inner"},[o("p",[t._v(t._s(t.photo.title))])])])])},staticRenderFns:[]};var v={name:"photo",components:{Gallery:p,Photo:n("VU/8")(h,g,!1,function(t){n("Ie8F")},null,null).exports}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Gallery"),this._v(" "),e("Photo")],1)},staticRenderFns:[]},_=n("VU/8")(v,x,!1,null,null,null).exports;o.a.use(s.a);var y=new s.a({routes:[{path:"/",name:"HomePage",component:m},{path:"/photo/:id",name:"Photo",component:_}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:y,components:{App:i},template:"<App/>"})},OARF:function(t,e,n){t.exports=n.p+"static/img/sample-1.16748a3.jpg"},UfOI:function(t,e){},X3ld:function(t,e,n){t.exports=n.p+"static/img/sample-2.bcfc9fa.jpg"},a4nI:function(t,e,n){var o={"./sample-1.jpg":"OARF","./sample-2.jpg":"00qE"};function r(t){return n(i(t))}function i(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="a4nI"}},["NHnr"]);
//# sourceMappingURL=app.24af016bd9d78ee26486.js.map
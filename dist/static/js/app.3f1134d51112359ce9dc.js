webpackJsonp([0],{"00qE":function(t,e,n){t.exports=n.p+"static/img/sample-2.5a77348.jpg"},"7nyY":function(t,e,n){var r={"./sample-1.jpg":"LUGA","./sample-2.jpg":"X3ld"};function i(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="7nyY"},Ahr4:function(t,e){t.exports=[{id:0,title:"Jasons first pic",filename:"sample-1.jpg",location:"Dark side of the moon",description:"It's a picture",gallery_name:"south_africa_2019, other_gallery"},{id:1,title:"Jasons second Pic",filename:"sample-2.jpg",location:"Light side of the moon",description:"Good stuff",gallery_name:"other_gallery"}]},Ie8F:function(t,e){},LUGA:function(t,e,n){t.exports=n.p+"static/img/sample-1.dbdabea.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},o=n("VU/8")(null,i,!1,null,null,null).exports,s=n("/ocq"),a=n("Ahr4"),l=n.n(a),c={name:"Gallery",data:function(){return{gallery_name:"south_africa_2019",photos:l.a}},computed:{selectedGalleryPhotos:function(){var t=this;return l.a.filter(function(e){return e.gallery_name.includes(t.gallery_name)})}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallery"},this._l(this.selectedGalleryPhotos,function(t){return e("div",{key:t.id,staticClass:"gallery-panel"},[e("router-link",{attrs:{to:"/photo/"+t.id}},[e("img",{attrs:{src:n("a4nI")("./"+t.filename)}})])],1)}),0)},staticRenderFns:[]};var p=n("VU/8")(c,u,!1,function(t){n("sE6t")},null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"menu"},[e("section",{staticClass:"link_container"},[e("a",{staticClass:"link",attrs:{href:"#"}},[e("div",[this._v("\n        J A S O N"),e("br"),this._v("M A T T I N G L Y\n      ")])])]),this._v(" "),e("div",{staticStyle:{"margin-left":"20px","font-family":"'Source Serif Pro'","font-size":".9em"}},[this._v("\n    South Africa 2019\n  ")])])}]};var h=n("VU/8")(null,f,!1,function(t){n("mC6p")},null,null).exports,m={name:"home",components:{Gallery:p,Sidebar:h}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Sidebar"),this._v(" "),e("Gallery")],1)},staticRenderFns:[]},_=n("VU/8")(m,d,!1,null,null,null).exports,v={name:"Photo",data:function(){return{photos:l.a}},methods:{closeLightbox:function(){this.$router.push("/")}},computed:{photo:function(){var t=this;return this.photos.find(function(e){return e.id===Number(t.$route.params.id)})}}},g={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lightbox",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeLightbox(e)}}},[r("img",{attrs:{src:n("7nyY")("./"+t.photo.filename)}}),t._v(" "),r("div",{staticClass:"lightbox-info"},[r("div",{staticClass:"lightbox-info-inner"},[r("p",[t._v(t._s(t.photo.title))])])])])},staticRenderFns:[]};var y={name:"photo",components:{Gallery:p,Photo:n("VU/8")(v,g,!1,function(t){n("Ie8F")},null,null).exports,Sidebar:h}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Sidebar"),this._v(" "),e("Gallery"),this._v(" "),e("Photo")],1)},staticRenderFns:[]},b=n("VU/8")(y,x,!1,null,null,null).exports;r.a.use(s.a);var j=new s.a({routes:[{path:"/",name:"HomePage",component:_},{path:"/photo/:id",name:"Photo",component:b}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:j,components:{App:o},template:"<App/>"})},OARF:function(t,e,n){t.exports=n.p+"static/img/sample-1.16748a3.jpg"},X3ld:function(t,e,n){t.exports=n.p+"static/img/sample-2.bcfc9fa.jpg"},a4nI:function(t,e,n){var r={"./sample-1.jpg":"OARF","./sample-2.jpg":"00qE"};function i(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="a4nI"},mC6p:function(t,e){},sE6t:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3f1134d51112359ce9dc.js.map
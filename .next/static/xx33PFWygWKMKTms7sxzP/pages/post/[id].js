(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{LxqN:function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),o=e.n(r),u=e("O40h"),c=e("q1tI"),a=e.n(c),s=(e("nOHt"),e("5Yp1")),i=e("vcXL"),p=e.n(i),f=a.a.createElement,l=function(n){return f(a.a.Fragment,null,f("h1",null,n.show.name),f("p",null,n.show.summary.replace(/<[\/]?[pb]>/g,"")),f("img",{src:n.show.image.medium}))},h=function(n){return f(s.a,null,f(l,{show:n.show}))};h.getInitialProps=function(){var n=Object(u.a)(o.a.mark(function n(t){var e,r,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query.id,console.log(t),n.next=4,p()("https://api.tvmaze.com/shows/".concat(e));case 4:return r=n.sent,n.next=7,r.json();case 7:return u=n.sent,console.log("Fetched show: ".concat(u.name)),n.abrupt("return",{show:u});case 10:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),t.default=h},O40h:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var r=e("eVuF"),o=e.n(r);function u(n,t,e,r,u,c,a){try{var s=n[c](a),i=s.value}catch(p){return void e(p)}s.done?t(i):o.a.resolve(i).then(r,u)}function c(n){return function(){var t=this,e=arguments;return new o.a(function(r,o){var c=n.apply(t,e);function a(n){u(c,r,o,a,s,"next",n)}function s(n){u(c,r,o,a,s,"throw",n)}a(void 0)})}}},vcXL:function(n,t,e){"use strict";var r=self.fetch.bind(self);n.exports=r,n.exports.default=n.exports},yiTp:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[id]",function(){return e("LxqN")}])}},[["yiTp",0,1]]]);
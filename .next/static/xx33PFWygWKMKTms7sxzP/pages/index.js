(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{O40h:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var r=e("eVuF"),o=e.n(r);function u(n,t,e,r,u,a,c){try{var s=n[a](c),i=s.value}catch(f){return void e(f)}s.done?t(i):o.a.resolve(i).then(r,u)}function a(n){return function(){var t=this,e=arguments;return new o.a(function(r,o){var a=n.apply(t,e);function c(n){u(a,r,o,c,s,"next",n)}function s(n){u(a,r,o,c,s,"throw",n)}c(void 0)})}}},RNiq:function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),o=e.n(r),u=e("O40h"),a=e("q1tI"),c=e.n(a),s=e("YFqc"),i=e.n(s),f=e("5Yp1"),h=e("vcXL"),l=e.n(h),p=c.a.createElement,w=function(n){return p("li",{key:n.show.id},p(i.a,{href:"/post/[id]",as:"/post/".concat(n.show.id)},p("a",null,n.show.name)))},d=function(n){return p(f.a,null,p("h1",null,"My Blog"),p("ul",null,n.shows.map(function(n){return p(w,{key:n.id,show:n})})))};d.getInitialProps=Object(u.a)(o.a.mark(function n(){var t,e;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l()("https://api.tvmaze.com/search/shows?q=batman");case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,console.log("Show data fetched. Count: ".concat(e.length)),n.abrupt("return",{shows:e.map(function(n){return n.show})});case 8:case"end":return n.stop()}},n)})),t.default=d},vcXL:function(n,t,e){"use strict";var r=self.fetch.bind(self);n.exports=r,n.exports.default=n.exports},vlRD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",0,1]]]);
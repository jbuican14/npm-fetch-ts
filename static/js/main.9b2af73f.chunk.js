(this["webpackJsonpredux-ts"]=this["webpackJsonpredux-ts"]||[]).push([[0],{28:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"searchRepositories",(function(){return g}));var a,c=r(0),s=r.n(c),o=r(5),i=r.n(o),u=(r(28),r(4)),l=r(3),d=r(20);!function(e){e.SEARCH_REPOSITORIES="search_repositories",e.SEARCH_REPOSITORIES_SUCCESS="search_repositories_success",e.SEARCH_REPOSITORIES_ERROR="search_repositories_error"}(a||(a={}));var O={loading:!1,error:null,data:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SEARCH_REPOSITORIES:return{loading:!0,error:null,data:[]};case a.SEARCH_REPOSITORIES_SUCCESS:return{loading:!1,error:null,data:t.payload};case a.SEARCH_REPOSITORIES_ERROR:return{loading:!1,error:t.payload,data:[]};default:return e}},j=Object(l.c)({repositories:S}),h=Object(l.d)(j,{},Object(l.a)(d.a)),R=r(9),p=r.n(R),E=r(21),b=r(22),f=r.n(b),g=function(e){return function(){var t=Object(E.a)(p.a.mark((function t(r){var n,c,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:a.SEARCH_REPOSITORIES}),t.prev=1,t.next=4,f.a.get("https://registry.npmjs.org/-/v1/search",{params:{text:e}});case 4:n=t.sent,c=n.data,s=c.objects.map((function(e){return e.package.name})),r({type:a.SEARCH_REPOSITORIES_SUCCESS,payload:s}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),r({type:a.SEARCH_REPOSITORIES_ERROR,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},v=r(23),x=u.c,_=r(1),I=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),r=t[0],a=t[1],s=function(){var e=Object(u.b)();return Object(l.b)(n,e)}().searchRepositories,o=x((function(e){return e.repositories})),i=o.data,d=o.error,O=o.loading,S=x((function(e){return e}));console.log("dataR::",S);return Object(_.jsxs)("div",{children:[Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(r)},children:[Object(_.jsx)("input",{value:r,onChange:function(e){return a(e.target.value)}}),Object(_.jsx)("button",{children:"Search"})]}),d&&Object(_.jsx)("h3",{children:d}),O&&Object(_.jsx)("h3",{children:"Loading ..."}),!d&&!O&&i.map((function(e){return Object(_.jsxs)("div",{className:"result",children:[Object(_.jsx)("i",{className:"fas fa-chevron-right"})," ",Object(_.jsx)("a",{href:"https://www.npmjs.com/package/".concat(e),target:"_blank",rel:"noreferrer",children:e})]},e)}))]})};var C=function(){return Object(_.jsx)(u.a,{store:h,children:Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Search For a Package"}),Object(_.jsx)(I,{})]})})},m=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,58)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};i.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(C,{})}),document.getElementById("root")),m()}},[[57,1,2]]]);
//# sourceMappingURL=main.9b2af73f.chunk.js.map
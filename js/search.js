(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{664:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,"/* logo blue */\n/* well background color */\n/* alert info background color */\n/* alert info border color */\n.toolbar {\n  padding-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .toolbar .pagination-container {\n    display: flex;\n    align-items: center; }\n    .toolbar .pagination-container .card-list-switcher {\n      margin-right: 24px; }\n\n.header {\n  border-bottom: 1px solid #d8d8d8; }\n\n.collection-container {\n  min-height: calc(100vh - 285px); }\n  @media (min-width: 1000px) {\n    .collection-container {\n      display: flex; } }\n  .collection-container .sidebar {\n    margin-left: -24px;\n    margin-top: -24px;\n    background-color: white;\n    min-width: 190px;\n    padding: 24px;\n    padding-top: 24px; }\n    @media (max-width: 1000px) {\n      .collection-container .sidebar {\n        margin-bottom: 24px;\n        margin-right: -24px; } }\n  .collection-container .cards {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start; }\n    .collection-container .cards .card {\n      margin-left: 24px;\n      margin-bottom: 24px; }\n  .collection-container .list-container {\n    width: 100%; }\n  .collection-container .list {\n    margin-bottom: 24px;\n    margin-left: 24px;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    overflow: hidden; }\n    .collection-container .list .data-list {\n      margin-top: -17px;\n      margin-bottom: -17px; }\n  .collection-container .empty {\n    flex-grow: 1; }\n\n.footer {\n  border-top: 1px solid #d8d8d8;\n  margin: 0px -24px -24px -24px; }\n",""])},676:function(e,t,n){var a=n(664);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(8)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(664,(function(){var t=n(664);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},691:function(e,t,n){"use strict";n.r(t);var a,r=n(2),o=(n(676),n(460)),i=n(46),c=n(304),l=n(306),s=n(130),p=n(305),u=n(104),d=n(297),m=n(192),f=n(258),g=n(39),h=n(12),y=n(30),b=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),E=function(){return(E=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},x=function(e){function t(t){var n=e.call(this,t)||this,a=h.a.parseParamString(t.location.search,["page","page_size"]);return a.page_size||(a.page_size=y.a.CARD_DEFAULT_PAGE_SIZE),a.view_type||(a.view_type=localStorage.getItem(y.a.SEARCH_VIEW_TYPE_LOCAL_KEY)),n.state={collections:[],params:a,numberOfResults:0,loading:!0},n.tags=["cloud","linux","network","storage","security","windows","infrastructure","monitoring","tools","database","application"],n}return b(t,e),t.prototype.componentDidMount=function(){this.queryCollections()},t.prototype.render=function(){var e=this,t=this.state,n=t.collections,a=t.params,o=t.numberOfResults;t.loading;return r.createElement(r.Fragment,null,r.createElement(f.d,{className:"header",title:"Collections"},r.createElement("div",{className:"toolbar"},r.createElement(f.I,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},searchPlaceholder:"Search collections"}),r.createElement("div",{className:"pagination-container"},r.createElement("div",{className:"card-list-switcher"},r.createElement(f.f,{size:"sm",params:a,updateParams:function(t){return e.updateParams(t,(function(){return localStorage.setItem(y.a.SEARCH_VIEW_TYPE_LOCAL_KEY,e.state.params.view_type)}))}})),r.createElement(f.y,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:o,perPageOptions:y.a.CARD_DEFAULT_PAGINATION_OPTIONS,isTop:!0})))),r.createElement(f.t,null,r.createElement(i.Section,{className:"collection-container"},r.createElement("div",{className:"sidebar"},r.createElement(f.H,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},tags:this.tags})),this.renderCollections(n,a)),r.createElement(i.Section,{className:"body footer"},r.createElement(f.y,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},perPageOptions:y.a.CARD_DEFAULT_PAGINATION_OPTIONS,count:o}))))},t.prototype.renderCollections=function(e,t){return this.state.loading?r.createElement(f.q,null):0===e.length?this.renderEmpty():"list"===t.view_type?this.renderList(e):this.renderCards(e)},t.prototype.renderEmpty=function(){var e=this;return r.createElement(c.a,{className:"empty",variant:c.b.full},r.createElement(l.a,{icon:m.b}),r.createElement(s.a,{headingLevel:"h2",size:"lg"},"No results found"),r.createElement(p.a,null,"No results match the search criteria. Remove all filters to show results."),r.createElement(u.a,{variant:"link",onClick:function(){return e.updateParams({},(function(){return e.queryCollections()}))}},"Clear search"))},t.prototype.renderCards=function(e){return r.createElement("div",{className:"cards"},e.map((function(e){return r.createElement(f.g,E({className:"card",key:e.id},e))})))},t.prototype.renderList=function(e){return r.createElement("div",{className:"list-container"},r.createElement("div",{className:"list"},r.createElement(d.a,{className:"data-list","aria-label":"List of Collections"},e.map((function(e){return r.createElement(f.l,E({showNamespace:!0,key:e.id},e))})))))},t.prototype.queryCollections=function(){var e=this;this.setState({loading:!0},(function(){g.b.list(E(E({},h.a.getReduced(e.state.params,["view_type"])),{deprecated:!1,certification:g.a.certified})).then((function(t){e.setState({collections:t.data.data,numberOfResults:t.data.meta.count,loading:!1})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return h.a.updateParamsMixin()},enumerable:!0,configurable:!0}),t}(r.Component);t.default=Object(o.a)(x)}}]);
//# sourceMappingURL=search.js.map
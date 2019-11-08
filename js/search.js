(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{658:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,"/* logo blue */\n/* well background color */\n/* alert info background color */\n/* alert info border color */\n.toolbar {\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.header {\n  border-bottom: 1px solid #d8d8d8; }\n\n.collection-container {\n  min-height: calc(100vh - 285px); }\n  @media (min-width: 1000px) {\n    .collection-container {\n      display: flex; } }\n  .collection-container .sidebar {\n    margin-left: -24px;\n    margin-top: -24px;\n    background-color: white;\n    min-width: 190px;\n    padding: 16px;\n    padding-top: 24px; }\n  .collection-container .cards {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start; }\n    .collection-container .cards .card {\n      margin-left: 24px;\n      margin-bottom: 24px; }\n  .collection-container .list-container {\n    width: 100%; }\n  .collection-container .list {\n    margin-bottom: 24px;\n    margin-left: 24px;\n    overflow: hidden; }\n    .collection-container .list .data-list {\n      margin-top: -17px;\n      margin-bottom: -17px; }\n  .collection-container .empty {\n    flex-grow: 1; }\n\n.footer {\n  border-top: 1px solid #d8d8d8;\n  margin: 0px -24px -24px -24px; }\n",""])},668:function(e,t,n){var r=n(658);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(8)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(658,(function(){var t=n(658);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},680:function(e,t,n){"use strict";n.r(t);var r,a=n(2),o=(n(668),n(455)),i=n(41),c=n(289),l=n(291),s=n(131),u=n(290),p=n(282),d=n(231),m=n(253),f=n(61),g=n(14),y=n(85),h=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},E=function(e){function t(t){var n=e.call(this,t)||this,r=g.a.parseParamString(t.location.search,["page","page_size"]);return r.view_type||(r.view_type=localStorage.getItem(y.a.SEARCH_VIEW_TYPE_LOCAL_KEY)),n.state={collections:[],params:r,numberOfResults:0,loading:!0},n.tags=["cloud","linux","network","storage","security","windows","infrastructure","monitoring","tools","database","application"],n}return h(t,e),t.prototype.componentDidMount=function(){this.queryCollections()},t.prototype.render=function(){var e=this,t=this.state,n=t.collections,r=t.params,o=t.numberOfResults;t.loading;return a.createElement(a.Fragment,null,a.createElement(m.b,{className:"header",title:"Collections",pageControls:a.createElement(m.d,{size:"sm",params:r,updateParams:function(t){return e.updateParams(t,(function(){return localStorage.setItem(y.a.SEARCH_VIEW_TYPE_LOCAL_KEY,e.state.params.view_type)}))}})},a.createElement("div",{className:"toolbar"},a.createElement(m.D,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},searchPlaceholder:"Search collections"}),a.createElement(m.t,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:o,isTop:!0}))),a.createElement(i.Main,null,a.createElement(i.Section,{className:"collection-container"},a.createElement("div",{className:"sidebar"},a.createElement(m.C,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},tags:this.tags})),this.renderCollections(n,r)),a.createElement(i.Section,{className:"body footer"},a.createElement(m.t,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:o}))))},t.prototype.renderCollections=function(e,t){return this.state.loading?a.createElement(m.n,null):0===e.length?this.renderEmpty():"list"===t.view_type?this.renderList(e):this.renderCards(e)},t.prototype.renderEmpty=function(){return a.createElement(c.a,{className:"empty",variant:c.b.full},a.createElement(l.a,{icon:d.b}),a.createElement(s.a,{headingLevel:"h2",size:"lg"},"No matches"),a.createElement(u.a,null,"Please try adjusting your search query"))},t.prototype.renderCards=function(e){return a.createElement("div",{className:"cards"},e.map((function(e){return a.createElement(m.e,b({className:"card",key:e.id},e))})))},t.prototype.renderList=function(e){return a.createElement("div",{className:"list-container"},a.createElement("div",{className:"body list"},a.createElement(p.a,{className:"data-list","aria-label":"List of Collections"},e.map((function(e){return a.createElement(m.j,b({showNamespace:!0,key:e.id},e))})))))},t.prototype.queryCollections=function(){var e=this;this.setState({loading:!0},(function(){f.b.list(b(b({},g.a.getReduced(e.state.params,["view_type"])),{certification:f.a.certified})).then((function(t){e.setState({collections:t.data.data,numberOfResults:t.data.meta.count,loading:!1})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return g.a.updateParamsMixin()},enumerable:!0,configurable:!0}),t}(a.Component);t.default=Object(o.a)(E)}}]);
//# sourceMappingURL=search.js.map
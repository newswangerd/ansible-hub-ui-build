(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{639:function(t,e,o){(t.exports=o(7)(!1)).push([t.i,"/* logo blue */\n/* well background color */\n/* alert info background color */\n/* alert info border color */\n.page-container {\n  display: flex; }\n  .page-container .import-list {\n    width: 400px; }\n  .page-container .import-console {\n    flex-grow: 1;\n    margin-left: 10px; }\n",""])},648:function(t,e,o){var r=o(639);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},n=o(8)(r,a);r.locals&&(t.exports=r.locals),t.hot.accept(639,function(){var e=o(639);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var o,r=0;for(o in t){if(!e||t[o]!==e[o])return!1;r++}for(o in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(e)}),t.hot.dispose(function(){n()})},659:function(t,e,o){"use strict";o.r(e);var r,a=o(2),n=(o(648),o(433)),s=o(38),i=o(66),c=o(216),l=o(67),p=o(14),m=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),u=function(){return(u=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var a in e=arguments[o])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},f=function(t){function e(e){var o=t.call(this,e)||this,r=p.a.parseParamString(e.location.search,["page","page_size"]);return o.topOfPage=a.createRef(),o.state={selectedImport:void 0,importList:[],params:r,namespaces:[],selectedImportDetails:void 0,resultsCount:0,noImportsExist:!1,importDetailError:"",followLogs:!1},o}return m(e,t),e.prototype.componentDidMount=function(){var t=this;this.loadNamespaces(function(){return t.loadImportList(function(){return t.loadTaskDetails()})})},e.prototype.componentWillUnmount=function(){clearInterval(this.polling)},e.prototype.render=function(){var t=this,e=this.state,o=e.selectedImport,r=e.importList,n=e.params,i=e.namespaces,l=e.selectedImportDetails,p=e.resultsCount,m=e.noImportsExist,u=e.importDetailError,f=e.followLogs;return r?a.createElement(a.Fragment,null,a.createElement("div",{ref:this.topOfPage}),a.createElement(c.a,{title:"My Imports"}),a.createElement(s.Main,null,a.createElement(s.Section,{className:"body"},a.createElement("div",{className:"page-container"},a.createElement("div",{className:"import-list"},a.createElement(c.k,{importList:r,selectedImport:o,noImportsExist:m,numberOfResults:p,params:n,namespaces:i,selectImport:function(e){return t.selectImport(e)},updateParams:function(e){t.updateParams(e,function(){return t.loadImportList(function(){return t.loadTaskDetails()})})}})),a.createElement("div",{className:"import-console"},a.createElement(c.j,{task:l,followMessages:f,setFollowMessages:function(e){t.setState({followLogs:e})},selectedImport:o,apiError:u})))))):null},Object.defineProperty(e.prototype,"updateParams",{get:function(){return p.a.updateParamsMixin()},enumerable:!0,configurable:!0}),e.prototype.selectImport=function(t){var e=this;this.setState({selectedImport:t},function(){e.topOfPage.current.scrollIntoView({behavior:"smooth"}),e.loadTaskDetails()})},e.prototype.poll=function(){var t=this;this.loadTaskDetails(function(){var e=t.state,o=e.selectedImport,r=e.selectedImportDetails,a=e.importList;if(r&&o.state!==r.state){var n=a.findIndex(function(t){return t.id===o.id}),s=Object(i.cloneDeep)(a),c=Object(i.cloneDeep)(o);c.state=r.state,c.finished_at=r.finished_at,s[n]=c,t.setState({selectedImport:c,importList:s})}})},e.prototype.loadNamespaces=function(t){var e=this;l.c.list({page_size:1e3}).then(function(o){var r,a=o.data.data;e.state.params.namespace&&(r=a.find(function(t){return t.name===e.state.params.namespace})),r||(r=a[0]),e.setState({namespaces:a,params:u({},e.state.params,{namespace:r.name})},t)}).catch(function(t){return console.log(t)})},e.prototype.loadImportList=function(t){var e=this;l.b.list(this.state.params).then(function(o){e.setState({importList:o.data.data,selectedImport:o.data.data[0],resultsCount:o.data.meta.count},t)}).catch(function(t){return console.log(t)})},e.prototype.loadTaskDetails=function(t){var e=this;this.state.selectedImport?l.b.get(this.state.selectedImport.id).then(function(o){e.setState({importDetailError:"",noImportsExist:!1,selectedImportDetails:o.data},t)}).catch(function(t){e.setState({selectedImportDetails:void 0,importDetailError:"Error fetching import from API"})}):this.setState({importDetailError:"No Data",noImportsExist:!0})},e}(a.Component);e.default=Object(n.a)(f)}}]);
//# sourceMappingURL=my_imports.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{797:function(t,e,o){(t.exports=o(9)(!1)).push([t.i,".page-container{display:flex}.page-container .import-list{width:400px}.page-container .import-console{flex-grow:1;margin-left:10px}\n",""])},810:function(t,e,o){var a=o(797);"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},r=o(10)(a,n);a.locals&&(t.exports=a.locals),t.hot.accept(797,(function(){var e=o(797);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var o,a=0;for(o in t){if(!e||t[o]!==e[o])return!1;a++}for(o in e)a--;return 0===a}(a.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(e)})),t.hot.dispose((function(){r()}))},825:function(t,e,o){"use strict";o.r(e);var a,n=o(0),r=(o(810),o(408)),s=o(45),i=o(65),l=o(230),p=o(32),c=o(16),m=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),d=function(){return(d=Object.assign||function(t){for(var e,o=1,a=arguments.length;o<a;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},u=function(t){function e(e){var o=t.call(this,e)||this,a=c.a.parseParamString(e.location.search,["page","page_size"]);return o.topOfPage=n.createRef(),o.state={selectedImport:void 0,importList:[],params:a,namespaces:[],selectedImportDetails:void 0,resultsCount:0,importDetailError:"",followLogs:!1,loadingImports:!0,loadingImportDetails:!0,selectedCollectionVersion:void 0},o}return m(e,t),e.prototype.componentDidMount=function(){var t=this;this.loadNamespaces((function(){return t.loadImportList((function(){return t.loadTaskDetails()}))})),this.polling=setInterval((function(){!t.state.selectedImportDetails||t.state.selectedImportDetails.state!==p.k.running&&t.state.selectedImportDetails.state!==p.k.waiting||t.poll()}),1e4)},e.prototype.componentWillUnmount=function(){clearInterval(this.polling)},e.prototype.render=function(){var t=this,e=this.state,o=e.selectedImport,a=e.importList,r=e.params,i=e.namespaces,p=e.selectedImportDetails,c=e.resultsCount,m=e.loadingImports,d=e.loadingImportDetails,u=e.importDetailError,f=e.followLogs,g=e.selectedCollectionVersion;return a?n.createElement(n.Fragment,null,n.createElement("div",{ref:this.topOfPage}),n.createElement(l.e,{title:"My imports"}),n.createElement(l.v,null,n.createElement(s.Section,{className:"body"},n.createElement("div",{className:"page-container"},n.createElement("div",{className:"import-list"},n.createElement(l.q,{importList:a,selectedImport:o,loading:m,numberOfResults:c,params:r,namespaces:i,selectImport:function(e){return t.selectImport(e)},updateParams:function(e){t.updateParams(e,(function(){return t.setState({loadingImports:!0,loadingImportDetails:!0},(function(){return t.loadImportList((function(){return t.loadTaskDetails()}))}))}))}})),n.createElement("div",{className:"import-console"},n.createElement(l.p,{loading:d,task:p,followMessages:f,setFollowMessages:function(e){t.setState({followLogs:e})},selectedImport:o,apiError:u,collectionVersion:g})))))):null},Object.defineProperty(e.prototype,"updateParams",{get:function(){return c.a.updateParamsMixin()},enumerable:!1,configurable:!0}),e.prototype.selectImport=function(t){var e=this;this.setState({selectedImport:t,loadingImportDetails:!0},(function(){e.topOfPage.current.scrollIntoView({behavior:"smooth"}),e.loadTaskDetails()}))},e.prototype.poll=function(){var t=this;this.loadTaskDetails((function(){var e=t.state,o=e.selectedImport,a=e.selectedImportDetails,n=e.importList;if(a&&o.state!==a.state){var r=n.findIndex((function(t){return t.id===o.id})),s=Object(i.cloneDeep)(n),l=Object(i.cloneDeep)(o);l.state=a.state,l.finished_at=a.finished_at,s[r]=l,t.setState({selectedImport:l,importList:s})}}))},e.prototype.loadNamespaces=function(t){var e=this;p.h.list({page_size:1e3}).then((function(o){var a,n=o.data.data;e.state.params.namespace&&(a=n.find((function(t){return t.name===e.state.params.namespace}))),a||(a=n[0]),e.setState({namespaces:n,params:d(d({},e.state.params),{namespace:a.name})},t)})).catch((function(t){return console.log(t)}))},e.prototype.loadImportList=function(t){var e=this;p.f.list(d(d({},this.state.params),{sort:"-created"})).then((function(o){e.setState({importList:o.data.data,selectedImport:o.data.data[0],resultsCount:o.data.meta.count,loadingImports:!1},t)})).catch((function(t){return console.log(t)}))},e.prototype.loadTaskDetails=function(t){var e=this;this.state.selectedImport?p.f.get(this.state.selectedImport.id).then((function(o){e.setState({importDetailError:"",loadingImportDetails:!1,selectedImportDetails:o.data,selectedCollectionVersion:void 0},(function(){var o=e.state.selectedImportDetails;p.c.list({namespace:o.namespace,name:o.name,version:o.version}).then((function(t){1===t.data.meta.count&&e.setState({selectedCollectionVersion:t.data.data[0]})})).finally((function(){t&&t()}))}))})).catch((function(t){e.setState({selectedImportDetails:void 0,importDetailError:"Error fetching import from API",loadingImportDetails:!1})})):this.setState({importDetailError:"No data",loadingImportDetails:!1})},e}(n.Component);e.default=Object(r.a)(u);try{myimports.displayName="myimports",myimports.__docgenInfo={description:"",displayName:"myimports",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<MyImports>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/my-imports/my-imports.tsx#myimports"]={docgenInfo:myimports.__docgenInfo,name:"myimports",path:"src/containers/my-imports/my-imports.tsx#myimports"})}catch(t){}}}]);
//# sourceMappingURL=my_imports.js.map
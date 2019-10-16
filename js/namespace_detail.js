(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{653:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,"/* logo blue */\n/* well background color */\n/* alert info background color */\n/* alert info border color */\n.upload-collection .file-error-messages {\n  color: #cc0000; }\n\n.upload-collection .upload-file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.upload-collection .upload-file-label {\n  display: inline-block;\n  cursor: pointer;\n  width: 100%;\n  font-weight: normal; }\n  .upload-collection .upload-file-label .upload-box {\n    display: flex;\n    border-style: solid;\n    border-width: thin;\n    width: 100%;\n    border-radius: 3px; }\n    .upload-collection .upload-file-label .upload-box .upload-button,\n    .upload-collection .upload-file-label .upload-box .upload-text {\n      padding: 5px; }\n    .upload-collection .upload-file-label .upload-box .upload-button {\n      border-right: thin solid;\n      padding-left: 10px;\n      padding-right: 10px; }\n    .upload-collection .upload-file-label .upload-box .upload-button:hover {\n      color: white;\n      background-color: #808080; }\n    .upload-collection .upload-file-label .upload-box .upload-text {\n      position: relative;\n      width: 100%; }\n    .upload-collection .upload-file-label .upload-box .loading-bar {\n      position: absolute;\n      height: 3px;\n      background-color: #5bb75b;\n      bottom: 0px;\n      left: 0px; }\n",""])},657:function(e,t,n){"use strict";var a,o,r=n(2),l=n(451),s=n(96),i=n(40),c=n(452),p=n(264),u=n(103),d=n(266),m=n(243),f=n(72),h=n(251),b=(n(662),n(127)),y=n.n(b),g=n(291),v=n(226),w=n(221),E=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});!function(e){e.uploading="uploading",e.waiting="waiting"}(o||(o={}));var C=function(e){function t(t){var n=e.call(this,t)||this;return n.acceptedFileTypes=["application/x-gzip","application/gzip"],n.state={file:void 0,errors:"",uploadProgress:0,uploadStatus:o.waiting},n}return E(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.isOpen,a=t.collection,l=this.state,s=l.file,i=l.errors,c=l.uploadProgress,p=l.uploadStatus;return r.createElement(g.a,{isSmall:!0,title:a?"New version of "+a.name:"New collection",isOpen:n,onClose:function(){return e.handleClose()},actions:[r.createElement(u.a,{key:"cancel",variant:"secondary",onClick:function(){return e.handleClose()}},"Cancel"),r.createElement(u.a,{key:"confirm",variant:"primary",onClick:function(){return e.saveFile()},isDisabled:!this.canUpload()},"Upload")]},r.createElement("div",{className:"upload-collection"},r.createElement("form",null,r.createElement("input",{disabled:p!==o.waiting,className:"upload-file",type:"file",id:"collection-widget",onChange:function(t){return e.handleFileUpload(t.target.files)}}),r.createElement("label",{className:"upload-file-label",htmlFor:"collection-widget"},r.createElement("div",{className:"upload-box"},r.createElement("div",{className:"upload-button"},this.renderFileIcon()),r.createElement("div",{className:"upload-text"},null!=s?s.name:"Select file",r.createElement("div",{className:"loading-bar",style:{width:100*c+"%"}}))))),i?r.createElement("span",{className:"file-error-messages"},r.createElement("i",{className:"pficon-error-circle-o"})," ",i):null))},t.prototype.canUpload=function(){return!this.state.errors&&(this.state.uploadStatus===o.waiting&&!!this.state.file)},t.prototype.renderFileIcon=function(){switch(this.state.uploadStatus){case o.uploading:return r.createElement(v.b,{className:"fa-spin"});default:return r.createElement(w.b,null)}},t.prototype.handleFileUpload=function(e){var t=e[0],n=this.props.collection;e.length>1?this.setState({errors:"Please select no more than one file."}):this.acceptedFileTypes.includes(t.type)?n&&n.name!==t.name.split("-")[1]?this.setState({errors:"The file you have selected doesn't appear to match "+n.name,file:t,uploadProgress:0}):this.setState({errors:"",file:t,uploadProgress:0}):this.setState({errors:"Invalid file format.",file:t,uploadProgress:0})},t.prototype.saveFile=function(){var e=this;this.setState({uploadStatus:o.uploading});var t={file:this.state.file,sha256:""};this.cancelToken=f.a.getCancelToken(),f.a.upload(t,(function(t){e.setState({uploadProgress:t.loaded/t.total})}),this.cancelToken).then((function(t){e.props.onUploadSuccess(t)})).catch((function(t){var n="";if(!y.a.isCancel(t))for(var a=0,r=t.response.data.errors;a<r.length;a++){n=n+r[a].detail+" "}e.setState({uploadStatus:o.waiting,errors:n})})).finally((function(t){e.cancelToken=null}))},t.prototype.handleClose=function(){var e=this,t=null;this.cancelToken&&this.state.uploadStatus===o.uploading&&(t="Collection upload canceled",this.cancelToken.cancel(t)),this.setState({file:void 0,errors:"",uploadProgress:0,uploadStatus:o.waiting},(function(){return e.props.setOpen(!1,t)}))},t}(r.Component),P=n(14),S=n(10);n.d(t,"a",(function(){return _}));var O=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),_=function(e){function t(t){var n=e.call(this,t)||this;n.nonAPIParams=["tab"],n.nonQueryStringParams=["namespace"];var a=P.a.parseParamString(t.location.search,["page","page_size"]);return a.tab||(a.tab="collections"),a.namespace=t.match.params.namespace,n.state={collections:[],namespace:null,params:a,redirect:null,itemCount:0,showImportModal:!1,warning:"",updateCollection:null},n}return O(t,e),t.prototype.componentDidMount=function(){this.loadAll()},t.prototype.render=function(){var e=this,t=this.state,n=t.collections,a=t.namespace,o=t.params,s=t.redirect,u=t.itemCount,d=t.showImportModal,m=t.warning,f=t.updateCollection,b=this.props.breadcrumbs;if(s)return r.createElement(l.a,{to:s});if(!a)return r.createElement(h.m,null);var y=["Collections"];return a.resources&&y.push("Resources"),r.createElement(r.Fragment,null,r.createElement(C,{isOpen:d,onUploadSuccess:function(t){return e.props.history.push(Object(S.b)(S.a.myImports,{},{namespace:a.name}))},setOpen:function(t,n){return e.toggleImportModal(t,n)},collection:f}),m?r.createElement(c.a,{style:{position:"fixed",right:"5px",top:"80px",zIndex:300},variant:"warning",title:m,action:r.createElement(p.a,{onClose:function(){return e.setState({warning:""})}})}):null,r.createElement(h.s,{namespace:a,breadcrumbs:b.concat([{name:a.name}]),tabs:y,params:o,updateParams:function(t){return e.updateParams(t)},pageControls:this.renderPageControls()}),r.createElement(i.Main,null,r.createElement(i.Section,{className:"body"},"collections"===o.tab.toLowerCase()?r.createElement(h.h,{updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollections()}))},params:o,collections:n,itemCount:u,showControls:this.props.showControls,handleControlClick:function(t,n){return e.handleCollectionAction(t,n)}}):this.renderResources(a))))},t.prototype.handleCollectionAction=function(e,t){if("upload"===t){var n=this.state.collections.find((function(t){return t.id===e}));this.setState({updateCollection:n,showImportModal:!0})}},t.prototype.renderResources=function(e){return r.createElement("div",{className:"pf-c-content preview"},r.createElement(m,{source:e.resources}))},t.prototype.loadCollections=function(){var e=this;f.a.list(P.a.getReduced(this.state.params,this.nonAPIParams)).then((function(t){e.setState({collections:t.data.data,itemCount:t.data.meta.count})}))},t.prototype.loadAll=function(){var e=this;Promise.all([f.a.list(P.a.getReduced(this.state.params,this.nonAPIParams)),f.c.get(this.props.match.params.namespace)]).then((function(t){e.setState({collections:t[0].data.data,itemCount:t[0].data.meta.count,namespace:t[1].data})})).catch((function(t){e.setState({redirect:S.a.notFound})}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return P.a.updateParamsMixin(this.nonQueryStringParams)},enumerable:!0,configurable:!0}),t.prototype.renderPageControls=function(){var e=this;return this.props.showControls?r.createElement("div",{style:{display:"flex",alignItems:"center"}},r.createElement(u.a,{onClick:function(){return e.setState({showImportModal:!0})}},"Upload collection"),r.createElement(h.w,{items:[r.createElement(d.a,{key:"1"},r.createElement(s.a,{to:Object(S.b)(S.a.editNamespace,{namespace:this.state.namespace.name})},"Edit namespace")),r.createElement(d.a,{key:"2"},r.createElement(s.a,{to:Object(S.b)(S.a.myImports,{},{namespace:this.state.namespace.name})},"Imports")),r.createElement(d.a,{key:"3"},r.createElement(s.a,{to:S.a.token,target:"_blank"},"Get API token"))]})):null},t.prototype.toggleImportModal=function(e,t){var n={showImportModal:e};t&&(n.warning=t),e||(n.updateCollection=null),this.setState(n)},t}(r.Component)},662:function(e,t,n){var a=n(653);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},r=n(8)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(653,(function(){var t=n(653);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(t)})),e.hot.dispose((function(){r()}))},665:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=n(40),l=n(451),s=n(453),i=n(251),c=n(72),p=n(254),u=n(289),d=n(103),m=n(10),f=n(14),h=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(t){var n=e.call(this,t)||this,a=f.a.parseParamString(t.location.search);return a.tab||(a.tab="edit details"),n.state={namespace:null,newLinkURL:"",newLinkName:"",errorMessages:{},saving:!1,redirect:null,unsavedData:!1,params:a},n}return h(t,e),t.prototype.componentDidMount=function(){this.loadNamespace()},t.prototype.render=function(){var e=this,t=this.state,n=t.namespace,a=t.errorMessages,s=t.saving,c=t.redirect,f=t.params;return c?o.createElement(l.a,{to:c}):n?o.createElement(o.Fragment,null,o.createElement(i.s,{namespace:n,breadcrumbs:[{name:"My namespaces",url:m.a.myNamespaces},{name:n.name,url:Object(m.b)(m.a.myCollections,{namespace:n.name})},{name:"Edit"}],tabs:["Edit details","Edit resources"],params:f,updateParams:function(t){return e.updateParams(t)}}),o.createElement(r.Main,null,o.createElement(r.Section,{className:"body"},"edit details"===f.tab.toLowerCase()?o.createElement(i.p,{namespace:n,errorMessages:a,updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})}}):o.createElement(i.u,{updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})},namespace:n}),o.createElement(p.a,null,o.createElement(u.a,null,o.createElement(d.a,{variant:"primary",onClick:function(){return e.saveNamespace()}},"Save"),o.createElement(d.a,{variant:"secondary",onClick:function(){return e.cancel()}},"Cancel"),s?o.createElement(r.Spinner,null):null),this.state.unsavedData?o.createElement("div",{style:{color:"red"}},"You have unsaved changes"):null)))):null},Object.defineProperty(t.prototype,"updateParams",{get:function(){return f.a.updateParamsMixin()},enumerable:!0,configurable:!0}),t.prototype.loadNamespace=function(){var e=this;c.c.get(this.props.match.params.namespace).then((function(t){e.setState({namespace:t.data})})).catch((function(t){e.setState({redirect:m.a.notFound})}))},t.prototype.saveNamespace=function(){var e=this;this.setState({saving:!0},(function(){c.c.update(e.state.namespace.name,e.state.namespace).then((function(t){e.setState({namespace:t.data,errorMessages:{},saving:!1,unsavedData:!1,redirect:Object(m.b)(m.a.myCollections,{namespace:e.state.namespace.name})})})).catch((function(t){var n=t.response;if(400===n.status){for(var a={},o=0,r=n.data.errors;o<r.length;o++){var l=r[o];a[l.source.parameter]=l.detail}e.setState({errorMessages:a,saving:!1})}}))}))},t.prototype.cancel=function(){this.setState({redirect:Object(m.b)(m.a.myCollections,{namespace:this.state.namespace.name})})},t.prototype.validateNamesace=function(e){},t}(o.Component);t.default=Object(s.a)(b)},671:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=n(453),l=n(657),s=n(10),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return o.createElement(l.a,c({},this.props,{showControls:!0,breadcrumbs:[{url:s.a.myNamespaces,name:"My namespaces"}]}))},t}(o.Component);t.default=Object(r.a)(p)},672:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=n(453),l=n(657),s=n(10),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return o.createElement(l.a,c({},this.props,{showControls:!1,breadcrumbs:[{url:s.a.partners,name:"Partners"}]}))},t}(o.Component);t.default=Object(r.a)(p)}}]);
//# sourceMappingURL=namespace_detail.js.map
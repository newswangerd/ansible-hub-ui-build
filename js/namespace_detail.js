(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{721:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,"/* logo blue */\n/* well background color */\n/* alert info background color */\n/* alert info border color */\n.upload-collection .file-error-messages {\n  color: #cc0000; }\n\n.upload-collection .upload-file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.upload-collection .upload-file-label {\n  display: inline-block;\n  cursor: pointer;\n  width: 100%;\n  font-weight: normal; }\n  .upload-collection .upload-file-label .upload-box {\n    display: flex;\n    border-style: solid;\n    border-width: thin;\n    width: 100%;\n    border-radius: 3px; }\n    .upload-collection .upload-file-label .upload-box .upload-button,\n    .upload-collection .upload-file-label .upload-box .upload-text {\n      padding: 5px; }\n    .upload-collection .upload-file-label .upload-box .upload-button {\n      border-right: thin solid;\n      padding-left: 10px;\n      padding-right: 10px; }\n    .upload-collection .upload-file-label .upload-box .upload-button:hover {\n      color: white;\n      background-color: #808080; }\n    .upload-collection .upload-file-label .upload-box .upload-text {\n      position: relative;\n      width: 100%; }\n    .upload-collection .upload-file-label .upload-box .loading-bar {\n      position: absolute;\n      height: 3px;\n      background-color: #5bb75b;\n      bottom: 0px;\n      left: 0px; }\n",""])},726:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a,o,r=n(2),s=n(491),l=n(117),i=n(53),c=n(492),p=n(308),u=n(112),d=n(309),m=n(266),f=n(44),h=n(280),b=(n(731),n(132)),g=n.n(b),y=n(297),v=n(247),E=n(238),w=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});!function(e){e.uploading="uploading",e.waiting="waiting"}(o||(o={}));var P=function(e){function t(t){var n=e.call(this,t)||this;return n.acceptedFileTypes=["application/x-gzip","application/gzip"],n.COLLECTION_NAME_REGEX=/[0-9a-z_]+\-[0-9a-z_]+\-[0-9A-Za-z.+-]+/,n.state={file:void 0,errors:"",uploadProgress:0,uploadStatus:o.waiting},n}return w(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.isOpen,a=t.collection,s=this.state,l=s.file,i=s.errors,c=s.uploadProgress,p=s.uploadStatus;return r.createElement(y.a,{isSmall:!0,title:a?"New version of "+a.name:"New collection",isOpen:n,onClose:function(){return e.handleClose()},actions:[r.createElement(u.a,{key:"confirm",variant:"primary",onClick:function(){return e.saveFile()},isDisabled:!this.canUpload()},"Upload"),r.createElement(u.a,{key:"cancel",variant:"secondary",onClick:function(){return e.handleClose()}},"Cancel")],isFooterLeftAligned:!0},r.createElement("div",{className:"upload-collection"},r.createElement("form",null,r.createElement("input",{disabled:p!==o.waiting,className:"upload-file",type:"file",id:"collection-widget",onChange:function(t){return e.handleFileUpload(t.target.files)}}),r.createElement("label",{className:"upload-file-label",htmlFor:"collection-widget"},r.createElement("div",{className:"upload-box"},r.createElement("div",{className:"upload-button"},this.renderFileIcon()),r.createElement("div",{className:"upload-text"},null!=l?l.name:"Select file",r.createElement("div",{className:"loading-bar",style:{width:100*c+"%"}}))))),i?r.createElement("span",{className:"file-error-messages"},r.createElement("i",{className:"pficon-error-circle-o"})," ",i):null))},t.prototype.canUpload=function(){return!this.state.errors&&(this.state.uploadStatus===o.waiting&&!!this.state.file)},t.prototype.renderFileIcon=function(){switch(this.state.uploadStatus){case o.uploading:return r.createElement(v.b,{className:"fa-spin"});default:return r.createElement(E.b,null)}},t.prototype.handleFileUpload=function(e){var t=e[0],n=this.props.collection;e.length>1?this.setState({errors:"Please select no more than one file."}):this.acceptedFileTypes.includes(t.type)?this.COLLECTION_NAME_REGEX.test(t.name)?n&&n.name!==t.name.split("-")[1]?this.setState({errors:"The collection you have selected doesn't appear to match "+n.name,file:t,uploadProgress:0}):this.props.namespace!=t.name.split("-")[0]?this.setState({errors:"The collection you have selected does not match this namespace.",file:t,uploadProgress:0}):this.setState({errors:"",file:t,uploadProgress:0}):this.setState({errors:"Invalid file name. Collections must be formatted as 'namespace-collection_name-1.0.0'",file:t,uploadProgress:0}):this.setState({errors:"Invalid file format.",file:t,uploadProgress:0})},t.prototype.saveFile=function(){var e=this;this.setState({uploadStatus:o.uploading});var t={file:this.state.file,sha256:""};this.cancelToken=f.c.getCancelToken(),f.c.upload(t,(function(t){e.setState({uploadProgress:t.loaded/t.total})}),this.cancelToken).then((function(t){e.props.onUploadSuccess(t)})).catch((function(t){var n="";if(!g.a.isCancel(t))if(t.response.data.errors){for(var a=[],r=0,s=t.response.data.errors;r<s.length;r++){var l=s[r];a.push(l.detail||l.title||l.code||"API error. Status code: "+l.status)}n=a.join(", ")}else n="API error. Status code: "+t.response.status;e.setState({uploadStatus:o.waiting,errors:n})})).finally((function(t){e.cancelToken=null}))},t.prototype.handleClose=function(){var e=this,t=null;this.cancelToken&&this.state.uploadStatus===o.uploading&&(t="Collection upload canceled",this.cancelToken.cancel(t)),this.setState({file:void 0,errors:"",uploadProgress:0,uploadStatus:o.waiting},(function(){return e.props.setOpen(!1,t)}))},t}(r.Component),C=n(16),O=n(10),S=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),_=function(){return(_=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},x=function(e){function t(t){var n=e.call(this,t)||this;n.nonAPIParams=["tab"],n.persistentParams={certification:f.b.certified},n.nonQueryStringParams=["namespace"];var a=C.a.parseParamString(t.location.search,["page","page_size"]);return a.namespace=t.match.params.namespace,n.state={collections:[],namespace:null,params:a,redirect:null,itemCount:0,showImportModal:!1,warning:"",updateCollection:null},n}return S(t,e),t.prototype.componentDidMount=function(){this.loadAll()},t.prototype.render=function(){var e=this,t=this.state,n=t.collections,a=t.namespace,o=t.params,l=t.redirect,u=t.itemCount,d=t.showImportModal,m=t.warning,f=t.updateCollection,b=this.props.breadcrumbs;if(l)return r.createElement(s.a,{to:l});if(!a)return r.createElement(h.r,null);var g=["Collections"],y=o.tab||"collections";return a.resources&&g.push("Resources"),r.createElement(r.Fragment,null,r.createElement(P,{isOpen:d,onUploadSuccess:function(t){return e.props.history.push(Object(O.b)(O.a.myImports,{},{namespace:a.name}))},setOpen:function(t,n){return e.toggleImportModal(t,n)},collection:f,namespace:a.name}),m?r.createElement(c.a,{style:{position:"fixed",right:"5px",top:"80px",zIndex:300},variant:"warning",title:m,action:r.createElement(p.a,{onClose:function(){return e.setState({warning:""})}})}):null,r.createElement(h.z,{namespace:a,breadcrumbs:b.concat([{name:a.name}]),tabs:g,params:o,updateParams:function(t){return e.updateParams(t)},pageControls:this.renderPageControls()}),r.createElement(h.t,null,r.createElement(i.Section,{className:"body"},"collections"===y.toLowerCase()?r.createElement(h.k,{updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollections()}))},params:o,collections:n,itemCount:u,showControls:this.props.showControls,handleControlClick:function(t,n){return e.handleCollectionAction(t,n)}}):this.renderResources(a))))},t.prototype.handleCollectionAction=function(e,t){var n=this,a=this.state.collections.find((function(t){return t.id===e}));switch(t){case"upload":this.setState({updateCollection:a,showImportModal:!0});break;case"deprecate":f.c.setDeprecation(a,!a.deprecated).then((function(){return n.loadCollections()})).catch((function(e){n.setState({warning:"API Error: Failed to set deprecation."})}))}},t.prototype.renderResources=function(e){return r.createElement("div",{className:"pf-c-content preview"},r.createElement(m,{source:e.resources}))},t.prototype.loadCollections=function(){var e=this;f.c.list(_(_({},C.a.getReduced(this.state.params,this.nonAPIParams)),this.persistentParams)).then((function(t){e.setState({collections:t.data.data,itemCount:t.data.meta.count})}))},t.prototype.loadAll=function(){var e=this;Promise.all([f.c.list(_(_({},C.a.getReduced(this.state.params,this.nonAPIParams)),this.persistentParams)),f.g.get(this.props.match.params.namespace)]).then((function(t){e.setState({collections:t[0].data.data,itemCount:t[0].data.meta.count,namespace:t[1].data})})).catch((function(t){e.setState({redirect:O.a.notFound})}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return C.a.updateParamsMixin(this.nonQueryStringParams)},enumerable:!0,configurable:!0}),t.prototype.renderPageControls=function(){var e=this;return this.props.showControls?r.createElement("div",{style:{display:"flex",alignItems:"center"}},r.createElement(u.a,{onClick:function(){return e.setState({showImportModal:!0})}},"Upload collection"),r.createElement(h.a,{style:{marginLeft:"8px"}}),r.createElement(h.D,{items:[r.createElement(d.a,{key:"1",component:r.createElement(l.a,{to:Object(O.b)(O.a.editNamespace,{namespace:this.state.namespace.name})},"Edit namespace")}),r.createElement(d.a,{key:"2",component:r.createElement(l.a,{to:Object(O.b)(O.a.myImports,{},{namespace:this.state.namespace.name})},"Imports")})]})):r.createElement("div",{style:{display:"flex",alignItems:"center"}},r.createElement(h.a,{style:{marginLeft:"8px"}}))},t.prototype.toggleImportModal=function(e,t){var n={showImportModal:e};t&&(n.warning=t),e||(n.updateCollection=null),this.setState(n)},t}(r.Component)},731:function(e,t,n){var a=n(721);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},r=n(7)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(721,(function(){var t=n(721);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(t)})),e.hot.dispose((function(){r()}))},735:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=n(53),s=n(491),l=n(488),i=n(280),c=n(44),p=n(37),u=n(286),d=n(330),m=n(112),f=n(10),h=n(16),b=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),g=function(e){function t(t){var n=e.call(this,t)||this,a=h.a.parseParamString(t.location.search);return a.tab||(a.tab="edit details"),n.state={alerts:[],namespace:null,userId:"",newLinkURL:"",newLinkName:"",errorMessages:{},saving:!1,redirect:null,unsavedData:!1,params:a},n}return b(t,e),t.prototype.componentDidMount=function(){var e=this;c.a.getUser().then((function(t){e.setState({userId:t.account_number},(function(){return e.loadNamespace()}))}))},t.prototype.render=function(){var e=this,t=this.state,n=t.namespace,a=t.errorMessages,l=t.saving,c=t.redirect,p=t.params,h=t.userId;return c?o.createElement(s.a,{to:c}):n?o.createElement(o.Fragment,null,o.createElement(i.z,{namespace:n,breadcrumbs:[{name:"My namespaces",url:f.a.myNamespaces},{name:n.name,url:Object(f.b)(f.a.myCollections,{namespace:n.name})},{name:"Edit"}],tabs:["Edit details","Edit resources"],params:p,updateParams:function(t){return e.updateParams(t)}}),o.createElement(i.b,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),o.createElement(i.t,null,o.createElement(r.Section,{className:"body"},"edit details"===p.tab.toLowerCase()?o.createElement(i.v,{userId:h,namespace:n,errorMessages:a,updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})}}):o.createElement(i.B,{updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})},namespace:n}),o.createElement(u.a,null,o.createElement(d.a,null,o.createElement(m.a,{variant:"primary",onClick:function(){return e.saveNamespace()}},"Save"),o.createElement(m.a,{variant:"secondary",onClick:function(){return e.cancel()}},"Cancel"),l?o.createElement(r.Spinner,null):null),this.state.unsavedData?o.createElement("div",{style:{color:"red"}},"You have unsaved changes"):null)))):null},Object.defineProperty(t.prototype,"updateParams",{get:function(){return h.a.updateParamsMixin()},enumerable:!0,configurable:!0}),t.prototype.removeGroupsPrefix=function(e){for(var t=[p.a.ADMIN_GROUP],n=0,a=e;n<a.length;n++){var o=a[n];o!=p.a.ADMIN_GROUP&&t.push(o.split(":")[1])}return t},t.prototype.loadNamespace=function(){var e=this;c.f.get(this.props.match.params.namespace).then((function(t){t.data.groups=e.removeGroupsPrefix(t.data.groups),e.setState({namespace:t.data})})).catch((function(t){e.setState({redirect:f.a.notFound})}))},t.prototype.saveNamespace=function(){var e=this;this.setState({saving:!0},(function(){c.f.update(e.state.namespace.name,e.state.namespace).then((function(t){e.setState({namespace:t.data,errorMessages:{},saving:!1,unsavedData:!1,redirect:Object(f.b)(f.a.myCollections,{namespace:e.state.namespace.name})})})).catch((function(t){var n=t.response;if(400===n.status){for(var a={},o=0,r=n.data.errors;o<r.length;o++){var s=r[o];a[s.source.parameter]=s.detail}e.setState({errorMessages:a,saving:!1})}else 404===n.status&&e.setState({alerts:e.state.alerts.concat({variant:"danger",title:"API Error: "+t.response.status,description:"You don't have permissions to update this namespace."}),saving:!1})}))}))},Object.defineProperty(t.prototype,"closeAlert",{get:function(){return Object(i.I)("alerts")},enumerable:!0,configurable:!0}),t.prototype.cancel=function(){this.setState({redirect:Object(f.b)(f.a.myCollections,{namespace:this.state.namespace.name})})},t}(o.Component);t.default=Object(l.a)(g)},742:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=n(488),s=n(726),l=n(10),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return o.createElement(s.a,c({},this.props,{showControls:!0,breadcrumbs:[{url:l.a.myNamespaces,name:"My namespaces"}]}))},t}(o.Component);t.default=Object(r.a)(p)},743:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=n(488),s=n(726),l=n(10),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return o.createElement(s.a,c({},this.props,{showControls:!1,breadcrumbs:[{url:l.a.partners,name:"Partners"}]}))},t}(o.Component);t.default=Object(r.a)(p)}}]);
//# sourceMappingURL=namespace_detail.js.map
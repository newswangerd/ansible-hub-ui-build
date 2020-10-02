(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{797:function(e,t,a){(e.exports=a(9)(!1)).push([e.i,".upload-collection .file-error-messages{color:#cc0000}.upload-collection .upload-file{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.upload-collection .upload-file-label{display:inline-block;cursor:pointer;width:100%;font-weight:normal}.upload-collection .upload-file-label .upload-box{display:flex;border-style:solid;border-width:thin;width:100%;border-radius:3px}.upload-collection .upload-file-label .upload-box .upload-button,.upload-collection .upload-file-label .upload-box .upload-text{padding:5px}.upload-collection .upload-file-label .upload-box .upload-button{border-right:thin solid;padding-left:10px;padding-right:10px}.upload-collection .upload-file-label .upload-box .upload-button:hover{color:white;background-color:gray}.upload-collection .upload-file-label .upload-box .upload-text{position:relative;width:100%}.upload-collection .upload-file-label .upload-box .loading-bar{position:absolute;height:3px;background-color:#5bb75b;bottom:0px;left:0px}\n",""])},803:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var n=a(0),o=a(409),r=a(105),s=a(45),i=a(791),l=a(773),c=a(785),p=a(141),u=a(792),d=a(219),m=a(32),f=a(230),h=(a(810),a(123)),y=a.n(h),g=a(781),b=a(13);const v=Object(b.a)({name:"SpinnerIcon",height:512,width:512,svgPath:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z",yOffset:0,xOffset:0,transform:""});const C=Object(b.a)({name:"FolderOpenIcon",height:512,width:576,svgPath:"M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z",yOffset:0,xOffset:0,transform:""});var O,S,E=(O=function(e,t){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}O(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)});!function(e){e.uploading="uploading",e.waiting="waiting"}(S||(S={}));var _=function(e){function t(t){var a=e.call(this,t)||this;return a.acceptedFileTypes=["application/x-gzip","application/gzip"],a.COLLECTION_NAME_REGEX=/[0-9a-z_]+\-[0-9a-z_]+\-[0-9A-Za-z.+-]+/,a.state={file:void 0,errors:"",uploadProgress:0,uploadStatus:S.waiting},a}return E(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.isOpen,o=t.collection,r=this.state,s=r.file,i=r.errors,l=r.uploadProgress,c=r.uploadStatus;return n.createElement(g.a,{variant:"small",title:o?"New version of "+o.name:"New collection",isOpen:a,onClose:function(){return e.handleClose()},actions:[n.createElement(p.a,{key:"confirm",variant:"primary",onClick:function(){return e.saveFile()},isDisabled:!this.canUpload()},"Upload"),n.createElement(p.a,{key:"cancel",variant:"secondary",onClick:function(){return e.handleClose()}},"Cancel")]},n.createElement("div",{className:"upload-collection"},n.createElement("form",null,n.createElement("input",{disabled:c!==S.waiting,className:"upload-file",type:"file",id:"collection-widget",onChange:function(t){return e.handleFileUpload(t.target.files)}}),n.createElement("label",{className:"upload-file-label",htmlFor:"collection-widget"},n.createElement("div",{className:"upload-box"},n.createElement("div",{className:"upload-button"},this.renderFileIcon()),n.createElement("div",{className:"upload-text"},null!=s?s.name:"Select file",n.createElement("div",{className:"loading-bar",style:{width:100*l+"%"}}))))),i?n.createElement("span",{className:"file-error-messages"},n.createElement("i",{className:"pficon-error-circle-o"})," ",i):null))},t.prototype.canUpload=function(){return!this.state.errors&&(this.state.uploadStatus===S.waiting&&!!this.state.file)},t.prototype.renderFileIcon=function(){switch(this.state.uploadStatus){case S.uploading:return n.createElement(v,{className:"fa-spin"});default:return n.createElement(C,null)}},t.prototype.handleFileUpload=function(e){var t=e[0],a=this.props.collection;e.length>1?this.setState({errors:"Please select no more than one file."}):this.acceptedFileTypes.includes(t.type)?this.COLLECTION_NAME_REGEX.test(t.name)?a&&a.name!==t.name.split("-")[1]?this.setState({errors:"The collection you have selected doesn't appear to match "+a.name,file:t,uploadProgress:0}):this.props.namespace!=t.name.split("-")[0]?this.setState({errors:"The collection you have selected does not match this namespace.",file:t,uploadProgress:0}):this.setState({errors:"",file:t,uploadProgress:0}):this.setState({errors:"Invalid file name. Collections must be formatted as 'namespace-collection_name-1.0.0'",file:t,uploadProgress:0}):this.setState({errors:"Invalid file format.",file:t,uploadProgress:0})},t.prototype.saveFile=function(){var e=this;this.setState({uploadStatus:S.uploading});var t={file:this.state.file,sha256:""};this.cancelToken=m.b.getCancelToken(),m.b.upload("inbound-"+this.props.namespace,t,(function(t){e.setState({uploadProgress:t.loaded/t.total})}),this.cancelToken).then((function(t){e.props.onUploadSuccess(t)})).catch((function(t){var a="";if(!y.a.isCancel(t))if(t.response.data.errors){for(var n=[],o=0,r=t.response.data.errors;o<r.length;o++){var s=r[o];n.push(s.detail||s.title||s.code||"API error. Status code: "+s.status)}a=n.join(", ")}else a="API error. Status code: "+t.response.status;e.setState({uploadStatus:S.waiting,errors:a})})).finally((function(t){e.cancelToken=null}))},t.prototype.handleClose=function(){var e=this,t=null;this.cancelToken&&this.state.uploadStatus===S.uploading&&(t="Collection upload canceled",this.cancelToken.cancel(t)),this.setState({file:void 0,errors:"",uploadProgress:0,uploadStatus:S.waiting},(function(){return e.props.setOpen(!1,t)}))},t}(n.Component);try{_.displayName="ImportModal",_.__docgenInfo={description:"",displayName:"ImportModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(isOpen: any, warnings?: any) => void"}},onUploadSuccess:{defaultValue:null,description:"",name:"onUploadSuccess",required:!0,type:{name:"(result: any) => void"}},collection:{defaultValue:null,description:"",name:"collection",required:!1,type:{name:"CollectionListType"}},namespace:{defaultValue:null,description:"",name:"namespace",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-detail/import-modal/import-modal.tsx#ImportModal"]={docgenInfo:_.__docgenInfo,name:"ImportModal",path:"src/containers/namespace-detail/import-modal/import-modal.tsx#ImportModal"})}catch(e){}var w=a(20),x=a(6),P=a(75),I=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),N=function(){return(N=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},R=function(e){function t(t){var a=e.call(this,t)||this;a.nonAPIParams=["tab"],a.nonQueryStringParams=["namespace"];var n=w.a.parseParamString(t.location.search,["page","page_size"]);return n.namespace=t.match.params.namespace,a.state={collections:[],namespace:null,params:n,redirect:null,itemCount:0,showImportModal:!1,warning:"",updateCollection:null},a}return I(t,e),t.prototype.componentDidMount=function(){this.loadAll()},t.prototype.render=function(){var e=this,t=this.state,a=t.collections,r=t.namespace,p=t.params,u=t.redirect,d=t.itemCount,m=t.showImportModal,h=t.warning,y=t.updateCollection,g=this.props.breadcrumbs;if(u)return n.createElement(o.a,{to:u});if(!r)return n.createElement(f.s,null);var b=["Collections"];this.props.showControls&&b.push("CLI Configuration");var v=p.tab||"collections";r.resources&&b.push("Resources");var C=Object(w.c)("inbound-"+r.name);return n.createElement(n.Fragment,null,n.createElement(_,{isOpen:m,onUploadSuccess:function(t){return e.props.history.push(Object(x.b)(x.a.myImports,{},{namespace:r.name}))},setOpen:function(t,a){return e.toggleImportModal(t,a)},collection:y,namespace:r.name}),h?n.createElement(i.a,{style:{position:"fixed",right:"5px",top:"80px",zIndex:300},variant:"warning",title:h,actionClose:n.createElement(l.a,{onClose:function(){return e.setState({warning:""})}})}):null,n.createElement(f.C,{namespace:r,breadcrumbs:g.concat([{name:r.name}]),tabs:b,params:p,updateParams:function(t){return e.updateParams(t)},pageControls:this.renderPageControls()}),n.createElement(f.v,null,n.createElement(s.Section,{className:"body"},"collections"===v.toLowerCase()?n.createElement(f.l,{updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollections()}))},params:p,collections:a,itemCount:d,showControls:this.props.showControls,handleControlClick:function(t,a){return e.handleCollectionAction(t,a)},repo:this.context.selectedRepo}):null,"cli configuration"===v.toLowerCase()?n.createElement("div",null,n.createElement(c.a,{isReadOnly:!0},C),n.createElement("div",null,n.createElement("b",null,"Note:")," Use this URL to configure ansible-galaxy to upload collections to this namespace. More information on ansible-galaxy configurations can be found"," ",n.createElement("a",{href:"https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client",target:"_blank"},"here"),".")):null,"resources"===v.toLowerCase()?this.renderResources(r):null)))},t.prototype.handleCollectionAction=function(e,t){var a=this,n=this.state.collections.find((function(t){return t.id===e}));switch(t){case"upload":this.setState({updateCollection:n,showImportModal:!0});break;case"deprecate":m.b.setDeprecation(n,!n.deprecated).then((function(){return a.loadCollections()})).catch((function(e){a.setState({warning:"API Error: Failed to set deprecation."})}))}},t.prototype.renderResources=function(e){return n.createElement("div",{className:"pf-c-content preview"},n.createElement(d,{source:e.resources}))},t.prototype.loadCollections=function(){var e=this;m.b.list(N({},w.a.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo).then((function(t){e.setState({collections:t.data.data,itemCount:t.data.meta.count})}))},t.prototype.loadAll=function(){var e=this;Promise.all([m.b.list(N({},w.a.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo),m.j.get(this.props.match.params.namespace)]).then((function(t){e.setState({collections:t[0].data.data,itemCount:t[0].data.meta.count,namespace:t[1].data})})).catch((function(t){e.setState({redirect:x.a.notFound})}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return w.a.updateParamsMixin(this.nonQueryStringParams)},enumerable:!1,configurable:!0}),t.prototype.renderPageControls=function(){var e=this;return this.props.showControls?n.createElement("div",{style:{display:"flex",alignItems:"center"}},n.createElement(p.a,{onClick:function(){return e.setState({showImportModal:!0})}},"Upload collection"),n.createElement(f.a,{style:{marginLeft:"8px"}}),n.createElement(f.J,{items:[n.createElement(u.a,{key:"1",component:n.createElement(r.a,{to:Object(x.b)(x.a.editNamespace,{namespace:this.state.namespace.name})},"Edit namespace")}),n.createElement(u.a,{key:"2",component:n.createElement(r.a,{to:Object(x.b)(x.a.myImports,{},{namespace:this.state.namespace.name})},"Imports")})]})):n.createElement("div",{style:{display:"flex",alignItems:"center"}},n.createElement(f.a,{style:{marginLeft:"8px"}}))},t.prototype.toggleImportModal=function(e,t){var a={showImportModal:e};t&&(a.warning=t),e||(a.updateCollection=null),this.setState(a)},t}(n.Component);R.contextType=P.a;try{R.displayName="NamespaceDetail",R.__docgenInfo={description:"",displayName:"NamespaceDetail",props:{showControls:{defaultValue:null,description:"",name:"showControls",required:!0,type:{name:"boolean"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"{ name: string; url?: string; }[]"}},history:{defaultValue:null,description:"",name:"history",required:!0,type:{name:"History<any>"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"Location<any>"}},match:{defaultValue:null,description:"",name:"match",required:!0,type:{name:"match<{}>"}},staticContext:{defaultValue:null,description:"",name:"staticContext",required:!1,type:{name:"StaticContext"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-detail/namespace-detail.tsx#NamespaceDetail"]={docgenInfo:R.__docgenInfo,name:"NamespaceDetail",path:"src/containers/namespace-detail/namespace-detail.tsx#NamespaceDetail"})}catch(e){}},810:function(e,t,a){var n=a(797);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},r=a(10)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(797,(function(){var t=a(797);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(t)})),e.hot.dispose((function(){r()}))},816:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a(45),s=a(409),i=a(408),l=a(230),c=a(32),p=a(720),u=a(774),d=a(141),m=a(6),f=a(20),h=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),y=function(e){function t(t){var a=e.call(this,t)||this,n=f.a.parseParamString(t.location.search);return n.tab||(n.tab="edit details"),a.state={alerts:[],namespace:null,userId:"",newLinkURL:"",newLinkName:"",errorMessages:{},saving:!1,redirect:null,unsavedData:!1,params:n},a}return h(t,e),t.prototype.componentDidMount=function(){var e=this;c.a.getUser().then((function(t){e.setState({userId:t.account_number},(function(){return e.loadNamespace()}))}))},t.prototype.render=function(){var e=this,t=this.state,a=t.namespace,n=t.errorMessages,i=t.saving,c=t.redirect,f=t.params,h=t.userId;return c?o.createElement(s.a,{to:c}):a?o.createElement(o.Fragment,null,o.createElement(l.C,{namespace:a,breadcrumbs:[{name:"My namespaces",url:m.a.myNamespaces},{name:a.name,url:Object(m.b)(m.a.myCollections,{namespace:a.name})},{name:"Edit"}],tabs:["Edit details","Edit resources"],params:f,updateParams:function(t){return e.updateParams(t)}}),o.createElement(l.c,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),o.createElement(l.v,null,o.createElement(r.Section,{className:"body"},"edit details"===f.tab.toLowerCase()?o.createElement(l.x,{userId:h,namespace:a,errorMessages:n,updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})}}):o.createElement(l.G,{updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})},namespace:a}),o.createElement(p.a,null,o.createElement(u.a,null,o.createElement(d.a,{variant:"primary",onClick:function(){return e.saveNamespace()}},"Save"),o.createElement(d.a,{variant:"secondary",onClick:function(){return e.cancel()}},"Cancel"),i?o.createElement(r.Spinner,null):null),this.state.unsavedData?o.createElement("div",{style:{color:"red"}},"You have unsaved changes"):null)))):null},Object.defineProperty(t.prototype,"updateParams",{get:function(){return f.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t.prototype.loadNamespace=function(){var e=this;c.h.get(this.props.match.params.namespace).then((function(t){e.setState({namespace:t.data})})).catch((function(t){e.setState({redirect:m.a.notFound})}))},t.prototype.saveNamespace=function(){var e=this;this.setState({saving:!0},(function(){c.h.update(e.state.namespace.name,e.state.namespace).then((function(t){e.setState({namespace:t.data,errorMessages:{},saving:!1,unsavedData:!1,redirect:Object(m.b)(m.a.myCollections,{namespace:e.state.namespace.name})})})).catch((function(t){var a=t.response;400===a.status?e.setState({errorMessages:Object(f.d)(t),saving:!1}):404===a.status&&e.setState({alerts:e.state.alerts.concat({variant:"danger",title:"API Error: "+t.response.status,description:"You don't have permissions to update this namespace."}),saving:!1})}))}))},Object.defineProperty(t.prototype,"closeAlert",{get:function(){return Object(l.P)("alerts")},enumerable:!1,configurable:!0}),t.prototype.cancel=function(){this.setState({redirect:Object(m.b)(m.a.myCollections,{namespace:this.state.namespace.name})})},t}(o.Component);t.default=Object(i.a)(y);try{editnamespace.displayName="editnamespace",editnamespace.__docgenInfo={description:"",displayName:"editnamespace",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<EditNamespace>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/edit-namespace/edit-namespace.tsx#editnamespace"]={docgenInfo:editnamespace.__docgenInfo,name:"editnamespace",path:"src/containers/edit-namespace/edit-namespace.tsx#editnamespace"})}catch(e){}},823:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a(408),s=a(803),i=a(6),l=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){return o.createElement(s.a,c({},this.props,{showControls:!0,breadcrumbs:[{url:i.a.myNamespaces,name:"My namespaces"}]}))},t}(o.Component);t.default=Object(r.a)(p);try{managenamespace.displayName="managenamespace",managenamespace.__docgenInfo={description:"",displayName:"managenamespace",props:{selectedRepo:{defaultValue:null,description:"",name:"selectedRepo",required:!0,type:{name:"string"}},wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<ManageNamespace>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-detail/manage-namespace.tsx#managenamespace"]={docgenInfo:managenamespace.__docgenInfo,name:"managenamespace",path:"src/containers/namespace-detail/manage-namespace.tsx#managenamespace"})}catch(e){}},824:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a(408),s=a(803),i=a(6),l=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e="partners".charAt(0).toUpperCase()+"partners".slice(1);return o.createElement(s.a,c({},this.props,{showControls:!1,breadcrumbs:[{url:i.a.partners,name:e}]}))},t}(o.Component);t.default=Object(r.a)(p);try{partnerdetail.displayName="partnerdetail",partnerdetail.__docgenInfo={description:"",displayName:"partnerdetail",props:{selectedRepo:{defaultValue:null,description:"",name:"selectedRepo",required:!0,type:{name:"string"}},wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<PartnerDetail>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-detail/partner-detail.tsx#partnerdetail"]={docgenInfo:partnerdetail.__docgenInfo,name:"partnerdetail",path:"src/containers/namespace-detail/partner-detail.tsx#partnerdetail"})}catch(e){}}}]);
//# sourceMappingURL=namespace_detail.js.map
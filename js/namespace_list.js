(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{698:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".card-layout{display:flex;flex-wrap:wrap}.card-layout .card-wrapper{margin-right:24px;margin-bottom:24px}.toolbar{padding-bottom:24px;display:flex;justify-content:space-between}\n",""])},703:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a,r=n(0),o=(n(711),n(40)),s=n(637),i=n(638),c=n(634),p=n(640),l=n(639),u=n(14),m=n(203),f=n(118),d=n(90),y=n(41),h=n(10),g=n(33),O=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(){return(_=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},E=function(e){function t(t){var n=e.call(this,t)||this;n.nonURLParams=["tenant"],n.handleModalToggle=function(){n.setState((function(e){return{isModalOpen:!e.isModalOpen}}))};var a=u.a.parseParamString(t.location.search,["page","page_size"]);return a.page_size||(a.page_size=24),a.sort||(a.sort="name"),n.state={namespaces:void 0,itemCount:0,params:a,hasPermission:!0,isModalOpen:!1,partnerEngineer:!1,loading:!0},n}return O(t,e),t.prototype.componentDidMount=function(){var e=this;this.isPartnerEngineer(),this.props.filterOwner?y.f.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})):this.loadNamespaces()},t.prototype.render=function(){var e=this,t=this.state,n=t.namespaces,a=t.params,s=t.itemCount,i=t.partnerEngineer,c=this.props.title;if(!n)return r.createElement(m.r,null);var p=[];return i&&(p.push(r.createElement(d.a,{key:"separator",variant:"separator"})),p.push(r.createElement(d.a,{key:"create-button"},r.createElement(f.a,{variant:"primary",onClick:this.handleModalToggle},"Create")))),r.createElement(r.Fragment,null,r.createElement(m.d,{title:c},r.createElement("div",{className:"toolbar"},r.createElement(m.H,{params:a,sortOptions:[{title:"Name",id:"name",type:"alpha"}],searchPlaceholder:"Search "+c.toLowerCase(),updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},extraInputs:p}),r.createElement("div",null,r.createElement(m.y,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},count:s,isCompact:!0,perPageOptions:g.a.CARD_DEFAULT_PAGINATION_OPTIONS})))),r.createElement(m.t,null,r.createElement(o.Section,null,this.renderBody()),r.createElement(m.w,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(t){return e.props.history.push(Object(h.b)(h.a.myCollections,{namespace:t.name}))}})))},t.prototype.renderBody=function(){var e=this,t=this.state,n=t.namespaces,a=t.hasPermission,u=this.props.namespacePath;return this.state.loading?r.createElement(o.Section,null,r.createElement(m.q,null),";"):0===n.length?r.createElement(o.Section,null,r.createElement(s.a,{className:"empty",variant:s.b.full},r.createElement(i.a,{icon:l.a}),r.createElement(c.a,{headingLevel:"h2",size:"lg"},a?"No results found":"No managed namespaces"),r.createElement(p.a,null,a?"No results match the filter criteria. Remove all filters or clear all filters to show results.":"This account is not set up to manage any namespaces."),a&&r.createElement(f.a,{variant:"link",onClick:function(){return e.updateParams({},(function(){return e.loadNamespaces()}))}},"Clear all filters"))):r.createElement(o.Section,{className:"card-layout"},n.map((function(e,t){return r.createElement("div",{key:t,className:"card-wrapper"},r.createElement(m.u,_({namespaceURL:Object(h.b)(u,{namespace:e.name}),key:t},e)))})))},t.prototype.loadNamespaces=function(){var e,t=this;e=this.props.filterOwner?function(e){return y.f.list(e)}:function(e){return y.g.list(e)},this.setState({loading:!0},(function(){e(t.state.params).then((function(e){t.setState({namespaces:e.data.data,itemCount:e.data.meta.count,loading:!1})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return u.a.updateParamsMixin(this.nonURLParams)},enumerable:!1,configurable:!0}),t.prototype.isPartnerEngineer=function(){var e=this;y.a.isPartnerEngineer().then((function(t){var n=t.data;e.setState({partnerEngineer:n.is_partner_engineer})}))},t}(r.Component);try{E.displayName="NamespaceList",E.__docgenInfo={description:"",displayName:"NamespaceList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},namespacePath:{defaultValue:null,description:"",name:"namespacePath",required:!0,type:{name:"Paths"}},filterOwner:{defaultValue:null,description:"",name:"filterOwner",required:!1,type:{name:"boolean"}},history:{defaultValue:null,description:"",name:"history",required:!0,type:{name:"History<any>"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"Location<any>"}},match:{defaultValue:null,description:"",name:"match",required:!0,type:{name:"match<{}>"}},staticContext:{defaultValue:null,description:"",name:"staticContext",required:!1,type:{name:"StaticContext"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/namespace-list.tsx#NamespaceList"]={docgenInfo:E.__docgenInfo,name:"NamespaceList",path:"src/containers/namespace-list/namespace-list.tsx#NamespaceList"})}catch(e){}},711:function(e,t,n){var a=n(698);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(8)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(698,(function(){var t=n(698);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},722:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n(372),s=n(703),i=n(10),c=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:i.a.myCollections,title:"My namespaces",filterOwner:!0}))},t}(r.Component);t.default=Object(o.a)(l);try{mynamespaces.displayName="mynamespaces",mynamespaces.__docgenInfo={description:"",displayName:"mynamespaces",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<MyNamespaces>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/my-namespaces.tsx#mynamespaces"]={docgenInfo:mynamespaces.__docgenInfo,name:"mynamespaces",path:"src/containers/namespace-list/my-namespaces.tsx#mynamespaces"})}catch(e){}},725:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n(372),s=n(703),i=n(10),c=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:i.a.namespace,title:"Partners"}))},t}(r.Component);t.default=Object(o.a)(l);try{partners.displayName="partners",partners.__docgenInfo={description:"",displayName:"partners",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<Partners>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/partners.tsx#partners"]={docgenInfo:partners.__docgenInfo,name:"partners",path:"src/containers/namespace-list/partners.tsx#partners"})}catch(e){}}}]);
//# sourceMappingURL=namespace_list.js.map
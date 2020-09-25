(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{827:function(t,e,o){"use strict";o.r(e),o.d(e,"Repository",(function(){return d}));var n,r=o(0),a=o(409),s=o(230),i=o(45),c=o(22),l=o(18),u=o(32),p=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),d=function(){},m=function(t){function e(e){var o=t.call(this,e)||this;o.nonQueryStringParams=["repository"];var n=c.a.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=10),n.tab||(n.tab="local"),n.tab||"insights"!==l.a.STANDALONE_DEPLOYMENT_MODE||(n.tab="local"),o.state={itemCount:1,params:n,loading:!1,showRemoteFormModal:!1,content:[],remoteToEdit:void 0,errorMessages:{}},o}return p(e,t),e.prototype.componentDidMount=function(){this.loadContent()},e.prototype.render=function(){var t=this,e=this.state,o=e.params,n=e.itemCount,a=e.loading,p=e.content,d=e.remoteToEdit,m=e.showRemoteFormModal,f=e.errorMessages;return r.createElement(r.Fragment,null,r.createElement(s.E,{remote:d,updateRemote:function(e){return t.setState({remoteToEdit:e})},saveRemote:function(){var e=t.state.remoteToEdit;try{var o=e.repositories[0].distributions[0].base_path;u.l.update(o,e).then((function(e){t.setState({errorMessages:{},showRemoteFormModal:!1,remoteToEdit:void 0},(function(){return t.loadContent()}))})).catch((function(e){return t.setState({errorMessages:Object(c.d)(e)})}))}catch(e){t.setState({errorMessages:{__nofield:"Can't update remote without a distribution attached to it."}})}},errorMessages:f,showModal:m,closeModal:function(){return t.setState({showRemoteFormModal:!1,errorMessages:{}})}}),r.createElement(s.e,{title:"Repo Management"},"insights"===l.a.STANDALONE_DEPLOYMENT_MODE?r.createElement("div",{className:"header-bottom"},r.createElement("div",{className:"tab-link-container"},r.createElement("div",{className:"tabs"},r.createElement(s.L,{tabs:["Local","Remote"],params:o,updateParams:function(e){t.setState({content:[]},(function(){return t.updateParams(e,(function(){return t.loadContent()}))}))}})))):null),r.createElement(s.v,{className:"repository-list"},r.createElement(i.Section,{className:"body"},this.renderContent(o,a,n,p))))},e.prototype.renderContent=function(t,e,o,n){var a=this;return"insights"===l.a.INSIGHTS_DEPLOYMENT_MODE||t.tab&&"local"===t.tab.toLowerCase()?r.createElement("div",null,e?r.createElement(s.r,null):r.createElement(s.t,{repositories:n,updateParams:this.updateParams})):t.tab&&"remote"===t.tab.toLowerCase()?r.createElement("div",null,e?r.createElement(s.r,null):r.createElement(s.F,{repositories:n,updateParams:this.updateParams,editRemote:function(t){a.setState({remoteToEdit:t,showRemoteFormModal:!0})},syncRemote:function(t){return u.l.sync(t).then((function(t){return a.loadContent()}))}})):void 0},e.prototype.loadContent=function(){var t=this,e=this.state.params;this.setState({loading:!0},(function(){if("remote"==e.tab)u.l.list(c.a.getReduced(e,t.nonQueryStringParams)).then((function(e){t.setState({loading:!1,content:e.data.data,itemCount:e.data.meta.count})}));else{var o=u.d;"insights"===l.a.INSIGHTS_DEPLOYMENT_MODE&&(o=u.g),o.list().then((function(e){t.setState({loading:!1,content:e.data.data,itemCount:e.data.meta.count})}))}}))},Object.defineProperty(e.prototype,"updateParams",{get:function(){return c.a.updateParamsMixin(this.nonQueryStringParams)},enumerable:!1,configurable:!0}),e}(r.Component);e.default=Object(a.a)(m);try{repositorylist.displayName="repositorylist",repositorylist.__docgenInfo={description:"",displayName:"repositorylist",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<RepositoryList>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/repositories/repository-list.tsx#repositorylist"]={docgenInfo:repositorylist.__docgenInfo,name:"repositorylist",path:"src/containers/repositories/repository-list.tsx#repositorylist"})}catch(t){}}}]);
//# sourceMappingURL=repository-list.js.map
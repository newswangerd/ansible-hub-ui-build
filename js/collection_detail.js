(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{649:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(72),o=n(10);function r(e){var t=this;void 0===e&&(e=!1),a.a.getCached(this.props.match.params.namespace,this.props.match.params.collection,this.state.params,e).then((function(e){t.setState({collection:e})})).catch((function(e){t.props.history.push(o.a.notFound)}))}},650:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,"/* logo blue */\n/* well background color */\n/* alert info background color */\n/* alert info border color */\n.main {\n  margin: 0px;\n  padding: 0px; }\n\n.header {\n  border-bottom: 1px solid #d8d8d8; }\n\n.docs-container {\n  padding-top: 24px;\n  background-color: white; }\n  @media (min-width: 1000px) {\n    .docs-container {\n      display: flex; } }\n  .docs-container .sidebar {\n    min-width: 294px;\n    max-width: 294px;\n    border-right: 1px solid #d8d8d8;\n    padding: 0px;\n    padding-top: 0px; }\n  .docs-container .docs {\n    flex-grow: 1;\n    padding: 24px;\n    padding-top: 0px;\n    min-height: calc(100vh - 250px); }\n",""])},658:function(e,t,n){var a=n(650);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},r=n(8)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(650,(function(){var t=n(650);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(t)})),e.hot.dispose((function(){r()}))},666:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=n(453),c=n(40),i=n(251),s=n(649),l=n(14),p=n(10),u=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(){return(m=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d=function(e){function t(t){var n=e.call(this,t)||this,a=l.a.parseParamString(t.location.search);return n.state={collection:void 0,params:a},n}return u(t,e),t.prototype.componentDidMount=function(){this.loadCollection()},t.prototype.render=function(){var e=this,t=this.state,n=t.collection,a=t.params;if(!n)return o.createElement(i.m,null);var r=[{url:p.a.partners,name:"Partners"},{url:Object(p.b)(p.a.namespace,{namespace:n.namespace.name}),name:n.namespace.name},{name:n.name}];return o.createElement(o.Fragment,null,o.createElement(i.f,{collection:n,params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(!0)}))},breadcrumbs:r,activeTab:"details"}),o.createElement(c.Main,null,o.createElement(c.Section,{className:"body"},o.createElement(i.g,m({},n,{updateParams:function(t){return e.updateParams(t)},params:this.state.params})))))},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return s.a},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return l.a.updateParamsMixin()},enumerable:!0,configurable:!0}),t}(o.Component);t.default=Object(r.a)(d)},667:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=n(453),c=n(40),i=n(251),s=n(649),l=n(14),p=n(10),u=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(t){var n=e.call(this,t)||this,a=l.a.parseParamString(t.location.search);return n.state={collection:void 0,params:a},n}return u(t,e),t.prototype.componentDidMount=function(){this.loadCollection()},t.prototype.render=function(){var e=this,t=this.state,n=t.collection,a=t.params;if(!n)return o.createElement(i.m,null);var r=[{url:p.a.partners,name:"Partners"},{url:Object(p.b)(p.a.namespace,{namespace:n.namespace.name}),name:n.namespace.name},{url:Object(p.b)(p.a.collection,{namespace:n.namespace.name,collection:n.name}),name:n.name},{name:"Content"}];return o.createElement(o.Fragment,null,o.createElement(i.f,{collection:n,params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(!0)}))},breadcrumbs:r,activeTab:"contents"}),o.createElement(c.Main,null,o.createElement(c.Section,{className:"body"},o.createElement(i.e,{contents:n.latest_version.contents,collection:n.name,namespace:n.namespace.name,params:a,updateParams:function(t){return e.updateParams(t)}}))))},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return s.a},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return l.a.updateParamsMixin()},enumerable:!0,configurable:!0}),t}(o.Component);t.default=Object(r.a)(m)},668:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=(n(658),n(453)),c=n(40),i=n(286),s=n(288),l=n(130),p=n(287),u=n(228),m=n(251),d=n(649),f=n(63),b=n(10),h=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=function(e){function t(t){var n=e.call(this,t)||this,a=f.a.parseParamString(t.location.search);return n.state={collection:void 0,params:a},n.docsRef=o.createRef(),n}return h(t,e),t.prototype.componentDidMount=function(){this.loadCollection()},t.prototype.render=function(){var e,t,n=this,a=this.state,r=a.params,i=a.collection,s=this.props.match.params;if(!i)return o.createElement(m.m,null);var l=s.type||"docs",p=s.name||s.page||null;if("docs"===l&&p){if(i.latest_version.docs_blob.documentation_files){var u=i.latest_version.docs_blob.documentation_files.find((function(e){return Object(f.c)(e.name)===s.page}));u&&(e=u.html)}}else if(p){if(i.latest_version.docs_blob.contents){var d=i.latest_version.docs_blob.contents.find((function(e){return e.content_type===l&&e.content_name===p}));d&&("role"===l?e=d.readme_html:t=d)}}else i.latest_version.docs_blob.collection_readme&&(e=i.latest_version.docs_blob.collection_readme.html);var h=[{url:b.a.partners,name:"Partners"},{url:Object(b.b)(b.a.namespace,{namespace:i.namespace.name}),name:i.namespace.name},{url:Object(b.b)(b.a.collection,{namespace:i.namespace.name,collection:i.name}),name:i.name},{name:"Documentation"}];return this.docsRef.current&&this.docsRef.current.scrollIntoView(),o.createElement(o.Fragment,null,o.createElement(m.f,{collection:i,params:r,updateParams:function(e){return n.updateParams(e,(function(){return n.loadCollection(!0)}))},breadcrumbs:h,activeTab:"documentation",className:"header"}),o.createElement(c.Main,{className:"main"},o.createElement(c.Section,{className:"docs-container"},o.createElement(m.x,{className:"sidebar",namespace:i.namespace.name,collection:i.name,docs_blob:i.latest_version.docs_blob,selectedName:p,selectedType:l,params:r}),o.createElement("div",{className:"body docs",ref:this.docsRef},e||t?e?o.createElement("div",{className:"pf-c-content",dangerouslySetInnerHTML:{__html:e}}):o.createElement(m.t,{plugin:t,collectionName:i.name,namespaceName:i.namespace.name,allContent:i.latest_version.contents,params:r}):this.renderNotFound(i.name)))))},t.prototype.renderNotFound=function(e){return o.createElement(i.a,{className:"empty",variant:i.b.full},o.createElement(s.a,{icon:u.b}),o.createElement(l.a,{headingLevel:"h2",size:"lg"},"Not Found"),o.createElement(p.a,null,"The file you're looking for doesn't seem to be available in this version of ",e,"."))},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return d.a},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return f.a.updateParamsMixin()},enumerable:!0,configurable:!0}),t}(o.Component);t.default=Object(r.a)(y)}}]);
//# sourceMappingURL=collection_detail.js.map
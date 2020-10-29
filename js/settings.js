(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{806:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".certification-dasboard .toolbar{padding-bottom:16px;display:flex;justify-content:space-between}.certification-dasboard .control-column{display:flex;justify-content:flex-end;align-items:center}.certification-dasboard .footer{padding-top:16px}.certification-dasboard .updating-spinner{color:var(--pf-global--info-color--100)}\n",""])},820:function(e,t,n){var a=n(806);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(10)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(806,(function(){var t=n(806);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},832:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n(410),i=n(46),c=n(790),s=n(143),l=n(233),u=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(t){var n=e.call(this,t)||this;return n.state={tokenData:void 0},n}return u(t,e),t.prototype.componentDidMount=function(){var e=this;window.insights.chrome.auth.getOfflineToken().then((function(t){e.setState({tokenData:t.data})}))},t.prototype.render=function(){var e=this,t=this.state.tokenData;return r.createElement(r.Fragment,null,r.createElement(l.e,{title:"Token management"}),r.createElement(l.v,null,r.createElement(i.Section,{className:"body pf-c-content"},r.createElement("h2",null,"Offline token"),r.createElement("p",null,"Use this token to authenticate the ",r.createElement("code",null,"ansible-galaxy")," ","client."),t?r.createElement("div",null,r.createElement(c.a,null,t.refresh_token)):r.createElement(s.a,{onClick:function(){return e.loadToken()}},"Load token"),r.createElement("h2",null,"Manage tokens"),"To remove an existing token, visit"," ",r.createElement("a",{href:"https://sso.redhat.com/auth/realms/redhat-external/account/",target:"_blank"},"Red Hat SSO account managment"),".")))},t.prototype.loadToken=function(){window.insights.chrome.auth.doOffline()},t}(r.Component);t.default=Object(o.a)(p);try{tokeninsights.displayName="tokeninsights",tokeninsights.__docgenInfo={description:"",displayName:"tokeninsights",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<TokenPage>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/token/token-insights.tsx#tokeninsights"]={docgenInfo:tokeninsights.__docgenInfo,name:"tokeninsights",path:"src/containers/token/token-insights.tsx#tokeninsights"})}catch(e){}},834:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(820),n(3)),o=n(411),i=n(106),c=n(410),s=n(233),l=n(46),u=n(795),p=n(90),d=n(113),f=n(732),m=n(733),h=n(728),E=n(735),y=n(793),v=n(143),g=n(784),b=n(13);const C=Object(b.a)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0,transform:""});var _=n(785);const S=Object(b.a)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0,transform:""});var w,k=n(32),O=n(20),I=n(6),R=n(18),P=n(76),T=(w=function(e,t){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),N=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function c(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((a=a.apply(e,t||[])).next())}))},D=function(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},x=function(e){function t(t){var n=e.call(this,t)||this,a=O.a.parseParamString(t.location.search,["page","page_size"]);return a.page_size||(a.page_size=10),a.sort||(a.sort="-pulp_created"),a.repository||(a.repository="staging"),n.state={versions:void 0,itemCount:0,params:a,loading:!0,updatingVersions:[],redirect:void 0,alerts:[]},n}return T(t,e),t.prototype.componentDidMount=function(){this.context.user&&this.context.user.model_permissions.move_collection?this.queryCollections():this.setState({redirect:I.a.notFound})},t.prototype.render=function(){var e=this,t=this.state,n=t.versions,r=t.params,i=t.itemCount,c=t.loading,f=t.redirect;return f?a.createElement(o.a,{to:f}):n?a.createElement(a.Fragment,null,a.createElement(s.e,{title:"Approval dashboard"}),a.createElement(s.c,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),a.createElement(s.v,{className:"certification-dashboard"},a.createElement(l.Section,{className:"body"},a.createElement("div",{className:"toolbar"},a.createElement(u.a,null,a.createElement(p.a,null,a.createElement(d.a,null,a.createElement(s.n,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:r,filterConfig:[{id:"namespace",title:"Namespace"},{id:"name",title:"Collection Name"},{id:"repository",title:"Repository",inputType:"select",options:[{id:R.a.NOTCERTIFIED,title:"Rejected"},{id:R.a.NEEDSREVIEW,title:"Needs Review"},{id:R.a.PUBLISHED,title:"Approved"}]}]})))),a.createElement(s.B,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:i,isTop:!0})),a.createElement("div",null,a.createElement(s.d,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:r,ignoredParams:["page_size","page","sort"]})),c?a.createElement(s.r,null):this.renderTable(n,r),a.createElement("div",{className:"footer"},a.createElement(s.B,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:i}))))):a.createElement(s.s,null)},t.prototype.renderTable=function(e,t){var n=this;if(0===e.length)return a.createElement(f.a,{className:"empty",variant:f.b.full},a.createElement(m.a,{icon:g.a}),a.createElement(h.a,{headingLevel:"h2",size:"lg"},"No matches"),a.createElement(E.a,null,"Please try adjusting your search query."));return a.createElement("table",{"aria-label":"Collection versions",className:"content-table pf-c-table"},a.createElement(s.I,{options:{headers:[{title:"Namespace",type:"alpha",id:"namespace"},{title:"Collection",type:"alpha",id:"collection"},{title:"Version",type:"number",id:"version"},{title:"Date created",type:"number",id:"pulp_created"},{title:"Status",type:"none",id:"status"},{title:"",type:"none",id:"certify"}]},params:t,updateParams:function(e){return n.updateParams(e,(function(){return n.queryCollections()}))}}),a.createElement("tbody",null,e.map((function(e,t){return n.renderRow(e,t)}))))},t.prototype.renderStatus=function(e){return this.state.updatingVersions.includes(e)?a.createElement("span",{className:"fa fa-lg fa-spin fa-spinner"}):e.repository_list.includes(R.a.PUBLISHED)?a.createElement("span",null,a.createElement(C,{style:{color:"var(--pf-global--success-color--100)"}})," ","Approved"):e.repository_list.includes(R.a.NOTCERTIFIED)?a.createElement("span",null,a.createElement(_.a,{style:{color:"var(--pf-global--danger-color--100)"}})," ","Rejected"):e.repository_list.includes(R.a.NEEDSREVIEW)?a.createElement("span",null,a.createElement(S,{style:{color:"var(--pf-global--info-color--100)"}})," ","Needs Review"):void 0},t.prototype.renderRow=function(e,t){return a.createElement("tr",{"aria-labelledby":e.namespace+"."+e.name+" v"+e.version,key:t},a.createElement("td",null,e.namespace),a.createElement("td",null,e.name),a.createElement("td",null,a.createElement(i.a,{to:Object(I.b)(I.a.collectionByRepo,{namespace:e.namespace,collection:e.name,repo:e.repository_list[0]},{version:e.version})},e.version)),a.createElement("td",null,r(e.created_at).fromNow()),a.createElement("td",null,this.renderStatus(e)),a.createElement("td",null,a.createElement("div",{className:"control-column"},a.createElement("div",null,this.renderButtons(e)))))},t.prototype.renderButtons=function(e){var t=this;if(!this.state.updatingVersions.includes(e)){var n=a.createElement(y.a,{key:"imports",component:a.createElement(i.a,{to:Object(I.b)(I.a.myImports,{},{namespace:e.namespace,name:e.name,version:e.version})},"View Import Logs")}),r=function(n,r){return a.createElement(y.a,{onClick:function(){return t.updateCertification(e,r,R.a.PUBLISHED)},isDisabled:n,key:"certify"},"Certify")},o=function(n,r){return a.createElement(y.a,{onClick:function(){return t.updateCertification(e,r,R.a.NOTCERTIFIED)},isDisabled:n,className:"rejected-icon",key:"reject"},"Reject")};return e.repository_list.includes(R.a.PUBLISHED)?a.createElement("span",null,a.createElement(s.J,{items:[r(!0,R.a.PUBLISHED),o(!1,R.a.PUBLISHED),n]})):e.repository_list.includes(R.a.NOTCERTIFIED)?a.createElement("span",null,a.createElement(s.J,{items:[r(!1,R.a.NOTCERTIFIED),o(!0,R.a.NOTCERTIFIED),n]})):e.repository_list.includes(R.a.NEEDSREVIEW)?a.createElement("span",null,a.createElement(v.a,{onClick:function(){return t.updateCertification(e,R.a.NEEDSREVIEW,R.a.PUBLISHED)}},a.createElement("span",null,"Certify")),a.createElement(s.J,{items:[o(!1,R.a.NEEDSREVIEW),n]})):void 0}},t.prototype.updateCertification=function(e,t,n){var a=this;this.setState({updatingVersions:[]},(function(){return k.c.setRepository(e.namespace,e.name,e.version,t,n).then((function(t){a.setState({updatingVersions:[e]}),a.waitForUpdate(t.data.remove_task_id,e)})).catch((function(t){a.setState({updatingVersions:[],alerts:a.state.alerts.concat({variant:"danger",title:"API Error: "+t.response.status,description:"Could not update the certification status for "+e.namespace+"."+e.name+"."+e.version+"."})})}))}))},t.prototype.waitForUpdate=function(e,t){var n=this,a=e;return k.m.get(a).then((function(e){return N(n,void 0,void 0,(function(){var n=this;return D(this,(function(r){switch(r.label){case 0:return"waiting"!==e.data.state&&"running"!==e.data.state?[3,2]:[4,new Promise((function(e){return setTimeout(e,500)}))];case 1:return r.sent(),this.waitForUpdate(a,t),[3,3];case 2:if("completed"===e.data.state)return[2,k.c.list(this.state.params).then((function(e){return N(n,void 0,void 0,(function(){return D(this,(function(t){return this.setState({versions:e.data.data,updatingVersions:[]}),[2]}))}))}))];this.setState({updatingVersions:[],alerts:this.state.alerts.concat({variant:"danger",title:"API Error: 500",description:"Could not update the certification status for "+t.namespace+"."+t.name+"."+t.version+"."})}),r.label=3;case 3:return[2]}}))}))}))},t.prototype.queryCollections=function(){var e=this;this.setState({loading:!0},(function(){return k.c.list(e.state.params).then((function(t){e.setState({versions:t.data.data,itemCount:t.data.meta.count,loading:!1,updatingVersions:[]})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return O.a.updateParamsMixin()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"closeAlert",{get:function(){return Object(s.P)("alerts")},enumerable:!1,configurable:!0}),t}(a.Component);t.default=Object(c.a)(x);x.contextType=P.a;try{certificationdashboard.displayName="certificationdashboard",certificationdashboard.__docgenInfo={description:"",displayName:"certificationdashboard",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<CertificationDashboard>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/certification-dashboard/certification-dashboard.tsx#certificationdashboard"]={docgenInfo:certificationdashboard.__docgenInfo,name:"certificationdashboard",path:"src/containers/certification-dashboard/certification-dashboard.tsx#certificationdashboard"})}catch(e){}}}]);
//# sourceMappingURL=settings.js.map
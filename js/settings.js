(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{702:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".certification-dasboard .toolbar{padding-bottom:16px;display:flex;justify-content:space-between}.certification-dasboard .control-column{display:flex;justify-content:flex-end;align-items:center}.certification-dasboard .footer{padding-top:16px}.certification-dasboard .updating-spinner{color:var(--pf-global--info-color--100)}\n",""])},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(12);const r=Object(a.a)({name:"WarningTriangleIcon",height:1024,width:1024,svgPath:"M511.488 949.321c6.656 0 13.093-0.878 19.456-2.487s12.142-4.169 17.481-7.461c5.998-3.365 11.118-7.314 15.506-11.995s8.119-10.021 11.483-15.945l437.979-842.24c6.656-11.995 9.801-23.918 9.509-35.913s-3.877-23.918-10.459-35.913c-3.365-5.998-7.168-11.118-11.483-15.506s-9.509-8.192-15.506-11.483c-5.339-2.706-10.971-4.827-16.969-6.51s-12.288-2.487-18.944-2.487h-876.032c-6.656 0-12.946 0.805-18.944 2.487s-11.63 3.803-16.969 6.51c-5.998 3.291-11.118 7.095-15.506 11.483s-8.192 9.509-11.483 15.506c-6.656 11.995-10.094 23.918-10.459 35.913s2.779 23.918 9.509 35.913l437.979 842.24c3.291 5.998 7.095 11.264 11.483 15.945s9.509 8.631 15.506 11.995c5.339 3.291 11.118 5.778 17.481 7.461s12.8 2.487 19.456 2.487zM132.974 73.289h759.296l-380.782 741.595-378.514-741.595zM583.387 156.526c-2.121-5.632-7.534-9.509-13.97-9.509-14.263 0-28.526 0-42.715 0-21.138 0-42.277 0-63.415 0-11.045 0-24.576 0.585-24.576 14.994 0 0 0 44.325 0 44.544 0 8.558 6.437 14.994 14.994 14.994 0 0 115.712 0 115.785 0 8.485 0 14.994-6.437 14.994-14.994 0 0 0-44.544 0-44.544 0-1.975-0.366-3.803-1.024-5.486zM583.826 301.934c-2.121-5.632-7.534-9.509-13.97-9.509-14.263 0-28.526 0-42.715 0-21.138 0-42.277 0-63.415 0-11.045 0-24.576 0.585-24.576 14.994 0 0 0 224.914 0 225.134 0 8.558 6.437 14.994 14.994 14.994 0 0 115.712 0 115.785 0 8.485 0 14.994-6.437 14.994-14.994 0 0 0-225.134 0-225.134 0-1.975-0.366-3.803-1.024-5.486z",yOffset:64,xOffset:0,transform:"rotate(180 0 512) scale(-1 1)"})},715:function(e,t,n){var a=n(702);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},i=n(8)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(702,(function(){var t=n(702);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))},728:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n(372),o=n(40),c=n(687),s=n(118),l=n(203),u=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(t){var n=e.call(this,t)||this;return n.state={tokenData:void 0},n}return u(t,e),t.prototype.componentDidMount=function(){var e=this;window.insights.chrome.auth.getOfflineToken().then((function(t){e.setState({tokenData:t.data})}))},t.prototype.render=function(){var e=this,t=this.state.tokenData;return r.createElement(r.Fragment,null,r.createElement(l.d,{title:"Token management"}),r.createElement(l.t,null,r.createElement(o.Section,{className:"body pf-c-content"},r.createElement("h2",null,"Offline token"),r.createElement("p",null,"Use this token to authenticate the ",r.createElement("code",null,"ansible-galaxy")," ","client."),t?r.createElement("div",null,r.createElement(c.a,null,t.refresh_token)):r.createElement(s.a,{onClick:function(){return e.loadToken()}},"Load token"),r.createElement("h2",null,"Manage tokens"),"To remove an existing token, visit"," ",r.createElement("a",{href:"https://sso.redhat.com/auth/realms/redhat-external/account/",target:"_blank"},"Red Hat SSO account managment"),".")))},t.prototype.loadToken=function(){window.insights.chrome.auth.doOffline()},t}(r.Component);t.default=Object(i.a)(d);try{tokeninsights.displayName="tokeninsights",tokeninsights.__docgenInfo={description:"",displayName:"tokeninsights",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<TokenPage>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/token/token-insights.tsx#tokeninsights"]={docgenInfo:tokeninsights.__docgenInfo,name:"tokeninsights",path:"src/containers/token/token-insights.tsx#tokeninsights"})}catch(e){}},729:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(715),n(3)),i=n(373),o=n(85),c=n(372),s=n(203),l=n(40),u=n(691),d=n(75),f=n(90),p=n(637),m=n(638),h=n(634),g=n(640),y=n(694),b=n(118),E=n(708),v=n(12);const C=Object(v.a)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0,transform:""});const _=Object(v.a)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0,transform:""});const O=Object(v.a)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0,transform:""});var k,w=n(41),S=n(28),P=n(10),R=(k=function(e,t){return(k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}k(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),j=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],o=0,c=i.length;o<c;o++,r++)a[r]=i[o];return a},x=function(e){function t(t){var n=e.call(this,t)||this,a=S.a.parseParamString(t.location.search,["page","page_size"]);return a.page_size||(a.page_size=10),a.sort||(a.sort="-pulp_created"),a.certification||(a.certification=w.b.needsReview),n.state={versions:void 0,itemCount:0,params:a,loading:!0,updatingVersions:[],redirect:void 0,alerts:[]},n}return R(t,e),t.prototype.componentDidMount=function(){var e=this;w.a.isPartnerEngineer().then((function(t){t.data.is_partner_engineer?e.queryCollections():e.setState({redirect:P.a.notFound})}))},t.prototype.render=function(){var e=this,t=this.state,n=t.versions,r=t.params,o=t.itemCount,c=t.loading,p=t.redirect;if(p)return a.createElement(i.a,{to:p});return n?a.createElement(a.Fragment,null,a.createElement(s.d,{title:"Certification dashboard"}),a.createElement(s.b,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),a.createElement(s.t,{className:"certification-dashboard"},a.createElement(l.Section,{className:"body"},a.createElement("div",{className:"toolbar"},a.createElement(u.a,null,a.createElement(d.a,null,a.createElement(f.a,null,a.createElement(s.m,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:r,filterConfig:[{id:"namespace",title:"Namespace"},{id:"name",title:"Collection Name"},{id:"certification",title:"Certification Status",inputType:"select",options:[{id:"not_certified",title:"Rejected"},{id:"needs_review",title:"Needs Review"},{id:"certified",title:"Certified"}]}]})))),a.createElement(s.y,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:o,isTop:!0})),a.createElement("div",null,a.createElement(s.c,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:r,ignoredParams:["page_size","page","sort"]})),c?a.createElement(s.q,null):this.renderTable(n,r),a.createElement("div",{className:"footer"},a.createElement(s.y,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:o}))))):a.createElement(s.r,null)},t.prototype.renderTable=function(e,t){var n=this;if(0===e.length)return a.createElement(p.a,{className:"empty",variant:p.b.full},a.createElement(m.a,{icon:E.a}),a.createElement(h.a,{headingLevel:"h2",size:"lg"},"No matches"),a.createElement(g.a,null,"Please try adjusting your search query."));return a.createElement("table",{"aria-label":"Collection versions",className:"content-table pf-c-table"},a.createElement(s.C,{options:{headers:[{title:"Namespace",type:"alpha",id:"namespace"},{title:"Collection",type:"alpha",id:"collection"},{title:"Version",type:"number",id:"version"},{title:"Date created",type:"number",id:"pulp_created"},{title:"Status",type:"none",id:"status"},{title:"",type:"none",id:"certify"}]},params:t,updateParams:function(e){return n.updateParams(e,(function(){return n.queryCollections()}))}}),a.createElement("tbody",null,e.map((function(e,t){return n.renderRow(e,t)}))))},t.prototype.renderStatus=function(e){if(this.state.updatingVersions.includes(e.id))return a.createElement("span",{className:"fa fa-lg fa-spin fa-spinner"});switch(e.certification){case w.b.certified:return a.createElement("span",null,a.createElement(C,{style:{color:"var(--pf-global--success-color--100)"}})," ","Certified");case w.b.notCertified:return a.createElement("span",null,a.createElement(_,{style:{color:"var(--pf-global--danger-color--100)"}})," ","Rejected");case w.b.needsReview:return a.createElement("span",null,a.createElement(O,{style:{color:"var(--pf-global--info-color--100)"}})," ","Needs Review")}},t.prototype.renderRow=function(e,t){return a.createElement("tr",{"aria-labelledby":e.namespace+"."+e.name+" v"+e.version,key:t},a.createElement("td",null,e.namespace),a.createElement("td",null,e.name),a.createElement("td",null,a.createElement(o.a,{to:Object(P.b)(P.a.collection,{namespace:e.namespace,collection:e.name},{version:e.version})},e.version)),a.createElement("td",null,r(e.created_at).fromNow()),a.createElement("td",null,this.renderStatus(e)),a.createElement("td",null,a.createElement("div",{className:"control-column"},a.createElement("div",null,this.renderButtons(e)))))},t.prototype.renderButtons=function(e){var t=this,n=a.createElement(y.a,{key:"imports",component:a.createElement(o.a,{to:Object(P.b)(P.a.myImports,{},{namespace:e.namespace,name:e.name,version:e.version})},"View Import Logs")}),r=function(n){return a.createElement(y.a,{onClick:function(){return t.updateCertification(e,w.b.certified)},isDisabled:n,key:"certify"},"Certify")},i=function(n){return a.createElement(y.a,{onClick:function(){return t.updateCertification(e,w.b.notCertified)},isDisabled:n,className:"rejected-icon",key:"reject"},"Reject")};switch(e.certification){case w.b.certified:return a.createElement("span",null,a.createElement(s.D,{items:[r(!0),i(!1),n]}));case w.b.notCertified:return a.createElement("span",null,a.createElement(s.D,{items:[r(!1),i(!0),n]}));case w.b.needsReview:return a.createElement("span",null,a.createElement(b.a,{onClick:function(){return t.updateCertification(e,w.b.certified)}},a.createElement("span",null,"Certify")),a.createElement(s.D,{items:[i(!1),n]}))}},t.prototype.updateCertification=function(e,t){var n=this;this.setState({updatingVersions:this.state.updatingVersions.concat([e.id])},(function(){return w.d.setCertifiation(e.namespace,e.name,e.version,t).then((function(){return w.d.list({namespace:e.namespace,name:e.name,version:e.version}).then((function(e){var t=e.data.data[0],a=j(n.state.versions),r=a.findIndex((function(e){return e.id===t.id}));a[r]=t,n.setState({versions:a,updatingVersions:n.state.updatingVersions.filter((function(e){return e!=t.id}))})}))})).catch((function(t){n.setState({updatingVersions:n.state.updatingVersions.filter((function(t){return t!=e.id})),alerts:n.state.alerts.concat({variant:"danger",title:"API Error: "+t.response.status,description:"Could not update the certification status for "+e.namespace+"."+e.name+"."+e.version+"."})})}))}))},t.prototype.queryCollections=function(){var e=this;this.setState({loading:!0},(function(){return w.d.list(e.state.params).then((function(t){return e.setState({versions:t.data.data,itemCount:t.data.meta.count,loading:!1,updatingVersions:[]})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return S.a.updateParamsMixin()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"closeAlert",{get:function(){return Object(s.J)("alerts")},enumerable:!1,configurable:!0}),t}(a.Component);t.default=Object(c.a)(x);try{certificationdashboard.displayName="certificationdashboard",certificationdashboard.__docgenInfo={description:"",displayName:"certificationdashboard",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<CertificationDashboard>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/certification-dashboard/certification-dashboard.tsx#certificationdashboard"]={docgenInfo:certificationdashboard.__docgenInfo,name:"certificationdashboard",path:"src/containers/certification-dashboard/certification-dashboard.tsx#certificationdashboard"})}catch(e){}}}]);
//# sourceMappingURL=settings.js.map
!function(e){function n(n){for(var r,o,a=n[0],c=n[1],i=n[2],l=0,s=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(C,o)&&C[o]&&s.push(C[o][0]),C[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(N&&N(n);s.length;)s.shift()();return I.push.apply(I,i||[]),t()}function t(){for(var e,n=0;n<I.length;n++){for(var t=I[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==C[a]&&(r=!1)}r&&(I.splice(n--,1),e=k(k.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!_[e]||!O[e])return;for(var t in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(y[t]=n[t]);0==--b&&0===g&&D()}(e,n),r&&r(e,n)};var o,a=!0,c="cff32b937d1afac8f903",i=1e4,l={},s=[],u=[];function p(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:E,apply:x,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:l[e]};return o=void 0,n}var d=[],f="idle";function h(e){f=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var m,y,v,b=0,g=0,w={},O={},_={};function P(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(n=i,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=k.p+""+c+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;O={},w={},_=e.c,v=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var t in y={},C)j(t);return"prepare"===f&&0===g&&0===b&&D(),n});var n}function j(e){_[e]?(O[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=k.p+""+e+"."+c+".hot-update.js",document.head.appendChild(n)}(e)):w[e]=!0}function D(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return x(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in y)Object.prototype.hasOwnProperty.call(y,t)&&n.push(P(t));e.resolve(n)}}function x(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,o,a,i;function u(e){for(var n=[e],t={},r=n.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),c=o.id,i=o.chain;if((a=A[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var l=0;l<a.parents.length;l++){var s=a.parents[l],u=A[s];if(u){if(u.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([s]),moduleId:c,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[c]?(t[s]||(t[s]=[]),p(t[s],[c])):(delete t[s],n.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var d={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in y)if(Object.prototype.hasOwnProperty.call(y,w)){var O;i=P(w);var E=!1,j=!1,D=!1,x="";switch((O=y[w]?u(i):{type:"disposed",moduleId:w}).chain&&(x="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+O.moduleId+x));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+x));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(E=new Error("Aborted because "+i+" is not accepted"+x));break;case"accepted":n.onAccepted&&n.onAccepted(O),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),D=!0;break;default:throw new Error("Unexception type "+O.type)}if(E)return h("abort"),Promise.reject(E);if(j)for(i in b[i]=y[i],p(m,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,i)&&(d[i]||(d[i]=[]),p(d[i],O.outdatedDependencies[i]));D&&(p(m,[O.moduleId]),b[i]=g)}var I,S=[];for(r=0;r<m.length;r++)i=m[r],A[i]&&A[i].hot._selfAccepted&&b[i]!==g&&S.push({module:i,errorHandler:A[i].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete C[e]}(e)});for(var H,M,N=m.slice();N.length>0;)if(i=N.pop(),a=A[i]){var L={},T=a.hot._disposeHandlers;for(o=0;o<T.length;o++)(t=T[o])(L);for(l[i]=L,a.hot.active=!1,delete A[i],delete d[i],o=0;o<a.children.length;o++){var U=A[a.children[o]];U&&((I=U.parents.indexOf(i))>=0&&U.parents.splice(I,1))}}for(i in d)if(Object.prototype.hasOwnProperty.call(d,i)&&(a=A[i]))for(M=d[i],o=0;o<M.length;o++)H=M[o],(I=a.children.indexOf(H))>=0&&a.children.splice(I,1);for(i in h("apply"),c=v,b)Object.prototype.hasOwnProperty.call(b,i)&&(e[i]=b[i]);var R=null;for(i in d)if(Object.prototype.hasOwnProperty.call(d,i)&&(a=A[i])){M=d[i];var q=[];for(r=0;r<M.length;r++)if(H=M[r],t=a.hot._acceptedDependencies[H]){if(-1!==q.indexOf(t))continue;q.push(t)}for(r=0;r<q.length;r++){t=q[r];try{t(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:i,dependencyId:M[r],error:e}),n.ignoreErrored||R||(R=e)}}}for(r=0;r<S.length;r++){var F=S[r];i=F.module,s=[i];try{k(i)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:t,originalError:e}),n.ignoreErrored||R||(R=t),R||(R=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:i,error:e}),n.ignoreErrored||R||(R=e)}}return R?(h("fail"),Promise.reject(R)):(h("idle"),new Promise(function(e){e(m)}))}var A={},C={1:0},I=[];function k(n){if(A[n])return A[n].exports;var t=A[n]={i:n,l:!1,exports:{},hot:p(n),parents:(u=s,s=[],u),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=A[e];if(!n)return k;var t=function(t){return n.hot.active?(A[t]?-1===A[t].parents.indexOf(e)&&A[t].parents.push(e):(s=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),k(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(n){k[e]=n}}};for(var a in k)Object.prototype.hasOwnProperty.call(k,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===f&&h("prepare"),g++,k.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===f&&(w[e]||j(e),0===g&&0===b&&D())}},t.t=function(e,n){return 1&n&&(e=t(e)),k.t(e,-2&n)},t}(n)),t.l=!0,t.exports}k.e=function(e){var n=[],t=C[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=C[e]=[n,r]});n.push(t[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,k.nc&&a.setAttribute("nonce",k.nc),a.src=function(e){return k.p+"js/"+({0:"collection_detail~my_imports~namespace_detail~namespace_list~not_found~search",2:"collection_detail",3:"my_imports",4:"namespace_detail",5:"namespace_list",6:"not_found",7:"search"}[e]||e)+".js"}(e);var c=new Error;o=function(n){a.onerror=a.onload=null,clearTimeout(i);var t=C[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,t[1](c)}C[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(n)},k.m=e,k.c=A,k.d=function(e,n,t){k.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,n){if(1&n&&(e=k(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(k.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)k.d(t,r,function(n){return e[n]}.bind(null,r));return t},k.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(n,"a",n),n},k.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},k.p="/beta/apps/automation-hub/",k.oe=function(e){throw console.error(e),e},k.h=function(){return c};var S=window.webpackJsonp=window.webpackJsonp||[],H=S.push.bind(S);S.push=n,S=S.slice();for(var M=0;M<S.length;M++)n(S[M]);var N=H;I.push([44,8]),t()}({13:function(e,n,t){(n=e.exports=t(17)(!1)).i(t(42),""),n.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.body {\n  background-color: white;\n  padding: 16px; }\n\n.clickable {\n  cursor: pointer; }\n",""])},19:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(7),o=function(){function e(){}return e.parseParamString=function(n,t){var r,o={};return new URLSearchParams(n).forEach(function(n,a){r=t&&t.includes(a)?Number(n):n,o=e.appendParam(o,a,r)}),o},e.setParam=function(e,n,t){var o=Object(r.cloneDeep)(e);return o[n]=t,o},e.appendParam=function(e,n,t){var o=Object(r.cloneDeep)(e);return o[n]?Array.isArray(o[n])?o[n].push(t):o[n]=[o[n],t]:o[n]=t,o},e.getReduced=function(e,n){for(var t=Object(r.cloneDeep)(e),o=0,a=n;o<a.length;o++){delete t[a[o]]}return t},e.deleteParam=function(e,n,t){var o=Object(r.cloneDeep)(e);if(t&&Array.isArray(o[n])&&o[n].length>1){var a=o[n].indexOf(t);-1!==a&&o[n].splice(a,1)}else delete o[n];return o},e.paramExists=function(e,n,t){var r=e[n];return!!r&&(Array.isArray(r)?r.includes(t):r===t)},e.getQueryString=function(e,n){for(var t="",r=0,o=Object.keys(e);r<o.length;r++){var a=o[r];if(!n||!n.includes(a))if(Array.isArray(e[a]))for(var c=0,i=e[a];c<i.length;c++){var l=i[c];t+=a+"="+encodeURIComponent(l)+"&"}else t+=a+"="+e[a]+"&"}return t=t.substring(0,t.length-1)},e.updateParamsMixin=function(n){return function(t,r){this.setState({params:t},r),this.props.history.push({pathname:this.props.location.pathname,search:"?"+e.getQueryString(t,n||[])})}},e}()},3:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return r});var r,o=t(19);function a(e,n,t){for(var r=e,a=0,c=Object.keys(n);a<c.length;a++){var i=c[a];r=r.replace(":"+i,n[i])}return t?r+"?"+o.a.getQueryString(t):r}!function(e){e.myCollections="/my-namespaces/:namespace",e.myNamespaces="/my-namespaces",e.editNamespace="/my-namespaces/edit/:namespace",e.myImports="/my-imports",e.search="/",e.collectionDocsPage="/:namespace/:collection/docs/:page",e.collectionDocsIndex="/:namespace/:collection/docs",e.collectionContentDocs="/:namespace/:collection/content/:type/:name",e.collectionContentList="/:namespace/:collection/content",e.collection="/:namespace/:collection",e.namespace="/:namespace",e.partners="/partners",e.notFound="/not-found"}(r||(r={}))},41:function(e,n,t){var r=t(13);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=t(30)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(13,function(){var n=t(13);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)}),e.hot.dispose(function(){a()})},44:function(e,n,t){"use strict";t.r(n);var r,o=t(1),a=t.n(o),c=t(20),i=t.n(c),l=t(46),s=t(9),u=t(26),p=t.n(u),d=t(29);var f,h=t(0),m=t.n(h),y=t(48),v=t(45),b=t(47),g=t(49),w=(f=function(e,n){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}f(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),O=function(){return(O=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},_=function(e,n,t,r){return new(t||(t=Promise))(function(o,a){function c(e){try{l(r.next(e))}catch(e){a(e)}}function i(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(c,i)}l((r=r.apply(e,n||[])).next())})},P=function(e,n){var t,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=n.call(e,c)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};function E(e){return function(n){function t(e){var t=n.call(this,e)||this;return t.state={component:null},t}return w(t,n),t.prototype.componentDidMount=function(){return _(this,void 0,void 0,function(){var n;return P(this,function(t){switch(t.label){case 0:return[4,e()];case 1:return n=t.sent().default,this.setState({component:n}),[2]}})})},t.prototype.render=function(){var e=this.state.component;return e?a.a.createElement(e,O({},this.props)):null},t}(o.Component)}var j=t(27),D=t.n(j),x=t(3),A=function(){return(A=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},C=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},I=E(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,649))}),k=E(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,651))}),S=E(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,652))}),H=E(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,653))}),M=E(function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,654))}),N=E(function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,655))}),L=E(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,656))}),T=E(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,657))}),U=E(function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,658))}),R=E(function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,659))}),q=E(function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,660))}),F=function(e){var n=e.component,t=e.rootClass,r=C(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__"+t,"pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(v.a,A({},r,{component:n}))};F.propTypes={component:m.a.func,rootClass:m.a.string};var G=function(e){var n=e.childProps.location.pathname;return a.a.createElement(b.a,null,a.a.createElement(F,{path:x.a.notFound,component:M,rootClass:"root"}),a.a.createElement(F,{path:x.a.partners,component:U,rootClass:"root"}),a.a.createElement(F,{path:x.a.editNamespace,component:I,rootClass:"root"}),a.a.createElement(F,{path:x.a.myCollections,component:L,rootClass:"root"}),a.a.createElement(F,{path:x.a.myNamespaces,component:N,rootClass:"root"}),a.a.createElement(F,{path:x.a.collectionDocsPage,component:H,rootClass:"root"}),a.a.createElement(F,{path:x.a.collectionDocsIndex,component:H,rootClass:"root"}),a.a.createElement(F,{path:x.a.collectionContentDocs,component:H,rootClass:"root"}),a.a.createElement(F,{path:x.a.collectionContentList,component:S,rootClass:"root"}),a.a.createElement(F,{path:x.a.myImports,component:R,rootClass:"root"}),a.a.createElement(F,{path:x.a.collection,component:k,rootClass:"root"}),a.a.createElement(F,{path:x.a.namespace,component:T,rootClass:"root"}),a.a.createElement(F,{path:x.a.search,component:q,rootClass:"root"}),a.a.createElement(v.a,{render:function(){return D()(x.a,function(e){return e===n})?null:a.a.createElement(g.a,{to:x.a.notFound})}}))},J=(t(41),function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}()),Q=function(){return(Q=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},B=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.firstLoad=!0,n}return J(n,e),n.prototype.componentDidMount=function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("automation-hub"),insights.chrome.navigation(z()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(n){e.firstLoad?e.firstLoad=!1:e.props.history.push("/"+n.navId)}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(z())})},n.prototype.componentWillUnmount=function(){this.appNav(),this.buildNav()},n.prototype.render=function(){return a.a.createElement(G,{childProps:this.props})},n}(o.Component);B.propTypes={history:m.a.object};var X=Object(y.a)(Object(s.connect)()(B));function z(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(n){return Q({},n,{active:n.id===e})})}var V=function(e){var n="/",t=e.split("/");return t.shift(),"beta"===t[0]&&(t.shift(),n="/beta/"),""+n+t[0]+"/"+t[1]};i.a.render(a.a.createElement(s.Provider,{store:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(r)throw new Error("store already initialized");return r=new p.a({},[Object(d.a)()].concat(e))}().getStore()},a.a.createElement(l.a,{basename:V(window.location.pathname)},a.a.createElement(X,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{803:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(19),o=n(6);function a(e,t,n){var a=this;void 0===t&&(t=!1),void 0===n&&(n=function(){return null}),r.b.getCached(this.props.match.params.namespace,this.props.match.params.collection,e,this.state.params,t).then((function(e){a.setState({collection:e},n)})).catch((function(e){a.props.history.push(o.a.notFound)}))}},804:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".main{margin:0px;padding:0px}.header{border-bottom:1px solid #d8d8d8}.docs-container{padding-top:24px;background-color:white}@media (min-width: 1000px){.docs-container{display:flex}}.docs-container .sidebar{min-width:294px;max-width:294px;border-right:1px solid #d8d8d8;padding:0px;padding-top:0px}.docs-container .docs{flex-grow:1;padding:24px;padding-top:0px;min-height:calc(100vh - 250px)}.docs-container .docs table tr:nth-child(2n){background-color:#f2f2f2}.docs-container .docs table td,.docs-container .docs table th{border:1px solid #ccc;padding:5px}\n",""])},814:function(e,t,n){var r=n(804);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(10)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(804,(function(){var t=n(804);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},815:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=b,t.NavHashLink=y;var a=i(n(0)),l=i(n(4)),c=n(45);function i(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,p=null,d=null;function m(){s="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function f(){var e=document.getElementById(s);return null!==e&&(d(e),m(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["scroll","smooth"]);return a.default.createElement(t,r({},n,{onClick:function(t){m(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout((function(){!1===f()&&(null===u&&(u=new MutationObserver(f)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout((function(){m()}),1e4))}),0))}}),e.children)}function b(e){return h(e,c.Link)}function y(e){return h(e,c.NavLink)}var g={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=g,y.propTypes=g},816:function(e,t,n){var r;window,e.exports=(r=n(0),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(1),t),o(n(7),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RenderPluginDoc=void 0;const r=n(2);n(3);class o extends r.Component{constructor(e){super(e),this.CUSTOM_FORMATTERS=/([IBMULC])\(([^)]+)\)/gm,this.state={renderError:!1}}componentDidCatch(e,t){console.log(e),this.setState({renderError:!0})}render(){const{plugin:e}=this.props;if(this.state.renderError)return this.renderError(e);{let t,n,o,a;try{t=this.parseDocString(e),n=this.parseExamples(e),o=this.parseReturn(e),a={synopsis:this.renderSynopsis(t),parameters:this.renderParameters(t.options,e.content_type,this.subOptionsMaxDepth),notes:this.renderNotes(t),examples:this.renderExample(n),returnValues:this.renderReturnValues(o,this.returnContainMaxDepth),shortDescription:this.renderShortDescription(t),deprecated:this.renderDeprecated(t,e.content_name),requirements:this.renderRequirements(t)}}catch(t){return console.log(t),this.renderError(e)}return r.createElement("div",null,r.createElement("h1",null,e.content_type," > ",e.content_name),r.createElement("br",null),a.shortDescription,a.deprecated,this.renderTableOfContents(a),a.synopsis,a.requirements,a.parameters,a.notes,a.examples,a.returnValues)}}renderError(e){return r.createElement(r.Fragment,null,this.props.renderWarning("Documentation Syntax Error: cannot parse plugin documention."),r.createElement("br",null),r.createElement("div",null,e.content_type&&e.content_name?r.createElement("h1",null,e.content_type," > ",e.content_name):null,r.createElement("p",null,"The documentation object for this plugin seems to contain invalid syntax that makes it impossible for Automation Hub to parse. You can still look at the unformatted documentation object bellow if you need to."),r.createElement("h2",null,"Unformatted Documentation"),r.createElement("pre",{className:"plugin-raw"},JSON.stringify(e,null,2))))}parseDocString(e){if(!e.doc_strings)return{description:[],short_description:""};const t=Object.assign({},e.doc_strings.doc);let n=0;const r=(e,t)=>{t>n&&(n=t);for(let n of e)n.description=this.ensureListofStrings(n.description),"object"==typeof n.default&&(n.default=JSON.stringify(n.default)),n.suboptions&&r(n.suboptions,t+1)};return t.options&&r(t.options,0),t.description=this.ensureListofStrings(t.description),this.subOptionsMaxDepth=n,t}parseExamples(e){return e.doc_strings&&"string"==typeof e.doc_strings.examples?e.doc_strings.examples.replace("\n",""):null}parseReturn(e){if(!e.doc_strings)return null;if(!e.doc_strings.return)return null;let t=0;const n=(e,r)=>{r>t&&(t=r);for(let t of e)t.description=this.ensureListofStrings(t.description),t.contains&&n(t.contains,r+1)},r=[...e.doc_strings.return];return n(r,0),this.returnContainMaxDepth=t,r}reactReplace(e,t,n){const o=[];let a,l=0;for(;null!==(a=t.exec(e));)o.push(e.substr(l,t.lastIndex-l-a[0].length)),o.push(n(a)),l=t.lastIndex;return 0===o.length?r.createElement("span",null,e):(l!=e.length-1&&o.push(e.substring(l)),r.createElement("span",null,o.map((e,t)=>r.createElement(r.Fragment,{key:t},e))))}applyDocFormatters(e){const{renderModuleLink:t,renderDocLink:n}=this.props;return this.reactReplace(e,this.CUSTOM_FORMATTERS,e=>{const o=e[0],a=e[1],l=e[2];switch(a){case"L":const e=l.split(",");return n(e[0],e[1]);case"U":return r.createElement("a",{href:l,target:"_blank"},l);case"I":return r.createElement("i",null,l);case"C":return r.createElement("span",{className:"inline-code"},l);case"M":return t(l);case"B":return r.createElement("b",null,l);default:return o}})}ensureListofStrings(e){return"string"==typeof e?[e]:e||[]}renderDeprecated(e,t){if(!e.deprecated&&!t.startsWith("_"))return null;const n=e.deprecated||{};return r.createElement(r.Fragment,null,r.createElement("h2",null,"DEPRECATED"),n.removed_in?r.createElement("div",null,r.createElement("b",null,"Removed in version")," ",e.deprecated.removed_in):null,r.createElement("div",null,r.createElement("b",null,"Why: "),n.why?e.deprecated.why:"No reason specified."),r.createElement("div",null,r.createElement("b",null,"Alternative: "),n.alternative?e.deprecated.alternative:"No alternatives specified."))}renderTableOfContents(e){return r.createElement("ul",null,null!==e.synopsis&&r.createElement("li",null,this.props.renderTableOfContentsLink("Synopsis","synopsis")),null!==e.parameters&&r.createElement("li",null,this.props.renderTableOfContentsLink("Parameters","parameters")),null!==e.notes&&r.createElement("li",null,this.props.renderTableOfContentsLink("Notes","notes")),null!==e.examples&&r.createElement("li",null,this.props.renderTableOfContentsLink("Examples","examples")),null!==e.returnValues&&r.createElement("li",null,this.props.renderTableOfContentsLink("Return Values","return-values")))}renderShortDescription(e){return r.createElement("div",null,e.short_description)}renderSynopsis(e){return r.createElement(r.Fragment,null,r.createElement("h2",{id:"synopsis"},"Synopsis"),r.createElement("ul",null,e.description.map((e,t)=>r.createElement("li",{key:t},this.applyDocFormatters(e)))))}renderParameters(e,t,n){if(!e)return null;const o=this.renderParameterEntries(e,t,0,n,"");return r.createElement(r.Fragment,null,r.createElement("h2",{id:"parameters"},"Parameters"),r.createElement("table",{className:"options-table"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",{colSpan:n+1},"Parameter"),r.createElement("th",null,"Choices/",r.createElement("span",{className:"blue"},"Defaults")),"module"!==t?r.createElement("th",null,"Configuration"):null,r.createElement("th",null,"Comments")),o)))}renderParameterEntries(e,t,n,o,a){let l=[];return e.forEach((e,c)=>{const i=[],s=`${a}-${e.name}`;for(let e=0;e<n;e++)i.push(r.createElement("td",{key:e,className:"spacer"}));l.push(r.createElement("tr",{key:s},i,r.createElement("td",{colSpan:o+1-n,className:e.suboptions?"parent":""},r.createElement("span",{className:"option-name"},e.name),r.createElement("small",null,this.documentedType(e.type),e.elements?r.createElement("span",null," ","/ elements =",this.documentedType(e.elements)):null,e.required?r.createElement("span",null," ","/ ",r.createElement("span",{className:"red"},"required")):null)),r.createElement("td",null,this.renderChoices(e)),"module"!==t?r.createElement("td",null,this.renderPluginConfiguration(e)):null,r.createElement("td",null,e.description.map((e,t)=>r.createElement("p",{key:t},this.applyDocFormatters(e))),e.aliases?r.createElement("small",null,r.createElement("span",{className:"green"},"aliases: ",e.aliases.join(", "))):null))),e.suboptions&&(l=l.concat(this.renderParameterEntries(e.suboptions,t,n+1,o,s)))}),l}renderPluginConfiguration(e){return r.createElement(r.Fragment,null,e.ini?r.createElement("div",{className:"plugin-config"},"ini entries:",e.ini.map((e,t)=>r.createElement("p",{key:t},"[",e.section,"]",r.createElement("br",null),e.key," = ",e.default?e.default:"VALUE"))):null,e.env?r.createElement("div",{className:"plugin-config"},e.env.map((e,t)=>r.createElement("div",{key:t},"env: ",e.name))):null,e.vars?r.createElement("div",{className:"plugin-config"},e.vars.map((e,t)=>r.createElement("div",null,"var: ",e.name))):null)}renderChoices(e){let t,n;return"bool"===e.type?(t=["no","yes"],!0===e.default?n="yes":!1===e.default&&(n="no")):(t=e.choices||[],n=e.default),r.createElement(r.Fragment,null,t&&Array.isArray(t)&&0!==t.length?r.createElement("div",null,r.createElement("span",{className:"option-name"},"Choices: "),r.createElement("ul",null,t.map((e,t)=>r.createElement("li",{key:t},e===n?r.createElement("span",{className:"blue"},e,"  ←"):e)))):null,n&&!t.includes(n)?r.createElement("span",null,r.createElement("span",{className:"option-name"},"Default: "),r.createElement("span",{className:"blue"},n)):null)}renderNotes(e){return e.notes?r.createElement(r.Fragment,null,r.createElement("h2",{id:"notes"},"Notes"),r.createElement("ul",null,e.notes.map((e,t)=>r.createElement("li",{key:t},this.applyDocFormatters(e))))):null}renderRequirements(e){return e.requirements?r.createElement(r.Fragment,null,r.createElement("h2",null,"Requirements"),r.createElement("ul",null,e.requirements.map((e,t)=>r.createElement("li",{key:t},e)))):null}renderExample(e){return e?r.createElement(r.Fragment,null,r.createElement("h2",{id:"examples"},"Examples"),r.createElement("pre",null,e)):null}renderReturnValues(e,t){return e?r.createElement(r.Fragment,null,r.createElement("h2",{id:"return-values"},"Return Values"),r.createElement("table",{className:"options-table"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",{colSpan:t+1},"Key"),r.createElement("th",null,"Returned"),r.createElement("th",null,"Description")),this.renderReturnValueEntries(e,0,t,"")))):null}renderReturnValueEntries(e,t,n,o){let a=[];return e.forEach((e,l)=>{const c=[];for(let e=0;e<t;e++)c.push(r.createElement("td",{key:e,colSpan:1,className:"spacer"}));const i=`${o}-${e.name}`;a.push(r.createElement("tr",{key:i},c,r.createElement("td",{colSpan:n+1-t,className:e.contains?"parent":""},e.name," ",r.createElement("br",null)," (",e.type,")"),r.createElement("td",null,e.returned),r.createElement("td",null,e.description.map((e,t)=>r.createElement("p",{key:t},this.applyDocFormatters(e))),e.sample?r.createElement("div",null,r.createElement("br",null),"sample:","string"==typeof e.sample?e.sample:r.createElement("pre",null,JSON.stringify(e.sample,null,2))):null))),e.contains&&(a=a.concat(this.renderReturnValueEntries(e.contains,t+1,n,i)))}),a}documentedType(e){switch(e){case"str":return"string";case"bool":return"boolean";case"int":return"integer";case"dict":return"dictionary";case void 0:return"-";default:return e}}}t.RenderPluginDoc=o},function(e,t){e.exports=r},function(e,t,n){var r=n(4),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],i=t.base?c[0]+t.base:c[0],s=n[i]||0,u="".concat(i," ").concat(s);n[i]=s+1;var p=l(u),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(a[p].references++,a[p].updater(d)):a.push({identifier:u,updater:h(d,t),references:1}),r.push(u)}return r}function i(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=o(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function d(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(e,t){var n,r,o;if(t.singleton){var a=f++;n=m||(m=i(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=i(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);a[o].references--}for(var i=c(e,t),s=0;s<n.length;s++){var u=l(n[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){(t=n(6)(!1)).push([e.i,".options-table{border-bottom:1px solid black;width:100%}.options-table td,.options-table th{border:1px solid black;padding:5px;vertical-align:top}.options-table ul{margin-top:0px}.options-table small{margin-bottom:0px}.options-table .spacer{width:20px;border-top:0px;border-bottom:0px}.options-table .parent{border-bottom:0px}.blue{color:var(--pf-global--info-color--100)}.red{color:var(--pf-global--danger-color--100)}.green{color:var(--pf-global--success-color--200)}.option-name{font-weight:bold}.plugin-config{margin-bottom:16px}.plugin-raw{white-space:pre-wrap}.inline-code{background-color:#e6e9e9;font-family:var(--pf-global--FontFamily--monospace);display:inline-block;border-radius:2px;padding:0px 2px 0px 2px}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,o,a=e[1]||"",l=e[3];if(!l)return a;if(t&&"function"==typeof btoa){var c=(n=l,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),i=l.sources.map((function(e){return"/*# sourceURL=".concat(l.sourceRoot||"").concat(e," */")}));return[a].concat(i).concat([c]).join("\n")}return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var i=[].concat(e[c]);r&&o[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlobType=t.PluginContentType=void 0,t.PluginContentType=class{},t.DocsBlobType=class{}}]))},827:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n(412),l=n(46),c=n(234),i=n(803),s=n(16),u=n(6),p=n(77),d=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=function(e){function t(t){var n=e.call(this,t)||this,r=s.a.parseParamString(t.location.search);return n.state={collection:void 0,params:r},n}return d(t,e),t.prototype.componentDidMount=function(){this.loadCollection(this.context.selectedRepo)},t.prototype.render=function(){var e=this,t=this.state,n=t.collection,r=t.params,a="partners".charAt(0).toUpperCase()+"partners".slice(1);if(!n)return o.createElement(c.s,null);var i=[{url:u.a.partners,name:a},{url:Object(u.b)(u.a.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{name:n.name}];return o.createElement(o.Fragment,null,o.createElement(c.j,{collection:n,params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:i,activeTab:"details",repo:this.context.selectedRepo}),o.createElement(c.v,null,o.createElement(l.Section,{className:"body"},o.createElement(c.k,m({},n,{updateParams:function(t){return e.updateParams(t)},params:this.state.params})))))},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return i.a},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return s.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t}(o.Component);t.default=Object(a.a)(f),f.contextType=p.a;try{collectiondetail.displayName="collectiondetail",collectiondetail.__docgenInfo={description:"",displayName:"collectiondetail",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<CollectionDetail>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/collection-detail/collection-detail.tsx#collectiondetail"]={docgenInfo:collectiondetail.__docgenInfo,name:"collectiondetail",path:"src/containers/collection-detail/collection-detail.tsx#collectiondetail"})}catch(e){}},828:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n(412),l=n(46),c=n(234),i=n(803),s=n(16),u=n(6),p=n(77),d=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(t){var n=e.call(this,t)||this,r=s.a.parseParamString(t.location.search);return n.state={collection:void 0,params:r},n}return d(t,e),t.prototype.componentDidMount=function(){this.loadCollection(this.context.selectedRepo)},t.prototype.render=function(){var e=this,t=this.state,n=t.collection,r=t.params,a="partners".charAt(0).toUpperCase()+"partners".slice(1);if(!n)return o.createElement(c.s,null);var i=[{url:u.a.partners,name:a},{url:Object(u.b)(u.a.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:Object(u.b)(u.a.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:"Content"}];return o.createElement(o.Fragment,null,o.createElement(c.j,{collection:n,params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:i,activeTab:"contents",repo:this.context.selectedRepo}),o.createElement(c.v,null,o.createElement(l.Section,{className:"body"},o.createElement(c.i,{contents:n.latest_version.contents,collection:n.name,namespace:n.namespace.name,params:r,updateParams:function(t){return e.updateParams(t)}}))))},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return i.a},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return s.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t}(o.Component);t.default=Object(a.a)(m),m.contextType=p.a;try{collectioncontent.displayName="collectioncontent",collectioncontent.__docgenInfo={description:"",displayName:"collectioncontent",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<CollectionContent>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/collection-detail/collection-content.tsx#collectioncontent"]={docgenInfo:collectioncontent.__docgenInfo,name:"collectioncontent",path:"src/containers/collection-detail/collection-content.tsx#collectioncontent"})}catch(e){}},829:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=(n(814),n(107)),l=n(412),c=n(46),i=n(815),s=n(798),u=n(733),p=n(734),d=n(729),m=n(736),f=n(784),h=n(234),b=n(816),y=n(803),g=n(21),E=n(6),v=n(77),_=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),x=function(e){function t(t){var n=e.call(this,t)||this,r=g.a.parseParamString(t.location.search);return n.state={collection:void 0,params:r},n.docsRef=o.createRef(),n}return _(t,e),t.prototype.componentDidMount=function(){this.loadCollection(this.context.selectedRepo)},t.prototype.render=function(){var e,t,n=this,r=this.state,a=r.params,l=r.collection,u=this.props.match.params,p="partners".charAt(0).toUpperCase()+"partners".slice(1);if(!l)return o.createElement(h.s,null);var d=u.type||"docs",m=u.name||u.page||null;if("docs"===d&&m){if(l.latest_version.docs_blob.documentation_files){var f=l.latest_version.docs_blob.documentation_files.find((function(e){return Object(g.e)(e.name)===u.page}));f&&(e=f.html)}}else if(m){if(l.latest_version.docs_blob.contents){var y=l.latest_version.docs_blob.contents.find((function(e){return e.content_type===d&&e.content_name===m}));y&&("role"===d?e=y.readme_html:t=y)}}else l.latest_version.docs_blob.collection_readme&&(e=l.latest_version.docs_blob.collection_readme.html);var v=[{url:E.a.partners,name:p},{url:Object(E.b)(E.a.namespaceByRepo,{namespace:l.namespace.name,repo:this.context.selectedRepo}),name:l.namespace.name},{url:Object(E.b)(E.a.collectionByRepo,{namespace:l.namespace.name,collection:l.name,repo:this.context.selectedRepo}),name:l.name},{name:"Documentation"}];return this.docsRef.current&&this.docsRef.current.scrollIntoView(),o.createElement(o.Fragment,null,o.createElement(h.j,{collection:l,params:a,updateParams:function(e){return n.updateParams(e,(function(){return n.loadCollection(n.context.selectedRepo,!0)}))},breadcrumbs:v,activeTab:"documentation",className:"header",repo:this.context.selectedRepo}),o.createElement(h.v,{className:"main"},o.createElement(c.Section,{className:"docs-container"},o.createElement(h.L,{className:"sidebar",namespace:l.namespace.name,collection:l.name,docs_blob:l.latest_version.docs_blob,selectedName:m,selectedType:d,params:a}),o.createElement("div",{className:"body docs pf-c-content",ref:this.docsRef},e||t?e?o.createElement("div",{dangerouslySetInnerHTML:{__html:e}}):o.createElement(b.RenderPluginDoc,{plugin:t,renderModuleLink:function(e){return n.renderModuleLink(e,l,a,l.latest_version.contents)},renderDocLink:function(e,t){return n.renderDocLink(e,t,l,a)},renderTableOfContentsLink:function(e,t){return o.createElement(i.HashLink,{to:"#"+t},e)},renderWarning:function(e){return o.createElement(s.a,{isInline:!0,variant:"warning",title:e})}}):this.renderNotFound(l.name)))))},t.prototype.renderDocLink=function(e,t,n,r){return t.startsWith("http")?o.createElement("a",{href:t,target:"_blank"},e):o.createElement(a.a,{to:Object(E.b)(E.a.collectionDocsPageByRepo,{namespace:n.namespace.name,collection:n.name,page:Object(g.e)(t),repo:this.context.selectedRepo},r)},e)},t.prototype.renderModuleLink=function(e,t,n,r){return r.find((function(t){return"module"===t.content_type&&t.name===e}))?o.createElement(a.a,{to:Object(E.b)(E.a.collectionContentDocsByRepo,{namespace:t.namespace.name,collection:t.name,type:"module",name:e,repo:this.context.selectedRepo},n)},e):e},t.prototype.renderNotFound=function(e){return o.createElement(u.a,{className:"empty",variant:u.b.full},o.createElement(p.a,{icon:f.a}),o.createElement(d.a,{headingLevel:"h2",size:"lg"},"Not found"),o.createElement(m.a,null,"The file you're looking for doesn't seem to be available in this version of ",e,"."))},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return y.a},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return g.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t}(o.Component);t.default=Object(l.a)(x),x.contextType=v.a;try{collectiondocs.displayName="collectiondocs",collectiondocs.__docgenInfo={description:"",displayName:"collectiondocs",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<CollectionDocs>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/collection-detail/collection-docs.tsx#collectiondocs"]={docgenInfo:collectiondocs.__docgenInfo,name:"collectiondocs",path:"src/containers/collection-detail/collection-docs.tsx#collectiondocs"})}catch(e){}},830:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n(412),l=n(46),c=n(19),i=n(234),s=n(803),u=n(16),p=n(6),d=n(77),m=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(t){var n=e.call(this,t)||this,r=u.a.parseParamString(t.location.search);return n.state={collection:void 0,params:r,loadingImports:!0,selectedImportDetail:void 0,selectedImport:void 0,apiError:void 0},n}return m(t,e),t.prototype.componentDidMount=function(){this.loadData()},t.prototype.render=function(){var e=this,t=this.state,n=t.collection,r=t.params,a=t.loadingImports,c=t.selectedImportDetail,s=t.selectedImport,u=t.apiError,d="partners".charAt(0).toUpperCase()+"partners".slice(1);if(!n)return o.createElement(i.s,null);var m=[{url:p.a.partners,name:d},{url:Object(p.b)(p.a.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:Object(p.b)(p.a.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:"Import log"}];return o.createElement(o.Fragment,null,o.createElement(i.j,{collection:n,params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadData(!0)}))},breadcrumbs:m,activeTab:"import-log",repo:this.context.selectedRepo}),o.createElement(i.v,null,o.createElement(l.Section,{className:"body"},o.createElement(i.p,{loading:a,task:c,followMessages:!1,setFollowMessages:function(e){return null},selectedImport:s,apiError:u,hideCollectionName:!0}))))},t.prototype.loadData=function(e){var t=this;void 0===e&&(e=!1);var n="Could not load import log";this.setState({loadingImports:!0},(function(){t.loadCollection(t.context.selectedRepo,e,(function(){c.f.list({namespace:t.state.collection.namespace.name,name:t.state.collection.name,version:t.state.collection.latest_version.version,sort:"-created"}).then((function(e){var r=e.data.data[0];c.f.get(r.id).then((function(e){t.setState({apiError:void 0,loadingImports:!1,selectedImport:r,selectedImportDetail:e.data})})).catch((function(e){t.setState({apiError:n,loadingImports:!1})}))})).catch((function(e){t.setState({apiError:n,loadingImports:!1})}))}))}))},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return s.a},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return u.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t}(o.Component);t.default=Object(a.a)(f),f.contextType=d.a;try{collectionimportlog.displayName="collectionimportlog",collectionimportlog.__docgenInfo={description:"",displayName:"collectionimportlog",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<CollectionImportLog>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/collection-detail/collection-import-log.tsx#collectionimportlog"]={docgenInfo:collectionimportlog.__docgenInfo,name:"collectionimportlog",path:"src/containers/collection-detail/collection-import-log.tsx#collectionimportlog"})}catch(e){}}}]);
//# sourceMappingURL=collection_detail.js.map
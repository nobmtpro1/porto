"use strict";(self.vcvWebpackJsonp4x=self.vcvWebpackJsonp4x||[]).push([["wpbase"],{"./public/base.js":function(e,t,n){var o=n("./node_modules/vc-cake/index.js"),r=n.n(o);n("./public/variables.js"),n("./public/editor/services/dataManager/service.ts"),n("./public/editor/services/utils/service.ts"),n("./public/editor/services/dataProcessor/service.ts");(0,window.jQuery)((function(){r().env("platform","wordpress").start((function(){r().env("editor","import")}))})),!0===r().env("VCV_DEBUG")&&(window.app=r())},"./public/variables.js":function(e,t,n){var o=n("./node_modules/vc-cake/index.js");if(void 0!==window.VCV_ENV){var r=window.VCV_ENV();Object.keys(r).forEach((function(e){(0,o.env)(e,r[e])})),r.VCV_DEBUG&&(0,o.env)("debug",!0)}},"./public/editor/services/dataManager/service.ts":function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n("./node_modules/vc-cake/index.js"));let i={};const a={get:e=>Object.prototype.hasOwnProperty.call(i,e)?i[e]():null,set:(e,t)=>{i[e]=()=>t},reset(){i={sourceID:()=>window.vcvSourceID,nonce:()=>window.vcvNonce,localizations:()=>window.VCV_I18N?window.VCV_I18N():{},adminAjaxUrl:()=>window.vcvAdminAjaxUrl,editorType:()=>window.VCV_EDITOR_TYPE?window.VCV_EDITOR_TYPE():"default",pageTemplates:()=>window.VCV_PAGE_TEMPLATES?window.VCV_PAGE_TEMPLATES():"",showFeedbackForm:()=>window.VCV_SHOW_FEEDBACK_FORM&&window.VCV_SHOW_FEEDBACK_FORM(),showInitialHelpers:()=>window.VCV_SHOW_INITIAL_HELPERS&&window.VCV_SHOW_INITIAL_HELPERS(),showDataCollectionPopup:()=>window.VCV_SHOW_DATA_COLLECTION_POPUP&&window.VCV_SHOW_DATA_COLLECTION_POPUP(),hubGetElements:()=>window.VCV_HUB_GET_ELEMENTS?window.VCV_HUB_GET_ELEMENTS():{},elementsGlobalsUrl:()=>window.vcvElementsGlobalsUrl,activationType:()=>window.vcvActivationType,activationFinishedUrl:()=>window.vcvActivationFinishedUrl,hubGetAddonTeaser:()=>window.VCV_HUB_GET_ADDON_TEASER?window.VCV_HUB_GET_ADDON_TEASER():{},hubGetAddons:()=>window.VCV_HUB_GET_ADDONS?window.VCV_HUB_GET_ADDONS():{},hubGetMigratedToFreeAddons:()=>window.VCV_HUB_GET_MIGRATED_TO_FREE_ADDONS?window.VCV_HUB_GET_MIGRATED_TO_FREE_ADDONS():{},addonElementPresets:()=>window.VCV_ADDON_ELEMENT_PRESETS?window.VCV_ADDON_ELEMENT_PRESETS():[],hubGetGroups:()=>window.VCV_HUB_GET_GROUPS?window.VCV_HUB_GET_GROUPS():{},hubGetCategories:()=>window.VCV_HUB_GET_CATEGORIES?window.VCV_HUB_GET_CATEGORIES():{},hubGetTeaser:()=>window.VCV_HUB_GET_TEASER?window.VCV_HUB_GET_TEASER():{},hubGetTemplatesTeaser:()=>window.VCV_HUB_GET_TEMPLATES_TEASER?window.VCV_HUB_GET_TEMPLATES_TEASER():{},getSharedAssets:()=>window.VCV_GET_SHARED_ASSETS?window.VCV_GET_SHARED_ASSETS():{},isPremiumActivated:()=>window.vcvIsPremiumActivated,pageTemplatesLayoutsCurrent:()=>window.VCV_PAGE_TEMPLATES_LAYOUTS_CURRENT&&window.VCV_PAGE_TEMPLATES_LAYOUTS_CURRENT(),pageTemplatesLayouts:()=>window.VCV_PAGE_TEMPLATES_LAYOUTS&&window.VCV_PAGE_TEMPLATES_LAYOUTS(),pageTemplatesLayoutsAll:()=>window.VCV_PAGE_TEMPLATES_LAYOUTS_ALL&&window.VCV_PAGE_TEMPLATES_LAYOUTS_ALL(),headerTemplates:()=>window.VCV_HEADER_TEMPLATES&&window.VCV_HEADER_TEMPLATES(),sidebarTemplates:()=>window.VCV_SIDEBAR_TEMPLATES&&window.VCV_SIDEBAR_TEMPLATES(),footerTemplates:()=>window.VCV_FOOTER_TEMPLATES&&window.VCV_FOOTER_TEMPLATES(),showPremiumPromoPopup:()=>window.VCV_SHOW_PREMIUM_PROMO_POPUP&&window.VCV_SHOW_PREMIUM_PROMO_POPUP(),tutorialPageUrl:()=>window.VCV_TUTORIAL_PAGE_URL&&window.VCV_TUTORIAL_PAGE_URL(),tutorialPageCapability:()=>window.VCV_TUTORIAL_PAGE_CAPABILITY&&window.VCV_TUTORIAL_PAGE_CAPABILITY(),createNewUrl:()=>window.VCV_CREATE_NEW_URL&&window.VCV_CREATE_NEW_URL(),createNewText:()=>window.VCV_CREATE_NEW_TEXT&&window.VCV_CREATE_NEW_TEXT(),manageOptions:()=>window.VCV_MANAGE_OPTIONS&&window.VCV_MANAGE_OPTIONS(),vcvManageOptions:()=>window.vcvManageOptions,updateUrl:()=>window.VCV_UPDATE_URL&&window.VCV_UPDATE_URL(),goPremiumUrlWithRef:()=>window.vcvGoPremiumUrlWithRef,goPremiumUrl:()=>window.vcvGoPremiumUrl,gettingStartedUrl:()=>window.vcvGettingStartedUrl,authorApiKey:()=>window.VCV_AUTHOR_API_KEY&&window.VCV_AUTHOR_API_KEY(),updateActions:()=>window.VCV_UPDATE_ACTIONS&&window.VCV_UPDATE_ACTIONS(),slug:()=>window.VCV_SLUG&&window.VCV_SLUG(),updateProcessActionUrl:()=>window.VCV_UPDATE_PROCESS_ACTION_URL&&window.VCV_UPDATE_PROCESS_ACTION_URL(),updateGlobalVariablesUrl:()=>window.VCV_UPDATE_GLOBAL_VARIABLES_URL&&window.VCV_UPDATE_GLOBAL_VARIABLES_URL(),updateVendorUrl:()=>window.VCV_UPDATE_VENDOR_URL&&window.VCV_UPDATE_VENDOR_URL(),updateWPBundleUrl:()=>window.VCV_UPDATE_WP_BUNDLE_URL&&window.VCV_UPDATE_WP_BUNDLE_URL(),licenseType:()=>window.VCV_LICENSE_TYPE&&window.VCV_LICENSE_TYPE(),rebuildPostSkipPost:()=>window.vcvRebuildPostSkipPost,errorReportUrl:()=>window.VCV_ERROR_REPORT_URL&&window.VCV_ERROR_REPORT_URL(),supportUrl:()=>window.VCV_SUPPORT_URL&&window.VCV_SUPPORT_URL(),licenseKey:()=>window.VCV_LICENSE_KEY&&window.VCV_LICENSE_KEY(),apiUrl:()=>window.VCV_API_URL&&window.VCV_API_URL(),pluginUrl:()=>window.VCV_PLUGIN_URL&&window.VCV_PLUGIN_URL(),licenseUnsplashAuthorApiKey:()=>window.VCV_LICENSE_UNSPLASH_AUTHOR_API_KEY&&window.VCV_LICENSE_UNSPLASH_AUTHOR_API_KEY(),createMenuUrl:()=>window.vcvCreateMenuUrl,utm:()=>window.VCV_UTM?window.VCV_UTM():{},hubServerTime:()=>window.VCV_HUB_SERVER_TIME&&window.VCV_HUB_SERVER_TIME(),pageList:()=>window.VCV_PAGE_LIST,excerpt:()=>window.VCV_EXCERPT,authorList:()=>window.VCV_AUTHOR_LIST,commentStatus:()=>window.VCV_COMMENT_STATUS,pingStatus:()=>window.VCV_PING_STATUS,manageMenuUrl:()=>window.vcvManageMenuUrl,featuredImage:()=>window.VCV_FEATURED_IMAGE&&window.VCV_FEATURED_IMAGE(),postData:()=>window.vcvPostData||{},hubTeaserShowBadge:()=>window.vcvHubTeaserShowBadge,tags:()=>window.VCV_TAGS,categories:()=>window.VCV_CATEGORIES,pluginVersion:()=>window.VCV_PLUGIN_VERSION&&window.VCV_PLUGIN_VERSION(),frontEndError:()=>window.vcvFeError||"default",pageEditableNonce:()=>window.vcvPageEditableNonce,freezeReady:()=>window.vcvFreezeReady,ajaxUrl:()=>window.vcvAjaxUrl,pluginSourceUrl:()=>window.vcvPluginSourceUrl,gutenbergEditorUrl:()=>window.vcvGutenbergEditorUrl?window.vcvGutenbergEditorUrl:"/wp-admin/post-new.php?post_type=vcv_gutenberg_attr",hubGetTemplates:()=>window.VCV_HUB_GET_TEMPLATES&&window.VCV_HUB_GET_TEMPLATES(),agreeHubTerms:()=>window.vcvAgreeHubTerms,showPricingPopup:()=>window.vcvShowPricingPopup,isWpNativeLazyLoadExist:()=>window.VCV_IS_WP_NATIVE_LAZY_LOAD_EXIST&&window.VCV_IS_WP_NATIVE_LAZY_LOAD_EXIST(),globalSettings:()=>window.VCV_GLOBAL_DATA&&window.VCV_GLOBAL_DATA(),isBinaryContent:()=>window.VCV_IS_BINARY_CONTENT&&window.VCV_IS_BINARY_CONTENT(),isEnvJsSaveZip:()=>window.VCV_JS_SAVE_ZIP&&window.VCV_JS_SAVE_ZIP(),globalTemplatesList:()=>window.vcvGlobalTemplatesList}}};a.reset(),r.default.addService("dataManager",a)},"./public/editor/services/dataProcessor/service.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const o=n("./node_modules/vc-cake/index.js"),r=(0,o.getService)("utils");let i=[],a=1;const s={http(e){const t=function(e,t,n,r){const s=new Promise((function(i,a){const s=new window.XMLHttpRequest;s.open(e,t);let d="";(0,o.getService)("dataManager").get("isEnvJsSaveZip")?(n instanceof Blob?(s.setRequestHeader("Content-type","application/octet-stream"),s.setRequestHeader("Content-Transfer-Encoding","binary")):s.setRequestHeader("Content-type",r),n&&(d=n instanceof Blob?n:window.jQuery.param(n))):(s.setRequestHeader("Content-type",r),n&&(d=window.jQuery.param(n)));try{s.send(d)}catch(w){a(w?"Error occurred: "+w:"Error occured")}s.onload=function(){this.status>=200&&this.status<300?i(this.response):a(this.statusText)},s.onerror=function(){a(this.statusText)}})),d=a;return s.key=d,a++,i.push(s),s.catch((e=>{throw console.warn("Ajax Request rejected",e),i=i.filter((e=>e.key!==d)),e}))};return{url:e,get(e){return this.ajax("GET",e,"")},post(e){return this.ajax("POST",e,"application/x-www-form-urlencoded")},put(e){return this.ajax("PUT",e,"application/x-www-form-urlencoded")},delete(e){return this.ajax("DELETE",e,"")},ajax(e,n,o){return t(e,this.url,n,o)}}},appServerRequest(e){return this.getServerRequest("ajaxUrl",e)},appAdminServerRequest(e){return this.getServerRequest("adminAjaxUrl",e)},getServerRequest(e,t){const n=(0,o.getService)("dataManager"),i=n.get(e);if(t=Object.assign({"vcv-nonce":n.get("nonce"),"vcv-source-id":n.get("sourceID")},t),n.get("isEnvJsSaveZip")){const e=r.compressData(t);t=e instanceof Blob?e:{"vcv-zip":e}}return this.http(i).post(t)},loadScript(e,t){return this.http(e).ajax("get",void 0,"application/javascript").then((e=>{const n=document.createElement("script");n.innerHTML=e,t?t.appendChild(n):document.body.appendChild(n)}))},appAllDone(){return Promise.all(i).then((()=>{i=[]}))}};(0,o.addService)("dataProcessor",s)},"./public/editor/services/utils/service.ts":function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n("./node_modules/vc-cake/index.js"),i=n("./node_modules/pako/index.js"),a=o(n("./node_modules/base-64/base64.js")),s="rtl"===window.getComputedStyle(document.body).direction,d={ajaxRequests:[],ajaxCall:!1,base64encode:a.default.encode,base64decode:a.default.decode,createKey:()=>{let e="";for(let t=0;t<8;t++){const n=16*Math.random()|0;8!==t&&12!==t&&16!==t&&20!==t||(e+="-"),e+=(12===t?4:16===t?3&n|8:n).toString(16)}return e},setCookie(e,t,n=256){const o=new Date;o.setDate(o.getDate()+n);const r=encodeURIComponent(t)+(null===n?"":"; expires="+o.toUTCString());document.cookie=e+"="+r},getCookie(e){let t,n,o;const r=document.cookie.split(";");for(t=0;t<r.length;t++)if(n=r[t].substr(0,r[t].indexOf("=")),o=r[t].substr(r[t].indexOf("=")+1),n=n.replace(/(^\s+|\s+)$/g,""),n===e)return decodeURIComponent(o)},hasCookie(e){return!!this.getCookie(e)},getRealWidth:(e,t)=>{const n=e.cloneNode(!0);let o=0;if(n.style.position="fixed",t.appendChild(n),o=n.offsetWidth,0===o)return n.remove(),0;const r=window.getComputedStyle(n,null);return o+=parseInt(r.marginLeft)+parseInt(r.marginRight),n.remove(),o},compressData(e){const t=(0,i.deflate)(JSON.stringify(e)),n=(0,r.getService)("dataManager");if(e["vcv-check-content-zip-type"]||n.get("isBinaryContent"))e=new Blob([new Uint8Array(t)],{type:"application/octet-stream"});else{let n="";const o=new Uint8Array(t),r=o.byteLength;for(let e=0;e<r;e++)n+=String.fromCharCode(o[e]);e=a.default.encode(n)}return e},ajax:(e,t,n)=>{const o=(0,r.getService)("dataManager"),i=new window.XMLHttpRequest;i.open("POST",o.get("adminAjaxUrl"),!0),i.onload=()=>{i.status>=200&&i.status<400?t(i):"function"==typeof n&&n(i)},i.onerror=()=>{"function"==typeof n&&n(i)};let a=window.jQuery.param(e);if(o.get("isEnvJsSaveZip")){const t=(0,r.getService)("utils").compressData(e);t instanceof Blob?(i.setRequestHeader("Content-type","application/octet-stream"),i.setRequestHeader("Content-Transfer-Encoding","binary"),a=t):(i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e={"vcv-zip":t},a=window.jQuery.param(e))}else i.setRequestHeader("Content-type","application/x-www-form-urlencoded");return i.send(a),i},normalizeHtml(e){e=e.replace(/\s*\bdata-vcv-[^"<>]+"[^"<>]+"+/g,"").replace(/<!--\[vcvSourceHtml]/g,"").replace(/\[\/vcvSourceHtml]-->/g,"");const t=document.createRange(),n=t.createContextualFragment(e);let o=n.querySelector("vcvhelper, .vcvhelper");for(;o;){const e=o.parentNode,r=o.getAttribute("data-vcvs-html");if(r){const n=t.createContextualFragment(r);e.insertBefore(n,o)}e.removeChild(o),o=n.querySelector("vcvhelper, .vcvhelper")}const r="data-vce-delete-attr";Array.from(n.querySelectorAll(`[${r}]`)).forEach((e=>{const t=e.getAttribute(r);null==t||t.split(" ").forEach((t=>{e.removeAttribute(t)})),e.removeAttribute(r)}));let i="",a=[].slice.call(n.childNodes);a=a.filter((e=>e.nodeType===document.ELEMENT_NODE||e.nodeType===document.COMMENT_NODE));for(let d=0;d<a.length;d++){const e=a[d];e.nodeType===document.ELEMENT_NODE?i+=e.outerHTML:e.nodeType===document.COMMENT_NODE&&e.nodeValue&&(i+=`\x3c!-- ${e.nodeValue.trim()} --\x3e`)}const s=i.match(/url\(\s*(['"]?)(.*?)\1\s*\)/g);if(s&&s.length){const e=s.map((e=>e.replace(/&quot;/g,"'")));s.forEach(((t,n)=>{i=i.replace(t,e[n])}))}return i},getTextContent(e){var t;e=e.replace(/\s*\bdata-vcv-[^"<>]+"[^"<>]+"+/g,"").replace(/<!--\[vcvSourceHtml]/g,"").replace(/\[\/vcvSourceHtml]-->/g,"").replace(/<\//g," </");const n=document.createRange().createContextualFragment(e);let o=n.querySelector("style, script, noscript, meta, title, .vcv-ui-blank-row-container, .vcv-row-control-container");for(;o;){o.parentNode.removeChild(o),o=n.querySelector("style, script, noscript, meta, title, .vcv-ui-blank-row-container, .vcv-row-control-container")}return n&&(null===(t=null==n?void 0:n.textContent)||void 0===t?void 0:t.trim())},slugify(e){return(e=e||"").toString().toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/(\s+$)|(^\s+)/g,"").trim()},wpAutoP(e,t="content"){return window.tinyMCEPreInit.mceInit[t]&&window.tinyMCEPreInit.mceInit[t].wpautop&&window.switchEditors&&window.switchEditors.wpautop?window.switchEditors.wpautop(e):e},checkIfElementIsHidden(e){const t=(0,r.getService)("document");if(e.hidden)return!0;if(e.parent){const n=t.get(e.parent);return!!n&&(!(!n.parent||n.parent!==e.id)||this.checkIfElementIsHidden(n))}return!1},getVisibleElements(e){const t=Object.assign({},e),n=t=>{if(t.hidden)return!0;if(t.parent&&e[t.parent]){const o=e[t.parent];return!(!o.parent||o.parent!==t.id)||n(e[t.parent])}return!1};return Object.keys(t).forEach((e=>{const o=t[e];n(o)&&delete t[e]})),t},fixCorruptedElements(e){const t=Object.assign({},e);let n=[];const o=e=>e&&e.parent&&"string"==typeof e.parent?n.indexOf(e.parent)>=0?(e.parent=!1,!1):(n.push(e.parent),o(t[e.parent])):(n=[],!0);return Object.keys(t).forEach((e=>{const r=t[e];o(r),n=[]})),t},buildVariables(e){e.length&&e.forEach((e=>{void 0===window[e.key]&&("constant"===e.type?window[e.key]=function(){return e.value}:window[e.key]=e.value)}))},isRTL(){return s},startDownload(e,t,n,o){this.ajaxRequests.push({tag:e,data:t,successCallback:n,errorCallback:o}),this.nextDownload()},nextDownload(){if(0===this.ajaxRequests.length)return;if(this.ajaxCall)return;this.ajaxCall=!0;const e=(0,r.getService)("dataProcessor"),t=this.ajaxRequests[0];e.appAdminServerRequest(t.data).then((e=>{this.ajaxCall=!1,this.ajaxRequests.splice(0,1),t.successCallback&&t.successCallback(e),this.nextDownload()}),(e=>{this.ajaxCall=!1,this.ajaxRequests.splice(0,1),t.errorCallback&&t.errorCallback(e),this.nextDownload()}))},getShortcodesRegexp(){return new RegExp("\\[(\\[?)([\\w|-]+\\b)(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)")},getBlockRegexp(e=!0){return e?new RegExp(/<!--\s+(\/)?wp:(vcv-gutenberg-blocks\/)(dynamic-field-block)\s+({(?:(?=([^}]+|}+(?=})|(?!}\s+\/?-->)[^])*)\5|[^]*?)}\s+)?(\/)?-->/g):new RegExp(/<!--\s+(\/)?wp:([a-z][a-z0-9_-]*\/)?([a-z][a-z0-9_-]*)\s+({(?:(?=([^}]+|}+(?=})|(?!}\s+\/?-->)[^])*)\5|[^]*?)}\s+)?(\/)?-->/g)},parseDynamicBlock(e){if(e.match(d.getBlockRegexp())){const t=e.split(d.getBlockRegexp());return{value:e,blockScope:t[2],blockName:t[3],blockAtts:JSON.parse(t[4].trim()),blockContent:t[7],beforeBlock:t[0]||"",afterBlock:t[14]||""}}return!1},generateQuerySelector(e){if("html"===(null==e?void 0:e.tagName.toLowerCase()))return"HTML";let t=e.tagName;if(t+=""!==e.id?"#"+e.id:"",e.className&&"string"==typeof e.className){const n=e.className.split(/\s/);for(let e=0;e<n.length;e++)t+="."+n[e]}return d.generateQuerySelector(e.parentNode)+" > "+t},arrayMove(e,t,n){const o=[...e];for(;t<0;)t+=o.length;for(;n<0;)n+=o.length;if(n>=o.length){let e=n-o.length+1;for(;e--;)o.push(void 0)}return o.splice(n,0,o.splice(t,1)[0]),o}};(0,r.addService)("utils",d)}},function(e){e.O(0,["vendor"],(function(){return t="./public/base.js",e(e.s=t);var t}));e.O()}]);
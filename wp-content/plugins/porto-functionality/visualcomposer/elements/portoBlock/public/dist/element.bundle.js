(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./portoBlock/index.js":function(e,t,o){"use strict";o.r(t);var s=o("./node_modules/vc-cake/index.js"),n=o.n(s),c=o("./node_modules/@babel/runtime/helpers/extends.js"),l=o.n(c),r=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),a=o.n(r),i=o("./node_modules/@babel/runtime/helpers/createClass.js"),p=o.n(i),u=o("./node_modules/@babel/runtime/helpers/get.js"),d=o.n(u),m=o("./node_modules/@babel/runtime/helpers/inherits.js"),h=o.n(m),b=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),f=o.n(b),v=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),k=o.n(v),g=o("./node_modules/react/index.js"),y=o.n(g);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,s=k()(e);if(t){var n=k()(this).constructor;o=Reflect.construct(s,arguments,n)}else o=s.apply(this,arguments);return f()(this,o)}}var j=function(e){h()(o,e);var t=_(o);function o(e){return a()(this,o),t.call(this,e)}return p()(o,[{key:"componentDidMount",value:function(){var e=this.props.atts;d()(k()(o.prototype),"updateShortcodeToHtml",this).call(this,this.getBlockShortcode(e.block_name,e.el_class),this.ref)}},{key:"componentDidUpdate",value:function(e,t){var s=this.props.atts,n=this.getBlockShortcode(s.block_name,s.el_class);n!==this.getBlockShortcode(e.atts.block_name,e.atts.el_class)&&d()(k()(o.prototype),"updateShortcodeToHtml",this).call(this,n,this.ref)}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"getBlockShortcode",value:function(e,t){return!!e&&'[porto_block name="'.concat(e,'" el_class="').concat(t,'"]')}},{key:"render",value:function(){var e=this,t=this.props,o=t.id,s=t.editor,n=t.atts,c=this.applyDO("all"),r=n.block_name,a=n.el_class;return y.a.createElement("div",l()({className:"porto-block-wrap"},s,{id:"el-"+o},c),r&&y.a.createElement("div",{className:"porto-block vcvhelper",ref:function(t){e.ref=t},"data-vcvs-html":this.getBlockShortcode(r,a)}),!r&&"Please select a block to display.")}}]),o}(Object(s.getService)("portoComponent").shortcodeComponent);(0,n.a.getService("cook").add)(o("./portoBlock/settings.json"),(function(e){e.add(j)}),{css:!1,editorCss:!1,mixins:{}})},"./portoBlock/settings.json":function(e){e.exports=JSON.parse('{"block_name":{"type":"dropdown","access":"public","value":"","options":{"label":"Select a Block","global":"portoBlocks"}},"el_class":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from Custom CSS option."}},"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["block_name","el_class"],"options":{"label":"Block"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"tag":{"access":"protected","type":"string","value":"portoBlock"}}')}},[["./portoBlock/index.js"]]]);
/*
  Highlight.js 10.2.1 (32fb9a1d)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs=function(){"use strict";function e(n){Object.freeze(n);var t="function"==typeof n;return Object.getOwnPropertyNames(n).forEach((function(r){!Object.hasOwnProperty.call(n,r)||null===n[r]||"object"!=typeof n[r]&&"function"!=typeof n[r]||t&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(n[r])||e(n[r])})),n}class n{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(e,...n){var t={};for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function a(e){return e.nodeName.toLowerCase()}var i=Object.freeze({__proto__:null,escapeHTML:t,inherit:r,nodeStream:function(e){var n=[];return function e(t,r){for(var i=t.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:r,node:i}),r=e(i,r),a(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:i}));return r}(e,0),n},mergeStreams:function(e,n,r){var i=0,s="",o=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){s+="<"+a(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+t(e.value)+'"'})).join("")+">"}function u(e){s+="</"+a(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){var d=l();if(s+=t(r.substring(i,d[0].offset)),i=d[0].offset,d===e){o.reverse().forEach(u);do{g(d.splice(0,1)[0]),d=l()}while(d===e&&d.length&&d[0].offset===i);o.reverse().forEach(c)}else"start"===d[0].event?o.push(d[0].node):o.pop(),g(d.splice(0,1)[0])}return s+t(r.substr(i))}});const s="</span>",o=e=>!!e.kind;class l{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=t(e)}openNode(e){if(!o(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){o(e)&&(this.buffer+=s)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{c._collapse(e)}))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}const d="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",h={begin:"\\\\[\\s\\S]",relevance:0},f={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[h]},p={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[h]},m={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},b=function(e,n,t={}){var a=r({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(m),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},v=b("//","$"),x=b("/\\*","\\*/"),E=b("#","$");var _=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:d,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>g(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),r({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:h,APOS_STRING_MODE:f,QUOTE_STRING_MODE:p,PHRASAL_WORDS_MODE:m,COMMENT:b,C_LINE_COMMENT_MODE:v,C_BLOCK_COMMENT_MODE:x,HASH_COMMENT_MODE:E,NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{className:"number",begin:d,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[h,{begin:/\[/,end:/\]/,relevance:0,contains:[h]}]}]},TITLE_MODE:{className:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}}),w="of and for in not or if then".split(" ");function N(e,n){return n?+n:function(e){return w.includes(e.toLowerCase())}(e)?0:1}const y={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,t(this.code);let e;return this.autoDetect?(e=hljs.highlightAuto(this.code),this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),this.detectectLanguage=this.language),e.value},autoDetect(){return!(this.language&&(e=this.autodetect,!e&&""!==e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}},R={install(e){e.component("highlightjs",y)}},k=t,M=r,{nodeStream:O,mergeStreams:L}=i,A=Symbol("nomatch");return function(t){var a=[],i=Object.create(null),s=Object.create(null),o=[],l=!0,c=/(^(<[^>]+>|\t|)+|\n)/gm,d="Could not find the language '{}', did you forget to load/include a language module?";const h={disableAutodetect:!0,name:"Plain text",contains:[]};var f={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function p(e){return f.noHighlightRe.test(e)}function m(e,n,t,r){var a={code:n,language:e};j("before:highlight",a);var i=a.result?a.result:b(a.language,a.code,t,r);return i.code=a.code,j("after:highlight",i),i}function b(e,t,a,s){var o=t;function c(e,n){var t=E.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=R.subLanguage?function(){if(""!==L){var e=null;if("string"==typeof R.subLanguage){if(!i[R.subLanguage])return void O.addText(L);e=b(R.subLanguage,L,!0,M[R.subLanguage]),M[R.subLanguage]=e.top}else e=v(L,R.subLanguage.length?R.subLanguage:null);R.relevance>0&&(I+=e.relevance),O.addSublanguage(e.emitter,e.language)}}():function(){if(!R.keywords)return void O.addText(L);let e=0;R.keywordPatternRe.lastIndex=0;let n=R.keywordPatternRe.exec(L),t="";for(;n;){t+=L.substring(e,n.index);const r=c(R,n);if(r){const[e,a]=r;O.addText(t),t="",I+=a,O.addKeyword(n[0],e)}else t+=n[0];e=R.keywordPatternRe.lastIndex,n=R.keywordPatternRe.exec(L)}t+=L.substr(e),O.addText(t)}(),L=""}function h(e){return e.className&&O.openNode(e.className),R=Object.create(e,{parent:{value:R}})}function p(e){return 0===R.matcher.regexIndex?(L+=e[0],1):(S=!0,0)}var m={};function x(t,r){var i=r&&r[0];if(L+=t,null==i)return u(),0;if("begin"===m.type&&"end"===r.type&&m.index===r.index&&""===i){if(L+=o.slice(r.index,r.index+1),!l){const n=Error("0 width match regex");throw n.languageName=e,n.badRule=m.rule,n}return 1}if(m=r,"begin"===r.type)return function(e){var t=e[0],r=e.rule;const a=new n(r),i=[r.__beforeBegin,r["on:begin"]];for(const n of i)if(n&&(n(e,a),a.ignore))return p(t);return r&&r.endSameAsBegin&&(r.endRe=RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),r.skip?L+=t:(r.excludeBegin&&(L+=t),u(),r.returnBegin||r.excludeBegin||(L=t)),h(r),r.returnBegin?0:t.length}(r);if("illegal"===r.type&&!a){const e=Error('Illegal lexeme "'+i+'" for mode "'+(R.className||"<unnamed>")+'"');throw e.mode=R,e}if("end"===r.type){var s=function(e){var t=e[0],r=o.substr(e.index),a=function e(t,r,a){let i=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(t.endRe,a);if(i){if(t["on:end"]){const e=new n(t);t["on:end"](r,e),e.ignore&&(i=!1)}if(i){for(;t.endsParent&&t.parent;)t=t.parent;return t}}if(t.endsWithParent)return e(t.parent,r,a)}(R,e,r);if(!a)return A;var i=R;i.skip?L+=t:(i.returnEnd||i.excludeEnd||(L+=t),u(),i.excludeEnd&&(L=t));do{R.className&&O.closeNode(),R.skip||R.subLanguage||(I+=R.relevance),R=R.parent}while(R!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),h(a.starts)),i.returnEnd?0:t.length}(r);if(s!==A)return s}if("illegal"===r.type&&""===i)return 1;if(j>1e5&&j>3*r.index)throw Error("potential infinite loop, way more iterations than matches");return L+=i,i.length}var E=y(e);if(!E)throw console.error(d.replace("{}",e)),Error('Unknown language: "'+e+'"');var _=function(e){function n(n,t){return RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(function(e,n="|"){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var s=r+=1,o=g(e[i]);for(i>0&&(a+=n),a+="(";o.length>0;){var l=t.exec(o);if(null==l){a+=o;break}a+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),"\\"===l[0][0]&&l[1]?a+="\\"+(+l[1]+s):(a+=l[0],"("===l[0]&&r++)}a+=")"}return a}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),r=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,r)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function i(e,n){const t=e.input[e.index-1],r=e.input[e.index+e[0].length];"."!==t&&"."!==r||n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return function t(s,o){const l=s;if(s.compiled)return l;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords;let c=null;if("object"==typeof s.keywords&&(c=s.keywords.$pattern,delete s.keywords.$pattern),s.keywords&&(s.keywords=function(e,n){var t={};return"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){r(n,e[n])})),t;function r(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){var r=n.split("|");t[r[0]]=[e,N(r[0],r[1])]}))}}(s.keywords,e.case_insensitive)),s.lexemes&&c)throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(s.lexemes||c||/\w+/,!0),o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",s.__beforeBegin=i),s.begin||(s.begin=/\B|\b/),l.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(l.endRe=n(s.end)),l.terminator_end=g(s.end)||"",s.endsWithParent&&o.terminator_end&&(l.terminator_end+=(s.end?"|":"")+o.terminator_end)),s.illegal&&(l.illegalRe=n(s.illegal)),void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return r(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e)?r(e,{starts:e.starts?r(e.starts):null}):Object.isFrozen(e)?r(e):e}("self"===e?s:e)}))),s.contains.forEach((function(e){t(e,l)})),s.starts&&t(s.starts,o),l.matcher=function(e){const n=new a;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}(E),w="",R=s||_,M={},O=new f.__emitter(f);!function(){for(var e=[],n=R;n!==E;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>O.openNode(e))}();var L="",I=0,T=0,j=0,S=!1;try{for(R.matcher.considerAll();;){j++,S?S=!1:R.matcher.considerAll(),R.matcher.lastIndex=T;const e=R.matcher.exec(o);if(!e)break;const n=x(o.substring(T,e.index),e);T=e.index+n}return x(o.substr(T)),O.closeAllNodes(),O.finalize(),w=O.toHTML(),{relevance:I,value:w,language:e,illegal:!1,emitter:O,top:R}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:o.slice(T-100,T+100),mode:n.mode},sofar:w,relevance:0,value:k(o),emitter:O};if(l)return{illegal:!1,relevance:0,value:k(o),emitter:O,language:e,top:R,errorRaised:n};throw n}}function v(e,n){n=n||f.languages||Object.keys(i);var t=function(e){const n={relevance:0,emitter:new f.__emitter(f),value:k(e),illegal:!1,top:h};return n.emitter.addText(e),n}(e),r=t;return n.filter(y).filter(T).forEach((function(n){var a=b(n,e,!1);a.language=n,a.relevance>r.relevance&&(r=a),a.relevance>t.relevance&&(r=t,t=a)})),r.language&&(t.second_best=r),t}function x(e){return f.tabReplace||f.useBR?e.replace(c,e=>"\n"===e?f.useBR?"<br>":e:f.tabReplace?e.replace(/\t/g,f.tabReplace):e):e}function E(e){let n=null;const t=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=f.languageDetectRe.exec(n);if(t){var r=y(t[1]);return r||(console.warn(d.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),r?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>p(e)||y(e))}(e);if(p(t))return;j("before:highlightBlock",{block:e,language:t}),f.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"):n=e;const r=n.textContent,a=t?m(t,r,!0):v(r),i=O(n);if(i.length){const e=document.createElement("div");e.innerHTML=a.value,a.value=L(i,O(e),r)}a.value=x(a.value),j("after:highlightBlock",{block:e,result:a}),e.innerHTML=a.value,e.className=function(e,n,t){var r=n?s[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),e.includes(r)||a.push(r),a.join(" ").trim()}(e.className,t,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const w=()=>{if(!w.called){w.called=!0;var e=document.querySelectorAll("pre code");a.forEach.call(e,E)}};function y(e){return e=(e||"").toLowerCase(),i[e]||i[s[e]]}function I(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{s[e]=n})}function T(e){var n=y(e);return n&&!n.disableAutodetect}function j(e,n){var t=e;o.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(t,{highlight:m,highlightAuto:v,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),x(e)},highlightBlock:E,configure:function(e){f=M(f,e)},initHighlighting:w,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",w,!1)},registerLanguage:function(e,n){var r=null;try{r=n(t)}catch(n){if(console.error("Language definition for '{}' could not be registered.".replace("{}",e)),!l)throw n;console.error(n),r=h}r.name||(r.name=e),i[e]=r,r.rawDefinition=n.bind(null,t),r.aliases&&I(r.aliases,{languageName:e})},listLanguages:function(){return Object.keys(i)},getLanguage:y,registerAliases:I,requireLanguage:function(e){var n=y(e);if(n)return n;throw Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:T,inherit:M,addPlugin:function(e){o.push(e)},vuePlugin:R}),t.debugMode=function(){l=!1},t.safeMode=function(){l=!0},t.versionString="10.2.1";for(const n in _)"object"==typeof _[n]&&e(_[n]);return Object.assign(t,_),t}({})}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);hljs.registerLanguage("xml",function(){"use strict";return function(e){var n={className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},a={begin:"\\s",contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]},s=e.inherit(a,{begin:"\\(",end:"\\)"}),t=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),i=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",relevance:10,contains:[a,i,t,s,{begin:"\\[",end:"\\]",contains:[{className:"meta",begin:"<![a-z]",end:">",contains:[a,s,i,t]}]}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},n,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{name:"style"},contains:[c],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",keywords:{name:"script"},contains:[c],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},c]}]}}}());hljs.registerLanguage("http",function(){"use strict";return function(e){var n="HTTP/[0-9\\.]+";return{name:"HTTP",aliases:["https"],illegal:"\\S",contains:[{begin:"^"+n,end:"$",contains:[{className:"number",begin:"\\b\\d{3}\\b"}]},{begin:"^[A-Z]+ (.*?) "+n+"$",returnBegin:!0,end:"$",contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{begin:n},{className:"keyword",begin:"[A-Z]+"}]},{className:"attribute",begin:"^\\w",end:": ",excludeEnd:!0,illegal:"\\n|\\s|=",starts:{end:"$",relevance:0}},{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}]}}}());hljs.registerLanguage("json",function(){"use strict";return function(n){var e={literal:"true false null"},i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],t=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],a={end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:e},l={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(a,{begin:/:/})].concat(i),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(a)],illegal:"\\S"};return t.push(l,s),i.forEach((function(n){t.push(n)})),{name:"JSON",contains:t,keywords:e,illegal:"\\S"}}}());hljs.registerLanguage("css",function(){"use strict";return function(e){var n={begin:/(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{name:"CSS",case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(page|font-face)",lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",illegal:/:/,returnBegin:!0,contains:[{className:"keyword",begin:/@\-?\w[\w]*(\-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:"and or not only",contains:[{begin:/[a-z-]+:/,className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,n]}]}}}());hljs.registerLanguage("markdown",function(){"use strict";return function(n){const e={begin:"<",end:">",subLanguage:"xml",relevance:0},a={begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}],relevance:10},i={className:"strong",contains:[],variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},s={className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,relevance:0}]};i.contains.push(s),s.contains.push(i);var c=[e,a];return i.contains=i.contains.concat(c),s.contains=s.contains.concat(c),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:c=c.concat(i,s)},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:c}]}]},e,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},i,s,{className:"quote",begin:"^>\\s+",contains:c,end:"$"},{className:"code",variants:[{begin:"(`{3,})(.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})(.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"},a,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}}());hljs.registerLanguage("php",function(){"use strict";return function(e){var r={begin:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},t={className:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?[=]?/},{begin:/\?>/}]},a={className:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},n=e.inherit(e.APOS_STRING_MODE,{illegal:null}),i=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(a)}),o=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(a)}),l={className:"string",contains:[e.BACKSLASH_ESCAPE,t],variants:[e.inherit(n,{begin:"b'",end:"'"}),e.inherit(i,{begin:'b"',end:'"'}),i,n,o]},s={variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]},c={keyword:"__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list new object or private protected public real return string switch throw trait try unset use var void while xor yield",literal:"false null true",built_in:"Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"};return{aliases:["php","php3","php4","php5","php6","php7"],case_insensitive:!0,keywords:c,contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$",{contains:[t]}),e.COMMENT("/\\*","\\*/",{contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),e.COMMENT("__halt_compiler.+?;",!1,{endsWithParent:!0,keywords:"__halt_compiler"}),t,{className:"keyword",begin:/\$this\b/},r,{begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[e.UNDERSCORE_TITLE_MODE,{className:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:c,contains:["self",r,e.C_BLOCK_COMMENT_MODE,l,s]}]},{className:"class",beginKeywords:"class interface",end:"{",excludeEnd:!0,illegal:/[:\(\$"]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",end:";",illegal:/[\.']/,contains:[e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"use",end:";",contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"=>"},l,s]}}}());hljs.registerLanguage("php-template",function(){"use strict";return function(n){return{name:"PHP template",subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},n.inherit(n.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),n.inherit(n.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]}]}}}());
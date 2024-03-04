(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _E(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ag={exports:{}},tl={},lg={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=Symbol.for("react.element"),vE=Symbol.for("react.portal"),EE=Symbol.for("react.fragment"),wE=Symbol.for("react.strict_mode"),TE=Symbol.for("react.profiler"),IE=Symbol.for("react.provider"),SE=Symbol.for("react.context"),AE=Symbol.for("react.forward_ref"),RE=Symbol.for("react.suspense"),kE=Symbol.for("react.memo"),CE=Symbol.for("react.lazy"),Af=Symbol.iterator;function PE(t){return t===null||typeof t!="object"?null:(t=Af&&t[Af]||t["@@iterator"],typeof t=="function"?t:null)}var ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cg=Object.assign,hg={};function Ei(t,e,n){this.props=t,this.context=e,this.refs=hg,this.updater=n||ug}Ei.prototype.isReactComponent={};Ei.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ei.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dg(){}dg.prototype=Ei.prototype;function gh(t,e,n){this.props=t,this.context=e,this.refs=hg,this.updater=n||ug}var yh=gh.prototype=new dg;yh.constructor=gh;cg(yh,Ei.prototype);yh.isPureReactComponent=!0;var Rf=Array.isArray,fg=Object.prototype.hasOwnProperty,_h={current:null},pg={key:!0,ref:!0,__self:!0,__source:!0};function mg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fg.call(e,r)&&!pg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ws,type:t,key:s,ref:o,props:i,_owner:_h.current}}function NE(t,e){return{$$typeof:Ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ws}function DE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kf=/\/+/g;function Yl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DE(""+t.key):e.toString(36)}function Wo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ws:case vE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Yl(o,0):r,Rf(i)?(n="",t!=null&&(n=t.replace(kf,"$&/")+"/"),Wo(i,e,n,"",function(u){return u})):i!=null&&(vh(i)&&(i=NE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(kf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Yl(s,a);o+=Wo(s,e,n,l,i)}else if(l=PE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Yl(s,a++),o+=Wo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _o(t,e,n){if(t==null)return t;var r=[],i=0;return Wo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function OE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ke={current:null},Ko={transition:null},VE={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:_h};z.Children={map:_o,forEach:function(t,e,n){_o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _o(t,function(){e++}),e},toArray:function(t){return _o(t,function(e){return e})||[]},only:function(t){if(!vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=Ei;z.Fragment=EE;z.Profiler=TE;z.PureComponent=gh;z.StrictMode=wE;z.Suspense=RE;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VE;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_h.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)fg.call(e,l)&&!pg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ws,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:SE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IE,_context:t},t.Consumer=t};z.createElement=mg;z.createFactory=function(t){var e=mg.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:AE,render:t}};z.isValidElement=vh;z.lazy=function(t){return{$$typeof:CE,_payload:{_status:-1,_result:t},_init:OE}};z.memo=function(t,e){return{$$typeof:kE,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=Ko.transition;Ko.transition={};try{t()}finally{Ko.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return Ke.current.useCallback(t,e)};z.useContext=function(t){return Ke.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Ke.current.useDeferredValue(t)};z.useEffect=function(t,e){return Ke.current.useEffect(t,e)};z.useId=function(){return Ke.current.useId()};z.useImperativeHandle=function(t,e,n){return Ke.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Ke.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Ke.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Ke.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Ke.current.useReducer(t,e,n)};z.useRef=function(t){return Ke.current.useRef(t)};z.useState=function(t){return Ke.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Ke.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Ke.current.useTransition()};z.version="18.2.0";lg.exports=z;var Hr=lg.exports;const xE=_E(Hr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LE=Hr,ME=Symbol.for("react.element"),FE=Symbol.for("react.fragment"),UE=Object.prototype.hasOwnProperty,$E=LE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bE={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UE.call(e,r)&&!bE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ME,type:t,key:s,ref:o,props:i,_owner:$E.current}}tl.Fragment=FE;tl.jsx=gg;tl.jsxs=gg;ag.exports=tl;var Pr=ag.exports,Bu={},yg={exports:{}},st={},_g={exports:{}},vg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,U){var b=D.length;D.push(U);e:for(;0<b;){var le=b-1>>>1,ve=D[le];if(0<i(ve,U))D[le]=U,D[b]=ve,b=le;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var U=D[0],b=D.pop();if(b!==U){D[0]=b;e:for(var le=0,ve=D.length,go=ve>>>1;le<go;){var Hn=2*(le+1)-1,Ql=D[Hn],qn=Hn+1,yo=D[qn];if(0>i(Ql,b))qn<ve&&0>i(yo,Ql)?(D[le]=yo,D[qn]=b,le=qn):(D[le]=Ql,D[Hn]=b,le=Hn);else if(qn<ve&&0>i(yo,b))D[le]=yo,D[qn]=b,le=qn;else break e}}return U}function i(D,U){var b=D.sortIndex-U.sortIndex;return b!==0?b:D.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,_=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=D)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function y(D){if(E=!1,m(D),!_)if(n(l)!==null)_=!0,Kl(I);else{var U=n(u);U!==null&&Gl(y,U.startTime-D)}}function I(D,U){_=!1,E&&(E=!1,p(O),O=-1),g=!0;var b=d;try{for(m(U),h=n(l);h!==null&&(!(h.expirationTime>U)||D&&!pt());){var le=h.callback;if(typeof le=="function"){h.callback=null,d=h.priorityLevel;var ve=le(h.expirationTime<=U);U=t.unstable_now(),typeof ve=="function"?h.callback=ve:h===n(l)&&r(l),m(U)}else r(l);h=n(l)}if(h!==null)var go=!0;else{var Hn=n(u);Hn!==null&&Gl(y,Hn.startTime-U),go=!1}return go}finally{h=null,d=b,g=!1}}var k=!1,C=null,O=-1,Y=5,$=-1;function pt(){return!(t.unstable_now()-$<Y)}function Ni(){if(C!==null){var D=t.unstable_now();$=D;var U=!0;try{U=C(!0,D)}finally{U?Di():(k=!1,C=null)}}else k=!1}var Di;if(typeof f=="function")Di=function(){f(Ni)};else if(typeof MessageChannel<"u"){var Sf=new MessageChannel,yE=Sf.port2;Sf.port1.onmessage=Ni,Di=function(){yE.postMessage(null)}}else Di=function(){S(Ni,0)};function Kl(D){C=D,k||(k=!0,Di())}function Gl(D,U){O=S(function(){D(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Kl(I))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var b=d;d=U;try{return D()}finally{d=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var b=d;d=D;try{return U()}finally{d=b}},t.unstable_scheduleCallback=function(D,U,b){var le=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?le+b:le):b=le,D){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=b+ve,D={id:c++,callback:U,priorityLevel:D,startTime:b,expirationTime:ve,sortIndex:-1},b>le?(D.sortIndex=b,e(u,D),n(l)===null&&D===n(u)&&(E?(p(O),O=-1):E=!0,Gl(y,b-le))):(D.sortIndex=ve,e(l,D),_||g||(_=!0,Kl(I))),D},t.unstable_shouldYield=pt,t.unstable_wrapCallback=function(D){var U=d;return function(){var b=d;d=U;try{return D.apply(this,arguments)}finally{d=b}}}})(vg);_g.exports=vg;var zE=_g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg=Hr,rt=zE;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wg=new Set,fs={};function vr(t,e){ii(t,e),ii(t+"Capture",e)}function ii(t,e){for(fs[t]=e,t=0;t<e.length;t++)wg.add(e[t])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hu=Object.prototype.hasOwnProperty,jE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cf={},Pf={};function BE(t){return Hu.call(Pf,t)?!0:Hu.call(Cf,t)?!1:jE.test(t)?Pf[t]=!0:(Cf[t]=!0,!1)}function HE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qE(t,e,n,r){if(e===null||typeof e>"u"||HE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ge(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Ge(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Ge(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Ge(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Ge(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Ge(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Ge(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Ge(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Ge(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Ge(t,5,!1,t.toLowerCase(),null,!1,!1)});var Eh=/[\-:]([a-z])/g;function wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Eh,wh);Oe[e]=new Ge(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Eh,wh);Oe[e]=new Ge(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Eh,wh);Oe[e]=new Ge(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Ge(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Ge(t,1,!1,t.toLowerCase(),null,!0,!0)});function Th(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qE(e,n,i,r)&&(n=null),r||i===null?BE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var on=Eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Ih=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Ig=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),Ah=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),Sg=Symbol.for("react.offscreen"),Nf=Symbol.iterator;function Oi(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,Xl;function Bi(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var Jl=!1;function Zl(t,e){if(!t||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bi(t):""}function WE(t){switch(t.tag){case 5:return Bi(t.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Dr:return"Fragment";case Nr:return"Portal";case qu:return"Profiler";case Ih:return"StrictMode";case Wu:return"Suspense";case Ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ig:return(t.displayName||"Context")+".Consumer";case Tg:return(t._context.displayName||"Context")+".Provider";case Sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ah:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case cn:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function KE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===Ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GE(t){var e=Ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eo(t){t._valueTracker||(t._valueTracker=GE(t))}function Rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ag(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ha(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qu(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Df(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kg(t,e){e=e.checked,e!=null&&Th(t,"checked",e,!1)}function Yu(t,e){kg(t,e);var n=Vn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xu(t,e.type,Vn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Of(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xu(t,e,n){(e!=="number"||ha(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hi=Array.isArray;function qr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Hi(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vn(n)}}function Cg(t,e){var n=Vn(e.value),r=Vn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wo,Ng=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ps(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QE=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(t){QE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xi[e]=Xi[t]})});function Dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xi.hasOwnProperty(t)&&Xi[t]?(""+e).trim():e+"px"}function Og(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YE=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(t,e){if(e){if(YE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function tc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nc=null;function Rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rc=null,Wr=null,Kr=null;function Lf(t){if(t=Qs(t)){if(typeof rc!="function")throw Error(w(280));var e=t.stateNode;e&&(e=ol(e),rc(t.stateNode,t.type,e))}}function Vg(t){Wr?Kr?Kr.push(t):Kr=[t]:Wr=t}function xg(){if(Wr){var t=Wr,e=Kr;if(Kr=Wr=null,Lf(t),e)for(t=0;t<e.length;t++)Lf(e[t])}}function Lg(t,e){return t(e)}function Mg(){}var eu=!1;function Fg(t,e,n){if(eu)return t(e,n);eu=!0;try{return Lg(t,e,n)}finally{eu=!1,(Wr!==null||Kr!==null)&&(Mg(),xg())}}function ms(t,e){var n=t.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var ic=!1;if(Jt)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){ic=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{ic=!1}function XE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ji=!1,da=null,fa=!1,sc=null,JE={onError:function(t){Ji=!0,da=t}};function ZE(t,e,n,r,i,s,o,a,l){Ji=!1,da=null,XE.apply(JE,arguments)}function ew(t,e,n,r,i,s,o,a,l){if(ZE.apply(this,arguments),Ji){if(Ji){var u=da;Ji=!1,da=null}else throw Error(w(198));fa||(fa=!0,sc=u)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mf(t){if(Er(t)!==t)throw Error(w(188))}function tw(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Mf(i),t;if(s===r)return Mf(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function $g(t){return t=tw(t),t!==null?bg(t):null}function bg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bg(t);if(e!==null)return e;t=t.sibling}return null}var zg=rt.unstable_scheduleCallback,Ff=rt.unstable_cancelCallback,nw=rt.unstable_shouldYield,rw=rt.unstable_requestPaint,ue=rt.unstable_now,iw=rt.unstable_getCurrentPriorityLevel,kh=rt.unstable_ImmediatePriority,jg=rt.unstable_UserBlockingPriority,pa=rt.unstable_NormalPriority,sw=rt.unstable_LowPriority,Bg=rt.unstable_IdlePriority,nl=null,Vt=null;function ow(t){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:uw,aw=Math.log,lw=Math.LN2;function uw(t){return t>>>=0,t===0?32:31-(aw(t)/lw|0)|0}var To=64,Io=4194304;function qi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ma(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=qi(a):(s&=o,s!==0&&(r=qi(s)))}else o=n&~i,o!==0?r=qi(o):s!==0&&(r=qi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Et(e),i=1<<n,r|=t[n],e&=~i;return r}function cw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Et(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=cw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hg(){var t=To;return To<<=1,!(To&4194240)&&(To=64),t}function tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ks(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Et(e),t[e]=n}function dw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Et(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Et(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wg,Ph,Kg,Gg,Qg,ac=!1,So=[],Tn=null,In=null,Sn=null,gs=new Map,ys=new Map,dn=[],fw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uf(t,e){switch(t){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ys.delete(e.pointerId)}}function xi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Qs(e),e!==null&&Ph(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pw(t,e,n,r,i){switch(e){case"focusin":return Tn=xi(Tn,t,e,n,r,i),!0;case"dragenter":return In=xi(In,t,e,n,r,i),!0;case"mouseover":return Sn=xi(Sn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return gs.set(s,xi(gs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ys.set(s,xi(ys.get(s)||null,t,e,n,r,i)),!0}return!1}function Yg(t){var e=Yn(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=Ug(n),e!==null){t.blockedOn=e,Qg(t.priority,function(){Kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Go(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nc=r,n.target.dispatchEvent(r),nc=null}else return e=Qs(n),e!==null&&Ph(e),t.blockedOn=n,!1;e.shift()}return!0}function $f(t,e,n){Go(t)&&n.delete(e)}function mw(){ac=!1,Tn!==null&&Go(Tn)&&(Tn=null),In!==null&&Go(In)&&(In=null),Sn!==null&&Go(Sn)&&(Sn=null),gs.forEach($f),ys.forEach($f)}function Li(t,e){t.blockedOn===e&&(t.blockedOn=null,ac||(ac=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,mw)))}function _s(t){function e(i){return Li(i,t)}if(0<So.length){Li(So[0],t);for(var n=1;n<So.length;n++){var r=So[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tn!==null&&Li(Tn,t),In!==null&&Li(In,t),Sn!==null&&Li(Sn,t),gs.forEach(e),ys.forEach(e),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Yg(n),n.blockedOn===null&&dn.shift()}var Gr=on.ReactCurrentBatchConfig,ga=!0;function gw(t,e,n,r){var i=G,s=Gr.transition;Gr.transition=null;try{G=1,Nh(t,e,n,r)}finally{G=i,Gr.transition=s}}function yw(t,e,n,r){var i=G,s=Gr.transition;Gr.transition=null;try{G=4,Nh(t,e,n,r)}finally{G=i,Gr.transition=s}}function Nh(t,e,n,r){if(ga){var i=lc(t,e,n,r);if(i===null)hu(t,e,r,ya,n),Uf(t,r);else if(pw(i,t,e,n,r))r.stopPropagation();else if(Uf(t,r),e&4&&-1<fw.indexOf(t)){for(;i!==null;){var s=Qs(i);if(s!==null&&Wg(s),s=lc(t,e,n,r),s===null&&hu(t,e,r,ya,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hu(t,e,r,null,n)}}var ya=null;function lc(t,e,n,r){if(ya=null,t=Rh(r),t=Yn(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ya=t,null}function Xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iw()){case kh:return 1;case jg:return 4;case pa:case sw:return 16;case Bg:return 536870912;default:return 16}default:return 16}}var _n=null,Dh=null,Qo=null;function Jg(){if(Qo)return Qo;var t,e=Dh,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qo=i.slice(t,1<r?1-r:void 0)}function Yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ao(){return!0}function bf(){return!1}function ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ao:bf,this.isPropagationStopped=bf,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),e}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oh=ot(wi),Gs=se({},wi,{view:0,detail:0}),_w=ot(Gs),nu,ru,Mi,rl=se({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mi&&(Mi&&t.type==="mousemove"?(nu=t.screenX-Mi.screenX,ru=t.screenY-Mi.screenY):ru=nu=0,Mi=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),zf=ot(rl),vw=se({},rl,{dataTransfer:0}),Ew=ot(vw),ww=se({},Gs,{relatedTarget:0}),iu=ot(ww),Tw=se({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),Iw=ot(Tw),Sw=se({},wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Aw=ot(Sw),Rw=se({},wi,{data:0}),jf=ot(Rw),kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pw[t])?!!e[t]:!1}function Vh(){return Nw}var Dw=se({},Gs,{key:function(t){if(t.key){var e=kw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vh,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ow=ot(Dw),Vw=se({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=ot(Vw),xw=se({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vh}),Lw=ot(xw),Mw=se({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fw=ot(Mw),Uw=se({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$w=ot(Uw),bw=[9,13,27,32],xh=Jt&&"CompositionEvent"in window,Zi=null;Jt&&"documentMode"in document&&(Zi=document.documentMode);var zw=Jt&&"TextEvent"in window&&!Zi,Zg=Jt&&(!xh||Zi&&8<Zi&&11>=Zi),Hf=" ",qf=!1;function ey(t,e){switch(t){case"keyup":return bw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ty(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Or=!1;function jw(t,e){switch(t){case"compositionend":return ty(e);case"keypress":return e.which!==32?null:(qf=!0,Hf);case"textInput":return t=e.data,t===Hf&&qf?null:t;default:return null}}function Bw(t,e){if(Or)return t==="compositionend"||!xh&&ey(t,e)?(t=Jg(),Qo=Dh=_n=null,Or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zg&&e.locale!=="ko"?null:e.data;default:return null}}var Hw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hw[t.type]:e==="textarea"}function ny(t,e,n,r){Vg(r),e=_a(e,"onChange"),0<e.length&&(n=new Oh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var es=null,vs=null;function qw(t){fy(t,0)}function il(t){var e=Lr(t);if(Rg(e))return t}function Ww(t,e){if(t==="change")return e}var ry=!1;if(Jt){var su;if(Jt){var ou="oninput"in document;if(!ou){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),ou=typeof Kf.oninput=="function"}su=ou}else su=!1;ry=su&&(!document.documentMode||9<document.documentMode)}function Gf(){es&&(es.detachEvent("onpropertychange",iy),vs=es=null)}function iy(t){if(t.propertyName==="value"&&il(vs)){var e=[];ny(e,vs,t,Rh(t)),Fg(qw,e)}}function Kw(t,e,n){t==="focusin"?(Gf(),es=e,vs=n,es.attachEvent("onpropertychange",iy)):t==="focusout"&&Gf()}function Gw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(vs)}function Qw(t,e){if(t==="click")return il(e)}function Yw(t,e){if(t==="input"||t==="change")return il(e)}function Xw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tt=typeof Object.is=="function"?Object.is:Xw;function Es(t,e){if(Tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hu.call(e,i)||!Tt(t[i],e[i]))return!1}return!0}function Qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yf(t,e){var n=Qf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qf(n)}}function sy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function oy(){for(var t=window,e=ha();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ha(t.document)}return e}function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Jw(t){var e=oy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sy(n.ownerDocument.documentElement,n)){if(r!==null&&Lh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yf(n,s);var o=Yf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zw=Jt&&"documentMode"in document&&11>=document.documentMode,Vr=null,uc=null,ts=null,cc=!1;function Xf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cc||Vr==null||Vr!==ha(r)||(r=Vr,"selectionStart"in r&&Lh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&Es(ts,r)||(ts=r,r=_a(uc,"onSelect"),0<r.length&&(e=new Oh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vr)))}function Ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xr={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},au={},ay={};Jt&&(ay=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function sl(t){if(au[t])return au[t];if(!xr[t])return t;var e=xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ay)return au[t]=e[n];return t}var ly=sl("animationend"),uy=sl("animationiteration"),cy=sl("animationstart"),hy=sl("transitionend"),dy=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(t,e){dy.set(t,e),vr(e,[t])}for(var lu=0;lu<Jf.length;lu++){var uu=Jf[lu],e1=uu.toLowerCase(),t1=uu[0].toUpperCase()+uu.slice(1);$n(e1,"on"+t1)}$n(ly,"onAnimationEnd");$n(uy,"onAnimationIteration");$n(cy,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(hy,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function Zf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ew(r,e,void 0,t),t.currentTarget=null}function fy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Zf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Zf(i,a,u),s=l}}}if(fa)throw t=sc,fa=!1,sc=null,t}function J(t,e){var n=e[mc];n===void 0&&(n=e[mc]=new Set);var r=t+"__bubble";n.has(r)||(py(e,t,2,!1),n.add(r))}function cu(t,e,n){var r=0;e&&(r|=4),py(n,t,r,e)}var ko="_reactListening"+Math.random().toString(36).slice(2);function ws(t){if(!t[ko]){t[ko]=!0,wg.forEach(function(n){n!=="selectionchange"&&(n1.has(n)||cu(n,!1,t),cu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ko]||(e[ko]=!0,cu("selectionchange",!1,e))}}function py(t,e,n,r){switch(Xg(e)){case 1:var i=gw;break;case 4:i=yw;break;default:i=Nh}n=i.bind(null,e,n,t),i=void 0,!ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Yn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Fg(function(){var u=s,c=Rh(n),h=[];e:{var d=dy.get(t);if(d!==void 0){var g=Oh,_=t;switch(t){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":g=Ow;break;case"focusin":_="focus",g=iu;break;case"focusout":_="blur",g=iu;break;case"beforeblur":case"afterblur":g=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ew;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Lw;break;case ly:case uy:case cy:g=Iw;break;case hy:g=Fw;break;case"scroll":g=_w;break;case"wheel":g=$w;break;case"copy":case"cut":case"paste":g=Aw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Bf}var E=(e&4)!==0,S=!E&&t==="scroll",p=E?d!==null?d+"Capture":null:d;E=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=ms(f,p),y!=null&&E.push(Ts(f,y,m)))),S)break;f=f.return}0<E.length&&(d=new g(d,_,null,n,c),h.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==nc&&(_=n.relatedTarget||n.fromElement)&&(Yn(_)||_[Zt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Yn(_):null,_!==null&&(S=Er(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(E=zf,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(E=Bf,y="onPointerLeave",p="onPointerEnter",f="pointer"),S=g==null?d:Lr(g),m=_==null?d:Lr(_),d=new E(y,f+"leave",g,n,c),d.target=S,d.relatedTarget=m,y=null,Yn(c)===u&&(E=new E(p,f+"enter",_,n,c),E.target=m,E.relatedTarget=S,y=E),S=y,g&&_)t:{for(E=g,p=_,f=0,m=E;m;m=Sr(m))f++;for(m=0,y=p;y;y=Sr(y))m++;for(;0<f-m;)E=Sr(E),f--;for(;0<m-f;)p=Sr(p),m--;for(;f--;){if(E===p||p!==null&&E===p.alternate)break t;E=Sr(E),p=Sr(p)}E=null}else E=null;g!==null&&ep(h,d,g,E,!1),_!==null&&S!==null&&ep(h,S,_,E,!0)}}e:{if(d=u?Lr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=Ww;else if(Wf(d))if(ry)I=Yw;else{I=Gw;var k=Kw}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=Qw);if(I&&(I=I(t,u))){ny(h,I,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Xu(d,"number",d.value)}switch(k=u?Lr(u):window,t){case"focusin":(Wf(k)||k.contentEditable==="true")&&(Vr=k,uc=u,ts=null);break;case"focusout":ts=uc=Vr=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,Xf(h,n,c);break;case"selectionchange":if(Zw)break;case"keydown":case"keyup":Xf(h,n,c)}var C;if(xh)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Or?ey(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Zg&&n.locale!=="ko"&&(Or||O!=="onCompositionStart"?O==="onCompositionEnd"&&Or&&(C=Jg()):(_n=c,Dh="value"in _n?_n.value:_n.textContent,Or=!0)),k=_a(u,O),0<k.length&&(O=new jf(O,t,null,n,c),h.push({event:O,listeners:k}),C?O.data=C:(C=ty(n),C!==null&&(O.data=C)))),(C=zw?jw(t,n):Bw(t,n))&&(u=_a(u,"onBeforeInput"),0<u.length&&(c=new jf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}fy(h,e)})}function Ts(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _a(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ms(t,n),s!=null&&r.unshift(Ts(t,s,i)),s=ms(t,e),s!=null&&r.push(Ts(t,s,i))),t=t.return}return r}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ep(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ms(n,s),l!=null&&o.unshift(Ts(n,l,a))):i||(l=ms(n,s),l!=null&&o.push(Ts(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var r1=/\r\n?/g,i1=/\u0000|\uFFFD/g;function tp(t){return(typeof t=="string"?t:""+t).replace(r1,`
`).replace(i1,"")}function Co(t,e,n){if(e=tp(e),tp(t)!==e&&n)throw Error(w(425))}function va(){}var hc=null,dc=null;function fc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,s1=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,o1=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(t){return np.resolve(null).then(t).catch(a1)}:pc;function a1(t){setTimeout(function(){throw t})}function du(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_s(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_s(e)}function An(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Ti,Is="__reactProps$"+Ti,Zt="__reactContainer$"+Ti,mc="__reactEvents$"+Ti,l1="__reactListeners$"+Ti,u1="__reactHandles$"+Ti;function Yn(t){var e=t[Ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zt]||n[Ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rp(t);t!==null;){if(n=t[Ct])return n;t=rp(t)}return e}t=n,n=t.parentNode}return null}function Qs(t){return t=t[Ct]||t[Zt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function ol(t){return t[Is]||null}var gc=[],Mr=-1;function bn(t){return{current:t}}function ee(t){0>Mr||(t.current=gc[Mr],gc[Mr]=null,Mr--)}function X(t,e){Mr++,gc[Mr]=t.current,t.current=e}var xn={},je=bn(xn),Xe=bn(!1),lr=xn;function si(t,e){var n=t.type.contextTypes;if(!n)return xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Je(t){return t=t.childContextTypes,t!=null}function Ea(){ee(Xe),ee(je)}function ip(t,e,n){if(je.current!==xn)throw Error(w(168));X(je,e),X(Xe,n)}function my(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,KE(t)||"Unknown",i));return se({},n,r)}function wa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xn,lr=je.current,X(je,t),X(Xe,Xe.current),!0}function sp(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=my(t,e,lr),r.__reactInternalMemoizedMergedChildContext=t,ee(Xe),ee(je),X(je,t)):ee(Xe),X(Xe,n)}var qt=null,al=!1,fu=!1;function gy(t){qt===null?qt=[t]:qt.push(t)}function c1(t){al=!0,gy(t)}function zn(){if(!fu&&qt!==null){fu=!0;var t=0,e=G;try{var n=qt;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qt=null,al=!1}catch(i){throw qt!==null&&(qt=qt.slice(t+1)),zg(kh,zn),i}finally{G=e,fu=!1}}return null}var Fr=[],Ur=0,Ta=null,Ia=0,at=[],lt=0,ur=null,Wt=1,Kt="";function Wn(t,e){Fr[Ur++]=Ia,Fr[Ur++]=Ta,Ta=t,Ia=e}function yy(t,e,n){at[lt++]=Wt,at[lt++]=Kt,at[lt++]=ur,ur=t;var r=Wt;t=Kt;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var s=32-Et(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wt=1<<32-Et(e)+i|n<<i|r,Kt=s+t}else Wt=1<<s|n<<i|r,Kt=t}function Mh(t){t.return!==null&&(Wn(t,1),yy(t,1,0))}function Fh(t){for(;t===Ta;)Ta=Fr[--Ur],Fr[Ur]=null,Ia=Fr[--Ur],Fr[Ur]=null;for(;t===ur;)ur=at[--lt],at[lt]=null,Kt=at[--lt],at[lt]=null,Wt=at[--lt],at[lt]=null}var nt=null,tt=null,te=!1,_t=null;function _y(t,e){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function op(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,tt=An(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ur!==null?{id:Wt,overflow:Kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,tt=null,!0):!1;default:return!1}}function yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _c(t){if(te){var e=tt;if(e){var n=e;if(!op(t,e)){if(yc(t))throw Error(w(418));e=An(n.nextSibling);var r=nt;e&&op(t,e)?_y(r,n):(t.flags=t.flags&-4097|2,te=!1,nt=t)}}else{if(yc(t))throw Error(w(418));t.flags=t.flags&-4097|2,te=!1,nt=t}}}function ap(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function Po(t){if(t!==nt)return!1;if(!te)return ap(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fc(t.type,t.memoizedProps)),e&&(e=tt)){if(yc(t))throw vy(),Error(w(418));for(;e;)_y(t,e),e=An(e.nextSibling)}if(ap(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=An(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=nt?An(t.stateNode.nextSibling):null;return!0}function vy(){for(var t=tt;t;)t=An(t.nextSibling)}function oi(){tt=nt=null,te=!1}function Uh(t){_t===null?_t=[t]:_t.push(t)}var h1=on.ReactCurrentBatchConfig;function gt(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Sa=bn(null),Aa=null,$r=null,$h=null;function bh(){$h=$r=Aa=null}function zh(t){var e=Sa.current;ee(Sa),t._currentValue=e}function vc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qr(t,e){Aa=t,$h=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ye=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if($h!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(Aa===null)throw Error(w(308));$r=t,Aa.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var Xn=null;function jh(t){Xn===null?Xn=[t]:Xn.push(t)}function Ey(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jh(e)):(n.next=i.next,i.next=n),e.interleaved=n,en(t,r)}function en(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hn=!1;function Bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,en(t,n)}return i=r.interleaved,i===null?(e.next=e,jh(r)):(e.next=i.next,i.next=e),r.interleaved=e,en(t,n)}function Xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ch(t,n)}}function lp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ra(t,e,n,r){var i=t.updateQueue;hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,E=a;switch(d=e,g=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){h=_.call(g,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,d=typeof _=="function"?_.call(g,h,d):_,d==null)break e;h=se({},h,d);break e;case 2:hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hr|=o,t.lanes=o,t.memoizedState=h}}function up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Ty=new Eg.Component().refs;function Ec(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ll={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=We(),i=Cn(t),s=Xt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(wt(e,t,i,r),Xo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=We(),i=Cn(t),s=Xt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(wt(e,t,i,r),Xo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=We(),r=Cn(t),i=Xt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rn(t,i,r),e!==null&&(wt(e,t,r,n),Xo(e,t,r))}};function cp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Es(n,r)||!Es(i,s):!0}function Iy(t,e,n){var r=!1,i=xn,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Je(e)?lr:je.current,r=e.contextTypes,s=(r=r!=null)?si(t,i):xn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ll.enqueueReplaceState(e,e.state,null)}function wc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ty,Bh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Je(e)?lr:je.current,i.context=si(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ec(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ll.enqueueReplaceState(i,i.state,null),Ra(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Ty&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function No(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function Sy(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Pn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,y){return f===null||f.tag!==6?(f=Eu(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,y){var I=m.type;return I===Dr?c(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===cn&&dp(I)===f.type)?(y=i(f,m.props),y.ref=Fi(p,f,m),y.return=p,y):(y=ra(m.type,m.key,m.props,null,p.mode,y),y.ref=Fi(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=wu(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,y,I){return f===null||f.tag!==7?(f=ir(m,p.mode,y,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Eu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vo:return m=ra(f.type,f.key,f.props,null,p.mode,m),m.ref=Fi(p,null,f),m.return=p,m;case Nr:return f=wu(f,p.mode,m),f.return=p,f;case cn:var y=f._init;return h(p,y(f._payload),m)}if(Hi(f)||Oi(f))return f=ir(f,p.mode,m,null),f.return=p,f;No(p,f)}return null}function d(p,f,m,y){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vo:return m.key===I?l(p,f,m,y):null;case Nr:return m.key===I?u(p,f,m,y):null;case cn:return I=m._init,d(p,f,I(m._payload),y)}if(Hi(m)||Oi(m))return I!==null?null:c(p,f,m,y,null);No(p,m)}return null}function g(p,f,m,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(f,p,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vo:return p=p.get(y.key===null?m:y.key)||null,l(f,p,y,I);case Nr:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,I);case cn:var k=y._init;return g(p,f,m,k(y._payload),I)}if(Hi(y)||Oi(y))return p=p.get(m)||null,c(f,p,y,I,null);No(f,y)}return null}function _(p,f,m,y){for(var I=null,k=null,C=f,O=f=0,Y=null;C!==null&&O<m.length;O++){C.index>O?(Y=C,C=null):Y=C.sibling;var $=d(p,C,m[O],y);if($===null){C===null&&(C=Y);break}t&&C&&$.alternate===null&&e(p,C),f=s($,f,O),k===null?I=$:k.sibling=$,k=$,C=Y}if(O===m.length)return n(p,C),te&&Wn(p,O),I;if(C===null){for(;O<m.length;O++)C=h(p,m[O],y),C!==null&&(f=s(C,f,O),k===null?I=C:k.sibling=C,k=C);return te&&Wn(p,O),I}for(C=r(p,C);O<m.length;O++)Y=g(C,p,O,m[O],y),Y!==null&&(t&&Y.alternate!==null&&C.delete(Y.key===null?O:Y.key),f=s(Y,f,O),k===null?I=Y:k.sibling=Y,k=Y);return t&&C.forEach(function(pt){return e(p,pt)}),te&&Wn(p,O),I}function E(p,f,m,y){var I=Oi(m);if(typeof I!="function")throw Error(w(150));if(m=I.call(m),m==null)throw Error(w(151));for(var k=I=null,C=f,O=f=0,Y=null,$=m.next();C!==null&&!$.done;O++,$=m.next()){C.index>O?(Y=C,C=null):Y=C.sibling;var pt=d(p,C,$.value,y);if(pt===null){C===null&&(C=Y);break}t&&C&&pt.alternate===null&&e(p,C),f=s(pt,f,O),k===null?I=pt:k.sibling=pt,k=pt,C=Y}if($.done)return n(p,C),te&&Wn(p,O),I;if(C===null){for(;!$.done;O++,$=m.next())$=h(p,$.value,y),$!==null&&(f=s($,f,O),k===null?I=$:k.sibling=$,k=$);return te&&Wn(p,O),I}for(C=r(p,C);!$.done;O++,$=m.next())$=g(C,p,O,$.value,y),$!==null&&(t&&$.alternate!==null&&C.delete($.key===null?O:$.key),f=s($,f,O),k===null?I=$:k.sibling=$,k=$);return t&&C.forEach(function(Ni){return e(p,Ni)}),te&&Wn(p,O),I}function S(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===Dr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case vo:e:{for(var I=m.key,k=f;k!==null;){if(k.key===I){if(I=m.type,I===Dr){if(k.tag===7){n(p,k.sibling),f=i(k,m.props.children),f.return=p,p=f;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===cn&&dp(I)===k.type){n(p,k.sibling),f=i(k,m.props),f.ref=Fi(p,k,m),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}m.type===Dr?(f=ir(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=ra(m.type,m.key,m.props,null,p.mode,y),y.ref=Fi(p,f,m),y.return=p,p=y)}return o(p);case Nr:e:{for(k=m.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=wu(m,p.mode,y),f.return=p,p=f}return o(p);case cn:return k=m._init,S(p,f,k(m._payload),y)}if(Hi(m))return _(p,f,m,y);if(Oi(m))return E(p,f,m,y);No(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Eu(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return S}var ai=Sy(!0),Ay=Sy(!1),Ys={},xt=bn(Ys),Ss=bn(Ys),As=bn(Ys);function Jn(t){if(t===Ys)throw Error(w(174));return t}function Hh(t,e){switch(X(As,e),X(Ss,t),X(xt,Ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zu(e,t)}ee(xt),X(xt,e)}function li(){ee(xt),ee(Ss),ee(As)}function Ry(t){Jn(As.current);var e=Jn(xt.current),n=Zu(e,t.type);e!==n&&(X(Ss,t),X(xt,n))}function qh(t){Ss.current===t&&(ee(xt),ee(Ss))}var ne=bn(0);function ka(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pu=[];function Wh(){for(var t=0;t<pu.length;t++)pu[t]._workInProgressVersionPrimary=null;pu.length=0}var Jo=on.ReactCurrentDispatcher,mu=on.ReactCurrentBatchConfig,cr=0,ie=null,ye=null,we=null,Ca=!1,ns=!1,Rs=0,d1=0;function Ve(){throw Error(w(321))}function Kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tt(t[n],e[n]))return!1;return!0}function Gh(t,e,n,r,i,s){if(cr=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jo.current=t===null||t.memoizedState===null?g1:y1,t=n(r,i),ns){s=0;do{if(ns=!1,Rs=0,25<=s)throw Error(w(301));s+=1,we=ye=null,e.updateQueue=null,Jo.current=_1,t=n(r,i)}while(ns)}if(Jo.current=Pa,e=ye!==null&&ye.next!==null,cr=0,we=ye=ie=null,Ca=!1,e)throw Error(w(300));return t}function Qh(){var t=Rs!==0;return Rs=0,t}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ie.memoizedState=we=t:we=we.next=t,we}function ft(){if(ye===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=we===null?ie.memoizedState:we.next;if(e!==null)we=e,ye=t;else{if(t===null)throw Error(w(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},we===null?ie.memoizedState=we=t:we=we.next=t}return we}function ks(t,e){return typeof e=="function"?e(t):e}function gu(t){var e=ft(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((cr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ie.lanes|=c,hr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Tt(r,e.memoizedState)||(Ye=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yu(t){var e=ft(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tt(s,e.memoizedState)||(Ye=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ky(){}function Cy(t,e){var n=ie,r=ft(),i=e(),s=!Tt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ye=!0),r=r.queue,Yh(Dy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Cs(9,Ny.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(w(349));cr&30||Py(n,e,i)}return i}function Py(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ny(t,e,n,r){e.value=n,e.getSnapshot=r,Oy(e)&&Vy(t)}function Dy(t,e,n){return n(function(){Oy(e)&&Vy(t)})}function Oy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tt(t,n)}catch{return!0}}function Vy(t){var e=en(t,1);e!==null&&wt(e,t,1,-1)}function fp(t){var e=kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},e.queue=t,t=t.dispatch=m1.bind(null,ie,t),[e.memoizedState,t]}function Cs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xy(){return ft().memoizedState}function Zo(t,e,n,r){var i=kt();ie.flags|=t,i.memoizedState=Cs(1|e,n,void 0,r===void 0?null:r)}function ul(t,e,n,r){var i=ft();r=r===void 0?null:r;var s=void 0;if(ye!==null){var o=ye.memoizedState;if(s=o.destroy,r!==null&&Kh(r,o.deps)){i.memoizedState=Cs(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Cs(1|e,n,s,r)}function pp(t,e){return Zo(8390656,8,t,e)}function Yh(t,e){return ul(2048,8,t,e)}function Ly(t,e){return ul(4,2,t,e)}function My(t,e){return ul(4,4,t,e)}function Fy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uy(t,e,n){return n=n!=null?n.concat([t]):null,ul(4,4,Fy.bind(null,e,t),n)}function Xh(){}function $y(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function by(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zy(t,e,n){return cr&21?(Tt(n,e)||(n=Hg(),ie.lanes|=n,hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ye=!0),t.memoizedState=n)}function f1(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=mu.transition;mu.transition={};try{t(!1),e()}finally{G=n,mu.transition=r}}function jy(){return ft().memoizedState}function p1(t,e,n){var r=Cn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},By(t))Hy(e,n);else if(n=Ey(t,e,n,r),n!==null){var i=We();wt(n,t,r,i),qy(n,e,r)}}function m1(t,e,n){var r=Cn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(By(t))Hy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,o)){var l=e.interleaved;l===null?(i.next=i,jh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ey(t,e,i,r),n!==null&&(i=We(),wt(n,t,r,i),qy(n,e,r))}}function By(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function Hy(t,e){ns=Ca=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ch(t,n)}}var Pa={readContext:dt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},g1={readContext:dt,useCallback:function(t,e){return kt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zo(4194308,4,Fy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zo(4,2,t,e)},useMemo:function(t,e){var n=kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=p1.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=kt();return t={current:t},e.memoizedState=t},useState:fp,useDebugValue:Xh,useDeferredValue:function(t){return kt().memoizedState=t},useTransition:function(){var t=fp(!1),e=t[0];return t=f1.bind(null,t[1]),kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=kt();if(te){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),Te===null)throw Error(w(349));cr&30||Py(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pp(Dy.bind(null,r,s,t),[t]),r.flags|=2048,Cs(9,Ny.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kt(),e=Te.identifierPrefix;if(te){var n=Kt,r=Wt;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=d1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},y1={readContext:dt,useCallback:$y,useContext:dt,useEffect:Yh,useImperativeHandle:Uy,useInsertionEffect:Ly,useLayoutEffect:My,useMemo:by,useReducer:gu,useRef:xy,useState:function(){return gu(ks)},useDebugValue:Xh,useDeferredValue:function(t){var e=ft();return zy(e,ye.memoizedState,t)},useTransition:function(){var t=gu(ks)[0],e=ft().memoizedState;return[t,e]},useMutableSource:ky,useSyncExternalStore:Cy,useId:jy,unstable_isNewReconciler:!1},_1={readContext:dt,useCallback:$y,useContext:dt,useEffect:Yh,useImperativeHandle:Uy,useInsertionEffect:Ly,useLayoutEffect:My,useMemo:by,useReducer:yu,useRef:xy,useState:function(){return yu(ks)},useDebugValue:Xh,useDeferredValue:function(t){var e=ft();return ye===null?e.memoizedState=t:zy(e,ye.memoizedState,t)},useTransition:function(){var t=yu(ks)[0],e=ft().memoizedState;return[t,e]},useMutableSource:ky,useSyncExternalStore:Cy,useId:jy,unstable_isNewReconciler:!1};function ui(t,e){try{var n="",r=e;do n+=WE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Tc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var v1=typeof WeakMap=="function"?WeakMap:Map;function Wy(t,e,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Da||(Da=!0,Oc=r),Tc(t,e)},n}function Ky(t,e,n){n=Xt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Tc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tc(t,e),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new v1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=V1.bind(null,t,e,n),e.then(t,t))}function gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xt(-1,1),e.tag=2,Rn(n,e,1))),n.lanes|=1),t)}var E1=on.ReactCurrentOwner,Ye=!1;function He(t,e,n,r){e.child=t===null?Ay(e,null,n,r):ai(e,t.child,n,r)}function _p(t,e,n,r,i){n=n.render;var s=e.ref;return Qr(e,i),r=Gh(t,e,n,r,s,i),n=Qh(),t!==null&&!Ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tn(t,e,i)):(te&&n&&Mh(e),e.flags|=1,He(t,e,r,i),e.child)}function vp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gy(t,e,s,r,i)):(t=ra(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Es,n(o,r)&&t.ref===e.ref)return tn(t,e,i)}return e.flags|=1,t=Pn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Gy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Es(s,r)&&t.ref===e.ref)if(Ye=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ye=!0);else return e.lanes=t.lanes,tn(t,e,i)}return Ic(t,e,n,r,i)}function Qy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(zr,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(zr,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(zr,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(zr,et),et|=r;return He(t,e,i,n),e.child}function Yy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ic(t,e,n,r,i){var s=Je(n)?lr:je.current;return s=si(e,s),Qr(e,i),n=Gh(t,e,n,r,s,i),r=Qh(),t!==null&&!Ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tn(t,e,i)):(te&&r&&Mh(e),e.flags|=1,He(t,e,n,i),e.child)}function Ep(t,e,n,r,i){if(Je(n)){var s=!0;wa(e)}else s=!1;if(Qr(e,i),e.stateNode===null)ea(t,e),Iy(e,n,r),wc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Je(n)?lr:je.current,u=si(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&hp(e,o,r,u),hn=!1;var d=e.memoizedState;o.state=d,Ra(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Xe.current||hn?(typeof c=="function"&&(Ec(e,n,c,r),l=e.memoizedState),(a=hn||cp(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,wy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:gt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dt(l):(l=Je(n)?lr:je.current,l=si(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&hp(e,o,r,l),hn=!1,d=e.memoizedState,o.state=d,Ra(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||Xe.current||hn?(typeof g=="function"&&(Ec(e,n,g,r),_=e.memoizedState),(u=hn||cp(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Sc(t,e,n,r,s,i)}function Sc(t,e,n,r,i,s){Yy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sp(e,n,!1),tn(t,e,s);r=e.stateNode,E1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ai(e,t.child,null,s),e.child=ai(e,null,a,s)):He(t,e,a,s),e.memoizedState=r.state,i&&sp(e,n,!0),e.child}function Xy(t){var e=t.stateNode;e.pendingContext?ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ip(t,e.context,!1),Hh(t,e.containerInfo)}function wp(t,e,n,r,i){return oi(),Uh(i),e.flags|=256,He(t,e,n,r),e.child}var Ac={dehydrated:null,treeContext:null,retryLane:0};function Rc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jy(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(ne,i&1),t===null)return _c(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dl(o,r,0,null),t=ir(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rc(n),e.memoizedState=Ac,t):Jh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return w1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Pn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pn(a,s):(s=ir(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Rc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ac,r}return s=t.child,t=s.sibling,r=Pn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jh(t,e){return e=dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Do(t,e,n,r){return r!==null&&Uh(r),ai(e,t.child,null,n),t=Jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function w1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_u(Error(w(422))),Do(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=dl({mode:"visible",children:r.children},i,0,null),s=ir(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ai(e,t.child,null,o),e.child.memoizedState=Rc(o),e.memoizedState=Ac,s);if(!(e.mode&1))return Do(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=_u(s,r,void 0),Do(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ye||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,en(t,i),wt(r,t,i,-1))}return id(),r=_u(Error(w(421))),Do(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=x1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tt=An(i.nextSibling),nt=e,te=!0,_t=null,t!==null&&(at[lt++]=Wt,at[lt++]=Kt,at[lt++]=ur,Wt=t.id,Kt=t.overflow,ur=e),e=Jh(e,r.children),e.flags|=4096,e)}function Tp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vc(t.return,e,n)}function vu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(He(t,e,r.children,n),r=ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tp(t,n,e);else if(t.tag===19)Tp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ka(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),vu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ka(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}vu(e,!0,n,null,s);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ea(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Pn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function T1(t,e,n){switch(e.tag){case 3:Xy(e),oi();break;case 5:Ry(e);break;case 1:Je(e.type)&&wa(e);break;case 4:Hh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(Sa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(ne,ne.current&1),e.flags|=128,null):n&e.child.childLanes?Jy(t,e,n):(X(ne,ne.current&1),t=tn(t,e,n),t!==null?t.sibling:null);X(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Zy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,Qy(t,e,n)}return tn(t,e,n)}var e_,kc,t_,n_;e_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kc=function(){};t_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jn(xt.current);var s=null;switch(n){case"input":i=Qu(t,i),r=Qu(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=Ju(t,i),r=Ju(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=va)}ec(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};n_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ui(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function I1(t,e,n){var r=e.pendingProps;switch(Fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return Je(e.type)&&Ea(),xe(e),null;case 3:return r=e.stateNode,li(),ee(Xe),ee(je),Wh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_t!==null&&(Lc(_t),_t=null))),kc(t,e),xe(e),null;case 5:qh(e);var i=Jn(As.current);if(n=e.type,t!==null&&e.stateNode!=null)t_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return xe(e),null}if(t=Jn(xt.current),Po(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ct]=e,r[Is]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Wi.length;i++)J(Wi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Df(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Vf(r,s),J("invalid",r)}ec(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Co(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Co(r.textContent,a,t),i=["children",""+a]):fs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Eo(r),Of(r,s,!0);break;case"textarea":Eo(r),xf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=va)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ct]=e,t[Is]=r,e_(t,e,!1,!1),e.stateNode=t;e:{switch(o=tc(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wi.length;i++)J(Wi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Df(t,r),i=Qu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),J("invalid",t);break;case"textarea":Vf(t,r),i=Ju(t,r),J("invalid",t);break;default:i=r}ec(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Og(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ng(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ps(t,l):typeof l=="number"&&ps(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&Th(t,s,l,o))}switch(n){case"input":Eo(t),Of(t,r,!1);break;case"textarea":Eo(t),xf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qr(t,!!r.multiple,s,!1):r.defaultValue!=null&&qr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=va)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)n_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Jn(As.current),Jn(xt.current),Po(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ct]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:Co(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Co(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=e,e.stateNode=r}return xe(e),null;case 13:if(ee(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(te&&tt!==null&&e.mode&1&&!(e.flags&128))vy(),oi(),e.flags|=98560,s=!1;else if(s=Po(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Ct]=e}else oi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xe(e),s=!1}else _t!==null&&(Lc(_t),_t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ne.current&1?_e===0&&(_e=3):id())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return li(),kc(t,e),t===null&&ws(e.stateNode.containerInfo),xe(e),null;case 10:return zh(e.type._context),xe(e),null;case 17:return Je(e.type)&&Ea(),xe(e),null;case 19:if(ee(ne),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ui(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ka(t),o!==null){for(e.flags|=128,Ui(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>ci&&(e.flags|=128,r=!0,Ui(s,!1),e.lanes=4194304)}else{if(!r)if(t=ka(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ui(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return xe(e),null}else 2*ue()-s.renderingStartTime>ci&&n!==1073741824&&(e.flags|=128,r=!0,Ui(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,n=ne.current,X(ne,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function S1(t,e){switch(Fh(e),e.tag){case 1:return Je(e.type)&&Ea(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return li(),ee(Xe),ee(je),Wh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qh(e),null;case 13:if(ee(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(ne),null;case 4:return li(),null;case 10:return zh(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var Oo=!1,Fe=!1,A1=typeof WeakSet=="function"?WeakSet:Set,P=null;function br(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function Cc(t,e,n){try{n()}catch(r){oe(t,e,r)}}var Ip=!1;function R1(t,e){if(hc=ga,t=oy(),Lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dc={focusedElem:t,selectionRange:n},ga=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,S=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?E:gt(e.type,E),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){oe(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return _=Ip,Ip=!1,_}function rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cc(e,n,s)}i=i.next}while(i!==r)}}function cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function r_(t){var e=t.alternate;e!==null&&(t.alternate=null,r_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[Is],delete e[mc],delete e[l1],delete e[u1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i_(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=va));else if(r!==4&&(t=t.child,t!==null))for(Nc(t,e,n),t=t.sibling;t!==null;)Nc(t,e,n),t=t.sibling}function Dc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dc(t,e,n),t=t.sibling;t!==null;)Dc(t,e,n),t=t.sibling}var Re=null,yt=!1;function ln(t,e,n){for(n=n.child;n!==null;)s_(t,e,n),n=n.sibling}function s_(t,e,n){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:Fe||br(n,e);case 6:var r=Re,i=yt;Re=null,ln(t,e,n),Re=r,yt=i,Re!==null&&(yt?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(yt?(t=Re,n=n.stateNode,t.nodeType===8?du(t.parentNode,n):t.nodeType===1&&du(t,n),_s(t)):du(Re,n.stateNode));break;case 4:r=Re,i=yt,Re=n.stateNode.containerInfo,yt=!0,ln(t,e,n),Re=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cc(n,e,o),i=i.next}while(i!==r)}ln(t,e,n);break;case 1:if(!Fe&&(br(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,e,a)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,ln(t,e,n),Fe=r):ln(t,e,n);break;default:ln(t,e,n)}}function Ap(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new A1),e.forEach(function(r){var i=L1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,yt=!1;break e;case 3:Re=a.stateNode.containerInfo,yt=!0;break e;case 4:Re=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(Re===null)throw Error(w(160));s_(s,o,i),Re=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o_(e,t),e=e.sibling}function o_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mt(e,t),Rt(t),r&4){try{rs(3,t,t.return),cl(3,t)}catch(E){oe(t,t.return,E)}try{rs(5,t,t.return)}catch(E){oe(t,t.return,E)}}break;case 1:mt(e,t),Rt(t),r&512&&n!==null&&br(n,n.return);break;case 5:if(mt(e,t),Rt(t),r&512&&n!==null&&br(n,n.return),t.flags&32){var i=t.stateNode;try{ps(i,"")}catch(E){oe(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&kg(i,s),tc(a,o);var u=tc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Og(i,h):c==="dangerouslySetInnerHTML"?Ng(i,h):c==="children"?ps(i,h):Th(i,c,h,u)}switch(a){case"input":Yu(i,s);break;case"textarea":Cg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?qr(i,!!s.multiple,s.defaultValue,!0):qr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Is]=s}catch(E){oe(t,t.return,E)}}break;case 6:if(mt(e,t),Rt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){oe(t,t.return,E)}}break;case 3:if(mt(e,t),Rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_s(e.containerInfo)}catch(E){oe(t,t.return,E)}break;case 4:mt(e,t),Rt(t);break;case 13:mt(e,t),Rt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(td=ue())),r&4&&Ap(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Fe=(u=Fe)||c,mt(e,t),Fe=u):mt(e,t),Rt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(d=P,g=d.child,d.tag){case 0:case 11:case 14:case 15:rs(4,d,d.return);break;case 1:br(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){oe(r,n,E)}}break;case 5:br(d,d.return);break;case 22:if(d.memoizedState!==null){kp(h);continue}}g!==null?(g.return=d,P=g):kp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dg("display",o))}catch(E){oe(t,t.return,E)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){oe(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mt(e,t),Rt(t),r&4&&Ap(t);break;case 21:break;default:mt(e,t),Rt(t)}}function Rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i_(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ps(i,""),r.flags&=-33);var s=Sp(t);Dc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Sp(t);Nc(t,a,o);break;default:throw Error(w(161))}}catch(l){oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k1(t,e,n){P=t,a_(t)}function a_(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=Oo;var u=Fe;if(Oo=o,(Fe=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Cp(i):l!==null?(l.return=o,P=l):Cp(i);for(;s!==null;)P=s,a_(s),s=s.sibling;P=i,Oo=a,Fe=u}Rp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Rp(t)}}function Rp(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fe||cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&up(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}up(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&_s(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Fe||e.flags&512&&Pc(e)}catch(d){oe(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function kp(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Cp(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cl(4,e)}catch(l){oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){oe(e,i,l)}}var s=e.return;try{Pc(e)}catch(l){oe(e,s,l)}break;case 5:var o=e.return;try{Pc(e)}catch(l){oe(e,o,l)}}}catch(l){oe(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var C1=Math.ceil,Na=on.ReactCurrentDispatcher,Zh=on.ReactCurrentOwner,ht=on.ReactCurrentBatchConfig,q=0,Te=null,fe=null,Pe=0,et=0,zr=bn(0),_e=0,Ps=null,hr=0,hl=0,ed=0,is=null,Qe=null,td=0,ci=1/0,Ht=null,Da=!1,Oc=null,kn=null,Vo=!1,vn=null,Oa=0,ss=0,Vc=null,ta=-1,na=0;function We(){return q&6?ue():ta!==-1?ta:ta=ue()}function Cn(t){return t.mode&1?q&2&&Pe!==0?Pe&-Pe:h1.transition!==null?(na===0&&(na=Hg()),na):(t=G,t!==0||(t=window.event,t=t===void 0?16:Xg(t.type)),t):1}function wt(t,e,n,r){if(50<ss)throw ss=0,Vc=null,Error(w(185));Ks(t,n,r),(!(q&2)||t!==Te)&&(t===Te&&(!(q&2)&&(hl|=n),_e===4&&fn(t,Pe)),Ze(t,r),n===1&&q===0&&!(e.mode&1)&&(ci=ue()+500,al&&zn()))}function Ze(t,e){var n=t.callbackNode;hw(t,e);var r=ma(t,t===Te?Pe:0);if(r===0)n!==null&&Ff(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ff(n),e===1)t.tag===0?c1(Pp.bind(null,t)):gy(Pp.bind(null,t)),o1(function(){!(q&6)&&zn()}),n=null;else{switch(qg(r)){case 1:n=kh;break;case 4:n=jg;break;case 16:n=pa;break;case 536870912:n=Bg;break;default:n=pa}n=m_(n,l_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l_(t,e){if(ta=-1,na=0,q&6)throw Error(w(327));var n=t.callbackNode;if(Yr()&&t.callbackNode!==n)return null;var r=ma(t,t===Te?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Va(t,r);else{e=r;var i=q;q|=2;var s=c_();(Te!==t||Pe!==e)&&(Ht=null,ci=ue()+500,rr(t,e));do try{D1();break}catch(a){u_(t,a)}while(!0);bh(),Na.current=s,q=i,fe!==null?e=0:(Te=null,Pe=0,e=_e)}if(e!==0){if(e===2&&(i=oc(t),i!==0&&(r=i,e=xc(t,i))),e===1)throw n=Ps,rr(t,0),fn(t,r),Ze(t,ue()),n;if(e===6)fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!P1(i)&&(e=Va(t,r),e===2&&(s=oc(t),s!==0&&(r=s,e=xc(t,s))),e===1))throw n=Ps,rr(t,0),fn(t,r),Ze(t,ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Kn(t,Qe,Ht);break;case 3:if(fn(t,r),(r&130023424)===r&&(e=td+500-ue(),10<e)){if(ma(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){We(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=pc(Kn.bind(null,t,Qe,Ht),e);break}Kn(t,Qe,Ht);break;case 4:if(fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Et(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*C1(r/1960))-r,10<r){t.timeoutHandle=pc(Kn.bind(null,t,Qe,Ht),r);break}Kn(t,Qe,Ht);break;case 5:Kn(t,Qe,Ht);break;default:throw Error(w(329))}}}return Ze(t,ue()),t.callbackNode===n?l_.bind(null,t):null}function xc(t,e){var n=is;return t.current.memoizedState.isDehydrated&&(rr(t,e).flags|=256),t=Va(t,e),t!==2&&(e=Qe,Qe=n,e!==null&&Lc(e)),t}function Lc(t){Qe===null?Qe=t:Qe.push.apply(Qe,t)}function P1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fn(t,e){for(e&=~ed,e&=~hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Et(e),r=1<<n;t[n]=-1,e&=~r}}function Pp(t){if(q&6)throw Error(w(327));Yr();var e=ma(t,0);if(!(e&1))return Ze(t,ue()),null;var n=Va(t,e);if(t.tag!==0&&n===2){var r=oc(t);r!==0&&(e=r,n=xc(t,r))}if(n===1)throw n=Ps,rr(t,0),fn(t,e),Ze(t,ue()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kn(t,Qe,Ht),Ze(t,ue()),null}function nd(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(ci=ue()+500,al&&zn())}}function dr(t){vn!==null&&vn.tag===0&&!(q&6)&&Yr();var e=q;q|=1;var n=ht.transition,r=G;try{if(ht.transition=null,G=1,t)return t()}finally{G=r,ht.transition=n,q=e,!(q&6)&&zn()}}function rd(){et=zr.current,ee(zr)}function rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,s1(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Fh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ea();break;case 3:li(),ee(Xe),ee(je),Wh();break;case 5:qh(r);break;case 4:li();break;case 13:ee(ne);break;case 19:ee(ne);break;case 10:zh(r.type._context);break;case 22:case 23:rd()}n=n.return}if(Te=t,fe=t=Pn(t.current,null),Pe=et=e,_e=0,Ps=null,ed=hl=hr=0,Qe=is=null,Xn!==null){for(e=0;e<Xn.length;e++)if(n=Xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xn=null}return t}function u_(t,e){do{var n=fe;try{if(bh(),Jo.current=Pa,Ca){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ca=!1}if(cr=0,we=ye=ie=null,ns=!1,Rs=0,Zh.current=null,n===null||n.return===null){_e=1,Ps=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=gp(o);if(g!==null){g.flags&=-257,yp(g,o,a,s,e),g.mode&1&&mp(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var E=new Set;E.add(l),e.updateQueue=E}else _.add(l);break e}else{if(!(e&1)){mp(s,u,e),id();break e}l=Error(w(426))}}else if(te&&a.mode&1){var S=gp(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),yp(S,o,a,s,e),Uh(ui(l,a));break e}}s=l=ui(l,a),_e!==4&&(_e=2),is===null?is=[s]:is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Wy(s,l,e);lp(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(kn===null||!kn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Ky(s,a,e);lp(s,y);break e}}s=s.return}while(s!==null)}d_(n)}catch(I){e=I,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function c_(){var t=Na.current;return Na.current=Pa,t===null?Pa:t}function id(){(_e===0||_e===3||_e===2)&&(_e=4),Te===null||!(hr&268435455)&&!(hl&268435455)||fn(Te,Pe)}function Va(t,e){var n=q;q|=2;var r=c_();(Te!==t||Pe!==e)&&(Ht=null,rr(t,e));do try{N1();break}catch(i){u_(t,i)}while(!0);if(bh(),q=n,Na.current=r,fe!==null)throw Error(w(261));return Te=null,Pe=0,_e}function N1(){for(;fe!==null;)h_(fe)}function D1(){for(;fe!==null&&!nw();)h_(fe)}function h_(t){var e=p_(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?d_(t):fe=e,Zh.current=null}function d_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=S1(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,fe=null;return}}else if(n=I1(n,e,et),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);_e===0&&(_e=5)}function Kn(t,e,n){var r=G,i=ht.transition;try{ht.transition=null,G=1,O1(t,e,n,r)}finally{ht.transition=i,G=r}return null}function O1(t,e,n,r){do Yr();while(vn!==null);if(q&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dw(t,s),t===Te&&(fe=Te=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,m_(pa,function(){return Yr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ht.transition,ht.transition=null;var o=G;G=1;var a=q;q|=4,Zh.current=null,R1(t,n),o_(n,t),Jw(dc),ga=!!hc,dc=hc=null,t.current=n,k1(n),rw(),q=a,G=o,ht.transition=s}else t.current=n;if(Vo&&(Vo=!1,vn=t,Oa=i),s=t.pendingLanes,s===0&&(kn=null),ow(n.stateNode),Ze(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Da)throw Da=!1,t=Oc,Oc=null,t;return Oa&1&&t.tag!==0&&Yr(),s=t.pendingLanes,s&1?t===Vc?ss++:(ss=0,Vc=t):ss=0,zn(),null}function Yr(){if(vn!==null){var t=qg(Oa),e=ht.transition,n=G;try{if(ht.transition=null,G=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,Oa=0,q&6)throw Error(w(331));var i=q;for(q|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:rs(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var d=c.sibling,g=c.return;if(r_(c),c===u){P=null;break}if(d!==null){d.return=g,P=d;break}P=g}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var S=E.sibling;E.sibling=null,E=S}while(E!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,P=m;else e:for(o=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(I){oe(a,a.return,I)}if(a===o){P=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,P=y;break e}P=a.return}}if(q=i,zn(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(nl,t)}catch{}r=!0}return r}finally{G=n,ht.transition=e}}return!1}function Np(t,e,n){e=ui(n,e),e=Wy(t,e,1),t=Rn(t,e,1),e=We(),t!==null&&(Ks(t,1,e),Ze(t,e))}function oe(t,e,n){if(t.tag===3)Np(t,t,n);else for(;e!==null;){if(e.tag===3){Np(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){t=ui(n,t),t=Ky(e,t,1),e=Rn(e,t,1),t=We(),e!==null&&(Ks(e,1,t),Ze(e,t));break}}e=e.return}}function V1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=We(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Pe&n)===n&&(_e===4||_e===3&&(Pe&130023424)===Pe&&500>ue()-td?rr(t,0):ed|=n),Ze(t,e)}function f_(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=We();t=en(t,e),t!==null&&(Ks(t,e,n),Ze(t,n))}function x1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),f_(t,n)}function L1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),f_(t,n)}var p_;p_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xe.current)Ye=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ye=!1,T1(t,e,n);Ye=!!(t.flags&131072)}else Ye=!1,te&&e.flags&1048576&&yy(e,Ia,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ea(t,e),t=e.pendingProps;var i=si(e,je.current);Qr(e,n),i=Gh(null,e,r,t,i,n);var s=Qh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Je(r)?(s=!0,wa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bh(e),i.updater=ll,e.stateNode=i,i._reactInternals=e,wc(e,r,t,n),e=Sc(null,e,r,!0,s,n)):(e.tag=0,te&&s&&Mh(e),He(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ea(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=F1(r),t=gt(r,t),i){case 0:e=Ic(null,e,r,t,n);break e;case 1:e=Ep(null,e,r,t,n);break e;case 11:e=_p(null,e,r,t,n);break e;case 14:e=vp(null,e,r,gt(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Ic(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Ep(t,e,r,i,n);case 3:e:{if(Xy(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,wy(t,e),Ra(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ui(Error(w(423)),e),e=wp(t,e,r,n,i);break e}else if(r!==i){i=ui(Error(w(424)),e),e=wp(t,e,r,n,i);break e}else for(tt=An(e.stateNode.containerInfo.firstChild),nt=e,te=!0,_t=null,n=Ay(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oi(),r===i){e=tn(t,e,n);break e}He(t,e,r,n)}e=e.child}return e;case 5:return Ry(e),t===null&&_c(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fc(r,i)?o=null:s!==null&&fc(r,s)&&(e.flags|=32),Yy(t,e),He(t,e,o,n),e.child;case 6:return t===null&&_c(e),null;case 13:return Jy(t,e,n);case 4:return Hh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ai(e,null,r,n):He(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),_p(t,e,r,i,n);case 7:return He(t,e,e.pendingProps,n),e.child;case 8:return He(t,e,e.pendingProps.children,n),e.child;case 12:return He(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(Sa,r._currentValue),r._currentValue=o,s!==null)if(Tt(s.value,o)){if(s.children===i.children&&!Xe.current){e=tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Xt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}He(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qr(e,n),i=dt(i),r=r(i),e.flags|=1,He(t,e,r,n),e.child;case 14:return r=e.type,i=gt(r,e.pendingProps),i=gt(r.type,i),vp(t,e,r,i,n);case 15:return Gy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),ea(t,e),e.tag=1,Je(r)?(t=!0,wa(e)):t=!1,Qr(e,n),Iy(e,r,i),wc(e,r,i,n),Sc(null,e,r,!0,t,n);case 19:return Zy(t,e,n);case 22:return Qy(t,e,n)}throw Error(w(156,e.tag))};function m_(t,e){return zg(t,e)}function M1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,e,n,r){return new M1(t,e,n,r)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function F1(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sh)return 11;if(t===Ah)return 14}return 2}function Pn(t,e){var n=t.alternate;return n===null?(n=ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ra(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Dr:return ir(n.children,i,s,e);case Ih:o=8,i|=8;break;case qu:return t=ct(12,n,e,i|2),t.elementType=qu,t.lanes=s,t;case Wu:return t=ct(13,n,e,i),t.elementType=Wu,t.lanes=s,t;case Ku:return t=ct(19,n,e,i),t.elementType=Ku,t.lanes=s,t;case Sg:return dl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tg:o=10;break e;case Ig:o=9;break e;case Sh:o=11;break e;case Ah:o=14;break e;case cn:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ir(t,e,n,r){return t=ct(7,t,r,e),t.lanes=n,t}function dl(t,e,n,r){return t=ct(22,t,r,e),t.elementType=Sg,t.lanes=n,t.stateNode={isHidden:!1},t}function Eu(t,e,n){return t=ct(6,t,null,e),t.lanes=n,t}function wu(t,e,n){return e=ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function U1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function od(t,e,n,r,i,s,o,a,l){return t=new U1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bh(s),t}function $1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function g_(t){if(!t)return xn;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Je(n))return my(t,n,e)}return e}function y_(t,e,n,r,i,s,o,a,l){return t=od(n,r,!0,t,i,s,o,a,l),t.context=g_(null),n=t.current,r=We(),i=Cn(n),s=Xt(r,i),s.callback=e??null,Rn(n,s,i),t.current.lanes=i,Ks(t,i,r),Ze(t,r),t}function fl(t,e,n,r){var i=e.current,s=We(),o=Cn(i);return n=g_(n),e.context===null?e.context=n:e.pendingContext=n,e=Xt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rn(i,e,o),t!==null&&(wt(t,i,o,s),Xo(t,i,o)),o}function xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ad(t,e){Dp(t,e),(t=t.alternate)&&Dp(t,e)}function b1(){return null}var __=typeof reportError=="function"?reportError:function(t){console.error(t)};function ld(t){this._internalRoot=t}pl.prototype.render=ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));fl(t,e,null,null)};pl.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){fl(null,t,null,null)}),e[Zt]=null}};function pl(t){this._internalRoot=t}pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dn.length&&e!==0&&e<dn[n].priority;n++);dn.splice(n,0,t),n===0&&Yg(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Op(){}function z1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=xa(o);s.call(u)}}var o=y_(e,r,t,0,null,!1,!1,"",Op);return t._reactRootContainer=o,t[Zt]=o.current,ws(t.nodeType===8?t.parentNode:t),dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=xa(l);a.call(u)}}var l=od(t,0,!1,null,null,!1,!1,"",Op);return t._reactRootContainer=l,t[Zt]=l.current,ws(t.nodeType===8?t.parentNode:t),dr(function(){fl(e,l,n,r)}),l}function gl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=xa(o);a.call(l)}}fl(e,o,t,i)}else o=z1(n,e,t,i,r);return xa(o)}Wg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qi(e.pendingLanes);n!==0&&(Ch(e,n|1),Ze(e,ue()),!(q&6)&&(ci=ue()+500,zn()))}break;case 13:dr(function(){var r=en(t,1);if(r!==null){var i=We();wt(r,t,1,i)}}),ad(t,1)}};Ph=function(t){if(t.tag===13){var e=en(t,134217728);if(e!==null){var n=We();wt(e,t,134217728,n)}ad(t,134217728)}};Kg=function(t){if(t.tag===13){var e=Cn(t),n=en(t,e);if(n!==null){var r=We();wt(n,t,e,r)}ad(t,e)}};Gg=function(){return G};Qg=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};rc=function(t,e,n){switch(e){case"input":if(Yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ol(r);if(!i)throw Error(w(90));Rg(r),Yu(r,i)}}}break;case"textarea":Cg(t,n);break;case"select":e=n.value,e!=null&&qr(t,!!n.multiple,e,!1)}};Lg=nd;Mg=dr;var j1={usingClientEntryPoint:!1,Events:[Qs,Lr,ol,Vg,xg,nd]},$i={findFiberByHostInstance:Yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},B1={bundleType:$i.bundleType,version:$i.version,rendererPackageName:$i.rendererPackageName,rendererConfig:$i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$g(t),t===null?null:t.stateNode},findFiberByHostInstance:$i.findFiberByHostInstance||b1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{nl=xo.inject(B1),Vt=xo}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;st.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(e))throw Error(w(200));return $1(t,e,null,n)};st.createRoot=function(t,e){if(!ud(t))throw Error(w(299));var n=!1,r="",i=__;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,r,i),t[Zt]=e.current,ws(t.nodeType===8?t.parentNode:t),new ld(e)};st.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=$g(e),t=t===null?null:t.stateNode,t};st.flushSync=function(t){return dr(t)};st.hydrate=function(t,e,n){if(!ml(e))throw Error(w(200));return gl(null,t,e,!0,n)};st.hydrateRoot=function(t,e,n){if(!ud(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=__;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y_(e,null,t,1,n??null,i,!1,s,o),t[Zt]=e.current,ws(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pl(e)};st.render=function(t,e,n){if(!ml(e))throw Error(w(200));return gl(null,t,e,!1,n)};st.unmountComponentAtNode=function(t){if(!ml(t))throw Error(w(40));return t._reactRootContainer?(dr(function(){gl(null,null,t,!1,function(){t._reactRootContainer=null,t[Zt]=null})}),!0):!1};st.unstable_batchedUpdates=nd;st.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ml(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return gl(t,e,n,!1,r)};st.version="18.2.0-next-9e3b772b8-20220608";function v_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v_)}catch(t){console.error(t)}}v_(),yg.exports=st;var H1=yg.exports,Vp=H1;Bu.createRoot=Vp.createRoot,Bu.hydrateRoot=Vp.hydrateRoot;var xp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},q1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},w_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(E_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):q1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new W1;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class W1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const K1=function(t){const e=E_(t);return w_.encodeByteArray(e,!0)},La=function(t){return K1(t).replace(/\./g,"")},T_=function(t){try{return w_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=()=>G1().__FIREBASE_DEFAULTS__,Y1=()=>{if(typeof process>"u"||typeof xp>"u")return;const t=xp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},X1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&T_(t[1]);return e&&JSON.parse(e)},yl=()=>{try{return Q1()||Y1()||X1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I_=t=>{var e,n;return(n=(e=yl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},S_=t=>{const e=I_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},A_=()=>{var t;return(t=yl())===null||t===void 0?void 0:t.config},R_=t=>{var e;return(e=yl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[La(JSON.stringify(n)),La(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Z1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function eT(){var t;const e=(t=yl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rT(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iT(){return!eT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function C_(){try{return typeof indexedDB=="object"}catch{return!1}}function sT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="FirebaseError";class jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oT,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?aT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jt(i,a,r)}}function aT(t,e){return t.replace(lT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lT=/\{\$([^}]+)}/g;function uT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ma(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lp(s)&&Lp(o)){if(!Ma(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cT(t,e){const n=new hT(t,e);return n.subscribe.bind(n)}class hT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tu),i.error===void 0&&(i.error=Tu),i.complete===void 0&&(i.complete=Tu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return t&&t._delegate?t._delegate:t}class Ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new J1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mT(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pT(t){return t===Gn?void 0:t}function mT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const yT={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},_T=j.INFO,vT={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},ET=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=vT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=_T,this._logHandler=ET,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const wT=(t,e)=>e.some(n=>t instanceof n);let Mp,Fp;function TT(){return Mp||(Mp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IT(){return Fp||(Fp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P_=new WeakMap,Mc=new WeakMap,N_=new WeakMap,Iu=new WeakMap,hd=new WeakMap;function ST(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&P_.set(n,t)}).catch(()=>{}),hd.set(e,t),e}function AT(t){if(Mc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mc.set(t,e)}let Fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RT(t){Fc=t(Fc)}function kT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Su(this),e,...n);return N_.set(r,e.sort?e.sort():[e]),Nn(r)}:IT().includes(t)?function(...e){return t.apply(Su(this),e),Nn(P_.get(this))}:function(...e){return Nn(t.apply(Su(this),e))}}function CT(t){return typeof t=="function"?kT(t):(t instanceof IDBTransaction&&AT(t),wT(t,TT())?new Proxy(t,Fc):t)}function Nn(t){if(t instanceof IDBRequest)return ST(t);if(Iu.has(t))return Iu.get(t);const e=CT(t);return e!==t&&(Iu.set(t,e),hd.set(e,t)),e}const Su=t=>hd.get(t);function PT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nn(o.result),l.oldVersion,l.newVersion,Nn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const NT=["get","getKey","getAll","getAllKeys","count"],DT=["put","add","delete","clear"],Au=new Map;function Up(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Au.get(e))return Au.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Au.set(e,s),s}RT(t=>({...t,get:(e,n,r)=>Up(e,n)||t.get(e,n,r),has:(e,n)=>!!Up(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",$p="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new cd("@firebase/app"),xT="@firebase/app-compat",LT="@firebase/analytics-compat",MT="@firebase/analytics",FT="@firebase/app-check-compat",UT="@firebase/app-check",$T="@firebase/auth",bT="@firebase/auth-compat",zT="@firebase/database",jT="@firebase/database-compat",BT="@firebase/functions",HT="@firebase/functions-compat",qT="@firebase/installations",WT="@firebase/installations-compat",KT="@firebase/messaging",GT="@firebase/messaging-compat",QT="@firebase/performance",YT="@firebase/performance-compat",XT="@firebase/remote-config",JT="@firebase/remote-config-compat",ZT="@firebase/storage",eI="@firebase/storage-compat",tI="@firebase/firestore",nI="@firebase/firestore-compat",rI="firebase",iI="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="[DEFAULT]",sI={[Uc]:"fire-core",[xT]:"fire-core-compat",[MT]:"fire-analytics",[LT]:"fire-analytics-compat",[UT]:"fire-app-check",[FT]:"fire-app-check-compat",[$T]:"fire-auth",[bT]:"fire-auth-compat",[zT]:"fire-rtdb",[jT]:"fire-rtdb-compat",[BT]:"fire-fn",[HT]:"fire-fn-compat",[qT]:"fire-iid",[WT]:"fire-iid-compat",[KT]:"fire-fcm",[GT]:"fire-fcm-compat",[QT]:"fire-perf",[YT]:"fire-perf-compat",[XT]:"fire-rc",[JT]:"fire-rc-compat",[ZT]:"fire-gcs",[eI]:"fire-gcs-compat",[tI]:"fire-fst",[nI]:"fire-fst-compat","fire-js":"fire-js",[rI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Map,bc=new Map;function oI(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pr(t){const e=t.name;if(bc.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;bc.set(e,t);for(const n of Fa.values())oI(n,t);return!0}function _l(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dn=new Xs("app","Firebase",aI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=iI;function D_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$c,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Dn.create("bad-app-name",{appName:String(i)});if(n||(n=A_()),!n)throw Dn.create("no-options");const s=Fa.get(i);if(s){if(Ma(n,s.options)&&Ma(r,s.config))return s;throw Dn.create("duplicate-app",{appName:i})}const o=new gT(i);for(const l of bc.values())o.addComponent(l);const a=new lI(n,r,o);return Fa.set(i,a),a}function dd(t=$c){const e=Fa.get(t);if(!e&&t===$c&&A_())return D_();if(!e)throw Dn.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let i=(r=sI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(a.join(" "));return}pr(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="firebase-heartbeat-database",cI=1,Ns="firebase-heartbeat-store";let Ru=null;function O_(){return Ru||(Ru=PT(uI,cI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ns)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dn.create("idb-open",{originalErrorMessage:t.message})})),Ru}async function hI(t){try{const n=(await O_()).transaction(Ns),r=await n.objectStore(Ns).get(V_(t));return await n.done,r}catch(e){if(e instanceof jt)fr.warn(e.message);else{const n=Dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function bp(t,e){try{const r=(await O_()).transaction(Ns,"readwrite");await r.objectStore(Ns).put(e,V_(t)),await r.done}catch(n){if(n instanceof jt)fr.warn(n.message);else{const r=Dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function V_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=1024,fI=30*24*60*60*1e3;class pI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=fI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zp(),{heartbeatsToSend:r,unsentEntries:i}=mI(this._heartbeatsCache.heartbeats),s=La(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zp(){return new Date().toISOString().substring(0,10)}function mI(t,e=dI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return C_()?sT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jp(t){return La(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t){pr(new Ln("platform-logger",e=>new OT(e),"PRIVATE")),pr(new Ln("heartbeat",e=>new pI(e),"PRIVATE")),Lt(Uc,$p,t),Lt(Uc,$p,"esm2017"),Lt("fire-js","")}yI("");var _I="firebase",vI="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(_I,vI,"app");function fd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function x_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EI=x_,L_=new Xs("auth","Firebase",x_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new cd("@firebase/auth");function wI(t,...e){Ua.logLevel<=j.WARN&&Ua.warn(`Auth (${wr}): ${t}`,...e)}function ia(t,...e){Ua.logLevel<=j.ERROR&&Ua.error(`Auth (${wr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw pd(t,...e)}function Mt(t,...e){return pd(t,...e)}function TI(t,e,n){const r=Object.assign(Object.assign({},EI()),{[e]:n});return new Xs("auth","Firebase",r).create(e,{appName:t.name})}function pd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L_.create(t,...e)}function L(t,e,...n){if(!t)throw pd(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ia(e),new Error(e)}function rn(t,e){t||Gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function II(){return Bp()==="http:"||Bp()==="https:"}function Bp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(II()||tT()||"connection"in navigator)?navigator.onLine:!0}function AI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Z1()||nT()}get(){return SI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new Zs(3e4,6e4);function gd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ii(t,e,n,r,i={}){return F_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Js(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),M_.fetch()(U_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function F_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RI),e);try{const i=new PI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Lo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Lo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Lo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw TI(t,c,u);nn(t,c)}}catch(i){if(i instanceof jt)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function CI(t,e,n,r,i={}){const s=await Ii(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?md(t.config,i):`${t.config.apiScheme}://${i}`}class PI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),kI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(t,e){return Ii(t,"POST","/v1/accounts:delete",e)}async function DI(t,e){return Ii(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OI(t,e=!1){const n=It(t),r=await n.getIdToken(e),i=yd(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:os(ku(i.auth_time)),issuedAtTime:os(ku(i.iat)),expirationTime:os(ku(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ku(t){return Number(t)*1e3}function yd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=T_(n);return i?JSON.parse(i):(ia("Failed to decode base64 JWT payload"),null)}catch(i){return ia("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function VI(t){const e=yd(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jt&&xI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ds(t,DI(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UI(s.providerUserInfo):[],a=FI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function MI(t){const e=It(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UI(t){return t.map(e=>{var{providerId:n}=e,r=fd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e){const n=await F_(t,{},async()=>{const r=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=U_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bI(t,e){return Ii(t,"POST","/v2/accounts:revokeToken",gd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $I(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Os;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ds(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OI(this,e)}reload(){return MI(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ds(this,NI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:I,providerData:k,stsTokenManager:C}=n;L(m&&C,e,"internal-error");const O=Os.fromJSON(this.name,C);L(typeof m=="string",e,"internal-error"),un(h,e.name),un(d,e.name),L(typeof y=="boolean",e,"internal-error"),L(typeof I=="boolean",e,"internal-error"),un(g,e.name),un(_,e.name),un(E,e.name),un(S,e.name),un(p,e.name),un(f,e.name);const Y=new sr({uid:m,auth:e,email:d,emailVerified:y,displayName:h,isAnonymous:I,photoURL:_,phoneNumber:g,tenantId:E,stsTokenManager:O,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(Y.providerData=k.map($=>Object.assign({},$))),S&&(Y._redirectEventId=S),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Os;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $a(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=new Map;function Qt(t){rn(t instanceof Function,"Expected a class definition");let e=Hp.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}b_.type="NONE";const qp=b_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=sa(this.userKey,i.apiKey,s),this.fullPersistenceKey=sa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(Qt(qp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Qt(qp);const o=sa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=sr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Xr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Xr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(B_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q_(e))return"Blackberry";if(W_(e))return"Webos";if(_d(e))return"Safari";if((e.includes("chrome/")||j_(e))&&!e.includes("edge/"))return"Chrome";if(H_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z_(t=ge()){return/firefox\//i.test(t)}function _d(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j_(t=ge()){return/crios\//i.test(t)}function B_(t=ge()){return/iemobile/i.test(t)}function H_(t=ge()){return/android/i.test(t)}function q_(t=ge()){return/blackberry/i.test(t)}function W_(t=ge()){return/webos/i.test(t)}function vl(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zI(t=ge()){var e;return vl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jI(){return rT()&&document.documentMode===10}function K_(t=ge()){return vl(t)||H_(t)||W_(t)||q_(t)||/windows phone/i.test(t)||B_(t)}function BI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t,e=[]){let n;switch(t){case"Browser":n=Wp(ge());break;case"Worker":n=`${Wp(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t,e={}){return Ii(t,"GET","/v2/passwordPolicy",gd(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=6;class KI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kp(this),this.idTokenSubscription=new Kp(this),this.beforeStateQueue=new HI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?It(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qI(this),n=new KI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=G_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vd(t){return It(t)}class Kp{constructor(e){this.auth=e,this.observer=null,this.addObserver=cT(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ed={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QI(t){Ed=t}function YI(t){return Ed.loadJS(t)}function XI(){return Ed.gapiScript}function JI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){const n=_l(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ma(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function eS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tS(t,e,n){const r=vd(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Q_(e),{host:o,port:a}=nS(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||rS()}function Q_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nS(t){const e=Q_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gp(o)}}}function Gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e){return CI(t,"POST","/v1/accounts:signInWithIdp",gd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="http://localhost";class mr extends Y_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:iS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Js(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends X_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends eo{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends eo{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends eo{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=Qp(r);return new hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qp(r);return new hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ba(e,n,r,i)}}function J_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(t,s,e,r):s})}async function sS(t,e,n=!1){const r=await Ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ds(t,J_(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=yd(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),hi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t,e,n=!1){const r="signIn",i=await J_(t,r,e),s=await hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function lS(t,e,n,r){return It(t).onIdTokenChanged(e,n,r)}function uS(t,e,n){return It(t).beforeAuthStateChanged(e,n)}const za="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(za,"1"),this.storage.removeItem(za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(){const t=ge();return _d(t)||vl(t)}const hS=1e3,dS=10;class ev extends Z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cS()&&BI(),this.fallbackToPolling=K_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ev.type="LOCAL";const fS=ev;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv extends Z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tv.type="SESSION";const nv=tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new El(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await pS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}El.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=wd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function gS(t){Ft().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function yS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _S(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vS(){return rv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="firebaseLocalStorageDb",ES=1,ja="firebaseLocalStorage",sv="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wl(t,e){return t.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function wS(){const t=indexedDB.deleteDatabase(iv);return new to(t).toPromise()}function jc(){const t=indexedDB.open(iv,ES);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ja,{keyPath:sv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ja)?e(r):(r.close(),await wS(),e(await jc()))})})}async function Yp(t,e,n){const r=wl(t,!0).put({[sv]:e,value:n});return new to(r).toPromise()}async function TS(t,e){const n=wl(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function Xp(t,e){const n=wl(t,!0).delete(e);return new to(n).toPromise()}const IS=800,SS=3;class ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=El._getInstance(vS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yS(),!this.activeServiceWorker)return;this.sender=new mS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_S()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await Yp(e,za,"1"),await Xp(e,za),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wl(i,!1).getAll();return new to(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ov.type="LOCAL";const AS=ov;new Zs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t,e){return e?Qt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends Y_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kS(t){return aS(t.auth,new Td(t),t.bypassAuthState)}function CS(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),oS(n,new Td(t),t.bypassAuthState)}async function PS(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),sS(n,new Td(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return PS;case"reauthViaPopup":case"reauthViaRedirect":return CS;default:nn(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new Zs(2e3,1e4);class jr extends av{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NS.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="pendingRedirect",oa=new Map;class OS extends av{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oa.get(this.auth._key());if(!e){try{const r=await VS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oa.set(this.auth._key(),e)}return this.bypassAuthState||oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VS(t,e){const n=MS(e),r=LS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xS(t,e){oa.set(t._key(),e)}function LS(t){return Qt(t._redirectPersistence)}function MS(t){return sa(DS,t.config.apiKey,t.name)}async function FS(t,e,n=!1){const r=vd(t),i=RS(r,e),o=await new OS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=10*60*1e3;class $S{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=US&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jp(e))}saveEventToCache(e){this.cachedEventUids.add(Jp(e)),this.lastProcessedEventTime=Date.now()}}function Jp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t,e={}){return Ii(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BS=/^https?/;async function HS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zS(t);for(const n of e)try{if(qS(n))return}catch{}nn(t,"unauthorized-domain")}function qS(t){const e=zc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BS.test(n))return!1;if(jS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=new Zs(3e4,6e4);function Zp(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KS(t){return new Promise((e,n)=>{var r,i,s;function o(){Zp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zp(),n(Mt(t,"network-request-failed"))},timeout:WS.get()})}if(!((i=(r=Ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ft().gapi)===null||s===void 0)&&s.load)o();else{const a=JI("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},YI(`${XI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw aa=null,e})}let aa=null;function GS(t){return aa=aa||KS(t),aa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=new Zs(5e3,15e3),YS="__/auth/iframe",XS="emulator/auth/iframe",JS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eA(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?md(e,XS):`https://${t.config.authDomain}/${YS}`,r={apiKey:e.apiKey,appName:t.name,v:wr},i=ZS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Js(r).slice(1)}`}async function tA(t){const e=await GS(t),n=Ft().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:eA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=Ft().setTimeout(()=>{s(o)},QS.get());function l(){Ft().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rA=500,iA=600,sA="_blank",oA="http://localhost";class em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aA(t,e,n,r=rA,i=iA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ge().toLowerCase();n&&(a=j_(u)?sA:n),z_(u)&&(e=e||oA,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(zI(u)&&a!=="_self")return lA(e||"",a),new em(null);const h=window.open(e||"",a,c);L(h,t,"popup-blocked");try{h.focus()}catch{}return new em(h)}function lA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="__/auth/handler",cA="emulator/auth/handler",hA=encodeURIComponent("fac");async function tm(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:i};if(e instanceof X_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof eo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${hA}=${encodeURIComponent(l)}`:"";return`${dA(t)}?${Js(a).slice(1)}${u}`}function dA({config:t}){return t.emulator?md(t,cA):`https://${t.authDomain}/${uA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="webStorageSupport";class fA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nv,this._completeRedirectFn=FS,this._overrideRedirectResult=xS}async _openPopup(e,n,r,i){var s;rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await tm(e,n,r,zc(),i);return aA(e,o,wd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tm(e,n,r,zc(),i);return gS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tA(e),r=new $S(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cu,{type:Cu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cu];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return K_()||_d()||vl()}}const pA=fA;var nm="@firebase/auth",rm="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yA(t){pr(new Ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G_(t)},u=new GI(r,i,s,l);return eS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pr(new Ln("auth-internal",e=>{const n=vd(e.getProvider("auth").getImmediate());return(r=>new mA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(nm,rm,gA(t)),Lt(nm,rm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=5*60,vA=R_("authIdTokenMaxAge")||_A;let im=null;const EA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vA)return;const i=n==null?void 0:n.token;im!==i&&(im=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wA(t=dd()){const e=_l(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZI(t,{popupRedirectResolver:pA,persistence:[AS,fS,nv]}),r=R_("authTokenSyncURL");if(r){const s=EA(r);uS(n,s,()=>s(n.currentUser)),lS(n,o=>s(o))}const i=I_("auth");return i&&tS(n,`http://${i}`),n}function TA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",TA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yA("Browser");var IA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Id=Id||{},x=IA||self;function Tl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function no(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SA(t){return Object.prototype.hasOwnProperty.call(t,Pu)&&t[Pu]||(t[Pu]=++AA)}var Pu="closure_uid_"+(1e9*Math.random()>>>0),AA=0;function RA(t,e,n){return t.call.apply(t.bind,arguments)}function kA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?be=RA:be=kA,be.apply(null,arguments)}function Mo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function jn(){this.s=this.s,this.o=this.o}var CA=0;jn.prototype.s=!1;jn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),CA!=0)&&SA(this)};jn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Sd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function sm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Tl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var PA=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};x.addEventListener("test",n,e),x.removeEventListener("test",n,e)}catch{}return t}();function Vs(t){return/^[\s\xa0]*$/.test(t)}function Il(){var t=x.navigator;return t&&(t=t.userAgent)?t:""}function Pt(t){return Il().indexOf(t)!=-1}function Ad(t){return Ad[" "](t),t}Ad[" "]=function(){};function NA(t,e){var n=TR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var DA=Pt("Opera"),di=Pt("Trident")||Pt("MSIE"),cv=Pt("Edge"),Bc=cv||di,hv=Pt("Gecko")&&!(Il().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge"))&&!(Pt("Trident")||Pt("MSIE"))&&!Pt("Edge"),OA=Il().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge");function dv(){var t=x.document;return t?t.documentMode:void 0}var Hc;e:{var Nu="",Du=function(){var t=Il();if(hv)return/rv:([^\);]+)(\)|;)/.exec(t);if(cv)return/Edge\/([\d\.]+)/.exec(t);if(di)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OA)return/WebKit\/(\S+)/.exec(t);if(DA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Du&&(Nu=Du?Du[1]:""),di){var Ou=dv();if(Ou!=null&&Ou>parseFloat(Nu)){Hc=String(Ou);break e}}Hc=Nu}var qc;if(x.document&&di){var om=dv();qc=om||parseInt(Hc,10)||void 0}else qc=void 0;var VA=qc;function xs(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hv){e:{try{Ad(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xs.$.h.call(this)}}Ae(xs,ze);var xA={2:"touch",3:"pen",4:"mouse"};xs.prototype.h=function(){xs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ro="closure_listenable_"+(1e6*Math.random()|0),LA=0;function MA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++LA,this.fa=this.ia=!1}function Sl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Rd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function FA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function fv(t){const e={};for(const n in t)e[n]=t[n];return e}const am="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<am.length;s++)n=am[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Al(t){this.src=t,this.g={},this.h=0}Al.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Kc(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new MA(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Wc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=uv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Sl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Kc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var kd="closure_lm_"+(1e6*Math.random()|0),Vu={};function mv(t,e,n,r,i){if(r&&r.once)return yv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mv(t,e[s],n,r,i);return null}return n=Nd(n),t&&t[ro]?t.O(e,n,no(r)?!!r.capture:!!r,i):gv(t,e,n,!1,r,i)}function gv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=no(i)?!!i.capture:!!i,a=Pd(t);if(a||(t[kd]=a=new Al(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=UA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)PA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function UA(){function t(n){return e.call(t.src,t.listener,n)}const e=$A;return t}function yv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yv(t,e[s],n,r,i);return null}return n=Nd(n),t&&t[ro]?t.P(e,n,no(r)?!!r.capture:!!r,i):gv(t,e,n,!0,r,i)}function _v(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)_v(t,e[s],n,r,i);else r=no(r)?!!r.capture:!!r,n=Nd(n),t&&t[ro]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Kc(s,n,r,i),-1<n&&(Sl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Kc(e,n,r,i)),(n=-1<t?e[t]:null)&&Cd(n))}function Cd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ro])Wc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Pd(e))?(Wc(n,t),n.h==0&&(n.src=null,e[kd]=null)):Sl(t)}}}function vv(t){return t in Vu?Vu[t]:Vu[t]="on"+t}function $A(t,e){if(t.fa)t=!0;else{e=new xs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Cd(t),t=n.call(r,e)}return t}function Pd(t){return t=t[kd],t instanceof Al?t:null}var xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nd(t){return typeof t=="function"?t:(t[xu]||(t[xu]=function(e){return t.handleEvent(e)}),t[xu])}function Se(){jn.call(this),this.i=new Al(this),this.S=this,this.J=null}Ae(Se,jn);Se.prototype[ro]=!0;Se.prototype.removeEventListener=function(t,e,n,r){_v(this,t,e,n,r)};function Ne(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),pv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Fo(o,r,!0,e)&&i}if(o=e.g=t,i=Fo(o,r,!0,e)&&i,i=Fo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Fo(o,r,!1,e)&&i}Se.prototype.N=function(){if(Se.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Sl(n[r]);delete t.g[e],t.h--}}this.J=null};Se.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Se.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Fo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Wc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Dd=x.JSON.stringify;class bA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function zA(){var t=Od;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jA{constructor(){this.h=this.g=null}add(e,n){const r=Ev.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ev=new bA(()=>new BA,t=>t.reset());class BA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function qA(t){x.setTimeout(()=>{throw t},0)}let Ls,Ms=!1,Od=new jA,wv=()=>{const t=x.Promise.resolve(void 0);Ls=()=>{t.then(WA)}};var WA=()=>{for(var t;t=zA();){try{t.h.call(t.g)}catch(n){qA(n)}var e=Ev;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ms=!1};function Rl(t,e){Se.call(this),this.h=t||1,this.g=e||x,this.j=be(this.qb,this),this.l=Date.now()}Ae(Rl,Se);A=Rl.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ne(this,"tick"),this.ga&&(Vd(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}A.N=function(){Rl.$.N.call(this),Vd(this),delete this.g};function xd(t,e,n){if(typeof t=="function")n&&(t=be(t,n));else if(t&&typeof t.handleEvent=="function")t=be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:x.setTimeout(t,e||0)}function Tv(t){t.g=xd(()=>{t.g=null,t.i&&(t.i=!1,Tv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KA extends jn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tv(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(t){jn.call(this),this.h=t,this.g={}}Ae(Fs,jn);var lm=[];function Iv(t,e,n,r){Array.isArray(n)||(n&&(lm[0]=n.toString()),n=lm);for(var i=0;i<n.length;i++){var s=mv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Sv(t){Rd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cd(e)},t),t.g={}}Fs.prototype.N=function(){Fs.$.N.call(this),Sv(this)};Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function kl(){this.g=!0}kl.prototype.Ea=function(){this.g=!1};function GA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function QA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XA(t,n)+(r?" "+r:"")})}function YA(t,e){t.info(function(){return"TIMEOUT: "+e})}kl.prototype.info=function(){};function XA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Dd(n)}catch{return e}}var Tr={},um=null;function Cl(){return um=um||new Se}Tr.Ta="serverreachability";function Av(t){ze.call(this,Tr.Ta,t)}Ae(Av,ze);function Us(t){const e=Cl();Ne(e,new Av(e))}Tr.STAT_EVENT="statevent";function Rv(t,e){ze.call(this,Tr.STAT_EVENT,t),this.stat=e}Ae(Rv,ze);function qe(t){const e=Cl();Ne(e,new Rv(e,t))}Tr.Ua="timingevent";function kv(t,e){ze.call(this,Tr.Ua,t),this.size=e}Ae(kv,ze);function io(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){t()},e)}var Pl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Cv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ld(){}Ld.prototype.h=null;function cm(t){return t.h||(t.h=t.i())}function Pv(){}var so={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Md(){ze.call(this,"d")}Ae(Md,ze);function Fd(){ze.call(this,"c")}Ae(Fd,ze);var Gc;function Nl(){}Ae(Nl,Ld);Nl.prototype.g=function(){return new XMLHttpRequest};Nl.prototype.i=function(){return{}};Gc=new Nl;function oo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Fs(this),this.P=JA,t=Bc?125:void 0,this.V=new Rl(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Nv}function Nv(){this.i=null,this.g="",this.h=!1}var JA=45e3,Dv={},Qc={};A=oo.prototype;A.setTimeout=function(t){this.P=t};function Yc(t,e,n){t.L=1,t.A=Ol(sn(e)),t.u=n,t.S=!0,Ov(t,null)}function Ov(t,e){t.G=Date.now(),ao(t),t.B=sn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),bv(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Nv,t.g=a0(t.l,n?e:null,!t.u),0<t.O&&(t.M=new KA(be(t.Pa,t,t.g),t.O)),Iv(t.U,t.g,"readystatechange",t.nb),e=t.I?fv(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Us(),GA(t.j,t.v,t.B,t.m,t.W,t.u)}A.nb=function(t){t=t.target;const e=this.M;e&&Dt(t)==3?e.l():this.Pa(t)};A.Pa=function(t){try{if(t==this.g)e:{const c=Dt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Bc||this.g&&(this.h.h||this.g.ja()||pm(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Us(3):Us(2)),Dl(this);var n=this.g.da();this.ca=n;t:if(Vv(this)){var r=pm(this.g);t="";var i=r.length,s=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),as(this);var o="";break t}this.h.i=new x.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,QA(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vs(a)){var u=a;break t}}u=null}if(n=u)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xc(this,n);else{this.i=!1,this.s=3,qe(12),Zn(this),as(this);break e}}this.S?(xv(this,c,o),Bc&&this.i&&c==3&&(Iv(this.U,this.V,"tick",this.mb),this.V.start())):(Br(this.j,this.m,o,null),Xc(this,o)),c==4&&Zn(this),this.i&&!this.J&&(c==4?r0(this.l,this):(this.i=!1,ao(this)))}else vR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),Zn(this),as(this)}}}catch{}finally{}};function Vv(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function xv(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=ZA(t,n),i==Qc){e==4&&(t.s=4,qe(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Dv){t.s=4,qe(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,i,null),Xc(t,i);Vv(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bd(e),e.M=!0,qe(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),Zn(t),as(t))}A.mb=function(){if(this.g){var t=Dt(this.g),e=this.g.ja();this.o<e.length&&(Dl(this),xv(this,t,e),this.i&&t!=4&&ao(this))}};function ZA(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Qc:(n=Number(e.substring(n,r)),isNaN(n)?Dv:(r+=1,r+n>e.length?Qc:(e=e.slice(r,r+n),t.o=r+n,e)))}A.cancel=function(){this.J=!0,Zn(this)};function ao(t){t.Y=Date.now()+t.P,Lv(t,t.P)}function Lv(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=io(be(t.lb,t),e)}function Dl(t){t.C&&(x.clearTimeout(t.C),t.C=null)}A.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(YA(this.j,this.B),this.L!=2&&(Us(),qe(17)),Zn(this),this.s=2,as(this)):Lv(this,this.Y-t)};function as(t){t.l.H==0||t.J||r0(t.l,t)}function Zn(t){Dl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Vd(t.V),Sv(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Xc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Jc(n.i,t))){if(!t.K&&Jc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)qa(n),Ml(n);else break e;jd(n),qe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=io(be(n.ib,n),6e3));if(1>=Bv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else er(n,11)}else if((t.K||n.g==t)&&qa(n),!Vs(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ud(s,s.h),s.h=null))}if(r.F){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Z(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=o0(r,r.J?r.pa:null,r.Y),o.K){Hv(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Dl(a),ao(a)),r.g=o}else t0(r);0<n.j.length&&Fl(n)}else u[0]!="stop"&&u[0]!="close"||er(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?er(n,7):zd(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Us(4)}catch{}}function eR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Tl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Tl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Mv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tR(t),r=eR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Fv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function or(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof or){this.h=t.h,Ba(this,t.j),this.s=t.s,this.g=t.g,Ha(this,t.m),this.l=t.l;var e=t.i,n=new $s;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),hm(this,n),this.o=t.o}else t&&(e=String(t).match(Fv))?(this.h=!1,Ba(this,e[1]||"",!0),this.s=Ki(e[2]||""),this.g=Ki(e[3]||"",!0),Ha(this,e[4]),this.l=Ki(e[5]||"",!0),hm(this,e[6]||"",!0),this.o=Ki(e[7]||"")):(this.h=!1,this.i=new $s(null,this.h))}or.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gi(e,dm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Gi(e,dm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Gi(n,n.charAt(0)=="/"?sR:iR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gi(n,aR)),t.join("")};function sn(t){return new or(t)}function Ba(t,e,n){t.j=n?Ki(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ha(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hm(t,e,n){e instanceof $s?(t.i=e,lR(t.i,t.h)):(n||(e=Gi(e,oR)),t.i=new $s(e,t.h))}function Z(t,e,n){t.i.set(e,n)}function Ol(t){return Z(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ki(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var dm=/[#\/\?@]/g,iR=/[#\?:]/g,sR=/[#\?]/g,oR=/[#\?@]/g,aR=/#/g;function $s(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Bn(t){t.g||(t.g=new Map,t.h=0,t.i&&nR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=$s.prototype;A.add=function(t,e){Bn(this),this.i=null,t=Si(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Uv(t,e){Bn(t),e=Si(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $v(t,e){return Bn(t),e=Si(t,e),t.g.has(e)}A.forEach=function(t,e){Bn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.ta=function(){Bn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.Z=function(t){Bn(this);let e=[];if(typeof t=="string")$v(this,t)&&(e=e.concat(this.g.get(Si(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Bn(this),this.i=null,t=Si(this,t),$v(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function bv(t,e,n){Uv(t,e),0<n.length&&(t.i=null,t.g.set(Si(t,e),Sd(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Si(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lR(t,e){e&&!t.j&&(Bn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Uv(this,r),bv(this,i,n))},t)),t.j=e}var uR=class{constructor(t,e){this.g=t,this.map=e}};function zv(t){this.l=t||cR,x.PerformanceNavigationTiming?(t=x.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cR=10;function jv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Bv(t){return t.h?1:t.g?t.g.size:0}function Jc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ud(t,e){t.g?t.g.add(e):t.h=e}function Hv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zv.prototype.cancel=function(){if(this.i=qv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qv(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Sd(t.i)}var hR=class{stringify(t){return x.JSON.stringify(t,void 0)}parse(t){return x.JSON.parse(t,void 0)}};function dR(){this.g=new hR}function fR(t,e,n){const r=n||"";try{Mv(t,function(i,s){let o=i;no(i)&&(o=Dd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function pR(t,e){const n=new kl;if(x.Image){const r=new Image;r.onload=Mo(Uo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Mo(Uo,n,r,"TestLoadImage: error",!1,e),r.onabort=Mo(Uo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Mo(Uo,n,r,"TestLoadImage: timeout",!1,e),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Uo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Vl(t){this.l=t.ec||null,this.j=t.ob||!1}Ae(Vl,Ld);Vl.prototype.g=function(){return new xl(this.l,this.j)};Vl.prototype.i=function(t){return function(){return t}}({});function xl(t,e){Se.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=$d,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(xl,Se);var $d=0;A=xl.prototype;A.open=function(t,e){if(this.readyState!=$d)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bs(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||x).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lo(this)),this.readyState=$d};A.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wv(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Wv(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}A.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?lo(this):bs(this),this.readyState==3&&Wv(this)}};A.Za=function(t){this.g&&(this.response=this.responseText=t,lo(this))};A.Ya=function(t){this.g&&(this.response=t,lo(this))};A.ka=function(){this.g&&lo(this)};function lo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bs(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mR=x.JSON.parse;function ae(t){Se.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Kv,this.L=this.M=!1}Ae(ae,Se);var Kv="",gR=/^https?$/i,yR=["POST","PUT"];A=ae.prototype;A.Oa=function(t){this.M=t};A.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gc.g(),this.C=this.u?cm(this.u):cm(Gc),this.g.onreadystatechange=be(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){fm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=x.FormData&&t instanceof x.FormData,!(0<=uv(yR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Yv(this),0<this.B&&((this.L=_R(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.ua,this)):this.A=xd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){fm(this,s)}};function _R(t){return di&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.ua=function(){typeof Id<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ne(this,"timeout"),this.abort(8))};function fm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gv(t),Ll(t)}function Gv(t){t.F||(t.F=!0,Ne(t,"complete"),Ne(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ne(this,"complete"),Ne(this,"abort"),Ll(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ll(this,!0)),ae.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?Qv(this):this.kb())};A.kb=function(){Qv(this)};function Qv(t){if(t.h&&typeof Id<"u"&&(!t.C[1]||Dt(t)!=4||t.da()!=2)){if(t.v&&Dt(t)==4)xd(t.La,0,t);else if(Ne(t,"readystatechange"),Dt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Fv)[1]||null;!i&&x.self&&x.self.location&&(i=x.self.location.protocol.slice(0,-1)),r=!gR.test(i?i.toLowerCase():"")}n=r}if(n)Ne(t,"complete"),Ne(t,"success");else{t.m=6;try{var s=2<Dt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Gv(t)}}finally{Ll(t)}}}}function Ll(t,e){if(t.g){Yv(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ne(t,"ready");try{n.onreadystatechange=r}catch{}}}function Yv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(x.clearTimeout(t.A),t.A=null)}A.isActive=function(){return!!this.g};function Dt(t){return t.g?t.g.readyState:0}A.da=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mR(e)}};function pm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Kv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function vR(t){const e={};t=(t.g&&2<=Dt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Vs(t[r]))continue;var n=HA(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}FA(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xv(t){let e="";return Rd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Xv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Z(t,e,n))}function bi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Jv(t){this.Ga=0,this.j=[],this.l=new kl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bi("baseRetryDelayMs",5e3,t),this.hb=bi("retryDelaySeedMs",1e4,t),this.eb=bi("forwardChannelMaxRetries",2,t),this.xa=bi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new zv(t&&t.concurrentRequestLimit),this.Ja=new dR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=Jv.prototype;A.ra=8;A.H=1;function zd(t){if(Zv(t),t.H==3){var e=t.W++,n=sn(t.I);if(Z(n,"SID",t.K),Z(n,"RID",e),Z(n,"TYPE","terminate"),uo(t,n),e=new oo(t,t.l,e),e.L=2,e.A=Ol(sn(n)),n=!1,x.navigator&&x.navigator.sendBeacon)try{n=x.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&x.Image&&(new Image().src=e.A,n=!0),n||(e.g=a0(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ao(e)}s0(t)}function Ml(t){t.g&&(Bd(t),t.g.cancel(),t.g=null)}function Zv(t){Ml(t),t.u&&(x.clearTimeout(t.u),t.u=null),qa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&x.clearTimeout(t.m),t.m=null)}function Fl(t){if(!jv(t.i)&&!t.m){t.m=!0;var e=t.Na;Ls||wv(),Ms||(Ls(),Ms=!0),Od.add(e,t),t.C=0}}function ER(t,e){return Bv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=io(be(t.Na,t,e),i0(t,t.C)),t.C++,!0)}A.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new oo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=fv(s),pv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=e0(this,i,e),n=sn(this.I),Z(n,"RID",t),Z(n,"CVER",22),this.F&&Z(n,"X-HTTP-Session-Id",this.F),uo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Xv(s)))+"&"+e:this.o&&bd(n,this.o,s)),Ud(this.i,i),this.bb&&Z(n,"TYPE","init"),this.P?(Z(n,"$req",e),Z(n,"SID","null"),i.aa=!0,Yc(i,n,null)):Yc(i,n,e),this.H=2}}else this.H==3&&(t?mm(this,t):this.j.length==0||jv(this.i)||mm(this))};function mm(t,e){var n;e?n=e.m:n=t.W++;const r=sn(t.I);Z(r,"SID",t.K),Z(r,"RID",n),Z(r,"AID",t.V),uo(t,r),t.o&&t.s&&bd(r,t.o,t.s),n=new oo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=e0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ud(t.i,n),Yc(n,r,e)}function uo(t,e){t.na&&Rd(t.na,function(n,r){Z(e,r,n)}),t.h&&Mv({},function(n,r){Z(e,r,n)})}function e0(t,e,n){n=Math.min(t.j.length,n);var r=t.h?be(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{fR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function t0(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ls||wv(),Ms||(Ls(),Ms=!0),Od.add(e,t),t.A=0}}function jd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=io(be(t.Ma,t),i0(t,t.A)),t.A++,!0)}A.Ma=function(){if(this.u=null,n0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=io(be(this.jb,this),t)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,qe(10),Ml(this),n0(this))};function Bd(t){t.B!=null&&(x.clearTimeout(t.B),t.B=null)}function n0(t){t.g=new oo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=sn(t.wa);Z(e,"RID","rpc"),Z(e,"SID",t.K),Z(e,"AID",t.V),Z(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Z(e,"TO",t.qa),Z(e,"TYPE","xmlhttp"),uo(t,e),t.o&&t.s&&bd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ol(sn(e)),n.u=null,n.S=!0,Ov(n,t)}A.ib=function(){this.v!=null&&(this.v=null,Ml(this),jd(this),qe(19))};function qa(t){t.v!=null&&(x.clearTimeout(t.v),t.v=null)}function r0(t,e){var n=null;if(t.g==e){qa(t),Bd(t),t.g=null;var r=2}else if(Jc(t.i,e))n=e.F,Hv(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Cl(),Ne(r,new kv(r,n)),Fl(t)}else t0(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&ER(t,e)||r==2&&jd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:er(t,5);break;case 4:er(t,10);break;case 3:er(t,6);break;default:er(t,2)}}}function i0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function er(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=be(t.pb,t);n||(n=new or("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||Ba(n,"https"),Ol(n)),pR(n.toString(),r)}else qe(2);t.H=0,t.h&&t.h.za(e),s0(t),Zv(t)}A.pb=function(t){t?(this.l.info("Successfully pinged google.com"),qe(2)):(this.l.info("Failed to ping google.com"),qe(1))};function s0(t){if(t.H=0,t.ma=[],t.h){const e=qv(t.i);(e.length!=0||t.j.length!=0)&&(sm(t.ma,e),sm(t.ma,t.j),t.i.i.length=0,Sd(t.j),t.j.length=0),t.h.ya()}}function o0(t,e,n){var r=n instanceof or?sn(n):new or(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ha(r,r.m);else{var i=x.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new or(null);r&&Ba(s,r),e&&(s.g=e),i&&Ha(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Z(r,n,e),Z(r,"VER",t.ra),uo(t,r),r}function a0(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ae(new Vl({ob:n})):new ae(t.va),e.Oa(t.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function l0(){}A=l0.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function Wa(){if(di&&!(10<=Number(VA)))throw Error("Environmental error: no available transport.")}Wa.prototype.g=function(t,e){return new it(t,e)};function it(t,e){Se.call(this),this.g=new Jv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Vs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ai(this)}Ae(it,Se);it.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;qe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=o0(t,null,t.Y),Fl(t)};it.prototype.close=function(){zd(this.g)};it.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dd(t),t=n);e.j.push(new uR(e.fb++,t)),e.H==3&&Fl(e)};it.prototype.N=function(){this.g.h=null,delete this.j,zd(this.g),delete this.g,it.$.N.call(this)};function u0(t){Md.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(u0,Md);function c0(){Fd.call(this),this.status=1}Ae(c0,Fd);function Ai(t){this.g=t}Ae(Ai,l0);Ai.prototype.Ba=function(){Ne(this.g,"a")};Ai.prototype.Aa=function(t){Ne(this.g,new u0(t))};Ai.prototype.za=function(t){Ne(this.g,new c0)};Ai.prototype.ya=function(){Ne(this.g,"b")};function wR(){this.blockSize=-1}function St(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ae(St,wR);St.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Lu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}St.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Lu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Lu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Lu(this,r),i=0;break}}this.h=i,this.i+=e};St.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Q(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var TR={};function Hd(t){return-128<=t&&128>t?NA(t,function(e){return new Q([e|0],0>e?-1:0)}):new Q([t|0],0>t?-1:0)}function Ot(t){if(isNaN(t)||!isFinite(t))return Zr;if(0>t)return Ce(Ot(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Zc;return new Q(e,0)}function h0(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ce(h0(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ot(Math.pow(e,8)),r=Zr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ot(Math.pow(e,s)),r=r.R(s).add(Ot(o))):(r=r.R(n),r=r.add(Ot(o)))}return r}var Zc=4294967296,Zr=Hd(0),eh=Hd(1),gm=Hd(16777216);A=Q.prototype;A.ea=function(){if(ut(this))return-Ce(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Zc+r)*e,e*=Zc}return t};A.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Yt(this))return"0";if(ut(this))return"-"+Ce(this).toString(t);for(var e=Ot(Math.pow(t,6)),n=this,r="";;){var i=Ga(n,e).g;n=Ka(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Yt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Yt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ut(t){return t.h==-1}A.X=function(t){return t=Ka(this,t),ut(t)?-1:Yt(t)?0:1};function Ce(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Q(n,~t.h).add(eh)}A.abs=function(){return ut(this)?Ce(this):this};A.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Q(n,n[n.length-1]&-2147483648?-1:0)};function Ka(t,e){return t.add(Ce(e))}A.R=function(t){if(Yt(this)||Yt(t))return Zr;if(ut(this))return ut(t)?Ce(this).R(Ce(t)):Ce(Ce(this).R(t));if(ut(t))return Ce(this.R(Ce(t)));if(0>this.X(gm)&&0>t.X(gm))return Ot(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,$o(n,2*r+2*i),n[2*r+2*i+1]+=s*l,$o(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,$o(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,$o(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Q(n,0)};function $o(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function zi(t,e){this.g=t,this.h=e}function Ga(t,e){if(Yt(e))throw Error("division by zero");if(Yt(t))return new zi(Zr,Zr);if(ut(t))return e=Ga(Ce(t),e),new zi(Ce(e.g),Ce(e.h));if(ut(e))return e=Ga(t,Ce(e)),new zi(Ce(e.g),e.h);if(30<t.g.length){if(ut(t)||ut(e))throw Error("slowDivide_ only works with positive integers.");for(var n=eh,r=e;0>=r.X(t);)n=ym(n),r=ym(r);var i=Ar(n,1),s=Ar(r,1);for(r=Ar(r,2),n=Ar(n,2);!Yt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ar(r,1),n=Ar(n,1)}return e=Ka(t,i.R(e)),new zi(i,e)}for(i=Zr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ot(n),o=s.R(e);ut(o)||0<o.X(t);)n-=r,s=Ot(n),o=s.R(e);Yt(s)&&(s=eh),i=i.add(s),t=Ka(t,o)}return new zi(i,t)}A.gb=function(t){return Ga(this,t).h};A.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Q(n,this.h&t.h)};A.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Q(n,this.h|t.h)};A.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Q(n,this.h^t.h)};function ym(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Q(n,t.h)}function Ar(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Q(i,t.h)}Wa.prototype.createWebChannel=Wa.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Pl.NO_ERROR=0;Pl.TIMEOUT=8;Pl.HTTP_ERROR=6;Cv.COMPLETE="complete";Pv.EventType=so;so.OPEN="a";so.CLOSE="b";so.ERROR="c";so.MESSAGE="d";Se.prototype.listen=Se.prototype.O;ae.prototype.listenOnce=ae.prototype.P;ae.prototype.getLastError=ae.prototype.Sa;ae.prototype.getLastErrorCode=ae.prototype.Ia;ae.prototype.getStatus=ae.prototype.da;ae.prototype.getResponseJson=ae.prototype.Wa;ae.prototype.getResponseText=ae.prototype.ja;ae.prototype.send=ae.prototype.ha;ae.prototype.setWithCredentials=ae.prototype.Oa;St.prototype.digest=St.prototype.l;St.prototype.reset=St.prototype.reset;St.prototype.update=St.prototype.j;Q.prototype.add=Q.prototype.add;Q.prototype.multiply=Q.prototype.R;Q.prototype.modulo=Q.prototype.gb;Q.prototype.compare=Q.prototype.X;Q.prototype.toNumber=Q.prototype.ea;Q.prototype.toString=Q.prototype.toString;Q.prototype.getBits=Q.prototype.D;Q.fromNumber=Ot;Q.fromString=h0;var IR=function(){return new Wa},SR=function(){return Cl()},Mu=Pl,AR=Cv,RR=Tr,_m={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},bo=Pv,kR=ae,CR=St,ei=Q;const vm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri="10.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new cd("@firebase/firestore");function ji(){return gr.logLevel}function R(t,...e){if(gr.logLevel<=j.DEBUG){const n=e.map(qd);gr.debug(`Firestore (${Ri}): ${t}`,...n)}}function $t(t,...e){if(gr.logLevel<=j.ERROR){const n=e.map(qd);gr.error(`Firestore (${Ri}): ${t}`,...n)}}function fi(t,...e){if(gr.logLevel<=j.WARN){const n=e.map(qd);gr.warn(`Firestore (${Ri}): ${t}`,...n)}}function qd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: `+t;throw $t(e),new Error(e)}function me(t,e){t||F()}function W(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class NR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DR{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new On;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new On,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new d0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new Me(e)}}class OR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new OR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new xR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=MR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function K(t,e){return t<e?-1:t>e?1:0}function pi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new Ie(0,0))}static max(){return new M(new Ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends zs{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const UR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends zs{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return UR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(re.fromString(e))}static fromName(e){return new V(re.fromString(e).popFirst(5))}static empty(){return new V(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new re(e.slice()))}}function $R(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=M.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new Mn(i,V.empty(),e)}function bR(t){return new Mn(t.readTime,t.key,-1)}class Mn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mn(M.min(),V.empty(),-1)}static max(){return new Mn(M.max(),V.empty(),-1)}}function zR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:K(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==jR)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,r)=>{n(e)})}static reject(e){return new v((n,r)=>{r(e)})}static waitFor(e){return new v((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=v.resolve(!1);for(const r of e)n=n.next(i=>i?v.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new v((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new v((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new On,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ls(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Gd(r.target.error);this.V.reject(new ls(e,i))}}static open(e,n,r,i){try{return new Kd(n,e.transaction(i,r))}catch(s){throw new ls(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new qR(n)}}class tr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,tr.S(ge())===12.2&&$t("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),Qn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!C_())return!1;if(tr.C())return!0;const e=ge(),n=tr.S(e),r=0<n&&n<10,i=tr.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ls(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new N(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new N(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ls(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Kd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),v.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class HR{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Qn(this.k.delete())}}class ls extends N{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function co(t){return t.name==="IndexedDbTransactionError"}class qR{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Qn(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),Qn(this.store.add(e))}get(e){return Qn(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),Qn(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),Qn(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new v((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new v((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new v((r,i)=>{n.onerror=s=>{const o=Gd(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new v((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new HR(a),u=n(a.primaryKey,a.value,l);if(u instanceof v){const c=u.catch(h=>(l.done(),v.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>v.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Qn(t){return new v((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Gd(r.target.error);n(i)}})}let Em=!1;function Gd(t){const e=tr.S(ge());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Em||(Em=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Qd._e=-1;function Ul(t){return t==null}function Qa(t){return t===0&&1/t==-1/0}function WR(t){return typeof t=="number"&&Number.isInteger(t)&&!Qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ho(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function f0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??ke.EMPTY,this.right=s??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tm(this.data.getIterator())}getIteratorFrom(e){return new Tm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class Tm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new En([])}unionWith(e){let n=new De($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new p0("Invalid base64 string: "+s):s}}(e);return new Be(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const KR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(t){if(me(!!t),typeof t=="string"){let e=0;const n=KR.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xd(t){const e=t.mapValue.fields.__previous_value__;return Yd(e)?Xd(e):e}function js(t){const e=Fn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Bs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yd(t)?4:QR(t)?9007199254740991:10:F()}function bt(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return js(t).isEqual(js(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Fn(i.timestampValue),a=Fn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return yr(i.bytesValue).isEqual(yr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return de(i.geoPointValue.latitude)===de(s.geoPointValue.latitude)&&de(i.geoPointValue.longitude)===de(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return de(i.integerValue)===de(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=de(i.doubleValue),a=de(s.doubleValue);return o===a?Qa(o)===Qa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return pi(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(wm(o)!==wm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!bt(o[l],a[l])))return!1;return!0}(t,e);default:return F()}}function Hs(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function mi(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return K(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return K(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=de(s.integerValue||s.doubleValue),l=de(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Im(t.timestampValue,e.timestampValue);case 4:return Im(js(t),js(e));case 5:return K(t.stringValue,e.stringValue);case 6:return function(s,o){const a=yr(s),l=yr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=K(a[u],l[u]);if(c!==0)return c}return K(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=K(de(s.latitude),de(o.latitude));return a!==0?a:K(de(s.longitude),de(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=mi(a[u],l[u]);if(c)return c}return K(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===jo.mapValue&&o===jo.mapValue)return 0;if(s===jo.mapValue)return 1;if(o===jo.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=K(l[h],c[h]);if(d!==0)return d;const g=mi(a[l[h]],u[c[h]]);if(g!==0)return g}return K(l.length,c.length)}(t.mapValue,e.mapValue);default:throw F()}}function Im(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return K(t,e);const n=Fn(t),r=Fn(e),i=K(n.seconds,r.seconds);return i!==0?i:K(n.nanos,r.nanos)}function gi(t){return th(t)}function th(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=th(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${th(n.fields[o])}`;return i+"}"}(t.mapValue):F()}function Sm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nh(t){return!!t&&"integerValue"in t}function Jd(t){return!!t&&"arrayValue"in t}function Am(t){return!!t&&"nullValue"in t}function Rm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fu(t){return!!t&&"mapValue"in t}function us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ho(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=us(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=us(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ho(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(us(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ue(e,0,M.min(),M.min(),M.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ue(e,1,n,M.min(),r,i,0)}static newNoDocument(e,n){return new Ue(e,2,n,M.min(),M.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,M.min(),M.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.position=e,this.inclusive=n}}function km(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=mi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function YR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{}class pe extends m0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JR(e,n,r):n==="array-contains"?new tk(e,r):n==="in"?new nk(e,r):n==="not-in"?new rk(e,r):n==="array-contains-any"?new ik(e,r):new pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ZR(e,r):new ek(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(mi(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class At extends m0{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new At(e,n)}matches(e){return g0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function g0(t){return t.op==="and"}function y0(t){return XR(t)&&g0(t)}function XR(t){for(const e of t.filters)if(e instanceof At)return!1;return!0}function rh(t){if(t instanceof pe)return t.field.canonicalString()+t.op.toString()+gi(t.value);if(y0(t))return t.filters.map(e=>rh(e)).join(",");{const e=t.filters.map(n=>rh(n)).join(",");return`${t.op}(${e})`}}function _0(t,e){return t instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(t,e):t instanceof At?function(r,i){return i instanceof At&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_0(o,i.filters[a]),!0):!1}(t,e):void F()}function v0(t){return t instanceof pe?function(n){return`${n.field.canonicalString()} ${n.op} ${gi(n.value)}`}(t):t instanceof At?function(n){return n.op.toString()+" {"+n.getFilters().map(v0).join(" ,")+"}"}(t):"Filter"}class JR extends pe{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class ZR extends pe{constructor(e,n){super(e,"in",n),this.keys=E0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ek extends pe{constructor(e,n){super(e,"not-in",n),this.keys=E0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function E0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class tk extends pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jd(n)&&Hs(n.arrayValue,this.value)}}class nk extends pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hs(this.value.arrayValue,n)}}class rk extends pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hs(this.value.arrayValue,n)}}class ik extends pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Pm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new sk(t,e,n,r,i,s,o)}function Zd(t){const e=W(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ul(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gi(r)).join(",")),e.ce=n}return e.ce}function ef(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cm(t.startAt,e.startAt)&&Cm(t.endAt,e.endAt)}function ih(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ok(t,e,n,r,i,s,o,a){return new ki(t,e,n,r,i,s,o,a)}function w0(t){return new ki(t)}function Nm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function T0(t){return t.collectionGroup!==null}function cs(t){const e=W(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new De($e.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new qs(s,r))}),n.has($e.keyField().canonicalString())||e.le.push(new qs($e.keyField(),r))}return e.le}function Ut(t){const e=W(t);return e.he||(e.he=ak(e,cs(t))),e.he}function ak(t,e){if(t.limitType==="F")return Pm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new qs(i.field,s)});const n=t.endAt?new Ya(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ya(t.startAt.position,t.startAt.inclusive):null;return Pm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sh(t,e){const n=t.filters.concat([e]);return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function oh(t,e,n){return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $l(t,e){return ef(Ut(t),Ut(e))&&t.limitType===e.limitType}function I0(t){return`${Zd(Ut(t))}|lt:${t.limitType}`}function Rr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>v0(i)).join(", ")}]`),Ul(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>gi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>gi(i)).join(",")),`Target(${r})`}(Ut(t))}; limitType=${t.limitType})`}function bl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of cs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=km(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,cs(r),i)||r.endAt&&!function(o,a,l){const u=km(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,cs(r),i))}(t,e)}function lk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function S0(t){return(e,n)=>{let r=!1;for(const i of cs(t)){const s=uk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uk(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?mi(l,u):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ho(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return f0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new ce(V.comparator);function Un(){return ck}const A0=new ce(V.comparator);function Qi(...t){let e=A0;for(const n of t)e=e.insert(n.key,n);return e}function hk(t){let e=A0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function nr(){return hs()}function R0(){return hs()}function hs(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const dk=new De(V.comparator);function H(...t){let e=dk;for(const n of t)e=e.add(n);return e}const fk=new De(K);function pk(){return fk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qa(e)?"-0":e}}function C0(t){return{integerValue:""+t}}function mk(t,e){return WR(e)?C0(e):k0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this._=void 0}}function gk(t,e,n){return t instanceof ah?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Yd(s)&&(s=Xd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Xa?P0(t,e):t instanceof Ja?N0(t,e):function(i,s){const o=_k(i,s),a=Dm(o)+Dm(i.Ie);return nh(o)&&nh(i.Ie)?C0(a):k0(i.serializer,a)}(t,e)}function yk(t,e,n){return t instanceof Xa?P0(t,e):t instanceof Ja?N0(t,e):n}function _k(t,e){return t instanceof lh?function(r){return nh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ah extends zl{}class Xa extends zl{constructor(e){super(),this.elements=e}}function P0(t,e){const n=D0(e);for(const r of t.elements)n.some(i=>bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ja extends zl{constructor(e){super(),this.elements=e}}function N0(t,e){let n=D0(e);for(const r of t.elements)n=n.filter(i=>!bt(i,r));return{arrayValue:{values:n}}}class lh extends zl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Dm(t){return de(t.integerValue||t.doubleValue)}function D0(t){return Jd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Xa&&i instanceof Xa||r instanceof Ja&&i instanceof Ja?pi(r.elements,i.elements,bt):r instanceof lh&&i instanceof lh?bt(r.Ie,i.Ie):r instanceof ah&&i instanceof ah}(t.transform,e.transform)}class ar{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ar}static exists(e){return new ar(void 0,e)}static updateTime(e){return new ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function la(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tf{}function O0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wk(t.key,ar.none()):new nf(t.key,t.data,ar.none());{const n=t.data,r=Nt.empty();let i=new De($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jl(t.key,r,new En(i.toArray()),ar.none())}}function Ek(t,e,n){t instanceof nf?function(i,s,o){const a=i.value.clone(),l=Vm(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof jl?function(i,s,o){if(!la(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Vm(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(V0(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ds(t,e,n,r){return t instanceof nf?function(s,o,a,l){if(!la(s.precondition,o))return a;const u=s.value.clone(),c=xm(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof jl?function(s,o,a,l){if(!la(s.precondition,o))return a;const u=xm(s.fieldTransforms,l,o),c=o.data;return c.setAll(V0(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return la(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Om(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pi(r,i,(s,o)=>vk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nf extends tf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jl extends tf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function V0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vm(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,yk(o,a,n[i]))}return r}function xm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gk(s,o,e))}return r}class wk extends tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ek(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ds(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ds(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=R0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=O0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(M.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,(n,r)=>Om(n,r))&&pi(this.baseMutations,e.baseMutations,(n,r)=>Om(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,B;function x0(t){if(t===void 0)return $t("GRPC error has no .code"),T.UNKNOWN;switch(t){case he.OK:return T.OK;case he.CANCELLED:return T.CANCELLED;case he.UNKNOWN:return T.UNKNOWN;case he.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case he.INTERNAL:return T.INTERNAL;case he.UNAVAILABLE:return T.UNAVAILABLE;case he.UNAUTHENTICATED:return T.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case he.NOT_FOUND:return T.NOT_FOUND;case he.ALREADY_EXISTS:return T.ALREADY_EXISTS;case he.PERMISSION_DENIED:return T.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case he.ABORTED:return T.ABORTED;case he.OUT_OF_RANGE:return T.OUT_OF_RANGE;case he.UNIMPLEMENTED:return T.UNIMPLEMENTED;case he.DATA_LOSS:return T.DATA_LOSS;default:return F()}}(B=he||(he={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new ei([4294967295,4294967295],0);function Lm(t){const e=Ak().encode(t),n=new CR;return n.update(e),new Uint8Array(n.digest())}function Mm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ei([n,r],0),new ei([i,s],0)]}class rf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yi(`Invalid padding: ${n}`);if(r<0)throw new Yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=ei.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(ei.fromNumber(r)));return i.compare(Rk)===1&&(i=new ei([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Lm(e),[r,i]=Mm(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Lm(e),[r,i]=Mm(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bl(M.min(),i,new ce(K),Un(),H())}}class fo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fo(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class L0{constructor(e,n){this.targetId=e,this.fe=n}}class M0{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Fm{constructor(){this.ge=0,this.pe=$m(),this.ye=Be.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=H(),n=H(),r=H();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new fo(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=$m()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,me(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class kk{constructor(e){this.Le=e,this.ke=new Map,this.qe=Un(),this.Qe=Um(),this.Ke=new ce(K)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(ih(s))if(r===0){const o=new V(s.path);this.We(n,o,Ue.newNoDocument(o,M.min()))}else me(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=yr(r).toUint8Array()}catch(l){if(l instanceof p0)return fi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new rf(o,i,s)}catch(l){return fi(l instanceof Yi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&ih(a.target)){const l=new V(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Ue.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=H();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Bl(e,n,this.Ke,this.qe,r);return this.qe=Un(),this.Qe=Um(),this.Ke=new ce(K),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Fm,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new De(K),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Fm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Um(){return new ce(V.comparator)}function $m(){return new ce(V.comparator)}const Ck={asc:"ASCENDING",desc:"DESCENDING"},Pk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nk={and:"AND",or:"OR"};class Dk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uh(t,e){return t.useProto3Json||Ul(e)?e:{value:e}}function ch(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ti(t){return me(!!t),M.fromTimestamp(function(n){const r=Fn(n);return new Ie(r.seconds,r.nanos)}(t))}function U0(t,e){return hh(t,e).canonicalString()}function hh(t,e){const n=function(i){return new re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $0(t){const e=re.fromString(t);return me(H0(e)),e}function Uu(t,e){const n=$0(e);if(n.get(1)!==t.databaseId.projectId)throw new N(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(z0(n))}function b0(t,e){return U0(t.databaseId,e)}function Ok(t){const e=$0(t);return e.length===4?re.emptyPath():z0(e)}function bm(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function z0(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(me(c===void 0||typeof c=="string"),Be.fromBase64String(c||"")):(me(c===void 0||c instanceof Uint8Array),Be.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:x0(u.code);return new N(c,u.message||"")}(o);n=new M0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uu(t,r.document.name),s=ti(r.document.updateTime),o=r.document.createTime?ti(r.document.createTime):M.min(),a=new Nt({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ua(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uu(t,r.document),s=r.readTime?ti(r.readTime):M.min(),o=Ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ua([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uu(t,r.document),s=r.removedTargetIds||[];n=new ua([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Sk(i,s),a=r.targetId;n=new L0(a,o)}}return n}function xk(t,e){return{documents:[b0(t,e.path)]}}function Lk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=b0(t,i);const s=function(u){if(u.length!==0)return B0(At.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:kr(d.field),direction:Uk(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=uh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function Mk(t){let e=Ok(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=j0(h);return d instanceof At&&y0(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new qs(Cr(_.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ul(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,g=h.values||[];return new Ya(g,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,g=h.values||[];return new Ya(g,d)}(n.endAt)),ok(e,i,o,s,a,"F",l,u)}function Fk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function j0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cr(n.unaryFilter.field);return pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Cr(n.unaryFilter.field);return pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Cr(n.unaryFilter.field);return pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cr(n.unaryFilter.field);return pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(n){return pe.create(Cr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return At.create(n.compositeFilter.filters.map(r=>j0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(n.compositeFilter.op))}(t):F()}function Uk(t){return Ck[t]}function $k(t){return Pk[t]}function bk(t){return Nk[t]}function kr(t){return{fieldPath:t.canonicalString()}}function Cr(t){return $e.fromServerFormat(t.fieldPath)}function B0(t){return t instanceof pe?function(n){if(n.op==="=="){if(Rm(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NAN"}};if(Am(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rm(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NAN"}};if(Am(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(n.field),op:$k(n.op),value:n.value}}}(t):t instanceof At?function(n){const r=n.getFilters().map(i=>B0(i));return r.length===1?r[0]:{compositeFilter:{op:bk(n.op),filters:r}}}(t):F()}function H0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,r,i,s=M.min(),o=M.min(),a=Be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.ct=e}}function jk(t){const e=Mk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(){this._n=new Hk}addToCollectionParentIndex(e,n){return this._n.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}deleteAllFieldIndexes(e){return v.resolve()}createTargetIndexes(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(Mn.min())}updateCollectionGroup(e,n,r){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class Hk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new yi(0)}static Bn(){return new yi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ds(r.mutation,i,En.empty(),Ie.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=nr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Un();const o=hs(),a=function(){return hs()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof jl)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ds(c.mutation,u,c.mutation.getFieldMask(),Ie.now())):o.set(u.key,En.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Wk(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=hs();let i=new ce((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||En.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=R0();c.forEach(d=>{if(!s.has(d)){const g=O0(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):T0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):v.resolve(nr());let a=-1,l=s;return o.next(u=>v.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?v.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:hk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=Qi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Qi();return this.indexManager.getCollectionParents(e,s).next(a=>v.forEach(a,l=>{const u=function(h,d){return new ki(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Ue.newInvalidDocument(c)))});let a=Qi();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ds(c.mutation,u,En.empty(),Ie.now()),bl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return v.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ti(i.createTime)}}(n)),v.resolve()}getNamedQuery(e,n){return v.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:jk(i.bundledQuery),readTime:ti(i.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.overlays=new ce(V.comparator),this.hr=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const r=nr();return v.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),v.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),v.resolve()}getOverlaysForCollection(e,n,r){const i=nr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return v.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ce((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=nr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=nr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return v.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ik(n,r));let s=this.hr.get(n);s===void 0&&(s=H(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.Pr=new De(Ee.Ir),this.Tr=new De(Ee.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ee(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ee(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new V(new re([])),r=new Ee(n,e),i=new Ee(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new V(new re([])),r=new Ee(n,e),i=new Ee(n,e+1);let s=H();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ee(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return V.comparator(e.key,n.key)||K(e.pr,n.pr)}static Er(e,n){return K(e.pr,n.pr)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new De(Ee.Ir)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tk(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ee(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ee(n,0),i=new Ee(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(K);return n.forEach(i=>{const s=new Ee(i,0),o=new Ee(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),v.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Ee(new V(s),0);let a=new De(K);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),v.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return v.forEach(n.mutations,i=>{const s=new Ee(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ee(n,0),i=this.wr.firstAfterOrEqual(r);return v.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.vr=e,this.docs=function(){return new ce(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ue.newInvalidDocument(i))}),v.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Un();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zR(bR(c),r)<=0||(i.has(c.key)||bl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,n,r,i){F()}Fr(e,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Jk(this)}getSize(e){return v.resolve(this.size)}}class Jk extends qk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),v.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.persistence=e,this.Mr=new Ci(n=>Zd(n),ef),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Or=0,this.Nr=new sf,this.targetCount=0,this.Br=yi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),v.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.qn(n),v.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),v.waitFor(s).next(()=>i)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return v.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),v.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),v.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),v.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return v.resolve(r)}containsKey(e,n){return v.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Qd(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Zk(this),this.indexManager=new Bk,this.remoteDocumentCache=function(i){return new Xk(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new zk(n),this.$r=new Gk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Yk(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new tC(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return v.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class tC extends BR{constructor(e){super(),this.currentSequenceNumber=e}}class of{constructor(e){this.persistence=e,this.zr=new sf,this.jr=null}static Hr(e){return new of(e)}get Jr(){if(this.jr)return this.jr;throw F()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),v.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),v.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Jr,r=>{const i=V.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,M.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return v.or([()=>v.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new af(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return iT()?8:tr.v(ge())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nC;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ji()<=j.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",Rr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),v.resolve()):(ji()<=j.DEBUG&&R("QueryEngine","Query:",Rr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ji()<=j.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",Rr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ut(n))):v.resolve())}ji(e,n){if(Nm(n))return v.resolve(null);let r=Ut(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=oh(n,null,"F"),r=Ut(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,oh(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return Nm(n)||i.isEqual(M.min())?v.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?v.resolve(null):(ji()<=j.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rr(n)),this.es(e,o,n,$R(i,-1)).next(a=>a))})}Zi(e,n){let r=new De(S0(e));return n.forEach((i,s)=>{bl(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ji()<=j.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Rr(n)),this.zi.getDocumentsMatchingQuery(e,n,Mn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ce(K),this.rs=new Ci(s=>Zd(s),ef),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function sC(t,e,n,r){return new iC(t,e,n,r)}async function q0(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function W0(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function oC(t,e){const n=W(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Be.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(E,S,p){return E.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,g,c)&&a.push(n.Qr.updateTargetData(s,g))});let l=Un(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(aC(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(M.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return v.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function aC(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Un();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(M.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function lC(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,v.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function dh(t,e,n){const r=W(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!co(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function zm(t,e,n){const r=W(t);let i=M.min(),s=H();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=W(l),d=h.rs.get(c);return d!==void 0?v.resolve(h.ns.get(d)):h.Qr.getTargetData(u,c)}(r,o,Ut(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:M.min(),n?s:H())).next(a=>(uC(r,lk(e),a),{documents:a,hs:s})))}function uC(t,e,n){let r=t.ss.get(e)||M.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class jm{constructor(){this.activeTargetIds=pk()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cC{constructor(){this.no=new jm,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new jm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo=null;function $u(){return Bo===null?Bo=function(){return 268435456+Math.round(2147483648*Math.random())}():Bo++,"0x"+Bo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection";class pC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=$u(),l=this.bo(n,r.toUriEncodedString());R("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(R("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw fi("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ri}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=dC[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=$u();return new Promise((o,a)=>{const l=new kR;l.setWithCredentials(!0),l.listenOnce(AR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Mu.NO_ERROR:const c=l.getResponseJson();R(Le,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Mu.TIMEOUT:R(Le,`RPC '${e}' ${s} timed out`),a(new N(T.DEADLINE_EXCEEDED,"Request time out"));break;case Mu.HTTP_ERROR:const h=l.getStatus();if(R(Le,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const _=function(S){const p=S.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(p)>=0?p:T.UNKNOWN}(g.status);a(new N(_,g.message))}else a(new N(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new N(T.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{R(Le,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(Le,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=$u(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=IR(),a=SR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");R(Le,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,g=!1;const _=new fC({lo:S=>{g?R(Le,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(d||(R(Le,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),R(Le,`RPC '${e}' stream ${i} sending:`,S),h.send(S))},ho:()=>h.close()}),E=(S,p,f)=>{S.listen(p,m=>{try{f(m)}catch(y){setTimeout(()=>{throw y},0)}})};return E(h,bo.EventType.OPEN,()=>{g||R(Le,`RPC '${e}' stream ${i} transport opened.`)}),E(h,bo.EventType.CLOSE,()=>{g||(g=!0,R(Le,`RPC '${e}' stream ${i} transport closed`),_.Vo())}),E(h,bo.EventType.ERROR,S=>{g||(g=!0,fi(Le,`RPC '${e}' stream ${i} transport errored:`,S),_.Vo(new N(T.UNAVAILABLE,"The operation could not be completed")))}),E(h,bo.EventType.MESSAGE,S=>{var p;if(!g){const f=S.data[0];me(!!f);const m=f,y=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(y){R(Le,`RPC '${e}' stream ${i} received error:`,y);const I=y.status;let k=function(Y){const $=he[Y];if($!==void 0)return x0($)}(I),C=y.message;k===void 0&&(k=T.INTERNAL,C="Unknown error status: "+I+" with message "+y.message),g=!0,_.Vo(new N(k,C)),h.close()}else R(Le,`RPC '${e}' stream ${i} received:`,f),_.mo(f)}}),E(a,RR.STAT_EVENT,S=>{S.stat===_m.PROXY?R(Le,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===_m.NOPROXY&&R(Le,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function bu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){return new Dk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new K0(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?($t(n.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new N(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gC extends mC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=Vk(this.serializer,e),r=function(s){if(!("targetChange"in s))return M.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?M.min():o.readTime?ti(o.readTime):M.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=bm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=ih(l)?{documents:xk(s,l)}:{query:Lk(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=F0(s,o.resumeToken);const u=uh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(M.min())>0){a.readTime=ch(s,o.snapshotVersion.toTimestamp());const u=uh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Fk(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=bm(this.serializer),n.removeTarget=e,this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new N(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,hh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(T.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,hh(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class _C{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?($t(n),this.g_=!1):R("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{mo(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=W(l);u.v_.add(4),await po(u),u.x_.set("Unknown"),u.v_.delete(4),await ql(u)}(this))})}),this.x_=new _C(r,i)}}async function ql(t){if(mo(t))for(const e of t.F_)await e(!0)}async function po(t){for(const e of t.F_)await e(!1)}function G0(t,e){const n=W(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),cf(n)?uf(n):Pi(n).Jo()&&lf(n,e))}function Q0(t,e){const n=W(t),r=Pi(n);n.C_.delete(e),r.Jo()&&Y0(n,e),n.C_.size===0&&(r.Jo()?r.Xo():mo(n)&&n.x_.set("Unknown"))}function lf(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(M.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Pi(t).c_(e)}function Y0(t,e){t.O_.Oe(e),Pi(t).l_(e)}function uf(t){t.O_=new kk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Pi(t).start(),t.x_.p_()}function cf(t){return mo(t)&&!Pi(t).Ho()&&t.C_.size>0}function mo(t){return W(t).v_.size===0}function X0(t){t.O_=void 0}async function EC(t){t.C_.forEach((e,n)=>{lf(t,e)})}async function wC(t,e){X0(t),cf(t)?(t.x_.S_(e),uf(t)):t.x_.set("Unknown")}async function TC(t,e,n){if(t.x_.set("Online"),e instanceof M0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hm(t,r)}else if(e instanceof ua?t.O_.$e(e):e instanceof L0?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(M.min()))try{const r=await W0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Be.EMPTY_BYTE_STRING,c.snapshotVersion)),Y0(s,l);const h=new wn(c.target,l,u,c.sequenceNumber);lf(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Hm(t,r)}}async function Hm(t,e,n){if(!co(e))throw e;t.v_.add(1),await po(t),t.x_.set("Offline"),n||(n=()=>W0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await ql(t)})}async function qm(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=mo(n);n.v_.add(3),await po(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await ql(n)}async function IC(t,e){const n=W(t);e?(n.v_.delete(2),await ql(n)):e||(n.v_.add(2),await po(n),n.x_.set("Unknown"))}function Pi(t){return t.N_||(t.N_=function(n,r,i){const s=W(n);return s.R_(),new gC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:EC.bind(null,t),To:wC.bind(null,t),u_:TC.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),cf(t)?uf(t):t.x_.set("Unknown")):(await t.N_.stop(),X0(t))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new hf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function J0(t,e){if($t("AsyncQueue",`${e}: ${t}`),co(t))return new N(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=Qi(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new ni(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ni)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ni;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.L_=new ce(V.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):F():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class _i{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _i(e,n,ni.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.q_=void 0,this.Q_=[]}}class AC{constructor(){this.queries=new Ci(e=>I0(e),$l),this.onlineState="Unknown",this.K_=new Set}}async function RC(t,e){const n=W(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new SC),i)try{s.q_=await n.onListen(r)}catch(o){const a=J0(o,`Initialization of query '${Rr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&df(n)}async function kC(t,e){const n=W(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function CC(t,e){const n=W(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&df(n)}function PC(t,e,n){const r=W(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function df(t){t.K_.forEach(e=>{e.next()})}class NC{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.key=e}}class eE{constructor(e){this.key=e}}class DC{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=H(),this.mutatedKeys=H(),this.ua=S0(e),this.ca=new ni(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Wm,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=bl(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;d&&g?d.data.isEqual(g.data)?_!==E&&(r.track({type:3,doc:g}),S=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),S=!0,(l&&this.ua(g,l)>0||u&&this.ua(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),S=!0):d&&!g&&(r.track({type:1,doc:d}),S=!0,(l||u)&&(a=!0)),S&&(g?(o=o.add(g),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,h)=>function(g,_){const E=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return E(g)-E(_)}(c.type,h.type)||this.ua(c.doc,h.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new _i(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Wm,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=H(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new eE(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new Z0(r))}),n}Ra(e){this.oa=e.hs,this.aa=H();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return _i.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class OC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VC{constructor(e){this.key=e,this.ma=!1}}class xC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ci(a=>I0(a),$l),this.pa=new Map,this.ya=new Set,this.wa=new ce(V.comparator),this.Sa=new Map,this.ba=new sf,this.Da={},this.Ca=new Map,this.va=yi.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function LC(t,e){const n=jC(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await lC(n.localStore,Ut(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await MC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&G0(n.remoteStore,o)}return i}async function MC(t,e,n,r,i){t.Ma=(h,d,g)=>async function(E,S,p,f){let m=S.view.ha(p);m.Xi&&(m=await zm(E.localStore,S.query,!1).then(({documents:C})=>S.view.ha(C,m)));const y=f&&f.targetChanges.get(S.targetId),I=f&&f.targetMismatches.get(S.targetId)!=null,k=S.view.applyChanges(m,E.isPrimaryClient,y,I);return Gm(E,S.targetId,k.da),k.snapshot}(t,h,d,g);const s=await zm(t.localStore,e,!0),o=new DC(e,s.hs),a=o.ha(s.documents),l=fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Gm(t,n,u.da);const c=new OC(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function FC(t,e){const n=W(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!$l(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Q0(n.remoteStore,r.targetId),fh(n,r.targetId)}).catch(Wd)):(fh(n,r.targetId),await dh(n.localStore,r.targetId,!0))}async function tE(t,e){const n=W(t);try{const r=await oC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?me(o.ma):i.removedDocuments.size>0&&(me(o.ma),o.ma=!1))}),await rE(n,r,e)}catch(r){await Wd(r)}}function Km(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=W(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.Q_)d.U_(a)&&(u=!0)}),u&&df(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UC(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new ce(V.comparator);o=o.insert(s,Ue.newNoDocument(s,M.min()));const a=H().add(s),l=new Bl(M.min(),new Map,new ce(K),o,a);await tE(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),ff(r)}else await dh(r.localStore,e,!1).then(()=>fh(r,e,n)).catch(Wd)}function fh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||nE(t,r)})}function nE(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Q0(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),ff(t))}function Gm(t,e,n){for(const r of n)r instanceof Z0?(t.ba.addReference(r.key,e),$C(t,r)):r instanceof eE?(R("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||nE(t,r.key)):F()}function $C(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(R("SyncEngine","New document in limbo: "+n),t.ya.add(r),ff(t))}function ff(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new V(re.fromString(e)),r=t.va.next();t.Sa.set(r,new VC(n)),t.wa=t.wa.insert(n,r),G0(t.remoteStore,new wn(Ut(w0(n.path)),r,"TargetPurposeLimboResolution",Qd._e))}}async function rE(t,e,n){const r=W(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=af.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=W(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(u,d=>v.forEach(d.qi,g=>c.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>v.forEach(d.Qi,g=>c.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!co(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const g=c.ns.get(d),_=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(_);c.ns=c.ns.insert(d,E)}}}(r.localStore,s))}async function bC(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await q0(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new N(T.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rE(n,r.us)}}function zC(t,e){const n=W(t),r=n.Sa.get(e);if(r&&r.ma)return H().add(r.key);{let i=H();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function jC(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UC.bind(null,e),e.fa.u_=CC.bind(null,e.eventManager),e.fa.xa=PC.bind(null,e.eventManager),e}class Qm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sC(this.persistence,new rC,e.initialUser,this.serializer)}createPersistence(e){return new eC(of.Hr,this.serializer)}createSharedClientState(e){return new cC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Km(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bC.bind(null,this.syncEngine),await IC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AC}()}createDatastore(e){const n=Hl(e.databaseInfo.databaseId),r=function(s){return new pC(s)}(e.databaseInfo);return function(s,o,a,l){return new yC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new vC(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Km(this.syncEngine,n,0),function(){return Bm.D()?new Bm:new hC}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new xC(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=W(r);R("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await po(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Me.UNAUTHENTICATED,this.clientId=FR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=J0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zu(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await q0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ym(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KC(t);R("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qm(e.remoteStore,i)),t._onlineComponents=e}function WC(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function KC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await zu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!WC(n))throw n;fi("Error using user provided cache. Falling back to memory cache: "+n),await zu(t,new Qm)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await zu(t,new Qm);return t._offlineComponents}async function GC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await Ym(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await Ym(t,new BC))),t._onlineComponents}async function QC(t){const e=await GC(t),n=e.eventManager;return n.onListen=LC.bind(null,e.syncEngine),n.onUnlisten=FC.bind(null,e.syncEngine),n}function YC(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new HC({next:d=>{o.enqueueAndForget(()=>kC(s,h)),d.fromCache&&l.source==="server"?u.reject(new N(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new NC(a,c,{includeMetadataChanges:!0,Z_:!0});return RC(s,h)}(await QC(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t,e,n){if(!n)throw new N(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JC(t,e,n,r){if(e===!0&&r===!0)throw new N(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jm(t){if(V.isDocumentKey(t))throw new N(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function ph(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wl(t);throw new N(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PR;switch(r.type){case"firstParty":return new VR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xm.get(n);r&&(R("ComponentProvider","Removing Datastore"),Xm.delete(n),r.terminate())}(this),Promise.resolve()}}function ZC(t,e,n,r={}){var i;const s=(t=ph(t,pf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Me.MOCK_USER;else{a=k_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new N(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Me(u)}t._authCredentials=new NR(new d0(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ir(this.firestore,e,this._query)}}class an{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class ri extends Ir{constructor(e,n,r){super(e,n,w0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new V(e))}withConverter(e){return new ri(this.firestore,e,this._path)}}function eP(t,e,...n){if(t=It(t),XC("collection","path",e),t instanceof pf){const r=re.fromString(e,...n);return Jm(r),new ri(t,null,r)}{if(!(t instanceof an||t instanceof ri))throw new N(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return Jm(r),new ri(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new K0(this,"async_queue_retry"),this._u=()=>{const n=bu();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=bu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=bu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new On;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!co(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $t("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=hf.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&F()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class sE extends pf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new tP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oE(this),this._firestoreClient.terminate()}}function nP(t,e){const n=typeof t=="object"?t:dd(),r=typeof t=="string"?t:e||"(default)",i=_l(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=S_("firestore");s&&ZC(i,...s)}return i}function rP(t){return t._firestoreClient||oE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function oE(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new GR(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,iE(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new qC(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vi(Be.fromBase64String(e))}catch(n){throw new N(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vi(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=/^__.*__$/;function uE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class gf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new gf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return mh(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(uE(this.du)&&iP.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class sP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hl(e)}Su(e,n,r,i=!1){return new gf({du:e,methodName:n,wu:r,path:$e.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oP(t){const e=t._freezeSettings(),n=Hl(t._databaseId);return new sP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aP(t,e,n,r=!1){return yf(n,t.Su(r?4:3,e))}function yf(t,e){if(cE(t=It(t)))return uP("Unsupported field value:",e,t),lP(t,e);if(t instanceof lE)return function(r,i){if(!uE(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=yf(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=It(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ie.fromDate(r);return{timestampValue:ch(i.serializer,s)}}if(r instanceof Ie){const s=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ch(i.serializer,s)}}if(r instanceof mf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vi)return{bytesValue:F0(i.serializer,r._byteString)};if(r instanceof an){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:U0(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Wl(r)}`)}(t,e)}function lP(t,e){const n={};return f0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ho(t,(r,i)=>{const s=yf(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof mf||t instanceof vi||t instanceof an||t instanceof lE)}function uP(t,e,n){if(!cE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Wl(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}const cP=new RegExp("[~\\*/\\[\\]]");function hP(t,e,n){if(e.search(cP)>=0)throw mh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new aE(...e.split("."))._internalPath}catch{throw mh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(T.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_f("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dP extends hE{data(){return super.data()}}function _f(t,e){return typeof e=="string"?hP(t,e):e instanceof aE?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vf{}class dE extends vf{}function pP(t,e,...n){let r=[];e instanceof vf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof wf).length,a=s.filter(l=>l instanceof Ef).length;if(o>1||o>0&&a>0)throw new N(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ef extends dE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ef(e,n,r)}_apply(e){const n=this._parse(e);return fE(e._query,n),new Ir(e.firestore,e.converter,sh(e._query,n))}_parse(e){const n=oP(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new N(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){tg(h,c);const g=[];for(const _ of h)g.push(eg(l,s,_));d={arrayValue:{values:g}}}else d=eg(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||tg(h,c),d=aP(a,o,h,c==="in"||c==="not-in");return pe.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class wf extends vf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:At.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)fE(o,l),o=sh(o,l)}(e._query,n),new Ir(e.firestore,e.converter,sh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tf extends dE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Tf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new N(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qs(s,o)}(e._query,this._field,this._direction);return new Ir(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ki(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function mP(t,e="asc"){const n=e,r=_f("orderBy",t);return Tf._create(r,n)}function eg(t,e,n){if(typeof(n=It(n))=="string"){if(n==="")throw new N(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!T0(e)&&n.indexOf("/")!==-1)throw new N(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(re.fromString(n));if(!V.isDocumentKey(r))throw new N(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sm(t,new V(r))}if(n instanceof an)return Sm(t,n._key);throw new N(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wl(n)}.`)}function tg(t,e){if(!Array.isArray(t)||t.length===0)throw new N(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fE(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gP{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ho(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new mf(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const n=Fn(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=re.fromString(e);me(H0(r));const i=new Bs(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||$t(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yP extends hE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_f("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ca extends yP{data(e={}){return super.data(e)}}class _P{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ho(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ca(this._firestore,this._userDataWriter,r.key,r,new Ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ca(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ca(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:vP(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class EP extends gP{constructor(e){super(),this.firestore=e}convertBytes(e){return new vi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,n)}}function wP(t){t=ph(t,Ir);const e=ph(t.firestore,sE),n=rP(e),r=new EP(e);return fP(t._query),YC(n,t._query).then(i=>new _P(e,r,t,i))}(function(e,n=!0){(function(i){Ri=i})(wr),pr(new Ln("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new sE(new DR(r.getProvider("auth-internal")),new LR(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new N(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Lt(vm,"4.4.3",e),Lt(vm,"4.4.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="firebasestorage.googleapis.com",TP="storageBucket",IP=2*60*1e3,SP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends jt{constructor(e,n,r=0){super(ju(e),`Firebase Storage: ${n} (${ju(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ju(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zt||(zt={}));function ju(t){return"storage/"+t}function AP(){const t="An unknown error occurred, please check the error payload for server response.";return new Bt(zt.UNKNOWN,t)}function RP(){return new Bt(zt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kP(){return new Bt(zt.CANCELED,"User canceled the upload/download.")}function CP(t){return new Bt(zt.INVALID_URL,"Invalid URL '"+t+"'.")}function PP(t){return new Bt(zt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ng(t){return new Bt(zt.INVALID_ARGUMENT,t)}function mE(){return new Bt(zt.APP_DELETED,"The Firebase app was deleted.")}function NP(t){return new Bt(zt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=vt.makeFromUrl(e,n)}catch{return new vt(e,"")}if(r.path==="")return r;throw PP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},E=n===pE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",p=new RegExp(`^https?://${E}/${i}/${S}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:_,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<m.length;y++){const I=m[y],k=I.regex.exec(e);if(k){const C=k[I.indices.bucket];let O=k[I.indices.path];O||(O=""),r=new vt(C,O),I.postModify(r);break}}if(r==null)throw CP(e);return r}}class DP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...S){u||(u=!0,e.apply(null,S))}function h(S){i=setTimeout(()=>{i=null,t(g,l())},S)}function d(){s&&clearTimeout(s)}function g(S,...p){if(u){d();return}if(S){d(),c.call(null,S,...p);return}if(l()||o){d(),c.call(null,S,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,h(m)}let _=!1;function E(S){_||(_=!0,d(),!u&&(i!==null?(S||(a=2),clearTimeout(i),h(0)):S||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function VP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){return t!==void 0}function rg(t,e,n,r){if(r<e)throw ng(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ng(`Invalid value for '${t}'. Expected ${n} or less.`)}function LP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Za;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Za||(Za={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new qo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Za.NO_ERROR,l=s.getStatus();if(!a||MP(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Za.ABORT;r(!1,new qo(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new qo(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());xP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=AP();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?mE():kP();o(l)}else{const l=RP();o(l)}};this.canceled_?n(!1,new qo(!1,null,!0)):this.backoffId_=OP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function UP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $P(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jP(t,e,n,r,i,s,o=!0){const a=LP(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return bP(u,e),UP(u,n),$P(u,s),zP(u,r),new FP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function HP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this._service=e,n instanceof vt?this._location=n:this._location=vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new el(e,n)}get root(){const e=new vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HP(this._location.path)}get storage(){return this._service}get parent(){const e=BP(this._location.path);if(e===null)return null;const n=new vt(this._location.bucket,e);return new el(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw NP(e)}}function ig(t,e){const n=e==null?void 0:e[TP];return n==null?null:vt.makeFromBucketSpec(n,t)}function qP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:k_(i,t.app.options.projectId))}class WP{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=pE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IP,this._maxUploadRetryTime=SP,this._requests=new Set,i!=null?this._bucket=vt.makeFromBucketSpec(i,this._host):this._bucket=ig(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vt.makeFromBucketSpec(this._url,e):this._bucket=ig(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new el(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new DP(mE());{const o=jP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const sg="@firebase/storage",og="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="storage";function KP(t=dd(),e){t=It(t);const r=_l(t,gE).getImmediate({identifier:e}),i=S_("storage");return i&&GP(r,...i),r}function GP(t,e,n,r={}){qP(t,e,n,r)}function QP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new WP(n,r,i,e,wr)}function YP(){pr(new Ln(gE,QP,"PUBLIC").setMultipleInstances(!0)),Lt(sg,og,""),Lt(sg,og,"esm2017")}YP();const XP={apiKey:"AIzaSyAHOJOboA2snlb4Z0wSCnP4lQK-048eXvk",authDomain:"etnochem-696d8.firebaseapp.com",projectId:"etnochem-696d8",storageBucket:"etnochem-696d8.appspot.com",messagingSenderId:"1005146496821",appId:"1:1005146496821:web:8f3a13a6446e991e96f67c",measurementId:"G-NHQMHNT6EV"},If=D_(XP);wA(If);const JP=nP(If);KP(If);function ZP(){Hr.useState(0);const t=JP,[e,n]=Hr.useState([]);return Hr.useEffect(()=>{(async()=>{const s=(await wP(pP(eP(t,"Team"),mP("number","asc")))).docs.map(o=>({id:o.id,...o.data()}));n(s),console.log(s)})()},[]),Pr.jsx(Pr.Fragment,{children:e.map((r,i)=>Pr.jsx("div",{children:Pr.jsxs("h1",{children:["HALO ",r.id]})},i))})}Bu.createRoot(document.getElementById("root")).render(Pr.jsx(xE.StrictMode,{children:Pr.jsx(ZP,{})}));
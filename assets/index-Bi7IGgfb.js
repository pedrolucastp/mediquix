const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/QuickQuizGame-DIdi_Fqb.js","assets/GameContainer-DhlnUXE4.js","assets/SelectorsComponent-3Jm0--dW.js","assets/SelectorsComponent-DI9O7iNc.css","assets/GameContainer-D7CCTctq.css","assets/QuickQuizGame-CscXvjyk.css","assets/MemoryGame-D87a4VBe.js","assets/MemoryGame-CcJrZiJm.css","assets/WordSearchGame-DEq9Sn1X.js","assets/WordSearchGame-DNXelYng.css","assets/HangmanGame-Cit5qoL6.js","assets/HangmanGame-CTR3HiZw.css","assets/MyVocabulary-Ak9i3WMd.js","assets/MyVocabulary-BSurKbvx.css","assets/CrosswordsGame-ubidxhNh.js","assets/CrosswordsGame-CK90lFgr.css","assets/AuthAction-Dq16x9zM.js","assets/AuthAction-DQZXuj1Z.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function e(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const t={},n=[],r=()=>{},i=()=>!1,s=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith("onUpdate:"),a=Object.assign,c=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),h=Array.isArray,d=e=>"[object Map]"===_(e),f=e=>"[object Set]"===_(e),p=e=>"[object Date]"===_(e),m=e=>"function"==typeof e,g=e=>"string"==typeof e,v=e=>"symbol"==typeof e,y=e=>null!==e&&"object"==typeof e,w=e=>(y(e)||m(e))&&m(e.then)&&m(e.catch),b=Object.prototype.toString,_=e=>b.call(e),E=e=>"[object Object]"===_(e),S=e=>g(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,I=e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),T=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},k=/-(\w)/g,C=T((e=>e.replace(k,((e,t)=>t?t.toUpperCase():"")))),A=/\B([A-Z])/g,x=T((e=>e.replace(A,"-$1").toLowerCase())),P=T((e=>e.charAt(0).toUpperCase()+e.slice(1))),N=T((e=>e?`on${P(e)}`:"")),O=(e,t)=>!Object.is(e,t),D=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},L=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},R=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let M;const F=()=>M||(M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function U(e){if(h(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=g(r)?B(r):U(r);if(i)for(const e in i)t[e]=i[e]}return t}if(g(e)||y(e))return e}const V=/;(?![^(]*\))/g,j=/:([^]+)/,z=/\/\*[^]*?\*\//g;function B(e){const t={};return e.replace(z,"").split(V).forEach((e=>{if(e){const n=e.split(j);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function $(e){let t="";if(g(e))t=e;else if(h(e))for(let n=0;n<e.length;n++){const r=$(e[n]);r&&(t+=r+" ")}else if(y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const q=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function H(e){return!!e||""===e}function K(e,t){if(e===t)return!0;let n=p(e),r=p(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=v(e),r=v(t),n||r)return e===t;if(n=h(e),r=h(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=K(e[r],t[r]);return n}(e,t);if(n=y(e),r=y(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!K(e[n],t[n]))return!1}}return String(e)===String(t)}function G(e,t){return e.findIndex((e=>K(e,t)))}const W=e=>!(!e||!0!==e.__v_isRef),Q=e=>g(e)?e:null==e?"":h(e)||y(e)&&(e.toString===b||!m(e.toString))?W(e)?Q(e.value):JSON.stringify(e,Y,2):String(e),Y=(e,t)=>W(t)?Y(e,t.value):d(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[J(t,r)+" =>"]=n,e)),{})}:f(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>J(e)))}:v(t)?J(t):!y(t)||h(t)||E(t)?t:String(t),J=(e,t="")=>{var n;return v(e)?`Symbol(${null!=(n=e.description)?n:t})`:e};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let X,Z;class ee{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=X,!e&&X&&(this.index=(X.scopes||(X.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=X;try{return X=this,e()}finally{X=t}}}on(){X=this}off(){X=this.parent}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function te(e){return new ee(e)}function ne(){return X}const re=new WeakSet;class ie{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,X&&X.active&&X.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,re.has(this)&&(re.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||ce(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,_e(this),he(this);const e=Z,t=ve;Z=this,ve=!0;try{return this.fn()}finally{de(this),Z=e,ve=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)me(e);this.deps=this.depsTail=void 0,_e(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?re.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fe(this)&&this.run()}get dirty(){return fe(this)}}let se,oe,ae=0;function ce(e,t=!1){if(e.flags|=8,t)return e.next=oe,void(oe=e);e.next=se,se=e}function le(){ae++}function ue(){if(--ae>0)return;if(oe){let e=oe;for(oe=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;se;){let n=se;for(se=void 0;n;){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function he(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function de(e){let t,n=e.depsTail,r=n;for(;r;){const e=r.prevDep;-1===r.version?(r===n&&(n=e),me(r),ge(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function fe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(pe(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function pe(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===Ee)return;e.globalVersion=Ee;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!fe(e))return void(e.flags&=-3);const n=Z,r=ve;Z=e,ve=!0;try{he(e);const n=e.fn(e._value);(0===t.version||O(n,e._value))&&(e._value=n,t.version++)}catch(i){throw t.version++,i}finally{Z=n,ve=r,de(e),e.flags&=-3}}function me(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)me(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function ge(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ve=!0;const ye=[];function we(){ye.push(ve),ve=!1}function be(){const e=ye.pop();ve=void 0===e||e}function _e(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=Z;Z=void 0;try{t()}finally{Z=e}}}let Ee=0;class Se{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ie{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Z||!ve||Z===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==Z)t=this.activeLink=new Se(Z,this),Z.deps?(t.prevDep=Z.depsTail,Z.depsTail.nextDep=t,Z.depsTail=t):Z.deps=Z.depsTail=t,Te(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=Z.depsTail,t.nextDep=void 0,Z.depsTail.nextDep=t,Z.depsTail=t,Z.deps===t&&(Z.deps=e)}return t}trigger(e){this.version++,Ee++,this.notify(e)}notify(e){le();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ue()}}}function Te(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Te(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ke=new WeakMap,Ce=Symbol(""),Ae=Symbol(""),xe=Symbol("");function Pe(e,t,n){if(ve&&Z){let t=ke.get(e);t||ke.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ie),r.map=t,r.key=n),r.track()}}function Ne(e,t,n,r,i,s){const o=ke.get(e);if(!o)return void Ee++;const a=e=>{e&&e.trigger()};if(le(),"clear"===t)o.forEach(a);else{const i=h(e),s=i&&S(n);if(i&&"length"===n){const e=Number(r);o.forEach(((t,n)=>{("length"===n||n===xe||!v(n)&&n>=e)&&a(t)}))}else switch((void 0!==n||o.has(void 0))&&a(o.get(n)),s&&a(o.get(xe)),t){case"add":i?s&&a(o.get("length")):(a(o.get(Ce)),d(e)&&a(o.get(Ae)));break;case"delete":i||(a(o.get(Ce)),d(e)&&a(o.get(Ae)));break;case"set":d(e)&&a(o.get(Ce))}}ue()}function Oe(e){const t=vt(e);return t===e?t:(Pe(t,0,xe),mt(e)?t:t.map(wt))}function De(e){return Pe(e=vt(e),0,xe),e}const Le={__proto__:null,[Symbol.iterator](){return Re(this,Symbol.iterator,wt)},concat(...e){return Oe(this).concat(...e.map((e=>h(e)?Oe(e):e)))},entries(){return Re(this,"entries",(e=>(e[1]=wt(e[1]),e)))},every(e,t){return Fe(this,"every",e,t,void 0,arguments)},filter(e,t){return Fe(this,"filter",e,t,(e=>e.map(wt)),arguments)},find(e,t){return Fe(this,"find",e,t,wt,arguments)},findIndex(e,t){return Fe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Fe(this,"findLast",e,t,wt,arguments)},findLastIndex(e,t){return Fe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Fe(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ve(this,"includes",e)},indexOf(...e){return Ve(this,"indexOf",e)},join(e){return Oe(this).join(e)},lastIndexOf(...e){return Ve(this,"lastIndexOf",e)},map(e,t){return Fe(this,"map",e,t,void 0,arguments)},pop(){return je(this,"pop")},push(...e){return je(this,"push",e)},reduce(e,...t){return Ue(this,"reduce",e,t)},reduceRight(e,...t){return Ue(this,"reduceRight",e,t)},shift(){return je(this,"shift")},some(e,t){return Fe(this,"some",e,t,void 0,arguments)},splice(...e){return je(this,"splice",e)},toReversed(){return Oe(this).toReversed()},toSorted(e){return Oe(this).toSorted(e)},toSpliced(...e){return Oe(this).toSpliced(...e)},unshift(...e){return je(this,"unshift",e)},values(){return Re(this,"values",wt)}};function Re(e,t,n){const r=De(e),i=r[t]();return r===e||mt(e)||(i._next=i.next,i.next=()=>{const e=i._next();return e.value&&(e.value=n(e.value)),e}),i}const Me=Array.prototype;function Fe(e,t,n,r,i,s){const o=De(e),a=o!==e&&!mt(e),c=o[t];if(c!==Me[t]){const t=c.apply(e,s);return a?wt(t):t}let l=n;o!==e&&(a?l=function(t,r){return n.call(this,wt(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));const u=c.call(o,l,r);return a&&i?i(u):u}function Ue(e,t,n,r){const i=De(e);let s=n;return i!==e&&(mt(e)?n.length>3&&(s=function(t,r,i){return n.call(this,t,r,i,e)}):s=function(t,r,i){return n.call(this,t,wt(r),i,e)}),i[t](s,...r)}function Ve(e,t,n){const r=vt(e);Pe(r,0,xe);const i=r[t](...n);return-1!==i&&!1!==i||!gt(n[0])?i:(n[0]=vt(n[0]),r[t](...n))}function je(e,t,n=[]){we(),le();const r=vt(e)[t].apply(e,n);return ue(),be(),r}const ze=e("__proto__,__v_isRef,__isVue"),Be=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(v));function $e(e){v(e)||(e=String(e));const t=vt(this);return Pe(t,0,e),t.hasOwnProperty(e)}class qe{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if("__v_isReactive"===t)return!r;if("__v_isReadonly"===t)return r;if("__v_isShallow"===t)return i;if("__v_raw"===t)return n===(r?i?at:ot:i?st:it).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=h(e);if(!r){let e;if(s&&(e=Le[t]))return e;if("hasOwnProperty"===t)return $e}const o=Reflect.get(e,t,_t(e)?e:n);return(v(t)?Be.has(t):ze(t))?o:(r||Pe(e,0,t),i?o:_t(o)?s&&S(t)?o:o.value:y(o)?r?ht(o):lt(o):o)}}class He extends qe{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t];if(!this._isShallow){const t=pt(i);if(mt(n)||pt(n)||(i=vt(i),n=vt(n)),!h(e)&&_t(i)&&!_t(n))return!t&&(i.value=n,!0)}const s=h(e)&&S(t)?Number(t)<e.length:u(e,t),o=Reflect.set(e,t,n,_t(e)?e:r);return e===vt(r)&&(s?O(n,i)&&Ne(e,"set",t,n):Ne(e,"add",t,n)),o}deleteProperty(e,t){const n=u(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ne(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return v(t)&&Be.has(t)||Pe(e,0,t),n}ownKeys(e){return Pe(e,0,h(e)?"length":Ce),Reflect.ownKeys(e)}}class Ke extends qe{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ge=new He,We=new Ke,Qe=new He(!0),Ye=e=>e,Je=e=>Reflect.getPrototypeOf(e);function Xe(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function Ze(e,t){const n={get(n){const r=this.__v_raw,i=vt(r),s=vt(n);e||(O(n,s)&&Pe(i,0,n),Pe(i,0,s));const{has:o}=Je(i),a=t?Ye:e?bt:wt;return o.call(i,n)?a(r.get(n)):o.call(i,s)?a(r.get(s)):void(r!==i&&r.get(n))},get size(){const t=this.__v_raw;return!e&&Pe(vt(t),0,Ce),Reflect.get(t,"size",t)},has(t){const n=this.__v_raw,r=vt(n),i=vt(t);return e||(O(t,i)&&Pe(r,0,t),Pe(r,0,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){const i=this,s=i.__v_raw,o=vt(s),a=t?Ye:e?bt:wt;return!e&&Pe(o,0,Ce),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}};a(n,e?{add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear")}:{add(e){t||mt(e)||pt(e)||(e=vt(e));const n=vt(this);return Je(n).has.call(n,e)||(n.add(e),Ne(n,"add",e,e)),this},set(e,n){t||mt(n)||pt(n)||(n=vt(n));const r=vt(this),{has:i,get:s}=Je(r);let o=i.call(r,e);o||(e=vt(e),o=i.call(r,e));const a=s.call(r,e);return r.set(e,n),o?O(n,a)&&Ne(r,"set",e,n):Ne(r,"add",e,n),this},delete(e){const t=vt(this),{has:n,get:r}=Je(t);let i=n.call(t,e);i||(e=vt(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&Ne(t,"delete",e,void 0),s},clear(){const e=vt(this),t=0!==e.size,n=e.clear();return t&&Ne(e,"clear",void 0,void 0),n}});return["keys","values","entries",Symbol.iterator].forEach((r=>{n[r]=function(e,t,n){return function(...r){const i=this.__v_raw,s=vt(i),o=d(s),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=i[e](...r),u=n?Ye:t?bt:wt;return!t&&Pe(s,0,c?Ae:Ce),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}(r,e,t)})),n}function et(e,t){const n=Ze(e,t);return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}const tt={get:et(!1,!1)},nt={get:et(!1,!0)},rt={get:et(!0,!1)},it=new WeakMap,st=new WeakMap,ot=new WeakMap,at=new WeakMap;function ct(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>_(e).slice(8,-1))(e))}function lt(e){return pt(e)?e:dt(e,!1,Ge,tt,it)}function ut(e){return dt(e,!1,Qe,nt,st)}function ht(e){return dt(e,!0,We,rt,ot)}function dt(e,t,n,r,i){if(!y(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=ct(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function ft(e){return pt(e)?ft(e.__v_raw):!(!e||!e.__v_isReactive)}function pt(e){return!(!e||!e.__v_isReadonly)}function mt(e){return!(!e||!e.__v_isShallow)}function gt(e){return!!e&&!!e.__v_raw}function vt(e){const t=e&&e.__v_raw;return t?vt(t):e}function yt(e){return!u(e,"__v_skip")&&Object.isExtensible(e)&&L(e,"__v_skip",!0),e}const wt=e=>y(e)?lt(e):e,bt=e=>y(e)?ht(e):e;function _t(e){return!!e&&!0===e.__v_isRef}function Et(e){return It(e,!1)}function St(e){return It(e,!0)}function It(e,t){return _t(e)?e:new Tt(e,t)}class Tt{constructor(e,t){this.dep=new Ie,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:vt(e),this._value=t?e:wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||mt(e)||pt(e);e=n?e:vt(e),O(e,t)&&(this._rawValue=e,this._value=n?e:wt(e),this.dep.trigger())}}function kt(e){return _t(e)?e.value:e}const Ct={get:(e,t,n)=>"__v_raw"===t?e:kt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return _t(i)&&!_t(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function At(e){return ft(e)?e:new Proxy(e,Ct)}class xt{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return function(e,t){const n=ke.get(e);return n&&n.get(t)}(vt(this._object),this._key)}}function Pt(e,t,n){const r=e[t];return _t(r)?r:new xt(e,t,n)}class Nt{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ie(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ee-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags)&&Z!==this)return ce(this,!0),!0}get value(){const e=this.dep.track();return pe(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}const Ot={},Dt=new WeakMap;let Lt;function Rt(e,n,i=t){const{immediate:s,deep:o,once:a,scheduler:l,augmentJob:u,call:d}=i,f=e=>o?e:mt(e)||!1===o||0===o?Mt(e,1):Mt(e);let p,g,v,y,w=!1,b=!1;if(_t(e)?(g=()=>e.value,w=mt(e)):ft(e)?(g=()=>f(e),w=!0):h(e)?(b=!0,w=e.some((e=>ft(e)||mt(e))),g=()=>e.map((e=>_t(e)?e.value:ft(e)?f(e):m(e)?d?d(e,2):e():void 0))):g=m(e)?n?d?()=>d(e,2):e:()=>{if(v){we();try{v()}finally{be()}}const t=Lt;Lt=p;try{return d?d(e,3,[y]):e(y)}finally{Lt=t}}:r,n&&o){const e=g,t=!0===o?1/0:o;g=()=>Mt(e(),t)}const _=ne(),E=()=>{p.stop(),_&&_.active&&c(_.effects,p)};if(a&&n){const e=n;n=(...t)=>{e(...t),E()}}let S=b?new Array(e.length).fill(Ot):Ot;const I=e=>{if(1&p.flags&&(p.dirty||e))if(n){const e=p.run();if(o||w||(b?e.some(((e,t)=>O(e,S[t]))):O(e,S))){v&&v();const t=Lt;Lt=p;try{const t=[e,S===Ot?void 0:b&&S[0]===Ot?[]:S,y];d?d(n,3,t):n(...t),S=e}finally{Lt=t}}}else p.run()};return u&&u(I),p=new ie(g),p.scheduler=l?()=>l(I,!1):I,y=e=>function(e,t=!1,n=Lt){if(n){let t=Dt.get(n);t||Dt.set(n,t=[]),t.push(e)}}(e,!1,p),v=p.onStop=()=>{const e=Dt.get(p);if(e){if(d)d(e,4);else for(const t of e)t();Dt.delete(p)}},n?s?I(!0):S=p.run():l?l(I.bind(null,!0),!0):p.run(),E.pause=p.pause.bind(p),E.resume=p.resume.bind(p),E.stop=E,E}function Mt(e,t=1/0,n){if(t<=0||!y(e)||e.__v_skip)return e;if((n=n||new Set).has(e))return e;if(n.add(e),t--,_t(e))Mt(e.value,t,n);else if(h(e))for(let r=0;r<e.length;r++)Mt(e[r],t,n);else if(f(e)||d(e))e.forEach((e=>{Mt(e,t,n)}));else if(E(e)){for(const r in e)Mt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Mt(e[r],t,n)}return e}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ft(e,t,n,r){try{return r?e(...r):e()}catch(i){Vt(i,t,n)}}function Ut(e,t,n,r){if(m(e)){const i=Ft(e,t,n,r);return i&&w(i)&&i.catch((e=>{Vt(e,t,n)})),i}if(h(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Ut(e[s],t,n,r));return i}}function Vt(e,n,r,i=!0){n&&n.vnode;const{errorHandler:s,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||t;if(n){let t=n.parent;const i=n.proxy,o=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){const n=t.ec;if(n)for(let t=0;t<n.length;t++)if(!1===n[t](e,i,o))return;t=t.parent}if(s)return we(),Ft(s,null,10,[e,i,o]),void be()}!function(e,t,n,r=!0,i=!1){if(i)throw e}(e,0,0,i,o)}const jt=[];let zt=-1;const Bt=[];let $t=null,qt=0;const Ht=Promise.resolve();let Kt=null;function Gt(e){const t=Kt||Ht;return e?t.then(this?e.bind(this):e):t}function Wt(e){if(!(1&e.flags)){const t=Xt(e),n=jt[jt.length-1];!n||!(2&e.flags)&&t>=Xt(n)?jt.push(e):jt.splice(function(e){let t=zt+1,n=jt.length;for(;t<n;){const r=t+n>>>1,i=jt[r],s=Xt(i);s<e||s===e&&2&i.flags?t=r+1:n=r}return t}(t),0,e),e.flags|=1,Qt()}}function Qt(){Kt||(Kt=Ht.then(Zt))}function Yt(e,t,n=zt+1){for(;n<jt.length;n++){const t=jt[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;jt.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function Jt(e){if(Bt.length){const e=[...new Set(Bt)].sort(((e,t)=>Xt(e)-Xt(t)));if(Bt.length=0,$t)return void $t.push(...e);for($t=e,qt=0;qt<$t.length;qt++){const e=$t[qt];4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}$t=null,qt=0}}const Xt=e=>null==e.id?2&e.flags?-1:1/0:e.id;function Zt(e){try{for(zt=0;zt<jt.length;zt++){const e=jt[zt];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),Ft(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;zt<jt.length;zt++){const e=jt[zt];e&&(e.flags&=-2)}zt=-1,jt.length=0,Jt(),Kt=null,(jt.length||Bt.length)&&Zt()}}let en=null,tn=null;function nn(e){const t=en;return en=e,tn=e&&e.type.__scopeId||null,t}function rn(e,t=en,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&ci(-1);const i=nn(t);let s;try{s=e(...n)}finally{nn(i),r._d&&ci(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function sn(e,n){if(null===en)return e;const r=Ui(en),i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[e,o,a,c=t]=n[s];e&&(m(e)&&(e={mounted:e,updated:e}),e.deep&&Mt(o),i.push({dir:e,instance:r,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function on(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(we(),Ut(c,n,8,[e.el,a,e,t]),be())}}const an=Symbol("_vte"),cn=e=>e.__isTeleport,ln=Symbol("_leaveCb"),un=Symbol("_enterCb");const hn=[Function,Array],dn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:hn,onEnter:hn,onAfterEnter:hn,onEnterCancelled:hn,onBeforeLeave:hn,onLeave:hn,onAfterLeave:hn,onLeaveCancelled:hn,onBeforeAppear:hn,onAppear:hn,onAfterAppear:hn,onAppearCancelled:hn},fn=e=>{const t=e.subTree;return t.component?fn(t.component):t};function pn(e){let t=e[0];if(e.length>1)for(const n of e)if(n.type!==ni){t=n;break}return t}const mn={name:"BaseTransition",props:dn,setup(e,{slots:t}){const n=Ai(),r=function(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ln((()=>{e.isMounted=!0})),Fn((()=>{e.isUnmounting=!0})),e}();return()=>{const i=t.default&&_n(t.default(),!0);if(!i||!i.length)return;const s=pn(i),o=vt(e),{mode:a}=o;if(r.isLeaving)return yn(s);const c=wn(s);if(!c)return yn(s);let l=vn(c,o,r,n,(e=>l=e));c.type!==ni&&bn(c,l);let u=n.subTree&&wn(n.subTree);if(u&&u.type!==ni&&!fi(c,u)&&fn(n).type!==ni){let e=vn(u,o,r,n);if(bn(u,e),"out-in"===a&&c.type!==ni)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,8&n.job.flags||n.update(),delete e.afterLeave,u=void 0},yn(s);"in-out"===a&&c.type!==ni?e.delayLeave=(e,t,n)=>{gn(r,u)[String(u.key)]=u,e[ln]=()=>{t(),e[ln]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function gn(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function vn(e,t,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:w,onAppearCancelled:b}=t,_=String(e.key),E=gn(n,e),S=(e,t)=>{e&&Ut(e,r,9,t)},I=(e,t)=>{const n=t[1];S(e,t),h(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},T={mode:o,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=v||c}t[ln]&&t[ln](!0);const i=E[_];i&&fi(e,i)&&i.el[ln]&&i.el[ln](),S(r,[t])},enter(e){let t=l,r=u,i=d;if(!n.isMounted){if(!s)return;t=y||l,r=w||u,i=b||d}let o=!1;const a=e[un]=t=>{o||(o=!0,S(t?i:r,[e]),T.delayedLeave&&T.delayedLeave(),e[un]=void 0)};t?I(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[un]&&t[un](!0),n.isUnmounting)return r();S(f,[t]);let s=!1;const o=t[ln]=n=>{s||(s=!0,r(),S(n?g:m,[t]),t[ln]=void 0,E[i]===e&&delete E[i])};E[i]=e,p?I(p,[t,o]):o()},clone(e){const s=vn(e,t,n,r,i);return i&&i(s),s}};return T}function yn(e){if(kn(e))return(e=yi(e)).children=null,e}function wn(e){if(!kn(e))return cn(e.type)&&e.children?pn(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&m(n.default))return n.default()}}function bn(e,t){6&e.shapeFlag&&e.component?(e.transition=t,bn(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _n(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===ei?(128&o.patchFlag&&i++,r=r.concat(_n(o.children,t,a))):(t||o.type!==ni)&&r.push(null!=a?yi(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function En(e,t){return m(e)?(()=>a({name:e.name},t,{setup:e}))():e}function Sn(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function In(e,n,r,i,s=!1){if(h(e))return void e.forEach(((e,t)=>In(e,n&&(h(n)?n[t]:n),r,i,s)));if(Tn(i)&&!s)return void(512&i.shapeFlag&&i.type.__asyncResolved&&i.component.subTree.component&&In(e,n,r,i.component.subTree));const o=4&i.shapeFlag?Ui(i.component):i.el,a=s?null:o,{i:l,r:d}=e,f=n&&n.r,p=l.refs===t?l.refs={}:l.refs,v=l.setupState,y=vt(v),w=v===t?()=>!1:e=>u(y,e);if(null!=f&&f!==d&&(g(f)?(p[f]=null,w(f)&&(v[f]=null)):_t(f)&&(f.value=null)),m(d))Ft(d,l,12,[a,p]);else{const t=g(d),n=_t(d);if(t||n){const i=()=>{if(e.f){const n=t?w(d)?v[d]:p[d]:d.value;s?h(n)&&c(n,o):h(n)?n.includes(o)||n.push(o):t?(p[d]=[o],w(d)&&(v[d]=p[d])):(d.value=[o],e.k&&(p[e.k]=d.value))}else t?(p[d]=a,w(d)&&(v[d]=a)):n&&(d.value=a,e.k&&(p[e.k]=a))};a?(i.id=-1,Or(i,r)):i()}}}F().requestIdleCallback,F().cancelIdleCallback;const Tn=e=>!!e.type.__asyncLoader,kn=e=>e.type.__isKeepAlive;function Cn(e,t){xn(e,"a",t)}function An(e,t){xn(e,"da",t)}function xn(e,t,n=Ci){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(Nn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)kn(e.parent.vnode)&&Pn(r,t,n,e),e=e.parent}}function Pn(e,t,n,r){const i=Nn(t,e,r,!0);Un((()=>{c(r[t],i)}),n)}function Nn(e,t,n=Ci,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{we();const i=Ni(n),s=Ut(t,n,e,r);return i(),be(),s});return r?i.unshift(s):i.push(s),s}}const On=e=>(t,n=Ci)=>{Li&&"sp"!==e||Nn(e,((...e)=>t(...e)),n)},Dn=On("bm"),Ln=On("m"),Rn=On("bu"),Mn=On("u"),Fn=On("bum"),Un=On("um"),Vn=On("sp"),jn=On("rtg"),zn=On("rtc");function Bn(e,t=Ci){Nn("ec",e,t)}function $n(e,t){return function(e,t,n=!0,r=!1){const i=en||Ci;if(i){const n=i.type;{const e=Vi(n,!1);if(e&&(e===t||e===C(t)||e===P(C(t))))return n}const s=Hn(i[e]||n[e],t)||Hn(i.appContext[e],t);return!s&&r?n:s}}("components",e,!0,t)||e}const qn=Symbol.for("v-ndc");function Hn(e,t){return e&&(e[t]||e[C(t)]||e[P(C(t))])}function Kn(e,t,n,r){let i;const s=n,o=h(e);if(o||g(e)){let n=!1;o&&ft(e)&&(n=!mt(e),e=De(e)),i=new Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=t(n?wt(e[r]):e[r],r,void 0,s)}else if("number"==typeof e){i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s)}else if(y(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s)));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s)}}else i=[];return i}function Gn(e,t,n={},r,i){if(en.ce||en.parent&&Tn(en.parent)&&en.parent.ce)return"default"!==t&&(n.name=t),oi(),hi(ei,null,[vi("slot",n,r&&r())],64);let s=e[t];s&&s._c&&(s._d=!1),oi();const o=s&&Wn(s(n)),a=n.key||o&&o.key,c=hi(ei,{key:(a&&!v(a)?a:`_${t}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&1===e._?64:-2);return s&&s._c&&(s._d=!0),c}function Wn(e){return e.some((e=>!di(e)||e.type!==ni&&!(e.type===ei&&!Wn(e.children))))?e:null}const Qn=e=>e?Di(e)?Ui(e):Qn(e.parent):null,Yn=a(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qn(e.parent),$root:e=>Qn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ir(e),$forceUpdate:e=>e.f||(e.f=()=>{Wt(e.update)}),$nextTick:e=>e.n||(e.n=Gt.bind(e.proxy)),$watch:e=>$r.bind(e)}),Jn=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Xn={get({_:e},n){if("__v_skip"===n)return!0;const{ctx:r,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:l}=e;let h;if("$"!==n[0]){const c=a[n];if(void 0!==c)switch(c){case 1:return i[n];case 2:return s[n];case 4:return r[n];case 3:return o[n]}else{if(Jn(i,n))return a[n]=1,i[n];if(s!==t&&u(s,n))return a[n]=2,s[n];if((h=e.propsOptions[0])&&u(h,n))return a[n]=3,o[n];if(r!==t&&u(r,n))return a[n]=4,r[n];er&&(a[n]=0)}}const d=Yn[n];let f,p;return d?("$attrs"===n&&Pe(e.attrs,0,""),d(e)):(f=c.__cssModules)&&(f=f[n])?f:r!==t&&u(r,n)?(a[n]=4,r[n]):(p=l.config.globalProperties,u(p,n)?p[n]:void 0)},set({_:e},n,r){const{data:i,setupState:s,ctx:o}=e;return Jn(s,n)?(s[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):!u(e.props,n)&&(("$"!==n[0]||!(n.slice(1)in e))&&(o[n]=r,!0))},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!r[a]||e!==t&&u(e,a)||Jn(n,a)||(c=o[0])&&u(c,a)||u(i,a)||u(Yn,a)||u(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:u(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Zn(e){return h(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let er=!0;function tr(e){const t=ir(e),n=e.proxy,i=e.ctx;er=!1,t.beforeCreate&&nr(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:l,inject:u,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:v,activated:w,deactivated:b,beforeDestroy:_,beforeUnmount:E,destroyed:S,unmounted:I,render:T,renderTracked:k,renderTriggered:C,errorCaptured:A,serverPrefetch:x,expose:P,inheritAttrs:N,components:O,directives:D,filters:L}=t;if(u&&function(e,t){h(e)&&(e=cr(e));for(const n in e){const r=e[n];let i;i=y(r)?"default"in r?vr(r.from||n,r.default,!0):vr(r.from||n):vr(r),_t(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}(u,i,null),a)for(const r in a){const e=a[r];m(e)&&(i[r]=e.bind(n))}if(s){const t=s.call(n,n);y(t)&&(e.data=lt(t))}if(er=!0,o)for(const h in o){const e=o[h],t=m(e)?e.bind(n,n):m(e.get)?e.get.bind(n,n):r,s=!m(e)&&m(e.set)?e.set.bind(n):r,a=ji({get:t,set:s});Object.defineProperty(i,h,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)rr(c[r],i,n,r);if(l){const e=m(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{gr(t,e[t])}))}function R(e,t){h(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&nr(d,e,"c"),R(Dn,f),R(Ln,p),R(Rn,g),R(Mn,v),R(Cn,w),R(An,b),R(Bn,A),R(zn,k),R(jn,C),R(Fn,E),R(Un,I),R(Vn,x),h(P))if(P.length){const t=e.exposed||(e.exposed={});P.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===r&&(e.render=T),null!=N&&(e.inheritAttrs=N),O&&(e.components=O),D&&(e.directives=D),x&&Sn(e)}function nr(e,t,n){Ut(h(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function rr(e,t,n,r){let i=r.includes(".")?qr(n,r):()=>n[r];if(g(e)){const n=t[e];m(n)&&zr(i,n)}else if(m(e))zr(i,e.bind(n));else if(y(e))if(h(e))e.forEach((e=>rr(e,t,n,r)));else{const r=m(e.handler)?e.handler.bind(n):t[e.handler];m(r)&&zr(i,r,e)}}function ir(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>sr(c,e,o,!0))),sr(c,t,o)):c=t,y(t)&&s.set(t,c),c}function sr(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&sr(e,s,n,!0),i&&i.forEach((t=>sr(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=or[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const or={data:ar,props:hr,emits:hr,methods:ur,computed:ur,beforeCreate:lr,created:lr,beforeMount:lr,mounted:lr,beforeUpdate:lr,updated:lr,beforeDestroy:lr,beforeUnmount:lr,destroyed:lr,unmounted:lr,activated:lr,deactivated:lr,errorCaptured:lr,serverPrefetch:lr,components:ur,directives:ur,watch:function(e,t){if(!e)return t;if(!t)return e;const n=a(Object.create(null),e);for(const r in t)n[r]=lr(e[r],t[r]);return n},provide:ar,inject:function(e,t){return ur(cr(e),cr(t))}};function ar(e,t){return t?e?function(){return a(m(e)?e.call(this,this):e,m(t)?t.call(this,this):t)}:t:e}function cr(e){if(h(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function lr(e,t){return e?[...new Set([].concat(e,t))]:t}function ur(e,t){return e?a(Object.create(null),e,t):t}function hr(e,t){return e?h(e)&&h(t)?[...new Set([...e,...t])]:a(Object.create(null),Zn(e),Zn(null!=t?t:{})):t}function dr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fr=0;function pr(e,t){return function(t,n=null){m(t)||(t=a({},t)),null==n||y(n)||(n=null);const r=dr(),i=new WeakSet,s=[];let o=!1;const c=r.app={_uid:fr++,_component:t,_props:n,_container:null,_context:r,_instance:null,version:Bi,get config(){return r.config},set config(e){},use:(e,...t)=>(i.has(e)||(e&&m(e.install)?(i.add(e),e.install(c,...t)):m(e)&&(i.add(e),e(c,...t))),c),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),c),component:(e,t)=>t?(r.components[e]=t,c):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,c):r.directives[e],mount(i,s,a){if(!o){const s=c._ceVNode||vi(t,n);return s.appContext=r,!0===a?a="svg":!1===a&&(a=void 0),e(s,i,a),o=!0,c._container=i,i.__vue_app__=c,Ui(s.component)}},onUnmount(e){s.push(e)},unmount(){o&&(Ut(s,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide:(e,t)=>(r.provides[e]=t,c),runWithContext(e){const t=mr;mr=c;try{return e()}finally{mr=t}}};return c}}let mr=null;function gr(e,t){if(Ci){let n=Ci.provides;const r=Ci.parent&&Ci.parent.provides;r===n&&(n=Ci.provides=Object.create(r)),n[e]=t}else;}function vr(e,t,n=!1){const r=Ci||en;if(r||mr){const i=mr?mr._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&m(t)?t.call(r&&r.proxy):t}}const yr={},wr=()=>Object.create(yr),br=e=>Object.getPrototypeOf(e)===yr;function _r(e,n,r,i){const[s,o]=e.propsOptions;let a,c=!1;if(n)for(let t in n){if(I(t))continue;const l=n[t];let h;s&&u(s,h=C(t))?o&&o.includes(h)?(a||(a={}))[h]=l:r[h]=l:Wr(e.emitsOptions,t)||t in i&&l===i[t]||(i[t]=l,c=!0)}if(o){const n=vt(r),i=a||t;for(let t=0;t<o.length;t++){const a=o[t];r[a]=Er(s,n,a,i[a],e,!u(i,a))}}return c}function Er(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=u(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&!o.skipFactory&&m(e)){const{propsDefaults:s}=i;if(n in s)r=s[n];else{const o=Ni(i);r=s[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==x(n)||(r=!0))}return r}const Sr=new WeakMap;function Ir(e,r,i=!1){const s=i?Sr:r.propsCache,o=s.get(e);if(o)return o;const c=e.props,l={},d=[];let f=!1;if(!m(e)){const t=e=>{f=!0;const[t,n]=Ir(e,r,!0);a(l,t),n&&d.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!f)return y(e)&&s.set(e,n),n;if(h(c))for(let n=0;n<c.length;n++){const e=C(c[n]);Tr(e)&&(l[e]=t)}else if(c)for(const t in c){const e=C(t);if(Tr(e)){const n=c[t],r=l[e]=h(n)||m(n)?{type:n}:a({},n),i=r.type;let s=!1,o=!0;if(h(i))for(let e=0;e<i.length;++e){const t=i[e],n=m(t)&&t.name;if("Boolean"===n){s=!0;break}"String"===n&&(o=!1)}else s=m(i)&&"Boolean"===i.name;r[0]=s,r[1]=o,(s||u(r,"default"))&&d.push(e)}}const p=[l,d];return y(e)&&s.set(e,p),p}function Tr(e){return"$"!==e[0]&&!I(e)}const kr=e=>"_"===e[0]||"$stable"===e,Cr=e=>h(e)?e.map(_i):[_i(e)],Ar=(e,t,n)=>{if(t._n)return t;const r=rn(((...e)=>Cr(t(...e))),n);return r._c=!1,r},xr=(e,t,n)=>{const r=e._ctx;for(const i in e){if(kr(i))continue;const n=e[i];if(m(n))t[i]=Ar(0,n,r);else if(null!=n){const e=Cr(n);t[i]=()=>e}}},Pr=(e,t)=>{const n=Cr(t);e.slots.default=()=>n},Nr=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},Or=function(e,t){t&&t.pendingBranch?h(e)?t.effects.push(...e):t.effects.push(e):(h(n=e)?Bt.push(...n):$t&&-1===n.id?$t.splice(qt+1,0,n):1&n.flags||(Bt.push(n),n.flags|=1),Qt());var n};function Dr(e){return function(e){F().__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=r,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!fi(e,t)&&(r=X(e),G(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case ti:y(e,t,n,r);break;case ni:b(e,t,n,r);break;case ri:null==e&&_(t,n,r,o);break;case ei:M(e,t,n,r,i,s,o,a,c);break;default:1&h?T(e,t,n,r,i,s,o,a,c):6&h?U(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,ne)}null!=u&&i&&In(u,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let s;for(;e&&e!==t;)s=p(e),i(e,n,r),e=s;i(t,n,r)},S=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=p(e),s(e),e=n;s(t)},T=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?k(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},k=(e,t,n,r,s,c,l,u)=>{let h,f;const{props:p,shapeFlag:m,transition:g,dirs:v}=e;if(h=e.el=a(e.type,c,p&&p.is,p),8&m?d(h,e.children):16&m&&P(e.children,h,null,r,s,Lr(e,c),l,u),v&&on(e,null,r,"created"),A(h,e,e.scopeId,l,r),p){for(const e in p)"value"===e||I(e)||o(h,e,null,p[e],c,r);"value"in p&&o(h,"value",null,p.value,c),(f=p.onVnodeBeforeMount)&&Ii(f,r,e)}v&&on(e,null,r,"beforeMount");const y=function(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}(s,g);y&&g.beforeEnter(h),i(h,t,n),((f=p&&p.onVnodeMounted)||y||v)&&Or((()=>{f&&Ii(f,r,e),y&&g.enter(h),v&&on(e,null,r,"mounted")}),s)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n||Zr(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},P=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Ei(e[l]):_i(e[l]);v(null,c,t,n,r,i,s,o,a)}},N=(e,n,r,i,s,a,c)=>{const l=n.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=n;u|=16&e.patchFlag;const p=e.props||t,m=n.props||t;let g;if(r&&Rr(r,!1),(g=m.onVnodeBeforeUpdate)&&Ii(g,r,n,e),f&&on(n,e,r,"beforeUpdate"),r&&Rr(r,!0),(p.innerHTML&&null==m.innerHTML||p.textContent&&null==m.textContent)&&d(l,""),h?O(e.dynamicChildren,h,l,r,i,Lr(n,s),a):c||$(e,n,l,null,r,i,Lr(n,s),a,!1),u>0){if(16&u)R(l,p,m,r,s);else if(2&u&&p.class!==m.class&&o(l,"class",null,m.class,s),4&u&&o(l,"style",p.style,m.style,s),8&u){const e=n.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t],i=p[n],a=m[n];a===i&&"value"!==n||o(l,n,i,a,s,r)}}1&u&&e.children!==n.children&&d(l,n.children)}else c||null!=h||R(l,p,m,r,s);((g=m.onVnodeUpdated)||f)&&Or((()=>{g&&Ii(g,r,n,e),f&&on(n,e,r,"updated")}),i)},O=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===ei||!fi(c,l)||70&c.shapeFlag)?f(c.el):n;v(c,l,u,null,r,i,s,o,!0)}},R=(e,n,r,i,s)=>{if(n!==r){if(n!==t)for(const t in n)I(t)||t in r||o(e,t,n[t],null,s,i);for(const t in r){if(I(t))continue;const a=r[t],c=n[t];a!==c&&"value"!==t&&o(e,t,c,a,s,i)}"value"in r&&o(e,"value",n.value,r.value,s)}},M=(e,t,n,r,s,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(i(h,n,r),i(d,n,r),P(t.children||[],n,d,s,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,s,o,a,l),(null!=t.key||s&&t===s.subTree)&&Mr(e,t,!0)):$(e,t,n,d,s,o,a,l,u)},U=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):V(t,n,r,i,s,o,c):j(e,t,c)},V=(e,n,r,i,s,o,a)=>{const c=e.component=function(e,n,r){const i=e.type,s=(n?n.appContext:e.appContext)||Ti,o={uid:ki++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ee(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ir(i,s),emitsOptions:Gr(i,s),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};o.ctx={_:o},o.root=n?n.root:o,o.emit=Kr.bind(null,o),e.ce&&e.ce(o);return o}(e,i,s);if(kn(e)&&(c.ctx.renderer=ne),function(e,t=!1,n=!1){t&&Pi(t);const{props:r,children:i}=e.vnode,s=Di(e);(function(e,t,n,r=!1){const i={},s=wr();e.propsDefaults=Object.create(null),_r(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:ut(i):e.type.props?e.props=i:e.props=s,e.attrs=s})(e,r,s,t),((e,t,n)=>{const r=e.slots=wr();if(32&e.vnode.shapeFlag){const e=t._;e?(Nr(r,t,n),n&&L(r,"_",e,!0)):xr(t,r)}else t&&Pr(e,t)})(e,i,n);const o=s?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Xn);const{setup:r}=n;if(r){we();const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Fi),slots:e.slots,emit:e.emit,expose:t}}(e):null,i=Ni(e),s=Ft(r,e,0,[e.props,n]),o=w(s);if(be(),i(),!o&&!e.sp||Tn(e)||Sn(e),o){if(s.then(Oi,Oi),t)return s.then((t=>{Ri(e,t)})).catch((t=>{Vt(t,e,0)}));e.asyncDep=s}else Ri(e,s)}else Mi(e)}(e,t):void 0;t&&Pi(!1)}(c,!1,a),c.asyncDep){if(s&&s.registerDep(c,z,a),!e.el){const e=c.subTree=vi(ni);b(null,e,n,r)}}else z(c,e,n,r,s,o,a)},j=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Xr(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Xr(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Wr(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},z=(e,t,n,r,i,s,o)=>{const a=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:c,vnode:l}=e;{const n=Fr(e);if(n)return t&&(t.el=l.el,B(e,t,o)),void n.asyncDep.then((()=>{e.isUnmounted||a()}))}let u,h=t;Rr(e,!1),t?(t.el=l.el,B(e,t,o)):t=l,n&&D(n),(u=t.props&&t.props.onVnodeBeforeUpdate)&&Ii(u,c,t,l),Rr(e,!0);const d=Qr(e),p=e.subTree;e.subTree=d,v(p,d,f(p.el),X(p),e,i,s),t.el=d.el,null===h&&function({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}(e,d.el),r&&Or(r,i),(u=t.props&&t.props.onVnodeUpdated)&&Or((()=>Ii(u,c,t,l)),i)}else{let o;const{el:a,props:c}=t,{bm:l,m:u,parent:h,root:d,type:f}=e,p=Tn(t);Rr(e,!1),l&&D(l),!p&&(o=c&&c.onVnodeBeforeMount)&&Ii(o,h,t),Rr(e,!0);{d.ce&&d.ce._injectChildStyle(f);const o=e.subTree=Qr(e);v(null,o,n,r,e,i,s),t.el=o.el}if(u&&Or(u,i),!p&&(o=c&&c.onVnodeMounted)){const e=t;Or((()=>Ii(o,h,e)),i)}(256&t.shapeFlag||h&&Tn(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&Or(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();const c=e.effect=new ie(a);e.scope.off();const l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Wt(u),Rr(e,!0),l()},B=(e,n,r)=>{n.component=e;const i=e.vnode.props;e.vnode=n,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=vt(i),[c]=e.propsOptions;let l=!1;if(!(r||o>0)||16&o){let r;_r(e,t,i,s)&&(l=!0);for(const s in a)t&&(u(t,s)||(r=x(s))!==s&&u(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(i[s]=Er(c,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&u(t,e)||(delete s[e],l=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Wr(e.emitsOptions,o))continue;const h=t[o];if(c)if(u(s,o))h!==s[o]&&(s[o]=h,l=!0);else{const t=C(o);i[t]=Er(c,a,t,h,e,!1)}else h!==s[o]&&(s[o]=h,l=!0)}}l&&Ne(e.attrs,"set","")}(e,n.props,i,r),((e,n,r)=>{const{vnode:i,slots:s}=e;let o=!0,a=t;if(32&i.shapeFlag){const e=n._;e?r&&1===e?o=!1:Nr(s,n,r):(o=!n.$stable,xr(n,s)),a=n}else n&&(Pr(e,n),a={default:1});if(o)for(const t in s)kr(t)||null!=a[t]||delete s[t]})(e,n.children,r),we(),Yt(e),be()},$=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(l,h,n,r,i,s,o,a,c);if(256&f)return void q(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&J(l,i,s),h!==l&&d(n,h)):16&u?16&p?H(l,h,n,r,i,s,o,a,c):J(l,i,s,!0):(8&u&&d(n,""),16&p&&P(h,n,r,i,s,o,a,c))},q=(e,t,r,i,s,o,a,c,l)=>{t=t||n;const u=(e=e||n).length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const n=t[f]=l?Ei(t[f]):_i(t[f]);v(e[f],n,r,null,s,o,a,c,l)}u>h?J(e,s,o,!0,!1,d):P(t,r,i,s,o,a,c,l,d)},H=(e,t,r,i,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;for(;u<=d&&u<=f;){const n=e[u],i=t[u]=l?Ei(t[u]):_i(t[u]);if(!fi(n,i))break;v(n,i,r,null,s,o,a,c,l),u++}for(;u<=d&&u<=f;){const n=e[d],i=t[f]=l?Ei(t[f]):_i(t[f]);if(!fi(n,i))break;v(n,i,r,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,n=e<h?t[e].el:i;for(;u<=f;)v(null,t[u]=l?Ei(t[u]):_i(t[u]),r,n,s,o,a,c,l),u++}}else if(u>f)for(;u<=d;)G(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?Ei(t[u]):_i(t[u]);null!=e.key&&g.set(e.key,u)}let y,w=0;const b=f-m+1;let _=!1,E=0;const S=new Array(b);for(u=0;u<b;u++)S[u]=0;for(u=p;u<=d;u++){const n=e[u];if(w>=b){G(n,s,o,!0);continue}let i;if(null!=n.key)i=g.get(n.key);else for(y=m;y<=f;y++)if(0===S[y-m]&&fi(n,t[y])){i=y;break}void 0===i?G(n,s,o,!0):(S[i-m]=u+1,i>=E?E=i:_=!0,v(n,t[i],r,null,s,o,a,c,l),w++)}const I=_?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(S):n;for(y=I.length-1,u=b-1;u>=0;u--){const e=m+u,n=t[e],d=e+1<h?t[e+1].el:i;0===S[u]?v(null,n,r,d,s,o,a,c,l):_&&(y<0||u!==I[y]?K(n,r,d,2):y--)}}},K=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void K(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ne);if(a===ei){i(o,t,n);for(let e=0;e<l.length;e++)K(l[e],t,n,r);return void i(e.anchor,t,n)}if(a===ri)return void E(e,t,n);if(2!==r&&1&u&&c)if(0===r)c.beforeEnter(o),i(o,t,n),Or((()=>c.enter(o)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),l=()=>{e(o,(()=>{a(),s&&s()}))};r?r(o,a,l):l()}else i(o,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d,cacheIndex:f}=e;if(-2===h&&(i=!1),null!=a&&In(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,m=!Tn(e);let g;if(m&&(g=o&&o.onVnodeBeforeUnmount)&&Ii(g,t,e),6&u)Y(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&on(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,ne,r):l&&!l.hasOnce&&(s!==ei||h>0&&64&h)?J(l,t,n,!1,!0):(s===ei&&384&h||!i&&16&u)&&J(c,t,n),r&&W(e)}(m&&(g=o&&o.onVnodeUnmounted)||p)&&Or((()=>{g&&Ii(g,t,e),p&&on(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===ei)return void Q(n,r);if(t===ri)return void S(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},Q=(e,t)=>{let n;for(;e!==t;)n=p(e),s(e),e=n;s(t)},Y=(e,t,n)=>{const{bum:r,scope:i,job:s,subTree:o,um:a,m:c,a:l}=e;Ur(c),Ur(l),r&&D(r),i.stop(),s&&(s.flags|=8,G(o,e,t,n)),a&&Or(a,t),Or((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,r,i)},X=e=>{if(6&e.shapeFlag)return X(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[an];return n?p(n):t};let Z=!1;const te=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,Z||(Z=!0,Yt(),Jt(),Z=!1)},ne={p:v,um:G,m:K,r:W,mt:V,mc:P,pc:$,pbc:O,n:X,o:e};let re;return{render:te,hydrate:re,createApp:pr(te)}}(e)}function Lr({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Rr({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Mr(e,t,n=!1){const r=e.children,i=t.children;if(h(r)&&h(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=Ei(i[s]),t.el=e.el),n||-2===t.patchFlag||Mr(e,t)),t.type===ti&&(t.el=e.el)}}function Fr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fr(t)}function Ur(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Vr=Symbol.for("v-scx"),jr=()=>vr(Vr);function zr(e,t,n){return Br(e,t,n)}function Br(e,n,i=t){const{immediate:s,deep:o,flush:c,once:l}=i,u=a({},i),h=n&&s||!n&&"post"!==c;let d;if(Li)if("sync"===c){const e=jr();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}const f=Ci;u.call=(e,t,n)=>Ut(e,f,t,n);let p=!1;"post"===c?u.scheduler=e=>{Or(e,f&&f.suspense)}:"sync"!==c&&(p=!0,u.scheduler=(e,t)=>{t?e():Wt(e)}),u.augmentJob=e=>{n&&(e.flags|=4),p&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const m=Rt(e,n,u);return Li&&(d?d.push(m):h&&m()),m}function $r(e,t,n){const r=this.proxy,i=g(e)?e.includes(".")?qr(r,e):()=>r[e]:e.bind(r,r);let s;m(t)?s=t:(s=t.handler,n=t);const o=Ni(this),a=Br(i,s.bind(r),n);return o(),a}function qr(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const Hr=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${C(t)}Modifiers`]||e[`${x(t)}Modifiers`];function Kr(e,n,...r){if(e.isUnmounted)return;const i=e.vnode.props||t;let s=r;const o=n.startsWith("update:"),a=o&&Hr(i,n.slice(7));let c;a&&(a.trim&&(s=r.map((e=>g(e)?e.trim():e))),a.number&&(s=r.map(R)));let l=i[c=N(n)]||i[c=N(C(n))];!l&&o&&(l=i[c=N(x(n))]),l&&Ut(l,e,6,s);const u=i[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Ut(u,e,6,s)}}function Gr(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},c=!1;if(!m(e)){const r=e=>{const n=Gr(e,t,!0);n&&(c=!0,a(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?(h(s)?s.forEach((e=>o[e]=null)):a(o,s),y(e)&&r.set(e,o),o):(y(e)&&r.set(e,null),null)}function Wr(e,t){return!(!e||!s(t))&&(t=t.slice(2).replace(/Once$/,""),u(e,t[0].toLowerCase()+t.slice(1))||u(e,x(t))||u(e,t))}function Qr(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:c,emit:l,render:u,renderCache:h,props:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e,v=nn(e);let y,w;try{if(4&n.shapeFlag){const e=i||r,t=e;y=_i(u.call(t,e,h,d,p,f,m)),w=c}else{const e=t;0,y=_i(e.length>1?e(d,{attrs:c,slots:a,emit:l}):e(d,null)),w=t.props?c:Yr(c)}}catch(_){ii.length=0,Vt(_,e,1),y=vi(ni)}let b=y;if(w&&!1!==g){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(s&&e.some(o)&&(w=Jr(w,s)),b=yi(b,w,!1,!0))}return n.dirs&&(b=yi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&bn(b,n.transition),y=b,nn(v),y}const Yr=e=>{let t;for(const n in e)("class"===n||"style"===n||s(n))&&((t||(t={}))[n]=e[n]);return t},Jr=(e,t)=>{const n={};for(const r in e)o(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Xr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Wr(n,s))return!0}return!1}const Zr=e=>e.__isSuspense;const ei=Symbol.for("v-fgt"),ti=Symbol.for("v-txt"),ni=Symbol.for("v-cmt"),ri=Symbol.for("v-stc"),ii=[];let si=null;function oi(e=!1){ii.push(si=e?null:[])}let ai=1;function ci(e,t=!1){ai+=e,e<0&&si&&t&&(si.hasOnce=!0)}function li(e){return e.dynamicChildren=ai>0?si||n:null,ii.pop(),si=ii[ii.length-1]||null,ai>0&&si&&si.push(e),e}function ui(e,t,n,r,i,s){return li(gi(e,t,n,r,i,s,!0))}function hi(e,t,n,r,i){return li(vi(e,t,n,r,i,!0))}function di(e){return!!e&&!0===e.__v_isVNode}function fi(e,t){return e.type===t.type&&e.key===t.key}const pi=({key:e})=>null!=e?e:null,mi=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?g(e)||_t(e)||m(e)?{i:en,r:e,k:t,f:!!n}:e:null);function gi(e,t=null,n=null,r=0,i=null,s=(e===ei?0:1),o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pi(t),ref:t&&mi(t),scopeId:tn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:en};return a?(Si(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),ai>0&&!o&&si&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&si.push(c),c}const vi=function(e,t=null,n=null,r=0,i=null,s=!1){e&&e!==qn||(e=ni);if(di(e)){const r=yi(e,t,!0);return n&&Si(r,n),ai>0&&!s&&si&&(6&r.shapeFlag?si[si.indexOf(e)]=r:si.push(r)),r.patchFlag=-2,r}o=e,m(o)&&"__vccOpts"in o&&(e=e.__vccOpts);var o;if(t){t=function(e){return e?gt(e)||br(e)?a({},e):e:null}(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=$(e)),y(n)&&(gt(n)&&!h(n)&&(n=a({},n)),t.style=U(n))}const c=g(e)?1:Zr(e)?128:cn(e)?64:y(e)?4:m(e)?2:0;return gi(e,t,n,r,i,c,s,!0)};function yi(e,t,n=!1,r=!1){const{props:i,ref:o,patchFlag:a,children:c,transition:l}=e,u=t?function(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=$([t.class,r.class]));else if("style"===e)t.style=U([t.style,r.style]);else if(s(e)){const n=t[e],i=r[e];!i||n===i||h(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}(i||{},t):i,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&pi(u),ref:t&&t.ref?n&&o?h(o)?o.concat(mi(t)):[o,mi(t)]:mi(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ei?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yi(e.ssContent),ssFallback:e.ssFallback&&yi(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&bn(d,l.clone(d)),d}function wi(e=" ",t=0){return vi(ti,null,e,t)}function bi(e="",t=!1){return t?(oi(),hi(ni,null,e)):vi(ni,null,e)}function _i(e){return null==e||"boolean"==typeof e?vi(ni):h(e)?vi(ei,null,e.slice()):di(e)?Ei(e):vi(ti,null,String(e))}function Ei(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:yi(e)}function Si(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(h(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Si(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||br(t)?3===r&&en&&(1===en.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=en}}else m(t)?(t={default:t,_ctx:en},n=32):(t=String(t),64&r?(n=16,t=[wi(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ii(e,t,n,r=null){Ut(e,t,7,[n,r])}const Ti=dr();let ki=0;let Ci=null;const Ai=()=>Ci||en;let xi,Pi;{const e=F(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};xi=t("__VUE_INSTANCE_SETTERS__",(e=>Ci=e)),Pi=t("__VUE_SSR_SETTERS__",(e=>Li=e))}const Ni=e=>{const t=Ci;return xi(e),e.scope.on(),()=>{e.scope.off(),xi(t)}},Oi=()=>{Ci&&Ci.scope.off(),xi(null)};function Di(e){return 4&e.vnode.shapeFlag}let Li=!1;function Ri(e,t,n){m(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:y(t)&&(e.setupState=At(t)),Mi(e)}function Mi(e,t,n){const i=e.type;e.render||(e.render=i.render||r);{const t=Ni(e);we();try{tr(e)}finally{be(),t()}}}const Fi={get:(e,t)=>(Pe(e,0,""),e[t])};function Ui(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(At(yt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Yn?Yn[n](e):void 0,has:(e,t)=>t in e||t in Yn})):e.proxy}function Vi(e,t=!0){return m(e)?e.displayName||e.name:e.name||t&&e.__name}const ji=(e,t)=>{const n=function(e,t,n=!1){let r,i;return m(e)?r=e:(r=e.get,i=e.set),new Nt(r,i,n)}(e,0,Li);return n};function zi(e,t,n){const r=arguments.length;return 2===r?y(t)&&!h(t)?di(t)?vi(e,null,[t]):vi(e,t):vi(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&di(n)&&(n=[n]),vi(e,t,n))}const Bi="3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $i;const qi="undefined"!=typeof window&&window.trustedTypes;if(qi)try{$i=qi.createPolicy("vue",{createHTML:e=>e})}catch(dx){}const Hi=$i?e=>$i.createHTML(e):e=>e,Ki="undefined"!=typeof document?document:null,Gi=Ki&&Ki.createElement("template"),Wi={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?Ki.createElementNS("http://www.w3.org/2000/svg",e):"mathml"===t?Ki.createElementNS("http://www.w3.org/1998/Math/MathML",e):n?Ki.createElement(e,{is:n}):Ki.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Ki.createTextNode(e),createComment:e=>Ki.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ki.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==s&&(i=i.nextSibling););else{Gi.innerHTML=Hi("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=Gi.content;if("svg"===r||"mathml"===r){const e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Qi="transition",Yi="animation",Ji=Symbol("_vtc"),Xi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zi=a({},dn,Xi),es=(e=>(e.displayName="Transition",e.props=Zi,e))(((e,{slots:t})=>zi(mn,function(e){const t={};for(const a in e)a in Xi||(t[a]=e[a]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=function(e){if(null==e)return null;if(y(e))return[rs(e.enter),rs(e.leave)];{const t=rs(e);return[t,t]}}(i),g=m&&m[0],v=m&&m[1],{onBeforeEnter:w,onEnter:b,onEnterCancelled:_,onLeave:E,onLeaveCancelled:S,onBeforeAppear:I=w,onAppear:T=b,onAppearCancelled:k=_}=t,C=(e,t,n,r)=>{e._enterCancelled=r,ss(e,t?h:c),ss(e,t?u:o),n&&n()},A=(e,t)=>{e._isLeaving=!1,ss(e,d),ss(e,p),ss(e,f),t&&t()},x=e=>(t,n)=>{const i=e?T:b,o=()=>C(t,e,n);ts(i,[t,o]),os((()=>{ss(t,e?l:s),is(t,e?h:c),ns(i)||cs(t,r,g,o)}))};return a(t,{onBeforeEnter(e){ts(w,[e]),is(e,s),is(e,o)},onBeforeAppear(e){ts(I,[e]),is(e,l),is(e,u)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>A(e,t);is(e,d),e._enterCancelled?(is(e,f),hs()):(hs(),is(e,f)),os((()=>{e._isLeaving&&(ss(e,d),is(e,p),ns(E)||cs(e,r,v,n))})),ts(E,[e,n])},onEnterCancelled(e){C(e,!1,void 0,!0),ts(_,[e])},onAppearCancelled(e){C(e,!0,void 0,!0),ts(k,[e])},onLeaveCancelled(e){A(e),ts(S,[e])}})}(e),t))),ts=(e,t=[])=>{h(e)?e.forEach((e=>e(...t))):e&&e(...t)},ns=e=>!!e&&(h(e)?e.some((e=>e.length>1)):e.length>1);function rs(e){const t=(e=>{const t=g(e)?Number(e):NaN;return isNaN(t)?e:t})(e);return t}function is(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[Ji]||(e[Ji]=new Set)).add(t)}function ss(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[Ji];n&&(n.delete(t),n.size||(e[Ji]=void 0))}function os(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let as=0;function cs(e,t,n,r){const i=e._endId=++as,s=()=>{i===e._endId&&r()};if(null!=n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=function(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${Qi}Delay`),s=r(`${Qi}Duration`),o=ls(i,s),a=r(`${Yi}Delay`),c=r(`${Yi}Duration`),l=ls(a,c);let u=null,h=0,d=0;t===Qi?o>0&&(u=Qi,h=o,d=s.length):t===Yi?l>0&&(u=Yi,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Qi:Yi:null,d=u?u===Qi?s.length:c.length:0);const f=u===Qi&&/\b(transform|all)(,|$)/.test(r(`${Qi}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function ls(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>us(t)+us(e[n]))))}function us(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function hs(){return document.body.offsetHeight}const ds=Symbol("_vod"),fs=Symbol("_vsh"),ps={beforeMount(e,{value:t},{transition:n}){e[ds]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ms(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ms(e,!0),r.enter(e)):r.leave(e,(()=>{ms(e,!1)})):ms(e,t))},beforeUnmount(e,{value:t}){ms(e,t)}};function ms(e,t){e.style.display=t?e[ds]:"none",e[fs]=!t}const gs=Symbol(""),vs=/(^|;)\s*display\s*:/;const ys=/\s*!important$/;function ws(e,t,n){if(h(n))n.forEach((n=>ws(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=_s[t];if(n)return n;let r=C(t);if("filter"!==r&&r in e)return _s[t]=r;r=P(r);for(let i=0;i<bs.length;i++){const n=bs[i]+r;if(n in e)return _s[t]=n}return t}(e,t);ys.test(n)?e.setProperty(x(r),n.replace(ys,""),"important"):e[r]=n}}const bs=["Webkit","Moz","ms"],_s={};const Es="http://www.w3.org/1999/xlink";function Ss(e,t,n,r,i,s=q(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(Es,t.slice(6,t.length)):e.setAttributeNS(Es,t,n):null==n||s&&!H(n)?e.removeAttribute(t):e.setAttribute(t,s?"":v(n)?String(n):n)}function Is(e,t,n,r,i){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?Hi(n):n));const s=e.tagName;if("value"===t&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let o=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=H(n):null==n&&"string"===r?(n="",o=!0):"number"===r&&(n=0,o=!0)}try{e[t]=n}catch(dx){}o&&e.removeAttribute(i||t)}function Ts(e,t,n,r){e.addEventListener(t,n,r)}const ks=Symbol("_vei");function Cs(e,t,n,r,i=null){const s=e[ks]||(e[ks]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(As.test(e)){let n;for(t={};n=e.match(As);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):x(e.slice(2));return[n,t]}(t);if(r){const o=s[t]=function(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();Ut(function(e,t){if(h(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=Ns(),n}(r,i);Ts(e,n,o,a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const As=/(?:Once|Passive|Capture)$/;let xs=0;const Ps=Promise.resolve(),Ns=()=>xs||(Ps.then((()=>xs=0)),xs=Date.now());const Os=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123;const Ds=e=>{const t=e.props["onUpdate:modelValue"]||!1;return h(t)?e=>D(t,e):t};function Ls(e){e.target.composing=!0}function Rs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ms=Symbol("_assign"),Fs={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Ms]=Ds(i);const s=r||i.props&&"number"===i.props.type;Ts(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=R(r)),e[Ms](r)})),n&&Ts(e,"change",(()=>{e.value=e.value.trim()})),t||(Ts(e,"compositionstart",Ls),Ts(e,"compositionend",Rs),Ts(e,"change",Rs))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(e[Ms]=Ds(o),e.composing)return;const a=null==t?"":t;if((!s&&"number"!==e.type||/^0\d/.test(e.value)?e.value:R(e.value))!==a){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(i&&e.value.trim()===a)return}e.value=a}}},Us={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const i=f(t);Ts(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?R(js(e)):js(e)));e[Ms](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,Gt((()=>{e._assigning=!1}))})),e[Ms]=Ds(r)},mounted(e,{value:t}){Vs(e,t)},beforeUpdate(e,t,n){e[Ms]=Ds(n)},updated(e,{value:t}){e._assigning||Vs(e,t)}};function Vs(e,t){const n=e.multiple,r=h(t);if(!n||r||f(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=js(s);if(n)if(r){const e=typeof o;s.selected="string"===e||"number"===e?t.some((e=>String(e)===String(o))):G(t,o)>-1}else s.selected=t.has(o);else if(K(js(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function js(e){return"_value"in e?e._value:e.value}const zs=["ctrl","shift","alt","meta"],Bs={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>zs.some((n=>e[`${n}Key`]&&!t.includes(n)))},$s=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=Bs[t[e]];if(r&&r(n,t))return}return e(n,...r)})},qs={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Hs=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=x(n.key);return t.some((e=>e===r||qs[e]===r))?e(n):void 0})},Ks=a({patchProp:(e,t,n,r,i,a)=>{const c="svg"===i;"class"===t?function(e,t,n){const r=e[Ji];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,r,c):"style"===t?function(e,t,n){const r=e.style,i=g(n);let s=!1;if(n&&!i){if(t)if(g(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&ws(r,t,"")}else for(const e in t)null==n[e]&&ws(r,e,"");for(const e in n)"display"===e&&(s=!0),ws(r,e,n[e])}else if(i){if(t!==n){const e=r[gs];e&&(n+=";"+e),r.cssText=n,s=vs.test(n)}}else t&&e.removeAttribute("style");ds in e&&(e[ds]=s?r.display:"",e[fs]&&(r.display="none"))}(e,n,r):s(t)?o(t)||Cs(e,t,0,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&Os(t)&&m(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}if(Os(t)&&g(n))return!1;return t in e}(e,t,r,c))?(Is(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||Ss(e,t,r,c,0,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&g(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),Ss(e,t,r,c)):Is(e,C(t),r,0,t)}},Wi);let Gs;const Ws=(...e)=>{const t=(Gs||(Gs=Dr(Ks))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(g(e)){return document.querySelector(e)}return e}(e);if(!r)return;const i=t._component;m(i)||i.render||i.template||(i.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const s=n(r,!1,function(e){if(e instanceof SVGElement)return"svg";if("function"==typeof MathMLElement&&e instanceof MathMLElement)return"mathml"}(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};const Qs="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3c!--%20Define%20gradient%20--%3e%3cdefs%3e%3clinearGradient%20id='grad'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%233b82f6;stop-opacity:1'%20/%3e%3cstop%20offset='50%25'%20style='stop-color:%236366f1;stop-opacity:1'%20/%3e%3cstop%20offset='100%25'%20style='stop-color:%23ec4899;stop-opacity:1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3c!--%20Background%20with%20gradient%20--%3e%3crect%20width='32'%20height='32'%20rx='6'%20fill='url(%23grad)'/%3e%3c!--%20Medical%20Cross%20--%3e%3crect%20x='14'%20y='6'%20width='4'%20height='12'%20fill='white'/%3e%3crect%20x='10'%20y='10'%20width='12'%20height='4'%20fill='white'/%3e%3c!--%20Letter%20M%20--%3e%3cpath%20d='M8%2016%20L11%2016%20L16%2021%20L21%2016%20L24%2016%20L24%2026%20L21%2026%20L21%2020%20L16%2025%20L11%2020%20L11%2026%20L8%2026%20Z'%20fill='white'/%3e%3c!--%20Underline%20for%20M%20--%3e%3crect%20x='8'%20y='27'%20width='16'%20height='1.5'%20fill='white'/%3e%3c/svg%3e",Ys=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Js=Ys({__name:"SplashScreen",setup(e){const t=Et(!0),n=Et(null),r={popIn:.4,delay:1.2,fadeOut:.4,buffer:.1};return Ln((()=>{requestAnimationFrame((()=>{n.value&&Object.entries(r).forEach((([e,t])=>{n.value.style.setProperty(`--animation-${e}`,`${t}s`)}));const e=1e3*(r.popIn+r.delay);"requestIdleCallback"in window?requestIdleCallback((()=>{t.value=!1}),{timeout:e}):setTimeout((()=>{t.value=!1}),e)}))})),(e,r)=>(oi(),hi(es,{name:"splash"},{default:rn((()=>[sn(gi("div",{class:"splash-screen",ref_key:"splashRef",ref:n},r[0]||(r[0]=[gi("div",{class:"splash-content"},[gi("img",{class:"splash-logo",src:Qs,alt:"MediQuix Logo",width:"90",height:"90",loading:"eager",fetchpriority:"high"}),gi("h1",{class:"splash-title"},"MediQuix"),gi("p",{class:"splash-subtitle"},"Medicina na Ponta da Língua")],-1)]),512),[[ps,t.value]])])),_:1}))}},[["__scopeId","data-v-e86e3aa5"]]);
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Xs;const Zs=e=>Xs=e,eo=Symbol();function to(e){return e&&"object"==typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!=typeof e.toJSON}var no,ro;(ro=no||(no={})).direct="direct",ro.patchObject="patch object",ro.patchFunction="patch function";const io=()=>{};function so(e,t,n,r=io){e.push(t);const i=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),r())};var s;return!n&&ne()&&(s=i,X&&X.cleanups.push(s)),i}function oo(e,...t){e.slice().forEach((e=>{e(...t)}))}const ao=e=>e(),co=Symbol(),lo=Symbol();function uo(e,t){e instanceof Map&&t instanceof Map?t.forEach(((t,n)=>e.set(n,t))):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];to(i)&&to(r)&&e.hasOwnProperty(n)&&!_t(r)&&!ft(r)?e[n]=uo(i,r):e[n]=r}return e}const ho=Symbol();const{assign:fo}=Object;function po(e,t,n,r){const{state:i,actions:s,getters:o}=t,a=n.state.value[e];let c;return c=mo(e,(function(){a||(n.state.value[e]=i?i():{});const t=function(e){const t=h(e)?new Array(e.length):{};for(const n in e)t[n]=Pt(e,n);return t}(n.state.value[e]);return fo(t,s,Object.keys(o||{}).reduce(((t,r)=>(t[r]=yt(ji((()=>{Zs(n);const t=n._s.get(e);return o[r].call(t,t)}))),t)),{}))}),t,n,r,!0),c}function mo(e,t,n={},r,i,s){let o;const a=fo({actions:{}},n),c={deep:!0};let l,u,h,d=[],f=[];const p=r.state.value[e];let m;function g(t){let n;l=u=!1,"function"==typeof t?(t(r.state.value[e]),n={type:no.patchFunction,storeId:e,events:h}):(uo(r.state.value[e],t),n={type:no.patchObject,payload:t,storeId:e,events:h});const i=m=Symbol();Gt().then((()=>{m===i&&(l=!0)})),u=!0,oo(d,n,r.state.value[e])}s||p||(r.state.value[e]={}),Et({});const v=s?function(){const{state:e}=n,t=e?e():{};this.$patch((e=>{fo(e,t)}))}:io;const y=(t,n="")=>{if(co in t)return t[lo]=n,t;const i=function(){Zs(r);const n=Array.from(arguments),s=[],o=[];let a;oo(f,{args:n,name:i[lo],store:w,after:function(e){s.push(e)},onError:function(e){o.push(e)}});try{a=t.apply(this&&this.$id===e?this:w,n)}catch(c){throw oo(o,c),c}return a instanceof Promise?a.then((e=>(oo(s,e),e))).catch((e=>(oo(o,e),Promise.reject(e)))):(oo(s,a),a)};return i[co]=!0,i[lo]=n,i},w=lt({_p:r,$id:e,$onAction:so.bind(null,f),$patch:g,$reset:v,$subscribe(t,n={}){const i=so(d,t,n.detached,(()=>s())),s=o.run((()=>zr((()=>r.state.value[e]),(r=>{("sync"===n.flush?u:l)&&t({storeId:e,type:no.direct,events:h},r)}),fo({},c,n))));return i},$dispose:function(){o.stop(),d=[],f=[],r._s.delete(e)}});r._s.set(e,w);const b=(r._a&&r._a.runWithContext||ao)((()=>r._e.run((()=>(o=te()).run((()=>t({action:y})))))));for(const S in b){const t=b[S];if(_t(t)&&(!_t(E=t)||!E.effect)||ft(t))s||(!p||to(_=t)&&_.hasOwnProperty(ho)||(_t(t)?t.value=p[S]:uo(t,p[S])),r.state.value[e][S]=t);else if("function"==typeof t){const e=y(t,S);b[S]=e,a.actions[S]=t}}var _,E;return fo(w,b),fo(vt(w),b),Object.defineProperty(w,"$state",{get:()=>r.state.value[e],set:e=>{g((t=>{fo(t,e)}))}}),r._p.forEach((e=>{fo(w,o.run((()=>e({store:w,app:r._a,pinia:r,options:a}))))})),p&&s&&n.hydrate&&n.hydrate(w.$state,p),l=!0,u=!0,w}
/*! #__NO_SIDE_EFFECTS__ */function go(e,t,n){let r,i;const s="function"==typeof t;function o(e,n){(e=e||(!!(Ci||en||mr)?vr(eo,null):null))&&Zs(e),(e=Xs)._s.has(r)||(s?mo(r,t,i,e):po(r,i,e));return e._s.get(r)}return"string"==typeof e?(r=e,i=s?n:t):(i=e,r=e.id),o.$id=r,o}const vo=go("ui",(()=>{const e=Et("true"===localStorage.getItem("darkMode")),t=Et(!1);const n=Et(new Set);const r=Et(new Map);const i=Et(new Map);function s(e){i.value.delete(e)}const o=Et(new Map);return{isDarkMode:e,toggleDarkMode:function(){e.value=!e.value,localStorage.setItem("darkMode",e.value)},isDrawerOpen:t,toggleDrawer:function(){t.value=!t.value},openModal:function(e){n.value.add(e)},closeModal:function(e){n.value.delete(e)},isModalOpen:function(e){return n.value.has(e)},setLoading:function(e,t){r.value.set(e,t)},isLoading:function(e){return r.value.get(e)||!1},setSuccess:function(e,t){i.value.set(e,t),setTimeout((()=>s(e)),5e3)},clearSuccess:s,getSuccess:function(e){return i.value.get(e)},setError:function(e,t){o.value.set(e,t)},clearError:function(e){o.value.delete(e)},getError:function(e){return o.value.get(e)}}})),yo=["title"],wo=Ys({__name:"DarkModeToggle",setup(e){const t=vo(),n=ji((()=>t.isDarkMode));function r(){t.toggleDarkMode()}return zr((()=>t.isDarkMode),(e=>{document.documentElement.classList.toggle("dark",e)}),{immediate:!0}),(e,t)=>{const i=$n("font-awesome-icon");return oi(),ui("button",{onClick:r,class:"dark-mode-toggle",style:U({color:n.value?"var(--dark-text-color)":"var(--text-color)"}),title:n.value?"Switch to light mode":"Switch to dark mode"},[vi(i,{icon:n.value?["fas","moon"]:["fas","sun"]},null,8,["icon"])],12,yo)}}},[["__scopeId","data-v-417c26d3"]]);var bo={};
/**
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
 */const _o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==a)throw new So;const c=t<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class So extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Io=function(e){return function(e){const t=_o(e);return Eo.encodeByteArray(t,!0)}(e).replace(/\./g,"")},To=function(e){try{return Eo.decodeString(e,!0)}catch(dx){}return null};
/**
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
 */
const ko=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Co=()=>{try{return ko()||(()=>{if("undefined"==typeof process)return;const e=bo.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(dx){return}const t=e&&To(e[1]);return t&&JSON.parse(t)})()}catch(dx){return}},Ao=e=>{var t,n;return null===(n=null===(t=Co())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},xo=()=>{var e;return null===(e=Co())||void 0===e?void 0:e.config},Po=e=>{var t;return null===(t=Co())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class No{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */
/**
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
 */
function Oo(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Do(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Lo(){return!function(){var e;const t=null===(e=Co())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(dx){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ro(){try{return"object"==typeof indexedDB}catch(dx){return!1}}function Mo(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class Fo extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Fo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uo.prototype.create)}}class Uo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Vo,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Fo(r,o,n)}}const Vo=/\{\$([^}]+)}/g;function jo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(zo(n)&&zo(s)){if(!jo(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zo(e){return null!==e&&"object"==typeof e}
/**
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
 */function Bo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $o(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function qo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Ho{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ko),void 0===r.error&&(r.error=Ko),void 0===r.complete&&(r.complete=Ko);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(dx){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(dx){"undefined"!=typeof console&&console.error}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ko(){}
/**
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
 */function Go(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
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
 */function Wo(e){return e&&e._delegate?e._delegate:e}class Qo{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const Yo="[DEFAULT]";
/**
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
 */class Jo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new No;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(dx){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(dx){if(r)return null;throw dx}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Yo})}catch(dx){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(dx){}}}}clearInstance(e=Yo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Yo){return this.instances.has(e)}getOptions(e=Yo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Yo?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=Yo){return this.component?this.component.multipleInstances?e:Yo:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Xo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var Zo,ea;(ea=Zo||(Zo={}))[ea.DEBUG=0]="DEBUG",ea[ea.VERBOSE=1]="VERBOSE",ea[ea.INFO=2]="INFO",ea[ea.WARN=3]="WARN",ea[ea.ERROR=4]="ERROR",ea[ea.SILENT=5]="SILENT";const ta={debug:Zo.DEBUG,verbose:Zo.VERBOSE,info:Zo.INFO,warn:Zo.WARN,error:Zo.ERROR,silent:Zo.SILENT},na=Zo.INFO,ra={[Zo.DEBUG]:"log",[Zo.VERBOSE]:"log",[Zo.INFO]:"info",[Zo.WARN]:"warn",[Zo.ERROR]:"error"},ia=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!ra[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sa{constructor(e){this.name=e,this._logLevel=na,this._logHandler=ia,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Zo))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ta[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Zo.DEBUG,...e),this._logHandler(this,Zo.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Zo.VERBOSE,...e),this._logHandler(this,Zo.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Zo.INFO,...e),this._logHandler(this,Zo.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Zo.WARN,...e),this._logHandler(this,Zo.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Zo.ERROR,...e),this._logHandler(this,Zo.ERROR,...e)}}let oa,aa;const ca=new WeakMap,la=new WeakMap,ua=new WeakMap,ha=new WeakMap,da=new WeakMap;let fa={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return la.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ua.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ga(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function pa(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(aa||(aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(va(this),t),ga(ca.get(this))}:function(...t){return ga(e.apply(va(this),t))}:function(t,...n){const r=e.call(va(this),t,...n);return ua.set(r,t.sort?t.sort():[t]),ga(r)}}function ma(e){return"function"==typeof e?pa(e):(e instanceof IDBTransaction&&function(e){if(la.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));la.set(e,t)}(e),t=e,(oa||(oa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,fa):e);var t}function ga(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ga(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&ca.set(t,e)})).catch((()=>{})),da.set(t,e),t}(e);if(ha.has(e))return ha.get(e);const t=ma(e);return t!==e&&(ha.set(e,t),da.set(t,e)),t}const va=e=>da.get(e);function ya(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=ga(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(ga(o.result),e.oldVersion,e.newVersion,ga(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const wa=["get","getKey","getAll","getAllKeys","count"],ba=["put","add","delete","clear"],_a=new Map;function Ea(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(_a.get(t))return _a.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ba.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!wa.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return _a.set(t,s),s}fa=(e=>({...e,get:(t,n,r)=>Ea(t,n)||e.get(t,n,r),has:(t,n)=>!!Ea(t,n)||e.has(t,n)}))(fa);
/**
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
 */
class Sa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ia="@firebase/app",Ta="0.11.4",ka=new sa("@firebase/app"),Ca="@firebase/app-compat",Aa="@firebase/analytics-compat",xa="@firebase/analytics",Pa="@firebase/app-check-compat",Na="@firebase/app-check",Oa="@firebase/auth",Da="@firebase/auth-compat",La="@firebase/database",Ra="@firebase/data-connect",Ma="@firebase/database-compat",Fa="@firebase/functions",Ua="@firebase/functions-compat",Va="@firebase/installations",ja="@firebase/installations-compat",za="@firebase/messaging",Ba="@firebase/messaging-compat",$a="@firebase/performance",qa="@firebase/performance-compat",Ha="@firebase/remote-config",Ka="@firebase/remote-config-compat",Ga="@firebase/storage",Wa="@firebase/storage-compat",Qa="@firebase/firestore",Ya="@firebase/vertexai",Ja="@firebase/firestore-compat",Xa="firebase",Za="[DEFAULT]",ec={[Ia]:"fire-core",[Ca]:"fire-core-compat",[xa]:"fire-analytics",[Aa]:"fire-analytics-compat",[Na]:"fire-app-check",[Pa]:"fire-app-check-compat",[Oa]:"fire-auth",[Da]:"fire-auth-compat",[La]:"fire-rtdb",[Ra]:"fire-data-connect",[Ma]:"fire-rtdb-compat",[Fa]:"fire-fn",[Ua]:"fire-fn-compat",[Va]:"fire-iid",[ja]:"fire-iid-compat",[za]:"fire-fcm",[Ba]:"fire-fcm-compat",[$a]:"fire-perf",[qa]:"fire-perf-compat",[Ha]:"fire-rc",[Ka]:"fire-rc-compat",[Ga]:"fire-gcs",[Wa]:"fire-gcs-compat",[Qa]:"fire-fst",[Ja]:"fire-fst-compat",[Ya]:"fire-vertex","fire-js":"fire-js",[Xa]:"fire-js-all"},tc=new Map,nc=new Map,rc=new Map;function ic(e,t){try{e.container.addComponent(t)}catch(dx){ka.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,dx)}}function sc(e){const t=e.name;if(rc.has(t))return ka.debug(`There were multiple attempts to register component ${t}.`),!1;rc.set(t,e);for(const n of tc.values())ic(n,e);for(const n of nc.values())ic(n,e);return!0}function oc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ac(e){return null!=e&&void 0!==e.settings}
/**
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
 */const cc=new Uo("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class lc{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Qo("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cc.create("app-deleted",{appName:this._name})}}
/**
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
 */const uc="11.6.0";function hc(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Za,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw cc.create("bad-app-name",{appName:String(i)});if(n||(n=xo()),!n)throw cc.create("no-options");const s=tc.get(i);if(s){if(jo(n,s.options)&&jo(r,s.config))return s;throw cc.create("duplicate-app",{appName:i})}const o=new Xo(i);for(const c of rc.values())o.addComponent(c);const a=new lc(n,r,o);return tc.set(i,a),a}function dc(e=Za){const t=tc.get(e);if(!t&&e===Za&&xo())return hc();if(!t)throw cc.create("no-app",{appName:e});return t}function fc(e,t,n){var r;let i=null!==(r=ec[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ka.warn(e.join(" "))}sc(new Qo(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
 */const pc="firebase-heartbeat-store";let mc=null;function gc(){return mc||(mc=ya("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(pc)}catch(dx){}}}).catch((e=>{throw cc.create("idb-open",{originalErrorMessage:e.message})}))),mc}async function vc(e,t){try{const n=(await gc()).transaction(pc,"readwrite"),r=n.objectStore(pc);await r.put(t,yc(e)),await n.done}catch(dx){if(dx instanceof Fo)ka.warn(dx.message);else{const t=cc.create("idb-set",{originalErrorMessage:null==dx?void 0:dx.message});ka.warn(t.message)}}}function yc(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class wc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _c(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bc();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(dx){ka.warn(dx)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=bc(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ec(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ec(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=Io(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(dx){return ka.warn(dx),""}}}function bc(){return(new Date).toISOString().substring(0,10)}class _c{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Ro()&&Mo().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await gc()).transaction(pc),n=await t.objectStore(pc).get(yc(e));return await t.done,n}catch(dx){if(dx instanceof Fo)ka.warn(dx.message);else{const t=cc.create("idb-get",{originalErrorMessage:null==dx?void 0:dx.message});ka.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return vc(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return vc(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ec(e){return Io(JSON.stringify({version:2,heartbeats:e})).length}var Sc;Sc="",sc(new Qo("platform-logger",(e=>new Sa(e)),"PRIVATE")),sc(new Qo("heartbeat",(e=>new wc(e)),"PRIVATE")),fc(Ia,Ta,Sc),fc(Ia,Ta,"esm2017"),fc("fire-js","");function Ic(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Tc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
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
 */
fc("firebase","11.6.0","app"),"function"==typeof SuppressedError&&SuppressedError;const kc=Tc,Cc=new Uo("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ac=new sa("@firebase/auth");function xc(e,...t){Ac.logLevel<=Zo.ERROR&&Ac.error(`Auth (${uc}): ${e}`,...t)}
/**
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
 */function Pc(e,...t){throw Lc(e,...t)}function Nc(e,...t){return Lc(e,...t)}function Oc(e,t,n){const r=Object.assign(Object.assign({},kc()),{[t]:n});return new Uo("auth","Firebase",r).create(t,{appName:e.name})}function Dc(e){return Oc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lc(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Cc.create(e,...t)}function Rc(e,t,...n){if(!e)throw Lc(t,...n)}function Mc(e){const t="INTERNAL ASSERTION FAILED: "+e;throw xc(t),new Error(t)}function Fc(e,t){e||Mc(t)}
/**
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
 */function Uc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Vc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function jc(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Vc()&&"https:"!==Vc()&&!Do()&&!("connection"in navigator)||navigator.onLine}
/**
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
 */
class zc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fc(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oo())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return jc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function Bc(e,t){Fc(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class $c{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Mc("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Mc("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Mc("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const qc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Hc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kc=new zc(3e4,6e4);
/**
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
 */function Gc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wc(e,t,n,r,i={}){return Qc(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Bo(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const c=Object.assign({method:t,headers:a},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(c.referrerPolicy="no-referrer"),$c.fetch()(await Jc(e,e.config.apiHost,n,o),c)}))}async function Qc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},qc),t);try{const t=new Zc(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw el(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw el(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw el(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw el(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Oc(e,a,o);Pc(e,a)}}catch(dx){if(dx instanceof Fo)throw dx;Pc(e,"network-request-failed",{message:String(dx)})}}async function Yc(e,t,n,r,i={}){const s=await Wc(e,t,n,r,i);return"mfaPendingCredential"in s&&Pc(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Jc(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?Bc(e.config,i):`${e.config.apiScheme}://${i}`;if(Hc.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(o).toString()}return o}function Xc(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Nc(this.auth,"network-request-failed"))),Kc.get())}))}}function el(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nc(e,t,r);return i.customData._tokenResponse=n,i}function tl(e){return void 0!==e&&void 0!==e.enterprise}class nl{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Xc(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rl(e,t){return Wc(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function il(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(dx){}}function sl(e){return 1e3*Number(e)}function ol(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return xc("JWT malformed, contained fewer than 3 sections"),null;try{const e=To(n);return e?JSON.parse(e):(xc("Failed to decode base64 JWT payload"),null)}catch(dx){return xc("Caught error parsing JWT payload as JSON",null==dx?void 0:dx.toString()),null}}function al(e){const t=ol(e);return Rc(t,"internal-error"),Rc(void 0!==t.exp,"internal-error"),Rc(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function cl(e,t,n=!1){if(n)return t;try{return await t}catch(dx){throw dx instanceof Fo&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(dx)&&e.auth.currentUser===e&&await e.auth.signOut(),dx}}class ll{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(dx){return void("auth/network-request-failed"===(null==dx?void 0:dx.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class ul{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function hl(e){var t;const n=e.auth,r=await e.getIdToken(),i=await cl(e,rl(n,{idToken:r}));Rc(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?dl(s.providerUserInfo):[],a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ul(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}function dl(e){return e.map((e=>{var{providerId:t}=e,n=Ic(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */
/**
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
 */
class fl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Rc(e.idToken,"internal-error"),Rc(void 0!==e.idToken,"internal-error"),Rc(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):al(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Rc(0!==e.length,"internal-error");const t=al(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(Rc(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Qc(e,{},(async()=>{const n=Bo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=await Jc(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",$c.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new fl;return n&&(Rc("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Rc("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Rc("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fl,this.toJSON())}_performRefresh(){return Mc("not implemented")}}
/**
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
 */function pl(e,t){Rc("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ml{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Ic(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ll(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ul(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await cl(this,this.stsTokenManager.getToken(this.auth,e));return Rc(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Wo(e),r=await n.getIdToken(t),i=ol(r);Rc(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:il(sl(i.auth_time)),issuedAtTime:il(sl(i.iat)),expirationTime:il(sl(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Wo(e);await hl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Rc(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ml(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Rc(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await hl(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ac(this.auth.app))return Promise.reject(Dc(this.auth));const e=await this.getIdToken();return await cl(this,
/**
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
 */
async function(e,t){return Wc(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;Rc(y&&E,e,"internal-error");const S=fl.fromJSON(this.name,E);Rc("string"==typeof y,e,"internal-error"),pl(u,e.name),pl(h,e.name),Rc("boolean"==typeof w,e,"internal-error"),Rc("boolean"==typeof b,e,"internal-error"),pl(d,e.name),pl(f,e.name),pl(p,e.name),pl(m,e.name),pl(g,e.name),pl(v,e.name);const I=new ml({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(I.providerData=_.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new fl;r.updateFromServerResponse(t);const i=new ml({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await hl(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Rc(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?dl(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),o=new fl;o.updateFromIdToken(n);const a=new ml({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ul(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(a,c),a}}
/**
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
 */const gl=new Map;function vl(e){Fc(e instanceof Function,"Expected a class definition");let t=gl.get(e);return t?(Fc(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,gl.set(e,t),t)}
/**
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
 */class yl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yl.type="NONE";const wl=yl;
/**
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
 */function bl(e,t,n){return`firebase:${e}:${t}:${n}`}class _l{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=bl(this.userKey,r.apiKey,i),this.fullPersistenceKey=bl("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await rl(this.auth,{idToken:e}).catch((()=>{}));return t?ml._fromGetAccountInfoResponse(this.auth,t,e):null}return ml._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new _l(vl(wl),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||vl(wl);const s=bl(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){let n;if("string"==typeof t){const r=await rl(e,{idToken:t}).catch((()=>{}));if(!r)break;n=await ml._fromGetAccountInfoResponse(e,r,t)}else n=ml._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new _l(i,e,n)):new _l(i,e,n)}}
/**
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
 */function El(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(kl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Sl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Al(t))return"Blackberry";if(xl(t))return"Webos";if(Il(t))return"Safari";if((t.includes("chrome/")||Tl(t))&&!t.includes("edge/"))return"Chrome";if(Cl(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Sl(e=Oo()){return/firefox\//i.test(e)}function Il(e=Oo()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Tl(e=Oo()){return/crios\//i.test(e)}function kl(e=Oo()){return/iemobile/i.test(e)}function Cl(e=Oo()){return/android/i.test(e)}function Al(e=Oo()){return/blackberry/i.test(e)}function xl(e=Oo()){return/webos/i.test(e)}function Pl(e=Oo()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Nl(){return function(){const e=Oo();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Ol(e=Oo()){return Pl(e)||Cl(e)||xl(e)||Al(e)||/windows phone/i.test(e)||kl(e)}
/**
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
 */function Dl(e,t=[]){let n;switch(e){case"Browser":n=El(Oo());break;case"Worker":n=`${El(Oo())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${uc}/${r}`}
/**
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
 */class Ll{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(dx){r(dx)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(dx){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==dx?void 0:dx.message})}}}
/**
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
 */class Rl{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
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
 */class Ml{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ul(this),this.idTokenSubscription=new Ul(this),this.beforeStateQueue=new Ll(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise((e=>this._resolvePersistenceManagerAvailable=e))}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vl(t)),this._initializationPromise=this.queue((async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await _l.create(this,e),null===(n=this._resolvePersistenceManagerAvailable)||void 0===n||n.call(this),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(dx){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await rl(this,{idToken:e}),n=await ml._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ac(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(dx){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(dx)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Rc(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(dx){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hl(e)}catch(dx){if("auth/network-request-failed"!==(null==dx?void 0:dx.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ac(this.app))return Promise.reject(Dc(this));const t=e?Wo(e):null;return t&&Rc(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Rc(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return ac(this.app)?Promise.reject(Dc(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ac(this.app)?Promise.reject(Dc(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(vl(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Wc(e,"GET","/v2/passwordPolicy",Gc(e,t))}
/**
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
 */(this),t=new Rl(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Uo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Wc(e,"POST","/v2/accounts:revokeToken",Gc(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vl(e)||this._popupRedirectResolver;Rc(t,this,"argument-error"),this.redirectPersistenceManager=await _l.create(this,[vl(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Rc(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Rc(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(ac(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Ac.logLevel<=Zo.WARN&&Ac.warn(`Auth (${uc}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Fl(e){return Wo(e)}class Ul{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Ho(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Rc(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */let Vl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jl(e){return Vl.loadJS(e)}class zl{constructor(){this.enterprise=new Bl}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Bl{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const $l="NO_RECAPTCHA";class ql{constructor(e){this.type="recaptcha-enterprise",this.auth=Fl(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{(async function(e,t){return Wc(e,"GET","/v2/recaptchaConfig",Gc(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new nl(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;tl(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n($l)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new zl).execute("siteKey",{action:"verify"})}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&tl(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Vl.recaptchaEnterpriseScript;0!==t.length&&(t+=n),jl(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Hl(e,t,n,r=!1,i=!1){const s=new ql(e);let o;if(i)o=$l;else try{o=await s.verify(n)}catch(c){o=await s.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Kl(e,t,n,r,i){var s;if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Hl(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){const i=await Hl(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
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
 */function Gl(e,t,n){const r=Fl(e);Rc(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=Wl(t),{host:s,port:o}=function(e){const t=Wl(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ql(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ql(t)}}}(t),a={url:`${i}//${s}${null===o?"":`:${o}`}/`},c=Object.freeze({host:s,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!r._canInitEmulator)return Rc(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void Rc(jo(a,r.config.emulator)&&jo(c,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=a,r.emulatorConfig=c,r.settings.appVerificationDisabledForTesting=!0,function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info;"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function Wl(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ql(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Yl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mc("not implemented")}_getIdTokenResponse(e){return Mc("not implemented")}_linkToIdToken(e,t){return Mc("not implemented")}_getReauthenticationResolver(e){return Mc("not implemented")}}
/**
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
 */async function Jl(e,t){return Wc(e,"POST","/v1/accounts:resetPassword",Gc(e,t))}async function Xl(e,t){return Wc(e,"POST","/v1/accounts:signUp",t)}
/**
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
 */async function Zl(e,t){return Yc(e,"POST","/v1/accounts:signInWithPassword",Gc(e,t))}async function eu(e,t){return Wc(e,"POST","/v1/accounts:sendOobCode",Gc(e,t))}async function tu(e,t){return eu(e,t)}
/**
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
 */
/**
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
 */
class nu extends Yl{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new nu(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new nu(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Kl(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Zl);case"emailLink":return async function(e,t){return Yc(e,"POST","/v1/accounts:signInWithEmailLink",Gc(e,t))}(e,{email:this._email,oobCode:this._password});default:Pc(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Kl(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xl);case"emailLink":return async function(e,t){return Yc(e,"POST","/v1/accounts:signInWithEmailLink",Gc(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Pc(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function ru(e,t){return Yc(e,"POST","/v1/accounts:signInWithIdp",Gc(e,t))}
/**
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
 */class iu extends Yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new iu(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pc("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Ic(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new iu(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return ru(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ru(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ru(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bo(t)}return e}}
/**
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
 */class su{constructor(e){var t,n,r,i,s,o;const a=$o(qo(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Rc(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=$o(qo(e)).link,n=t?$o(qo(t)).deep_link_id:null,r=$o(qo(e)).deep_link_id;return(r?$o(qo(r)).link:null)||r||n||t||e}(e);try{return new su(t)}catch(n){return null}}}
/**
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
 */class ou{constructor(){this.providerId=ou.PROVIDER_ID}static credential(e,t){return nu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=su.parseLink(t);return Rc(n,"argument-error"),nu._fromEmailAndCode(e,n.code,n.tenantId)}}ou.PROVIDER_ID="password",ou.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ou.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class cu extends au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */class lu extends cu{constructor(){super("facebook.com")}static credential(e){return iu._fromParams({providerId:lu.PROVIDER_ID,signInMethod:lu.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lu.credentialFromTaggedObject(e)}static credentialFromError(e){return lu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return lu.credential(e.oauthAccessToken)}catch(t){return null}}}lu.FACEBOOK_SIGN_IN_METHOD="facebook.com",lu.PROVIDER_ID="facebook.com";
/**
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
 */
class uu extends cu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return iu._fromParams({providerId:uu.PROVIDER_ID,signInMethod:uu.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return uu.credentialFromTaggedObject(e)}static credentialFromError(e){return uu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return uu.credential(t,n)}catch(r){return null}}}uu.GOOGLE_SIGN_IN_METHOD="google.com",uu.PROVIDER_ID="google.com";
/**
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
 */
class hu extends cu{constructor(){super("github.com")}static credential(e){return iu._fromParams({providerId:hu.PROVIDER_ID,signInMethod:hu.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hu.credentialFromTaggedObject(e)}static credentialFromError(e){return hu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return hu.credential(e.oauthAccessToken)}catch(t){return null}}}hu.GITHUB_SIGN_IN_METHOD="github.com",hu.PROVIDER_ID="github.com";
/**
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
 */
class du extends cu{constructor(){super("twitter.com")}static credential(e,t){return iu._fromParams({providerId:du.PROVIDER_ID,signInMethod:du.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return du.credentialFromTaggedObject(e)}static credentialFromError(e){return du.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return du.credential(t,n)}catch(r){return null}}}
/**
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
 */
async function fu(e,t){return Yc(e,"POST","/v1/accounts:signUp",Gc(e,t))}
/**
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
 */du.TWITTER_SIGN_IN_METHOD="twitter.com",du.PROVIDER_ID="twitter.com";class pu{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ml._fromIdTokenResponse(e,n,r),s=mu(n);return new pu({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=mu(n);return new pu({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function mu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */class gu extends Fo{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,gu.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new gu(e,t,n,r)}}function vu(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw gu._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */
async function yu(e,t,n=!1){if(ac(e.app))return Promise.reject(Dc(e));const r="signIn",i=await vu(e,r,t),s=await pu._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
/**
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
 */
class wu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?bu._fromServerResponse(e,t):"totpInfo"in t?_u._fromServerResponse(e,t):Pc(e,"internal-error")}}class bu extends wu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new bu(t)}}class _u extends wu{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new _u(t)}}
/**
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
 */
/**
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
 */
async function Eu(e){const t=Fl(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Su(e,t,n){const r=Fl(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&function(e,t,n){var r;Rc((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),Rc(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),Rc(void 0===n.linkDomain||n.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Rc(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(Rc(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}(r,i,n),await Kl(r,i,"getOobCode",tu)}async function Iu(e,t){const{data:n}=await async function(e,t){const n=Wo(e),r=await Jl(n,{oobCode:t}),i=r.requestType;switch(Rc(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":Rc(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":Rc(r.mfaInfo,n,"internal-error");default:Rc(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=wu._fromServerResponse(Fl(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}(Wo(e),t);return n.email}function Tu(e,t,n){return ac(e.app)?Promise.reject(Dc(e)):async function(e,t){return yu(Fl(e),t)}(Wo(e),ou.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Eu(e),t}))}async function ku(e,t){const n=Wo(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()},{email:i}=await async function(e,t){return eu(e,t)}(n.auth,r);i!==e.email&&await e.reload()}
/**
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
 */function Cu(e){return Wo(e).signOut()}const Au="__sak";
/**
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
 */class xu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class Pu extends xu{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ol(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Nl()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pu.type="LOCAL";const Nu=Pu;
/**
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
 */class Ou extends xu{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ou.type="SESSION";const Du=Ou;
/**
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
 */
/**
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
 */
class Lu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Lu(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Ru(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Lu.receivers=[];class Mu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ru("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function Fu(){return window}
/**
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
 */
function Uu(){return void 0!==Fu().WorkerGlobalScope&&"function"==typeof Fu().importScripts}
/**
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
 */
const Vu="firebaseLocalStorageDb",ju="firebaseLocalStorage",zu="fbase_key";class Bu{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function $u(e,t){return e.transaction([ju],t?"readwrite":"readonly").objectStore(ju)}function qu(){const e=indexedDB.open(Vu,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ju,{keyPath:zu})}catch(dx){n(dx)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ju)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Vu);return new Bu(e).toPromise()}(),t(await qu()))}))}))}async function Hu(e,t,n){const r=$u(e,!0).put({[zu]:t,value:n});return new Bu(r).toPromise()}function Ku(e,t){const n=$u(e,!0).delete(t);return new Bu(n).toPromise()}class Gu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await qu()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(dx){if(t++>3)throw dx;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lu._getInstance(Uu()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Mu(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qu();return await Hu(e,Au,"1"),await Ku(e,Au),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Hu(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=$u(e,!1).get(t),r=await new Bu(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ku(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=$u(e,!1).getAll();return new Bu(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Gu.type="LOCAL";const Wu=Gu;new zc(3e4,6e4);
/**
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
 */
class Qu extends Yl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ru(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ru(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ru(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yu(e){return yu(e.auth,new Qu(e),e.bypassAuthState)}function Ju(e){const{auth:t,user:n}=e;return Rc(n,t,"internal-error"),
/**
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
 */
async function(e,t,n=!1){const{auth:r}=e;if(ac(r.app))return Promise.reject(Dc(r));const i="reauthenticate";try{const s=await cl(e,vu(r,i,t,e),n);Rc(s.idToken,r,"internal-error");const o=ol(s.idToken);Rc(o,r,"internal-error");const{sub:a}=o;return Rc(e.uid===a,r,"user-mismatch"),pu._forOperation(e,i,s)}catch(dx){throw"auth/user-not-found"===(null==dx?void 0:dx.code)&&Pc(r,"user-mismatch"),dx}}(n,new Qu(e),e.bypassAuthState)}async function Xu(e){const{auth:t,user:n}=e;return Rc(n,t,"internal-error"),async function(e,t,n=!1){const r=await cl(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return pu._forOperation(e,"link",r)}(n,new Qu(e),e.bypassAuthState)}
/**
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
 */class Zu{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(dx){this.reject(dx)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(dx){this.reject(dx)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yu;case"linkViaPopup":case"linkViaRedirect":return Xu;case"reauthViaPopup":case"reauthViaRedirect":return Ju;default:Pc(this.auth,"internal-error")}}resolve(e){Fc(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fc(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const eh=new zc(2e3,1e4);class th extends Zu{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,th.currentPopupAction&&th.currentPopupAction.cancel(),th.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Rc(e,this.auth,"internal-error"),e}async onExecution(){Fc(1===this.filter.length,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Nc(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Nc(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,th.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Nc(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,eh.get())};e()}}th.currentPopupAction=null;
/**
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
 */
const nh="pendingRedirect",rh=new Map;class ih extends Zu{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=rh.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return bl(nh,e.config.apiKey,e.name)}(t),r=function(e){return vl(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(dx){e=()=>Promise.reject(dx)}rh.set(this.auth._key(),e)}return this.bypassAuthState||rh.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function sh(e,t){rh.set(e._key(),t)}async function oh(e,t,n=!1){if(ac(e.app))return Promise.reject(Dc(e));const r=Fl(e),i=
/**
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
 */
function(e,t){return t?vl(t):(Rc(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new ih(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
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
 */class ah{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lh(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!lh(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Nc(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ch(e))}saveEventToCache(e){this.cachedEventUids.add(ch(e)),this.lastProcessedEventTime=Date.now()}}function ch(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function lh({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const uh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hh=/^https?/;async function dh(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Wc(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(fh(r))return}catch(n){}Pc(e,"unauthorized-domain")}function fh(e){const t=Uc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!hh.test(n))return!1;if(uh.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const ph=new zc(3e4,6e4);function mh(){const e=Fu().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function gh(e){return new Promise(((t,n)=>{var r,i,s;function o(){mh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mh(),n(Nc(e,"network-request-failed"))},timeout:ph.get()})}if(null===(i=null===(r=Fu().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Fu().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Fu()[t]=()=>{gapi.load?o():n(Nc(e,"network-request-failed"))},jl(`${Vl.gapiScript}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw vh=null,e}))}let vh=null;
/**
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
 */
const yh=new zc(5e3,15e3),wh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _h(e){const t=e.config;Rc(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Bc(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:uc},i=bh.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bo(r).slice(1)}`}async function Eh(e){const t=await function(e){return vh=vh||gh(e),vh}(e),n=Fu().gapi;return Rc(n,e,"internal-error"),t.open({where:document.body,url:_h(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wh,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Nc(e,"network-request-failed"),s=Fu().setTimeout((()=>{r(i)}),yh.get());function o(){Fu().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
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
 */const Sh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ih{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(dx){}}}function Th(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Sh),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Oo().toLowerCase();n&&(a=Tl(l)?"_blank":n),Sl(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Oo()){var t;return Pl(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",a),new Ih(null);const h=window.open(t||"",a,u);Rc(h,e,"popup-blocked");try{h.focus()}catch(dx){}return new Ih(h)}const kh="__/auth/handler",Ch="emulator/auth/handler",Ah=encodeURIComponent("fac");async function xh(e,t,n,r,i,s){Rc(e.config.authDomain,e,"auth-domain-config-required"),Rc(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:uc,eventId:i};if(t instanceof au){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))o[e]=t}if(t instanceof cu){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))void 0===a[u]&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Ah}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${kh}`;return Bc(e,Ch)}
/**
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
 */(e)}?${Bo(a).slice(1)}${l}`}const Ph="webStorageSupport";const Nh=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Du,this._completeRedirectFn=oh,this._overrideRedirectResult=sh}async _openPopup(e,t,n,r){var i;Fc(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Th(e,await xh(e,t,n,Uc(),r),Ru())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Fu().location.href=e}(await xh(e,t,n,Uc(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Fc(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Eh(e),n=new ah(e);return t.register("authEvent",(t=>{Rc(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ph,{type:Ph},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Ph];void 0!==i&&t(!!i),Pc(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dh(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ol()||Il()||Pl()}};var Oh="@firebase/auth",Dh="1.10.0";
/**
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
 */
class Lh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Rc(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const Rh=Po("authIdTokenMaxAge")||300;let Mh=null;function Fh(e=dc()){const t=oc(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=oc(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(jo(n.getOptions(),null!=t?t:{}))return e;Pc(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Nh,persistence:[Wu,Nu,Du]}),r=Po("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Rh)return;const r=null==t?void 0:t.token;Mh!==r&&(Mh=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Wo(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){Wo(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var i;const s=Ao("auth");return s&&Gl(n,`http://${s}`),n}var Uh;Vl={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Nc("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Uh="Browser",sc(new Qo("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Rc(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Uh,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dl(Uh)},c=new Ml(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vl);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),sc(new Qo("auth-internal",(e=>{const t=Fl(e.getProvider("auth").getImmediate());return new Lh(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),fc(Oh,Dh,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Uh)),fc(Oh,Dh,"esm2017");var Vh,jh,zh="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,o=0;o<t;){if(0==s)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return d(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var a=s(0),c=s(1),l=s(16777216);function u(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(c)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new m(a,a);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;0>=r.l(e);)n=v(n),r=v(r);var i=y(n,1),s=y(r,1);for(r=y(r,2),n=y(n,2);!u(r);){var l=s.add(r);0>=l.l(e)&&(i=i.add(n),s=l),r=y(r,1),n=y(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),l=(s=o(n)).j(t);h(l)||0<l.l(e);)l=(s=o(n-=r)).j(t);u(s)&&(s=c),i=i.add(s),e=f(e,l)}return new m(i,e)}function v(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function y(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(u(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:u(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(l)&&0>e.l(l))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var c=this.i(i)>>>16,f=65535&this.i(i),m=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=f*g,p(n,2*i+2*s),n[2*i+2*s+1]+=c*g,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*m,p(n,2*i+2*s+1),n[2*i+2*s+2]+=c*m,p(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,jh=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<t.length;s+=8){var c=Math.min(8,t.length-s),l=parseInt(t.substring(s,s+c),n);8>c?(c=o(Math.pow(n,c)),i=i.j(c).add(o(l))):i=(i=i.j(r)).add(o(l))}return i},Vh=r}).apply(void 0!==zh?zh:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Bh,$h,qh,Hh,Kh,Gh,Wh,Qh,Yh="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Yh&&Yh];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:c).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var v=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function y(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function E(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function S(e){i.setTimeout((()=>{throw e}),0)}function I(){var e=x;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var T=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new k),(e=>e.reset()));class k{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let C,A=!1,x=new class{constructor(){this.h=this.g=null}add(e,t){const n=T.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},P=()=>{const e=i.Promise.resolve(void 0);C=()=>{e.then(N)}};var N=()=>{for(var e;e=I();){try{e.h.call(e.g)}catch(n){S(n)}var t=T;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}A=!1};function O(){this.s=this.s,this.C=this.C}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.s=!1,O.prototype.ma=function(){this.s||(this.s=!0,this.N())},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},D.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function R(e,t){if(D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(v){e:{try{g(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:M[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&R.aa.h.call(this)}}h(R,D);var M={2:"touch",3:"pen",4:"mouse"};R.prototype.h=function(){R.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),U=0;function V(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++U,this.da=this.fa=!1}function j(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function z(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(j(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function $(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}z.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=$(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new V(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var q="closure_lm_"+(1e6*Math.random()|0),H={};function K(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)K(e,t[s],n,r,i);return null}return n=Z(n),e&&e[F]?e.K(t,n,!!o(r)&&!!r.capture,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,c=J(e);if(c||(e[q]=c=new z(e)),n=c.add(t,n,r,a,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Y;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function G(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)G(e,t[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),e&&e[F]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=$(s=e.g[t],n,r,i))&&(j(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=J(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$(t,n,r,i)),(n=-1<e?t[e]:null)&&W(n))}function W(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[F])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=J(t))?(B(n,e),0==n.h&&(n.src=null,t[q]=null)):j(e)}}}function Q(e){return e in H?H[e]:H[e]="on"+e}function Y(e,t){if(e.da)e=!0;else{t=new R(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&W(e),e=n.call(r,t)}return e}function J(e){return(e=e[q])instanceof z?e:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[X]||(e[X]=function(t){return e.handleEvent(t)}),e[X])}function ee(){O.call(this),this.i=new z(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var i=t;_(t=new D(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ne(o,r,!0,t)&&i}if(i=ne(o=t.g=e,r,!0,t)&&i,i=ne(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(o=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&B(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=l(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=l(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,O),ee.prototype[F]=!0,ee.prototype.removeEventListener=function(e,t,n,r){G(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)j(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends O{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){O.call(this),this.h=e,this.g={}}h(oe,O);var ae=[];function ce(e){y(e.g,(function(e,t){this.g.hasOwnProperty(t)&&W(e)}),e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),ce(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var le=i.JSON.stringify,ue=i.JSON.parse,he=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){D.call(this,"d")}function ve(){D.call(this,"c")}h(ge,D),h(ve,D);var ye={},we=null;function be(){return we=we||new ee}function _e(e){D.call(this,ye.La,e)}function Ee(e){const t=be();te(t,new _e(t))}function Se(e,t){D.call(this,ye.STAT_EVENT,e),this.stat=t}function Ie(e){const t=be();te(t,new Se(t,e))}function Te(e,t){D.call(this,ye.Ma,e),this.size=t}function ke(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function Ce(){this.g=!0}function Ae(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return le(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}ye.La="serverreachability",h(_e,D),ye.STAT_EVENT="statevent",h(Se,D),ye.Ma="timingevent",h(Te,D),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var xe,Pe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Oe(){}function De(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Le}function Le(){this.i=null,this.g="",this.h=!1}h(Oe,de),Oe.prototype.g=function(){return new XMLHttpRequest},Oe.prototype.i=function(){return{}},xe=new Oe;var Re={},Me={};function Fe(e,t,n){e.L=1,e.v=lt(it(t)),e.m=n,e.P=!0,Ue(e,null)}function Ue(e,t){e.F=Date.now(),ze(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Et(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Le,e.g=un(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(l(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ae[0]=i.toString()),i=ae);for(var s=0;s<i.length;s++){var o=K(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ee(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ve(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function je(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Me:(n=Number(t.substring(n,r)),isNaN(n)?Re:(r+=1)+n>t.length?Me:(t=t.slice(r,r+n),e.C=r+n,t))}function ze(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ke(l(e.ba,e),t)}function $e(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function qe(e){0==e.j.G||e.J||sn(e.j,e)}function He(e){$e(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ce(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Ke(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Je(n.h,e)))if(!e.K&&Je(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;rn(n),Gt(n)}en(n),Ie(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=ke(l(n.Za,n),6e3));if(1>=Ye(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else an(n,11)}else if((e.K||n.g==e)&&rn(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.K=l[1],n.ia=l[2];const t=l[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=l[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Xe(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ct(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=ln(r,r.J?r.ia:null,r.W),o.K){Ze(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&($e(a),ze(a)),r.g=o}else Zt(r);0<n.i.length&&Qt(n)}else"stop"!=l[0]&&"close"!=l[0]||an(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?an(n,7):Kt(n):"noop"!=l[0]&&n.l&&n.l.ta(l),n.v=0)}Ee()}catch(u){}}De.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Bt(e)?t.j():this.Y(e)},De.prototype.Y=function(e){try{if(e==this.g)e:{const d=Bt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||$t(this.g)))){this.J||4!=d||7==t||Ee(),$e(this);var n=this.g.Z();this.X=n;t:if(Ve(this)){var r=$t(this.g);e="";var s=r.length,o=4==Bt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){He(this),qe(this);var a="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(c)){var u=c;break t}}u=null}if(!(n=u)){this.o=!1,this.s=3,Ie(12),He(this),qe(this);break e}Ae(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ke(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=je(this,a),e==Me){4==d&&(this.s=4,Ie(14),n=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}if(e==Re){this.s=4,Ie(15),Ae(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Ae(this.i,this.l,e,null),Ke(this,e)}if(Ve(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Ie(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tn(h),h.M=!0,Ie(11))}}else Ae(this.i,this.l,a,"[Invalid Chunked Response]"),He(this),qe(this)}else Ae(this.i,this.l,a,null),Ke(this,a);4==d&&He(this),this.o&&!this.J&&(4==d?sn(this.j,this):(this.o=!1,ze(this)))}else(function(e){const t={};e=(e.g&&2<=Bt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=E(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Ie(12)):(this.s=0,Ie(13)),He(this),qe(this)}}}catch(d){}},De.prototype.cancel=function(){this.J=!0,He(this)},De.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(Ee(),Ie(17)),He(this),this.s=2,qe(this)):Be(this,this.S-e)};var Ge=class{constructor(e,t){this.g=e,this.map=t}};function We(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ye(e){return e.h?1:e.g?e.g.size:0}function Je(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Xe(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}We.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,ot(this,e.s),this.l=e.l;var t=e.i,n=new yt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),at(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,st(this,t[1]||"",!0),this.o=ut(t[2]||""),this.g=ut(t[3]||"",!0),ot(this,t[4]),this.l=ut(t[5]||"",!0),at(this,t[6]||"",!0),this.m=ut(t[7]||"")):(this.h=!1,this.i=new yt(null,this.h))}function it(e){return new rt(e)}function st(e,t,n){e.j=n?ut(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ot(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function at(e,t,n){t instanceof yt?(e.i=t,function(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(bt(this,t),Et(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=ht(t,gt)),e.i=new yt(t,e.h))}function ct(e,t,n){e.i.set(t,n)}function lt(e){return ct(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ut(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ht(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,dt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function dt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ht(t,ft,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ht(t,ft,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ht(n,"/"==n.charAt(0)?mt:pt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ht(n,vt)),e.join("")};var ft=/[#\/\?@]/g,pt=/[#\?:]/g,mt=/[#\?]/g,gt=/[#\?@]/g,vt=/#/g;function yt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function bt(e,t){wt(e),t=St(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _t(e,t){return wt(e),t=St(e,t),e.g.has(t)}function Et(e,t,n){bt(e,t),0<n.length&&(e.i=null,e.g.set(St(e,t),d(n)),e.h+=n.length)}function St(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function It(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Tt(){this.g=new he}function kt(e,t,n){const r=n||"";try{tt(e,(function(e,n){let i=e;o(e)&&(i=le(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(dx){throw t.push(r+"type="+encodeURIComponent("_badmap")),dx}}function Ct(e){this.l=e.Ub||null,this.j=e.eb||!1}function At(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function xt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Pt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Nt(e)}function Nt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Ot(e){let t="";return y(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Dt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ot(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ct(e,t,n))}function Lt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=yt.prototype).add=function(e,t){wt(this),this.i=null,e=St(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){wt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){wt(this);let t=[];if("string"==typeof e)_t(this,e)&&(t=t.concat(this.g.get(St(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return wt(this),this.i=null,_t(this,e=St(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},h(Ct,de),Ct.prototype.g=function(){return new At(this.l,this.j)},Ct.prototype.i=function(e){return function(){return e}}({}),h(At,ee),(e=At.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Nt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Nt(this)),this.g&&(this.readyState=3,Nt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pt(this):Nt(this),3==this.readyState&&xt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Pt(this))},e.Qa=function(e){this.g&&(this.response=e,Pt(this))},e.ga=function(){this.g&&Pt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(At.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Lt,ee);var Rt=/^https?$/i,Mt=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Ut(e),jt(e)}function Ut(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Vt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=Bt(e)||2!=e.Z()))if(e.u&&4==Bt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==Bt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var o=String(e.D).match(nt)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Rt.test(o?o.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<Bt(e)?e.g.statusText:""}catch(c){a=""}e.l=a+" ["+e.Z()+"]",Ut(e)}}finally{jt(e)}}}function jt(e,t){if(e.g){zt(e);const n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{n.onreadystatechange=r}catch(dx){}}}function zt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function Bt(e){return e.g?e.g.readyState:0}function $t(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function qt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ht(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qt("baseRetryDelayMs",5e3,e),this.cb=qt("retryDelaySeedMs",1e4,e),this.Wa=qt("forwardChannelMaxRetries",2,e),this.wa=qt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new We(e&&e.concurrentRequestLimit),this.Da=new Tt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Kt(e){if(Wt(e),3==e.G){var t=e.U++,n=it(e.I);if(ct(n,"SID",e.K),ct(n,"RID",t),ct(n,"TYPE","terminate"),Jt(e,n),(t=new De(e,e.j,t)).L=2,t.v=lt(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=un(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ze(t)}cn(e)}function Gt(e){e.g&&(tn(e),e.g.cancel(),e.g=null)}function Wt(e){Gt(e),e.u&&(i.clearTimeout(e.u),e.u=null),rn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Qt(e){if(!Qe(e.h)&&!e.s){e.s=!0;var t=e.Ga;C||P(),A||(C(),A=!0),x.add(t,e),e.B=0}}function Yt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);ct(r,"SID",e.K),ct(r,"RID",n),ct(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Dt(r,e.m,e.o),n=new De(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Xt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Xe(e.h,n),Fe(n,r,t)}function Jt(e,t){e.H&&y(e.H,(function(e,n){ct(t,n,e)})),e.l&&tt({},(function(e,n){ct(t,n,e)}))}function Xt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?l(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{kt(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Zt(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;C||P(),A||(C(),A=!0),x.add(t,e),e.v=0}}function en(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=ke(l(e.Fa,e),on(e,e.v)),e.v++,!0)}function tn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function nn(e){e.g=new De(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);ct(t,"RID","rpc"),ct(t,"SID",e.K),ct(t,"AID",e.T),ct(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ct(t,"TO",e.ja),ct(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Dt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=lt(it(t)),n.m=null,n.P=!0,Ue(n,e)}function rn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function sn(e,t){var n=null;if(e.g==t){rn(e),tn(e),e.g=null;var r=2}else{if(!Je(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=be(),new Te(r,n)),Qt(e)}else Zt(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Ye(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=ke(l(e.Ga,e,t),on(e,e.B)),e.B++,0)))}(e,t)||2==r&&en(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:an(e,5);break;case 4:an(e,10);break;case 3:an(e,6);break;default:an(e,2)}}function on(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function an(e,t){if(e.j.info("Error code "+t),2==t){var n=l(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),lt(r),t?function(e,t){const n=new Ce;if(i.Image){const r=new Image;r.onload=u(It,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(It,n,"TestLoadImage: error",!1,t,r),r.onabort=u(It,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(It,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ce;const n=new AbortController,r=setTimeout((()=>{n.abort(),It(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?It(0,0,!0,t):It(0,0,!1,t)})).catch((()=>{clearTimeout(r),It(0,0,!1,t)}))}(r.toString(),n)}else Ie(2);e.G=0,e.l&&e.l.sa(t),cn(e),Wt(e)}function cn(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function ln(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ot(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var o=new rt(null);r&&st(o,r),t&&(o.g=t),s&&ot(o,s),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&ct(r,n,t),ct(r,"VER",e.la),Jt(e,r),r}function un(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Lt(new Ct({eb:n})):new Lt(e.pa)).Ha(e.J),t}function hn(){}function dn(){}function fn(e,t){ee.call(this),this.g=new Ht(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new gn(this)}function pn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mn(){ve.call(this),this.status=1}function gn(e){this.g=e}(e=Lt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xe.g(),this.v=this.o?fe(this.o):fe(xe),this.g.onreadystatechange=l(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Ft(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Mt,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zt(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){Ft(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),jt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jt(this,!0)),Lt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Vt(this):this.bb())},e.bb=function(){Vt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ue(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Ht.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Ie(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=ln(this,null,this.W),Qt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new De(this,this.j,e);let s=this.o;if(this.S&&(s?(s=w(s),_(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Xt(this,i,t),ct(n=it(this.I),"RID",e),ct(n,"CVER",22),this.D&&ct(n,"X-HTTP-Session-Id",this.D),Jt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Ot(s)))+"&"+t:this.m&&Dt(n,this.m,s)),Xe(this.h,i),this.Ua&&ct(n,"TYPE","init"),this.P?(ct(n,"$req",t),ct(n,"SID","null"),i.T=!0,Fe(i,n,null)):Fe(i,n,t),this.G=2}}else 3==this.G&&(e?Yt(this,e):0==this.i.length||Qe(this.h)||Yt(this))},e.Fa=function(){if(this.u=null,nn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=ke(l(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ie(10),Gt(this),nn(this))},e.Za=function(){null!=this.C&&(this.C=null,Gt(this),en(this),Ie(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=hn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},dn.prototype.g=function(e,t){return new fn(e,t)},h(fn,ee),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Kt(this.g)},fn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=le(e),e=n);t.i.push(new Ge(t.Ya++,e)),3==t.G&&Qt(t)},fn.prototype.N=function(){this.g.l=null,delete this.j,Kt(this.g),delete this.g,fn.aa.N.call(this)},h(pn,ge),h(mn,ve),h(gn,hn),gn.prototype.ua=function(){te(this.g,"a")},gn.prototype.ta=function(e){te(this.g,new pn(e))},gn.prototype.sa=function(e){te(this.g,new mn)},gn.prototype.ra=function(){te(this.g,"b")},dn.prototype.createWebChannel=dn.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,Qh=function(){return new dn},Wh=function(){return be()},Gh=ye,Kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pe.NO_ERROR=0,Pe.TIMEOUT=8,Pe.HTTP_ERROR=6,Hh=Pe,Ne.COMPLETE="complete",qh=Ne,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,$h=pe,Lt.prototype.listenOnce=Lt.prototype.L,Lt.prototype.getLastError=Lt.prototype.Ka,Lt.prototype.getLastErrorCode=Lt.prototype.Ba,Lt.prototype.getStatus=Lt.prototype.Z,Lt.prototype.getResponseJson=Lt.prototype.Oa,Lt.prototype.getResponseText=Lt.prototype.oa,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Ha,Bh=Lt}).apply(void 0!==Yh?Yh:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Jh="@firebase/firestore",Xh="4.7.10";
/**
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
 */class Zh{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zh.UNAUTHENTICATED=new Zh(null),Zh.GOOGLE_CREDENTIALS=new Zh("google-credentials-uid"),Zh.FIRST_PARTY=new Zh("first-party-uid"),Zh.MOCK_USER=new Zh("mock-user");
/**
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
 */
let ed="11.5.0";
/**
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
 */const td=new sa("@firebase/firestore");function nd(){return td.logLevel}function rd(e,...t){if(td.logLevel<=Zo.DEBUG){const n=t.map(od);td.debug(`Firestore (${ed}): ${e}`,...n)}}function id(e,...t){if(td.logLevel<=Zo.ERROR){const n=t.map(od);td.error(`Firestore (${ed}): ${e}`,...n)}}function sd(e,...t){if(td.logLevel<=Zo.WARN){const n=t.map(od);td.warn(`Firestore (${ed}): ${e}`,...n)}}function od(e){if("string"==typeof e)return e;try{
/**
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
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
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
 */function ad(e="Unexpected state"){const t=`FIRESTORE (${ed}) INTERNAL ASSERTION FAILED: `+e;throw id(t),new Error(t)}function cd(e,t){e||ad()}function ld(e,t){return e}
/**
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
 */const ud={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class hd extends Fo{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class dd{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class fd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Zh.UNAUTHENTICATED)))}shutdown(){}}class md{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class gd{constructor(e){this.t=e,this.currentUser=Zh.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){cd(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new dd;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dd,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{rd("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(rd("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dd)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(rd("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(cd("string"==typeof t.accessToken),new fd(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return cd(null===e||"string"==typeof e),new Zh(e)}}class vd{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Zh.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class yd{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new vd(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Zh.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bd{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ac(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){cd(void 0===this.o);const n=e=>{null!=e.error&&rd("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,rd("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{rd("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):rd("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new wd(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(cd("string"==typeof e.token),this.R=e.token,new wd(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
 */function _d(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */function Ed(){return new TextEncoder}
/**
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
 */class Sd{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=_d(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function Id(e,t){return e<t?-1:e>t?1:0}function Td(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),i=t.codePointAt(n);if(r!==i){if(r<128&&i<128)return Id(r,i);{const s=Ed(),o=Cd(s.encode(kd(e,n)),s.encode(kd(t,n)));return 0!==o?o:Id(r,i)}}n+=r>65535?2:1}return Id(e.length,t.length)}function kd(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function Cd(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return Id(e[n],t[n]);return Id(e.length,t.length)}function Ad(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
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
 */const xd=-62135596800,Pd=1e6;class Nd{static now(){return Nd.fromMillis(Date.now())}static fromDate(e){return Nd.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Pd);return new Nd(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new hd(ud.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new hd(ud.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xd)throw new hd(ud.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new hd(ud.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pd}_compareTo(e){return this.seconds===e.seconds?Id(this.nanoseconds,e.nanoseconds):Id(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-xd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class Od{static fromTimestamp(e){return new Od(e)}static min(){return new Od(new Nd(0,0))}static max(){return new Od(new Nd(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */const Dd="__name__";class Ld{constructor(e,t,n){void 0===t?t=0:t>e.length&&ad(),void 0===n?n=e.length-t:n>e.length-t&&ad(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ld.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ld?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=Ld.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Id(e.length,t.length)}static compareSegments(e,t){const n=Ld.isNumericId(e),r=Ld.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Ld.extractNumericId(e).compare(Ld.extractNumericId(t)):Td(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vh.fromString(e.substring(4,e.length-2))}}class Rd extends Ld{construct(e,t,n){return new Rd(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new hd(ud.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Rd(t)}static emptyPath(){return new Rd([])}}const Md=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fd extends Ld{construct(e,t,n){return new Fd(e,t,n)}static isValidIdentifier(e){return Md.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fd.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Dd}static keyField(){return new Fd([Dd])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new hd(ud.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new hd(ud.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new hd(ud.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new hd(ud.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fd(t)}static emptyPath(){return new Fd([])}}
/**
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
 */class Ud{constructor(e){this.path=e}static fromPath(e){return new Ud(Rd.fromString(e))}static fromName(e){return new Ud(Rd.fromString(e).popFirst(5))}static empty(){return new Ud(Rd.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Rd.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Rd.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ud(new Rd(e.slice()))}}
/**
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
 */function Vd(e){return new jd(e.readTime,e.key,-1)}class jd{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new jd(Od.min(),Ud.empty(),-1)}static max(){return new jd(Od.max(),Ud.empty(),-1)}}function zd(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ud.comparator(e.documentKey,t.documentKey),0!==n?n:Id(e.largestBatchId,t.largestBatchId)
/**
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
 */)}class Bd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */async function $d(e){if(e.code!==ud.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;rd("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class qd{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ad(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new qd(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof qd?t:qd.resolve(t)}catch(t){return qd.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):qd.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):qd.reject(t)}static resolve(e){return new qd(((t,n)=>{t(e)}))}static reject(e){return new qd(((t,n)=>{n(e)}))}static waitFor(e){return new qd(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=qd.resolve(!1);for(const n of e)t=t.next((e=>e?qd.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new qd(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new qd(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function Hd(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */class Kd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Kd.ae=-1;function Gd(e){return null==e}function Wd(e){return 0===e&&1/e==-1/0}function Qd(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Yd(e){return e+""}
/**
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
 */function Jd(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Xd(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Zd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class ef{constructor(e,t){this.comparator=e,this.root=t||nf.EMPTY}insert(e,t){return new ef(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nf.BLACK,null,null))}remove(e){return new ef(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nf.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tf(this.root,e,this.comparator,!1)}getReverseIterator(){return new tf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tf(this.root,e,this.comparator,!0)}}class tf{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nf{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:nf.RED,this.left=null!=r?r:nf.EMPTY,this.right=null!=i?i:nf.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new nf(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return nf.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return nf.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nf.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nf.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ad();if(this.right.isRed())throw ad();const e=this.left.check();if(e!==this.right.check())throw ad();return e+(this.isRed()?0:1)}}nf.EMPTY=null,nf.RED=!0,nf.BLACK=!1,nf.EMPTY=new class{constructor(){this.size=0}get key(){throw ad()}get value(){throw ad()}get color(){throw ad()}get left(){throw ad()}get right(){throw ad()}copy(e,t,n,r,i){return this}insert(e,t,n){return new nf(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class rf{constructor(e){this.comparator=e,this.data=new ef(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sf(this.data.getIterator())}getIteratorFrom(e){return new sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof rf))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new rf(this.comparator);return t.data=e,t}}class sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */class of{constructor(e){this.fields=e,e.sort(Fd.comparator)}static empty(){return new of([])}unionWith(e){let t=new rf(Fd.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new of(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ad(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */class af extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */class cf{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new af("Invalid base64 string: "+t):t}}(e);return new cf(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new cf(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Id(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cf.EMPTY_BYTE_STRING=new cf("");const lf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function uf(e){if(cd(!!e),"string"==typeof e){let t=0;const n=lf.exec(e);if(cd(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:hf(e.seconds),nanos:hf(e.nanos)}}function hf(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function df(e){return"string"==typeof e?cf.fromBase64String(e):cf.fromUint8Array(e)}
/**
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
 */const ff="server_timestamp",pf="__type__",mf="__previous_value__",gf="__local_write_time__";function vf(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[pf])||void 0===n?void 0:n.stringValue)===ff}function yf(e){const t=e.mapValue.fields[mf];return vf(t)?yf(t):t}function wf(e){const t=uf(e.mapValue.fields[gf].timestampValue);return new Nd(t.seconds,t.nanos)}
/**
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
 */class bf{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}const _f="(default)";class Ef{constructor(e,t){this.projectId=e,this.database=t||_f}static empty(){return new Ef("","")}get isDefaultDatabase(){return this.database===_f}isEqual(e){return e instanceof Ef&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const Sf="__type__",If="__max__",Tf={},kf="__vector__",Cf="value";function Af(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?vf(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===If}
/**
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
 */(e)?9007199254740991:function(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Sf])||void 0===n?void 0:n.stringValue)===kf}(e)?10:11:ad()}function xf(e,t){if(e===t)return!0;const n=Af(e);if(n!==Af(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return wf(e).isEqual(wf(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=uf(e.timestampValue),r=uf(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,df(e.bytesValue).isEqual(df(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return hf(e.geoPointValue.latitude)===hf(t.geoPointValue.latitude)&&hf(e.geoPointValue.longitude)===hf(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return hf(e.integerValue)===hf(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=hf(e.doubleValue),r=hf(t.doubleValue);return n===r?Wd(n)===Wd(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ad(e.arrayValue.values||[],t.arrayValue.values||[],xf);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Jd(n)!==Jd(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!xf(n[i],r[i])))return!1;return!0}(e,t);default:return ad()}var r}function Pf(e,t){return void 0!==(e.values||[]).find((e=>xf(e,t)))}function Nf(e,t){if(e===t)return 0;const n=Af(e),r=Af(t);if(n!==r)return Id(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Id(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=hf(e.integerValue||e.doubleValue),r=hf(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Of(e.timestampValue,t.timestampValue);case 4:return Of(wf(e),wf(t));case 5:return Td(e.stringValue,t.stringValue);case 6:return function(e,t){const n=df(e),r=df(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Id(n[i],r[i]);if(0!==e)return e}return Id(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Id(hf(e.latitude),hf(t.latitude));return 0!==n?n:Id(hf(e.longitude),hf(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Df(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const o=e.fields||{},a=t.fields||{},c=null===(n=o[Cf])||void 0===n?void 0:n.arrayValue,l=null===(r=a[Cf])||void 0===r?void 0:r.arrayValue,u=Id((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==l?void 0:l.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:Df(c,l)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Tf&&t===Tf)return 0;if(e===Tf)return 1;if(t===Tf)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Td(r[o],s[o]);if(0!==e)return e;const t=Nf(n[r[o]],i[s[o]]);if(0!==t)return t}return Id(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ad()}}function Of(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Id(e,t);const n=uf(e),r=uf(t),i=Id(n.seconds,r.seconds);return 0!==i?i:Id(n.nanos,r.nanos)}function Df(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Nf(n[i],r[i]);if(e)return e}return Id(n.length,r.length)}function Lf(e){return Rf(e)}function Rf(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=uf(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?df(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Ud.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Rf(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Rf(e.fields[i])}`;return n+"}"}(e.mapValue):ad()}function Mf(e){switch(Af(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=yf(e);return t?16+Mf(t):16;case 5:return 2*e.stringValue.length;case 6:return df(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce(((e,t)=>e+Mf(t)),0);case 10:case 11:return function(e){let t=0;return Xd(e.fields,((e,n)=>{t+=e.length+Mf(n)})),t}(e.mapValue);default:throw ad()}}function Ff(e){return!!e&&"integerValue"in e}function Uf(e){return!!e&&"arrayValue"in e}function Vf(e){return!!e&&"nullValue"in e}function jf(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zf(e){return!!e&&"mapValue"in e}function Bf(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Xd(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Bf(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Bf(e.arrayValue.values[n]);return t}return Object.assign({},e)}class $f{constructor(e){this.value=e}static empty(){return new $f({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!zf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bf(t)}setAll(e){let t=Fd.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Bf(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());zf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xf(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];zf(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Xd(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new $f(Bf(this.value))}}function qf(e){const t=[];return Xd(e.fields,((e,n)=>{const r=new Fd([e]);if(zf(n)){const e=qf(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new of(t)
/**
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
 */}class Hf{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Hf(e,0,Od.min(),Od.min(),Od.min(),$f.empty(),0)}static newFoundDocument(e,t,n,r){return new Hf(e,1,t,Od.min(),n,r,0)}static newNoDocument(e,t){return new Hf(e,2,t,Od.min(),Od.min(),$f.empty(),0)}static newUnknownDocument(e,t){return new Hf(e,3,t,Od.min(),Od.min(),$f.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Od.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$f.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$f.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Od.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Hf&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Hf(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Kf{constructor(e,t){this.position=e,this.inclusive=t}}function Gf(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ud.comparator(Ud.fromName(o.referenceValue),n.key):Nf(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Wf(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!xf(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Qf{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class Jf{}class Xf extends Jf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new sp(e,t,n):"array-contains"===t?new lp(e,n):"in"===t?new up(e,n):"not-in"===t?new hp(e,n):"array-contains-any"===t?new dp(e,n):new Xf(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new op(e,n):new ap(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Nf(t,this.value)):null!==t&&Af(this.value)===Af(t)&&this.matchesComparison(Nf(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ad()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zf extends Jf{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Zf(e,t)}matches(e){return ep(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ep(e){return"and"===e.op}function tp(e){return function(e){for(const t of e.filters)if(t instanceof Zf)return!1;return!0}(e)&&ep(e)}function np(e){if(e instanceof Xf)return e.field.canonicalString()+e.op.toString()+Lf(e.value);if(tp(e))return e.filters.map((e=>np(e))).join(",");{const t=e.filters.map((e=>np(e))).join(",");return`${e.op}(${t})`}}function rp(e,t){return e instanceof Xf?(n=e,(r=t)instanceof Xf&&n.op===r.op&&n.field.isEqual(r.field)&&xf(n.value,r.value)):e instanceof Zf?function(e,t){return t instanceof Zf&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&rp(n,t.filters[r])),!0)}(e,t):void ad();var n,r}function ip(e){return e instanceof Xf?`${(t=e).field.canonicalString()} ${t.op} ${Lf(t.value)}`:e instanceof Zf?function(e){return e.op.toString()+" {"+e.getFilters().map(ip).join(" ,")+"}"}(e):"Filter";var t}class sp extends Xf{constructor(e,t,n){super(e,t,n),this.key=Ud.fromName(n.referenceValue)}matches(e){const t=Ud.comparator(e.key,this.key);return this.matchesComparison(t)}}class op extends Xf{constructor(e,t){super(e,"in",t),this.keys=cp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ap extends Xf{constructor(e,t){super(e,"not-in",t),this.keys=cp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function cp(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ud.fromName(e.referenceValue)))}class lp extends Xf{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Uf(t)&&Pf(t.arrayValue,this.value)}}class up extends Xf{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Pf(this.value.arrayValue,t)}}class hp extends Xf{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pf(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Pf(this.value.arrayValue,t)}}class dp extends Xf{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Uf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Pf(this.value.arrayValue,e)))}}
/**
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
 */class fp{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function pp(e,t=null,n=[],r=[],i=null,s=null,o=null){return new fp(e,t,n,r,i,s,o)}function mp(e){const t=ld(e);if(null===t.le){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>np(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Gd(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Lf(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Lf(e))).join(",")),t.le=e}return t.le}function gp(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Yf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!rp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wf(e.startAt,t.startAt)&&Wf(e.endAt,t.endAt)}function vp(e){return Ud.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
 */class yp{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function wp(e){return new yp(e)}function bp(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function _p(e){const t=ld(e);if(null===t.he){t.he=[];const e=new Set;for(const r of t.explicitOrderBy)t.he.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new rf(Fd.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.he.push(new Qf(r,n))})),e.has(Fd.keyField().canonicalString())||t.he.push(new Qf(Fd.keyField(),n))}return t.he}function Ep(e){const t=ld(e);return t.Pe||(t.Pe=function(e,t){if("F"===e.limitType)return pp(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Qf(e.field,t)}));const n=e.endAt?new Kf(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Kf(e.startAt.position,e.startAt.inclusive):null;return pp(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,_p(e))),t.Pe}function Sp(e,t,n){return new yp(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ip(e,t){return gp(Ep(e),Ep(t))&&e.limitType===t.limitType}function Tp(e){return`${mp(Ep(e))}|lt:${e.limitType}`}function kp(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ip(e))).join(", ")}]`),Gd(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Lf(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Lf(e))).join(",")),`Target(${t})`}(Ep(e))}; limitType=${e.limitType})`}function Cp(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ud.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of _p(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Gf(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,_p(n),r)||n.endAt&&!function(e,t,n){const r=Gf(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,_p(n),r)));var n,r}function Ap(e){return(t,n)=>{let r=!1;for(const i of _p(e)){const e=xp(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function xp(e,t,n){const r=e.field.isKeyField()?Ud.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Nf(r,i):ad()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ad()}}
/**
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
 */class Pp{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Xd(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Zd(this.inner)}size(){return this.innerSize}}
/**
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
 */const Np=new ef(Ud.comparator);function Op(){return Np}const Dp=new ef(Ud.comparator);function Lp(...e){let t=Dp;for(const n of e)t=t.insert(n.key,n);return t}function Rp(e){let t=Dp;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Mp(){return Up()}function Fp(){return Up()}function Up(){return new Pp((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Vp=new ef(Ud.comparator),jp=new rf(Ud.comparator);function zp(...e){let t=jp;for(const n of e)t=t.add(n);return t}const Bp=new rf(Id);
/**
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
 */
function $p(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wd(t)?"-0":t}}function qp(e){return{integerValue:""+e}}function Hp(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Wd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */(t)?qp(t):$p(e,t)}
/**
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
 */class Kp{constructor(){this._=void 0}}function Gp(e,t,n){return e instanceof Yp?function(e,t){const n={fields:{[pf]:{stringValue:ff},[gf]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&vf(t)&&(t=yf(t)),t&&(n.fields[mf]=t),{mapValue:n}}(n,t):e instanceof Jp?Xp(e,t):e instanceof Zp?em(e,t):function(e,t){const n=Qp(e,t),r=nm(n)+nm(e.Ie);return Ff(n)&&Ff(e.Ie)?qp(r):$p(e.serializer,r)}(e,t)}function Wp(e,t,n){return e instanceof Jp?Xp(e,t):e instanceof Zp?em(e,t):n}function Qp(e,t){return e instanceof tm?Ff(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class Yp extends Kp{}class Jp extends Kp{constructor(e){super(),this.elements=e}}function Xp(e,t){const n=rm(t);for(const r of e.elements)n.some((e=>xf(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Zp extends Kp{constructor(e){super(),this.elements=e}}function em(e,t){let n=rm(t);for(const r of e.elements)n=n.filter((e=>!xf(e,r)));return{arrayValue:{values:n}}}class tm extends Kp{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function nm(e){return hf(e.integerValue||e.doubleValue)}function rm(e){return Uf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class im{constructor(e,t){this.field=e,this.transform=t}}class sm{constructor(e,t){this.version=e,this.transformResults=t}}class om{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new om}static exists(e){return new om(void 0,e)}static updateTime(e){return new om(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function am(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class cm{}function lm(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new wm(e.key,om.none()):new pm(e.key,e.data,om.none());{const n=e.data,r=$f.empty();let i=new rf(Fd.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new mm(e.key,r,new of(i.toArray()),om.none())}}function um(e,t,n){var r;e instanceof pm?function(e,t,n){const r=e.value.clone(),i=vm(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof mm?function(e,t,n){if(!am(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=vm(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(gm(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function hm(e,t,n,r){return e instanceof pm?function(e,t,n,r){if(!am(e.precondition,t))return n;const i=e.value.clone(),s=ym(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof mm?function(e,t,n,r){if(!am(e.precondition,t))return n;const i=ym(e.fieldTransforms,r,t),s=t.data;return s.setAll(gm(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,am(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function dm(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Qp(r.transform,e||null);null!=i&&(null===n&&(n=$f.empty()),n.set(r.field,i))}return n||null}function fm(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Ad(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Jp&&r instanceof Jp||n instanceof Zp&&r instanceof Zp?Ad(n.elements,r.elements,xf):n instanceof tm&&r instanceof tm?xf(n.Ie,r.Ie):n instanceof Yp&&r instanceof Yp);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class pm extends cm{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class mm extends cm{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gm(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function vm(e,t,n){const r=new Map;cd(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Wp(o,a,n[i]))}return r}function ym(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Gp(e,s,t))}return r}class wm extends cm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bm extends cm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class _m{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&um(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=hm(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=hm(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Fp();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=lm(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Od.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),zp())}isEqual(e){return this.batchId===e.batchId&&Ad(this.mutations,e.mutations,((e,t)=>fm(e,t)))&&Ad(this.baseMutations,e.baseMutations,((e,t)=>fm(e,t)))}}class Em{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){cd(e.mutations.length===n.length);let r=function(){return Vp}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Em(e,t,n,r)}}
/**
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
 */class Sm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class Im{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var Tm,km;function Cm(e){if(void 0===e)return id("GRPC error has no .code"),ud.UNKNOWN;switch(e){case Tm.OK:return ud.OK;case Tm.CANCELLED:return ud.CANCELLED;case Tm.UNKNOWN:return ud.UNKNOWN;case Tm.DEADLINE_EXCEEDED:return ud.DEADLINE_EXCEEDED;case Tm.RESOURCE_EXHAUSTED:return ud.RESOURCE_EXHAUSTED;case Tm.INTERNAL:return ud.INTERNAL;case Tm.UNAVAILABLE:return ud.UNAVAILABLE;case Tm.UNAUTHENTICATED:return ud.UNAUTHENTICATED;case Tm.INVALID_ARGUMENT:return ud.INVALID_ARGUMENT;case Tm.NOT_FOUND:return ud.NOT_FOUND;case Tm.ALREADY_EXISTS:return ud.ALREADY_EXISTS;case Tm.PERMISSION_DENIED:return ud.PERMISSION_DENIED;case Tm.FAILED_PRECONDITION:return ud.FAILED_PRECONDITION;case Tm.ABORTED:return ud.ABORTED;case Tm.OUT_OF_RANGE:return ud.OUT_OF_RANGE;case Tm.UNIMPLEMENTED:return ud.UNIMPLEMENTED;case Tm.DATA_LOSS:return ud.DATA_LOSS;default:return ad()}}(km=Tm||(Tm={}))[km.OK=0]="OK",km[km.CANCELLED=1]="CANCELLED",km[km.UNKNOWN=2]="UNKNOWN",km[km.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",km[km.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",km[km.NOT_FOUND=5]="NOT_FOUND",km[km.ALREADY_EXISTS=6]="ALREADY_EXISTS",km[km.PERMISSION_DENIED=7]="PERMISSION_DENIED",km[km.UNAUTHENTICATED=16]="UNAUTHENTICATED",km[km.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",km[km.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",km[km.ABORTED=10]="ABORTED",km[km.OUT_OF_RANGE=11]="OUT_OF_RANGE",km[km.UNIMPLEMENTED=12]="UNIMPLEMENTED",km[km.INTERNAL=13]="INTERNAL",km[km.UNAVAILABLE=14]="UNAVAILABLE",km[km.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
const Am=new Vh([4294967295,4294967295],0);function xm(e){const t=Ed().encode(e),n=new jh;return n.update(t),new Uint8Array(n.digest())}function Pm(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Vh([n,r],0),new Vh([i,s],0)]}class Nm{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Om(`Invalid padding: ${t}`);if(n<0)throw new Om(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Om(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Om(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Vh.fromNumber(this.Ee)}Ae(e,t,n){let r=e.add(t.multiply(Vh.fromNumber(n)));return 1===r.compare(Am)&&(r=new Vh([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;const t=xm(e),[n,r]=Pm(t);for(let i=0;i<this.hashCount;i++){const e=this.Ae(n,r,i);if(!this.Re(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Nm(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ee)return;const t=xm(e),[n,r]=Pm(t);for(let i=0;i<this.hashCount;i++){const e=this.Ae(n,r,i);this.Ve(e)}}Ve(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Om extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class Dm{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Lm.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Dm(Od.min(),r,new ef(Id),Op(),zp())}}class Lm{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Lm(n,t,zp(),zp(),zp())}}
/**
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
 */class Rm{constructor(e,t,n,r){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=r}}class Mm{constructor(e,t){this.targetId=e,this.ge=t}}class Fm{constructor(e,t,n=cf.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Um{constructor(){this.pe=0,this.ye=zm(),this.we=cf.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=zp(),t=zp(),n=zp();return this.ye.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ad()}})),new Lm(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=zm()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,cd(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Vm{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Op(),this.$e=jm(),this.Ue=jm(),this.Ke=new ef(Id)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,(t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:ad()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach(((e,n)=>{this.Je(n)&&t(n)}))}Ze(e){const t=e.targetId,n=e.ge.count,r=this.Xe(t);if(r){const i=r.target;if(vp(i))if(0===n){const e=new Ud(i.path);this.ze(t,e,Hf.newNoDocument(e,Od.min()))}else cd(1===n);else{const r=this.et(t);if(r!==n){const n=this.tt(e),i=n?this.nt(n,e,r):1;if(0!==i){this.Ye(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=df(n).toUint8Array()}catch(a){if(a instanceof af)return sd("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new Nm(s,r,i)}catch(a){return sd(a instanceof Om?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ee?null:o}nt(e,t,n){return t.ge.count===n-this.st(e,t.targetId)?0:2}st(e,t){const n=this.ke.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.ze(t,n,null),r++)})),r}ot(e){const t=new Map;this.qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&vp(i.target)){const t=new Ud(i.target.path);this._t(t).has(r)||this.ut(r,t)||this.ze(r,t,Hf.newNoDocument(t,e))}n.ve&&(t.set(r,n.Fe()),n.Me())}}));let n=zp();this.Ue.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Qe.forEach(((t,n)=>n.setReadTime(e)));const r=new Dm(e,t,this.Ke,this.Qe,n);return this.Qe=Op(),this.$e=jm(),this.Ue=jm(),this.Ke=new ef(Id),r}Ge(e,t){if(!this.Je(e))return;const n=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const r=this.He(e);this.ut(e,t)?r.xe(t,1):r.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Um,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new rf(Id),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new rf(Id),this.$e=this.$e.insert(e,t)),t}Je(e){const t=null!==this.Xe(e);return t||rd("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Um),this.ke.getRemoteKeysForTarget(e).forEach((t=>{this.ze(e,t,null)}))}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function jm(){return new ef(Ud.comparator)}function zm(){return new ef(Ud.comparator)}const Bm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$m=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qm=(()=>({and:"AND",or:"OR"}))();class Hm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Km(e,t){return e.useProto3Json||Gd(t)?t:{value:t}}function Gm(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wm(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Qm(e,t){return Gm(e,t.toTimestamp())}function Ym(e){return cd(!!e),Od.fromTimestamp(function(e){const t=uf(e);return new Nd(t.seconds,t.nanos)}(e))}function Jm(e,t){return Xm(e,t).canonicalString()}function Xm(e,t){const n=(r=e,new Rd(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function Zm(e){const t=Rd.fromString(e);return cd(vg(t)),t}function eg(e,t){return Jm(e.databaseId,t.path)}function tg(e,t){const n=Zm(t);if(n.get(1)!==e.databaseId.projectId)throw new hd(ud.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new hd(ud.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ud(ig(n))}function ng(e,t){return Jm(e.databaseId,t)}function rg(e){return new Rd(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ig(e){return cd(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function sg(e,t,n){return{name:eg(e,t),fields:n.value.mapValue.fields}}function og(e,t){return{documents:[ng(e,t.path)]}}function ag(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ng(e,i);const s=function(e){if(0!==e.length)return mg(Zf.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>{return{field:fg((t=e).field),direction:ug(t.dir)};var t}))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Km(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ht:n,parent:i};var c}function cg(e){let t=function(e){const t=Zm(e);return 4===t.length?Rd.emptyPath():ig(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){cd(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=lg(e);return t instanceof Zf&&tp(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Qf(pg((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Gd(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Kf(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new Kf(n,t)}(n.endAt)),function(e,t,n,r,i,s,o,a){return new yp(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,l)}function lg(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=pg(e.unaryFilter.field);return Xf.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=pg(e.unaryFilter.field);return Xf.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=pg(e.unaryFilter.field);return Xf.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=pg(e.unaryFilter.field);return Xf.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ad()}}(e):void 0!==e.fieldFilter?(t=e,Xf.create(pg(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ad()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return Zf.create(e.compositeFilter.filters.map((e=>lg(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ad()}}(e.compositeFilter.op))}(e):ad();var t}function ug(e){return Bm[e]}function hg(e){return $m[e]}function dg(e){return qm[e]}function fg(e){return{fieldPath:e.canonicalString()}}function pg(e){return Fd.fromServerFormat(e.fieldPath)}function mg(e){return e instanceof Xf?function(e){if("=="===e.op){if(jf(e.value))return{unaryFilter:{field:fg(e.field),op:"IS_NAN"}};if(Vf(e.value))return{unaryFilter:{field:fg(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(jf(e.value))return{unaryFilter:{field:fg(e.field),op:"IS_NOT_NAN"}};if(Vf(e.value))return{unaryFilter:{field:fg(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fg(e.field),op:hg(e.op),value:e.value}}}(e):e instanceof Zf?function(e){const t=e.getFilters().map((e=>mg(e)));return 1===t.length?t[0]:{compositeFilter:{op:dg(e.op),filters:t}}}(e):ad()}function gg(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function vg(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class yg{constructor(e,t,n,r,i=Od.min(),s=Od.min(),o=cf.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new yg(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yg(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class wg{constructor(e){this.Tt=e}}function bg(e){const t=cg({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Sp(t,t.limit,"L"):t}
/**
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
 */class _g{constructor(){this.Tn=new Eg}addToCollectionParentIndex(e,t){return this.Tn.add(t),qd.resolve()}getCollectionParents(e,t){return qd.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return qd.resolve()}deleteFieldIndex(e,t){return qd.resolve()}deleteAllFieldIndexes(e){return qd.resolve()}createTargetIndexes(e,t){return qd.resolve()}getDocumentsMatchingTarget(e,t){return qd.resolve(null)}getIndexType(e,t){return qd.resolve(0)}getFieldIndexes(e,t){return qd.resolve([])}getNextCollectionGroupToUpdate(e){return qd.resolve(null)}getMinOffset(e,t){return qd.resolve(jd.min())}getMinOffsetFromCollectionGroup(e,t){return qd.resolve(jd.min())}updateCollectionGroup(e,t,n){return qd.resolve()}updateIndexEntries(e,t){return qd.resolve()}}class Eg{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new rf(Rd.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new rf(Rd.comparator)).toArray()}}
/**
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
 */const Sg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ig=41943040;class Tg{static withCacheSize(e){return new Tg(e,Tg.DEFAULT_COLLECTION_PERCENTILE,Tg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */Tg.DEFAULT_COLLECTION_PERCENTILE=10,Tg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tg.DEFAULT=new Tg(Ig,Tg.DEFAULT_COLLECTION_PERCENTILE,Tg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tg.DISABLED=new Tg(-1,0,0);
/**
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
 */
class kg{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new kg(0)}static Kn(){return new kg(-1)}}
/**
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
 */const Cg="LruGarbageCollector";function Ag([e,t],[n,r]){const i=Id(e,n);return 0===i?Id(t,r):i}class xg{constructor(e){this.Hn=e,this.buffer=new rf(Ag),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ag(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pg{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){rd(Cg,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Hd(e)?rd(Cg,"Ignoring IndexedDB error during garbage collection: ",e):await $d(e)}await this.er(3e5)}))}}class Ng{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return qd.resolve(Kd.ae);const n=new xg(t);return this.tr.forEachTarget(e,(e=>n.Zn(e.sequenceNumber))).next((()=>this.tr.rr(e,(e=>n.Zn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(rd("LruGarbageCollector","Garbage collection skipped; disabled"),qd.resolve(Sg)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(rd("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sg):this.ir(e,t)))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,r,i,s,o,a,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(rd("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),nd()<=Zo.DEBUG&&rd("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+`ms\n\tRemoved ${i} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(c-a)+`ms\nTotal Duration: ${c-l}ms`),qd.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
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
 */
class Og{constructor(){this.changes=new Pp((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Hf.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?qd.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */class Dg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class Lg{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&hm(n.mutation,e,of.empty(),Nd.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,zp()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=zp()){const r=Mp();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Lp();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Mp();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,zp())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Op();const s=Up(),o=Up();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof mm)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),hm(o.mutation,t,o.mutation.getFieldMask(),Nd.now())):s.set(t.key,of.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Dg(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Up();let r=new ef(((e,t)=>e-t)),i=zp();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||of.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||zp()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,l=Fp();c.forEach((e=>{if(!i.has(e)){const r=lm(t.get(e),n.get(e));null!==r&&l.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,l))}return qd.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Ud.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):qd.resolve(Mp());let o=-1,a=i;return s.next((t=>qd.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?qd.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,zp()))).next((e=>({batchId:o,changes:Rp(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ud(t)).next((e=>{let t=Lp();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Lp();return this.indexManager.getCollectionParents(e,i).next((o=>qd.forEach(o,(o=>{const a=(c=t,l=o.child(i),new yp(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,l;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Hf.newInvalidDocument(r)))}));let n=Lp();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&hm(s.mutation,r,of.empty(),Nd.now()),Cp(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
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
 */class Rg{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return qd.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:(n=t).id,version:n.version,createTime:Ym(n.createTime)}),qd.resolve();var n}getNamedQuery(e,t){return qd.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:(n=t).name,query:bg(n.bundledQuery),readTime:Ym(n.readTime)}),qd.resolve();var n}}
/**
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
 */class Mg{constructor(){this.overlays=new ef(Ud.comparator),this.Rr=new Map}getOverlay(e,t){return qd.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Mp();return qd.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Et(e,t,r)})),qd.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Rr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Rr.delete(n)),qd.resolve()}getOverlaysForCollection(e,t,n){const r=Mp(),i=t.length+1,s=new Ud(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return qd.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ef(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Mp(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Mp(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return qd.resolve(o)}Et(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Sm(t,n));let i=this.Rr.get(t);void 0===i&&(i=zp(),this.Rr.set(t,i)),this.Rr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Fg{constructor(){this.sessionToken=cf.EMPTY_BYTE_STRING}getSessionToken(e){return qd.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,qd.resolve()}}
/**
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
 */class Ug{constructor(){this.Vr=new rf(Vg.mr),this.gr=new rf(Vg.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const n=new Vg(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.wr(new Vg(e,t))}Sr(e,t){e.forEach((e=>this.removeReference(e,t)))}br(e){const t=new Ud(new Rd([])),n=new Vg(t,e),r=new Vg(t,e+1),i=[];return this.gr.forEachInRange([n,r],(e=>{this.wr(e),i.push(e.key)})),i}Dr(){this.Vr.forEach((e=>this.wr(e)))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Ud(new Rd([])),n=new Vg(t,e),r=new Vg(t,e+1);let i=zp();return this.gr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Vg(e,0),n=this.Vr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Vg{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Ud.comparator(e.key,t.key)||Id(e.Cr,t.Cr)}static pr(e,t){return Id(e.Cr,t.Cr)||Ud.comparator(e.key,t.key)}}
/**
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
 */class jg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new rf(Vg.mr)}checkEmpty(e){return qd.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new _m(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Mr=this.Mr.add(new Vg(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return qd.resolve(s)}lookupMutationBatch(e,t){return qd.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Nr(n),i=r<0?0:r;return qd.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return qd.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return qd.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Vg(t,0),r=new Vg(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],(e=>{const t=this.Or(e.Cr);i.push(t)})),qd.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rf(Id);return t.forEach((e=>{const t=new Vg(e,0),r=new Vg(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,r],(e=>{n=n.add(e.Cr)}))})),qd.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ud.isDocumentKey(i)||(i=i.child(""));const s=new Vg(new Ud(i),0);let o=new rf(Id);return this.Mr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Cr)),!0)}),s),qd.resolve(this.Br(o))}Br(e){const t=[];return e.forEach((e=>{const n=this.Or(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){cd(0===this.Lr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Mr;return qd.forEach(t.mutations,(r=>{const i=new Vg(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Mr=n}))}qn(e){}containsKey(e,t){const n=new Vg(t,0),r=this.Mr.firstAfterOrEqual(n);return qd.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,qd.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class zg{constructor(e){this.kr=e,this.docs=new ef(Ud.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return qd.resolve(n?n.document.mutableCopy():Hf.newInvalidDocument(t))}getEntries(e,t){let n=Op();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Hf.newInvalidDocument(e))})),qd.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Op();const s=t.path,o=new Ud(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||zd(Vd(o),n)<=0||(r.has(o.key)||Cp(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return qd.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ad()}qr(e,t){return qd.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Bg(this)}getSize(e){return qd.resolve(this.size)}}class Bg extends Og{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(n)})),qd.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}
/**
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
 */class $g{constructor(e){this.persistence=e,this.Qr=new Pp((e=>mp(e)),gp),this.lastRemoteSnapshotVersion=Od.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ug,this.targetCount=0,this.Kr=kg.Un()}forEachTarget(e,t){return this.Qr.forEach(((e,n)=>t(n))),qd.resolve()}getLastRemoteSnapshotVersion(e){return qd.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return qd.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),qd.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),qd.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new kg(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,qd.resolve()}updateTargetData(e,t){return this.zn(t),qd.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,qd.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Qr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),qd.waitFor(i).next((()=>r))}getTargetCount(e){return qd.resolve(this.targetCount)}getTargetData(e,t){const n=this.Qr.get(t)||null;return qd.resolve(n)}addMatchingKeys(e,t,n){return this.Ur.yr(t,n),qd.resolve()}removeMatchingKeys(e,t,n){this.Ur.Sr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),qd.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),qd.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ur.vr(t);return qd.resolve(n)}containsKey(e,t){return qd.resolve(this.Ur.containsKey(t))}}
/**
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
 */class qg{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Kd(0),this.zr=!1,this.zr=!0,this.jr=new Fg,this.referenceDelegate=e(this),this.Hr=new $g(this),this.indexManager=new _g,this.remoteDocumentCache=new zg((e=>this.referenceDelegate.Jr(e))),this.serializer=new wg(t),this.Yr=new Rg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Mg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new jg(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){rd("MemoryPersistence","Starting transaction:",e);const r=new Hg(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next((e=>this.referenceDelegate.Xr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}ei(e,t){return qd.or(Object.values(this.Wr).map((n=>()=>n.containsKey(e,t))))}}class Hg extends Bd{constructor(e){super(),this.currentSequenceNumber=e}}class Kg{constructor(e){this.persistence=e,this.ti=new Ug,this.ni=null}static ri(e){return new Kg(e)}get ii(){if(this.ni)return this.ni;throw ad()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),qd.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),qd.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),qd.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach((e=>this.ii.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.ii.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return qd.forEach(this.ii,(n=>{const r=Ud.fromPath(n);return this.si(e,r).next((e=>{e||t.removeEntry(r,Od.min())}))})).next((()=>(this.ni=null,t.apply(e))))}updateLimboDocument(e,t){return this.si(e,t).next((e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())}))}Jr(e){return 0}si(e,t){return qd.or([()=>qd.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Gg{constructor(e,t){this.persistence=e,this.oi=new Pp((e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Yd(t)),t=Qd(e.get(n),t);return Yd(t)}(e.path)),((e,t)=>e.isEqual(t))),this.garbageCollector=function(e,t){return new Ng(e,t)}(this,t)}static ri(e,t){return new Gg(e,t)}Zr(){}Xr(e){return qd.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}sr(e){let t=0;return this.rr(e,(e=>{t++})).next((()=>t))}rr(e,t){return qd.forEach(this.oi,((n,r)=>this.ar(e,n,r).next((e=>e?qd.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,(r=>this.ar(e,r,t).next((e=>{e||(n++,i.removeEntry(r,Od.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),qd.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),qd.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),qd.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),qd.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mf(e.data.value)),t}ar(e,t,n){return qd.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.oi.get(t);return qd.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
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
 */class Wg{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=r}static Yi(e,t){let n=zp(),r=zp();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wg(e,t.fromCache,n,r)}}
/**
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
 */class Qg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
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
 */class Yg{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=Lo()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(Oo())>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.rs(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.ss(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new Qg;return this._s(e,t,n).next((r=>{if(i.result=r,this.Xi)return this.us(e,t,n,r.size)}))})).next((()=>i.result))}us(e,t,n,r){return n.documentReadCount<this.es?(nd()<=Zo.DEBUG&&rd("QueryEngine","SDK will not create cache indexes for query:",kp(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),qd.resolve()):(nd()<=Zo.DEBUG&&rd("QueryEngine","Query:",kp(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(nd()<=Zo.DEBUG&&rd("QueryEngine","The SDK decides to create cache indexes for query:",kp(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ep(t))):qd.resolve())}rs(e,t){if(bp(t))return qd.resolve(null);let n=Ep(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Sp(t,null,"F"),n=Ep(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=zp(...r);return this.ns.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.cs(t,r);return this.ls(t,s,i,n.readTime)?this.rs(e,Sp(t,null,"F")):this.hs(e,s,t,n)}))))})))))}ss(e,t,n,r){return bp(t)||r.isEqual(Od.min())?qd.resolve(null):this.ns.getDocuments(e,n).next((i=>{const s=this.cs(t,i);return this.ls(t,s,n,r)?qd.resolve(null):(nd()<=Zo.DEBUG&&rd("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),kp(t)),this.hs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Od.fromTimestamp(1e9===r?new Nd(n+1,0):new Nd(n,r));return new jd(i,Ud.empty(),t)}(r,-1)).next((e=>e)))}))}cs(e,t){let n=new rf(Ap(e));return t.forEach(((t,r)=>{Cp(e,r)&&(n=n.add(r))})),n}ls(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,t,n){return nd()<=Zo.DEBUG&&rd("QueryEngine","Using full collection scan to execute query:",kp(t)),this.ns.getDocumentsMatchingQuery(e,t,jd.min(),n)}hs(e,t,n,r){return this.ns.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */const Jg="LocalStore";class Xg{constructor(e,t,n,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new ef(Id),this.Is=new Pp((e=>mp(e)),gp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lg(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ts)))}}async function Zg(e,t){const n=ld(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.As(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=zp();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Rs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function ev(e){const t=ld(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Hr.getLastRemoteSnapshotVersion(e)))}function tv(e,t){const n=ld(e),r=t.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Hr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Hr.addMatchingKeys(e,s.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?l=l.withResumeToken(cf.EMPTY_BYTE_STRING,Od.min()).withLastLimboFreeSnapshotVersion(Od.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,r)),i=i.insert(a,l),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,s)&&o.push(n.Hr.updateTargetData(e,l))}));let a=Op(),c=zp();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n){let r=zp(),i=zp();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Op();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Od.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):rd(Jg,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Vs:r,fs:i}}))}(e,s,t.documentUpdates).next((e=>{a=e.Vs,c=e.fs}))),!r.isEqual(Od.min())){const t=n.Hr.getLastRemoteSnapshotVersion(e).next((t=>n.Hr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return qd.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ts=i,e)))}function nv(e,t){const n=ld(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function rv(e,t,n){const r=ld(e),i=r.Ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!Hd(o))throw o;rd(Jg,`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ts=r.Ts.remove(t),r.Is.delete(i.target)}function iv(e,t,n){const r=ld(e);let i=Od.min(),s=zp();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=ld(e),i=r.Is.get(n);return void 0!==i?qd.resolve(r.Ts.get(i)):r.Hr.getTargetData(t,n)}(r,e,Ep(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Ps.getDocumentsMatchingQuery(e,t,n?i:Od.min(),n?s:zp()))).next((e=>(function(e,t,n){let r=e.Es.get(t)||Od.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Es.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,gs:s})))))}class sv{constructor(){this.activeTargetIds=Bp}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ov{constructor(){this.ho=new sv,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new sv,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class av{To(e){}shutdown(){}}
/**
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
 */const cv="ConnectivityMonitor";class lv{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){rd(cv,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){rd(cv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let uv=null;function hv(){return null===uv?uv=268435456+Math.round(2147483648*Math.random()):uv++,"0x"+uv.toString(16)
/**
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
 */}const dv="RestConnection",fv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pv{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===_f?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(e,t,n,r,i){const s=hv(),o=this.bo(e,t.toUriEncodedString());rd(dv,`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,r,i),this.vo(e,o,a,n).then((t=>(rd(dv,`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw sd(dv,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Co(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ed,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=fv[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}
/**
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
 */class mv{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}
/**
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
 */const gv="WebChannelConnection";class vv extends pv{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){const i=hv();return new Promise(((s,o)=>{const a=new Bh;a.setWithCredentials(!0),a.listenOnce(qh.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Hh.NO_ERROR:const t=a.getResponseJson();rd(gv,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Hh.TIMEOUT:rd(gv,`RPC '${e}' ${i} timed out`),o(new hd(ud.DEADLINE_EXCEEDED,"Request time out"));break;case Hh.HTTP_ERROR:const n=a.getStatus();if(rd(gv,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ud).indexOf(t)>=0?t:ud.UNKNOWN}(t.status);o(new hd(e,t.message))}else o(new hd(ud.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new hd(ud.UNAVAILABLE,"Connection failed."));break;default:ad()}}finally{rd(gv,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);rd(gv,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Wo(e,t,n){const r=hv(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Qh(),o=Wh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");rd(gv,`Creating RPC '${e}' stream ${r}: ${l}`,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const f=new mv({Fo:t=>{d?rd(gv,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(rd(gv,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),rd(gv,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Mo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,$h.EventType.OPEN,(()=>{d||(rd(gv,`RPC '${e}' stream ${r} transport opened.`),f.Qo())})),p(u,$h.EventType.CLOSE,(()=>{d||(d=!0,rd(gv,`RPC '${e}' stream ${r} transport closed`),f.Uo())})),p(u,$h.EventType.ERROR,(t=>{d||(d=!0,sd(gv,`RPC '${e}' stream ${r} transport errored:`,t),f.Uo(new hd(ud.UNAVAILABLE,"The operation could not be completed")))})),p(u,$h.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];cd(!!i);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){rd(gv,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Tm[e];if(void 0!==t)return Cm(t)}(t),i=o.message;void 0===n&&(n=ud.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Uo(new hd(n,i)),u.close()}else rd(gv,`RPC '${e}' stream ${r} received:`,i),f.Ko(i)}})),p(o,Gh.STAT_EVENT,(t=>{t.stat===Kh.PROXY?rd(gv,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Kh.NOPROXY&&rd(gv,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.$o()}),0),f}}function yv(){return"undefined"!=typeof document?document:null}
/**
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
 */function wv(e){return new Hm(e,!0)}
/**
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
 */class bv{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-n);r>0&&rd("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,(()=>(this.Yo=Date.now(),e()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}
/**
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
 */const _v="PersistentStream";class Ev{constructor(e,t,n,r,i,s,o,a){this.Ti=e,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new bv(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===ud.RESOURCE_EXHAUSTED?(id(t.toString()),id("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ud.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.i_===t&&this.V_(e,n)}),(t=>{e((()=>{const e=new hd(ud.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)}))}))}V_(e,t){const n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo((()=>{n((()=>this.listener.xo()))})),this.stream.No((()=>{n((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((e=>{n((()=>this.m_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.__?this.g_(e):this.onNext(e)))}))}l_(){this.state=5,this.a_.Xo((async()=>{this.state=0,this.start()}))}m_(e){return rd(_v,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget((()=>this.i_===e?t():(rd(_v,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Sv extends Ev{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:ad(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(cd(void 0===t||"string"==typeof t),cf.fromBase64String(t||"")):(cd(void 0===t||t instanceof Buffer||t instanceof Uint8Array),cf.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?ud.UNKNOWN:Cm(e.code);return new hd(t,e.message||"")}(a);n=new Fm(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=tg(e,r.document.name),s=Ym(r.document.updateTime),o=r.document.createTime?Ym(r.document.createTime):Od.min(),a=new $f({mapValue:{fields:r.document.fields}}),c=Hf.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Rm(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=tg(e,r.document),s=r.readTime?Ym(r.readTime):Od.min(),o=Hf.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Rm([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=tg(e,r.document),s=r.removedTargetIds||[];n=new Rm([],s,i,null)}else{if(!("filter"in t))return ad();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Im(r,i),o=e.targetId;n=new Mm(o,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Od.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Od.min():t.readTime?Ym(t.readTime):Od.min()}(e);return this.listener.p_(t,n)}y_(e){const t={};t.database=rg(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=vp(r)?{documents:og(e,r)}:{query:ag(e,r).ht},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Wm(e,t.resumeToken);const r=Km(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Od.min())>0){n.readTime=Gm(e,t.snapshotVersion.toTimestamp());const r=Km(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ad()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){const t={};t.database=rg(this.serializer),t.removeTarget=e,this.I_(t)}}class Iv extends Ev{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return cd(!!e.streamToken),this.lastStreamToken=e.streamToken,cd(!e.writeResults||0===e.writeResults.length),this.listener.D_()}onNext(e){cd(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=function(e,t){return e&&e.length>0?(cd(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ym(e.updateTime):Ym(t);return n.isEqual(Od.min())&&(n=Ym(t)),new sm(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Ym(e.commitTime);return this.listener.v_(n,t)}C_(){const e={};e.database=rg(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof pm)n={update:sg(e,t.key,t.value)};else if(t instanceof wm)n={delete:eg(e,t.key)};else if(t instanceof mm)n={update:sg(e,t.key,t.data),updateMask:gg(t.fieldMask)};else{if(!(t instanceof bm))return ad();n={verify:eg(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Yp)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Jp)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zp)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tm)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw ad()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Qm(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:ad())),n;var r,i}(this.serializer,e)))};this.I_(t)}}
/**
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
 */class Tv{}class kv extends Tv{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new hd(ud.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(e,Xm(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ud.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new hd(ud.UNKNOWN,e.toString())}))}Co(e,t,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Co(e,Xm(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ud.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new hd(ud.UNKNOWN,e.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class Cv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(id(t),this.N_=!1):rd("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}
/**
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
 */const Av="RemoteStore";class xv{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To((e=>{n.enqueueAndForget((async()=>{Uv(this)&&(rd(Av,"Restarting streams for network reachability change."),await async function(e){const t=ld(e);t.W_.add(4),await Nv(t),t.j_.set("Unknown"),t.W_.delete(4),await Pv(t)}(this))}))})),this.j_=new Cv(n,r)}}async function Pv(e){if(Uv(e))for(const t of e.G_)await t(!0)}async function Nv(e){for(const t of e.G_)await t(!1)}function Ov(e,t){const n=ld(e);n.K_.has(t.targetId)||(n.K_.set(t.targetId,t),Fv(n)?Mv(n):ny(n).c_()&&Lv(n,t))}function Dv(e,t){const n=ld(e),r=ny(n);n.K_.delete(t),r.c_()&&Rv(n,t),0===n.K_.size&&(r.c_()?r.P_():Uv(n)&&n.j_.set("Unknown"))}function Lv(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Od.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ny(e).y_(t)}function Rv(e,t){e.H_.Ne(t),ny(e).w_(t)}function Mv(e){e.H_=new Vm({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.K_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),ny(e).start(),e.j_.B_()}function Fv(e){return Uv(e)&&!ny(e).u_()&&e.K_.size>0}function Uv(e){return 0===ld(e).W_.size}function Vv(e){e.H_=void 0}async function jv(e){e.j_.set("Online")}async function zv(e){e.K_.forEach(((t,n)=>{Lv(e,t)}))}async function Bv(e,t){Vv(e),Fv(e)?(e.j_.q_(t),Mv(e)):e.j_.set("Unknown")}async function $v(e,t,n){if(e.j_.set("Online"),t instanceof Fm&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.K_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.K_.delete(r),e.H_.removeTarget(r))}(e,t)}catch(r){rd(Av,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await qv(e,r)}else if(t instanceof Rm?e.H_.We(t):t instanceof Mm?e.H_.Ze(t):e.H_.je(t),!n.isEqual(Od.min()))try{const t=await ev(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.H_.ot(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.K_.get(r);i&&e.K_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.K_.get(t);if(!r)return;e.K_.set(t,r.withResumeToken(cf.EMPTY_BYTE_STRING,r.snapshotVersion)),Rv(e,t);const i=new yg(r.target,t,n,r.sequenceNumber);Lv(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){rd(Av,"Failed to raise snapshot:",i),await qv(e,i)}}async function qv(e,t,n){if(!Hd(t))throw t;e.W_.add(1),await Nv(e),e.j_.set("Offline"),n||(n=()=>ev(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{rd(Av,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await Pv(e)}))}function Hv(e,t){return t().catch((n=>qv(e,n,t)))}async function Kv(e){const t=ld(e),n=ry(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:-1;for(;Gv(t);)try{const e=await nv(t.localStore,r);if(null===e){0===t.U_.length&&n.P_();break}r=e.batchId,Wv(t,e)}catch(i){await qv(t,i)}Qv(t)&&Yv(t)}function Gv(e){return Uv(e)&&e.U_.length<10}function Wv(e,t){e.U_.push(t);const n=ry(e);n.c_()&&n.S_&&n.b_(t.mutations)}function Qv(e){return Uv(e)&&!ry(e).u_()&&e.U_.length>0}function Yv(e){ry(e).start()}async function Jv(e){ry(e).C_()}async function Xv(e){const t=ry(e);for(const n of e.U_)t.b_(n.mutations)}async function Zv(e,t,n){const r=e.U_.shift(),i=Em.from(r,t,n);await Hv(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Kv(e)}async function ey(e,t){t&&ry(e).S_&&await async function(e,t){if(function(e){switch(e){case ud.OK:return ad();case ud.CANCELLED:case ud.UNKNOWN:case ud.DEADLINE_EXCEEDED:case ud.RESOURCE_EXHAUSTED:case ud.INTERNAL:case ud.UNAVAILABLE:case ud.UNAUTHENTICATED:return!1;case ud.INVALID_ARGUMENT:case ud.NOT_FOUND:case ud.ALREADY_EXISTS:case ud.PERMISSION_DENIED:case ud.FAILED_PRECONDITION:case ud.ABORTED:case ud.OUT_OF_RANGE:case ud.UNIMPLEMENTED:case ud.DATA_LOSS:return!0;default:return ad()}}(n=t.code)&&n!==ud.ABORTED){const n=e.U_.shift();ry(e).h_(),await Hv(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Kv(e)}var n}(e,t),Qv(e)&&Yv(e)}async function ty(e,t){const n=ld(e);n.asyncQueue.verifyOperationInProgress(),rd(Av,"RemoteStore received new credentials");const r=Uv(n);n.W_.add(3),await Nv(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Pv(n)}function ny(e){return e.J_||(e.J_=function(e,t,n){const r=ld(e);return r.M_(),new Sv(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{xo:jv.bind(null,e),No:zv.bind(null,e),Lo:Bv.bind(null,e),p_:$v.bind(null,e)}),e.G_.push((async t=>{t?(e.J_.h_(),Fv(e)?Mv(e):e.j_.set("Unknown")):(await e.J_.stop(),Vv(e))}))),e.J_}function ry(e){return e.Y_||(e.Y_=function(e,t,n){const r=ld(e);return r.M_(),new Iv(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{xo:()=>Promise.resolve(),No:Jv.bind(null,e),Lo:ey.bind(null,e),D_:Xv.bind(null,e),v_:Zv.bind(null,e)}),e.G_.push((async t=>{t?(e.Y_.h_(),await Kv(e)):(await e.Y_.stop(),e.U_.length>0&&(rd(Av,`Stopping write stream with ${e.U_.length} pending writes`),e.U_=[]))}))),e.Y_
/**
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
 */}class iy{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new dd,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new iy(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new hd(ud.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sy(e,t){if(id("AsyncQueue",`${t}: ${e}`),Hd(e))return new hd(ud.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class oy{static emptySet(e){return new oy(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ud.comparator(t.key,n.key):(e,t)=>Ud.comparator(e.key,t.key),this.keyedMap=Lp(),this.sortedSet=new ef(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oy))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new oy;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class ay{constructor(){this.Z_=new ef(Ud.comparator)}track(e){const t=e.doc.key,n=this.Z_.get(t);n?0!==e.type&&3===n.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==n.type?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Z_=this.Z_.remove(t):1===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):ad():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class cy{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new cy(e,t,oy.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ip(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class ly{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((e=>e.ra()))}}class uy{constructor(){this.queries=hy(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){const n=ld(e),r=n.queries;n.queries=hy(),r.forEach(((e,n)=>{for(const r of n.ta)r.onError(t)}))}(this,new hd(ud.ABORTED,"Firestore shutting down"))}}function hy(){return new Pp((e=>Tp(e)),Ip)}function dy(e,t){const n=ld(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.ta)e.oa(i)&&(r=!0);t.ea=i}}r&&py(n)}function fy(e,t,n){const r=ld(e),i=r.queries.get(t);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(t)}function py(e){e.ia.forEach((e=>{e.next()}))}var my,gy;(gy=my||(my={}))._a="default",gy.Cache="cache";class vy{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new cy(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache)return!0;if(!this.ra())return!0;const n="Offline"!==t;return(!this.options.Ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=cy.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==my.Cache}}
/**
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
 */class yy{constructor(e){this.key=e}}class wy{constructor(e){this.key=e}}class by{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=zp(),this.mutatedKeys=zp(),this.ya=Ap(e),this.wa=new oy(this.ya)}get Sa(){return this.fa}ba(e,t){const n=t?t.Da:new ay,r=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=Cp(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.va(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.ya(u,a)>0||c&&this.ya(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{wa:s,Da:n,ls:o,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const s=e.Da.X_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ad()}};return n(e)-n(t)}(e.type,t.type)||this.ya(e.doc,t.doc))),this.Ca(n),r=null!=r&&r;const o=t&&!r?this.Fa():[],a=0===this.pa.size&&this.current&&!r?1:0,c=a!==this.ga;return this.ga=a,0!==s.length||c?{snapshot:new cy(this.query,e.wa,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ay,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach((e=>this.fa=this.fa.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.fa=this.fa.delete(e))),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=zp(),this.wa.forEach((e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))}));const t=[];return e.forEach((e=>{this.pa.has(e)||t.push(new wy(e))})),this.pa.forEach((n=>{e.has(n)||t.push(new yy(n))})),t}Oa(e){this.fa=e.gs,this.pa=zp();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return cy.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const _y="SyncEngine";class Ey{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Sy{constructor(e){this.key=e,this.Ba=!1}}class Iy{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new Pp((e=>Tp(e)),Ip),this.qa=new Map,this.Qa=new Set,this.$a=new ef(Ud.comparator),this.Ua=new Map,this.Ka=new Ug,this.Wa={},this.Ga=new Map,this.za=kg.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function Ty(e,t,n=!0){const r=Ky(e);let i;const s=r.ka.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Cy(r,t,n,!0),i}async function ky(e,t){const n=Ky(e);await Cy(n,t,!0,!1)}async function Cy(e,t,n,r){const i=await function(e,t){const n=ld(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Hr.getTargetData(e,t).next((i=>i?(r=i,qd.resolve(r)):n.Hr.allocateTargetId(e).next((i=>(r=new yg(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Hr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ts.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(e.targetId,e),n.Is.set(t,e.targetId)),e}))}(e.localStore,Ep(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(e,t,n,r,i){e.Ha=(t,n,r)=>async function(e,t,n,r){let i=t.view.ba(n);i.ls&&(i=await iv(e.localStore,t.query,!1).then((({documents:e})=>t.view.ba(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return jy(e,t.targetId,a.Ma),a.snapshot}(e,t,n,r);const s=await iv(e.localStore,t,!0),o=new by(t,s.gs),a=o.ba(s.documents),c=Lm.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),l=o.applyChanges(a,e.isPrimaryClient,c);jy(e,n,l.Ma);const u=new Ey(t,n,o);return e.ka.set(t,u),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),l.snapshot}(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&Ov(e.remoteStore,i),a}async function Ay(e,t,n){const r=ld(e),i=r.ka.get(t),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter((e=>!Ip(e,t)))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rv(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Dv(r.remoteStore,i.targetId),Uy(r,i.targetId)})).catch($d)):(Uy(r,i.targetId),await rv(r.localStore,i.targetId,!0))}async function xy(e,t){const n=ld(e),r=n.ka.get(t),i=n.qa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Dv(n.remoteStore,r.targetId))}async function Py(e,t,n){const r=function(e){const t=ld(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ly.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ry.bind(null,t),t}(e);try{const e=await function(e,t){const n=ld(e),r=Nd.now(),i=t.reduce(((e,t)=>e.add(t.key)),zp());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Op(),c=zp();return n.ds.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=dm(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new mm(e.key,t,qf(t.value.mapValue),om.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Rp(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Wa[e.currentUser.toKey()];r||(r=new ef(Id)),r=r.insert(t,n),e.Wa[e.currentUser.toKey()]=r}(r,e.batchId,n),await $y(r,e.changes),await Kv(r.remoteStore)}catch(i){const e=sy(i,"Failed to persist write");n.reject(e)}}async function Ny(e,t){const n=ld(e);try{const e=await tv(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Ua.get(t);r&&(cd(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Ba=!0:e.modifiedDocuments.size>0?cd(r.Ba):e.removedDocuments.size>0&&(cd(r.Ba),r.Ba=!1))})),await $y(n,e,t)}catch(r){await $d(r)}}function Oy(e,t,n){const r=ld(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ka.forEach(((n,r)=>{const i=r.view.sa(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ld(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.ta)i.sa(t)&&(r=!0)})),r&&py(n)}(r.eventManager,t),e.length&&r.La.p_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Dy(e,t,n){const r=ld(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Ua.get(t),s=i&&i.key;if(s){let e=new ef(Ud.comparator);e=e.insert(s,Hf.newNoDocument(s,Od.min()));const n=zp().add(s),i=new Dm(Od.min(),new Map,new ef(Id),e,n);await Ny(r,i),r.$a=r.$a.remove(s),r.Ua.delete(t),By(r)}else await rv(r.localStore,t,!1).then((()=>Uy(r,t,n))).catch($d)}async function Ly(e,t){const n=ld(e),r=t.batch.batchId;try{const e=await function(e,t){const n=ld(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=qd.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);cd(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=zp();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Fy(n,r,null),My(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $y(n,e)}catch(i){await $d(i)}}async function Ry(e,t,n){const r=ld(e);try{const e=await function(e,t){const n=ld(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(cd(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Fy(r,t,n),My(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await $y(r,e)}catch(i){await $d(i)}}function My(e,t){(e.Ga.get(t)||[]).forEach((e=>{e.resolve()})),e.Ga.delete(t)}function Fy(e,t,n){const r=ld(e);let i=r.Wa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Wa[r.currentUser.toKey()]=i}}function Uy(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.qa.get(t))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ka.br(t).forEach((t=>{e.Ka.containsKey(t)||Vy(e,t)}))}function Vy(e,t){e.Qa.delete(t.path.canonicalString());const n=e.$a.get(t);null!==n&&(Dv(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ua.delete(n),By(e))}function jy(e,t,n){for(const r of n)r instanceof yy?(e.Ka.addReference(r.key,t),zy(e,r)):r instanceof wy?(rd(_y,"Document no longer in limbo: "+r.key),e.Ka.removeReference(r.key,t),e.Ka.containsKey(r.key)||Vy(e,r.key)):ad()}function zy(e,t){const n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(rd(_y,"New document in limbo: "+n),e.Qa.add(r),By(e))}function By(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){const t=e.Qa.values().next().value;e.Qa.delete(t);const n=new Ud(Rd.fromString(t)),r=e.za.next();e.Ua.set(r,new Sy(n)),e.$a=e.$a.insert(n,r),Ov(e.remoteStore,new yg(Ep(wp(n.path)),r,"TargetPurposeLimboResolution",Kd.ae))}}async function $y(e,t,n){const r=ld(e),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach(((e,a)=>{o.push(r.Ha(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=Wg.Yi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.La.p_(i),await async function(e,t){const n=ld(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>qd.forEach(t,(t=>qd.forEach(t.Hi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>qd.forEach(t.Ji,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!Hd(r))throw r;rd(Jg,"Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Ts.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ts=n.Ts.insert(e,i)}}}(r.localStore,s))}async function qy(e,t){const n=ld(e);if(!n.currentUser.isEqual(t)){rd(_y,"User change. New user:",t.toKey());const e=await Zg(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).Ga.forEach((e=>{e.forEach((e=>{e.reject(new hd(ud.CANCELLED,i))}))})),r.Ga.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await $y(n,e.Rs)}var r,i}function Hy(e,t){const n=ld(e),r=n.Ua.get(t);if(r&&r.Ba)return zp().add(r.key);{let e=zp();const r=n.qa.get(t);if(!r)return e;for(const t of r){const r=n.ka.get(t);e=e.unionWith(r.view.Sa)}return e}}function Ky(e){const t=ld(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ny.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Dy.bind(null,t),t.La.p_=dy.bind(null,t.eventManager),t.La.Ja=fy.bind(null,t.eventManager),t}class Gy{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wv(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return function(e,t,n,r){return new Xg(e,t,n,r)}(this.persistence,new Yg,e.initialUser,this.serializer)}Xa(e){return new qg(Kg.ri,this.serializer)}Za(e){return new ov}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gy.provider={build:()=>new Gy};class Wy extends Gy{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){cd(this.persistence.referenceDelegate instanceof Gg);const n=this.persistence.referenceDelegate.garbageCollector;return new Pg(n,e.asyncQueue,t)}Xa(e){const t=void 0!==this.cacheSizeBytes?Tg.withCacheSize(this.cacheSizeBytes):Tg.DEFAULT;return new qg((e=>Gg.ri(e,t)),this.serializer)}}class Qy{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Oy(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=qy.bind(null,this.syncEngine),await async function(e,t){const n=ld(e);t?(n.W_.delete(2),await Pv(n)):t||(n.W_.add(2),await Nv(n),n.j_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uy}createDatastore(e){const t=wv(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new vv(r));var r;return function(e,t,n,r){return new kv(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Oy(this.syncEngine,e,0),s=lv.D()?new lv:new av,new xv(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Iy(e,t,n,r,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=ld(e);rd(Av,"RemoteStore shutting down."),t.W_.add(5),await Nv(t),t.z_.shutdown(),t.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}Qy.provider={build:()=>new Qy};
/**
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
 */
/**
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
 */
class Yy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):id("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */const Jy="FirestoreClient";class Xy{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Zh.UNAUTHENTICATED,this.clientId=Sd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{rd(Jy,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(rd(Jy,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dd;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=sy(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Zy(e,t){e.asyncQueue.verifyOperationInProgress(),rd(Jy,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Zg(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function ew(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){rd(Jy,"Using user provided OfflineComponentProvider");try{await Zy(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===ud.FAILED_PRECONDITION||n.code===ud.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;sd("Error using user provided cache. Falling back to memory cache: "+i),await Zy(e,new Gy)}}else rd(Jy,"Using default OfflineComponentProvider"),await Zy(e,new Wy(void 0));var n;return e._offlineComponents}(e);rd(Jy,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>ty(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>ty(t.remoteStore,n))),e._onlineComponents=t}async function tw(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(rd(Jy,"Using user provided OnlineComponentProvider"),await ew(e,e._uninitializedComponentsProvider._online)):(rd(Jy,"Using default OnlineComponentProvider"),await ew(e,new Qy))),e._onlineComponents}async function nw(e){const t=await tw(e),n=t.eventManager;return n.onListen=Ty.bind(null,t.syncEngine),n.onUnlisten=Ay.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ky.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=xy.bind(null,t.syncEngine),n}function rw(e,t,n={}){const r=new dd;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Yy({next:a=>{s.su(),t.enqueueAndForget((()=>async function(e,t){const n=ld(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.ta.indexOf(t);e>=0&&(s.ta.splice(e,1),0===s.ta.length?i=t.ra()?0:1:!s.na()&&t.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}(e,o)));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new hd(ud.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new hd(ud.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new vy(wp(n.path),s,{includeMetadataChanges:!0,Ta:!0});return async function(t,n){const r=ld(t);let i=3;const s=n.query;let o=r.queries.get(s);o?!o.na()&&n.ra()&&(i=2):(o=new ly,i=n.ra()?0:1);try{switch(i){case 0:o.ea=await r.onListen(s,!0);break;case 1:o.ea=await r.onListen(s,!1);break;case 2:await r.onFirstRemoteStoreListen(s)}}catch(e){const r=sy(e,`Initialization of query '${kp(n.query)}' failed`);return void n.onError(r)}r.queries.set(s,o),o.ta.push(n),n.sa(r.onlineState),o.ea&&n.oa(o.ea)&&py(r)}(e,o)}(await nw(e),e.asyncQueue,t,n,r))),r.promise
/**
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
 */}function iw(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const sw=new Map;
/**
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
 */function ow(e){if(!Ud.isDocumentKey(e))throw new hd(ud.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function aw(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":ad()}function cw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new hd(ud.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=aw(e);throw new hd(ud.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */const lw="firestore.googleapis.com",uw=!0;class hw{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new hd(ud.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lw,this.ssl=uw}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:uw;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Ig;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new hd(ud.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new hd(ud.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iw(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new hd(ud.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new hd(ud.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new hd(ud.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class dw{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new hd(ud.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new hd(ud.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hw(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new pd;switch(e.type){case"firstParty":return new yd(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new hd(ud.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=sw.get(e);t&&(rd("ComponentProvider","Removing Datastore"),sw.delete(e),t.terminate())}(this),Promise.resolve()}}function fw(e,t,n,r={}){var i;const s=(e=cw(e,dw))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:e._getEmulatorOptions()}),a=`${t}:${n}`;s.host!==lw&&s.host!==a&&sd("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!jo(c,o)&&(e._setSettings(c),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Zh.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Io(JSON.stringify({alg:"none",type:"JWT"})),Io(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new hd(ud.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Zh(s)}e._authCredentials=new md(new fd(t,n))}}
/**
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
 */class pw{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new pw(this.firestore,e,this._query)}}class mw{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gw(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mw(this.firestore,e,this._key)}}class gw extends pw{constructor(e,t,n){super(e,t,wp(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mw(this.firestore,null,new Ud(e))}withConverter(e){return new gw(this.firestore,e,this._path)}}function vw(e,t,...n){if(e=Wo(e),1===arguments.length&&(t=Sd.newId()),function(e,t,n){if(!n)throw new hd(ud.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("doc","path",t),e instanceof dw){const r=Rd.fromString(t,...n);return ow(r),new mw(e,null,new Ud(r))}{if(!(e instanceof mw||e instanceof gw))throw new hd(ud.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Rd.fromString(t,...n));return ow(r),new mw(e.firestore,e instanceof gw?e.converter:null,new Ud(r))}}
/**
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
 */const yw="AsyncQueue";class ww{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new bv(this,"async_queue_retry"),this.Su=()=>{const e=yv();e&&rd(yw,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;const t=yv();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=yv();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise((()=>{}));const t=new dd;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Vu.push(e),this.Cu())))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(dx){if(!Hd(dx))throw dx;rd(yw,"Operation failed with retryable error: "+dx)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}vu(e){const t=this.bu.then((()=>(this.pu=!0,e().catch((e=>{this.gu=e,this.pu=!1;throw id("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.pu=!1,e))))));return this.bu=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const r=iy.createAndSchedule(this,e,t,n,(e=>this.Fu(e)));return this.fu.push(r),r}Du(){this.gu&&ad()}verifyOperationInProgress(){}async Mu(){let e;do{e=this.bu,await e}while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then((()=>{this.fu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.fu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()}))}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class bw extends dw{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ww,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ww(e),this._firestoreClient=void 0,await e}}}function _w(e,t){const n="object"==typeof e?e:dc(),r="string"==typeof e?e:_f,i=oc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(e=>{const t=Ao(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&fw(i,...e)}return i}function Ew(e){if(e._terminated)throw new hd(ud.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,l=i,new bf(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,iw(l.experimentalLongPollingOptions),l.useFetchStreams));var o,a,c,l;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new Xy(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
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
 */(e),e._firestoreClient}class Sw{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sw(cf.fromBase64String(e))}catch(t){throw new hd(ud.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sw(cf.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class Iw{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new hd(ud.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fd(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */class Tw{constructor(e){this._methodName=e}}
/**
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
 */class kw{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new hd(ud.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new hd(ud.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Id(this._lat,e._lat)||Id(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Cw{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
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
 */const Aw=/^__.*__$/;class xw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new mm(e,this.data,this.fieldMask,t,this.fieldTransforms):new pm(e,this.data,t,this.fieldTransforms)}}class Pw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new mm(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ad()}}class Ow{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Ow(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.$u(e),r}Uu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Hw(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(Nw(this.Lu)&&Aw.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Dw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||wv(e)}ju(e,t,n,r=!1){return new Ow({Lu:e,methodName:t,zu:n,path:Fd.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lw(e){const t=e._freezeSettings(),n=wv(e._databaseId);return new Dw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Rw(e,t,n,r,i,s={}){const o=e.ju(s.merge||s.mergeFields?2:0,t,n,i);zw("Data must be an object, but it was:",o,r);const a=Vw(r,o);let c,l;if(s.merge)c=new of(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Bw(t,r,n);if(!o.contains(i))throw new hd(ud.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Kw(e,i)||e.push(i)}c=new of(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new xw(new $f(a),c,l)}class Mw extends Tw{_toFieldTransform(e){if(2!==e.Lu)throw 1===e.Lu?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mw}}class Fw extends Tw{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new tm(e.serializer,Hp(e.serializer,this.Ju));return new im(e.path,t)}isEqual(e){return e instanceof Fw&&this.Ju===e.Ju}}function Uw(e,t){if(jw(e=Wo(e)))return zw("Unsupported field value:",t,e),Vw(e,t);if(e instanceof Tw)return function(e,t){if(!Nw(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Uw(i,t.Ku(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Wo(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Hp(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Nd.fromDate(e);return{timestampValue:Gm(t.serializer,n)}}if(e instanceof Nd){const n=new Nd(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Gm(t.serializer,n)}}if(e instanceof kw)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Sw)return{bytesValue:Wm(t.serializer,e._byteString)};if(e instanceof mw){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Wu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Jm(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Cw)return n=e,r=t,{mapValue:{fields:{[Sf]:{stringValue:kf},[Cf]:{arrayValue:{values:n.toArray().map((e=>{if("number"!=typeof e)throw r.Wu("VectorValues must only contain numeric values.");return $p(r.serializer,e)}))}}}}};var n,r;throw t.Wu(`Unsupported field value: ${aw(e)}`)}(e,t)}function Vw(e,t){const n={};return Zd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xd(e,((e,r)=>{const i=Uw(r,t.qu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function jw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Nd||e instanceof kw||e instanceof Sw||e instanceof mw||e instanceof Tw||e instanceof Cw)}function zw(e,t,n){if(!jw(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=aw(n);throw"an object"===r?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}var r}function Bw(e,t,n){if((t=Wo(t))instanceof Iw)return t._internalPath;if("string"==typeof t)return qw(e,t);throw Hw("Field path arguments must be of type string or ",e,!1,void 0,n)}const $w=new RegExp("[~\\*/\\[\\]]");function qw(e,t,n){if(t.search($w)>=0)throw Hw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Iw(...t.split("."))._internalPath}catch(r){throw Hw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Hw(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new hd(ud.INVALID_ARGUMENT,a+e+c)}function Kw(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class Gw{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mw(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ww(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ww extends Gw{data(){return super.data()}}function Qw(e,t){return"string"==typeof t?qw(e,t):t instanceof Iw?t._internalPath:t._delegate._internalPath}class Yw{convertValue(e,t="none"){switch(Af(e)){case 0:return null;case 1:return e.booleanValue;case 2:return hf(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(df(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ad()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Xd(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[Cf].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>hf(e.doubleValue)));return new Cw(i)}convertGeoPoint(e){return new kw(hf(e.latitude),hf(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=yf(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(wf(e));default:return null}}convertTimestamp(e){const t=uf(e);return new Nd(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Rd.fromString(e);cd(vg(n));const r=new Ef(n.get(1),n.get(3)),i=new Ud(n.popFirst(5));return r.isEqual(t)||id(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */
/**
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
 */
class Jw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xw extends Gw{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zw(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Qw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Zw extends Xw{data(e={}){return super.data(e)}}
/**
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
 */function eb(e){e=cw(e,mw);const t=cw(e.firestore,bw);return rw(Ew(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new tb(e);return new Xw(e,i,t._key,r,new Jw(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class tb extends Yw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sw(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mw(this.firestore,null,t)}}function nb(e,t,n,...r){e=cw(e,mw);const i=cw(e.firestore,bw),s=Lw(i);let o;return o="string"==typeof(t=Wo(t))||t instanceof Iw?function(e,t,n,r,i,s){const o=e.ju(1,t,n),a=[Bw(t,r,n)],c=[i];if(s.length%2!=0)throw new hd(ud.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Bw(t,s[d])),c.push(s[d+1]);const l=[],u=$f.empty();for(let d=a.length-1;d>=0;--d)if(!Kw(l,a[d])){const e=a[d];let t=c[d];t=Wo(t);const n=o.Uu(e);if(t instanceof Mw)l.push(e);else{const r=Uw(t,n);null!=r&&(l.push(e),u.set(e,r))}}const h=new of(l);return new Pw(u,h,o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.ju(1,t,n);zw("Data must be an object, but it was:",i,r);const s=[],o=$f.empty();Xd(r,((e,r)=>{const a=qw(t,e,n);r=Wo(r);const c=i.Uu(a);if(r instanceof Mw)s.push(a);else{const e=Uw(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new of(s);return new Pw(o,a,i.fieldTransforms)}(s,"updateDoc",e._key,t),rb(i,[o.toMutation(e._key,om.exists(!0))])}function rb(e,t){return function(e,t){const n=new dd;return e.asyncQueue.enqueueAndForget((async()=>Py(await function(e){return tw(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Ew(e),t)}function ib(e){return new Fw("increment",e)}!function(e,t=!0){ed=uc,sc(new Qo("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new bw(new gd(e.getProvider("auth-internal")),new bd(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new hd(ud.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ef(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),fc(Jh,Xh,e),fc(Jh,Xh,"esm2017")}();const sb="@firebase/installations",ob="0.6.13",ab=1e4,cb=`w:${ob}`,lb="FIS_v2",ub=36e5,hb=new Uo("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function db(e){return e instanceof Fo&&e.code.includes("request-failed")}
/**
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
 */function fb({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function pb(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function mb(e,t){const n=(await t.json()).error;return hb.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function gb({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function vb(e,{refreshToken:t}){const n=gb(e);return n.append("Authorization",function(e){return`${lb} ${e}`}
/**
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
 */(t)),n}async function yb(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
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
 */
function wb(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
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
 */
/**
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
 */
const bb=/^[cdef][\w-]{21}$/;function _b(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
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
 */(e);return bb.test(t)?t:""}catch(e){return""}}function Eb(e){return`${e.appName}!${e.appId}`}
/**
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
 */const Sb=new Map;function Ib(e,t){const n=Eb(e);Tb(n,t),function(e,t){const n=function(){!kb&&"BroadcastChannel"in self&&(kb=new BroadcastChannel("[Firebase] FID Change"),kb.onmessage=e=>{Tb(e.data.key,e.data.fid)});return kb}();n&&n.postMessage({key:e,fid:t});0===Sb.size&&kb&&(kb.close(),kb=null)}(n,t)}function Tb(e,t){const n=Sb.get(e);if(n)for(const r of n)r(t)}let kb=null;
/**
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
 */
const Cb="firebase-installations-store";let Ab=null;function xb(){return Ab||(Ab=ya("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Cb)}})),Ab}async function Pb(e,t){const n=Eb(e),r=(await xb()).transaction(Cb,"readwrite"),i=r.objectStore(Cb),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||Ib(e,t.fid),t}async function Nb(e){const t=Eb(e),n=(await xb()).transaction(Cb,"readwrite");await n.objectStore(Cb).delete(t),await n.done}async function Ob(e,t){const n=Eb(e),r=(await xb()).transaction(Cb,"readwrite"),i=r.objectStore(Cb),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||Ib(e,o.fid),o}
/**
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
 */async function Db(e){let t;const n=await Ob(e.appConfig,(n=>{const r=function(e){const t=e||{fid:_b(),registrationStatus:0};return Mb(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(hb.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=fb(e),i=gb(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:lb,appId:e.appId,sdkVersion:cb},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await yb((()=>fetch(r,a)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:pb(e.authToken)}}throw await mb("Create Installation",c)}(e,t);return Pb(e.appConfig,n)}catch(dx){throw db(dx)&&409===dx.customData.serverCode?await Nb(e.appConfig):await Pb(e.appConfig,{fid:t.fid,registrationStatus:0}),dx}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Lb(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Lb(e){let t=await Rb(e.appConfig);for(;1===t.registrationStatus;)await wb(100),t=await Rb(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Db(e);return n||t}return t}function Rb(e){return Ob(e,(e=>{if(!e)throw hb.create("installation-not-found");return Mb(e)}))}function Mb(e){return 1===(t=e).registrationStatus&&t.registrationTime+ab<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
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
 */}async function Fb({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${fb(e)}/${t}/authTokens:generate`}
/**
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
 */(e,n),i=vb(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:cb,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await yb((()=>fetch(r,a)));if(c.ok){return pb(await c.json())}throw await mb("Generate Auth Token",c)}async function Ub(e,t=!1){let n;const r=await Ob(e.appConfig,(r=>{if(!jb(r))throw hb.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ub}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await Vb(e.appConfig);for(;1===n.authToken.requestStatus;)await wb(100),n=await Vb(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Ub(e,t):r}(e,t),r;{if(!navigator.onLine)throw hb.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Fb(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Pb(e.appConfig,r),n}catch(dx){if(!db(dx)||401!==dx.customData.serverCode&&404!==dx.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Pb(e.appConfig,n)}else await Nb(e.appConfig);throw dx}}(e,t),t}}));return n?await n:r.authToken}function Vb(e){return Ob(e,(e=>{if(!jb(e))throw hb.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+ab<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
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
 */}))}function jb(e){return void 0!==e&&2===e.registrationStatus}
/**
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
 */
async function zb(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Db(e);t&&await t}
/**
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
 */(n);return(await Ub(n,t)).token}function Bb(e){return hb.create("missing-app-config-values",{valueName:e})}
/**
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
 */const $b="installations",qb=e=>{const t=oc(e.getProvider("app").getImmediate(),$b).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Db(t);return r?r.catch(console.error):Ub(t).catch(console.error),n.fid}(t),getToken:e=>zb(t,e)}};sc(new Qo($b,(e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Bb("App Configuration");if(!e.name)throw Bb("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Bb(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:oc(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),sc(new Qo("installations-internal",qb,"PRIVATE")),fc(sb,ob),fc(sb,ob,"esm2017");
/**
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
 */
const Hb="analytics",Kb="https://www.googletagmanager.com/gtag/js",Gb=new sa("@firebase/analytics"),Wb=new Uo("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
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
 */
function Qb(e){if(!e.startsWith(Kb)){const t=Wb.create("invalid-gtag-resource",{gtagURL:e});return Gb.warn(t.message),""}return e}function Yb(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Jb(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Qb}),r=document.createElement("script"),i=`${Kb}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Xb(e,t,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Yb(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(dx){Gb.error(dx)}}(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await Yb(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(dx){Gb.error(dx)}e("config",i,s)}(e,t,n,r,i,o)}else if("consent"===i){const[t,n]=s;e("consent",t,n)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(dx){Gb.error(dx)}}}const Zb=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function e_(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function t_(e,t=Zb,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Wb.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Wb.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new r_;return setTimeout((async()=>{a.abort()}),6e4),n_({appId:r,apiKey:i,measurementId:s},o,a,t)}async function n_(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Zb){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(Wb.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(dx){if(a)return Gb.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==dx?void 0:dx.message}]`),{appId:o,measurementId:a};throw dx}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:e_(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw Wb.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(o),t}catch(dx){const c=dx;if(!function(e){if(!(e instanceof Fo&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(i.deleteThrottleMetadata(o),a)return Gb.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw dx}const l=503===Number(null===(s=null==c?void 0:c.customData)||void 0===s?void 0:s.httpStatus)?Go(n,i.intervalMillis,30):Go(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,u),Gb.debug(`Calling attemptFetch again in ${l} millis`),n_(e,u,r,i)}}class r_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function i_(e,t,n,r,i,s,o){var a;const c=t_(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Gb.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Gb.error(e))),t.push(c);const l=
/**
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
 */
async function(){if(!Ro())return Gb.warn(Wb.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Mo()}catch(dx){return Gb.warn(Wb.create("indexeddb-unavailable",{errorInfo:null==dx?void 0:dx.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Kb)&&n.src.includes(e))return n;return null}
/**
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
 */)(s)||Jb(s,u.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",u.measurementId,d),u.measurementId}
/**
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
 */class s_{constructor(e){this.app=e}_delete(){return delete o_[this.app.options.appId],Promise.resolve()}}let o_={},a_=[];const c_={};let l_,u_,h_="dataLayer",d_=!1;function f_(){const e=[];if(Do()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Wb.create("invalid-analytics-context",{errorInfo:t});Gb.warn(n.message)}}function p_(e,t,n){f_();const r=e.options.appId;if(!r)throw Wb.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Wb.create("no-api-key");Gb.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=o_[r])throw Wb.create("already-exists",{id:r});if(!d_){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(h_);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Xb(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(o_,a_,c_,h_,"gtag");u_=e,l_=t,d_=!0}o_[r]=i_(e,a_,c_,t,l_,h_,n);return new s_(e)}function m_(e,t,n,r){e=Wo(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(u_,o_[e.app.options.appId],t,n,r).catch((e=>Gb.error(e)))}const g_="@firebase/analytics",v_="0.10.12";sc(new Qo(Hb,((e,{options:t})=>p_(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),sc(new Qo("analytics-internal",(function(e){try{const t=e.getProvider(Hb).getImmediate();return{logEvent:(e,n,r)=>m_(t,e,n,r)}}catch(dx){throw Wb.create("interop-component-reg-failed",{reason:dx})}}),"PRIVATE")),fc(g_,v_),fc(g_,v_,"esm2017");const y_={handleCodeInApp:!0,url:window.location.origin+"/auth/action",iOS:{bundleId:"com.mediquix-fbc0b.app"},android:{packageName:"com.mediquix-fbc0b.app",installApp:!0,minimumVersion:"1"},dynamicLinkDomain:"mediquix.page.link"},w_={apiKey:"AIzaSyA-U1ASN2yTDfutUHqblUO1HMyyvLhOBg4",authDomain:window.location.host,projectId:"mediquix-fbc0b",storageBucket:"mediquix-fbc0b.firebasestorage.app",messagingSenderId:"830867953772",appId:"1:830867953772:web:3ce4a6166c55f49b0aa049",measurementId:"G-Q35EFETSY8"};let b_=null,__=null,E_=null;function S_(){return b_||(b_=hc({...w_,automaticDataCollectionEnabled:!1})),b_}function I_(){return __||(__=Fh(S_()),__.languageCode="pt"),__}function T_(){return I_().currentUser?(E_||(E_=_w(S_())),E_):null}async function k_(e){try{await function(e,t){return Wo(e).setPersistence(t)}(e,Nu)}catch(t){throw t}}function C_(...e){const t=T_();if(!t)throw new Error("Firestore is not initialized - user may not be authenticated");if(!e||0===e.length)throw new Error("Invalid document path provided - no path segments");1===e.length&&Array.isArray(e[0])&&(e=e[0]);const n=e.filter((e=>e&&"string"==typeof e&&e.length>0));if(0===n.length)throw new Error("Invalid document path provided - no valid segments");return vw(t,...n)}const A_={selectedSpecialty:"all",selectedDifficulty:"all",defaultSpecialty:-1,defaultDifficulty:-1,autoSaveEnabled:!0,notificationsEnabled:!0,language:"pt-BR",wordSearchGame:{gridWidth:24,gridHeight:12,cellSize:30}},x_=go("settings",(()=>{const e=Et((()=>{const e=localStorage.getItem("userSettings");return e?{...A_,...JSON.parse(e)}:A_})());zr(e,(e=>{localStorage.setItem("userSettings",JSON.stringify(e))}),{deep:!0});const t=ji((()=>e.value.selectedSpecialty)),n=ji((()=>e.value.selectedDifficulty));return{settings:e,selectedSpecialty:t,selectedDifficulty:n,updateSettings:function(t){e.value={...e.value,...t}},resetToDefaults:function(){e.value={...A_}},setSpecialty:function(t){e.value.selectedSpecialty=t},setDifficulty:function(t){e.value.selectedDifficulty=t},setDefaultPreferences:function(t){void 0!==t.defaultSpecialty&&(e.value.defaultSpecialty="all"===t.defaultSpecialty?-1:t.defaultSpecialty),void 0!==t.defaultDifficulty&&(e.value.defaultDifficulty="all"===t.defaultDifficulty?-1:t.defaultDifficulty)},setWordSearchGridSize:function(t,n,r){e.value.wordSearchGame={...e.value.wordSearchGame,gridWidth:t,gridHeight:n,cellSize:r}}}})),P_=go("points",(()=>{const e=N_(),t=vo(),n=Et(0),r=Et(0),i=Et(null),s=ji((()=>n.value+r.value)),o=ji((()=>{if(!i.value||!e.isAuthenticated)return!1;return Math.floor(Date.now()/1e3)-i.value.seconds>=60}));async function a(){if(e.isAuthenticated)try{t.setLoading("points",!0);const s=T_();if(!s)return;const o=(await eb(vw(s,"users",e.user.uid))).data();n.value=o.points||0,r.value=o.freePoints||0,i.value=o.lastFreePointsUpdate,t.setSuccess("points","Pontos carregados")}catch(s){throw t.setError("points",s.message),s}finally{t.setLoading("points",!1)}}return e.isAuthenticated&&a(),{points:n,freePoints:r,totalPoints:s,lastFreePointsUpdate:i,canClaimFreePoints:o,addPoints:async function(i,s=!1){if(!e.isAuthenticated)return;const o=T_();if(!o)return;const a=vw(o,"users",e.user.uid),c=s?"freePoints":"points";try{t.setLoading("points",!0),await nb(a,{[c]:ib(i)}),s?r.value+=i:n.value+=i,t.setSuccess("points","Pontos adicionados com sucesso!")}catch(l){throw s?r.value-=i:n.value-=i,t.setError("points",l.message),l}finally{t.setLoading("points",!1)}},usePoints:async function(i){if(!e.isAuthenticated)return;if(s.value<i)throw t.setError("points","Pontos insuficientes"),new Error("Insufficient points");const o=T_();if(!o)return;let c=i;try{if(t.setLoading("points",!0),r.value>0){const t=Math.min(r.value,c);await nb(vw(o,"users",e.user.uid),{freePoints:ib(-t)}),r.value-=t,c-=t}c>0&&(await nb(vw(o,"users",e.user.uid),{points:ib(-c)}),n.value-=c),t.setSuccess("points","Pontos utilizados com sucesso!")}catch(l){throw await a(),t.setError("points",l.message),l}finally{t.setLoading("points",!1)}},claimDailyPoints:async function(){if(!e.isAuthenticated)return;if(!o.value)throw t.setError("points","Pontos diários não disponíveis ainda"),new Error("Daily points not available yet");const n=T_();if(!n)return;const s=vw(n,"users",e.user.uid);try{t.setLoading("points",!0),await nb(s,{freePoints:ib(10),lastFreePointsUpdate:new Date}),r.value+=10,i.value=new Date,t.setSuccess("points","Pontos diários resgatados!")}catch(c){throw await a(),t.setError("points",c.message),c}finally{t.setLoading("points",!1)}},initializePoints:a,checkDailyPoints:async function(){if(!e.isAuthenticated)return!1;const t=T_();if(!t)return!1;try{const n=(await eb(vw(t,"users",e.user.uid))).data();return i.value=n.lastFreePointsUpdate,o.value}catch(n){return!1}}}})),N_=go("auth",(()=>{const e=Et(null),t=x_(),n=vo(),r=P_(),i=ji((()=>!!e.value)),s=ji((()=>{var t;return!!(null==(t=e.value)?void 0:t.emailVerified)})),o=ji((()=>{var t;return(null==(t=e.value)?void 0:t.settings)||null})),a=ji((()=>{var t,n,r,i;return(null==(n=null==(t=e.value)?void 0:t.settings)?void 0:n.username)||(null==(i=null==(r=e.value)?void 0:r.email)?void 0:i.split("@")[0])||null})),c=ji((()=>{var t,n;return(null==(n=null==(t=e.value)?void 0:t.settings)?void 0:n.isPremium)||!1}));async function l(){try{n.setLoading("auth",!0);const r=I_();await Cu(r),e.value=null,t.resetToDefaults(),await new Promise(((e,t)=>{const n=window.indexedDB.deleteDatabase("firebaseLocalStorageDb");n.onsuccess=()=>e(),n.onerror=e=>t(e),n.onblocked=()=>e()}))}catch(r){throw n.setError("auth",r.message),r}finally{n.setLoading("auth",!1)}}async function u(){var i;try{if(n.setLoading("userSettings",!0),!(null==(i=e.value)?void 0:i.uid))throw new Error("User must be authenticated to fetch settings");const s=String(e.value.uid),o=T_();if(!o)return;const a=C_(o,"users",s),c=await eb(a);if(!c.exists())throw new Error("User settings document not found");{const n=c.data(),i={username:e.value.email.split("@")[0],email:e.value.email,default_difficulty:Number(t.settings.defaultDifficulty),default_speciality:Number(t.settings.defaultSpecialty),custom_vocabulary:[],isPremium:!1,points:0,freePoints:100,lastFreePointsUpdate:new Date},s={...i,...n,points:n.points??i.points,freePoints:n.freePoints??i.freePoints,lastFreePointsUpdate:n.lastFreePointsUpdate??i.lastFreePointsUpdate,default_difficulty:Number(n.default_difficulty??i.default_difficulty),default_speciality:Number(n.default_speciality??i.default_speciality),custom_vocabulary:Array.isArray(n.custom_vocabulary)?n.custom_vocabulary:[],isPremium:Boolean(n.isPremium),premiumActivatedAt:n.premiumActivatedAt||null,emailVerified:e.value.emailVerified||!1};JSON.stringify(s)!==JSON.stringify(n)&&await nb(a,s),e.value.settings=s,t.setDefaultPreferences({defaultSpecialty:s.default_speciality,defaultDifficulty:s.default_difficulty}),r.$patch({points:s.points,freePoints:s.freePoints,lastFreePointsUpdate:s.lastFreePointsUpdate})}}catch(s){throw n.setError("userSettings",s.message),s}finally{n.setLoading("userSettings",!1)}}return{user:e,isAuthenticated:i,isEmailVerified:s,userProfile:o,username:a,isPremium:c,login:async function(t,r){try{n.setLoading("auth",!0);const i=I_();await k_(i);const s=await Tu(i,t,r);if(e.value=s.user,!e.value.emailVerified)return n.setError("auth","Please verify your email address before logging in."),void(await l());await u()}catch(i){throw n.setError("auth",i.message),i}finally{n.setLoading("auth",!1)}},signup:async function(r,i){try{n.setLoading("auth",!0);const s=I_(),o=await async function(e,t,n){if(ac(e.app))return Promise.reject(Dc(e));const r=Fl(e),i=Kl(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fu),s=await i.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Eu(e),t})),o=await pu._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(o.user),o}(s,r,i);e.value=o.user,await ku(e.value);const a={username:r.split("@")[0],email:r,custom_vocabulary:[],default_difficulty:Number(t.settings.defaultDifficulty),default_speciality:Number(t.settings.defaultSpecialty),isPremium:!1,premiumActivatedAt:null,emailVerified:!1,points:0,freePoints:100,lastFreePointsUpdate:new Date},c=T_(),l=String(e.value.uid);await function(e,t,n){e=cw(e,mw);const r=cw(e.firestore,bw),i=function(e,t){let n;return n=e?e.toFirestore(t):t,n}(e.converter,t);return rb(r,[Rw(Lw(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,om.none())])}(C_(c,"users",l),a),e.value.settings=a,t.setDefaultPreferences({defaultSpecialty:a.default_speciality,defaultDifficulty:a.default_difficulty}),await Cu(s),e.value=null,t.resetToDefaults(),n.setSuccess("Please check your email to verify your account before logging in.")}catch(s){throw n.setError("auth",s.message),s}finally{n.setLoading("auth",!1)}},logout:l,updateUserProfile:async function(r){var i;try{if(n.setLoading("userSettings",!0),!(null==(i=e.value)?void 0:i.uid))throw new Error("User must be authenticated to update settings");const s=C_("users",String(e.value.uid)),o=e.value.settings||{},a={username:r.username||o.username,email:o.email,custom_vocabulary:o.custom_vocabulary||[],default_difficulty:Number(r.default_difficulty),default_speciality:Number(r.default_speciality),isPremium:Boolean(r.isPremium??o.isPremium),premiumActivatedAt:r.premiumActivatedAt||o.premiumActivatedAt,emailVerified:o.emailVerified||!1};await nb(s,a),e.value.settings={...o,...a},t.setDefaultPreferences({defaultSpecialty:a.default_speciality,defaultDifficulty:a.default_difficulty})}catch(s){throw n.setError("userSettings",s.message),s}finally{n.setLoading("userSettings",!1)}},fetchUserSettings:u,resendVerificationEmail:async function(){if(!e.value)throw new Error("No user is currently signed in");await ku(e.value),n.setSuccess("Verification email has been resent.")},forgotPassword:async function(e){try{if(!e)throw new Error("Email é obrigatório");n.setLoading("auth",!0);const t=I_();await Su(t,e,y_),n.setSuccess("Email enviado com instruções para redefinir sua senha.")}catch(t){throw n.setError("auth",t.message),t}finally{n.setLoading("auth",!1)}},verifyResetCode:async function(e){try{const t=I_();return await Iu(t,e)}catch(t){throw n.setError("auth","O link de redefinição de senha é inválido ou expirou. Por favor, solicite um novo."),t}},confirmPasswordChange:async function(e,t){try{const r=I_();await async function(e,t,n){await Jl(Wo(e),{oobCode:t,newPassword:n}).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Eu(e),t}))}(r,e,t),n.setSuccess("Senha alterada com sucesso! Você já pode fazer login.")}catch(r){throw n.setError("auth","Não foi possível alterar sua senha. Por favor, tente novamente."),r}}}})),O_="https://api-3jnfwp2o6q-uc.a.run.app";async function D_(){const e=I_();if(!e.currentUser)throw new Error("User must be logged in to perform this action");const t=await e.currentUser.getIdToken();if(!t)throw new Error("Failed to get authentication token");return{Authorization:`Bearer ${t}`,"Content-Type":"application/json"}}async function L_({amount:e,productId:t}){try{const n=await D_(),r=await fetch(`${O_}/create-payment`,{method:"POST",headers:n,body:JSON.stringify({amount:e,productId:t})});if(!r.ok){const e=await r.json();throw new Error(e.details||"Failed to create payment")}return await r.json()}catch(n){throw n}}const R_=go("payments",(()=>{const e=Et([]),t=Et(null),n=vo(),r=N_(),i=P_(),s=Et(!1),o=Et(null),a=Et(null),c=Et(null);async function l(e){var t;try{if(c.value&&Date.now()-c.value>3e5)return h(),n.setError("payment","O tempo limite para confirmação do pagamento foi excedido. Por favor, tente novamente."),!1;const s=await async function(e){try{const t=await D_(),n=await fetch(`${O_}/payment-status/${e}`,{headers:t});if(!n.ok){const e=await n.json();throw new Error(e.error||"Failed to fetch payment status")}return await n.json()}catch(o){throw o}}(e);return"approved"===s.status?(h(),"points-purchase"===s.productId&&(null==(t=s.metadata)?void 0:t.pointsAmount)?await i.addPurchasedPoints(Number(s.metadata.pointsAmount)):await r.fetchUserSettings(),n.setSuccess("Pagamento aprovado!"),!0):!!["cancelled","rejected","expired"].includes(s.status)&&(h(),n.setError("payment","O pagamento foi cancelado ou expirou."),!1)}catch(s){return!1}}function u(e){h(),c.value=Date.now(),a.value=setInterval((async()=>{try{await l(e)}catch(t){}}),5e3)}function h(){a.value&&(clearInterval(a.value),a.value=null),c.value=null}return{orders:e,loading:s,error:o,donationsHistory:t,POINTS_PER_BRL:5,purchasePremium:async function(){try{s.value=!0;const e=await L_({amount:1.99,productId:"premium-access"});return u(e.id),e}catch(e){throw n.setError("premium",e.message),e}finally{s.value=!1}},purchasePoints:async function(e){try{s.value=!0;const t=Math.ceil(e/5),n=await L_({amount:t,productId:"points-purchase",metadata:{pointsAmount:e}});return u(n.id),n}catch(t){throw n.setError("points",t.message),t}finally{s.value=!1}},loadPurchaseHistory:async function(){try{s.value=!0;const t=await async function(){try{const e=await D_(),t=await fetch(`${O_}/purchase-history`,{headers:e});if(!t.ok){const e=await t.json();throw new Error(e.error||"Failed to fetch purchase history")}return await t.json()}catch(o){throw o}}();e.value=t}catch(t){throw n.setError("orders",t.message),t}finally{s.value=!1}},checkPaymentStatus:l,stopPolling:h,loadDonationsHistory:async function(){try{s.value=!0;const e=await async function(){try{const e=await D_(),t=await fetch(`${O_}/donations`,{headers:e});if(!t.ok){const e=await t.json();throw new Error(e.error||"Failed to fetch donations history")}return await t.json()}catch(o){throw o}}();return t.value=e,e}catch(e){throw n.setError("donations",e.message),e}finally{s.value=!1}}}})),M_=["Anatomia","Fisiologia","Biologia Celular","Histologia","Neurologia","Hematologia","Endocrinologia","Cardiologia","Pneumologia","Gastroenterologia","Nefrologia","Oncologia","Dermatologia","Psiquiatria","Obstetrícia","Ginecologia","Pediatria","Ortopedia","Radiologia","Cirurgia","Infectologia","Imunologia","Patologia","Anestesiologia","Hepatologia","Emergência Médica","Farmacologia","Genética","Microbiologia","Bioquímica"],F_="undefined"!=typeof document;function U_(e){return"object"==typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}const V_=Object.assign;function j_(e,t){const n={};for(const r in t){const i=t[r];n[r]=B_(i)?i.map(e):e(i)}return n}const z_=()=>{},B_=Array.isArray,$_=/#/g,q_=/&/g,H_=/\//g,K_=/=/g,G_=/\?/g,W_=/\+/g,Q_=/%5B/g,Y_=/%5D/g,J_=/%5E/g,X_=/%60/g,Z_=/%7B/g,eE=/%7C/g,tE=/%7D/g,nE=/%20/g;function rE(e){return encodeURI(""+e).replace(eE,"|").replace(Q_,"[").replace(Y_,"]")}function iE(e){return rE(e).replace(W_,"%2B").replace(nE,"+").replace($_,"%23").replace(q_,"%26").replace(X_,"`").replace(Z_,"{").replace(tE,"}").replace(J_,"^")}function sE(e){return null==e?"":function(e){return rE(e).replace($_,"%23").replace(G_,"%3F")}(e).replace(H_,"%2F")}function oE(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const aE=/\/$/;function cE(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:oE(o)}}function lE(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function uE(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function hE(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!dE(e[n],t[n]))return!1;return!0}function dE(e,t){return B_(e)?fE(e,t):B_(t)?fE(t,e):e===t}function fE(e,t){return B_(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}const pE={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mE,gE,vE,yE;function wE(e){if(!e)if(F_){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(aE,"")}(gE=mE||(mE={})).pop="pop",gE.push="push",(yE=vE||(vE={})).back="back",yE.forward="forward",yE.unknown="";const bE=/^[^#]+#/;function _E(e,t){return e.replace(bE,"#")+t}const EE=()=>({left:window.scrollX,top:window.scrollY});function SE(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function IE(e,t){return(history.state?history.state.position-t:-1)+e}const TE=new Map;function kE(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),lE(n,"")}return lE(n,e)+r+i}function CE(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?EE():null}}function AE(e){const{history:t,location:n}=window,r={value:kE(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){n[o?"replace":"assign"](c)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=V_({},i.value,t.state,{forward:e,scroll:EE()});s(o.current,o,!0),s(e,V_({},CE(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,V_({},t.state,CE(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}function xE(e){return"string"==typeof e||"symbol"==typeof e}const PE=Symbol("");var NE,OE;function DE(e,t){return V_(new Error,{type:e,[PE]:!0},t)}function LE(e,t){return e instanceof Error&&PE in e&&(null==t||!!(e.type&t))}(OE=NE||(NE={}))[OE.aborted=4]="aborted",OE[OE.cancelled=8]="cancelled",OE[OE.duplicated=16]="duplicated";const RE="[^/]+?",ME={sensitive:!1,strict:!1,start:!0,end:!0},FE=/[.+*?^${}()[\]/\\]/g;function UE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function VE(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=UE(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(jE(r))return 1;if(jE(i))return-1}return i.length-r.length}function jE(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const zE={type:0,value:""},BE=/[a-zA-Z0-9_]/;function $E(e,t,n){const r=function(e,t){const n=V_({},ME,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(FE,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;s.push({name:e,repeatable:n,optional:l});const h=u||RE;if(h!==RE){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=l&&c.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),i+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(B_(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=B_(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[zE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:BE.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}(e.path),n),i=V_(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function qE(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,c=KE(e);c.aliasOf=r&&r.record;const l=YE(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(KE(V_({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c})))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=$E(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!WE(h)&&s(e.name)),JE(h)&&o(h),c.children){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h}return d?()=>{s(d)}:z_}function s(e){if(xE(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){const t=function(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;VE(e,t[i])<0?r=i:n=i+1}const i=function(e){let t=e;for(;t=t.parent;)if(JE(t)&&0===VE(e,t))return t;return}(e);i&&(r=t.lastIndexOf(i,r-1));return r}(e,n);n.splice(t,0,e),e.record.name&&!WE(e)&&r.set(e.record.name,e)}return t=YE({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw DE(1,{location:e});o=i.record.name,a=V_(HE(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&HE(e.params,i.keys.map((e=>e.name)))),s=i.stringify(a)}else if(null!=e.path)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw DE(1,{location:e,currentLocation:t});o=i.record.name,a=V_({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:QE(c)}},removeRoute:s,clearRoutes:function(){n.length=0,r.clear()},getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function HE(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function KE(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:GE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function GE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function WE(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function QE(e){return e.reduce(((e,t)=>V_(e,t.meta)),{})}function YE(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function JE({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function XE(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(W_," "),i=e.indexOf("="),s=oE(i<0?e:e.slice(0,i)),o=i<0?null:oE(e.slice(i+1));if(s in t){let e=t[s];B_(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function ZE(e){let t="";for(let n in e){const r=e[n];if(n=iE(n).replace(K_,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(B_(r)?r.map((e=>e&&iE(e))):[r&&iE(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function eS(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=B_(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const tS=Symbol(""),nS=Symbol(""),rS=Symbol(""),iS=Symbol(""),sS=Symbol("");function oS(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function aS(e,t,n,r,i,s=e=>e()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const l=e=>{var s;!1===e?c(DE(4,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(s=e)||s&&"object"==typeof s?c(DE(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"==typeof e&&o.push(e),a())},u=s((()=>e.call(r&&r.instances[i],t,n,l)));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch((e=>c(e)))}))}function cS(e,t,n,r,i=e=>e()){const s=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(U_(a)){const c=(a.__vccOpts||a)[t];c&&s.push(aS(c,n,r,o,e,i))}else{let c=a();s.push((()=>c.then((s=>{if(!s)throw new Error(`Couldn't resolve component "${e}" at "${o.path}"`);const a=(c=s).__esModule||"Module"===c[Symbol.toStringTag]||c.default&&U_(c.default)?s.default:s;var c;o.mods[e]=s,o.components[e]=a;const l=(a.__vccOpts||a)[t];return l&&aS(l,n,r,o,e,i)()}))))}}return s}function lS(e){const t=vr(rS),n=vr(iS),r=ji((()=>{const n=kt(e.to);return t.resolve(n)})),i=ji((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(uE.bind(null,i));if(o>-1)return o;const a=hS(e[t-2]);return t>1&&hS(i)===a&&s[s.length-1].path!==a?s.findIndex(uE.bind(null,e[t-2])):o})),s=ji((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!B_(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=ji((()=>i.value>-1&&i.value===n.matched.length-1&&hE(n.params,r.value.params)));return{route:r,href:ji((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){if(function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)){const n=t[kt(e.replace)?"replace":"push"](kt(e.to)).catch(z_);return e.viewTransition&&"undefined"!=typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}}}const uS=En({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lS,setup(e,{slots:t}){const n=lt(lS(e)),{options:r}=vr(rS),i=ji((()=>({[dS(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[dS(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&(1===(s=t.default(n)).length?s[0]:s);var s;return e.custom?r:zi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function hS(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const dS=(e,t,n)=>null!=e?e:null!=t?t:n,fS=En({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=vr(sS),i=ji((()=>e.route||r.value)),s=vr(nS,0),o=ji((()=>{let e=kt(s);const{matched:t}=i.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),a=ji((()=>i.value.matched[o.value]));gr(nS,ji((()=>o.value+1))),gr(tS,a),gr(sS,i);const c=Et();return zr((()=>[c.value,a.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&uE(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=e.name,o=a.value,l=o&&o.components[s];if(!l)return pS(n.default,{Component:l,route:r});const u=o.props[s],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=zi(l,V_({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[s]=null)},ref:c}));return pS(n.default,{Component:d,route:r})||d}}});function pS(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const mS=fS;function gS(){return vr(rS)}function vS(e){return vr(iS)}const yS=["disabled","type"],wS=Ys({__name:"BaseButton",props:{variant:{type:String,default:"primary",validator:e=>["primary","secondary","accent","outline"].includes(e)},icon:{type:String,default:""},iconSize:{type:String,default:"1x"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},type:{type:String,default:"button"}},emits:["click"],setup(e){const t=vo(),n=ji((()=>t.isDarkMode));return(t,r)=>{const i=$n("font-awesome-icon");return oi(),ui("button",{class:$(["base-button",e.variant,{icon:!!e.icon,disabled:e.disabled,loading:e.loading},{dark:n.value}]),disabled:e.disabled||e.loading,type:e.type,onClick:r[0]||(r[0]=e=>t.$emit("click",e))},[e.icon?(oi(),hi(i,{key:0,icon:["fas",e.icon],size:e.iconSize,class:$({"fa-icon":e.loading})},null,8,["icon","size","class"])):bi("",!0),t.$slots.default?(oi(),ui("span",{key:1,class:$({"with-icon":e.icon&&!e.loading})},[Gn(t.$slots,"default",{},void 0)],2)):bi("",!0)],10,yS)}}},[["__scopeId","data-v-369ddd89"]]),bS=["for"],_S={class:"input-wrapper"},ES=["id","type","value","placeholder","disabled","maxlength","required"],SS={key:1,class:"error-text"},IS={key:2,class:"hint-text"},TS=Ys({__name:"BaseInput",props:{modelValue:{type:[String,Number],default:""},label:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},maxlength:{type:Number,default:void 0},icon:{type:String,default:""},error:{type:String,default:""},hint:{type:String,default:""},id:{type:String,default:()=>`input-${Math.random().toString(36).substring(2,9)}`}},emits:["update:modelValue","blur","focus"],setup(e){const t=vo(),n=ji((()=>t.isDarkMode));return(t,r)=>{const i=$n("font-awesome-icon");return oi(),ui("div",{class:$(["input-container",{dark:n.value}])},[e.label?(oi(),ui("label",{key:0,for:e.id,class:"input-label"},Q(e.label),9,bS)):bi("",!0),gi("div",_S,[gi("input",{id:e.id,type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxlength,required:e.required,class:$(["base-input",{"with-icon":!!e.icon}]),onInput:r[0]||(r[0]=e=>t.$emit("update:modelValue",e.target.value)),onBlur:r[1]||(r[1]=e=>t.$emit("blur",e)),onFocus:r[2]||(r[2]=e=>t.$emit("focus",e))},null,42,ES),e.icon?(oi(),hi(i,{key:0,icon:["fas",e.icon],class:"input-icon"},null,8,["icon"])):bi("",!0)]),e.error?(oi(),ui("small",SS,Q(e.error),1)):e.hint?(oi(),ui("small",IS,Q(e.hint),1)):bi("",!0)],2)}}},[["__scopeId","data-v-f789e074"]]),kS=["for"],CS={class:"select-wrapper"},AS=["id","value","disabled","required"],xS={key:0,value:"",disabled:"",selected:""},PS=["value","disabled"],NS={key:1,class:"error-text"},OS={key:2,class:"hint-text"},DS=Ys({__name:"BaseSelect",props:{modelValue:{type:[String,Number],default:""},options:{type:Array,required:!0,validator:e=>e.every((e=>"object"==typeof e&&"value"in e&&"label"in e))},label:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},error:{type:String,default:""},hint:{type:String,default:""},id:{type:String,default:()=>`select-${Math.random().toString(36).substring(2,9)}`}},emits:["update:modelValue"],setup(e){const t=vo(),n=ji((()=>t.isDarkMode));return(t,r)=>{const i=$n("font-awesome-icon");return oi(),ui("div",{class:$(["select-container",{dark:n.value}])},[e.label?(oi(),ui("label",{key:0,for:e.id,class:"select-label"},Q(e.label),9,kS)):bi("",!0),gi("div",CS,[gi("select",{id:e.id,value:e.modelValue,disabled:e.disabled,required:e.required,class:"base-select",onChange:r[0]||(r[0]=e=>t.$emit("update:modelValue",e.target.value))},[e.placeholder?(oi(),ui("option",xS,Q(e.placeholder),1)):bi("",!0),(oi(!0),ui(ei,null,Kn(e.options,(e=>(oi(),ui("option",{key:e.value,value:e.value,disabled:e.disabled},Q(e.label),9,PS)))),128))],40,AS),vi(i,{icon:["fas","chevron-down"],class:"select-icon"})]),e.error?(oi(),ui("small",NS,Q(e.error),1)):e.hint?(oi(),ui("small",OS,Q(e.hint),1)):bi("",!0)],2)}}},[["__scopeId","data-v-4f167210"]]),LS={key:1,class:"modal-header"},RS={class:"modal-body"},MS={key:2,class:"modal-footer"},FS=Ys({__name:"BaseModal",props:{modelValue:{type:Boolean,required:!0},title:{type:String,default:""},showClose:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(e,{emit:t}){const n=t,r=vo(),i=ji((()=>r.isDarkMode));function s(){n("update:modelValue",!1),n("close")}return(t,n)=>{const r=$n("font-awesome-icon");return oi(),hi(es,{name:"fade"},{default:rn((()=>[e.modelValue?(oi(),ui("div",{key:0,class:"modal-overlay",onClick:$s(s,["self"])},[gi("div",{class:$(["modal-content",{dark:i.value}])},[e.showClose?(oi(),ui("button",{key:0,class:"close-button",onClick:s},[vi(r,{icon:["fas","times"]})])):bi("",!0),e.title?(oi(),ui("div",LS,[gi("h3",null,Q(e.title),1)])):bi("",!0),gi("div",RS,[Gn(t.$slots,"default",{},void 0)]),t.$slots.footer?(oi(),ui("div",MS,[Gn(t.$slots,"footer",{},void 0)])):bi("",!0)],2)])):bi("",!0)])),_:3})}}},[["__scopeId","data-v-127bfe80"]]),US={class:"shop-container"},VS={class:"products-grid"},jS={class:"product-card"},zS={class:"supporter-perks"},BS={class:"price-container"},$S={class:"price"},qS={class:"pix-container"},HS={key:0,class:"loading-container"},KS=["src"],GS={class:"pix-code"},WS={class:"copy-area"},QS=["value"],YS={key:2,class:"payment-error"},JS={class:"button-group"},XS={class:"success-container"},ZS={class:"premium-benefits"},eI=Ys({__name:"ShopComponent",setup(e){const t=N_(),n=R_(),r=vo(),{isAuthenticated:i}=t,s=Et(!1),o=Et(!1),a=Et(!1),c=Et(null);async function l(){if(i)try{s.value=!0,o.value=!0;const e=await n.purchasePremium();e&&(c.value=e)}catch(e){r.setError("premium",e.message)}finally{s.value=!1}}function u(){a.value=!1}function h(){o.value=!1,c.value=null}async function d(){var e,t,n;(null==(n=null==(t=null==(e=c.value)?void 0:e.point_of_interaction)?void 0:t.transaction_data)?void 0:n.qr_code)&&(await navigator.clipboard.writeText(c.value.point_of_interaction.transaction_data.qr_code),r.setSuccess("Código PIX copiado!"))}return zr((()=>t.isPremium),(e=>{e&&(o.value=!1,a.value=!0,r.setSuccess("Pagamento aprovado! Seu acesso Premium foi ativado."))})),(e,t)=>{const r=$n("font-awesome-icon");return oi(),ui("div",US,[gi("div",VS,[gi("div",jS,[t[7]||(t[7]=gi("h2",null,"Apoie o MediQuix",-1)),gi("div",zS,[t[5]||(t[5]=gi("h3",null,"Benefícios do Apoiador:",-1)),gi("ul",null,[gi("li",null,[vi(r,{icon:"unlock",class:"perk-icon"}),t[2]||(t[2]=wi(" Acesso ilimitado a todos os jogos "))]),gi("li",null,[vi(r,{icon:"star",class:"perk-icon"}),t[3]||(t[3]=wi(" Conteúdo exclusivo e especialidades extras "))]),gi("li",null,[vi(r,{icon:"heart",class:"perk-icon"}),t[4]||(t[4]=wi(" Ajude a manter o projeto vivo e crescendo "))])])]),gi("div",BS,[gi("div",$S,"R$ "+Q(1.99.toFixed(2)),1),t[6]||(t[6]=gi("span",{class:"price-period"},"contribuição única",-1))]),vi(wS,{variant:"primary",onClick:l,disabled:!kt(i)||s.value,loading:s.value},{default:rn((()=>[wi(Q(kt(i)?"Apoiar via PIX":"Faça login para apoiar"),1)])),_:1},8,["disabled","loading"])])]),vi(FS,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),title:"Pagamento PIX"},{default:rn((()=>{var e,i,s,o;return[gi("div",qS,[kt(n).loading?(oi(),ui("div",HS,[vi(r,{icon:"circle-notch",size:"3x",class:"loading-icon",spin:""}),t[8]||(t[8]=gi("p",null,"Gerando QR Code PIX...",-1))])):c.value?(oi(),ui(ei,{key:1},[t[12]||(t[12]=gi("h3",null,"Escaneie o QR Code para pagar",-1)),(null==(i=null==(e=c.value.point_of_interaction)?void 0:e.transaction_data)?void 0:i.qr_code_base64)?(oi(),ui("img",{key:0,src:`data:image/png;base64,${c.value.point_of_interaction.transaction_data.qr_code_base64}`,alt:"QR Code PIX",class:"pix-qr-code"},null,8,KS)):bi("",!0),gi("div",GS,[t[10]||(t[10]=gi("p",null,"Ou copie o código PIX:",-1)),gi("div",WS,[gi("input",{type:"text",readonly:"",value:null==(o=null==(s=c.value.point_of_interaction)?void 0:s.transaction_data)?void 0:o.qr_code},null,8,QS),vi(wS,{onClick:d,icon:"copy"},{default:rn((()=>t[9]||(t[9]=[wi(" Copiar ")]))),_:1})]),t[11]||(t[11]=gi("p",{class:"helper-text"}," Após o pagamento, seu acesso Premium será ativado automaticamente. Não é necessário enviar comprovante. ",-1))])],64)):(oi(),ui("div",YS,[vi(r,{icon:"exclamation-circle",size:"3x",class:"error-icon"}),t[15]||(t[15]=gi("h3",null,"Erro no Pagamento",-1)),t[16]||(t[16]=gi("p",null,"O pagamento foi cancelado ou ocorreu um erro.",-1)),gi("div",JS,[vi(wS,{onClick:l,variant:"primary"},{default:rn((()=>t[13]||(t[13]=[wi(" Tentar Novamente ")]))),_:1}),vi(wS,{onClick:h,variant:"outline"},{default:rn((()=>t[14]||(t[14]=[wi(" Cancelar ")]))),_:1})])]))])]})),_:1},8,["modelValue"]),vi(FS,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),title:"Pagamento Aprovado!"},{default:rn((()=>[gi("div",XS,[vi(r,{icon:"check-circle",size:"3x",class:"success-icon"}),t[21]||(t[21]=gi("h3",null,"Parabéns! Você agora é um Apoiador Premium!",-1)),t[22]||(t[22]=gi("p",null,"Seu pagamento foi confirmado e seu acesso Premium já está ativo.",-1)),gi("div",ZS,[t[19]||(t[19]=gi("h4",null,"Seus benefícios:",-1)),gi("ul",null,[gi("li",null,[vi(r,{icon:"unlock",class:"benefit-icon"}),t[17]||(t[17]=wi(" Acesso ilimitado a todos os jogos "))]),gi("li",null,[vi(r,{icon:"star",class:"benefit-icon"}),t[18]||(t[18]=wi(" Conteúdo exclusivo e especialidades extras "))])])]),vi(wS,{onClick:u,variant:"primary",icon:"crown"},{default:rn((()=>t[20]||(t[20]=[wi(" Começar a Usar ")]))),_:1})])])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-85ea903e"]]),tI={key:1,class:"user-area"},nI={class:"user-email"},rI={class:"user-profile"},iI={class:"profile-section"},sI={class:"profile-header"},oI={class:"profile-info"},aI={class:"member-status"},cI={class:"profile-section donations-section",style:{display:"none"}},lI={class:"donations-content"},uI={key:0,class:"loading-state"},hI={key:1,class:"donation-stats"},dI={class:"stat-item"},fI={class:"stat-value"},pI={class:"stat-item"},mI={class:"stat-value"},gI={key:2,class:"empty-state"},vI={class:"profile-section actions-section"},yI={class:"quick-actions"},wI={class:"auth-modal-content"},bI={class:"app-intro"},_I={class:"feature-list"},EI={class:"feature-item"},SI={class:"feature-item"},II={class:"feature-item"},TI={class:"auth-forms"},kI={class:"auth-switch-text"},CI={key:1,class:"success-message"},AI={class:"auth-message"},xI={key:0,class:"error-message"},PI={key:0},NI=Ys({__name:"AuthControls",setup(e){const t=N_(),n=vo(),r=R_(),i=ji((()=>n.isDarkMode)),s=Et(!1),o=Et(!1),a=Et(!1),c=Et(!1),l=Et(!1),u=Et(""),h=Et(""),d=Et(""),f=Et(""),p=Et(!1),m=Et(""),g=Et(!1),v=Et(!1),y=Et(""),w=Et(""),b=Et(""),_=Et(""),E=vS(),S=gS(),I=ji((()=>!w.value||!b.value||w.value===b.value));async function T(){if(I.value)try{s.value=!0,await t.confirmPasswordChange(_.value,w.value),v.value=!1,p.value=!1,l.value=!1,w.value="",b.value="",_.value="",y.value=""}catch(e){}finally{s.value=!1}}Ln((async()=>{const e=E.query.oobCode;if(e)try{c.value=!0,v.value=!0,_.value=e,y.value=await t.verifyResetCode(e),S.replace({query:{}})}catch(n){v.value=!1}}));const k=Et(!1),C=Et({username:"",default_difficulty:-1,default_speciality:-1}),A=Et(!1),x=Et([]),P=Et("");async function N(){s.value=!0,A.value=!0;try{x.value=await r.loadDonationsHistory(),P.value=x.value.payments.reduce(((e,t)=>e+t.amount),0).toFixed(2)}catch(e){}finally{s.value=!1}}const O=Et(!1),D=ji((()=>[{value:-1,label:"Todas"},...M_.map(((e,t)=>({value:t,label:e})))])),L=[{value:-1,label:"Todas"},{value:1,label:"Fácil"},{value:2,label:"Média"},{value:3,label:"Difícil"}];function R(){l.value=!l.value}async function M(){try{s.value=!0,a.value=!1,await t.login(u.value,h.value),c.value=!1,n.toggleDrawer()}catch(e){e.message.includes("email")&&e.message.includes("verify")&&(a.value=!0),n.setError("auth",e.message)}finally{s.value=!1}}async function F(){try{s.value=!0,await t.signup(d.value,f.value),c.value=!1,n.setSuccess("Verifique seu email para ativar sua conta.")}catch(e){n.setError("auth",e.message)}finally{s.value=!1}}async function U(){try{o.value=!0,await t.resendVerificationEmail(),a.value=!1}catch(e){n.setError("auth",e.message)}finally{o.value=!1}}async function V(){try{await t.forgotPassword(m.value),g.value=!0}catch(e){}}function j(){p.value=!1,g.value=!1}async function z(){try{s.value=!0,await t.logout(),A.value=!1}catch(e){n.setError("auth",e.message)}finally{s.value=!1}}async function B(){try{s.value=!0,await t.updateUserProfile(C.value),k.value=!1,n.setSuccess("Configurações salvas com sucesso!")}catch(e){n.setError("settings",e.message)}finally{s.value=!1}}return(e,n)=>{const r=$n("font-awesome-icon");return oi(),ui("div",{class:$(["auth-controls",{dark:i.value}])},[kt(t).isAuthenticated?(oi(),ui("div",tI,[vi(wS,{onClick:N},{default:rn((()=>[gi("p",nI,[kt(t).isPremium?(oi(),hi(r,{key:0,class:"premium-icon",icon:"crown",title:"Usuário Premium"})):bi("",!0),vi(r,{icon:["fas","user"],class:"user-icon"})])])),_:1})])):(oi(),hi(wS,{key:0,onClick:n[0]||(n[0]=e=>c.value=!0),variant:"primary",disabled:s.value},{default:rn((()=>n[20]||(n[20]=[wi(" Login ")]))),_:1},8,["disabled"])),vi(FS,{modelValue:A.value,"onUpdate:modelValue":n[3]||(n[3]=e=>A.value=e),title:"Meu MediQuix"},{default:rn((()=>{var e,i;return[gi("div",rI,[gi("div",iI,[gi("div",sI,[vi(r,{icon:["fas","user"],class:"profile-icon"}),gi("div",oI,[gi("h3",null,Q(kt(t).username||(null==(e=kt(t).user)?void 0:e.email)),1),gi("span",aI,[kt(t).isPremium?(oi(),hi(r,{key:0,icon:"crown",class:"premium-icon",title:"Usuário Premium"})):bi("",!0),wi(" "+Q(kt(t).isPremium?"Membro Premium":"Membro Gratuito"),1)])])])]),gi("div",cI,[gi("h4",null,[vi(r,{icon:"heart",class:"section-icon"}),n[21]||(n[21]=wi(" Histórico de Apoio "))]),gi("div",lI,[s.value?(oi(),ui("div",uI,[vi(r,{icon:"circle-notch",spin:""}),n[22]||(n[22]=gi("span",null,"Carregando doações...",-1))])):(null==(i=x.value)?void 0:i.count)>0?(oi(),ui("div",hI,[gi("div",dI,[n[23]||(n[23]=gi("span",{class:"stat-label"},"Total Doado",-1)),gi("span",fI,"R$ "+Q(P.value),1)]),gi("div",pI,[n[24]||(n[24]=gi("span",{class:"stat-label"},"Doações",-1)),gi("span",mI,Q(x.value.count),1)])])):(oi(),ui("p",gI,[vi(r,{icon:"info-circle"}),n[25]||(n[25]=wi(" Você ainda não fez nenhuma doação "))]))])]),gi("div",vI,[gi("h4",null,[vi(r,{icon:"bolt",class:"section-icon"}),n[26]||(n[26]=wi(" Ações Rápidas "))]),gi("div",yI,[vi(wS,{onClick:n[1]||(n[1]=e=>O.value=!0),variant:"primary",icon:"heart",class:"action-button"},{default:rn((()=>n[27]||(n[27]=[wi(" Apoiar MediQuix ")]))),_:1}),vi(wS,{onClick:n[2]||(n[2]=e=>k.value=!0),variant:"secondary",icon:"cog",class:"action-button",disabled:s.value},{default:rn((()=>n[28]||(n[28]=[wi(" Configurações ")]))),_:1},8,["disabled"]),vi(wS,{onClick:z,variant:"outline",icon:"sign-out-alt",class:"action-button",disabled:s.value},{default:rn((()=>n[29]||(n[29]=[wi(" Sair ")]))),_:1},8,["disabled"])])])])]})),_:1},8,["modelValue"]),vi(FS,{modelValue:O.value,"onUpdate:modelValue":n[4]||(n[4]=e=>O.value=e),title:"Apoie o MediQuix"},{default:rn((()=>[vi(eI)])),_:1},8,["modelValue"]),vi(FS,{modelValue:c.value,"onUpdate:modelValue":n[13]||(n[13]=e=>c.value=e)},{default:rn((()=>[gi("div",wI,[gi("div",bI,[n[33]||(n[33]=gi("img",{src:Qs,alt:"MediQuix Logo",class:"intro-logo"},null,-1)),n[34]||(n[34]=gi("h2",{class:"intro-title"},"Aprendizado médico gamificado",-1)),n[35]||(n[35]=gi("p",{class:"intro-text"}," MediQuix é um projeto acadêmico desenvolvido para ajudar estudantes de medicina a expandir seu vocabulário médico através de jogos interativos e divertidos. ",-1)),gi("div",_I,[gi("div",EI,[vi(r,{icon:"gamepad",class:"feature-icon"}),n[30]||(n[30]=gi("span",null,"Jogos educativos",-1))]),gi("div",SI,[vi(r,{icon:"book-medical",class:"feature-icon"}),n[31]||(n[31]=gi("span",null,"Vocabulário especializado",-1))]),gi("div",II,[vi(r,{icon:"chart-line",class:"feature-icon"}),n[32]||(n[32]=gi("span",null,"Acompanhe seu progresso",-1))])])]),gi("div",TI,[l.value||p.value||v.value?p.value?(oi(),ui(ei,{key:1},[g.value?(oi(),ui("div",CI,[vi(r,{icon:"check-circle",class:"success-icon"}),n[39]||(n[39]=gi("p",null,"Email enviado com sucesso!",-1)),n[40]||(n[40]=gi("p",{class:"auth-message"},"Verifique sua caixa de entrada para redefinir sua senha.",-1))])):(oi(),ui(ei,{key:0},[n[38]||(n[38]=gi("p",{class:"auth-message"},"Digite seu email para receber instruções de recuperação de senha.",-1)),vi(TS,{modelValue:m.value,"onUpdate:modelValue":n[8]||(n[8]=e=>m.value=e),type:"email",placeholder:"Seu email",icon:"envelope",disabled:s.value},null,8,["modelValue","disabled"]),vi(wS,{class:"modal-btn",icon:"paper-plane",loading:s.value,disabled:s.value,onClick:V},{default:rn((()=>[wi(Q(s.value?"Enviando...":"Enviar instruções"),1)])),_:1},8,["loading","disabled"])],64)),gi("p",{class:"auth-switch-text"},[gi("a",{class:"toggle-link",onClick:j},"Voltar ao login")])],64)):v.value?(oi(),ui(ei,{key:2},[n[41]||(n[41]=gi("h3",{class:"form-title"},"Redefinir Senha",-1)),gi("p",AI,"Digite sua nova senha para "+Q(y.value),1),vi(TS,{modelValue:w.value,"onUpdate:modelValue":n[9]||(n[9]=e=>w.value=e),type:"password",placeholder:"Nova senha",icon:"lock",disabled:s.value},null,8,["modelValue","disabled"]),vi(TS,{modelValue:b.value,"onUpdate:modelValue":n[10]||(n[10]=e=>b.value=e),type:"password",placeholder:"Confirme a nova senha",icon:"lock",disabled:s.value},null,8,["modelValue","disabled"]),vi(wS,{class:"modal-btn",icon:"key",loading:s.value,disabled:s.value||!I.value,onClick:T},{default:rn((()=>[wi(Q(s.value?"Alterando...":"Alterar Senha"),1)])),_:1},8,["loading","disabled"]),!I.value&&w.value&&b.value?(oi(),ui("p",xI," As senhas não coincidem ")):bi("",!0)],64)):(oi(),ui(ei,{key:3},[vi(TS,{modelValue:d.value,"onUpdate:modelValue":n[11]||(n[11]=e=>d.value=e),type:"email",placeholder:"Seu email",icon:"envelope",disabled:s.value},null,8,["modelValue","disabled"]),vi(TS,{modelValue:f.value,"onUpdate:modelValue":n[12]||(n[12]=e=>f.value=e),type:"password",placeholder:"Escolha uma senha segura",icon:"lock",disabled:s.value},null,8,["modelValue","disabled"]),vi(wS,{class:"modal-btn",icon:"user-plus",loading:s.value,disabled:s.value,onClick:F},{default:rn((()=>[wi(Q(s.value?"Criando conta...":"Criar conta"),1)])),_:1},8,["loading","disabled"]),gi("p",{class:"auth-switch-text"},[n[42]||(n[42]=wi(" Já tem uma conta? ")),gi("a",{class:"toggle-link",onClick:R},"Entrar")])],64)):(oi(),ui(ei,{key:0},[vi(TS,{modelValue:u.value,"onUpdate:modelValue":n[5]||(n[5]=e=>u.value=e),type:"email",placeholder:"Seu email",icon:"envelope",disabled:s.value},null,8,["modelValue","disabled"]),vi(TS,{modelValue:h.value,"onUpdate:modelValue":n[6]||(n[6]=e=>h.value=e),type:"password",placeholder:"Sua senha",icon:"lock",disabled:s.value},null,8,["modelValue","disabled"]),vi(wS,{class:"modal-btn",icon:"sign-in-alt",loading:s.value,disabled:s.value,onClick:M},{default:rn((()=>[wi(Q(s.value?"Entrando...":"Entrar"),1)])),_:1},8,["loading","disabled"]),a.value?(oi(),ui(ei,{key:0},[n[36]||(n[36]=gi("p",{class:"auth-message"},"Ainda não verificou seu email?",-1)),vi(wS,{variant:"secondary",icon:"envelope",loading:o.value,disabled:o.value,onClick:U},{default:rn((()=>[wi(Q(o.value?"Reenviando...":"Reenviar email de verificação"),1)])),_:1},8,["loading","disabled"])],64)):bi("",!0),gi("p",kI,[gi("a",{class:"toggle-link",onClick:n[7]||(n[7]=e=>p.value=!0)},"Esqueceu sua senha?")]),gi("p",{class:"auth-switch-text"},[n[37]||(n[37]=wi(" Ainda não tem uma conta? ")),gi("a",{class:"toggle-link",onClick:R},"Criar conta")])],64))])])])),_:1},8,["modelValue"]),vi(FS,{modelValue:k.value,"onUpdate:modelValue":n[19]||(n[19]=e=>k.value=e),title:"Configurações"},{default:rn((()=>[kt(t).user?(oi(),ui(ei,{key:1},[vi(TS,{modelValue:C.value.username,"onUpdate:modelValue":n[16]||(n[16]=e=>C.value.username=e),label:"Username",disabled:!kt(t).user||s.value},null,8,["modelValue","disabled"]),vi(DS,{modelValue:C.value.default_difficulty,"onUpdate:modelValue":n[17]||(n[17]=e=>C.value.default_difficulty=e),options:L,label:"Default Difficulty",disabled:!kt(t).user||s.value},null,8,["modelValue","disabled"]),vi(DS,{modelValue:C.value.default_speciality,"onUpdate:modelValue":n[18]||(n[18]=e=>C.value.default_speciality=e),options:D.value,label:"Default Specialty",disabled:!kt(t).user||s.value},null,8,["modelValue","options","disabled"])],64)):(oi(),ui("p",PI,[n[43]||(n[43]=wi(" Please ")),gi("a",{class:"toggle-link",onClick:n[14]||(n[14]=(...t)=>e.handleLoginClick&&e.handleLoginClick(...t))},"login"),n[44]||(n[44]=wi(" or ")),gi("a",{class:"toggle-link",onClick:n[15]||(n[15]=(...t)=>e.handleRegisterClick&&e.handleRegisterClick(...t))},"register"),n[45]||(n[45]=wi(" to set your default settings. "))]))])),footer:rn((()=>[vi(wS,{variant:"primary",icon:"save",disabled:!kt(t).user||s.value,loading:s.value,onClick:B},{default:rn((()=>[wi(Q(s.value?"Saving...":"Save Settings"),1)])),_:1},8,["disabled","loading"])])),_:1},8,["modelValue"])],2)}}},[["__scopeId","data-v-ab64ee3f"]]),OI=Ys({__name:"FooterComponent",setup(e){const t=vo(),n=ji((()=>t.isDarkMode));return(e,t)=>(oi(),ui("footer",{class:$({dark:n.value})},t[0]||(t[0]=[gi("div",{id:"install-icon"},null,-1),gi("small",null,"© MediQuix 2024. Todos os direitos reservados.",-1)]),2))}},[["__scopeId","data-v-cb93eb4d"]]),DI={class:"points-display"},LI={class:"points-info"},RI={class:"points-balance"},MI={class:"total-points"},FI={class:"purchase-form"},UI={class:"points-calculator"},VI=["step"],jI={class:"price-preview"},zI={key:0,class:"pix-container"},BI=["src"],$I={class:"pix-code"},qI={class:"copy-area"},HI=["value"],KI=Ys({__name:"PointsDisplay",setup(e){const t=P_(),n=R_(),r=Et(!1),i=Et(!1),s=Et(!1),o=Et(50),a=Et(null),c=ji((()=>t.canClaimFreePoints)),l=ji((()=>c.value?"Clique para reivindicar seus pontos diários":"Pontos diários não disponíveis"));async function u(){r.value=!0;try{await t.claimDailyPoints()}finally{r.value=!1}}async function h(){if(o.value){r.value=!0,i.value=!1,s.value=!0;try{const e=await n.purchasePoints(o.value);a.value=e}catch(e){}finally{r.value=!1}}}async function d(){var e,t,n;(null==(n=null==(t=null==(e=a.value)?void 0:e.point_of_interaction)?void 0:t.transaction_data)?void 0:n.qr_code)&&await navigator.clipboard.writeText(a.value.point_of_interaction.transaction_data.qr_code)}return Ln((()=>{t.initializePoints()})),(e,f)=>{const p=$n("font-awesome-icon");return oi(),ui("div",DI,[gi("div",LI,[vi(wS,{variant:"accent",icon:"gift",onClick:u,loading:r.value,disabled:!c.value,title:l.value},{default:rn((()=>f[3]||(f[3]=[wi(" Pontos Diários ")]))),_:1},8,["loading","disabled","title"]),gi("div",RI,[vi(p,{icon:"coins",class:"points-icon"}),gi("span",MI,Q(kt(t).totalPoints),1)])]),vi(FS,{modelValue:i.value,"onUpdate:modelValue":f[1]||(f[1]=e=>i.value=e),title:"Comprar Pontos"},{default:rn((()=>{return[gi("div",FI,[gi("div",UI,[f[4]||(f[4]=gi("label",null,"Quantidade de Pontos:",-1)),sn(gi("input",{type:"number","onUpdate:modelValue":f[0]||(f[0]=e=>o.value=e),min:"5",step:1*kt(n).POINTS_PER_BRL},null,8,VI),[[Fs,o.value]]),gi("p",jI," Preço: R$ "+Q((e=o.value,Math.ceil(e/n.POINTS_PER_BRL))),1)]),vi(wS,{variant:"primary",icon:"shopping-cart",onClick:h,loading:r.value,disabled:!o.value||o.value<5},{default:rn((()=>f[5]||(f[5]=[wi(" Comprar Pontos ")]))),_:1},8,["loading","disabled"])])];var e})),_:1},8,["modelValue"]),vi(FS,{modelValue:s.value,"onUpdate:modelValue":f[2]||(f[2]=e=>s.value=e),title:"Pagamento PIX"},{default:rn((()=>{var e,t;return[a.value?(oi(),ui("div",zI,[(null==(t=null==(e=a.value.point_of_interaction)?void 0:e.transaction_data)?void 0:t.qr_code_base64)?(oi(),ui(ei,{key:0},[f[8]||(f[8]=gi("h3",null,"Escaneie o QR Code para pagar",-1)),gi("img",{src:`data:image/png;base64,${a.value.point_of_interaction.transaction_data.qr_code_base64}`,alt:"QR Code PIX",class:"pix-qr-code"},null,8,BI),gi("div",$I,[f[7]||(f[7]=gi("p",null,"Ou copie o código PIX:",-1)),gi("div",qI,[gi("input",{type:"text",readonly:"",value:a.value.point_of_interaction.transaction_data.qr_code},null,8,HI),vi(wS,{onClick:d,icon:"copy"},{default:rn((()=>f[6]||(f[6]=[wi(" Copiar ")]))),_:1})])])],64)):bi("",!0)])):bi("",!0)]})),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-841fc7de"]]),GI={class:"header-controls"},WI={class:"drawer-header"},QI={class:"drawer-content"},YI=Ys({__name:"HeaderComponent",setup(e){const t=vo(),n=ji((()=>t.isDarkMode));return(e,r)=>{const i=$n("router-link"),s=$n("font-awesome-icon");return oi(),ui("header",{class:$({dark:n.value})},[vi(i,{to:"/",class:"logo"},{default:rn((()=>r[3]||(r[3]=[gi("img",{src:Qs,alt:"Logo",width:"30",height:"30"},null,-1)]))),_:1}),vi(KI),gi("div",GI,[gi("button",{class:"menu-toggle",onClick:r[0]||(r[0]=(...e)=>kt(t).toggleDrawer&&kt(t).toggleDrawer(...e)),"aria-label":"Toggle menu"},[vi(s,{icon:"bars"})])]),gi("div",{class:$(["drawer-overlay",{open:kt(t).isDrawerOpen}]),onClick:r[1]||(r[1]=(...e)=>kt(t).toggleDrawer&&kt(t).toggleDrawer(...e))},null,2),gi("nav",{class:$(["drawer",{open:kt(t).isDrawerOpen,dark:n.value}])},[gi("div",WI,[vi(i,{to:"/",class:"logo",onClick:kt(t).toggleDrawer},{default:rn((()=>r[4]||(r[4]=[gi("img",{src:Qs,alt:"Logo",width:"30",height:"30"},null,-1),gi("h2",null,"MediQuix",-1)]))),_:1},8,["onClick"]),gi("button",{class:"close-drawer",onClick:r[2]||(r[2]=(...e)=>kt(t).toggleDrawer&&kt(t).toggleDrawer(...e))},[vi(s,{icon:"times"})])]),gi("div",QI,[vi(NI),vi(wo)]),vi(OI)],2)],2)}}},[["__scopeId","data-v-afc4d15b"]]);const JI=Ys({},[["render",function(e,t){const n=$n("router-view");return oi(),ui("main",null,[vi(n)])}],["__scopeId","data-v-fd2269f0"]]),XI={__name:"App",setup:e=>(e,t)=>(oi(),ui(ei,null,[vi(Js),vi(YI),vi(JI)],64))},ZI={},eT=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));r=Promise.allSettled(t.map((e=>{if((e=function(e){return"/"+e}(e))in ZI)return;ZI[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":"modulepreload",t||(i.as="script"),i.crossOrigin="",i.href=e,n&&i.setAttribute("nonce",n),document.head.appendChild(i),t?new Promise(((t,n)=>{i.addEventListener("load",t),i.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function i(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then((t=>{for(const e of t||[])"rejected"===e.status&&i(e.reason);return e().catch(i)}))},tT={class:"game-carousel"},nT={class:"icon-container"},rT={class:"game-title"},iT={class:"game-description"},sT=Ys({__name:"Home",setup(e){const t=vo(),n=ji((()=>t.isDarkMode)),r=[{link:"/quiz",icon:"bolt",title:"Quiz Rápido",description:"Responda rapidamente perguntas sobre medicina."},{link:"/cards",icon:"brain",title:"Jogo da Memória",description:"Teste sua memória com termos médicos."},{link:"/crosswords",icon:"pen-to-square",title:"Palavras Cruzadas",description:"Desafie seu conhecimento com palavras cruzadas médicas."},{link:"/hangman",icon:"ghost",title:"Jogo da Forca",description:"Adivinhe palavras médicas e teste seu conhecimento."},{link:"/word-search",icon:"feather",title:"Caça Palavras",description:"Encontre palavras médicas escondidas na grade."},{link:"/my-vocabulary",icon:"book",title:"Meu Vocabulário",description:"Gerencie e expanda seu vocabulário médico.",highlight:!0}];return(e,t)=>{const i=$n("font-awesome-icon"),s=$n("router-link");return oi(),ui("div",{class:$(["home-container",{dark:n.value}])},[t[0]||(t[0]=gi("header",{class:"home-header"},[gi("h1",null,"MediQuix"),gi("p",{class:"tagline"},"Medicina na ponta da língua")],-1)),gi("div",tT,[(oi(),ui(ei,null,Kn(r,((e,t)=>vi(s,{key:t,to:e.link,class:$(["game-card",{highlight:e.highlight}])},{default:rn((()=>[gi("div",nT,[vi(i,{icon:["fas",e.icon],size:"3x"},null,8,["icon"])]),gi("h2",rT,Q(e.title),1),gi("p",iT,Q(e.description),1)])),_:2},1032,["to","class"]))),64))])],2)}}},[["__scopeId","data-v-f3ea7db1"]]),oT=function(e){const t=qE(e.routes,e),n=e.parseQuery||XE,r=e.stringifyQuery||ZE,i=e.history,s=oS(),o=oS(),a=oS(),c=St(pE);let l=pE;F_&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=j_.bind(null,(e=>""+e)),h=j_.bind(null,sE),d=j_.bind(null,oE);function f(e,s){if(s=V_({},s||c.value),"string"==typeof e){const r=cE(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return V_(r,o,{params:d(o.params),hash:oE(r.hash),redirectedFrom:void 0,href:a})}let o;if(null!=e.path)o=V_({},e,{path:cE(n,e.path,s.path).path});else{const t=V_({},e.params);for(const e in t)null==t[e]&&delete t[e];o=V_({},e,{params:h(t)}),s.params=h(s.params)}const a=t.resolve(o,s),l=e.hash||"";a.params=u(d(a.params));const f=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,V_({},e,{hash:(p=l,rE(p).replace(Z_,"{").replace(tE,"}").replace(J_,"^")),path:a.path}));var p;const m=i.createHref(f);return V_({fullPath:f,hash:l,query:r===ZE?eS(e.query):e.query||{}},a,{redirectedFrom:void 0,href:m})}function p(e){return"string"==typeof e?cE(n,e,c.value.path):V_({},e)}function m(e,t){if(l!==e)return DE(8,{from:t,to:e})}function g(e){return y(e)}function v(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=p(r):{path:r},r.params={}),V_({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function y(e,t){const n=l=f(e),i=c.value,s=e.state,o=e.force,a=!0===e.replace,u=v(n);if(u)return y(V_(p(u),{state:"object"==typeof u?V_({},s,u.state):s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&uE(t.matched[r],n.matched[i])&&hE(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(d=DE(16,{to:h,from:i}),N(i,i,!0,!1)),(d?Promise.resolve(d):_(h,i)).catch((e=>LE(e)?LE(e,2)?e:P(e):x(e,h,i))).then((e=>{if(e){if(LE(e,2))return y(V_({replace:a},p(e.to),{state:"object"==typeof e.to?V_({},s,e.to.state):s,force:o}),t||h)}else e=S(h,i,!0,a,s);return E(h,i,e),e}))}function w(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}function b(e){const t=L.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function _(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>uE(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>uE(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=cS(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(aS(r,e,t))}));const c=w.bind(null,e,t);return n.push(c),M(n).then((()=>{n=[];for(const r of s.list())n.push(aS(r,e,t));return n.push(c),M(n)})).then((()=>{n=cS(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(aS(r,e,t))}));return n.push(c),M(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(B_(r.beforeEnter))for(const i of r.beforeEnter)n.push(aS(i,e,t));else n.push(aS(r.beforeEnter,e,t));return n.push(c),M(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=cS(a,"beforeRouteEnter",e,t,b),n.push(c),M(n)))).then((()=>{n=[];for(const r of o.list())n.push(aS(r,e,t));return n.push(c),M(n)})).catch((e=>LE(e,8)?e:Promise.reject(e)))}function E(e,t,n){a.list().forEach((r=>b((()=>r(e,t,n)))))}function S(e,t,n,r,s){const o=m(e,t);if(o)return o;const a=t===pE,l=F_?history.state:{};n&&(r||a?i.replace(e.fullPath,V_({scroll:a&&l&&l.scroll},s)):i.push(e.fullPath,s)),c.value=e,N(e,t,n,a),P()}let I;function T(){I||(I=i.listen(((e,t,n)=>{if(!R.listening)return;const r=f(e),s=v(r);if(s)return void y(V_(s,{replace:!0,force:!0}),r).catch(z_);l=r;const o=c.value;var a,u;F_&&(a=IE(o.fullPath,n.delta),u=EE(),TE.set(a,u)),_(r,o).catch((e=>LE(e,12)?e:LE(e,2)?(y(V_(p(e.to),{force:!0}),r).then((e=>{LE(e,20)&&!n.delta&&n.type===mE.pop&&i.go(-1,!1)})).catch(z_),Promise.reject()):(n.delta&&i.go(-n.delta,!1),x(e,r,o)))).then((e=>{(e=e||S(r,o,!1))&&(n.delta&&!LE(e,8)?i.go(-n.delta,!1):n.type===mE.pop&&LE(e,20)&&i.go(-1,!1)),E(r,o,e)})).catch(z_)})))}let k,C=oS(),A=oS();function x(e,t,n){P(e);const r=A.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function P(e){return k||(k=!e,T(),C.list().forEach((([t,n])=>e?n(e):t())),C.reset()),e}function N(t,n,r,i){const{scrollBehavior:s}=e;if(!F_||!s)return Promise.resolve();const o=!r&&function(e){const t=TE.get(e);return TE.delete(e),t}(IE(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Gt().then((()=>s(t,n,o))).then((e=>e&&SE(e))).catch((e=>x(e,t,n)))}const O=e=>i.go(e);let D;const L=new Set,R={currentRoute:c,listening:!0,addRoute:function(e,n){let r,i;return xE(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},clearRoutes:t.clearRoutes,hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:f,options:e,push:g,replace:function(e){return g(V_(p(e),{replace:!0}))},go:O,back:()=>O(-1),forward:()=>O(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:A.add,isReady:function(){return k&&c.value!==pE?Promise.resolve():new Promise(((e,t)=>{C.add([e,t])}))},install(e){e.component("RouterLink",uS),e.component("RouterView",mS),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>kt(c)}),F_&&!D&&c.value===pE&&(D=!0,g(i.location).catch((e=>{})));const t={};for(const r in pE)Object.defineProperty(t,r,{get:()=>c.value[r],enumerable:!0});e.provide(rS,this),e.provide(iS,ut(t)),e.provide(sS,c);const n=e.unmount;L.add(e),e.unmount=function(){L.delete(e),L.size<1&&(l=pE,I&&I(),I=null,c.value=pE,D=!1,k=!1),n()}}};function M(e){return e.reduce(((e,t)=>e.then((()=>b(t)))),Promise.resolve())}return R}({history:function(e){const t=AE(e=wE(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=kE(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:mE.pop,direction:u?u>0?vE.forward:vE.back:vE.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(V_({},e.state,{scroll:EE()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace),r=V_({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:_E.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}(),routes:[{path:"/",name:"Home",component:sT},{path:"/quiz",name:"QuickQuizGame",component:()=>eT((()=>import("./QuickQuizGame-DIdi_Fqb.js")),__vite__mapDeps([0,1,2,3,4,5]))},{path:"/cards",name:"MemoryGame",component:()=>eT((()=>import("./MemoryGame-D87a4VBe.js")),__vite__mapDeps([6,1,2,3,4,7]))},{path:"/word-search",name:"WordSearchGame",component:()=>eT((()=>import("./WordSearchGame-DEq9Sn1X.js")),__vite__mapDeps([8,1,2,3,4,9]))},{path:"/hangman",name:"HangmanGame",component:()=>eT((()=>import("./HangmanGame-Cit5qoL6.js")),__vite__mapDeps([10,1,2,3,4,11]))},{path:"/my-vocabulary",name:"MyVocabulary",component:()=>eT((()=>import("./MyVocabulary-Ak9i3WMd.js")),__vite__mapDeps([12,2,3,13]))},{path:"/crosswords",name:"CrosswordsGame",component:()=>eT((()=>import("./CrosswordsGame-ubidxhNh.js")),__vite__mapDeps([14,2,3,1,4,15]))},{path:"/auth/action",name:"AuthAction",component:()=>eT((()=>import("./AuthAction-Dq16x9zM.js")),__vite__mapDeps([16,17]))}],scrollBehavior:(e,t,n)=>n?new Promise((e=>setTimeout((()=>e(n)),50))):{top:0,behavior:"smooth"}});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function aT(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function lT(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?cT(Object(n),!0).forEach((function(t){aT(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cT(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}oT.beforeEach(((e,t,n)=>{performance.mark("route-change-start"),n()})),oT.afterEach((e=>{performance.mark("route-change-end"),performance.measure("route-change","route-change-start","route-change-end");const t=performance.getEntriesByName("route-change").pop();t&&t.duration}));const uT=()=>{};let hT={},dT={},fT=null,pT={mark:uT,measure:uT};try{"undefined"!=typeof window&&(hT=window),"undefined"!=typeof document&&(dT=document),"undefined"!=typeof MutationObserver&&(fT=MutationObserver),"undefined"!=typeof performance&&(pT=performance)}catch(dx){}const{userAgent:mT=""}=hT.navigator||{},gT=hT,vT=dT,yT=fT,wT=pT;gT.document;const bT=!!vT.documentElement&&!!vT.head&&"function"==typeof vT.addEventListener&&"function"==typeof vT.createElement,_T=~mT.indexOf("MSIE")||~mT.indexOf("Trident/");var ET={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ST=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],IT="classic",TT="duotone",kT=[IT,TT,"sharp","sharp-duotone"],CT=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),AT=["fak","fa-kit","fakd","fa-kit-duotone"],xT={fak:"kit","fa-kit":"kit"},PT={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},NT=["fak","fakd"],OT={kit:"fak"},DT={"kit-duotone":"fakd"},LT={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},RT=["fak","fa-kit","fakd","fa-kit-duotone"],MT={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},FT=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],UT=[1,2,3,4,5,6,7,8,9,10],VT=UT.concat([11,12,13,14,15,16,17,18,19,20]),jT=[...Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",LT.GROUP,LT.SWAP_OPACITY,LT.PRIMARY,LT.SECONDARY].concat(UT.map((e=>"".concat(e,"x")))).concat(VT.map((e=>"w-".concat(e))));const zT="___FONT_AWESOME___",BT=16,$T="svg-inline--fa",qT="data-fa-i2svg",HT="data-fa-pseudo-element",KT="data-prefix",GT="data-icon",WT="fontawesome-i2svg",QT=["HTML","HEAD","STYLE","SCRIPT"],YT=(()=>{try{return!0}catch(e){return!1}})();function JT(e){return new Proxy(e,{get:(e,t)=>t in e?e[t]:e[IT]})}const XT=lT({},ET);XT[IT]=lT(lT(lT(lT({},{"fa-duotone":"duotone"}),ET[IT]),xT),PT);const ZT=JT(XT),ek=lT({},{classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}});ek[IT]=lT(lT(lT(lT({},{duotone:"fad"}),ek[IT]),OT),DT);const tk=JT(ek),nk=lT({},MT);nk[IT]=lT(lT({},nk[IT]),{fak:"fa-kit"});const rk=JT(nk),ik=lT({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}});ik[IT]=lT(lT({},ik[IT]),{"fa-kit":"fak"}),JT(ik);const sk=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ok="fa-layers-text",ak=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;JT(lT({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}}));const ck=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lk={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},uk=["kit",...jT],hk=gT.FontAwesomeConfig||{};if(vT&&"function"==typeof vT.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((e=>{let[t,n]=e;const r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=vT.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t));null!=r&&(hk[n]=r)}))}const dk={styleDefault:"solid",familyDefault:IT,cssPrefix:"fa",replacementClass:$T,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};hk.familyPrefix&&(hk.cssPrefix=hk.familyPrefix);const fk=lT(lT({},dk),hk);fk.autoReplaceSvg||(fk.observeMutations=!1);const pk={};Object.keys(dk).forEach((e=>{Object.defineProperty(pk,e,{enumerable:!0,set:function(t){fk[e]=t,mk.forEach((e=>e(pk)))},get:function(){return fk[e]}})})),Object.defineProperty(pk,"familyPrefix",{enumerable:!0,set:function(e){fk.cssPrefix=e,mk.forEach((e=>e(pk)))},get:function(){return fk.cssPrefix}}),gT.FontAwesomeConfig=pk;const mk=[];const gk=BT,vk={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yk(){let e=12,t="";for(;e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function wk(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function bk(e){return e.classList?wk(e.classList):(e.getAttribute("class")||"").split(" ").filter((e=>e))}function _k(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ek(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";")),"")}function Sk(e){return e.size!==vk.size||e.x!==vk.x||e.y!==vk.y||e.rotate!==vk.rotate||e.flipX||e.flipY}function Ik(){const e="fa",t=$T,n=pk.cssPrefix,r=pk.replacementClass;let i=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';if(n!==e||r!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Tk=!1;function kk(){pk.autoAddCss&&!Tk&&(!function(e){if(!e||!bT)return;const t=vT.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=vT.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const e=n[i],t=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(r=e)}vT.head.insertBefore(t,r)}(Ik()),Tk=!0)}var Ck={mixout:()=>({dom:{css:Ik,insertCss:kk}}),hooks:()=>({beforeDOMElementCreation(){kk()},beforeI2svg(){kk()}})};const Ak=gT||{};Ak[zT]||(Ak[zT]={}),Ak[zT].styles||(Ak[zT].styles={}),Ak[zT].hooks||(Ak[zT].hooks={}),Ak[zT].shims||(Ak[zT].shims=[]);var xk=Ak[zT];const Pk=[],Nk=function(){vT.removeEventListener("DOMContentLoaded",Nk),Ok=1,Pk.map((e=>e()))};let Ok=!1;function Dk(e){const{tag:t,attributes:n={},children:r=[]}=e;return"string"==typeof e?_k(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,'="').concat(_k(e[n]),'" ')),"").trim()}(n),">").concat(r.map(Dk).join(""),"</").concat(t,">")}function Lk(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}bT&&(Ok=(vT.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(vT.readyState),Ok||vT.addEventListener("DOMContentLoaded",Nk));var Rk=function(e,t,n,r){var i,s,o,a=Object.keys(e),c=a.length,l=t;for(void 0===n?(i=1,o=e[a[0]]):(i=0,o=n);i<c;i++)o=l(o,e[s=a[i]],s,e);return o};function Mk(e){const t=function(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const r=e.charCodeAt(n++);56320==(64512&r)?t.push(((1023&i)<<10)+(1023&r)+65536):(t.push(i),n--)}else t.push(i)}return t}(e);return 1===t.length?t[0].toString(16):null}function Fk(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t}),{})}function Uk(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{skipHooks:r=!1}=n,i=Fk(t);"function"!=typeof xk.hooks.addPack||r?xk.styles[e]=lT(lT({},xk.styles[e]||{}),i):xk.hooks.addPack(e,Fk(t)),"fas"===e&&Uk("fa",t)}const{styles:Vk,shims:jk}=xk,zk=Object.keys(rk),Bk=zk.reduce(((e,t)=>(e[t]=Object.keys(rk[t]),e)),{});let $k=null,qk={},Hk={},Kk={},Gk={},Wk={};function Qk(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r!==e||""===i||(s=i,~uk.indexOf(s))?null:i;var s}const Yk=()=>{const e=e=>Rk(Vk,((t,n,r)=>(t[r]=Rk(n,e,{}),t)),{});qk=e(((e,t,n)=>{if(t[3]&&(e[t[3]]=n),t[2]){t[2].filter((e=>"number"==typeof e)).forEach((t=>{e[t.toString(16)]=n}))}return e})),Hk=e(((e,t,n)=>{if(e[n]=n,t[2]){t[2].filter((e=>"string"==typeof e)).forEach((t=>{e[t]=n}))}return e})),Wk=e(((e,t,n)=>{const r=t[2];return e[n]=n,r.forEach((t=>{e[t]=n})),e}));const t="far"in Vk||pk.autoFetchSvg,n=Rk(jk,((e,n)=>{const r=n[0];let i=n[1];const s=n[2];return"far"!==i||t||(i="fas"),"string"==typeof r&&(e.names[r]={prefix:i,iconName:s}),"number"==typeof r&&(e.unicodes[r.toString(16)]={prefix:i,iconName:s}),e}),{names:{},unicodes:{}});Kk=n.names,Gk=n.unicodes,$k=nC(pk.styleDefault,{family:pk.familyDefault})};var Jk;function Xk(e,t){return(qk[e]||{})[t]}function Zk(e,t){return(Wk[e]||{})[t]}function eC(e){return Kk[e]||{prefix:null,iconName:null}}function tC(){return $k}Jk=e=>{$k=nC(e.styleDefault,{family:pk.familyDefault})},mk.push(Jk),Yk();function nC(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{family:n=IT}=t,r=ZT[n][e];if(n===TT&&!e)return"fad";const i=tk[n][e]||tk[n][r],s=e in xk.styles?e:null;return i||s||null}function rC(e){return e.sort().filter(((e,t,n)=>n.indexOf(e)===t))}function iC(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const i=FT.concat(RT),s=rC(e.filter((e=>i.includes(e)))),o=rC(e.filter((e=>!FT.includes(e)))),a=s.filter((e=>(r=e,!ST.includes(e)))),[c=null]=a,l=function(e){let t=IT;const n=zk.reduce(((e,t)=>(e[t]="".concat(pk.cssPrefix,"-").concat(t),e)),{});return kT.forEach((r=>{(e.includes(n[r])||e.some((e=>Bk[r].includes(e))))&&(t=r)})),t}(s),u=lT(lT({},function(e){let t=[],n=null;return e.forEach((e=>{const r=Qk(pk.cssPrefix,e);r?n=r:e&&t.push(e)})),{iconName:n,rest:t}}(o)),{},{prefix:nC(c,{family:l})});return lT(lT(lT({},u),function(e){const{values:t,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=e,a=n===TT,c=t.includes("fa-duotone")||t.includes("fad"),l="duotone"===o.familyDefault,u="fad"===r.prefix||"fa-duotone"===r.prefix;!a&&(c||l||u)&&(r.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab");if(!r.prefix&&sC.includes(n)){if(Object.keys(s).find((e=>oC.includes(e)))||o.autoFetchSvg){const e=CT.get(n).defaultShortPrefixId;r.prefix=e,r.iconName=Zk(r.prefix,r.iconName)||r.iconName}}"fa"!==r.prefix&&"fa"!==i||(r.prefix=tC()||"fas");return r}({values:e,family:l,styles:Vk,config:pk,canonical:u,givenPrefix:r})),function(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};const s="fa"===t?eC(i):{},o=Zk(r,i);i=s.iconName||o||i,r=s.prefix||r,"far"!==r||Vk.far||!Vk.fas||pk.autoFetchSvg||(r="fas");return{prefix:r,iconName:i}}(n,r,u))}const sC=kT.filter((e=>e!==IT||e!==TT)),oC=Object.keys(MT).filter((e=>e!==IT)).map((e=>Object.keys(MT[e]))).flat();let aC=[],cC={};const lC={},uC=Object.keys(lC);function hC(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(cC[e]||[]).forEach((e=>{t=e.apply(null,[t,...r])})),t}function dC(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(cC[e]||[]).forEach((e=>{e.apply(null,n)}))}function fC(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return lC[e]?lC[e].apply(null,t):void 0}function pC(e){"fa"===e.prefix&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||tC();if(t)return t=Zk(n,t)||t,Lk(mC.definitions,n,t)||Lk(xk.styles,n,t)}const mC=new class{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach((e=>{this.definitions[e]=lT(lT({},this.definitions[e]||{}),r[e]),Uk(e,r[e]);const t=rk[IT][e];t&&Uk(t,r[e]),Yk()}))}reset(){this.definitions={}}_pullDefinitions(e,t){const n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((t=>{const{prefix:r,iconName:i,icon:s}=n[t],o=s[2];e[r]||(e[r]={}),o.length>0&&o.forEach((t=>{"string"==typeof t&&(e[r][t]=s)})),e[r][i]=s})),e}},gC={i2svg:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return bT?(dC("beforeI2svg",e),fC("pseudoElements2svg",e),fC("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;var n;!1===pk.autoReplaceSvg&&(pk.autoReplaceSvg=!0),pk.observeMutations=!0,n=()=>{yC({autoReplaceSvgRoot:t}),dC("watch",e)},bT&&(Ok?setTimeout(n,0):Pk.push(n))}},vC={noAuto:()=>{pk.autoReplaceSvg=!1,pk.observeMutations=!1,dC("noAuto")},config:pk,dom:gC,parse:{icon:e=>{if(null===e)return null;if("object"==typeof e&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Zk(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){const t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=nC(e[0]);return{prefix:n,iconName:Zk(n,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(pk.cssPrefix,"-"))>-1||e.match(sk))){const t=iC(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||tC(),iconName:Zk(t.prefix,t.iconName)||t.iconName}}if("string"==typeof e){const t=tC();return{prefix:t,iconName:Zk(t,e)||e}}}},library:mC,findIconDefinition:pC,toHtml:Dk},yC=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t=vT}=e;(Object.keys(xk.styles).length>0||pk.autoFetchSvg)&&bT&&pk.autoReplaceSvg&&vC.dom.i2svg({node:t})};function wC(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((e=>Dk(e)))}}),Object.defineProperty(e,"node",{get:function(){if(!bT)return;const t=vT.createElement("div");return t.innerHTML=e.html,t.children}}),e}function bC(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:c,titleId:l,extra:u,watchable:h=!1}=e,{width:d,height:f}=n.found?n:t,p=NT.includes(r),m=[pk.replacementClass,i?"".concat(pk.cssPrefix,"-").concat(i):""].filter((e=>-1===u.classes.indexOf(e))).filter((e=>""!==e||!!e)).concat(u.classes).join(" ");let g={children:[],attributes:lT(lT({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:m,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(f)})};const v=p&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/f*16*.0625,"em")}:{};h&&(g.attributes[qT]=""),a&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||yk())},children:[a]}),delete g.attributes.title);const y=lT(lT({},g),{},{prefix:r,iconName:i,main:t,mask:n,maskId:c,transform:s,symbol:o,styles:lT(lT({},v),u.styles)}),{children:w,attributes:b}=n.found&&t.found?fC("generateAbstractMask",y)||{children:[],attributes:{}}:fC("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=w,y.attributes=b,o?function(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:s}=e;const o=!0===s?"".concat(t,"-").concat(pk.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:lT(lT({},i),{},{id:o}),children:r}]}]}(y):function(e){let{children:t,main:n,mask:r,attributes:i,styles:s,transform:o}=e;if(Sk(o)&&n.found&&!r.found){const{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=Ek(lT(lT({},s),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}(y)}function _C(e){const{content:t,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=e,c=lT(lT(lT({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});a&&(c[qT]="");const l=lT({},o.styles);Sk(i)&&(l.transform=function(e){let{transform:t,width:n=BT,height:r=BT,startCentered:i=!1}=e,s="";return s+=i&&_T?"translate(".concat(t.x/gk-n/2,"em, ").concat(t.y/gk-r/2,"em) "):i?"translate(calc(-50% + ".concat(t.x/gk,"em), calc(-50% + ").concat(t.y/gk,"em)) "):"translate(".concat(t.x/gk,"em, ").concat(t.y/gk,"em) "),s+="scale(".concat(t.size/gk*(t.flipX?-1:1),", ").concat(t.size/gk*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}({transform:i,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const u=Ek(l);u.length>0&&(c.style=u);const h=[];return h.push({tag:"span",attributes:c,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}const{styles:EC}=xk;function SC(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return i=Array.isArray(r)?{tag:"g",attributes:{class:"".concat(pk.cssPrefix,"-").concat(lk.GROUP)},children:[{tag:"path",attributes:{class:"".concat(pk.cssPrefix,"-").concat(lk.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(pk.cssPrefix,"-").concat(lk.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const IC={found:!1,width:512,height:512};function TC(e,t){let n=t;return"fa"===t&&null!==pk.styleDefault&&(t=tC()),new Promise(((r,i)=>{if("fa"===n){const n=eC(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&EC[t]&&EC[t][e]){return r(SC(EC[t][e]))}!YT&&pk.showMissingIcons,r(lT(lT({},IC),{},{icon:pk.showMissingIcons&&e&&fC("missingIconAbstract")||{}}))}))}const kC=()=>{},CC=pk.measurePerformance&&wT&&wT.mark&&wT.measure?wT:{mark:kC,measure:kC},AC='FA "6.7.2"',xC=e=>{CC.mark("".concat(AC," ").concat(e," ends")),CC.measure("".concat(AC," ").concat(e),"".concat(AC," ").concat(e," begins"),"".concat(AC," ").concat(e," ends"))};var PC=e=>(CC.mark("".concat(AC," ").concat(e," begins")),()=>xC(e));const NC=()=>{};function OC(e){return"string"==typeof(e.getAttribute?e.getAttribute(qT):null)}function DC(e){return vT.createElementNS("http://www.w3.org/2000/svg",e)}function LC(e){return vT.createElement(e)}function RC(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ceFn:n=("svg"===e.tag?DC:LC)}=t;if("string"==typeof e)return vT.createTextNode(e);const r=n(e.tag);Object.keys(e.attributes||[]).forEach((function(t){r.setAttribute(t,e.attributes[t])}));return(e.children||[]).forEach((function(e){r.appendChild(RC(e,{ceFn:n}))})),r}const MC={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach((e=>{t.parentNode.insertBefore(RC(e),t)})),null===t.getAttribute(qT)&&pk.keepOriginalSource){let e=vT.createComment(function(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~bk(t).indexOf(pk.replacementClass))return MC.replace(e);const r=new RegExp("".concat(pk.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const e=n[0].attributes.class.split(" ").reduce(((e,t)=>(t===pk.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e)),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(" "),0===e.toNode.length?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}const i=n.map((e=>Dk(e))).join("\n");t.setAttribute(qT,""),t.innerHTML=i}};function FC(e){e()}function UC(e,t){const n="function"==typeof t?t:NC;if(0===e.length)n();else{let t=FC;"async"===pk.mutateApproach&&(t=gT.requestAnimationFrame||FC),t((()=>{const t=!0===pk.autoReplaceSvg?MC.replace:MC[pk.autoReplaceSvg]||MC.replace,r=PC("mutate");e.map(t),r(),n()}))}}let VC=!1;function jC(){VC=!0}function zC(){VC=!1}let BC=null;function $C(e){if(!yT)return;if(!pk.observeMutations)return;const{treeCallback:t=NC,nodeCallback:n=NC,pseudoElementsCallback:r=NC,observeMutationsRoot:i=vT}=e;BC=new yT((e=>{if(VC)return;const i=tC();wk(e).forEach((e=>{if("childList"===e.type&&e.addedNodes.length>0&&!OC(e.addedNodes[0])&&(pk.searchPseudoElements&&r(e.target),t(e.target)),"attributes"===e.type&&e.target.parentNode&&pk.searchPseudoElements&&r(e.target.parentNode),"attributes"===e.type&&OC(e.target)&&~ck.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){const t=e.getAttribute?e.getAttribute(KT):null,n=e.getAttribute?e.getAttribute(GT):null;return t&&n}(e.target)){const{prefix:t,iconName:n}=iC(bk(e.target));e.target.setAttribute(KT,t||i),n&&e.target.setAttribute(GT,n)}else(s=e.target)&&s.classList&&s.classList.contains&&s.classList.contains(pk.replacementClass)&&n(e.target);var s}))})),bT&&BC.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function qC(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"";let i=iC(bk(e));return i.prefix||(i.prefix=tC()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=(s=i.prefix,o=e.innerText,(Hk[s]||{})[o]||Xk(i.prefix,Mk(e.innerText)))),!i.iconName&&pk.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i;var s,o}function HC(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=qC(e),s=function(e){const t=wk(e.attributes).reduce(((e,t)=>("class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e)),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return pk.autoA11y&&(n?t["aria-labelledby"]="".concat(pk.replacementClass,"-title-").concat(r||yk()):(t["aria-hidden"]="true",t.focusable="false")),t}(e),o=hC("parseNodeAttributes",{},e);let a=t.styleParser?function(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce(((e,t)=>{const n=t.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(":").trim()),e}),{})),n}(e):[];return lT({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:vk,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s}},o)}const{styles:KC}=xk;function GC(e){const t="nest"===pk.autoReplaceSvg?HC(e,{styleParser:!1}):HC(e);return~t.extra.classes.indexOf(ok)?fC("generateLayersText",e,t):fC("generateSvgReplacementMutation",e,t)}function WC(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!bT)return Promise.resolve();const n=vT.documentElement.classList,r=e=>n.add("".concat(WT,"-").concat(e)),i=e=>n.remove("".concat(WT,"-").concat(e)),s=pk.autoFetchSvg?[...AT,...FT]:ST.concat(Object.keys(KC));s.includes("fa")||s.push("fa");const o=[".".concat(ok,":not([").concat(qT,"])")].concat(s.map((e=>".".concat(e,":not([").concat(qT,"])")))).join(", ");if(0===o.length)return Promise.resolve();let a=[];try{a=wk(e.querySelectorAll(o))}catch(u){}if(!(a.length>0))return Promise.resolve();r("pending"),i("complete");const c=PC("onTree"),l=a.reduce(((e,t)=>{try{const n=GC(t);n&&e.push(n)}catch(u){YT||u.name}return e}),[]);return new Promise(((e,n)=>{Promise.all(l).then((n=>{UC(n,(()=>{r("active"),r("complete"),i("pending"),"function"==typeof t&&t(),c(),e()}))})).catch((e=>{c(),n(e)}))}))}function QC(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;GC(e).then((e=>{e&&UC([e],t)}))}const YC=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=vk,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;const{prefix:h,iconName:d,icon:f}=e;return wC(lT({type:"icon"},e),(()=>(dC("beforeDOMElementCreation",{iconDefinition:e,params:t}),pk.autoA11y&&(o?l["aria-labelledby"]="".concat(pk.replacementClass,"-title-").concat(a||yk()):(l["aria-hidden"]="true",l.focusable="false")),bC({icons:{main:SC(f),mask:i?SC(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:d,transform:lT(lT({},vk),n),symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:l,styles:u,classes:c}}))))};var JC={mixout(){return{icon:(e=YC,function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=(t||{}).icon?t:pC(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:pC(i||{})),e(r,lT(lT({},n),{},{mask:i}))})};var e},hooks:()=>({mutationObserverCallbacks:e=>(e.treeCallback=WC,e.nodeCallback=QC,e)}),provides(e){e.i2svg=function(e){const{node:t=vT,callback:n=()=>{}}=e;return WC(t,n)},e.generateSvgReplacementMutation=function(e,t){const{iconName:n,title:r,titleId:i,prefix:s,transform:o,symbol:a,mask:c,maskId:l,extra:u}=t;return new Promise(((t,h)=>{Promise.all([TC(n,s),c.iconName?TC(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((c=>{let[h,d]=c;t([e,bC({icons:{main:h,mask:d},prefix:s,iconName:n,transform:o,symbol:a,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])})).catch(h)}))},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:s}=e;const o=Ek(s);let a;return o.length>0&&(n.style=o),Sk(i)&&(a=fC("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(a||r.icon),{children:t,attributes:n}}}},XC={mixout:()=>({layer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{classes:n=[]}=t;return wC({type:"layer"},(()=>{dC("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e((e=>{Array.isArray(e)?e.map((e=>{r=r.concat(e.abstract)})):r=r.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(pk.cssPrefix,"-layers"),...n].join(" ")},children:r}]}))}})},ZC={mixout:()=>({counter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=t;return wC({type:"counter",content:e},(()=>(dC("beforeDOMElementCreation",{content:e,params:t}),function(e){const{content:t,title:n,extra:r}=e,i=lT(lT(lT({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ek(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}({content:e.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(pk.cssPrefix,"-layers-counter"),...r]}}))))}})},eA={mixout:()=>({text(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=vk,title:r=null,classes:i=[],attributes:s={},styles:o={}}=t;return wC({type:"text",content:e},(()=>(dC("beforeDOMElementCreation",{content:e,params:t}),_C({content:e,transform:lT(lT({},vk),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(pk.cssPrefix,"-layers-text"),...i]}}))))}}),provides(e){e.generateLayersText=function(e,t){const{title:n,transform:r,extra:i}=t;let s=null,o=null;if(_T){const t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();s=n.width/t,o=n.height/t}return pk.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,_C({content:e.innerHTML,width:s,height:o,transform:r,title:n,extra:i,watchable:!0})])}}};const tA=new RegExp('"',"ug"),nA=[1105920,1112319],rA=lT(lT(lT(lT({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),iA=Object.keys(rA).reduce(((e,t)=>(e[t.toLowerCase()]=rA[t],e)),{}),sA=Object.keys(iA).reduce(((e,t)=>{const n=iA[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e}),{});function oA(e,t){const n="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(((r,i)=>{if(null!==e.getAttribute(n))return r();const s=wk(e.children).filter((e=>e.getAttribute(HT)===t))[0],o=gT.getComputedStyle(e,t),a=o.getPropertyValue("font-family"),c=a.match(ak),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&"none"!==u&&""!==u){const u=o.getPropertyValue("content");let h=function(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(iA[n]||{})[i]||sA[n]}(a,l);const{value:d,isSecondary:f}=function(e){const t=e.replace(tA,""),n=function(e,t){const n=e.length;let r,i=e.charCodeAt(t);return i>=55296&&i<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?1024*(i-55296)+r-56320+65536:i}(t,0),r=n>=nA[0]&&n<=nA[1],i=2===t.length&&t[0]===t[1];return{value:Mk(i?t[0]:t),isSecondary:r||i}}(u),p=c[0].startsWith("FontAwesome");let m=Xk(h,d),g=m;if(p){const e=function(e){const t=Gk[e],n=Xk("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(d);e.iconName&&e.prefix&&(m=e.iconName,h=e.prefix)}if(!m||f||s&&s.getAttribute(KT)===h&&s.getAttribute(GT)===g)r();else{e.setAttribute(n,g),s&&e.removeChild(s);const o={iconName:null,title:null,titleId:null,prefix:null,transform:vk,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:a}=o;a.attributes[HT]=t,TC(m,h).then((i=>{const s=bC(lT(lT({},o),{},{icons:{main:i,mask:{prefix:null,iconName:null,rest:[]}},prefix:h,iconName:g,extra:a,watchable:!0})),c=vT.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(c,e.firstChild):e.appendChild(c),c.outerHTML=s.map((e=>Dk(e))).join("\n"),e.removeAttribute(n),r()})).catch(i)}}else r()}))}function aA(e){return Promise.all([oA(e,"::before"),oA(e,"::after")])}function cA(e){return!(e.parentNode===document.head||~QT.indexOf(e.tagName.toUpperCase())||e.getAttribute(HT)||e.parentNode&&"svg"===e.parentNode.tagName)}function lA(e){if(bT)return new Promise(((t,n)=>{const r=wk(e.querySelectorAll("*")).filter(cA).map(aA),i=PC("searchPseudoElements");jC(),Promise.all(r).then((()=>{i(),zC(),t()})).catch((()=>{i(),zC(),n()}))}))}let uA=!1;const hA=e=>e.toLowerCase().split(" ").reduce(((e,t)=>{const n=t.toLowerCase().split("-"),r=n[0];let i=n.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i}return e}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});const dA={x:0,y:0,width:"100%",height:"100%"};function fA(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}!function(e,t){let{mixoutsTo:n}=t;aC=e,cC={},Object.keys(lC).forEach((e=>{-1===uC.indexOf(e)&&delete lC[e]})),aC.forEach((e=>{const t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((e=>{"function"==typeof t[e]&&(n[e]=t[e]),"object"==typeof t[e]&&Object.keys(t[e]).forEach((r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]}))})),e.hooks){const t=e.hooks();Object.keys(t).forEach((e=>{cC[e]||(cC[e]=[]),cC[e].push(t[e])}))}e.provides&&e.provides(lC)}))}([Ck,JC,XC,ZC,eA,{hooks:()=>({mutationObserverCallbacks:e=>(e.pseudoElementsCallback=lA,e)}),provides(e){e.pseudoElements2svg=function(e){const{node:t=vT}=e;pk.searchPseudoElements&&lA(t)}}},{mixout:()=>({dom:{unwatch(){jC(),uA=!0}}}),hooks:()=>({bootstrap(){$C(hC("mutationObserverCallbacks",{}))},noAuto(){BC&&BC.disconnect()},watch(e){const{observeMutationsRoot:t}=e;uA?zC():$C(hC("mutationObserverCallbacks",{observeMutationsRoot:t}))}})},{mixout:()=>({parse:{transform:e=>hA(e)}}),hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=hA(n)),e}}),provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(32*n.x,", ").concat(32*n.y,") "),a="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),l={outer:s,inner:{transform:"".concat(o," ").concat(a," ").concat(c)},path:{transform:"translate(".concat(i/2*-1," -256)")}};return{tag:"g",attributes:lT({},l.outer),children:[{tag:"g",attributes:lT({},l.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:lT(lT({},t.icon.attributes),l.path)}]}]}}}},{hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?iC(n.split(" ").map((e=>e.trim()))):{prefix:null,iconName:null,rest:[]};return r.prefix||(r.prefix=tC()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}),provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:s,transform:o}=e;const{width:a,icon:c}=r,{width:l,icon:u}=i,h=function(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(s," ").concat(o," ").concat(a)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:o,containerWidth:l,iconWidth:a}),d={tag:"rect",attributes:lT(lT({},dA),{},{fill:"white"})},f=c.children?{children:c.children.map(fA)}:{},p={tag:"g",attributes:lT({},h.inner),children:[fA(lT({tag:c.tag,attributes:lT(lT({},c.attributes),h.path)},f))]},m={tag:"g",attributes:lT({},h.outer),children:[p]},g="mask-".concat(s||yk()),v="clip-".concat(s||yk()),y={tag:"mask",attributes:lT(lT({},dA),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,m]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(b=u,"g"===b.tag?b.children:[b])},y]};var b;return t.push(w,{tag:"rect",attributes:lT({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(g,")")},dA)}),{children:t,attributes:n}}}},{provides(e){let t=!1;gT.matchMedia&&(t=gT.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:lT(lT({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=lT(lT({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:lT(lT({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:lT(lT({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:lT(lT({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:lT(lT({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:lT(lT({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:lT(lT({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:lT(lT({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e.symbol=r,e}})}],{mixoutsTo:vC});const pA=vC.library,mA=vC.parse,gA=vC.icon;function vA(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function yA(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?vA(Object(n),!0).forEach((function(t){_A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vA(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function wA(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function bA(e){return(bA="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _A(e,t,n){return(t=wA(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function EA(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var SA,IA,TA,kA,CA,AA,xA,PA,NA,OA,DA,LA,RA,MA,FA,UA,VA="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},jA={exports:{}};SA=jA,IA=VA,TA=function(e,t,n){if(!NA(t)||DA(t)||LA(t)||RA(t)||PA(t))return t;var r,i=0,s=0;if(OA(t))for(r=[],s=t.length;i<s;i++)r.push(TA(e,t[i],n));else for(var o in r={},t)Object.prototype.hasOwnProperty.call(t,o)&&(r[e(o,n)]=TA(e,t[o],n));return r},kA=function(e){return MA(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1)},CA=function(e){var t=kA(e);return t.substr(0,1).toUpperCase()+t.substr(1)},AA=function(e,t){return function(e,t){var n=(t=t||{}).separator||"_",r=t.split||/(?=[A-Z])/;return e.split(r).join(n)}(e,t).toLowerCase()},xA=Object.prototype.toString,PA=function(e){return"function"==typeof e},NA=function(e){return e===Object(e)},OA=function(e){return"[object Array]"==xA.call(e)},DA=function(e){return"[object Date]"==xA.call(e)},LA=function(e){return"[object RegExp]"==xA.call(e)},RA=function(e){return"[object Boolean]"==xA.call(e)},MA=function(e){return(e-=0)==e},FA=function(e,t){var n=t&&"process"in t?t.process:t;return"function"!=typeof n?e:function(t,r){return n(t,e,r)}},UA={camelize:kA,decamelize:AA,pascalize:CA,depascalize:AA,camelizeKeys:function(e,t){return TA(FA(kA,t),e)},decamelizeKeys:function(e,t){return TA(FA(AA,t),e,t)},pascalizeKeys:function(e,t){return TA(FA(CA,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}},SA.exports?SA.exports=UA:IA.humps=UA;var zA=jA.exports,BA=["class","style"];function $A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var r=(e.children||[]).map((function(e){return $A(e)})),i=Object.keys(e.attributes||{}).reduce((function(t,n){var r=e.attributes[n];switch(n){case"class":t.class=r.split(/\s+/).reduce((function(e,t){return e[t]=!0,e}),{});break;case"style":t.style=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n=t.indexOf(":"),r=zA.camelize(t.slice(0,n)),i=t.slice(n+1).trim();return e[r]=i,e}),{});break;default:t.attrs[n]=r}return t}),{attrs:{},class:{},style:{}});n.class;var s=n.style,o=void 0===s?{}:s,a=EA(n,BA);return zi(e.tag,yA(yA(yA({},t),{},{class:i.class,style:yA(yA({},i.style),o)},i.attrs),a),r)}var qA=!1;try{qA=!0}catch(dx){}function HA(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_A({},e,t):{}}function KA(e){return e&&"object"===bA(e)&&e.prefix&&e.iconName&&e.icon?e:mA.icon?mA.icon(e):null===e?null:"object"===bA(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}var GA=En({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=ji((function(){return KA(e.icon)})),i=ji((function(){return HA("classes",function(e){var t,n=(_A(_A(_A(_A(_A(_A(_A(_A(_A(_A(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":!0===e.flip,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},"fa-".concat(e.size),null!==e.size),"fa-rotate-".concat(e.rotation),null!==e.rotation),"fa-pull-".concat(e.pull),null!==e.pull),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),_A(_A(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map((function(e){return n[e]?e:null})).filter((function(e){return e}))}(e))})),s=ji((function(){return HA("transform","string"==typeof e.transform?mA.transform(e.transform):e.transform)})),o=ji((function(){return HA("mask",KA(e.mask))})),a=ji((function(){return gA(r.value,yA(yA(yA(yA({},i.value),s.value),o.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))}));zr(a,(function(e){if(!e)return function(){var e;!qA&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find one or more icon(s)",r.value,o.value)}),{immediate:!0});var c=ji((function(){return a.value?$A(a.value.abstract[0],{},n):null}));return function(){return c.value}}});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const WA={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},QA={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},YA={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},JA={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},XA=JA,ZA={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},ex={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},tx=ex,nx={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},rx={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},ix=rx,sx={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},ox={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},ax={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"]},cx={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]},lx={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},ux={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},hx={prefix:"fas",iconName:"wand-magic",icon:[512,512,["magic"],"f0d0","M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z"]};pA.add({prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},{prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"]},{prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2L0 192C0 86 86 0 192 0S384 86 384 192l0 270.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},{prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},lx,{prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},ZA,{prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},sx,WA,nx,ax,XA,{prefix:"fas",iconName:"highlighter",icon:[576,512,[],"f591","M315 315l158.4-215L444.1 70.6 229 229 315 315zm-187 5s0 0 0 0l0-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5c0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5L224 416l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l63-63 70.6 70.6-31 31c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z"]},{prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},{prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},{prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},{prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},ux,{prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},lx,{prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},{prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},{prefix:"fas",iconName:"feather",icon:[512,512,[129718],"f52d","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 68 0c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330l0 55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},{prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"]},{prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},{prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},{prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},{prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},{prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},{prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},{prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"]},JA,tx,{prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},cx,YA,{prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},{prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]},{prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},{prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},QA,ox,{prefix:"fas",iconName:"unlock",icon:[448,512,[128275],"f09c","M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z"]},{prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},{prefix:"fas",iconName:"gamepad",icon:[640,512,[],"f11b","M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z"]},{prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},{prefix:"fas",iconName:"book-medical",icon:[448,512,[],"f7e6","M0 96C0 43 43 0 96 0L384 0l32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32zM208 112l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},ix,{prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},{prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},{prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},hx,{prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3l0 41.7 0 41.7L52.5 440.6zM256 352l0-96 0-128 0-32c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29l0-64z"]},{prefix:"fas",iconName:"layer-group",icon:[576,512,[],"f5fd","M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"]},rx,{prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},ex,{prefix:"fas",iconName:"coins",icon:[512,512,[],"f51e","M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"]},{prefix:"fas",iconName:"gift",icon:[512,512,[127873],"f06b","M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"]});(async()=>{const e=Ws(XI),t=function(){const e=te(!0),t=e.run((()=>Et({})));let n=[],r=[];const i=yt({install(e){Zs(i),i._a=e,e.provide(eo,i),e.config.globalProperties.$pinia=i,r.forEach((e=>n.push(e))),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}();e.use(t),e.use(oT),e.component("font-awesome-icon",GA);const n=vo(),r=N_();document.documentElement.classList.toggle("dark",n.isDarkMode);!function(e,t,n,r){Wo(e).onAuthStateChanged(t,n,r)}(I_(),(async e=>{e?(r.user=e,await r.fetchUserSettings()):r.user=null})),e.mount("#app")})().catch((e=>{}));export{Hs as A,wS as B,Fs as C,TS as D,FS as E,ei as F,kt as G,$s as H,DS as I,P_ as J,go as K,M_ as L,Us as M,N_ as N,gS as O,vS as P,es as T,Ys as _,Ln as a,Fn as b,ji as c,hi as d,oi as e,rn as f,gi as g,ui as h,bi as i,Kn as j,$ as k,$n as l,Gn as m,U as n,Un as o,vi as p,wi as q,Et as r,St as s,Q as t,vo as u,x_ as v,zr as w,lt as x,sn as y,ps as z};
//# sourceMappingURL=index-Bi7IGgfb.js.map

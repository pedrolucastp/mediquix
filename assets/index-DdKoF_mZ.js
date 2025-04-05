(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ud(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const We={},Bs=[],wn=()=>{},ZE=()=>!1,gl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),dd=t=>t.startsWith("onUpdate:"),pt=Object.assign,fd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},eA=Object.prototype.hasOwnProperty,qe=(t,e)=>eA.call(t,e),ue=Array.isArray,zs=t=>Oo(t)==="[object Map]",ar=t=>Oo(t)==="[object Set]",Ph=t=>Oo(t)==="[object Date]",Se=t=>typeof t=="function",rt=t=>typeof t=="string",On=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",Lg=t=>(Ke(t)||Se(t))&&Se(t.then)&&Se(t.catch),Mg=Object.prototype.toString,Oo=t=>Mg.call(t),tA=t=>Oo(t).slice(8,-1),kg=t=>Oo(t)==="[object Object]",hd=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Br=ud(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nA=/-(\w)/g,nn=yl(t=>t.replace(nA,(e,n)=>n?n.toUpperCase():"")),iA=/\B([A-Z])/g,zi=yl(t=>t.replace(iA,"-$1").toLowerCase()),_l=yl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ac=yl(t=>t?`on${_l(t)}`:""),vi=(t,e)=>!Object.is(t,e),va=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},sA=t=>{const e=rt(t)?Number(t):NaN;return isNaN(e)?t:e};let Nh;const Il=()=>Nh||(Nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Po(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=rt(i)?lA(i):Po(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(rt(t)||Ke(t))return t}const rA=/;(?![^(]*\))/g,oA=/:([^]+)/,aA=/\/\*[^]*?\*\//g;function lA(t){const e={};return t.replace(aA,"").split(rA).forEach(n=>{if(n){const i=n.split(oA);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function sn(t){let e="";if(rt(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const i=sn(t[n]);i&&(e+=i+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uA=ud(cA);function Vg(t){return!!t||t===""}function dA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=No(t[i],e[i]);return n}function No(t,e){if(t===e)return!0;let n=Ph(t),i=Ph(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=On(t),i=On(e),n||i)return t===e;if(n=ue(t),i=ue(e),n||i)return n&&i?dA(t,e):!1;if(n=Ke(t),i=Ke(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!No(t[o],e[o]))return!1}}return String(t)===String(e)}function pd(t,e){return t.findIndex(n=>No(n,e))}const Fg=t=>!!(t&&t.__v_isRef===!0),Be=t=>rt(t)?t:t==null?"":ue(t)||Ke(t)&&(t.toString===Mg||!Se(t.toString))?Fg(t)?Be(t.value):JSON.stringify(t,Ug,2):String(t),Ug=(t,e)=>Fg(e)?Ug(t,e.value):zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[wc(i,r)+" =>"]=s,n),{})}:ar(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wc(n))}:On(e)?wc(e):Ke(e)&&!ue(e)&&!kg(e)?String(e):e,wc=(t,e="")=>{var n;return On(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class qg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Bg(t){return new qg(t)}function zg(){return kt}function fA(t,e=!1){kt&&kt.cleanups.push(t)}let Ye;const vc=new WeakSet;class Gg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vc.has(this)&&(vc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dh(this),$g(this);const e=Ye,n=an;Ye=this,an=!0;try{return this.fn()}finally{Wg(this),Ye=e,an=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yd(e);this.deps=this.depsTail=void 0,Dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ou(this)&&this.run()}get dirty(){return ou(this)}}let Hg=0,zr,Gr;function jg(t,e=!1){if(t.flags|=8,e){t.next=Gr,Gr=t;return}t.next=zr,zr=t}function md(){Hg++}function gd(){if(--Hg>0)return;if(Gr){let e=Gr;for(Gr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zr;){let e=zr;for(zr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function $g(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wg(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),yd(i),hA(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function ou(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Kg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ro))return;t.globalVersion=ro;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ou(t)){t.flags&=-3;return}const n=Ye,i=an;Ye=t,an=!0;try{$g(t);const s=t.fn(t._value);(e.version===0||vi(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ye=n,an=i,Wg(t),t.flags&=-3}}function yd(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)yd(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function hA(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let an=!0;const Qg=[];function Gi(){Qg.push(an),an=!1}function Hi(){const t=Qg.pop();an=t===void 0?!0:t}function Dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ye;Ye=void 0;try{e()}finally{Ye=n}}}let ro=0;class pA{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _d{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ye||!an||Ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ye)n=this.activeLink=new pA(Ye,this),Ye.deps?(n.prevDep=Ye.depsTail,Ye.depsTail.nextDep=n,Ye.depsTail=n):Ye.deps=Ye.depsTail=n,Yg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ye.depsTail,n.nextDep=void 0,Ye.depsTail.nextDep=n,Ye.depsTail=n,Ye.deps===n&&(Ye.deps=i)}return n}trigger(e){this.version++,ro++,this.notify(e)}notify(e){md();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gd()}}}function Yg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Yg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ua=new WeakMap,cs=Symbol(""),au=Symbol(""),oo=Symbol("");function Ct(t,e,n){if(an&&Ye){let i=Ua.get(t);i||Ua.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new _d),s.map=i,s.key=n),s.track()}}function qn(t,e,n,i,s,r){const o=Ua.get(t);if(!o){ro++;return}const l=c=>{c&&c.trigger()};if(md(),e==="clear")o.forEach(l);else{const c=ue(t),u=c&&hd(n);if(c&&n==="length"){const f=Number(i);o.forEach((p,m)=>{(m==="length"||m===oo||!On(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(oo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(cs)),zs(t)&&l(o.get(au)));break;case"delete":c||(l(o.get(cs)),zs(t)&&l(o.get(au)));break;case"set":zs(t)&&l(o.get(cs));break}}gd()}function mA(t,e){const n=Ua.get(t);return n&&n.get(e)}function Ps(t){const e=ke(t);return e===t?e:(Ct(e,"iterate",oo),en(t)?e:e.map(Ot))}function El(t){return Ct(t=ke(t),"iterate",oo),t}const gA={__proto__:null,[Symbol.iterator](){return Tc(this,Symbol.iterator,Ot)},concat(...t){return Ps(this).concat(...t.map(e=>ue(e)?Ps(e):e))},entries(){return Tc(this,"entries",t=>(t[1]=Ot(t[1]),t))},every(t,e){return kn(this,"every",t,e,void 0,arguments)},filter(t,e){return kn(this,"filter",t,e,n=>n.map(Ot),arguments)},find(t,e){return kn(this,"find",t,e,Ot,arguments)},findIndex(t,e){return kn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return kn(this,"findLast",t,e,Ot,arguments)},findLastIndex(t,e){return kn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return kn(this,"forEach",t,e,void 0,arguments)},includes(...t){return bc(this,"includes",t)},indexOf(...t){return bc(this,"indexOf",t)},join(t){return Ps(this).join(t)},lastIndexOf(...t){return bc(this,"lastIndexOf",t)},map(t,e){return kn(this,"map",t,e,void 0,arguments)},pop(){return Or(this,"pop")},push(...t){return Or(this,"push",t)},reduce(t,...e){return Lh(this,"reduce",t,e)},reduceRight(t,...e){return Lh(this,"reduceRight",t,e)},shift(){return Or(this,"shift")},some(t,e){return kn(this,"some",t,e,void 0,arguments)},splice(...t){return Or(this,"splice",t)},toReversed(){return Ps(this).toReversed()},toSorted(t){return Ps(this).toSorted(t)},toSpliced(...t){return Ps(this).toSpliced(...t)},unshift(...t){return Or(this,"unshift",t)},values(){return Tc(this,"values",Ot)}};function Tc(t,e,n){const i=El(t),s=i[e]();return i!==t&&!en(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const yA=Array.prototype;function kn(t,e,n,i,s,r){const o=El(t),l=o!==t&&!en(t),c=o[e];if(c!==yA[e]){const p=c.apply(t,r);return l?Ot(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Ot(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,i);return l&&s?s(f):f}function Lh(t,e,n,i){const s=El(t);let r=n;return s!==t&&(en(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Ot(l),c,t)}),s[e](r,...i)}function bc(t,e,n){const i=ke(t);Ct(i,"iterate",oo);const s=i[e](...n);return(s===-1||s===!1)&&Ad(n[0])?(n[0]=ke(n[0]),i[e](...n)):s}function Or(t,e,n=[]){Gi(),md();const i=ke(t)[e].apply(t,n);return gd(),Hi(),i}const _A=ud("__proto__,__v_isRef,__isVue"),Xg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(On));function IA(t){On(t)||(t=String(t));const e=ke(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class Jg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?OA:ny:r?ty:ey).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ue(e);if(!s){let c;if(o&&(c=gA[n]))return c;if(n==="hasOwnProperty")return IA}const l=Reflect.get(e,n,st(e)?e:i);return(On(n)?Xg.has(n):_A(n))||(s||Ct(e,"get",n),r)?l:st(l)?o&&hd(n)?l:l.value:Ke(l)?s?sy(l):Di(l):l}}class Zg extends Jg{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const c=ds(r);if(!en(i)&&!ds(i)&&(r=ke(r),i=ke(i)),!ue(e)&&st(r)&&!st(i))return c?!1:(r.value=i,!0)}const o=ue(e)&&hd(n)?Number(n)<e.length:qe(e,n),l=Reflect.set(e,n,i,st(e)?e:s);return e===ke(s)&&(o?vi(i,r)&&qn(e,"set",n,i):qn(e,"add",n,i)),l}deleteProperty(e,n){const i=qe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&qn(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!On(n)||!Xg.has(n))&&Ct(e,"has",n),i}ownKeys(e){return Ct(e,"iterate",ue(e)?"length":cs),Reflect.ownKeys(e)}}class EA extends Jg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const AA=new Zg,wA=new EA,vA=new Zg(!0);const lu=t=>t,da=t=>Reflect.getPrototypeOf(t);function TA(t,e,n){return function(...i){const s=this.__v_raw,r=ke(s),o=zs(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...i),f=n?lu:e?cu:Ot;return!e&&Ct(r,"iterate",c?au:cs),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function fa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function bA(t,e){const n={get(s){const r=this.__v_raw,o=ke(r),l=ke(s);t||(vi(s,l)&&Ct(o,"get",s),Ct(o,"get",l));const{has:c}=da(o),u=e?lu:t?cu:Ot;if(c.call(o,s))return u(r.get(s));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Ct(ke(s),"iterate",cs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=ke(r),l=ke(s);return t||(vi(s,l)&&Ct(o,"has",s),Ct(o,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const o=this,l=o.__v_raw,c=ke(l),u=e?lu:t?cu:Ot;return!t&&Ct(c,"iterate",cs),l.forEach((f,p)=>s.call(r,u(f),u(p),o))}};return pt(n,t?{add:fa("add"),set:fa("set"),delete:fa("delete"),clear:fa("clear")}:{add(s){!e&&!en(s)&&!ds(s)&&(s=ke(s));const r=ke(this);return da(r).has.call(r,s)||(r.add(s),qn(r,"add",s,s)),this},set(s,r){!e&&!en(r)&&!ds(r)&&(r=ke(r));const o=ke(this),{has:l,get:c}=da(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,r),u?vi(r,f)&&qn(o,"set",s,r):qn(o,"add",s,r),this},delete(s){const r=ke(this),{has:o,get:l}=da(r);let c=o.call(r,s);c||(s=ke(s),c=o.call(r,s)),l&&l.call(r,s);const u=r.delete(s);return c&&qn(r,"delete",s,void 0),u},clear(){const s=ke(this),r=s.size!==0,o=s.clear();return r&&qn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=TA(s,t,e)}),n}function Id(t,e){const n=bA(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(qe(n,s)&&s in i?n:i,s,r)}const SA={get:Id(!1,!1)},RA={get:Id(!1,!0)},CA={get:Id(!0,!1)};const ey=new WeakMap,ty=new WeakMap,ny=new WeakMap,OA=new WeakMap;function PA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function NA(t){return t.__v_skip||!Object.isExtensible(t)?0:PA(tA(t))}function Di(t){return ds(t)?t:Ed(t,!1,AA,SA,ey)}function iy(t){return Ed(t,!1,vA,RA,ty)}function sy(t){return Ed(t,!0,wA,CA,ny)}function Ed(t,e,n,i,s){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=NA(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function Ti(t){return ds(t)?Ti(t.__v_raw):!!(t&&t.__v_isReactive)}function ds(t){return!!(t&&t.__v_isReadonly)}function en(t){return!!(t&&t.__v_isShallow)}function Ad(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function wd(t){return!qe(t,"__v_skip")&&Object.isExtensible(t)&&xg(t,"__v_skip",!0),t}const Ot=t=>Ke(t)?Di(t):t,cu=t=>Ke(t)?sy(t):t;function st(t){return t?t.__v_isRef===!0:!1}function re(t){return ry(t,!1)}function DA(t){return ry(t,!0)}function ry(t,e){return st(t)?t:new LA(t,e)}class LA{constructor(e,n){this.dep=new _d,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:Ot(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||en(e)||ds(e);e=i?e:ke(e),vi(e,n)&&(this._rawValue=e,this._value=i?e:Ot(e),this.dep.trigger())}}function at(t){return st(t)?t.value:t}const MA={get:(t,e,n)=>e==="__v_raw"?t:at(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return st(s)&&!st(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function oy(t){return Ti(t)?t:new Proxy(t,MA)}function kA(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=VA(t,n);return e}class xA{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return mA(ke(this._object),this._key)}}function VA(t,e,n){const i=t[e];return st(i)?i:new xA(t,e,n)}class FA{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new _d(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ye!==this)return jg(this,!0),!0}get value(){const e=this.dep.track();return Kg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function UA(t,e,n=!1){let i,s;return Se(t)?i=t:(i=t.get,s=t.set),new FA(i,s,n)}const ha={},qa=new WeakMap;let is;function qA(t,e=!1,n=is){if(n){let i=qa.get(n);i||qa.set(n,i=[]),i.push(t)}}function BA(t,e,n=We){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:l,call:c}=n,u=V=>s?V:en(V)||s===!1||s===0?Bn(V,1):Bn(V);let f,p,m,E,R=!1,L=!1;if(st(t)?(p=()=>t.value,R=en(t)):Ti(t)?(p=()=>u(t),R=!0):ue(t)?(L=!0,R=t.some(V=>Ti(V)||en(V)),p=()=>t.map(V=>{if(st(V))return V.value;if(Ti(V))return u(V);if(Se(V))return c?c(V,2):V()})):Se(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Gi();try{m()}finally{Hi()}}const V=is;is=f;try{return c?c(t,3,[E]):t(E)}finally{is=V}}:p=wn,e&&s){const V=p,z=s===!0?1/0:s;p=()=>Bn(V(),z)}const M=zg(),O=()=>{f.stop(),M&&M.active&&fd(M.effects,f)};if(r&&e){const V=e;e=(...z)=>{V(...z),O()}}let C=L?new Array(t.length).fill(ha):ha;const k=V=>{if(!(!(f.flags&1)||!f.dirty&&!V))if(e){const z=f.run();if(s||R||(L?z.some((H,T)=>vi(H,C[T])):vi(z,C))){m&&m();const H=is;is=f;try{const T=[z,C===ha?void 0:L&&C[0]===ha?[]:C,E];c?c(e,3,T):e(...T),C=z}finally{is=H}}}else f.run()};return l&&l(k),f=new Gg(p),f.scheduler=o?()=>o(k,!1):k,E=V=>qA(V,!1,f),m=f.onStop=()=>{const V=qa.get(f);if(V){if(c)c(V,4);else for(const z of V)z();qa.delete(f)}},e?i?k(!0):C=f.run():o?o(k.bind(null,!0),!0):f.run(),O.pause=f.pause.bind(f),O.resume=f.resume.bind(f),O.stop=O,O}function Bn(t,e=1/0,n){if(e<=0||!Ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,st(t))Bn(t.value,e,n);else if(ue(t))for(let i=0;i<t.length;i++)Bn(t[i],e,n);else if(ar(t)||zs(t))t.forEach(i=>{Bn(i,e,n)});else if(kg(t)){for(const i in t)Bn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Bn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Do(t,e,n,i){try{return i?t(...i):t()}catch(s){Al(s,e,n)}}function cn(t,e,n,i){if(Se(t)){const s=Do(t,e,n,i);return s&&Lg(s)&&s.catch(r=>{Al(r,e,n)}),s}if(ue(t)){const s=[];for(let r=0;r<t.length;r++)s.push(cn(t[r],e,n,i));return s}}function Al(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||We;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(r){Gi(),Do(r,null,10,[t,c,u]),Hi();return}}zA(t,n,s,i,o)}function zA(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const xt=[];let gn=-1;const Gs=[];let fi=null,Ls=0;const ay=Promise.resolve();let Ba=null;function wl(t){const e=Ba||ay;return t?e.then(this?t.bind(this):t):e}function GA(t){let e=gn+1,n=xt.length;for(;e<n;){const i=e+n>>>1,s=xt[i],r=ao(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function vd(t){if(!(t.flags&1)){const e=ao(t),n=xt[xt.length-1];!n||!(t.flags&2)&&e>=ao(n)?xt.push(t):xt.splice(GA(e),0,t),t.flags|=1,ly()}}function ly(){Ba||(Ba=ay.then(uy))}function HA(t){ue(t)?Gs.push(...t):fi&&t.id===-1?fi.splice(Ls+1,0,t):t.flags&1||(Gs.push(t),t.flags|=1),ly()}function Mh(t,e,n=gn+1){for(;n<xt.length;n++){const i=xt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;xt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function cy(t){if(Gs.length){const e=[...new Set(Gs)].sort((n,i)=>ao(n)-ao(i));if(Gs.length=0,fi){fi.push(...e);return}for(fi=e,Ls=0;Ls<fi.length;Ls++){const n=fi[Ls];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fi=null,Ls=0}}const ao=t=>t.id==null?t.flags&2?-1:1/0:t.id;function uy(t){try{for(gn=0;gn<xt.length;gn++){const e=xt[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Do(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<xt.length;gn++){const e=xt[gn];e&&(e.flags&=-2)}gn=-1,xt.length=0,cy(),Ba=null,(xt.length||Gs.length)&&uy()}}let Vt=null,dy=null;function za(t){const e=Vt;return Vt=t,dy=t&&t.type.__scopeId||null,e}function bi(t,e=Vt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&jh(-1);const r=za(e);let o;try{o=t(...s)}finally{za(r),i._d&&jh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function je(t,e){if(Vt===null)return t;const n=Rl(Vt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,l,c=We]=e[s];r&&(Se(r)&&(r={mounted:r,updated:r}),r.deep&&Bn(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Zi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let c=l.dir[i];c&&(Gi(),cn(c,n,8,[t.el,l,t,e]),Hi())}}const jA=Symbol("_vte"),fy=t=>t.__isTeleport,hi=Symbol("_leaveCb"),pa=Symbol("_enterCb");function $A(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lr(()=>{t.isMounted=!0}),bd(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],hy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},py=t=>{const e=t.subTree;return e.component?py(e.component):e},WA={name:"BaseTransition",props:hy,setup(t,{slots:e}){const n=Hw(),i=$A();return()=>{const s=e.default&&yy(e.default(),!0);if(!s||!s.length)return;const r=my(s),o=ke(t),{mode:l}=o;if(i.isLeaving)return Sc(r);const c=kh(r);if(!c)return Sc(r);let u=uu(c,o,i,n,p=>u=p);c.type!==qt&&lo(c,u);let f=n.subTree&&kh(n.subTree);if(f&&f.type!==qt&&!rs(c,f)&&py(n).type!==qt){let p=uu(f,o,i,n);if(lo(f,p),l==="out-in"&&c.type!==qt)return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Sc(r);l==="in-out"&&c.type!==qt?p.delayLeave=(m,E,R)=>{const L=gy(i,f);L[String(f.key)]=f,m[hi]=()=>{E(),m[hi]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{R(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return r}}};function my(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==qt){e=n;break}}return e}const KA=WA;function gy(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function uu(t,e,n,i,s){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:E,onAfterLeave:R,onLeaveCancelled:L,onBeforeAppear:M,onAppear:O,onAfterAppear:C,onAppearCancelled:k}=e,V=String(t.key),z=gy(n,t),H=(g,_)=>{g&&cn(g,i,9,_)},T=(g,_)=>{const v=_[1];H(g,_),ue(g)?g.every(w=>w.length<=1)&&v():g.length<=1&&v()},y={mode:o,persisted:l,beforeEnter(g){let _=c;if(!n.isMounted)if(r)_=M||c;else return;g[hi]&&g[hi](!0);const v=z[V];v&&rs(t,v)&&v.el[hi]&&v.el[hi](),H(_,[g])},enter(g){let _=u,v=f,w=p;if(!n.isMounted)if(r)_=O||u,v=C||f,w=k||p;else return;let A=!1;const Ee=g[pa]=Fe=>{A||(A=!0,Fe?H(w,[g]):H(v,[g]),y.delayedLeave&&y.delayedLeave(),g[pa]=void 0)};_?T(_,[g,Ee]):Ee()},leave(g,_){const v=String(t.key);if(g[pa]&&g[pa](!0),n.isUnmounting)return _();H(m,[g]);let w=!1;const A=g[hi]=Ee=>{w||(w=!0,_(),Ee?H(L,[g]):H(R,[g]),g[hi]=void 0,z[v]===t&&delete z[v])};z[v]=t,E?T(E,[g,A]):A()},clone(g){const _=uu(g,e,n,i,s);return s&&s(_),_}};return y}function Sc(t){if(vl(t))return t=Li(t),t.children=null,t}function kh(t){if(!vl(t))return fy(t.type)&&t.children?my(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Se(n.default))return n.default()}}function lo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yy(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===tt?(o.patchFlag&128&&s++,i=i.concat(yy(o.children,e,l))):(e||o.type!==qt)&&i.push(l!=null?Li(o,{key:l}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Td(t,e){return Se(t)?pt({name:t.name},e,{setup:t}):t}function _y(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ga(t,e,n,i,s=!1){if(ue(t)){t.forEach((R,L)=>Ga(R,e&&(ue(e)?e[L]:e),n,i,s));return}if(Hr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ga(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Rl(i.component):i.el,o=s?null:r,{i:l,r:c}=t,u=e&&e.r,f=l.refs===We?l.refs={}:l.refs,p=l.setupState,m=ke(p),E=p===We?()=>!1:R=>qe(m,R);if(u!=null&&u!==c&&(rt(u)?(f[u]=null,E(u)&&(p[u]=null)):st(u)&&(u.value=null)),Se(c))Do(c,l,12,[o,f]);else{const R=rt(c),L=st(c);if(R||L){const M=()=>{if(t.f){const O=R?E(c)?p[c]:f[c]:c.value;s?ue(O)&&fd(O,r):ue(O)?O.includes(r)||O.push(r):R?(f[c]=[r],E(c)&&(p[c]=f[c])):(c.value=[r],t.k&&(f[t.k]=c.value))}else R?(f[c]=o,E(c)&&(p[c]=o)):L&&(c.value=o,t.k&&(f[t.k]=o))};o?(M.id=-1,jt(M,n)):M()}}}Il().requestIdleCallback;Il().cancelIdleCallback;const Hr=t=>!!t.type.__asyncLoader,vl=t=>t.type.__isKeepAlive;function QA(t,e){Iy(t,"a",e)}function YA(t,e){Iy(t,"da",e)}function Iy(t,e,n=ht){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Tl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)vl(s.parent.vnode)&&XA(i,e,n,s),s=s.parent}}function XA(t,e,n,i){const s=Tl(e,t,i,!0);Sd(()=>{fd(i[e],s)},n)}function Tl(t,e,n=ht,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Gi();const l=Lo(n),c=cn(e,n,t,o);return l(),Hi(),c});return i?s.unshift(r):s.push(r),r}}const ei=t=>(e,n=ht)=>{(!uo||t==="sp")&&Tl(t,(...i)=>e(...i),n)},JA=ei("bm"),lr=ei("m"),ZA=ei("bu"),ew=ei("u"),bd=ei("bum"),Sd=ei("um"),tw=ei("sp"),nw=ei("rtg"),iw=ei("rtc");function sw(t,e=ht){Tl("ec",t,e)}const rw="components";function fs(t,e){return aw(rw,t,!0,e)||t}const ow=Symbol.for("v-ndc");function aw(t,e,n=!0,i=!1){const s=Vt||ht;if(s){const r=s.type;{const l=Qw(r,!1);if(l&&(l===e||l===nn(e)||l===_l(nn(e))))return r}const o=xh(s[t]||r[t],e)||xh(s.appContext[t],e);return!o&&i?r:o}}function xh(t,e){return t&&(t[e]||t[nn(e)]||t[_l(nn(e))])}function ln(t,e,n,i){let s;const r=n,o=ue(t);if(o||rt(t)){const l=o&&Ti(t);let c=!1;l&&(c=!en(t),t=El(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(c?Ot(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,r)}else if(Ke(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,r)}}else s=[];return s}const du=t=>t?By(t)?Rl(t):du(t.parent):null,jr=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>du(t.parent),$root:t=>du(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ay(t),$forceUpdate:t=>t.f||(t.f=()=>{vd(t.update)}),$nextTick:t=>t.n||(t.n=wl.bind(t.proxy)),$watch:t=>Ow.bind(t)}),Rc=(t,e)=>t!==We&&!t.__isScriptSetup&&qe(t,e),lw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Rc(i,e))return o[e]=1,i[e];if(s!==We&&qe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&qe(u,e))return o[e]=3,r[e];if(n!==We&&qe(n,e))return o[e]=4,n[e];fu&&(o[e]=0)}}const f=jr[e];let p,m;if(f)return e==="$attrs"&&Ct(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==We&&qe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,qe(m,e))return m[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Rc(s,e)?(s[e]=n,!0):i!==We&&qe(i,e)?(i[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==We&&qe(t,o)||Rc(e,o)||(l=r[0])&&qe(l,o)||qe(i,o)||qe(jr,o)||qe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vh(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fu=!0;function cw(t){const e=Ay(t),n=t.proxy,i=t.ctx;fu=!1,e.beforeCreate&&Fh(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:E,updated:R,activated:L,deactivated:M,beforeDestroy:O,beforeUnmount:C,destroyed:k,unmounted:V,render:z,renderTracked:H,renderTriggered:T,errorCaptured:y,serverPrefetch:g,expose:_,inheritAttrs:v,components:w,directives:A,filters:Ee}=e;if(u&&uw(u,i,null),o)for(const ne in o){const we=o[ne];Se(we)&&(i[ne]=we.bind(n))}if(s){const ne=s.call(n,n);Ke(ne)&&(t.data=Di(ne))}if(fu=!0,r)for(const ne in r){const we=r[ne],Q=Se(we)?we.bind(n,n):Se(we.get)?we.get.bind(n,n):wn,K=!Se(we)&&Se(we.set)?we.set.bind(n):wn,ye=ze({get:Q,set:K});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>ye.value,set:ve=>ye.value=ve})}if(l)for(const ne in l)Ey(l[ne],i,n,ne);if(c){const ne=Se(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(we=>{Ta(we,ne[we])})}f&&Fh(f,t,"c");function Oe(ne,we){ue(we)?we.forEach(Q=>ne(Q.bind(n))):we&&ne(we.bind(n))}if(Oe(JA,p),Oe(lr,m),Oe(ZA,E),Oe(ew,R),Oe(QA,L),Oe(YA,M),Oe(sw,y),Oe(iw,H),Oe(nw,T),Oe(bd,C),Oe(Sd,V),Oe(tw,g),ue(_))if(_.length){const ne=t.exposed||(t.exposed={});_.forEach(we=>{Object.defineProperty(ne,we,{get:()=>n[we],set:Q=>n[we]=Q})})}else t.exposed||(t.exposed={});z&&t.render===wn&&(t.render=z),v!=null&&(t.inheritAttrs=v),w&&(t.components=w),A&&(t.directives=A),g&&_y(t)}function uw(t,e,n=wn){ue(t)&&(t=hu(t));for(const i in t){const s=t[i];let r;Ke(s)?"default"in s?r=vn(s.from||i,s.default,!0):r=vn(s.from||i):r=vn(s),st(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Fh(t,e,n){cn(ue(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ey(t,e,n,i){let s=i.includes(".")?ky(n,i):()=>n[i];if(rt(t)){const r=e[t];Se(r)&&Si(s,r)}else if(Se(t))Si(s,t.bind(n));else if(Ke(t))if(ue(t))t.forEach(r=>Ey(r,e,n,i));else{const r=Se(t.handler)?t.handler.bind(n):e[t.handler];Se(r)&&Si(s,r,t)}}function Ay(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(u=>Ha(c,u,o,!0)),Ha(c,e,o)),Ke(e)&&r.set(e,c),c}function Ha(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ha(t,r,n,!0),s&&s.forEach(o=>Ha(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=dw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const dw={data:Uh,props:qh,emits:qh,methods:Mr,computed:Mr,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Mr,directives:Mr,watch:hw,provide:Uh,inject:fw};function Uh(t,e){return e?t?function(){return pt(Se(t)?t.call(this,this):t,Se(e)?e.call(this,this):e)}:e:t}function fw(t,e){return Mr(hu(t),hu(e))}function hu(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Mr(t,e){return t?pt(Object.create(null),t,e):e}function qh(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:pt(Object.create(null),Vh(t),Vh(e??{})):e}function hw(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const i in e)n[i]=Mt(t[i],e[i]);return n}function wy(){return{app:null,config:{isNativeTag:ZE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pw=0;function mw(t,e){return function(i,s=null){Se(i)||(i=pt({},i)),s!=null&&!Ke(s)&&(s=null);const r=wy(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:pw++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xw,get config(){return r.config},set config(f){},use(f,...p){return o.has(f)||(f&&Se(f.install)?(o.add(f),f.install(u,...p)):Se(f)&&(o.add(f),f(u,...p))),u},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),u},component(f,p){return p?(r.components[f]=p,u):r.components[f]},directive(f,p){return p?(r.directives[f]=p,u):r.directives[f]},mount(f,p,m){if(!c){const E=u._ceVNode||fe(i,s);return E.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(E,f,m),c=!0,u._container=f,f.__vue_app__=u,Rl(E.component)}},onUnmount(f){l.push(f)},unmount(){c&&(cn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return r.provides[f]=p,u},runWithContext(f){const p=us;us=u;try{return f()}finally{us=p}}};return u}}let us=null;function Ta(t,e){if(ht){let n=ht.provides;const i=ht.parent&&ht.parent.provides;i===n&&(n=ht.provides=Object.create(i)),n[t]=e}}function vn(t,e,n=!1){const i=ht||Vt;if(i||us){const s=us?us._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Se(e)?e.call(i&&i.proxy):e}}function gw(){return!!(ht||Vt||us)}const vy={},Ty=()=>Object.create(vy),by=t=>Object.getPrototypeOf(t)===vy;function yw(t,e,n,i=!1){const s={},r=Ty();t.propsDefaults=Object.create(null),Sy(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:iy(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function _w(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(bl(t.emitsOptions,m))continue;const E=e[m];if(c)if(qe(r,m))E!==r[m]&&(r[m]=E,u=!0);else{const R=nn(m);s[R]=pu(c,l,R,E,t,!1)}else E!==r[m]&&(r[m]=E,u=!0)}}}else{Sy(t,e,s,r)&&(u=!0);let f;for(const p in l)(!e||!qe(e,p)&&((f=zi(p))===p||!qe(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=pu(c,l,p,void 0,t,!0)):delete s[p]);if(r!==l)for(const p in r)(!e||!qe(e,p))&&(delete r[p],u=!0)}u&&qn(t.attrs,"set","")}function Sy(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Br(c))continue;const u=e[c];let f;s&&qe(s,f=nn(c))?!r||!r.includes(f)?n[f]=u:(l||(l={}))[f]=u:bl(t.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(r){const c=ke(n),u=l||We;for(let f=0;f<r.length;f++){const p=r[f];n[p]=pu(s,c,p,u[p],t,!qe(u,p))}}return o}function pu(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=qe(o,"default");if(l&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Se(c)){const{propsDefaults:u}=s;if(n in u)i=u[n];else{const f=Lo(s);i=u[n]=c.call(null,e),f()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===zi(n))&&(i=!0))}return i}const Iw=new WeakMap;function Ry(t,e,n=!1){const i=n?Iw:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let c=!1;if(!Se(t)){const f=p=>{c=!0;const[m,E]=Ry(p,e,!0);pt(o,m),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!c)return Ke(t)&&i.set(t,Bs),Bs;if(ue(r))for(let f=0;f<r.length;f++){const p=nn(r[f]);Bh(p)&&(o[p]=We)}else if(r)for(const f in r){const p=nn(f);if(Bh(p)){const m=r[f],E=o[p]=ue(m)||Se(m)?{type:m}:pt({},m),R=E.type;let L=!1,M=!0;if(ue(R))for(let O=0;O<R.length;++O){const C=R[O],k=Se(C)&&C.name;if(k==="Boolean"){L=!0;break}else k==="String"&&(M=!1)}else L=Se(R)&&R.name==="Boolean";E[0]=L,E[1]=M,(L||qe(E,"default"))&&l.push(p)}}const u=[o,l];return Ke(t)&&i.set(t,u),u}function Bh(t){return t[0]!=="$"&&!Br(t)}const Cy=t=>t[0]==="_"||t==="$stable",Rd=t=>ue(t)?t.map(_n):[_n(t)],Ew=(t,e,n)=>{if(e._n)return e;const i=bi((...s)=>Rd(e(...s)),n);return i._c=!1,i},Oy=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Cy(s))continue;const r=t[s];if(Se(r))e[s]=Ew(s,r,i);else if(r!=null){const o=Rd(r);e[s]=()=>o}}},Py=(t,e)=>{const n=Rd(e);t.slots.default=()=>n},Ny=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Aw=(t,e,n)=>{const i=t.slots=Ty();if(t.vnode.shapeFlag&32){const s=e._;s?(Ny(i,e,n),n&&xg(i,"_",s,!0)):Oy(e,i)}else e&&Py(t,e)},ww=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=We;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Ny(s,e,n):(r=!e.$stable,Oy(e,s)),o=e}else e&&(Py(t,e),o={default:1});if(r)for(const l in s)!Cy(l)&&o[l]==null&&delete s[l]},jt=xw;function vw(t){return Tw(t)}function Tw(t,e){const n=Il();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:E=wn,insertStaticContent:R}=t,L=(b,S,P,U=null,G=null,q=null,Z=void 0,X=null,Y=!!S.dynamicChildren)=>{if(b===S)return;b&&!rs(b,S)&&(U=F(b),ve(b,G,q,!0),b=null),S.patchFlag===-2&&(Y=!1,S.dynamicChildren=null);const{type:j,ref:pe,shapeFlag:te}=S;switch(j){case Sl:M(b,S,P,U);break;case qt:O(b,S,P,U);break;case Oc:b==null&&C(S,P,U,Z);break;case tt:w(b,S,P,U,G,q,Z,X,Y);break;default:te&1?z(b,S,P,U,G,q,Z,X,Y):te&6?A(b,S,P,U,G,q,Z,X,Y):(te&64||te&128)&&j.process(b,S,P,U,G,q,Z,X,Y,oe)}pe!=null&&G&&Ga(pe,b&&b.ref,q,S||b,!S)},M=(b,S,P,U)=>{if(b==null)i(S.el=l(S.children),P,U);else{const G=S.el=b.el;S.children!==b.children&&u(G,S.children)}},O=(b,S,P,U)=>{b==null?i(S.el=c(S.children||""),P,U):S.el=b.el},C=(b,S,P,U)=>{[b.el,b.anchor]=R(b.children,S,P,U,b.el,b.anchor)},k=({el:b,anchor:S},P,U)=>{let G;for(;b&&b!==S;)G=m(b),i(b,P,U),b=G;i(S,P,U)},V=({el:b,anchor:S})=>{let P;for(;b&&b!==S;)P=m(b),s(b),b=P;s(S)},z=(b,S,P,U,G,q,Z,X,Y)=>{S.type==="svg"?Z="svg":S.type==="math"&&(Z="mathml"),b==null?H(S,P,U,G,q,Z,X,Y):g(b,S,G,q,Z,X,Y)},H=(b,S,P,U,G,q,Z,X)=>{let Y,j;const{props:pe,shapeFlag:te,transition:le,dirs:_e}=b;if(Y=b.el=o(b.type,q,pe&&pe.is,pe),te&8?f(Y,b.children):te&16&&y(b.children,Y,null,U,G,Cc(b,q),Z,X),_e&&Zi(b,null,U,"created"),T(Y,b,b.scopeId,Z,U),pe){for(const Ce in pe)Ce!=="value"&&!Br(Ce)&&r(Y,Ce,null,pe[Ce],q,U);"value"in pe&&r(Y,"value",null,pe.value,q),(j=pe.onVnodeBeforeMount)&&mn(j,U,b)}_e&&Zi(b,null,U,"beforeMount");const me=bw(G,le);me&&le.beforeEnter(Y),i(Y,S,P),((j=pe&&pe.onVnodeMounted)||me||_e)&&jt(()=>{j&&mn(j,U,b),me&&le.enter(Y),_e&&Zi(b,null,U,"mounted")},G)},T=(b,S,P,U,G)=>{if(P&&E(b,P),U)for(let q=0;q<U.length;q++)E(b,U[q]);if(G){let q=G.subTree;if(S===q||Vy(q.type)&&(q.ssContent===S||q.ssFallback===S)){const Z=G.vnode;T(b,Z,Z.scopeId,Z.slotScopeIds,G.parent)}}},y=(b,S,P,U,G,q,Z,X,Y=0)=>{for(let j=Y;j<b.length;j++){const pe=b[j]=X?pi(b[j]):_n(b[j]);L(null,pe,S,P,U,G,q,Z,X)}},g=(b,S,P,U,G,q,Z)=>{const X=S.el=b.el;let{patchFlag:Y,dynamicChildren:j,dirs:pe}=S;Y|=b.patchFlag&16;const te=b.props||We,le=S.props||We;let _e;if(P&&es(P,!1),(_e=le.onVnodeBeforeUpdate)&&mn(_e,P,S,b),pe&&Zi(S,b,P,"beforeUpdate"),P&&es(P,!0),(te.innerHTML&&le.innerHTML==null||te.textContent&&le.textContent==null)&&f(X,""),j?_(b.dynamicChildren,j,X,P,U,Cc(S,G),q):Z||we(b,S,X,null,P,U,Cc(S,G),q,!1),Y>0){if(Y&16)v(X,te,le,P,G);else if(Y&2&&te.class!==le.class&&r(X,"class",null,le.class,G),Y&4&&r(X,"style",te.style,le.style,G),Y&8){const me=S.dynamicProps;for(let Ce=0;Ce<me.length;Ce++){const Le=me[Ce],wt=te[Le],mt=le[Le];(mt!==wt||Le==="value")&&r(X,Le,wt,mt,G,P)}}Y&1&&b.children!==S.children&&f(X,S.children)}else!Z&&j==null&&v(X,te,le,P,G);((_e=le.onVnodeUpdated)||pe)&&jt(()=>{_e&&mn(_e,P,S,b),pe&&Zi(S,b,P,"updated")},U)},_=(b,S,P,U,G,q,Z)=>{for(let X=0;X<S.length;X++){const Y=b[X],j=S[X],pe=Y.el&&(Y.type===tt||!rs(Y,j)||Y.shapeFlag&70)?p(Y.el):P;L(Y,j,pe,null,U,G,q,Z,!0)}},v=(b,S,P,U,G)=>{if(S!==P){if(S!==We)for(const q in S)!Br(q)&&!(q in P)&&r(b,q,S[q],null,G,U);for(const q in P){if(Br(q))continue;const Z=P[q],X=S[q];Z!==X&&q!=="value"&&r(b,q,X,Z,G,U)}"value"in P&&r(b,"value",S.value,P.value,G)}},w=(b,S,P,U,G,q,Z,X,Y)=>{const j=S.el=b?b.el:l(""),pe=S.anchor=b?b.anchor:l("");let{patchFlag:te,dynamicChildren:le,slotScopeIds:_e}=S;_e&&(X=X?X.concat(_e):_e),b==null?(i(j,P,U),i(pe,P,U),y(S.children||[],P,pe,G,q,Z,X,Y)):te>0&&te&64&&le&&b.dynamicChildren?(_(b.dynamicChildren,le,P,G,q,Z,X),(S.key!=null||G&&S===G.subTree)&&Dy(b,S,!0)):we(b,S,P,pe,G,q,Z,X,Y)},A=(b,S,P,U,G,q,Z,X,Y)=>{S.slotScopeIds=X,b==null?S.shapeFlag&512?G.ctx.activate(S,P,U,Z,Y):Ee(S,P,U,G,q,Z,Y):Fe(b,S,Y)},Ee=(b,S,P,U,G,q,Z)=>{const X=b.component=Gw(b,U,G);if(vl(b)&&(X.ctx.renderer=oe),jw(X,!1,Z),X.asyncDep){if(G&&G.registerDep(X,Oe,Z),!b.el){const Y=X.subTree=fe(qt);O(null,Y,S,P)}}else Oe(X,b,S,P,G,q,Z)},Fe=(b,S,P)=>{const U=S.component=b.component;if(Mw(b,S,P))if(U.asyncDep&&!U.asyncResolved){ne(U,S,P);return}else U.next=S,U.update();else S.el=b.el,U.vnode=S},Oe=(b,S,P,U,G,q,Z)=>{const X=()=>{if(b.isMounted){let{next:te,bu:le,u:_e,parent:me,vnode:Ce}=b;{const vt=Ly(b);if(vt){te&&(te.el=Ce.el,ne(b,te,Z)),vt.asyncDep.then(()=>{b.isUnmounted||X()});return}}let Le=te,wt;es(b,!1),te?(te.el=Ce.el,ne(b,te,Z)):te=Ce,le&&va(le),(wt=te.props&&te.props.onVnodeBeforeUpdate)&&mn(wt,me,te,Ce),es(b,!0);const mt=Gh(b),Xt=b.subTree;b.subTree=mt,L(Xt,mt,p(Xt.el),F(Xt),b,G,q),te.el=mt.el,Le===null&&kw(b,mt.el),_e&&jt(_e,G),(wt=te.props&&te.props.onVnodeUpdated)&&jt(()=>mn(wt,me,te,Ce),G)}else{let te;const{el:le,props:_e}=S,{bm:me,m:Ce,parent:Le,root:wt,type:mt}=b,Xt=Hr(S);es(b,!1),me&&va(me),!Xt&&(te=_e&&_e.onVnodeBeforeMount)&&mn(te,Le,S),es(b,!0);{wt.ce&&wt.ce._injectChildStyle(mt);const vt=b.subTree=Gh(b);L(null,vt,P,U,b,G,q),S.el=vt.el}if(Ce&&jt(Ce,G),!Xt&&(te=_e&&_e.onVnodeMounted)){const vt=S;jt(()=>mn(te,Le,vt),G)}(S.shapeFlag&256||Le&&Hr(Le.vnode)&&Le.vnode.shapeFlag&256)&&b.a&&jt(b.a,G),b.isMounted=!0,S=P=U=null}};b.scope.on();const Y=b.effect=new Gg(X);b.scope.off();const j=b.update=Y.run.bind(Y),pe=b.job=Y.runIfDirty.bind(Y);pe.i=b,pe.id=b.uid,Y.scheduler=()=>vd(pe),es(b,!0),j()},ne=(b,S,P)=>{S.component=b;const U=b.vnode.props;b.vnode=S,b.next=null,_w(b,S.props,U,P),ww(b,S.children,P),Gi(),Mh(b),Hi()},we=(b,S,P,U,G,q,Z,X,Y=!1)=>{const j=b&&b.children,pe=b?b.shapeFlag:0,te=S.children,{patchFlag:le,shapeFlag:_e}=S;if(le>0){if(le&128){K(j,te,P,U,G,q,Z,X,Y);return}else if(le&256){Q(j,te,P,U,G,q,Z,X,Y);return}}_e&8?(pe&16&&At(j,G,q),te!==j&&f(P,te)):pe&16?_e&16?K(j,te,P,U,G,q,Z,X,Y):At(j,G,q,!0):(pe&8&&f(P,""),_e&16&&y(te,P,U,G,q,Z,X,Y))},Q=(b,S,P,U,G,q,Z,X,Y)=>{b=b||Bs,S=S||Bs;const j=b.length,pe=S.length,te=Math.min(j,pe);let le;for(le=0;le<te;le++){const _e=S[le]=Y?pi(S[le]):_n(S[le]);L(b[le],_e,P,null,G,q,Z,X,Y)}j>pe?At(b,G,q,!0,!1,te):y(S,P,U,G,q,Z,X,Y,te)},K=(b,S,P,U,G,q,Z,X,Y)=>{let j=0;const pe=S.length;let te=b.length-1,le=pe-1;for(;j<=te&&j<=le;){const _e=b[j],me=S[j]=Y?pi(S[j]):_n(S[j]);if(rs(_e,me))L(_e,me,P,null,G,q,Z,X,Y);else break;j++}for(;j<=te&&j<=le;){const _e=b[te],me=S[le]=Y?pi(S[le]):_n(S[le]);if(rs(_e,me))L(_e,me,P,null,G,q,Z,X,Y);else break;te--,le--}if(j>te){if(j<=le){const _e=le+1,me=_e<pe?S[_e].el:U;for(;j<=le;)L(null,S[j]=Y?pi(S[j]):_n(S[j]),P,me,G,q,Z,X,Y),j++}}else if(j>le)for(;j<=te;)ve(b[j],G,q,!0),j++;else{const _e=j,me=j,Ce=new Map;for(j=me;j<=le;j++){const gt=S[j]=Y?pi(S[j]):_n(S[j]);gt.key!=null&&Ce.set(gt.key,j)}let Le,wt=0;const mt=le-me+1;let Xt=!1,vt=0;const ni=new Array(mt);for(j=0;j<mt;j++)ni[j]=0;for(j=_e;j<=te;j++){const gt=b[j];if(wt>=mt){ve(gt,G,q,!0);continue}let Jt;if(gt.key!=null)Jt=Ce.get(gt.key);else for(Le=me;Le<=le;Le++)if(ni[Le-me]===0&&rs(gt,S[Le])){Jt=Le;break}Jt===void 0?ve(gt,G,q,!0):(ni[Jt-me]=j+1,Jt>=vt?vt=Jt:Xt=!0,L(gt,S[Jt],P,null,G,q,Z,X,Y),wt++)}const gr=Xt?Sw(ni):Bs;for(Le=gr.length-1,j=mt-1;j>=0;j--){const gt=me+j,Jt=S[gt],Qo=gt+1<pe?S[gt+1].el:U;ni[j]===0?L(null,Jt,P,Qo,G,q,Z,X,Y):Xt&&(Le<0||j!==gr[Le]?ye(Jt,P,Qo,2):Le--)}}},ye=(b,S,P,U,G=null)=>{const{el:q,type:Z,transition:X,children:Y,shapeFlag:j}=b;if(j&6){ye(b.component.subTree,S,P,U);return}if(j&128){b.suspense.move(S,P,U);return}if(j&64){Z.move(b,S,P,oe);return}if(Z===tt){i(q,S,P);for(let te=0;te<Y.length;te++)ye(Y[te],S,P,U);i(b.anchor,S,P);return}if(Z===Oc){k(b,S,P);return}if(U!==2&&j&1&&X)if(U===0)X.beforeEnter(q),i(q,S,P),jt(()=>X.enter(q),G);else{const{leave:te,delayLeave:le,afterLeave:_e}=X,me=()=>i(q,S,P),Ce=()=>{te(q,()=>{me(),_e&&_e()})};le?le(q,me,Ce):Ce()}else i(q,S,P)},ve=(b,S,P,U=!1,G=!1)=>{const{type:q,props:Z,ref:X,children:Y,dynamicChildren:j,shapeFlag:pe,patchFlag:te,dirs:le,cacheIndex:_e}=b;if(te===-2&&(G=!1),X!=null&&Ga(X,null,P,b,!0),_e!=null&&(S.renderCache[_e]=void 0),pe&256){S.ctx.deactivate(b);return}const me=pe&1&&le,Ce=!Hr(b);let Le;if(Ce&&(Le=Z&&Z.onVnodeBeforeUnmount)&&mn(Le,S,b),pe&6)Gt(b.component,P,U);else{if(pe&128){b.suspense.unmount(P,U);return}me&&Zi(b,null,S,"beforeUnmount"),pe&64?b.type.remove(b,S,P,oe,U):j&&!j.hasOnce&&(q!==tt||te>0&&te&64)?At(j,S,P,!1,!0):(q===tt&&te&384||!G&&pe&16)&&At(Y,S,P),U&&Te(b)}(Ce&&(Le=Z&&Z.onVnodeUnmounted)||me)&&jt(()=>{Le&&mn(Le,S,b),me&&Zi(b,null,S,"unmounted")},P)},Te=b=>{const{type:S,el:P,anchor:U,transition:G}=b;if(S===tt){Qe(P,U);return}if(S===Oc){V(b);return}const q=()=>{s(P),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(b.shapeFlag&1&&G&&!G.persisted){const{leave:Z,delayLeave:X}=G,Y=()=>Z(P,q);X?X(b.el,q,Y):Y()}else q()},Qe=(b,S)=>{let P;for(;b!==S;)P=m(b),s(b),b=P;s(S)},Gt=(b,S,P)=>{const{bum:U,scope:G,job:q,subTree:Z,um:X,m:Y,a:j}=b;zh(Y),zh(j),U&&va(U),G.stop(),q&&(q.flags|=8,ve(Z,b,S,P)),X&&jt(X,S),jt(()=>{b.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},At=(b,S,P,U=!1,G=!1,q=0)=>{for(let Z=q;Z<b.length;Z++)ve(b[Z],S,P,U,G)},F=b=>{if(b.shapeFlag&6)return F(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const S=m(b.anchor||b.el),P=S&&S[jA];return P?m(P):S};let ie=!1;const ee=(b,S,P)=>{b==null?S._vnode&&ve(S._vnode,null,null,!0):L(S._vnode||null,b,S,null,null,null,P),S._vnode=b,ie||(ie=!0,Mh(),cy(),ie=!1)},oe={p:L,um:ve,m:ye,r:Te,mt:Ee,mc:y,pc:we,pbc:_,n:F,o:t};return{render:ee,hydrate:void 0,createApp:mw(ee)}}function Cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function es({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function bw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Dy(t,e,n=!1){const i=t.children,s=e.children;if(ue(i)&&ue(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=pi(s[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Dy(o,l)),l.type===Sl&&(l.el=o.el)}}function Sw(t){const e=t.slice(),n=[0];let i,s,r,o,l;const c=t.length;for(i=0;i<c;i++){const u=t[i];if(u!==0){if(s=n[n.length-1],t[s]<u){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ly(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ly(e)}function zh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Rw=Symbol.for("v-scx"),Cw=()=>vn(Rw);function Si(t,e,n){return My(t,e,n)}function My(t,e,n=We){const{immediate:i,deep:s,flush:r,once:o}=n,l=pt({},n),c=e&&i||!e&&r!=="post";let u;if(uo){if(r==="sync"){const E=Cw();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=wn,E.resume=wn,E.pause=wn,E}}const f=ht;l.call=(E,R,L)=>cn(E,f,R,L);let p=!1;r==="post"?l.scheduler=E=>{jt(E,f&&f.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(E,R)=>{R?E():vd(E)}),l.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,f&&(E.id=f.uid,E.i=f))};const m=BA(t,e,l);return uo&&(u?u.push(m):c&&m()),m}function Ow(t,e,n){const i=this.proxy,s=rt(t)?t.includes(".")?ky(i,t):()=>i[t]:t.bind(i,i);let r;Se(e)?r=e:(r=e.handler,n=e);const o=Lo(this),l=My(s,r.bind(i),n);return o(),l}function ky(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Pw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${zi(e)}Modifiers`];function Nw(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||We;let s=n;const r=e.startsWith("update:"),o=r&&Pw(i,e.slice(7));o&&(o.trim&&(s=n.map(f=>rt(f)?f.trim():f)),o.number&&(s=n.map(Fa)));let l,c=i[l=Ac(e)]||i[l=Ac(nn(e))];!c&&r&&(c=i[l=Ac(zi(e))]),c&&cn(c,t,6,s);const u=i[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,cn(u,t,6,s)}}function xy(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!Se(t)){const c=u=>{const f=xy(u,e,!0);f&&(l=!0,pt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(Ke(t)&&i.set(t,null),null):(ue(r)?r.forEach(c=>o[c]=null):pt(o,r),Ke(t)&&i.set(t,o),o)}function bl(t,e){return!t||!gl(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,zi(e))||qe(t,e))}function Gh(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:E,ctx:R,inheritAttrs:L}=t,M=za(t);let O,C;try{if(n.shapeFlag&4){const V=s||i,z=V;O=_n(u.call(z,V,f,p,E,m,R)),C=l}else{const V=e;O=_n(V.length>1?V(p,{attrs:l,slots:o,emit:c}):V(p,null)),C=e.props?l:Dw(l)}}catch(V){$r.length=0,Al(V,t,1),O=fe(qt)}let k=O;if(C&&L!==!1){const V=Object.keys(C),{shapeFlag:z}=k;V.length&&z&7&&(r&&V.some(dd)&&(C=Lw(C,r)),k=Li(k,C,!1,!0))}return n.dirs&&(k=Li(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&lo(k,n.transition),O=k,za(M),O}const Dw=t=>{let e;for(const n in t)(n==="class"||n==="style"||gl(n))&&((e||(e={}))[n]=t[n]);return e},Lw=(t,e)=>{const n={};for(const i in t)(!dd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Mw(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Hh(i,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==i[m]&&!bl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Hh(i,o,u):!0:!!o;return!1}function Hh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!bl(n,r))return!0}return!1}function kw({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Vy=t=>t.__isSuspense;function xw(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):HA(t)}const tt=Symbol.for("v-fgt"),Sl=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),Oc=Symbol.for("v-stc"),$r=[];let $t=null;function ce(t=!1){$r.push($t=t?null:[])}function Vw(){$r.pop(),$t=$r[$r.length-1]||null}let co=1;function jh(t,e=!1){co+=t,t<0&&$t&&e&&($t.hasOnce=!0)}function Fy(t){return t.dynamicChildren=co>0?$t||Bs:null,Vw(),co>0&&$t&&$t.push(t),t}function de(t,e,n,i,s,r){return Fy(N(t,e,n,i,s,r,!0))}function Uy(t,e,n,i,s){return Fy(fe(t,e,n,i,s,!0))}function ja(t){return t?t.__v_isVNode===!0:!1}function rs(t,e){return t.type===e.type&&t.key===e.key}const qy=({key:t})=>t??null,ba=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||st(t)||Se(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,i=0,s=null,r=t===tt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qy(e),ref:e&&ba(e),scopeId:dy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return l?(Cd(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),co>0&&!o&&$t&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&$t.push(c),c}const fe=Fw;function Fw(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===ow)&&(t=qt),ja(t)){const l=Li(t,e,!0);return n&&Cd(l,n),co>0&&!r&&$t&&(l.shapeFlag&6?$t[$t.indexOf(t)]=l:$t.push(l)),l.patchFlag=-2,l}if(Yw(t)&&(t=t.__vccOpts),e){e=Uw(e);let{class:l,style:c}=e;l&&!rt(l)&&(e.class=sn(l)),Ke(c)&&(Ad(c)&&!ue(c)&&(c=pt({},c)),e.style=Po(c))}const o=rt(t)?1:Vy(t)?128:fy(t)?64:Ke(t)?4:Se(t)?2:0;return N(t,e,n,i,s,o,r,!0)}function Uw(t){return t?Ad(t)||by(t)?pt({},t):t:null}function Li(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?qw(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&qy(u),ref:e&&e.ref?n&&r?ue(r)?r.concat(ba(e)):[r,ba(e)]:ba(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Li(t.ssContent),ssFallback:t.ssFallback&&Li(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&lo(f,c.clone(f)),f}function He(t=" ",e=0){return fe(Sl,null,t,e)}function Ai(t="",e=!1){return e?(ce(),Uy(qt,null,t)):fe(qt,null,t)}function _n(t){return t==null||typeof t=="boolean"?fe(qt):ue(t)?fe(tt,null,t.slice()):ja(t)?pi(t):fe(Sl,null,String(t))}function pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Li(t)}function Cd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Cd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!by(e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Se(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),i&64?(n=16,e=[He(e)]):n=8);t.children=e,t.shapeFlag|=n}function qw(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=sn([e.class,i.class]));else if(s==="style")e.style=Po([e.style,i.style]);else if(gl(s)){const r=e[s],o=i[s];o&&r!==o&&!(ue(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function mn(t,e,n,i=null){cn(t,e,7,[n,i])}const Bw=wy();let zw=0;function Gw(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Bw,r={uid:zw++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ry(i,s),emitsOptions:xy(i,s),emit:null,emitted:null,propsDefaults:We,inheritAttrs:i.inheritAttrs,ctx:We,data:We,props:We,attrs:We,slots:We,refs:We,setupState:We,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Nw.bind(null,r),t.ce&&t.ce(r),r}let ht=null;const Hw=()=>ht||Vt;let $a,mu;{const t=Il(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};$a=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),mu=e("__VUE_SSR_SETTERS__",n=>uo=n)}const Lo=t=>{const e=ht;return $a(t),t.scope.on(),()=>{t.scope.off(),$a(e)}},$h=()=>{ht&&ht.scope.off(),$a(null)};function By(t){return t.vnode.shapeFlag&4}let uo=!1;function jw(t,e=!1,n=!1){e&&mu(e);const{props:i,children:s}=t.vnode,r=By(t);yw(t,i,r,e),Aw(t,s,n);const o=r?$w(t,e):void 0;return e&&mu(!1),o}function $w(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,lw);const{setup:i}=n;if(i){Gi();const s=t.setupContext=i.length>1?Kw(t):null,r=Lo(t),o=Do(i,t,0,[t.props,s]),l=Lg(o);if(Hi(),r(),(l||t.sp)&&!Hr(t)&&_y(t),l){if(o.then($h,$h),e)return o.then(c=>{Wh(t,c)}).catch(c=>{Al(c,t,0)});t.asyncDep=o}else Wh(t,o)}else zy(t)}function Wh(t,e,n){Se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=oy(e)),zy(t)}function zy(t,e,n){const i=t.type;t.render||(t.render=i.render||wn);{const s=Lo(t);Gi();try{cw(t)}finally{Hi(),s()}}}const Ww={get(t,e){return Ct(t,"get",""),t[e]}};function Kw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ww),slots:t.slots,emit:t.emit,expose:e}}function Rl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(oy(wd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jr)return jr[n](t)},has(e,n){return n in e||n in jr}})):t.proxy}function Qw(t,e=!0){return Se(t)?t.displayName||t.name:t.name||e&&t.__name}function Yw(t){return Se(t)&&"__vccOpts"in t}const ze=(t,e)=>UA(t,e,uo);function Cl(t,e,n){const i=arguments.length;return i===2?Ke(e)&&!ue(e)?ja(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ja(n)&&(n=[n]),fe(t,e,n))}const Xw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gu;const Kh=typeof window<"u"&&window.trustedTypes;if(Kh)try{gu=Kh.createPolicy("vue",{createHTML:t=>t})}catch{}const Gy=gu?t=>gu.createHTML(t):t=>t,Jw="http://www.w3.org/2000/svg",Zw="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Qh=Fn&&Fn.createElement("template"),ev={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Fn.createElementNS(Jw,t):e==="mathml"?Fn.createElementNS(Zw,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Qh.innerHTML=Gy(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const l=Qh.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},oi="transition",Pr="animation",fo=Symbol("_vtc"),Hy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tv=pt({},hy,Hy),nv=t=>(t.displayName="Transition",t.props=tv,t),ho=nv((t,{slots:e})=>Cl(KA,iv(t),e)),ts=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yh=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function iv(t){const e={};for(const w in t)w in Hy||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,R=sv(s),L=R&&R[0],M=R&&R[1],{onBeforeEnter:O,onEnter:C,onEnterCancelled:k,onLeave:V,onLeaveCancelled:z,onBeforeAppear:H=O,onAppear:T=C,onAppearCancelled:y=k}=e,g=(w,A,Ee,Fe)=>{w._enterCancelled=Fe,ns(w,A?f:l),ns(w,A?u:o),Ee&&Ee()},_=(w,A)=>{w._isLeaving=!1,ns(w,p),ns(w,E),ns(w,m),A&&A()},v=w=>(A,Ee)=>{const Fe=w?T:C,Oe=()=>g(A,w,Ee);ts(Fe,[A,Oe]),Xh(()=>{ns(A,w?c:r),xn(A,w?f:l),Yh(Fe)||Jh(A,i,L,Oe)})};return pt(e,{onBeforeEnter(w){ts(O,[w]),xn(w,r),xn(w,o)},onBeforeAppear(w){ts(H,[w]),xn(w,c),xn(w,u)},onEnter:v(!1),onAppear:v(!0),onLeave(w,A){w._isLeaving=!0;const Ee=()=>_(w,A);xn(w,p),w._enterCancelled?(xn(w,m),tp()):(tp(),xn(w,m)),Xh(()=>{w._isLeaving&&(ns(w,p),xn(w,E),Yh(V)||Jh(w,i,M,Ee))}),ts(V,[w,Ee])},onEnterCancelled(w){g(w,!1,void 0,!0),ts(k,[w])},onAppearCancelled(w){g(w,!0,void 0,!0),ts(y,[w])},onLeaveCancelled(w){_(w),ts(z,[w])}})}function sv(t){if(t==null)return null;if(Ke(t))return[Pc(t.enter),Pc(t.leave)];{const e=Pc(t);return[e,e]}}function Pc(t){return sA(t)}function xn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[fo]||(t[fo]=new Set)).add(e)}function ns(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[fo];n&&(n.delete(e),n.size||(t[fo]=void 0))}function Xh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let rv=0;function Jh(t,e,n,i){const s=t._endId=++rv,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:l,propCount:c}=ov(t,e);if(!o)return i();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),r()},m=E=>{E.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,m)}function ov(t,e){const n=window.getComputedStyle(t),i=R=>(n[R]||"").split(", "),s=i(`${oi}Delay`),r=i(`${oi}Duration`),o=Zh(s,r),l=i(`${Pr}Delay`),c=i(`${Pr}Duration`),u=Zh(l,c);let f=null,p=0,m=0;e===oi?o>0&&(f=oi,p=o,m=r.length):e===Pr?u>0&&(f=Pr,p=u,m=c.length):(p=Math.max(o,u),f=p>0?o>u?oi:Pr:null,m=f?f===oi?r.length:c.length:0);const E=f===oi&&/\b(transform|all)(,|$)/.test(i(`${oi}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:E}}function Zh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>ep(n)+ep(t[i])))}function ep(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function tp(){return document.body.offsetHeight}function av(t,e,n){const i=t[fo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wa=Symbol("_vod"),jy=Symbol("_vsh"),ai={beforeMount(t,{value:e},{transition:n}){t[Wa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Nr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Nr(t,!0),i.enter(t)):i.leave(t,()=>{Nr(t,!1)}):Nr(t,e))},beforeUnmount(t,{value:e}){Nr(t,e)}};function Nr(t,e){t.style.display=e?t[Wa]:"none",t[jy]=!e}const lv=Symbol(""),cv=/(^|;)\s*display\s*:/;function uv(t,e,n){const i=t.style,s=rt(n);let r=!1;if(n&&!s){if(e)if(rt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Sa(i,l,"")}else for(const o in e)n[o]==null&&Sa(i,o,"");for(const o in n)o==="display"&&(r=!0),Sa(i,o,n[o])}else if(s){if(e!==n){const o=i[lv];o&&(n+=";"+o),i.cssText=n,r=cv.test(n)}}else e&&t.removeAttribute("style");Wa in t&&(t[Wa]=r?i.display:"",t[jy]&&(i.display="none"))}const np=/\s*!important$/;function Sa(t,e,n){if(ue(n))n.forEach(i=>Sa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=dv(t,e);np.test(n)?t.setProperty(zi(i),n.replace(np,""),"important"):t[i]=n}}const ip=["Webkit","Moz","ms"],Nc={};function dv(t,e){const n=Nc[e];if(n)return n;let i=nn(e);if(i!=="filter"&&i in t)return Nc[e]=i;i=_l(i);for(let s=0;s<ip.length;s++){const r=ip[s]+i;if(r in t)return Nc[e]=r}return e}const sp="http://www.w3.org/1999/xlink";function rp(t,e,n,i,s,r=uA(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sp,e.slice(6,e.length)):t.setAttributeNS(sp,e,n):n==null||r&&!Vg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":On(n)?String(n):n)}function op(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Gy(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Vg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function gi(t,e,n,i){t.addEventListener(e,n,i)}function fv(t,e,n,i){t.removeEventListener(e,n,i)}const ap=Symbol("_vei");function hv(t,e,n,i,s=null){const r=t[ap]||(t[ap]={}),o=r[e];if(i&&o)o.value=i;else{const[l,c]=pv(e);if(i){const u=r[e]=yv(i,s);gi(t,l,u,c)}else o&&(fv(t,l,o,c),r[e]=void 0)}}const lp=/(?:Once|Passive|Capture)$/;function pv(t){let e;if(lp.test(t)){e={};let i;for(;i=t.match(lp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zi(t.slice(2)),e]}let Dc=0;const mv=Promise.resolve(),gv=()=>Dc||(mv.then(()=>Dc=0),Dc=Date.now());function yv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;cn(_v(i,n.value),e,5,[i])};return n.value=t,n.attached=gv(),n}function _v(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const cp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Iv=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?av(t,i,o):e==="style"?uv(t,n,i):gl(e)?dd(e)||hv(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ev(t,e,i,o))?(op(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rp(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(i))?op(t,nn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),rp(t,e,i,o))};function Ev(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&cp(e)&&Se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cp(e)&&rt(n)?!1:e in t}const Qs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>va(e,n):e};function Av(t){t.target.composing=!0}function up(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $n=Symbol("_assign"),on={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[$n]=Qs(s);const r=i||s.props&&s.props.type==="number";gi(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Fa(l)),t[$n](l)}),n&&gi(t,"change",()=>{t.value=t.value.trim()}),e||(gi(t,"compositionstart",Av),gi(t,"compositionend",up),gi(t,"change",up))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[$n]=Qs(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Fa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Lc={deep:!0,created(t,e,n){t[$n]=Qs(n),gi(t,"change",()=>{const i=t._modelValue,s=po(t),r=t.checked,o=t[$n];if(ue(i)){const l=pd(i,s),c=l!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const u=[...i];u.splice(l,1),o(u)}}else if(ar(i)){const l=new Set(i);r?l.add(s):l.delete(s),o(l)}else o($y(t,r))})},mounted:dp,beforeUpdate(t,e,n){t[$n]=Qs(n),dp(t,e,n)}};function dp(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(ue(e))s=pd(e,i.props.value)>-1;else if(ar(e))s=e.has(i.props.value);else{if(e===n)return;s=No(e,$y(t,!0))}t.checked!==s&&(t.checked=s)}const Ys={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=ar(e);gi(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Fa(po(o)):po(o));t[$n](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,wl(()=>{t._assigning=!1})}),t[$n]=Qs(i)},mounted(t,{value:e}){fp(t,e)},beforeUpdate(t,e,n){t[$n]=Qs(n)},updated(t,{value:e}){t._assigning||fp(t,e)}};function fp(t,e){const n=t.multiple,i=ue(e);if(!(n&&!i&&!ar(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],l=po(o);if(n)if(i){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=pd(e,l)>-1}else o.selected=e.has(l);else if(No(po(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function po(t){return"_value"in t?t._value:t.value}function $y(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const wv=["ctrl","shift","alt","meta"],vv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>wv.some(n=>t[`${n}Key`]&&!e.includes(n))},Un=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const l=vv[e[o]];if(l&&l(s,e))return}return t(s,...r)})},Tv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=zi(s.key);if(e.some(o=>o===r||Tv[o]===r))return t(s)})},Sv=pt({patchProp:Iv},ev);let hp;function Rv(){return hp||(hp=vw(Sv))}const Cv=(...t)=>{const e=Rv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Pv(i);if(!s)return;const r=e._component;!Se(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ov(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ov(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pv(t){return rt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Wy;const Ol=t=>Wy=t,Ky=Symbol();function yu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Wr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Wr||(Wr={}));function Nv(){const t=Bg(!0),e=t.run(()=>re({}));let n=[],i=[];const s=wd({install(r){Ol(s),s._a=r,r.provide(Ky,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Qy=()=>{};function pp(t,e,n,i=Qy){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&zg()&&fA(s),s}function Ns(t,...e){t.slice().forEach(n=>{n(...e)})}const Dv=t=>t(),mp=Symbol(),Mc=Symbol();function _u(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];yu(s)&&yu(i)&&t.hasOwnProperty(n)&&!st(i)&&!Ti(i)?t[n]=_u(s,i):t[n]=i}return t}const Lv=Symbol();function Mv(t){return!yu(t)||!t.hasOwnProperty(Lv)}const{assign:di}=Object;function kv(t){return!!(st(t)&&t.effect)}function xv(t,e,n,i){const{state:s,actions:r,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=kA(n.state.value[t]);return di(f,r,Object.keys(o||{}).reduce((p,m)=>(p[m]=wd(ze(()=>{Ol(n);const E=n._s.get(t);return o[m].call(E,E)})),p),{}))}return c=Yy(t,u,e,n,i,!0),c}function Yy(t,e,n={},i,s,r){let o;const l=di({actions:{}},n),c={deep:!0};let u,f,p=[],m=[],E;const R=i.state.value[t];!r&&!R&&(i.state.value[t]={}),re({});let L;function M(y){let g;u=f=!1,typeof y=="function"?(y(i.state.value[t]),g={type:Wr.patchFunction,storeId:t,events:E}):(_u(i.state.value[t],y),g={type:Wr.patchObject,payload:y,storeId:t,events:E});const _=L=Symbol();wl().then(()=>{L===_&&(u=!0)}),f=!0,Ns(p,g,i.state.value[t])}const O=r?function(){const{state:g}=n,_=g?g():{};this.$patch(v=>{di(v,_)})}:Qy;function C(){o.stop(),p=[],m=[],i._s.delete(t)}const k=(y,g="")=>{if(mp in y)return y[Mc]=g,y;const _=function(){Ol(i);const v=Array.from(arguments),w=[],A=[];function Ee(ne){w.push(ne)}function Fe(ne){A.push(ne)}Ns(m,{args:v,name:_[Mc],store:z,after:Ee,onError:Fe});let Oe;try{Oe=y.apply(this&&this.$id===t?this:z,v)}catch(ne){throw Ns(A,ne),ne}return Oe instanceof Promise?Oe.then(ne=>(Ns(w,ne),ne)).catch(ne=>(Ns(A,ne),Promise.reject(ne))):(Ns(w,Oe),Oe)};return _[mp]=!0,_[Mc]=g,_},V={_p:i,$id:t,$onAction:pp.bind(null,m),$patch:M,$reset:O,$subscribe(y,g={}){const _=pp(p,y,g.detached,()=>v()),v=o.run(()=>Si(()=>i.state.value[t],w=>{(g.flush==="sync"?f:u)&&y({storeId:t,type:Wr.direct,events:E},w)},di({},c,g)));return _},$dispose:C},z=Di(V);i._s.set(t,z);const T=(i._a&&i._a.runWithContext||Dv)(()=>i._e.run(()=>(o=Bg()).run(()=>e({action:k}))));for(const y in T){const g=T[y];if(st(g)&&!kv(g)||Ti(g))r||(R&&Mv(g)&&(st(g)?g.value=R[y]:_u(g,R[y])),i.state.value[t][y]=g);else if(typeof g=="function"){const _=k(g,y);T[y]=_,l.actions[y]=g}}return di(z,T),di(ke(z),T),Object.defineProperty(z,"$state",{get:()=>i.state.value[t],set:y=>{M(g=>{di(g,y)})}}),i._p.forEach(y=>{di(z,o.run(()=>y({store:z,app:i._a,pinia:i,options:l})))}),R&&r&&n.hydrate&&n.hydrate(z.$state,R),u=!0,f=!0,z}/*! #__NO_SIDE_EFFECTS__ */function Mo(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(l,c){const u=gw();return l=l||(u?vn(Ky,null):null),l&&Ol(l),l=Wy,l._s.has(i)||(r?Yy(i,e,s,l):xv(i,s,l)),l._s.get(i)}return o.$id=i,o}var gp={};/**
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
 */const Xy=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Vv=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Jy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|u>>6,E=u&63;c||(E=64,o||(m=64)),i.push(n[f],n[p],n[m],n[E])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||u==null||p==null)throw new Fv;const m=r<<2|l>>4;if(i.push(m),u!==64){const E=l<<4&240|u>>2;if(i.push(E),p!==64){const R=u<<6&192|p;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uv=function(t){const e=Xy(t);return Jy.encodeByteArray(e,!0)},Ka=function(t){return Uv(t).replace(/\./g,"")},Zy=function(t){try{return Jy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bv=()=>qv().__FIREBASE_DEFAULTS__,zv=()=>{if(typeof process>"u"||typeof gp>"u")return;const t=gp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zy(t[1]);return e&&JSON.parse(e)},Pl=()=>{try{return Bv()||zv()||Gv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},e1=t=>{var e,n;return(n=(e=Pl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hv=t=>{const e=e1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},t1=()=>{var t;return(t=Pl())===null||t===void 0?void 0:t.config},n1=t=>{var e;return(e=Pl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function $v(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ka(JSON.stringify(n)),Ka(JSON.stringify(o)),""].join(".")}/**
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
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function Kv(){var t;const e=(t=Pl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Od(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xv(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jv(){return!Kv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pd(){try{return typeof indexedDB=="object"}catch{return!1}}function Nd(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function i1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Zv="FirebaseError";class hn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Zv,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?eT(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new hn(s,l,i)}}function eT(t,e){return t.replace(tT,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const tT=/\{\$([^}]+)}/g;function nT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(yp(r)&&yp(o)){if(!mo(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function yp(t){return t!==null&&typeof t=="object"}/**
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
 */function ko(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function kr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function xr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iT(t,e){const n=new sT(t,e);return n.subscribe.bind(n)}class sT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");rT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=kc),s.error===void 0&&(s.error=kc),s.complete===void 0&&(s.complete=kc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}/**
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
 */const oT=1e3,aT=2,lT=4*60*60*1e3,cT=.5;function _p(t,e=oT,n=aT){const i=e*Math.pow(n,t),s=Math.round(cT*i*(Math.random()-.5)*2);return Math.min(lT,i+s)}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ss="[DEFAULT]";/**
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
 */class uT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new jv;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fT(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:dT(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dT(t){return t===ss?void 0:t}function fT(t){return t.instantiationMode==="EAGER"}/**
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
 */class hT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const pT={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},mT=Pe.INFO,gT={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},yT=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=gT[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=mT,this._logHandler=yT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const _T=(t,e)=>e.some(n=>t instanceof n);let Ip,Ep;function IT(){return Ip||(Ip=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ET(){return Ep||(Ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const s1=new WeakMap,Iu=new WeakMap,r1=new WeakMap,xc=new WeakMap,Dd=new WeakMap;function AT(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ri(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&s1.set(n,t)}).catch(()=>{}),Dd.set(e,t),e}function wT(t){if(Iu.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Iu.set(t,e)}let Eu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ri(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vT(t){Eu=t(Eu)}function TT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Vc(this),e,...n);return r1.set(i,e.sort?e.sort():[e]),Ri(i)}:ET().includes(t)?function(...e){return t.apply(Vc(this),e),Ri(s1.get(this))}:function(...e){return Ri(t.apply(Vc(this),e))}}function bT(t){return typeof t=="function"?TT(t):(t instanceof IDBTransaction&&wT(t),_T(t,IT())?new Proxy(t,Eu):t)}function Ri(t){if(t instanceof IDBRequest)return AT(t);if(xc.has(t))return xc.get(t);const e=bT(t);return e!==t&&(xc.set(t,e),Dd.set(e,t)),e}const Vc=t=>Dd.get(t);function o1(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=Ri(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ri(o.result),c.oldVersion,c.newVersion,Ri(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const ST=["get","getKey","getAll","getAllKeys","count"],RT=["put","add","delete","clear"],Fc=new Map;function Ap(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=RT.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ST.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Fc.set(e,r),r}vT(t=>({...t,get:(e,n,i)=>Ap(e,n)||t.get(e,n,i),has:(e,n)=>!!Ap(e,n)||t.has(e,n)}));/**
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
 */class CT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OT(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function OT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Au="@firebase/app",wp="0.10.18";/**
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
 */const Kn=new Nl("@firebase/app"),PT="@firebase/app-compat",NT="@firebase/analytics-compat",DT="@firebase/analytics",LT="@firebase/app-check-compat",MT="@firebase/app-check",kT="@firebase/auth",xT="@firebase/auth-compat",VT="@firebase/database",FT="@firebase/data-connect",UT="@firebase/database-compat",qT="@firebase/functions",BT="@firebase/functions-compat",zT="@firebase/installations",GT="@firebase/installations-compat",HT="@firebase/messaging",jT="@firebase/messaging-compat",$T="@firebase/performance",WT="@firebase/performance-compat",KT="@firebase/remote-config",QT="@firebase/remote-config-compat",YT="@firebase/storage",XT="@firebase/storage-compat",JT="@firebase/firestore",ZT="@firebase/vertexai",e2="@firebase/firestore-compat",t2="firebase",n2="11.2.0";/**
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
 */const wu="[DEFAULT]",i2={[Au]:"fire-core",[PT]:"fire-core-compat",[DT]:"fire-analytics",[NT]:"fire-analytics-compat",[MT]:"fire-app-check",[LT]:"fire-app-check-compat",[kT]:"fire-auth",[xT]:"fire-auth-compat",[VT]:"fire-rtdb",[FT]:"fire-data-connect",[UT]:"fire-rtdb-compat",[qT]:"fire-fn",[BT]:"fire-fn-compat",[zT]:"fire-iid",[GT]:"fire-iid-compat",[HT]:"fire-fcm",[jT]:"fire-fcm-compat",[$T]:"fire-perf",[WT]:"fire-perf-compat",[KT]:"fire-rc",[QT]:"fire-rc-compat",[YT]:"fire-gcs",[XT]:"fire-gcs-compat",[JT]:"fire-fst",[e2]:"fire-fst-compat",[ZT]:"fire-vertex","fire-js":"fire-js",[t2]:"fire-js-all"};/**
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
 */const Qa=new Map,s2=new Map,vu=new Map;function vp(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pn(t){const e=t.name;if(vu.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;vu.set(e,t);for(const n of Qa.values())vp(n,t);for(const n of s2.values())vp(n,t);return!0}function ws(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function In(t){return t.settings!==void 0}/**
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
 */const r2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ci=new As("app","Firebase",r2);/**
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
 */class o2{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
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
 */const cr=n2;function a1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:wu,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ci.create("bad-app-name",{appName:String(s)});if(n||(n=t1()),!n)throw Ci.create("no-options");const r=Qa.get(s);if(r){if(mo(n,r.options)&&mo(i,r.config))return r;throw Ci.create("duplicate-app",{appName:s})}const o=new hT(s);for(const c of vu.values())o.addComponent(c);const l=new o2(n,i,o);return Qa.set(s,l),l}function Ld(t=wu){const e=Qa.get(t);if(!e&&t===wu&&t1())return a1();if(!e)throw Ci.create("no-app",{appName:t});return e}function tn(t,e,n){var i;let s=(i=i2[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(l.join(" "));return}Pn(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const a2="firebase-heartbeat-database",l2=1,go="firebase-heartbeat-store";let Uc=null;function l1(){return Uc||(Uc=o1(a2,l2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ci.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function c2(t){try{const n=(await l1()).transaction(go),i=await n.objectStore(go).get(c1(t));return await n.done,i}catch(e){if(e instanceof hn)Kn.warn(e.message);else{const n=Ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Tp(t,e){try{const i=(await l1()).transaction(go,"readwrite");await i.objectStore(go).put(e,c1(t)),await i.done}catch(n){if(n instanceof hn)Kn.warn(n.message);else{const i=Ci.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(i.message)}}}function c1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const u2=1024,d2=30*24*60*60*1e3;class f2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p2(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=d2}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Kn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bp(),{heartbeatsToSend:i,unsentEntries:s}=h2(this._heartbeatsCache.heartbeats),r=Ka(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Kn.warn(n),""}}}function bp(){return new Date().toISOString().substring(0,10)}function h2(t,e=u2){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Sp(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class p2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pd()?Nd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await c2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sp(t){return Ka(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function m2(t){Pn(new un("platform-logger",e=>new CT(e),"PRIVATE")),Pn(new un("heartbeat",e=>new f2(e),"PRIVATE")),tn(Au,wp,t),tn(Au,wp,"esm2017"),tn("fire-js","")}m2("");var g2="firebase",y2="11.2.0";/**
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
 */tn(g2,y2,"app");function Md(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function u1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _2=u1,d1=new As("auth","Firebase",u1());/**
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
 */const Ya=new Nl("@firebase/auth");function I2(t,...e){Ya.logLevel<=Pe.WARN&&Ya.warn(`Auth (${cr}): ${t}`,...e)}function Ra(t,...e){Ya.logLevel<=Pe.ERROR&&Ya.error(`Auth (${cr}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw kd(t,...e)}function Tn(t,...e){return kd(t,...e)}function f1(t,e,n){const i=Object.assign(Object.assign({},_2()),{[e]:n});return new As("auth","Firebase",i).create(e,{appName:t.name})}function Wn(t){return f1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return d1.create(t,...e)}function Ie(t,e,...n){if(!t)throw kd(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ra(e),new Error(e)}function Qn(t,e){t||Gn(e)}/**
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
 */function Tu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function E2(){return Rp()==="http:"||Rp()==="https:"}function Rp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function A2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E2()||Od()||"connection"in navigator)?navigator.onLine:!0}function w2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=Wv()||Yv()}get(){return A2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xd(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class h1{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const v2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const T2=new xo(3e4,6e4);function ji(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $i(t,e,n,i,s={}){return p1(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=ko(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},r);return Qv()||(u.referrerPolicy="no-referrer"),h1.fetch()(m1(t,t.config.apiHost,n,l),u)})}async function p1(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},v2),e);try{const s=new S2(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ma(t,"user-disabled",o);const f=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw f1(t,f,u);dn(t,f)}}catch(s){if(s instanceof hn)throw s;dn(t,"network-request-failed",{message:String(s)})}}async function Vo(t,e,n,i,s={}){const r=await $i(t,e,n,i,s);return"mfaPendingCredential"in r&&dn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function m1(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?xd(t.config,s):`${t.config.apiScheme}://${s}`}function b2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class S2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Tn(this.auth,"network-request-failed")),T2.get())})}}function ma(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Tn(t,e,i);return s.customData._tokenResponse=n,s}function Cp(t){return t!==void 0&&t.enterprise!==void 0}class R2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return b2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function C2(t,e){return $i(t,"GET","/v2/recaptchaConfig",ji(t,e))}/**
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
 */async function O2(t,e){return $i(t,"POST","/v1/accounts:delete",e)}async function g1(t,e){return $i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Kr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P2(t,e=!1){const n=dt(t),i=await n.getIdToken(e),s=Vd(i);Ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Kr(qc(s.auth_time)),issuedAtTime:Kr(qc(s.iat)),expirationTime:Kr(qc(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function qc(t){return Number(t)*1e3}function Vd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ra("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zy(n);return s?JSON.parse(s):(Ra("Failed to decode base64 JWT payload"),null)}catch(s){return Ra("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Op(t){const e=Vd(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yo(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof hn&&N2(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function N2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class D2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kr(this.lastLoginAt),this.creationTime=Kr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xa(t){var e;const n=t.auth,i=await t.getIdToken(),s=await yo(t,g1(n,{idToken:i}));Ie(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?y1(r.providerUserInfo):[],l=M2(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new bu(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function L2(t){const e=dt(t);await Xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M2(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function y1(t){return t.map(e=>{var{providerId:n}=e,i=Md(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function k2(t,e){const n=await p1(t,{},async()=>{const i=ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=m1(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",h1.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function x2(t,e){return $i(t,"POST","/v2/accounts:revokeToken",ji(t,e))}/**
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
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Op(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const n=Op(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await k2(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Hs;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(Ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(Ie(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
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
 */function li(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Md(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new bu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await yo(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return P2(this,e)}reload(){return L2(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Xa(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await yo(this,O2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,c,u,f;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,E=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:V,isAnonymous:z,providerData:H,stsTokenManager:T}=n;Ie(k&&T,e,"internal-error");const y=Hs.fromJSON(this.name,T);Ie(typeof k=="string",e,"internal-error"),li(p,e.name),li(m,e.name),Ie(typeof V=="boolean",e,"internal-error"),Ie(typeof z=="boolean",e,"internal-error"),li(E,e.name),li(R,e.name),li(L,e.name),li(M,e.name),li(O,e.name),li(C,e.name);const g=new Hn({uid:k,auth:e,email:m,emailVerified:V,displayName:p,isAnonymous:z,photoURL:R,phoneNumber:E,tenantId:L,stsTokenManager:y,createdAt:O,lastLoginAt:C});return H&&Array.isArray(H)&&(g.providerData=H.map(_=>Object.assign({},_))),M&&(g._redirectEventId=M),g}static async _fromIdTokenResponse(e,n,i=!1){const s=new Hs;s.updateFromServerResponse(n);const r=new Hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Xa(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];Ie(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?y1(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new Hs;l.updateFromIdToken(i);const c=new Hn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new bu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
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
 */const Pp=new Map;function jn(t){Qn(t instanceof Function,"Expected a class definition");let e=Pp.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pp.set(t,e),e)}/**
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
 */class _1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_1.type="NONE";const Np=_1;/**
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
 */function Ca(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ca(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ca("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new js(jn(Np),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||jn(Np);const o=Ca(i,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const p=Hn._fromJSON(e,f);u!==r&&(l=p),r=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new js(r,e,i):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new js(r,e,i))}}/**
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
 */function Dp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(I1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T1(e))return"Blackberry";if(b1(e))return"Webos";if(E1(e))return"Safari";if((e.includes("chrome/")||A1(e))&&!e.includes("edge/"))return"Chrome";if(v1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function I1(t=Nt()){return/firefox\//i.test(t)}function E1(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A1(t=Nt()){return/crios\//i.test(t)}function w1(t=Nt()){return/iemobile/i.test(t)}function v1(t=Nt()){return/android/i.test(t)}function T1(t=Nt()){return/blackberry/i.test(t)}function b1(t=Nt()){return/webos/i.test(t)}function Fd(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function V2(t=Nt()){var e;return Fd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function F2(){return Xv()&&document.documentMode===10}function S1(t=Nt()){return Fd(t)||v1(t)||b1(t)||T1(t)||/windows phone/i.test(t)||w1(t)}/**
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
 */function R1(t,e=[]){let n;switch(t){case"Browser":n=Dp(Nt());break;case"Worker":n=`${Dp(Nt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cr}/${i}`}/**
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
 */class U2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function q2(t,e={}){return $i(t,"GET","/v2/passwordPolicy",ji(t,e))}/**
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
 */const B2=6;class z2{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:B2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class G2{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lp(this),this.idTokenSubscription=new Lp(this),this.beforeStateQueue=new U2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await g1(this,{idToken:e}),i=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(In(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=w2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(Wn(this));const n=e?dt(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await q2(this),n=new z2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await x2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&I2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vs(t){return dt(t)}class Lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=iT(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function H2(t){Dl=t}function C1(t){return Dl.loadJS(t)}function j2(){return Dl.recaptchaEnterpriseScript}function $2(){return Dl.gapiScript}function W2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class K2{constructor(){this.enterprise=new Q2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Q2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Y2="recaptcha-enterprise",O1="NO_RECAPTCHA";class X2{constructor(e){this.type=Y2,this.auth=vs(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{C2(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new R2(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(r,o,l){const c=window.grecaptcha;Cp(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(O1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new K2().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(l=>{if(!n&&Cp(window.grecaptcha))s(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=j2();c.length!==0&&(c+=l),C1(c).then(()=>{s(l,r,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Mp(t,e,n,i=!1,s=!1){const r=new X2(t);let o;if(s)o=O1;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Su(t,e,n,i,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Mp(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Mp(t,e,n,n==="getOobCode");return i(t,l)}else return Promise.reject(o)})}/**
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
 */function J2(t,e){const n=ws(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(mo(r,e??{}))return s;dn(s,"already-initialized")}return n.initialize({options:e})}function Z2(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function e0(t,e,n){const i=vs(t);Ie(i._canInitEmulator,i,"emulator-config-failed"),Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=P1(e),{host:o,port:l}=t0(e),c=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),n0()}function P1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function t0(t){const e=P1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:kp(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:kp(o)}}}function kp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function n0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ud{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function i0(t,e){return $i(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function s0(t,e){return Vo(t,"POST","/v1/accounts:signInWithPassword",ji(t,e))}/**
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
 */async function r0(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",ji(t,e))}async function o0(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",ji(t,e))}/**
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
 */class _o extends Ud{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _o(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new _o(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Su(e,n,"signInWithPassword",s0);case"emailLink":return r0(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Su(e,i,"signUpPassword",i0);case"emailLink":return o0(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $s(t,e){return Vo(t,"POST","/v1/accounts:signInWithIdp",ji(t,e))}/**
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
 */const a0="http://localhost";class hs extends Ud{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Md(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new hs(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,$s(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:a0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ko(n)}return e}}/**
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
 */function l0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function c0(t){const e=kr(xr(t)).link,n=e?kr(xr(e)).deep_link_id:null,i=kr(xr(t)).deep_link_id;return(i?kr(xr(i)).link:null)||i||n||e||t}class qd{constructor(e){var n,i,s,r,o,l;const c=kr(xr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(i=c.oobCode)!==null&&i!==void 0?i:null,p=l0((s=c.mode)!==null&&s!==void 0?s:null);Ie(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=c0(e);try{return new qd(n)}catch{return null}}}/**
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
 */class ur{constructor(){this.providerId=ur.PROVIDER_ID}static credential(e,n){return _o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=qd.parseLink(n);return Ie(i,"argument-error"),_o._fromEmailAndCode(e,i.code,i.tenantId)}}ur.PROVIDER_ID="password";ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class N1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fo extends N1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yi extends Fo{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
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
 */class _i extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return _i.credential(n,i)}catch{return null}}}_i.GOOGLE_SIGN_IN_METHOD="google.com";_i.PROVIDER_ID="google.com";/**
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
 */class Ii extends Fo{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.GITHUB_SIGN_IN_METHOD="github.com";Ii.PROVIDER_ID="github.com";/**
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
 */class Ei extends Fo{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ei.credential(n,i)}catch{return null}}}Ei.TWITTER_SIGN_IN_METHOD="twitter.com";Ei.PROVIDER_ID="twitter.com";/**
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
 */async function u0(t,e){return Vo(t,"POST","/v1/accounts:signUp",ji(t,e))}/**
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
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Hn._fromIdTokenResponse(e,i,s),o=xp(i);return new ps({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=xp(i);return new ps({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function xp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ja extends hn{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ja.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Ja(e,n,i,s)}}function D1(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ja._fromErrorAndOperation(t,r,e,i):r})}async function d0(t,e,n=!1){const i=await yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ps._forOperation(t,"link",i)}/**
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
 */async function f0(t,e,n=!1){const{auth:i}=t;if(In(i.app))return Promise.reject(Wn(i));const s="reauthenticate";try{const r=await yo(t,D1(i,s,e,t),n);Ie(r.idToken,i,"internal-error");const o=Vd(r.idToken);Ie(o,i,"internal-error");const{sub:l}=o;return Ie(t.uid===l,i,"user-mismatch"),ps._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&dn(i,"user-mismatch"),r}}/**
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
 */async function L1(t,e,n=!1){if(In(t.app))return Promise.reject(Wn(t));const i="signIn",s=await D1(t,i,e),r=await ps._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function h0(t,e){return L1(vs(t),e)}/**
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
 */async function M1(t){const e=vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function p0(t,e,n){if(In(t.app))return Promise.reject(Wn(t));const i=vs(t),o=await Su(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",u0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&M1(t),c}),l=await ps._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(l.user),l}function m0(t,e,n){return In(t.app)?Promise.reject(Wn(t)):h0(dt(t),ur.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&M1(t),i})}/**
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
 */function g0(t,e){return dt(t).setPersistence(e)}function y0(t,e,n,i){return dt(t).onIdTokenChanged(e,n,i)}function _0(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function I0(t,e,n,i){return dt(t).onAuthStateChanged(e,n,i)}function E0(t){return dt(t).signOut()}const Za="__sak";/**
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
 */class k1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Za,"1"),this.storage.removeItem(Za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const A0=1e3,w0=10;class x1 extends k1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);F2()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,w0):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},A0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x1.type="LOCAL";const V1=x1;/**
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
 */class F1 extends k1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}F1.type="SESSION";const U1=F1;/**
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
 */function v0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ll{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Ll(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,r)),c=await v0(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ll.receivers=[];/**
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
 */function Bd(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class T0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=Bd("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(m.data.response);break;default:clearTimeout(f),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bn(){return window}function b0(t){bn().location.href=t}/**
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
 */function q1(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function S0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function C0(){return q1()?self:null}/**
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
 */const B1="firebaseLocalStorageDb",O0=1,el="firebaseLocalStorage",z1="fbase_key";class Uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ml(t,e){return t.transaction([el],e?"readwrite":"readonly").objectStore(el)}function P0(){const t=indexedDB.deleteDatabase(B1);return new Uo(t).toPromise()}function Ru(){const t=indexedDB.open(B1,O0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(el,{keyPath:z1})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(el)?e(i):(i.close(),await P0(),e(await Ru()))})})}async function Vp(t,e,n){const i=Ml(t,!0).put({[z1]:e,value:n});return new Uo(i).toPromise()}async function N0(t,e){const n=Ml(t,!1).get(e),i=await new Uo(n).toPromise();return i===void 0?null:i.value}function Fp(t,e){const n=Ml(t,!0).delete(e);return new Uo(n).toPromise()}const D0=800,L0=3;class G1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ru(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>L0)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return q1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ll._getInstance(C0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await S0(),!this.activeServiceWorker)return;this.sender=new T0(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ru();return await Vp(e,Za,"1"),await Fp(e,Za),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>N0(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ml(s,!1).getAll();return new Uo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}G1.type="LOCAL";const M0=G1;new xo(3e4,6e4);/**
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
 */function k0(t,e){return e?jn(e):(Ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zd extends Ud{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function x0(t){return L1(t.auth,new zd(t),t.bypassAuthState)}function V0(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),f0(n,new zd(t),t.bypassAuthState)}async function F0(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),d0(n,new zd(t),t.bypassAuthState)}/**
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
 */class H1{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x0;case"linkViaPopup":case"linkViaRedirect":return F0;case"reauthViaPopup":case"reauthViaRedirect":return V0;default:dn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const U0=new xo(2e3,1e4);class Us extends H1{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U0.get())};e()}}Us.currentPopupAction=null;/**
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
 */const q0="pendingRedirect",Oa=new Map;class B0 extends H1{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const i=await z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z0(t,e){const n=j0(e),i=H0(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function G0(t,e){Oa.set(t._key(),e)}function H0(t){return jn(t._redirectPersistence)}function j0(t){return Ca(q0,t.config.apiKey,t.name)}async function $0(t,e,n=!1){if(In(t.app))return Promise.reject(Wn(t));const i=vs(t),s=k0(i,e),o=await new B0(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const W0=10*60*1e3;class K0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Q0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!j1(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Up(e))}saveEventToCache(e){this.cachedEventUids.add(Up(e)),this.lastProcessedEventTime=Date.now()}}function Up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function j1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Q0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j1(t);default:return!1}}/**
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
 */async function Y0(t,e={}){return $i(t,"GET","/v1/projects",e)}/**
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
 */const X0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,J0=/^https?/;async function Z0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Y0(t);for(const n of e)try{if(eb(n))return}catch{}dn(t,"unauthorized-domain")}function eb(t){const e=Tu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!J0.test(n))return!1;if(X0.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const tb=new xo(3e4,6e4);function qp(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nb(t){return new Promise((e,n)=>{var i,s,r;function o(){qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qp(),n(Tn(t,"network-request-failed"))},timeout:tb.get()})}if(!((s=(i=bn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=bn().gapi)===null||r===void 0)&&r.load)o();else{const l=W2("iframefcb");return bn()[l]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},C1(`${$2()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Pa=null,e})}let Pa=null;function ib(t){return Pa=Pa||nb(t),Pa}/**
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
 */const sb=new xo(5e3,15e3),rb="__/auth/iframe",ob="emulator/auth/iframe",ab={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cb(t){const e=t.config;Ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xd(e,ob):`https://${t.config.authDomain}/${rb}`,i={apiKey:e.apiKey,appName:t.name,v:cr},s=lb.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ko(i).slice(1)}`}async function ub(t){const e=await ib(t),n=bn().gapi;return Ie(n,t,"internal-error"),e.open({where:document.body,url:cb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ab,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),l=bn().setTimeout(()=>{r(o)},sb.get());function c(){bn().clearTimeout(l),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const db={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fb=500,hb=600,pb="_blank",mb="http://localhost";class Bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gb(t,e,n,i=fb,s=hb){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},db),{width:i.toString(),height:s.toString(),top:r,left:o}),u=Nt().toLowerCase();n&&(l=A1(u)?pb:n),I1(u)&&(e=e||mb,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[E,R])=>`${m}${E}=${R},`,"");if(V2(u)&&l!=="_self")return yb(e||"",l),new Bp(null);const p=window.open(e||"",l,f);Ie(p,t,"popup-blocked");try{p.focus()}catch{}return new Bp(p)}function yb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const _b="__/auth/handler",Ib="emulator/auth/handler",Eb=encodeURIComponent("fac");async function zp(t,e,n,i,s,r){Ie(t.config.authDomain,t,"auth-domain-config-required"),Ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:cr,eventId:s};if(e instanceof N1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Fo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${Eb}=${encodeURIComponent(c)}`:"";return`${Ab(t)}?${ko(l).slice(1)}${u}`}function Ab({config:t}){return t.emulator?xd(t,Ib):`https://${t.authDomain}/${_b}`}/**
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
 */const Bc="webStorageSupport";class wb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=U1,this._completeRedirectFn=$0,this._overrideRedirectResult=G0}async _openPopup(e,n,i,s){var r;Qn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await zp(e,n,i,Tu(),s);return gb(e,o,Bd())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await zp(e,n,i,Tu(),s);return b0(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Qn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await ub(e),i=new K0(e);return n.register("authEvent",s=>(Ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bc,{type:Bc},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Bc];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Z0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return S1()||E1()||Fd()}}const vb=wb;var Gp="@firebase/auth",Hp="1.8.2";/**
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
 */class Tb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sb(t){Pn(new un("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;Ie(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R1(t)},u=new G2(i,s,r,c);return Z2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Pn(new un("auth-internal",e=>{const n=vs(e.getProvider("auth").getImmediate());return(i=>new Tb(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Gp,Hp,bb(t)),tn(Gp,Hp,"esm2017")}/**
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
 */const Rb=5*60,Cb=n1("authIdTokenMaxAge")||Rb;let jp=null;const Ob=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Cb)return;const s=n==null?void 0:n.token;jp!==s&&(jp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pb(t=Ld()){const e=ws(t,"auth");if(e.isInitialized())return e.getImmediate();const n=J2(t,{popupRedirectResolver:vb,persistence:[M0,V1,U1]}),i=n1("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Ob(r.toString());_0(n,o,()=>o(n.currentUser)),y0(n,l=>o(l))}}const s=e1("auth");return s&&e0(n,`http://${s}`),n}function Nb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}H2({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Tn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Nb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sb("Browser");var $p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oi,$1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function g(){}g.prototype=y.prototype,T.D=y.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(_,v,w){for(var A=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)A[Ee-2]=arguments[Ee];return y.prototype[v].apply(_,A)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,g){g||(g=0);var _=Array(16);if(typeof y=="string")for(var v=0;16>v;++v)_[v]=y.charCodeAt(g++)|y.charCodeAt(g++)<<8|y.charCodeAt(g++)<<16|y.charCodeAt(g++)<<24;else for(v=0;16>v;++v)_[v]=y[g++]|y[g++]<<8|y[g++]<<16|y[g++]<<24;y=T.g[0],g=T.g[1],v=T.g[2];var w=T.g[3],A=y+(w^g&(v^w))+_[0]+3614090360&4294967295;y=g+(A<<7&4294967295|A>>>25),A=w+(v^y&(g^v))+_[1]+3905402710&4294967295,w=y+(A<<12&4294967295|A>>>20),A=v+(g^w&(y^g))+_[2]+606105819&4294967295,v=w+(A<<17&4294967295|A>>>15),A=g+(y^v&(w^y))+_[3]+3250441966&4294967295,g=v+(A<<22&4294967295|A>>>10),A=y+(w^g&(v^w))+_[4]+4118548399&4294967295,y=g+(A<<7&4294967295|A>>>25),A=w+(v^y&(g^v))+_[5]+1200080426&4294967295,w=y+(A<<12&4294967295|A>>>20),A=v+(g^w&(y^g))+_[6]+2821735955&4294967295,v=w+(A<<17&4294967295|A>>>15),A=g+(y^v&(w^y))+_[7]+4249261313&4294967295,g=v+(A<<22&4294967295|A>>>10),A=y+(w^g&(v^w))+_[8]+1770035416&4294967295,y=g+(A<<7&4294967295|A>>>25),A=w+(v^y&(g^v))+_[9]+2336552879&4294967295,w=y+(A<<12&4294967295|A>>>20),A=v+(g^w&(y^g))+_[10]+4294925233&4294967295,v=w+(A<<17&4294967295|A>>>15),A=g+(y^v&(w^y))+_[11]+2304563134&4294967295,g=v+(A<<22&4294967295|A>>>10),A=y+(w^g&(v^w))+_[12]+1804603682&4294967295,y=g+(A<<7&4294967295|A>>>25),A=w+(v^y&(g^v))+_[13]+4254626195&4294967295,w=y+(A<<12&4294967295|A>>>20),A=v+(g^w&(y^g))+_[14]+2792965006&4294967295,v=w+(A<<17&4294967295|A>>>15),A=g+(y^v&(w^y))+_[15]+1236535329&4294967295,g=v+(A<<22&4294967295|A>>>10),A=y+(v^w&(g^v))+_[1]+4129170786&4294967295,y=g+(A<<5&4294967295|A>>>27),A=w+(g^v&(y^g))+_[6]+3225465664&4294967295,w=y+(A<<9&4294967295|A>>>23),A=v+(y^g&(w^y))+_[11]+643717713&4294967295,v=w+(A<<14&4294967295|A>>>18),A=g+(w^y&(v^w))+_[0]+3921069994&4294967295,g=v+(A<<20&4294967295|A>>>12),A=y+(v^w&(g^v))+_[5]+3593408605&4294967295,y=g+(A<<5&4294967295|A>>>27),A=w+(g^v&(y^g))+_[10]+38016083&4294967295,w=y+(A<<9&4294967295|A>>>23),A=v+(y^g&(w^y))+_[15]+3634488961&4294967295,v=w+(A<<14&4294967295|A>>>18),A=g+(w^y&(v^w))+_[4]+3889429448&4294967295,g=v+(A<<20&4294967295|A>>>12),A=y+(v^w&(g^v))+_[9]+568446438&4294967295,y=g+(A<<5&4294967295|A>>>27),A=w+(g^v&(y^g))+_[14]+3275163606&4294967295,w=y+(A<<9&4294967295|A>>>23),A=v+(y^g&(w^y))+_[3]+4107603335&4294967295,v=w+(A<<14&4294967295|A>>>18),A=g+(w^y&(v^w))+_[8]+1163531501&4294967295,g=v+(A<<20&4294967295|A>>>12),A=y+(v^w&(g^v))+_[13]+2850285829&4294967295,y=g+(A<<5&4294967295|A>>>27),A=w+(g^v&(y^g))+_[2]+4243563512&4294967295,w=y+(A<<9&4294967295|A>>>23),A=v+(y^g&(w^y))+_[7]+1735328473&4294967295,v=w+(A<<14&4294967295|A>>>18),A=g+(w^y&(v^w))+_[12]+2368359562&4294967295,g=v+(A<<20&4294967295|A>>>12),A=y+(g^v^w)+_[5]+4294588738&4294967295,y=g+(A<<4&4294967295|A>>>28),A=w+(y^g^v)+_[8]+2272392833&4294967295,w=y+(A<<11&4294967295|A>>>21),A=v+(w^y^g)+_[11]+1839030562&4294967295,v=w+(A<<16&4294967295|A>>>16),A=g+(v^w^y)+_[14]+4259657740&4294967295,g=v+(A<<23&4294967295|A>>>9),A=y+(g^v^w)+_[1]+2763975236&4294967295,y=g+(A<<4&4294967295|A>>>28),A=w+(y^g^v)+_[4]+1272893353&4294967295,w=y+(A<<11&4294967295|A>>>21),A=v+(w^y^g)+_[7]+4139469664&4294967295,v=w+(A<<16&4294967295|A>>>16),A=g+(v^w^y)+_[10]+3200236656&4294967295,g=v+(A<<23&4294967295|A>>>9),A=y+(g^v^w)+_[13]+681279174&4294967295,y=g+(A<<4&4294967295|A>>>28),A=w+(y^g^v)+_[0]+3936430074&4294967295,w=y+(A<<11&4294967295|A>>>21),A=v+(w^y^g)+_[3]+3572445317&4294967295,v=w+(A<<16&4294967295|A>>>16),A=g+(v^w^y)+_[6]+76029189&4294967295,g=v+(A<<23&4294967295|A>>>9),A=y+(g^v^w)+_[9]+3654602809&4294967295,y=g+(A<<4&4294967295|A>>>28),A=w+(y^g^v)+_[12]+3873151461&4294967295,w=y+(A<<11&4294967295|A>>>21),A=v+(w^y^g)+_[15]+530742520&4294967295,v=w+(A<<16&4294967295|A>>>16),A=g+(v^w^y)+_[2]+3299628645&4294967295,g=v+(A<<23&4294967295|A>>>9),A=y+(v^(g|~w))+_[0]+4096336452&4294967295,y=g+(A<<6&4294967295|A>>>26),A=w+(g^(y|~v))+_[7]+1126891415&4294967295,w=y+(A<<10&4294967295|A>>>22),A=v+(y^(w|~g))+_[14]+2878612391&4294967295,v=w+(A<<15&4294967295|A>>>17),A=g+(w^(v|~y))+_[5]+4237533241&4294967295,g=v+(A<<21&4294967295|A>>>11),A=y+(v^(g|~w))+_[12]+1700485571&4294967295,y=g+(A<<6&4294967295|A>>>26),A=w+(g^(y|~v))+_[3]+2399980690&4294967295,w=y+(A<<10&4294967295|A>>>22),A=v+(y^(w|~g))+_[10]+4293915773&4294967295,v=w+(A<<15&4294967295|A>>>17),A=g+(w^(v|~y))+_[1]+2240044497&4294967295,g=v+(A<<21&4294967295|A>>>11),A=y+(v^(g|~w))+_[8]+1873313359&4294967295,y=g+(A<<6&4294967295|A>>>26),A=w+(g^(y|~v))+_[15]+4264355552&4294967295,w=y+(A<<10&4294967295|A>>>22),A=v+(y^(w|~g))+_[6]+2734768916&4294967295,v=w+(A<<15&4294967295|A>>>17),A=g+(w^(v|~y))+_[13]+1309151649&4294967295,g=v+(A<<21&4294967295|A>>>11),A=y+(v^(g|~w))+_[4]+4149444226&4294967295,y=g+(A<<6&4294967295|A>>>26),A=w+(g^(y|~v))+_[11]+3174756917&4294967295,w=y+(A<<10&4294967295|A>>>22),A=v+(y^(w|~g))+_[2]+718787259&4294967295,v=w+(A<<15&4294967295|A>>>17),A=g+(w^(v|~y))+_[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(v+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+w&4294967295}i.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var g=y-this.blockSize,_=this.B,v=this.h,w=0;w<y;){if(v==0)for(;w<=g;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<y;)if(_[v++]=T.charCodeAt(w++),v==this.blockSize){s(this,_),v=0;break}}else for(;w<y;)if(_[v++]=T[w++],v==this.blockSize){s(this,_),v=0;break}}this.h=v,this.o+=y},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var g=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=g&255,g/=256;for(this.u(T),T=Array(16),y=g=0;4>y;++y)for(var _=0;32>_;_+=8)T[g++]=this.g[y]>>>_&255;return T};function r(T,y){var g=l;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=y(T)}function o(T,y){this.h=y;for(var g=[],_=!0,v=T.length-1;0<=v;v--){var w=T[v]|0;_&&w==y||(g[v]=w,_=!1)}this.g=g}var l={};function c(T){return-128<=T&&128>T?r(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return M(u(-T));for(var y=[],g=1,_=0;T>=g;_++)y[_]=T/g|0,g*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return M(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=u(Math.pow(y,8)),_=p,v=0;v<T.length;v+=8){var w=Math.min(8,T.length-v),A=parseInt(T.substring(v,v+w),y);8>w?(w=u(Math.pow(y,w)),_=_.j(w).add(u(A))):(_=_.j(g),_=_.add(u(A)))}return _}var p=c(0),m=c(1),E=c(16777216);t=o.prototype,t.m=function(){if(L(this))return-M(this).m();for(var T=0,y=1,g=0;g<this.g.length;g++){var _=this.i(g);T+=(0<=_?_:4294967296+_)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(L(this))return"-"+M(this).toString(T);for(var y=u(Math.pow(T,6)),g=this,_="";;){var v=V(g,y).g;g=O(g,v.j(y));var w=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=v,R(g))return w+_;for(;6>w.length;)w="0"+w;_=w+_}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function L(T){return T.h==-1}t.l=function(T){return T=O(this,T),L(T)?-1:R(T)?0:1};function M(T){for(var y=T.g.length,g=[],_=0;_<y;_++)g[_]=~T.g[_];return new o(g,~T.h).add(m)}t.abs=function(){return L(this)?M(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),g=[],_=0,v=0;v<=y;v++){var w=_+(this.i(v)&65535)+(T.i(v)&65535),A=(w>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);_=A>>>16,w&=65535,A&=65535,g[v]=A<<16|w}return new o(g,g[g.length-1]&-2147483648?-1:0)};function O(T,y){return T.add(M(y))}t.j=function(T){if(R(this)||R(T))return p;if(L(this))return L(T)?M(this).j(M(T)):M(M(this).j(T));if(L(T))return M(this.j(M(T)));if(0>this.l(E)&&0>T.l(E))return u(this.m()*T.m());for(var y=this.g.length+T.g.length,g=[],_=0;_<2*y;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var v=0;v<T.g.length;v++){var w=this.i(_)>>>16,A=this.i(_)&65535,Ee=T.i(v)>>>16,Fe=T.i(v)&65535;g[2*_+2*v]+=A*Fe,C(g,2*_+2*v),g[2*_+2*v+1]+=w*Fe,C(g,2*_+2*v+1),g[2*_+2*v+1]+=A*Ee,C(g,2*_+2*v+1),g[2*_+2*v+2]+=w*Ee,C(g,2*_+2*v+2)}for(_=0;_<y;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=y;_<2*y;_++)g[_]=0;return new o(g,0)};function C(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function k(T,y){this.g=T,this.h=y}function V(T,y){if(R(y))throw Error("division by zero");if(R(T))return new k(p,p);if(L(T))return y=V(M(T),y),new k(M(y.g),M(y.h));if(L(y))return y=V(T,M(y)),new k(M(y.g),y.h);if(30<T.g.length){if(L(T)||L(y))throw Error("slowDivide_ only works with positive integers.");for(var g=m,_=y;0>=_.l(T);)g=z(g),_=z(_);var v=H(g,1),w=H(_,1);for(_=H(_,2),g=H(g,2);!R(_);){var A=w.add(_);0>=A.l(T)&&(v=v.add(g),w=A),_=H(_,1),g=H(g,1)}return y=O(T,v.j(y)),new k(v,y)}for(v=p;0<=T.l(y);){for(g=Math.max(1,Math.floor(T.m()/y.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),w=u(g),A=w.j(y);L(A)||0<A.l(T);)g-=_,w=u(g),A=w.j(y);R(w)&&(w=m),v=v.add(w),T=O(T,A)}return new k(v,T)}t.A=function(T){return V(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),g=[],_=0;_<y;_++)g[_]=this.i(_)&T.i(_);return new o(g,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),g=[],_=0;_<y;_++)g[_]=this.i(_)|T.i(_);return new o(g,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),g=[],_=0;_<y;_++)g[_]=this.i(_)^T.i(_);return new o(g,this.h^T.h)};function z(T){for(var y=T.g.length+1,g=[],_=0;_<y;_++)g[_]=T.i(_)<<1|T.i(_-1)>>>31;return new o(g,T.h)}function H(T,y){var g=y>>5;y%=32;for(var _=T.g.length-g,v=[],w=0;w<_;w++)v[w]=0<y?T.i(w+g)>>>y|T.i(w+g+1)<<32-y:T.i(w+g);return new o(v,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,$1=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Oi=o}).apply(typeof $p<"u"?$p:typeof self<"u"?self:typeof window<"u"?window:{});var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var W1,Vr,K1,Na,Cu,Q1,Y1,X1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,h){return a==Array.prototype||a==Object.prototype||(a[d]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ga=="object"&&ga];for(var d=0;d<a.length;++d){var h=a[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=n(this);function s(a,d){if(d)e:{var h=i;a=a.split(".");for(var I=0;I<a.length-1;I++){var D=a[I];if(!(D in h))break e;h=h[D]}a=a[a.length-1],I=h[a],d=d(I),d!=I&&d!=null&&e(h,a,{configurable:!0,writable:!0,value:d})}}function r(a,d){a instanceof String&&(a+="");var h=0,I=!1,D={next:function(){if(!I&&h<a.length){var x=h++;return{value:d(x,a[x]),done:!1}}return I=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return r(this,function(d,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,h){return a.call.apply(a.bind,arguments)}function p(a,d,h){if(!a)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,I),a.apply(d,D)}}return function(){return a.apply(d,arguments)}}function m(a,d,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function E(a,d){var h=Array.prototype.slice.call(arguments,1);return function(){var I=h.slice();return I.push.apply(I,arguments),a.apply(this,I)}}function R(a,d){function h(){}h.prototype=d.prototype,a.aa=d.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(I,D,x){for(var J=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)J[$e-2]=arguments[$e];return d.prototype[D].apply(I,J)}}function L(a){const d=a.length;if(0<d){const h=Array(d);for(let I=0;I<d;I++)h[I]=a[I];return h}return[]}function M(a,d){for(let h=1;h<arguments.length;h++){const I=arguments[h];if(c(I)){const D=a.length||0,x=I.length||0;a.length=D+x;for(let J=0;J<x;J++)a[D+J]=I[J]}else a.push(I)}}class O{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function C(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var z=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function H(a,d,h){for(const I in a)d.call(h,a[I],I,a)}function T(a,d){for(const h in a)d.call(void 0,a[h],h,a)}function y(a){const d={};for(const h in a)d[h]=a[h];return d}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(a,d){let h,I;for(let D=1;D<arguments.length;D++){I=arguments[D];for(h in I)a[h]=I[h];for(let x=0;x<g.length;x++)h=g[x],Object.prototype.hasOwnProperty.call(I,h)&&(a[h]=I[h])}}function v(a){var d=1;a=a.split(":");const h=[];for(;0<d&&a.length;)h.push(a.shift()),d--;return a.length&&h.push(a.join(":")),h}function w(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Q;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ee{constructor(){this.h=this.g=null}add(d,h){const I=Fe.get();I.set(d,h),this.h?this.h.next=I:this.g=I,this.h=I}}var Fe=new O(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,we=!1,Q=new Ee,K=()=>{const a=l.Promise.resolve(void 0);ne=()=>{a.then(ye)}};var ye=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(h){w(h)}var d=Fe;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}we=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Qe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,d),l.removeEventListener("test",h,d)}catch{}return a}();function Gt(a,d){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,I=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(z){e:{try{V(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else h=="mouseover"?d=a.fromElement:h=="mouseout"&&(d=a.toElement);this.relatedTarget=d,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:At[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gt.aa.h.call(this)}}R(Gt,Te);var At={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),ie=0;function ee(a,d,h,I,D){this.listener=a,this.proxy=null,this.src=d,this.type=h,this.capture=!!I,this.ha=D,this.key=++ie,this.da=this.fa=!1}function oe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xe(a){this.src=a,this.g={},this.h=0}xe.prototype.add=function(a,d,h,I,D){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var J=S(a,d,I,D);return-1<J?(d=a[J],h||(d.fa=!1)):(d=new ee(d,this.src,x,!!I,D),d.fa=h,a.push(d)),d};function b(a,d){var h=d.type;if(h in a.g){var I=a.g[h],D=Array.prototype.indexOf.call(I,d,void 0),x;(x=0<=D)&&Array.prototype.splice.call(I,D,1),x&&(oe(d),a.g[h].length==0&&(delete a.g[h],a.h--))}}function S(a,d,h,I){for(var D=0;D<a.length;++D){var x=a[D];if(!x.da&&x.listener==d&&x.capture==!!h&&x.ha==I)return D}return-1}var P="closure_lm_"+(1e6*Math.random()|0),U={};function G(a,d,h,I,D){if(Array.isArray(d)){for(var x=0;x<d.length;x++)G(a,d[x],h,I,D);return null}return h=_e(h),a&&a[F]?a.K(d,h,u(I)?!!I.capture:!1,D):q(a,d,h,!1,I,D)}function q(a,d,h,I,D,x){if(!d)throw Error("Invalid event type");var J=u(D)?!!D.capture:!!D,$e=te(a);if($e||(a[P]=$e=new xe(a)),h=$e.add(d,h,I,J,x),h.proxy)return h;if(I=Z(),h.proxy=I,I.src=a,I.listener=h,a.addEventListener)Qe||(D=J),D===void 0&&(D=!1),a.addEventListener(d.toString(),I,D);else if(a.attachEvent)a.attachEvent(j(d.toString()),I);else if(a.addListener&&a.removeListener)a.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Z(){function a(h){return d.call(a.src,a.listener,h)}const d=pe;return a}function X(a,d,h,I,D){if(Array.isArray(d))for(var x=0;x<d.length;x++)X(a,d[x],h,I,D);else I=u(I)?!!I.capture:!!I,h=_e(h),a&&a[F]?(a=a.i,d=String(d).toString(),d in a.g&&(x=a.g[d],h=S(x,h,I,D),-1<h&&(oe(x[h]),Array.prototype.splice.call(x,h,1),x.length==0&&(delete a.g[d],a.h--)))):a&&(a=te(a))&&(d=a.g[d.toString()],a=-1,d&&(a=S(d,h,I,D)),(h=-1<a?d[a]:null)&&Y(h))}function Y(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[F])b(d.i,a);else{var h=a.type,I=a.proxy;d.removeEventListener?d.removeEventListener(h,I,a.capture):d.detachEvent?d.detachEvent(j(h),I):d.addListener&&d.removeListener&&d.removeListener(I),(h=te(d))?(b(h,a),h.h==0&&(h.src=null,d[P]=null)):oe(a)}}}function j(a){return a in U?U[a]:U[a]="on"+a}function pe(a,d){if(a.da)a=!0;else{d=new Gt(d,this);var h=a.listener,I=a.ha||a.src;a.fa&&Y(a),a=h.call(I,d)}return a}function te(a){return a=a[P],a instanceof xe?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(a){return typeof a=="function"?a:(a[le]||(a[le]=function(d){return a.handleEvent(d)}),a[le])}function me(){ve.call(this),this.i=new xe(this),this.M=this,this.F=null}R(me,ve),me.prototype[F]=!0,me.prototype.removeEventListener=function(a,d,h,I){X(this,a,d,h,I)};function Ce(a,d){var h,I=a.F;if(I)for(h=[];I;I=I.F)h.push(I);if(a=a.M,I=d.type||d,typeof d=="string")d=new Te(d,a);else if(d instanceof Te)d.target=d.target||a;else{var D=d;d=new Te(I,a),_(d,D)}if(D=!0,h)for(var x=h.length-1;0<=x;x--){var J=d.g=h[x];D=Le(J,I,!0,d)&&D}if(J=d.g=a,D=Le(J,I,!0,d)&&D,D=Le(J,I,!1,d)&&D,h)for(x=0;x<h.length;x++)J=d.g=h[x],D=Le(J,I,!1,d)&&D}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var h=a.g[d],I=0;I<h.length;I++)oe(h[I]);delete a.g[d],a.h--}}this.F=null},me.prototype.K=function(a,d,h,I){return this.i.add(String(a),d,!1,h,I)},me.prototype.L=function(a,d,h,I){return this.i.add(String(a),d,!0,h,I)};function Le(a,d,h,I){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,x=0;x<d.length;++x){var J=d[x];if(J&&!J.da&&J.capture==h){var $e=J.listener,yt=J.ha||J.src;J.fa&&b(a.i,J),D=$e.call(yt,I)!==!1&&D}}return D&&!I.defaultPrevented}function wt(a,d,h){if(typeof a=="function")h&&(a=m(a,h));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function mt(a){a.g=wt(()=>{a.g=null,a.i&&(a.i=!1,mt(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Xt extends ve{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:mt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(a){ve.call(this),this.h=a,this.g={}}R(vt,ve);var ni=[];function gr(a){H(a.g,function(d,h){this.g.hasOwnProperty(h)&&Y(d)},a),a.g={}}vt.prototype.N=function(){vt.aa.N.call(this),gr(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gt=l.JSON.stringify,Jt=l.JSON.parse,Qo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function oc(){}oc.prototype.h=null;function Uf(a){return a.h||(a.h=a.i())}function qf(){}var yr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ac(){Te.call(this,"d")}R(ac,Te);function lc(){Te.call(this,"c")}R(lc,Te);var Qi={},Bf=null;function Yo(){return Bf=Bf||new me}Qi.La="serverreachability";function zf(a){Te.call(this,Qi.La,a)}R(zf,Te);function _r(a){const d=Yo();Ce(d,new zf(d))}Qi.STAT_EVENT="statevent";function Gf(a,d){Te.call(this,Qi.STAT_EVENT,a),this.stat=d}R(Gf,Te);function Lt(a){const d=Yo();Ce(d,new Gf(d,a))}Qi.Ma="timingevent";function Hf(a,d){Te.call(this,Qi.Ma,a),this.size=d}R(Hf,Te);function Ir(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Er(){this.g=!0}Er.prototype.xa=function(){this.g=!1};function PE(a,d,h,I,D,x){a.info(function(){if(a.g)if(x)for(var J="",$e=x.split("&"),yt=0;yt<$e.length;yt++){var Ve=$e[yt].split("=");if(1<Ve.length){var Tt=Ve[0];Ve=Ve[1];var bt=Tt.split("_");J=2<=bt.length&&bt[1]=="type"?J+(Tt+"="+Ve+"&"):J+(Tt+"=redacted&")}}else J=null;else J=x;return"XMLHTTP REQ ("+I+") [attempt "+D+"]: "+d+`
`+h+`
`+J})}function NE(a,d,h,I,D,x,J){a.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+D+"]: "+d+`
`+h+`
`+x+" "+J})}function Ss(a,d,h,I){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+LE(a,h)+(I?" "+I:"")})}function DE(a,d){a.info(function(){return"TIMEOUT: "+d})}Er.prototype.info=function(){};function LE(a,d){if(!a.g)return d;if(!d)return null;try{var h=JSON.parse(d);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var I=h[a];if(!(2>I.length)){var D=I[1];if(Array.isArray(D)&&!(1>D.length)){var x=D[0];if(x!="noop"&&x!="stop"&&x!="close")for(var J=1;J<D.length;J++)D[J]=""}}}}return gt(h)}catch{return d}}var Xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cc;function Jo(){}R(Jo,oc),Jo.prototype.g=function(){return new XMLHttpRequest},Jo.prototype.i=function(){return{}},cc=new Jo;function ii(a,d,h,I){this.j=a,this.i=d,this.l=h,this.R=I||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $f}function $f(){this.i=null,this.g="",this.h=!1}var Wf={},uc={};function dc(a,d,h){a.L=1,a.v=na(Ln(d)),a.m=h,a.P=!0,Kf(a,null)}function Kf(a,d){a.F=Date.now(),Zo(a),a.A=Ln(a.v);var h=a.A,I=a.R;Array.isArray(I)||(I=[String(I)]),lh(h.i,"t",I),a.C=0,h=a.j.J,a.h=new $f,a.g=Sh(a.j,h?d:null,!a.m),0<a.O&&(a.M=new Xt(m(a.Y,a,a.g),a.O)),d=a.U,h=a.g,I=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(ni[0]=D.toString()),D=ni);for(var x=0;x<D.length;x++){var J=G(h,D[x],I||d.handleEvent,!1,d.h||d);if(!J)break;d.g[J.key]=J}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),_r(),PE(a.i,a.u,a.A,a.l,a.R,a.m)}ii.prototype.ca=function(a){a=a.target;const d=this.M;d&&Mn(a)==3?d.j():this.Y(a)},ii.prototype.Y=function(a){try{if(a==this.g)e:{const bt=Mn(this.g);var d=this.g.Ba();const Os=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||mh(this.g)))){this.J||bt!=4||d==7||(d==8||0>=Os?_r(3):_r(2)),fc(this);var h=this.g.Z();this.X=h;t:if(Qf(this)){var I=mh(this.g);a="";var D=I.length,x=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yi(this),Ar(this);var J="";break t}this.h.i=new l.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,a+=this.h.i.decode(I[d],{stream:!(x&&d==D-1)});I.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=h==200,NE(this.i,this.u,this.A,this.l,this.R,bt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,yt=this.g;if(($e=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C($e)){var Ve=$e;break t}}Ve=null}if(h=Ve)Ss(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hc(this,h);else{this.o=!1,this.s=3,Lt(12),Yi(this),Ar(this);break e}}if(this.P){h=!0;let rn;for(;!this.J&&this.C<J.length;)if(rn=ME(this,J),rn==uc){bt==4&&(this.s=4,Lt(14),h=!1),Ss(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Wf){this.s=4,Lt(15),Ss(this.i,this.l,J,"[Invalid Chunk]"),h=!1;break}else Ss(this.i,this.l,rn,null),hc(this,rn);if(Qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||J.length!=0||this.h.h||(this.s=1,Lt(16),h=!1),this.o=this.o&&h,!h)Ss(this.i,this.l,J,"[Invalid Chunked Response]"),Yi(this),Ar(this);else if(0<J.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Ic(Tt),Tt.M=!0,Lt(11))}}else Ss(this.i,this.l,J,null),hc(this,J);bt==4&&Yi(this),this.o&&!this.J&&(bt==4?wh(this.j,this):(this.o=!1,Zo(this)))}else XE(this.g),h==400&&0<J.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Yi(this),Ar(this)}}}catch{}finally{}};function Qf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ME(a,d){var h=a.C,I=d.indexOf(`
`,h);return I==-1?uc:(h=Number(d.substring(h,I)),isNaN(h)?Wf:(I+=1,I+h>d.length?uc:(d=d.slice(I,I+h),a.C=I+h,d)))}ii.prototype.cancel=function(){this.J=!0,Yi(this)};function Zo(a){a.S=Date.now()+a.I,Yf(a,a.I)}function Yf(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ir(m(a.ba,a),d)}function fc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ii.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(DE(this.i,this.A),this.L!=2&&(_r(),Lt(17)),Yi(this),this.s=2,Ar(this)):Yf(this,this.S-a)};function Ar(a){a.j.G==0||a.J||wh(a.j,a)}function Yi(a){fc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,gr(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function hc(a,d){try{var h=a.j;if(h.G!=0&&(h.g==a||pc(h.h,a))){if(!a.K&&pc(h.h,a)&&h.G==3){try{var I=h.Da.g.parse(d)}catch{I=null}if(Array.isArray(I)&&I.length==3){var D=I;if(D[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)la(h),oa(h);else break e;_c(h),Lt(18)}}else h.za=D[1],0<h.za-h.T&&37500>D[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ir(m(h.Za,h),6e3));if(1>=Zf(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ji(h,11)}else if((a.K||h.g==a)&&la(h),!C(d))for(D=h.Da.g.parse(d),d=0;d<D.length;d++){let Ve=D[d];if(h.T=Ve[0],Ve=Ve[1],h.G==2)if(Ve[0]=="c"){h.K=Ve[1],h.ia=Ve[2];const Tt=Ve[3];Tt!=null&&(h.la=Tt,h.j.info("VER="+h.la));const bt=Ve[4];bt!=null&&(h.Aa=bt,h.j.info("SVER="+h.Aa));const Os=Ve[5];Os!=null&&typeof Os=="number"&&0<Os&&(I=1.5*Os,h.L=I,h.j.info("backChannelRequestTimeoutMs_="+I)),I=h;const rn=a.g;if(rn){const ua=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ua){var x=I.h;x.g||ua.indexOf("spdy")==-1&&ua.indexOf("quic")==-1&&ua.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(mc(x,x.h),x.h=null))}if(I.D){const Ec=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ec&&(I.ya=Ec,Xe(I.I,I.D,Ec))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),I=h;var J=a;if(I.qa=bh(I,I.J?I.ia:null,I.W),J.K){eh(I.h,J);var $e=J,yt=I.L;yt&&($e.I=yt),$e.B&&(fc($e),Zo($e)),I.g=J}else Eh(I);0<h.i.length&&aa(h)}else Ve[0]!="stop"&&Ve[0]!="close"||Ji(h,7);else h.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Ji(h,7):yc(h):Ve[0]!="noop"&&h.l&&h.l.ta(Ve),h.v=0)}}_r(4)}catch{}}var kE=class{constructor(a,d){this.g=a,this.map=d}};function Xf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zf(a){return a.h?1:a.g?a.g.size:0}function pc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function mc(a,d){a.g?a.g.add(d):a.h=d}function eh(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Xf.prototype.cancel=function(){if(this.i=th(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function th(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const h of a.g.values())d=d.concat(h.D);return d}return L(a.i)}function xE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],h=a.length,I=0;I<h;I++)d.push(a[I]);return d}d=[],h=0;for(I in a)d[h++]=a[I];return d}function VE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var h=0;h<a;h++)d.push(h);return d}d=[],h=0;for(const I in a)d[h++]=I;return d}}}function nh(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var h=VE(a),I=xE(a),D=I.length,x=0;x<D;x++)d.call(void 0,I[x],h&&h[x],a)}var ih=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FE(a,d){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var I=a[h].indexOf("="),D=null;if(0<=I){var x=a[h].substring(0,I);D=a[h].substring(I+1)}else x=a[h];d(x,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Xi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Xi){this.h=a.h,ea(this,a.j),this.o=a.o,this.g=a.g,ta(this,a.s),this.l=a.l;var d=a.i,h=new Tr;h.i=d.i,d.g&&(h.g=new Map(d.g),h.h=d.h),sh(this,h),this.m=a.m}else a&&(d=String(a).match(ih))?(this.h=!1,ea(this,d[1]||"",!0),this.o=wr(d[2]||""),this.g=wr(d[3]||"",!0),ta(this,d[4]),this.l=wr(d[5]||"",!0),sh(this,d[6]||"",!0),this.m=wr(d[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}Xi.prototype.toString=function(){var a=[],d=this.j;d&&a.push(vr(d,rh,!0),":");var h=this.g;return(h||d=="file")&&(a.push("//"),(d=this.o)&&a.push(vr(d,rh,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(vr(h,h.charAt(0)=="/"?BE:qE,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",vr(h,GE)),a.join("")};function Ln(a){return new Xi(a)}function ea(a,d,h){a.j=h?wr(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ta(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function sh(a,d,h){d instanceof Tr?(a.i=d,HE(a.i,a.h)):(h||(d=vr(d,zE)),a.i=new Tr(d,a.h))}function Xe(a,d,h){a.i.set(d,h)}function na(a){return Xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function wr(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vr(a,d,h){return typeof a=="string"?(a=encodeURI(a).replace(d,UE),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function UE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rh=/[#\/\?@]/g,qE=/[#\?:]/g,BE=/[#\?]/g,zE=/[#\?@]/g,GE=/#/g;function Tr(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function si(a){a.g||(a.g=new Map,a.h=0,a.i&&FE(a.i,function(d,h){a.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}t=Tr.prototype,t.add=function(a,d){si(this),this.i=null,a=Rs(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(d),this.h+=1,this};function oh(a,d){si(a),d=Rs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function ah(a,d){return si(a),d=Rs(a,d),a.g.has(d)}t.forEach=function(a,d){si(this),this.g.forEach(function(h,I){h.forEach(function(D){a.call(d,D,I,this)},this)},this)},t.na=function(){si(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),h=[];for(let I=0;I<d.length;I++){const D=a[I];for(let x=0;x<D.length;x++)h.push(d[I])}return h},t.V=function(a){si(this);let d=[];if(typeof a=="string")ah(this,a)&&(d=d.concat(this.g.get(Rs(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)d=d.concat(a[h])}return d},t.set=function(a,d){return si(this),this.i=null,a=Rs(this,a),ah(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function lh(a,d,h){oh(a,d),0<h.length&&(a.i=null,a.g.set(Rs(a,d),L(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var h=0;h<d.length;h++){var I=d[h];const x=encodeURIComponent(String(I)),J=this.V(I);for(I=0;I<J.length;I++){var D=x;J[I]!==""&&(D+="="+encodeURIComponent(String(J[I]))),a.push(D)}}return this.i=a.join("&")};function Rs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function HE(a,d){d&&!a.j&&(si(a),a.i=null,a.g.forEach(function(h,I){var D=I.toLowerCase();I!=D&&(oh(this,I),lh(this,D,h))},a)),a.j=d}function jE(a,d){const h=new Er;if(l.Image){const I=new Image;I.onload=E(ri,h,"TestLoadImage: loaded",!0,d,I),I.onerror=E(ri,h,"TestLoadImage: error",!1,d,I),I.onabort=E(ri,h,"TestLoadImage: abort",!1,d,I),I.ontimeout=E(ri,h,"TestLoadImage: timeout",!1,d,I),l.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=a}else d(!1)}function $E(a,d){const h=new Er,I=new AbortController,D=setTimeout(()=>{I.abort(),ri(h,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:I.signal}).then(x=>{clearTimeout(D),x.ok?ri(h,"TestPingServer: ok",!0,d):ri(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),ri(h,"TestPingServer: error",!1,d)})}function ri(a,d,h,I,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),I(h)}catch{}}function WE(){this.g=new Qo}function KE(a,d,h){const I=h||"";try{nh(a,function(D,x){let J=D;u(D)&&(J=gt(D)),d.push(I+x+"="+encodeURIComponent(J))})}catch(D){throw d.push(I+"type="+encodeURIComponent("_badmap")),D}}function ia(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ia,oc),ia.prototype.g=function(){return new sa(this.l,this.j)},ia.prototype.i=function(a){return function(){return a}}({});function sa(a,d){me.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(sa,me),t=sa.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Sr(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,br(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ch(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ch(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?br(this):Sr(this),this.readyState==3&&ch(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,br(this))},t.Qa=function(a){this.g&&(this.response=a,br(this))},t.ga=function(){this.g&&br(this)};function br(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Sr(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=d.next();return a.join(`\r
`)};function Sr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function uh(a){let d="";return H(a,function(h,I){d+=I,d+=":",d+=h,d+=`\r
`}),d}function gc(a,d,h){e:{for(I in h){var I=!1;break e}I=!0}I||(h=uh(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):Xe(a,d,h))}function et(a){me.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(et,me);var QE=/^https?$/i,YE=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,h,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cc.g(),this.v=this.o?Uf(this.o):Uf(cc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(x){dh(this,x);return}if(a=h||"",h=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var D in I)h.set(D,I[D]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const x of I.keys())h.set(x,I.get(x));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(h.keys()).find(x=>x.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(YE,d,void 0))||I||D||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,J]of h)this.g.setRequestHeader(x,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ph(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){dh(this,x)}};function dh(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,fh(a),ra(a)}function fh(a){a.A||(a.A=!0,Ce(a,"complete"),Ce(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ce(this,"complete"),Ce(this,"abort"),ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ra(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hh(this):this.bb())},t.bb=function(){hh(this)};function hh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Mn(a)!=4||a.Z()!=2)){if(a.u&&Mn(a)==4)wt(a.Ea,0,a);else if(Ce(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var I;if(I=J===0){var D=String(a.D).match(ih)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),I=!QE.test(D?D.toLowerCase():"")}h=I}if(h)Ce(a,"complete"),Ce(a,"success");else{a.m=6;try{var x=2<Mn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",fh(a)}}finally{ra(a)}}}}function ra(a,d){if(a.g){ph(a);const h=a.g,I=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Ce(a,"ready");try{h.onreadystatechange=I}catch{}}}function ph(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Jt(d)}};function mh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function XE(a){const d={};a=(a.g&&2<=Mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<a.length;I++){if(C(a[I]))continue;var h=v(a[I]);const D=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const x=d[D]||[];d[D]=x,x.push(h)}T(d,function(I){return I.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rr(a,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||d}function gh(a){this.Aa=0,this.i=[],this.j=new Er,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rr("baseRetryDelayMs",5e3,a),this.cb=Rr("retryDelaySeedMs",1e4,a),this.Wa=Rr("forwardChannelMaxRetries",2,a),this.wa=Rr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xf(a&&a.concurrentRequestLimit),this.Da=new WE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=gh.prototype,t.la=8,t.G=1,t.connect=function(a,d,h,I){Lt(0),this.W=a,this.H=d||{},h&&I!==void 0&&(this.H.OSID=h,this.H.OAID=I),this.F=this.X,this.I=bh(this,null,this.W),aa(this)};function yc(a){if(yh(a),a.G==3){var d=a.U++,h=Ln(a.I);if(Xe(h,"SID",a.K),Xe(h,"RID",d),Xe(h,"TYPE","terminate"),Cr(a,h),d=new ii(a,a.j,d),d.L=2,d.v=na(Ln(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=d.v,h=!0),h||(d.g=Sh(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Zo(d)}Th(a)}function oa(a){a.g&&(Ic(a),a.g.cancel(),a.g=null)}function yh(a){oa(a),a.u&&(l.clearTimeout(a.u),a.u=null),la(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function aa(a){if(!Jf(a.h)&&!a.s){a.s=!0;var d=a.Ga;ne||K(),we||(ne(),we=!0),Q.add(d,a),a.B=0}}function JE(a,d){return Zf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ir(m(a.Ga,a,d),vh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new ii(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),_(x,this.S)):x=this.S),this.m!==null||this.O||(D.H=x,x=null),this.P)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var I=this.i[h];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(d+=I,4096<d){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=Ih(this,D,d),h=Ln(this.I),Xe(h,"RID",a),Xe(h,"CVER",22),this.D&&Xe(h,"X-HTTP-Session-Id",this.D),Cr(this,h),x&&(this.O?d="headers="+encodeURIComponent(String(uh(x)))+"&"+d:this.m&&gc(h,this.m,x)),mc(this.h,D),this.Ua&&Xe(h,"TYPE","init"),this.P?(Xe(h,"$req",d),Xe(h,"SID","null"),D.T=!0,dc(D,h,null)):dc(D,h,d),this.G=2}}else this.G==3&&(a?_h(this,a):this.i.length==0||Jf(this.h)||_h(this))};function _h(a,d){var h;d?h=d.l:h=a.U++;const I=Ln(a.I);Xe(I,"SID",a.K),Xe(I,"RID",h),Xe(I,"AID",a.T),Cr(a,I),a.m&&a.o&&gc(I,a.m,a.o),h=new ii(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Ih(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),mc(a.h,h),dc(h,I,d)}function Cr(a,d){a.H&&H(a.H,function(h,I){Xe(d,I,h)}),a.l&&nh({},function(h,I){Xe(d,I,h)})}function Ih(a,d,h){h=Math.min(a.i.length,h);var I=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let x=-1;for(;;){const J=["count="+h];x==-1?0<h?(x=D[0].g,J.push("ofs="+x)):x=0:J.push("ofs="+x);let $e=!0;for(let yt=0;yt<h;yt++){let Ve=D[yt].g;const Tt=D[yt].map;if(Ve-=x,0>Ve)x=Math.max(0,D[yt].g-100),$e=!1;else try{KE(Tt,J,"req"+Ve+"_")}catch{I&&I(Tt)}}if($e){I=J.join("&");break e}}}return a=a.i.splice(0,h),d.D=a,I}function Eh(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;ne||K(),we||(ne(),we=!0),Q.add(d,a),a.v=0}}function _c(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ir(m(a.Fa,a),vh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ah(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ir(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),oa(this),Ah(this))};function Ic(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ah(a){a.g=new ii(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Ln(a.qa);Xe(d,"RID","rpc"),Xe(d,"SID",a.K),Xe(d,"AID",a.T),Xe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Xe(d,"TO",a.ja),Xe(d,"TYPE","xmlhttp"),Cr(a,d),a.m&&a.o&&gc(d,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=na(Ln(d)),h.m=null,h.P=!0,Kf(h,a)}t.Za=function(){this.C!=null&&(this.C=null,oa(this),_c(this),Lt(19))};function la(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function wh(a,d){var h=null;if(a.g==d){la(a),Ic(a),a.g=null;var I=2}else if(pc(a.h,d))h=d.D,eh(a.h,d),I=1;else return;if(a.G!=0){if(d.o)if(I==1){h=d.m?d.m.length:0,d=Date.now()-d.F;var D=a.B;I=Yo(),Ce(I,new Hf(I,h)),aa(a)}else Eh(a);else if(D=d.s,D==3||D==0&&0<d.X||!(I==1&&JE(a,d)||I==2&&_c(a)))switch(h&&0<h.length&&(d=a.h,d.i=d.i.concat(h)),D){case 1:Ji(a,5);break;case 4:Ji(a,10);break;case 3:Ji(a,6);break;default:Ji(a,2)}}}function vh(a,d){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*d}function Ji(a,d){if(a.j.info("Error code "+d),d==2){var h=m(a.fb,a),I=a.Xa;const D=!I;I=new Xi(I||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ea(I,"https"),na(I),D?jE(I.toString(),h):$E(I.toString(),h)}else Lt(2);a.G=0,a.l&&a.l.sa(d),Th(a),yh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function Th(a){if(a.G=0,a.ka=[],a.l){const d=th(a.h);(d.length!=0||a.i.length!=0)&&(M(a.ka,d),M(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function bh(a,d,h){var I=h instanceof Xi?Ln(h):new Xi(h);if(I.g!="")d&&(I.g=d+"."+I.g),ta(I,I.s);else{var D=l.location;I=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var x=new Xi(null);I&&ea(x,I),d&&(x.g=d),D&&ta(x,D),h&&(x.l=h),I=x}return h=a.D,d=a.ya,h&&d&&Xe(I,h,d),Xe(I,"VER",a.la),Cr(a,I),I}function Sh(a,d,h){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new et(new ia({eb:h})):new et(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rh(){}t=Rh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ca(){}ca.prototype.g=function(a,d){return new Ht(a,d)};function Ht(a,d){me.call(this),this.g=new gh(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!C(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!C(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Cs(this)}R(Ht,me),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){yc(this.g)},Ht.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=gt(a),a=h);d.i.push(new kE(d.Ya++,a)),d.G==3&&aa(d)},Ht.prototype.N=function(){this.g.l=null,delete this.j,yc(this.g),delete this.g,Ht.aa.N.call(this)};function Ch(a){ac.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const h in d){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}R(Ch,ac);function Oh(){lc.call(this),this.status=1}R(Oh,lc);function Cs(a){this.g=a}R(Cs,Rh),Cs.prototype.ua=function(){Ce(this.g,"a")},Cs.prototype.ta=function(a){Ce(this.g,new Ch(a))},Cs.prototype.sa=function(a){Ce(this.g,new Oh)},Cs.prototype.ra=function(){Ce(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,X1=function(){return new ca},Y1=function(){return Yo()},Q1=Qi,Cu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xo.NO_ERROR=0,Xo.TIMEOUT=8,Xo.HTTP_ERROR=6,Na=Xo,jf.COMPLETE="complete",K1=jf,qf.EventType=yr,yr.OPEN="a",yr.CLOSE="b",yr.ERROR="c",yr.MESSAGE="d",me.prototype.listen=me.prototype.K,Vr=qf,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,W1=et}).apply(typeof ga<"u"?ga:typeof self<"u"?self:typeof window<"u"?window:{});const Wp="@firebase/firestore";/**
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
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
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
 */let dr="11.2.0";/**
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
 */const ms=new Nl("@firebase/firestore");function Ms(){return ms.logLevel}function se(t,...e){if(ms.logLevel<=Pe.DEBUG){const n=e.map(Gd);ms.debug(`Firestore (${dr}): ${t}`,...n)}}function Yn(t,...e){if(ms.logLevel<=Pe.ERROR){const n=e.map(Gd);ms.error(`Firestore (${dr}): ${t}`,...n)}}function Xs(t,...e){if(ms.logLevel<=Pe.WARN){const n=e.map(Gd);ms.warn(`Firestore (${dr}): ${t}`,...n)}}function Gd(t){if(typeof t=="string")return t;try{/**
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
 */function Ae(t="Unexpected state"){const e=`FIRESTORE (${dr}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function Ge(t,e){t||Ae()}function Re(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class J1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Db{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class Lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mb{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ge(this.o===void 0);let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new Pi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Pi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Pi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ge(typeof i.accessToken=="string"),new J1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new Rt(e)}}class kb{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class xb{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new kb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ge(this.o===void 0);const i=r=>{r.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string"),this.R=n.token,new Vb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ub(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Z1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Ub(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function De(t,e){return t<e?-1:t>e?1:0}function Js(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
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
 */class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new ct(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new he($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new ct(0,0))}static max(){return new be(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yn{constructor(e,n,i){n===void 0?n=0:n>e.length&&Ae(),i===void 0?i=e.length-n:i>e.length-n&&Ae(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=yn.compareSegments(e.get(s),n.get(s));if(r!==0)return r}return Math.sign(e.length-n.length)}static compareSegments(e,n){const i=yn.isNumericId(e),s=yn.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?yn.extractNumericId(e).compare(yn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Oi.fromString(e.substring(4,e.length-2))}}class nt extends yn{construct(e,n,i){return new nt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new he($.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const qb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends yn{construct(e,n,i){return new It(e,n,i)}static isValidIdentifier(e){return qb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new he($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new he($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new he($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(i+=l,s++):(r(),s++)}if(r(),o)throw new he($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(nt.fromString(e))}static fromName(e){return new ge(nt.fromString(e).popFirst(5))}static empty(){return new ge(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new nt(e.slice()))}}function Bb(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=be.fromTimestamp(i===1e9?new ct(n+1,0):new ct(n,i));return new Mi(s,ge.empty(),e)}function zb(t){return new Mi(t.readTime,t.key,-1)}class Mi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Mi(be.min(),ge.empty(),-1)}static max(){return new Mi(be.max(),ge.empty(),-1)}}function Gb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(t.documentKey,e.documentKey),n!==0?n:De(t.largestBatchId,e.largestBatchId))}/**
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
 */const Hb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fr(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==Hb)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,i)=>{n(e)})}static reject(e){return new B((n,i)=>{i(e)})}static waitFor(e){return new B((n,i)=>{let s=0,r=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=B.resolve(!1);for(const i of e)n=n.next(s=>s?B.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new B((i,s)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===r&&i(o)},f=>s(f))}})}static doWhile(e,n){return new B((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function $b(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function hr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class kl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kl.oe=-1;function xl(t){return t==null}function tl(t){return t===0&&1/t==-1/0}function Wb(t){return typeof t=="number"&&Number.isInteger(t)&&!tl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Kb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Kp(e)),e=Qb(t.get(n),e);return Kp(e)}function Qb(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const r=t.charAt(s);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Kp(t){return t+""}/**
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
 */function Qp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function e_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ya(this.root,e,this.comparator,!0)}}class ya{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??_t.RED,this.left=s??_t.EMPTY,this.right=r??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new _t(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(e,n,i,s,r){return this}insert(e,n,i){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yp(this.data.getIterator())}getIteratorFrom(e){return new Yp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class Yp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new ut(It.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class t_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new t_("Invalid base64 string: "+r):r}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const Yb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(t){if(Ge(!!t),typeof t=="string"){let e=0;const n=Yb.exec(t);if(Ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */function Hd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vl(t){const e=t.mapValue.fields.__previous_value__;return Hd(e)?Vl(e):e}function Io(t){const e=ki(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class Xb{constructor(e,n,i,s,r,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _a={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hd(t)?4:Zb(t)?9007199254740991:Jb(t)?10:11:Ae()}function Nn(t,e){if(t===e)return!0;const n=Vi(t);if(n!==Vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Io(t).isEqual(Io(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=ki(s.timestampValue),l=ki(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return xi(s.bytesValue).isEqual(xi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return it(s.geoPointValue.latitude)===it(r.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return it(s.integerValue)===it(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=it(s.doubleValue),l=it(r.doubleValue);return o===l?tl(o)===tl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Js(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return function(s,r){const o=s.mapValue.fields||{},l=r.mapValue.fields||{};if(Qp(o)!==Qp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Nn(o[c],l[c])))return!1;return!0}(t,e);default:return Ae()}}function Ao(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function Zs(t,e){if(t===e)return 0;const n=Vi(t),i=Vi(e);if(n!==i)return De(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return De(t.booleanValue,e.booleanValue);case 2:return function(r,o){const l=it(r.integerValue||r.doubleValue),c=it(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Xp(t.timestampValue,e.timestampValue);case 4:return Xp(Io(t),Io(e));case 5:return De(t.stringValue,e.stringValue);case 6:return function(r,o){const l=xi(r),c=xi(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=De(l[u],c[u]);if(f!==0)return f}return De(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const l=De(it(r.latitude),it(o.latitude));return l!==0?l:De(it(r.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Jp(t.arrayValue,e.arrayValue);case 10:return function(r,o){var l,c,u,f;const p=r.fields||{},m=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(c=m.value)===null||c===void 0?void 0:c.arrayValue,L=De(((u=E==null?void 0:E.values)===null||u===void 0?void 0:u.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:Jp(E,R)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===_a.mapValue&&o===_a.mapValue)return 0;if(r===_a.mapValue)return 1;if(o===_a.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=De(c[p],f[p]);if(m!==0)return m;const E=Zs(l[c[p]],u[f[p]]);if(E!==0)return E}return De(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Ae()}}function Xp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return De(t,e);const n=ki(t),i=ki(e),s=De(n.seconds,i.seconds);return s!==0?s:De(n.nanos,i.nanos)}function Jp(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=Zs(n[s],i[s]);if(r)return r}return De(n.length,i.length)}function er(t){return Ou(t)}function Ou(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=ki(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ge.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=Ou(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ou(n.fields[o])}`;return s+"}"}(t.mapValue):Ae()}function Da(t){switch(Vi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vl(t);return e?16+Da(e):16;case 5:return 2*t.stringValue.length;case 6:return xi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+Da(r),0)}(t.arrayValue);case 10:case 11:return function(i){let s=0;return Wi(i.fields,(r,o)=>{s+=r.length+Da(o)}),s}(t.mapValue);default:throw Ae()}}function Pu(t){return!!t&&"integerValue"in t}function jd(t){return!!t&&"arrayValue"in t}function Zp(t){return!!t&&"nullValue"in t}function em(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function La(t){return!!t&&"mapValue"in t}function Jb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Qr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wi(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Qr(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Zb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!La(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qr(n)}setAll(e){let n=It.emptyPath(),i={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=l.popLast()}o?i[l.lastSegment()]=Qr(o):s.push(l.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());La(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];La(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Wi(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Bt(Qr(this.value))}}function n_(t){const e=[];return Wi(t.fields,(n,i)=>{const s=new It([n]);if(La(i)){const r=n_(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
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
 */class Pt{constructor(e,n,i,s,r,o,l){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Pt(e,0,be.min(),be.min(),be.min(),Bt.empty(),0)}static newFoundDocument(e,n,i,s){return new Pt(e,1,n,be.min(),i,s,0)}static newNoDocument(e,n){return new Pt(e,2,n,be.min(),be.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,be.min(),be.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nl{constructor(e,n){this.position=e,this.inclusive=n}}function tm(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=ge.comparator(ge.fromName(o.referenceValue),n.key):i=Zs(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function nm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class il{constructor(e,n="asc"){this.field=e,this.dir=n}}function eS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class i_{}class lt extends i_{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new nS(e,n,i):n==="array-contains"?new rS(e,i):n==="in"?new oS(e,i):n==="not-in"?new aS(e,i):n==="array-contains-any"?new lS(e,i):new lt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new iS(e,i):new sS(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zs(n,this.value)):n!==null&&Vi(this.value)===Vi(n)&&this.matchesComparison(Zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends i_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Dn(e,n)}matches(e){return s_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function s_(t){return t.op==="and"}function r_(t){return tS(t)&&s_(t)}function tS(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Nu(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+er(t.value);if(r_(t))return t.filters.map(e=>Nu(e)).join(",");{const e=t.filters.map(n=>Nu(n)).join(",");return`${t.op}(${e})`}}function o_(t,e){return t instanceof lt?function(i,s){return s instanceof lt&&i.op===s.op&&i.field.isEqual(s.field)&&Nn(i.value,s.value)}(t,e):t instanceof Dn?function(i,s){return s instanceof Dn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,l)=>r&&o_(o,s.filters[l]),!0):!1}(t,e):void Ae()}function a_(t){return t instanceof lt?function(n){return`${n.field.canonicalString()} ${n.op} ${er(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(a_).join(" ,")+"}"}(t):"Filter"}class nS extends lt{constructor(e,n,i){super(e,n,i),this.key=ge.fromName(i.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class iS extends lt{constructor(e,n){super(e,"in",n),this.keys=l_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sS extends lt{constructor(e,n){super(e,"not-in",n),this.keys=l_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function l_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ge.fromName(i.referenceValue))}class rS extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jd(n)&&Ao(n.arrayValue,this.value)}}class oS extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ao(this.value.arrayValue,n)}}class aS extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ao(this.value.arrayValue,n)}}class lS extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ao(this.value.arrayValue,i))}}/**
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
 */class cS{constructor(e,n=null,i=[],s=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=l,this.ue=null}}function im(t,e=null,n=[],i=[],s=null,r=null,o=null){return new cS(t,e,n,i,s,r,o)}function $d(t){const e=Re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Nu(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),xl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>er(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>er(i)).join(",")),e.ue=n}return e.ue}function Wd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!o_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nm(t.startAt,e.startAt)&&nm(t.endAt,e.endAt)}function Du(t){return ge.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fl{constructor(e,n=null,i=[],s=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uS(t,e,n,i,s,r,o,l){return new Fl(t,e,n,i,s,r,o,l)}function Kd(t){return new Fl(t)}function sm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dS(t){return t.collectionGroup!==null}function Yr(t){const e=Re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ut(It.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.ce.push(new il(r,i))}),n.has(It.keyField().canonicalString())||e.ce.push(new il(It.keyField(),i))}return e.ce}function Sn(t){const e=Re(t);return e.le||(e.le=fS(e,Yr(t))),e.le}function fS(t,e){if(t.limitType==="F")return im(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new il(s.field,r)});const n=t.endAt?new nl(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new nl(t.startAt.position,t.startAt.inclusive):null;return im(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Lu(t,e,n){return new Fl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ul(t,e){return Wd(Sn(t),Sn(e))&&t.limitType===e.limitType}function c_(t){return`${$d(Sn(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>a_(s)).join(", ")}]`),xl(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>er(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>er(s)).join(",")),`Target(${i})`}(Sn(t))}; limitType=${t.limitType})`}function ql(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):ge.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of Yr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,l,c){const u=tm(o,l,c);return o.inclusive?u<=0:u<0}(i.startAt,Yr(i),s)||i.endAt&&!function(o,l,c){const u=tm(o,l,c);return o.inclusive?u>=0:u>0}(i.endAt,Yr(i),s))}(t,e)}function hS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function u_(t){return(e,n)=>{let i=!1;for(const s of Yr(t)){const r=pS(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function pS(t,e,n){const i=t.field.isKeyField()?ge.comparator(e.key,n.key):function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?Zs(c,u):Ae()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ae()}}/**
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
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Wi(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return e_(this.inner)}size(){return this.innerSize}}/**
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
 */const mS=new Ze(ge.comparator);function Xn(){return mS}const d_=new Ze(ge.comparator);function Fr(...t){let e=d_;for(const n of t)e=e.insert(n.key,n);return e}function f_(t){let e=d_;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function os(){return Xr()}function h_(){return Xr()}function Xr(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const gS=new Ze(ge.comparator),yS=new ut(ge.comparator);function Ne(...t){let e=yS;for(const n of t)e=e.add(n);return e}const _S=new ut(De);function IS(){return _S}/**
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
 */function Qd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tl(e)?"-0":e}}function p_(t){return{integerValue:""+t}}function ES(t,e){return Wb(e)?p_(e):Qd(t,e)}/**
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
 */class Bl{constructor(){this._=void 0}}function AS(t,e,n){return t instanceof sl?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Hd(r)&&(r=Vl(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof wo?g_(t,e):t instanceof vo?y_(t,e):function(s,r){const o=m_(s,r),l=rm(o)+rm(s.Pe);return Pu(o)&&Pu(s.Pe)?p_(l):Qd(s.serializer,l)}(t,e)}function wS(t,e,n){return t instanceof wo?g_(t,e):t instanceof vo?y_(t,e):n}function m_(t,e){return t instanceof rl?function(i){return Pu(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class sl extends Bl{}class wo extends Bl{constructor(e){super(),this.elements=e}}function g_(t,e){const n=__(e);for(const i of t.elements)n.some(s=>Nn(s,i))||n.push(i);return{arrayValue:{values:n}}}class vo extends Bl{constructor(e){super(),this.elements=e}}function y_(t,e){let n=__(e);for(const i of t.elements)n=n.filter(s=>!Nn(s,i));return{arrayValue:{values:n}}}class rl extends Bl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function rm(t){return it(t.integerValue||t.doubleValue)}function __(t){return jd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vS(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof wo&&s instanceof wo||i instanceof vo&&s instanceof vo?Js(i.elements,s.elements,Nn):i instanceof rl&&s instanceof rl?Nn(i.Pe,s.Pe):i instanceof sl&&s instanceof sl}(t.transform,e.transform)}class TS{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zl{}function I_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new A_(t.key,Rn.none()):new qo(t.key,t.data,Rn.none());{const n=t.data,i=Bt.empty();let s=new ut(It.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Ki(t.key,i,new Wt(s.toArray()),Rn.none())}}function bS(t,e,n){t instanceof qo?function(s,r,o){const l=s.value.clone(),c=am(s.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ki?function(s,r,o){if(!Ma(s.precondition,r))return void r.convertToUnknownDocument(o.version);const l=am(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(E_(s)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Jr(t,e,n,i){return t instanceof qo?function(r,o,l,c){if(!Ma(r.precondition,o))return l;const u=r.value.clone(),f=lm(r.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,i):t instanceof Ki?function(r,o,l,c){if(!Ma(r.precondition,o))return l;const u=lm(r.fieldTransforms,c,o),f=o.data;return f.setAll(E_(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(t,e,n,i):function(r,o,l){return Ma(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function SS(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=m_(i.transform,s||null);r!=null&&(n===null&&(n=Bt.empty()),n.set(i.field,r))}return n||null}function om(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Js(i,s,(r,o)=>vS(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qo extends zl{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ki extends zl{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function E_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function am(t,e,n){const i=new Map;Ge(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,l=e.data.field(r.field);i.set(r.field,wS(o,l,n[s]))}return i}function lm(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,AS(r,o,e))}return i}class A_ extends zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RS extends zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CS{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&bS(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Jr(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Jr(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=h_();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(s.key)?null:l;const c=I_(o,l);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(be.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(n,i)=>om(n,i))&&Js(this.baseMutations,e.baseMutations,(n,i)=>om(n,i))}}class Yd{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Ge(e.mutations.length===i.length);let s=function(){return gS}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Yd(e,n,i,s)}}/**
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
 */class OS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class PS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ot,Me;function NS(t){switch(t){default:return Ae();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function w_(t){if(t===void 0)return Yn("GRPC error has no .code"),$.UNKNOWN;switch(t){case ot.OK:return $.OK;case ot.CANCELLED:return $.CANCELLED;case ot.UNKNOWN:return $.UNKNOWN;case ot.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ot.INTERNAL:return $.INTERNAL;case ot.UNAVAILABLE:return $.UNAVAILABLE;case ot.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ot.NOT_FOUND:return $.NOT_FOUND;case ot.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ot.ABORTED:return $.ABORTED;case ot.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ot.DATA_LOSS:return $.DATA_LOSS;default:return Ae()}}(Me=ot||(ot={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function DS(){return new TextEncoder}/**
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
 */const LS=new Oi([4294967295,4294967295],0);function cm(t){const e=DS().encode(t),n=new $1;return n.update(e),new Uint8Array(n.digest())}function um(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Oi([n,i],0),new Oi([s,r],0)]}class Xd{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ur(`Invalid padding: ${n}`);if(i<0)throw new Ur(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ur(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Ur(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Oi.fromNumber(this.Te)}de(e,n,i){let s=e.add(n.multiply(Oi.fromNumber(i)));return s.compare(LS)===1&&(s=new Oi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=cm(e),[i,s]=um(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ee(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Xd(r,s,n);return i.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=cm(e),[i,s]=um(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gl{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Bo.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Gl(be.min(),s,new Ze(De),Xn(),Ne())}}class Bo{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Bo(i,n,Ne(),Ne(),Ne())}}/**
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
 */class ka{constructor(e,n,i,s){this.Re=e,this.removedTargetIds=n,this.key=i,this.Ve=s}}class v_{constructor(e,n){this.targetId=e,this.me=n}}class T_{constructor(e,n,i=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class dm{constructor(){this.fe=0,this.ge=fm(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),n=Ne(),i=Ne();return this.ge.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Ae()}}),new Bo(this.pe,this.ye,e,n,i)}Ce(){this.we=!1,this.ge=fm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class MS{constructor(e){this.Be=e,this.Le=new Map,this.ke=Xn(),this.qe=Ia(),this.Qe=Ia(),this.Ke=new Ze(De)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const i=this.ze(n);switch(e.state){case 0:this.je(n)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.je(n)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.De(e.resumeToken));break;default:Ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((i,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,i=e.me.count,s=this.Ye(n);if(s){const r=s.target;if(Du(r))if(i===0){const o=new ge(r.path);this.We(n,o,Pt.newNoDocument(o,be.min()))}else Ge(i===1);else{const o=this.Ze(n);if(o!==i){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let o,l;try{o=xi(i).toUint8Array()}catch(c){if(c instanceof t_)return Xs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Xd(o,s,r)}catch(c){return Xs(c instanceof Ur?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,i){return n.me.count===i-this.rt(e,n.targetId)?0:2}rt(e,n){const i=this.Be.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const o=this.Be.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.We(n,r,null),s++)}),s}it(e){const n=new Map;this.Le.forEach((r,o)=>{const l=this.Ye(o);if(l){if(r.current&&Du(l.target)){const c=new ge(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Pt.newNoDocument(c,e))}r.be&&(n.set(o,r.ve()),r.Ce())}});let i=Ne();this.Qe.forEach((r,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const s=new Gl(e,n,this.Ke,this.ke,i);return this.ke=Xn(),this.qe=Ia(),this.Qe=Ia(),this.Ke=new Ze(De),s}Ue(e,n){if(!this.je(e))return;const i=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,i){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new dm,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ut(De),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(De),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new dm),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Ia(){return new Ze(ge.comparator)}function fm(){return new Ze(ge.comparator)}const kS={asc:"ASCENDING",desc:"DESCENDING"},xS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VS={and:"AND",or:"OR"};class FS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mu(t,e){return t.useProto3Json||xl(e)?e:{value:e}}function ol(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function US(t,e){return ol(t,e.toTimestamp())}function Cn(t){return Ge(!!t),be.fromTimestamp(function(n){const i=ki(n);return new ct(i.seconds,i.nanos)}(t))}function Jd(t,e){return ku(t,e).canonicalString()}function ku(t,e){const n=function(s){return new nt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function S_(t){const e=nt.fromString(t);return Ge(N_(e)),e}function xu(t,e){return Jd(t.databaseId,e.path)}function zc(t,e){const n=S_(e);if(n.get(1)!==t.databaseId.projectId)throw new he($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new he($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ge(C_(n))}function R_(t,e){return Jd(t.databaseId,e)}function qS(t){const e=S_(t);return e.length===4?nt.emptyPath():C_(e)}function Vu(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function C_(t){return Ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hm(t,e,n){return{name:xu(t,e),fields:n.value.mapValue.fields}}function BS(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(u,f){return u.useProto3Json?(Ge(f===void 0||typeof f=="string"),Et.fromBase64String(f||"")):(Ge(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?$.UNKNOWN:w_(u.code);return new he(f,u.message||"")}(o);n=new T_(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=zc(t,i.document.name),r=Cn(i.document.updateTime),o=i.document.createTime?Cn(i.document.createTime):be.min(),l=new Bt({mapValue:{fields:i.document.fields}}),c=Pt.newFoundDocument(s,r,o,l),u=i.targetIds||[],f=i.removedTargetIds||[];n=new ka(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=zc(t,i.document),r=i.readTime?Cn(i.readTime):be.min(),o=Pt.newNoDocument(s,r),l=i.removedTargetIds||[];n=new ka([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=zc(t,i.document),r=i.removedTargetIds||[];n=new ka([],r,s,null)}else{if(!("filter"in e))return Ae();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new PS(s,r),l=i.targetId;n=new v_(l,o)}}return n}function zS(t,e){let n;if(e instanceof qo)n={update:hm(t,e.key,e.value)};else if(e instanceof A_)n={delete:xu(t,e.key)};else if(e instanceof Ki)n={update:hm(t,e.key,e.data),updateMask:XS(e.fieldMask)};else{if(!(e instanceof RS))return Ae();n={verify:xu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const l=o.transform;if(l instanceof sl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof wo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof rl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Ae()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:US(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Ae()}(t,e.precondition)),n}function GS(t,e){return t&&t.length>0?(Ge(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?Cn(s.updateTime):Cn(r);return o.isEqual(be.min())&&(o=Cn(r)),new TS(o,s.transformResults||[])}(n,e))):[]}function HS(t,e){return{documents:[R_(t,e.path)]}}function jS(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=R_(t,s);const r=function(u){if(u.length!==0)return P_(Dn.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:xs(m.field),direction:KS(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function $S(t){let e=qS(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ge(i===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];n.where&&(r=function(p){const m=O_(p);return m instanceof Dn&&r_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new il(Vs(R.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,xl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,E=p.values||[];return new nl(E,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,E=p.values||[];return new nl(E,m)}(n.endAt)),uS(e,s,o,r,l,"F",c,u)}function WS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function O_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Vs(n.unaryFilter.field);return lt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Vs(n.unaryFilter.field);return lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vs(n.unaryFilter.field);return lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vs(n.unaryFilter.field);return lt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}(t):t.fieldFilter!==void 0?function(n){return lt.create(Vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(i=>O_(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ae()}}(n.compositeFilter.op))}(t):Ae()}function KS(t){return kS[t]}function QS(t){return xS[t]}function YS(t){return VS[t]}function xs(t){return{fieldPath:t.canonicalString()}}function Vs(t){return It.fromServerFormat(t.fieldPath)}function P_(t){return t instanceof lt?function(n){if(n.op==="=="){if(em(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NAN"}};if(Zp(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(em(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NOT_NAN"}};if(Zp(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(n.field),op:QS(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const i=n.getFilters().map(s=>P_(s));return i.length===1?i[0]:{compositeFilter:{op:YS(n.op),filters:i}}}(t):Ae()}function XS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function N_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wi{constructor(e,n,i,s,r=be.min(),o=be.min(),l=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class JS{constructor(e){this.ht=e}}function ZS(t){const e=$S({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lu(e,e.limit,"L"):e}/**
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
 */class eR{constructor(){this.ln=new tR}addToCollectionParentIndex(e,n){return this.ln.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Mi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Mi.min())}updateCollectionGroup(e,n,i){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class tR{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new ut(nt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ut(nt.comparator)).toArray()}}/**
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
 */const pm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ut{static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(41943040,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);/**
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
 */class tr{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new tr(0)}static Qn(){return new tr(-1)}}/**
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
 */function mm([t,e],[n,i]){const s=De(t,n);return s===0?De(e,i):s}class nR{constructor(e){this.Gn=e,this.buffer=new ut(mm),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();mm(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class iR{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){se("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){hr(n)?se("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await fr(n)}await this.Yn(3e5)})}}class sR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return B.resolve(kl.oe);const i=new nR(n);return this.Zn.forEachTarget(e,s=>i.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>i.Hn(s))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.Zn.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(pm)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pm):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let i,s,r,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(i=p,l=Date.now(),this.removeTargets(e,i,n))).next(p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,i))).next(p=>(u=Date.now(),Ms()<=Pe.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:p})))}}function rR(t,e){return new sR(t,e)}/**
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
 */class oR{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?B.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class aR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lR{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Jr(i.mutation,s,Wt.empty(),ct.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Ne()){const s=os();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Fr();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=os();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Ne()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,i,s){let r=Xn();const o=Xr(),l=function(){return Xr()}();return n.forEach((c,u)=>{const f=i.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Ki)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Jr(f.mutation,u,f.mutation.getFieldMask(),ct.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new aR(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const i=Xr();let s=new Ze((o,l)=>o-l),r=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=i.get(c)||Wt.empty();f=l.applyToLocalView(u,f),i.set(c,f);const p=(s.get(l.batchId)||Ne()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=h_();f.forEach(m=>{if(!r.has(m)){const E=I_(n.get(m),i.get(m));E!==null&&p.set(m,E),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(o){return ge.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):B.resolve(os());let l=-1,c=r;return o.next(u=>B.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,Ne())).next(f=>({batchId:l,changes:f_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next(i=>{let s=Fr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const r=n.collectionGroup;let o=Fr();return this.indexManager.getCollectionParents(e,r).next(l=>B.forEach(l,c=>{const u=function(p,m){return new Fl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r,s))).next(o=>{r.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Pt.newInvalidDocument(f)))});let l=Fr();return o.forEach((c,u)=>{const f=r.get(c);f!==void 0&&Jr(f.mutation,u,Wt.empty(),ct.now()),ql(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class cR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return B.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Cn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:ZS(s.bundledQuery),readTime:Cn(s.readTime)}}(n)),B.resolve()}}/**
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
 */class uR{constructor(){this.overlays=new Ze(ge.comparator),this.dr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const i=os();return B.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.Tt(e,n,r)}),B.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.dr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.dr.delete(i)),B.resolve()}getOverlaysForCollection(e,n,i){const s=os(),r=n.length+1,o=new ge(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Ze((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let f=r.get(u.largestBatchId);f===null&&(f=os(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=os(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return B.resolve(l)}Tt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.dr.get(s.largestBatchId).delete(i.key);this.dr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new OS(n,i));let r=this.dr.get(n);r===void 0&&(r=Ne(),this.dr.set(n,r)),this.dr.set(n,r.add(i.key))}}/**
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
 */class dR{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Zd{constructor(){this.Er=new ut(ft.Ar),this.Rr=new ut(ft.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const i=new ft(e,n);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.gr(new ft(e,n))}pr(e,n){e.forEach(i=>this.removeReference(i,n))}yr(e){const n=new ge(new nt([])),i=new ft(n,e),s=new ft(n,e+1),r=[];return this.Rr.forEachInRange([i,s],o=>{this.gr(o),r.push(o.key)}),r}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ge(new nt([])),i=new ft(n,e),s=new ft(n,e+1);let r=Ne();return this.Rr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ft(e,0),i=this.Er.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ft{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ge.comparator(e.key,n.key)||De(e.br,n.br)}static Vr(e,n){return De(e.br,n.br)||ge.comparator(e.key,n.key)}}/**
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
 */class fR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ut(ft.Ar)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CS(r,n,i,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new ft(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Fr(i),r=s<0?0:s;return B.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),r=[];return this.vr.forEachInRange([i,s],o=>{const l=this.Cr(o.br);r.push(l)}),B.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ut(De);return n.forEach(s=>{const r=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([r,o],l=>{i=i.add(l.br)})}),B.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;ge.isDocumentKey(r)||(r=r.child(""));const o=new ft(new ge(r),0);let l=new ut(De);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),B.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(i=>{const s=this.Cr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ge(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return B.forEach(n.mutations,s=>{const r=new ft(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,n){const i=new ft(n,0),s=this.vr.firstAfterOrEqual(i);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hR{constructor(e){this.Nr=e,this.docs=function(){return new Ze(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return B.resolve(i?i.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let i=Xn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Pt.newInvalidDocument(s))}),B.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Xn();const o=n.path,l=new ge(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Gb(zb(f),i)<=0||(s.has(f.key)||ql(n,f))&&(r=r.insert(f.key,f.mutableCopy()))}return B.resolve(r)}getAllFromCollectionGroup(e,n,i,s){Ae()}Br(e,n){return B.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new pR(this)}getSize(e){return B.resolve(this.size)}}class pR extends oR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(i)}),B.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class mR{constructor(e){this.persistence=e,this.Lr=new Ts(n=>$d(n),Wd),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.kr=0,this.qr=new Zd,this.targetCount=0,this.Qr=tr.qn()}forEachTarget(e,n){return this.Lr.forEach((i,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.kr&&(this.kr=n),B.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new tr(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Un(n),B.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Lr.forEach((o,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.Lr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(r).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const i=this.Lr.get(n)||null;return B.resolve(i)}addMatchingKeys(e,n,i){return this.qr.mr(n,i),B.resolve()}removeMatchingKeys(e,n,i){this.qr.pr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const i=this.qr.Sr(n);return B.resolve(i)}containsKey(e,n){return B.resolve(this.qr.containsKey(n))}}/**
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
 */class D_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new kl(0),this.Ur=!1,this.Ur=!0,this.Wr=new dR,this.referenceDelegate=e(this),this.Gr=new mR(this),this.indexManager=new eR,this.remoteDocumentCache=function(s){return new hR(s)}(i=>this.referenceDelegate.zr(i)),this.serializer=new JS(n),this.jr=new cR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Kr[e.toKey()];return i||(i=new fR(n,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,i){se("MemoryPersistence","Starting transaction:",e);const s=new gR(this.$r.next());return this.referenceDelegate.Hr(),i(s).next(r=>this.referenceDelegate.Jr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Yr(e,n){return B.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,n)))}}class gR extends jb{constructor(e){super(),this.currentSequenceNumber=e}}class ef{constructor(e){this.persistence=e,this.Zr=new Zd,this.Xr=null}static ei(e){return new ef(e)}get ti(){if(this.Xr)return this.Xr;throw Ae()}addReference(e,n,i){return this.Zr.addReference(i,n),this.ti.delete(i.toString()),B.resolve()}removeReference(e,n,i){return this.Zr.removeReference(i,n),this.ti.add(i.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),B.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.ti.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ti,i=>{const s=ge.fromPath(i);return this.ni(e,s).next(r=>{r||n.removeEntry(s,be.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(i=>{i?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return B.or([()=>B.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class al{constructor(e,n){this.persistence=e,this.ri=new Ts(i=>Kb(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=rR(this,n)}static ei(e,n){return new al(e,n)}Hr(){}Jr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(s=>i+s))}nr(e){let n=0;return this.er(e,i=>{n++}).next(()=>n)}er(e,n){return B.forEach(this.ri,(i,s)=>this.ir(e,i,s).next(r=>r?B.resolve():n(s)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.Br(e,o=>this.ir(e,o,n).next(l=>{l||(i++,r.removeEntry(o,be.min()))})).next(()=>r.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.ri.set(i,e.currentSequenceNumber),B.resolve()}removeReference(e,n,i){return this.ri.set(i,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Da(e.data.value)),n}ir(e,n,i){return B.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return B.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tf{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Wi=i,this.Gi=s}static zi(e,n){let i=Ne(),s=Ne();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new tf(e,n.fromCache,i,s)}}/**
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
 */class yR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _R{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Jv()?8:$b(Nt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,i,s){const r={result:null};return this.Xi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.es(e,n,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new yR;return this.ts(e,n,o).next(l=>{if(r.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>r.result)}ns(e,n,i,s){return i.documentReadCount<this.Ji?(Ms()<=Pe.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),B.resolve()):(Ms()<=Pe.DEBUG&&se("QueryEngine","Query:",ks(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Yi*s?(Ms()<=Pe.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):B.resolve())}Xi(e,n){if(sm(n))return B.resolve(null);let i=Sn(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Lu(n,null,"F"),i=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Ne(...r);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,Lu(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,i,s){return sm(n)||s.isEqual(be.min())?B.resolve(null):this.Zi.getDocuments(e,i).next(r=>{const o=this.rs(n,r);return this.ss(n,o,i,s)?B.resolve(null):(Ms()<=Pe.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ks(n)),this.os(e,o,n,Bb(s,-1)).next(l=>l))})}rs(e,n){let i=new ut(u_(e));return n.forEach((s,r)=>{ql(e,r)&&(i=i.add(r))}),i}ss(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ts(e,n,i){return Ms()<=Pe.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",ks(n)),this.Zi.getDocumentsMatchingQuery(e,n,Mi.min(),i)}os(e,n,i,s){return this.Zi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class IR{constructor(e,n,i,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ze(De),this.cs=new Ts(r=>$d(r),Wd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function ER(t,e,n,i){return new IR(t,e,n,i)}async function L_(t,e){const n=Re(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Ps(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],l=[];let c=Ne();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of r){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(i,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function AR(t,e){const n=Re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,m=p.keys();let E=B.resolve();return m.forEach(R=>{E=E.next(()=>f.getEntry(c,R)).next(L=>{const M=u.docVersions.get(R);Ge(M!==null),L.version.compareTo(M)<0&&(p.applyToRemoteDocument(L,u),L.isValidDocument()&&(L.setReadTime(u.commitVersion),f.addEntry(L)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let c=Ne();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function M_(t){const e=Re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function wR(t,e){const n=Re(t),i=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(r,f.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(r,f.addedDocuments,p)));let E=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(Et.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,i)),s=s.insert(p,E),function(L,M,O){return L.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(m,E,f)&&l.push(n.Gr.updateTargetData(r,E))});let c=Xn(),u=Ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(vR(r,o,e.documentUpdates).next(f=>{c=f.Is,u=f.ds})),!i.isEqual(be.min())){const f=n.Gr.getLastRemoteSnapshotVersion(r).next(p=>n.Gr.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(f)}return B.waitFor(l).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.us=s,r))}function vR(t,e,n){let i=Ne(),s=Ne();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Xn();return n.forEach((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(be.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):se("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,ds:s}})}function TR(t,e){const n=Re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function bR(t,e){const n=Re(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Gr.getTargetData(i,e).next(r=>r?(s=r,B.resolve(s)):n.Gr.allocateTargetId(i).next(o=>(s=new wi(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Gr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.us.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(i.targetId,i),n.cs.set(e,i.targetId)),i})}async function Fu(t,e,n){const i=Re(t),s=i.us.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!hr(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.us=i.us.remove(e),i.cs.delete(s.target)}function gm(t,e,n){const i=Re(t);let s=be.min(),r=Ne();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=Re(c),m=p.cs.get(f);return m!==void 0?B.resolve(p.us.get(m)):p.Gr.getTargetData(u,f)}(i,o,Sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{r=c})}).next(()=>i._s.getDocumentsMatchingQuery(o,e,n?s:be.min(),n?r:Ne())).next(l=>(SR(i,hS(e),l),{documents:l,Es:r})))}function SR(t,e,n){let i=t.ls.get(e)||be.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.ls.set(e,i)}class ym{constructor(){this.activeTargetIds=IS()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RR{constructor(){this._o=new ym,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,i){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new ym,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CR{uo(e){}shutdown(){}}/**
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
 */class _m{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ea=null;function Gc(){return Ea===null?Ea=function(){return 268435456+Math.round(2147483648*Math.random())}():Ea++,"0x"+Ea.toString(16)}/**
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
 */const OR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class PR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const St="WebChannelConnection";class NR extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+n.host,this.Mo=`projects/${s}/databases/${r}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Oo(n,i,s,r,o){const l=Gc(),c=this.No(n,i.toUriEncodedString());se("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,r,o),this.Lo(n,c,u,s).then(f=>(se("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Xs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}ko(n,i,s,r,o,l){return this.Oo(n,i,s,r,o)}Bo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+dr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}No(n,i){const s=OR[n];return`${this.Fo}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,i,s){const r=Gc();return new Promise((o,l)=>{const c=new W1;c.setWithCredentials(!0),c.listenOnce(K1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Na.NO_ERROR:const f=c.getResponseJson();se(St,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),o(f);break;case Na.TIMEOUT:se(St,`RPC '${e}' ${r} timed out`),l(new he($.DEADLINE_EXCEEDED,"Request time out"));break;case Na.HTTP_ERROR:const p=c.getStatus();if(se(St,`RPC '${e}' ${r} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const R=function(M){const O=M.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(O)>=0?O:$.UNKNOWN}(E.status);l(new he(R,E.message))}else l(new he($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new he($.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{se(St,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(s);se(St,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",u,i,15)})}qo(e,n,i){const s=Gc(),r=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=X1(),l=Y1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Bo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const f=r.join("");se(St,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,E=!1;const R=new PR({Eo:M=>{E?se(St,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(m||(se(St,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),se(St,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},Ao:()=>p.close()}),L=(M,O,C)=>{M.listen(O,k=>{try{C(k)}catch(V){setTimeout(()=>{throw V},0)}})};return L(p,Vr.EventType.OPEN,()=>{E||(se(St,`RPC '${e}' stream ${s} transport opened.`),R.So())}),L(p,Vr.EventType.CLOSE,()=>{E||(E=!0,se(St,`RPC '${e}' stream ${s} transport closed`),R.Do())}),L(p,Vr.EventType.ERROR,M=>{E||(E=!0,Xs(St,`RPC '${e}' stream ${s} transport errored:`,M),R.Do(new he($.UNAVAILABLE,"The operation could not be completed")))}),L(p,Vr.EventType.MESSAGE,M=>{var O;if(!E){const C=M.data[0];Ge(!!C);const k=C,V=(k==null?void 0:k.error)||((O=k[0])===null||O===void 0?void 0:O.error);if(V){se(St,`RPC '${e}' stream ${s} received error:`,V);const z=V.status;let H=function(g){const _=ot[g];if(_!==void 0)return w_(_)}(z),T=V.message;H===void 0&&(H=$.INTERNAL,T="Unknown error status: "+z+" with message "+V.message),E=!0,R.Do(new he(H,T)),p.close()}else se(St,`RPC '${e}' stream ${s} received:`,C),R.vo(C)}}),L(l,Q1.STAT_EVENT,M=>{M.stat===Cu.PROXY?se(St,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Cu.NOPROXY&&se(St,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.bo()},0),R}}function Hc(){return typeof document<"u"?document:null}/**
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
 */function Hl(t){return new FS(t,!0)}/**
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
 */class k_{constructor(e,n,i=1e3,s=1.5,r=6e4){this.li=e,this.timerId=n,this.Qo=i,this.Ko=s,this.$o=r,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-i);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class x_{constructor(e,n,i,s,r,o,l,c){this.li=e,this.Yo=i,this.Zo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new k_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Xo===n&&this.I_(i,s)},i=>{e(()=>{const s=new he($.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(s)})})}I_(e,n){const i=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{i(()=>this.d_(s))}),this.stream.onMessage(s=>{i(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DR extends x_{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=BS(this.serializer,e),i=function(r){if(!("targetChange"in r))return be.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?be.min():o.readTime?Cn(o.readTime):be.min()}(e);return this.listener.R_(n,i)}V_(e){const n={};n.database=Vu(this.serializer),n.addTarget=function(r,o){let l;const c=o.target;if(l=Du(c)?{documents:HS(r,c)}:{query:jS(r,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=b_(r,o.resumeToken);const u=Mu(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(be.min())>0){l.readTime=ol(r,o.snapshotVersion.toTimestamp());const u=Mu(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const i=WS(this.serializer,e);i&&(n.labels=i),this.c_(n)}m_(e){const n={};n.database=Vu(this.serializer),n.removeTarget=e,this.c_(n)}}class LR extends x_{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=GS(e.writeResults,e.commitTime),i=Cn(e.commitTime);return this.listener.y_(i,n)}w_(){const e={};e.database=Vu(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>zS(this.serializer,i))};this.c_(n)}}/**
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
 */class MR extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new he($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Oo(e,ku(n,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new he($.UNKNOWN,r.toString())})}ko(e,n,i,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,ku(n,i),s,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new he($.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class kR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Yn(n),this.C_=!1):se("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class xR{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=r,this.Q_.uo(o=>{i.enqueueAndForget(async()=>{bs(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Re(c);u.k_.add(4),await zo(u),u.K_.set("Unknown"),u.k_.delete(4),await jl(u)}(this))})}),this.K_=new kR(i,s)}}async function jl(t){if(bs(t))for(const e of t.q_)await e(!0)}async function zo(t){for(const e of t.q_)await e(!1)}function V_(t,e){const n=Re(t);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),of(n)?rf(n):pr(n).s_()&&sf(n,e))}function nf(t,e){const n=Re(t),i=pr(n);n.L_.delete(e),i.s_()&&F_(n,e),n.L_.size===0&&(i.s_()?i.a_():bs(n)&&n.K_.set("Unknown"))}function sf(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}pr(t).V_(e)}function F_(t,e){t.U_.xe(e),pr(t).m_(e)}function rf(t){t.U_=new MS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.L_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),pr(t).start(),t.K_.F_()}function of(t){return bs(t)&&!pr(t).i_()&&t.L_.size>0}function bs(t){return Re(t).k_.size===0}function U_(t){t.U_=void 0}async function VR(t){t.K_.set("Online")}async function FR(t){t.L_.forEach((e,n)=>{sf(t,e)})}async function UR(t,e){U_(t),of(t)?(t.K_.O_(e),rf(t)):t.K_.set("Unknown")}async function qR(t,e,n){if(t.K_.set("Online"),e instanceof T_&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const l of r.targetIds)s.L_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.L_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(i){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ll(t,i)}else if(e instanceof ka?t.U_.$e(e):e instanceof v_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(be.min()))try{const i=await M_(t.localStore);n.compareTo(i)>=0&&await function(r,o){const l=r.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=r.L_.get(u);f&&r.L_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=r.L_.get(c);if(!f)return;r.L_.set(c,f.withResumeToken(Et.EMPTY_BYTE_STRING,f.snapshotVersion)),F_(r,c);const p=new wi(f.target,c,u,f.sequenceNumber);sf(r,p)}),r.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(i){se("RemoteStore","Failed to raise snapshot:",i),await ll(t,i)}}async function ll(t,e,n){if(!hr(e))throw e;t.k_.add(1),await zo(t),t.K_.set("Offline"),n||(n=()=>M_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await jl(t)})}function q_(t,e){return e().catch(n=>ll(t,n,e))}async function $l(t){const e=Re(t),n=Fi(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;BR(e);)try{const s=await TR(e.localStore,i);if(s===null){e.B_.length===0&&n.a_();break}i=s.batchId,zR(e,s)}catch(s){await ll(e,s)}B_(e)&&z_(e)}function BR(t){return bs(t)&&t.B_.length<10}function zR(t,e){t.B_.push(e);const n=Fi(t);n.s_()&&n.f_&&n.g_(e.mutations)}function B_(t){return bs(t)&&!Fi(t).i_()&&t.B_.length>0}function z_(t){Fi(t).start()}async function GR(t){Fi(t).w_()}async function HR(t){const e=Fi(t);for(const n of t.B_)e.g_(n.mutations)}async function jR(t,e,n){const i=t.B_.shift(),s=Yd.from(i,e,n);await q_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await $l(t)}async function $R(t,e){e&&Fi(t).f_&&await async function(i,s){if(function(o){return NS(o)&&o!==$.ABORTED}(s.code)){const r=i.B_.shift();Fi(i).__(),await q_(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await $l(i)}}(t,e),B_(t)&&z_(t)}async function Im(t,e){const n=Re(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const i=bs(n);n.k_.add(3),await zo(n),i&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await jl(n)}async function WR(t,e){const n=Re(t);e?(n.k_.delete(2),await jl(n)):e||(n.k_.add(2),await zo(n),n.K_.set("Unknown"))}function pr(t){return t.W_||(t.W_=function(n,i,s){const r=Re(n);return r.b_(),new DR(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Ro:VR.bind(null,t),mo:FR.bind(null,t),po:UR.bind(null,t),R_:qR.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),of(t)?rf(t):t.K_.set("Unknown")):(await t.W_.stop(),U_(t))})),t.W_}function Fi(t){return t.G_||(t.G_=function(n,i,s){const r=Re(n);return r.b_(),new LR(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:GR.bind(null,t),po:$R.bind(null,t),p_:HR.bind(null,t),y_:jR.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await $l(t)):(await t.G_.stop(),t.B_.length>0&&(se("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
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
 */class af{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Pi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,l=new af(e,n,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lf(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),hr(t))return new he($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ws{static emptySet(e){return new Ws(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||ge.comparator(n.key,i.key):(n,i)=>ge.comparator(n.key,i.key),this.keyedMap=Fr(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Ws;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class Em{constructor(){this.z_=new Ze(ge.comparator)}track(e){const n=e.doc.key,i=this.z_.get(n);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(n,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(n):e.type===1&&i.type===2?this.z_=this.z_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):Ae():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,i)=>{e.push(i)}),e}}class nr{constructor(e,n,i,s,r,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new nr(e,n,Ws.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ul(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class KR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class QR{constructor(){this.queries=Am(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,i){const s=Re(n),r=s.queries;s.queries=Am(),r.forEach((o,l)=>{for(const c of l.J_)c.onError(i)})})(this,new he($.ABORTED,"Firestore shutting down"))}}function Am(){return new Ts(t=>c_(t),Ul)}async function YR(t,e){const n=Re(t);let i=3;const s=e.query;let r=n.queries.get(s);r?!r.Y_()&&e.Z_()&&(i=2):(r=new KR,i=e.Z_()?0:1);try{switch(i){case 0:r.H_=await n.onListen(s,!0);break;case 1:r.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=lf(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,r),r.J_.push(e),e.ea(n.onlineState),r.H_&&e.ta(r.H_)&&cf(n)}async function XR(t,e){const n=Re(t),i=e.query;let s=3;const r=n.queries.get(i);if(r){const o=r.J_.indexOf(e);o>=0&&(r.J_.splice(o,1),r.J_.length===0?s=e.Z_()?0:1:!r.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function JR(t,e){const n=Re(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const l of o.J_)l.ta(s)&&(i=!0);o.H_=s}}i&&cf(n)}function ZR(t,e,n){const i=Re(t),s=i.queries.get(e);if(s)for(const r of s.J_)r.onError(n);i.queries.delete(e)}function cf(t){t.X_.forEach(e=>{e.next()})}var Uu,wm;(wm=Uu||(Uu={})).na="default",wm.Cache="cache";class eC{constructor(e,n,i){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new nr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const i=n!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Uu.Cache}}/**
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
 */class G_{constructor(e){this.key=e}}class H_{constructor(e){this.key=e}}class tC{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ne(),this.mutatedKeys=Ne(),this.Va=u_(e),this.ma=new Ws(this.Va)}get fa(){return this.Ea}ga(e,n){const i=n?n.pa:new Em,s=n?n.ma:this.ma;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),E=ql(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),L=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let M=!1;m&&E?m.data.isEqual(E.data)?R!==L&&(i.track({type:3,doc:E}),M=!0):this.ya(m,E)||(i.track({type:2,doc:E}),M=!0,(c&&this.Va(E,c)>0||u&&this.Va(E,u)<0)&&(l=!0)):!m&&E?(i.track({type:0,doc:E}),M=!0):m&&!E&&(i.track({type:1,doc:m}),M=!0,(c||u)&&(l=!0)),M&&(E?(o=o.add(E),r=L?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),i.track({type:1,doc:f})}return{ma:o,pa:i,ss:l,mutatedKeys:r}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){const r=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((f,p)=>function(E,R){const L=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae()}};return L(E)-L(R)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(i),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new nr(this.query,e.ma,r,o,e.mutatedKeys,c===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Em,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ne(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const n=[];return e.forEach(i=>{this.Ra.has(i)||n.push(new H_(i))}),this.Ra.forEach(i=>{e.has(i)||n.push(new G_(i))}),n}va(e){this.Ea=e.Es,this.Ra=Ne();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return nr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class nC{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class iC{constructor(e){this.key=e,this.Fa=!1}}class sC{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ts(l=>c_(l),Ul),this.Oa=new Map,this.Na=new Set,this.Ba=new Ze(ge.comparator),this.La=new Map,this.ka=new Zd,this.qa={},this.Qa=new Map,this.Ka=tr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function rC(t,e,n=!0){const i=Y_(t);let s;const r=i.xa.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.Ca()):s=await j_(i,e,n,!0),s}async function oC(t,e){const n=Y_(t);await j_(n,e,!0,!1)}async function j_(t,e,n,i){const s=await bR(t.localStore,Sn(e)),r=s.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let l;return i&&(l=await aC(t,e,r,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&V_(t.remoteStore,s),l}async function aC(t,e,n,i,s){t.Ua=(p,m,E)=>async function(L,M,O,C){let k=M.view.ga(O);k.ss&&(k=await gm(L.localStore,M.query,!1).then(({documents:T})=>M.view.ga(T,k)));const V=C&&C.targetChanges.get(M.targetId),z=C&&C.targetMismatches.get(M.targetId)!=null,H=M.view.applyChanges(k,L.isPrimaryClient,V,z);return Tm(L,M.targetId,H.ba),H.snapshot}(t,p,m,E);const r=await gm(t.localStore,e,!0),o=new tC(e,r.Es),l=o.ga(r.documents),c=Bo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Tm(t,n,u.ba);const f=new nC(e,n,o);return t.xa.set(e,f),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function lC(t,e,n){const i=Re(t),s=i.xa.get(e),r=i.Oa.get(s.targetId);if(r.length>1)return i.Oa.set(s.targetId,r.filter(o=>!Ul(o,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Fu(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&nf(i.remoteStore,s.targetId),qu(i,s.targetId)}).catch(fr)):(qu(i,s.targetId),await Fu(i.localStore,s.targetId,!0))}async function cC(t,e){const n=Re(t),i=n.xa.get(e),s=n.Oa.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),nf(n.remoteStore,i.targetId))}async function uC(t,e,n){const i=yC(t);try{const s=await function(o,l){const c=Re(o),u=ct.now(),f=l.reduce((E,R)=>E.add(R.key),Ne());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let R=Xn(),L=Ne();return c.hs.getEntries(E,f).next(M=>{R=M,R.forEach((O,C)=>{C.isValidDocument()||(L=L.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,R)).next(M=>{p=M;const O=[];for(const C of l){const k=SS(C,p.get(C.key).overlayedDocument);k!=null&&O.push(new Ki(C.key,k,n_(k.value.mapValue),Rn.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,O,l)}).next(M=>{m=M;const O=M.applyToLocalDocumentSet(p,L);return c.documentOverlayCache.saveOverlays(E,M.batchId,O)})}).then(()=>({batchId:m.batchId,changes:f_(p)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ze(De)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(i,s.batchId,n),await Go(i,s.changes),await $l(i.remoteStore)}catch(s){const r=lf(s,"Failed to persist write");n.reject(r)}}async function $_(t,e){const n=Re(t);try{const i=await wR(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.La.get(r);o&&(Ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ge(o.Fa):s.removedDocuments.size>0&&(Ge(o.Fa),o.Fa=!1))}),await Go(n,i,e)}catch(i){await fr(i)}}function vm(t,e,n){const i=Re(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.xa.forEach((r,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=Re(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&cf(c)}(i.eventManager,e),s.length&&i.Ma.R_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dC(t,e,n){const i=Re(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.La.get(e),r=s&&s.key;if(r){let o=new Ze(ge.comparator);o=o.insert(r,Pt.newNoDocument(r,be.min()));const l=Ne().add(r),c=new Gl(be.min(),new Map,new Ze(De),o,l);await $_(i,c),i.Ba=i.Ba.remove(r),i.La.delete(e),uf(i)}else await Fu(i.localStore,e,!1).then(()=>qu(i,e,n)).catch(fr)}async function fC(t,e){const n=Re(t),i=e.batch.batchId;try{const s=await AR(n.localStore,e);K_(n,i,null),W_(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Go(n,s)}catch(s){await fr(s)}}async function hC(t,e,n){const i=Re(t);try{const s=await function(o,l){const c=Re(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ge(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(i.localStore,e);K_(i,e,n),W_(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Go(i,s)}catch(s){await fr(s)}}function W_(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function K_(t,e,n){const i=Re(t);let s=i.qa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.qa[i.currentUser.toKey()]=s}}function qu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Oa.get(e))t.xa.delete(i),n&&t.Ma.Wa(i,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(i=>{t.ka.containsKey(i)||Q_(t,i)})}function Q_(t,e){t.Na.delete(e.path.canonicalString());const n=t.Ba.get(e);n!==null&&(nf(t.remoteStore,n),t.Ba=t.Ba.remove(e),t.La.delete(n),uf(t))}function Tm(t,e,n){for(const i of n)i instanceof G_?(t.ka.addReference(i.key,e),pC(t,i)):i instanceof H_?(se("SyncEngine","Document no longer in limbo: "+i.key),t.ka.removeReference(i.key,e),t.ka.containsKey(i.key)||Q_(t,i.key)):Ae()}function pC(t,e){const n=e.key,i=n.path.canonicalString();t.Ba.get(n)||t.Na.has(i)||(se("SyncEngine","New document in limbo: "+n),t.Na.add(i),uf(t))}function uf(t){for(;t.Na.size>0&&t.Ba.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ge(nt.fromString(e)),i=t.Ka.next();t.La.set(i,new iC(n)),t.Ba=t.Ba.insert(n,i),V_(t.remoteStore,new wi(Sn(Kd(n.path)),i,"TargetPurposeLimboResolution",kl.oe))}}async function Go(t,e,n){const i=Re(t),s=[],r=[],o=[];i.xa.isEmpty()||(i.xa.forEach((l,c)=>{o.push(i.Ua(c,e,n).then(u=>{var f;if((u||n)&&i.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=tf.zi(c.targetId,u);r.push(p)}}))}),await Promise.all(o),i.Ma.R_(s),await async function(c,u){const f=Re(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(u,m=>B.forEach(m.Wi,E=>f.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>B.forEach(m.Gi,E=>f.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!hr(p))throw p;se("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const E=f.us.get(m),R=E.snapshotVersion,L=E.withLastLimboFreeSnapshotVersion(R);f.us=f.us.insert(m,L)}}}(i.localStore,r))}async function mC(t,e){const n=Re(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const i=await L_(n.localStore,e);n.currentUser=e,function(r,o){r.Qa.forEach(l=>{l.forEach(c=>{c.reject(new he($.CANCELLED,o))})}),r.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Go(n,i.Ts)}}function gC(t,e){const n=Re(t),i=n.La.get(e);if(i&&i.Fa)return Ne().add(i.key);{let s=Ne();const r=n.Oa.get(e);if(!r)return s;for(const o of r){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function Y_(t){const e=Re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dC.bind(null,e),e.Ma.R_=JR.bind(null,e.eventManager),e.Ma.Wa=ZR.bind(null,e.eventManager),e}function yC(t){const e=Re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hC.bind(null,e),e}class cl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return ER(this.persistence,new _R,e.initialUser,this.serializer)}ja(e){return new D_(ef.ei,this.serializer)}za(e){return new RR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cl.provider={build:()=>new cl};class _C extends cl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ge(this.persistence.referenceDelegate instanceof al);const i=this.persistence.referenceDelegate.garbageCollector;return new iR(i,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new D_(i=>al.ei(i,n),this.serializer)}}class Bu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>vm(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=mC.bind(null,this.syncEngine),await WR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QR}()}createDatastore(e){const n=Hl(e.databaseInfo.databaseId),i=function(r){return new NR(r)}(e.databaseInfo);return function(r,o,l,c){return new MR(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,l){return new xR(i,s,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>vm(this.syncEngine,n,0),function(){return _m.p()?new _m:new CR}())}createSyncEngine(e,n){return function(s,r,o,l,c,u,f){const p=new sC(s,r,o,l,c,u);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const r=Re(s);se("RemoteStore","RemoteStore shutting down."),r.k_.add(5),await zo(r),r.Q_.shutdown(),r.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Bu.provider={build:()=>new Bu};/**
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
 */class IC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class EC{constructor(e,n,i,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Rt.UNAUTHENTICATED,this.clientId=Z1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async o=>{se("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(se("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=lf(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await L_(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AC(t);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>Im(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Im(e.remoteStore,s)),t._onlineComponents=e}async function AC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Xs("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new cl)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await jc(t,new _C(void 0));return t._offlineComponents}async function X_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await bm(t,t._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await bm(t,new Bu))),t._onlineComponents}function wC(t){return X_(t).then(e=>e.syncEngine)}async function vC(t){const e=await X_(t),n=e.eventManager;return n.onListen=rC.bind(null,e.syncEngine),n.onUnlisten=lC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cC.bind(null,e.syncEngine),n}function TC(t,e,n={}){const i=new Pi;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const f=new IC({next:m=>{f.eu(),o.enqueueAndForget(()=>XR(r,p));const E=m.docs.has(l);!E&&m.fromCache?u.reject(new he($.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&c&&c.source==="server"?u.reject(new he($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new eC(Kd(l.path),f,{includeMetadataChanges:!0,ua:!0});return YR(r,p)}(await vC(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function J_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Sm=new Map;/**
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
 */function bC(t,e,n){if(!n)throw new he($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SC(t,e,n,i){if(e===!0&&i===!0)throw new he($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rm(t){if(!ge.isDocumentKey(t))throw new he($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function df(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ae()}function gs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new he($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=df(t);throw new he($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Cm{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new he($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new he($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J_((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ff{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cm(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Db;switch(i.type){case"firstParty":return new xb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new he($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Sm.get(n);i&&(se("ComponentProvider","Removing Datastore"),Sm.delete(n),i.terminate())}(this),Promise.resolve()}}function RC(t,e,n,i={}){var s;const r=(t=gs(t,ff))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let l,c;if(typeof i.mockUserToken=="string")l=i.mockUserToken,c=Rt.MOCK_USER;else{l=$v(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new he($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Rt(u)}t._authCredentials=new Lb(new J1(l,c))}}/**
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
 */class hf{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new hf(this.firestore,e,this._query)}}class Kt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new To(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class To extends hf{constructor(e,n,i){super(e,n,Kd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new ge(e))}withConverter(e){return new To(this.firestore,e,this._path)}}function $c(t,e,...n){if(t=dt(t),arguments.length===1&&(e=Z1.newId()),bC("doc","path",e),t instanceof ff){const i=nt.fromString(e,...n);return Rm(i),new Kt(t,null,new ge(i))}{if(!(t instanceof Kt||t instanceof To))throw new he($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(nt.fromString(e,...n));return Rm(i),new Kt(t.firestore,t instanceof To?t.converter:null,new ge(i))}}/**
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
 */class Om{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new k_(this,"async_queue_retry"),this.fu=()=>{const i=Hc();i&&se("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const n=Hc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Pi;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!hr(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw Yn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ru=!1,i))));return this.gu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=af.createAndSchedule(this,e,n,i,r=>this.Su(r));return this.Eu.push(s),s}pu(){this.Au&&Ae()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class Wl extends ff{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Om,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Om(e),this._firestoreClient=void 0,await e}}}function CC(t,e){const n=typeof t=="object"?t:Ld(),i=typeof t=="string"?t:"(default)",s=ws(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Hv("firestore");r&&RC(s,...r)}return s}function Z_(t){if(t._terminated)throw new he($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||OC(t),t._firestoreClient}function OC(t){var e,n,i;const s=t._freezeSettings(),r=function(l,c,u,f){return new Xb(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,J_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new EC(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(Et.fromBase64String(e))}catch(n){throw new he($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ir(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pf{constructor(e){this._methodName=e}}/**
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
 */class mf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
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
 */class gf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,e._values)}}/**
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
 */const PC=/^__.*__$/;class NC{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Ki(e,this.data,this.fieldMask,n,this.fieldTransforms):new qo(e,this.data,n,this.fieldTransforms)}}class eI{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Ki(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class yf{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Fu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:i,Nu:!1});return s.Bu(e),s}Lu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:i,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ul(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(tI(this.Mu)&&PC.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class DC{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Hl(e)}$u(e,n,i,s=!1){return new yf({Mu:e,methodName:n,Ku:i,path:It.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nI(t){const e=t._freezeSettings(),n=Hl(t._databaseId);return new DC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LC(t,e,n,i,s,r={}){const o=t.$u(r.merge||r.mergeFields?2:0,e,n,s);_f("Data must be an object, but it was:",o,i);const l=iI(i,o);let c,u;if(r.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=zu(e,p,n);if(!o.contains(m))throw new he($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);rI(f,m)||f.push(m)}c=new Wt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new NC(new Bt(l),c,u)}class Ql extends pf{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ql}}function MC(t,e,n,i){const s=t.$u(1,e,n);_f("Data must be an object, but it was:",s,i);const r=[],o=Bt.empty();Wi(i,(c,u)=>{const f=If(e,c,n);u=dt(u);const p=s.Lu(f);if(u instanceof Ql)r.push(f);else{const m=Yl(u,p);m!=null&&(r.push(f),o.set(f,m))}});const l=new Wt(r);return new eI(o,l,s.fieldTransforms)}function kC(t,e,n,i,s,r){const o=t.$u(1,e,n),l=[zu(e,i,n)],c=[s];if(r.length%2!=0)throw new he($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)l.push(zu(e,r[m])),c.push(r[m+1]);const u=[],f=Bt.empty();for(let m=l.length-1;m>=0;--m)if(!rI(u,l[m])){const E=l[m];let R=c[m];R=dt(R);const L=o.Lu(E);if(R instanceof Ql)u.push(E);else{const M=Yl(R,L);M!=null&&(u.push(E),f.set(E,M))}}const p=new Wt(u);return new eI(f,p,o.fieldTransforms)}function Yl(t,e){if(sI(t=dt(t)))return _f("Unsupported field value:",e,t),iI(t,e);if(t instanceof pf)return function(i,s){if(!tI(s.Mu))throw s.qu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const l of i){let c=Yl(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=dt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return ES(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=ct.fromDate(i);return{timestampValue:ol(s.serializer,r)}}if(i instanceof ct){const r=new ct(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ol(s.serializer,r)}}if(i instanceof mf)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ir)return{bytesValue:b_(s.serializer,i._byteString)};if(i instanceof Kt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Jd(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof gf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Qd(l.serializer,c)})}}}}}}(i,s);throw s.qu(`Unsupported field value: ${df(i)}`)}(t,e)}function iI(t,e){const n={};return e_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wi(t,(i,s)=>{const r=Yl(s,e.Ou(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function sI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof mf||t instanceof ir||t instanceof Kt||t instanceof pf||t instanceof gf)}function _f(t,e,n){if(!sI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=df(n);throw i==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+i)}}function zu(t,e,n){if((e=dt(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return If(t,e);throw ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const xC=new RegExp("[~\\*/\\[\\]]");function If(t,e,n){if(e.search(xC)>=0)throw ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ul(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new he($.INVALID_ARGUMENT,l+t+c)}function rI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class oI{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(aI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VC extends oI{data(){return super.data()}}function aI(t,e){return typeof e=="string"?If(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}class FC{convertValue(e,n="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Wi(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertVectorValue(e){var n,i,s;const r=(s=(i=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(o=>it(o.doubleValue));return new gf(r)}convertGeoPoint(e){return new mf(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Vl(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Io(e));default:return null}}convertTimestamp(e){const n=ki(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=nt.fromString(e);Ge(N_(i));const s=new Eo(i.get(1),i.get(3)),r=new ge(i.popFirst(5));return s.isEqual(n)||Yn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function UC(t,e,n){let i;return i=t?t.toFirestore(e):e,i}/**
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
 */class qC{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lI extends oI{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new BC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(aI("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class BC extends lI{data(e={}){return super.data(e)}}/**
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
 */function zC(t){t=gs(t,Kt);const e=gs(t.firestore,Wl);return TC(Z_(e),t._key).then(n=>jC(e,t,n))}class GC extends FC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function HC(t,e,n){t=gs(t,Kt);const i=gs(t.firestore,Wl),s=UC(t.converter,e);return cI(i,[LC(nI(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Rn.none())])}function Pm(t,e,n,...i){t=gs(t,Kt);const s=gs(t.firestore,Wl),r=nI(s);let o;return o=typeof(e=dt(e))=="string"||e instanceof Kl?kC(r,"updateDoc",t._key,e,n,i):MC(r,"updateDoc",t._key,e),cI(s,[o.toMutation(t._key,Rn.exists(!0))])}function cI(t,e){return function(i,s){const r=new Pi;return i.asyncQueue.enqueueAndForget(async()=>uC(await wC(i),s,r)),r.promise}(Z_(t),e)}function jC(t,e,n){const i=n.docs.get(e._key),s=new GC(t);return new lI(t,s,e._key,i,new qC(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){dr=s})(cr),Pn(new un("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new Wl(new Mb(i.getProvider("auth-internal")),new Fb(i.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new he($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(u.options.projectId,f)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),tn(Wp,"4.7.6",e),tn(Wp,"4.7.6","esm2017")})();const uI="@firebase/installations",Ef="0.6.12";/**
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
 */const dI=1e4,fI=`w:${Ef}`,hI="FIS_v2",$C="https://firebaseinstallations.googleapis.com/v1",WC=60*60*1e3,KC="installations",QC="Installations";/**
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
 */const YC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ys=new As(KC,QC,YC);function pI(t){return t instanceof hn&&t.code.includes("request-failed")}/**
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
 */function mI({projectId:t}){return`${$C}/projects/${t}/installations`}function gI(t){return{token:t.token,requestStatus:2,expiresIn:JC(t.expiresIn),creationTime:Date.now()}}async function yI(t,e){const i=(await e.json()).error;return ys.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function _I({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function XC(t,{refreshToken:e}){const n=_I(t);return n.append("Authorization",ZC(e)),n}async function II(t){const e=await t();return e.status>=500&&e.status<600?t():e}function JC(t){return Number(t.replace("s","000"))}function ZC(t){return`${hI} ${t}`}/**
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
 */async function eO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=mI(t),s=_I(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:hI,appId:t.appId,sdkVersion:fI},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await II(()=>fetch(i,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:gI(u.authToken)}}else throw await yI("Create Installation",c)}/**
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
 */function EI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function tO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nO=/^[cdef][\w-]{21}$/,Gu="";function iO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=sO(t);return nO.test(n)?n:Gu}catch{return Gu}}function sO(t){return tO(t).substr(0,22)}/**
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
 */function Xl(t){return`${t.appName}!${t.appId}`}/**
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
 */const AI=new Map;function wI(t,e){const n=Xl(t);vI(n,e),rO(n,e)}function vI(t,e){const n=AI.get(t);if(n)for(const i of n)i(e)}function rO(t,e){const n=oO();n&&n.postMessage({key:t,fid:e}),aO()}let as=null;function oO(){return!as&&"BroadcastChannel"in self&&(as=new BroadcastChannel("[Firebase] FID Change"),as.onmessage=t=>{vI(t.data.key,t.data.fid)}),as}function aO(){AI.size===0&&as&&(as.close(),as=null)}/**
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
 */const lO="firebase-installations-database",cO=1,_s="firebase-installations-store";let Wc=null;function Af(){return Wc||(Wc=o1(lO,cO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_s)}}})),Wc}async function dl(t,e){const n=Xl(t),s=(await Af()).transaction(_s,"readwrite"),r=s.objectStore(_s),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&wI(t,e.fid),e}async function TI(t){const e=Xl(t),i=(await Af()).transaction(_s,"readwrite");await i.objectStore(_s).delete(e),await i.done}async function Jl(t,e){const n=Xl(t),s=(await Af()).transaction(_s,"readwrite"),r=s.objectStore(_s),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&wI(t,l.fid),l}/**
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
 */async function wf(t){let e;const n=await Jl(t.appConfig,i=>{const s=uO(i),r=dO(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Gu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uO(t){const e=t||{fid:iO(),registrationStatus:0};return bI(e)}function dO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ys.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=fO(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:hO(t)}:{installationEntry:e}}async function fO(t,e){try{const n=await eO(t,e);return dl(t.appConfig,n)}catch(n){throw pI(n)&&n.customData.serverCode===409?await TI(t.appConfig):await dl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function hO(t){let e=await Nm(t.appConfig);for(;e.registrationStatus===1;)await EI(100),e=await Nm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await wf(t);return i||n}return e}function Nm(t){return Jl(t,e=>{if(!e)throw ys.create("installation-not-found");return bI(e)})}function bI(t){return pO(t)?{fid:t.fid,registrationStatus:0}:t}function pO(t){return t.registrationStatus===1&&t.registrationTime+dI<Date.now()}/**
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
 */async function mO({appConfig:t,heartbeatServiceProvider:e},n){const i=gO(t,n),s=XC(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:fI,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await II(()=>fetch(i,l));if(c.ok){const u=await c.json();return gI(u)}else throw await yI("Generate Auth Token",c)}function gO(t,{fid:e}){return`${mI(t)}/${e}/authTokens:generate`}/**
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
 */async function vf(t,e=!1){let n;const i=await Jl(t.appConfig,r=>{if(!SI(r))throw ys.create("not-registered");const o=r.authToken;if(!e&&IO(o))return r;if(o.requestStatus===1)return n=yO(t,e),r;{if(!navigator.onLine)throw ys.create("app-offline");const l=AO(r);return n=_O(t,l),l}});return n?await n:i.authToken}async function yO(t,e){let n=await Dm(t.appConfig);for(;n.authToken.requestStatus===1;)await EI(100),n=await Dm(t.appConfig);const i=n.authToken;return i.requestStatus===0?vf(t,e):i}function Dm(t){return Jl(t,e=>{if(!SI(e))throw ys.create("not-registered");const n=e.authToken;return wO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function _O(t,e){try{const n=await mO(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await dl(t.appConfig,i),n}catch(n){if(pI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await TI(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await dl(t.appConfig,i)}throw n}}function SI(t){return t!==void 0&&t.registrationStatus===2}function IO(t){return t.requestStatus===2&&!EO(t)}function EO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+WC}function AO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function wO(t){return t.requestStatus===1&&t.requestTime+dI<Date.now()}/**
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
 */async function vO(t){const e=t,{installationEntry:n,registrationPromise:i}=await wf(e);return i?i.catch(console.error):vf(e).catch(console.error),n.fid}/**
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
 */async function TO(t,e=!1){const n=t;return await bO(n),(await vf(n,e)).token}async function bO(t){const{registrationPromise:e}=await wf(t);e&&await e}/**
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
 */function SO(t){if(!t||!t.options)throw Kc("App Configuration");if(!t.name)throw Kc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Kc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Kc(t){return ys.create("missing-app-config-values",{valueName:t})}/**
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
 */const RI="installations",RO="installations-internal",CO=t=>{const e=t.getProvider("app").getImmediate(),n=SO(e),i=ws(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},OO=t=>{const e=t.getProvider("app").getImmediate(),n=ws(e,RI).getImmediate();return{getId:()=>vO(n),getToken:s=>TO(n,s)}};function PO(){Pn(new un(RI,CO,"PUBLIC")),Pn(new un(RO,OO,"PRIVATE"))}PO();tn(uI,Ef);tn(uI,Ef,"esm2017");/**
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
 */const fl="analytics",NO="firebase_id",DO="origin",LO=60*1e3,MO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tf="https://www.googletagmanager.com/gtag/js";/**
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
 */const zt=new Nl("@firebase/analytics");/**
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
 */const kO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qt=new As("analytics","Analytics",kO);/**
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
 */function xO(t){if(!t.startsWith(Tf)){const e=Qt.create("invalid-gtag-resource",{gtagURL:t});return zt.warn(e.message),""}return t}function CI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function VO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function FO(t,e){const n=VO("firebase-js-sdk-policy",{createScriptURL:xO}),i=document.createElement("script"),s=`${Tf}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function UO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function qO(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await CI(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){zt.error(l)}t("config",s,r)}async function BO(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await CI(n);for(const c of o){const u=l.find(p=>p.measurementId===c),f=u&&e[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){zt.error(r)}}function zO(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[l,c]=o;await BO(t,e,n,l,c)}else if(r==="config"){const[l,c]=o;await qO(t,e,n,i,l,c)}else if(r==="consent"){const[l,c]=o;t("consent",l,c)}else if(r==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){zt.error(l)}}return s}function GO(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=zO(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function HO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Tf)&&n.src.includes(t))return n;return null}/**
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
 */const jO=30,$O=1e3;class WO{constructor(e={},n=$O){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const OI=new WO;function KO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function QO(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:KO(i)},r=MO.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function YO(t,e=OI,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Qt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ZO;return setTimeout(async()=>{l.abort()},LO),PI({appId:i,apiKey:s,measurementId:r},o,l,e)}async function PI(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=OI){var r;const{appId:o,measurementId:l}=t;try{await XO(i,e)}catch(c){if(l)return zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await QO(t);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!JO(u)){if(s.deleteThrottleMetadata(o),l)return zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw c}const f=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?_p(n,s.intervalMillis,jO):_p(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,p),zt.debug(`Calling attemptFetch again in ${f} millis`),PI(t,p,i,s)}}function XO(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function JO(t){if(!(t instanceof hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ZO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function eP(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
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
 */async function tP(){if(Pd())try{await Nd()}catch(t){return zt.warn(Qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return zt.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nP(t,e,n,i,s,r,o){var l;const c=YO(t);c.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&zt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>zt.error(E)),e.push(c);const u=tP().then(E=>{if(E)return i.getId()}),[f,p]=await Promise.all([c,u]);HO(r)||FO(r,f.measurementId),s("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[DO]="firebase",m.update=!0,p!=null&&(m[NO]=p),s("config",f.measurementId,m),f.measurementId}/**
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
 */class iP{constructor(e){this.app=e}_delete(){return delete Zr[this.app.options.appId],Promise.resolve()}}let Zr={},Lm=[];const Mm={};let Qc="dataLayer",sP="gtag",km,NI,xm=!1;function rP(){const t=[];if(Od()&&t.push("This is a browser extension environment."),i1()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});zt.warn(n.message)}}function oP(t,e,n){rP();const i=t.options.appId;if(!i)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(Zr[i]!=null)throw Qt.create("already-exists",{id:i});if(!xm){UO(Qc);const{wrappedGtag:r,gtagCore:o}=GO(Zr,Lm,Mm,Qc,sP);NI=r,km=o,xm=!0}return Zr[i]=nP(t,Lm,Mm,e,km,Qc,n),new iP(t)}function aP(t=Ld()){t=dt(t);const e=ws(t,fl);return e.isInitialized()?e.getImmediate():lP(t)}function lP(t,e={}){const n=ws(t,fl);if(n.isInitialized()){const s=n.getImmediate();if(mo(e,n.getOptions()))return s;throw Qt.create("already-initialized")}return n.initialize({options:e})}async function cP(){if(Od()||!i1()||!Pd())return!1;try{return await Nd()}catch{return!1}}function uP(t,e,n,i){t=dt(t),eP(NI,Zr[t.app.options.appId],e,n,i).catch(s=>zt.error(s))}const Vm="@firebase/analytics",Fm="0.10.11";function dP(){Pn(new un(fl,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return oP(i,s,n)},"PUBLIC")),Pn(new un("analytics-internal",t,"PRIVATE")),tn(Vm,Fm),tn(Vm,Fm,"esm2017");function t(e){try{const n=e.getProvider(fl).getImmediate();return{logEvent:(i,s,r)=>uP(n,i,s,r)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}dP();const fP={apiKey:"AIzaSyA-U1ASN2yTDfutUHqblUO1HMyyvLhOBg4",authDomain:"mediquix-fbc0b.firebaseapp.com",projectId:"mediquix-fbc0b",storageBucket:"mediquix-fbc0b.firebasestorage.app",messagingSenderId:"830867953772",appId:"1:830867953772:web:3ce4a6166c55f49b0aa049",measurementId:"G-Q35EFETSY8"},bf=a1(fP);cP().then(t=>{t?(aP(bf),console.log("Firebase Analytics initialized.")):console.warn("Firebase Analytics is not supported in this environment.")}).catch(t=>{console.error("Erro ao inicializar o Analytics:",t)});const eo=Pb(bf),Yc=CC(bf);g0(eo,V1).then(()=>{console.log("Auth persistence set to local.")}).catch(t=>{console.error("Error setting auth persistence:",t)});const hP=t=>{I0(eo,e=>{e?(console.log("User is logged in."),t(e)):(console.log("No user is logged in."),t(null))})},Ni=Mo("settings",{state:()=>({selectedSpecialty:"all",selectedDifficulty:"all"}),actions:{setSpecialty(t){this.selectedSpecialty=t},setDifficulty(t){this.selectedDifficulty=t}}}),DI=Mo("auth",{state:()=>({user:null,initialized:!1}),getters:{userSettings:t=>t.user&&t.user.settings?t.user.settings:null},actions:{initAuthState(){hP(t=>{this.user=t,this.initialized=!0,t&&this.fetchUserSettings()})},async signup(t,e){try{const n=await p0(eo,t,e);this.user=n.user;const i={username:t.split("@")[0],email:t,custom_vocabulary:[],default_difficulty:1,default_speciality:0};await HC($c(Yc,"users",this.user.uid),i),this.user.settings=i;const s=Ni();s.setSpecialty(i.default_speciality),s.setDifficulty(i.default_difficulty)}catch(n){throw console.error("Erro no signup:",n.message),n}},async login(t,e){try{const n=await m0(eo,t,e);this.user=n.user,console.log("this.user",this.user),await this.fetchUserSettings()}catch(n){throw console.error("Erro no login:",n.message),n}},async logout(){try{await E0(eo),this.user=null}catch(t){throw console.error("Erro no logout:",t.message),t}},async fetchUserSettings(){try{const t=$c(Yc,"users",this.user.uid),e=await zC(t);if(console.log("docSnap",e),e.exists()){let n=e.data();console.log("settingsData",n);const i={username:this.user.email.split("@")[0],email:this.user.email,default_difficulty:1,default_speciality:0,custom_vocabulary:[]};let s=!1;for(const o in i)o in n||(n[o]=i[o],s=!0);s&&await Pm(t,n),this.user.settings=n,n.username&&(this.user.username=n.username);const r=Ni();r.setSpecialty(n.default_speciality??"all"),r.setDifficulty(n.default_difficulty??"all")}}catch(t){console.error("Erro fetching user settings:",t.message)}},async updateUserSettings(t){try{const e=$c(Yc,"users",this.user.uid);await Pm(e,t),this.user.settings={...this.user.settings,...t},t.username&&(this.user.username=t.username);const n=Ni();n.setSpecialty(t.default_speciality??n.selectedSpecialty),n.setDifficulty(t.default_difficulty??n.selectedDifficulty)}catch(e){throw console.error("Erro updating user settings:",e.message),e}}}}),LI=["Anatomia","Fisiologia","Biologia Celular","Histologia","Neurologia","Hematologia","Endocrinologia","Cardiologia","Pneumologia","Gastroenterologia","Nefrologia","Oncologia","Dermatologia","Psiquiatria","Obstetrícia","Ginecologia","Pediatria","Ortopedia","Radiologia","Cirurgia","Infectologia","Imunologia","Patologia","Anestesiologia","Hepatologia","Emergência Médica","Farmacologia","Genética","Microbiologia","Bioquímica"],pP=[{word:"AAS",clue:"Sigla para ácido acetilsalicílico.",specialties:[26,7],difficulty:1},{word:"ABASIA",clue:"Incapacidade de andar devido à falta de coordenação muscular.",specialties:[4,17],difficulty:2},{word:"ABDUÇÃO",clue:"Movimento que afasta um membro do plano médio do corpo.",specialties:[1,17],difficulty:1},{word:"ABCESSO",clue:"Acúmulo de pus em uma cavidade formada por tecido destruído.",specialties:[19,20],difficulty:1},{word:"PERIOSTEO",clue:"Membrana que reveste os ossos.",specialties:[0],difficulty:2},{word:"SARCÔMERO",clue:"Unidade funcional do músculo esquelético.",specialties:[0],difficulty:3},{word:"SINOVIAL",clue:"Tipo de articulação móvel com líquido lubrificante.",specialties:[0],difficulty:2},{word:"MENISCO",clue:"Estrutura cartilaginosa no joelho.",specialties:[0,17],difficulty:2},{word:"FÁSCIA",clue:"Tecido conjuntivo que envolve músculos.",specialties:[0],difficulty:3},{word:"OSMOSE",clue:"Movimento de água através de uma membrana semipermeável.",specialties:[1],difficulty:1},{word:"NEFRON",clue:"Unidade funcional do rim.",specialties:[1,10],difficulty:2},{word:"POTENCIAL DE AÇÃO",clue:"Impulso elétrico em neurônios.",specialties:[1,4],difficulty:2},{word:"SISTOLE",clue:"Fase de contração do coração.",specialties:[1,7],difficulty:2},{word:"DIASTOLE",clue:"Fase de relaxamento do coração.",specialties:[1,7],difficulty:2},{word:"LISOSSOMO",clue:"Organela que realiza a digestão intracelular.",specialties:[2],difficulty:2},{word:"CITOESQUELETO",clue:"Estrutura que dá suporte à célula.",specialties:[2],difficulty:2},{word:"APARELHO DE GOLGI",clue:"Organela envolvida na modificação de proteínas.",specialties:[2],difficulty:2},{word:"ENDOCITOSE",clue:"Processo de entrada de materiais na célula.",specialties:[2],difficulty:3},{word:"EXOCITOSE",clue:"Processo de liberação de materiais da célula.",specialties:[2],difficulty:3},{word:"TECIDO EPITELIAL",clue:"Revestimento interno e externo do corpo.",specialties:[3],difficulty:1},{word:"TECIDO CONJUNTIVO",clue:"Tecido que suporta e conecta outros tecidos.",specialties:[3],difficulty:1},{word:"TECIDO MUSCULAR",clue:"Tecido responsável pelo movimento.",specialties:[3],difficulty:1},{word:"TECIDO NERVOSO",clue:"Tecido que transmite impulsos elétricos.",specialties:[3],difficulty:1},{word:"FIBROBLASTO",clue:"Célula que produz fibras no tecido conjuntivo.",specialties:[3],difficulty:2},{word:"ASTRÓCITO",clue:"Célula glial do sistema nervoso central.",specialties:[4],difficulty:3},{word:"MICROGLIA",clue:"Células imunológicas do sistema nervoso.",specialties:[4,21],difficulty:3},{word:"ESCLEROSE MÚLTIPLA",clue:"Doença autoimune que afeta a mielina.",specialties:[4,21],difficulty:2},{word:"NEUROTRANSMISSOR",clue:"Substância que transmite sinais entre neurônios.",specialties:[4],difficulty:2},{word:"SINAPSE QUÍMICA",clue:"Comunicação entre neurônios via neurotransmissores.",specialties:[4],difficulty:2},{word:"FIBRINOGÊNIO",clue:"Proteína plasmática essencial na coagulação.",specialties:[5],difficulty:3},{word:"HEMATOPOIESE",clue:"Formação de células sanguíneas na medula óssea.",specialties:[5],difficulty:2},{word:"HEMOGLOBINA",clue:"Proteína nos glóbulos vermelhos que transporta oxigênio.",specialties:[5],difficulty:1},{word:"HEMÓLISE",clue:"Destruição de glóbulos vermelhos.",specialties:[5],difficulty:2},{word:"PLAQUETA",clue:"Fragmento celular envolvido na coagulação.",specialties:[5],difficulty:1},{word:"GLÂNDULA PITUITÁRIA",clue:"Glândula mestre que regula outras glândulas.",specialties:[6],difficulty:2},{word:"GLÂNDULA SUPRARRENAL",clue:"Glândula que produz adrenalina e cortisol.",specialties:[6],difficulty:2},{word:"GLÂNDULA TIREOIDE",clue:"Glândula que regula o metabolismo.",specialties:[6],difficulty:1},{word:"PARATORMÔNIO",clue:"Hormônio que regula o cálcio no sangue.",specialties:[6],difficulty:3},{word:"MELATONINA",clue:"Hormônio envolvido no ciclo sono-vigília.",specialties:[6],difficulty:2},{word:"ELETROCARDIOGRAMA",clue:"Exame que registra a atividade elétrica do coração.",specialties:[7,18],difficulty:2},{word:"CATETERISMO",clue:"Procedimento para examinar vasos cardíacos.",specialties:[7],difficulty:2},{word:"ANGIOPLASTIA",clue:"Procedimento para desobstruir artérias coronárias.",specialties:[7],difficulty:2},{word:"ENDOCARDITE",clue:"Inflamação do revestimento interno do coração.",specialties:[7,20],difficulty:3},{word:"PERICARDITE",clue:"Inflamação do pericárdio.",specialties:[7,20],difficulty:3},{word:"BRONQUIECTASIA",clue:"Dilatação anormal dos brônquios.",specialties:[8],difficulty:3},{word:"FIBROSE PULMONAR",clue:"Cicatrização do tecido pulmonar.",specialties:[8],difficulty:2},{word:"APNEIA",clue:"Interrupção temporária da respiração.",specialties:[8],difficulty:1},{word:"ESPIRÔMETRIA",clue:"Exame que mede volumes pulmonares.",specialties:[8],difficulty:2},{word:"HEMOPTISE",clue:"Expectoração de sangue pelo trato respiratório.",specialties:[8],difficulty:3},{word:"COLITE",clue:"Inflamação do cólon.",specialties:[9],difficulty:2},{word:"ENTERITE",clue:"Inflamação do intestino delgado.",specialties:[9],difficulty:2},{word:"CONSTIPAÇÃO",clue:"Dificuldade para evacuar.",specialties:[9],difficulty:1},{word:"DIARRÉIA",clue:"Evacuações frequentes e líquidas.",specialties:[9],difficulty:1},{word:"HEMORRÓIDA",clue:"Dilatação das veias anais.",specialties:[9],difficulty:1},{word:"UREMIA",clue:"Acúmulo de ureia no sangue.",specialties:[10],difficulty:2},{word:"POLACIÚRIA",clue:"Aumento da frequência urinária.",specialties:[10],difficulty:2},{word:"ANÚRIA",clue:"Ausência de produção de urina.",specialties:[10],difficulty:2},{word:"OLIGÚRIA",clue:"Redução do volume urinário.",specialties:[10],difficulty:2},{word:"PIONEFROSE",clue:"Acúmulo de pus nos rins.",specialties:[10,20],difficulty:3},{word:"APLASIA",clue:"Falha no desenvolvimento de um órgão.",specialties:[11,22],difficulty:3},{word:"NEOPLASIA",clue:"Crescimento anormal de células.",specialties:[11],difficulty:2},{word:"CITOLOGIA",clue:"Estudo das células.",specialties:[11,2],difficulty:2},{word:"ONCOGENE",clue:"Gene que pode causar câncer.",specialties:[11,27],difficulty:3},{word:"QUIMIOTERAPIA",clue:"Tratamento com drogas anticancerígenas.",specialties:[11,26],difficulty:2},{word:"ALOPECIA",clue:"Perda de cabelo.",specialties:[12],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação da pele.",specialties:[12],difficulty:2},{word:"MICOSE",clue:"Infecção fúngica na pele.",specialties:[12,28],difficulty:1},{word:"DERMATOFITOSE",clue:"Infecção cutânea por fungos dermatófitos.",specialties:[12,28],difficulty:3},{word:"HERPES",clue:"Infecção viral com lesões na pele.",specialties:[12,20],difficulty:1},{word:"TRANSTORNO OBSESSIVO COMPULSIVO",clue:"Distúrbio com pensamentos obsessivos e ações repetitivas.",specialties:[13],difficulty:3},{word:"AUTISMO",clue:"Transtorno do desenvolvimento que afeta comunicação.",specialties:[13],difficulty:2},{word:"DEMÊNCIA",clue:"Declínio progressivo das funções cognitivas.",specialties:[13],difficulty:2},{word:"DELÍRIO",clue:"Crença falsa mantida apesar de evidências contrárias.",specialties:[13],difficulty:2},{word:"TRANSTORNO DE PÂNICO",clue:"Crises súbitas de medo intenso.",specialties:[13],difficulty:2},{word:"PLACENTA",clue:"Órgão que conecta mãe e feto.",specialties:[14],difficulty:1},{word:"PRÉ-ECLÂMPSIA",clue:"Complicação da gravidez com hipertensão.",specialties:[14],difficulty:2},{word:"AMNIOSSESE",clue:"Procedimento para coletar líquido amniótico.",specialties:[14],difficulty:3},{word:"MASTITE",clue:"Inflamação da mama.",specialties:[15],difficulty:2},{word:"CLIMATÉRIO",clue:"Transição para a menopausa.",specialties:[15],difficulty:2},{word:"FONTANELA",clue:"Área mole no crânio de bebês.",specialties:[16],difficulty:2},{word:"ICTERÍCIA NEONATAL",clue:"Amarelecimento da pele em recém-nascidos.",specialties:[16],difficulty:2},{word:"DESIDRATAÇÃO",clue:"Perda excessiva de líquidos corporais.",specialties:[16],difficulty:1},{word:"ESCARLATINA",clue:"Doença bacteriana com febre e erupções.",specialties:[16,20],difficulty:3},{word:"SÍNDROME DE DOWN",clue:"Trissomia do cromossomo 21.",specialties:[16,27],difficulty:2},{word:"TORÇÃO",clue:"Lesão causada por rotação excessiva.",specialties:[17],difficulty:1},{word:"LUXAÇÃO",clue:"Deslocamento de um osso da articulação.",specialties:[17],difficulty:2},{word:"TENDINITE",clue:"Inflamação de um tendão.",specialties:[17],difficulty:1},{word:"BURSITE",clue:"Inflamação da bursa articular.",specialties:[17],difficulty:2},{word:"CIFOSE",clue:"Curvatura excessiva da coluna torácica.",specialties:[17],difficulty:2},{word:"CINTILOGRAFIA",clue:"Exame que usa substâncias radioativas.",specialties:[18],difficulty:3},{word:"PET SCAN",clue:"Tomografia por emissão de pósitrons.",specialties:[18],difficulty:3},{word:"CONTRASTE",clue:"Substância usada para melhorar imagens radiológicas.",specialties:[18],difficulty:2},{word:"ANGIOGRAFIA",clue:"Exame dos vasos sanguíneos.",specialties:[18],difficulty:2},{word:"RADIAÇÃO IONIZANTE",clue:"Energia que pode remover elétrons de átomos.",specialties:[18],difficulty:3},{word:"LAPAROTOMIA",clue:"Abertura cirúrgica da cavidade abdominal.",specialties:[19],difficulty:2},{word:"TORACOTOMIA",clue:"Abertura cirúrgica da cavidade torácica.",specialties:[19],difficulty:2},{word:"COLOSTOMIA",clue:"Abertura do cólon na parede abdominal.",specialties:[19],difficulty:3},{word:"HEMOSTASIA",clue:"Parada de um sangramento.",specialties:[19],difficulty:2},{word:"DEBRIDAMENTO",clue:"Remoção de tecido morto ou infectado.",specialties:[19],difficulty:2},{word:"EPIDEMIA",clue:"Surto de doença em uma região.",specialties:[20],difficulty:1},{word:"PANDEMIA",clue:"Epidemia que se espalha globalmente.",specialties:[20],difficulty:1},{word:"ENDÊMICO",clue:"Doença presente constantemente em uma região.",specialties:[20],difficulty:2},{word:"ZOONOSE",clue:"Doença transmissível de animais para humanos.",specialties:[20],difficulty:2},{word:"QUARENTENA",clue:"Isolamento para prevenir a propagação de doenças.",specialties:[20],difficulty:1},{word:"GLOBULINA",clue:"Proteína plasmática do sangue.",specialties:[5,29],difficulty:2},{word:"FAGOCITOSE",clue:"Processo de ingestão de partículas por células.",specialties:[2,21],difficulty:2},{word:"ANTICORPO",clue:"Proteína produzida pelo sistema imunológico.",specialties:[21,5],difficulty:1},{word:"HORMÔNIO",clue:"Substância química que regula funções no organismo.",specialties:[6,1],difficulty:1},{word:"LINFOCITO",clue:"Tipo de glóbulo branco importante na imunidade.",specialties:[5,21],difficulty:2},{word:"PROTEASE",clue:"Enzima que digere proteínas.",specialties:[29,9],difficulty:2},{word:"GLICÓLISE",clue:"Via metabólica que quebra glicose.",specialties:[29,1],difficulty:3},{word:"HEPATÓCITO",clue:"Célula funcional do fígado.",specialties:[9,24],difficulty:2},{word:"TRIGLICERÍDEO",clue:"Tipo de gordura encontrada no sangue.",specialties:[29,7],difficulty:2},{word:"QUERATINA",clue:"Proteína encontrada em cabelos e unhas.",specialties:[12,29],difficulty:1},{word:"VACINA",clue:"Preparação que estimula a resposta imune.",specialties:[21,26],difficulty:1},{word:"ENZIMA",clue:"Proteína que acelera reações químicas.",specialties:[29],difficulty:1},{word:"NEURITE",clue:"Inflamação de um nervo.",specialties:[4,20],difficulty:2},{word:"ALERGIA",clue:"Resposta exagerada do sistema imunológico.",specialties:[21,12],difficulty:1},{word:"ESPLENOMEGALIA",clue:"Aumento do baço.",specialties:[5,21],difficulty:3},{word:"GASTRINA",clue:"Hormônio que estimula a secreção gástrica.",specialties:[6,9],difficulty:2},{word:"PEPSINA",clue:"Enzima que digere proteínas no estômago.",specialties:[29,9],difficulty:2},{word:"CELULITE",clue:"Infecção bacteriana da pele e tecidos subcutâneos.",specialties:[12,20],difficulty:2},{word:"SEROTONINA",clue:"Neurotransmissor que regula humor.",specialties:[4,13],difficulty:2},{word:"SISTEMA LÍMBICO",clue:"Conjunto de estruturas cerebrais relacionadas às emoções.",specialties:[4,13],difficulty:3},{word:"FÍGADO",clue:"Órgão responsável por diversas funções metabólicas.",specialties:[9,24],difficulty:1},{word:"PANCREAS",clue:"Órgão que produz insulina e enzimas digestivas.",specialties:[6,9],difficulty:1},{word:"TESTOSTERONA",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:1},{word:"ESTROGÊNIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"CATECOLAMINA",clue:"Hormônios como adrenalina e noradrenalina.",specialties:[6,1],difficulty:2},{word:"MUTAÇÃO",clue:"Alteração no material genético.",specialties:[27,11],difficulty:2},{word:"CARCINOGÊNESE",clue:"Processo de formação do câncer.",specialties:[11,22],difficulty:3},{word:"HEMATOCRITO",clue:"Percentual de glóbulos vermelhos no sangue.",specialties:[5],difficulty:2},{word:"BILIRRUBINA",clue:"Pigmento resultante da degradação de hemoglobina.",specialties:[5,24],difficulty:2},{word:"ANABOLISMO",clue:"Processo de construção de moléculas complexas.",specialties:[1,29],difficulty:2},{word:"CATABOLISMO",clue:"Processo de quebra de moléculas complexas.",specialties:[1,29],difficulty:2},{word:"PLASMA",clue:"Parte líquida do sangue.",specialties:[5],difficulty:1},{word:"SÍNDROME METABÓLICA",clue:"Conjunto de fatores de risco cardiovascular.",specialties:[7,6],difficulty:3},{word:"HIPOTIREOIDISMO",clue:"Produção insuficiente de hormônios tireoidianos.",specialties:[6],difficulty:2},{word:"HIPERTIREOIDISMO",clue:"Produção excessiva de hormônios tireoidianos.",specialties:[6],difficulty:2},{word:"FARINGITE",clue:"Inflamação da faringe.",specialties:[8,20],difficulty:1},{word:"LARINGITE",clue:"Inflamação da laringe.",specialties:[8,20],difficulty:1},{word:"BRADICARDIA",clue:"Frequência cardíaca abaixo do normal.",specialties:[7],difficulty:2},{word:"EDEMA",clue:"Acúmulo de líquido nos tecidos.",specialties:[10,7],difficulty:1},{word:"CHOQUE",clue:"Insuficiência circulatória aguda.",specialties:[25,7],difficulty:2},{word:"HEMOSTASIA",clue:"Processo de parada de sangramento.",specialties:[5,19],difficulty:2},{word:"ANGIOGÊNESE",clue:"Formação de novos vasos sanguíneos.",specialties:[22,11],difficulty:3},{word:"TROMBOSE",clue:"Formação de coágulo dentro de um vaso sanguíneo.",specialties:[5,7],difficulty:2},{word:"EMBOLIA",clue:"Obstrução de vaso por substância estranha.",specialties:[7,20],difficulty:2},{word:"ANAFILAXIA",clue:"Reação alérgica grave e generalizada.",specialties:[21,25],difficulty:2},{word:"PLASMÓCITO",clue:"Célula que produz anticorpos.",specialties:[5,21],difficulty:3},{word:"ELETROLÍTICO",clue:"Referente a íons em solução corporal.",specialties:[1,29],difficulty:2},{word:"RETINA",clue:"Camada sensível à luz no olho.",specialties:[4],difficulty:1},{word:"CÓCLEA",clue:"Estrutura auditiva no ouvido interno.",specialties:[4],difficulty:2},{word:"ENDOTÉLIO",clue:"Revestimento interno dos vasos sanguíneos.",specialties:[3,7],difficulty:2},{word:"PERITÔNIO",clue:"Membrana que reveste a cavidade abdominal.",specialties:[0,9],difficulty:2},{word:"GLÂNDULA",clue:"Órgão que secreta substâncias.",specialties:[6,3],difficulty:1},{word:"HIDRATAÇÃO",clue:"Processo de reposição de líquidos corporais.",specialties:[25,16],difficulty:1},{word:"ACIDEMIA",clue:"Acidez excessiva do sangue.",specialties:[10,29],difficulty:3},{word:"CETOACIDOSE",clue:"Acúmulo de corpos cetônicos e acidez sanguínea.",specialties:[6,29],difficulty:3},{word:"ANTÍGENO",clue:"Substância que provoca resposta imune.",specialties:[21],difficulty:2},{word:"LINFA",clue:"Líquido que circula nos vasos linfáticos.",specialties:[5,21],difficulty:2},{word:"GANGLIO LINFÁTICO",clue:"Estrutura que filtra a linfa.",specialties:[21],difficulty:2},{word:"APENDICITE",clue:"Inflamação do apêndice vermiforme.",specialties:[9,20],difficulty:1},{word:"HEPATOMEGALIA",clue:"Aumento do fígado.",specialties:[9,24],difficulty:2},{word:"QUILO",clue:"Líquido leitoso formado durante a digestão.",specialties:[9,21],difficulty:3},{word:"BEXIGA",clue:"Órgão que armazena urina.",specialties:[10],difficulty:1},{word:"URETRA",clue:"Canal que conduz a urina para o exterior.",specialties:[10],difficulty:1},{word:"GLICOGÊNIO",clue:"Polissacarídeo de reserva energética.",specialties:[29,1],difficulty:2},{word:"MIELINA",clue:"Camada que envolve axônios neurais.",specialties:[4],difficulty:2},{word:"NEURÓGLIA",clue:"Células de suporte no sistema nervoso.",specialties:[4],difficulty:2},{word:"EQUILÍBRIO ÁCIDO-BASE",clue:"Manutenção do pH corporal.",specialties:[1,29],difficulty:3},{word:"PAPILA DÉRMICA",clue:"Estrutura que forma impressões digitais.",specialties:[12,3],difficulty:3},{word:"SEBO",clue:"Substância oleosa produzida pelas glândulas sebáceas.",specialties:[12],difficulty:1},{word:"ALVEÓLO",clue:"Estrutura pulmonar onde ocorrem trocas gasosas.",specialties:[8],difficulty:1},{word:"PLEURA",clue:"Membrana que reveste os pulmões.",specialties:[8],difficulty:2},{word:"MÚSCULO ESQUELÉTICO",clue:"Tipo de músculo ligado aos ossos.",specialties:[17,3],difficulty:1},{word:"MÚSCULO LISO",clue:"Tipo de músculo encontrado em órgãos viscerais.",specialties:[1,3],difficulty:1},{word:"MÚSCULO CARDÍACO",clue:"Músculo que compõe o coração.",specialties:[7,3],difficulty:1},{word:"PRÓSTATA",clue:"Glândula masculina que produz parte do sêmen.",specialties:[15],difficulty:1},{word:"NEURULAÇÃO",clue:"Processo de formação do tubo neural no embrião.",specialties:[4,14],difficulty:3},{word:"BLASTÓCITO",clue:"Estágio embrionário após a mórula.",specialties:[14],difficulty:3},{word:"GASTRULAÇÃO",clue:"Formação das camadas germinativas embrionárias.",specialties:[14],difficulty:3},{word:"CORAÇÃO FETAL",clue:"Coração em desenvolvimento no feto.",specialties:[14,7],difficulty:2},{word:"MEIOSE",clue:"Divisão celular que forma gametas.",specialties:[27,2],difficulty:2},{word:"MITOSE",clue:"Divisão celular que resulta em células idênticas.",specialties:[2,27],difficulty:1},{word:"CROMOSSOMO",clue:"Estrutura que contém DNA.",specialties:[27,2],difficulty:1},{word:"GENOMA",clue:"Conjunto completo de genes de um organismo.",specialties:[27],difficulty:2},{word:"FENÓTIPO",clue:"Características observáveis de um organismo.",specialties:[27],difficulty:2},{word:"GENÓTIPO",clue:"Composição genética de um organismo.",specialties:[27],difficulty:2},{word:"VIRULÊNCIA",clue:"Capacidade de um patógeno causar doença.",specialties:[28,20],difficulty:2},{word:"ANTIBIÓTICO",clue:"Substância que inibe o crescimento de microrganismos.",specialties:[26,20],difficulty:1},{word:"RESISTÊNCIA BACTERIANA",clue:"Capacidade de bactérias resistirem a antibióticos.",specialties:[28,20],difficulty:2},{word:"PROTOZOÁRIO",clue:"Organismo unicelular eucariótico.",specialties:[28],difficulty:2},{word:"PRÍON",clue:"Agente infeccioso composto apenas por proteínas.",specialties:[28,20],difficulty:3},{word:"BULBO RAQUIDIANO",clue:"Parte do cérebro que controla funções vitais.",specialties:[4,1],difficulty:2},{word:"GLÂNDULA PINEAL",clue:"Glândula que produz melatonina.",specialties:[6,4],difficulty:2},{word:"BARORRECEPTORES",clue:"Receptores sensíveis à pressão arterial.",specialties:[7,1],difficulty:3},{word:"NODOS LINFÁTICOS",clue:"Estruturas que filtram a linfa.",specialties:[21,5],difficulty:2},{word:"ALBUMINA",clue:"Proteína plasmática produzida no fígado.",specialties:[5,24],difficulty:2},{word:"SISTEMA NERVOSO SIMPÁTICO",clue:"Parte do sistema nervoso autônomo que prepara o corpo para ação.",specialties:[4,1],difficulty:2},{word:"SISTEMA NERVOSO PARASSIMPÁTICO",clue:"Parte do sistema nervoso autônomo que conserva energia.",specialties:[4,1],difficulty:2},{word:"PLAQUETOPENIA",clue:"Redução no número de plaquetas no sangue.",specialties:[5],difficulty:2},{word:"ERITROPOIETINA",clue:"Hormônio que estimula a produção de glóbulos vermelhos.",specialties:[6,5],difficulty:3},{word:"GLICOSE",clue:"Principal fonte de energia celular.",specialties:[29],difficulty:1},{word:"LIPÍDEOS",clue:"Grupo de moléculas que inclui gorduras e óleos.",specialties:[29],difficulty:1},{word:"AMINOÁCIDOS",clue:"Unidades básicas das proteínas.",specialties:[29],difficulty:1},{word:"OSSO",clue:"Estrutura rígida que compõe o esqueleto.",specialties:[0,17],difficulty:1},{word:"CARTILAGEM",clue:"Tecido conectivo flexível encontrado em articulações.",specialties:[17,3],difficulty:1},{word:"SINOVITE",clue:"Inflamação da membrana sinovial.",specialties:[17],difficulty:2},{word:"PERICÁRDIO",clue:"Membrana que envolve o coração.",specialties:[7],difficulty:2},{word:"MIOMÉTRIO",clue:"Camada muscular do útero.",specialties:[15],difficulty:2},{word:"ENDOMÉTRIO",clue:"Revestimento interno do útero.",specialties:[15],difficulty:2},{word:"ESPERMATOGÊNESE",clue:"Processo de formação de espermatozoides.",specialties:[15,27],difficulty:3},{word:"OVOGÊNESE",clue:"Processo de formação de óvulos.",specialties:[15,27],difficulty:3},{word:"GLÂNDULAS DE MONTGOMERY",clue:"Glândulas nas aréolas mamárias.",specialties:[15,12],difficulty:3},{word:"COLÁGENO",clue:"Proteína estrutural encontrada em vários tecidos.",specialties:[3,12],difficulty:1},{word:"HELICOBACTER PYLORI",clue:"Bactéria associada a úlceras gástricas.",specialties:[9,28],difficulty:3},{word:"MICÇÃO",clue:"Ato de urinar.",specialties:[10],difficulty:1},{word:"FILTRAÇÃO GLOMERULAR",clue:"Processo inicial de formação da urina.",specialties:[10,1],difficulty:2},{word:"HEMATÚRIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:2},{word:"CLARAÇÃO DE CREATININA",clue:"Medida da função renal.",specialties:[10,29],difficulty:3},{word:"DIURÉTICO",clue:"Substância que aumenta a produção de urina.",specialties:[10,26],difficulty:2},{word:"GLOMERULONEFRITE",clue:"Inflamação dos glomérulos renais.",specialties:[10,20],difficulty:3},{word:"PIELONEFRITE",clue:"Infecção do rim e da pelve renal.",specialties:[10,20],difficulty:2},{word:"VESÍCULA BILIAR",clue:"Órgão que armazena bile.",specialties:[9],difficulty:1},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[9,20],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9,6],difficulty:2},{word:"ESTEATOSE HEPÁTICA",clue:"Acúmulo de gordura no fígado.",specialties:[24,9],difficulty:2},{word:"CIRROSE",clue:"Fibrose avançada do fígado.",specialties:[24],difficulty:2},{word:"EMBOLIA PULMONAR",clue:"Obstrução de artéria pulmonar por êmbolo.",specialties:[8,7],difficulty:3},{word:"PNEUMOTÓRAX",clue:"Acúmulo de ar na cavidade pleural.",specialties:[8,25],difficulty:2},{word:"BRONQUIOLITE",clue:"Inflamação dos bronquíolos.",specialties:[8,16],difficulty:2},{word:"HIPÓXIA",clue:"Deficiência de oxigênio nos tecidos.",specialties:[1,8],difficulty:2},{word:"ASBESTOSE",clue:"Doença pulmonar causada por inalação de amianto.",specialties:[8],difficulty:3},{word:"ANESTESIA GERAL",clue:"Indução de inconsciência para procedimentos cirúrgicos.",specialties:[23,19],difficulty:2},{word:"ANESTESIA LOCAL",clue:"Perda de sensibilidade em uma área específica.",specialties:[23],difficulty:1},{word:"ENTUBAÇÃO",clue:"Inserção de tubo na traqueia para ventilação.",specialties:[23,25],difficulty:2},{word:"OPIÓIDE",clue:"Classe de medicamentos usados para aliviar a dor.",specialties:[26,23],difficulty:2},{word:"ANALGÉSICO",clue:"Substância que alivia a dor.",specialties:[26],difficulty:1},{word:"ELETROENCEFALOGRAMA",clue:"Registro da atividade elétrica cerebral.",specialties:[4,18],difficulty:2},{word:"ELETROMIOGRAMA",clue:"Exame que avalia a atividade elétrica dos músculos.",specialties:[17,18],difficulty:3},{word:"ULTRASSONOGRAFIA",clue:"Imagem obtida através de ondas sonoras.",specialties:[18],difficulty:1},{word:"MAMOGRAFIA",clue:"Exame radiológico das mamas.",specialties:[15,18],difficulty:1},{word:"DOPPLER",clue:"Técnica de imagem que avalia o fluxo sanguíneo.",specialties:[18,7],difficulty:2},{word:"ESTETOSCÓPIO",clue:"Instrumento usado para auscultar sons corporais.",specialties:[25],difficulty:1},{word:"ESFIGMOMANÔMETRO",clue:"Aparelho para medir a pressão arterial.",specialties:[7,25],difficulty:1},{word:"GLUCOMETRO",clue:"Dispositivo que mede a glicose no sangue.",specialties:[6],difficulty:1},{word:"TERMÔMETRO",clue:"Instrumento para medir a temperatura corporal.",specialties:[25],difficulty:1},{word:"OXÍMETRO",clue:"Aparelho que mede a saturação de oxigênio.",specialties:[8,25],difficulty:1},{word:"HEPATITE",clue:"Inflamação do fígado.",specialties:[24,20],difficulty:1},{word:"MALÁRIA",clue:"Doença transmitida por mosquitos.",specialties:[20],difficulty:2},{word:"DENGUE",clue:"Doença viral transmitida pelo mosquito Aedes aegypti.",specialties:[20],difficulty:1},{word:"ZIKA",clue:"Doença viral transmitida por mosquitos, associada a microcefalia.",specialties:[20,14],difficulty:2},{word:"FEBRE AMARELA",clue:"Doença viral transmitida por mosquitos, prevenível por vacina.",specialties:[20],difficulty:2},{word:"RECEPTOR",clue:"Estrutura celular que se liga a moléculas específicas.",specialties:[2,29],difficulty:2},{word:"HORMÔNIO PEPTÍDICO",clue:"Hormônio composto por aminoácidos.",specialties:[6,29],difficulty:2},{word:"HORMÔNIO ESTEROIDE",clue:"Hormônio derivado do colesterol.",specialties:[6,29],difficulty:2},{word:"INSULINA",clue:"Hormônio que reduz os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"GLUCAGON",clue:"Hormônio que aumenta os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"ESCLERÓTICA",clue:"Camada externa branca do olho.",specialties:[4],difficulty:2},{word:"CÓRNEA",clue:"Camada transparente na frente do olho.",specialties:[4],difficulty:1},{word:"ÍRIS",clue:"Parte colorida do olho que regula a entrada de luz.",specialties:[4],difficulty:1},{word:"PUPILA",clue:"Abertura no centro da íris.",specialties:[4],difficulty:1},{word:"LENTE",clue:"Estrutura que foca a luz na retina.",specialties:[4],difficulty:1},{word:"SISTEMA IMUNOLÓGICO INATO",clue:"Defesa inicial não específica contra patógenos.",specialties:[21],difficulty:2},{word:"SISTEMA IMUNOLÓGICO ADAPTATIVO",clue:"Resposta específica do sistema imunológico.",specialties:[21],difficulty:2},{word:"CÉLULAS T",clue:"Linfócitos que participam da resposta imune celular.",specialties:[21],difficulty:2},{word:"CÉLULAS B",clue:"Linfócitos que produzem anticorpos.",specialties:[21],difficulty:2},{word:"VACINAÇÃO",clue:"Processo de induzir imunidade através de vacinas.",specialties:[21,16],difficulty:1},{word:"MELANINA",clue:"Pigmento que dá cor à pele.",specialties:[12],difficulty:1},{word:"ALOPECIA",clue:"Perda de cabelo ou pelos.",specialties:[12],difficulty:1},{word:"LIPOMA",clue:"Tumor benigno de tecido adiposo.",specialties:[11,12],difficulty:2},{word:"DERMATITE",clue:"Inflamação da pele.",specialties:[12],difficulty:1},{word:"URTICÁRIA",clue:"Reação alérgica com erupções na pele.",specialties:[12,21],difficulty:1},{word:"ANEMIA",clue:"Redução da capacidade do sangue de transportar oxigênio.",specialties:[5],difficulty:1},{word:"LEUCEMIA",clue:"Câncer dos tecidos formadores de sangue.",specialties:[11,5],difficulty:2},{word:"HEMOGLOBINOPATIA",clue:"Doença genética que afeta a hemoglobina.",specialties:[5,27],difficulty:3},{word:"POLICITEMIA",clue:"Aumento anormal do número de glóbulos vermelhos.",specialties:[5],difficulty:3},{word:"HEMOFILIA",clue:"Distúrbio da coagulação do sangue.",specialties:[5,27],difficulty:2},{word:"DIABETES MELLITUS",clue:"Doença caracterizada por hiperglicemia crônica.",specialties:[6],difficulty:1},{word:"HIPERGLICEMIA",clue:"Níveis elevados de glicose no sangue.",specialties:[6],difficulty:1},{word:"HIPOGLICEMIA",clue:"Níveis baixos de glicose no sangue.",specialties:[6],difficulty:1},{word:"RESISTÊNCIA À INSULINA",clue:"Condição em que as células não respondem à insulina.",specialties:[6],difficulty:2},{word:"GLICOSÚRIA",clue:"Presença de glicose na urina.",specialties:[6,10],difficulty:2},{word:"ASTIGMATISMO",clue:"Erro refrativo do olho que causa visão borrada.",specialties:[4],difficulty:1},{word:"GLAUCOMA",clue:"Doença ocular caracterizada por aumento da pressão intraocular.",specialties:[4],difficulty:2},{word:"CATARATA",clue:"Opacificação do cristalino que prejudica a visão.",specialties:[4],difficulty:1},{word:"ESQUIZOFRENIA",clue:"Transtorno mental com distorções na percepção da realidade.",specialties:[13],difficulty:2},{word:"BIPOLARIDADE",clue:"Transtorno de humor com episódios de mania e depressão.",specialties:[13],difficulty:1},{word:"FIBROMIALGIA",clue:"Síndrome de dor crônica generalizada.",specialties:[17],difficulty:2},{word:"LUPUS",clue:"Doença autoimune que pode afetar múltiplos órgãos.",specialties:[21,12],difficulty:2},{word:"ESCLEROSE LATERAL AMIOTRÓFICA",clue:"Doença neurodegenerativa que afeta neurônios motores.",specialties:[4],difficulty:3},{word:"MIASTENIA GRAVIS",clue:"Doença autoimune que causa fraqueza muscular.",specialties:[21,4],difficulty:3},{word:"HIPERTROFIA",clue:"Aumento do tamanho das células.",specialties:[22],difficulty:1},{word:"HIPERPLASIA",clue:"Aumento do número de células.",specialties:[22],difficulty:1},{word:"ATROFIA",clue:"Redução do tamanho ou número de células.",specialties:[22],difficulty:1},{word:"NECROSE",clue:"Morte celular não programada.",specialties:[22],difficulty:2},{word:"INFARTO",clue:"Morte de tecido devido à falta de suprimento sanguíneo.",specialties:[22,7],difficulty:1},{word:"ISQUEMIA",clue:"Redução do fluxo sanguíneo para um tecido.",specialties:[22,7],difficulty:1},{word:"HEPATOCARCINOMA",clue:"Câncer primário do fígado.",specialties:[11,24],difficulty:3},{word:"ADENOCARCINOMA",clue:"Tipo de câncer que se origina em células glandulares.",specialties:[11,22],difficulty:3},{word:"OSTEOSSARCOMA",clue:"Tumor maligno do osso.",specialties:[11,17],difficulty:3},{word:"MELANOMA",clue:"Tipo agressivo de câncer de pele.",specialties:[11,12],difficulty:2},{word:"LEIOMIOMA",clue:"Tumor benigno de músculo liso.",specialties:[11,22],difficulty:3},{word:"DOENÇA DE ALZHEIMER",clue:"Doença neurodegenerativa que causa demência.",specialties:[4,13],difficulty:2},{word:"PARKINSON",clue:"Distúrbio do movimento devido à perda de neurônios dopaminérgicos.",specialties:[4],difficulty:2},{word:"EPILEPSIA",clue:"Condição neurológica com crises convulsivas recorrentes.",specialties:[4],difficulty:1},{word:"MIGRÂNEA",clue:"Tipo de dor de cabeça intensa e pulsátil.",specialties:[4],difficulty:1},{word:"ESCLEROSE MÚLTIPLA",clue:"Doença autoimune que afeta a mielina do sistema nervoso central.",specialties:[4,21],difficulty:2},{word:"ANAFILAXIA",clue:"Reação alérgica sistêmica grave.",specialties:[21,25],difficulty:2},{word:"BRONCODILATADOR",clue:"Medicação que dilata as vias aéreas.",specialties:[8,26],difficulty:1},{word:"ANTIHISTAMÍNICO",clue:"Medicamento que bloqueia os efeitos da histamina.",specialties:[21,26],difficulty:1},{word:"ANTICOAGULANTE",clue:"Substância que previne a coagulação do sangue.",specialties:[5,26],difficulty:2},{word:"ANTIPIRÉTICO",clue:"Medicamento que reduz a febre.",specialties:[26,25],difficulty:1},{word:"OSTEOPOROSE",clue:"Condição de perda de densidade óssea.",specialties:[17],difficulty:1},{word:"RAQUITISMO",clue:"Doença infantil causada por deficiência de vitamina D.",specialties:[17,16],difficulty:2},{word:"GOTA",clue:"Artrite causada por acúmulo de ácido úrico.",specialties:[17],difficulty:2},{word:"ESCORBUTO",clue:"Doença por deficiência de vitamina C.",specialties:[25],difficulty:2},{word:"ANOREXIA NERVOSA",clue:"Transtorno alimentar com perda de peso extrema.",specialties:[13],difficulty:2},{word:"BULIMIA NERVOSA",clue:"Transtorno alimentar com compulsão e purgação.",specialties:[13],difficulty:2},{word:"OBESIDADE",clue:"Excesso de gordura corporal.",specialties:[6],difficulty:1},{word:"HIPERTENSÃO ARTERIAL",clue:"Pressão arterial elevada crônica.",specialties:[7],difficulty:1},{word:"ARTERIOSCLEROSE",clue:"Endurecimento das paredes arteriais.",specialties:[7],difficulty:2},{word:"FIBRILAÇÃO ATRIAL",clue:"Arritmia cardíaca comum.",specialties:[7],difficulty:2},{word:"INFECÇÃO URINÁRIA",clue:"Infecção do trato urinário.",specialties:[10,20],difficulty:1},{word:"CÁLCULO RENAL",clue:"Formação de pedras nos rins.",specialties:[10],difficulty:1},{word:"PRÓSTATA",clue:"Glândula masculina que produz fluido seminal.",specialties:[15],difficulty:1},{word:"HIPERPLASIA PROSTÁTICA BENIGNA",clue:"Aumento não canceroso da próstata.",specialties:[15],difficulty:2},{word:"PROSTATITE",clue:"Inflamação da próstata.",specialties:[15,20],difficulty:2},{word:"VARICELA",clue:"Doença viral também conhecida como catapora.",specialties:[16,20],difficulty:1},{word:"SARAMPO",clue:"Doença viral contagiosa com erupções cutâneas.",specialties:[16,20],difficulty:1},{word:"COQUELUCHE",clue:"Doença bacteriana que causa tosse intensa.",specialties:[16,20],difficulty:2},{word:"POLIOMIELITE",clue:"Doença viral que pode causar paralisia.",specialties:[16,20],difficulty:2},{word:"RUBÉOLA",clue:"Doença viral que pode causar defeitos congênitos.",specialties:[16,14],difficulty:1},{word:"AMIGDALITE",clue:"Inflamação das amígdalas.",specialties:[20],difficulty:1},{word:"SINUSITE",clue:"Inflamação dos seios nasais.",specialties:[20],difficulty:1},{word:"OTITE",clue:"Inflamação do ouvido.",specialties:[20,16],difficulty:1},{word:"CANDIDÍASE",clue:"Infecção fúngica por Candida.",specialties:[20,12],difficulty:1},{word:"HEPATITE C",clue:"Infecção viral crônica do fígado.",specialties:[24,20],difficulty:2},{word:"CÓLERA",clue:"Infecção bacteriana que causa diarreia intensa.",specialties:[20,9],difficulty:2},{word:"LEPTOSPIROSE",clue:"Doença bacteriana transmitida pela urina de animais.",specialties:[20],difficulty:2},{word:"TETANO",clue:"Doença causada por toxinas bacterianas que afetam o sistema nervoso.",specialties:[20,4],difficulty:2},{word:"BOTULISMO",clue:"Intoxicação alimentar por toxina botulínica.",specialties:[20],difficulty:2},{word:"SÍFILIS",clue:"Infecção sexualmente transmissível causada por bactéria.",specialties:[20,15],difficulty:2},{word:"GONORREIA",clue:"Infecção sexualmente transmissível bacteriana.",specialties:[20,15],difficulty:1},{word:"HERPES GENITAL",clue:"Infecção viral sexualmente transmissível.",specialties:[20,15],difficulty:1},{word:"HPV",clue:"Vírus causador de verrugas genitais e câncer cervical.",specialties:[20,15],difficulty:1},{word:"CLAMÍDIA",clue:"Infecção sexualmente transmissível bacteriana comum.",specialties:[20,15],difficulty:1},{word:"TRICOMONÍASE",clue:"Infecção sexualmente transmissível por protozoário.",specialties:[20,15],difficulty:2},{word:"CÉREBRO",clue:"Principal órgão do sistema nervoso central.",specialties:[4],difficulty:1},{word:"MEDULA ESPINHAL",clue:"Estrutura que transmite impulsos nervosos do cérebro ao corpo.",specialties:[4],difficulty:1},{word:"SISTEMA NERVOSO PERIFÉRICO",clue:"Conjunto de nervos fora do cérebro e medula.",specialties:[4],difficulty:2},{word:"SINAPSE",clue:"Junção entre dois neurônios.",specialties:[4],difficulty:1},{word:"AXÔNIO",clue:"Prolongamento do neurônio que conduz impulsos elétricos.",specialties:[4],difficulty:1},{word:"DENDRITO",clue:"Estrutura do neurônio que recebe sinais.",specialties:[4],difficulty:1},{word:"CITOLOGIA",clue:"Estudo das células.",specialties:[2],difficulty:1},{word:"BIOPSIA",clue:"Remoção de tecido para exame diagnóstico.",specialties:[19,22],difficulty:1},{word:"CITOQUINAS",clue:"Proteínas sinalizadoras no sistema imunológico.",specialties:[21,29],difficulty:2},{word:"FAGÓCITO",clue:"Célula que engole partículas estranhas.",specialties:[21],difficulty:2},{word:"EPIDERMIS",clue:"Camada mais externa da pele.",specialties:[12,3],difficulty:1},{word:"DERMIS",clue:"Camada intermediária da pele.",specialties:[12,3],difficulty:1},{word:"HIPODERME",clue:"Camada mais interna da pele.",specialties:[12,3],difficulty:2},{word:"QUERATINÓCITO",clue:"Célula predominante na epiderme.",specialties:[12,3],difficulty:2},{word:"MELANÓCITO",clue:"Célula que produz melanina.",specialties:[12,3],difficulty:2},{word:"FIBROSE",clue:"Formação excessiva de tecido conjuntivo fibroso.",specialties:[22],difficulty:2},{word:"GRANULOMA",clue:"Massa de tecido inflamatório crônico.",specialties:[22],difficulty:3},{word:"APOPTÓSE",clue:"Morte celular programada.",specialties:[2],difficulty:2},{word:"NEOPLASIA",clue:"Crescimento anormal de células.",specialties:[11,22],difficulty:1},{word:"METÁSTASE",clue:"Disseminação de células cancerosas para outros locais.",specialties:[11],difficulty:2},{word:"QUIMIOTERAPIA",clue:"Uso de medicamentos para tratar câncer.",specialties:[11,26],difficulty:1},{word:"RADIOTERAPIA",clue:"Uso de radiação para tratar câncer.",specialties:[11,18],difficulty:1},{word:"IMUNOTERAPIA",clue:"Tratamento que estimula o sistema imunológico contra doenças.",specialties:[11,21],difficulty:2},{word:"ANALGÉSICO",clue:"Medicamento que alivia a dor.",specialties:[26],difficulty:1},{word:"ANTIINFLAMATÓRIO",clue:"Medicamento que reduz a inflamação.",specialties:[26],difficulty:1},{word:"ANTIBIÓTICO",clue:"Medicamento que combate infecções bacterianas.",specialties:[26,20],difficulty:1},{word:"ANTIVIRAL",clue:"Medicamento que combate infecções virais.",specialties:[26,20],difficulty:2},{word:"ANTIFÚNGICO",clue:"Medicamento que combate infecções fúngicas.",specialties:[26,20],difficulty:2},{word:"VACINA",clue:"Preparação que estimula imunidade contra doenças.",specialties:[21,16],difficulty:1},{word:"SÊMEN",clue:"Fluido ejaculado pelo homem contendo espermatozoides.",specialties:[15],difficulty:1},{word:"MENARCA",clue:"Primeira menstruação na puberdade feminina.",specialties:[15],difficulty:1},{word:"MENOPAUSA",clue:"Cessação permanente da menstruação.",specialties:[15],difficulty:1},{word:"PARTO CESÁREO",clue:"Nascimento por incisão cirúrgica no abdômen e útero.",specialties:[14,19],difficulty:1},{word:"ECLÂMPSIA",clue:"Complicação grave da gravidez com convulsões.",specialties:[14],difficulty:2},{word:"HIPEREMESE GRAVÍDICA",clue:"Náuseas e vômitos intensos durante a gravidez.",specialties:[14],difficulty:2},{word:"PERISTALTISMO",clue:"Movimento muscular que impulsiona o conteúdo no trato digestivo.",specialties:[1,9],difficulty:1},{word:"BARREIRA HEMATOENCEFALICA",clue:"Barreira que protege o cérebro de substâncias no sangue.",specialties:[4,5],difficulty:3},{word:"DESNUTRICAO",clue:"Estado resultante de dieta inadequada ou absorção deficiente de nutrientes.",specialties:[25,16],difficulty:1},{word:"HOMEOPATIA",clue:"Sistema de medicina alternativa baseado na diluição de substâncias.",specialties:[26],difficulty:2},{word:"ACUIDADE VISUAL",clue:"Medida da clareza da visão.",specialties:[4],difficulty:1},{word:"HEMOCROMATOSE",clue:"Doença por excesso de ferro no organismo.",specialties:[5,24],difficulty:3},{word:"DISTENSAO ABDOMINAL",clue:"Inchaço do abdômen por gases ou fluidos.",specialties:[9,25],difficulty:1},{word:"POLIDIPSIA",clue:"Sede excessiva.",specialties:[6],difficulty:2},{word:"POLIFAGIA",clue:"Fome excessiva.",specialties:[6],difficulty:2},{word:"POLIURIA",clue:"Produção excessiva de urina.",specialties:[6,10],difficulty:2},{word:"URETER",clue:"Canal que conduz a urina do rim à bexiga.",specialties:[10],difficulty:1},{word:"NEUROLOGO",clue:"Médico especialista em doenças do sistema nervoso.",specialties:[4],difficulty:1},{word:"CARDIOLOGISTA",clue:"Médico especialista em doenças do coração.",specialties:[7],difficulty:1},{word:"ONCOLOGISTA",clue:"Médico especialista em câncer.",specialties:[11],difficulty:1},{word:"GASTROSCOPIA",clue:"Exame endoscópico do estômago.",specialties:[9,18],difficulty:2},{word:"COLONOSCOPIA",clue:"Exame endoscópico do cólon.",specialties:[9,18],difficulty:2},{word:"ENDOSCOPIA",clue:"Exame visual interno de órgãos ocos.",specialties:[9,18],difficulty:1},{word:"RESILIENCIA",clue:"Capacidade de recuperar-se de adversidades.",specialties:[13],difficulty:1},{word:"ANAMNESE",clue:"Entrevista médica para obtenção de histórico clínico.",specialties:[25],difficulty:1},{word:"DIAGNOSTICO",clue:"Identificação de uma doença ou condição.",specialties:[22],difficulty:1},{word:"PROGNOSTICO",clue:"Previsão da evolução de uma doença.",specialties:[22],difficulty:2},{word:"PLACEBO",clue:"Substância inerte usada em pesquisas clínicas.",specialties:[26],difficulty:2},{word:"CEFALEIA",clue:"Dor de cabeça.",specialties:[4],difficulty:1},{word:"MIALGIA",clue:"Dor muscular.",specialties:[17],difficulty:1},{word:"ARTRALGIA",clue:"Dor nas articulações.",specialties:[17],difficulty:1},{word:"NEURALGIA",clue:"Dor ao longo de um nervo.",specialties:[4],difficulty:2},{word:"FARINGE",clue:"Canal que conecta a boca ao esôfago e laringe.",specialties:[0],difficulty:1},{word:"LARINGE",clue:"Órgão da voz situado no pescoço.",specialties:[0],difficulty:1},{word:"TRAQUEIA",clue:"Tubo que leva o ar aos pulmões.",specialties:[8,0],difficulty:1},{word:"BRONQUIOLOS",clue:"Pequenas ramificações dos brônquios nos pulmões.",specialties:[8],difficulty:1},{word:"PLEURITE",clue:"Inflamação da pleura.",specialties:[8],difficulty:2},{word:"HIPOVOLEMIA",clue:"Diminuição do volume sanguíneo.",specialties:[5,25],difficulty:2},{word:"HIPERVOLEMIA",clue:"Aumento do volume sanguíneo.",specialties:[5],difficulty:2},{word:"SIBILOS",clue:"Ruídos respiratórios agudos.",specialties:[8],difficulty:1},{word:"RINITE",clue:"Inflamação da mucosa nasal.",specialties:[8,21],difficulty:1},{word:"OTORRINOLARINGOLOGIA",clue:"Especialidade médica que trata orelha, nariz e garganta.",specialties:[0],difficulty:2},{word:"HEMORRAGIA",clue:"Perda excessiva de sangue.",specialties:[5,25],difficulty:1},{word:"SINCOPE",clue:"Perda temporária da consciência.",specialties:[7,25],difficulty:2},{word:"ICTERICIA",clue:"Amarelamento da pele e olhos por acúmulo de bilirrubina.",specialties:[24,5],difficulty:1},{word:"SEBORREIA",clue:"Excesso de produção de sebo pela pele.",specialties:[12],difficulty:1},{word:"PRURIDO",clue:"Coceira.",specialties:[12],difficulty:1},{word:"ERUPCAO CUTANEA",clue:"Lesões na pele como manchas ou pápulas.",specialties:[12],difficulty:1},{word:"PROLACTINA",clue:"Hormônio que estimula a produção de leite.",specialties:[6,15],difficulty:2},{word:"OXITOCINA",clue:"Hormônio que estimula as contrações uterinas.",specialties:[6,14],difficulty:2},{word:"FEOCROMOCITOMA",clue:"Tumor das glândulas suprarrenais que produz catecolaminas.",specialties:[6,7],difficulty:3},{word:"GOTA",clue:"Artrite causada por acúmulo de ácido úrico.",specialties:[17],difficulty:2},{word:"ACIDO URICO",clue:"Produto final do metabolismo de purinas.",specialties:[29],difficulty:2},{word:"FENILCETONURIA",clue:"Doença genética com deficiência de metabolismo da fenilalanina.",specialties:[27,16],difficulty:3},{word:"GALACTOSEMIA",clue:"Doença genética com intolerância à galactose.",specialties:[27,16],difficulty:3},{word:"ENFERMEIRO",clue:"Profissional de saúde que cuida dos pacientes.",specialties:[25],difficulty:1},{word:"FISIOTERAPEUTA",clue:"Profissional que trata doenças por meio de exercícios físicos.",specialties:[17],difficulty:1},{word:"NUTRICIONISTA",clue:"Profissional que estuda a relação entre alimento e saúde.",specialties:[9,25],difficulty:1},{word:"PSICOLOGO",clue:"Profissional que estuda os processos mentais e comportamentais.",specialties:[13],difficulty:1},{word:"ANATOMOPATOLOGIA",clue:"Estudo das alterações estruturais causadas pelas doenças.",specialties:[22],difficulty:2},{word:"CLINICA MEDICA",clue:"Especialidade que trata doenças não cirúrgicas em adultos.",specialties:[25],difficulty:1},{word:"ANTITERMINICO",clue:"Medicamento que reduz a febre.",specialties:[26],difficulty:1},{word:"PALIATIVO",clue:"Tratamento que alivia sintomas sem curar a doença.",specialties:[11,25],difficulty:1},{word:"TAMPAO",clue:"Substância que mantém o pH estável.",specialties:[29],difficulty:2},{word:"BICARBONATO",clue:"Íon que atua como tampão no sangue.",specialties:[29],difficulty:2},{word:"CREATININA",clue:"Substância usada para avaliar a função renal.",specialties:[10,29],difficulty:2},{word:"PROTEINURIA",clue:"Presença de proteínas na urina.",specialties:[10],difficulty:2},{word:"LEUCOCITURIA",clue:"Presença de leucócitos na urina.",specialties:[10,20],difficulty:2},{word:"GASTRITE",clue:"Inflamação da mucosa do estômago.",specialties:[9],difficulty:1},{word:"DUODENO",clue:"Primeira parte do intestino delgado.",specialties:[9],difficulty:1},{word:"JEJUNO",clue:"Segunda porção do intestino delgado.",specialties:[9],difficulty:1},{word:"ILEO",clue:"Terceira parte do intestino delgado.",specialties:[9],difficulty:1},{word:"APENDICE",clue:"Estrutura vermiforme ligada ao ceco.",specialties:[9],difficulty:1},{word:"CECO",clue:"Parte inicial do intestino grosso.",specialties:[9],difficulty:1},{word:"SIGMOIDE",clue:"Parte do intestino grosso antes do reto.",specialties:[9],difficulty:1},{word:"RETROPERITONEAL",clue:"Localizado atrás do peritônio.",specialties:[0,9],difficulty:3},{word:"POLIDACTILIA",clue:"Condição de possuir dedos extras.",specialties:[17,27],difficulty:2},{word:"SINDACTILIA",clue:"Fusão de dois ou mais dedos.",specialties:[17,27],difficulty:2},{word:"CRIOTERAPIA",clue:"Tratamento médico usando frio.",specialties:[12,19],difficulty:2},{word:"TERMOTERAPIA",clue:"Tratamento médico usando calor.",specialties:[17,19],difficulty:2},{word:"ELETROTERAPIA",clue:"Uso de correntes elétricas para tratamento.",specialties:[17,19],difficulty:2},{word:"BIOPSIA",clue:"Remoção de tecido para exame diagnóstico.",specialties:[19,22],difficulty:1},{word:"PARACENTESE",clue:"Procedimento para remover líquido da cavidade abdominal.",specialties:[19,9],difficulty:3},{word:"TORACOCENTESE",clue:"Procedimento para remover líquido da cavidade pleural.",specialties:[19,8],difficulty:3},{word:"ARTROCENTESE",clue:"Punctura de uma articulação para remover líquido.",specialties:[19,17],difficulty:3},{word:"DIAGNOSTICO DIFERENCIAL",clue:"Lista de possíveis doenças que explicam os sintomas.",specialties:[25,22],difficulty:2},{word:"CICLO MENSTRUAL",clue:"Processo mensal de mudanças no sistema reprodutor feminino.",specialties:[15],difficulty:1},{word:"ESPERMATOGENESE",clue:"Processo de produção de espermatozoides.",specialties:[15],difficulty:2},{word:"OVULACAO",clue:"Liberação de um óvulo pelo ovário.",specialties:[15,14],difficulty:1},{word:"ANDROGENO",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:2},{word:"ESTROGENIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"PROGESTERONA",clue:"Hormônio envolvido na gravidez e ciclo menstrual.",specialties:[6,15],difficulty:1},{word:"INFERTILIDADE",clue:"Incapacidade de conceber após um ano de tentativas.",specialties:[15,14],difficulty:1},{word:"FECUNDACAO IN VITRO",clue:"Técnica de reprodução assistida.",specialties:[15,14],difficulty:2},{word:"CLONAGEM",clue:"Processo de criar cópias geneticamente idênticas.",specialties:[27],difficulty:3},{word:"ANTICORPO MONOCLONAL",clue:"Anticorpo produzido por um único clone de células.",specialties:[21,26],difficulty:3},{word:"IMUNODEFICIENCIA",clue:"Estado de função imune reduzida.",specialties:[21],difficulty:2},{word:"QUIMERA",clue:"Organismo com células geneticamente distintas.",specialties:[27],difficulty:3},{word:"DOPAMINA",clue:"Neurotransmissor envolvido no controle motor e motivação.",specialties:[4],difficulty:2},{word:"SEROTONINA",clue:"Neurotransmissor que regula humor e sono.",specialties:[4,13],difficulty:2},{word:"ACETILCOLINA",clue:"Neurotransmissor envolvido na função muscular.",specialties:[4],difficulty:2},{word:"GLUTAMATO",clue:"Principal neurotransmissor excitatório do cérebro.",specialties:[4],difficulty:2},{word:"GABA",clue:"Principal neurotransmissor inibitório do cérebro.",specialties:[4],difficulty:2},{word:"CINETOSE",clue:"Mal-estar causado por movimento, como enjoo de viagem.",specialties:[13],difficulty:1},{word:"ESQUISTOSSOMOSE",clue:"Doença parasitária causada por Schistosoma.",specialties:[20],difficulty:3},{word:"LEISHMANIOSE",clue:"Doença causada por protozoários do gênero Leishmania.",specialties:[20],difficulty:3},{word:"HEMOGLOBINA",clue:"Proteína no sangue que transporta oxigênio.",specialties:[5],difficulty:1},{word:"TIROXINA",clue:"Hormônio produzido pela tireoide.",specialties:[6],difficulty:1},{word:"HIPERPARATIREOIDISMO",clue:"Excesso de produção de hormônio paratireoide.",specialties:[6],difficulty:3},{word:"HIPOPARATIREOIDISMO",clue:"Deficiência de hormônio paratireoide.",specialties:[6],difficulty:3},{word:"CEFALOSPORINA",clue:"Classe de antibióticos β-lactâmicos.",specialties:[26,20],difficulty:2},{word:"QUINOLONA",clue:"Classe de antibióticos que inibem DNA girase.",specialties:[26,20],difficulty:2},{word:"TETRACICLINA",clue:"Antibiótico que inibe síntese proteica bacteriana.",specialties:[26,20],difficulty:2},{word:"GLICOCÁLICE",clue:"Camada de carboidratos na superfície celular.",specialties:[2],difficulty:3},{word:"CINETOCORO",clue:"Estrutura que liga cromossomos ao fuso mitótico.",specialties:[2,27],difficulty:3},{word:"MITOCONDRIO",clue:"Organela responsável pela produção de ATP.",specialties:[2,29],difficulty:1},{word:"CLOROPLASTO",clue:"Organela responsável pela fotossíntese em plantas.",specialties:[2],difficulty:3},{word:"ENZIMA",clue:"Proteína que acelera reações químicas.",specialties:[29],difficulty:1},{word:"CATALISADOR",clue:"Substância que aumenta a velocidade de uma reação.",specialties:[29],difficulty:1},{word:"HELICASE",clue:"Enzima que separa fitas de DNA.",specialties:[2,27],difficulty:3},{word:"LIGASE",clue:"Enzima que une fragmentos de DNA.",specialties:[2,27],difficulty:3},{word:"PROTEASSOMA",clue:"Complexo que degrada proteínas.",specialties:[2],difficulty:3},{word:"TRIPANOSSOMIASE",clue:"Doença causada por Trypanosoma cruzi.",specialties:[20],difficulty:3},{word:"HEMOSTASIA",clue:"Processo de parar sangramento.",specialties:[5,19],difficulty:1},{word:"NEUTRÓFILO",clue:"Tipo de glóbulo branco que combate infecções.",specialties:[5,21],difficulty:2},{word:"EOSINÓFILO",clue:"Glóbulo branco envolvido em respostas alérgicas.",specialties:[5,21],difficulty:2},{word:"BASÓFILO",clue:"Glóbulo branco que libera histamina.",specialties:[5,21],difficulty:2},{word:"MONÓCITO",clue:"Glóbulo branco que se diferencia em macrófago.",specialties:[5,21],difficulty:2},{word:"MACRÓFAGO",clue:"Célula que fagocita patógenos.",specialties:[21],difficulty:2},{word:"IMUNOGLOBULINA",clue:"Outro nome para anticorpo.",specialties:[21,5],difficulty:2},{word:"VASOPRESSINA",clue:"Hormônio que regula a retenção de água.",specialties:[6,10],difficulty:2},{word:"PEPTÍDEO NATRIURÉTICO",clue:"Hormônio que reduz a pressão arterial.",specialties:[6,7],difficulty:3},{word:"INTERFERON",clue:"Proteína que interfere na replicação viral.",specialties:[21,20],difficulty:3},{word:"INTERLEUCINA",clue:"Citocina produzida por leucócitos.",specialties:[21],difficulty:3},{word:"HEPARINA",clue:"Anticoagulante usado em medicina.",specialties:[5,26],difficulty:2},{word:"WARFARINA",clue:"Anticoagulante que inibe a vitamina K.",specialties:[26,5],difficulty:2},{word:"VITAMINA K",clue:"Vitamina essencial para a coagulação.",specialties:[29,5],difficulty:2},{word:"VITAMINA D",clue:"Vitamina importante para a saúde óssea.",specialties:[29,17],difficulty:1},{word:"VITAMINA B12",clue:"Vitamina necessária para a produção de glóbulos vermelhos.",specialties:[29,5],difficulty:2},{word:"VITAMINA C",clue:"Vitamina importante para o sistema imunológico.",specialties:[29,21],difficulty:1},{word:"GLUTATIONA",clue:"Antioxidante presente nas células.",specialties:[29],difficulty:3},{word:"SUPERÓXIDO DISMUTASE",clue:"Enzima que neutraliza radicais livres.",specialties:[29],difficulty:3},{word:"CATALASE",clue:"Enzima que decompõe peróxido de hidrogênio.",specialties:[29],difficulty:2},{word:"PEROXISSOMO",clue:"Organela envolvida no metabolismo de peróxidos.",specialties:[2],difficulty:3},{word:"PITUITÁRIA",clue:"Outra denominação para hipófise.",specialties:[6],difficulty:2},{word:"HIPOTÁLAMO",clue:"Região cerebral que controla a hipófise.",specialties:[4,6],difficulty:2},{word:"EPÍFISE",clue:"Parte do osso longo ou glândula pineal.",specialties:[0,6],difficulty:2},{word:"ADENOHIPÓFISE",clue:"Lobo anterior da hipófise.",specialties:[6],difficulty:3},{word:"NEUROHIPÓFISE",clue:"Lobo posterior da hipófise.",specialties:[6],difficulty:3},{word:"PARATORMÔNIO",clue:"Hormônio que regula o cálcio.",specialties:[6],difficulty:2},{word:"CALCITONINA",clue:"Hormônio que reduz os níveis de cálcio no sangue.",specialties:[6],difficulty:2},{word:"RENINA",clue:"Enzima que participa da regulação da pressão arterial.",specialties:[10,6],difficulty:2},{word:"ANGIOTENSINA",clue:"Hormônio que causa vasoconstrição.",specialties:[7,10],difficulty:2},{word:"EICOSANÓIDES",clue:"Derivados de ácidos graxos com funções hormonais.",specialties:[29],difficulty:3},{word:"PROSTAGLANDINA",clue:"Mediador inflamatório derivado de ácidos graxos.",specialties:[29,22],difficulty:2},{word:"LEUCOTRIENO",clue:"Mediador químico em respostas alérgicas.",specialties:[21,29],difficulty:3},{word:"TRABÉCULA",clue:"Estrutura em forma de feixe nos ossos esponjosos.",specialties:[0,17],difficulty:3},{word:"OSTEOBLASTO",clue:"Célula que forma osso.",specialties:[0,17],difficulty:2},{word:"OSTEÓCITO",clue:"Célula madura do tecido ósseo.",specialties:[0,17],difficulty:2},{word:"OSTEOCLASTO",clue:"Célula que reabsorve osso.",specialties:[0,17],difficulty:2},{word:"CARTILAGEM HIALINA",clue:"Tipo de cartilagem encontrada em articulações.",specialties:[0,17],difficulty:2},{word:"FIBROBLASTO",clue:"Célula que produz fibras de colágeno.",specialties:[3],difficulty:2},{word:"ADIPÓCITO",clue:"Célula de tecido adiposo.",specialties:[3],difficulty:1},{word:"GLIÓCITO",clue:"Célula de suporte no sistema nervoso.",specialties:[4],difficulty:2},{word:"ASTRÓCITO",clue:"Tipo de célula glial no SNC.",specialties:[4],difficulty:3},{word:"OLIGODENDRÓCITO",clue:"Célula que forma mielina no SNC.",specialties:[4],difficulty:3},{word:"CÉLULA DE SCHWANN",clue:"Célula que forma mielina no SNP.",specialties:[4],difficulty:3},{word:"MICRÓGLIA",clue:"Célula imune do sistema nervoso.",specialties:[4,21],difficulty:3},{word:"EPENDIMÁRIA",clue:"Célula que reveste os ventrículos cerebrais.",specialties:[4],difficulty:3},{word:"SINAPSE QUÍMICA",clue:"Comunicação entre neurônios via neurotransmissores.",specialties:[4],difficulty:2},{word:"SINAPSE ELÉTRICA",clue:"Comunicação direta entre neurônios via junções gap.",specialties:[4],difficulty:3},{word:"CICLO DE KREBS",clue:"Via metabólica que produz energia.",specialties:[29],difficulty:2},{word:"CADEIA TRANSPORTADORA DE ELÉTRONS",clue:"Processo que gera ATP nas mitocôndrias.",specialties:[29],difficulty:2},{word:"GLICONEOGÊNESE",clue:"Formação de glicose a partir de precursores não carboidratos.",specialties:[29,6],difficulty:3},{word:"GLICOGÊNIO",clue:"Forma de armazenamento de glicose.",specialties:[29],difficulty:1},{word:"HEMOGLOBINÚRIA",clue:"Presença de hemoglobina na urina.",specialties:[10,5],difficulty:2},{word:"CETONÚRIA",clue:"Presença de corpos cetônicos na urina.",specialties:[10,6],difficulty:2},{word:"HEMATÓCRITO",clue:"Percentual de células vermelhas no sangue.",specialties:[5],difficulty:1},{word:"PLAQUETA",clue:"Fragmento celular envolvido na coagulação.",specialties:[5],difficulty:1},{word:"FERRO",clue:"Mineral essencial para a produção de hemoglobina.",specialties:[29,5],difficulty:1},{word:"ZINCO",clue:"Mineral importante para a função imunológica.",specialties:[29,21],difficulty:2},{word:"IODO",clue:"Mineral necessário para a produção de hormônios tireoidianos.",specialties:[29,6],difficulty:1},{word:"MAGNÉSIO",clue:"Mineral envolvido em muitas reações enzimáticas.",specialties:[29],difficulty:1},{word:"POTÁSSIO",clue:"Eletrólito importante para a função cardíaca.",specialties:[29,7],difficulty:1},{word:"SÓDIO",clue:"Eletrólito essencial para a transmissão nervosa.",specialties:[29,1],difficulty:1},{word:"CLORO",clue:"Eletrólito que ajuda a manter o equilíbrio hídrico.",specialties:[29],difficulty:1},{word:"CÁLCIO",clue:"Mineral importante para ossos e contração muscular.",specialties:[29,17],difficulty:1},{word:"FÓSFORO",clue:"Mineral presente em ATP e DNA.",specialties:[29],difficulty:1},{word:"BICARBONATO",clue:"Íon que atua como tampão no sangue.",specialties:[29,10],difficulty:2},{word:"AMILASE",clue:"Enzima que digere carboidratos.",specialties:[9,29],difficulty:1},{word:"LIPASE",clue:"Enzima que digere gorduras.",specialties:[9,29],difficulty:1},{word:"PEPSINA",clue:"Enzima que digere proteínas no estômago.",specialties:[9,29],difficulty:1},{word:"TRIPSINA",clue:"Enzima pancreática que digere proteínas.",specialties:[9,29],difficulty:2},{word:"QUIMOTRIPSINA",clue:"Outra enzima pancreática que digere proteínas.",specialties:[9,29],difficulty:2},{word:"ENTEROCINASE",clue:"Enzima que ativa a tripsina.",specialties:[9,29],difficulty:3},{word:"SECRETINA",clue:"Hormônio que estimula a secreção pancreática.",specialties:[6,9],difficulty:3},{word:"COLECISTOCININA",clue:"Hormônio que estimula a contração da vesícula biliar.",specialties:[6,9],difficulty:3},{word:"GASTRINA",clue:"Hormônio que estimula a secreção gástrica.",specialties:[6,9],difficulty:2},{word:"LEPTINA",clue:"Hormônio produzido pelo tecido adiposo que regula o apetite.",specialties:[6,29],difficulty:2},{word:"GRELINA",clue:"Hormônio que estimula o apetite.",specialties:[6,29],difficulty:2},{word:"NEFROLOGIA",clue:"Especialidade médica que estuda os rins.",specialties:[10],difficulty:1},{word:"HEPATOLOGIA",clue:"Especialidade médica que estuda o fígado.",specialties:[24],difficulty:1},{word:"DERMATOLOGIA",clue:"Especialidade médica que estuda a pele.",specialties:[12],difficulty:1},{word:"OTORRINOLARINGOLOGIA",clue:"Especialidade médica que estuda orelha, nariz e garganta.",specialties:[0],difficulty:1},{word:"OFTALMOLOGIA",clue:"Especialidade médica que estuda os olhos.",specialties:[4],difficulty:1},{word:"UROLOGIA",clue:"Especialidade médica que estuda o trato urinário e sistema reprodutor masculino.",specialties:[10,15],difficulty:1},{word:"GINECOLOGIA",clue:"Especialidade médica que estuda o sistema reprodutor feminino.",specialties:[15],difficulty:1},{word:"NEONATOLOGIA",clue:"Ramo da pediatria que cuida de recém-nascidos.",specialties:[16,14],difficulty:2},{word:"GERIATRIA",clue:"Especialidade médica que cuida de idosos.",specialties:[25],difficulty:1},{word:"ANESTESIOLOGIA",clue:"Especialidade médica que estuda anestesia.",specialties:[23],difficulty:1},{word:"FARMACOLOGIA",clue:"Estudo dos medicamentos e seus efeitos.",specialties:[26],difficulty:1},{word:"QUIMIOTAXIA",clue:"Movimento celular orientado por gradiente químico.",specialties:[21,2],difficulty:3},{word:"APNEIA DO SONO",clue:"Interrupção temporária da respiração durante o sono.",specialties:[8],difficulty:1},{word:"NARCOLEPSIA",clue:"Distúrbio do sono com sonolência diurna excessiva.",specialties:[13,4],difficulty:2},{word:"ATAXIA",clue:"Perda de coordenação muscular.",specialties:[4],difficulty:2},{word:"DIPLOPIA",clue:"Visão dupla.",specialties:[4],difficulty:1},{word:"ASTENIA",clue:"Fraqueza generalizada.",specialties:[25],difficulty:1},{word:"HIPOXEMIA",clue:"Baixo nível de oxigênio no sangue arterial.",specialties:[8],difficulty:2},{word:"HIPERCAPNIA",clue:"Nível elevado de dióxido de carbono no sangue.",specialties:[8],difficulty:2},{word:"BRONQUIECTASIA",clue:"Dilatação crônica dos brônquios.",specialties:[8],difficulty:3},{word:"SARCOIDOSE",clue:"Doença inflamatória que forma granulomas em órgãos.",specialties:[8,21],difficulty:3},{word:"ACROCIANOSE",clue:"Coloração azulada das extremidades.",specialties:[7,8],difficulty:2},{word:"LIPODISTROFIA",clue:"Distribuição anormal de gordura corporal.",specialties:[6,12],difficulty:3},{word:"AMILOIDOSE",clue:"Acúmulo de proteína amiloide nos tecidos.",specialties:[22,5],difficulty:3},{word:"ESCOLIOSE",clue:"Desvio lateral da coluna vertebral.",specialties:[17],difficulty:1},{word:"LORDOSE",clue:"Curvatura acentuada da coluna lombar.",specialties:[17],difficulty:1},{word:"ARTROSE",clue:"Degeneração crônica das articulações.",specialties:[17],difficulty:1},{word:"ESPONDILITE",clue:"Inflamação das vértebras.",specialties:[17],difficulty:2},{word:"FASCITE",clue:"Inflamação da fáscia muscular.",specialties:[17],difficulty:2},{word:"MENINGITE",clue:"Inflamação das meninges.",specialties:[4,20],difficulty:1},{word:"ENCEFALITE",clue:"Inflamação do tecido cerebral.",specialties:[4,20],difficulty:2},{word:"HIDROCEFALIA",clue:"Acúmulo excessivo de líquido cefalorraquidiano.",specialties:[4],difficulty:2},{word:"MIELOPATIA",clue:"Doença da medula espinhal.",specialties:[4],difficulty:3},{word:"RADICULOPATIA",clue:"Compressão de raízes nervosas espinhais.",specialties:[4],difficulty:2},{word:"NEUROPATIA",clue:"Doença dos nervos periféricos.",specialties:[4],difficulty:2},{word:"GLIOMA",clue:"Tumor originado das células gliais.",specialties:[11,4],difficulty:3},{word:"MENINGIOMA",clue:"Tumor benigno das meninges.",specialties:[11,4],difficulty:3},{word:"ASTROCITOMA",clue:"Tumor cerebral originado de astrócitos.",specialties:[11,4],difficulty:3},{word:"ESQUIZOFASIA",clue:"Discurso incoerente em pacientes esquizofrênicos.",specialties:[13],difficulty:3},{word:"ANHIDROSE",clue:"Incapacidade de suar.",specialties:[12,6],difficulty:2},{word:"POLIDIPSIAS",clue:"Sensação excessiva de sede.",specialties:[6],difficulty:2},{word:"GIGANTISMO",clue:"Crescimento excessivo devido ao excesso de GH.",specialties:[6],difficulty:2},{word:"NANISMO",clue:"Baixa estatura devido à deficiência de GH.",specialties:[6],difficulty:1},{word:"ACROMEGALIA",clue:"Crescimento exagerado de extremidades em adultos.",specialties:[6],difficulty:2},{word:"CUSHING",clue:"Síndrome por excesso de cortisol.",specialties:[6],difficulty:2},{word:"ADDISON",clue:"Doença por insuficiência adrenal.",specialties:[6],difficulty:2},{word:"HEMOCITOBLASTO",clue:"Célula tronco hematopoiética.",specialties:[5],difficulty:3},{word:"POLICITEMIA",clue:"Aumento do número de eritrócitos.",specialties:[5],difficulty:2},{word:"TALASSEMIA",clue:"Doença genética com produção anormal de hemoglobina.",specialties:[5,27],difficulty:2},{word:"ESFEROCITOSE",clue:"Doença hereditária com hemácias esféricas.",specialties:[5,27],difficulty:3},{word:"HEMOGLOBINOPATIA",clue:"Anormalidade estrutural na hemoglobina.",specialties:[5,27],difficulty:2},{word:"MALFORMAÇÃO",clue:"Anomalia no desenvolvimento de um órgão.",specialties:[14,22],difficulty:2},{word:"TERATOGÊNESE",clue:"Processo de formação de defeitos congênitos.",specialties:[14,27],difficulty:3},{word:"ABORTO",clue:"Interrupção da gravidez antes da viabilidade fetal.",specialties:[14],difficulty:1},{word:"PLACENTA PRÉVIA",clue:"Implantação da placenta sobre o colo uterino.",specialties:[14],difficulty:2},{word:"DESCOLAMENTO PREMATURO DE PLACENTA",clue:"Separação da placenta antes do parto.",specialties:[14],difficulty:2},{word:"CORIOAMNIONITE",clue:"Infecção das membranas fetais.",specialties:[14,20],difficulty:3},{word:"MOLA HIDATIFORME",clue:"Proliferação anormal do trofoblasto.",specialties:[14,11],difficulty:3},{word:"ECLÂMPSIA",clue:"Convulsões em gestantes com pré-eclâmpsia.",specialties:[14],difficulty:2},{word:"PÉLVIS",clue:"Região anatômica entre abdômen e membros inferiores.",specialties:[0],difficulty:1},{word:"PERÍNEO",clue:"Região entre a genitália e o ânus.",specialties:[0],difficulty:2},{word:"GLÂNDULA DE BARTHOLIN",clue:"Glândula vestibular maior na mulher.",specialties:[15],difficulty:2},{word:"CLITÓRIS",clue:"Órgão erétil feminino.",specialties:[15],difficulty:1},{word:"URETER",clue:"Canal que transporta urina do rim à bexiga.",specialties:[10],difficulty:1},{word:"URETRA",clue:"Canal que elimina urina da bexiga ao exterior.",specialties:[10],difficulty:1},{word:"EPIDÍDIMO",clue:"Estrutura onde os espermatozoides amadurecem.",specialties:[15],difficulty:2},{word:"DUCTO DEFERENTE",clue:"Canal que transporta espermatozoides.",specialties:[15],difficulty:2},{word:"VESÍCULA SEMINAL",clue:"Glândula que produz parte do sêmen.",specialties:[15],difficulty:2},{word:"PRÓSTATA",clue:"Glândula que produz fluido prostático.",specialties:[15],difficulty:1},{word:"GLÂNDULAS BULBOURETRAIS",clue:"Glândulas que lubrificam a uretra masculina.",specialties:[15],difficulty:3},{word:"CRIPTORQUIDIA",clue:"Testículo não descido.",specialties:[15,16],difficulty:2},{word:"HIDROCELE",clue:"Acúmulo de líquido na túnica vaginal.",specialties:[15],difficulty:2},{word:"VARICOCELE",clue:"Dilatação das veias do cordão espermático.",specialties:[15],difficulty:2},{word:"TORÇÃO TESTICULAR",clue:"Rotação do testículo sobre o cordão espermático.",specialties:[15,25],difficulty:2},{word:"BALANOPOSTITE",clue:"Inflamação da glande e prepúcio.",specialties:[15,20],difficulty:3},{word:"FIMOSE",clue:"Estreitamento do prepúcio.",specialties:[15],difficulty:1},{word:"PARAFIMOSE",clue:"Impossibilidade de recolocar o prepúcio sobre a glande.",specialties:[15],difficulty:2},{word:"PRIAPISMO",clue:"Ereção prolongada e dolorosa.",specialties:[15],difficulty:2},{word:"ANENCEFALIA",clue:"Malformação com ausência de parte do encéfalo.",specialties:[14,4],difficulty:3},{word:"MIELOMENINGOCELE",clue:"Defeito no fechamento do tubo neural.",specialties:[14,4],difficulty:3},{word:"ESPINHA BÍFIDA",clue:"Falha no fechamento das vértebras.",specialties:[14,4],difficulty:2},{word:"DISRAFISMO",clue:"Termo geral para defeitos de fechamento embrionário.",specialties:[14],difficulty:3},{word:"DIASTEMA",clue:"Espaçamento entre dentes.",specialties:[16],difficulty:2},{word:"ANOMALIA DE EBSTEIN",clue:"Malformação da válvula tricúspide.",specialties:[16,7],difficulty:3},{word:"TETRALOGIA DE FALLOT",clue:"Conjunto de quatro defeitos cardíacos congênitos.",specialties:[16,7],difficulty:3},{word:"CIV",clue:"Comunicação interventricular.",specialties:[16,7],difficulty:2},{word:"CIA",clue:"Comunicação interatrial.",specialties:[16,7],difficulty:2},{word:"PCA",clue:"Persistência do canal arterial.",specialties:[16,7],difficulty:2},{word:"ATRESIA",clue:"Ausência de abertura normal em órgão tubular.",specialties:[16,14],difficulty:2},{word:"FENILCETONÚRIA",clue:"Erro inato do metabolismo da fenilalanina.",specialties:[16,27],difficulty:2},{word:"GALACTOSEMIA",clue:"Deficiência na metabolização da galactose.",specialties:[16,27],difficulty:2},{word:"HIPOTONIA",clue:"Diminuição do tônus muscular.",specialties:[16,17],difficulty:1},{word:"HIPERTONIA",clue:"Aumento do tônus muscular.",specialties:[16,17],difficulty:1},{word:"PLAGIOCEFALIA",clue:"Assimetria craniana em lactentes.",specialties:[16],difficulty:3},{word:"LINFEDEMA",clue:"Acúmulo de linfa nos tecidos.",specialties:[21,17],difficulty:2},{word:"ANOSMIA",clue:"Perda do sentido do olfato.",specialties:[4],difficulty:2},{word:"AGEUSIA",clue:"Perda do sentido do paladar.",specialties:[4],difficulty:2},{word:"PAROSMIA",clue:"Distúrbio do olfato.",specialties:[4],difficulty:3},{word:"TINITUS",clue:"Sons percebidos nos ouvidos sem estímulo externo.",specialties:[4],difficulty:1},{word:"NISTAGMO",clue:"Movimentos involuntários dos olhos.",specialties:[4],difficulty:2},{word:"AMBLIOPIA",clue:"Diminuição da acuidade visual sem causa orgânica.",specialties:[4],difficulty:2},{word:"ESTRABISMO",clue:"Desalinhamento dos olhos.",specialties:[4],difficulty:1},{word:"OTORRAGIA",clue:"Sangramento pelo ouvido.",specialties:[4],difficulty:2},{word:"OTORREIA",clue:"Saída de líquido pelo ouvido.",specialties:[4],difficulty:2},{word:"GLOSSITE",clue:"Inflamação da língua.",specialties:[9],difficulty:2},{word:"ESTOMATITE",clue:"Inflamação da mucosa bucal.",specialties:[9],difficulty:1},{word:"FARINGITE",clue:"Inflamação da faringe.",specialties:[8,20],difficulty:1},{word:"LARINGITE",clue:"Inflamação da laringe.",specialties:[8,20],difficulty:1},{word:"DISFAGIA",clue:"Dificuldade para engolir.",specialties:[9],difficulty:1},{word:"ODINOFAGIA",clue:"Dor ao engolir.",specialties:[9],difficulty:2},{word:"RGE",clue:"Refluxo gastroesofágico.",specialties:[9],difficulty:1},{word:"PIROSE",clue:"Sensação de queimação retroesternal.",specialties:[9],difficulty:1},{word:"MELENA",clue:"Fezes escuras por sangue digerido.",specialties:[9],difficulty:2},{word:"HEMATÊMESE",clue:"Vômito com sangue.",specialties:[9],difficulty:2},{word:"HEMATOCEZIA",clue:"Sangue vivo nas fezes.",specialties:[9],difficulty:2},{word:"TENESMO",clue:"Sensação de evacuação incompleta.",specialties:[9],difficulty:2},{word:"DIARREIA",clue:"Fezes líquidas frequentes.",specialties:[9],difficulty:1},{word:"CONSTIPAÇÃO",clue:"Dificuldade ou infrequência de evacuações.",specialties:[9],difficulty:1},{word:"METEORISMO",clue:"Excesso de gases intestinais.",specialties:[9],difficulty:2},{word:"ASCITE",clue:"Acúmulo de líquido na cavidade peritoneal.",specialties:[9,24],difficulty:2},{word:"HEPATOMEGALIA",clue:"Aumento do tamanho do fígado.",specialties:[24],difficulty:1},{word:"ESPLENOMEGALIA",clue:"Aumento do tamanho do baço.",specialties:[5],difficulty:2},{word:"ICTERÍCIA",clue:"Amarelamento da pele e mucosas.",specialties:[24,5],difficulty:1},{word:"COLELITÍASE",clue:"Presença de cálculos biliares.",specialties:[24,9],difficulty:2},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[24,9],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9],difficulty:2},{word:"GANGRENA",clue:"Morte de tecido devido à falta de circulação.",specialties:[22,25],difficulty:2},{word:"SEPSIS",clue:"Resposta inflamatória sistêmica a uma infecção.",specialties:[25,20],difficulty:1},{word:"CHOQUE SÉPTICO",clue:"Disfunção circulatória grave por infecção.",specialties:[25,20],difficulty:2},{word:"ENDOCARDITE",clue:"Infecção do revestimento interno do coração.",specialties:[7,20],difficulty:2},{word:"PERICARDITE",clue:"Inflamação do pericárdio.",specialties:[7,20],difficulty:2},{word:"MIOCARDITE",clue:"Inflamação do músculo cardíaco.",specialties:[7,20],difficulty:2},{word:"ARRITMIA",clue:"Alteração do ritmo cardíaco normal.",specialties:[7],difficulty:1},{word:"TAQUICARDIA",clue:"Batimento cardíaco acelerado.",specialties:[7],difficulty:1},{word:"BRADICARDIA",clue:"Batimento cardíaco lento.",specialties:[7],difficulty:1},{word:"FIBRILAÇÃO",clue:"Contração rápida e descoordenada das fibras cardíacas.",specialties:[7],difficulty:2},{word:"ANISOCITOSE",clue:"Variação no tamanho das células sanguíneas.",specialties:[5],difficulty:2},{word:"POIQUILOCITOSE",clue:"Variação na forma das células sanguíneas.",specialties:[5],difficulty:2},{word:"LEUCOPENIA",clue:"Redução no número de leucócitos.",specialties:[5],difficulty:2},{word:"LEUCOCITOSE",clue:"Aumento no número de leucócitos.",specialties:[5],difficulty:1},{word:"TROMBOCITOPENIA",clue:"Redução no número de plaquetas.",specialties:[5],difficulty:2},{word:"ESPLENECTOMIA",clue:"Remoção cirúrgica do baço.",specialties:[19,5],difficulty:2},{word:"HEMOGLOBINURIA",clue:"Presença de hemoglobina na urina.",specialties:[10,5],difficulty:2},{word:"HEMATURIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:1},{word:"GLOMERULONEFRITE",clue:"Inflamação dos glomérulos renais.",specialties:[10],difficulty:2},{word:"NEFROSE",clue:"Doença degenerativa dos rins.",specialties:[10],difficulty:2},{word:"HEMODIALISE",clue:"Procedimento para filtrar o sangue em insuficiência renal.",specialties:[10],difficulty:1},{word:"OFTALMOLOGIA",clue:"Especialidade médica que estuda os olhos.",specialties:[4],difficulty:1},{word:"CATARATA",clue:"Opacificação do cristalino do olho.",specialties:[4],difficulty:1},{word:"GLAUCOMA",clue:"Aumento da pressão intraocular.",specialties:[4],difficulty:1},{word:"RETINOPATIA",clue:"Doença da retina.",specialties:[4],difficulty:2},{word:"CERATITE",clue:"Inflamação da córnea.",specialties:[4,20],difficulty:2},{word:"UVEITE",clue:"Inflamação da úvea do olho.",specialties:[4,20],difficulty:2},{word:"ESTOMATOLOGIA",clue:"Estudo da boca e suas doenças.",specialties:[9],difficulty:2},{word:"CÁRIE",clue:"Destruição do esmalte dentário por bactérias.",specialties:[9],difficulty:1},{word:"PERIODONTITE",clue:"Inflamação dos tecidos de suporte dos dentes.",specialties:[9],difficulty:2},{word:"GINGIVITE",clue:"Inflamação da gengiva.",specialties:[9],difficulty:1},{word:"HEPATITE A",clue:"Infecção viral aguda do fígado.",specialties:[24,20],difficulty:1},{word:"HEPATITE B",clue:"Infecção viral crônica do fígado.",specialties:[24,20],difficulty:1},{word:"HEPATITE D",clue:"Infecção viral que necessita do vírus da hepatite B.",specialties:[24,20],difficulty:2},{word:"HEPATITE E",clue:"Infecção viral do fígado transmitida por via fecal-oral.",specialties:[24,20],difficulty:2},{word:"MONONUCLEOSE",clue:"Doença infecciosa causada pelo vírus Epstein-Barr.",specialties:[20,5],difficulty:2},{word:"LINFOMA",clue:"Câncer do sistema linfático.",specialties:[11,5],difficulty:2},{word:"LEUCEMIA LINFOCÍTICA",clue:"Câncer dos linfócitos.",specialties:[11,5],difficulty:2},{word:"LEUCEMIA MIELOCÍTICA",clue:"Câncer das células mieloides.",specialties:[11,5],difficulty:2},{word:"ANEMIA FERROPRIVA",clue:"Anemia por deficiência de ferro.",specialties:[5],difficulty:1},{word:"ANEMIA MEGALOBLÁSTICA",clue:"Anemia por deficiência de vitamina B12 ou ácido fólico.",specialties:[5],difficulty:2},{word:"ANEMIA HEMOLÍTICA",clue:"Anemia por destruição excessiva de eritrócitos.",specialties:[5],difficulty:2},{word:"ANEMIA FALCIFORME",clue:"Anemia hereditária com eritrócitos em forma de foice.",specialties:[5,27],difficulty:2},{word:"AIDS",clue:"Síndrome da imunodeficiência adquirida.",specialties:[20,21],difficulty:1},{word:"HIV",clue:"Vírus da imunodeficiência humana.",specialties:[20,21],difficulty:1},{word:"ZIKA VÍRUS",clue:"Vírus transmitido pelo mosquito Aedes.",specialties:[20],difficulty:1},{word:"CHIKUNGUNYA",clue:"Doença viral transmitida por mosquitos.",specialties:[20],difficulty:1},{word:"COVID",clue:"Doença causada pelo coronavírus SARS-CoV-2.",specialties:[20,8],difficulty:1},{word:"HERPES ZÓSTER",clue:"Reativação do vírus da varicela.",specialties:[20,12],difficulty:2},{word:"RUBEOLA",clue:"Doença viral com risco para gestantes.",specialties:[20,14],difficulty:1},{word:"VARÍOLA",clue:"Doença viral erradicada mundialmente.",specialties:[20],difficulty:2},{word:"FEBRE TIFOIDE",clue:"Infecção bacteriana por Salmonella typhi.",specialties:[20],difficulty:2},{word:"FEBRE REUMÁTICA",clue:"Doença inflamatória após infecção estreptocócica.",specialties:[7,20],difficulty:2},{word:"COLITE ULCERATIVA",clue:"Doença inflamatória do intestino grosso.",specialties:[9],difficulty:2},{word:"DOENÇA DE CROHN",clue:"Doença inflamatória que pode afetar qualquer parte do trato digestivo.",specialties:[9],difficulty:2},{word:"CELÍACA",clue:"Doença autoimune desencadeada pelo glúten.",specialties:[9,21],difficulty:2},{word:"INTOLERÂNCIA À LACTOSE",clue:"Incapacidade de digerir lactose.",specialties:[9],difficulty:1},{word:"SÍNDROME DO INTESTINO IRRITÁVEL",clue:"Distúrbio funcional do intestino.",specialties:[9],difficulty:1},{word:"DIVERTICULITE",clue:"Inflamação de divertículos no intestino grosso.",specialties:[9],difficulty:2},{word:"HEMORROIDAS",clue:"Dilatações venosas no canal anal.",specialties:[9],difficulty:1},{word:"FISSURA ANAL",clue:"Pequena laceração no revestimento anal.",specialties:[9],difficulty:2},{word:"FÍSTULA ANAL",clue:"Canal anormal entre o canal anal e a pele.",specialties:[9,19],difficulty:2},{word:"HERNIA DE HIATO",clue:"Protrusão do estômago através do diafragma.",specialties:[9],difficulty:2},{word:"ULCERA GÁSTRICA",clue:"Ferida na mucosa do estômago.",specialties:[9],difficulty:1},{word:"ULCERA DUODENAL",clue:"Ferida na mucosa do duodeno.",specialties:[9],difficulty:1},{word:"GASTRINOMA",clue:"Tumor produtor de gastrina.",specialties:[11,9],difficulty:3},{word:"INSULINOMA",clue:"Tumor produtor de insulina.",specialties:[11,6],difficulty:3},{word:"FEOCROMOCITOMA",clue:"Tumor da medula adrenal produtor de catecolaminas.",specialties:[11,6],difficulty:3},{word:"ADENOMA HIPOFISÁRIO",clue:"Tumor benigno da hipófise.",specialties:[11,6],difficulty:2},{word:"NEOPLASIA ENDOCRINA MÚLTIPLA",clue:"Síndrome genética com múltiplos tumores endócrinos.",specialties:[11,6,27],difficulty:3},{word:"HANSENÍASE",clue:"Doença infecciosa crônica causada pelo Mycobacterium leprae.",specialties:[20,12],difficulty:2},{word:"PIODERMA",clue:"Infecção cutânea purulenta.",specialties:[12,20],difficulty:2},{word:"DERMATOMIOSITE",clue:"Doença inflamatória da pele e músculos.",specialties:[12,17],difficulty:3},{word:"PSORIASE",clue:"Doença autoimune com placas escamosas na pele.",specialties:[12,21],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação da pele em áreas delimitadas.",specialties:[12],difficulty:1},{word:"ALOPECIA AREATA",clue:"Perda de cabelo em áreas específicas.",specialties:[12],difficulty:2},{word:"DERMATITE SEBORREICA",clue:"Inflamação crônica da pele com descamação oleosa.",specialties:[12],difficulty:1},{word:"DERMATITE ATÓPICA",clue:"Eczema crônico, geralmente iniciado na infância.",specialties:[12,16],difficulty:1},{word:"URTICÁRIA",clue:"Reação alérgica com erupções cutâneas pruriginosas.",specialties:[12,21],difficulty:1},{word:"ANGIOEDEMA",clue:"Inchaço profundo da pele e mucosas.",specialties:[12,21],difficulty:2},{word:"HEPATOCARCINOMA",clue:"Câncer primário do fígado.",specialties:[11,24],difficulty:2},{word:"CARCINOMA DE CÉLULAS ESCAMOSAS",clue:"Tipo de câncer de pele.",specialties:[11,12],difficulty:2},{word:"MELANOMA MALIGNO",clue:"Tipo agressivo de câncer de pele.",specialties:[11,12],difficulty:1},{word:"ADENOCARCINOMA",clue:"Câncer originado em células glandulares.",specialties:[11],difficulty:2},{word:"LEIOMIOSSARCOMA",clue:"Tumor maligno do músculo liso.",specialties:[11,17],difficulty:3},{word:"OSTEOSSARCOMA",clue:"Tumor maligno do osso.",specialties:[11,17],difficulty:2},{word:"RABDOMIOSSARCOMA",clue:"Tumor maligno do músculo estriado.",specialties:[11,17],difficulty:3},{word:"NEUROBLASTOMA",clue:"Tumor maligno do sistema nervoso simpático.",specialties:[11,16],difficulty:3},{word:"RETINOBLASTOMA",clue:"Tumor maligno da retina em crianças.",specialties:[11,16],difficulty:2},{word:"TERATOMA",clue:"Tumor derivado de células germinativas.",specialties:[11],difficulty:3},{word:"MESOTELIOMA",clue:"Câncer das células mesoteliais, associado ao amianto.",specialties:[11],difficulty:3},{word:"GLIOBLASTOMA",clue:"Tipo agressivo de tumor cerebral.",specialties:[11,4],difficulty:2},{word:"ASTROCITOMA",clue:"Tumor cerebral originado de astrócitos.",specialties:[11,4],difficulty:2},{word:"SCHWANNOMA",clue:"Tumor benigno das células de Schwann.",specialties:[11,4],difficulty:3},{word:"NEURINOMA",clue:"Outro nome para schwannoma.",specialties:[11,4],difficulty:3},{word:"MENINGIOMA",clue:"Tumor benigno das meninges.",specialties:[11,4],difficulty:2},{word:"SÍNDROME DE DOWN",clue:"Trissomia do cromossomo 21.",specialties:[16,27],difficulty:1},{word:"SÍNDROME DE TURNER",clue:"Monossomia do cromossomo X em meninas.",specialties:[14,27],difficulty:2},{word:"SÍNDROME DE KLINEFELTER",clue:"Cromossomo X extra em homens (XXY).",specialties:[15,27],difficulty:2},{word:"SÍNDROME DE EDWARDS",clue:"Trissomia do cromossomo 18.",specialties:[16,27],difficulty:3},{word:"SÍNDROME DE PATAU",clue:"Trissomia do cromossomo 13.",specialties:[16,27],difficulty:3},{word:"FIBROSE CÍSTICA",clue:"Doença genética que afeta glândulas exócrinas.",specialties:[16,27],difficulty:2},{word:"COREIA DE HUNTINGTON",clue:"Doença neurodegenerativa hereditária.",specialties:[4,27],difficulty:2},{word:"HEMOFILIA A",clue:"Deficiência do fator VIII de coagulação.",specialties:[5,27],difficulty:2},{word:"HEMOFILIA B",clue:"Deficiência do fator IX de coagulação.",specialties:[5,27],difficulty:2},{word:"DISTROFIA MUSCULAR DE DUCHENNE",clue:"Doença genética que causa fraqueza muscular.",specialties:[17,27],difficulty:2},{word:"FENILCETONURIA",clue:"Deficiência na metabolização da fenilalanina.",specialties:[16,27],difficulty:2},{word:"GALACTOSEMIA",clue:"Incapacidade de metabolizar galactose.",specialties:[16,27],difficulty:2},{word:"ANEMIA DE FANCONI",clue:"Doença genética com falência da medula óssea.",specialties:[5,27],difficulty:3},{word:"XERODERMA PIGMENTOSO",clue:"Hipersensibilidade à luz UV.",specialties:[12,27],difficulty:3},{word:"ENFERMAGEM",clue:"Profissão que auxilia na assistência ao paciente.",specialties:[25],difficulty:1},{word:"FISIOTERAPIA",clue:"Profissão que reabilita funções motoras.",specialties:[17],difficulty:1},{word:"FONOAUDIOLOGIA",clue:"Profissão que trata distúrbios da comunicação.",specialties:[4,13],difficulty:1},{word:"NUTRIÇÃO",clue:"Ciência que estuda os alimentos e suas interações.",specialties:[9,25],difficulty:1},{word:"PSICOLOGIA",clue:"Ciência que estuda o comportamento humano.",specialties:[13],difficulty:1},{word:"TERAPIA OCUPACIONAL",clue:"Profissão que auxilia na independência funcional.",specialties:[17,13],difficulty:1},{word:"FARMÁCIA",clue:"Ciência que estuda medicamentos.",specialties:[26],difficulty:1},{word:"BIOMEDICINA",clue:"Profissão que atua em análises clínicas e pesquisas.",specialties:[28],difficulty:1},{word:"BIOTECNOLOGIA",clue:"Uso de organismos vivos para desenvolver produtos.",specialties:[28,27],difficulty:2},{word:"PATOLOGIA CLÍNICA",clue:"Área que realiza exames laboratoriais para diagnóstico.",specialties:[22],difficulty:1},{word:"SAÚDE PÚBLICA",clue:"Área que estuda a saúde das populações.",specialties:[25],difficulty:1},{word:"EPIDEMIOLOGIA",clue:"Estudo da distribuição e determinantes das doenças.",specialties:[20],difficulty:1},{word:"BIOESTATÍSTICA",clue:"Aplicação de estatística em biologia e medicina.",specialties:[25],difficulty:2},{word:"BIOÉTICA",clue:"Estudo das questões éticas na medicina e biologia.",specialties:[25],difficulty:1},{word:"CIRURGIA PLÁSTICA",clue:"Especialidade que corrige deformidades e lesões.",specialties:[19],difficulty:1},{word:"CIRURGIA CARDIOVASCULAR",clue:"Cirurgia do coração e vasos sanguíneos.",specialties:[19,7],difficulty:1},{word:"CIRURGIA TORÁCICA",clue:"Cirurgia dos órgãos do tórax.",specialties:[19,8],difficulty:1},{word:"CIRURGIA VASCULAR",clue:"Cirurgia dos vasos sanguíneos periféricos.",specialties:[19,7],difficulty:1},{word:"CIRURGIA GERAL",clue:"Especialidade ampla que inclui vários tipos de cirurgia.",specialties:[19],difficulty:1},{word:"ORTOPEDIA",clue:"Especialidade que trata doenças do sistema musculoesquelético.",specialties:[17],difficulty:1},{word:"TRAUMATOLOGIA",clue:"Estudo das lesões causadas por traumas.",specialties:[17,25],difficulty:1},{word:"RADIOLOGIA INTERVENCIONISTA",clue:"Procedimentos minimamente invasivos guiados por imagem.",specialties:[18],difficulty:2},{word:"MEDICINA NUCLEAR",clue:"Uso de substâncias radioativas para diagnóstico e terapia.",specialties:[18],difficulty:2},{word:"DENSITOMETRIA ÓSSEA",clue:"Exame que avalia a densidade mineral óssea.",specialties:[18,17],difficulty:1},{word:"ANGIOGRAFIA",clue:"Exame radiológico dos vasos sanguíneos.",specialties:[18,7],difficulty:2},{word:"TOMOGRAFIA COMPUTADORIZADA",clue:"Exame de imagem que usa raios X para criar cortes transversais.",specialties:[18],difficulty:1},{word:"RESSONÂNCIA MAGNÉTICA",clue:"Exame de imagem que usa campos magnéticos.",specialties:[18],difficulty:1},{word:"ULTRASSONOGRAFIA",clue:"Exame de imagem que usa ondas sonoras.",specialties:[18],difficulty:1},{word:"ECOCARDIOGRAMA",clue:"Ultrassom do coração.",specialties:[7,18],difficulty:1},{word:"ELETROENCEFALOGRAMA",clue:"Registro da atividade elétrica cerebral.",specialties:[4,18],difficulty:1},{word:"ELETROMIOGRAMA",clue:"Exame que avalia a atividade elétrica dos músculos.",specialties:[17,18],difficulty:2},{word:"TESTE ERGOMÉTRICO",clue:"Avaliação do desempenho cardíaco durante esforço.",specialties:[7],difficulty:1},{word:"CINTILOGRAFIA",clue:"Exame que usa radiofármacos para avaliar órgãos.",specialties:[18],difficulty:2},{word:"PET SCAN",clue:"Tomografia por emissão de pósitrons.",specialties:[18],difficulty:2},{word:"COLPOSCOPIA",clue:"Exame do colo uterino com lente de aumento.",specialties:[15],difficulty:1},{word:"HISTEROSCOPIA",clue:"Exame endoscópico do interior do útero.",specialties:[15],difficulty:2},{word:"LAPAROSCOPIA",clue:"Procedimento cirúrgico minimamente invasivo no abdômen.",specialties:[19],difficulty:1},{word:"ENDOSCOPIA DIGESTIVA",clue:"Exame do trato gastrointestinal com endoscópio.",specialties:[9,18],difficulty:1},{word:"BRONCOSCOPIA",clue:"Exame das vias aéreas com broncoscópio.",specialties:[8,18],difficulty:2},{word:"ARTROSCOPIA",clue:"Exame de articulações com endoscópio.",specialties:[17,18],difficulty:2},{word:"CISTOSCOPIA",clue:"Exame da bexiga com cistoscópio.",specialties:[10,18],difficulty:2},{word:"ELETROCARDIOGRAMA",clue:"Registro da atividade elétrica do coração.",specialties:[7],difficulty:1},{word:"MAPA",clue:"Monitorização Ambulatorial da Pressão Arterial.",specialties:[7],difficulty:2},{word:"HOLTER",clue:"Monitorização eletrocardiográfica contínua.",specialties:[7],difficulty:2},{word:"DOPPLER TRANSCRANIANO",clue:"Exame ultrassonográfico das artérias cerebrais.",specialties:[4,18],difficulty:3},{word:"TESTE DE ESFORÇO",clue:"Avaliação da resposta cardiovascular ao exercício.",specialties:[7],difficulty:1},{word:"BIÓPSIA",clue:"Remoção de tecido para exame diagnóstico.",specialties:[19,22],difficulty:1},{word:"HEMODINÂMICA",clue:"Estudo do fluxo sanguíneo.",specialties:[7],difficulty:2},{word:"ANGIOPLASTIA",clue:"Procedimento para desobstruir vasos sanguíneos.",specialties:[7,19],difficulty:1},{word:"CATETERISMO CARDÍACO",clue:"Procedimento para avaliar as artérias coronárias.",specialties:[7,19],difficulty:1},{word:"MARCA-PASSO",clue:"Dispositivo que regula os batimentos cardíacos.",specialties:[7],difficulty:1},{word:"PNEUMONIA",clue:"Infecção dos pulmões causada por bactérias ou vírus.",specialties:[8,20],difficulty:1},{word:"BRONQUITE",clue:"Inflamação dos brônquios.",specialties:[8,20],difficulty:1},{word:"ENFISEMA",clue:"Doença pulmonar que causa falta de ar.",specialties:[8],difficulty:2},{word:"ASMA",clue:"Doença respiratória caracterizada por broncoespasmo.",specialties:[8],difficulty:1},{word:"TUBERCULOSE",clue:"Doença infecciosa causada pelo Mycobacterium tuberculosis.",specialties:[8,20],difficulty:1},{word:"HIPERTENSAO",clue:"Pressão arterial elevada crônica.",specialties:[7],difficulty:1},{word:"INFARTO",clue:"Morte do tecido cardíaco devido à falta de oxigênio.",specialties:[7,25],difficulty:1},{word:"ANGINA",clue:"Dor no peito devido à diminuição do fluxo sanguíneo.",specialties:[7],difficulty:1},{word:"ATEROSCLEROSE",clue:"Acúmulo de placas nas artérias.",specialties:[7],difficulty:2},{word:"ARRITMIA",clue:"Batimentos cardíacos irregulares.",specialties:[7],difficulty:1},{word:"GASTRITE",clue:"Inflamação da mucosa do estômago.",specialties:[9],difficulty:1},{word:"ESOFAGITE",clue:"Inflamação do esôfago.",specialties:[9],difficulty:1},{word:"CIRROSE",clue:"Cicatrização crônica do fígado.",specialties:[24],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9],difficulty:2},{word:"HEPATITE",clue:"Inflamação do fígado.",specialties:[24,20],difficulty:1},{word:"INSUFICIENCIA RENAL",clue:"Perda da função dos rins.",specialties:[10],difficulty:1},{word:"LITIASE RENAL",clue:"Formação de cálculos nos rins.",specialties:[10],difficulty:1},{word:"NEFROPATIA DIABETICA",clue:"Doença renal causada por diabetes.",specialties:[10,6],difficulty:2},{word:"SINDROME NEFROTICA",clue:"Condição renal com perda de proteína na urina.",specialties:[10],difficulty:2},{word:"HEMATURIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:1},{word:"OSTEOPOROSE",clue:"Doença que diminui a densidade óssea.",specialties:[17],difficulty:1},{word:"ARTRITE REUMATOIDE",clue:"Doença autoimune que causa inflamação nas articulações.",specialties:[17,21],difficulty:2},{word:"LUXACAO",clue:"Deslocamento de um osso da articulação.",specialties:[17],difficulty:1},{word:"FRATURA",clue:"Quebra de um osso.",specialties:[17],difficulty:1},{word:"ESCOLIOSE",clue:"Curvatura anormal da coluna vertebral.",specialties:[17],difficulty:1},{word:"DEPRESSAO",clue:"Transtorno mental com humor deprimido persistente.",specialties:[13],difficulty:1},{word:"ANSIEDADE",clue:"Sensação de preocupação e medo intensos.",specialties:[13],difficulty:1},{word:"ESQUIZOFRENIA",clue:"Transtorno mental que afeta a percepção da realidade.",specialties:[13],difficulty:2},{word:"TRANSTORNO BIPOLAR",clue:"Transtorno de humor com episódios de mania e depressão.",specialties:[13],difficulty:1},{word:"FOBIA",clue:"Medo intenso e irracional de algo específico.",specialties:[13],difficulty:1},{word:"LEUCEMIA",clue:"Câncer dos tecidos formadores de sangue.",specialties:[11,5],difficulty:2},{word:"LINFOMA",clue:"Câncer do sistema linfático.",specialties:[11,5],difficulty:2},{word:"MIELOMA MULTIPLO",clue:"Câncer das células plasmáticas.",specialties:[11,5],difficulty:3},{word:"CARCINOMA",clue:"Tipo de câncer que começa na pele ou nos tecidos que revestem órgãos.",specialties:[11],difficulty:2},{word:"SARCOMA",clue:"Câncer dos tecidos conjuntivos.",specialties:[11],difficulty:2},{word:"ANEMIA",clue:"Diminuição da capacidade do sangue de transportar oxigênio.",specialties:[5],difficulty:1},{word:"HEMOFILIA",clue:"Distúrbio da coagulação do sangue.",specialties:[5,27],difficulty:2},{word:"TALASSEMIA",clue:"Doença hereditária que afeta a produção de hemoglobina.",specialties:[5,27],difficulty:2},{word:"MALARIA",clue:"Doença infecciosa transmitida por mosquitos.",specialties:[20],difficulty:2},{word:"DENGUE",clue:"Doença viral transmitida pelo mosquito Aedes aegypti.",specialties:[20],difficulty:1},{word:"ZIKA",clue:"Doença viral transmitida por mosquitos.",specialties:[20],difficulty:1},{word:"LEPTOSPIROSE",clue:"Doença bacteriana transmitida pela urina de animais.",specialties:[20],difficulty:2},{word:"VARICELA",clue:"Doença viral também conhecida como catapora.",specialties:[16,20],difficulty:1},{word:"SARAMPO",clue:"Doença viral contagiosa com erupções cutâneas.",specialties:[16,20],difficulty:1},{word:"CAXUMBA",clue:"Infecção viral que causa inchaço das glândulas salivares.",specialties:[16,20],difficulty:1},{word:"RUBEOLA",clue:"Doença viral que pode causar defeitos congênitos.",specialties:[16,14],difficulty:1},{word:"POLIOMIELITE",clue:"Doença viral que pode causar paralisia.",specialties:[16,20],difficulty:2},{word:"HEMORRAGIA",clue:"Perda excessiva de sangue.",specialties:[25,5],difficulty:1},{word:"SINCOPE",clue:"Perda temporária da consciência.",specialties:[25],difficulty:2},{word:"CONVULSAO",clue:"Contrações musculares involuntárias e súbitas.",specialties:[25],difficulty:1},{word:"CHOQUE",clue:"Condição crítica de insuficiência circulatória.",specialties:[25],difficulty:2},{word:"HIPERTERMIA",clue:"Aumento anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"HIPOTERMIA",clue:"Diminuição anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"ALZHEIMER",clue:"Doença neurodegenerativa que causa demência.",specialties:[4],difficulty:1},{word:"PARKINSON",clue:"Doença neurodegenerativa que afeta o movimento.",specialties:[4],difficulty:1},{word:"EPILEPSIA",clue:"Condição neurológica com crises convulsivas.",specialties:[4],difficulty:1},{word:"MIGRANIA",clue:"Tipo de dor de cabeça intensa e pulsátil.",specialties:[4],difficulty:1},{word:"ESCLEROSE MULTIPLA",clue:"Doença autoimune que afeta o sistema nervoso central.",specialties:[4,21],difficulty:2},{word:"GASTROENTERITE",clue:"Inflamação do estômago e intestinos.",specialties:[9],difficulty:1},{word:"APENDICITE",clue:"Inflamação do apêndice.",specialties:[9],difficulty:1},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[9],difficulty:2},{word:"HEMORROIDAS",clue:"Dilatação das veias do reto e ânus.",specialties:[9],difficulty:1},{word:"DIVERTICULITE",clue:"Inflamação dos divertículos no intestino grosso.",specialties:[9],difficulty:2},{word:"BRONCODILATADOR",clue:"Medicamento que dilata as vias aéreas.",specialties:[8,26],difficulty:1},{word:"ANTIHISTAMINICO",clue:"Medicamento que bloqueia os efeitos da histamina.",specialties:[26,21],difficulty:1},{word:"ANALGESICO",clue:"Medicamento que alivia a dor.",specialties:[26],difficulty:1},{word:"ANTIPIRETICO",clue:"Medicamento que reduz a febre.",specialties:[26],difficulty:1},{word:"ANTIBIOTICO",clue:"Medicamento que combate infecções bacterianas.",specialties:[26,20],difficulty:1},{word:"INSULINA",clue:"Hormônio que regula os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"GLUCAGON",clue:"Hormônio que aumenta os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"CORTISOL",clue:"Hormônio do estresse produzido pelas glândulas adrenais.",specialties:[6],difficulty:1},{word:"ADRENALINA",clue:"Hormônio que prepara o corpo para a ação.",specialties:[6,1],difficulty:1},{word:"ESTROGENIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"PROGESTERONA",clue:"Hormônio envolvido no ciclo menstrual e gravidez.",specialties:[6,15],difficulty:1},{word:"TESTOSTERONA",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:1},{word:"TIROXINA",clue:"Hormônio produzido pela tireoide.",specialties:[6],difficulty:1},{word:"PARATORMONIO",clue:"Hormônio que regula os níveis de cálcio no sangue.",specialties:[6],difficulty:2},{word:"HEMOSTASIA",clue:"Processo de parar um sangramento.",specialties:[5,19],difficulty:1},{word:"FIBRINA",clue:"Proteína que forma a rede de um coágulo sanguíneo.",specialties:[5,29],difficulty:2},{word:"PLAQUETA",clue:"Célula sanguínea envolvida na coagulação.",specialties:[5],difficulty:1},{word:"HEPARINA",clue:"Anticoagulante natural do corpo.",specialties:[5,26],difficulty:2},{word:"WARFARINA",clue:"Medicamento anticoagulante.",specialties:[26,5],difficulty:2},{word:"INSOMNIO",clue:"Dificuldade em iniciar ou manter o sono.",specialties:[13],difficulty:1},{word:"NARCOLEPSIA",clue:"Distúrbio do sono com sonolência diurna excessiva.",specialties:[13],difficulty:2},{word:"APNEIA DO SONO",clue:"Interrupção temporária da respiração durante o sono.",specialties:[8],difficulty:1},{word:"HIPOTIREOIDISMO",clue:"Deficiência de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"HIPERTIREOIDISMO",clue:"Excesso de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"ACNE",clue:"Doença de pele caracterizada por espinhas.",specialties:[12],difficulty:1},{word:"DERMATITE",clue:"Inflamação da pele.",specialties:[12],difficulty:1},{word:"PSORIASE",clue:"Doença de pele com placas escamosas.",specialties:[12],difficulty:1},{word:"ECZEMA",clue:"Doença de pele com inflamação e prurido.",specialties:[12],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação em áreas da pele.",specialties:[12],difficulty:1},{word:"PNEUMONIA",clue:"Infecção dos pulmões causada por bactérias ou vírus.",specialties:[8,20],difficulty:1},{word:"BRONQUITE",clue:"Inflamação dos brônquios.",specialties:[8,20],difficulty:1},{word:"ENFISEMA",clue:"Doença pulmonar que causa falta de ar.",specialties:[8],difficulty:2},{word:"ASMA",clue:"Doença respiratória caracterizada por broncoespasmo.",specialties:[8],difficulty:1},{word:"TUBERCULOSE",clue:"Doença infecciosa causada pelo Mycobacterium tuberculosis.",specialties:[8,20],difficulty:1},{word:"HIPERTENSAO",clue:"Pressão arterial elevada crônica.",specialties:[7],difficulty:1},{word:"INFARTO",clue:"Morte do tecido cardíaco devido à falta de oxigênio.",specialties:[7,25],difficulty:1},{word:"ANGINA",clue:"Dor no peito devido à diminuição do fluxo sanguíneo.",specialties:[7],difficulty:1},{word:"ATEROSCLEROSE",clue:"Acúmulo de placas nas artérias.",specialties:[7],difficulty:2},{word:"ARRITMIA",clue:"Batimentos cardíacos irregulares.",specialties:[7],difficulty:1},{word:"GASTRITE",clue:"Inflamação da mucosa do estômago.",specialties:[9],difficulty:1},{word:"ESOFAGITE",clue:"Inflamação do esôfago.",specialties:[9],difficulty:1},{word:"CIRROSE",clue:"Cicatrização crônica do fígado.",specialties:[24],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9],difficulty:2},{word:"HEPATITE",clue:"Inflamação do fígado.",specialties:[24,20],difficulty:1},{word:"INSUFICIENCIA RENAL",clue:"Perda da função dos rins.",specialties:[10],difficulty:1},{word:"LITIASE RENAL",clue:"Formação de cálculos nos rins.",specialties:[10],difficulty:1},{word:"NEFROPATIA DIABETICA",clue:"Doença renal causada por diabetes.",specialties:[10,6],difficulty:2},{word:"SINDROME NEFROTICA",clue:"Condição renal com perda de proteína na urina.",specialties:[10],difficulty:2},{word:"HEMATURIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:1},{word:"OSTEOPOROSE",clue:"Doença que diminui a densidade óssea.",specialties:[17],difficulty:1},{word:"ARTRITE REUMATOIDE",clue:"Doença autoimune que causa inflamação nas articulações.",specialties:[17,21],difficulty:2},{word:"LUXACAO",clue:"Deslocamento de um osso da articulação.",specialties:[17],difficulty:1},{word:"FRATURA",clue:"Quebra de um osso.",specialties:[17],difficulty:1},{word:"ESCOLIOSE",clue:"Curvatura anormal da coluna vertebral.",specialties:[17],difficulty:1},{word:"DEPRESSAO",clue:"Transtorno mental com humor deprimido persistente.",specialties:[13],difficulty:1},{word:"ANSIEDADE",clue:"Sensação de preocupação e medo intensos.",specialties:[13],difficulty:1},{word:"ESQUIZOFRENIA",clue:"Transtorno mental que afeta a percepção da realidade.",specialties:[13],difficulty:2},{word:"TRANSTORNO BIPOLAR",clue:"Transtorno de humor com episódios de mania e depressão.",specialties:[13],difficulty:1},{word:"FOBIA",clue:"Medo intenso e irracional de algo específico.",specialties:[13],difficulty:1},{word:"LEUCEMIA",clue:"Câncer dos tecidos formadores de sangue.",specialties:[11,5],difficulty:2},{word:"LINFOMA",clue:"Câncer do sistema linfático.",specialties:[11,5],difficulty:2},{word:"MIELOMA MULTIPLO",clue:"Câncer das células plasmáticas.",specialties:[11,5],difficulty:3},{word:"CARCINOMA",clue:"Tipo de câncer que começa na pele ou nos tecidos que revestem órgãos.",specialties:[11],difficulty:2},{word:"SARCOMA",clue:"Câncer dos tecidos conjuntivos.",specialties:[11],difficulty:2},{word:"ANEMIA",clue:"Diminuição da capacidade do sangue de transportar oxigênio.",specialties:[5],difficulty:1},{word:"HEMOFILIA",clue:"Distúrbio da coagulação do sangue.",specialties:[5,27],difficulty:2},{word:"TALASSEMIA",clue:"Doença hereditária que afeta a produção de hemoglobina.",specialties:[5,27],difficulty:2},{word:"MALARIA",clue:"Doença infecciosa transmitida por mosquitos.",specialties:[20],difficulty:2},{word:"DENGUE",clue:"Doença viral transmitida pelo mosquito Aedes aegypti.",specialties:[20],difficulty:1},{word:"ZIKA",clue:"Doença viral transmitida por mosquitos.",specialties:[20],difficulty:1},{word:"LEPTOSPIROSE",clue:"Doença bacteriana transmitida pela urina de animais.",specialties:[20],difficulty:2},{word:"VARICELA",clue:"Doença viral também conhecida como catapora.",specialties:[16,20],difficulty:1},{word:"SARAMPO",clue:"Doença viral contagiosa com erupções cutâneas.",specialties:[16,20],difficulty:1},{word:"CAXUMBA",clue:"Infecção viral que causa inchaço das glândulas salivares.",specialties:[16,20],difficulty:1},{word:"RUBEOLA",clue:"Doença viral que pode causar defeitos congênitos.",specialties:[16,14],difficulty:1},{word:"POLIOMIELITE",clue:"Doença viral que pode causar paralisia.",specialties:[16,20],difficulty:2},{word:"HEMORRAGIA",clue:"Perda excessiva de sangue.",specialties:[25,5],difficulty:1},{word:"SINCOPE",clue:"Perda temporária da consciência.",specialties:[25],difficulty:2},{word:"CONVULSAO",clue:"Contrações musculares involuntárias e súbitas.",specialties:[25],difficulty:1},{word:"CHOQUE",clue:"Condição crítica de insuficiência circulatória.",specialties:[25],difficulty:2},{word:"HIPERTERMIA",clue:"Aumento anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"HIPOTERMIA",clue:"Diminuição anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"ALZHEIMER",clue:"Doença neurodegenerativa que causa demência.",specialties:[4],difficulty:1},{word:"PARKINSON",clue:"Doença neurodegenerativa que afeta o movimento.",specialties:[4],difficulty:1},{word:"EPILEPSIA",clue:"Condição neurológica com crises convulsivas.",specialties:[4],difficulty:1},{word:"MIGRANIA",clue:"Tipo de dor de cabeça intensa e pulsátil.",specialties:[4],difficulty:1},{word:"ESCLEROSE MULTIPLA",clue:"Doença autoimune que afeta o sistema nervoso central.",specialties:[4,21],difficulty:2},{word:"GASTROENTERITE",clue:"Inflamação do estômago e intestinos.",specialties:[9],difficulty:1},{word:"APENDICITE",clue:"Inflamação do apêndice.",specialties:[9],difficulty:1},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[9],difficulty:2},{word:"HEMORROIDAS",clue:"Dilatação das veias do reto e ânus.",specialties:[9],difficulty:1},{word:"DIVERTICULITE",clue:"Inflamação dos divertículos no intestino grosso.",specialties:[9],difficulty:2},{word:"BRONCODILATADOR",clue:"Medicamento que dilata as vias aéreas.",specialties:[8,26],difficulty:1},{word:"ANTIHISTAMINICO",clue:"Medicamento que bloqueia os efeitos da histamina.",specialties:[26,21],difficulty:1},{word:"ANALGESICO",clue:"Medicamento que alivia a dor.",specialties:[26],difficulty:1},{word:"ANTIPIRETICO",clue:"Medicamento que reduz a febre.",specialties:[26],difficulty:1},{word:"ANTIBIOTICO",clue:"Medicamento que combate infecções bacterianas.",specialties:[26,20],difficulty:1},{word:"INSULINA",clue:"Hormônio que regula os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"GLUCAGON",clue:"Hormônio que aumenta os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"CORTISOL",clue:"Hormônio do estresse produzido pelas glândulas adrenais.",specialties:[6],difficulty:1},{word:"ADRENALINA",clue:"Hormônio que prepara o corpo para a ação.",specialties:[6,1],difficulty:1},{word:"ESTROGENIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"PROGESTERONA",clue:"Hormônio envolvido no ciclo menstrual e gravidez.",specialties:[6,15],difficulty:1},{word:"TESTOSTERONA",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:1},{word:"TIROXINA",clue:"Hormônio produzido pela tireoide.",specialties:[6],difficulty:1},{word:"PARATORMONIO",clue:"Hormônio que regula os níveis de cálcio no sangue.",specialties:[6],difficulty:2},{word:"HEMOSTASIA",clue:"Processo de parar um sangramento.",specialties:[5,19],difficulty:1},{word:"FIBRINA",clue:"Proteína que forma a rede de um coágulo sanguíneo.",specialties:[5,29],difficulty:2},{word:"PLAQUETA",clue:"Célula sanguínea envolvida na coagulação.",specialties:[5],difficulty:1},{word:"HEPARINA",clue:"Anticoagulante natural do corpo.",specialties:[5,26],difficulty:2},{word:"WARFARINA",clue:"Medicamento anticoagulante.",specialties:[26,5],difficulty:2},{word:"INSOMNIO",clue:"Dificuldade em iniciar ou manter o sono.",specialties:[13],difficulty:1},{word:"NARCOLEPSIA",clue:"Distúrbio do sono com sonolência diurna excessiva.",specialties:[13],difficulty:2},{word:"APNEIA DO SONO",clue:"Interrupção temporária da respiração durante o sono.",specialties:[8],difficulty:1},{word:"HIPOTIREOIDISMO",clue:"Deficiência de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"HIPERTIREOIDISMO",clue:"Excesso de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"ACNE",clue:"Doença de pele caracterizada por espinhas.",specialties:[12],difficulty:1},{word:"DERMATITE",clue:"Inflamação da pele.",specialties:[12],difficulty:1},{word:"PSORIASE",clue:"Doença de pele com placas escamosas.",specialties:[12],difficulty:1},{word:"ECZEMA",clue:"Doença de pele com inflamação e prurido.",specialties:[12],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação em áreas da pele.",specialties:[12],difficulty:1},{word:"Anestesia Geral",clue:"Anestesia que provoca inconsciência e ausência de sensibilidade em todo o corpo.",specialties:[23,19],difficulty:1},{word:"Anestesia Local",clue:"Anestesia que bloqueia a sensibilidade em uma área específica do corpo.",specialties:[23,26],difficulty:1},{word:"Sedação",clue:"Estado induzido por fármacos que reduz a irritabilidade ou excitação.",specialties:[23,26],difficulty:1},{word:"Bloqueio Epidural",clue:"Anestesia regional injetada no espaço epidural, bloqueando a dor na metade inferior do corpo.",specialties:[23,19],difficulty:2},{word:"Bloqueio Raquidiano",clue:"Anestesia regional injetada no líquido cefalorraquidiano para bloquear a sensibilidade abaixo da injeção.",specialties:[23,19],difficulty:2},{word:"Intubação Endotraqueal",clue:"Inserção de um tubo na traqueia para manter a via aérea aberta.",specialties:[23,8],difficulty:1},{word:"Laringoscópio",clue:"Instrumento utilizado para visualizar a laringe durante a intubação.",specialties:[23,8],difficulty:2},{word:"Propofol",clue:"Agente anestésico intravenoso de ação rápida.",specialties:[23,26],difficulty:2},{word:"Fentanil",clue:"Analgésico opioide potente usado em anestesia.",specialties:[23,26],difficulty:2},{word:"Lidocaína",clue:"Anestésico local e antiarrítmico usado para bloquear impulsos nervosos.",specialties:[23,26],difficulty:1},{word:"Anestésico Inalatório",clue:"Fármacos administrados por inalação para induzir anestesia geral.",specialties:[23,26],difficulty:2},{word:"Anestésico Intravenoso",clue:"Fármacos administrados por via intravenosa para induzir anestesia.",specialties:[23,26],difficulty:1},{word:"Monitorização Hemodinâmica",clue:"Avaliação contínua das funções cardiovasculares durante a anestesia.",specialties:[23,7],difficulty:2},{word:"Oxímetro de Pulso",clue:"Dispositivo que mede a saturação de oxigênio no sangue.",specialties:[23,8],difficulty:1},{word:"Hipotermia Perioperatória",clue:"Redução da temperatura corporal durante o período cirúrgico.",specialties:[23,19],difficulty:3},{word:"Apneia",clue:"Interrupção temporária da respiração.",specialties:[23,8],difficulty:1},{word:"Ventilação Mecânica",clue:"Suporte respiratório artificial para pacientes incapazes de respirar adequadamente.",specialties:[23,8],difficulty:2},{word:"Complicações Anestésicas",clue:"Eventos adversos que ocorrem durante ou após a administração de anestesia.",specialties:[23,25],difficulty:3},{word:"Reação Anafilática",clue:"Reação alérgica grave potencialmente fatal.",specialties:[23,21],difficulty:2},{word:"Bloqueador Neuromuscular",clue:"Fármaco que causa paralisia muscular temporária.",specialties:[23,26],difficulty:2},{word:"Succinilcolina",clue:"Agente bloqueador neuromuscular de ação rápida.",specialties:[23,26],difficulty:3},{word:"Monitorização BIS",clue:"Índice bispectral usado para avaliar o nível de consciência durante a anestesia.",specialties:[23,4],difficulty:3},{word:"Despertar Intraoperatório",clue:"Consciência durante a cirurgia sob anestesia geral.",specialties:[23,4],difficulty:3},{word:"Analgesia Pós-operatória",clue:"Controle da dor após procedimentos cirúrgicos.",specialties:[23,19],difficulty:1},{word:"Via Aérea Difícil",clue:"Situação em que a intubação ou ventilação é desafiadora.",specialties:[23,8],difficulty:3},{word:"Recuperação Anestésica",clue:"Período de retorno à consciência e funções normais após anestesia.",specialties:[23,19],difficulty:1},{word:"Curarização",clue:"Uso de bloqueadores neuromusculares para relaxamento muscular.",specialties:[23,26],difficulty:2},{word:"Anestesia Balanceada",clue:"Uso combinado de vários agentes anestésicos para otimizar efeitos.",specialties:[23,26],difficulty:2},{word:"Analgesia Epidural",clue:"Administração de analgésicos no espaço epidural para controle da dor.",specialties:[23,19],difficulty:2},{word:"Cricoidotomia",clue:"Acesso de emergência às vias aéreas através da membrana cricotireóidea.",specialties:[23,25],difficulty:3},{word:"Bactéria Gram-Positiva",clue:"Bactérias que retêm o corante cristal violeta durante a coloração de Gram, indicando uma parede celular espessa de peptidoglicano.",specialties:[28,22],difficulty:2},{word:"Bactéria Gram-Negativa",clue:"Bactérias que não retêm o corante cristal violeta durante a coloração de Gram, possuindo uma parede celular fina com uma membrana externa lipopolissacarídica.",specialties:[28,22],difficulty:2},{word:"Vírus",clue:"Agente infeccioso microscópico que necessita de uma célula hospedeira para replicação.",specialties:[28,20],difficulty:1},{word:"Fungo",clue:"Organismos eucariotos que podem causar infecções em humanos, como fungos dermatófitos e leveduras.",specialties:[28,12],difficulty:2},{word:"Parasitologia",clue:"Ramo da microbiologia que estuda os parasitas e suas interações com os hospedeiros.",specialties:[28,21],difficulty:3},{word:"Escherichia coli",clue:"Bactéria Gram-negativa comensal do intestino humano, podendo causar infecções do trato urinário e gastroenterites.",specialties:[28,10,20],difficulty:2},{word:"Staphylococcus aureus",clue:"Bactéria Gram-positiva que pode causar uma variedade de infecções, desde infecções cutâneas até pneumonia e sepse.",specialties:[28,20,19],difficulty:2},{word:"Mycobacterium tuberculosis",clue:"Agente etiológico da tuberculose, uma doença infecciosa que afeta principalmente os pulmões.",specialties:[28,20,24],difficulty:3},{word:"Clostridioides difficile",clue:"Bactéria Gram-positiva anaeróbia associada a infecções intestinais, frequentemente após uso de antibióticos.",specialties:[28,20,19],difficulty:3},{word:"Pneumocystis jirovecii",clue:"Fungo oportunista que causa pneumonia em pacientes imunocomprometidos.",specialties:[28,20,16],difficulty:3},{word:"Bacillus anthracis",clue:"Bactéria Gram-positiva causadora do antraz, uma doença infecciosa grave.",specialties:[28,20,19],difficulty:3},{word:"Candida albicans",clue:"Levedura oportunista que pode causar candidíase em diversas partes do corpo.",specialties:[28,12,20],difficulty:2},{word:"Helicobacter pylori",clue:"Bactéria Gram-negativa associada a úlceras gástricas e duodenais.",specialties:[28,9,20],difficulty:2},{word:"Neisseria gonorrhoeae",clue:"Bactéria Gram-negativa causadora da gonorreia, uma infecção sexualmente transmissível.",specialties:[28,15,20],difficulty:2},{word:"Legionella pneumophila",clue:"Bactéria Gram-negativa que causa a doença do legionário, uma forma grave de pneumonia.",specialties:[28,8,20],difficulty:3},{word:"Salmonella enterica",clue:"Bactéria Gram-negativa que causa salmonelose, uma infecção alimentar.",specialties:[28,9,20],difficulty:2},{word:"Borrelia burgdorferi",clue:"Bactéria Gram-negativa transmitida por carrapatos, causadora da doença de Lyme.",specialties:[28,21,25],difficulty:3},{word:"Vírus Influenza",clue:"Vírus causador da gripe, uma doença respiratória altamente contagiosa.",specialties:[28,20,8],difficulty:1},{word:"Herpes Simplex Vírus",clue:"Vírus causador do herpes labial e genital, caracterizado por lesões vesiculares.",specialties:[28,20,13],difficulty:2},{word:"Varicella-Zoster Vírus",clue:"Vírus causador da catapora e do herpes zoster (cobreiro).",specialties:[28,20,4],difficulty:2},{word:"HIV (Vírus da Imunodeficiência Humana)",clue:"Vírus que ataca o sistema imunológico, levando à síndrome da imunodeficiência adquirida (AIDS).",specialties:[28,20,13],difficulty:3},{word:"Rinovírus",clue:"Vírus causador do resfriado comum, responsável por infecções respiratórias leves.",specialties:[28,20,8],difficulty:1},{word:"Coronavirus",clue:"Família de vírus que inclui o SARS-CoV-2, causador da COVID-19.",specialties:[28,20,8],difficulty:2},{word:"Plasmodium falciparum",clue:"Parasita protozoário causador da forma mais grave da malária.",specialties:[28,16,21],difficulty:3},{word:"Toxoplasma gondii",clue:"Protozoário causador da toxoplasmose, uma infecção que pode afetar o cérebro e os olhos.",specialties:[28,21,16],difficulty:3},{word:"Leishmania",clue:"Genus de protozoários causadores da leishmaniose, transmitida por flebotomíneos.",specialties:[28,21,25],difficulty:3},{word:"Trichomonas vaginalis",clue:"Protozoário causador da tricomoníase, uma infecção sexualmente transmissível.",specialties:[28,15,20],difficulty:2},{word:"Candida auris",clue:"Fungo emergente resistente a múltiplos antifúngicos, associado a surtos em ambientes hospitalares.",specialties:[28,12,20],difficulty:3},{word:"Corynebacterium diphtheriae",clue:"Bactéria Gram-positiva causadora da difteria, uma doença respiratória grave.",specialties:[28,20,19],difficulty:3},{word:"Enterococcus faecalis",clue:"Bactéria Gram-positiva comumente encontrada no trato gastrointestinal, podendo causar infecções urinárias e endocardite.",specialties:[28,20,19],difficulty:2},{word:"Listeria monocytogenes",clue:"Bactéria Gram-positiva que causa listeriose, uma infecção alimentar grave.",specialties:[28,9,20],difficulty:3},{word:"Klebsiella pneumoniae",clue:"Bactéria Gram-negativa associada a infecções respiratórias e do trato urinário.",specialties:[28,20,19],difficulty:2},{word:"Pseudomonas aeruginosa",clue:"Bactéria Gram-negativa oportunista, frequentemente associada a infecções hospitalares.",specialties:[28,20,19],difficulty:3}];function mP(){const t=localStorage.getItem("vocabularyWords");if(t)return JSON.parse(t);{const e=pP.map(n=>({...n,isActive:!0}));return localStorage.setItem("vocabularyWords",JSON.stringify(e)),e}}const MI=mP();function Ds(t){localStorage.setItem("vocabularyWords",JSON.stringify(t))}const Ho=Mo("vocabulary",{state:()=>({words:MI,specialties:LI}),getters:{filteredWords:t=>(e="all",n="all")=>{let i=t.words;if(e!=="all"){const s=parseInt(e);i=i.filter(r=>r.specialties.includes(s))}if(n!=="all"){const s=parseInt(n);i=i.filter(r=>r.difficulty===s)}return i}},actions:{updateWords(t){this.words=t}}}),jo=Mo("darkMode",()=>{const t=re(!1);function e(){t.value=!t.value}return{isDarkMode:t,toggleDarkMode:e}}),pn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},gP={__name:"DarkModeToggle",setup(t){const e=jo();function n(){e.toggleDarkMode()}const i=ze(()=>e.isDarkMode);return(s,r)=>{const o=fs("font-awesome-icon");return ce(),de("button",{onClick:n},[fe(o,{icon:i.value?["fas","moon"]:["fas","sun"]},null,8,["icon"])])}}},yP=pn(gP,[["__scopeId","data-v-7d1dbd88"]]),_P={id:"auth-container"},IP={key:0},EP={key:1},AP={key:0},wP={key:1,class:"user-area"},vP={class:"modal-content"},TP={key:0},bP={key:1},SP={class:"modal-content"},RP={key:0},CP={key:1},OP=["disabled"],PP=["disabled"],NP=["disabled"],DP=["value"],LP=["disabled"],MP={__name:"HeaderComponent",setup(t){const e=DI(),n=Ho(),i=jo(),s=ze(()=>i.isDarkMode),r=re(!1),o=re(!1),l=re(""),c=re(""),u=re(""),f=re("");function p(){r.value=!0}function m(){r.value=!1,o.value=!1}function E(){o.value=!o.value}async function R(){try{await e.login(l.value,c.value),m()}catch(g){alert(g.message)}}async function L(){try{await e.signup(u.value,f.value),m()}catch(g){alert(g.message)}}async function M(){try{await e.logout()}catch(g){alert(g.message)}}const O=re(!1),C=re({username:"",default_difficulty:1,default_speciality:0}),k=n.specialties;function V(){e.user&&e.user.settings&&(C.value={...e.user.settings}),O.value=!0}function z(){O.value=!1}async function H(){try{await e.updateUserSettings(C.value),z()}catch(g){alert("Error saving settings: "+g.message)}}function T(){z(),p()}function y(){z(),p(),E()}return(g,_)=>{const v=fs("router-link"),w=fs("font-awesome-icon");return ce(),de("header",{class:sn({dark:s.value})},[fe(yP),fe(v,{to:"/"},{default:bi(()=>_[7]||(_[7]=[N("h1",null,"MediQuix",-1)])),_:1}),N("div",_P,[at(e).initialized?(ce(),de("div",EP,[at(e).user?(ce(),de("div",wP,[N("p",null," Olá, "+Be(at(e).user.username||at(e).user.email.split("@")[0]),1),N("button",{class:"auth-btn",onClick:V},[fe(w,{icon:["fas","cog"]})]),N("button",{class:"auth-btn",onClick:M},[fe(w,{icon:["fas","sign-out-alt"]})])])):(ce(),de("div",AP,[N("button",{class:"auth-btn",onClick:p},[fe(w,{icon:["fas","sign-in-alt"]}),_[8]||(_[8]=He(" Login / Sign Up "))])]))])):(ce(),de("div",IP,"Loading..."))]),fe(ho,{name:"fade"},{default:bi(()=>[r.value?(ce(),de("div",{key:0,class:"modal-overlay",onClick:Un(m,["self"])},[N("div",vP,[N("button",{class:"close-button",onClick:m},"×"),o.value?(ce(),de("div",bP,[_[14]||(_[14]=N("h3",null,"Sign Up",-1)),je(N("input",{type:"email","onUpdate:modelValue":_[2]||(_[2]=A=>u.value=A),placeholder:"Email"},null,512),[[on,u.value]]),je(N("input",{type:"password","onUpdate:modelValue":_[3]||(_[3]=A=>f.value=A),placeholder:"Password"},null,512),[[on,f.value]]),N("button",{class:"modal-btn",onClick:L},[fe(w,{icon:["fas","user-plus"]}),_[12]||(_[12]=He(" Sign Up "))]),N("p",null,[_[13]||(_[13]=He(" Already have an account? ")),N("span",{class:"toggle-link",onClick:E},"Login")])])):(ce(),de("div",TP,[_[11]||(_[11]=N("h3",null,"Login",-1)),je(N("input",{type:"email","onUpdate:modelValue":_[0]||(_[0]=A=>l.value=A),placeholder:"Email"},null,512),[[on,l.value]]),je(N("input",{type:"password","onUpdate:modelValue":_[1]||(_[1]=A=>c.value=A),placeholder:"Password"},null,512),[[on,c.value]]),N("button",{class:"modal-btn",onClick:R},[fe(w,{icon:["fas","sign-in-alt"]}),_[9]||(_[9]=He(" Login "))]),N("p",null,[_[10]||(_[10]=He(" Don't have an account? ")),N("span",{class:"toggle-link",onClick:E},"Sign up")])]))])])):Ai("",!0)]),_:1}),fe(ho,{name:"fade"},{default:bi(()=>[O.value?(ce(),de("div",{key:0,class:"modal-overlay",onClick:Un(z,["self"])},[N("div",SP,[N("button",{class:"close-button",onClick:z}," × "),_[23]||(_[23]=N("h3",null,"User Settings",-1)),at(e).user?(ce(),de("div",CP,[N("label",null,[_[18]||(_[18]=He(" Username: ")),je(N("input",{type:"text","onUpdate:modelValue":_[4]||(_[4]=A=>C.value.username=A),disabled:!at(e).user},null,8,OP),[[on,C.value.username]])]),N("label",null,[_[20]||(_[20]=He(" Default Difficulty: ")),je(N("select",{"onUpdate:modelValue":_[5]||(_[5]=A=>C.value.default_difficulty=A),disabled:!at(e).user},_[19]||(_[19]=[N("option",{value:"1"},"Fácil",-1),N("option",{value:"2"},"Média",-1),N("option",{value:"3"},"Difícil",-1)]),8,PP),[[Ys,C.value.default_difficulty,void 0,{number:!0}]])]),N("label",null,[_[21]||(_[21]=He(" Default Specialty: ")),je(N("select",{"onUpdate:modelValue":_[6]||(_[6]=A=>C.value.default_speciality=A),disabled:!at(e).user},[(ce(!0),de(tt,null,ln(at(k),(A,Ee)=>(ce(),de("option",{key:Ee,value:Ee},Be(A),9,DP))),128))],8,NP),[[Ys,C.value.default_speciality,void 0,{number:!0}]])]),N("button",{class:"modal-btn",onClick:H,disabled:!at(e).user},[fe(w,{icon:["fas","save"]}),_[22]||(_[22]=He(" Save Settings "))],8,LP)])):(ce(),de("div",RP,[N("p",null,[_[15]||(_[15]=He(" Please ")),N("span",{class:"toggle-link",onClick:T},"login"),_[16]||(_[16]=He(" or ")),N("span",{class:"toggle-link",onClick:y},"register"),_[17]||(_[17]=He(" to set your default settings. "))])]))])])):Ai("",!0)]),_:1})],2)}}},kP=pn(MP,[["__scopeId","data-v-45cb83a4"]]),xP={__name:"MainComponent",setup(t){const e=jo(),n=ze(()=>e.isDarkMode);return(i,s)=>{const r=fs("router-view");return ce(),de("main",{class:sn({dark:n.value})},[fe(r)],2)}}},VP={__name:"FooterComponent",setup(t){const e=jo(),n=ze(()=>e.isDarkMode);return(i,s)=>(ce(),de("footer",{class:sn({dark:n.value})},s[0]||(s[0]=[N("div",{id:"install-icon"},null,-1),N("small",null,"© MediQuix 2024. Todos os direitos reservados.",-1)]),2))}},FP=pn(VP,[["__scopeId","data-v-a725dd2e"]]),UP={__name:"App",setup(t){return(e,n)=>(ce(),de(tt,null,[fe(kP),fe(xP),fe(FP)],64))}};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fs=typeof document<"u";function kI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&kI(t.default)}const Ue=Object.assign;function Xc(t,e){const n={};for(const i in e){const s=e[i];n[i]=fn(s)?s.map(t):t(s)}return n}const to=()=>{},fn=Array.isArray,xI=/#/g,BP=/&/g,zP=/\//g,GP=/=/g,HP=/\?/g,VI=/\+/g,jP=/%5B/g,$P=/%5D/g,FI=/%5E/g,WP=/%60/g,UI=/%7B/g,KP=/%7C/g,qI=/%7D/g,QP=/%20/g;function Sf(t){return encodeURI(""+t).replace(KP,"|").replace(jP,"[").replace($P,"]")}function YP(t){return Sf(t).replace(UI,"{").replace(qI,"}").replace(FI,"^")}function Hu(t){return Sf(t).replace(VI,"%2B").replace(QP,"+").replace(xI,"%23").replace(BP,"%26").replace(WP,"`").replace(UI,"{").replace(qI,"}").replace(FI,"^")}function XP(t){return Hu(t).replace(GP,"%3D")}function JP(t){return Sf(t).replace(xI,"%23").replace(HP,"%3F")}function ZP(t){return t==null?"":JP(t).replace(zP,"%2F")}function bo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const eN=/\/$/,tN=t=>t.replace(eN,"");function Jc(t,e,n="/"){let i,s={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),s=t(r)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=rN(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:bo(o)}}function nN(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Um(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iN(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&sr(e.matched[i],n.matched[s])&&BI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function sr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function BI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sN(t[n],e[n]))return!1;return!0}function sN(t,e){return fn(t)?qm(t,e):fn(e)?qm(e,t):t===e}function qm(t,e){return fn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function rN(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,l;for(o=0;o<i.length;o++)if(l=i[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var So;(function(t){t.pop="pop",t.push="push"})(So||(So={}));var no;(function(t){t.back="back",t.forward="forward",t.unknown=""})(no||(no={}));function oN(t){if(!t)if(Fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tN(t)}const aN=/^[^#]+#/;function lN(t,e){return t.replace(aN,"#")+e}function cN(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Zl=()=>({left:window.scrollX,top:window.scrollY});function uN(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cN(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bm(t,e){return(history.state?history.state.position-e:-1)+t}const ju=new Map;function dN(t,e){ju.set(t,e)}function fN(t){const e=ju.get(t);return ju.delete(t),e}let hN=()=>location.protocol+"//"+location.host;function zI(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let l=s.includes(t.slice(r))?t.slice(r).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Um(c,"")}return Um(n,t)+i+s}function pN(t,e,n,i){let s=[],r=[],o=null;const l=({state:m})=>{const E=zI(t,location),R=n.value,L=e.value;let M=0;if(m){if(n.value=E,e.value=m,o&&o===R){o=null;return}M=L?m.position-L.position:0}else i(E);s.forEach(O=>{O(n.value,R,{delta:M,type:So.pop,direction:M?M>0?no.forward:no.back:no.unknown})})};function c(){o=n.value}function u(m){s.push(m);const E=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return r.push(E),E}function f(){const{history:m}=window;m.state&&m.replaceState(Ue({},m.state,{scroll:Zl()}),"")}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function zm(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Zl():null}}function mN(t){const{history:e,location:n}=window,i={value:zI(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:hN()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(E){console.error(E),n[f?"replace":"assign"](m)}}function o(c,u){const f=Ue({},e.state,zm(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});r(c,f,!0),i.value=c}function l(c,u){const f=Ue({},s.value,e.state,{forward:c,scroll:Zl()});r(f.current,f,!0);const p=Ue({},zm(i.value,c,null),{position:f.position+1},u);r(c,p,!1),i.value=c}return{location:i,state:s,push:l,replace:o}}function gN(t){t=oN(t);const e=mN(t),n=pN(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Ue({location:"",base:t,go:i,createHref:lN.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function yN(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),gN(t)}function _N(t){return typeof t=="string"||t&&typeof t=="object"}function GI(t){return typeof t=="string"||typeof t=="symbol"}const HI=Symbol("");var Gm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gm||(Gm={}));function rr(t,e){return Ue(new Error,{type:t,[HI]:!0},e)}function Vn(t,e){return t instanceof Error&&HI in t&&(e==null||!!(t.type&e))}const Hm="[^/]+?",IN={sensitive:!1,strict:!1,start:!0,end:!0},EN=/[.+*?^${}()[\]/\\]/g;function AN(t,e){const n=Ue({},IN,e),i=[];let s=n.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let E=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(EN,"\\$&"),E+=40;else if(m.type===1){const{value:R,repeatable:L,optional:M,regexp:O}=m;r.push({name:R,repeatable:L,optional:M});const C=O||Hm;if(C!==Hm){E+=10;try{new RegExp(`(${C})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${R}" (${C}): `+V.message)}}let k=L?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;p||(k=M&&u.length<2?`(?:/${k})`:"/"+k),M&&(k+="?"),s+=k,E+=20,M&&(E+=-8),L&&(E+=-20),C===".*"&&(E+=-50)}f.push(E)}i.push(f)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const E=f[m]||"",R=r[m-1];p[R.name]=E&&R.repeatable?E.split("/"):E}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const E of m)if(E.type===0)f+=E.value;else if(E.type===1){const{value:R,repeatable:L,optional:M}=E,O=R in u?u[R]:"";if(fn(O)&&!L)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const C=fn(O)?O.join("/"):O;if(!C)if(M)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=C}}return f||"/"}return{re:o,score:i,keys:r,parse:l,stringify:c}}function wN(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jI(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=wN(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(jm(i))return 1;if(jm(s))return-1}return s.length-i.length}function jm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vN={type:0,value:""},TN=/[a-zA-Z0-9_]/;function bN(t){if(!t)return[[]];if(t==="/")return[[vN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${u}": ${E}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,c,u="",f="";function p(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=i;break;case 1:c==="("?n=2:TN.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function SN(t,e,n){const i=AN(bN(t.path),n),s=Ue(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function RN(t,e){const n=[],i=new Map;e=Qm({strict:!1,end:!0,sensitive:!1},e);function s(p){return i.get(p)}function r(p,m,E){const R=!E,L=Wm(p);L.aliasOf=E&&E.record;const M=Qm(e,p),O=[L];if("alias"in p){const V=typeof p.alias=="string"?[p.alias]:p.alias;for(const z of V)O.push(Wm(Ue({},L,{components:E?E.record.components:L.components,path:z,aliasOf:E?E.record:L})))}let C,k;for(const V of O){const{path:z}=V;if(m&&z[0]!=="/"){const H=m.record.path,T=H[H.length-1]==="/"?"":"/";V.path=m.record.path+(z&&T+z)}if(C=SN(V,m,M),E?E.alias.push(C):(k=k||C,k!==C&&k.alias.push(C),R&&p.name&&!Km(C)&&o(p.name)),$I(C)&&c(C),L.children){const H=L.children;for(let T=0;T<H.length;T++)r(H[T],C,E&&E.children[T])}E=E||C}return k?()=>{o(k)}:to}function o(p){if(GI(p)){const m=i.get(p);m&&(i.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&i.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=PN(p,n);n.splice(m,0,p),p.record.name&&!Km(p)&&i.set(p.record.name,p)}function u(p,m){let E,R={},L,M;if("name"in p&&p.name){if(E=i.get(p.name),!E)throw rr(1,{location:p});M=E.record.name,R=Ue($m(m.params,E.keys.filter(k=>!k.optional).concat(E.parent?E.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),p.params&&$m(p.params,E.keys.map(k=>k.name))),L=E.stringify(R)}else if(p.path!=null)L=p.path,E=n.find(k=>k.re.test(L)),E&&(R=E.parse(L),M=E.record.name);else{if(E=m.name?i.get(m.name):n.find(k=>k.re.test(m.path)),!E)throw rr(1,{location:p,currentLocation:m});M=E.record.name,R=Ue({},m.params,p.params),L=E.stringify(R)}const O=[];let C=E;for(;C;)O.unshift(C.record),C=C.parent;return{name:M,path:L,params:R,matched:O,meta:ON(O)}}t.forEach(p=>r(p));function f(){n.length=0,i.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function $m(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Wm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:CN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function CN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Km(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ON(t){return t.reduce((e,n)=>Ue(e,n.meta),{})}function Qm(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function PN(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;jI(t,e[r])<0?i=r:n=r+1}const s=NN(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function NN(t){let e=t;for(;e=e.parent;)if($I(e)&&jI(t,e)===0)return e}function $I({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function DN(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(VI," "),o=r.indexOf("="),l=bo(o<0?r:r.slice(0,o)),c=o<0?null:bo(r.slice(o+1));if(l in e){let u=e[l];fn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Ym(t){let e="";for(let n in t){const i=t[n];if(n=XP(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(i)?i.map(r=>r&&Hu(r)):[i&&Hu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function LN(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=fn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const MN=Symbol(""),Xm=Symbol(""),Rf=Symbol(""),WI=Symbol(""),$u=Symbol("");function Dr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function mi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(rr(4,{from:n,to:e})):m instanceof Error?c(m):_N(m)?c(rr(2,{from:e,to:m})):(o&&i.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=r(()=>t.call(i&&i.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Zc(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(kI(c)){const f=(c.__vccOpts||c)[e];f&&r.push(mi(f,n,i,o,l,s))}else{let u=c();r.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=qP(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const E=(p.__vccOpts||p)[e];return E&&mi(E,n,i,o,l,s)()}))}}return r}function Jm(t){const e=vn(Rf),n=vn(WI),i=ze(()=>{const c=at(t.to);return e.resolve(c)}),s=ze(()=>{const{matched:c}=i.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(sr.bind(null,f));if(m>-1)return m;const E=Zm(c[u-2]);return u>1&&Zm(f)===E&&p[p.length-1].path!==E?p.findIndex(sr.bind(null,c[u-2])):m}),r=ze(()=>s.value>-1&&UN(n.params,i.value.params)),o=ze(()=>s.value>-1&&s.value===n.matched.length-1&&BI(n.params,i.value.params));function l(c={}){if(FN(c)){const u=e[at(t.replace)?"replace":"push"](at(t.to)).catch(to);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:ze(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}function kN(t){return t.length===1?t[0]:t}const xN=Td({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jm,setup(t,{slots:e}){const n=Di(Jm(t)),{options:i}=vn(Rf),s=ze(()=>({[eg(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[eg(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&kN(e.default(n));return t.custom?r:Cl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),VN=xN;function FN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UN(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!fn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Zm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const eg=(t,e,n)=>t??e??n,qN=Td({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=vn($u),s=ze(()=>t.route||i.value),r=vn(Xm,0),o=ze(()=>{let u=at(r);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=ze(()=>s.value.matched[o.value]);Ta(Xm,ze(()=>o.value+1)),Ta(MN,l),Ta($u,s);const c=re();return Si(()=>[c.value,l.value,t.name],([u,f,p],[m,E,R])=>{f&&(f.instances[p]=u,E&&E!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),u&&f&&(!E||!sr(f,E)||!m)&&(f.enterCallbacks[p]||[]).forEach(L=>L(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return tg(n.default,{Component:m,route:u});const E=p.props[f],R=E?E===!0?u.params:typeof E=="function"?E(u):E:null,M=Cl(m,Ue({},R,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return tg(n.default,{Component:M,route:u})||M}}});function tg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const BN=qN;function zN(t){const e=RN(t.routes,t),n=t.parseQuery||DN,i=t.stringifyQuery||Ym,s=t.history,r=Dr(),o=Dr(),l=Dr(),c=DA(ci);let u=ci;Fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Xc.bind(null,F=>""+F),p=Xc.bind(null,ZP),m=Xc.bind(null,bo);function E(F,ie){let ee,oe;return GI(F)?(ee=e.getRecordMatcher(F),oe=ie):oe=F,e.addRoute(oe,ee)}function R(F){const ie=e.getRecordMatcher(F);ie&&e.removeRoute(ie)}function L(){return e.getRoutes().map(F=>F.record)}function M(F){return!!e.getRecordMatcher(F)}function O(F,ie){if(ie=Ue({},ie||c.value),typeof F=="string"){const P=Jc(n,F,ie.path),U=e.resolve({path:P.path},ie),G=s.createHref(P.fullPath);return Ue(P,U,{params:m(U.params),hash:bo(P.hash),redirectedFrom:void 0,href:G})}let ee;if(F.path!=null)ee=Ue({},F,{path:Jc(n,F.path,ie.path).path});else{const P=Ue({},F.params);for(const U in P)P[U]==null&&delete P[U];ee=Ue({},F,{params:p(P)}),ie.params=p(ie.params)}const oe=e.resolve(ee,ie),xe=F.hash||"";oe.params=f(m(oe.params));const b=nN(i,Ue({},F,{hash:YP(xe),path:oe.path})),S=s.createHref(b);return Ue({fullPath:b,hash:xe,query:i===Ym?LN(F.query):F.query||{}},oe,{redirectedFrom:void 0,href:S})}function C(F){return typeof F=="string"?Jc(n,F,c.value.path):Ue({},F)}function k(F,ie){if(u!==F)return rr(8,{from:ie,to:F})}function V(F){return T(F)}function z(F){return V(Ue(C(F),{replace:!0}))}function H(F){const ie=F.matched[F.matched.length-1];if(ie&&ie.redirect){const{redirect:ee}=ie;let oe=typeof ee=="function"?ee(F):ee;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=C(oe):{path:oe},oe.params={}),Ue({query:F.query,hash:F.hash,params:oe.path!=null?{}:F.params},oe)}}function T(F,ie){const ee=u=O(F),oe=c.value,xe=F.state,b=F.force,S=F.replace===!0,P=H(ee);if(P)return T(Ue(C(P),{state:typeof P=="object"?Ue({},xe,P.state):xe,force:b,replace:S}),ie||ee);const U=ee;U.redirectedFrom=ie;let G;return!b&&iN(i,oe,ee)&&(G=rr(16,{to:U,from:oe}),ye(oe,oe,!0,!1)),(G?Promise.resolve(G):_(U,oe)).catch(q=>Vn(q)?Vn(q,2)?q:K(q):we(q,U,oe)).then(q=>{if(q){if(Vn(q,2))return T(Ue({replace:S},C(q.to),{state:typeof q.to=="object"?Ue({},xe,q.to.state):xe,force:b}),ie||U)}else q=w(U,oe,!0,S,xe);return v(U,oe,q),q})}function y(F,ie){const ee=k(F,ie);return ee?Promise.reject(ee):Promise.resolve()}function g(F){const ie=Qe.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(F):F()}function _(F,ie){let ee;const[oe,xe,b]=GN(F,ie);ee=Zc(oe.reverse(),"beforeRouteLeave",F,ie);for(const P of oe)P.leaveGuards.forEach(U=>{ee.push(mi(U,F,ie))});const S=y.bind(null,F,ie);return ee.push(S),At(ee).then(()=>{ee=[];for(const P of r.list())ee.push(mi(P,F,ie));return ee.push(S),At(ee)}).then(()=>{ee=Zc(xe,"beforeRouteUpdate",F,ie);for(const P of xe)P.updateGuards.forEach(U=>{ee.push(mi(U,F,ie))});return ee.push(S),At(ee)}).then(()=>{ee=[];for(const P of b)if(P.beforeEnter)if(fn(P.beforeEnter))for(const U of P.beforeEnter)ee.push(mi(U,F,ie));else ee.push(mi(P.beforeEnter,F,ie));return ee.push(S),At(ee)}).then(()=>(F.matched.forEach(P=>P.enterCallbacks={}),ee=Zc(b,"beforeRouteEnter",F,ie,g),ee.push(S),At(ee))).then(()=>{ee=[];for(const P of o.list())ee.push(mi(P,F,ie));return ee.push(S),At(ee)}).catch(P=>Vn(P,8)?P:Promise.reject(P))}function v(F,ie,ee){l.list().forEach(oe=>g(()=>oe(F,ie,ee)))}function w(F,ie,ee,oe,xe){const b=k(F,ie);if(b)return b;const S=ie===ci,P=Fs?history.state:{};ee&&(oe||S?s.replace(F.fullPath,Ue({scroll:S&&P&&P.scroll},xe)):s.push(F.fullPath,xe)),c.value=F,ye(F,ie,ee,S),K()}let A;function Ee(){A||(A=s.listen((F,ie,ee)=>{if(!Gt.listening)return;const oe=O(F),xe=H(oe);if(xe){T(Ue(xe,{replace:!0,force:!0}),oe).catch(to);return}u=oe;const b=c.value;Fs&&dN(Bm(b.fullPath,ee.delta),Zl()),_(oe,b).catch(S=>Vn(S,12)?S:Vn(S,2)?(T(Ue(C(S.to),{force:!0}),oe).then(P=>{Vn(P,20)&&!ee.delta&&ee.type===So.pop&&s.go(-1,!1)}).catch(to),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),we(S,oe,b))).then(S=>{S=S||w(oe,b,!1),S&&(ee.delta&&!Vn(S,8)?s.go(-ee.delta,!1):ee.type===So.pop&&Vn(S,20)&&s.go(-1,!1)),v(oe,b,S)}).catch(to)}))}let Fe=Dr(),Oe=Dr(),ne;function we(F,ie,ee){K(F);const oe=Oe.list();return oe.length?oe.forEach(xe=>xe(F,ie,ee)):console.error(F),Promise.reject(F)}function Q(){return ne&&c.value!==ci?Promise.resolve():new Promise((F,ie)=>{Fe.add([F,ie])})}function K(F){return ne||(ne=!F,Ee(),Fe.list().forEach(([ie,ee])=>F?ee(F):ie()),Fe.reset()),F}function ye(F,ie,ee,oe){const{scrollBehavior:xe}=t;if(!Fs||!xe)return Promise.resolve();const b=!ee&&fN(Bm(F.fullPath,0))||(oe||!ee)&&history.state&&history.state.scroll||null;return wl().then(()=>xe(F,ie,b)).then(S=>S&&uN(S)).catch(S=>we(S,F,ie))}const ve=F=>s.go(F);let Te;const Qe=new Set,Gt={currentRoute:c,listening:!0,addRoute:E,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:L,resolve:O,options:t,push:V,replace:z,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Oe.add,isReady:Q,install(F){const ie=this;F.component("RouterLink",VN),F.component("RouterView",BN),F.config.globalProperties.$router=ie,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>at(c)}),Fs&&!Te&&c.value===ci&&(Te=!0,V(s.location).catch(xe=>{}));const ee={};for(const xe in ci)Object.defineProperty(ee,xe,{get:()=>c.value[xe],enumerable:!0});F.provide(Rf,ie),F.provide(WI,iy(ee)),F.provide($u,c);const oe=F.unmount;Qe.add(F),F.unmount=function(){Qe.delete(F),Qe.size<1&&(u=ci,A&&A(),A=null,c.value=ci,Te=!1,ne=!1),oe()}}};function At(F){return F.reduce((ie,ee)=>ie.then(()=>g(ee)),Promise.resolve())}return Gt}function GN(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>sr(u,l))?i.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>sr(u,c))||s.push(c))}return[n,i,s]}const HN={class:"icon-container"},jN={class:"game-title"},$N={class:"game-description"},WN={__name:"GameCard",props:{link:String,icon:String,title:String,description:String},setup(t){const e=jo(),n=ze(()=>e.isDarkMode);return(i,s)=>{const r=fs("font-awesome-icon"),o=fs("router-link");return ce(),Uy(o,{to:t.link,class:sn(["game-card",{dark:n.value}])},{default:bi(()=>[N("div",HN,[fe(r,{icon:["fas",t.icon],size:"3x"},null,8,["icon"])]),N("h2",jN,Be(t.title),1),N("p",$N,Be(t.description),1)]),_:1},8,["to","class"])}}},Lr=pn(WN,[["__scopeId","data-v-725aab4d"]]),KN={class:"home-list"},QN={class:"game-links"},YN={class:"game-links"},XN={__name:"Home",setup(t){return(e,n)=>(ce(),de("div",KN,[N("div",QN,[fe(Lr,{link:"/quiz",icon:"bolt",title:"Quiz Rápido",description:"Responda rapidamente perguntas sobre medicina."}),fe(Lr,{link:"/cards",icon:"brain",title:"Jogo de Memória",description:"Teste sua memória com termos médicos."}),fe(Lr,{link:"/hangman",icon:"ghost",title:"Jogo da Forca",description:"Adivinhe palavras médicas e teste seu conhecimento."}),fe(Lr,{link:"/word-search",icon:"feather",title:"Caça Palavras",description:"Encontre palavras médicas escondidas na grade."})]),N("div",YN,[fe(Lr,{link:"/my-vocabulary",icon:"book",title:"Meu Vocabulário",description:"Visualize, adicione, edite e gerencie todos os termos e definições."})])]))}},JN=pn(XN,[["__scopeId","data-v-98aa713b"]]),ZN={class:"selectors-container"},eD={key:0,class:"toggle-text"},tD={key:1,class:"toggle-text"},nD={class:"controls"},iD={class:"controls-option"},sD=["value"],rD={class:"controls-option"},oD={__name:"SelectorsComponent",emits:["specialty-change","difficulty-change"],setup(t,{emit:e}){const n=e,i=Ni(),s=ze({get:()=>i.selectedSpecialty,set:c=>i.setSpecialty(c)}),r=ze({get:()=>i.selectedDifficulty,set:c=>i.setDifficulty(c)});Si(s,c=>{n("specialty-change",c)}),Si(r,c=>{n("difficulty-change",c)});const o=re(!1);function l(){o.value=!o.value}return(c,u)=>(ce(),de("div",ZN,[N("button",{class:"collapse-toggle",onClick:l},[o.value?(ce(),de("span",eD,u[2]||(u[2]=[He(" Especialidade   "),N("svg",{class:"toggle-icon",width:"24",height:"24",viewBox:"0 0 24 24"},[N("path",{fill:"currentColor",d:"M12 8l6 6c.3.3.3.7 0 1s-.7.3-1 0l-5-5-5 5c-.3.3-.7.3-1 0s-.3-.7 0-1l6-6z"})],-1),He("  Dificuldade ")]))):(ce(),de("span",tD,u[3]||(u[3]=[He(" Especialidade   "),N("svg",{class:"toggle-icon",width:"24",height:"24",viewBox:"0 0 24 24"},[N("path",{fill:"currentColor",d:"M12 16.5l-6-6c-.3-.3-.3-.7 0-1 .3-.3.7-.3 1 0l5 5 5-5c.3-.3.7-.3 1 0s.3.7 0 1l-6 6z"})],-1),He("  Dificuldade ")])))]),fe(ho,{name:"fade"},{default:bi(()=>[N("div",{class:sn(["collapsible-content",{expanded:o.value}])},[N("div",nD,[N("div",iD,[je(N("select",{id:"specialty-select","onUpdate:modelValue":u[0]||(u[0]=f=>s.value=f)},[u[4]||(u[4]=N("option",{value:"all"},"Todas",-1)),(ce(!0),de(tt,null,ln(at(LI),(f,p)=>(ce(),de("option",{key:p,value:p},Be(f),9,sD))),128))],512),[[Ys,s.value]])]),N("div",rD,[je(N("select",{id:"difficulty-select","onUpdate:modelValue":u[1]||(u[1]=f=>r.value=f)},u[5]||(u[5]=[N("option",{value:"all"},"Todas",-1),N("option",{value:"1"},"Fácil",-1),N("option",{value:"2"},"Média",-1),N("option",{value:"3"},"Difícil",-1)]),512),[[Ys,r.value]])])])],2)]),_:1})]))}},$o=pn(oD,[["__scopeId","data-v-3d9424a6"]]),aD=Mo("words",()=>{const t=re(MI),e=Ni(),n=ze(()=>{let r=t.value;if(e.selectedSpecialty!=="all"){const o=parseInt(e.selectedSpecialty);r=r.filter(l=>l.specialties.includes(o))}if(e.selectedDifficulty!=="all"){const o=parseInt(e.selectedDifficulty);r=r.filter(l=>l.difficulty===o)}return r});function i(r=10){return[...n.value].sort(()=>Math.random()-.5).slice(0,r)}function s(r){t.value=r}return{allWords:t,filteredWords:n,getQuizWords:i,setAllWords:s}}),lD={class:"quiz"},cD={key:0,id:"quiz-container"},uD={id:"timer"},dD={id:"time"},fD={id:"question"},hD={id:"options"},pD=["disabled","onClick"],mD={__name:"QuickQuizGame",setup(t){const e=re(0),n=re(7),i=re([]),s=re(!0),r=re([]),o=re("7"),l=re(!1),c=re(!1),u=re([]);let f=null;const p=aD(),m=ze(()=>i.value[e.value]);function E(z){return z.sort(()=>Math.random()-.5)}function R(z){const H=[z],T=p.allWords.filter(y=>y.word!==z).map(y=>y.word);for(E(T);H.length<4&&T.length>0;)H.push(T.pop());return E(H)}function L(){let H=n.value*1e3;f=setInterval(()=>{H-=10,o.value=(H/1e3).toFixed(0),H<=0&&(clearInterval(f),O(null),c.value=!0,l.value=!0)},10)}function M(){if(clearInterval(f),e.value>=i.value.length){alert("Você completou o quiz!"),V();return}c.value=!1,l.value=!1,u.value=[],m.value&&(r.value=R(m.value.word),u.value=r.value.map(()=>""),n.value=7,o.value="7",L())}function O(z,H=null){if(clearInterval(f),!m.value)return;const T=m.value.word;z!==null&&(z===T&&H!==null?u.value[H]="#2ecc71":H!==null&&(u.value[H]="#e74c3c")),r.value.forEach((y,g)=>{y===T&&(u.value[g]="#2ecc71")}),c.value=!0,l.value=!0}function C(){e.value++,n.value=7,M()}function k(){e.value=0;const z=p.getQuizWords(10);if(z.length===0){alert("Nenhuma questão encontrada com os critérios selecionados."),s.value=!1;return}i.value=z,s.value=!0,n.value=7,M()}function V(){clearInterval(f),s.value=!1,k()}return lr(()=>{k()}),bd(()=>{clearInterval(f)}),(z,H)=>{var T;return ce(),de("div",lD,[H[1]||(H[1]=N("h1",null,"Quiz Rápido",-1)),fe($o,{onSpecialtyChange:V,onDifficultyChange:V}),N("div",null,[s.value?(ce(),de("div",cD,[N("div",uD,[N("span",dD,Be(o.value),1),H[0]||(H[0]=He("s "))]),N("div",fD,Be((T=m.value)==null?void 0:T.clue),1),N("ul",hD,[(ce(!0),de(tt,null,ln(r.value,(y,g)=>(ce(),de("li",{key:g},[N("button",{disabled:c.value,style:Po({backgroundColor:u.value[g]}),onClick:_=>O(y,g)},Be(y),13,pD)]))),128))]),l.value?(ce(),de("button",{key:0,id:"next-button",onClick:C}," Próxima Pergunta ")):Ai("",!0)])):Ai("",!0)])])}}},gD=pn(mD,[["__scopeId","data-v-be57a697"]]),yD={class:"memory-game"},_D={id:"definition"},ID={id:"game-board"},ED=["onClick"],AD={class:"card-inner"},wD={class:"card-back"},vD={id:"score"},TD={__name:"MemoryGame",setup(t){const e=Ho(),n=re(0),i=re([]),s=re(null),r=re([]),o=re([]),l=re(0),c=re(null),u=re(null),f=re([]);function p(){n.value=0,l.value=0,f.value=[];let O=e.words.filter(k=>k.isActive);if(O.length<2){alert("Não há palavras suficientes para iniciar o jogo. Por favor, ajuste os filtros.");return}O.sort(()=>Math.random()-.5),r.value=O.slice(0,8),o.value=[...r.value],m();const C=[...r.value,...r.value].map(k=>({word:k.word,flipped:!1,matched:!1}));C.sort(()=>Math.random()-.5),i.value=C}function m(){o.value.length===0?s.value=null:(o.value.sort(()=>Math.random()-.5),s.value=o.value.pop())}function E(O){const C=i.value[O];C.flipped||C.matched||(C.flipped=!0,n.value++,l.value===0?(c.value=O,l.value=1):l.value===1&&(u.value=O,l.value=2,R()))}function R(){const O=i.value[c.value],C=i.value[u.value];O.word===s.value.word&&C.word===s.value.word?(O.matched=!0,C.matched=!0,f.value.push(O,C),M(),f.value.length===i.value.length?setTimeout(()=>{alert(`Parabéns! Você encontrou todos os pares com ${n.value} cliques.`),p()},500):setTimeout(()=>{m()},500)):setTimeout(()=>{L()},1e3)}function L(){i.value[c.value].flipped=!1,i.value[u.value].flipped=!1,M()}function M(){l.value=0,c.value=null,u.value=null}return lr(()=>{p()}),(O,C)=>(ce(),de("div",yD,[C[1]||(C[1]=N("h1",null,"Jogo de Memória",-1)),fe($o,{onSpecialtyChange:p,onDifficultyChange:p}),N("p",_D,Be(s.value?s.value.clue:"Todas as palavras foram encontradas!"),1),N("div",ID,[(ce(!0),de(tt,null,ln(i.value,(k,V)=>(ce(),de("div",{key:V,class:sn(["card",{flipped:k.flipped,matched:k.matched}]),onClick:z=>E(V)},[N("div",AD,[C[0]||(C[0]=N("div",{class:"card-front"},null,-1)),N("div",wD,Be(k.word),1)])],10,ED))),128))]),N("p",vD,"Pontuação: "+Be(n.value),1)]))}},bD=pn(TD,[["__scopeId","data-v-6e2ceb30"]]),SD={class:"word-search-game"},RD={class:"word-search-game-header"},CD={class:"game-container"},OD=["onClick"],PD={class:"word-list"},ND={class:"status"},DD={__name:"WordSearchGame",setup(t){const e=re(30),n=re(24),i=re(12),s=re(null),r=ze(()=>({gridTemplateColumns:`repeat(${n.value}, ${e.value}px)`,gridTemplateRows:`repeat(${i.value}, ${e.value}px)`,"--cell-size":`${e.value}px`})),o=Ho();Ni();const l=re([]),c=re([]),u=re([]),f=re(0),p=re(""),m=re([]);function E(){if(console.log("updateGridDimensions",s.value),s.value){console.log(s.value);const y=s.value.getBoundingClientRect().width;console.log("game-grid width: ",y),n.value=Math.floor(y/e.value),i.value=n.value*2}}function R(){f.value=0,p.value="",m.value=[],u.value=[];let y=o.words.filter(v=>v.isActive);if(y=y.filter(v=>v.word.length<=n.value&&v.word.length<=i.value),y.length<10){alert("Não há palavras suficientes para iniciar o jogo. Por favor, ajuste os filtros ou adicione mais palavras que caibam na grade.");return}const g=Array.from(new Set(y.map(v=>v.word.toUpperCase())));if(g.length<10){alert("Não há palavras únicas suficientes para iniciar o jogo. Por favor, ajuste os filtros ou adicione mais palavras.");return}g.sort(()=>.5-Math.random());const _=g.slice(0,10);c.value=_.map(v=>y.find(w=>w.word.toUpperCase()===v)),l.value=Array.from({length:i.value},()=>Array(n.value).fill("")),c.value.forEach(v=>{L(v.word.toUpperCase())}),M()}function L(y){const _=["horizontal","vertical"].filter(Ee=>Ee==="horizontal"&&y.length<=n.value||Ee==="vertical"&&y.length<=i.value);if(_.length===0){console.error(`A palavra "${y}" é muito longa para caber na grade.`);return}let v=!1,w=0;const A=100;for(;!v&&w<A;){w++;const Ee=_[Math.floor(Math.random()*_.length)],Fe=y.length;let Oe,ne;Ee==="horizontal"?(Oe=O(0,i.value-1),ne=O(0,n.value-Fe)):(Oe=O(0,i.value-Fe),ne=O(0,n.value-1));let we=!0;for(let Q=0;Q<Fe;Q++){let K=Oe,ye=ne;if(Ee==="horizontal"?ye+=Q:K+=Q,l.value[K][ye]!==""&&l.value[K][ye]!==y[Q]){we=!1;break}}if(we){for(let Q=0;Q<Fe;Q++){let K=Oe,ye=ne;Ee==="horizontal"?ye+=Q:K+=Q,l.value[K][ye]=y[Q]}v=!0}}v||console.error(`Não foi possível posicionar a palavra "${y}" após ${A} tentativas.`)}function M(){const y="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let g=0;g<i.value;g++)for(let _=0;_<n.value;_++)l.value[g][_]===""&&(l.value[g][_]=y.charAt(Math.floor(Math.random()*y.length)))}function O(y,g){return Math.floor(Math.random()*(g-y+1))+y}function C(y,g){const _=`${y}-${g}`;m.value.some(v=>v.key===_)?m.value=m.value.filter(v=>v.key!==_):(m.value.push({row:y,col:g,key:_}),m.value.length===2&&H())}function k(y,g){if(m.value.length===2){const[_,v]=m.value;if(_.row===v.row&&y===_.row){const w=Math.min(_.col,v.col),A=Math.max(_.col,v.col);return g>=w&&g<=A}if(_.col===v.col&&g===_.col){const w=Math.min(_.row,v.row),A=Math.max(_.row,v.row);return y>=w&&y<=A}}return m.value.some(_=>_.row===y&&_.col===g)}let V=Di({});function z(y,g){return V[`${y}-${g}`]===!0}function H(){if(m.value.length!==2)return;const[y,g]=m.value,_=y.row===g.row,v=y.col===g.col;if(!_&&!v){p.value="Selecione duas letras na mesma linha ou coluna.",T();return}let w="",A=[];if(_){const[ne,we]=y.col<g.col?[y,g]:[g,y];for(let Q=ne.col;Q<=we.col;Q++)w+=l.value[ne.row][Q],A.push({row:ne.row,col:Q})}else if(v){const[ne,we]=y.row<g.row?[y,g]:[g,y];for(let Q=ne.row;Q<=we.row;Q++)w+=l.value[Q][ne.col],A.push({row:Q,col:ne.col})}const Ee=w.toUpperCase(),Fe=Ee.split("").reverse().join(""),Oe=c.value.find(ne=>ne.word.toUpperCase()===Ee||ne.word.toUpperCase()===Fe);Oe&&!u.value.includes(Oe.word.toUpperCase())?(u.value.push(Oe.word.toUpperCase()),f.value+=10,A.forEach(ne=>{V[`${ne.row}-${ne.col}`]=!0}),p.value=`Você encontrou: ${Oe.word.toUpperCase()}`,T(),u.value.length===c.value.length&&setTimeout(()=>{alert(`Parabéns! Você encontrou todas as palavras com ${f.value} pontos.`),R()},500)):(f.value-=1,p.value=`Palavra não encontrada: ${Ee}`,setTimeout(()=>{T()},1e3))}function T(){m.value=[]}return lr(()=>{E(),R(),window.addEventListener("resize",E)}),Sd(()=>{window.removeEventListener("resize",E)}),(y,g)=>(ce(),de("div",SD,[N("div",RD,[g[0]||(g[0]=N("h1",null,"Caça Palavras",-1)),fe($o,{onSpecialtyChange:R,onDifficultyChange:R})]),N("div",CD,[N("div",{class:"game-grid",ref_key:"gameGrid",ref:s,style:Po(r.value)},[(ce(!0),de(tt,null,ln(l.value,(_,v)=>(ce(),de("div",{key:v,class:"grid-row"},[(ce(!0),de(tt,null,ln(_,(w,A)=>(ce(),de("div",{key:A,class:sn(["cell",{selected:k(v,A),found:z(v,A)}]),onClick:Ee=>C(v,A)},Be(w),11,OD))),128))]))),128))],4),N("ul",PD,[(ce(!0),de(tt,null,ln(c.value,_=>(ce(),de("li",{key:_.word,class:sn({found:u.value.includes(_.word.toUpperCase())})},[N("span",null,Be(_.clue),1)],2))),128))]),N("p",ND,Be(p.value),1)])]))}},LD=pn(DD,[["__scopeId","data-v-66243c7b"]]),MD={class:"hangman-game"},kD={class:"game-container"},xD={class:"hangman-figure"},VD={height:"250",width:"200",id:"hangman-svg"},FD={cx:"150",cy:"70",r:"20",stroke:"#2c3e50","stroke-width":"4",fill:"none"},UD={x1:"150",y1:"90",x2:"150",y2:"150",stroke:"#2c3e50","stroke-width":"4"},qD={x1:"150",y1:"120",x2:"120",y2:"100",stroke:"#2c3e50","stroke-width":"4"},BD={x1:"150",y1:"120",x2:"180",y2:"100",stroke:"#2c3e50","stroke-width":"4"},zD={x1:"150",y1:"150",x2:"120",y2:"180",stroke:"#2c3e50","stroke-width":"4"},GD={x1:"150",y1:"150",x2:"180",y2:"180",stroke:"#2c3e50","stroke-width":"4"},HD={class:"message-container"},jD={class:"word-container"},$D={class:"clue-container"},WD={class:"guess-container"},KD=["onKeydown"],QD={class:"info-container"},ng=6,YD={__name:"HangmanGame",setup(t){const e=Ho();Ni();const n=re(!0),i=re(""),s=re(""),r=re([]),o=re(0),l=re([]),c=re(""),u=re(""),f=re(!1),p=re(!1),m=re(!1),E=re(!1),R=re(!1),L=re(!1),M=re(!1);function O(){p.value=!1,m.value=!1,E.value=!1,R.value=!1,L.value=!1,M.value=!1}function C(){const z=[p,m,E,R,L,M];o.value>0&&o.value<=z.length&&(z[o.value-1].value=!0)}re(null);function k(){O(),o.value=0,l.value=[],c.value="",u.value="",f.value=!1;let z=e.words.filter(y=>y.isActive);if(z.length===0){alert("Nenhuma palavra encontrada com os filtros selecionados."),n.value=!1;return}const H=Math.floor(Math.random()*z.length),T=z[H];i.value=T.word.toUpperCase(),s.value=T.clue,r.value=i.value.split("").map(y=>y.match(/[\s\-]/)?y:"_"),O(),u.value=""}function V(){const z=u.value.toUpperCase();if(u.value="",!/^[A-Z]$/.test(z)){alert("Por favor, insira uma única letra de A a Z.");return}if(r.value.includes(z)||l.value.includes(z)){alert("Você já chutou essa letra.");return}let H=!1;i.value.split("").forEach((T,y)=>{T===z&&(r.value[y]=T,H=!0)}),H?r.value.includes("_")||(c.value="Parabéns! Você ganhou!",f.value=!0):(o.value++,l.value.push(z),C(),o.value>=ng&&(c.value=`Você perdeu! A palavra era "${i.value}".`,r.value=i.value.split(""),f.value=!0))}return lr(()=>{k()}),(z,H)=>(ce(),de("div",MD,[H[5]||(H[5]=N("h1",null,"Jogo da Forca",-1)),fe($o,{onSpecialtyChange:k,onDifficultyChange:k}),je(N("div",kD,[N("div",xD,[(ce(),de("svg",VD,[H[1]||(H[1]=N("line",{x1:"10",y1:"240",x2:"190",y2:"240",stroke:"#2c3e50","stroke-width":"4"},null,-1)),H[2]||(H[2]=N("line",{x1:"60",y1:"240",x2:"60",y2:"20",stroke:"#2c3e50","stroke-width":"4"},null,-1)),H[3]||(H[3]=N("line",{x1:"60",y1:"20",x2:"150",y2:"20",stroke:"#2c3e50","stroke-width":"4"},null,-1)),H[4]||(H[4]=N("line",{x1:"150",y1:"20",x2:"150",y2:"50",stroke:"#2c3e50","stroke-width":"4"},null,-1)),je(N("circle",FD,null,512),[[ai,p.value]]),je(N("line",UD,null,512),[[ai,m.value]]),je(N("line",qD,null,512),[[ai,E.value]]),je(N("line",BD,null,512),[[ai,R.value]]),je(N("line",zD,null,512),[[ai,L.value]]),je(N("line",GD,null,512),[[ai,M.value]])])),N("div",HD,[N("p",null,Be(c.value),1)]),je(N("button",{onClick:k},"Reiniciar Jogo",512),[[ai,f.value]])]),N("div",null,[N("div",jD,[(ce(!0),de(tt,null,ln(r.value,(T,y)=>(ce(),de("span",{key:y,class:"letter"},Be(T),1))),128))]),N("div",$D,[N("p",null,Be(s.value),1)]),N("div",WD,[je(N("input",{type:"text","onUpdate:modelValue":H[0]||(H[0]=T=>u.value=T),maxlength:"1",placeholder:"Digite uma letra",onKeydown:bv(Un(V,["prevent"]),["enter"])},null,40,KD),[[on,u.value]]),N("button",{onClick:V},"Chutar")]),N("div",QD,[N("p",null,"Letras erradas: "+Be(l.value.join(", ")),1),N("p",null,Be(o.value)+" / "+Be(ng),1)])])],512),[[ai,n.value]])]))}},XD=pn(YD,[["__scopeId","data-v-edd5a76f"]]),JD={class:"my-vocabulary"},ZD={class:"vocab-header"},eL={class:"options-and-searchbar"},tL={class:"search-word"},nL={class:"modal-content options-modal"},iL={class:"options-buttons"},sL={class:"counter"},rL={class:"vocabulary-list"},oL=["onClick"],aL={key:0,class:"card-details"},lL={class:"clue"},cL={class:"specialties"},uL={class:"difficulty"},dL={class:"icons-container"},fL=["onClick"],hL=["onClick"],pL=["onUpdate:modelValue","onChange"],mL={key:1,class:"edit-container"},gL=["onUpdate:modelValue"],yL=["onUpdate:modelValue"],_L={class:"specialties-select"},IL=["value","onUpdate:modelValue"],EL=["onUpdate:modelValue"],AL=["onClick"],wL=["onClick"],vL={class:"modal-content"},TL={class:"specialties-select"},bL=["value"],SL={__name:"MyVocabulary",setup(t){const e=Ho(),n=Ni(),i=re(!1),s=re(!1),r=re(""),o=re(!1),l=re(!1),c=re([]),u=re([]),f=Di({});function p(Q){return Q.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}const m=ze(()=>{const Q={};return E.value.forEach(K=>{const ye=p(K.word);Q[ye]=(Q[ye]||0)+1}),Q}),E=ze(()=>{let Q=e.words;if(n.selectedSpecialty!=="all"){const K=parseInt(n.selectedSpecialty);Q=Q.filter(ye=>ye.specialties.includes(K))}if(n.selectedDifficulty!=="all"){const K=parseInt(n.selectedDifficulty);Q=Q.filter(ye=>ye.difficulty===K)}if(s.value&&(Q=Q.filter(K=>K.isActive)),r.value.trim()!==""){const K=r.value.trim().toLowerCase();Q=Q.filter(ye=>ye.word.toLowerCase().includes(K)||ye.clue.toLowerCase().includes(K))}return Q.sort((K,ye)=>K.word.localeCompare(ye.word))});function R(Q){const K=c.value.indexOf(Q);K===-1?c.value.push(Q):c.value.splice(K,1)}function L(Q){return c.value.includes(Q)}function M(){i.value=!i.value}function O(){if(confirm("Deseja realmente remover todas as duplicatas, mantendo apenas uma instância de cada palavra?")){const Q={};e.words.forEach(K=>{const ye=p(K.word);Q[ye]||(Q[ye]=K)}),e.words=Object.values(Q),Ds(e.words)}}function C(){s.value=!s.value}function k(){confirm("Deseja realmente ativar todos os itens?")&&(e.words.forEach(Q=>Q.isActive=!0),Ds(e.words))}function V(){confirm("Deseja realmente desativar todos os itens?")&&(e.words.forEach(Q=>Q.isActive=!1),Ds(e.words))}function z(){l.value=!0}function H(){l.value=!1}function T(){H(),o.value=!0}function y(){o.value=!1}const g=Di({word:"",clue:"",specialties:[],difficulty:null});function _(){if(!g.word.trim()||!g.clue.trim()||!g.difficulty||g.specialties.length===0){alert("Preencha todos os campos corretamente.");return}if(e.words.some(ye=>p(ye.word)===g.word.trim().toLowerCase())&&!confirm("A palavra já existe. Deseja adicionar outra instância?"))return;const K={word:g.word.trim(),clue:g.clue.trim(),specialties:[...g.specialties],difficulty:g.difficulty,isActive:!0};e.words.push(K),Ds(e.words),y(),g.word="",g.clue="",g.specialties=[],g.difficulty=null}function v(Q){if(u.value.includes(Q)){const K=u.value.indexOf(Q);K!==-1&&u.value.splice(K,1)}else u.value.push(Q),f[Q]=JSON.parse(JSON.stringify(E.value[Q]))}function w(Q){const K=f[Q];if(!K.word.trim()){alert("A palavra não pode estar vazia.");return}const ye=e.words.findIndex(Te=>Te.word===E.value[Q].word);ye!==-1&&(e.words[ye]={...K},Ds(e.words));const ve=u.value.indexOf(Q);ve!==-1&&u.value.splice(ve,1)}function A(Q){const K=u.value.indexOf(Q);K!==-1&&u.value.splice(K,1)}function Ee(Q){Ds(e.words)}function Fe(){}function Oe(Q){return Q.map(K=>e.specialties[K]).join(", ")}function ne(Q){return{1:"Fácil",2:"Média",3:"Difícil"}[Q]||"Desconhecida"}function we(Q){return p(Q.word)}return(Q,K)=>{const ye=fs("font-awesome-icon");return ce(),de("div",JD,[N("div",ZD,[K[6]||(K[6]=N("h1",null,"Meu Vocabulário",-1)),fe($o),N("div",eL,[N("button",{class:"options-btn",onClick:z},[fe(ye,{icon:["fas","sliders-h"]}),K[5]||(K[5]=He(" Opções "))]),N("div",tL,[je(N("input",{type:"text",class:"search-term","onUpdate:modelValue":K[0]||(K[0]=ve=>r.value=ve),placeholder:"Buscar palavra ou definição..."},null,512),[[on,r.value]]),N("button",{onClick:Fe,class:"search-btn"},[fe(ye,{icon:["fas","search"]})])])])]),fe(ho,{name:"fade"},{default:bi(()=>[l.value?(ce(),de("div",{key:0,class:"modal-overlay",onClick:Un(H,["self"])},[N("div",nL,[N("div",iL,[N("button",{onClick:T},[fe(ye,{icon:["fas","plus"]}),K[7]||(K[7]=He(" Adicionar Palavra "))]),N("button",{onClick:k},[fe(ye,{icon:["fas","check"]}),K[8]||(K[8]=He(" Ativar todos "))]),N("button",{onClick:V},[fe(ye,{icon:["fas","times"]}),K[9]||(K[9]=He(" Desativar todos "))]),N("button",{onClick:C},[fe(ye,{icon:["fas",s.value?"eye":"eye-slash"]},null,8,["icon"]),He(" "+Be(s.value?"Exibir todos":"Exibir apenas ativos"),1)]),N("button",{onClick:M},[fe(ye,{icon:["fas","highlighter"]}),He(" "+Be(i.value?"Remover Destaque":"Destacar Duplicatas"),1)]),N("button",{onClick:O},[fe(ye,{icon:["fas","trash"]}),K[10]||(K[10]=He(" Remover Duplicatas "))])])])])):Ai("",!0)]),_:1}),N("div",sL,[N("p",null,[K[11]||(K[11]=He(" Total de termos: ")),N("span",null,Be(E.value.length),1)])]),N("div",rL,[(ce(!0),de(tt,null,ln(E.value,(ve,Te)=>(ce(),de("div",{key:ve.word+Te,class:sn(["term-item",{duplicate:i.value&&m.value[we(ve)]>1}])},[N("div",{class:"card-header",onClick:Qe=>R(Te)},[N("h2",null,Be(ve.word),1)],8,oL),L(Te)?(ce(),de("div",aL,[N("p",lL,Be(ve.clue),1),N("p",cL,Be(Oe(ve.specialties)),1),N("p",uL,Be(ne(ve.difficulty)),1),N("div",dL,[N("span",{class:"icon edit-icon",onClick:Un(Qe=>v(Te),["stop"])},[fe(ye,{icon:["fas","edit"]})],8,fL),N("span",{class:"icon delete-icon",onClick:Un(Qe=>Q.deleteWord(Te),["stop"])},[fe(ye,{icon:["fas","trash"]})],8,hL),je(N("input",{type:"checkbox","onUpdate:modelValue":Qe=>ve.isActive=Qe,onChange:Un(Qe=>Ee(),["stop"]),title:"Ativar/Desativar"},null,40,pL),[[Lc,ve.isActive]])])])):Ai("",!0),u.value.includes(Te)?(ce(),de("div",mL,[je(N("input",{type:"text","onUpdate:modelValue":Qe=>f[Te].word=Qe,placeholder:"Palavra"},null,8,gL),[[on,f[Te].word]]),je(N("textarea",{"onUpdate:modelValue":Qe=>f[Te].clue=Qe,placeholder:"Dica"},null,8,yL),[[on,f[Te].clue]]),N("div",_L,[(ce(!0),de(tt,null,ln(at(e).specialties,(Qe,Gt)=>(ce(),de("label",{key:Gt},[je(N("input",{type:"checkbox",value:Gt,"onUpdate:modelValue":At=>f[Te].specialties=At},null,8,IL),[[Lc,f[Te].specialties]]),He(" "+Be(Qe),1)]))),128))]),je(N("select",{"onUpdate:modelValue":Qe=>f[Te].difficulty=Qe},K[12]||(K[12]=[N("option",{disabled:"",value:""},"Selecione",-1),N("option",{value:"1"},"Fácil",-1),N("option",{value:"2"},"Média",-1),N("option",{value:"3"},"Difícil",-1)]),8,EL),[[Ys,f[Te].difficulty,void 0,{number:!0}]]),N("button",{onClick:Qe=>w(Te)},"Salvar",8,AL),N("button",{onClick:Qe=>A(Te)},"Cancelar",8,wL)])):Ai("",!0)],2))),128))]),fe(ho,{name:"fade"},{default:bi(()=>[o.value?(ce(),de("div",{key:0,class:"modal",onClick:Un(y,["self"])},[N("div",vL,[N("span",{class:"close-button",onClick:y},"×"),K[19]||(K[19]=N("h2",null,"Adicionar Nova Palavra",-1)),N("form",{onSubmit:Un(_,["prevent"])},[K[14]||(K[14]=N("label",null,"Palavra:",-1)),je(N("input",{type:"text","onUpdate:modelValue":K[1]||(K[1]=ve=>g.word=ve),required:""},null,512),[[on,g.word]]),K[15]||(K[15]=N("label",null,"Dica:",-1)),je(N("textarea",{"onUpdate:modelValue":K[2]||(K[2]=ve=>g.clue=ve),required:""},null,512),[[on,g.clue]]),K[16]||(K[16]=N("label",null,"Especialidades:",-1)),N("div",TL,[(ce(!0),de(tt,null,ln(at(e).specialties,(ve,Te)=>(ce(),de("label",{key:Te},[je(N("input",{type:"checkbox",value:Te,"onUpdate:modelValue":K[3]||(K[3]=Qe=>g.specialties=Qe)},null,8,bL),[[Lc,g.specialties]]),He(" "+Be(ve),1)]))),128))]),K[17]||(K[17]=N("label",null,"Dificuldade:",-1)),je(N("select",{"onUpdate:modelValue":K[4]||(K[4]=ve=>g.difficulty=ve),required:""},K[13]||(K[13]=[N("option",{disabled:"",value:""},"Selecione",-1),N("option",{value:"1"},"Fácil",-1),N("option",{value:"2"},"Média",-1),N("option",{value:"3"},"Difícil",-1)]),512),[[Ys,g.difficulty,void 0,{number:!0}]]),K[18]||(K[18]=N("button",{type:"submit"},"Adicionar",-1)),N("button",{type:"button",onClick:y},"Cancelar")],32)])])):Ai("",!0)]),_:1})])}}},RL=pn(SL,[["__scopeId","data-v-85c4f9d4"]]),CL=[{path:"/",name:"Home",component:JN},{path:"/quiz",name:"QuickQuizGame",component:gD},{path:"/cards",name:"MemoryGame",component:bD},{path:"/word-search",name:"WordSearchGame",component:LD},{path:"/hangman",name:"HangmanGame",component:XD},{path:"/my-vocabulary",name:"MyVocabulary",component:RL}],OL=zN({history:yN(),routes:CL});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function PL(t,e,n){return(e=DL(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ig(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ig(Object(n),!0).forEach(function(i){PL(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ig(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function NL(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function DL(t){var e=NL(t,"string");return typeof e=="symbol"?e:e+""}const sg=()=>{};let Cf={},KI={},QI=null,YI={mark:sg,measure:sg};try{typeof window<"u"&&(Cf=window),typeof document<"u"&&(KI=document),typeof MutationObserver<"u"&&(QI=MutationObserver),typeof performance<"u"&&(YI=performance)}catch{}const{userAgent:rg=""}=Cf.navigator||{},Ui=Cf,Je=KI,og=QI,Aa=YI;Ui.document;const ti=!!Je.documentElement&&!!Je.head&&typeof Je.addEventListener=="function"&&typeof Je.createElement=="function",XI=~rg.indexOf("MSIE")||~rg.indexOf("Trident/");var LL=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ML=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,JI={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},kL={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ZI=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Dt="classic",ec="duotone",xL="sharp",VL="sharp-duotone",eE=[Dt,ec,xL,VL],FL={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},UL={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},qL=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),BL={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},zL=["fak","fa-kit","fakd","fa-kit-duotone"],ag={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},GL=["kit"],HL={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},jL=["fak","fakd"],$L={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},lg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},wa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},WL=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],KL=["fak","fa-kit","fakd","fa-kit-duotone"],QL={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},YL={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},XL={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Wu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},JL=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ku=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...WL,...JL],ZL=["solid","regular","light","thin","duotone","brands"],tE=[1,2,3,4,5,6,7,8,9,10],eM=tE.concat([11,12,13,14,15,16,17,18,19,20]),tM=[...Object.keys(XL),...ZL,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wa.GROUP,wa.SWAP_OPACITY,wa.PRIMARY,wa.SECONDARY].concat(tE.map(t=>"".concat(t,"x"))).concat(eM.map(t=>"w-".concat(t))),nM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Jn="___FONT_AWESOME___",Qu=16,nE="fa",iE="svg-inline--fa",Is="data-fa-i2svg",Yu="data-fa-pseudo-element",iM="data-fa-pseudo-element-pending",Of="data-prefix",Pf="data-icon",cg="fontawesome-i2svg",sM="async",rM=["HTML","HEAD","STYLE","SCRIPT"],sE=(()=>{try{return!0}catch{return!1}})();function Wo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Dt]}})}const rE=W({},JI);rE[Dt]=W(W(W(W({},{"fa-duotone":"duotone"}),JI[Dt]),ag.kit),ag["kit-duotone"]);const oM=Wo(rE),Xu=W({},BL);Xu[Dt]=W(W(W(W({},{duotone:"fad"}),Xu[Dt]),lg.kit),lg["kit-duotone"]);const ug=Wo(Xu),Ju=W({},Wu);Ju[Dt]=W(W({},Ju[Dt]),$L.kit);const Nf=Wo(Ju),Zu=W({},YL);Zu[Dt]=W(W({},Zu[Dt]),HL.kit);Wo(Zu);const aM=LL,oE="fa-layers-text",lM=ML,cM=W({},FL);Wo(cM);const uM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],eu=kL,dM=[...GL,...tM],io=Ui.FontAwesomeConfig||{};function fM(t){var e=Je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function hM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Je&&typeof Je.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const s=hM(fM(n));s!=null&&(io[i]=s)});const aE={styleDefault:"solid",familyDefault:Dt,cssPrefix:nE,replacementClass:iE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};io.familyPrefix&&(io.cssPrefix=io.familyPrefix);const or=W(W({},aE),io);or.autoReplaceSvg||(or.observeMutations=!1);const ae={};Object.keys(aE).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){or[t]=e,so.forEach(n=>n(ae))},get:function(){return or[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){or.cssPrefix=t,so.forEach(e=>e(ae))},get:function(){return or.cssPrefix}});Ui.FontAwesomeConfig=ae;const so=[];function pM(t){return so.push(t),()=>{so.splice(so.indexOf(t),1)}}const ui=Qu,En={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mM(t){if(!t||!ti)return;const e=Je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Je.head.childNodes;let i=null;for(let s=n.length-1;s>-1;s--){const r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return Je.head.insertBefore(e,i),t}const gM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ro(){let t=12,e="";for(;t-- >0;)e+=gM[Math.random()*62|0];return e}function mr(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Df(t){return t.classList?mr(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function lE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yM(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(lE(t[n]),'" '),"").trim()}function tc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Lf(t){return t.size!==En.size||t.x!==En.x||t.y!==En.y||t.rotate!==En.rotate||t.flipX||t.flipY}function _M(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(r," ").concat(o," ").concat(l)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:c,path:u}}function IM(t){let{transform:e,width:n=Qu,height:i=Qu,startCentered:s=!1}=t,r="";return s&&XI?r+="translate(".concat(e.x/ui-n/2,"em, ").concat(e.y/ui-i/2,"em) "):s?r+="translate(calc(-50% + ".concat(e.x/ui,"em), calc(-50% + ").concat(e.y/ui,"em)) "):r+="translate(".concat(e.x/ui,"em, ").concat(e.y/ui,"em) "),r+="scale(".concat(e.size/ui*(e.flipX?-1:1),", ").concat(e.size/ui*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var EM=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function cE(){const t=nE,e=iE,n=ae.cssPrefix,i=ae.replacementClass;let s=EM;if(n!==t||i!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(i))}return s}let dg=!1;function tu(){ae.autoAddCss&&!dg&&(mM(cE()),dg=!0)}var AM={mixout(){return{dom:{css:cE,insertCss:tu}}},hooks(){return{beforeDOMElementCreation(){tu()},beforeI2svg(){tu()}}}};const Zn=Ui||{};Zn[Jn]||(Zn[Jn]={});Zn[Jn].styles||(Zn[Jn].styles={});Zn[Jn].hooks||(Zn[Jn].hooks={});Zn[Jn].shims||(Zn[Jn].shims=[]);var An=Zn[Jn];const uE=[],dE=function(){Je.removeEventListener("DOMContentLoaded",dE),hl=1,uE.map(t=>t())};let hl=!1;ti&&(hl=(Je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Je.readyState),hl||Je.addEventListener("DOMContentLoaded",dE));function wM(t){ti&&(hl?setTimeout(t,0):uE.push(t))}function Ko(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?lE(t):"<".concat(e," ").concat(yM(n),">").concat(i.map(Ko).join(""),"</").concat(e,">")}function fg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var nu=function(e,n,i,s){var r=Object.keys(e),o=r.length,l=n,c,u,f;for(i===void 0?(c=1,f=e[r[0]]):(c=0,f=i);c<o;c++)u=r[c],f=l(f,e[u],u,e);return f};function vM(t){const e=[];let n=0;const i=t.length;for(;n<i;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function ed(t){const e=vM(t);return e.length===1?e[0].toString(16):null}function TM(t,e){const n=t.length;let i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function hg(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function td(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,s=hg(e);typeof An.hooks.addPack=="function"&&!i?An.hooks.addPack(t,hg(e)):An.styles[t]=W(W({},An.styles[t]||{}),s),t==="fas"&&td("fa",e)}const{styles:Co,shims:bM}=An,fE=Object.keys(Nf),SM=fE.reduce((t,e)=>(t[e]=Object.keys(Nf[e]),t),{});let Mf=null,hE={},pE={},mE={},gE={},yE={};function RM(t){return~dM.indexOf(t)}function CM(t,e){const n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!RM(s)?s:null}const _E=()=>{const t=i=>nu(Co,(s,r,o)=>(s[o]=nu(r,i,{}),s),{});hE=t((i,s,r)=>(s[3]&&(i[s[3]]=r),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{i[l.toString(16)]=r}),i)),pE=t((i,s,r)=>(i[r]=r,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{i[l]=r}),i)),yE=t((i,s,r)=>{const o=s[2];return i[r]=r,o.forEach(l=>{i[l]=r}),i});const e="far"in Co||ae.autoFetchSvg,n=nu(bM,(i,s)=>{const r=s[0];let o=s[1];const l=s[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(i.names[r]={prefix:o,iconName:l}),typeof r=="number"&&(i.unicodes[r.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});mE=n.names,gE=n.unicodes,Mf=nc(ae.styleDefault,{family:ae.familyDefault})};pM(t=>{Mf=nc(t.styleDefault,{family:ae.familyDefault})});_E();function kf(t,e){return(hE[t]||{})[e]}function OM(t,e){return(pE[t]||{})[e]}function ls(t,e){return(yE[t]||{})[e]}function IE(t){return mE[t]||{prefix:null,iconName:null}}function PM(t){const e=gE[t],n=kf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qi(){return Mf}const EE=()=>({prefix:null,iconName:null,rest:[]});function NM(t){let e=Dt;const n=fE.reduce((i,s)=>(i[s]="".concat(ae.cssPrefix,"-").concat(s),i),{});return eE.forEach(i=>{(t.includes(n[i])||t.some(s=>SM[i].includes(s)))&&(e=i)}),e}function nc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Dt}=e,i=oM[n][t];if(n===ec&&!t)return"fad";const s=ug[n][t]||ug[n][i],r=t in An.styles?t:null;return s||r||null}function DM(t){let e=[],n=null;return t.forEach(i=>{const s=CM(ae.cssPrefix,i);s?n=s:i&&e.push(i)}),{iconName:n,rest:e}}function pg(t){return t.sort().filter((e,n,i)=>i.indexOf(e)===n)}function ic(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let i=null;const s=Ku.concat(KL),r=pg(t.filter(p=>s.includes(p))),o=pg(t.filter(p=>!Ku.includes(p))),l=r.filter(p=>(i=p,!ZI.includes(p))),[c=null]=l,u=NM(r),f=W(W({},DM(o)),{},{prefix:nc(c,{family:u})});return W(W(W({},f),xM({values:t,family:u,styles:Co,config:ae,canonical:f,givenPrefix:i})),LM(n,i,f))}function LM(t,e,n){let{prefix:i,iconName:s}=n;if(t||!i||!s)return{prefix:i,iconName:s};const r=e==="fa"?IE(s):{},o=ls(i,s);return s=r.iconName||o||s,i=r.prefix||i,i==="far"&&!Co.far&&Co.fas&&!ae.autoFetchSvg&&(i="fas"),{prefix:i,iconName:s}}const MM=eE.filter(t=>t!==Dt||t!==ec),kM=Object.keys(Wu).filter(t=>t!==Dt).map(t=>Object.keys(Wu[t])).flat();function xM(t){const{values:e,family:n,canonical:i,givenPrefix:s="",styles:r={},config:o={}}=t,l=n===ec,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!l&&(c||u||f)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&MM.includes(n)&&(Object.keys(r).find(m=>kM.includes(m))||o.autoFetchSvg)){const m=qL.get(n).defaultShortPrefixId;i.prefix=m,i.iconName=ls(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||s==="fa")&&(i.prefix=qi()||"fas"),i}class VM{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(r=>{this.definitions[r]=W(W({},this.definitions[r]||{}),s[r]),td(r,s[r]);const o=Nf[Dt][r];o&&td(o,s[r]),_E()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(s=>{const{prefix:r,iconName:o,icon:l}=i[s],c=l[2];e[r]||(e[r]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[r][u]=l)}),e[r][o]=l}),e}}let mg=[],qs={};const Ks={},FM=Object.keys(Ks);function UM(t,e){let{mixoutsTo:n}=e;return mg=t,qs={},Object.keys(Ks).forEach(i=>{FM.indexOf(i)===-1&&delete Ks[i]}),mg.forEach(i=>{const s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(r=>{typeof s[r]=="function"&&(n[r]=s[r]),typeof s[r]=="object"&&Object.keys(s[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=s[r][o]})}),i.hooks){const r=i.hooks();Object.keys(r).forEach(o=>{qs[o]||(qs[o]=[]),qs[o].push(r[o])})}i.provides&&i.provides(Ks)}),n}function nd(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];return(qs[t]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function Es(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(qs[t]||[]).forEach(r=>{r.apply(null,n)})}function Bi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ks[t]?Ks[t].apply(null,e):void 0}function id(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||qi();if(e)return e=ls(n,e)||e,fg(AE.definitions,n,e)||fg(An.styles,n,e)}const AE=new VM,qM=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,Es("noAuto")},BM={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ti?(Es("beforeI2svg",t),Bi("pseudoElements2svg",t),Bi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,wM(()=>{GM({autoReplaceSvgRoot:e}),Es("watch",t)})}},zM={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ls(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=nc(t[0]);return{prefix:n,iconName:ls(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(aM))){const e=ic(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||qi(),iconName:ls(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=qi();return{prefix:e,iconName:ls(e,t)||t}}}},Yt={noAuto:qM,config:ae,dom:BM,parse:zM,library:AE,findIconDefinition:id,toHtml:Ko},GM=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Je}=t;(Object.keys(An.styles).length>0||ae.autoFetchSvg)&&ti&&ae.autoReplaceSvg&&Yt.dom.i2svg({node:e})};function sc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ko(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ti)return;const n=Je.createElement("div");return n.innerHTML=t.html,n.children}}),t}function HM(t){let{children:e,main:n,mask:i,attributes:s,styles:r,transform:o}=t;if(Lf(o)&&n.found&&!i.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};s.style=tc(W(W({},r),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function jM(t){let{prefix:e,iconName:n,children:i,attributes:s,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:i}]}]}function xf(t){const{icons:{main:e,mask:n},prefix:i,iconName:s,transform:r,symbol:o,title:l,maskId:c,titleId:u,extra:f,watchable:p=!1}=t,{width:m,height:E}=n.found?n:e,R=jL.includes(i),L=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(z=>f.classes.indexOf(z)===-1).filter(z=>z!==""||!!z).concat(f.classes).join(" ");let M={children:[],attributes:W(W({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:L,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(E)})};const O=R&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/E*16*.0625,"em")}:{};p&&(M.attributes[Is]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||Ro())},children:[l]}),delete M.attributes.title);const C=W(W({},M),{},{prefix:i,iconName:s,main:e,mask:n,maskId:c,transform:r,symbol:o,styles:W(W({},O),f.styles)}),{children:k,attributes:V}=n.found&&e.found?Bi("generateAbstractMask",C)||{children:[],attributes:{}}:Bi("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=k,C.attributes=V,o?jM(C):HM(C)}function gg(t){const{content:e,width:n,height:i,transform:s,title:r,extra:o,watchable:l=!1}=t,c=W(W(W({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[Is]="");const u=W({},o.styles);Lf(s)&&(u.transform=IM({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);const f=tc(u);f.length>0&&(c.style=f);const p=[];return p.push({tag:"span",attributes:c,children:[e]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function $M(t){const{content:e,title:n,extra:i}=t,s=W(W(W({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=tc(i.styles);r.length>0&&(s.style=r);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:iu}=An;function sd(t){const e=t[0],n=t[1],[i]=t.slice(4);let s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(eu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(eu.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(eu.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}const WM={found:!1,width:512,height:512};function KM(t,e){!sE&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function rd(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=qi()),new Promise((i,s)=>{if(n==="fa"){const r=IE(t);t=r.iconName||t,e=r.prefix||e}if(t&&e&&iu[e]&&iu[e][t]){const r=iu[e][t];return i(sd(r))}KM(t,e),i(W(W({},WM),{},{icon:ae.showMissingIcons&&t?Bi("missingIconAbstract")||{}:{}}))})}const yg=()=>{},od=ae.measurePerformance&&Aa&&Aa.mark&&Aa.measure?Aa:{mark:yg,measure:yg},qr='FA "6.7.2"',QM=t=>(od.mark("".concat(qr," ").concat(t," begins")),()=>wE(t)),wE=t=>{od.mark("".concat(qr," ").concat(t," ends")),od.measure("".concat(qr," ").concat(t),"".concat(qr," ").concat(t," begins"),"".concat(qr," ").concat(t," ends"))};var Vf={begin:QM,end:wE};const xa=()=>{};function _g(t){return typeof(t.getAttribute?t.getAttribute(Is):null)=="string"}function YM(t){const e=t.getAttribute?t.getAttribute(Of):null,n=t.getAttribute?t.getAttribute(Pf):null;return e&&n}function XM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function JM(){return ae.autoReplaceSvg===!0?Va.replace:Va[ae.autoReplaceSvg]||Va.replace}function ZM(t){return Je.createElementNS("http://www.w3.org/2000/svg",t)}function e4(t){return Je.createElement(t)}function vE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ZM:e4}=e;if(typeof t=="string")return Je.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){i.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){i.appendChild(vE(r,{ceFn:n}))}),i}function t4(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Va={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(vE(n),e)}),e.getAttribute(Is)===null&&ae.keepOriginalSource){let n=Je.createComment(t4(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Df(e).indexOf(ae.replacementClass))return Va.replace(t);const i=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,l)=>(l===ae.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const s=n.map(r=>Ko(r)).join(`
`);e.setAttribute(Is,""),e.innerHTML=s}};function Ig(t){t()}function TE(t,e){const n=typeof e=="function"?e:xa;if(t.length===0)n();else{let i=Ig;ae.mutateApproach===sM&&(i=Ui.requestAnimationFrame||Ig),i(()=>{const s=JM(),r=Vf.begin("mutate");t.map(s),r(),n()})}}let Ff=!1;function bE(){Ff=!0}function ad(){Ff=!1}let pl=null;function Eg(t){if(!og||!ae.observeMutations)return;const{treeCallback:e=xa,nodeCallback:n=xa,pseudoElementsCallback:i=xa,observeMutationsRoot:s=Je}=t;pl=new og(r=>{if(Ff)return;const o=qi();mr(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!_g(l.addedNodes[0])&&(ae.searchPseudoElements&&i(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&ae.searchPseudoElements&&i(l.target.parentNode),l.type==="attributes"&&_g(l.target)&&~uM.indexOf(l.attributeName))if(l.attributeName==="class"&&YM(l.target)){const{prefix:c,iconName:u}=ic(Df(l.target));l.target.setAttribute(Of,c||o),u&&l.target.setAttribute(Pf,u)}else XM(l.target)&&n(l.target)})}),ti&&pl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function n4(){pl&&pl.disconnect()}function i4(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,s)=>{const r=s.split(":"),o=r[0],l=r.slice(1);return o&&l.length>0&&(i[o]=l.join(":").trim()),i},{})),n}function s4(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let s=ic(Df(t));return s.prefix||(s.prefix=qi()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=OM(s.prefix,t.innerText)||kf(s.prefix,ed(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function r4(t){const e=mr(t.attributes).reduce((s,r)=>(s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(i||Ro()):(e["aria-hidden"]="true",e.focusable="false")),e}function o4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:En,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ag(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:s}=s4(t),r=r4(t),o=nd("parseNodeAttributes",{},t);let l=e.styleParser?i4(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:En,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:r}},o)}const{styles:a4}=An;function SE(t){const e=ae.autoReplaceSvg==="nest"?Ag(t,{styleParser:!1}):Ag(t);return~e.extra.classes.indexOf(oE)?Bi("generateLayersText",t,e):Bi("generateSvgReplacementMutation",t,e)}function l4(){return[...zL,...Ku]}function wg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ti)return Promise.resolve();const n=Je.documentElement.classList,i=f=>n.add("".concat(cg,"-").concat(f)),s=f=>n.remove("".concat(cg,"-").concat(f)),r=ae.autoFetchSvg?l4():ZI.concat(Object.keys(a4));r.includes("fa")||r.push("fa");const o=[".".concat(oE,":not([").concat(Is,"])")].concat(r.map(f=>".".concat(f,":not([").concat(Is,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=mr(t.querySelectorAll(o))}catch{}if(l.length>0)i("pending"),s("complete");else return Promise.resolve();const c=Vf.begin("onTree"),u=l.reduce((f,p)=>{try{const m=SE(p);m&&f.push(m)}catch(m){sE||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(u).then(m=>{TE(m,()=>{i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(m=>{c(),p(m)})})}function c4(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;SE(t).then(n=>{n&&TE([n],e)})}function u4(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:id(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:id(s||{})),t(i,W(W({},n),{},{mask:s}))}}const d4=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=En,symbol:i=!1,mask:s=null,maskId:r=null,title:o=null,titleId:l=null,classes:c=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:E}=t;return sc(W({type:"icon"},t),()=>(Es("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?u["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(l||Ro()):(u["aria-hidden"]="true",u.focusable="false")),xf({icons:{main:sd(E),mask:s?sd(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:W(W({},En),n),symbol:i,title:o,maskId:r,titleId:l,extra:{attributes:u,styles:f,classes:c}})))};var f4={mixout(){return{icon:u4(d4)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=wg,t.nodeCallback=c4,t}}},provides(t){t.i2svg=function(e){const{node:n=Je,callback:i=()=>{}}=e;return wg(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:s,titleId:r,prefix:o,transform:l,symbol:c,mask:u,maskId:f,extra:p}=n;return new Promise((m,E)=>{Promise.all([rd(i,o),u.iconName?rd(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[L,M]=R;m([e,xf({icons:{main:L,mask:M},prefix:o,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:r,extra:p,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:s,transform:r,styles:o}=e;const l=tc(o);l.length>0&&(i.style=l);let c;return Lf(r)&&(c=Bi("generateAbstractTransformGrouping",{main:s,transform:r,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:i}}}},h4={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return sc({type:"layer"},()=>{Es("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(s=>{Array.isArray(s)?s.map(r=>{i=i.concat(r.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},p4={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:s={},styles:r={}}=e;return sc({type:"counter",content:t},()=>(Es("beforeDOMElementCreation",{content:t,params:e}),$M({content:t.toString(),title:n,extra:{attributes:s,styles:r,classes:["".concat(ae.cssPrefix,"-layers-counter"),...i]}})))}}}},m4={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=En,title:i=null,classes:s=[],attributes:r={},styles:o={}}=e;return sc({type:"text",content:t},()=>(Es("beforeDOMElementCreation",{content:t,params:e}),gg({content:t,transform:W(W({},En),n),title:i,extra:{attributes:r,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:s,extra:r}=n;let o=null,l=null;if(XI){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,l=u.height/c}return ae.autoA11y&&!i&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,gg({content:e.innerHTML,width:o,height:l,transform:s,title:i,extra:r,watchable:!0})])}}};const g4=new RegExp('"',"ug"),vg=[1105920,1112319],Tg=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),UL),nM),QL),ld=Object.keys(Tg).reduce((t,e)=>(t[e.toLowerCase()]=Tg[e],t),{}),y4=Object.keys(ld).reduce((t,e)=>{const n=ld[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function _4(t){const e=t.replace(g4,""),n=TM(e,0),i=n>=vg[0]&&n<=vg[1],s=e.length===2?e[0]===e[1]:!1;return{value:ed(s?e[0]:e),isSecondary:i||s}}function I4(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),s=isNaN(i)?"normal":i;return(ld[n]||{})[s]||y4[n]}function bg(t,e){const n="".concat(iM).concat(e.replace(":","-"));return new Promise((i,s)=>{if(t.getAttribute(n)!==null)return i();const o=mr(t.children).filter(m=>m.getAttribute(Yu)===e)[0],l=Ui.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(lM),f=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),i();if(u&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let E=I4(c,f);const{value:R,isSecondary:L}=_4(m),M=u[0].startsWith("FontAwesome");let O=kf(E,R),C=O;if(M){const k=PM(R);k.iconName&&k.prefix&&(O=k.iconName,E=k.prefix)}if(O&&!L&&(!o||o.getAttribute(Of)!==E||o.getAttribute(Pf)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);const k=o4(),{extra:V}=k;V.attributes[Yu]=e,rd(O,E).then(z=>{const H=xf(W(W({},k),{},{icons:{main:z,mask:EE()},prefix:E,iconName:C,extra:V,watchable:!0})),T=Je.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=H.map(y=>Ko(y)).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function E4(t){return Promise.all([bg(t,"::before"),bg(t,"::after")])}function A4(t){return t.parentNode!==document.head&&!~rM.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Sg(t){if(ti)return new Promise((e,n)=>{const i=mr(t.querySelectorAll("*")).filter(A4).map(E4),s=Vf.begin("searchPseudoElements");bE(),Promise.all(i).then(()=>{s(),ad(),e()}).catch(()=>{s(),ad(),n()})})}var w4={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Sg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Je}=e;ae.searchPseudoElements&&Sg(n)}}};let Rg=!1;var v4={mixout(){return{dom:{unwatch(){bE(),Rg=!0}}}},hooks(){return{bootstrap(){Eg(nd("mutationObserverCallbacks",{}))},noAuto(){n4()},watch(t){const{observeMutationsRoot:e}=t;Rg?ad():Eg(nd("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Cg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const s=i.toLowerCase().split("-"),r=s[0];let o=s.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var T4={mixout(){return{parse:{transform:t=>Cg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Cg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:s,iconWidth:r}=e;const o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(r/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:W({},m.outer),children:[{tag:"g",attributes:W({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),m.path)}]}]}}}};const su={x:0,y:0,width:"100%",height:"100%"};function Og(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function b4(t){return t.tag==="g"?t.children:[t]}var S4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?ic(n.split(" ").map(s=>s.trim())):EE();return i.prefix||(i.prefix=qi()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:s,mask:r,maskId:o,transform:l}=e;const{width:c,icon:u}=s,{width:f,icon:p}=r,m=_M({transform:l,containerWidth:f,iconWidth:c}),E={tag:"rect",attributes:W(W({},su),{},{fill:"white"})},R=u.children?{children:u.children.map(Og)}:{},L={tag:"g",attributes:W({},m.inner),children:[Og(W({tag:u.tag,attributes:W(W({},u.attributes),m.path)},R))]},M={tag:"g",attributes:W({},m.outer),children:[L]},O="mask-".concat(o||Ro()),C="clip-".concat(o||Ro()),k={tag:"mask",attributes:W(W({},su),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,M]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:b4(p)},k]};return n.push(V,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(O,")")},su)}),{children:n,attributes:i}}}},R4={provides(t){let e=!1;Ui.matchMedia&&(e=Ui.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},C4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},O4=[AM,f4,h4,p4,m4,w4,v4,T4,S4,R4,C4];UM(O4,{mixoutsTo:Yt});Yt.noAuto;Yt.config;const P4=Yt.library;Yt.dom;const cd=Yt.parse;Yt.findIconDefinition;Yt.toHtml;const N4=Yt.icon;Yt.layer;Yt.text;Yt.counter;function Pg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function zn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pg(Object(n),!0).forEach(function(i){Ft(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function D4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function L4(t){var e=D4(t,"string");return typeof e=="symbol"?e:e+""}function ml(t){"@babel/helpers - typeof";return ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ml(t)}function Ft(t,e,n){return e=L4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M4(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function k4(t,e){if(t==null)return{};var n=M4(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var x4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},RE={exports:{}};(function(t){(function(e){var n=function(O,C,k){if(!u(C)||p(C)||m(C)||E(C)||c(C))return C;var V,z=0,H=0;if(f(C))for(V=[],H=C.length;z<H;z++)V.push(n(O,C[z],k));else{V={};for(var T in C)Object.prototype.hasOwnProperty.call(C,T)&&(V[O(T,k)]=n(O,C[T],k))}return V},i=function(O,C){C=C||{};var k=C.separator||"_",V=C.split||/(?=[A-Z])/;return O.split(V).join(k)},s=function(O){return R(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(C,k){return k?k.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},r=function(O){var C=s(O);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(O,C){return i(O,C).toLowerCase()},l=Object.prototype.toString,c=function(O){return typeof O=="function"},u=function(O){return O===Object(O)},f=function(O){return l.call(O)=="[object Array]"},p=function(O){return l.call(O)=="[object Date]"},m=function(O){return l.call(O)=="[object RegExp]"},E=function(O){return l.call(O)=="[object Boolean]"},R=function(O){return O=O-0,O===O},L=function(O,C){var k=C&&"process"in C?C.process:C;return typeof k!="function"?O:function(V,z){return k(V,O,z)}},M={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(O,C){return n(L(s,C),O)},decamelizeKeys:function(O,C){return n(L(o,C),O,C)},pascalizeKeys:function(O,C){return n(L(r,C),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=M:e.humps=M})(x4)})(RE);var V4=RE.exports,F4=["class","style"];function U4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=V4.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function q4(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function CE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(c){return CE(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=q4(f);break;case"style":c.style=U4(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,l=k4(n,F4);return Cl(t.tag,zn(zn(zn({},e),{},{class:s.class,style:zn(zn({},s.style),o)},s.attrs),l),i)}var OE=!1;try{OE=!0}catch{}function B4(){if(!OE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ru(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ft({},t,e):{}}function z4(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ft(Ft(Ft(Ft(Ft(Ft(Ft(Ft(Ft(Ft(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Ft(Ft(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Ng(t){if(t&&ml(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(cd.icon)return cd.icon(t);if(t===null)return null;if(ml(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var G4=Td({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=ze(function(){return Ng(e.icon)}),r=ze(function(){return ru("classes",z4(e))}),o=ze(function(){return ru("transform",typeof e.transform=="string"?cd.transform(e.transform):e.transform)}),l=ze(function(){return ru("mask",Ng(e.mask))}),c=ze(function(){return N4(s.value,zn(zn(zn(zn({},r.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Si(c,function(f){if(!f)return B4("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var u=ze(function(){return c.value?CE(c.value.abstract[0],{},i):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const H4={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},j4=H4,$4={prefix:"fas",iconName:"feather",icon:[512,512,[129718],"f52d","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 68 0c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330l0 55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},W4={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2L0 192C0 86 86 0 192 0S384 86 384 192l0 270.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},K4={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Q4=K4,Y4={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},X4={prefix:"fas",iconName:"highlighter",icon:[576,512,[],"f591","M315 315l158.4-215L444.1 70.6 229 229 315 315zm-187 5s0 0 0 0l0-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5c0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5L224 416l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l63-63 70.6 70.6-31 31c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z"]},J4={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},Z4={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},e3=Z4,t3={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},n3={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},i3={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},s3=i3,r3={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},o3={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},a3=o3,l3={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"]},c3=l3,u3={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"]},d3={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},f3={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Dg=f3,h3={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},p3={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},m3=p3,g3={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},y3={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},_3={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},I3={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},E3={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"]};P4.add(t3,E3,W4,J4,Dg,y3,e3,_3,a3,j4,s3,c3,Q4,X4,r3,n3,Y4,I3,m3,h3,Dg,g3,d3,$4,u3);const rc=Cv(UP),A3=Nv();rc.use(A3);rc.use(OL);rc.component("font-awesome-icon",G4);const w3=DI();w3.initAuthState();rc.mount("#app");

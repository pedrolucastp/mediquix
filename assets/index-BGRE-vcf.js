(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function od(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ge={},Bs=[],In=()=>{},WA=()=>!1,cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ad=t=>t.startsWith("onUpdate:"),ht=Object.assign,ld=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},KA=Object.prototype.hasOwnProperty,qe=(t,e)=>KA.call(t,e),le=Array.isArray,zs=t=>So(t)==="[object Map]",ar=t=>So(t)==="[object Set]",Sh=t=>So(t)==="[object Date]",Se=t=>typeof t=="function",st=t=>typeof t=="string",Cn=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",Og=t=>(je(t)||Se(t))&&Se(t.then)&&Se(t.catch),Pg=Object.prototype.toString,So=t=>Pg.call(t),QA=t=>So(t).slice(8,-1),Ng=t=>So(t)==="[object Object]",cd=t=>st(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fr=od(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ul=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},YA=/-(\w)/g,nn=ul(t=>t.replace(YA,(e,n)=>n?n.toUpperCase():"")),XA=/\B([A-Z])/g,Es=ul(t=>t.replace(XA,"-$1").toLowerCase()),dl=ul(t=>t.charAt(0).toUpperCase()+t.slice(1)),yc=ul(t=>t?`on${dl(t)}`:""),vi=(t,e)=>!Object.is(t,e),ya=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Dg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Da=t=>{const e=parseFloat(t);return isNaN(e)?t:e},JA=t=>{const e=st(t)?Number(t):NaN;return isNaN(e)?t:e};let Rh;const fl=()=>Rh||(Rh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ro(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=st(i)?n1(i):Ro(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(st(t)||je(t))return t}const ZA=/;(?![^(]*\))/g,e1=/:([^]+)/,t1=/\/\*[^]*?\*\//g;function n1(t){const e={};return t.replace(t1,"").split(ZA).forEach(n=>{if(n){const i=n.split(e1);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Pi(t){let e="";if(st(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const i=Pi(t[n]);i&&(e+=i+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const i1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s1=od(i1);function Lg(t){return!!t||t===""}function r1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Co(t[i],e[i]);return n}function Co(t,e){if(t===e)return!0;let n=Sh(t),i=Sh(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Cn(t),i=Cn(e),n||i)return t===e;if(n=le(t),i=le(e),n||i)return n&&i?r1(t,e):!1;if(n=je(t),i=je(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Co(t[o],e[o]))return!1}}return String(t)===String(e)}function ud(t,e){return t.findIndex(n=>Co(n,e))}const Mg=t=>!!(t&&t.__v_isRef===!0),Xe=t=>st(t)?t:t==null?"":le(t)||je(t)&&(t.toString===Pg||!Se(t.toString))?Mg(t)?Xe(t.value):JSON.stringify(t,kg,2):String(t),kg=(t,e)=>Mg(e)?kg(t,e.value):zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[_c(i,r)+" =>"]=s,n),{})}:ar(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_c(n))}:Cn(e)?_c(e):je(e)&&!le(e)&&!Ng(e)?String(e):e,_c=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class xg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Vg(t){return new xg(t)}function Fg(){return Mt}function o1(t,e=!1){Mt&&Mt.cleanups.push(t)}let $e;const Ic=new WeakSet;class Ug{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mt&&Mt.active&&Mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ic.has(this)&&(Ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ch(this),zg(this);const e=$e,n=rn;$e=this,rn=!0;try{return this.fn()}finally{Gg(this),$e=e,rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hd(e);this.deps=this.depsTail=void 0,Ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nu(this)&&this.run()}get dirty(){return nu(this)}}let qg=0,Ur,qr;function Bg(t,e=!1){if(t.flags|=8,e){t.next=qr,qr=t;return}t.next=Ur,Ur=t}function dd(){qg++}function fd(){if(--qg>0)return;if(qr){let e=qr;for(qr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ur;){let e=Ur;for(Ur=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function zg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gg(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),hd(i),a1(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function nu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===no))return;t.globalVersion=no;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!nu(t)){t.flags&=-3;return}const n=$e,i=rn;$e=t,rn=!0;try{zg(t);const s=t.fn(t._value);(e.version===0||vi(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{$e=n,rn=i,Gg(t),t.flags&=-3}}function hd(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)hd(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function a1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rn=!0;const Hg=[];function Bi(){Hg.push(rn),rn=!1}function zi(){const t=Hg.pop();rn=t===void 0?!0:t}function Ch(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let no=0;class l1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!rn||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new l1($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,$g(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=i)}return n}trigger(e){this.version++,no++,this.notify(e)}notify(e){dd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fd()}}}function $g(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)$g(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const La=new WeakMap,ls=Symbol(""),iu=Symbol(""),io=Symbol("");function Rt(t,e,n){if(rn&&$e){let i=La.get(t);i||La.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new pd),s.map=i,s.key=n),s.track()}}function Un(t,e,n,i,s,r){const o=La.get(t);if(!o){no++;return}const l=c=>{c&&c.trigger()};if(dd(),e==="clear")o.forEach(l);else{const c=le(t),u=c&&cd(n);if(c&&n==="length"){const f=Number(i);o.forEach((p,m)=>{(m==="length"||m===io||!Cn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(io)),e){case"add":c?u&&l(o.get("length")):(l(o.get(ls)),zs(t)&&l(o.get(iu)));break;case"delete":c||(l(o.get(ls)),zs(t)&&l(o.get(iu)));break;case"set":zs(t)&&l(o.get(ls));break}}fd()}function c1(t,e){const n=La.get(t);return n&&n.get(e)}function Ps(t){const e=ke(t);return e===t?e:(Rt(e,"iterate",io),en(t)?e:e.map(Ct))}function hl(t){return Rt(t=ke(t),"iterate",io),t}const u1={__proto__:null,[Symbol.iterator](){return Ec(this,Symbol.iterator,Ct)},concat(...t){return Ps(this).concat(...t.map(e=>le(e)?Ps(e):e))},entries(){return Ec(this,"entries",t=>(t[1]=Ct(t[1]),t))},every(t,e){return kn(this,"every",t,e,void 0,arguments)},filter(t,e){return kn(this,"filter",t,e,n=>n.map(Ct),arguments)},find(t,e){return kn(this,"find",t,e,Ct,arguments)},findIndex(t,e){return kn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return kn(this,"findLast",t,e,Ct,arguments)},findLastIndex(t,e){return kn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return kn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ac(this,"includes",t)},indexOf(...t){return Ac(this,"indexOf",t)},join(t){return Ps(this).join(t)},lastIndexOf(...t){return Ac(this,"lastIndexOf",t)},map(t,e){return kn(this,"map",t,e,void 0,arguments)},pop(){return Cr(this,"pop")},push(...t){return Cr(this,"push",t)},reduce(t,...e){return Oh(this,"reduce",t,e)},reduceRight(t,...e){return Oh(this,"reduceRight",t,e)},shift(){return Cr(this,"shift")},some(t,e){return kn(this,"some",t,e,void 0,arguments)},splice(...t){return Cr(this,"splice",t)},toReversed(){return Ps(this).toReversed()},toSorted(t){return Ps(this).toSorted(t)},toSpliced(...t){return Ps(this).toSpliced(...t)},unshift(...t){return Cr(this,"unshift",t)},values(){return Ec(this,"values",Ct)}};function Ec(t,e,n){const i=hl(t),s=i[e]();return i!==t&&!en(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const d1=Array.prototype;function kn(t,e,n,i,s,r){const o=hl(t),l=o!==t&&!en(t),c=o[e];if(c!==d1[e]){const p=c.apply(t,r);return l?Ct(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Ct(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,i);return l&&s?s(f):f}function Oh(t,e,n,i){const s=hl(t);let r=n;return s!==t&&(en(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Ct(l),c,t)}),s[e](r,...i)}function Ac(t,e,n){const i=ke(t);Rt(i,"iterate",io);const s=i[e](...n);return(s===-1||s===!1)&&yd(n[0])?(n[0]=ke(n[0]),i[e](...n)):s}function Cr(t,e,n=[]){Bi(),dd();const i=ke(t)[e].apply(t,n);return fd(),zi(),i}const f1=od("__proto__,__v_isRef,__isVue"),Wg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn));function h1(t){Cn(t)||(t=String(t));const e=ke(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class Kg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?v1:Jg:r?Xg:Yg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=u1[n]))return c;if(n==="hasOwnProperty")return h1}const l=Reflect.get(e,n,it(e)?e:i);return(Cn(n)?Wg.has(n):f1(n))||(s||Rt(e,"get",n),r)?l:it(l)?o&&cd(n)?l:l.value:je(l)?s?ey(l):Ni(l):l}}class Qg extends Kg{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const c=ds(r);if(!en(i)&&!ds(i)&&(r=ke(r),i=ke(i)),!le(e)&&it(r)&&!it(i))return c?!1:(r.value=i,!0)}const o=le(e)&&cd(n)?Number(n)<e.length:qe(e,n),l=Reflect.set(e,n,i,it(e)?e:s);return e===ke(s)&&(o?vi(i,r)&&Un(e,"set",n,i):Un(e,"add",n,i)),l}deleteProperty(e,n){const i=qe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Un(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Cn(n)||!Wg.has(n))&&Rt(e,"has",n),i}ownKeys(e){return Rt(e,"iterate",le(e)?"length":ls),Reflect.ownKeys(e)}}class p1 extends Kg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const m1=new Qg,g1=new p1,y1=new Qg(!0);const su=t=>t,ra=t=>Reflect.getPrototypeOf(t);function _1(t,e,n){return function(...i){const s=this.__v_raw,r=ke(s),o=zs(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...i),f=n?su:e?ru:Ct;return!e&&Rt(r,"iterate",c?iu:ls),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function oa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function I1(t,e){const n={get(s){const r=this.__v_raw,o=ke(r),l=ke(s);t||(vi(s,l)&&Rt(o,"get",s),Rt(o,"get",l));const{has:c}=ra(o),u=e?su:t?ru:Ct;if(c.call(o,s))return u(r.get(s));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Rt(ke(s),"iterate",ls),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=ke(r),l=ke(s);return t||(vi(s,l)&&Rt(o,"has",s),Rt(o,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const o=this,l=o.__v_raw,c=ke(l),u=e?su:t?ru:Ct;return!t&&Rt(c,"iterate",ls),l.forEach((f,p)=>s.call(r,u(f),u(p),o))}};return ht(n,t?{add:oa("add"),set:oa("set"),delete:oa("delete"),clear:oa("clear")}:{add(s){!e&&!en(s)&&!ds(s)&&(s=ke(s));const r=ke(this);return ra(r).has.call(r,s)||(r.add(s),Un(r,"add",s,s)),this},set(s,r){!e&&!en(r)&&!ds(r)&&(r=ke(r));const o=ke(this),{has:l,get:c}=ra(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,r),u?vi(r,f)&&Un(o,"set",s,r):Un(o,"add",s,r),this},delete(s){const r=ke(this),{has:o,get:l}=ra(r);let c=o.call(r,s);c||(s=ke(s),c=o.call(r,s)),l&&l.call(r,s);const u=r.delete(s);return c&&Un(r,"delete",s,void 0),u},clear(){const s=ke(this),r=s.size!==0,o=s.clear();return r&&Un(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_1(s,t,e)}),n}function md(t,e){const n=I1(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(qe(n,s)&&s in i?n:i,s,r)}const E1={get:md(!1,!1)},A1={get:md(!1,!0)},w1={get:md(!0,!1)};const Yg=new WeakMap,Xg=new WeakMap,Jg=new WeakMap,v1=new WeakMap;function T1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b1(t){return t.__v_skip||!Object.isExtensible(t)?0:T1(QA(t))}function Ni(t){return ds(t)?t:gd(t,!1,m1,E1,Yg)}function Zg(t){return gd(t,!1,y1,A1,Xg)}function ey(t){return gd(t,!0,g1,w1,Jg)}function gd(t,e,n,i,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=b1(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function Ti(t){return ds(t)?Ti(t.__v_raw):!!(t&&t.__v_isReactive)}function ds(t){return!!(t&&t.__v_isReadonly)}function en(t){return!!(t&&t.__v_isShallow)}function yd(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function _d(t){return!qe(t,"__v_skip")&&Object.isExtensible(t)&&Dg(t,"__v_skip",!0),t}const Ct=t=>je(t)?Ni(t):t,ru=t=>je(t)?ey(t):t;function it(t){return t?t.__v_isRef===!0:!1}function ge(t){return ty(t,!1)}function S1(t){return ty(t,!0)}function ty(t,e){return it(t)?t:new R1(t,e)}class R1{constructor(e,n){this.dep=new pd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:Ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||en(e)||ds(e);e=i?e:ke(e),vi(e,n)&&(this._rawValue=e,this._value=i?e:Ct(e),this.dep.trigger())}}function Ut(t){return it(t)?t.value:t}const C1={get:(t,e,n)=>e==="__v_raw"?t:Ut(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return it(s)&&!it(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function ny(t){return Ti(t)?t:new Proxy(t,C1)}function O1(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=N1(t,n);return e}class P1{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return c1(ke(this._object),this._key)}}function N1(t,e,n){const i=t[e];return it(i)?i:new P1(t,e,n)}class D1{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=no-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Bg(this,!0),!0}get value(){const e=this.dep.track();return jg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function L1(t,e,n=!1){let i,s;return Se(t)?i=t:(i=t.get,s=t.set),new D1(i,s,n)}const aa={},Ma=new WeakMap;let ts;function M1(t,e=!1,n=ts){if(n){let i=Ma.get(n);i||Ma.set(n,i=[]),i.push(t)}}function k1(t,e,n=Ge){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:l,call:c}=n,u=F=>s?F:en(F)||s===!1||s===0?qn(F,1):qn(F);let f,p,m,I,R=!1,L=!1;if(it(t)?(p=()=>t.value,R=en(t)):Ti(t)?(p=()=>u(t),R=!0):le(t)?(L=!0,R=t.some(F=>Ti(F)||en(F)),p=()=>t.map(F=>{if(it(F))return F.value;if(Ti(F))return u(F);if(Se(F))return c?c(F,2):F()})):Se(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Bi();try{m()}finally{zi()}}const F=ts;ts=f;try{return c?c(t,3,[I]):t(I)}finally{ts=F}}:p=In,e&&s){const F=p,j=s===!0?1/0:s;p=()=>qn(F(),j)}const D=Fg(),C=()=>{f.stop(),D&&D.active&&ld(D.effects,f)};if(r&&e){const F=e;e=(...j)=>{F(...j),C()}}let O=L?new Array(t.length).fill(aa):aa;const x=F=>{if(!(!(f.flags&1)||!f.dirty&&!F))if(e){const j=f.run();if(s||R||(L?j.some((V,b)=>vi(V,O[b])):vi(j,O))){m&&m();const V=ts;ts=f;try{const b=[j,O===aa?void 0:L&&O[0]===aa?[]:O,I];c?c(e,3,b):e(...b),O=j}finally{ts=V}}}else f.run()};return l&&l(x),f=new Ug(p),f.scheduler=o?()=>o(x,!1):x,I=F=>M1(F,!1,f),m=f.onStop=()=>{const F=Ma.get(f);if(F){if(c)c(F,4);else for(const j of F)j();Ma.delete(f)}},e?i?x(!0):O=f.run():o?o(x.bind(null,!0),!0):f.run(),C.pause=f.pause.bind(f),C.resume=f.resume.bind(f),C.stop=C,C}function qn(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,it(t))qn(t.value,e,n);else if(le(t))for(let i=0;i<t.length;i++)qn(t[i],e,n);else if(ar(t)||zs(t))t.forEach(i=>{qn(i,e,n)});else if(Ng(t)){for(const i in t)qn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&qn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oo(t,e,n,i){try{return i?t(...i):t()}catch(s){pl(s,e,n)}}function on(t,e,n,i){if(Se(t)){const s=Oo(t,e,n,i);return s&&Og(s)&&s.catch(r=>{pl(r,e,n)}),s}if(le(t)){const s=[];for(let r=0;r<t.length;r++)s.push(on(t[r],e,n,i));return s}}function pl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ge;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(r){Bi(),Oo(r,null,10,[t,c,u]),zi();return}}x1(t,n,s,i,o)}function x1(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const kt=[];let fn=-1;const Gs=[];let fi=null,Ls=0;const iy=Promise.resolve();let ka=null;function ml(t){const e=ka||iy;return t?e.then(this?t.bind(this):t):e}function V1(t){let e=fn+1,n=kt.length;for(;e<n;){const i=e+n>>>1,s=kt[i],r=so(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Id(t){if(!(t.flags&1)){const e=so(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=so(n)?kt.push(t):kt.splice(V1(e),0,t),t.flags|=1,sy()}}function sy(){ka||(ka=iy.then(oy))}function F1(t){le(t)?Gs.push(...t):fi&&t.id===-1?fi.splice(Ls+1,0,t):t.flags&1||(Gs.push(t),t.flags|=1),sy()}function Ph(t,e,n=fn+1){for(;n<kt.length;n++){const i=kt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;kt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ry(t){if(Gs.length){const e=[...new Set(Gs)].sort((n,i)=>so(n)-so(i));if(Gs.length=0,fi){fi.push(...e);return}for(fi=e,Ls=0;Ls<fi.length;Ls++){const n=fi[Ls];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fi=null,Ls=0}}const so=t=>t.id==null?t.flags&2?-1:1/0:t.id;function oy(t){try{for(fn=0;fn<kt.length;fn++){const e=kt[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Oo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<kt.length;fn++){const e=kt[fn];e&&(e.flags&=-2)}fn=-1,kt.length=0,ry(),ka=null,(kt.length||Gs.length)&&oy()}}let xt=null,ay=null;function xa(t){const e=xt;return xt=t,ay=t&&t.type.__scopeId||null,e}function $n(t,e=xt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Bh(-1);const r=xa(e);let o;try{o=t(...s)}finally{xa(r),i._d&&Bh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ot(t,e){if(xt===null)return t;const n=El(xt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,l,c=Ge]=e[s];r&&(Se(r)&&(r={mounted:r,updated:r}),r.deep&&qn(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Xi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let c=l.dir[i];c&&(Bi(),on(c,n,8,[t.el,l,t,e]),zi())}}const U1=Symbol("_vte"),ly=t=>t.__isTeleport,hi=Symbol("_leaveCb"),la=Symbol("_enterCb");function q1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Po(()=>{t.isMounted=!0}),Ad(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],cy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},uy=t=>{const e=t.subTree;return e.component?uy(e.component):e},B1={name:"BaseTransition",props:cy,setup(t,{slots:e}){const n=Fw(),i=q1();return()=>{const s=e.default&&hy(e.default(),!0);if(!s||!s.length)return;const r=dy(s),o=ke(t),{mode:l}=o;if(i.isLeaving)return wc(r);const c=Nh(r);if(!c)return wc(r);let u=ou(c,o,i,n,p=>u=p);c.type!==qt&&ro(c,u);let f=n.subTree&&Nh(n.subTree);if(f&&f.type!==qt&&!ss(c,f)&&uy(n).type!==qt){let p=ou(f,o,i,n);if(ro(f,p),l==="out-in"&&c.type!==qt)return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},wc(r);l==="in-out"&&c.type!==qt?p.delayLeave=(m,I,R)=>{const L=fy(i,f);L[String(f.key)]=f,m[hi]=()=>{I(),m[hi]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{R(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return r}}};function dy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==qt){e=n;break}}return e}const z1=B1;function fy(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ou(t,e,n,i,s){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:I,onAfterLeave:R,onLeaveCancelled:L,onBeforeAppear:D,onAppear:C,onAfterAppear:O,onAppearCancelled:x}=e,F=String(t.key),j=fy(n,t),V=(g,E)=>{g&&on(g,i,9,E)},b=(g,E)=>{const w=E[1];V(g,E),le(g)?g.every(v=>v.length<=1)&&w():g.length<=1&&w()},y={mode:o,persisted:l,beforeEnter(g){let E=c;if(!n.isMounted)if(r)E=D||c;else return;g[hi]&&g[hi](!0);const w=j[F];w&&ss(t,w)&&w.el[hi]&&w.el[hi](),V(E,[g])},enter(g){let E=u,w=f,v=p;if(!n.isMounted)if(r)E=C||u,w=O||f,v=x||p;else return;let A=!1;const be=g[la]=Fe=>{A||(A=!0,Fe?V(v,[g]):V(w,[g]),y.delayedLeave&&y.delayedLeave(),g[la]=void 0)};E?b(E,[g,be]):be()},leave(g,E){const w=String(t.key);if(g[la]&&g[la](!0),n.isUnmounting)return E();V(m,[g]);let v=!1;const A=g[hi]=be=>{v||(v=!0,E(),be?V(L,[g]):V(R,[g]),g[hi]=void 0,j[w]===t&&delete j[w])};j[w]=t,I?b(I,[g,A]):A()},clone(g){const E=ou(g,e,n,i,s);return s&&s(E),E}};return y}function wc(t){if(gl(t))return t=Di(t),t.children=null,t}function Nh(t){if(!gl(t))return ly(t.type)&&t.children?dy(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Se(n.default))return n.default()}}function ro(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ro(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hy(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===nt?(o.patchFlag&128&&s++,i=i.concat(hy(o.children,e,l))):(e||o.type!==qt)&&i.push(l!=null?Di(o,{key:l}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Ed(t,e){return Se(t)?ht({name:t.name},e,{setup:t}):t}function py(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Va(t,e,n,i,s=!1){if(le(t)){t.forEach((R,L)=>Va(R,e&&(le(e)?e[L]:e),n,i,s));return}if(Br(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Va(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?El(i.component):i.el,o=s?null:r,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ge?l.refs={}:l.refs,p=l.setupState,m=ke(p),I=p===Ge?()=>!1:R=>qe(m,R);if(u!=null&&u!==c&&(st(u)?(f[u]=null,I(u)&&(p[u]=null)):it(u)&&(u.value=null)),Se(c))Oo(c,l,12,[o,f]);else{const R=st(c),L=it(c);if(R||L){const D=()=>{if(t.f){const C=R?I(c)?p[c]:f[c]:c.value;s?le(C)&&ld(C,r):le(C)?C.includes(r)||C.push(r):R?(f[c]=[r],I(c)&&(p[c]=f[c])):(c.value=[r],t.k&&(f[t.k]=c.value))}else R?(f[c]=o,I(c)&&(p[c]=o)):L&&(c.value=o,t.k&&(f[t.k]=o))};o?(D.id=-1,Ht(D,n)):D()}}}fl().requestIdleCallback;fl().cancelIdleCallback;const Br=t=>!!t.type.__asyncLoader,gl=t=>t.type.__isKeepAlive;function G1(t,e){my(t,"a",e)}function j1(t,e){my(t,"da",e)}function my(t,e,n=ft){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(yl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)gl(s.parent.vnode)&&H1(i,e,n,s),s=s.parent}}function H1(t,e,n,i){const s=yl(e,t,i,!0);wd(()=>{ld(i[e],s)},n)}function yl(t,e,n=ft,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Bi();const l=No(n),c=on(e,n,t,o);return l(),zi(),c});return i?s.unshift(r):s.push(r),r}}const ti=t=>(e,n=ft)=>{(!ao||t==="sp")&&yl(t,(...i)=>e(...i),n)},$1=ti("bm"),Po=ti("m"),W1=ti("bu"),K1=ti("u"),Ad=ti("bum"),wd=ti("um"),Q1=ti("sp"),Y1=ti("rtg"),X1=ti("rtc");function J1(t,e=ft){yl("ec",t,e)}const Z1="components";function En(t,e){return tw(Z1,t,!0,e)||t}const ew=Symbol.for("v-ndc");function tw(t,e,n=!0,i=!1){const s=xt||ft;if(s){const r=s.type;{const l=Gw(r,!1);if(l&&(l===e||l===nn(e)||l===dl(nn(e))))return r}const o=Dh(s[t]||r[t],e)||Dh(s.appContext[t],e);return!o&&i?r:o}}function Dh(t,e){return t&&(t[e]||t[nn(e)]||t[dl(nn(e))])}function An(t,e,n,i){let s;const r=n,o=le(t);if(o||st(t)){const l=o&&Ti(t);let c=!1;l&&(c=!en(t),t=hl(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(c?Ct(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,r)}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,r)}}else s=[];return s}const au=t=>t?xy(t)?El(t):au(t.parent):null,zr=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>au(t.parent),$root:t=>au(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yy(t),$forceUpdate:t=>t.f||(t.f=()=>{Id(t.update)}),$nextTick:t=>t.n||(t.n=ml.bind(t.proxy)),$watch:t=>vw.bind(t)}),vc=(t,e)=>t!==Ge&&!t.__isScriptSetup&&qe(t,e),nw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(vc(i,e))return o[e]=1,i[e];if(s!==Ge&&qe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&qe(u,e))return o[e]=3,r[e];if(n!==Ge&&qe(n,e))return o[e]=4,n[e];lu&&(o[e]=0)}}const f=zr[e];let p,m;if(f)return e==="$attrs"&&Rt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ge&&qe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,qe(m,e))return m[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return vc(s,e)?(s[e]=n,!0):i!==Ge&&qe(i,e)?(i[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==Ge&&qe(t,o)||vc(e,o)||(l=r[0])&&qe(l,o)||qe(i,o)||qe(zr,o)||qe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Lh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lu=!0;function iw(t){const e=yy(t),n=t.proxy,i=t.ctx;lu=!1,e.beforeCreate&&Mh(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:I,updated:R,activated:L,deactivated:D,beforeDestroy:C,beforeUnmount:O,destroyed:x,unmounted:F,render:j,renderTracked:V,renderTriggered:b,errorCaptured:y,serverPrefetch:g,expose:E,inheritAttrs:w,components:v,directives:A,filters:be}=e;if(u&&sw(u,i,null),o)for(const ne in o){const Ee=o[ne];Se(Ee)&&(i[ne]=Ee.bind(n))}if(s){const ne=s.call(n,n);je(ne)&&(t.data=Ni(ne))}if(lu=!0,r)for(const ne in r){const Ee=r[ne],Q=Se(Ee)?Ee.bind(n,n):Se(Ee.get)?Ee.get.bind(n,n):In,K=!Se(Ee)&&Se(Ee.set)?Ee.set.bind(n):In,pe=Qe({get:Q,set:K});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Ae=>pe.value=Ae})}if(l)for(const ne in l)gy(l[ne],i,n,ne);if(c){const ne=Se(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Ee=>{_a(Ee,ne[Ee])})}f&&Mh(f,t,"c");function Oe(ne,Ee){le(Ee)?Ee.forEach(Q=>ne(Q.bind(n))):Ee&&ne(Ee.bind(n))}if(Oe($1,p),Oe(Po,m),Oe(W1,I),Oe(K1,R),Oe(G1,L),Oe(j1,D),Oe(J1,y),Oe(X1,V),Oe(Y1,b),Oe(Ad,O),Oe(wd,F),Oe(Q1,g),le(E))if(E.length){const ne=t.exposed||(t.exposed={});E.forEach(Ee=>{Object.defineProperty(ne,Ee,{get:()=>n[Ee],set:Q=>n[Ee]=Q})})}else t.exposed||(t.exposed={});j&&t.render===In&&(t.render=j),w!=null&&(t.inheritAttrs=w),v&&(t.components=v),A&&(t.directives=A),g&&py(t)}function sw(t,e,n=In){le(t)&&(t=cu(t));for(const i in t){const s=t[i];let r;je(s)?"default"in s?r=wn(s.from||i,s.default,!0):r=wn(s.from||i):r=wn(s),it(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Mh(t,e,n){on(le(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function gy(t,e,n,i){let s=i.includes(".")?Ny(n,i):()=>n[i];if(st(t)){const r=e[t];Se(r)&&bi(s,r)}else if(Se(t))bi(s,t.bind(n));else if(je(t))if(le(t))t.forEach(r=>gy(r,e,n,i));else{const r=Se(t.handler)?t.handler.bind(n):e[t.handler];Se(r)&&bi(s,r,t)}}function yy(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(u=>Fa(c,u,o,!0)),Fa(c,e,o)),je(e)&&r.set(e,c),c}function Fa(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Fa(t,r,n,!0),s&&s.forEach(o=>Fa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=rw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const rw={data:kh,props:xh,emits:xh,methods:Nr,computed:Nr,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Nr,directives:Nr,watch:aw,provide:kh,inject:ow};function kh(t,e){return e?t?function(){return ht(Se(t)?t.call(this,this):t,Se(e)?e.call(this,this):e)}:e:t}function ow(t,e){return Nr(cu(t),cu(e))}function cu(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Nr(t,e){return t?ht(Object.create(null),t,e):e}function xh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:ht(Object.create(null),Lh(t),Lh(e??{})):e}function aw(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const i in e)n[i]=Lt(t[i],e[i]);return n}function _y(){return{app:null,config:{isNativeTag:WA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lw=0;function cw(t,e){return function(i,s=null){Se(i)||(i=ht({},i)),s!=null&&!je(s)&&(s=null);const r=_y(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:lw++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Hw,get config(){return r.config},set config(f){},use(f,...p){return o.has(f)||(f&&Se(f.install)?(o.add(f),f.install(u,...p)):Se(f)&&(o.add(f),f(u,...p))),u},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),u},component(f,p){return p?(r.components[f]=p,u):r.components[f]},directive(f,p){return p?(r.directives[f]=p,u):r.directives[f]},mount(f,p,m){if(!c){const I=u._ceVNode||_e(i,s);return I.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(I,f,m),c=!0,u._container=f,f.__vue_app__=u,El(I.component)}},onUnmount(f){l.push(f)},unmount(){c&&(on(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return r.provides[f]=p,u},runWithContext(f){const p=cs;cs=u;try{return f()}finally{cs=p}}};return u}}let cs=null;function _a(t,e){if(ft){let n=ft.provides;const i=ft.parent&&ft.parent.provides;i===n&&(n=ft.provides=Object.create(i)),n[t]=e}}function wn(t,e,n=!1){const i=ft||xt;if(i||cs){const s=cs?cs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Se(e)?e.call(i&&i.proxy):e}}function uw(){return!!(ft||xt||cs)}const Iy={},Ey=()=>Object.create(Iy),Ay=t=>Object.getPrototypeOf(t)===Iy;function dw(t,e,n,i=!1){const s={},r=Ey();t.propsDefaults=Object.create(null),wy(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Zg(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function fw(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(_l(t.emitsOptions,m))continue;const I=e[m];if(c)if(qe(r,m))I!==r[m]&&(r[m]=I,u=!0);else{const R=nn(m);s[R]=uu(c,l,R,I,t,!1)}else I!==r[m]&&(r[m]=I,u=!0)}}}else{wy(t,e,s,r)&&(u=!0);let f;for(const p in l)(!e||!qe(e,p)&&((f=Es(p))===p||!qe(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=uu(c,l,p,void 0,t,!0)):delete s[p]);if(r!==l)for(const p in r)(!e||!qe(e,p))&&(delete r[p],u=!0)}u&&Un(t.attrs,"set","")}function wy(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Fr(c))continue;const u=e[c];let f;s&&qe(s,f=nn(c))?!r||!r.includes(f)?n[f]=u:(l||(l={}))[f]=u:_l(t.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(r){const c=ke(n),u=l||Ge;for(let f=0;f<r.length;f++){const p=r[f];n[p]=uu(s,c,p,u[p],t,!qe(u,p))}}return o}function uu(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=qe(o,"default");if(l&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Se(c)){const{propsDefaults:u}=s;if(n in u)i=u[n];else{const f=No(s);i=u[n]=c.call(null,e),f()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===Es(n))&&(i=!0))}return i}const hw=new WeakMap;function vy(t,e,n=!1){const i=n?hw:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let c=!1;if(!Se(t)){const f=p=>{c=!0;const[m,I]=vy(p,e,!0);ht(o,m),I&&l.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!c)return je(t)&&i.set(t,Bs),Bs;if(le(r))for(let f=0;f<r.length;f++){const p=nn(r[f]);Vh(p)&&(o[p]=Ge)}else if(r)for(const f in r){const p=nn(f);if(Vh(p)){const m=r[f],I=o[p]=le(m)||Se(m)?{type:m}:ht({},m),R=I.type;let L=!1,D=!0;if(le(R))for(let C=0;C<R.length;++C){const O=R[C],x=Se(O)&&O.name;if(x==="Boolean"){L=!0;break}else x==="String"&&(D=!1)}else L=Se(R)&&R.name==="Boolean";I[0]=L,I[1]=D,(L||qe(I,"default"))&&l.push(p)}}const u=[o,l];return je(t)&&i.set(t,u),u}function Vh(t){return t[0]!=="$"&&!Fr(t)}const Ty=t=>t[0]==="_"||t==="$stable",vd=t=>le(t)?t.map(pn):[pn(t)],pw=(t,e,n)=>{if(e._n)return e;const i=$n((...s)=>vd(e(...s)),n);return i._c=!1,i},by=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Ty(s))continue;const r=t[s];if(Se(r))e[s]=pw(s,r,i);else if(r!=null){const o=vd(r);e[s]=()=>o}}},Sy=(t,e)=>{const n=vd(e);t.slots.default=()=>n},Ry=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},mw=(t,e,n)=>{const i=t.slots=Ey();if(t.vnode.shapeFlag&32){const s=e._;s?(Ry(i,e,n),n&&Dg(i,"_",s,!0)):by(e,i)}else e&&Sy(t,e)},gw=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ge;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Ry(s,e,n):(r=!e.$stable,by(e,s)),o=e}else e&&(Sy(t,e),o={default:1});if(r)for(const l in s)!Ty(l)&&o[l]==null&&delete s[l]},Ht=Pw;function yw(t){return _w(t)}function _w(t,e){const n=fl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:I=In,insertStaticContent:R}=t,L=(T,S,P,q=null,G=null,B=null,Z=void 0,X=null,Y=!!S.dynamicChildren)=>{if(T===S)return;T&&!ss(T,S)&&(q=U(T),Ae(T,G,B,!0),T=null),S.patchFlag===-2&&(Y=!1,S.dynamicChildren=null);const{type:H,ref:de,shapeFlag:te}=S;switch(H){case Il:D(T,S,P,q);break;case qt:C(T,S,P,q);break;case bc:T==null&&O(S,P,q,Z);break;case nt:v(T,S,P,q,G,B,Z,X,Y);break;default:te&1?j(T,S,P,q,G,B,Z,X,Y):te&6?A(T,S,P,q,G,B,Z,X,Y):(te&64||te&128)&&H.process(T,S,P,q,G,B,Z,X,Y,re)}de!=null&&G&&Va(de,T&&T.ref,B,S||T,!S)},D=(T,S,P,q)=>{if(T==null)i(S.el=l(S.children),P,q);else{const G=S.el=T.el;S.children!==T.children&&u(G,S.children)}},C=(T,S,P,q)=>{T==null?i(S.el=c(S.children||""),P,q):S.el=T.el},O=(T,S,P,q)=>{[T.el,T.anchor]=R(T.children,S,P,q,T.el,T.anchor)},x=({el:T,anchor:S},P,q)=>{let G;for(;T&&T!==S;)G=m(T),i(T,P,q),T=G;i(S,P,q)},F=({el:T,anchor:S})=>{let P;for(;T&&T!==S;)P=m(T),s(T),T=P;s(S)},j=(T,S,P,q,G,B,Z,X,Y)=>{S.type==="svg"?Z="svg":S.type==="math"&&(Z="mathml"),T==null?V(S,P,q,G,B,Z,X,Y):g(T,S,G,B,Z,X,Y)},V=(T,S,P,q,G,B,Z,X)=>{let Y,H;const{props:de,shapeFlag:te,transition:ae,dirs:me}=T;if(Y=T.el=o(T.type,B,de&&de.is,de),te&8?f(Y,T.children):te&16&&y(T.children,Y,null,q,G,Tc(T,B),Z,X),me&&Xi(T,null,q,"created"),b(Y,T,T.scopeId,Z,q),de){for(const Ce in de)Ce!=="value"&&!Fr(Ce)&&r(Y,Ce,null,de[Ce],B,q);"value"in de&&r(Y,"value",null,de.value,B),(H=de.onVnodeBeforeMount)&&dn(H,q,T)}me&&Xi(T,null,q,"beforeMount");const fe=Iw(G,ae);fe&&ae.beforeEnter(Y),i(Y,S,P),((H=de&&de.onVnodeMounted)||fe||me)&&Ht(()=>{H&&dn(H,q,T),fe&&ae.enter(Y),me&&Xi(T,null,q,"mounted")},G)},b=(T,S,P,q,G)=>{if(P&&I(T,P),q)for(let B=0;B<q.length;B++)I(T,q[B]);if(G){let B=G.subTree;if(S===B||Ly(B.type)&&(B.ssContent===S||B.ssFallback===S)){const Z=G.vnode;b(T,Z,Z.scopeId,Z.slotScopeIds,G.parent)}}},y=(T,S,P,q,G,B,Z,X,Y=0)=>{for(let H=Y;H<T.length;H++){const de=T[H]=X?pi(T[H]):pn(T[H]);L(null,de,S,P,q,G,B,Z,X)}},g=(T,S,P,q,G,B,Z)=>{const X=S.el=T.el;let{patchFlag:Y,dynamicChildren:H,dirs:de}=S;Y|=T.patchFlag&16;const te=T.props||Ge,ae=S.props||Ge;let me;if(P&&Ji(P,!1),(me=ae.onVnodeBeforeUpdate)&&dn(me,P,S,T),de&&Xi(S,T,P,"beforeUpdate"),P&&Ji(P,!0),(te.innerHTML&&ae.innerHTML==null||te.textContent&&ae.textContent==null)&&f(X,""),H?E(T.dynamicChildren,H,X,P,q,Tc(S,G),B):Z||Ee(T,S,X,null,P,q,Tc(S,G),B,!1),Y>0){if(Y&16)w(X,te,ae,P,G);else if(Y&2&&te.class!==ae.class&&r(X,"class",null,ae.class,G),Y&4&&r(X,"style",te.style,ae.style,G),Y&8){const fe=S.dynamicProps;for(let Ce=0;Ce<fe.length;Ce++){const Le=fe[Ce],At=te[Le],pt=ae[Le];(pt!==At||Le==="value")&&r(X,Le,At,pt,G,P)}}Y&1&&T.children!==S.children&&f(X,S.children)}else!Z&&H==null&&w(X,te,ae,P,G);((me=ae.onVnodeUpdated)||de)&&Ht(()=>{me&&dn(me,P,S,T),de&&Xi(S,T,P,"updated")},q)},E=(T,S,P,q,G,B,Z)=>{for(let X=0;X<S.length;X++){const Y=T[X],H=S[X],de=Y.el&&(Y.type===nt||!ss(Y,H)||Y.shapeFlag&70)?p(Y.el):P;L(Y,H,de,null,q,G,B,Z,!0)}},w=(T,S,P,q,G)=>{if(S!==P){if(S!==Ge)for(const B in S)!Fr(B)&&!(B in P)&&r(T,B,S[B],null,G,q);for(const B in P){if(Fr(B))continue;const Z=P[B],X=S[B];Z!==X&&B!=="value"&&r(T,B,X,Z,G,q)}"value"in P&&r(T,"value",S.value,P.value,G)}},v=(T,S,P,q,G,B,Z,X,Y)=>{const H=S.el=T?T.el:l(""),de=S.anchor=T?T.anchor:l("");let{patchFlag:te,dynamicChildren:ae,slotScopeIds:me}=S;me&&(X=X?X.concat(me):me),T==null?(i(H,P,q),i(de,P,q),y(S.children||[],P,de,G,B,Z,X,Y)):te>0&&te&64&&ae&&T.dynamicChildren?(E(T.dynamicChildren,ae,P,G,B,Z,X),(S.key!=null||G&&S===G.subTree)&&Cy(T,S,!0)):Ee(T,S,P,de,G,B,Z,X,Y)},A=(T,S,P,q,G,B,Z,X,Y)=>{S.slotScopeIds=X,T==null?S.shapeFlag&512?G.ctx.activate(S,P,q,Z,Y):be(S,P,q,G,B,Z,Y):Fe(T,S,Y)},be=(T,S,P,q,G,B,Z)=>{const X=T.component=Vw(T,q,G);if(gl(T)&&(X.ctx.renderer=re),Uw(X,!1,Z),X.asyncDep){if(G&&G.registerDep(X,Oe,Z),!T.el){const Y=X.subTree=_e(qt);C(null,Y,S,P)}}else Oe(X,T,S,P,G,B,Z)},Fe=(T,S,P)=>{const q=S.component=T.component;if(Cw(T,S,P))if(q.asyncDep&&!q.asyncResolved){ne(q,S,P);return}else q.next=S,q.update();else S.el=T.el,q.vnode=S},Oe=(T,S,P,q,G,B,Z)=>{const X=()=>{if(T.isMounted){let{next:te,bu:ae,u:me,parent:fe,vnode:Ce}=T;{const wt=Oy(T);if(wt){te&&(te.el=Ce.el,ne(T,te,Z)),wt.asyncDep.then(()=>{T.isUnmounted||X()});return}}let Le=te,At;Ji(T,!1),te?(te.el=Ce.el,ne(T,te,Z)):te=Ce,ae&&ya(ae),(At=te.props&&te.props.onVnodeBeforeUpdate)&&dn(At,fe,te,Ce),Ji(T,!0);const pt=Uh(T),Xt=T.subTree;T.subTree=pt,L(Xt,pt,p(Xt.el),U(Xt),T,G,B),te.el=pt.el,Le===null&&Ow(T,pt.el),me&&Ht(me,G),(At=te.props&&te.props.onVnodeUpdated)&&Ht(()=>dn(At,fe,te,Ce),G)}else{let te;const{el:ae,props:me}=S,{bm:fe,m:Ce,parent:Le,root:At,type:pt}=T,Xt=Br(S);Ji(T,!1),fe&&ya(fe),!Xt&&(te=me&&me.onVnodeBeforeMount)&&dn(te,Le,S),Ji(T,!0);{At.ce&&At.ce._injectChildStyle(pt);const wt=T.subTree=Uh(T);L(null,wt,P,q,T,G,B),S.el=wt.el}if(Ce&&Ht(Ce,G),!Xt&&(te=me&&me.onVnodeMounted)){const wt=S;Ht(()=>dn(te,Le,wt),G)}(S.shapeFlag&256||Le&&Br(Le.vnode)&&Le.vnode.shapeFlag&256)&&T.a&&Ht(T.a,G),T.isMounted=!0,S=P=q=null}};T.scope.on();const Y=T.effect=new Ug(X);T.scope.off();const H=T.update=Y.run.bind(Y),de=T.job=Y.runIfDirty.bind(Y);de.i=T,de.id=T.uid,Y.scheduler=()=>Id(de),Ji(T,!0),H()},ne=(T,S,P)=>{S.component=T;const q=T.vnode.props;T.vnode=S,T.next=null,fw(T,S.props,q,P),gw(T,S.children,P),Bi(),Ph(T),zi()},Ee=(T,S,P,q,G,B,Z,X,Y=!1)=>{const H=T&&T.children,de=T?T.shapeFlag:0,te=S.children,{patchFlag:ae,shapeFlag:me}=S;if(ae>0){if(ae&128){K(H,te,P,q,G,B,Z,X,Y);return}else if(ae&256){Q(H,te,P,q,G,B,Z,X,Y);return}}me&8?(de&16&&Et(H,G,B),te!==H&&f(P,te)):de&16?me&16?K(H,te,P,q,G,B,Z,X,Y):Et(H,G,B,!0):(de&8&&f(P,""),me&16&&y(te,P,q,G,B,Z,X,Y))},Q=(T,S,P,q,G,B,Z,X,Y)=>{T=T||Bs,S=S||Bs;const H=T.length,de=S.length,te=Math.min(H,de);let ae;for(ae=0;ae<te;ae++){const me=S[ae]=Y?pi(S[ae]):pn(S[ae]);L(T[ae],me,P,null,G,B,Z,X,Y)}H>de?Et(T,G,B,!0,!1,te):y(S,P,q,G,B,Z,X,Y,te)},K=(T,S,P,q,G,B,Z,X,Y)=>{let H=0;const de=S.length;let te=T.length-1,ae=de-1;for(;H<=te&&H<=ae;){const me=T[H],fe=S[H]=Y?pi(S[H]):pn(S[H]);if(ss(me,fe))L(me,fe,P,null,G,B,Z,X,Y);else break;H++}for(;H<=te&&H<=ae;){const me=T[te],fe=S[ae]=Y?pi(S[ae]):pn(S[ae]);if(ss(me,fe))L(me,fe,P,null,G,B,Z,X,Y);else break;te--,ae--}if(H>te){if(H<=ae){const me=ae+1,fe=me<de?S[me].el:q;for(;H<=ae;)L(null,S[H]=Y?pi(S[H]):pn(S[H]),P,fe,G,B,Z,X,Y),H++}}else if(H>ae)for(;H<=te;)Ae(T[H],G,B,!0),H++;else{const me=H,fe=H,Ce=new Map;for(H=fe;H<=ae;H++){const mt=S[H]=Y?pi(S[H]):pn(S[H]);mt.key!=null&&Ce.set(mt.key,H)}let Le,At=0;const pt=ae-fe+1;let Xt=!1,wt=0;const ii=new Array(pt);for(H=0;H<pt;H++)ii[H]=0;for(H=me;H<=te;H++){const mt=T[H];if(At>=pt){Ae(mt,G,B,!0);continue}let Jt;if(mt.key!=null)Jt=Ce.get(mt.key);else for(Le=fe;Le<=ae;Le++)if(ii[Le-fe]===0&&ss(mt,S[Le])){Jt=Le;break}Jt===void 0?Ae(mt,G,B,!0):(ii[Jt-fe]=H+1,Jt>=wt?wt=Jt:Xt=!0,L(mt,S[Jt],P,null,G,B,Z,X,Y),At++)}const mr=Xt?Ew(ii):Bs;for(Le=mr.length-1,H=pt-1;H>=0;H--){const mt=fe+H,Jt=S[mt],Go=mt+1<de?S[mt+1].el:q;ii[H]===0?L(null,Jt,P,Go,G,B,Z,X,Y):Xt&&(Le<0||H!==mr[Le]?pe(Jt,P,Go,2):Le--)}}},pe=(T,S,P,q,G=null)=>{const{el:B,type:Z,transition:X,children:Y,shapeFlag:H}=T;if(H&6){pe(T.component.subTree,S,P,q);return}if(H&128){T.suspense.move(S,P,q);return}if(H&64){Z.move(T,S,P,re);return}if(Z===nt){i(B,S,P);for(let te=0;te<Y.length;te++)pe(Y[te],S,P,q);i(T.anchor,S,P);return}if(Z===bc){x(T,S,P);return}if(q!==2&&H&1&&X)if(q===0)X.beforeEnter(B),i(B,S,P),Ht(()=>X.enter(B),G);else{const{leave:te,delayLeave:ae,afterLeave:me}=X,fe=()=>i(B,S,P),Ce=()=>{te(B,()=>{fe(),me&&me()})};ae?ae(B,fe,Ce):Ce()}else i(B,S,P)},Ae=(T,S,P,q=!1,G=!1)=>{const{type:B,props:Z,ref:X,children:Y,dynamicChildren:H,shapeFlag:de,patchFlag:te,dirs:ae,cacheIndex:me}=T;if(te===-2&&(G=!1),X!=null&&Va(X,null,P,T,!0),me!=null&&(S.renderCache[me]=void 0),de&256){S.ctx.deactivate(T);return}const fe=de&1&&ae,Ce=!Br(T);let Le;if(Ce&&(Le=Z&&Z.onVnodeBeforeUnmount)&&dn(Le,S,T),de&6)Gt(T.component,P,q);else{if(de&128){T.suspense.unmount(P,q);return}fe&&Xi(T,null,S,"beforeUnmount"),de&64?T.type.remove(T,S,P,re,q):H&&!H.hasOnce&&(B!==nt||te>0&&te&64)?Et(H,S,P,!1,!0):(B===nt&&te&384||!G&&de&16)&&Et(Y,S,P),q&&we(T)}(Ce&&(Le=Z&&Z.onVnodeUnmounted)||fe)&&Ht(()=>{Le&&dn(Le,S,T),fe&&Xi(T,null,S,"unmounted")},P)},we=T=>{const{type:S,el:P,anchor:q,transition:G}=T;if(S===nt){He(P,q);return}if(S===bc){F(T);return}const B=()=>{s(P),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(T.shapeFlag&1&&G&&!G.persisted){const{leave:Z,delayLeave:X}=G,Y=()=>Z(P,B);X?X(T.el,B,Y):Y()}else B()},He=(T,S)=>{let P;for(;T!==S;)P=m(T),s(T),T=P;s(S)},Gt=(T,S,P)=>{const{bum:q,scope:G,job:B,subTree:Z,um:X,m:Y,a:H}=T;Fh(Y),Fh(H),q&&ya(q),G.stop(),B&&(B.flags|=8,Ae(Z,T,S,P)),X&&Ht(X,S),Ht(()=>{T.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},Et=(T,S,P,q=!1,G=!1,B=0)=>{for(let Z=B;Z<T.length;Z++)Ae(T[Z],S,P,q,G)},U=T=>{if(T.shapeFlag&6)return U(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const S=m(T.anchor||T.el),P=S&&S[U1];return P?m(P):S};let ie=!1;const ee=(T,S,P)=>{T==null?S._vnode&&Ae(S._vnode,null,null,!0):L(S._vnode||null,T,S,null,null,null,P),S._vnode=T,ie||(ie=!0,Ph(),ry(),ie=!1)},re={p:L,um:Ae,m:pe,r:we,mt:be,mc:y,pc:Ee,pbc:E,n:U,o:t};return{render:ee,hydrate:void 0,createApp:cw(ee)}}function Tc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ji({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Iw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cy(t,e,n=!1){const i=t.children,s=e.children;if(le(i)&&le(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=pi(s[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Cy(o,l)),l.type===Il&&(l.el=o.el)}}function Ew(t){const e=t.slice(),n=[0];let i,s,r,o,l;const c=t.length;for(i=0;i<c;i++){const u=t[i];if(u!==0){if(s=n[n.length-1],t[s]<u){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Oy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Oy(e)}function Fh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Aw=Symbol.for("v-scx"),ww=()=>wn(Aw);function bi(t,e,n){return Py(t,e,n)}function Py(t,e,n=Ge){const{immediate:i,deep:s,flush:r,once:o}=n,l=ht({},n),c=e&&i||!e&&r!=="post";let u;if(ao){if(r==="sync"){const I=ww();u=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=In,I.resume=In,I.pause=In,I}}const f=ft;l.call=(I,R,L)=>on(I,f,R,L);let p=!1;r==="post"?l.scheduler=I=>{Ht(I,f&&f.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(I,R)=>{R?I():Id(I)}),l.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,f&&(I.id=f.uid,I.i=f))};const m=k1(t,e,l);return ao&&(u?u.push(m):c&&m()),m}function vw(t,e,n){const i=this.proxy,s=st(t)?t.includes(".")?Ny(i,t):()=>i[t]:t.bind(i,i);let r;Se(e)?r=e:(r=e.handler,n=e);const o=No(this),l=Py(s,r.bind(i),n);return o(),l}function Ny(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Tw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${Es(e)}Modifiers`];function bw(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ge;let s=n;const r=e.startsWith("update:"),o=r&&Tw(i,e.slice(7));o&&(o.trim&&(s=n.map(f=>st(f)?f.trim():f)),o.number&&(s=n.map(Da)));let l,c=i[l=yc(e)]||i[l=yc(nn(e))];!c&&r&&(c=i[l=yc(Es(e))]),c&&on(c,t,6,s);const u=i[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,on(u,t,6,s)}}function Dy(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!Se(t)){const c=u=>{const f=Dy(u,e,!0);f&&(l=!0,ht(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(je(t)&&i.set(t,null),null):(le(r)?r.forEach(c=>o[c]=null):ht(o,r),je(t)&&i.set(t,o),o)}function _l(t,e){return!t||!cl(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,Es(e))||qe(t,e))}function Uh(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:I,ctx:R,inheritAttrs:L}=t,D=xa(t);let C,O;try{if(n.shapeFlag&4){const F=s||i,j=F;C=pn(u.call(j,F,f,p,I,m,R)),O=l}else{const F=e;C=pn(F.length>1?F(p,{attrs:l,slots:o,emit:c}):F(p,null)),O=e.props?l:Sw(l)}}catch(F){Gr.length=0,pl(F,t,1),C=_e(qt)}let x=C;if(O&&L!==!1){const F=Object.keys(O),{shapeFlag:j}=x;F.length&&j&7&&(r&&F.some(ad)&&(O=Rw(O,r)),x=Di(x,O,!1,!0))}return n.dirs&&(x=Di(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&ro(x,n.transition),C=x,xa(D),C}const Sw=t=>{let e;for(const n in t)(n==="class"||n==="style"||cl(n))&&((e||(e={}))[n]=t[n]);return e},Rw=(t,e)=>{const n={};for(const i in t)(!ad(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Cw(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?qh(i,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==i[m]&&!_l(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?qh(i,o,u):!0:!!o;return!1}function qh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!_l(n,r))return!0}return!1}function Ow({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ly=t=>t.__isSuspense;function Pw(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):F1(t)}const nt=Symbol.for("v-fgt"),Il=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),bc=Symbol.for("v-stc"),Gr=[];let $t=null;function ce(t=!1){Gr.push($t=t?null:[])}function Nw(){Gr.pop(),$t=Gr[Gr.length-1]||null}let oo=1;function Bh(t,e=!1){oo+=t,t<0&&$t&&e&&($t.hasOnce=!0)}function My(t){return t.dynamicChildren=oo>0?$t||Bs:null,Nw(),oo>0&&$t&&$t.push(t),t}function ve(t,e,n,i,s,r){return My(M(t,e,n,i,s,r,!0))}function ns(t,e,n,i,s){return My(_e(t,e,n,i,s,!0))}function Ua(t){return t?t.__v_isVNode===!0:!1}function ss(t,e){return t.type===e.type&&t.key===e.key}const ky=({key:t})=>t??null,Ia=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?st(t)||it(t)||Se(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,i=0,s=null,r=t===nt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ky(e),ref:e&&Ia(e),scopeId:ay,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xt};return l?(Td(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=st(n)?8:16),oo>0&&!o&&$t&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&$t.push(c),c}const _e=Dw;function Dw(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===ew)&&(t=qt),Ua(t)){const l=Di(t,e,!0);return n&&Td(l,n),oo>0&&!r&&$t&&(l.shapeFlag&6?$t[$t.indexOf(t)]=l:$t.push(l)),l.patchFlag=-2,l}if(jw(t)&&(t=t.__vccOpts),e){e=Lw(e);let{class:l,style:c}=e;l&&!st(l)&&(e.class=Pi(l)),je(c)&&(yd(c)&&!le(c)&&(c=ht({},c)),e.style=Ro(c))}const o=st(t)?1:Ly(t)?128:ly(t)?64:je(t)?4:Se(t)?2:0;return M(t,e,n,i,s,o,r,!0)}function Lw(t){return t?yd(t)||Ay(t)?ht({},t):t:null}function Di(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?Mw(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ky(u),ref:e&&e.ref?n&&r?le(r)?r.concat(Ia(e)):[r,Ia(e)]:Ia(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Di(t.ssContent),ssFallback:t.ssFallback&&Di(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&ro(f,c.clone(f)),f}function Ke(t=" ",e=0){return _e(Il,null,t,e)}function zn(t="",e=!1){return e?(ce(),ns(qt,null,t)):_e(qt,null,t)}function pn(t){return t==null||typeof t=="boolean"?_e(qt):le(t)?_e(nt,null,t.slice()):Ua(t)?pi(t):_e(Il,null,String(t))}function pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Di(t)}function Td(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Td(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ay(e)?e._ctx=xt:s===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Se(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),i&64?(n=16,e=[Ke(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mw(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Pi([e.class,i.class]));else if(s==="style")e.style=Ro([e.style,i.style]);else if(cl(s)){const r=e[s],o=i[s];o&&r!==o&&!(le(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function dn(t,e,n,i=null){on(t,e,7,[n,i])}const kw=_y();let xw=0;function Vw(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||kw,r={uid:xw++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vy(i,s),emitsOptions:Dy(i,s),emit:null,emitted:null,propsDefaults:Ge,inheritAttrs:i.inheritAttrs,ctx:Ge,data:Ge,props:Ge,attrs:Ge,slots:Ge,refs:Ge,setupState:Ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bw.bind(null,r),t.ce&&t.ce(r),r}let ft=null;const Fw=()=>ft||xt;let qa,du;{const t=fl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};qa=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),du=e("__VUE_SSR_SETTERS__",n=>ao=n)}const No=t=>{const e=ft;return qa(t),t.scope.on(),()=>{t.scope.off(),qa(e)}},zh=()=>{ft&&ft.scope.off(),qa(null)};function xy(t){return t.vnode.shapeFlag&4}let ao=!1;function Uw(t,e=!1,n=!1){e&&du(e);const{props:i,children:s}=t.vnode,r=xy(t);dw(t,i,r,e),mw(t,s,n);const o=r?qw(t,e):void 0;return e&&du(!1),o}function qw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nw);const{setup:i}=n;if(i){Bi();const s=t.setupContext=i.length>1?zw(t):null,r=No(t),o=Oo(i,t,0,[t.props,s]),l=Og(o);if(zi(),r(),(l||t.sp)&&!Br(t)&&py(t),l){if(o.then(zh,zh),e)return o.then(c=>{Gh(t,c)}).catch(c=>{pl(c,t,0)});t.asyncDep=o}else Gh(t,o)}else Vy(t)}function Gh(t,e,n){Se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=ny(e)),Vy(t)}function Vy(t,e,n){const i=t.type;t.render||(t.render=i.render||In);{const s=No(t);Bi();try{iw(t)}finally{zi(),s()}}}const Bw={get(t,e){return Rt(t,"get",""),t[e]}};function zw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Bw),slots:t.slots,emit:t.emit,expose:e}}function El(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ny(_d(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zr)return zr[n](t)},has(e,n){return n in e||n in zr}})):t.proxy}function Gw(t,e=!0){return Se(t)?t.displayName||t.name:t.name||e&&t.__name}function jw(t){return Se(t)&&"__vccOpts"in t}const Qe=(t,e)=>L1(t,e,ao);function Al(t,e,n){const i=arguments.length;return i===2?je(e)&&!le(e)?Ua(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ua(n)&&(n=[n]),_e(t,e,n))}const Hw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fu;const jh=typeof window<"u"&&window.trustedTypes;if(jh)try{fu=jh.createPolicy("vue",{createHTML:t=>t})}catch{}const Fy=fu?t=>fu.createHTML(t):t=>t,$w="http://www.w3.org/2000/svg",Ww="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Hh=Fn&&Fn.createElement("template"),Kw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Fn.createElementNS($w,t):e==="mathml"?Fn.createElementNS(Ww,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Hh.innerHTML=Fy(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const l=Hh.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ai="transition",Or="animation",lo=Symbol("_vtc"),Uy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qw=ht({},cy,Uy),Yw=t=>(t.displayName="Transition",t.props=Qw,t),co=Yw((t,{slots:e})=>Al(z1,Xw(t),e)),Zi=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},$h=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function Xw(t){const e={};for(const v in t)v in Uy||(e[v]=t[v]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=t,R=Jw(s),L=R&&R[0],D=R&&R[1],{onBeforeEnter:C,onEnter:O,onEnterCancelled:x,onLeave:F,onLeaveCancelled:j,onBeforeAppear:V=C,onAppear:b=O,onAppearCancelled:y=x}=e,g=(v,A,be,Fe)=>{v._enterCancelled=Fe,es(v,A?f:l),es(v,A?u:o),be&&be()},E=(v,A)=>{v._isLeaving=!1,es(v,p),es(v,I),es(v,m),A&&A()},w=v=>(A,be)=>{const Fe=v?b:O,Oe=()=>g(A,v,be);Zi(Fe,[A,Oe]),Wh(()=>{es(A,v?c:r),xn(A,v?f:l),$h(Fe)||Kh(A,i,L,Oe)})};return ht(e,{onBeforeEnter(v){Zi(C,[v]),xn(v,r),xn(v,o)},onBeforeAppear(v){Zi(V,[v]),xn(v,c),xn(v,u)},onEnter:w(!1),onAppear:w(!0),onLeave(v,A){v._isLeaving=!0;const be=()=>E(v,A);xn(v,p),v._enterCancelled?(xn(v,m),Xh()):(Xh(),xn(v,m)),Wh(()=>{v._isLeaving&&(es(v,p),xn(v,I),$h(F)||Kh(v,i,D,be))}),Zi(F,[v,be])},onEnterCancelled(v){g(v,!1,void 0,!0),Zi(x,[v])},onAppearCancelled(v){g(v,!0,void 0,!0),Zi(y,[v])},onLeaveCancelled(v){E(v),Zi(j,[v])}})}function Jw(t){if(t==null)return null;if(je(t))return[Sc(t.enter),Sc(t.leave)];{const e=Sc(t);return[e,e]}}function Sc(t){return JA(t)}function xn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[lo]||(t[lo]=new Set)).add(e)}function es(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[lo];n&&(n.delete(e),n.size||(t[lo]=void 0))}function Wh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Zw=0;function Kh(t,e,n,i){const s=t._endId=++Zw,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:l,propCount:c}=ev(t,e);if(!o)return i();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),r()},m=I=>{I.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,m)}function ev(t,e){const n=window.getComputedStyle(t),i=R=>(n[R]||"").split(", "),s=i(`${ai}Delay`),r=i(`${ai}Duration`),o=Qh(s,r),l=i(`${Or}Delay`),c=i(`${Or}Duration`),u=Qh(l,c);let f=null,p=0,m=0;e===ai?o>0&&(f=ai,p=o,m=r.length):e===Or?u>0&&(f=Or,p=u,m=c.length):(p=Math.max(o,u),f=p>0?o>u?ai:Or:null,m=f?f===ai?r.length:c.length:0);const I=f===ai&&/\b(transform|all)(,|$)/.test(i(`${ai}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:I}}function Qh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Yh(n)+Yh(t[i])))}function Yh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Xh(){return document.body.offsetHeight}function tv(t,e,n){const i=t[lo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jh=Symbol("_vod"),nv=Symbol("_vsh"),iv=Symbol(""),sv=/(^|;)\s*display\s*:/;function rv(t,e,n){const i=t.style,s=st(n);let r=!1;if(n&&!s){if(e)if(st(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ea(i,l,"")}else for(const o in e)n[o]==null&&Ea(i,o,"");for(const o in n)o==="display"&&(r=!0),Ea(i,o,n[o])}else if(s){if(e!==n){const o=i[iv];o&&(n+=";"+o),i.cssText=n,r=sv.test(n)}}else e&&t.removeAttribute("style");Jh in t&&(t[Jh]=r?i.display:"",t[nv]&&(i.display="none"))}const Zh=/\s*!important$/;function Ea(t,e,n){if(le(n))n.forEach(i=>Ea(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ov(t,e);Zh.test(n)?t.setProperty(Es(i),n.replace(Zh,""),"important"):t[i]=n}}const ep=["Webkit","Moz","ms"],Rc={};function ov(t,e){const n=Rc[e];if(n)return n;let i=nn(e);if(i!=="filter"&&i in t)return Rc[e]=i;i=dl(i);for(let s=0;s<ep.length;s++){const r=ep[s]+i;if(r in t)return Rc[e]=r}return e}const tp="http://www.w3.org/1999/xlink";function np(t,e,n,i,s,r=s1(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(tp,e.slice(6,e.length)):t.setAttributeNS(tp,e,n):n==null||r&&!Lg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Cn(n)?String(n):n)}function ip(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Fy(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Lg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function yi(t,e,n,i){t.addEventListener(e,n,i)}function av(t,e,n,i){t.removeEventListener(e,n,i)}const sp=Symbol("_vei");function lv(t,e,n,i,s=null){const r=t[sp]||(t[sp]={}),o=r[e];if(i&&o)o.value=i;else{const[l,c]=cv(e);if(i){const u=r[e]=fv(i,s);yi(t,l,u,c)}else o&&(av(t,l,o,c),r[e]=void 0)}}const rp=/(?:Once|Passive|Capture)$/;function cv(t){let e;if(rp.test(t)){e={};let i;for(;i=t.match(rp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Es(t.slice(2)),e]}let Cc=0;const uv=Promise.resolve(),dv=()=>Cc||(uv.then(()=>Cc=0),Cc=Date.now());function fv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;on(hv(i,n.value),e,5,[i])};return n.value=t,n.attached=dv(),n}function hv(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const op=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pv=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?tv(t,i,o):e==="style"?rv(t,n,i):cl(e)?ad(e)||lv(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mv(t,e,i,o))?(ip(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&np(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!st(i))?ip(t,nn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),np(t,e,i,o))};function mv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&op(e)&&Se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return op(e)&&st(n)?!1:e in t}const Qs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>ya(e,n):e};function gv(t){t.target.composing=!0}function ap(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wn=Symbol("_assign"),mn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Wn]=Qs(s);const r=i||s.props&&s.props.type==="number";yi(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Da(l)),t[Wn](l)}),n&&yi(t,"change",()=>{t.value=t.value.trim()}),e||(yi(t,"compositionstart",gv),yi(t,"compositionend",ap),yi(t,"change",ap))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Wn]=Qs(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Da(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Oc={deep:!0,created(t,e,n){t[Wn]=Qs(n),yi(t,"change",()=>{const i=t._modelValue,s=uo(t),r=t.checked,o=t[Wn];if(le(i)){const l=ud(i,s),c=l!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const u=[...i];u.splice(l,1),o(u)}}else if(ar(i)){const l=new Set(i);r?l.add(s):l.delete(s),o(l)}else o(qy(t,r))})},mounted:lp,beforeUpdate(t,e,n){t[Wn]=Qs(n),lp(t,e,n)}};function lp(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(le(e))s=ud(e,i.props.value)>-1;else if(ar(e))s=e.has(i.props.value);else{if(e===n)return;s=Co(e,qy(t,!0))}t.checked!==s&&(t.checked=s)}const Ys={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=ar(e);yi(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Da(uo(o)):uo(o));t[Wn](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,ml(()=>{t._assigning=!1})}),t[Wn]=Qs(i)},mounted(t,{value:e}){cp(t,e)},beforeUpdate(t,e,n){t[Wn]=Qs(n)},updated(t,{value:e}){t._assigning||cp(t,e)}};function cp(t,e){const n=t.multiple,i=le(e);if(!(n&&!i&&!ar(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],l=uo(o);if(n)if(i){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=ud(e,l)>-1}else o.selected=e.has(l);else if(Co(uo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function uo(t){return"_value"in t?t._value:t.value}function qy(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const yv=["ctrl","shift","alt","meta"],_v={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>yv.some(n=>t[`${n}Key`]&&!e.includes(n))},mi=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const l=_v[e[o]];if(l&&l(s,e))return}return t(s,...r)})},Iv=ht({patchProp:pv},Kw);let up;function Ev(){return up||(up=yw(Iv))}const Av=(...t)=>{const e=Ev().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=vv(i);if(!s)return;const r=e._component;!Se(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,wv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function wv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vv(t){return st(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let By;const wl=t=>By=t,zy=Symbol();function hu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var jr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(jr||(jr={}));function Tv(){const t=Vg(!0),e=t.run(()=>ge({}));let n=[],i=[];const s=_d({install(r){wl(s),s._a=r,r.provide(zy,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Gy=()=>{};function dp(t,e,n,i=Gy){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Fg()&&o1(s),s}function Ns(t,...e){t.slice().forEach(n=>{n(...e)})}const bv=t=>t(),fp=Symbol(),Pc=Symbol();function pu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];hu(s)&&hu(i)&&t.hasOwnProperty(n)&&!it(i)&&!Ti(i)?t[n]=pu(s,i):t[n]=i}return t}const Sv=Symbol();function Rv(t){return!hu(t)||!t.hasOwnProperty(Sv)}const{assign:di}=Object;function Cv(t){return!!(it(t)&&t.effect)}function Ov(t,e,n,i){const{state:s,actions:r,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=O1(n.state.value[t]);return di(f,r,Object.keys(o||{}).reduce((p,m)=>(p[m]=_d(Qe(()=>{wl(n);const I=n._s.get(t);return o[m].call(I,I)})),p),{}))}return c=jy(t,u,e,n,i,!0),c}function jy(t,e,n={},i,s,r){let o;const l=di({actions:{}},n),c={deep:!0};let u,f,p=[],m=[],I;const R=i.state.value[t];!r&&!R&&(i.state.value[t]={}),ge({});let L;function D(y){let g;u=f=!1,typeof y=="function"?(y(i.state.value[t]),g={type:jr.patchFunction,storeId:t,events:I}):(pu(i.state.value[t],y),g={type:jr.patchObject,payload:y,storeId:t,events:I});const E=L=Symbol();ml().then(()=>{L===E&&(u=!0)}),f=!0,Ns(p,g,i.state.value[t])}const C=r?function(){const{state:g}=n,E=g?g():{};this.$patch(w=>{di(w,E)})}:Gy;function O(){o.stop(),p=[],m=[],i._s.delete(t)}const x=(y,g="")=>{if(fp in y)return y[Pc]=g,y;const E=function(){wl(i);const w=Array.from(arguments),v=[],A=[];function be(ne){v.push(ne)}function Fe(ne){A.push(ne)}Ns(m,{args:w,name:E[Pc],store:j,after:be,onError:Fe});let Oe;try{Oe=y.apply(this&&this.$id===t?this:j,w)}catch(ne){throw Ns(A,ne),ne}return Oe instanceof Promise?Oe.then(ne=>(Ns(v,ne),ne)).catch(ne=>(Ns(A,ne),Promise.reject(ne))):(Ns(v,Oe),Oe)};return E[fp]=!0,E[Pc]=g,E},F={_p:i,$id:t,$onAction:dp.bind(null,m),$patch:D,$reset:C,$subscribe(y,g={}){const E=dp(p,y,g.detached,()=>w()),w=o.run(()=>bi(()=>i.state.value[t],v=>{(g.flush==="sync"?f:u)&&y({storeId:t,type:jr.direct,events:I},v)},di({},c,g)));return E},$dispose:O},j=Ni(F);i._s.set(t,j);const b=(i._a&&i._a.runWithContext||bv)(()=>i._e.run(()=>(o=Vg()).run(()=>e({action:x}))));for(const y in b){const g=b[y];if(it(g)&&!Cv(g)||Ti(g))r||(R&&Rv(g)&&(it(g)?g.value=R[y]:pu(g,R[y])),i.state.value[t][y]=g);else if(typeof g=="function"){const E=x(g,y);b[y]=E,l.actions[y]=g}}return di(j,b),di(ke(j),b),Object.defineProperty(j,"$state",{get:()=>i.state.value[t],set:y=>{D(g=>{di(g,y)})}}),i._p.forEach(y=>{di(j,o.run(()=>y({store:j,app:i._a,pinia:i,options:l})))}),R&&r&&n.hydrate&&n.hydrate(j.$state,R),u=!0,f=!0,j}/*! #__NO_SIDE_EFFECTS__ */function vl(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(l,c){const u=uw();return l=l||(u?wn(zy,null):null),l&&wl(l),l=By,l._s.has(i)||(r?jy(i,e,s,l):Ov(i,s,l)),l._s.get(i)}return o.$id=i,o}var hp={};/**
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
 */const Hy=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Pv=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|u>>6,I=u&63;c||(I=64,o||(m=64)),i.push(n[f],n[p],n[m],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||u==null||p==null)throw new Nv;const m=r<<2|l>>4;if(i.push(m),u!==64){const I=l<<4&240|u>>2;if(i.push(I),p!==64){const R=u<<6&192|p;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dv=function(t){const e=Hy(t);return $y.encodeByteArray(e,!0)},Ba=function(t){return Dv(t).replace(/\./g,"")},Wy=function(t){try{return $y.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mv=()=>Lv().__FIREBASE_DEFAULTS__,kv=()=>{if(typeof process>"u"||typeof hp>"u")return;const t=hp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wy(t[1]);return e&&JSON.parse(e)},Tl=()=>{try{return Mv()||kv()||xv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ky=t=>{var e,n;return(n=(e=Tl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vv=t=>{const e=Ky(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Qy=()=>{var t;return(t=Tl())===null||t===void 0?void 0:t.config},Yy=t=>{var e;return(e=Tl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Fv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Uv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ba(JSON.stringify(n)),Ba(JSON.stringify(o)),""].join(".")}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function Bv(){var t;const e=(t=Tl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jv(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hv(){return!Bv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sd(){try{return typeof indexedDB=="object"}catch{return!1}}function Rd(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Xy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const $v="FirebaseError";class un extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=$v,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Wv(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new un(s,l,i)}}function Wv(t,e){return t.replace(Kv,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Kv=/\{\$([^}]+)}/g;function Qv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(pp(r)&&pp(o)){if(!fo(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function pp(t){return t!==null&&typeof t=="object"}/**
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
 */function Do(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Dr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Lr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Yv(t,e){const n=new Xv(t,e);return n.subscribe.bind(n)}class Xv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Jv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Nc),s.error===void 0&&(s.error=Nc),s.complete===void 0&&(s.complete=Nc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nc(){}/**
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
 */const Zv=1e3,eT=2,tT=4*60*60*1e3,nT=.5;function mp(t,e=Zv,n=eT){const i=e*Math.pow(n,t),s=Math.round(nT*i*(Math.random()-.5)*2);return Math.min(tT,i+s)}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class iT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Fv;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rT(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sT(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sT(t){return t===is?void 0:t}function rT(t){return t.instantiationMode==="EAGER"}/**
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
 */class oT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const aT={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},lT=Pe.INFO,cT={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},uT=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=cT[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=lT,this._logHandler=uT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const dT=(t,e)=>e.some(n=>t instanceof n);let gp,yp;function fT(){return gp||(gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hT(){return yp||(yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jy=new WeakMap,mu=new WeakMap,Zy=new WeakMap,Dc=new WeakMap,Cd=new WeakMap;function pT(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Si(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jy.set(n,t)}).catch(()=>{}),Cd.set(e,t),e}function mT(t){if(mu.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});mu.set(t,e)}let gu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Si(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gT(t){gu=t(gu)}function yT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Lc(this),e,...n);return Zy.set(i,e.sort?e.sort():[e]),Si(i)}:hT().includes(t)?function(...e){return t.apply(Lc(this),e),Si(Jy.get(this))}:function(...e){return Si(t.apply(Lc(this),e))}}function _T(t){return typeof t=="function"?yT(t):(t instanceof IDBTransaction&&mT(t),dT(t,fT())?new Proxy(t,gu):t)}function Si(t){if(t instanceof IDBRequest)return pT(t);if(Dc.has(t))return Dc.get(t);const e=_T(t);return e!==t&&(Dc.set(t,e),Cd.set(e,t)),e}const Lc=t=>Cd.get(t);function e_(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=Si(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Si(o.result),c.oldVersion,c.newVersion,Si(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const IT=["get","getKey","getAll","getAllKeys","count"],ET=["put","add","delete","clear"],Mc=new Map;function _p(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ET.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||IT.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Mc.set(e,r),r}gT(t=>({...t,get:(e,n,i)=>_p(e,n)||t.get(e,n,i),has:(e,n)=>!!_p(e,n)||t.has(e,n)}));/**
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
 */class AT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wT(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yu="@firebase/app",Ip="0.10.18";/**
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
 */const Qn=new bl("@firebase/app"),vT="@firebase/app-compat",TT="@firebase/analytics-compat",bT="@firebase/analytics",ST="@firebase/app-check-compat",RT="@firebase/app-check",CT="@firebase/auth",OT="@firebase/auth-compat",PT="@firebase/database",NT="@firebase/data-connect",DT="@firebase/database-compat",LT="@firebase/functions",MT="@firebase/functions-compat",kT="@firebase/installations",xT="@firebase/installations-compat",VT="@firebase/messaging",FT="@firebase/messaging-compat",UT="@firebase/performance",qT="@firebase/performance-compat",BT="@firebase/remote-config",zT="@firebase/remote-config-compat",GT="@firebase/storage",jT="@firebase/storage-compat",HT="@firebase/firestore",$T="@firebase/vertexai",WT="@firebase/firestore-compat",KT="firebase",QT="11.2.0";/**
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
 */const _u="[DEFAULT]",YT={[yu]:"fire-core",[vT]:"fire-core-compat",[bT]:"fire-analytics",[TT]:"fire-analytics-compat",[RT]:"fire-app-check",[ST]:"fire-app-check-compat",[CT]:"fire-auth",[OT]:"fire-auth-compat",[PT]:"fire-rtdb",[NT]:"fire-data-connect",[DT]:"fire-rtdb-compat",[LT]:"fire-fn",[MT]:"fire-fn-compat",[kT]:"fire-iid",[xT]:"fire-iid-compat",[VT]:"fire-fcm",[FT]:"fire-fcm-compat",[UT]:"fire-perf",[qT]:"fire-perf-compat",[BT]:"fire-rc",[zT]:"fire-rc-compat",[GT]:"fire-gcs",[jT]:"fire-gcs-compat",[HT]:"fire-fst",[WT]:"fire-fst-compat",[$T]:"fire-vertex","fire-js":"fire-js",[KT]:"fire-js-all"};/**
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
 */const za=new Map,XT=new Map,Iu=new Map;function Ep(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(Iu.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Iu.set(e,t);for(const n of za.values())Ep(n,t);for(const n of XT.values())Ep(n,t);return!0}function ws(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
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
 */const JT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ri=new As("app","Firebase",JT);/**
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
 */class ZT{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ri.create("app-deleted",{appName:this._name})}}/**
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
 */const lr=QT;function t_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:_u,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ri.create("bad-app-name",{appName:String(s)});if(n||(n=Qy()),!n)throw Ri.create("no-options");const r=za.get(s);if(r){if(fo(n,r.options)&&fo(i,r.config))return r;throw Ri.create("duplicate-app",{appName:s})}const o=new oT(s);for(const c of Iu.values())o.addComponent(c);const l=new ZT(n,i,o);return za.set(s,l),l}function Od(t=_u){const e=za.get(t);if(!e&&t===_u&&Qy())return t_();if(!e)throw Ri.create("no-app",{appName:t});return e}function tn(t,e,n){var i;let s=(i=YT[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(l.join(" "));return}On(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const e2="firebase-heartbeat-database",t2=1,ho="firebase-heartbeat-store";let kc=null;function n_(){return kc||(kc=e_(e2,t2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ri.create("idb-open",{originalErrorMessage:t.message})})),kc}async function n2(t){try{const n=(await n_()).transaction(ho),i=await n.objectStore(ho).get(i_(t));return await n.done,i}catch(e){if(e instanceof un)Qn.warn(e.message);else{const n=Ri.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Ap(t,e){try{const i=(await n_()).transaction(ho,"readwrite");await i.objectStore(ho).put(e,i_(t)),await i.done}catch(n){if(n instanceof un)Qn.warn(n.message);else{const i=Ri.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(i.message)}}}function i_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const i2=1024,s2=30*24*60*60*1e3;class r2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a2(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=s2}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Qn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wp(),{heartbeatsToSend:i,unsentEntries:s}=o2(this._heartbeatsCache.heartbeats),r=Ba(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Qn.warn(n),""}}}function wp(){return new Date().toISOString().substring(0,10)}function o2(t,e=i2){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),vp(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class a2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sd()?Rd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await n2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vp(t){return Ba(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function l2(t){On(new an("platform-logger",e=>new AT(e),"PRIVATE")),On(new an("heartbeat",e=>new r2(e),"PRIVATE")),tn(yu,Ip,t),tn(yu,Ip,"esm2017"),tn("fire-js","")}l2("");var c2="firebase",u2="11.2.0";/**
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
 */tn(c2,u2,"app");function Pd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function s_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d2=s_,r_=new As("auth","Firebase",s_());/**
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
 */const Ga=new bl("@firebase/auth");function f2(t,...e){Ga.logLevel<=Pe.WARN&&Ga.warn(`Auth (${lr}): ${t}`,...e)}function Aa(t,...e){Ga.logLevel<=Pe.ERROR&&Ga.error(`Auth (${lr}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw Nd(t,...e)}function vn(t,...e){return Nd(t,...e)}function o_(t,e,n){const i=Object.assign(Object.assign({},d2()),{[e]:n});return new As("auth","Firebase",i).create(e,{appName:t.name})}function Kn(t){return o_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return r_.create(t,...e)}function ye(t,e,...n){if(!t)throw Nd(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function Yn(t,e){t||Gn(e)}/**
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
 */function Eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h2(){return Tp()==="http:"||Tp()==="https:"}function Tp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function p2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h2()||bd()||"connection"in navigator)?navigator.onLine:!0}function m2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=qv()||Gv()}get(){return p2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dd(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class a_{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const g2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const y2=new Lo(3e4,6e4);function Gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ji(t,e,n,i,s={}){return l_(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=Do(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},r);return zv()||(u.referrerPolicy="no-referrer"),a_.fetch()(c_(t,t.config.apiHost,n,l),u)})}async function l_(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},g2),e);try{const s=new I2(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ca(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ca(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ca(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ca(t,"user-disabled",o);const f=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw o_(t,f,u);ln(t,f)}}catch(s){if(s instanceof un)throw s;ln(t,"network-request-failed",{message:String(s)})}}async function Mo(t,e,n,i,s={}){const r=await ji(t,e,n,i,s);return"mfaPendingCredential"in r&&ln(t,"multi-factor-auth-required",{_serverResponse:r}),r}function c_(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Dd(t.config,s):`${t.config.apiScheme}://${s}`}function _2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class I2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(vn(this.auth,"network-request-failed")),y2.get())})}}function ca(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=vn(t,e,i);return s.customData._tokenResponse=n,s}function bp(t){return t!==void 0&&t.enterprise!==void 0}class E2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function A2(t,e){return ji(t,"GET","/v2/recaptchaConfig",Gi(t,e))}/**
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
 */async function w2(t,e){return ji(t,"POST","/v1/accounts:delete",e)}async function u_(t,e){return ji(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v2(t,e=!1){const n=ut(t),i=await n.getIdToken(e),s=Ld(i);ye(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Hr(xc(s.auth_time)),issuedAtTime:Hr(xc(s.iat)),expirationTime:Hr(xc(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xc(t){return Number(t)*1e3}function Ld(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wy(n);return s?JSON.parse(s):(Aa("Failed to decode base64 JWT payload"),null)}catch(s){return Aa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sp(t){const e=Ld(t);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof un&&T2(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function T2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class b2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Au{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ja(t){var e;const n=t.auth,i=await t.getIdToken(),s=await po(t,u_(n,{idToken:i}));ye(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?d_(r.providerUserInfo):[],l=R2(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Au(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function S2(t){const e=ut(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R2(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function d_(t){return t.map(e=>{var{providerId:n}=e,i=Pd(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function C2(t,e){const n=await l_(t,{},async()=>{const i=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=c_(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",a_.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function O2(t,e){return ji(t,"POST","/v2/accounts:revokeToken",Gi(t,e))}/**
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
 */class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const n=Sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await C2(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new js;return i&&(ye(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ye(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ye(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
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
 */function li(t,e){ye(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Pd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Au(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return v2(this,e)}reload(){return S2(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await po(this,w2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,c,u,f;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,I=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:F,isAnonymous:j,providerData:V,stsTokenManager:b}=n;ye(x&&b,e,"internal-error");const y=js.fromJSON(this.name,b);ye(typeof x=="string",e,"internal-error"),li(p,e.name),li(m,e.name),ye(typeof F=="boolean",e,"internal-error"),ye(typeof j=="boolean",e,"internal-error"),li(I,e.name),li(R,e.name),li(L,e.name),li(D,e.name),li(C,e.name),li(O,e.name);const g=new jn({uid:x,auth:e,email:m,emailVerified:F,displayName:p,isAnonymous:j,photoURL:R,phoneNumber:I,tenantId:L,stsTokenManager:y,createdAt:C,lastLoginAt:O});return V&&Array.isArray(V)&&(g.providerData=V.map(E=>Object.assign({},E))),D&&(g._redirectEventId=D),g}static async _fromIdTokenResponse(e,n,i=!1){const s=new js;s.updateFromServerResponse(n);const r=new jn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ja(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];ye(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?d_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new js;l.updateFromIdToken(i);const c=new jn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Au(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
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
 */const Rp=new Map;function Hn(t){Yn(t instanceof Function,"Expected a class definition");let e=Rp.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rp.set(t,e),e)}/**
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
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}f_.type="NONE";const Cp=f_;/**
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
 */function wa(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=wa(this.userKey,s.apiKey,r),this.fullPersistenceKey=wa("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Hs(Hn(Cp),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||Hn(Cp);const o=wa(i,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const p=jn._fromJSON(e,f);u!==r&&(l=p),r=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Hs(r,e,i):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Hs(r,e,i))}}/**
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
 */function Op(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(I_(e))return"Webos";if(p_(e))return"Safari";if((e.includes("chrome/")||m_(e))&&!e.includes("edge/"))return"Chrome";if(y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function h_(t=Pt()){return/firefox\//i.test(t)}function p_(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function m_(t=Pt()){return/crios\//i.test(t)}function g_(t=Pt()){return/iemobile/i.test(t)}function y_(t=Pt()){return/android/i.test(t)}function __(t=Pt()){return/blackberry/i.test(t)}function I_(t=Pt()){return/webos/i.test(t)}function Md(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function P2(t=Pt()){var e;return Md(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function N2(){return jv()&&document.documentMode===10}function E_(t=Pt()){return Md(t)||y_(t)||I_(t)||__(t)||/windows phone/i.test(t)||g_(t)}/**
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
 */function A_(t,e=[]){let n;switch(t){case"Browser":n=Op(Pt());break;case"Worker":n=`${Op(Pt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${lr}/${i}`}/**
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
 */class D2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function L2(t,e={}){return ji(t,"GET","/v2/passwordPolicy",Gi(t,e))}/**
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
 */const M2=6;class k2{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:M2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class x2{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pp(this),this.idTokenSubscription=new Pp(this),this.beforeStateQueue=new D2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await u_(this,{idToken:e}),i=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(Kn(this));const n=e?ut(e):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await L2(this),n=new k2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await O2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&f2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vs(t){return ut(t)}class Pp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yv(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V2(t){Sl=t}function w_(t){return Sl.loadJS(t)}function F2(){return Sl.recaptchaEnterpriseScript}function U2(){return Sl.gapiScript}function q2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class B2{constructor(){this.enterprise=new z2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class z2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const G2="recaptcha-enterprise",v_="NO_RECAPTCHA";class j2{constructor(e){this.type=G2,this.auth=vs(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{A2(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new E2(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(r,o,l){const c=window.grecaptcha;bp(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(v_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new B2().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(l=>{if(!n&&bp(window.grecaptcha))s(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=F2();c.length!==0&&(c+=l),w_(c).then(()=>{s(l,r,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Np(t,e,n,i=!1,s=!1){const r=new j2(t);let o;if(s)o=v_;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function wu(t,e,n,i,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Np(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Np(t,e,n,n==="getOobCode");return i(t,l)}else return Promise.reject(o)})}/**
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
 */function H2(t,e){const n=ws(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(fo(r,e??{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function $2(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function W2(t,e,n){const i=vs(t);ye(i._canInitEmulator,i,"emulator-config-failed"),ye(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=T_(e),{host:o,port:l}=K2(e),c=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Q2()}function T_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function K2(t){const e=T_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Dp(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Dp(o)}}}function Dp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Q2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class kd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function Y2(t,e){return ji(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function X2(t,e){return Mo(t,"POST","/v1/accounts:signInWithPassword",Gi(t,e))}/**
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
 */async function J2(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",Gi(t,e))}async function Z2(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",Gi(t,e))}/**
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
 */class mo extends kd{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new mo(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new mo(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wu(e,n,"signInWithPassword",X2);case"emailLink":return J2(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wu(e,i,"signUpPassword",Y2);case"emailLink":return Z2(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $s(t,e){return Mo(t,"POST","/v1/accounts:signInWithIdp",Gi(t,e))}/**
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
 */const eb="http://localhost";class fs extends kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Pd(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new fs(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,$s(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:eb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
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
 */function tb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nb(t){const e=Dr(Lr(t)).link,n=e?Dr(Lr(e)).deep_link_id:null,i=Dr(Lr(t)).deep_link_id;return(i?Dr(Lr(i)).link:null)||i||n||e||t}class xd{constructor(e){var n,i,s,r,o,l;const c=Dr(Lr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(i=c.oobCode)!==null&&i!==void 0?i:null,p=tb((s=c.mode)!==null&&s!==void 0?s:null);ye(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=nb(e);try{return new xd(n)}catch{return null}}}/**
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
 */class cr{constructor(){this.providerId=cr.PROVIDER_ID}static credential(e,n){return mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=xd.parseLink(n);return ye(i,"argument-error"),mo._fromEmailAndCode(e,i.code,i.tenantId)}}cr.PROVIDER_ID="password";cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class b_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ko extends b_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _i extends ko{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.FACEBOOK_SIGN_IN_METHOD="facebook.com";_i.PROVIDER_ID="facebook.com";/**
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
 */class Ii extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ii.credential(n,i)}catch{return null}}}Ii.GOOGLE_SIGN_IN_METHOD="google.com";Ii.PROVIDER_ID="google.com";/**
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
 */class Ei extends ko{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.GITHUB_SIGN_IN_METHOD="github.com";Ei.PROVIDER_ID="github.com";/**
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
 */class Ai extends ko{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ai.credential(n,i)}catch{return null}}}Ai.TWITTER_SIGN_IN_METHOD="twitter.com";Ai.PROVIDER_ID="twitter.com";/**
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
 */async function ib(t,e){return Mo(t,"POST","/v1/accounts:signUp",Gi(t,e))}/**
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
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await jn._fromIdTokenResponse(e,i,s),o=Lp(i);return new hs({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Lp(i);return new hs({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Lp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ha extends un{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ha.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Ha(e,n,i,s)}}function S_(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ha._fromErrorAndOperation(t,r,e,i):r})}async function sb(t,e,n=!1){const i=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hs._forOperation(t,"link",i)}/**
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
 */async function rb(t,e,n=!1){const{auth:i}=t;if(gn(i.app))return Promise.reject(Kn(i));const s="reauthenticate";try{const r=await po(t,S_(i,s,e,t),n);ye(r.idToken,i,"internal-error");const o=Ld(r.idToken);ye(o,i,"internal-error");const{sub:l}=o;return ye(t.uid===l,i,"user-mismatch"),hs._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ln(i,"user-mismatch"),r}}/**
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
 */async function R_(t,e,n=!1){if(gn(t.app))return Promise.reject(Kn(t));const i="signIn",s=await S_(t,i,e),r=await hs._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function ob(t,e){return R_(vs(t),e)}/**
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
 */async function C_(t){const e=vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ab(t,e,n){if(gn(t.app))return Promise.reject(Kn(t));const i=vs(t),o=await wu(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ib).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&C_(t),c}),l=await hs._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(l.user),l}function lb(t,e,n){return gn(t.app)?Promise.reject(Kn(t)):ob(ut(t),cr.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&C_(t),i})}/**
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
 */function cb(t,e){return ut(t).setPersistence(e)}function ub(t,e,n,i){return ut(t).onIdTokenChanged(e,n,i)}function db(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function fb(t,e,n,i){return ut(t).onAuthStateChanged(e,n,i)}function hb(t){return ut(t).signOut()}const $a="__sak";/**
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
 */class O_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($a,"1"),this.storage.removeItem($a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pb=1e3,mb=10;class P_ extends O_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=E_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);N2()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mb):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P_.type="LOCAL";const N_=P_;/**
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
 */class D_ extends O_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D_.type="SESSION";const L_=D_;/**
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
 */function gb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Rl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,r)),c=await gb(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rl.receivers=[];/**
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
 */function Vd(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=Vd("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(m.data.response);break;default:clearTimeout(f),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tn(){return window}function _b(t){Tn().location.href=t}/**
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
 */function M_(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function Ib(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ab(){return M_()?self:null}/**
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
 */const k_="firebaseLocalStorageDb",wb=1,Wa="firebaseLocalStorage",x_="fbase_key";class xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cl(t,e){return t.transaction([Wa],e?"readwrite":"readonly").objectStore(Wa)}function vb(){const t=indexedDB.deleteDatabase(k_);return new xo(t).toPromise()}function vu(){const t=indexedDB.open(k_,wb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Wa,{keyPath:x_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Wa)?e(i):(i.close(),await vb(),e(await vu()))})})}async function Mp(t,e,n){const i=Cl(t,!0).put({[x_]:e,value:n});return new xo(i).toPromise()}async function Tb(t,e){const n=Cl(t,!1).get(e),i=await new xo(n).toPromise();return i===void 0?null:i.value}function kp(t,e){const n=Cl(t,!0).delete(e);return new xo(n).toPromise()}const bb=800,Sb=3;class V_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Sb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rl._getInstance(Ab()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ib(),!this.activeServiceWorker)return;this.sender=new yb(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vu();return await Mp(e,$a,"1"),await kp(e,$a),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Mp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Tb(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Cl(s,!1).getAll();return new xo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V_.type="LOCAL";const Rb=V_;new Lo(3e4,6e4);/**
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
 */function Cb(t,e){return e?Hn(e):(ye(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fd extends kd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ob(t){return R_(t.auth,new Fd(t),t.bypassAuthState)}function Pb(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),rb(n,new Fd(t),t.bypassAuthState)}async function Nb(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),sb(n,new Fd(t),t.bypassAuthState)}/**
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
 */class F_{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ob;case"linkViaPopup":case"linkViaRedirect":return Nb;case"reauthViaPopup":case"reauthViaRedirect":return Pb;default:ln(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Db=new Lo(2e3,1e4);class Us extends F_{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Vd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Db.get())};e()}}Us.currentPopupAction=null;/**
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
 */const Lb="pendingRedirect",va=new Map;class Mb extends F_{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=va.get(this.auth._key());if(!e){try{const i=await kb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}va.set(this.auth._key(),e)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kb(t,e){const n=Fb(e),i=Vb(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function xb(t,e){va.set(t._key(),e)}function Vb(t){return Hn(t._redirectPersistence)}function Fb(t){return wa(Lb,t.config.apiKey,t.name)}async function Ub(t,e,n=!1){if(gn(t.app))return Promise.reject(Kn(t));const i=vs(t),s=Cb(i,e),o=await new Mb(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const qb=10*60*1e3;class Bb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!U_(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qb&&this.cachedEventUids.clear(),this.cachedEventUids.has(xp(e))}saveEventToCache(e){this.cachedEventUids.add(xp(e)),this.lastProcessedEventTime=Date.now()}}function xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U_(t);default:return!1}}/**
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
 */async function Gb(t,e={}){return ji(t,"GET","/v1/projects",e)}/**
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
 */const jb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hb=/^https?/;async function $b(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gb(t);for(const n of e)try{if(Wb(n))return}catch{}ln(t,"unauthorized-domain")}function Wb(t){const e=Eu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Hb.test(n))return!1;if(jb.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Kb=new Lo(3e4,6e4);function Vp(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qb(t){return new Promise((e,n)=>{var i,s,r;function o(){Vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vp(),n(vn(t,"network-request-failed"))},timeout:Kb.get()})}if(!((s=(i=Tn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Tn().gapi)===null||r===void 0)&&r.load)o();else{const l=q2("iframefcb");return Tn()[l]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},w_(`${U2()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ta=null,e})}let Ta=null;function Yb(t){return Ta=Ta||Qb(t),Ta}/**
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
 */const Xb=new Lo(5e3,15e3),Jb="__/auth/iframe",Zb="emulator/auth/iframe",eS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nS(t){const e=t.config;ye(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dd(e,Zb):`https://${t.config.authDomain}/${Jb}`,i={apiKey:e.apiKey,appName:t.name,v:lr},s=tS.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Do(i).slice(1)}`}async function iS(t){const e=await Yb(t),n=Tn().gapi;return ye(n,t,"internal-error"),e.open({where:document.body,url:nS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eS,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),l=Tn().setTimeout(()=>{r(o)},Xb.get());function c(){Tn().clearTimeout(l),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const sS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rS=500,oS=600,aS="_blank",lS="http://localhost";class Fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cS(t,e,n,i=rS,s=oS){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},sS),{width:i.toString(),height:s.toString(),top:r,left:o}),u=Pt().toLowerCase();n&&(l=m_(u)?aS:n),h_(u)&&(e=e||lS,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[I,R])=>`${m}${I}=${R},`,"");if(P2(u)&&l!=="_self")return uS(e||"",l),new Fp(null);const p=window.open(e||"",l,f);ye(p,t,"popup-blocked");try{p.focus()}catch{}return new Fp(p)}function uS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const dS="__/auth/handler",fS="emulator/auth/handler",hS=encodeURIComponent("fac");async function Up(t,e,n,i,s,r){ye(t.config.authDomain,t,"auth-domain-config-required"),ye(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:lr,eventId:s};if(e instanceof b_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ko){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${hS}=${encodeURIComponent(c)}`:"";return`${pS(t)}?${Do(l).slice(1)}${u}`}function pS({config:t}){return t.emulator?Dd(t,fS):`https://${t.authDomain}/${dS}`}/**
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
 */const Vc="webStorageSupport";class mS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L_,this._completeRedirectFn=Ub,this._overrideRedirectResult=xb}async _openPopup(e,n,i,s){var r;Yn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Up(e,n,i,Eu(),s);return cS(e,o,Vd())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Up(e,n,i,Eu(),s);return _b(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await iS(e),i=new Bb(e);return n.register("authEvent",s=>(ye(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vc,{type:Vc},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Vc];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$b(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return E_()||p_()||Md()}}const gS=mS;var qp="@firebase/auth",Bp="1.8.2";/**
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
 */class yS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _S(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IS(t){On(new an("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A_(t)},u=new x2(i,s,r,c);return $2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),On(new an("auth-internal",e=>{const n=vs(e.getProvider("auth").getImmediate());return(i=>new yS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(qp,Bp,_S(t)),tn(qp,Bp,"esm2017")}/**
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
 */const ES=5*60,AS=Yy("authIdTokenMaxAge")||ES;let zp=null;const wS=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>AS)return;const s=n==null?void 0:n.token;zp!==s&&(zp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vS(t=Od()){const e=ws(t,"auth");if(e.isInitialized())return e.getImmediate();const n=H2(t,{popupRedirectResolver:gS,persistence:[Rb,N_,L_]}),i=Yy("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=wS(r.toString());db(n,o,()=>o(n.currentUser)),ub(n,l=>o(l))}}const s=Ky("auth");return s&&W2(n,`http://${s}`),n}function TS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}V2({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=vn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",TS().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IS("Browser");var Gp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ci,q_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function g(){}g.prototype=y.prototype,b.D=y.prototype,b.prototype=new g,b.prototype.constructor=b,b.C=function(E,w,v){for(var A=Array(arguments.length-2),be=2;be<arguments.length;be++)A[be-2]=arguments[be];return y.prototype[w].apply(E,A)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,g){g||(g=0);var E=Array(16);if(typeof y=="string")for(var w=0;16>w;++w)E[w]=y.charCodeAt(g++)|y.charCodeAt(g++)<<8|y.charCodeAt(g++)<<16|y.charCodeAt(g++)<<24;else for(w=0;16>w;++w)E[w]=y[g++]|y[g++]<<8|y[g++]<<16|y[g++]<<24;y=b.g[0],g=b.g[1],w=b.g[2];var v=b.g[3],A=y+(v^g&(w^v))+E[0]+3614090360&4294967295;y=g+(A<<7&4294967295|A>>>25),A=v+(w^y&(g^w))+E[1]+3905402710&4294967295,v=y+(A<<12&4294967295|A>>>20),A=w+(g^v&(y^g))+E[2]+606105819&4294967295,w=v+(A<<17&4294967295|A>>>15),A=g+(y^w&(v^y))+E[3]+3250441966&4294967295,g=w+(A<<22&4294967295|A>>>10),A=y+(v^g&(w^v))+E[4]+4118548399&4294967295,y=g+(A<<7&4294967295|A>>>25),A=v+(w^y&(g^w))+E[5]+1200080426&4294967295,v=y+(A<<12&4294967295|A>>>20),A=w+(g^v&(y^g))+E[6]+2821735955&4294967295,w=v+(A<<17&4294967295|A>>>15),A=g+(y^w&(v^y))+E[7]+4249261313&4294967295,g=w+(A<<22&4294967295|A>>>10),A=y+(v^g&(w^v))+E[8]+1770035416&4294967295,y=g+(A<<7&4294967295|A>>>25),A=v+(w^y&(g^w))+E[9]+2336552879&4294967295,v=y+(A<<12&4294967295|A>>>20),A=w+(g^v&(y^g))+E[10]+4294925233&4294967295,w=v+(A<<17&4294967295|A>>>15),A=g+(y^w&(v^y))+E[11]+2304563134&4294967295,g=w+(A<<22&4294967295|A>>>10),A=y+(v^g&(w^v))+E[12]+1804603682&4294967295,y=g+(A<<7&4294967295|A>>>25),A=v+(w^y&(g^w))+E[13]+4254626195&4294967295,v=y+(A<<12&4294967295|A>>>20),A=w+(g^v&(y^g))+E[14]+2792965006&4294967295,w=v+(A<<17&4294967295|A>>>15),A=g+(y^w&(v^y))+E[15]+1236535329&4294967295,g=w+(A<<22&4294967295|A>>>10),A=y+(w^v&(g^w))+E[1]+4129170786&4294967295,y=g+(A<<5&4294967295|A>>>27),A=v+(g^w&(y^g))+E[6]+3225465664&4294967295,v=y+(A<<9&4294967295|A>>>23),A=w+(y^g&(v^y))+E[11]+643717713&4294967295,w=v+(A<<14&4294967295|A>>>18),A=g+(v^y&(w^v))+E[0]+3921069994&4294967295,g=w+(A<<20&4294967295|A>>>12),A=y+(w^v&(g^w))+E[5]+3593408605&4294967295,y=g+(A<<5&4294967295|A>>>27),A=v+(g^w&(y^g))+E[10]+38016083&4294967295,v=y+(A<<9&4294967295|A>>>23),A=w+(y^g&(v^y))+E[15]+3634488961&4294967295,w=v+(A<<14&4294967295|A>>>18),A=g+(v^y&(w^v))+E[4]+3889429448&4294967295,g=w+(A<<20&4294967295|A>>>12),A=y+(w^v&(g^w))+E[9]+568446438&4294967295,y=g+(A<<5&4294967295|A>>>27),A=v+(g^w&(y^g))+E[14]+3275163606&4294967295,v=y+(A<<9&4294967295|A>>>23),A=w+(y^g&(v^y))+E[3]+4107603335&4294967295,w=v+(A<<14&4294967295|A>>>18),A=g+(v^y&(w^v))+E[8]+1163531501&4294967295,g=w+(A<<20&4294967295|A>>>12),A=y+(w^v&(g^w))+E[13]+2850285829&4294967295,y=g+(A<<5&4294967295|A>>>27),A=v+(g^w&(y^g))+E[2]+4243563512&4294967295,v=y+(A<<9&4294967295|A>>>23),A=w+(y^g&(v^y))+E[7]+1735328473&4294967295,w=v+(A<<14&4294967295|A>>>18),A=g+(v^y&(w^v))+E[12]+2368359562&4294967295,g=w+(A<<20&4294967295|A>>>12),A=y+(g^w^v)+E[5]+4294588738&4294967295,y=g+(A<<4&4294967295|A>>>28),A=v+(y^g^w)+E[8]+2272392833&4294967295,v=y+(A<<11&4294967295|A>>>21),A=w+(v^y^g)+E[11]+1839030562&4294967295,w=v+(A<<16&4294967295|A>>>16),A=g+(w^v^y)+E[14]+4259657740&4294967295,g=w+(A<<23&4294967295|A>>>9),A=y+(g^w^v)+E[1]+2763975236&4294967295,y=g+(A<<4&4294967295|A>>>28),A=v+(y^g^w)+E[4]+1272893353&4294967295,v=y+(A<<11&4294967295|A>>>21),A=w+(v^y^g)+E[7]+4139469664&4294967295,w=v+(A<<16&4294967295|A>>>16),A=g+(w^v^y)+E[10]+3200236656&4294967295,g=w+(A<<23&4294967295|A>>>9),A=y+(g^w^v)+E[13]+681279174&4294967295,y=g+(A<<4&4294967295|A>>>28),A=v+(y^g^w)+E[0]+3936430074&4294967295,v=y+(A<<11&4294967295|A>>>21),A=w+(v^y^g)+E[3]+3572445317&4294967295,w=v+(A<<16&4294967295|A>>>16),A=g+(w^v^y)+E[6]+76029189&4294967295,g=w+(A<<23&4294967295|A>>>9),A=y+(g^w^v)+E[9]+3654602809&4294967295,y=g+(A<<4&4294967295|A>>>28),A=v+(y^g^w)+E[12]+3873151461&4294967295,v=y+(A<<11&4294967295|A>>>21),A=w+(v^y^g)+E[15]+530742520&4294967295,w=v+(A<<16&4294967295|A>>>16),A=g+(w^v^y)+E[2]+3299628645&4294967295,g=w+(A<<23&4294967295|A>>>9),A=y+(w^(g|~v))+E[0]+4096336452&4294967295,y=g+(A<<6&4294967295|A>>>26),A=v+(g^(y|~w))+E[7]+1126891415&4294967295,v=y+(A<<10&4294967295|A>>>22),A=w+(y^(v|~g))+E[14]+2878612391&4294967295,w=v+(A<<15&4294967295|A>>>17),A=g+(v^(w|~y))+E[5]+4237533241&4294967295,g=w+(A<<21&4294967295|A>>>11),A=y+(w^(g|~v))+E[12]+1700485571&4294967295,y=g+(A<<6&4294967295|A>>>26),A=v+(g^(y|~w))+E[3]+2399980690&4294967295,v=y+(A<<10&4294967295|A>>>22),A=w+(y^(v|~g))+E[10]+4293915773&4294967295,w=v+(A<<15&4294967295|A>>>17),A=g+(v^(w|~y))+E[1]+2240044497&4294967295,g=w+(A<<21&4294967295|A>>>11),A=y+(w^(g|~v))+E[8]+1873313359&4294967295,y=g+(A<<6&4294967295|A>>>26),A=v+(g^(y|~w))+E[15]+4264355552&4294967295,v=y+(A<<10&4294967295|A>>>22),A=w+(y^(v|~g))+E[6]+2734768916&4294967295,w=v+(A<<15&4294967295|A>>>17),A=g+(v^(w|~y))+E[13]+1309151649&4294967295,g=w+(A<<21&4294967295|A>>>11),A=y+(w^(g|~v))+E[4]+4149444226&4294967295,y=g+(A<<6&4294967295|A>>>26),A=v+(g^(y|~w))+E[11]+3174756917&4294967295,v=y+(A<<10&4294967295|A>>>22),A=w+(y^(v|~g))+E[2]+718787259&4294967295,w=v+(A<<15&4294967295|A>>>17),A=g+(v^(w|~y))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(w+(A<<21&4294967295|A>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+v&4294967295}i.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var g=y-this.blockSize,E=this.B,w=this.h,v=0;v<y;){if(w==0)for(;v<=g;)s(this,b,v),v+=this.blockSize;if(typeof b=="string"){for(;v<y;)if(E[w++]=b.charCodeAt(v++),w==this.blockSize){s(this,E),w=0;break}}else for(;v<y;)if(E[w++]=b[v++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=y},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var g=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=g&255,g/=256;for(this.u(b),b=Array(16),y=g=0;4>y;++y)for(var E=0;32>E;E+=8)b[g++]=this.g[y]>>>E&255;return b};function r(b,y){var g=l;return Object.prototype.hasOwnProperty.call(g,b)?g[b]:g[b]=y(b)}function o(b,y){this.h=y;for(var g=[],E=!0,w=b.length-1;0<=w;w--){var v=b[w]|0;E&&v==y||(g[w]=v,E=!1)}this.g=g}var l={};function c(b){return-128<=b&&128>b?r(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return D(u(-b));for(var y=[],g=1,E=0;b>=g;E++)y[E]=b/g|0,g*=4294967296;return new o(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return D(f(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=u(Math.pow(y,8)),E=p,w=0;w<b.length;w+=8){var v=Math.min(8,b.length-w),A=parseInt(b.substring(w,w+v),y);8>v?(v=u(Math.pow(y,v)),E=E.j(v).add(u(A))):(E=E.j(g),E=E.add(u(A)))}return E}var p=c(0),m=c(1),I=c(16777216);t=o.prototype,t.m=function(){if(L(this))return-D(this).m();for(var b=0,y=1,g=0;g<this.g.length;g++){var E=this.i(g);b+=(0<=E?E:4294967296+E)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(L(this))return"-"+D(this).toString(b);for(var y=u(Math.pow(b,6)),g=this,E="";;){var w=F(g,y).g;g=C(g,w.j(y));var v=((0<g.g.length?g.g[0]:g.h)>>>0).toString(b);if(g=w,R(g))return v+E;for(;6>v.length;)v="0"+v;E=v+E}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function L(b){return b.h==-1}t.l=function(b){return b=C(this,b),L(b)?-1:R(b)?0:1};function D(b){for(var y=b.g.length,g=[],E=0;E<y;E++)g[E]=~b.g[E];return new o(g,~b.h).add(m)}t.abs=function(){return L(this)?D(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],E=0,w=0;w<=y;w++){var v=E+(this.i(w)&65535)+(b.i(w)&65535),A=(v>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);E=A>>>16,v&=65535,A&=65535,g[w]=A<<16|v}return new o(g,g[g.length-1]&-2147483648?-1:0)};function C(b,y){return b.add(D(y))}t.j=function(b){if(R(this)||R(b))return p;if(L(this))return L(b)?D(this).j(D(b)):D(D(this).j(b));if(L(b))return D(this.j(D(b)));if(0>this.l(I)&&0>b.l(I))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,g=[],E=0;E<2*y;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<b.g.length;w++){var v=this.i(E)>>>16,A=this.i(E)&65535,be=b.i(w)>>>16,Fe=b.i(w)&65535;g[2*E+2*w]+=A*Fe,O(g,2*E+2*w),g[2*E+2*w+1]+=v*Fe,O(g,2*E+2*w+1),g[2*E+2*w+1]+=A*be,O(g,2*E+2*w+1),g[2*E+2*w+2]+=v*be,O(g,2*E+2*w+2)}for(E=0;E<y;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=y;E<2*y;E++)g[E]=0;return new o(g,0)};function O(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function x(b,y){this.g=b,this.h=y}function F(b,y){if(R(y))throw Error("division by zero");if(R(b))return new x(p,p);if(L(b))return y=F(D(b),y),new x(D(y.g),D(y.h));if(L(y))return y=F(b,D(y)),new x(D(y.g),y.h);if(30<b.g.length){if(L(b)||L(y))throw Error("slowDivide_ only works with positive integers.");for(var g=m,E=y;0>=E.l(b);)g=j(g),E=j(E);var w=V(g,1),v=V(E,1);for(E=V(E,2),g=V(g,2);!R(E);){var A=v.add(E);0>=A.l(b)&&(w=w.add(g),v=A),E=V(E,1),g=V(g,1)}return y=C(b,w.j(y)),new x(w,y)}for(w=p;0<=b.l(y);){for(g=Math.max(1,Math.floor(b.m()/y.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),v=u(g),A=v.j(y);L(A)||0<A.l(b);)g-=E,v=u(g),A=v.j(y);R(v)&&(v=m),w=w.add(v),b=C(b,A)}return new x(w,b)}t.A=function(b){return F(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],E=0;E<y;E++)g[E]=this.i(E)&b.i(E);return new o(g,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],E=0;E<y;E++)g[E]=this.i(E)|b.i(E);return new o(g,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],E=0;E<y;E++)g[E]=this.i(E)^b.i(E);return new o(g,this.h^b.h)};function j(b){for(var y=b.g.length+1,g=[],E=0;E<y;E++)g[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(g,b.h)}function V(b,y){var g=y>>5;y%=32;for(var E=b.g.length-g,w=[],v=0;v<E;v++)w[v]=0<y?b.i(v+g)>>>y|b.i(v+g+1)<<32-y:b.i(v+g);return new o(w,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,q_=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ci=o}).apply(typeof Gp<"u"?Gp:typeof self<"u"?self:typeof window<"u"?window:{});var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B_,Mr,z_,ba,Tu,G_,j_,H_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,h){return a==Array.prototype||a==Object.prototype||(a[d]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ua=="object"&&ua];for(var d=0;d<a.length;++d){var h=a[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=n(this);function s(a,d){if(d)e:{var h=i;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in h))break e;h=h[N]}a=a[a.length-1],_=h[a],d=d(_),d!=_&&d!=null&&e(h,a,{configurable:!0,writable:!0,value:d})}}function r(a,d){a instanceof String&&(a+="");var h=0,_=!1,N={next:function(){if(!_&&h<a.length){var k=h++;return{value:d(k,a[k]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return r(this,function(d,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,h){return a.call.apply(a.bind,arguments)}function p(a,d,h){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),a.apply(d,N)}}return function(){return a.apply(d,arguments)}}function m(a,d,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function I(a,d){var h=Array.prototype.slice.call(arguments,1);return function(){var _=h.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function R(a,d){function h(){}h.prototype=d.prototype,a.aa=d.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(_,N,k){for(var J=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)J[ze-2]=arguments[ze];return d.prototype[N].apply(_,J)}}function L(a){const d=a.length;if(0<d){const h=Array(d);for(let _=0;_<d;_++)h[_]=a[_];return h}return[]}function D(a,d){for(let h=1;h<arguments.length;h++){const _=arguments[h];if(c(_)){const N=a.length||0,k=_.length||0;a.length=N+k;for(let J=0;J<k;J++)a[N+J]=_[J]}else a.push(_)}}class C{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var j=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function V(a,d,h){for(const _ in a)d.call(h,a[_],_,a)}function b(a,d){for(const h in a)d.call(void 0,a[h],h,a)}function y(a){const d={};for(const h in a)d[h]=a[h];return d}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,d){let h,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(h in _)a[h]=_[h];for(let k=0;k<g.length;k++)h=g[k],Object.prototype.hasOwnProperty.call(_,h)&&(a[h]=_[h])}}function w(a){var d=1;a=a.split(":");const h=[];for(;0<d&&a.length;)h.push(a.shift()),d--;return a.length&&h.push(a.join(":")),h}function v(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Q;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class be{constructor(){this.h=this.g=null}add(d,h){const _=Fe.get();_.set(d,h),this.h?this.h.next=_:this.g=_,this.h=_}}var Fe=new C(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,Ee=!1,Q=new be,K=()=>{const a=l.Promise.resolve(void 0);ne=()=>{a.then(pe)}};var pe=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(h){v(h)}var d=Fe;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Ee=!1};function Ae(){this.s=this.s,this.C=this.C}Ae.prototype.s=!1,Ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var He=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,d),l.removeEventListener("test",h,d)}catch{}return a}();function Gt(a,d){if(we.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(j){e:{try{F(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else h=="mouseover"?d=a.fromElement:h=="mouseout"&&(d=a.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Et[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gt.aa.h.call(this)}}R(Gt,we);var Et={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),ie=0;function ee(a,d,h,_,N){this.listener=a,this.proxy=null,this.src=d,this.type=h,this.capture=!!_,this.ha=N,this.key=++ie,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xe(a){this.src=a,this.g={},this.h=0}xe.prototype.add=function(a,d,h,_,N){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var J=S(a,d,_,N);return-1<J?(d=a[J],h||(d.fa=!1)):(d=new ee(d,this.src,k,!!_,N),d.fa=h,a.push(d)),d};function T(a,d){var h=d.type;if(h in a.g){var _=a.g[h],N=Array.prototype.indexOf.call(_,d,void 0),k;(k=0<=N)&&Array.prototype.splice.call(_,N,1),k&&(re(d),a.g[h].length==0&&(delete a.g[h],a.h--))}}function S(a,d,h,_){for(var N=0;N<a.length;++N){var k=a[N];if(!k.da&&k.listener==d&&k.capture==!!h&&k.ha==_)return N}return-1}var P="closure_lm_"+(1e6*Math.random()|0),q={};function G(a,d,h,_,N){if(Array.isArray(d)){for(var k=0;k<d.length;k++)G(a,d[k],h,_,N);return null}return h=me(h),a&&a[U]?a.K(d,h,u(_)?!!_.capture:!1,N):B(a,d,h,!1,_,N)}function B(a,d,h,_,N,k){if(!d)throw Error("Invalid event type");var J=u(N)?!!N.capture:!!N,ze=te(a);if(ze||(a[P]=ze=new xe(a)),h=ze.add(d,h,_,J,k),h.proxy)return h;if(_=Z(),h.proxy=_,_.src=a,_.listener=h,a.addEventListener)He||(N=J),N===void 0&&(N=!1),a.addEventListener(d.toString(),_,N);else if(a.attachEvent)a.attachEvent(H(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Z(){function a(h){return d.call(a.src,a.listener,h)}const d=de;return a}function X(a,d,h,_,N){if(Array.isArray(d))for(var k=0;k<d.length;k++)X(a,d[k],h,_,N);else _=u(_)?!!_.capture:!!_,h=me(h),a&&a[U]?(a=a.i,d=String(d).toString(),d in a.g&&(k=a.g[d],h=S(k,h,_,N),-1<h&&(re(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete a.g[d],a.h--)))):a&&(a=te(a))&&(d=a.g[d.toString()],a=-1,d&&(a=S(d,h,_,N)),(h=-1<a?d[a]:null)&&Y(h))}function Y(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[U])T(d.i,a);else{var h=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(h,_,a.capture):d.detachEvent?d.detachEvent(H(h),_):d.addListener&&d.removeListener&&d.removeListener(_),(h=te(d))?(T(h,a),h.h==0&&(h.src=null,d[P]=null)):re(a)}}}function H(a){return a in q?q[a]:q[a]="on"+a}function de(a,d){if(a.da)a=!0;else{d=new Gt(d,this);var h=a.listener,_=a.ha||a.src;a.fa&&Y(a),a=h.call(_,d)}return a}function te(a){return a=a[P],a instanceof xe?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(d){return a.handleEvent(d)}),a[ae])}function fe(){Ae.call(this),this.i=new xe(this),this.M=this,this.F=null}R(fe,Ae),fe.prototype[U]=!0,fe.prototype.removeEventListener=function(a,d,h,_){X(this,a,d,h,_)};function Ce(a,d){var h,_=a.F;if(_)for(h=[];_;_=_.F)h.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new we(d,a);else if(d instanceof we)d.target=d.target||a;else{var N=d;d=new we(_,a),E(d,N)}if(N=!0,h)for(var k=h.length-1;0<=k;k--){var J=d.g=h[k];N=Le(J,_,!0,d)&&N}if(J=d.g=a,N=Le(J,_,!0,d)&&N,N=Le(J,_,!1,d)&&N,h)for(k=0;k<h.length;k++)J=d.g=h[k],N=Le(J,_,!1,d)&&N}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var h=a.g[d],_=0;_<h.length;_++)re(h[_]);delete a.g[d],a.h--}}this.F=null},fe.prototype.K=function(a,d,h,_){return this.i.add(String(a),d,!1,h,_)},fe.prototype.L=function(a,d,h,_){return this.i.add(String(a),d,!0,h,_)};function Le(a,d,h,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,k=0;k<d.length;++k){var J=d[k];if(J&&!J.da&&J.capture==h){var ze=J.listener,gt=J.ha||J.src;J.fa&&T(a.i,J),N=ze.call(gt,_)!==!1&&N}}return N&&!_.defaultPrevented}function At(a,d,h){if(typeof a=="function")h&&(a=m(a,h));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function pt(a){a.g=At(()=>{a.g=null,a.i&&(a.i=!1,pt(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Xt extends Ae{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wt(a){Ae.call(this),this.h=a,this.g={}}R(wt,Ae);var ii=[];function mr(a){V(a.g,function(d,h){this.g.hasOwnProperty(h)&&Y(d)},a),a.g={}}wt.prototype.N=function(){wt.aa.N.call(this),mr(this)},wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mt=l.JSON.stringify,Jt=l.JSON.parse,Go=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function nc(){}nc.prototype.h=null;function kf(a){return a.h||(a.h=a.i())}function xf(){}var gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ic(){we.call(this,"d")}R(ic,we);function sc(){we.call(this,"c")}R(sc,we);var Wi={},Vf=null;function jo(){return Vf=Vf||new fe}Wi.La="serverreachability";function Ff(a){we.call(this,Wi.La,a)}R(Ff,we);function yr(a){const d=jo();Ce(d,new Ff(d))}Wi.STAT_EVENT="statevent";function Uf(a,d){we.call(this,Wi.STAT_EVENT,a),this.stat=d}R(Uf,we);function Dt(a){const d=jo();Ce(d,new Uf(d,a))}Wi.Ma="timingevent";function qf(a,d){we.call(this,Wi.Ma,a),this.size=d}R(qf,we);function _r(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Ir(){this.g=!0}Ir.prototype.xa=function(){this.g=!1};function TA(a,d,h,_,N,k){a.info(function(){if(a.g)if(k)for(var J="",ze=k.split("&"),gt=0;gt<ze.length;gt++){var Ve=ze[gt].split("=");if(1<Ve.length){var vt=Ve[0];Ve=Ve[1];var Tt=vt.split("_");J=2<=Tt.length&&Tt[1]=="type"?J+(vt+"="+Ve+"&"):J+(vt+"=redacted&")}}else J=null;else J=k;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+d+`
`+h+`
`+J})}function bA(a,d,h,_,N,k,J){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+d+`
`+h+`
`+k+" "+J})}function Ss(a,d,h,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+RA(a,h)+(_?" "+_:"")})}function SA(a,d){a.info(function(){return"TIMEOUT: "+d})}Ir.prototype.info=function(){};function RA(a,d){if(!a.g)return d;if(!d)return null;try{var h=JSON.parse(d);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var _=h[a];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var k=N[0];if(k!="noop"&&k!="stop"&&k!="close")for(var J=1;J<N.length;J++)N[J]=""}}}}return mt(h)}catch{return d}}var Ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rc;function $o(){}R($o,nc),$o.prototype.g=function(){return new XMLHttpRequest},$o.prototype.i=function(){return{}},rc=new $o;function si(a,d,h,_){this.j=a,this.i=d,this.l=h,this.R=_||1,this.U=new wt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zf}function zf(){this.i=null,this.g="",this.h=!1}var Gf={},oc={};function ac(a,d,h){a.L=1,a.v=Yo(Ln(d)),a.m=h,a.P=!0,jf(a,null)}function jf(a,d){a.F=Date.now(),Wo(a),a.A=Ln(a.v);var h=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),sh(h.i,"t",_),a.C=0,h=a.j.J,a.h=new zf,a.g=wh(a.j,h?d:null,!a.m),0<a.O&&(a.M=new Xt(m(a.Y,a,a.g),a.O)),d=a.U,h=a.g,_=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(ii[0]=N.toString()),N=ii);for(var k=0;k<N.length;k++){var J=G(h,N[k],_||d.handleEvent,!1,d.h||d);if(!J)break;d.g[J.key]=J}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),yr(),TA(a.i,a.u,a.A,a.l,a.R,a.m)}si.prototype.ca=function(a){a=a.target;const d=this.M;d&&Mn(a)==3?d.j():this.Y(a)},si.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=Mn(this.g);var d=this.g.Ba();const Os=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||dh(this.g)))){this.J||Tt!=4||d==7||(d==8||0>=Os?yr(3):yr(2)),lc(this);var h=this.g.Z();this.X=h;t:if(Hf(this)){var _=dh(this.g);a="";var N=_.length,k=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ki(this),Er(this);var J="";break t}this.h.i=new l.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,a+=this.h.i.decode(_[d],{stream:!(k&&d==N-1)});_.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=h==200,bA(this.i,this.u,this.A,this.l,this.R,Tt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,gt=this.g;if((ze=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(ze)){var Ve=ze;break t}}Ve=null}if(h=Ve)Ss(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cc(this,h);else{this.o=!1,this.s=3,Dt(12),Ki(this),Er(this);break e}}if(this.P){h=!0;let sn;for(;!this.J&&this.C<J.length;)if(sn=CA(this,J),sn==oc){Tt==4&&(this.s=4,Dt(14),h=!1),Ss(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Gf){this.s=4,Dt(15),Ss(this.i,this.l,J,"[Invalid Chunk]"),h=!1;break}else Ss(this.i,this.l,sn,null),cc(this,sn);if(Hf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||J.length!=0||this.h.h||(this.s=1,Dt(16),h=!1),this.o=this.o&&h,!h)Ss(this.i,this.l,J,"[Invalid Chunked Response]"),Ki(this),Er(this);else if(0<J.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),mc(vt),vt.M=!0,Dt(11))}}else Ss(this.i,this.l,J,null),cc(this,J);Tt==4&&Ki(this),this.o&&!this.J&&(Tt==4?_h(this.j,this):(this.o=!1,Wo(this)))}else HA(this.g),h==400&&0<J.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),Ki(this),Er(this)}}}catch{}finally{}};function Hf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function CA(a,d){var h=a.C,_=d.indexOf(`
`,h);return _==-1?oc:(h=Number(d.substring(h,_)),isNaN(h)?Gf:(_+=1,_+h>d.length?oc:(d=d.slice(_,_+h),a.C=_+h,d)))}si.prototype.cancel=function(){this.J=!0,Ki(this)};function Wo(a){a.S=Date.now()+a.I,$f(a,a.I)}function $f(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_r(m(a.ba,a),d)}function lc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}si.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(SA(this.i,this.A),this.L!=2&&(yr(),Dt(17)),Ki(this),this.s=2,Er(this)):$f(this,this.S-a)};function Er(a){a.j.G==0||a.J||_h(a.j,a)}function Ki(a){lc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,mr(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function cc(a,d){try{var h=a.j;if(h.G!=0&&(h.g==a||uc(h.h,a))){if(!a.K&&uc(h.h,a)&&h.G==3){try{var _=h.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)na(h),ea(h);else break e;pc(h),Dt(18)}}else h.za=N[1],0<h.za-h.T&&37500>N[2]&&h.F&&h.v==0&&!h.C&&(h.C=_r(m(h.Za,h),6e3));if(1>=Qf(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Yi(h,11)}else if((a.K||h.g==a)&&na(h),!O(d))for(N=h.Da.g.parse(d),d=0;d<N.length;d++){let Ve=N[d];if(h.T=Ve[0],Ve=Ve[1],h.G==2)if(Ve[0]=="c"){h.K=Ve[1],h.ia=Ve[2];const vt=Ve[3];vt!=null&&(h.la=vt,h.j.info("VER="+h.la));const Tt=Ve[4];Tt!=null&&(h.Aa=Tt,h.j.info("SVER="+h.Aa));const Os=Ve[5];Os!=null&&typeof Os=="number"&&0<Os&&(_=1.5*Os,h.L=_,h.j.info("backChannelRequestTimeoutMs_="+_)),_=h;const sn=a.g;if(sn){const sa=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sa){var k=_.h;k.g||sa.indexOf("spdy")==-1&&sa.indexOf("quic")==-1&&sa.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(dc(k,k.h),k.h=null))}if(_.D){const gc=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;gc&&(_.ya=gc,We(_.I,_.D,gc))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),_=h;var J=a;if(_.qa=Ah(_,_.J?_.ia:null,_.W),J.K){Yf(_.h,J);var ze=J,gt=_.L;gt&&(ze.I=gt),ze.B&&(lc(ze),Wo(ze)),_.g=J}else gh(_);0<h.i.length&&ta(h)}else Ve[0]!="stop"&&Ve[0]!="close"||Yi(h,7);else h.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Yi(h,7):hc(h):Ve[0]!="noop"&&h.l&&h.l.ta(Ve),h.v=0)}}yr(4)}catch{}}var OA=class{constructor(a,d){this.g=a,this.map=d}};function Wf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qf(a){return a.h?1:a.g?a.g.size:0}function uc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function dc(a,d){a.g?a.g.add(d):a.h=d}function Yf(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Wf.prototype.cancel=function(){if(this.i=Xf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const h of a.g.values())d=d.concat(h.D);return d}return L(a.i)}function PA(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],h=a.length,_=0;_<h;_++)d.push(a[_]);return d}d=[],h=0;for(_ in a)d[h++]=a[_];return d}function NA(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var h=0;h<a;h++)d.push(h);return d}d=[],h=0;for(const _ in a)d[h++]=_;return d}}}function Jf(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var h=NA(a),_=PA(a),N=_.length,k=0;k<N;k++)d.call(void 0,_[k],h&&h[k],a)}var Zf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DA(a,d){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var _=a[h].indexOf("="),N=null;if(0<=_){var k=a[h].substring(0,_);N=a[h].substring(_+1)}else k=a[h];d(k,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Qi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qi){this.h=a.h,Ko(this,a.j),this.o=a.o,this.g=a.g,Qo(this,a.s),this.l=a.l;var d=a.i,h=new vr;h.i=d.i,d.g&&(h.g=new Map(d.g),h.h=d.h),eh(this,h),this.m=a.m}else a&&(d=String(a).match(Zf))?(this.h=!1,Ko(this,d[1]||"",!0),this.o=Ar(d[2]||""),this.g=Ar(d[3]||"",!0),Qo(this,d[4]),this.l=Ar(d[5]||"",!0),eh(this,d[6]||"",!0),this.m=Ar(d[7]||"")):(this.h=!1,this.i=new vr(null,this.h))}Qi.prototype.toString=function(){var a=[],d=this.j;d&&a.push(wr(d,th,!0),":");var h=this.g;return(h||d=="file")&&(a.push("//"),(d=this.o)&&a.push(wr(d,th,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(wr(h,h.charAt(0)=="/"?kA:MA,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",wr(h,VA)),a.join("")};function Ln(a){return new Qi(a)}function Ko(a,d,h){a.j=h?Ar(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Qo(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function eh(a,d,h){d instanceof vr?(a.i=d,FA(a.i,a.h)):(h||(d=wr(d,xA)),a.i=new vr(d,a.h))}function We(a,d,h){a.i.set(d,h)}function Yo(a){return We(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ar(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function wr(a,d,h){return typeof a=="string"?(a=encodeURI(a).replace(d,LA),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function LA(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var th=/[#\/\?@]/g,MA=/[#\?:]/g,kA=/[#\?]/g,xA=/[#\?@]/g,VA=/#/g;function vr(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function ri(a){a.g||(a.g=new Map,a.h=0,a.i&&DA(a.i,function(d,h){a.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}t=vr.prototype,t.add=function(a,d){ri(this),this.i=null,a=Rs(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(d),this.h+=1,this};function nh(a,d){ri(a),d=Rs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function ih(a,d){return ri(a),d=Rs(a,d),a.g.has(d)}t.forEach=function(a,d){ri(this),this.g.forEach(function(h,_){h.forEach(function(N){a.call(d,N,_,this)},this)},this)},t.na=function(){ri(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),h=[];for(let _=0;_<d.length;_++){const N=a[_];for(let k=0;k<N.length;k++)h.push(d[_])}return h},t.V=function(a){ri(this);let d=[];if(typeof a=="string")ih(this,a)&&(d=d.concat(this.g.get(Rs(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)d=d.concat(a[h])}return d},t.set=function(a,d){return ri(this),this.i=null,a=Rs(this,a),ih(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function sh(a,d,h){nh(a,d),0<h.length&&(a.i=null,a.g.set(Rs(a,d),L(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var h=0;h<d.length;h++){var _=d[h];const k=encodeURIComponent(String(_)),J=this.V(_);for(_=0;_<J.length;_++){var N=k;J[_]!==""&&(N+="="+encodeURIComponent(String(J[_]))),a.push(N)}}return this.i=a.join("&")};function Rs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function FA(a,d){d&&!a.j&&(ri(a),a.i=null,a.g.forEach(function(h,_){var N=_.toLowerCase();_!=N&&(nh(this,_),sh(this,N,h))},a)),a.j=d}function UA(a,d){const h=new Ir;if(l.Image){const _=new Image;_.onload=I(oi,h,"TestLoadImage: loaded",!0,d,_),_.onerror=I(oi,h,"TestLoadImage: error",!1,d,_),_.onabort=I(oi,h,"TestLoadImage: abort",!1,d,_),_.ontimeout=I(oi,h,"TestLoadImage: timeout",!1,d,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function qA(a,d){const h=new Ir,_=new AbortController,N=setTimeout(()=>{_.abort(),oi(h,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(k=>{clearTimeout(N),k.ok?oi(h,"TestPingServer: ok",!0,d):oi(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),oi(h,"TestPingServer: error",!1,d)})}function oi(a,d,h,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(h)}catch{}}function BA(){this.g=new Go}function zA(a,d,h){const _=h||"";try{Jf(a,function(N,k){let J=N;u(N)&&(J=mt(N)),d.push(_+k+"="+encodeURIComponent(J))})}catch(N){throw d.push(_+"type="+encodeURIComponent("_badmap")),N}}function Xo(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Xo,nc),Xo.prototype.g=function(){return new Jo(this.l,this.j)},Xo.prototype.i=function(a){return function(){return a}}({});function Jo(a,d){fe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Jo,fe),t=Jo.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,br(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function rh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Tr(this):br(this),this.readyState==3&&rh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Tr(this))},t.Qa=function(a){this.g&&(this.response=a,Tr(this))},t.ga=function(){this.g&&Tr(this)};function Tr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,br(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=d.next();return a.join(`\r
`)};function br(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function oh(a){let d="";return V(a,function(h,_){d+=_,d+=":",d+=h,d+=`\r
`}),d}function fc(a,d,h){e:{for(_ in h){var _=!1;break e}_=!0}_||(h=oh(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):We(a,d,h))}function Ze(a){fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ze,fe);var GA=/^https?$/i,jA=["POST","PUT"];t=Ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,h,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rc.g(),this.v=this.o?kf(this.o):kf(rc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(k){ah(this,k);return}if(a=h||"",h=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)h.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const k of _.keys())h.set(k,_.get(k));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jA,d,void 0))||_||N||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,J]of h)this.g.setRequestHeader(k,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uh(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){ah(this,k)}};function ah(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,lh(a),Zo(a)}function lh(a){a.A||(a.A=!0,Ce(a,"complete"),Ce(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ce(this,"complete"),Ce(this,"abort"),Zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ch(this):this.bb())},t.bb=function(){ch(this)};function ch(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Mn(a)!=4||a.Z()!=2)){if(a.u&&Mn(a)==4)At(a.Ea,0,a);else if(Ce(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var _;if(_=J===0){var N=String(a.D).match(Zf)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),_=!GA.test(N?N.toLowerCase():"")}h=_}if(h)Ce(a,"complete"),Ce(a,"success");else{a.m=6;try{var k=2<Mn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",lh(a)}}finally{Zo(a)}}}}function Zo(a,d){if(a.g){uh(a);const h=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Ce(a,"ready");try{h.onreadystatechange=_}catch{}}}function uh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Jt(d)}};function dh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function HA(a){const d={};a=(a.g&&2<=Mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(O(a[_]))continue;var h=w(a[_]);const N=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=d[N]||[];d[N]=k,k.push(h)}b(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sr(a,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||d}function fh(a){this.Aa=0,this.i=[],this.j=new Ir,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sr("baseRetryDelayMs",5e3,a),this.cb=Sr("retryDelaySeedMs",1e4,a),this.Wa=Sr("forwardChannelMaxRetries",2,a),this.wa=Sr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wf(a&&a.concurrentRequestLimit),this.Da=new BA,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fh.prototype,t.la=8,t.G=1,t.connect=function(a,d,h,_){Dt(0),this.W=a,this.H=d||{},h&&_!==void 0&&(this.H.OSID=h,this.H.OAID=_),this.F=this.X,this.I=Ah(this,null,this.W),ta(this)};function hc(a){if(hh(a),a.G==3){var d=a.U++,h=Ln(a.I);if(We(h,"SID",a.K),We(h,"RID",d),We(h,"TYPE","terminate"),Rr(a,h),d=new si(a,a.j,d),d.L=2,d.v=Yo(Ln(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=d.v,h=!0),h||(d.g=wh(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Wo(d)}Eh(a)}function ea(a){a.g&&(mc(a),a.g.cancel(),a.g=null)}function hh(a){ea(a),a.u&&(l.clearTimeout(a.u),a.u=null),na(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ta(a){if(!Kf(a.h)&&!a.s){a.s=!0;var d=a.Ga;ne||K(),Ee||(ne(),Ee=!0),Q.add(d,a),a.B=0}}function $A(a,d){return Qf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_r(m(a.Ga,a,d),Ih(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new si(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),E(k,this.S)):k=this.S),this.m!==null||this.O||(N.H=k,k=null),this.P)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var _=this.i[h];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=mh(this,N,d),h=Ln(this.I),We(h,"RID",a),We(h,"CVER",22),this.D&&We(h,"X-HTTP-Session-Id",this.D),Rr(this,h),k&&(this.O?d="headers="+encodeURIComponent(String(oh(k)))+"&"+d:this.m&&fc(h,this.m,k)),dc(this.h,N),this.Ua&&We(h,"TYPE","init"),this.P?(We(h,"$req",d),We(h,"SID","null"),N.T=!0,ac(N,h,null)):ac(N,h,d),this.G=2}}else this.G==3&&(a?ph(this,a):this.i.length==0||Kf(this.h)||ph(this))};function ph(a,d){var h;d?h=d.l:h=a.U++;const _=Ln(a.I);We(_,"SID",a.K),We(_,"RID",h),We(_,"AID",a.T),Rr(a,_),a.m&&a.o&&fc(_,a.m,a.o),h=new si(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),d&&(a.i=d.D.concat(a.i)),d=mh(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),dc(a.h,h),ac(h,_,d)}function Rr(a,d){a.H&&V(a.H,function(h,_){We(d,_,h)}),a.l&&Jf({},function(h,_){We(d,_,h)})}function mh(a,d,h){h=Math.min(a.i.length,h);var _=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let k=-1;for(;;){const J=["count="+h];k==-1?0<h?(k=N[0].g,J.push("ofs="+k)):k=0:J.push("ofs="+k);let ze=!0;for(let gt=0;gt<h;gt++){let Ve=N[gt].g;const vt=N[gt].map;if(Ve-=k,0>Ve)k=Math.max(0,N[gt].g-100),ze=!1;else try{zA(vt,J,"req"+Ve+"_")}catch{_&&_(vt)}}if(ze){_=J.join("&");break e}}}return a=a.i.splice(0,h),d.D=a,_}function gh(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;ne||K(),Ee||(ne(),Ee=!0),Q.add(d,a),a.v=0}}function pc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_r(m(a.Fa,a),Ih(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,yh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_r(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),ea(this),yh(this))};function mc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function yh(a){a.g=new si(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Ln(a.qa);We(d,"RID","rpc"),We(d,"SID",a.K),We(d,"AID",a.T),We(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&We(d,"TO",a.ja),We(d,"TYPE","xmlhttp"),Rr(a,d),a.m&&a.o&&fc(d,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Yo(Ln(d)),h.m=null,h.P=!0,jf(h,a)}t.Za=function(){this.C!=null&&(this.C=null,ea(this),pc(this),Dt(19))};function na(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function _h(a,d){var h=null;if(a.g==d){na(a),mc(a),a.g=null;var _=2}else if(uc(a.h,d))h=d.D,Yf(a.h,d),_=1;else return;if(a.G!=0){if(d.o)if(_==1){h=d.m?d.m.length:0,d=Date.now()-d.F;var N=a.B;_=jo(),Ce(_,new qf(_,h)),ta(a)}else gh(a);else if(N=d.s,N==3||N==0&&0<d.X||!(_==1&&$A(a,d)||_==2&&pc(a)))switch(h&&0<h.length&&(d=a.h,d.i=d.i.concat(h)),N){case 1:Yi(a,5);break;case 4:Yi(a,10);break;case 3:Yi(a,6);break;default:Yi(a,2)}}}function Ih(a,d){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*d}function Yi(a,d){if(a.j.info("Error code "+d),d==2){var h=m(a.fb,a),_=a.Xa;const N=!_;_=new Qi(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ko(_,"https"),Yo(_),N?UA(_.toString(),h):qA(_.toString(),h)}else Dt(2);a.G=0,a.l&&a.l.sa(d),Eh(a),hh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Eh(a){if(a.G=0,a.ka=[],a.l){const d=Xf(a.h);(d.length!=0||a.i.length!=0)&&(D(a.ka,d),D(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function Ah(a,d,h){var _=h instanceof Qi?Ln(h):new Qi(h);if(_.g!="")d&&(_.g=d+"."+_.g),Qo(_,_.s);else{var N=l.location;_=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var k=new Qi(null);_&&Ko(k,_),d&&(k.g=d),N&&Qo(k,N),h&&(k.l=h),_=k}return h=a.D,d=a.ya,h&&d&&We(_,h,d),We(_,"VER",a.la),Rr(a,_),_}function wh(a,d,h){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ze(new Xo({eb:h})):new Ze(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vh(){}t=vh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ia(){}ia.prototype.g=function(a,d){return new jt(a,d)};function jt(a,d){fe.call(this),this.g=new fh(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!O(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Cs(this)}R(jt,fe),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){hc(this.g)},jt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=mt(a),a=h);d.i.push(new OA(d.Ya++,a)),d.G==3&&ta(d)},jt.prototype.N=function(){this.g.l=null,delete this.j,hc(this.g),delete this.g,jt.aa.N.call(this)};function Th(a){ic.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const h in d){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}R(Th,ic);function bh(){sc.call(this),this.status=1}R(bh,sc);function Cs(a){this.g=a}R(Cs,vh),Cs.prototype.ua=function(){Ce(this.g,"a")},Cs.prototype.ta=function(a){Ce(this.g,new Th(a))},Cs.prototype.sa=function(a){Ce(this.g,new bh)},Cs.prototype.ra=function(){Ce(this.g,"b")},ia.prototype.createWebChannel=ia.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,H_=function(){return new ia},j_=function(){return jo()},G_=Wi,Tu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,ba=Ho,Bf.COMPLETE="complete",z_=Bf,xf.EventType=gr,gr.OPEN="a",gr.CLOSE="b",gr.ERROR="c",gr.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Mr=xf,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,B_=Ze}).apply(typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{});const jp="@firebase/firestore";/**
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
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */let ur="11.2.0";/**
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
 */const ps=new bl("@firebase/firestore");function Ms(){return ps.logLevel}function se(t,...e){if(ps.logLevel<=Pe.DEBUG){const n=e.map(Ud);ps.debug(`Firestore (${ur}): ${t}`,...n)}}function Xn(t,...e){if(ps.logLevel<=Pe.ERROR){const n=e.map(Ud);ps.error(`Firestore (${ur}): ${t}`,...n)}}function Xs(t,...e){if(ps.logLevel<=Pe.WARN){const n=e.map(Ud);ps.warn(`Firestore (${ur}): ${t}`,...n)}}function Ud(t){if(typeof t=="string")return t;try{/**
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
 */function Ie(t="Unexpected state"){const e=`FIRESTORE (${ur}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function Be(t,e){t||Ie()}function Re(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Oi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class SS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RS{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Be(this.o===void 0);let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new Oi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Oi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Oi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string"),new $_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new St(e)}}class CS{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=St.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class OS{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new CS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Be(this.o===void 0);const i=r=>{r.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.R=n.token,new PS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function DS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class W_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=DS(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function De(t,e){return t<e?-1:t>e?1:0}function Js(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
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
 */class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new lt(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ue($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new lt(0,0))}static max(){return new Te(new lt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class hn{constructor(e,n,i){n===void 0?n=0:n>e.length&&Ie(),i===void 0?i=e.length-n:i>e.length-n&&Ie(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=hn.compareSegments(e.get(s),n.get(s));if(r!==0)return r}return Math.sign(e.length-n.length)}static compareSegments(e,n){const i=hn.isNumericId(e),s=hn.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?hn.extractNumericId(e).compare(hn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ci.fromString(e.substring(4,e.length-2))}}class et extends hn{construct(e,n,i){return new et(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue($.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new et(n)}static emptyPath(){return new et([])}}const LS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends hn{construct(e,n,i){return new _t(e,n,i)}static isValidIdentifier(e){return LS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new ue($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ue($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ue($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(i+=l,s++):(r(),s++)}if(r(),o)throw new ue($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(et.fromString(e))}static fromName(e){return new he(et.fromString(e).popFirst(5))}static empty(){return new he(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new et(e.slice()))}}function MS(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(i===1e9?new lt(n+1,0):new lt(n,i));return new Li(s,he.empty(),e)}function kS(t){return new Li(t.readTime,t.key,-1)}class Li{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Li(Te.min(),he.empty(),-1)}static max(){return new Li(Te.max(),he.empty(),-1)}}function xS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:De(t.largestBatchId,e.largestBatchId))}/**
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
 */const VS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function dr(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==VS)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,i)=>{n(e)})}static reject(e){return new z((n,i)=>{i(e)})}static waitFor(e){return new z((n,i)=>{let s=0,r=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=z.resolve(!1);for(const i of e)n=n.next(s=>s?z.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new z((i,s)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===r&&i(o)},f=>s(f))}})}static doWhile(e,n){return new z((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function US(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ol{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ol.oe=-1;function Pl(t){return t==null}function Ka(t){return t===0&&1/t==-1/0}function qS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ka(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function BS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Hp(e)),e=zS(t.get(n),e);return Hp(e)}function zS(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const r=t.charAt(s);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Hp(t){return t+""}/**
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
 */function $p(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function K_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new da(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new da(this.root,e,this.comparator,!1)}getReverseIterator(){return new da(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new da(this.root,e,this.comparator,!0)}}class da{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??yt.RED,this.left=s??yt.EMPTY,this.right=r??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new yt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,n,i,s,r){return this}insert(e,n,i){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wp(this.data.getIterator())}getIteratorFrom(e){return new Wp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Wp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new ct(_t.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Q_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Q_("Invalid base64 string: "+r):r}}(e);return new It(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const GS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mi(t){if(Be(!!t),typeof t=="string"){let e=0;const n=GS.exec(t);if(Be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ki(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function qd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nl(t){const e=t.mapValue.fields.__previous_value__;return qd(e)?Nl(e):e}function go(t){const e=Mi(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
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
 */class jS{constructor(e,n,i,s,r,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qd(t)?4:$S(t)?9007199254740991:HS(t)?10:11:Ie()}function Pn(t,e){if(t===e)return!0;const n=xi(t);if(n!==xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return go(t).isEqual(go(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Mi(s.timestampValue),l=Mi(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ki(s.bytesValue).isEqual(ki(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return tt(s.geoPointValue.latitude)===tt(r.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return tt(s.integerValue)===tt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=tt(s.doubleValue),l=tt(r.doubleValue);return o===l?Ka(o)===Ka(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Js(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(s,r){const o=s.mapValue.fields||{},l=r.mapValue.fields||{};if($p(o)!==$p(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Pn(o[c],l[c])))return!1;return!0}(t,e);default:return Ie()}}function _o(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function Zs(t,e){if(t===e)return 0;const n=xi(t),i=xi(e);if(n!==i)return De(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return De(t.booleanValue,e.booleanValue);case 2:return function(r,o){const l=tt(r.integerValue||r.doubleValue),c=tt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Kp(t.timestampValue,e.timestampValue);case 4:return Kp(go(t),go(e));case 5:return De(t.stringValue,e.stringValue);case 6:return function(r,o){const l=ki(r),c=ki(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=De(l[u],c[u]);if(f!==0)return f}return De(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const l=De(tt(r.latitude),tt(o.latitude));return l!==0?l:De(tt(r.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Qp(t.arrayValue,e.arrayValue);case 10:return function(r,o){var l,c,u,f;const p=r.fields||{},m=o.fields||{},I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(c=m.value)===null||c===void 0?void 0:c.arrayValue,L=De(((u=I==null?void 0:I.values)===null||u===void 0?void 0:u.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:Qp(I,R)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===fa.mapValue&&o===fa.mapValue)return 0;if(r===fa.mapValue)return 1;if(o===fa.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=De(c[p],f[p]);if(m!==0)return m;const I=Zs(l[c[p]],u[f[p]]);if(I!==0)return I}return De(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Ie()}}function Kp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return De(t,e);const n=Mi(t),i=Mi(e),s=De(n.seconds,i.seconds);return s!==0?s:De(n.nanos,i.nanos)}function Qp(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=Zs(n[s],i[s]);if(r)return r}return De(n.length,i.length)}function er(t){return bu(t)}function bu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Mi(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ki(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=bu(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${bu(n.fields[o])}`;return s+"}"}(t.mapValue):Ie()}function Sa(t){switch(xi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nl(t);return e?16+Sa(e):16;case 5:return 2*t.stringValue.length;case 6:return ki(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+Sa(r),0)}(t.arrayValue);case 10:case 11:return function(i){let s=0;return Hi(i.fields,(r,o)=>{s+=r.length+Sa(o)}),s}(t.mapValue);default:throw Ie()}}function Su(t){return!!t&&"integerValue"in t}function Bd(t){return!!t&&"arrayValue"in t}function Yp(t){return!!t&&"nullValue"in t}function Xp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ra(t){return!!t&&"mapValue"in t}function HS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function $r(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hi(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=$r(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$r(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $S(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Ra(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$r(n)}setAll(e){let n=_t.emptyPath(),i={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=l.popLast()}o?i[l.lastSegment()]=$r(o):s.push(l.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Ra(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Ra(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Hi(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Bt($r(this.value))}}function Y_(t){const e=[];return Hi(t.fields,(n,i)=>{const s=new _t([n]);if(Ra(i)){const r=Y_(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
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
 */class Ot{constructor(e,n,i,s,r,o,l){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ot(e,0,Te.min(),Te.min(),Te.min(),Bt.empty(),0)}static newFoundDocument(e,n,i,s){return new Ot(e,1,n,Te.min(),i,s,0)}static newNoDocument(e,n){return new Ot(e,2,n,Te.min(),Te.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,Te.min(),Te.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qa{constructor(e,n){this.position=e,this.inclusive=n}}function Jp(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=he.comparator(he.fromName(o.referenceValue),n.key):i=Zs(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Zp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ya{constructor(e,n="asc"){this.field=e,this.dir=n}}function WS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class X_{}class at extends X_{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new QS(e,n,i):n==="array-contains"?new JS(e,i):n==="in"?new ZS(e,i):n==="not-in"?new eR(e,i):n==="array-contains-any"?new tR(e,i):new at(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new YS(e,i):new XS(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zs(n,this.value)):n!==null&&xi(this.value)===xi(n)&&this.matchesComparison(Zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends X_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Nn(e,n)}matches(e){return J_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function J_(t){return t.op==="and"}function Z_(t){return KS(t)&&J_(t)}function KS(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Ru(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+er(t.value);if(Z_(t))return t.filters.map(e=>Ru(e)).join(",");{const e=t.filters.map(n=>Ru(n)).join(",");return`${t.op}(${e})`}}function eI(t,e){return t instanceof at?function(i,s){return s instanceof at&&i.op===s.op&&i.field.isEqual(s.field)&&Pn(i.value,s.value)}(t,e):t instanceof Nn?function(i,s){return s instanceof Nn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,l)=>r&&eI(o,s.filters[l]),!0):!1}(t,e):void Ie()}function tI(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${er(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(tI).join(" ,")+"}"}(t):"Filter"}class QS extends at{constructor(e,n,i){super(e,n,i),this.key=he.fromName(i.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class YS extends at{constructor(e,n){super(e,"in",n),this.keys=nI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XS extends at{constructor(e,n){super(e,"not-in",n),this.keys=nI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>he.fromName(i.referenceValue))}class JS extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bd(n)&&_o(n.arrayValue,this.value)}}class ZS extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class eR extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_o(this.value.arrayValue,n)}}class tR extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>_o(this.value.arrayValue,i))}}/**
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
 */class nR{constructor(e,n=null,i=[],s=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=l,this.ue=null}}function em(t,e=null,n=[],i=[],s=null,r=null,o=null){return new nR(t,e,n,i,s,r,o)}function zd(t){const e=Re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Ru(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>er(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>er(i)).join(",")),e.ue=n}return e.ue}function Gd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zp(t.startAt,e.startAt)&&Zp(t.endAt,e.endAt)}function Cu(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Dl{constructor(e,n=null,i=[],s=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iR(t,e,n,i,s,r,o,l){return new Dl(t,e,n,i,s,r,o,l)}function jd(t){return new Dl(t)}function tm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sR(t){return t.collectionGroup!==null}function Wr(t){const e=Re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ct(_t.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Ya(r,i))}),n.has(_t.keyField().canonicalString())||e.ce.push(new Ya(_t.keyField(),i))}return e.ce}function bn(t){const e=Re(t);return e.le||(e.le=rR(e,Wr(t))),e.le}function rR(t,e){if(t.limitType==="F")return em(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new Ya(s.field,r)});const n=t.endAt?new Qa(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Qa(t.startAt.position,t.startAt.inclusive):null;return em(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Ou(t,e,n){return new Dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ll(t,e){return Gd(bn(t),bn(e))&&t.limitType===e.limitType}function iI(t){return`${zd(bn(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>tI(s)).join(", ")}]`),Pl(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>er(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>er(s)).join(",")),`Target(${i})`}(bn(t))}; limitType=${t.limitType})`}function Ml(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):he.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of Wr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,l,c){const u=Jp(o,l,c);return o.inclusive?u<=0:u<0}(i.startAt,Wr(i),s)||i.endAt&&!function(o,l,c){const u=Jp(o,l,c);return o.inclusive?u>=0:u>0}(i.endAt,Wr(i),s))}(t,e)}function oR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sI(t){return(e,n)=>{let i=!1;for(const s of Wr(t)){const r=aR(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function aR(t,e,n){const i=t.field.isKeyField()?he.comparator(e.key,n.key):function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?Zs(c,u):Ie()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ie()}}/**
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
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hi(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return K_(this.inner)}size(){return this.innerSize}}/**
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
 */const lR=new Je(he.comparator);function Jn(){return lR}const rI=new Je(he.comparator);function kr(...t){let e=rI;for(const n of t)e=e.insert(n.key,n);return e}function oI(t){let e=rI;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function rs(){return Kr()}function aI(){return Kr()}function Kr(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const cR=new Je(he.comparator),uR=new ct(he.comparator);function Ne(...t){let e=uR;for(const n of t)e=e.add(n);return e}const dR=new ct(De);function fR(){return dR}/**
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
 */function Hd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ka(e)?"-0":e}}function lI(t){return{integerValue:""+t}}function hR(t,e){return qS(e)?lI(e):Hd(t,e)}/**
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
 */class kl{constructor(){this._=void 0}}function pR(t,e,n){return t instanceof Xa?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&qd(r)&&(r=Nl(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Io?uI(t,e):t instanceof Eo?dI(t,e):function(s,r){const o=cI(s,r),l=nm(o)+nm(s.Pe);return Su(o)&&Su(s.Pe)?lI(l):Hd(s.serializer,l)}(t,e)}function mR(t,e,n){return t instanceof Io?uI(t,e):t instanceof Eo?dI(t,e):n}function cI(t,e){return t instanceof Ja?function(i){return Su(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class Xa extends kl{}class Io extends kl{constructor(e){super(),this.elements=e}}function uI(t,e){const n=fI(e);for(const i of t.elements)n.some(s=>Pn(s,i))||n.push(i);return{arrayValue:{values:n}}}class Eo extends kl{constructor(e){super(),this.elements=e}}function dI(t,e){let n=fI(e);for(const i of t.elements)n=n.filter(s=>!Pn(s,i));return{arrayValue:{values:n}}}class Ja extends kl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function nm(t){return tt(t.integerValue||t.doubleValue)}function fI(t){return Bd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gR(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof Io&&s instanceof Io||i instanceof Eo&&s instanceof Eo?Js(i.elements,s.elements,Pn):i instanceof Ja&&s instanceof Ja?Pn(i.Pe,s.Pe):i instanceof Xa&&s instanceof Xa}(t.transform,e.transform)}class yR{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xl{}function hI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mI(t.key,Sn.none()):new Vo(t.key,t.data,Sn.none());{const n=t.data,i=Bt.empty();let s=new ct(_t.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new $i(t.key,i,new Wt(s.toArray()),Sn.none())}}function _R(t,e,n){t instanceof Vo?function(s,r,o){const l=s.value.clone(),c=sm(s.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof $i?function(s,r,o){if(!Ca(s.precondition,r))return void r.convertToUnknownDocument(o.version);const l=sm(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(pI(s)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qr(t,e,n,i){return t instanceof Vo?function(r,o,l,c){if(!Ca(r.precondition,o))return l;const u=r.value.clone(),f=rm(r.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,i):t instanceof $i?function(r,o,l,c){if(!Ca(r.precondition,o))return l;const u=rm(r.fieldTransforms,c,o),f=o.data;return f.setAll(pI(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(t,e,n,i):function(r,o,l){return Ca(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function IR(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=cI(i.transform,s||null);r!=null&&(n===null&&(n=Bt.empty()),n.set(i.field,r))}return n||null}function im(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Js(i,s,(r,o)=>gR(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vo extends xl{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $i extends xl{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function pI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function sm(t,e,n){const i=new Map;Be(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,l=e.data.field(r.field);i.set(r.field,mR(o,l,n[s]))}return i}function rm(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,pR(r,o,e))}return i}class mI extends xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ER extends xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AR{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&_R(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Qr(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Qr(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=aI();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(s.key)?null:l;const c=hI(o,l);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Te.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(n,i)=>im(n,i))&&Js(this.baseMutations,e.baseMutations,(n,i)=>im(n,i))}}class $d{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Be(e.mutations.length===i.length);let s=function(){return cR}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new $d(e,n,i,s)}}/**
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
 */class wR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var rt,Me;function TR(t){switch(t){default:return Ie();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function gI(t){if(t===void 0)return Xn("GRPC error has no .code"),$.UNKNOWN;switch(t){case rt.OK:return $.OK;case rt.CANCELLED:return $.CANCELLED;case rt.UNKNOWN:return $.UNKNOWN;case rt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case rt.INTERNAL:return $.INTERNAL;case rt.UNAVAILABLE:return $.UNAVAILABLE;case rt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case rt.NOT_FOUND:return $.NOT_FOUND;case rt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case rt.ABORTED:return $.ABORTED;case rt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case rt.DATA_LOSS:return $.DATA_LOSS;default:return Ie()}}(Me=rt||(rt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bR(){return new TextEncoder}/**
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
 */const SR=new Ci([4294967295,4294967295],0);function om(t){const e=bR().encode(t),n=new q_;return n.update(e),new Uint8Array(n.digest())}function am(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ci([n,i],0),new Ci([s,r],0)]}class Wd{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new xr(`Invalid padding: ${n}`);if(i<0)throw new xr(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new xr(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new xr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Ci.fromNumber(this.Te)}de(e,n,i){let s=e.add(n.multiply(Ci.fromNumber(i)));return s.compare(SR)===1&&(s=new Ci([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=om(e),[i,s]=am(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ee(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Wd(r,s,n);return i.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=om(e),[i,s]=am(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class xr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vl{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Vl(Te.min(),s,new Je(De),Jn(),Ne())}}class Fo{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Fo(i,n,Ne(),Ne(),Ne())}}/**
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
 */class Oa{constructor(e,n,i,s){this.Re=e,this.removedTargetIds=n,this.key=i,this.Ve=s}}class yI{constructor(e,n){this.targetId=e,this.me=n}}class _I{constructor(e,n,i=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class lm{constructor(){this.fe=0,this.ge=cm(),this.pe=It.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),n=Ne(),i=Ne();return this.ge.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Ie()}}),new Fo(this.pe,this.ye,e,n,i)}Ce(){this.we=!1,this.ge=cm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class RR{constructor(e){this.Be=e,this.Le=new Map,this.ke=Jn(),this.qe=ha(),this.Qe=ha(),this.Ke=new Je(De)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const i=this.ze(n);switch(e.state){case 0:this.je(n)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.je(n)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.De(e.resumeToken));break;default:Ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((i,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,i=e.me.count,s=this.Ye(n);if(s){const r=s.target;if(Cu(r))if(i===0){const o=new he(r.path);this.We(n,o,Ot.newNoDocument(o,Te.min()))}else Be(i===1);else{const o=this.Ze(n);if(o!==i){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let o,l;try{o=ki(i).toUint8Array()}catch(c){if(c instanceof Q_)return Xs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Wd(o,s,r)}catch(c){return Xs(c instanceof xr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,i){return n.me.count===i-this.rt(e,n.targetId)?0:2}rt(e,n){const i=this.Be.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const o=this.Be.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.We(n,r,null),s++)}),s}it(e){const n=new Map;this.Le.forEach((r,o)=>{const l=this.Ye(o);if(l){if(r.current&&Cu(l.target)){const c=new he(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Ot.newNoDocument(c,e))}r.be&&(n.set(o,r.ve()),r.Ce())}});let i=Ne();this.Qe.forEach((r,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const s=new Vl(e,n,this.Ke,this.ke,i);return this.ke=Jn(),this.qe=ha(),this.Qe=ha(),this.Ke=new Je(De),s}Ue(e,n){if(!this.je(e))return;const i=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,i){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new lm,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ct(De),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(De),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new lm),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function ha(){return new Je(he.comparator)}function cm(){return new Je(he.comparator)}const CR={asc:"ASCENDING",desc:"DESCENDING"},OR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PR={and:"AND",or:"OR"};class NR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pu(t,e){return t.useProto3Json||Pl(e)?e:{value:e}}function Za(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function II(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DR(t,e){return Za(t,e.toTimestamp())}function Rn(t){return Be(!!t),Te.fromTimestamp(function(n){const i=Mi(n);return new lt(i.seconds,i.nanos)}(t))}function Kd(t,e){return Nu(t,e).canonicalString()}function Nu(t,e){const n=function(s){return new et(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function EI(t){const e=et.fromString(t);return Be(bI(e)),e}function Du(t,e){return Kd(t.databaseId,e.path)}function Fc(t,e){const n=EI(e);if(n.get(1)!==t.databaseId.projectId)throw new ue($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ue($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(wI(n))}function AI(t,e){return Kd(t.databaseId,e)}function LR(t){const e=EI(t);return e.length===4?et.emptyPath():wI(e)}function Lu(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wI(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function um(t,e,n){return{name:Du(t,e),fields:n.value.mapValue.fields}}function MR(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(u,f){return u.useProto3Json?(Be(f===void 0||typeof f=="string"),It.fromBase64String(f||"")):(Be(f===void 0||f instanceof Buffer||f instanceof Uint8Array),It.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?$.UNKNOWN:gI(u.code);return new ue(f,u.message||"")}(o);n=new _I(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Fc(t,i.document.name),r=Rn(i.document.updateTime),o=i.document.createTime?Rn(i.document.createTime):Te.min(),l=new Bt({mapValue:{fields:i.document.fields}}),c=Ot.newFoundDocument(s,r,o,l),u=i.targetIds||[],f=i.removedTargetIds||[];n=new Oa(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Fc(t,i.document),r=i.readTime?Rn(i.readTime):Te.min(),o=Ot.newNoDocument(s,r),l=i.removedTargetIds||[];n=new Oa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Fc(t,i.document),r=i.removedTargetIds||[];n=new Oa([],r,s,null)}else{if(!("filter"in e))return Ie();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new vR(s,r),l=i.targetId;n=new yI(l,o)}}return n}function kR(t,e){let n;if(e instanceof Vo)n={update:um(t,e.key,e.value)};else if(e instanceof mI)n={delete:Du(t,e.key)};else if(e instanceof $i)n={update:um(t,e.key,e.data),updateMask:jR(e.fieldMask)};else{if(!(e instanceof ER))return Ie();n={verify:Du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const l=o.transform;if(l instanceof Xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ja)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Ie()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:DR(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Ie()}(t,e.precondition)),n}function xR(t,e){return t&&t.length>0?(Be(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?Rn(s.updateTime):Rn(r);return o.isEqual(Te.min())&&(o=Rn(r)),new yR(o,s.transformResults||[])}(n,e))):[]}function VR(t,e){return{documents:[AI(t,e.path)]}}function FR(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=AI(t,s);const r=function(u){if(u.length!==0)return TI(Nn.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:xs(m.field),direction:BR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Pu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function UR(t){let e=LR(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Be(i===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];n.where&&(r=function(p){const m=vI(p);return m instanceof Nn&&Z_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Ya(Vs(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Pl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,I=p.values||[];return new Qa(I,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,I=p.values||[];return new Qa(I,m)}(n.endAt)),iR(e,s,o,r,l,"F",c,u)}function qR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Vs(n.unaryFilter.field);return at.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Vs(n.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vs(n.unaryFilter.field);return at.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vs(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(i=>vI(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ie()}}(n.compositeFilter.op))}(t):Ie()}function BR(t){return CR[t]}function zR(t){return OR[t]}function GR(t){return PR[t]}function xs(t){return{fieldPath:t.canonicalString()}}function Vs(t){return _t.fromServerFormat(t.fieldPath)}function TI(t){return t instanceof at?function(n){if(n.op==="=="){if(Xp(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NAN"}};if(Yp(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xp(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NOT_NAN"}};if(Yp(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(n.field),op:zR(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const i=n.getFilters().map(s=>TI(s));return i.length===1?i[0]:{compositeFilter:{op:GR(n.op),filters:i}}}(t):Ie()}function jR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wi{constructor(e,n,i,s,r=Te.min(),o=Te.min(),l=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HR{constructor(e){this.ht=e}}function $R(t){const e=UR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ou(e,e.limit,"L"):e}/**
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
 */class WR{constructor(){this.ln=new KR}addToCollectionParentIndex(e,n){return this.ln.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Li.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Li.min())}updateCollectionGroup(e,n,i){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class KR{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new ct(et.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ct(et.comparator)).toArray()}}/**
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
 */const dm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ft{static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(41943040,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);/**
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
 */function fm([t,e],[n,i]){const s=De(t,n);return s===0?De(e,i):s}class QR{constructor(e){this.Gn=e,this.buffer=new ct(fm),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();fm(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class YR{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){se("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fr(n)?se("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await dr(n)}await this.Yn(3e5)})}}class XR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return z.resolve(Ol.oe);const i=new QR(n);return this.Zn.forEachTarget(e,s=>i.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>i.Hn(s))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.Zn.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(dm)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dm):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let i,s,r,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(i=p,l=Date.now(),this.removeTargets(e,i,n))).next(p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,i))).next(p=>(u=Date.now(),Ms()<=Pe.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:p})))}}function JR(t,e){return new XR(t,e)}/**
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
 */class ZR{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?z.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class e0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class t0{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Qr(i.mutation,s,Wt.empty(),lt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Ne()){const s=rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=kr();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=rs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Ne()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,i,s){let r=Jn();const o=Kr(),l=function(){return Kr()}();return n.forEach((c,u)=>{const f=i.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof $i)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Qr(f.mutation,u,f.mutation.getFieldMask(),lt.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new e0(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const i=Kr();let s=new Je((o,l)=>o-l),r=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=i.get(c)||Wt.empty();f=l.applyToLocalView(u,f),i.set(c,f);const p=(s.get(l.batchId)||Ne()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=aI();f.forEach(m=>{if(!r.has(m)){const I=hI(n.get(m),i.get(m));I!==null&&p.set(m,I),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return z.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):z.resolve(rs());let l=-1,c=r;return o.next(u=>z.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(f)?z.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,Ne())).next(f=>({batchId:l,changes:oI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(i=>{let s=kr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const r=n.collectionGroup;let o=kr();return this.indexManager.getCollectionParents(e,r).next(l=>z.forEach(l,c=>{const u=function(p,m){return new Dl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r,s))).next(o=>{r.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Ot.newInvalidDocument(f)))});let l=kr();return o.forEach((c,u)=>{const f=r.get(c);f!==void 0&&Qr(f.mutation,u,Wt.empty(),lt.now()),Ml(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class n0{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return z.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Rn(s.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:$R(s.bundledQuery),readTime:Rn(s.readTime)}}(n)),z.resolve()}}/**
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
 */class i0{constructor(){this.overlays=new Je(he.comparator),this.dr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const i=rs();return z.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.Tt(e,n,r)}),z.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.dr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.dr.delete(i)),z.resolve()}getOverlaysForCollection(e,n,i){const s=rs(),r=n.length+1,o=new he(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Je((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let f=r.get(u.largestBatchId);f===null&&(f=rs(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=rs(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return z.resolve(l)}Tt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.dr.get(s.largestBatchId).delete(i.key);this.dr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new wR(n,i));let r=this.dr.get(n);r===void 0&&(r=Ne(),this.dr.set(n,r)),this.dr.set(n,r.add(i.key))}}/**
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
 */class s0{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
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
 */class Qd{constructor(){this.Er=new ct(dt.Ar),this.Rr=new ct(dt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const i=new dt(e,n);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.gr(new dt(e,n))}pr(e,n){e.forEach(i=>this.removeReference(i,n))}yr(e){const n=new he(new et([])),i=new dt(n,e),s=new dt(n,e+1),r=[];return this.Rr.forEachInRange([i,s],o=>{this.gr(o),r.push(o.key)}),r}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new he(new et([])),i=new dt(n,e),s=new dt(n,e+1);let r=Ne();return this.Rr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new dt(e,0),i=this.Er.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class dt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return he.comparator(e.key,n.key)||De(e.br,n.br)}static Vr(e,n){return De(e.br,n.br)||he.comparator(e.key,n.key)}}/**
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
 */class r0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ct(dt.Ar)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AR(r,n,i,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new dt(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Fr(i),r=s<0?0:s;return z.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new dt(n,0),s=new dt(n,Number.POSITIVE_INFINITY),r=[];return this.vr.forEachInRange([i,s],o=>{const l=this.Cr(o.br);r.push(l)}),z.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ct(De);return n.forEach(s=>{const r=new dt(s,0),o=new dt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([r,o],l=>{i=i.add(l.br)})}),z.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;he.isDocumentKey(r)||(r=r.child(""));const o=new dt(new he(r),0);let l=new ct(De);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),z.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(i=>{const s=this.Cr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Be(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return z.forEach(n.mutations,s=>{const r=new dt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,n){const i=new dt(n,0),s=this.vr.firstAfterOrEqual(i);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class o0{constructor(e){this.Nr=e,this.docs=function(){return new Je(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return z.resolve(i?i.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let i=Jn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ot.newInvalidDocument(s))}),z.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Jn();const o=n.path,l=new he(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xS(kS(f),i)<=0||(s.has(f.key)||Ml(n,f))&&(r=r.insert(f.key,f.mutableCopy()))}return z.resolve(r)}getAllFromCollectionGroup(e,n,i,s){Ie()}Br(e,n){return z.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new a0(this)}getSize(e){return z.resolve(this.size)}}class a0 extends ZR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(i)}),z.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class l0{constructor(e){this.persistence=e,this.Lr=new Ts(n=>zd(n),Gd),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.kr=0,this.qr=new Qd,this.targetCount=0,this.Qr=tr.qn()}forEachTarget(e,n){return this.Lr.forEach((i,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.kr&&(this.kr=n),z.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new tr(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Un(n),z.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Lr.forEach((o,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.Lr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),z.waitFor(r).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const i=this.Lr.get(n)||null;return z.resolve(i)}addMatchingKeys(e,n,i){return this.qr.mr(n,i),z.resolve()}removeMatchingKeys(e,n,i){this.qr.pr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const i=this.qr.Sr(n);return z.resolve(i)}containsKey(e,n){return z.resolve(this.qr.containsKey(n))}}/**
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
 */class SI{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ol(0),this.Ur=!1,this.Ur=!0,this.Wr=new s0,this.referenceDelegate=e(this),this.Gr=new l0(this),this.indexManager=new WR,this.remoteDocumentCache=function(s){return new o0(s)}(i=>this.referenceDelegate.zr(i)),this.serializer=new HR(n),this.jr=new n0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new i0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Kr[e.toKey()];return i||(i=new r0(n,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,i){se("MemoryPersistence","Starting transaction:",e);const s=new c0(this.$r.next());return this.referenceDelegate.Hr(),i(s).next(r=>this.referenceDelegate.Jr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Yr(e,n){return z.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,n)))}}class c0 extends FS{constructor(e){super(),this.currentSequenceNumber=e}}class Yd{constructor(e){this.persistence=e,this.Zr=new Qd,this.Xr=null}static ei(e){return new Yd(e)}get ti(){if(this.Xr)return this.Xr;throw Ie()}addReference(e,n,i){return this.Zr.addReference(i,n),this.ti.delete(i.toString()),z.resolve()}removeReference(e,n,i){return this.Zr.removeReference(i,n),this.ti.add(i.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),z.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.ti.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ti,i=>{const s=he.fromPath(i);return this.ni(e,s).next(r=>{r||n.removeEntry(s,Te.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(i=>{i?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return z.or([()=>z.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class el{constructor(e,n){this.persistence=e,this.ri=new Ts(i=>BS(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=JR(this,n)}static ei(e,n){return new el(e,n)}Hr(){}Jr(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(s=>i+s))}nr(e){let n=0;return this.er(e,i=>{n++}).next(()=>n)}er(e,n){return z.forEach(this.ri,(i,s)=>this.ir(e,i,s).next(r=>r?z.resolve():n(s)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.Br(e,o=>this.ir(e,o,n).next(l=>{l||(i++,r.removeEntry(o,Te.min()))})).next(()=>r.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.ri.set(i,e.currentSequenceNumber),z.resolve()}removeReference(e,n,i){return this.ri.set(i,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),z.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Sa(e.data.value)),n}ir(e,n,i){return z.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return z.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Xd{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Wi=i,this.Gi=s}static zi(e,n){let i=Ne(),s=Ne();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Xd(e,n.fromCache,i,s)}}/**
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
 */class u0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class d0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Hv()?8:US(Pt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,i,s){const r={result:null};return this.Xi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.es(e,n,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new u0;return this.ts(e,n,o).next(l=>{if(r.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>r.result)}ns(e,n,i,s){return i.documentReadCount<this.Ji?(Ms()<=Pe.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),z.resolve()):(Ms()<=Pe.DEBUG&&se("QueryEngine","Query:",ks(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Yi*s?(Ms()<=Pe.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bn(n))):z.resolve())}Xi(e,n){if(tm(n))return z.resolve(null);let i=bn(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ou(n,null,"F"),i=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Ne(...r);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,Ou(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,i,s){return tm(n)||s.isEqual(Te.min())?z.resolve(null):this.Zi.getDocuments(e,i).next(r=>{const o=this.rs(n,r);return this.ss(n,o,i,s)?z.resolve(null):(Ms()<=Pe.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ks(n)),this.os(e,o,n,MS(s,-1)).next(l=>l))})}rs(e,n){let i=new ct(sI(e));return n.forEach((s,r)=>{Ml(e,r)&&(i=i.add(r))}),i}ss(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ts(e,n,i){return Ms()<=Pe.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",ks(n)),this.Zi.getDocumentsMatchingQuery(e,n,Li.min(),i)}os(e,n,i,s){return this.Zi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class f0{constructor(e,n,i,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Je(De),this.cs=new Ts(r=>zd(r),Gd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new t0(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function h0(t,e,n,i){return new f0(t,e,n,i)}async function RI(t,e){const n=Re(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Ps(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],l=[];let c=Ne();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of r){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(i,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function p0(t,e){const n=Re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,m=p.keys();let I=z.resolve();return m.forEach(R=>{I=I.next(()=>f.getEntry(c,R)).next(L=>{const D=u.docVersions.get(R);Be(D!==null),L.version.compareTo(D)<0&&(p.applyToRemoteDocument(L,u),L.isValidDocument()&&(L.setReadTime(u.commitVersion),f.addEntry(L)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let c=Ne();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function CI(t){const e=Re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function m0(t,e){const n=Re(t),i=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(r,f.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(r,f.addedDocuments,p)));let I=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(It.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,i)),s=s.insert(p,I),function(L,D,C){return L.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(m,I,f)&&l.push(n.Gr.updateTargetData(r,I))});let c=Jn(),u=Ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(g0(r,o,e.documentUpdates).next(f=>{c=f.Is,u=f.ds})),!i.isEqual(Te.min())){const f=n.Gr.getLastRemoteSnapshotVersion(r).next(p=>n.Gr.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(f)}return z.waitFor(l).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.us=s,r))}function g0(t,e,n){let i=Ne(),s=Ne();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Jn();return n.forEach((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Te.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):se("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,ds:s}})}function y0(t,e){const n=Re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function _0(t,e){const n=Re(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Gr.getTargetData(i,e).next(r=>r?(s=r,z.resolve(s)):n.Gr.allocateTargetId(i).next(o=>(s=new wi(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Gr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.us.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(i.targetId,i),n.cs.set(e,i.targetId)),i})}async function Mu(t,e,n){const i=Re(t),s=i.us.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fr(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.us=i.us.remove(e),i.cs.delete(s.target)}function hm(t,e,n){const i=Re(t);let s=Te.min(),r=Ne();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=Re(c),m=p.cs.get(f);return m!==void 0?z.resolve(p.us.get(m)):p.Gr.getTargetData(u,f)}(i,o,bn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{r=c})}).next(()=>i._s.getDocumentsMatchingQuery(o,e,n?s:Te.min(),n?r:Ne())).next(l=>(I0(i,oR(e),l),{documents:l,Es:r})))}function I0(t,e,n){let i=t.ls.get(e)||Te.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.ls.set(e,i)}class pm{constructor(){this.activeTargetIds=fR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E0{constructor(){this._o=new pm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,i){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new pm,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class A0{uo(e){}shutdown(){}}/**
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
 */class mm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pa=null;function Uc(){return pa===null?pa=function(){return 268435456+Math.round(2147483648*Math.random())}():pa++,"0x"+pa.toString(16)}/**
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
 */const w0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class v0{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const bt="WebChannelConnection";class T0 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+n.host,this.Mo=`projects/${s}/databases/${r}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Oo(n,i,s,r,o){const l=Uc(),c=this.No(n,i.toUriEncodedString());se("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,r,o),this.Lo(n,c,u,s).then(f=>(se("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Xs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}ko(n,i,s,r,o,l){return this.Oo(n,i,s,r,o)}Bo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ur}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}No(n,i){const s=w0[n];return`${this.Fo}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,i,s){const r=Uc();return new Promise((o,l)=>{const c=new B_;c.setWithCredentials(!0),c.listenOnce(z_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ba.NO_ERROR:const f=c.getResponseJson();se(bt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),o(f);break;case ba.TIMEOUT:se(bt,`RPC '${e}' ${r} timed out`),l(new ue($.DEADLINE_EXCEEDED,"Request time out"));break;case ba.HTTP_ERROR:const p=c.getStatus();if(se(bt,`RPC '${e}' ${r} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const R=function(D){const C=D.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(C)>=0?C:$.UNKNOWN}(I.status);l(new ue(R,I.message))}else l(new ue($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ue($.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{se(bt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(s);se(bt,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",u,i,15)})}qo(e,n,i){const s=Uc(),r=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=H_(),l=j_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Bo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const f=r.join("");se(bt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,I=!1;const R=new v0({Eo:D=>{I?se(bt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(se(bt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),se(bt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Ao:()=>p.close()}),L=(D,C,O)=>{D.listen(C,x=>{try{O(x)}catch(F){setTimeout(()=>{throw F},0)}})};return L(p,Mr.EventType.OPEN,()=>{I||(se(bt,`RPC '${e}' stream ${s} transport opened.`),R.So())}),L(p,Mr.EventType.CLOSE,()=>{I||(I=!0,se(bt,`RPC '${e}' stream ${s} transport closed`),R.Do())}),L(p,Mr.EventType.ERROR,D=>{I||(I=!0,Xs(bt,`RPC '${e}' stream ${s} transport errored:`,D),R.Do(new ue($.UNAVAILABLE,"The operation could not be completed")))}),L(p,Mr.EventType.MESSAGE,D=>{var C;if(!I){const O=D.data[0];Be(!!O);const x=O,F=(x==null?void 0:x.error)||((C=x[0])===null||C===void 0?void 0:C.error);if(F){se(bt,`RPC '${e}' stream ${s} received error:`,F);const j=F.status;let V=function(g){const E=rt[g];if(E!==void 0)return gI(E)}(j),b=F.message;V===void 0&&(V=$.INTERNAL,b="Unknown error status: "+j+" with message "+F.message),I=!0,R.Do(new ue(V,b)),p.close()}else se(bt,`RPC '${e}' stream ${s} received:`,O),R.vo(O)}}),L(l,G_.STAT_EVENT,D=>{D.stat===Tu.PROXY?se(bt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Tu.NOPROXY&&se(bt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.bo()},0),R}}function qc(){return typeof document<"u"?document:null}/**
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
 */function Fl(t){return new NR(t,!0)}/**
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
 */class OI{constructor(e,n,i=1e3,s=1.5,r=6e4){this.li=e,this.timerId=n,this.Qo=i,this.Ko=s,this.$o=r,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-i);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class PI{constructor(e,n,i,s,r,o,l,c){this.li=e,this.Yo=i,this.Zo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new OI(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Xo===n&&this.I_(i,s)},i=>{e(()=>{const s=new ue($.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(s)})})}I_(e,n){const i=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{i(()=>this.d_(s))}),this.stream.onMessage(s=>{i(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class b0 extends PI{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=MR(this.serializer,e),i=function(r){if(!("targetChange"in r))return Te.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Te.min():o.readTime?Rn(o.readTime):Te.min()}(e);return this.listener.R_(n,i)}V_(e){const n={};n.database=Lu(this.serializer),n.addTarget=function(r,o){let l;const c=o.target;if(l=Cu(c)?{documents:VR(r,c)}:{query:FR(r,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=II(r,o.resumeToken);const u=Pu(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Te.min())>0){l.readTime=Za(r,o.snapshotVersion.toTimestamp());const u=Pu(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const i=qR(this.serializer,e);i&&(n.labels=i),this.c_(n)}m_(e){const n={};n.database=Lu(this.serializer),n.removeTarget=e,this.c_(n)}}class S0 extends PI{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=xR(e.writeResults,e.commitTime),i=Rn(e.commitTime);return this.listener.y_(i,n)}w_(){const e={};e.database=Lu(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>kR(this.serializer,i))};this.c_(n)}}/**
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
 */class R0 extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ue($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Oo(e,Nu(n,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ue($.UNKNOWN,r.toString())})}ko(e,n,i,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Nu(n,i),s,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ue($.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class C0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Xn(n),this.C_=!1):se("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class O0{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=r,this.Q_.uo(o=>{i.enqueueAndForget(async()=>{bs(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Re(c);u.k_.add(4),await Uo(u),u.K_.set("Unknown"),u.k_.delete(4),await Ul(u)}(this))})}),this.K_=new C0(i,s)}}async function Ul(t){if(bs(t))for(const e of t.q_)await e(!0)}async function Uo(t){for(const e of t.q_)await e(!1)}function NI(t,e){const n=Re(t);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),tf(n)?ef(n):hr(n).s_()&&Zd(n,e))}function Jd(t,e){const n=Re(t),i=hr(n);n.L_.delete(e),i.s_()&&DI(n,e),n.L_.size===0&&(i.s_()?i.a_():bs(n)&&n.K_.set("Unknown"))}function Zd(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hr(t).V_(e)}function DI(t,e){t.U_.xe(e),hr(t).m_(e)}function ef(t){t.U_=new RR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.L_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),hr(t).start(),t.K_.F_()}function tf(t){return bs(t)&&!hr(t).i_()&&t.L_.size>0}function bs(t){return Re(t).k_.size===0}function LI(t){t.U_=void 0}async function P0(t){t.K_.set("Online")}async function N0(t){t.L_.forEach((e,n)=>{Zd(t,e)})}async function D0(t,e){LI(t),tf(t)?(t.K_.O_(e),ef(t)):t.K_.set("Unknown")}async function L0(t,e,n){if(t.K_.set("Online"),e instanceof _I&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const l of r.targetIds)s.L_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.L_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(i){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await tl(t,i)}else if(e instanceof Oa?t.U_.$e(e):e instanceof yI?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Te.min()))try{const i=await CI(t.localStore);n.compareTo(i)>=0&&await function(r,o){const l=r.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=r.L_.get(u);f&&r.L_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=r.L_.get(c);if(!f)return;r.L_.set(c,f.withResumeToken(It.EMPTY_BYTE_STRING,f.snapshotVersion)),DI(r,c);const p=new wi(f.target,c,u,f.sequenceNumber);Zd(r,p)}),r.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(i){se("RemoteStore","Failed to raise snapshot:",i),await tl(t,i)}}async function tl(t,e,n){if(!fr(e))throw e;t.k_.add(1),await Uo(t),t.K_.set("Offline"),n||(n=()=>CI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Ul(t)})}function MI(t,e){return e().catch(n=>tl(t,n,e))}async function ql(t){const e=Re(t),n=Vi(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;M0(e);)try{const s=await y0(e.localStore,i);if(s===null){e.B_.length===0&&n.a_();break}i=s.batchId,k0(e,s)}catch(s){await tl(e,s)}kI(e)&&xI(e)}function M0(t){return bs(t)&&t.B_.length<10}function k0(t,e){t.B_.push(e);const n=Vi(t);n.s_()&&n.f_&&n.g_(e.mutations)}function kI(t){return bs(t)&&!Vi(t).i_()&&t.B_.length>0}function xI(t){Vi(t).start()}async function x0(t){Vi(t).w_()}async function V0(t){const e=Vi(t);for(const n of t.B_)e.g_(n.mutations)}async function F0(t,e,n){const i=t.B_.shift(),s=$d.from(i,e,n);await MI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ql(t)}async function U0(t,e){e&&Vi(t).f_&&await async function(i,s){if(function(o){return TR(o)&&o!==$.ABORTED}(s.code)){const r=i.B_.shift();Vi(i).__(),await MI(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ql(i)}}(t,e),kI(t)&&xI(t)}async function gm(t,e){const n=Re(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const i=bs(n);n.k_.add(3),await Uo(n),i&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Ul(n)}async function q0(t,e){const n=Re(t);e?(n.k_.delete(2),await Ul(n)):e||(n.k_.add(2),await Uo(n),n.K_.set("Unknown"))}function hr(t){return t.W_||(t.W_=function(n,i,s){const r=Re(n);return r.b_(),new b0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Ro:P0.bind(null,t),mo:N0.bind(null,t),po:D0.bind(null,t),R_:L0.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),tf(t)?ef(t):t.K_.set("Unknown")):(await t.W_.stop(),LI(t))})),t.W_}function Vi(t){return t.G_||(t.G_=function(n,i,s){const r=Re(n);return r.b_(),new S0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:x0.bind(null,t),po:U0.bind(null,t),p_:V0.bind(null,t),y_:F0.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await ql(t)):(await t.G_.stop(),t.B_.length>0&&(se("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
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
 */class nf{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,l=new nf(e,n,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sf(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),fr(t))return new ue($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ws{static emptySet(e){return new Ws(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||he.comparator(n.key,i.key):(n,i)=>he.comparator(n.key,i.key),this.keyedMap=kr(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ym{constructor(){this.z_=new Je(he.comparator)}track(e){const n=e.doc.key,i=this.z_.get(n);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(n,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(n):e.type===1&&i.type===2?this.z_=this.z_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):Ie():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,i)=>{e.push(i)}),e}}class nr{constructor(e,n,i,s,r,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new nr(e,n,Ws.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class B0{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class z0{constructor(){this.queries=_m(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,i){const s=Re(n),r=s.queries;s.queries=_m(),r.forEach((o,l)=>{for(const c of l.J_)c.onError(i)})})(this,new ue($.ABORTED,"Firestore shutting down"))}}function _m(){return new Ts(t=>iI(t),Ll)}async function G0(t,e){const n=Re(t);let i=3;const s=e.query;let r=n.queries.get(s);r?!r.Y_()&&e.Z_()&&(i=2):(r=new B0,i=e.Z_()?0:1);try{switch(i){case 0:r.H_=await n.onListen(s,!0);break;case 1:r.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=sf(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,r),r.J_.push(e),e.ea(n.onlineState),r.H_&&e.ta(r.H_)&&rf(n)}async function j0(t,e){const n=Re(t),i=e.query;let s=3;const r=n.queries.get(i);if(r){const o=r.J_.indexOf(e);o>=0&&(r.J_.splice(o,1),r.J_.length===0?s=e.Z_()?0:1:!r.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function H0(t,e){const n=Re(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const l of o.J_)l.ta(s)&&(i=!0);o.H_=s}}i&&rf(n)}function $0(t,e,n){const i=Re(t),s=i.queries.get(e);if(s)for(const r of s.J_)r.onError(n);i.queries.delete(e)}function rf(t){t.X_.forEach(e=>{e.next()})}var ku,Im;(Im=ku||(ku={})).na="default",Im.Cache="cache";class W0{constructor(e,n,i){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new nr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const i=n!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ku.Cache}}/**
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
 */class VI{constructor(e){this.key=e}}class FI{constructor(e){this.key=e}}class K0{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ne(),this.mutatedKeys=Ne(),this.Va=sI(e),this.ma=new Ws(this.Va)}get fa(){return this.Ea}ga(e,n){const i=n?n.pa:new ym,s=n?n.ma:this.ma;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),I=Ml(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),L=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;m&&I?m.data.isEqual(I.data)?R!==L&&(i.track({type:3,doc:I}),D=!0):this.ya(m,I)||(i.track({type:2,doc:I}),D=!0,(c&&this.Va(I,c)>0||u&&this.Va(I,u)<0)&&(l=!0)):!m&&I?(i.track({type:0,doc:I}),D=!0):m&&!I&&(i.track({type:1,doc:m}),D=!0,(c||u)&&(l=!0)),D&&(I?(o=o.add(I),r=L?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),i.track({type:1,doc:f})}return{ma:o,pa:i,ss:l,mutatedKeys:r}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){const r=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((f,p)=>function(I,R){const L=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return L(I)-L(R)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(i),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new nr(this.query,e.ma,r,o,e.mutatedKeys,c===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ym,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ne(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const n=[];return e.forEach(i=>{this.Ra.has(i)||n.push(new FI(i))}),this.Ra.forEach(i=>{e.has(i)||n.push(new VI(i))}),n}va(e){this.Ea=e.Es,this.Ra=Ne();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return nr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Q0{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class Y0{constructor(e){this.key=e,this.Fa=!1}}class X0{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ts(l=>iI(l),Ll),this.Oa=new Map,this.Na=new Set,this.Ba=new Je(he.comparator),this.La=new Map,this.ka=new Qd,this.qa={},this.Qa=new Map,this.Ka=tr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function J0(t,e,n=!0){const i=jI(t);let s;const r=i.xa.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.Ca()):s=await UI(i,e,n,!0),s}async function Z0(t,e){const n=jI(t);await UI(n,e,!0,!1)}async function UI(t,e,n,i){const s=await _0(t.localStore,bn(e)),r=s.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let l;return i&&(l=await eC(t,e,r,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&NI(t.remoteStore,s),l}async function eC(t,e,n,i,s){t.Ua=(p,m,I)=>async function(L,D,C,O){let x=D.view.ga(C);x.ss&&(x=await hm(L.localStore,D.query,!1).then(({documents:b})=>D.view.ga(b,x)));const F=O&&O.targetChanges.get(D.targetId),j=O&&O.targetMismatches.get(D.targetId)!=null,V=D.view.applyChanges(x,L.isPrimaryClient,F,j);return Am(L,D.targetId,V.ba),V.snapshot}(t,p,m,I);const r=await hm(t.localStore,e,!0),o=new K0(e,r.Es),l=o.ga(r.documents),c=Fo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Am(t,n,u.ba);const f=new Q0(e,n,o);return t.xa.set(e,f),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function tC(t,e,n){const i=Re(t),s=i.xa.get(e),r=i.Oa.get(s.targetId);if(r.length>1)return i.Oa.set(s.targetId,r.filter(o=>!Ll(o,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Mu(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&Jd(i.remoteStore,s.targetId),xu(i,s.targetId)}).catch(dr)):(xu(i,s.targetId),await Mu(i.localStore,s.targetId,!0))}async function nC(t,e){const n=Re(t),i=n.xa.get(e),s=n.Oa.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Jd(n.remoteStore,i.targetId))}async function iC(t,e,n){const i=uC(t);try{const s=await function(o,l){const c=Re(o),u=lt.now(),f=l.reduce((I,R)=>I.add(R.key),Ne());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Jn(),L=Ne();return c.hs.getEntries(I,f).next(D=>{R=D,R.forEach((C,O)=>{O.isValidDocument()||(L=L.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,R)).next(D=>{p=D;const C=[];for(const O of l){const x=IR(O,p.get(O.key).overlayedDocument);x!=null&&C.push(new $i(O.key,x,Y_(x.value.mapValue),Sn.exists(!0)))}return c.mutationQueue.addMutationBatch(I,u,C,l)}).next(D=>{m=D;const C=D.applyToLocalDocumentSet(p,L);return c.documentOverlayCache.saveOverlays(I,D.batchId,C)})}).then(()=>({batchId:m.batchId,changes:oI(p)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Je(De)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(i,s.batchId,n),await qo(i,s.changes),await ql(i.remoteStore)}catch(s){const r=sf(s,"Failed to persist write");n.reject(r)}}async function qI(t,e){const n=Re(t);try{const i=await m0(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.La.get(r);o&&(Be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Be(o.Fa):s.removedDocuments.size>0&&(Be(o.Fa),o.Fa=!1))}),await qo(n,i,e)}catch(i){await dr(i)}}function Em(t,e,n){const i=Re(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.xa.forEach((r,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=Re(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&rf(c)}(i.eventManager,e),s.length&&i.Ma.R_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function sC(t,e,n){const i=Re(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.La.get(e),r=s&&s.key;if(r){let o=new Je(he.comparator);o=o.insert(r,Ot.newNoDocument(r,Te.min()));const l=Ne().add(r),c=new Vl(Te.min(),new Map,new Je(De),o,l);await qI(i,c),i.Ba=i.Ba.remove(r),i.La.delete(e),of(i)}else await Mu(i.localStore,e,!1).then(()=>xu(i,e,n)).catch(dr)}async function rC(t,e){const n=Re(t),i=e.batch.batchId;try{const s=await p0(n.localStore,e);zI(n,i,null),BI(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await qo(n,s)}catch(s){await dr(s)}}async function oC(t,e,n){const i=Re(t);try{const s=await function(o,l){const c=Re(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Be(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(i.localStore,e);zI(i,e,n),BI(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await qo(i,s)}catch(s){await dr(s)}}function BI(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function zI(t,e,n){const i=Re(t);let s=i.qa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.qa[i.currentUser.toKey()]=s}}function xu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Oa.get(e))t.xa.delete(i),n&&t.Ma.Wa(i,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(i=>{t.ka.containsKey(i)||GI(t,i)})}function GI(t,e){t.Na.delete(e.path.canonicalString());const n=t.Ba.get(e);n!==null&&(Jd(t.remoteStore,n),t.Ba=t.Ba.remove(e),t.La.delete(n),of(t))}function Am(t,e,n){for(const i of n)i instanceof VI?(t.ka.addReference(i.key,e),aC(t,i)):i instanceof FI?(se("SyncEngine","Document no longer in limbo: "+i.key),t.ka.removeReference(i.key,e),t.ka.containsKey(i.key)||GI(t,i.key)):Ie()}function aC(t,e){const n=e.key,i=n.path.canonicalString();t.Ba.get(n)||t.Na.has(i)||(se("SyncEngine","New document in limbo: "+n),t.Na.add(i),of(t))}function of(t){for(;t.Na.size>0&&t.Ba.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new he(et.fromString(e)),i=t.Ka.next();t.La.set(i,new Y0(n)),t.Ba=t.Ba.insert(n,i),NI(t.remoteStore,new wi(bn(jd(n.path)),i,"TargetPurposeLimboResolution",Ol.oe))}}async function qo(t,e,n){const i=Re(t),s=[],r=[],o=[];i.xa.isEmpty()||(i.xa.forEach((l,c)=>{o.push(i.Ua(c,e,n).then(u=>{var f;if((u||n)&&i.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Xd.zi(c.targetId,u);r.push(p)}}))}),await Promise.all(o),i.Ma.R_(s),await async function(c,u){const f=Re(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>z.forEach(u,m=>z.forEach(m.Wi,I=>f.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>z.forEach(m.Gi,I=>f.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!fr(p))throw p;se("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const I=f.us.get(m),R=I.snapshotVersion,L=I.withLastLimboFreeSnapshotVersion(R);f.us=f.us.insert(m,L)}}}(i.localStore,r))}async function lC(t,e){const n=Re(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const i=await RI(n.localStore,e);n.currentUser=e,function(r,o){r.Qa.forEach(l=>{l.forEach(c=>{c.reject(new ue($.CANCELLED,o))})}),r.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await qo(n,i.Ts)}}function cC(t,e){const n=Re(t),i=n.La.get(e);if(i&&i.Fa)return Ne().add(i.key);{let s=Ne();const r=n.Oa.get(e);if(!r)return s;for(const o of r){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function jI(t){const e=Re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sC.bind(null,e),e.Ma.R_=H0.bind(null,e.eventManager),e.Ma.Wa=$0.bind(null,e.eventManager),e}function uC(t){const e=Re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oC.bind(null,e),e}class nl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return h0(this.persistence,new d0,e.initialUser,this.serializer)}ja(e){return new SI(Yd.ei,this.serializer)}za(e){return new E0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nl.provider={build:()=>new nl};class dC extends nl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Be(this.persistence.referenceDelegate instanceof el);const i=this.persistence.referenceDelegate.garbageCollector;return new YR(i,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new SI(i=>el.ei(i,n),this.serializer)}}class Vu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Em(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=lC.bind(null,this.syncEngine),await q0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new z0}()}createDatastore(e){const n=Fl(e.databaseInfo.databaseId),i=function(r){return new T0(r)}(e.databaseInfo);return function(r,o,l,c){return new R0(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,l){return new O0(i,s,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Em(this.syncEngine,n,0),function(){return mm.p()?new mm:new A0}())}createSyncEngine(e,n){return function(s,r,o,l,c,u,f){const p=new X0(s,r,o,l,c,u);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const r=Re(s);se("RemoteStore","RemoteStore shutting down."),r.k_.add(5),await Uo(r),r.Q_.shutdown(),r.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Vu.provider={build:()=>new Vu};/**
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
 */class fC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class hC{constructor(e,n,i,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=W_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async o=>{se("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(se("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=sf(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await RI(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pC(t);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>gm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>gm(e.remoteStore,s)),t._onlineComponents=e}async function pC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Xs("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new nl)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await Bc(t,new dC(void 0));return t._offlineComponents}async function HI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await wm(t,t._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await wm(t,new Vu))),t._onlineComponents}function mC(t){return HI(t).then(e=>e.syncEngine)}async function gC(t){const e=await HI(t),n=e.eventManager;return n.onListen=J0.bind(null,e.syncEngine),n.onUnlisten=tC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Z0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nC.bind(null,e.syncEngine),n}function yC(t,e,n={}){const i=new Oi;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const f=new fC({next:m=>{f.eu(),o.enqueueAndForget(()=>j0(r,p));const I=m.docs.has(l);!I&&m.fromCache?u.reject(new ue($.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&c&&c.source==="server"?u.reject(new ue($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new W0(jd(l.path),f,{includeMetadataChanges:!0,ua:!0});return G0(r,p)}(await gC(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function $I(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vm=new Map;/**
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
 */function _C(t,e,n){if(!n)throw new ue($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IC(t,e,n,i){if(e===!0&&i===!0)throw new ue($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tm(t){if(!he.isDocumentKey(t))throw new ue($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function af(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ie()}function ms(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=af(t);throw new ue($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class bm{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ue($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$I((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lf{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bm(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new bS;switch(i.type){case"firstParty":return new OS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ue($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=vm.get(n);i&&(se("ComponentProvider","Removing Datastore"),vm.delete(n),i.terminate())}(this),Promise.resolve()}}function EC(t,e,n,i={}){var s;const r=(t=ms(t,lf))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let l,c;if(typeof i.mockUserToken=="string")l=i.mockUserToken,c=St.MOCK_USER;else{l=Uv(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new ue($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new St(u)}t._authCredentials=new SS(new $_(l,c))}}/**
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
 */class cf{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new cf(this.firestore,e,this._query)}}class Kt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ao(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class Ao extends cf{constructor(e,n,i){super(e,n,jd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new he(e))}withConverter(e){return new Ao(this.firestore,e,this._path)}}function zc(t,e,...n){if(t=ut(t),arguments.length===1&&(e=W_.newId()),_C("doc","path",e),t instanceof lf){const i=et.fromString(e,...n);return Tm(i),new Kt(t,null,new he(i))}{if(!(t instanceof Kt||t instanceof Ao))throw new ue($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(et.fromString(e,...n));return Tm(i),new Kt(t.firestore,t instanceof Ao?t.converter:null,new he(i))}}/**
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
 */class Sm{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new OI(this,"async_queue_retry"),this.fu=()=>{const i=qc();i&&se("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const n=qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Oi;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!fr(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw Xn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ru=!1,i))));return this.gu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=nf.createAndSchedule(this,e,n,i,r=>this.Su(r));return this.Eu.push(s),s}pu(){this.Au&&Ie()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class Bl extends lf{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Sm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sm(e),this._firestoreClient=void 0,await e}}}function AC(t,e){const n=typeof t=="object"?t:Od(),i=typeof t=="string"?t:"(default)",s=ws(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Vv("firestore");r&&EC(s,...r)}return s}function WI(t){if(t._terminated)throw new ue($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||wC(t),t._firestoreClient}function wC(t){var e,n,i;const s=t._freezeSettings(),r=function(l,c,u,f){return new jS(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$I(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new hC(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(It.fromBase64String(e))}catch(n){throw new ue($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ir(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class uf{constructor(e){this._methodName=e}}/**
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
 */class df{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
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
 */class ff{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,e._values)}}/**
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
 */const vC=/^__.*__$/;class TC{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new $i(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vo(e,this.data,n,this.fieldTransforms)}}class KI{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new $i(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function QI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class hf{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Fu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new hf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:i,Nu:!1});return s.Bu(e),s}Lu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:i,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return il(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(QI(this.Mu)&&vC.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class bC{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Fl(e)}$u(e,n,i,s=!1){return new hf({Mu:e,methodName:n,Ku:i,path:_t.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function YI(t){const e=t._freezeSettings(),n=Fl(t._databaseId);return new bC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function SC(t,e,n,i,s,r={}){const o=t.$u(r.merge||r.mergeFields?2:0,e,n,s);pf("Data must be an object, but it was:",o,i);const l=XI(i,o);let c,u;if(r.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=Fu(e,p,n);if(!o.contains(m))throw new ue($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ZI(f,m)||f.push(m)}c=new Wt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new TC(new Bt(l),c,u)}class Gl extends uf{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gl}}function RC(t,e,n,i){const s=t.$u(1,e,n);pf("Data must be an object, but it was:",s,i);const r=[],o=Bt.empty();Hi(i,(c,u)=>{const f=mf(e,c,n);u=ut(u);const p=s.Lu(f);if(u instanceof Gl)r.push(f);else{const m=jl(u,p);m!=null&&(r.push(f),o.set(f,m))}});const l=new Wt(r);return new KI(o,l,s.fieldTransforms)}function CC(t,e,n,i,s,r){const o=t.$u(1,e,n),l=[Fu(e,i,n)],c=[s];if(r.length%2!=0)throw new ue($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)l.push(Fu(e,r[m])),c.push(r[m+1]);const u=[],f=Bt.empty();for(let m=l.length-1;m>=0;--m)if(!ZI(u,l[m])){const I=l[m];let R=c[m];R=ut(R);const L=o.Lu(I);if(R instanceof Gl)u.push(I);else{const D=jl(R,L);D!=null&&(u.push(I),f.set(I,D))}}const p=new Wt(u);return new KI(f,p,o.fieldTransforms)}function jl(t,e){if(JI(t=ut(t)))return pf("Unsupported field value:",e,t),XI(t,e);if(t instanceof uf)return function(i,s){if(!QI(s.Mu))throw s.qu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const l of i){let c=jl(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=ut(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return hR(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=lt.fromDate(i);return{timestampValue:Za(s.serializer,r)}}if(i instanceof lt){const r=new lt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Za(s.serializer,r)}}if(i instanceof df)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ir)return{bytesValue:II(s.serializer,i._byteString)};if(i instanceof Kt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Kd(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ff)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Hd(l.serializer,c)})}}}}}}(i,s);throw s.qu(`Unsupported field value: ${af(i)}`)}(t,e)}function XI(t,e){const n={};return K_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hi(t,(i,s)=>{const r=jl(s,e.Ou(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function JI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof df||t instanceof ir||t instanceof Kt||t instanceof uf||t instanceof ff)}function pf(t,e,n){if(!JI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=af(n);throw i==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+i)}}function Fu(t,e,n){if((e=ut(e))instanceof zl)return e._internalPath;if(typeof e=="string")return mf(t,e);throw il("Field path arguments must be of type string or ",t,!1,void 0,n)}const OC=new RegExp("[~\\*/\\[\\]]");function mf(t,e,n){if(e.search(OC)>=0)throw il(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zl(...e.split("."))._internalPath}catch{throw il(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function il(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new ue($.INVALID_ARGUMENT,l+t+c)}function ZI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class eE{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PC extends eE{data(){return super.data()}}function tE(t,e){return typeof e=="string"?mf(t,e):e instanceof zl?e._internalPath:e._delegate._internalPath}class NC{convertValue(e,n="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Hi(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertVectorValue(e){var n,i,s;const r=(s=(i=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(o=>tt(o.doubleValue));return new ff(r)}convertGeoPoint(e){return new df(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Nl(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const n=Mi(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=et.fromString(e);Be(bI(i));const s=new yo(i.get(1),i.get(3)),r=new he(i.popFirst(5));return s.isEqual(n)||Xn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function DC(t,e,n){let i;return i=t?t.toFirestore(e):e,i}/**
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
 */class LC{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nE extends eE{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new MC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(tE("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class MC extends nE{data(e={}){return super.data(e)}}/**
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
 */function kC(t){t=ms(t,Kt);const e=ms(t.firestore,Bl);return yC(WI(e),t._key).then(n=>FC(e,t,n))}class xC extends NC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function VC(t,e,n){t=ms(t,Kt);const i=ms(t.firestore,Bl),s=DC(t.converter,e);return iE(i,[SC(YI(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Sn.none())])}function Rm(t,e,n,...i){t=ms(t,Kt);const s=ms(t.firestore,Bl),r=YI(s);let o;return o=typeof(e=ut(e))=="string"||e instanceof zl?CC(r,"updateDoc",t._key,e,n,i):RC(r,"updateDoc",t._key,e),iE(s,[o.toMutation(t._key,Sn.exists(!0))])}function iE(t,e){return function(i,s){const r=new Oi;return i.asyncQueue.enqueueAndForget(async()=>iC(await mC(i),s,r)),r.promise}(WI(t),e)}function FC(t,e,n){const i=n.docs.get(e._key),s=new xC(t);return new nE(t,s,e._key,i,new LC(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ur=s})(lr),On(new an("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new Bl(new RS(i.getProvider("auth-internal")),new NS(i.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ue($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(u.options.projectId,f)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),tn(jp,"4.7.6",e),tn(jp,"4.7.6","esm2017")})();const sE="@firebase/installations",gf="0.6.12";/**
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
 */const rE=1e4,oE=`w:${gf}`,aE="FIS_v2",UC="https://firebaseinstallations.googleapis.com/v1",qC=60*60*1e3,BC="installations",zC="Installations";/**
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
 */const GC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gs=new As(BC,zC,GC);function lE(t){return t instanceof un&&t.code.includes("request-failed")}/**
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
 */function cE({projectId:t}){return`${UC}/projects/${t}/installations`}function uE(t){return{token:t.token,requestStatus:2,expiresIn:HC(t.expiresIn),creationTime:Date.now()}}async function dE(t,e){const i=(await e.json()).error;return gs.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function fE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function jC(t,{refreshToken:e}){const n=fE(t);return n.append("Authorization",$C(e)),n}async function hE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HC(t){return Number(t.replace("s","000"))}function $C(t){return`${aE} ${t}`}/**
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
 */async function WC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=cE(t),s=fE(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:aE,appId:t.appId,sdkVersion:oE},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await hE(()=>fetch(i,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:uE(u.authToken)}}else throw await dE("Create Installation",c)}/**
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
 */function pE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function KC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const QC=/^[cdef][\w-]{21}$/,Uu="";function YC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=XC(t);return QC.test(n)?n:Uu}catch{return Uu}}function XC(t){return KC(t).substr(0,22)}/**
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
 */function Hl(t){return`${t.appName}!${t.appId}`}/**
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
 */const mE=new Map;function gE(t,e){const n=Hl(t);yE(n,e),JC(n,e)}function yE(t,e){const n=mE.get(t);if(n)for(const i of n)i(e)}function JC(t,e){const n=ZC();n&&n.postMessage({key:t,fid:e}),eO()}let os=null;function ZC(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=t=>{yE(t.data.key,t.data.fid)}),os}function eO(){mE.size===0&&os&&(os.close(),os=null)}/**
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
 */const tO="firebase-installations-database",nO=1,ys="firebase-installations-store";let Gc=null;function yf(){return Gc||(Gc=e_(tO,nO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}})),Gc}async function sl(t,e){const n=Hl(t),s=(await yf()).transaction(ys,"readwrite"),r=s.objectStore(ys),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&gE(t,e.fid),e}async function _E(t){const e=Hl(t),i=(await yf()).transaction(ys,"readwrite");await i.objectStore(ys).delete(e),await i.done}async function $l(t,e){const n=Hl(t),s=(await yf()).transaction(ys,"readwrite"),r=s.objectStore(ys),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&gE(t,l.fid),l}/**
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
 */async function _f(t){let e;const n=await $l(t.appConfig,i=>{const s=iO(i),r=sO(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Uu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iO(t){const e=t||{fid:YC(),registrationStatus:0};return IE(e)}function sO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(gs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=rO(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oO(t)}:{installationEntry:e}}async function rO(t,e){try{const n=await WC(t,e);return sl(t.appConfig,n)}catch(n){throw lE(n)&&n.customData.serverCode===409?await _E(t.appConfig):await sl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function oO(t){let e=await Cm(t.appConfig);for(;e.registrationStatus===1;)await pE(100),e=await Cm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await _f(t);return i||n}return e}function Cm(t){return $l(t,e=>{if(!e)throw gs.create("installation-not-found");return IE(e)})}function IE(t){return aO(t)?{fid:t.fid,registrationStatus:0}:t}function aO(t){return t.registrationStatus===1&&t.registrationTime+rE<Date.now()}/**
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
 */async function lO({appConfig:t,heartbeatServiceProvider:e},n){const i=cO(t,n),s=jC(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:oE,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await hE(()=>fetch(i,l));if(c.ok){const u=await c.json();return uE(u)}else throw await dE("Generate Auth Token",c)}function cO(t,{fid:e}){return`${cE(t)}/${e}/authTokens:generate`}/**
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
 */async function If(t,e=!1){let n;const i=await $l(t.appConfig,r=>{if(!EE(r))throw gs.create("not-registered");const o=r.authToken;if(!e&&fO(o))return r;if(o.requestStatus===1)return n=uO(t,e),r;{if(!navigator.onLine)throw gs.create("app-offline");const l=pO(r);return n=dO(t,l),l}});return n?await n:i.authToken}async function uO(t,e){let n=await Om(t.appConfig);for(;n.authToken.requestStatus===1;)await pE(100),n=await Om(t.appConfig);const i=n.authToken;return i.requestStatus===0?If(t,e):i}function Om(t){return $l(t,e=>{if(!EE(e))throw gs.create("not-registered");const n=e.authToken;return mO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dO(t,e){try{const n=await lO(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await sl(t.appConfig,i),n}catch(n){if(lE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _E(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sl(t.appConfig,i)}throw n}}function EE(t){return t!==void 0&&t.registrationStatus===2}function fO(t){return t.requestStatus===2&&!hO(t)}function hO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qC}function pO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mO(t){return t.requestStatus===1&&t.requestTime+rE<Date.now()}/**
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
 */async function gO(t){const e=t,{installationEntry:n,registrationPromise:i}=await _f(e);return i?i.catch(console.error):If(e).catch(console.error),n.fid}/**
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
 */async function yO(t,e=!1){const n=t;return await _O(n),(await If(n,e)).token}async function _O(t){const{registrationPromise:e}=await _f(t);e&&await e}/**
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
 */function IO(t){if(!t||!t.options)throw jc("App Configuration");if(!t.name)throw jc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw jc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function jc(t){return gs.create("missing-app-config-values",{valueName:t})}/**
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
 */const AE="installations",EO="installations-internal",AO=t=>{const e=t.getProvider("app").getImmediate(),n=IO(e),i=ws(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},wO=t=>{const e=t.getProvider("app").getImmediate(),n=ws(e,AE).getImmediate();return{getId:()=>gO(n),getToken:s=>yO(n,s)}};function vO(){On(new an(AE,AO,"PUBLIC")),On(new an(EO,wO,"PRIVATE"))}vO();tn(sE,gf);tn(sE,gf,"esm2017");/**
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
 */const rl="analytics",TO="firebase_id",bO="origin",SO=60*1e3,RO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ef="https://www.googletagmanager.com/gtag/js";/**
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
 */const zt=new bl("@firebase/analytics");/**
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
 */const CO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qt=new As("analytics","Analytics",CO);/**
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
 */function OO(t){if(!t.startsWith(Ef)){const e=Qt.create("invalid-gtag-resource",{gtagURL:t});return zt.warn(e.message),""}return t}function wE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function PO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function NO(t,e){const n=PO("firebase-js-sdk-policy",{createScriptURL:OO}),i=document.createElement("script"),s=`${Ef}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function DO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function LO(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await wE(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){zt.error(l)}t("config",s,r)}async function MO(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await wE(n);for(const c of o){const u=l.find(p=>p.measurementId===c),f=u&&e[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){zt.error(r)}}function kO(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[l,c]=o;await MO(t,e,n,l,c)}else if(r==="config"){const[l,c]=o;await LO(t,e,n,i,l,c)}else if(r==="consent"){const[l,c]=o;t("consent",l,c)}else if(r==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){zt.error(l)}}return s}function xO(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=kO(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function VO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ef)&&n.src.includes(t))return n;return null}/**
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
 */const FO=30,UO=1e3;class qO{constructor(e={},n=UO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vE=new qO;function BO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function zO(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:BO(i)},r=RO.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function GO(t,e=vE,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Qt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new $O;return setTimeout(async()=>{l.abort()},SO),TE({appId:i,apiKey:s,measurementId:r},o,l,e)}async function TE(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=vE){var r;const{appId:o,measurementId:l}=t;try{await jO(i,e)}catch(c){if(l)return zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await zO(t);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!HO(u)){if(s.deleteThrottleMetadata(o),l)return zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw c}const f=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?mp(n,s.intervalMillis,FO):mp(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,p),zt.debug(`Calling attemptFetch again in ${f} millis`),TE(t,p,i,s)}}function jO(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HO(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class $O{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function WO(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
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
 */async function KO(){if(Sd())try{await Rd()}catch(t){return zt.warn(Qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return zt.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function QO(t,e,n,i,s,r,o){var l;const c=GO(t);c.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&zt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>zt.error(I)),e.push(c);const u=KO().then(I=>{if(I)return i.getId()}),[f,p]=await Promise.all([c,u]);VO(r)||NO(r,f.measurementId),s("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[bO]="firebase",m.update=!0,p!=null&&(m[TO]=p),s("config",f.measurementId,m),f.measurementId}/**
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
 */class YO{constructor(e){this.app=e}_delete(){return delete Yr[this.app.options.appId],Promise.resolve()}}let Yr={},Pm=[];const Nm={};let Hc="dataLayer",XO="gtag",Dm,bE,Lm=!1;function JO(){const t=[];if(bd()&&t.push("This is a browser extension environment."),Xy()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});zt.warn(n.message)}}function ZO(t,e,n){JO();const i=t.options.appId;if(!i)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(Yr[i]!=null)throw Qt.create("already-exists",{id:i});if(!Lm){DO(Hc);const{wrappedGtag:r,gtagCore:o}=xO(Yr,Pm,Nm,Hc,XO);bE=r,Dm=o,Lm=!0}return Yr[i]=QO(t,Pm,Nm,e,Dm,Hc,n),new YO(t)}function eP(t=Od()){t=ut(t);const e=ws(t,rl);return e.isInitialized()?e.getImmediate():tP(t)}function tP(t,e={}){const n=ws(t,rl);if(n.isInitialized()){const s=n.getImmediate();if(fo(e,n.getOptions()))return s;throw Qt.create("already-initialized")}return n.initialize({options:e})}async function nP(){if(bd()||!Xy()||!Sd())return!1;try{return await Rd()}catch{return!1}}function iP(t,e,n,i){t=ut(t),WO(bE,Yr[t.app.options.appId],e,n,i).catch(s=>zt.error(s))}const Mm="@firebase/analytics",km="0.10.11";function sP(){On(new an(rl,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ZO(i,s,n)},"PUBLIC")),On(new an("analytics-internal",t,"PRIVATE")),tn(Mm,km),tn(Mm,km,"esm2017");function t(e){try{const n=e.getProvider(rl).getImmediate();return{logEvent:(i,s,r)=>iP(n,i,s,r)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}sP();const rP={apiKey:"AIzaSyA-U1ASN2yTDfutUHqblUO1HMyyvLhOBg4",authDomain:"mediquix-fbc0b.firebaseapp.com",projectId:"mediquix-fbc0b",storageBucket:"mediquix-fbc0b.firebasestorage.app",messagingSenderId:"830867953772",appId:"1:830867953772:web:3ce4a6166c55f49b0aa049",measurementId:"G-Q35EFETSY8"},Af=t_(rP);nP().then(t=>{t?(eP(Af),console.log("Firebase Analytics initialized.")):console.warn("Firebase Analytics is not supported in this environment.")}).catch(t=>{console.error("Erro ao inicializar o Analytics:",t)});const Xr=vS(Af),$c=AC(Af);cb(Xr,N_).then(()=>{console.log("Auth persistence set to local.")}).catch(t=>{console.error("Error setting auth persistence:",t)});const oP=t=>{fb(Xr,e=>{e?(console.log("User is logged in."),t(e)):(console.log("No user is logged in."),t(null))})},us=vl("settings",{state:()=>({selectedSpecialty:"all",selectedDifficulty:"all"}),actions:{setSpecialty(t){this.selectedSpecialty=t},setDifficulty(t){this.selectedDifficulty=t}}}),SE=vl("auth",{state:()=>({user:null,initialized:!1}),getters:{userSettings:t=>t.user&&t.user.settings?t.user.settings:null},actions:{initAuthState(){oP(t=>{this.user=t,this.initialized=!0,t&&this.fetchUserSettings()})},async signup(t,e){try{const n=await ab(Xr,t,e);this.user=n.user;const i={username:t.split("@")[0],email:t,custom_vocabulary:[],default_difficulty:1,default_speciality:0};await VC(zc($c,"users",this.user.uid),i),this.user.settings=i;const s=us();s.setSpecialty(i.default_speciality),s.setDifficulty(i.default_difficulty)}catch(n){throw console.error("Erro no signup:",n.message),n}},async login(t,e){try{const n=await lb(Xr,t,e);this.user=n.user,console.log("this.user",this.user),await this.fetchUserSettings()}catch(n){throw console.error("Erro no login:",n.message),n}},async logout(){try{await hb(Xr),this.user=null}catch(t){throw console.error("Erro no logout:",t.message),t}},async fetchUserSettings(){try{const t=zc($c,"users",this.user.uid),e=await kC(t);if(console.log("docSnap",e),e.exists()){let n=e.data();console.log("settingsData",n);const i={username:this.user.email.split("@")[0],email:this.user.email,default_difficulty:1,default_speciality:0,custom_vocabulary:[]};let s=!1;for(const o in i)o in n||(n[o]=i[o],s=!0);s&&await Rm(t,n),this.user.settings=n,n.username&&(this.user.username=n.username);const r=us();r.setSpecialty(n.default_speciality??"all"),r.setDifficulty(n.default_difficulty??"all")}}catch(t){console.error("Erro fetching user settings:",t.message)}},async updateUserSettings(t){try{const e=zc($c,"users",this.user.uid);await Rm(e,t),this.user.settings={...this.user.settings,...t},t.username&&(this.user.username=t.username);const n=us();n.setSpecialty(t.default_speciality??n.selectedSpecialty),n.setDifficulty(t.default_difficulty??n.selectedDifficulty)}catch(e){throw console.error("Erro updating user settings:",e.message),e}}}}),RE=["Anatomia","Fisiologia","Biologia Celular","Histologia","Neurologia","Hematologia","Endocrinologia","Cardiologia","Pneumologia","Gastroenterologia","Nefrologia","Oncologia","Dermatologia","Psiquiatria","Obstetrícia","Ginecologia","Pediatria","Ortopedia","Radiologia","Cirurgia","Infectologia","Imunologia","Patologia","Anestesiologia","Hepatologia","Emergência Médica","Farmacologia","Genética","Microbiologia","Bioquímica"],aP=[{word:"AAS",clue:"Sigla para ácido acetilsalicílico.",specialties:[26,7],difficulty:1},{word:"ABASIA",clue:"Incapacidade de andar devido à falta de coordenação muscular.",specialties:[4,17],difficulty:2},{word:"ABDUÇÃO",clue:"Movimento que afasta um membro do plano médio do corpo.",specialties:[1,17],difficulty:1},{word:"ABCESSO",clue:"Acúmulo de pus em uma cavidade formada por tecido destruído.",specialties:[19,20],difficulty:1},{word:"PERIOSTEO",clue:"Membrana que reveste os ossos.",specialties:[0],difficulty:2},{word:"SARCÔMERO",clue:"Unidade funcional do músculo esquelético.",specialties:[0],difficulty:3},{word:"SINOVIAL",clue:"Tipo de articulação móvel com líquido lubrificante.",specialties:[0],difficulty:2},{word:"MENISCO",clue:"Estrutura cartilaginosa no joelho.",specialties:[0,17],difficulty:2},{word:"FÁSCIA",clue:"Tecido conjuntivo que envolve músculos.",specialties:[0],difficulty:3},{word:"OSMOSE",clue:"Movimento de água através de uma membrana semipermeável.",specialties:[1],difficulty:1},{word:"NEFRON",clue:"Unidade funcional do rim.",specialties:[1,10],difficulty:2},{word:"POTENCIAL DE AÇÃO",clue:"Impulso elétrico em neurônios.",specialties:[1,4],difficulty:2},{word:"SISTOLE",clue:"Fase de contração do coração.",specialties:[1,7],difficulty:2},{word:"DIASTOLE",clue:"Fase de relaxamento do coração.",specialties:[1,7],difficulty:2},{word:"LISOSSOMO",clue:"Organela que realiza a digestão intracelular.",specialties:[2],difficulty:2},{word:"CITOESQUELETO",clue:"Estrutura que dá suporte à célula.",specialties:[2],difficulty:2},{word:"APARELHO DE GOLGI",clue:"Organela envolvida na modificação de proteínas.",specialties:[2],difficulty:2},{word:"ENDOCITOSE",clue:"Processo de entrada de materiais na célula.",specialties:[2],difficulty:3},{word:"EXOCITOSE",clue:"Processo de liberação de materiais da célula.",specialties:[2],difficulty:3},{word:"TECIDO EPITELIAL",clue:"Revestimento interno e externo do corpo.",specialties:[3],difficulty:1},{word:"TECIDO CONJUNTIVO",clue:"Tecido que suporta e conecta outros tecidos.",specialties:[3],difficulty:1},{word:"TECIDO MUSCULAR",clue:"Tecido responsável pelo movimento.",specialties:[3],difficulty:1},{word:"TECIDO NERVOSO",clue:"Tecido que transmite impulsos elétricos.",specialties:[3],difficulty:1},{word:"FIBROBLASTO",clue:"Célula que produz fibras no tecido conjuntivo.",specialties:[3],difficulty:2},{word:"ASTRÓCITO",clue:"Célula glial do sistema nervoso central.",specialties:[4],difficulty:3},{word:"MICROGLIA",clue:"Células imunológicas do sistema nervoso.",specialties:[4,21],difficulty:3},{word:"ESCLEROSE MÚLTIPLA",clue:"Doença autoimune que afeta a mielina.",specialties:[4,21],difficulty:2},{word:"NEUROTRANSMISSOR",clue:"Substância que transmite sinais entre neurônios.",specialties:[4],difficulty:2},{word:"SINAPSE QUÍMICA",clue:"Comunicação entre neurônios via neurotransmissores.",specialties:[4],difficulty:2},{word:"FIBRINOGÊNIO",clue:"Proteína plasmática essencial na coagulação.",specialties:[5],difficulty:3},{word:"HEMATOPOIESE",clue:"Formação de células sanguíneas na medula óssea.",specialties:[5],difficulty:2},{word:"HEMOGLOBINA",clue:"Proteína nos glóbulos vermelhos que transporta oxigênio.",specialties:[5],difficulty:1},{word:"HEMÓLISE",clue:"Destruição de glóbulos vermelhos.",specialties:[5],difficulty:2},{word:"PLAQUETA",clue:"Fragmento celular envolvido na coagulação.",specialties:[5],difficulty:1},{word:"GLÂNDULA PITUITÁRIA",clue:"Glândula mestre que regula outras glândulas.",specialties:[6],difficulty:2},{word:"GLÂNDULA SUPRARRENAL",clue:"Glândula que produz adrenalina e cortisol.",specialties:[6],difficulty:2},{word:"GLÂNDULA TIREOIDE",clue:"Glândula que regula o metabolismo.",specialties:[6],difficulty:1},{word:"PARATORMÔNIO",clue:"Hormônio que regula o cálcio no sangue.",specialties:[6],difficulty:3},{word:"MELATONINA",clue:"Hormônio envolvido no ciclo sono-vigília.",specialties:[6],difficulty:2},{word:"ELETROCARDIOGRAMA",clue:"Exame que registra a atividade elétrica do coração.",specialties:[7,18],difficulty:2},{word:"CATETERISMO",clue:"Procedimento para examinar vasos cardíacos.",specialties:[7],difficulty:2},{word:"ANGIOPLASTIA",clue:"Procedimento para desobstruir artérias coronárias.",specialties:[7],difficulty:2},{word:"ENDOCARDITE",clue:"Inflamação do revestimento interno do coração.",specialties:[7,20],difficulty:3},{word:"PERICARDITE",clue:"Inflamação do pericárdio.",specialties:[7,20],difficulty:3},{word:"BRONQUIECTASIA",clue:"Dilatação anormal dos brônquios.",specialties:[8],difficulty:3},{word:"FIBROSE PULMONAR",clue:"Cicatrização do tecido pulmonar.",specialties:[8],difficulty:2},{word:"APNEIA",clue:"Interrupção temporária da respiração.",specialties:[8],difficulty:1},{word:"ESPIRÔMETRIA",clue:"Exame que mede volumes pulmonares.",specialties:[8],difficulty:2},{word:"HEMOPTISE",clue:"Expectoração de sangue pelo trato respiratório.",specialties:[8],difficulty:3},{word:"COLITE",clue:"Inflamação do cólon.",specialties:[9],difficulty:2},{word:"ENTERITE",clue:"Inflamação do intestino delgado.",specialties:[9],difficulty:2},{word:"CONSTIPAÇÃO",clue:"Dificuldade para evacuar.",specialties:[9],difficulty:1},{word:"DIARRÉIA",clue:"Evacuações frequentes e líquidas.",specialties:[9],difficulty:1},{word:"HEMORRÓIDA",clue:"Dilatação das veias anais.",specialties:[9],difficulty:1},{word:"UREMIA",clue:"Acúmulo de ureia no sangue.",specialties:[10],difficulty:2},{word:"POLACIÚRIA",clue:"Aumento da frequência urinária.",specialties:[10],difficulty:2},{word:"ANÚRIA",clue:"Ausência de produção de urina.",specialties:[10],difficulty:2},{word:"OLIGÚRIA",clue:"Redução do volume urinário.",specialties:[10],difficulty:2},{word:"PIONEFROSE",clue:"Acúmulo de pus nos rins.",specialties:[10,20],difficulty:3},{word:"APLASIA",clue:"Falha no desenvolvimento de um órgão.",specialties:[11,22],difficulty:3},{word:"NEOPLASIA",clue:"Crescimento anormal de células.",specialties:[11],difficulty:2},{word:"CITOLOGIA",clue:"Estudo das células.",specialties:[11,2],difficulty:2},{word:"ONCOGENE",clue:"Gene que pode causar câncer.",specialties:[11,27],difficulty:3},{word:"QUIMIOTERAPIA",clue:"Tratamento com drogas anticancerígenas.",specialties:[11,26],difficulty:2},{word:"ALOPECIA",clue:"Perda de cabelo.",specialties:[12],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação da pele.",specialties:[12],difficulty:2},{word:"MICOSE",clue:"Infecção fúngica na pele.",specialties:[12,28],difficulty:1},{word:"DERMATOFITOSE",clue:"Infecção cutânea por fungos dermatófitos.",specialties:[12,28],difficulty:3},{word:"HERPES",clue:"Infecção viral com lesões na pele.",specialties:[12,20],difficulty:1},{word:"TRANSTORNO OBSESSIVO COMPULSIVO",clue:"Distúrbio com pensamentos obsessivos e ações repetitivas.",specialties:[13],difficulty:3},{word:"AUTISMO",clue:"Transtorno do desenvolvimento que afeta comunicação.",specialties:[13],difficulty:2},{word:"DEMÊNCIA",clue:"Declínio progressivo das funções cognitivas.",specialties:[13],difficulty:2},{word:"DELÍRIO",clue:"Crença falsa mantida apesar de evidências contrárias.",specialties:[13],difficulty:2},{word:"TRANSTORNO DE PÂNICO",clue:"Crises súbitas de medo intenso.",specialties:[13],difficulty:2},{word:"PLACENTA",clue:"Órgão que conecta mãe e feto.",specialties:[14],difficulty:1},{word:"PRÉ-ECLÂMPSIA",clue:"Complicação da gravidez com hipertensão.",specialties:[14],difficulty:2},{word:"AMNIOSSESE",clue:"Procedimento para coletar líquido amniótico.",specialties:[14],difficulty:3},{word:"MASTITE",clue:"Inflamação da mama.",specialties:[15],difficulty:2},{word:"CLIMATÉRIO",clue:"Transição para a menopausa.",specialties:[15],difficulty:2},{word:"FONTANELA",clue:"Área mole no crânio de bebês.",specialties:[16],difficulty:2},{word:"ICTERÍCIA NEONATAL",clue:"Amarelecimento da pele em recém-nascidos.",specialties:[16],difficulty:2},{word:"DESIDRATAÇÃO",clue:"Perda excessiva de líquidos corporais.",specialties:[16],difficulty:1},{word:"ESCARLATINA",clue:"Doença bacteriana com febre e erupções.",specialties:[16,20],difficulty:3},{word:"SÍNDROME DE DOWN",clue:"Trissomia do cromossomo 21.",specialties:[16,27],difficulty:2},{word:"TORÇÃO",clue:"Lesão causada por rotação excessiva.",specialties:[17],difficulty:1},{word:"LUXAÇÃO",clue:"Deslocamento de um osso da articulação.",specialties:[17],difficulty:2},{word:"TENDINITE",clue:"Inflamação de um tendão.",specialties:[17],difficulty:1},{word:"BURSITE",clue:"Inflamação da bursa articular.",specialties:[17],difficulty:2},{word:"CIFOSE",clue:"Curvatura excessiva da coluna torácica.",specialties:[17],difficulty:2},{word:"CINTILOGRAFIA",clue:"Exame que usa substâncias radioativas.",specialties:[18],difficulty:3},{word:"PET SCAN",clue:"Tomografia por emissão de pósitrons.",specialties:[18],difficulty:3},{word:"CONTRASTE",clue:"Substância usada para melhorar imagens radiológicas.",specialties:[18],difficulty:2},{word:"ANGIOGRAFIA",clue:"Exame dos vasos sanguíneos.",specialties:[18],difficulty:2},{word:"RADIAÇÃO IONIZANTE",clue:"Energia que pode remover elétrons de átomos.",specialties:[18],difficulty:3},{word:"LAPAROTOMIA",clue:"Abertura cirúrgica da cavidade abdominal.",specialties:[19],difficulty:2},{word:"TORACOTOMIA",clue:"Abertura cirúrgica da cavidade torácica.",specialties:[19],difficulty:2},{word:"COLOSTOMIA",clue:"Abertura do cólon na parede abdominal.",specialties:[19],difficulty:3},{word:"HEMOSTASIA",clue:"Parada de um sangramento.",specialties:[19],difficulty:2},{word:"DEBRIDAMENTO",clue:"Remoção de tecido morto ou infectado.",specialties:[19],difficulty:2},{word:"EPIDEMIA",clue:"Surto de doença em uma região.",specialties:[20],difficulty:1},{word:"PANDEMIA",clue:"Epidemia que se espalha globalmente.",specialties:[20],difficulty:1},{word:"ENDÊMICO",clue:"Doença presente constantemente em uma região.",specialties:[20],difficulty:2},{word:"ZOONOSE",clue:"Doença transmissível de animais para humanos.",specialties:[20],difficulty:2},{word:"QUARENTENA",clue:"Isolamento para prevenir a propagação de doenças.",specialties:[20],difficulty:1},{word:"GLOBULINA",clue:"Proteína plasmática do sangue.",specialties:[5,29],difficulty:2},{word:"FAGOCITOSE",clue:"Processo de ingestão de partículas por células.",specialties:[2,21],difficulty:2},{word:"ANTICORPO",clue:"Proteína produzida pelo sistema imunológico.",specialties:[21,5],difficulty:1},{word:"HORMÔNIO",clue:"Substância química que regula funções no organismo.",specialties:[6,1],difficulty:1},{word:"LINFOCITO",clue:"Tipo de glóbulo branco importante na imunidade.",specialties:[5,21],difficulty:2},{word:"PROTEASE",clue:"Enzima que digere proteínas.",specialties:[29,9],difficulty:2},{word:"GLICÓLISE",clue:"Via metabólica que quebra glicose.",specialties:[29,1],difficulty:3},{word:"HEPATÓCITO",clue:"Célula funcional do fígado.",specialties:[9,24],difficulty:2},{word:"TRIGLICERÍDEO",clue:"Tipo de gordura encontrada no sangue.",specialties:[29,7],difficulty:2},{word:"QUERATINA",clue:"Proteína encontrada em cabelos e unhas.",specialties:[12,29],difficulty:1},{word:"VACINA",clue:"Preparação que estimula a resposta imune.",specialties:[21,26],difficulty:1},{word:"ENZIMA",clue:"Proteína que acelera reações químicas.",specialties:[29],difficulty:1},{word:"NEURITE",clue:"Inflamação de um nervo.",specialties:[4,20],difficulty:2},{word:"ALERGIA",clue:"Resposta exagerada do sistema imunológico.",specialties:[21,12],difficulty:1},{word:"ESPLENOMEGALIA",clue:"Aumento do baço.",specialties:[5,21],difficulty:3},{word:"GASTRINA",clue:"Hormônio que estimula a secreção gástrica.",specialties:[6,9],difficulty:2},{word:"PEPSINA",clue:"Enzima que digere proteínas no estômago.",specialties:[29,9],difficulty:2},{word:"CELULITE",clue:"Infecção bacteriana da pele e tecidos subcutâneos.",specialties:[12,20],difficulty:2},{word:"SEROTONINA",clue:"Neurotransmissor que regula humor.",specialties:[4,13],difficulty:2},{word:"SISTEMA LÍMBICO",clue:"Conjunto de estruturas cerebrais relacionadas às emoções.",specialties:[4,13],difficulty:3},{word:"FÍGADO",clue:"Órgão responsável por diversas funções metabólicas.",specialties:[9,24],difficulty:1},{word:"PANCREAS",clue:"Órgão que produz insulina e enzimas digestivas.",specialties:[6,9],difficulty:1},{word:"TESTOSTERONA",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:1},{word:"ESTROGÊNIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"CATECOLAMINA",clue:"Hormônios como adrenalina e noradrenalina.",specialties:[6,1],difficulty:2},{word:"MUTAÇÃO",clue:"Alteração no material genético.",specialties:[27,11],difficulty:2},{word:"CARCINOGÊNESE",clue:"Processo de formação do câncer.",specialties:[11,22],difficulty:3},{word:"HEMATOCRITO",clue:"Percentual de glóbulos vermelhos no sangue.",specialties:[5],difficulty:2},{word:"BILIRRUBINA",clue:"Pigmento resultante da degradação de hemoglobina.",specialties:[5,24],difficulty:2},{word:"ANABOLISMO",clue:"Processo de construção de moléculas complexas.",specialties:[1,29],difficulty:2},{word:"CATABOLISMO",clue:"Processo de quebra de moléculas complexas.",specialties:[1,29],difficulty:2},{word:"PLASMA",clue:"Parte líquida do sangue.",specialties:[5],difficulty:1},{word:"SÍNDROME METABÓLICA",clue:"Conjunto de fatores de risco cardiovascular.",specialties:[7,6],difficulty:3},{word:"HIPOTIREOIDISMO",clue:"Produção insuficiente de hormônios tireoidianos.",specialties:[6],difficulty:2},{word:"HIPERTIREOIDISMO",clue:"Produção excessiva de hormônios tireoidianos.",specialties:[6],difficulty:2},{word:"FARINGITE",clue:"Inflamação da faringe.",specialties:[8,20],difficulty:1},{word:"LARINGITE",clue:"Inflamação da laringe.",specialties:[8,20],difficulty:1},{word:"BRADICARDIA",clue:"Frequência cardíaca abaixo do normal.",specialties:[7],difficulty:2},{word:"EDEMA",clue:"Acúmulo de líquido nos tecidos.",specialties:[10,7],difficulty:1},{word:"CHOQUE",clue:"Insuficiência circulatória aguda.",specialties:[25,7],difficulty:2},{word:"HEMOSTASIA",clue:"Processo de parada de sangramento.",specialties:[5,19],difficulty:2},{word:"ANGIOGÊNESE",clue:"Formação de novos vasos sanguíneos.",specialties:[22,11],difficulty:3},{word:"TROMBOSE",clue:"Formação de coágulo dentro de um vaso sanguíneo.",specialties:[5,7],difficulty:2},{word:"EMBOLIA",clue:"Obstrução de vaso por substância estranha.",specialties:[7,20],difficulty:2},{word:"ANAFILAXIA",clue:"Reação alérgica grave e generalizada.",specialties:[21,25],difficulty:2},{word:"PLASMÓCITO",clue:"Célula que produz anticorpos.",specialties:[5,21],difficulty:3},{word:"ELETROLÍTICO",clue:"Referente a íons em solução corporal.",specialties:[1,29],difficulty:2},{word:"RETINA",clue:"Camada sensível à luz no olho.",specialties:[4],difficulty:1},{word:"CÓCLEA",clue:"Estrutura auditiva no ouvido interno.",specialties:[4],difficulty:2},{word:"ENDOTÉLIO",clue:"Revestimento interno dos vasos sanguíneos.",specialties:[3,7],difficulty:2},{word:"PERITÔNIO",clue:"Membrana que reveste a cavidade abdominal.",specialties:[0,9],difficulty:2},{word:"GLÂNDULA",clue:"Órgão que secreta substâncias.",specialties:[6,3],difficulty:1},{word:"HIDRATAÇÃO",clue:"Processo de reposição de líquidos corporais.",specialties:[25,16],difficulty:1},{word:"ACIDEMIA",clue:"Acidez excessiva do sangue.",specialties:[10,29],difficulty:3},{word:"CETOACIDOSE",clue:"Acúmulo de corpos cetônicos e acidez sanguínea.",specialties:[6,29],difficulty:3},{word:"ANTÍGENO",clue:"Substância que provoca resposta imune.",specialties:[21],difficulty:2},{word:"LINFA",clue:"Líquido que circula nos vasos linfáticos.",specialties:[5,21],difficulty:2},{word:"GANGLIO LINFÁTICO",clue:"Estrutura que filtra a linfa.",specialties:[21],difficulty:2},{word:"APENDICITE",clue:"Inflamação do apêndice vermiforme.",specialties:[9,20],difficulty:1},{word:"HEPATOMEGALIA",clue:"Aumento do fígado.",specialties:[9,24],difficulty:2},{word:"QUILO",clue:"Líquido leitoso formado durante a digestão.",specialties:[9,21],difficulty:3},{word:"BEXIGA",clue:"Órgão que armazena urina.",specialties:[10],difficulty:1},{word:"URETRA",clue:"Canal que conduz a urina para o exterior.",specialties:[10],difficulty:1},{word:"GLICOGÊNIO",clue:"Polissacarídeo de reserva energética.",specialties:[29,1],difficulty:2},{word:"MIELINA",clue:"Camada que envolve axônios neurais.",specialties:[4],difficulty:2},{word:"NEURÓGLIA",clue:"Células de suporte no sistema nervoso.",specialties:[4],difficulty:2},{word:"EQUILÍBRIO ÁCIDO-BASE",clue:"Manutenção do pH corporal.",specialties:[1,29],difficulty:3},{word:"PAPILA DÉRMICA",clue:"Estrutura que forma impressões digitais.",specialties:[12,3],difficulty:3},{word:"SEBO",clue:"Substância oleosa produzida pelas glândulas sebáceas.",specialties:[12],difficulty:1},{word:"ALVEÓLO",clue:"Estrutura pulmonar onde ocorrem trocas gasosas.",specialties:[8],difficulty:1},{word:"PLEURA",clue:"Membrana que reveste os pulmões.",specialties:[8],difficulty:2},{word:"MÚSCULO ESQUELÉTICO",clue:"Tipo de músculo ligado aos ossos.",specialties:[17,3],difficulty:1},{word:"MÚSCULO LISO",clue:"Tipo de músculo encontrado em órgãos viscerais.",specialties:[1,3],difficulty:1},{word:"MÚSCULO CARDÍACO",clue:"Músculo que compõe o coração.",specialties:[7,3],difficulty:1},{word:"PRÓSTATA",clue:"Glândula masculina que produz parte do sêmen.",specialties:[15],difficulty:1},{word:"NEURULAÇÃO",clue:"Processo de formação do tubo neural no embrião.",specialties:[4,14],difficulty:3},{word:"BLASTÓCITO",clue:"Estágio embrionário após a mórula.",specialties:[14],difficulty:3},{word:"GASTRULAÇÃO",clue:"Formação das camadas germinativas embrionárias.",specialties:[14],difficulty:3},{word:"CORAÇÃO FETAL",clue:"Coração em desenvolvimento no feto.",specialties:[14,7],difficulty:2},{word:"MEIOSE",clue:"Divisão celular que forma gametas.",specialties:[27,2],difficulty:2},{word:"MITOSE",clue:"Divisão celular que resulta em células idênticas.",specialties:[2,27],difficulty:1},{word:"CROMOSSOMO",clue:"Estrutura que contém DNA.",specialties:[27,2],difficulty:1},{word:"GENOMA",clue:"Conjunto completo de genes de um organismo.",specialties:[27],difficulty:2},{word:"FENÓTIPO",clue:"Características observáveis de um organismo.",specialties:[27],difficulty:2},{word:"GENÓTIPO",clue:"Composição genética de um organismo.",specialties:[27],difficulty:2},{word:"VIRULÊNCIA",clue:"Capacidade de um patógeno causar doença.",specialties:[28,20],difficulty:2},{word:"ANTIBIÓTICO",clue:"Substância que inibe o crescimento de microrganismos.",specialties:[26,20],difficulty:1},{word:"RESISTÊNCIA BACTERIANA",clue:"Capacidade de bactérias resistirem a antibióticos.",specialties:[28,20],difficulty:2},{word:"PROTOZOÁRIO",clue:"Organismo unicelular eucariótico.",specialties:[28],difficulty:2},{word:"PRÍON",clue:"Agente infeccioso composto apenas por proteínas.",specialties:[28,20],difficulty:3},{word:"BULBO RAQUIDIANO",clue:"Parte do cérebro que controla funções vitais.",specialties:[4,1],difficulty:2},{word:"GLÂNDULA PINEAL",clue:"Glândula que produz melatonina.",specialties:[6,4],difficulty:2},{word:"BARORRECEPTORES",clue:"Receptores sensíveis à pressão arterial.",specialties:[7,1],difficulty:3},{word:"NODOS LINFÁTICOS",clue:"Estruturas que filtram a linfa.",specialties:[21,5],difficulty:2},{word:"ALBUMINA",clue:"Proteína plasmática produzida no fígado.",specialties:[5,24],difficulty:2},{word:"SISTEMA NERVOSO SIMPÁTICO",clue:"Parte do sistema nervoso autônomo que prepara o corpo para ação.",specialties:[4,1],difficulty:2},{word:"SISTEMA NERVOSO PARASSIMPÁTICO",clue:"Parte do sistema nervoso autônomo que conserva energia.",specialties:[4,1],difficulty:2},{word:"PLAQUETOPENIA",clue:"Redução no número de plaquetas no sangue.",specialties:[5],difficulty:2},{word:"ERITROPOIETINA",clue:"Hormônio que estimula a produção de glóbulos vermelhos.",specialties:[6,5],difficulty:3},{word:"GLICOSE",clue:"Principal fonte de energia celular.",specialties:[29],difficulty:1},{word:"LIPÍDEOS",clue:"Grupo de moléculas que inclui gorduras e óleos.",specialties:[29],difficulty:1},{word:"AMINOÁCIDOS",clue:"Unidades básicas das proteínas.",specialties:[29],difficulty:1},{word:"OSSO",clue:"Estrutura rígida que compõe o esqueleto.",specialties:[0,17],difficulty:1},{word:"CARTILAGEM",clue:"Tecido conectivo flexível encontrado em articulações.",specialties:[17,3],difficulty:1},{word:"SINOVITE",clue:"Inflamação da membrana sinovial.",specialties:[17],difficulty:2},{word:"PERICÁRDIO",clue:"Membrana que envolve o coração.",specialties:[7],difficulty:2},{word:"MIOMÉTRIO",clue:"Camada muscular do útero.",specialties:[15],difficulty:2},{word:"ENDOMÉTRIO",clue:"Revestimento interno do útero.",specialties:[15],difficulty:2},{word:"ESPERMATOGÊNESE",clue:"Processo de formação de espermatozoides.",specialties:[15,27],difficulty:3},{word:"OVOGÊNESE",clue:"Processo de formação de óvulos.",specialties:[15,27],difficulty:3},{word:"GLÂNDULAS DE MONTGOMERY",clue:"Glândulas nas aréolas mamárias.",specialties:[15,12],difficulty:3},{word:"COLÁGENO",clue:"Proteína estrutural encontrada em vários tecidos.",specialties:[3,12],difficulty:1},{word:"HELICOBACTER PYLORI",clue:"Bactéria associada a úlceras gástricas.",specialties:[9,28],difficulty:3},{word:"MICÇÃO",clue:"Ato de urinar.",specialties:[10],difficulty:1},{word:"FILTRAÇÃO GLOMERULAR",clue:"Processo inicial de formação da urina.",specialties:[10,1],difficulty:2},{word:"HEMATÚRIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:2},{word:"CLARAÇÃO DE CREATININA",clue:"Medida da função renal.",specialties:[10,29],difficulty:3},{word:"DIURÉTICO",clue:"Substância que aumenta a produção de urina.",specialties:[10,26],difficulty:2},{word:"GLOMERULONEFRITE",clue:"Inflamação dos glomérulos renais.",specialties:[10,20],difficulty:3},{word:"PIELONEFRITE",clue:"Infecção do rim e da pelve renal.",specialties:[10,20],difficulty:2},{word:"VESÍCULA BILIAR",clue:"Órgão que armazena bile.",specialties:[9],difficulty:1},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[9,20],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9,6],difficulty:2},{word:"ESTEATOSE HEPÁTICA",clue:"Acúmulo de gordura no fígado.",specialties:[24,9],difficulty:2},{word:"CIRROSE",clue:"Fibrose avançada do fígado.",specialties:[24],difficulty:2},{word:"EMBOLIA PULMONAR",clue:"Obstrução de artéria pulmonar por êmbolo.",specialties:[8,7],difficulty:3},{word:"PNEUMOTÓRAX",clue:"Acúmulo de ar na cavidade pleural.",specialties:[8,25],difficulty:2},{word:"BRONQUIOLITE",clue:"Inflamação dos bronquíolos.",specialties:[8,16],difficulty:2},{word:"HIPÓXIA",clue:"Deficiência de oxigênio nos tecidos.",specialties:[1,8],difficulty:2},{word:"ASBESTOSE",clue:"Doença pulmonar causada por inalação de amianto.",specialties:[8],difficulty:3},{word:"ANESTESIA GERAL",clue:"Indução de inconsciência para procedimentos cirúrgicos.",specialties:[23,19],difficulty:2},{word:"ANESTESIA LOCAL",clue:"Perda de sensibilidade em uma área específica.",specialties:[23],difficulty:1},{word:"ENTUBAÇÃO",clue:"Inserção de tubo na traqueia para ventilação.",specialties:[23,25],difficulty:2},{word:"OPIÓIDE",clue:"Classe de medicamentos usados para aliviar a dor.",specialties:[26,23],difficulty:2},{word:"ANALGÉSICO",clue:"Substância que alivia a dor.",specialties:[26],difficulty:1},{word:"ELETROENCEFALOGRAMA",clue:"Registro da atividade elétrica cerebral.",specialties:[4,18],difficulty:2},{word:"ELETROMIOGRAMA",clue:"Exame que avalia a atividade elétrica dos músculos.",specialties:[17,18],difficulty:3},{word:"ULTRASSONOGRAFIA",clue:"Imagem obtida através de ondas sonoras.",specialties:[18],difficulty:1},{word:"MAMOGRAFIA",clue:"Exame radiológico das mamas.",specialties:[15,18],difficulty:1},{word:"DOPPLER",clue:"Técnica de imagem que avalia o fluxo sanguíneo.",specialties:[18,7],difficulty:2},{word:"ESTETOSCÓPIO",clue:"Instrumento usado para auscultar sons corporais.",specialties:[25],difficulty:1},{word:"ESFIGMOMANÔMETRO",clue:"Aparelho para medir a pressão arterial.",specialties:[7,25],difficulty:1},{word:"GLUCOMETRO",clue:"Dispositivo que mede a glicose no sangue.",specialties:[6],difficulty:1},{word:"TERMÔMETRO",clue:"Instrumento para medir a temperatura corporal.",specialties:[25],difficulty:1},{word:"OXÍMETRO",clue:"Aparelho que mede a saturação de oxigênio.",specialties:[8,25],difficulty:1},{word:"HEPATITE",clue:"Inflamação do fígado.",specialties:[24,20],difficulty:1},{word:"MALÁRIA",clue:"Doença transmitida por mosquitos.",specialties:[20],difficulty:2},{word:"DENGUE",clue:"Doença viral transmitida pelo mosquito Aedes aegypti.",specialties:[20],difficulty:1},{word:"ZIKA",clue:"Doença viral transmitida por mosquitos, associada a microcefalia.",specialties:[20,14],difficulty:2},{word:"FEBRE AMARELA",clue:"Doença viral transmitida por mosquitos, prevenível por vacina.",specialties:[20],difficulty:2},{word:"RECEPTOR",clue:"Estrutura celular que se liga a moléculas específicas.",specialties:[2,29],difficulty:2},{word:"HORMÔNIO PEPTÍDICO",clue:"Hormônio composto por aminoácidos.",specialties:[6,29],difficulty:2},{word:"HORMÔNIO ESTEROIDE",clue:"Hormônio derivado do colesterol.",specialties:[6,29],difficulty:2},{word:"INSULINA",clue:"Hormônio que reduz os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"GLUCAGON",clue:"Hormônio que aumenta os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"ESCLERÓTICA",clue:"Camada externa branca do olho.",specialties:[4],difficulty:2},{word:"CÓRNEA",clue:"Camada transparente na frente do olho.",specialties:[4],difficulty:1},{word:"ÍRIS",clue:"Parte colorida do olho que regula a entrada de luz.",specialties:[4],difficulty:1},{word:"PUPILA",clue:"Abertura no centro da íris.",specialties:[4],difficulty:1},{word:"LENTE",clue:"Estrutura que foca a luz na retina.",specialties:[4],difficulty:1},{word:"SISTEMA IMUNOLÓGICO INATO",clue:"Defesa inicial não específica contra patógenos.",specialties:[21],difficulty:2},{word:"SISTEMA IMUNOLÓGICO ADAPTATIVO",clue:"Resposta específica do sistema imunológico.",specialties:[21],difficulty:2},{word:"CÉLULAS T",clue:"Linfócitos que participam da resposta imune celular.",specialties:[21],difficulty:2},{word:"CÉLULAS B",clue:"Linfócitos que produzem anticorpos.",specialties:[21],difficulty:2},{word:"VACINAÇÃO",clue:"Processo de induzir imunidade através de vacinas.",specialties:[21,16],difficulty:1},{word:"MELANINA",clue:"Pigmento que dá cor à pele.",specialties:[12],difficulty:1},{word:"ALOPECIA",clue:"Perda de cabelo ou pelos.",specialties:[12],difficulty:1},{word:"LIPOMA",clue:"Tumor benigno de tecido adiposo.",specialties:[11,12],difficulty:2},{word:"DERMATITE",clue:"Inflamação da pele.",specialties:[12],difficulty:1},{word:"URTICÁRIA",clue:"Reação alérgica com erupções na pele.",specialties:[12,21],difficulty:1},{word:"ANEMIA",clue:"Redução da capacidade do sangue de transportar oxigênio.",specialties:[5],difficulty:1},{word:"LEUCEMIA",clue:"Câncer dos tecidos formadores de sangue.",specialties:[11,5],difficulty:2},{word:"HEMOGLOBINOPATIA",clue:"Doença genética que afeta a hemoglobina.",specialties:[5,27],difficulty:3},{word:"POLICITEMIA",clue:"Aumento anormal do número de glóbulos vermelhos.",specialties:[5],difficulty:3},{word:"HEMOFILIA",clue:"Distúrbio da coagulação do sangue.",specialties:[5,27],difficulty:2},{word:"DIABETES MELLITUS",clue:"Doença caracterizada por hiperglicemia crônica.",specialties:[6],difficulty:1},{word:"HIPERGLICEMIA",clue:"Níveis elevados de glicose no sangue.",specialties:[6],difficulty:1},{word:"HIPOGLICEMIA",clue:"Níveis baixos de glicose no sangue.",specialties:[6],difficulty:1},{word:"RESISTÊNCIA À INSULINA",clue:"Condição em que as células não respondem à insulina.",specialties:[6],difficulty:2},{word:"GLICOSÚRIA",clue:"Presença de glicose na urina.",specialties:[6,10],difficulty:2},{word:"ASTIGMATISMO",clue:"Erro refrativo do olho que causa visão borrada.",specialties:[4],difficulty:1},{word:"GLAUCOMA",clue:"Doença ocular caracterizada por aumento da pressão intraocular.",specialties:[4],difficulty:2},{word:"CATARATA",clue:"Opacificação do cristalino que prejudica a visão.",specialties:[4],difficulty:1},{word:"ESQUIZOFRENIA",clue:"Transtorno mental com distorções na percepção da realidade.",specialties:[13],difficulty:2},{word:"BIPOLARIDADE",clue:"Transtorno de humor com episódios de mania e depressão.",specialties:[13],difficulty:1},{word:"FIBROMIALGIA",clue:"Síndrome de dor crônica generalizada.",specialties:[17],difficulty:2},{word:"LUPUS",clue:"Doença autoimune que pode afetar múltiplos órgãos.",specialties:[21,12],difficulty:2},{word:"ESCLEROSE LATERAL AMIOTRÓFICA",clue:"Doença neurodegenerativa que afeta neurônios motores.",specialties:[4],difficulty:3},{word:"MIASTENIA GRAVIS",clue:"Doença autoimune que causa fraqueza muscular.",specialties:[21,4],difficulty:3},{word:"HIPERTROFIA",clue:"Aumento do tamanho das células.",specialties:[22],difficulty:1},{word:"HIPERPLASIA",clue:"Aumento do número de células.",specialties:[22],difficulty:1},{word:"ATROFIA",clue:"Redução do tamanho ou número de células.",specialties:[22],difficulty:1},{word:"NECROSE",clue:"Morte celular não programada.",specialties:[22],difficulty:2},{word:"INFARTO",clue:"Morte de tecido devido à falta de suprimento sanguíneo.",specialties:[22,7],difficulty:1},{word:"ISQUEMIA",clue:"Redução do fluxo sanguíneo para um tecido.",specialties:[22,7],difficulty:1},{word:"HEPATOCARCINOMA",clue:"Câncer primário do fígado.",specialties:[11,24],difficulty:3},{word:"ADENOCARCINOMA",clue:"Tipo de câncer que se origina em células glandulares.",specialties:[11,22],difficulty:3},{word:"OSTEOSSARCOMA",clue:"Tumor maligno do osso.",specialties:[11,17],difficulty:3},{word:"MELANOMA",clue:"Tipo agressivo de câncer de pele.",specialties:[11,12],difficulty:2},{word:"LEIOMIOMA",clue:"Tumor benigno de músculo liso.",specialties:[11,22],difficulty:3},{word:"DOENÇA DE ALZHEIMER",clue:"Doença neurodegenerativa que causa demência.",specialties:[4,13],difficulty:2},{word:"PARKINSON",clue:"Distúrbio do movimento devido à perda de neurônios dopaminérgicos.",specialties:[4],difficulty:2},{word:"EPILEPSIA",clue:"Condição neurológica com crises convulsivas recorrentes.",specialties:[4],difficulty:1},{word:"MIGRÂNEA",clue:"Tipo de dor de cabeça intensa e pulsátil.",specialties:[4],difficulty:1},{word:"ESCLEROSE MÚLTIPLA",clue:"Doença autoimune que afeta a mielina do sistema nervoso central.",specialties:[4,21],difficulty:2},{word:"ANAFILAXIA",clue:"Reação alérgica sistêmica grave.",specialties:[21,25],difficulty:2},{word:"BRONCODILATADOR",clue:"Medicação que dilata as vias aéreas.",specialties:[8,26],difficulty:1},{word:"ANTIHISTAMÍNICO",clue:"Medicamento que bloqueia os efeitos da histamina.",specialties:[21,26],difficulty:1},{word:"ANTICOAGULANTE",clue:"Substância que previne a coagulação do sangue.",specialties:[5,26],difficulty:2},{word:"ANTIPIRÉTICO",clue:"Medicamento que reduz a febre.",specialties:[26,25],difficulty:1},{word:"OSTEOPOROSE",clue:"Condição de perda de densidade óssea.",specialties:[17],difficulty:1},{word:"RAQUITISMO",clue:"Doença infantil causada por deficiência de vitamina D.",specialties:[17,16],difficulty:2},{word:"GOTA",clue:"Artrite causada por acúmulo de ácido úrico.",specialties:[17],difficulty:2},{word:"ESCORBUTO",clue:"Doença por deficiência de vitamina C.",specialties:[25],difficulty:2},{word:"ANOREXIA NERVOSA",clue:"Transtorno alimentar com perda de peso extrema.",specialties:[13],difficulty:2},{word:"BULIMIA NERVOSA",clue:"Transtorno alimentar com compulsão e purgação.",specialties:[13],difficulty:2},{word:"OBESIDADE",clue:"Excesso de gordura corporal.",specialties:[6],difficulty:1},{word:"HIPERTENSÃO ARTERIAL",clue:"Pressão arterial elevada crônica.",specialties:[7],difficulty:1},{word:"ARTERIOSCLEROSE",clue:"Endurecimento das paredes arteriais.",specialties:[7],difficulty:2},{word:"FIBRILAÇÃO ATRIAL",clue:"Arritmia cardíaca comum.",specialties:[7],difficulty:2},{word:"INFECÇÃO URINÁRIA",clue:"Infecção do trato urinário.",specialties:[10,20],difficulty:1},{word:"CÁLCULO RENAL",clue:"Formação de pedras nos rins.",specialties:[10],difficulty:1},{word:"PRÓSTATA",clue:"Glândula masculina que produz fluido seminal.",specialties:[15],difficulty:1},{word:"HIPERPLASIA PROSTÁTICA BENIGNA",clue:"Aumento não canceroso da próstata.",specialties:[15],difficulty:2},{word:"PROSTATITE",clue:"Inflamação da próstata.",specialties:[15,20],difficulty:2},{word:"VARICELA",clue:"Doença viral também conhecida como catapora.",specialties:[16,20],difficulty:1},{word:"SARAMPO",clue:"Doença viral contagiosa com erupções cutâneas.",specialties:[16,20],difficulty:1},{word:"COQUELUCHE",clue:"Doença bacteriana que causa tosse intensa.",specialties:[16,20],difficulty:2},{word:"POLIOMIELITE",clue:"Doença viral que pode causar paralisia.",specialties:[16,20],difficulty:2},{word:"RUBÉOLA",clue:"Doença viral que pode causar defeitos congênitos.",specialties:[16,14],difficulty:1},{word:"AMIGDALITE",clue:"Inflamação das amígdalas.",specialties:[20],difficulty:1},{word:"SINUSITE",clue:"Inflamação dos seios nasais.",specialties:[20],difficulty:1},{word:"OTITE",clue:"Inflamação do ouvido.",specialties:[20,16],difficulty:1},{word:"CANDIDÍASE",clue:"Infecção fúngica por Candida.",specialties:[20,12],difficulty:1},{word:"HEPATITE C",clue:"Infecção viral crônica do fígado.",specialties:[24,20],difficulty:2},{word:"CÓLERA",clue:"Infecção bacteriana que causa diarreia intensa.",specialties:[20,9],difficulty:2},{word:"LEPTOSPIROSE",clue:"Doença bacteriana transmitida pela urina de animais.",specialties:[20],difficulty:2},{word:"TETANO",clue:"Doença causada por toxinas bacterianas que afetam o sistema nervoso.",specialties:[20,4],difficulty:2},{word:"BOTULISMO",clue:"Intoxicação alimentar por toxina botulínica.",specialties:[20],difficulty:2},{word:"SÍFILIS",clue:"Infecção sexualmente transmissível causada por bactéria.",specialties:[20,15],difficulty:2},{word:"GONORREIA",clue:"Infecção sexualmente transmissível bacteriana.",specialties:[20,15],difficulty:1},{word:"HERPES GENITAL",clue:"Infecção viral sexualmente transmissível.",specialties:[20,15],difficulty:1},{word:"HPV",clue:"Vírus causador de verrugas genitais e câncer cervical.",specialties:[20,15],difficulty:1},{word:"CLAMÍDIA",clue:"Infecção sexualmente transmissível bacteriana comum.",specialties:[20,15],difficulty:1},{word:"TRICOMONÍASE",clue:"Infecção sexualmente transmissível por protozoário.",specialties:[20,15],difficulty:2},{word:"CÉREBRO",clue:"Principal órgão do sistema nervoso central.",specialties:[4],difficulty:1},{word:"MEDULA ESPINHAL",clue:"Estrutura que transmite impulsos nervosos do cérebro ao corpo.",specialties:[4],difficulty:1},{word:"SISTEMA NERVOSO PERIFÉRICO",clue:"Conjunto de nervos fora do cérebro e medula.",specialties:[4],difficulty:2},{word:"SINAPSE",clue:"Junção entre dois neurônios.",specialties:[4],difficulty:1},{word:"AXÔNIO",clue:"Prolongamento do neurônio que conduz impulsos elétricos.",specialties:[4],difficulty:1},{word:"DENDRITO",clue:"Estrutura do neurônio que recebe sinais.",specialties:[4],difficulty:1},{word:"CITOLOGIA",clue:"Estudo das células.",specialties:[2],difficulty:1},{word:"BIOPSIA",clue:"Remoção de tecido para exame diagnóstico.",specialties:[19,22],difficulty:1},{word:"CITOQUINAS",clue:"Proteínas sinalizadoras no sistema imunológico.",specialties:[21,29],difficulty:2},{word:"FAGÓCITO",clue:"Célula que engole partículas estranhas.",specialties:[21],difficulty:2},{word:"EPIDERMIS",clue:"Camada mais externa da pele.",specialties:[12,3],difficulty:1},{word:"DERMIS",clue:"Camada intermediária da pele.",specialties:[12,3],difficulty:1},{word:"HIPODERME",clue:"Camada mais interna da pele.",specialties:[12,3],difficulty:2},{word:"QUERATINÓCITO",clue:"Célula predominante na epiderme.",specialties:[12,3],difficulty:2},{word:"MELANÓCITO",clue:"Célula que produz melanina.",specialties:[12,3],difficulty:2},{word:"FIBROSE",clue:"Formação excessiva de tecido conjuntivo fibroso.",specialties:[22],difficulty:2},{word:"GRANULOMA",clue:"Massa de tecido inflamatório crônico.",specialties:[22],difficulty:3},{word:"APOPTÓSE",clue:"Morte celular programada.",specialties:[2],difficulty:2},{word:"NEOPLASIA",clue:"Crescimento anormal de células.",specialties:[11,22],difficulty:1},{word:"METÁSTASE",clue:"Disseminação de células cancerosas para outros locais.",specialties:[11],difficulty:2},{word:"QUIMIOTERAPIA",clue:"Uso de medicamentos para tratar câncer.",specialties:[11,26],difficulty:1},{word:"RADIOTERAPIA",clue:"Uso de radiação para tratar câncer.",specialties:[11,18],difficulty:1},{word:"IMUNOTERAPIA",clue:"Tratamento que estimula o sistema imunológico contra doenças.",specialties:[11,21],difficulty:2},{word:"ANALGÉSICO",clue:"Medicamento que alivia a dor.",specialties:[26],difficulty:1},{word:"ANTIINFLAMATÓRIO",clue:"Medicamento que reduz a inflamação.",specialties:[26],difficulty:1},{word:"ANTIBIÓTICO",clue:"Medicamento que combate infecções bacterianas.",specialties:[26,20],difficulty:1},{word:"ANTIVIRAL",clue:"Medicamento que combate infecções virais.",specialties:[26,20],difficulty:2},{word:"ANTIFÚNGICO",clue:"Medicamento que combate infecções fúngicas.",specialties:[26,20],difficulty:2},{word:"VACINA",clue:"Preparação que estimula imunidade contra doenças.",specialties:[21,16],difficulty:1},{word:"SÊMEN",clue:"Fluido ejaculado pelo homem contendo espermatozoides.",specialties:[15],difficulty:1},{word:"MENARCA",clue:"Primeira menstruação na puberdade feminina.",specialties:[15],difficulty:1},{word:"MENOPAUSA",clue:"Cessação permanente da menstruação.",specialties:[15],difficulty:1},{word:"PARTO CESÁREO",clue:"Nascimento por incisão cirúrgica no abdômen e útero.",specialties:[14,19],difficulty:1},{word:"ECLÂMPSIA",clue:"Complicação grave da gravidez com convulsões.",specialties:[14],difficulty:2},{word:"HIPEREMESE GRAVÍDICA",clue:"Náuseas e vômitos intensos durante a gravidez.",specialties:[14],difficulty:2},{word:"PERISTALTISMO",clue:"Movimento muscular que impulsiona o conteúdo no trato digestivo.",specialties:[1,9],difficulty:1},{word:"BARREIRA HEMATOENCEFALICA",clue:"Barreira que protege o cérebro de substâncias no sangue.",specialties:[4,5],difficulty:3},{word:"DESNUTRICAO",clue:"Estado resultante de dieta inadequada ou absorção deficiente de nutrientes.",specialties:[25,16],difficulty:1},{word:"HOMEOPATIA",clue:"Sistema de medicina alternativa baseado na diluição de substâncias.",specialties:[26],difficulty:2},{word:"ACUIDADE VISUAL",clue:"Medida da clareza da visão.",specialties:[4],difficulty:1},{word:"HEMOCROMATOSE",clue:"Doença por excesso de ferro no organismo.",specialties:[5,24],difficulty:3},{word:"DISTENSAO ABDOMINAL",clue:"Inchaço do abdômen por gases ou fluidos.",specialties:[9,25],difficulty:1},{word:"POLIDIPSIA",clue:"Sede excessiva.",specialties:[6],difficulty:2},{word:"POLIFAGIA",clue:"Fome excessiva.",specialties:[6],difficulty:2},{word:"POLIURIA",clue:"Produção excessiva de urina.",specialties:[6,10],difficulty:2},{word:"URETER",clue:"Canal que conduz a urina do rim à bexiga.",specialties:[10],difficulty:1},{word:"NEUROLOGO",clue:"Médico especialista em doenças do sistema nervoso.",specialties:[4],difficulty:1},{word:"CARDIOLOGISTA",clue:"Médico especialista em doenças do coração.",specialties:[7],difficulty:1},{word:"ONCOLOGISTA",clue:"Médico especialista em câncer.",specialties:[11],difficulty:1},{word:"GASTROSCOPIA",clue:"Exame endoscópico do estômago.",specialties:[9,18],difficulty:2},{word:"COLONOSCOPIA",clue:"Exame endoscópico do cólon.",specialties:[9,18],difficulty:2},{word:"ENDOSCOPIA",clue:"Exame visual interno de órgãos ocos.",specialties:[9,18],difficulty:1},{word:"RESILIENCIA",clue:"Capacidade de recuperar-se de adversidades.",specialties:[13],difficulty:1},{word:"ANAMNESE",clue:"Entrevista médica para obtenção de histórico clínico.",specialties:[25],difficulty:1},{word:"DIAGNOSTICO",clue:"Identificação de uma doença ou condição.",specialties:[22],difficulty:1},{word:"PROGNOSTICO",clue:"Previsão da evolução de uma doença.",specialties:[22],difficulty:2},{word:"PLACEBO",clue:"Substância inerte usada em pesquisas clínicas.",specialties:[26],difficulty:2},{word:"CEFALEIA",clue:"Dor de cabeça.",specialties:[4],difficulty:1},{word:"MIALGIA",clue:"Dor muscular.",specialties:[17],difficulty:1},{word:"ARTRALGIA",clue:"Dor nas articulações.",specialties:[17],difficulty:1},{word:"NEURALGIA",clue:"Dor ao longo de um nervo.",specialties:[4],difficulty:2},{word:"FARINGE",clue:"Canal que conecta a boca ao esôfago e laringe.",specialties:[0],difficulty:1},{word:"LARINGE",clue:"Órgão da voz situado no pescoço.",specialties:[0],difficulty:1},{word:"TRAQUEIA",clue:"Tubo que leva o ar aos pulmões.",specialties:[8,0],difficulty:1},{word:"BRONQUIOLOS",clue:"Pequenas ramificações dos brônquios nos pulmões.",specialties:[8],difficulty:1},{word:"PLEURITE",clue:"Inflamação da pleura.",specialties:[8],difficulty:2},{word:"HIPOVOLEMIA",clue:"Diminuição do volume sanguíneo.",specialties:[5,25],difficulty:2},{word:"HIPERVOLEMIA",clue:"Aumento do volume sanguíneo.",specialties:[5],difficulty:2},{word:"SIBILOS",clue:"Ruídos respiratórios agudos.",specialties:[8],difficulty:1},{word:"RINITE",clue:"Inflamação da mucosa nasal.",specialties:[8,21],difficulty:1},{word:"OTORRINOLARINGOLOGIA",clue:"Especialidade médica que trata orelha, nariz e garganta.",specialties:[0],difficulty:2},{word:"HEMORRAGIA",clue:"Perda excessiva de sangue.",specialties:[5,25],difficulty:1},{word:"SINCOPE",clue:"Perda temporária da consciência.",specialties:[7,25],difficulty:2},{word:"ICTERICIA",clue:"Amarelamento da pele e olhos por acúmulo de bilirrubina.",specialties:[24,5],difficulty:1},{word:"SEBORREIA",clue:"Excesso de produção de sebo pela pele.",specialties:[12],difficulty:1},{word:"PRURIDO",clue:"Coceira.",specialties:[12],difficulty:1},{word:"ERUPCAO CUTANEA",clue:"Lesões na pele como manchas ou pápulas.",specialties:[12],difficulty:1},{word:"PROLACTINA",clue:"Hormônio que estimula a produção de leite.",specialties:[6,15],difficulty:2},{word:"OXITOCINA",clue:"Hormônio que estimula as contrações uterinas.",specialties:[6,14],difficulty:2},{word:"FEOCROMOCITOMA",clue:"Tumor das glândulas suprarrenais que produz catecolaminas.",specialties:[6,7],difficulty:3},{word:"GOTA",clue:"Artrite causada por acúmulo de ácido úrico.",specialties:[17],difficulty:2},{word:"ACIDO URICO",clue:"Produto final do metabolismo de purinas.",specialties:[29],difficulty:2},{word:"FENILCETONURIA",clue:"Doença genética com deficiência de metabolismo da fenilalanina.",specialties:[27,16],difficulty:3},{word:"GALACTOSEMIA",clue:"Doença genética com intolerância à galactose.",specialties:[27,16],difficulty:3},{word:"ENFERMEIRO",clue:"Profissional de saúde que cuida dos pacientes.",specialties:[25],difficulty:1},{word:"FISIOTERAPEUTA",clue:"Profissional que trata doenças por meio de exercícios físicos.",specialties:[17],difficulty:1},{word:"NUTRICIONISTA",clue:"Profissional que estuda a relação entre alimento e saúde.",specialties:[9,25],difficulty:1},{word:"PSICOLOGO",clue:"Profissional que estuda os processos mentais e comportamentais.",specialties:[13],difficulty:1},{word:"ANATOMOPATOLOGIA",clue:"Estudo das alterações estruturais causadas pelas doenças.",specialties:[22],difficulty:2},{word:"CLINICA MEDICA",clue:"Especialidade que trata doenças não cirúrgicas em adultos.",specialties:[25],difficulty:1},{word:"ANTITERMINICO",clue:"Medicamento que reduz a febre.",specialties:[26],difficulty:1},{word:"PALIATIVO",clue:"Tratamento que alivia sintomas sem curar a doença.",specialties:[11,25],difficulty:1},{word:"TAMPAO",clue:"Substância que mantém o pH estável.",specialties:[29],difficulty:2},{word:"BICARBONATO",clue:"Íon que atua como tampão no sangue.",specialties:[29],difficulty:2},{word:"CREATININA",clue:"Substância usada para avaliar a função renal.",specialties:[10,29],difficulty:2},{word:"PROTEINURIA",clue:"Presença de proteínas na urina.",specialties:[10],difficulty:2},{word:"LEUCOCITURIA",clue:"Presença de leucócitos na urina.",specialties:[10,20],difficulty:2},{word:"GASTRITE",clue:"Inflamação da mucosa do estômago.",specialties:[9],difficulty:1},{word:"DUODENO",clue:"Primeira parte do intestino delgado.",specialties:[9],difficulty:1},{word:"JEJUNO",clue:"Segunda porção do intestino delgado.",specialties:[9],difficulty:1},{word:"ILEO",clue:"Terceira parte do intestino delgado.",specialties:[9],difficulty:1},{word:"APENDICE",clue:"Estrutura vermiforme ligada ao ceco.",specialties:[9],difficulty:1},{word:"CECO",clue:"Parte inicial do intestino grosso.",specialties:[9],difficulty:1},{word:"SIGMOIDE",clue:"Parte do intestino grosso antes do reto.",specialties:[9],difficulty:1},{word:"RETROPERITONEAL",clue:"Localizado atrás do peritônio.",specialties:[0,9],difficulty:3},{word:"POLIDACTILIA",clue:"Condição de possuir dedos extras.",specialties:[17,27],difficulty:2},{word:"SINDACTILIA",clue:"Fusão de dois ou mais dedos.",specialties:[17,27],difficulty:2},{word:"CRIOTERAPIA",clue:"Tratamento médico usando frio.",specialties:[12,19],difficulty:2},{word:"TERMOTERAPIA",clue:"Tratamento médico usando calor.",specialties:[17,19],difficulty:2},{word:"ELETROTERAPIA",clue:"Uso de correntes elétricas para tratamento.",specialties:[17,19],difficulty:2},{word:"BIOPSIA",clue:"Remoção de tecido para exame diagnóstico.",specialties:[19,22],difficulty:1},{word:"PARACENTESE",clue:"Procedimento para remover líquido da cavidade abdominal.",specialties:[19,9],difficulty:3},{word:"TORACOCENTESE",clue:"Procedimento para remover líquido da cavidade pleural.",specialties:[19,8],difficulty:3},{word:"ARTROCENTESE",clue:"Punctura de uma articulação para remover líquido.",specialties:[19,17],difficulty:3},{word:"DIAGNOSTICO DIFERENCIAL",clue:"Lista de possíveis doenças que explicam os sintomas.",specialties:[25,22],difficulty:2},{word:"CICLO MENSTRUAL",clue:"Processo mensal de mudanças no sistema reprodutor feminino.",specialties:[15],difficulty:1},{word:"ESPERMATOGENESE",clue:"Processo de produção de espermatozoides.",specialties:[15],difficulty:2},{word:"OVULACAO",clue:"Liberação de um óvulo pelo ovário.",specialties:[15,14],difficulty:1},{word:"ANDROGENO",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:2},{word:"ESTROGENIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"PROGESTERONA",clue:"Hormônio envolvido na gravidez e ciclo menstrual.",specialties:[6,15],difficulty:1},{word:"INFERTILIDADE",clue:"Incapacidade de conceber após um ano de tentativas.",specialties:[15,14],difficulty:1},{word:"FECUNDACAO IN VITRO",clue:"Técnica de reprodução assistida.",specialties:[15,14],difficulty:2},{word:"CLONAGEM",clue:"Processo de criar cópias geneticamente idênticas.",specialties:[27],difficulty:3},{word:"ANTICORPO MONOCLONAL",clue:"Anticorpo produzido por um único clone de células.",specialties:[21,26],difficulty:3},{word:"IMUNODEFICIENCIA",clue:"Estado de função imune reduzida.",specialties:[21],difficulty:2},{word:"QUIMERA",clue:"Organismo com células geneticamente distintas.",specialties:[27],difficulty:3},{word:"DOPAMINA",clue:"Neurotransmissor envolvido no controle motor e motivação.",specialties:[4],difficulty:2},{word:"SEROTONINA",clue:"Neurotransmissor que regula humor e sono.",specialties:[4,13],difficulty:2},{word:"ACETILCOLINA",clue:"Neurotransmissor envolvido na função muscular.",specialties:[4],difficulty:2},{word:"GLUTAMATO",clue:"Principal neurotransmissor excitatório do cérebro.",specialties:[4],difficulty:2},{word:"GABA",clue:"Principal neurotransmissor inibitório do cérebro.",specialties:[4],difficulty:2},{word:"CINETOSE",clue:"Mal-estar causado por movimento, como enjoo de viagem.",specialties:[13],difficulty:1},{word:"ESQUISTOSSOMOSE",clue:"Doença parasitária causada por Schistosoma.",specialties:[20],difficulty:3},{word:"LEISHMANIOSE",clue:"Doença causada por protozoários do gênero Leishmania.",specialties:[20],difficulty:3},{word:"HEMOGLOBINA",clue:"Proteína no sangue que transporta oxigênio.",specialties:[5],difficulty:1},{word:"TIROXINA",clue:"Hormônio produzido pela tireoide.",specialties:[6],difficulty:1},{word:"HIPERPARATIREOIDISMO",clue:"Excesso de produção de hormônio paratireoide.",specialties:[6],difficulty:3},{word:"HIPOPARATIREOIDISMO",clue:"Deficiência de hormônio paratireoide.",specialties:[6],difficulty:3},{word:"CEFALOSPORINA",clue:"Classe de antibióticos β-lactâmicos.",specialties:[26,20],difficulty:2},{word:"QUINOLONA",clue:"Classe de antibióticos que inibem DNA girase.",specialties:[26,20],difficulty:2},{word:"TETRACICLINA",clue:"Antibiótico que inibe síntese proteica bacteriana.",specialties:[26,20],difficulty:2},{word:"GLICOCÁLICE",clue:"Camada de carboidratos na superfície celular.",specialties:[2],difficulty:3},{word:"CINETOCORO",clue:"Estrutura que liga cromossomos ao fuso mitótico.",specialties:[2,27],difficulty:3},{word:"MITOCONDRIO",clue:"Organela responsável pela produção de ATP.",specialties:[2,29],difficulty:1},{word:"CLOROPLASTO",clue:"Organela responsável pela fotossíntese em plantas.",specialties:[2],difficulty:3},{word:"ENZIMA",clue:"Proteína que acelera reações químicas.",specialties:[29],difficulty:1},{word:"CATALISADOR",clue:"Substância que aumenta a velocidade de uma reação.",specialties:[29],difficulty:1},{word:"HELICASE",clue:"Enzima que separa fitas de DNA.",specialties:[2,27],difficulty:3},{word:"LIGASE",clue:"Enzima que une fragmentos de DNA.",specialties:[2,27],difficulty:3},{word:"PROTEASSOMA",clue:"Complexo que degrada proteínas.",specialties:[2],difficulty:3},{word:"TRIPANOSSOMIASE",clue:"Doença causada por Trypanosoma cruzi.",specialties:[20],difficulty:3},{word:"HEMOSTASIA",clue:"Processo de parar sangramento.",specialties:[5,19],difficulty:1},{word:"NEUTRÓFILO",clue:"Tipo de glóbulo branco que combate infecções.",specialties:[5,21],difficulty:2},{word:"EOSINÓFILO",clue:"Glóbulo branco envolvido em respostas alérgicas.",specialties:[5,21],difficulty:2},{word:"BASÓFILO",clue:"Glóbulo branco que libera histamina.",specialties:[5,21],difficulty:2},{word:"MONÓCITO",clue:"Glóbulo branco que se diferencia em macrófago.",specialties:[5,21],difficulty:2},{word:"MACRÓFAGO",clue:"Célula que fagocita patógenos.",specialties:[21],difficulty:2},{word:"IMUNOGLOBULINA",clue:"Outro nome para anticorpo.",specialties:[21,5],difficulty:2},{word:"VASOPRESSINA",clue:"Hormônio que regula a retenção de água.",specialties:[6,10],difficulty:2},{word:"PEPTÍDEO NATRIURÉTICO",clue:"Hormônio que reduz a pressão arterial.",specialties:[6,7],difficulty:3},{word:"INTERFERON",clue:"Proteína que interfere na replicação viral.",specialties:[21,20],difficulty:3},{word:"INTERLEUCINA",clue:"Citocina produzida por leucócitos.",specialties:[21],difficulty:3},{word:"HEPARINA",clue:"Anticoagulante usado em medicina.",specialties:[5,26],difficulty:2},{word:"WARFARINA",clue:"Anticoagulante que inibe a vitamina K.",specialties:[26,5],difficulty:2},{word:"VITAMINA K",clue:"Vitamina essencial para a coagulação.",specialties:[29,5],difficulty:2},{word:"VITAMINA D",clue:"Vitamina importante para a saúde óssea.",specialties:[29,17],difficulty:1},{word:"VITAMINA B12",clue:"Vitamina necessária para a produção de glóbulos vermelhos.",specialties:[29,5],difficulty:2},{word:"VITAMINA C",clue:"Vitamina importante para o sistema imunológico.",specialties:[29,21],difficulty:1},{word:"GLUTATIONA",clue:"Antioxidante presente nas células.",specialties:[29],difficulty:3},{word:"SUPERÓXIDO DISMUTASE",clue:"Enzima que neutraliza radicais livres.",specialties:[29],difficulty:3},{word:"CATALASE",clue:"Enzima que decompõe peróxido de hidrogênio.",specialties:[29],difficulty:2},{word:"PEROXISSOMO",clue:"Organela envolvida no metabolismo de peróxidos.",specialties:[2],difficulty:3},{word:"PITUITÁRIA",clue:"Outra denominação para hipófise.",specialties:[6],difficulty:2},{word:"HIPOTÁLAMO",clue:"Região cerebral que controla a hipófise.",specialties:[4,6],difficulty:2},{word:"EPÍFISE",clue:"Parte do osso longo ou glândula pineal.",specialties:[0,6],difficulty:2},{word:"ADENOHIPÓFISE",clue:"Lobo anterior da hipófise.",specialties:[6],difficulty:3},{word:"NEUROHIPÓFISE",clue:"Lobo posterior da hipófise.",specialties:[6],difficulty:3},{word:"PARATORMÔNIO",clue:"Hormônio que regula o cálcio.",specialties:[6],difficulty:2},{word:"CALCITONINA",clue:"Hormônio que reduz os níveis de cálcio no sangue.",specialties:[6],difficulty:2},{word:"RENINA",clue:"Enzima que participa da regulação da pressão arterial.",specialties:[10,6],difficulty:2},{word:"ANGIOTENSINA",clue:"Hormônio que causa vasoconstrição.",specialties:[7,10],difficulty:2},{word:"EICOSANÓIDES",clue:"Derivados de ácidos graxos com funções hormonais.",specialties:[29],difficulty:3},{word:"PROSTAGLANDINA",clue:"Mediador inflamatório derivado de ácidos graxos.",specialties:[29,22],difficulty:2},{word:"LEUCOTRIENO",clue:"Mediador químico em respostas alérgicas.",specialties:[21,29],difficulty:3},{word:"TRABÉCULA",clue:"Estrutura em forma de feixe nos ossos esponjosos.",specialties:[0,17],difficulty:3},{word:"OSTEOBLASTO",clue:"Célula que forma osso.",specialties:[0,17],difficulty:2},{word:"OSTEÓCITO",clue:"Célula madura do tecido ósseo.",specialties:[0,17],difficulty:2},{word:"OSTEOCLASTO",clue:"Célula que reabsorve osso.",specialties:[0,17],difficulty:2},{word:"CARTILAGEM HIALINA",clue:"Tipo de cartilagem encontrada em articulações.",specialties:[0,17],difficulty:2},{word:"FIBROBLASTO",clue:"Célula que produz fibras de colágeno.",specialties:[3],difficulty:2},{word:"ADIPÓCITO",clue:"Célula de tecido adiposo.",specialties:[3],difficulty:1},{word:"GLIÓCITO",clue:"Célula de suporte no sistema nervoso.",specialties:[4],difficulty:2},{word:"ASTRÓCITO",clue:"Tipo de célula glial no SNC.",specialties:[4],difficulty:3},{word:"OLIGODENDRÓCITO",clue:"Célula que forma mielina no SNC.",specialties:[4],difficulty:3},{word:"CÉLULA DE SCHWANN",clue:"Célula que forma mielina no SNP.",specialties:[4],difficulty:3},{word:"MICRÓGLIA",clue:"Célula imune do sistema nervoso.",specialties:[4,21],difficulty:3},{word:"EPENDIMÁRIA",clue:"Célula que reveste os ventrículos cerebrais.",specialties:[4],difficulty:3},{word:"SINAPSE QUÍMICA",clue:"Comunicação entre neurônios via neurotransmissores.",specialties:[4],difficulty:2},{word:"SINAPSE ELÉTRICA",clue:"Comunicação direta entre neurônios via junções gap.",specialties:[4],difficulty:3},{word:"CICLO DE KREBS",clue:"Via metabólica que produz energia.",specialties:[29],difficulty:2},{word:"CADEIA TRANSPORTADORA DE ELÉTRONS",clue:"Processo que gera ATP nas mitocôndrias.",specialties:[29],difficulty:2},{word:"GLICONEOGÊNESE",clue:"Formação de glicose a partir de precursores não carboidratos.",specialties:[29,6],difficulty:3},{word:"GLICOGÊNIO",clue:"Forma de armazenamento de glicose.",specialties:[29],difficulty:1},{word:"HEMOGLOBINÚRIA",clue:"Presença de hemoglobina na urina.",specialties:[10,5],difficulty:2},{word:"CETONÚRIA",clue:"Presença de corpos cetônicos na urina.",specialties:[10,6],difficulty:2},{word:"HEMATÓCRITO",clue:"Percentual de células vermelhas no sangue.",specialties:[5],difficulty:1},{word:"PLAQUETA",clue:"Fragmento celular envolvido na coagulação.",specialties:[5],difficulty:1},{word:"FERRO",clue:"Mineral essencial para a produção de hemoglobina.",specialties:[29,5],difficulty:1},{word:"ZINCO",clue:"Mineral importante para a função imunológica.",specialties:[29,21],difficulty:2},{word:"IODO",clue:"Mineral necessário para a produção de hormônios tireoidianos.",specialties:[29,6],difficulty:1},{word:"MAGNÉSIO",clue:"Mineral envolvido em muitas reações enzimáticas.",specialties:[29],difficulty:1},{word:"POTÁSSIO",clue:"Eletrólito importante para a função cardíaca.",specialties:[29,7],difficulty:1},{word:"SÓDIO",clue:"Eletrólito essencial para a transmissão nervosa.",specialties:[29,1],difficulty:1},{word:"CLORO",clue:"Eletrólito que ajuda a manter o equilíbrio hídrico.",specialties:[29],difficulty:1},{word:"CÁLCIO",clue:"Mineral importante para ossos e contração muscular.",specialties:[29,17],difficulty:1},{word:"FÓSFORO",clue:"Mineral presente em ATP e DNA.",specialties:[29],difficulty:1},{word:"BICARBONATO",clue:"Íon que atua como tampão no sangue.",specialties:[29,10],difficulty:2},{word:"AMILASE",clue:"Enzima que digere carboidratos.",specialties:[9,29],difficulty:1},{word:"LIPASE",clue:"Enzima que digere gorduras.",specialties:[9,29],difficulty:1},{word:"PEPSINA",clue:"Enzima que digere proteínas no estômago.",specialties:[9,29],difficulty:1},{word:"TRIPSINA",clue:"Enzima pancreática que digere proteínas.",specialties:[9,29],difficulty:2},{word:"QUIMOTRIPSINA",clue:"Outra enzima pancreática que digere proteínas.",specialties:[9,29],difficulty:2},{word:"ENTEROCINASE",clue:"Enzima que ativa a tripsina.",specialties:[9,29],difficulty:3},{word:"SECRETINA",clue:"Hormônio que estimula a secreção pancreática.",specialties:[6,9],difficulty:3},{word:"COLECISTOCININA",clue:"Hormônio que estimula a contração da vesícula biliar.",specialties:[6,9],difficulty:3},{word:"GASTRINA",clue:"Hormônio que estimula a secreção gástrica.",specialties:[6,9],difficulty:2},{word:"LEPTINA",clue:"Hormônio produzido pelo tecido adiposo que regula o apetite.",specialties:[6,29],difficulty:2},{word:"GRELINA",clue:"Hormônio que estimula o apetite.",specialties:[6,29],difficulty:2},{word:"NEFROLOGIA",clue:"Especialidade médica que estuda os rins.",specialties:[10],difficulty:1},{word:"HEPATOLOGIA",clue:"Especialidade médica que estuda o fígado.",specialties:[24],difficulty:1},{word:"DERMATOLOGIA",clue:"Especialidade médica que estuda a pele.",specialties:[12],difficulty:1},{word:"OTORRINOLARINGOLOGIA",clue:"Especialidade médica que estuda orelha, nariz e garganta.",specialties:[0],difficulty:1},{word:"OFTALMOLOGIA",clue:"Especialidade médica que estuda os olhos.",specialties:[4],difficulty:1},{word:"UROLOGIA",clue:"Especialidade médica que estuda o trato urinário e sistema reprodutor masculino.",specialties:[10,15],difficulty:1},{word:"GINECOLOGIA",clue:"Especialidade médica que estuda o sistema reprodutor feminino.",specialties:[15],difficulty:1},{word:"NEONATOLOGIA",clue:"Ramo da pediatria que cuida de recém-nascidos.",specialties:[16,14],difficulty:2},{word:"GERIATRIA",clue:"Especialidade médica que cuida de idosos.",specialties:[25],difficulty:1},{word:"ANESTESIOLOGIA",clue:"Especialidade médica que estuda anestesia.",specialties:[23],difficulty:1},{word:"FARMACOLOGIA",clue:"Estudo dos medicamentos e seus efeitos.",specialties:[26],difficulty:1},{word:"QUIMIOTAXIA",clue:"Movimento celular orientado por gradiente químico.",specialties:[21,2],difficulty:3},{word:"APNEIA DO SONO",clue:"Interrupção temporária da respiração durante o sono.",specialties:[8],difficulty:1},{word:"NARCOLEPSIA",clue:"Distúrbio do sono com sonolência diurna excessiva.",specialties:[13,4],difficulty:2},{word:"ATAXIA",clue:"Perda de coordenação muscular.",specialties:[4],difficulty:2},{word:"DIPLOPIA",clue:"Visão dupla.",specialties:[4],difficulty:1},{word:"ASTENIA",clue:"Fraqueza generalizada.",specialties:[25],difficulty:1},{word:"HIPOXEMIA",clue:"Baixo nível de oxigênio no sangue arterial.",specialties:[8],difficulty:2},{word:"HIPERCAPNIA",clue:"Nível elevado de dióxido de carbono no sangue.",specialties:[8],difficulty:2},{word:"BRONQUIECTASIA",clue:"Dilatação crônica dos brônquios.",specialties:[8],difficulty:3},{word:"SARCOIDOSE",clue:"Doença inflamatória que forma granulomas em órgãos.",specialties:[8,21],difficulty:3},{word:"ACROCIANOSE",clue:"Coloração azulada das extremidades.",specialties:[7,8],difficulty:2},{word:"LIPODISTROFIA",clue:"Distribuição anormal de gordura corporal.",specialties:[6,12],difficulty:3},{word:"AMILOIDOSE",clue:"Acúmulo de proteína amiloide nos tecidos.",specialties:[22,5],difficulty:3},{word:"ESCOLIOSE",clue:"Desvio lateral da coluna vertebral.",specialties:[17],difficulty:1},{word:"LORDOSE",clue:"Curvatura acentuada da coluna lombar.",specialties:[17],difficulty:1},{word:"ARTROSE",clue:"Degeneração crônica das articulações.",specialties:[17],difficulty:1},{word:"ESPONDILITE",clue:"Inflamação das vértebras.",specialties:[17],difficulty:2},{word:"FASCITE",clue:"Inflamação da fáscia muscular.",specialties:[17],difficulty:2},{word:"MENINGITE",clue:"Inflamação das meninges.",specialties:[4,20],difficulty:1},{word:"ENCEFALITE",clue:"Inflamação do tecido cerebral.",specialties:[4,20],difficulty:2},{word:"HIDROCEFALIA",clue:"Acúmulo excessivo de líquido cefalorraquidiano.",specialties:[4],difficulty:2},{word:"MIELOPATIA",clue:"Doença da medula espinhal.",specialties:[4],difficulty:3},{word:"RADICULOPATIA",clue:"Compressão de raízes nervosas espinhais.",specialties:[4],difficulty:2},{word:"NEUROPATIA",clue:"Doença dos nervos periféricos.",specialties:[4],difficulty:2},{word:"GLIOMA",clue:"Tumor originado das células gliais.",specialties:[11,4],difficulty:3},{word:"MENINGIOMA",clue:"Tumor benigno das meninges.",specialties:[11,4],difficulty:3},{word:"ASTROCITOMA",clue:"Tumor cerebral originado de astrócitos.",specialties:[11,4],difficulty:3},{word:"ESQUIZOFASIA",clue:"Discurso incoerente em pacientes esquizofrênicos.",specialties:[13],difficulty:3},{word:"ANHIDROSE",clue:"Incapacidade de suar.",specialties:[12,6],difficulty:2},{word:"POLIDIPSIAS",clue:"Sensação excessiva de sede.",specialties:[6],difficulty:2},{word:"GIGANTISMO",clue:"Crescimento excessivo devido ao excesso de GH.",specialties:[6],difficulty:2},{word:"NANISMO",clue:"Baixa estatura devido à deficiência de GH.",specialties:[6],difficulty:1},{word:"ACROMEGALIA",clue:"Crescimento exagerado de extremidades em adultos.",specialties:[6],difficulty:2},{word:"CUSHING",clue:"Síndrome por excesso de cortisol.",specialties:[6],difficulty:2},{word:"ADDISON",clue:"Doença por insuficiência adrenal.",specialties:[6],difficulty:2},{word:"HEMOCITOBLASTO",clue:"Célula tronco hematopoiética.",specialties:[5],difficulty:3},{word:"POLICITEMIA",clue:"Aumento do número de eritrócitos.",specialties:[5],difficulty:2},{word:"TALASSEMIA",clue:"Doença genética com produção anormal de hemoglobina.",specialties:[5,27],difficulty:2},{word:"ESFEROCITOSE",clue:"Doença hereditária com hemácias esféricas.",specialties:[5,27],difficulty:3},{word:"HEMOGLOBINOPATIA",clue:"Anormalidade estrutural na hemoglobina.",specialties:[5,27],difficulty:2},{word:"MALFORMAÇÃO",clue:"Anomalia no desenvolvimento de um órgão.",specialties:[14,22],difficulty:2},{word:"TERATOGÊNESE",clue:"Processo de formação de defeitos congênitos.",specialties:[14,27],difficulty:3},{word:"ABORTO",clue:"Interrupção da gravidez antes da viabilidade fetal.",specialties:[14],difficulty:1},{word:"PLACENTA PRÉVIA",clue:"Implantação da placenta sobre o colo uterino.",specialties:[14],difficulty:2},{word:"DESCOLAMENTO PREMATURO DE PLACENTA",clue:"Separação da placenta antes do parto.",specialties:[14],difficulty:2},{word:"CORIOAMNIONITE",clue:"Infecção das membranas fetais.",specialties:[14,20],difficulty:3},{word:"MOLA HIDATIFORME",clue:"Proliferação anormal do trofoblasto.",specialties:[14,11],difficulty:3},{word:"ECLÂMPSIA",clue:"Convulsões em gestantes com pré-eclâmpsia.",specialties:[14],difficulty:2},{word:"PÉLVIS",clue:"Região anatômica entre abdômen e membros inferiores.",specialties:[0],difficulty:1},{word:"PERÍNEO",clue:"Região entre a genitália e o ânus.",specialties:[0],difficulty:2},{word:"GLÂNDULA DE BARTHOLIN",clue:"Glândula vestibular maior na mulher.",specialties:[15],difficulty:2},{word:"CLITÓRIS",clue:"Órgão erétil feminino.",specialties:[15],difficulty:1},{word:"URETER",clue:"Canal que transporta urina do rim à bexiga.",specialties:[10],difficulty:1},{word:"URETRA",clue:"Canal que elimina urina da bexiga ao exterior.",specialties:[10],difficulty:1},{word:"EPIDÍDIMO",clue:"Estrutura onde os espermatozoides amadurecem.",specialties:[15],difficulty:2},{word:"DUCTO DEFERENTE",clue:"Canal que transporta espermatozoides.",specialties:[15],difficulty:2},{word:"VESÍCULA SEMINAL",clue:"Glândula que produz parte do sêmen.",specialties:[15],difficulty:2},{word:"PRÓSTATA",clue:"Glândula que produz fluido prostático.",specialties:[15],difficulty:1},{word:"GLÂNDULAS BULBOURETRAIS",clue:"Glândulas que lubrificam a uretra masculina.",specialties:[15],difficulty:3},{word:"CRIPTORQUIDIA",clue:"Testículo não descido.",specialties:[15,16],difficulty:2},{word:"HIDROCELE",clue:"Acúmulo de líquido na túnica vaginal.",specialties:[15],difficulty:2},{word:"VARICOCELE",clue:"Dilatação das veias do cordão espermático.",specialties:[15],difficulty:2},{word:"TORÇÃO TESTICULAR",clue:"Rotação do testículo sobre o cordão espermático.",specialties:[15,25],difficulty:2},{word:"BALANOPOSTITE",clue:"Inflamação da glande e prepúcio.",specialties:[15,20],difficulty:3},{word:"FIMOSE",clue:"Estreitamento do prepúcio.",specialties:[15],difficulty:1},{word:"PARAFIMOSE",clue:"Impossibilidade de recolocar o prepúcio sobre a glande.",specialties:[15],difficulty:2},{word:"PRIAPISMO",clue:"Ereção prolongada e dolorosa.",specialties:[15],difficulty:2},{word:"ANENCEFALIA",clue:"Malformação com ausência de parte do encéfalo.",specialties:[14,4],difficulty:3},{word:"MIELOMENINGOCELE",clue:"Defeito no fechamento do tubo neural.",specialties:[14,4],difficulty:3},{word:"ESPINHA BÍFIDA",clue:"Falha no fechamento das vértebras.",specialties:[14,4],difficulty:2},{word:"DISRAFISMO",clue:"Termo geral para defeitos de fechamento embrionário.",specialties:[14],difficulty:3},{word:"DIASTEMA",clue:"Espaçamento entre dentes.",specialties:[16],difficulty:2},{word:"ANOMALIA DE EBSTEIN",clue:"Malformação da válvula tricúspide.",specialties:[16,7],difficulty:3},{word:"TETRALOGIA DE FALLOT",clue:"Conjunto de quatro defeitos cardíacos congênitos.",specialties:[16,7],difficulty:3},{word:"CIV",clue:"Comunicação interventricular.",specialties:[16,7],difficulty:2},{word:"CIA",clue:"Comunicação interatrial.",specialties:[16,7],difficulty:2},{word:"PCA",clue:"Persistência do canal arterial.",specialties:[16,7],difficulty:2},{word:"ATRESIA",clue:"Ausência de abertura normal em órgão tubular.",specialties:[16,14],difficulty:2},{word:"FENILCETONÚRIA",clue:"Erro inato do metabolismo da fenilalanina.",specialties:[16,27],difficulty:2},{word:"GALACTOSEMIA",clue:"Deficiência na metabolização da galactose.",specialties:[16,27],difficulty:2},{word:"HIPOTONIA",clue:"Diminuição do tônus muscular.",specialties:[16,17],difficulty:1},{word:"HIPERTONIA",clue:"Aumento do tônus muscular.",specialties:[16,17],difficulty:1},{word:"PLAGIOCEFALIA",clue:"Assimetria craniana em lactentes.",specialties:[16],difficulty:3},{word:"LINFEDEMA",clue:"Acúmulo de linfa nos tecidos.",specialties:[21,17],difficulty:2},{word:"ANOSMIA",clue:"Perda do sentido do olfato.",specialties:[4],difficulty:2},{word:"AGEUSIA",clue:"Perda do sentido do paladar.",specialties:[4],difficulty:2},{word:"PAROSMIA",clue:"Distúrbio do olfato.",specialties:[4],difficulty:3},{word:"TINITUS",clue:"Sons percebidos nos ouvidos sem estímulo externo.",specialties:[4],difficulty:1},{word:"NISTAGMO",clue:"Movimentos involuntários dos olhos.",specialties:[4],difficulty:2},{word:"AMBLIOPIA",clue:"Diminuição da acuidade visual sem causa orgânica.",specialties:[4],difficulty:2},{word:"ESTRABISMO",clue:"Desalinhamento dos olhos.",specialties:[4],difficulty:1},{word:"OTORRAGIA",clue:"Sangramento pelo ouvido.",specialties:[4],difficulty:2},{word:"OTORREIA",clue:"Saída de líquido pelo ouvido.",specialties:[4],difficulty:2},{word:"GLOSSITE",clue:"Inflamação da língua.",specialties:[9],difficulty:2},{word:"ESTOMATITE",clue:"Inflamação da mucosa bucal.",specialties:[9],difficulty:1},{word:"FARINGITE",clue:"Inflamação da faringe.",specialties:[8,20],difficulty:1},{word:"LARINGITE",clue:"Inflamação da laringe.",specialties:[8,20],difficulty:1},{word:"DISFAGIA",clue:"Dificuldade para engolir.",specialties:[9],difficulty:1},{word:"ODINOFAGIA",clue:"Dor ao engolir.",specialties:[9],difficulty:2},{word:"RGE",clue:"Refluxo gastroesofágico.",specialties:[9],difficulty:1},{word:"PIROSE",clue:"Sensação de queimação retroesternal.",specialties:[9],difficulty:1},{word:"MELENA",clue:"Fezes escuras por sangue digerido.",specialties:[9],difficulty:2},{word:"HEMATÊMESE",clue:"Vômito com sangue.",specialties:[9],difficulty:2},{word:"HEMATOCEZIA",clue:"Sangue vivo nas fezes.",specialties:[9],difficulty:2},{word:"TENESMO",clue:"Sensação de evacuação incompleta.",specialties:[9],difficulty:2},{word:"DIARREIA",clue:"Fezes líquidas frequentes.",specialties:[9],difficulty:1},{word:"CONSTIPAÇÃO",clue:"Dificuldade ou infrequência de evacuações.",specialties:[9],difficulty:1},{word:"METEORISMO",clue:"Excesso de gases intestinais.",specialties:[9],difficulty:2},{word:"ASCITE",clue:"Acúmulo de líquido na cavidade peritoneal.",specialties:[9,24],difficulty:2},{word:"HEPATOMEGALIA",clue:"Aumento do tamanho do fígado.",specialties:[24],difficulty:1},{word:"ESPLENOMEGALIA",clue:"Aumento do tamanho do baço.",specialties:[5],difficulty:2},{word:"ICTERÍCIA",clue:"Amarelamento da pele e mucosas.",specialties:[24,5],difficulty:1},{word:"COLELITÍASE",clue:"Presença de cálculos biliares.",specialties:[24,9],difficulty:2},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[24,9],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9],difficulty:2},{word:"GANGRENA",clue:"Morte de tecido devido à falta de circulação.",specialties:[22,25],difficulty:2},{word:"SEPSIS",clue:"Resposta inflamatória sistêmica a uma infecção.",specialties:[25,20],difficulty:1},{word:"CHOQUE SÉPTICO",clue:"Disfunção circulatória grave por infecção.",specialties:[25,20],difficulty:2},{word:"ENDOCARDITE",clue:"Infecção do revestimento interno do coração.",specialties:[7,20],difficulty:2},{word:"PERICARDITE",clue:"Inflamação do pericárdio.",specialties:[7,20],difficulty:2},{word:"MIOCARDITE",clue:"Inflamação do músculo cardíaco.",specialties:[7,20],difficulty:2},{word:"ARRITMIA",clue:"Alteração do ritmo cardíaco normal.",specialties:[7],difficulty:1},{word:"TAQUICARDIA",clue:"Batimento cardíaco acelerado.",specialties:[7],difficulty:1},{word:"BRADICARDIA",clue:"Batimento cardíaco lento.",specialties:[7],difficulty:1},{word:"FIBRILAÇÃO",clue:"Contração rápida e descoordenada das fibras cardíacas.",specialties:[7],difficulty:2},{word:"ANISOCITOSE",clue:"Variação no tamanho das células sanguíneas.",specialties:[5],difficulty:2},{word:"POIQUILOCITOSE",clue:"Variação na forma das células sanguíneas.",specialties:[5],difficulty:2},{word:"LEUCOPENIA",clue:"Redução no número de leucócitos.",specialties:[5],difficulty:2},{word:"LEUCOCITOSE",clue:"Aumento no número de leucócitos.",specialties:[5],difficulty:1},{word:"TROMBOCITOPENIA",clue:"Redução no número de plaquetas.",specialties:[5],difficulty:2},{word:"ESPLENECTOMIA",clue:"Remoção cirúrgica do baço.",specialties:[19,5],difficulty:2},{word:"HEMOGLOBINURIA",clue:"Presença de hemoglobina na urina.",specialties:[10,5],difficulty:2},{word:"HEMATURIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:1},{word:"GLOMERULONEFRITE",clue:"Inflamação dos glomérulos renais.",specialties:[10],difficulty:2},{word:"NEFROSE",clue:"Doença degenerativa dos rins.",specialties:[10],difficulty:2},{word:"HEMODIALISE",clue:"Procedimento para filtrar o sangue em insuficiência renal.",specialties:[10],difficulty:1},{word:"OFTALMOLOGIA",clue:"Especialidade médica que estuda os olhos.",specialties:[4],difficulty:1},{word:"CATARATA",clue:"Opacificação do cristalino do olho.",specialties:[4],difficulty:1},{word:"GLAUCOMA",clue:"Aumento da pressão intraocular.",specialties:[4],difficulty:1},{word:"RETINOPATIA",clue:"Doença da retina.",specialties:[4],difficulty:2},{word:"CERATITE",clue:"Inflamação da córnea.",specialties:[4,20],difficulty:2},{word:"UVEITE",clue:"Inflamação da úvea do olho.",specialties:[4,20],difficulty:2},{word:"ESTOMATOLOGIA",clue:"Estudo da boca e suas doenças.",specialties:[9],difficulty:2},{word:"CÁRIE",clue:"Destruição do esmalte dentário por bactérias.",specialties:[9],difficulty:1},{word:"PERIODONTITE",clue:"Inflamação dos tecidos de suporte dos dentes.",specialties:[9],difficulty:2},{word:"GINGIVITE",clue:"Inflamação da gengiva.",specialties:[9],difficulty:1},{word:"HEPATITE A",clue:"Infecção viral aguda do fígado.",specialties:[24,20],difficulty:1},{word:"HEPATITE B",clue:"Infecção viral crônica do fígado.",specialties:[24,20],difficulty:1},{word:"HEPATITE D",clue:"Infecção viral que necessita do vírus da hepatite B.",specialties:[24,20],difficulty:2},{word:"HEPATITE E",clue:"Infecção viral do fígado transmitida por via fecal-oral.",specialties:[24,20],difficulty:2},{word:"MONONUCLEOSE",clue:"Doença infecciosa causada pelo vírus Epstein-Barr.",specialties:[20,5],difficulty:2},{word:"LINFOMA",clue:"Câncer do sistema linfático.",specialties:[11,5],difficulty:2},{word:"LEUCEMIA LINFOCÍTICA",clue:"Câncer dos linfócitos.",specialties:[11,5],difficulty:2},{word:"LEUCEMIA MIELOCÍTICA",clue:"Câncer das células mieloides.",specialties:[11,5],difficulty:2},{word:"ANEMIA FERROPRIVA",clue:"Anemia por deficiência de ferro.",specialties:[5],difficulty:1},{word:"ANEMIA MEGALOBLÁSTICA",clue:"Anemia por deficiência de vitamina B12 ou ácido fólico.",specialties:[5],difficulty:2},{word:"ANEMIA HEMOLÍTICA",clue:"Anemia por destruição excessiva de eritrócitos.",specialties:[5],difficulty:2},{word:"ANEMIA FALCIFORME",clue:"Anemia hereditária com eritrócitos em forma de foice.",specialties:[5,27],difficulty:2},{word:"AIDS",clue:"Síndrome da imunodeficiência adquirida.",specialties:[20,21],difficulty:1},{word:"HIV",clue:"Vírus da imunodeficiência humana.",specialties:[20,21],difficulty:1},{word:"ZIKA VÍRUS",clue:"Vírus transmitido pelo mosquito Aedes.",specialties:[20],difficulty:1},{word:"CHIKUNGUNYA",clue:"Doença viral transmitida por mosquitos.",specialties:[20],difficulty:1},{word:"COVID",clue:"Doença causada pelo coronavírus SARS-CoV-2.",specialties:[20,8],difficulty:1},{word:"HERPES ZÓSTER",clue:"Reativação do vírus da varicela.",specialties:[20,12],difficulty:2},{word:"RUBEOLA",clue:"Doença viral com risco para gestantes.",specialties:[20,14],difficulty:1},{word:"VARÍOLA",clue:"Doença viral erradicada mundialmente.",specialties:[20],difficulty:2},{word:"FEBRE TIFOIDE",clue:"Infecção bacteriana por Salmonella typhi.",specialties:[20],difficulty:2},{word:"FEBRE REUMÁTICA",clue:"Doença inflamatória após infecção estreptocócica.",specialties:[7,20],difficulty:2},{word:"COLITE ULCERATIVA",clue:"Doença inflamatória do intestino grosso.",specialties:[9],difficulty:2},{word:"DOENÇA DE CROHN",clue:"Doença inflamatória que pode afetar qualquer parte do trato digestivo.",specialties:[9],difficulty:2},{word:"CELÍACA",clue:"Doença autoimune desencadeada pelo glúten.",specialties:[9,21],difficulty:2},{word:"INTOLERÂNCIA À LACTOSE",clue:"Incapacidade de digerir lactose.",specialties:[9],difficulty:1},{word:"SÍNDROME DO INTESTINO IRRITÁVEL",clue:"Distúrbio funcional do intestino.",specialties:[9],difficulty:1},{word:"DIVERTICULITE",clue:"Inflamação de divertículos no intestino grosso.",specialties:[9],difficulty:2},{word:"HEMORROIDAS",clue:"Dilatações venosas no canal anal.",specialties:[9],difficulty:1},{word:"FISSURA ANAL",clue:"Pequena laceração no revestimento anal.",specialties:[9],difficulty:2},{word:"FÍSTULA ANAL",clue:"Canal anormal entre o canal anal e a pele.",specialties:[9,19],difficulty:2},{word:"HERNIA DE HIATO",clue:"Protrusão do estômago através do diafragma.",specialties:[9],difficulty:2},{word:"ULCERA GÁSTRICA",clue:"Ferida na mucosa do estômago.",specialties:[9],difficulty:1},{word:"ULCERA DUODENAL",clue:"Ferida na mucosa do duodeno.",specialties:[9],difficulty:1},{word:"GASTRINOMA",clue:"Tumor produtor de gastrina.",specialties:[11,9],difficulty:3},{word:"INSULINOMA",clue:"Tumor produtor de insulina.",specialties:[11,6],difficulty:3},{word:"FEOCROMOCITOMA",clue:"Tumor da medula adrenal produtor de catecolaminas.",specialties:[11,6],difficulty:3},{word:"ADENOMA HIPOFISÁRIO",clue:"Tumor benigno da hipófise.",specialties:[11,6],difficulty:2},{word:"NEOPLASIA ENDOCRINA MÚLTIPLA",clue:"Síndrome genética com múltiplos tumores endócrinos.",specialties:[11,6,27],difficulty:3},{word:"HANSENÍASE",clue:"Doença infecciosa crônica causada pelo Mycobacterium leprae.",specialties:[20,12],difficulty:2},{word:"PIODERMA",clue:"Infecção cutânea purulenta.",specialties:[12,20],difficulty:2},{word:"DERMATOMIOSITE",clue:"Doença inflamatória da pele e músculos.",specialties:[12,17],difficulty:3},{word:"PSORIASE",clue:"Doença autoimune com placas escamosas na pele.",specialties:[12,21],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação da pele em áreas delimitadas.",specialties:[12],difficulty:1},{word:"ALOPECIA AREATA",clue:"Perda de cabelo em áreas específicas.",specialties:[12],difficulty:2},{word:"DERMATITE SEBORREICA",clue:"Inflamação crônica da pele com descamação oleosa.",specialties:[12],difficulty:1},{word:"DERMATITE ATÓPICA",clue:"Eczema crônico, geralmente iniciado na infância.",specialties:[12,16],difficulty:1},{word:"URTICÁRIA",clue:"Reação alérgica com erupções cutâneas pruriginosas.",specialties:[12,21],difficulty:1},{word:"ANGIOEDEMA",clue:"Inchaço profundo da pele e mucosas.",specialties:[12,21],difficulty:2},{word:"HEPATOCARCINOMA",clue:"Câncer primário do fígado.",specialties:[11,24],difficulty:2},{word:"CARCINOMA DE CÉLULAS ESCAMOSAS",clue:"Tipo de câncer de pele.",specialties:[11,12],difficulty:2},{word:"MELANOMA MALIGNO",clue:"Tipo agressivo de câncer de pele.",specialties:[11,12],difficulty:1},{word:"ADENOCARCINOMA",clue:"Câncer originado em células glandulares.",specialties:[11],difficulty:2},{word:"LEIOMIOSSARCOMA",clue:"Tumor maligno do músculo liso.",specialties:[11,17],difficulty:3},{word:"OSTEOSSARCOMA",clue:"Tumor maligno do osso.",specialties:[11,17],difficulty:2},{word:"RABDOMIOSSARCOMA",clue:"Tumor maligno do músculo estriado.",specialties:[11,17],difficulty:3},{word:"NEUROBLASTOMA",clue:"Tumor maligno do sistema nervoso simpático.",specialties:[11,16],difficulty:3},{word:"RETINOBLASTOMA",clue:"Tumor maligno da retina em crianças.",specialties:[11,16],difficulty:2},{word:"TERATOMA",clue:"Tumor derivado de células germinativas.",specialties:[11],difficulty:3},{word:"MESOTELIOMA",clue:"Câncer das células mesoteliais, associado ao amianto.",specialties:[11],difficulty:3},{word:"GLIOBLASTOMA",clue:"Tipo agressivo de tumor cerebral.",specialties:[11,4],difficulty:2},{word:"ASTROCITOMA",clue:"Tumor cerebral originado de astrócitos.",specialties:[11,4],difficulty:2},{word:"SCHWANNOMA",clue:"Tumor benigno das células de Schwann.",specialties:[11,4],difficulty:3},{word:"NEURINOMA",clue:"Outro nome para schwannoma.",specialties:[11,4],difficulty:3},{word:"MENINGIOMA",clue:"Tumor benigno das meninges.",specialties:[11,4],difficulty:2},{word:"SÍNDROME DE DOWN",clue:"Trissomia do cromossomo 21.",specialties:[16,27],difficulty:1},{word:"SÍNDROME DE TURNER",clue:"Monossomia do cromossomo X em meninas.",specialties:[14,27],difficulty:2},{word:"SÍNDROME DE KLINEFELTER",clue:"Cromossomo X extra em homens (XXY).",specialties:[15,27],difficulty:2},{word:"SÍNDROME DE EDWARDS",clue:"Trissomia do cromossomo 18.",specialties:[16,27],difficulty:3},{word:"SÍNDROME DE PATAU",clue:"Trissomia do cromossomo 13.",specialties:[16,27],difficulty:3},{word:"FIBROSE CÍSTICA",clue:"Doença genética que afeta glândulas exócrinas.",specialties:[16,27],difficulty:2},{word:"COREIA DE HUNTINGTON",clue:"Doença neurodegenerativa hereditária.",specialties:[4,27],difficulty:2},{word:"HEMOFILIA A",clue:"Deficiência do fator VIII de coagulação.",specialties:[5,27],difficulty:2},{word:"HEMOFILIA B",clue:"Deficiência do fator IX de coagulação.",specialties:[5,27],difficulty:2},{word:"DISTROFIA MUSCULAR DE DUCHENNE",clue:"Doença genética que causa fraqueza muscular.",specialties:[17,27],difficulty:2},{word:"FENILCETONURIA",clue:"Deficiência na metabolização da fenilalanina.",specialties:[16,27],difficulty:2},{word:"GALACTOSEMIA",clue:"Incapacidade de metabolizar galactose.",specialties:[16,27],difficulty:2},{word:"ANEMIA DE FANCONI",clue:"Doença genética com falência da medula óssea.",specialties:[5,27],difficulty:3},{word:"XERODERMA PIGMENTOSO",clue:"Hipersensibilidade à luz UV.",specialties:[12,27],difficulty:3},{word:"ENFERMAGEM",clue:"Profissão que auxilia na assistência ao paciente.",specialties:[25],difficulty:1},{word:"FISIOTERAPIA",clue:"Profissão que reabilita funções motoras.",specialties:[17],difficulty:1},{word:"FONOAUDIOLOGIA",clue:"Profissão que trata distúrbios da comunicação.",specialties:[4,13],difficulty:1},{word:"NUTRIÇÃO",clue:"Ciência que estuda os alimentos e suas interações.",specialties:[9,25],difficulty:1},{word:"PSICOLOGIA",clue:"Ciência que estuda o comportamento humano.",specialties:[13],difficulty:1},{word:"TERAPIA OCUPACIONAL",clue:"Profissão que auxilia na independência funcional.",specialties:[17,13],difficulty:1},{word:"FARMÁCIA",clue:"Ciência que estuda medicamentos.",specialties:[26],difficulty:1},{word:"BIOMEDICINA",clue:"Profissão que atua em análises clínicas e pesquisas.",specialties:[28],difficulty:1},{word:"BIOTECNOLOGIA",clue:"Uso de organismos vivos para desenvolver produtos.",specialties:[28,27],difficulty:2},{word:"PATOLOGIA CLÍNICA",clue:"Área que realiza exames laboratoriais para diagnóstico.",specialties:[22],difficulty:1},{word:"SAÚDE PÚBLICA",clue:"Área que estuda a saúde das populações.",specialties:[25],difficulty:1},{word:"EPIDEMIOLOGIA",clue:"Estudo da distribuição e determinantes das doenças.",specialties:[20],difficulty:1},{word:"BIOESTATÍSTICA",clue:"Aplicação de estatística em biologia e medicina.",specialties:[25],difficulty:2},{word:"BIOÉTICA",clue:"Estudo das questões éticas na medicina e biologia.",specialties:[25],difficulty:1},{word:"CIRURGIA PLÁSTICA",clue:"Especialidade que corrige deformidades e lesões.",specialties:[19],difficulty:1},{word:"CIRURGIA CARDIOVASCULAR",clue:"Cirurgia do coração e vasos sanguíneos.",specialties:[19,7],difficulty:1},{word:"CIRURGIA TORÁCICA",clue:"Cirurgia dos órgãos do tórax.",specialties:[19,8],difficulty:1},{word:"CIRURGIA VASCULAR",clue:"Cirurgia dos vasos sanguíneos periféricos.",specialties:[19,7],difficulty:1},{word:"CIRURGIA GERAL",clue:"Especialidade ampla que inclui vários tipos de cirurgia.",specialties:[19],difficulty:1},{word:"ORTOPEDIA",clue:"Especialidade que trata doenças do sistema musculoesquelético.",specialties:[17],difficulty:1},{word:"TRAUMATOLOGIA",clue:"Estudo das lesões causadas por traumas.",specialties:[17,25],difficulty:1},{word:"RADIOLOGIA INTERVENCIONISTA",clue:"Procedimentos minimamente invasivos guiados por imagem.",specialties:[18],difficulty:2},{word:"MEDICINA NUCLEAR",clue:"Uso de substâncias radioativas para diagnóstico e terapia.",specialties:[18],difficulty:2},{word:"DENSITOMETRIA ÓSSEA",clue:"Exame que avalia a densidade mineral óssea.",specialties:[18,17],difficulty:1},{word:"ANGIOGRAFIA",clue:"Exame radiológico dos vasos sanguíneos.",specialties:[18,7],difficulty:2},{word:"TOMOGRAFIA COMPUTADORIZADA",clue:"Exame de imagem que usa raios X para criar cortes transversais.",specialties:[18],difficulty:1},{word:"RESSONÂNCIA MAGNÉTICA",clue:"Exame de imagem que usa campos magnéticos.",specialties:[18],difficulty:1},{word:"ULTRASSONOGRAFIA",clue:"Exame de imagem que usa ondas sonoras.",specialties:[18],difficulty:1},{word:"ECOCARDIOGRAMA",clue:"Ultrassom do coração.",specialties:[7,18],difficulty:1},{word:"ELETROENCEFALOGRAMA",clue:"Registro da atividade elétrica cerebral.",specialties:[4,18],difficulty:1},{word:"ELETROMIOGRAMA",clue:"Exame que avalia a atividade elétrica dos músculos.",specialties:[17,18],difficulty:2},{word:"TESTE ERGOMÉTRICO",clue:"Avaliação do desempenho cardíaco durante esforço.",specialties:[7],difficulty:1},{word:"CINTILOGRAFIA",clue:"Exame que usa radiofármacos para avaliar órgãos.",specialties:[18],difficulty:2},{word:"PET SCAN",clue:"Tomografia por emissão de pósitrons.",specialties:[18],difficulty:2},{word:"COLPOSCOPIA",clue:"Exame do colo uterino com lente de aumento.",specialties:[15],difficulty:1},{word:"HISTEROSCOPIA",clue:"Exame endoscópico do interior do útero.",specialties:[15],difficulty:2},{word:"LAPAROSCOPIA",clue:"Procedimento cirúrgico minimamente invasivo no abdômen.",specialties:[19],difficulty:1},{word:"ENDOSCOPIA DIGESTIVA",clue:"Exame do trato gastrointestinal com endoscópio.",specialties:[9,18],difficulty:1},{word:"BRONCOSCOPIA",clue:"Exame das vias aéreas com broncoscópio.",specialties:[8,18],difficulty:2},{word:"ARTROSCOPIA",clue:"Exame de articulações com endoscópio.",specialties:[17,18],difficulty:2},{word:"CISTOSCOPIA",clue:"Exame da bexiga com cistoscópio.",specialties:[10,18],difficulty:2},{word:"ELETROCARDIOGRAMA",clue:"Registro da atividade elétrica do coração.",specialties:[7],difficulty:1},{word:"MAPA",clue:"Monitorização Ambulatorial da Pressão Arterial.",specialties:[7],difficulty:2},{word:"HOLTER",clue:"Monitorização eletrocardiográfica contínua.",specialties:[7],difficulty:2},{word:"DOPPLER TRANSCRANIANO",clue:"Exame ultrassonográfico das artérias cerebrais.",specialties:[4,18],difficulty:3},{word:"TESTE DE ESFORÇO",clue:"Avaliação da resposta cardiovascular ao exercício.",specialties:[7],difficulty:1},{word:"BIÓPSIA",clue:"Remoção de tecido para exame diagnóstico.",specialties:[19,22],difficulty:1},{word:"HEMODINÂMICA",clue:"Estudo do fluxo sanguíneo.",specialties:[7],difficulty:2},{word:"ANGIOPLASTIA",clue:"Procedimento para desobstruir vasos sanguíneos.",specialties:[7,19],difficulty:1},{word:"CATETERISMO CARDÍACO",clue:"Procedimento para avaliar as artérias coronárias.",specialties:[7,19],difficulty:1},{word:"MARCA-PASSO",clue:"Dispositivo que regula os batimentos cardíacos.",specialties:[7],difficulty:1},{word:"PNEUMONIA",clue:"Infecção dos pulmões causada por bactérias ou vírus.",specialties:[8,20],difficulty:1},{word:"BRONQUITE",clue:"Inflamação dos brônquios.",specialties:[8,20],difficulty:1},{word:"ENFISEMA",clue:"Doença pulmonar que causa falta de ar.",specialties:[8],difficulty:2},{word:"ASMA",clue:"Doença respiratória caracterizada por broncoespasmo.",specialties:[8],difficulty:1},{word:"TUBERCULOSE",clue:"Doença infecciosa causada pelo Mycobacterium tuberculosis.",specialties:[8,20],difficulty:1},{word:"HIPERTENSAO",clue:"Pressão arterial elevada crônica.",specialties:[7],difficulty:1},{word:"INFARTO",clue:"Morte do tecido cardíaco devido à falta de oxigênio.",specialties:[7,25],difficulty:1},{word:"ANGINA",clue:"Dor no peito devido à diminuição do fluxo sanguíneo.",specialties:[7],difficulty:1},{word:"ATEROSCLEROSE",clue:"Acúmulo de placas nas artérias.",specialties:[7],difficulty:2},{word:"ARRITMIA",clue:"Batimentos cardíacos irregulares.",specialties:[7],difficulty:1},{word:"GASTRITE",clue:"Inflamação da mucosa do estômago.",specialties:[9],difficulty:1},{word:"ESOFAGITE",clue:"Inflamação do esôfago.",specialties:[9],difficulty:1},{word:"CIRROSE",clue:"Cicatrização crônica do fígado.",specialties:[24],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9],difficulty:2},{word:"HEPATITE",clue:"Inflamação do fígado.",specialties:[24,20],difficulty:1},{word:"INSUFICIENCIA RENAL",clue:"Perda da função dos rins.",specialties:[10],difficulty:1},{word:"LITIASE RENAL",clue:"Formação de cálculos nos rins.",specialties:[10],difficulty:1},{word:"NEFROPATIA DIABETICA",clue:"Doença renal causada por diabetes.",specialties:[10,6],difficulty:2},{word:"SINDROME NEFROTICA",clue:"Condição renal com perda de proteína na urina.",specialties:[10],difficulty:2},{word:"HEMATURIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:1},{word:"OSTEOPOROSE",clue:"Doença que diminui a densidade óssea.",specialties:[17],difficulty:1},{word:"ARTRITE REUMATOIDE",clue:"Doença autoimune que causa inflamação nas articulações.",specialties:[17,21],difficulty:2},{word:"LUXACAO",clue:"Deslocamento de um osso da articulação.",specialties:[17],difficulty:1},{word:"FRATURA",clue:"Quebra de um osso.",specialties:[17],difficulty:1},{word:"ESCOLIOSE",clue:"Curvatura anormal da coluna vertebral.",specialties:[17],difficulty:1},{word:"DEPRESSAO",clue:"Transtorno mental com humor deprimido persistente.",specialties:[13],difficulty:1},{word:"ANSIEDADE",clue:"Sensação de preocupação e medo intensos.",specialties:[13],difficulty:1},{word:"ESQUIZOFRENIA",clue:"Transtorno mental que afeta a percepção da realidade.",specialties:[13],difficulty:2},{word:"TRANSTORNO BIPOLAR",clue:"Transtorno de humor com episódios de mania e depressão.",specialties:[13],difficulty:1},{word:"FOBIA",clue:"Medo intenso e irracional de algo específico.",specialties:[13],difficulty:1},{word:"LEUCEMIA",clue:"Câncer dos tecidos formadores de sangue.",specialties:[11,5],difficulty:2},{word:"LINFOMA",clue:"Câncer do sistema linfático.",specialties:[11,5],difficulty:2},{word:"MIELOMA MULTIPLO",clue:"Câncer das células plasmáticas.",specialties:[11,5],difficulty:3},{word:"CARCINOMA",clue:"Tipo de câncer que começa na pele ou nos tecidos que revestem órgãos.",specialties:[11],difficulty:2},{word:"SARCOMA",clue:"Câncer dos tecidos conjuntivos.",specialties:[11],difficulty:2},{word:"ANEMIA",clue:"Diminuição da capacidade do sangue de transportar oxigênio.",specialties:[5],difficulty:1},{word:"HEMOFILIA",clue:"Distúrbio da coagulação do sangue.",specialties:[5,27],difficulty:2},{word:"TALASSEMIA",clue:"Doença hereditária que afeta a produção de hemoglobina.",specialties:[5,27],difficulty:2},{word:"MALARIA",clue:"Doença infecciosa transmitida por mosquitos.",specialties:[20],difficulty:2},{word:"DENGUE",clue:"Doença viral transmitida pelo mosquito Aedes aegypti.",specialties:[20],difficulty:1},{word:"ZIKA",clue:"Doença viral transmitida por mosquitos.",specialties:[20],difficulty:1},{word:"LEPTOSPIROSE",clue:"Doença bacteriana transmitida pela urina de animais.",specialties:[20],difficulty:2},{word:"VARICELA",clue:"Doença viral também conhecida como catapora.",specialties:[16,20],difficulty:1},{word:"SARAMPO",clue:"Doença viral contagiosa com erupções cutâneas.",specialties:[16,20],difficulty:1},{word:"CAXUMBA",clue:"Infecção viral que causa inchaço das glândulas salivares.",specialties:[16,20],difficulty:1},{word:"RUBEOLA",clue:"Doença viral que pode causar defeitos congênitos.",specialties:[16,14],difficulty:1},{word:"POLIOMIELITE",clue:"Doença viral que pode causar paralisia.",specialties:[16,20],difficulty:2},{word:"HEMORRAGIA",clue:"Perda excessiva de sangue.",specialties:[25,5],difficulty:1},{word:"SINCOPE",clue:"Perda temporária da consciência.",specialties:[25],difficulty:2},{word:"CONVULSAO",clue:"Contrações musculares involuntárias e súbitas.",specialties:[25],difficulty:1},{word:"CHOQUE",clue:"Condição crítica de insuficiência circulatória.",specialties:[25],difficulty:2},{word:"HIPERTERMIA",clue:"Aumento anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"HIPOTERMIA",clue:"Diminuição anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"ALZHEIMER",clue:"Doença neurodegenerativa que causa demência.",specialties:[4],difficulty:1},{word:"PARKINSON",clue:"Doença neurodegenerativa que afeta o movimento.",specialties:[4],difficulty:1},{word:"EPILEPSIA",clue:"Condição neurológica com crises convulsivas.",specialties:[4],difficulty:1},{word:"MIGRANIA",clue:"Tipo de dor de cabeça intensa e pulsátil.",specialties:[4],difficulty:1},{word:"ESCLEROSE MULTIPLA",clue:"Doença autoimune que afeta o sistema nervoso central.",specialties:[4,21],difficulty:2},{word:"GASTROENTERITE",clue:"Inflamação do estômago e intestinos.",specialties:[9],difficulty:1},{word:"APENDICITE",clue:"Inflamação do apêndice.",specialties:[9],difficulty:1},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[9],difficulty:2},{word:"HEMORROIDAS",clue:"Dilatação das veias do reto e ânus.",specialties:[9],difficulty:1},{word:"DIVERTICULITE",clue:"Inflamação dos divertículos no intestino grosso.",specialties:[9],difficulty:2},{word:"BRONCODILATADOR",clue:"Medicamento que dilata as vias aéreas.",specialties:[8,26],difficulty:1},{word:"ANTIHISTAMINICO",clue:"Medicamento que bloqueia os efeitos da histamina.",specialties:[26,21],difficulty:1},{word:"ANALGESICO",clue:"Medicamento que alivia a dor.",specialties:[26],difficulty:1},{word:"ANTIPIRETICO",clue:"Medicamento que reduz a febre.",specialties:[26],difficulty:1},{word:"ANTIBIOTICO",clue:"Medicamento que combate infecções bacterianas.",specialties:[26,20],difficulty:1},{word:"INSULINA",clue:"Hormônio que regula os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"GLUCAGON",clue:"Hormônio que aumenta os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"CORTISOL",clue:"Hormônio do estresse produzido pelas glândulas adrenais.",specialties:[6],difficulty:1},{word:"ADRENALINA",clue:"Hormônio que prepara o corpo para a ação.",specialties:[6,1],difficulty:1},{word:"ESTROGENIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"PROGESTERONA",clue:"Hormônio envolvido no ciclo menstrual e gravidez.",specialties:[6,15],difficulty:1},{word:"TESTOSTERONA",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:1},{word:"TIROXINA",clue:"Hormônio produzido pela tireoide.",specialties:[6],difficulty:1},{word:"PARATORMONIO",clue:"Hormônio que regula os níveis de cálcio no sangue.",specialties:[6],difficulty:2},{word:"HEMOSTASIA",clue:"Processo de parar um sangramento.",specialties:[5,19],difficulty:1},{word:"FIBRINA",clue:"Proteína que forma a rede de um coágulo sanguíneo.",specialties:[5,29],difficulty:2},{word:"PLAQUETA",clue:"Célula sanguínea envolvida na coagulação.",specialties:[5],difficulty:1},{word:"HEPARINA",clue:"Anticoagulante natural do corpo.",specialties:[5,26],difficulty:2},{word:"WARFARINA",clue:"Medicamento anticoagulante.",specialties:[26,5],difficulty:2},{word:"INSOMNIO",clue:"Dificuldade em iniciar ou manter o sono.",specialties:[13],difficulty:1},{word:"NARCOLEPSIA",clue:"Distúrbio do sono com sonolência diurna excessiva.",specialties:[13],difficulty:2},{word:"APNEIA DO SONO",clue:"Interrupção temporária da respiração durante o sono.",specialties:[8],difficulty:1},{word:"HIPOTIREOIDISMO",clue:"Deficiência de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"HIPERTIREOIDISMO",clue:"Excesso de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"ACNE",clue:"Doença de pele caracterizada por espinhas.",specialties:[12],difficulty:1},{word:"DERMATITE",clue:"Inflamação da pele.",specialties:[12],difficulty:1},{word:"PSORIASE",clue:"Doença de pele com placas escamosas.",specialties:[12],difficulty:1},{word:"ECZEMA",clue:"Doença de pele com inflamação e prurido.",specialties:[12],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação em áreas da pele.",specialties:[12],difficulty:1},{word:"PNEUMONIA",clue:"Infecção dos pulmões causada por bactérias ou vírus.",specialties:[8,20],difficulty:1},{word:"BRONQUITE",clue:"Inflamação dos brônquios.",specialties:[8,20],difficulty:1},{word:"ENFISEMA",clue:"Doença pulmonar que causa falta de ar.",specialties:[8],difficulty:2},{word:"ASMA",clue:"Doença respiratória caracterizada por broncoespasmo.",specialties:[8],difficulty:1},{word:"TUBERCULOSE",clue:"Doença infecciosa causada pelo Mycobacterium tuberculosis.",specialties:[8,20],difficulty:1},{word:"HIPERTENSAO",clue:"Pressão arterial elevada crônica.",specialties:[7],difficulty:1},{word:"INFARTO",clue:"Morte do tecido cardíaco devido à falta de oxigênio.",specialties:[7,25],difficulty:1},{word:"ANGINA",clue:"Dor no peito devido à diminuição do fluxo sanguíneo.",specialties:[7],difficulty:1},{word:"ATEROSCLEROSE",clue:"Acúmulo de placas nas artérias.",specialties:[7],difficulty:2},{word:"ARRITMIA",clue:"Batimentos cardíacos irregulares.",specialties:[7],difficulty:1},{word:"GASTRITE",clue:"Inflamação da mucosa do estômago.",specialties:[9],difficulty:1},{word:"ESOFAGITE",clue:"Inflamação do esôfago.",specialties:[9],difficulty:1},{word:"CIRROSE",clue:"Cicatrização crônica do fígado.",specialties:[24],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9],difficulty:2},{word:"HEPATITE",clue:"Inflamação do fígado.",specialties:[24,20],difficulty:1},{word:"INSUFICIENCIA RENAL",clue:"Perda da função dos rins.",specialties:[10],difficulty:1},{word:"LITIASE RENAL",clue:"Formação de cálculos nos rins.",specialties:[10],difficulty:1},{word:"NEFROPATIA DIABETICA",clue:"Doença renal causada por diabetes.",specialties:[10,6],difficulty:2},{word:"SINDROME NEFROTICA",clue:"Condição renal com perda de proteína na urina.",specialties:[10],difficulty:2},{word:"HEMATURIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:1},{word:"OSTEOPOROSE",clue:"Doença que diminui a densidade óssea.",specialties:[17],difficulty:1},{word:"ARTRITE REUMATOIDE",clue:"Doença autoimune que causa inflamação nas articulações.",specialties:[17,21],difficulty:2},{word:"LUXACAO",clue:"Deslocamento de um osso da articulação.",specialties:[17],difficulty:1},{word:"FRATURA",clue:"Quebra de um osso.",specialties:[17],difficulty:1},{word:"ESCOLIOSE",clue:"Curvatura anormal da coluna vertebral.",specialties:[17],difficulty:1},{word:"DEPRESSAO",clue:"Transtorno mental com humor deprimido persistente.",specialties:[13],difficulty:1},{word:"ANSIEDADE",clue:"Sensação de preocupação e medo intensos.",specialties:[13],difficulty:1},{word:"ESQUIZOFRENIA",clue:"Transtorno mental que afeta a percepção da realidade.",specialties:[13],difficulty:2},{word:"TRANSTORNO BIPOLAR",clue:"Transtorno de humor com episódios de mania e depressão.",specialties:[13],difficulty:1},{word:"FOBIA",clue:"Medo intenso e irracional de algo específico.",specialties:[13],difficulty:1},{word:"LEUCEMIA",clue:"Câncer dos tecidos formadores de sangue.",specialties:[11,5],difficulty:2},{word:"LINFOMA",clue:"Câncer do sistema linfático.",specialties:[11,5],difficulty:2},{word:"MIELOMA MULTIPLO",clue:"Câncer das células plasmáticas.",specialties:[11,5],difficulty:3},{word:"CARCINOMA",clue:"Tipo de câncer que começa na pele ou nos tecidos que revestem órgãos.",specialties:[11],difficulty:2},{word:"SARCOMA",clue:"Câncer dos tecidos conjuntivos.",specialties:[11],difficulty:2},{word:"ANEMIA",clue:"Diminuição da capacidade do sangue de transportar oxigênio.",specialties:[5],difficulty:1},{word:"HEMOFILIA",clue:"Distúrbio da coagulação do sangue.",specialties:[5,27],difficulty:2},{word:"TALASSEMIA",clue:"Doença hereditária que afeta a produção de hemoglobina.",specialties:[5,27],difficulty:2},{word:"MALARIA",clue:"Doença infecciosa transmitida por mosquitos.",specialties:[20],difficulty:2},{word:"DENGUE",clue:"Doença viral transmitida pelo mosquito Aedes aegypti.",specialties:[20],difficulty:1},{word:"ZIKA",clue:"Doença viral transmitida por mosquitos.",specialties:[20],difficulty:1},{word:"LEPTOSPIROSE",clue:"Doença bacteriana transmitida pela urina de animais.",specialties:[20],difficulty:2},{word:"VARICELA",clue:"Doença viral também conhecida como catapora.",specialties:[16,20],difficulty:1},{word:"SARAMPO",clue:"Doença viral contagiosa com erupções cutâneas.",specialties:[16,20],difficulty:1},{word:"CAXUMBA",clue:"Infecção viral que causa inchaço das glândulas salivares.",specialties:[16,20],difficulty:1},{word:"RUBEOLA",clue:"Doença viral que pode causar defeitos congênitos.",specialties:[16,14],difficulty:1},{word:"POLIOMIELITE",clue:"Doença viral que pode causar paralisia.",specialties:[16,20],difficulty:2},{word:"HEMORRAGIA",clue:"Perda excessiva de sangue.",specialties:[25,5],difficulty:1},{word:"SINCOPE",clue:"Perda temporária da consciência.",specialties:[25],difficulty:2},{word:"CONVULSAO",clue:"Contrações musculares involuntárias e súbitas.",specialties:[25],difficulty:1},{word:"CHOQUE",clue:"Condição crítica de insuficiência circulatória.",specialties:[25],difficulty:2},{word:"HIPERTERMIA",clue:"Aumento anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"HIPOTERMIA",clue:"Diminuição anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"ALZHEIMER",clue:"Doença neurodegenerativa que causa demência.",specialties:[4],difficulty:1},{word:"PARKINSON",clue:"Doença neurodegenerativa que afeta o movimento.",specialties:[4],difficulty:1},{word:"EPILEPSIA",clue:"Condição neurológica com crises convulsivas.",specialties:[4],difficulty:1},{word:"MIGRANIA",clue:"Tipo de dor de cabeça intensa e pulsátil.",specialties:[4],difficulty:1},{word:"ESCLEROSE MULTIPLA",clue:"Doença autoimune que afeta o sistema nervoso central.",specialties:[4,21],difficulty:2},{word:"GASTROENTERITE",clue:"Inflamação do estômago e intestinos.",specialties:[9],difficulty:1},{word:"APENDICITE",clue:"Inflamação do apêndice.",specialties:[9],difficulty:1},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[9],difficulty:2},{word:"HEMORROIDAS",clue:"Dilatação das veias do reto e ânus.",specialties:[9],difficulty:1},{word:"DIVERTICULITE",clue:"Inflamação dos divertículos no intestino grosso.",specialties:[9],difficulty:2},{word:"BRONCODILATADOR",clue:"Medicamento que dilata as vias aéreas.",specialties:[8,26],difficulty:1},{word:"ANTIHISTAMINICO",clue:"Medicamento que bloqueia os efeitos da histamina.",specialties:[26,21],difficulty:1},{word:"ANALGESICO",clue:"Medicamento que alivia a dor.",specialties:[26],difficulty:1},{word:"ANTIPIRETICO",clue:"Medicamento que reduz a febre.",specialties:[26],difficulty:1},{word:"ANTIBIOTICO",clue:"Medicamento que combate infecções bacterianas.",specialties:[26,20],difficulty:1},{word:"INSULINA",clue:"Hormônio que regula os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"GLUCAGON",clue:"Hormônio que aumenta os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"CORTISOL",clue:"Hormônio do estresse produzido pelas glândulas adrenais.",specialties:[6],difficulty:1},{word:"ADRENALINA",clue:"Hormônio que prepara o corpo para a ação.",specialties:[6,1],difficulty:1},{word:"ESTROGENIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"PROGESTERONA",clue:"Hormônio envolvido no ciclo menstrual e gravidez.",specialties:[6,15],difficulty:1},{word:"TESTOSTERONA",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:1},{word:"TIROXINA",clue:"Hormônio produzido pela tireoide.",specialties:[6],difficulty:1},{word:"PARATORMONIO",clue:"Hormônio que regula os níveis de cálcio no sangue.",specialties:[6],difficulty:2},{word:"HEMOSTASIA",clue:"Processo de parar um sangramento.",specialties:[5,19],difficulty:1},{word:"FIBRINA",clue:"Proteína que forma a rede de um coágulo sanguíneo.",specialties:[5,29],difficulty:2},{word:"PLAQUETA",clue:"Célula sanguínea envolvida na coagulação.",specialties:[5],difficulty:1},{word:"HEPARINA",clue:"Anticoagulante natural do corpo.",specialties:[5,26],difficulty:2},{word:"WARFARINA",clue:"Medicamento anticoagulante.",specialties:[26,5],difficulty:2},{word:"INSOMNIO",clue:"Dificuldade em iniciar ou manter o sono.",specialties:[13],difficulty:1},{word:"NARCOLEPSIA",clue:"Distúrbio do sono com sonolência diurna excessiva.",specialties:[13],difficulty:2},{word:"APNEIA DO SONO",clue:"Interrupção temporária da respiração durante o sono.",specialties:[8],difficulty:1},{word:"HIPOTIREOIDISMO",clue:"Deficiência de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"HIPERTIREOIDISMO",clue:"Excesso de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"ACNE",clue:"Doença de pele caracterizada por espinhas.",specialties:[12],difficulty:1},{word:"DERMATITE",clue:"Inflamação da pele.",specialties:[12],difficulty:1},{word:"PSORIASE",clue:"Doença de pele com placas escamosas.",specialties:[12],difficulty:1},{word:"ECZEMA",clue:"Doença de pele com inflamação e prurido.",specialties:[12],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação em áreas da pele.",specialties:[12],difficulty:1},{word:"Anestesia Geral",clue:"Anestesia que provoca inconsciência e ausência de sensibilidade em todo o corpo.",specialties:[23,19],difficulty:1},{word:"Anestesia Local",clue:"Anestesia que bloqueia a sensibilidade em uma área específica do corpo.",specialties:[23,26],difficulty:1},{word:"Sedação",clue:"Estado induzido por fármacos que reduz a irritabilidade ou excitação.",specialties:[23,26],difficulty:1},{word:"Bloqueio Epidural",clue:"Anestesia regional injetada no espaço epidural, bloqueando a dor na metade inferior do corpo.",specialties:[23,19],difficulty:2},{word:"Bloqueio Raquidiano",clue:"Anestesia regional injetada no líquido cefalorraquidiano para bloquear a sensibilidade abaixo da injeção.",specialties:[23,19],difficulty:2},{word:"Intubação Endotraqueal",clue:"Inserção de um tubo na traqueia para manter a via aérea aberta.",specialties:[23,8],difficulty:1},{word:"Laringoscópio",clue:"Instrumento utilizado para visualizar a laringe durante a intubação.",specialties:[23,8],difficulty:2},{word:"Propofol",clue:"Agente anestésico intravenoso de ação rápida.",specialties:[23,26],difficulty:2},{word:"Fentanil",clue:"Analgésico opioide potente usado em anestesia.",specialties:[23,26],difficulty:2},{word:"Lidocaína",clue:"Anestésico local e antiarrítmico usado para bloquear impulsos nervosos.",specialties:[23,26],difficulty:1},{word:"Anestésico Inalatório",clue:"Fármacos administrados por inalação para induzir anestesia geral.",specialties:[23,26],difficulty:2},{word:"Anestésico Intravenoso",clue:"Fármacos administrados por via intravenosa para induzir anestesia.",specialties:[23,26],difficulty:1},{word:"Monitorização Hemodinâmica",clue:"Avaliação contínua das funções cardiovasculares durante a anestesia.",specialties:[23,7],difficulty:2},{word:"Oxímetro de Pulso",clue:"Dispositivo que mede a saturação de oxigênio no sangue.",specialties:[23,8],difficulty:1},{word:"Hipotermia Perioperatória",clue:"Redução da temperatura corporal durante o período cirúrgico.",specialties:[23,19],difficulty:3},{word:"Apneia",clue:"Interrupção temporária da respiração.",specialties:[23,8],difficulty:1},{word:"Ventilação Mecânica",clue:"Suporte respiratório artificial para pacientes incapazes de respirar adequadamente.",specialties:[23,8],difficulty:2},{word:"Complicações Anestésicas",clue:"Eventos adversos que ocorrem durante ou após a administração de anestesia.",specialties:[23,25],difficulty:3},{word:"Reação Anafilática",clue:"Reação alérgica grave potencialmente fatal.",specialties:[23,21],difficulty:2},{word:"Bloqueador Neuromuscular",clue:"Fármaco que causa paralisia muscular temporária.",specialties:[23,26],difficulty:2},{word:"Succinilcolina",clue:"Agente bloqueador neuromuscular de ação rápida.",specialties:[23,26],difficulty:3},{word:"Monitorização BIS",clue:"Índice bispectral usado para avaliar o nível de consciência durante a anestesia.",specialties:[23,4],difficulty:3},{word:"Despertar Intraoperatório",clue:"Consciência durante a cirurgia sob anestesia geral.",specialties:[23,4],difficulty:3},{word:"Analgesia Pós-operatória",clue:"Controle da dor após procedimentos cirúrgicos.",specialties:[23,19],difficulty:1},{word:"Via Aérea Difícil",clue:"Situação em que a intubação ou ventilação é desafiadora.",specialties:[23,8],difficulty:3},{word:"Recuperação Anestésica",clue:"Período de retorno à consciência e funções normais após anestesia.",specialties:[23,19],difficulty:1},{word:"Curarização",clue:"Uso de bloqueadores neuromusculares para relaxamento muscular.",specialties:[23,26],difficulty:2},{word:"Anestesia Balanceada",clue:"Uso combinado de vários agentes anestésicos para otimizar efeitos.",specialties:[23,26],difficulty:2},{word:"Analgesia Epidural",clue:"Administração de analgésicos no espaço epidural para controle da dor.",specialties:[23,19],difficulty:2},{word:"Cricoidotomia",clue:"Acesso de emergência às vias aéreas através da membrana cricotireóidea.",specialties:[23,25],difficulty:3},{word:"Bactéria Gram-Positiva",clue:"Bactérias que retêm o corante cristal violeta durante a coloração de Gram, indicando uma parede celular espessa de peptidoglicano.",specialties:[28,22],difficulty:2},{word:"Bactéria Gram-Negativa",clue:"Bactérias que não retêm o corante cristal violeta durante a coloração de Gram, possuindo uma parede celular fina com uma membrana externa lipopolissacarídica.",specialties:[28,22],difficulty:2},{word:"Vírus",clue:"Agente infeccioso microscópico que necessita de uma célula hospedeira para replicação.",specialties:[28,20],difficulty:1},{word:"Fungo",clue:"Organismos eucariotos que podem causar infecções em humanos, como fungos dermatófitos e leveduras.",specialties:[28,12],difficulty:2},{word:"Parasitologia",clue:"Ramo da microbiologia que estuda os parasitas e suas interações com os hospedeiros.",specialties:[28,21],difficulty:3},{word:"Escherichia coli",clue:"Bactéria Gram-negativa comensal do intestino humano, podendo causar infecções do trato urinário e gastroenterites.",specialties:[28,10,20],difficulty:2},{word:"Staphylococcus aureus",clue:"Bactéria Gram-positiva que pode causar uma variedade de infecções, desde infecções cutâneas até pneumonia e sepse.",specialties:[28,20,19],difficulty:2},{word:"Mycobacterium tuberculosis",clue:"Agente etiológico da tuberculose, uma doença infecciosa que afeta principalmente os pulmões.",specialties:[28,20,24],difficulty:3},{word:"Clostridioides difficile",clue:"Bactéria Gram-positiva anaeróbia associada a infecções intestinais, frequentemente após uso de antibióticos.",specialties:[28,20,19],difficulty:3},{word:"Pneumocystis jirovecii",clue:"Fungo oportunista que causa pneumonia em pacientes imunocomprometidos.",specialties:[28,20,16],difficulty:3},{word:"Bacillus anthracis",clue:"Bactéria Gram-positiva causadora do antraz, uma doença infecciosa grave.",specialties:[28,20,19],difficulty:3},{word:"Candida albicans",clue:"Levedura oportunista que pode causar candidíase em diversas partes do corpo.",specialties:[28,12,20],difficulty:2},{word:"Helicobacter pylori",clue:"Bactéria Gram-negativa associada a úlceras gástricas e duodenais.",specialties:[28,9,20],difficulty:2},{word:"Neisseria gonorrhoeae",clue:"Bactéria Gram-negativa causadora da gonorreia, uma infecção sexualmente transmissível.",specialties:[28,15,20],difficulty:2},{word:"Legionella pneumophila",clue:"Bactéria Gram-negativa que causa a doença do legionário, uma forma grave de pneumonia.",specialties:[28,8,20],difficulty:3},{word:"Salmonella enterica",clue:"Bactéria Gram-negativa que causa salmonelose, uma infecção alimentar.",specialties:[28,9,20],difficulty:2},{word:"Borrelia burgdorferi",clue:"Bactéria Gram-negativa transmitida por carrapatos, causadora da doença de Lyme.",specialties:[28,21,25],difficulty:3},{word:"Vírus Influenza",clue:"Vírus causador da gripe, uma doença respiratória altamente contagiosa.",specialties:[28,20,8],difficulty:1},{word:"Herpes Simplex Vírus",clue:"Vírus causador do herpes labial e genital, caracterizado por lesões vesiculares.",specialties:[28,20,13],difficulty:2},{word:"Varicella-Zoster Vírus",clue:"Vírus causador da catapora e do herpes zoster (cobreiro).",specialties:[28,20,4],difficulty:2},{word:"HIV (Vírus da Imunodeficiência Humana)",clue:"Vírus que ataca o sistema imunológico, levando à síndrome da imunodeficiência adquirida (AIDS).",specialties:[28,20,13],difficulty:3},{word:"Rinovírus",clue:"Vírus causador do resfriado comum, responsável por infecções respiratórias leves.",specialties:[28,20,8],difficulty:1},{word:"Coronavirus",clue:"Família de vírus que inclui o SARS-CoV-2, causador da COVID-19.",specialties:[28,20,8],difficulty:2},{word:"Plasmodium falciparum",clue:"Parasita protozoário causador da forma mais grave da malária.",specialties:[28,16,21],difficulty:3},{word:"Toxoplasma gondii",clue:"Protozoário causador da toxoplasmose, uma infecção que pode afetar o cérebro e os olhos.",specialties:[28,21,16],difficulty:3},{word:"Leishmania",clue:"Genus de protozoários causadores da leishmaniose, transmitida por flebotomíneos.",specialties:[28,21,25],difficulty:3},{word:"Trichomonas vaginalis",clue:"Protozoário causador da tricomoníase, uma infecção sexualmente transmissível.",specialties:[28,15,20],difficulty:2},{word:"Candida auris",clue:"Fungo emergente resistente a múltiplos antifúngicos, associado a surtos em ambientes hospitalares.",specialties:[28,12,20],difficulty:3},{word:"Corynebacterium diphtheriae",clue:"Bactéria Gram-positiva causadora da difteria, uma doença respiratória grave.",specialties:[28,20,19],difficulty:3},{word:"Enterococcus faecalis",clue:"Bactéria Gram-positiva comumente encontrada no trato gastrointestinal, podendo causar infecções urinárias e endocardite.",specialties:[28,20,19],difficulty:2},{word:"Listeria monocytogenes",clue:"Bactéria Gram-positiva que causa listeriose, uma infecção alimentar grave.",specialties:[28,9,20],difficulty:3},{word:"Klebsiella pneumoniae",clue:"Bactéria Gram-negativa associada a infecções respiratórias e do trato urinário.",specialties:[28,20,19],difficulty:2},{word:"Pseudomonas aeruginosa",clue:"Bactéria Gram-negativa oportunista, frequentemente associada a infecções hospitalares.",specialties:[28,20,19],difficulty:3}];function lP(){const t=localStorage.getItem("vocabularyWords");if(t)return JSON.parse(t);{const e=aP.map(n=>({...n,isActive:!0}));return localStorage.setItem("vocabularyWords",JSON.stringify(e)),e}}const CE=lP();function Ds(t){localStorage.setItem("vocabularyWords",JSON.stringify(t))}const Wl=vl("vocabulary",{state:()=>({words:CE,specialties:RE}),getters:{filteredWords:t=>(e="all",n="all")=>{let i=t.words;if(e!=="all"){const s=parseInt(e);i=i.filter(r=>r.specialties.includes(s))}if(n!=="all"){const s=parseInt(n);i=i.filter(r=>r.difficulty===s)}return i}},actions:{updateWords(t){this.words=t}}}),Dn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},cP={id:"auth-container"},uP={key:0},dP={key:1},fP={key:0},hP={key:1,class:"user-area"},pP={class:"modal-content"},mP={key:0},gP={key:1},yP={class:"modal-content"},_P=["value"],IP={__name:"HeaderComponent",setup(t){const e=SE(),n=Wl(),i=ge(!1),s=ge(!1),r=ge(""),o=ge(""),l=ge(""),c=ge("");function u(){i.value=!0}function f(){i.value=!1}function p(){s.value=!s.value}async function m(){try{await e.login(r.value,o.value),f()}catch(j){alert(j.message)}}async function I(){try{await e.signup(l.value,c.value),f()}catch(j){alert(j.message)}}async function R(){try{await e.logout()}catch(j){alert(j.message)}}const L=ge(!1),D=ge({username:"",default_difficulty:1,default_speciality:0}),C=n.specialties;function O(){e.user&&e.user.settings&&(D.value={...e.user.settings}),L.value=!0}function x(){L.value=!1}async function F(){try{await e.updateUserSettings(D.value),x()}catch(j){alert("Error saving settings: "+j.message)}}return(j,V)=>{const b=En("router-link"),y=En("font-awesome-icon");return ce(),ve("header",null,[_e(b,{to:"/"},{default:$n(()=>V[7]||(V[7]=[M("h1",null,"MedQuix",-1)])),_:1}),M("div",cP,[Ut(e).initialized?(ce(),ve("div",dP,[Ut(e).user?(ce(),ve("div",hP,[M("p",null,"Olá, "+Xe(Ut(e).user.username||Ut(e).user.email.split("@")[0]),1),M("button",{class:"auth-btn",onClick:O},[_e(y,{icon:["fas","cog"]})]),M("button",{class:"auth-btn",onClick:R},[_e(y,{icon:["fas","sign-out-alt"]})])])):(ce(),ve("div",fP,[M("button",{class:"auth-btn",onClick:u},[_e(y,{icon:["fas","sign-in-alt"]}),V[8]||(V[8]=Ke(" Login / Sign Up "))])]))])):(ce(),ve("div",uP," Loading... "))]),_e(co,{name:"fade"},{default:$n(()=>[i.value?(ce(),ve("div",{key:0,class:"modal-overlay",onClick:mi(f,["self"])},[M("div",pP,[M("button",{class:"close-button",onClick:f},"×"),s.value?(ce(),ve("div",gP,[V[14]||(V[14]=M("h3",null,"Sign Up",-1)),ot(M("input",{type:"email","onUpdate:modelValue":V[2]||(V[2]=g=>l.value=g),placeholder:"Email"},null,512),[[mn,l.value]]),ot(M("input",{type:"password","onUpdate:modelValue":V[3]||(V[3]=g=>c.value=g),placeholder:"Password"},null,512),[[mn,c.value]]),M("button",{class:"modal-btn",onClick:I},[_e(y,{icon:["fas","user-plus"]}),V[12]||(V[12]=Ke(" Sign Up "))]),M("p",null,[V[13]||(V[13]=Ke(" Already have an account? ")),M("span",{class:"toggle-link",onClick:p},"Login")])])):(ce(),ve("div",mP,[V[11]||(V[11]=M("h3",null,"Login",-1)),ot(M("input",{type:"email","onUpdate:modelValue":V[0]||(V[0]=g=>r.value=g),placeholder:"Email"},null,512),[[mn,r.value]]),ot(M("input",{type:"password","onUpdate:modelValue":V[1]||(V[1]=g=>o.value=g),placeholder:"Password"},null,512),[[mn,o.value]]),M("button",{class:"modal-btn",onClick:m},[_e(y,{icon:["fas","sign-in-alt"]}),V[9]||(V[9]=Ke(" Login "))]),M("p",null,[V[10]||(V[10]=Ke(" Don't have an account? ")),M("span",{class:"toggle-link",onClick:p},"Sign up")])]))])])):zn("",!0)]),_:1}),_e(co,{name:"fade"},{default:$n(()=>[L.value?(ce(),ve("div",{key:0,class:"modal-overlay",onClick:mi(x,["self"])},[M("div",yP,[M("button",{class:"close-button",onClick:x},"×"),V[20]||(V[20]=M("h3",null,"User Settings",-1)),M("label",null,[V[15]||(V[15]=Ke(" Username: ")),ot(M("input",{type:"text","onUpdate:modelValue":V[4]||(V[4]=g=>D.value.username=g)},null,512),[[mn,D.value.username]])]),M("label",null,[V[17]||(V[17]=Ke(" Default Difficulty: ")),ot(M("select",{"onUpdate:modelValue":V[5]||(V[5]=g=>D.value.default_difficulty=g)},V[16]||(V[16]=[M("option",{value:"1"},"Fácil",-1),M("option",{value:"2"},"Média",-1),M("option",{value:"3"},"Difícil",-1)]),512),[[Ys,D.value.default_difficulty,void 0,{number:!0}]])]),M("label",null,[V[18]||(V[18]=Ke(" Default Specialty: ")),ot(M("select",{"onUpdate:modelValue":V[6]||(V[6]=g=>D.value.default_speciality=g)},[(ce(!0),ve(nt,null,An(Ut(C),(g,E)=>(ce(),ve("option",{key:E,value:E},Xe(g),9,_P))),128))],512),[[Ys,D.value.default_speciality,void 0,{number:!0}]])]),M("button",{class:"modal-btn",onClick:F},[_e(y,{icon:["fas","save"]}),V[19]||(V[19]=Ke(" Save Settings "))])])])):zn("",!0)]),_:1})])}}},EP=Dn(IP,[["__scopeId","data-v-fe4e7e2c"]]),AP={name:"FooterComponent"},wP={class:"footer-nav"};function vP(t,e,n,i,s,r){const o=En("router-link");return ce(),ve("footer",null,[M("nav",wP,[_e(o,{to:"/"},{default:$n(()=>e[0]||(e[0]=[M("h3",null,"Início",-1)])),_:1})]),e[1]||(e[1]=M("div",{id:"install-icon"},null,-1)),e[2]||(e[2]=M("small",null,"© MediQuix 2024. Todos os direitos reservados.",-1))])}const TP=Dn(AP,[["render",vP],["__scopeId","data-v-aac07eda"]]),bP={components:{HeaderComponent:EP,FooterComponent:TP}};function SP(t,e,n,i,s,r){const o=En("HeaderComponent"),l=En("router-view"),c=En("FooterComponent");return ce(),ve(nt,null,[_e(o),M("main",null,[_e(l)]),_e(c)],64)}const RP=Dn(bP,[["render",SP]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fs=typeof document<"u";function OE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function CP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&OE(t.default)}const Ue=Object.assign;function Wc(t,e){const n={};for(const i in e){const s=e[i];n[i]=cn(s)?s.map(t):t(s)}return n}const Jr=()=>{},cn=Array.isArray,PE=/#/g,OP=/&/g,PP=/\//g,NP=/=/g,DP=/\?/g,NE=/\+/g,LP=/%5B/g,MP=/%5D/g,DE=/%5E/g,kP=/%60/g,LE=/%7B/g,xP=/%7C/g,ME=/%7D/g,VP=/%20/g;function wf(t){return encodeURI(""+t).replace(xP,"|").replace(LP,"[").replace(MP,"]")}function FP(t){return wf(t).replace(LE,"{").replace(ME,"}").replace(DE,"^")}function qu(t){return wf(t).replace(NE,"%2B").replace(VP,"+").replace(PE,"%23").replace(OP,"%26").replace(kP,"`").replace(LE,"{").replace(ME,"}").replace(DE,"^")}function UP(t){return qu(t).replace(NP,"%3D")}function qP(t){return wf(t).replace(PE,"%23").replace(DP,"%3F")}function BP(t){return t==null?"":qP(t).replace(PP,"%2F")}function wo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const zP=/\/$/,GP=t=>t.replace(zP,"");function Kc(t,e,n="/"){let i,s={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),s=t(r)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=WP(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:wo(o)}}function jP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function HP(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&sr(e.matched[i],n.matched[s])&&kE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function sr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function kE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$P(t[n],e[n]))return!1;return!0}function $P(t,e){return cn(t)?Vm(t,e):cn(e)?Vm(e,t):t===e}function Vm(t,e){return cn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function WP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,l;for(o=0;o<i.length;o++)if(l=i[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var vo;(function(t){t.pop="pop",t.push="push"})(vo||(vo={}));var Zr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zr||(Zr={}));function KP(t){if(!t)if(Fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),GP(t)}const QP=/^[^#]+#/;function YP(t,e){return t.replace(QP,"#")+e}function XP(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Kl=()=>({left:window.scrollX,top:window.scrollY});function JP(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=XP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Fm(t,e){return(history.state?history.state.position-e:-1)+t}const Bu=new Map;function ZP(t,e){Bu.set(t,e)}function eN(t){const e=Bu.get(t);return Bu.delete(t),e}let tN=()=>location.protocol+"//"+location.host;function xE(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let l=s.includes(t.slice(r))?t.slice(r).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),xm(c,"")}return xm(n,t)+i+s}function nN(t,e,n,i){let s=[],r=[],o=null;const l=({state:m})=>{const I=xE(t,location),R=n.value,L=e.value;let D=0;if(m){if(n.value=I,e.value=m,o&&o===R){o=null;return}D=L?m.position-L.position:0}else i(I);s.forEach(C=>{C(n.value,R,{delta:D,type:vo.pop,direction:D?D>0?Zr.forward:Zr.back:Zr.unknown})})};function c(){o=n.value}function u(m){s.push(m);const I=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return r.push(I),I}function f(){const{history:m}=window;m.state&&m.replaceState(Ue({},m.state,{scroll:Kl()}),"")}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Um(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Kl():null}}function iN(t){const{history:e,location:n}=window,i={value:xE(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:tN()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(I){console.error(I),n[f?"replace":"assign"](m)}}function o(c,u){const f=Ue({},e.state,Um(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});r(c,f,!0),i.value=c}function l(c,u){const f=Ue({},s.value,e.state,{forward:c,scroll:Kl()});r(f.current,f,!0);const p=Ue({},Um(i.value,c,null),{position:f.position+1},u);r(c,p,!1),i.value=c}return{location:i,state:s,push:l,replace:o}}function sN(t){t=KP(t);const e=iN(t),n=nN(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Ue({location:"",base:t,go:i,createHref:YP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rN(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),sN(t)}function oN(t){return typeof t=="string"||t&&typeof t=="object"}function VE(t){return typeof t=="string"||typeof t=="symbol"}const FE=Symbol("");var qm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qm||(qm={}));function rr(t,e){return Ue(new Error,{type:t,[FE]:!0},e)}function Vn(t,e){return t instanceof Error&&FE in t&&(e==null||!!(t.type&e))}const Bm="[^/]+?",aN={sensitive:!1,strict:!1,start:!0,end:!0},lN=/[.+*?^${}()[\]/\\]/g;function cN(t,e){const n=Ue({},aN,e),i=[];let s=n.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let I=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(lN,"\\$&"),I+=40;else if(m.type===1){const{value:R,repeatable:L,optional:D,regexp:C}=m;r.push({name:R,repeatable:L,optional:D});const O=C||Bm;if(O!==Bm){I+=10;try{new RegExp(`(${O})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${R}" (${O}): `+F.message)}}let x=L?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(x=D&&u.length<2?`(?:/${x})`:"/"+x),D&&(x+="?"),s+=x,I+=20,D&&(I+=-8),L&&(I+=-20),O===".*"&&(I+=-50)}f.push(I)}i.push(f)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const I=f[m]||"",R=r[m-1];p[R.name]=I&&R.repeatable?I.split("/"):I}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const I of m)if(I.type===0)f+=I.value;else if(I.type===1){const{value:R,repeatable:L,optional:D}=I,C=R in u?u[R]:"";if(cn(C)&&!L)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const O=cn(C)?C.join("/"):C;if(!O)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=O}}return f||"/"}return{re:o,score:i,keys:r,parse:l,stringify:c}}function uN(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function UE(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=uN(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(zm(i))return 1;if(zm(s))return-1}return s.length-i.length}function zm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dN={type:0,value:""},fN=/[a-zA-Z0-9_]/;function hN(t){if(!t)return[[]];if(t==="/")return[[dN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(I){throw new Error(`ERR (${n})/"${u}": ${I}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,c,u="",f="";function p(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=i;break;case 1:c==="("?n=2:fN.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function pN(t,e,n){const i=cN(hN(t.path),n),s=Ue(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mN(t,e){const n=[],i=new Map;e=$m({strict:!1,end:!0,sensitive:!1},e);function s(p){return i.get(p)}function r(p,m,I){const R=!I,L=jm(p);L.aliasOf=I&&I.record;const D=$m(e,p),C=[L];if("alias"in p){const F=typeof p.alias=="string"?[p.alias]:p.alias;for(const j of F)C.push(jm(Ue({},L,{components:I?I.record.components:L.components,path:j,aliasOf:I?I.record:L})))}let O,x;for(const F of C){const{path:j}=F;if(m&&j[0]!=="/"){const V=m.record.path,b=V[V.length-1]==="/"?"":"/";F.path=m.record.path+(j&&b+j)}if(O=pN(F,m,D),I?I.alias.push(O):(x=x||O,x!==O&&x.alias.push(O),R&&p.name&&!Hm(O)&&o(p.name)),qE(O)&&c(O),L.children){const V=L.children;for(let b=0;b<V.length;b++)r(V[b],O,I&&I.children[b])}I=I||O}return x?()=>{o(x)}:Jr}function o(p){if(VE(p)){const m=i.get(p);m&&(i.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&i.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=_N(p,n);n.splice(m,0,p),p.record.name&&!Hm(p)&&i.set(p.record.name,p)}function u(p,m){let I,R={},L,D;if("name"in p&&p.name){if(I=i.get(p.name),!I)throw rr(1,{location:p});D=I.record.name,R=Ue(Gm(m.params,I.keys.filter(x=>!x.optional).concat(I.parent?I.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),p.params&&Gm(p.params,I.keys.map(x=>x.name))),L=I.stringify(R)}else if(p.path!=null)L=p.path,I=n.find(x=>x.re.test(L)),I&&(R=I.parse(L),D=I.record.name);else{if(I=m.name?i.get(m.name):n.find(x=>x.re.test(m.path)),!I)throw rr(1,{location:p,currentLocation:m});D=I.record.name,R=Ue({},m.params,p.params),L=I.stringify(R)}const C=[];let O=I;for(;O;)C.unshift(O.record),O=O.parent;return{name:D,path:L,params:R,matched:C,meta:yN(C)}}t.forEach(p=>r(p));function f(){n.length=0,i.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Gm(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function jm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:gN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function gN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Hm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yN(t){return t.reduce((e,n)=>Ue(e,n.meta),{})}function $m(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function _N(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;UE(t,e[r])<0?i=r:n=r+1}const s=IN(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function IN(t){let e=t;for(;e=e.parent;)if(qE(e)&&UE(t,e)===0)return e}function qE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function EN(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(NE," "),o=r.indexOf("="),l=wo(o<0?r:r.slice(0,o)),c=o<0?null:wo(r.slice(o+1));if(l in e){let u=e[l];cn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Wm(t){let e="";for(let n in t){const i=t[n];if(n=UP(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(i)?i.map(r=>r&&qu(r)):[i&&qu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function AN(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=cn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const wN=Symbol(""),Km=Symbol(""),vf=Symbol(""),BE=Symbol(""),zu=Symbol("");function Pr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(rr(4,{from:n,to:e})):m instanceof Error?c(m):oN(m)?c(rr(2,{from:e,to:m})):(o&&i.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=r(()=>t.call(i&&i.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Qc(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(OE(c)){const f=(c.__vccOpts||c)[e];f&&r.push(gi(f,n,i,o,l,s))}else{let u=c();r.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=CP(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const I=(p.__vccOpts||p)[e];return I&&gi(I,n,i,o,l,s)()}))}}return r}function Qm(t){const e=wn(vf),n=wn(BE),i=Qe(()=>{const c=Ut(t.to);return e.resolve(c)}),s=Qe(()=>{const{matched:c}=i.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(sr.bind(null,f));if(m>-1)return m;const I=Ym(c[u-2]);return u>1&&Ym(f)===I&&p[p.length-1].path!==I?p.findIndex(sr.bind(null,c[u-2])):m}),r=Qe(()=>s.value>-1&&RN(n.params,i.value.params)),o=Qe(()=>s.value>-1&&s.value===n.matched.length-1&&kE(n.params,i.value.params));function l(c={}){if(SN(c)){const u=e[Ut(t.replace)?"replace":"push"](Ut(t.to)).catch(Jr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:Qe(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}function vN(t){return t.length===1?t[0]:t}const TN=Ed({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qm,setup(t,{slots:e}){const n=Ni(Qm(t)),{options:i}=wn(vf),s=Qe(()=>({[Xm(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xm(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&vN(e.default(n));return t.custom?r:Al("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),bN=TN;function SN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function RN(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!cn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ym(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xm=(t,e,n)=>t??e??n,CN=Ed({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=wn(zu),s=Qe(()=>t.route||i.value),r=wn(Km,0),o=Qe(()=>{let u=Ut(r);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Qe(()=>s.value.matched[o.value]);_a(Km,Qe(()=>o.value+1)),_a(wN,l),_a(zu,s);const c=ge();return bi(()=>[c.value,l.value,t.name],([u,f,p],[m,I,R])=>{f&&(f.instances[p]=u,I&&I!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=I.leaveGuards),f.updateGuards.size||(f.updateGuards=I.updateGuards))),u&&f&&(!I||!sr(f,I)||!m)&&(f.enterCallbacks[p]||[]).forEach(L=>L(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return Jm(n.default,{Component:m,route:u});const I=p.props[f],R=I?I===!0?u.params:typeof I=="function"?I(u):I:null,D=Al(m,Ue({},R,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Jm(n.default,{Component:D,route:u})||D}}});function Jm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ON=CN;function PN(t){const e=mN(t.routes,t),n=t.parseQuery||EN,i=t.stringifyQuery||Wm,s=t.history,r=Pr(),o=Pr(),l=Pr(),c=S1(ci);let u=ci;Fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Wc.bind(null,U=>""+U),p=Wc.bind(null,BP),m=Wc.bind(null,wo);function I(U,ie){let ee,re;return VE(U)?(ee=e.getRecordMatcher(U),re=ie):re=U,e.addRoute(re,ee)}function R(U){const ie=e.getRecordMatcher(U);ie&&e.removeRoute(ie)}function L(){return e.getRoutes().map(U=>U.record)}function D(U){return!!e.getRecordMatcher(U)}function C(U,ie){if(ie=Ue({},ie||c.value),typeof U=="string"){const P=Kc(n,U,ie.path),q=e.resolve({path:P.path},ie),G=s.createHref(P.fullPath);return Ue(P,q,{params:m(q.params),hash:wo(P.hash),redirectedFrom:void 0,href:G})}let ee;if(U.path!=null)ee=Ue({},U,{path:Kc(n,U.path,ie.path).path});else{const P=Ue({},U.params);for(const q in P)P[q]==null&&delete P[q];ee=Ue({},U,{params:p(P)}),ie.params=p(ie.params)}const re=e.resolve(ee,ie),xe=U.hash||"";re.params=f(m(re.params));const T=jP(i,Ue({},U,{hash:FP(xe),path:re.path})),S=s.createHref(T);return Ue({fullPath:T,hash:xe,query:i===Wm?AN(U.query):U.query||{}},re,{redirectedFrom:void 0,href:S})}function O(U){return typeof U=="string"?Kc(n,U,c.value.path):Ue({},U)}function x(U,ie){if(u!==U)return rr(8,{from:ie,to:U})}function F(U){return b(U)}function j(U){return F(Ue(O(U),{replace:!0}))}function V(U){const ie=U.matched[U.matched.length-1];if(ie&&ie.redirect){const{redirect:ee}=ie;let re=typeof ee=="function"?ee(U):ee;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=O(re):{path:re},re.params={}),Ue({query:U.query,hash:U.hash,params:re.path!=null?{}:U.params},re)}}function b(U,ie){const ee=u=C(U),re=c.value,xe=U.state,T=U.force,S=U.replace===!0,P=V(ee);if(P)return b(Ue(O(P),{state:typeof P=="object"?Ue({},xe,P.state):xe,force:T,replace:S}),ie||ee);const q=ee;q.redirectedFrom=ie;let G;return!T&&HP(i,re,ee)&&(G=rr(16,{to:q,from:re}),pe(re,re,!0,!1)),(G?Promise.resolve(G):E(q,re)).catch(B=>Vn(B)?Vn(B,2)?B:K(B):Ee(B,q,re)).then(B=>{if(B){if(Vn(B,2))return b(Ue({replace:S},O(B.to),{state:typeof B.to=="object"?Ue({},xe,B.to.state):xe,force:T}),ie||q)}else B=v(q,re,!0,S,xe);return w(q,re,B),B})}function y(U,ie){const ee=x(U,ie);return ee?Promise.reject(ee):Promise.resolve()}function g(U){const ie=He.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(U):U()}function E(U,ie){let ee;const[re,xe,T]=NN(U,ie);ee=Qc(re.reverse(),"beforeRouteLeave",U,ie);for(const P of re)P.leaveGuards.forEach(q=>{ee.push(gi(q,U,ie))});const S=y.bind(null,U,ie);return ee.push(S),Et(ee).then(()=>{ee=[];for(const P of r.list())ee.push(gi(P,U,ie));return ee.push(S),Et(ee)}).then(()=>{ee=Qc(xe,"beforeRouteUpdate",U,ie);for(const P of xe)P.updateGuards.forEach(q=>{ee.push(gi(q,U,ie))});return ee.push(S),Et(ee)}).then(()=>{ee=[];for(const P of T)if(P.beforeEnter)if(cn(P.beforeEnter))for(const q of P.beforeEnter)ee.push(gi(q,U,ie));else ee.push(gi(P.beforeEnter,U,ie));return ee.push(S),Et(ee)}).then(()=>(U.matched.forEach(P=>P.enterCallbacks={}),ee=Qc(T,"beforeRouteEnter",U,ie,g),ee.push(S),Et(ee))).then(()=>{ee=[];for(const P of o.list())ee.push(gi(P,U,ie));return ee.push(S),Et(ee)}).catch(P=>Vn(P,8)?P:Promise.reject(P))}function w(U,ie,ee){l.list().forEach(re=>g(()=>re(U,ie,ee)))}function v(U,ie,ee,re,xe){const T=x(U,ie);if(T)return T;const S=ie===ci,P=Fs?history.state:{};ee&&(re||S?s.replace(U.fullPath,Ue({scroll:S&&P&&P.scroll},xe)):s.push(U.fullPath,xe)),c.value=U,pe(U,ie,ee,S),K()}let A;function be(){A||(A=s.listen((U,ie,ee)=>{if(!Gt.listening)return;const re=C(U),xe=V(re);if(xe){b(Ue(xe,{replace:!0,force:!0}),re).catch(Jr);return}u=re;const T=c.value;Fs&&ZP(Fm(T.fullPath,ee.delta),Kl()),E(re,T).catch(S=>Vn(S,12)?S:Vn(S,2)?(b(Ue(O(S.to),{force:!0}),re).then(P=>{Vn(P,20)&&!ee.delta&&ee.type===vo.pop&&s.go(-1,!1)}).catch(Jr),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),Ee(S,re,T))).then(S=>{S=S||v(re,T,!1),S&&(ee.delta&&!Vn(S,8)?s.go(-ee.delta,!1):ee.type===vo.pop&&Vn(S,20)&&s.go(-1,!1)),w(re,T,S)}).catch(Jr)}))}let Fe=Pr(),Oe=Pr(),ne;function Ee(U,ie,ee){K(U);const re=Oe.list();return re.length?re.forEach(xe=>xe(U,ie,ee)):console.error(U),Promise.reject(U)}function Q(){return ne&&c.value!==ci?Promise.resolve():new Promise((U,ie)=>{Fe.add([U,ie])})}function K(U){return ne||(ne=!U,be(),Fe.list().forEach(([ie,ee])=>U?ee(U):ie()),Fe.reset()),U}function pe(U,ie,ee,re){const{scrollBehavior:xe}=t;if(!Fs||!xe)return Promise.resolve();const T=!ee&&eN(Fm(U.fullPath,0))||(re||!ee)&&history.state&&history.state.scroll||null;return ml().then(()=>xe(U,ie,T)).then(S=>S&&JP(S)).catch(S=>Ee(S,U,ie))}const Ae=U=>s.go(U);let we;const He=new Set,Gt={currentRoute:c,listening:!0,addRoute:I,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:L,resolve:C,options:t,push:F,replace:j,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Oe.add,isReady:Q,install(U){const ie=this;U.component("RouterLink",bN),U.component("RouterView",ON),U.config.globalProperties.$router=ie,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Ut(c)}),Fs&&!we&&c.value===ci&&(we=!0,F(s.location).catch(xe=>{}));const ee={};for(const xe in ci)Object.defineProperty(ee,xe,{get:()=>c.value[xe],enumerable:!0});U.provide(vf,ie),U.provide(BE,Zg(ee)),U.provide(zu,c);const re=U.unmount;He.add(U),U.unmount=function(){He.delete(U),He.size<1&&(u=ci,A&&A(),A=null,c.value=ci,we=!1,ne=!1),re()}}};function Et(U){return U.reduce((ie,ee)=>ie.then(()=>g(ee)),Promise.resolve())}return Gt}function NN(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>sr(u,l))?i.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>sr(u,c))||s.push(c))}return[n,i,s]}const DN={name:"GameCard",props:{link:{type:String,required:!0},icon:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0}}},LN={class:"icon-container"};function MN(t,e,n,i,s,r){const o=En("font-awesome-icon"),l=En("router-link");return ce(),ns(l,{to:n.link,class:"game-card"},{default:$n(()=>[M("div",LN,[n.icon==="heart"?(ce(),ns(o,{key:0,icon:["fas","heart"],size:"3x"})):n.icon==="brain"?(ce(),ns(o,{key:1,icon:["fas","brain"],size:"3x"})):n.icon==="hangman"?(ce(),ns(o,{key:2,icon:["fas","ban"],size:"3x"})):n.icon==="word-search"?(ce(),ns(o,{key:3,icon:["fas","search"],size:"3x"})):n.icon==="book"?(ce(),ns(o,{key:4,icon:["fas","book"],size:"3x"})):zn("",!0)]),M("h2",null,Xe(n.title),1),M("p",null,Xe(n.description),1)]),_:1},8,["to"])}const kN=Dn(DN,[["render",MN],["__scopeId","data-v-2d2f79c4"]]),xN={components:{GameCard:kN}},VN={class:"home-list"},FN={class:"game-links"},UN={class:"game-links"};function qN(t,e,n,i,s,r){const o=En("GameCard");return ce(),ve("div",VN,[e[0]||(e[0]=M("p",null,"Selecione um dos jogos abaixo para começar:",-1)),M("div",FN,[_e(o,{link:"/quiz",icon:"heart",title:"Quiz Rápido",description:"Responda rapidamente perguntas sobre medicina."}),_e(o,{link:"/cards",icon:"brain",title:"Jogo de Memória",description:"Teste sua memória com termos médicos."}),_e(o,{link:"/word-search",icon:"word-search",title:"Caça Palavras",description:"Encontre palavras médicas escondidas na grade."})]),e[1]||(e[1]=M("p",null,"Acesse o vocabulário completo dos jogos:",-1)),M("div",UN,[_e(o,{link:"/my-vocabulary",icon:"book",title:"Meu Vocabulário",description:"Visualize, adicione, edite e gerencie todos os termos e definições."})])])}const BN=Dn(xN,[["render",qN],["__scopeId","data-v-f1b100ae"]]),zN={class:"selectors-container"},GN={key:0,class:"toggle-text"},jN={key:1,class:"toggle-text"},HN={class:"controls"},$N={class:"controls-option"},WN=["value"],KN={class:"controls-option"},QN={__name:"SelectorsComponent",emits:["specialty-change","difficulty-change"],setup(t,{emit:e}){const n=e,i=us(),s=Qe({get:()=>i.selectedSpecialty,set:c=>i.setSpecialty(c)}),r=Qe({get:()=>i.selectedDifficulty,set:c=>i.setDifficulty(c)});bi(s,c=>{n("specialty-change",c)}),bi(r,c=>{n("difficulty-change",c)});const o=ge(!1);function l(){o.value=!o.value}return(c,u)=>(ce(),ve("div",zN,[M("button",{class:"collapse-toggle",onClick:l},[o.value?(ce(),ve("span",GN,u[2]||(u[2]=[Ke(" Especialidade   "),M("svg",{class:"toggle-icon",width:"24",height:"24",viewBox:"0 0 24 24"},[M("path",{fill:"currentColor",d:"M12 8l6 6c.3.3.3.7 0 1s-.7.3-1 0l-5-5-5 5c-.3.3-.7.3-1 0s-.3-.7 0-1l6-6z"})],-1),Ke("  Dificuldade ")]))):(ce(),ve("span",jN,u[3]||(u[3]=[Ke(" Especialidade   "),M("svg",{class:"toggle-icon",width:"24",height:"24",viewBox:"0 0 24 24"},[M("path",{fill:"currentColor",d:"M12 16.5l-6-6c-.3-.3-.3-.7 0-1 .3-.3.7-.3 1 0l5 5 5-5c.3-.3.7-.3 1 0s.3.7 0 1l-6 6z"})],-1),Ke("  Dificuldade ")])))]),_e(co,{name:"fade"},{default:$n(()=>[M("div",{class:Pi(["collapsible-content",{expanded:o.value}])},[M("div",HN,[M("div",$N,[ot(M("select",{id:"specialty-select","onUpdate:modelValue":u[0]||(u[0]=f=>s.value=f)},[u[4]||(u[4]=M("option",{value:"all"},"Todas",-1)),(ce(!0),ve(nt,null,An(Ut(RE),(f,p)=>(ce(),ve("option",{key:p,value:p},Xe(f),9,WN))),128))],512),[[Ys,s.value]])]),M("div",KN,[ot(M("select",{id:"difficulty-select","onUpdate:modelValue":u[1]||(u[1]=f=>r.value=f)},u[5]||(u[5]=[M("option",{value:"all"},"Todas",-1),M("option",{value:"1"},"Fácil",-1),M("option",{value:"2"},"Média",-1),M("option",{value:"3"},"Difícil",-1)]),512),[[Ys,r.value]])])])],2)]),_:1})]))}},Ql=Dn(QN,[["__scopeId","data-v-3d9424a6"]]),YN=vl("words",()=>{const t=ge(CE),e=us(),n=Qe(()=>{let r=t.value;if(e.selectedSpecialty!=="all"){const o=parseInt(e.selectedSpecialty);r=r.filter(l=>l.specialties.includes(o))}if(e.selectedDifficulty!=="all"){const o=parseInt(e.selectedDifficulty);r=r.filter(l=>l.difficulty===o)}return r});function i(r=10){return[...n.value].sort(()=>Math.random()-.5).slice(0,r)}function s(r){t.value=r}return{allWords:t,filteredWords:n,getQuizWords:i,setAllWords:s}}),XN={class:"quiz"},JN={key:0,id:"quiz-container"},ZN={id:"timer"},eD={id:"time"},tD={id:"question"},nD={id:"options"},iD=["disabled","onClick"],sD={__name:"Quiz",setup(t){const e=ge(0),n=ge(7),i=ge([]),s=ge(!0),r=ge([]),o=ge("7"),l=ge(!1),c=ge(!1),u=ge([]);let f=null;const p=YN(),m=Qe(()=>i.value[e.value]);function I(j){return j.sort(()=>Math.random()-.5)}function R(j){const V=[j],b=p.allWords.filter(y=>y.word!==j).map(y=>y.word);for(I(b);V.length<4&&b.length>0;)V.push(b.pop());return I(V)}function L(){let V=n.value*1e3;f=setInterval(()=>{V-=10,o.value=(V/1e3).toFixed(0),V<=0&&(clearInterval(f),C(null),c.value=!0,l.value=!0)},10)}function D(){if(clearInterval(f),e.value>=i.value.length){alert("Você completou o quiz!"),F();return}c.value=!1,l.value=!1,u.value=[],m.value&&(r.value=R(m.value.word),u.value=r.value.map(()=>""),n.value=7,o.value="7.00",L())}function C(j,V=null){if(clearInterval(f),!m.value)return;const b=m.value.word;j!==null&&(j===b&&V!==null?u.value[V]="#2ecc71":V!==null&&(u.value[V]="#e74c3c")),r.value.forEach((y,g)=>{y===b&&(u.value[g]="#2ecc71")}),c.value=!0,l.value=!0}function O(){e.value++,n.value=7,D()}function x(){e.value=0;const j=p.getQuizWords(10);if(j.length===0){alert("Nenhuma questão encontrada com os critérios selecionados."),s.value=!1;return}i.value=j,s.value=!0,n.value=7,D()}function F(){clearInterval(f),s.value=!1,x()}return Po(()=>{x()}),Ad(()=>{clearInterval(f)}),(j,V)=>{var b;return ce(),ve("div",XN,[V[1]||(V[1]=M("h1",null,"Quiz Rápido",-1)),_e(Ql,{onSpecialtyChange:F,onDifficultyChange:F}),M("div",null,[s.value?(ce(),ve("div",JN,[M("div",ZN,[M("span",eD,Xe(o.value),1),V[0]||(V[0]=Ke("s "))]),M("div",tD,Xe((b=m.value)==null?void 0:b.clue),1),M("ul",nD,[(ce(!0),ve(nt,null,An(r.value,(y,g)=>(ce(),ve("li",{key:g},[M("button",{disabled:c.value,style:Ro({backgroundColor:u.value[g]}),onClick:E=>C(y,g)},Xe(y),13,iD)]))),128))]),l.value?(ce(),ve("button",{key:0,id:"next-button",onClick:O}," Próxima Pergunta ")):zn("",!0)])):zn("",!0)])])}}},rD=Dn(sD,[["__scopeId","data-v-628d0008"]]),oD={class:"memory-game"},aD={id:"definition"},lD={id:"game-board"},cD=["onClick"],uD={class:"card-inner"},dD={class:"card-back"},fD={id:"score"},hD={__name:"MemoryGame",setup(t){const e=Wl(),n=ge(0),i=ge([]),s=ge(null),r=ge([]),o=ge([]),l=ge(0),c=ge(null),u=ge(null),f=ge([]);function p(){n.value=0,l.value=0,f.value=[];let C=e.words.filter(x=>x.isActive);if(C.length<2){alert("Não há palavras suficientes para iniciar o jogo. Por favor, ajuste os filtros.");return}C.sort(()=>Math.random()-.5),r.value=C.slice(0,8),o.value=[...r.value],m();const O=[...r.value,...r.value].map(x=>({word:x.word,flipped:!1,matched:!1}));O.sort(()=>Math.random()-.5),i.value=O}function m(){o.value.length===0?s.value=null:(o.value.sort(()=>Math.random()-.5),s.value=o.value.pop())}function I(C){const O=i.value[C];O.flipped||O.matched||(O.flipped=!0,n.value++,l.value===0?(c.value=C,l.value=1):l.value===1&&(u.value=C,l.value=2,R()))}function R(){const C=i.value[c.value],O=i.value[u.value];C.word===s.value.word&&O.word===s.value.word?(C.matched=!0,O.matched=!0,f.value.push(C,O),D(),f.value.length===i.value.length?setTimeout(()=>{alert(`Parabéns! Você encontrou todos os pares com ${n.value} cliques.`),p()},500):setTimeout(()=>{m()},500)):setTimeout(()=>{L()},1e3)}function L(){i.value[c.value].flipped=!1,i.value[u.value].flipped=!1,D()}function D(){l.value=0,c.value=null,u.value=null}return Po(()=>{p()}),(C,O)=>(ce(),ve("div",oD,[O[1]||(O[1]=M("h1",null,"Jogo de Memória",-1)),_e(Ql,{onSpecialtyChange:p,onDifficultyChange:p}),M("p",aD,Xe(s.value?s.value.clue:"Todas as palavras foram encontradas!"),1),M("div",lD,[(ce(!0),ve(nt,null,An(i.value,(x,F)=>(ce(),ve("div",{key:F,class:Pi(["card",{flipped:x.flipped,matched:x.matched}]),onClick:j=>I(F)},[M("div",uD,[O[0]||(O[0]=M("div",{class:"card-front"},null,-1)),M("div",dD,Xe(x.word),1)])],10,cD))),128))]),M("p",fD,"Pontuação: "+Xe(n.value),1)]))}},pD=Dn(hD,[["__scopeId","data-v-6e2ceb30"]]),mD={class:"word-search-game"},gD={class:"word-search-game-header"},yD={class:"game-container"},_D=["onClick"],ID={class:"word-list"},ED={class:"status"},AD={__name:"WordSearchGame",setup(t){const e=ge(30),n=ge(24),i=ge(12),s=ge(null),r=Qe(()=>({gridTemplateColumns:`repeat(${n.value}, ${e.value}px)`,gridTemplateRows:`repeat(${i.value}, ${e.value}px)`,"--cell-size":`${e.value}px`})),o=Wl();us();const l=ge([]),c=ge([]),u=ge([]),f=ge(0),p=ge(""),m=ge([]);function I(){if(console.log("updateGridDimensions",s.value),s.value){console.log(s.value);const y=s.value.getBoundingClientRect().width;console.log("game-grid width: ",y),n.value=Math.floor(y/e.value),i.value=n.value*2}}function R(){f.value=0,p.value="",m.value=[],u.value=[];let y=o.words.filter(w=>w.isActive);if(y=y.filter(w=>w.word.length<=n.value&&w.word.length<=i.value),y.length<10){alert("Não há palavras suficientes para iniciar o jogo. Por favor, ajuste os filtros ou adicione mais palavras que caibam na grade.");return}const g=Array.from(new Set(y.map(w=>w.word.toUpperCase())));if(g.length<10){alert("Não há palavras únicas suficientes para iniciar o jogo. Por favor, ajuste os filtros ou adicione mais palavras.");return}g.sort(()=>.5-Math.random());const E=g.slice(0,10);c.value=E.map(w=>y.find(v=>v.word.toUpperCase()===w)),l.value=Array.from({length:i.value},()=>Array(n.value).fill("")),c.value.forEach(w=>{L(w.word.toUpperCase())}),D()}function L(y){const E=["horizontal","vertical"].filter(be=>be==="horizontal"&&y.length<=n.value||be==="vertical"&&y.length<=i.value);if(E.length===0){console.error(`A palavra "${y}" é muito longa para caber na grade.`);return}let w=!1,v=0;const A=100;for(;!w&&v<A;){v++;const be=E[Math.floor(Math.random()*E.length)],Fe=y.length;let Oe,ne;be==="horizontal"?(Oe=C(0,i.value-1),ne=C(0,n.value-Fe)):(Oe=C(0,i.value-Fe),ne=C(0,n.value-1));let Ee=!0;for(let Q=0;Q<Fe;Q++){let K=Oe,pe=ne;if(be==="horizontal"?pe+=Q:K+=Q,l.value[K][pe]!==""&&l.value[K][pe]!==y[Q]){Ee=!1;break}}if(Ee){for(let Q=0;Q<Fe;Q++){let K=Oe,pe=ne;be==="horizontal"?pe+=Q:K+=Q,l.value[K][pe]=y[Q]}w=!0}}w||console.error(`Não foi possível posicionar a palavra "${y}" após ${A} tentativas.`)}function D(){const y="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let g=0;g<i.value;g++)for(let E=0;E<n.value;E++)l.value[g][E]===""&&(l.value[g][E]=y.charAt(Math.floor(Math.random()*y.length)))}function C(y,g){return Math.floor(Math.random()*(g-y+1))+y}function O(y,g){const E=`${y}-${g}`;m.value.some(w=>w.key===E)?m.value=m.value.filter(w=>w.key!==E):(m.value.push({row:y,col:g,key:E}),m.value.length===2&&V())}function x(y,g){if(m.value.length===2){const[E,w]=m.value;if(E.row===w.row&&y===E.row){const v=Math.min(E.col,w.col),A=Math.max(E.col,w.col);return g>=v&&g<=A}if(E.col===w.col&&g===E.col){const v=Math.min(E.row,w.row),A=Math.max(E.row,w.row);return y>=v&&y<=A}}return m.value.some(E=>E.row===y&&E.col===g)}let F=Ni({});function j(y,g){return F[`${y}-${g}`]===!0}function V(){if(m.value.length!==2)return;const[y,g]=m.value,E=y.row===g.row,w=y.col===g.col;if(!E&&!w){p.value="Selecione duas letras na mesma linha ou coluna.",b();return}let v="",A=[];if(E){const[ne,Ee]=y.col<g.col?[y,g]:[g,y];for(let Q=ne.col;Q<=Ee.col;Q++)v+=l.value[ne.row][Q],A.push({row:ne.row,col:Q})}else if(w){const[ne,Ee]=y.row<g.row?[y,g]:[g,y];for(let Q=ne.row;Q<=Ee.row;Q++)v+=l.value[Q][ne.col],A.push({row:Q,col:ne.col})}const be=v.toUpperCase(),Fe=be.split("").reverse().join(""),Oe=c.value.find(ne=>ne.word.toUpperCase()===be||ne.word.toUpperCase()===Fe);Oe&&!u.value.includes(Oe.word.toUpperCase())?(u.value.push(Oe.word.toUpperCase()),f.value+=10,A.forEach(ne=>{F[`${ne.row}-${ne.col}`]=!0}),p.value=`Você encontrou: ${Oe.word.toUpperCase()}`,b(),u.value.length===c.value.length&&setTimeout(()=>{alert(`Parabéns! Você encontrou todas as palavras com ${f.value} pontos.`),R()},500)):(f.value-=1,p.value=`Palavra não encontrada: ${be}`,setTimeout(()=>{b()},1e3))}function b(){m.value=[]}return Po(()=>{I(),R(),window.addEventListener("resize",I)}),wd(()=>{window.removeEventListener("resize",I)}),(y,g)=>(ce(),ve("div",mD,[M("div",gD,[g[0]||(g[0]=M("h1",null,"Caça Palavras",-1)),_e(Ql,{onSpecialtyChange:R,onDifficultyChange:R})]),M("div",yD,[M("div",{class:"game-grid",ref_key:"gameGrid",ref:s,style:Ro(r.value)},[(ce(!0),ve(nt,null,An(l.value,(E,w)=>(ce(),ve("div",{key:w,class:"grid-row"},[(ce(!0),ve(nt,null,An(E,(v,A)=>(ce(),ve("div",{key:A,class:Pi(["cell",{selected:x(w,A),found:j(w,A)}]),onClick:be=>O(w,A)},Xe(v),11,_D))),128))]))),128))],4),M("ul",ID,[(ce(!0),ve(nt,null,An(c.value,E=>(ce(),ve("li",{key:E.word,class:Pi({found:u.value.includes(E.word.toUpperCase())})},[M("span",null,Xe(E.clue),1)],2))),128))]),M("p",ED,Xe(p.value),1)])]))}},wD=Dn(AD,[["__scopeId","data-v-d422567a"]]),vD={class:"my-vocabulary"},TD={class:"vocab-header"},bD={class:"options-and-searchbar"},SD={class:"search-word"},RD={class:"modal-content options-modal"},CD={class:"options-buttons"},OD={class:"counter"},PD={class:"vocabulary-list"},ND=["onClick"],DD={key:0,class:"card-details"},LD={class:"clue"},MD={class:"specialties"},kD={class:"difficulty"},xD={class:"icons-container"},VD=["onClick"],FD=["onClick"],UD=["onUpdate:modelValue","onChange"],qD={key:1,class:"edit-container"},BD=["onUpdate:modelValue"],zD=["onUpdate:modelValue"],GD={class:"specialties-select"},jD=["value","onUpdate:modelValue"],HD=["onUpdate:modelValue"],$D=["onClick"],WD=["onClick"],KD={class:"modal-content"},QD={class:"specialties-select"},YD=["value"],XD={__name:"MyVocabulary",setup(t){const e=Wl(),n=us(),i=ge(!1),s=ge(!1),r=ge(""),o=ge(!1),l=ge(!1),c=ge([]),u=ge([]),f=Ni({});function p(Q){return Q.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}const m=Qe(()=>{const Q={};return I.value.forEach(K=>{const pe=p(K.word);Q[pe]=(Q[pe]||0)+1}),Q}),I=Qe(()=>{let Q=e.words;if(n.selectedSpecialty!=="all"){const K=parseInt(n.selectedSpecialty);Q=Q.filter(pe=>pe.specialties.includes(K))}if(n.selectedDifficulty!=="all"){const K=parseInt(n.selectedDifficulty);Q=Q.filter(pe=>pe.difficulty===K)}if(s.value&&(Q=Q.filter(K=>K.isActive)),r.value.trim()!==""){const K=r.value.trim().toLowerCase();Q=Q.filter(pe=>pe.word.toLowerCase().includes(K)||pe.clue.toLowerCase().includes(K))}return Q.sort((K,pe)=>K.word.localeCompare(pe.word))});function R(Q){const K=c.value.indexOf(Q);K===-1?c.value.push(Q):c.value.splice(K,1)}function L(Q){return c.value.includes(Q)}function D(){i.value=!i.value}function C(){if(confirm("Deseja realmente remover todas as duplicatas, mantendo apenas uma instância de cada palavra?")){const Q={};e.words.forEach(K=>{const pe=p(K.word);Q[pe]||(Q[pe]=K)}),e.words=Object.values(Q),Ds(e.words)}}function O(){s.value=!s.value}function x(){confirm("Deseja realmente ativar todos os itens?")&&(e.words.forEach(Q=>Q.isActive=!0),Ds(e.words))}function F(){confirm("Deseja realmente desativar todos os itens?")&&(e.words.forEach(Q=>Q.isActive=!1),Ds(e.words))}function j(){l.value=!0}function V(){l.value=!1}function b(){V(),o.value=!0}function y(){o.value=!1}const g=Ni({word:"",clue:"",specialties:[],difficulty:null});function E(){if(!g.word.trim()||!g.clue.trim()||!g.difficulty||g.specialties.length===0){alert("Preencha todos os campos corretamente.");return}if(e.words.some(pe=>p(pe.word)===g.word.trim().toLowerCase())&&!confirm("A palavra já existe. Deseja adicionar outra instância?"))return;const K={word:g.word.trim(),clue:g.clue.trim(),specialties:[...g.specialties],difficulty:g.difficulty,isActive:!0};e.words.push(K),Ds(e.words),y(),g.word="",g.clue="",g.specialties=[],g.difficulty=null}function w(Q){if(u.value.includes(Q)){const K=u.value.indexOf(Q);K!==-1&&u.value.splice(K,1)}else u.value.push(Q),f[Q]=JSON.parse(JSON.stringify(I.value[Q]))}function v(Q){const K=f[Q];if(!K.word.trim()){alert("A palavra não pode estar vazia.");return}const pe=e.words.findIndex(we=>we.word===I.value[Q].word);pe!==-1&&(e.words[pe]={...K},Ds(e.words));const Ae=u.value.indexOf(Q);Ae!==-1&&u.value.splice(Ae,1)}function A(Q){const K=u.value.indexOf(Q);K!==-1&&u.value.splice(K,1)}function be(Q){Ds(e.words)}function Fe(){}function Oe(Q){return Q.map(K=>e.specialties[K]).join(", ")}function ne(Q){return{1:"Fácil",2:"Média",3:"Difícil"}[Q]||"Desconhecida"}function Ee(Q){return p(Q.word)}return(Q,K)=>{const pe=En("font-awesome-icon");return ce(),ve("div",vD,[M("div",TD,[K[6]||(K[6]=M("h1",null,"Meu Vocabulário",-1)),_e(Ql),M("div",bD,[M("button",{class:"options-btn",onClick:j},[_e(pe,{icon:["fas","sliders-h"]}),K[5]||(K[5]=Ke(" Opções "))]),M("div",SD,[ot(M("input",{type:"text",class:"search-term","onUpdate:modelValue":K[0]||(K[0]=Ae=>r.value=Ae),placeholder:"Buscar palavra ou definição..."},null,512),[[mn,r.value]]),M("button",{onClick:Fe,class:"search-btn"},[_e(pe,{icon:["fas","search"]})])])])]),_e(co,{name:"fade"},{default:$n(()=>[l.value?(ce(),ve("div",{key:0,class:"modal-overlay",onClick:mi(V,["self"])},[M("div",RD,[M("div",CD,[M("button",{onClick:b},[_e(pe,{icon:["fas","plus"]}),K[7]||(K[7]=Ke(" Adicionar Palavra "))]),M("button",{onClick:x},[_e(pe,{icon:["fas","check"]}),K[8]||(K[8]=Ke(" Ativar todos "))]),M("button",{onClick:F},[_e(pe,{icon:["fas","times"]}),K[9]||(K[9]=Ke(" Desativar todos "))]),M("button",{onClick:O},[_e(pe,{icon:["fas",s.value?"eye":"eye-slash"]},null,8,["icon"]),Ke(" "+Xe(s.value?"Exibir todos":"Exibir apenas ativos"),1)]),M("button",{onClick:D},[_e(pe,{icon:["fas","highlighter"]}),Ke(" "+Xe(i.value?"Remover Destaque":"Destacar Duplicatas"),1)]),M("button",{onClick:C},[_e(pe,{icon:["fas","trash"]}),K[10]||(K[10]=Ke(" Remover Duplicatas "))])])])])):zn("",!0)]),_:1}),M("div",OD,[M("p",null,[K[11]||(K[11]=Ke(" Total de termos: ")),M("span",null,Xe(I.value.length),1)])]),M("div",PD,[(ce(!0),ve(nt,null,An(I.value,(Ae,we)=>(ce(),ve("div",{key:Ae.word+we,class:Pi(["term-item",{duplicate:i.value&&m.value[Ee(Ae)]>1}])},[M("div",{class:"card-header",onClick:He=>R(we)},[M("h2",null,Xe(Ae.word),1)],8,ND),L(we)?(ce(),ve("div",DD,[M("p",LD,Xe(Ae.clue),1),M("p",MD,Xe(Oe(Ae.specialties)),1),M("p",kD,Xe(ne(Ae.difficulty)),1),M("div",xD,[M("span",{class:"icon edit-icon",onClick:mi(He=>w(we),["stop"])},[_e(pe,{icon:["fas","edit"]})],8,VD),M("span",{class:"icon delete-icon",onClick:mi(He=>Q.deleteWord(we),["stop"])},[_e(pe,{icon:["fas","trash"]})],8,FD),ot(M("input",{type:"checkbox","onUpdate:modelValue":He=>Ae.isActive=He,onChange:mi(He=>be(),["stop"]),title:"Ativar/Desativar"},null,40,UD),[[Oc,Ae.isActive]])])])):zn("",!0),u.value.includes(we)?(ce(),ve("div",qD,[ot(M("input",{type:"text","onUpdate:modelValue":He=>f[we].word=He,placeholder:"Palavra"},null,8,BD),[[mn,f[we].word]]),ot(M("textarea",{"onUpdate:modelValue":He=>f[we].clue=He,placeholder:"Dica"},null,8,zD),[[mn,f[we].clue]]),M("div",GD,[(ce(!0),ve(nt,null,An(Ut(e).specialties,(He,Gt)=>(ce(),ve("label",{key:Gt},[ot(M("input",{type:"checkbox",value:Gt,"onUpdate:modelValue":Et=>f[we].specialties=Et},null,8,jD),[[Oc,f[we].specialties]]),Ke(" "+Xe(He),1)]))),128))]),ot(M("select",{"onUpdate:modelValue":He=>f[we].difficulty=He},K[12]||(K[12]=[M("option",{disabled:"",value:""},"Selecione",-1),M("option",{value:"1"},"Fácil",-1),M("option",{value:"2"},"Média",-1),M("option",{value:"3"},"Difícil",-1)]),8,HD),[[Ys,f[we].difficulty,void 0,{number:!0}]]),M("button",{onClick:He=>v(we)},"Salvar",8,$D),M("button",{onClick:He=>A(we)},"Cancelar",8,WD)])):zn("",!0)],2))),128))]),_e(co,{name:"fade"},{default:$n(()=>[o.value?(ce(),ve("div",{key:0,class:"modal",onClick:mi(y,["self"])},[M("div",KD,[M("span",{class:"close-button",onClick:y},"×"),K[19]||(K[19]=M("h2",null,"Adicionar Nova Palavra",-1)),M("form",{onSubmit:mi(E,["prevent"])},[K[14]||(K[14]=M("label",null,"Palavra:",-1)),ot(M("input",{type:"text","onUpdate:modelValue":K[1]||(K[1]=Ae=>g.word=Ae),required:""},null,512),[[mn,g.word]]),K[15]||(K[15]=M("label",null,"Dica:",-1)),ot(M("textarea",{"onUpdate:modelValue":K[2]||(K[2]=Ae=>g.clue=Ae),required:""},null,512),[[mn,g.clue]]),K[16]||(K[16]=M("label",null,"Especialidades:",-1)),M("div",QD,[(ce(!0),ve(nt,null,An(Ut(e).specialties,(Ae,we)=>(ce(),ve("label",{key:we},[ot(M("input",{type:"checkbox",value:we,"onUpdate:modelValue":K[3]||(K[3]=He=>g.specialties=He)},null,8,YD),[[Oc,g.specialties]]),Ke(" "+Xe(Ae),1)]))),128))]),K[17]||(K[17]=M("label",null,"Dificuldade:",-1)),ot(M("select",{"onUpdate:modelValue":K[4]||(K[4]=Ae=>g.difficulty=Ae),required:""},K[13]||(K[13]=[M("option",{disabled:"",value:""},"Selecione",-1),M("option",{value:"1"},"Fácil",-1),M("option",{value:"2"},"Média",-1),M("option",{value:"3"},"Difícil",-1)]),512),[[Ys,g.difficulty,void 0,{number:!0}]]),K[18]||(K[18]=M("button",{type:"submit"},"Adicionar",-1)),M("button",{type:"button",onClick:y},"Cancelar")],32)])])):zn("",!0)]),_:1})])}}},JD=Dn(XD,[["__scopeId","data-v-85c4f9d4"]]),ZD=[{path:"/",name:"Home",component:BN},{path:"/quiz",name:"Quiz",component:rD},{path:"/cards",name:"MemoryGame",component:pD},{path:"/word-search",name:"WordSearchGame",component:wD},{path:"/my-vocabulary",name:"MyVocabulary",component:JD}],eL=PN({history:rN(),routes:ZD});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function tL(t,e,n){return(e=iL(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Zm(Object(n),!0).forEach(function(i){tL(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zm(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function nL(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function iL(t){var e=nL(t,"string");return typeof e=="symbol"?e:e+""}const eg=()=>{};let Tf={},zE={},GE=null,jE={mark:eg,measure:eg};try{typeof window<"u"&&(Tf=window),typeof document<"u"&&(zE=document),typeof MutationObserver<"u"&&(GE=MutationObserver),typeof performance<"u"&&(jE=performance)}catch{}const{userAgent:tg=""}=Tf.navigator||{},Fi=Tf,Ye=zE,ng=GE,ma=jE;Fi.document;const ni=!!Ye.documentElement&&!!Ye.head&&typeof Ye.addEventListener=="function"&&typeof Ye.createElement=="function",HE=~tg.indexOf("MSIE")||~tg.indexOf("Trident/");var sL=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,rL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,$E={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},oL={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},WE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Nt="classic",Yl="duotone",aL="sharp",lL="sharp-duotone",KE=[Nt,Yl,aL,lL],cL={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},uL={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},dL=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),fL={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},hL=["fak","fa-kit","fakd","fa-kit-duotone"],ig={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pL=["kit"],mL={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},gL=["fak","fakd"],yL={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},sg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ga={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_L=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],IL=["fak","fa-kit","fakd","fa-kit-duotone"],EL={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},AL={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},wL={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Gu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},vL=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ju=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",..._L,...vL],TL=["solid","regular","light","thin","duotone","brands"],QE=[1,2,3,4,5,6,7,8,9,10],bL=QE.concat([11,12,13,14,15,16,17,18,19,20]),SL=[...Object.keys(wL),...TL,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ga.GROUP,ga.SWAP_OPACITY,ga.PRIMARY,ga.SECONDARY].concat(QE.map(t=>"".concat(t,"x"))).concat(bL.map(t=>"w-".concat(t))),RL={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Zn="___FONT_AWESOME___",Hu=16,YE="fa",XE="svg-inline--fa",_s="data-fa-i2svg",$u="data-fa-pseudo-element",CL="data-fa-pseudo-element-pending",bf="data-prefix",Sf="data-icon",rg="fontawesome-i2svg",OL="async",PL=["HTML","HEAD","STYLE","SCRIPT"],JE=(()=>{try{return!0}catch{return!1}})();function Bo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Nt]}})}const ZE=W({},$E);ZE[Nt]=W(W(W(W({},{"fa-duotone":"duotone"}),$E[Nt]),ig.kit),ig["kit-duotone"]);const NL=Bo(ZE),Wu=W({},fL);Wu[Nt]=W(W(W(W({},{duotone:"fad"}),Wu[Nt]),sg.kit),sg["kit-duotone"]);const og=Bo(Wu),Ku=W({},Gu);Ku[Nt]=W(W({},Ku[Nt]),yL.kit);const Rf=Bo(Ku),Qu=W({},AL);Qu[Nt]=W(W({},Qu[Nt]),mL.kit);Bo(Qu);const DL=sL,eA="fa-layers-text",LL=rL,ML=W({},cL);Bo(ML);const kL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yc=oL,xL=[...pL,...SL],eo=Fi.FontAwesomeConfig||{};function VL(t){var e=Ye.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function FL(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Ye&&typeof Ye.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const s=FL(VL(n));s!=null&&(eo[i]=s)});const tA={styleDefault:"solid",familyDefault:Nt,cssPrefix:YE,replacementClass:XE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};eo.familyPrefix&&(eo.cssPrefix=eo.familyPrefix);const or=W(W({},tA),eo);or.autoReplaceSvg||(or.observeMutations=!1);const oe={};Object.keys(tA).forEach(t=>{Object.defineProperty(oe,t,{enumerable:!0,set:function(e){or[t]=e,to.forEach(n=>n(oe))},get:function(){return or[t]}})});Object.defineProperty(oe,"familyPrefix",{enumerable:!0,set:function(t){or.cssPrefix=t,to.forEach(e=>e(oe))},get:function(){return or.cssPrefix}});Fi.FontAwesomeConfig=oe;const to=[];function UL(t){return to.push(t),()=>{to.splice(to.indexOf(t),1)}}const ui=Hu,yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qL(t){if(!t||!ni)return;const e=Ye.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Ye.head.childNodes;let i=null;for(let s=n.length-1;s>-1;s--){const r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return Ye.head.insertBefore(e,i),t}const BL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function To(){let t=12,e="";for(;t-- >0;)e+=BL[Math.random()*62|0];return e}function pr(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Cf(t){return t.classList?pr(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function nA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zL(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(nA(t[n]),'" '),"").trim()}function Xl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Of(t){return t.size!==yn.size||t.x!==yn.x||t.y!==yn.y||t.rotate!==yn.rotate||t.flipX||t.flipY}function GL(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(r," ").concat(o," ").concat(l)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:c,path:u}}function jL(t){let{transform:e,width:n=Hu,height:i=Hu,startCentered:s=!1}=t,r="";return s&&HE?r+="translate(".concat(e.x/ui-n/2,"em, ").concat(e.y/ui-i/2,"em) "):s?r+="translate(calc(-50% + ".concat(e.x/ui,"em), calc(-50% + ").concat(e.y/ui,"em)) "):r+="translate(".concat(e.x/ui,"em, ").concat(e.y/ui,"em) "),r+="scale(".concat(e.size/ui*(e.flipX?-1:1),", ").concat(e.size/ui*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var HL=`:root, :host {
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
}`;function iA(){const t=YE,e=XE,n=oe.cssPrefix,i=oe.replacementClass;let s=HL;if(n!==t||i!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(i))}return s}let ag=!1;function Xc(){oe.autoAddCss&&!ag&&(qL(iA()),ag=!0)}var $L={mixout(){return{dom:{css:iA,insertCss:Xc}}},hooks(){return{beforeDOMElementCreation(){Xc()},beforeI2svg(){Xc()}}}};const ei=Fi||{};ei[Zn]||(ei[Zn]={});ei[Zn].styles||(ei[Zn].styles={});ei[Zn].hooks||(ei[Zn].hooks={});ei[Zn].shims||(ei[Zn].shims=[]);var _n=ei[Zn];const sA=[],rA=function(){Ye.removeEventListener("DOMContentLoaded",rA),ol=1,sA.map(t=>t())};let ol=!1;ni&&(ol=(Ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ye.readyState),ol||Ye.addEventListener("DOMContentLoaded",rA));function WL(t){ni&&(ol?setTimeout(t,0):sA.push(t))}function zo(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?nA(t):"<".concat(e," ").concat(zL(n),">").concat(i.map(zo).join(""),"</").concat(e,">")}function lg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Jc=function(e,n,i,s){var r=Object.keys(e),o=r.length,l=n,c,u,f;for(i===void 0?(c=1,f=e[r[0]]):(c=0,f=i);c<o;c++)u=r[c],f=l(f,e[u],u,e);return f};function KL(t){const e=[];let n=0;const i=t.length;for(;n<i;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Yu(t){const e=KL(t);return e.length===1?e[0].toString(16):null}function QL(t,e){const n=t.length;let i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function cg(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function Xu(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,s=cg(e);typeof _n.hooks.addPack=="function"&&!i?_n.hooks.addPack(t,cg(e)):_n.styles[t]=W(W({},_n.styles[t]||{}),s),t==="fas"&&Xu("fa",e)}const{styles:bo,shims:YL}=_n,oA=Object.keys(Rf),XL=oA.reduce((t,e)=>(t[e]=Object.keys(Rf[e]),t),{});let Pf=null,aA={},lA={},cA={},uA={},dA={};function JL(t){return~xL.indexOf(t)}function ZL(t,e){const n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!JL(s)?s:null}const fA=()=>{const t=i=>Jc(bo,(s,r,o)=>(s[o]=Jc(r,i,{}),s),{});aA=t((i,s,r)=>(s[3]&&(i[s[3]]=r),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{i[l.toString(16)]=r}),i)),lA=t((i,s,r)=>(i[r]=r,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{i[l]=r}),i)),dA=t((i,s,r)=>{const o=s[2];return i[r]=r,o.forEach(l=>{i[l]=r}),i});const e="far"in bo||oe.autoFetchSvg,n=Jc(YL,(i,s)=>{const r=s[0];let o=s[1];const l=s[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(i.names[r]={prefix:o,iconName:l}),typeof r=="number"&&(i.unicodes[r.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});cA=n.names,uA=n.unicodes,Pf=Jl(oe.styleDefault,{family:oe.familyDefault})};UL(t=>{Pf=Jl(t.styleDefault,{family:oe.familyDefault})});fA();function Nf(t,e){return(aA[t]||{})[e]}function eM(t,e){return(lA[t]||{})[e]}function as(t,e){return(dA[t]||{})[e]}function hA(t){return cA[t]||{prefix:null,iconName:null}}function tM(t){const e=uA[t],n=Nf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ui(){return Pf}const pA=()=>({prefix:null,iconName:null,rest:[]});function nM(t){let e=Nt;const n=oA.reduce((i,s)=>(i[s]="".concat(oe.cssPrefix,"-").concat(s),i),{});return KE.forEach(i=>{(t.includes(n[i])||t.some(s=>XL[i].includes(s)))&&(e=i)}),e}function Jl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Nt}=e,i=NL[n][t];if(n===Yl&&!t)return"fad";const s=og[n][t]||og[n][i],r=t in _n.styles?t:null;return s||r||null}function iM(t){let e=[],n=null;return t.forEach(i=>{const s=ZL(oe.cssPrefix,i);s?n=s:i&&e.push(i)}),{iconName:n,rest:e}}function ug(t){return t.sort().filter((e,n,i)=>i.indexOf(e)===n)}function Zl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let i=null;const s=ju.concat(IL),r=ug(t.filter(p=>s.includes(p))),o=ug(t.filter(p=>!ju.includes(p))),l=r.filter(p=>(i=p,!WE.includes(p))),[c=null]=l,u=nM(r),f=W(W({},iM(o)),{},{prefix:Jl(c,{family:u})});return W(W(W({},f),aM({values:t,family:u,styles:bo,config:oe,canonical:f,givenPrefix:i})),sM(n,i,f))}function sM(t,e,n){let{prefix:i,iconName:s}=n;if(t||!i||!s)return{prefix:i,iconName:s};const r=e==="fa"?hA(s):{},o=as(i,s);return s=r.iconName||o||s,i=r.prefix||i,i==="far"&&!bo.far&&bo.fas&&!oe.autoFetchSvg&&(i="fas"),{prefix:i,iconName:s}}const rM=KE.filter(t=>t!==Nt||t!==Yl),oM=Object.keys(Gu).filter(t=>t!==Nt).map(t=>Object.keys(Gu[t])).flat();function aM(t){const{values:e,family:n,canonical:i,givenPrefix:s="",styles:r={},config:o={}}=t,l=n===Yl,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!l&&(c||u||f)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&rM.includes(n)&&(Object.keys(r).find(m=>oM.includes(m))||o.autoFetchSvg)){const m=dL.get(n).defaultShortPrefixId;i.prefix=m,i.iconName=as(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||s==="fa")&&(i.prefix=Ui()||"fas"),i}class lM{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(r=>{this.definitions[r]=W(W({},this.definitions[r]||{}),s[r]),Xu(r,s[r]);const o=Rf[Nt][r];o&&Xu(o,s[r]),fA()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(s=>{const{prefix:r,iconName:o,icon:l}=i[s],c=l[2];e[r]||(e[r]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[r][u]=l)}),e[r][o]=l}),e}}let dg=[],qs={};const Ks={},cM=Object.keys(Ks);function uM(t,e){let{mixoutsTo:n}=e;return dg=t,qs={},Object.keys(Ks).forEach(i=>{cM.indexOf(i)===-1&&delete Ks[i]}),dg.forEach(i=>{const s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(r=>{typeof s[r]=="function"&&(n[r]=s[r]),typeof s[r]=="object"&&Object.keys(s[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=s[r][o]})}),i.hooks){const r=i.hooks();Object.keys(r).forEach(o=>{qs[o]||(qs[o]=[]),qs[o].push(r[o])})}i.provides&&i.provides(Ks)}),n}function Ju(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];return(qs[t]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function Is(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(qs[t]||[]).forEach(r=>{r.apply(null,n)})}function qi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ks[t]?Ks[t].apply(null,e):void 0}function Zu(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ui();if(e)return e=as(n,e)||e,lg(mA.definitions,n,e)||lg(_n.styles,n,e)}const mA=new lM,dM=()=>{oe.autoReplaceSvg=!1,oe.observeMutations=!1,Is("noAuto")},fM={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ni?(Is("beforeI2svg",t),qi("pseudoElements2svg",t),qi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;oe.autoReplaceSvg===!1&&(oe.autoReplaceSvg=!0),oe.observeMutations=!0,WL(()=>{pM({autoReplaceSvgRoot:e}),Is("watch",t)})}},hM={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:as(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Jl(t[0]);return{prefix:n,iconName:as(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(oe.cssPrefix,"-"))>-1||t.match(DL))){const e=Zl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ui(),iconName:as(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ui();return{prefix:e,iconName:as(e,t)||t}}}},Yt={noAuto:dM,config:oe,dom:fM,parse:hM,library:mA,findIconDefinition:Zu,toHtml:zo},pM=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Ye}=t;(Object.keys(_n.styles).length>0||oe.autoFetchSvg)&&ni&&oe.autoReplaceSvg&&Yt.dom.i2svg({node:e})};function ec(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>zo(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ni)return;const n=Ye.createElement("div");return n.innerHTML=t.html,n.children}}),t}function mM(t){let{children:e,main:n,mask:i,attributes:s,styles:r,transform:o}=t;if(Of(o)&&n.found&&!i.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};s.style=Xl(W(W({},r),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function gM(t){let{prefix:e,iconName:n,children:i,attributes:s,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(oe.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:i}]}]}function Df(t){const{icons:{main:e,mask:n},prefix:i,iconName:s,transform:r,symbol:o,title:l,maskId:c,titleId:u,extra:f,watchable:p=!1}=t,{width:m,height:I}=n.found?n:e,R=gL.includes(i),L=[oe.replacementClass,s?"".concat(oe.cssPrefix,"-").concat(s):""].filter(j=>f.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(f.classes).join(" ");let D={children:[],attributes:W(W({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:L,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(I)})};const C=R&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/I*16*.0625,"em")}:{};p&&(D.attributes[_s]=""),l&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(u||To())},children:[l]}),delete D.attributes.title);const O=W(W({},D),{},{prefix:i,iconName:s,main:e,mask:n,maskId:c,transform:r,symbol:o,styles:W(W({},C),f.styles)}),{children:x,attributes:F}=n.found&&e.found?qi("generateAbstractMask",O)||{children:[],attributes:{}}:qi("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=x,O.attributes=F,o?gM(O):mM(O)}function fg(t){const{content:e,width:n,height:i,transform:s,title:r,extra:o,watchable:l=!1}=t,c=W(W(W({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[_s]="");const u=W({},o.styles);Of(s)&&(u.transform=jL({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);const f=Xl(u);f.length>0&&(c.style=f);const p=[];return p.push({tag:"span",attributes:c,children:[e]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function yM(t){const{content:e,title:n,extra:i}=t,s=W(W(W({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=Xl(i.styles);r.length>0&&(s.style=r);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Zc}=_n;function ed(t){const e=t[0],n=t[1],[i]=t.slice(4);let s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(oe.cssPrefix,"-").concat(Yc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(oe.cssPrefix,"-").concat(Yc.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(oe.cssPrefix,"-").concat(Yc.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}const _M={found:!1,width:512,height:512};function IM(t,e){!JE&&!oe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function td(t,e){let n=e;return e==="fa"&&oe.styleDefault!==null&&(e=Ui()),new Promise((i,s)=>{if(n==="fa"){const r=hA(t);t=r.iconName||t,e=r.prefix||e}if(t&&e&&Zc[e]&&Zc[e][t]){const r=Zc[e][t];return i(ed(r))}IM(t,e),i(W(W({},_M),{},{icon:oe.showMissingIcons&&t?qi("missingIconAbstract")||{}:{}}))})}const hg=()=>{},nd=oe.measurePerformance&&ma&&ma.mark&&ma.measure?ma:{mark:hg,measure:hg},Vr='FA "6.7.2"',EM=t=>(nd.mark("".concat(Vr," ").concat(t," begins")),()=>gA(t)),gA=t=>{nd.mark("".concat(Vr," ").concat(t," ends")),nd.measure("".concat(Vr," ").concat(t),"".concat(Vr," ").concat(t," begins"),"".concat(Vr," ").concat(t," ends"))};var Lf={begin:EM,end:gA};const Pa=()=>{};function pg(t){return typeof(t.getAttribute?t.getAttribute(_s):null)=="string"}function AM(t){const e=t.getAttribute?t.getAttribute(bf):null,n=t.getAttribute?t.getAttribute(Sf):null;return e&&n}function wM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(oe.replacementClass)}function vM(){return oe.autoReplaceSvg===!0?Na.replace:Na[oe.autoReplaceSvg]||Na.replace}function TM(t){return Ye.createElementNS("http://www.w3.org/2000/svg",t)}function bM(t){return Ye.createElement(t)}function yA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?TM:bM}=e;if(typeof t=="string")return Ye.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){i.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){i.appendChild(yA(r,{ceFn:n}))}),i}function SM(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Na={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(yA(n),e)}),e.getAttribute(_s)===null&&oe.keepOriginalSource){let n=Ye.createComment(SM(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Cf(e).indexOf(oe.replacementClass))return Na.replace(t);const i=new RegExp("".concat(oe.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,l)=>(l===oe.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const s=n.map(r=>zo(r)).join(`
`);e.setAttribute(_s,""),e.innerHTML=s}};function mg(t){t()}function _A(t,e){const n=typeof e=="function"?e:Pa;if(t.length===0)n();else{let i=mg;oe.mutateApproach===OL&&(i=Fi.requestAnimationFrame||mg),i(()=>{const s=vM(),r=Lf.begin("mutate");t.map(s),r(),n()})}}let Mf=!1;function IA(){Mf=!0}function id(){Mf=!1}let al=null;function gg(t){if(!ng||!oe.observeMutations)return;const{treeCallback:e=Pa,nodeCallback:n=Pa,pseudoElementsCallback:i=Pa,observeMutationsRoot:s=Ye}=t;al=new ng(r=>{if(Mf)return;const o=Ui();pr(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!pg(l.addedNodes[0])&&(oe.searchPseudoElements&&i(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&oe.searchPseudoElements&&i(l.target.parentNode),l.type==="attributes"&&pg(l.target)&&~kL.indexOf(l.attributeName))if(l.attributeName==="class"&&AM(l.target)){const{prefix:c,iconName:u}=Zl(Cf(l.target));l.target.setAttribute(bf,c||o),u&&l.target.setAttribute(Sf,u)}else wM(l.target)&&n(l.target)})}),ni&&al.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function RM(){al&&al.disconnect()}function CM(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,s)=>{const r=s.split(":"),o=r[0],l=r.slice(1);return o&&l.length>0&&(i[o]=l.join(":").trim()),i},{})),n}function OM(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let s=Zl(Cf(t));return s.prefix||(s.prefix=Ui()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=eM(s.prefix,t.innerText)||Nf(s.prefix,Yu(t.innerText))),!s.iconName&&oe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function PM(t){const e=pr(t.attributes).reduce((s,r)=>(s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return oe.autoA11y&&(n?e["aria-labelledby"]="".concat(oe.replacementClass,"-title-").concat(i||To()):(e["aria-hidden"]="true",e.focusable="false")),e}function NM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:s}=OM(t),r=PM(t),o=Ju("parseNodeAttributes",{},t);let l=e.styleParser?CM(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:r}},o)}const{styles:DM}=_n;function EA(t){const e=oe.autoReplaceSvg==="nest"?yg(t,{styleParser:!1}):yg(t);return~e.extra.classes.indexOf(eA)?qi("generateLayersText",t,e):qi("generateSvgReplacementMutation",t,e)}function LM(){return[...hL,...ju]}function _g(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ni)return Promise.resolve();const n=Ye.documentElement.classList,i=f=>n.add("".concat(rg,"-").concat(f)),s=f=>n.remove("".concat(rg,"-").concat(f)),r=oe.autoFetchSvg?LM():WE.concat(Object.keys(DM));r.includes("fa")||r.push("fa");const o=[".".concat(eA,":not([").concat(_s,"])")].concat(r.map(f=>".".concat(f,":not([").concat(_s,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=pr(t.querySelectorAll(o))}catch{}if(l.length>0)i("pending"),s("complete");else return Promise.resolve();const c=Lf.begin("onTree"),u=l.reduce((f,p)=>{try{const m=EA(p);m&&f.push(m)}catch(m){JE||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(u).then(m=>{_A(m,()=>{i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(m=>{c(),p(m)})})}function MM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;EA(t).then(n=>{n&&_A([n],e)})}function kM(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Zu(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Zu(s||{})),t(i,W(W({},n),{},{mask:s}))}}const xM=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=yn,symbol:i=!1,mask:s=null,maskId:r=null,title:o=null,titleId:l=null,classes:c=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:I}=t;return ec(W({type:"icon"},t),()=>(Is("beforeDOMElementCreation",{iconDefinition:t,params:e}),oe.autoA11y&&(o?u["aria-labelledby"]="".concat(oe.replacementClass,"-title-").concat(l||To()):(u["aria-hidden"]="true",u.focusable="false")),Df({icons:{main:ed(I),mask:s?ed(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:W(W({},yn),n),symbol:i,title:o,maskId:r,titleId:l,extra:{attributes:u,styles:f,classes:c}})))};var VM={mixout(){return{icon:kM(xM)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=_g,t.nodeCallback=MM,t}}},provides(t){t.i2svg=function(e){const{node:n=Ye,callback:i=()=>{}}=e;return _g(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:s,titleId:r,prefix:o,transform:l,symbol:c,mask:u,maskId:f,extra:p}=n;return new Promise((m,I)=>{Promise.all([td(i,o),u.iconName?td(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[L,D]=R;m([e,Df({icons:{main:L,mask:D},prefix:o,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:r,extra:p,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:s,transform:r,styles:o}=e;const l=Xl(o);l.length>0&&(i.style=l);let c;return Of(r)&&(c=qi("generateAbstractTransformGrouping",{main:s,transform:r,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:i}}}},FM={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ec({type:"layer"},()=>{Is("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(s=>{Array.isArray(s)?s.map(r=>{i=i.concat(r.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(oe.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},UM={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:s={},styles:r={}}=e;return ec({type:"counter",content:t},()=>(Is("beforeDOMElementCreation",{content:t,params:e}),yM({content:t.toString(),title:n,extra:{attributes:s,styles:r,classes:["".concat(oe.cssPrefix,"-layers-counter"),...i]}})))}}}},qM={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=yn,title:i=null,classes:s=[],attributes:r={},styles:o={}}=e;return ec({type:"text",content:t},()=>(Is("beforeDOMElementCreation",{content:t,params:e}),fg({content:t,transform:W(W({},yn),n),title:i,extra:{attributes:r,styles:o,classes:["".concat(oe.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:s,extra:r}=n;let o=null,l=null;if(HE){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,l=u.height/c}return oe.autoA11y&&!i&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,fg({content:e.innerHTML,width:o,height:l,transform:s,title:i,extra:r,watchable:!0})])}}};const BM=new RegExp('"',"ug"),Ig=[1105920,1112319],Eg=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),uL),RL),EL),sd=Object.keys(Eg).reduce((t,e)=>(t[e.toLowerCase()]=Eg[e],t),{}),zM=Object.keys(sd).reduce((t,e)=>{const n=sd[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function GM(t){const e=t.replace(BM,""),n=QL(e,0),i=n>=Ig[0]&&n<=Ig[1],s=e.length===2?e[0]===e[1]:!1;return{value:Yu(s?e[0]:e),isSecondary:i||s}}function jM(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),s=isNaN(i)?"normal":i;return(sd[n]||{})[s]||zM[n]}function Ag(t,e){const n="".concat(CL).concat(e.replace(":","-"));return new Promise((i,s)=>{if(t.getAttribute(n)!==null)return i();const o=pr(t.children).filter(m=>m.getAttribute($u)===e)[0],l=Fi.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(LL),f=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),i();if(u&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let I=jM(c,f);const{value:R,isSecondary:L}=GM(m),D=u[0].startsWith("FontAwesome");let C=Nf(I,R),O=C;if(D){const x=tM(R);x.iconName&&x.prefix&&(C=x.iconName,I=x.prefix)}if(C&&!L&&(!o||o.getAttribute(bf)!==I||o.getAttribute(Sf)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);const x=NM(),{extra:F}=x;F.attributes[$u]=e,td(C,I).then(j=>{const V=Df(W(W({},x),{},{icons:{main:j,mask:pA()},prefix:I,iconName:O,extra:F,watchable:!0})),b=Ye.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=V.map(y=>zo(y)).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function HM(t){return Promise.all([Ag(t,"::before"),Ag(t,"::after")])}function $M(t){return t.parentNode!==document.head&&!~PL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($u)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function wg(t){if(ni)return new Promise((e,n)=>{const i=pr(t.querySelectorAll("*")).filter($M).map(HM),s=Lf.begin("searchPseudoElements");IA(),Promise.all(i).then(()=>{s(),id(),e()}).catch(()=>{s(),id(),n()})})}var WM={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=wg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Ye}=e;oe.searchPseudoElements&&wg(n)}}};let vg=!1;var KM={mixout(){return{dom:{unwatch(){IA(),vg=!0}}}},hooks(){return{bootstrap(){gg(Ju("mutationObserverCallbacks",{}))},noAuto(){RM()},watch(t){const{observeMutationsRoot:e}=t;vg?id():gg(Ju("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Tg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const s=i.toLowerCase().split("-"),r=s[0];let o=s.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var QM={mixout(){return{parse:{transform:t=>Tg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Tg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:s,iconWidth:r}=e;const o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(r/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:W({},m.outer),children:[{tag:"g",attributes:W({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),m.path)}]}]}}}};const eu={x:0,y:0,width:"100%",height:"100%"};function bg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function YM(t){return t.tag==="g"?t.children:[t]}var XM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?Zl(n.split(" ").map(s=>s.trim())):pA();return i.prefix||(i.prefix=Ui()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:s,mask:r,maskId:o,transform:l}=e;const{width:c,icon:u}=s,{width:f,icon:p}=r,m=GL({transform:l,containerWidth:f,iconWidth:c}),I={tag:"rect",attributes:W(W({},eu),{},{fill:"white"})},R=u.children?{children:u.children.map(bg)}:{},L={tag:"g",attributes:W({},m.inner),children:[bg(W({tag:u.tag,attributes:W(W({},u.attributes),m.path)},R))]},D={tag:"g",attributes:W({},m.outer),children:[L]},C="mask-".concat(o||To()),O="clip-".concat(o||To()),x={tag:"mask",attributes:W(W({},eu),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,D]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:YM(p)},x]};return n.push(F,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(C,")")},eu)}),{children:n,attributes:i}}}},JM={provides(t){let e=!1;Fi.matchMedia&&(e=Fi.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ZM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},e4=[$L,VM,FM,UM,qM,WM,KM,QM,XM,JM,ZM];uM(e4,{mixoutsTo:Yt});Yt.noAuto;Yt.config;const t4=Yt.library;Yt.dom;const rd=Yt.parse;Yt.findIconDefinition;Yt.toHtml;const n4=Yt.icon;Yt.layer;Yt.text;Yt.counter;function Sg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Bn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sg(Object(n),!0).forEach(function(i){Vt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function i4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function s4(t){var e=i4(t,"string");return typeof e=="symbol"?e:e+""}function ll(t){"@babel/helpers - typeof";return ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ll(t)}function Vt(t,e,n){return e=s4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r4(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function o4(t,e){if(t==null)return{};var n=r4(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var a4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},AA={exports:{}};(function(t){(function(e){var n=function(C,O,x){if(!u(O)||p(O)||m(O)||I(O)||c(O))return O;var F,j=0,V=0;if(f(O))for(F=[],V=O.length;j<V;j++)F.push(n(C,O[j],x));else{F={};for(var b in O)Object.prototype.hasOwnProperty.call(O,b)&&(F[C(b,x)]=n(C,O[b],x))}return F},i=function(C,O){O=O||{};var x=O.separator||"_",F=O.split||/(?=[A-Z])/;return C.split(F).join(x)},s=function(C){return R(C)?C:(C=C.replace(/[\-_\s]+(.)?/g,function(O,x){return x?x.toUpperCase():""}),C.substr(0,1).toLowerCase()+C.substr(1))},r=function(C){var O=s(C);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(C,O){return i(C,O).toLowerCase()},l=Object.prototype.toString,c=function(C){return typeof C=="function"},u=function(C){return C===Object(C)},f=function(C){return l.call(C)=="[object Array]"},p=function(C){return l.call(C)=="[object Date]"},m=function(C){return l.call(C)=="[object RegExp]"},I=function(C){return l.call(C)=="[object Boolean]"},R=function(C){return C=C-0,C===C},L=function(C,O){var x=O&&"process"in O?O.process:O;return typeof x!="function"?C:function(F,j){return x(F,C,j)}},D={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(C,O){return n(L(s,O),C)},decamelizeKeys:function(C,O){return n(L(o,O),C,O)},pascalizeKeys:function(C,O){return n(L(r,O),C)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})(a4)})(AA);var l4=AA.exports,c4=["class","style"];function u4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=l4.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function d4(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function wA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(c){return wA(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=d4(f);break;case"style":c.style=u4(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,l=o4(n,c4);return Al(t.tag,Bn(Bn(Bn({},e),{},{class:s.class,style:Bn(Bn({},s.style),o)},s.attrs),l),i)}var vA=!1;try{vA=!0}catch{}function f4(){if(!vA&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function tu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Vt({},t,e):{}}function h4(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Vt(Vt(Vt(Vt(Vt(Vt(Vt(Vt(Vt(Vt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Vt(Vt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Rg(t){if(t&&ll(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(rd.icon)return rd.icon(t);if(t===null)return null;if(ll(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var p4=Ed({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=Qe(function(){return Rg(e.icon)}),r=Qe(function(){return tu("classes",h4(e))}),o=Qe(function(){return tu("transform",typeof e.transform=="string"?rd.transform(e.transform):e.transform)}),l=Qe(function(){return tu("mask",Rg(e.mask))}),c=Qe(function(){return n4(s.value,Bn(Bn(Bn(Bn({},r.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});bi(c,function(f){if(!f)return f4("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var u=Qe(function(){return c.value?wA(c.value.abstract[0],{},i):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const m4={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},g4=m4,y4={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},_4=y4,I4={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},E4={prefix:"fas",iconName:"highlighter",icon:[576,512,[],"f591","M315 315l158.4-215L444.1 70.6 229 229 315 315zm-187 5s0 0 0 0l0-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5c0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5L224 416l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l63-63 70.6 70.6-31 31c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z"]},A4={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},w4={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},v4=w4,T4={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},b4={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},S4={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},R4=S4,C4={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},O4={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},P4=O4,N4={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"]},D4=N4,L4={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Cg=L4,M4={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},k4={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},x4=k4,V4={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},F4={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},U4={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},q4={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"]};t4.add(T4,q4,A4,Cg,V4,v4,F4,P4,g4,R4,D4,_4,E4,C4,b4,I4,U4,x4,M4,Cg);const tc=Av(RP),B4=Tv();tc.use(B4);tc.use(eL);tc.component("font-awesome-icon",p4);const z4=SE();z4.initAuthState();tc.mount("#app");

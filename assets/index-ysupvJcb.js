(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function sd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ze={},Us=[],_n=()=>{},WA=()=>!1,ac=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),rd=t=>t.startsWith("onUpdate:"),ht=Object.assign,od=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},KA=Object.prototype.hasOwnProperty,Ue=(t,e)=>KA.call(t,e),ae=Array.isArray,qs=t=>So(t)==="[object Map]",or=t=>So(t)==="[object Set]",bh=t=>So(t)==="[object Date]",Ae=t=>typeof t=="function",it=t=>typeof t=="string",Rn=t=>typeof t=="symbol",Ge=t=>t!==null&&typeof t=="object",Cg=t=>(Ge(t)||Ae(t))&&Ae(t.then)&&Ae(t.catch),Og=Object.prototype.toString,So=t=>Og.call(t),QA=t=>So(t).slice(8,-1),Pg=t=>So(t)==="[object Object]",ad=t=>it(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fr=sd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},YA=/-(\w)/g,nn=cc(t=>t.replace(YA,(e,n)=>n?n.toUpperCase():"")),XA=/\B([A-Z])/g,Is=cc(t=>t.replace(XA,"-$1").toLowerCase()),lc=cc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ml=cc(t=>t?`on${lc(t)}`:""),wi=(t,e)=>!Object.is(t,e),ma=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ng=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Pa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},JA=t=>{const e=it(t)?Number(t):NaN;return isNaN(e)?t:e};let Sh;const uc=()=>Sh||(Sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=it(i)?n1(i):dc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(it(t)||Ge(t))return t}const ZA=/;(?![^(]*\))/g,e1=/:([^]+)/,t1=/\/\*[^]*?\*\//g;function n1(t){const e={};return t.replace(t1,"").split(ZA).forEach(n=>{if(n){const i=n.split(e1);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ar(t){let e="";if(it(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const i=ar(t[n]);i&&(e+=i+" ")}else if(Ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const i1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s1=sd(i1);function Dg(t){return!!t||t===""}function r1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ro(t[i],e[i]);return n}function Ro(t,e){if(t===e)return!0;let n=bh(t),i=bh(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Rn(t),i=Rn(e),n||i)return t===e;if(n=ae(t),i=ae(e),n||i)return n&&i?r1(t,e):!1;if(n=Ge(t),i=Ge(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ro(t[o],e[o]))return!1}}return String(t)===String(e)}function cd(t,e){return t.findIndex(n=>Ro(n,e))}const Lg=t=>!!(t&&t.__v_isRef===!0),et=t=>it(t)?t:t==null?"":ae(t)||Ge(t)&&(t.toString===Og||!Ae(t.toString))?Lg(t)?et(t.value):JSON.stringify(t,Mg,2):String(t),Mg=(t,e)=>Lg(e)?Mg(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[gl(i,r)+" =>"]=s,n),{})}:or(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gl(n))}:Rn(e)?gl(e):Ge(e)&&!ae(e)&&!Pg(e)?String(e):e,gl=(t,e="")=>{var n;return Rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class kg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function xg(t){return new kg(t)}function Vg(){return Mt}function o1(t,e=!1){Mt&&Mt.cleanups.push(t)}let He;const yl=new WeakSet;class Fg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mt&&Mt.active&&Mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yl.has(this)&&(yl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rh(this),Bg(this);const e=He,n=rn;He=this,rn=!0;try{return this.fn()}finally{zg(this),He=e,rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)dd(e);this.deps=this.depsTail=void 0,Rh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){eu(this)&&this.run()}get dirty(){return eu(this)}}let Ug=0,Ur,qr;function qg(t,e=!1){if(t.flags|=8,e){t.next=qr,qr=t;return}t.next=Ur,Ur=t}function ld(){Ug++}function ud(){if(--Ug>0)return;if(qr){let e=qr;for(qr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ur;){let e=Ur;for(Ur=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Bg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function zg(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),dd(i),a1(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function eu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Gg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===no))return;t.globalVersion=no;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!eu(t)){t.flags&=-3;return}const n=He,i=rn;He=t,rn=!0;try{Bg(t);const s=t.fn(t._value);(e.version===0||wi(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{He=n,rn=i,zg(t),t.flags&=-3}}function dd(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)dd(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function a1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rn=!0;const jg=[];function Fi(){jg.push(rn),rn=!1}function Ui(){const t=jg.pop();rn=t===void 0?!0:t}function Rh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=He;He=void 0;try{e()}finally{He=n}}}let no=0;class c1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!He||!rn||He===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==He)n=this.activeLink=new c1(He,this),He.deps?(n.prevDep=He.depsTail,He.depsTail.nextDep=n,He.depsTail=n):He.deps=He.depsTail=n,Hg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=He.depsTail,n.nextDep=void 0,He.depsTail.nextDep=n,He.depsTail=n,He.deps===n&&(He.deps=i)}return n}trigger(e){this.version++,no++,this.notify(e)}notify(e){ld();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ud()}}}function Hg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Hg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Na=new WeakMap,rs=Symbol(""),tu=Symbol(""),io=Symbol("");function Rt(t,e,n){if(rn&&He){let i=Na.get(t);i||Na.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new fd),s.map=i,s.key=n),s.track()}}function Vn(t,e,n,i,s,r){const o=Na.get(t);if(!o){no++;return}const c=l=>{l&&l.trigger()};if(ld(),e==="clear")o.forEach(c);else{const l=ae(t),u=l&&ad(n);if(l&&n==="length"){const f=Number(i);o.forEach((p,m)=>{(m==="length"||m===io||!Rn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(io)),e){case"add":l?u&&c(o.get("length")):(c(o.get(rs)),qs(t)&&c(o.get(tu)));break;case"delete":l||(c(o.get(rs)),qs(t)&&c(o.get(tu)));break;case"set":qs(t)&&c(o.get(rs));break}}ud()}function l1(t,e){const n=Na.get(t);return n&&n.get(e)}function Cs(t){const e=Le(t);return e===t?e:(Rt(e,"iterate",io),en(t)?e:e.map(Ct))}function fc(t){return Rt(t=Le(t),"iterate",io),t}const u1={__proto__:null,[Symbol.iterator](){return Il(this,Symbol.iterator,Ct)},concat(...t){return Cs(this).concat(...t.map(e=>ae(e)?Cs(e):e))},entries(){return Il(this,"entries",t=>(t[1]=Ct(t[1]),t))},every(t,e){return Ln(this,"every",t,e,void 0,arguments)},filter(t,e){return Ln(this,"filter",t,e,n=>n.map(Ct),arguments)},find(t,e){return Ln(this,"find",t,e,Ct,arguments)},findIndex(t,e){return Ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ln(this,"findLast",t,e,Ct,arguments)},findLastIndex(t,e){return Ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return _l(this,"includes",t)},indexOf(...t){return _l(this,"indexOf",t)},join(t){return Cs(this).join(t)},lastIndexOf(...t){return _l(this,"lastIndexOf",t)},map(t,e){return Ln(this,"map",t,e,void 0,arguments)},pop(){return Cr(this,"pop")},push(...t){return Cr(this,"push",t)},reduce(t,...e){return Ch(this,"reduce",t,e)},reduceRight(t,...e){return Ch(this,"reduceRight",t,e)},shift(){return Cr(this,"shift")},some(t,e){return Ln(this,"some",t,e,void 0,arguments)},splice(...t){return Cr(this,"splice",t)},toReversed(){return Cs(this).toReversed()},toSorted(t){return Cs(this).toSorted(t)},toSpliced(...t){return Cs(this).toSpliced(...t)},unshift(...t){return Cr(this,"unshift",t)},values(){return Il(this,"values",Ct)}};function Il(t,e,n){const i=fc(t),s=i[e]();return i!==t&&!en(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const d1=Array.prototype;function Ln(t,e,n,i,s,r){const o=fc(t),c=o!==t&&!en(t),l=o[e];if(l!==d1[e]){const p=l.apply(t,r);return c?Ct(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,Ct(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,i);return c&&s?s(f):f}function Ch(t,e,n,i){const s=fc(t);let r=n;return s!==t&&(en(t)?n.length>3&&(r=function(o,c,l){return n.call(this,o,c,l,t)}):r=function(o,c,l){return n.call(this,o,Ct(c),l,t)}),s[e](r,...i)}function _l(t,e,n){const i=Le(t);Rt(i,"iterate",io);const s=i[e](...n);return(s===-1||s===!1)&&md(n[0])?(n[0]=Le(n[0]),i[e](...n)):s}function Cr(t,e,n=[]){Fi(),ld();const i=Le(t)[e].apply(t,n);return ud(),Ui(),i}const f1=sd("__proto__,__v_isRef,__isVue"),$g=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rn));function h1(t){Rn(t)||(t=String(t));const e=Le(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class Wg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?v1:Xg:r?Yg:Qg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ae(e);if(!s){let l;if(o&&(l=u1[n]))return l;if(n==="hasOwnProperty")return h1}const c=Reflect.get(e,n,nt(e)?e:i);return(Rn(n)?$g.has(n):f1(n))||(s||Rt(e,"get",n),r)?c:nt(c)?o&&ad(n)?c:c.value:Ge(c)?s?Zg(c):cs(c):c}}class Kg extends Wg{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=ls(r);if(!en(i)&&!ls(i)&&(r=Le(r),i=Le(i)),!ae(e)&&nt(r)&&!nt(i))return l?!1:(r.value=i,!0)}const o=ae(e)&&ad(n)?Number(n)<e.length:Ue(e,n),c=Reflect.set(e,n,i,nt(e)?e:s);return e===Le(s)&&(o?wi(i,r)&&Vn(e,"set",n,i):Vn(e,"add",n,i)),c}deleteProperty(e,n){const i=Ue(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Vn(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Rn(n)||!$g.has(n))&&Rt(e,"has",n),i}ownKeys(e){return Rt(e,"iterate",ae(e)?"length":rs),Reflect.ownKeys(e)}}class p1 extends Wg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const m1=new Kg,g1=new p1,y1=new Kg(!0);const nu=t=>t,ia=t=>Reflect.getPrototypeOf(t);function I1(t,e,n){return function(...i){const s=this.__v_raw,r=Le(s),o=qs(r),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...i),f=n?nu:e?iu:Ct;return!e&&Rt(r,"iterate",l?tu:rs),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function sa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _1(t,e){const n={get(s){const r=this.__v_raw,o=Le(r),c=Le(s);t||(wi(s,c)&&Rt(o,"get",s),Rt(o,"get",c));const{has:l}=ia(o),u=e?nu:t?iu:Ct;if(l.call(o,s))return u(r.get(s));if(l.call(o,c))return u(r.get(c));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Rt(Le(s),"iterate",rs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Le(r),c=Le(s);return t||(wi(s,c)&&Rt(o,"has",s),Rt(o,"has",c)),s===c?r.has(s):r.has(s)||r.has(c)},forEach(s,r){const o=this,c=o.__v_raw,l=Le(c),u=e?nu:t?iu:Ct;return!t&&Rt(l,"iterate",rs),c.forEach((f,p)=>s.call(r,u(f),u(p),o))}};return ht(n,t?{add:sa("add"),set:sa("set"),delete:sa("delete"),clear:sa("clear")}:{add(s){!e&&!en(s)&&!ls(s)&&(s=Le(s));const r=Le(this);return ia(r).has.call(r,s)||(r.add(s),Vn(r,"add",s,s)),this},set(s,r){!e&&!en(r)&&!ls(r)&&(r=Le(r));const o=Le(this),{has:c,get:l}=ia(o);let u=c.call(o,s);u||(s=Le(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,r),u?wi(r,f)&&Vn(o,"set",s,r):Vn(o,"add",s,r),this},delete(s){const r=Le(this),{has:o,get:c}=ia(r);let l=o.call(r,s);l||(s=Le(s),l=o.call(r,s)),c&&c.call(r,s);const u=r.delete(s);return l&&Vn(r,"delete",s,void 0),u},clear(){const s=Le(this),r=s.size!==0,o=s.clear();return r&&Vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=I1(s,t,e)}),n}function hd(t,e){const n=_1(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ue(n,s)&&s in i?n:i,s,r)}const E1={get:hd(!1,!1)},A1={get:hd(!1,!0)},w1={get:hd(!0,!1)};const Qg=new WeakMap,Yg=new WeakMap,Xg=new WeakMap,v1=new WeakMap;function T1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b1(t){return t.__v_skip||!Object.isExtensible(t)?0:T1(QA(t))}function cs(t){return ls(t)?t:pd(t,!1,m1,E1,Qg)}function Jg(t){return pd(t,!1,y1,A1,Yg)}function Zg(t){return pd(t,!0,g1,w1,Xg)}function pd(t,e,n,i,s){if(!Ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=b1(t);if(o===0)return t;const c=new Proxy(t,o===2?i:n);return s.set(t,c),c}function vi(t){return ls(t)?vi(t.__v_raw):!!(t&&t.__v_isReactive)}function ls(t){return!!(t&&t.__v_isReadonly)}function en(t){return!!(t&&t.__v_isShallow)}function md(t){return t?!!t.__v_raw:!1}function Le(t){const e=t&&t.__v_raw;return e?Le(e):t}function gd(t){return!Ue(t,"__v_skip")&&Object.isExtensible(t)&&Ng(t,"__v_skip",!0),t}const Ct=t=>Ge(t)?cs(t):t,iu=t=>Ge(t)?Zg(t):t;function nt(t){return t?t.__v_isRef===!0:!1}function Re(t){return ey(t,!1)}function S1(t){return ey(t,!0)}function ey(t,e){return nt(t)?t:new R1(t,e)}class R1{constructor(e,n){this.dep=new fd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Le(e),this._value=n?e:Ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||en(e)||ls(e);e=i?e:Le(e),wi(e,n)&&(this._rawValue=e,this._value=i?e:Ct(e),this.dep.trigger())}}function Ut(t){return nt(t)?t.value:t}const C1={get:(t,e,n)=>e==="__v_raw"?t:Ut(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return nt(s)&&!nt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function ty(t){return vi(t)?t:new Proxy(t,C1)}function O1(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=N1(t,n);return e}class P1{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return l1(Le(this._object),this._key)}}function N1(t,e,n){const i=t[e];return nt(i)?i:new P1(t,e,n)}class D1{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=no-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return qg(this,!0),!0}get value(){const e=this.dep.track();return Gg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function L1(t,e,n=!1){let i,s;return Ae(t)?i=t:(i=t.get,s=t.set),new D1(i,s,n)}const ra={},Da=new WeakMap;let Ji;function M1(t,e=!1,n=Ji){if(n){let i=Da.get(n);i||Da.set(n,i=[]),i.push(t)}}function k1(t,e,n=ze){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:c,call:l}=n,u=q=>s?q:en(q)||s===!1||s===0?Fn(q,1):Fn(q);let f,p,m,I,R=!1,L=!1;if(nt(t)?(p=()=>t.value,R=en(t)):vi(t)?(p=()=>u(t),R=!0):ae(t)?(L=!0,R=t.some(q=>vi(q)||en(q)),p=()=>t.map(q=>{if(nt(q))return q.value;if(vi(q))return u(q);if(Ae(q))return l?l(q,2):q()})):Ae(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Fi();try{m()}finally{Ui()}}const q=Ji;Ji=f;try{return l?l(t,3,[I]):t(I)}finally{Ji=q}}:p=_n,e&&s){const q=p,j=s===!0?1/0:s;p=()=>Fn(q(),j)}const D=Vg(),N=()=>{f.stop(),D&&D.active&&od(D.effects,f)};if(r&&e){const q=e;e=(...j)=>{q(...j),N()}}let O=L?new Array(t.length).fill(ra):ra;const x=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const j=f.run();if(s||R||(L?j.some((V,v)=>wi(V,O[v])):wi(j,O))){m&&m();const V=Ji;Ji=f;try{const v=[j,O===ra?void 0:L&&O[0]===ra?[]:O,I];l?l(e,3,v):e(...v),O=j}finally{Ji=V}}}else f.run()};return c&&c(x),f=new Fg(p),f.scheduler=o?()=>o(x,!1):x,I=q=>M1(q,!1,f),m=f.onStop=()=>{const q=Da.get(f);if(q){if(l)l(q,4);else for(const j of q)j();Da.delete(f)}},e?i?x(!0):O=f.run():o?o(x.bind(null,!0),!0):f.run(),N.pause=f.pause.bind(f),N.resume=f.resume.bind(f),N.stop=N,N}function Fn(t,e=1/0,n){if(e<=0||!Ge(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,nt(t))Fn(t.value,e,n);else if(ae(t))for(let i=0;i<t.length;i++)Fn(t[i],e,n);else if(or(t)||qs(t))t.forEach(i=>{Fn(i,e,n)});else if(Pg(t)){for(const i in t)Fn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Fn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Co(t,e,n,i){try{return i?t(...i):t()}catch(s){hc(s,e,n)}}function on(t,e,n,i){if(Ae(t)){const s=Co(t,e,n,i);return s&&Cg(s)&&s.catch(r=>{hc(r,e,n)}),s}if(ae(t)){const s=[];for(let r=0;r<t.length;r++)s.push(on(t[r],e,n,i));return s}}function hc(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ze;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(r){Fi(),Co(r,null,10,[t,l,u]),Ui();return}}x1(t,n,s,i,o)}function x1(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const kt=[];let fn=-1;const Bs=[];let di=null,Ns=0;const ny=Promise.resolve();let La=null;function pc(t){const e=La||ny;return t?e.then(this?t.bind(this):t):e}function V1(t){let e=fn+1,n=kt.length;for(;e<n;){const i=e+n>>>1,s=kt[i],r=so(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function yd(t){if(!(t.flags&1)){const e=so(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=so(n)?kt.push(t):kt.splice(V1(e),0,t),t.flags|=1,iy()}}function iy(){La||(La=ny.then(ry))}function F1(t){ae(t)?Bs.push(...t):di&&t.id===-1?di.splice(Ns+1,0,t):t.flags&1||(Bs.push(t),t.flags|=1),iy()}function Oh(t,e,n=fn+1){for(;n<kt.length;n++){const i=kt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;kt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function sy(t){if(Bs.length){const e=[...new Set(Bs)].sort((n,i)=>so(n)-so(i));if(Bs.length=0,di){di.push(...e);return}for(di=e,Ns=0;Ns<di.length;Ns++){const n=di[Ns];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}di=null,Ns=0}}const so=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ry(t){try{for(fn=0;fn<kt.length;fn++){const e=kt[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Co(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<kt.length;fn++){const e=kt[fn];e&&(e.flags&=-2)}fn=-1,kt.length=0,sy(),La=null,(kt.length||Bs.length)&&ry()}}let xt=null,oy=null;function Ma(t){const e=xt;return xt=t,oy=t&&t.type.__scopeId||null,e}function jn(t,e=xt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&qh(-1);const r=Ma(e);let o;try{o=t(...s)}finally{Ma(r),i._d&&qh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function rt(t,e){if(xt===null)return t;const n=Ec(xt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,c,l=ze]=e[s];r&&(Ae(r)&&(r={mounted:r,updated:r}),r.deep&&Fn(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ki(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];r&&(c.oldValue=r[o].value);let l=c.dir[i];l&&(Fi(),on(l,n,8,[t.el,c,t,e]),Ui())}}const U1=Symbol("_vte"),ay=t=>t.__isTeleport,fi=Symbol("_leaveCb"),oa=Symbol("_enterCb");function q1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yc(()=>{t.isMounted=!0}),_d(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],cy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},ly=t=>{const e=t.subTree;return e.component?ly(e.component):e},B1={name:"BaseTransition",props:cy,setup(t,{slots:e}){const n=Fw(),i=q1();return()=>{const s=e.default&&fy(e.default(),!0);if(!s||!s.length)return;const r=uy(s),o=Le(t),{mode:c}=o;if(i.isLeaving)return El(r);const l=Ph(r);if(!l)return El(r);let u=su(l,o,i,n,p=>u=p);l.type!==qt&&ro(l,u);let f=n.subTree&&Ph(n.subTree);if(f&&f.type!==qt&&!ts(l,f)&&ly(n).type!==qt){let p=su(f,o,i,n);if(ro(f,p),c==="out-in"&&l.type!==qt)return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},El(r);c==="in-out"&&l.type!==qt?p.delayLeave=(m,I,R)=>{const L=dy(i,f);L[String(f.key)]=f,m[fi]=()=>{I(),m[fi]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{R(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return r}}};function uy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==qt){e=n;break}}return e}const z1=B1;function dy(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function su(t,e,n,i,s){const{appear:r,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:I,onAfterLeave:R,onLeaveCancelled:L,onBeforeAppear:D,onAppear:N,onAfterAppear:O,onAppearCancelled:x}=e,q=String(t.key),j=dy(n,t),V=(g,w)=>{g&&on(g,i,9,w)},v=(g,w)=>{const S=w[1];V(g,w),ae(g)?g.every(b=>b.length<=1)&&S():g.length<=1&&S()},_={mode:o,persisted:c,beforeEnter(g){let w=l;if(!n.isMounted)if(r)w=D||l;else return;g[fi]&&g[fi](!0);const S=j[q];S&&ts(t,S)&&S.el[fi]&&S.el[fi](),V(w,[g])},enter(g){let w=u,S=f,b=p;if(!n.isMounted)if(r)w=N||u,S=O||f,b=x||p;else return;let E=!1;const Me=g[oa]=Ye=>{E||(E=!0,Ye?V(b,[g]):V(S,[g]),_.delayedLeave&&_.delayedLeave(),g[oa]=void 0)};w?v(w,[g,Me]):Me()},leave(g,w){const S=String(t.key);if(g[oa]&&g[oa](!0),n.isUnmounting)return w();V(m,[g]);let b=!1;const E=g[fi]=Me=>{b||(b=!0,w(),Me?V(L,[g]):V(R,[g]),g[fi]=void 0,j[S]===t&&delete j[S])};j[S]=t,I?v(I,[g,E]):E()},clone(g){const w=su(g,e,n,i,s);return s&&s(w),w}};return _}function El(t){if(mc(t))return t=Oi(t),t.children=null,t}function Ph(t){if(!mc(t))return ay(t.type)&&t.children?uy(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ae(n.default))return n.default()}}function ro(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ro(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fy(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===dt?(o.patchFlag&128&&s++,i=i.concat(fy(o.children,e,c))):(e||o.type!==qt)&&i.push(c!=null?Oi(o,{key:c}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Id(t,e){return Ae(t)?ht({name:t.name},e,{setup:t}):t}function hy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ka(t,e,n,i,s=!1){if(ae(t)){t.forEach((R,L)=>ka(R,e&&(ae(e)?e[L]:e),n,i,s));return}if(Br(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ka(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ec(i.component):i.el,o=s?null:r,{i:c,r:l}=t,u=e&&e.r,f=c.refs===ze?c.refs={}:c.refs,p=c.setupState,m=Le(p),I=p===ze?()=>!1:R=>Ue(m,R);if(u!=null&&u!==l&&(it(u)?(f[u]=null,I(u)&&(p[u]=null)):nt(u)&&(u.value=null)),Ae(l))Co(l,c,12,[o,f]);else{const R=it(l),L=nt(l);if(R||L){const D=()=>{if(t.f){const N=R?I(l)?p[l]:f[l]:l.value;s?ae(N)&&od(N,r):ae(N)?N.includes(r)||N.push(r):R?(f[l]=[r],I(l)&&(p[l]=f[l])):(l.value=[r],t.k&&(f[t.k]=l.value))}else R?(f[l]=o,I(l)&&(p[l]=o)):L&&(l.value=o,t.k&&(f[t.k]=o))};o?(D.id=-1,Ht(D,n)):D()}}}uc().requestIdleCallback;uc().cancelIdleCallback;const Br=t=>!!t.type.__asyncLoader,mc=t=>t.type.__isKeepAlive;function G1(t,e){py(t,"a",e)}function j1(t,e){py(t,"da",e)}function py(t,e,n=ft){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(gc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)mc(s.parent.vnode)&&H1(i,e,n,s),s=s.parent}}function H1(t,e,n,i){const s=gc(e,t,i,!0);my(()=>{od(i[e],s)},n)}function gc(t,e,n=ft,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Fi();const c=Oo(n),l=on(e,n,t,o);return c(),Ui(),l});return i?s.unshift(r):s.push(r),r}}const Zn=t=>(e,n=ft)=>{(!ao||t==="sp")&&gc(t,(...i)=>e(...i),n)},$1=Zn("bm"),yc=Zn("m"),W1=Zn("bu"),K1=Zn("u"),_d=Zn("bum"),my=Zn("um"),Q1=Zn("sp"),Y1=Zn("rtg"),X1=Zn("rtc");function J1(t,e=ft){gc("ec",t,e)}const Z1="components";function En(t,e){return tw(Z1,t,!0,e)||t}const ew=Symbol.for("v-ndc");function tw(t,e,n=!0,i=!1){const s=xt||ft;if(s){const r=s.type;{const c=Gw(r,!1);if(c&&(c===e||c===nn(e)||c===lc(nn(e))))return r}const o=Nh(s[t]||r[t],e)||Nh(s.appContext[t],e);return!o&&i?r:o}}function Nh(t,e){return t&&(t[e]||t[nn(e)]||t[lc(nn(e))])}function os(t,e,n,i){let s;const r=n,o=ae(t);if(o||it(t)){const c=o&&vi(t);let l=!1;c&&(l=!en(t),t=fc(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?Ct(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,r)}else if(Ge(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,r));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,r)}}else s=[];return s}const ru=t=>t?xy(t)?Ec(t):ru(t.parent):null,zr=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ru(t.parent),$root:t=>ru(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yy(t),$forceUpdate:t=>t.f||(t.f=()=>{yd(t.update)}),$nextTick:t=>t.n||(t.n=pc.bind(t.proxy)),$watch:t=>vw.bind(t)}),Al=(t,e)=>t!==ze&&!t.__isScriptSetup&&Ue(t,e),nw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Al(i,e))return o[e]=1,i[e];if(s!==ze&&Ue(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ue(u,e))return o[e]=3,r[e];if(n!==ze&&Ue(n,e))return o[e]=4,n[e];ou&&(o[e]=0)}}const f=zr[e];let p,m;if(f)return e==="$attrs"&&Rt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==ze&&Ue(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ue(m,e))return m[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Al(s,e)?(s[e]=n,!0):i!==ze&&Ue(i,e)?(i[e]=n,!0):Ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let c;return!!n[o]||t!==ze&&Ue(t,o)||Al(e,o)||(c=r[0])&&Ue(c,o)||Ue(i,o)||Ue(zr,o)||Ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Dh(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ou=!0;function iw(t){const e=yy(t),n=t.proxy,i=t.ctx;ou=!1,e.beforeCreate&&Lh(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:I,updated:R,activated:L,deactivated:D,beforeDestroy:N,beforeUnmount:O,destroyed:x,unmounted:q,render:j,renderTracked:V,renderTriggered:v,errorCaptured:_,serverPrefetch:g,expose:w,inheritAttrs:S,components:b,directives:E,filters:Me}=e;if(u&&sw(u,i,null),o)for(const fe in o){const be=o[fe];Ae(be)&&(i[fe]=be.bind(n))}if(s){const fe=s.call(n,n);Ge(fe)&&(t.data=cs(fe))}if(ou=!0,r)for(const fe in r){const be=r[fe],ie=Ae(be)?be.bind(n,n):Ae(be.get)?be.get.bind(n,n):_n,K=!Ae(be)&&Ae(be.set)?be.set.bind(n):_n,ve=Qe({get:ie,set:K});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>ve.value,set:ge=>ve.value=ge})}if(c)for(const fe in c)gy(c[fe],i,n,fe);if(l){const fe=Ae(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(be=>{ga(be,fe[be])})}f&&Lh(f,t,"c");function Ve(fe,be){ae(be)?be.forEach(ie=>fe(ie.bind(n))):be&&fe(be.bind(n))}if(Ve($1,p),Ve(yc,m),Ve(W1,I),Ve(K1,R),Ve(G1,L),Ve(j1,D),Ve(J1,_),Ve(X1,V),Ve(Y1,v),Ve(_d,O),Ve(my,q),Ve(Q1,g),ae(w))if(w.length){const fe=t.exposed||(t.exposed={});w.forEach(be=>{Object.defineProperty(fe,be,{get:()=>n[be],set:ie=>n[be]=ie})})}else t.exposed||(t.exposed={});j&&t.render===_n&&(t.render=j),S!=null&&(t.inheritAttrs=S),b&&(t.components=b),E&&(t.directives=E),g&&hy(t)}function sw(t,e,n=_n){ae(t)&&(t=au(t));for(const i in t){const s=t[i];let r;Ge(s)?"default"in s?r=An(s.from||i,s.default,!0):r=An(s.from||i):r=An(s),nt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Lh(t,e,n){on(ae(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function gy(t,e,n,i){let s=i.includes(".")?Ny(n,i):()=>n[i];if(it(t)){const r=e[t];Ae(r)&&Ti(s,r)}else if(Ae(t))Ti(s,t.bind(n));else if(Ge(t))if(ae(t))t.forEach(r=>gy(r,e,n,i));else{const r=Ae(t.handler)?t.handler.bind(n):e[t.handler];Ae(r)&&Ti(s,r,t)}}function yy(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,c=r.get(e);let l;return c?l=c:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(u=>xa(l,u,o,!0)),xa(l,e,o)),Ge(e)&&r.set(e,l),l}function xa(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&xa(t,r,n,!0),s&&s.forEach(o=>xa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const c=rw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const rw={data:Mh,props:kh,emits:kh,methods:Nr,computed:Nr,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Nr,directives:Nr,watch:aw,provide:Mh,inject:ow};function Mh(t,e){return e?t?function(){return ht(Ae(t)?t.call(this,this):t,Ae(e)?e.call(this,this):e)}:e:t}function ow(t,e){return Nr(au(t),au(e))}function au(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Nr(t,e){return t?ht(Object.create(null),t,e):e}function kh(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:ht(Object.create(null),Dh(t),Dh(e??{})):e}function aw(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const i in e)n[i]=Lt(t[i],e[i]);return n}function Iy(){return{app:null,config:{isNativeTag:WA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cw=0;function lw(t,e){return function(i,s=null){Ae(i)||(i=ht({},i)),s!=null&&!Ge(s)&&(s=null);const r=Iy(),o=new WeakSet,c=[];let l=!1;const u=r.app={_uid:cw++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Hw,get config(){return r.config},set config(f){},use(f,...p){return o.has(f)||(f&&Ae(f.install)?(o.add(f),f.install(u,...p)):Ae(f)&&(o.add(f),f(u,...p))),u},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),u},component(f,p){return p?(r.components[f]=p,u):r.components[f]},directive(f,p){return p?(r.directives[f]=p,u):r.directives[f]},mount(f,p,m){if(!l){const I=u._ceVNode||Ie(i,s);return I.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(I,f,m),l=!0,u._container=f,f.__vue_app__=u,Ec(I.component)}},onUnmount(f){c.push(f)},unmount(){l&&(on(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return r.provides[f]=p,u},runWithContext(f){const p=as;as=u;try{return f()}finally{as=p}}};return u}}let as=null;function ga(t,e){if(ft){let n=ft.provides;const i=ft.parent&&ft.parent.provides;i===n&&(n=ft.provides=Object.create(i)),n[t]=e}}function An(t,e,n=!1){const i=ft||xt;if(i||as){const s=as?as._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ae(e)?e.call(i&&i.proxy):e}}function uw(){return!!(ft||xt||as)}const _y={},Ey=()=>Object.create(_y),Ay=t=>Object.getPrototypeOf(t)===_y;function dw(t,e,n,i=!1){const s={},r=Ey();t.propsDefaults=Object.create(null),wy(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Jg(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function fw(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,c=Le(s),[l]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ic(t.emitsOptions,m))continue;const I=e[m];if(l)if(Ue(r,m))I!==r[m]&&(r[m]=I,u=!0);else{const R=nn(m);s[R]=cu(l,c,R,I,t,!1)}else I!==r[m]&&(r[m]=I,u=!0)}}}else{wy(t,e,s,r)&&(u=!0);let f;for(const p in c)(!e||!Ue(e,p)&&((f=Is(p))===p||!Ue(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=cu(l,c,p,void 0,t,!0)):delete s[p]);if(r!==c)for(const p in r)(!e||!Ue(e,p))&&(delete r[p],u=!0)}u&&Vn(t.attrs,"set","")}function wy(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Fr(l))continue;const u=e[l];let f;s&&Ue(s,f=nn(l))?!r||!r.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ic(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=Le(n),u=c||ze;for(let f=0;f<r.length;f++){const p=r[f];n[p]=cu(s,l,p,u[p],t,!Ue(u,p))}}return o}function cu(t,e,n,i,s,r){const o=t[n];if(o!=null){const c=Ue(o,"default");if(c&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ae(l)){const{propsDefaults:u}=s;if(n in u)i=u[n];else{const f=Oo(s);i=u[n]=l.call(null,e),f()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!c?i=!1:o[1]&&(i===""||i===Is(n))&&(i=!0))}return i}const hw=new WeakMap;function vy(t,e,n=!1){const i=n?hw:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},c=[];let l=!1;if(!Ae(t)){const f=p=>{l=!0;const[m,I]=vy(p,e,!0);ht(o,m),I&&c.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!l)return Ge(t)&&i.set(t,Us),Us;if(ae(r))for(let f=0;f<r.length;f++){const p=nn(r[f]);xh(p)&&(o[p]=ze)}else if(r)for(const f in r){const p=nn(f);if(xh(p)){const m=r[f],I=o[p]=ae(m)||Ae(m)?{type:m}:ht({},m),R=I.type;let L=!1,D=!0;if(ae(R))for(let N=0;N<R.length;++N){const O=R[N],x=Ae(O)&&O.name;if(x==="Boolean"){L=!0;break}else x==="String"&&(D=!1)}else L=Ae(R)&&R.name==="Boolean";I[0]=L,I[1]=D,(L||Ue(I,"default"))&&c.push(p)}}const u=[o,c];return Ge(t)&&i.set(t,u),u}function xh(t){return t[0]!=="$"&&!Fr(t)}const Ty=t=>t[0]==="_"||t==="$stable",Ed=t=>ae(t)?t.map(pn):[pn(t)],pw=(t,e,n)=>{if(e._n)return e;const i=jn((...s)=>Ed(e(...s)),n);return i._c=!1,i},by=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Ty(s))continue;const r=t[s];if(Ae(r))e[s]=pw(s,r,i);else if(r!=null){const o=Ed(r);e[s]=()=>o}}},Sy=(t,e)=>{const n=Ed(e);t.slots.default=()=>n},Ry=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},mw=(t,e,n)=>{const i=t.slots=Ey();if(t.vnode.shapeFlag&32){const s=e._;s?(Ry(i,e,n),n&&Ng(i,"_",s,!0)):by(e,i)}else e&&Sy(t,e)},gw=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=ze;if(i.shapeFlag&32){const c=e._;c?n&&c===1?r=!1:Ry(s,e,n):(r=!e.$stable,by(e,s)),o=e}else e&&(Sy(t,e),o={default:1});if(r)for(const c in s)!Ty(c)&&o[c]==null&&delete s[c]},Ht=Pw;function yw(t){return Iw(t)}function Iw(t,e){const n=uc();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:I=_n,insertStaticContent:R}=t,L=(A,T,C,U=null,G=null,B=null,J=void 0,Y=null,Q=!!T.dynamicChildren)=>{if(A===T)return;A&&!ts(A,T)&&(U=F(A),ge(A,G,B,!0),A=null),T.patchFlag===-2&&(Q=!1,T.dynamicChildren=null);const{type:H,ref:le,shapeFlag:ee}=T;switch(H){case _c:D(A,T,C,U);break;case qt:N(A,T,C,U);break;case vl:A==null&&O(T,C,U,J);break;case dt:b(A,T,C,U,G,B,J,Y,Q);break;default:ee&1?j(A,T,C,U,G,B,J,Y,Q):ee&6?E(A,T,C,U,G,B,J,Y,Q):(ee&64||ee&128)&&H.process(A,T,C,U,G,B,J,Y,Q,se)}le!=null&&G&&ka(le,A&&A.ref,B,T||A,!T)},D=(A,T,C,U)=>{if(A==null)i(T.el=c(T.children),C,U);else{const G=T.el=A.el;T.children!==A.children&&u(G,T.children)}},N=(A,T,C,U)=>{A==null?i(T.el=l(T.children||""),C,U):T.el=A.el},O=(A,T,C,U)=>{[A.el,A.anchor]=R(A.children,T,C,U,A.el,A.anchor)},x=({el:A,anchor:T},C,U)=>{let G;for(;A&&A!==T;)G=m(A),i(A,C,U),A=G;i(T,C,U)},q=({el:A,anchor:T})=>{let C;for(;A&&A!==T;)C=m(A),s(A),A=C;s(T)},j=(A,T,C,U,G,B,J,Y,Q)=>{T.type==="svg"?J="svg":T.type==="math"&&(J="mathml"),A==null?V(T,C,U,G,B,J,Y,Q):g(A,T,G,B,J,Y,Q)},V=(A,T,C,U,G,B,J,Y)=>{let Q,H;const{props:le,shapeFlag:ee,transition:oe,dirs:he}=A;if(Q=A.el=o(A.type,B,le&&le.is,le),ee&8?f(Q,A.children):ee&16&&_(A.children,Q,null,U,G,wl(A,B),J,Y),he&&Ki(A,null,U,"created"),v(Q,A,A.scopeId,J,U),le){for(const Te in le)Te!=="value"&&!Fr(Te)&&r(Q,Te,null,le[Te],B,U);"value"in le&&r(Q,"value",null,le.value,B),(H=le.onVnodeBeforeMount)&&dn(H,U,A)}he&&Ki(A,null,U,"beforeMount");const ue=_w(G,oe);ue&&oe.beforeEnter(Q),i(Q,T,C),((H=le&&le.onVnodeMounted)||ue||he)&&Ht(()=>{H&&dn(H,U,A),ue&&oe.enter(Q),he&&Ki(A,null,U,"mounted")},G)},v=(A,T,C,U,G)=>{if(C&&I(A,C),U)for(let B=0;B<U.length;B++)I(A,U[B]);if(G){let B=G.subTree;if(T===B||Ly(B.type)&&(B.ssContent===T||B.ssFallback===T)){const J=G.vnode;v(A,J,J.scopeId,J.slotScopeIds,G.parent)}}},_=(A,T,C,U,G,B,J,Y,Q=0)=>{for(let H=Q;H<A.length;H++){const le=A[H]=Y?hi(A[H]):pn(A[H]);L(null,le,T,C,U,G,B,J,Y)}},g=(A,T,C,U,G,B,J)=>{const Y=T.el=A.el;let{patchFlag:Q,dynamicChildren:H,dirs:le}=T;Q|=A.patchFlag&16;const ee=A.props||ze,oe=T.props||ze;let he;if(C&&Qi(C,!1),(he=oe.onVnodeBeforeUpdate)&&dn(he,C,T,A),le&&Ki(T,A,C,"beforeUpdate"),C&&Qi(C,!0),(ee.innerHTML&&oe.innerHTML==null||ee.textContent&&oe.textContent==null)&&f(Y,""),H?w(A.dynamicChildren,H,Y,C,U,wl(T,G),B):J||be(A,T,Y,null,C,U,wl(T,G),B,!1),Q>0){if(Q&16)S(Y,ee,oe,C,G);else if(Q&2&&ee.class!==oe.class&&r(Y,"class",null,oe.class,G),Q&4&&r(Y,"style",ee.style,oe.style,G),Q&8){const ue=T.dynamicProps;for(let Te=0;Te<ue.length;Te++){const Ne=ue[Te],At=ee[Ne],pt=oe[Ne];(pt!==At||Ne==="value")&&r(Y,Ne,At,pt,G,C)}}Q&1&&A.children!==T.children&&f(Y,T.children)}else!J&&H==null&&S(Y,ee,oe,C,G);((he=oe.onVnodeUpdated)||le)&&Ht(()=>{he&&dn(he,C,T,A),le&&Ki(T,A,C,"updated")},U)},w=(A,T,C,U,G,B,J)=>{for(let Y=0;Y<T.length;Y++){const Q=A[Y],H=T[Y],le=Q.el&&(Q.type===dt||!ts(Q,H)||Q.shapeFlag&70)?p(Q.el):C;L(Q,H,le,null,U,G,B,J,!0)}},S=(A,T,C,U,G)=>{if(T!==C){if(T!==ze)for(const B in T)!Fr(B)&&!(B in C)&&r(A,B,T[B],null,G,U);for(const B in C){if(Fr(B))continue;const J=C[B],Y=T[B];J!==Y&&B!=="value"&&r(A,B,Y,J,G,U)}"value"in C&&r(A,"value",T.value,C.value,G)}},b=(A,T,C,U,G,B,J,Y,Q)=>{const H=T.el=A?A.el:c(""),le=T.anchor=A?A.anchor:c("");let{patchFlag:ee,dynamicChildren:oe,slotScopeIds:he}=T;he&&(Y=Y?Y.concat(he):he),A==null?(i(H,C,U),i(le,C,U),_(T.children||[],C,le,G,B,J,Y,Q)):ee>0&&ee&64&&oe&&A.dynamicChildren?(w(A.dynamicChildren,oe,C,G,B,J,Y),(T.key!=null||G&&T===G.subTree)&&Cy(A,T,!0)):be(A,T,C,le,G,B,J,Y,Q)},E=(A,T,C,U,G,B,J,Y,Q)=>{T.slotScopeIds=Y,A==null?T.shapeFlag&512?G.ctx.activate(T,C,U,J,Q):Me(T,C,U,G,B,J,Q):Ye(A,T,Q)},Me=(A,T,C,U,G,B,J)=>{const Y=A.component=Vw(A,U,G);if(mc(A)&&(Y.ctx.renderer=se),Uw(Y,!1,J),Y.asyncDep){if(G&&G.registerDep(Y,Ve,J),!A.el){const Q=Y.subTree=Ie(qt);N(null,Q,T,C)}}else Ve(Y,A,T,C,G,B,J)},Ye=(A,T,C)=>{const U=T.component=A.component;if(Cw(A,T,C))if(U.asyncDep&&!U.asyncResolved){fe(U,T,C);return}else U.next=T,U.update();else T.el=A.el,U.vnode=T},Ve=(A,T,C,U,G,B,J)=>{const Y=()=>{if(A.isMounted){let{next:ee,bu:oe,u:he,parent:ue,vnode:Te}=A;{const wt=Oy(A);if(wt){ee&&(ee.el=Te.el,fe(A,ee,J)),wt.asyncDep.then(()=>{A.isUnmounted||Y()});return}}let Ne=ee,At;Qi(A,!1),ee?(ee.el=Te.el,fe(A,ee,J)):ee=Te,oe&&ma(oe),(At=ee.props&&ee.props.onVnodeBeforeUpdate)&&dn(At,ue,ee,Te),Qi(A,!0);const pt=Fh(A),Xt=A.subTree;A.subTree=pt,L(Xt,pt,p(Xt.el),F(Xt),A,G,B),ee.el=pt.el,Ne===null&&Ow(A,pt.el),he&&Ht(he,G),(At=ee.props&&ee.props.onVnodeUpdated)&&Ht(()=>dn(At,ue,ee,Te),G)}else{let ee;const{el:oe,props:he}=T,{bm:ue,m:Te,parent:Ne,root:At,type:pt}=A,Xt=Br(T);Qi(A,!1),ue&&ma(ue),!Xt&&(ee=he&&he.onVnodeBeforeMount)&&dn(ee,Ne,T),Qi(A,!0);{At.ce&&At.ce._injectChildStyle(pt);const wt=A.subTree=Fh(A);L(null,wt,C,U,A,G,B),T.el=wt.el}if(Te&&Ht(Te,G),!Xt&&(ee=he&&he.onVnodeMounted)){const wt=T;Ht(()=>dn(ee,Ne,wt),G)}(T.shapeFlag&256||Ne&&Br(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&A.a&&Ht(A.a,G),A.isMounted=!0,T=C=U=null}};A.scope.on();const Q=A.effect=new Fg(Y);A.scope.off();const H=A.update=Q.run.bind(Q),le=A.job=Q.runIfDirty.bind(Q);le.i=A,le.id=A.uid,Q.scheduler=()=>yd(le),Qi(A,!0),H()},fe=(A,T,C)=>{T.component=A;const U=A.vnode.props;A.vnode=T,A.next=null,fw(A,T.props,U,C),gw(A,T.children,C),Fi(),Oh(A),Ui()},be=(A,T,C,U,G,B,J,Y,Q=!1)=>{const H=A&&A.children,le=A?A.shapeFlag:0,ee=T.children,{patchFlag:oe,shapeFlag:he}=T;if(oe>0){if(oe&128){K(H,ee,C,U,G,B,J,Y,Q);return}else if(oe&256){ie(H,ee,C,U,G,B,J,Y,Q);return}}he&8?(le&16&&Et(H,G,B),ee!==H&&f(C,ee)):le&16?he&16?K(H,ee,C,U,G,B,J,Y,Q):Et(H,G,B,!0):(le&8&&f(C,""),he&16&&_(ee,C,U,G,B,J,Y,Q))},ie=(A,T,C,U,G,B,J,Y,Q)=>{A=A||Us,T=T||Us;const H=A.length,le=T.length,ee=Math.min(H,le);let oe;for(oe=0;oe<ee;oe++){const he=T[oe]=Q?hi(T[oe]):pn(T[oe]);L(A[oe],he,C,null,G,B,J,Y,Q)}H>le?Et(A,G,B,!0,!1,ee):_(T,C,U,G,B,J,Y,Q,ee)},K=(A,T,C,U,G,B,J,Y,Q)=>{let H=0;const le=T.length;let ee=A.length-1,oe=le-1;for(;H<=ee&&H<=oe;){const he=A[H],ue=T[H]=Q?hi(T[H]):pn(T[H]);if(ts(he,ue))L(he,ue,C,null,G,B,J,Y,Q);else break;H++}for(;H<=ee&&H<=oe;){const he=A[ee],ue=T[oe]=Q?hi(T[oe]):pn(T[oe]);if(ts(he,ue))L(he,ue,C,null,G,B,J,Y,Q);else break;ee--,oe--}if(H>ee){if(H<=oe){const he=oe+1,ue=he<le?T[he].el:U;for(;H<=oe;)L(null,T[H]=Q?hi(T[H]):pn(T[H]),C,ue,G,B,J,Y,Q),H++}}else if(H>oe)for(;H<=ee;)ge(A[H],G,B,!0),H++;else{const he=H,ue=H,Te=new Map;for(H=ue;H<=oe;H++){const mt=T[H]=Q?hi(T[H]):pn(T[H]);mt.key!=null&&Te.set(mt.key,H)}let Ne,At=0;const pt=oe-ue+1;let Xt=!1,wt=0;const ni=new Array(pt);for(H=0;H<pt;H++)ni[H]=0;for(H=he;H<=ee;H++){const mt=A[H];if(At>=pt){ge(mt,G,B,!0);continue}let Jt;if(mt.key!=null)Jt=Te.get(mt.key);else for(Ne=ue;Ne<=oe;Ne++)if(ni[Ne-ue]===0&&ts(mt,T[Ne])){Jt=Ne;break}Jt===void 0?ge(mt,G,B,!0):(ni[Jt-ue]=H+1,Jt>=wt?wt=Jt:Xt=!0,L(mt,T[Jt],C,null,G,B,J,Y,Q),At++)}const mr=Xt?Ew(ni):Us;for(Ne=mr.length-1,H=pt-1;H>=0;H--){const mt=ue+H,Jt=T[mt],Bo=mt+1<le?T[mt+1].el:U;ni[H]===0?L(null,Jt,C,Bo,G,B,J,Y,Q):Xt&&(Ne<0||H!==mr[Ne]?ve(Jt,C,Bo,2):Ne--)}}},ve=(A,T,C,U,G=null)=>{const{el:B,type:J,transition:Y,children:Q,shapeFlag:H}=A;if(H&6){ve(A.component.subTree,T,C,U);return}if(H&128){A.suspense.move(T,C,U);return}if(H&64){J.move(A,T,C,se);return}if(J===dt){i(B,T,C);for(let ee=0;ee<Q.length;ee++)ve(Q[ee],T,C,U);i(A.anchor,T,C);return}if(J===vl){x(A,T,C);return}if(U!==2&&H&1&&Y)if(U===0)Y.beforeEnter(B),i(B,T,C),Ht(()=>Y.enter(B),G);else{const{leave:ee,delayLeave:oe,afterLeave:he}=Y,ue=()=>i(B,T,C),Te=()=>{ee(B,()=>{ue(),he&&he()})};oe?oe(B,ue,Te):Te()}else i(B,T,C)},ge=(A,T,C,U=!1,G=!1)=>{const{type:B,props:J,ref:Y,children:Q,dynamicChildren:H,shapeFlag:le,patchFlag:ee,dirs:oe,cacheIndex:he}=A;if(ee===-2&&(G=!1),Y!=null&&ka(Y,null,C,A,!0),he!=null&&(T.renderCache[he]=void 0),le&256){T.ctx.deactivate(A);return}const ue=le&1&&oe,Te=!Br(A);let Ne;if(Te&&(Ne=J&&J.onVnodeBeforeUnmount)&&dn(Ne,T,A),le&6)Gt(A.component,C,U);else{if(le&128){A.suspense.unmount(C,U);return}ue&&Ki(A,null,T,"beforeUnmount"),le&64?A.type.remove(A,T,C,se,U):H&&!H.hasOnce&&(B!==dt||ee>0&&ee&64)?Et(H,T,C,!1,!0):(B===dt&&ee&384||!G&&le&16)&&Et(Q,T,C),U&&ye(A)}(Te&&(Ne=J&&J.onVnodeUnmounted)||ue)&&Ht(()=>{Ne&&dn(Ne,T,A),ue&&Ki(A,null,T,"unmounted")},C)},ye=A=>{const{type:T,el:C,anchor:U,transition:G}=A;if(T===dt){je(C,U);return}if(T===vl){q(A);return}const B=()=>{s(C),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(A.shapeFlag&1&&G&&!G.persisted){const{leave:J,delayLeave:Y}=G,Q=()=>J(C,B);Y?Y(A.el,B,Q):Q()}else B()},je=(A,T)=>{let C;for(;A!==T;)C=m(A),s(A),A=C;s(T)},Gt=(A,T,C)=>{const{bum:U,scope:G,job:B,subTree:J,um:Y,m:Q,a:H}=A;Vh(Q),Vh(H),U&&ma(U),G.stop(),B&&(B.flags|=8,ge(J,A,T,C)),Y&&Ht(Y,T),Ht(()=>{A.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Et=(A,T,C,U=!1,G=!1,B=0)=>{for(let J=B;J<A.length;J++)ge(A[J],T,C,U,G)},F=A=>{if(A.shapeFlag&6)return F(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const T=m(A.anchor||A.el),C=T&&T[U1];return C?m(C):T};let te=!1;const Z=(A,T,C)=>{A==null?T._vnode&&ge(T._vnode,null,null,!0):L(T._vnode||null,A,T,null,null,null,C),T._vnode=A,te||(te=!0,Oh(),sy(),te=!1)},se={p:L,um:ge,m:ve,r:ye,mt:Me,mc:_,pc:be,pbc:w,n:F,o:t};return{render:Z,hydrate:void 0,createApp:lw(Z)}}function wl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _w(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cy(t,e,n=!1){const i=t.children,s=e.children;if(ae(i)&&ae(s))for(let r=0;r<i.length;r++){const o=i[r];let c=s[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[r]=hi(s[r]),c.el=o.el),!n&&c.patchFlag!==-2&&Cy(o,c)),c.type===_c&&(c.el=o.el)}}function Ew(t){const e=t.slice(),n=[0];let i,s,r,o,c;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(s=n[n.length-1],t[s]<u){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)c=r+o>>1,t[n[c]]<u?r=c+1:o=c;u<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Oy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Oy(e)}function Vh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Aw=Symbol.for("v-scx"),ww=()=>An(Aw);function Ti(t,e,n){return Py(t,e,n)}function Py(t,e,n=ze){const{immediate:i,deep:s,flush:r,once:o}=n,c=ht({},n),l=e&&i||!e&&r!=="post";let u;if(ao){if(r==="sync"){const I=ww();u=I.__watcherHandles||(I.__watcherHandles=[])}else if(!l){const I=()=>{};return I.stop=_n,I.resume=_n,I.pause=_n,I}}const f=ft;c.call=(I,R,L)=>on(I,f,R,L);let p=!1;r==="post"?c.scheduler=I=>{Ht(I,f&&f.suspense)}:r!=="sync"&&(p=!0,c.scheduler=(I,R)=>{R?I():yd(I)}),c.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,f&&(I.id=f.uid,I.i=f))};const m=k1(t,e,c);return ao&&(u?u.push(m):l&&m()),m}function vw(t,e,n){const i=this.proxy,s=it(t)?t.includes(".")?Ny(i,t):()=>i[t]:t.bind(i,i);let r;Ae(e)?r=e:(r=e.handler,n=e);const o=Oo(this),c=Py(s,r.bind(i),n);return o(),c}function Ny(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Tw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${Is(e)}Modifiers`];function bw(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ze;let s=n;const r=e.startsWith("update:"),o=r&&Tw(i,e.slice(7));o&&(o.trim&&(s=n.map(f=>it(f)?f.trim():f)),o.number&&(s=n.map(Pa)));let c,l=i[c=ml(e)]||i[c=ml(nn(e))];!l&&r&&(l=i[c=ml(Is(e))]),l&&on(l,t,6,s);const u=i[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,on(u,t,6,s)}}function Dy(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},c=!1;if(!Ae(t)){const l=u=>{const f=Dy(u,e,!0);f&&(c=!0,ht(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!c?(Ge(t)&&i.set(t,null),null):(ae(r)?r.forEach(l=>o[l]=null):ht(o,r),Ge(t)&&i.set(t,o),o)}function Ic(t,e){return!t||!ac(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(t,e[0].toLowerCase()+e.slice(1))||Ue(t,Is(e))||Ue(t,e))}function Fh(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:I,ctx:R,inheritAttrs:L}=t,D=Ma(t);let N,O;try{if(n.shapeFlag&4){const q=s||i,j=q;N=pn(u.call(j,q,f,p,I,m,R)),O=c}else{const q=e;N=pn(q.length>1?q(p,{attrs:c,slots:o,emit:l}):q(p,null)),O=e.props?c:Sw(c)}}catch(q){Gr.length=0,hc(q,t,1),N=Ie(qt)}let x=N;if(O&&L!==!1){const q=Object.keys(O),{shapeFlag:j}=x;q.length&&j&7&&(r&&q.some(rd)&&(O=Rw(O,r)),x=Oi(x,O,!1,!0))}return n.dirs&&(x=Oi(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&ro(x,n.transition),N=x,Ma(D),N}const Sw=t=>{let e;for(const n in t)(n==="class"||n==="style"||ac(n))&&((e||(e={}))[n]=t[n]);return e},Rw=(t,e)=>{const n={};for(const i in t)(!rd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Cw(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:c,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Uh(i,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==i[m]&&!Ic(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:i===o?!1:i?o?Uh(i,o,u):!0:!!o;return!1}function Uh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Ic(n,r))return!0}return!1}function Ow({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ly=t=>t.__isSuspense;function Pw(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):F1(t)}const dt=Symbol.for("v-fgt"),_c=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),vl=Symbol.for("v-stc"),Gr=[];let $t=null;function _e(t=!1){Gr.push($t=t?null:[])}function Nw(){Gr.pop(),$t=Gr[Gr.length-1]||null}let oo=1;function qh(t,e=!1){oo+=t,t<0&&$t&&e&&($t.hasOnce=!0)}function My(t){return t.dynamicChildren=oo>0?$t||Us:null,Nw(),oo>0&&$t&&$t.push(t),t}function Se(t,e,n,i,s,r){return My(k(t,e,n,i,s,r,!0))}function Zi(t,e,n,i,s){return My(Ie(t,e,n,i,s,!0))}function Va(t){return t?t.__v_isVNode===!0:!1}function ts(t,e){return t.type===e.type&&t.key===e.key}const ky=({key:t})=>t??null,ya=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?it(t)||nt(t)||Ae(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,i=0,s=null,r=t===dt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ky(e),ref:e&&ya(e),scopeId:oy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xt};return c?(Ad(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=it(n)?8:16),oo>0&&!o&&$t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&$t.push(l),l}const Ie=Dw;function Dw(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===ew)&&(t=qt),Va(t)){const c=Oi(t,e,!0);return n&&Ad(c,n),oo>0&&!r&&$t&&(c.shapeFlag&6?$t[$t.indexOf(t)]=c:$t.push(c)),c.patchFlag=-2,c}if(jw(t)&&(t=t.__vccOpts),e){e=Lw(e);let{class:c,style:l}=e;c&&!it(c)&&(e.class=ar(c)),Ge(l)&&(md(l)&&!ae(l)&&(l=ht({},l)),e.style=dc(l))}const o=it(t)?1:Ly(t)?128:ay(t)?64:Ge(t)?4:Ae(t)?2:0;return k(t,e,n,i,s,o,r,!0)}function Lw(t){return t?md(t)||Ay(t)?ht({},t):t:null}function Oi(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:c,transition:l}=t,u=e?Mw(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ky(u),ref:e&&e.ref?n&&r?ae(r)?r.concat(ya(e)):[r,ya(e)]:ya(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Oi(t.ssContent),ssFallback:t.ssFallback&&Oi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&ro(f,l.clone(f)),f}function We(t=" ",e=0){return Ie(_c,null,t,e)}function qn(t="",e=!1){return e?(_e(),Zi(qt,null,t)):Ie(qt,null,t)}function pn(t){return t==null||typeof t=="boolean"?Ie(qt):ae(t)?Ie(dt,null,t.slice()):Va(t)?hi(t):Ie(_c,null,String(t))}function hi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Oi(t)}function Ad(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ad(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ay(e)?e._ctx=xt:s===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ae(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),i&64?(n=16,e=[We(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mw(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ar([e.class,i.class]));else if(s==="style")e.style=dc([e.style,i.style]);else if(ac(s)){const r=e[s],o=i[s];o&&r!==o&&!(ae(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function dn(t,e,n,i=null){on(t,e,7,[n,i])}const kw=Iy();let xw=0;function Vw(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||kw,r={uid:xw++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vy(i,s),emitsOptions:Dy(i,s),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:i.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bw.bind(null,r),t.ce&&t.ce(r),r}let ft=null;const Fw=()=>ft||xt;let Fa,lu;{const t=uc(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Fa=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),lu=e("__VUE_SSR_SETTERS__",n=>ao=n)}const Oo=t=>{const e=ft;return Fa(t),t.scope.on(),()=>{t.scope.off(),Fa(e)}},Bh=()=>{ft&&ft.scope.off(),Fa(null)};function xy(t){return t.vnode.shapeFlag&4}let ao=!1;function Uw(t,e=!1,n=!1){e&&lu(e);const{props:i,children:s}=t.vnode,r=xy(t);dw(t,i,r,e),mw(t,s,n);const o=r?qw(t,e):void 0;return e&&lu(!1),o}function qw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nw);const{setup:i}=n;if(i){Fi();const s=t.setupContext=i.length>1?zw(t):null,r=Oo(t),o=Co(i,t,0,[t.props,s]),c=Cg(o);if(Ui(),r(),(c||t.sp)&&!Br(t)&&hy(t),c){if(o.then(Bh,Bh),e)return o.then(l=>{zh(t,l)}).catch(l=>{hc(l,t,0)});t.asyncDep=o}else zh(t,o)}else Vy(t)}function zh(t,e,n){Ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ge(e)&&(t.setupState=ty(e)),Vy(t)}function Vy(t,e,n){const i=t.type;t.render||(t.render=i.render||_n);{const s=Oo(t);Fi();try{iw(t)}finally{Ui(),s()}}}const Bw={get(t,e){return Rt(t,"get",""),t[e]}};function zw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Bw),slots:t.slots,emit:t.emit,expose:e}}function Ec(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ty(gd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zr)return zr[n](t)},has(e,n){return n in e||n in zr}})):t.proxy}function Gw(t,e=!0){return Ae(t)?t.displayName||t.name:t.name||e&&t.__name}function jw(t){return Ae(t)&&"__vccOpts"in t}const Qe=(t,e)=>L1(t,e,ao);function Ac(t,e,n){const i=arguments.length;return i===2?Ge(e)&&!ae(e)?Va(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Va(n)&&(n=[n]),Ie(t,e,n))}const Hw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uu;const Gh=typeof window<"u"&&window.trustedTypes;if(Gh)try{uu=Gh.createPolicy("vue",{createHTML:t=>t})}catch{}const Fy=uu?t=>uu.createHTML(t):t=>t,$w="http://www.w3.org/2000/svg",Ww="http://www.w3.org/1998/Math/MathML",xn=typeof document<"u"?document:null,jh=xn&&xn.createElement("template"),Kw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?xn.createElementNS($w,t):e==="mathml"?xn.createElementNS(Ww,t):n?xn.createElement(t,{is:n}):xn.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>xn.createTextNode(t),createComment:t=>xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{jh.innerHTML=Fy(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const c=jh.content;if(i==="svg"||i==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},oi="transition",Or="animation",co=Symbol("_vtc"),Uy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qw=ht({},cy,Uy),Yw=t=>(t.displayName="Transition",t.props=Qw,t),lo=Yw((t,{slots:e})=>Ac(z1,Xw(t),e)),Yi=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},Hh=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function Xw(t){const e={};for(const b in t)b in Uy||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=t,R=Jw(s),L=R&&R[0],D=R&&R[1],{onBeforeEnter:N,onEnter:O,onEnterCancelled:x,onLeave:q,onLeaveCancelled:j,onBeforeAppear:V=N,onAppear:v=O,onAppearCancelled:_=x}=e,g=(b,E,Me,Ye)=>{b._enterCancelled=Ye,Xi(b,E?f:c),Xi(b,E?u:o),Me&&Me()},w=(b,E)=>{b._isLeaving=!1,Xi(b,p),Xi(b,I),Xi(b,m),E&&E()},S=b=>(E,Me)=>{const Ye=b?v:O,Ve=()=>g(E,b,Me);Yi(Ye,[E,Ve]),$h(()=>{Xi(E,b?l:r),Mn(E,b?f:c),Hh(Ye)||Wh(E,i,L,Ve)})};return ht(e,{onBeforeEnter(b){Yi(N,[b]),Mn(b,r),Mn(b,o)},onBeforeAppear(b){Yi(V,[b]),Mn(b,l),Mn(b,u)},onEnter:S(!1),onAppear:S(!0),onLeave(b,E){b._isLeaving=!0;const Me=()=>w(b,E);Mn(b,p),b._enterCancelled?(Mn(b,m),Yh()):(Yh(),Mn(b,m)),$h(()=>{b._isLeaving&&(Xi(b,p),Mn(b,I),Hh(q)||Wh(b,i,D,Me))}),Yi(q,[b,Me])},onEnterCancelled(b){g(b,!1,void 0,!0),Yi(x,[b])},onAppearCancelled(b){g(b,!0,void 0,!0),Yi(_,[b])},onLeaveCancelled(b){w(b),Yi(j,[b])}})}function Jw(t){if(t==null)return null;if(Ge(t))return[Tl(t.enter),Tl(t.leave)];{const e=Tl(t);return[e,e]}}function Tl(t){return JA(t)}function Mn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[co]||(t[co]=new Set)).add(e)}function Xi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[co];n&&(n.delete(e),n.size||(t[co]=void 0))}function $h(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Zw=0;function Wh(t,e,n,i){const s=t._endId=++Zw,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:c,propCount:l}=ev(t,e);if(!o)return i();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),r()},m=I=>{I.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function ev(t,e){const n=window.getComputedStyle(t),i=R=>(n[R]||"").split(", "),s=i(`${oi}Delay`),r=i(`${oi}Duration`),o=Kh(s,r),c=i(`${Or}Delay`),l=i(`${Or}Duration`),u=Kh(c,l);let f=null,p=0,m=0;e===oi?o>0&&(f=oi,p=o,m=r.length):e===Or?u>0&&(f=Or,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?oi:Or:null,m=f?f===oi?r.length:l.length:0);const I=f===oi&&/\b(transform|all)(,|$)/.test(i(`${oi}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:I}}function Kh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Qh(n)+Qh(t[i])))}function Qh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Yh(){return document.body.offsetHeight}function tv(t,e,n){const i=t[co];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xh=Symbol("_vod"),nv=Symbol("_vsh"),iv=Symbol(""),sv=/(^|;)\s*display\s*:/;function rv(t,e,n){const i=t.style,s=it(n);let r=!1;if(n&&!s){if(e)if(it(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ia(i,c,"")}else for(const o in e)n[o]==null&&Ia(i,o,"");for(const o in n)o==="display"&&(r=!0),Ia(i,o,n[o])}else if(s){if(e!==n){const o=i[iv];o&&(n+=";"+o),i.cssText=n,r=sv.test(n)}}else e&&t.removeAttribute("style");Xh in t&&(t[Xh]=r?i.display:"",t[nv]&&(i.display="none"))}const Jh=/\s*!important$/;function Ia(t,e,n){if(ae(n))n.forEach(i=>Ia(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ov(t,e);Jh.test(n)?t.setProperty(Is(i),n.replace(Jh,""),"important"):t[i]=n}}const Zh=["Webkit","Moz","ms"],bl={};function ov(t,e){const n=bl[e];if(n)return n;let i=nn(e);if(i!=="filter"&&i in t)return bl[e]=i;i=lc(i);for(let s=0;s<Zh.length;s++){const r=Zh[s]+i;if(r in t)return bl[e]=r}return e}const ep="http://www.w3.org/1999/xlink";function tp(t,e,n,i,s,r=s1(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ep,e.slice(6,e.length)):t.setAttributeNS(ep,e,n):n==null||r&&!Dg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Rn(n)?String(n):n)}function np(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Fy(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const c=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Dg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function gi(t,e,n,i){t.addEventListener(e,n,i)}function av(t,e,n,i){t.removeEventListener(e,n,i)}const ip=Symbol("_vei");function cv(t,e,n,i,s=null){const r=t[ip]||(t[ip]={}),o=r[e];if(i&&o)o.value=i;else{const[c,l]=lv(e);if(i){const u=r[e]=fv(i,s);gi(t,c,u,l)}else o&&(av(t,c,o,l),r[e]=void 0)}}const sp=/(?:Once|Passive|Capture)$/;function lv(t){let e;if(sp.test(t)){e={};let i;for(;i=t.match(sp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Is(t.slice(2)),e]}let Sl=0;const uv=Promise.resolve(),dv=()=>Sl||(uv.then(()=>Sl=0),Sl=Date.now());function fv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;on(hv(i,n.value),e,5,[i])};return n.value=t,n.attached=dv(),n}function hv(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const rp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pv=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?tv(t,i,o):e==="style"?rv(t,n,i):ac(e)?rd(e)||cv(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mv(t,e,i,o))?(np(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&tp(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!it(i))?np(t,nn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),tp(t,e,i,o))};function mv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&rp(e)&&Ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rp(e)&&it(n)?!1:e in t}const Ks=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>ma(e,n):e};function gv(t){t.target.composing=!0}function op(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hn=Symbol("_assign"),mn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Hn]=Ks(s);const r=i||s.props&&s.props.type==="number";gi(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),r&&(c=Pa(c)),t[Hn](c)}),n&&gi(t,"change",()=>{t.value=t.value.trim()}),e||(gi(t,"compositionstart",gv),gi(t,"compositionend",op),gi(t,"change",op))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Hn]=Ks(o),t.composing)return;const c=(r||t.type==="number")&&!/^0\d/.test(t.value)?Pa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Rl={deep:!0,created(t,e,n){t[Hn]=Ks(n),gi(t,"change",()=>{const i=t._modelValue,s=uo(t),r=t.checked,o=t[Hn];if(ae(i)){const c=cd(i,s),l=c!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const u=[...i];u.splice(c,1),o(u)}}else if(or(i)){const c=new Set(i);r?c.add(s):c.delete(s),o(c)}else o(qy(t,r))})},mounted:ap,beforeUpdate(t,e,n){t[Hn]=Ks(n),ap(t,e,n)}};function ap(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(ae(e))s=cd(e,i.props.value)>-1;else if(or(e))s=e.has(i.props.value);else{if(e===n)return;s=Ro(e,qy(t,!0))}t.checked!==s&&(t.checked=s)}const Qs={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=or(e);gi(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pa(uo(o)):uo(o));t[Hn](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,pc(()=>{t._assigning=!1})}),t[Hn]=Ks(i)},mounted(t,{value:e}){cp(t,e)},beforeUpdate(t,e,n){t[Hn]=Ks(n)},updated(t,{value:e}){t._assigning||cp(t,e)}};function cp(t,e){const n=t.multiple,i=ae(e);if(!(n&&!i&&!or(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],c=uo(o);if(n)if(i){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=cd(e,c)>-1}else o.selected=e.has(c);else if(Ro(uo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function uo(t){return"_value"in t?t._value:t.value}function qy(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const yv=["ctrl","shift","alt","meta"],Iv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>yv.some(n=>t[`${n}Key`]&&!e.includes(n))},pi=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const c=Iv[e[o]];if(c&&c(s,e))return}return t(s,...r)})},_v=ht({patchProp:pv},Kw);let lp;function Ev(){return lp||(lp=yw(_v))}const Av=(...t)=>{const e=Ev().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=vv(i);if(!s)return;const r=e._component;!Ae(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,wv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function wv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vv(t){return it(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let By;const wc=t=>By=t,zy=Symbol();function du(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var jr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(jr||(jr={}));function Tv(){const t=xg(!0),e=t.run(()=>Re({}));let n=[],i=[];const s=gd({install(r){wc(s),s._a=r,r.provide(zy,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Gy=()=>{};function up(t,e,n,i=Gy){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Vg()&&o1(s),s}function Os(t,...e){t.slice().forEach(n=>{n(...e)})}const bv=t=>t(),dp=Symbol(),Cl=Symbol();function fu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];du(s)&&du(i)&&t.hasOwnProperty(n)&&!nt(i)&&!vi(i)?t[n]=fu(s,i):t[n]=i}return t}const Sv=Symbol();function Rv(t){return!du(t)||!t.hasOwnProperty(Sv)}const{assign:ui}=Object;function Cv(t){return!!(nt(t)&&t.effect)}function Ov(t,e,n,i){const{state:s,actions:r,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=O1(n.state.value[t]);return ui(f,r,Object.keys(o||{}).reduce((p,m)=>(p[m]=gd(Qe(()=>{wc(n);const I=n._s.get(t);return o[m].call(I,I)})),p),{}))}return l=jy(t,u,e,n,i,!0),l}function jy(t,e,n={},i,s,r){let o;const c=ui({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],I;const R=i.state.value[t];!r&&!R&&(i.state.value[t]={}),Re({});let L;function D(_){let g;u=f=!1,typeof _=="function"?(_(i.state.value[t]),g={type:jr.patchFunction,storeId:t,events:I}):(fu(i.state.value[t],_),g={type:jr.patchObject,payload:_,storeId:t,events:I});const w=L=Symbol();pc().then(()=>{L===w&&(u=!0)}),f=!0,Os(p,g,i.state.value[t])}const N=r?function(){const{state:g}=n,w=g?g():{};this.$patch(S=>{ui(S,w)})}:Gy;function O(){o.stop(),p=[],m=[],i._s.delete(t)}const x=(_,g="")=>{if(dp in _)return _[Cl]=g,_;const w=function(){wc(i);const S=Array.from(arguments),b=[],E=[];function Me(fe){b.push(fe)}function Ye(fe){E.push(fe)}Os(m,{args:S,name:w[Cl],store:j,after:Me,onError:Ye});let Ve;try{Ve=_.apply(this&&this.$id===t?this:j,S)}catch(fe){throw Os(E,fe),fe}return Ve instanceof Promise?Ve.then(fe=>(Os(b,fe),fe)).catch(fe=>(Os(E,fe),Promise.reject(fe))):(Os(b,Ve),Ve)};return w[dp]=!0,w[Cl]=g,w},q={_p:i,$id:t,$onAction:up.bind(null,m),$patch:D,$reset:N,$subscribe(_,g={}){const w=up(p,_,g.detached,()=>S()),S=o.run(()=>Ti(()=>i.state.value[t],b=>{(g.flush==="sync"?f:u)&&_({storeId:t,type:jr.direct,events:I},b)},ui({},l,g)));return w},$dispose:O},j=cs(q);i._s.set(t,j);const v=(i._a&&i._a.runWithContext||bv)(()=>i._e.run(()=>(o=xg()).run(()=>e({action:x}))));for(const _ in v){const g=v[_];if(nt(g)&&!Cv(g)||vi(g))r||(R&&Rv(g)&&(nt(g)?g.value=R[_]:fu(g,R[_])),i.state.value[t][_]=g);else if(typeof g=="function"){const w=x(g,_);v[_]=w,c.actions[_]=g}}return ui(j,v),ui(Le(j),v),Object.defineProperty(j,"$state",{get:()=>i.state.value[t],set:_=>{D(g=>{ui(g,_)})}}),i._p.forEach(_=>{ui(j,o.run(()=>_({store:j,app:i._a,pinia:i,options:c})))}),R&&r&&n.hydrate&&n.hydrate(j.$state,R),u=!0,f=!0,j}/*! #__NO_SIDE_EFFECTS__ */function vc(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(c,l){const u=uw();return c=c||(u?An(zy,null):null),c&&wc(c),c=By,c._s.has(i)||(r?jy(i,e,s,c):Ov(i,s,c)),c._s.get(i)}return o.$id=i,o}var fp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Pv=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=r>>2,p=(r&3)<<4|c>>4;let m=(c&15)<<2|u>>6,I=u&63;l||(I=64,o||(m=64)),i.push(n[f],n[p],n[m],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||c==null||u==null||p==null)throw new Nv;const m=r<<2|c>>4;if(i.push(m),u!==64){const I=c<<4&240|u>>2;if(i.push(I),p!==64){const R=u<<6&192|p;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dv=function(t){const e=Hy(t);return $y.encodeByteArray(e,!0)},Ua=function(t){return Dv(t).replace(/\./g,"")},Wy=function(t){try{return $y.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Mv=()=>Lv().__FIREBASE_DEFAULTS__,kv=()=>{if(typeof process>"u"||typeof fp>"u")return;const t=fp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wy(t[1]);return e&&JSON.parse(e)},Tc=()=>{try{return Mv()||kv()||xv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ky=t=>{var e,n;return(n=(e=Tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vv=t=>{const e=Ky(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Qy=()=>{var t;return(t=Tc())===null||t===void 0?void 0:t.config},Yy=t=>{var e;return(e=Tc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Uv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ua(JSON.stringify(n)),Ua(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function Bv(){var t;const e=(t=Tc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jv(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hv(){return!Bv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vd(){try{return typeof indexedDB=="object"}catch{return!1}}function Td(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Xy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="FirebaseError";class un extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=$v,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Wv(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new un(s,c,i)}}function Wv(t,e){return t.replace(Kv,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Kv=/\{\$([^}]+)}/g;function Qv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(hp(r)&&hp(o)){if(!fo(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function hp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Dr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Lr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Yv(t,e){const n=new Xv(t,e);return n.subscribe.bind(n)}class Xv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Jv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Ol),s.error===void 0&&(s.error=Ol),s.complete===void 0&&(s.complete=Ol);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ol(){}/**
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
 */const Zv=1e3,eT=2,tT=4*60*60*1e3,nT=.5;function pp(t,e=Zv,n=eT){const i=e*Math.pow(n,t),s=Math.round(nT*i*(Math.random()-.5)*2);return Math.min(tT,i+s)}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const es="[DEFAULT]";/**
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
 */class iT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Fv;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rT(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sT(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sT(t){return t===es?void 0:t}function rT(t){return t.instantiationMode==="EAGER"}/**
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
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const aT={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},cT=Ce.INFO,lT={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},uT=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=lT[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=cT,this._logHandler=uT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const dT=(t,e)=>e.some(n=>t instanceof n);let mp,gp;function fT(){return mp||(mp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hT(){return gp||(gp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jy=new WeakMap,hu=new WeakMap,Zy=new WeakMap,Pl=new WeakMap,bd=new WeakMap;function pT(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(bi(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jy.set(n,t)}).catch(()=>{}),bd.set(e,t),e}function mT(t){if(hu.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hu.set(t,e)}let pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gT(t){pu=t(pu)}function yT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Nl(this),e,...n);return Zy.set(i,e.sort?e.sort():[e]),bi(i)}:hT().includes(t)?function(...e){return t.apply(Nl(this),e),bi(Jy.get(this))}:function(...e){return bi(t.apply(Nl(this),e))}}function IT(t){return typeof t=="function"?yT(t):(t instanceof IDBTransaction&&mT(t),dT(t,fT())?new Proxy(t,pu):t)}function bi(t){if(t instanceof IDBRequest)return pT(t);if(Pl.has(t))return Pl.get(t);const e=IT(t);return e!==t&&(Pl.set(t,e),bd.set(e,t)),e}const Nl=t=>bd.get(t);function eI(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),c=bi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(bi(o.result),l.oldVersion,l.newVersion,bi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const _T=["get","getKey","getAll","getAllKeys","count"],ET=["put","add","delete","clear"],Dl=new Map;function yp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dl.get(e))return Dl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ET.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||_T.includes(n)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Dl.set(e,r),r}gT(t=>({...t,get:(e,n,i)=>yp(e,n)||t.get(e,n,i),has:(e,n)=>!!yp(e,n)||t.has(e,n)}));/**
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
 */class AT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wT(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mu="@firebase/app",Ip="0.10.18";/**
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
 */const Wn=new bc("@firebase/app"),vT="@firebase/app-compat",TT="@firebase/analytics-compat",bT="@firebase/analytics",ST="@firebase/app-check-compat",RT="@firebase/app-check",CT="@firebase/auth",OT="@firebase/auth-compat",PT="@firebase/database",NT="@firebase/data-connect",DT="@firebase/database-compat",LT="@firebase/functions",MT="@firebase/functions-compat",kT="@firebase/installations",xT="@firebase/installations-compat",VT="@firebase/messaging",FT="@firebase/messaging-compat",UT="@firebase/performance",qT="@firebase/performance-compat",BT="@firebase/remote-config",zT="@firebase/remote-config-compat",GT="@firebase/storage",jT="@firebase/storage-compat",HT="@firebase/firestore",$T="@firebase/vertexai",WT="@firebase/firestore-compat",KT="firebase",QT="11.2.0";/**
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
 */const gu="[DEFAULT]",YT={[mu]:"fire-core",[vT]:"fire-core-compat",[bT]:"fire-analytics",[TT]:"fire-analytics-compat",[RT]:"fire-app-check",[ST]:"fire-app-check-compat",[CT]:"fire-auth",[OT]:"fire-auth-compat",[PT]:"fire-rtdb",[NT]:"fire-data-connect",[DT]:"fire-rtdb-compat",[LT]:"fire-fn",[MT]:"fire-fn-compat",[kT]:"fire-iid",[xT]:"fire-iid-compat",[VT]:"fire-fcm",[FT]:"fire-fcm-compat",[UT]:"fire-perf",[qT]:"fire-perf-compat",[BT]:"fire-rc",[zT]:"fire-rc-compat",[GT]:"fire-gcs",[jT]:"fire-gcs-compat",[HT]:"fire-fst",[WT]:"fire-fst-compat",[$T]:"fire-vertex","fire-js":"fire-js",[KT]:"fire-js-all"};/**
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
 */const qa=new Map,XT=new Map,yu=new Map;function _p(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cn(t){const e=t.name;if(yu.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;yu.set(e,t);for(const n of qa.values())_p(n,t);for(const n of XT.values())_p(n,t);return!0}function Es(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
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
 */const JT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Si=new _s("app","Firebase",JT);/**
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
 */class ZT{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
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
 */const cr=QT;function tI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:gu,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Si.create("bad-app-name",{appName:String(s)});if(n||(n=Qy()),!n)throw Si.create("no-options");const r=qa.get(s);if(r){if(fo(n,r.options)&&fo(i,r.config))return r;throw Si.create("duplicate-app",{appName:s})}const o=new oT(s);for(const l of yu.values())o.addComponent(l);const c=new ZT(n,i,o);return qa.set(s,c),c}function Sd(t=gu){const e=qa.get(t);if(!e&&t===gu&&Qy())return tI();if(!e)throw Si.create("no-app",{appName:t});return e}function tn(t,e,n){var i;let s=(i=YT[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const c=[`Unable to register library "${s}" with version "${e}":`];r&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(c.join(" "));return}Cn(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const e2="firebase-heartbeat-database",t2=1,ho="firebase-heartbeat-store";let Ll=null;function nI(){return Ll||(Ll=eI(e2,t2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw Si.create("idb-open",{originalErrorMessage:t.message})})),Ll}async function n2(t){try{const n=(await nI()).transaction(ho),i=await n.objectStore(ho).get(iI(t));return await n.done,i}catch(e){if(e instanceof un)Wn.warn(e.message);else{const n=Si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Ep(t,e){try{const i=(await nI()).transaction(ho,"readwrite");await i.objectStore(ho).put(e,iI(t)),await i.done}catch(n){if(n instanceof un)Wn.warn(n.message);else{const i=Si.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(i.message)}}}function iI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const i2=1024,s2=30*24*60*60*1e3;class r2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a2(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ap();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=s2}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Wn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ap(),{heartbeatsToSend:i,unsentEntries:s}=o2(this._heartbeatsCache.heartbeats),r=Ua(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Wn.warn(n),""}}}function Ap(){return new Date().toISOString().substring(0,10)}function o2(t,e=i2){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),wp(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class a2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vd()?Td().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await n2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wp(t){return Ua(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function c2(t){Cn(new an("platform-logger",e=>new AT(e),"PRIVATE")),Cn(new an("heartbeat",e=>new r2(e),"PRIVATE")),tn(mu,Ip,t),tn(mu,Ip,"esm2017"),tn("fire-js","")}c2("");var l2="firebase",u2="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(l2,u2,"app");function Rd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function sI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d2=sI,rI=new _s("auth","Firebase",sI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new bc("@firebase/auth");function f2(t,...e){Ba.logLevel<=Ce.WARN&&Ba.warn(`Auth (${cr}): ${t}`,...e)}function _a(t,...e){Ba.logLevel<=Ce.ERROR&&Ba.error(`Auth (${cr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw Cd(t,...e)}function wn(t,...e){return Cd(t,...e)}function oI(t,e,n){const i=Object.assign(Object.assign({},d2()),{[e]:n});return new _s("auth","Firebase",i).create(e,{appName:t.name})}function $n(t){return oI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return rI.create(t,...e)}function pe(t,e,...n){if(!t)throw Cd(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _a(e),new Error(e)}function Kn(t,e){t||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h2(){return vp()==="http:"||vp()==="https:"}function vp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h2()||wd()||"connection"in navigator)?navigator.onLine:!0}function m2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=qv()||Gv()}get(){return p2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const y2=new No(3e4,6e4);function qi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bi(t,e,n,i,s={}){return cI(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=Po(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},r);return zv()||(u.referrerPolicy="no-referrer"),aI.fetch()(lI(t,t.config.apiHost,n,c),u)})}async function cI(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},g2),e);try{const s=new _2(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw aa(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw aa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw aa(t,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw oI(t,f,u);cn(t,f)}}catch(s){if(s instanceof un)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function Do(t,e,n,i,s={}){const r=await Bi(t,e,n,i,s);return"mfaPendingCredential"in r&&cn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function lI(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Od(t.config,s):`${t.config.apiScheme}://${s}`}function I2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(wn(this.auth,"network-request-failed")),y2.get())})}}function aa(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=wn(t,e,i);return s.customData._tokenResponse=n,s}function Tp(t){return t!==void 0&&t.enterprise!==void 0}class E2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return I2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function A2(t,e){return Bi(t,"GET","/v2/recaptchaConfig",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t,e){return Bi(t,"POST","/v1/accounts:delete",e)}async function uI(t,e){return Bi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v2(t,e=!1){const n=lt(t),i=await n.getIdToken(e),s=Pd(i);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Hr(Ml(s.auth_time)),issuedAtTime:Hr(Ml(s.iat)),expirationTime:Hr(Ml(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ml(t){return Number(t)*1e3}function Pd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wy(n);return s?JSON.parse(s):(_a("Failed to decode base64 JWT payload"),null)}catch(s){return _a("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bp(t){const e=Pd(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _u{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function za(t){var e;const n=t.auth,i=await t.getIdToken(),s=await po(t,uI(n,{idToken:i}));pe(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?dI(r.providerUserInfo):[],c=R2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new _u(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function S2(t){const e=lt(t);await za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R2(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function dI(t){return t.map(e=>{var{providerId:n}=e,i=Rd(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(t,e){const n=await cI(t,{},async()=>{const i=Po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=lI(t,s,"/v1/token",`key=${r}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",aI.fetch()(o,{method:"POST",headers:c,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function O2(t,e){return Bi(t,"POST","/v2/accounts:revokeToken",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=bp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await C2(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new zs;return i&&(pe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(pe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _u(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return v2(this,e)}reload(){return S2(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await za(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await po(this,w2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,c,l,u,f;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,I=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:q,isAnonymous:j,providerData:V,stsTokenManager:v}=n;pe(x&&v,e,"internal-error");const _=zs.fromJSON(this.name,v);pe(typeof x=="string",e,"internal-error"),ai(p,e.name),ai(m,e.name),pe(typeof q=="boolean",e,"internal-error"),pe(typeof j=="boolean",e,"internal-error"),ai(I,e.name),ai(R,e.name),ai(L,e.name),ai(D,e.name),ai(N,e.name),ai(O,e.name);const g=new zn({uid:x,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:j,photoURL:R,phoneNumber:I,tenantId:L,stsTokenManager:_,createdAt:N,lastLoginAt:O});return V&&Array.isArray(V)&&(g.providerData=V.map(w=>Object.assign({},w))),D&&(g._redirectEventId=D),g}static async _fromIdTokenResponse(e,n,i=!1){const s=new zs;s.updateFromServerResponse(n);const r=new zn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await za(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?dI(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new zs;c.updateFromIdToken(i);const l=new zn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new _u(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=new Map;function Gn(t){Kn(t instanceof Function,"Expected a class definition");let e=Sp.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sp.set(t,e),e)}/**
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
 */class fI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fI.type="NONE";const Rp=fI;/**
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
 */function Ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Gs{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ea(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ea("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Gs(Gn(Rp),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||Gn(Rp);const o=Ea(i,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){const p=zn._fromJSON(e,f);u!==r&&(c=p),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Gs(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Gs(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(II(e))return"Blackberry";if(_I(e))return"Webos";if(pI(e))return"Safari";if((e.includes("chrome/")||mI(e))&&!e.includes("edge/"))return"Chrome";if(yI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function hI(t=Pt()){return/firefox\//i.test(t)}function pI(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mI(t=Pt()){return/crios\//i.test(t)}function gI(t=Pt()){return/iemobile/i.test(t)}function yI(t=Pt()){return/android/i.test(t)}function II(t=Pt()){return/blackberry/i.test(t)}function _I(t=Pt()){return/webos/i.test(t)}function Nd(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function P2(t=Pt()){var e;return Nd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function N2(){return jv()&&document.documentMode===10}function EI(t=Pt()){return Nd(t)||yI(t)||_I(t)||II(t)||/windows phone/i.test(t)||gI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e=[]){let n;switch(t){case"Browser":n=Cp(Pt());break;case"Worker":n=`${Cp(Pt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cr}/${i}`}/**
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
 */class D2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function L2(t,e={}){return Bi(t,"GET","/v2/passwordPolicy",qi(t,e))}/**
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
 */const M2=6;class k2{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:M2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Op(this),this.idTokenSubscription=new Op(this),this.beforeStateQueue=new D2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await uI(this,{idToken:e}),i=await zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject($n(this));const n=e?lt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await L2(this),n=new k2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await O2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&f2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function As(t){return lt(t)}class Op{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yv(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V2(t){Sc=t}function wI(t){return Sc.loadJS(t)}function F2(){return Sc.recaptchaEnterpriseScript}function U2(){return Sc.gapiScript}function q2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class B2{constructor(){this.enterprise=new z2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class z2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const G2="recaptcha-enterprise",vI="NO_RECAPTCHA";class j2{constructor(e){this.type=G2,this.auth=As(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{A2(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new E2(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;Tp(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(vI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new B2().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!n&&Tp(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=F2();l.length!==0&&(l+=c),wI(l).then(()=>{s(c,r,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Pp(t,e,n,i=!1,s=!1){const r=new j2(t);let o;if(s)o=vI;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Eu(t,e,n,i,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pp(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Pp(t,e,n,n==="getOobCode");return i(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t,e){const n=Es(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(fo(r,e??{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function $2(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function W2(t,e,n){const i=As(t);pe(i._canInitEmulator,i,"emulator-config-failed"),pe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=TI(e),{host:o,port:c}=K2(e),l=c===null?"":`:${c}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Q2()}function TI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function K2(t){const e=TI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Np(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Np(o)}}}function Np(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Q2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}async function Y2(t,e){return Bi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(t,e){return Do(t,"POST","/v1/accounts:signInWithPassword",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(t,e){return Do(t,"POST","/v1/accounts:signInWithEmailLink",qi(t,e))}async function Z2(t,e){return Do(t,"POST","/v1/accounts:signInWithEmailLink",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Dd{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new mo(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new mo(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eu(e,n,"signInWithPassword",X2);case"emailLink":return J2(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eu(e,i,"signUpPassword",Y2);case"emailLink":return Z2(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return Do(t,"POST","/v1/accounts:signInWithIdp",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="http://localhost";class us extends Dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Rd(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new us(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,js(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:eb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nb(t){const e=Dr(Lr(t)).link,n=e?Dr(Lr(e)).deep_link_id:null,i=Dr(Lr(t)).deep_link_id;return(i?Dr(Lr(i)).link:null)||i||n||e||t}class Ld{constructor(e){var n,i,s,r,o,c;const l=Dr(Lr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(i=l.oobCode)!==null&&i!==void 0?i:null,p=tb((s=l.mode)!==null&&s!==void 0?s:null);pe(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=nb(e);try{return new Ld(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.providerId=lr.PROVIDER_ID}static credential(e,n){return mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Ld.parseLink(n);return pe(i,"argument-error"),mo._fromEmailAndCode(e,i.code,i.tenantId)}}lr.PROVIDER_ID="password";lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lo extends bI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Lo{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ii.credential(n,i)}catch{return null}}}Ii.GOOGLE_SIGN_IN_METHOD="google.com";Ii.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Lo{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Lo{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ei.credential(n,i)}catch{return null}}}Ei.TWITTER_SIGN_IN_METHOD="twitter.com";Ei.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(t,e){return Do(t,"POST","/v1/accounts:signUp",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await zn._fromIdTokenResponse(e,i,s),o=Dp(i);return new ds({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Dp(i);return new ds({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Dp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends un{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ga.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Ga(e,n,i,s)}}function SI(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ga._fromErrorAndOperation(t,r,e,i):r})}async function sb(t,e,n=!1){const i=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",i)}/**
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
 */async function rb(t,e,n=!1){const{auth:i}=t;if(gn(i.app))return Promise.reject($n(i));const s="reauthenticate";try{const r=await po(t,SI(i,s,e,t),n);pe(r.idToken,i,"internal-error");const o=Pd(r.idToken);pe(o,i,"internal-error");const{sub:c}=o;return pe(t.uid===c,i,"user-mismatch"),ds._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&cn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e,n=!1){if(gn(t.app))return Promise.reject($n(t));const i="signIn",s=await SI(t,i,e),r=await ds._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function ob(t,e){return RI(As(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t){const e=As(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ab(t,e,n){if(gn(t.app))return Promise.reject($n(t));const i=As(t),o=await Eu(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ib).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&CI(t),l}),c=await ds._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function cb(t,e,n){return gn(t.app)?Promise.reject($n(t)):ob(lt(t),lr.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&CI(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t,e){return lt(t).setPersistence(e)}function ub(t,e,n,i){return lt(t).onIdTokenChanged(e,n,i)}function db(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function fb(t,e,n,i){return lt(t).onAuthStateChanged(e,n,i)}function hb(t){return lt(t).signOut()}const ja="__sak";/**
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
 */class OI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=1e3,mb=10;class PI extends OI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=EI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);N2()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mb):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}PI.type="LOCAL";const NI=PI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI extends OI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}DI.type="SESSION";const LI=DI;/**
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
 */class Rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Rc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,r)),l=await gb(c);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const u=Md("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(m.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function Ib(t){vn().location.href=t}/**
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
 */function MI(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function _b(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ab(){return MI()?self:null}/**
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
 */const kI="firebaseLocalStorageDb",wb=1,Ha="firebaseLocalStorage",xI="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cc(t,e){return t.transaction([Ha],e?"readwrite":"readonly").objectStore(Ha)}function vb(){const t=indexedDB.deleteDatabase(kI);return new Mo(t).toPromise()}function Au(){const t=indexedDB.open(kI,wb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ha,{keyPath:xI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ha)?e(i):(i.close(),await vb(),e(await Au()))})})}async function Lp(t,e,n){const i=Cc(t,!0).put({[xI]:e,value:n});return new Mo(i).toPromise()}async function Tb(t,e){const n=Cc(t,!1).get(e),i=await new Mo(n).toPromise();return i===void 0?null:i.value}function Mp(t,e){const n=Cc(t,!0).delete(e);return new Mo(n).toPromise()}const bb=800,Sb=3;class VI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Au(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Sb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rc._getInstance(Ab()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _b(),!this.activeServiceWorker)return;this.sender=new yb(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Au();return await Lp(e,ja,"1"),await Mp(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Lp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Tb(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Cc(s,!1).getAll();return new Mo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VI.type="LOCAL";const Rb=VI;new No(3e4,6e4);/**
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
 */function Cb(t,e){return e?Gn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kd extends Dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ob(t){return RI(t.auth,new kd(t),t.bypassAuthState)}function Pb(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),rb(n,new kd(t),t.bypassAuthState)}async function Nb(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),sb(n,new kd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ob;case"linkViaPopup":case"linkViaRedirect":return Nb;case"reauthViaPopup":case"reauthViaRedirect":return Pb;default:cn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=new No(2e3,1e4);class Vs extends FI{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Db.get())};e()}}Vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="pendingRedirect",Aa=new Map;class Mb extends FI{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Aa.get(this.auth._key());if(!e){try{const i=await kb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Aa.set(this.auth._key(),e)}return this.bypassAuthState||Aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kb(t,e){const n=Fb(e),i=Vb(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function xb(t,e){Aa.set(t._key(),e)}function Vb(t){return Gn(t._redirectPersistence)}function Fb(t){return Ea(Lb,t.config.apiKey,t.name)}async function Ub(t,e,n=!1){if(gn(t.app))return Promise.reject($n(t));const i=As(t),s=Cb(i,e),o=await new Mb(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=10*60*1e3;class Bb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!UI(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qb&&this.cachedEventUids.clear(),this.cachedEventUids.has(kp(e))}saveEventToCache(e){this.cachedEventUids.add(kp(e)),this.lastProcessedEventTime=Date.now()}}function kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function UI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return UI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(t,e={}){return Bi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hb=/^https?/;async function $b(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gb(t);for(const n of e)try{if(Wb(n))return}catch{}cn(t,"unauthorized-domain")}function Wb(t){const e=Iu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Hb.test(n))return!1;if(jb.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Kb=new No(3e4,6e4);function xp(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qb(t){return new Promise((e,n)=>{var i,s,r;function o(){xp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xp(),n(wn(t,"network-request-failed"))},timeout:Kb.get()})}if(!((s=(i=vn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=vn().gapi)===null||r===void 0)&&r.load)o();else{const c=q2("iframefcb");return vn()[c]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},wI(`${U2()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw wa=null,e})}let wa=null;function Yb(t){return wa=wa||Qb(t),wa}/**
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
 */const Xb=new No(5e3,15e3),Jb="__/auth/iframe",Zb="emulator/auth/iframe",eS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nS(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Od(e,Zb):`https://${t.config.authDomain}/${Jb}`,i={apiKey:e.apiKey,appName:t.name,v:cr},s=tS.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Po(i).slice(1)}`}async function iS(t){const e=await Yb(t),n=vn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:nS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eS,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),c=vn().setTimeout(()=>{r(o)},Xb.get());function l(){vn().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const sS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rS=500,oS=600,aS="_blank",cS="http://localhost";class Vp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lS(t,e,n,i=rS,s=oS){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},sS),{width:i.toString(),height:s.toString(),top:r,left:o}),u=Pt().toLowerCase();n&&(c=mI(u)?aS:n),hI(u)&&(e=e||cS,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[I,R])=>`${m}${I}=${R},`,"");if(P2(u)&&c!=="_self")return uS(e||"",c),new Vp(null);const p=window.open(e||"",c,f);pe(p,t,"popup-blocked");try{p.focus()}catch{}return new Vp(p)}function uS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const dS="__/auth/handler",fS="emulator/auth/handler",hS=encodeURIComponent("fac");async function Fp(t,e,n,i,s,r){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:cr,eventId:s};if(e instanceof bI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Lo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${hS}=${encodeURIComponent(l)}`:"";return`${pS(t)}?${Po(c).slice(1)}${u}`}function pS({config:t}){return t.emulator?Od(t,fS):`https://${t.authDomain}/${dS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="webStorageSupport";class mS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LI,this._completeRedirectFn=Ub,this._overrideRedirectResult=xb}async _openPopup(e,n,i,s){var r;Kn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Fp(e,n,i,Iu(),s);return lS(e,o,Md())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Fp(e,n,i,Iu(),s);return Ib(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Kn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await iS(e),i=new Bb(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kl,{type:kl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[kl];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$b(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EI()||pI()||Nd()}}const gS=mS;var Up="@firebase/auth",qp="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _S(t){Cn(new an("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AI(t)},u=new x2(i,s,r,l);return $2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Cn(new an("auth-internal",e=>{const n=As(e.getProvider("auth").getImmediate());return(i=>new yS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Up,qp,IS(t)),tn(Up,qp,"esm2017")}/**
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
 */const ES=5*60,AS=Yy("authIdTokenMaxAge")||ES;let Bp=null;const wS=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>AS)return;const s=n==null?void 0:n.token;Bp!==s&&(Bp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vS(t=Sd()){const e=Es(t,"auth");if(e.isInitialized())return e.getImmediate();const n=H2(t,{popupRedirectResolver:gS,persistence:[Rb,NI,LI]}),i=Yy("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=wS(r.toString());db(n,o,()=>o(n.currentUser)),ub(n,c=>o(c))}}const s=Ky("auth");return s&&W2(n,`http://${s}`),n}function TS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}V2({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=wn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",TS().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_S("Browser");var zp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,qI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function g(){}g.prototype=_.prototype,v.D=_.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(w,S,b){for(var E=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)E[Me-2]=arguments[Me];return _.prototype[S].apply(w,E)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,g){g||(g=0);var w=Array(16);if(typeof _=="string")for(var S=0;16>S;++S)w[S]=_.charCodeAt(g++)|_.charCodeAt(g++)<<8|_.charCodeAt(g++)<<16|_.charCodeAt(g++)<<24;else for(S=0;16>S;++S)w[S]=_[g++]|_[g++]<<8|_[g++]<<16|_[g++]<<24;_=v.g[0],g=v.g[1],S=v.g[2];var b=v.g[3],E=_+(b^g&(S^b))+w[0]+3614090360&4294967295;_=g+(E<<7&4294967295|E>>>25),E=b+(S^_&(g^S))+w[1]+3905402710&4294967295,b=_+(E<<12&4294967295|E>>>20),E=S+(g^b&(_^g))+w[2]+606105819&4294967295,S=b+(E<<17&4294967295|E>>>15),E=g+(_^S&(b^_))+w[3]+3250441966&4294967295,g=S+(E<<22&4294967295|E>>>10),E=_+(b^g&(S^b))+w[4]+4118548399&4294967295,_=g+(E<<7&4294967295|E>>>25),E=b+(S^_&(g^S))+w[5]+1200080426&4294967295,b=_+(E<<12&4294967295|E>>>20),E=S+(g^b&(_^g))+w[6]+2821735955&4294967295,S=b+(E<<17&4294967295|E>>>15),E=g+(_^S&(b^_))+w[7]+4249261313&4294967295,g=S+(E<<22&4294967295|E>>>10),E=_+(b^g&(S^b))+w[8]+1770035416&4294967295,_=g+(E<<7&4294967295|E>>>25),E=b+(S^_&(g^S))+w[9]+2336552879&4294967295,b=_+(E<<12&4294967295|E>>>20),E=S+(g^b&(_^g))+w[10]+4294925233&4294967295,S=b+(E<<17&4294967295|E>>>15),E=g+(_^S&(b^_))+w[11]+2304563134&4294967295,g=S+(E<<22&4294967295|E>>>10),E=_+(b^g&(S^b))+w[12]+1804603682&4294967295,_=g+(E<<7&4294967295|E>>>25),E=b+(S^_&(g^S))+w[13]+4254626195&4294967295,b=_+(E<<12&4294967295|E>>>20),E=S+(g^b&(_^g))+w[14]+2792965006&4294967295,S=b+(E<<17&4294967295|E>>>15),E=g+(_^S&(b^_))+w[15]+1236535329&4294967295,g=S+(E<<22&4294967295|E>>>10),E=_+(S^b&(g^S))+w[1]+4129170786&4294967295,_=g+(E<<5&4294967295|E>>>27),E=b+(g^S&(_^g))+w[6]+3225465664&4294967295,b=_+(E<<9&4294967295|E>>>23),E=S+(_^g&(b^_))+w[11]+643717713&4294967295,S=b+(E<<14&4294967295|E>>>18),E=g+(b^_&(S^b))+w[0]+3921069994&4294967295,g=S+(E<<20&4294967295|E>>>12),E=_+(S^b&(g^S))+w[5]+3593408605&4294967295,_=g+(E<<5&4294967295|E>>>27),E=b+(g^S&(_^g))+w[10]+38016083&4294967295,b=_+(E<<9&4294967295|E>>>23),E=S+(_^g&(b^_))+w[15]+3634488961&4294967295,S=b+(E<<14&4294967295|E>>>18),E=g+(b^_&(S^b))+w[4]+3889429448&4294967295,g=S+(E<<20&4294967295|E>>>12),E=_+(S^b&(g^S))+w[9]+568446438&4294967295,_=g+(E<<5&4294967295|E>>>27),E=b+(g^S&(_^g))+w[14]+3275163606&4294967295,b=_+(E<<9&4294967295|E>>>23),E=S+(_^g&(b^_))+w[3]+4107603335&4294967295,S=b+(E<<14&4294967295|E>>>18),E=g+(b^_&(S^b))+w[8]+1163531501&4294967295,g=S+(E<<20&4294967295|E>>>12),E=_+(S^b&(g^S))+w[13]+2850285829&4294967295,_=g+(E<<5&4294967295|E>>>27),E=b+(g^S&(_^g))+w[2]+4243563512&4294967295,b=_+(E<<9&4294967295|E>>>23),E=S+(_^g&(b^_))+w[7]+1735328473&4294967295,S=b+(E<<14&4294967295|E>>>18),E=g+(b^_&(S^b))+w[12]+2368359562&4294967295,g=S+(E<<20&4294967295|E>>>12),E=_+(g^S^b)+w[5]+4294588738&4294967295,_=g+(E<<4&4294967295|E>>>28),E=b+(_^g^S)+w[8]+2272392833&4294967295,b=_+(E<<11&4294967295|E>>>21),E=S+(b^_^g)+w[11]+1839030562&4294967295,S=b+(E<<16&4294967295|E>>>16),E=g+(S^b^_)+w[14]+4259657740&4294967295,g=S+(E<<23&4294967295|E>>>9),E=_+(g^S^b)+w[1]+2763975236&4294967295,_=g+(E<<4&4294967295|E>>>28),E=b+(_^g^S)+w[4]+1272893353&4294967295,b=_+(E<<11&4294967295|E>>>21),E=S+(b^_^g)+w[7]+4139469664&4294967295,S=b+(E<<16&4294967295|E>>>16),E=g+(S^b^_)+w[10]+3200236656&4294967295,g=S+(E<<23&4294967295|E>>>9),E=_+(g^S^b)+w[13]+681279174&4294967295,_=g+(E<<4&4294967295|E>>>28),E=b+(_^g^S)+w[0]+3936430074&4294967295,b=_+(E<<11&4294967295|E>>>21),E=S+(b^_^g)+w[3]+3572445317&4294967295,S=b+(E<<16&4294967295|E>>>16),E=g+(S^b^_)+w[6]+76029189&4294967295,g=S+(E<<23&4294967295|E>>>9),E=_+(g^S^b)+w[9]+3654602809&4294967295,_=g+(E<<4&4294967295|E>>>28),E=b+(_^g^S)+w[12]+3873151461&4294967295,b=_+(E<<11&4294967295|E>>>21),E=S+(b^_^g)+w[15]+530742520&4294967295,S=b+(E<<16&4294967295|E>>>16),E=g+(S^b^_)+w[2]+3299628645&4294967295,g=S+(E<<23&4294967295|E>>>9),E=_+(S^(g|~b))+w[0]+4096336452&4294967295,_=g+(E<<6&4294967295|E>>>26),E=b+(g^(_|~S))+w[7]+1126891415&4294967295,b=_+(E<<10&4294967295|E>>>22),E=S+(_^(b|~g))+w[14]+2878612391&4294967295,S=b+(E<<15&4294967295|E>>>17),E=g+(b^(S|~_))+w[5]+4237533241&4294967295,g=S+(E<<21&4294967295|E>>>11),E=_+(S^(g|~b))+w[12]+1700485571&4294967295,_=g+(E<<6&4294967295|E>>>26),E=b+(g^(_|~S))+w[3]+2399980690&4294967295,b=_+(E<<10&4294967295|E>>>22),E=S+(_^(b|~g))+w[10]+4293915773&4294967295,S=b+(E<<15&4294967295|E>>>17),E=g+(b^(S|~_))+w[1]+2240044497&4294967295,g=S+(E<<21&4294967295|E>>>11),E=_+(S^(g|~b))+w[8]+1873313359&4294967295,_=g+(E<<6&4294967295|E>>>26),E=b+(g^(_|~S))+w[15]+4264355552&4294967295,b=_+(E<<10&4294967295|E>>>22),E=S+(_^(b|~g))+w[6]+2734768916&4294967295,S=b+(E<<15&4294967295|E>>>17),E=g+(b^(S|~_))+w[13]+1309151649&4294967295,g=S+(E<<21&4294967295|E>>>11),E=_+(S^(g|~b))+w[4]+4149444226&4294967295,_=g+(E<<6&4294967295|E>>>26),E=b+(g^(_|~S))+w[11]+3174756917&4294967295,b=_+(E<<10&4294967295|E>>>22),E=S+(_^(b|~g))+w[2]+718787259&4294967295,S=b+(E<<15&4294967295|E>>>17),E=g+(b^(S|~_))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+S&4294967295,v.g[3]=v.g[3]+b&4294967295}i.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var g=_-this.blockSize,w=this.B,S=this.h,b=0;b<_;){if(S==0)for(;b<=g;)s(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<_;)if(w[S++]=v.charCodeAt(b++),S==this.blockSize){s(this,w),S=0;break}}else for(;b<_;)if(w[S++]=v[b++],S==this.blockSize){s(this,w),S=0;break}}this.h=S,this.o+=_},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var g=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=g&255,g/=256;for(this.u(v),v=Array(16),_=g=0;4>_;++_)for(var w=0;32>w;w+=8)v[g++]=this.g[_]>>>w&255;return v};function r(v,_){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=_(v)}function o(v,_){this.h=_;for(var g=[],w=!0,S=v.length-1;0<=S;S--){var b=v[S]|0;w&&b==_||(g[S]=b,w=!1)}this.g=g}var c={};function l(v){return-128<=v&&128>v?r(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return D(u(-v));for(var _=[],g=1,w=0;v>=g;w++)_[w]=v/g|0,g*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return D(f(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=u(Math.pow(_,8)),w=p,S=0;S<v.length;S+=8){var b=Math.min(8,v.length-S),E=parseInt(v.substring(S,S+b),_);8>b?(b=u(Math.pow(_,b)),w=w.j(b).add(u(E))):(w=w.j(g),w=w.add(u(E)))}return w}var p=l(0),m=l(1),I=l(16777216);t=o.prototype,t.m=function(){if(L(this))return-D(this).m();for(var v=0,_=1,g=0;g<this.g.length;g++){var w=this.i(g);v+=(0<=w?w:4294967296+w)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(L(this))return"-"+D(this).toString(v);for(var _=u(Math.pow(v,6)),g=this,w="";;){var S=q(g,_).g;g=N(g,S.j(_));var b=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=S,R(g))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function L(v){return v.h==-1}t.l=function(v){return v=N(this,v),L(v)?-1:R(v)?0:1};function D(v){for(var _=v.g.length,g=[],w=0;w<_;w++)g[w]=~v.g[w];return new o(g,~v.h).add(m)}t.abs=function(){return L(this)?D(this):this},t.add=function(v){for(var _=Math.max(this.g.length,v.g.length),g=[],w=0,S=0;S<=_;S++){var b=w+(this.i(S)&65535)+(v.i(S)&65535),E=(b>>>16)+(this.i(S)>>>16)+(v.i(S)>>>16);w=E>>>16,b&=65535,E&=65535,g[S]=E<<16|b}return new o(g,g[g.length-1]&-2147483648?-1:0)};function N(v,_){return v.add(D(_))}t.j=function(v){if(R(this)||R(v))return p;if(L(this))return L(v)?D(this).j(D(v)):D(D(this).j(v));if(L(v))return D(this.j(D(v)));if(0>this.l(I)&&0>v.l(I))return u(this.m()*v.m());for(var _=this.g.length+v.g.length,g=[],w=0;w<2*_;w++)g[w]=0;for(w=0;w<this.g.length;w++)for(var S=0;S<v.g.length;S++){var b=this.i(w)>>>16,E=this.i(w)&65535,Me=v.i(S)>>>16,Ye=v.i(S)&65535;g[2*w+2*S]+=E*Ye,O(g,2*w+2*S),g[2*w+2*S+1]+=b*Ye,O(g,2*w+2*S+1),g[2*w+2*S+1]+=E*Me,O(g,2*w+2*S+1),g[2*w+2*S+2]+=b*Me,O(g,2*w+2*S+2)}for(w=0;w<_;w++)g[w]=g[2*w+1]<<16|g[2*w];for(w=_;w<2*_;w++)g[w]=0;return new o(g,0)};function O(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function x(v,_){this.g=v,this.h=_}function q(v,_){if(R(_))throw Error("division by zero");if(R(v))return new x(p,p);if(L(v))return _=q(D(v),_),new x(D(_.g),D(_.h));if(L(_))return _=q(v,D(_)),new x(D(_.g),_.h);if(30<v.g.length){if(L(v)||L(_))throw Error("slowDivide_ only works with positive integers.");for(var g=m,w=_;0>=w.l(v);)g=j(g),w=j(w);var S=V(g,1),b=V(w,1);for(w=V(w,2),g=V(g,2);!R(w);){var E=b.add(w);0>=E.l(v)&&(S=S.add(g),b=E),w=V(w,1),g=V(g,1)}return _=N(v,S.j(_)),new x(S,_)}for(S=p;0<=v.l(_);){for(g=Math.max(1,Math.floor(v.m()/_.m())),w=Math.ceil(Math.log(g)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=u(g),E=b.j(_);L(E)||0<E.l(v);)g-=w,b=u(g),E=b.j(_);R(b)&&(b=m),S=S.add(b),v=N(v,E)}return new x(S,v)}t.A=function(v){return q(this,v).h},t.and=function(v){for(var _=Math.max(this.g.length,v.g.length),g=[],w=0;w<_;w++)g[w]=this.i(w)&v.i(w);return new o(g,this.h&v.h)},t.or=function(v){for(var _=Math.max(this.g.length,v.g.length),g=[],w=0;w<_;w++)g[w]=this.i(w)|v.i(w);return new o(g,this.h|v.h)},t.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),g=[],w=0;w<_;w++)g[w]=this.i(w)^v.i(w);return new o(g,this.h^v.h)};function j(v){for(var _=v.g.length+1,g=[],w=0;w<_;w++)g[w]=v.i(w)<<1|v.i(w-1)>>>31;return new o(g,v.h)}function V(v,_){var g=_>>5;_%=32;for(var w=v.g.length-g,S=[],b=0;b<w;b++)S[b]=0<_?v.i(b+g)>>>_|v.i(b+g+1)<<32-_:v.i(b+g);return new o(S,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,qI=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ri=o}).apply(typeof zp<"u"?zp:typeof self<"u"?self:typeof window<"u"?window:{});var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var BI,Mr,zI,va,wu,GI,jI,HI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,h){return a==Array.prototype||a==Object.prototype||(a[d]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ca=="object"&&ca];for(var d=0;d<a.length;++d){var h=a[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=n(this);function s(a,d){if(d)e:{var h=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in h))break e;h=h[P]}a=a[a.length-1],y=h[a],d=d(y),d!=y&&d!=null&&e(h,a,{configurable:!0,writable:!0,value:d})}}function r(a,d){a instanceof String&&(a+="");var h=0,y=!1,P={next:function(){if(!y&&h<a.length){var M=h++;return{value:d(M,a[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return r(this,function(d,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,h){return a.call.apply(a.bind,arguments)}function p(a,d,h){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),a.apply(d,P)}}return function(){return a.apply(d,arguments)}}function m(a,d,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function I(a,d){var h=Array.prototype.slice.call(arguments,1);return function(){var y=h.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function R(a,d){function h(){}h.prototype=d.prototype,a.aa=d.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(y,P,M){for(var X=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)X[Be-2]=arguments[Be];return d.prototype[P].apply(y,X)}}function L(a){const d=a.length;if(0<d){const h=Array(d);for(let y=0;y<d;y++)h[y]=a[y];return h}return[]}function D(a,d){for(let h=1;h<arguments.length;h++){const y=arguments[h];if(l(y)){const P=a.length||0,M=y.length||0;a.length=P+M;for(let X=0;X<M;X++)a[P+X]=y[X]}else a.push(y)}}class N{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var j=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function V(a,d,h){for(const y in a)d.call(h,a[y],y,a)}function v(a,d){for(const h in a)d.call(void 0,a[h],h,a)}function _(a){const d={};for(const h in a)d[h]=a[h];return d}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,d){let h,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(h in y)a[h]=y[h];for(let M=0;M<g.length;M++)h=g[M],Object.prototype.hasOwnProperty.call(y,h)&&(a[h]=y[h])}}function S(a){var d=1;a=a.split(":");const h=[];for(;0<d&&a.length;)h.push(a.shift()),d--;return a.length&&h.push(a.join(":")),h}function b(a){c.setTimeout(()=>{throw a},0)}function E(){var a=ie;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Me{constructor(){this.h=this.g=null}add(d,h){const y=Ye.get();y.set(d,h),this.h?this.h.next=y:this.g=y,this.h=y}}var Ye=new N(()=>new Ve,a=>a.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,be=!1,ie=new Me,K=()=>{const a=c.Promise.resolve(void 0);fe=()=>{a.then(ve)}};var ve=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(h){b(h)}var d=Ye;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}be=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var je=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};c.addEventListener("test",h,d),c.removeEventListener("test",h,d)}catch{}return a}();function Gt(a,d){if(ye.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(j){e:{try{q(d.nodeName);var P=!0;break e}catch{}P=!1}P||(d=null)}}else h=="mouseover"?d=a.fromElement:h=="mouseout"&&(d=a.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Et[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gt.aa.h.call(this)}}R(Gt,ye);var Et={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),te=0;function Z(a,d,h,y,P){this.listener=a,this.proxy=null,this.src=d,this.type=h,this.capture=!!y,this.ha=P,this.key=++te,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ke(a){this.src=a,this.g={},this.h=0}ke.prototype.add=function(a,d,h,y,P){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var X=T(a,d,y,P);return-1<X?(d=a[X],h||(d.fa=!1)):(d=new Z(d,this.src,M,!!y,P),d.fa=h,a.push(d)),d};function A(a,d){var h=d.type;if(h in a.g){var y=a.g[h],P=Array.prototype.indexOf.call(y,d,void 0),M;(M=0<=P)&&Array.prototype.splice.call(y,P,1),M&&(se(d),a.g[h].length==0&&(delete a.g[h],a.h--))}}function T(a,d,h,y){for(var P=0;P<a.length;++P){var M=a[P];if(!M.da&&M.listener==d&&M.capture==!!h&&M.ha==y)return P}return-1}var C="closure_lm_"+(1e6*Math.random()|0),U={};function G(a,d,h,y,P){if(Array.isArray(d)){for(var M=0;M<d.length;M++)G(a,d[M],h,y,P);return null}return h=he(h),a&&a[F]?a.K(d,h,u(y)?!!y.capture:!1,P):B(a,d,h,!1,y,P)}function B(a,d,h,y,P,M){if(!d)throw Error("Invalid event type");var X=u(P)?!!P.capture:!!P,Be=ee(a);if(Be||(a[C]=Be=new ke(a)),h=Be.add(d,h,y,X,M),h.proxy)return h;if(y=J(),h.proxy=y,y.src=a,y.listener=h,a.addEventListener)je||(P=X),P===void 0&&(P=!1),a.addEventListener(d.toString(),y,P);else if(a.attachEvent)a.attachEvent(H(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return h}function J(){function a(h){return d.call(a.src,a.listener,h)}const d=le;return a}function Y(a,d,h,y,P){if(Array.isArray(d))for(var M=0;M<d.length;M++)Y(a,d[M],h,y,P);else y=u(y)?!!y.capture:!!y,h=he(h),a&&a[F]?(a=a.i,d=String(d).toString(),d in a.g&&(M=a.g[d],h=T(M,h,y,P),-1<h&&(se(M[h]),Array.prototype.splice.call(M,h,1),M.length==0&&(delete a.g[d],a.h--)))):a&&(a=ee(a))&&(d=a.g[d.toString()],a=-1,d&&(a=T(d,h,y,P)),(h=-1<a?d[a]:null)&&Q(h))}function Q(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[F])A(d.i,a);else{var h=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(h,y,a.capture):d.detachEvent?d.detachEvent(H(h),y):d.addListener&&d.removeListener&&d.removeListener(y),(h=ee(d))?(A(h,a),h.h==0&&(h.src=null,d[C]=null)):se(a)}}}function H(a){return a in U?U[a]:U[a]="on"+a}function le(a,d){if(a.da)a=!0;else{d=new Gt(d,this);var h=a.listener,y=a.ha||a.src;a.fa&&Q(a),a=h.call(y,d)}return a}function ee(a){return a=a[C],a instanceof ke?a:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(a){return typeof a=="function"?a:(a[oe]||(a[oe]=function(d){return a.handleEvent(d)}),a[oe])}function ue(){ge.call(this),this.i=new ke(this),this.M=this,this.F=null}R(ue,ge),ue.prototype[F]=!0,ue.prototype.removeEventListener=function(a,d,h,y){Y(this,a,d,h,y)};function Te(a,d){var h,y=a.F;if(y)for(h=[];y;y=y.F)h.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new ye(d,a);else if(d instanceof ye)d.target=d.target||a;else{var P=d;d=new ye(y,a),w(d,P)}if(P=!0,h)for(var M=h.length-1;0<=M;M--){var X=d.g=h[M];P=Ne(X,y,!0,d)&&P}if(X=d.g=a,P=Ne(X,y,!0,d)&&P,P=Ne(X,y,!1,d)&&P,h)for(M=0;M<h.length;M++)X=d.g=h[M],P=Ne(X,y,!1,d)&&P}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var h=a.g[d],y=0;y<h.length;y++)se(h[y]);delete a.g[d],a.h--}}this.F=null},ue.prototype.K=function(a,d,h,y){return this.i.add(String(a),d,!1,h,y)},ue.prototype.L=function(a,d,h,y){return this.i.add(String(a),d,!0,h,y)};function Ne(a,d,h,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var P=!0,M=0;M<d.length;++M){var X=d[M];if(X&&!X.da&&X.capture==h){var Be=X.listener,gt=X.ha||X.src;X.fa&&A(a.i,X),P=Be.call(gt,y)!==!1&&P}}return P&&!y.defaultPrevented}function At(a,d,h){if(typeof a=="function")h&&(a=m(a,h));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function pt(a){a.g=At(()=>{a.g=null,a.i&&(a.i=!1,pt(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Xt extends ge{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wt(a){ge.call(this),this.h=a,this.g={}}R(wt,ge);var ni=[];function mr(a){V(a.g,function(d,h){this.g.hasOwnProperty(h)&&Q(d)},a),a.g={}}wt.prototype.N=function(){wt.aa.N.call(this),mr(this)},wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mt=c.JSON.stringify,Jt=c.JSON.parse,Bo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function el(){}el.prototype.h=null;function Mf(a){return a.h||(a.h=a.i())}function kf(){}var gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tl(){ye.call(this,"d")}R(tl,ye);function nl(){ye.call(this,"c")}R(nl,ye);var ji={},xf=null;function zo(){return xf=xf||new ue}ji.La="serverreachability";function Vf(a){ye.call(this,ji.La,a)}R(Vf,ye);function yr(a){const d=zo();Te(d,new Vf(d))}ji.STAT_EVENT="statevent";function Ff(a,d){ye.call(this,ji.STAT_EVENT,a),this.stat=d}R(Ff,ye);function Dt(a){const d=zo();Te(d,new Ff(d,a))}ji.Ma="timingevent";function Uf(a,d){ye.call(this,ji.Ma,a),this.size=d}R(Uf,ye);function Ir(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function _r(){this.g=!0}_r.prototype.xa=function(){this.g=!1};function TA(a,d,h,y,P,M){a.info(function(){if(a.g)if(M)for(var X="",Be=M.split("&"),gt=0;gt<Be.length;gt++){var xe=Be[gt].split("=");if(1<xe.length){var vt=xe[0];xe=xe[1];var Tt=vt.split("_");X=2<=Tt.length&&Tt[1]=="type"?X+(vt+"="+xe+"&"):X+(vt+"=redacted&")}}else X=null;else X=M;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+d+`
`+h+`
`+X})}function bA(a,d,h,y,P,M,X){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+d+`
`+h+`
`+M+" "+X})}function Ts(a,d,h,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+RA(a,h)+(y?" "+y:"")})}function SA(a,d){a.info(function(){return"TIMEOUT: "+d})}_r.prototype.info=function(){};function RA(a,d){if(!a.g)return d;if(!d)return null;try{var h=JSON.parse(d);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var y=h[a];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var M=P[0];if(M!="noop"&&M!="stop"&&M!="close")for(var X=1;X<P.length;X++)P[X]=""}}}}return mt(h)}catch{return d}}var Go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},il;function jo(){}R(jo,el),jo.prototype.g=function(){return new XMLHttpRequest},jo.prototype.i=function(){return{}},il=new jo;function ii(a,d,h,y){this.j=a,this.i=d,this.l=h,this.R=y||1,this.U=new wt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bf}function Bf(){this.i=null,this.g="",this.h=!1}var zf={},sl={};function rl(a,d,h){a.L=1,a.v=Ko(Nn(d)),a.m=h,a.P=!0,Gf(a,null)}function Gf(a,d){a.F=Date.now(),Ho(a),a.A=Nn(a.v);var h=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),ih(h.i,"t",y),a.C=0,h=a.j.J,a.h=new Bf,a.g=Ah(a.j,h?d:null,!a.m),0<a.O&&(a.M=new Xt(m(a.Y,a,a.g),a.O)),d=a.U,h=a.g,y=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(ni[0]=P.toString()),P=ni);for(var M=0;M<P.length;M++){var X=G(h,P[M],y||d.handleEvent,!1,d.h||d);if(!X)break;d.g[X.key]=X}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),yr(),TA(a.i,a.u,a.A,a.l,a.R,a.m)}ii.prototype.ca=function(a){a=a.target;const d=this.M;d&&Dn(a)==3?d.j():this.Y(a)},ii.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=Dn(this.g);var d=this.g.Ba();const Rs=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||uh(this.g)))){this.J||Tt!=4||d==7||(d==8||0>=Rs?yr(3):yr(2)),ol(this);var h=this.g.Z();this.X=h;t:if(jf(this)){var y=uh(this.g);a="";var P=y.length,M=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hi(this),Er(this);var X="";break t}this.h.i=new c.TextDecoder}for(d=0;d<P;d++)this.h.h=!0,a+=this.h.i.decode(y[d],{stream:!(M&&d==P-1)});y.length=0,this.h.g+=a,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=h==200,bA(this.i,this.u,this.A,this.l,this.R,Tt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,gt=this.g;if((Be=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Be)){var xe=Be;break t}}xe=null}if(h=xe)Ts(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,al(this,h);else{this.o=!1,this.s=3,Dt(12),Hi(this),Er(this);break e}}if(this.P){h=!0;let sn;for(;!this.J&&this.C<X.length;)if(sn=CA(this,X),sn==sl){Tt==4&&(this.s=4,Dt(14),h=!1),Ts(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==zf){this.s=4,Dt(15),Ts(this.i,this.l,X,"[Invalid Chunk]"),h=!1;break}else Ts(this.i,this.l,sn,null),al(this,sn);if(jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||X.length!=0||this.h.h||(this.s=1,Dt(16),h=!1),this.o=this.o&&h,!h)Ts(this.i,this.l,X,"[Invalid Chunked Response]"),Hi(this),Er(this);else if(0<X.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),hl(vt),vt.M=!0,Dt(11))}}else Ts(this.i,this.l,X,null),al(this,X);Tt==4&&Hi(this),this.o&&!this.J&&(Tt==4?yh(this.j,this):(this.o=!1,Ho(this)))}else HA(this.g),h==400&&0<X.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),Hi(this),Er(this)}}}catch{}finally{}};function jf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function CA(a,d){var h=a.C,y=d.indexOf(`
`,h);return y==-1?sl:(h=Number(d.substring(h,y)),isNaN(h)?zf:(y+=1,y+h>d.length?sl:(d=d.slice(y,y+h),a.C=y+h,d)))}ii.prototype.cancel=function(){this.J=!0,Hi(this)};function Ho(a){a.S=Date.now()+a.I,Hf(a,a.I)}function Hf(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ir(m(a.ba,a),d)}function ol(a){a.B&&(c.clearTimeout(a.B),a.B=null)}ii.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(SA(this.i,this.A),this.L!=2&&(yr(),Dt(17)),Hi(this),this.s=2,Er(this)):Hf(this,this.S-a)};function Er(a){a.j.G==0||a.J||yh(a.j,a)}function Hi(a){ol(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,mr(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function al(a,d){try{var h=a.j;if(h.G!=0&&(h.g==a||cl(h.h,a))){if(!a.K&&cl(h.h,a)&&h.G==3){try{var y=h.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)ea(h),Jo(h);else break e;fl(h),Dt(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ir(m(h.Za,h),6e3));if(1>=Kf(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Wi(h,11)}else if((a.K||h.g==a)&&ea(h),!O(d))for(P=h.Da.g.parse(d),d=0;d<P.length;d++){let xe=P[d];if(h.T=xe[0],xe=xe[1],h.G==2)if(xe[0]=="c"){h.K=xe[1],h.ia=xe[2];const vt=xe[3];vt!=null&&(h.la=vt,h.j.info("VER="+h.la));const Tt=xe[4];Tt!=null&&(h.Aa=Tt,h.j.info("SVER="+h.Aa));const Rs=xe[5];Rs!=null&&typeof Rs=="number"&&0<Rs&&(y=1.5*Rs,h.L=y,h.j.info("backChannelRequestTimeoutMs_="+y)),y=h;const sn=a.g;if(sn){const na=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(na){var M=y.h;M.g||na.indexOf("spdy")==-1&&na.indexOf("quic")==-1&&na.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ll(M,M.h),M.h=null))}if(y.D){const pl=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;pl&&(y.ya=pl,$e(y.I,y.D,pl))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),y=h;var X=a;if(y.qa=Eh(y,y.J?y.ia:null,y.W),X.K){Qf(y.h,X);var Be=X,gt=y.L;gt&&(Be.I=gt),Be.B&&(ol(Be),Ho(Be)),y.g=X}else mh(y);0<h.i.length&&Zo(h)}else xe[0]!="stop"&&xe[0]!="close"||Wi(h,7);else h.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Wi(h,7):dl(h):xe[0]!="noop"&&h.l&&h.l.ta(xe),h.v=0)}}yr(4)}catch{}}var OA=class{constructor(a,d){this.g=a,this.map=d}};function $f(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Kf(a){return a.h?1:a.g?a.g.size:0}function cl(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function ll(a,d){a.g?a.g.add(d):a.h=d}function Qf(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}$f.prototype.cancel=function(){if(this.i=Yf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const h of a.g.values())d=d.concat(h.D);return d}return L(a.i)}function PA(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],h=a.length,y=0;y<h;y++)d.push(a[y]);return d}d=[],h=0;for(y in a)d[h++]=a[y];return d}function NA(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var h=0;h<a;h++)d.push(h);return d}d=[],h=0;for(const y in a)d[h++]=y;return d}}}function Xf(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var h=NA(a),y=PA(a),P=y.length,M=0;M<P;M++)d.call(void 0,y[M],h&&h[M],a)}var Jf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DA(a,d){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var y=a[h].indexOf("="),P=null;if(0<=y){var M=a[h].substring(0,y);P=a[h].substring(y+1)}else M=a[h];d(M,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function $i(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $i){this.h=a.h,$o(this,a.j),this.o=a.o,this.g=a.g,Wo(this,a.s),this.l=a.l;var d=a.i,h=new vr;h.i=d.i,d.g&&(h.g=new Map(d.g),h.h=d.h),Zf(this,h),this.m=a.m}else a&&(d=String(a).match(Jf))?(this.h=!1,$o(this,d[1]||"",!0),this.o=Ar(d[2]||""),this.g=Ar(d[3]||"",!0),Wo(this,d[4]),this.l=Ar(d[5]||"",!0),Zf(this,d[6]||"",!0),this.m=Ar(d[7]||"")):(this.h=!1,this.i=new vr(null,this.h))}$i.prototype.toString=function(){var a=[],d=this.j;d&&a.push(wr(d,eh,!0),":");var h=this.g;return(h||d=="file")&&(a.push("//"),(d=this.o)&&a.push(wr(d,eh,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(wr(h,h.charAt(0)=="/"?kA:MA,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",wr(h,VA)),a.join("")};function Nn(a){return new $i(a)}function $o(a,d,h){a.j=h?Ar(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Wo(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Zf(a,d,h){d instanceof vr?(a.i=d,FA(a.i,a.h)):(h||(d=wr(d,xA)),a.i=new vr(d,a.h))}function $e(a,d,h){a.i.set(d,h)}function Ko(a){return $e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ar(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function wr(a,d,h){return typeof a=="string"?(a=encodeURI(a).replace(d,LA),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function LA(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var eh=/[#\/\?@]/g,MA=/[#\?:]/g,kA=/[#\?]/g,xA=/[#\?@]/g,VA=/#/g;function vr(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function si(a){a.g||(a.g=new Map,a.h=0,a.i&&DA(a.i,function(d,h){a.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}t=vr.prototype,t.add=function(a,d){si(this),this.i=null,a=bs(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(d),this.h+=1,this};function th(a,d){si(a),d=bs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function nh(a,d){return si(a),d=bs(a,d),a.g.has(d)}t.forEach=function(a,d){si(this),this.g.forEach(function(h,y){h.forEach(function(P){a.call(d,P,y,this)},this)},this)},t.na=function(){si(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),h=[];for(let y=0;y<d.length;y++){const P=a[y];for(let M=0;M<P.length;M++)h.push(d[y])}return h},t.V=function(a){si(this);let d=[];if(typeof a=="string")nh(this,a)&&(d=d.concat(this.g.get(bs(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)d=d.concat(a[h])}return d},t.set=function(a,d){return si(this),this.i=null,a=bs(this,a),nh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function ih(a,d,h){th(a,d),0<h.length&&(a.i=null,a.g.set(bs(a,d),L(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var h=0;h<d.length;h++){var y=d[h];const M=encodeURIComponent(String(y)),X=this.V(y);for(y=0;y<X.length;y++){var P=M;X[y]!==""&&(P+="="+encodeURIComponent(String(X[y]))),a.push(P)}}return this.i=a.join("&")};function bs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function FA(a,d){d&&!a.j&&(si(a),a.i=null,a.g.forEach(function(h,y){var P=y.toLowerCase();y!=P&&(th(this,y),ih(this,P,h))},a)),a.j=d}function UA(a,d){const h=new _r;if(c.Image){const y=new Image;y.onload=I(ri,h,"TestLoadImage: loaded",!0,d,y),y.onerror=I(ri,h,"TestLoadImage: error",!1,d,y),y.onabort=I(ri,h,"TestLoadImage: abort",!1,d,y),y.ontimeout=I(ri,h,"TestLoadImage: timeout",!1,d,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function qA(a,d){const h=new _r,y=new AbortController,P=setTimeout(()=>{y.abort(),ri(h,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(M=>{clearTimeout(P),M.ok?ri(h,"TestPingServer: ok",!0,d):ri(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(P),ri(h,"TestPingServer: error",!1,d)})}function ri(a,d,h,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(h)}catch{}}function BA(){this.g=new Bo}function zA(a,d,h){const y=h||"";try{Xf(a,function(P,M){let X=P;u(P)&&(X=mt(P)),d.push(y+M+"="+encodeURIComponent(X))})}catch(P){throw d.push(y+"type="+encodeURIComponent("_badmap")),P}}function Qo(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Qo,el),Qo.prototype.g=function(){return new Yo(this.l,this.j)},Qo.prototype.i=function(a){return function(){return a}}({});function Yo(a,d){ue.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Yo,ue),t=Yo.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,br(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Tr(this):br(this),this.readyState==3&&sh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Tr(this))},t.Qa=function(a){this.g&&(this.response=a,Tr(this))},t.ga=function(){this.g&&Tr(this)};function Tr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,br(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=d.next();return a.join(`\r
`)};function br(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rh(a){let d="";return V(a,function(h,y){d+=y,d+=":",d+=h,d+=`\r
`}),d}function ul(a,d,h){e:{for(y in h){var y=!1;break e}y=!0}y||(h=rh(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):$e(a,d,h))}function Je(a){ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Je,ue);var GA=/^https?$/i,jA=["POST","PUT"];t=Je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,h,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():il.g(),this.v=this.o?Mf(this.o):Mf(il),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(M){oh(this,M);return}if(a=h||"",h=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)h.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())h.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(h.keys()).find(M=>M.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(jA,d,void 0))||y||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,X]of h)this.g.setRequestHeader(M,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lh(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){oh(this,M)}};function oh(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,ah(a),Xo(a)}function ah(a){a.A||(a.A=!0,Te(a,"complete"),Te(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Te(this,"complete"),Te(this,"abort"),Xo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xo(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ch(this):this.bb())},t.bb=function(){ch(this)};function ch(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Dn(a)!=4||a.Z()!=2)){if(a.u&&Dn(a)==4)At(a.Ea,0,a);else if(Te(a,"readystatechange"),Dn(a)==4){a.h=!1;try{const X=a.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var y;if(y=X===0){var P=String(a.D).match(Jf)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),y=!GA.test(P?P.toLowerCase():"")}h=y}if(h)Te(a,"complete"),Te(a,"success");else{a.m=6;try{var M=2<Dn(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",ah(a)}}finally{Xo(a)}}}}function Xo(a,d){if(a.g){lh(a);const h=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Te(a,"ready");try{h.onreadystatechange=y}catch{}}}function lh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Jt(d)}};function uh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function HA(a){const d={};a=(a.g&&2<=Dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(O(a[y]))continue;var h=S(a[y]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const M=d[P]||[];d[P]=M,M.push(h)}v(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sr(a,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||d}function dh(a){this.Aa=0,this.i=[],this.j=new _r,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sr("baseRetryDelayMs",5e3,a),this.cb=Sr("retryDelaySeedMs",1e4,a),this.Wa=Sr("forwardChannelMaxRetries",2,a),this.wa=Sr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new $f(a&&a.concurrentRequestLimit),this.Da=new BA,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dh.prototype,t.la=8,t.G=1,t.connect=function(a,d,h,y){Dt(0),this.W=a,this.H=d||{},h&&y!==void 0&&(this.H.OSID=h,this.H.OAID=y),this.F=this.X,this.I=Eh(this,null,this.W),Zo(this)};function dl(a){if(fh(a),a.G==3){var d=a.U++,h=Nn(a.I);if($e(h,"SID",a.K),$e(h,"RID",d),$e(h,"TYPE","terminate"),Rr(a,h),d=new ii(a,a.j,d),d.L=2,d.v=Ko(Nn(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=d.v,h=!0),h||(d.g=Ah(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ho(d)}_h(a)}function Jo(a){a.g&&(hl(a),a.g.cancel(),a.g=null)}function fh(a){Jo(a),a.u&&(c.clearTimeout(a.u),a.u=null),ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Zo(a){if(!Wf(a.h)&&!a.s){a.s=!0;var d=a.Ga;fe||K(),be||(fe(),be=!0),ie.add(d,a),a.B=0}}function $A(a,d){return Kf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ir(m(a.Ga,a,d),Ih(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new ii(this,this.j,a);let M=this.o;if(this.S&&(M?(M=_(M),w(M,this.S)):M=this.S),this.m!==null||this.O||(P.H=M,M=null),this.P)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var y=this.i[h];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=ph(this,P,d),h=Nn(this.I),$e(h,"RID",a),$e(h,"CVER",22),this.D&&$e(h,"X-HTTP-Session-Id",this.D),Rr(this,h),M&&(this.O?d="headers="+encodeURIComponent(String(rh(M)))+"&"+d:this.m&&ul(h,this.m,M)),ll(this.h,P),this.Ua&&$e(h,"TYPE","init"),this.P?($e(h,"$req",d),$e(h,"SID","null"),P.T=!0,rl(P,h,null)):rl(P,h,d),this.G=2}}else this.G==3&&(a?hh(this,a):this.i.length==0||Wf(this.h)||hh(this))};function hh(a,d){var h;d?h=d.l:h=a.U++;const y=Nn(a.I);$e(y,"SID",a.K),$e(y,"RID",h),$e(y,"AID",a.T),Rr(a,y),a.m&&a.o&&ul(y,a.m,a.o),h=new ii(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),d&&(a.i=d.D.concat(a.i)),d=ph(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ll(a.h,h),rl(h,y,d)}function Rr(a,d){a.H&&V(a.H,function(h,y){$e(d,y,h)}),a.l&&Xf({},function(h,y){$e(d,y,h)})}function ph(a,d,h){h=Math.min(a.i.length,h);var y=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let M=-1;for(;;){const X=["count="+h];M==-1?0<h?(M=P[0].g,X.push("ofs="+M)):M=0:X.push("ofs="+M);let Be=!0;for(let gt=0;gt<h;gt++){let xe=P[gt].g;const vt=P[gt].map;if(xe-=M,0>xe)M=Math.max(0,P[gt].g-100),Be=!1;else try{zA(vt,X,"req"+xe+"_")}catch{y&&y(vt)}}if(Be){y=X.join("&");break e}}}return a=a.i.splice(0,h),d.D=a,y}function mh(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;fe||K(),be||(fe(),be=!0),ie.add(d,a),a.v=0}}function fl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ir(m(a.Fa,a),Ih(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ir(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),Jo(this),gh(this))};function hl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function gh(a){a.g=new ii(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Nn(a.qa);$e(d,"RID","rpc"),$e(d,"SID",a.K),$e(d,"AID",a.T),$e(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&$e(d,"TO",a.ja),$e(d,"TYPE","xmlhttp"),Rr(a,d),a.m&&a.o&&ul(d,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Ko(Nn(d)),h.m=null,h.P=!0,Gf(h,a)}t.Za=function(){this.C!=null&&(this.C=null,Jo(this),fl(this),Dt(19))};function ea(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function yh(a,d){var h=null;if(a.g==d){ea(a),hl(a),a.g=null;var y=2}else if(cl(a.h,d))h=d.D,Qf(a.h,d),y=1;else return;if(a.G!=0){if(d.o)if(y==1){h=d.m?d.m.length:0,d=Date.now()-d.F;var P=a.B;y=zo(),Te(y,new Uf(y,h)),Zo(a)}else mh(a);else if(P=d.s,P==3||P==0&&0<d.X||!(y==1&&$A(a,d)||y==2&&fl(a)))switch(h&&0<h.length&&(d=a.h,d.i=d.i.concat(h)),P){case 1:Wi(a,5);break;case 4:Wi(a,10);break;case 3:Wi(a,6);break;default:Wi(a,2)}}}function Ih(a,d){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*d}function Wi(a,d){if(a.j.info("Error code "+d),d==2){var h=m(a.fb,a),y=a.Xa;const P=!y;y=new $i(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$o(y,"https"),Ko(y),P?UA(y.toString(),h):qA(y.toString(),h)}else Dt(2);a.G=0,a.l&&a.l.sa(d),_h(a),fh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function _h(a){if(a.G=0,a.ka=[],a.l){const d=Yf(a.h);(d.length!=0||a.i.length!=0)&&(D(a.ka,d),D(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function Eh(a,d,h){var y=h instanceof $i?Nn(h):new $i(h);if(y.g!="")d&&(y.g=d+"."+y.g),Wo(y,y.s);else{var P=c.location;y=P.protocol,d=d?d+"."+P.hostname:P.hostname,P=+P.port;var M=new $i(null);y&&$o(M,y),d&&(M.g=d),P&&Wo(M,P),h&&(M.l=h),y=M}return h=a.D,d=a.ya,h&&d&&$e(y,h,d),$e(y,"VER",a.la),Rr(a,y),y}function Ah(a,d,h){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Je(new Qo({eb:h})):new Je(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wh(){}t=wh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ta(){}ta.prototype.g=function(a,d){return new jt(a,d)};function jt(a,d){ue.call(this),this.g=new dh(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!O(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ss(this)}R(jt,ue),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){dl(this.g)},jt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=mt(a),a=h);d.i.push(new OA(d.Ya++,a)),d.G==3&&Zo(d)},jt.prototype.N=function(){this.g.l=null,delete this.j,dl(this.g),delete this.g,jt.aa.N.call(this)};function vh(a){tl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const h in d){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}R(vh,tl);function Th(){nl.call(this),this.status=1}R(Th,nl);function Ss(a){this.g=a}R(Ss,wh),Ss.prototype.ua=function(){Te(this.g,"a")},Ss.prototype.ta=function(a){Te(this.g,new vh(a))},Ss.prototype.sa=function(a){Te(this.g,new Th)},Ss.prototype.ra=function(){Te(this.g,"b")},ta.prototype.createWebChannel=ta.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,HI=function(){return new ta},jI=function(){return zo()},GI=ji,wu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Go.NO_ERROR=0,Go.TIMEOUT=8,Go.HTTP_ERROR=6,va=Go,qf.COMPLETE="complete",zI=qf,kf.EventType=gr,gr.OPEN="a",gr.CLOSE="b",gr.ERROR="c",gr.MESSAGE="d",ue.prototype.listen=ue.prototype.K,Mr=kf,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,BI=Je}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});const Gp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const fs=new bc("@firebase/firestore");function Ds(){return fs.logLevel}function ne(t,...e){if(fs.logLevel<=Ce.DEBUG){const n=e.map(xd);fs.debug(`Firestore (${ur}): ${t}`,...n)}}function Qn(t,...e){if(fs.logLevel<=Ce.ERROR){const n=e.map(xd);fs.error(`Firestore (${ur}): ${t}`,...n)}}function Ys(t,...e){if(fs.logLevel<=Ce.WARN){const n=e.map(xd);fs.warn(`Firestore (${ur}): ${t}`,...n)}}function xd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${ur}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function qe(t,e){t||me()}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class SS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RS{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){qe(this.o===void 0);let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Ci;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ci,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ci)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(qe(typeof i.accessToken=="string"),new $I(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new St(e)}}class CS{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=St.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class OS{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new CS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){qe(this.o===void 0);const i=r=>{r.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qe(typeof n.token=="string"),this.R=n.token,new PS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=DS(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Pe(t,e){return t<e?-1:t>e?1:0}function Xs(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new at(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new at(0,0))}static max(){return new Ee(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n,i){n===void 0?n=0:n>e.length&&me(),i===void 0?i=e.length-n:i>e.length-n&&me(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=hn.compareSegments(e.get(s),n.get(s));if(r!==0)return r}return Math.sign(e.length-n.length)}static compareSegments(e,n){const i=hn.isNumericId(e),s=hn.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?hn.extractNumericId(e).compare(hn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class Ze extends hn{construct(e,n,i){return new Ze(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ce($.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Ze(n)}static emptyPath(){return new Ze([])}}const LS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends hn{construct(e,n,i){return new It(e,n,i)}static isValidIdentifier(e){return LS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new ce($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ce($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new ce($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ze.fromString(e))}static fromName(e){return new de(Ze.fromString(e).popFirst(5))}static empty(){return new de(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ze(e.slice()))}}function MS(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Ee.fromTimestamp(i===1e9?new at(n+1,0):new at(n,i));return new Pi(s,de.empty(),e)}function kS(t){return new Pi(t.readTime,t.key,-1)}class Pi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Pi(Ee.min(),de.empty(),-1)}static max(){return new Pi(Ee.max(),de.empty(),-1)}}function xS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function dr(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==VS)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,i)=>{n(e)})}static reject(e){return new z((n,i)=>{i(e)})}static waitFor(e){return new z((n,i)=>{let s=0,r=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=z.resolve(!1);for(const i of e)n=n.next(s=>s?z.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new z((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===r&&i(o)},f=>s(f))}})}static doWhile(e,n){return new z((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function US(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Oc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Oc.oe=-1;function Pc(t){return t==null}function $a(t){return t===0&&1/t==-1/0}function qS(t){return typeof t=="number"&&Number.isInteger(t)&&!$a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=jp(e)),e=zS(t.get(n),e);return jp(e)}function zS(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const r=t.charAt(s);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function jp(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function KI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new la(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new la(this.root,e,this.comparator,!1)}getReverseIterator(){return new la(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new la(this.root,e,this.comparator,!0)}}class la{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??yt.RED,this.left=s??yt.EMPTY,this.right=r??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new yt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,i,s,r){return this}insert(e,n,i){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $p(this.data.getIterator())}getIteratorFrom(e){return new $p(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class $p{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new ct(It.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class QI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new QI("Invalid base64 string: "+r):r}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const GS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(t){if(qe(!!t),typeof t=="string"){let e=0;const n=GS.exec(t);if(qe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Di(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nc(t){const e=t.mapValue.fields.__previous_value__;return Vd(e)?Nc(e):e}function go(t){const e=Ni(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,i,s,r,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vd(t)?4:$S(t)?9007199254740991:HS(t)?10:11:me()}function On(t,e){if(t===e)return!0;const n=Li(t);if(n!==Li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return go(t).isEqual(go(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Ni(s.timestampValue),c=Ni(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Di(s.bytesValue).isEqual(Di(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return tt(s.geoPointValue.latitude)===tt(r.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return tt(s.integerValue)===tt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=tt(s.doubleValue),c=tt(r.doubleValue);return o===c?$a(o)===$a(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Xs(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(Hp(o)!==Hp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!On(o[l],c[l])))return!1;return!0}(t,e);default:return me()}}function Io(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Js(t,e){if(t===e)return 0;const n=Li(t),i=Li(e);if(n!==i)return Pe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(r,o){const c=tt(r.integerValue||r.doubleValue),l=tt(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Wp(t.timestampValue,e.timestampValue);case 4:return Wp(go(t),go(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(r,o){const c=Di(r),l=Di(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const c=r.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Pe(c[u],l[u]);if(f!==0)return f}return Pe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const c=Pe(tt(r.latitude),tt(o.latitude));return c!==0?c:Pe(tt(r.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kp(t.arrayValue,e.arrayValue);case 10:return function(r,o){var c,l,u,f;const p=r.fields||{},m=o.fields||{},I=(c=p.value)===null||c===void 0?void 0:c.arrayValue,R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,L=Pe(((u=I==null?void 0:I.values)===null||u===void 0?void 0:u.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:Kp(I,R)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===ua.mapValue&&o===ua.mapValue)return 0;if(r===ua.mapValue)return 1;if(o===ua.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Pe(l[p],f[p]);if(m!==0)return m;const I=Js(c[l[p]],u[f[p]]);if(I!==0)return I}return Pe(l.length,f.length)}(t.mapValue,e.mapValue);default:throw me()}}function Wp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Ni(t),i=Ni(e),s=Pe(n.seconds,i.seconds);return s!==0?s:Pe(n.nanos,i.nanos)}function Kp(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=Js(n[s],i[s]);if(r)return r}return Pe(n.length,i.length)}function Zs(t){return vu(t)}function vu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Ni(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=vu(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${vu(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function Ta(t){switch(Li(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nc(t);return e?16+Ta(e):16;case 5:return 2*t.stringValue.length;case 6:return Di(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+Ta(r),0)}(t.arrayValue);case 10:case 11:return function(i){let s=0;return zi(i.fields,(r,o)=>{s+=r.length+Ta(o)}),s}(t.mapValue);default:throw me()}}function Tu(t){return!!t&&"integerValue"in t}function Fd(t){return!!t&&"arrayValue"in t}function Qp(t){return!!t&&"nullValue"in t}function Yp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ba(t){return!!t&&"mapValue"in t}function HS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function $r(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zi(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=$r(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$r(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $S(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$r(n)}setAll(e){let n=It.emptyPath(),i={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=c.popLast()}o?i[c.lastSegment()]=$r(o):s.push(c.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];ba(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){zi(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Bt($r(this.value))}}function YI(t){const e=[];return zi(t.fields,(n,i)=>{const s=new It([n]);if(ba(i)){const r=YI(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,i,s,r,o,c){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ot(e,0,Ee.min(),Ee.min(),Ee.min(),Bt.empty(),0)}static newFoundDocument(e,n,i,s){return new Ot(e,1,n,Ee.min(),i,s,0)}static newNoDocument(e,n){return new Ot(e,2,n,Ee.min(),Ee.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,Ee.min(),Ee.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wa{constructor(e,n){this.position=e,this.inclusive=n}}function Xp(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=de.comparator(de.fromName(o.referenceValue),n.key):i=Js(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Jp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ka{constructor(e,n="asc"){this.field=e,this.dir=n}}function WS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class XI{}class ot extends XI{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new QS(e,n,i):n==="array-contains"?new JS(e,i):n==="in"?new ZS(e,i):n==="not-in"?new eR(e,i):n==="array-contains-any"?new tR(e,i):new ot(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new YS(e,i):new XS(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Js(n,this.value)):n!==null&&Li(this.value)===Li(n)&&this.matchesComparison(Js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pn extends XI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Pn(e,n)}matches(e){return JI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function JI(t){return t.op==="and"}function ZI(t){return KS(t)&&JI(t)}function KS(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function bu(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Zs(t.value);if(ZI(t))return t.filters.map(e=>bu(e)).join(",");{const e=t.filters.map(n=>bu(n)).join(",");return`${t.op}(${e})`}}function e_(t,e){return t instanceof ot?function(i,s){return s instanceof ot&&i.op===s.op&&i.field.isEqual(s.field)&&On(i.value,s.value)}(t,e):t instanceof Pn?function(i,s){return s instanceof Pn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,c)=>r&&e_(o,s.filters[c]),!0):!1}(t,e):void me()}function t_(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`}(t):t instanceof Pn?function(n){return n.op.toString()+" {"+n.getFilters().map(t_).join(" ,")+"}"}(t):"Filter"}class QS extends ot{constructor(e,n,i){super(e,n,i),this.key=de.fromName(i.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class YS extends ot{constructor(e,n){super(e,"in",n),this.keys=n_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XS extends ot{constructor(e,n){super(e,"not-in",n),this.keys=n_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function n_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>de.fromName(i.referenceValue))}class JS extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fd(n)&&Io(n.arrayValue,this.value)}}class ZS extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Io(this.value.arrayValue,n)}}class eR extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Io(this.value.arrayValue,n)}}class tR extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Io(this.value.arrayValue,i))}}/**
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
 */class nR{constructor(e,n=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.ue=null}}function Zp(t,e=null,n=[],i=[],s=null,r=null,o=null){return new nR(t,e,n,i,s,r,o)}function Ud(t){const e=we(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>bu(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Zs(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Zs(i)).join(",")),e.ue=n}return e.ue}function qd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!e_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jp(t.startAt,e.startAt)&&Jp(t.endAt,e.endAt)}function Su(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iR(t,e,n,i,s,r,o,c){return new Dc(t,e,n,i,s,r,o,c)}function Bd(t){return new Dc(t)}function em(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sR(t){return t.collectionGroup!==null}function Wr(t){const e=we(t);if(e.ce===null){e.ce=[];const n=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ct(It.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Ka(r,i))}),n.has(It.keyField().canonicalString())||e.ce.push(new Ka(It.keyField(),i))}return e.ce}function Tn(t){const e=we(t);return e.le||(e.le=rR(e,Wr(t))),e.le}function rR(t,e){if(t.limitType==="F")return Zp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new Ka(s.field,r)});const n=t.endAt?new Wa(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Wa(t.startAt.position,t.startAt.inclusive):null;return Zp(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Ru(t,e,n){return new Dc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lc(t,e){return qd(Tn(t),Tn(e))&&t.limitType===e.limitType}function i_(t){return`${Ud(Tn(t))}|lt:${t.limitType}`}function Ls(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>t_(s)).join(", ")}]`),Pc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>Zs(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>Zs(s)).join(",")),`Target(${i})`}(Tn(t))}; limitType=${t.limitType})`}function Mc(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):de.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of Wr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,c,l){const u=Xp(o,c,l);return o.inclusive?u<=0:u<0}(i.startAt,Wr(i),s)||i.endAt&&!function(o,c,l){const u=Xp(o,c,l);return o.inclusive?u>=0:u>0}(i.endAt,Wr(i),s))}(t,e)}function oR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s_(t){return(e,n)=>{let i=!1;for(const s of Wr(t)){const r=aR(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function aR(t,e,n){const i=t.field.isKeyField()?de.comparator(e.key,n.key):function(r,o,c){const l=o.data.field(r),u=c.data.field(r);return l!==null&&u!==null?Js(l,u):me()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zi(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return KI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new Xe(de.comparator);function Yn(){return cR}const r_=new Xe(de.comparator);function kr(...t){let e=r_;for(const n of t)e=e.insert(n.key,n);return e}function o_(t){let e=r_;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function ns(){return Kr()}function a_(){return Kr()}function Kr(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const lR=new Xe(de.comparator),uR=new ct(de.comparator);function Oe(...t){let e=uR;for(const n of t)e=e.add(n);return e}const dR=new ct(Pe);function fR(){return dR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$a(e)?"-0":e}}function c_(t){return{integerValue:""+t}}function hR(t,e){return qS(e)?c_(e):zd(t,e)}/**
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
 */class kc{constructor(){this._=void 0}}function pR(t,e,n){return t instanceof Qa?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Vd(r)&&(r=Nc(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof _o?u_(t,e):t instanceof Eo?d_(t,e):function(s,r){const o=l_(s,r),c=tm(o)+tm(s.Pe);return Tu(o)&&Tu(s.Pe)?c_(c):zd(s.serializer,c)}(t,e)}function mR(t,e,n){return t instanceof _o?u_(t,e):t instanceof Eo?d_(t,e):n}function l_(t,e){return t instanceof Ya?function(i){return Tu(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class Qa extends kc{}class _o extends kc{constructor(e){super(),this.elements=e}}function u_(t,e){const n=f_(e);for(const i of t.elements)n.some(s=>On(s,i))||n.push(i);return{arrayValue:{values:n}}}class Eo extends kc{constructor(e){super(),this.elements=e}}function d_(t,e){let n=f_(e);for(const i of t.elements)n=n.filter(s=>!On(s,i));return{arrayValue:{values:n}}}class Ya extends kc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function tm(t){return tt(t.integerValue||t.doubleValue)}function f_(t){return Fd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gR(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof _o&&s instanceof _o||i instanceof Eo&&s instanceof Eo?Xs(i.elements,s.elements,On):i instanceof Ya&&s instanceof Ya?On(i.Pe,s.Pe):i instanceof Qa&&s instanceof Qa}(t.transform,e.transform)}class yR{constructor(e,n){this.version=e,this.transformResults=n}}class bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function h_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new m_(t.key,bn.none()):new ko(t.key,t.data,bn.none());{const n=t.data,i=Bt.empty();let s=new ct(It.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Gi(t.key,i,new Wt(s.toArray()),bn.none())}}function IR(t,e,n){t instanceof ko?function(s,r,o){const c=s.value.clone(),l=im(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Gi?function(s,r,o){if(!Sa(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=im(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(p_(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qr(t,e,n,i){return t instanceof ko?function(r,o,c,l){if(!Sa(r.precondition,o))return c;const u=r.value.clone(),f=sm(r.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,i):t instanceof Gi?function(r,o,c,l){if(!Sa(r.precondition,o))return c;const u=sm(r.fieldTransforms,l,o),f=o.data;return f.setAll(p_(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(t,e,n,i):function(r,o,c){return Sa(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function _R(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=l_(i.transform,s||null);r!=null&&(n===null&&(n=Bt.empty()),n.set(i.field,r))}return n||null}function nm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Xs(i,s,(r,o)=>gR(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ko extends xc{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gi extends xc{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function p_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function im(t,e,n){const i=new Map;qe(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,mR(o,c,n[s]))}return i}function sm(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,pR(r,o,e))}return i}class m_ extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ER extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&IR(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Qr(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Qr(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=a_();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=n.has(s.key)?null:c;const l=h_(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Ee.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Oe())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(n,i)=>nm(n,i))&&Xs(this.baseMutations,e.baseMutations,(n,i)=>nm(n,i))}}class Gd{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){qe(e.mutations.length===i.length);let s=function(){return lR}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Gd(e,n,i,s)}}/**
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
 */var st,De;function TR(t){switch(t){default:return me();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function g_(t){if(t===void 0)return Qn("GRPC error has no .code"),$.UNKNOWN;switch(t){case st.OK:return $.OK;case st.CANCELLED:return $.CANCELLED;case st.UNKNOWN:return $.UNKNOWN;case st.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case st.INTERNAL:return $.INTERNAL;case st.UNAVAILABLE:return $.UNAVAILABLE;case st.UNAUTHENTICATED:return $.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case st.NOT_FOUND:return $.NOT_FOUND;case st.ALREADY_EXISTS:return $.ALREADY_EXISTS;case st.PERMISSION_DENIED:return $.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case st.ABORTED:return $.ABORTED;case st.OUT_OF_RANGE:return $.OUT_OF_RANGE;case st.UNIMPLEMENTED:return $.UNIMPLEMENTED;case st.DATA_LOSS:return $.DATA_LOSS;default:return me()}}(De=st||(st={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const SR=new Ri([4294967295,4294967295],0);function rm(t){const e=bR().encode(t),n=new qI;return n.update(e),new Uint8Array(n.digest())}function om(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ri([n,i],0),new Ri([s,r],0)]}class jd{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new xr(`Invalid padding: ${n}`);if(i<0)throw new xr(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new xr(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new xr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Ri.fromNumber(this.Te)}de(e,n,i){let s=e.add(n.multiply(Ri.fromNumber(i)));return s.compare(SR)===1&&(s=new Ri([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=rm(e),[i,s]=om(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ee(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new jd(r,s,n);return i.forEach(c=>o.insert(c)),o}insert(e){if(this.Te===0)return;const n=rm(e),[i,s]=om(n);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class xr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,xo.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Vc(Ee.min(),s,new Xe(Pe),Yn(),Oe())}}class xo{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new xo(i,n,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,i,s){this.Re=e,this.removedTargetIds=n,this.key=i,this.Ve=s}}class y_{constructor(e,n){this.targetId=e,this.me=n}}class I_{constructor(e,n,i=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class am{constructor(){this.fe=0,this.ge=cm(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Oe(),n=Oe(),i=Oe();return this.ge.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:me()}}),new xo(this.pe,this.ye,e,n,i)}Ce(){this.we=!1,this.ge=cm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class RR{constructor(e){this.Be=e,this.Le=new Map,this.ke=Yn(),this.qe=da(),this.Qe=da(),this.Ke=new Xe(Pe)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const i=this.ze(n);switch(e.state){case 0:this.je(n)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.je(n)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((i,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,i=e.me.count,s=this.Ye(n);if(s){const r=s.target;if(Su(r))if(i===0){const o=new de(r.path);this.We(n,o,Ot.newNoDocument(o,Ee.min()))}else qe(i===1);else{const o=this.Ze(n);if(o!==i){const c=this.Xe(e),l=c?this.et(c,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let o,c;try{o=Di(i).toUint8Array()}catch(l){if(l instanceof QI)return Ys("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new jd(o,s,r)}catch(l){return Ys(l instanceof xr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,n,i){return n.me.count===i-this.rt(e,n.targetId)?0:2}rt(e,n){const i=this.Be.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const o=this.Be.nt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.We(n,r,null),s++)}),s}it(e){const n=new Map;this.Le.forEach((r,o)=>{const c=this.Ye(o);if(c){if(r.current&&Su(c.target)){const l=new de(c.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,Ot.newNoDocument(l,e))}r.be&&(n.set(o,r.ve()),r.Ce())}});let i=Oe();this.Qe.forEach((r,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(i=i.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const s=new Vc(e,n,this.Ke,this.ke,i);return this.ke=Yn(),this.qe=da(),this.Qe=da(),this.Ke=new Xe(Pe),s}Ue(e,n){if(!this.je(e))return;const i=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,i){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new am,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ct(Pe),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(Pe),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new am),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function da(){return new Xe(de.comparator)}function cm(){return new Xe(de.comparator)}const CR={asc:"ASCENDING",desc:"DESCENDING"},OR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PR={and:"AND",or:"OR"};class NR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cu(t,e){return t.useProto3Json||Pc(e)?e:{value:e}}function Xa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function __(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DR(t,e){return Xa(t,e.toTimestamp())}function Sn(t){return qe(!!t),Ee.fromTimestamp(function(n){const i=Ni(n);return new at(i.seconds,i.nanos)}(t))}function Hd(t,e){return Ou(t,e).canonicalString()}function Ou(t,e){const n=function(s){return new Ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function E_(t){const e=Ze.fromString(t);return qe(b_(e)),e}function Pu(t,e){return Hd(t.databaseId,e.path)}function xl(t,e){const n=E_(e);if(n.get(1)!==t.databaseId.projectId)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(w_(n))}function A_(t,e){return Hd(t.databaseId,e)}function LR(t){const e=E_(t);return e.length===4?Ze.emptyPath():w_(e)}function Nu(t){return new Ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function w_(t){return qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lm(t,e,n){return{name:Pu(t,e),fields:n.value.mapValue.fields}}function MR(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(u,f){return u.useProto3Json?(qe(f===void 0||typeof f=="string"),_t.fromBase64String(f||"")):(qe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),_t.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?$.UNKNOWN:g_(u.code);return new ce(f,u.message||"")}(o);n=new I_(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=xl(t,i.document.name),r=Sn(i.document.updateTime),o=i.document.createTime?Sn(i.document.createTime):Ee.min(),c=new Bt({mapValue:{fields:i.document.fields}}),l=Ot.newFoundDocument(s,r,o,c),u=i.targetIds||[],f=i.removedTargetIds||[];n=new Ra(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=xl(t,i.document),r=i.readTime?Sn(i.readTime):Ee.min(),o=Ot.newNoDocument(s,r),c=i.removedTargetIds||[];n=new Ra([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=xl(t,i.document),r=i.removedTargetIds||[];n=new Ra([],r,s,null)}else{if(!("filter"in e))return me();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new vR(s,r),c=i.targetId;n=new y_(c,o)}}return n}function kR(t,e){let n;if(e instanceof ko)n={update:lm(t,e.key,e.value)};else if(e instanceof m_)n={delete:Pu(t,e.key)};else if(e instanceof Gi)n={update:lm(t,e.key,e.data),updateMask:jR(e.fieldMask)};else{if(!(e instanceof ER))return me();n={verify:Pu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const c=o.transform;if(c instanceof Qa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ya)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw me()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:DR(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:me()}(t,e.precondition)),n}function xR(t,e){return t&&t.length>0?(qe(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?Sn(s.updateTime):Sn(r);return o.isEqual(Ee.min())&&(o=Sn(r)),new yR(o,s.transformResults||[])}(n,e))):[]}function VR(t,e){return{documents:[A_(t,e.path)]}}function FR(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=A_(t,s);const r=function(u){if(u.length!==0)return T_(Pn.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Ms(m.field),direction:BR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Cu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function UR(t){let e=LR(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){qe(i===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];n.where&&(r=function(p){const m=v_(p);return m instanceof Pn&&ZI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Ka(ks(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Pc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,I=p.values||[];return new Wa(I,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,I=p.values||[];return new Wa(I,m)}(n.endAt)),iR(e,s,o,r,c,"F",l,u)}function qR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function v_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=ks(n.unaryFilter.field);return ot.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ks(n.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ks(n.unaryFilter.field);return ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pn.create(n.compositeFilter.filters.map(i=>v_(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function BR(t){return CR[t]}function zR(t){return OR[t]}function GR(t){return PR[t]}function Ms(t){return{fieldPath:t.canonicalString()}}function ks(t){return It.fromServerFormat(t.fieldPath)}function T_(t){return t instanceof ot?function(n){if(n.op==="=="){if(Yp(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NAN"}};if(Qp(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yp(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NAN"}};if(Qp(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(n.field),op:zR(n.op),value:n.value}}}(t):t instanceof Pn?function(n){const i=n.getFilters().map(s=>T_(s));return i.length===1?i[0]:{compositeFilter:{op:GR(n.op),filters:i}}}(t):me()}function jR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function b_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,i,s,r=Ee.min(),o=Ee.min(),c=_t.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.ht=e}}function $R(t){const e=UR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ru(e,e.limit,"L"):e}/**
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
 */class WR{constructor(){this.ln=new KR}addToCollectionParentIndex(e,n){return this.ln.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Pi.min())}updateCollectionGroup(e,n,i){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class KR{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new ct(Ze.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ct(Ze.comparator)).toArray()}}/**
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
 */const um={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ft{static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class er{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new er(0)}static Qn(){return new er(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm([t,e],[n,i]){const s=Pe(t,n);return s===0?Pe(e,i):s}class QR{constructor(e){this.Gn=e,this.buffer=new ct(dm),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();dm(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class YR{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fr(n)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await dr(n)}await this.Yn(3e5)})}}class XR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return z.resolve(Oc.oe);const i=new QR(n);return this.Zn.forEachTarget(e,s=>i.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>i.Hn(s))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.Zn.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(um)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),um):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let i,s,r,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(i=p,c=Date.now(),this.removeTargets(e,i,n))).next(p=>(r=p,l=Date.now(),this.removeOrphanedDocuments(e,i))).next(p=>(u=Date.now(),Ds()<=Ce.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
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
 */class ZR{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?z.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class t0{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Qr(i.mutation,s,Wt.empty(),at.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Oe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Oe()){const s=ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=kr();return r.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Oe()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,i,s){let r=Yn();const o=Kr(),c=function(){return Kr()}();return n.forEach((l,u)=>{const f=i.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Gi)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Qr(f.mutation,u,f.mutation.getFieldMask(),at.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return c.set(u,new e0(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const i=Kr();let s=new Xe((o,c)=>o-c),r=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=i.get(l)||Wt.empty();f=c.applyToLocalView(u,f),i.set(l,f);const p=(s.get(c.batchId)||Oe()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=a_();f.forEach(m=>{if(!r.has(m)){const I=h_(n.get(m),i.get(m));I!==null&&p.set(m,I),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return z.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):z.resolve(ns());let c=-1,l=r;return o.next(u=>z.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),r.get(f)?z.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,l,u,Oe())).next(f=>({batchId:c,changes:o_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(i=>{let s=kr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const r=n.collectionGroup;let o=kr();return this.indexManager.getCollectionParents(e,r).next(c=>z.forEach(c,l=>{const u=function(p,m){return new Dc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r,s))).next(o=>{r.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Ot.newInvalidDocument(f)))});let c=kr();return o.forEach((l,u)=>{const f=r.get(l);f!==void 0&&Qr(f.mutation,u,Wt.empty(),at.now()),Mc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return z.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Sn(s.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:$R(s.bundledQuery),readTime:Sn(s.readTime)}}(n)),z.resolve()}}/**
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
 */class i0{constructor(){this.overlays=new Xe(de.comparator),this.dr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const i=ns();return z.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.Tt(e,n,r)}),z.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.dr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.dr.delete(i)),z.resolve()}getOverlaysForCollection(e,n,i){const s=ns(),r=n.length+1,o=new de(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Xe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let f=r.get(u.largestBatchId);f===null&&(f=ns(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=ns(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return z.resolve(c)}Tt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.dr.get(s.largestBatchId).delete(i.key);this.dr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new wR(n,i));let r=this.dr.get(n);r===void 0&&(r=Oe(),this.dr.set(n,r)),this.dr.set(n,r.add(i.key))}}/**
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
 */class s0{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.Er=new ct(ut.Ar),this.Rr=new ct(ut.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const i=new ut(e,n);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.gr(new ut(e,n))}pr(e,n){e.forEach(i=>this.removeReference(i,n))}yr(e){const n=new de(new Ze([])),i=new ut(n,e),s=new ut(n,e+1),r=[];return this.Rr.forEachInRange([i,s],o=>{this.gr(o),r.push(o.key)}),r}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new de(new Ze([])),i=new ut(n,e),s=new ut(n,e+1);let r=Oe();return this.Rr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ut(e,0),i=this.Er.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ut{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return de.comparator(e.key,n.key)||Pe(e.br,n.br)}static Vr(e,n){return Pe(e.br,n.br)||de.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ct(ut.Ar)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AR(r,n,i,s);this.mutationQueue.push(o);for(const c of s)this.vr=this.vr.add(new ut(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Fr(i),r=s<0?0:s;return z.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),r=[];return this.vr.forEachInRange([i,s],o=>{const c=this.Cr(o.br);r.push(c)}),z.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ct(Pe);return n.forEach(s=>{const r=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([r,o],c=>{i=i.add(c.br)})}),z.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;de.isDocumentKey(r)||(r=r.child(""));const o=new ut(new de(r),0);let c=new ct(Pe);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.br)),!0)},o),z.resolve(this.Mr(c))}Mr(e){const n=[];return e.forEach(i=>{const s=this.Cr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){qe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return z.forEach(n.mutations,s=>{const r=new ut(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,n){const i=new ut(n,0),s=this.vr.firstAfterOrEqual(i);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.Nr=e,this.docs=function(){return new Xe(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return z.resolve(i?i.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let i=Yn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ot.newInvalidDocument(s))}),z.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Yn();const o=n.path,c=new de(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xS(kS(f),i)<=0||(s.has(f.key)||Mc(n,f))&&(r=r.insert(f.key,f.mutableCopy()))}return z.resolve(r)}getAllFromCollectionGroup(e,n,i,s){me()}Br(e,n){return z.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new a0(this)}getSize(e){return z.resolve(this.size)}}class a0 extends ZR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(i)}),z.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.persistence=e,this.Lr=new ws(n=>Ud(n),qd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.kr=0,this.qr=new $d,this.targetCount=0,this.Qr=er.qn()}forEachTarget(e,n){return this.Lr.forEach((i,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.kr&&(this.kr=n),z.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new er(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Un(n),z.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Lr.forEach((o,c)=>{c.sequenceNumber<=n&&i.get(c.targetId)===null&&(this.Lr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),z.waitFor(r).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const i=this.Lr.get(n)||null;return z.resolve(i)}addMatchingKeys(e,n,i){return this.qr.mr(n,i),z.resolve()}removeMatchingKeys(e,n,i){this.qr.pr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const i=this.qr.Sr(n);return z.resolve(i)}containsKey(e,n){return z.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Oc(0),this.Ur=!1,this.Ur=!0,this.Wr=new s0,this.referenceDelegate=e(this),this.Gr=new c0(this),this.indexManager=new WR,this.remoteDocumentCache=function(s){return new o0(s)}(i=>this.referenceDelegate.zr(i)),this.serializer=new HR(n),this.jr=new n0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new i0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Kr[e.toKey()];return i||(i=new r0(n,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,i){ne("MemoryPersistence","Starting transaction:",e);const s=new l0(this.$r.next());return this.referenceDelegate.Hr(),i(s).next(r=>this.referenceDelegate.Jr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Yr(e,n){return z.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,n)))}}class l0 extends FS{constructor(e){super(),this.currentSequenceNumber=e}}class Wd{constructor(e){this.persistence=e,this.Zr=new $d,this.Xr=null}static ei(e){return new Wd(e)}get ti(){if(this.Xr)return this.Xr;throw me()}addReference(e,n,i){return this.Zr.addReference(i,n),this.ti.delete(i.toString()),z.resolve()}removeReference(e,n,i){return this.Zr.removeReference(i,n),this.ti.add(i.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),z.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.ti.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ti,i=>{const s=de.fromPath(i);return this.ni(e,s).next(r=>{r||n.removeEntry(s,Ee.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(i=>{i?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return z.or([()=>z.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Ja{constructor(e,n){this.persistence=e,this.ri=new ws(i=>BS(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=JR(this,n)}static ei(e,n){return new Ja(e,n)}Hr(){}Jr(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(s=>i+s))}nr(e){let n=0;return this.er(e,i=>{n++}).next(()=>n)}er(e,n){return z.forEach(this.ri,(i,s)=>this.ir(e,i,s).next(r=>r?z.resolve():n(s)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.Br(e,o=>this.ir(e,o,n).next(c=>{c||(i++,r.removeEntry(o,Ee.min()))})).next(()=>r.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.ri.set(i,e.currentSequenceNumber),z.resolve()}removeReference(e,n,i){return this.ri.set(i,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),z.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ta(e.data.value)),n}ir(e,n,i){return z.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return z.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Wi=i,this.Gi=s}static zi(e,n){let i=Oe(),s=Oe();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Kd(e,n.fromCache,i,s)}}/**
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
 */class d0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Hv()?8:US(Pt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,i,s){const r={result:null};return this.Xi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.es(e,n,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new u0;return this.ts(e,n,o).next(c=>{if(r.result=c,this.Hi)return this.ns(e,n,o,c.size)})}).next(()=>r.result)}ns(e,n,i,s){return i.documentReadCount<this.Ji?(Ds()<=Ce.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),z.resolve()):(Ds()<=Ce.DEBUG&&ne("QueryEngine","Query:",Ls(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Yi*s?(Ds()<=Ce.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):z.resolve())}Xi(e,n){if(em(n))return z.resolve(null);let i=Tn(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ru(n,null,"F"),i=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Oe(...r);return this.Zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,i).next(l=>{const u=this.rs(n,c);return this.ss(n,u,o,l.readTime)?this.Xi(e,Ru(n,null,"F")):this.os(e,u,n,l)}))})))}es(e,n,i,s){return em(n)||s.isEqual(Ee.min())?z.resolve(null):this.Zi.getDocuments(e,i).next(r=>{const o=this.rs(n,r);return this.ss(n,o,i,s)?z.resolve(null):(Ds()<=Ce.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ls(n)),this.os(e,o,n,MS(s,-1)).next(c=>c))})}rs(e,n){let i=new ct(s_(e));return n.forEach((s,r)=>{Mc(e,r)&&(i=i.add(r))}),i}ss(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ts(e,n,i){return Ds()<=Ce.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Ls(n)),this.Zi.getDocumentsMatchingQuery(e,n,Pi.min(),i)}os(e,n,i,s){return this.Zi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,i,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Xe(Pe),this.cs=new ws(r=>Ud(r),qd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new t0(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function h0(t,e,n,i){return new f0(t,e,n,i)}async function R_(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Ps(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],c=[];let l=Oe();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of r){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(i,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:c}))})})}function p0(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let I=z.resolve();return m.forEach(R=>{I=I.next(()=>f.getEntry(l,R)).next(L=>{const D=u.docVersions.get(R);qe(D!==null),L.version.compareTo(D)<0&&(p.applyToRemoteDocument(L,u),L.isValidDocument()&&(L.setReadTime(u.commitVersion),f.addEntry(L)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let l=Oe();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function C_(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function m0(t,e){const n=we(t),i=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Gr.removeMatchingKeys(r,f.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(r,f.addedDocuments,p)));let I=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(_t.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,i)),s=s.insert(p,I),function(L,D,N){return L.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,I,f)&&c.push(n.Gr.updateTargetData(r,I))});let l=Yn(),u=Oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(r,f))}),c.push(g0(r,o,e.documentUpdates).next(f=>{l=f.Is,u=f.ds})),!i.isEqual(Ee.min())){const f=n.Gr.getLastRemoteSnapshotVersion(r).next(p=>n.Gr.setTargetsMetadata(r,r.currentSequenceNumber,i));c.push(f)}return z.waitFor(c).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(n.us=s,r))}function g0(t,e,n){let i=Oe(),s=Oe();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Yn();return n.forEach((c,l)=>{const u=r.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Ee.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ne("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Is:o,ds:s}})}function y0(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function I0(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Gr.getTargetData(i,e).next(r=>r?(s=r,z.resolve(s)):n.Gr.allocateTargetId(i).next(o=>(s=new Ai(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Gr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.us.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(i.targetId,i),n.cs.set(e,i.targetId)),i})}async function Du(t,e,n){const i=we(t),s=i.us.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fr(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.us=i.us.remove(e),i.cs.delete(s.target)}function fm(t,e,n){const i=we(t);let s=Ee.min(),r=Oe();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=we(l),m=p.cs.get(f);return m!==void 0?z.resolve(p.us.get(m)):p.Gr.getTargetData(u,f)}(i,o,Tn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{r=l})}).next(()=>i._s.getDocumentsMatchingQuery(o,e,n?s:Ee.min(),n?r:Oe())).next(c=>(_0(i,oR(e),c),{documents:c,Es:r})))}function _0(t,e,n){let i=t.ls.get(e)||Ee.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.ls.set(e,i)}class hm{constructor(){this.activeTargetIds=fR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E0{constructor(){this._o=new hm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,i){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new hm,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fa=null;function Vl(){return fa===null?fa=function(){return 268435456+Math.round(2147483648*Math.random())}():fa++,"0x"+fa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const bt="WebChannelConnection";class T0 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+n.host,this.Mo=`projects/${s}/databases/${r}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Oo(n,i,s,r,o){const c=Vl(),l=this.No(n,i.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,r,o),this.Lo(n,l,u,s).then(f=>(ne("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw Ys("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}ko(n,i,s,r,o,c){return this.Oo(n,i,s,r,o)}Bo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ur}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}No(n,i){const s=w0[n];return`${this.Fo}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,i,s){const r=Vl();return new Promise((o,c)=>{const l=new BI;l.setWithCredentials(!0),l.listenOnce(zI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case va.NO_ERROR:const f=l.getResponseJson();ne(bt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),o(f);break;case va.TIMEOUT:ne(bt,`RPC '${e}' ${r} timed out`),c(new ce($.DEADLINE_EXCEEDED,"Request time out"));break;case va.HTTP_ERROR:const p=l.getStatus();if(ne(bt,`RPC '${e}' ${r} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const R=function(D){const N=D.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(N)>=0?N:$.UNKNOWN}(I.status);c(new ce(R,I.message))}else c(new ce($.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ce($.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ne(bt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(s);ne(bt,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",u,i,15)})}qo(e,n,i){const s=Vl(),r=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=HI(),c=jI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Bo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const f=r.join("");ne(bt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let m=!1,I=!1;const R=new v0({Eo:D=>{I?ne(bt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(ne(bt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ne(bt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Ao:()=>p.close()}),L=(D,N,O)=>{D.listen(N,x=>{try{O(x)}catch(q){setTimeout(()=>{throw q},0)}})};return L(p,Mr.EventType.OPEN,()=>{I||(ne(bt,`RPC '${e}' stream ${s} transport opened.`),R.So())}),L(p,Mr.EventType.CLOSE,()=>{I||(I=!0,ne(bt,`RPC '${e}' stream ${s} transport closed`),R.Do())}),L(p,Mr.EventType.ERROR,D=>{I||(I=!0,Ys(bt,`RPC '${e}' stream ${s} transport errored:`,D),R.Do(new ce($.UNAVAILABLE,"The operation could not be completed")))}),L(p,Mr.EventType.MESSAGE,D=>{var N;if(!I){const O=D.data[0];qe(!!O);const x=O,q=(x==null?void 0:x.error)||((N=x[0])===null||N===void 0?void 0:N.error);if(q){ne(bt,`RPC '${e}' stream ${s} received error:`,q);const j=q.status;let V=function(g){const w=st[g];if(w!==void 0)return g_(w)}(j),v=q.message;V===void 0&&(V=$.INTERNAL,v="Unknown error status: "+j+" with message "+q.message),I=!0,R.Do(new ce(V,v)),p.close()}else ne(bt,`RPC '${e}' stream ${s} received:`,O),R.vo(O)}}),L(c,GI.STAT_EVENT,D=>{D.stat===wu.PROXY?ne(bt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===wu.NOPROXY&&ne(bt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.bo()},0),R}}function Fl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){return new NR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,i=1e3,s=1.5,r=6e4){this.li=e,this.timerId=n,this.Qo=i,this.Ko=s,this.$o=r,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-i);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,i,s,r,o,c,l){this.li=e,this.Yo=i,this.Zo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new O_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Xo===n&&this.I_(i,s)},i=>{e(()=>{const s=new ce($.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(s)})})}I_(e,n){const i=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{i(()=>this.d_(s))}),this.stream.onMessage(s=>{i(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class b0 extends P_{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=MR(this.serializer,e),i=function(r){if(!("targetChange"in r))return Ee.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Ee.min():o.readTime?Sn(o.readTime):Ee.min()}(e);return this.listener.R_(n,i)}V_(e){const n={};n.database=Nu(this.serializer),n.addTarget=function(r,o){let c;const l=o.target;if(c=Su(l)?{documents:VR(r,l)}:{query:FR(r,l).ct},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=__(r,o.resumeToken);const u=Cu(r,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ee.min())>0){c.readTime=Xa(r,o.snapshotVersion.toTimestamp());const u=Cu(r,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const i=qR(this.serializer,e);i&&(n.labels=i),this.c_(n)}m_(e){const n={};n.database=Nu(this.serializer),n.removeTarget=e,this.c_(n)}}class S0 extends P_{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return qe(!!e.streamToken),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=xR(e.writeResults,e.commitTime),i=Sn(e.commitTime);return this.listener.y_(i,n)}w_(){const e={};e.database=Nu(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>kR(this.serializer,i))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0 extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Oo(e,Ou(n,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ce($.UNKNOWN,r.toString())})}ko(e,n,i,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.ko(e,Ou(n,i),s,o,c,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce($.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class C0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Qn(n),this.C_=!1):ne("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=r,this.Q_.uo(o=>{i.enqueueAndForget(async()=>{vs(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=we(l);u.k_.add(4),await Vo(u),u.K_.set("Unknown"),u.k_.delete(4),await Uc(u)}(this))})}),this.K_=new C0(i,s)}}async function Uc(t){if(vs(t))for(const e of t.q_)await e(!0)}async function Vo(t){for(const e of t.q_)await e(!1)}function N_(t,e){const n=we(t);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),Jd(n)?Xd(n):hr(n).s_()&&Yd(n,e))}function Qd(t,e){const n=we(t),i=hr(n);n.L_.delete(e),i.s_()&&D_(n,e),n.L_.size===0&&(i.s_()?i.a_():vs(n)&&n.K_.set("Unknown"))}function Yd(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hr(t).V_(e)}function D_(t,e){t.U_.xe(e),hr(t).m_(e)}function Xd(t){t.U_=new RR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.L_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),hr(t).start(),t.K_.F_()}function Jd(t){return vs(t)&&!hr(t).i_()&&t.L_.size>0}function vs(t){return we(t).k_.size===0}function L_(t){t.U_=void 0}async function P0(t){t.K_.set("Online")}async function N0(t){t.L_.forEach((e,n)=>{Yd(t,e)})}async function D0(t,e){L_(t),Jd(t)?(t.K_.O_(e),Xd(t)):t.K_.set("Unknown")}async function L0(t,e,n){if(t.K_.set("Online"),e instanceof I_&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const c of r.targetIds)s.L_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.L_.delete(c),s.U_.removeTarget(c))}(t,e)}catch(i){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Za(t,i)}else if(e instanceof Ra?t.U_.$e(e):e instanceof y_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Ee.min()))try{const i=await C_(t.localStore);n.compareTo(i)>=0&&await function(r,o){const c=r.U_.it(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=r.L_.get(u);f&&r.L_.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=r.L_.get(l);if(!f)return;r.L_.set(l,f.withResumeToken(_t.EMPTY_BYTE_STRING,f.snapshotVersion)),D_(r,l);const p=new Ai(f.target,l,u,f.sequenceNumber);Yd(r,p)}),r.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(i){ne("RemoteStore","Failed to raise snapshot:",i),await Za(t,i)}}async function Za(t,e,n){if(!fr(e))throw e;t.k_.add(1),await Vo(t),t.K_.set("Offline"),n||(n=()=>C_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Uc(t)})}function M_(t,e){return e().catch(n=>Za(t,n,e))}async function qc(t){const e=we(t),n=Mi(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;M0(e);)try{const s=await y0(e.localStore,i);if(s===null){e.B_.length===0&&n.a_();break}i=s.batchId,k0(e,s)}catch(s){await Za(e,s)}k_(e)&&x_(e)}function M0(t){return vs(t)&&t.B_.length<10}function k0(t,e){t.B_.push(e);const n=Mi(t);n.s_()&&n.f_&&n.g_(e.mutations)}function k_(t){return vs(t)&&!Mi(t).i_()&&t.B_.length>0}function x_(t){Mi(t).start()}async function x0(t){Mi(t).w_()}async function V0(t){const e=Mi(t);for(const n of t.B_)e.g_(n.mutations)}async function F0(t,e,n){const i=t.B_.shift(),s=Gd.from(i,e,n);await M_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qc(t)}async function U0(t,e){e&&Mi(t).f_&&await async function(i,s){if(function(o){return TR(o)&&o!==$.ABORTED}(s.code)){const r=i.B_.shift();Mi(i).__(),await M_(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await qc(i)}}(t,e),k_(t)&&x_(t)}async function mm(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const i=vs(n);n.k_.add(3),await Vo(n),i&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Uc(n)}async function q0(t,e){const n=we(t);e?(n.k_.delete(2),await Uc(n)):e||(n.k_.add(2),await Vo(n),n.K_.set("Unknown"))}function hr(t){return t.W_||(t.W_=function(n,i,s){const r=we(n);return r.b_(),new b0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Ro:P0.bind(null,t),mo:N0.bind(null,t),po:D0.bind(null,t),R_:L0.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Jd(t)?Xd(t):t.K_.set("Unknown")):(await t.W_.stop(),L_(t))})),t.W_}function Mi(t){return t.G_||(t.G_=function(n,i,s){const r=we(n);return r.b_(),new S0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:x0.bind(null,t),po:U0.bind(null,t),p_:V0.bind(null,t),y_:F0.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await qc(t)):(await t.G_.stop(),t.B_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,c=new Zd(e,n,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ef(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),fr(t))return new ce($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{static emptySet(e){return new Hs(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||de.comparator(n.key,i.key):(n,i)=>de.comparator(n.key,i.key),this.keyedMap=kr(),this.sortedSet=new Xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Hs;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.z_=new Xe(de.comparator)}track(e){const n=e.doc.key,i=this.z_.get(n);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(n,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(n):e.type===1&&i.type===2?this.z_=this.z_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):me():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,i)=>{e.push(i)}),e}}class tr{constructor(e,n,i,s,r,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new tr(e,n,Hs.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class z0{constructor(){this.queries=ym(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,i){const s=we(n),r=s.queries;s.queries=ym(),r.forEach((o,c)=>{for(const l of c.J_)l.onError(i)})})(this,new ce($.ABORTED,"Firestore shutting down"))}}function ym(){return new ws(t=>i_(t),Lc)}async function G0(t,e){const n=we(t);let i=3;const s=e.query;let r=n.queries.get(s);r?!r.Y_()&&e.Z_()&&(i=2):(r=new B0,i=e.Z_()?0:1);try{switch(i){case 0:r.H_=await n.onListen(s,!0);break;case 1:r.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=ef(o,`Initialization of query '${Ls(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,r),r.J_.push(e),e.ea(n.onlineState),r.H_&&e.ta(r.H_)&&tf(n)}async function j0(t,e){const n=we(t),i=e.query;let s=3;const r=n.queries.get(i);if(r){const o=r.J_.indexOf(e);o>=0&&(r.J_.splice(o,1),r.J_.length===0?s=e.Z_()?0:1:!r.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function H0(t,e){const n=we(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const c of o.J_)c.ta(s)&&(i=!0);o.H_=s}}i&&tf(n)}function $0(t,e,n){const i=we(t),s=i.queries.get(e);if(s)for(const r of s.J_)r.onError(n);i.queries.delete(e)}function tf(t){t.X_.forEach(e=>{e.next()})}var Lu,Im;(Im=Lu||(Lu={})).na="default",Im.Cache="cache";class W0{constructor(e,n,i){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new tr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const i=n!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=tr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Lu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.key=e}}class F_{constructor(e){this.key=e}}class K0{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Oe(),this.mutatedKeys=Oe(),this.Va=s_(e),this.ma=new Hs(this.Va)}get fa(){return this.Ea}ga(e,n){const i=n?n.pa:new gm,s=n?n.ma:this.ma;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),I=Mc(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),L=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;m&&I?m.data.isEqual(I.data)?R!==L&&(i.track({type:3,doc:I}),D=!0):this.ya(m,I)||(i.track({type:2,doc:I}),D=!0,(l&&this.Va(I,l)>0||u&&this.Va(I,u)<0)&&(c=!0)):!m&&I?(i.track({type:0,doc:I}),D=!0):m&&!I&&(i.track({type:1,doc:m}),D=!0,(l||u)&&(c=!0)),D&&(I?(o=o.add(I),r=L?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),i.track({type:1,doc:f})}return{ma:o,pa:i,ss:c,mutatedKeys:r}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){const r=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((f,p)=>function(I,R){const L=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return L(I)-L(R)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(i),s=s!=null&&s;const c=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new tr(this.query,e.ma,r,o,e.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new gm,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Oe(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const n=[];return e.forEach(i=>{this.Ra.has(i)||n.push(new F_(i))}),this.Ra.forEach(i=>{e.has(i)||n.push(new V_(i))}),n}va(e){this.Ea=e.Es,this.Ra=Oe();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return tr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Q0{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class Y0{constructor(e){this.key=e,this.Fa=!1}}class X0{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new ws(c=>i_(c),Lc),this.Oa=new Map,this.Na=new Set,this.Ba=new Xe(de.comparator),this.La=new Map,this.ka=new $d,this.qa={},this.Qa=new Map,this.Ka=er.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function J0(t,e,n=!0){const i=j_(t);let s;const r=i.xa.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.Ca()):s=await U_(i,e,n,!0),s}async function Z0(t,e){const n=j_(t);await U_(n,e,!0,!1)}async function U_(t,e,n,i){const s=await I0(t.localStore,Tn(e)),r=s.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let c;return i&&(c=await eC(t,e,r,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&N_(t.remoteStore,s),c}async function eC(t,e,n,i,s){t.Ua=(p,m,I)=>async function(L,D,N,O){let x=D.view.ga(N);x.ss&&(x=await fm(L.localStore,D.query,!1).then(({documents:v})=>D.view.ga(v,x)));const q=O&&O.targetChanges.get(D.targetId),j=O&&O.targetMismatches.get(D.targetId)!=null,V=D.view.applyChanges(x,L.isPrimaryClient,q,j);return Em(L,D.targetId,V.ba),V.snapshot}(t,p,m,I);const r=await fm(t.localStore,e,!0),o=new K0(e,r.Es),c=o.ga(r.documents),l=xo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Em(t,n,u.ba);const f=new Q0(e,n,o);return t.xa.set(e,f),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function tC(t,e,n){const i=we(t),s=i.xa.get(e),r=i.Oa.get(s.targetId);if(r.length>1)return i.Oa.set(s.targetId,r.filter(o=>!Lc(o,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Du(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&Qd(i.remoteStore,s.targetId),Mu(i,s.targetId)}).catch(dr)):(Mu(i,s.targetId),await Du(i.localStore,s.targetId,!0))}async function nC(t,e){const n=we(t),i=n.xa.get(e),s=n.Oa.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Qd(n.remoteStore,i.targetId))}async function iC(t,e,n){const i=uC(t);try{const s=await function(o,c){const l=we(o),u=at.now(),f=c.reduce((I,R)=>I.add(R.key),Oe());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Yn(),L=Oe();return l.hs.getEntries(I,f).next(D=>{R=D,R.forEach((N,O)=>{O.isValidDocument()||(L=L.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(I,R)).next(D=>{p=D;const N=[];for(const O of c){const x=_R(O,p.get(O.key).overlayedDocument);x!=null&&N.push(new Gi(O.key,x,YI(x.value.mapValue),bn.exists(!0)))}return l.mutationQueue.addMutationBatch(I,u,N,c)}).next(D=>{m=D;const N=D.applyToLocalDocumentSet(p,L);return l.documentOverlayCache.saveOverlays(I,D.batchId,N)})}).then(()=>({batchId:m.batchId,changes:o_(p)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.qa[o.currentUser.toKey()];u||(u=new Xe(Pe)),u=u.insert(c,l),o.qa[o.currentUser.toKey()]=u}(i,s.batchId,n),await Fo(i,s.changes),await qc(i.remoteStore)}catch(s){const r=ef(s,"Failed to persist write");n.reject(r)}}async function q_(t,e){const n=we(t);try{const i=await m0(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.La.get(r);o&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?qe(o.Fa):s.removedDocuments.size>0&&(qe(o.Fa),o.Fa=!1))}),await Fo(n,i,e)}catch(i){await dr(i)}}function _m(t,e,n){const i=we(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.xa.forEach((r,o)=>{const c=o.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=we(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.J_)m.ea(c)&&(u=!0)}),u&&tf(l)}(i.eventManager,e),s.length&&i.Ma.R_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function sC(t,e,n){const i=we(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.La.get(e),r=s&&s.key;if(r){let o=new Xe(de.comparator);o=o.insert(r,Ot.newNoDocument(r,Ee.min()));const c=Oe().add(r),l=new Vc(Ee.min(),new Map,new Xe(Pe),o,c);await q_(i,l),i.Ba=i.Ba.remove(r),i.La.delete(e),nf(i)}else await Du(i.localStore,e,!1).then(()=>Mu(i,e,n)).catch(dr)}async function rC(t,e){const n=we(t),i=e.batch.batchId;try{const s=await p0(n.localStore,e);z_(n,i,null),B_(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Fo(n,s)}catch(s){await dr(s)}}async function oC(t,e,n){const i=we(t);try{const s=await function(o,c){const l=we(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(qe(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(i.localStore,e);z_(i,e,n),B_(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Fo(i,s)}catch(s){await dr(s)}}function B_(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function z_(t,e,n){const i=we(t);let s=i.qa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.qa[i.currentUser.toKey()]=s}}function Mu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Oa.get(e))t.xa.delete(i),n&&t.Ma.Wa(i,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(i=>{t.ka.containsKey(i)||G_(t,i)})}function G_(t,e){t.Na.delete(e.path.canonicalString());const n=t.Ba.get(e);n!==null&&(Qd(t.remoteStore,n),t.Ba=t.Ba.remove(e),t.La.delete(n),nf(t))}function Em(t,e,n){for(const i of n)i instanceof V_?(t.ka.addReference(i.key,e),aC(t,i)):i instanceof F_?(ne("SyncEngine","Document no longer in limbo: "+i.key),t.ka.removeReference(i.key,e),t.ka.containsKey(i.key)||G_(t,i.key)):me()}function aC(t,e){const n=e.key,i=n.path.canonicalString();t.Ba.get(n)||t.Na.has(i)||(ne("SyncEngine","New document in limbo: "+n),t.Na.add(i),nf(t))}function nf(t){for(;t.Na.size>0&&t.Ba.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new de(Ze.fromString(e)),i=t.Ka.next();t.La.set(i,new Y0(n)),t.Ba=t.Ba.insert(n,i),N_(t.remoteStore,new Ai(Tn(Bd(n.path)),i,"TargetPurposeLimboResolution",Oc.oe))}}async function Fo(t,e,n){const i=we(t),s=[],r=[],o=[];i.xa.isEmpty()||(i.xa.forEach((c,l)=>{o.push(i.Ua(l,e,n).then(u=>{var f;if((u||n)&&i.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Kd.zi(l.targetId,u);r.push(p)}}))}),await Promise.all(o),i.Ma.R_(s),await async function(l,u){const f=we(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>z.forEach(u,m=>z.forEach(m.Wi,I=>f.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>z.forEach(m.Gi,I=>f.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!fr(p))throw p;ne("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const I=f.us.get(m),R=I.snapshotVersion,L=I.withLastLimboFreeSnapshotVersion(R);f.us=f.us.insert(m,L)}}}(i.localStore,r))}async function cC(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const i=await R_(n.localStore,e);n.currentUser=e,function(r,o){r.Qa.forEach(c=>{c.forEach(l=>{l.reject(new ce($.CANCELLED,o))})}),r.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Fo(n,i.Ts)}}function lC(t,e){const n=we(t),i=n.La.get(e);if(i&&i.Fa)return Oe().add(i.key);{let s=Oe();const r=n.Oa.get(e);if(!r)return s;for(const o of r){const c=n.xa.get(o);s=s.unionWith(c.view.fa)}return s}}function j_(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=q_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sC.bind(null,e),e.Ma.R_=H0.bind(null,e.eventManager),e.Ma.Wa=$0.bind(null,e.eventManager),e}function uC(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oC.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return h0(this.persistence,new d0,e.initialUser,this.serializer)}ja(e){return new S_(Wd.ei,this.serializer)}za(e){return new E0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class dC extends ec{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){qe(this.persistence.referenceDelegate instanceof Ja);const i=this.persistence.referenceDelegate.garbageCollector;return new YR(i,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new S_(i=>Ja.ei(i,n),this.serializer)}}class ku{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>_m(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=cC.bind(null,this.syncEngine),await q0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new z0}()}createDatastore(e){const n=Fc(e.databaseInfo.databaseId),i=function(r){return new T0(r)}(e.databaseInfo);return function(r,o,c,l){return new R0(r,o,c,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,c){return new O0(i,s,r,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>_m(this.syncEngine,n,0),function(){return pm.p()?new pm:new A0}())}createSyncEngine(e,n){return function(s,r,o,c,l,u,f){const p=new X0(s,r,o,c,l,u);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const r=we(s);ne("RemoteStore","RemoteStore shutting down."),r.k_.add(5),await Vo(r),r.Q_.shutdown(),r.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ku.provider={build:()=>new ku};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,i,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=WI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=ef(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ul(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await R_(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Am(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pC(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>mm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>mm(e.remoteStore,s)),t._onlineComponents=e}async function pC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ys("Error using user provided cache. Falling back to memory cache: "+n),await Ul(t,new ec)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await Ul(t,new dC(void 0));return t._offlineComponents}async function H_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await Am(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await Am(t,new ku))),t._onlineComponents}function mC(t){return H_(t).then(e=>e.syncEngine)}async function gC(t){const e=await H_(t),n=e.eventManager;return n.onListen=J0.bind(null,e.syncEngine),n.onUnlisten=tC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Z0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nC.bind(null,e.syncEngine),n}function yC(t,e,n={}){const i=new Ci;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,c,l,u){const f=new fC({next:m=>{f.eu(),o.enqueueAndForget(()=>j0(r,p));const I=m.docs.has(c);!I&&m.fromCache?u.reject(new ce($.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&l&&l.source==="server"?u.reject(new ce($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new W0(Bd(c.path),f,{includeMetadataChanges:!0,ua:!0});return G0(r,p)}(await gC(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function $_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t,e,n){if(!n)throw new ce($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _C(t,e,n,i){if(e===!0&&i===!0)throw new ce($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vm(t){if(!de.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function hs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sf(t);throw new ce($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ce($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_C("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$_((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rf{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tm(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new bS;switch(i.type){case"firstParty":return new OS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ce($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=wm.get(n);i&&(ne("ComponentProvider","Removing Datastore"),wm.delete(n),i.terminate())}(this),Promise.resolve()}}function EC(t,e,n,i={}){var s;const r=(t=hs(t,rf))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let c,l;if(typeof i.mockUserToken=="string")c=i.mockUserToken,l=St.MOCK_USER;else{c=Uv(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new ce($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new St(u)}t._authCredentials=new SS(new $I(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new of(this.firestore,e,this._query)}}class Kt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ao(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class Ao extends of{constructor(e,n,i){super(e,n,Bd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new de(e))}withConverter(e){return new Ao(this.firestore,e,this._path)}}function ql(t,e,...n){if(t=lt(t),arguments.length===1&&(e=WI.newId()),IC("doc","path",e),t instanceof rf){const i=Ze.fromString(e,...n);return vm(i),new Kt(t,null,new de(i))}{if(!(t instanceof Kt||t instanceof Ao))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ze.fromString(e,...n));return vm(i),new Kt(t.firestore,t instanceof Ao?t.converter:null,new de(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new O_(this,"async_queue_retry"),this.fu=()=>{const i=Fl();i&&ne("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const n=Fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Ci;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!fr(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(i);throw Qn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ru=!1,i))));return this.gu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Zd.createAndSchedule(this,e,n,i,r=>this.Su(r));return this.Eu.push(s),s}pu(){this.Au&&me()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class Bc extends rf{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new bm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bm(e),this._firestoreClient=void 0,await e}}}function AC(t,e){const n=typeof t=="object"?t:Sd(),i=typeof t=="string"?t:"(default)",s=Es(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Vv("firestore");r&&EC(s,...r)}return s}function W_(t){if(t._terminated)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||wC(t),t._firestoreClient}function wC(t){var e,n,i;const s=t._freezeSettings(),r=function(c,l,u,f){return new jS(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new hC(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nr(_t.fromBase64String(e))}catch(n){throw new ce($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new nr(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */class lf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=/^__.*__$/;class TC{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Gi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ko(e,this.data,n,this.fieldTransforms)}}class K_{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Gi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Q_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class uf{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Fu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:i,Nu:!1});return s.Bu(e),s}Lu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:i,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return tc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Q_(this.Mu)&&vC.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class bC{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Fc(e)}$u(e,n,i,s=!1){return new uf({Mu:e,methodName:n,Ku:i,path:It.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Y_(t){const e=t._freezeSettings(),n=Fc(t._databaseId);return new bC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function SC(t,e,n,i,s,r={}){const o=t.$u(r.merge||r.mergeFields?2:0,e,n,s);df("Data must be an object, but it was:",o,i);const c=X_(i,o);let l,u;if(r.merge)l=new Wt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=xu(e,p,n);if(!o.contains(m))throw new ce($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Z_(f,m)||f.push(m)}l=new Wt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new TC(new Bt(c),l,u)}class Gc extends af{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gc}}function RC(t,e,n,i){const s=t.$u(1,e,n);df("Data must be an object, but it was:",s,i);const r=[],o=Bt.empty();zi(i,(l,u)=>{const f=ff(e,l,n);u=lt(u);const p=s.Lu(f);if(u instanceof Gc)r.push(f);else{const m=jc(u,p);m!=null&&(r.push(f),o.set(f,m))}});const c=new Wt(r);return new K_(o,c,s.fieldTransforms)}function CC(t,e,n,i,s,r){const o=t.$u(1,e,n),c=[xu(e,i,n)],l=[s];if(r.length%2!=0)throw new ce($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)c.push(xu(e,r[m])),l.push(r[m+1]);const u=[],f=Bt.empty();for(let m=c.length-1;m>=0;--m)if(!Z_(u,c[m])){const I=c[m];let R=l[m];R=lt(R);const L=o.Lu(I);if(R instanceof Gc)u.push(I);else{const D=jc(R,L);D!=null&&(u.push(I),f.set(I,D))}}const p=new Wt(u);return new K_(f,p,o.fieldTransforms)}function jc(t,e){if(J_(t=lt(t)))return df("Unsupported field value:",e,t),X_(t,e);if(t instanceof af)return function(i,s){if(!Q_(s.Mu))throw s.qu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const c of i){let l=jc(c,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=lt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return hR(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=at.fromDate(i);return{timestampValue:Xa(s.serializer,r)}}if(i instanceof at){const r=new at(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Xa(s.serializer,r)}}if(i instanceof cf)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof nr)return{bytesValue:__(s.serializer,i._byteString)};if(i instanceof Kt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hd(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof lf)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return zd(c.serializer,l)})}}}}}}(i,s);throw s.qu(`Unsupported field value: ${sf(i)}`)}(t,e)}function X_(t,e){const n={};return KI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zi(t,(i,s)=>{const r=jc(s,e.Ou(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function J_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof cf||t instanceof nr||t instanceof Kt||t instanceof af||t instanceof lf)}function df(t,e,n){if(!J_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=sf(n);throw i==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+i)}}function xu(t,e,n){if((e=lt(e))instanceof zc)return e._internalPath;if(typeof e=="string")return ff(t,e);throw tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const OC=new RegExp("[~\\*/\\[\\]]");function ff(t,e,n){if(e.search(OC)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zc(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new ce($.INVALID_ARGUMENT,c+t+l)}function Z_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PC extends eE{data(){return super.data()}}function tE(t,e){return typeof e=="string"?ff(t,e):e instanceof zc?e._internalPath:e._delegate._internalPath}class NC{convertValue(e,n="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return zi(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertVectorValue(e){var n,i,s;const r=(s=(i=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(o=>tt(o.doubleValue));return new lf(r)}convertGeoPoint(e){return new cf(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Nc(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const n=Ni(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ze.fromString(e);qe(b_(i));const s=new yo(i.get(1),i.get(3)),r=new de(i.popFirst(5));return s.isEqual(n)||Qn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function kC(t){t=hs(t,Kt);const e=hs(t.firestore,Bc);return yC(W_(e),t._key).then(n=>FC(e,t,n))}class xC extends NC{constructor(e){super(),this.firestore=e}convertBytes(e){return new nr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function VC(t,e,n){t=hs(t,Kt);const i=hs(t.firestore,Bc),s=DC(t.converter,e);return iE(i,[SC(Y_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,bn.none())])}function Sm(t,e,n,...i){t=hs(t,Kt);const s=hs(t.firestore,Bc),r=Y_(s);let o;return o=typeof(e=lt(e))=="string"||e instanceof zc?CC(r,"updateDoc",t._key,e,n,i):RC(r,"updateDoc",t._key,e),iE(s,[o.toMutation(t._key,bn.exists(!0))])}function iE(t,e){return function(i,s){const r=new Ci;return i.asyncQueue.enqueueAndForget(async()=>iC(await mC(i),s,r)),r.promise}(W_(t),e)}function FC(t,e,n){const i=n.docs.get(e._key),s=new xC(t);return new nE(t,s,e._key,i,new LC(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ur=s})(cr),Cn(new an("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new Bc(new RS(i.getProvider("auth-internal")),new NS(i.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(u.options.projectId,f)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),c._setSettings(r),c},"PUBLIC").setMultipleInstances(!0)),tn(Gp,"4.7.6",e),tn(Gp,"4.7.6","esm2017")})();const sE="@firebase/installations",hf="0.6.12";/**
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
 */const rE=1e4,oE=`w:${hf}`,aE="FIS_v2",UC="https://firebaseinstallations.googleapis.com/v1",qC=60*60*1e3,BC="installations",zC="Installations";/**
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
 */const GC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ps=new _s(BC,zC,GC);function cE(t){return t instanceof un&&t.code.includes("request-failed")}/**
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
 */function lE({projectId:t}){return`${UC}/projects/${t}/installations`}function uE(t){return{token:t.token,requestStatus:2,expiresIn:HC(t.expiresIn),creationTime:Date.now()}}async function dE(t,e){const i=(await e.json()).error;return ps.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function fE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function jC(t,{refreshToken:e}){const n=fE(t);return n.append("Authorization",$C(e)),n}async function hE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HC(t){return Number(t.replace("s","000"))}function $C(t){return`${aE} ${t}`}/**
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
 */async function WC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=lE(t),s=fE(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:aE,appId:t.appId,sdkVersion:oE},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await hE(()=>fetch(i,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:uE(u.authToken)}}else throw await dE("Create Installation",l)}/**
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
 */const QC=/^[cdef][\w-]{21}$/,Vu="";function YC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=XC(t);return QC.test(n)?n:Vu}catch{return Vu}}function XC(t){return KC(t).substr(0,22)}/**
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
 */function Hc(t){return`${t.appName}!${t.appId}`}/**
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
 */const mE=new Map;function gE(t,e){const n=Hc(t);yE(n,e),JC(n,e)}function yE(t,e){const n=mE.get(t);if(n)for(const i of n)i(e)}function JC(t,e){const n=ZC();n&&n.postMessage({key:t,fid:e}),eO()}let is=null;function ZC(){return!is&&"BroadcastChannel"in self&&(is=new BroadcastChannel("[Firebase] FID Change"),is.onmessage=t=>{yE(t.data.key,t.data.fid)}),is}function eO(){mE.size===0&&is&&(is.close(),is=null)}/**
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
 */const tO="firebase-installations-database",nO=1,ms="firebase-installations-store";let Bl=null;function pf(){return Bl||(Bl=eI(tO,nO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ms)}}})),Bl}async function nc(t,e){const n=Hc(t),s=(await pf()).transaction(ms,"readwrite"),r=s.objectStore(ms),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&gE(t,e.fid),e}async function IE(t){const e=Hc(t),i=(await pf()).transaction(ms,"readwrite");await i.objectStore(ms).delete(e),await i.done}async function $c(t,e){const n=Hc(t),s=(await pf()).transaction(ms,"readwrite"),r=s.objectStore(ms),o=await r.get(n),c=e(o);return c===void 0?await r.delete(n):await r.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&gE(t,c.fid),c}/**
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
 */async function mf(t){let e;const n=await $c(t.appConfig,i=>{const s=iO(i),r=sO(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Vu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iO(t){const e=t||{fid:YC(),registrationStatus:0};return _E(e)}function sO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ps.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=rO(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oO(t)}:{installationEntry:e}}async function rO(t,e){try{const n=await WC(t,e);return nc(t.appConfig,n)}catch(n){throw cE(n)&&n.customData.serverCode===409?await IE(t.appConfig):await nc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function oO(t){let e=await Rm(t.appConfig);for(;e.registrationStatus===1;)await pE(100),e=await Rm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await mf(t);return i||n}return e}function Rm(t){return $c(t,e=>{if(!e)throw ps.create("installation-not-found");return _E(e)})}function _E(t){return aO(t)?{fid:t.fid,registrationStatus:0}:t}function aO(t){return t.registrationStatus===1&&t.registrationTime+rE<Date.now()}/**
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
 */async function cO({appConfig:t,heartbeatServiceProvider:e},n){const i=lO(t,n),s=jC(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:oE,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await hE(()=>fetch(i,c));if(l.ok){const u=await l.json();return uE(u)}else throw await dE("Generate Auth Token",l)}function lO(t,{fid:e}){return`${lE(t)}/${e}/authTokens:generate`}/**
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
 */async function gf(t,e=!1){let n;const i=await $c(t.appConfig,r=>{if(!EE(r))throw ps.create("not-registered");const o=r.authToken;if(!e&&fO(o))return r;if(o.requestStatus===1)return n=uO(t,e),r;{if(!navigator.onLine)throw ps.create("app-offline");const c=pO(r);return n=dO(t,c),c}});return n?await n:i.authToken}async function uO(t,e){let n=await Cm(t.appConfig);for(;n.authToken.requestStatus===1;)await pE(100),n=await Cm(t.appConfig);const i=n.authToken;return i.requestStatus===0?gf(t,e):i}function Cm(t){return $c(t,e=>{if(!EE(e))throw ps.create("not-registered");const n=e.authToken;return mO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dO(t,e){try{const n=await cO(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await nc(t.appConfig,i),n}catch(n){if(cE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await IE(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await nc(t.appConfig,i)}throw n}}function EE(t){return t!==void 0&&t.registrationStatus===2}function fO(t){return t.requestStatus===2&&!hO(t)}function hO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qC}function pO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mO(t){return t.requestStatus===1&&t.requestTime+rE<Date.now()}/**
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
 */async function gO(t){const e=t,{installationEntry:n,registrationPromise:i}=await mf(e);return i?i.catch(console.error):gf(e).catch(console.error),n.fid}/**
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
 */async function yO(t,e=!1){const n=t;return await IO(n),(await gf(n,e)).token}async function IO(t){const{registrationPromise:e}=await mf(t);e&&await e}/**
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
 */function _O(t){if(!t||!t.options)throw zl("App Configuration");if(!t.name)throw zl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw zl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function zl(t){return ps.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="installations",EO="installations-internal",AO=t=>{const e=t.getProvider("app").getImmediate(),n=_O(e),i=Es(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},wO=t=>{const e=t.getProvider("app").getImmediate(),n=Es(e,AE).getImmediate();return{getId:()=>gO(n),getToken:s=>yO(n,s)}};function vO(){Cn(new an(AE,AO,"PUBLIC")),Cn(new an(EO,wO,"PRIVATE"))}vO();tn(sE,hf);tn(sE,hf,"esm2017");/**
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
 */const ic="analytics",TO="firebase_id",bO="origin",SO=60*1e3,RO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yf="https://www.googletagmanager.com/gtag/js";/**
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
 */const zt=new bc("@firebase/analytics");/**
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
 */const CO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qt=new _s("analytics","Analytics",CO);/**
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
 */function OO(t){if(!t.startsWith(yf)){const e=Qt.create("invalid-gtag-resource",{gtagURL:t});return zt.warn(e.message),""}return t}function wE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function PO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function NO(t,e){const n=PO("firebase-js-sdk-policy",{createScriptURL:OO}),i=document.createElement("script"),s=`${yf}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function DO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function LO(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await wE(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){zt.error(c)}t("config",s,r)}async function MO(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await wE(n);for(const l of o){const u=c.find(p=>p.measurementId===l),f=u&&e[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){zt.error(r)}}function kO(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[c,l]=o;await MO(t,e,n,c,l)}else if(r==="config"){const[c,l]=o;await LO(t,e,n,i,c,l)}else if(r==="consent"){const[c,l]=o;t("consent",c,l)}else if(r==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(r==="set"){const[c]=o;t("set",c)}else t(r,...o)}catch(c){zt.error(c)}}return s}function xO(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=kO(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function VO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(yf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=30,UO=1e3;class qO{constructor(e={},n=UO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vE=new qO;function BO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function zO(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:BO(i)},r=RO.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function GO(t,e=vE,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Qt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new $O;return setTimeout(async()=>{c.abort()},SO),TE({appId:i,apiKey:s,measurementId:r},o,c,e)}async function TE(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=vE){var r;const{appId:o,measurementId:c}=t;try{await jO(i,e)}catch(l){if(c)return zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await zO(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!HO(u)){if(s.deleteThrottleMetadata(o),c)return zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const f=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?pp(n,s.intervalMillis,FO):pp(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,p),zt.debug(`Calling attemptFetch again in ${f} millis`),TE(t,p,i,s)}}function jO(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HO(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class $O{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function WO(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KO(){if(vd())try{await Td()}catch(t){return zt.warn(Qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return zt.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function QO(t,e,n,i,s,r,o){var c;const l=GO(t);l.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&zt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>zt.error(I)),e.push(l);const u=KO().then(I=>{if(I)return i.getId()}),[f,p]=await Promise.all([l,u]);VO(r)||NO(r,f.measurementId),s("js",new Date);const m=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return m[bO]="firebase",m.update=!0,p!=null&&(m[TO]=p),s("config",f.measurementId,m),f.measurementId}/**
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
 */class YO{constructor(e){this.app=e}_delete(){return delete Yr[this.app.options.appId],Promise.resolve()}}let Yr={},Om=[];const Pm={};let Gl="dataLayer",XO="gtag",Nm,bE,Dm=!1;function JO(){const t=[];if(wd()&&t.push("This is a browser extension environment."),Xy()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});zt.warn(n.message)}}function ZO(t,e,n){JO();const i=t.options.appId;if(!i)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(Yr[i]!=null)throw Qt.create("already-exists",{id:i});if(!Dm){DO(Gl);const{wrappedGtag:r,gtagCore:o}=xO(Yr,Om,Pm,Gl,XO);bE=r,Nm=o,Dm=!0}return Yr[i]=QO(t,Om,Pm,e,Nm,Gl,n),new YO(t)}function eP(t=Sd()){t=lt(t);const e=Es(t,ic);return e.isInitialized()?e.getImmediate():tP(t)}function tP(t,e={}){const n=Es(t,ic);if(n.isInitialized()){const s=n.getImmediate();if(fo(e,n.getOptions()))return s;throw Qt.create("already-initialized")}return n.initialize({options:e})}async function nP(){if(wd()||!Xy()||!vd())return!1;try{return await Td()}catch{return!1}}function iP(t,e,n,i){t=lt(t),WO(bE,Yr[t.app.options.appId],e,n,i).catch(s=>zt.error(s))}const Lm="@firebase/analytics",Mm="0.10.11";function sP(){Cn(new an(ic,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ZO(i,s,n)},"PUBLIC")),Cn(new an("analytics-internal",t,"PRIVATE")),tn(Lm,Mm),tn(Lm,Mm,"esm2017");function t(e){try{const n=e.getProvider(ic).getImmediate();return{logEvent:(i,s,r)=>iP(n,i,s,r)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}sP();const rP={apiKey:"AIzaSyA-U1ASN2yTDfutUHqblUO1HMyyvLhOBg4",authDomain:"mediquix-fbc0b.firebaseapp.com",projectId:"mediquix-fbc0b",storageBucket:"mediquix-fbc0b.firebasestorage.app",messagingSenderId:"830867953772",appId:"1:830867953772:web:3ce4a6166c55f49b0aa049",measurementId:"G-Q35EFETSY8"},If=tI(rP);nP().then(t=>{t?(eP(If),console.log("Firebase Analytics initialized.")):console.warn("Firebase Analytics is not supported in this environment.")}).catch(t=>{console.error("Erro ao inicializar o Analytics:",t)});const Xr=vS(If),jl=AC(If);lb(Xr,NI).then(()=>{console.log("Auth persistence set to local.")}).catch(t=>{console.error("Error setting auth persistence:",t)});const oP=t=>{fb(Xr,e=>{e?(console.log("User is logged in."),t(e)):(console.log("No user is logged in."),t(null))})},$s=vc("settings",{state:()=>({selectedSpecialty:"all",selectedDifficulty:"all"}),actions:{setSpecialty(t){this.selectedSpecialty=t},setDifficulty(t){this.selectedDifficulty=t}}}),SE=vc("auth",{state:()=>({user:null,initialized:!1}),getters:{userSettings:t=>t.user&&t.user.settings?t.user.settings:null},actions:{initAuthState(){oP(t=>{this.user=t,this.initialized=!0,t&&this.fetchUserSettings()})},async signup(t,e){try{const n=await ab(Xr,t,e);this.user=n.user;const i={username:t.split("@")[0],email:t,custom_vocabulary:[],default_difficulty:1,default_speciality:0};await VC(ql(jl,"users",this.user.uid),i),this.user.settings=i;const s=$s();s.setSpecialty(i.default_speciality),s.setDifficulty(i.default_difficulty)}catch(n){throw console.error("Erro no signup:",n.message),n}},async login(t,e){try{const n=await cb(Xr,t,e);this.user=n.user,console.log("this.user",this.user),await this.fetchUserSettings()}catch(n){throw console.error("Erro no login:",n.message),n}},async logout(){try{await hb(Xr),this.user=null}catch(t){throw console.error("Erro no logout:",t.message),t}},async fetchUserSettings(){try{const t=ql(jl,"users",this.user.uid),e=await kC(t);if(console.log("docSnap",e),e.exists()){let n=e.data();console.log("settingsData",n);const i={username:this.user.email.split("@")[0],email:this.user.email,default_difficulty:1,default_speciality:0,custom_vocabulary:[]};let s=!1;for(const o in i)o in n||(n[o]=i[o],s=!0);s&&await Sm(t,n),this.user.settings=n,n.username&&(this.user.username=n.username);const r=$s();r.setSpecialty(n.default_speciality??"all"),r.setDifficulty(n.default_difficulty??"all")}}catch(t){console.error("Erro fetching user settings:",t.message)}},async updateUserSettings(t){try{const e=ql(jl,"users",this.user.uid);await Sm(e,t),this.user.settings={...this.user.settings,...t},t.username&&(this.user.username=t.username);const n=$s();n.setSpecialty(t.default_speciality??n.selectedSpecialty),n.setDifficulty(t.default_difficulty??n.selectedDifficulty)}catch(e){throw console.error("Erro updating user settings:",e.message),e}}}}),RE=["Anatomia","Fisiologia","Biologia Celular","Histologia","Neurologia","Hematologia","Endocrinologia","Cardiologia","Pneumologia","Gastroenterologia","Nefrologia","Oncologia","Dermatologia","Psiquiatria","Obstetrícia","Ginecologia","Pediatria","Ortopedia","Radiologia","Cirurgia","Infectologia","Imunologia","Patologia","Anestesiologia","Hepatologia","Emergência Médica","Farmacologia","Genética","Microbiologia","Bioquímica"],aP=[{word:"AAS",clue:"Sigla para ácido acetilsalicílico.",specialties:[26,7],difficulty:1},{word:"ABASIA",clue:"Incapacidade de andar devido à falta de coordenação muscular.",specialties:[4,17],difficulty:2},{word:"ABDUÇÃO",clue:"Movimento que afasta um membro do plano médio do corpo.",specialties:[1,17],difficulty:1},{word:"ABCESSO",clue:"Acúmulo de pus em uma cavidade formada por tecido destruído.",specialties:[19,20],difficulty:1},{word:"PERIOSTEO",clue:"Membrana que reveste os ossos.",specialties:[0],difficulty:2},{word:"SARCÔMERO",clue:"Unidade funcional do músculo esquelético.",specialties:[0],difficulty:3},{word:"SINOVIAL",clue:"Tipo de articulação móvel com líquido lubrificante.",specialties:[0],difficulty:2},{word:"MENISCO",clue:"Estrutura cartilaginosa no joelho.",specialties:[0,17],difficulty:2},{word:"FÁSCIA",clue:"Tecido conjuntivo que envolve músculos.",specialties:[0],difficulty:3},{word:"OSMOSE",clue:"Movimento de água através de uma membrana semipermeável.",specialties:[1],difficulty:1},{word:"NEFRON",clue:"Unidade funcional do rim.",specialties:[1,10],difficulty:2},{word:"POTENCIAL DE AÇÃO",clue:"Impulso elétrico em neurônios.",specialties:[1,4],difficulty:2},{word:"SISTOLE",clue:"Fase de contração do coração.",specialties:[1,7],difficulty:2},{word:"DIASTOLE",clue:"Fase de relaxamento do coração.",specialties:[1,7],difficulty:2},{word:"LISOSSOMO",clue:"Organela que realiza a digestão intracelular.",specialties:[2],difficulty:2},{word:"CITOESQUELETO",clue:"Estrutura que dá suporte à célula.",specialties:[2],difficulty:2},{word:"APARELHO DE GOLGI",clue:"Organela envolvida na modificação de proteínas.",specialties:[2],difficulty:2},{word:"ENDOCITOSE",clue:"Processo de entrada de materiais na célula.",specialties:[2],difficulty:3},{word:"EXOCITOSE",clue:"Processo de liberação de materiais da célula.",specialties:[2],difficulty:3},{word:"TECIDO EPITELIAL",clue:"Revestimento interno e externo do corpo.",specialties:[3],difficulty:1},{word:"TECIDO CONJUNTIVO",clue:"Tecido que suporta e conecta outros tecidos.",specialties:[3],difficulty:1},{word:"TECIDO MUSCULAR",clue:"Tecido responsável pelo movimento.",specialties:[3],difficulty:1},{word:"TECIDO NERVOSO",clue:"Tecido que transmite impulsos elétricos.",specialties:[3],difficulty:1},{word:"FIBROBLASTO",clue:"Célula que produz fibras no tecido conjuntivo.",specialties:[3],difficulty:2},{word:"ASTRÓCITO",clue:"Célula glial do sistema nervoso central.",specialties:[4],difficulty:3},{word:"MICROGLIA",clue:"Células imunológicas do sistema nervoso.",specialties:[4,21],difficulty:3},{word:"ESCLEROSE MÚLTIPLA",clue:"Doença autoimune que afeta a mielina.",specialties:[4,21],difficulty:2},{word:"NEUROTRANSMISSOR",clue:"Substância que transmite sinais entre neurônios.",specialties:[4],difficulty:2},{word:"SINAPSE QUÍMICA",clue:"Comunicação entre neurônios via neurotransmissores.",specialties:[4],difficulty:2},{word:"FIBRINOGÊNIO",clue:"Proteína plasmática essencial na coagulação.",specialties:[5],difficulty:3},{word:"HEMATOPOIESE",clue:"Formação de células sanguíneas na medula óssea.",specialties:[5],difficulty:2},{word:"HEMOGLOBINA",clue:"Proteína nos glóbulos vermelhos que transporta oxigênio.",specialties:[5],difficulty:1},{word:"HEMÓLISE",clue:"Destruição de glóbulos vermelhos.",specialties:[5],difficulty:2},{word:"PLAQUETA",clue:"Fragmento celular envolvido na coagulação.",specialties:[5],difficulty:1},{word:"GLÂNDULA PITUITÁRIA",clue:"Glândula mestre que regula outras glândulas.",specialties:[6],difficulty:2},{word:"GLÂNDULA SUPRARRENAL",clue:"Glândula que produz adrenalina e cortisol.",specialties:[6],difficulty:2},{word:"GLÂNDULA TIREOIDE",clue:"Glândula que regula o metabolismo.",specialties:[6],difficulty:1},{word:"PARATORMÔNIO",clue:"Hormônio que regula o cálcio no sangue.",specialties:[6],difficulty:3},{word:"MELATONINA",clue:"Hormônio envolvido no ciclo sono-vigília.",specialties:[6],difficulty:2},{word:"ELETROCARDIOGRAMA",clue:"Exame que registra a atividade elétrica do coração.",specialties:[7,18],difficulty:2},{word:"CATETERISMO",clue:"Procedimento para examinar vasos cardíacos.",specialties:[7],difficulty:2},{word:"ANGIOPLASTIA",clue:"Procedimento para desobstruir artérias coronárias.",specialties:[7],difficulty:2},{word:"ENDOCARDITE",clue:"Inflamação do revestimento interno do coração.",specialties:[7,20],difficulty:3},{word:"PERICARDITE",clue:"Inflamação do pericárdio.",specialties:[7,20],difficulty:3},{word:"BRONQUIECTASIA",clue:"Dilatação anormal dos brônquios.",specialties:[8],difficulty:3},{word:"FIBROSE PULMONAR",clue:"Cicatrização do tecido pulmonar.",specialties:[8],difficulty:2},{word:"APNEIA",clue:"Interrupção temporária da respiração.",specialties:[8],difficulty:1},{word:"ESPIRÔMETRIA",clue:"Exame que mede volumes pulmonares.",specialties:[8],difficulty:2},{word:"HEMOPTISE",clue:"Expectoração de sangue pelo trato respiratório.",specialties:[8],difficulty:3},{word:"COLITE",clue:"Inflamação do cólon.",specialties:[9],difficulty:2},{word:"ENTERITE",clue:"Inflamação do intestino delgado.",specialties:[9],difficulty:2},{word:"CONSTIPAÇÃO",clue:"Dificuldade para evacuar.",specialties:[9],difficulty:1},{word:"DIARRÉIA",clue:"Evacuações frequentes e líquidas.",specialties:[9],difficulty:1},{word:"HEMORRÓIDA",clue:"Dilatação das veias anais.",specialties:[9],difficulty:1},{word:"UREMIA",clue:"Acúmulo de ureia no sangue.",specialties:[10],difficulty:2},{word:"POLACIÚRIA",clue:"Aumento da frequência urinária.",specialties:[10],difficulty:2},{word:"ANÚRIA",clue:"Ausência de produção de urina.",specialties:[10],difficulty:2},{word:"OLIGÚRIA",clue:"Redução do volume urinário.",specialties:[10],difficulty:2},{word:"PIONEFROSE",clue:"Acúmulo de pus nos rins.",specialties:[10,20],difficulty:3},{word:"APLASIA",clue:"Falha no desenvolvimento de um órgão.",specialties:[11,22],difficulty:3},{word:"NEOPLASIA",clue:"Crescimento anormal de células.",specialties:[11],difficulty:2},{word:"CITOLOGIA",clue:"Estudo das células.",specialties:[11,2],difficulty:2},{word:"ONCOGENE",clue:"Gene que pode causar câncer.",specialties:[11,27],difficulty:3},{word:"QUIMIOTERAPIA",clue:"Tratamento com drogas anticancerígenas.",specialties:[11,26],difficulty:2},{word:"ALOPECIA",clue:"Perda de cabelo.",specialties:[12],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação da pele.",specialties:[12],difficulty:2},{word:"MICOSE",clue:"Infecção fúngica na pele.",specialties:[12,28],difficulty:1},{word:"DERMATOFITOSE",clue:"Infecção cutânea por fungos dermatófitos.",specialties:[12,28],difficulty:3},{word:"HERPES",clue:"Infecção viral com lesões na pele.",specialties:[12,20],difficulty:1},{word:"TRANSTORNO OBSESSIVO COMPULSIVO",clue:"Distúrbio com pensamentos obsessivos e ações repetitivas.",specialties:[13],difficulty:3},{word:"AUTISMO",clue:"Transtorno do desenvolvimento que afeta comunicação.",specialties:[13],difficulty:2},{word:"DEMÊNCIA",clue:"Declínio progressivo das funções cognitivas.",specialties:[13],difficulty:2},{word:"DELÍRIO",clue:"Crença falsa mantida apesar de evidências contrárias.",specialties:[13],difficulty:2},{word:"TRANSTORNO DE PÂNICO",clue:"Crises súbitas de medo intenso.",specialties:[13],difficulty:2},{word:"PLACENTA",clue:"Órgão que conecta mãe e feto.",specialties:[14],difficulty:1},{word:"PRÉ-ECLÂMPSIA",clue:"Complicação da gravidez com hipertensão.",specialties:[14],difficulty:2},{word:"AMNIOSSESE",clue:"Procedimento para coletar líquido amniótico.",specialties:[14],difficulty:3},{word:"MASTITE",clue:"Inflamação da mama.",specialties:[15],difficulty:2},{word:"CLIMATÉRIO",clue:"Transição para a menopausa.",specialties:[15],difficulty:2},{word:"FONTANELA",clue:"Área mole no crânio de bebês.",specialties:[16],difficulty:2},{word:"ICTERÍCIA NEONATAL",clue:"Amarelecimento da pele em recém-nascidos.",specialties:[16],difficulty:2},{word:"DESIDRATAÇÃO",clue:"Perda excessiva de líquidos corporais.",specialties:[16],difficulty:1},{word:"ESCARLATINA",clue:"Doença bacteriana com febre e erupções.",specialties:[16,20],difficulty:3},{word:"SÍNDROME DE DOWN",clue:"Trissomia do cromossomo 21.",specialties:[16,27],difficulty:2},{word:"TORÇÃO",clue:"Lesão causada por rotação excessiva.",specialties:[17],difficulty:1},{word:"LUXAÇÃO",clue:"Deslocamento de um osso da articulação.",specialties:[17],difficulty:2},{word:"TENDINITE",clue:"Inflamação de um tendão.",specialties:[17],difficulty:1},{word:"BURSITE",clue:"Inflamação da bursa articular.",specialties:[17],difficulty:2},{word:"CIFOSE",clue:"Curvatura excessiva da coluna torácica.",specialties:[17],difficulty:2},{word:"CINTILOGRAFIA",clue:"Exame que usa substâncias radioativas.",specialties:[18],difficulty:3},{word:"PET SCAN",clue:"Tomografia por emissão de pósitrons.",specialties:[18],difficulty:3},{word:"CONTRASTE",clue:"Substância usada para melhorar imagens radiológicas.",specialties:[18],difficulty:2},{word:"ANGIOGRAFIA",clue:"Exame dos vasos sanguíneos.",specialties:[18],difficulty:2},{word:"RADIAÇÃO IONIZANTE",clue:"Energia que pode remover elétrons de átomos.",specialties:[18],difficulty:3},{word:"LAPAROTOMIA",clue:"Abertura cirúrgica da cavidade abdominal.",specialties:[19],difficulty:2},{word:"TORACOTOMIA",clue:"Abertura cirúrgica da cavidade torácica.",specialties:[19],difficulty:2},{word:"COLOSTOMIA",clue:"Abertura do cólon na parede abdominal.",specialties:[19],difficulty:3},{word:"HEMOSTASIA",clue:"Parada de um sangramento.",specialties:[19],difficulty:2},{word:"DEBRIDAMENTO",clue:"Remoção de tecido morto ou infectado.",specialties:[19],difficulty:2},{word:"EPIDEMIA",clue:"Surto de doença em uma região.",specialties:[20],difficulty:1},{word:"PANDEMIA",clue:"Epidemia que se espalha globalmente.",specialties:[20],difficulty:1},{word:"ENDÊMICO",clue:"Doença presente constantemente em uma região.",specialties:[20],difficulty:2},{word:"ZOONOSE",clue:"Doença transmissível de animais para humanos.",specialties:[20],difficulty:2},{word:"QUARENTENA",clue:"Isolamento para prevenir a propagação de doenças.",specialties:[20],difficulty:1},{word:"GLOBULINA",clue:"Proteína plasmática do sangue.",specialties:[5,29],difficulty:2},{word:"FAGOCITOSE",clue:"Processo de ingestão de partículas por células.",specialties:[2,21],difficulty:2},{word:"ANTICORPO",clue:"Proteína produzida pelo sistema imunológico.",specialties:[21,5],difficulty:1},{word:"HORMÔNIO",clue:"Substância química que regula funções no organismo.",specialties:[6,1],difficulty:1},{word:"LINFOCITO",clue:"Tipo de glóbulo branco importante na imunidade.",specialties:[5,21],difficulty:2},{word:"PROTEASE",clue:"Enzima que digere proteínas.",specialties:[29,9],difficulty:2},{word:"GLICÓLISE",clue:"Via metabólica que quebra glicose.",specialties:[29,1],difficulty:3},{word:"HEPATÓCITO",clue:"Célula funcional do fígado.",specialties:[9,24],difficulty:2},{word:"TRIGLICERÍDEO",clue:"Tipo de gordura encontrada no sangue.",specialties:[29,7],difficulty:2},{word:"QUERATINA",clue:"Proteína encontrada em cabelos e unhas.",specialties:[12,29],difficulty:1},{word:"VACINA",clue:"Preparação que estimula a resposta imune.",specialties:[21,26],difficulty:1},{word:"ENZIMA",clue:"Proteína que acelera reações químicas.",specialties:[29],difficulty:1},{word:"NEURITE",clue:"Inflamação de um nervo.",specialties:[4,20],difficulty:2},{word:"ALERGIA",clue:"Resposta exagerada do sistema imunológico.",specialties:[21,12],difficulty:1},{word:"ESPLENOMEGALIA",clue:"Aumento do baço.",specialties:[5,21],difficulty:3},{word:"GASTRINA",clue:"Hormônio que estimula a secreção gástrica.",specialties:[6,9],difficulty:2},{word:"PEPSINA",clue:"Enzima que digere proteínas no estômago.",specialties:[29,9],difficulty:2},{word:"CELULITE",clue:"Infecção bacteriana da pele e tecidos subcutâneos.",specialties:[12,20],difficulty:2},{word:"SEROTONINA",clue:"Neurotransmissor que regula humor.",specialties:[4,13],difficulty:2},{word:"SISTEMA LÍMBICO",clue:"Conjunto de estruturas cerebrais relacionadas às emoções.",specialties:[4,13],difficulty:3},{word:"FÍGADO",clue:"Órgão responsável por diversas funções metabólicas.",specialties:[9,24],difficulty:1},{word:"PANCREAS",clue:"Órgão que produz insulina e enzimas digestivas.",specialties:[6,9],difficulty:1},{word:"TESTOSTERONA",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:1},{word:"ESTROGÊNIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"CATECOLAMINA",clue:"Hormônios como adrenalina e noradrenalina.",specialties:[6,1],difficulty:2},{word:"MUTAÇÃO",clue:"Alteração no material genético.",specialties:[27,11],difficulty:2},{word:"CARCINOGÊNESE",clue:"Processo de formação do câncer.",specialties:[11,22],difficulty:3},{word:"HEMATOCRITO",clue:"Percentual de glóbulos vermelhos no sangue.",specialties:[5],difficulty:2},{word:"BILIRRUBINA",clue:"Pigmento resultante da degradação de hemoglobina.",specialties:[5,24],difficulty:2},{word:"ANABOLISMO",clue:"Processo de construção de moléculas complexas.",specialties:[1,29],difficulty:2},{word:"CATABOLISMO",clue:"Processo de quebra de moléculas complexas.",specialties:[1,29],difficulty:2},{word:"PLASMA",clue:"Parte líquida do sangue.",specialties:[5],difficulty:1},{word:"SÍNDROME METABÓLICA",clue:"Conjunto de fatores de risco cardiovascular.",specialties:[7,6],difficulty:3},{word:"HIPOTIREOIDISMO",clue:"Produção insuficiente de hormônios tireoidianos.",specialties:[6],difficulty:2},{word:"HIPERTIREOIDISMO",clue:"Produção excessiva de hormônios tireoidianos.",specialties:[6],difficulty:2},{word:"FARINGITE",clue:"Inflamação da faringe.",specialties:[8,20],difficulty:1},{word:"LARINGITE",clue:"Inflamação da laringe.",specialties:[8,20],difficulty:1},{word:"BRADICARDIA",clue:"Frequência cardíaca abaixo do normal.",specialties:[7],difficulty:2},{word:"EDEMA",clue:"Acúmulo de líquido nos tecidos.",specialties:[10,7],difficulty:1},{word:"CHOQUE",clue:"Insuficiência circulatória aguda.",specialties:[25,7],difficulty:2},{word:"HEMOSTASIA",clue:"Processo de parada de sangramento.",specialties:[5,19],difficulty:2},{word:"ANGIOGÊNESE",clue:"Formação de novos vasos sanguíneos.",specialties:[22,11],difficulty:3},{word:"TROMBOSE",clue:"Formação de coágulo dentro de um vaso sanguíneo.",specialties:[5,7],difficulty:2},{word:"EMBOLIA",clue:"Obstrução de vaso por substância estranha.",specialties:[7,20],difficulty:2},{word:"ANAFILAXIA",clue:"Reação alérgica grave e generalizada.",specialties:[21,25],difficulty:2},{word:"PLASMÓCITO",clue:"Célula que produz anticorpos.",specialties:[5,21],difficulty:3},{word:"ELETROLÍTICO",clue:"Referente a íons em solução corporal.",specialties:[1,29],difficulty:2},{word:"RETINA",clue:"Camada sensível à luz no olho.",specialties:[4],difficulty:1},{word:"CÓCLEA",clue:"Estrutura auditiva no ouvido interno.",specialties:[4],difficulty:2},{word:"ENDOTÉLIO",clue:"Revestimento interno dos vasos sanguíneos.",specialties:[3,7],difficulty:2},{word:"PERITÔNIO",clue:"Membrana que reveste a cavidade abdominal.",specialties:[0,9],difficulty:2},{word:"GLÂNDULA",clue:"Órgão que secreta substâncias.",specialties:[6,3],difficulty:1},{word:"HIDRATAÇÃO",clue:"Processo de reposição de líquidos corporais.",specialties:[25,16],difficulty:1},{word:"ACIDEMIA",clue:"Acidez excessiva do sangue.",specialties:[10,29],difficulty:3},{word:"CETOACIDOSE",clue:"Acúmulo de corpos cetônicos e acidez sanguínea.",specialties:[6,29],difficulty:3},{word:"ANTÍGENO",clue:"Substância que provoca resposta imune.",specialties:[21],difficulty:2},{word:"LINFA",clue:"Líquido que circula nos vasos linfáticos.",specialties:[5,21],difficulty:2},{word:"GANGLIO LINFÁTICO",clue:"Estrutura que filtra a linfa.",specialties:[21],difficulty:2},{word:"APENDICITE",clue:"Inflamação do apêndice vermiforme.",specialties:[9,20],difficulty:1},{word:"HEPATOMEGALIA",clue:"Aumento do fígado.",specialties:[9,24],difficulty:2},{word:"QUILO",clue:"Líquido leitoso formado durante a digestão.",specialties:[9,21],difficulty:3},{word:"BEXIGA",clue:"Órgão que armazena urina.",specialties:[10],difficulty:1},{word:"URETRA",clue:"Canal que conduz a urina para o exterior.",specialties:[10],difficulty:1},{word:"GLICOGÊNIO",clue:"Polissacarídeo de reserva energética.",specialties:[29,1],difficulty:2},{word:"MIELINA",clue:"Camada que envolve axônios neurais.",specialties:[4],difficulty:2},{word:"NEURÓGLIA",clue:"Células de suporte no sistema nervoso.",specialties:[4],difficulty:2},{word:"EQUILÍBRIO ÁCIDO-BASE",clue:"Manutenção do pH corporal.",specialties:[1,29],difficulty:3},{word:"PAPILA DÉRMICA",clue:"Estrutura que forma impressões digitais.",specialties:[12,3],difficulty:3},{word:"SEBO",clue:"Substância oleosa produzida pelas glândulas sebáceas.",specialties:[12],difficulty:1},{word:"ALVEÓLO",clue:"Estrutura pulmonar onde ocorrem trocas gasosas.",specialties:[8],difficulty:1},{word:"PLEURA",clue:"Membrana que reveste os pulmões.",specialties:[8],difficulty:2},{word:"MÚSCULO ESQUELÉTICO",clue:"Tipo de músculo ligado aos ossos.",specialties:[17,3],difficulty:1},{word:"MÚSCULO LISO",clue:"Tipo de músculo encontrado em órgãos viscerais.",specialties:[1,3],difficulty:1},{word:"MÚSCULO CARDÍACO",clue:"Músculo que compõe o coração.",specialties:[7,3],difficulty:1},{word:"PRÓSTATA",clue:"Glândula masculina que produz parte do sêmen.",specialties:[15],difficulty:1},{word:"NEURULAÇÃO",clue:"Processo de formação do tubo neural no embrião.",specialties:[4,14],difficulty:3},{word:"BLASTÓCITO",clue:"Estágio embrionário após a mórula.",specialties:[14],difficulty:3},{word:"GASTRULAÇÃO",clue:"Formação das camadas germinativas embrionárias.",specialties:[14],difficulty:3},{word:"CORAÇÃO FETAL",clue:"Coração em desenvolvimento no feto.",specialties:[14,7],difficulty:2},{word:"MEIOSE",clue:"Divisão celular que forma gametas.",specialties:[27,2],difficulty:2},{word:"MITOSE",clue:"Divisão celular que resulta em células idênticas.",specialties:[2,27],difficulty:1},{word:"CROMOSSOMO",clue:"Estrutura que contém DNA.",specialties:[27,2],difficulty:1},{word:"GENOMA",clue:"Conjunto completo de genes de um organismo.",specialties:[27],difficulty:2},{word:"FENÓTIPO",clue:"Características observáveis de um organismo.",specialties:[27],difficulty:2},{word:"GENÓTIPO",clue:"Composição genética de um organismo.",specialties:[27],difficulty:2},{word:"VIRULÊNCIA",clue:"Capacidade de um patógeno causar doença.",specialties:[28,20],difficulty:2},{word:"ANTIBIÓTICO",clue:"Substância que inibe o crescimento de microrganismos.",specialties:[26,20],difficulty:1},{word:"RESISTÊNCIA BACTERIANA",clue:"Capacidade de bactérias resistirem a antibióticos.",specialties:[28,20],difficulty:2},{word:"PROTOZOÁRIO",clue:"Organismo unicelular eucariótico.",specialties:[28],difficulty:2},{word:"PRÍON",clue:"Agente infeccioso composto apenas por proteínas.",specialties:[28,20],difficulty:3},{word:"BULBO RAQUIDIANO",clue:"Parte do cérebro que controla funções vitais.",specialties:[4,1],difficulty:2},{word:"GLÂNDULA PINEAL",clue:"Glândula que produz melatonina.",specialties:[6,4],difficulty:2},{word:"BARORRECEPTORES",clue:"Receptores sensíveis à pressão arterial.",specialties:[7,1],difficulty:3},{word:"NODOS LINFÁTICOS",clue:"Estruturas que filtram a linfa.",specialties:[21,5],difficulty:2},{word:"ALBUMINA",clue:"Proteína plasmática produzida no fígado.",specialties:[5,24],difficulty:2},{word:"SISTEMA NERVOSO SIMPÁTICO",clue:"Parte do sistema nervoso autônomo que prepara o corpo para ação.",specialties:[4,1],difficulty:2},{word:"SISTEMA NERVOSO PARASSIMPÁTICO",clue:"Parte do sistema nervoso autônomo que conserva energia.",specialties:[4,1],difficulty:2},{word:"PLAQUETOPENIA",clue:"Redução no número de plaquetas no sangue.",specialties:[5],difficulty:2},{word:"ERITROPOIETINA",clue:"Hormônio que estimula a produção de glóbulos vermelhos.",specialties:[6,5],difficulty:3},{word:"GLICOSE",clue:"Principal fonte de energia celular.",specialties:[29],difficulty:1},{word:"LIPÍDEOS",clue:"Grupo de moléculas que inclui gorduras e óleos.",specialties:[29],difficulty:1},{word:"AMINOÁCIDOS",clue:"Unidades básicas das proteínas.",specialties:[29],difficulty:1},{word:"OSSO",clue:"Estrutura rígida que compõe o esqueleto.",specialties:[0,17],difficulty:1},{word:"CARTILAGEM",clue:"Tecido conectivo flexível encontrado em articulações.",specialties:[17,3],difficulty:1},{word:"SINOVITE",clue:"Inflamação da membrana sinovial.",specialties:[17],difficulty:2},{word:"PERICÁRDIO",clue:"Membrana que envolve o coração.",specialties:[7],difficulty:2},{word:"MIOMÉTRIO",clue:"Camada muscular do útero.",specialties:[15],difficulty:2},{word:"ENDOMÉTRIO",clue:"Revestimento interno do útero.",specialties:[15],difficulty:2},{word:"ESPERMATOGÊNESE",clue:"Processo de formação de espermatozoides.",specialties:[15,27],difficulty:3},{word:"OVOGÊNESE",clue:"Processo de formação de óvulos.",specialties:[15,27],difficulty:3},{word:"GLÂNDULAS DE MONTGOMERY",clue:"Glândulas nas aréolas mamárias.",specialties:[15,12],difficulty:3},{word:"COLÁGENO",clue:"Proteína estrutural encontrada em vários tecidos.",specialties:[3,12],difficulty:1},{word:"HELICOBACTER PYLORI",clue:"Bactéria associada a úlceras gástricas.",specialties:[9,28],difficulty:3},{word:"MICÇÃO",clue:"Ato de urinar.",specialties:[10],difficulty:1},{word:"FILTRAÇÃO GLOMERULAR",clue:"Processo inicial de formação da urina.",specialties:[10,1],difficulty:2},{word:"HEMATÚRIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:2},{word:"CLARAÇÃO DE CREATININA",clue:"Medida da função renal.",specialties:[10,29],difficulty:3},{word:"DIURÉTICO",clue:"Substância que aumenta a produção de urina.",specialties:[10,26],difficulty:2},{word:"GLOMERULONEFRITE",clue:"Inflamação dos glomérulos renais.",specialties:[10,20],difficulty:3},{word:"PIELONEFRITE",clue:"Infecção do rim e da pelve renal.",specialties:[10,20],difficulty:2},{word:"VESÍCULA BILIAR",clue:"Órgão que armazena bile.",specialties:[9],difficulty:1},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[9,20],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9,6],difficulty:2},{word:"ESTEATOSE HEPÁTICA",clue:"Acúmulo de gordura no fígado.",specialties:[24,9],difficulty:2},{word:"CIRROSE",clue:"Fibrose avançada do fígado.",specialties:[24],difficulty:2},{word:"EMBOLIA PULMONAR",clue:"Obstrução de artéria pulmonar por êmbolo.",specialties:[8,7],difficulty:3},{word:"PNEUMOTÓRAX",clue:"Acúmulo de ar na cavidade pleural.",specialties:[8,25],difficulty:2},{word:"BRONQUIOLITE",clue:"Inflamação dos bronquíolos.",specialties:[8,16],difficulty:2},{word:"HIPÓXIA",clue:"Deficiência de oxigênio nos tecidos.",specialties:[1,8],difficulty:2},{word:"ASBESTOSE",clue:"Doença pulmonar causada por inalação de amianto.",specialties:[8],difficulty:3},{word:"ANESTESIA GERAL",clue:"Indução de inconsciência para procedimentos cirúrgicos.",specialties:[23,19],difficulty:2},{word:"ANESTESIA LOCAL",clue:"Perda de sensibilidade em uma área específica.",specialties:[23],difficulty:1},{word:"ENTUBAÇÃO",clue:"Inserção de tubo na traqueia para ventilação.",specialties:[23,25],difficulty:2},{word:"OPIÓIDE",clue:"Classe de medicamentos usados para aliviar a dor.",specialties:[26,23],difficulty:2},{word:"ANALGÉSICO",clue:"Substância que alivia a dor.",specialties:[26],difficulty:1},{word:"ELETROENCEFALOGRAMA",clue:"Registro da atividade elétrica cerebral.",specialties:[4,18],difficulty:2},{word:"ELETROMIOGRAMA",clue:"Exame que avalia a atividade elétrica dos músculos.",specialties:[17,18],difficulty:3},{word:"ULTRASSONOGRAFIA",clue:"Imagem obtida através de ondas sonoras.",specialties:[18],difficulty:1},{word:"MAMOGRAFIA",clue:"Exame radiológico das mamas.",specialties:[15,18],difficulty:1},{word:"DOPPLER",clue:"Técnica de imagem que avalia o fluxo sanguíneo.",specialties:[18,7],difficulty:2},{word:"ESTETOSCÓPIO",clue:"Instrumento usado para auscultar sons corporais.",specialties:[25],difficulty:1},{word:"ESFIGMOMANÔMETRO",clue:"Aparelho para medir a pressão arterial.",specialties:[7,25],difficulty:1},{word:"GLUCOMETRO",clue:"Dispositivo que mede a glicose no sangue.",specialties:[6],difficulty:1},{word:"TERMÔMETRO",clue:"Instrumento para medir a temperatura corporal.",specialties:[25],difficulty:1},{word:"OXÍMETRO",clue:"Aparelho que mede a saturação de oxigênio.",specialties:[8,25],difficulty:1},{word:"HEPATITE",clue:"Inflamação do fígado.",specialties:[24,20],difficulty:1},{word:"MALÁRIA",clue:"Doença transmitida por mosquitos.",specialties:[20],difficulty:2},{word:"DENGUE",clue:"Doença viral transmitida pelo mosquito Aedes aegypti.",specialties:[20],difficulty:1},{word:"ZIKA",clue:"Doença viral transmitida por mosquitos, associada a microcefalia.",specialties:[20,14],difficulty:2},{word:"FEBRE AMARELA",clue:"Doença viral transmitida por mosquitos, prevenível por vacina.",specialties:[20],difficulty:2},{word:"RECEPTOR",clue:"Estrutura celular que se liga a moléculas específicas.",specialties:[2,29],difficulty:2},{word:"HORMÔNIO PEPTÍDICO",clue:"Hormônio composto por aminoácidos.",specialties:[6,29],difficulty:2},{word:"HORMÔNIO ESTEROIDE",clue:"Hormônio derivado do colesterol.",specialties:[6,29],difficulty:2},{word:"INSULINA",clue:"Hormônio que reduz os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"GLUCAGON",clue:"Hormônio que aumenta os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"ESCLERÓTICA",clue:"Camada externa branca do olho.",specialties:[4],difficulty:2},{word:"CÓRNEA",clue:"Camada transparente na frente do olho.",specialties:[4],difficulty:1},{word:"ÍRIS",clue:"Parte colorida do olho que regula a entrada de luz.",specialties:[4],difficulty:1},{word:"PUPILA",clue:"Abertura no centro da íris.",specialties:[4],difficulty:1},{word:"LENTE",clue:"Estrutura que foca a luz na retina.",specialties:[4],difficulty:1},{word:"SISTEMA IMUNOLÓGICO INATO",clue:"Defesa inicial não específica contra patógenos.",specialties:[21],difficulty:2},{word:"SISTEMA IMUNOLÓGICO ADAPTATIVO",clue:"Resposta específica do sistema imunológico.",specialties:[21],difficulty:2},{word:"CÉLULAS T",clue:"Linfócitos que participam da resposta imune celular.",specialties:[21],difficulty:2},{word:"CÉLULAS B",clue:"Linfócitos que produzem anticorpos.",specialties:[21],difficulty:2},{word:"VACINAÇÃO",clue:"Processo de induzir imunidade através de vacinas.",specialties:[21,16],difficulty:1},{word:"MELANINA",clue:"Pigmento que dá cor à pele.",specialties:[12],difficulty:1},{word:"ALOPECIA",clue:"Perda de cabelo ou pelos.",specialties:[12],difficulty:1},{word:"LIPOMA",clue:"Tumor benigno de tecido adiposo.",specialties:[11,12],difficulty:2},{word:"DERMATITE",clue:"Inflamação da pele.",specialties:[12],difficulty:1},{word:"URTICÁRIA",clue:"Reação alérgica com erupções na pele.",specialties:[12,21],difficulty:1},{word:"ANEMIA",clue:"Redução da capacidade do sangue de transportar oxigênio.",specialties:[5],difficulty:1},{word:"LEUCEMIA",clue:"Câncer dos tecidos formadores de sangue.",specialties:[11,5],difficulty:2},{word:"HEMOGLOBINOPATIA",clue:"Doença genética que afeta a hemoglobina.",specialties:[5,27],difficulty:3},{word:"POLICITEMIA",clue:"Aumento anormal do número de glóbulos vermelhos.",specialties:[5],difficulty:3},{word:"HEMOFILIA",clue:"Distúrbio da coagulação do sangue.",specialties:[5,27],difficulty:2},{word:"DIABETES MELLITUS",clue:"Doença caracterizada por hiperglicemia crônica.",specialties:[6],difficulty:1},{word:"HIPERGLICEMIA",clue:"Níveis elevados de glicose no sangue.",specialties:[6],difficulty:1},{word:"HIPOGLICEMIA",clue:"Níveis baixos de glicose no sangue.",specialties:[6],difficulty:1},{word:"RESISTÊNCIA À INSULINA",clue:"Condição em que as células não respondem à insulina.",specialties:[6],difficulty:2},{word:"GLICOSÚRIA",clue:"Presença de glicose na urina.",specialties:[6,10],difficulty:2},{word:"ASTIGMATISMO",clue:"Erro refrativo do olho que causa visão borrada.",specialties:[4],difficulty:1},{word:"GLAUCOMA",clue:"Doença ocular caracterizada por aumento da pressão intraocular.",specialties:[4],difficulty:2},{word:"CATARATA",clue:"Opacificação do cristalino que prejudica a visão.",specialties:[4],difficulty:1},{word:"ESQUIZOFRENIA",clue:"Transtorno mental com distorções na percepção da realidade.",specialties:[13],difficulty:2},{word:"BIPOLARIDADE",clue:"Transtorno de humor com episódios de mania e depressão.",specialties:[13],difficulty:1},{word:"FIBROMIALGIA",clue:"Síndrome de dor crônica generalizada.",specialties:[17],difficulty:2},{word:"LUPUS",clue:"Doença autoimune que pode afetar múltiplos órgãos.",specialties:[21,12],difficulty:2},{word:"ESCLEROSE LATERAL AMIOTRÓFICA",clue:"Doença neurodegenerativa que afeta neurônios motores.",specialties:[4],difficulty:3},{word:"MIASTENIA GRAVIS",clue:"Doença autoimune que causa fraqueza muscular.",specialties:[21,4],difficulty:3},{word:"HIPERTROFIA",clue:"Aumento do tamanho das células.",specialties:[22],difficulty:1},{word:"HIPERPLASIA",clue:"Aumento do número de células.",specialties:[22],difficulty:1},{word:"ATROFIA",clue:"Redução do tamanho ou número de células.",specialties:[22],difficulty:1},{word:"NECROSE",clue:"Morte celular não programada.",specialties:[22],difficulty:2},{word:"INFARTO",clue:"Morte de tecido devido à falta de suprimento sanguíneo.",specialties:[22,7],difficulty:1},{word:"ISQUEMIA",clue:"Redução do fluxo sanguíneo para um tecido.",specialties:[22,7],difficulty:1},{word:"HEPATOCARCINOMA",clue:"Câncer primário do fígado.",specialties:[11,24],difficulty:3},{word:"ADENOCARCINOMA",clue:"Tipo de câncer que se origina em células glandulares.",specialties:[11,22],difficulty:3},{word:"OSTEOSSARCOMA",clue:"Tumor maligno do osso.",specialties:[11,17],difficulty:3},{word:"MELANOMA",clue:"Tipo agressivo de câncer de pele.",specialties:[11,12],difficulty:2},{word:"LEIOMIOMA",clue:"Tumor benigno de músculo liso.",specialties:[11,22],difficulty:3},{word:"DOENÇA DE ALZHEIMER",clue:"Doença neurodegenerativa que causa demência.",specialties:[4,13],difficulty:2},{word:"PARKINSON",clue:"Distúrbio do movimento devido à perda de neurônios dopaminérgicos.",specialties:[4],difficulty:2},{word:"EPILEPSIA",clue:"Condição neurológica com crises convulsivas recorrentes.",specialties:[4],difficulty:1},{word:"MIGRÂNEA",clue:"Tipo de dor de cabeça intensa e pulsátil.",specialties:[4],difficulty:1},{word:"ESCLEROSE MÚLTIPLA",clue:"Doença autoimune que afeta a mielina do sistema nervoso central.",specialties:[4,21],difficulty:2},{word:"ANAFILAXIA",clue:"Reação alérgica sistêmica grave.",specialties:[21,25],difficulty:2},{word:"BRONCODILATADOR",clue:"Medicação que dilata as vias aéreas.",specialties:[8,26],difficulty:1},{word:"ANTIHISTAMÍNICO",clue:"Medicamento que bloqueia os efeitos da histamina.",specialties:[21,26],difficulty:1},{word:"ANTICOAGULANTE",clue:"Substância que previne a coagulação do sangue.",specialties:[5,26],difficulty:2},{word:"ANTIPIRÉTICO",clue:"Medicamento que reduz a febre.",specialties:[26,25],difficulty:1},{word:"OSTEOPOROSE",clue:"Condição de perda de densidade óssea.",specialties:[17],difficulty:1},{word:"RAQUITISMO",clue:"Doença infantil causada por deficiência de vitamina D.",specialties:[17,16],difficulty:2},{word:"GOTA",clue:"Artrite causada por acúmulo de ácido úrico.",specialties:[17],difficulty:2},{word:"ESCORBUTO",clue:"Doença por deficiência de vitamina C.",specialties:[25],difficulty:2},{word:"ANOREXIA NERVOSA",clue:"Transtorno alimentar com perda de peso extrema.",specialties:[13],difficulty:2},{word:"BULIMIA NERVOSA",clue:"Transtorno alimentar com compulsão e purgação.",specialties:[13],difficulty:2},{word:"OBESIDADE",clue:"Excesso de gordura corporal.",specialties:[6],difficulty:1},{word:"HIPERTENSÃO ARTERIAL",clue:"Pressão arterial elevada crônica.",specialties:[7],difficulty:1},{word:"ARTERIOSCLEROSE",clue:"Endurecimento das paredes arteriais.",specialties:[7],difficulty:2},{word:"FIBRILAÇÃO ATRIAL",clue:"Arritmia cardíaca comum.",specialties:[7],difficulty:2},{word:"INFECÇÃO URINÁRIA",clue:"Infecção do trato urinário.",specialties:[10,20],difficulty:1},{word:"CÁLCULO RENAL",clue:"Formação de pedras nos rins.",specialties:[10],difficulty:1},{word:"PRÓSTATA",clue:"Glândula masculina que produz fluido seminal.",specialties:[15],difficulty:1},{word:"HIPERPLASIA PROSTÁTICA BENIGNA",clue:"Aumento não canceroso da próstata.",specialties:[15],difficulty:2},{word:"PROSTATITE",clue:"Inflamação da próstata.",specialties:[15,20],difficulty:2},{word:"VARICELA",clue:"Doença viral também conhecida como catapora.",specialties:[16,20],difficulty:1},{word:"SARAMPO",clue:"Doença viral contagiosa com erupções cutâneas.",specialties:[16,20],difficulty:1},{word:"COQUELUCHE",clue:"Doença bacteriana que causa tosse intensa.",specialties:[16,20],difficulty:2},{word:"POLIOMIELITE",clue:"Doença viral que pode causar paralisia.",specialties:[16,20],difficulty:2},{word:"RUBÉOLA",clue:"Doença viral que pode causar defeitos congênitos.",specialties:[16,14],difficulty:1},{word:"AMIGDALITE",clue:"Inflamação das amígdalas.",specialties:[20],difficulty:1},{word:"SINUSITE",clue:"Inflamação dos seios nasais.",specialties:[20],difficulty:1},{word:"OTITE",clue:"Inflamação do ouvido.",specialties:[20,16],difficulty:1},{word:"CANDIDÍASE",clue:"Infecção fúngica por Candida.",specialties:[20,12],difficulty:1},{word:"HEPATITE C",clue:"Infecção viral crônica do fígado.",specialties:[24,20],difficulty:2},{word:"CÓLERA",clue:"Infecção bacteriana que causa diarreia intensa.",specialties:[20,9],difficulty:2},{word:"LEPTOSPIROSE",clue:"Doença bacteriana transmitida pela urina de animais.",specialties:[20],difficulty:2},{word:"TETANO",clue:"Doença causada por toxinas bacterianas que afetam o sistema nervoso.",specialties:[20,4],difficulty:2},{word:"BOTULISMO",clue:"Intoxicação alimentar por toxina botulínica.",specialties:[20],difficulty:2},{word:"SÍFILIS",clue:"Infecção sexualmente transmissível causada por bactéria.",specialties:[20,15],difficulty:2},{word:"GONORREIA",clue:"Infecção sexualmente transmissível bacteriana.",specialties:[20,15],difficulty:1},{word:"HERPES GENITAL",clue:"Infecção viral sexualmente transmissível.",specialties:[20,15],difficulty:1},{word:"HPV",clue:"Vírus causador de verrugas genitais e câncer cervical.",specialties:[20,15],difficulty:1},{word:"CLAMÍDIA",clue:"Infecção sexualmente transmissível bacteriana comum.",specialties:[20,15],difficulty:1},{word:"TRICOMONÍASE",clue:"Infecção sexualmente transmissível por protozoário.",specialties:[20,15],difficulty:2},{word:"CÉREBRO",clue:"Principal órgão do sistema nervoso central.",specialties:[4],difficulty:1},{word:"MEDULA ESPINHAL",clue:"Estrutura que transmite impulsos nervosos do cérebro ao corpo.",specialties:[4],difficulty:1},{word:"SISTEMA NERVOSO PERIFÉRICO",clue:"Conjunto de nervos fora do cérebro e medula.",specialties:[4],difficulty:2},{word:"SINAPSE",clue:"Junção entre dois neurônios.",specialties:[4],difficulty:1},{word:"AXÔNIO",clue:"Prolongamento do neurônio que conduz impulsos elétricos.",specialties:[4],difficulty:1},{word:"DENDRITO",clue:"Estrutura do neurônio que recebe sinais.",specialties:[4],difficulty:1},{word:"CITOLOGIA",clue:"Estudo das células.",specialties:[2],difficulty:1},{word:"BIOPSIA",clue:"Remoção de tecido para exame diagnóstico.",specialties:[19,22],difficulty:1},{word:"CITOQUINAS",clue:"Proteínas sinalizadoras no sistema imunológico.",specialties:[21,29],difficulty:2},{word:"FAGÓCITO",clue:"Célula que engole partículas estranhas.",specialties:[21],difficulty:2},{word:"EPIDERMIS",clue:"Camada mais externa da pele.",specialties:[12,3],difficulty:1},{word:"DERMIS",clue:"Camada intermediária da pele.",specialties:[12,3],difficulty:1},{word:"HIPODERME",clue:"Camada mais interna da pele.",specialties:[12,3],difficulty:2},{word:"QUERATINÓCITO",clue:"Célula predominante na epiderme.",specialties:[12,3],difficulty:2},{word:"MELANÓCITO",clue:"Célula que produz melanina.",specialties:[12,3],difficulty:2},{word:"FIBROSE",clue:"Formação excessiva de tecido conjuntivo fibroso.",specialties:[22],difficulty:2},{word:"GRANULOMA",clue:"Massa de tecido inflamatório crônico.",specialties:[22],difficulty:3},{word:"APOPTÓSE",clue:"Morte celular programada.",specialties:[2],difficulty:2},{word:"NEOPLASIA",clue:"Crescimento anormal de células.",specialties:[11,22],difficulty:1},{word:"METÁSTASE",clue:"Disseminação de células cancerosas para outros locais.",specialties:[11],difficulty:2},{word:"QUIMIOTERAPIA",clue:"Uso de medicamentos para tratar câncer.",specialties:[11,26],difficulty:1},{word:"RADIOTERAPIA",clue:"Uso de radiação para tratar câncer.",specialties:[11,18],difficulty:1},{word:"IMUNOTERAPIA",clue:"Tratamento que estimula o sistema imunológico contra doenças.",specialties:[11,21],difficulty:2},{word:"ANALGÉSICO",clue:"Medicamento que alivia a dor.",specialties:[26],difficulty:1},{word:"ANTIINFLAMATÓRIO",clue:"Medicamento que reduz a inflamação.",specialties:[26],difficulty:1},{word:"ANTIBIÓTICO",clue:"Medicamento que combate infecções bacterianas.",specialties:[26,20],difficulty:1},{word:"ANTIVIRAL",clue:"Medicamento que combate infecções virais.",specialties:[26,20],difficulty:2},{word:"ANTIFÚNGICO",clue:"Medicamento que combate infecções fúngicas.",specialties:[26,20],difficulty:2},{word:"VACINA",clue:"Preparação que estimula imunidade contra doenças.",specialties:[21,16],difficulty:1},{word:"SÊMEN",clue:"Fluido ejaculado pelo homem contendo espermatozoides.",specialties:[15],difficulty:1},{word:"MENARCA",clue:"Primeira menstruação na puberdade feminina.",specialties:[15],difficulty:1},{word:"MENOPAUSA",clue:"Cessação permanente da menstruação.",specialties:[15],difficulty:1},{word:"PARTO CESÁREO",clue:"Nascimento por incisão cirúrgica no abdômen e útero.",specialties:[14,19],difficulty:1},{word:"ECLÂMPSIA",clue:"Complicação grave da gravidez com convulsões.",specialties:[14],difficulty:2},{word:"HIPEREMESE GRAVÍDICA",clue:"Náuseas e vômitos intensos durante a gravidez.",specialties:[14],difficulty:2},{word:"PERISTALTISMO",clue:"Movimento muscular que impulsiona o conteúdo no trato digestivo.",specialties:[1,9],difficulty:1},{word:"BARREIRA HEMATOENCEFALICA",clue:"Barreira que protege o cérebro de substâncias no sangue.",specialties:[4,5],difficulty:3},{word:"DESNUTRICAO",clue:"Estado resultante de dieta inadequada ou absorção deficiente de nutrientes.",specialties:[25,16],difficulty:1},{word:"HOMEOPATIA",clue:"Sistema de medicina alternativa baseado na diluição de substâncias.",specialties:[26],difficulty:2},{word:"ACUIDADE VISUAL",clue:"Medida da clareza da visão.",specialties:[4],difficulty:1},{word:"HEMOCROMATOSE",clue:"Doença por excesso de ferro no organismo.",specialties:[5,24],difficulty:3},{word:"DISTENSAO ABDOMINAL",clue:"Inchaço do abdômen por gases ou fluidos.",specialties:[9,25],difficulty:1},{word:"POLIDIPSIA",clue:"Sede excessiva.",specialties:[6],difficulty:2},{word:"POLIFAGIA",clue:"Fome excessiva.",specialties:[6],difficulty:2},{word:"POLIURIA",clue:"Produção excessiva de urina.",specialties:[6,10],difficulty:2},{word:"URETER",clue:"Canal que conduz a urina do rim à bexiga.",specialties:[10],difficulty:1},{word:"NEUROLOGO",clue:"Médico especialista em doenças do sistema nervoso.",specialties:[4],difficulty:1},{word:"CARDIOLOGISTA",clue:"Médico especialista em doenças do coração.",specialties:[7],difficulty:1},{word:"ONCOLOGISTA",clue:"Médico especialista em câncer.",specialties:[11],difficulty:1},{word:"GASTROSCOPIA",clue:"Exame endoscópico do estômago.",specialties:[9,18],difficulty:2},{word:"COLONOSCOPIA",clue:"Exame endoscópico do cólon.",specialties:[9,18],difficulty:2},{word:"ENDOSCOPIA",clue:"Exame visual interno de órgãos ocos.",specialties:[9,18],difficulty:1},{word:"RESILIENCIA",clue:"Capacidade de recuperar-se de adversidades.",specialties:[13],difficulty:1},{word:"ANAMNESE",clue:"Entrevista médica para obtenção de histórico clínico.",specialties:[25],difficulty:1},{word:"DIAGNOSTICO",clue:"Identificação de uma doença ou condição.",specialties:[22],difficulty:1},{word:"PROGNOSTICO",clue:"Previsão da evolução de uma doença.",specialties:[22],difficulty:2},{word:"PLACEBO",clue:"Substância inerte usada em pesquisas clínicas.",specialties:[26],difficulty:2},{word:"CEFALEIA",clue:"Dor de cabeça.",specialties:[4],difficulty:1},{word:"MIALGIA",clue:"Dor muscular.",specialties:[17],difficulty:1},{word:"ARTRALGIA",clue:"Dor nas articulações.",specialties:[17],difficulty:1},{word:"NEURALGIA",clue:"Dor ao longo de um nervo.",specialties:[4],difficulty:2},{word:"FARINGE",clue:"Canal que conecta a boca ao esôfago e laringe.",specialties:[0],difficulty:1},{word:"LARINGE",clue:"Órgão da voz situado no pescoço.",specialties:[0],difficulty:1},{word:"TRAQUEIA",clue:"Tubo que leva o ar aos pulmões.",specialties:[8,0],difficulty:1},{word:"BRONQUIOLOS",clue:"Pequenas ramificações dos brônquios nos pulmões.",specialties:[8],difficulty:1},{word:"PLEURITE",clue:"Inflamação da pleura.",specialties:[8],difficulty:2},{word:"HIPOVOLEMIA",clue:"Diminuição do volume sanguíneo.",specialties:[5,25],difficulty:2},{word:"HIPERVOLEMIA",clue:"Aumento do volume sanguíneo.",specialties:[5],difficulty:2},{word:"SIBILOS",clue:"Ruídos respiratórios agudos.",specialties:[8],difficulty:1},{word:"RINITE",clue:"Inflamação da mucosa nasal.",specialties:[8,21],difficulty:1},{word:"OTORRINOLARINGOLOGIA",clue:"Especialidade médica que trata orelha, nariz e garganta.",specialties:[0],difficulty:2},{word:"HEMORRAGIA",clue:"Perda excessiva de sangue.",specialties:[5,25],difficulty:1},{word:"SINCOPE",clue:"Perda temporária da consciência.",specialties:[7,25],difficulty:2},{word:"ICTERICIA",clue:"Amarelamento da pele e olhos por acúmulo de bilirrubina.",specialties:[24,5],difficulty:1},{word:"SEBORREIA",clue:"Excesso de produção de sebo pela pele.",specialties:[12],difficulty:1},{word:"PRURIDO",clue:"Coceira.",specialties:[12],difficulty:1},{word:"ERUPCAO CUTANEA",clue:"Lesões na pele como manchas ou pápulas.",specialties:[12],difficulty:1},{word:"PROLACTINA",clue:"Hormônio que estimula a produção de leite.",specialties:[6,15],difficulty:2},{word:"OXITOCINA",clue:"Hormônio que estimula as contrações uterinas.",specialties:[6,14],difficulty:2},{word:"FEOCROMOCITOMA",clue:"Tumor das glândulas suprarrenais que produz catecolaminas.",specialties:[6,7],difficulty:3},{word:"GOTA",clue:"Artrite causada por acúmulo de ácido úrico.",specialties:[17],difficulty:2},{word:"ACIDO URICO",clue:"Produto final do metabolismo de purinas.",specialties:[29],difficulty:2},{word:"FENILCETONURIA",clue:"Doença genética com deficiência de metabolismo da fenilalanina.",specialties:[27,16],difficulty:3},{word:"GALACTOSEMIA",clue:"Doença genética com intolerância à galactose.",specialties:[27,16],difficulty:3},{word:"ENFERMEIRO",clue:"Profissional de saúde que cuida dos pacientes.",specialties:[25],difficulty:1},{word:"FISIOTERAPEUTA",clue:"Profissional que trata doenças por meio de exercícios físicos.",specialties:[17],difficulty:1},{word:"NUTRICIONISTA",clue:"Profissional que estuda a relação entre alimento e saúde.",specialties:[9,25],difficulty:1},{word:"PSICOLOGO",clue:"Profissional que estuda os processos mentais e comportamentais.",specialties:[13],difficulty:1},{word:"ANATOMOPATOLOGIA",clue:"Estudo das alterações estruturais causadas pelas doenças.",specialties:[22],difficulty:2},{word:"CLINICA MEDICA",clue:"Especialidade que trata doenças não cirúrgicas em adultos.",specialties:[25],difficulty:1},{word:"ANTITERMINICO",clue:"Medicamento que reduz a febre.",specialties:[26],difficulty:1},{word:"PALIATIVO",clue:"Tratamento que alivia sintomas sem curar a doença.",specialties:[11,25],difficulty:1},{word:"TAMPAO",clue:"Substância que mantém o pH estável.",specialties:[29],difficulty:2},{word:"BICARBONATO",clue:"Íon que atua como tampão no sangue.",specialties:[29],difficulty:2},{word:"CREATININA",clue:"Substância usada para avaliar a função renal.",specialties:[10,29],difficulty:2},{word:"PROTEINURIA",clue:"Presença de proteínas na urina.",specialties:[10],difficulty:2},{word:"LEUCOCITURIA",clue:"Presença de leucócitos na urina.",specialties:[10,20],difficulty:2},{word:"GASTRITE",clue:"Inflamação da mucosa do estômago.",specialties:[9],difficulty:1},{word:"DUODENO",clue:"Primeira parte do intestino delgado.",specialties:[9],difficulty:1},{word:"JEJUNO",clue:"Segunda porção do intestino delgado.",specialties:[9],difficulty:1},{word:"ILEO",clue:"Terceira parte do intestino delgado.",specialties:[9],difficulty:1},{word:"APENDICE",clue:"Estrutura vermiforme ligada ao ceco.",specialties:[9],difficulty:1},{word:"CECO",clue:"Parte inicial do intestino grosso.",specialties:[9],difficulty:1},{word:"SIGMOIDE",clue:"Parte do intestino grosso antes do reto.",specialties:[9],difficulty:1},{word:"RETROPERITONEAL",clue:"Localizado atrás do peritônio.",specialties:[0,9],difficulty:3},{word:"POLIDACTILIA",clue:"Condição de possuir dedos extras.",specialties:[17,27],difficulty:2},{word:"SINDACTILIA",clue:"Fusão de dois ou mais dedos.",specialties:[17,27],difficulty:2},{word:"CRIOTERAPIA",clue:"Tratamento médico usando frio.",specialties:[12,19],difficulty:2},{word:"TERMOTERAPIA",clue:"Tratamento médico usando calor.",specialties:[17,19],difficulty:2},{word:"ELETROTERAPIA",clue:"Uso de correntes elétricas para tratamento.",specialties:[17,19],difficulty:2},{word:"BIOPSIA",clue:"Remoção de tecido para exame diagnóstico.",specialties:[19,22],difficulty:1},{word:"PARACENTESE",clue:"Procedimento para remover líquido da cavidade abdominal.",specialties:[19,9],difficulty:3},{word:"TORACOCENTESE",clue:"Procedimento para remover líquido da cavidade pleural.",specialties:[19,8],difficulty:3},{word:"ARTROCENTESE",clue:"Punctura de uma articulação para remover líquido.",specialties:[19,17],difficulty:3},{word:"DIAGNOSTICO DIFERENCIAL",clue:"Lista de possíveis doenças que explicam os sintomas.",specialties:[25,22],difficulty:2},{word:"CICLO MENSTRUAL",clue:"Processo mensal de mudanças no sistema reprodutor feminino.",specialties:[15],difficulty:1},{word:"ESPERMATOGENESE",clue:"Processo de produção de espermatozoides.",specialties:[15],difficulty:2},{word:"OVULACAO",clue:"Liberação de um óvulo pelo ovário.",specialties:[15,14],difficulty:1},{word:"ANDROGENO",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:2},{word:"ESTROGENIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"PROGESTERONA",clue:"Hormônio envolvido na gravidez e ciclo menstrual.",specialties:[6,15],difficulty:1},{word:"INFERTILIDADE",clue:"Incapacidade de conceber após um ano de tentativas.",specialties:[15,14],difficulty:1},{word:"FECUNDACAO IN VITRO",clue:"Técnica de reprodução assistida.",specialties:[15,14],difficulty:2},{word:"CLONAGEM",clue:"Processo de criar cópias geneticamente idênticas.",specialties:[27],difficulty:3},{word:"ANTICORPO MONOCLONAL",clue:"Anticorpo produzido por um único clone de células.",specialties:[21,26],difficulty:3},{word:"IMUNODEFICIENCIA",clue:"Estado de função imune reduzida.",specialties:[21],difficulty:2},{word:"QUIMERA",clue:"Organismo com células geneticamente distintas.",specialties:[27],difficulty:3},{word:"DOPAMINA",clue:"Neurotransmissor envolvido no controle motor e motivação.",specialties:[4],difficulty:2},{word:"SEROTONINA",clue:"Neurotransmissor que regula humor e sono.",specialties:[4,13],difficulty:2},{word:"ACETILCOLINA",clue:"Neurotransmissor envolvido na função muscular.",specialties:[4],difficulty:2},{word:"GLUTAMATO",clue:"Principal neurotransmissor excitatório do cérebro.",specialties:[4],difficulty:2},{word:"GABA",clue:"Principal neurotransmissor inibitório do cérebro.",specialties:[4],difficulty:2},{word:"CINETOSE",clue:"Mal-estar causado por movimento, como enjoo de viagem.",specialties:[13],difficulty:1},{word:"ESQUISTOSSOMOSE",clue:"Doença parasitária causada por Schistosoma.",specialties:[20],difficulty:3},{word:"LEISHMANIOSE",clue:"Doença causada por protozoários do gênero Leishmania.",specialties:[20],difficulty:3},{word:"HEMOGLOBINA",clue:"Proteína no sangue que transporta oxigênio.",specialties:[5],difficulty:1},{word:"TIROXINA",clue:"Hormônio produzido pela tireoide.",specialties:[6],difficulty:1},{word:"HIPERPARATIREOIDISMO",clue:"Excesso de produção de hormônio paratireoide.",specialties:[6],difficulty:3},{word:"HIPOPARATIREOIDISMO",clue:"Deficiência de hormônio paratireoide.",specialties:[6],difficulty:3},{word:"CEFALOSPORINA",clue:"Classe de antibióticos β-lactâmicos.",specialties:[26,20],difficulty:2},{word:"QUINOLONA",clue:"Classe de antibióticos que inibem DNA girase.",specialties:[26,20],difficulty:2},{word:"TETRACICLINA",clue:"Antibiótico que inibe síntese proteica bacteriana.",specialties:[26,20],difficulty:2},{word:"GLICOCÁLICE",clue:"Camada de carboidratos na superfície celular.",specialties:[2],difficulty:3},{word:"CINETOCORO",clue:"Estrutura que liga cromossomos ao fuso mitótico.",specialties:[2,27],difficulty:3},{word:"MITOCONDRIO",clue:"Organela responsável pela produção de ATP.",specialties:[2,29],difficulty:1},{word:"CLOROPLASTO",clue:"Organela responsável pela fotossíntese em plantas.",specialties:[2],difficulty:3},{word:"ENZIMA",clue:"Proteína que acelera reações químicas.",specialties:[29],difficulty:1},{word:"CATALISADOR",clue:"Substância que aumenta a velocidade de uma reação.",specialties:[29],difficulty:1},{word:"HELICASE",clue:"Enzima que separa fitas de DNA.",specialties:[2,27],difficulty:3},{word:"LIGASE",clue:"Enzima que une fragmentos de DNA.",specialties:[2,27],difficulty:3},{word:"PROTEASSOMA",clue:"Complexo que degrada proteínas.",specialties:[2],difficulty:3},{word:"TRIPANOSSOMIASE",clue:"Doença causada por Trypanosoma cruzi.",specialties:[20],difficulty:3},{word:"HEMOSTASIA",clue:"Processo de parar sangramento.",specialties:[5,19],difficulty:1},{word:"NEUTRÓFILO",clue:"Tipo de glóbulo branco que combate infecções.",specialties:[5,21],difficulty:2},{word:"EOSINÓFILO",clue:"Glóbulo branco envolvido em respostas alérgicas.",specialties:[5,21],difficulty:2},{word:"BASÓFILO",clue:"Glóbulo branco que libera histamina.",specialties:[5,21],difficulty:2},{word:"MONÓCITO",clue:"Glóbulo branco que se diferencia em macrófago.",specialties:[5,21],difficulty:2},{word:"MACRÓFAGO",clue:"Célula que fagocita patógenos.",specialties:[21],difficulty:2},{word:"IMUNOGLOBULINA",clue:"Outro nome para anticorpo.",specialties:[21,5],difficulty:2},{word:"VASOPRESSINA",clue:"Hormônio que regula a retenção de água.",specialties:[6,10],difficulty:2},{word:"PEPTÍDEO NATRIURÉTICO",clue:"Hormônio que reduz a pressão arterial.",specialties:[6,7],difficulty:3},{word:"INTERFERON",clue:"Proteína que interfere na replicação viral.",specialties:[21,20],difficulty:3},{word:"INTERLEUCINA",clue:"Citocina produzida por leucócitos.",specialties:[21],difficulty:3},{word:"HEPARINA",clue:"Anticoagulante usado em medicina.",specialties:[5,26],difficulty:2},{word:"WARFARINA",clue:"Anticoagulante que inibe a vitamina K.",specialties:[26,5],difficulty:2},{word:"VITAMINA K",clue:"Vitamina essencial para a coagulação.",specialties:[29,5],difficulty:2},{word:"VITAMINA D",clue:"Vitamina importante para a saúde óssea.",specialties:[29,17],difficulty:1},{word:"VITAMINA B12",clue:"Vitamina necessária para a produção de glóbulos vermelhos.",specialties:[29,5],difficulty:2},{word:"VITAMINA C",clue:"Vitamina importante para o sistema imunológico.",specialties:[29,21],difficulty:1},{word:"GLUTATIONA",clue:"Antioxidante presente nas células.",specialties:[29],difficulty:3},{word:"SUPERÓXIDO DISMUTASE",clue:"Enzima que neutraliza radicais livres.",specialties:[29],difficulty:3},{word:"CATALASE",clue:"Enzima que decompõe peróxido de hidrogênio.",specialties:[29],difficulty:2},{word:"PEROXISSOMO",clue:"Organela envolvida no metabolismo de peróxidos.",specialties:[2],difficulty:3},{word:"PITUITÁRIA",clue:"Outra denominação para hipófise.",specialties:[6],difficulty:2},{word:"HIPOTÁLAMO",clue:"Região cerebral que controla a hipófise.",specialties:[4,6],difficulty:2},{word:"EPÍFISE",clue:"Parte do osso longo ou glândula pineal.",specialties:[0,6],difficulty:2},{word:"ADENOHIPÓFISE",clue:"Lobo anterior da hipófise.",specialties:[6],difficulty:3},{word:"NEUROHIPÓFISE",clue:"Lobo posterior da hipófise.",specialties:[6],difficulty:3},{word:"PARATORMÔNIO",clue:"Hormônio que regula o cálcio.",specialties:[6],difficulty:2},{word:"CALCITONINA",clue:"Hormônio que reduz os níveis de cálcio no sangue.",specialties:[6],difficulty:2},{word:"RENINA",clue:"Enzima que participa da regulação da pressão arterial.",specialties:[10,6],difficulty:2},{word:"ANGIOTENSINA",clue:"Hormônio que causa vasoconstrição.",specialties:[7,10],difficulty:2},{word:"EICOSANÓIDES",clue:"Derivados de ácidos graxos com funções hormonais.",specialties:[29],difficulty:3},{word:"PROSTAGLANDINA",clue:"Mediador inflamatório derivado de ácidos graxos.",specialties:[29,22],difficulty:2},{word:"LEUCOTRIENO",clue:"Mediador químico em respostas alérgicas.",specialties:[21,29],difficulty:3},{word:"TRABÉCULA",clue:"Estrutura em forma de feixe nos ossos esponjosos.",specialties:[0,17],difficulty:3},{word:"OSTEOBLASTO",clue:"Célula que forma osso.",specialties:[0,17],difficulty:2},{word:"OSTEÓCITO",clue:"Célula madura do tecido ósseo.",specialties:[0,17],difficulty:2},{word:"OSTEOCLASTO",clue:"Célula que reabsorve osso.",specialties:[0,17],difficulty:2},{word:"CARTILAGEM HIALINA",clue:"Tipo de cartilagem encontrada em articulações.",specialties:[0,17],difficulty:2},{word:"FIBROBLASTO",clue:"Célula que produz fibras de colágeno.",specialties:[3],difficulty:2},{word:"ADIPÓCITO",clue:"Célula de tecido adiposo.",specialties:[3],difficulty:1},{word:"GLIÓCITO",clue:"Célula de suporte no sistema nervoso.",specialties:[4],difficulty:2},{word:"ASTRÓCITO",clue:"Tipo de célula glial no SNC.",specialties:[4],difficulty:3},{word:"OLIGODENDRÓCITO",clue:"Célula que forma mielina no SNC.",specialties:[4],difficulty:3},{word:"CÉLULA DE SCHWANN",clue:"Célula que forma mielina no SNP.",specialties:[4],difficulty:3},{word:"MICRÓGLIA",clue:"Célula imune do sistema nervoso.",specialties:[4,21],difficulty:3},{word:"EPENDIMÁRIA",clue:"Célula que reveste os ventrículos cerebrais.",specialties:[4],difficulty:3},{word:"SINAPSE QUÍMICA",clue:"Comunicação entre neurônios via neurotransmissores.",specialties:[4],difficulty:2},{word:"SINAPSE ELÉTRICA",clue:"Comunicação direta entre neurônios via junções gap.",specialties:[4],difficulty:3},{word:"CICLO DE KREBS",clue:"Via metabólica que produz energia.",specialties:[29],difficulty:2},{word:"CADEIA TRANSPORTADORA DE ELÉTRONS",clue:"Processo que gera ATP nas mitocôndrias.",specialties:[29],difficulty:2},{word:"GLICONEOGÊNESE",clue:"Formação de glicose a partir de precursores não carboidratos.",specialties:[29,6],difficulty:3},{word:"GLICOGÊNIO",clue:"Forma de armazenamento de glicose.",specialties:[29],difficulty:1},{word:"HEMOGLOBINÚRIA",clue:"Presença de hemoglobina na urina.",specialties:[10,5],difficulty:2},{word:"CETONÚRIA",clue:"Presença de corpos cetônicos na urina.",specialties:[10,6],difficulty:2},{word:"HEMATÓCRITO",clue:"Percentual de células vermelhas no sangue.",specialties:[5],difficulty:1},{word:"PLAQUETA",clue:"Fragmento celular envolvido na coagulação.",specialties:[5],difficulty:1},{word:"FERRO",clue:"Mineral essencial para a produção de hemoglobina.",specialties:[29,5],difficulty:1},{word:"ZINCO",clue:"Mineral importante para a função imunológica.",specialties:[29,21],difficulty:2},{word:"IODO",clue:"Mineral necessário para a produção de hormônios tireoidianos.",specialties:[29,6],difficulty:1},{word:"MAGNÉSIO",clue:"Mineral envolvido em muitas reações enzimáticas.",specialties:[29],difficulty:1},{word:"POTÁSSIO",clue:"Eletrólito importante para a função cardíaca.",specialties:[29,7],difficulty:1},{word:"SÓDIO",clue:"Eletrólito essencial para a transmissão nervosa.",specialties:[29,1],difficulty:1},{word:"CLORO",clue:"Eletrólito que ajuda a manter o equilíbrio hídrico.",specialties:[29],difficulty:1},{word:"CÁLCIO",clue:"Mineral importante para ossos e contração muscular.",specialties:[29,17],difficulty:1},{word:"FÓSFORO",clue:"Mineral presente em ATP e DNA.",specialties:[29],difficulty:1},{word:"BICARBONATO",clue:"Íon que atua como tampão no sangue.",specialties:[29,10],difficulty:2},{word:"AMILASE",clue:"Enzima que digere carboidratos.",specialties:[9,29],difficulty:1},{word:"LIPASE",clue:"Enzima que digere gorduras.",specialties:[9,29],difficulty:1},{word:"PEPSINA",clue:"Enzima que digere proteínas no estômago.",specialties:[9,29],difficulty:1},{word:"TRIPSINA",clue:"Enzima pancreática que digere proteínas.",specialties:[9,29],difficulty:2},{word:"QUIMOTRIPSINA",clue:"Outra enzima pancreática que digere proteínas.",specialties:[9,29],difficulty:2},{word:"ENTEROCINASE",clue:"Enzima que ativa a tripsina.",specialties:[9,29],difficulty:3},{word:"SECRETINA",clue:"Hormônio que estimula a secreção pancreática.",specialties:[6,9],difficulty:3},{word:"COLECISTOCININA",clue:"Hormônio que estimula a contração da vesícula biliar.",specialties:[6,9],difficulty:3},{word:"GASTRINA",clue:"Hormônio que estimula a secreção gástrica.",specialties:[6,9],difficulty:2},{word:"LEPTINA",clue:"Hormônio produzido pelo tecido adiposo que regula o apetite.",specialties:[6,29],difficulty:2},{word:"GRELINA",clue:"Hormônio que estimula o apetite.",specialties:[6,29],difficulty:2},{word:"NEFROLOGIA",clue:"Especialidade médica que estuda os rins.",specialties:[10],difficulty:1},{word:"HEPATOLOGIA",clue:"Especialidade médica que estuda o fígado.",specialties:[24],difficulty:1},{word:"DERMATOLOGIA",clue:"Especialidade médica que estuda a pele.",specialties:[12],difficulty:1},{word:"OTORRINOLARINGOLOGIA",clue:"Especialidade médica que estuda orelha, nariz e garganta.",specialties:[0],difficulty:1},{word:"OFTALMOLOGIA",clue:"Especialidade médica que estuda os olhos.",specialties:[4],difficulty:1},{word:"UROLOGIA",clue:"Especialidade médica que estuda o trato urinário e sistema reprodutor masculino.",specialties:[10,15],difficulty:1},{word:"GINECOLOGIA",clue:"Especialidade médica que estuda o sistema reprodutor feminino.",specialties:[15],difficulty:1},{word:"NEONATOLOGIA",clue:"Ramo da pediatria que cuida de recém-nascidos.",specialties:[16,14],difficulty:2},{word:"GERIATRIA",clue:"Especialidade médica que cuida de idosos.",specialties:[25],difficulty:1},{word:"ANESTESIOLOGIA",clue:"Especialidade médica que estuda anestesia.",specialties:[23],difficulty:1},{word:"FARMACOLOGIA",clue:"Estudo dos medicamentos e seus efeitos.",specialties:[26],difficulty:1},{word:"QUIMIOTAXIA",clue:"Movimento celular orientado por gradiente químico.",specialties:[21,2],difficulty:3},{word:"APNEIA DO SONO",clue:"Interrupção temporária da respiração durante o sono.",specialties:[8],difficulty:1},{word:"NARCOLEPSIA",clue:"Distúrbio do sono com sonolência diurna excessiva.",specialties:[13,4],difficulty:2},{word:"ATAXIA",clue:"Perda de coordenação muscular.",specialties:[4],difficulty:2},{word:"DIPLOPIA",clue:"Visão dupla.",specialties:[4],difficulty:1},{word:"ASTENIA",clue:"Fraqueza generalizada.",specialties:[25],difficulty:1},{word:"HIPOXEMIA",clue:"Baixo nível de oxigênio no sangue arterial.",specialties:[8],difficulty:2},{word:"HIPERCAPNIA",clue:"Nível elevado de dióxido de carbono no sangue.",specialties:[8],difficulty:2},{word:"BRONQUIECTASIA",clue:"Dilatação crônica dos brônquios.",specialties:[8],difficulty:3},{word:"SARCOIDOSE",clue:"Doença inflamatória que forma granulomas em órgãos.",specialties:[8,21],difficulty:3},{word:"ACROCIANOSE",clue:"Coloração azulada das extremidades.",specialties:[7,8],difficulty:2},{word:"LIPODISTROFIA",clue:"Distribuição anormal de gordura corporal.",specialties:[6,12],difficulty:3},{word:"AMILOIDOSE",clue:"Acúmulo de proteína amiloide nos tecidos.",specialties:[22,5],difficulty:3},{word:"ESCOLIOSE",clue:"Desvio lateral da coluna vertebral.",specialties:[17],difficulty:1},{word:"LORDOSE",clue:"Curvatura acentuada da coluna lombar.",specialties:[17],difficulty:1},{word:"ARTROSE",clue:"Degeneração crônica das articulações.",specialties:[17],difficulty:1},{word:"ESPONDILITE",clue:"Inflamação das vértebras.",specialties:[17],difficulty:2},{word:"FASCITE",clue:"Inflamação da fáscia muscular.",specialties:[17],difficulty:2},{word:"MENINGITE",clue:"Inflamação das meninges.",specialties:[4,20],difficulty:1},{word:"ENCEFALITE",clue:"Inflamação do tecido cerebral.",specialties:[4,20],difficulty:2},{word:"HIDROCEFALIA",clue:"Acúmulo excessivo de líquido cefalorraquidiano.",specialties:[4],difficulty:2},{word:"MIELOPATIA",clue:"Doença da medula espinhal.",specialties:[4],difficulty:3},{word:"RADICULOPATIA",clue:"Compressão de raízes nervosas espinhais.",specialties:[4],difficulty:2},{word:"NEUROPATIA",clue:"Doença dos nervos periféricos.",specialties:[4],difficulty:2},{word:"GLIOMA",clue:"Tumor originado das células gliais.",specialties:[11,4],difficulty:3},{word:"MENINGIOMA",clue:"Tumor benigno das meninges.",specialties:[11,4],difficulty:3},{word:"ASTROCITOMA",clue:"Tumor cerebral originado de astrócitos.",specialties:[11,4],difficulty:3},{word:"ESQUIZOFASIA",clue:"Discurso incoerente em pacientes esquizofrênicos.",specialties:[13],difficulty:3},{word:"ANHIDROSE",clue:"Incapacidade de suar.",specialties:[12,6],difficulty:2},{word:"POLIDIPSIAS",clue:"Sensação excessiva de sede.",specialties:[6],difficulty:2},{word:"GIGANTISMO",clue:"Crescimento excessivo devido ao excesso de GH.",specialties:[6],difficulty:2},{word:"NANISMO",clue:"Baixa estatura devido à deficiência de GH.",specialties:[6],difficulty:1},{word:"ACROMEGALIA",clue:"Crescimento exagerado de extremidades em adultos.",specialties:[6],difficulty:2},{word:"CUSHING",clue:"Síndrome por excesso de cortisol.",specialties:[6],difficulty:2},{word:"ADDISON",clue:"Doença por insuficiência adrenal.",specialties:[6],difficulty:2},{word:"HEMOCITOBLASTO",clue:"Célula tronco hematopoiética.",specialties:[5],difficulty:3},{word:"POLICITEMIA",clue:"Aumento do número de eritrócitos.",specialties:[5],difficulty:2},{word:"TALASSEMIA",clue:"Doença genética com produção anormal de hemoglobina.",specialties:[5,27],difficulty:2},{word:"ESFEROCITOSE",clue:"Doença hereditária com hemácias esféricas.",specialties:[5,27],difficulty:3},{word:"HEMOGLOBINOPATIA",clue:"Anormalidade estrutural na hemoglobina.",specialties:[5,27],difficulty:2},{word:"MALFORMAÇÃO",clue:"Anomalia no desenvolvimento de um órgão.",specialties:[14,22],difficulty:2},{word:"TERATOGÊNESE",clue:"Processo de formação de defeitos congênitos.",specialties:[14,27],difficulty:3},{word:"ABORTO",clue:"Interrupção da gravidez antes da viabilidade fetal.",specialties:[14],difficulty:1},{word:"PLACENTA PRÉVIA",clue:"Implantação da placenta sobre o colo uterino.",specialties:[14],difficulty:2},{word:"DESCOLAMENTO PREMATURO DE PLACENTA",clue:"Separação da placenta antes do parto.",specialties:[14],difficulty:2},{word:"CORIOAMNIONITE",clue:"Infecção das membranas fetais.",specialties:[14,20],difficulty:3},{word:"MOLA HIDATIFORME",clue:"Proliferação anormal do trofoblasto.",specialties:[14,11],difficulty:3},{word:"ECLÂMPSIA",clue:"Convulsões em gestantes com pré-eclâmpsia.",specialties:[14],difficulty:2},{word:"PÉLVIS",clue:"Região anatômica entre abdômen e membros inferiores.",specialties:[0],difficulty:1},{word:"PERÍNEO",clue:"Região entre a genitália e o ânus.",specialties:[0],difficulty:2},{word:"GLÂNDULA DE BARTHOLIN",clue:"Glândula vestibular maior na mulher.",specialties:[15],difficulty:2},{word:"CLITÓRIS",clue:"Órgão erétil feminino.",specialties:[15],difficulty:1},{word:"URETER",clue:"Canal que transporta urina do rim à bexiga.",specialties:[10],difficulty:1},{word:"URETRA",clue:"Canal que elimina urina da bexiga ao exterior.",specialties:[10],difficulty:1},{word:"EPIDÍDIMO",clue:"Estrutura onde os espermatozoides amadurecem.",specialties:[15],difficulty:2},{word:"DUCTO DEFERENTE",clue:"Canal que transporta espermatozoides.",specialties:[15],difficulty:2},{word:"VESÍCULA SEMINAL",clue:"Glândula que produz parte do sêmen.",specialties:[15],difficulty:2},{word:"PRÓSTATA",clue:"Glândula que produz fluido prostático.",specialties:[15],difficulty:1},{word:"GLÂNDULAS BULBOURETRAIS",clue:"Glândulas que lubrificam a uretra masculina.",specialties:[15],difficulty:3},{word:"CRIPTORQUIDIA",clue:"Testículo não descido.",specialties:[15,16],difficulty:2},{word:"HIDROCELE",clue:"Acúmulo de líquido na túnica vaginal.",specialties:[15],difficulty:2},{word:"VARICOCELE",clue:"Dilatação das veias do cordão espermático.",specialties:[15],difficulty:2},{word:"TORÇÃO TESTICULAR",clue:"Rotação do testículo sobre o cordão espermático.",specialties:[15,25],difficulty:2},{word:"BALANOPOSTITE",clue:"Inflamação da glande e prepúcio.",specialties:[15,20],difficulty:3},{word:"FIMOSE",clue:"Estreitamento do prepúcio.",specialties:[15],difficulty:1},{word:"PARAFIMOSE",clue:"Impossibilidade de recolocar o prepúcio sobre a glande.",specialties:[15],difficulty:2},{word:"PRIAPISMO",clue:"Ereção prolongada e dolorosa.",specialties:[15],difficulty:2},{word:"ANENCEFALIA",clue:"Malformação com ausência de parte do encéfalo.",specialties:[14,4],difficulty:3},{word:"MIELOMENINGOCELE",clue:"Defeito no fechamento do tubo neural.",specialties:[14,4],difficulty:3},{word:"ESPINHA BÍFIDA",clue:"Falha no fechamento das vértebras.",specialties:[14,4],difficulty:2},{word:"DISRAFISMO",clue:"Termo geral para defeitos de fechamento embrionário.",specialties:[14],difficulty:3},{word:"DIASTEMA",clue:"Espaçamento entre dentes.",specialties:[16],difficulty:2},{word:"ANOMALIA DE EBSTEIN",clue:"Malformação da válvula tricúspide.",specialties:[16,7],difficulty:3},{word:"TETRALOGIA DE FALLOT",clue:"Conjunto de quatro defeitos cardíacos congênitos.",specialties:[16,7],difficulty:3},{word:"CIV",clue:"Comunicação interventricular.",specialties:[16,7],difficulty:2},{word:"CIA",clue:"Comunicação interatrial.",specialties:[16,7],difficulty:2},{word:"PCA",clue:"Persistência do canal arterial.",specialties:[16,7],difficulty:2},{word:"ATRESIA",clue:"Ausência de abertura normal em órgão tubular.",specialties:[16,14],difficulty:2},{word:"FENILCETONÚRIA",clue:"Erro inato do metabolismo da fenilalanina.",specialties:[16,27],difficulty:2},{word:"GALACTOSEMIA",clue:"Deficiência na metabolização da galactose.",specialties:[16,27],difficulty:2},{word:"HIPOTONIA",clue:"Diminuição do tônus muscular.",specialties:[16,17],difficulty:1},{word:"HIPERTONIA",clue:"Aumento do tônus muscular.",specialties:[16,17],difficulty:1},{word:"PLAGIOCEFALIA",clue:"Assimetria craniana em lactentes.",specialties:[16],difficulty:3},{word:"LINFEDEMA",clue:"Acúmulo de linfa nos tecidos.",specialties:[21,17],difficulty:2},{word:"ANOSMIA",clue:"Perda do sentido do olfato.",specialties:[4],difficulty:2},{word:"AGEUSIA",clue:"Perda do sentido do paladar.",specialties:[4],difficulty:2},{word:"PAROSMIA",clue:"Distúrbio do olfato.",specialties:[4],difficulty:3},{word:"TINITUS",clue:"Sons percebidos nos ouvidos sem estímulo externo.",specialties:[4],difficulty:1},{word:"NISTAGMO",clue:"Movimentos involuntários dos olhos.",specialties:[4],difficulty:2},{word:"AMBLIOPIA",clue:"Diminuição da acuidade visual sem causa orgânica.",specialties:[4],difficulty:2},{word:"ESTRABISMO",clue:"Desalinhamento dos olhos.",specialties:[4],difficulty:1},{word:"OTORRAGIA",clue:"Sangramento pelo ouvido.",specialties:[4],difficulty:2},{word:"OTORREIA",clue:"Saída de líquido pelo ouvido.",specialties:[4],difficulty:2},{word:"GLOSSITE",clue:"Inflamação da língua.",specialties:[9],difficulty:2},{word:"ESTOMATITE",clue:"Inflamação da mucosa bucal.",specialties:[9],difficulty:1},{word:"FARINGITE",clue:"Inflamação da faringe.",specialties:[8,20],difficulty:1},{word:"LARINGITE",clue:"Inflamação da laringe.",specialties:[8,20],difficulty:1},{word:"DISFAGIA",clue:"Dificuldade para engolir.",specialties:[9],difficulty:1},{word:"ODINOFAGIA",clue:"Dor ao engolir.",specialties:[9],difficulty:2},{word:"RGE",clue:"Refluxo gastroesofágico.",specialties:[9],difficulty:1},{word:"PIROSE",clue:"Sensação de queimação retroesternal.",specialties:[9],difficulty:1},{word:"MELENA",clue:"Fezes escuras por sangue digerido.",specialties:[9],difficulty:2},{word:"HEMATÊMESE",clue:"Vômito com sangue.",specialties:[9],difficulty:2},{word:"HEMATOCEZIA",clue:"Sangue vivo nas fezes.",specialties:[9],difficulty:2},{word:"TENESMO",clue:"Sensação de evacuação incompleta.",specialties:[9],difficulty:2},{word:"DIARREIA",clue:"Fezes líquidas frequentes.",specialties:[9],difficulty:1},{word:"CONSTIPAÇÃO",clue:"Dificuldade ou infrequência de evacuações.",specialties:[9],difficulty:1},{word:"METEORISMO",clue:"Excesso de gases intestinais.",specialties:[9],difficulty:2},{word:"ASCITE",clue:"Acúmulo de líquido na cavidade peritoneal.",specialties:[9,24],difficulty:2},{word:"HEPATOMEGALIA",clue:"Aumento do tamanho do fígado.",specialties:[24],difficulty:1},{word:"ESPLENOMEGALIA",clue:"Aumento do tamanho do baço.",specialties:[5],difficulty:2},{word:"ICTERÍCIA",clue:"Amarelamento da pele e mucosas.",specialties:[24,5],difficulty:1},{word:"COLELITÍASE",clue:"Presença de cálculos biliares.",specialties:[24,9],difficulty:2},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[24,9],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9],difficulty:2},{word:"GANGRENA",clue:"Morte de tecido devido à falta de circulação.",specialties:[22,25],difficulty:2},{word:"SEPSIS",clue:"Resposta inflamatória sistêmica a uma infecção.",specialties:[25,20],difficulty:1},{word:"CHOQUE SÉPTICO",clue:"Disfunção circulatória grave por infecção.",specialties:[25,20],difficulty:2},{word:"ENDOCARDITE",clue:"Infecção do revestimento interno do coração.",specialties:[7,20],difficulty:2},{word:"PERICARDITE",clue:"Inflamação do pericárdio.",specialties:[7,20],difficulty:2},{word:"MIOCARDITE",clue:"Inflamação do músculo cardíaco.",specialties:[7,20],difficulty:2},{word:"ARRITMIA",clue:"Alteração do ritmo cardíaco normal.",specialties:[7],difficulty:1},{word:"TAQUICARDIA",clue:"Batimento cardíaco acelerado.",specialties:[7],difficulty:1},{word:"BRADICARDIA",clue:"Batimento cardíaco lento.",specialties:[7],difficulty:1},{word:"FIBRILAÇÃO",clue:"Contração rápida e descoordenada das fibras cardíacas.",specialties:[7],difficulty:2},{word:"ANISOCITOSE",clue:"Variação no tamanho das células sanguíneas.",specialties:[5],difficulty:2},{word:"POIQUILOCITOSE",clue:"Variação na forma das células sanguíneas.",specialties:[5],difficulty:2},{word:"LEUCOPENIA",clue:"Redução no número de leucócitos.",specialties:[5],difficulty:2},{word:"LEUCOCITOSE",clue:"Aumento no número de leucócitos.",specialties:[5],difficulty:1},{word:"TROMBOCITOPENIA",clue:"Redução no número de plaquetas.",specialties:[5],difficulty:2},{word:"ESPLENECTOMIA",clue:"Remoção cirúrgica do baço.",specialties:[19,5],difficulty:2},{word:"HEMOGLOBINURIA",clue:"Presença de hemoglobina na urina.",specialties:[10,5],difficulty:2},{word:"HEMATURIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:1},{word:"GLOMERULONEFRITE",clue:"Inflamação dos glomérulos renais.",specialties:[10],difficulty:2},{word:"NEFROSE",clue:"Doença degenerativa dos rins.",specialties:[10],difficulty:2},{word:"HEMODIALISE",clue:"Procedimento para filtrar o sangue em insuficiência renal.",specialties:[10],difficulty:1},{word:"OFTALMOLOGIA",clue:"Especialidade médica que estuda os olhos.",specialties:[4],difficulty:1},{word:"CATARATA",clue:"Opacificação do cristalino do olho.",specialties:[4],difficulty:1},{word:"GLAUCOMA",clue:"Aumento da pressão intraocular.",specialties:[4],difficulty:1},{word:"RETINOPATIA",clue:"Doença da retina.",specialties:[4],difficulty:2},{word:"CERATITE",clue:"Inflamação da córnea.",specialties:[4,20],difficulty:2},{word:"UVEITE",clue:"Inflamação da úvea do olho.",specialties:[4,20],difficulty:2},{word:"ESTOMATOLOGIA",clue:"Estudo da boca e suas doenças.",specialties:[9],difficulty:2},{word:"CÁRIE",clue:"Destruição do esmalte dentário por bactérias.",specialties:[9],difficulty:1},{word:"PERIODONTITE",clue:"Inflamação dos tecidos de suporte dos dentes.",specialties:[9],difficulty:2},{word:"GINGIVITE",clue:"Inflamação da gengiva.",specialties:[9],difficulty:1},{word:"HEPATITE A",clue:"Infecção viral aguda do fígado.",specialties:[24,20],difficulty:1},{word:"HEPATITE B",clue:"Infecção viral crônica do fígado.",specialties:[24,20],difficulty:1},{word:"HEPATITE D",clue:"Infecção viral que necessita do vírus da hepatite B.",specialties:[24,20],difficulty:2},{word:"HEPATITE E",clue:"Infecção viral do fígado transmitida por via fecal-oral.",specialties:[24,20],difficulty:2},{word:"MONONUCLEOSE",clue:"Doença infecciosa causada pelo vírus Epstein-Barr.",specialties:[20,5],difficulty:2},{word:"LINFOMA",clue:"Câncer do sistema linfático.",specialties:[11,5],difficulty:2},{word:"LEUCEMIA LINFOCÍTICA",clue:"Câncer dos linfócitos.",specialties:[11,5],difficulty:2},{word:"LEUCEMIA MIELOCÍTICA",clue:"Câncer das células mieloides.",specialties:[11,5],difficulty:2},{word:"ANEMIA FERROPRIVA",clue:"Anemia por deficiência de ferro.",specialties:[5],difficulty:1},{word:"ANEMIA MEGALOBLÁSTICA",clue:"Anemia por deficiência de vitamina B12 ou ácido fólico.",specialties:[5],difficulty:2},{word:"ANEMIA HEMOLÍTICA",clue:"Anemia por destruição excessiva de eritrócitos.",specialties:[5],difficulty:2},{word:"ANEMIA FALCIFORME",clue:"Anemia hereditária com eritrócitos em forma de foice.",specialties:[5,27],difficulty:2},{word:"AIDS",clue:"Síndrome da imunodeficiência adquirida.",specialties:[20,21],difficulty:1},{word:"HIV",clue:"Vírus da imunodeficiência humana.",specialties:[20,21],difficulty:1},{word:"ZIKA VÍRUS",clue:"Vírus transmitido pelo mosquito Aedes.",specialties:[20],difficulty:1},{word:"CHIKUNGUNYA",clue:"Doença viral transmitida por mosquitos.",specialties:[20],difficulty:1},{word:"COVID",clue:"Doença causada pelo coronavírus SARS-CoV-2.",specialties:[20,8],difficulty:1},{word:"HERPES ZÓSTER",clue:"Reativação do vírus da varicela.",specialties:[20,12],difficulty:2},{word:"RUBEOLA",clue:"Doença viral com risco para gestantes.",specialties:[20,14],difficulty:1},{word:"VARÍOLA",clue:"Doença viral erradicada mundialmente.",specialties:[20],difficulty:2},{word:"FEBRE TIFOIDE",clue:"Infecção bacteriana por Salmonella typhi.",specialties:[20],difficulty:2},{word:"FEBRE REUMÁTICA",clue:"Doença inflamatória após infecção estreptocócica.",specialties:[7,20],difficulty:2},{word:"COLITE ULCERATIVA",clue:"Doença inflamatória do intestino grosso.",specialties:[9],difficulty:2},{word:"DOENÇA DE CROHN",clue:"Doença inflamatória que pode afetar qualquer parte do trato digestivo.",specialties:[9],difficulty:2},{word:"CELÍACA",clue:"Doença autoimune desencadeada pelo glúten.",specialties:[9,21],difficulty:2},{word:"INTOLERÂNCIA À LACTOSE",clue:"Incapacidade de digerir lactose.",specialties:[9],difficulty:1},{word:"SÍNDROME DO INTESTINO IRRITÁVEL",clue:"Distúrbio funcional do intestino.",specialties:[9],difficulty:1},{word:"DIVERTICULITE",clue:"Inflamação de divertículos no intestino grosso.",specialties:[9],difficulty:2},{word:"HEMORROIDAS",clue:"Dilatações venosas no canal anal.",specialties:[9],difficulty:1},{word:"FISSURA ANAL",clue:"Pequena laceração no revestimento anal.",specialties:[9],difficulty:2},{word:"FÍSTULA ANAL",clue:"Canal anormal entre o canal anal e a pele.",specialties:[9,19],difficulty:2},{word:"HERNIA DE HIATO",clue:"Protrusão do estômago através do diafragma.",specialties:[9],difficulty:2},{word:"ULCERA GÁSTRICA",clue:"Ferida na mucosa do estômago.",specialties:[9],difficulty:1},{word:"ULCERA DUODENAL",clue:"Ferida na mucosa do duodeno.",specialties:[9],difficulty:1},{word:"GASTRINOMA",clue:"Tumor produtor de gastrina.",specialties:[11,9],difficulty:3},{word:"INSULINOMA",clue:"Tumor produtor de insulina.",specialties:[11,6],difficulty:3},{word:"FEOCROMOCITOMA",clue:"Tumor da medula adrenal produtor de catecolaminas.",specialties:[11,6],difficulty:3},{word:"ADENOMA HIPOFISÁRIO",clue:"Tumor benigno da hipófise.",specialties:[11,6],difficulty:2},{word:"NEOPLASIA ENDOCRINA MÚLTIPLA",clue:"Síndrome genética com múltiplos tumores endócrinos.",specialties:[11,6,27],difficulty:3},{word:"HANSENÍASE",clue:"Doença infecciosa crônica causada pelo Mycobacterium leprae.",specialties:[20,12],difficulty:2},{word:"PIODERMA",clue:"Infecção cutânea purulenta.",specialties:[12,20],difficulty:2},{word:"DERMATOMIOSITE",clue:"Doença inflamatória da pele e músculos.",specialties:[12,17],difficulty:3},{word:"PSORIASE",clue:"Doença autoimune com placas escamosas na pele.",specialties:[12,21],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação da pele em áreas delimitadas.",specialties:[12],difficulty:1},{word:"ALOPECIA AREATA",clue:"Perda de cabelo em áreas específicas.",specialties:[12],difficulty:2},{word:"DERMATITE SEBORREICA",clue:"Inflamação crônica da pele com descamação oleosa.",specialties:[12],difficulty:1},{word:"DERMATITE ATÓPICA",clue:"Eczema crônico, geralmente iniciado na infância.",specialties:[12,16],difficulty:1},{word:"URTICÁRIA",clue:"Reação alérgica com erupções cutâneas pruriginosas.",specialties:[12,21],difficulty:1},{word:"ANGIOEDEMA",clue:"Inchaço profundo da pele e mucosas.",specialties:[12,21],difficulty:2},{word:"HEPATOCARCINOMA",clue:"Câncer primário do fígado.",specialties:[11,24],difficulty:2},{word:"CARCINOMA DE CÉLULAS ESCAMOSAS",clue:"Tipo de câncer de pele.",specialties:[11,12],difficulty:2},{word:"MELANOMA MALIGNO",clue:"Tipo agressivo de câncer de pele.",specialties:[11,12],difficulty:1},{word:"ADENOCARCINOMA",clue:"Câncer originado em células glandulares.",specialties:[11],difficulty:2},{word:"LEIOMIOSSARCOMA",clue:"Tumor maligno do músculo liso.",specialties:[11,17],difficulty:3},{word:"OSTEOSSARCOMA",clue:"Tumor maligno do osso.",specialties:[11,17],difficulty:2},{word:"RABDOMIOSSARCOMA",clue:"Tumor maligno do músculo estriado.",specialties:[11,17],difficulty:3},{word:"NEUROBLASTOMA",clue:"Tumor maligno do sistema nervoso simpático.",specialties:[11,16],difficulty:3},{word:"RETINOBLASTOMA",clue:"Tumor maligno da retina em crianças.",specialties:[11,16],difficulty:2},{word:"TERATOMA",clue:"Tumor derivado de células germinativas.",specialties:[11],difficulty:3},{word:"MESOTELIOMA",clue:"Câncer das células mesoteliais, associado ao amianto.",specialties:[11],difficulty:3},{word:"GLIOBLASTOMA",clue:"Tipo agressivo de tumor cerebral.",specialties:[11,4],difficulty:2},{word:"ASTROCITOMA",clue:"Tumor cerebral originado de astrócitos.",specialties:[11,4],difficulty:2},{word:"SCHWANNOMA",clue:"Tumor benigno das células de Schwann.",specialties:[11,4],difficulty:3},{word:"NEURINOMA",clue:"Outro nome para schwannoma.",specialties:[11,4],difficulty:3},{word:"MENINGIOMA",clue:"Tumor benigno das meninges.",specialties:[11,4],difficulty:2},{word:"SÍNDROME DE DOWN",clue:"Trissomia do cromossomo 21.",specialties:[16,27],difficulty:1},{word:"SÍNDROME DE TURNER",clue:"Monossomia do cromossomo X em meninas.",specialties:[14,27],difficulty:2},{word:"SÍNDROME DE KLINEFELTER",clue:"Cromossomo X extra em homens (XXY).",specialties:[15,27],difficulty:2},{word:"SÍNDROME DE EDWARDS",clue:"Trissomia do cromossomo 18.",specialties:[16,27],difficulty:3},{word:"SÍNDROME DE PATAU",clue:"Trissomia do cromossomo 13.",specialties:[16,27],difficulty:3},{word:"FIBROSE CÍSTICA",clue:"Doença genética que afeta glândulas exócrinas.",specialties:[16,27],difficulty:2},{word:"COREIA DE HUNTINGTON",clue:"Doença neurodegenerativa hereditária.",specialties:[4,27],difficulty:2},{word:"HEMOFILIA A",clue:"Deficiência do fator VIII de coagulação.",specialties:[5,27],difficulty:2},{word:"HEMOFILIA B",clue:"Deficiência do fator IX de coagulação.",specialties:[5,27],difficulty:2},{word:"DISTROFIA MUSCULAR DE DUCHENNE",clue:"Doença genética que causa fraqueza muscular.",specialties:[17,27],difficulty:2},{word:"FENILCETONURIA",clue:"Deficiência na metabolização da fenilalanina.",specialties:[16,27],difficulty:2},{word:"GALACTOSEMIA",clue:"Incapacidade de metabolizar galactose.",specialties:[16,27],difficulty:2},{word:"ANEMIA DE FANCONI",clue:"Doença genética com falência da medula óssea.",specialties:[5,27],difficulty:3},{word:"XERODERMA PIGMENTOSO",clue:"Hipersensibilidade à luz UV.",specialties:[12,27],difficulty:3},{word:"ENFERMAGEM",clue:"Profissão que auxilia na assistência ao paciente.",specialties:[25],difficulty:1},{word:"FISIOTERAPIA",clue:"Profissão que reabilita funções motoras.",specialties:[17],difficulty:1},{word:"FONOAUDIOLOGIA",clue:"Profissão que trata distúrbios da comunicação.",specialties:[4,13],difficulty:1},{word:"NUTRIÇÃO",clue:"Ciência que estuda os alimentos e suas interações.",specialties:[9,25],difficulty:1},{word:"PSICOLOGIA",clue:"Ciência que estuda o comportamento humano.",specialties:[13],difficulty:1},{word:"TERAPIA OCUPACIONAL",clue:"Profissão que auxilia na independência funcional.",specialties:[17,13],difficulty:1},{word:"FARMÁCIA",clue:"Ciência que estuda medicamentos.",specialties:[26],difficulty:1},{word:"BIOMEDICINA",clue:"Profissão que atua em análises clínicas e pesquisas.",specialties:[28],difficulty:1},{word:"BIOTECNOLOGIA",clue:"Uso de organismos vivos para desenvolver produtos.",specialties:[28,27],difficulty:2},{word:"PATOLOGIA CLÍNICA",clue:"Área que realiza exames laboratoriais para diagnóstico.",specialties:[22],difficulty:1},{word:"SAÚDE PÚBLICA",clue:"Área que estuda a saúde das populações.",specialties:[25],difficulty:1},{word:"EPIDEMIOLOGIA",clue:"Estudo da distribuição e determinantes das doenças.",specialties:[20],difficulty:1},{word:"BIOESTATÍSTICA",clue:"Aplicação de estatística em biologia e medicina.",specialties:[25],difficulty:2},{word:"BIOÉTICA",clue:"Estudo das questões éticas na medicina e biologia.",specialties:[25],difficulty:1},{word:"CIRURGIA PLÁSTICA",clue:"Especialidade que corrige deformidades e lesões.",specialties:[19],difficulty:1},{word:"CIRURGIA CARDIOVASCULAR",clue:"Cirurgia do coração e vasos sanguíneos.",specialties:[19,7],difficulty:1},{word:"CIRURGIA TORÁCICA",clue:"Cirurgia dos órgãos do tórax.",specialties:[19,8],difficulty:1},{word:"CIRURGIA VASCULAR",clue:"Cirurgia dos vasos sanguíneos periféricos.",specialties:[19,7],difficulty:1},{word:"CIRURGIA GERAL",clue:"Especialidade ampla que inclui vários tipos de cirurgia.",specialties:[19],difficulty:1},{word:"ORTOPEDIA",clue:"Especialidade que trata doenças do sistema musculoesquelético.",specialties:[17],difficulty:1},{word:"TRAUMATOLOGIA",clue:"Estudo das lesões causadas por traumas.",specialties:[17,25],difficulty:1},{word:"RADIOLOGIA INTERVENCIONISTA",clue:"Procedimentos minimamente invasivos guiados por imagem.",specialties:[18],difficulty:2},{word:"MEDICINA NUCLEAR",clue:"Uso de substâncias radioativas para diagnóstico e terapia.",specialties:[18],difficulty:2},{word:"DENSITOMETRIA ÓSSEA",clue:"Exame que avalia a densidade mineral óssea.",specialties:[18,17],difficulty:1},{word:"ANGIOGRAFIA",clue:"Exame radiológico dos vasos sanguíneos.",specialties:[18,7],difficulty:2},{word:"TOMOGRAFIA COMPUTADORIZADA",clue:"Exame de imagem que usa raios X para criar cortes transversais.",specialties:[18],difficulty:1},{word:"RESSONÂNCIA MAGNÉTICA",clue:"Exame de imagem que usa campos magnéticos.",specialties:[18],difficulty:1},{word:"ULTRASSONOGRAFIA",clue:"Exame de imagem que usa ondas sonoras.",specialties:[18],difficulty:1},{word:"ECOCARDIOGRAMA",clue:"Ultrassom do coração.",specialties:[7,18],difficulty:1},{word:"ELETROENCEFALOGRAMA",clue:"Registro da atividade elétrica cerebral.",specialties:[4,18],difficulty:1},{word:"ELETROMIOGRAMA",clue:"Exame que avalia a atividade elétrica dos músculos.",specialties:[17,18],difficulty:2},{word:"TESTE ERGOMÉTRICO",clue:"Avaliação do desempenho cardíaco durante esforço.",specialties:[7],difficulty:1},{word:"CINTILOGRAFIA",clue:"Exame que usa radiofármacos para avaliar órgãos.",specialties:[18],difficulty:2},{word:"PET SCAN",clue:"Tomografia por emissão de pósitrons.",specialties:[18],difficulty:2},{word:"COLPOSCOPIA",clue:"Exame do colo uterino com lente de aumento.",specialties:[15],difficulty:1},{word:"HISTEROSCOPIA",clue:"Exame endoscópico do interior do útero.",specialties:[15],difficulty:2},{word:"LAPAROSCOPIA",clue:"Procedimento cirúrgico minimamente invasivo no abdômen.",specialties:[19],difficulty:1},{word:"ENDOSCOPIA DIGESTIVA",clue:"Exame do trato gastrointestinal com endoscópio.",specialties:[9,18],difficulty:1},{word:"BRONCOSCOPIA",clue:"Exame das vias aéreas com broncoscópio.",specialties:[8,18],difficulty:2},{word:"ARTROSCOPIA",clue:"Exame de articulações com endoscópio.",specialties:[17,18],difficulty:2},{word:"CISTOSCOPIA",clue:"Exame da bexiga com cistoscópio.",specialties:[10,18],difficulty:2},{word:"ELETROCARDIOGRAMA",clue:"Registro da atividade elétrica do coração.",specialties:[7],difficulty:1},{word:"MAPA",clue:"Monitorização Ambulatorial da Pressão Arterial.",specialties:[7],difficulty:2},{word:"HOLTER",clue:"Monitorização eletrocardiográfica contínua.",specialties:[7],difficulty:2},{word:"DOPPLER TRANSCRANIANO",clue:"Exame ultrassonográfico das artérias cerebrais.",specialties:[4,18],difficulty:3},{word:"TESTE DE ESFORÇO",clue:"Avaliação da resposta cardiovascular ao exercício.",specialties:[7],difficulty:1},{word:"BIÓPSIA",clue:"Remoção de tecido para exame diagnóstico.",specialties:[19,22],difficulty:1},{word:"HEMODINÂMICA",clue:"Estudo do fluxo sanguíneo.",specialties:[7],difficulty:2},{word:"ANGIOPLASTIA",clue:"Procedimento para desobstruir vasos sanguíneos.",specialties:[7,19],difficulty:1},{word:"CATETERISMO CARDÍACO",clue:"Procedimento para avaliar as artérias coronárias.",specialties:[7,19],difficulty:1},{word:"MARCA-PASSO",clue:"Dispositivo que regula os batimentos cardíacos.",specialties:[7],difficulty:1},{word:"PNEUMONIA",clue:"Infecção dos pulmões causada por bactérias ou vírus.",specialties:[8,20],difficulty:1},{word:"BRONQUITE",clue:"Inflamação dos brônquios.",specialties:[8,20],difficulty:1},{word:"ENFISEMA",clue:"Doença pulmonar que causa falta de ar.",specialties:[8],difficulty:2},{word:"ASMA",clue:"Doença respiratória caracterizada por broncoespasmo.",specialties:[8],difficulty:1},{word:"TUBERCULOSE",clue:"Doença infecciosa causada pelo Mycobacterium tuberculosis.",specialties:[8,20],difficulty:1},{word:"HIPERTENSAO",clue:"Pressão arterial elevada crônica.",specialties:[7],difficulty:1},{word:"INFARTO",clue:"Morte do tecido cardíaco devido à falta de oxigênio.",specialties:[7,25],difficulty:1},{word:"ANGINA",clue:"Dor no peito devido à diminuição do fluxo sanguíneo.",specialties:[7],difficulty:1},{word:"ATEROSCLEROSE",clue:"Acúmulo de placas nas artérias.",specialties:[7],difficulty:2},{word:"ARRITMIA",clue:"Batimentos cardíacos irregulares.",specialties:[7],difficulty:1},{word:"GASTRITE",clue:"Inflamação da mucosa do estômago.",specialties:[9],difficulty:1},{word:"ESOFAGITE",clue:"Inflamação do esôfago.",specialties:[9],difficulty:1},{word:"CIRROSE",clue:"Cicatrização crônica do fígado.",specialties:[24],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9],difficulty:2},{word:"HEPATITE",clue:"Inflamação do fígado.",specialties:[24,20],difficulty:1},{word:"INSUFICIENCIA RENAL",clue:"Perda da função dos rins.",specialties:[10],difficulty:1},{word:"LITIASE RENAL",clue:"Formação de cálculos nos rins.",specialties:[10],difficulty:1},{word:"NEFROPATIA DIABETICA",clue:"Doença renal causada por diabetes.",specialties:[10,6],difficulty:2},{word:"SINDROME NEFROTICA",clue:"Condição renal com perda de proteína na urina.",specialties:[10],difficulty:2},{word:"HEMATURIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:1},{word:"OSTEOPOROSE",clue:"Doença que diminui a densidade óssea.",specialties:[17],difficulty:1},{word:"ARTRITE REUMATOIDE",clue:"Doença autoimune que causa inflamação nas articulações.",specialties:[17,21],difficulty:2},{word:"LUXACAO",clue:"Deslocamento de um osso da articulação.",specialties:[17],difficulty:1},{word:"FRATURA",clue:"Quebra de um osso.",specialties:[17],difficulty:1},{word:"ESCOLIOSE",clue:"Curvatura anormal da coluna vertebral.",specialties:[17],difficulty:1},{word:"DEPRESSAO",clue:"Transtorno mental com humor deprimido persistente.",specialties:[13],difficulty:1},{word:"ANSIEDADE",clue:"Sensação de preocupação e medo intensos.",specialties:[13],difficulty:1},{word:"ESQUIZOFRENIA",clue:"Transtorno mental que afeta a percepção da realidade.",specialties:[13],difficulty:2},{word:"TRANSTORNO BIPOLAR",clue:"Transtorno de humor com episódios de mania e depressão.",specialties:[13],difficulty:1},{word:"FOBIA",clue:"Medo intenso e irracional de algo específico.",specialties:[13],difficulty:1},{word:"LEUCEMIA",clue:"Câncer dos tecidos formadores de sangue.",specialties:[11,5],difficulty:2},{word:"LINFOMA",clue:"Câncer do sistema linfático.",specialties:[11,5],difficulty:2},{word:"MIELOMA MULTIPLO",clue:"Câncer das células plasmáticas.",specialties:[11,5],difficulty:3},{word:"CARCINOMA",clue:"Tipo de câncer que começa na pele ou nos tecidos que revestem órgãos.",specialties:[11],difficulty:2},{word:"SARCOMA",clue:"Câncer dos tecidos conjuntivos.",specialties:[11],difficulty:2},{word:"ANEMIA",clue:"Diminuição da capacidade do sangue de transportar oxigênio.",specialties:[5],difficulty:1},{word:"HEMOFILIA",clue:"Distúrbio da coagulação do sangue.",specialties:[5,27],difficulty:2},{word:"TALASSEMIA",clue:"Doença hereditária que afeta a produção de hemoglobina.",specialties:[5,27],difficulty:2},{word:"MALARIA",clue:"Doença infecciosa transmitida por mosquitos.",specialties:[20],difficulty:2},{word:"DENGUE",clue:"Doença viral transmitida pelo mosquito Aedes aegypti.",specialties:[20],difficulty:1},{word:"ZIKA",clue:"Doença viral transmitida por mosquitos.",specialties:[20],difficulty:1},{word:"LEPTOSPIROSE",clue:"Doença bacteriana transmitida pela urina de animais.",specialties:[20],difficulty:2},{word:"VARICELA",clue:"Doença viral também conhecida como catapora.",specialties:[16,20],difficulty:1},{word:"SARAMPO",clue:"Doença viral contagiosa com erupções cutâneas.",specialties:[16,20],difficulty:1},{word:"CAXUMBA",clue:"Infecção viral que causa inchaço das glândulas salivares.",specialties:[16,20],difficulty:1},{word:"RUBEOLA",clue:"Doença viral que pode causar defeitos congênitos.",specialties:[16,14],difficulty:1},{word:"POLIOMIELITE",clue:"Doença viral que pode causar paralisia.",specialties:[16,20],difficulty:2},{word:"HEMORRAGIA",clue:"Perda excessiva de sangue.",specialties:[25,5],difficulty:1},{word:"SINCOPE",clue:"Perda temporária da consciência.",specialties:[25],difficulty:2},{word:"CONVULSAO",clue:"Contrações musculares involuntárias e súbitas.",specialties:[25],difficulty:1},{word:"CHOQUE",clue:"Condição crítica de insuficiência circulatória.",specialties:[25],difficulty:2},{word:"HIPERTERMIA",clue:"Aumento anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"HIPOTERMIA",clue:"Diminuição anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"ALZHEIMER",clue:"Doença neurodegenerativa que causa demência.",specialties:[4],difficulty:1},{word:"PARKINSON",clue:"Doença neurodegenerativa que afeta o movimento.",specialties:[4],difficulty:1},{word:"EPILEPSIA",clue:"Condição neurológica com crises convulsivas.",specialties:[4],difficulty:1},{word:"MIGRANIA",clue:"Tipo de dor de cabeça intensa e pulsátil.",specialties:[4],difficulty:1},{word:"ESCLEROSE MULTIPLA",clue:"Doença autoimune que afeta o sistema nervoso central.",specialties:[4,21],difficulty:2},{word:"GASTROENTERITE",clue:"Inflamação do estômago e intestinos.",specialties:[9],difficulty:1},{word:"APENDICITE",clue:"Inflamação do apêndice.",specialties:[9],difficulty:1},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[9],difficulty:2},{word:"HEMORROIDAS",clue:"Dilatação das veias do reto e ânus.",specialties:[9],difficulty:1},{word:"DIVERTICULITE",clue:"Inflamação dos divertículos no intestino grosso.",specialties:[9],difficulty:2},{word:"BRONCODILATADOR",clue:"Medicamento que dilata as vias aéreas.",specialties:[8,26],difficulty:1},{word:"ANTIHISTAMINICO",clue:"Medicamento que bloqueia os efeitos da histamina.",specialties:[26,21],difficulty:1},{word:"ANALGESICO",clue:"Medicamento que alivia a dor.",specialties:[26],difficulty:1},{word:"ANTIPIRETICO",clue:"Medicamento que reduz a febre.",specialties:[26],difficulty:1},{word:"ANTIBIOTICO",clue:"Medicamento que combate infecções bacterianas.",specialties:[26,20],difficulty:1},{word:"INSULINA",clue:"Hormônio que regula os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"GLUCAGON",clue:"Hormônio que aumenta os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"CORTISOL",clue:"Hormônio do estresse produzido pelas glândulas adrenais.",specialties:[6],difficulty:1},{word:"ADRENALINA",clue:"Hormônio que prepara o corpo para a ação.",specialties:[6,1],difficulty:1},{word:"ESTROGENIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"PROGESTERONA",clue:"Hormônio envolvido no ciclo menstrual e gravidez.",specialties:[6,15],difficulty:1},{word:"TESTOSTERONA",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:1},{word:"TIROXINA",clue:"Hormônio produzido pela tireoide.",specialties:[6],difficulty:1},{word:"PARATORMONIO",clue:"Hormônio que regula os níveis de cálcio no sangue.",specialties:[6],difficulty:2},{word:"HEMOSTASIA",clue:"Processo de parar um sangramento.",specialties:[5,19],difficulty:1},{word:"FIBRINA",clue:"Proteína que forma a rede de um coágulo sanguíneo.",specialties:[5,29],difficulty:2},{word:"PLAQUETA",clue:"Célula sanguínea envolvida na coagulação.",specialties:[5],difficulty:1},{word:"HEPARINA",clue:"Anticoagulante natural do corpo.",specialties:[5,26],difficulty:2},{word:"WARFARINA",clue:"Medicamento anticoagulante.",specialties:[26,5],difficulty:2},{word:"INSOMNIO",clue:"Dificuldade em iniciar ou manter o sono.",specialties:[13],difficulty:1},{word:"NARCOLEPSIA",clue:"Distúrbio do sono com sonolência diurna excessiva.",specialties:[13],difficulty:2},{word:"APNEIA DO SONO",clue:"Interrupção temporária da respiração durante o sono.",specialties:[8],difficulty:1},{word:"HIPOTIREOIDISMO",clue:"Deficiência de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"HIPERTIREOIDISMO",clue:"Excesso de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"ACNE",clue:"Doença de pele caracterizada por espinhas.",specialties:[12],difficulty:1},{word:"DERMATITE",clue:"Inflamação da pele.",specialties:[12],difficulty:1},{word:"PSORIASE",clue:"Doença de pele com placas escamosas.",specialties:[12],difficulty:1},{word:"ECZEMA",clue:"Doença de pele com inflamação e prurido.",specialties:[12],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação em áreas da pele.",specialties:[12],difficulty:1},{word:"PNEUMONIA",clue:"Infecção dos pulmões causada por bactérias ou vírus.",specialties:[8,20],difficulty:1},{word:"BRONQUITE",clue:"Inflamação dos brônquios.",specialties:[8,20],difficulty:1},{word:"ENFISEMA",clue:"Doença pulmonar que causa falta de ar.",specialties:[8],difficulty:2},{word:"ASMA",clue:"Doença respiratória caracterizada por broncoespasmo.",specialties:[8],difficulty:1},{word:"TUBERCULOSE",clue:"Doença infecciosa causada pelo Mycobacterium tuberculosis.",specialties:[8,20],difficulty:1},{word:"HIPERTENSAO",clue:"Pressão arterial elevada crônica.",specialties:[7],difficulty:1},{word:"INFARTO",clue:"Morte do tecido cardíaco devido à falta de oxigênio.",specialties:[7,25],difficulty:1},{word:"ANGINA",clue:"Dor no peito devido à diminuição do fluxo sanguíneo.",specialties:[7],difficulty:1},{word:"ATEROSCLEROSE",clue:"Acúmulo de placas nas artérias.",specialties:[7],difficulty:2},{word:"ARRITMIA",clue:"Batimentos cardíacos irregulares.",specialties:[7],difficulty:1},{word:"GASTRITE",clue:"Inflamação da mucosa do estômago.",specialties:[9],difficulty:1},{word:"ESOFAGITE",clue:"Inflamação do esôfago.",specialties:[9],difficulty:1},{word:"CIRROSE",clue:"Cicatrização crônica do fígado.",specialties:[24],difficulty:2},{word:"PANCREATITE",clue:"Inflamação do pâncreas.",specialties:[9],difficulty:2},{word:"HEPATITE",clue:"Inflamação do fígado.",specialties:[24,20],difficulty:1},{word:"INSUFICIENCIA RENAL",clue:"Perda da função dos rins.",specialties:[10],difficulty:1},{word:"LITIASE RENAL",clue:"Formação de cálculos nos rins.",specialties:[10],difficulty:1},{word:"NEFROPATIA DIABETICA",clue:"Doença renal causada por diabetes.",specialties:[10,6],difficulty:2},{word:"SINDROME NEFROTICA",clue:"Condição renal com perda de proteína na urina.",specialties:[10],difficulty:2},{word:"HEMATURIA",clue:"Presença de sangue na urina.",specialties:[10],difficulty:1},{word:"OSTEOPOROSE",clue:"Doença que diminui a densidade óssea.",specialties:[17],difficulty:1},{word:"ARTRITE REUMATOIDE",clue:"Doença autoimune que causa inflamação nas articulações.",specialties:[17,21],difficulty:2},{word:"LUXACAO",clue:"Deslocamento de um osso da articulação.",specialties:[17],difficulty:1},{word:"FRATURA",clue:"Quebra de um osso.",specialties:[17],difficulty:1},{word:"ESCOLIOSE",clue:"Curvatura anormal da coluna vertebral.",specialties:[17],difficulty:1},{word:"DEPRESSAO",clue:"Transtorno mental com humor deprimido persistente.",specialties:[13],difficulty:1},{word:"ANSIEDADE",clue:"Sensação de preocupação e medo intensos.",specialties:[13],difficulty:1},{word:"ESQUIZOFRENIA",clue:"Transtorno mental que afeta a percepção da realidade.",specialties:[13],difficulty:2},{word:"TRANSTORNO BIPOLAR",clue:"Transtorno de humor com episódios de mania e depressão.",specialties:[13],difficulty:1},{word:"FOBIA",clue:"Medo intenso e irracional de algo específico.",specialties:[13],difficulty:1},{word:"LEUCEMIA",clue:"Câncer dos tecidos formadores de sangue.",specialties:[11,5],difficulty:2},{word:"LINFOMA",clue:"Câncer do sistema linfático.",specialties:[11,5],difficulty:2},{word:"MIELOMA MULTIPLO",clue:"Câncer das células plasmáticas.",specialties:[11,5],difficulty:3},{word:"CARCINOMA",clue:"Tipo de câncer que começa na pele ou nos tecidos que revestem órgãos.",specialties:[11],difficulty:2},{word:"SARCOMA",clue:"Câncer dos tecidos conjuntivos.",specialties:[11],difficulty:2},{word:"ANEMIA",clue:"Diminuição da capacidade do sangue de transportar oxigênio.",specialties:[5],difficulty:1},{word:"HEMOFILIA",clue:"Distúrbio da coagulação do sangue.",specialties:[5,27],difficulty:2},{word:"TALASSEMIA",clue:"Doença hereditária que afeta a produção de hemoglobina.",specialties:[5,27],difficulty:2},{word:"MALARIA",clue:"Doença infecciosa transmitida por mosquitos.",specialties:[20],difficulty:2},{word:"DENGUE",clue:"Doença viral transmitida pelo mosquito Aedes aegypti.",specialties:[20],difficulty:1},{word:"ZIKA",clue:"Doença viral transmitida por mosquitos.",specialties:[20],difficulty:1},{word:"LEPTOSPIROSE",clue:"Doença bacteriana transmitida pela urina de animais.",specialties:[20],difficulty:2},{word:"VARICELA",clue:"Doença viral também conhecida como catapora.",specialties:[16,20],difficulty:1},{word:"SARAMPO",clue:"Doença viral contagiosa com erupções cutâneas.",specialties:[16,20],difficulty:1},{word:"CAXUMBA",clue:"Infecção viral que causa inchaço das glândulas salivares.",specialties:[16,20],difficulty:1},{word:"RUBEOLA",clue:"Doença viral que pode causar defeitos congênitos.",specialties:[16,14],difficulty:1},{word:"POLIOMIELITE",clue:"Doença viral que pode causar paralisia.",specialties:[16,20],difficulty:2},{word:"HEMORRAGIA",clue:"Perda excessiva de sangue.",specialties:[25,5],difficulty:1},{word:"SINCOPE",clue:"Perda temporária da consciência.",specialties:[25],difficulty:2},{word:"CONVULSAO",clue:"Contrações musculares involuntárias e súbitas.",specialties:[25],difficulty:1},{word:"CHOQUE",clue:"Condição crítica de insuficiência circulatória.",specialties:[25],difficulty:2},{word:"HIPERTERMIA",clue:"Aumento anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"HIPOTERMIA",clue:"Diminuição anormal da temperatura corporal.",specialties:[25],difficulty:1},{word:"ALZHEIMER",clue:"Doença neurodegenerativa que causa demência.",specialties:[4],difficulty:1},{word:"PARKINSON",clue:"Doença neurodegenerativa que afeta o movimento.",specialties:[4],difficulty:1},{word:"EPILEPSIA",clue:"Condição neurológica com crises convulsivas.",specialties:[4],difficulty:1},{word:"MIGRANIA",clue:"Tipo de dor de cabeça intensa e pulsátil.",specialties:[4],difficulty:1},{word:"ESCLEROSE MULTIPLA",clue:"Doença autoimune que afeta o sistema nervoso central.",specialties:[4,21],difficulty:2},{word:"GASTROENTERITE",clue:"Inflamação do estômago e intestinos.",specialties:[9],difficulty:1},{word:"APENDICITE",clue:"Inflamação do apêndice.",specialties:[9],difficulty:1},{word:"COLECISTITE",clue:"Inflamação da vesícula biliar.",specialties:[9],difficulty:2},{word:"HEMORROIDAS",clue:"Dilatação das veias do reto e ânus.",specialties:[9],difficulty:1},{word:"DIVERTICULITE",clue:"Inflamação dos divertículos no intestino grosso.",specialties:[9],difficulty:2},{word:"BRONCODILATADOR",clue:"Medicamento que dilata as vias aéreas.",specialties:[8,26],difficulty:1},{word:"ANTIHISTAMINICO",clue:"Medicamento que bloqueia os efeitos da histamina.",specialties:[26,21],difficulty:1},{word:"ANALGESICO",clue:"Medicamento que alivia a dor.",specialties:[26],difficulty:1},{word:"ANTIPIRETICO",clue:"Medicamento que reduz a febre.",specialties:[26],difficulty:1},{word:"ANTIBIOTICO",clue:"Medicamento que combate infecções bacterianas.",specialties:[26,20],difficulty:1},{word:"INSULINA",clue:"Hormônio que regula os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"GLUCAGON",clue:"Hormônio que aumenta os níveis de glicose no sangue.",specialties:[6],difficulty:1},{word:"CORTISOL",clue:"Hormônio do estresse produzido pelas glândulas adrenais.",specialties:[6],difficulty:1},{word:"ADRENALINA",clue:"Hormônio que prepara o corpo para a ação.",specialties:[6,1],difficulty:1},{word:"ESTROGENIO",clue:"Hormônio sexual feminino.",specialties:[6,15],difficulty:1},{word:"PROGESTERONA",clue:"Hormônio envolvido no ciclo menstrual e gravidez.",specialties:[6,15],difficulty:1},{word:"TESTOSTERONA",clue:"Hormônio sexual masculino.",specialties:[6,15],difficulty:1},{word:"TIROXINA",clue:"Hormônio produzido pela tireoide.",specialties:[6],difficulty:1},{word:"PARATORMONIO",clue:"Hormônio que regula os níveis de cálcio no sangue.",specialties:[6],difficulty:2},{word:"HEMOSTASIA",clue:"Processo de parar um sangramento.",specialties:[5,19],difficulty:1},{word:"FIBRINA",clue:"Proteína que forma a rede de um coágulo sanguíneo.",specialties:[5,29],difficulty:2},{word:"PLAQUETA",clue:"Célula sanguínea envolvida na coagulação.",specialties:[5],difficulty:1},{word:"HEPARINA",clue:"Anticoagulante natural do corpo.",specialties:[5,26],difficulty:2},{word:"WARFARINA",clue:"Medicamento anticoagulante.",specialties:[26,5],difficulty:2},{word:"INSOMNIO",clue:"Dificuldade em iniciar ou manter o sono.",specialties:[13],difficulty:1},{word:"NARCOLEPSIA",clue:"Distúrbio do sono com sonolência diurna excessiva.",specialties:[13],difficulty:2},{word:"APNEIA DO SONO",clue:"Interrupção temporária da respiração durante o sono.",specialties:[8],difficulty:1},{word:"HIPOTIREOIDISMO",clue:"Deficiência de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"HIPERTIREOIDISMO",clue:"Excesso de hormônios tireoidianos.",specialties:[6],difficulty:1},{word:"ACNE",clue:"Doença de pele caracterizada por espinhas.",specialties:[12],difficulty:1},{word:"DERMATITE",clue:"Inflamação da pele.",specialties:[12],difficulty:1},{word:"PSORIASE",clue:"Doença de pele com placas escamosas.",specialties:[12],difficulty:1},{word:"ECZEMA",clue:"Doença de pele com inflamação e prurido.",specialties:[12],difficulty:1},{word:"VITILIGO",clue:"Perda de pigmentação em áreas da pele.",specialties:[12],difficulty:1},{word:"Anestesia Geral",clue:"Anestesia que provoca inconsciência e ausência de sensibilidade em todo o corpo.",specialties:[23,19],difficulty:1},{word:"Anestesia Local",clue:"Anestesia que bloqueia a sensibilidade em uma área específica do corpo.",specialties:[23,26],difficulty:1},{word:"Sedação",clue:"Estado induzido por fármacos que reduz a irritabilidade ou excitação.",specialties:[23,26],difficulty:1},{word:"Bloqueio Epidural",clue:"Anestesia regional injetada no espaço epidural, bloqueando a dor na metade inferior do corpo.",specialties:[23,19],difficulty:2},{word:"Bloqueio Raquidiano",clue:"Anestesia regional injetada no líquido cefalorraquidiano para bloquear a sensibilidade abaixo da injeção.",specialties:[23,19],difficulty:2},{word:"Intubação Endotraqueal",clue:"Inserção de um tubo na traqueia para manter a via aérea aberta.",specialties:[23,8],difficulty:1},{word:"Laringoscópio",clue:"Instrumento utilizado para visualizar a laringe durante a intubação.",specialties:[23,8],difficulty:2},{word:"Propofol",clue:"Agente anestésico intravenoso de ação rápida.",specialties:[23,26],difficulty:2},{word:"Fentanil",clue:"Analgésico opioide potente usado em anestesia.",specialties:[23,26],difficulty:2},{word:"Lidocaína",clue:"Anestésico local e antiarrítmico usado para bloquear impulsos nervosos.",specialties:[23,26],difficulty:1},{word:"Anestésico Inalatório",clue:"Fármacos administrados por inalação para induzir anestesia geral.",specialties:[23,26],difficulty:2},{word:"Anestésico Intravenoso",clue:"Fármacos administrados por via intravenosa para induzir anestesia.",specialties:[23,26],difficulty:1},{word:"Monitorização Hemodinâmica",clue:"Avaliação contínua das funções cardiovasculares durante a anestesia.",specialties:[23,7],difficulty:2},{word:"Oxímetro de Pulso",clue:"Dispositivo que mede a saturação de oxigênio no sangue.",specialties:[23,8],difficulty:1},{word:"Hipotermia Perioperatória",clue:"Redução da temperatura corporal durante o período cirúrgico.",specialties:[23,19],difficulty:3},{word:"Apneia",clue:"Interrupção temporária da respiração.",specialties:[23,8],difficulty:1},{word:"Ventilação Mecânica",clue:"Suporte respiratório artificial para pacientes incapazes de respirar adequadamente.",specialties:[23,8],difficulty:2},{word:"Complicações Anestésicas",clue:"Eventos adversos que ocorrem durante ou após a administração de anestesia.",specialties:[23,25],difficulty:3},{word:"Reação Anafilática",clue:"Reação alérgica grave potencialmente fatal.",specialties:[23,21],difficulty:2},{word:"Bloqueador Neuromuscular",clue:"Fármaco que causa paralisia muscular temporária.",specialties:[23,26],difficulty:2},{word:"Succinilcolina",clue:"Agente bloqueador neuromuscular de ação rápida.",specialties:[23,26],difficulty:3},{word:"Monitorização BIS",clue:"Índice bispectral usado para avaliar o nível de consciência durante a anestesia.",specialties:[23,4],difficulty:3},{word:"Despertar Intraoperatório",clue:"Consciência durante a cirurgia sob anestesia geral.",specialties:[23,4],difficulty:3},{word:"Analgesia Pós-operatória",clue:"Controle da dor após procedimentos cirúrgicos.",specialties:[23,19],difficulty:1},{word:"Via Aérea Difícil",clue:"Situação em que a intubação ou ventilação é desafiadora.",specialties:[23,8],difficulty:3},{word:"Recuperação Anestésica",clue:"Período de retorno à consciência e funções normais após anestesia.",specialties:[23,19],difficulty:1},{word:"Curarização",clue:"Uso de bloqueadores neuromusculares para relaxamento muscular.",specialties:[23,26],difficulty:2},{word:"Anestesia Balanceada",clue:"Uso combinado de vários agentes anestésicos para otimizar efeitos.",specialties:[23,26],difficulty:2},{word:"Analgesia Epidural",clue:"Administração de analgésicos no espaço epidural para controle da dor.",specialties:[23,19],difficulty:2},{word:"Cricoidotomia",clue:"Acesso de emergência às vias aéreas através da membrana cricotireóidea.",specialties:[23,25],difficulty:3},{word:"Bactéria Gram-Positiva",clue:"Bactérias que retêm o corante cristal violeta durante a coloração de Gram, indicando uma parede celular espessa de peptidoglicano.",specialties:[28,22],difficulty:2},{word:"Bactéria Gram-Negativa",clue:"Bactérias que não retêm o corante cristal violeta durante a coloração de Gram, possuindo uma parede celular fina com uma membrana externa lipopolissacarídica.",specialties:[28,22],difficulty:2},{word:"Vírus",clue:"Agente infeccioso microscópico que necessita de uma célula hospedeira para replicação.",specialties:[28,20],difficulty:1},{word:"Fungo",clue:"Organismos eucariotos que podem causar infecções em humanos, como fungos dermatófitos e leveduras.",specialties:[28,12],difficulty:2},{word:"Parasitologia",clue:"Ramo da microbiologia que estuda os parasitas e suas interações com os hospedeiros.",specialties:[28,21],difficulty:3},{word:"Escherichia coli",clue:"Bactéria Gram-negativa comensal do intestino humano, podendo causar infecções do trato urinário e gastroenterites.",specialties:[28,10,20],difficulty:2},{word:"Staphylococcus aureus",clue:"Bactéria Gram-positiva que pode causar uma variedade de infecções, desde infecções cutâneas até pneumonia e sepse.",specialties:[28,20,19],difficulty:2},{word:"Mycobacterium tuberculosis",clue:"Agente etiológico da tuberculose, uma doença infecciosa que afeta principalmente os pulmões.",specialties:[28,20,24],difficulty:3},{word:"Clostridioides difficile",clue:"Bactéria Gram-positiva anaeróbia associada a infecções intestinais, frequentemente após uso de antibióticos.",specialties:[28,20,19],difficulty:3},{word:"Pneumocystis jirovecii",clue:"Fungo oportunista que causa pneumonia em pacientes imunocomprometidos.",specialties:[28,20,16],difficulty:3},{word:"Bacillus anthracis",clue:"Bactéria Gram-positiva causadora do antraz, uma doença infecciosa grave.",specialties:[28,20,19],difficulty:3},{word:"Candida albicans",clue:"Levedura oportunista que pode causar candidíase em diversas partes do corpo.",specialties:[28,12,20],difficulty:2},{word:"Helicobacter pylori",clue:"Bactéria Gram-negativa associada a úlceras gástricas e duodenais.",specialties:[28,9,20],difficulty:2},{word:"Neisseria gonorrhoeae",clue:"Bactéria Gram-negativa causadora da gonorreia, uma infecção sexualmente transmissível.",specialties:[28,15,20],difficulty:2},{word:"Legionella pneumophila",clue:"Bactéria Gram-negativa que causa a doença do legionário, uma forma grave de pneumonia.",specialties:[28,8,20],difficulty:3},{word:"Salmonella enterica",clue:"Bactéria Gram-negativa que causa salmonelose, uma infecção alimentar.",specialties:[28,9,20],difficulty:2},{word:"Borrelia burgdorferi",clue:"Bactéria Gram-negativa transmitida por carrapatos, causadora da doença de Lyme.",specialties:[28,21,25],difficulty:3},{word:"Vírus Influenza",clue:"Vírus causador da gripe, uma doença respiratória altamente contagiosa.",specialties:[28,20,8],difficulty:1},{word:"Herpes Simplex Vírus",clue:"Vírus causador do herpes labial e genital, caracterizado por lesões vesiculares.",specialties:[28,20,13],difficulty:2},{word:"Varicella-Zoster Vírus",clue:"Vírus causador da catapora e do herpes zoster (cobreiro).",specialties:[28,20,4],difficulty:2},{word:"HIV (Vírus da Imunodeficiência Humana)",clue:"Vírus que ataca o sistema imunológico, levando à síndrome da imunodeficiência adquirida (AIDS).",specialties:[28,20,13],difficulty:3},{word:"Rinovírus",clue:"Vírus causador do resfriado comum, responsável por infecções respiratórias leves.",specialties:[28,20,8],difficulty:1},{word:"Coronavirus",clue:"Família de vírus que inclui o SARS-CoV-2, causador da COVID-19.",specialties:[28,20,8],difficulty:2},{word:"Plasmodium falciparum",clue:"Parasita protozoário causador da forma mais grave da malária.",specialties:[28,16,21],difficulty:3},{word:"Toxoplasma gondii",clue:"Protozoário causador da toxoplasmose, uma infecção que pode afetar o cérebro e os olhos.",specialties:[28,21,16],difficulty:3},{word:"Leishmania",clue:"Genus de protozoários causadores da leishmaniose, transmitida por flebotomíneos.",specialties:[28,21,25],difficulty:3},{word:"Trichomonas vaginalis",clue:"Protozoário causador da tricomoníase, uma infecção sexualmente transmissível.",specialties:[28,15,20],difficulty:2},{word:"Candida auris",clue:"Fungo emergente resistente a múltiplos antifúngicos, associado a surtos em ambientes hospitalares.",specialties:[28,12,20],difficulty:3},{word:"Corynebacterium diphtheriae",clue:"Bactéria Gram-positiva causadora da difteria, uma doença respiratória grave.",specialties:[28,20,19],difficulty:3},{word:"Enterococcus faecalis",clue:"Bactéria Gram-positiva comumente encontrada no trato gastrointestinal, podendo causar infecções urinárias e endocardite.",specialties:[28,20,19],difficulty:2},{word:"Listeria monocytogenes",clue:"Bactéria Gram-positiva que causa listeriose, uma infecção alimentar grave.",specialties:[28,9,20],difficulty:3},{word:"Klebsiella pneumoniae",clue:"Bactéria Gram-negativa associada a infecções respiratórias e do trato urinário.",specialties:[28,20,19],difficulty:2},{word:"Pseudomonas aeruginosa",clue:"Bactéria Gram-negativa oportunista, frequentemente associada a infecções hospitalares.",specialties:[28,20,19],difficulty:3}];function cP(){const t=localStorage.getItem("vocabularyWords");if(t)return JSON.parse(t);{const e=aP.map(n=>({...n,isActive:!0}));return localStorage.setItem("vocabularyWords",JSON.stringify(e)),e}}const CE=cP();function Ps(t){localStorage.setItem("vocabularyWords",JSON.stringify(t))}const _f=vc("vocabulary",{state:()=>({words:CE,specialties:RE}),getters:{filteredWords:t=>(e="all",n="all")=>{let i=t.words;if(e!=="all"){const s=parseInt(e);i=i.filter(r=>r.specialties.includes(s))}if(n!=="all"){const s=parseInt(n);i=i.filter(r=>r.difficulty===s)}return i}},actions:{updateWords(t){this.words=t}}}),ei=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},lP={id:"auth-container"},uP={key:0},dP={key:1},fP={key:0},hP={key:1,class:"user-area"},pP={class:"modal-content"},mP={key:0},gP={key:1},yP={class:"modal-content"},IP=["value"],_P={__name:"HeaderComponent",setup(t){const e=SE(),n=_f(),i=Re(!1),s=Re(!1),r=Re(""),o=Re(""),c=Re(""),l=Re("");function u(){i.value=!0}function f(){i.value=!1}function p(){s.value=!s.value}async function m(){try{await e.login(r.value,o.value),f()}catch(j){alert(j.message)}}async function I(){try{await e.signup(c.value,l.value),f()}catch(j){alert(j.message)}}async function R(){try{await e.logout()}catch(j){alert(j.message)}}const L=Re(!1),D=Re({username:"",default_difficulty:1,default_speciality:0}),N=n.specialties;function O(){e.user&&e.user.settings&&(D.value={...e.user.settings}),L.value=!0}function x(){L.value=!1}async function q(){try{await e.updateUserSettings(D.value),x()}catch(j){alert("Error saving settings: "+j.message)}}return(j,V)=>{const v=En("router-link"),_=En("font-awesome-icon");return _e(),Se("header",null,[Ie(v,{to:"/"},{default:jn(()=>V[7]||(V[7]=[k("h1",null,"MedQuix",-1)])),_:1}),k("div",lP,[Ut(e).initialized?(_e(),Se("div",dP,[Ut(e).user?(_e(),Se("div",hP,[k("p",null,"Olá, "+et(Ut(e).user.username||Ut(e).user.email.split("@")[0]),1),k("button",{class:"auth-btn",onClick:O},[Ie(_,{icon:["fas","cog"]})]),k("button",{class:"auth-btn",onClick:R},[Ie(_,{icon:["fas","sign-out-alt"]})])])):(_e(),Se("div",fP,[k("button",{class:"auth-btn",onClick:u},[Ie(_,{icon:["fas","sign-in-alt"]}),V[8]||(V[8]=We(" Login / Sign Up "))])]))])):(_e(),Se("div",uP," Loading... "))]),Ie(lo,{name:"fade"},{default:jn(()=>[i.value?(_e(),Se("div",{key:0,class:"modal-overlay",onClick:pi(f,["self"])},[k("div",pP,[k("button",{class:"close-button",onClick:f},"×"),s.value?(_e(),Se("div",gP,[V[14]||(V[14]=k("h3",null,"Sign Up",-1)),rt(k("input",{type:"email","onUpdate:modelValue":V[2]||(V[2]=g=>c.value=g),placeholder:"Email"},null,512),[[mn,c.value]]),rt(k("input",{type:"password","onUpdate:modelValue":V[3]||(V[3]=g=>l.value=g),placeholder:"Password"},null,512),[[mn,l.value]]),k("button",{class:"modal-btn",onClick:I},[Ie(_,{icon:["fas","user-plus"]}),V[12]||(V[12]=We(" Sign Up "))]),k("p",null,[V[13]||(V[13]=We(" Already have an account? ")),k("span",{class:"toggle-link",onClick:p},"Login")])])):(_e(),Se("div",mP,[V[11]||(V[11]=k("h3",null,"Login",-1)),rt(k("input",{type:"email","onUpdate:modelValue":V[0]||(V[0]=g=>r.value=g),placeholder:"Email"},null,512),[[mn,r.value]]),rt(k("input",{type:"password","onUpdate:modelValue":V[1]||(V[1]=g=>o.value=g),placeholder:"Password"},null,512),[[mn,o.value]]),k("button",{class:"modal-btn",onClick:m},[Ie(_,{icon:["fas","sign-in-alt"]}),V[9]||(V[9]=We(" Login "))]),k("p",null,[V[10]||(V[10]=We(" Don't have an account? ")),k("span",{class:"toggle-link",onClick:p},"Sign up")])]))])])):qn("",!0)]),_:1}),Ie(lo,{name:"fade"},{default:jn(()=>[L.value?(_e(),Se("div",{key:0,class:"modal-overlay",onClick:pi(x,["self"])},[k("div",yP,[k("button",{class:"close-button",onClick:x},"×"),V[20]||(V[20]=k("h3",null,"User Settings",-1)),k("label",null,[V[15]||(V[15]=We(" Username: ")),rt(k("input",{type:"text","onUpdate:modelValue":V[4]||(V[4]=g=>D.value.username=g)},null,512),[[mn,D.value.username]])]),k("label",null,[V[17]||(V[17]=We(" Default Difficulty: ")),rt(k("select",{"onUpdate:modelValue":V[5]||(V[5]=g=>D.value.default_difficulty=g)},V[16]||(V[16]=[k("option",{value:"1"},"Fácil",-1),k("option",{value:"2"},"Média",-1),k("option",{value:"3"},"Difícil",-1)]),512),[[Qs,D.value.default_difficulty,void 0,{number:!0}]])]),k("label",null,[V[18]||(V[18]=We(" Default Specialty: ")),rt(k("select",{"onUpdate:modelValue":V[6]||(V[6]=g=>D.value.default_speciality=g)},[(_e(!0),Se(dt,null,os(Ut(N),(g,w)=>(_e(),Se("option",{key:w,value:w},et(g),9,IP))),128))],512),[[Qs,D.value.default_speciality,void 0,{number:!0}]])]),k("button",{class:"modal-btn",onClick:q},[Ie(_,{icon:["fas","save"]}),V[19]||(V[19]=We(" Save Settings "))])])])):qn("",!0)]),_:1})])}}},EP=ei(_P,[["__scopeId","data-v-fe4e7e2c"]]),AP={name:"FooterComponent"},wP={class:"footer-nav"};function vP(t,e,n,i,s,r){const o=En("router-link");return _e(),Se("footer",null,[k("nav",wP,[Ie(o,{to:"/"},{default:jn(()=>e[0]||(e[0]=[k("h3",null,"Início",-1)])),_:1})]),e[1]||(e[1]=k("div",{id:"install-icon"},null,-1)),e[2]||(e[2]=k("small",null,"© MediQuix 2024. Todos os direitos reservados.",-1))])}const TP=ei(AP,[["render",vP],["__scopeId","data-v-aac07eda"]]),bP={components:{HeaderComponent:EP,FooterComponent:TP}};function SP(t,e,n,i,s,r){const o=En("HeaderComponent"),c=En("router-view"),l=En("FooterComponent");return _e(),Se(dt,null,[Ie(o),k("main",null,[Ie(c)]),Ie(l)],64)}const RP=ei(bP,[["render",SP]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const xs=typeof document<"u";function OE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function CP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&OE(t.default)}const Fe=Object.assign;function Hl(t,e){const n={};for(const i in e){const s=e[i];n[i]=ln(s)?s.map(t):t(s)}return n}const Jr=()=>{},ln=Array.isArray,PE=/#/g,OP=/&/g,PP=/\//g,NP=/=/g,DP=/\?/g,NE=/\+/g,LP=/%5B/g,MP=/%5D/g,DE=/%5E/g,kP=/%60/g,LE=/%7B/g,xP=/%7C/g,ME=/%7D/g,VP=/%20/g;function Ef(t){return encodeURI(""+t).replace(xP,"|").replace(LP,"[").replace(MP,"]")}function FP(t){return Ef(t).replace(LE,"{").replace(ME,"}").replace(DE,"^")}function Fu(t){return Ef(t).replace(NE,"%2B").replace(VP,"+").replace(PE,"%23").replace(OP,"%26").replace(kP,"`").replace(LE,"{").replace(ME,"}").replace(DE,"^")}function UP(t){return Fu(t).replace(NP,"%3D")}function qP(t){return Ef(t).replace(PE,"%23").replace(DP,"%3F")}function BP(t){return t==null?"":qP(t).replace(PP,"%2F")}function wo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const zP=/\/$/,GP=t=>t.replace(zP,"");function $l(t,e,n="/"){let i,s={},r="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,c>-1?c:e.length),s=t(r)),c>-1&&(i=i||e.slice(0,c),o=e.slice(c,e.length)),i=WP(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:wo(o)}}function jP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function km(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function HP(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&ir(e.matched[i],n.matched[s])&&kE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ir(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function kE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$P(t[n],e[n]))return!1;return!0}function $P(t,e){return ln(t)?xm(t,e):ln(e)?xm(e,t):t===e}function xm(t,e){return ln(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function WP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,c;for(o=0;o<i.length;o++)if(c=i[o],c!==".")if(c==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var vo;(function(t){t.pop="pop",t.push="push"})(vo||(vo={}));var Zr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zr||(Zr={}));function KP(t){if(!t)if(xs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),GP(t)}const QP=/^[^#]+#/;function YP(t,e){return t.replace(QP,"#")+e}function XP(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Wc=()=>({left:window.scrollX,top:window.scrollY});function JP(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=XP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Vm(t,e){return(history.state?history.state.position-e:-1)+t}const Uu=new Map;function ZP(t,e){Uu.set(t,e)}function eN(t){const e=Uu.get(t);return Uu.delete(t),e}let tN=()=>location.protocol+"//"+location.host;function xE(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let c=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),km(l,"")}return km(n,t)+i+s}function nN(t,e,n,i){let s=[],r=[],o=null;const c=({state:m})=>{const I=xE(t,location),R=n.value,L=e.value;let D=0;if(m){if(n.value=I,e.value=m,o&&o===R){o=null;return}D=L?m.position-L.position:0}else i(I);s.forEach(N=>{N(n.value,R,{delta:D,type:vo.pop,direction:D?D>0?Zr.forward:Zr.back:Zr.unknown})})};function l(){o=n.value}function u(m){s.push(m);const I=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return r.push(I),I}function f(){const{history:m}=window;m.state&&m.replaceState(Fe({},m.state,{scroll:Wc()}),"")}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Fm(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Wc():null}}function iN(t){const{history:e,location:n}=window,i={value:xE(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:tN()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(I){console.error(I),n[f?"replace":"assign"](m)}}function o(l,u){const f=Fe({},e.state,Fm(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});r(l,f,!0),i.value=l}function c(l,u){const f=Fe({},s.value,e.state,{forward:l,scroll:Wc()});r(f.current,f,!0);const p=Fe({},Fm(i.value,l,null),{position:f.position+1},u);r(l,p,!1),i.value=l}return{location:i,state:s,push:c,replace:o}}function sN(t){t=KP(t);const e=iN(t),n=nN(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Fe({location:"",base:t,go:i,createHref:YP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rN(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),sN(t)}function oN(t){return typeof t=="string"||t&&typeof t=="object"}function VE(t){return typeof t=="string"||typeof t=="symbol"}const FE=Symbol("");var Um;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Um||(Um={}));function sr(t,e){return Fe(new Error,{type:t,[FE]:!0},e)}function kn(t,e){return t instanceof Error&&FE in t&&(e==null||!!(t.type&e))}const qm="[^/]+?",aN={sensitive:!1,strict:!1,start:!0,end:!0},cN=/[.+*?^${}()[\]/\\]/g;function lN(t,e){const n=Fe({},aN,e),i=[];let s=n.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let I=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(cN,"\\$&"),I+=40;else if(m.type===1){const{value:R,repeatable:L,optional:D,regexp:N}=m;r.push({name:R,repeatable:L,optional:D});const O=N||qm;if(O!==qm){I+=10;try{new RegExp(`(${O})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${R}" (${O}): `+q.message)}}let x=L?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(x=D&&u.length<2?`(?:/${x})`:"/"+x),D&&(x+="?"),s+=x,I+=20,D&&(I+=-8),L&&(I+=-20),O===".*"&&(I+=-50)}f.push(I)}i.push(f)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const I=f[m]||"",R=r[m-1];p[R.name]=I&&R.repeatable?I.split("/"):I}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const I of m)if(I.type===0)f+=I.value;else if(I.type===1){const{value:R,repeatable:L,optional:D}=I,N=R in u?u[R]:"";if(ln(N)&&!L)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const O=ln(N)?N.join("/"):N;if(!O)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=O}}return f||"/"}return{re:o,score:i,keys:r,parse:c,stringify:l}}function uN(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function UE(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=uN(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Bm(i))return 1;if(Bm(s))return-1}return s.length-i.length}function Bm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dN={type:0,value:""},fN=/[a-zA-Z0-9_]/;function hN(t){if(!t)return[[]];if(t==="/")return[[dN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(I){throw new Error(`ERR (${n})/"${u}": ${I}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let c=0,l,u="",f="";function p(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=i;break;case 1:l==="("?n=2:fN.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function pN(t,e,n){const i=lN(hN(t.path),n),s=Fe(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mN(t,e){const n=[],i=new Map;e=Hm({strict:!1,end:!0,sensitive:!1},e);function s(p){return i.get(p)}function r(p,m,I){const R=!I,L=Gm(p);L.aliasOf=I&&I.record;const D=Hm(e,p),N=[L];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const j of q)N.push(Gm(Fe({},L,{components:I?I.record.components:L.components,path:j,aliasOf:I?I.record:L})))}let O,x;for(const q of N){const{path:j}=q;if(m&&j[0]!=="/"){const V=m.record.path,v=V[V.length-1]==="/"?"":"/";q.path=m.record.path+(j&&v+j)}if(O=pN(q,m,D),I?I.alias.push(O):(x=x||O,x!==O&&x.alias.push(O),R&&p.name&&!jm(O)&&o(p.name)),qE(O)&&l(O),L.children){const V=L.children;for(let v=0;v<V.length;v++)r(V[v],O,I&&I.children[v])}I=I||O}return x?()=>{o(x)}:Jr}function o(p){if(VE(p)){const m=i.get(p);m&&(i.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&i.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=IN(p,n);n.splice(m,0,p),p.record.name&&!jm(p)&&i.set(p.record.name,p)}function u(p,m){let I,R={},L,D;if("name"in p&&p.name){if(I=i.get(p.name),!I)throw sr(1,{location:p});D=I.record.name,R=Fe(zm(m.params,I.keys.filter(x=>!x.optional).concat(I.parent?I.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),p.params&&zm(p.params,I.keys.map(x=>x.name))),L=I.stringify(R)}else if(p.path!=null)L=p.path,I=n.find(x=>x.re.test(L)),I&&(R=I.parse(L),D=I.record.name);else{if(I=m.name?i.get(m.name):n.find(x=>x.re.test(m.path)),!I)throw sr(1,{location:p,currentLocation:m});D=I.record.name,R=Fe({},m.params,p.params),L=I.stringify(R)}const N=[];let O=I;for(;O;)N.unshift(O.record),O=O.parent;return{name:D,path:L,params:R,matched:N,meta:yN(N)}}t.forEach(p=>r(p));function f(){n.length=0,i.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function zm(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Gm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:gN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function gN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function jm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yN(t){return t.reduce((e,n)=>Fe(e,n.meta),{})}function Hm(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function IN(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;UE(t,e[r])<0?i=r:n=r+1}const s=_N(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function _N(t){let e=t;for(;e=e.parent;)if(qE(e)&&UE(t,e)===0)return e}function qE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function EN(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(NE," "),o=r.indexOf("="),c=wo(o<0?r:r.slice(0,o)),l=o<0?null:wo(r.slice(o+1));if(c in e){let u=e[c];ln(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function $m(t){let e="";for(let n in t){const i=t[n];if(n=UP(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(i)?i.map(r=>r&&Fu(r)):[i&&Fu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function AN(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ln(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const wN=Symbol(""),Wm=Symbol(""),Af=Symbol(""),BE=Symbol(""),qu=Symbol("");function Pr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function mi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(sr(4,{from:n,to:e})):m instanceof Error?l(m):oN(m)?l(sr(2,{from:e,to:m})):(o&&i.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=r(()=>t.call(i&&i.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Wl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(OE(l)){const f=(l.__vccOpts||l)[e];f&&r.push(mi(f,n,i,o,c,s))}else{let u=l();r.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=CP(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const I=(p.__vccOpts||p)[e];return I&&mi(I,n,i,o,c,s)()}))}}return r}function Km(t){const e=An(Af),n=An(BE),i=Qe(()=>{const l=Ut(t.to);return e.resolve(l)}),s=Qe(()=>{const{matched:l}=i.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(ir.bind(null,f));if(m>-1)return m;const I=Qm(l[u-2]);return u>1&&Qm(f)===I&&p[p.length-1].path!==I?p.findIndex(ir.bind(null,l[u-2])):m}),r=Qe(()=>s.value>-1&&RN(n.params,i.value.params)),o=Qe(()=>s.value>-1&&s.value===n.matched.length-1&&kE(n.params,i.value.params));function c(l={}){if(SN(l)){const u=e[Ut(t.replace)?"replace":"push"](Ut(t.to)).catch(Jr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:Qe(()=>i.value.href),isActive:r,isExactActive:o,navigate:c}}function vN(t){return t.length===1?t[0]:t}const TN=Id({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Km,setup(t,{slots:e}){const n=cs(Km(t)),{options:i}=An(Af),s=Qe(()=>({[Ym(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ym(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&vN(e.default(n));return t.custom?r:Ac("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),bN=TN;function SN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function RN(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ln(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Qm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ym=(t,e,n)=>t??e??n,CN=Id({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=An(qu),s=Qe(()=>t.route||i.value),r=An(Wm,0),o=Qe(()=>{let u=Ut(r);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Qe(()=>s.value.matched[o.value]);ga(Wm,Qe(()=>o.value+1)),ga(wN,c),ga(qu,s);const l=Re();return Ti(()=>[l.value,c.value,t.name],([u,f,p],[m,I,R])=>{f&&(f.instances[p]=u,I&&I!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=I.leaveGuards),f.updateGuards.size||(f.updateGuards=I.updateGuards))),u&&f&&(!I||!ir(f,I)||!m)&&(f.enterCallbacks[p]||[]).forEach(L=>L(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Xm(n.default,{Component:m,route:u});const I=p.props[f],R=I?I===!0?u.params:typeof I=="function"?I(u):I:null,D=Ac(m,Fe({},R,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Xm(n.default,{Component:D,route:u})||D}}});function Xm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ON=CN;function PN(t){const e=mN(t.routes,t),n=t.parseQuery||EN,i=t.stringifyQuery||$m,s=t.history,r=Pr(),o=Pr(),c=Pr(),l=S1(ci);let u=ci;xs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Hl.bind(null,F=>""+F),p=Hl.bind(null,BP),m=Hl.bind(null,wo);function I(F,te){let Z,se;return VE(F)?(Z=e.getRecordMatcher(F),se=te):se=F,e.addRoute(se,Z)}function R(F){const te=e.getRecordMatcher(F);te&&e.removeRoute(te)}function L(){return e.getRoutes().map(F=>F.record)}function D(F){return!!e.getRecordMatcher(F)}function N(F,te){if(te=Fe({},te||l.value),typeof F=="string"){const C=$l(n,F,te.path),U=e.resolve({path:C.path},te),G=s.createHref(C.fullPath);return Fe(C,U,{params:m(U.params),hash:wo(C.hash),redirectedFrom:void 0,href:G})}let Z;if(F.path!=null)Z=Fe({},F,{path:$l(n,F.path,te.path).path});else{const C=Fe({},F.params);for(const U in C)C[U]==null&&delete C[U];Z=Fe({},F,{params:p(C)}),te.params=p(te.params)}const se=e.resolve(Z,te),ke=F.hash||"";se.params=f(m(se.params));const A=jP(i,Fe({},F,{hash:FP(ke),path:se.path})),T=s.createHref(A);return Fe({fullPath:A,hash:ke,query:i===$m?AN(F.query):F.query||{}},se,{redirectedFrom:void 0,href:T})}function O(F){return typeof F=="string"?$l(n,F,l.value.path):Fe({},F)}function x(F,te){if(u!==F)return sr(8,{from:te,to:F})}function q(F){return v(F)}function j(F){return q(Fe(O(F),{replace:!0}))}function V(F){const te=F.matched[F.matched.length-1];if(te&&te.redirect){const{redirect:Z}=te;let se=typeof Z=="function"?Z(F):Z;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=O(se):{path:se},se.params={}),Fe({query:F.query,hash:F.hash,params:se.path!=null?{}:F.params},se)}}function v(F,te){const Z=u=N(F),se=l.value,ke=F.state,A=F.force,T=F.replace===!0,C=V(Z);if(C)return v(Fe(O(C),{state:typeof C=="object"?Fe({},ke,C.state):ke,force:A,replace:T}),te||Z);const U=Z;U.redirectedFrom=te;let G;return!A&&HP(i,se,Z)&&(G=sr(16,{to:U,from:se}),ve(se,se,!0,!1)),(G?Promise.resolve(G):w(U,se)).catch(B=>kn(B)?kn(B,2)?B:K(B):be(B,U,se)).then(B=>{if(B){if(kn(B,2))return v(Fe({replace:T},O(B.to),{state:typeof B.to=="object"?Fe({},ke,B.to.state):ke,force:A}),te||U)}else B=b(U,se,!0,T,ke);return S(U,se,B),B})}function _(F,te){const Z=x(F,te);return Z?Promise.reject(Z):Promise.resolve()}function g(F){const te=je.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(F):F()}function w(F,te){let Z;const[se,ke,A]=NN(F,te);Z=Wl(se.reverse(),"beforeRouteLeave",F,te);for(const C of se)C.leaveGuards.forEach(U=>{Z.push(mi(U,F,te))});const T=_.bind(null,F,te);return Z.push(T),Et(Z).then(()=>{Z=[];for(const C of r.list())Z.push(mi(C,F,te));return Z.push(T),Et(Z)}).then(()=>{Z=Wl(ke,"beforeRouteUpdate",F,te);for(const C of ke)C.updateGuards.forEach(U=>{Z.push(mi(U,F,te))});return Z.push(T),Et(Z)}).then(()=>{Z=[];for(const C of A)if(C.beforeEnter)if(ln(C.beforeEnter))for(const U of C.beforeEnter)Z.push(mi(U,F,te));else Z.push(mi(C.beforeEnter,F,te));return Z.push(T),Et(Z)}).then(()=>(F.matched.forEach(C=>C.enterCallbacks={}),Z=Wl(A,"beforeRouteEnter",F,te,g),Z.push(T),Et(Z))).then(()=>{Z=[];for(const C of o.list())Z.push(mi(C,F,te));return Z.push(T),Et(Z)}).catch(C=>kn(C,8)?C:Promise.reject(C))}function S(F,te,Z){c.list().forEach(se=>g(()=>se(F,te,Z)))}function b(F,te,Z,se,ke){const A=x(F,te);if(A)return A;const T=te===ci,C=xs?history.state:{};Z&&(se||T?s.replace(F.fullPath,Fe({scroll:T&&C&&C.scroll},ke)):s.push(F.fullPath,ke)),l.value=F,ve(F,te,Z,T),K()}let E;function Me(){E||(E=s.listen((F,te,Z)=>{if(!Gt.listening)return;const se=N(F),ke=V(se);if(ke){v(Fe(ke,{replace:!0,force:!0}),se).catch(Jr);return}u=se;const A=l.value;xs&&ZP(Vm(A.fullPath,Z.delta),Wc()),w(se,A).catch(T=>kn(T,12)?T:kn(T,2)?(v(Fe(O(T.to),{force:!0}),se).then(C=>{kn(C,20)&&!Z.delta&&Z.type===vo.pop&&s.go(-1,!1)}).catch(Jr),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),be(T,se,A))).then(T=>{T=T||b(se,A,!1),T&&(Z.delta&&!kn(T,8)?s.go(-Z.delta,!1):Z.type===vo.pop&&kn(T,20)&&s.go(-1,!1)),S(se,A,T)}).catch(Jr)}))}let Ye=Pr(),Ve=Pr(),fe;function be(F,te,Z){K(F);const se=Ve.list();return se.length?se.forEach(ke=>ke(F,te,Z)):console.error(F),Promise.reject(F)}function ie(){return fe&&l.value!==ci?Promise.resolve():new Promise((F,te)=>{Ye.add([F,te])})}function K(F){return fe||(fe=!F,Me(),Ye.list().forEach(([te,Z])=>F?Z(F):te()),Ye.reset()),F}function ve(F,te,Z,se){const{scrollBehavior:ke}=t;if(!xs||!ke)return Promise.resolve();const A=!Z&&eN(Vm(F.fullPath,0))||(se||!Z)&&history.state&&history.state.scroll||null;return pc().then(()=>ke(F,te,A)).then(T=>T&&JP(T)).catch(T=>be(T,F,te))}const ge=F=>s.go(F);let ye;const je=new Set,Gt={currentRoute:l,listening:!0,addRoute:I,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:L,resolve:N,options:t,push:q,replace:j,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:c.add,onError:Ve.add,isReady:ie,install(F){const te=this;F.component("RouterLink",bN),F.component("RouterView",ON),F.config.globalProperties.$router=te,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Ut(l)}),xs&&!ye&&l.value===ci&&(ye=!0,q(s.location).catch(ke=>{}));const Z={};for(const ke in ci)Object.defineProperty(Z,ke,{get:()=>l.value[ke],enumerable:!0});F.provide(Af,te),F.provide(BE,Jg(Z)),F.provide(qu,l);const se=F.unmount;je.add(F),F.unmount=function(){je.delete(F),je.size<1&&(u=ci,E&&E(),E=null,l.value=ci,ye=!1,fe=!1),se()}}};function Et(F){return F.reduce((te,Z)=>te.then(()=>g(Z)),Promise.resolve())}return Gt}function NN(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const c=e.matched[o];c&&(t.matched.find(u=>ir(u,c))?i.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>ir(u,l))||s.push(l))}return[n,i,s]}const DN={name:"GameCard",props:{link:{type:String,required:!0},icon:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0}}},LN={class:"icon-container"};function MN(t,e,n,i,s,r){const o=En("font-awesome-icon"),c=En("router-link");return _e(),Zi(c,{to:n.link,class:"game-card"},{default:jn(()=>[k("div",LN,[n.icon==="heart"?(_e(),Zi(o,{key:0,icon:["fas","heart"],size:"3x"})):n.icon==="brain"?(_e(),Zi(o,{key:1,icon:["fas","brain"],size:"3x"})):n.icon==="hangman"?(_e(),Zi(o,{key:2,icon:["fas","ban"],size:"3x"})):n.icon==="word-search"?(_e(),Zi(o,{key:3,icon:["fas","search"],size:"3x"})):n.icon==="book"?(_e(),Zi(o,{key:4,icon:["fas","book"],size:"3x"})):qn("",!0)]),k("h2",null,et(n.title),1),k("p",null,et(n.description),1)]),_:1},8,["to"])}const kN=ei(DN,[["render",MN],["__scopeId","data-v-2d2f79c4"]]),xN={components:{GameCard:kN}},VN={class:"home-list"},FN={class:"game-links"},UN={class:"game-links"};function qN(t,e,n,i,s,r){const o=En("GameCard");return _e(),Se("div",VN,[e[0]||(e[0]=k("p",null,"Selecione um dos jogos abaixo para começar:",-1)),k("div",FN,[Ie(o,{link:"/quiz",icon:"heart",title:"Quiz Rápido",description:"Responda rapidamente perguntas sobre medicina."}),Ie(o,{link:"/cards",icon:"brain",title:"Jogo de Memória",description:"Teste sua memória com termos médicos."})]),e[1]||(e[1]=k("p",null,"Acesse o vocabulário completo dos jogos:",-1)),k("div",UN,[Ie(o,{link:"/my-vocabulary",icon:"book",title:"Meu Vocabulário",description:"Visualize, adicione, edite e gerencie todos os termos e definições."})])])}const BN=ei(xN,[["render",qN],["__scopeId","data-v-311f494e"]]),zN={class:"selectors-container"},GN={key:0,class:"toggle-text"},jN={key:1,class:"toggle-text"},HN={class:"controls"},$N={class:"controls-option"},WN=["value"],KN={class:"controls-option"},QN={__name:"SelectorsComponent",emits:["specialty-change","difficulty-change"],setup(t,{emit:e}){const n=e,i=$s(),s=Qe({get:()=>i.selectedSpecialty,set:l=>i.setSpecialty(l)}),r=Qe({get:()=>i.selectedDifficulty,set:l=>i.setDifficulty(l)});Ti(s,l=>{n("specialty-change",l)}),Ti(r,l=>{n("difficulty-change",l)});const o=Re(!1);function c(){o.value=!o.value}return(l,u)=>(_e(),Se("div",zN,[k("button",{class:"collapse-toggle",onClick:c},[o.value?(_e(),Se("span",GN,u[2]||(u[2]=[We(" Especialidade   "),k("svg",{class:"toggle-icon",width:"24",height:"24",viewBox:"0 0 24 24"},[k("path",{fill:"currentColor",d:"M12 8l6 6c.3.3.3.7 0 1s-.7.3-1 0l-5-5-5 5c-.3.3-.7.3-1 0s-.3-.7 0-1l6-6z"})],-1),We("  Dificuldade ")]))):(_e(),Se("span",jN,u[3]||(u[3]=[We(" Especialidade   "),k("svg",{class:"toggle-icon",width:"24",height:"24",viewBox:"0 0 24 24"},[k("path",{fill:"currentColor",d:"M12 16.5l-6-6c-.3-.3-.3-.7 0-1 .3-.3.7-.3 1 0l5 5 5-5c.3-.3.7-.3 1 0s.3.7 0 1l-6 6z"})],-1),We("  Dificuldade ")])))]),Ie(lo,{name:"fade"},{default:jn(()=>[k("div",{class:ar(["collapsible-content",{expanded:o.value}])},[k("div",HN,[k("div",$N,[rt(k("select",{id:"specialty-select","onUpdate:modelValue":u[0]||(u[0]=f=>s.value=f)},[u[4]||(u[4]=k("option",{value:"all"},"Todas",-1)),(_e(!0),Se(dt,null,os(Ut(RE),(f,p)=>(_e(),Se("option",{key:p,value:p},et(f),9,WN))),128))],512),[[Qs,s.value]])]),k("div",KN,[rt(k("select",{id:"difficulty-select","onUpdate:modelValue":u[1]||(u[1]=f=>r.value=f)},u[5]||(u[5]=[k("option",{value:"all"},"Todas",-1),k("option",{value:"1"},"Fácil",-1),k("option",{value:"2"},"Média",-1),k("option",{value:"3"},"Difícil",-1)]),512),[[Qs,r.value]])])])],2)]),_:1})]))}},wf=ei(QN,[["__scopeId","data-v-3d9424a6"]]),YN=vc("words",()=>{const t=Re(CE),e=$s(),n=Qe(()=>{let r=t.value;if(e.selectedSpecialty!=="all"){const o=parseInt(e.selectedSpecialty);r=r.filter(c=>c.specialties.includes(o))}if(e.selectedDifficulty!=="all"){const o=parseInt(e.selectedDifficulty);r=r.filter(c=>c.difficulty===o)}return r});function i(r=10){return[...n.value].sort(()=>Math.random()-.5).slice(0,r)}function s(r){t.value=r}return{allWords:t,filteredWords:n,getQuizWords:i,setAllWords:s}}),XN={class:"quiz"},JN={key:0,id:"quiz-container"},ZN={id:"timer"},eD={id:"time"},tD={id:"question"},nD={id:"options"},iD=["disabled","onClick"],sD={__name:"Quiz",setup(t){const e=Re(0),n=Re(7),i=Re([]),s=Re(!0),r=Re([]),o=Re("7"),c=Re(!1),l=Re(!1),u=Re([]);let f=null;const p=YN(),m=Qe(()=>i.value[e.value]);function I(j){return j.sort(()=>Math.random()-.5)}function R(j){const V=[j],v=p.allWords.filter(_=>_.word!==j).map(_=>_.word);for(I(v);V.length<4&&v.length>0;)V.push(v.pop());return I(V)}function L(){let V=n.value*1e3;f=setInterval(()=>{V-=10,o.value=(V/1e3).toFixed(0),V<=0&&(clearInterval(f),N(null),l.value=!0,c.value=!0)},10)}function D(){if(clearInterval(f),e.value>=i.value.length){alert("Você completou o quiz!"),q();return}l.value=!1,c.value=!1,u.value=[],m.value&&(r.value=R(m.value.word),u.value=r.value.map(()=>""),n.value=7,o.value="7.00",L())}function N(j,V=null){if(clearInterval(f),!m.value)return;const v=m.value.word;j!==null&&(j===v&&V!==null?u.value[V]="#2ecc71":V!==null&&(u.value[V]="#e74c3c")),r.value.forEach((_,g)=>{_===v&&(u.value[g]="#2ecc71")}),l.value=!0,c.value=!0}function O(){e.value++,n.value=7,D()}function x(){e.value=0;const j=p.getQuizWords(10);if(j.length===0){alert("Nenhuma questão encontrada com os critérios selecionados."),s.value=!1;return}i.value=j,s.value=!0,n.value=7,D()}function q(){clearInterval(f),s.value=!1,x()}return yc(()=>{x()}),_d(()=>{clearInterval(f)}),(j,V)=>{var v;return _e(),Se("div",XN,[V[1]||(V[1]=k("h1",null,"Quiz Rápido",-1)),Ie(wf,{onSpecialtyChange:q,onDifficultyChange:q}),k("div",null,[s.value?(_e(),Se("div",JN,[k("div",ZN,[k("span",eD,et(o.value),1),V[0]||(V[0]=We("s "))]),k("div",tD,et((v=m.value)==null?void 0:v.clue),1),k("ul",nD,[(_e(!0),Se(dt,null,os(r.value,(_,g)=>(_e(),Se("li",{key:g},[k("button",{disabled:l.value,style:dc({backgroundColor:u.value[g]}),onClick:w=>N(_,g)},et(_),13,iD)]))),128))]),c.value?(_e(),Se("button",{key:0,id:"next-button",onClick:O}," Próxima Pergunta ")):qn("",!0)])):qn("",!0)])])}}},rD=ei(sD,[["__scopeId","data-v-628d0008"]]),oD={class:"memory-game"},aD={id:"definition"},cD={id:"game-board"},lD=["onClick"],uD={class:"card-inner"},dD={class:"card-back"},fD={id:"score"},hD={__name:"MemoryGame",setup(t){const e=_f(),n=Re(0),i=Re([]),s=Re(null),r=Re([]),o=Re([]),c=Re(0),l=Re(null),u=Re(null),f=Re([]);function p(){n.value=0,c.value=0,f.value=[];let N=e.words.filter(x=>x.isActive);if(N.length<2){alert("Não há palavras suficientes para iniciar o jogo. Por favor, ajuste os filtros.");return}N.sort(()=>Math.random()-.5),r.value=N.slice(0,8),o.value=[...r.value],m();const O=[...r.value,...r.value].map(x=>({word:x.word,flipped:!1,matched:!1}));O.sort(()=>Math.random()-.5),i.value=O}function m(){o.value.length===0?s.value=null:(o.value.sort(()=>Math.random()-.5),s.value=o.value.pop())}function I(N){const O=i.value[N];O.flipped||O.matched||(O.flipped=!0,n.value++,c.value===0?(l.value=N,c.value=1):c.value===1&&(u.value=N,c.value=2,R()))}function R(){const N=i.value[l.value],O=i.value[u.value];N.word===s.value.word&&O.word===s.value.word?(N.matched=!0,O.matched=!0,f.value.push(N,O),D(),f.value.length===i.value.length?setTimeout(()=>{alert(`Parabéns! Você encontrou todos os pares com ${n.value} cliques.`),p()},500):setTimeout(()=>{m()},500)):setTimeout(()=>{L()},1e3)}function L(){i.value[l.value].flipped=!1,i.value[u.value].flipped=!1,D()}function D(){c.value=0,l.value=null,u.value=null}return yc(()=>{p()}),(N,O)=>(_e(),Se("div",oD,[O[1]||(O[1]=k("h1",null,"Jogo de Memória",-1)),Ie(wf,{onSpecialtyChange:p,onDifficultyChange:p}),k("p",aD,et(s.value?s.value.clue:"Todas as palavras foram encontradas!"),1),k("div",cD,[(_e(!0),Se(dt,null,os(i.value,(x,q)=>(_e(),Se("div",{key:q,class:ar(["card",{flipped:x.flipped,matched:x.matched}]),onClick:j=>I(q)},[k("div",uD,[O[0]||(O[0]=k("div",{class:"card-front"},null,-1)),k("div",dD,et(x.word),1)])],10,lD))),128))]),k("p",fD,"Pontuação: "+et(n.value),1)]))}},pD=ei(hD,[["__scopeId","data-v-6e2ceb30"]]),mD={class:"my-vocabulary"},gD={class:"vocab-header"},yD={class:"options-and-searchbar"},ID={class:"search-word"},_D={class:"modal-content options-modal"},ED={class:"options-buttons"},AD={class:"counter"},wD={class:"vocabulary-list"},vD=["onClick"],TD={key:0,class:"card-details"},bD={class:"clue"},SD={class:"specialties"},RD={class:"difficulty"},CD={class:"icons-container"},OD=["onClick"],PD=["onClick"],ND=["onUpdate:modelValue","onChange"],DD={key:1,class:"edit-container"},LD=["onUpdate:modelValue"],MD=["onUpdate:modelValue"],kD={class:"specialties-select"},xD=["value","onUpdate:modelValue"],VD=["onUpdate:modelValue"],FD=["onClick"],UD=["onClick"],qD={class:"modal-content"},BD={class:"specialties-select"},zD=["value"],GD={__name:"MyVocabulary",setup(t){const e=_f(),n=$s(),i=Re(!1),s=Re(!1),r=Re(""),o=Re(!1),c=Re(!1),l=Re([]),u=Re([]),f=cs({});function p(ie){return ie.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}const m=Qe(()=>{const ie={};return I.value.forEach(K=>{const ve=p(K.word);ie[ve]=(ie[ve]||0)+1}),ie}),I=Qe(()=>{let ie=e.words;if(n.selectedSpecialty!=="all"){const K=parseInt(n.selectedSpecialty);ie=ie.filter(ve=>ve.specialties.includes(K))}if(n.selectedDifficulty!=="all"){const K=parseInt(n.selectedDifficulty);ie=ie.filter(ve=>ve.difficulty===K)}if(s.value&&(ie=ie.filter(K=>K.isActive)),r.value.trim()!==""){const K=r.value.trim().toLowerCase();ie=ie.filter(ve=>ve.word.toLowerCase().includes(K)||ve.clue.toLowerCase().includes(K))}return ie.sort((K,ve)=>K.word.localeCompare(ve.word))});function R(ie){const K=l.value.indexOf(ie);K===-1?l.value.push(ie):l.value.splice(K,1)}function L(ie){return l.value.includes(ie)}function D(){i.value=!i.value}function N(){if(confirm("Deseja realmente remover todas as duplicatas, mantendo apenas uma instância de cada palavra?")){const ie={};e.words.forEach(K=>{const ve=p(K.word);ie[ve]||(ie[ve]=K)}),e.words=Object.values(ie),Ps(e.words)}}function O(){s.value=!s.value}function x(){confirm("Deseja realmente ativar todos os itens?")&&(e.words.forEach(ie=>ie.isActive=!0),Ps(e.words))}function q(){confirm("Deseja realmente desativar todos os itens?")&&(e.words.forEach(ie=>ie.isActive=!1),Ps(e.words))}function j(){c.value=!0}function V(){c.value=!1}function v(){V(),o.value=!0}function _(){o.value=!1}const g=cs({word:"",clue:"",specialties:[],difficulty:null});function w(){if(!g.word.trim()||!g.clue.trim()||!g.difficulty||g.specialties.length===0){alert("Preencha todos os campos corretamente.");return}if(e.words.some(ve=>p(ve.word)===g.word.trim().toLowerCase())&&!confirm("A palavra já existe. Deseja adicionar outra instância?"))return;const K={word:g.word.trim(),clue:g.clue.trim(),specialties:[...g.specialties],difficulty:g.difficulty,isActive:!0};e.words.push(K),Ps(e.words),_(),g.word="",g.clue="",g.specialties=[],g.difficulty=null}function S(ie){if(u.value.includes(ie)){const K=u.value.indexOf(ie);K!==-1&&u.value.splice(K,1)}else u.value.push(ie),f[ie]=JSON.parse(JSON.stringify(I.value[ie]))}function b(ie){const K=f[ie];if(!K.word.trim()){alert("A palavra não pode estar vazia.");return}const ve=e.words.findIndex(ye=>ye.word===I.value[ie].word);ve!==-1&&(e.words[ve]={...K},Ps(e.words));const ge=u.value.indexOf(ie);ge!==-1&&u.value.splice(ge,1)}function E(ie){const K=u.value.indexOf(ie);K!==-1&&u.value.splice(K,1)}function Me(ie){Ps(e.words)}function Ye(){}function Ve(ie){return ie.map(K=>e.specialties[K]).join(", ")}function fe(ie){return{1:"Fácil",2:"Média",3:"Difícil"}[ie]||"Desconhecida"}function be(ie){return p(ie.word)}return(ie,K)=>{const ve=En("font-awesome-icon");return _e(),Se("div",mD,[k("div",gD,[K[6]||(K[6]=k("h1",null,"Meu Vocabulário",-1)),Ie(wf),k("div",yD,[k("button",{class:"options-btn",onClick:j},[Ie(ve,{icon:["fas","sliders-h"]}),K[5]||(K[5]=We(" Opções "))]),k("div",ID,[rt(k("input",{type:"text",class:"search-term","onUpdate:modelValue":K[0]||(K[0]=ge=>r.value=ge),placeholder:"Buscar palavra ou definição..."},null,512),[[mn,r.value]]),k("button",{onClick:Ye,class:"search-btn"},[Ie(ve,{icon:["fas","search"]})])])])]),Ie(lo,{name:"fade"},{default:jn(()=>[c.value?(_e(),Se("div",{key:0,class:"modal-overlay",onClick:pi(V,["self"])},[k("div",_D,[k("div",ED,[k("button",{onClick:v},[Ie(ve,{icon:["fas","plus"]}),K[7]||(K[7]=We(" Adicionar Palavra "))]),k("button",{onClick:x},[Ie(ve,{icon:["fas","check"]}),K[8]||(K[8]=We(" Ativar todos "))]),k("button",{onClick:q},[Ie(ve,{icon:["fas","times"]}),K[9]||(K[9]=We(" Desativar todos "))]),k("button",{onClick:O},[Ie(ve,{icon:["fas",s.value?"eye":"eye-slash"]},null,8,["icon"]),We(" "+et(s.value?"Exibir todos":"Exibir apenas ativos"),1)]),k("button",{onClick:D},[Ie(ve,{icon:["fas","highlighter"]}),We(" "+et(i.value?"Remover Destaque":"Destacar Duplicatas"),1)]),k("button",{onClick:N},[Ie(ve,{icon:["fas","trash"]}),K[10]||(K[10]=We(" Remover Duplicatas "))])])])])):qn("",!0)]),_:1}),k("div",AD,[k("p",null,[K[11]||(K[11]=We(" Total de termos: ")),k("span",null,et(I.value.length),1)])]),k("div",wD,[(_e(!0),Se(dt,null,os(I.value,(ge,ye)=>(_e(),Se("div",{key:ge.word+ye,class:ar(["term-item",{duplicate:i.value&&m.value[be(ge)]>1}])},[k("div",{class:"card-header",onClick:je=>R(ye)},[k("h2",null,et(ge.word),1)],8,vD),L(ye)?(_e(),Se("div",TD,[k("p",bD,et(ge.clue),1),k("p",SD,et(Ve(ge.specialties)),1),k("p",RD,et(fe(ge.difficulty)),1),k("div",CD,[k("span",{class:"icon edit-icon",onClick:pi(je=>S(ye),["stop"])},[Ie(ve,{icon:["fas","edit"]})],8,OD),k("span",{class:"icon delete-icon",onClick:pi(je=>ie.deleteWord(ye),["stop"])},[Ie(ve,{icon:["fas","trash"]})],8,PD),rt(k("input",{type:"checkbox","onUpdate:modelValue":je=>ge.isActive=je,onChange:pi(je=>Me(),["stop"]),title:"Ativar/Desativar"},null,40,ND),[[Rl,ge.isActive]])])])):qn("",!0),u.value.includes(ye)?(_e(),Se("div",DD,[rt(k("input",{type:"text","onUpdate:modelValue":je=>f[ye].word=je,placeholder:"Palavra"},null,8,LD),[[mn,f[ye].word]]),rt(k("textarea",{"onUpdate:modelValue":je=>f[ye].clue=je,placeholder:"Dica"},null,8,MD),[[mn,f[ye].clue]]),k("div",kD,[(_e(!0),Se(dt,null,os(Ut(e).specialties,(je,Gt)=>(_e(),Se("label",{key:Gt},[rt(k("input",{type:"checkbox",value:Gt,"onUpdate:modelValue":Et=>f[ye].specialties=Et},null,8,xD),[[Rl,f[ye].specialties]]),We(" "+et(je),1)]))),128))]),rt(k("select",{"onUpdate:modelValue":je=>f[ye].difficulty=je},K[12]||(K[12]=[k("option",{disabled:"",value:""},"Selecione",-1),k("option",{value:"1"},"Fácil",-1),k("option",{value:"2"},"Média",-1),k("option",{value:"3"},"Difícil",-1)]),8,VD),[[Qs,f[ye].difficulty,void 0,{number:!0}]]),k("button",{onClick:je=>b(ye)},"Salvar",8,FD),k("button",{onClick:je=>E(ye)},"Cancelar",8,UD)])):qn("",!0)],2))),128))]),Ie(lo,{name:"fade"},{default:jn(()=>[o.value?(_e(),Se("div",{key:0,class:"modal",onClick:pi(_,["self"])},[k("div",qD,[k("span",{class:"close-button",onClick:_},"×"),K[19]||(K[19]=k("h2",null,"Adicionar Nova Palavra",-1)),k("form",{onSubmit:pi(w,["prevent"])},[K[14]||(K[14]=k("label",null,"Palavra:",-1)),rt(k("input",{type:"text","onUpdate:modelValue":K[1]||(K[1]=ge=>g.word=ge),required:""},null,512),[[mn,g.word]]),K[15]||(K[15]=k("label",null,"Dica:",-1)),rt(k("textarea",{"onUpdate:modelValue":K[2]||(K[2]=ge=>g.clue=ge),required:""},null,512),[[mn,g.clue]]),K[16]||(K[16]=k("label",null,"Especialidades:",-1)),k("div",BD,[(_e(!0),Se(dt,null,os(Ut(e).specialties,(ge,ye)=>(_e(),Se("label",{key:ye},[rt(k("input",{type:"checkbox",value:ye,"onUpdate:modelValue":K[3]||(K[3]=je=>g.specialties=je)},null,8,zD),[[Rl,g.specialties]]),We(" "+et(ge),1)]))),128))]),K[17]||(K[17]=k("label",null,"Dificuldade:",-1)),rt(k("select",{"onUpdate:modelValue":K[4]||(K[4]=ge=>g.difficulty=ge),required:""},K[13]||(K[13]=[k("option",{disabled:"",value:""},"Selecione",-1),k("option",{value:"1"},"Fácil",-1),k("option",{value:"2"},"Média",-1),k("option",{value:"3"},"Difícil",-1)]),512),[[Qs,g.difficulty,void 0,{number:!0}]]),K[18]||(K[18]=k("button",{type:"submit"},"Adicionar",-1)),k("button",{type:"button",onClick:_},"Cancelar")],32)])])):qn("",!0)]),_:1})])}}},jD=ei(GD,[["__scopeId","data-v-85c4f9d4"]]),HD=[{path:"/",name:"Home",component:BN},{path:"/quiz",name:"Quiz",component:rD},{path:"/cards",name:"MemoryGame",component:pD},{path:"/my-vocabulary",name:"MyVocabulary",component:jD}],$D=PN({history:rN(),routes:HD});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function WD(t,e,n){return(e=QD(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jm(Object(n),!0).forEach(function(i){WD(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jm(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function KD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function QD(t){var e=KD(t,"string");return typeof e=="symbol"?e:e+""}const Zm=()=>{};let vf={},zE={},GE=null,jE={mark:Zm,measure:Zm};try{typeof window<"u"&&(vf=window),typeof document<"u"&&(zE=document),typeof MutationObserver<"u"&&(GE=MutationObserver),typeof performance<"u"&&(jE=performance)}catch{}const{userAgent:eg=""}=vf.navigator||{},ki=vf,Ke=zE,tg=GE,ha=jE;ki.document;const ti=!!Ke.documentElement&&!!Ke.head&&typeof Ke.addEventListener=="function"&&typeof Ke.createElement=="function",HE=~eg.indexOf("MSIE")||~eg.indexOf("Trident/");var YD=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,XD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,$E={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},JD={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},WE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Nt="classic",Kc="duotone",ZD="sharp",eL="sharp-duotone",KE=[Nt,Kc,ZD,eL],tL={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},nL={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},iL=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),sL={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},rL=["fak","fa-kit","fakd","fa-kit-duotone"],ng={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},oL=["kit"],aL={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},cL=["fak","fakd"],lL={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ig={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},pa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},uL=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],dL=["fak","fa-kit","fakd","fa-kit-duotone"],fL={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},hL={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},pL={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Bu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},mL=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],zu=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...uL,...mL],gL=["solid","regular","light","thin","duotone","brands"],QE=[1,2,3,4,5,6,7,8,9,10],yL=QE.concat([11,12,13,14,15,16,17,18,19,20]),IL=[...Object.keys(pL),...gL,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pa.GROUP,pa.SWAP_OPACITY,pa.PRIMARY,pa.SECONDARY].concat(QE.map(t=>"".concat(t,"x"))).concat(yL.map(t=>"w-".concat(t))),_L={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Xn="___FONT_AWESOME___",Gu=16,YE="fa",XE="svg-inline--fa",gs="data-fa-i2svg",ju="data-fa-pseudo-element",EL="data-fa-pseudo-element-pending",Tf="data-prefix",bf="data-icon",sg="fontawesome-i2svg",AL="async",wL=["HTML","HEAD","STYLE","SCRIPT"],JE=(()=>{try{return!0}catch{return!1}})();function Uo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Nt]}})}const ZE=W({},$E);ZE[Nt]=W(W(W(W({},{"fa-duotone":"duotone"}),$E[Nt]),ng.kit),ng["kit-duotone"]);const vL=Uo(ZE),Hu=W({},sL);Hu[Nt]=W(W(W(W({},{duotone:"fad"}),Hu[Nt]),ig.kit),ig["kit-duotone"]);const rg=Uo(Hu),$u=W({},Bu);$u[Nt]=W(W({},$u[Nt]),lL.kit);const Sf=Uo($u),Wu=W({},hL);Wu[Nt]=W(W({},Wu[Nt]),aL.kit);Uo(Wu);const TL=YD,eA="fa-layers-text",bL=XD,SL=W({},tL);Uo(SL);const RL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kl=JD,CL=[...oL,...IL],eo=ki.FontAwesomeConfig||{};function OL(t){var e=Ke.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function PL(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Ke&&typeof Ke.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const s=PL(OL(n));s!=null&&(eo[i]=s)});const tA={styleDefault:"solid",familyDefault:Nt,cssPrefix:YE,replacementClass:XE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};eo.familyPrefix&&(eo.cssPrefix=eo.familyPrefix);const rr=W(W({},tA),eo);rr.autoReplaceSvg||(rr.observeMutations=!1);const re={};Object.keys(tA).forEach(t=>{Object.defineProperty(re,t,{enumerable:!0,set:function(e){rr[t]=e,to.forEach(n=>n(re))},get:function(){return rr[t]}})});Object.defineProperty(re,"familyPrefix",{enumerable:!0,set:function(t){rr.cssPrefix=t,to.forEach(e=>e(re))},get:function(){return rr.cssPrefix}});ki.FontAwesomeConfig=re;const to=[];function NL(t){return to.push(t),()=>{to.splice(to.indexOf(t),1)}}const li=Gu,yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function DL(t){if(!t||!ti)return;const e=Ke.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Ke.head.childNodes;let i=null;for(let s=n.length-1;s>-1;s--){const r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return Ke.head.insertBefore(e,i),t}const LL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function To(){let t=12,e="";for(;t-- >0;)e+=LL[Math.random()*62|0];return e}function pr(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Rf(t){return t.classList?pr(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function nA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ML(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(nA(t[n]),'" '),"").trim()}function Qc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Cf(t){return t.size!==yn.size||t.x!==yn.x||t.y!==yn.y||t.rotate!==yn.rotate||t.flipX||t.flipY}function kL(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(c)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:u}}function xL(t){let{transform:e,width:n=Gu,height:i=Gu,startCentered:s=!1}=t,r="";return s&&HE?r+="translate(".concat(e.x/li-n/2,"em, ").concat(e.y/li-i/2,"em) "):s?r+="translate(calc(-50% + ".concat(e.x/li,"em), calc(-50% + ").concat(e.y/li,"em)) "):r+="translate(".concat(e.x/li,"em, ").concat(e.y/li,"em) "),r+="scale(".concat(e.size/li*(e.flipX?-1:1),", ").concat(e.size/li*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var VL=`:root, :host {
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
}`;function iA(){const t=YE,e=XE,n=re.cssPrefix,i=re.replacementClass;let s=VL;if(n!==t||i!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(i))}return s}let og=!1;function Ql(){re.autoAddCss&&!og&&(DL(iA()),og=!0)}var FL={mixout(){return{dom:{css:iA,insertCss:Ql}}},hooks(){return{beforeDOMElementCreation(){Ql()},beforeI2svg(){Ql()}}}};const Jn=ki||{};Jn[Xn]||(Jn[Xn]={});Jn[Xn].styles||(Jn[Xn].styles={});Jn[Xn].hooks||(Jn[Xn].hooks={});Jn[Xn].shims||(Jn[Xn].shims=[]);var In=Jn[Xn];const sA=[],rA=function(){Ke.removeEventListener("DOMContentLoaded",rA),sc=1,sA.map(t=>t())};let sc=!1;ti&&(sc=(Ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ke.readyState),sc||Ke.addEventListener("DOMContentLoaded",rA));function UL(t){ti&&(sc?setTimeout(t,0):sA.push(t))}function qo(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?nA(t):"<".concat(e," ").concat(ML(n),">").concat(i.map(qo).join(""),"</").concat(e,">")}function ag(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Yl=function(e,n,i,s){var r=Object.keys(e),o=r.length,c=n,l,u,f;for(i===void 0?(l=1,f=e[r[0]]):(l=0,f=i);l<o;l++)u=r[l],f=c(f,e[u],u,e);return f};function qL(t){const e=[];let n=0;const i=t.length;for(;n<i;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Ku(t){const e=qL(t);return e.length===1?e[0].toString(16):null}function BL(t,e){const n=t.length;let i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function cg(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function Qu(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,s=cg(e);typeof In.hooks.addPack=="function"&&!i?In.hooks.addPack(t,cg(e)):In.styles[t]=W(W({},In.styles[t]||{}),s),t==="fas"&&Qu("fa",e)}const{styles:bo,shims:zL}=In,oA=Object.keys(Sf),GL=oA.reduce((t,e)=>(t[e]=Object.keys(Sf[e]),t),{});let Of=null,aA={},cA={},lA={},uA={},dA={};function jL(t){return~CL.indexOf(t)}function HL(t,e){const n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!jL(s)?s:null}const fA=()=>{const t=i=>Yl(bo,(s,r,o)=>(s[o]=Yl(r,i,{}),s),{});aA=t((i,s,r)=>(s[3]&&(i[s[3]]=r),s[2]&&s[2].filter(c=>typeof c=="number").forEach(c=>{i[c.toString(16)]=r}),i)),cA=t((i,s,r)=>(i[r]=r,s[2]&&s[2].filter(c=>typeof c=="string").forEach(c=>{i[c]=r}),i)),dA=t((i,s,r)=>{const o=s[2];return i[r]=r,o.forEach(c=>{i[c]=r}),i});const e="far"in bo||re.autoFetchSvg,n=Yl(zL,(i,s)=>{const r=s[0];let o=s[1];const c=s[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(i.names[r]={prefix:o,iconName:c}),typeof r=="number"&&(i.unicodes[r.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});lA=n.names,uA=n.unicodes,Of=Yc(re.styleDefault,{family:re.familyDefault})};NL(t=>{Of=Yc(t.styleDefault,{family:re.familyDefault})});fA();function Pf(t,e){return(aA[t]||{})[e]}function $L(t,e){return(cA[t]||{})[e]}function ss(t,e){return(dA[t]||{})[e]}function hA(t){return lA[t]||{prefix:null,iconName:null}}function WL(t){const e=uA[t],n=Pf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xi(){return Of}const pA=()=>({prefix:null,iconName:null,rest:[]});function KL(t){let e=Nt;const n=oA.reduce((i,s)=>(i[s]="".concat(re.cssPrefix,"-").concat(s),i),{});return KE.forEach(i=>{(t.includes(n[i])||t.some(s=>GL[i].includes(s)))&&(e=i)}),e}function Yc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Nt}=e,i=vL[n][t];if(n===Kc&&!t)return"fad";const s=rg[n][t]||rg[n][i],r=t in In.styles?t:null;return s||r||null}function QL(t){let e=[],n=null;return t.forEach(i=>{const s=HL(re.cssPrefix,i);s?n=s:i&&e.push(i)}),{iconName:n,rest:e}}function lg(t){return t.sort().filter((e,n,i)=>i.indexOf(e)===n)}function Xc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let i=null;const s=zu.concat(dL),r=lg(t.filter(p=>s.includes(p))),o=lg(t.filter(p=>!zu.includes(p))),c=r.filter(p=>(i=p,!WE.includes(p))),[l=null]=c,u=KL(r),f=W(W({},QL(o)),{},{prefix:Yc(l,{family:u})});return W(W(W({},f),ZL({values:t,family:u,styles:bo,config:re,canonical:f,givenPrefix:i})),YL(n,i,f))}function YL(t,e,n){let{prefix:i,iconName:s}=n;if(t||!i||!s)return{prefix:i,iconName:s};const r=e==="fa"?hA(s):{},o=ss(i,s);return s=r.iconName||o||s,i=r.prefix||i,i==="far"&&!bo.far&&bo.fas&&!re.autoFetchSvg&&(i="fas"),{prefix:i,iconName:s}}const XL=KE.filter(t=>t!==Nt||t!==Kc),JL=Object.keys(Bu).filter(t=>t!==Nt).map(t=>Object.keys(Bu[t])).flat();function ZL(t){const{values:e,family:n,canonical:i,givenPrefix:s="",styles:r={},config:o={}}=t,c=n===Kc,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!c&&(l||u||f)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&XL.includes(n)&&(Object.keys(r).find(m=>JL.includes(m))||o.autoFetchSvg)){const m=iL.get(n).defaultShortPrefixId;i.prefix=m,i.iconName=ss(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||s==="fa")&&(i.prefix=xi()||"fas"),i}class eM{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(r=>{this.definitions[r]=W(W({},this.definitions[r]||{}),s[r]),Qu(r,s[r]);const o=Sf[Nt][r];o&&Qu(o,s[r]),fA()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(s=>{const{prefix:r,iconName:o,icon:c}=i[s],l=c[2];e[r]||(e[r]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[r][u]=c)}),e[r][o]=c}),e}}let ug=[],Fs={};const Ws={},tM=Object.keys(Ws);function nM(t,e){let{mixoutsTo:n}=e;return ug=t,Fs={},Object.keys(Ws).forEach(i=>{tM.indexOf(i)===-1&&delete Ws[i]}),ug.forEach(i=>{const s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(r=>{typeof s[r]=="function"&&(n[r]=s[r]),typeof s[r]=="object"&&Object.keys(s[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=s[r][o]})}),i.hooks){const r=i.hooks();Object.keys(r).forEach(o=>{Fs[o]||(Fs[o]=[]),Fs[o].push(r[o])})}i.provides&&i.provides(Ws)}),n}function Yu(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];return(Fs[t]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function ys(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(Fs[t]||[]).forEach(r=>{r.apply(null,n)})}function Vi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ws[t]?Ws[t].apply(null,e):void 0}function Xu(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||xi();if(e)return e=ss(n,e)||e,ag(mA.definitions,n,e)||ag(In.styles,n,e)}const mA=new eM,iM=()=>{re.autoReplaceSvg=!1,re.observeMutations=!1,ys("noAuto")},sM={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ti?(ys("beforeI2svg",t),Vi("pseudoElements2svg",t),Vi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;re.autoReplaceSvg===!1&&(re.autoReplaceSvg=!0),re.observeMutations=!0,UL(()=>{oM({autoReplaceSvgRoot:e}),ys("watch",t)})}},rM={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ss(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Yc(t[0]);return{prefix:n,iconName:ss(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(re.cssPrefix,"-"))>-1||t.match(TL))){const e=Xc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||xi(),iconName:ss(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=xi();return{prefix:e,iconName:ss(e,t)||t}}}},Yt={noAuto:iM,config:re,dom:sM,parse:rM,library:mA,findIconDefinition:Xu,toHtml:qo},oM=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Ke}=t;(Object.keys(In.styles).length>0||re.autoFetchSvg)&&ti&&re.autoReplaceSvg&&Yt.dom.i2svg({node:e})};function Jc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>qo(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ti)return;const n=Ke.createElement("div");return n.innerHTML=t.html,n.children}}),t}function aM(t){let{children:e,main:n,mask:i,attributes:s,styles:r,transform:o}=t;if(Cf(o)&&n.found&&!i.found){const{width:c,height:l}=n,u={x:c/l/2,y:.5};s.style=Qc(W(W({},r),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function cM(t){let{prefix:e,iconName:n,children:i,attributes:s,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(re.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:i}]}]}function Nf(t){const{icons:{main:e,mask:n},prefix:i,iconName:s,transform:r,symbol:o,title:c,maskId:l,titleId:u,extra:f,watchable:p=!1}=t,{width:m,height:I}=n.found?n:e,R=cL.includes(i),L=[re.replacementClass,s?"".concat(re.cssPrefix,"-").concat(s):""].filter(j=>f.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(f.classes).join(" ");let D={children:[],attributes:W(W({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:L,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(I)})};const N=R&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/I*16*.0625,"em")}:{};p&&(D.attributes[gs]=""),c&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(u||To())},children:[c]}),delete D.attributes.title);const O=W(W({},D),{},{prefix:i,iconName:s,main:e,mask:n,maskId:l,transform:r,symbol:o,styles:W(W({},N),f.styles)}),{children:x,attributes:q}=n.found&&e.found?Vi("generateAbstractMask",O)||{children:[],attributes:{}}:Vi("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=x,O.attributes=q,o?cM(O):aM(O)}function dg(t){const{content:e,width:n,height:i,transform:s,title:r,extra:o,watchable:c=!1}=t,l=W(W(W({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});c&&(l[gs]="");const u=W({},o.styles);Cf(s)&&(u.transform=xL({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);const f=Qc(u);f.length>0&&(l.style=f);const p=[];return p.push({tag:"span",attributes:l,children:[e]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function lM(t){const{content:e,title:n,extra:i}=t,s=W(W(W({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=Qc(i.styles);r.length>0&&(s.style=r);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Xl}=In;function Ju(t){const e=t[0],n=t[1],[i]=t.slice(4);let s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(re.cssPrefix,"-").concat(Kl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(Kl.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(Kl.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}const uM={found:!1,width:512,height:512};function dM(t,e){!JE&&!re.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Zu(t,e){let n=e;return e==="fa"&&re.styleDefault!==null&&(e=xi()),new Promise((i,s)=>{if(n==="fa"){const r=hA(t);t=r.iconName||t,e=r.prefix||e}if(t&&e&&Xl[e]&&Xl[e][t]){const r=Xl[e][t];return i(Ju(r))}dM(t,e),i(W(W({},uM),{},{icon:re.showMissingIcons&&t?Vi("missingIconAbstract")||{}:{}}))})}const fg=()=>{},ed=re.measurePerformance&&ha&&ha.mark&&ha.measure?ha:{mark:fg,measure:fg},Vr='FA "6.7.2"',fM=t=>(ed.mark("".concat(Vr," ").concat(t," begins")),()=>gA(t)),gA=t=>{ed.mark("".concat(Vr," ").concat(t," ends")),ed.measure("".concat(Vr," ").concat(t),"".concat(Vr," ").concat(t," begins"),"".concat(Vr," ").concat(t," ends"))};var Df={begin:fM,end:gA};const Ca=()=>{};function hg(t){return typeof(t.getAttribute?t.getAttribute(gs):null)=="string"}function hM(t){const e=t.getAttribute?t.getAttribute(Tf):null,n=t.getAttribute?t.getAttribute(bf):null;return e&&n}function pM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(re.replacementClass)}function mM(){return re.autoReplaceSvg===!0?Oa.replace:Oa[re.autoReplaceSvg]||Oa.replace}function gM(t){return Ke.createElementNS("http://www.w3.org/2000/svg",t)}function yM(t){return Ke.createElement(t)}function yA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?gM:yM}=e;if(typeof t=="string")return Ke.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){i.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){i.appendChild(yA(r,{ceFn:n}))}),i}function IM(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Oa={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(yA(n),e)}),e.getAttribute(gs)===null&&re.keepOriginalSource){let n=Ke.createComment(IM(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Rf(e).indexOf(re.replacementClass))return Oa.replace(t);const i=new RegExp("".concat(re.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,c)=>(c===re.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const s=n.map(r=>qo(r)).join(`
`);e.setAttribute(gs,""),e.innerHTML=s}};function pg(t){t()}function IA(t,e){const n=typeof e=="function"?e:Ca;if(t.length===0)n();else{let i=pg;re.mutateApproach===AL&&(i=ki.requestAnimationFrame||pg),i(()=>{const s=mM(),r=Df.begin("mutate");t.map(s),r(),n()})}}let Lf=!1;function _A(){Lf=!0}function td(){Lf=!1}let rc=null;function mg(t){if(!tg||!re.observeMutations)return;const{treeCallback:e=Ca,nodeCallback:n=Ca,pseudoElementsCallback:i=Ca,observeMutationsRoot:s=Ke}=t;rc=new tg(r=>{if(Lf)return;const o=xi();pr(r).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!hg(c.addedNodes[0])&&(re.searchPseudoElements&&i(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&re.searchPseudoElements&&i(c.target.parentNode),c.type==="attributes"&&hg(c.target)&&~RL.indexOf(c.attributeName))if(c.attributeName==="class"&&hM(c.target)){const{prefix:l,iconName:u}=Xc(Rf(c.target));c.target.setAttribute(Tf,l||o),u&&c.target.setAttribute(bf,u)}else pM(c.target)&&n(c.target)})}),ti&&rc.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function _M(){rc&&rc.disconnect()}function EM(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,s)=>{const r=s.split(":"),o=r[0],c=r.slice(1);return o&&c.length>0&&(i[o]=c.join(":").trim()),i},{})),n}function AM(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let s=Xc(Rf(t));return s.prefix||(s.prefix=xi()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=$L(s.prefix,t.innerText)||Pf(s.prefix,Ku(t.innerText))),!s.iconName&&re.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function wM(t){const e=pr(t.attributes).reduce((s,r)=>(s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return re.autoA11y&&(n?e["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(i||To()):(e["aria-hidden"]="true",e.focusable="false")),e}function vM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:s}=AM(t),r=wM(t),o=Yu("parseNodeAttributes",{},t);let c=e.styleParser?EM(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:r}},o)}const{styles:TM}=In;function EA(t){const e=re.autoReplaceSvg==="nest"?gg(t,{styleParser:!1}):gg(t);return~e.extra.classes.indexOf(eA)?Vi("generateLayersText",t,e):Vi("generateSvgReplacementMutation",t,e)}function bM(){return[...rL,...zu]}function yg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ti)return Promise.resolve();const n=Ke.documentElement.classList,i=f=>n.add("".concat(sg,"-").concat(f)),s=f=>n.remove("".concat(sg,"-").concat(f)),r=re.autoFetchSvg?bM():WE.concat(Object.keys(TM));r.includes("fa")||r.push("fa");const o=[".".concat(eA,":not([").concat(gs,"])")].concat(r.map(f=>".".concat(f,":not([").concat(gs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let c=[];try{c=pr(t.querySelectorAll(o))}catch{}if(c.length>0)i("pending"),s("complete");else return Promise.resolve();const l=Df.begin("onTree"),u=c.reduce((f,p)=>{try{const m=EA(p);m&&f.push(m)}catch(m){JE||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(u).then(m=>{IA(m,()=>{i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),l(),f()})}).catch(m=>{l(),p(m)})})}function SM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;EA(t).then(n=>{n&&IA([n],e)})}function RM(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Xu(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Xu(s||{})),t(i,W(W({},n),{},{mask:s}))}}const CM=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=yn,symbol:i=!1,mask:s=null,maskId:r=null,title:o=null,titleId:c=null,classes:l=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:I}=t;return Jc(W({type:"icon"},t),()=>(ys("beforeDOMElementCreation",{iconDefinition:t,params:e}),re.autoA11y&&(o?u["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(c||To()):(u["aria-hidden"]="true",u.focusable="false")),Nf({icons:{main:Ju(I),mask:s?Ju(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:W(W({},yn),n),symbol:i,title:o,maskId:r,titleId:c,extra:{attributes:u,styles:f,classes:l}})))};var OM={mixout(){return{icon:RM(CM)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=yg,t.nodeCallback=SM,t}}},provides(t){t.i2svg=function(e){const{node:n=Ke,callback:i=()=>{}}=e;return yg(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:s,titleId:r,prefix:o,transform:c,symbol:l,mask:u,maskId:f,extra:p}=n;return new Promise((m,I)=>{Promise.all([Zu(i,o),u.iconName?Zu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[L,D]=R;m([e,Nf({icons:{main:L,mask:D},prefix:o,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:r,extra:p,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:s,transform:r,styles:o}=e;const c=Qc(o);c.length>0&&(i.style=c);let l;return Cf(r)&&(l=Vi("generateAbstractTransformGrouping",{main:s,transform:r,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:i}}}},PM={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Jc({type:"layer"},()=>{ys("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(s=>{Array.isArray(s)?s.map(r=>{i=i.concat(r.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(re.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},NM={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:s={},styles:r={}}=e;return Jc({type:"counter",content:t},()=>(ys("beforeDOMElementCreation",{content:t,params:e}),lM({content:t.toString(),title:n,extra:{attributes:s,styles:r,classes:["".concat(re.cssPrefix,"-layers-counter"),...i]}})))}}}},DM={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=yn,title:i=null,classes:s=[],attributes:r={},styles:o={}}=e;return Jc({type:"text",content:t},()=>(ys("beforeDOMElementCreation",{content:t,params:e}),dg({content:t,transform:W(W({},yn),n),title:i,extra:{attributes:r,styles:o,classes:["".concat(re.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:s,extra:r}=n;let o=null,c=null;if(HE){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,c=u.height/l}return re.autoA11y&&!i&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,dg({content:e.innerHTML,width:o,height:c,transform:s,title:i,extra:r,watchable:!0})])}}};const LM=new RegExp('"',"ug"),Ig=[1105920,1112319],_g=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),nL),_L),fL),nd=Object.keys(_g).reduce((t,e)=>(t[e.toLowerCase()]=_g[e],t),{}),MM=Object.keys(nd).reduce((t,e)=>{const n=nd[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function kM(t){const e=t.replace(LM,""),n=BL(e,0),i=n>=Ig[0]&&n<=Ig[1],s=e.length===2?e[0]===e[1]:!1;return{value:Ku(s?e[0]:e),isSecondary:i||s}}function xM(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),s=isNaN(i)?"normal":i;return(nd[n]||{})[s]||MM[n]}function Eg(t,e){const n="".concat(EL).concat(e.replace(":","-"));return new Promise((i,s)=>{if(t.getAttribute(n)!==null)return i();const o=pr(t.children).filter(m=>m.getAttribute(ju)===e)[0],c=ki.getComputedStyle(t,e),l=c.getPropertyValue("font-family"),u=l.match(bL),f=c.getPropertyValue("font-weight"),p=c.getPropertyValue("content");if(o&&!u)return t.removeChild(o),i();if(u&&p!=="none"&&p!==""){const m=c.getPropertyValue("content");let I=xM(l,f);const{value:R,isSecondary:L}=kM(m),D=u[0].startsWith("FontAwesome");let N=Pf(I,R),O=N;if(D){const x=WL(R);x.iconName&&x.prefix&&(N=x.iconName,I=x.prefix)}if(N&&!L&&(!o||o.getAttribute(Tf)!==I||o.getAttribute(bf)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);const x=vM(),{extra:q}=x;q.attributes[ju]=e,Zu(N,I).then(j=>{const V=Nf(W(W({},x),{},{icons:{main:j,mask:pA()},prefix:I,iconName:O,extra:q,watchable:!0})),v=Ke.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(v,t.firstChild):t.appendChild(v),v.outerHTML=V.map(_=>qo(_)).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function VM(t){return Promise.all([Eg(t,"::before"),Eg(t,"::after")])}function FM(t){return t.parentNode!==document.head&&!~wL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ju)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ag(t){if(ti)return new Promise((e,n)=>{const i=pr(t.querySelectorAll("*")).filter(FM).map(VM),s=Df.begin("searchPseudoElements");_A(),Promise.all(i).then(()=>{s(),td(),e()}).catch(()=>{s(),td(),n()})})}var UM={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ag,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Ke}=e;re.searchPseudoElements&&Ag(n)}}};let wg=!1;var qM={mixout(){return{dom:{unwatch(){_A(),wg=!0}}}},hooks(){return{bootstrap(){mg(Yu("mutationObserverCallbacks",{}))},noAuto(){_M()},watch(t){const{observeMutationsRoot:e}=t;wg?td():mg(Yu("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const vg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const s=i.toLowerCase().split("-"),r=s[0];let o=s.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var BM={mixout(){return{parse:{transform:t=>vg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=vg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:s,iconWidth:r}=e;const o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},p={transform:"translate(".concat(r/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:W({},m.outer),children:[{tag:"g",attributes:W({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),m.path)}]}]}}}};const Jl={x:0,y:0,width:"100%",height:"100%"};function Tg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zM(t){return t.tag==="g"?t.children:[t]}var GM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?Xc(n.split(" ").map(s=>s.trim())):pA();return i.prefix||(i.prefix=xi()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:s,mask:r,maskId:o,transform:c}=e;const{width:l,icon:u}=s,{width:f,icon:p}=r,m=kL({transform:c,containerWidth:f,iconWidth:l}),I={tag:"rect",attributes:W(W({},Jl),{},{fill:"white"})},R=u.children?{children:u.children.map(Tg)}:{},L={tag:"g",attributes:W({},m.inner),children:[Tg(W({tag:u.tag,attributes:W(W({},u.attributes),m.path)},R))]},D={tag:"g",attributes:W({},m.outer),children:[L]},N="mask-".concat(o||To()),O="clip-".concat(o||To()),x={tag:"mask",attributes:W(W({},Jl),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,D]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:zM(p)},x]};return n.push(q,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(N,")")},Jl)}),{children:n,attributes:i}}}},jM={provides(t){let e=!1;ki.matchMedia&&(e=ki.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},HM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},$M=[FL,OM,PM,NM,DM,UM,qM,BM,GM,jM,HM];nM($M,{mixoutsTo:Yt});Yt.noAuto;Yt.config;const WM=Yt.library;Yt.dom;const id=Yt.parse;Yt.findIconDefinition;Yt.toHtml;const KM=Yt.icon;Yt.layer;Yt.text;Yt.counter;function bg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Un(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bg(Object(n),!0).forEach(function(i){Vt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function QM(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function YM(t){var e=QM(t,"string");return typeof e=="symbol"?e:e+""}function oc(t){"@babel/helpers - typeof";return oc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oc(t)}function Vt(t,e,n){return e=YM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function XM(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function JM(t,e){if(t==null)return{};var n=XM(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var ZM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},AA={exports:{}};(function(t){(function(e){var n=function(N,O,x){if(!u(O)||p(O)||m(O)||I(O)||l(O))return O;var q,j=0,V=0;if(f(O))for(q=[],V=O.length;j<V;j++)q.push(n(N,O[j],x));else{q={};for(var v in O)Object.prototype.hasOwnProperty.call(O,v)&&(q[N(v,x)]=n(N,O[v],x))}return q},i=function(N,O){O=O||{};var x=O.separator||"_",q=O.split||/(?=[A-Z])/;return N.split(q).join(x)},s=function(N){return R(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(O,x){return x?x.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},r=function(N){var O=s(N);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(N,O){return i(N,O).toLowerCase()},c=Object.prototype.toString,l=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},f=function(N){return c.call(N)=="[object Array]"},p=function(N){return c.call(N)=="[object Date]"},m=function(N){return c.call(N)=="[object RegExp]"},I=function(N){return c.call(N)=="[object Boolean]"},R=function(N){return N=N-0,N===N},L=function(N,O){var x=O&&"process"in O?O.process:O;return typeof x!="function"?N:function(q,j){return x(q,N,j)}},D={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(N,O){return n(L(s,O),N)},decamelizeKeys:function(N,O){return n(L(o,O),N,O)},pascalizeKeys:function(N,O){return n(L(r,O),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})(ZM)})(AA);var e4=AA.exports,t4=["class","style"];function n4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=e4.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function i4(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function wA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return wA(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.class=i4(f);break;case"style":l.style=n4(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,c=JM(n,t4);return Ac(t.tag,Un(Un(Un({},e),{},{class:s.class,style:Un(Un({},s.style),o)},s.attrs),c),i)}var vA=!1;try{vA=!0}catch{}function s4(){if(!vA&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Zl(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Vt({},t,e):{}}function r4(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Vt(Vt(Vt(Vt(Vt(Vt(Vt(Vt(Vt(Vt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Vt(Vt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Sg(t){if(t&&oc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(id.icon)return id.icon(t);if(t===null)return null;if(oc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var o4=Id({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=Qe(function(){return Sg(e.icon)}),r=Qe(function(){return Zl("classes",r4(e))}),o=Qe(function(){return Zl("transform",typeof e.transform=="string"?id.transform(e.transform):e.transform)}),c=Qe(function(){return Zl("mask",Sg(e.mask))}),l=Qe(function(){return KM(s.value,Un(Un(Un(Un({},r.value),o.value),c.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Ti(l,function(f){if(!f)return s4("Could not find one or more icon(s)",s.value,c.value)},{immediate:!0});var u=Qe(function(){return l.value?wA(l.value.abstract[0],{},i):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const a4={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},c4=a4,l4={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},u4=l4,d4={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},f4={prefix:"fas",iconName:"highlighter",icon:[576,512,[],"f591","M315 315l158.4-215L444.1 70.6 229 229 315 315zm-187 5s0 0 0 0l0-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5c0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5L224 416l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l63-63 70.6 70.6-31 31c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z"]},h4={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},p4={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},m4=p4,g4={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},y4={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},I4={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},_4=I4,E4={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},A4={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},w4=A4,v4={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"]},T4=v4,b4={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Rg=b4,S4={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},R4={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},C4=R4,O4={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},P4={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},N4={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},D4={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"]};WM.add(g4,D4,h4,Rg,O4,m4,P4,w4,c4,_4,T4,u4,f4,E4,y4,d4,N4,C4,S4,Rg);const Zc=Av(RP),L4=Tv();Zc.use(L4);Zc.use($D);Zc.component("font-awesome-icon",o4);const M4=SE();M4.initAuthState();Zc.mount("#app");

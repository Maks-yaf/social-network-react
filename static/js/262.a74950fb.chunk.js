"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[262],{9262:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var o=n(5043),r=n(3003),s=n(4140);const i="Paginator_selectedPage__-ZBu8",c="Paginator_paginator__+6K7T",u="Paginator_pageNumber__qDoZi";var l=n(579);const a=e=>{let t=Math.ceil(e.totalItemsCount/e.pageSize),n=[];for(let o=1;o<=t;o++)n.push(o);let r=Math.ceil(t/e.portionSize),[s,a]=(0,o.useState)(1),p=(s-1)*e.portionSize+1,d=s*e.portionSize;return(0,l.jsxs)("div",{className:c,children:[s>1&&(0,l.jsx)("button",{onClick:()=>{a(s-1)},children:"Back"}),n.filter((e=>e>=p&&e<=d)).map((t=>(0,l.jsx)("span",{className:e.currentPage===t&&i||u,onClick:n=>{e.onPageChanged(t)},children:t}))),r>s&&(0,l.jsx)("button",{onClick:()=>{a(s+1)},children:"Forward"})]})},p="Users_avatar__Kg8Vp";var d=n(5143),f=n(5475);const g=e=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("span",{children:[(0,l.jsx)("div",{className:p,children:(0,l.jsx)(f.k2,{to:"/profile/"+e.user.id,children:(0,l.jsx)("img",{src:null!==e.user.photos.small?e.user.photos.small:d})})}),(0,l.jsx)("div",{children:e.user.followed?(0,l.jsx)("button",{disabled:e.followingInProgress.some((t=>t===e.user.id)),onClick:()=>{e.unfollow(e.user.id)},children:"Unfollow"}):(0,l.jsx)("button",{disabled:e.followingInProgress.some((t=>t===e.user.id)),onClick:()=>{e.follow(e.user.id)},children:"Follow"})})]}),(0,l.jsxs)("span",{children:[(0,l.jsxs)("span",{children:[(0,l.jsx)("div",{children:e.user.name}),(0,l.jsx)("div",{children:e.user.status})]}),(0,l.jsxs)("span",{children:[(0,l.jsx)("div",{children:"user.location.city"}),(0,l.jsx)("div",{children:"user.location.country"})]})]})]},e.user.id),y=e=>(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)(a,{totalItemsCount:e.totalItemsCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged,portionSize:e.portionSize})}),(0,l.jsx)("div",{children:e.users.map((t=>(0,l.jsx)(g,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow},t.id)))})]});var h=n(4359),x=n(3923);n(9526);function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received ".concat(typeof e);if("function"!==typeof e)throw new TypeError(t)}var b=e=>Array.isArray(e)?e:[e];function v(e){const t=Array.isArray(e[0])?e[0]:e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((e=>"function"===typeof e))){const n=e.map((e=>"function"===typeof e?"function ".concat(e.name||"unnamed","()"):typeof e)).join(", ");throw new TypeError("".concat(t,"[").concat(n,"]"))}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}Symbol(),Object.getPrototypeOf({});var w="undefined"!==typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}},j=0,z=1;function P(){return{s:j,v:void 0,o:null,p:null}}function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=P();const{resultEqualityCheck:o}=t;let r,s=0;function i(){let t=n;const{length:i}=arguments;for(let e=0,n=i;e<n;e++){const n=arguments[e];if("function"===typeof n||"object"===typeof n&&null!==n){let e=t.o;null===e&&(t.o=e=new WeakMap);const o=e.get(n);void 0===o?(t=P(),e.set(n,t)):t=o}else{let e=t.p;null===e&&(t.p=e=new Map);const o=e.get(n);void 0===o?(t=P(),e.set(n,t)):t=o}}const c=t;let u;if(t.s===z)u=t.v;else if(u=e.apply(null,arguments),s++,o){var l,a,p;const e=null!==(l=null===(a=r)||void 0===a||null===(p=a.deref)||void 0===p?void 0:p.call(a))&&void 0!==l?l:r;null!=e&&o(e,u)&&(u=e,0!==s&&s--);r="object"===typeof u&&null!==u||"function"===typeof u?new w(u):u}return c.s=z,c.v=u,u}return i.clearCache=()=>{n=P(),i.resetResultsCount()},i.resultsCount=()=>s,i.resetResultsCount=()=>{s=0},i}function A(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];const r="function"===typeof e?{memoize:e,memoizeOptions:n}:e,s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let o,s=0,i=0,c={},u=t.pop();"object"===typeof u&&(c=u,u=t.pop()),m(u,"createSelector expects an output function after the inputs, but received: [".concat(typeof u,"]"));const l={...r,...c},{memoize:a,memoizeOptions:p=[],argsMemoize:d=S,argsMemoizeOptions:f=[],devModeChecks:g={}}=l,y=b(p),h=b(f),x=v(t),w=a((function(){return s++,u.apply(null,arguments)}),...y);const j=d((function(){i++;const e=function(e,t){const n=[],{length:o}=e;for(let r=0;r<o;r++)n.push(e[r].apply(null,t));return n}(x,arguments);return o=w.apply(null,e),o}),...h);return Object.assign(j,{resultFunc:u,memoizedResultFunc:w,dependencies:x,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>o,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:a,argsMemoize:d})};return Object.assign(s,{withTypes:()=>s}),s}var X=A(S),C=Object.assign((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected an object, instead received ".concat(typeof e);if("object"!==typeof e)throw new TypeError(t)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ".concat(typeof e));const n=Object.keys(e),o=t(n.map((t=>e[t])),(function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.reduce(((e,t,o)=>(e[n[o]]=t,e)),{})}));return o}),{withTypes:()=>C});const N=X((e=>e.usersPage.users.filter((e=>!0))),(e=>e.filter((e=>!0)))),D=e=>e.usersPage.pageSize,M=e=>e.usersPage.totalItemsCount,T=e=>e.usersPage.currentPage,R=e=>e.usersPage.isFetching,F=e=>e.usersPage.followingInProgress,B=e=>e.usersPage.portionSize;class G extends o.Component{constructor(){super(...arguments),this.onPageChanged=e=>{this.props.getUsersData(e,this.props.pageSize)}}componentDidMount(){this.props.getUsersData(this.props.currentPage,this.props.pageSize)}render(){return(0,l.jsxs)(l.Fragment,{children:[this.props.isFetching?(0,l.jsx)(h.A,{}):null,(0,l.jsx)(y,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,followingInProgress:this.props.followingInProgress,portionSize:this.props.portionSize,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow})]})}}let L={follow:s.e6,unfollow:s.X2,getUsersData:s.FG};const K=(0,x.Zz)((0,r.Ng)((e=>({users:N(e),pageSize:D(e),totalItemsCount:M(e),currentPage:T(e),isFetching:R(e),followingInProgress:F(e),portionSize:B(e)})),L))(G)},5143:e=>{e.exports="data:image/png;base64,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"},9526:(e,t,n)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}n.d(t,{A:()=>r})}}]);
//# sourceMappingURL=262.a74950fb.chunk.js.map
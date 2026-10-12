"use strict";var k=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var j=k(function(C,h){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),w=require('@stdlib/blas-ext-base-sediff/dist').ndarray;function z(a){var r,e,v,s,n,p,q,x,f,c,g,m,N,D,l,O,S,b,t;return t=a[0],r=a[1],e=a[2],v=a[3],b=d(t,0),D=d(r,0),N=d(e,0),S=u(t),p=u(r),m=u(e),f=u(v),O=i(t,0),n=i(r,0),g=i(e,0),x=i(v,0),l=o(t),s=o(r),c=o(e),q=o(v),w(b,S,O,l,D,p,n,s,N,m,g,c,f,x,q),v}h.exports=z
});var A=j();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{cb9343a07c9f48216347:function(e,r,n){"use strict";n.r(r);var t=n("8af190b70a6bc55c6f1b"),c=n.n(t),a=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("ab039aecd4a1d4fedc0e"),o=n("a28fc3c963a1d4d1a2e5"),d=n("ab4cb61bcb2dc161defb"),f=n("adc20f99e57c573c589c"),u=n("d95b0cf107403b178365"),b=n("7edf83707012a871cdfb"),s={},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1?arguments[1]:void 0;return Object(b.a)(e,function(){r.type})},p=function(e){return e.metric||s},v=function(){return Object(o.a)(p,function(e){return e})},h=regeneratorRuntime.mark(m);function m(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},h)}var y,w=Object(i.defineMessages)({header:{id:"".concat("app.containers.Metric",".header"),defaultMessage:"This is the Metric container!"}});function g(){return Object(u.a)({key:"metric",reducer:l}),Object(f.a)({key:"metric",saga:m}),function(e,r,n,t){y||(y="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={children:void 0}),r&&c)for(var i in c)void 0===r[i]&&(r[i]=c[i]);else r||(r=c||{});if(1===a)r.children=t;else if(a>1){for(var o=new Array(a),d=0;d<a;d++)o[d]=arguments[d+3];r.children=o}return{$$typeof:y,type:e,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}("div",{},void 0,c.a.createElement(i.FormattedMessage,w.header))}n.d(r,"Metric",function(){return g});var j=Object(o.b)({metric:v()});var O=Object(a.connect)(j,function(e){return{dispatch:e}});r.default=Object(d.compose)(O)(g)}}]);
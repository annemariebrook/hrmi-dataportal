(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"52a9b20d5dc3a84fe9b3":function(e,t,n){"use strict";n.r(t);var r,a=n("8af190b70a6bc55c6f1b"),c=n.n(a),o=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("ab039aecd4a1d4fedc0e"),s=n("a28fc3c963a1d4d1a2e5"),d=n("ab4cb61bcb2dc161defb"),u=n("0b3cb19af78752326f59"),f=n("76abbe2db5a955046df2"),l=n("66543f9bb6e90e461320"),b=n("bac14fcbe71a01730001"),m=n("6542cd13fd5dd1bcffd4"),v=n("a72b40110d9c31c9b5c5"),p=n("eb656803928a435bd3cc"),h=n("02ed36e7ccc5625439c9"),g=n("e58cf44b8fc5a0def58f"),y=n("f598121af61dcb613e5b"),j=n("fcb99a06256635f70435");function O(e,t,n,a){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&c)for(var i in c)void 0===t[i]&&(t[i]=c[i]);else t||(t=c||{});if(1===o)t.children=a;else if(o>1){for(var s=new Array(o),d=0;d<o;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var M=O("span",{},void 0,": "),S=O("span",{},void 0,": "),w=O("span",{},void 0,": "),k=O("span",{},void 0,": "),D=O("span",{},void 0,": ");var F=Object(s.b)({rights:function(e,t){var n=t.country;return Object(m.v)(e,n.country_code)},dimensions:function(e,t){var n=t.country;return Object(m.k)(e,n.country_code)},scale:function(e){return Object(m.B)(e)},benchmark:function(e){return Object(m.a)(e)}});var A,R=Object(o.connect)(F,function(e){return{onSelectCountry:function(t){return e(Object(v.j)(t))}}}),_=Object(d.compose)(R)(Object(i.injectIntl)(function(e){var t=e.onSelectCountry,n=e.country,r=e.rights,a=e.dimensions,o=e.scale,s=e.benchmark,d=e.intl;if(!a||!r||!n)return null;var u=j.b.find(function(e){return e.key===s}),f=a&&a.empowerment.score,b=a&&a.physint.score,m=a&&a.esr.score;return O(p.a,{pad:"medium"},void 0,n&&O(l.a,{onClick:function(){return t(n.country_code)}},void 0,O("strong",{},void 0,c.a.createElement(i.FormattedMessage,h.a.countries[n.country_code])),"d"===o&&O("div",{},void 0,O("div",{},void 0,c.a.createElement(i.FormattedMessage,h.a.dimensions.empowerment),M,f&&O("strong",{},void 0,Object(g.a)(f[j.c.CPR.MEAN])),!f&&Object(y.b)(d,a.empowerment)),O("div",{},void 0,c.a.createElement(i.FormattedMessage,h.a.dimensions.physint),S,b&&O("strong",{},void 0,Object(g.a)(b[j.c.CPR.MEAN])),!b&&Object(y.b)(d,a.physint)),O("div",{},void 0,c.a.createElement(i.FormattedMessage,h.a.dimensions.esr),w,m&&O("strong",{},void 0,Object(g.a)(m[u.column])),!m&&Object(y.b)(d,a.esr),!m&&Object(y.a)(d,a.esr))),"r"===o&&r&&Object.values(r).filter(function(e){return"cpr"===e.type&&"undefined"===typeof e.aggregate}).map(function(e){return O("div",{},e.key,c.a.createElement(i.FormattedMessage,h.a["rights-short"][e.key]),k,e.score&&O("strong",{},void 0,Object(g.a)(e.score[j.c.CPR.MEAN])),!e.score&&Object(y.b)(d,e))}),"r"===o&&r&&Object.values(r).filter(function(e){return"esr"===e.type}).map(function(e){return O("div",{},e.key,c.a.createElement(i.FormattedMessage,h.a["rights-short"][e.key]),D,e.score&&O("strong",{},void 0,Object(g.a)(e.score[u.column])),!e.score&&Object(y.b)(d,e),!e.score&&Object(y.a)(d,e))})))}));function C(e,t,n,r){A||(A="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),t&&a)for(var o in a)void 0===t[o]&&(t[o]=a[o]);else t||(t=a||{});if(1===c)t.children=r;else if(c>1){for(var i=new Array(c),s=0;s<c;s++)i[s]=arguments[s+3];t.children=i}return{$$typeof:A,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"PathOverview",function(){return N}),n.d(t,"mapDispatchToProps",function(){return $});var E=u.default.div.withConfig({displayName:"PathOverview__Styled",componentId:"sc-12jmd80-0"})([""]),I=C(b.a,{}),P=C(b.a,{});function N(e){var t=e.countries,n=e.regionFilterValue,r=e.incomeFilterValue,a=e.onRemoveFilter,c=e.intl,o=t&&t.sort(function(e,t){return c.formatMessage(h.a.countries[e.country_code])<c.formatMessage(h.a.countries[t.country_code])?-1:1});return C(E,{},void 0,t&&C("div",{},void 0,C(f.a,{},void 0,"".concat(t.length," countries"))),C("div",{},void 0,n&&C("span",{},void 0,C(l.a,{primary:!0,icon:I,reverse:!0,onClick:function(){return a("region")},label:c.formatMessage(h.a.regions[n])})),r&&C("span",{},void 0,C(l.a,{primary:!0,icon:P,reverse:!0,onClick:function(){return a("income")},label:c.formatMessage(h.a.income[r])}))),o&&o.map(function(e){return C(_,{country:e},e.country_code)}))}var V=Object(s.b)({countries:function(e){return Object(m.h)(e)},regionFilterValue:function(e){return Object(m.u)(e)},incomeFilterValue:function(e){return Object(m.n)(e)}});function $(e){return{onRemoveFilter:function(t){return e(Object(v.i)({pathname:""},{replace:!1,deleteParams:[t]}))}}}var J=Object(o.connect)(V,$);t.default=Object(d.compose)(J)(Object(i.injectIntl)(N))},e58cf44b8fc5a0def58f:function(e,t,n){"use strict";var r=n("b44905d53fb04dabb0f4"),a=n("1aa0310e1216895a5689");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Math.min(t,3);return Object(r.a)(e)&&Object(a.a)(e,n).toFixed(n)}},f598121af61dcb613e5b:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var r=n("02ed36e7ccc5625439c9"),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e&&Object.values(e).filter(function(e){return e.dimension===t&&(n||"undefined"===typeof e.aggregate)})},c=function(e){return e&&e.empowerment&&!!e.empowerment.score},o=function(e,t){return function(e){return e.hasScoreRights||e.hasScoreIndicators}(t)?e.formatMessage(r.a.charts.incompleteData):function(e){return e.hasScoreAlternate||e.hasScoreAlternateRights||e.hasScoreIndicatorsAlternate}(t)?e.formatMessage(r.a.charts.noDataForStandard):e.formatMessage(r.a.charts.noData)},i=function(e,t){return t.hasScoreRights?" (".concat(e.formatMessage(r.a.charts.incompleteData.drillDownRights),")"):t.hasScoreIndicators?" (".concat(e.formatMessage(r.a.charts.incompleteData.drillDownIndicators),")"):t.hasScoreAlternate?" (".concat(e.formatMessage(r.a.charts.incompleteData.changeStandard),")"):t.hasScoreAlternateRights?" (".concat(e.formatMessage(r.a.charts.incompleteData.changeStandard)," & ").concat(e.formatMessage(r.a.charts.incompleteData.drillDownRights),")"):t.hasScoreIndicatorsAlternate?" (".concat(e.formatMessage(r.a.charts.incompleteData.changeStandard)," & ").concat(e.formatMessage(r.a.charts.incompleteData.drillDownIndicators),")"):""}}}]);
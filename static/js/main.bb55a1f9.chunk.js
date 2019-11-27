(this["webpackJsonpto-do-redux"]=this["webpackJsonpto-do-redux"]||[]).push([[0],{22:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var r=n(9),i=n(0),o=n.n(i),c=n(8),a=n(5),u=n(4),l=0,f="SHOW_ALL",p="SHOW_COMPLETED",d="SHOW_ACTIVE",O=n(2),s=n(3);function b(){var e=Object(O.a)(["\n  font-size: 16px;\n  margin: 5px;\n  padding: 10px;\n  background-color: palevioletred;\n  border: none;\n  color: white;\n  border-radius: 3px;\n"]);return b=function(){return e},e}var m=s.a.button(b()),v=function(e){var t=e.active,n=e.children,r=e.onClick;return o.a.createElement(m,{onClick:r,disabled:t,style:{marginLeft:"4px"}},n)},E=Object(u.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(v),y=function(){return o.a.createElement("div",null,o.a.createElement("span",null,"Show: "),o.a.createElement(E,{filter:f},"All"),o.a.createElement(E,{filter:d},"Active"),o.a.createElement(E,{filter:p},"Completed"))};function g(){var e=Object(O.a)(["\n  display: grid;\n  grid-template-columns: 90% 10%;\n  margin: 0 auto;\n  max-width: 800px;\n"]);return g=function(){return e},e}var j=s.a.form(g());function w(){var e=Object(O.a)(["\n  font-size: 20px;\n  margin: 5px;\n  padding: 10px;\n  border-radius: 3px;\n"]);return w=function(){return e},e}var h=s.a.input(w()),x=Object(u.b)()((function(e){var t,n=e.dispatch;return o.a.createElement("div",null,o.a.createElement(j,{onSubmit:function(e){var r;(e.preventDefault(),t.value.trim())&&(n((r=t.value,{type:"ADD_TODO",id:l++,text:r})),t.value="")}},o.a.createElement(h,{ref:function(e){return t=e}}),o.a.createElement(m,{type:"submit"},"Add")))})),D=function(e){var t=e.onClick,n=e.completed,r=e.text;return o.a.createElement("li",{onClick:t,style:{textDecoration:n?"line-through":"none"}},r)},_=function(e){var t=e.todos,n=e.toggleTodo;return o.a.createElement("ul",null,t.map((function(e){return o.a.createElement(D,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))})))},T=function(e,t){switch(t){case f:return e;case p:return e.filter((function(e){return e.completed}));case d:return e.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+t)}},P=Object(u.b)((function(e){return{todos:T(e.todos,e.visibilityFilter)}}),(function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}}))(_);function S(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  max-width: 800px;\n"]);return S=function(){return e},e}var k=s.a.div(S()),I=function(){return o.a.createElement(k,null,o.a.createElement(x,null),o.a.createElement(P,null),o.a.createElement(y,null))},L=n(19);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(L.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?A({},e,{completed:!e.completed}):e}));default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},R=Object(a.c)({todos:F,visibilityFilter:G}),V=n(18);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,W=Object(a.e)(R,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},window.__PRELOADED_STATE__),H(Object(a.a)(V.a)));Object(c.render)(o.a.createElement(u.a,{store:W},o.a.createElement(I,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.bb55a1f9.chunk.js.map
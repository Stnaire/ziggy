function t(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function r(r,n,e){return n&&t(r.prototype,n),e&&t(r,e),r}function n(){return n=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},n.apply(this,arguments)}var e=String.prototype.replace,i=/%20/g,o={default:"RFC3986",formatters:{RFC1738:function(t){return e.call(t,i,"+")},RFC3986:function(t){return String(t)}},RFC1738:"RFC1738",RFC3986:"RFC3986"},u=Object.prototype.hasOwnProperty,f=Array.isArray,a=function(){for(var t=[],r=0;r<256;++r)t.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return t}(),c=function(t,r){for(var n=r&&r.plainObjects?Object.create(null):{},e=0;e<t.length;++e)void 0!==t[e]&&(n[e]=t[e]);return n},s={arrayToObject:c,assign:function(t,r){return Object.keys(r).reduce(function(t,n){return t[n]=r[n],t},t)},combine:function(t,r){return[].concat(t,r)},compact:function(t){for(var r=[{obj:{o:t},prop:"o"}],n=[],e=0;e<r.length;++e)for(var i=r[e],o=i.obj[i.prop],u=Object.keys(o),a=0;a<u.length;++a){var c=u[a],s=o[c];"object"==typeof s&&null!==s&&-1===n.indexOf(s)&&(r.push({obj:o,prop:c}),n.push(s))}return function(t){for(;t.length>1;){var r=t.pop(),n=r.obj[r.prop];if(f(n)){for(var e=[],i=0;i<n.length;++i)void 0!==n[i]&&e.push(n[i]);r.obj[r.prop]=e}}}(r),t},decode:function(t,r,n){var e=t.replace(/\+/g," ");if("iso-8859-1"===n)return e.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(e)}catch(t){return e}},encode:function(t,r,n,e,i){if(0===t.length)return t;var u=t;if("symbol"==typeof t?u=Symbol.prototype.toString.call(t):"string"!=typeof t&&(u=String(t)),"iso-8859-1"===n)return escape(u).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var f="",c=0;c<u.length;++c){var s=u.charCodeAt(c);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||i===o.RFC1738&&(40===s||41===s)?f+=u.charAt(c):s<128?f+=a[s]:s<2048?f+=a[192|s>>6]+a[128|63&s]:s<55296||s>=57344?f+=a[224|s>>12]+a[128|s>>6&63]+a[128|63&s]:(s=65536+((1023&s)<<10|1023&u.charCodeAt(c+=1)),f+=a[240|s>>18]+a[128|s>>12&63]+a[128|s>>6&63]+a[128|63&s])}return f},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,r){if(f(t)){for(var n=[],e=0;e<t.length;e+=1)n.push(r(t[e]));return n}return r(t)},merge:function t(r,n,e){if(!n)return r;if("object"!=typeof n){if(f(r))r.push(n);else{if(!r||"object"!=typeof r)return[r,n];(e&&(e.plainObjects||e.allowPrototypes)||!u.call(Object.prototype,n))&&(r[n]=!0)}return r}if(!r||"object"!=typeof r)return[r].concat(n);var i=r;return f(r)&&!f(n)&&(i=c(r,e)),f(r)&&f(n)?(n.forEach(function(n,i){if(u.call(r,i)){var o=r[i];o&&"object"==typeof o&&n&&"object"==typeof n?r[i]=t(o,n,e):r.push(n)}else r[i]=n}),r):Object.keys(n).reduce(function(r,i){var o=n[i];return r[i]=u.call(r,i)?t(r[i],o,e):o,r},i)}},l=Object.prototype.hasOwnProperty,v={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,r){return t+"["+r+"]"},repeat:function(t){return t}},d=Array.isArray,h=Array.prototype.push,p=function(t,r){h.apply(t,d(r)?r:[r])},y=Date.prototype.toISOString,b=o.default,g={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:s.encode,encodeValuesOnly:!1,format:b,formatter:o.formatters[b],indices:!1,serializeDate:function(t){return y.call(t)},skipNulls:!1,strictNullHandling:!1},m=function t(r,n,e,i,o,u,f,a,c,l,v,h,y,b){var m,j=r;if("function"==typeof f?j=f(n,j):j instanceof Date?j=l(j):"comma"===e&&d(j)&&(j=s.maybeMap(j,function(t){return t instanceof Date?l(t):t})),null===j){if(i)return u&&!y?u(n,g.encoder,b,"key",v):n;j=""}if("string"==typeof(m=j)||"number"==typeof m||"boolean"==typeof m||"symbol"==typeof m||"bigint"==typeof m||s.isBuffer(j))return u?[h(y?n:u(n,g.encoder,b,"key",v))+"="+h(u(j,g.encoder,b,"value",v))]:[h(n)+"="+h(String(j))];var O,w=[];if(void 0===j)return w;if("comma"===e&&d(j))O=[{value:j.length>0?j.join(",")||null:void 0}];else if(d(f))O=f;else{var E=Object.keys(j);O=a?E.sort(a):E}for(var k=0;k<O.length;++k){var R=O[k],C="object"==typeof R&&void 0!==R.value?R.value:j[R];if(!o||null!==C){var S=d(j)?"function"==typeof e?e(n,R):n:n+(c?"."+R:"["+R+"]");p(w,t(C,S,e,i,o,u,f,a,c,l,v,h,y,b))}}return w},j=Object.prototype.hasOwnProperty,O=Array.isArray,w={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:s.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},E=function(t){return t.replace(/&#(\d+);/g,function(t,r){return String.fromCharCode(parseInt(r,10))})},k=function(t,r){return t&&"string"==typeof t&&r.comma&&t.indexOf(",")>-1?t.split(","):t},R=function(t,r,n,e){if(t){var i=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/g,u=n.depth>0&&/(\[[^[\]]*])/.exec(i),f=u?i.slice(0,u.index):i,a=[];if(f){if(!n.plainObjects&&j.call(Object.prototype,f)&&!n.allowPrototypes)return;a.push(f)}for(var c=0;n.depth>0&&null!==(u=o.exec(i))&&c<n.depth;){if(c+=1,!n.plainObjects&&j.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;a.push(u[1])}return u&&a.push("["+i.slice(u.index)+"]"),function(t,r,n,e){for(var i=e?r:k(r,n),o=t.length-1;o>=0;--o){var u,f=t[o];if("[]"===f&&n.parseArrays)u=[].concat(i);else{u=n.plainObjects?Object.create(null):{};var a="["===f.charAt(0)&&"]"===f.charAt(f.length-1)?f.slice(1,-1):f,c=parseInt(a,10);n.parseArrays||""!==a?!isNaN(c)&&f!==a&&String(c)===a&&c>=0&&n.parseArrays&&c<=n.arrayLimit?(u=[])[c]=i:u[a]=i:u={0:i}}i=u}return i}(a,r,n,e)}},C=function(){function t(t,r,n){var e;this.name=t,this.definition=r,this.bindings=null!=(e=r.bindings)?e:{},this.config=n}var n=t.prototype;return n.matchesUrl=function(t){if(!this.definition.methods.includes("GET"))return!1;var r=this.template.replace(/\/{[^}?]*\?}/g,"(/[^/?]+)?").replace(/{[^}?]*\?}/g,"([^/?]+)?").replace(/{[^}]+}/g,"[^/?]+").replace(/^\w+:\/\//,"");return new RegExp("^"+r+"$").test(t.replace(/\/+$/,"").split("?").shift())},n.compile=function(t){var r=this;return this.parameterSegments.length?this.template.replace(/{([^}?]+)\??}/g,function(n,e){var i;if([null,void 0].includes(t[e])&&r.parameterSegments.find(function(t){return t.name===e}).required)throw new Error("Ziggy error: '"+e+"' parameter is required for route '"+r.name+"'.");return encodeURIComponent(null!=(i=t[e])?i:"")}).replace(/\/+$/,""):this.template},r(t,[{key:"template",get:function(){return((this.config.absolute?this.definition.domain?""+this.config.url.match(/^\w+:\/\//)[0]+this.definition.domain+(this.config.port?":"+this.config.port:""):this.config.url:"")+"/"+this.definition.uri).replace(/\/+$/,"")}},{key:"parameterSegments",get:function(){var t,r;return null!=(t=null==(r=this.template.match(/{[^}?]+\??}/g))?void 0:r.map(function(t){return{name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)}}))?t:[]}}]),t}(),S=function(){function t(t,r,e,i){if(void 0===e&&(e=!0),this.t=null!=i?i:"undefined"!=typeof Ziggy?Ziggy:null==globalThis?void 0:globalThis.Ziggy,this.t=n({},this.t,{absolute:e}),t){if(!this.t.routes[t])throw new Error("Ziggy error: route '"+t+"' is not in the route list.");this.i=new C(t,this.t.routes[t],this.t),this.u=this.l(r)}}var e=t.prototype;return e.toString=function(){var t=this,r=Object.keys(this.u).filter(function(r){return!t.i.parameterSegments.some(function(t){return t.name===r})}).filter(function(t){return"_query"!==t}).reduce(function(r,e){var i;return n({},r,((i={})[e]=t.u[e],i))},{});return this.i.compile(this.u)+function(t,r){var n,e=t,i=function(t){if(!t)return g;if(null!=t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var r=t.charset||g.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if(void 0!==t.format){if(!l.call(o.formatters,t.format))throw new TypeError("Unknown format option provided.");n=t.format}var e=o.formatters[n],i=g.filter;return("function"==typeof t.filter||d(t.filter))&&(i=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:g.addQueryPrefix,allowDots:void 0===t.allowDots?g.allowDots:!!t.allowDots,charset:r,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:g.charsetSentinel,delimiter:void 0===t.delimiter?g.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:g.encode,encoder:"function"==typeof t.encoder?t.encoder:g.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:g.encodeValuesOnly,filter:i,format:n,formatter:e,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:g.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:g.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:g.strictNullHandling}}(r);"function"==typeof i.filter?e=(0,i.filter)("",e):d(i.filter)&&(n=i.filter);var u=[];if("object"!=typeof e||null===e)return"";var f=v[r&&r.arrayFormat in v?r.arrayFormat:r&&"indices"in r?r.indices?"indices":"repeat":"indices"];n||(n=Object.keys(e)),i.sort&&n.sort(i.sort);for(var a=0;a<n.length;++a){var c=n[a];i.skipNulls&&null===e[c]||p(u,m(e[c],c,f,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.format,i.formatter,i.encodeValuesOnly,i.charset))}var s=u.join(i.delimiter),h=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&(h+="iso-8859-1"===i.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),s.length>0?h+s:""}(n({},r,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:function(t,r){return"boolean"==typeof t?Number(t):r(t)}})},e.current=function(t,r){var n=this,e=this.t.absolute?this.v().host+this.v().pathname:this.v().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"),i=Object.entries(this.t.routes).find(function(r){return new C(t,r[1],n.t).matchesUrl(e)})||[void 0,void 0],o=i[0],u=i[1];if(!t)return o;var f=new RegExp("^"+t.replace(/\./g,"\\.").replace(/\*/g,".*")+"$").test(o);if([null,void 0].includes(r)||!f)return f;var a=new C(o,u,this.t);r=this.l(r,a);var c=this.h(u);return!(!Object.values(r).every(function(t){return!t})||Object.values(c).length)||Object.entries(r).every(function(t){return c[t[0]]==t[1]})},e.v=function(){var t,r,n,e,i,o,u="undefined"!=typeof window?window.location:{},f=u.host,a=u.pathname,c=u.search;return{host:null!=(t=null==(r=this.t.location)?void 0:r.host)?t:void 0===f?"":f,pathname:null!=(n=null==(e=this.t.location)?void 0:e.pathname)?n:void 0===a?"":a,search:null!=(i=null==(o=this.t.location)?void 0:o.search)?i:void 0===c?"":c}},e.has=function(t){return Object.keys(this.t.routes).includes(t)},e.l=function(t,r){var e=this;void 0===t&&(t={}),void 0===r&&(r=this.i),t=["string","number"].includes(typeof t)?[t]:t;var i=r.parameterSegments.filter(function(t){return!e.t.defaults[t.name]});if(Array.isArray(t))t=t.reduce(function(t,r,e){var o,u;return n({},t,i[e]?((o={})[i[e].name]=r,o):((u={})[r]="",u))},{});else if(1===i.length&&!t[i[0].name]&&(t.hasOwnProperty(Object.values(r.bindings)[0])||t.hasOwnProperty("id"))){var o;(o={})[i[0].name]=t,t=o}return n({},function(t,r){return t.parameterSegments.filter(function(t){return r.defaults[t.name]}).reduce(function(t,e,i){var o,u=e.name;return n({},t,((o={})[u]=r.defaults[u],o))},{})}(r,this.t),this.p(t,r))},e.p=function(t,r){var e=r.bindings,i=r.parameterSegments;return Object.entries(t).reduce(function(t,r){var o,u,f=r[0],a=r[1];if(!a||"object"!=typeof a||Array.isArray(a)||!i.some(function(t){return t.name===f}))return n({},t,((u={})[f]=a,u));if(!a.hasOwnProperty(e[f])){if(!a.hasOwnProperty("id"))throw new Error("Ziggy error: object passed as '"+f+"' parameter is missing route model binding key '"+e[f]+"'.");e[f]="id"}return n({},t,((o={})[f]=a[e[f]],o))},{})},e.h=function(t){var r,e=this.v().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,""),i=function(t,r,e){void 0===r&&(r="");var i=[t,r].map(function(t){return t.split(e)}),o=i[0];return i[1].reduce(function(t,r,e){var i;return/{[^}?]+\??}/.test(r)&&o[e]?n({},t,((i={})[r.replace(/.*{|\??}.*/g,"")]=o[e].replace(r.match(/^[^{]*/g),"").replace(r.match(/[^}]*$/g),""),i)):t},{})};return n({},i(this.v().host,t.domain,"."),i(e,t.uri,"/"),function(t,r){var n=w;if(""===t||null==t)return n.plainObjects?Object.create(null):{};for(var e="string"==typeof t?function(t,r){var n,e={},i=(r.ignoreQueryPrefix?t.replace(/^\?/,""):t).split(r.delimiter,Infinity===r.parameterLimit?void 0:r.parameterLimit),o=-1,u=r.charset;if(r.charsetSentinel)for(n=0;n<i.length;++n)0===i[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===i[n]?u="utf-8":"utf8=%26%2310003%3B"===i[n]&&(u="iso-8859-1"),o=n,n=i.length);for(n=0;n<i.length;++n)if(n!==o){var f,a,c=i[n],l=c.indexOf("]="),v=-1===l?c.indexOf("="):l+1;-1===v?(f=r.decoder(c,w.decoder,u,"key"),a=r.strictNullHandling?null:""):(f=r.decoder(c.slice(0,v),w.decoder,u,"key"),a=s.maybeMap(k(c.slice(v+1),r),function(t){return r.decoder(t,w.decoder,u,"value")})),a&&r.interpretNumericEntities&&"iso-8859-1"===u&&(a=E(a)),c.indexOf("[]=")>-1&&(a=O(a)?[a]:a),e[f]=j.call(e,f)?s.combine(e[f],a):a}return e}(t,n):t,i=n.plainObjects?Object.create(null):{},o=Object.keys(e),u=0;u<o.length;++u){var f=o[u],a=R(f,e[f],n,"string"==typeof t);i=s.merge(i,a,n)}return s.compact(i)}(null==(r=this.v().search)?void 0:r.replace(/^\?/,"")))},r(t,[{key:"params",get:function(){return this.h(this.t.routes[this.current()])}}]),t}(),N=function(t,r,n,e){var i=new S(t,r,n,e);return t?i.toString():i},x={install:function(t,r){return t.mixin({methods:{route:function(t,n,e,i){return void 0===i&&(i=r),N(t,n,e,i)}}})}};export{x as ZiggyVue,N as default,N as route};

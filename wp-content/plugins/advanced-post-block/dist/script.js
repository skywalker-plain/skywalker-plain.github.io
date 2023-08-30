!function(){"use strict";var e={n:function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,{a:a}),a},d:function(t,a){for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=React,a=e.n(t),r=ReactDOM;function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var l=function(e){var t,r;function l(){return e.apply(this,arguments)||this}r=e,(t=l).prototype=Object.create(r.prototype),t.prototype.constructor=t,o(t,r);var c=l.prototype;return c.getColumns=function(){var e=this.props,t=e.children,r=e.columnsCount,n=Array.from({length:r},(function(){return[]}));return a().Children.forEach(t,(function(e,t){e&&a().isValidElement(e)&&n[t%r].push(e)})),n},c.renderColumns=function(){var e=this.props.gutter;return this.getColumns().map((function(t,r){return a().createElement("div",{key:r,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:e}},t.map((function(e){return e})))}))},c.render=function(){var e=this.props,t=e.gutter,r=e.className,o=e.style;return a().createElement("div",{style:n({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},o),className:r},this.renderColumns())},l}(a().Component);l.propTypes={},l.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var c=l,i="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,s=function(){var e=function(){var e=(0,t.useState)(!1),a=e[0],r=e[1];return i((function(){r(!0)}),[]),a}(),a=(0,t.useState)(0),r=a[0],n=a[1],o=(0,t.useCallback)((function(){e&&n(window.innerWidth)}),[e]);return i((function(){if(e)return window.addEventListener("resize",o),o(),function(){return window.removeEventListener("resize",o)}}),[e,o]),r},u=function(e){var r=e.columnsCountBreakPoints,n=void 0===r?{350:1,750:2,900:3}:r,o=e.children,l=e.className,c=void 0===l?null:l,i=e.style,u=void 0===i?null:i,m=s(),p=(0,t.useMemo)((function(){var e=Object.keys(n).sort((function(e,t){return e-t})),t=e.length>0?n[e[0]]:1;return e.forEach((function(e){e<m&&(t=n[e])})),t}),[m,n]);return a().createElement("div",{className:c,style:u},a().Children.map(o,(function(e,t){return a().cloneElement(e,{key:t,columnsCount:p})})))};u.propTypes={};var m=u,p=c,f=function(e){var t=e.post,a=e.attributes,r=t.link,n=t.thumbnail,o=n.url,l=n.alt,c=t.categories,i=a.isFImg,s=a.isFImgLink,u=a.isMeta,m=a.isMetaCategory,p=a.metaCategoryIn,f=a.isLinkNewTab;return i&&o?React.createElement("figure",{className:"apbThumb"},s?React.createElement("a",{href:r,target:f?"_blank":"_self",rel:"noreferrer","aria-label":l},React.createElement("img",{src:o,alt:l})):React.createElement("img",{src:o,alt:l}),u&&m&&"image"===p&&c.space&&React.createElement("div",{className:"apbThumbCats",dangerouslySetInnerHTML:{__html:c.space}})):null},d=function(e){var t=e.post,a=e.attributes,r=t.author||{},n=r.name,o=r.link,l=a.isMetaAuthor,c=a.isMetaAuthorLink,i=void 0===c||c,s=a.metaAuthorIcon;return l&&n?React.createElement("span",null,s?React.createElement("img",{src:s,alt:"Author"}):React.createElement("span",{className:"dashicons dashicons-admin-users"}),i?React.createElement("a",{href:o,target:"_blank",rel:"noreferrer","aria-label":n},n):React.createElement("span",null,n)):null},b=function(e){var t=e.post,a=e.attributes,r=t.date,n=a.isMetaDate,o=a.metaDateIcon;return n&&r?React.createElement("span",null,o?React.createElement("img",{src:o,alt:"Date"}):React.createElement("span",{className:"dashicons dashicons-calendar-alt"}),React.createElement("span",null,r)):null};function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,o=[],l=!0,c=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,n=e}finally{try{l||null==a.return||a.return()}finally{if(c)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var h=function(e,t){return e&&e.split(" ").splice(0,t).join(" ")},E=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=t.reduce((function(e,t){return"string"==typeof t?e.push(t):"object"===v(t)&&Object.entries(t).forEach((function(t){var a=y(t,2),r=a[0];a[1]&&e.push(r)})),e}),[]);return r.join(" ")},R=function(e){var t,a=e.post,r=e.attributes,n=a.categories,o=r.isMetaCategory,l=r.metaCategoryIn,c=r.metaCategoryIcon;return o&&"content"===l&&n.coma?React.createElement("span",null,c?React.createElement("img",{src:c,alt:"Author"}):React.createElement("span",{className:"dashicons dashicons-category"}),(t=n.coma,React.createElement("span",{dangerouslySetInnerHTML:{__html:t}}))):null},P=function(e){var t=e.post,a=e.attributes,r=t.readTime,n=t.content,o=a.isMetaReadTime,l=a.metaReadTimeIcon,c=a.isMetaReadTimeSec,i=a.metaReadTimeLabel,s=c?"".concat(null==r?void 0:r.min,":").concat(null==r?void 0:r.sec):null==r?void 0:r.min;return o&&n?React.createElement("span",null,l?React.createElement("img",{src:l,alt:"Author"}):React.createElement("span",{className:"dashicons dashicons-clock"}),React.createElement("span",null,s," ",i)):null},S=function(e){var t=e.post,a=e.attributes,r=t.link,n=t.title,o=t.commentCount,l=t.commentStatus,c=a.isMetaComment,i=a.metaCommentIcon;return c&&"open"===l?React.createElement("span",null,i?React.createElement("img",{src:i,alt:"Author"}):React.createElement("span",{className:"dashicons dashicons-admin-comments"}),React.createElement("a",{href:"".concat(r,"/#comments"),target:"_blank",rel:"noreferrer","aria-label":"Comments of ".concat(n)},o)):null},w=function(e){var t=e.post,a=e.attributes;return a.isMeta&&React.createElement("div",{className:"apbMeta"},React.createElement(d,{post:t,attributes:a}),React.createElement(b,{post:t,attributes:a}),React.createElement(R,{post:t,attributes:a}),React.createElement(P,{post:t,attributes:a}),React.createElement(S,{post:t,attributes:a}))},C=function(e){var t=e.post,a=e.attributes,r=t.link,n=t.title,o=a.isTitle,l=a.isTitleLink,c=a.isLinkNewTab;return o?React.createElement(React.Fragment,null,l?React.createElement("h3",{className:"apbTitle"},React.createElement("a",{href:r,target:c?"_blank":"_self",rel:"noreferrer",dangerouslySetInnerHTML:{__html:n},"aria-label":n})):React.createElement("h3",{className:"apbTitle",dangerouslySetInnerHTML:{__html:n}})):null},N=function(e){var t=e.post,a=e.attributes,r=a.elementsSort;return(void 0===r?["title","meta"]:r).map((function(e,r){return"title"===e?React.createElement(C,{key:r,post:t,attributes:a}):React.createElement(w,{key:r,post:t,attributes:a})}))},k=function(e){var t,a=e.post,r=e.attributes,n=a.excerpt,o=a.content,l=r.isExcerpt,c=r.isExcerptFromContent,i=r.isEllipsisOnExcerpt,s=r.excerptLength,u=!c&&n?n:o,m=i&&((t=u)?t.split(" ").length:0)>s?"...":"";return l&&u?React.createElement("div",{className:"apbExcerpt apbInnerContent",dangerouslySetInnerHTML:{__html:"".concat(h(u,s)).concat(m)}}):null},A=function(e){var t=e.post,a=e.attributes,r=t.link,n=a.isReadMore,o=a.readMorePosition,l=void 0===o?"auto":o,c=a.readMoreLabel,i=a.isLinkNewTab;return n?React.createElement("div",{className:"apbReadMore ".concat(l)},React.createElement("a",{href:r,target:i?"_blank":"_self",rel:"noreferrer",dangerouslySetInnerHTML:{__html:c},"aria-label":c})):null},I=function(e){var t=e.post,a=e.attributes,r=e.postClass,n=a.subLayout,o=E(r,"apbDefault");return React.createElement("article",{className:o},React.createElement(f,{post:t,attributes:a}),React.createElement("div",{className:"apbText"},React.createElement(N,{post:t,attributes:a}),"title-meta"!==n&&React.createElement(React.Fragment,null,React.createElement(k,{post:t,attributes:a}),React.createElement(A,{post:t,attributes:a}))))},x=function(e){var t=e.post,a=e.attributes,r=e.postClass,n=t.thumbnail,o=a.subLayout,l=a.isFImg,c="left-image"===o,i="right-image"===o,s=E(r,"apbSideImage",{grid:l&&n.url,leftImage:c,rightImage:i});return React.createElement("article",{className:s},c&&React.createElement(f,{post:t,attributes:a}),React.createElement("div",{className:"apbText"},React.createElement(N,{post:t,attributes:a}),React.createElement(k,{post:t,attributes:a}),React.createElement(A,{post:t,attributes:a})),i&&React.createElement(f,{post:t,attributes:a}))},M=function(e){var t=e.post,a=e.attributes,r=e.postClass,n=t.title,o=t.thumbnail.url,l=a.subLayout,c=E(r,"apbOverlay",{apbOverlayHover:"overlay-content-hover"===l&&o,apbOverlayBox:"overlay-box"===l||"overlay-content-box"===l,apbOverlayHalfContent:"overlay-half-content"===l});return React.createElement("article",{className:c},o&&React.createElement("img",{src:o,alt:n}),React.createElement("div",{className:"apbText"},React.createElement(N,{post:t,attributes:a}),"overlay-box"!==l&&"overlay-half-content"!==l&&React.createElement(React.Fragment,null,React.createElement(k,{post:t,attributes:a}),React.createElement(A,{post:t,attributes:a}))))},T=function(e){var t=e.post,a=e.attributes,r=a.layout,n=a.subLayout,o=a.content,l=void 0===o?{height:"auto"}:o,c=t.id,i=t.thumbnail,s=E("apbPost","apbPost-".concat(c),"".concat(null==l?void 0:l.height,"ContentHeight"),{hasThumbnail:i.url,"swiper-slide":"slider"===r});switch(n){case"default":case"title-meta":return React.createElement(I,{post:t,attributes:a,postClass:s});case"left-image":case"right-image":return React.createElement(x,{post:t,attributes:a,postClass:s});case"overlay-content":case"overlay-content-hover":case"overlay-box":case"overlay-content-box":case"overlay-half-content":return React.createElement(M,{post:t,attributes:a,postClass:s});default:return null}},O=function(e){var t=e.posts,a=e.attributes,r=a.columns,n=a.columnGap,o=a.rowGap,l=r.desktop,c=void 0===l?3:l,i=r.tablet,s=void 0===i?2:i,u=r.mobile,f=void 0===u?1:u;return React.createElement(m,{className:"apbMasonryPosts",columnsCountBreakPoints:{0:f,576:s,768:c}},React.createElement(p,{gutter:"".concat(o,"px ").concat(n,"px")},t.map((function(e){return React.createElement(T,{key:e.id,post:e,attributes:a})}))))},L=function(e){var t=e.posts,a=e.attributes,r=a.layout,n=a.columns,o=a.sliderIsPage,l=a.sliderIsPrevNext,c=n.desktop,i=void 0===c?3:c,s=n.tablet,u=void 0===s?2:s,m=n.mobile,p=void 0===m?1:m,f=function(){return t.map((function(e){return React.createElement(T,{key:e.id,post:e,attributes:a})}))};switch(r){case"grid":return React.createElement("div",{className:"apbGridPosts columns-".concat(i," columns-tablet-").concat(u," columns-mobile-").concat(p)},React.createElement(f,null));case"grid1":return React.createElement("div",{className:"apbGrid1Posts"},React.createElement(f,null));case"masonry":return React.createElement(O,{posts:t,attributes:a});case"slider":return React.createElement("div",{className:"apbSliderPosts"},React.createElement("div",{className:"swiper-wrapper"},React.createElement(f,null)),o&&React.createElement("div",{className:"swiper-pagination"}),l&&React.createElement(React.Fragment,null,React.createElement("div",{className:"swiper-button-prev"}),React.createElement("div",{className:"swiper-button-next"})));case"ticker":return React.createElement("div",{className:"apbTickerPosts"},React.createElement("div",null,React.createElement(f,null)));default:return null}};function j(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var H="&#183;",D=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return a+e}))};function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,o=[],l=!0,c=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,n=e}finally{try{l||null==a.return||a.return()}finally{if(c)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var z=function(e){var a=e.attributes,r=e.totalCount,n=e.onChange,o=a.layout,l=a.isPostsPerPageAll,c=a.postsPerPage,i=a.isPagination,s=a.paginationPrevLabel,u=a.paginationNextLabel,m=F((0,t.useState)(1),2),p=m[0],f=m[1],d=function(e){var a=e.currentPage,r=e.totalCount,n=e.pageSize,o=e.siblingCount,l=void 0===o?1:o;return(0,t.useMemo)((function(){var e=Math.ceil(r/n);if(l+5>=e)return D(1,e);var t=Math.max(a-l,1),o=Math.min(a+l,e),c=t>2,i=o<e-2,s=1,u=e;if(!c&&i){var m=D(1,3+2*l);return[].concat(j(m),[H,e])}if(c&&!i){var p=D(e-(3+2*l)+1,e);return[s,H].concat(j(p))}if(c&&i){var f=D(t,o);return[s,H].concat(j(f),[H,u])}}),[a,r,n,l])}({currentPage:p,totalCount:r,pageSize:c,siblingCount:1});if(0===p||d.length<2)return null;var b=d[d.length-1],v=function(e){n(e),f(e)};return i&&!l&&"slider"!==o&&"ticker"!==o?React.createElement("ul",{className:"apbPagination"},React.createElement("li",{className:"apbPageNumber ".concat(1===p?"disabled":""),onClick:function(){return v(p-1)}},s),d.map((function(e,t){return e===H?React.createElement("li",{key:t,className:"dots"},"·····"):React.createElement("li",{key:t,className:"apbPageNumber ".concat(e===p?"apbActivePage":""),onClick:function(){return v(e)}}," ",e)})),React.createElement("li",{className:"apbPageNumber ".concat(p===b?"disabled":""),onClick:function(){return v(p+1)}},u)):null};function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,o=[],l=!0,c=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,n=e}finally{try{l||null==a.return||a.return()}finally{if(c)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var U=jQuery;document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-ap-block-posts").forEach((function(e){var t,a,n,o,l=JSON.parse(e.dataset.posts),c=JSON.parse(e.dataset.attributes),i=JSON.parse(e.dataset.extra).totalPosts,s=c.layout;if("masonry"===s&&(0,r.render)(React.createElement(O,{posts:l,attributes:c}),document.querySelector("#".concat(e.id," .apbPostsMainPH"))),"slider"===s){var u=document.querySelector("#".concat(e.id," .apbSliderPosts"));u&&(new Swiper(u,function(e){var t=e.columns,a=e.columnGap,r=e.sliderIsLoop,n=e.sliderIsTouchMove,o=e.sliderIsAutoplay,l=e.sliderAutoplayOptions,c=void 0===l?{delay:1.5}:l,i=e.sliderSpeed,s=e.sliderEffect,u=e.sliderIsPageClickable,m=e.sliderIsPageDynamic;return{direction:"horizontal",slidesPerView:null==t?void 0:t.mobile,breakpoints:{576:{slidesPerView:null==t?void 0:t.tablet},768:{slidesPerView:null==t?void 0:t.desktop}},spaceBetween:a,loop:r,allowTouchMove:n,grabCursor:n,autoplay:!!o&&{delay:1e3*(null==c?void 0:c.delay)},speed:1e3*i,effect:s,fadeEffect:{crossFade:!0},creativeEffect:{prev:{shadow:!0,translate:["-120%",0,-500]},next:{shadow:!0,translate:["120%",0,-500]}},allowSlideNext:!0,allowSlidePrev:!0,autoHeight:!1,notificationClass:null,pagination:{el:".swiper-pagination",clickable:u,dynamicBullets:m},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}(c)),t=e.id,a=[],n=document.querySelectorAll("#".concat(t," .apbSliderPosts .swiper-slide")),null==(o=document.querySelectorAll("#".concat(t," .apbSliderPosts .swiper-slide .apbText")))||o.forEach((function(e){a.push(null==e?void 0:e.clientHeight)})),(null==n?void 0:n.length)&&n.forEach((function(e){e.style.height="".concat(Math.max.apply(Math,a),"px")})))}if("ticker"===s){var m=document.querySelector("#".concat(e.id," .apbTickerPosts"));m&&U(m).easyTicker(function(e){var t=e.rowGap,a=e.tickerDirection,r=void 0===a?"up":a,n=e.tickerSpeed,o=void 0===n?"slow":n,l=e.tickerInterval,c=void 0===l?2e3:l,i=e.tickerHeight,s=void 0===i?"0px":i,u=e.tickerVisible,m=void 0===u?3:u,p=e.tickerIsMousePause,f=void 0===p||p;return{direction:r,easing:"swing",speed:isNaN(o)?o:parseInt(o),interval:c,height:"0px"===s||"0em"===s?"auto":s,gap:t,visible:m,mousePause:f}}(c))}(0,r.render)(React.createElement(V,{postEl:e,totalPosts:i,attributes:c}),document.querySelector("#".concat(e.id," .apbPostsMain"))),null==e||e.removeAttribute("data-posts"),null==e||e.removeAttribute("data-attributes"),null==e||e.removeAttribute("data-extra")}))}));var V=function(e){var a=e.postEl,r=e.totalPosts,n=e.attributes,o=n.cId,l=n.layout,c=n.isPostsPerPageAll,i=n.postsPerPage,s=n.postsOffset,u=n.isPagination,m=n.paginationPrevLabel,p=n.paginationNextLabel,f=n.fImgSize,d=void 0===f?"full":f,b=n.metaDateFormat,v=void 0===b?"M j, Y":b,y=G((0,t.useState)([]),2),g=y[0],h=y[1],E=document.querySelector("#".concat(a.id," .apbPostsMainPH"));return(0,t.useEffect)((function(){(null==g?void 0:g.length)&&(null==E||E.remove())}),[g,E]),React.createElement(React.Fragment,null,null!=g&&g.length?React.createElement(L,{posts:g,attributes:n,clientId:o}):null,React.createElement(z,{attributes:{layout:l,isPostsPerPageAll:c,postsPerPage:i,isPagination:u,paginationPrevLabel:m,paginationNextLabel:p},totalCount:r,onChange:function(e){var t;fetch("".concat(null===(t=apbPageData)||void 0===t?void 0:t.ajaxUrl,"?action=apb_get_posts&cId=").concat(o,"&pageNumber=").concat(e,"&postsPerPage=").concat(i,"&postsOffset=").concat(s,"&fImgSize=").concat(d,"&metaDateFormat=").concat(v)).then((function(e){return e.json()})).then((function(e){return h(e)}))}}))}}();
//# sourceMappingURL=script.js.map
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,r)=>{"use strict";function o({widthInt:e,heightInt:t,blurWidth:r,blurHeight:a,blurDataURL:n,objectFit:i}){let l=r?40*r:e,s=a?40*a:t,c=l&&s?`viewBox='0 0 ${l} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return o}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return i}};for(var a in o)Object.defineProperty(r,a,{enumerable:!0,get:o[a]});let n=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return c}}),e.r(33525);let o=e.r(43369),a=e.r(88143),n=e.r(87690),i=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:r=!1,priority:u=!1,preload:d=!1,loading:p,className:f,quality:m,width:x,height:h,fill:v=!1,style:g,overrideSrc:b,onLoad:w,onLoadingComplete:y,placeholder:E="empty",blurDataURL:F,fetchPriority:T,decoding:A="async",layout:_,objectFit:R,objectPosition:k,lazyBoundary:M,lazyRoot:P,...S},j){var C;let z,N,L,{imgConf:$,showAltText:D,blurComplete:O,defaultLoader:B}=j,I=$||n.imageConfigDefault;if("allSizes"in I)z=I;else{let e=[...I.deviceSizes,...I.imageSizes].sort((e,t)=>e-t),t=I.deviceSizes.sort((e,t)=>e-t),r=I.qualities?.sort((e,t)=>e-t);z={...I,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===B)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let U=S.loader||B;delete S.loader,delete S.srcSet;let q="__next_img_default"in U;if(q){if("custom"===z.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=U;U=t=>{let{config:r,...o}=t;return e(o)}}if(_){"fill"===_&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(g={...g,...e});let r={responsive:"100vw",fill:"100vw"}[_];r&&!t&&(t=r)}let W="",H=s(x),X=s(h);if((C=e)&&"object"==typeof C&&(l(C)||void 0!==C.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(N=t.blurWidth,L=t.blurHeight,F=F||t.blurDataURL,W=t.src,!v)if(H||X){if(H&&!X){let e=H/t.width;X=Math.round(t.height*e)}else if(!H&&X){let e=X/t.height;H=Math.round(t.width*e)}}else H=t.width,X=t.height}let Y=!u&&!d&&("lazy"===p||void 0===p);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,Y=!1),z.unoptimized&&(r=!0),q&&!z.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let G=s(m),V=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:k}:{},D?{}:{color:"transparent"},g),K=O||"empty"===E?null:"blur"===E?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:H,heightInt:X,blurWidth:N,blurHeight:L,blurDataURL:F||"",objectFit:V.objectFit})}")`:`url("${E}")`,J=i.includes(V.objectFit)?"fill"===V.objectFit?"100% 100%":"cover":V.objectFit,Q=K?{backgroundSize:J,backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},Z=function({config:e,src:t,unoptimized:r,width:a,quality:n,sizes:i,loader:l}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,o.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let o=new URLSearchParams(t.slice(r+1));o.get("dpl")||(o.append("dpl",e),t=t.slice(0,r)+"?"+o.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:c}=function({deviceSizes:e,allSizes:t},r,o){if(o){let r=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=r.exec(o);)a.push(parseInt(e[2]));if(a.length){let r=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,i),u=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((r,o)=>`${l({config:e,src:t,quality:n,width:r})} ${"w"===c?r:o+1}${c}`).join(", "),src:l({config:e,src:t,quality:n,width:s[u]})}}({config:z,src:e,unoptimized:r,width:H,quality:G,sizes:t,loader:U}),ee=Y?"lazy":p;return{props:{...S,loading:ee,fetchPriority:T,width:H,height:X,decoding:A,className:f,style:{...V,...Q},sizes:Z.sizes,srcSet:Z.srcSet,src:b||Z.src},meta:{unoptimized:r,preload:d||u,placeholder:E,fill:v}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let o=e.r(71645),a="u"<typeof window,n=a?()=>{}:o.useLayoutEffect,i=a?()=>{}:o.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let e=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return a&&(t?.mountedInstances?.add(e.children),l()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return x},defaultHead:function(){return d}};for(var a in o)Object.defineProperty(r,a,{enumerable:!0,get:o[a]});let n=e.r(55682),i=e.r(90809),l=e.r(43476),s=i._(e.r(71645)),c=n._(e.r(98879)),u=e.r(42732);function d(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function m(e){let t,r,o,a;return e.reduce(p,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,o=new Set,a={},e=>{let n=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=f.length;t<r;t++){let r=f[t];if(e.props.hasOwnProperty(r))if("charSet"===r)o.has(r)?n=!1:o.add(r);else{let t=e.props[r],o=a[r]||new Set;("name"!==r||!i)&&o.has(t)?n=!1:(o.add(t),a[r]=o)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return s.default.cloneElement(e,{key:r})})}let x=function({children:e}){let t=(0,s.useContext)(u.HeadManagerContext);return(0,l.jsx)(c.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let o=e.r(55682)._(e.r(71645)),a=e.r(87690),n=o.default.createContext(a.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return o}});let o=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function o(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return o}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let o=e.r(70965),a=e.r(43369);function n({config:e,src:t,width:r,quality:i}){let l=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),o=r.get("dpl");if(o){l=o,r.delete("dpl");let a=r.toString();t=t.slice(0,e)+(a?"?"+a:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,o.findClosestQuality)(i,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}n.__next_img_default=!0;let i=n},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return w}});let o=e.r(55682),a=e.r(90809),n=e.r(43476),i=a._(e.r(71645)),l=o._(e.r(74080)),s=o._(e.r(25633)),c=e.r(8927),u=e.r(87690),d=e.r(18556);e.r(33525);let p=e.r(65856),f=o._(e.r(1948)),m=e.r(18581),x={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,o,a,n,i){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}o?.current&&o.current(e)}}))}function v(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let g=(0,i.forwardRef)(({src:e,srcSet:t,sizes:r,height:o,width:a,decoding:l,className:s,style:c,fetchPriority:u,placeholder:d,loading:p,unoptimized:f,fill:x,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:y,sizesInput:E,onLoad:F,onError:T,...A},_)=>{let R=(0,i.useCallback)(e=>{e&&(T&&(e.src=e.src),e.complete&&h(e,d,g,b,w,f,E))},[e,d,g,b,w,T,f,E]),k=(0,m.useMergedRef)(_,R);return(0,n.jsx)("img",{...A,...v(u),loading:p,width:a,height:o,decoding:l,"data-nimg":x?"fill":"1",className:s,style:c,sizes:r,srcSet:t,src:e,ref:k,onLoad:e=>{h(e.currentTarget,d,g,b,w,f,E)},onError:e=>{y(!0),"empty"!==d&&w(!0),T&&T(e)}})});function b({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...v(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,r),null):(0,n.jsx)(s.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let w=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(p.RouterContext),o=(0,i.useContext)(d.ImageConfigContext),a=(0,i.useMemo)(()=>{let e=x||o||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:a,localPatterns:"u"<typeof window?o?.localPatterns:e.localPatterns}},[o]),{onLoad:l,onLoadingComplete:s}=e,m=(0,i.useRef)(l);(0,i.useEffect)(()=>{m.current=l},[l]);let h=(0,i.useRef)(s);(0,i.useEffect)(()=>{h.current=s},[s]);let[v,w]=(0,i.useState)(!1),[y,E]=(0,i.useState)(!1),{props:F,meta:T}=(0,c.getImgProps)(e,{defaultLoader:f.default,imgConf:a,blurComplete:v,showAltText:y});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{...F,unoptimized:T.unoptimized,placeholder:T.placeholder,fill:T.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:E,sizesInput:e.sizes,ref:t}),T.preload?(0,n.jsx)(b,{isAppRouter:!r,imgAttributes:F}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return u},getImageProps:function(){return c}};for(var a in o)Object.defineProperty(r,a,{enumerable:!0,get:o[a]});let n=e.r(55682),i=e.r(8927),l=e.r(5500),s=n._(e.r(1948));function c(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=l.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},98935,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let o=["top","bottom"],a=e=>`${(e/6*100).toFixed(2)}%`;function n({enabled:e=!0,zone:i=.15,max:l=16,speed:s=16}){let c=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=c.current;if(!t)return;let r=o.map(e=>t.querySelector(`.works__veil-zone[data-side="${e}"]`)),n=r.map(e=>Array.from(e?.querySelectorAll(".works__veil-layer")??[]));if(r.some(e=>!e)||n.some(e=>6!==e.length))return;let u=window.matchMedia("(prefers-reduced-motion: reduce)"),d=0,p=0,f=window.scrollY,m=0,x=NaN,h=!0,v=!1;for(let[e,t]of o.entries())n[e].forEach((e,r)=>{let o=`linear-gradient(${"top"===t?"to top":"to bottom"}, transparent ${a(r)}, #000 ${a(r+1)}, #000 ${a(r+2)}, transparent ${a(r+3)})`;e.style.setProperty("mask-image",o),e.style.setProperty("-webkit-mask-image",o)});let g=e=>{.01>Math.abs(e-x)||(x=e,n.forEach(t=>{t.forEach((t,r)=>{let o=`blur(${e*2**(r-5)}px)`;t.style.setProperty("backdrop-filter",o),t.style.setProperty("-webkit-backdrop-filter",o)})}))},b=()=>{d||(d=window.requestAnimationFrame(w))},w=o=>{let a,n,c,x;if(d=0,h&&(a=window.innerHeight,v=(n=document.body.getBoundingClientRect()).bottom>0&&n.top<a,c=Math.min(a,Math.max(0,n.top)),x=Math.min(a,Math.max(0,a-n.bottom)),t.style.top=`${c}px`,t.style.bottom=`${x}px`,r[0]&&(r[0].style.top=`${-c}px`,r[0].style.height=`${i*a}px`),r[1]&&(r[1].style.bottom=`${-x}px`,r[1].style.height=`${i*a}px`),h=!1),!(e&&window.scrollY>0&&v&&!u.matches&&"visible"===document.visibilityState)){t.style.visibility="hidden",p=0,f=window.scrollY,m=0,g(l);return}t.style.visibility="visible";let w=p?(o-p)/1e3:0,y=window.scrollY,E=w>0&&w<.25?Math.abs(y-f)/w:0;m+=(E-m)*Math.min(1,12*w);let F=l+s*Math.min(1,m/2500);g(F),p=o,f=y,b()},y=()=>{h=!0,b()},E=()=>{h=!0,p=0,f=window.scrollY,m=0,b()},F=()=>b();g(l),b(),window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("resize",E,{passive:!0}),document.addEventListener("visibilitychange",F),u.addEventListener("change",F);let T=new ResizeObserver(E);return T.observe(document.body),()=>{window.cancelAnimationFrame(d),window.removeEventListener("scroll",y),window.removeEventListener("resize",E),document.removeEventListener("visibilitychange",F),u.removeEventListener("change",F),T.disconnect()}},[e,i,l,s]),(0,t.jsx)("div",{ref:c,className:"works__veil pointer-events-none invisible fixed inset-x-0 top-0 bottom-0 z-[1] overflow-hidden","aria-hidden":"true",children:o.map(e=>(0,t.jsx)("div",{className:`works__veil-zone absolute inset-x-0 ${"top"===e?"top-0":"bottom-0"}`,"data-side":e,children:Array.from({length:6},(e,r)=>(0,t.jsx)("div",{className:"works__veil-layer absolute inset-0"},r))},e))})}var i=e.i(7482),l=e.i(57688),s=e.i(74080),c=e.i(89970),u=e.i(83495);function d({className:e="",...r}){return(0,t.jsx)("div",{"aria-hidden":"true",className:`animate-pulse bg-[color-mix(in_srgb,var(--color-media-background)_82%,var(--color-foreground)_18%)] ${e}`,...r})}function p({src:e}){let[o,a]=(0,r.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{className:`pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-500 ${o?"opacity-0":"opacity-100"}`}),(0,t.jsx)(l.default,{src:e,alt:"",draggable:!1,fill:!0,sizes:"(max-width: 640px) calc(100vw - 28px), (max-width: 1023px) 48vw, 30vw",onLoad:()=>a(!0),className:`z-0 object-cover saturate-[0.82] contrast-[1.06] transition-[opacity,filter] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:saturate-100 group-hover:contrast-[1.02] motion-reduce:transition-none ${o?"opacity-100":"opacity-0"}`})]})}function f({projects:e}){let o=(0,r.useRef)(null),a=(0,r.useRef)(null),n=(0,r.useRef)([]),i=(0,r.useRef)(null),d=(0,r.useRef)(null),m=(0,r.useRef)(null),x=(0,r.useRef)(null),h=(0,r.useRef)(3),[v,g]=(0,r.useState)(6),[b,w]=(0,r.useState)(3),[y,E]=(0,r.useState)(null),[F,T]=(0,r.useState)(0),A=Array.from({length:v},(t,r)=>({...e[r%e.length],instance:r})),_=y?.images[F],R=(0,r.useCallback)((e,t)=>{x.current=t,T(0),E(e)},[]),k=(0,r.useCallback)(()=>{y&&T(e=>(e-1+y.images.length)%y.images.length)},[y]),M=(0,r.useCallback)(()=>{y&&T(e=>(e+1)%y.images.length)},[y]),P=(0,r.useCallback)(()=>{let e=i.current,t=d.current;y&&e&&t&&(m.current?.kill(),m.current=c.default.timeline({onComplete:()=>{E(null),T(0),window.requestAnimationFrame(()=>x.current?.focus())}}).to(t,{autoAlpha:0,y:24,scale:.96,duration:.3,ease:"power2.in"}).to(e,{autoAlpha:0,duration:.24,ease:"power2.inOut"},.08))},[y]);return(0,r.useLayoutEffect)(()=>{if(!y||!i.current||!d.current)return;let e=i.current,t=d.current;return m.current?.kill(),c.default.set(e,{autoAlpha:0}),c.default.set(t,{autoAlpha:0,y:32,scale:.94}),m.current=c.default.timeline().to(e,{autoAlpha:1,duration:.24,ease:"power2.out"}).to(t,{autoAlpha:1,y:0,scale:1,duration:.55,ease:"power3.out"},.04),()=>{m.current?.kill()}},[y]),(0,r.useEffect)(()=>{if(!y)return;let e=document.body.style.overflow,t=e=>{"Escape"===e.key&&P(),"ArrowLeft"===e.key&&k(),"ArrowRight"===e.key&&M()};return document.body.style.overflow="hidden",window.addEventListener("keydown",t),()=>{document.body.style.overflow=e,window.removeEventListener("keydown",t)}},[y,P,M,k]),(0,r.useLayoutEffect)(()=>{let e=window.matchMedia("(max-width: 640px)"),t=window.matchMedia("(max-width: 1023px)"),r=()=>{let r=e.matches?1:t.matches?2:3;h.current!==r&&(n.current.forEach(e=>e.kill()),n.current=[],h.current=r,w(r))};return r(),e.addEventListener("change",r),t.addEventListener("change",r),()=>{e.removeEventListener("change",r),t.removeEventListener("change",r)}},[]),(0,r.useLayoutEffect)(()=>{if(h.current!==b)return;c.default.registerPlugin(u.ScrollTrigger);let e=o.current;e&&(Array.from(e.querySelectorAll('[data-showcase-card]:not([data-animated="true"])')).forEach((e,t)=>{e.dataset.animated="true";let r=e.querySelector("[data-showcase-media]"),o=e.querySelector("[data-showcase-content]"),a="right"===e.dataset.side?1:-1,i=[{autoAlpha:0,x:0,y:100,rotate:0,scale:.95},{autoAlpha:0,x:80*a,y:20,rotate:1.5*a,scale:.97},{autoAlpha:0,x:0,y:24,rotate:0,scale:.86},{autoAlpha:0,x:0,y:-64,rotate:0,scale:.97}],l=i[t%i.length],s=c.default.timeline({defaults:{ease:"power3.out"},scrollTrigger:{trigger:e,start:"top 88%",once:!0}});s.fromTo(e,l,{autoAlpha:1,x:0,y:0,rotate:0,scale:1,duration:1.15,delay:.06*Math.min(t,2)}).fromTo(r,{clipPath:"inset(12% 12% 12% 12% round 24px)",scale:1.12},{clipPath:"inset(0% 0% 0% 0% round 24px)",scale:1,duration:1.25},"<0.08").fromTo(o,{y:28,autoAlpha:0},{y:0,autoAlpha:1,duration:.7},"<0.3"),s.scrollTrigger&&n.current.push(s.scrollTrigger)}),u.ScrollTrigger.refresh())},[b,v]),(0,r.useEffect)(()=>{let e=a.current;if(!e)return;let t=new IntersectionObserver(([e])=>{e.isIntersecting&&g(e=>e+4)},{rootMargin:"0px 0px 80% 0px",threshold:0});return t.observe(e),()=>t.disconnect()},[v]),(0,r.useEffect)(()=>()=>{n.current.forEach(e=>e.kill()),n.current=[]},[]),(0,t.jsxs)("section",{ref:o,id:"showcase",className:"theme-vt-showcase relative z-0 isolate w-full overflow-clip bg-[var(--color-page-background)] px-[clamp(24px,6vw,112px)] pt-[clamp(64px,8vw,128px)] pb-[120px] max-[1023px]:px-[clamp(20px,4vw,40px)] max-[1023px]:pt-[clamp(64px,9vw,92px)] max-[1023px]:pb-20 max-[640px]:px-3.5 max-[640px]:pt-14 max-[640px]:pb-16",children:[(0,t.jsx)("div",{className:"relative z-[1] mx-auto flex w-full max-w-[1380px] flex-row items-start gap-[clamp(18px,2.2vw,34px)] max-[1023px]:gap-[clamp(16px,3vw,26px)] max-[640px]:flex-col max-[640px]:gap-4",children:Array.from({length:b},(e,r)=>(0,t.jsx)("div",{className:"flex w-0 min-w-0 flex-1 flex-col gap-[clamp(18px,2.2vw,34px)] max-[1023px]:gap-[clamp(16px,3vw,26px)] max-[640px]:w-full max-[640px]:flex-none max-[640px]:gap-4",children:A.filter(e=>e.instance%b===r).map(e=>{let o="aspect-[3/4]"===e.bannerAspect?"text-[clamp(11.25px,2.4vw,39px)] max-[1023px]:text-[clamp(22px,3.4vw,34px)] max-[640px]:text-[clamp(40px,11vw,48px)]":"text-[clamp(9.75px,1.5vw,27px)] max-[1023px]:text-[clamp(20px,3vw,30px)] max-[640px]:text-[clamp(38px,10vw,44px)]";return(0,t.jsx)("article",{className:"group block w-full max-w-full cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[var(--color-accent-focus)] motion-reduce:translate-y-0! motion-reduce:rotate-0! motion-reduce:scale-100! motion-reduce:opacity-100!","data-showcase-card":!0,"data-side":0===r?"left":"right",role:"button",tabIndex:0,"aria-label":`Открыть галерею проекта \xab${e.title}\xbb`,onClick:t=>R({images:e.gallery,title:e.title},t.currentTarget),onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),R({images:e.gallery,title:e.title},t.currentTarget))},onDragStart:e=>e.preventDefault(),children:(0,t.jsx)("div",{className:"transition-transform duration-300 ease-out group-hover:scale-[1.02] group-active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none",children:(0,t.jsxs)("div",{"data-showcase-media":!0,className:`relative isolate w-full min-w-0 overflow-hidden rounded-[clamp(14px,1.5vw,26px)] bg-[var(--color-media-background)] shadow-[var(--shadow-card)] [transform-origin:50%_100%] motion-reduce:transform-none! motion-reduce:[clip-path:none]! max-[640px]:rounded-[18px] ${e.bannerAspect}`,children:[e.banner&&(0,t.jsx)(p,{src:e.banner}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 z-[1] bg-[image:var(--gradient-card-highlight)]"}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 z-[1] bg-[image:var(--gradient-card-shade)]"}),(0,t.jsx)("div",{"data-showcase-content":!0,className:"pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-[clamp(20px,2.5vw,40px)] max-[1023px]:p-[clamp(18px,3vw,28px)] max-[640px]:p-5 motion-reduce:transform-none! motion-reduce:opacity-100!",children:(0,t.jsx)("h3",{className:`m-0 max-w-[14ch] font-semibold leading-[0.98] tracking-[-0.065em] text-[var(--color-foreground)] [text-shadow:var(--shadow-card-title)] ${o}`,children:e.title})})]})})},e.instance)})},r))}),(0,t.jsxs)("div",{ref:a,className:"relative z-[1] flex min-h-[220px] items-center justify-center gap-3 text-[9px] font-extrabold tracking-[0.16em] text-[var(--color-foreground-40)] uppercase max-[1023px]:text-xs max-[640px]:min-h-36 max-[640px]:text-sm","aria-live":"polite",children:[(0,t.jsx)("span",{className:"size-[7px] animate-pulse rounded-full bg-[var(--color-accent-focus)] shadow-[var(--shadow-loading-dot)]"}),"Loading more work"]}),y&&_&&(0,s.createPortal)((0,t.jsxs)("div",{ref:i,className:"theme-vt-lightbox invisible fixed inset-0 z-[1000] grid cursor-zoom-out place-items-center overflow-hidden bg-[var(--color-lightbox-background)] p-[clamp(14px,3vw,48px)] opacity-0 backdrop-blur-[18px] max-[640px]:px-2.5 max-[640px]:pt-[max(64px,env(safe-area-inset-top))] max-[640px]:pb-[max(10px,env(safe-area-inset-bottom))]","data-lenis-prevent":!0,role:"dialog","aria-modal":"true","aria-label":`Галерея проекта \xab${y.title}\xbb`,onMouseDown:e=>{e.target===e.currentTarget&&P()},children:[(0,t.jsx)("div",{className:"pointer-events-none absolute inset-[-12%]","aria-hidden":"true",children:y.images.map((e,r)=>(0,t.jsx)(l.default,{src:e,alt:"",fill:!0,sizes:"120vw",className:`scale-110 object-cover blur-[64px] brightness-[0.85] saturate-[1.45] transition-opacity duration-700 ease-out motion-reduce:transition-none ${r===F?"opacity-70":"opacity-0"}`},e))}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 bg-[var(--color-lightbox-scrim)]","aria-hidden":"true"}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 bg-[image:var(--gradient-lightbox-vignette)]","aria-hidden":"true"}),(0,t.jsx)("button",{type:"button",className:"fixed top-[clamp(16px,2vw,30px)] right-[clamp(16px,2vw,30px)] z-[2] grid size-[46px] cursor-pointer place-items-center rounded-full border border-[var(--color-border-control)] bg-[var(--color-lightbox-control)] pb-1 text-[31px] leading-none font-light text-[var(--color-foreground)] backdrop-blur-[12px] transition-[background-color,border-color,transform] duration-200 hover:scale-[1.06] hover:border-[var(--color-border-control-hover)] hover:bg-[var(--color-lightbox-control-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-focus)] motion-reduce:transition-none max-[640px]:top-[max(10px,env(safe-area-inset-top))] max-[640px]:right-2.5 max-[640px]:size-[42px]","aria-label":"Закрыть изображение",onClick:P,autoFocus:!0,children:(0,t.jsx)("span",{"aria-hidden":"true",children:"×"})}),y.images.length>1&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{type:"button",className:"fixed top-1/2 left-[clamp(10px,2vw,30px)] z-[2] grid size-[46px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[var(--color-border-control)] bg-[var(--color-lightbox-control)] text-[var(--color-foreground)] backdrop-blur-[12px] transition-[background-color,border-color,transform] duration-200 hover:-translate-y-1/2 hover:scale-[1.06] hover:border-[var(--color-border-control-hover)] hover:bg-[var(--color-lightbox-control-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-focus)] motion-reduce:transition-none max-[640px]:left-4 max-[640px]:size-[42px]","aria-label":"Предыдущее изображение",onClick:k,children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"m15 18-6-6 6-6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,t.jsx)("button",{type:"button",className:"fixed top-1/2 right-[clamp(10px,2vw,30px)] z-[2] grid size-[46px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[var(--color-border-control)] bg-[var(--color-lightbox-control)] text-[var(--color-foreground)] backdrop-blur-[12px] transition-[background-color,border-color,transform] duration-200 hover:-translate-y-1/2 hover:scale-[1.06] hover:border-[var(--color-border-control-hover)] hover:bg-[var(--color-lightbox-control-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-focus)] motion-reduce:transition-none max-[640px]:right-4 max-[640px]:size-[42px]","aria-label":"Следующее изображение",onClick:M,children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,t.jsxs)("figure",{ref:d,className:"relative z-[1] m-0 grid h-[min(88dvh,1000px)] w-[min(94vw,1600px)] origin-center cursor-default grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[clamp(16px,2vw,30px)] border border-[var(--color-border-subtle)] bg-[var(--color-lightbox-panel)] shadow-[var(--shadow-lightbox-panel)] will-change-transform max-[640px]:h-full max-[640px]:w-full max-[640px]:rounded-[18px]",children:[(0,t.jsx)("div",{className:"relative min-h-0 bg-[var(--color-lightbox-media)]",children:y.images.map((e,r)=>(0,t.jsx)(l.default,{src:e,alt:r===F?`${y.title}, изображение ${r+1}`:"","aria-hidden":r!==F,draggable:!1,fill:!0,sizes:"96vw",className:`pointer-events-none object-contain transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [will-change:opacity,transform] motion-reduce:transition-none ${r===F?"z-[1] scale-100 opacity-100 blur-0":"z-0 scale-[0.985] opacity-0 blur-[2px]"}`},e))}),(0,t.jsxs)("figcaption",{className:"flex items-center justify-between gap-4 px-[clamp(18px,2vw,30px)] pt-3.5 pb-4 text-[clamp(12px,0.9vw,15px)] leading-normal font-semibold tracking-[-0.02em] text-[var(--color-foreground-80)] max-[1023px]:text-base max-[640px]:text-lg",children:[(0,t.jsx)("span",{children:y.title}),(0,t.jsxs)("span",{className:"shrink-0 tabular-nums text-[var(--color-foreground-50)]",children:[F+1," / ",y.images.length]})]})]})]}),document.body)]})}var m=e.i(29467);let x=[{id:"01",label:"Security Dashboard",title:"DoroheDoro",description:"Рабочее пространство для мониторинга угроз, алертов и режимов обнаружения аномалий.",tags:["Dashboard","Security","UX"],banner:"/showcase/hack/banner.webp",bannerAspect:"aspect-[4/3]",gallery:["/showcase/hack/1.webp","/showcase/hack/2.webp","/showcase/hack/3.webp"]},{id:"02",label:"Brand Website",title:"Metox",description:"Визуальная концепция сайта музыкального и fashion-проекта с атмосферной тёмной подачей.",tags:["Fashion","Music","Art Direction"],banner:"/showcase/Metox/banner.webp",bannerAspect:"aspect-[3/4]",gallery:["/showcase/Metox/1.webp","/showcase/Metox/2.webp","/showcase/Metox/3.webp"]},{id:"03",label:"Product Website",title:"Meshgate Website",description:"Промосайт платформы защиты веб-сервисов с интерактивной hero-сценой и продуктовой навигацией.",tags:["WebGL","Landing","Frontend"],banner:"/showcase/meshgateLanding/banner.webp",bannerAspect:"aspect-[4/3]",gallery:["/showcase/meshgateLanding/1.webp","/showcase/meshgateLanding/2.webp","/showcase/meshgateLanding/3.webp","/showcase/meshgateLanding/4.webp"]},{id:"04",label:"Product Dashboard",title:"Meshgate DNS",description:"Личный кабинет для управления DNS-зонами, записями и инфраструктурой продукта.",tags:["Dashboard","DNS","Product UX"],banner:"/showcase/MeshgateLK/banner.webp",bannerAspect:"aspect-[4/3]",gallery:["/showcase/MeshgateLK/1.jfif","/showcase/MeshgateLK/2.jfif"]},{id:"05",label:"Logistics Platform",title:"Trans Platform",description:"Интерфейс логистической платформы с профилями перевозчиков, сделками и аналитикой перевозок.",tags:["Logistics","Dashboard","B2B"],banner:"/showcase/TransPlatform/banner.webp",bannerAspect:"aspect-[4/3]",gallery:["/showcase/TransPlatform/1.webp","/showcase/TransPlatform/2.webp","/showcase/TransPlatform/3.webp","/showcase/TransPlatform/4.webp"]},{id:"06",label:"Hospitality Platform",title:"Priloji",description:"Сервис для ресторанов, объединяющий меню, Wi-Fi, отзывы и чаевые в одном NFC-сценарии.",tags:["Landing","NFC","Hospitality"],banner:"/showcase/Приложи/banner.webp",bannerAspect:"aspect-[4/3]",gallery:["/showcase/Приложи/1.jpg","/showcase/Приложи/2.jpg","/showcase/Приложи/3.jpg","/showcase/Приложи/4.jpg","/showcase/Приложи/5.jpg"]},{id:"07",label:"Documentation",title:"Meshgate Docs",description:"Техническая документация Meshgate с навигацией, поиском и пошаговыми инструкциями по установке.",tags:["Docs","Navigation","Developer UX"],banner:"/showcase/MeshgateDocs/banner.webp",bannerAspect:"aspect-[3/4]",gallery:["/showcase/MeshgateDocs/1.webp","/showcase/MeshgateDocs/2.webp","/showcase/MeshgateDocs/3.webp"]},{id:"08",label:"Game Companion",title:"STALCORE",description:"Фанатский сервис по STALCRAFT с каталогом предметов, интерактивными картами и калькулятором сборок.",tags:["Gaming","Database","Tools"],banner:"/showcase/stalcore/banner.webp",bannerAspect:"aspect-square",gallery:["/showcase/stalcore/1.webp","/showcase/stalcore/2.webp","/showcase/stalcore/3.webp","/showcase/stalcore/4.webp"]}],h="yaroslavkurinnoy@mail.ru";e.s(["LiquidWavePortfolio",0,function(){let[e,o]=(0,r.useState)(!1),a=(0,r.useRef)(null);async function l(){try{await navigator.clipboard.writeText(h)}catch{let e=document.createElement("textarea");e.value=h,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()}o(!0),a.current&&window.clearTimeout(a.current),a.current=window.setTimeout(()=>{o(!1),a.current=null},1800)}(0,r.useEffect)(()=>()=>{a.current&&window.clearTimeout(a.current)},[]);let s=(0,r.useRef)(null),c=(0,r.useRef)(null),u=(0,r.useRef)(null),d=(0,r.useRef)(null),p=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=c.current;if(!e)return;let t=e.getContext("webgl2",{alpha:!0,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!t)return;let r=`#version 300 es
      precision highp float;
      layout(location = 0) in vec2 aPosition;
      layout(location = 1) in vec2 aUv;
      out vec2 vTextureCoord;
      void main() {
        vTextureCoord = aUv;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `,o=`#version 300 es
      precision highp float;
      in vec2 vTextureCoord;
      out vec4 fragColor;
      uniform sampler2D uTexture;
      uniform float uTime;
      uniform vec2 uMousePos;
      uniform vec2 uResolution;
      float ease(float t) { return t * t; }
      vec3 hash33(vec3 p3) {
        p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
        p3 += dot(p3, p3.yxz + 19.19);
        return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
      }
      float perlinNoise(vec3 p) {
        vec3 pi = floor(p);
        vec3 pf = p - pi;
        vec3 w = pf * pf * (3.0 - 2.0 * pf);
        float n000 = dot(pf - vec3(0.0, 0.0, 0.0), hash33(pi + vec3(0.0, 0.0, 0.0)));
        float n100 = dot(pf - vec3(1.0, 0.0, 0.0), hash33(pi + vec3(1.0, 0.0, 0.0)));
        float n010 = dot(pf - vec3(0.0, 1.0, 0.0), hash33(pi + vec3(0.0, 1.0, 0.0)));
        float n110 = dot(pf - vec3(1.0, 1.0, 0.0), hash33(pi + vec3(1.0, 1.0, 0.0)));
        float n001 = dot(pf - vec3(0.0, 0.0, 1.0), hash33(pi + vec3(0.0, 0.0, 1.0)));
        float n101 = dot(pf - vec3(1.0, 0.0, 1.0), hash33(pi + vec3(1.0, 0.0, 1.0)));
        float n011 = dot(pf - vec3(0.0, 1.0, 1.0), hash33(pi + vec3(0.0, 1.0, 1.0)));
        float n111 = dot(pf - vec3(1.0, 1.0, 1.0), hash33(pi + vec3(1.0, 1.0, 1.0)));
        float nx00 = mix(n000, n100, w.x);
        float nx01 = mix(n001, n101, w.x);
        float nx10 = mix(n010, n110, w.x);
        float nx11 = mix(n011, n111, w.x);
        float nxy0 = mix(nx00, nx10, w.y);
        float nxy1 = mix(nx01, nx11, w.y);
        return mix(nxy0, nxy1, w.z);
      }
      const int MAX_ITERATIONS = 8;
      const float PI = 3.14159265359;
      vec2 distortUV(vec2 uv) {
        vec2 st = uv;
        float aspectRatio = uResolution.x / max(uResolution.y, 0.001);
        vec2 aspectVec = vec2(aspectRatio, 1.0);
        vec2 mPos = uMousePos;
        vec2 pos = mPos;
        float dist = ease(max(0.0, 1.0 - length(st * aspectVec - mPos * aspectVec) * 4.0 * 0.0));
        float sprd = (0.1580 + 0.01) / ((aspectRatio + 1.0) / 2.0);
        float amt = 0.0200 * dist;
        if (amt <= 0.0) return st;
        vec2 invPos = 1.0 - pos;
        float freq = 5.0 * sprd;
        float t = 0.1900 * 5.0 + uTime * 0.0166;
        float rad = 360.0 * (0.9990 * 6.0) * PI / 180.0;
        for (int i = 0; i < MAX_ITERATIONS; i++) {
          vec2 clampedSt = clamp(st, -1.0, 2.0);
          vec2 scaled = (clampedSt - 0.5) * aspectVec + invPos;
          float perlin = perlinNoise(vec3((scaled - 0.5) * freq, t)) - 0.5;
          float ang = perlin * rad;
          st += vec2(cos(ang), sin(ang)) * amt;
        }
        return mix(uv, clamp(st, 0.0, 1.0), 0.5100);
      }
      void main() {
        vec2 uv = distortUV(vTextureCoord);
        fragColor = texture(uTexture, uv);
      }
    `,a=`#version 300 es
      precision highp float;
      precision highp int;
      in vec2 vTextureCoord;
      out vec4 fragColor;
      uniform sampler2D uTexture;
      uniform vec2 uMousePos;
      uniform vec2 uResolution;
      uniform float uAmt;
      uniform float uDir;
      uniform float uDither;
      float ease(float t) { return t; }
      uvec2 pcg2d(uvec2 v) {
        v = v * 1664525u + 1013904223u;
        v.x += v.y * v.y * 1664525u + 1013904223u;
        v.y += v.x * v.x * 1664525u + 1013904223u;
        v ^= v >> 16;
        v.x += v.y * v.y * 1664525u + 1013904223u;
        v.y += v.x * v.x * 1664525u + 1013904223u;
        return v;
      }
      float randFibo(vec2 p) {
        uvec2 v = floatBitsToUint(p);
        v = pcg2d(v);
        uint r = v.x ^ v.y;
        return float(r) / float(0xffffffffu);
      }
      float deband() { return (randFibo(gl_FragCoord.xy) - 0.5) / 255.0; }
      const int kernelSize = 36;
      float getGaussianWeight(int index) {
        switch(index) {
          case 0: return 0.00094768; case 1: return 0.00151965; case 2: return 0.00237008; case 3: return 0.00359517;
          case 4: return 0.0053041; case 5: return 0.00761097; case 6: return 0.01062197; case 7: return 0.01441804;
          case 8: return 0.01903459; case 9: return 0.0244409; case 10: return 0.03052299; case 11: return 0.03707432;
          case 12: return 0.04379813; case 13: return 0.05032389; case 14: return 0.05623791; case 15: return 0.06112521;
          case 16: return 0.06461716; case 17: return 0.06643724; case 18: return 0.06643724; case 19: return 0.06461716;
          case 20: return 0.06112521; case 21: return 0.05623791; case 22: return 0.05032389; case 23: return 0.04379813;
          case 24: return 0.03707432; case 25: return 0.03052299; case 26: return 0.0244409; case 27: return 0.01903459;
          case 28: return 0.01441804; case 29: return 0.01062197; case 30: return 0.00761097; case 31: return 0.0053041;
          case 32: return 0.00359517; case 33: return 0.00237008; case 34: return 0.00151965; case 35: return 0.00094768;
          default: return 0.0;
        }
      }
      vec4 gaussianBlur(sampler2D tex, vec2 uv, vec2 direction) {
        vec4 color = vec4(0.0);
        vec2 pos = vec2(0.5, 0.5);
        float inner = distance(uv, pos);
        float outer = max(0.0, 1.0 - distance(uv, pos));
        float amount = (0.5000 * uAmt) * ease(mix(inner, outer, 1.3200));
        color += texture(tex, uv) * getGaussianWeight(0);
        for (int i = 0; i < kernelSize; i++) {
          float x = float(i - kernelSize / 2) * amount;
          vec2 offset = vec2(x * 0.001) * direction * vec2(0.0, 1.0);
          color += texture(tex, uv + offset) * getGaussianWeight(i);
        }
        return color;
      }
      void main() {
        vec2 uv = vTextureCoord;
        int dirInt = int(uDir);
        vec2 direction = dirInt == 1 ? vec2(0.0, uResolution.x / uResolution.y) : vec2(1.0, 0.0);
        vec4 color = gaussianBlur(uTexture, uv, direction);
        if (uDither > 0.5) color.rgb += deband();
        fragColor = color;
      }
    `,n=`#version 300 es
      precision highp float;
      in vec2 vTextureCoord;
      out vec4 fragColor;
      uniform sampler2D uTexture;
      uniform float uScroll;
      uniform vec3 uAccentFrom;
      uniform vec3 uAccentTo;
      uniform vec3 uBackgroundFrom;
      uniform vec3 uBackgroundTo;
      uniform float uThemeProgress;
      uniform float uThemeTransitionActive;
      uvec2 pcg2d(uvec2 v) {
        v = v * 1664525u + 1013904223u;
        v.x += v.y * v.y * 1664525u + 1013904223u;
        v.y += v.x * v.x * 1664525u + 1013904223u;
        v ^= v >> 16;
        v.x += v.y * v.y * 1664525u + 1013904223u;
        v.y += v.x * v.x * 1664525u + 1013904223u;
        return v;
      }
      float randFibo(vec2 p) {
        uvec2 v = pcg2d(floatBitsToUint(p));
        return float(v.x ^ v.y) / float(0xffffffffu);
      }
      float deband() { return (randFibo(gl_FragCoord.xy) - 0.5) / 255.0; }
      float sampleToneResponse(vec3 basis, float accent) {
        accent = clamp(accent, 0.0, 1.0);
        if (accent <= 0.25) {
          return mix(0.0, basis.b, accent / 0.25);
        }
        if (accent <= 0.5) {
          return mix(basis.b, basis.g, (accent - 0.25) / 0.25);
        }
        return mix(basis.g, basis.r, (accent - 0.5) / 0.5);
      }
      vec3 colorize(vec3 basis, vec3 accent) {
        return vec3(
          sampleToneResponse(basis, accent.r),
          sampleToneResponse(basis, accent.g),
          sampleToneResponse(basis, accent.b)
        );
      }
      void main() {
        vec2 uv = vTextureCoord;
        vec4 layer = texture(uTexture, uv);
        vec3 toneBasis = max(layer.rgb, vec3(0.0));
        float side = smoothstep(0.0, 0.13, uv.x) * smoothstep(1.0, 0.82, uv.x);
        float bottom = smoothstep(0.0, 0.25, uv.y);
        float intensity = mix(0.72, 1.0, side) * mix(0.76, 1.0, bottom);
        float fade = 1.0 - smoothstep(0.85, 1.55, uScroll);
        intensity *= mix(0.20, 1.0, fade);
        float alpha = layer.a * intensity;
        float themeMix = uThemeTransitionActive > 0.5
          ? clamp(uThemeProgress, 0.0, 1.0)
          : 0.0;
        vec3 color = mix(
          colorize(toneBasis, uAccentFrom),
          colorize(toneBasis, uAccentTo),
          themeMix
        );
        color += deband();
        vec3 background = mix(uBackgroundFrom, uBackgroundTo, themeMix);
        vec3 composite = color * intensity * alpha + background * (1.0 - alpha);
        fragColor = vec4(composite, 1.0);
      }
    `;function i(e,r,o){let a=t.createShader(e);if(!a)throw Error(`Unable to create ${o}`);if(t.shaderSource(a,r),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){let e=t.getShaderInfoLog(a);throw t.deleteShader(a),Error(`${o} failed:
${e}`)}return a}function l(e,o){let a=i(t.VERTEX_SHADER,r,`${o} vertex`),n=i(t.FRAGMENT_SHADER,e,`${o} fragment`),l=t.createProgram();if(!l)throw Error(`Unable to create ${o} program`);if(t.attachShader(l,a),t.attachShader(l,n),t.linkProgram(l),t.deleteShader(a),t.deleteShader(n),!t.getProgramParameter(l,t.LINK_STATUS)){let e=t.getProgramInfoLog(l);throw t.deleteProgram(l),Error(`${o} program failed:
${e}`)}return l}let s={source:l(`#version 300 es
      precision highp float;
      in vec2 vTextureCoord;
      out vec4 fragColor;
      uniform vec2 uResolution;
      uniform vec2 uMousePos;
      uniform float uTime;
      uniform float uScroll;
      #define PI 3.141592653589793
      vec3 hash33(vec3 p3) {
        p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
        p3 += dot(p3, p3.yxz + 19.19);
        return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
      }
      float perlinNoise(vec3 p) {
        vec3 pi = floor(p);
        vec3 pf = p - pi;
        vec3 w = pf * pf * (3.0 - 2.0 * pf);
        float n000 = dot(pf - vec3(0.0, 0.0, 0.0), hash33(pi + vec3(0.0, 0.0, 0.0)));
        float n100 = dot(pf - vec3(1.0, 0.0, 0.0), hash33(pi + vec3(1.0, 0.0, 0.0)));
        float n010 = dot(pf - vec3(0.0, 1.0, 0.0), hash33(pi + vec3(0.0, 1.0, 0.0)));
        float n110 = dot(pf - vec3(1.0, 1.0, 0.0), hash33(pi + vec3(1.0, 1.0, 0.0)));
        float n001 = dot(pf - vec3(0.0, 0.0, 1.0), hash33(pi + vec3(0.0, 0.0, 1.0)));
        float n101 = dot(pf - vec3(1.0, 0.0, 1.0), hash33(pi + vec3(1.0, 0.0, 1.0)));
        float n011 = dot(pf - vec3(0.0, 1.0, 1.0), hash33(pi + vec3(0.0, 1.0, 1.0)));
        float n111 = dot(pf - vec3(1.0, 1.0, 1.0), hash33(pi + vec3(1.0, 1.0, 1.0)));
        float nx00 = mix(n000, n100, w.x);
        float nx01 = mix(n001, n101, w.x);
        float nx10 = mix(n010, n110, w.x);
        float nx11 = mix(n011, n111, w.x);
        float nxy0 = mix(nx00, nx10, w.y);
        float nxy1 = mix(nx01, nx11, w.y);
        return mix(nxy0, nxy1, w.z);
      }
      float fbm(vec3 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 r = mat2(cos(0.52), -sin(0.52), sin(0.52), cos(0.52));
        for (int i = 0; i < 5; i++) {
          v += a * perlinNoise(p);
          p.xy = r * p.xy * 1.88 + 8.6;
          p.z += 0.42;
          a *= 0.52;
        }
        return v;
      }
      float ellipse(vec2 p, vec2 c, vec2 r, float feather) {
        vec2 q = (p - c) / r;
        return smoothstep(1.0 + feather, 0.0, dot(q, q));
      }
      float verticalCurtain(vec2 p, float x, float y, float w, float h, float lean, float bend) {
        float curve = x + lean * (p.y - y) + bend * sin((p.y * 2.4 + x * 3.0) * PI);
        float dx = abs(p.x - curve);
        float core = smoothstep(w, 0.0, dx);
        float top = smoothstep(y - h, y + h * 0.40, p.y);
        float bottom = smoothstep(y + h * 1.10, y - h * 0.15, p.y);
        return core * top * bottom;
      }
      float toneResponse(float value) {
        value = max(0.0, value);
        value = value / (1.0 + value * 0.24);
        return pow(value, 0.96);
      }
      void main() {
        vec2 uv = vTextureCoord;
        float aspect = uResolution.x / max(uResolution.y, 0.001);
        vec2 p = vec2(uv.x * aspect, uv.y);
        vec2 mouse = vec2(uMousePos.x * aspect, uMousePos.y);
        float t = uTime * 0.026;
        vec2 q = p;
        q.x += sin((p.y * 1.10 + t * 0.70) * PI) * 0.018;
        q.y += sin((p.x * 0.82 - t * 0.55) * PI) * 0.014;
        float n1 = fbm(vec3(q * 0.64 + vec2(-0.4, 0.1), t * 0.55));
        float n2 = fbm(vec3(q * 1.06 + vec2( 1.7,-1.2), t * 0.38));
        float n3 = fbm(vec3(q * 1.72 + vec2(-2.1, 0.8), t * 0.28));
        float topRed = ellipse(p, vec2(aspect * 0.63, 1.07), vec2(aspect * 0.82, 0.58), 1.75);
        float orangeWash = ellipse(p, vec2(aspect * 0.42, 0.92), vec2(aspect * 0.50, 0.34), 1.25);
        float rightHot = ellipse(p, vec2(aspect * 0.88, 0.86), vec2(aspect * 0.42, 0.36), 1.20);
        float magentaSink = ellipse(p, vec2(aspect * 0.82, 0.52), vec2(aspect * 0.45, 0.30), 1.20);
        float c1 = verticalCurtain(p, aspect * 0.23, 0.73, aspect * 0.030, 0.46, -0.16, 0.020);
        float c2 = verticalCurtain(p, aspect * 0.47, 0.70, aspect * 0.038, 0.50,  0.06, 0.030);
        float c3 = verticalCurtain(p, aspect * 0.64, 0.73, aspect * 0.035, 0.48, -0.08, 0.022);
        float c4 = verticalCurtain(p, aspect * 0.83, 0.76, aspect * 0.030, 0.44,  0.12, 0.018);
        float curtains = c1 + c2 + c3 + c4;
        float trench1 = verticalCurtain(p, aspect * 0.33, 0.68, aspect * 0.032, 0.52, -0.12, 0.018);
        float trench2 = verticalCurtain(p, aspect * 0.56, 0.67, aspect * 0.030, 0.54,  0.08, 0.022);
        float trench3 = verticalCurtain(p, aspect * 0.74, 0.70, aspect * 0.026, 0.48, -0.02, 0.018);
        float trenches = trench1 + trench2 + trench3;
        float softWaveA = smoothstep(0.20, 0.92, 0.5 + 0.5 * sin((q.x * 1.10 - q.y * 0.85 + n1 * 1.65 + t * 1.0) * PI));
        float softWaveB = smoothstep(0.25, 0.90, 0.5 + 0.5 * sin((q.x * 0.62 + q.y * 1.05 + n2 * 1.75 - t * 0.8) * PI));
        float fabric = mix(softWaveA, softWaveB, 0.45);
        float topMask = smoothstep(0.18, 0.98, uv.y);
        float midMask = smoothstep(0.10, 0.74, uv.y) * smoothstep(1.0, 0.22, uv.y);
        float mouseHalo = smoothstep(0.90, 0.0, length(p - mouse));
        float orangeField = (orangeWash * 0.46 + c1 * 0.32 + c2 * 0.18 + fabric * 0.035 + n1 * 0.020) * topMask;
        float scarletField = (topRed * 0.42 + curtains * 0.28 + fabric * 0.045 + mouseHalo * 0.018) * topMask;
        float redField = (topRed * 0.34 + rightHot * 0.36 + c3 * 0.22 + c4 * 0.20 + n2 * 0.030) * topMask;
        float coralField = (c2 * 0.18 + c3 * 0.18 + orangeWash * 0.12 + fabric * 0.030) * midMask;
        float magentaField = (magentaSink * 0.30 + rightHot * 0.12 + n3 * 0.048) * midMask;
        float violetField = (magentaSink * 0.12 + n3 * 0.045) * midMask;
        float bottomKill = smoothstep(0.66, 0.10, uv.y);
        float leftKill = ellipse(p, vec2(aspect * -0.04, 0.52), vec2(aspect * 0.44, 0.78), 1.04);
        float sideKill = 1.0 - (smoothstep(0.0, 0.15, uv.x) * smoothstep(1.0, 0.80, uv.x));
        float shadow = 0.0;
        shadow += bottomKill * 0.74;
        shadow += leftKill * 0.32;
        shadow += sideKill * 0.20;
        shadow += trenches * 0.38;
        shadow += (1.0 - fabric) * midMask * 0.10;
        orangeField = max(0.0, orangeField - shadow * 0.14);
        scarletField = max(0.0, scarletField - shadow * 0.20);
        redField = max(0.0, redField - shadow * 0.22);
        coralField = max(0.0, coralField - shadow * 0.14);
        magentaField = max(0.0, magentaField - shadow * 0.10);
        violetField = max(0.0, violetField - shadow * 0.08);
        orangeField = smoothstep(0.028, 0.50, orangeField);
        scarletField = smoothstep(0.030, 0.55, scarletField);
        redField = smoothstep(0.030, 0.52, redField);
        coralField = smoothstep(0.025, 0.40, coralField);
        magentaField = smoothstep(0.025, 0.34, magentaField);
        violetField = smoothstep(0.025, 0.32, violetField);
        float fade = 1.0 - smoothstep(0.08, 0.88, uScroll);
        orangeField *= fade;
        scarletField *= fade;
        redField *= fade;
        coralField *= fade;
        magentaField *= fade;
        violetField *= fade;
        float alpha = clamp(
          orangeField * 0.52 +
          scarletField * 0.42 +
          redField * 0.44 +
          coralField * 0.32 +
          magentaField * 0.22 +
          violetField * 0.14 +
          curtains * topMask * 0.12,
          0.0,
          0.85
        );
        float energy =
          orangeField * 0.52 +
          scarletField * 0.42 +
          redField * 0.44 +
          coralField * 0.32 +
          magentaField * 0.22 +
          violetField * 0.14 +
          curtains * topMask * 0.06;
        energy *= 1.0 - shadow * 0.30;
        fragColor = vec4(
          toneResponse(energy),
          toneResponse(energy * 0.5),
          toneResponse(energy * 0.25),
          alpha
        );
      }
    `,"source"),distort:l(o,"distort"),blur:l(a,"blur"),final:l(n,"final")};function u(e,r){return Object.fromEntries(r.map(r=>[r,t.getUniformLocation(e,r)]))}let d={source:u(s.source,["uResolution","uMousePos","uTime","uScroll"]),distort:u(s.distort,["uTexture","uTime","uMousePos","uResolution"]),blur:u(s.blur,["uTexture","uMousePos","uResolution","uAmt","uDir","uDither"]),final:u(s.final,["uTexture","uScroll","uAccentFrom","uAccentTo","uBackgroundFrom","uBackgroundTo","uThemeProgress","uThemeTransitionActive"])},p=t.createVertexArray(),f=t.createBuffer(),x=t.createBuffer();if(!p||!f||!x)return;t.bindVertexArray(p);let h=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),v=new Uint16Array([0,1,2,0,2,3]);function g(e,r){let o=t.createTexture(),a=t.createFramebuffer();if(!o||!a)throw Error("Framebuffer setup failed");if(t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,e,r,0,t.RGBA,t.UNSIGNED_BYTE,null),t.bindFramebuffer(t.FRAMEBUFFER,a),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE)throw Error("Framebuffer is incomplete");return{texture:o,framebuffer:a}}t.bindBuffer(t.ARRAY_BUFFER,f),t.bufferData(t.ARRAY_BUFFER,h,t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,x),t.bufferData(t.ELEMENT_ARRAY_BUFFER,v,t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,16,0),t.enableVertexAttribArray(1),t.vertexAttribPointer(1,2,t.FLOAT,!1,16,8);let b=0,w=0,y=[];function E(e,r){t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,e),t.uniform1i(r,0)}function F(){t.bindVertexArray(p),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)}let T={targetX:.58*window.innerWidth,targetY:.24*window.innerHeight,x:.58*window.innerWidth,y:.24*window.innerHeight},A=[0,0,0],_=[0,0,0],R={active:!1,progress:1,fromAccent:A,toAccent:A,fromBackground:_,toBackground:_},k=()=>{let e=(0,m.readThemeColor)("--color-hero-wave-rgb"),t=(0,m.readThemeColor)("--color-hero-background");e&&t&&(A=e,_=t,R.fromAccent=e,R.toAccent=e,R.fromBackground=t,R.toBackground=t)};k();let M=e=>{T.targetX=e.clientX,T.targetY=e.clientY,O()};window.addEventListener("pointermove",M,{passive:!0});let P=window.matchMedia("(prefers-reduced-motion: reduce)").matches,S=1e3/30,j=1/30,C=0,z=0,N=performance.now(),L=0,$=!1;function D(){return window.scrollY<1.08*window.innerHeight}function O(){C||"visible"!==document.visibilityState||$||D()&&(C=window.requestAnimationFrame(B))}function B(r){C=0;let o=r-z,a=R.active?0:S;if(a>0&&o<a)return void O();z=a>0?r-o%a:r,function(){let r=Math.min(window.devicePixelRatio||1,1.55),o=window.innerWidth<768,a=o?e.clientWidth:window.innerWidth,n=o?e.clientHeight:window.innerHeight,i=Math.max(1,Math.floor(a*r)),l=Math.max(1,Math.floor(n*r));if(i!==b||l!==w){for(let r of(b=i,w=l,e.width=b,e.height=w,y))t.deleteTexture(r.texture),t.deleteFramebuffer(r.framebuffer);y=[g(b,w),g(b,w),g(b,w)],t.viewport(0,0,b,w)}}();let n=Math.min(j,Math.max(0,(r-N)/1e3));N=r,L+=n;let i=P?1:1-Math.pow(.945,30*n);T.x+=(T.targetX-T.x)*i,T.y+=(T.targetY-T.y)*i;let l=L,c=T.x/window.innerWidth,u=1-T.y/window.innerHeight,p=window.scrollY/Math.max(1,window.innerHeight);t.disable(t.DEPTH_TEST),t.disable(t.CULL_FACE),t.disable(t.BLEND),t.viewport(0,0,b,w),t.bindFramebuffer(t.FRAMEBUFFER,y[0].framebuffer),t.useProgram(s.source),t.uniform2f(d.source.uResolution,b,w),t.uniform2f(d.source.uMousePos,c,u),t.uniform1f(d.source.uTime,l),t.uniform1f(d.source.uScroll,p),F(),t.bindFramebuffer(t.FRAMEBUFFER,y[1].framebuffer),t.useProgram(s.distort),E(y[0].texture,d.distort.uTexture),t.uniform1f(d.distort.uTime,l),t.uniform2f(d.distort.uMousePos,c,u),t.uniform2f(d.distort.uResolution,b,w),F(),t.bindFramebuffer(t.FRAMEBUFFER,y[2].framebuffer),t.useProgram(s.blur),E(y[1].texture,d.blur.uTexture),t.uniform2f(d.blur.uMousePos,c,u),t.uniform2f(d.blur.uResolution,b,w),t.uniform1f(d.blur.uAmt,5.2),t.uniform1f(d.blur.uDir,0),t.uniform1f(d.blur.uDither,0),F(),t.bindFramebuffer(t.FRAMEBUFFER,y[1].framebuffer),E(y[2].texture,d.blur.uTexture),t.uniform1f(d.blur.uAmt,5.2),t.uniform1f(d.blur.uDir,1),t.uniform1f(d.blur.uDither,0),F(),t.bindFramebuffer(t.FRAMEBUFFER,y[2].framebuffer),E(y[1].texture,d.blur.uTexture),t.uniform1f(d.blur.uAmt,6),t.uniform1f(d.blur.uDir,0),t.uniform1f(d.blur.uDither,0),F(),t.bindFramebuffer(t.FRAMEBUFFER,y[1].framebuffer),E(y[2].texture,d.blur.uTexture),t.uniform1f(d.blur.uAmt,6),t.uniform1f(d.blur.uDir,1),t.uniform1f(d.blur.uDither,0),F(),t.bindFramebuffer(t.FRAMEBUFFER,null),t.useProgram(s.final),E(y[1].texture,d.final.uTexture),t.uniform1f(d.final.uScroll,p),t.uniform3fv(d.final.uAccentFrom,R.fromAccent),t.uniform3fv(d.final.uAccentTo,R.toAccent),t.uniform3fv(d.final.uBackgroundFrom,R.fromBackground),t.uniform3fv(d.final.uBackgroundTo,R.toBackground),t.uniform1f(d.final.uThemeProgress,R.progress),t.uniform1f(d.final.uThemeTransitionActive,+!!R.active),F(),D()&&O()}let I=()=>O(),U=()=>{"visible"===document.visibilityState&&O()},q=e=>{let t=e.detail;t&&(R.progress=t.progress,R.fromAccent=t.fromAccent,R.toAccent=t.toAccent,R.fromBackground=t.fromBackground,R.toBackground=t.toBackground,"complete"===t.phase?(R.active=!1,A=t.toAccent,_=t.toBackground,R.fromAccent=A,R.toAccent=A,R.fromBackground=_,R.toBackground=_):R.active=!0,O())},W=new MutationObserver(()=>{R.active||k(),O()});return W.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),W.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme","style"]}),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),window.visualViewport?.addEventListener("resize",I,{passive:!0}),window.addEventListener(m.THEME_TRANSITION_EVENT,q),document.addEventListener("visibilitychange",U),O(),()=>{for(let e of($=!0,window.removeEventListener("pointermove",M),window.removeEventListener("scroll",I),window.removeEventListener("resize",I),window.visualViewport?.removeEventListener("resize",I),window.removeEventListener(m.THEME_TRANSITION_EVENT,q),document.removeEventListener("visibilitychange",U),W.disconnect(),C&&window.cancelAnimationFrame(C),y))t.deleteTexture(e.texture),t.deleteFramebuffer(e.framebuffer);t.deleteBuffer(f),t.deleteBuffer(x),t.deleteVertexArray(p),Object.values(s).forEach(e=>t.deleteProgram(e))}},[]),(0,r.useEffect)(()=>{let e=s.current;if(!e)return;let t=e.querySelector("#circle-gallery"),r=e.querySelector("#cg-phrase"),o=e.querySelector("#scroll-pct"),a=e.querySelector("#progressFill");if(!t||!r||!o||!a)return;let n=e.querySelector(".cg2-space");function i(){let e=window.innerWidth;n&&(n.style.position="absolute",n.style.inset="0",n.style.transformStyle="preserve-3d",n.style.pointerEvents="none"),r.style.position="absolute",r.style.left="50%",r.style.top="50%",r.style.width="max-content",r.style.maxWidth=e<=768?"92vw":"min(88vw, 1420px)",r.style.textAlign="center",r.style.transformOrigin="50% 50%",r.style.whiteSpace=e<=768?"normal":"nowrap",r.style.pointerEvents="none",r.querySelectorAll(".cg2-line").forEach(e=>{e.style.display="block",e.style.width="fit-content",e.style.maxWidth="100%",e.style.marginInline="auto",e.style.textAlign="center"})}function l(){let e=t.getBoundingClientRect(),r=t.offsetHeight-window.innerHeight;return Math.max(0,Math.min(1,-e.top/Math.max(1,r)))}function c(){let t=window.innerWidth,r=Math.min(Math.max(120,.14*t),210),o=2*r/3,a=(.34*t+500)/2,n=r/a,i=r/1,l=180*n/Math.PI/1;e.querySelectorAll(".cg2-img:not(.cg2-img-original)").forEach(e=>{e.remove()}),e.querySelectorAll(".cg2-img-original").forEach(e=>{let t=e.getAttribute("src");if(!t)return;e.style.display="none";let n=document.createElement("div");n.className="cg2-img",n.style.position="absolute",n.style.left="50%",n.style.top="50%",n.style.width=`${r.toFixed(1)}px`,n.style.height=`${o.toFixed(1)}px`,n.style.marginLeft=`${(-r/2).toFixed(1)}px`,n.style.marginTop=`${(-o/2).toFixed(1)}px`,n.style.transformStyle="preserve-3d",n.style.willChange="transform, opacity",n.style.pointerEvents="none";for(let e=0;e<1;e++){let s=document.createElement("div");s.className="cg2-slice";let c=i+1.5;s.style.position="absolute",s.style.top="0",s.style.height="100%",s.style.width=`${c.toFixed(1)}px`,s.style.left="50%",s.style.marginLeft=`${(-c/2).toFixed(1)}px`,s.style.backgroundImage=`url(${t})`,s.style.backgroundSize=`${r.toFixed(1)}px ${o.toFixed(1)}px`,s.style.backgroundPosition=`${(-e*i).toFixed(1)}px 0`,s.style.backgroundRepeat="no-repeat",s.style.backfaceVisibility="hidden",s.style.transformOrigin=`50% 50% ${(-a).toFixed(1)}px`;let u=(e-0)*l;s.style.transform=`rotateY(${u.toFixed(2)}deg)`,n.appendChild(s)}e.parentNode?.insertBefore(n,e.nextSibling)})}!function(e){if("true"===e.dataset.wrapped)return;let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),r=[];for(;t.nextNode();)r.push(t.currentNode);r.forEach(e=>{let t=e.textContent?.split(/(\s+)/)??[],r=document.createDocumentFragment();t.forEach(e=>{if(/^\s+$/.test(e))r.appendChild(document.createTextNode(e));else if(e){let t=document.createElement("span");t.className="word",t.textContent=e,r.appendChild(t)}}),e.parentNode?.replaceChild(r,e)}),e.dataset.wrapped="true"}(r),i(),c();let u=Array.from(e.querySelectorAll(".cg2-img:not(.cg2-img-original)")),d=Array.from(e.querySelectorAll("#cg-phrase .word"));function p(e){let t,n=window.innerWidth,i=Math.min(Math.max(.28*n,360),500),l=Math.min(Math.max(.3*n,260),620),s=n<=768?80:170,c=Math.PI/2,p=Math.min(.72*n,980),f=(t=window.innerWidth)<=768?0:t<=1180?-12:-24,m=1+.09*(u.length-1);if(u.forEach((t,r)=>{let o=e*m-.09*r;if(o<=0||o>=1){t.style.opacity="0";return}let a=1;o<.06?a=o/.06:o>.94&&(a=(1-o)/.06);let n=function(e){if(e<=.12){let t=e/.12;return{x:-p*(1-t),y:s,z:i*t,rotY:0}}if(e<=.88){let t=(e-.12)/.76,r=c-t*Math.PI*2,o=Math.cos(r)*l,a=Math.sin(r)*i;return{x:o,y:a/i*s,z:a,rotY:t*Math.PI*2}}let t=(e-.88)/.12;return{x:p*t,y:s,z:i*(1-t),rotY:2*Math.PI}}(o),u=(180*n.rotY/Math.PI).toFixed(1);t.style.transform=`translate3d(${(n.x+f).toFixed(1)}px,${n.y.toFixed(1)}px,${n.z.toFixed(1)}px) rotateY(${u}deg)`,t.style.opacity=a.toFixed(3),t.style.zIndex=String(Math.round(n.z+600))}),e<.25||e>.75)r.style.opacity="0";else{let t=(e-.25)/.5;r.style.transform=`translate(-50%, -50%) translate3d(${f}px, ${(200*(.5-t)).toFixed(1)}px, 0)`,d.forEach((e,r)=>{if(t<.4){let o=Math.max(0,Math.min(1,(t/.4*(d.length+4)-r)/3));e.style.opacity=o.toFixed(3),e.style.filter=`blur(${(8*(1-o)).toFixed(1)}px)`}else e.style.opacity="1",e.style.filter="blur(0px)"});let o=1;t<.1?o=t/.1:t>.75&&(o=(1-t)/.25),r.style.opacity=o.toFixed(3)}o.textContent=`(${Math.round(100*e)})`,a.style.height=`${(100*e).toFixed(2)}%`}let f=l(),m=f,x=0;function h(){x=0,m=l(),p(f+=(m-f)*.16),Math.abs(m-f)>4e-4&&(x=window.requestAnimationFrame(h))}function v(){x||(x=window.requestAnimationFrame(h))}let g=()=>{i(),c(),u=Array.from(e.querySelectorAll(".cg2-img:not(.cg2-img-original)")),d=Array.from(e.querySelectorAll("#cg-phrase .word")),p(l()),v()};return window.addEventListener("scroll",v,{passive:!0}),window.addEventListener("resize",g,{passive:!0}),p(f),v(),()=>{window.removeEventListener("scroll",v),window.removeEventListener("resize",g),x&&window.cancelAnimationFrame(x)}},[]),(0,r.useEffect)(()=>{let e=s.current,t=u.current,r=d.current,o=p.current;if(!e||!t||!r||!o)return;let a=Array.from(e.querySelectorAll("[data-path-point]"));if(0===a.length)return;let n=(e,t=0,r=1)=>Math.min(r,Math.max(t,e)),i=0,l=[],c=!1,f=!1,m=0,x=window.innerHeight,h=null;function v(e){let r=t.getBoundingClientRect(),o=e.getBoundingClientRect();return{x:o.left-r.left+o.width/2,y:o.top-r.top+o.height/2}}function g(){let e=function(e){if(!l.length||i<=0||e<=l[0].y)return 0;if(e>=l[l.length-1].y)return i;let t=l[0];for(let r=1;r<l.length;r++){let o=l[r];if(o.y>=e){let r=o.y-t.y,a=0===r?0:n((e-t.y)/r);return t.length+(o.length-t.length)*a}t=o}return i}(window.scrollY+.58*x-m),t=Math.max(0,i-e);null!==h&&.18>Math.abs(t-h)||(h=t,o.style.strokeDashoffset=`${t}`)}function b(){c||(c=!0,window.requestAnimationFrame(()=>{c=!1,g()}))}function w(){f=!1,x=window.innerHeight,m=t.getBoundingClientRect().top+window.scrollY;let e=t.clientWidth,n=t.clientHeight,s=a.map(v),c=s[0],u=s[s.length-1];r.setAttribute("viewBox",`0 0 ${e} ${n}`);let d={x:-Math.max(280,.2*e),y:Math.max(80,c.y-.42*window.innerHeight)},p={x:e+Math.max(420,.34*e),y:Math.min(n-90,u.y+.48*window.innerHeight)};o.setAttribute("d",function(e,t=.82){if(e.length<2)return"";let r=`M ${e[0].x.toFixed(1)} ${e[0].y.toFixed(1)}`;for(let o=0;o<e.length-1;o++){let a=e[Math.max(0,o-1)],n=e[o],i=e[o+1],l=e[Math.min(e.length-1,o+2)],s={x:n.x+(i.x-a.x)/6*t,y:n.y+(i.y-a.y)/6*t},c={x:i.x-(l.x-n.x)/6*t,y:i.y-(l.y-n.y)/6*t};r+=` C ${s.x.toFixed(1)} ${s.y.toFixed(1)}, ${c.x.toFixed(1)} ${c.y.toFixed(1)}, ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}return r}([d,...s,p])),h=i=o.getTotalLength(),o.style.strokeDasharray=`${i}`,o.style.strokeDashoffset=`${i}`,l=[];for(let e=0;e<=1200;e++){let t=i*e/1200,r=o.getPointAtLength(t);l.push({x:r.x,y:r.y,length:t})}g()}function y(){f||(f=!0,window.requestAnimationFrame(w))}let E=new ResizeObserver(y);a.forEach(e=>E.observe(e));let F=()=>y();return window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",F,{passive:!0}),window.addEventListener("load",y,{once:!0}),document.fonts?.ready&&document.fonts.ready.then(y),w(),()=>{E.disconnect(),window.removeEventListener("scroll",b),window.removeEventListener("resize",F)}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"pointer-events-none fixed inset-0 z-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay","aria-hidden":"true"}),(0,t.jsxs)("main",{ref:s,className:"relative z-0",children:[(0,t.jsxs)("section",{id:"top",className:"hero relative block! min-h-svh overflow-hidden bg-[var(--color-hero-background)] p-0!",children:[(0,t.jsx)("canvas",{ref:c,id:"liquid-gradient",className:"pointer-events-none absolute inset-0 z-0 block h-full w-full max-[767px]:inset-auto max-[767px]:top-0 max-[767px]:left-1/2 max-[767px]:h-full max-[767px]:w-[max(100%,125svh)] max-[767px]:-translate-x-1/2","aria-hidden":"true"}),(0,t.jsx)("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[clamp(140px,22vh,240px)]",style:{background:"linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--color-page-background) 35%, transparent) 45%, var(--color-page-background) 100%)"}}),(0,t.jsxs)("header",{className:"theme-vt-header fixed inset-x-0 top-0 z-[100] flex items-start justify-between gap-4 pt-[max(clamp(24px,3.3vw,58px),calc(env(safe-area-inset-top)_+_10px))] pr-[max(clamp(22px,3.3vw,58px),calc(env(safe-area-inset-right)_+_10px))] pb-[clamp(24px,3.3vw,58px)] pl-[max(clamp(22px,3.3vw,58px),calc(env(safe-area-inset-left)_+_10px))] max-[640px]:pt-[max(18px,calc(env(safe-area-inset-top)_+_10px))] max-[640px]:pr-[max(18px,calc(env(safe-area-inset-right)_+_10px))] max-[640px]:pb-[18px] max-[640px]:pl-[max(18px,calc(env(safe-area-inset-left)_+_10px))] max-[420px]:pt-[max(14px,calc(env(safe-area-inset-top)_+_10px))] max-[420px]:pr-[max(14px,calc(env(safe-area-inset-right)_+_10px))] max-[420px]:pb-[14px] max-[420px]:pl-[max(14px,calc(env(safe-area-inset-left)_+_10px))]",children:[(0,t.jsxs)("a",{href:"#top","aria-label":"izolitra — back to top",onClick:function(e){e.preventDefault(),(0,i.scrollToTop)()},className:"relative z-[1] inline-flex items-start whitespace-nowrap text-[23px] font-normal leading-[1.3] tracking-[0.015em] text-[var(--color-foreground-75)] [font-family:Arial,Helvetica,sans-serif] no-underline [-webkit-tap-highlight-color:transparent] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[var(--color-brand-focus)]",children:[(0,t.jsx)("span",{children:"izolitra"}),(0,t.jsx)("span",{className:"text-[var(--color-accent)]",children:"."})]}),(0,t.jsxs)("nav",{"aria-label":"Contact links",className:"relative z-[1] ml-auto grid w-max grid-cols-[max-content] justify-items-end gap-y-[2px] text-right",children:[(0,t.jsx)("a",{href:"https://t.me/izolitra",target:"_blank",rel:"noopener noreferrer","aria-label":"Telegram: @izolitra",className:"hero-contact-link block w-max justify-self-end p-0 text-right text-[23px] font-normal leading-[1.3] tracking-[-0.04em] text-[var(--color-foreground-75)] [font-family:Arial,Helvetica,sans-serif] transition-colors duration-300 hover:text-[var(--color-foreground)] focus-visible:text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]",children:(0,t.jsx)("span",{className:"hero-contact-word relative inline-block",children:"Telegram"})}),(0,t.jsxs)("button",{type:"button",onClick:l,"aria-label":e?`Copied ${h}`:`Copy email ${h}`,className:"hero-contact-link block w-max cursor-pointer justify-self-end p-0 text-right text-[23px] font-normal leading-[1.3] tracking-[-0.04em] text-[var(--color-foreground-75)] [font-family:Arial,Helvetica,sans-serif] transition-colors duration-300 hover:text-[var(--color-foreground)] focus-visible:text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]",children:[(0,t.jsx)("span",{className:"hero-contact-word relative inline-block",children:"Email"}),(0,t.jsx)("span",{role:"status",className:"sr-only",children:e?"Email copied":""})]})]})]}),(0,t.jsx)("style",{children:`
            .hero-contact-word::after { content: ""; position: absolute; right: 0; bottom: 0; left: 0; height: 1px; background: var(--color-accent); transform: scaleX(0); transform-origin: left center; transition: transform 300ms ease; pointer-events: none; }
            .hero-contact-link:hover .hero-contact-word::after,
            .hero-contact-link:focus-visible .hero-contact-word::after { transform: scaleX(1); }
            @media (prefers-reduced-motion: reduce) { .hero-contact-word::after { transition: none; } }
          `}),(0,t.jsxs)("div",{className:"theme-vt-hero-copy pointer-events-none absolute inset-0 z-20 h-svh w-full text-left hero-short:relative hero-short:inset-auto hero-short:flex hero-short:h-auto hero-short:min-h-svh hero-short:flex-col hero-short:px-[6%] hero-short:pt-[max(110px,calc(env(safe-area-inset-top)_+_96px))] hero-short:pb-12",children:[(0,t.jsxs)("h1",{className:"absolute inset-0 m-0 font-bold leading-[0.96] select-none max-[640px]:text-center hero-short:relative hero-short:inset-auto hero-short:mt-5 hero-short:flex hero-short:w-full hero-short:flex-col hero-short:items-center",children:[(0,t.jsx)("span",{className:"absolute top-[23%] left-[8.1%] block whitespace-nowrap text-[clamp(94px,17.25vw,253px)] font-semibold leading-[1.09] text-[var(--color-heading)] min-[641px]:max-[1023px]:text-[clamp(129px,17.25vw,184px)] max-[640px]:top-[31%] max-[640px]:left-1/2 max-[640px]:-translate-x-1/2 max-[640px]:text-[clamp(56px,19vw,114px)] hero-short:relative hero-short:top-auto hero-short:left-auto hero-short:translate-x-0 hero-short:text-[clamp(56px,18vw,110px)]",children:"Software"}),(0,t.jsx)("em",{className:"absolute top-[47.5%] right-[5.1%] block whitespace-nowrap px-[0.08em] pb-[0.10em] text-[clamp(90px,16.1vw,242px)] font-semibold italic leading-[1.05] tracking-[-0.062em] text-[var(--color-accent)] [font-family:var(--font-playfair)] min-[641px]:max-[1023px]:text-[clamp(123px,16.1vw,173px)] max-[640px]:top-[calc(31%_+_21vw)] max-[640px]:right-auto max-[640px]:left-1/2 max-[640px]:-translate-x-1/2 max-[640px]:text-[clamp(72px,21vw,129px)] hero-short:relative hero-short:top-auto hero-short:right-auto hero-short:left-auto hero-short:mt-[-0.12em] hero-short:self-center hero-short:translate-x-0 hero-short:text-[clamp(58px,16vw,100px)]",children:"developer."})]}),(0,t.jsx)("p",{className:"absolute bottom-[10%] left-[8.5%] m-0 max-w-[min(300px,82vw)] text-[23px] font-normal leading-[1.3] tracking-[-0.04em] text-[var(--color-foreground-75)] [font-family:Arial,Helvetica,sans-serif] [text-wrap:balance] max-[640px]:top-[calc(31%_+_48vw)] max-[640px]:bottom-auto max-[640px]:left-1/2 max-[640px]:w-[min(300px,82vw)] max-[640px]:-translate-x-1/2 max-[640px]:text-center hero-short:relative hero-short:top-auto hero-short:bottom-auto hero-short:left-auto hero-short:mt-4 hero-short:w-[min(300px,82vw)] hero-short:self-center hero-short:translate-x-0 hero-short:text-center",children:"I build web applications from interfaces to integrations and deployment."})]})]}),(0,t.jsx)(f,{projects:x}),(0,t.jsx)(n,{})]})]})}],98935)}]);
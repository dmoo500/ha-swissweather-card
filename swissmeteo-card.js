function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,n)},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:d,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:g,getPrototypeOf:u}=Object,f=globalThis,v=f.trustedTypes,m=v?v.emptyScript:"",_=f.reactiveElementPolyfillSupport,y=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!d(t,e),b={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...p(t),...g(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),n=i.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??$)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,_?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.1");const A=globalThis,S=A.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+k,M=`<${O}>`,P=document,z=()=>P.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,W="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,H=/>/g,D=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,B=/"/g,L=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,K=P.createTreeWalker(P,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,l=0;for(;l<i.length&&(r.lastIndex=l,c=r.exec(i),null!==c);)l=r.lastIndex,r===R?"!--"===c[1]?r=T:void 0!==c[1]?r=H:void 0!==c[2]?(L.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=D):void 0!==c[3]&&(r=D):r===D?">"===c[0]?(r=n??R,d=-1):void 0===c[1]?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?D:'"'===c[3]?B:j):r===B||r===j?r=D:r===T||r===H?r=R:(r=D,n=void 0);const h=r===D&&t[e+1].startsWith("/>")?" ":"";o+=r===R?i+M:d>=0?(s.push(a),i.slice(0,d)+C+i.slice(d)+k+h):i+k+(-2===d?e:h)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[c,d]=Z(t,e);if(this.el=J.createElement(c,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=d[o++],i=s.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],z()),K.nextNode(),a.push({type:2,index:++n});s.append(t[e],z())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===V)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=U(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);K.currentNode=s;let n=K.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new nt(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=K.nextNode(),o++)}return K.currentNode=P,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),U(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new J(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Q(this.O(z()),this.O(z()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Y(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Y(this,s[i+r],e,r),a===V&&(a=this._$AH[r]),o||=!U(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??q)===V)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(J,Q),(A.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Q(e.insertBefore(z(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const ct=rt.litElementPolyfillSupport;ct?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.1");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:$},ht=(t=lt,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function gt(t){return pt({...t,state:!0,attribute:!1})}console.log("🎯 About to apply @customElement decorator to SwissMeteoCard"),console.log("🎯 customElements registry available:",!!customElements);let ut=class extends at{hass;config;constructor(){super(),console.log("🔧 SwissMeteoCard constructor called"),console.log("🔧 LitElement base:",at),console.log("🔧 customElement decorator applied")}connectedCallback(){super.connectedCallback(),console.log("🔌 SwissMeteoCard connected to DOM"),console.log("🔌 Custom element defined:",customElements.get("swissmeteo-card"))}static get styles(){return a`
      :host {
        display: block;
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: #333;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        border-bottom: 2px solid #dc143c;
        padding-bottom: 15px;
      }

      .location {
        font-size: 24px;
        font-weight: bold;
        color: #dc143c;
      }

      .meteoswiss-logo {
        font-size: 14px;
        color: #666;
        font-weight: 500;
      }

      .warning-section {
        background: linear-gradient(90deg, #fff3cd 0%, #fcf8e3 100%);
        border: 1px solid #ffeaa7;
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .warning-section.danger {
        background: linear-gradient(90deg, #f8d7da 0%, #f5c6cb 100%);
        border-color: #f1aeb5;
      }

      .warning-section.severe {
        background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%);
        border-color: #e17055;
      }

      .warning-icon {
        font-size: 24px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.8);
      }

      .current-weather {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 20px;
        margin-bottom: 25px;
      }

      .current-temp {
        font-size: 48px;
        font-weight: 300;
        color: #2c3e50;
        line-height: 1;
      }

      .current-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 8px;
      }

      .weather-icon {
        font-size: 64px;
        margin-bottom: 10px;
      }

      .condition {
        font-size: 16px;
        color: #7f8c8d;
        text-align: right;
      }

      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 15px;
        margin-bottom: 25px;
      }

      .metric-card {
        background: rgba(255, 255, 255, 0.7);
        border-radius: 12px;
        padding: 15px;
        text-align: center;
        border: 1px solid rgba(220, 20, 60, 0.1);
        transition: transform 0.2s ease;
      }

      .metric-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .metric-icon {
        font-size: 24px;
        margin-bottom: 8px;
        color: #dc143c;
      }

      .metric-value {
        font-size: 20px;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 4px;
      }

      .metric-label {
        font-size: 12px;
        color: #7f8c8d;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .forecast-section {
        margin-top: 20px;
      }

      .section-title {
        font-size: 18px;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .forecast-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
      }

      .forecast-day {
        background: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
        padding: 12px 8px;
        text-align: center;
        border: 1px solid rgba(220, 20, 60, 0.1);
      }

      .forecast-date {
        font-size: 12px;
        color: #7f8c8d;
        margin-bottom: 8px;
      }

      .forecast-icon {
        font-size: 24px;
        margin: 8px 0;
      }

      .forecast-temps {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      }

      .temp-high {
        font-weight: bold;
        color: #e74c3c;
      }

      .temp-low {
        color: #7f8c8d;
      }

      .precipitation-chart {
        background: rgba(255, 255, 255, 0.6);
        border-radius: 12px;
        padding: 15px;
        margin-top: 15px;
        border: 1px solid rgba(220, 20, 60, 0.1);
      }

      .chart-bars {
        display: flex;
        align-items: end;
        height: 60px;
        gap: 2px;
        margin-bottom: 10px;
      }

      .chart-bar {
        flex: 1;
        background: linear-gradient(to top, #3498db, #85c5e5);
        border-radius: 2px 2px 0 0;
        min-height: 2px;
        position: relative;
      }

      .chart-labels {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #7f8c8d;
      }

      .wind-compass {
        width: 80px;
        height: 80px;
        border: 2px solid #dc143c;
        border-radius: 50%;
        position: relative;
        margin: 0 auto 10px;
        background: radial-gradient(circle, #ffffff 30%, #f8f9fa 100%);
      }

      .wind-arrow {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 30px;
        background: #dc143c;
        transform-origin: bottom center;
        transform: translate(-50%, -100%);
      }

      .wind-arrow::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 8px solid #dc143c;
        transform: translateX(-50%);
      }

      @media (max-width: 768px) {
        :host {
          padding: 15px;
        }
        
        .current-weather {
          grid-template-columns: 1fr;
          text-align: center;
        }
        
        .current-details {
          align-items: center;
        }
        
        .metrics-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .forecast-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config=t}getCardSize(){return 8}static async getConfigElement(){return await Promise.resolve().then(function(){return _t}),document.createElement("swissmeteo-card-editor")}static getStubConfig(){return{type:"custom:swissmeteo-card",entity:"",location:"Schweiz",show_forecast:!0,show_precipitation:!0,show_warnings:!0,compact_mode:!1}}_getEntityState(t){return this.hass?.states[t]}_getWeatherIcon(t){return{"clear-night":"🌙",cloudy:"☁️",fog:"🌫️",hail:"🧊",lightning:"⛈️","lightning-rainy":"⛈️",partlycloudy:"⛅",pouring:"🌧️",rainy:"🌦️",snowy:"🌨️","snowy-rainy":"🌨️",sunny:"☀️",windy:"💨","windy-variant":"💨",exceptional:"🌪️"}[t]||"☀️"}_getWarningLevel(t){if(!t||0===t.length)return"none";const e=Math.max(...t.map(t=>t.level||0));return e>=4?"danger":e>=3?"severe":e>=2?"warning":"info"}_formatWindDirection(t){return["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round(t/22.5)%16]}render(){if(!this.hass||!this.config)return I``;const t=this._getEntityState(this.config.entity);if(!t)return I`<div>Entity not found: ${this.config.entity}</div>`;const e=this.config.location||"Schweiz",i=t.attributes.temperature,s=t.state,n=t.attributes.forecast||[],o=this.config.wind_entity?this._getEntityState(this.config.wind_entity):null,r=this.config.wind_direction_entity?this._getEntityState(this.config.wind_direction_entity):null,a=this.config.sunshine_entity?this._getEntityState(this.config.sunshine_entity):null,c=this.config.precipitation_entity?this._getEntityState(this.config.precipitation_entity):null,d=this.config.warning_entity?this._getEntityState(this.config.warning_entity):null,l=o?parseFloat(o.state):t.attributes.wind_speed||0,h=r?parseFloat(r.state):t.attributes.wind_bearing||0,p=t.attributes.humidity||0,g=t.attributes.pressure||0,u=t.attributes.visibility||0,f=d?.attributes?.warnings&&Array.isArray(d.attributes.warnings)?d.attributes.warnings:[],v=this._getWarningLevel(f);return I`
      <div class="header">
        <div class="location">${e}</div>
        <div class="meteoswiss-logo">MeteoSchweiz</div>
      </div>

      ${f.length>0?I`
        <div class="warning-section ${v}">
          <div class="warning-icon">⚠️</div>
          <div>
            <strong>Wetterwarnung aktiv</strong><br>
            ${f[0]?.description||"Aktuelle Wetterwarnungen für Ihre Region"}
          </div>
        </div>
      `:""}

      <div class="current-weather">
        <div>
          <div class="current-temp">${i}°</div>
          <div class="condition">${this._translateCondition(s)}</div>
        </div>
        <div class="current-details">
          <div class="weather-icon">${this._getWeatherIcon(s)}</div>
        </div>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon">💨</div>
          <div class="metric-value">${Math.round(l)} km/h</div>
          <div class="metric-label">Wind</div>
        </div>
        
        <div class="metric-card">
          <div class="wind-compass">
            <div class="wind-arrow" style="transform: translate(-50%, -100%) rotate(${h}deg);"></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(h)}</div>
          <div class="metric-label">Richtung</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">💧</div>
          <div class="metric-value">${p}%</div>
          <div class="metric-label">Luftfeuchtigkeit</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">🌡️</div>
          <div class="metric-value">${g} hPa</div>
          <div class="metric-label">Luftdruck</div>
        </div>

        ${a?I`
          <div class="metric-card">
            <div class="metric-icon">☀️</div>
            <div class="metric-value">${parseFloat(a.state).toFixed(1)}h</div>
            <div class="metric-label">Sonnenschein</div>
          </div>
        `:""}

        ${u>0?I`
          <div class="metric-card">
            <div class="metric-icon">👁️</div>
            <div class="metric-value">${u} km</div>
            <div class="metric-label">Sicht</div>
          </div>
        `:""}
      </div>

      ${c&&!1!==this.config.show_precipitation?I`
        <div class="precipitation-chart">
          <div class="section-title">
            <span>🌧️</span>
            Niederschlag (nächste 6h)
          </div>
          <div class="chart-bars">
            ${Array.from({length:6},(t,e)=>I`
              <div class="chart-bar" style="height: ${100*Math.random()}%"></div>
            `)}
          </div>
          <div class="chart-labels">
            <span>Jetzt</span>
            <span>1h</span>
            <span>2h</span>
            <span>3h</span>
            <span>4h</span>
            <span>5h</span>
          </div>
        </div>
      `:""}

      ${!1!==this.config.show_forecast&&n.length>0?I`
        <div class="forecast-section">
          <div class="section-title">
            <span>📅</span>
            7-Tage-Prognose
          </div>
          <div class="forecast-grid">
            ${n.slice(0,7).map(t=>I`
              <div class="forecast-day">
                <div class="forecast-date">${this._formatDate(t.datetime)}</div>
                <div class="forecast-icon">${this._getWeatherIcon(t.condition)}</div>
                <div class="forecast-temps">
                  <span class="temp-high">${Math.round(t.temperature)}°</span>
                  <span class="temp-low">${Math.round(t.templow||t.temperature-5)}°</span>
                </div>
              </div>
            `)}
          </div>
        </div>
      `:""}
    `}_translateCondition(t){return{"clear-night":"Klar",cloudy:"Bewölkt",fog:"Nebel",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",partlycloudy:"Teilweise bewölkt",pouring:"Starker Regen",rainy:"Regen",snowy:"Schnee","snowy-rainy":"Schneeregen",sunny:"Sonnig",windy:"Windig","windy-variant":"Böig",exceptional:"Sturm"}[t]||t}_formatDate(t){return["So","Mo","Di","Mi","Do","Fr","Sa"][new Date(t).getDay()]}};var ft,vt;t([pt({attribute:!1}),e("design:type",Object)],ut.prototype,"hass",void 0),t([pt({attribute:!1}),e("design:type",Object)],ut.prototype,"config",void 0),ut=t([dt("swissmeteo-card"),e("design:paramtypes",[])],ut),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ft||(ft={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(vt||(vt={}));let mt=class extends at{hass;lovelace;_config;_toggle;setConfig(t){this._config={...t}}get _entity(){return this._config?.entity||""}get _location(){return this._config?.location||""}get _wind_entity(){return this._config?.wind_entity||""}get _wind_direction_entity(){return this._config?.wind_direction_entity||""}get _sunshine_entity(){return this._config?.sunshine_entity||""}get _precipitation_entity(){return this._config?.precipitation_entity||""}get _warning_entity(){return this._config?.warning_entity||""}get _show_forecast(){return!1!==this._config?.show_forecast}get _show_precipitation(){return!1!==this._config?.show_precipitation}get _show_warnings(){return!1!==this._config?.show_warnings}get _compact_mode(){return!0===this._config?.compact_mode}static get styles(){return a`
      .card-config {
        padding: 16px;
      }

      .section {
        margin-bottom: 24px;
      }

      .section-header {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .section-description {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-bottom: 16px;
        line-height: 1.4;
      }

      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        min-height: 40px;
      }

      .option-label {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .option-name {
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .option-description {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      ha-entity-picker,
      ha-textfield {
        width: 100%;
        margin-bottom: 8px;
      }

      ha-switch {
        margin-left: 8px;
      }

      .required {
        color: var(--error-color);
      }

      .preview {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 16px;
        margin-top: 16px;
      }

      .preview-title {
        font-weight: 500;
        margin-bottom: 8px;
        color: var(--primary-text-color);
      }

      .preview-config {
        font-family: monospace;
        font-size: 12px;
        color: var(--secondary-text-color);
        background: var(--code-editor-background-color, #f8f8f8);
        padding: 12px;
        border-radius: 4px;
        overflow-x: auto;
        white-space: pre-wrap;
      }

      .entity-group {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }

      .entity-group-title {
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .optional-badge {
        background: var(--info-color);
        color: white;
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: bold;
      }

      .warning {
        background: var(--warning-color);
        color: var(--text-primary-color);
        padding: 12px;
        border-radius: 4px;
        margin-bottom: 16px;
        font-size: 14px;
      }
    `}render(){return this.hass?I`
      <div class="card-config">
        <!-- Main Configuration -->
        <div class="section">
          <div class="section-header">
            🌦️ Grundkonfiguration
          </div>
          <div class="section-description">
            Basis-Einstellungen für die SwissMeteo Card. Die Wetter-Entity ist erforderlich.
          </div>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Wetter Entity <span class="required">*</span></div>
              <div class="option-description">Home Assistant Wetter-Integration (z.B. OpenWeatherMap)</div>
            </div>
          </div>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._entity}
            .configValue=${"entity"}
            .includeDomains=${["weather"]}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Standort</div>
              <div class="option-description">Angezeigter Ortsname (optional)</div>
            </div>
          </div>
          <ha-textfield
            .value=${this._location}
            .configValue=${"location"}
            @input=${this._valueChanged}
            placeholder="z.B. Zürich"
          ></ha-textfield>
        </div>

        <!-- Additional Sensors -->
        <div class="section">
          <div class="section-header">
            📊 Zusätzliche Sensoren
            <span class="optional-badge">Optional</span>
          </div>
          <div class="section-description">
            Erweiterte Wetterdaten für detailliertere Anzeigen. Alle Felder sind optional.
          </div>

          <div class="entity-group">
            <div class="entity-group-title">💨 Wind</div>
            
            <div class="option">
              <div class="option-label">
                <div class="option-name">Windgeschwindigkeit</div>
                <div class="option-description">Sensor für Windgeschwindigkeit in km/h</div>
              </div>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._wind_entity}
              .configValue=${"wind_entity"}
              .includeDomains=${["sensor"]}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>

            <div class="option">
              <div class="option-label">
                <div class="option-name">Windrichtung</div>
                <div class="option-description">Sensor für Windrichtung in Grad (0-360)</div>
              </div>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._wind_direction_entity}
              .configValue=${"wind_direction_entity"}
              .includeDomains=${["sensor"]}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <div class="entity-group">
            <div class="entity-group-title">☀️ Weitere Wetterdaten</div>
            
            <div class="option">
              <div class="option-label">
                <div class="option-name">Sonnenscheindauer</div>
                <div class="option-description">Sensor für Sonnenscheindauer in Stunden</div>
              </div>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._sunshine_entity}
              .configValue=${"sunshine_entity"}
              .includeDomains=${["sensor"]}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>

            <div class="option">
              <div class="option-label">
                <div class="option-name">Niederschlagsprognose</div>
                <div class="option-description">Sensor für Niederschlagsdaten</div>
              </div>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._precipitation_entity}
              .configValue=${"precipitation_entity"}
              .includeDomains=${["sensor"]}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>

            <div class="option">
              <div class="option-label">
                <div class="option-name">Wetterwarnungen</div>
                <div class="option-description">Sensor für Schweizer Wetterwarnungen</div>
              </div>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._warning_entity}
              .configValue=${"warning_entity"}
              .includeDomains=${["sensor"]}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>
          </div>
        </div>

        <!-- Display Options -->
        <div class="section">
          <div class="section-header">
            🎨 Anzeigeoptionen
          </div>
          <div class="section-description">
            Passen Sie die Anzeige der Card an Ihre Bedürfnisse an.
          </div>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Wettervorhersage anzeigen</div>
              <div class="option-description">7-Tage-Prognose anzeigen</div>
            </div>
            <ha-switch
              .checked=${this._show_forecast}
              .configValue=${"show_forecast"}
              @change=${this._valueChanged}
            ></ha-switch>
          </div>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Niederschlagsdiagramm anzeigen</div>
              <div class="option-description">Stündliche Niederschlagsprognose</div>
            </div>
            <ha-switch
              .checked=${this._show_precipitation}
              .configValue=${"show_precipitation"}
              @change=${this._valueChanged}
            ></ha-switch>
          </div>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Wetterwarnungen anzeigen</div>
              <div class="option-description">Schweizer Wetterwarnungen hervorheben</div>
            </div>
            <ha-switch
              .checked=${this._show_warnings}
              .configValue=${"show_warnings"}
              @change=${this._valueChanged}
            ></ha-switch>
          </div>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Kompakter Modus</div>
              <div class="option-description">Kleinere Card für begrenzte Bildschirmgrößen</div>
            </div>
            <ha-switch
              .checked=${this._compact_mode}
              .configValue=${"compact_mode"}
              @change=${this._valueChanged}
            ></ha-switch>
          </div>
        </div>

        <!-- Configuration Preview -->
        ${this._entity?I`
          <div class="preview">
            <div class="preview-title">📋 YAML-Konfiguration</div>
            <div class="preview-config">${this._renderConfigPreview()}</div>
          </div>
        `:I`
          <div class="warning">
            ⚠️ Bitte wählen Sie eine Wetter-Entity aus, um die Konfiguration zu vervollständigen.
          </div>
        `}
      </div>
    `:I``}_renderConfigPreview(){const t={type:"custom:swissmeteo-card",entity:this._entity};return this._location&&(t.location=this._location),this._wind_entity&&(t.wind_entity=this._wind_entity),this._wind_direction_entity&&(t.wind_direction_entity=this._wind_direction_entity),this._sunshine_entity&&(t.sunshine_entity=this._sunshine_entity),this._precipitation_entity&&(t.precipitation_entity=this._precipitation_entity),this._warning_entity&&(t.warning_entity=this._warning_entity),this._show_forecast||(t.show_forecast=!1),this._show_precipitation||(t.show_precipitation=!1),this._show_warnings||(t.show_warnings=!1),this._compact_mode&&(t.compact_mode=!0),Object.entries(t).map(([t,e])=>"string"==typeof e?`${t}: "${e}"`:`${t}: ${e}`).join("\n")}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue;let s;if("checkbox"===e.type?s=e.checked:(s=e.value,""===s&&(s=void 0)),this._config[i]===s)return;const n={...this._config,[i]:s};Object.keys(n).forEach(t=>{void 0===n[t]&&delete n[t]}),this._config=n,function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});n.detail=i,t.dispatchEvent(n)}(this,"config-changed",{config:this._config})}static get properties(){return{hass:{},_config:{},_toggle:{}}}};t([pt({attribute:!1}),e("design:type",Object)],mt.prototype,"hass",void 0),t([pt({attribute:!1}),e("design:type",Object)],mt.prototype,"lovelace",void 0),t([gt(),e("design:type",Object)],mt.prototype,"_config",void 0),t([gt(),e("design:type",Boolean)],mt.prototype,"_toggle",void 0),mt=t([dt("swissmeteo-card-editor")],mt);var _t=Object.freeze({__proto__:null,get SwissMeteoCardEditor(){return mt}});console.log("📦 SwissMeteo Card module loading started..."),console.log("📦 Browser support check:",{customElements:!!window.customElements,hasReflect:!!window.Reflect}),console.log("📦 SwissMeteo Card TypeScript file imported"),console.log("🎨 SwissMeteo Card Editor imported"),setTimeout(()=>{const t=customElements.get("swissmeteo-card");console.log("🔍 SwissMeteo Card registration status:",t?"SUCCESS ✅":"FAILED ❌"),t?(console.log("🔍 Element constructor:",t),console.log("🔍 Element prototype:",t.prototype)):(console.error('❌ Custom element "swissmeteo-card" was not registered!'),console.log("🔍 Checking custom elements registry..."))},100),console.info("%c SWISSMETEO-CARD %c v1.0.0 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"swissmeteo-card",name:"SwissMeteo Card",description:"Eine Card im Stil der SwissMeteo App für Home Assistant 2025.8+",preview:!1,documentationURL:"https://github.com/your-username/ha-swissmeteo-card"}),console.log("📦 SwissMeteo Card module loading completed");
//# sourceMappingURL=swissmeteo-card.js.map

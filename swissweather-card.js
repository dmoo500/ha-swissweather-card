/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const We = globalThis, pt = We.ShadowRoot && (We.ShadyCSS === void 0 || We.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ut = Symbol(), Dt = /* @__PURE__ */ new WeakMap();
let di = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== ut) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (pt && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Dt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Dt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ki = (i) => new di(typeof i == "string" ? i : i + "", void 0, ut), hi = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce(((n, r, s) => n + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + i[s + 1]), i[0]);
  return new di(t, i, ut);
}, Xi = (i, e) => {
  if (pt) i.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const n = document.createElement("style"), r = We.litNonce;
    r !== void 0 && n.setAttribute("nonce", r), n.textContent = t.cssText, i.appendChild(n);
  }
}, Ht = pt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Ki(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ji, defineProperty: en, getOwnPropertyDescriptor: tn, getOwnPropertyNames: nn, getOwnPropertySymbols: rn, getPrototypeOf: sn } = Object, Fe = globalThis, Ut = Fe.trustedTypes, an = Ut ? Ut.emptyScript : "", on = Fe.reactiveElementPolyfillSupport, ve = (i, e) => i, De = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? an : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, e) {
  let t = i;
  switch (e) {
    case Boolean:
      t = i !== null;
      break;
    case Number:
      t = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i);
      } catch {
        t = null;
      }
  }
  return t;
} }, ft = (i, e) => !Ji(i, e), Ot = { attribute: !0, type: String, converter: De, reflect: !1, useDefault: !1, hasChanged: ft };
Symbol.metadata ??= Symbol("metadata"), Fe.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ne = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ot) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
      r !== void 0 && en(this.prototype, e, r);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: r, set: s } = tn(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get: r, set(a) {
      const l = r?.call(this);
      s?.call(this, a), this.requestUpdate(e, l, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ot;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ve("elementProperties"))) return;
    const e = sn(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ve("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ve("properties"))) {
      const t = this.properties, n = [...nn(t), ...rn(t)];
      for (const r of n) this.createProperty(r, t[r]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, r] of t) this.elementProperties.set(n, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const r = this._$Eu(t, n);
      r !== void 0 && this._$Eh.set(r, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const r of n) t.unshift(Ht(r));
    } else e !== void 0 && t.push(Ht(e));
    return t;
  }
  static _$Eu(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((e) => this.enableUpdating = e)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((e) => e(this)));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Xi(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((e) => e.hostDisconnected?.()));
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$ET(e, t) {
    const n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
    if (r !== void 0 && n.reflect === !0) {
      const s = (n.converter?.toAttribute !== void 0 ? n.converter : De).toAttribute(t, n.type);
      this._$Em = e, s == null ? this.removeAttribute(r) : this.setAttribute(r, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const n = this.constructor, r = n._$Eh.get(e);
    if (r !== void 0 && this._$Em !== r) {
      const s = n.getPropertyOptions(r), a = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : De;
      this._$Em = r;
      const l = a.fromAttribute(t, s.type);
      this[r] = l ?? this._$Ej?.get(r) ?? l, this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      const r = this.constructor, s = this[e];
      if (n ??= r.getPropertyOptions(e), !((n.hasChanged ?? ft)(s, t) || n.useDefault && n.reflect && s === this._$Ej?.get(e) && !this.hasAttribute(r._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: r, wrapped: s }, a) {
    n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), s !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), r === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [r, s] of this._$Ep) this[r] = s;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [r, s] of n) {
        const { wrapped: a } = s, l = this[r];
        a !== !0 || this._$AL.has(r) || l === void 0 || this.C(r, void 0, s, l);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((n) => n.hostUpdate?.())), this.update(t)) : this._$EM();
    } catch (n) {
      throw e = !1, this._$EM(), n;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach(((t) => t.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach(((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
ne.elementStyles = [], ne.shadowRootOptions = { mode: "open" }, ne[ve("elementProperties")] = /* @__PURE__ */ new Map(), ne[ve("finalized")] = /* @__PURE__ */ new Map(), on?.({ ReactiveElement: ne }), (Fe.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt = globalThis, He = gt.trustedTypes, Gt = He ? He.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, pi = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, ui = "?" + B, ln = `<${ui}>`, X = document, be = () => X.createComment(""), _e = (i) => i === null || typeof i != "object" && typeof i != "function", mt = Array.isArray, cn = (i) => mt(i) || typeof i?.[Symbol.iterator] == "function", Je = `[ 	
\f\r]`, fe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, It = /-->/g, Bt = />/g, q = RegExp(`>|${Je}(?:([^\\s"'>=/]+)(${Je}*=${Je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), jt = /'/g, Ft = /"/g, fi = /^(?:script|style|textarea|title)$/i, gi = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), p = gi(1), z = gi(2), se = Symbol.for("lit-noChange"), S = Symbol.for("lit-nothing"), Vt = /* @__PURE__ */ new WeakMap(), Y = X.createTreeWalker(X, 129);
function mi(i, e) {
  if (!mt(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Gt !== void 0 ? Gt.createHTML(e) : e;
}
const dn = (i, e) => {
  const t = i.length - 1, n = [];
  let r, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = fe;
  for (let l = 0; l < t; l++) {
    const o = i[l];
    let c, h, d = -1, u = 0;
    for (; u < o.length && (a.lastIndex = u, h = a.exec(o), h !== null); ) u = a.lastIndex, a === fe ? h[1] === "!--" ? a = It : h[1] !== void 0 ? a = Bt : h[2] !== void 0 ? (fi.test(h[2]) && (r = RegExp("</" + h[2], "g")), a = q) : h[3] !== void 0 && (a = q) : a === q ? h[0] === ">" ? (a = r ?? fe, d = -1) : h[1] === void 0 ? d = -2 : (d = a.lastIndex - h[2].length, c = h[1], a = h[3] === void 0 ? q : h[3] === '"' ? Ft : jt) : a === Ft || a === jt ? a = q : a === It || a === Bt ? a = fe : (a = q, r = void 0);
    const g = a === q && i[l + 1].startsWith("/>") ? " " : "";
    s += a === fe ? o + ln : d >= 0 ? (n.push(c), o.slice(0, d) + pi + o.slice(d) + B + g) : o + B + (d === -2 ? l : g);
  }
  return [mi(i, s + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
let rt = class yi {
  constructor({ strings: e, _$litType$: t }, n) {
    let r;
    this.parts = [];
    let s = 0, a = 0;
    const l = e.length - 1, o = this.parts, [c, h] = dn(e, t);
    if (this.el = yi.createElement(c, n), Y.currentNode = this.el.content, t === 2 || t === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (r = Y.nextNode()) !== null && o.length < l; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const d of r.getAttributeNames()) if (d.endsWith(pi)) {
          const u = h[a++], g = r.getAttribute(d).split(B), m = /([.?@])?(.*)/.exec(u);
          o.push({ type: 1, index: s, name: m[2], strings: g, ctor: m[1] === "." ? pn : m[1] === "?" ? un : m[1] === "@" ? fn : Ve }), r.removeAttribute(d);
        } else d.startsWith(B) && (o.push({ type: 6, index: s }), r.removeAttribute(d));
        if (fi.test(r.tagName)) {
          const d = r.textContent.split(B), u = d.length - 1;
          if (u > 0) {
            r.textContent = He ? He.emptyScript : "";
            for (let g = 0; g < u; g++) r.append(d[g], be()), Y.nextNode(), o.push({ type: 2, index: ++s });
            r.append(d[u], be());
          }
        }
      } else if (r.nodeType === 8) if (r.data === ui) o.push({ type: 2, index: s });
      else {
        let d = -1;
        for (; (d = r.data.indexOf(B, d + 1)) !== -1; ) o.push({ type: 7, index: s }), d += B.length - 1;
      }
      s++;
    }
  }
  static createElement(e, t) {
    const n = X.createElement("template");
    return n.innerHTML = e, n;
  }
};
function ae(i, e, t = i, n) {
  if (e === se) return e;
  let r = n !== void 0 ? t._$Co?.[n] : t._$Cl;
  const s = _e(e) ? void 0 : e._$litDirective$;
  return r?.constructor !== s && (r?._$AO?.(!1), s === void 0 ? r = void 0 : (r = new s(i), r._$AT(i, t, n)), n !== void 0 ? (t._$Co ??= [])[n] = r : t._$Cl = r), r !== void 0 && (e = ae(i, r._$AS(i, e.values), r, n)), e;
}
let hn = class {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? X).importNode(t, !0);
    Y.currentNode = r;
    let s = Y.nextNode(), a = 0, l = 0, o = n[0];
    for (; o !== void 0; ) {
      if (a === o.index) {
        let c;
        o.type === 2 ? c = new yt(s, s.nextSibling, this, e) : o.type === 1 ? c = new o.ctor(s, o.name, o.strings, this, e) : o.type === 6 && (c = new gn(s, this, e)), this._$AV.push(c), o = n[++l];
      }
      a !== o?.index && (s = Y.nextNode(), a++);
    }
    return Y.currentNode = X, r;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}, yt = class vi {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, n, r) {
    this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = ae(this, e, t), _e(e) ? e === S || e == null || e === "" ? (this._$AH !== S && this._$AR(), this._$AH = S) : e !== this._$AH && e !== se && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : cn(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== S && _e(this._$AH) ? this._$AA.nextSibling.data = e : this.T(X.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = rt.createElement(mi(n.h, n.h[0]), this.options)), n);
    if (this._$AH?._$AD === r) this._$AH.p(t);
    else {
      const s = new hn(r, this), a = s.u(this.options);
      s.p(t), this.T(a), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = Vt.get(e.strings);
    return t === void 0 && Vt.set(e.strings, t = new rt(e)), t;
  }
  k(e) {
    mt(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, r = 0;
    for (const s of e) r === t.length ? t.push(n = new vi(this.O(be()), this.O(be()), this, this.options)) : n = t[r], n._$AI(s), r++;
    r < t.length && (this._$AR(n && n._$AB.nextSibling, r), t.length = r);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
      const n = e.nextSibling;
      e.remove(), e = n;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}, Ve = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, r, s) {
    this.type = 1, this._$AH = S, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = s, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = S;
  }
  _$AI(e, t = this, n, r) {
    const s = this.strings;
    let a = !1;
    if (s === void 0) e = ae(this, e, t, 0), a = !_e(e) || e !== this._$AH && e !== se, a && (this._$AH = e);
    else {
      const l = e;
      let o, c;
      for (e = s[0], o = 0; o < s.length - 1; o++) c = ae(this, l[n + o], t, o), c === se && (c = this._$AH[o]), a ||= !_e(c) || c !== this._$AH[o], c === S ? e = S : e !== S && (e += (c ?? "") + s[o + 1]), this._$AH[o] = c;
    }
    a && !r && this.j(e);
  }
  j(e) {
    e === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, pn = class extends Ve {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === S ? void 0 : e;
  }
}, un = class extends Ve {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== S);
  }
}, fn = class extends Ve {
  constructor(e, t, n, r, s) {
    super(e, t, n, r, s), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ae(this, e, t, 0) ?? S) === se) return;
    const n = this._$AH, r = e === S && n !== S || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, s = e !== S && (n === S || r);
    r && this.element.removeEventListener(this.name, this, n), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, gn = class {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ae(this, e);
  }
};
const mn = gt.litHtmlPolyfillSupport;
mn?.(rt, yt), (gt.litHtmlVersions ??= []).push("3.3.1");
const yn = (i, e, t) => {
  const n = t?.renderBefore ?? e;
  let r = n._$litPart$;
  if (r === void 0) {
    const s = t?.renderBefore ?? null;
    n._$litPart$ = r = new yt(e.insertBefore(be(), s), s, void 0, t ?? {});
  }
  return r._$AI(i), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt = globalThis;
let re = class extends ne {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = yn(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return se;
  }
};
re._$litElement$ = !0, re.finalized = !0, vt.litElementHydrateSupport?.({ LitElement: re });
const vn = vt.litElementPolyfillSupport;
vn?.({ LitElement: re });
(vt.litElementVersions ??= []).push("4.2.1");
function wn(i, e, t, n) {
  const r = i.slice(0, 7), s = e.slice(0, r.length * 24);
  if (!s.length) return p`<div>No hourly forecast available</div>`;
  const a = r.length, l = Math.max(180, a * 100), o = a > 0 ? l / a : 100, c = 200, d = o / 24;
  let u = 0;
  if (s.length > 0 && s[0].datetime) {
    const f = new Date(s[0].datetime);
    u = new Date(f.getFullYear(), f.getMonth(), f.getDate()).getTime();
  }
  const g = s.map((f) => typeof f.temperature == "number" ? f.temperature : null);
  let m = Math.min(...g.filter((f) => f !== null));
  const _ = Math.max(...g.filter((f) => f !== null));
  m > 0 && (m = 0);
  const D = 13, y = 64, R = 20, he = 18, V = 8, Xe = he + D + V + y + V + 2, pe = 32, Z = 60, I = Xe + pe, P = I + Z, Se = _ - m || 1, Mt = s.map((f) => typeof f.precipitation == "number" ? f.precipitation : 0), Tt = s.map(
    (f) => typeof f.precipitation_probability == "number" ? f.precipitation_probability % 10 : 0
  ), Me = Math.max(...Mt, ...Tt, 1);
  function Te(f, v) {
    const C = new Date(f.getFullYear(), f.getMonth(), f.getDate()).getTime(), L = Math.round((C - v) / 864e5), W = Math.round((f.getTime() - C) / (3600 * 1e3));
    return { dayIdx: L, hourInDay: W };
  }
  const Fi = g.map((f, v) => {
    if (!s[v] || !s[v].datetime) return "";
    const k = new Date(s[v].datetime), { dayIdx: C, hourInDay: L } = Te(k, u), W = C * o + L * d + d / 2;
    return f !== null ? `${W},${P - (f - m) / Se * (P - I)}` : "";
  }).filter(Boolean).join(" "), Le = Math.max(3, Math.floor(d) - 2), Lt = P, Nt = P - I;
  function Vi(f) {
    if (f <= 0) return "transparent";
    const v = [
      { val: 0, color: { r: 89, g: 148, b: 177 } },
      // #5994b1ff
      { val: 5, color: { r: 33, g: 150, b: 243 } },
      // #2196f3
      { val: 10, color: { r: 0, g: 100, b: 0 } },
      // #006400
      { val: 15, color: { r: 76, g: 175, b: 80 } },
      // #4caf50
      { val: 20, color: { r: 255, g: 224, b: 102 } }
      // #ffe066
    ];
    let k = v[0], C = v[v.length - 1];
    for (let ue = 1; ue < v.length; ue++)
      if (f < v[ue].val) {
        C = v[ue], k = v[ue - 1];
        break;
      }
    const L = (f - k.val) / (C.val - k.val), W = Math.round(k.color.r + (C.color.r - k.color.r) * L), U = Math.round(k.color.g + (C.color.g - k.color.g) * L), Ee = Math.round(k.color.b + (C.color.b - k.color.b) * L);
    return `rgb(${W},${U},${Ee})`;
  }
  const Zi = Tt.map((f, v) => {
    if (!s[v] || !s[v].datetime) return null;
    const k = new Date(s[v].datetime), { dayIdx: C, hourInDay: L } = Te(k, u), W = C * o + L * d + d / 2 - Le / 2, U = Me > 0 ? f / Me * Nt : 0;
    return f > 0 ? z`<rect x="${W}" y="${Lt - U}" width="${Le}" height="${U}"
          fill="#988d8dff" opacity="0.4" rx="1.5"/>` : null;
  }), qi = Mt.map((f, v) => {
    if (!s[v] || !s[v].datetime) return null;
    const k = new Date(s[v].datetime), { dayIdx: C, hourInDay: L } = Te(k, u), W = C * o + L * d + d / 2 - Le / 2, U = Me > 0 ? f / Me * Nt : 0, Ee = Vi(f);
    return f > 0 ? z`<rect x="${W}" y="${Lt - U}" width="${Le}" height="${U}"
          fill="${Ee}" opacity="1" rx="1.5"/>` : null;
  }), Et = [];
  if (a > 1 && s.length > 0)
    for (let f = 1; f < a; f++) {
      const v = new Date(u + f * 24 * 60 * 60 * 1e3), { dayIdx: k, hourInDay: C } = Te(v, u), L = k * o + C * d;
      Et.push(
        z`<line x1="${L}" y1="16" x2="${L}" y2="${c - 16}" stroke="#bbb" stroke-width="1" stroke-dasharray="2,2"/>`
      );
    }
  const Rt = [], Pt = 6;
  if (a > 0)
    for (let f = 0; f < a; f++) {
      const v = f * o + o / 2, k = he + D, C = k + V + Pt, L = C + y + V + Pt + 2, W = typeof r[f].templow == "number" ? Math.round(r[f].templow || r[f].temperature - 5) : "", U = typeof r[f].temperature == "number" ? Math.round(r[f].temperature) : "";
      Rt.push(z`
        <g>
          <!-- Weekday -->
          <text x="${v}" y="${k}" text-anchor="middle" font-size="${D}" fill="#888">
            ${new Date(r[f].datetime).toLocaleDateString(void 0, { weekday: "short" })}
          </text>
          <!-- Icon -->
          <foreignObject x="${v - y / 2}" y="${C}" width="${y}" height="${y}">
              ${n(r[f].condition || "", t.enable_animate_weather_icons ? "animated" : "mdiAsSVG", y + "px", !0)}
          </foreignObject>
          <!-- Min/Max temp -->
          <text class="weather-temp" x="${v}" y="${L}" text-anchor="middle" font-size="${R}"">${W}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${U}°</tspan></text>
        </g>
      `);
    }
  const Wt = [], zt = 5 / Se * (P - I), Qi = Math.floor((P - I) / zt), Ne = /* @__PURE__ */ new Set();
  for (let f = 0; f <= Qi; f++)
    Ne.add(P - f * zt);
  if (m > 0) {
    const f = P - (0 - m) / Se * (P - I);
    f <= P && f >= I && Ne.add(f);
  }
  const Yi = P - (m - m) / Se * (P - I);
  return Ne.add(Yi), Array.from(Ne).sort((f, v) => v - f).forEach((f, v) => {
    Wt.push(
      z`<line x1="0" y1="${f}" x2="${l}" y2="${f}" stroke="#bbb" stroke-width="${v % 2 === 0 ? 2 : 1}" stroke-dasharray="${v % 2 === 0 ? "none" : "4,3"}" />`
    );
  }), p`
    <div class="chart">
      <svg width="100%" height="100%" viewBox="0 0 ${l} ${c}" style="display:block;">
        ${Wt} ${Rt} ${Et} ${Zi}
        <!-- Precipitation bars -->
        ${qi}

        <polyline points="${Fi}" fill="none" stroke="#e74c3c" stroke-width="2" />
      </svg>
    </div>
  `;
}
function xn(i, e, t, n, r, s, a) {
  return t !== !1 ? i.length > 0 && i.slice(0, e).some((l) => {
    const o = l;
    return typeof o.sunshine == "number" && !isNaN(o.sunshine) || typeof o.sunshine_duration == "number" && !isNaN(o.sunshine_duration);
  }) ? p`
          <div class="chart" style="position:relative;">
            <div class="section-title">
              <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
              ${s("sunshine_hours", { hours: e })}
            </div>
            <div class="chart-bars" style="position:relative;">
              ${(() => {
    const l = n?.attributes?.sunrise ? new Date(n.attributes.sunrise) : new Date((r?.attributes).next_rising) || null, o = n?.attributes?.sunset ? new Date(n.attributes.sunset) : new Date((r?.attributes).next_setting) || null, c = i[0]?.datetime ? new Date(i[0].datetime) : null;
    let h = -1, d = -1;
    return l && c && (h = Math.round(
      (l.getTime() - c.getTime()) / (3600 * 1e3)
    )), o && c && (d = Math.round(
      (o.getTime() - c.getTime()) / (3600 * 1e3)
    )), p`
                  ${h >= 0 && h < e ? p`
                        <div
                          style="position:absolute;left:calc(${h / e * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                        >
                          <ha-icon
                            icon="mdi:weather-sunset-up"
                            style="color:#fbc02d;font-size:18px;"
                          ></ha-icon>
                          <span style="font-size:10px;color:#fbc02d"
                            >
                            ${l ? l.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }) : ""}</span
                          >
                        </div>
                      ` : ""}
                  ${d >= 0 && d < e ? p`
                        <div
                          style="position:absolute;left:calc(${d / e * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                        >
                          <ha-icon
                            icon="mdi:weather-sunset-down"
                            style="color:#fbc02d;font-size:18px;"
                          ></ha-icon>
                          <span style="font-size:10px;color:#fbc02d;"
                            >
                            ${o ? o.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }) : ""}</span
                          >
                        </div>
                      ` : ""}
                `;
  })()}
              ${i.slice(0, e).map((l) => {
    const o = l, c = typeof o.sunshine == "number" && !isNaN(o.sunshine) ? o.sunshine : typeof o.sunshine_duration == "number" && !isNaN(o.sunshine_duration) ? o.sunshine_duration : null, h = c !== null ? Math.round(c) : 2;
    return p`
                  <div
                    style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                  >
                    <span
                      style="font-size:11px; color:#fbc02d; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                    >
                      ${c !== null ? c.toFixed(0) + " min" : ""}
                    </span>
                    <div class="chart-bar-sunshine" style="height: ${h}px;"></div>
                  </div>
                `;
  })}
            </div>
            ${a(e)}
          </div>
        ` : p`
          <div class="chart">
            <div class="section-title">
              <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
              ${s("sunshine_hours", { hours: e })}
            </div>
            <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
              ${s("no_sunshine_data")}
            </div>
          </div>
        ` : p``;
}
function bn(i, e, t, n, r) {
  return t !== !1 ? i.length > 0 && i.slice(0, e).some((s) => typeof s.wind_speed == "number" && !isNaN(s.wind_speed)) ? p`
          <div class="chart">
            <div class="section-title">
              <ha-icon icon="mdi:weather-windy"></ha-icon>
              ${n("wind_hours", { hours: e })}
            </div>
            <div class="chart-line-wind" style="position:relative;">
              ${i.slice(0, e).map((s) => {
    const a = typeof s.wind_speed == "number" && !isNaN(s.wind_speed) ? s.wind_speed : null;
    return p`
                  <div
                    style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                  >
                    <span
                      style="font-size:11px; color:#44739e; writing-mode:vertical-rl; transform:rotate(180deg); min-height:16px; font-variant-numeric:tabular-nums;"
                    >
                      ${a !== null ? a.toFixed(1) + " km/h" : ""}
                    </span>
                  </div>
                `;
  })}
            </div>
            <div class="chart-line-wind" style="position:relative;">
              ${i.slice(0, e).map((s) => {
    const a = typeof s.wind_bearing == "number" && !isNaN(s.wind_bearing) ? s.wind_bearing : null;
    return p`
                  <div
                    style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;"
                  >
                    <div class="wind-compass" style="width: 12px; height: 12px; margin: 0 auto;">
                      <div
                        class="wind-arrow"
                        style="transform: translate(-50%, -100%) rotate(${a !== null ? a : 0}deg);"
                      ></div>
                    </div>
                  </div>
                `;
  })}
            </div>
            <div style="width:100%;height:90px;overflow-x:auto;">
              ${(() => {
    const s = i.slice(0, e).map(
      (y) => typeof y.wind_speed == "number" && !isNaN(y.wind_speed) ? y.wind_speed : null
    ), a = s.filter((y) => y !== null);
    if (a.length < 2) return "";
    const l = Math.min(...a), c = Math.max(...a) - l || 1, h = s.length, d = Math.max(360, Math.min(1600, h * 250)), u = 50, g = d / (h - 1), m = s.map((y, R) => y !== null ? `${R * g},${u - (y - l) / c * u}` : "").filter(Boolean).join(" ");
    return z`<svg width="${e === 6 ? "84%" : e === 12 ? "90%" : e === 18 ? "96%" : "100%"}" height="${u}" viewBox="0 0 ${d} ${u}" preserveAspectRatio="none" style="display:block;padding-left:${e === 6 ? "8%" : e === 12 ? "5%" : e === 18 ? "2%" : "0%"};">
                <polyline points="${m}" fill="none" stroke="#44739e" stroke-width="3" />
                ${s.map((y, R) => y !== null ? z`<circle r="3" fill="#44739e" cx="${R * g}" cy="${u - (y - l) / c * u}" />` : null)}
              </svg>`;
  })()}
            </div>
            ${r(e)}
          </div>
        ` : p`` : p``;
}
function _n(i, e, t, n, r, s, a, l) {
  return t === !1 ? p`` : e && i.length === 0 ? p`<div class="forecast-section">Loading...</div>` : i.length === 0 ? p`<div class="forecast-section">No forecast data</div>` : n.show_forecast !== !1 ? e && i.length === 0 ? p`
          <div class="forecast-section">
            <div class="section-title">
              <ha-icon icon="mdi:calendar"></ha-icon>
              ${r("7d_forecast")}
              <small
                style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                >${r("loading")}</small
              >
            </div>
            <div
              style="text-align: center; padding: 20px; color: var(--secondary-text-color, #666); font-style: italic;"
            >
              ⏳ ${r("loading_forecast")}<br />
              <small>Service: weather.get_forecasts</small>
            </div>
          </div>
        ` : i.length > 0 ? p`
            <div class="forecast-section">
              <div class="section-title">
                <ha-icon icon="mdi:calendar"></ha-icon>
                ${i.length === 7 ? r("7d_forecast") : r("xd_forecast", { days: i.length })}
                <small
                  style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                >
                  (${i.length} ${r("days_available")})
                </small>
              </div>
              ${i.length < 7 ? p`
                    <div
                      style="text-align: center; color: var(--warning-color, #b8860b); font-size: 13px; margin-bottom: 8px;"
                    >
                      ${r("forecast_days_hint", { count: i.length })}
                    </div>
                  ` : ""}
              <div class="forecast-grid">
                ${i.slice(0, 7).map(
    (o) => p`
                    <div class="forecast-day">
                      <div class="forecast-date">${l(o.datetime)}</div>
                      <div class="forecast-icon">
                        ${s(
      o.condition,
      n.enable_animate_weather_icons ? "animated" : "mdi",
      "24px",
      a()
    )}
                      </div>
                      <div class="forecast-temps">
                        <span class="temp-high">${Math.round(o.temperature)}°</span>
                        <span class="temp-low"
                          >${Math.round(o.templow || o.temperature - 5)}°</span
                        >
                      </div>
                    </div>
                  `
  )}
              </div>
            </div>
          ` : p`
            <div class="forecast-section">
              <div class="section-title">
                <ha-icon icon="mdi:calendar"></ha-icon>
                ${r("7d_forecast")}
                <small style="font-size: 12px; color: #666; margin-left: 10px;">
                  (0 ${r("days_available")})
                </small>
              </div>
              <div style="text-align: center; padding: 20px; color: #666; font-style: italic;">
                ⚠️ ${r("no_forecast_data")}<br />
                <small>Entity: ${n.entity}</small><br />
                <small>${r("check_devtools")}</small><br />
                <small style="color: #999;">${r("try_other_entity")}</small>
              </div>
            </div>
          ` : p``;
}
const wi = {
  de: {
    config: {
      entity: "Wetter Entity *",
      location: "Standort",
      show_location: "Standort anzeigen",
      sun_entity: "Sonnen Entity für Sonnenaufgang und Sonnenuntergang",
      wind_entity: "Windgeschwindigkeit",
      wind_direction_entity: "Windrichtung",
      sunshine_entity: "Sonnenscheindauer",
      precipitation_entity: "Niederschlagsprognose",
      warning_entity: "Wetterwarnungen",
      show_forecast: "Wettervorhersage anzeigen",
      show_temperature: "Temperaturdiagramm anzeigen",
      show_precipitation: "Niederschlagsdiagramm anzeigen",
      show_sunshine: "Sonnenscheindauerdiagramm anzeigen",
      show_warnings: "Wetterwarnungen anzeigen",
      show_wind: "Winddiagramm anzeigen",
      enable_animate_weather_icons: "Animierte Wetter-Icons aktivieren",
      forecast_hours: "Prognose Stunden (Standard: 6)",
      compact_mode: "Kompakter Modus",
      group_general: "Allgemeineinstellungen",
      group_current: "Aktuelles Wetter",
      group_forecast: "Wettervorhersage",
      group_charts: "Diagramme",
      group_sensors: "Sensoren",
      group_display: "Anzeigeeinstellungen",
      group_chart_order: "Reihenfolge der Diagramme",
      chart_order: "Reihenfolge der Diagramme (z.B. temperature,precipitation,sunshine,wind)",
      chart_temperature: "Temperatur",
      chart_precipitation: "Niederschlag",
      chart_sunshine: "Sonnenschein",
      chart_wind: "Wind",
      chart_forecast: "Prognose-Diagramm"
    },
    location: "Schweiz",
    wind: "Wind",
    direction: "Richtung",
    humidity: "Luftfeuchtigkeit",
    pressure: "Luftdruck",
    sunshine: "Sonnenschein",
    visibility: "Sicht",
    current_weather: "Aktuelles Wetter",
    weather_warning: "Wetterwarnung aktiv",
    forecast_loading: "Lädt...",
    forecast_days: "{{count}}-Tage-Prognose",
    forecast_days_7: "7-Tage-Prognose",
    forecast_hours: "Prognose (nächste {{hours}}h)",
    xd_forecast: "Tages Prognose",
    forecast_days_hint: "Hinweis: Es wurden nur {{count}} Tage vom Wetterdienst geliefert.",
    forecast_none: "Keine Forecast-Daten verfügbar",
    forecast_none_hint: "Prüfen Sie die Developer Tools → Services → weather.get_forecasts",
    temperature_chart: "Temperatur (nächste 6h)",
    temperature_none: "Keine Temperaturdaten vorhanden",
    temperature_hours: "Temperatur (nächste {{hours}}h)",
    precipitation_hours: "Niederschlag (nächste {{hours}}h)",
    precipitation_none: "Keine Niederschlagsdaten vorhanden",
    sunshine_chart: "Sonnenschein (nächste 6h)",
    sunshine_none: "Keine Sonnenscheindaten vorhanden",
    sunshine_hours: "Sonnenschein (nächste {{hours}}h)",
    wind_hours: "Wind (nächste {{hours}}h)",
    days_available: "Verfügbare Tage",
    now: "Jetzt",
    hour: "{{h}}h",
    wind_compass: "Richtung",
    warnings: "Wetterwarnungen",
    compact_mode: "Kompakter Modus",
    "clear-night": "Klarer Himmel in der Nacht",
    cloudy: "Bewölkt",
    exceptional: "Aussergewöhnliches Wetter",
    fog: "Nebel",
    hail: "Hagel",
    lightning: "Blitz",
    "lightning-rainy": "Gewitter, regnerisch",
    partlycloudy: "Teilweise bewölkt",
    pouring: "Strömender Regen",
    rainy: "Regnerisch",
    snowy: "Schnee",
    "snowy-rainy": "Schnee mit Regen",
    sunny: "Sonnig",
    windy: "Windig",
    "windy-variant": "Windige Variante",
    "windy-variant-cloudy": "Windig mit Wolken",
    "windy-variant-partlycloudy": "Windig mit teilweiser Bewölkung",
    "windy-variant-rainy": "Windig mit Regen",
    "windy-variant-snowy": "Windig mit Schnee",
    "windy-variant-snowy-rainy": "Windig mit Schnee und Regen",
    "windy-variant-sunny": "Windig mit Sonne",
    "windy-variant-clear-night": "Windig mit klarem Himmel in der Nacht",
    "windy-variant-fog": "Windig mit Nebel",
    "windy-variant-hail": "Windig mit Hagel",
    "windy-variant-lightning": "Windig mit Blitz",
    "windy-variant-lightning-rainy": "Windig mit Blitz und Regen",
    "windy-variant-pouring": "Windig mit starkem Regen",
    "windy-variant-exceptional": "Windig mit aussergewöhnlichem Wetter",
    no_forecast_data: "Keine Vorhersagedaten verfügbar",
    no_forecast_data_hint: "Prüfen Sie die Developer Tools → Services → weather.get_forecasts",
    sunrise: "Sonnenaufgang",
    sunset: "Sonnenuntergang",
    valid_from: "Gültig ab",
    valid_to: "Gültig bis",
    unknown: "Unbekannt"
  },
  en: {
    config: {
      entity: "Weather Entity *",
      show_location: "Show Location",
      location: "Location",
      sun_entity: "Sun Entity to display sunrise and sunset times",
      wind_entity: "Wind Speed",
      wind_direction_entity: "Wind Direction",
      sunshine_entity: "Sunshine Duration",
      precipitation_entity: "Precipitation Forecast",
      warning_entity: "Weather Warnings",
      show_forecast: "Show Weather Forecast",
      show_temperature: "Show Temperature Chart",
      show_precipitation: "Show Precipitation Chart",
      show_sunshine: "Show Sunshine Duration Chart",
      show_warnings: "Show Weather Warnings",
      show_wind: "Show Wind Chart",
      enable_animate_weather_icons: "Enable Animated Weather Icons",
      forecast_hours: "Forecast Hours (default: 6)",
      compact_mode: "Compact Mode",
      group_general: "General Settings",
      group_current: "Current Weather",
      group_forecast: "Weather Forecast",
      group_charts: "Charts",
      group_sensors: "Sensors",
      group_display: "Display Settings",
      group_chart_order: "Chart Order",
      chart_order: "Chart order (e.g. temperature,precipitation,sunshine,wind)",
      chart_temperature: "Temperature",
      chart_precipitation: "Precipitation",
      chart_sunshine: "Sunshine",
      chart_wind: "Wind",
      chart_forecast: "Forecast Chart"
    },
    location: "Switzerland",
    wind: "Wind",
    direction: "Direction",
    humidity: "Humidity",
    pressure: "Pressure",
    sunshine: "Sunshine",
    visibility: "Visibility",
    current_weather: "Current Weather",
    weather_warning: "Weather warning active",
    forecast_loading: "Loading...",
    forecast_days: "{{count}}-day forecast",
    forecast_days_7: "7-day forecast",
    xd_forecast: "Daily forecast",
    forecast_days_hint: "Note: Only {{count}} days were delivered by the weather service.",
    forecast_hours: "Forecast (next {{hours}}h)",
    forecast_none: "No forecast data available",
    forecast_none_hint: "Check Developer Tools → Services → weather.get_forecasts",
    temperature_none: "No temperature data available",
    temperature_hours: "Temperature (next {{hours}}h)",
    precipitation_none: "No precipitation data available",
    precipitation_hours: "Precipitation (next {{hours}}h)",
    sunshine_none: "No sunshine data available",
    sunshine_hours: "Sunshine (next {{hours}}h)",
    wind_hours: "Wind (next {{hours}}h)",
    days_available: "Available Days",
    now: "Now",
    hour: "{{h}}h",
    wind_compass: "Direction",
    warnings: "Weather warnings",
    compact_mode: "Compact mode",
    "clear-night": "Clear night sky",
    cloudy: "Cloudy",
    exceptional: "Exceptional weather",
    fog: "Foggy",
    hail: "Hail",
    lightning: "Lightning",
    "lightning-rainy": "Lightning with rain",
    partlycloudy: "Partly cloudy",
    pouring: "Pouring rain",
    rainy: "Rainy",
    snowy: "Snowy",
    "snowy-rainy": "Snowy with rain",
    sunny: "Sunny",
    windy: "Windy",
    "windy-variant": "Windy variant",
    "windy-variant-cloudy": "Windy with clouds",
    "windy-variant-partlycloudy": "Windy with partial clouds",
    "windy-variant-rainy": "Windy with rain",
    "windy-variant-snowy": "Windy with snow",
    "windy-variant-snowy-rainy": "Windy with snowy rain",
    "windy-variant-sunny": "Windy with sun",
    "windy-variant-clear-night": "Windy with clear night",
    "windy-variant-fog": "Windy with fog",
    "windy-variant-hail": "Windy with hail",
    "windy-variant-lightning": "Windy with lightning",
    "windy-variant-lightning-rainy": "Windy with lightning and rain",
    "windy-variant-pouring": "Windy with pouring rain",
    "windy-variant-exceptional": "Windy with exceptional weather",
    no_forecast_data: "No forecast data available",
    no_forecast_data_hint: "Check Developer Tools → Services → weather.get_forecasts",
    sunrise: "Sunrise",
    sunset: "Sunset",
    valid_from: "Valid from",
    valid_to: "Valid to",
    unknown: "Unknown"
  }
};
function Re(i, e, t) {
  const n = /* @__PURE__ */ new Date();
  return p`
    <div class="chart-labels">
      ${Array.from({ length: i }, (r, s) => {
    const l = new Date(n.getTime() + s * 60 * 60 * 1e3).toLocaleTimeString([], { hour: "2-digit" });
    return p`
          <div
            style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
          >
            <span>${l}</span>
          </div>
        `;
  })}
    </div>
  `;
}
function $n(i) {
  const e = new Date(i);
  return ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"][e.getDay()];
}
const st = "langChanged";
function kn(i, e, t) {
  return Object.entries(at(e || {})).reduce((n, [r, s]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(at(s))), i);
}
function An(i, e) {
  const t = i.split(".");
  let n = e.strings;
  for (; n != null && t.length > 0; )
    n = n[t.shift()];
  return n != null ? n.toString() : null;
}
function at(i) {
  return typeof i == "function" ? i() : i;
}
const Cn = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: An,
  interpolate: kn,
  translationCache: {}
});
let $e = Cn();
function xi(i) {
  return $e = Object.assign(Object.assign({}, $e), i);
}
function Sn(i) {
  window.dispatchEvent(new CustomEvent(st, { detail: i }));
}
function Mn(i, e, t = $e) {
  Sn({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function Tn(i, e) {
  const t = (n) => i(n.detail);
  return window.addEventListener(st, t, e), () => window.removeEventListener(st, t);
}
async function bi(i, e = $e) {
  const t = await e.loader(i, e);
  e.translationCache = {}, Mn(i, t, e);
}
function x(i, e, t = $e) {
  let n = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? at(e) : null, e != null ? t.interpolate(n, e, t) : n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _i = { CHILD: 2 }, Ln = (i) => (...e) => ({ _$litDirective$: i, values: e });
let $i = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, n) {
    this._$Ct = e, this._$AM = t, this._$Ci = n;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et;
const Ue = window, oe = Ue.trustedTypes, Zt = oe ? oe.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ot = "$lit$", j = `lit$${(Math.random() + "").slice(9)}$`, ki = "?" + j, Nn = `<${ki}>`, J = document, Oe = () => J.createComment(""), ke = (i) => i === null || typeof i != "object" && typeof i != "function", Ai = Array.isArray, En = (i) => Ai(i) || typeof i?.[Symbol.iterator] == "function", tt = `[ 	
\f\r]`, ge = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, qt = /-->/g, Qt = />/g, Q = RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Yt = /'/g, Kt = /"/g, Ci = /^(?:script|style|textarea|title)$/i, le = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), Xt = /* @__PURE__ */ new WeakMap(), K = J.createTreeWalker(J, 129, null, !1);
function Si(i, e) {
  if (!Array.isArray(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Zt !== void 0 ? Zt.createHTML(e) : e;
}
const Rn = (i, e) => {
  const t = i.length - 1, n = [];
  let r, s = e === 2 ? "<svg>" : "", a = ge;
  for (let l = 0; l < t; l++) {
    const o = i[l];
    let c, h, d = -1, u = 0;
    for (; u < o.length && (a.lastIndex = u, h = a.exec(o), h !== null); ) u = a.lastIndex, a === ge ? h[1] === "!--" ? a = qt : h[1] !== void 0 ? a = Qt : h[2] !== void 0 ? (Ci.test(h[2]) && (r = RegExp("</" + h[2], "g")), a = Q) : h[3] !== void 0 && (a = Q) : a === Q ? h[0] === ">" ? (a = r ?? ge, d = -1) : h[1] === void 0 ? d = -2 : (d = a.lastIndex - h[2].length, c = h[1], a = h[3] === void 0 ? Q : h[3] === '"' ? Kt : Yt) : a === Kt || a === Yt ? a = Q : a === qt || a === Qt ? a = ge : (a = Q, r = void 0);
    const g = a === Q && i[l + 1].startsWith("/>") ? " " : "";
    s += a === ge ? o + Nn : d >= 0 ? (n.push(c), o.slice(0, d) + ot + o.slice(d) + j + g) : o + j + (d === -2 ? (n.push(void 0), l) : g);
  }
  return [Si(i, s + (i[t] || "<?>") + (e === 2 ? "</svg>" : "")), n];
};
let lt = class Mi {
  constructor({ strings: e, _$litType$: t }, n) {
    let r;
    this.parts = [];
    let s = 0, a = 0;
    const l = e.length - 1, o = this.parts, [c, h] = Rn(e, t);
    if (this.el = Mi.createElement(c, n), K.currentNode = this.el.content, t === 2) {
      const d = this.el.content, u = d.firstChild;
      u.remove(), d.append(...u.childNodes);
    }
    for (; (r = K.nextNode()) !== null && o.length < l; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) {
          const d = [];
          for (const u of r.getAttributeNames()) if (u.endsWith(ot) || u.startsWith(j)) {
            const g = h[a++];
            if (d.push(u), g !== void 0) {
              const m = r.getAttribute(g.toLowerCase() + ot).split(j), _ = /([.?@])?(.*)/.exec(g);
              o.push({ type: 1, index: s, name: _[2], strings: m, ctor: _[1] === "." ? Wn : _[1] === "?" ? Dn : _[1] === "@" ? Hn : Ze });
            } else o.push({ type: 6, index: s });
          }
          for (const u of d) r.removeAttribute(u);
        }
        if (Ci.test(r.tagName)) {
          const d = r.textContent.split(j), u = d.length - 1;
          if (u > 0) {
            r.textContent = oe ? oe.emptyScript : "";
            for (let g = 0; g < u; g++) r.append(d[g], Oe()), K.nextNode(), o.push({ type: 2, index: ++s });
            r.append(d[u], Oe());
          }
        }
      } else if (r.nodeType === 8) if (r.data === ki) o.push({ type: 2, index: s });
      else {
        let d = -1;
        for (; (d = r.data.indexOf(j, d + 1)) !== -1; ) o.push({ type: 7, index: s }), d += j.length - 1;
      }
      s++;
    }
  }
  static createElement(e, t) {
    const n = J.createElement("template");
    return n.innerHTML = e, n;
  }
};
function ce(i, e, t = i, n) {
  var r, s, a, l;
  if (e === le) return e;
  let o = n !== void 0 ? (r = t._$Co) === null || r === void 0 ? void 0 : r[n] : t._$Cl;
  const c = ke(e) ? void 0 : e._$litDirective$;
  return o?.constructor !== c && ((s = o?._$AO) === null || s === void 0 || s.call(o, !1), c === void 0 ? o = void 0 : (o = new c(i), o._$AT(i, t, n)), n !== void 0 ? ((a = (l = t)._$Co) !== null && a !== void 0 ? a : l._$Co = [])[n] = o : t._$Cl = o), o !== void 0 && (e = ce(i, o._$AS(i, e.values), o, n)), e;
}
let Pn = class {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    var t;
    const { el: { content: n }, parts: r } = this._$AD, s = ((t = e?.creationScope) !== null && t !== void 0 ? t : J).importNode(n, !0);
    K.currentNode = s;
    let a = K.nextNode(), l = 0, o = 0, c = r[0];
    for (; c !== void 0; ) {
      if (l === c.index) {
        let h;
        c.type === 2 ? h = new Ti(a, a.nextSibling, this, e) : c.type === 1 ? h = new c.ctor(a, c.name, c.strings, this, e) : c.type === 6 && (h = new Un(a, this, e)), this._$AV.push(h), c = r[++o];
      }
      l !== c?.index && (a = K.nextNode(), l++);
    }
    return K.currentNode = J, s;
  }
  v(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}, Ti = class Li {
  constructor(e, t, n, r) {
    var s;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cp = (s = r?.isConnected) === null || s === void 0 || s;
  }
  get _$AU() {
    var e, t;
    return (t = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && t !== void 0 ? t : this._$Cp;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = ce(this, e, t), ke(e) ? e === A || e == null || e === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : e !== this._$AH && e !== le && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : En(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== A && ke(this._$AH) ? this._$AA.nextSibling.data = e : this.$(J.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var t;
    const { values: n, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = lt.createElement(Si(r.h, r.h[0]), this.options)), r);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === s) this._$AH.v(n);
    else {
      const a = new Pn(s, this), l = a.u(this.options);
      a.v(n), this.$(l), this._$AH = a;
    }
  }
  _$AC(e) {
    let t = Xt.get(e.strings);
    return t === void 0 && Xt.set(e.strings, t = new lt(e)), t;
  }
  T(e) {
    Ai(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, r = 0;
    for (const s of e) r === t.length ? t.push(n = new Li(this.k(Oe()), this.k(Oe()), this, this.options)) : n = t[r], n._$AI(s), r++;
    r < t.length && (this._$AR(n && n._$AB.nextSibling, r), t.length = r);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const r = e.nextSibling;
      e.remove(), e = r;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cp = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
};
class Ze {
  constructor(e, t, n, r, s) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = s, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, n, r) {
    const s = this.strings;
    let a = !1;
    if (s === void 0) e = ce(this, e, t, 0), a = !ke(e) || e !== this._$AH && e !== le, a && (this._$AH = e);
    else {
      const l = e;
      let o, c;
      for (e = s[0], o = 0; o < s.length - 1; o++) c = ce(this, l[n + o], t, o), c === le && (c = this._$AH[o]), a || (a = !ke(c) || c !== this._$AH[o]), c === A ? e = A : e !== A && (e += (c ?? "") + s[o + 1]), this._$AH[o] = c;
    }
    a && !r && this.j(e);
  }
  j(e) {
    e === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
let Wn = class extends Ze {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === A ? void 0 : e;
  }
};
const zn = oe ? oe.emptyScript : "";
let Dn = class extends Ze {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== A ? this.element.setAttribute(this.name, zn) : this.element.removeAttribute(this.name);
  }
}, Hn = class extends Ze {
  constructor(e, t, n, r, s) {
    super(e, t, n, r, s), this.type = 5;
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = ce(this, e, t, 0)) !== null && n !== void 0 ? n : A) === le) return;
    const r = this._$AH, s = e === A && r !== A || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, a = e !== A && (r === A || s);
    s && this.element.removeEventListener(this.name, this, r), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && n !== void 0 ? n : this.element, e) : this._$AH.handleEvent(e);
  }
};
class Un {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ce(this, e);
  }
}
const Jt = Ue.litHtmlPolyfillSupport;
Jt?.(lt, Ti), ((et = Ue.litHtmlVersions) !== null && et !== void 0 ? et : Ue.litHtmlVersions = []).push("2.8.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const On = (i) => i.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const we = (i, e) => {
  var t, n;
  const r = i._$AN;
  if (r === void 0) return !1;
  for (const s of r) (n = (t = s)._$AO) === null || n === void 0 || n.call(t, e, !1), we(s, e);
  return !0;
}, Ge = (i) => {
  let e, t;
  do {
    if ((e = i._$AM) === void 0) break;
    t = e._$AN, t.delete(i), i = e;
  } while (t?.size === 0);
}, Ni = (i) => {
  for (let e; e = i._$AM; i = e) {
    let t = e._$AN;
    if (t === void 0) e._$AN = t = /* @__PURE__ */ new Set();
    else if (t.has(i)) break;
    t.add(i), Bn(e);
  }
};
function Gn(i) {
  this._$AN !== void 0 ? (Ge(this), this._$AM = i, Ni(this)) : this._$AM = i;
}
function In(i, e = !1, t = 0) {
  const n = this._$AH, r = this._$AN;
  if (r !== void 0 && r.size !== 0) if (e) if (Array.isArray(n)) for (let s = t; s < n.length; s++) we(n[s], !1), Ge(n[s]);
  else n != null && (we(n, !1), Ge(n));
  else we(this, i);
}
const Bn = (i) => {
  var e, t, n, r;
  i.type == _i.CHILD && ((e = (n = i)._$AP) !== null && e !== void 0 || (n._$AP = In), (t = (r = i)._$AQ) !== null && t !== void 0 || (r._$AQ = Gn));
};
class jn extends $i {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, t, n) {
    super._$AT(e, t, n), Ni(this), this.isConnected = e._$AU;
  }
  _$AO(e, t = !0) {
    var n, r;
    e !== this.isConnected && (this.isConnected = e, e ? (n = this.reconnected) === null || n === void 0 || n.call(this) : (r = this.disconnected) === null || r === void 0 || r.call(this)), t && (we(this, e), Ge(this));
  }
  setValue(e) {
    if (On(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const t = [...this._$Ct._$AH];
      t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
class Fn extends jn {
  constructor() {
    super(...arguments), this.langChangedSubscription = null, this.getValue = (() => "");
  }
  /**
   * Sets up the directive by setting the getValue property and subscribing.
   * When subclassing LangChangedDirectiveBase this function should be call in the render function.
   * @param getValue
   */
  renderValue(e) {
    return this.getValue = e, this.subscribe(), this.getValue();
  }
  /**
   * Called when the lang changed event is dispatched.
   * @param e
   */
  langChanged(e) {
    this.setValue(this.getValue(e));
  }
  /**
   * Subscribes to the lang changed event.
   */
  subscribe() {
    this.langChangedSubscription == null && (this.langChangedSubscription = Tn(this.langChanged.bind(this)));
  }
  /**
   * Unsubscribes from the lang changed event.
   */
  unsubscribe() {
    this.langChangedSubscription != null && this.langChangedSubscription();
  }
  /**
   * Unsubscribes when disconnected.
   */
  disconnected() {
    this.unsubscribe();
  }
  /**
   * Subscribes when reconnected.
   */
  reconnected() {
    this.subscribe();
  }
}
class Vn extends Fn {
  render(e, t, n) {
    return this.renderValue(() => x(e, t, n));
  }
}
const $ = Ln(Vn);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ei extends $i {
  constructor(e) {
    if (super(e), this.et = A, e.type !== _i.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === A || e == null) return this.ft = void 0, this.et = e;
    if (e === le) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.et) return this.ft;
    this.et = e;
    const t = [e];
    return t.raw = t, this.ft = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
ei.directiveName = "unsafeHTML", ei.resultType = 1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ei = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer((() => {
    customElements.define(i, e);
  })) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zn = { attribute: !0, type: String, converter: De, reflect: !1, hasChanged: ft }, qn = (i = Zn, e, t) => {
  const { kind: n, metadata: r } = t;
  let s = globalThis.litPropertyMetadata.get(r);
  if (s === void 0 && globalThis.litPropertyMetadata.set(r, s = /* @__PURE__ */ new Map()), n === "setter" && ((i = Object.create(i)).wrapped = !0), s.set(t.name, i), n === "accessor") {
    const { name: a } = t;
    return { set(l) {
      const o = e.get.call(this);
      e.set.call(this, l), this.requestUpdate(a, o, i);
    }, init(l) {
      return l !== void 0 && this.C(a, void 0, i, l), l;
    } };
  }
  if (n === "setter") {
    const { name: a } = t;
    return function(l) {
      const o = this[a];
      e.call(this, l), this.requestUpdate(a, o, i);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function de(i) {
  return (e, t) => typeof t == "object" ? qn(i, e, t) : ((n, r, s) => {
    const a = r.hasOwnProperty(s);
    return r.constructor.createProperty(s, n), a ? Object.getOwnPropertyDescriptor(r, s) : void 0;
  })(i, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function qe(i) {
  return de({ ...i, state: !0, attribute: !1 });
}
function wt() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var te = wt();
function Ri(i) {
  te = i;
}
var xe = { exec: () => null };
function w(i, e = "") {
  let t = typeof i == "string" ? i : i.source, n = { replace: (r, s) => {
    let a = typeof s == "string" ? s : s.source;
    return a = a.replace(E.caret, "$1"), t = t.replace(r, a), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var E = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (i) => new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}#`), htmlBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}<(?:[a-z].*>|!--)`, "i") }, Qn = /^(?:[ \t]*(?:\n|$))+/, Yn = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Kn = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ce = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Xn = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, xt = /(?:[*+-]|\d{1,9}[.)])/, Pi = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Wi = w(Pi).replace(/bull/g, xt).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Jn = w(Pi).replace(/bull/g, xt).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), bt = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, er = /^[^\n]+/, _t = /(?!\s*\])(?:\\.|[^\[\]\\])+/, tr = w(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _t).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ir = w(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, xt).getRegex(), Qe = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", $t = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, nr = w("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", $t).replace("tag", Qe).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), zi = w(bt).replace("hr", Ce).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qe).getRegex(), rr = w(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", zi).getRegex(), kt = { blockquote: rr, code: Yn, def: tr, fences: Kn, heading: Xn, hr: Ce, html: nr, lheading: Wi, list: ir, newline: Qn, paragraph: zi, table: xe, text: er }, ti = w("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ce).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qe).getRegex(), sr = { ...kt, lheading: Jn, table: ti, paragraph: w(bt).replace("hr", Ce).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ti).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qe).getRegex() }, ar = { ...kt, html: w(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", $t).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: xe, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: w(bt).replace("hr", Ce).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Wi).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, or = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, lr = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Di = /^( {2,}|\\)\n(?!\s*$)/, cr = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ye = /[\p{P}\p{S}]/u, At = /[\s\p{P}\p{S}]/u, Hi = /[^\s\p{P}\p{S}]/u, dr = w(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, At).getRegex(), Ui = /(?!~)[\p{P}\p{S}]/u, hr = /(?!~)[\s\p{P}\p{S}]/u, pr = /(?:[^\s\p{P}\p{S}]|~)/u, ur = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, Oi = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, fr = w(Oi, "u").replace(/punct/g, Ye).getRegex(), gr = w(Oi, "u").replace(/punct/g, Ui).getRegex(), Gi = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", mr = w(Gi, "gu").replace(/notPunctSpace/g, Hi).replace(/punctSpace/g, At).replace(/punct/g, Ye).getRegex(), yr = w(Gi, "gu").replace(/notPunctSpace/g, pr).replace(/punctSpace/g, hr).replace(/punct/g, Ui).getRegex(), vr = w("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Hi).replace(/punctSpace/g, At).replace(/punct/g, Ye).getRegex(), wr = w(/\\(punct)/, "gu").replace(/punct/g, Ye).getRegex(), xr = w(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), br = w($t).replace("(?:-->|$)", "-->").getRegex(), _r = w("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", br).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ie = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, $r = w(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Ie).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ii = w(/^!?\[(label)\]\[(ref)\]/).replace("label", Ie).replace("ref", _t).getRegex(), Bi = w(/^!?\[(ref)\](?:\[\])?/).replace("ref", _t).getRegex(), kr = w("reflink|nolink(?!\\()", "g").replace("reflink", Ii).replace("nolink", Bi).getRegex(), Ct = { _backpedal: xe, anyPunctuation: wr, autolink: xr, blockSkip: ur, br: Di, code: lr, del: xe, emStrongLDelim: fr, emStrongRDelimAst: mr, emStrongRDelimUnd: vr, escape: or, link: $r, nolink: Bi, punctuation: dr, reflink: Ii, reflinkSearch: kr, tag: _r, text: cr, url: xe }, Ar = { ...Ct, link: w(/^!?\[(label)\]\((.*?)\)/).replace("label", Ie).getRegex(), reflink: w(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ie).getRegex() }, ct = { ...Ct, emStrongRDelimAst: yr, emStrongLDelim: gr, url: w(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, Cr = { ...ct, br: w(Di).replace("{2,}", "*").getRegex(), text: w(ct.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Pe = { normal: kt, gfm: sr, pedantic: ar }, me = { normal: Ct, gfm: ct, breaks: Cr, pedantic: Ar }, Sr = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ii = (i) => Sr[i];
function H(i, e) {
  if (e) {
    if (E.escapeTest.test(i)) return i.replace(E.escapeReplace, ii);
  } else if (E.escapeTestNoEncode.test(i)) return i.replace(E.escapeReplaceNoEncode, ii);
  return i;
}
function ni(i) {
  try {
    i = encodeURI(i).replace(E.percentDecode, "%");
  } catch {
    return null;
  }
  return i;
}
function ri(i, e) {
  let t = i.replace(E.findPipe, (s, a, l) => {
    let o = !1, c = a;
    for (; --c >= 0 && l[c] === "\\"; ) o = !o;
    return o ? "|" : " |";
  }), n = t.split(E.splitPipe), r = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; r < n.length; r++) n[r] = n[r].trim().replace(E.slashPipe, "|");
  return n;
}
function ye(i, e, t) {
  let n = i.length;
  if (n === 0) return "";
  let r = 0;
  for (; r < n && i.charAt(n - r - 1) === e; )
    r++;
  return i.slice(0, n - r);
}
function Mr(i, e) {
  if (i.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < i.length; n++) if (i[n] === "\\") n++;
  else if (i[n] === e[0]) t++;
  else if (i[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function si(i, e, t, n, r) {
  let s = e.href, a = e.title || null, l = i[1].replace(r.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let o = { type: i[0].charAt(0) === "!" ? "image" : "link", raw: t, href: s, title: a, text: l, tokens: n.inlineTokens(l) };
  return n.state.inLink = !1, o;
}
function Tr(i, e, t) {
  let n = i.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let r = n[1];
  return e.split(`
`).map((s) => {
    let a = s.match(t.other.beginningSpace);
    if (a === null) return s;
    let [l] = a;
    return l.length >= r.length ? s.slice(r.length) : s;
  }).join(`
`);
}
var Be = class {
  options;
  rules;
  lexer;
  constructor(i) {
    this.options = i || te;
  }
  space(i) {
    let e = this.rules.block.newline.exec(i);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(i) {
    let e = this.rules.block.code.exec(i);
    if (e) {
      let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : ye(t, `
`) };
    }
  }
  fences(i) {
    let e = this.rules.block.fences.exec(i);
    if (e) {
      let t = e[0], n = Tr(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    }
  }
  heading(i) {
    let e = this.rules.block.heading.exec(i);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let n = ye(t, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (t = n.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(i) {
    let e = this.rules.block.hr.exec(i);
    if (e) return { type: "hr", raw: ye(e[0], `
`) };
  }
  blockquote(i) {
    let e = this.rules.block.blockquote.exec(i);
    if (e) {
      let t = ye(e[0], `
`).split(`
`), n = "", r = "", s = [];
      for (; t.length > 0; ) {
        let a = !1, l = [], o;
        for (o = 0; o < t.length; o++) if (this.rules.other.blockquoteStart.test(t[o])) l.push(t[o]), a = !0;
        else if (!a) l.push(t[o]);
        else break;
        t = t.slice(o);
        let c = l.join(`
`), h = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${c}` : c, r = r ? `${r}
${h}` : h;
        let d = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(h, s, !0), this.lexer.state.top = d, t.length === 0) break;
        let u = s.at(-1);
        if (u?.type === "code") break;
        if (u?.type === "blockquote") {
          let g = u, m = g.raw + `
` + t.join(`
`), _ = this.blockquote(m);
          s[s.length - 1] = _, n = n.substring(0, n.length - g.raw.length) + _.raw, r = r.substring(0, r.length - g.text.length) + _.text;
          break;
        } else if (u?.type === "list") {
          let g = u, m = g.raw + `
` + t.join(`
`), _ = this.list(m);
          s[s.length - 1] = _, n = n.substring(0, n.length - u.raw.length) + _.raw, r = r.substring(0, r.length - g.raw.length) + _.raw, t = m.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: n, tokens: s, text: r };
    }
  }
  list(i) {
    let e = this.rules.block.list.exec(i);
    if (e) {
      let t = e[1].trim(), n = t.length > 1, r = { type: "list", raw: "", ordered: n, start: n ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = n ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = n ? t : "[*+-]");
      let s = this.rules.other.listItemRegex(t), a = !1;
      for (; i; ) {
        let o = !1, c = "", h = "";
        if (!(e = s.exec(i)) || this.rules.block.hr.test(i)) break;
        c = e[0], i = i.substring(c.length);
        let d = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (y) => " ".repeat(3 * y.length)), u = i.split(`
`, 1)[0], g = !d.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, h = d.trimStart()) : g ? m = e[1].length + 1 : (m = e[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, h = d.slice(m), m += e[1].length), g && this.rules.other.blankLine.test(u) && (c += u + `
`, i = i.substring(u.length + 1), o = !0), !o) {
          let y = this.rules.other.nextBulletRegex(m), R = this.rules.other.hrRegex(m), he = this.rules.other.fencesBeginRegex(m), V = this.rules.other.headingBeginRegex(m), Xe = this.rules.other.htmlBeginRegex(m);
          for (; i; ) {
            let pe = i.split(`
`, 1)[0], Z;
            if (u = pe, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), Z = u) : Z = u.replace(this.rules.other.tabCharGlobal, "    "), he.test(u) || V.test(u) || Xe.test(u) || y.test(u) || R.test(u)) break;
            if (Z.search(this.rules.other.nonSpaceChar) >= m || !u.trim()) h += `
` + Z.slice(m);
            else {
              if (g || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || he.test(d) || V.test(d) || R.test(d)) break;
              h += `
` + u;
            }
            !g && !u.trim() && (g = !0), c += pe + `
`, i = i.substring(pe.length + 1), d = Z.slice(m);
          }
        }
        r.loose || (a ? r.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (a = !0));
        let _ = null, D;
        this.options.gfm && (_ = this.rules.other.listIsTask.exec(h), _ && (D = _[0] !== "[ ] ", h = h.replace(this.rules.other.listReplaceTask, ""))), r.items.push({ type: "list_item", raw: c, task: !!_, checked: D, loose: !1, text: h, tokens: [] }), r.raw += c;
      }
      let l = r.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      r.raw = r.raw.trimEnd();
      for (let o = 0; o < r.items.length; o++) if (this.lexer.state.top = !1, r.items[o].tokens = this.lexer.blockTokens(r.items[o].text, []), !r.loose) {
        let c = r.items[o].tokens.filter((d) => d.type === "space"), h = c.length > 0 && c.some((d) => this.rules.other.anyLine.test(d.raw));
        r.loose = h;
      }
      if (r.loose) for (let o = 0; o < r.items.length; o++) r.items[o].loose = !0;
      return r;
    }
  }
  html(i) {
    let e = this.rules.block.html.exec(i);
    if (e) return { type: "html", block: !0, raw: e[0], pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: e[0] };
  }
  def(i) {
    let e = this.rules.block.def.exec(i);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: n, title: r };
    }
  }
  table(i) {
    let e = this.rules.block.table.exec(i);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = ri(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === n.length) {
      for (let a of n) this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < t.length; a++) s.header.push({ text: t[a], tokens: this.lexer.inline(t[a]), header: !0, align: s.align[a] });
      for (let a of r) s.rows.push(ri(a, s.header.length).map((l, o) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: s.align[o] })));
      return s;
    }
  }
  lheading(i) {
    let e = this.rules.block.lheading.exec(i);
    if (e) return { type: "heading", raw: e[0], depth: e[2].charAt(0) === "=" ? 1 : 2, text: e[1], tokens: this.lexer.inline(e[1]) };
  }
  paragraph(i) {
    let e = this.rules.block.paragraph.exec(i);
    if (e) {
      let t = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(i) {
    let e = this.rules.block.text.exec(i);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(i) {
    let e = this.rules.inline.escape.exec(i);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(i) {
    let e = this.rules.inline.tag.exec(i);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: e[0] };
  }
  link(i) {
    let e = this.rules.inline.link.exec(i);
    if (e) {
      let t = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
        if (!this.rules.other.endAngleBracket.test(t)) return;
        let s = ye(t.slice(0, -1), "\\");
        if ((t.length - s.length) % 2 === 0) return;
      } else {
        let s = Mr(e[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let a = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + s;
          e[2] = e[2].substring(0, s), e[0] = e[0].substring(0, a).trim(), e[3] = "";
        }
      }
      let n = e[2], r = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(n);
        s && (n = s[1], r = s[3]);
      } else r = e[3] ? e[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? n = n.slice(1) : n = n.slice(1, -1)), si(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: r && r.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(i, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(i)) || (t = this.rules.inline.nolink.exec(i))) {
      let n = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = e[n.toLowerCase()];
      if (!r) {
        let s = t[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return si(t, r, t[0], this.lexer, this.rules);
    }
  }
  emStrong(i, e, t = "") {
    let n = this.rules.inline.emStrongLDelim.exec(i);
    if (!(!n || n[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[2]) || !t || this.rules.inline.punctuation.exec(t))) {
      let r = [...n[0]].length - 1, s, a, l = r, o = 0, c = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, e = e.slice(-1 * i.length + r); (n = c.exec(e)) != null; ) {
        if (s = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !s) continue;
        if (a = [...s].length, n[3] || n[4]) {
          l += a;
          continue;
        } else if ((n[5] || n[6]) && r % 3 && !((r + a) % 3)) {
          o += a;
          continue;
        }
        if (l -= a, l > 0) continue;
        a = Math.min(a, a + l + o);
        let h = [...n[0]][0].length, d = i.slice(0, r + n.index + h + a);
        if (Math.min(r, a) % 2) {
          let g = d.slice(1, -1);
          return { type: "em", raw: d, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let u = d.slice(2, -2);
        return { type: "strong", raw: d, text: u, tokens: this.lexer.inlineTokens(u) };
      }
    }
  }
  codespan(i) {
    let e = this.rules.inline.code.exec(i);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(t), r = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return n && r && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
    }
  }
  br(i) {
    let e = this.rules.inline.br.exec(i);
    if (e) return { type: "br", raw: e[0] };
  }
  del(i) {
    let e = this.rules.inline.del.exec(i);
    if (e) return { type: "del", raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
  }
  autolink(i) {
    let e = this.rules.inline.autolink.exec(i);
    if (e) {
      let t, n;
      return e[2] === "@" ? (t = e[1], n = "mailto:" + t) : (t = e[1], n = t), { type: "link", raw: e[0], text: t, href: n, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(i) {
    let e;
    if (e = this.rules.inline.url.exec(i)) {
      let t, n;
      if (e[2] === "@") t = e[0], n = "mailto:" + t;
      else {
        let r;
        do
          r = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (r !== e[0]);
        t = e[0], e[1] === "www." ? n = "http://" + e[0] : n = e[0];
      }
      return { type: "link", raw: e[0], text: t, href: n, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  inlineText(i) {
    let e = this.rules.inline.text.exec(i);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, O = class dt {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || te, this.options.tokenizer = this.options.tokenizer || new Be(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: E, block: Pe.normal, inline: me.normal };
    this.options.pedantic ? (t.block = Pe.pedantic, t.inline = me.pedantic) : this.options.gfm && (t.block = Pe.gfm, this.options.breaks ? t.inline = me.breaks : t.inline = me.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Pe, inline: me };
  }
  static lex(e, t) {
    return new dt(t).lex(e);
  }
  static lexInline(e, t) {
    return new dt(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(E.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = !1) {
    for (this.options.pedantic && (e = e.replace(E.tabCharGlobal, "    ").replace(E.spaceLine, "")); e; ) {
      let r;
      if (this.options.extensions?.block?.some((a) => (r = a.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let a = t.at(-1);
        r.raw.length === 1 && a !== void 0 ? a.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let a = t.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.text, this.inlineQueue.at(-1).src = a.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let a = t.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let s = e;
      if (this.options.extensions?.startBlock) {
        let a = 1 / 0, l = e.slice(1), o;
        this.options.extensions.startBlock.forEach((c) => {
          o = c.call({ lexer: this }, l), typeof o == "number" && o >= 0 && (a = Math.min(a, o));
        }), a < 1 / 0 && a >= 0 && (s = e.substring(0, a + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(s))) {
        let a = t.at(-1);
        n && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = s.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let a = t.at(-1);
        a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r);
        continue;
      }
      if (e) {
        let a = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(a);
          break;
        } else throw new Error(a);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n = e, r = null;
    if (this.tokens.links) {
      let l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) l.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let s = !1, a = "";
    for (; e; ) {
      s || (a = ""), s = !1;
      let l;
      if (this.options.extensions?.inline?.some((c) => (l = c.call({ lexer: this }, e, t)) ? (e = e.substring(l.raw.length), t.push(l), !0) : !1)) continue;
      if (l = this.tokenizer.escape(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.tag(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.link(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(l.raw.length);
        let c = t.at(-1);
        l.type === "text" && c?.type === "text" ? (c.raw += l.raw, c.text += l.text) : t.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(e, n, a)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.codespan(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.br(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.del(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.autolink(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (!this.state.inLink && (l = this.tokenizer.url(e))) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      let o = e;
      if (this.options.extensions?.startInline) {
        let c = 1 / 0, h = e.slice(1), d;
        this.options.extensions.startInline.forEach((u) => {
          d = u.call({ lexer: this }, h), typeof d == "number" && d >= 0 && (c = Math.min(c, d));
        }), c < 1 / 0 && c >= 0 && (o = e.substring(0, c + 1));
      }
      if (l = this.tokenizer.inlineText(o)) {
        e = e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (a = l.raw.slice(-1)), s = !0;
        let c = t.at(-1);
        c?.type === "text" ? (c.raw += l.raw, c.text += l.text) : t.push(l);
        continue;
      }
      if (e) {
        let c = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        } else throw new Error(c);
      }
    }
    return t;
  }
}, je = class {
  options;
  parser;
  constructor(i) {
    this.options = i || te;
  }
  space(i) {
    return "";
  }
  code({ text: i, lang: e, escaped: t }) {
    let n = (e || "").match(E.notSpaceStart)?.[0], r = i.replace(E.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + H(n) + '">' + (t ? r : H(r, !0)) + `</code></pre>
` : "<pre><code>" + (t ? r : H(r, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: i }) {
    return `<blockquote>
${this.parser.parse(i)}</blockquote>
`;
  }
  html({ text: i }) {
    return i;
  }
  def(i) {
    return "";
  }
  heading({ tokens: i, depth: e }) {
    return `<h${e}>${this.parser.parseInline(i)}</h${e}>
`;
  }
  hr(i) {
    return `<hr>
`;
  }
  list(i) {
    let e = i.ordered, t = i.start, n = "";
    for (let a = 0; a < i.items.length; a++) {
      let l = i.items[a];
      n += this.listitem(l);
    }
    let r = e ? "ol" : "ul", s = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + r + s + `>
` + n + "</" + r + `>
`;
  }
  listitem(i) {
    let e = "";
    if (i.task) {
      let t = this.checkbox({ checked: !!i.checked });
      i.loose ? i.tokens[0]?.type === "paragraph" ? (i.tokens[0].text = t + " " + i.tokens[0].text, i.tokens[0].tokens && i.tokens[0].tokens.length > 0 && i.tokens[0].tokens[0].type === "text" && (i.tokens[0].tokens[0].text = t + " " + H(i.tokens[0].tokens[0].text), i.tokens[0].tokens[0].escaped = !0)) : i.tokens.unshift({ type: "text", raw: t + " ", text: t + " ", escaped: !0 }) : e += t + " ";
    }
    return e += this.parser.parse(i.tokens, !!i.loose), `<li>${e}</li>
`;
  }
  checkbox({ checked: i }) {
    return "<input " + (i ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: i }) {
    return `<p>${this.parser.parseInline(i)}</p>
`;
  }
  table(i) {
    let e = "", t = "";
    for (let r = 0; r < i.header.length; r++) t += this.tablecell(i.header[r]);
    e += this.tablerow({ text: t });
    let n = "";
    for (let r = 0; r < i.rows.length; r++) {
      let s = i.rows[r];
      t = "";
      for (let a = 0; a < s.length; a++) t += this.tablecell(s[a]);
      n += this.tablerow({ text: t });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
`;
  }
  tablerow({ text: i }) {
    return `<tr>
${i}</tr>
`;
  }
  tablecell(i) {
    let e = this.parser.parseInline(i.tokens), t = i.header ? "th" : "td";
    return (i.align ? `<${t} align="${i.align}">` : `<${t}>`) + e + `</${t}>
`;
  }
  strong({ tokens: i }) {
    return `<strong>${this.parser.parseInline(i)}</strong>`;
  }
  em({ tokens: i }) {
    return `<em>${this.parser.parseInline(i)}</em>`;
  }
  codespan({ text: i }) {
    return `<code>${H(i, !0)}</code>`;
  }
  br(i) {
    return "<br>";
  }
  del({ tokens: i }) {
    return `<del>${this.parser.parseInline(i)}</del>`;
  }
  link({ href: i, title: e, tokens: t }) {
    let n = this.parser.parseInline(t), r = ni(i);
    if (r === null) return n;
    i = r;
    let s = '<a href="' + i + '"';
    return e && (s += ' title="' + H(e) + '"'), s += ">" + n + "</a>", s;
  }
  image({ href: i, title: e, text: t, tokens: n }) {
    n && (t = this.parser.parseInline(n, this.parser.textRenderer));
    let r = ni(i);
    if (r === null) return H(t);
    i = r;
    let s = `<img src="${i}" alt="${t}"`;
    return e && (s += ` title="${H(e)}"`), s += ">", s;
  }
  text(i) {
    return "tokens" in i && i.tokens ? this.parser.parseInline(i.tokens) : "escaped" in i && i.escaped ? i.text : H(i.text);
  }
}, St = class {
  strong({ text: i }) {
    return i;
  }
  em({ text: i }) {
    return i;
  }
  codespan({ text: i }) {
    return i;
  }
  del({ text: i }) {
    return i;
  }
  html({ text: i }) {
    return i;
  }
  text({ text: i }) {
    return i;
  }
  link({ text: i }) {
    return "" + i;
  }
  image({ text: i }) {
    return "" + i;
  }
  br() {
    return "";
  }
}, G = class ht {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || te, this.options.renderer = this.options.renderer || new je(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new St();
  }
  static parse(e, t) {
    return new ht(t).parse(e);
  }
  static parseInline(e, t) {
    return new ht(t).parseInline(e);
  }
  parse(e, t = !0) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let s = e[r];
      if (this.options.extensions?.renderers?.[s.type]) {
        let l = s, o = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(l.type)) {
          n += o || "";
          continue;
        }
      }
      let a = s;
      switch (a.type) {
        case "space": {
          n += this.renderer.space(a);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(a);
          continue;
        }
        case "code": {
          n += this.renderer.code(a);
          continue;
        }
        case "table": {
          n += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          n += this.renderer.list(a);
          continue;
        }
        case "html": {
          n += this.renderer.html(a);
          continue;
        }
        case "def": {
          n += this.renderer.def(a);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let l = a, o = this.renderer.text(l);
          for (; r + 1 < e.length && e[r + 1].type === "text"; ) l = e[++r], o += `
` + this.renderer.text(l);
          t ? n += this.renderer.paragraph({ type: "paragraph", raw: o, text: o, tokens: [{ type: "text", raw: o, text: o, escaped: !0 }] }) : n += o;
          continue;
        }
        default: {
          let l = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
  parseInline(e, t = this.renderer) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let s = e[r];
      if (this.options.extensions?.renderers?.[s.type]) {
        let l = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          n += l || "";
          continue;
        }
      }
      let a = s;
      switch (a.type) {
        case "escape": {
          n += t.text(a);
          break;
        }
        case "html": {
          n += t.html(a);
          break;
        }
        case "link": {
          n += t.link(a);
          break;
        }
        case "image": {
          n += t.image(a);
          break;
        }
        case "strong": {
          n += t.strong(a);
          break;
        }
        case "em": {
          n += t.em(a);
          break;
        }
        case "codespan": {
          n += t.codespan(a);
          break;
        }
        case "br": {
          n += t.br(a);
          break;
        }
        case "del": {
          n += t.del(a);
          break;
        }
        case "text": {
          n += t.text(a);
          break;
        }
        default: {
          let l = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
}, ze = class {
  options;
  block;
  constructor(i) {
    this.options = i || te;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(i) {
    return i;
  }
  postprocess(i) {
    return i;
  }
  processAllTokens(i) {
    return i;
  }
  provideLexer() {
    return this.block ? O.lex : O.lexInline;
  }
  provideParser() {
    return this.block ? G.parse : G.parseInline;
  }
}, Lr = class {
  defaults = wt();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = G;
  Renderer = je;
  TextRenderer = St;
  Lexer = O;
  Tokenizer = Be;
  Hooks = ze;
  constructor(...i) {
    this.use(...i);
  }
  walkTokens(i, e) {
    let t = [];
    for (let n of i) switch (t = t.concat(e.call(this, n)), n.type) {
      case "table": {
        let r = n;
        for (let s of r.header) t = t.concat(this.walkTokens(s.tokens, e));
        for (let s of r.rows) for (let a of s) t = t.concat(this.walkTokens(a.tokens, e));
        break;
      }
      case "list": {
        let r = n;
        t = t.concat(this.walkTokens(r.items, e));
        break;
      }
      default: {
        let r = n;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((s) => {
          let a = r[s].flat(1 / 0);
          t = t.concat(this.walkTokens(a, e));
        }) : r.tokens && (t = t.concat(this.walkTokens(r.tokens, e)));
      }
    }
    return t;
  }
  use(...i) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return i.forEach((t) => {
      let n = { ...t };
      if (n.async = this.defaults.async || n.async || !1, t.extensions && (t.extensions.forEach((r) => {
        if (!r.name) throw new Error("extension name required");
        if ("renderer" in r) {
          let s = e.renderers[r.name];
          s ? e.renderers[r.name] = function(...a) {
            let l = r.renderer.apply(this, a);
            return l === !1 && (l = s.apply(this, a)), l;
          } : e.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = e[r.level];
          s ? s.unshift(r.tokenizer) : e[r.level] = [r.tokenizer], r.start && (r.level === "block" ? e.startBlock ? e.startBlock.push(r.start) : e.startBlock = [r.start] : r.level === "inline" && (e.startInline ? e.startInline.push(r.start) : e.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (e.childTokens[r.name] = r.childTokens);
      }), n.extensions = e), t.renderer) {
        let r = this.defaults.renderer || new je(this.defaults);
        for (let s in t.renderer) {
          if (!(s in r)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let a = s, l = t.renderer[a], o = r[a];
          r[a] = (...c) => {
            let h = l.apply(r, c);
            return h === !1 && (h = o.apply(r, c)), h || "";
          };
        }
        n.renderer = r;
      }
      if (t.tokenizer) {
        let r = this.defaults.tokenizer || new Be(this.defaults);
        for (let s in t.tokenizer) {
          if (!(s in r)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let a = s, l = t.tokenizer[a], o = r[a];
          r[a] = (...c) => {
            let h = l.apply(r, c);
            return h === !1 && (h = o.apply(r, c)), h;
          };
        }
        n.tokenizer = r;
      }
      if (t.hooks) {
        let r = this.defaults.hooks || new ze();
        for (let s in t.hooks) {
          if (!(s in r)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let a = s, l = t.hooks[a], o = r[a];
          ze.passThroughHooks.has(s) ? r[a] = (c) => {
            if (this.defaults.async) return Promise.resolve(l.call(r, c)).then((d) => o.call(r, d));
            let h = l.call(r, c);
            return o.call(r, h);
          } : r[a] = (...c) => {
            let h = l.apply(r, c);
            return h === !1 && (h = o.apply(r, c)), h;
          };
        }
        n.hooks = r;
      }
      if (t.walkTokens) {
        let r = this.defaults.walkTokens, s = t.walkTokens;
        n.walkTokens = function(a) {
          let l = [];
          return l.push(s.call(this, a)), r && (l = l.concat(r.call(this, a))), l;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(i) {
    return this.defaults = { ...this.defaults, ...i }, this;
  }
  lexer(i, e) {
    return O.lex(i, e ?? this.defaults);
  }
  parser(i, e) {
    return G.parse(i, e ?? this.defaults);
  }
  parseMarkdown(i) {
    return (e, t) => {
      let n = { ...t }, r = { ...this.defaults, ...n }, s = this.onError(!!r.silent, !!r.async);
      if (this.defaults.async === !0 && n.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      r.hooks && (r.hooks.options = r, r.hooks.block = i);
      let a = r.hooks ? r.hooks.provideLexer() : i ? O.lex : O.lexInline, l = r.hooks ? r.hooks.provideParser() : i ? G.parse : G.parseInline;
      if (r.async) return Promise.resolve(r.hooks ? r.hooks.preprocess(e) : e).then((o) => a(o, r)).then((o) => r.hooks ? r.hooks.processAllTokens(o) : o).then((o) => r.walkTokens ? Promise.all(this.walkTokens(o, r.walkTokens)).then(() => o) : o).then((o) => l(o, r)).then((o) => r.hooks ? r.hooks.postprocess(o) : o).catch(s);
      try {
        r.hooks && (e = r.hooks.preprocess(e));
        let o = a(e, r);
        r.hooks && (o = r.hooks.processAllTokens(o)), r.walkTokens && this.walkTokens(o, r.walkTokens);
        let c = l(o, r);
        return r.hooks && (c = r.hooks.postprocess(c)), c;
      } catch (o) {
        return s(o);
      }
    };
  }
  onError(i, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, i) {
        let n = "<p>An error occurred:</p><pre>" + H(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(n) : n;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, ee = new Lr();
function b(i, e) {
  return ee.parse(i, e);
}
b.options = b.setOptions = function(i) {
  return ee.setOptions(i), b.defaults = ee.defaults, Ri(b.defaults), b;
};
b.getDefaults = wt;
b.defaults = te;
b.use = function(...i) {
  return ee.use(...i), b.defaults = ee.defaults, Ri(b.defaults), b;
};
b.walkTokens = function(i, e) {
  return ee.walkTokens(i, e);
};
b.parseInline = ee.parseInline;
b.Parser = G;
b.parser = G.parse;
b.Renderer = je;
b.TextRenderer = St;
b.Lexer = O;
b.lexer = O.lex;
b.Tokenizer = Be;
b.Hooks = ze;
b.parse = b;
b.options;
b.setOptions;
b.use;
b.walkTokens;
b.parseInline;
G.parse;
O.lex;
const T = [
  {
    name: "entity",
    required: !0,
    selector: {
      entity: {
        domain: "weather"
      }
    }
  },
  {
    name: "location",
    selector: {
      text: {}
    }
  },
  {
    name: "wind_entity",
    selector: {
      entity: {
        domain: "sensor"
      }
    }
  },
  {
    name: "wind_direction_entity",
    selector: {
      entity: {
        domain: "sensor"
      }
    }
  },
  {
    name: "sunshine_entity",
    selector: {
      entity: {
        domain: "sensor"
      }
    }
  },
  {
    name: "warning_entity",
    selector: {
      entity: {
        domain: "sensor"
      }
    }
  },
  { name: "forecast_hours", selector: { number: { min: 6, max: 18, step: 1 } } },
  {
    name: "show_forecast",
    selector: { boolean: {} }
  },
  {
    name: "show_precipitation",
    selector: { boolean: {} }
  },
  {
    name: "show_temperature",
    selector: { boolean: {} }
  },
  {
    name: "show_sunshine",
    selector: { boolean: {} }
  },
  {
    name: "show_wind",
    selector: { boolean: {} }
  },
  {
    name: "enable_animate_weather_icons",
    selector: { boolean: {} }
  },
  {
    name: "show_warnings",
    selector: { boolean: {} }
  },
  {
    name: "compact_mode",
    selector: { boolean: {} }
  }
], Nr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.92'%20x2='38.52'%20y1='18.75'%20y2='47.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='5%2032%2032;%20-15%2032%2032;%205%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M46.66%2036.2a16.66%2016.66%200%2001-16.78-16.55%2016.29%2016.29%200%2001.55-4.15A16.56%2016.56%200%201048.5%2036.1c-.61.06-1.22.1-1.84.1z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-5%2032%2032;%2015%2032%2032;%20-5%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Er = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/path%3e%3c/svg%3e", Rr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='16.5'%20x2='21.5'%20y1='19.67'%20y2='28.33'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='19'%20cy='24'%20r='5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2019%2024;%20360%2019%2024'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", Pr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='13.58'%20x2='24.15'%20y1='15.57'%20y2='33.87'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='10%2019.22%2024.293;%20-10%2019.22%2024.293;%2010%2019.22%2024.293'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M29.33%2026.68a10.61%2010.61%200%2001-10.68-10.54A10.5%2010.5%200%200119%2013.5a10.54%2010.54%200%201011.5%2013.11%2011.48%2011.48%200%2001-1.17.07z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-10%2019.22%2024.293;%2010%2019.22%2024.293;%20-10%2019.22%2024.293'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", Wr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='27.5'%20x2='36.5'%20y1='50.21'%20y2='65.79'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20y1='44.21'%20y2='59.79'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2058h30'%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2052h30'%3e%3canimateTransform%20attributeName='transform'%20begin='-4s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3c/svg%3e", zr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.25'%20x2='24.75'%20y1='43.7'%20y2='46.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='30.25'%20x2='31.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='37.25'%20x2='38.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23a)'%20d='M24%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20d='M31%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20d='M38%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3c/svg%3e", Dr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", Hr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23b)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", Ur = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Or = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='30.12'%20x2='31.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.67'%20x2='32.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='g'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M33.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M31%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='-1%20-6;%201%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2031%2045;%20360%2031%2045'/%3e%3canimate%20attributeName='opacity'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23d)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23f)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3c/svg%3e", Gr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='b'%20x1='23.31'%20x2='24.69'%20y1='44.3'%20y2='46.7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='30.31'%20x2='31.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3clinearGradient%20id='h'%20x1='37.31'%20x2='38.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3c/defs%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23e)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23f)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23h)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Ir = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.97'%20x2='42.03'%20y1='14.63'%20y2='49.37'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43%2032a11%2011%200%2011-11-11%2011%2011%200%200111%2011zM25%2014.61l-.48%201a33.68%2033.68%200%2000-3.42%2017.82h0M39%2049.39l.48-1a33.68%2033.68%200%20003.42-17.82h0'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='360%2032%2032;%200%2032%2032'/%3e%3c/path%3e%3c/svg%3e", ai = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='27.56'%20x2='38.27'%20y1='17.64'%20y2='36.19'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='19.96'%20x2='31.37'%20y1='29.03'%20y2='48.8'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e", it = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Br = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='52.7'%20x2='133.4'%20y1='9.6'%20y2='149.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%239ca3af'/%3e%3cstop%20offset='.5'%20stop-color='%239ca3af'/%3e%3cstop%20offset='1'%20stop-color='%236b7280'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='99.5'%20x2='232.6'%20y1='30.7'%20y2='261.4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%236b7280'/%3e%3cstop%20offset='.5'%20stop-color='%236b7280'/%3e%3cstop%20offset='1'%20stop-color='%234b5563'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='1381.3'%20x2='1399.5'%20y1='-1144.7'%20y2='-1097.4'%20gradientTransform='rotate(-9%208002.567%208233.063)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%230b65ed'/%3e%3cstop%20offset='.5'%20stop-color='%230a5ad4'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23c'%20id='d'%20x1='1436.7'%20x2='1454.9'%20y1='-1137'%20y2='-1089.7'%20gradientTransform='rotate(-9%208009.537%208233.037)'/%3e%3clinearGradient%20xlink:href='%23c'%20id='e'%20x1='1492.1'%20x2='1510.3'%20y1='-1129.3'%20y2='-1082.1'%20gradientTransform='rotate(-9%208016.566%208233.078)'/%3e%3csymbol%20id='g'%20viewBox='0%200%20200.3%20126.1'%3e%3cpath%20fill='url(%23a)'%20stroke='%23848b98'%20stroke-miterlimit='10'%20d='M.5%2093.2a32.4%2032.4%200%200032.4%2032.4h129.8v-.1l2.3.1a34.8%2034.8%200%20006.5-68.9%2032.4%2032.4%200%2000-48.5-33%2048.6%2048.6%200%2000-88.6%2037.1h-1.5A32.4%2032.4%200%2000.5%2093.1Z'/%3e%3c/symbol%3e%3csymbol%20id='h'%20viewBox='0%200%20350%20222'%3e%3cpath%20fill='url(%23b)'%20stroke='%235b6472'%20stroke-miterlimit='10'%20stroke-width='6'%20d='m291%20107-2.5.1A83.9%2083.9%200%2000135.6%2043%2056%2056%200%200051%2091a56.6%2056.6%200%2000.8%209A60%2060%200%200063%20219l4-.2v.2h224a56%2056%200%20000-112Z'/%3e%3c/symbol%3e%3csymbol%20id='f'%20overflow='visible'%20viewBox='0%200%20398%20222'%3e%3cuse%20xlink:href='%23g'%20width='200.3'%20height='126.1'%20transform='translate(198%2027)'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-9%200;%209%200;%20-9%200'/%3e%3c/use%3e%3cuse%20xlink:href='%23h'%20width='350'%20height='222'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-18%200;%2018%200;%20-18%200'/%3e%3c/use%3e%3c/symbol%3e%3csymbol%20id='i'%20overflow='visible'%20viewBox='0%200%20129%2057'%3e%3cpath%20fill='url(%23c)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M8.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x1'%20additive='sum'%20attributeName='transform'%20begin='0s;%20x1.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y1'%20attributeName='opacity'%20begin='0s;%20y1.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M64.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x2'%20additive='sum'%20attributeName='transform'%20begin='.33s;%20x2.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y2'%20attributeName='opacity'%20begin='.33s;%20y2.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M120.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x3'%20additive='sum'%20attributeName='transform'%20begin='-.33s;%20x3.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y3'%20attributeName='opacity'%20begin='-.33s;%20y3.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3cuse%20xlink:href='%23f'%20width='398'%20height='222'%20transform='translate(68.84%20145)'/%3e%3cuse%20xlink:href='%23i'%20width='129'%20height='57'%20transform='translate(191.5%20343.5)'/%3e%3c/svg%3e";
var jr = "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z", Fr = "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z", Vr = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z", Zr = "M15,6.79C16.86,7.86 18,9.85 18,12C18,22 6,22 6,22C7.25,21.06 8.38,19.95 9.34,18.71C9.38,18.66 9.41,18.61 9.44,18.55C9.69,18.06 9.5,17.46 9,17.21C7.14,16.14 6,14.15 6,12C6,2 18,2 18,2C16.75,2.94 15.62,4.05 14.66,5.29C14.62,5.34 14.59,5.39 14.56,5.45C14.31,5.94 14.5,6.54 15,6.79M12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14Z", qr = "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z", Qr = "M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z", Yr = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", Kr = "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z", Xr = "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z", Jr = "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59", es = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z", ts = "M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z", ji = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z", is = "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z", ns = "M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z";
const M = (i, e) => i ? (e || (e = "24px"), p`<ha-icon
    .icon="${i}"
    style="font-size:${e}; width: ${e}; height: ${e}"
  />`) : p`<ha-icon
      icon="mdi:weather-sunny"
      style="font-size:${e}; width: ${e}; height: ${e}"
    />`, N = (i, e) => i ? (e || (e = "24px"), z`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${i}" /></svg>`) : z`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${ji}" /></svg>`, nt = (i, e, t, n) => {
  if (!i)
    return M("mdi:weather-sunny", t);
  const r = {
    "clear-night": N(Yr, t),
    cloudy: N(jr, t),
    fog: N(Fr, t),
    hail: N(Vr, t),
    lightning: N(qr, t),
    "lightning-rainy": N(Qr, t),
    partlycloudy: N(Kr, t),
    pouring: N(Xr, t),
    rainy: N(Jr, t),
    snowy: N(es, t),
    "snowy-rainy": N(ts, t),
    sunny: N(ji, t),
    windy: N(is, t),
    "windy-variant": N(ns, t),
    exceptional: N(Zr, t)
  }, s = {
    "clear-night": M("mdi:weather-night", t),
    cloudy: M("mdi:weather-cloudy", t),
    fog: M("mdi:weather-fog", t),
    hail: M("mdi:weather-hail", t),
    lightning: M("mdi:weather-lightning", t),
    "lightning-rainy": M("mdi:weather-lightning-rainy", t),
    partlycloudy: M("mdi:weather-partly-cloudy", t),
    pouring: M("mdi:weather-pouring", t),
    rainy: M("mdi:weather-rainy", t),
    snowy: M("mdi:weather-snowy", t),
    "snowy-rainy": M("mdi:weather-snowy-rainy", t),
    sunny: M("mdi:weather-sunny", t),
    windy: M("mdi:weather-windy", t),
    "windy-variant": M("mdi:weather-windy-variant", t),
    exceptional: M("mdi:weather-hurricane", t)
  }, a = {
    "clear-night": p`<img src="${Nr}" style="font-size:${t}" />`,
    cloudy: p`<img src="${Er}" style="font-size:${t}" />`,
    fog: p`<img src="${Wr}}" style="font-size:${t}" />`,
    hail: p`<img src="${zr}" style="font-size:${t}" />`,
    lightning: p`<img src="${Hr}" style="font-size:${t}" />`,
    "lightning-rainy": p`<img src="${Dr}" style="font-size:${t}" />`,
    partlycloudy: p`<img
      src="${n ? Rr : Pr}"
      style="font-size:${t}"
    />`,
    pouring: p`<img src="${Br}" style="font-size:${t}" />`,
    rainy: p`<img src="${Ur}" style="font-size:${t}" />`,
    snowy: p`<img src="${Or}" style="font-size:${t}" />`,
    "snowy-rainy": p`<img src="${Gr}" style="font-size:${t}" />`,
    sunny: p`<img src="${it}" style="font-size:${t}" />`,
    windy: p`<img src="${ai}" style="font-size:${t}" />`,
    "windy-variant": p`<img src="${ai}" style="font-size:${t}" />`,
    exceptional: p`<img src="${Ir}" style="font-size:${t}" />`
  };
  return e === "mdi" ? s[i] || M("mdi:weather-sunny", t) : e === "mdiAsSVG" ? r[i] || p`<img src="${it}" />` : a[i] || p`<img src="${it}" />`;
};
var oi, li;
(function(i) {
  i.language = "language", i.system = "system", i.comma_decimal = "comma_decimal", i.decimal_comma = "decimal_comma", i.space_comma = "space_comma", i.none = "none";
})(oi || (oi = {})), (function(i) {
  i.language = "language", i.system = "system", i.am_pm = "12", i.twenty_four = "24";
})(li || (li = {}));
var ci = function(i, e, t, n) {
  n = n || {}, t = t ?? {};
  var r = new Event(e, { bubbles: n.bubbles === void 0 || n.bubbles, cancelable: !!n.cancelable, composed: n.composed === void 0 || n.composed });
  return r.detail = t, i.dispatchEvent(r), r;
}, rs = Object.defineProperty, ss = Object.getOwnPropertyDescriptor, Ke = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? ss(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && rs(e, t, r), r;
};
xi({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => wi[i]
});
let Ae = class extends re {
  hass;
  lovelace;
  _config;
  constructor() {
    super(), console.log("🎨 SwissweatherCardEditor constructor called");
  }
  setConfig(i) {
    const e = { ...i }, t = [
      "entity",
      "sun_entity",
      "wind_entity",
      "wind_direction_entity",
      "sunshine_entity",
      "warning_entity"
    ];
    for (const n of t)
      e[n] === "" && delete e[n];
    this._config = e, this.requestUpdate();
  }
  static get styles() {
    return hi`
      .card-config {
        padding: 16px;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--card-divider-color);
      }

      .header-title {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-text-color, #dc143c);
      }

      .header-subtitle {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      ha-form {
        display: block;
        margin-bottom: 24px;
      }

      .preview {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        padding: 20px;
        margin-top: 24px;
      }

      .preview-title {
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .preview-config {
        font-family: 'SFMono-Regular', 'Monaco', 'Consolas', monospace;
        font-size: 13px;
        color: var(--secondary-text-color);
        background: var(--code-editor-background-color, #f8f8f8);
        padding: 16px;
        border-radius: 8px;
        overflow-x: auto;
        white-space: pre-wrap;
        line-height: 1.4;
        border: 1px solid var(--divider-color);
      }
      .group {
        margin-bottom: 24px;
        padding: 16px 0 0 0;
        border-top: 1px solid var(--divider-color, #e0e0e0);
      }
      .group-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color, #dc143c);
        margin-bottom: 8px;
        margin-top: 0;
      }
      .card-config {
        padding: 16px;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--card-divider-color);
      }
      .header-title {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-text-color, #dc143c);
      }
      .header-subtitle {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      ha-form {
        display: block;
        margin-bottom: 24px;
      }
      .preview {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        padding: 20px;
        margin-top: 24px;
      }
      .preview-title {
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .preview-config {
        font-family: 'SFMono-Regular', 'Monaco', 'Consolas', monospace;
        font-size: 13px;
        color: var(--secondary-text-color);
        background: var(--code-editor-background-color, #f8f8f8);
        padding: 16px;
        border-radius: 8px;
        overflow-x: auto;
        white-space: pre-wrap;
        line-height: 1.4;
        border: 1px solid var(--divider-color);
      }

      @media (max-width: 768px) {
        .card-config {
          padding: 12px;
        }
      }
    `;
  }
  render() {
    const i = [
      { key: "temperature", label: x("config.chart_temperature") || "Temperature" },
      { key: "precipitation", label: x("config.chart_precipitation") || "Precipitation" },
      { key: "sunshine", label: x("config.chart_sunshine") || "Sunshine" },
      { key: "wind", label: x("config.chart_wind") || "Wind" },
      { key: "forecast", label: x("config.chart_forecast") || "Forecast" }
    ], e = Array.isArray(this._config?.chart_order) ? this._config.chart_order : i.map((n) => n.key);
    if (!this.hass)
      return p`<div>Loading...</div>`;
    bi((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
    const t = {
      entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
      show_location: this._config?.show_location ?? !0,
      location: this._config?.location ?? "",
      sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0,
      wind_entity: typeof this._config?.wind_entity == "string" ? this._config.wind_entity : void 0,
      wind_direction_entity: typeof this._config?.wind_direction_entity == "string" ? this._config.wind_direction_entity : void 0,
      sunshine_entity: typeof this._config?.sunshine_entity == "string" ? this._config.sunshine_entity : void 0,
      warning_entity: typeof this._config?.warning_entity == "string" ? this._config.warning_entity : void 0,
      show_forecast: this._config?.show_forecast ?? !1,
      forecast_hours: this._config?.forecast_hours ?? 6,
      show_temperature: this._config?.show_temperature ?? !1,
      show_precipitation: this._config?.show_precipitation ?? !1,
      show_sunshine: this._config?.show_sunshine ?? !1,
      show_warnings: this._config?.show_warnings ?? !1,
      show_wind: this._config?.show_wind ?? !0,
      enable_animate_weather_icons: this._config?.enable_animate_weather_icons ?? !0,
      compact_mode: this._config?.compact_mode ?? !1
    };
    return p`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Card</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${x("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[
      T.find((n) => n.name === "entity"),
      T.find((n) => n.name === "location")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Sensors -->
        <div class="group">
          <div class="group-title">${x("config.group_sensors") || "Sensors"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[
      T.find((n) => n.name === "wind_entity"),
      T.find((n) => n.name === "wind_direction_entity"),
      T.find((n) => n.name === "sunshine_entity"),
      T.find((n) => n.name === "precipitation_entity"),
      T.find((n) => n.name === "warning_entity")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Display options -->
        <div class="group">
          <div class="group-title">${x("config.group_display") || "Display Options"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[
      T.find((n) => n.name === "forecast_hours"),
      T.find((n) => n.name === "show_forecast"),
      T.find((n) => n.name === "show_precipitation"),
      T.find((n) => n.name === "show_temperature"),
      T.find((n) => n.name === "show_sunshine"),
      T.find((n) => n.name === "show_wind"),
      T.find((n) => n.name === "enable_animate_weather_icons"),
      T.find((n) => n.name === "show_warnings"),
      T.find((n) => n.name === "compact_mode")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <!-- Chart order -->
        <div class="group">
          <div class="group-title">${x("config.group_chart_order") || "Chart Order"}</div>
          <ul style="list-style:none;padding:0;margin:0;">
            ${e.map((n, r) => {
      const s = i.find((a) => a.key === n);
      return p` <li style="display:flex;align-items:center;margin-bottom:6px;">
                <span style="flex:1;">${s?.label || n}</span>
                <button
                  style="margin-left:8px;"
                  @click=${() => this._moveChart(r, -1)}
                  ?disabled=${r === 0}
                  title="${x("config.move_up") || "Up"}"
                >
                  ⬆️
                </button>
                <button
                  style="margin-left:2px;"
                  @click=${() => this._moveChart(r, 1)}
                  ?disabled=${r === e.length - 1}
                  title="${x("config.move_down") || "Down"}"
                >
                  ⬇️
                </button>
              </li>`;
    })}
          </ul>
        </div>
        <!-- Configuration Preview -->
        ${this._config?.entity ? p`
              <div class="preview">
                <div class="preview-title">📋 YAML-Config</div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            ` : ""}
      </div>
    `;
  }
  _moveChart(i, e) {
    if (!this._config) return;
    const t = Array.isArray(this._config.chart_order) ? [...this._config.chart_order] : ["temperature", "precipitation", "sunshine", "wind", "forecast"], n = i + e;
    if (n < 0 || n >= t.length) return;
    const r = t[i];
    t[i] = t[n], t[n] = r, this._config = { ...this._config, chart_order: t }, ci(this, "config-changed", { config: this._config }), this.requestUpdate();
  }
  _computeLabel = (i) => ({
    entity: x("config.entity"),
    show_location: x("config.show_location"),
    sun_entity: x("config.sun_entity"),
    location: x("config.location"),
    wind_entity: x("config.wind_entity"),
    wind_direction_entity: x("config.wind_direction_entity"),
    sunshine_entity: x("config.sunshine_entity"),
    warning_entity: x("config.warning_entity"),
    show_forecast: x("config.show_forecast"),
    forecast_hours: x("config.forecast_hours"),
    show_temperature: x("config.show_temperature"),
    show_precipitation: x("config.show_precipitation"),
    show_sunshine: x("config.show_sunshine"),
    show_warnings: x("config.show_warnings"),
    show_wind: x("config.show_wind"),
    enable_animate_weather_icons: x("config.enable_animate_weather_icons"),
    compact_mode: x("config.compact_mode")
  })[i.name] || i.name;
  _renderConfigPreview() {
    const i = { ...this._config };
    return i.type || (i.type = "custom:swissweather-card"), Object.keys(i).forEach((e) => {
      (i[e] === void 0 || i[e] === "") && delete i[e];
    }), Object.entries(i).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join(`
`);
  }
  _valueChanged(i) {
    if (this._config || (this._config = {
      type: "custom:swissweather-card",
      entity: "",
      location: "Schweiz",
      show_forecast: !0,
      show_temperature: !0,
      show_precipitation: !0,
      show_sunshine: !0,
      show_warnings: !0,
      show_wind: !0,
      forecast_hours: 6,
      enable_animate_weather_icons: !0,
      show_location: !0,
      sun_entity: "sun.sun",
      compact_mode: !1
    }), i.type === "value-changed") {
      const e = {};
      this._config && this._config.chart_order !== void 0 && (e.chart_order = this._config.chart_order);
      const { ...t } = i.detail.value || {}, n = {
        ...this._config,
        ...t,
        ...e,
        type: "custom:swissweather-card"
      };
      Object.keys(n).forEach((r) => {
        (n[r] === "" || n[r] === void 0) && delete n[r];
      }), this._config = n, ci(this, "config-changed", { config: this._config });
    }
  }
};
Ke([
  de({ attribute: !1 })
], Ae.prototype, "hass", 2);
Ke([
  de({ attribute: !1 })
], Ae.prototype, "lovelace", 2);
Ke([
  de({ attribute: !1 })
], Ae.prototype, "_config", 2);
Ae = Ke([
  Ei("swissweather-card-editor")
], Ae);
function as(i, e, t, n, r) {
  return t === !1 ? p`` : i.length === 0 || !i.slice(0, e).some((s) => typeof s.temperature == "number" && !isNaN(s.temperature)) ? p`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          ${n("temperature_hours", { hours: e })}
        </div>
        <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
          ${n("no_temperature_data")}
        </div>
      </div>
    ` : p`
    <div class="chart">
      <div class="section-title">
        <ha-icon icon="mdi:thermometer"></ha-icon>
        ${n("temperature_hours", { hours: e })}
      </div>
      <div class="chart-line" style="position:relative;">
        ${i.slice(0, e).map((s) => {
    const a = typeof s.temperature == "number" && !isNaN(s.temperature) ? s.temperature : null;
    return p`
            <div
              style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;margin-bottom:10px;"
            >
              <span
                style="font-size:11px; color:#db4a34; writing-mode:vertical-rl; transform:rotate(180deg); min-height:30px; font-variant-numeric:tabular-nums;"
              >
                ${a !== null ? a.toFixed(1) + " °C" : ""}
              </span>
            </div>
          `;
  })}
      </div>
      <div style="width:100%;height:90px;overflow-x:auto;">
        ${(() => {
    const s = i.slice(0, e).map(
      (y) => typeof y.temperature == "number" && !isNaN(y.temperature) ? y.temperature : null
    ), a = s.filter((y) => y !== null);
    if (a.length < 2) return "";
    const l = Math.min(...a), c = Math.max(...a) - l || 1, h = s.length, d = Math.max(360, Math.min(1600, h * 250)), u = 50, g = d / (h - 1), m = s.map((y, R) => y !== null ? `${R * g},${u - (y - l) / c * u}` : "").filter(Boolean).join(" ");
    return z`<svg width="${e === 6 ? "84%" : e === 12 ? "90%" : e === 18 ? "96%" : "100%"}" height="${u}" viewBox="0 0 ${d} ${u}" preserveAspectRatio="none" style="display:block;padding-left:${e === 6 ? "8%" : e === 12 ? "5%" : e === 18 ? "2%" : "0%"};">
                <polyline points="${m}" fill="none" stroke="#db4a34" stroke-width="3" />
                ${s.map((y, R) => y !== null ? z`<circle r="3" fill="#db4a34" cx="${R * g}" cy="${u - (y - l) / c * u}" />` : null)}
                </svg>`;
  })()}
      </div>
      ${r(e)}
    </div>
  `;
}
function os(i, e, t, n, r) {
  return t === !1 ? p`` : i.length === 0 || !i.slice(0, e).some((s) => typeof s.precipitation == "number" && !isNaN(s.precipitation)) ? p`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:weather-pouring"></ha-icon>
          ${n("precipitation_hours", { hours: e })}
        </div>
        <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
          ${n("no_precipitation_data")}
        </div>
      </div>
    ` : p`
    <div class="chart">
      <div class="section-title">
        <ha-icon icon="mdi:weather-pouring"></ha-icon>
        ${n("precipitation_hours", { hours: e })}
      </div>
      <div class="chart-bars">
        ${i.slice(0, e).map((s) => {
    const a = typeof s.precipitation == "number" && !isNaN(s.precipitation) ? s.precipitation : null, l = a !== null ? Math.round(a) : 2, o = typeof s.precipitation_probability == "number" && !isNaN(s.precipitation_probability) ? s.precipitation_probability : null, c = o !== null ? Math.round(o % 10) : 2;
    return p`
            <div
              style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; position:relative;"
            >
              <div style="height:32px; display:flex; align-items:flex-end; justify-content:center;">
                <span
                  style="font-size:11px; color:#3498db; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                >
                  ${a !== null ? a.toFixed(1) + " mm" : ""}
                </span>
              </div>
              <div
                class="chart-bar-precipitation-prob"
                style="height: ${c}px; position:absolute; bottom:0; left:50%; transform:translateX(-50%); z-index:0; width:18px;"
              ></div>
              <div
                class="chart-bar-precipitation"
                style="height: ${l}px; position:relative; z-index:1; width:18px;"
              ></div>
            </div>
          `;
  })}
      </div>
      ${r(e)}
    </div>
  `;
}
var ls = Object.defineProperty, cs = Object.getOwnPropertyDescriptor, ie = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? cs(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && ls(e, t, r), r;
};
xi({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => wi[i]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard");
console.log("🎯 customElements registry available:", !!customElements);
let F = class extends re {
  hass;
  config;
  _forecast = [];
  _hourlyForecast = [];
  _forecastLoading = !1;
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  _lastEntityId;
  updated(i) {
    super.updated(i), this.hass && this.config && this.config.entity && this._lastEntityId !== this.config.entity && (this._lastEntityId = this.config.entity, this._loadForecast());
  }
  async _loadForecast() {
    if (!(!this.hass || !this.config?.entity || this._forecastLoading)) {
      this._forecastLoading = !0;
      try {
        const [i, e] = await Promise.all([
          this.hass.callWS({
            type: "call_service",
            domain: "weather",
            service: "get_forecasts",
            service_data: {
              entity_id: this.config.entity,
              type: "daily"
            },
            return_response: !0
          }),
          this.hass.callWS({
            type: "call_service",
            domain: "weather",
            service: "get_forecasts",
            service_data: {
              entity_id: this.config.entity,
              type: "hourly"
            },
            return_response: !0
          })
        ]), t = i?.response;
        t && t[this.config.entity] ? (this._forecast = t[this.config.entity].forecast || [], this.requestUpdate("_forecast")) : this._forecast = [];
        const n = e?.response;
        n && n[this.config.entity] ? (this._hourlyForecast = n[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [];
      } catch (i) {
        console.warn("⚠️ Forecast loading failed:", i), this._forecast = [], this._hourlyForecast = [];
      } finally {
        this._forecastLoading = !1;
      }
    }
  }
  static get styles() {
    return hi`
      :host {
        display: block;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        padding: 20px;
        box-shadow: var(
          --ha-card-box-shadow,
          0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1))
        );
        font-family: var(
          --primary-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          sans-serif
        );
        color: var(--primary-text-color, #fff);
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        border-bottom: 2px solid var(--divider-color, #dc143c);
        padding-bottom: 15px;
      }

      .location {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-text-color, #fff);
      }

      .warning-section {
        border: 1px solid var(--warning-border-color, #ffeaa7);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .warning-section.danger {
        background: linear-gradient(90deg, #f8d7da 0%, #f5c6cb 100%);
        border-color: var(--danger-border-color, #f1aeb5);
      }

      .warning-section.severe {
        background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%);
        border-color: var(--severe-border-color, #e17055);
      }

      .warning-icon {
        font-size: 24px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
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
        color: var(--primary-text-color, #fff);
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
      .weather-temp {
        fill: var(--primary-text-color, #fff);
      }
      .condition {
        font-size: 16px;
        color: var(--primary-text-color, #fff);
        text-align: right;
      }

      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 15px;
        margin-bottom: 25px;
      }
      .metrics-table {
        display: flex;
        flex-direction: row;
        align-items: stretch;
      }
      .metrics-table .metric-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: none;
        border: none;
        min-width: 0;
        box-shadow: none;
        transition: none;
      }
      .metrics-table .metric-card:hover {
        background: none;
        border: none;
        box-shadow: none;
        transform: none;
      }
      .metrics-table > .metric-card > .metric-icon {
        margin-bottom: 0;
        margin-right: 8px;
      }
      .metrics-table > .metric-card > .wind-compass {
        min-width: 16px;
        width: 16px;
        height: 16px;
        margin: 13px auto 8px;
        margin-right: 8px;
      }
      .metrics-table > .metric-card > .metric-value {
        font-size: 12px;
        font-weight: bold;
        color: var(--primary-text-color, #2c3e50);
        margin-bottom: 0;
        margin-right: 8px;
      }

      .metric-card {
        background: var(--card-background-color, rgba(255, 255, 255, 0.7));
        border-radius: 12px;
        padding: 15px;
        text-align: center;
        border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
        transition: transform 0.2s ease;
      }

      .metric-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px var(--box-shadow-color, rgba(0, 0, 0, 0.15));
      }

      .metric-icon {
        font-size: 24px;
        margin-bottom: 8px;
        color: var(--state-icon-color, #dc143c);
      }

      .metric-value {
        font-size: 20px;
        font-weight: bold;
        color: var(--primary-text-color, #2c3e50);
        margin-bottom: 4px;
      }

      .metric-label {
        font-size: 12px;
        color: var(--secondary-text-color, #7f8c8d);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .forecast-section {
        margin-top: 20px;
      }

      .section-title {
        font-size: 18px;
        font-weight: bold;
        color: var(--primary-text-color, #fff);
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .forecast-7days {
        background: var(--code-editor-background-color, #f8f8f8);
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-bottom: 8px;
      }

      .forecast-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
      }

      .forecast-day {
        background: var(--card-background-color, rgba(255, 255, 255, 0.6));
        border-radius: 10px;
        padding: 12px 8px;
        text-align: center;
        border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
      }

      .forecast-date {
        font-size: 12px;
        color: var(--secondary-text-color, #7f8c8d);
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
        color: var(--material-error-text-color, #e74c3c);
      }

      .temp-low {
        color: var(--secondary-text-color, #00aaff);
      }

      .chart {
        background: var(--card-background-color, #fff);
        border-radius: 12px;
        padding: 15px;
        margin-top: 15px;
        border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
      }

      .chart-bars {
        display: flex;
        justify-content: space-between;
        height: 120px;
        margin-bottom: 10px;
      }

      .chart-line {
        display: flex;
        justify-content: space-between;
        height: 60px;
        margin-bottom: 10px;
      }
      .chart-line-wind {
        display: flex;
        justify-content: space-between;
        height: 50px;
      }
      .chart-bar-precipitation {
        width: 18px;
        background: linear-gradient(to top, #3498db, #85c5e5);
        border-radius: 2px 2px 0 0;
        min-height: 2px;
      }
      .chart-bar-precipitation-prob {
        width: 18px;
        background: #87898eff;
        border-radius: 2px 2px 0 0;
        min-height: 2px;
        opacity: 0.6;
      }

      .chart-bar-sunshine {
        width: 18px;
        background: linear-gradient(to top, #ffe082, #fbc02d);
        border-radius: 2px 2px 0 0;
        min-height: 2px;
      }

      .chart-labels {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: var(--secondary-text-color, #000);
      }

      .wind-compass {
        width: 24px;
        height: 24px;
        border: 2px solid var(--state-icon-color, #dc143c);
        border-radius: 50%;
        position: relative;
        margin: 0 auto 10px;
      }

      .wind-arrow {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 8px;
        background: var(--state-icon-color, #dc143c);
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
        border-bottom: 8px solid var(--state-icon-color, #dc143c);
        transform: translateX(-50%);
      }

      @media (max-width: 768px) {
        :host {
          padding: 15px;
        }

        .metrics-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .forecast-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `;
  }
  setConfig(i) {
    if (!i.entity)
      throw new Error("You need to define an entity");
    this.config = i, setTimeout(() => {
      this._loadForecast();
    }, 1e3);
  }
  getCardSize() {
    return 8;
  }
  static getStubConfig() {
    return {
      type: "custom:swissweather-card",
      entity: "",
      show_location: !0,
      location: "Schweiz",
      show_forecast: !0,
      forecast_hours: 6,
      show_temperature: !0,
      show_precipitation: !0,
      show_sunshine: !0,
      show_warnings: !0,
      show_wind: !0,
      enable_animate_weather_icons: !0,
      compact_mode: !1,
      chart_order: ["temperature", "precipitation", "sunshine", "wind"]
    };
  }
  static getConfigElement() {
    return document.createElement("swissweather-card-editor");
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return T;
  }
  _getEntityState(i) {
    return this.hass?.states[i];
  }
  _getWarningLevel(i) {
    if (!i || i.length === 0) return "none";
    const e = Math.max(...i.map((t) => t.level || 0));
    return e >= 4 ? "danger" : e >= 3 ? "severe" : e >= 2 ? "warning" : "info";
  }
  _formatWindDirection(i) {
    const e = [
      "N",
      "NNO",
      "NO",
      "ONO",
      "O",
      "OSO",
      "SO",
      "SSO",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW"
    ], t = Math.round(i / 22.5) % 16;
    return e[t];
  }
  _renderWarningSection(i) {
    const e = [];
    if (i?.attributes?.warning_levels && Array.isArray(i.attributes.warning_levels))
      for (let s = 0; s < i?.attributes.warning_levels.length; s++)
        e.push({
          id: `warning_${s}`,
          title: i?.attributes.warning_levels[s],
          level: i?.attributes.warning_levels[s],
          type: i?.attributes.warning_types[s],
          description: i?.attributes.warning_texts[s],
          valid_from: i.attributes.warning_valid_from[s],
          valid_to: i.attributes.warning_valid_to[s],
          link: i.attributes.warning_links[s],
          regions: [],
          phenomena: []
        });
    const t = this._getWarningLevel(e), n = {
      storm: "mdi:weather-lightning",
      rain: "mdi:weather-pouring",
      snow: "mdi:snowflake",
      wind: "mdi:weather-windy",
      fog: "mdi:weather-fog",
      heat: "mdi:weather-sunny-alert",
      cold: "mdi:snowflake-alert",
      flood: "mdi:waves",
      // add more as needed
      default: "mdi:alert"
    };
    this._openWarnings || (this._openWarnings = {});
    const r = (s) => {
      this._openWarnings = { ...this._openWarnings, [s]: !this._openWarnings[s] }, this.requestUpdate();
    };
    return e.length > 0 ? p`
          <div class="warning-section ${t}">
            <div>
              <strong>${$("weather_warning")}</strong>
              <ul style="margin: 6px 0 0 0; padding-left: 18px;">
                ${e.map(
      (s) => p`
                    <li style="margin-bottom: 12px;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <ha-icon
                          icon="${n[s.type?.toLowerCase?.()] || n.default}"
                          style="color: var(--error-color, #dc143c);"
                        ></ha-icon>
                        <span style="font-weight:bold;">${s.title}</span>
                        ${s.link ? p`
                              <a
                                href="${s.link}"
                                target="_blank"
                                style="color: var(--primary-text-color, #fff); text-decoration: underline; display: flex; align-items: center;"
                                title="More info"
                              >
                                <ha-icon
                                  icon="mdi:link-variant"
                                  style="font-size: 16px; margin-left: 2px;"
                                ></ha-icon>
                              </a>
                            ` : ""}
                        <button
                          @click=${() => r(s.id)}
                          style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;"
                          title="${this._openWarnings[s.id] ? $("collapse") : $("expand")}"
                          aria-label="${this._openWarnings[s.id] ? $("collapse") : $("expand")}"
                        >
                          <ha-icon
                            icon="${this._openWarnings[s.id] ? "mdi:chevron-up" : "mdi:chevron-down"}"
                          ></ha-icon>
                        </button>
                      </div>
                      ${this._openWarnings[s.id] && s.description ? p`
                            <div>
                              <strong>${$("valid_from")}: </strong>
                              ${s.valid_from ? new Date(s.valid_from).toLocaleString() : $("unknown")}
                              <strong>${$("valid_to")}: </strong>
                              ${s.valid_to ? new Date(s.valid_to).toLocaleString() : $("unknown")}
                            </div>
                            <div
                              style="color: var(--primary-text-color, #fff); font-size: 14px; line-height: 1.4; margin-left: 2px; margin-top: 4px;"
                              .innerHTML="${b.parse(s.description || "")}"
                            ></div>
                          ` : ""}
                    </li>
                  `
    )}
              </ul>
            </div>
          </div>
        ` : p``;
  }
  _openWarnings = {};
  _renderForecastTemperature(i) {
    return as(
      this._hourlyForecast,
      i,
      this.config.show_temperature !== !1,
      $,
      (e) => Re(e)
    );
  }
  _renderForecastPrecipitation(i) {
    return os(
      this._hourlyForecast,
      i,
      this.config.show_precipitation !== !1,
      $,
      (e) => Re(e)
    );
  }
  _renderForecastSunshine(i, e, t) {
    return xn(
      this._hourlyForecast,
      t,
      this.config.show_sunshine !== !1,
      i,
      e,
      $,
      (n) => Re(n)
    );
  }
  _renderForecastWind(i) {
    return bn(
      this._hourlyForecast,
      i,
      this.config.show_wind !== !1,
      $,
      (e) => Re(e)
    );
  }
  _renderDailyForecast(i) {
    return _n(
      i,
      this._forecastLoading,
      this.config.show_forecast !== !1,
      this.config,
      $,
      nt,
      this.isDay.bind(this),
      $n
    );
  }
  _renderCurrentWeather(i, e, t, n, r, s) {
    return p`
      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${$("current_weather")}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(i)} km/h</div>
          <div class="metric-label">${$("wind")}</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${e}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(e)}</div>
          <div class="metric-label">${$("direction")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${t}%</div>
          <div class="metric-label">${$("humidity")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${n} hPa</div>
          <div class="metric-label">${$("pressure")}</div>
        </div>
        ${s ? p`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                <div class="metric-value">${parseFloat(s.state).toFixed(1)}h</div>
                <div class="metric-label">${$("sunshine")}</div>
              </div>
            ` : ""}
        ${r > 0 ? p`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                <div class="metric-value">${r} km</div>
                <div class="metric-label">${$("visibility")}</div>
              </div>
            ` : ""}
      </div>
    `;
  }
  _renderCurrentWeatherSection(i, e, t, n, r, s) {
    return p`
      <div class="current-weather-section">
        ${this.config.compact_mode === !0 ? p`
              ${this._renderCurrentWeatherCompactMode(
      i,
      e,
      t,
      n,
      r,
      s
    )}
            ` : p`
              ${this._renderCurrentWeather(
      i,
      e,
      t,
      n,
      r,
      s
    )}
            `}
      </div>
    `;
  }
  isDay() {
    const i = /* @__PURE__ */ new Date(), e = this._getEntityState(this.config.entity), t = this._getEntityState(this.config.sun_entity || "sun.sun");
    let n = null, r = null;
    if (e && e.attributes && "sunrise" in e.attributes && "sunset" in e.attributes && e.attributes.sunrise && e.attributes.sunset)
      n = new Date(e.attributes.sunrise), r = new Date(e.attributes.sunset);
    else if (t?.attributes) {
      const s = t.attributes.next_rising ? new Date(t.attributes.next_rising) : null, a = t.attributes.next_setting ? new Date(t.attributes.next_setting) : null;
      if (s && a) {
        const l = s > i ? new Date(s.getTime() - 864e5) : s, o = a;
        n = l, r = o;
      }
    }
    return !n || !r ? !0 : i >= n && i < r;
  }
  _showDailyForecast() {
    const i = this._forecast;
    return this.config.show_forecast !== !1 ? p`
          ${this.config.compact_mode === !0 && this.config.show_forecast === !0 ? this._renderDailyForecastDiagram() : p``}
          ${this.config.compact_mode === !1 ? this._renderDailyForecast(i) : p``}
        ` : p``;
  }
  render() {
    if (bi((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return p``;
    const i = this._getEntityState(this.config.entity), e = this._getEntityState(this.config.sun_entity || "sun.sun");
    if (!i)
      return p`<div>Entity not found: ${this.config.entity}</div>`;
    const t = this.config.show_location !== !1, n = this.config.location || $("location"), r = i.attributes.temperature, s = i.state, a = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null, l = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null, o = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null, c = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null, h = a ? parseFloat(a.state) : i.attributes.wind_speed || 0, d = l ? parseFloat(l.state) : i.attributes.wind_bearing || 0, u = i.attributes.humidity || 0, g = i.attributes.pressure || 0, m = i.attributes.visibility || 0, _ = this.config.forecast_hours ?? 6;
    return p`
      ${t ? p`
            <div class="header">
              <div class="location">${n}</div>
            </div>
          ` : ""}
      ${this.config.show_warnings ? this._renderWarningSection(c) : ""}

      <div class="current-weather">
        <div>
          <div class="current-temp">${r}°</div>
          <div class="condition">${$(s)}</div>
        </div>
        <div class="current-details">
          <div
            class="weather-icon"
            style="color: var(--icon-color, #fff); width: 64px; height: 64px;"
          >
            ${nt(
      s,
      this.config.enable_animate_weather_icons ? "animated" : "mdi",
      "64px",
      this.isDay()
    )}
          </div>
        </div>
      </div>

      ${this._renderCurrentWeatherSection(
      h,
      d,
      u,
      g,
      m,
      o
    )}
      ${this.config.compact_mode === !1 && (this.config.show_temperature === !0 || this.config.show_precipitation === !0 || this.config.show_sunshine === !0) ? p`
            <div class="section-title">
              <ha-icon icon="mdi:clock"></ha-icon>
              ${$("forecast_hours", { hours: _ })}
            </div>
          ` : ""}
      ${(this.config.chart_order || [
      "temperature",
      "precipitation",
      "sunshine",
      "wind",
      "forecast"
    ]).map((D) => {
      switch (D) {
        case "temperature":
          return this._renderForecastTemperature(_);
        case "precipitation":
          return this._renderForecastPrecipitation(_);
        case "sunshine":
          return this._renderForecastSunshine(i, e, _);
        case "wind":
          return this._renderForecastWind(_);
        case "forecast":
          return this._showDailyForecast();
        default:
          return "";
      }
    })}
    `;
  }
  _renderCurrentWeatherCompactMode(i, e, t, n, r, s) {
    return p`
      <div class="metrics-table">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(i)} km/h</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${e}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(e)}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${t}%</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${n} hPa</div>
        </div>
        ${s ? p`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                  <div class="metric-value">${parseFloat(s.state).toFixed(1)}h</div>
                </div>
              ` : ""}
        ${r > 0 ? p`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                  <div class="metric-value">${r} km</div>
                </div>
              ` : ""}
      </div
      `;
  }
  _renderDailyForecastDiagram() {
    return wn(
      this._forecast?.slice(0, 7) ?? [],
      this._hourlyForecast?.slice(0, (this._forecast?.length ?? 0) * 24) ?? [],
      this.config,
      nt
    );
  }
};
ie([
  de({ attribute: !1 })
], F.prototype, "hass", 2);
ie([
  de({ attribute: !1 })
], F.prototype, "config", 2);
ie([
  qe()
], F.prototype, "_forecast", 2);
ie([
  qe()
], F.prototype, "_hourlyForecast", 2);
ie([
  qe()
], F.prototype, "_forecastLoading", 2);
ie([
  qe()
], F.prototype, "_openWarnings", 2);
F = ie([
  Ei("swissweather-card")
], F);
window.customCards || (window.customCards = []);
window.customCards.push({
  type: "swissweather-card",
  name: "SwissWeather Card",
  description: "Eine Custom Card für Schweizer Wetterinformationen im MeteoSchweiz-Design",
  preview: !0,
  documentationURL: "https://github.com/dmoo500/ha-swissweather-card"
});
console.log("✅ SwissWeatherCard fully loaded and registered");
export {
  F as SwissWeatherCard,
  Ae as SwissweatherCardEditor
};
//# sourceMappingURL=swissweather-card.js.map

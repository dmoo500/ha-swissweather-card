const jr = "1.6.0";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = globalThis, qt = ct.ShadowRoot && (ct.ShadyCSS === void 0 || ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Zt = Symbol(), ki = /* @__PURE__ */ new WeakMap();
let Qi = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Zt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (qt && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = ki.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && ki.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Vr = (i) => new Qi(typeof i == "string" ? i : i + "", void 0, Zt), z = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce(((r, n, s) => r + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[s + 1]), i[0]);
  return new Qi(t, i, Zt);
}, qr = (i, e) => {
  if (qt) i.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const r = document.createElement("style"), n = ct.litNonce;
    n !== void 0 && r.setAttribute("nonce", n), r.textContent = t.cssText, i.appendChild(r);
  }
}, Ai = qt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Vr(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zr, defineProperty: Yr, getOwnPropertyDescriptor: Kr, getOwnPropertyNames: Qr, getOwnPropertySymbols: Xr, getPrototypeOf: Jr } = Object, $t = globalThis, Ci = $t.trustedTypes, en = Ci ? Ci.emptyScript : "", tn = $t.reactiveElementPolyfillSupport, Be = (i, e) => i, pt = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? en : null;
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
} }, Yt = (i, e) => !Zr(i, e), Si = { attribute: !0, type: String, converter: pt, reflect: !1, useDefault: !1, hasChanged: Yt };
Symbol.metadata ??= Symbol("metadata"), $t.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ve = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Si) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), n = this.getPropertyDescriptor(e, r, t);
      n !== void 0 && Yr(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: n, set: s } = Kr(this.prototype, e) ?? { get() {
      return this[t];
    }, set(o) {
      this[t] = o;
    } };
    return { get: n, set(o) {
      const a = n?.call(this);
      s?.call(this, o), this.requestUpdate(e, a, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Si;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Be("elementProperties"))) return;
    const e = Jr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Be("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Be("properties"))) {
      const t = this.properties, r = [...Qr(t), ...Xr(t)];
      for (const n of r) this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, n] of t) this.elementProperties.set(r, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const n = this._$Eu(t, r);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const n of r) t.unshift(Ai(n));
    } else e !== void 0 && t.push(Ai(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return qr(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((e) => e.hostDisconnected?.()));
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$ET(e, t) {
    const r = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, r);
    if (n !== void 0 && r.reflect === !0) {
      const s = (r.converter?.toAttribute !== void 0 ? r.converter : pt).toAttribute(t, r.type);
      this._$Em = e, s == null ? this.removeAttribute(n) : this.setAttribute(n, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const r = this.constructor, n = r._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const s = r.getPropertyOptions(n), o = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : pt;
      this._$Em = n;
      const a = o.fromAttribute(t, s.type);
      this[n] = a ?? this._$Ej?.get(n) ?? a, this._$Em = null;
    }
  }
  requestUpdate(e, t, r) {
    if (e !== void 0) {
      const n = this.constructor, s = this[e];
      if (r ??= n.getPropertyOptions(e), !((r.hasChanged ?? Yt)(s, t) || r.useDefault && r.reflect && s === this._$Ej?.get(e) && !this.hasAttribute(n._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: n, wrapped: s }, o) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, o ?? t ?? this[e]), s !== !0 || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), n === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
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
        for (const [n, s] of this._$Ep) this[n] = s;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, s] of r) {
        const { wrapped: o } = s, a = this[n];
        o !== !0 || this._$AL.has(n) || a === void 0 || this.C(n, void 0, s, a);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((r) => r.hostUpdate?.())), this.update(t)) : this._$EM();
    } catch (r) {
      throw e = !1, this._$EM(), r;
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
ve.elementStyles = [], ve.shadowRootOptions = { mode: "open" }, ve[Be("elementProperties")] = /* @__PURE__ */ new Map(), ve[Be("finalized")] = /* @__PURE__ */ new Map(), tn?.({ ReactiveElement: ve }), ($t.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt = globalThis, ut = Kt.trustedTypes, Mi = ut ? ut.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, Xi = "$lit$", K = `lit$${Math.random().toFixed(9).slice(2)}$`, Ji = "?" + K, rn = `<${Ji}>`, pe = document, qe = () => pe.createComment(""), Ze = (i) => i === null || typeof i != "object" && typeof i != "function", Qt = Array.isArray, nn = (i) => Qt(i) || typeof i?.[Symbol.iterator] == "function", Et = `[ 	
\f\r]`, Re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ti = /-->/g, Ni = />/g, oe = RegExp(`>|${Et}(?:([^\\s"'>=/]+)(${Et}*=${Et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Li = /'/g, Hi = /"/g, er = /^(?:script|style|textarea|title)$/i, tr = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), d = tr(1), w = tr(2), _e = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), Gi = /* @__PURE__ */ new WeakMap(), le = pe.createTreeWalker(pe, 129);
function ir(i, e) {
  if (!Qt(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Mi !== void 0 ? Mi.createHTML(e) : e;
}
const sn = (i, e) => {
  const t = i.length - 1, r = [];
  let n, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = Re;
  for (let a = 0; a < t; a++) {
    const l = i[a];
    let c, h, p = -1, u = 0;
    for (; u < l.length && (o.lastIndex = u, h = o.exec(l), h !== null); ) u = o.lastIndex, o === Re ? h[1] === "!--" ? o = Ti : h[1] !== void 0 ? o = Ni : h[2] !== void 0 ? (er.test(h[2]) && (n = RegExp("</" + h[2], "g")), o = oe) : h[3] !== void 0 && (o = oe) : o === oe ? h[0] === ">" ? (o = n ?? Re, p = -1) : h[1] === void 0 ? p = -2 : (p = o.lastIndex - h[2].length, c = h[1], o = h[3] === void 0 ? oe : h[3] === '"' ? Hi : Li) : o === Hi || o === Li ? o = oe : o === Ti || o === Ni ? o = Re : (o = oe, n = void 0);
    const g = o === oe && i[a + 1].startsWith("/>") ? " " : "";
    s += o === Re ? l + rn : p >= 0 ? (r.push(c), l.slice(0, p) + Xi + l.slice(p) + K + g) : l + K + (p === -2 ? a : g);
  }
  return [ir(i, s + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
let Dt = class rr {
  constructor({ strings: e, _$litType$: t }, r) {
    let n;
    this.parts = [];
    let s = 0, o = 0;
    const a = e.length - 1, l = this.parts, [c, h] = sn(e, t);
    if (this.el = rr.createElement(c, r), le.currentNode = this.el.content, t === 2 || t === 3) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (n = le.nextNode()) !== null && l.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const p of n.getAttributeNames()) if (p.endsWith(Xi)) {
          const u = h[o++], g = n.getAttribute(p).split(K), v = /([.?@])?(.*)/.exec(u);
          l.push({ type: 1, index: s, name: v[2], strings: g, ctor: v[1] === "." ? an : v[1] === "?" ? ln : v[1] === "@" ? cn : kt }), n.removeAttribute(p);
        } else p.startsWith(K) && (l.push({ type: 6, index: s }), n.removeAttribute(p));
        if (er.test(n.tagName)) {
          const p = n.textContent.split(K), u = p.length - 1;
          if (u > 0) {
            n.textContent = ut ? ut.emptyScript : "";
            for (let g = 0; g < u; g++) n.append(p[g], qe()), le.nextNode(), l.push({ type: 2, index: ++s });
            n.append(p[u], qe());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Ji) l.push({ type: 2, index: s });
      else {
        let p = -1;
        for (; (p = n.data.indexOf(K, p + 1)) !== -1; ) l.push({ type: 7, index: s }), p += K.length - 1;
      }
      s++;
    }
  }
  static createElement(e, t) {
    const r = pe.createElement("template");
    return r.innerHTML = e, r;
  }
};
function $e(i, e, t = i, r) {
  if (e === _e) return e;
  let n = r !== void 0 ? t._$Co?.[r] : t._$Cl;
  const s = Ze(e) ? void 0 : e._$litDirective$;
  return n?.constructor !== s && (n?._$AO?.(!1), s === void 0 ? n = void 0 : (n = new s(i), n._$AT(i, t, r)), r !== void 0 ? (t._$Co ??= [])[r] = n : t._$Cl = n), n !== void 0 && (e = $e(i, n._$AS(i, e.values), n, r)), e;
}
let on = class {
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
    const { el: { content: t }, parts: r } = this._$AD, n = (e?.creationScope ?? pe).importNode(t, !0);
    le.currentNode = n;
    let s = le.nextNode(), o = 0, a = 0, l = r[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let c;
        l.type === 2 ? c = new Xt(s, s.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(s, l.name, l.strings, this, e) : l.type === 6 && (c = new dn(s, this, e)), this._$AV.push(c), l = r[++a];
      }
      o !== l?.index && (s = le.nextNode(), o++);
    }
    return le.currentNode = pe, n;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}, Xt = class nr {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, r, n) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = n, this._$Cv = n?.isConnected ?? !0;
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
    e = $e(this, e, t), Ze(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== _e && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nn(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && Ze(this._$AH) ? this._$AA.nextSibling.data = e : this.T(pe.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: r } = e, n = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = Dt.createElement(ir(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === n) this._$AH.p(t);
    else {
      const s = new on(n, this), o = s.u(this.options);
      s.p(t), this.T(o), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = Gi.get(e.strings);
    return t === void 0 && Gi.set(e.strings, t = new Dt(e)), t;
  }
  k(e) {
    Qt(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, n = 0;
    for (const s of e) n === t.length ? t.push(r = new nr(this.O(qe()), this.O(qe()), this, this.options)) : r = t[n], r._$AI(s), n++;
    n < t.length && (this._$AR(r && r._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
      const r = e.nextSibling;
      e.remove(), e = r;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}, kt = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, n, s) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = s, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = T;
  }
  _$AI(e, t = this, r, n) {
    const s = this.strings;
    let o = !1;
    if (s === void 0) e = $e(this, e, t, 0), o = !Ze(e) || e !== this._$AH && e !== _e, o && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++) c = $e(this, a[r + l], t, l), c === _e && (c = this._$AH[l]), o ||= !Ze(c) || c !== this._$AH[l], c === T ? e = T : e !== T && (e += (c ?? "") + s[l + 1]), this._$AH[l] = c;
    }
    o && !n && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, an = class extends kt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}, ln = class extends kt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}, cn = class extends kt {
  constructor(e, t, r, n, s) {
    super(e, t, r, n, s), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = $e(this, e, t, 0) ?? T) === _e) return;
    const r = this._$AH, n = e === T && r !== T || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, s = e !== T && (r === T || n);
    n && this.element.removeEventListener(this.name, this, r), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, dn = class {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    $e(this, e);
  }
};
const hn = Kt.litHtmlPolyfillSupport;
hn?.(Dt, Xt), (Kt.litHtmlVersions ??= []).push("3.3.1");
const pn = (i, e, t) => {
  const r = t?.renderBefore ?? e;
  let n = r._$litPart$;
  if (n === void 0) {
    const s = t?.renderBefore ?? null;
    r._$litPart$ = n = new Xt(e.insertBefore(qe(), s), s, void 0, t ?? {});
  }
  return n._$AI(i), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jt = globalThis;
let L = class extends ve {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = pn(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return _e;
  }
};
L._$litElement$ = !0, L.finalized = !0, Jt.litElementHydrateSupport?.({ LitElement: L });
const un = Jt.litElementPolyfillSupport;
un?.({ LitElement: L });
(Jt.litElementVersions ??= []).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer((() => {
    customElements.define(i, e);
  })) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fn = { attribute: !0, type: String, converter: pt, reflect: !1, hasChanged: Yt }, gn = (i = fn, e, t) => {
  const { kind: r, metadata: n } = t;
  let s = globalThis.litPropertyMetadata.get(n);
  if (s === void 0 && globalThis.litPropertyMetadata.set(n, s = /* @__PURE__ */ new Map()), r === "setter" && ((i = Object.create(i)).wrapped = !0), s.set(t.name, i), r === "accessor") {
    const { name: o } = t;
    return { set(a) {
      const l = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(o, l, i);
    }, init(a) {
      return a !== void 0 && this.C(o, void 0, i, a), a;
    } };
  }
  if (r === "setter") {
    const { name: o } = t;
    return function(a) {
      const l = this[o];
      e.call(this, a), this.requestUpdate(o, l, i);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function y(i) {
  return (e, t) => typeof t == "object" ? gn(i, e, t) : ((r, n, s) => {
    const o = n.hasOwnProperty(s);
    return n.constructor.createProperty(s, r), o ? Object.getOwnPropertyDescriptor(n, s) : void 0;
  })(i, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function me(i) {
  return y({ ...i, state: !0, attribute: !1 });
}
var sr = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, yn = (i, e, t) => e in i ? sr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, re = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? mn(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && sr(e, t, n), n;
}, xn = (i, e, t) => yn(i, e + "", t);
let R = class extends L {
  forecast = [];
  forecastLoading = !1;
  show_forecast = !0;
  config = {};
  _t;
  getWeatherIcon;
  formatDate;
  render() {
    return this.config.show_forecast !== !1 ? this.forecastLoading && this.forecast.length === 0 ? d`
            <div class="forecast-section">
              <div class="section-title">
                <ha-icon icon="mdi:calendar"></ha-icon>
                ${this._t("7d_forecast")}
                <small
                  style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >${this._t("loading")}</small
                >
              </div>
              <div
                style="text-align: center; padding: 20px; color: var(--secondary-text-color, #666); font-style: italic;"
              >
                ⏳ ${this._t("loading_forecast")}<br />
                <small>Service: weather.get_forecasts</small>
              </div>
            </div>
          ` : this.forecast.length > 0 ? d`
              <div class="forecast-section">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${this.forecast.length === 7 ? this._t("7d_forecast") : this._t("xd_forecast", { days: this.forecast.length })}
                  <small
                    style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >
                    (${this.forecast.length} ${this._t("days_available")})
                  </small>
                </div>
                ${this.forecast.length < 7 ? d`
                      <div
                        style="text-align: center; color: var(--warning-color, #b8860b); font-size: 13px; margin-bottom: 8px;"
                      >
                        ${this._t("forecast_days_hint", { count: this.forecast.length })}
                      </div>
                    ` : ""}
                <div class="forecast-grid">
                  ${this.forecast.slice(0, 7).map(
      (i) => d`
                      <div class="forecast-day">
                        <div class="forecast-date">${this.formatDate(i.datetime)}</div>
                        <div class="forecast-icon">
                          ${this.getWeatherIcon(
        i.condition,
        this.config.enable_animate_weather_icons ? "animated" : "mdi",
        "24px",
        !0
      )}
                        </div>
                        <div class="forecast-temps">
                          <span class="temp-high">${Math.round(i.temperature)}°</span>
                          <span class="temp-low"
                            >${Math.round(i.templow || i.temperature - 5)}°</span
                          >
                        </div>
                      </div>
                    `
    )}
                </div>
              </div>
            ` : d`
              <div class="forecast-section">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${this._t("7d_forecast")}
                  <small style="font-size: 12px; color: #666; margin-left: 10px;">
                    (0 ${this._t("days_available")})
                  </small>
                </div>
                <div style="text-align: center; padding: 20px; color: #666; font-style: italic;">
                  ⚠️ ${this._t("no_forecast_data")}<br />
                  <small>Entity: ${this.config.entity}</small><br />
                  <small>${this._t("check_devtools")}</small><br />
                  <small style="color: #999;">${this._t("try_other_entity")}</small>
                </div>
              </div>
            ` : d``;
  }
};
xn(R, "styles", z`
    .forecast-section {
      margin-top: 20px;
    }

    .section-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--primary-text-color, #fff);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-title ha-icon {
      color: var(--primary-text-color, #fff);
      font-size: 20px;
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
    @media (max-width: 768px) {
      .forecast-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `);
re([
  y({ type: Array })
], R.prototype, "forecast", 2);
re([
  y({ type: Boolean })
], R.prototype, "forecastLoading", 2);
re([
  y({ type: Boolean })
], R.prototype, "show_forecast", 2);
re([
  y({ type: Object })
], R.prototype, "config", 2);
re([
  y({ type: Function })
], R.prototype, "_t", 2);
re([
  y({ type: Function })
], R.prototype, "getWeatherIcon", 2);
re([
  y({ type: Function })
], R.prototype, "formatDate", 2);
R = re([
  O("daily-forecast-chart")
], R);
var or = Object.defineProperty, wn = Object.getOwnPropertyDescriptor, bn = (i, e, t) => e in i ? or(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Se = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? wn(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && or(e, t, n), n;
}, vn = (i, e, t) => bn(i, e + "", t);
let X = class extends L {
  hourlyForecast = [];
  forecastHours = 12;
  show_temperature = !0;
  _t;
  showHoursChartLabel;
  render() {
    return this.show_temperature === !1 ? d`` : d`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          ${this._t("temperature_hours", { hours: this.forecastHours })}
        </div>
        <div class="chart-line" style="position:relative;">
          ${this.hourlyForecast.slice(0, this.forecastHours).map((i) => {
      const e = typeof i.temperature == "number" && !isNaN(i.temperature) ? i.temperature : null;
      return d`
              <div
                style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;margin-bottom:10px;"
              >
                <span
                  style="font-size:11px; color:#db4a34; writing-mode:vertical-rl; transform:rotate(180deg); min-height:30px; font-variant-numeric:tabular-nums;"
                >
                  ${e !== null ? e.toFixed(1) + " °C" : ""}
                </span>
              </div>
            `;
    })}
        </div>
        <div style="width:100%;height:90px;overflow-x:auto;">
          ${(() => {
      const i = this.hourlyForecast.slice(0, this.forecastHours).map(
        (u) => typeof u.temperature == "number" && !isNaN(u.temperature) ? u.temperature : null
      ), e = i.filter((u) => u !== null);
      if (e.length < 2) return "";
      const t = Math.min(...e), n = Math.max(...e) - t || 1, s = i.length, o = Math.max(360, Math.min(1600, s * 250)), a = 50, l = o / (s - 1), c = i.map((u, g) => u !== null ? `${g * l},${a - (u - t) / n * a}` : "").filter(Boolean).join(" "), h = this.forecastHours === 6 ? "84%" : this.forecastHours - 6 + 84 + "%", p = this.forecastHours === 6 ? "8%" : (18 - this.forecastHours) * 0.5 + 2 + "%";
      return w`<svg width="${h}" height="${a}" viewBox="0 0 ${o} ${a}" preserveAspectRatio="none" style="display:block;padding-left:${p};">
                <polyline points="${c}" fill="none" stroke="#db4a34" stroke-width="3" />
                ${i.map((u, g) => u !== null ? w`<circle r="3" fill="#db4a34" cx="${g * l}" cy="${a - (u - t) / n * a}" />` : null)}
                </svg>`;
    })()}
        </div>
        ${this.showHoursChartLabel(this.forecastHours)}
      </div>
    `;
  }
};
vn(X, "styles", z`
    .section-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--primary-text-color, #fff);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-title ha-icon {
      color: var(--primary-text-color, #fff);
      font-size: 20px;
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

    .chart-labels {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--secondary-text-color, #000);
    }
  `);
Se([
  y({ type: Array })
], X.prototype, "hourlyForecast", 2);
Se([
  y({ type: Number })
], X.prototype, "forecastHours", 2);
Se([
  y({ type: Boolean })
], X.prototype, "show_temperature", 2);
Se([
  y({ type: Function })
], X.prototype, "_t", 2);
Se([
  y({ type: Function })
], X.prototype, "showHoursChartLabel", 2);
X = Se([
  O("forecast-temperature-chart")
], X);
var ar = Object.defineProperty, _n = Object.getOwnPropertyDescriptor, $n = (i, e, t) => e in i ? ar(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Me = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? _n(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && ar(e, t, n), n;
}, kn = (i, e, t) => $n(i, e + "", t);
let J = class extends L {
  hourlyForecast = [];
  forecastHours = 12;
  show_precipitation = !0;
  _t;
  showHoursChartLabel;
  render() {
    return this.show_precipitation === !1 ? d`` : this.hourlyForecast.length === 0 || !this.hourlyForecast.slice(0, this.forecastHours).some((i) => typeof i.precipitation == "number" && !isNaN(i.precipitation)) ? d`
        <div class="chart">
          <div class="section-title">
            <ha-icon icon="mdi:weather-pouring"></ha-icon>
            ${this._t("precipitation_hours", { hours: this.forecastHours })}
          </div>
          <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
            ${this._t("no_precipitation_data")}
          </div>
        </div>
      ` : d`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:weather-pouring"></ha-icon>
          ${this._t("precipitation_hours", { hours: this.forecastHours })}
        </div>
        <div class="chart-bars">
          ${this.hourlyForecast.slice(0, this.forecastHours).map((i) => {
      const e = typeof i.precipitation == "number" && !isNaN(i.precipitation) ? i.precipitation : null, t = e !== null ? Math.round(e) : 2, r = typeof i.precipitation_probability == "number" && !isNaN(i.precipitation_probability) ? i.precipitation_probability : null, n = r !== null ? Math.round(r % 10) : 2;
      return d`
              <div
                style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; position:relative;"
              >
                <div
                  style="height:32px; display:flex; align-items:flex-end; justify-content:center;"
                >
                  <span
                    style="font-size:11px; color:#3498db; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                  >
                    ${e !== null ? e.toFixed(1) + " mm" : ""}
                  </span>
                </div>
                <div
                  class="chart-bar-precipitation-prob"
                  style="height: ${n}px; position:absolute; bottom:0; left:50%; transform:translateX(-50%); z-index:0; width:18px;"
                ></div>
                <div
                  class="chart-bar-precipitation"
                  style="height: ${t}px; position:relative; z-index:1; width:18px;"
                ></div>
              </div>
            `;
    })}
        </div>
        ${this.showHoursChartLabel(this.forecastHours)}
      </div>
    `;
  }
};
kn(J, "styles", z`
    .section-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--primary-text-color, #fff);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-title ha-icon {
      color: var(--primary-text-color, #fff);
      font-size: 20px;
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

    .chart-labels {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--secondary-text-color, #000);
    }
  `);
Me([
  y({ type: Array })
], J.prototype, "hourlyForecast", 2);
Me([
  y({ type: Number })
], J.prototype, "forecastHours", 2);
Me([
  y({ type: Boolean })
], J.prototype, "show_precipitation", 2);
Me([
  y({ type: Function })
], J.prototype, "_t", 2);
Me([
  y({ type: Function })
], J.prototype, "showHoursChartLabel", 2);
J = Me([
  O("precipitation-chart")
], J);
var lr = Object.defineProperty, An = Object.getOwnPropertyDescriptor, Cn = (i, e, t) => e in i ? lr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, ne = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? An(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && lr(e, t, n), n;
}, Sn = (i, e, t) => Cn(i, e + "", t);
let U = class extends L {
  hourlyForecast = [];
  forecastHours = 12;
  show_sunshine = !0;
  weatherEntity;
  sun_entity;
  _t;
  showHoursChartLabel;
  render() {
    return this.show_sunshine !== !1 ? this.hourlyForecast.length > 0 && this.hourlyForecast.slice(0, this.forecastHours).some((i) => {
      const e = i;
      return typeof e.sunshine == "number" && !isNaN(e.sunshine) || typeof e.sunshine_duration == "number" && !isNaN(e.sunshine_duration);
    }) ? d`
            <div class="chart-sunshine" style="position:relative;">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${this._t("sunshine_hours", { hours: this.forecastHours })}
              </div>
              <div class="chart-bars" style="position:relative;">
                ${(() => {
      const i = this.weatherEntity?.attributes?.sunrise ? new Date(this.weatherEntity.attributes.sunrise) : new Date((this.sun_entity?.attributes).next_rising) || null, e = this.weatherEntity?.attributes?.sunset ? new Date(this.weatherEntity.attributes.sunset) : new Date((this.sun_entity?.attributes).next_setting) || null, t = this.hourlyForecast[0]?.datetime ? new Date(this.hourlyForecast[0].datetime) : null;
      let r = -1, n = -1;
      return i && t && (r = Math.round(
        (i.getTime() - t.getTime()) / (3600 * 1e3)
      )), e && t && (n = Math.round(
        (e.getTime() - t.getTime()) / (3600 * 1e3)
      )), d`
                    ${r >= 0 && r < this.forecastHours ? d`
                          <div
                            style="position:absolute;left:calc(${r / this.forecastHours * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-up"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d">
                              ${i ? i.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      }) : ""}</span
                            >
                          </div>
                        ` : ""}
                    ${n >= 0 && n < this.forecastHours ? d`
                          <div
                            style="position:absolute;left:calc(${n / this.forecastHours * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-down"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d;">
                              ${e ? e.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      }) : ""}</span
                            >
                          </div>
                        ` : ""}
                  `;
    })()}
                ${this.hourlyForecast.slice(0, this.forecastHours).map((i) => {
      const e = i, t = typeof e.sunshine == "number" && !isNaN(e.sunshine) ? e.sunshine : typeof e.sunshine_duration == "number" && !isNaN(e.sunshine_duration) ? e.sunshine_duration : null, r = t !== null ? Math.round(t) : 2;
      return d`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#fbc02d; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${t !== null ? t.toFixed(0) + " min" : ""}
                      </span>
                      <div class="chart-bar-sunshine" style="height: ${r}px;"></div>
                    </div>
                  `;
    })}
              </div>
              ${this.showHoursChartLabel(this.forecastHours)}
            </div>
          ` : d`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${this._t("sunshine_hours", { hours: this.forecastHours })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${this._t("no_sunshine_data")}
              </div>
            </div>
          ` : d``;
  }
};
Sn(U, "styles", z`
    .chart {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: 15px;
      margin-top: 15px;
      border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
    }
    .chart-sunshine {
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

    .chart-bar-sunshine {
      width: 18px;
      background: linear-gradient(to top, #ffe082, #fbc02d);
      border-radius: 2px 2px 0 0;
      min-height: 2px;
    }

    .chart-line {
      display: flex;
      justify-content: space-between;
      height: 60px;
      margin-bottom: 10px;
    }

    .chart-labels {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--secondary-text-color, #000);
    }

    .section-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--primary-text-color, #fff);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-title ha-icon {
      color: var(--primary-text-color, #fff);
      font-size: 20px;
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
  `);
ne([
  y({ type: Array })
], U.prototype, "hourlyForecast", 2);
ne([
  y({ type: Number })
], U.prototype, "forecastHours", 2);
ne([
  y({ type: Boolean })
], U.prototype, "show_sunshine", 2);
ne([
  y({ type: Object })
], U.prototype, "weatherEntity", 2);
ne([
  y({ type: Object })
], U.prototype, "sun_entity", 2);
ne([
  y({ type: Function })
], U.prototype, "_t", 2);
ne([
  y({ type: Function })
], U.prototype, "showHoursChartLabel", 2);
U = ne([
  O("sunshine-chart")
], U);
var cr = Object.defineProperty, Mn = Object.getOwnPropertyDescriptor, Tn = (i, e, t) => e in i ? cr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Te = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Mn(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && cr(e, t, n), n;
}, Nn = (i, e, t) => Tn(i, e + "", t);
let ee = class extends L {
  hourlyForecast = [];
  forecastHours = 12;
  show_wind = !0;
  _t;
  showHoursChartLabel;
  render() {
    return this.show_wind !== !1 ? this.hourlyForecast.length > 0 && this.hourlyForecast.slice(0, this.forecastHours).some((i) => typeof i.wind_speed == "number" && !isNaN(i.wind_speed)) ? d`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-windy"></ha-icon>
                ${this._t("wind_hours", { hours: this.forecastHours })}
              </div>
              <div class="chart-line-wind" style="position:relative;">
                ${this.hourlyForecast.slice(0, this.forecastHours).map((i) => {
      const e = typeof i.wind_speed == "number" && !isNaN(i.wind_speed) ? i.wind_speed : null;
      return d`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#44739e; writing-mode:vertical-rl; transform:rotate(180deg); min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${e !== null ? e.toFixed(1) + " km/h" : ""}
                      </span>
                    </div>
                  `;
    })}
              </div>
              <div class="chart-line-wind" style="position:relative;">
                ${this.hourlyForecast.slice(0, this.forecastHours).map((i) => {
      const e = typeof i.wind_bearing == "number" && !isNaN(i.wind_bearing) ? i.wind_bearing : null;
      return d`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;"
                    >
                      <div class="wind-compass" style="width: 12px; height: 12px; margin: 0 auto;">
                        <div
                          class="wind-arrow"
                          style="transform: translate(-50%, -100%) rotate(${e !== null ? e : 0}deg);"
                        ></div>
                      </div>
                    </div>
                  `;
    })}
              </div>
              <div style="width:100%;height:90px;overflow-x:auto;">
                ${(() => {
      const i = this.hourlyForecast.slice(0, this.forecastHours).map(
        (u) => typeof u.wind_speed == "number" && !isNaN(u.wind_speed) ? u.wind_speed : null
      ), e = i.filter((u) => u !== null);
      if (e.length < 2) return "";
      const t = Math.min(...e), n = Math.max(...e) - t || 1, s = i.length, o = Math.max(360, Math.min(1600, s * 250)), a = 50, l = o / (s - 1), c = i.map((u, g) => u !== null ? `${g * l},${a - (u - t) / n * a}` : "").filter(Boolean).join(" "), h = this.forecastHours === 6 ? "84%" : this.forecastHours - 6 + 84 + "%", p = this.forecastHours === 6 ? "8%" : (18 - this.forecastHours) * 0.5 + 2 + "%";
      return w`<svg width="${h}" height="${a}" viewBox="0 0 ${o} ${a}" preserveAspectRatio="none" style="display:block;padding-left:${p};">
                <polyline points="${c}" fill="none" stroke="#44739e" stroke-width="3" />
                ${i.map((u, g) => u !== null ? w`<circle r="3" fill="#44739e" cx="${g * l}" cy="${a - (u - t) / n * a}" />` : null)}
              </svg>`;
    })()}
              </div>
              ${this.showHoursChartLabel(this.forecastHours)}
            </div>
          ` : d`` : d``;
  }
};
Nn(ee, "styles", z`
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
    .section-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--primary-text-color, #fff);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-title ha-icon {
      color: var(--primary-text-color, #fff);
      font-size: 20px;
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
  `);
Te([
  y({ type: Array })
], ee.prototype, "hourlyForecast", 2);
Te([
  y({ type: Number })
], ee.prototype, "forecastHours", 2);
Te([
  y({ type: Boolean })
], ee.prototype, "show_wind", 2);
Te([
  y({ type: Function })
], ee.prototype, "_t", 2);
Te([
  y({ type: Function })
], ee.prototype, "showHoursChartLabel", 2);
ee = Te([
  O("wind-chart")
], ee);
var dr = Object.defineProperty, Ln = Object.getOwnPropertyDescriptor, Hn = (i, e, t) => e in i ? dr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Ne = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Ln(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && dr(e, t, n), n;
}, Gn = (i, e, t) => Hn(i, e + "", t);
let te = class extends L {
  forecast = [];
  hourlyForecast = [];
  config;
  getWeatherIcon;
  standalone = !1;
  // fallback function to get a CSS variable with a default value
  getCSSVariable(i, e = "50") {
    const t = getComputedStyle(document.documentElement).getPropertyValue(i).trim();
    return Number.parseInt(t || e);
  }
  render() {
    const i = this.forecast.slice(0, 7), e = this.hourlyForecast.slice(0, i.length * 24);
    if (!e.length) return d`<div>No hourly forecast available</div>`;
    const t = i.length, r = this.standalone && this.config.grid_options?.rows || 2, n = this.standalone ? r * this.getCSSVariable("--row-height", "56") : 200, o = (this.standalone, 400), a = n, l = new Date(e[0].datetime);
    (new Date(e[e.length - 1].datetime).getTime() - l.getTime()) / (3600 * 1e3) + 1;
    const h = 16, p = a - h * 2, g = (o - h * 2) / t, D = Math.min(
      120,
      Math.max(80, p * 0.35)
    ), we = Math.max(10, p * 0.05), rt = p - D - we, q = Math.min(g * 0.7, D * 0.4), Ee = Math.max(10, D * 0.08), Lt = Math.max(12, D * 0.12), Z = h + 10 + Ee, pi = Z + 10, Wr = pi + q + 10, ui = h + D + we, se = g / 24, st = e.map((f) => typeof f.temperature == "number" ? f.temperature : null), Rr = Math.min(...st.filter((f) => f !== null)), Ur = Math.max(...st.filter((f) => f !== null)), Y = ui, F = ui + rt, fi = e.map((f) => typeof f.precipitation == "number" ? f.precipitation : 0), gi = e.map(
      (f) => typeof f.precipitation_probability == "number" ? f.precipitation_probability % 10 : 0
    );
    Math.max(...fi, ...gi, 1);
    const mi = {};
    i.forEach((f, m) => {
      const b = new Date(f.datetime), _ = `${b.getFullYear()}-${b.getMonth()}-${b.getDate()}`;
      mi[_] = m;
    });
    function Fr(f) {
      const m = `${f.getFullYear()}-${f.getMonth()}-${f.getDate()}`, b = mi[m], _ = f.getHours();
      return {
        dayIdx: b !== void 0 ? b : -1,
        hourInDay: _ >= 0 && _ < 24 ? _ : -1
      };
    }
    const ze = {};
    for (let f = 0; f < t; f++)
      for (let m = 0; m < 24; m++) {
        const b = `${f}-${m}`;
        ze[b] = null;
      }
    e.forEach((f, m) => {
      if (f.datetime && st[m] !== null) {
        const b = new Date(f.datetime), { dayIdx: _, hourInDay: H } = Fr(b), I = `${_}-${H}`;
        _ >= 0 && _ < t && H >= 0 && H < 24 ? ze[I] = {
          temp: st[m],
          precip: fi[m],
          precipProb: gi[m],
          originalIndex: m
        } : console.warn(`Data point ${m} outside bounds:`, {
          dayIdx: _,
          hourInDay: H,
          nDays: t,
          dt: b.toISOString()
        });
      }
    });
    let Oe = Math.floor(Rr / 5) * 5, Pe = Math.ceil(Ur / 5) * 5;
    Oe > 0 && (Oe = 0), Pe < 0 && (Pe = 0);
    const Ht = Pe - Oe, yi = [], Gt = [];
    for (let f = 0; f < t; f++)
      for (let m = 0; m < 24; m++) {
        const b = `${f}-${m}`, _ = ze[b];
        if (_ && _.temp !== null) {
          const H = h + f * g + m * se + se / 2, I = F - (_.temp - Oe) / Ht * (F - Y);
          Gt.push(`${H},${I}`);
        }
      }
    Gt.length > 0 && yi.push(
      w`
          <!-- Main temperature line -->
          <polyline points="${Gt.join(" ")}" fill="none" stroke="#e74c3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        `
    );
    const be = Math.max(3, Math.floor(se) - 2), xi = F, wi = 5 / Ht * (F - Y) / 5;
    function Ir(f) {
      if (f <= 0) return "transparent";
      const m = [
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
      let b = m[0], _ = m[m.length - 1];
      for (let P = 1; P < m.length; P++)
        if (f < m[P].val) {
          _ = m[P], b = m[P - 1];
          break;
        }
      const H = (f - b.val) / (_.val - b.val), I = Math.round(b.color.r + (_.color.r - b.color.r) * H), De = Math.round(b.color.g + (_.color.g - b.color.g) * H), We = Math.round(b.color.b + (_.color.b - b.color.b) * H);
      return `rgb(${I},${De},${We})`;
    }
    const bi = [];
    for (let f = 0; f < t; f++)
      for (let m = 0; m < 24; m++) {
        const b = `${f}-${m}`, _ = ze[b];
        if (_ && _.precipProb > 0) {
          const H = h + f * g + m * se + se / 2 - be / 2, I = h + f * g, De = h + (f + 1) * g - be, We = Math.max(I, Math.min(De, H)), P = _.precipProb * wi;
          bi.push(
            w`<rect x="${We}" y="${xi - P}" width="${be}" height="${P}"
              fill="#988d8dff" opacity="0.4" rx="1.5"/>`
          );
        }
      }
    const vi = [];
    for (let f = 0; f < t; f++)
      for (let m = 0; m < 24; m++) {
        const b = `${f}-${m}`, _ = ze[b];
        if (_ && _.precip > 0) {
          const H = h + f * g + m * se + se / 2 - be / 2, I = h + f * g, De = h + (f + 1) * g - be, We = Math.max(I, Math.min(De, H)), P = _.precip * wi, Br = Ir(_.precip);
          vi.push(
            w`<rect x="${We}" y="${xi - P}" width="${be}" height="${P}"
              fill="${Br}" opacity="1" rx="1.5"/>`
          );
        }
      }
    const ot = [];
    if (e.length > 0)
      for (let f = 0; f <= t; f++) {
        const m = h + f * g;
        f === 0 ? ot.push(
          w`<line x1="${m}" y1="${Y}" x2="${m}" y2="${F}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
        ) : f === t ? ot.push(
          w`<line x1="${m}" y1="${Y}" x2="${m}" y2="${F}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
        ) : ot.push(
          w`<line x1="${m}" y1="${Y}" x2="${m}" y2="${F}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
        );
      }
    const _i = [];
    if (t > 0)
      for (let f = 0; f < t; f++) {
        const m = h + f * g + g / 2, b = typeof i[f].templow == "number" ? Math.round(i[f].templow || i[f].temperature - 5) : "", _ = typeof i[f].temperature == "number" ? Math.round(i[f].temperature) : "";
        _i.push(w`
        <g>
          <!-- Weekday -->
          <text x="${m}" y="${Z}" text-anchor="middle" font-size="${Ee}" class="weather-day">
            ${new Date(i[f].datetime).toLocaleDateString(void 0, { weekday: "short" })}
          </text>
          <!-- Icon -->
          <foreignObject x="${m - q / 2}" y="${pi}" width="${q}" height="${q}">
              ${this.getWeatherIcon(i[f].condition || "", this.config.enable_animate_weather_icons ? "animated" : "mdiAsSVG", q + "px", !0)}
          </foreignObject>
          <!-- Min/Max temp -->
          <text class="weather-temp" x="${m}" y="${Wr}" text-anchor="middle" font-size="${Lt}">${b}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${_}°</tspan></text>
        </g>
      `);
      }
    const $i = [];
    for (let f = Oe; f <= Pe; f += 5)
      if (f % 5 === 0) {
        const m = Y + (Pe - f) / Ht * (F - Y);
        if (m >= Y && m <= F) {
          const b = f % 10 === 0;
          $i.push(
            w`<line x1="${h}" y1="${m}" x2="${o - h}" y2="${m}" 
                 stroke="#ddd" 
                 stroke-width="${b ? 1 : 0.5}" 
                 stroke-dasharray="${b ? "none" : "2,2"}" 
                 opacity="0.6" />
                 <text x="${h + 5}" y="${m - 2}" font-size="10" fill="#888" opacity="0.8">${f}°</text>`
          );
        }
      }
    return d`
      <style>
        .chart {
        ${this.standalone === !1 ? "background: var(--card-background-color, #fff);margin-top: 15px;" : "width: 100%; height: 100%;"}
          border-radius: 12px;
          padding: 0;
          border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
          overflow: hidden;
          position: relative; /* Enable absolute positioning for SVG overlay */
        }
        .chart svg {
          width: 100%;
          height: 100%;
        }
      </style>
      <div class="chart">
        <svg width="100%" height="100%" viewBox="0 0 ${o} ${a}" style="display:block;">
          <!-- Background grid lines (behind everything) -->
          ${$i} ${ot}
          <!-- Day groups (labels and icons) -->
          ${_i}
          <!-- Precipitation bars -->
          ${bi} ${vi}
        </svg>

        <!-- Temperature lines in completely separate SVG overlay (continuous line, always on top) -->
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 ${o} ${a}"
          style="display:block; position: absolute; top: 0; left: 0; pointer-events: none;"
        >
          ${yi}
        </svg>
      </div>
    `;
  }
};
Gn(te, "styles", z`
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

    .chart-labels {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--secondary-text-color, #000);
    }
    .weather-temp {
      fill: var(--primary-text-color, #fff);
    }
    .weather-day {
      fill: var(--primary-text-color, #fff);
    }
  `);
Ne([
  y({ type: Array })
], te.prototype, "forecast", 2);
Ne([
  y({ type: Array })
], te.prototype, "hourlyForecast", 2);
Ne([
  y({ type: Object })
], te.prototype, "config", 2);
Ne([
  y({ type: Function })
], te.prototype, "getWeatherIcon", 2);
Ne([
  y({ type: Boolean })
], te.prototype, "standalone", 2);
te = Ne([
  O("daily-forecast-diagram")
], te);
const Wt = "langChanged";
function En(i, e, t) {
  return Object.entries(Rt(e || {})).reduce((r, [n, s]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Rt(s))), i);
}
function zn(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function Rt(i) {
  return typeof i == "function" ? i() : i;
}
const On = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: zn,
  interpolate: En,
  translationCache: {}
});
let Ye = On();
function Le(i) {
  return Ye = Object.assign(Object.assign({}, Ye), i);
}
function Pn(i) {
  window.dispatchEvent(new CustomEvent(Wt, { detail: i }));
}
function Dn(i, e, t = Ye) {
  Pn({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function Wn(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener(Wt, t, e), () => window.removeEventListener(Wt, t);
}
async function et(i, e = Ye) {
  const t = await e.loader(i, e);
  e.translationCache = {}, Dn(i, t, e);
}
function x(i, e, t = Ye) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? Rt(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { CHILD: 2 }, Rn = (i) => (...e) => ({ _$litDirective$: i, values: e });
let pr = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, r) {
    this._$Ct = e, this._$AM = t, this._$Ci = r;
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
var zt;
const ft = window, ke = ft.trustedTypes, Ei = ke ? ke.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, Ut = "$lit$", Q = `lit$${(Math.random() + "").slice(9)}$`, ur = "?" + Q, Un = `<${ur}>`, ue = document, gt = () => ue.createComment(""), Ke = (i) => i === null || typeof i != "object" && typeof i != "function", fr = Array.isArray, Fn = (i) => fr(i) || typeof i?.[Symbol.iterator] == "function", Ot = `[ 	
\f\r]`, Ue = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, zi = /-->/g, Oi = />/g, ae = RegExp(`>|${Ot}(?:([^\\s"'>=/]+)(${Ot}*=${Ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Pi = /'/g, Di = /"/g, gr = /^(?:script|style|textarea|title)$/i, Ae = Symbol.for("lit-noChange"), S = Symbol.for("lit-nothing"), Wi = /* @__PURE__ */ new WeakMap(), ce = ue.createTreeWalker(ue, 129, null, !1);
function mr(i, e) {
  if (!Array.isArray(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ei !== void 0 ? Ei.createHTML(e) : e;
}
const In = (i, e) => {
  const t = i.length - 1, r = [];
  let n, s = e === 2 ? "<svg>" : "", o = Ue;
  for (let a = 0; a < t; a++) {
    const l = i[a];
    let c, h, p = -1, u = 0;
    for (; u < l.length && (o.lastIndex = u, h = o.exec(l), h !== null); ) u = o.lastIndex, o === Ue ? h[1] === "!--" ? o = zi : h[1] !== void 0 ? o = Oi : h[2] !== void 0 ? (gr.test(h[2]) && (n = RegExp("</" + h[2], "g")), o = ae) : h[3] !== void 0 && (o = ae) : o === ae ? h[0] === ">" ? (o = n ?? Ue, p = -1) : h[1] === void 0 ? p = -2 : (p = o.lastIndex - h[2].length, c = h[1], o = h[3] === void 0 ? ae : h[3] === '"' ? Di : Pi) : o === Di || o === Pi ? o = ae : o === zi || o === Oi ? o = Ue : (o = ae, n = void 0);
    const g = o === ae && i[a + 1].startsWith("/>") ? " " : "";
    s += o === Ue ? l + Un : p >= 0 ? (r.push(c), l.slice(0, p) + Ut + l.slice(p) + Q + g) : l + Q + (p === -2 ? (r.push(void 0), a) : g);
  }
  return [mr(i, s + (i[t] || "<?>") + (e === 2 ? "</svg>" : "")), r];
};
let Ft = class yr {
  constructor({ strings: e, _$litType$: t }, r) {
    let n;
    this.parts = [];
    let s = 0, o = 0;
    const a = e.length - 1, l = this.parts, [c, h] = In(e, t);
    if (this.el = yr.createElement(c, r), ce.currentNode = this.el.content, t === 2) {
      const p = this.el.content, u = p.firstChild;
      u.remove(), p.append(...u.childNodes);
    }
    for (; (n = ce.nextNode()) !== null && l.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const p = [];
          for (const u of n.getAttributeNames()) if (u.endsWith(Ut) || u.startsWith(Q)) {
            const g = h[o++];
            if (p.push(u), g !== void 0) {
              const v = n.getAttribute(g.toLowerCase() + Ut).split(Q), C = /([.?@])?(.*)/.exec(g);
              l.push({ type: 1, index: s, name: C[2], strings: v, ctor: C[1] === "." ? jn : C[1] === "?" ? qn : C[1] === "@" ? Zn : At });
            } else l.push({ type: 6, index: s });
          }
          for (const u of p) n.removeAttribute(u);
        }
        if (gr.test(n.tagName)) {
          const p = n.textContent.split(Q), u = p.length - 1;
          if (u > 0) {
            n.textContent = ke ? ke.emptyScript : "";
            for (let g = 0; g < u; g++) n.append(p[g], gt()), ce.nextNode(), l.push({ type: 2, index: ++s });
            n.append(p[u], gt());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ur) l.push({ type: 2, index: s });
      else {
        let p = -1;
        for (; (p = n.data.indexOf(Q, p + 1)) !== -1; ) l.push({ type: 7, index: s }), p += Q.length - 1;
      }
      s++;
    }
  }
  static createElement(e, t) {
    const r = ue.createElement("template");
    return r.innerHTML = e, r;
  }
};
function Ce(i, e, t = i, r) {
  var n, s, o, a;
  if (e === Ae) return e;
  let l = r !== void 0 ? (n = t._$Co) === null || n === void 0 ? void 0 : n[r] : t._$Cl;
  const c = Ke(e) ? void 0 : e._$litDirective$;
  return l?.constructor !== c && ((s = l?._$AO) === null || s === void 0 || s.call(l, !1), c === void 0 ? l = void 0 : (l = new c(i), l._$AT(i, t, r)), r !== void 0 ? ((o = (a = t)._$Co) !== null && o !== void 0 ? o : a._$Co = [])[r] = l : t._$Cl = l), l !== void 0 && (e = Ce(i, l._$AS(i, e.values), l, r)), e;
}
let Bn = class {
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
    const { el: { content: r }, parts: n } = this._$AD, s = ((t = e?.creationScope) !== null && t !== void 0 ? t : ue).importNode(r, !0);
    ce.currentNode = s;
    let o = ce.nextNode(), a = 0, l = 0, c = n[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let h;
        c.type === 2 ? h = new xr(o, o.nextSibling, this, e) : c.type === 1 ? h = new c.ctor(o, c.name, c.strings, this, e) : c.type === 6 && (h = new Yn(o, this, e)), this._$AV.push(h), c = n[++l];
      }
      a !== c?.index && (o = ce.nextNode(), a++);
    }
    return ce.currentNode = ue, s;
  }
  v(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}, xr = class wr {
  constructor(e, t, r, n) {
    var s;
    this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = n, this._$Cp = (s = n?.isConnected) === null || s === void 0 || s;
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
    e = Ce(this, e, t), Ke(e) ? e === S || e == null || e === "" ? (this._$AH !== S && this._$AR(), this._$AH = S) : e !== this._$AH && e !== Ae && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : Fn(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== S && Ke(this._$AH) ? this._$AA.nextSibling.data = e : this.$(ue.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var t;
    const { values: r, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Ft.createElement(mr(n.h, n.h[0]), this.options)), n);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === s) this._$AH.v(r);
    else {
      const o = new Bn(s, this), a = o.u(this.options);
      o.v(r), this.$(a), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = Wi.get(e.strings);
    return t === void 0 && Wi.set(e.strings, t = new Ft(e)), t;
  }
  T(e) {
    fr(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, n = 0;
    for (const s of e) n === t.length ? t.push(r = new wr(this.k(gt()), this.k(gt()), this, this.options)) : r = t[n], r._$AI(s), n++;
    n < t.length && (this._$AR(r && r._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) === null || r === void 0 || r.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const n = e.nextSibling;
      e.remove(), e = n;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cp = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
};
class At {
  constructor(e, t, r, n, s) {
    this.type = 1, this._$AH = S, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = s, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = S;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, r, n) {
    const s = this.strings;
    let o = !1;
    if (s === void 0) e = Ce(this, e, t, 0), o = !Ke(e) || e !== this._$AH && e !== Ae, o && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++) c = Ce(this, a[r + l], t, l), c === Ae && (c = this._$AH[l]), o || (o = !Ke(c) || c !== this._$AH[l]), c === S ? e = S : e !== S && (e += (c ?? "") + s[l + 1]), this._$AH[l] = c;
    }
    o && !n && this.j(e);
  }
  j(e) {
    e === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
let jn = class extends At {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === S ? void 0 : e;
  }
};
const Vn = ke ? ke.emptyScript : "";
let qn = class extends At {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== S ? this.element.setAttribute(this.name, Vn) : this.element.removeAttribute(this.name);
  }
}, Zn = class extends At {
  constructor(e, t, r, n, s) {
    super(e, t, r, n, s), this.type = 5;
  }
  _$AI(e, t = this) {
    var r;
    if ((e = (r = Ce(this, e, t, 0)) !== null && r !== void 0 ? r : S) === Ae) return;
    const n = this._$AH, s = e === S && n !== S || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, o = e !== S && (n === S || s);
    s && this.element.removeEventListener(this.name, this, n), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
};
class Yn {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Ce(this, e);
  }
}
const Ri = ft.litHtmlPolyfillSupport;
Ri?.(Ft, xr), ((zt = ft.litHtmlVersions) !== null && zt !== void 0 ? zt : ft.litHtmlVersions = []).push("2.8.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kn = (i) => i.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const je = (i, e) => {
  var t, r;
  const n = i._$AN;
  if (n === void 0) return !1;
  for (const s of n) (r = (t = s)._$AO) === null || r === void 0 || r.call(t, e, !1), je(s, e);
  return !0;
}, mt = (i) => {
  let e, t;
  do {
    if ((e = i._$AM) === void 0) break;
    t = e._$AN, t.delete(i), i = e;
  } while (t?.size === 0);
}, br = (i) => {
  for (let e; e = i._$AM; i = e) {
    let t = e._$AN;
    if (t === void 0) e._$AN = t = /* @__PURE__ */ new Set();
    else if (t.has(i)) break;
    t.add(i), Jn(e);
  }
};
function Qn(i) {
  this._$AN !== void 0 ? (mt(this), this._$AM = i, br(this)) : this._$AM = i;
}
function Xn(i, e = !1, t = 0) {
  const r = this._$AH, n = this._$AN;
  if (n !== void 0 && n.size !== 0) if (e) if (Array.isArray(r)) for (let s = t; s < r.length; s++) je(r[s], !1), mt(r[s]);
  else r != null && (je(r, !1), mt(r));
  else je(this, i);
}
const Jn = (i) => {
  var e, t, r, n;
  i.type == hr.CHILD && ((e = (r = i)._$AP) !== null && e !== void 0 || (r._$AP = Xn), (t = (n = i)._$AQ) !== null && t !== void 0 || (n._$AQ = Qn));
};
class es extends pr {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, t, r) {
    super._$AT(e, t, r), br(this), this.isConnected = e._$AU;
  }
  _$AO(e, t = !0) {
    var r, n;
    e !== this.isConnected && (this.isConnected = e, e ? (r = this.reconnected) === null || r === void 0 || r.call(this) : (n = this.disconnected) === null || n === void 0 || n.call(this)), t && (je(this, e), mt(this));
  }
  setValue(e) {
    if (Kn(this._$Ct)) this._$Ct._$AI(e, this);
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
class ts extends es {
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
    this.langChangedSubscription == null && (this.langChangedSubscription = Wn(this.langChanged.bind(this)));
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
class is extends ts {
  render(e, t, r) {
    return this.renderValue(() => x(e, t, r));
  }
}
const A = Rn(is);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ui extends pr {
  constructor(e) {
    if (super(e), this.et = S, e.type !== hr.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === S || e == null) return this.ft = void 0, this.et = e;
    if (e === Ae) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.et) return this.ft;
    this.et = e;
    const t = [e];
    return t.raw = t, this.ft = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
Ui.directiveName = "unsafeHTML", Ui.resultType = 1;
var Fi, Ii;
(function(i) {
  i.language = "language", i.system = "system", i.comma_decimal = "comma_decimal", i.decimal_comma = "decimal_comma", i.space_comma = "space_comma", i.none = "none";
})(Fi || (Fi = {})), (function(i) {
  i.language = "language", i.system = "system", i.am_pm = "12", i.twenty_four = "24";
})(Ii || (Ii = {}));
var yt = function(i, e, t, r) {
  r = r || {}, t = t ?? {};
  var n = new Event(e, { bubbles: r.bubbles === void 0 || r.bubbles, cancelable: !!r.cancelable, composed: r.composed === void 0 || r.composed });
  return n.detail = t, i.dispatchEvent(n), n;
};
function at(i, e, t) {
  const r = /* @__PURE__ */ new Date();
  return d`
    <div class="chart-labels">
      ${Array.from({ length: i }, (n, s) => {
    const a = new Date(r.getTime() + s * 60 * 60 * 1e3).toLocaleTimeString([], { hour: "2-digit" });
    return d`
          <div
            style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
          >
            <span>${a}</span>
          </div>
        `;
  })}
    </div>
  `;
}
function rs(i) {
  const e = new Date(i);
  return ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"][e.getDay()];
}
const He = {
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
      chart_forecast: "Prognose-Diagramm",
      descr: {
        entity: "Die Wetter-Entity ist erforderlich und sollte von der Integration SwissWeather sein. Wenn eine andere Wetter Entity genutzt wird kann es passieren, das nicht alle Daten korrekt angezeuigt werden.",
        sun_entity: "Die Sonnen-Entity ist erforderlich, um Sonnenaufgangs- und Sonnenuntergangszeiten anzuzeigen.",
        sunshine_entity: "Die Sonnenscheindauer-Entity wird benötigt, um die Sonnenscheindauer anzuzeigen.",
        wind_entity: "Die Wind-Entity wird benötigt, um die Windgeschwindigkeit anzuzeigen.",
        wind_direction_entity: "Die Windrichtungs-Entity wird benötigt, um die Windrichtung anzuzeigen.",
        warning_entity: "Die Wetterwarnungen Entity wird von SiwssWeather angelegt und kann hier verwendet werden. Sollte sie nicht gesetzt sein, werden keine Wetterwarnungen angezeigt.",
        precipitation_entity: "Die Niederschlags-Entity wird benötigt, um die Niederschlagsprognose anzuzeigen.",
        show_forecast: "Die Wettervorhersage zeigt die Vorhersage mit maximal 7 Tagen an, je nach dem, was der Wetterdienst liefert.",
        show_temperature: "Zeige das Temperaturdiagramm an, mit den Vorhersage anhand der eingestellten Stunden",
        show_precipitation: "Zeige das Niederschlags an, mit den Vorhersage anhand der eingestellten Stunden",
        show_sunshine: "Zeige das Sonnenscheindauerdiagramm an, mit den Vorhersage anhand der eingestellten Stunden",
        show_wind: "Zeige das Winddiagramm anm it den Vorhersage anhand der eingestellten Stunden",
        show_warnings: "Zeige Wetterwarnungen an, wenn die Wetterwarnung Entity gesetzt ist und aktuelle Warnungen existieren.",
        enable_animate_weather_icons: "Zeige animierte Icons an. Wenn ausgeschaltet, werden statische Icons angezeigt.",
        compact_mode: "Im kompakten Modus werden weniger Details angezeigt für die Tagesvorhersage und den aktuellen Daten (z.B. Windrichtung)",
        forecast_hours: "Anzahl der Stunden für die Anzeige der stündlichen Vorhersage (Standard: 6, maximal 18)",
        show_location: "Zeige den Standortnamen über dem aktuellen Wetter an",
        location: "Zeigt diesen Namen als Standort an."
      }
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
    lightning: "Gewitter",
    "lightning-rainy": "Gewitter, regnerisch",
    partlycloudy: "Teilweise bewölkt",
    pouring: "Strömender Regen",
    rainy: "Regnerisch",
    snowy: "Schneefall",
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
      chart_forecast: "Forecast Chart",
      descr: {
        entity: "The weather entity is required and should be from the SwissWeather integration. If another weather entity is used, not all data may be displayed correctly.",
        sun_entity: "The sun entity is required to display sunrise and sunset times.",
        sunshine_entity: "The sunshine entity is required to display sunshine duration.",
        wind_entity: "The wind entity is required to display wind speed.",
        wind_direction_entity: "The wind direction entity is required to display wind direction.",
        warning_entity: "The weather warnings entity is created by SwissWeather and can be used here. If it is not set, no weather warnings will be displayed.",
        precipitation_entity: "The precipitation entity is required to display the precipitation forecast.",
        show_forecast: "The weather forecast displays the forecast with up to 7 days, depending on what the weather service provides.",
        show_temperature: "Show the temperature chart with the forecast based on the set hours",
        show_precipitation: "Show the precipitation chart with the forecast based on the set hours",
        show_sunshine: "Show the sunshine duration chart with the forecast based on the set hours",
        show_wind: "Show the wind chart with the forecast based on the set hours",
        show_warnings: "Show weather warnings if the weather warning entity is set and the actul warning exists.",
        enable_animate_weather_icons: "Show animated icons. If disabled, static icons are displayed.",
        compact_mode: "In compact mode, fewer details are displayed for the daily forecast and current data (e.g. wind direction)",
        forecast_hours: "Number of hours to show in the hourly forecast (default: 6, maximum 18)",
        show_location: "Show the location name above the current weather",
        location: "Displays this name as location."
      }
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
}, ei = "swissweather", tt = `${ei}-card`, vr = `${tt}-editor`, M = [
  {
    name: "entity",
    required: !0,
    description: "config.descr.entity",
    selector: {
      entity: {
        domain: "weather"
      }
    }
  },
  {
    name: "location",
    description: "config.descr.location",
    selector: {
      text: {}
    }
  },
  {
    name: "show_location",
    description: "config.descr.show_location",
    selector: { boolean: {} }
  },
  {
    name: "wind_entity",
    description: "config.descr.wind_entity",
    selector: {
      entity: {
        domain: "sensor"
      }
    }
  },
  {
    name: "wind_direction_entity",
    description: "config.descr.wind_direction_entity",
    selector: {
      entity: {
        domain: "sensor"
      }
    }
  },
  {
    name: "sunshine_entity",
    description: "config.descr.sunshine_entity",
    selector: {
      entity: {
        domain: "sensor"
      }
    }
  },
  {
    name: "warning_entity",
    description: "config.descr.warning_entity",
    selector: {
      entity: {
        domain: "sensor"
      }
    }
  },
  {
    name: "forecast_hours",
    description: "config.descr.forecast_hours",
    selector: { number: { min: 6, max: 18, step: 1 } }
  },
  {
    name: "show_forecast",
    description: "config.descr.show_forecast",
    selector: { boolean: {} }
  },
  {
    name: "show_precipitation",
    description: "config.descr.show_precipitation",
    selector: { boolean: {} }
  },
  {
    name: "show_temperature",
    description: "config.descr.show_temperature",
    selector: { boolean: {} }
  },
  {
    name: "show_sunshine",
    description: "config.descr.show_sunshine",
    selector: { boolean: {} }
  },
  {
    name: "show_wind",
    description: "config.descr.show_wind",
    selector: { boolean: {} }
  },
  {
    name: "enable_animate_weather_icons",
    description: "config.descr.enable_animate_weather_icons",
    selector: { boolean: {} }
  },
  {
    name: "show_warnings",
    description: "config.descr.show_warnings",
    selector: { boolean: {} }
  },
  {
    name: "compact_mode",
    description: "config.descr.compact_mode",
    selector: { boolean: {} }
  },
  {
    name: "chart_order",
    description: "config.descr.chart_order",
    selector: {
      select: {
        multiple: !0,
        options: [
          { value: "temperature", label: "config.descr.temperature" },
          { value: "precipitation", label: "config.descr.precipitation" },
          { value: "sunshine", label: "config.descr.sunshine" },
          { value: "wind", label: "config.descr.wind" },
          { value: "forecast", label: "config.descr.forecast" }
        ]
      }
    }
  }
];
var ns = Object.defineProperty, ss = Object.getOwnPropertyDescriptor, Ct = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? ss(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && ns(e, t, n), n;
};
Le({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => He[i]
});
let Qe = class extends L {
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
    for (const r of t)
      e[r] === "" && delete e[r];
    this._config = e, this.requestUpdate();
  }
  static get styles() {
    return z`
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
    ], e = Array.isArray(this._config?.chart_order) ? this._config.chart_order : i.map((r) => r.key);
    if (!this.hass)
      return d`<div>Loading...</div>`;
    et((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
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
    return d`
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
      M.find((r) => r.name === "entity"),
      M.find((r) => r.name === "location"),
      M.find((r) => r.name === "show_location")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
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
      M.find((r) => r.name === "warning_entity"),
      M.find((r) => r.name === "precipitation_entity"),
      M.find((r) => r.name === "sun_entity"),
      M.find((r) => r.name === "sunshine_entity"),
      M.find((r) => r.name === "wind_entity"),
      M.find((r) => r.name === "wind_direction_entity")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
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
      M.find((r) => r.name === "forecast_hours"),
      M.find((r) => r.name === "show_forecast"),
      M.find((r) => r.name === "show_precipitation"),
      M.find((r) => r.name === "show_temperature"),
      M.find((r) => r.name === "show_sunshine"),
      M.find((r) => r.name === "show_wind"),
      M.find((r) => r.name === "enable_animate_weather_icons"),
      M.find((r) => r.name === "show_warnings"),
      M.find((r) => r.name === "compact_mode")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <!-- Chart order -->
        <div class="group">
          <div class="group-title">${x("config.group_chart_order") || "Chart Order"}</div>
          <ul style="list-style:none;padding:0;margin:0;">
            ${e.map((r, n) => {
      const s = i.find((o) => o.key === r);
      return d` <li style="display:flex;align-items:center;margin-bottom:6px;">
                <span style="flex:1;">${s?.label || r}</span>
                <button
                  style="margin-left:8px;"
                  @click=${() => this._moveChart(n, -1)}
                  ?disabled=${n === 0}
                  title="${x("config.move_up") || "Up"}"
                >
                  ⬆️
                </button>
                <button
                  style="margin-left:2px;"
                  @click=${() => this._moveChart(n, 1)}
                  ?disabled=${n === e.length - 1}
                  title="${x("config.move_down") || "Down"}"
                >
                  ⬇️
                </button>
              </li>`;
    })}
          </ul>
        </div>
        <!-- Configuration Preview -->
        ${this._config?.entity ? d`
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
    const t = Array.isArray(this._config.chart_order) ? [...this._config.chart_order] : ["temperature", "precipitation", "sunshine", "wind", "forecast"], r = i + e;
    if (r < 0 || r >= t.length) return;
    const n = t[i];
    t[i] = t[r], t[r] = n, this._config = { ...this._config, chart_order: t }, yt(this, "config-changed", { config: this._config }), this.requestUpdate();
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
  _computeHelper = (i) => i.description ? x(i.description) : "";
  _renderConfigPreview() {
    const i = { ...this._config };
    return i.type || (i.type = "custom:swissweather-card"), Object.keys(i).forEach((e) => {
      (i[e] === void 0 || i[e] === "") && delete i[e];
    }), Object.entries(i).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join(`
`);
  }
  _valueChanged(i) {
    if (this._config || (this._config = {
      type: tt,
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
      const { ...t } = i.detail.value || {}, r = {
        ...this._config,
        ...t,
        ...e,
        type: "custom:swissweather-card"
      };
      Object.keys(r).forEach((n) => {
        (r[n] === "" || r[n] === void 0) && delete r[n];
      }), this._config = r, yt(this, "config-changed", { config: this._config });
    }
  }
};
Ct([
  y({ attribute: !1 })
], Qe.prototype, "hass", 2);
Ct([
  y({ attribute: !1 })
], Qe.prototype, "lovelace", 2);
Ct([
  y({ attribute: !1 })
], Qe.prototype, "_config", 2);
Qe = Ct([
  O(vr)
], Qe);
function ti() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var ye = ti();
function _r(i) {
  ye = i;
}
var Ve = { exec: () => null };
function $(i, e = "") {
  let t = typeof i == "string" ? i : i.source, r = { replace: (n, s) => {
    let o = typeof s == "string" ? s : s.source;
    return o = o.replace(E.caret, "$1"), t = t.replace(n, o), r;
  }, getRegex: () => new RegExp(t, e) };
  return r;
}
var E = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (i) => new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}#`), htmlBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}<(?:[a-z].*>|!--)`, "i") }, os = /^(?:[ \t]*(?:\n|$))+/, as = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ls = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, it = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, cs = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ii = /(?:[*+-]|\d{1,9}[.)])/, $r = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, kr = $($r).replace(/bull/g, ii).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), ds = $($r).replace(/bull/g, ii).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ri = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, hs = /^[^\n]+/, ni = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ps = $(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ni).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), us = $(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ii).getRegex(), St = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", si = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, fs = $("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", si).replace("tag", St).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ar = $(ri).replace("hr", it).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", St).getRegex(), gs = $(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ar).getRegex(), oi = { blockquote: gs, code: as, def: ps, fences: ls, heading: cs, hr: it, html: fs, lheading: kr, list: us, newline: os, paragraph: Ar, table: Ve, text: hs }, Bi = $("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", it).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", St).getRegex(), ms = { ...oi, lheading: ds, table: Bi, paragraph: $(ri).replace("hr", it).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Bi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", St).getRegex() }, ys = { ...oi, html: $(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", si).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ve, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: $(ri).replace("hr", it).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", kr).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, xs = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, ws = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Cr = /^( {2,}|\\)\n(?!\s*$)/, bs = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Mt = /[\p{P}\p{S}]/u, ai = /[\s\p{P}\p{S}]/u, Sr = /[^\s\p{P}\p{S}]/u, vs = $(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ai).getRegex(), Mr = /(?!~)[\p{P}\p{S}]/u, _s = /(?!~)[\s\p{P}\p{S}]/u, $s = /(?:[^\s\p{P}\p{S}]|~)/u, ks = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, Tr = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, As = $(Tr, "u").replace(/punct/g, Mt).getRegex(), Cs = $(Tr, "u").replace(/punct/g, Mr).getRegex(), Nr = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ss = $(Nr, "gu").replace(/notPunctSpace/g, Sr).replace(/punctSpace/g, ai).replace(/punct/g, Mt).getRegex(), Ms = $(Nr, "gu").replace(/notPunctSpace/g, $s).replace(/punctSpace/g, _s).replace(/punct/g, Mr).getRegex(), Ts = $("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Sr).replace(/punctSpace/g, ai).replace(/punct/g, Mt).getRegex(), Ns = $(/\\(punct)/, "gu").replace(/punct/g, Mt).getRegex(), Ls = $(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Hs = $(si).replace("(?:-->|$)", "-->").getRegex(), Gs = $("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Hs).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), xt = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Es = $(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", xt).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Lr = $(/^!?\[(label)\]\[(ref)\]/).replace("label", xt).replace("ref", ni).getRegex(), Hr = $(/^!?\[(ref)\](?:\[\])?/).replace("ref", ni).getRegex(), zs = $("reflink|nolink(?!\\()", "g").replace("reflink", Lr).replace("nolink", Hr).getRegex(), li = { _backpedal: Ve, anyPunctuation: Ns, autolink: Ls, blockSkip: ks, br: Cr, code: ws, del: Ve, emStrongLDelim: As, emStrongRDelimAst: Ss, emStrongRDelimUnd: Ts, escape: xs, link: Es, nolink: Hr, punctuation: vs, reflink: Lr, reflinkSearch: zs, tag: Gs, text: bs, url: Ve }, Os = { ...li, link: $(/^!?\[(label)\]\((.*?)\)/).replace("label", xt).getRegex(), reflink: $(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", xt).getRegex() }, It = { ...li, emStrongRDelimAst: Ms, emStrongLDelim: Cs, url: $(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, Ps = { ...It, br: $(Cr).replace("{2,}", "*").getRegex(), text: $(It.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, lt = { normal: oi, gfm: ms, pedantic: ys }, Fe = { normal: li, gfm: It, breaks: Ps, pedantic: Os }, Ds = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ji = (i) => Ds[i];
function W(i, e) {
  if (e) {
    if (E.escapeTest.test(i)) return i.replace(E.escapeReplace, ji);
  } else if (E.escapeTestNoEncode.test(i)) return i.replace(E.escapeReplaceNoEncode, ji);
  return i;
}
function Vi(i) {
  try {
    i = encodeURI(i).replace(E.percentDecode, "%");
  } catch {
    return null;
  }
  return i;
}
function qi(i, e) {
  let t = i.replace(E.findPipe, (s, o, a) => {
    let l = !1, c = o;
    for (; --c >= 0 && a[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = t.split(E.splitPipe), n = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), e) if (r.length > e) r.splice(e);
  else for (; r.length < e; ) r.push("");
  for (; n < r.length; n++) r[n] = r[n].trim().replace(E.slashPipe, "|");
  return r;
}
function Ie(i, e, t) {
  let r = i.length;
  if (r === 0) return "";
  let n = 0;
  for (; n < r && i.charAt(r - n - 1) === e; )
    n++;
  return i.slice(0, r - n);
}
function Ws(i, e) {
  if (i.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let r = 0; r < i.length; r++) if (i[r] === "\\") r++;
  else if (i[r] === e[0]) t++;
  else if (i[r] === e[1] && (t--, t < 0)) return r;
  return t > 0 ? -2 : -1;
}
function Zi(i, e, t, r, n) {
  let s = e.href, o = e.title || null, a = i[1].replace(n.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: i[0].charAt(0) === "!" ? "image" : "link", raw: t, href: s, title: o, text: a, tokens: r.inlineTokens(a) };
  return r.state.inLink = !1, l;
}
function Rs(i, e, t) {
  let r = i.match(t.other.indentCodeCompensation);
  if (r === null) return e;
  let n = r[1];
  return e.split(`
`).map((s) => {
    let o = s.match(t.other.beginningSpace);
    if (o === null) return s;
    let [a] = o;
    return a.length >= n.length ? s.slice(n.length) : s;
  }).join(`
`);
}
var wt = class {
  options;
  rules;
  lexer;
  constructor(i) {
    this.options = i || ye;
  }
  space(i) {
    let e = this.rules.block.newline.exec(i);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(i) {
    let e = this.rules.block.code.exec(i);
    if (e) {
      let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : Ie(t, `
`) };
    }
  }
  fences(i) {
    let e = this.rules.block.fences.exec(i);
    if (e) {
      let t = e[0], r = Rs(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: r };
    }
  }
  heading(i) {
    let e = this.rules.block.heading.exec(i);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let r = Ie(t, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (t = r.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(i) {
    let e = this.rules.block.hr.exec(i);
    if (e) return { type: "hr", raw: Ie(e[0], `
`) };
  }
  blockquote(i) {
    let e = this.rules.block.blockquote.exec(i);
    if (e) {
      let t = Ie(e[0], `
`).split(`
`), r = "", n = "", s = [];
      for (; t.length > 0; ) {
        let o = !1, a = [], l;
        for (l = 0; l < t.length; l++) if (this.rules.other.blockquoteStart.test(t[l])) a.push(t[l]), o = !0;
        else if (!o) a.push(t[l]);
        else break;
        t = t.slice(l);
        let c = a.join(`
`), h = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${c}` : c, n = n ? `${n}
${h}` : h;
        let p = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(h, s, !0), this.lexer.state.top = p, t.length === 0) break;
        let u = s.at(-1);
        if (u?.type === "code") break;
        if (u?.type === "blockquote") {
          let g = u, v = g.raw + `
` + t.join(`
`), C = this.blockquote(v);
          s[s.length - 1] = C, r = r.substring(0, r.length - g.raw.length) + C.raw, n = n.substring(0, n.length - g.text.length) + C.text;
          break;
        } else if (u?.type === "list") {
          let g = u, v = g.raw + `
` + t.join(`
`), C = this.list(v);
          s[s.length - 1] = C, r = r.substring(0, r.length - u.raw.length) + C.raw, n = n.substring(0, n.length - g.raw.length) + C.raw, t = v.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r, tokens: s, text: n };
    }
  }
  list(i) {
    let e = this.rules.block.list.exec(i);
    if (e) {
      let t = e[1].trim(), r = t.length > 1, n = { type: "list", raw: "", ordered: r, start: r ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = r ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = r ? t : "[*+-]");
      let s = this.rules.other.listItemRegex(t), o = !1;
      for (; i; ) {
        let l = !1, c = "", h = "";
        if (!(e = s.exec(i)) || this.rules.block.hr.test(i)) break;
        c = e[0], i = i.substring(c.length);
        let p = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (we) => " ".repeat(3 * we.length)), u = i.split(`
`, 1)[0], g = !p.trim(), v = 0;
        if (this.options.pedantic ? (v = 2, h = p.trimStart()) : g ? v = e[1].length + 1 : (v = e[2].search(this.rules.other.nonSpaceChar), v = v > 4 ? 1 : v, h = p.slice(v), v += e[1].length), g && this.rules.other.blankLine.test(u) && (c += u + `
`, i = i.substring(u.length + 1), l = !0), !l) {
          let we = this.rules.other.nextBulletRegex(v), rt = this.rules.other.hrRegex(v), q = this.rules.other.fencesBeginRegex(v), Ee = this.rules.other.headingBeginRegex(v), Lt = this.rules.other.htmlBeginRegex(v);
          for (; i; ) {
            let nt = i.split(`
`, 1)[0], Z;
            if (u = nt, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), Z = u) : Z = u.replace(this.rules.other.tabCharGlobal, "    "), q.test(u) || Ee.test(u) || Lt.test(u) || we.test(u) || rt.test(u)) break;
            if (Z.search(this.rules.other.nonSpaceChar) >= v || !u.trim()) h += `
` + Z.slice(v);
            else {
              if (g || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || q.test(p) || Ee.test(p) || rt.test(p)) break;
              h += `
` + u;
            }
            !g && !u.trim() && (g = !0), c += nt + `
`, i = i.substring(nt.length + 1), p = Z.slice(v);
          }
        }
        n.loose || (o ? n.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (o = !0));
        let C = null, D;
        this.options.gfm && (C = this.rules.other.listIsTask.exec(h), C && (D = C[0] !== "[ ] ", h = h.replace(this.rules.other.listReplaceTask, ""))), n.items.push({ type: "list_item", raw: c, task: !!C, checked: D, loose: !1, text: h, tokens: [] }), n.raw += c;
      }
      let a = n.items.at(-1);
      if (a) a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else return;
      n.raw = n.raw.trimEnd();
      for (let l = 0; l < n.items.length; l++) if (this.lexer.state.top = !1, n.items[l].tokens = this.lexer.blockTokens(n.items[l].text, []), !n.loose) {
        let c = n.items[l].tokens.filter((p) => p.type === "space"), h = c.length > 0 && c.some((p) => this.rules.other.anyLine.test(p.raw));
        n.loose = h;
      }
      if (n.loose) for (let l = 0; l < n.items.length; l++) n.items[l].loose = !0;
      return n;
    }
  }
  html(i) {
    let e = this.rules.block.html.exec(i);
    if (e) return { type: "html", block: !0, raw: e[0], pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: e[0] };
  }
  def(i) {
    let e = this.rules.block.def.exec(i);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: r, title: n };
    }
  }
  table(i) {
    let e = this.rules.block.table.exec(i);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = qi(e[1]), r = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), n = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === r.length) {
      for (let o of r) this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
      for (let o = 0; o < t.length; o++) s.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: !0, align: s.align[o] });
      for (let o of n) s.rows.push(qi(o, s.header.length).map((a, l) => ({ text: a, tokens: this.lexer.inline(a), header: !1, align: s.align[l] })));
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
        let s = Ie(t.slice(0, -1), "\\");
        if ((t.length - s.length) % 2 === 0) return;
      } else {
        let s = Ws(e[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let o = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + s;
          e[2] = e[2].substring(0, s), e[0] = e[0].substring(0, o).trim(), e[3] = "";
        }
      }
      let r = e[2], n = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], n = s[3]);
      } else n = e[3] ? e[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? r = r.slice(1) : r = r.slice(1, -1)), Zi(e, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: n && n.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(i, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(i)) || (t = this.rules.inline.nolink.exec(i))) {
      let r = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = e[r.toLowerCase()];
      if (!n) {
        let s = t[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return Zi(t, n, t[0], this.lexer, this.rules);
    }
  }
  emStrong(i, e, t = "") {
    let r = this.rules.inline.emStrongLDelim.exec(i);
    if (!(!r || r[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[2]) || !t || this.rules.inline.punctuation.exec(t))) {
      let n = [...r[0]].length - 1, s, o, a = n, l = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, e = e.slice(-1 * i.length + n); (r = c.exec(e)) != null; ) {
        if (s = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !s) continue;
        if (o = [...s].length, r[3] || r[4]) {
          a += o;
          continue;
        } else if ((r[5] || r[6]) && n % 3 && !((n + o) % 3)) {
          l += o;
          continue;
        }
        if (a -= o, a > 0) continue;
        o = Math.min(o, o + a + l);
        let h = [...r[0]][0].length, p = i.slice(0, n + r.index + h + o);
        if (Math.min(n, o) % 2) {
          let g = p.slice(1, -1);
          return { type: "em", raw: p, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let u = p.slice(2, -2);
        return { type: "strong", raw: p, text: u, tokens: this.lexer.inlineTokens(u) };
      }
    }
  }
  codespan(i) {
    let e = this.rules.inline.code.exec(i);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(t), n = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return r && n && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
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
      let t, r;
      return e[2] === "@" ? (t = e[1], r = "mailto:" + t) : (t = e[1], r = t), { type: "link", raw: e[0], text: t, href: r, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(i) {
    let e;
    if (e = this.rules.inline.url.exec(i)) {
      let t, r;
      if (e[2] === "@") t = e[0], r = "mailto:" + t;
      else {
        let n;
        do
          n = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (n !== e[0]);
        t = e[0], e[1] === "www." ? r = "http://" + e[0] : r = e[0];
      }
      return { type: "link", raw: e[0], text: t, href: r, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  inlineText(i) {
    let e = this.rules.inline.text.exec(i);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, B = class Bt {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || ye, this.options.tokenizer = this.options.tokenizer || new wt(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: E, block: lt.normal, inline: Fe.normal };
    this.options.pedantic ? (t.block = lt.pedantic, t.inline = Fe.pedantic) : this.options.gfm && (t.block = lt.gfm, this.options.breaks ? t.inline = Fe.breaks : t.inline = Fe.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: lt, inline: Fe };
  }
  static lex(e, t) {
    return new Bt(t).lex(e);
  }
  static lexInline(e, t) {
    return new Bt(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(E.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let r = this.inlineQueue[t];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], r = !1) {
    for (this.options.pedantic && (e = e.replace(E.tabCharGlobal, "    ").replace(E.spaceLine, "")); e; ) {
      let n;
      if (this.options.extensions?.block?.some((o) => (n = o.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1)) continue;
      if (n = this.tokenizer.space(e)) {
        e = e.substring(n.raw.length);
        let o = t.at(-1);
        n.raw.length === 1 && o !== void 0 ? o.raw += `
` : t.push(n);
        continue;
      }
      if (n = this.tokenizer.code(e)) {
        e = e.substring(n.raw.length);
        let o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + n.raw, o.text += `
` + n.text, this.inlineQueue.at(-1).src = o.text) : t.push(n);
        continue;
      }
      if (n = this.tokenizer.fences(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.heading(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.hr(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.blockquote(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.list(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.html(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.def(e)) {
        e = e.substring(n.raw.length);
        let o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + n.raw, o.text += `
` + n.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title }, t.push(n));
        continue;
      }
      if (n = this.tokenizer.table(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.lheading(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      let s = e;
      if (this.options.extensions?.startBlock) {
        let o = 1 / 0, a = e.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, a), typeof l == "number" && l >= 0 && (o = Math.min(o, l));
        }), o < 1 / 0 && o >= 0 && (s = e.substring(0, o + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(s))) {
        let o = t.at(-1);
        r && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + n.raw, o.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(n), r = s.length !== e.length, e = e.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(e)) {
        e = e.substring(n.raw.length);
        let o = t.at(-1);
        o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + n.raw, o.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(n);
        continue;
      }
      if (e) {
        let o = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(o);
          break;
        } else throw new Error(o);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let r = e, n = null;
    if (this.tokens.links) {
      let a = Object.keys(this.tokens.links);
      if (a.length > 0) for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; ) a.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; ) r = r.slice(0, n.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; ) r = r.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let s = !1, o = "";
    for (; e; ) {
      s || (o = ""), s = !1;
      let a;
      if (this.options.extensions?.inline?.some((c) => (a = c.call({ lexer: this }, e, t)) ? (e = e.substring(a.raw.length), t.push(a), !0) : !1)) continue;
      if (a = this.tokenizer.escape(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.tag(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.link(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(a.raw.length);
        let c = t.at(-1);
        a.type === "text" && c?.type === "text" ? (c.raw += a.raw, c.text += a.text) : t.push(a);
        continue;
      }
      if (a = this.tokenizer.emStrong(e, r, o)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.codespan(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.br(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.del(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.autolink(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (!this.state.inLink && (a = this.tokenizer.url(e))) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      let l = e;
      if (this.options.extensions?.startInline) {
        let c = 1 / 0, h = e.slice(1), p;
        this.options.extensions.startInline.forEach((u) => {
          p = u.call({ lexer: this }, h), typeof p == "number" && p >= 0 && (c = Math.min(c, p));
        }), c < 1 / 0 && c >= 0 && (l = e.substring(0, c + 1));
      }
      if (a = this.tokenizer.inlineText(l)) {
        e = e.substring(a.raw.length), a.raw.slice(-1) !== "_" && (o = a.raw.slice(-1)), s = !0;
        let c = t.at(-1);
        c?.type === "text" ? (c.raw += a.raw, c.text += a.text) : t.push(a);
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
}, bt = class {
  options;
  parser;
  constructor(i) {
    this.options = i || ye;
  }
  space(i) {
    return "";
  }
  code({ text: i, lang: e, escaped: t }) {
    let r = (e || "").match(E.notSpaceStart)?.[0], n = i.replace(E.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + W(r) + '">' + (t ? n : W(n, !0)) + `</code></pre>
` : "<pre><code>" + (t ? n : W(n, !0)) + `</code></pre>
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
    let e = i.ordered, t = i.start, r = "";
    for (let o = 0; o < i.items.length; o++) {
      let a = i.items[o];
      r += this.listitem(a);
    }
    let n = e ? "ol" : "ul", s = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + n + s + `>
` + r + "</" + n + `>
`;
  }
  listitem(i) {
    let e = "";
    if (i.task) {
      let t = this.checkbox({ checked: !!i.checked });
      i.loose ? i.tokens[0]?.type === "paragraph" ? (i.tokens[0].text = t + " " + i.tokens[0].text, i.tokens[0].tokens && i.tokens[0].tokens.length > 0 && i.tokens[0].tokens[0].type === "text" && (i.tokens[0].tokens[0].text = t + " " + W(i.tokens[0].tokens[0].text), i.tokens[0].tokens[0].escaped = !0)) : i.tokens.unshift({ type: "text", raw: t + " ", text: t + " ", escaped: !0 }) : e += t + " ";
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
    for (let n = 0; n < i.header.length; n++) t += this.tablecell(i.header[n]);
    e += this.tablerow({ text: t });
    let r = "";
    for (let n = 0; n < i.rows.length; n++) {
      let s = i.rows[n];
      t = "";
      for (let o = 0; o < s.length; o++) t += this.tablecell(s[o]);
      r += this.tablerow({ text: t });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + r + `</table>
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
    return `<code>${W(i, !0)}</code>`;
  }
  br(i) {
    return "<br>";
  }
  del({ tokens: i }) {
    return `<del>${this.parser.parseInline(i)}</del>`;
  }
  link({ href: i, title: e, tokens: t }) {
    let r = this.parser.parseInline(t), n = Vi(i);
    if (n === null) return r;
    i = n;
    let s = '<a href="' + i + '"';
    return e && (s += ' title="' + W(e) + '"'), s += ">" + r + "</a>", s;
  }
  image({ href: i, title: e, text: t, tokens: r }) {
    r && (t = this.parser.parseInline(r, this.parser.textRenderer));
    let n = Vi(i);
    if (n === null) return W(t);
    i = n;
    let s = `<img src="${i}" alt="${t}"`;
    return e && (s += ` title="${W(e)}"`), s += ">", s;
  }
  text(i) {
    return "tokens" in i && i.tokens ? this.parser.parseInline(i.tokens) : "escaped" in i && i.escaped ? i.text : W(i.text);
  }
}, ci = class {
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
}, j = class jt {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || ye, this.options.renderer = this.options.renderer || new bt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ci();
  }
  static parse(e, t) {
    return new jt(t).parse(e);
  }
  static parseInline(e, t) {
    return new jt(t).parseInline(e);
  }
  parse(e, t = !0) {
    let r = "";
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        let a = s, l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(a.type)) {
          r += l || "";
          continue;
        }
      }
      let o = s;
      switch (o.type) {
        case "space": {
          r += this.renderer.space(o);
          continue;
        }
        case "hr": {
          r += this.renderer.hr(o);
          continue;
        }
        case "heading": {
          r += this.renderer.heading(o);
          continue;
        }
        case "code": {
          r += this.renderer.code(o);
          continue;
        }
        case "table": {
          r += this.renderer.table(o);
          continue;
        }
        case "blockquote": {
          r += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          r += this.renderer.list(o);
          continue;
        }
        case "html": {
          r += this.renderer.html(o);
          continue;
        }
        case "def": {
          r += this.renderer.def(o);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(o);
          continue;
        }
        case "text": {
          let a = o, l = this.renderer.text(a);
          for (; n + 1 < e.length && e[n + 1].type === "text"; ) a = e[++n], l += `
` + this.renderer.text(a);
          t ? r += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: !0 }] }) : r += l;
          continue;
        }
        default: {
          let a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return r;
  }
  parseInline(e, t = this.renderer) {
    let r = "";
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        let a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          r += a || "";
          continue;
        }
      }
      let o = s;
      switch (o.type) {
        case "escape": {
          r += t.text(o);
          break;
        }
        case "html": {
          r += t.html(o);
          break;
        }
        case "link": {
          r += t.link(o);
          break;
        }
        case "image": {
          r += t.image(o);
          break;
        }
        case "strong": {
          r += t.strong(o);
          break;
        }
        case "em": {
          r += t.em(o);
          break;
        }
        case "codespan": {
          r += t.codespan(o);
          break;
        }
        case "br": {
          r += t.br(o);
          break;
        }
        case "del": {
          r += t.del(o);
          break;
        }
        case "text": {
          r += t.text(o);
          break;
        }
        default: {
          let a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return r;
  }
}, dt = class {
  options;
  block;
  constructor(i) {
    this.options = i || ye;
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
    return this.block ? B.lex : B.lexInline;
  }
  provideParser() {
    return this.block ? j.parse : j.parseInline;
  }
}, Us = class {
  defaults = ti();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = j;
  Renderer = bt;
  TextRenderer = ci;
  Lexer = B;
  Tokenizer = wt;
  Hooks = dt;
  constructor(...i) {
    this.use(...i);
  }
  walkTokens(i, e) {
    let t = [];
    for (let r of i) switch (t = t.concat(e.call(this, r)), r.type) {
      case "table": {
        let n = r;
        for (let s of n.header) t = t.concat(this.walkTokens(s.tokens, e));
        for (let s of n.rows) for (let o of s) t = t.concat(this.walkTokens(o.tokens, e));
        break;
      }
      case "list": {
        let n = r;
        t = t.concat(this.walkTokens(n.items, e));
        break;
      }
      default: {
        let n = r;
        this.defaults.extensions?.childTokens?.[n.type] ? this.defaults.extensions.childTokens[n.type].forEach((s) => {
          let o = n[s].flat(1 / 0);
          t = t.concat(this.walkTokens(o, e));
        }) : n.tokens && (t = t.concat(this.walkTokens(n.tokens, e)));
      }
    }
    return t;
  }
  use(...i) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return i.forEach((t) => {
      let r = { ...t };
      if (r.async = this.defaults.async || r.async || !1, t.extensions && (t.extensions.forEach((n) => {
        if (!n.name) throw new Error("extension name required");
        if ("renderer" in n) {
          let s = e.renderers[n.name];
          s ? e.renderers[n.name] = function(...o) {
            let a = n.renderer.apply(this, o);
            return a === !1 && (a = s.apply(this, o)), a;
          } : e.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = e[n.level];
          s ? s.unshift(n.tokenizer) : e[n.level] = [n.tokenizer], n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [n.start] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (e.childTokens[n.name] = n.childTokens);
      }), r.extensions = e), t.renderer) {
        let n = this.defaults.renderer || new bt(this.defaults);
        for (let s in t.renderer) {
          if (!(s in n)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let o = s, a = t.renderer[o], l = n[o];
          n[o] = (...c) => {
            let h = a.apply(n, c);
            return h === !1 && (h = l.apply(n, c)), h || "";
          };
        }
        r.renderer = n;
      }
      if (t.tokenizer) {
        let n = this.defaults.tokenizer || new wt(this.defaults);
        for (let s in t.tokenizer) {
          if (!(s in n)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let o = s, a = t.tokenizer[o], l = n[o];
          n[o] = (...c) => {
            let h = a.apply(n, c);
            return h === !1 && (h = l.apply(n, c)), h;
          };
        }
        r.tokenizer = n;
      }
      if (t.hooks) {
        let n = this.defaults.hooks || new dt();
        for (let s in t.hooks) {
          if (!(s in n)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let o = s, a = t.hooks[o], l = n[o];
          dt.passThroughHooks.has(s) ? n[o] = (c) => {
            if (this.defaults.async) return Promise.resolve(a.call(n, c)).then((p) => l.call(n, p));
            let h = a.call(n, c);
            return l.call(n, h);
          } : n[o] = (...c) => {
            let h = a.apply(n, c);
            return h === !1 && (h = l.apply(n, c)), h;
          };
        }
        r.hooks = n;
      }
      if (t.walkTokens) {
        let n = this.defaults.walkTokens, s = t.walkTokens;
        r.walkTokens = function(o) {
          let a = [];
          return a.push(s.call(this, o)), n && (a = a.concat(n.call(this, o))), a;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(i) {
    return this.defaults = { ...this.defaults, ...i }, this;
  }
  lexer(i, e) {
    return B.lex(i, e ?? this.defaults);
  }
  parser(i, e) {
    return j.parse(i, e ?? this.defaults);
  }
  parseMarkdown(i) {
    return (e, t) => {
      let r = { ...t }, n = { ...this.defaults, ...r }, s = this.onError(!!n.silent, !!n.async);
      if (this.defaults.async === !0 && r.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      n.hooks && (n.hooks.options = n, n.hooks.block = i);
      let o = n.hooks ? n.hooks.provideLexer() : i ? B.lex : B.lexInline, a = n.hooks ? n.hooks.provideParser() : i ? j.parse : j.parseInline;
      if (n.async) return Promise.resolve(n.hooks ? n.hooks.preprocess(e) : e).then((l) => o(l, n)).then((l) => n.hooks ? n.hooks.processAllTokens(l) : l).then((l) => n.walkTokens ? Promise.all(this.walkTokens(l, n.walkTokens)).then(() => l) : l).then((l) => a(l, n)).then((l) => n.hooks ? n.hooks.postprocess(l) : l).catch(s);
      try {
        n.hooks && (e = n.hooks.preprocess(e));
        let l = o(e, n);
        n.hooks && (l = n.hooks.processAllTokens(l)), n.walkTokens && this.walkTokens(l, n.walkTokens);
        let c = a(l, n);
        return n.hooks && (c = n.hooks.postprocess(c)), c;
      } catch (l) {
        return s(l);
      }
    };
  }
  onError(i, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, i) {
        let r = "<p>An error occurred:</p><pre>" + W(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(r) : r;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, fe = new Us();
function k(i, e) {
  return fe.parse(i, e);
}
k.options = k.setOptions = function(i) {
  return fe.setOptions(i), k.defaults = fe.defaults, _r(k.defaults), k;
};
k.getDefaults = ti;
k.defaults = ye;
k.use = function(...i) {
  return fe.use(...i), k.defaults = fe.defaults, _r(k.defaults), k;
};
k.walkTokens = function(i, e) {
  return fe.walkTokens(i, e);
};
k.parseInline = fe.parseInline;
k.Parser = j;
k.parser = j.parse;
k.Renderer = bt;
k.TextRenderer = ci;
k.Lexer = B;
k.lexer = B.lex;
k.Tokenizer = wt;
k.Hooks = dt;
k.parse = k;
k.options;
k.setOptions;
k.use;
k.walkTokens;
k.parseInline;
j.parse;
B.lex;
const Fs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.92'%20x2='38.52'%20y1='18.75'%20y2='47.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='5%2032%2032;%20-15%2032%2032;%205%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M46.66%2036.2a16.66%2016.66%200%2001-16.78-16.55%2016.29%2016.29%200%2001.55-4.15A16.56%2016.56%200%201048.5%2036.1c-.61.06-1.22.1-1.84.1z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-5%2032%2032;%2015%2032%2032;%20-5%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Is = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/path%3e%3c/svg%3e", Bs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='16.5'%20x2='21.5'%20y1='19.67'%20y2='28.33'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='19'%20cy='24'%20r='5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2019%2024;%20360%2019%2024'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", js = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='13.58'%20x2='24.15'%20y1='15.57'%20y2='33.87'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='10%2019.22%2024.293;%20-10%2019.22%2024.293;%2010%2019.22%2024.293'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M29.33%2026.68a10.61%2010.61%200%2001-10.68-10.54A10.5%2010.5%200%200119%2013.5a10.54%2010.54%200%201011.5%2013.11%2011.48%2011.48%200%2001-1.17.07z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-10%2019.22%2024.293;%2010%2019.22%2024.293;%20-10%2019.22%2024.293'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", Vs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='27.5'%20x2='36.5'%20y1='50.21'%20y2='65.79'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20y1='44.21'%20y2='59.79'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2058h30'%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2052h30'%3e%3canimateTransform%20attributeName='transform'%20begin='-4s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3c/svg%3e", qs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.25'%20x2='24.75'%20y1='43.7'%20y2='46.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='30.25'%20x2='31.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='37.25'%20x2='38.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23a)'%20d='M24%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20d='M31%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20d='M38%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3c/svg%3e", Zs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", Ys = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23b)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", Ks = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Qs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='30.12'%20x2='31.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.67'%20x2='32.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='g'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M33.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M31%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='-1%20-6;%201%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2031%2045;%20360%2031%2045'/%3e%3canimate%20attributeName='opacity'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23d)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23f)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3c/svg%3e", Xs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='b'%20x1='23.31'%20x2='24.69'%20y1='44.3'%20y2='46.7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='30.31'%20x2='31.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3clinearGradient%20id='h'%20x1='37.31'%20x2='38.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3c/defs%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23e)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23f)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23h)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Js = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.97'%20x2='42.03'%20y1='14.63'%20y2='49.37'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43%2032a11%2011%200%2011-11-11%2011%2011%200%200111%2011zM25%2014.61l-.48%201a33.68%2033.68%200%2000-3.42%2017.82h0M39%2049.39l.48-1a33.68%2033.68%200%20003.42-17.82h0'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='360%2032%2032;%200%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Yi = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='27.56'%20x2='38.27'%20y1='17.64'%20y2='36.19'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='19.96'%20x2='31.37'%20y1='29.03'%20y2='48.8'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e", Pt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e", eo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='52.7'%20x2='133.4'%20y1='9.6'%20y2='149.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%239ca3af'/%3e%3cstop%20offset='.5'%20stop-color='%239ca3af'/%3e%3cstop%20offset='1'%20stop-color='%236b7280'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='99.5'%20x2='232.6'%20y1='30.7'%20y2='261.4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%236b7280'/%3e%3cstop%20offset='.5'%20stop-color='%236b7280'/%3e%3cstop%20offset='1'%20stop-color='%234b5563'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='1381.3'%20x2='1399.5'%20y1='-1144.7'%20y2='-1097.4'%20gradientTransform='rotate(-9%208002.567%208233.063)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%230b65ed'/%3e%3cstop%20offset='.5'%20stop-color='%230a5ad4'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23c'%20id='d'%20x1='1436.7'%20x2='1454.9'%20y1='-1137'%20y2='-1089.7'%20gradientTransform='rotate(-9%208009.537%208233.037)'/%3e%3clinearGradient%20xlink:href='%23c'%20id='e'%20x1='1492.1'%20x2='1510.3'%20y1='-1129.3'%20y2='-1082.1'%20gradientTransform='rotate(-9%208016.566%208233.078)'/%3e%3csymbol%20id='g'%20viewBox='0%200%20200.3%20126.1'%3e%3cpath%20fill='url(%23a)'%20stroke='%23848b98'%20stroke-miterlimit='10'%20d='M.5%2093.2a32.4%2032.4%200%200032.4%2032.4h129.8v-.1l2.3.1a34.8%2034.8%200%20006.5-68.9%2032.4%2032.4%200%2000-48.5-33%2048.6%2048.6%200%2000-88.6%2037.1h-1.5A32.4%2032.4%200%2000.5%2093.1Z'/%3e%3c/symbol%3e%3csymbol%20id='h'%20viewBox='0%200%20350%20222'%3e%3cpath%20fill='url(%23b)'%20stroke='%235b6472'%20stroke-miterlimit='10'%20stroke-width='6'%20d='m291%20107-2.5.1A83.9%2083.9%200%2000135.6%2043%2056%2056%200%200051%2091a56.6%2056.6%200%2000.8%209A60%2060%200%200063%20219l4-.2v.2h224a56%2056%200%20000-112Z'/%3e%3c/symbol%3e%3csymbol%20id='f'%20overflow='visible'%20viewBox='0%200%20398%20222'%3e%3cuse%20xlink:href='%23g'%20width='200.3'%20height='126.1'%20transform='translate(198%2027)'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-9%200;%209%200;%20-9%200'/%3e%3c/use%3e%3cuse%20xlink:href='%23h'%20width='350'%20height='222'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-18%200;%2018%200;%20-18%200'/%3e%3c/use%3e%3c/symbol%3e%3csymbol%20id='i'%20overflow='visible'%20viewBox='0%200%20129%2057'%3e%3cpath%20fill='url(%23c)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M8.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x1'%20additive='sum'%20attributeName='transform'%20begin='0s;%20x1.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y1'%20attributeName='opacity'%20begin='0s;%20y1.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M64.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x2'%20additive='sum'%20attributeName='transform'%20begin='.33s;%20x2.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y2'%20attributeName='opacity'%20begin='.33s;%20y2.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M120.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x3'%20additive='sum'%20attributeName='transform'%20begin='-.33s;%20x3.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y3'%20attributeName='opacity'%20begin='-.33s;%20y3.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3cuse%20xlink:href='%23f'%20width='398'%20height='222'%20transform='translate(68.84%20145)'/%3e%3cuse%20xlink:href='%23i'%20width='129'%20height='57'%20transform='translate(191.5%20343.5)'/%3e%3c/svg%3e";
var to = "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z", io = "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z", ro = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z", no = "M15,6.79C16.86,7.86 18,9.85 18,12C18,22 6,22 6,22C7.25,21.06 8.38,19.95 9.34,18.71C9.38,18.66 9.41,18.61 9.44,18.55C9.69,18.06 9.5,17.46 9,17.21C7.14,16.14 6,14.15 6,12C6,2 18,2 18,2C16.75,2.94 15.62,4.05 14.66,5.29C14.62,5.34 14.59,5.39 14.56,5.45C14.31,5.94 14.5,6.54 15,6.79M12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14Z", so = "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z", oo = "M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z", ao = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", lo = "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z", co = "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z", ho = "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59", po = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z", uo = "M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z", Gr = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z", fo = "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z", go = "M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z";
const N = (i, e) => i ? (e || (e = "24px"), d`<ha-icon
    .icon="${i}"
    style="font-size:${e}; width: ${e}; height: ${e}"
  />`) : d`<ha-icon
      icon="mdi:weather-sunny"
      style="font-size:${e}; width: ${e}; height: ${e}"
    />`, G = (i, e) => i ? (e || (e = "24px"), w`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${i}" /></svg>`) : w`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${Gr}" /></svg>`, ht = (i, e, t, r) => {
  if (!i)
    return N("mdi:weather-sunny", t);
  const n = {
    "clear-night": G(ao, t),
    cloudy: G(to, t),
    fog: G(io, t),
    hail: G(ro, t),
    lightning: G(so, t),
    "lightning-rainy": G(oo, t),
    partlycloudy: G(lo, t),
    pouring: G(co, t),
    rainy: G(ho, t),
    snowy: G(po, t),
    "snowy-rainy": G(uo, t),
    sunny: G(Gr, t),
    windy: G(fo, t),
    "windy-variant": G(go, t),
    exceptional: G(no, t)
  }, s = {
    "clear-night": N("mdi:weather-night", t),
    cloudy: N("mdi:weather-cloudy", t),
    fog: N("mdi:weather-fog", t),
    hail: N("mdi:weather-hail", t),
    lightning: N("mdi:weather-lightning", t),
    "lightning-rainy": N("mdi:weather-lightning-rainy", t),
    partlycloudy: N("mdi:weather-partly-cloudy", t),
    pouring: N("mdi:weather-pouring", t),
    rainy: N("mdi:weather-rainy", t),
    snowy: N("mdi:weather-snowy", t),
    "snowy-rainy": N("mdi:weather-snowy-rainy", t),
    sunny: N("mdi:weather-sunny", t),
    windy: N("mdi:weather-windy", t),
    "windy-variant": N("mdi:weather-windy-variant", t),
    exceptional: N("mdi:weather-hurricane", t)
  }, o = {
    "clear-night": d`<img src="${Fs}" style="font-size:${t}" />`,
    cloudy: d`<img src="${Is}" style="font-size:${t}" />`,
    fog: d`<img src="${Vs}" style="font-size:${t}" />`,
    hail: d`<img src="${qs}" style="font-size:${t}" />`,
    lightning: d`<img src="${Ys}" style="font-size:${t}" />`,
    "lightning-rainy": d`<img src="${Zs}" style="font-size:${t}" />`,
    partlycloudy: d`<img
      src="${r ? Bs : js}"
      style="font-size:${t}"
    />`,
    pouring: d`<img src="${eo}" style="font-size:${t}" />`,
    rainy: d`<img src="${Ks}" style="font-size:${t}" />`,
    snowy: d`<img src="${Qs}" style="font-size:${t}" />`,
    "snowy-rainy": d`<img src="${Xs}" style="font-size:${t}" />`,
    sunny: d`<img src="${Pt}" style="font-size:${t}" />`,
    windy: d`<img src="${Yi}" style="font-size:${t}" />`,
    "windy-variant": d`<img src="${Yi}" style="font-size:${t}" />`,
    exceptional: d`<img src="${Js}" style="font-size:${t}" />`
  };
  return e === "mdi" ? s[i] || N("mdi:weather-sunny", t) : e === "mdiAsSVG" ? n[i] || d`<img src="${Pt}" />` : o[i] || d`<img src="${Pt}" />`;
}, vt = (i, e) => i?.states[e], Er = (i, e) => {
  const t = /* @__PURE__ */ new Date(), r = vt(i, e.entity), n = vt(i, e.sun_entity || "sun.sun");
  let s = null, o = null;
  if (r && r.attributes && "sunrise" in r.attributes && "sunset" in r.attributes && r.attributes.sunrise && r.attributes.sunset)
    s = new Date(r.attributes.sunrise), o = new Date(r.attributes.sunset);
  else if (n?.attributes) {
    const a = n.attributes.next_rising ? new Date(n.attributes.next_rising) : null, l = n.attributes.next_setting ? new Date(n.attributes.next_setting) : null;
    if (a && l) {
      const c = a > t ? new Date(a.getTime() - 864e5) : a, h = l;
      s = c, o = h;
    }
  }
  return !s || !o ? !0 : t >= s && t < o;
};
function di(i) {
  const e = window;
  e.customCards = e.customCards || [], e.customCards.push({
    ...i,
    preview: !0
    // documentationURL: `
  });
}
var mo = Object.defineProperty, yo = Object.getOwnPropertyDescriptor, xe = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? yo(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && mo(e, t, n), n;
};
Le({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => He[i]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard");
console.log("🎯 customElements registry available:", !!customElements);
let ie = class extends L {
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
        const r = e?.response;
        r && r[this.config.entity] ? (this._hourlyForecast = r[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [], console.log("🟢 Forecast geladen:", {
          forecast: this._forecast,
          hourlyForecast: this._hourlyForecast
        });
      } catch (i) {
        console.warn("⚠️ Forecast loading failed:", i), this._forecast = [], this._hourlyForecast = [];
      } finally {
        this._forecastLoading = !1;
      }
    }
  }
  static get styles() {
    return z`
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
      type: "custom:" + tt,
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
    return document.createElement(vr);
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return M;
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
    const t = this._getWarningLevel(e), r = {
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
    const n = (s) => {
      this._openWarnings = { ...this._openWarnings, [s]: !this._openWarnings[s] }, this.requestUpdate();
    };
    return e.length > 0 ? d`
          <div class="warning-section ${t}">
            <div>
              <strong>${A("weather_warning")}</strong>
              <ul style="margin: 6px 0 0 0; padding-left: 18px;">
                ${e.map(
      (s) => d`
                    <li style="margin-bottom: 12px;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <ha-icon
                          icon="${r[s.type?.toLowerCase?.()] || r.default}"
                          style="color: var(--error-color, #dc143c);"
                        ></ha-icon>
                        <span style="font-weight:bold;">${s.title}</span>
                        ${s.link ? d`
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
                          @click=${() => n(s.id)}
                          style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;"
                          title="${this._openWarnings[s.id] ? A("collapse") : A("expand")}"
                          aria-label="${this._openWarnings[s.id] ? A("collapse") : A("expand")}"
                        >
                          <ha-icon
                            icon="${this._openWarnings[s.id] ? "mdi:chevron-up" : "mdi:chevron-down"}"
                          ></ha-icon>
                        </button>
                      </div>
                      ${this._openWarnings[s.id] && s.description ? d`
                            <div>
                              <strong>${A("valid_from")}: </strong>
                              ${s.valid_from ? new Date(s.valid_from).toLocaleString() : A("unknown")}
                              <strong>${A("valid_to")}: </strong>
                              ${s.valid_to ? new Date(s.valid_to).toLocaleString() : A("unknown")}
                            </div>
                            <div
                              style="color: var(--primary-text-color, #fff); font-size: 14px; line-height: 1.4; margin-left: 2px; margin-top: 4px;"
                              .innerHTML="${k.parse(s.description || "")}"
                            ></div>
                          ` : ""}
                    </li>
                  `
    )}
              </ul>
            </div>
          </div>
        ` : d``;
  }
  _openWarnings = {};
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_temperature = true;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  _renderForecastTemperature(i) {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<forecast-temperature-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${i}
          .show_temperature=${this.config.show_temperature !== !1}
          ._t=${A}
          .showHoursChartLabel=${(e) => at(e)}
        ></forecast-temperature-chart>` : d``;
  }
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_precipitation = true;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  _renderForecastPrecipitation(i) {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<precipitation-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${i}
          .show_precipitation=${this.config.show_precipitation !== !1}
          ._t=${A}
          .showHoursChartLabel=${(e) => at(e)}
        ></precipitation-chart>` : d``;
  }
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_sunshine = true;
  // @property({ type: Object }) weatherEntity!: WeatherEntity;
  // @property({ type: Object }) sun_entity?: HassEntity | null;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  _renderForecastSunshine(i, e, t) {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<sunshine-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${t}
          .show_sunshine=${this.config.show_sunshine !== !1}
          .weatherEntity=${i}
          .sun_entity=${e}
          ._t=${A}
          .showHoursChartLabel=${(r) => at(r)}
        ></sunshine-chart>` : d``;
  }
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_wind = true;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  _renderForecastWind(i) {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<wind-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${i}
          .show_wind=${this.config.show_wind !== !1}
          ._t=${A}
          .showHoursChartLabel=${(e) => at(e)}
        ></wind-chart>` : d``;
  }
  _renderCurrentWeather(i, e, t, r, n, s) {
    return d`
      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${A("current_weather")}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(i)} km/h</div>
          <div class="metric-label">${A("wind")}</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${e}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(e)}</div>
          <div class="metric-label">${A("direction")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${t}%</div>
          <div class="metric-label">${A("humidity")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${r} hPa</div>
          <div class="metric-label">${A("pressure")}</div>
        </div>
        ${s ? d`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                <div class="metric-value">${parseFloat(s.state).toFixed(1)}h</div>
                <div class="metric-label">${A("sunshine")}</div>
              </div>
            ` : ""}
        ${n > 0 ? d`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                <div class="metric-value">${n} km</div>
                <div class="metric-label">${A("visibility")}</div>
              </div>
            ` : ""}
      </div>
    `;
  }
  _renderCurrentWeatherSection(i, e, t, r, n, s) {
    return d`
      <div class="current-weather-section">
        ${this.config.compact_mode === !0 ? d`
              ${this._renderCurrentWeatherCompactMode(
      i,
      e,
      t,
      r,
      n,
      s
    )}
            ` : d`
              ${this._renderCurrentWeather(
      i,
      e,
      t,
      r,
      n,
      s
    )}
            `}
      </div>
    `;
  }
  render() {
    if (et((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return d``;
    const i = this._getEntityState(this.config.entity), e = this._getEntityState(this.config.sun_entity || "sun.sun");
    if (!i)
      return d`<div>Entity not found: ${this.config.entity}</div>`;
    const t = this.config.show_location !== !1, r = this.config.location || A("location"), n = i.attributes.temperature, s = i.state, o = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null, a = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null, l = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null, c = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null, h = o ? parseFloat(o.state) : i.attributes.wind_speed || 0, p = a ? parseFloat(a.state) : i.attributes.wind_bearing || 0, u = i.attributes.humidity || 0, g = i.attributes.pressure || 0, v = i.attributes.visibility || 0, C = this.config.forecast_hours ?? 6;
    return d`
      ${t ? d`
            <div class="header">
              <div class="location">${r}</div>
            </div>
          ` : ""}
      ${this.config.show_warnings ? this._renderWarningSection(c) : ""}

      <div class="current-weather">
        <div>
          <div class="current-temp">${n}°</div>
          <div class="condition">${A(s)}</div>
        </div>
        <div class="current-details">
          <div
            class="weather-icon"
            style="color: var(--icon-color, #fff); width: 64px; height: 64px;"
          >
            ${ht(
      s,
      this.config.enable_animate_weather_icons ? "animated" : "mdi",
      "64px",
      Er(this.hass, this.config)
    )}
          </div>
        </div>
      </div>

      ${this._renderCurrentWeatherSection(
      h,
      p,
      u,
      g,
      v,
      l
    )}
      ${this.config.compact_mode === !1 && (this.config.show_temperature === !0 || this.config.show_precipitation === !0 || this.config.show_sunshine === !0) ? d`
            <div class="section-title">
              <ha-icon icon="mdi:clock"></ha-icon>
              ${A("forecast_hours", { hours: C })}
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
          return this._renderForecastTemperature(C);
        case "precipitation":
          return this._renderForecastPrecipitation(C);
        case "sunshine":
          return this._renderForecastSunshine(i, e, C);
        case "wind":
          return this._renderForecastWind(C);
        case "forecast":
          return this._showDailyForecast();
        default:
          return "";
      }
    })}
    `;
  }
  _renderCurrentWeatherCompactMode(i, e, t, r, n, s) {
    return d`
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
          <div class="metric-value">${r} hPa</div>
        </div>
        ${s ? d`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                  <div class="metric-value">${parseFloat(s.state).toFixed(1)}h</div>
                </div>
              ` : ""}
        ${n > 0 ? d`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                  <div class="metric-value">${n} km</div>
                </div>
              ` : ""}
      </div
      `;
  }
  _showDailyForecast() {
    return this.config.show_forecast !== !1 ? d`
          ${this.config.compact_mode === !0 && this.config.show_forecast === !0 ? this._renderDailyForecastDiagram() : d``}
          ${this.config.compact_mode === !1 ? this._renderDailyForecastChart() : d``}
        ` : d``;
  }
  // @property({ type: Array }) forecast: WeatherForecast[] = [];
  // @property({ type: Boolean }) forecastLoading = false;
  // @property({ type: Boolean }) show_forecast = true;
  // @property({ type: Object }) config: any = {};
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) getWeatherIcon!: (...args: any[]) => TemplateResult;
  // @property({ type: Function }) isDay!: () => boolean;
  _renderDailyForecastChart() {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<daily-forecast-chart
          .forecast=${this._forecast?.slice(0, 7) ?? []}
          .forecastLoading=${this._forecastLoading}
          .show_forecast=${this.config.show_forecast !== !1}
          .config=${this.config}
          ._t=${A}
          .getWeatherIcon=${ht}
          .formatDate=${rs}
        ></daily-forecast-chart>` : d``;
  }
  // @property({ type: Array }) forecast: WeatherForecast[] = [];
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Object }) config: any;
  // @property({ type: Function }) getWeatherIcon!: (...args: any[]) => TemplateResult;
  _renderDailyForecastDiagram() {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<daily-forecast-diagram
          .config=${this.config}
          .forecast=${[...this._forecast?.slice(0, 7) ?? []]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${A}
          .getWeatherIcon=${ht}
        ></daily-forecast-diagram>` : d``;
  }
};
xe([
  y({ attribute: !1 })
], ie.prototype, "hass", 2);
xe([
  y({ attribute: !1 })
], ie.prototype, "config", 2);
xe([
  me()
], ie.prototype, "_forecast", 2);
xe([
  me()
], ie.prototype, "_hourlyForecast", 2);
xe([
  me()
], ie.prototype, "_forecastLoading", 2);
xe([
  me()
], ie.prototype, "_openWarnings", 2);
ie = xe([
  O(tt)
], ie);
const de = `${ei}-forecast-diagram-card`, zr = `${de}-editor`, Vt = [
  {
    name: "entity",
    required: !0,
    selector: { entity: { domain: "weather" } },
    description: "config.descr.entity"
  }
];
var xo = Object.defineProperty, wo = Object.getOwnPropertyDescriptor, Tt = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? wo(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && xo(e, t, n), n;
};
Le({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => He[i]
});
let Xe = class extends L {
  hass;
  lovelace;
  _config;
  constructor() {
    super(), console.log("🎨 SwissweatherCardEditor (Forecast Diagram) constructor called");
  }
  setConfig(i) {
    const e = { ...i }, t = ["entity", "sun_entity"];
    for (const r of t)
      e[r] === "" && delete e[r];
    this._config = e, this.requestUpdate();
  }
  static get styles() {
    return z`
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
    if (!this.hass)
      return d`<div>Loading...</div>`;
    et((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
    const i = {
      entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
      sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0
    };
    return d`
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
            .data=${i}
            .schema=${[Vt.find((e) => e.name === "entity")].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Sensors -->
        <div class="group">
          <div class="group-title">${x("config.group_sensors") || "Sensors"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${i}
            .schema=${[Vt.find((e) => e.name === "sun_entity")].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Configuration Preview -->
        ${this._config?.entity ? d`
              <div class="preview">
                <div class="preview-title">📋 YAML-Config</div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            ` : ""}
      </div>
    `;
  }
  _computeLabel = (i) => ({
    entity: x("config.entity"),
    sun_entity: x("config.sun_entity")
  })[i.name] || i.name;
  _computeHelper = (i) => i.description ? x(i.description) : "";
  _renderConfigPreview() {
    const i = { ...this._config };
    return i.type || (i.type = "custom:" + de), Object.keys(i).forEach((e) => {
      (i[e] === void 0 || i[e] === "") && delete i[e];
    }), Object.entries(i).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join(`
`);
  }
  _valueChanged(i) {
    if (this._config || (this._config = {
      type: `custom:${de}`,
      entity: "",
      sun_entity: ""
    }), i.type === "value-changed") {
      const e = {}, { ...t } = i.detail.value || {}, r = {
        ...this._config,
        ...t,
        ...e,
        type: "custom:" + de
      };
      Object.keys(r).forEach((n) => {
        (r[n] === "" || r[n] === void 0) && delete r[n];
      }), this._config = r, yt(this, "config-changed", { config: this._config });
    }
  }
};
Tt([
  y({ attribute: !1 })
], Xe.prototype, "hass", 2);
Tt([
  y({ attribute: !1 })
], Xe.prototype, "lovelace", 2);
Tt([
  y({ attribute: !1 })
], Xe.prototype, "_config", 2);
Xe = Tt([
  O(zr)
], Xe);
var bo = Object.defineProperty, vo = Object.getOwnPropertyDescriptor, Ge = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? vo(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && bo(e, t, n), n;
};
Le({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => He[i]
});
let ge = class extends L {
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
  updated(i) {
    super.updated(i);
  }
  static get styles() {
    return z`
      :host {
        display: block;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
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

        /* Calculate height according to HA docs: rows * 56px + (rows-1) * 8px gap */
        /* Simplified: height = rows * 64px - 8px */
        height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
      }

      .chart {
        background: var(--card-background-color, #fff);
        border-radius: 12px;
        padding: 15px;
        border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
      }
    `;
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
        const r = e?.response;
        r && r[this.config.entity] ? (this._hourlyForecast = r[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [], console.log("🟢 Forecast geladen:", {
          forecast: this._forecast,
          hourlyForecast: this._hourlyForecast
        });
      } catch (i) {
        console.warn("⚠️ Forecast loading failed:", i), this._forecast = [], this._hourlyForecast = [];
      } finally {
        this._forecastLoading = !1;
      }
    }
  }
  setConfig(i) {
    if (!i.entity)
      throw new Error("You need to define an entity");
    this.config = i, setTimeout(() => {
      this._loadForecast();
    }, 1e3);
  }
  static getStubConfig() {
    return {
      type: `custom:${de}`,
      entity: ""
    };
  }
  static getConfigElement() {
    return document.createElement(zr);
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return Vt;
  }
  getCardSize() {
    return this.config?.grid_options?.rows ?? 3;
  }
  // The rules for sizing your card in the grid in sections view
  getGridOptions() {
    return {
      rows: this.config?.grid_options?.rows ?? 3,
      columns: this.config?.grid_options?.columns ?? 12,
      min_columns: 12,
      max_columns: 48,
      min_rows: 3,
      max_rows: 8
    };
  }
  render() {
    const i = vt(this.hass, this.config.entity), e = this.config?.grid_options?.rows ?? 3;
    return this.style.setProperty("--card-grid-rows", e.toString()), i ? !this._forecast || this._forecast.length === 0 ? d`<div>Loading forecast...</div>` : !this._hourlyForecast || this._hourlyForecast.length === 0 ? d`<div>Loading hourly forecast...</div>` : this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<daily-forecast-diagram
          .config=${{ ...this.config, enable_animate_weather_icons: !0 }}
          .forecast=${[...this._forecast?.slice(0, 7) ?? []]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${A}
          .getWeatherIcon=${ht}
          .standalone=${!0}
        ></daily-forecast-diagram>` : d`` : d`<div>Entity not found: ${this.config.entity}</div>`;
  }
};
Ge([
  y({ attribute: !1 })
], ge.prototype, "hass", 2);
Ge([
  y({ attribute: !1 })
], ge.prototype, "config", 2);
Ge([
  me()
], ge.prototype, "_forecast", 2);
Ge([
  me()
], ge.prototype, "_hourlyForecast", 2);
Ge([
  me()
], ge.prototype, "_forecastLoading", 2);
ge = Ge([
  O(de)
], ge);
const Or = () => w`
  <defs>
    <radialGradient id="lwStormFlashGradient" cx="50%" cy="20%" r="90%">
      <stop offset="0%" style="stop-color:#ffff88;stop-opacity:1" />
      <stop offset="15%" style="stop-color:#fff59d;stop-opacity:0.95" />
      <stop offset="40%" style="stop-color:#ffeb3b;stop-opacity:0.8" />
      <stop offset="70%" style="stop-color:#ffc107;stop-opacity:0.5" />
      <stop offset="100%" style="stop-color:#ff8f00;stop-opacity:0.2" />
    </radialGradient>

    <!-- Dramatic storm flash (full background) -->
    <rect id="lwStormFlash" x="0" y="0" width="100%" height="100%" fill="url(#lwStormFlashGradient)" opacity="0">
      <animate attributeName="opacity" 
               values="0;0;0;1;0;0.9;0;1;0;0.5;0;0;0;0;0;0;0.6;0;0;0;0;0;0.8;0" 
               dur="6s" 
               repeatCount="indefinite"/>
    </rect>

    <!-- Thunder rumble glow layer -->
    <rect id="lwThunderRumble" x="0" y="0" width="100%" height="100%" fill="#fff9c4" opacity="0">
      <animate attributeName="opacity" 
               values="0;0;0.2;0.1;0.3;0.05;0.4;0;0;0;0;0;0;0;0;0;0.1;0;0;0;0;0;0.2;0" 
               dur="6s" 
               begin="0.5s"
               repeatCount="indefinite"/>
    </rect>

    <!-- Subtle flicker -->
    <rect id="lwLightningFlicker" x="0" y="0" width="100%" height="100%" fill="#fff176" opacity="0">
      <animate attributeName="opacity" 
               values="0;0.2;0;0.3;0;0.1;0;0.5;0;0.25;0;0;0;0;0;0;0;0;0;0;0;0;0;0" 
               dur="4s" 
               begin="0.2s"
               repeatCount="indefinite"/>
    </rect>
  </defs>
  <use href="#lwLightningFlicker"/>
  <use href="#lwStormFlash"/>
  <use href="#lwThunderRumble"/>
`, _o = (i, e, t) => {
  if (!i)
    return d``;
  const r = {
    "clear-night": $o(t),
    cloudy: Ao(t),
    fog: Co(t),
    hail: So(t),
    lightning: No(t),
    "lightning-rainy": Lo(t),
    partlycloudy: e ? Eo(t) : zo(t),
    pouring: To(t),
    rainy: Mo(t),
    snowy: Go(t),
    "snowy-rainy": Ho(t),
    sunny: ko(),
    windy: Ki(t),
    "windy-variant": Ki(t),
    exceptional: Oo(t)
  };
  return i ? r[i] : d``;
}, $o = (i) => w`
  <defs>
    <linearGradient id="moonGradient" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#86c3db"/>
      <stop offset=".45" stop-color="#86c3db"/>
      <stop offset="1" stop-color="#5eafcf"/>
      <animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="5 32 32; -15 32 32; 5 32 32"/>
    </linearGradient>
    <linearGradient id="starGradient" x1="23.22" x2="40.78" y1="16.8" y2="47.2" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fcd966"/>
      <stop offset=".45" stop-color="#fcd966"/>
      <stop offset="1" stop-color="#fccd34"/>
      <animateTransform attributeName="gradientTransform" dur="18s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/>
    </linearGradient>
  <!-- star -->
  <g id="starIcon">
    <path fill="url(#starGradient)" stroke="#fcd34d" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M33 23l9.06-4.25a2.39 2.39 0 013.18 3.18L41 31a2.42 2.42 0 000 2l4.25 9.06a2.39 2.39 0 01-3.18 3.18L33 41a2.42 2.42 0 00-2 0l-9.06 4.25a2.39 2.39 0 01-3.18-3.18L23 33a2.42 2.42 0 000-2l-4.25-9.06a2.39 2.39 0 013.18-3.18L31 23a2.42 2.42 0 002 0z">
      <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="1; 0.4; 1"/>
      <animateTransform attributeName="transform" dur="18s" repeatCount="indefinite" type="rotate" values="360 32 32; 0 32 32"/>
    </path>
  </g>
  </defs>
  <!-- moon -->
  <g id="clearNightIcon" transform="translate(168,-30) scale(3)">
    <path fill="url(#moonGradient)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z">
      <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32; 15 32 32; -5 32 32"/>
    </path>
  </g>
  <!-- stars -->
  <g>
  ${Array.from({ length: Math.ceil(i / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), r = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + r;
  return w`
    <use href="#starIcon" x="0" y="0" transform="translate(${s},${n}) scale(0.5)"/>
    `;
})}
  </g>
`, ko = () => w`
  <defs>
    <linearGradient id="sunshineBlueGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4fc3f7" />
      <stop offset="80%" stop-color="#4fc3f7" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="sunGradient" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fcd966"/>
      <stop offset=".45" stop-color="#fcd966"/>
      <stop offset="1" stop-color="#fccd34"/>
      <animateTransform attributeName="gradientTransform" dur="18s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/>
    </linearGradient>
  </defs>
  <!-- background -->
  <rect width="100%" height="80%" fill="url(#sunshineBlueGradient)" />
  <!-- sun -->
  <g id="sunIcon" transform="translate(168,-30) scale(3)">
    <circle cx="32" cy="32" r="10.5" fill="url(#sunGradient)" stroke="#fcd34d" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" />
    <path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21">
      <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/>
    </path>
  </g>
`, Ao = (i) => w`
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a3bdc9ff" />
      <stop offset="100%" stop-color="#90d4f4ff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
  </defs>
  <!-- background -->
  <rect width="100%" height="80%" fill="url(#background)" />
  ${V(i)}
  `, Co = (i) => w`
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a3bdc9ff" />
      <stop offset="100%" stop-color="#90d4f4ff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="fogCloud" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <linearGradient id="fogLine1" x1="27.5" x2="36.5" y1="50.21" y2="65.79" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#d4d7dd"/>
      <stop offset=".45" stop-color="#d4d7dd"/>
      <stop offset="1" stop-color="#bec1c6"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#fogCloud)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="none" stroke="url(#fogLine1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30">
        <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </path>
      <path fill="none" stroke="url(#fogLine2)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30">
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </path>
    </g>
  </defs>
  <!-- background -->
  <rect width="100%" height="80%" fill="url(#background)" />
  ${V(i)}
  `, So = (i) => w`
  <defs>
    <linearGradient id="hailGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="hailIcon">
      <path fill="url(#hailGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <circle cx="24" cy="42" r="4" fill="#a8dadc"/>
      <circle cx="40" cy="42" r="4" fill="#a8dadc"/>
      <circle cx="32" cy="34" r="4" fill="#a8dadc"/>
    </g>
  </defs>
  ${Array.from({ length: Math.ceil(i / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), r = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + r;
  return w`
  <g>
    <use href="#hailIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(${s},${n})" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  `;
})}
  `, Mo = (i) => w`
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4fc2f79c" />
      <stop offset="80%" stop-color="#4fc2f79c" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <linearGradient id="a" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4286ee"/>
      <stop offset=".45" stop-color="#4286ee"/>
      <stop offset="1" stop-color="#0950bc"/>
    </linearGradient>
    <linearGradient id="c" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#a"/>
    <linearGradient id="d" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#a"/>
    <g id="cloudRainGroup">
    <path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    <path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94">
      <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
      <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
    </path>
    <path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94">
      <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
      <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
    </path>
    <path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94">
      <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
      <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
    </path>
    </g>    
  </defs>
  <!-- background -->
  <rect width="100%" height="80%" fill="url(#background)" />
  ${Array.from({ length: Math.ceil(i / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), r = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + r, o = 1 * Math.random();
  return w`
    <g>
      <use href="#cloudRainGroup" x="0" y="-10" width="80" height="40" transform="scale(${o}.${o}) translate(${s},${n})" opacity="0.9"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
    </g>
    `;
})}
  
  `;
w`<g transform="translate(168,-30) scale(3)"><circle cx="24" cy="42" r="4" fill="#a8dadc"/><circle cx="40" cy="42" r="4" fill="#a8dadc"/><circle cx="32" cy="34" r="4" fill="#a8dadc"/><path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></g>`;
const To = (i) => w`
  <defs>
    <linearGradient id="extremeRainGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="extremeRainIcon">
      <path fill="url(#extremeRainGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <linearGradient id="extremeRainDropGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#3a86ff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#3a86ff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#extremeRainIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  
  <!-- Rain drops -->
  ${Array.from({ length: Math.ceil(i / 20) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), r = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 20 + r;
  return w`
    <line x1="${s}" y1="${n}" x2="${s}" y2="${n + 10}" stroke="url(#extremeRainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${n}; ${n + 20}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${n + 10}; ${n + 30}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="0.5s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, Ki = (i) => w`
  <defs>
    <linearGradient id="windGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="windIcon">
      <path fill="url(#windGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <linearGradient id="windLineGradient" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="#9ca3af" stop-opacity="0"/>
      <stop offset="50%" stop-color="#9ca3af" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#9ca3af" stop-opacity="0"/>
    </linearGradient>
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#windIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  
  <!-- Wind lines -->
  ${Array.from({ length: Math.ceil(i / 50) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), r = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 50 + r;
  return w`
    <line x1="${s}" y1="${n}" x2="${s + 30}" y2="${n}" stroke="url(#windLineGradient)" stroke-width="4" stroke-linecap="round">
      <animate attributeName="x1" values="${s}; ${s + 10}; ${s}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="${s + 30}; ${s + 40}; ${s + 30}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0.4; 1" dur="3s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, No = (i) => w`
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2e414aff" />
      <stop offset="100%" stop-color="#467388ff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="thunderstormGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
   
    <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#87ceeb;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4169e1;stop-opacity:1" />
    </linearGradient>
    
    <g id="icon">
      <path fill="url(#thunderstormGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="#facc15" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z">
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"/>
      </path>
    </g>
  </defs>
  <!-- background -->
  <rect width="100%" height="100%" fill="url(#background)" />
 
   ${V(i)}
   
  <!-- Lightning flash effect that illuminates the entire background (full-size overlay) -->
  ${Or()}
  `, Lo = (i) => w`
  <defs>
    <linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <linearGradient id="a" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4286ee"/>
      <stop offset=".45" stop-color="#4286ee"/>
      <stop offset="1" stop-color="#0950bc"/>
    </linearGradient>
    <linearGradient id="c" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#a"/>
    <linearGradient id="d" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#a"/>
    <linearGradient id="e" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f7b23b"/>
      <stop offset=".45" stop-color="#f7b23b"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94">
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </path>
      <path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </path>
      <path fill="url(#e)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z">
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"/>
      </path>
    </g>
  </defs>

  ${V(i)}
  
  <!-- Lightning flash effect for rainy thunderstorms -->
  ${Or()}
  `, V = (i) => w`
${Array.from({ length: Math.ceil(i / 10) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), r = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + r, o = Math.floor(Math.random() * 2) + 1, a = 1 + Math.random() * 1, l = 44 + Math.floor(Math.random() * 90);
  return w`
    <g>
      <use href="#icon" x="${s}" y="${n}" width="80" height="40" transform="scale(${o})" opacity="0">
        <animate attributeName="opacity" values="0;${a};${a};0" dur="${l}s" repeatCount="indefinite"/>
      </use>
      <animateTransform attributeName="transform" type="translate" values="-150,20;450,20" dur="${l}s" repeatCount="indefinite"/>
    </g>
    `;
})}
  `, Ho = (i) => w`
  <defs>
    <linearGradient id="sleetGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#sleetGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <circle cx="24" cy="42" r="4" fill="#a8dadc"/>
      <circle cx="40" cy="42" r="4" fill="#a8dadc"/>
      <line x1="32" y1="34" x2="32" y2="38" stroke="#3a86ff" stroke-width="2" stroke-linecap="round">
        <animate attributeName="y1" values="34; 44" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="38; 48" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite"/>
      </line>
    </g>
  </defs>
  
  ${V(i)}
  `, Go = (i) => w`
  <defs>
    <linearGradient id="snowGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="snowIcon">
      <path fill="url(#snowGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <linearGradient id="snowFlakeGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#dbeafe" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#dbeafe" stop-opacity="0"/>
    </linearGradient>
    <g id="snowFlakeIcon" stroke="url(#snowFlakeGradient)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <line x1="0" y1="-4" x2="0" y2="4"/>
      <line x1="-3" y1="-3" x2="3" y2="3"/>
      <line x1="-3" y1="3" x2="3" y2="-3"/>
    </g>
    <g id="cloudIcon">
      <use href="#snowIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
    </g>
    <g id="icon">
      <use href="#snowFlakeIcon" x="0" y="0" width="8" height="8" opacity="1"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,20" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite"/>
    </g>

  </defs>
  
  ${V(i)}
  `, Eo = (i) => w`
  <defs>
    <linearGradient id="sunshineBlueGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4fc3f7" />
      <stop offset="100%" stop-color="#4fc3f7" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="partlyCloudyDayGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset=".45" stop-color="#fbbf24"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient
    <g id="cloudIcon">
      <path fill="url(#partlyCloudyDayGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <g id="icon">
      <path fill="url(#partlyCloudyDayGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <g id="sunIcon">
      <circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/>
      <path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21">
        <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/>
      </path>
    </g>
  </defs>
  <!-- background -->
  <rect width="100%" height="100%" fill="url(#sunshineBlueGradient)" />
  <!-- Sun -->
  <g>
    <use href="#sunIcon" x="200" y="50" width="100" height="100" opacity="0.9"/>
  </g>
  ${V(i)}
  `, zo = (i) => w`
  <defs>
    <linearGradient id="partlyCloudyNightGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#partlyCloudyNightGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <g id="moonIcon">
      <path fill="#fbbf24" stroke="#f59e0b" stroke-width="1" d="M12 2a10 10 0 1010 10A8 8 0 0112 2z"/>
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="60s" repeatCount="indefinite"/>
    </g>
  </defs>
  <!-- Moon -->
  <g>
    <use href="#moonIcon" x="200" y="50" width="100" height="100" opacity="0.9"/>
  </g>
  ${V(i)}
  `, Oo = (i) => w`
  <defs>
    <linearGradient id="hurricaneGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#hurricaneGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <circle cx="32" cy="36" r="6" fill="#f87171" stroke="#b91c1c" stroke-width="1"/>
      <path fill="#f87171" stroke="#b91c1c" stroke-width="1" d="M32 30a6 6 0 016 6h-6V30zM32 42a6 6 0 01-6-6h6v6zM26 36a6 6 0 016-6v6H26zM38 36a6 6 0 01-6 6v-6h6z"/>
    </g>
  </defs>
  
  ${V(i)}
  `, he = `${ei}-animated-background-card`, Pr = `${he}-editor`, Dr = [
  {
    name: "entity",
    required: !0,
    selector: { entity: { domain: "weather" } },
    description: "config.descr.entity"
  }
];
var Po = Object.defineProperty, Do = Object.getOwnPropertyDescriptor, hi = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Do(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && Po(e, t, n), n;
};
Le({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => He[i]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard (BG)");
console.log("🎯 customElements registry available:", !!customElements);
let _t = class extends L {
  hass;
  config;
  static get styles() {
    return z`
      :host {
        display: block;
        box-shadow: none;
        /* Calculate height according to HA docs: rows * 56px + (rows-1) * 8px gap */
        /* Simplified: height = rows * 64px - 8px */
        height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
      }

      .temperature {
        text-align: center;
        border-radius: 45px;
        border: 2px solid var(--primary-text-color, #fff);
        background: var(--ha-card-background, var(--card-background-color, #fff));
        padding: 5px 10px;
        float: left;
        box-shadow: var(
          --ha-card-box-shadow,
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2)
        );
        item-align: center;
        justify-content: center;
        align-content: center;
        align-items: center;
        position: relative;
        font-size: 36px;
        font-weight: bold;
        text-align: center;
        z-index: 1;
      }

      .img-svg {
        position: absolute;
        margin-top: 36px;
        inset: 0;
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        min-height: 200px;
        box-shadow: var(
          --ha-card-box-shadow,
          0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1))
        );
      }
      .condition {
        position: absolute;
        bottom: 16px;
        margin-left: 16px;
        margin-right: 16px;
        font-size: 16px;
        color: var(--primary-text-color, #fff);
        text-align: right;
      }
      @media (max-width: 768px) {
        .metrics-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `;
  }
  setConfig(i) {
    if (!i.entity)
      throw new Error("You need to define an entity");
    this.config = i;
  }
  getCardSize() {
    return this.config?.grid_options?.rows ?? 3;
  }
  // The rules for sizing your card in the grid in sections view
  getGridOptions() {
    return {
      rows: this.config?.grid_options?.rows ?? 3,
      columns: this.config?.grid_options?.columns ?? 12,
      min_columns: 12,
      max_columns: 48,
      min_rows: 3,
      max_rows: 8
    };
  }
  static getStubConfig() {
    return {
      type: `custom:${he}`,
      entity: ""
    };
  }
  static getConfigElement() {
    return document.createElement(Pr);
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return Dr;
  }
  render() {
    if (et((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return d``;
    const i = this.config?.grid_options?.rows ?? 3;
    this.style.setProperty("--card-grid-rows", i.toString());
    const e = vt(this.hass, this.config.entity), t = e.attributes.temperature, r = e.state, n = this.clientWidth || 300, s = i * 64 - 8;
    return d`
      <div>
        <div class="temperature">
          ${typeof t == "number" && !isNaN(t) ? t : "--"}°
        </div>
        ${r ? d`<div class="img-svg">
                <svg
                  viewBox="0 0 ${n} ${s}"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid slice"
                >
                  ${n > 0 ? _o(r, Er(this.hass, this.config), n) : w``}
                </svg>
              </div>
              <div class="condition">${A(r)}</div> ` : d``}
      </div>
    `;
  }
};
hi([
  y({ attribute: !1 })
], _t.prototype, "hass", 2);
hi([
  y({ attribute: !1 })
], _t.prototype, "config", 2);
_t = hi([
  O(he)
], _t);
console.log("✅ SwissWeatherCard (animated Background) fully loaded and registered");
var Wo = Object.defineProperty, Ro = Object.getOwnPropertyDescriptor, Nt = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Ro(e, t) : e, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && Wo(e, t, n), n;
};
Le({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => He[i]
});
let Je = class extends L {
  hass;
  lovelace;
  _config;
  constructor() {
    super(), console.log("🎨 SwissweatherCardEditor (BG) constructor called");
  }
  setConfig(i) {
    const e = { ...i }, t = ["entity", "sun_entity"];
    for (const r of t)
      e[r] === "" && delete e[r];
    this._config = e, this.requestUpdate();
  }
  static get styles() {
    return z`
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
    if (!this.hass)
      return d`<div>Loading...</div>`;
    et((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
    const i = {
      entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
      sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0
    };
    return d`
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
            .data=${i}
            .schema=${[Dr.find((e) => e.name === "entity")].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Configuration Preview -->
        ${this._config?.entity ? d`
              <div class="preview">
                <div class="preview-title">📋 YAML-Config</div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            ` : ""}
      </div>
    `;
  }
  _computeLabel = (i) => ({
    entity: x("config.entity"),
    sun_entity: x("config.sun_entity")
  })[i.name] || i.name;
  _computeHelper = (i) => i.description ? x(i.description) : "";
  _renderConfigPreview() {
    const i = { ...this._config };
    return i.type || (i.type = `custom:${he}`), Object.keys(i).forEach((e) => {
      (i[e] === void 0 || i[e] === "") && delete i[e];
    }), Object.entries(i).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join(`
`);
  }
  _valueChanged(i) {
    if (this._config || (this._config = {
      type: `custom:${he}`,
      entity: ""
    }), i.type === "value-changed") {
      const e = {}, { ...t } = i.detail.value || {}, r = {
        ...this._config,
        ...t,
        ...e,
        type: `custom:${he}`
      };
      Object.keys(r).forEach((n) => {
        (r[n] === "" || r[n] === void 0) && delete r[n];
      }), this._config = r, yt(this, "config-changed", { config: this._config });
    }
  }
};
Nt([
  y({ attribute: !1 })
], Je.prototype, "hass", 2);
Nt([
  y({ attribute: !1 })
], Je.prototype, "lovelace", 2);
Nt([
  y({ attribute: !1 })
], Je.prototype, "_config", 2);
Je = Nt([
  O(Pr)
], Je);
console.log("📦 SwissWeather Card TypeScript file imported");
setTimeout(() => {
  const i = customElements.get("swissweather-card"), e = customElements.get("swissweather-card-editor");
  console.log("🔍 SwissWeather Card registration status:", i ? "SUCCESS ✅" : "FAILED ❌"), console.log("🔍 SwissWeather Editor registration status:", e ? "SUCCESS ✅" : "FAILED ❌"), i ? (console.log("🔍 Element constructor:", i), console.log("🔍 Element prototype:", i.prototype)) : (console.error('❌ Custom element "swissweather-card" was not registered!'), console.log("🔍 Checking custom elements registry..."));
}, 100);
console.log("📦 SwissWeather Card module loading started...");
console.log("📦 Browser support check:", {
  customElements: !!window.customElements,
  hasReflect: !!window.Reflect
});
di({
  type: tt,
  name: "SwissWeather Diagram Card",
  description: "A comprehensive weather card for Home Assistant with Swiss weather warnings and forecasts"
});
di({
  type: de,
  name: "SwissWeather Daily Forecast Diagram Card",
  description: "A card to show daily weather forecast as diagram"
});
di({
  type: he,
  name: "SwissWeather Animated Background Card Editor",
  description: "the SwissWeather Animated Background Card"
});
console.log(
  `%c 📦 SwissWeather Card module loading completed - version: ${jr}`,
  "color: #ef5350; font-weight: 700;"
);
export {
  R as DailyForecastChart,
  te as DailyForecastDiagram,
  ge as ForecastDiagramCard,
  Xe as ForecastDiagramCardEditor,
  X as ForecastTemperatureChart,
  J as PrecipitationChart,
  U as SunshineChart,
  _t as SwissWeatherBGCard,
  Je as SwissWeatherBGCardEditor,
  ie as SwissWeatherCard,
  Qe as SwissWeatherCardEditor,
  ee as WindChart
};
//# sourceMappingURL=swissweather-card.js.map

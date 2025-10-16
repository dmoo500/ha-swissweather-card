const ts = "1.6.0";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yt = globalThis, Qt = yt.ShadowRoot && (yt.ShadyCSS === void 0 || yt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Jt = Symbol(), Ti = /* @__PURE__ */ new WeakMap();
let ir = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== Jt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Qt && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = Ti.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && Ti.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const is = (i) => new ir(typeof i == "string" ? i : i + "", void 0, Jt), D = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce(((s, r, n) => s + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + i[n + 1]), i[0]);
  return new ir(t, i, Jt);
}, rs = (i, e) => {
  if (Qt) i.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const s = document.createElement("style"), r = yt.litNonce;
    r !== void 0 && s.setAttribute("nonce", r), s.textContent = t.cssText, i.appendChild(s);
  }
}, Li = Qt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return is(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ss, defineProperty: ns, getOwnPropertyDescriptor: os, getOwnPropertyNames: as, getOwnPropertySymbols: ls, getPrototypeOf: cs } = Object, Tt = globalThis, Ni = Tt.trustedTypes, ds = Ni ? Ni.emptyScript : "", hs = Tt.reactiveElementPolyfillSupport, Qe = (i, e) => i, wt = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? ds : null;
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
} }, ei = (i, e) => !ss(i, e), zi = { attribute: !0, type: String, converter: wt, reflect: !1, useDefault: !1, hasChanged: ei };
Symbol.metadata ??= Symbol("metadata"), Tt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let Se = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = zi) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = Symbol(), r = this.getPropertyDescriptor(e, s, t);
      r !== void 0 && ns(this.prototype, e, r);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: r, set: n } = os(this.prototype, e) ?? { get() {
      return this[t];
    }, set(o) {
      this[t] = o;
    } };
    return { get: r, set(o) {
      const a = r?.call(this);
      n?.call(this, o), this.requestUpdate(e, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? zi;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Qe("elementProperties"))) return;
    const e = cs(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Qe("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Qe("properties"))) {
      const t = this.properties, s = [...as(t), ...ls(t)];
      for (const r of s) this.createProperty(r, t[r]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [s, r] of t) this.elementProperties.set(s, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, s] of this.elementProperties) {
      const r = this._$Eu(t, s);
      r !== void 0 && this._$Eh.set(r, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const r of s) t.unshift(Li(r));
    } else e !== void 0 && t.push(Li(e));
    return t;
  }
  static _$Eu(e, t) {
    const s = t.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const s of t.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return rs(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((e) => e.hostDisconnected?.()));
  }
  attributeChangedCallback(e, t, s) {
    this._$AK(e, s);
  }
  _$ET(e, t) {
    const s = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, s);
    if (r !== void 0 && s.reflect === !0) {
      const n = (s.converter?.toAttribute !== void 0 ? s.converter : wt).toAttribute(t, s.type);
      this._$Em = e, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const s = this.constructor, r = s._$Eh.get(e);
    if (r !== void 0 && this._$Em !== r) {
      const n = s.getPropertyOptions(r), o = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : wt;
      this._$Em = r;
      const a = o.fromAttribute(t, n.type);
      this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
    }
  }
  requestUpdate(e, t, s) {
    if (e !== void 0) {
      const r = this.constructor, n = this[e];
      if (s ??= r.getPropertyOptions(e), !((s.hasChanged ?? ei)(n, t) || s.useDefault && s.reflect && n === this._$Ej?.get(e) && !this.hasAttribute(r._$Eu(e, s)))) return;
      this.C(e, t, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: s, reflect: r, wrapped: n }, o) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, o ?? t ?? this[e]), n !== !0 || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (t = void 0), this._$AL.set(e, t)), r === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
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
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [r, n] of s) {
        const { wrapped: o } = n, a = this[r];
        o !== !0 || this._$AL.has(r) || a === void 0 || this.C(r, void 0, n, a);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((s) => s.hostUpdate?.())), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
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
Se.elementStyles = [], Se.shadowRootOptions = { mode: "open" }, Se[Qe("elementProperties")] = /* @__PURE__ */ new Map(), Se[Qe("finalized")] = /* @__PURE__ */ new Map(), hs?.({ ReactiveElement: Se }), (Tt.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ti = globalThis, bt = ti.trustedTypes, Hi = bt ? bt.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, rr = "$lit$", J = `lit$${Math.random().toFixed(9).slice(2)}$`, sr = "?" + J, ps = `<${sr}>`, xe = document, tt = () => xe.createComment(""), it = (i) => i === null || typeof i != "object" && typeof i != "function", ii = Array.isArray, us = (i) => ii(i) || typeof i?.[Symbol.iterator] == "function", Wt = `[ 	
\f\r]`, Ze = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ei = /-->/g, Gi = />/g, pe = RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Di = /'/g, Oi = /"/g, nr = /^(?:script|style|textarea|title)$/i, or = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), d = or(1), w = or(2), Te = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), Pi = /* @__PURE__ */ new WeakMap(), fe = xe.createTreeWalker(xe, 129);
function ar(i, e) {
  if (!ii(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Hi !== void 0 ? Hi.createHTML(e) : e;
}
const fs = (i, e) => {
  const t = i.length - 1, s = [];
  let r, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = Ze;
  for (let a = 0; a < t; a++) {
    const l = i[a];
    let c, p, u = -1, h = 0;
    for (; h < l.length && (o.lastIndex = h, p = o.exec(l), p !== null); ) h = o.lastIndex, o === Ze ? p[1] === "!--" ? o = Ei : p[1] !== void 0 ? o = Gi : p[2] !== void 0 ? (nr.test(p[2]) && (r = RegExp("</" + p[2], "g")), o = pe) : p[3] !== void 0 && (o = pe) : o === pe ? p[0] === ">" ? (o = r ?? Ze, u = -1) : p[1] === void 0 ? u = -2 : (u = o.lastIndex - p[2].length, c = p[1], o = p[3] === void 0 ? pe : p[3] === '"' ? Oi : Di) : o === Oi || o === Di ? o = pe : o === Ei || o === Gi ? o = Ze : (o = pe, r = void 0);
    const y = o === pe && i[a + 1].startsWith("/>") ? " " : "";
    n += o === Ze ? l + ps : u >= 0 ? (s.push(c), l.slice(0, u) + rr + l.slice(u) + J + y) : l + J + (u === -2 ? a : y);
  }
  return [ar(i, n + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
let Bt = class lr {
  constructor({ strings: e, _$litType$: t }, s) {
    let r;
    this.parts = [];
    let n = 0, o = 0;
    const a = e.length - 1, l = this.parts, [c, p] = fs(e, t);
    if (this.el = lr.createElement(c, s), fe.currentNode = this.el.content, t === 2 || t === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (r = fe.nextNode()) !== null && l.length < a; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const u of r.getAttributeNames()) if (u.endsWith(rr)) {
          const h = p[o++], y = r.getAttribute(u).split(J), v = /([.?@])?(.*)/.exec(h);
          l.push({ type: 1, index: n, name: v[2], strings: y, ctor: v[1] === "." ? ms : v[1] === "?" ? ys : v[1] === "@" ? xs : Lt }), r.removeAttribute(u);
        } else u.startsWith(J) && (l.push({ type: 6, index: n }), r.removeAttribute(u));
        if (nr.test(r.tagName)) {
          const u = r.textContent.split(J), h = u.length - 1;
          if (h > 0) {
            r.textContent = bt ? bt.emptyScript : "";
            for (let y = 0; y < h; y++) r.append(u[y], tt()), fe.nextNode(), l.push({ type: 2, index: ++n });
            r.append(u[h], tt());
          }
        }
      } else if (r.nodeType === 8) if (r.data === sr) l.push({ type: 2, index: n });
      else {
        let u = -1;
        for (; (u = r.data.indexOf(J, u + 1)) !== -1; ) l.push({ type: 7, index: n }), u += J.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const s = xe.createElement("template");
    return s.innerHTML = e, s;
  }
};
function Le(i, e, t = i, s) {
  if (e === Te) return e;
  let r = s !== void 0 ? t._$Co?.[s] : t._$Cl;
  const n = it(e) ? void 0 : e._$litDirective$;
  return r?.constructor !== n && (r?._$AO?.(!1), n === void 0 ? r = void 0 : (r = new n(i), r._$AT(i, t, s)), s !== void 0 ? (t._$Co ??= [])[s] = r : t._$Cl = r), r !== void 0 && (e = Le(i, r._$AS(i, e.values), r, s)), e;
}
let gs = class {
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
    const { el: { content: t }, parts: s } = this._$AD, r = (e?.creationScope ?? xe).importNode(t, !0);
    fe.currentNode = r;
    let n = fe.nextNode(), o = 0, a = 0, l = s[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let c;
        l.type === 2 ? c = new ri(n, n.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(n, l.name, l.strings, this, e) : l.type === 6 && (c = new ws(n, this, e)), this._$AV.push(c), l = s[++a];
      }
      o !== l?.index && (n = fe.nextNode(), o++);
    }
    return fe.currentNode = xe, r;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}, ri = class cr {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, s, r) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
    e = Le(this, e, t), it(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== Te && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : us(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && it(this._$AH) ? this._$AA.nextSibling.data = e : this.T(xe.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: s } = e, r = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = Bt.createElement(ar(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === r) this._$AH.p(t);
    else {
      const n = new gs(r, this), o = n.u(this.options);
      n.p(t), this.T(o), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = Pi.get(e.strings);
    return t === void 0 && Pi.set(e.strings, t = new Bt(e)), t;
  }
  k(e) {
    ii(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, r = 0;
    for (const n of e) r === t.length ? t.push(s = new cr(this.O(tt()), this.O(tt()), this, this.options)) : s = t[r], s._$AI(n), r++;
    r < t.length && (this._$AR(s && s._$AB.nextSibling, r), t.length = r);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}, Lt = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, r, n) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = T;
  }
  _$AI(e, t = this, s, r) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) e = Le(this, e, t, 0), o = !it(e) || e !== this._$AH && e !== Te, o && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = n[0], l = 0; l < n.length - 1; l++) c = Le(this, a[s + l], t, l), c === Te && (c = this._$AH[l]), o ||= !it(c) || c !== this._$AH[l], c === T ? e = T : e !== T && (e += (c ?? "") + n[l + 1]), this._$AH[l] = c;
    }
    o && !r && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, ms = class extends Lt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}, ys = class extends Lt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}, xs = class extends Lt {
  constructor(e, t, s, r, n) {
    super(e, t, s, r, n), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Le(this, e, t, 0) ?? T) === Te) return;
    const s = this._$AH, r = e === T && s !== T || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, n = e !== T && (s === T || r);
    r && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, ws = class {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Le(this, e);
  }
};
const bs = ti.litHtmlPolyfillSupport;
bs?.(Bt, ri), (ti.litHtmlVersions ??= []).push("3.3.1");
const _s = (i, e, t) => {
  const s = t?.renderBefore ?? e;
  let r = s._$litPart$;
  if (r === void 0) {
    const n = t?.renderBefore ?? null;
    s._$litPart$ = r = new ri(e.insertBefore(tt(), n), n, void 0, t ?? {});
  }
  return r._$AI(i), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const si = globalThis;
let N = class extends Se {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = _s(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return Te;
  }
};
N._$litElement$ = !0, N.finalized = !0, si.litElementHydrateSupport?.({ LitElement: N });
const vs = si.litElementPolyfillSupport;
vs?.({ LitElement: N });
(si.litElementVersions ??= []).push("4.2.1");
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
const $s = { attribute: !0, type: String, converter: wt, reflect: !1, hasChanged: ei }, ks = (i = $s, e, t) => {
  const { kind: s, metadata: r } = t;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), s === "setter" && ((i = Object.create(i)).wrapped = !0), n.set(t.name, i), s === "accessor") {
    const { name: o } = t;
    return { set(a) {
      const l = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(o, l, i);
    }, init(a) {
      return a !== void 0 && this.C(o, void 0, i, a), a;
    } };
  }
  if (s === "setter") {
    const { name: o } = t;
    return function(a) {
      const l = this[o];
      e.call(this, a), this.requestUpdate(o, l, i);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function m(i) {
  return (e, t) => typeof t == "object" ? ks(i, e, t) : ((s, r, n) => {
    const o = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, s), o ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(i, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function X(i) {
  return m({ ...i, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const As = (i, e, t) => (t.configurable = !0, t.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(i, e, t), t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Cs(i, e) {
  return (t, s, r) => {
    const n = (o) => o.renderRoot?.querySelector(i) ?? null;
    return As(t, s, { get() {
      return n(this);
    } });
  };
}
var dr = Object.defineProperty, Ss = Object.getOwnPropertyDescriptor, Ms = (i, e, t) => e in i ? dr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, W = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Ss(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && dr(e, t, r), r;
}, Ts = (i, e, t) => Ms(i, e + "", t);
let G = class extends N {
  forecast = [];
  forecastLoading = !1;
  show_forecast = !0;
  config = {};
  _t;
  getWeatherIcon;
  formatDate;
  compact = !1;
  startTomorrow = !1;
  maxDays = 7;
  alignRight = !1;
  render() {
    const i = /* @__PURE__ */ new Date();
    i.setHours(0, 0, 0, 0);
    let e = Array.isArray(this.forecast) ? [...this.forecast] : [];
    this.startTomorrow && e.length > 0 && (e = e.filter((r) => {
      try {
        const n = new Date(r.datetime ?? r.date ?? "");
        return isNaN(n.getTime()) ? !0 : (n.setHours(0, 0, 0, 0), n.getTime() > i.getTime());
      } catch {
        return !0;
      }
    })), typeof this.maxDays == "number" && this.maxDays > 0 && (e = e.slice(0, this.maxDays));
    const t = ["forecast-section", this.compact ? "compact" : ""].filter(Boolean).join(" "), s = ["forecast-grid", this.compact ? "compact" : ""].filter(Boolean).join(" ");
    return this.config.show_forecast !== !1 ? this.forecastLoading && this.forecast.length === 0 ? d`
            <div class="${t}">
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
          ` : e.length > 0 ? d`
              <div class="wrapper ${this.alignRight ? "align-right" : ""}">
                <div class="${t}">
                  ${this.compact ? d`` : d`
                        <div class="section-title">
                          <ha-icon icon="mdi:calendar"></ha-icon>
                          ${e.length === 7 ? this._t("7d_forecast") : this._t("xd_forecast", { days: e.length })}
                          <small
                            style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                          >
                            (${e.length} ${this._t("days_available")})
                          </small>
                        </div>
                      `}
                  <div class="${s}">
                    ${e.map(
      (r) => d`
                        <div class="forecast-day ${this.compact ? "compact" : ""}">
                          <div class="forecast-date ${this.compact ? "compact" : ""}">
                            ${this.formatDate(r.datetime ?? r.date)}
                          </div>
                          <div class="forecast-icon ${this.compact ? "compact" : ""}">
                            ${this.getWeatherIcon(
        r.condition,
        this.config.enable_animate_weather_icons ? "animated" : "mdi",
        this.compact ? "20px" : "24px",
        !0
      )}
                          </div>
                          <div class="forecast-temps ${this.compact ? "compact" : ""}">
                            <span class="temp-high">${Math.round(r.temperature)}°</span>
                            <span class="temp-low"
                              >${Math.round(
        r.templow ?? r.temperature - 5
      )}°</span
                            >
                          </div>
                        </div>
                      `
    )}
                  </div>
                </div>
              </div>
            ` : d`
              <div class="${t}">
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
Ts(G, "styles", D`
    .wrapper {
      display: block;
      width: 100%;
    }
    .wrapper.align-right {
      display: flex;
      justify-content: flex-end;
    }

    .forecast-section {
      margin-top: 20px;
    }
    .forecast-section.compact {
      margin-top: 8px;
      padding: 0;
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
    .forecast-grid.compact {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: stretch;
      gap: 8px;
      overflow: hidden; /* keep within BG card */
      padding: 0;
      margin: 0;
    }

    .forecast-day {
      background: var(--card-background-color, rgba(255, 255, 255, 0.6));
      border-radius: 10px;
      padding: 12px 8px;
      text-align: center;
      border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
    }
    .forecast-day.compact {
      border-radius: 8px;
      padding: 8px 6px;
      width: 64px;
      min-width: 64px;
      box-sizing: border-box;
    }

    .forecast-date {
      font-size: 12px;
      color: var(--secondary-text-color, #7f8c8d);
      margin-bottom: 8px;
    }
    .forecast-date.compact {
      font-size: 10px;
      margin-bottom: 4px;
    }

    .forecast-icon {
      font-size: 24px;
      margin: 8px 0;
    }
    .forecast-icon.compact {
      font-size: 18px;
      margin: 4px 0;
    }

    .forecast-temps {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .forecast-temps.compact {
      font-size: 11px;
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

    /* Extra compact on very small screens to keep margins */
    @media (max-width: 400px) {
      .forecast-grid.compact {
        gap: 6px;
      }
      .forecast-day.compact {
        width: 56px;
        min-width: 56px;
      }
      .forecast-icon.compact {
        font-size: 16px;
      }
      .forecast-temps.compact {
        font-size: 10px;
      }
    }
  `);
W([
  m({ type: Array })
], G.prototype, "forecast", 2);
W([
  m({ type: Boolean })
], G.prototype, "forecastLoading", 2);
W([
  m({ type: Boolean })
], G.prototype, "show_forecast", 2);
W([
  m({ type: Object })
], G.prototype, "config", 2);
W([
  m({ type: Function })
], G.prototype, "_t", 2);
W([
  m({ type: Function })
], G.prototype, "getWeatherIcon", 2);
W([
  m({ type: Function })
], G.prototype, "formatDate", 2);
W([
  m({ type: Boolean })
], G.prototype, "compact", 2);
W([
  m({ type: Boolean })
], G.prototype, "startTomorrow", 2);
W([
  m({ type: Number })
], G.prototype, "maxDays", 2);
W([
  m({ type: Boolean })
], G.prototype, "alignRight", 2);
G = W([
  O("daily-forecast-chart")
], G);
var hr = Object.defineProperty, Ls = Object.getOwnPropertyDescriptor, Ns = (i, e, t) => e in i ? hr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Ee = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Ls(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && hr(e, t, r), r;
}, zs = (i, e, t) => Ns(i, e + "", t);
let te = class extends N {
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
        (h) => typeof h.temperature == "number" && !isNaN(h.temperature) ? h.temperature : null
      ), e = i.filter((h) => h !== null);
      if (e.length < 2) return "";
      const t = Math.min(...e), r = Math.max(...e) - t || 1, n = i.length, o = Math.max(360, Math.min(1600, n * 250)), a = 50, l = o / (n - 1), c = i.map((h, y) => h !== null ? `${y * l},${a - (h - t) / r * a}` : "").filter(Boolean).join(" "), p = this.forecastHours === 6 ? "84%" : this.forecastHours - 6 + 84 + "%", u = this.forecastHours === 6 ? "8%" : (18 - this.forecastHours) * 0.5 + 2 + "%";
      return w`<svg width="${p}" height="${a}" viewBox="0 0 ${o} ${a}" preserveAspectRatio="none" style="display:block;padding-left:${u};">
                <polyline points="${c}" fill="none" stroke="#db4a34" stroke-width="3" />
                ${i.map((h, y) => h !== null ? w`<circle r="3" fill="#db4a34" cx="${y * l}" cy="${a - (h - t) / r * a}" />` : null)}
                </svg>`;
    })()}
        </div>
        ${this.showHoursChartLabel(this.forecastHours)}
      </div>
    `;
  }
};
zs(te, "styles", D`
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
Ee([
  m({ type: Array })
], te.prototype, "hourlyForecast", 2);
Ee([
  m({ type: Number })
], te.prototype, "forecastHours", 2);
Ee([
  m({ type: Boolean })
], te.prototype, "show_temperature", 2);
Ee([
  m({ type: Function })
], te.prototype, "_t", 2);
Ee([
  m({ type: Function })
], te.prototype, "showHoursChartLabel", 2);
te = Ee([
  O("forecast-temperature-chart")
], te);
var pr = Object.defineProperty, Hs = Object.getOwnPropertyDescriptor, Es = (i, e, t) => e in i ? pr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Ge = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Hs(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && pr(e, t, r), r;
}, Gs = (i, e, t) => Es(i, e + "", t);
let ie = class extends N {
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
      const e = typeof i.precipitation == "number" && !isNaN(i.precipitation) ? i.precipitation : null, t = e !== null ? Math.round(e) : 2, s = typeof i.precipitation_probability == "number" && !isNaN(i.precipitation_probability) ? i.precipitation_probability : null, r = s !== null ? Math.round(s % 10) : 2;
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
                  style="height: ${r}px; position:absolute; bottom:0; left:50%; transform:translateX(-50%); z-index:0; width:18px;"
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
Gs(ie, "styles", D`
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
Ge([
  m({ type: Array })
], ie.prototype, "hourlyForecast", 2);
Ge([
  m({ type: Number })
], ie.prototype, "forecastHours", 2);
Ge([
  m({ type: Boolean })
], ie.prototype, "show_precipitation", 2);
Ge([
  m({ type: Function })
], ie.prototype, "_t", 2);
Ge([
  m({ type: Function })
], ie.prototype, "showHoursChartLabel", 2);
ie = Ge([
  O("precipitation-chart")
], ie);
var ur = Object.defineProperty, Ds = Object.getOwnPropertyDescriptor, Os = (i, e, t) => e in i ? ur(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, oe = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Ds(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && ur(e, t, r), r;
}, Ps = (i, e, t) => Os(i, e + "", t);
let U = class extends N {
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
      let s = -1, r = -1;
      return i && t && (s = Math.round(
        (i.getTime() - t.getTime()) / (3600 * 1e3)
      )), e && t && (r = Math.round(
        (e.getTime() - t.getTime()) / (3600 * 1e3)
      )), d`
                    ${s >= 0 && s < this.forecastHours ? d`
                          <div
                            style="position:absolute;left:calc(${s / this.forecastHours * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
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
                    ${r >= 0 && r < this.forecastHours ? d`
                          <div
                            style="position:absolute;left:calc(${r / this.forecastHours * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
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
      const e = i, t = typeof e.sunshine == "number" && !isNaN(e.sunshine) ? e.sunshine : typeof e.sunshine_duration == "number" && !isNaN(e.sunshine_duration) ? e.sunshine_duration : null, s = t !== null ? Math.round(t) : 2;
      return d`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#fbc02d; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${t !== null ? t.toFixed(0) + " min" : ""}
                      </span>
                      <div class="chart-bar-sunshine" style="height: ${s}px;"></div>
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
Ps(U, "styles", D`
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
oe([
  m({ type: Array })
], U.prototype, "hourlyForecast", 2);
oe([
  m({ type: Number })
], U.prototype, "forecastHours", 2);
oe([
  m({ type: Boolean })
], U.prototype, "show_sunshine", 2);
oe([
  m({ type: Object })
], U.prototype, "weatherEntity", 2);
oe([
  m({ type: Object })
], U.prototype, "sun_entity", 2);
oe([
  m({ type: Function })
], U.prototype, "_t", 2);
oe([
  m({ type: Function })
], U.prototype, "showHoursChartLabel", 2);
U = oe([
  O("sunshine-chart")
], U);
var fr = Object.defineProperty, Ws = Object.getOwnPropertyDescriptor, Rs = (i, e, t) => e in i ? fr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, De = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Ws(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && fr(e, t, r), r;
}, Fs = (i, e, t) => Rs(i, e + "", t);
let re = class extends N {
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
        (h) => typeof h.wind_speed == "number" && !isNaN(h.wind_speed) ? h.wind_speed : null
      ), e = i.filter((h) => h !== null);
      if (e.length < 2) return "";
      const t = Math.min(...e), r = Math.max(...e) - t || 1, n = i.length, o = Math.max(360, Math.min(1600, n * 250)), a = 50, l = o / (n - 1), c = i.map((h, y) => h !== null ? `${y * l},${a - (h - t) / r * a}` : "").filter(Boolean).join(" "), p = this.forecastHours === 6 ? "84%" : this.forecastHours - 6 + 84 + "%", u = this.forecastHours === 6 ? "8%" : (18 - this.forecastHours) * 0.5 + 2 + "%";
      return w`<svg width="${p}" height="${a}" viewBox="0 0 ${o} ${a}" preserveAspectRatio="none" style="display:block;padding-left:${u};">
                <polyline points="${c}" fill="none" stroke="#44739e" stroke-width="3" />
                ${i.map((h, y) => h !== null ? w`<circle r="3" fill="#44739e" cx="${y * l}" cy="${a - (h - t) / r * a}" />` : null)}
              </svg>`;
    })()}
              </div>
              ${this.showHoursChartLabel(this.forecastHours)}
            </div>
          ` : d`` : d``;
  }
};
Fs(re, "styles", D`
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
De([
  m({ type: Array })
], re.prototype, "hourlyForecast", 2);
De([
  m({ type: Number })
], re.prototype, "forecastHours", 2);
De([
  m({ type: Boolean })
], re.prototype, "show_wind", 2);
De([
  m({ type: Function })
], re.prototype, "_t", 2);
De([
  m({ type: Function })
], re.prototype, "showHoursChartLabel", 2);
re = De([
  O("wind-chart")
], re);
var gr = Object.defineProperty, Us = Object.getOwnPropertyDescriptor, Bs = (i, e, t) => e in i ? gr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Oe = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Us(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && gr(e, t, r), r;
}, Is = (i, e, t) => Bs(i, e + "", t);
let se = class extends N {
  forecast = [];
  hourlyForecast = [];
  config;
  getWeatherIcon;
  standalone = !1;
  _resizeObserver;
  _measuredWidth = 0;
  // fallback function to get a CSS variable with a default value
  getCSSVariable(i, e = "50") {
    const t = getComputedStyle(document.documentElement).getPropertyValue(i).trim();
    return Number.parseInt(t || e);
  }
  connectedCallback() {
    super.connectedCallback(), this._resizeObserver = new ResizeObserver((i) => {
      for (const e of i) {
        const t = Math.floor(e.contentRect.width);
        t > 0 && t !== this._measuredWidth && (this._measuredWidth = t, this.requestUpdate());
      }
    }), this._resizeObserver.observe(this);
  }
  disconnectedCallback() {
    this._resizeObserver?.disconnect(), this._resizeObserver = void 0, super.disconnectedCallback();
  }
  render() {
    const i = this.forecast.slice(0, 7), e = this.hourlyForecast.slice(0, i.length * 24);
    if (!e.length) return d`<div>No hourly forecast available</div>`;
    const t = i.length, s = this.standalone && this.config.grid_options?.rows || 2, r = this.standalone ? s * this.getCSSVariable("--row-height", "56") : 200;
    let n = this._measuredWidth;
    if (!n) {
      const f = this.getBoundingClientRect?.();
      n = f?.width ? Math.floor(f.width) : 400;
    }
    const o = n, a = r, l = 16, c = a - l * 2, p = 0, u = 0, h = l + p, y = o - l - u, b = Math.max(0, y - h) / t, Y = Math.min(
      120,
      Math.max(80, c * 0.35)
    ), Be = Math.max(10, c * 0.05), Ie = c - Y - Be, ae = Math.min(b * 0.7, Y * 0.4), Ae = Math.max(9, Math.round(Y * 0.075)), le = Math.max(11, Math.round(Y * 0.11)), mi = this.config?.diagram_labels ?? "compact", yi = Math.max(8, Math.min(10, Math.round(Ie * 0.05))), xi = l + 10 + Ae, wi = xi + 10, jr = wi + ae + 10, bi = l + Y + Be, ce = b / 24, pt = e.map((f) => typeof f.temperature == "number" ? f.temperature : null), Vr = Math.min(...pt.filter((f) => f !== null)), qr = Math.max(...pt.filter((f) => f !== null)), K = bi, j = bi + Ie, Zr = e.map((f) => {
      const g = f;
      return typeof g.precipitation == "number" ? g.precipitation : typeof g.rain == "number" ? g.rain : 0;
    }), Xr = e.map((f) => {
      const g = f, _ = typeof g.precipitation_probability == "number" ? g.precipitation_probability : typeof g.probability_of_precipitation == "number" ? g.probability_of_precipitation : typeof g.pop == "number" ? g.pop <= 1 ? g.pop * 100 : g.pop : 0, $ = Number(_);
      return Number.isFinite($) ? Math.max(0, Math.min(100, $)) : 0;
    }), _i = {};
    i.forEach((f, g) => {
      const _ = new Date(f.datetime), $ = `${_.getFullYear()}-${_.getMonth()}-${_.getDate()}`;
      _i[$] = g;
    });
    function Yr(f) {
      const g = `${f.getFullYear()}-${f.getMonth()}-${f.getDate()}`, _ = _i[g], $ = f.getHours();
      return {
        dayIdx: _ !== void 0 ? _ : -1,
        hourInDay: $ >= 0 && $ < 24 ? $ : -1
      };
    }
    const je = {};
    for (let f = 0; f < t; f++)
      for (let g = 0; g < 24; g++) {
        const _ = `${f}-${g}`;
        je[_] = null;
      }
    e.forEach((f, g) => {
      if (f.datetime && pt[g] !== null) {
        const _ = new Date(f.datetime), { dayIdx: $, hourInDay: z } = Yr(_), V = `${$}-${z}`;
        $ >= 0 && $ < t && z >= 0 && z < 24 ? je[V] = {
          temp: pt[g],
          precip: Zr[g],
          precipProb: Xr[g],
          originalIndex: g
        } : console.warn(`Data point ${g} outside bounds:`, {
          dayIdx: $,
          hourInDay: z,
          nDays: t,
          dt: _.toISOString()
        });
      }
    });
    let de = Math.floor(Vr / 5) * 5, he = Math.ceil(qr / 5) * 5;
    de > 0 && (de = 0), he < 0 && (he = 0);
    const Ot = he - de, vi = [], Pt = [];
    for (let f = 0; f < t; f++)
      for (let g = 0; g < 24; g++) {
        const _ = `${f}-${g}`, $ = je[_];
        if ($ && $.temp !== null) {
          const z = h + f * b + g * ce + ce / 2, V = j - ($.temp - de) / Ot * (j - K);
          Pt.push(`${z},${V}`);
        }
      }
    Pt.length > 0 && vi.push(
      w`
          <!-- Main temperature line -->
          <polyline points="${Pt.join(" ")}" fill="none" stroke="#e74c3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        `
    );
    const Ce = Math.max(3, Math.floor(ce) - 2), $i = j, ki = 5 / Ot * (j - K) / 5;
    function Kr(f) {
      if (f <= 0) return "transparent";
      const g = [
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
      let _ = g[0], $ = g[g.length - 1];
      for (let R = 1; R < g.length; R++)
        if (f < g[R].val) {
          $ = g[R], _ = g[R - 1];
          break;
        }
      const z = (f - _.val) / ($.val - _.val), V = Math.round(_.color.r + ($.color.r - _.color.r) * z), Ve = Math.round(_.color.g + ($.color.g - _.color.g) * z), qe = Math.round(_.color.b + ($.color.b - _.color.b) * z);
      return `rgb(${V},${Ve},${qe})`;
    }
    const Qr = 5, Ai = [];
    for (let f = 0; f < t; f++)
      for (let g = 0; g < 24; g++) {
        const _ = `${f}-${g}`, $ = je[_];
        if ($ && $.precipProb > 0) {
          const z = h + f * b + g * ce + ce / 2 - Ce / 2, V = h + f * b, Ve = h + (f + 1) * b - Ce, qe = Math.max(V, Math.min(Ve, z)), R = $.precipProb / 100 * Qr * ki;
          Ai.push(
            w`<rect x="${qe}" y="${$i - R}" width="${Ce}" height="${R}" fill="#988d8dff" opacity="0.4" rx="1.5"/>`
          );
        }
      }
    const Ci = [];
    for (let f = 0; f < t; f++)
      for (let g = 0; g < 24; g++) {
        const _ = `${f}-${g}`, $ = je[_];
        if ($ && $.precip > 0) {
          const z = h + f * b + g * ce + ce / 2 - Ce / 2, V = h + f * b, Ve = h + (f + 1) * b - Ce, qe = Math.max(V, Math.min(Ve, z)), R = $.precip * ki, es = Kr($.precip);
          Ci.push(
            w`<rect x="${qe}" y="${$i - R}" width="${Ce}" height="${R}"
              fill="${es}" opacity="1" rx="1.5"/>`
          );
        }
      }
    const ut = [];
    if (e.length > 0)
      for (let f = 0; f <= t; f++) {
        const g = h + f * b;
        f === 0 ? ut.push(
          w`<line x1="${g}" y1="${K}" x2="${g}" y2="${j}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
        ) : f === t ? ut.push(
          w`<line x1="${g}" y1="${K}" x2="${g}" y2="${j}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
        ) : ut.push(
          w`<line x1="${g}" y1="${K}" x2="${g}" y2="${j}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
        );
      }
    const Si = [];
    if (t > 0)
      for (let f = 0; f < t; f++) {
        const g = h + f * b + b / 2, _ = typeof i[f].templow == "number" ? Math.round(i[f].templow || i[f].temperature - 5) : "", $ = typeof i[f].temperature == "number" ? Math.round(i[f].temperature) : "";
        Si.push(w`
        <g>
          <!-- Weekday -->
          <text x="${g}" y="${xi}" text-anchor="middle" font-size="${Ae}" class="weather-day">
            ${new Date(i[f].datetime).toLocaleDateString(void 0, { weekday: "short" })}
          </text>
          <!-- Icon -->
          <foreignObject x="${g - ae / 2}" y="${wi}" width="${ae}" height="${ae}">
              ${this.getWeatherIcon(i[f].condition || "", this.config.enable_animate_weather_icons ? "animated" : "mdiAsSVG", ae + "px", !0)}
          </foreignObject>
          <!-- Min/Max temp -->
          <text class="weather-temp" x="${g}" y="${jr}" text-anchor="middle" font-size="${le}">${_}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${$}°</tspan></text>
        </g>
      `);
      }
    const Mi = [], ft = /* @__PURE__ */ new Set();
    ft.add(de), de < 0 && he > 0 && ft.add(0), ft.add(he);
    for (let f = de; f <= he; f += 5)
      if (f % 5 === 0) {
        const g = K + (he - f) / Ot * (j - K);
        if (g >= K && g <= j) {
          const _ = f % 10 === 0;
          Mi.push(w`
            <line x1="${h}" y1="${g}" x2="${y}" y2="${g}"
              stroke="#ddd" stroke-width="${_ ? 1 : 0.5}"
              stroke-dasharray="${_ ? "none" : "2,2"}" opacity="0.6"/>
            ${mi === "none" ? w`` : mi === "full" ? _ ? w`<text x="${h + 4}" y="${g}" font-size="${yi}" fill="#888" opacity="0.9" text-anchor="start" dominant-baseline="middle">${f}°</text>` : w`` : ft.has(f) ? w`<text x="${h + 4}" y="${g}" font-size="${yi}" fill="#888" opacity="0.9" text-anchor="start" dominant-baseline="middle">${f}°</text>` : w``}
          `);
        }
      }
    const Jr = w``;
    return d`
      <style>
        .chart {
        ${this.standalone === !1 ? "background: var(--card-background-color, #fff);margin-top: 15px;" : ""}
          border-radius: 12px;
          padding: 0;
          border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
          overflow: hidden;
          position: relative; /* Enable absolute positioning for SVG overlay */
          width: 100%;
        }
        .chart svg {
          width: 100%;
          height: 100%;
        }
      </style>
      <div class="chart">
        <svg width="100%" height="100%" viewBox="0 0 ${o} ${a}" style="display:block;">
          <!-- Background grid lines (behind everything) -->
          ${Mi} ${ut}
          <!-- Day groups (labels and icons) -->
          ${Si}
          <!-- Precipitation bars -->
          ${Ai} ${Ci}
          <!-- Right-side labels for mm and % -->
          ${Jr}
        </svg>

        <!-- Temperature lines in completely separate SVG overlay (continuous line, always on top) -->
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 ${o} ${a}"
          style="display:block; position: absolute; top: 0; left: 0; pointer-events: none;"
        >
          ${vi}
        </svg>
      </div>
    `;
  }
};
Is(se, "styles", D`
    :host {
      display: block;
      width: 100%;
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
    .weather-temp {
      fill: var(--primary-text-color, #fff);
    }
    .weather-day {
      fill: var(--primary-text-color, #fff);
    }
  `);
Oe([
  m({ type: Array })
], se.prototype, "forecast", 2);
Oe([
  m({ type: Array })
], se.prototype, "hourlyForecast", 2);
Oe([
  m({ type: Object })
], se.prototype, "config", 2);
Oe([
  m({ type: Function })
], se.prototype, "getWeatherIcon", 2);
Oe([
  m({ type: Boolean })
], se.prototype, "standalone", 2);
se = Oe([
  O("daily-forecast-diagram")
], se);
const It = "langChanged";
function js(i, e, t) {
  return Object.entries(jt(e || {})).reduce((s, [r, n]) => s.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(jt(n))), i);
}
function Vs(i, e) {
  const t = i.split(".");
  let s = e.strings;
  for (; s != null && t.length > 0; )
    s = s[t.shift()];
  return s != null ? s.toString() : null;
}
function jt(i) {
  return typeof i == "function" ? i() : i;
}
const qs = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: Vs,
  interpolate: js,
  translationCache: {}
});
let rt = qs();
function Pe(i) {
  return rt = Object.assign(Object.assign({}, rt), i);
}
function Zs(i) {
  window.dispatchEvent(new CustomEvent(It, { detail: i }));
}
function Xs(i, e, t = rt) {
  Zs({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function Ys(i, e) {
  const t = (s) => i(s.detail);
  return window.addEventListener(It, t, e), () => window.removeEventListener(It, t);
}
async function lt(i, e = rt) {
  const t = await e.loader(i, e);
  e.translationCache = {}, Xs(i, t, e);
}
function x(i, e, t = rt) {
  let s = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? jt(e) : null, e != null ? t.interpolate(s, e, t) : s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mr = { CHILD: 2 }, Ks = (i) => (...e) => ({ _$litDirective$: i, values: e });
let yr = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, s) {
    this._$Ct = e, this._$AM = t, this._$Ci = s;
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
var Rt;
const _t = window, Ne = _t.trustedTypes, Wi = Ne ? Ne.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, Vt = "$lit$", ee = `lit$${(Math.random() + "").slice(9)}$`, xr = "?" + ee, Qs = `<${xr}>`, we = document, vt = () => we.createComment(""), st = (i) => i === null || typeof i != "object" && typeof i != "function", wr = Array.isArray, Js = (i) => wr(i) || typeof i?.[Symbol.iterator] == "function", Ft = `[ 	
\f\r]`, Xe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ri = /-->/g, Fi = />/g, ue = RegExp(`>|${Ft}(?:([^\\s"'>=/]+)(${Ft}*=${Ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ui = /'/g, Bi = /"/g, br = /^(?:script|style|textarea|title)$/i, ze = Symbol.for("lit-noChange"), S = Symbol.for("lit-nothing"), Ii = /* @__PURE__ */ new WeakMap(), ge = we.createTreeWalker(we, 129, null, !1);
function _r(i, e) {
  if (!Array.isArray(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Wi !== void 0 ? Wi.createHTML(e) : e;
}
const en = (i, e) => {
  const t = i.length - 1, s = [];
  let r, n = e === 2 ? "<svg>" : "", o = Xe;
  for (let a = 0; a < t; a++) {
    const l = i[a];
    let c, p, u = -1, h = 0;
    for (; h < l.length && (o.lastIndex = h, p = o.exec(l), p !== null); ) h = o.lastIndex, o === Xe ? p[1] === "!--" ? o = Ri : p[1] !== void 0 ? o = Fi : p[2] !== void 0 ? (br.test(p[2]) && (r = RegExp("</" + p[2], "g")), o = ue) : p[3] !== void 0 && (o = ue) : o === ue ? p[0] === ">" ? (o = r ?? Xe, u = -1) : p[1] === void 0 ? u = -2 : (u = o.lastIndex - p[2].length, c = p[1], o = p[3] === void 0 ? ue : p[3] === '"' ? Bi : Ui) : o === Bi || o === Ui ? o = ue : o === Ri || o === Fi ? o = Xe : (o = ue, r = void 0);
    const y = o === ue && i[a + 1].startsWith("/>") ? " " : "";
    n += o === Xe ? l + Qs : u >= 0 ? (s.push(c), l.slice(0, u) + Vt + l.slice(u) + ee + y) : l + ee + (u === -2 ? (s.push(void 0), a) : y);
  }
  return [_r(i, n + (i[t] || "<?>") + (e === 2 ? "</svg>" : "")), s];
};
let qt = class vr {
  constructor({ strings: e, _$litType$: t }, s) {
    let r;
    this.parts = [];
    let n = 0, o = 0;
    const a = e.length - 1, l = this.parts, [c, p] = en(e, t);
    if (this.el = vr.createElement(c, s), ge.currentNode = this.el.content, t === 2) {
      const u = this.el.content, h = u.firstChild;
      h.remove(), u.append(...h.childNodes);
    }
    for (; (r = ge.nextNode()) !== null && l.length < a; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) {
          const u = [];
          for (const h of r.getAttributeNames()) if (h.endsWith(Vt) || h.startsWith(ee)) {
            const y = p[o++];
            if (u.push(h), y !== void 0) {
              const v = r.getAttribute(y.toLowerCase() + Vt).split(ee), b = /([.?@])?(.*)/.exec(y);
              l.push({ type: 1, index: n, name: b[2], strings: v, ctor: b[1] === "." ? rn : b[1] === "?" ? nn : b[1] === "@" ? on : Nt });
            } else l.push({ type: 6, index: n });
          }
          for (const h of u) r.removeAttribute(h);
        }
        if (br.test(r.tagName)) {
          const u = r.textContent.split(ee), h = u.length - 1;
          if (h > 0) {
            r.textContent = Ne ? Ne.emptyScript : "";
            for (let y = 0; y < h; y++) r.append(u[y], vt()), ge.nextNode(), l.push({ type: 2, index: ++n });
            r.append(u[h], vt());
          }
        }
      } else if (r.nodeType === 8) if (r.data === xr) l.push({ type: 2, index: n });
      else {
        let u = -1;
        for (; (u = r.data.indexOf(ee, u + 1)) !== -1; ) l.push({ type: 7, index: n }), u += ee.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const s = we.createElement("template");
    return s.innerHTML = e, s;
  }
};
function He(i, e, t = i, s) {
  var r, n, o, a;
  if (e === ze) return e;
  let l = s !== void 0 ? (r = t._$Co) === null || r === void 0 ? void 0 : r[s] : t._$Cl;
  const c = st(e) ? void 0 : e._$litDirective$;
  return l?.constructor !== c && ((n = l?._$AO) === null || n === void 0 || n.call(l, !1), c === void 0 ? l = void 0 : (l = new c(i), l._$AT(i, t, s)), s !== void 0 ? ((o = (a = t)._$Co) !== null && o !== void 0 ? o : a._$Co = [])[s] = l : t._$Cl = l), l !== void 0 && (e = He(i, l._$AS(i, e.values), l, s)), e;
}
let tn = class {
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
    const { el: { content: s }, parts: r } = this._$AD, n = ((t = e?.creationScope) !== null && t !== void 0 ? t : we).importNode(s, !0);
    ge.currentNode = n;
    let o = ge.nextNode(), a = 0, l = 0, c = r[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let p;
        c.type === 2 ? p = new $r(o, o.nextSibling, this, e) : c.type === 1 ? p = new c.ctor(o, c.name, c.strings, this, e) : c.type === 6 && (p = new an(o, this, e)), this._$AV.push(p), c = r[++l];
      }
      a !== c?.index && (o = ge.nextNode(), a++);
    }
    return ge.currentNode = we, n;
  }
  v(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}, $r = class kr {
  constructor(e, t, s, r) {
    var n;
    this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = r, this._$Cp = (n = r?.isConnected) === null || n === void 0 || n;
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
    e = He(this, e, t), st(e) ? e === S || e == null || e === "" ? (this._$AH !== S && this._$AR(), this._$AH = S) : e !== this._$AH && e !== ze && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : Js(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== S && st(this._$AH) ? this._$AA.nextSibling.data = e : this.$(we.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var t;
    const { values: s, _$litType$: r } = e, n = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = qt.createElement(_r(r.h, r.h[0]), this.options)), r);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === n) this._$AH.v(s);
    else {
      const o = new tn(n, this), a = o.u(this.options);
      o.v(s), this.$(a), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = Ii.get(e.strings);
    return t === void 0 && Ii.set(e.strings, t = new qt(e)), t;
  }
  T(e) {
    wr(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, r = 0;
    for (const n of e) r === t.length ? t.push(s = new kr(this.k(vt()), this.k(vt()), this, this.options)) : s = t[r], s._$AI(n), r++;
    r < t.length && (this._$AR(s && s._$AB.nextSibling, r), t.length = r);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const r = e.nextSibling;
      e.remove(), e = r;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cp = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
};
class Nt {
  constructor(e, t, s, r, n) {
    this.type = 1, this._$AH = S, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = S;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, s, r) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) e = He(this, e, t, 0), o = !st(e) || e !== this._$AH && e !== ze, o && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = n[0], l = 0; l < n.length - 1; l++) c = He(this, a[s + l], t, l), c === ze && (c = this._$AH[l]), o || (o = !st(c) || c !== this._$AH[l]), c === S ? e = S : e !== S && (e += (c ?? "") + n[l + 1]), this._$AH[l] = c;
    }
    o && !r && this.j(e);
  }
  j(e) {
    e === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
let rn = class extends Nt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === S ? void 0 : e;
  }
};
const sn = Ne ? Ne.emptyScript : "";
let nn = class extends Nt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== S ? this.element.setAttribute(this.name, sn) : this.element.removeAttribute(this.name);
  }
}, on = class extends Nt {
  constructor(e, t, s, r, n) {
    super(e, t, s, r, n), this.type = 5;
  }
  _$AI(e, t = this) {
    var s;
    if ((e = (s = He(this, e, t, 0)) !== null && s !== void 0 ? s : S) === ze) return;
    const r = this._$AH, n = e === S && r !== S || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, o = e !== S && (r === S || n);
    n && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && s !== void 0 ? s : this.element, e) : this._$AH.handleEvent(e);
  }
};
class an {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    He(this, e);
  }
}
const ji = _t.litHtmlPolyfillSupport;
ji?.(qt, $r), ((Rt = _t.litHtmlVersions) !== null && Rt !== void 0 ? Rt : _t.litHtmlVersions = []).push("2.8.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ln = (i) => i.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Je = (i, e) => {
  var t, s;
  const r = i._$AN;
  if (r === void 0) return !1;
  for (const n of r) (s = (t = n)._$AO) === null || s === void 0 || s.call(t, e, !1), Je(n, e);
  return !0;
}, $t = (i) => {
  let e, t;
  do {
    if ((e = i._$AM) === void 0) break;
    t = e._$AN, t.delete(i), i = e;
  } while (t?.size === 0);
}, Ar = (i) => {
  for (let e; e = i._$AM; i = e) {
    let t = e._$AN;
    if (t === void 0) e._$AN = t = /* @__PURE__ */ new Set();
    else if (t.has(i)) break;
    t.add(i), hn(e);
  }
};
function cn(i) {
  this._$AN !== void 0 ? ($t(this), this._$AM = i, Ar(this)) : this._$AM = i;
}
function dn(i, e = !1, t = 0) {
  const s = this._$AH, r = this._$AN;
  if (r !== void 0 && r.size !== 0) if (e) if (Array.isArray(s)) for (let n = t; n < s.length; n++) Je(s[n], !1), $t(s[n]);
  else s != null && (Je(s, !1), $t(s));
  else Je(this, i);
}
const hn = (i) => {
  var e, t, s, r;
  i.type == mr.CHILD && ((e = (s = i)._$AP) !== null && e !== void 0 || (s._$AP = dn), (t = (r = i)._$AQ) !== null && t !== void 0 || (r._$AQ = cn));
};
class pn extends yr {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, t, s) {
    super._$AT(e, t, s), Ar(this), this.isConnected = e._$AU;
  }
  _$AO(e, t = !0) {
    var s, r;
    e !== this.isConnected && (this.isConnected = e, e ? (s = this.reconnected) === null || s === void 0 || s.call(this) : (r = this.disconnected) === null || r === void 0 || r.call(this)), t && (Je(this, e), $t(this));
  }
  setValue(e) {
    if (ln(this._$Ct)) this._$Ct._$AI(e, this);
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
class un extends pn {
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
    this.langChangedSubscription == null && (this.langChangedSubscription = Ys(this.langChanged.bind(this)));
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
class fn extends un {
  render(e, t, s) {
    return this.renderValue(() => x(e, t, s));
  }
}
const k = Ks(fn);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Vi extends yr {
  constructor(e) {
    if (super(e), this.et = S, e.type !== mr.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === S || e == null) return this.ft = void 0, this.et = e;
    if (e === ze) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.et) return this.ft;
    this.et = e;
    const t = [e];
    return t.raw = t, this.ft = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
Vi.directiveName = "unsafeHTML", Vi.resultType = 1;
var qi, Zi;
(function(i) {
  i.language = "language", i.system = "system", i.comma_decimal = "comma_decimal", i.decimal_comma = "decimal_comma", i.space_comma = "space_comma", i.none = "none";
})(qi || (qi = {})), (function(i) {
  i.language = "language", i.system = "system", i.am_pm = "12", i.twenty_four = "24";
})(Zi || (Zi = {}));
var kt = function(i, e, t, s) {
  s = s || {}, t = t ?? {};
  var r = new Event(e, { bubbles: s.bubbles === void 0 || s.bubbles, cancelable: !!s.cancelable, composed: s.composed === void 0 || s.composed });
  return r.detail = t, i.dispatchEvent(r), r;
};
const We = {
  de: {
    config: {
      temperature_font_size: "Temperatur Schriftgröße (px)",
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
      forecast_mode: "Vorhersage-Modus",
      show_temperature: "Temperaturdiagramm anzeigen",
      show_precipitation: "Niederschlagsdiagramm anzeigen",
      show_sunshine: "Sonnenscheindauerdiagramm anzeigen",
      show_warnings: "Wetterwarnungen anzeigen",
      show_wind: "Winddiagramm anzeigen",
      show_day_temps: "Tages-Min/Max anzeigen",
      show_sun_times: "Sonnenauf-/untergang anzeigen",
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
        show_forecast: "Die Vorhersage unter dem Hintergrund kann optional ein- oder ausgeschaltet werden.",
        sunshine_entity: "Die Sonnenscheindauer-Entity wird benötigt, um die Sonnenscheindauer anzuzeigen.",
        wind_entity: "Die Wind-Entity wird benötigt, um die Windgeschwindigkeit anzuzeigen.",
        wind_direction_entity: "Die Windrichtungs-Entity wird benötigt, um die Windrichtung anzuzeigen.",
        warning_entity: "Die Wetterwarnungen Entity wird von SiwssWeather angelegt und kann hier verwendet werden. Sollte sie nicht gesetzt sein, werden keine Wetterwarnungen angezeigt.",
        precipitation_entity: "Die Niederschlags-Entity wird benötigt, um die Niederschlagsprognose anzuzeigen.",
        show_forecast: "Die Wettervorhersage zeigt die Vorhersage mit maximal 7 Tagen an, je nach dem, was der Wetterdienst liefert.",
        forecast_mode: "Wähle, ob in der BG-Card die Tages- oder Stunden-Vorhersage (oder keine) angezeigt wird.",
        show_temperature: "Zeige das Temperaturdiagramm an, mit den Vorhersage anhand der eingestellten Stunden",
        show_precipitation: "Zeige das Niederschlags an, mit den Vorhersage anhand der eingestellten Stunden",
        show_sunshine: "Zeige das Sonnenscheindauerdiagramm an, mit den Vorhersage anhand der eingestellten Stunden",
        show_wind: "Zeige das Winddiagramm anm it den Vorhersage anhand der eingestellten Stunden",
        show_day_temps: "Blende die Tages-Min/Max-Anzeige ein oder aus.",
        show_sun_times: "Blende die Anzeige von Sonnenaufgang/-untergang ein oder aus.",
        show_warnings: "Zeige Wetterwarnungen an, wenn die Wetterwarnung Entity gesetzt ist und aktuelle Warnungen existieren.",
        enable_animate_weather_icons: "Zeige animierte Icons an. Wenn ausgeschaltet, werden statische Icons angezeigt.",
        compact_mode: "Im kompakten Modus werden weniger Details angezeigt für die Tagesvorhersage und den aktuellen Daten (z.B. Windrichtung)",
        forecast_hours: "Anzahl der Stunden für die Anzeige der stündlichen Vorhersage (Standard: 6, maximal 18)",
        show_location: "Zeige den Standortnamen über dem aktuellen Wetter an",
        location: "Zeigt diesen Namen als Standort an.",
        temperature_font_size: "Schriftgröße der Temperaturanzeige in Pixel. Standard: 36"
      }
    },
    forecast_mode: {
      daily: "Täglich",
      hourly: "Stündlich",
      none: "Keine"
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
      temperature_font_size: "Temperature font size (px)",
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
      forecast_mode: "Forecast Mode",
      show_temperature: "Show Temperature Chart",
      show_precipitation: "Show Precipitation Chart",
      show_sunshine: "Show Sunshine Duration Chart",
      show_warnings: "Show Weather Warnings",
      show_wind: "Show Wind Chart",
      show_day_temps: "Show Day Min/Max",
      show_sun_times: "Show Sunrise/Sunset",
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
        show_forecast: "You can optionally enable or disable the forecast section below the animated background.",
        sunshine_entity: "The sunshine entity is required to display sunshine duration.",
        wind_entity: "The wind entity is required to display wind speed.",
        wind_direction_entity: "The wind direction entity is required to display wind direction.",
        warning_entity: "The weather warnings entity is created by SwissWeather and can be used here. If it is not set, no weather warnings will be displayed.",
        precipitation_entity: "The precipitation entity is required to display the precipitation forecast.",
        show_forecast: "The weather forecast displays the forecast with up to 7 days, depending on what the weather service provides.",
        forecast_mode: "Choose whether the BG card shows the daily or hourly forecast (or none).",
        show_temperature: "Show the temperature chart with the forecast based on the set hours",
        show_precipitation: "Show the precipitation chart with the forecast based on the set hours",
        show_sunshine: "Show the sunshine duration chart with the forecast based on the set hours",
        show_wind: "Show the wind chart with the forecast based on the set hours",
        show_day_temps: "Toggle the per-day min/max display on or off.",
        show_sun_times: "Toggle the sunrise/sunset display on or off.",
        show_warnings: "Show weather warnings if the weather warning entity is set and the actul warning exists.",
        enable_animate_weather_icons: "Show animated icons. If disabled, static icons are displayed.",
        compact_mode: "In compact mode, fewer details are displayed for the daily forecast and current data (e.g. wind direction)",
        forecast_hours: "Number of hours to show in the hourly forecast (default: 6, maximum 18)",
        show_location: "Show the location name above the current weather",
        location: "Displays this name as location.",
        temperature_font_size: "Font size for the temperature label in pixels. Default: 36"
      }
    },
    forecast_mode: {
      daily: "Daily",
      hourly: "Hourly",
      none: "None"
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
}, ni = "swissweather", ct = `${ni}-card`, Cr = `${ct}-editor`, M = [
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
var gn = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, zt = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? mn(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && gn(e, t, r), r;
};
Pe({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => We[i]
});
let nt = class extends N {
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
    for (const s of t)
      e[s] === "" && delete e[s];
    this._config = e, this.requestUpdate();
  }
  static get styles() {
    return D`
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
    ], e = Array.isArray(this._config?.chart_order) ? this._config.chart_order : i.map((s) => s.key);
    if (!this.hass)
      return d`<div>Loading...</div>`;
    lt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
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
            <div class="header-title">🌦️ SwissWeather Full Card</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${x("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[
      M.find((s) => s.name === "entity"),
      M.find((s) => s.name === "location"),
      M.find((s) => s.name === "show_location")
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
      M.find((s) => s.name === "warning_entity"),
      M.find((s) => s.name === "precipitation_entity"),
      M.find((s) => s.name === "sun_entity"),
      M.find((s) => s.name === "sunshine_entity"),
      M.find((s) => s.name === "wind_entity"),
      M.find((s) => s.name === "wind_direction_entity")
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
      M.find((s) => s.name === "forecast_hours"),
      M.find((s) => s.name === "show_forecast"),
      M.find((s) => s.name === "show_precipitation"),
      M.find((s) => s.name === "show_temperature"),
      M.find((s) => s.name === "show_sunshine"),
      M.find((s) => s.name === "show_wind"),
      M.find((s) => s.name === "enable_animate_weather_icons"),
      M.find((s) => s.name === "show_warnings"),
      M.find((s) => s.name === "compact_mode")
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
            ${e.map((s, r) => {
      const n = i.find((o) => o.key === s);
      return d` <li style="display:flex;align-items:center;margin-bottom:6px;">
                <span style="flex:1;">${n?.label || s}</span>
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
    const t = Array.isArray(this._config.chart_order) ? [...this._config.chart_order] : ["temperature", "precipitation", "sunshine", "wind", "forecast"], s = i + e;
    if (s < 0 || s >= t.length) return;
    const r = t[i];
    t[i] = t[s], t[s] = r, this._config = { ...this._config, chart_order: t }, kt(this, "config-changed", { config: this._config }), this.requestUpdate();
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
      type: ct,
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
      const { ...t } = i.detail.value || {}, s = {
        ...this._config,
        ...t,
        ...e,
        type: "custom:swissweather-card"
      };
      Object.keys(s).forEach((r) => {
        (s[r] === "" || s[r] === void 0) && delete s[r];
      }), this._config = s, kt(this, "config-changed", { config: this._config });
    }
  }
};
zt([
  m({ attribute: !1 })
], nt.prototype, "hass", 2);
zt([
  m({ attribute: !1 })
], nt.prototype, "lovelace", 2);
zt([
  m({ attribute: !1 })
], nt.prototype, "_config", 2);
nt = zt([
  O(Cr)
], nt);
function gt(i, e, t) {
  const s = /* @__PURE__ */ new Date();
  return d`
    <div class="chart-labels">
      ${Array.from({ length: i }, (r, n) => {
    const a = new Date(s.getTime() + n * 60 * 60 * 1e3).toLocaleTimeString([], { hour: "2-digit" });
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
function Sr(i) {
  const e = new Date(i);
  return ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"][e.getDay()];
}
function oi() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var $e = oi();
function Mr(i) {
  $e = i;
}
var et = { exec: () => null };
function A(i, e = "") {
  let t = typeof i == "string" ? i : i.source, s = { replace: (r, n) => {
    let o = typeof n == "string" ? n : n.source;
    return o = o.replace(E.caret, "$1"), t = t.replace(r, o), s;
  }, getRegex: () => new RegExp(t, e) };
  return s;
}
var E = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (i) => new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}#`), htmlBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}<(?:[a-z].*>|!--)`, "i") }, yn = /^(?:[ \t]*(?:\n|$))+/, xn = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, wn = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, dt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, bn = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ai = /(?:[*+-]|\d{1,9}[.)])/, Tr = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Lr = A(Tr).replace(/bull/g, ai).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), _n = A(Tr).replace(/bull/g, ai).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), li = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, vn = /^[^\n]+/, ci = /(?!\s*\])(?:\\.|[^\[\]\\])+/, $n = A(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ci).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), kn = A(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ai).getRegex(), Ht = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", di = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, An = A("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", di).replace("tag", Ht).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Nr = A(li).replace("hr", dt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ht).getRegex(), Cn = A(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Nr).getRegex(), hi = { blockquote: Cn, code: xn, def: $n, fences: wn, heading: bn, hr: dt, html: An, lheading: Lr, list: kn, newline: yn, paragraph: Nr, table: et, text: vn }, Xi = A("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", dt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ht).getRegex(), Sn = { ...hi, lheading: _n, table: Xi, paragraph: A(li).replace("hr", dt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Xi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ht).getRegex() }, Mn = { ...hi, html: A(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", di).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: et, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: A(li).replace("hr", dt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Lr).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Tn = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ln = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, zr = /^( {2,}|\\)\n(?!\s*$)/, Nn = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Et = /[\p{P}\p{S}]/u, pi = /[\s\p{P}\p{S}]/u, Hr = /[^\s\p{P}\p{S}]/u, zn = A(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, pi).getRegex(), Er = /(?!~)[\p{P}\p{S}]/u, Hn = /(?!~)[\s\p{P}\p{S}]/u, En = /(?:[^\s\p{P}\p{S}]|~)/u, Gn = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, Gr = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Dn = A(Gr, "u").replace(/punct/g, Et).getRegex(), On = A(Gr, "u").replace(/punct/g, Er).getRegex(), Dr = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Pn = A(Dr, "gu").replace(/notPunctSpace/g, Hr).replace(/punctSpace/g, pi).replace(/punct/g, Et).getRegex(), Wn = A(Dr, "gu").replace(/notPunctSpace/g, En).replace(/punctSpace/g, Hn).replace(/punct/g, Er).getRegex(), Rn = A("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Hr).replace(/punctSpace/g, pi).replace(/punct/g, Et).getRegex(), Fn = A(/\\(punct)/, "gu").replace(/punct/g, Et).getRegex(), Un = A(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Bn = A(di).replace("(?:-->|$)", "-->").getRegex(), In = A("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Bn).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), At = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, jn = A(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", At).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Or = A(/^!?\[(label)\]\[(ref)\]/).replace("label", At).replace("ref", ci).getRegex(), Pr = A(/^!?\[(ref)\](?:\[\])?/).replace("ref", ci).getRegex(), Vn = A("reflink|nolink(?!\\()", "g").replace("reflink", Or).replace("nolink", Pr).getRegex(), ui = { _backpedal: et, anyPunctuation: Fn, autolink: Un, blockSkip: Gn, br: zr, code: Ln, del: et, emStrongLDelim: Dn, emStrongRDelimAst: Pn, emStrongRDelimUnd: Rn, escape: Tn, link: jn, nolink: Pr, punctuation: zn, reflink: Or, reflinkSearch: Vn, tag: In, text: Nn, url: et }, qn = { ...ui, link: A(/^!?\[(label)\]\((.*?)\)/).replace("label", At).getRegex(), reflink: A(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", At).getRegex() }, Zt = { ...ui, emStrongRDelimAst: Wn, emStrongLDelim: On, url: A(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, Zn = { ...Zt, br: A(zr).replace("{2,}", "*").getRegex(), text: A(Zt.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, mt = { normal: hi, gfm: Sn, pedantic: Mn }, Ye = { normal: ui, gfm: Zt, breaks: Zn, pedantic: qn }, Xn = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Yi = (i) => Xn[i];
function F(i, e) {
  if (e) {
    if (E.escapeTest.test(i)) return i.replace(E.escapeReplace, Yi);
  } else if (E.escapeTestNoEncode.test(i)) return i.replace(E.escapeReplaceNoEncode, Yi);
  return i;
}
function Ki(i) {
  try {
    i = encodeURI(i).replace(E.percentDecode, "%");
  } catch {
    return null;
  }
  return i;
}
function Qi(i, e) {
  let t = i.replace(E.findPipe, (n, o, a) => {
    let l = !1, c = o;
    for (; --c >= 0 && a[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), s = t.split(E.splitPipe), r = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e) if (s.length > e) s.splice(e);
  else for (; s.length < e; ) s.push("");
  for (; r < s.length; r++) s[r] = s[r].trim().replace(E.slashPipe, "|");
  return s;
}
function Ke(i, e, t) {
  let s = i.length;
  if (s === 0) return "";
  let r = 0;
  for (; r < s && i.charAt(s - r - 1) === e; )
    r++;
  return i.slice(0, s - r);
}
function Yn(i, e) {
  if (i.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let s = 0; s < i.length; s++) if (i[s] === "\\") s++;
  else if (i[s] === e[0]) t++;
  else if (i[s] === e[1] && (t--, t < 0)) return s;
  return t > 0 ? -2 : -1;
}
function Ji(i, e, t, s, r) {
  let n = e.href, o = e.title || null, a = i[1].replace(r.other.outputLinkReplace, "$1");
  s.state.inLink = !0;
  let l = { type: i[0].charAt(0) === "!" ? "image" : "link", raw: t, href: n, title: o, text: a, tokens: s.inlineTokens(a) };
  return s.state.inLink = !1, l;
}
function Kn(i, e, t) {
  let s = i.match(t.other.indentCodeCompensation);
  if (s === null) return e;
  let r = s[1];
  return e.split(`
`).map((n) => {
    let o = n.match(t.other.beginningSpace);
    if (o === null) return n;
    let [a] = o;
    return a.length >= r.length ? n.slice(r.length) : n;
  }).join(`
`);
}
var Ct = class {
  options;
  rules;
  lexer;
  constructor(i) {
    this.options = i || $e;
  }
  space(i) {
    let e = this.rules.block.newline.exec(i);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(i) {
    let e = this.rules.block.code.exec(i);
    if (e) {
      let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : Ke(t, `
`) };
    }
  }
  fences(i) {
    let e = this.rules.block.fences.exec(i);
    if (e) {
      let t = e[0], s = Kn(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: s };
    }
  }
  heading(i) {
    let e = this.rules.block.heading.exec(i);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let s = Ke(t, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (t = s.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(i) {
    let e = this.rules.block.hr.exec(i);
    if (e) return { type: "hr", raw: Ke(e[0], `
`) };
  }
  blockquote(i) {
    let e = this.rules.block.blockquote.exec(i);
    if (e) {
      let t = Ke(e[0], `
`).split(`
`), s = "", r = "", n = [];
      for (; t.length > 0; ) {
        let o = !1, a = [], l;
        for (l = 0; l < t.length; l++) if (this.rules.other.blockquoteStart.test(t[l])) a.push(t[l]), o = !0;
        else if (!o) a.push(t[l]);
        else break;
        t = t.slice(l);
        let c = a.join(`
`), p = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${c}` : c, r = r ? `${r}
${p}` : p;
        let u = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(p, n, !0), this.lexer.state.top = u, t.length === 0) break;
        let h = n.at(-1);
        if (h?.type === "code") break;
        if (h?.type === "blockquote") {
          let y = h, v = y.raw + `
` + t.join(`
`), b = this.blockquote(v);
          n[n.length - 1] = b, s = s.substring(0, s.length - y.raw.length) + b.raw, r = r.substring(0, r.length - y.text.length) + b.text;
          break;
        } else if (h?.type === "list") {
          let y = h, v = y.raw + `
` + t.join(`
`), b = this.list(v);
          n[n.length - 1] = b, s = s.substring(0, s.length - h.raw.length) + b.raw, r = r.substring(0, r.length - y.raw.length) + b.raw, t = v.substring(n.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: n, text: r };
    }
  }
  list(i) {
    let e = this.rules.block.list.exec(i);
    if (e) {
      let t = e[1].trim(), s = t.length > 1, r = { type: "list", raw: "", ordered: s, start: s ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = s ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = s ? t : "[*+-]");
      let n = this.rules.other.listItemRegex(t), o = !1;
      for (; i; ) {
        let l = !1, c = "", p = "";
        if (!(e = n.exec(i)) || this.rules.block.hr.test(i)) break;
        c = e[0], i = i.substring(c.length);
        let u = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (ht) => " ".repeat(3 * ht.length)), h = i.split(`
`, 1)[0], y = !u.trim(), v = 0;
        if (this.options.pedantic ? (v = 2, p = u.trimStart()) : y ? v = e[1].length + 1 : (v = e[2].search(this.rules.other.nonSpaceChar), v = v > 4 ? 1 : v, p = u.slice(v), v += e[1].length), y && this.rules.other.blankLine.test(h) && (c += h + `
`, i = i.substring(h.length + 1), l = !0), !l) {
          let ht = this.rules.other.nextBulletRegex(v), Y = this.rules.other.hrRegex(v), Be = this.rules.other.fencesBeginRegex(v), Ie = this.rules.other.headingBeginRegex(v), ae = this.rules.other.htmlBeginRegex(v);
          for (; i; ) {
            let Ae = i.split(`
`, 1)[0], le;
            if (h = Ae, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), le = h) : le = h.replace(this.rules.other.tabCharGlobal, "    "), Be.test(h) || Ie.test(h) || ae.test(h) || ht.test(h) || Y.test(h)) break;
            if (le.search(this.rules.other.nonSpaceChar) >= v || !h.trim()) p += `
` + le.slice(v);
            else {
              if (y || u.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || Be.test(u) || Ie.test(u) || Y.test(u)) break;
              p += `
` + h;
            }
            !y && !h.trim() && (y = !0), c += Ae + `
`, i = i.substring(Ae.length + 1), u = le.slice(v);
          }
        }
        r.loose || (o ? r.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (o = !0));
        let b = null, Ue;
        this.options.gfm && (b = this.rules.other.listIsTask.exec(p), b && (Ue = b[0] !== "[ ] ", p = p.replace(this.rules.other.listReplaceTask, ""))), r.items.push({ type: "list_item", raw: c, task: !!b, checked: Ue, loose: !1, text: p, tokens: [] }), r.raw += c;
      }
      let a = r.items.at(-1);
      if (a) a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else return;
      r.raw = r.raw.trimEnd();
      for (let l = 0; l < r.items.length; l++) if (this.lexer.state.top = !1, r.items[l].tokens = this.lexer.blockTokens(r.items[l].text, []), !r.loose) {
        let c = r.items[l].tokens.filter((u) => u.type === "space"), p = c.length > 0 && c.some((u) => this.rules.other.anyLine.test(u.raw));
        r.loose = p;
      }
      if (r.loose) for (let l = 0; l < r.items.length; l++) r.items[l].loose = !0;
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
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: s, title: r };
    }
  }
  table(i) {
    let e = this.rules.block.table.exec(i);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = Qi(e[1]), s = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], n = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === s.length) {
      for (let o of s) this.rules.other.tableAlignRight.test(o) ? n.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? n.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? n.align.push("left") : n.align.push(null);
      for (let o = 0; o < t.length; o++) n.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: !0, align: n.align[o] });
      for (let o of r) n.rows.push(Qi(o, n.header.length).map((a, l) => ({ text: a, tokens: this.lexer.inline(a), header: !1, align: n.align[l] })));
      return n;
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
        let n = Ke(t.slice(0, -1), "\\");
        if ((t.length - n.length) % 2 === 0) return;
      } else {
        let n = Yn(e[2], "()");
        if (n === -2) return;
        if (n > -1) {
          let o = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + n;
          e[2] = e[2].substring(0, n), e[0] = e[0].substring(0, o).trim(), e[3] = "";
        }
      }
      let s = e[2], r = "";
      if (this.options.pedantic) {
        let n = this.rules.other.pedanticHrefTitle.exec(s);
        n && (s = n[1], r = n[3]);
      } else r = e[3] ? e[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? s = s.slice(1) : s = s.slice(1, -1)), Ji(e, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: r && r.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(i, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(i)) || (t = this.rules.inline.nolink.exec(i))) {
      let s = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = e[s.toLowerCase()];
      if (!r) {
        let n = t[0].charAt(0);
        return { type: "text", raw: n, text: n };
      }
      return Ji(t, r, t[0], this.lexer, this.rules);
    }
  }
  emStrong(i, e, t = "") {
    let s = this.rules.inline.emStrongLDelim.exec(i);
    if (!(!s || s[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !t || this.rules.inline.punctuation.exec(t))) {
      let r = [...s[0]].length - 1, n, o, a = r, l = 0, c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, e = e.slice(-1 * i.length + r); (s = c.exec(e)) != null; ) {
        if (n = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !n) continue;
        if (o = [...n].length, s[3] || s[4]) {
          a += o;
          continue;
        } else if ((s[5] || s[6]) && r % 3 && !((r + o) % 3)) {
          l += o;
          continue;
        }
        if (a -= o, a > 0) continue;
        o = Math.min(o, o + a + l);
        let p = [...s[0]][0].length, u = i.slice(0, r + s.index + p + o);
        if (Math.min(r, o) % 2) {
          let y = u.slice(1, -1);
          return { type: "em", raw: u, text: y, tokens: this.lexer.inlineTokens(y) };
        }
        let h = u.slice(2, -2);
        return { type: "strong", raw: u, text: h, tokens: this.lexer.inlineTokens(h) };
      }
    }
  }
  codespan(i) {
    let e = this.rules.inline.code.exec(i);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(t), r = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return s && r && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
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
      let t, s;
      return e[2] === "@" ? (t = e[1], s = "mailto:" + t) : (t = e[1], s = t), { type: "link", raw: e[0], text: t, href: s, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(i) {
    let e;
    if (e = this.rules.inline.url.exec(i)) {
      let t, s;
      if (e[2] === "@") t = e[0], s = "mailto:" + t;
      else {
        let r;
        do
          r = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (r !== e[0]);
        t = e[0], e[1] === "www." ? s = "http://" + e[0] : s = e[0];
      }
      return { type: "link", raw: e[0], text: t, href: s, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  inlineText(i) {
    let e = this.rules.inline.text.exec(i);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, q = class Xt {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || $e, this.options.tokenizer = this.options.tokenizer || new Ct(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: E, block: mt.normal, inline: Ye.normal };
    this.options.pedantic ? (t.block = mt.pedantic, t.inline = Ye.pedantic) : this.options.gfm && (t.block = mt.gfm, this.options.breaks ? t.inline = Ye.breaks : t.inline = Ye.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: mt, inline: Ye };
  }
  static lex(e, t) {
    return new Xt(t).lex(e);
  }
  static lexInline(e, t) {
    return new Xt(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(E.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let s = this.inlineQueue[t];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], s = !1) {
    for (this.options.pedantic && (e = e.replace(E.tabCharGlobal, "    ").replace(E.spaceLine, "")); e; ) {
      let r;
      if (this.options.extensions?.block?.some((o) => (r = o.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        r.raw.length === 1 && o !== void 0 ? o.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.at(-1).src = o.text) : t.push(r);
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
        let o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t.push(r));
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
      let n = e;
      if (this.options.extensions?.startBlock) {
        let o = 1 / 0, a = e.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, a), typeof l == "number" && l >= 0 && (o = Math.min(o, l));
        }), o < 1 / 0 && o >= 0 && (n = e.substring(0, o + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(n))) {
        let o = t.at(-1);
        s && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r), s = n.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let o = t.at(-1);
        o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r);
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
    let s = e, r = null;
    if (this.tokens.links) {
      let a = Object.keys(this.tokens.links);
      if (a.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; ) a.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; ) s = s.slice(0, r.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; ) s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let n = !1, o = "";
    for (; e; ) {
      n || (o = ""), n = !1;
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
      if (a = this.tokenizer.emStrong(e, s, o)) {
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
        let c = 1 / 0, p = e.slice(1), u;
        this.options.extensions.startInline.forEach((h) => {
          u = h.call({ lexer: this }, p), typeof u == "number" && u >= 0 && (c = Math.min(c, u));
        }), c < 1 / 0 && c >= 0 && (l = e.substring(0, c + 1));
      }
      if (a = this.tokenizer.inlineText(l)) {
        e = e.substring(a.raw.length), a.raw.slice(-1) !== "_" && (o = a.raw.slice(-1)), n = !0;
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
}, St = class {
  options;
  parser;
  constructor(i) {
    this.options = i || $e;
  }
  space(i) {
    return "";
  }
  code({ text: i, lang: e, escaped: t }) {
    let s = (e || "").match(E.notSpaceStart)?.[0], r = i.replace(E.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + F(s) + '">' + (t ? r : F(r, !0)) + `</code></pre>
` : "<pre><code>" + (t ? r : F(r, !0)) + `</code></pre>
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
    let e = i.ordered, t = i.start, s = "";
    for (let o = 0; o < i.items.length; o++) {
      let a = i.items[o];
      s += this.listitem(a);
    }
    let r = e ? "ol" : "ul", n = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + r + n + `>
` + s + "</" + r + `>
`;
  }
  listitem(i) {
    let e = "";
    if (i.task) {
      let t = this.checkbox({ checked: !!i.checked });
      i.loose ? i.tokens[0]?.type === "paragraph" ? (i.tokens[0].text = t + " " + i.tokens[0].text, i.tokens[0].tokens && i.tokens[0].tokens.length > 0 && i.tokens[0].tokens[0].type === "text" && (i.tokens[0].tokens[0].text = t + " " + F(i.tokens[0].tokens[0].text), i.tokens[0].tokens[0].escaped = !0)) : i.tokens.unshift({ type: "text", raw: t + " ", text: t + " ", escaped: !0 }) : e += t + " ";
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
    let s = "";
    for (let r = 0; r < i.rows.length; r++) {
      let n = i.rows[r];
      t = "";
      for (let o = 0; o < n.length; o++) t += this.tablecell(n[o]);
      s += this.tablerow({ text: t });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + s + `</table>
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
    return `<code>${F(i, !0)}</code>`;
  }
  br(i) {
    return "<br>";
  }
  del({ tokens: i }) {
    return `<del>${this.parser.parseInline(i)}</del>`;
  }
  link({ href: i, title: e, tokens: t }) {
    let s = this.parser.parseInline(t), r = Ki(i);
    if (r === null) return s;
    i = r;
    let n = '<a href="' + i + '"';
    return e && (n += ' title="' + F(e) + '"'), n += ">" + s + "</a>", n;
  }
  image({ href: i, title: e, text: t, tokens: s }) {
    s && (t = this.parser.parseInline(s, this.parser.textRenderer));
    let r = Ki(i);
    if (r === null) return F(t);
    i = r;
    let n = `<img src="${i}" alt="${t}"`;
    return e && (n += ` title="${F(e)}"`), n += ">", n;
  }
  text(i) {
    return "tokens" in i && i.tokens ? this.parser.parseInline(i.tokens) : "escaped" in i && i.escaped ? i.text : F(i.text);
  }
}, fi = class {
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
}, Z = class Yt {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || $e, this.options.renderer = this.options.renderer || new St(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new fi();
  }
  static parse(e, t) {
    return new Yt(t).parse(e);
  }
  static parseInline(e, t) {
    return new Yt(t).parseInline(e);
  }
  parse(e, t = !0) {
    let s = "";
    for (let r = 0; r < e.length; r++) {
      let n = e[r];
      if (this.options.extensions?.renderers?.[n.type]) {
        let a = n, l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(a.type)) {
          s += l || "";
          continue;
        }
      }
      let o = n;
      switch (o.type) {
        case "space": {
          s += this.renderer.space(o);
          continue;
        }
        case "hr": {
          s += this.renderer.hr(o);
          continue;
        }
        case "heading": {
          s += this.renderer.heading(o);
          continue;
        }
        case "code": {
          s += this.renderer.code(o);
          continue;
        }
        case "table": {
          s += this.renderer.table(o);
          continue;
        }
        case "blockquote": {
          s += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          s += this.renderer.list(o);
          continue;
        }
        case "html": {
          s += this.renderer.html(o);
          continue;
        }
        case "def": {
          s += this.renderer.def(o);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(o);
          continue;
        }
        case "text": {
          let a = o, l = this.renderer.text(a);
          for (; r + 1 < e.length && e[r + 1].type === "text"; ) a = e[++r], l += `
` + this.renderer.text(a);
          t ? s += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: !0 }] }) : s += l;
          continue;
        }
        default: {
          let a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return s;
  }
  parseInline(e, t = this.renderer) {
    let s = "";
    for (let r = 0; r < e.length; r++) {
      let n = e[r];
      if (this.options.extensions?.renderers?.[n.type]) {
        let a = this.options.extensions.renderers[n.type].call({ parser: this }, n);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n.type)) {
          s += a || "";
          continue;
        }
      }
      let o = n;
      switch (o.type) {
        case "escape": {
          s += t.text(o);
          break;
        }
        case "html": {
          s += t.html(o);
          break;
        }
        case "link": {
          s += t.link(o);
          break;
        }
        case "image": {
          s += t.image(o);
          break;
        }
        case "strong": {
          s += t.strong(o);
          break;
        }
        case "em": {
          s += t.em(o);
          break;
        }
        case "codespan": {
          s += t.codespan(o);
          break;
        }
        case "br": {
          s += t.br(o);
          break;
        }
        case "del": {
          s += t.del(o);
          break;
        }
        case "text": {
          s += t.text(o);
          break;
        }
        default: {
          let a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return s;
  }
}, xt = class {
  options;
  block;
  constructor(i) {
    this.options = i || $e;
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
    return this.block ? q.lex : q.lexInline;
  }
  provideParser() {
    return this.block ? Z.parse : Z.parseInline;
  }
}, Qn = class {
  defaults = oi();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = Z;
  Renderer = St;
  TextRenderer = fi;
  Lexer = q;
  Tokenizer = Ct;
  Hooks = xt;
  constructor(...i) {
    this.use(...i);
  }
  walkTokens(i, e) {
    let t = [];
    for (let s of i) switch (t = t.concat(e.call(this, s)), s.type) {
      case "table": {
        let r = s;
        for (let n of r.header) t = t.concat(this.walkTokens(n.tokens, e));
        for (let n of r.rows) for (let o of n) t = t.concat(this.walkTokens(o.tokens, e));
        break;
      }
      case "list": {
        let r = s;
        t = t.concat(this.walkTokens(r.items, e));
        break;
      }
      default: {
        let r = s;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((n) => {
          let o = r[n].flat(1 / 0);
          t = t.concat(this.walkTokens(o, e));
        }) : r.tokens && (t = t.concat(this.walkTokens(r.tokens, e)));
      }
    }
    return t;
  }
  use(...i) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return i.forEach((t) => {
      let s = { ...t };
      if (s.async = this.defaults.async || s.async || !1, t.extensions && (t.extensions.forEach((r) => {
        if (!r.name) throw new Error("extension name required");
        if ("renderer" in r) {
          let n = e.renderers[r.name];
          n ? e.renderers[r.name] = function(...o) {
            let a = r.renderer.apply(this, o);
            return a === !1 && (a = n.apply(this, o)), a;
          } : e.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let n = e[r.level];
          n ? n.unshift(r.tokenizer) : e[r.level] = [r.tokenizer], r.start && (r.level === "block" ? e.startBlock ? e.startBlock.push(r.start) : e.startBlock = [r.start] : r.level === "inline" && (e.startInline ? e.startInline.push(r.start) : e.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (e.childTokens[r.name] = r.childTokens);
      }), s.extensions = e), t.renderer) {
        let r = this.defaults.renderer || new St(this.defaults);
        for (let n in t.renderer) {
          if (!(n in r)) throw new Error(`renderer '${n}' does not exist`);
          if (["options", "parser"].includes(n)) continue;
          let o = n, a = t.renderer[o], l = r[o];
          r[o] = (...c) => {
            let p = a.apply(r, c);
            return p === !1 && (p = l.apply(r, c)), p || "";
          };
        }
        s.renderer = r;
      }
      if (t.tokenizer) {
        let r = this.defaults.tokenizer || new Ct(this.defaults);
        for (let n in t.tokenizer) {
          if (!(n in r)) throw new Error(`tokenizer '${n}' does not exist`);
          if (["options", "rules", "lexer"].includes(n)) continue;
          let o = n, a = t.tokenizer[o], l = r[o];
          r[o] = (...c) => {
            let p = a.apply(r, c);
            return p === !1 && (p = l.apply(r, c)), p;
          };
        }
        s.tokenizer = r;
      }
      if (t.hooks) {
        let r = this.defaults.hooks || new xt();
        for (let n in t.hooks) {
          if (!(n in r)) throw new Error(`hook '${n}' does not exist`);
          if (["options", "block"].includes(n)) continue;
          let o = n, a = t.hooks[o], l = r[o];
          xt.passThroughHooks.has(n) ? r[o] = (c) => {
            if (this.defaults.async) return Promise.resolve(a.call(r, c)).then((u) => l.call(r, u));
            let p = a.call(r, c);
            return l.call(r, p);
          } : r[o] = (...c) => {
            let p = a.apply(r, c);
            return p === !1 && (p = l.apply(r, c)), p;
          };
        }
        s.hooks = r;
      }
      if (t.walkTokens) {
        let r = this.defaults.walkTokens, n = t.walkTokens;
        s.walkTokens = function(o) {
          let a = [];
          return a.push(n.call(this, o)), r && (a = a.concat(r.call(this, o))), a;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(i) {
    return this.defaults = { ...this.defaults, ...i }, this;
  }
  lexer(i, e) {
    return q.lex(i, e ?? this.defaults);
  }
  parser(i, e) {
    return Z.parse(i, e ?? this.defaults);
  }
  parseMarkdown(i) {
    return (e, t) => {
      let s = { ...t }, r = { ...this.defaults, ...s }, n = this.onError(!!r.silent, !!r.async);
      if (this.defaults.async === !0 && s.async === !1) return n(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return n(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return n(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      r.hooks && (r.hooks.options = r, r.hooks.block = i);
      let o = r.hooks ? r.hooks.provideLexer() : i ? q.lex : q.lexInline, a = r.hooks ? r.hooks.provideParser() : i ? Z.parse : Z.parseInline;
      if (r.async) return Promise.resolve(r.hooks ? r.hooks.preprocess(e) : e).then((l) => o(l, r)).then((l) => r.hooks ? r.hooks.processAllTokens(l) : l).then((l) => r.walkTokens ? Promise.all(this.walkTokens(l, r.walkTokens)).then(() => l) : l).then((l) => a(l, r)).then((l) => r.hooks ? r.hooks.postprocess(l) : l).catch(n);
      try {
        r.hooks && (e = r.hooks.preprocess(e));
        let l = o(e, r);
        r.hooks && (l = r.hooks.processAllTokens(l)), r.walkTokens && this.walkTokens(l, r.walkTokens);
        let c = a(l, r);
        return r.hooks && (c = r.hooks.postprocess(c)), c;
      } catch (l) {
        return n(l);
      }
    };
  }
  onError(i, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, i) {
        let s = "<p>An error occurred:</p><pre>" + F(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(s) : s;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, be = new Qn();
function C(i, e) {
  return be.parse(i, e);
}
C.options = C.setOptions = function(i) {
  return be.setOptions(i), C.defaults = be.defaults, Mr(C.defaults), C;
};
C.getDefaults = oi;
C.defaults = $e;
C.use = function(...i) {
  return be.use(...i), C.defaults = be.defaults, Mr(C.defaults), C;
};
C.walkTokens = function(i, e) {
  return be.walkTokens(i, e);
};
C.parseInline = be.parseInline;
C.Parser = Z;
C.parser = Z.parse;
C.Renderer = St;
C.TextRenderer = fi;
C.Lexer = q;
C.lexer = q.lex;
C.Tokenizer = Ct;
C.Hooks = xt;
C.parse = C;
C.options;
C.setOptions;
C.use;
C.walkTokens;
C.parseInline;
Z.parse;
q.lex;
const Jn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.92'%20x2='38.52'%20y1='18.75'%20y2='47.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='5%2032%2032;%20-15%2032%2032;%205%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M46.66%2036.2a16.66%2016.66%200%2001-16.78-16.55%2016.29%2016.29%200%2001.55-4.15A16.56%2016.56%200%201048.5%2036.1c-.61.06-1.22.1-1.84.1z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-5%2032%2032;%2015%2032%2032;%20-5%2032%2032'/%3e%3c/path%3e%3c/svg%3e", eo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/path%3e%3c/svg%3e", to = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='16.5'%20x2='21.5'%20y1='19.67'%20y2='28.33'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='19'%20cy='24'%20r='5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2019%2024;%20360%2019%2024'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", io = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='13.58'%20x2='24.15'%20y1='15.57'%20y2='33.87'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='10%2019.22%2024.293;%20-10%2019.22%2024.293;%2010%2019.22%2024.293'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M29.33%2026.68a10.61%2010.61%200%2001-10.68-10.54A10.5%2010.5%200%200119%2013.5a10.54%2010.54%200%201011.5%2013.11%2011.48%2011.48%200%2001-1.17.07z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-10%2019.22%2024.293;%2010%2019.22%2024.293;%20-10%2019.22%2024.293'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", ro = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='27.5'%20x2='36.5'%20y1='50.21'%20y2='65.79'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20y1='44.21'%20y2='59.79'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2058h30'%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2052h30'%3e%3canimateTransform%20attributeName='transform'%20begin='-4s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3c/svg%3e", so = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.25'%20x2='24.75'%20y1='43.7'%20y2='46.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='30.25'%20x2='31.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='37.25'%20x2='38.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23a)'%20d='M24%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20d='M31%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20d='M38%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3c/svg%3e", no = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", oo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23b)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", ao = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", lo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='30.12'%20x2='31.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.67'%20x2='32.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='g'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M33.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M31%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='-1%20-6;%201%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2031%2045;%20360%2031%2045'/%3e%3canimate%20attributeName='opacity'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23d)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23f)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3c/svg%3e", co = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='b'%20x1='23.31'%20x2='24.69'%20y1='44.3'%20y2='46.7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='30.31'%20x2='31.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3clinearGradient%20id='h'%20x1='37.31'%20x2='38.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3c/defs%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23e)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23f)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23h)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", ho = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.97'%20x2='42.03'%20y1='14.63'%20y2='49.37'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43%2032a11%2011%200%2011-11-11%2011%2011%200%200111%2011zM25%2014.61l-.48%201a33.68%2033.68%200%2000-3.42%2017.82h0M39%2049.39l.48-1a33.68%2033.68%200%20003.42-17.82h0'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='360%2032%2032;%200%2032%2032'/%3e%3c/path%3e%3c/svg%3e", er = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='27.56'%20x2='38.27'%20y1='17.64'%20y2='36.19'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='19.96'%20x2='31.37'%20y1='29.03'%20y2='48.8'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e", Ut = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e", po = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='52.7'%20x2='133.4'%20y1='9.6'%20y2='149.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%239ca3af'/%3e%3cstop%20offset='.5'%20stop-color='%239ca3af'/%3e%3cstop%20offset='1'%20stop-color='%236b7280'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='99.5'%20x2='232.6'%20y1='30.7'%20y2='261.4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%236b7280'/%3e%3cstop%20offset='.5'%20stop-color='%236b7280'/%3e%3cstop%20offset='1'%20stop-color='%234b5563'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='1381.3'%20x2='1399.5'%20y1='-1144.7'%20y2='-1097.4'%20gradientTransform='rotate(-9%208002.567%208233.063)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%230b65ed'/%3e%3cstop%20offset='.5'%20stop-color='%230a5ad4'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23c'%20id='d'%20x1='1436.7'%20x2='1454.9'%20y1='-1137'%20y2='-1089.7'%20gradientTransform='rotate(-9%208009.537%208233.037)'/%3e%3clinearGradient%20xlink:href='%23c'%20id='e'%20x1='1492.1'%20x2='1510.3'%20y1='-1129.3'%20y2='-1082.1'%20gradientTransform='rotate(-9%208016.566%208233.078)'/%3e%3csymbol%20id='g'%20viewBox='0%200%20200.3%20126.1'%3e%3cpath%20fill='url(%23a)'%20stroke='%23848b98'%20stroke-miterlimit='10'%20d='M.5%2093.2a32.4%2032.4%200%200032.4%2032.4h129.8v-.1l2.3.1a34.8%2034.8%200%20006.5-68.9%2032.4%2032.4%200%2000-48.5-33%2048.6%2048.6%200%2000-88.6%2037.1h-1.5A32.4%2032.4%200%2000.5%2093.1Z'/%3e%3c/symbol%3e%3csymbol%20id='h'%20viewBox='0%200%20350%20222'%3e%3cpath%20fill='url(%23b)'%20stroke='%235b6472'%20stroke-miterlimit='10'%20stroke-width='6'%20d='m291%20107-2.5.1A83.9%2083.9%200%2000135.6%2043%2056%2056%200%200051%2091a56.6%2056.6%200%2000.8%209A60%2060%200%200063%20219l4-.2v.2h224a56%2056%200%20000-112Z'/%3e%3c/symbol%3e%3csymbol%20id='f'%20overflow='visible'%20viewBox='0%200%20398%20222'%3e%3cuse%20xlink:href='%23g'%20width='200.3'%20height='126.1'%20transform='translate(198%2027)'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-9%200;%209%200;%20-9%200'/%3e%3c/use%3e%3cuse%20xlink:href='%23h'%20width='350'%20height='222'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-18%200;%2018%200;%20-18%200'/%3e%3c/use%3e%3c/symbol%3e%3csymbol%20id='i'%20overflow='visible'%20viewBox='0%200%20129%2057'%3e%3cpath%20fill='url(%23c)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M8.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x1'%20additive='sum'%20attributeName='transform'%20begin='0s;%20x1.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y1'%20attributeName='opacity'%20begin='0s;%20y1.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M64.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x2'%20additive='sum'%20attributeName='transform'%20begin='.33s;%20x2.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y2'%20attributeName='opacity'%20begin='.33s;%20y2.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M120.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x3'%20additive='sum'%20attributeName='transform'%20begin='-.33s;%20x3.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y3'%20attributeName='opacity'%20begin='-.33s;%20y3.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3cuse%20xlink:href='%23f'%20width='398'%20height='222'%20transform='translate(68.84%20145)'/%3e%3cuse%20xlink:href='%23i'%20width='129'%20height='57'%20transform='translate(191.5%20343.5)'/%3e%3c/svg%3e";
var uo = "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z", fo = "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z", go = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z", mo = "M15,6.79C16.86,7.86 18,9.85 18,12C18,22 6,22 6,22C7.25,21.06 8.38,19.95 9.34,18.71C9.38,18.66 9.41,18.61 9.44,18.55C9.69,18.06 9.5,17.46 9,17.21C7.14,16.14 6,14.15 6,12C6,2 18,2 18,2C16.75,2.94 15.62,4.05 14.66,5.29C14.62,5.34 14.59,5.39 14.56,5.45C14.31,5.94 14.5,6.54 15,6.79M12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14Z", yo = "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z", xo = "M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z", wo = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", bo = "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z", _o = "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z", vo = "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59", $o = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z", ko = "M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z", Wr = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z", Ao = "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z", Co = "M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z";
const L = (i, e) => i ? (e || (e = "24px"), d`<ha-icon
    .icon="${i}"
    style="font-size:${e}; width: ${e}; height: ${e}"
  />`) : d`<ha-icon
      icon="mdi:weather-sunny"
      style="font-size:${e}; width: ${e}; height: ${e}"
    />`, H = (i, e) => i ? (e || (e = "24px"), w`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${i}" /></svg>`) : w`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${Wr}" /></svg>`, Me = (i, e, t, s) => {
  if (!i)
    return L("mdi:weather-sunny", t);
  const r = {
    "clear-night": H(wo, t),
    cloudy: H(uo, t),
    fog: H(fo, t),
    hail: H(go, t),
    lightning: H(yo, t),
    "lightning-rainy": H(xo, t),
    partlycloudy: H(bo, t),
    pouring: H(_o, t),
    rainy: H(vo, t),
    snowy: H($o, t),
    "snowy-rainy": H(ko, t),
    sunny: H(Wr, t),
    windy: H(Ao, t),
    "windy-variant": H(Co, t),
    exceptional: H(mo, t)
  }, n = {
    "clear-night": L("mdi:weather-night", t),
    cloudy: L("mdi:weather-cloudy", t),
    fog: L("mdi:weather-fog", t),
    hail: L("mdi:weather-hail", t),
    lightning: L("mdi:weather-lightning", t),
    "lightning-rainy": L("mdi:weather-lightning-rainy", t),
    partlycloudy: L("mdi:weather-partly-cloudy", t),
    pouring: L("mdi:weather-pouring", t),
    rainy: L("mdi:weather-rainy", t),
    snowy: L("mdi:weather-snowy", t),
    "snowy-rainy": L("mdi:weather-snowy-rainy", t),
    sunny: L("mdi:weather-sunny", t),
    windy: L("mdi:weather-windy", t),
    "windy-variant": L("mdi:weather-windy-variant", t),
    exceptional: L("mdi:weather-hurricane", t)
  }, o = {
    "clear-night": d`<img src="${Jn}" style="font-size:${t}" />`,
    cloudy: d`<img src="${eo}" style="font-size:${t}" />`,
    fog: d`<img src="${ro}" style="font-size:${t}" />`,
    hail: d`<img src="${so}" style="font-size:${t}" />`,
    lightning: d`<img src="${oo}" style="font-size:${t}" />`,
    "lightning-rainy": d`<img src="${no}" style="font-size:${t}" />`,
    partlycloudy: d`<img
      src="${s ? to : io}"
      style="font-size:${t}"
    />`,
    pouring: d`<img src="${po}" style="font-size:${t}" />`,
    rainy: d`<img src="${ao}" style="font-size:${t}" />`,
    snowy: d`<img src="${lo}" style="font-size:${t}" />`,
    "snowy-rainy": d`<img src="${co}" style="font-size:${t}" />`,
    sunny: d`<img src="${Ut}" style="font-size:${t}" />`,
    windy: d`<img src="${er}" style="font-size:${t}" />`,
    "windy-variant": d`<img src="${er}" style="font-size:${t}" />`,
    exceptional: d`<img src="${ho}" style="font-size:${t}" />`
  };
  return e === "mdi" ? n[i] || L("mdi:weather-sunny", t) : e === "mdiAsSVG" ? r[i] || d`<img src="${Ut}" />` : o[i] || d`<img src="${Ut}" />`;
}, Mt = (i, e) => i?.states[e], Rr = (i, e) => {
  const t = /* @__PURE__ */ new Date(), s = Mt(i, e.entity), r = Mt(i, e.sun_entity || "sun.sun");
  let n = null, o = null;
  if (s && s.attributes && "sunrise" in s.attributes && "sunset" in s.attributes && s.attributes.sunrise && s.attributes.sunset)
    n = new Date(s.attributes.sunrise), o = new Date(s.attributes.sunset);
  else if (r?.attributes) {
    const a = r.attributes.next_rising ? new Date(r.attributes.next_rising) : null, l = r.attributes.next_setting ? new Date(r.attributes.next_setting) : null;
    if (a && l) {
      const c = a > t ? new Date(a.getTime() - 864e5) : a, p = l;
      n = c, o = p;
    }
  }
  return !n || !o ? !0 : t >= n && t < o;
};
function gi(i) {
  const e = window;
  e.customCards = e.customCards || [], e.customCards.push({
    ...i,
    preview: !0
    // documentationURL: `
  });
}
var So = Object.defineProperty, Mo = Object.getOwnPropertyDescriptor, ke = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Mo(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && So(e, t, r), r;
};
Pe({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => We[i]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard");
console.log("🎯 customElements registry available:", !!customElements);
let ne = class extends N {
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
        const s = e?.response;
        s && s[this.config.entity] ? (this._hourlyForecast = s[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [], console.log("🟢 Forecast geladen:", {
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
    return D`
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
      type: "custom:" + ct,
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
    return document.createElement(Cr);
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
      for (let n = 0; n < i?.attributes.warning_levels.length; n++)
        e.push({
          id: `warning_${n}`,
          title: i?.attributes.warning_levels[n],
          level: i?.attributes.warning_levels[n],
          type: i?.attributes.warning_types[n],
          description: i?.attributes.warning_texts[n],
          valid_from: i.attributes.warning_valid_from[n],
          valid_to: i.attributes.warning_valid_to[n],
          link: i.attributes.warning_links[n],
          regions: [],
          phenomena: []
        });
    const t = this._getWarningLevel(e), s = {
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
    const r = (n) => {
      this._openWarnings = { ...this._openWarnings, [n]: !this._openWarnings[n] }, this.requestUpdate();
    };
    return e.length > 0 ? d`
          <div class="warning-section ${t}">
            <div>
              <strong>${k("weather_warning")}</strong>
              <ul style="margin: 6px 0 0 0; padding-left: 18px;">
                ${e.map(
      (n) => d`
                    <li style="margin-bottom: 12px;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <ha-icon
                          icon="${s[n.type?.toLowerCase?.()] || s.default}"
                          style="color: var(--error-color, #dc143c);"
                        ></ha-icon>
                        <span style="font-weight:bold;">${n.title}</span>
                        ${n.link ? d`
                              <a
                                href="${n.link}"
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
                          @click=${() => r(n.id)}
                          style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;"
                          title="${this._openWarnings[n.id] ? k("collapse") : k("expand")}"
                          aria-label="${this._openWarnings[n.id] ? k("collapse") : k("expand")}"
                        >
                          <ha-icon
                            icon="${this._openWarnings[n.id] ? "mdi:chevron-up" : "mdi:chevron-down"}"
                          ></ha-icon>
                        </button>
                      </div>
                      ${this._openWarnings[n.id] && n.description ? d`
                            <div>
                              <strong>${k("valid_from")}: </strong>
                              ${n.valid_from ? new Date(n.valid_from).toLocaleString() : k("unknown")}
                              <strong>${k("valid_to")}: </strong>
                              ${n.valid_to ? new Date(n.valid_to).toLocaleString() : k("unknown")}
                            </div>
                            <div
                              style="color: var(--primary-text-color, #fff); font-size: 14px; line-height: 1.4; margin-left: 2px; margin-top: 4px;"
                              .innerHTML="${C.parse(n.description || "")}"
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
          ._t=${k}
          .showHoursChartLabel=${(e) => gt(e)}
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
          ._t=${k}
          .showHoursChartLabel=${(e) => gt(e)}
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
          ._t=${k}
          .showHoursChartLabel=${(s) => gt(s)}
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
          ._t=${k}
          .showHoursChartLabel=${(e) => gt(e)}
        ></wind-chart>` : d``;
  }
  _renderCurrentWeather(i, e, t, s, r, n) {
    return d`
      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${k("current_weather")}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(i)} km/h</div>
          <div class="metric-label">${k("wind")}</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${e}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(e)}</div>
          <div class="metric-label">${k("direction")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${t}%</div>
          <div class="metric-label">${k("humidity")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${s} hPa</div>
          <div class="metric-label">${k("pressure")}</div>
        </div>
        ${n ? d`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                <div class="metric-value">${parseFloat(n.state).toFixed(1)}h</div>
                <div class="metric-label">${k("sunshine")}</div>
              </div>
            ` : ""}
        ${r > 0 ? d`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                <div class="metric-value">${r} km</div>
                <div class="metric-label">${k("visibility")}</div>
              </div>
            ` : ""}
      </div>
    `;
  }
  _renderCurrentWeatherSection(i, e, t, s, r, n) {
    return d`
      <div class="current-weather-section">
        ${this.config.compact_mode === !0 ? d`
              ${this._renderCurrentWeatherCompactMode(
      i,
      e,
      t,
      s,
      r,
      n
    )}
            ` : d`
              ${this._renderCurrentWeather(
      i,
      e,
      t,
      s,
      r,
      n
    )}
            `}
      </div>
    `;
  }
  render() {
    if (lt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return d``;
    const i = this._getEntityState(this.config.entity), e = this._getEntityState(this.config.sun_entity || "sun.sun");
    if (!i)
      return d`<div>Entity not found: ${this.config.entity}</div>`;
    const t = this.config.show_location !== !1, s = this.config.location || k("location"), r = i.attributes.temperature, n = i.state, o = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null, a = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null, l = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null, c = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null, p = o ? parseFloat(o.state) : i.attributes.wind_speed || 0, u = a ? parseFloat(a.state) : i.attributes.wind_bearing || 0, h = i.attributes.humidity || 0, y = i.attributes.pressure || 0, v = i.attributes.visibility || 0, b = this.config.forecast_hours ?? 6;
    return d`
      ${t ? d`
            <div class="header">
              <div class="location">${s}</div>
            </div>
          ` : ""}
      ${this.config.show_warnings ? this._renderWarningSection(c) : ""}

      <div class="current-weather">
        <div>
          <div class="current-temp">${r}°</div>
          <div class="condition">${k(n)}</div>
        </div>
        <div class="current-details">
          <div
            class="weather-icon"
            style="color: var(--icon-color, #fff); width: 64px; height: 64px;"
          >
            ${Me(
      n,
      this.config.enable_animate_weather_icons ? "animated" : "mdi",
      "64px",
      Rr(this.hass, this.config)
    )}
          </div>
        </div>
      </div>

      ${this._renderCurrentWeatherSection(
      p,
      u,
      h,
      y,
      v,
      l
    )}
      ${this.config.compact_mode === !1 && (this.config.show_temperature === !0 || this.config.show_precipitation === !0 || this.config.show_sunshine === !0) ? d`
            <div class="section-title">
              <ha-icon icon="mdi:clock"></ha-icon>
              ${k("forecast_hours", { hours: b })}
            </div>
          ` : ""}
      ${(this.config.chart_order || [
      "temperature",
      "precipitation",
      "sunshine",
      "wind",
      "forecast"
    ]).map((Ue) => {
      switch (Ue) {
        case "temperature":
          return this._renderForecastTemperature(b);
        case "precipitation":
          return this._renderForecastPrecipitation(b);
        case "sunshine":
          return this._renderForecastSunshine(i, e, b);
        case "wind":
          return this._renderForecastWind(b);
        case "forecast":
          return this._showDailyForecast();
        default:
          return "";
      }
    })}
    `;
  }
  _renderCurrentWeatherCompactMode(i, e, t, s, r, n) {
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
          <div class="metric-value">${s} hPa</div>
        </div>
        ${n ? d`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                  <div class="metric-value">${parseFloat(n.state).toFixed(1)}h</div>
                </div>
              ` : ""}
        ${r > 0 ? d`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                  <div class="metric-value">${r} km</div>
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
          ._t=${k}
          .getWeatherIcon=${Me}
          .formatDate=${Sr}
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
          ._t=${k}
          .getWeatherIcon=${Me}
        ></daily-forecast-diagram>` : d``;
  }
};
ke([
  m({ attribute: !1 })
], ne.prototype, "hass", 2);
ke([
  m({ attribute: !1 })
], ne.prototype, "config", 2);
ke([
  X()
], ne.prototype, "_forecast", 2);
ke([
  X()
], ne.prototype, "_hourlyForecast", 2);
ke([
  X()
], ne.prototype, "_forecastLoading", 2);
ke([
  X()
], ne.prototype, "_openWarnings", 2);
ne = ke([
  O(ct)
], ne);
const me = `${ni}-forecast-diagram-card`, Fr = `${me}-editor`, Kt = [
  {
    name: "entity",
    required: !0,
    selector: { entity: { domain: "weather" } },
    description: "config.descr.entity"
  }
];
var To = Object.defineProperty, Lo = Object.getOwnPropertyDescriptor, Gt = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Lo(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && To(e, t, r), r;
};
Pe({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => We[i]
});
let ot = class extends N {
  hass;
  lovelace;
  _config;
  constructor() {
    super(), console.log("🎨 SwissweatherCardEditor (Forecast Diagram) constructor called");
  }
  setConfig(i) {
    const e = { ...i }, t = ["entity", "sun_entity"];
    for (const s of t)
      e[s] === "" && delete e[s];
    this._config = e, this.requestUpdate();
  }
  static get styles() {
    return D`
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
    lt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
    const i = {
      entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
      sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0
    };
    return d`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Forecast Diagram Card</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${x("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${i}
            .schema=${[Kt.find((e) => e.name === "entity")].filter(Boolean)}
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
            .schema=${[Kt.find((e) => e.name === "sun_entity")].filter(Boolean)}
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
    return i.type || (i.type = "custom:" + me), Object.keys(i).forEach((e) => {
      (i[e] === void 0 || i[e] === "") && delete i[e];
    }), Object.entries(i).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join(`
`);
  }
  _valueChanged(i) {
    if (this._config || (this._config = {
      type: `custom:${me}`,
      entity: "",
      sun_entity: ""
    }), i.type === "value-changed") {
      const e = {}, { ...t } = i.detail.value || {}, s = {
        ...this._config,
        ...t,
        ...e,
        type: "custom:" + me
      };
      Object.keys(s).forEach((r) => {
        (s[r] === "" || s[r] === void 0) && delete s[r];
      }), this._config = s, kt(this, "config-changed", { config: this._config });
    }
  }
};
Gt([
  m({ attribute: !1 })
], ot.prototype, "hass", 2);
Gt([
  m({ attribute: !1 })
], ot.prototype, "lovelace", 2);
Gt([
  m({ attribute: !1 })
], ot.prototype, "_config", 2);
ot = Gt([
  O(Fr)
], ot);
var No = Object.defineProperty, zo = Object.getOwnPropertyDescriptor, Re = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? zo(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && No(e, t, r), r;
};
Pe({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => We[i]
});
let _e = class extends N {
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
    return D`
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
        const s = e?.response;
        s && s[this.config.entity] ? (this._hourlyForecast = s[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [], console.log("🟢 Forecast geladen:", {
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
      type: `custom:${me}`,
      entity: ""
    };
  }
  static getConfigElement() {
    return document.createElement(Fr);
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return Kt;
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
    const i = Mt(this.hass, this.config.entity), e = this.config?.grid_options?.rows ?? 3;
    return this.style.setProperty("--card-grid-rows", e.toString()), i ? !this._forecast || this._forecast.length === 0 ? d`<div>Loading forecast...</div>` : !this._hourlyForecast || this._hourlyForecast.length === 0 ? d`<div>Loading hourly forecast...</div>` : this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<daily-forecast-diagram
          .config=${{ ...this.config, enable_animate_weather_icons: !0 }}
          .forecast=${[...this._forecast?.slice(0, 7) ?? []]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${k}
          .getWeatherIcon=${Me}
          .standalone=${!0}
        ></daily-forecast-diagram>` : d`` : d`<div>Entity not found: ${this.config.entity}</div>`;
  }
};
Re([
  m({ attribute: !1 })
], _e.prototype, "hass", 2);
Re([
  m({ attribute: !1 })
], _e.prototype, "config", 2);
Re([
  X()
], _e.prototype, "_forecast", 2);
Re([
  X()
], _e.prototype, "_hourlyForecast", 2);
Re([
  X()
], _e.prototype, "_forecastLoading", 2);
_e = Re([
  O(me)
], _e);
const Ur = () => w`
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
`, Ho = (i, e, t) => {
  if (!i)
    return d``;
  const s = {
    "clear-night": Eo(t),
    cloudy: Do(t),
    fog: Oo(t),
    hail: Po(t),
    lightning: Fo(t),
    "lightning-rainy": Uo(t),
    partlycloudy: e ? jo(t) : Vo(t),
    pouring: Ro(t),
    rainy: Wo(t),
    snowy: Io(t),
    "snowy-rainy": Bo(t),
    sunny: Go(),
    windy: tr(t),
    "windy-variant": tr(t),
    exceptional: qo(t)
  };
  return i ? s[i] : d``;
}, Eo = (i) => w`
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
  const t = Math.floor(Math.random() * 100), s = Math.floor(Math.random() * 10), r = (t - 50) / 5 + e * Math.floor(Math.random() * 25), n = e * 100 + s;
  return w`
    <use href="#starIcon" x="0" y="0" transform="translate(${n},${r}) scale(0.5)"/>
    `;
})}
  </g>
`, Go = () => w`
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
`, Do = (i) => w`
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
  ${B(i)}
  `, Oo = (i) => w`
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
  ${B(i)}
  `, Po = (i) => w`
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
  const t = Math.floor(Math.random() * 100), s = Math.floor(Math.random() * 10), r = (t - 50) / 5 + e * Math.floor(Math.random() * 25), n = e * 100 + s;
  return w`
  <g>
    <use href="#hailIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(${n},${r})" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  `;
})}
  `, Wo = (i) => w`
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3580a39c" />
      <stop offset="80%" stop-color="#3482a79c" stop-opacity="0" />
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
    <g id="icon">
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
  ${B(i)}
  
  `;
w`<g transform="translate(168,-30) scale(3)"><circle cx="24" cy="42" r="4" fill="#a8dadc"/><circle cx="40" cy="42" r="4" fill="#a8dadc"/><circle cx="32" cy="34" r="4" fill="#a8dadc"/><path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></g>`;
const Ro = (i) => w`
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
  const t = Math.floor(Math.random() * 100), s = Math.floor(Math.random() * 10), r = (t - 50) / 5 + e * Math.floor(Math.random() * 25), n = e * 20 + s;
  return w`
    <line x1="${n}" y1="${r}" x2="${n}" y2="${r + 10}" stroke="url(#extremeRainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${r}; ${r + 20}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${r + 10}; ${r + 30}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="0.5s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, tr = (i) => w`
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
  const t = Math.floor(Math.random() * 100), s = Math.floor(Math.random() * 10), r = (t - 50) / 5 + e * Math.floor(Math.random() * 25), n = e * 50 + s;
  return w`
    <line x1="${n}" y1="${r}" x2="${n + 30}" y2="${r}" stroke="url(#windLineGradient)" stroke-width="4" stroke-linecap="round">
      <animate attributeName="x1" values="${n}; ${n + 10}; ${n}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="${n + 30}; ${n + 40}; ${n + 30}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0.4; 1" dur="3s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, Fo = (i) => w`
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
 
   ${B(i)}
   
  <!-- Lightning flash effect that illuminates the entire background (full-size overlay) -->
  ${Ur()}
  `, Uo = (i) => w`
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

  ${B(i)}
  
  <!-- Lightning flash effect for rainy thunderstorms -->
  ${Ur()}
  `, B = (i) => w`
${Array.from({ length: Math.ceil(i / 10) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), s = Math.floor(Math.random() * 10), r = (t - 50) / 5 + e * Math.floor(Math.random() * 25), n = e * 100 + s, o = Math.floor(Math.random() * 2) + 1, a = 1 + Math.random() * 1, l = 44 + Math.floor(Math.random() * 90);
  return w`
    <g>
      <use href="#icon" x="${n}" y="${r}" width="80" height="40" transform="scale(${o})" opacity="0">
        <animate attributeName="opacity" values="0;${a};${a};0" dur="${l}s" repeatCount="indefinite"/>
      </use>
      <animateTransform attributeName="transform" type="translate" values="-150,20;450,20" dur="${l}s" repeatCount="indefinite"/>
    </g>
    `;
})}
  `, Bo = (i) => w`
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
  
  ${B(i)}
  `, Io = (i) => w`
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
  
  ${B(i)}
  `, jo = (i) => w`
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
  ${B(i)}
  `, Vo = (i) => w`
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
  ${B(i)}
  `, qo = (i) => w`
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
  
  ${B(i)}
  `, ye = `${ni}-animated-background-card`, Br = `${ye}-editor`, Q = [
  {
    name: "entity",
    required: !0,
    selector: { entity: { domain: "weather" } },
    description: "config.descr.entity"
  },
  {
    name: "sun_entity",
    required: !1,
    selector: { entity: { domain: "sun" } },
    description: "config.descr.sun_entity"
  },
  {
    name: "show_sun_times",
    required: !1,
    selector: { boolean: {} },
    description: "config.descr.show_sun_times"
  },
  {
    name: "forecast_mode",
    required: !1,
    selector: {
      select: {
        mode: "dropdown",
        options: [
          { value: "daily", label: "config.forecast_mode.daily" },
          { value: "hourly", label: "config.forecast_mode.hourly" },
          { value: "none", label: "config.forecast_mode.none" }
        ]
      }
    },
    description: "config.descr.forecast_mode"
  },
  {
    name: "show_forecast",
    required: !1,
    selector: { boolean: {} },
    description: "config.descr.show_forecast"
  },
  {
    name: "show_day_temps",
    required: !1,
    selector: { boolean: {} },
    description: "config.descr.show_day_temps"
  },
  {
    name: "temperature_font_size",
    required: !1,
    selector: { number: { min: 12, max: 96, step: 1, mode: "box" } },
    description: "config.descr.temperature_font_size"
  }
];
var Ir = Object.defineProperty, Zo = Object.getOwnPropertyDescriptor, Xo = (i, e, t) => e in i ? Ir(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, I = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Zo(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && Ir(e, t, r), r;
}, Yo = (i, e, t) => Xo(i, e + "", t);
let P = class extends N {
  hourlyForecast = [];
  forecastLoading = !1;
  show_forecast = !0;
  config = {};
  _t;
  getWeatherIcon;
  compact = !0;
  maxHours = 6;
  alignRight = !0;
  _fmtHour(i) {
    return new Date(i).toLocaleTimeString([], { hour: "2-digit" });
  }
  render() {
    if (this.show_forecast === !1 || this.config.show_forecast === !1) return d``;
    const i = (this.hourlyForecast || []).slice(0, Math.max(1, this.maxHours));
    return d`
      <div class="wrapper ${this.alignRight ? "align-right" : ""}">
        ${this.compact ? d`` : d`
              <div class="section-title">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                ${this._t("forecast_hours", { hours: i.length })}
              </div>
            `}
        <div class="grid">
          ${i.map(
      (e) => d`
              <div class="tile">
                <div class="label">${this._fmtHour(e.datetime ?? e.time)}</div>
                <div class="icon">
                  ${this.getWeatherIcon(
        e.condition,
        this.config.enable_animate_weather_icons ? "animated" : "mdi",
        this.compact ? "18px" : "24px",
        !0
      )}
                </div>
                <div class="temps">
                  ${typeof e.temperature == "number" ? d`<span>${Math.round(e.temperature)}°</span>` : ""}
                </div>
              </div>
            `
    )}
        </div>
      </div>
    `;
  }
};
Yo(P, "styles", D`
    .wrapper {
      display: block;
      width: 100%;
    }
    .wrapper.align-right {
      display: flex;
      justify-content: flex-end;
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

    .grid {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: stretch;
      gap: 8px;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }

    .tile {
      background: var(--card-background-color, rgba(255, 255, 255, 0.6));
      border-radius: 8px;
      padding: 8px 6px;
      text-align: center;
      border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
      width: 64px;
      min-width: 64px;
      box-sizing: border-box;
    }

    .label {
      font-size: 10px;
      color: var(--secondary-text-color, #7f8c8d);
      margin-bottom: 4px;
    }
    .icon {
      font-size: 18px;
      margin: 4px 0;
    }
    .temps {
      font-size: 11px;
      display: flex;
      justify-content: center;
      gap: 6px;
    }

    @media (max-width: 400px) {
      .grid {
        gap: 6px;
      }
      .tile {
        width: 56px;
        min-width: 56px;
      }
      .icon {
        font-size: 16px;
      }
      .temps {
        font-size: 10px;
      }
    }
  `);
I([
  m({ type: Array })
], P.prototype, "hourlyForecast", 2);
I([
  m({ type: Boolean })
], P.prototype, "forecastLoading", 2);
I([
  m({ type: Boolean })
], P.prototype, "show_forecast", 2);
I([
  m({ type: Object })
], P.prototype, "config", 2);
I([
  m({ type: Function })
], P.prototype, "_t", 2);
I([
  m({ type: Function })
], P.prototype, "getWeatherIcon", 2);
I([
  m({ type: Boolean })
], P.prototype, "compact", 2);
I([
  m({ type: Number })
], P.prototype, "maxHours", 2);
I([
  m({ type: Boolean })
], P.prototype, "alignRight", 2);
P = I([
  O("hourly-forecast-chart")
], P);
var Ko = Object.defineProperty, Qo = Object.getOwnPropertyDescriptor, Fe = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Qo(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && Ko(e, t, r), r;
};
Pe({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => We[i]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard (BG)");
console.log("🎯 customElements registry available:", !!customElements);
let ve = class extends N {
  hass;
  config;
  _tempEl;
  _forecast = [];
  _hourly = [];
  _forecastLoading = !1;
  _hourlyLoading = !1;
  _lastEntityId;
  static get styles() {
    return D`
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
        font-size: var(--bg-temp-font-size, 36px);
        font-weight: bold;
        text-align: center;
        z-index: 1;
      }

      .img-svg {
        position: absolute;
        margin-top: var(--bg-temp-img-top, 36px);
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
        top: calc(var(--bg-temp-font-size, 36px) + 16px);
        right: 16px;
        margin-left: 16px;
        font-size: 16px;
        color: var(--primary-text-color, #fff);
        text-align: right;
      }
      .forecast-temps {
        position: absolute;
        top: calc(var(--bg-temp-font-size, 36px) * 2 + 16px);
        left: 16px;
        font-size: 14px;
        max-width: calc(100% - 32px); /* honor left/right margins */
        display: flex;
        flex-direction: row;
      }
      .sun-times {
        position: absolute;
        top: calc(var(--bg-temp-font-size, 36px) * 2 + 16px);
        right: 16px;
        display: flex;
        gap: 12px;
        align-items: center;
        color: var(--primary-text-color, #fff);
        font-size: 14px;
        z-index: 3; /* above forecast tiles */
      }
      .forecast-mini {
        position: absolute;
        bottom: 16px; /* align vertically with bottom spacing */
        right: 16px;  /* align to the right edge */
        z-index: 2;   /* below sun-times but above background */
        max-width: calc(100% - 32px); /* honor left/right margins */
      }
      @media (max-width: 400px) {
        .forecast-mini {
          right: 12px;
          bottom: 12px;
          max-width: calc(100% - 24px);
        }
      }
      .temp-high {
        font-weight: bold;
      }
      .temp-low {
      }
      @media (max-width: 400px) {
        .temperature {
          font-size: calc(var(--bg-temp-font-size, 36px) * 0.8);
          padding: 4px 8px;
        }
        .condition {
          font-size: 14px;
        }
        .forecast-temps {
          font-size: 12px;
        }
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
    return this.config?.grid_options?.rows ?? 4;
  }
  // The rules for sizing your card in the grid in sections view
  getGridOptions() {
    return {
      rows: this.config?.grid_options?.rows ?? 3,
      columns: this.config?.grid_options?.columns ?? 12,
      min_columns: 12,
      max_columns: 48,
      min_rows: 4,
      max_rows: 8
    };
  }
  static getStubConfig() {
    return {
      type: `custom:${ye}`,
      entity: ""
    };
  }
  static getConfigElement() {
    return document.createElement(Br);
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return Q;
  }
  updated(i) {
    if (super.updated(i), this.hass && this.config?.entity) {
      if (this._lastEntityId !== this.config.entity) {
        this._lastEntityId = this.config.entity;
        const e = this.config.forecast_mode || "daily";
        e === "daily" && this._loadDailyForecast(), e === "hourly" && this._loadHourlyForecast();
      }
      this.config.show_day_temps !== !1 && !this._forecastLoading && this._forecast.length === 0 && this._loadDailyForecast();
    }
  }
  render() {
    if (lt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return d``;
    const i = this.config?.grid_options?.rows ?? 3;
    this.style.setProperty("--card-grid-rows", i.toString());
    const e = Mt(this.hass, this.config.entity), t = e.attributes.temperature, s = e.state, r = this.clientWidth || 300, n = i * 64 - 8, o = this.config?.temperature_font_size, a = typeof o == "number" && o > 0 ? `${o}px` : "36px";
    this.style.setProperty("--bg-temp-font-size", a), this.style.setProperty("--bg-temp-img-top", `calc(${a})`);
    const l = this._forecast && this._forecast.length > 0 ? this._forecast[0] : e.attributes.forecast ? e.attributes.forecast[0] : null, c = this.config.sun_entity, p = c ? this.hass.states[c] : void 0, u = p?.attributes?.next_rising ? new Date(p.attributes.next_rising) : void 0, h = p?.attributes?.next_setting ? new Date(p.attributes.next_setting) : void 0, y = (this.hass.selectedLanguage || this.hass.language || "en").replace("_", "-"), v = (b) => b ? b.toLocaleTimeString(y, { hour: "2-digit", minute: "2-digit" }) : "--:--";
    return d`
      <div>
        <div class="temperature">
          ${typeof t == "number" && !isNaN(t) ? t : "--"}°
        </div>
        ${s ? d`<div class="img-svg">
                <svg
                  viewBox="0 0 ${r} ${n}"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid slice"
                >
                  ${r > 0 ? Ho(s, Rr(this.hass, this.config), r) : w``}
                </svg>
              </div>
              ${l && this.config.show_day_temps !== !1 ? d`
                    <div class="forecast-temps">
                      <span class="temp-high">
                        <ha-icon icon="mdi:arrow-up-bold"></ha-icon> ${Math.round(l.temperature)}°
                      </span>
                      <span class="temp-low">
                        <ha-icon icon="mdi:arrow-down-bold"></ha-icon> ${Math.round(
      l.templow || l.temperature - 5
    )}°
                      </span>
                    </div>
                  ` : ""}
              ${c && this.config.show_sun_times !== !1 ? d`
                    <div class="sun-times">
                      <span title="${k("sunrise")}">
                        <ha-icon icon="mdi:weather-sunset-up"></ha-icon> ${v(u)}
                      </span>
                      <span title="${k("sunset")}">
                        <ha-icon icon="mdi:weather-sunset-down"></ha-icon> ${v(h)}
                      </span>
                    </div>
                  ` : ""}
              ${(this.config.forecast_mode || "daily") === "daily" && this._forecast.length > 0 ? d`
                    <div class="forecast-mini">
                      <daily-forecast-chart
                        .forecast=${this._forecast?.slice(0, 7) ?? []}
                        .forecastLoading=${this._forecastLoading}
                        .show_forecast=${this.config.show_forecast !== !1}
                        .config=${{ ...this.config, enable_animate_weather_icons: !0 }}
                        .compact=${!0}
                        .startTomorrow=${!0}
                        .maxDays=${5}
                        .alignRight=${!0}
                        ._t=${k}
                        .getWeatherIcon=${Me}
                        .formatDate=${Sr}
                      ></daily-forecast-chart>
                    </div>
                  ` : d``}
              ${(this.config.forecast_mode || "daily") === "hourly" && this._hourly.length > 0 ? d`
                    <div class="forecast-mini">
                      <hourly-forecast-chart
                        .hourlyForecast=${this._hourly}
                        .forecastLoading=${this._hourlyLoading}
                        .show_forecast=${this.config.show_forecast !== !1}
                        .config=${{ ...this.config, enable_animate_weather_icons: !0 }}
                        .compact=${!0}
                        .maxHours=${5}
                        .alignRight=${!0}
                        ._t=${k}
                        .getWeatherIcon=${Me}
                      ></hourly-forecast-chart>
                    </div>
                  ` : d``}
              <div class="condition">${k(s)}</div> ` : d``}
      </div>
    `;
  }
  // Load only the daily forecast via Home Assistant WS API
  async _loadDailyForecast() {
    if (!(!this.hass || !this.config?.entity || this._forecastLoading)) {
      this._forecastLoading = !0;
      try {
        const e = (await this.hass.callWS({
          type: "call_service",
          domain: "weather",
          service: "get_forecasts",
          service_data: {
            entity_id: this.config.entity,
            type: "daily"
          },
          return_response: !0
        }))?.response;
        e && e[this.config.entity] ? (this._forecast = e[this.config.entity].forecast || [], this.requestUpdate("_forecast")) : this._forecast = [];
      } catch (i) {
        console.warn("⚠️ BG Daily forecast loading failed:", i), this._forecast = [];
      } finally {
        this._forecastLoading = !1;
      }
    }
  }
  // Load only the hourly forecast via Home Assistant WS API
  async _loadHourlyForecast() {
    if (!(!this.hass || !this.config?.entity || this._hourlyLoading)) {
      this._hourlyLoading = !0;
      try {
        const e = (await this.hass.callWS({
          type: "call_service",
          domain: "weather",
          service: "get_forecasts",
          service_data: {
            entity_id: this.config.entity,
            type: "hourly"
          },
          return_response: !0
        }))?.response;
        e && e[this.config.entity] ? (this._hourly = e[this.config.entity].forecast || [], this.requestUpdate("_hourly")) : this._hourly = [];
      } catch (i) {
        console.warn("⚠️ BG Hourly forecast loading failed:", i), this._hourly = [];
      } finally {
        this._hourlyLoading = !1;
      }
    }
  }
};
Fe([
  m({ attribute: !1 })
], ve.prototype, "hass", 2);
Fe([
  m({ attribute: !1 })
], ve.prototype, "config", 2);
Fe([
  Cs(".temperature")
], ve.prototype, "_tempEl", 2);
Fe([
  X()
], ve.prototype, "_forecast", 2);
Fe([
  X()
], ve.prototype, "_hourly", 2);
ve = Fe([
  O(ye)
], ve);
console.log("✅ SwissWeatherCard (animated Background) fully loaded and registered");
var Jo = Object.defineProperty, ea = Object.getOwnPropertyDescriptor, Dt = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? ea(e, t) : e, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = (s ? o(e, t, r) : o(r)) || r);
  return s && r && Jo(e, t, r), r;
};
Pe({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => We[i]
});
let at = class extends N {
  hass;
  lovelace;
  _config;
  constructor() {
    super(), console.log("🎨 SwissweatherCardEditor (BG) constructor called");
  }
  setConfig(i) {
    const e = { ...i }, t = ["entity", "sun_entity"];
    for (const s of t)
      e[s] === "" && delete e[s];
    this._config = e, this.requestUpdate();
  }
  static get styles() {
    return D`
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
    lt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
    const i = {
      entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
      sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0,
      show_forecast: typeof this._config?.show_forecast == "boolean" ? this._config.show_forecast : void 0,
      forecast_mode: typeof this._config?.forecast_mode == "string" ? this._config.forecast_mode : void 0,
      show_sun_times: typeof this._config?.show_sun_times == "boolean" ? this._config.show_sun_times : void 0,
      show_day_temps: typeof this._config?.show_day_temps == "boolean" ? this._config.show_day_temps : void 0,
      temperature_font_size: typeof this._config?.temperature_font_size == "number" ? this._config.temperature_font_size : void 0
    };
    return d`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Animated Background Card (Experimental)</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${x("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${i}
            .schema=${[
      Q.find((e) => e.name === "entity"),
      Q.find((e) => e.name === "sun_entity"),
      Q.find((e) => e.name === "temperature_font_size")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Display -->
        <div class="group">
          <div class="group-title">${x("config.group_display") || "Display"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${i}
            .schema=${[
      Q.find((e) => e.name === "forecast_mode"),
      Q.find((e) => e.name === "show_forecast"),
      Q.find((e) => e.name === "show_day_temps"),
      Q.find((e) => e.name === "show_sun_times")
    ].filter(Boolean)}
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
    sun_entity: x("config.sun_entity"),
    show_forecast: x("config.show_forecast"),
    forecast_mode: x("config.forecast_mode"),
    show_day_temps: x("config.show_day_temps"),
    show_sun_times: x("config.show_sun_times"),
    temperature_font_size: x("config.temperature_font_size")
  })[i.name] || i.name;
  _computeHelper = (i) => i.description ? x(i.description) : "";
  _renderConfigPreview() {
    const i = { ...this._config };
    return i.type || (i.type = `custom:${ye}`), Object.keys(i).forEach((e) => {
      (i[e] === void 0 || i[e] === "") && delete i[e];
    }), Object.entries(i).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join(`
`);
  }
  _valueChanged(i) {
    if (this._config || (this._config = {
      type: `custom:${ye}`,
      entity: ""
    }), i.type === "value-changed") {
      const e = {}, { ...t } = i.detail.value || {}, s = {
        ...this._config,
        ...t,
        ...e,
        type: `custom:${ye}`
      };
      Object.keys(s).forEach((r) => {
        (s[r] === "" || s[r] === void 0) && delete s[r];
      }), this._config = s, kt(this, "config-changed", { config: this._config });
    }
  }
};
Dt([
  m({ attribute: !1 })
], at.prototype, "hass", 2);
Dt([
  m({ attribute: !1 })
], at.prototype, "lovelace", 2);
Dt([
  m({ attribute: !1 })
], at.prototype, "_config", 2);
at = Dt([
  O(Br)
], at);
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
gi({
  type: ct,
  name: "SwissWeather Diagram Card",
  description: "A comprehensive weather card for Home Assistant with Swiss weather warnings and forecasts"
});
gi({
  type: me,
  name: "SwissWeather Daily Forecast Diagram Card",
  description: "A card to show daily weather forecast as diagram"
});
gi({
  type: ye,
  name: "SwissWeather Animated Background Card (Experimental) Editor",
  description: "the SwissWeather Animated Background Card (Experimental)"
});
console.log(
  `%c 📦 SwissWeather Card module loading completed - version: ${ts}`,
  "color: #ef5350; font-weight: 700;"
);
export {
  G as DailyForecastChart,
  se as DailyForecastDiagram,
  _e as ForecastDiagramCard,
  ot as ForecastDiagramCardEditor,
  te as ForecastTemperatureChart,
  ie as PrecipitationChart,
  U as SunshineChart,
  ve as SwissWeatherBGCard,
  at as SwissWeatherBGCardEditor,
  ne as SwissWeatherCard,
  nt as SwissWeatherCardEditor,
  re as WindChart
};
//# sourceMappingURL=swissweather-card.js.map

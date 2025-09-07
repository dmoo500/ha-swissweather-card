/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ze = globalThis, kt = Ze.ShadowRoot && (Ze.ShadyCSS === void 0 || Ze.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ct = Symbol(), Xt = /* @__PURE__ */ new WeakMap();
let Sr = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ct) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (kt && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Xt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Xt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const gi = (r) => new Sr(typeof r == "string" ? r : r + "", void 0, Ct), j = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce(((n, i, s) => n + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[s + 1]), r[0]);
  return new Sr(t, r, Ct);
}, mi = (r, e) => {
  if (kt) r.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const n = document.createElement("style"), i = Ze.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, r.appendChild(n);
  }
}, Jt = kt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return gi(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: yi, defineProperty: wi, getOwnPropertyDescriptor: xi, getOwnPropertyNames: bi, getOwnPropertySymbols: vi, getPrototypeOf: _i } = Object, nt = globalThis, er = nt.trustedTypes, $i = er ? er.emptyScript : "", ki = nt.reactiveElementPolyfillSupport, Me = (r, e) => r, Qe = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? $i : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, At = (r, e) => !yi(r, e), tr = { attribute: !0, type: String, converter: Qe, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ??= Symbol("metadata"), nt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ue = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = tr) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), i = this.getPropertyDescriptor(e, n, t);
      i !== void 0 && wi(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: i, set: s } = xi(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get: i, set(a) {
      const o = i?.call(this);
      s?.call(this, a), this.requestUpdate(e, o, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? tr;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Me("elementProperties"))) return;
    const e = _i(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Me("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Me("properties"))) {
      const t = this.properties, n = [...bi(t), ...vi(t)];
      for (const i of n) this.createProperty(i, t[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, i] of t) this.elementProperties.set(n, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const i = this._$Eu(t, n);
      i !== void 0 && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const i of n) t.unshift(Jt(i));
    } else e !== void 0 && t.push(Jt(e));
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
    return mi(e, this.constructor.elementStyles), e;
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
    const n = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, n);
    if (i !== void 0 && n.reflect === !0) {
      const s = (n.converter?.toAttribute !== void 0 ? n.converter : Qe).toAttribute(t, n.type);
      this._$Em = e, s == null ? this.removeAttribute(i) : this.setAttribute(i, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const n = this.constructor, i = n._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const s = n.getPropertyOptions(i), a = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : Qe;
      this._$Em = i;
      const o = a.fromAttribute(t, s.type);
      this[i] = o ?? this._$Ej?.get(i) ?? o, this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      const i = this.constructor, s = this[e];
      if (n ??= i.getPropertyOptions(e), !((n.hasChanged ?? At)(s, t) || n.useDefault && n.reflect && s === this._$Ej?.get(e) && !this.hasAttribute(i._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: i, wrapped: s }, a) {
    n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), s !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), i === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
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
        for (const [i, s] of this._$Ep) this[i] = s;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [i, s] of n) {
        const { wrapped: a } = s, o = this[i];
        a !== !0 || this._$AL.has(i) || o === void 0 || this.C(i, void 0, s, o);
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
ue.elementStyles = [], ue.shadowRootOptions = { mode: "open" }, ue[Me("elementProperties")] = /* @__PURE__ */ new Map(), ue[Me("finalized")] = /* @__PURE__ */ new Map(), ki?.({ ReactiveElement: ue }), (nt.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const St = globalThis, Ye = St.trustedTypes, rr = Ye ? Ye.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Mr = "$lit$", Y = `lit$${Math.random().toFixed(9).slice(2)}$`, Tr = "?" + Y, Ci = `<${Tr}>`, oe = document, Le = () => oe.createComment(""), He = (r) => r === null || typeof r != "object" && typeof r != "function", Mt = Array.isArray, Ai = (r) => Mt(r) || typeof r?.[Symbol.iterator] == "function", ht = `[ 	
\f\r]`, ke = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ir = /-->/g, nr = />/g, ie = RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), sr = /'/g, ar = /"/g, Nr = /^(?:script|style|textarea|title)$/i, Lr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), d = Lr(1), y = Lr(2), fe = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), or = /* @__PURE__ */ new WeakMap(), se = oe.createTreeWalker(oe, 129);
function Hr(r, e) {
  if (!Mt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return rr !== void 0 ? rr.createHTML(e) : e;
}
const Si = (r, e) => {
  const t = r.length - 1, n = [];
  let i, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = ke;
  for (let o = 0; o < t; o++) {
    const l = r[o];
    let c, h, u = -1, p = 0;
    for (; p < l.length && (a.lastIndex = p, h = a.exec(l), h !== null); ) p = a.lastIndex, a === ke ? h[1] === "!--" ? a = ir : h[1] !== void 0 ? a = nr : h[2] !== void 0 ? (Nr.test(h[2]) && (i = RegExp("</" + h[2], "g")), a = ie) : h[3] !== void 0 && (a = ie) : a === ie ? h[0] === ">" ? (a = i ?? ke, u = -1) : h[1] === void 0 ? u = -2 : (u = a.lastIndex - h[2].length, c = h[1], a = h[3] === void 0 ? ie : h[3] === '"' ? ar : sr) : a === ar || a === sr ? a = ie : a === ir || a === nr ? a = ke : (a = ie, i = void 0);
    const g = a === ie && r[o + 1].startsWith("/>") ? " " : "";
    s += a === ke ? l + Ci : u >= 0 ? (n.push(c), l.slice(0, u) + Mr + l.slice(u) + Y + g) : l + Y + (u === -2 ? o : g);
  }
  return [Hr(r, s + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
let mt = class Er {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let s = 0, a = 0;
    const o = e.length - 1, l = this.parts, [c, h] = Si(e, t);
    if (this.el = Er.createElement(c, n), se.currentNode = this.el.content, t === 2 || t === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (i = se.nextNode()) !== null && l.length < o; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const u of i.getAttributeNames()) if (u.endsWith(Mr)) {
          const p = h[a++], g = i.getAttribute(u).split(Y), w = /([.?@])?(.*)/.exec(p);
          l.push({ type: 1, index: s, name: w[2], strings: g, ctor: w[1] === "." ? Ti : w[1] === "?" ? Ni : w[1] === "@" ? Li : st }), i.removeAttribute(u);
        } else u.startsWith(Y) && (l.push({ type: 6, index: s }), i.removeAttribute(u));
        if (Nr.test(i.tagName)) {
          const u = i.textContent.split(Y), p = u.length - 1;
          if (p > 0) {
            i.textContent = Ye ? Ye.emptyScript : "";
            for (let g = 0; g < p; g++) i.append(u[g], Le()), se.nextNode(), l.push({ type: 2, index: ++s });
            i.append(u[p], Le());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Tr) l.push({ type: 2, index: s });
      else {
        let u = -1;
        for (; (u = i.data.indexOf(Y, u + 1)) !== -1; ) l.push({ type: 7, index: s }), u += Y.length - 1;
      }
      s++;
    }
  }
  static createElement(e, t) {
    const n = oe.createElement("template");
    return n.innerHTML = e, n;
  }
};
function ge(r, e, t = r, n) {
  if (e === fe) return e;
  let i = n !== void 0 ? t._$Co?.[n] : t._$Cl;
  const s = He(e) ? void 0 : e._$litDirective$;
  return i?.constructor !== s && (i?._$AO?.(!1), s === void 0 ? i = void 0 : (i = new s(r), i._$AT(r, t, n)), n !== void 0 ? (t._$Co ??= [])[n] = i : t._$Cl = i), i !== void 0 && (e = ge(r, i._$AS(r, e.values), i, n)), e;
}
let Mi = class {
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
    const { el: { content: t }, parts: n } = this._$AD, i = (e?.creationScope ?? oe).importNode(t, !0);
    se.currentNode = i;
    let s = se.nextNode(), a = 0, o = 0, l = n[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let c;
        l.type === 2 ? c = new Tt(s, s.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(s, l.name, l.strings, this, e) : l.type === 6 && (c = new Hi(s, this, e)), this._$AV.push(c), l = n[++o];
      }
      a !== l?.index && (s = se.nextNode(), a++);
    }
    return se.currentNode = oe, i;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}, Tt = class zr {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, n, i) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cv = i?.isConnected ?? !0;
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
    e = ge(this, e, t), He(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== fe && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ai(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && He(this._$AH) ? this._$AA.nextSibling.data = e : this.T(oe.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: n } = e, i = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = mt.createElement(Hr(n.h, n.h[0]), this.options)), n);
    if (this._$AH?._$AD === i) this._$AH.p(t);
    else {
      const s = new Mi(i, this), a = s.u(this.options);
      s.p(t), this.T(a), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = or.get(e.strings);
    return t === void 0 && or.set(e.strings, t = new mt(e)), t;
  }
  k(e) {
    Mt(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const s of e) i === t.length ? t.push(n = new zr(this.O(Le()), this.O(Le()), this, this.options)) : n = t[i], n._$AI(s), i++;
    i < t.length && (this._$AR(n && n._$AB.nextSibling, i), t.length = i);
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
}, st = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, i, s) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = s, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(e, t = this, n, i) {
    const s = this.strings;
    let a = !1;
    if (s === void 0) e = ge(this, e, t, 0), a = !He(e) || e !== this._$AH && e !== fe, a && (this._$AH = e);
    else {
      const o = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++) c = ge(this, o[n + l], t, l), c === fe && (c = this._$AH[l]), a ||= !He(c) || c !== this._$AH[l], c === T ? e = T : e !== T && (e += (c ?? "") + s[l + 1]), this._$AH[l] = c;
    }
    a && !i && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, Ti = class extends st {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}, Ni = class extends st {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}, Li = class extends st {
  constructor(e, t, n, i, s) {
    super(e, t, n, i, s), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ge(this, e, t, 0) ?? T) === fe) return;
    const n = this._$AH, i = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, s = e !== T && (n === T || i);
    i && this.element.removeEventListener(this.name, this, n), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, Hi = class {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ge(this, e);
  }
};
const Ei = St.litHtmlPolyfillSupport;
Ei?.(mt, Tt), (St.litHtmlVersions ??= []).push("3.3.1");
const zi = (r, e, t) => {
  const n = t?.renderBefore ?? e;
  let i = n._$litPart$;
  if (i === void 0) {
    const s = t?.renderBefore ?? null;
    n._$litPart$ = i = new Tt(e.insertBefore(Le(), s), s, void 0, t ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = globalThis;
let G = class extends ue {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = zi(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return fe;
  }
};
G._$litElement$ = !0, G.finalized = !0, Nt.litElementHydrateSupport?.({ LitElement: G });
const Gi = Nt.litElementPolyfillSupport;
Gi?.({ LitElement: G });
(Nt.litElementVersions ??= []).push("4.2.1");
function je(r, e, t) {
  const n = /* @__PURE__ */ new Date();
  return d`
    <div class="chart-labels">
      ${Array.from({ length: r }, (i, s) => {
    const o = new Date(n.getTime() + s * 60 * 60 * 1e3).toLocaleTimeString([], { hour: "2-digit" });
    return d`
          <div
            style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
          >
            <span>${o}</span>
          </div>
        `;
  })}
    </div>
  `;
}
const Lt = {
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
    lightning: "Blitz",
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
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = (r) => (e, t) => {
  t !== void 0 ? t.addInitializer((() => {
    customElements.define(r, e);
  })) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wi = { attribute: !0, type: String, converter: Qe, reflect: !1, hasChanged: At }, Oi = (r = Wi, e, t) => {
  const { kind: n, metadata: i } = t;
  let s = globalThis.litPropertyMetadata.get(i);
  if (s === void 0 && globalThis.litPropertyMetadata.set(i, s = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), s.set(t.name, r), n === "accessor") {
    const { name: a } = t;
    return { set(o) {
      const l = e.get.call(this);
      e.set.call(this, o), this.requestUpdate(a, l, r);
    }, init(o) {
      return o !== void 0 && this.C(a, void 0, r, o), o;
    } };
  }
  if (n === "setter") {
    const { name: a } = t;
    return function(o) {
      const l = this[a];
      e.call(this, o), this.requestUpdate(a, l, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function m(r) {
  return (e, t) => typeof t == "object" ? Oi(r, e, t) : ((n, i, s) => {
    const a = i.hasOwnProperty(s);
    return i.constructor.createProperty(s, n), a ? Object.getOwnPropertyDescriptor(i, s) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function at(r) {
  return m({ ...r, state: !0, attribute: !1 });
}
var Gr = Object.defineProperty, Ri = Object.getOwnPropertyDescriptor, Di = (r, e, t) => e in r ? Gr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Z = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Ri(e, t) : e, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (i = (n ? a(e, t, i) : a(i)) || i);
  return n && i && Gr(e, t, i), i;
}, Pi = (r, e, t) => Di(r, e + "", t);
let R = class extends G {
  forecast = [];
  forecastLoading = !1;
  show_forecast = !0;
  config = {};
  _t;
  getWeatherIcon;
  isDay;
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
      (r) => d`
                      <div class="forecast-day">
                        <div class="forecast-date">${this.formatDate(r.datetime)}</div>
                        <div class="forecast-icon">
                          ${this.getWeatherIcon(
        r.condition,
        this.config.enable_animate_weather_icons ? "animated" : "mdi",
        "24px",
        this.isDay()
      )}
                        </div>
                        <div class="forecast-temps">
                          <span class="temp-high">${Math.round(r.temperature)}°</span>
                          <span class="temp-low"
                            >${Math.round(r.templow || r.temperature - 5)}°</span
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
Pi(R, "styles", j`
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
    @media (max-width: 768px) {
      .forecast-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `);
Z([
  m({ type: Array })
], R.prototype, "forecast", 2);
Z([
  m({ type: Boolean })
], R.prototype, "forecastLoading", 2);
Z([
  m({ type: Boolean })
], R.prototype, "show_forecast", 2);
Z([
  m({ type: Object })
], R.prototype, "config", 2);
Z([
  m({ type: Function })
], R.prototype, "_t", 2);
Z([
  m({ type: Function })
], R.prototype, "getWeatherIcon", 2);
Z([
  m({ type: Function })
], R.prototype, "isDay", 2);
Z([
  m({ type: Function })
], R.prototype, "formatDate", 2);
R = Z([
  V("daily-forecast-chart")
], R);
var Wr = Object.defineProperty, Ii = Object.getOwnPropertyDescriptor, Ui = (r, e, t) => e in r ? Wr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, xe = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Ii(e, t) : e, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (i = (n ? a(e, t, i) : a(i)) || i);
  return n && i && Wr(e, t, i), i;
}, Fi = (r, e, t) => Ui(r, e + "", t);
let X = class extends G {
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
          ${this.hourlyForecast.slice(0, this.forecastHours).map((r) => {
      const e = typeof r.temperature == "number" && !isNaN(r.temperature) ? r.temperature : null;
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
      const r = this.hourlyForecast.slice(0, this.forecastHours).map(
        (p) => typeof p.temperature == "number" && !isNaN(p.temperature) ? p.temperature : null
      ), e = r.filter((p) => p !== null);
      if (e.length < 2) return "";
      const t = Math.min(...e), i = Math.max(...e) - t || 1, s = r.length, a = Math.max(360, Math.min(1600, s * 250)), o = 50, l = a / (s - 1), c = r.map((p, g) => p !== null ? `${g * l},${o - (p - t) / i * o}` : "").filter(Boolean).join(" "), h = this.forecastHours === 6 ? "84%" : this.forecastHours - 6 + 84 + "%", u = this.forecastHours === 6 ? "8%" : (18 - this.forecastHours) * 0.5 + 2 + "%";
      return y`<svg width="${h}" height="${o}" viewBox="0 0 ${a} ${o}" preserveAspectRatio="none" style="display:block;padding-left:${u};">
                <polyline points="${c}" fill="none" stroke="#db4a34" stroke-width="3" />
                ${r.map((p, g) => p !== null ? y`<circle r="3" fill="#db4a34" cx="${g * l}" cy="${o - (p - t) / i * o}" />` : null)}
                </svg>`;
    })()}
        </div>
        ${this.showHoursChartLabel(this.forecastHours)}
      </div>
    `;
  }
};
Fi(X, "styles", j`
    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: var(--primary-text-color, #fff);
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
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
xe([
  m({ type: Array })
], X.prototype, "hourlyForecast", 2);
xe([
  m({ type: Number })
], X.prototype, "forecastHours", 2);
xe([
  m({ type: Boolean })
], X.prototype, "show_temperature", 2);
xe([
  m({ type: Function })
], X.prototype, "_t", 2);
xe([
  m({ type: Function })
], X.prototype, "showHoursChartLabel", 2);
X = xe([
  V("forecast-temperature-chart")
], X);
var Or = Object.defineProperty, Bi = Object.getOwnPropertyDescriptor, ji = (r, e, t) => e in r ? Or(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, be = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Bi(e, t) : e, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (i = (n ? a(e, t, i) : a(i)) || i);
  return n && i && Or(e, t, i), i;
}, Vi = (r, e, t) => ji(r, e + "", t);
let J = class extends G {
  hourlyForecast = [];
  forecastHours = 12;
  show_precipitation = !0;
  _t;
  showHoursChartLabel;
  render() {
    return this.show_precipitation === !1 ? d`` : this.hourlyForecast.length === 0 || !this.hourlyForecast.slice(0, this.forecastHours).some((r) => typeof r.precipitation == "number" && !isNaN(r.precipitation)) ? d`
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
          ${this.hourlyForecast.slice(0, this.forecastHours).map((r) => {
      const e = typeof r.precipitation == "number" && !isNaN(r.precipitation) ? r.precipitation : null, t = e !== null ? Math.round(e) : 2, n = typeof r.precipitation_probability == "number" && !isNaN(r.precipitation_probability) ? r.precipitation_probability : null, i = n !== null ? Math.round(n % 10) : 2;
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
                  style="height: ${i}px; position:absolute; bottom:0; left:50%; transform:translateX(-50%); z-index:0; width:18px;"
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
Vi(J, "styles", j`
    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: var(--primary-text-color, #fff);
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
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
be([
  m({ type: Array })
], J.prototype, "hourlyForecast", 2);
be([
  m({ type: Number })
], J.prototype, "forecastHours", 2);
be([
  m({ type: Boolean })
], J.prototype, "show_precipitation", 2);
be([
  m({ type: Function })
], J.prototype, "_t", 2);
be([
  m({ type: Function })
], J.prototype, "showHoursChartLabel", 2);
J = be([
  V("precipitation-chart")
], J);
var Rr = Object.defineProperty, Zi = Object.getOwnPropertyDescriptor, qi = (r, e, t) => e in r ? Rr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, re = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Zi(e, t) : e, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (i = (n ? a(e, t, i) : a(i)) || i);
  return n && i && Rr(e, t, i), i;
}, Qi = (r, e, t) => qi(r, e + "", t);
let P = class extends G {
  hourlyForecast = [];
  forecastHours = 12;
  show_sunshine = !0;
  weatherEntity;
  sun_entity;
  _t;
  showHoursChartLabel;
  render() {
    return this.show_sunshine !== !1 ? this.hourlyForecast.length > 0 && this.hourlyForecast.slice(0, this.forecastHours).some((r) => {
      const e = r;
      return typeof e.sunshine == "number" && !isNaN(e.sunshine) || typeof e.sunshine_duration == "number" && !isNaN(e.sunshine_duration);
    }) ? d`
            <div class="chart-sunshine" style="position:relative;">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${this._t("sunshine_hours", { hours: this.forecastHours })}
              </div>
              <div class="chart-bars" style="position:relative;">
                ${(() => {
      const r = this.weatherEntity?.attributes?.sunrise ? new Date(this.weatherEntity.attributes.sunrise) : new Date((this.sun_entity?.attributes).next_rising) || null, e = this.weatherEntity?.attributes?.sunset ? new Date(this.weatherEntity.attributes.sunset) : new Date((this.sun_entity?.attributes).next_setting) || null, t = this.hourlyForecast[0]?.datetime ? new Date(this.hourlyForecast[0].datetime) : null;
      let n = -1, i = -1;
      return r && t && (n = Math.round(
        (r.getTime() - t.getTime()) / (3600 * 1e3)
      )), e && t && (i = Math.round(
        (e.getTime() - t.getTime()) / (3600 * 1e3)
      )), d`
                    ${n >= 0 && n < this.forecastHours ? d`
                          <div
                            style="position:absolute;left:calc(${n / this.forecastHours * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-up"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d">
                              ${r ? r.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      }) : ""}</span
                            >
                          </div>
                        ` : ""}
                    ${i >= 0 && i < this.forecastHours ? d`
                          <div
                            style="position:absolute;left:calc(${i / this.forecastHours * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
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
                ${this.hourlyForecast.slice(0, this.forecastHours).map((r) => {
      const e = r, t = typeof e.sunshine == "number" && !isNaN(e.sunshine) ? e.sunshine : typeof e.sunshine_duration == "number" && !isNaN(e.sunshine_duration) ? e.sunshine_duration : null, n = t !== null ? Math.round(t) : 2;
      return d`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#fbc02d; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${t !== null ? t.toFixed(0) + " min" : ""}
                      </span>
                      <div class="chart-bar-sunshine" style="height: ${n}px;"></div>
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
Qi(P, "styles", j`
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
      color: var(--primary-text-color, #000);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-title ha-icon {
      color: var(--primary-color, #dc143c);
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
re([
  m({ type: Array })
], P.prototype, "hourlyForecast", 2);
re([
  m({ type: Number })
], P.prototype, "forecastHours", 2);
re([
  m({ type: Boolean })
], P.prototype, "show_sunshine", 2);
re([
  m({ type: Object })
], P.prototype, "weatherEntity", 2);
re([
  m({ type: Object })
], P.prototype, "sun_entity", 2);
re([
  m({ type: Function })
], P.prototype, "_t", 2);
re([
  m({ type: Function })
], P.prototype, "showHoursChartLabel", 2);
P = re([
  V("sunshine-chart")
], P);
var Dr = Object.defineProperty, Yi = Object.getOwnPropertyDescriptor, Ki = (r, e, t) => e in r ? Dr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ve = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Yi(e, t) : e, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (i = (n ? a(e, t, i) : a(i)) || i);
  return n && i && Dr(e, t, i), i;
}, Xi = (r, e, t) => Ki(r, e + "", t);
let ee = class extends G {
  hourlyForecast = [];
  forecastHours = 12;
  show_wind = !0;
  _t;
  showHoursChartLabel;
  render() {
    return this.show_wind !== !1 ? this.hourlyForecast.length > 0 && this.hourlyForecast.slice(0, this.forecastHours).some((r) => typeof r.wind_speed == "number" && !isNaN(r.wind_speed)) ? d`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-windy"></ha-icon>
                ${this._t("wind_hours", { hours: this.forecastHours })}
              </div>
              <div class="chart-line-wind" style="position:relative;">
                ${this.hourlyForecast.slice(0, this.forecastHours).map((r) => {
      const e = typeof r.wind_speed == "number" && !isNaN(r.wind_speed) ? r.wind_speed : null;
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
                ${this.hourlyForecast.slice(0, this.forecastHours).map((r) => {
      const e = typeof r.wind_bearing == "number" && !isNaN(r.wind_bearing) ? r.wind_bearing : null;
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
      const r = this.hourlyForecast.slice(0, this.forecastHours).map(
        (p) => typeof p.wind_speed == "number" && !isNaN(p.wind_speed) ? p.wind_speed : null
      ), e = r.filter((p) => p !== null);
      if (e.length < 2) return "";
      const t = Math.min(...e), i = Math.max(...e) - t || 1, s = r.length, a = Math.max(360, Math.min(1600, s * 250)), o = 50, l = a / (s - 1), c = r.map((p, g) => p !== null ? `${g * l},${o - (p - t) / i * o}` : "").filter(Boolean).join(" "), h = this.forecastHours === 6 ? "84%" : this.forecastHours - 6 + 84 + "%", u = this.forecastHours === 6 ? "8%" : (18 - this.forecastHours) * 0.5 + 2 + "%";
      return y`<svg width="${h}" height="${o}" viewBox="0 0 ${a} ${o}" preserveAspectRatio="none" style="display:block;padding-left:${u};">
                <polyline points="${c}" fill="none" stroke="#44739e" stroke-width="3" />
                ${r.map((p, g) => p !== null ? y`<circle r="3" fill="#44739e" cx="${g * l}" cy="${o - (p - t) / i * o}" />` : null)}
              </svg>`;
    })()}
              </div>
              ${this.showHoursChartLabel(this.forecastHours)}
            </div>
          ` : d`` : d``;
  }
};
Xi(ee, "styles", j`
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
      color: var(--primary-text-color, #000);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-title ha-icon {
      color: var(--primary-color, #dc143c);
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
ve([
  m({ type: Array })
], ee.prototype, "hourlyForecast", 2);
ve([
  m({ type: Number })
], ee.prototype, "forecastHours", 2);
ve([
  m({ type: Boolean })
], ee.prototype, "show_wind", 2);
ve([
  m({ type: Function })
], ee.prototype, "_t", 2);
ve([
  m({ type: Function })
], ee.prototype, "showHoursChartLabel", 2);
ee = ve([
  V("wind-chart")
], ee);
var Pr = Object.defineProperty, Ji = Object.getOwnPropertyDescriptor, en = (r, e, t) => e in r ? Pr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, We = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Ji(e, t) : e, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (i = (n ? a(e, t, i) : a(i)) || i);
  return n && i && Pr(e, t, i), i;
}, tn = (r, e, t) => en(r, e + "", t);
let le = class extends G {
  forecast = [];
  hourlyForecast = [];
  config;
  getWeatherIcon;
  render() {
    const r = this.forecast.slice(0, 7), e = this.hourlyForecast.slice(0, r.length * 24);
    if (!e.length) return d`<div>No hourly forecast available</div>`;
    const t = r.length, n = Math.max(180, t * 100), i = t > 0 ? n / t : 100, s = 200, o = i / 24;
    let l = 0;
    if (e.length > 0 && e[0].datetime) {
      const f = new Date(e[0].datetime);
      l = new Date(f.getFullYear(), f.getMonth(), f.getDate()).getTime();
    }
    const c = e.map((f) => typeof f.temperature == "number" ? f.temperature : null);
    let h = Math.min(...c.filter((f) => f !== null));
    const u = Math.max(...c.filter((f) => f !== null));
    h > 0 && (h = 0);
    const p = 13, g = 64, w = 20, $ = 18, I = 8, _e = $ + p + I + g + I + 2, Re = 32, De = 60, W = _e + Re, z = W + De, q = u - h || 1, Q = e.map((f) => typeof f.precipitation == "number" ? f.precipitation : 0), Bt = e.map(
      (f) => typeof f.precipitation_probability == "number" ? f.precipitation_probability % 10 : 0
    ), Pe = Math.max(...Q, ...Bt, 1);
    function Ie(f, x) {
      const S = new Date(f.getFullYear(), f.getMonth(), f.getDate()).getTime(), L = Math.round((S - x) / 864e5), O = Math.round((f.getTime() - S) / (3600 * 1e3));
      return { dayIdx: L, hourInDay: O };
    }
    const ci = c.map((f, x) => {
      if (!e[x] || !e[x].datetime) return "";
      const C = new Date(e[x].datetime), { dayIdx: S, hourInDay: L } = Ie(C, l), O = S * i + L * o + o / 2;
      return f !== null ? `${O},${z - (f - h) / q * (z - W)}` : "";
    }).filter(Boolean).join(" "), Ue = Math.max(3, Math.floor(o) - 2), jt = z, Vt = z - W;
    function di(f) {
      if (f <= 0) return "transparent";
      const x = [
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
      let C = x[0], S = x[x.length - 1];
      for (let $e = 1; $e < x.length; $e++)
        if (f < x[$e].val) {
          S = x[$e], C = x[$e - 1];
          break;
        }
      const L = (f - C.val) / (S.val - C.val), O = Math.round(C.color.r + (S.color.r - C.color.r) * L), U = Math.round(C.color.g + (S.color.g - C.color.g) * L), Be = Math.round(C.color.b + (S.color.b - C.color.b) * L);
      return `rgb(${O},${U},${Be})`;
    }
    const hi = Bt.map((f, x) => {
      if (!e[x] || !e[x].datetime) return null;
      const C = new Date(e[x].datetime), { dayIdx: S, hourInDay: L } = Ie(C, l), O = S * i + L * o + o / 2 - Ue / 2, U = Pe > 0 ? f / Pe * Vt : 0;
      return f > 0 ? y`<rect x="${O}" y="${jt - U}" width="${Ue}" height="${U}"
          fill="#988d8dff" opacity="0.4" rx="1.5"/>` : null;
    }), pi = Q.map((f, x) => {
      if (!e[x] || !e[x].datetime) return null;
      const C = new Date(e[x].datetime), { dayIdx: S, hourInDay: L } = Ie(C, l), O = S * i + L * o + o / 2 - Ue / 2, U = Pe > 0 ? f / Pe * Vt : 0, Be = di(f);
      return f > 0 ? y`<rect x="${O}" y="${jt - U}" width="${Ue}" height="${U}"
          fill="${Be}" opacity="1" rx="1.5"/>` : null;
    }), Zt = [];
    if (t > 1 && e.length > 0)
      for (let f = 1; f < t; f++) {
        const x = new Date(l + f * 24 * 60 * 60 * 1e3), { dayIdx: C, hourInDay: S } = Ie(x, l), L = C * i + S * o;
        Zt.push(
          y`<line x1="${L}" y1="16" x2="${L}" y2="${s - 16}" stroke="#bbb" stroke-width="1" stroke-dasharray="2,2"/>`
        );
      }
    const qt = [], Qt = 6;
    if (t > 0)
      for (let f = 0; f < t; f++) {
        const x = f * i + i / 2, C = $ + p, S = C + I + Qt, L = S + g + I + Qt + 2, O = typeof r[f].templow == "number" ? Math.round(r[f].templow || r[f].temperature - 5) : "", U = typeof r[f].temperature == "number" ? Math.round(r[f].temperature) : "";
        qt.push(y`
        <g>
          <!-- Weekday -->
          <text x="${x}" y="${C}" text-anchor="middle" font-size="${p}" fill="#888">
            ${new Date(r[f].datetime).toLocaleDateString(void 0, { weekday: "short" })}
          </text>
          <!-- Icon -->
          <foreignObject x="${x - g / 2}" y="${S}" width="${g}" height="${g}">
              ${this.getWeatherIcon(r[f].condition || "", this.config.enable_animate_weather_icons ? "animated" : "mdiAsSVG", g + "px", !0)}
          </foreignObject>
          <!-- Min/Max temp -->
          <text class="weather-temp" x="${x}" y="${L}" text-anchor="middle" font-size="${w}"">${O}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${U}°</tspan></text>
        </g>
      `);
      }
    const Yt = [], Kt = 5 / q * (z - W), ui = Math.floor((z - W) / Kt), Fe = /* @__PURE__ */ new Set();
    for (let f = 0; f <= ui; f++)
      Fe.add(z - f * Kt);
    if (h > 0) {
      const f = z - (0 - h) / q * (z - W);
      f <= z && f >= W && Fe.add(f);
    }
    const fi = z - (h - h) / q * (z - W);
    return Fe.add(fi), Array.from(Fe).sort((f, x) => x - f).forEach((f, x) => {
      Yt.push(
        y`<line x1="0" y1="${f}" x2="${n}" y2="${f}" stroke="#bbb" stroke-width="${x % 2 === 0 ? 2 : 1}" stroke-dasharray="${x % 2 === 0 ? "none" : "4,3"}" />`
      );
    }), d`
      <div class="chart">
        <svg width="100%" height="100%" viewBox="0 0 ${n} ${s}" style="display:block;">
          ${Yt} ${qt} ${Zt} ${hi}
          <!-- Precipitation bars -->
          ${pi}

          <polyline points="${ci}" fill="none" stroke="#e74c3c" stroke-width="2" />
        </svg>
      </div>
    `;
  }
};
tn(le, "styles", j`
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
    .weather-temp {
      fill: var(--primary-text-color, #fff);
    }
  `);
We([
  m({ type: Array })
], le.prototype, "forecast", 2);
We([
  m({ type: Array })
], le.prototype, "hourlyForecast", 2);
We([
  m({ type: Object })
], le.prototype, "config", 2);
We([
  m({ type: Function })
], le.prototype, "getWeatherIcon", 2);
le = We([
  V("daily-forecast-diagram")
], le);
const yt = "langChanged";
function rn(r, e, t) {
  return Object.entries(wt(e || {})).reduce((n, [i, s]) => n.replace(new RegExp(`{{[  ]*${i}[  ]*}}`, "gm"), String(wt(s))), r);
}
function nn(r, e) {
  const t = r.split(".");
  let n = e.strings;
  for (; n != null && t.length > 0; )
    n = n[t.shift()];
  return n != null ? n.toString() : null;
}
function wt(r) {
  return typeof r == "function" ? r() : r;
}
const sn = () => ({
  loader: () => Promise.resolve({}),
  empty: (r) => `[${r}]`,
  lookup: nn,
  interpolate: rn,
  translationCache: {}
});
let Ee = sn();
function Ht(r) {
  return Ee = Object.assign(Object.assign({}, Ee), r);
}
function an(r) {
  window.dispatchEvent(new CustomEvent(yt, { detail: r }));
}
function on(r, e, t = Ee) {
  an({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = r,
    strings: t.strings = e
  });
}
function ln(r, e) {
  const t = (n) => r(n.detail);
  return window.addEventListener(yt, t, e), () => window.removeEventListener(yt, t);
}
async function Et(r, e = Ee) {
  const t = await e.loader(r, e);
  e.translationCache = {}, on(r, t, e);
}
function b(r, e, t = Ee) {
  let n = t.translationCache[r] || (t.translationCache[r] = t.lookup(r, t) || t.empty(r, t));
  return e = e != null ? wt(e) : null, e != null ? t.interpolate(n, e, t) : n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ir = { CHILD: 2 }, cn = (r) => (...e) => ({ _$litDirective$: r, values: e });
let Ur = class {
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
var pt;
const Ke = window, me = Ke.trustedTypes, lr = me ? me.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, xt = "$lit$", K = `lit$${(Math.random() + "").slice(9)}$`, Fr = "?" + K, dn = `<${Fr}>`, ce = document, Xe = () => ce.createComment(""), ze = (r) => r === null || typeof r != "object" && typeof r != "function", Br = Array.isArray, hn = (r) => Br(r) || typeof r?.[Symbol.iterator] == "function", ut = `[ 	
\f\r]`, Ce = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, cr = /-->/g, dr = />/g, ne = RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), hr = /'/g, pr = /"/g, jr = /^(?:script|style|textarea|title)$/i, ye = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), ur = /* @__PURE__ */ new WeakMap(), ae = ce.createTreeWalker(ce, 129, null, !1);
function Vr(r, e) {
  if (!Array.isArray(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return lr !== void 0 ? lr.createHTML(e) : e;
}
const pn = (r, e) => {
  const t = r.length - 1, n = [];
  let i, s = e === 2 ? "<svg>" : "", a = Ce;
  for (let o = 0; o < t; o++) {
    const l = r[o];
    let c, h, u = -1, p = 0;
    for (; p < l.length && (a.lastIndex = p, h = a.exec(l), h !== null); ) p = a.lastIndex, a === Ce ? h[1] === "!--" ? a = cr : h[1] !== void 0 ? a = dr : h[2] !== void 0 ? (jr.test(h[2]) && (i = RegExp("</" + h[2], "g")), a = ne) : h[3] !== void 0 && (a = ne) : a === ne ? h[0] === ">" ? (a = i ?? Ce, u = -1) : h[1] === void 0 ? u = -2 : (u = a.lastIndex - h[2].length, c = h[1], a = h[3] === void 0 ? ne : h[3] === '"' ? pr : hr) : a === pr || a === hr ? a = ne : a === cr || a === dr ? a = Ce : (a = ne, i = void 0);
    const g = a === ne && r[o + 1].startsWith("/>") ? " " : "";
    s += a === Ce ? l + dn : u >= 0 ? (n.push(c), l.slice(0, u) + xt + l.slice(u) + K + g) : l + K + (u === -2 ? (n.push(void 0), o) : g);
  }
  return [Vr(r, s + (r[t] || "<?>") + (e === 2 ? "</svg>" : "")), n];
};
let bt = class Zr {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let s = 0, a = 0;
    const o = e.length - 1, l = this.parts, [c, h] = pn(e, t);
    if (this.el = Zr.createElement(c, n), ae.currentNode = this.el.content, t === 2) {
      const u = this.el.content, p = u.firstChild;
      p.remove(), u.append(...p.childNodes);
    }
    for (; (i = ae.nextNode()) !== null && l.length < o; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const u = [];
          for (const p of i.getAttributeNames()) if (p.endsWith(xt) || p.startsWith(K)) {
            const g = h[a++];
            if (u.push(p), g !== void 0) {
              const w = i.getAttribute(g.toLowerCase() + xt).split(K), $ = /([.?@])?(.*)/.exec(g);
              l.push({ type: 1, index: s, name: $[2], strings: w, ctor: $[1] === "." ? fn : $[1] === "?" ? mn : $[1] === "@" ? yn : ot });
            } else l.push({ type: 6, index: s });
          }
          for (const p of u) i.removeAttribute(p);
        }
        if (jr.test(i.tagName)) {
          const u = i.textContent.split(K), p = u.length - 1;
          if (p > 0) {
            i.textContent = me ? me.emptyScript : "";
            for (let g = 0; g < p; g++) i.append(u[g], Xe()), ae.nextNode(), l.push({ type: 2, index: ++s });
            i.append(u[p], Xe());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Fr) l.push({ type: 2, index: s });
      else {
        let u = -1;
        for (; (u = i.data.indexOf(K, u + 1)) !== -1; ) l.push({ type: 7, index: s }), u += K.length - 1;
      }
      s++;
    }
  }
  static createElement(e, t) {
    const n = ce.createElement("template");
    return n.innerHTML = e, n;
  }
};
function we(r, e, t = r, n) {
  var i, s, a, o;
  if (e === ye) return e;
  let l = n !== void 0 ? (i = t._$Co) === null || i === void 0 ? void 0 : i[n] : t._$Cl;
  const c = ze(e) ? void 0 : e._$litDirective$;
  return l?.constructor !== c && ((s = l?._$AO) === null || s === void 0 || s.call(l, !1), c === void 0 ? l = void 0 : (l = new c(r), l._$AT(r, t, n)), n !== void 0 ? ((a = (o = t)._$Co) !== null && a !== void 0 ? a : o._$Co = [])[n] = l : t._$Cl = l), l !== void 0 && (e = we(r, l._$AS(r, e.values), l, n)), e;
}
let un = class {
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
    const { el: { content: n }, parts: i } = this._$AD, s = ((t = e?.creationScope) !== null && t !== void 0 ? t : ce).importNode(n, !0);
    ae.currentNode = s;
    let a = ae.nextNode(), o = 0, l = 0, c = i[0];
    for (; c !== void 0; ) {
      if (o === c.index) {
        let h;
        c.type === 2 ? h = new qr(a, a.nextSibling, this, e) : c.type === 1 ? h = new c.ctor(a, c.name, c.strings, this, e) : c.type === 6 && (h = new wn(a, this, e)), this._$AV.push(h), c = i[++l];
      }
      o !== c?.index && (a = ae.nextNode(), o++);
    }
    return ae.currentNode = ce, s;
  }
  v(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}, qr = class Qr {
  constructor(e, t, n, i) {
    var s;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cp = (s = i?.isConnected) === null || s === void 0 || s;
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
    e = we(this, e, t), ze(e) ? e === A || e == null || e === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : e !== this._$AH && e !== ye && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : hn(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== A && ze(this._$AH) ? this._$AA.nextSibling.data = e : this.$(ce.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var t;
    const { values: n, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = bt.createElement(Vr(i.h, i.h[0]), this.options)), i);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === s) this._$AH.v(n);
    else {
      const a = new un(s, this), o = a.u(this.options);
      a.v(n), this.$(o), this._$AH = a;
    }
  }
  _$AC(e) {
    let t = ur.get(e.strings);
    return t === void 0 && ur.set(e.strings, t = new bt(e)), t;
  }
  T(e) {
    Br(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const s of e) i === t.length ? t.push(n = new Qr(this.k(Xe()), this.k(Xe()), this, this.options)) : n = t[i], n._$AI(s), i++;
    i < t.length && (this._$AR(n && n._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cp = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
};
class ot {
  constructor(e, t, n, i, s) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = s, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, n, i) {
    const s = this.strings;
    let a = !1;
    if (s === void 0) e = we(this, e, t, 0), a = !ze(e) || e !== this._$AH && e !== ye, a && (this._$AH = e);
    else {
      const o = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++) c = we(this, o[n + l], t, l), c === ye && (c = this._$AH[l]), a || (a = !ze(c) || c !== this._$AH[l]), c === A ? e = A : e !== A && (e += (c ?? "") + s[l + 1]), this._$AH[l] = c;
    }
    a && !i && this.j(e);
  }
  j(e) {
    e === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
let fn = class extends ot {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === A ? void 0 : e;
  }
};
const gn = me ? me.emptyScript : "";
let mn = class extends ot {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== A ? this.element.setAttribute(this.name, gn) : this.element.removeAttribute(this.name);
  }
}, yn = class extends ot {
  constructor(e, t, n, i, s) {
    super(e, t, n, i, s), this.type = 5;
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = we(this, e, t, 0)) !== null && n !== void 0 ? n : A) === ye) return;
    const i = this._$AH, s = e === A && i !== A || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, a = e !== A && (i === A || s);
    s && this.element.removeEventListener(this.name, this, i), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && n !== void 0 ? n : this.element, e) : this._$AH.handleEvent(e);
  }
};
class wn {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    we(this, e);
  }
}
const fr = Ke.litHtmlPolyfillSupport;
fr?.(bt, qr), ((pt = Ke.litHtmlVersions) !== null && pt !== void 0 ? pt : Ke.litHtmlVersions = []).push("2.8.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xn = (r) => r.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Te = (r, e) => {
  var t, n;
  const i = r._$AN;
  if (i === void 0) return !1;
  for (const s of i) (n = (t = s)._$AO) === null || n === void 0 || n.call(t, e, !1), Te(s, e);
  return !0;
}, Je = (r) => {
  let e, t;
  do {
    if ((e = r._$AM) === void 0) break;
    t = e._$AN, t.delete(r), r = e;
  } while (t?.size === 0);
}, Yr = (r) => {
  for (let e; e = r._$AM; r = e) {
    let t = e._$AN;
    if (t === void 0) e._$AN = t = /* @__PURE__ */ new Set();
    else if (t.has(r)) break;
    t.add(r), _n(e);
  }
};
function bn(r) {
  this._$AN !== void 0 ? (Je(this), this._$AM = r, Yr(this)) : this._$AM = r;
}
function vn(r, e = !1, t = 0) {
  const n = this._$AH, i = this._$AN;
  if (i !== void 0 && i.size !== 0) if (e) if (Array.isArray(n)) for (let s = t; s < n.length; s++) Te(n[s], !1), Je(n[s]);
  else n != null && (Te(n, !1), Je(n));
  else Te(this, r);
}
const _n = (r) => {
  var e, t, n, i;
  r.type == Ir.CHILD && ((e = (n = r)._$AP) !== null && e !== void 0 || (n._$AP = vn), (t = (i = r)._$AQ) !== null && t !== void 0 || (i._$AQ = bn));
};
class $n extends Ur {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, t, n) {
    super._$AT(e, t, n), Yr(this), this.isConnected = e._$AU;
  }
  _$AO(e, t = !0) {
    var n, i;
    e !== this.isConnected && (this.isConnected = e, e ? (n = this.reconnected) === null || n === void 0 || n.call(this) : (i = this.disconnected) === null || i === void 0 || i.call(this)), t && (Te(this, e), Je(this));
  }
  setValue(e) {
    if (xn(this._$Ct)) this._$Ct._$AI(e, this);
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
class kn extends $n {
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
    this.langChangedSubscription == null && (this.langChangedSubscription = ln(this.langChanged.bind(this)));
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
class Cn extends kn {
  render(e, t, n) {
    return this.renderValue(() => b(e, t, n));
  }
}
const k = cn(Cn);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class gr extends Ur {
  constructor(e) {
    if (super(e), this.et = A, e.type !== Ir.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === A || e == null) return this.ft = void 0, this.et = e;
    if (e === ye) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.et) return this.ft;
    this.et = e;
    const t = [e];
    return t.raw = t, this.ft = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
gr.directiveName = "unsafeHTML", gr.resultType = 1;
function zt() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var he = zt();
function Kr(r) {
  he = r;
}
var Ne = { exec: () => null };
function v(r, e = "") {
  let t = typeof r == "string" ? r : r.source, n = { replace: (i, s) => {
    let a = typeof s == "string" ? s : s.source;
    return a = a.replace(E.caret, "$1"), t = t.replace(i, a), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var E = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}#`), htmlBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}<(?:[a-z].*>|!--)`, "i") }, An = /^(?:[ \t]*(?:\n|$))+/, Sn = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Mn = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Oe = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Tn = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Gt = /(?:[*+-]|\d{1,9}[.)])/, Xr = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Jr = v(Xr).replace(/bull/g, Gt).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Nn = v(Xr).replace(/bull/g, Gt).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Wt = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ln = /^[^\n]+/, Ot = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Hn = v(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ot).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), En = v(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Gt).getRegex(), lt = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Rt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, zn = v("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Rt).replace("tag", lt).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ei = v(Wt).replace("hr", Oe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", lt).getRegex(), Gn = v(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ei).getRegex(), Dt = { blockquote: Gn, code: Sn, def: Hn, fences: Mn, heading: Tn, hr: Oe, html: zn, lheading: Jr, list: En, newline: An, paragraph: ei, table: Ne, text: Ln }, mr = v("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Oe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", lt).getRegex(), Wn = { ...Dt, lheading: Nn, table: mr, paragraph: v(Wt).replace("hr", Oe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", mr).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", lt).getRegex() }, On = { ...Dt, html: v(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Rt).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ne, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: v(Wt).replace("hr", Oe).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Jr).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Rn = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Dn = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ti = /^( {2,}|\\)\n(?!\s*$)/, Pn = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ct = /[\p{P}\p{S}]/u, Pt = /[\s\p{P}\p{S}]/u, ri = /[^\s\p{P}\p{S}]/u, In = v(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Pt).getRegex(), ii = /(?!~)[\p{P}\p{S}]/u, Un = /(?!~)[\s\p{P}\p{S}]/u, Fn = /(?:[^\s\p{P}\p{S}]|~)/u, Bn = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, ni = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, jn = v(ni, "u").replace(/punct/g, ct).getRegex(), Vn = v(ni, "u").replace(/punct/g, ii).getRegex(), si = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Zn = v(si, "gu").replace(/notPunctSpace/g, ri).replace(/punctSpace/g, Pt).replace(/punct/g, ct).getRegex(), qn = v(si, "gu").replace(/notPunctSpace/g, Fn).replace(/punctSpace/g, Un).replace(/punct/g, ii).getRegex(), Qn = v("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ri).replace(/punctSpace/g, Pt).replace(/punct/g, ct).getRegex(), Yn = v(/\\(punct)/, "gu").replace(/punct/g, ct).getRegex(), Kn = v(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Xn = v(Rt).replace("(?:-->|$)", "-->").getRegex(), Jn = v("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Xn).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), et = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, es = v(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", et).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ai = v(/^!?\[(label)\]\[(ref)\]/).replace("label", et).replace("ref", Ot).getRegex(), oi = v(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ot).getRegex(), ts = v("reflink|nolink(?!\\()", "g").replace("reflink", ai).replace("nolink", oi).getRegex(), It = { _backpedal: Ne, anyPunctuation: Yn, autolink: Kn, blockSkip: Bn, br: ti, code: Dn, del: Ne, emStrongLDelim: jn, emStrongRDelimAst: Zn, emStrongRDelimUnd: Qn, escape: Rn, link: es, nolink: oi, punctuation: In, reflink: ai, reflinkSearch: ts, tag: Jn, text: Pn, url: Ne }, rs = { ...It, link: v(/^!?\[(label)\]\((.*?)\)/).replace("label", et).getRegex(), reflink: v(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", et).getRegex() }, vt = { ...It, emStrongRDelimAst: qn, emStrongLDelim: Vn, url: v(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, is = { ...vt, br: v(ti).replace("{2,}", "*").getRegex(), text: v(vt.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Ve = { normal: Dt, gfm: Wn, pedantic: On }, Ae = { normal: It, gfm: vt, breaks: is, pedantic: rs }, ns = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, yr = (r) => ns[r];
function D(r, e) {
  if (e) {
    if (E.escapeTest.test(r)) return r.replace(E.escapeReplace, yr);
  } else if (E.escapeTestNoEncode.test(r)) return r.replace(E.escapeReplaceNoEncode, yr);
  return r;
}
function wr(r) {
  try {
    r = encodeURI(r).replace(E.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function xr(r, e) {
  let t = r.replace(E.findPipe, (s, a, o) => {
    let l = !1, c = a;
    for (; --c >= 0 && o[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), n = t.split(E.splitPipe), i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; i < n.length; i++) n[i] = n[i].trim().replace(E.slashPipe, "|");
  return n;
}
function Se(r, e, t) {
  let n = r.length;
  if (n === 0) return "";
  let i = 0;
  for (; i < n && r.charAt(n - i - 1) === e; )
    i++;
  return r.slice(0, n - i);
}
function ss(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < r.length; n++) if (r[n] === "\\") n++;
  else if (r[n] === e[0]) t++;
  else if (r[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function br(r, e, t, n, i) {
  let s = e.href, a = e.title || null, o = r[1].replace(i.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let l = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: s, title: a, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = !1, l;
}
function as(r, e, t) {
  let n = r.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let i = n[1];
  return e.split(`
`).map((s) => {
    let a = s.match(t.other.beginningSpace);
    if (a === null) return s;
    let [o] = a;
    return o.length >= i.length ? s.slice(i.length) : s;
  }).join(`
`);
}
var tt = class {
  options;
  rules;
  lexer;
  constructor(r) {
    this.options = r || he;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : Se(t, `
`) };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], n = as(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let n = Se(t, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (t = n.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: Se(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = Se(e[0], `
`).split(`
`), n = "", i = "", s = [];
      for (; t.length > 0; ) {
        let a = !1, o = [], l;
        for (l = 0; l < t.length; l++) if (this.rules.other.blockquoteStart.test(t[l])) o.push(t[l]), a = !0;
        else if (!a) o.push(t[l]);
        else break;
        t = t.slice(l);
        let c = o.join(`
`), h = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${c}` : c, i = i ? `${i}
${h}` : h;
        let u = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(h, s, !0), this.lexer.state.top = u, t.length === 0) break;
        let p = s.at(-1);
        if (p?.type === "code") break;
        if (p?.type === "blockquote") {
          let g = p, w = g.raw + `
` + t.join(`
`), $ = this.blockquote(w);
          s[s.length - 1] = $, n = n.substring(0, n.length - g.raw.length) + $.raw, i = i.substring(0, i.length - g.text.length) + $.text;
          break;
        } else if (p?.type === "list") {
          let g = p, w = g.raw + `
` + t.join(`
`), $ = this.list(w);
          s[s.length - 1] = $, n = n.substring(0, n.length - p.raw.length) + $.raw, i = i.substring(0, i.length - g.raw.length) + $.raw, t = w.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: n, tokens: s, text: i };
    }
  }
  list(r) {
    let e = this.rules.block.list.exec(r);
    if (e) {
      let t = e[1].trim(), n = t.length > 1, i = { type: "list", raw: "", ordered: n, start: n ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = n ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = n ? t : "[*+-]");
      let s = this.rules.other.listItemRegex(t), a = !1;
      for (; r; ) {
        let l = !1, c = "", h = "";
        if (!(e = s.exec(r)) || this.rules.block.hr.test(r)) break;
        c = e[0], r = r.substring(c.length);
        let u = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (_e) => " ".repeat(3 * _e.length)), p = r.split(`
`, 1)[0], g = !u.trim(), w = 0;
        if (this.options.pedantic ? (w = 2, h = u.trimStart()) : g ? w = e[1].length + 1 : (w = e[2].search(this.rules.other.nonSpaceChar), w = w > 4 ? 1 : w, h = u.slice(w), w += e[1].length), g && this.rules.other.blankLine.test(p) && (c += p + `
`, r = r.substring(p.length + 1), l = !0), !l) {
          let _e = this.rules.other.nextBulletRegex(w), Re = this.rules.other.hrRegex(w), De = this.rules.other.fencesBeginRegex(w), W = this.rules.other.headingBeginRegex(w), z = this.rules.other.htmlBeginRegex(w);
          for (; r; ) {
            let q = r.split(`
`, 1)[0], Q;
            if (p = q, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), Q = p) : Q = p.replace(this.rules.other.tabCharGlobal, "    "), De.test(p) || W.test(p) || z.test(p) || _e.test(p) || Re.test(p)) break;
            if (Q.search(this.rules.other.nonSpaceChar) >= w || !p.trim()) h += `
` + Q.slice(w);
            else {
              if (g || u.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || De.test(u) || W.test(u) || Re.test(u)) break;
              h += `
` + p;
            }
            !g && !p.trim() && (g = !0), c += q + `
`, r = r.substring(q.length + 1), u = Q.slice(w);
          }
        }
        i.loose || (a ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (a = !0));
        let $ = null, I;
        this.options.gfm && ($ = this.rules.other.listIsTask.exec(h), $ && (I = $[0] !== "[ ] ", h = h.replace(this.rules.other.listReplaceTask, ""))), i.items.push({ type: "list_item", raw: c, task: !!$, checked: I, loose: !1, text: h, tokens: [] }), i.raw += c;
      }
      let o = i.items.at(-1);
      if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let l = 0; l < i.items.length; l++) if (this.lexer.state.top = !1, i.items[l].tokens = this.lexer.blockTokens(i.items[l].text, []), !i.loose) {
        let c = i.items[l].tokens.filter((u) => u.type === "space"), h = c.length > 0 && c.some((u) => this.rules.other.anyLine.test(u.raw));
        i.loose = h;
      }
      if (i.loose) for (let l = 0; l < i.items.length; l++) i.items[l].loose = !0;
      return i;
    }
  }
  html(r) {
    let e = this.rules.block.html.exec(r);
    if (e) return { type: "html", block: !0, raw: e[0], pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: e[0] };
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: n, title: i };
    }
  }
  table(r) {
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = xr(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === n.length) {
      for (let a of n) this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < t.length; a++) s.header.push({ text: t[a], tokens: this.lexer.inline(t[a]), header: !0, align: s.align[a] });
      for (let a of i) s.rows.push(xr(a, s.header.length).map((o, l) => ({ text: o, tokens: this.lexer.inline(o), header: !1, align: s.align[l] })));
      return s;
    }
  }
  lheading(r) {
    let e = this.rules.block.lheading.exec(r);
    if (e) return { type: "heading", raw: e[0], depth: e[2].charAt(0) === "=" ? 1 : 2, text: e[1], tokens: this.lexer.inline(e[1]) };
  }
  paragraph(r) {
    let e = this.rules.block.paragraph.exec(r);
    if (e) {
      let t = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(r) {
    let e = this.rules.block.text.exec(r);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(r) {
    let e = this.rules.inline.escape.exec(r);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(r) {
    let e = this.rules.inline.tag.exec(r);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: e[0] };
  }
  link(r) {
    let e = this.rules.inline.link.exec(r);
    if (e) {
      let t = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
        if (!this.rules.other.endAngleBracket.test(t)) return;
        let s = Se(t.slice(0, -1), "\\");
        if ((t.length - s.length) % 2 === 0) return;
      } else {
        let s = ss(e[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let a = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + s;
          e[2] = e[2].substring(0, s), e[0] = e[0].substring(0, a).trim(), e[3] = "";
        }
      }
      let n = e[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(n);
        s && (n = s[1], i = s[3]);
      } else i = e[3] ? e[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? n = n.slice(1) : n = n.slice(1, -1)), br(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(r, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(r)) || (t = this.rules.inline.nolink.exec(r))) {
      let n = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = e[n.toLowerCase()];
      if (!i) {
        let s = t[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return br(t, i, t[0], this.lexer, this.rules);
    }
  }
  emStrong(r, e, t = "") {
    let n = this.rules.inline.emStrongLDelim.exec(r);
    if (!(!n || n[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[2]) || !t || this.rules.inline.punctuation.exec(t))) {
      let i = [...n[0]].length - 1, s, a, o = i, l = 0, c = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, e = e.slice(-1 * r.length + i); (n = c.exec(e)) != null; ) {
        if (s = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !s) continue;
        if (a = [...s].length, n[3] || n[4]) {
          o += a;
          continue;
        } else if ((n[5] || n[6]) && i % 3 && !((i + a) % 3)) {
          l += a;
          continue;
        }
        if (o -= a, o > 0) continue;
        a = Math.min(a, a + o + l);
        let h = [...n[0]][0].length, u = r.slice(0, i + n.index + h + a);
        if (Math.min(i, a) % 2) {
          let g = u.slice(1, -1);
          return { type: "em", raw: u, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let p = u.slice(2, -2);
        return { type: "strong", raw: u, text: p, tokens: this.lexer.inlineTokens(p) };
      }
    }
  }
  codespan(r) {
    let e = this.rules.inline.code.exec(r);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(t), i = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return n && i && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
    }
  }
  br(r) {
    let e = this.rules.inline.br.exec(r);
    if (e) return { type: "br", raw: e[0] };
  }
  del(r) {
    let e = this.rules.inline.del.exec(r);
    if (e) return { type: "del", raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
  }
  autolink(r) {
    let e = this.rules.inline.autolink.exec(r);
    if (e) {
      let t, n;
      return e[2] === "@" ? (t = e[1], n = "mailto:" + t) : (t = e[1], n = t), { type: "link", raw: e[0], text: t, href: n, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(r) {
    let e;
    if (e = this.rules.inline.url.exec(r)) {
      let t, n;
      if (e[2] === "@") t = e[0], n = "mailto:" + t;
      else {
        let i;
        do
          i = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (i !== e[0]);
        t = e[0], e[1] === "www." ? n = "http://" + e[0] : n = e[0];
      }
      return { type: "link", raw: e[0], text: t, href: n, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  inlineText(r) {
    let e = this.rules.inline.text.exec(r);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, F = class _t {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || he, this.options.tokenizer = this.options.tokenizer || new tt(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: E, block: Ve.normal, inline: Ae.normal };
    this.options.pedantic ? (t.block = Ve.pedantic, t.inline = Ae.pedantic) : this.options.gfm && (t.block = Ve.gfm, this.options.breaks ? t.inline = Ae.breaks : t.inline = Ae.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Ve, inline: Ae };
  }
  static lex(e, t) {
    return new _t(t).lex(e);
  }
  static lexInline(e, t) {
    return new _t(t).inlineTokens(e);
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
      let i;
      if (this.options.extensions?.block?.some((a) => (i = a.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1)) continue;
      if (i = this.tokenizer.space(e)) {
        e = e.substring(i.raw.length);
        let a = t.at(-1);
        i.raw.length === 1 && a !== void 0 ? a.raw += `
` : t.push(i);
        continue;
      }
      if (i = this.tokenizer.code(e)) {
        e = e.substring(i.raw.length);
        let a = t.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + i.raw, a.text += `
` + i.text, this.inlineQueue.at(-1).src = a.text) : t.push(i);
        continue;
      }
      if (i = this.tokenizer.fences(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.heading(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.hr(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.blockquote(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.list(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.html(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.def(e)) {
        e = e.substring(i.raw.length);
        let a = t.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + i.raw, a.text += `
` + i.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = { href: i.href, title: i.title }, t.push(i));
        continue;
      }
      if (i = this.tokenizer.table(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.lheading(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      let s = e;
      if (this.options.extensions?.startBlock) {
        let a = 1 / 0, o = e.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, o), typeof l == "number" && l >= 0 && (a = Math.min(a, l));
        }), a < 1 / 0 && a >= 0 && (s = e.substring(0, a + 1));
      }
      if (this.state.top && (i = this.tokenizer.paragraph(s))) {
        let a = t.at(-1);
        n && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + i.raw, a.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(i), n = s.length !== e.length, e = e.substring(i.raw.length);
        continue;
      }
      if (i = this.tokenizer.text(e)) {
        e = e.substring(i.raw.length);
        let a = t.at(-1);
        a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + i.raw, a.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(i);
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
    let n = e, i = null;
    if (this.tokens.links) {
      let o = Object.keys(this.tokens.links);
      if (o.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) o.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, i.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let s = !1, a = "";
    for (; e; ) {
      s || (a = ""), s = !1;
      let o;
      if (this.options.extensions?.inline?.some((c) => (o = c.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), !0) : !1)) continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let c = t.at(-1);
        o.type === "text" && c?.type === "text" ? (c.raw += o.raw, c.text += o.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, n, a)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      let l = e;
      if (this.options.extensions?.startInline) {
        let c = 1 / 0, h = e.slice(1), u;
        this.options.extensions.startInline.forEach((p) => {
          u = p.call({ lexer: this }, h), typeof u == "number" && u >= 0 && (c = Math.min(c, u));
        }), c < 1 / 0 && c >= 0 && (l = e.substring(0, c + 1));
      }
      if (o = this.tokenizer.inlineText(l)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (a = o.raw.slice(-1)), s = !0;
        let c = t.at(-1);
        c?.type === "text" ? (c.raw += o.raw, c.text += o.text) : t.push(o);
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
}, rt = class {
  options;
  parser;
  constructor(r) {
    this.options = r || he;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    let n = (e || "").match(E.notSpaceStart)?.[0], i = r.replace(E.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + D(n) + '">' + (t ? i : D(i, !0)) + `</code></pre>
` : "<pre><code>" + (t ? i : D(i, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: r }) {
    return `<blockquote>
${this.parser.parse(r)}</blockquote>
`;
  }
  html({ text: r }) {
    return r;
  }
  def(r) {
    return "";
  }
  heading({ tokens: r, depth: e }) {
    return `<h${e}>${this.parser.parseInline(r)}</h${e}>
`;
  }
  hr(r) {
    return `<hr>
`;
  }
  list(r) {
    let e = r.ordered, t = r.start, n = "";
    for (let a = 0; a < r.items.length; a++) {
      let o = r.items[a];
      n += this.listitem(o);
    }
    let i = e ? "ol" : "ul", s = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + i + s + `>
` + n + "</" + i + `>
`;
  }
  listitem(r) {
    let e = "";
    if (r.task) {
      let t = this.checkbox({ checked: !!r.checked });
      r.loose ? r.tokens[0]?.type === "paragraph" ? (r.tokens[0].text = t + " " + r.tokens[0].text, r.tokens[0].tokens && r.tokens[0].tokens.length > 0 && r.tokens[0].tokens[0].type === "text" && (r.tokens[0].tokens[0].text = t + " " + D(r.tokens[0].tokens[0].text), r.tokens[0].tokens[0].escaped = !0)) : r.tokens.unshift({ type: "text", raw: t + " ", text: t + " ", escaped: !0 }) : e += t + " ";
    }
    return e += this.parser.parse(r.tokens, !!r.loose), `<li>${e}</li>
`;
  }
  checkbox({ checked: r }) {
    return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: r }) {
    return `<p>${this.parser.parseInline(r)}</p>
`;
  }
  table(r) {
    let e = "", t = "";
    for (let i = 0; i < r.header.length; i++) t += this.tablecell(r.header[i]);
    e += this.tablerow({ text: t });
    let n = "";
    for (let i = 0; i < r.rows.length; i++) {
      let s = r.rows[i];
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
  tablerow({ text: r }) {
    return `<tr>
${r}</tr>
`;
  }
  tablecell(r) {
    let e = this.parser.parseInline(r.tokens), t = r.header ? "th" : "td";
    return (r.align ? `<${t} align="${r.align}">` : `<${t}>`) + e + `</${t}>
`;
  }
  strong({ tokens: r }) {
    return `<strong>${this.parser.parseInline(r)}</strong>`;
  }
  em({ tokens: r }) {
    return `<em>${this.parser.parseInline(r)}</em>`;
  }
  codespan({ text: r }) {
    return `<code>${D(r, !0)}</code>`;
  }
  br(r) {
    return "<br>";
  }
  del({ tokens: r }) {
    return `<del>${this.parser.parseInline(r)}</del>`;
  }
  link({ href: r, title: e, tokens: t }) {
    let n = this.parser.parseInline(t), i = wr(r);
    if (i === null) return n;
    r = i;
    let s = '<a href="' + r + '"';
    return e && (s += ' title="' + D(e) + '"'), s += ">" + n + "</a>", s;
  }
  image({ href: r, title: e, text: t, tokens: n }) {
    n && (t = this.parser.parseInline(n, this.parser.textRenderer));
    let i = wr(r);
    if (i === null) return D(t);
    r = i;
    let s = `<img src="${r}" alt="${t}"`;
    return e && (s += ` title="${D(e)}"`), s += ">", s;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : D(r.text);
  }
}, Ut = class {
  strong({ text: r }) {
    return r;
  }
  em({ text: r }) {
    return r;
  }
  codespan({ text: r }) {
    return r;
  }
  del({ text: r }) {
    return r;
  }
  html({ text: r }) {
    return r;
  }
  text({ text: r }) {
    return r;
  }
  link({ text: r }) {
    return "" + r;
  }
  image({ text: r }) {
    return "" + r;
  }
  br() {
    return "";
  }
}, B = class $t {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || he, this.options.renderer = this.options.renderer || new rt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ut();
  }
  static parse(e, t) {
    return new $t(t).parse(e);
  }
  static parseInline(e, t) {
    return new $t(t).parseInline(e);
  }
  parse(e, t = !0) {
    let n = "";
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.options.extensions?.renderers?.[s.type]) {
        let o = s, l = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o.type)) {
          n += l || "";
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
          let o = a, l = this.renderer.text(o);
          for (; i + 1 < e.length && e[i + 1].type === "text"; ) o = e[++i], l += `
` + this.renderer.text(o);
          t ? n += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: !0 }] }) : n += l;
          continue;
        }
        default: {
          let o = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
  parseInline(e, t = this.renderer) {
    let n = "";
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.options.extensions?.renderers?.[s.type]) {
        let o = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          n += o || "";
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
          let o = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
}, qe = class {
  options;
  block;
  constructor(r) {
    this.options = r || he;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(r) {
    return r;
  }
  postprocess(r) {
    return r;
  }
  processAllTokens(r) {
    return r;
  }
  provideLexer() {
    return this.block ? F.lex : F.lexInline;
  }
  provideParser() {
    return this.block ? B.parse : B.parseInline;
  }
}, os = class {
  defaults = zt();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = B;
  Renderer = rt;
  TextRenderer = Ut;
  Lexer = F;
  Tokenizer = tt;
  Hooks = qe;
  constructor(...r) {
    this.use(...r);
  }
  walkTokens(r, e) {
    let t = [];
    for (let n of r) switch (t = t.concat(e.call(this, n)), n.type) {
      case "table": {
        let i = n;
        for (let s of i.header) t = t.concat(this.walkTokens(s.tokens, e));
        for (let s of i.rows) for (let a of s) t = t.concat(this.walkTokens(a.tokens, e));
        break;
      }
      case "list": {
        let i = n;
        t = t.concat(this.walkTokens(i.items, e));
        break;
      }
      default: {
        let i = n;
        this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
          let a = i[s].flat(1 / 0);
          t = t.concat(this.walkTokens(a, e));
        }) : i.tokens && (t = t.concat(this.walkTokens(i.tokens, e)));
      }
    }
    return t;
  }
  use(...r) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((t) => {
      let n = { ...t };
      if (n.async = this.defaults.async || n.async || !1, t.extensions && (t.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = e.renderers[i.name];
          s ? e.renderers[i.name] = function(...a) {
            let o = i.renderer.apply(this, a);
            return o === !1 && (o = s.apply(this, a)), o;
          } : e.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = e[i.level];
          s ? s.unshift(i.tokenizer) : e[i.level] = [i.tokenizer], i.start && (i.level === "block" ? e.startBlock ? e.startBlock.push(i.start) : e.startBlock = [i.start] : i.level === "inline" && (e.startInline ? e.startInline.push(i.start) : e.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (e.childTokens[i.name] = i.childTokens);
      }), n.extensions = e), t.renderer) {
        let i = this.defaults.renderer || new rt(this.defaults);
        for (let s in t.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let a = s, o = t.renderer[a], l = i[a];
          i[a] = (...c) => {
            let h = o.apply(i, c);
            return h === !1 && (h = l.apply(i, c)), h || "";
          };
        }
        n.renderer = i;
      }
      if (t.tokenizer) {
        let i = this.defaults.tokenizer || new tt(this.defaults);
        for (let s in t.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let a = s, o = t.tokenizer[a], l = i[a];
          i[a] = (...c) => {
            let h = o.apply(i, c);
            return h === !1 && (h = l.apply(i, c)), h;
          };
        }
        n.tokenizer = i;
      }
      if (t.hooks) {
        let i = this.defaults.hooks || new qe();
        for (let s in t.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let a = s, o = t.hooks[a], l = i[a];
          qe.passThroughHooks.has(s) ? i[a] = (c) => {
            if (this.defaults.async) return Promise.resolve(o.call(i, c)).then((u) => l.call(i, u));
            let h = o.call(i, c);
            return l.call(i, h);
          } : i[a] = (...c) => {
            let h = o.apply(i, c);
            return h === !1 && (h = l.apply(i, c)), h;
          };
        }
        n.hooks = i;
      }
      if (t.walkTokens) {
        let i = this.defaults.walkTokens, s = t.walkTokens;
        n.walkTokens = function(a) {
          let o = [];
          return o.push(s.call(this, a)), i && (o = o.concat(i.call(this, a))), o;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  lexer(r, e) {
    return F.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return B.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let n = { ...t }, i = { ...this.defaults, ...n }, s = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === !0 && n.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      i.hooks && (i.hooks.options = i, i.hooks.block = r);
      let a = i.hooks ? i.hooks.provideLexer() : r ? F.lex : F.lexInline, o = i.hooks ? i.hooks.provideParser() : r ? B.parse : B.parseInline;
      if (i.async) return Promise.resolve(i.hooks ? i.hooks.preprocess(e) : e).then((l) => a(l, i)).then((l) => i.hooks ? i.hooks.processAllTokens(l) : l).then((l) => i.walkTokens ? Promise.all(this.walkTokens(l, i.walkTokens)).then(() => l) : l).then((l) => o(l, i)).then((l) => i.hooks ? i.hooks.postprocess(l) : l).catch(s);
      try {
        i.hooks && (e = i.hooks.preprocess(e));
        let l = a(e, i);
        i.hooks && (l = i.hooks.processAllTokens(l)), i.walkTokens && this.walkTokens(l, i.walkTokens);
        let c = o(l, i);
        return i.hooks && (c = i.hooks.postprocess(c)), c;
      } catch (l) {
        return s(l);
      }
    };
  }
  onError(r, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
        let n = "<p>An error occurred:</p><pre>" + D(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(n) : n;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, de = new os();
function _(r, e) {
  return de.parse(r, e);
}
_.options = _.setOptions = function(r) {
  return de.setOptions(r), _.defaults = de.defaults, Kr(_.defaults), _;
};
_.getDefaults = zt;
_.defaults = he;
_.use = function(...r) {
  return de.use(...r), _.defaults = de.defaults, Kr(_.defaults), _;
};
_.walkTokens = function(r, e) {
  return de.walkTokens(r, e);
};
_.parseInline = de.parseInline;
_.Parser = B;
_.parser = B.parse;
_.Renderer = rt;
_.TextRenderer = Ut;
_.Lexer = F;
_.lexer = F.lex;
_.Tokenizer = tt;
_.Hooks = qe;
_.parse = _;
_.options;
_.setOptions;
_.use;
_.walkTokens;
_.parseInline;
B.parse;
F.lex;
const M = [
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
  }
], ls = [
  {
    name: "entity",
    required: !0,
    description: "config.descr.entity",
    selector: {
      entity: {
        domain: "weather"
      }
    }
  }
], cs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.92'%20x2='38.52'%20y1='18.75'%20y2='47.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='5%2032%2032;%20-15%2032%2032;%205%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M46.66%2036.2a16.66%2016.66%200%2001-16.78-16.55%2016.29%2016.29%200%2001.55-4.15A16.56%2016.56%200%201048.5%2036.1c-.61.06-1.22.1-1.84.1z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-5%2032%2032;%2015%2032%2032;%20-5%2032%2032'/%3e%3c/path%3e%3c/svg%3e", ds = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/path%3e%3c/svg%3e", hs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='16.5'%20x2='21.5'%20y1='19.67'%20y2='28.33'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='19'%20cy='24'%20r='5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2019%2024;%20360%2019%2024'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", ps = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='13.58'%20x2='24.15'%20y1='15.57'%20y2='33.87'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='10%2019.22%2024.293;%20-10%2019.22%2024.293;%2010%2019.22%2024.293'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M29.33%2026.68a10.61%2010.61%200%2001-10.68-10.54A10.5%2010.5%200%200119%2013.5a10.54%2010.54%200%201011.5%2013.11%2011.48%2011.48%200%2001-1.17.07z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-10%2019.22%2024.293;%2010%2019.22%2024.293;%20-10%2019.22%2024.293'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", us = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='27.5'%20x2='36.5'%20y1='50.21'%20y2='65.79'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20y1='44.21'%20y2='59.79'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2058h30'%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2052h30'%3e%3canimateTransform%20attributeName='transform'%20begin='-4s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3c/svg%3e", fs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.25'%20x2='24.75'%20y1='43.7'%20y2='46.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='30.25'%20x2='31.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='37.25'%20x2='38.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23a)'%20d='M24%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20d='M31%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20d='M38%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3c/svg%3e", gs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", ms = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23b)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", ys = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", ws = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='30.12'%20x2='31.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.67'%20x2='32.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='g'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M33.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M31%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='-1%20-6;%201%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2031%2045;%20360%2031%2045'/%3e%3canimate%20attributeName='opacity'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23d)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23f)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3c/svg%3e", xs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='b'%20x1='23.31'%20x2='24.69'%20y1='44.3'%20y2='46.7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='30.31'%20x2='31.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3clinearGradient%20id='h'%20x1='37.31'%20x2='38.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3c/defs%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23e)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23f)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23h)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", bs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.97'%20x2='42.03'%20y1='14.63'%20y2='49.37'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43%2032a11%2011%200%2011-11-11%2011%2011%200%200111%2011zM25%2014.61l-.48%201a33.68%2033.68%200%2000-3.42%2017.82h0M39%2049.39l.48-1a33.68%2033.68%200%20003.42-17.82h0'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='360%2032%2032;%200%2032%2032'/%3e%3c/path%3e%3c/svg%3e", vr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='27.56'%20x2='38.27'%20y1='17.64'%20y2='36.19'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='19.96'%20x2='31.37'%20y1='29.03'%20y2='48.8'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e", ft = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e", vs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='52.7'%20x2='133.4'%20y1='9.6'%20y2='149.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%239ca3af'/%3e%3cstop%20offset='.5'%20stop-color='%239ca3af'/%3e%3cstop%20offset='1'%20stop-color='%236b7280'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='99.5'%20x2='232.6'%20y1='30.7'%20y2='261.4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%236b7280'/%3e%3cstop%20offset='.5'%20stop-color='%236b7280'/%3e%3cstop%20offset='1'%20stop-color='%234b5563'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='1381.3'%20x2='1399.5'%20y1='-1144.7'%20y2='-1097.4'%20gradientTransform='rotate(-9%208002.567%208233.063)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%230b65ed'/%3e%3cstop%20offset='.5'%20stop-color='%230a5ad4'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23c'%20id='d'%20x1='1436.7'%20x2='1454.9'%20y1='-1137'%20y2='-1089.7'%20gradientTransform='rotate(-9%208009.537%208233.037)'/%3e%3clinearGradient%20xlink:href='%23c'%20id='e'%20x1='1492.1'%20x2='1510.3'%20y1='-1129.3'%20y2='-1082.1'%20gradientTransform='rotate(-9%208016.566%208233.078)'/%3e%3csymbol%20id='g'%20viewBox='0%200%20200.3%20126.1'%3e%3cpath%20fill='url(%23a)'%20stroke='%23848b98'%20stroke-miterlimit='10'%20d='M.5%2093.2a32.4%2032.4%200%200032.4%2032.4h129.8v-.1l2.3.1a34.8%2034.8%200%20006.5-68.9%2032.4%2032.4%200%2000-48.5-33%2048.6%2048.6%200%2000-88.6%2037.1h-1.5A32.4%2032.4%200%2000.5%2093.1Z'/%3e%3c/symbol%3e%3csymbol%20id='h'%20viewBox='0%200%20350%20222'%3e%3cpath%20fill='url(%23b)'%20stroke='%235b6472'%20stroke-miterlimit='10'%20stroke-width='6'%20d='m291%20107-2.5.1A83.9%2083.9%200%2000135.6%2043%2056%2056%200%200051%2091a56.6%2056.6%200%2000.8%209A60%2060%200%200063%20219l4-.2v.2h224a56%2056%200%20000-112Z'/%3e%3c/symbol%3e%3csymbol%20id='f'%20overflow='visible'%20viewBox='0%200%20398%20222'%3e%3cuse%20xlink:href='%23g'%20width='200.3'%20height='126.1'%20transform='translate(198%2027)'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-9%200;%209%200;%20-9%200'/%3e%3c/use%3e%3cuse%20xlink:href='%23h'%20width='350'%20height='222'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-18%200;%2018%200;%20-18%200'/%3e%3c/use%3e%3c/symbol%3e%3csymbol%20id='i'%20overflow='visible'%20viewBox='0%200%20129%2057'%3e%3cpath%20fill='url(%23c)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M8.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x1'%20additive='sum'%20attributeName='transform'%20begin='0s;%20x1.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y1'%20attributeName='opacity'%20begin='0s;%20y1.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M64.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x2'%20additive='sum'%20attributeName='transform'%20begin='.33s;%20x2.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y2'%20attributeName='opacity'%20begin='.33s;%20y2.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M120.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x3'%20additive='sum'%20attributeName='transform'%20begin='-.33s;%20x3.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y3'%20attributeName='opacity'%20begin='-.33s;%20y3.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3cuse%20xlink:href='%23f'%20width='398'%20height='222'%20transform='translate(68.84%20145)'/%3e%3cuse%20xlink:href='%23i'%20width='129'%20height='57'%20transform='translate(191.5%20343.5)'/%3e%3c/svg%3e";
var _s = "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z", $s = "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z", ks = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z", Cs = "M15,6.79C16.86,7.86 18,9.85 18,12C18,22 6,22 6,22C7.25,21.06 8.38,19.95 9.34,18.71C9.38,18.66 9.41,18.61 9.44,18.55C9.69,18.06 9.5,17.46 9,17.21C7.14,16.14 6,14.15 6,12C6,2 18,2 18,2C16.75,2.94 15.62,4.05 14.66,5.29C14.62,5.34 14.59,5.39 14.56,5.45C14.31,5.94 14.5,6.54 15,6.79M12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14Z", As = "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z", Ss = "M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z", Ms = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", Ts = "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z", Ns = "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z", Ls = "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59", Hs = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z", Es = "M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z", li = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z", zs = "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z", Gs = "M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z";
const N = (r, e) => r ? (e || (e = "24px"), d`<ha-icon
    .icon="${r}"
    style="font-size:${e}; width: ${e}; height: ${e}"
  />`) : d`<ha-icon
      icon="mdi:weather-sunny"
      style="font-size:${e}; width: ${e}; height: ${e}"
    />`, H = (r, e) => r ? (e || (e = "24px"), y`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${r}" /></svg>`) : y`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${li}" /></svg>`, gt = (r, e, t, n) => {
  if (!r)
    return N("mdi:weather-sunny", t);
  const i = {
    "clear-night": H(Ms, t),
    cloudy: H(_s, t),
    fog: H($s, t),
    hail: H(ks, t),
    lightning: H(As, t),
    "lightning-rainy": H(Ss, t),
    partlycloudy: H(Ts, t),
    pouring: H(Ns, t),
    rainy: H(Ls, t),
    snowy: H(Hs, t),
    "snowy-rainy": H(Es, t),
    sunny: H(li, t),
    windy: H(zs, t),
    "windy-variant": H(Gs, t),
    exceptional: H(Cs, t)
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
  }, a = {
    "clear-night": d`<img src="${cs}" style="font-size:${t}" />`,
    cloudy: d`<img src="${ds}" style="font-size:${t}" />`,
    fog: d`<img src="${us}}" style="font-size:${t}" />`,
    hail: d`<img src="${fs}" style="font-size:${t}" />`,
    lightning: d`<img src="${ms}" style="font-size:${t}" />`,
    "lightning-rainy": d`<img src="${gs}" style="font-size:${t}" />`,
    partlycloudy: d`<img
      src="${n ? hs : ps}"
      style="font-size:${t}"
    />`,
    pouring: d`<img src="${vs}" style="font-size:${t}" />`,
    rainy: d`<img src="${ys}" style="font-size:${t}" />`,
    snowy: d`<img src="${ws}" style="font-size:${t}" />`,
    "snowy-rainy": d`<img src="${xs}" style="font-size:${t}" />`,
    sunny: d`<img src="${ft}" style="font-size:${t}" />`,
    windy: d`<img src="${vr}" style="font-size:${t}" />`,
    "windy-variant": d`<img src="${vr}" style="font-size:${t}" />`,
    exceptional: d`<img src="${bs}" style="font-size:${t}" />`
  };
  return e === "mdi" ? s[r] || N("mdi:weather-sunny", t) : e === "mdiAsSVG" ? i[r] || d`<img src="${ft}" />` : a[r] || d`<img src="${ft}" />`;
};
var _r, $r;
(function(r) {
  r.language = "language", r.system = "system", r.comma_decimal = "comma_decimal", r.decimal_comma = "decimal_comma", r.space_comma = "space_comma", r.none = "none";
})(_r || (_r = {})), (function(r) {
  r.language = "language", r.system = "system", r.am_pm = "12", r.twenty_four = "24";
})($r || ($r = {}));
var kr = function(r, e, t, n) {
  n = n || {}, t = t ?? {};
  var i = new Event(e, { bubbles: n.bubbles === void 0 || n.bubbles, cancelable: !!n.cancelable, composed: n.composed === void 0 || n.composed });
  return i.detail = t, r.dispatchEvent(i), i;
}, Ws = Object.defineProperty, Os = Object.getOwnPropertyDescriptor, dt = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Os(e, t) : e, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (i = (n ? a(e, t, i) : a(i)) || i);
  return n && i && Ws(e, t, i), i;
};
Ht({
  // Loads the language by returning a JSON structure for a given language
  loader: (r) => Lt[r]
});
let Ge = class extends G {
  hass;
  lovelace;
  _config;
  constructor() {
    super(), console.log("🎨 SwissweatherCardEditor constructor called");
  }
  setConfig(r) {
    const e = { ...r }, t = [
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
    return j`
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
    const r = [
      { key: "temperature", label: b("config.chart_temperature") || "Temperature" },
      { key: "precipitation", label: b("config.chart_precipitation") || "Precipitation" },
      { key: "sunshine", label: b("config.chart_sunshine") || "Sunshine" },
      { key: "wind", label: b("config.chart_wind") || "Wind" },
      { key: "forecast", label: b("config.chart_forecast") || "Forecast" }
    ], e = Array.isArray(this._config?.chart_order) ? this._config.chart_order : r.map((n) => n.key);
    if (!this.hass)
      return d`<div>Loading...</div>`;
    Et((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
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
          <div class="group-title">${b("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[
      M.find((n) => n.name === "entity"),
      M.find((n) => n.name === "location"),
      M.find((n) => n.name === "show_location")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Sensors -->
        <div class="group">
          <div class="group-title">${b("config.group_sensors") || "Sensors"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[
      M.find((n) => n.name === "warning_entity"),
      M.find((n) => n.name === "precipitation_entity"),
      M.find((n) => n.name === "sun_entity"),
      M.find((n) => n.name === "sunshine_entity"),
      M.find((n) => n.name === "wind_entity"),
      M.find((n) => n.name === "wind_direction_entity")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Display options -->
        <div class="group">
          <div class="group-title">${b("config.group_display") || "Display Options"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[
      M.find((n) => n.name === "forecast_hours"),
      M.find((n) => n.name === "show_forecast"),
      M.find((n) => n.name === "show_precipitation"),
      M.find((n) => n.name === "show_temperature"),
      M.find((n) => n.name === "show_sunshine"),
      M.find((n) => n.name === "show_wind"),
      M.find((n) => n.name === "enable_animate_weather_icons"),
      M.find((n) => n.name === "show_warnings"),
      M.find((n) => n.name === "compact_mode")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <!-- Chart order -->
        <div class="group">
          <div class="group-title">${b("config.group_chart_order") || "Chart Order"}</div>
          <ul style="list-style:none;padding:0;margin:0;">
            ${e.map((n, i) => {
      const s = r.find((a) => a.key === n);
      return d` <li style="display:flex;align-items:center;margin-bottom:6px;">
                <span style="flex:1;">${s?.label || n}</span>
                <button
                  style="margin-left:8px;"
                  @click=${() => this._moveChart(i, -1)}
                  ?disabled=${i === 0}
                  title="${b("config.move_up") || "Up"}"
                >
                  ⬆️
                </button>
                <button
                  style="margin-left:2px;"
                  @click=${() => this._moveChart(i, 1)}
                  ?disabled=${i === e.length - 1}
                  title="${b("config.move_down") || "Down"}"
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
  _moveChart(r, e) {
    if (!this._config) return;
    const t = Array.isArray(this._config.chart_order) ? [...this._config.chart_order] : ["temperature", "precipitation", "sunshine", "wind", "forecast"], n = r + e;
    if (n < 0 || n >= t.length) return;
    const i = t[r];
    t[r] = t[n], t[n] = i, this._config = { ...this._config, chart_order: t }, kr(this, "config-changed", { config: this._config }), this.requestUpdate();
  }
  _computeLabel = (r) => ({
    entity: b("config.entity"),
    show_location: b("config.show_location"),
    sun_entity: b("config.sun_entity"),
    location: b("config.location"),
    wind_entity: b("config.wind_entity"),
    wind_direction_entity: b("config.wind_direction_entity"),
    sunshine_entity: b("config.sunshine_entity"),
    warning_entity: b("config.warning_entity"),
    show_forecast: b("config.show_forecast"),
    forecast_hours: b("config.forecast_hours"),
    show_temperature: b("config.show_temperature"),
    show_precipitation: b("config.show_precipitation"),
    show_sunshine: b("config.show_sunshine"),
    show_warnings: b("config.show_warnings"),
    show_wind: b("config.show_wind"),
    enable_animate_weather_icons: b("config.enable_animate_weather_icons"),
    compact_mode: b("config.compact_mode")
  })[r.name] || r.name;
  _computeHelper = (r) => r.description ? b(r.description) : "";
  _renderConfigPreview() {
    const r = { ...this._config };
    return r.type || (r.type = "custom:swissweather-card"), Object.keys(r).forEach((e) => {
      (r[e] === void 0 || r[e] === "") && delete r[e];
    }), Object.entries(r).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join(`
`);
  }
  _valueChanged(r) {
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
    }), r.type === "value-changed") {
      const e = {};
      this._config && this._config.chart_order !== void 0 && (e.chart_order = this._config.chart_order);
      const { ...t } = r.detail.value || {}, n = {
        ...this._config,
        ...t,
        ...e,
        type: "custom:swissweather-card"
      };
      Object.keys(n).forEach((i) => {
        (n[i] === "" || n[i] === void 0) && delete n[i];
      }), this._config = n, kr(this, "config-changed", { config: this._config });
    }
  }
};
dt([
  m({ attribute: !1 })
], Ge.prototype, "hass", 2);
dt([
  m({ attribute: !1 })
], Ge.prototype, "lovelace", 2);
dt([
  m({ attribute: !1 })
], Ge.prototype, "_config", 2);
Ge = dt([
  V("swissweather-card-editor")
], Ge);
var Rs = Object.defineProperty, Ds = Object.getOwnPropertyDescriptor, pe = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Ds(e, t) : e, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (i = (n ? a(e, t, i) : a(i)) || i);
  return n && i && Rs(e, t, i), i;
};
Ht({
  // Loads the language by returning a JSON structure for a given language
  loader: (r) => Lt[r]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard");
console.log("🎯 customElements registry available:", !!customElements);
let te = class extends G {
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
  updated(r) {
    super.updated(r), this.hass && this.config && this.config.entity && this._lastEntityId !== this.config.entity && (this._lastEntityId = this.config.entity, this._loadForecast());
  }
  async _loadForecast() {
    if (!(!this.hass || !this.config?.entity || this._forecastLoading)) {
      this._forecastLoading = !0;
      try {
        const [r, e] = await Promise.all([
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
        ]), t = r?.response;
        t && t[this.config.entity] ? (this._forecast = t[this.config.entity].forecast || [], this.requestUpdate("_forecast")) : this._forecast = [];
        const n = e?.response;
        n && n[this.config.entity] ? (this._hourlyForecast = n[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [], console.log("🟢 Forecast geladen:", {
          forecast: this._forecast,
          hourlyForecast: this._hourlyForecast
        });
      } catch (r) {
        console.warn("⚠️ Forecast loading failed:", r), this._forecast = [], this._hourlyForecast = [];
      } finally {
        this._forecastLoading = !1;
      }
    }
  }
  static get styles() {
    return j`
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
  setConfig(r) {
    if (!r.entity)
      throw new Error("You need to define an entity");
    this.config = r, setTimeout(() => {
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
    return M;
  }
  _getEntityState(r) {
    return this.hass?.states[r];
  }
  _getWarningLevel(r) {
    if (!r || r.length === 0) return "none";
    const e = Math.max(...r.map((t) => t.level || 0));
    return e >= 4 ? "danger" : e >= 3 ? "severe" : e >= 2 ? "warning" : "info";
  }
  _formatWindDirection(r) {
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
    ], t = Math.round(r / 22.5) % 16;
    return e[t];
  }
  _renderWarningSection(r) {
    const e = [];
    if (r?.attributes?.warning_levels && Array.isArray(r.attributes.warning_levels))
      for (let s = 0; s < r?.attributes.warning_levels.length; s++)
        e.push({
          id: `warning_${s}`,
          title: r?.attributes.warning_levels[s],
          level: r?.attributes.warning_levels[s],
          type: r?.attributes.warning_types[s],
          description: r?.attributes.warning_texts[s],
          valid_from: r.attributes.warning_valid_from[s],
          valid_to: r.attributes.warning_valid_to[s],
          link: r.attributes.warning_links[s],
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
    const i = (s) => {
      this._openWarnings = { ...this._openWarnings, [s]: !this._openWarnings[s] }, this.requestUpdate();
    };
    return e.length > 0 ? d`
          <div class="warning-section ${t}">
            <div>
              <strong>${k("weather_warning")}</strong>
              <ul style="margin: 6px 0 0 0; padding-left: 18px;">
                ${e.map(
      (s) => d`
                    <li style="margin-bottom: 12px;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <ha-icon
                          icon="${n[s.type?.toLowerCase?.()] || n.default}"
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
                          @click=${() => i(s.id)}
                          style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;"
                          title="${this._openWarnings[s.id] ? k("collapse") : k("expand")}"
                          aria-label="${this._openWarnings[s.id] ? k("collapse") : k("expand")}"
                        >
                          <ha-icon
                            icon="${this._openWarnings[s.id] ? "mdi:chevron-up" : "mdi:chevron-down"}"
                          ></ha-icon>
                        </button>
                      </div>
                      ${this._openWarnings[s.id] && s.description ? d`
                            <div>
                              <strong>${k("valid_from")}: </strong>
                              ${s.valid_from ? new Date(s.valid_from).toLocaleString() : k("unknown")}
                              <strong>${k("valid_to")}: </strong>
                              ${s.valid_to ? new Date(s.valid_to).toLocaleString() : k("unknown")}
                            </div>
                            <div
                              style="color: var(--primary-text-color, #fff); font-size: 14px; line-height: 1.4; margin-left: 2px; margin-top: 4px;"
                              .innerHTML="${_.parse(s.description || "")}"
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
  _renderForecastTemperature(r) {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<forecast-temperature-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${r}
          .show_temperature=${this.config.show_temperature !== !1}
          ._t=${k}
          .showHoursChartLabel=${(e) => je(e)}
        ></forecast-temperature-chart>` : d``;
  }
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_precipitation = true;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  _renderForecastPrecipitation(r) {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<precipitation-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${r}
          .show_precipitation=${this.config.show_precipitation !== !1}
          ._t=${k}
          .showHoursChartLabel=${(e) => je(e)}
        ></precipitation-chart>` : d``;
  }
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_sunshine = true;
  // @property({ type: Object }) weatherEntity!: WeatherEntity;
  // @property({ type: Object }) sun_entity?: HassEntity | null;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  _renderForecastSunshine(r, e, t) {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<sunshine-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${t}
          .show_sunshine=${this.config.show_sunshine !== !1}
          .weatherEntity=${r}
          .sun_entity=${e}
          ._t=${k}
          .showHoursChartLabel=${(n) => je(n)}
        ></sunshine-chart>` : d``;
  }
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_wind = true;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  _renderForecastWind(r) {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<wind-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${r}
          .show_wind=${this.config.show_wind !== !1}
          ._t=${k}
          .showHoursChartLabel=${(e) => je(e)}
        ></wind-chart>` : d``;
  }
  _renderCurrentWeather(r, e, t, n, i, s) {
    return d`
      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${k("current_weather")}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(r)} km/h</div>
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
          <div class="metric-value">${n} hPa</div>
          <div class="metric-label">${k("pressure")}</div>
        </div>
        ${s ? d`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                <div class="metric-value">${parseFloat(s.state).toFixed(1)}h</div>
                <div class="metric-label">${k("sunshine")}</div>
              </div>
            ` : ""}
        ${i > 0 ? d`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                <div class="metric-value">${i} km</div>
                <div class="metric-label">${k("visibility")}</div>
              </div>
            ` : ""}
      </div>
    `;
  }
  _renderCurrentWeatherSection(r, e, t, n, i, s) {
    return d`
      <div class="current-weather-section">
        ${this.config.compact_mode === !0 ? d`
              ${this._renderCurrentWeatherCompactMode(
      r,
      e,
      t,
      n,
      i,
      s
    )}
            ` : d`
              ${this._renderCurrentWeather(
      r,
      e,
      t,
      n,
      i,
      s
    )}
            `}
      </div>
    `;
  }
  isDay() {
    const r = /* @__PURE__ */ new Date(), e = this._getEntityState(this.config.entity), t = this._getEntityState(this.config.sun_entity || "sun.sun");
    let n = null, i = null;
    if (e && e.attributes && "sunrise" in e.attributes && "sunset" in e.attributes && e.attributes.sunrise && e.attributes.sunset)
      n = new Date(e.attributes.sunrise), i = new Date(e.attributes.sunset);
    else if (t?.attributes) {
      const s = t.attributes.next_rising ? new Date(t.attributes.next_rising) : null, a = t.attributes.next_setting ? new Date(t.attributes.next_setting) : null;
      if (s && a) {
        const o = s > r ? new Date(s.getTime() - 864e5) : s, l = a;
        n = o, i = l;
      }
    }
    return !n || !i ? !0 : r >= n && r < i;
  }
  render() {
    if (Et((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return d``;
    const r = this._getEntityState(this.config.entity), e = this._getEntityState(this.config.sun_entity || "sun.sun");
    if (!r)
      return d`<div>Entity not found: ${this.config.entity}</div>`;
    const t = this.config.show_location !== !1, n = this.config.location || k("location"), i = r.attributes.temperature, s = r.state, a = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null, o = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null, l = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null, c = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null, h = a ? parseFloat(a.state) : r.attributes.wind_speed || 0, u = o ? parseFloat(o.state) : r.attributes.wind_bearing || 0, p = r.attributes.humidity || 0, g = r.attributes.pressure || 0, w = r.attributes.visibility || 0, $ = this.config.forecast_hours ?? 6;
    return d`
      ${t ? d`
            <div class="header">
              <div class="location">${n}</div>
            </div>
          ` : ""}
      ${this.config.show_warnings ? this._renderWarningSection(c) : ""}

      <div class="current-weather">
        <div>
          <div class="current-temp">${i}°</div>
          <div class="condition">${k(s)}</div>
        </div>
        <div class="current-details">
          <div
            class="weather-icon"
            style="color: var(--icon-color, #fff); width: 64px; height: 64px;"
          >
            ${gt(
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
      u,
      p,
      g,
      w,
      l
    )}
      ${this.config.compact_mode === !1 && (this.config.show_temperature === !0 || this.config.show_precipitation === !0 || this.config.show_sunshine === !0) ? d`
            <div class="section-title">
              <ha-icon icon="mdi:clock"></ha-icon>
              ${k("forecast_hours", { hours: $ })}
            </div>
          ` : ""}
      ${(this.config.chart_order || [
      "temperature",
      "precipitation",
      "sunshine",
      "wind",
      "forecast"
    ]).map((I) => {
      switch (I) {
        case "temperature":
          return this._renderForecastTemperature($);
        case "precipitation":
          return this._renderForecastPrecipitation($);
        case "sunshine":
          return this._renderForecastSunshine(r, e, $);
        case "wind":
          return this._renderForecastWind($);
        case "forecast":
          return this._showDailyForecast();
        default:
          return "";
      }
    })}
    `;
  }
  _renderCurrentWeatherCompactMode(r, e, t, n, i, s) {
    return d`
      <div class="metrics-table">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(r)} km/h</div>
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
        ${s ? d`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                  <div class="metric-value">${parseFloat(s.state).toFixed(1)}h</div>
                </div>
              ` : ""}
        ${i > 0 ? d`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                  <div class="metric-value">${i} km</div>
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
  // @property({ type: Function }) formatDate!: (dateStr: string) => string;
  _renderDailyForecastChart() {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<daily-forecast-chart
          .forecast=${this._forecast?.slice(0, 7) ?? []}
          .forecastLoading=${this._forecastLoading}
          .show_forecast=${this.config.show_forecast !== !1}
          .config=${this.config}
          ._t=${k}
          .getWeatherIcon=${gt}
          .isDay=${this.isDay()}
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
          .getWeatherIcon=${gt}
        ></daily-forecast-diagram>` : d``;
  }
};
pe([
  m({ attribute: !1 })
], te.prototype, "hass", 2);
pe([
  m({ attribute: !1 })
], te.prototype, "config", 2);
pe([
  at()
], te.prototype, "_forecast", 2);
pe([
  at()
], te.prototype, "_hourlyForecast", 2);
pe([
  at()
], te.prototype, "_forecastLoading", 2);
pe([
  at()
], te.prototype, "_openWarnings", 2);
te = pe([
  V("swissweather-card")
], te);
window.customCards || (window.customCards = []);
window.customCards.push({
  type: "swissweather-card",
  name: "SwissWeather Card",
  description: "Eine Custom Card für Schweizer Wetterinformationen im MeteoSchweiz-Design",
  preview: !0,
  documentationURL: "https://github.com/dmoo500/ha-swissweather-card"
});
console.log("✅ SwissWeatherCard fully loaded and registered");
const Ps = (r, e, t) => {
  if (!r)
    return d``;
  const n = {
    "clear-night": Is(t),
    cloudy: Fs(),
    fog: Bs(t),
    hail: js(),
    lightning: qs(t),
    "lightning-rainy": Qs(t),
    partlycloudy: e ? Xs() : Js(),
    pouring: Zs(t),
    rainy: Vs(t),
    snowy: Ks(t),
    "snowy-rainy": Ys(),
    sunny: Us(),
    windy: Cr(t),
    "windy-variant": Cr(t),
    exceptional: ea()
  };
  return r ? n[r] : d``;
}, Is = (r) => y`
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
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), i = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + n;
  return y`
    <use href="#starIcon" x="0" y="0" transform="translate(${s},${i}) scale(0.5)"/>
    `;
})}
  </g>
`, Us = (r) => y`
  <defs>
    <linearGradient id="sunGradient" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fcd966"/>
      <stop offset=".45" stop-color="#fcd966"/>
      <stop offset="1" stop-color="#fccd34"/>
      <animateTransform attributeName="gradientTransform" dur="18s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/>
    </linearGradient>
  </defs>
  <!-- sun -->
  <g id="sunIcon" transform="translate(168,-30) scale(3)">
    <circle cx="32" cy="32" r="14" fill="url(#sunGradient)" stroke="#fcd34d" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5">
      <animateTransform attributeName="transform" dur="18s" repeatCount="indefinite" type="rotate" values="360 32 32; 0 32 32"/>
    </circle>
  </g>
`, Fs = (r) => y`
  <defs>
    <linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="cloudIcon">
      <path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
  </defs>
  
  <!-- Cloud 1 -->
  <g>
    <use href="#cloudIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 2 -->
  <g>
    <use href="#cloudIcon" x="-30" y="-10" width="60" height="30" transform="scale(1.5) translate(180,60)" opacity="0.7"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-20,0;0,0" dur="22s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 3 -->
  <g>
    <use href="#cloudIcon" x="0" y="-40" width="40" height="20" transform="scale(1) translate(300,100)" opacity="0.5"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;15,0;0,0" dur="14s" repeatCount="indefinite"/>
  </g>
  `, Bs = (r) => y`
  <defs>
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
    <g id="fogIcon">
      <path fill="url(#fogCloud)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="none" stroke="url(#fogLine1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30">
        <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </path>
      <path fill="none" stroke="url(#fogLine2)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30">
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </path>
    </g>
  </defs>

  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), i = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + n;
  return y`
    <g>
      <use href="#fogIcon" x="0" y="0" transform="translate(${s},${i}) scale(0.5)"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
    </g>
    `;
})}
  `, js = (r) => y`
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
  <!-- Cloud -->
  <g>
    <use href="#hailIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 2 -->
  <g>
    <use href="#hailIcon" x="-30" y="-10" width="60" height="30" transform="scale(1.5) translate(180,60)" opacity="0.7"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-20,0;0,0" dur="22s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 3 -->
  <g>
    <use href="#hailIcon" x="0" y="-40" width="40" height="20" transform="scale(1) translate(300,100)" opacity="0.5"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;15,0;0,0" dur="14s" repeatCount="indefinite"/>
  </g>
  `, Vs = (r) => y`
  <defs>
    <linearGradient id="rainGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="rainIcon">
      <path fill="url(#rainGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <linearGradient id="rainDropGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#3a86ff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#3a86ff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#rainIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  
  <!-- Rain drops -->
  ${Array.from({ length: Math.ceil(r / 20) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), i = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 20 + n;
  return y`
    <line x1="${s}" y1="${i}" x2="${s}" y2="${i + 10}" stroke="url(#rainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${i}; ${i + 20}" dur="1s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${i + 10}; ${i + 30}" dur="1s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `;
y`<g transform="translate(168,-30) scale(3)"><circle cx="24" cy="42" r="4" fill="#a8dadc"/><circle cx="40" cy="42" r="4" fill="#a8dadc"/><circle cx="32" cy="34" r="4" fill="#a8dadc"/><path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></g>`;
const Zs = (r) => y`
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
  ${Array.from({ length: Math.ceil(r / 20) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), i = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 20 + n;
  return y`
    <line x1="${s}" y1="${i}" x2="${s}" y2="${i + 10}" stroke="url(#extremeRainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${i}; ${i + 20}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${i + 10}; ${i + 30}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="0.5s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, Cr = (r) => y`
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
  ${Array.from({ length: Math.ceil(r / 50) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), i = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 50 + n;
  return y`
    <line x1="${s}" y1="${i}" x2="${s + 30}" y2="${i}" stroke="url(#windLineGradient)" stroke-width="4" stroke-linecap="round">
      <animate attributeName="x1" values="${s}; ${s + 10}; ${s}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="${s + 30}; ${s + 40}; ${s + 30}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0.4; 1" dur="3s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, qs = (r) => y`
  <defs>
    <linearGradient id="thunderstormGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="thunderstormIcon">
      <path fill="url(#thunderstormGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="#facc15" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M30 35l-8 12h6l-8 12"/>
    </g>
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#thunderstormIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  
  <!-- Lightning flashes -->
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), i = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + n;
  return y`
    <g transform="translate(${s},${i}) scale(0.5)">
      <path fill="#facc15" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M30 35l-8 12h6l-8 12" opacity="0">
        <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" begin="${e * 2 % 10}s"/>
      </path>
    </g>
    `;
})}
  `, Qs = (r) => y`
  <defs>
    <linearGradient id="thunderstormRainGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="thunderstormRainIcon">
      <path fill="url(#thunderstormRainGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="#facc15" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M30 35l-8 12h6l-8 12"/>
    </g>
    <linearGradient id="thunderstormRainDropGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#3a86ff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#3a86ff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#thunderstormRainIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>

  <!-- Rain drops -->
  ${Array.from({ length: Math.ceil(r / 20) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), i = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 20 + n;
  return y`
    <line x1="${s}" y1="${i}" x2="${s}" y2="${i + 10}" stroke="url(#thunderstormRainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${i}; ${i + 20}" dur="1s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${i + 10}; ${i + 30}" dur="1s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite"/>
    </line>
    `;
})}
  <!-- Lightning flashes -->
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), i = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + n;
  return y`
    <g transform="translate(${s},${i}) scale(0.5)">
      <path fill="#facc15" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M30 35l-8 12h6l-8 12" opacity="0">
        <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" begin="${e * 2 % 10}s"/>
      </path>
    </g>
    `;
})}
  `, Ys = (r) => y`
  <defs>
    <linearGradient id="sleetGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="sleetIcon">
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
  
  <!-- Cloud -->
  <g>
    <use href="#sleetIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 2 -->
  <g>
    <use href="#sleetIcon" x="-30" y="-10" width="60" height="30" transform="scale(1.5) translate(180,60)" opacity="0.7"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-20,0;0,0" dur="22s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 3 -->
  <g>
    <use href="#sleetIcon" x="0" y="-40" width="40" height="20" transform="scale(1) translate(300,100)" opacity="0.5"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;15,0;0,0" dur="14s" repeatCount="indefinite"/>
  </g>
  `, Ks = (r) => y`
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
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#snowIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  <!-- Snow flakes -->
  <g>
  ${Array.from({ length: Math.ceil(r / 20) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), i = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 20 + n;
  return y`
    <g transform="translate(${s},${i}) scale(0.5)">
      <use href="#snowFlakeIcon" x="0" y="0" width="8" height="8" opacity="1"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,20" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite"/>
    </g>
    `;
})}
  </g>
  `, Xs = (r) => y`
  <defs>
    <linearGradient id="partlyCloudyDayGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="partlyCloudyDayIcon">
      <path fill="url(#partlyCloudyDayGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <g id="sunIcon">
      <circle cx="12" cy="12" r="6" fill="#ffd60a" stroke="#fbbf24" stroke-width="1"/>
      <g stroke="#fbbf24" stroke-width="1">
        <line x1="12" y1="1" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="23"/>
        <line x1="1" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="4.22" x2="6.36" y2="6.36"/>
        <line x1="17.64" y1="17.64" x2="19.78" y2="19.78"/>
        <line x1="4.22" y1="19.78" x2="6.36" y2="17.64"/>
        <line x1="17.64" y1="6.36" x2="19.78" y2="4.22"/>
      </g>
    </g>
  </defs>
  <!-- Sun -->
  <g>
    <use href="#sunIcon" x="0" y="0" width="40" height="40" transform="scale(1.5) translate(30,10)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="60s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud -->
  <g>
    <use href="#partlyCloudyDayIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 2 -->
  <g>
    <use href="#partlyCloudyDayIcon" x="-30" y="-10" width="60" height="30" transform="scale(1.5) translate(180,60)" opacity="0.7"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-20,0;0,0" dur="22s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 3 -->
  <g>
    <use href="#partlyCloudyDayIcon" x="0" y="-40" width="40" height="20" transform="scale(1) translate(300,100)" opacity="0.5"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;15,0;0,0" dur="14s" repeatCount="indefinite"/>
  </g>
  `, Js = (r) => y`
  <defs>
    <linearGradient id="partlyCloudyNightGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="partlyCloudyNightIcon">
      <path fill="url(#partlyCloudyNightGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <g id="moonIcon">
      <path fill="#fbbf24" stroke="#f59e0b" stroke-width="1" d="M12 2a10 10 0 1010 10A8 8 0 0112 2z"/>
    </g>
  </defs>
  <!-- Moon -->
  <g>
    <use href="#moonIcon" x="0" y="0" width="40" height="40" transform="scale(1.5) translate(30,10)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="60s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud -->
  <g>
    <use href="#partlyCloudyNightIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 2 -->
  <g>
    <use href="#partlyCloudyNightIcon" x="-30" y="-10" width="60" height="30" transform="scale(1.5) translate(180,60)" opacity="0.7"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-20,0;0,0" dur="22s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 3 -->
  <g>
    <use href="#partlyCloudyNightIcon" x="0" y="-40" width="40" height="20" transform="scale(1) translate(300,100)" opacity="0.5"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;15,0;0,0" dur="14s" repeatCount="indefinite"/>
  </g>
  `, ea = (r) => y`
  <defs>
    <linearGradient id="hurricaneGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="hurricaneIcon">
      <path fill="url(#hurricaneGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <circle cx="32" cy="36" r="6" fill="#f87171" stroke="#b91c1c" stroke-width="1"/>
      <path fill="#f87171" stroke="#b91c1c" stroke-width="1" d="M32 30a6 6 0 016 6h-6V30zM32 42a6 6 0 01-6-6h6v6zM26 36a6 6 0 016-6v6H26zM38 36a6 6 0 01-6 6v-6h6z"/>
    </g>
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#hurricaneIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 2 -->
  <g>
    <use href="#hurricaneIcon" x="-30" y="-10" width="60" height="30" transform="scale(1.5) translate(180,60)" opacity="0.7"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-20,0;0,0" dur="22s" repeatCount="indefinite"/>
  </g>
  <!-- Cloud 3 -->
  <g>
    <use href="#hurricaneIcon" x="0" y="-40" width="40" height="20" transform="scale(1) translate(300,100)" opacity="0.5"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;15,0;0,0" dur="14s" repeatCount="indefinite"/>
  </g>
  `, Ar = (r, e) => r?.states[e], ta = (r, e) => {
  const t = /* @__PURE__ */ new Date(), n = Ar(r, e.entity), i = Ar(r, e.sun_entity || "sun.sun");
  let s = null, a = null;
  if (n && n.attributes && "sunrise" in n.attributes && "sunset" in n.attributes && n.attributes.sunrise && n.attributes.sunset)
    s = new Date(n.attributes.sunrise), a = new Date(n.attributes.sunset);
  else if (i?.attributes) {
    const o = i.attributes.next_rising ? new Date(i.attributes.next_rising) : null, l = i.attributes.next_setting ? new Date(i.attributes.next_setting) : null;
    if (o && l) {
      const c = o > t ? new Date(o.getTime() - 864e5) : o, h = l;
      s = c, a = h;
    }
  }
  return !s || !a ? !0 : t >= s && t < a;
};
var ra = Object.defineProperty, ia = Object.getOwnPropertyDescriptor, Ft = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? ia(e, t) : e, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (i = (n ? a(e, t, i) : a(i)) || i);
  return n && i && ra(e, t, i), i;
};
Ht({
  // Loads the language by returning a JSON structure for a given language
  loader: (r) => Lt[r]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard (BG)");
console.log("🎯 customElements registry available:", !!customElements);
let it = class extends G {
  hass;
  config;
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  updated(r) {
    super.updated(r);
  }
  static get styles() {
    return j`
      :host {
        display: block;
        box-shadow: none;
        height: 260px;
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
        z-index: 1;
        font-size: 48px;
        font-weight: bold;
        text-align: center;
        
      }

      .img-svg {
        position: absolute;
        margin-top: 60px; // 48px same as font-size of temperature + quarter of border
        inset: 0;
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        height: 200px;
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
  setConfig(r) {
    if (!r.entity)
      throw new Error("You need to define an entity");
    this.config = r;
  }
  getCardSize() {
    return 8;
  }
  static getStubConfig() {
    return {
      type: "custom:swissweather-bg-card",
      entity: ""
    };
  }
  static getConfigElement() {
    return document.createElement("swissweather-card-editor");
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return ls;
  }
  _getEntityState(r) {
    return this.hass?.states[r];
  }
  render() {
    if (Et((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return d``;
    const r = this._getEntityState(this.config.entity), e = r.attributes.temperature, t = r.state, n = this.clientWidth || 300;
    return d`
      <div>
        <div class="temperature">
          ${typeof e == "number" && !isNaN(e) ? e : "--"}°C
        </div>
        ${t ? d`<div class="img-svg">
            <svg viewBox="0 0 ${n} 200" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid slice">
                ${n > 0 ? Ps(t, ta(this.hass, this.config), n) : y``}
            </svg>
          </div>
          <div class="condition">${k(t)}</div> ` : d``}
      </div>
    `;
  }
};
Ft([
  m({ attribute: !1 })
], it.prototype, "hass", 2);
Ft([
  m({ attribute: !1 })
], it.prototype, "config", 2);
it = Ft([
  V("swissweather-bg-card")
], it);
window.customCards || (window.customCards = []);
window.customCards.push({
  type: "swissweather-bg-card",
  name: "SwissWeather Animated Background Card",
  description: "Custom Card to show animated weather backgrounds",
  preview: !0,
  documentationURL: "https://github.com/dmoo500/ha-swissweather-card"
});
console.log("✅ SwissWeatherBGCard fully loaded and registered");
console.log("📦 SwissWeather Card module loading started...");
console.log("📦 Browser support check:", {
  customElements: !!window.customElements,
  hasReflect: !!window.Reflect
});
console.log("📦 SwissWeather Card TypeScript file imported");
setTimeout(() => {
  const r = customElements.get("swissweather-card"), e = customElements.get("swissweather-card-editor");
  console.log("🔍 SwissWeather Card registration status:", r ? "SUCCESS ✅" : "FAILED ❌"), console.log("🔍 SwissWeather Editor registration status:", e ? "SUCCESS ✅" : "FAILED ❌"), r ? (console.log("🔍 Element constructor:", r), console.log("🔍 Element prototype:", r.prototype)) : (console.error('❌ Custom element "swissweather-card" was not registered!'), console.log("🔍 Checking custom elements registry..."));
}, 100);
console.info(
  "%c SWISSWEATHER-CARD %c v1.0.0 ",
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "swissweather-card",
  name: "SwissWeather Card",
  description: "Eine Card im Stil der SwissWeather App für Home Assistant 2025.8+",
  preview: !1,
  documentationURL: "https://github.com/your-username/ha-swissweather-card"
});
console.log("📦 SwissWeather Card module loading completed");
export {
  R as DailyForecastChart,
  le as DailyForecastDiagram,
  X as ForecastTemperatureChart,
  J as PrecipitationChart,
  P as SunshineChart,
  Ge as SwissweatherCardEditor,
  ee as WindChart
};
//# sourceMappingURL=swissweather-card.js.map

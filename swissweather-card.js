const Vi = "1.6.0";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = globalThis, Yt = ut.ShadowRoot && (ut.ShadyCSS === void 0 || ut.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Kt = Symbol(), Mr = /* @__PURE__ */ new WeakMap();
let ei = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== Kt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Yt && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Mr.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Mr.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const qi = (r) => new ei(typeof r == "string" ? r : r + "", void 0, Kt), G = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce(((i, n, s) => i + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + r[s + 1]), r[0]);
  return new ei(t, r, Kt);
}, Zi = (r, e) => {
  if (Yt) r.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const i = document.createElement("style"), n = ut.litNonce;
    n !== void 0 && i.setAttribute("nonce", n), i.textContent = t.cssText, r.appendChild(i);
  }
}, Sr = Yt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return qi(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Yi, defineProperty: Ki, getOwnPropertyDescriptor: Qi, getOwnPropertyNames: Xi, getOwnPropertySymbols: Ji, getPrototypeOf: en } = Object, Mt = globalThis, Tr = Mt.trustedTypes, tn = Tr ? Tr.emptyScript : "", rn = Mt.reactiveElementPolyfillSupport, Ze = (r, e) => r, mt = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? tn : null;
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
} }, Qt = (r, e) => !Yi(r, e), Nr = { attribute: !0, type: String, converter: mt, reflect: !1, useDefault: !1, hasChanged: Qt };
Symbol.metadata ??= Symbol("metadata"), Mt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ke = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Nr) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), n = this.getPropertyDescriptor(e, i, t);
      n !== void 0 && Ki(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: n, set: s } = Qi(this.prototype, e) ?? { get() {
      return this[t];
    }, set(o) {
      this[t] = o;
    } };
    return { get: n, set(o) {
      const a = n?.call(this);
      s?.call(this, o), this.requestUpdate(e, a, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Nr;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ze("elementProperties"))) return;
    const e = en(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ze("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ze("properties"))) {
      const t = this.properties, i = [...Xi(t), ...Ji(t)];
      for (const n of i) this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, n] of t) this.elementProperties.set(i, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const n = this._$Eu(t, i);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const n of i) t.unshift(Sr(n));
    } else e !== void 0 && t.push(Sr(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Zi(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((e) => e.hostDisconnected?.()));
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    const i = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, i);
    if (n !== void 0 && i.reflect === !0) {
      const s = (i.converter?.toAttribute !== void 0 ? i.converter : mt).toAttribute(t, i.type);
      this._$Em = e, s == null ? this.removeAttribute(n) : this.setAttribute(n, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const i = this.constructor, n = i._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const s = i.getPropertyOptions(n), o = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : mt;
      this._$Em = n;
      const a = o.fromAttribute(t, s.type);
      this[n] = a ?? this._$Ej?.get(n) ?? a, this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      const n = this.constructor, s = this[e];
      if (i ??= n.getPropertyOptions(e), !((i.hasChanged ?? Qt)(s, t) || i.useDefault && i.reflect && s === this._$Ej?.get(e) && !this.hasAttribute(n._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: n, wrapped: s }, o) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, o ?? t ?? this[e]), s !== !0 || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), n === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
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
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, s] of i) {
        const { wrapped: o } = s, a = this[n];
        o !== !0 || this._$AL.has(n) || a === void 0 || this.C(n, void 0, s, a);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((i) => i.hostUpdate?.())), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
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
ke.elementStyles = [], ke.shadowRootOptions = { mode: "open" }, ke[Ze("elementProperties")] = /* @__PURE__ */ new Map(), ke[Ze("finalized")] = /* @__PURE__ */ new Map(), rn?.({ ReactiveElement: ke }), (Mt.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xt = globalThis, yt = Xt.trustedTypes, Lr = yt ? yt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ti = "$lit$", Z = `lit$${Math.random().toFixed(9).slice(2)}$`, ri = "?" + Z, nn = `<${ri}>`, pe = document, Qe = () => pe.createComment(""), Xe = (r) => r === null || typeof r != "object" && typeof r != "function", Jt = Array.isArray, sn = (r) => Jt(r) || typeof r?.[Symbol.iterator] == "function", zt = `[ 	
\f\r]`, Be = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Hr = /-->/g, Or = />/g, oe = RegExp(`>|${zt}(?:([^\\s"'>=/]+)(${zt}*=${zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Er = /'/g, Gr = /"/g, ii = /^(?:script|style|textarea|title)$/i, ni = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), d = ni(1), w = ni(2), Ae = Symbol.for("lit-noChange"), N = Symbol.for("lit-nothing"), zr = /* @__PURE__ */ new WeakMap(), le = pe.createTreeWalker(pe, 129);
function si(r, e) {
  if (!Jt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Lr !== void 0 ? Lr.createHTML(e) : e;
}
const on = (r, e) => {
  const t = r.length - 1, i = [];
  let n, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = Be;
  for (let a = 0; a < t; a++) {
    const l = r[a];
    let c, u, h = -1, p = 0;
    for (; p < l.length && (o.lastIndex = p, u = o.exec(l), u !== null); ) p = o.lastIndex, o === Be ? u[1] === "!--" ? o = Hr : u[1] !== void 0 ? o = Or : u[2] !== void 0 ? (ii.test(u[2]) && (n = RegExp("</" + u[2], "g")), o = oe) : u[3] !== void 0 && (o = oe) : o === oe ? u[0] === ">" ? (o = n ?? Be, h = -1) : u[1] === void 0 ? h = -2 : (h = o.lastIndex - u[2].length, c = u[1], o = u[3] === void 0 ? oe : u[3] === '"' ? Gr : Er) : o === Gr || o === Er ? o = oe : o === Hr || o === Or ? o = Be : (o = oe, n = void 0);
    const y = o === oe && r[a + 1].startsWith("/>") ? " " : "";
    s += o === Be ? l + nn : h >= 0 ? (i.push(c), l.slice(0, h) + ti + l.slice(h) + Z + y) : l + Z + (h === -2 ? a : y);
  }
  return [si(r, s + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
let Wt = class oi {
  constructor({ strings: e, _$litType$: t }, i) {
    let n;
    this.parts = [];
    let s = 0, o = 0;
    const a = e.length - 1, l = this.parts, [c, u] = on(e, t);
    if (this.el = oi.createElement(c, i), le.currentNode = this.el.content, t === 2 || t === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (n = le.nextNode()) !== null && l.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const h of n.getAttributeNames()) if (h.endsWith(ti)) {
          const p = u[o++], y = n.getAttribute(h).split(Z), x = /([.?@])?(.*)/.exec(p);
          l.push({ type: 1, index: s, name: x[2], strings: y, ctor: x[1] === "." ? ln : x[1] === "?" ? cn : x[1] === "@" ? dn : St }), n.removeAttribute(h);
        } else h.startsWith(Z) && (l.push({ type: 6, index: s }), n.removeAttribute(h));
        if (ii.test(n.tagName)) {
          const h = n.textContent.split(Z), p = h.length - 1;
          if (p > 0) {
            n.textContent = yt ? yt.emptyScript : "";
            for (let y = 0; y < p; y++) n.append(h[y], Qe()), le.nextNode(), l.push({ type: 2, index: ++s });
            n.append(h[p], Qe());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ri) l.push({ type: 2, index: s });
      else {
        let h = -1;
        for (; (h = n.data.indexOf(Z, h + 1)) !== -1; ) l.push({ type: 7, index: s }), h += Z.length - 1;
      }
      s++;
    }
  }
  static createElement(e, t) {
    const i = pe.createElement("template");
    return i.innerHTML = e, i;
  }
};
function Ce(r, e, t = r, i) {
  if (e === Ae) return e;
  let n = i !== void 0 ? t._$Co?.[i] : t._$Cl;
  const s = Xe(e) ? void 0 : e._$litDirective$;
  return n?.constructor !== s && (n?._$AO?.(!1), s === void 0 ? n = void 0 : (n = new s(r), n._$AT(r, t, i)), i !== void 0 ? (t._$Co ??= [])[i] = n : t._$Cl = n), n !== void 0 && (e = Ce(r, n._$AS(r, e.values), n, i)), e;
}
let an = class {
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
    const { el: { content: t }, parts: i } = this._$AD, n = (e?.creationScope ?? pe).importNode(t, !0);
    le.currentNode = n;
    let s = le.nextNode(), o = 0, a = 0, l = i[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let c;
        l.type === 2 ? c = new er(s, s.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(s, l.name, l.strings, this, e) : l.type === 6 && (c = new hn(s, this, e)), this._$AV.push(c), l = i[++a];
      }
      o !== l?.index && (s = le.nextNode(), o++);
    }
    return le.currentNode = pe, n;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}, er = class ai {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, i, n) {
    this.type = 2, this._$AH = N, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = n, this._$Cv = n?.isConnected ?? !0;
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
    e = Ce(this, e, t), Xe(e) ? e === N || e == null || e === "" ? (this._$AH !== N && this._$AR(), this._$AH = N) : e !== this._$AH && e !== Ae && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : sn(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== N && Xe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(pe.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: i } = e, n = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Wt.createElement(si(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === n) this._$AH.p(t);
    else {
      const s = new an(n, this), o = s.u(this.options);
      s.p(t), this.T(o), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = zr.get(e.strings);
    return t === void 0 && zr.set(e.strings, t = new Wt(e)), t;
  }
  k(e) {
    Jt(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, n = 0;
    for (const s of e) n === t.length ? t.push(i = new ai(this.O(Qe()), this.O(Qe()), this, this.options)) : i = t[n], i._$AI(s), n++;
    n < t.length && (this._$AR(i && i._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}, St = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, n, s) {
    this.type = 1, this._$AH = N, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = s, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = N;
  }
  _$AI(e, t = this, i, n) {
    const s = this.strings;
    let o = !1;
    if (s === void 0) e = Ce(this, e, t, 0), o = !Xe(e) || e !== this._$AH && e !== Ae, o && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++) c = Ce(this, a[i + l], t, l), c === Ae && (c = this._$AH[l]), o ||= !Xe(c) || c !== this._$AH[l], c === N ? e = N : e !== N && (e += (c ?? "") + s[l + 1]), this._$AH[l] = c;
    }
    o && !n && this.j(e);
  }
  j(e) {
    e === N ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, ln = class extends St {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === N ? void 0 : e;
  }
}, cn = class extends St {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== N);
  }
}, dn = class extends St {
  constructor(e, t, i, n, s) {
    super(e, t, i, n, s), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Ce(this, e, t, 0) ?? N) === Ae) return;
    const i = this._$AH, n = e === N && i !== N || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== N && (i === N || n);
    n && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, hn = class {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Ce(this, e);
  }
};
const pn = Xt.litHtmlPolyfillSupport;
pn?.(Wt, er), (Xt.litHtmlVersions ??= []).push("3.3.1");
const un = (r, e, t) => {
  const i = t?.renderBefore ?? e;
  let n = i._$litPart$;
  if (n === void 0) {
    const s = t?.renderBefore ?? null;
    i._$litPart$ = n = new er(e.insertBefore(Qe(), s), s, void 0, t ?? {});
  }
  return n._$AI(r), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tr = globalThis;
let H = class extends ke {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = un(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return Ae;
  }
};
H._$litElement$ = !0, H.finalized = !0, tr.litElementHydrateSupport?.({ LitElement: H });
const fn = tr.litElementPolyfillSupport;
fn?.({ LitElement: H });
(tr.litElementVersions ??= []).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = (r) => (e, t) => {
  t !== void 0 ? t.addInitializer((() => {
    customElements.define(r, e);
  })) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gn = { attribute: !0, type: String, converter: mt, reflect: !1, hasChanged: Qt }, mn = (r = gn, e, t) => {
  const { kind: i, metadata: n } = t;
  let s = globalThis.litPropertyMetadata.get(n);
  if (s === void 0 && globalThis.litPropertyMetadata.set(n, s = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), s.set(t.name, r), i === "accessor") {
    const { name: o } = t;
    return { set(a) {
      const l = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(o, l, r);
    }, init(a) {
      return a !== void 0 && this.C(o, void 0, r, a), a;
    } };
  }
  if (i === "setter") {
    const { name: o } = t;
    return function(a) {
      const l = this[o];
      e.call(this, a), this.requestUpdate(o, l, r);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function m(r) {
  return (e, t) => typeof t == "object" ? mn(r, e, t) : ((i, n, s) => {
    const o = n.hasOwnProperty(s);
    return n.constructor.createProperty(s, i), o ? Object.getOwnPropertyDescriptor(n, s) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function me(r) {
  return m({ ...r, state: !0, attribute: !1 });
}
var li = Object.defineProperty, yn = Object.getOwnPropertyDescriptor, xn = (r, e, t) => e in r ? li(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, te = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? yn(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && li(e, t, n), n;
}, wn = (r, e, t) => xn(r, e + "", t);
let F = class extends H {
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
      (r) => d`
                      <div class="forecast-day">
                        <div class="forecast-date">${this.formatDate(r.datetime)}</div>
                        <div class="forecast-icon">
                          ${this.getWeatherIcon(
        r.condition,
        this.config.enable_animate_weather_icons ? "animated" : "mdi",
        "24px",
        !0
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
wn(F, "styles", G`
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
te([
  m({ type: Array })
], F.prototype, "forecast", 2);
te([
  m({ type: Boolean })
], F.prototype, "forecastLoading", 2);
te([
  m({ type: Boolean })
], F.prototype, "show_forecast", 2);
te([
  m({ type: Object })
], F.prototype, "config", 2);
te([
  m({ type: Function })
], F.prototype, "_t", 2);
te([
  m({ type: Function })
], F.prototype, "getWeatherIcon", 2);
te([
  m({ type: Function })
], F.prototype, "formatDate", 2);
F = te([
  z("daily-forecast-chart")
], F);
var ci = Object.defineProperty, vn = Object.getOwnPropertyDescriptor, bn = (r, e, t) => e in r ? ci(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Ne = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? vn(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && ci(e, t, n), n;
}, _n = (r, e, t) => bn(r, e + "", t);
let K = class extends H {
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
      const t = Math.min(...e), n = Math.max(...e) - t || 1, s = r.length, o = Math.max(360, Math.min(1600, s * 250)), a = 50, l = o / (s - 1), c = r.map((p, y) => p !== null ? `${y * l},${a - (p - t) / n * a}` : "").filter(Boolean).join(" "), u = this.forecastHours === 6 ? "84%" : this.forecastHours - 6 + 84 + "%", h = this.forecastHours === 6 ? "8%" : (18 - this.forecastHours) * 0.5 + 2 + "%";
      return w`<svg width="${u}" height="${a}" viewBox="0 0 ${o} ${a}" preserveAspectRatio="none" style="display:block;padding-left:${h};">
                <polyline points="${c}" fill="none" stroke="#db4a34" stroke-width="3" />
                ${r.map((p, y) => p !== null ? w`<circle r="3" fill="#db4a34" cx="${y * l}" cy="${a - (p - t) / n * a}" />` : null)}
                </svg>`;
    })()}
        </div>
        ${this.showHoursChartLabel(this.forecastHours)}
      </div>
    `;
  }
};
_n(K, "styles", G`
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
Ne([
  m({ type: Array })
], K.prototype, "hourlyForecast", 2);
Ne([
  m({ type: Number })
], K.prototype, "forecastHours", 2);
Ne([
  m({ type: Boolean })
], K.prototype, "show_temperature", 2);
Ne([
  m({ type: Function })
], K.prototype, "_t", 2);
Ne([
  m({ type: Function })
], K.prototype, "showHoursChartLabel", 2);
K = Ne([
  z("forecast-temperature-chart")
], K);
var di = Object.defineProperty, $n = Object.getOwnPropertyDescriptor, kn = (r, e, t) => e in r ? di(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Le = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? $n(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && di(e, t, n), n;
}, An = (r, e, t) => kn(r, e + "", t);
let Q = class extends H {
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
      const e = typeof r.precipitation == "number" && !isNaN(r.precipitation) ? r.precipitation : null, t = e !== null ? Math.round(e) : 2, i = typeof r.precipitation_probability == "number" && !isNaN(r.precipitation_probability) ? r.precipitation_probability : null, n = i !== null ? Math.round(i % 10) : 2;
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
An(Q, "styles", G`
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
Le([
  m({ type: Array })
], Q.prototype, "hourlyForecast", 2);
Le([
  m({ type: Number })
], Q.prototype, "forecastHours", 2);
Le([
  m({ type: Boolean })
], Q.prototype, "show_precipitation", 2);
Le([
  m({ type: Function })
], Q.prototype, "_t", 2);
Le([
  m({ type: Function })
], Q.prototype, "showHoursChartLabel", 2);
Q = Le([
  z("precipitation-chart")
], Q);
var hi = Object.defineProperty, Cn = Object.getOwnPropertyDescriptor, Mn = (r, e, t) => e in r ? hi(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, re = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Cn(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && hi(e, t, n), n;
}, Sn = (r, e, t) => Mn(r, e + "", t);
let U = class extends H {
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
      let i = -1, n = -1;
      return r && t && (i = Math.round(
        (r.getTime() - t.getTime()) / (3600 * 1e3)
      )), e && t && (n = Math.round(
        (e.getTime() - t.getTime()) / (3600 * 1e3)
      )), d`
                    ${i >= 0 && i < this.forecastHours ? d`
                          <div
                            style="position:absolute;left:calc(${i / this.forecastHours * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
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
                ${this.hourlyForecast.slice(0, this.forecastHours).map((r) => {
      const e = r, t = typeof e.sunshine == "number" && !isNaN(e.sunshine) ? e.sunshine : typeof e.sunshine_duration == "number" && !isNaN(e.sunshine_duration) ? e.sunshine_duration : null, i = t !== null ? Math.round(t) : 2;
      return d`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#fbc02d; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${t !== null ? t.toFixed(0) + " min" : ""}
                      </span>
                      <div class="chart-bar-sunshine" style="height: ${i}px;"></div>
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
Sn(U, "styles", G`
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
re([
  m({ type: Array })
], U.prototype, "hourlyForecast", 2);
re([
  m({ type: Number })
], U.prototype, "forecastHours", 2);
re([
  m({ type: Boolean })
], U.prototype, "show_sunshine", 2);
re([
  m({ type: Object })
], U.prototype, "weatherEntity", 2);
re([
  m({ type: Object })
], U.prototype, "sun_entity", 2);
re([
  m({ type: Function })
], U.prototype, "_t", 2);
re([
  m({ type: Function })
], U.prototype, "showHoursChartLabel", 2);
U = re([
  z("sunshine-chart")
], U);
var pi = Object.defineProperty, Tn = Object.getOwnPropertyDescriptor, Nn = (r, e, t) => e in r ? pi(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, He = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Tn(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && pi(e, t, n), n;
}, Ln = (r, e, t) => Nn(r, e + "", t);
let X = class extends H {
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
      const t = Math.min(...e), n = Math.max(...e) - t || 1, s = r.length, o = Math.max(360, Math.min(1600, s * 250)), a = 50, l = o / (s - 1), c = r.map((p, y) => p !== null ? `${y * l},${a - (p - t) / n * a}` : "").filter(Boolean).join(" "), u = this.forecastHours === 6 ? "84%" : this.forecastHours - 6 + 84 + "%", h = this.forecastHours === 6 ? "8%" : (18 - this.forecastHours) * 0.5 + 2 + "%";
      return w`<svg width="${u}" height="${a}" viewBox="0 0 ${o} ${a}" preserveAspectRatio="none" style="display:block;padding-left:${h};">
                <polyline points="${c}" fill="none" stroke="#44739e" stroke-width="3" />
                ${r.map((p, y) => p !== null ? w`<circle r="3" fill="#44739e" cx="${y * l}" cy="${a - (p - t) / n * a}" />` : null)}
              </svg>`;
    })()}
              </div>
              ${this.showHoursChartLabel(this.forecastHours)}
            </div>
          ` : d`` : d``;
  }
};
Ln(X, "styles", G`
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
He([
  m({ type: Array })
], X.prototype, "hourlyForecast", 2);
He([
  m({ type: Number })
], X.prototype, "forecastHours", 2);
He([
  m({ type: Boolean })
], X.prototype, "show_wind", 2);
He([
  m({ type: Function })
], X.prototype, "_t", 2);
He([
  m({ type: Function })
], X.prototype, "showHoursChartLabel", 2);
X = He([
  z("wind-chart")
], X);
var ui = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, On = (r, e, t) => e in r ? ui(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Oe = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Hn(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && ui(e, t, n), n;
}, En = (r, e, t) => On(r, e + "", t);
let J = class extends H {
  forecast = [];
  hourlyForecast = [];
  config;
  getWeatherIcon;
  standalone = !1;
  // fallback function to get a CSS variable with a default value
  getCSSVariable(r, e = "50") {
    const t = getComputedStyle(document.documentElement).getPropertyValue(r).trim();
    return Number.parseInt(t || e);
  }
  render() {
    const r = this.forecast.slice(0, 7), e = this.hourlyForecast.slice(0, r.length * 24);
    if (!e.length) return d`<div>No hourly forecast available</div>`;
    const t = r.length, i = this.standalone && this.config.grid_options?.rows || 2, n = this.standalone ? i * this.getCSSVariable("--row-height", "56") : 200, s = (this.standalone, 400), o = s, a = n, l = new Date(e[0].datetime), c = new Date(e[e.length - 1].datetime), u = (c.getTime() - l.getTime()) / (3600 * 1e3) + 1, h = 16, p = a - h * 2, y = o - h * 2, x = y / t, P = Math.min(
      120,
      Math.max(80, p * 0.35)
    ), we = Math.max(10, p * 0.05), ie = p - P - we, I = Math.min(x * 0.7, P * 0.4), at = Math.max(10, P * 0.08), Pe = Math.max(12, P * 0.12), fr = h + 10 + at, gr = fr + 10, Fi = gr + I + 10, Re = h + P + we;
    console.log("Simplified layout:", {
      nDays: t,
      containerWidth: s,
      containerHeight: n,
      dayWidth: x,
      iconSize: I,
      calculatedDayGroupHeight: P,
      gapBetween: we,
      chartHeight: ie,
      chartTop: Re,
      tempLineYMax: Re,
      tempLineY0: Re + ie,
      actualChartHeight: ie,
      usableHeight: p,
      totalHours: u,
      "First hour": l.toISOString(),
      "Last hour": c.toISOString()
    });
    const ne = x / 24, We = e.map((f) => typeof f.temperature == "number" ? f.temperature : null), mr = Math.min(...We.filter((f) => f !== null)), yr = Math.max(...We.filter((f) => f !== null)), B = Re, R = Re + ie, xr = e.map((f) => typeof f.precipitation == "number" ? f.precipitation : 0), wr = e.map(
      (f) => typeof f.precipitation_probability == "number" ? f.precipitation_probability % 10 : 0
    ), Ui = Math.max(...xr, ...wr, 1), Gt = {};
    r.forEach((f, g) => {
      const b = new Date(f.datetime), _ = `${b.getFullYear()}-${b.getMonth()}-${b.getDate()}`;
      Gt[_] = g;
    }), console.log("Day mapping created:", Gt);
    function Ii(f) {
      const g = `${f.getFullYear()}-${f.getMonth()}-${f.getDate()}`, b = Gt[g], _ = f.getHours();
      return {
        dayIdx: b !== void 0 ? b : -1,
        hourInDay: _ >= 0 && _ < 24 ? _ : -1
      };
    }
    const se = {};
    for (let f = 0; f < t; f++)
      for (let g = 0; g < 24; g++) {
        const b = `${f}-${g}`;
        se[b] = null;
      }
    e.forEach((f, g) => {
      if (f.datetime && We[g] !== null) {
        const b = new Date(f.datetime), { dayIdx: _, hourInDay: T } = Ii(b), j = `${_}-${T}`;
        (g < 5 || g >= e.length - 5) && console.log(`Hour ${g}: ${b.toISOString()} -> Day ${_}, Hour ${T}`, {
          temp: We[g],
          withinBounds: _ >= 0 && _ < t && T >= 0 && T < 24
        }), _ >= 0 && _ < t && T >= 0 && T < 24 ? se[j] = {
          temp: We[g],
          precip: xr[g],
          precipProb: wr[g],
          originalIndex: g
        } : console.warn(`Data point ${g} outside bounds:`, {
          dayIdx: _,
          hourInDay: T,
          nDays: t,
          dt: b.toISOString()
        });
      }
    }), console.log("Full day grid created:", {
      totalSlots: Object.keys(se).length,
      filledSlots: Object.values(se).filter((f) => f !== null).length,
      nDays: t,
      hoursPerDay: 24
    });
    let be = Math.floor(mr / 5) * 5, _e = Math.ceil(yr / 5) * 5;
    be > 0 && (be = 0), _e < 0 && (_e = 0);
    const Fe = _e - be;
    console.log("Temperature scaling (with 0°C):", {
      minTemp: mr,
      maxTemp: yr,
      roundedMinTemp: be,
      roundedMaxTemp: _e,
      displayTempRange: Fe
    });
    const vr = [], lt = [];
    for (let f = 0; f < t; f++)
      for (let g = 0; g < 24; g++) {
        const b = `${f}-${g}`, _ = se[b];
        if (_ && _.temp !== null) {
          const T = h + f * x + g * ne + ne / 2, j = R - (_.temp - be) / Fe * (R - B);
          lt.push(`${T},${j}`);
        }
      }
    lt.length > 0 && (console.log(
      `Creating continuous temperature line with ${lt.length} points across ${t} days`
    ), vr.push(
      w`
          <!-- Main temperature line -->
          <polyline points="${lt.join(" ")}" fill="none" stroke="#e74c3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        `
    ));
    const $e = Math.max(3, Math.floor(ne) - 2), br = R, _r = 5 / Fe * (R - B), ct = _r / 5;
    console.log("Rain scaling:", {
      displayTempRange: Fe,
      fiveDegreeHeight: _r,
      mmToPixelRatio: ct,
      maxPrecip: Ui,
      "Example: 2mm height": 2 * ct
    });
    function Bi(f) {
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
      let b = g[0], _ = g[g.length - 1];
      for (let D = 1; D < g.length; D++)
        if (f < g[D].val) {
          _ = g[D], b = g[D - 1];
          break;
        }
      const T = (f - b.val) / (_.val - b.val), j = Math.round(b.color.r + (_.color.r - b.color.r) * T), Ue = Math.round(b.color.g + (_.color.g - b.color.g) * T), Ie = Math.round(b.color.b + (_.color.b - b.color.b) * T);
      return `rgb(${j},${Ue},${Ie})`;
    }
    const $r = [];
    for (let f = 0; f < t; f++)
      for (let g = 0; g < 24; g++) {
        const b = `${f}-${g}`, _ = se[b];
        if (_ && _.precipProb > 0) {
          const T = h + f * x + g * ne + ne / 2 - $e / 2, j = h + f * x, Ue = h + (f + 1) * x - $e, Ie = Math.max(j, Math.min(Ue, T)), D = _.precipProb * ct;
          $r.push(
            w`<rect x="${Ie}" y="${br - D}" width="${$e}" height="${D}"
              fill="#988d8dff" opacity="0.4" rx="1.5"/>`
          );
        }
      }
    const kr = [];
    for (let f = 0; f < t; f++)
      for (let g = 0; g < 24; g++) {
        const b = `${f}-${g}`, _ = se[b];
        if (_ && _.precip > 0) {
          const T = h + f * x + g * ne + ne / 2 - $e / 2, j = h + f * x, Ue = h + (f + 1) * x - $e, Ie = Math.max(j, Math.min(Ue, T)), D = _.precip * ct, ji = Bi(_.precip);
          kr.push(
            w`<rect x="${Ie}" y="${br - D}" width="${$e}" height="${D}"
              fill="${ji}" opacity="1" rx="1.5"/>`
          );
        }
      }
    const dt = [];
    if (e.length > 0) {
      for (let f = 0; f <= t; f++) {
        const g = h + f * x;
        f === 0 ? dt.push(
          w`<line x1="${g}" y1="${B}" x2="${g}" y2="${R}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
        ) : f === t ? dt.push(
          w`<line x1="${g}" y1="${B}" x2="${g}" y2="${R}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
        ) : dt.push(
          w`<line x1="${g}" y1="${B}" x2="${g}" y2="${R}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
        );
      }
      console.log(`Drawing ${t + 1} vertical lines for ${t} days:`, {
        "First day start": `${h}px`,
        "Last day end": `${h + t * x}px`,
        dayWidth: x,
        nDays: t,
        usableWidth: y,
        padding: h
      });
    }
    const Ar = [];
    if (t > 0)
      for (let f = 0; f < t; f++) {
        const g = h + f * x + x / 2, b = typeof r[f].templow == "number" ? Math.round(r[f].templow || r[f].temperature - 5) : "", _ = typeof r[f].temperature == "number" ? Math.round(r[f].temperature) : "";
        Ar.push(w`
        <g>
          <!-- Weekday -->
          <text x="${g}" y="${fr}" text-anchor="middle" font-size="${at}" class="weather-day">
            ${new Date(r[f].datetime).toLocaleDateString(void 0, { weekday: "short" })}
          </text>
          <!-- Icon -->
          <foreignObject x="${g - I / 2}" y="${gr}" width="${I}" height="${I}">
              ${this.getWeatherIcon(r[f].condition || "", this.config.enable_animate_weather_icons ? "animated" : "mdiAsSVG", I + "px", !0)}
          </foreignObject>
          <!-- Min/Max temp -->
          <text class="weather-temp" x="${g}" y="${Fi}" text-anchor="middle" font-size="${Pe}">${b}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${_}°</tspan></text>
        </g>
      `);
      }
    const Cr = [];
    for (let f = be; f <= _e; f += 5)
      if (f % 5 === 0) {
        const g = B + (_e - f) / Fe * (R - B);
        if (g >= B && g <= R) {
          const b = f % 10 === 0;
          console.log(
            `Temperature line: ${f}°C at y=${g} (${b ? "solid" : "dashed"}) - should be between ${B} and ${R}`
          ), Cr.push(
            w`<line x1="${h}" y1="${g}" x2="${o - h}" y2="${g}" 
                 stroke="#ddd" 
                 stroke-width="${b ? 1 : 0.5}" 
                 stroke-dasharray="${b ? "none" : "2,2"}" 
                 opacity="0.6" />
                 <text x="${h + 5}" y="${g - 2}" font-size="10" fill="#888" opacity="0.8">${f}°</text>`
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
          ${Cr} ${dt}
          <!-- Day groups (labels and icons) -->
          ${Ar}
          <!-- Precipitation bars -->
          ${$r} ${kr}
        </svg>

        <!-- Temperature lines in completely separate SVG overlay (continuous line, always on top) -->
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 ${o} ${a}"
          style="display:block; position: absolute; top: 0; left: 0; pointer-events: none;"
        >
          ${vr}
        </svg>
      </div>
    `;
  }
};
En(J, "styles", G`
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
], J.prototype, "forecast", 2);
Oe([
  m({ type: Array })
], J.prototype, "hourlyForecast", 2);
Oe([
  m({ type: Object })
], J.prototype, "config", 2);
Oe([
  m({ type: Function })
], J.prototype, "getWeatherIcon", 2);
Oe([
  m({ type: Boolean })
], J.prototype, "standalone", 2);
J = Oe([
  z("daily-forecast-diagram")
], J);
const Ft = "langChanged";
function Gn(r, e, t) {
  return Object.entries(Ut(e || {})).reduce((i, [n, s]) => i.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Ut(s))), r);
}
function zn(r, e) {
  const t = r.split(".");
  let i = e.strings;
  for (; i != null && t.length > 0; )
    i = i[t.shift()];
  return i != null ? i.toString() : null;
}
function Ut(r) {
  return typeof r == "function" ? r() : r;
}
const Dn = () => ({
  loader: () => Promise.resolve({}),
  empty: (r) => `[${r}]`,
  lookup: zn,
  interpolate: Gn,
  translationCache: {}
});
let Je = Dn();
function Ee(r) {
  return Je = Object.assign(Object.assign({}, Je), r);
}
function Pn(r) {
  window.dispatchEvent(new CustomEvent(Ft, { detail: r }));
}
function Rn(r, e, t = Je) {
  Pn({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = r,
    strings: t.strings = e
  });
}
function Wn(r, e) {
  const t = (i) => r(i.detail);
  return window.addEventListener(Ft, t, e), () => window.removeEventListener(Ft, t);
}
async function nt(r, e = Je) {
  const t = await e.loader(r, e);
  e.translationCache = {}, Rn(r, t, e);
}
function v(r, e, t = Je) {
  let i = t.translationCache[r] || (t.translationCache[r] = t.lookup(r, t) || t.empty(r, t));
  return e = e != null ? Ut(e) : null, e != null ? t.interpolate(i, e, t) : i;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fi = { CHILD: 2 }, Fn = (r) => (...e) => ({ _$litDirective$: r, values: e });
let gi = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, i) {
    this._$Ct = e, this._$AM = t, this._$Ci = i;
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
var Dt;
const xt = window, Me = xt.trustedTypes, Dr = Me ? Me.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, It = "$lit$", Y = `lit$${(Math.random() + "").slice(9)}$`, mi = "?" + Y, Un = `<${mi}>`, ue = document, wt = () => ue.createComment(""), et = (r) => r === null || typeof r != "object" && typeof r != "function", yi = Array.isArray, In = (r) => yi(r) || typeof r?.[Symbol.iterator] == "function", Pt = `[ 	
\f\r]`, je = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Pr = /-->/g, Rr = />/g, ae = RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Wr = /'/g, Fr = /"/g, xi = /^(?:script|style|textarea|title)$/i, Se = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), Ur = /* @__PURE__ */ new WeakMap(), ce = ue.createTreeWalker(ue, 129, null, !1);
function wi(r, e) {
  if (!Array.isArray(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Dr !== void 0 ? Dr.createHTML(e) : e;
}
const Bn = (r, e) => {
  const t = r.length - 1, i = [];
  let n, s = e === 2 ? "<svg>" : "", o = je;
  for (let a = 0; a < t; a++) {
    const l = r[a];
    let c, u, h = -1, p = 0;
    for (; p < l.length && (o.lastIndex = p, u = o.exec(l), u !== null); ) p = o.lastIndex, o === je ? u[1] === "!--" ? o = Pr : u[1] !== void 0 ? o = Rr : u[2] !== void 0 ? (xi.test(u[2]) && (n = RegExp("</" + u[2], "g")), o = ae) : u[3] !== void 0 && (o = ae) : o === ae ? u[0] === ">" ? (o = n ?? je, h = -1) : u[1] === void 0 ? h = -2 : (h = o.lastIndex - u[2].length, c = u[1], o = u[3] === void 0 ? ae : u[3] === '"' ? Fr : Wr) : o === Fr || o === Wr ? o = ae : o === Pr || o === Rr ? o = je : (o = ae, n = void 0);
    const y = o === ae && r[a + 1].startsWith("/>") ? " " : "";
    s += o === je ? l + Un : h >= 0 ? (i.push(c), l.slice(0, h) + It + l.slice(h) + Y + y) : l + Y + (h === -2 ? (i.push(void 0), a) : y);
  }
  return [wi(r, s + (r[t] || "<?>") + (e === 2 ? "</svg>" : "")), i];
};
let Bt = class vi {
  constructor({ strings: e, _$litType$: t }, i) {
    let n;
    this.parts = [];
    let s = 0, o = 0;
    const a = e.length - 1, l = this.parts, [c, u] = Bn(e, t);
    if (this.el = vi.createElement(c, i), ce.currentNode = this.el.content, t === 2) {
      const h = this.el.content, p = h.firstChild;
      p.remove(), h.append(...p.childNodes);
    }
    for (; (n = ce.nextNode()) !== null && l.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const h = [];
          for (const p of n.getAttributeNames()) if (p.endsWith(It) || p.startsWith(Y)) {
            const y = u[o++];
            if (h.push(p), y !== void 0) {
              const x = n.getAttribute(y.toLowerCase() + It).split(Y), C = /([.?@])?(.*)/.exec(y);
              l.push({ type: 1, index: s, name: C[2], strings: x, ctor: C[1] === "." ? Vn : C[1] === "?" ? Zn : C[1] === "@" ? Yn : Tt });
            } else l.push({ type: 6, index: s });
          }
          for (const p of h) n.removeAttribute(p);
        }
        if (xi.test(n.tagName)) {
          const h = n.textContent.split(Y), p = h.length - 1;
          if (p > 0) {
            n.textContent = Me ? Me.emptyScript : "";
            for (let y = 0; y < p; y++) n.append(h[y], wt()), ce.nextNode(), l.push({ type: 2, index: ++s });
            n.append(h[p], wt());
          }
        }
      } else if (n.nodeType === 8) if (n.data === mi) l.push({ type: 2, index: s });
      else {
        let h = -1;
        for (; (h = n.data.indexOf(Y, h + 1)) !== -1; ) l.push({ type: 7, index: s }), h += Y.length - 1;
      }
      s++;
    }
  }
  static createElement(e, t) {
    const i = ue.createElement("template");
    return i.innerHTML = e, i;
  }
};
function Te(r, e, t = r, i) {
  var n, s, o, a;
  if (e === Se) return e;
  let l = i !== void 0 ? (n = t._$Co) === null || n === void 0 ? void 0 : n[i] : t._$Cl;
  const c = et(e) ? void 0 : e._$litDirective$;
  return l?.constructor !== c && ((s = l?._$AO) === null || s === void 0 || s.call(l, !1), c === void 0 ? l = void 0 : (l = new c(r), l._$AT(r, t, i)), i !== void 0 ? ((o = (a = t)._$Co) !== null && o !== void 0 ? o : a._$Co = [])[i] = l : t._$Cl = l), l !== void 0 && (e = Te(r, l._$AS(r, e.values), l, i)), e;
}
let jn = class {
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
    const { el: { content: i }, parts: n } = this._$AD, s = ((t = e?.creationScope) !== null && t !== void 0 ? t : ue).importNode(i, !0);
    ce.currentNode = s;
    let o = ce.nextNode(), a = 0, l = 0, c = n[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let u;
        c.type === 2 ? u = new bi(o, o.nextSibling, this, e) : c.type === 1 ? u = new c.ctor(o, c.name, c.strings, this, e) : c.type === 6 && (u = new Kn(o, this, e)), this._$AV.push(u), c = n[++l];
      }
      a !== c?.index && (o = ce.nextNode(), a++);
    }
    return ce.currentNode = ue, s;
  }
  v(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}, bi = class _i {
  constructor(e, t, i, n) {
    var s;
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = n, this._$Cp = (s = n?.isConnected) === null || s === void 0 || s;
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
    e = Te(this, e, t), et(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== Se && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : In(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== M && et(this._$AH) ? this._$AA.nextSibling.data = e : this.$(ue.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var t;
    const { values: i, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Bt.createElement(wi(n.h, n.h[0]), this.options)), n);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === s) this._$AH.v(i);
    else {
      const o = new jn(s, this), a = o.u(this.options);
      o.v(i), this.$(a), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = Ur.get(e.strings);
    return t === void 0 && Ur.set(e.strings, t = new Bt(e)), t;
  }
  T(e) {
    yi(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, n = 0;
    for (const s of e) n === t.length ? t.push(i = new _i(this.k(wt()), this.k(wt()), this, this.options)) : i = t[n], i._$AI(s), n++;
    n < t.length && (this._$AR(i && i._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const n = e.nextSibling;
      e.remove(), e = n;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cp = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
};
class Tt {
  constructor(e, t, i, n, s) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = s, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = M;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, i, n) {
    const s = this.strings;
    let o = !1;
    if (s === void 0) e = Te(this, e, t, 0), o = !et(e) || e !== this._$AH && e !== Se, o && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++) c = Te(this, a[i + l], t, l), c === Se && (c = this._$AH[l]), o || (o = !et(c) || c !== this._$AH[l]), c === M ? e = M : e !== M && (e += (c ?? "") + s[l + 1]), this._$AH[l] = c;
    }
    o && !n && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
let Vn = class extends Tt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
};
const qn = Me ? Me.emptyScript : "";
let Zn = class extends Tt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== M ? this.element.setAttribute(this.name, qn) : this.element.removeAttribute(this.name);
  }
}, Yn = class extends Tt {
  constructor(e, t, i, n, s) {
    super(e, t, i, n, s), this.type = 5;
  }
  _$AI(e, t = this) {
    var i;
    if ((e = (i = Te(this, e, t, 0)) !== null && i !== void 0 ? i : M) === Se) return;
    const n = this._$AH, s = e === M && n !== M || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, o = e !== M && (n === M || s);
    s && this.element.removeEventListener(this.name, this, n), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && i !== void 0 ? i : this.element, e) : this._$AH.handleEvent(e);
  }
};
class Kn {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Te(this, e);
  }
}
const Ir = xt.litHtmlPolyfillSupport;
Ir?.(Bt, bi), ((Dt = xt.litHtmlVersions) !== null && Dt !== void 0 ? Dt : xt.litHtmlVersions = []).push("2.8.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qn = (r) => r.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ye = (r, e) => {
  var t, i;
  const n = r._$AN;
  if (n === void 0) return !1;
  for (const s of n) (i = (t = s)._$AO) === null || i === void 0 || i.call(t, e, !1), Ye(s, e);
  return !0;
}, vt = (r) => {
  let e, t;
  do {
    if ((e = r._$AM) === void 0) break;
    t = e._$AN, t.delete(r), r = e;
  } while (t?.size === 0);
}, $i = (r) => {
  for (let e; e = r._$AM; r = e) {
    let t = e._$AN;
    if (t === void 0) e._$AN = t = /* @__PURE__ */ new Set();
    else if (t.has(r)) break;
    t.add(r), es(e);
  }
};
function Xn(r) {
  this._$AN !== void 0 ? (vt(this), this._$AM = r, $i(this)) : this._$AM = r;
}
function Jn(r, e = !1, t = 0) {
  const i = this._$AH, n = this._$AN;
  if (n !== void 0 && n.size !== 0) if (e) if (Array.isArray(i)) for (let s = t; s < i.length; s++) Ye(i[s], !1), vt(i[s]);
  else i != null && (Ye(i, !1), vt(i));
  else Ye(this, r);
}
const es = (r) => {
  var e, t, i, n;
  r.type == fi.CHILD && ((e = (i = r)._$AP) !== null && e !== void 0 || (i._$AP = Jn), (t = (n = r)._$AQ) !== null && t !== void 0 || (n._$AQ = Xn));
};
class ts extends gi {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, t, i) {
    super._$AT(e, t, i), $i(this), this.isConnected = e._$AU;
  }
  _$AO(e, t = !0) {
    var i, n;
    e !== this.isConnected && (this.isConnected = e, e ? (i = this.reconnected) === null || i === void 0 || i.call(this) : (n = this.disconnected) === null || n === void 0 || n.call(this)), t && (Ye(this, e), vt(this));
  }
  setValue(e) {
    if (Qn(this._$Ct)) this._$Ct._$AI(e, this);
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
class rs extends ts {
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
class is extends rs {
  render(e, t, i) {
    return this.renderValue(() => v(e, t, i));
  }
}
const A = Fn(is);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Br extends gi {
  constructor(e) {
    if (super(e), this.et = M, e.type !== fi.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === M || e == null) return this.ft = void 0, this.et = e;
    if (e === Se) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.et) return this.ft;
    this.et = e;
    const t = [e];
    return t.raw = t, this.ft = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
Br.directiveName = "unsafeHTML", Br.resultType = 1;
var jr, Vr;
(function(r) {
  r.language = "language", r.system = "system", r.comma_decimal = "comma_decimal", r.decimal_comma = "decimal_comma", r.space_comma = "space_comma", r.none = "none";
})(jr || (jr = {})), (function(r) {
  r.language = "language", r.system = "system", r.am_pm = "12", r.twenty_four = "24";
})(Vr || (Vr = {}));
var bt = function(r, e, t, i) {
  i = i || {}, t = t ?? {};
  var n = new Event(e, { bubbles: i.bubbles === void 0 || i.bubbles, cancelable: !!i.cancelable, composed: i.composed === void 0 || i.composed });
  return n.detail = t, r.dispatchEvent(n), n;
};
function ht(r, e, t) {
  const i = /* @__PURE__ */ new Date();
  return d`
    <div class="chart-labels">
      ${Array.from({ length: r }, (n, s) => {
    const a = new Date(i.getTime() + s * 60 * 60 * 1e3).toLocaleTimeString([], { hour: "2-digit" });
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
function ns(r) {
  const e = new Date(r);
  return ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"][e.getDay()];
}
const Ge = {
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
}, rr = "swissweather", st = `${rr}-card`, ki = `${st}-editor`, S = [
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
var ss = Object.defineProperty, os = Object.getOwnPropertyDescriptor, Nt = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? os(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && ss(e, t, n), n;
};
Ee({
  // Loads the language by returning a JSON structure for a given language
  loader: (r) => Ge[r]
});
let tt = class extends H {
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
    for (const i of t)
      e[i] === "" && delete e[i];
    this._config = e, this.requestUpdate();
  }
  static get styles() {
    return G`
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
      { key: "temperature", label: v("config.chart_temperature") || "Temperature" },
      { key: "precipitation", label: v("config.chart_precipitation") || "Precipitation" },
      { key: "sunshine", label: v("config.chart_sunshine") || "Sunshine" },
      { key: "wind", label: v("config.chart_wind") || "Wind" },
      { key: "forecast", label: v("config.chart_forecast") || "Forecast" }
    ], e = Array.isArray(this._config?.chart_order) ? this._config.chart_order : r.map((i) => i.key);
    if (!this.hass)
      return d`<div>Loading...</div>`;
    nt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
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
          <div class="group-title">${v("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[
      S.find((i) => i.name === "entity"),
      S.find((i) => i.name === "location"),
      S.find((i) => i.name === "show_location")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Sensors -->
        <div class="group">
          <div class="group-title">${v("config.group_sensors") || "Sensors"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[
      S.find((i) => i.name === "warning_entity"),
      S.find((i) => i.name === "precipitation_entity"),
      S.find((i) => i.name === "sun_entity"),
      S.find((i) => i.name === "sunshine_entity"),
      S.find((i) => i.name === "wind_entity"),
      S.find((i) => i.name === "wind_direction_entity")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Display options -->
        <div class="group">
          <div class="group-title">${v("config.group_display") || "Display Options"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[
      S.find((i) => i.name === "forecast_hours"),
      S.find((i) => i.name === "show_forecast"),
      S.find((i) => i.name === "show_precipitation"),
      S.find((i) => i.name === "show_temperature"),
      S.find((i) => i.name === "show_sunshine"),
      S.find((i) => i.name === "show_wind"),
      S.find((i) => i.name === "enable_animate_weather_icons"),
      S.find((i) => i.name === "show_warnings"),
      S.find((i) => i.name === "compact_mode")
    ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <!-- Chart order -->
        <div class="group">
          <div class="group-title">${v("config.group_chart_order") || "Chart Order"}</div>
          <ul style="list-style:none;padding:0;margin:0;">
            ${e.map((i, n) => {
      const s = r.find((o) => o.key === i);
      return d` <li style="display:flex;align-items:center;margin-bottom:6px;">
                <span style="flex:1;">${s?.label || i}</span>
                <button
                  style="margin-left:8px;"
                  @click=${() => this._moveChart(n, -1)}
                  ?disabled=${n === 0}
                  title="${v("config.move_up") || "Up"}"
                >
                  ⬆️
                </button>
                <button
                  style="margin-left:2px;"
                  @click=${() => this._moveChart(n, 1)}
                  ?disabled=${n === e.length - 1}
                  title="${v("config.move_down") || "Down"}"
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
    const t = Array.isArray(this._config.chart_order) ? [...this._config.chart_order] : ["temperature", "precipitation", "sunshine", "wind", "forecast"], i = r + e;
    if (i < 0 || i >= t.length) return;
    const n = t[r];
    t[r] = t[i], t[i] = n, this._config = { ...this._config, chart_order: t }, bt(this, "config-changed", { config: this._config }), this.requestUpdate();
  }
  _computeLabel = (r) => ({
    entity: v("config.entity"),
    show_location: v("config.show_location"),
    sun_entity: v("config.sun_entity"),
    location: v("config.location"),
    wind_entity: v("config.wind_entity"),
    wind_direction_entity: v("config.wind_direction_entity"),
    sunshine_entity: v("config.sunshine_entity"),
    warning_entity: v("config.warning_entity"),
    show_forecast: v("config.show_forecast"),
    forecast_hours: v("config.forecast_hours"),
    show_temperature: v("config.show_temperature"),
    show_precipitation: v("config.show_precipitation"),
    show_sunshine: v("config.show_sunshine"),
    show_warnings: v("config.show_warnings"),
    show_wind: v("config.show_wind"),
    enable_animate_weather_icons: v("config.enable_animate_weather_icons"),
    compact_mode: v("config.compact_mode")
  })[r.name] || r.name;
  _computeHelper = (r) => r.description ? v(r.description) : "";
  _renderConfigPreview() {
    const r = { ...this._config };
    return r.type || (r.type = "custom:swissweather-card"), Object.keys(r).forEach((e) => {
      (r[e] === void 0 || r[e] === "") && delete r[e];
    }), Object.entries(r).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join(`
`);
  }
  _valueChanged(r) {
    if (this._config || (this._config = {
      type: st,
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
      const { ...t } = r.detail.value || {}, i = {
        ...this._config,
        ...t,
        ...e,
        type: "custom:swissweather-card"
      };
      Object.keys(i).forEach((n) => {
        (i[n] === "" || i[n] === void 0) && delete i[n];
      }), this._config = i, bt(this, "config-changed", { config: this._config });
    }
  }
};
Nt([
  m({ attribute: !1 })
], tt.prototype, "hass", 2);
Nt([
  m({ attribute: !1 })
], tt.prototype, "lovelace", 2);
Nt([
  m({ attribute: !1 })
], tt.prototype, "_config", 2);
tt = Nt([
  z(ki)
], tt);
function ir() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var ye = ir();
function Ai(r) {
  ye = r;
}
var Ke = { exec: () => null };
function $(r, e = "") {
  let t = typeof r == "string" ? r : r.source, i = { replace: (n, s) => {
    let o = typeof s == "string" ? s : s.source;
    return o = o.replace(E.caret, "$1"), t = t.replace(n, o), i;
  }, getRegex: () => new RegExp(t, e) };
  return i;
}
var E = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}#`), htmlBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}<(?:[a-z].*>|!--)`, "i") }, as = /^(?:[ \t]*(?:\n|$))+/, ls = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, cs = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ot = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ds = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, nr = /(?:[*+-]|\d{1,9}[.)])/, Ci = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Mi = $(Ci).replace(/bull/g, nr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), hs = $(Ci).replace(/bull/g, nr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), sr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ps = /^[^\n]+/, or = /(?!\s*\])(?:\\.|[^\[\]\\])+/, us = $(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", or).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), fs = $(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, nr).getRegex(), Lt = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ar = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, gs = $("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ar).replace("tag", Lt).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Si = $(sr).replace("hr", ot).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Lt).getRegex(), ms = $(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Si).getRegex(), lr = { blockquote: ms, code: ls, def: us, fences: cs, heading: ds, hr: ot, html: gs, lheading: Mi, list: fs, newline: as, paragraph: Si, table: Ke, text: ps }, qr = $("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ot).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Lt).getRegex(), ys = { ...lr, lheading: hs, table: qr, paragraph: $(sr).replace("hr", ot).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", qr).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Lt).getRegex() }, xs = { ...lr, html: $(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ar).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ke, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: $(sr).replace("hr", ot).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Mi).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, ws = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, vs = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ti = /^( {2,}|\\)\n(?!\s*$)/, bs = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ht = /[\p{P}\p{S}]/u, cr = /[\s\p{P}\p{S}]/u, Ni = /[^\s\p{P}\p{S}]/u, _s = $(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, cr).getRegex(), Li = /(?!~)[\p{P}\p{S}]/u, $s = /(?!~)[\s\p{P}\p{S}]/u, ks = /(?:[^\s\p{P}\p{S}]|~)/u, As = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, Hi = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Cs = $(Hi, "u").replace(/punct/g, Ht).getRegex(), Ms = $(Hi, "u").replace(/punct/g, Li).getRegex(), Oi = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ss = $(Oi, "gu").replace(/notPunctSpace/g, Ni).replace(/punctSpace/g, cr).replace(/punct/g, Ht).getRegex(), Ts = $(Oi, "gu").replace(/notPunctSpace/g, ks).replace(/punctSpace/g, $s).replace(/punct/g, Li).getRegex(), Ns = $("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ni).replace(/punctSpace/g, cr).replace(/punct/g, Ht).getRegex(), Ls = $(/\\(punct)/, "gu").replace(/punct/g, Ht).getRegex(), Hs = $(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Os = $(ar).replace("(?:-->|$)", "-->").getRegex(), Es = $("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Os).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), _t = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Gs = $(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _t).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ei = $(/^!?\[(label)\]\[(ref)\]/).replace("label", _t).replace("ref", or).getRegex(), Gi = $(/^!?\[(ref)\](?:\[\])?/).replace("ref", or).getRegex(), zs = $("reflink|nolink(?!\\()", "g").replace("reflink", Ei).replace("nolink", Gi).getRegex(), dr = { _backpedal: Ke, anyPunctuation: Ls, autolink: Hs, blockSkip: As, br: Ti, code: vs, del: Ke, emStrongLDelim: Cs, emStrongRDelimAst: Ss, emStrongRDelimUnd: Ns, escape: ws, link: Gs, nolink: Gi, punctuation: _s, reflink: Ei, reflinkSearch: zs, tag: Es, text: bs, url: Ke }, Ds = { ...dr, link: $(/^!?\[(label)\]\((.*?)\)/).replace("label", _t).getRegex(), reflink: $(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _t).getRegex() }, jt = { ...dr, emStrongRDelimAst: Ts, emStrongLDelim: Ms, url: $(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, Ps = { ...jt, br: $(Ti).replace("{2,}", "*").getRegex(), text: $(jt.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, pt = { normal: lr, gfm: ys, pedantic: xs }, Ve = { normal: dr, gfm: jt, breaks: Ps, pedantic: Ds }, Rs = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Zr = (r) => Rs[r];
function W(r, e) {
  if (e) {
    if (E.escapeTest.test(r)) return r.replace(E.escapeReplace, Zr);
  } else if (E.escapeTestNoEncode.test(r)) return r.replace(E.escapeReplaceNoEncode, Zr);
  return r;
}
function Yr(r) {
  try {
    r = encodeURI(r).replace(E.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function Kr(r, e) {
  let t = r.replace(E.findPipe, (s, o, a) => {
    let l = !1, c = o;
    for (; --c >= 0 && a[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), i = t.split(E.splitPipe), n = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), e) if (i.length > e) i.splice(e);
  else for (; i.length < e; ) i.push("");
  for (; n < i.length; n++) i[n] = i[n].trim().replace(E.slashPipe, "|");
  return i;
}
function qe(r, e, t) {
  let i = r.length;
  if (i === 0) return "";
  let n = 0;
  for (; n < i && r.charAt(i - n - 1) === e; )
    n++;
  return r.slice(0, i - n);
}
function Ws(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let i = 0; i < r.length; i++) if (r[i] === "\\") i++;
  else if (r[i] === e[0]) t++;
  else if (r[i] === e[1] && (t--, t < 0)) return i;
  return t > 0 ? -2 : -1;
}
function Qr(r, e, t, i, n) {
  let s = e.href, o = e.title || null, a = r[1].replace(n.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  let l = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: s, title: o, text: a, tokens: i.inlineTokens(a) };
  return i.state.inLink = !1, l;
}
function Fs(r, e, t) {
  let i = r.match(t.other.indentCodeCompensation);
  if (i === null) return e;
  let n = i[1];
  return e.split(`
`).map((s) => {
    let o = s.match(t.other.beginningSpace);
    if (o === null) return s;
    let [a] = o;
    return a.length >= n.length ? s.slice(n.length) : s;
  }).join(`
`);
}
var $t = class {
  options;
  rules;
  lexer;
  constructor(r) {
    this.options = r || ye;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : qe(t, `
`) };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], i = Fs(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: i };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let i = qe(t, "#");
        (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (t = i.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: qe(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = qe(e[0], `
`).split(`
`), i = "", n = "", s = [];
      for (; t.length > 0; ) {
        let o = !1, a = [], l;
        for (l = 0; l < t.length; l++) if (this.rules.other.blockquoteStart.test(t[l])) a.push(t[l]), o = !0;
        else if (!o) a.push(t[l]);
        else break;
        t = t.slice(l);
        let c = a.join(`
`), u = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        i = i ? `${i}
${c}` : c, n = n ? `${n}
${u}` : u;
        let h = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(u, s, !0), this.lexer.state.top = h, t.length === 0) break;
        let p = s.at(-1);
        if (p?.type === "code") break;
        if (p?.type === "blockquote") {
          let y = p, x = y.raw + `
` + t.join(`
`), C = this.blockquote(x);
          s[s.length - 1] = C, i = i.substring(0, i.length - y.raw.length) + C.raw, n = n.substring(0, n.length - y.text.length) + C.text;
          break;
        } else if (p?.type === "list") {
          let y = p, x = y.raw + `
` + t.join(`
`), C = this.list(x);
          s[s.length - 1] = C, i = i.substring(0, i.length - p.raw.length) + C.raw, n = n.substring(0, n.length - y.raw.length) + C.raw, t = x.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: i, tokens: s, text: n };
    }
  }
  list(r) {
    let e = this.rules.block.list.exec(r);
    if (e) {
      let t = e[1].trim(), i = t.length > 1, n = { type: "list", raw: "", ordered: i, start: i ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = i ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = i ? t : "[*+-]");
      let s = this.rules.other.listItemRegex(t), o = !1;
      for (; r; ) {
        let l = !1, c = "", u = "";
        if (!(e = s.exec(r)) || this.rules.block.hr.test(r)) break;
        c = e[0], r = r.substring(c.length);
        let h = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (P) => " ".repeat(3 * P.length)), p = r.split(`
`, 1)[0], y = !h.trim(), x = 0;
        if (this.options.pedantic ? (x = 2, u = h.trimStart()) : y ? x = e[1].length + 1 : (x = e[2].search(this.rules.other.nonSpaceChar), x = x > 4 ? 1 : x, u = h.slice(x), x += e[1].length), y && this.rules.other.blankLine.test(p) && (c += p + `
`, r = r.substring(p.length + 1), l = !0), !l) {
          let P = this.rules.other.nextBulletRegex(x), we = this.rules.other.hrRegex(x), ie = this.rules.other.fencesBeginRegex(x), I = this.rules.other.headingBeginRegex(x), at = this.rules.other.htmlBeginRegex(x);
          for (; r; ) {
            let Pe = r.split(`
`, 1)[0], ve;
            if (p = Pe, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), ve = p) : ve = p.replace(this.rules.other.tabCharGlobal, "    "), ie.test(p) || I.test(p) || at.test(p) || P.test(p) || we.test(p)) break;
            if (ve.search(this.rules.other.nonSpaceChar) >= x || !p.trim()) u += `
` + ve.slice(x);
            else {
              if (y || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ie.test(h) || I.test(h) || we.test(h)) break;
              u += `
` + p;
            }
            !y && !p.trim() && (y = !0), c += Pe + `
`, r = r.substring(Pe.length + 1), h = ve.slice(x);
          }
        }
        n.loose || (o ? n.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (o = !0));
        let C = null, De;
        this.options.gfm && (C = this.rules.other.listIsTask.exec(u), C && (De = C[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), n.items.push({ type: "list_item", raw: c, task: !!C, checked: De, loose: !1, text: u, tokens: [] }), n.raw += c;
      }
      let a = n.items.at(-1);
      if (a) a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else return;
      n.raw = n.raw.trimEnd();
      for (let l = 0; l < n.items.length; l++) if (this.lexer.state.top = !1, n.items[l].tokens = this.lexer.blockTokens(n.items[l].text, []), !n.loose) {
        let c = n.items[l].tokens.filter((h) => h.type === "space"), u = c.length > 0 && c.some((h) => this.rules.other.anyLine.test(h.raw));
        n.loose = u;
      }
      if (n.loose) for (let l = 0; l < n.items.length; l++) n.items[l].loose = !0;
      return n;
    }
  }
  html(r) {
    let e = this.rules.block.html.exec(r);
    if (e) return { type: "html", block: !0, raw: e[0], pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: e[0] };
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), i = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: i, title: n };
    }
  }
  table(r) {
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = Kr(e[1]), i = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), n = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === i.length) {
      for (let o of i) this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
      for (let o = 0; o < t.length; o++) s.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: !0, align: s.align[o] });
      for (let o of n) s.rows.push(Kr(o, s.header.length).map((a, l) => ({ text: a, tokens: this.lexer.inline(a), header: !1, align: s.align[l] })));
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
        let s = qe(t.slice(0, -1), "\\");
        if ((t.length - s.length) % 2 === 0) return;
      } else {
        let s = Ws(e[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let o = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + s;
          e[2] = e[2].substring(0, s), e[0] = e[0].substring(0, o).trim(), e[3] = "";
        }
      }
      let i = e[2], n = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(i);
        s && (i = s[1], n = s[3]);
      } else n = e[3] ? e[3].slice(1, -1) : "";
      return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? i = i.slice(1) : i = i.slice(1, -1)), Qr(e, { href: i && i.replace(this.rules.inline.anyPunctuation, "$1"), title: n && n.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(r, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(r)) || (t = this.rules.inline.nolink.exec(r))) {
      let i = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = e[i.toLowerCase()];
      if (!n) {
        let s = t[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return Qr(t, n, t[0], this.lexer, this.rules);
    }
  }
  emStrong(r, e, t = "") {
    let i = this.rules.inline.emStrongLDelim.exec(r);
    if (!(!i || i[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(i[1] || i[2]) || !t || this.rules.inline.punctuation.exec(t))) {
      let n = [...i[0]].length - 1, s, o, a = n, l = 0, c = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, e = e.slice(-1 * r.length + n); (i = c.exec(e)) != null; ) {
        if (s = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !s) continue;
        if (o = [...s].length, i[3] || i[4]) {
          a += o;
          continue;
        } else if ((i[5] || i[6]) && n % 3 && !((n + o) % 3)) {
          l += o;
          continue;
        }
        if (a -= o, a > 0) continue;
        o = Math.min(o, o + a + l);
        let u = [...i[0]][0].length, h = r.slice(0, n + i.index + u + o);
        if (Math.min(n, o) % 2) {
          let y = h.slice(1, -1);
          return { type: "em", raw: h, text: y, tokens: this.lexer.inlineTokens(y) };
        }
        let p = h.slice(2, -2);
        return { type: "strong", raw: h, text: p, tokens: this.lexer.inlineTokens(p) };
      }
    }
  }
  codespan(r) {
    let e = this.rules.inline.code.exec(r);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), i = this.rules.other.nonSpaceChar.test(t), n = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return i && n && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
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
      let t, i;
      return e[2] === "@" ? (t = e[1], i = "mailto:" + t) : (t = e[1], i = t), { type: "link", raw: e[0], text: t, href: i, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(r) {
    let e;
    if (e = this.rules.inline.url.exec(r)) {
      let t, i;
      if (e[2] === "@") t = e[0], i = "mailto:" + t;
      else {
        let n;
        do
          n = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (n !== e[0]);
        t = e[0], e[1] === "www." ? i = "http://" + e[0] : i = e[0];
      }
      return { type: "link", raw: e[0], text: t, href: i, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  inlineText(r) {
    let e = this.rules.inline.text.exec(r);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, V = class Vt {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || ye, this.options.tokenizer = this.options.tokenizer || new $t(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: E, block: pt.normal, inline: Ve.normal };
    this.options.pedantic ? (t.block = pt.pedantic, t.inline = Ve.pedantic) : this.options.gfm && (t.block = pt.gfm, this.options.breaks ? t.inline = Ve.breaks : t.inline = Ve.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: pt, inline: Ve };
  }
  static lex(e, t) {
    return new Vt(t).lex(e);
  }
  static lexInline(e, t) {
    return new Vt(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(E.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let i = this.inlineQueue[t];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], i = !1) {
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
        i && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + n.raw, o.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(n), i = s.length !== e.length, e = e.substring(n.raw.length);
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
    let i = e, n = null;
    if (this.tokens.links) {
      let a = Object.keys(this.tokens.links);
      if (a.length > 0) for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) a.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, n.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
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
      if (a = this.tokenizer.emStrong(e, i, o)) {
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
        let c = 1 / 0, u = e.slice(1), h;
        this.options.extensions.startInline.forEach((p) => {
          h = p.call({ lexer: this }, u), typeof h == "number" && h >= 0 && (c = Math.min(c, h));
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
}, kt = class {
  options;
  parser;
  constructor(r) {
    this.options = r || ye;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    let i = (e || "").match(E.notSpaceStart)?.[0], n = r.replace(E.endingNewline, "") + `
`;
    return i ? '<pre><code class="language-' + W(i) + '">' + (t ? n : W(n, !0)) + `</code></pre>
` : "<pre><code>" + (t ? n : W(n, !0)) + `</code></pre>
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
    let e = r.ordered, t = r.start, i = "";
    for (let o = 0; o < r.items.length; o++) {
      let a = r.items[o];
      i += this.listitem(a);
    }
    let n = e ? "ol" : "ul", s = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + n + s + `>
` + i + "</" + n + `>
`;
  }
  listitem(r) {
    let e = "";
    if (r.task) {
      let t = this.checkbox({ checked: !!r.checked });
      r.loose ? r.tokens[0]?.type === "paragraph" ? (r.tokens[0].text = t + " " + r.tokens[0].text, r.tokens[0].tokens && r.tokens[0].tokens.length > 0 && r.tokens[0].tokens[0].type === "text" && (r.tokens[0].tokens[0].text = t + " " + W(r.tokens[0].tokens[0].text), r.tokens[0].tokens[0].escaped = !0)) : r.tokens.unshift({ type: "text", raw: t + " ", text: t + " ", escaped: !0 }) : e += t + " ";
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
    for (let n = 0; n < r.header.length; n++) t += this.tablecell(r.header[n]);
    e += this.tablerow({ text: t });
    let i = "";
    for (let n = 0; n < r.rows.length; n++) {
      let s = r.rows[n];
      t = "";
      for (let o = 0; o < s.length; o++) t += this.tablecell(s[o]);
      i += this.tablerow({ text: t });
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + i + `</table>
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
    return `<code>${W(r, !0)}</code>`;
  }
  br(r) {
    return "<br>";
  }
  del({ tokens: r }) {
    return `<del>${this.parser.parseInline(r)}</del>`;
  }
  link({ href: r, title: e, tokens: t }) {
    let i = this.parser.parseInline(t), n = Yr(r);
    if (n === null) return i;
    r = n;
    let s = '<a href="' + r + '"';
    return e && (s += ' title="' + W(e) + '"'), s += ">" + i + "</a>", s;
  }
  image({ href: r, title: e, text: t, tokens: i }) {
    i && (t = this.parser.parseInline(i, this.parser.textRenderer));
    let n = Yr(r);
    if (n === null) return W(t);
    r = n;
    let s = `<img src="${r}" alt="${t}"`;
    return e && (s += ` title="${W(e)}"`), s += ">", s;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : W(r.text);
  }
}, hr = class {
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
}, q = class qt {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || ye, this.options.renderer = this.options.renderer || new kt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new hr();
  }
  static parse(e, t) {
    return new qt(t).parse(e);
  }
  static parseInline(e, t) {
    return new qt(t).parseInline(e);
  }
  parse(e, t = !0) {
    let i = "";
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        let a = s, l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(a.type)) {
          i += l || "";
          continue;
        }
      }
      let o = s;
      switch (o.type) {
        case "space": {
          i += this.renderer.space(o);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(o);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(o);
          continue;
        }
        case "code": {
          i += this.renderer.code(o);
          continue;
        }
        case "table": {
          i += this.renderer.table(o);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          i += this.renderer.list(o);
          continue;
        }
        case "html": {
          i += this.renderer.html(o);
          continue;
        }
        case "def": {
          i += this.renderer.def(o);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(o);
          continue;
        }
        case "text": {
          let a = o, l = this.renderer.text(a);
          for (; n + 1 < e.length && e[n + 1].type === "text"; ) a = e[++n], l += `
` + this.renderer.text(a);
          t ? i += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: !0 }] }) : i += l;
          continue;
        }
        default: {
          let a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
  parseInline(e, t = this.renderer) {
    let i = "";
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        let a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += a || "";
          continue;
        }
      }
      let o = s;
      switch (o.type) {
        case "escape": {
          i += t.text(o);
          break;
        }
        case "html": {
          i += t.html(o);
          break;
        }
        case "link": {
          i += t.link(o);
          break;
        }
        case "image": {
          i += t.image(o);
          break;
        }
        case "strong": {
          i += t.strong(o);
          break;
        }
        case "em": {
          i += t.em(o);
          break;
        }
        case "codespan": {
          i += t.codespan(o);
          break;
        }
        case "br": {
          i += t.br(o);
          break;
        }
        case "del": {
          i += t.del(o);
          break;
        }
        case "text": {
          i += t.text(o);
          break;
        }
        default: {
          let a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
}, ft = class {
  options;
  block;
  constructor(r) {
    this.options = r || ye;
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
    return this.block ? V.lex : V.lexInline;
  }
  provideParser() {
    return this.block ? q.parse : q.parseInline;
  }
}, Us = class {
  defaults = ir();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = q;
  Renderer = kt;
  TextRenderer = hr;
  Lexer = V;
  Tokenizer = $t;
  Hooks = ft;
  constructor(...r) {
    this.use(...r);
  }
  walkTokens(r, e) {
    let t = [];
    for (let i of r) switch (t = t.concat(e.call(this, i)), i.type) {
      case "table": {
        let n = i;
        for (let s of n.header) t = t.concat(this.walkTokens(s.tokens, e));
        for (let s of n.rows) for (let o of s) t = t.concat(this.walkTokens(o.tokens, e));
        break;
      }
      case "list": {
        let n = i;
        t = t.concat(this.walkTokens(n.items, e));
        break;
      }
      default: {
        let n = i;
        this.defaults.extensions?.childTokens?.[n.type] ? this.defaults.extensions.childTokens[n.type].forEach((s) => {
          let o = n[s].flat(1 / 0);
          t = t.concat(this.walkTokens(o, e));
        }) : n.tokens && (t = t.concat(this.walkTokens(n.tokens, e)));
      }
    }
    return t;
  }
  use(...r) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((t) => {
      let i = { ...t };
      if (i.async = this.defaults.async || i.async || !1, t.extensions && (t.extensions.forEach((n) => {
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
      }), i.extensions = e), t.renderer) {
        let n = this.defaults.renderer || new kt(this.defaults);
        for (let s in t.renderer) {
          if (!(s in n)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let o = s, a = t.renderer[o], l = n[o];
          n[o] = (...c) => {
            let u = a.apply(n, c);
            return u === !1 && (u = l.apply(n, c)), u || "";
          };
        }
        i.renderer = n;
      }
      if (t.tokenizer) {
        let n = this.defaults.tokenizer || new $t(this.defaults);
        for (let s in t.tokenizer) {
          if (!(s in n)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let o = s, a = t.tokenizer[o], l = n[o];
          n[o] = (...c) => {
            let u = a.apply(n, c);
            return u === !1 && (u = l.apply(n, c)), u;
          };
        }
        i.tokenizer = n;
      }
      if (t.hooks) {
        let n = this.defaults.hooks || new ft();
        for (let s in t.hooks) {
          if (!(s in n)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let o = s, a = t.hooks[o], l = n[o];
          ft.passThroughHooks.has(s) ? n[o] = (c) => {
            if (this.defaults.async) return Promise.resolve(a.call(n, c)).then((h) => l.call(n, h));
            let u = a.call(n, c);
            return l.call(n, u);
          } : n[o] = (...c) => {
            let u = a.apply(n, c);
            return u === !1 && (u = l.apply(n, c)), u;
          };
        }
        i.hooks = n;
      }
      if (t.walkTokens) {
        let n = this.defaults.walkTokens, s = t.walkTokens;
        i.walkTokens = function(o) {
          let a = [];
          return a.push(s.call(this, o)), n && (a = a.concat(n.call(this, o))), a;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  lexer(r, e) {
    return V.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return q.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let i = { ...t }, n = { ...this.defaults, ...i }, s = this.onError(!!n.silent, !!n.async);
      if (this.defaults.async === !0 && i.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      n.hooks && (n.hooks.options = n, n.hooks.block = r);
      let o = n.hooks ? n.hooks.provideLexer() : r ? V.lex : V.lexInline, a = n.hooks ? n.hooks.provideParser() : r ? q.parse : q.parseInline;
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
  onError(r, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
        let i = "<p>An error occurred:</p><pre>" + W(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(i) : i;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, fe = new Us();
function k(r, e) {
  return fe.parse(r, e);
}
k.options = k.setOptions = function(r) {
  return fe.setOptions(r), k.defaults = fe.defaults, Ai(k.defaults), k;
};
k.getDefaults = ir;
k.defaults = ye;
k.use = function(...r) {
  return fe.use(...r), k.defaults = fe.defaults, Ai(k.defaults), k;
};
k.walkTokens = function(r, e) {
  return fe.walkTokens(r, e);
};
k.parseInline = fe.parseInline;
k.Parser = q;
k.parser = q.parse;
k.Renderer = kt;
k.TextRenderer = hr;
k.Lexer = V;
k.lexer = V.lex;
k.Tokenizer = $t;
k.Hooks = ft;
k.parse = k;
k.options;
k.setOptions;
k.use;
k.walkTokens;
k.parseInline;
q.parse;
V.lex;
const Is = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.92'%20x2='38.52'%20y1='18.75'%20y2='47.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='5%2032%2032;%20-15%2032%2032;%205%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M46.66%2036.2a16.66%2016.66%200%2001-16.78-16.55%2016.29%2016.29%200%2001.55-4.15A16.56%2016.56%200%201048.5%2036.1c-.61.06-1.22.1-1.84.1z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-5%2032%2032;%2015%2032%2032;%20-5%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Bs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/path%3e%3c/svg%3e", js = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='16.5'%20x2='21.5'%20y1='19.67'%20y2='28.33'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='19'%20cy='24'%20r='5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2019%2024;%20360%2019%2024'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", Vs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='13.58'%20x2='24.15'%20y1='15.57'%20y2='33.87'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='10%2019.22%2024.293;%20-10%2019.22%2024.293;%2010%2019.22%2024.293'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M29.33%2026.68a10.61%2010.61%200%2001-10.68-10.54A10.5%2010.5%200%200119%2013.5a10.54%2010.54%200%201011.5%2013.11%2011.48%2011.48%200%2001-1.17.07z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-10%2019.22%2024.293;%2010%2019.22%2024.293;%20-10%2019.22%2024.293'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", qs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='27.5'%20x2='36.5'%20y1='50.21'%20y2='65.79'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20y1='44.21'%20y2='59.79'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2058h30'%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2052h30'%3e%3canimateTransform%20attributeName='transform'%20begin='-4s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3c/svg%3e", Zs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.25'%20x2='24.75'%20y1='43.7'%20y2='46.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='30.25'%20x2='31.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='37.25'%20x2='38.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23a)'%20d='M24%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20d='M31%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20d='M38%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3c/svg%3e", Ys = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", Ks = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23b)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", Qs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Xs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='30.12'%20x2='31.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.67'%20x2='32.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='g'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M33.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M31%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='-1%20-6;%201%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2031%2045;%20360%2031%2045'/%3e%3canimate%20attributeName='opacity'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23d)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23f)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3c/svg%3e", Js = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='b'%20x1='23.31'%20x2='24.69'%20y1='44.3'%20y2='46.7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='30.31'%20x2='31.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3clinearGradient%20id='h'%20x1='37.31'%20x2='38.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3c/defs%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23e)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23f)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23h)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", eo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.97'%20x2='42.03'%20y1='14.63'%20y2='49.37'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43%2032a11%2011%200%2011-11-11%2011%2011%200%200111%2011zM25%2014.61l-.48%201a33.68%2033.68%200%2000-3.42%2017.82h0M39%2049.39l.48-1a33.68%2033.68%200%20003.42-17.82h0'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='360%2032%2032;%200%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Xr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='27.56'%20x2='38.27'%20y1='17.64'%20y2='36.19'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='19.96'%20x2='31.37'%20y1='29.03'%20y2='48.8'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e", Rt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e", to = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='52.7'%20x2='133.4'%20y1='9.6'%20y2='149.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%239ca3af'/%3e%3cstop%20offset='.5'%20stop-color='%239ca3af'/%3e%3cstop%20offset='1'%20stop-color='%236b7280'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='99.5'%20x2='232.6'%20y1='30.7'%20y2='261.4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%236b7280'/%3e%3cstop%20offset='.5'%20stop-color='%236b7280'/%3e%3cstop%20offset='1'%20stop-color='%234b5563'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='1381.3'%20x2='1399.5'%20y1='-1144.7'%20y2='-1097.4'%20gradientTransform='rotate(-9%208002.567%208233.063)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%230b65ed'/%3e%3cstop%20offset='.5'%20stop-color='%230a5ad4'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23c'%20id='d'%20x1='1436.7'%20x2='1454.9'%20y1='-1137'%20y2='-1089.7'%20gradientTransform='rotate(-9%208009.537%208233.037)'/%3e%3clinearGradient%20xlink:href='%23c'%20id='e'%20x1='1492.1'%20x2='1510.3'%20y1='-1129.3'%20y2='-1082.1'%20gradientTransform='rotate(-9%208016.566%208233.078)'/%3e%3csymbol%20id='g'%20viewBox='0%200%20200.3%20126.1'%3e%3cpath%20fill='url(%23a)'%20stroke='%23848b98'%20stroke-miterlimit='10'%20d='M.5%2093.2a32.4%2032.4%200%200032.4%2032.4h129.8v-.1l2.3.1a34.8%2034.8%200%20006.5-68.9%2032.4%2032.4%200%2000-48.5-33%2048.6%2048.6%200%2000-88.6%2037.1h-1.5A32.4%2032.4%200%2000.5%2093.1Z'/%3e%3c/symbol%3e%3csymbol%20id='h'%20viewBox='0%200%20350%20222'%3e%3cpath%20fill='url(%23b)'%20stroke='%235b6472'%20stroke-miterlimit='10'%20stroke-width='6'%20d='m291%20107-2.5.1A83.9%2083.9%200%2000135.6%2043%2056%2056%200%200051%2091a56.6%2056.6%200%2000.8%209A60%2060%200%200063%20219l4-.2v.2h224a56%2056%200%20000-112Z'/%3e%3c/symbol%3e%3csymbol%20id='f'%20overflow='visible'%20viewBox='0%200%20398%20222'%3e%3cuse%20xlink:href='%23g'%20width='200.3'%20height='126.1'%20transform='translate(198%2027)'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-9%200;%209%200;%20-9%200'/%3e%3c/use%3e%3cuse%20xlink:href='%23h'%20width='350'%20height='222'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-18%200;%2018%200;%20-18%200'/%3e%3c/use%3e%3c/symbol%3e%3csymbol%20id='i'%20overflow='visible'%20viewBox='0%200%20129%2057'%3e%3cpath%20fill='url(%23c)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M8.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x1'%20additive='sum'%20attributeName='transform'%20begin='0s;%20x1.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y1'%20attributeName='opacity'%20begin='0s;%20y1.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M64.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x2'%20additive='sum'%20attributeName='transform'%20begin='.33s;%20x2.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y2'%20attributeName='opacity'%20begin='.33s;%20y2.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M120.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x3'%20additive='sum'%20attributeName='transform'%20begin='-.33s;%20x3.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y3'%20attributeName='opacity'%20begin='-.33s;%20y3.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3cuse%20xlink:href='%23f'%20width='398'%20height='222'%20transform='translate(68.84%20145)'/%3e%3cuse%20xlink:href='%23i'%20width='129'%20height='57'%20transform='translate(191.5%20343.5)'/%3e%3c/svg%3e";
var ro = "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z", io = "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z", no = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z", so = "M15,6.79C16.86,7.86 18,9.85 18,12C18,22 6,22 6,22C7.25,21.06 8.38,19.95 9.34,18.71C9.38,18.66 9.41,18.61 9.44,18.55C9.69,18.06 9.5,17.46 9,17.21C7.14,16.14 6,14.15 6,12C6,2 18,2 18,2C16.75,2.94 15.62,4.05 14.66,5.29C14.62,5.34 14.59,5.39 14.56,5.45C14.31,5.94 14.5,6.54 15,6.79M12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14Z", oo = "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z", ao = "M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z", lo = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", co = "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z", ho = "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z", po = "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59", uo = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z", fo = "M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z", zi = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z", go = "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z", mo = "M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z";
const L = (r, e) => r ? (e || (e = "24px"), d`<ha-icon
    .icon="${r}"
    style="font-size:${e}; width: ${e}; height: ${e}"
  />`) : d`<ha-icon
      icon="mdi:weather-sunny"
      style="font-size:${e}; width: ${e}; height: ${e}"
    />`, O = (r, e) => r ? (e || (e = "24px"), w`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${r}" /></svg>`) : w`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${zi}" /></svg>`, gt = (r, e, t, i) => {
  if (!r)
    return L("mdi:weather-sunny", t);
  const n = {
    "clear-night": O(lo, t),
    cloudy: O(ro, t),
    fog: O(io, t),
    hail: O(no, t),
    lightning: O(oo, t),
    "lightning-rainy": O(ao, t),
    partlycloudy: O(co, t),
    pouring: O(ho, t),
    rainy: O(po, t),
    snowy: O(uo, t),
    "snowy-rainy": O(fo, t),
    sunny: O(zi, t),
    windy: O(go, t),
    "windy-variant": O(mo, t),
    exceptional: O(so, t)
  }, s = {
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
    "clear-night": d`<img src="${Is}" style="font-size:${t}" />`,
    cloudy: d`<img src="${Bs}" style="font-size:${t}" />`,
    fog: d`<img src="${qs}" style="font-size:${t}" />`,
    hail: d`<img src="${Zs}" style="font-size:${t}" />`,
    lightning: d`<img src="${Ks}" style="font-size:${t}" />`,
    "lightning-rainy": d`<img src="${Ys}" style="font-size:${t}" />`,
    partlycloudy: d`<img
      src="${i ? js : Vs}"
      style="font-size:${t}"
    />`,
    pouring: d`<img src="${to}" style="font-size:${t}" />`,
    rainy: d`<img src="${Qs}" style="font-size:${t}" />`,
    snowy: d`<img src="${Xs}" style="font-size:${t}" />`,
    "snowy-rainy": d`<img src="${Js}" style="font-size:${t}" />`,
    sunny: d`<img src="${Rt}" style="font-size:${t}" />`,
    windy: d`<img src="${Xr}" style="font-size:${t}" />`,
    "windy-variant": d`<img src="${Xr}" style="font-size:${t}" />`,
    exceptional: d`<img src="${eo}" style="font-size:${t}" />`
  };
  return e === "mdi" ? s[r] || L("mdi:weather-sunny", t) : e === "mdiAsSVG" ? n[r] || d`<img src="${Rt}" />` : o[r] || d`<img src="${Rt}" />`;
}, At = (r, e) => r?.states[e], Di = (r, e) => {
  const t = /* @__PURE__ */ new Date(), i = At(r, e.entity), n = At(r, e.sun_entity || "sun.sun");
  let s = null, o = null;
  if (i && i.attributes && "sunrise" in i.attributes && "sunset" in i.attributes && i.attributes.sunrise && i.attributes.sunset)
    s = new Date(i.attributes.sunrise), o = new Date(i.attributes.sunset);
  else if (n?.attributes) {
    const a = n.attributes.next_rising ? new Date(n.attributes.next_rising) : null, l = n.attributes.next_setting ? new Date(n.attributes.next_setting) : null;
    if (a && l) {
      const c = a > t ? new Date(a.getTime() - 864e5) : a, u = l;
      s = c, o = u;
    }
  }
  return !s || !o ? !0 : t >= s && t < o;
};
function pr(r) {
  const e = window;
  e.customCards = e.customCards || [], e.customCards.push({
    ...r,
    preview: !0
    // documentationURL: `
  });
}
var yo = Object.defineProperty, xo = Object.getOwnPropertyDescriptor, xe = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? xo(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && yo(e, t, n), n;
};
Ee({
  // Loads the language by returning a JSON structure for a given language
  loader: (r) => Ge[r]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard");
console.log("🎯 customElements registry available:", !!customElements);
let ee = class extends H {
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
        const i = e?.response;
        i && i[this.config.entity] ? (this._hourlyForecast = i[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [], console.log("🟢 Forecast geladen:", {
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
    return G`
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
      type: "custom:" + st,
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
    return document.createElement(ki);
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return S;
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
    const t = this._getWarningLevel(e), i = {
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
                          icon="${i[s.type?.toLowerCase?.()] || i.default}"
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
  _renderForecastTemperature(r) {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<forecast-temperature-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${r}
          .show_temperature=${this.config.show_temperature !== !1}
          ._t=${A}
          .showHoursChartLabel=${(e) => ht(e)}
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
          ._t=${A}
          .showHoursChartLabel=${(e) => ht(e)}
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
          ._t=${A}
          .showHoursChartLabel=${(i) => ht(i)}
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
          ._t=${A}
          .showHoursChartLabel=${(e) => ht(e)}
        ></wind-chart>` : d``;
  }
  _renderCurrentWeather(r, e, t, i, n, s) {
    return d`
      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${A("current_weather")}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(r)} km/h</div>
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
          <div class="metric-value">${i} hPa</div>
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
  _renderCurrentWeatherSection(r, e, t, i, n, s) {
    return d`
      <div class="current-weather-section">
        ${this.config.compact_mode === !0 ? d`
              ${this._renderCurrentWeatherCompactMode(
      r,
      e,
      t,
      i,
      n,
      s
    )}
            ` : d`
              ${this._renderCurrentWeather(
      r,
      e,
      t,
      i,
      n,
      s
    )}
            `}
      </div>
    `;
  }
  render() {
    if (nt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return d``;
    const r = this._getEntityState(this.config.entity), e = this._getEntityState(this.config.sun_entity || "sun.sun");
    if (!r)
      return d`<div>Entity not found: ${this.config.entity}</div>`;
    const t = this.config.show_location !== !1, i = this.config.location || A("location"), n = r.attributes.temperature, s = r.state, o = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null, a = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null, l = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null, c = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null, u = o ? parseFloat(o.state) : r.attributes.wind_speed || 0, h = a ? parseFloat(a.state) : r.attributes.wind_bearing || 0, p = r.attributes.humidity || 0, y = r.attributes.pressure || 0, x = r.attributes.visibility || 0, C = this.config.forecast_hours ?? 6;
    return d`
      ${t ? d`
            <div class="header">
              <div class="location">${i}</div>
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
            ${gt(
      s,
      this.config.enable_animate_weather_icons ? "animated" : "mdi",
      "64px",
      Di(this.hass, this.config)
    )}
          </div>
        </div>
      </div>

      ${this._renderCurrentWeatherSection(
      u,
      h,
      p,
      y,
      x,
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
    ]).map((De) => {
      switch (De) {
        case "temperature":
          return this._renderForecastTemperature(C);
        case "precipitation":
          return this._renderForecastPrecipitation(C);
        case "sunshine":
          return this._renderForecastSunshine(r, e, C);
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
  _renderCurrentWeatherCompactMode(r, e, t, i, n, s) {
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
          <div class="metric-value">${i} hPa</div>
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
          .getWeatherIcon=${gt}
          .formatDate=${ns}
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
          .getWeatherIcon=${gt}
        ></daily-forecast-diagram>` : d``;
  }
};
xe([
  m({ attribute: !1 })
], ee.prototype, "hass", 2);
xe([
  m({ attribute: !1 })
], ee.prototype, "config", 2);
xe([
  me()
], ee.prototype, "_forecast", 2);
xe([
  me()
], ee.prototype, "_hourlyForecast", 2);
xe([
  me()
], ee.prototype, "_forecastLoading", 2);
xe([
  me()
], ee.prototype, "_openWarnings", 2);
ee = xe([
  z(st)
], ee);
const de = `${rr}-forecast-diagram-card`, Pi = `${de}-editor`, Zt = [
  {
    name: "entity",
    required: !0,
    selector: { entity: { domain: "weather" } },
    description: "config.descr.entity"
  }
];
var wo = Object.defineProperty, vo = Object.getOwnPropertyDescriptor, Ot = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? vo(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && wo(e, t, n), n;
};
Ee({
  // Loads the language by returning a JSON structure for a given language
  loader: (r) => Ge[r]
});
let rt = class extends H {
  hass;
  lovelace;
  _config;
  constructor() {
    super(), console.log("🎨 SwissweatherCardEditor (Forecast Diagram) constructor called");
  }
  setConfig(r) {
    const e = { ...r }, t = ["entity", "sun_entity"];
    for (const i of t)
      e[i] === "" && delete e[i];
    this._config = e, this.requestUpdate();
  }
  static get styles() {
    return G`
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
    nt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
    const r = {
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
          <div class="group-title">${v("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${r}
            .schema=${[Zt.find((e) => e.name === "entity")].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Sensors -->
        <div class="group">
          <div class="group-title">${v("config.group_sensors") || "Sensors"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${r}
            .schema=${[Zt.find((e) => e.name === "sun_entity")].filter(Boolean)}
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
  _computeLabel = (r) => ({
    entity: v("config.entity"),
    sun_entity: v("config.sun_entity")
  })[r.name] || r.name;
  _computeHelper = (r) => r.description ? v(r.description) : "";
  _renderConfigPreview() {
    const r = { ...this._config };
    return r.type || (r.type = "custom:" + de), Object.keys(r).forEach((e) => {
      (r[e] === void 0 || r[e] === "") && delete r[e];
    }), Object.entries(r).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join(`
`);
  }
  _valueChanged(r) {
    if (this._config || (this._config = {
      type: `custom:${de}`,
      entity: "",
      sun_entity: ""
    }), r.type === "value-changed") {
      const e = {}, { ...t } = r.detail.value || {}, i = {
        ...this._config,
        ...t,
        ...e,
        type: "custom:" + de
      };
      Object.keys(i).forEach((n) => {
        (i[n] === "" || i[n] === void 0) && delete i[n];
      }), this._config = i, bt(this, "config-changed", { config: this._config });
    }
  }
};
Ot([
  m({ attribute: !1 })
], rt.prototype, "hass", 2);
Ot([
  m({ attribute: !1 })
], rt.prototype, "lovelace", 2);
Ot([
  m({ attribute: !1 })
], rt.prototype, "_config", 2);
rt = Ot([
  z(Pi)
], rt);
var bo = Object.defineProperty, _o = Object.getOwnPropertyDescriptor, ze = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? _o(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && bo(e, t, n), n;
};
Ee({
  // Loads the language by returning a JSON structure for a given language
  loader: (r) => Ge[r]
});
let ge = class extends H {
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
  updated(r) {
    super.updated(r);
  }
  static get styles() {
    return G`
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
        const i = e?.response;
        i && i[this.config.entity] ? (this._hourlyForecast = i[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [], console.log("🟢 Forecast geladen:", {
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
  setConfig(r) {
    if (!r.entity)
      throw new Error("You need to define an entity");
    this.config = r, setTimeout(() => {
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
    return document.createElement(Pi);
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return Zt;
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
    const r = At(this.hass, this.config.entity), e = this.config?.grid_options?.rows ?? 3;
    return this.style.setProperty("--card-grid-rows", e.toString()), r ? !this._forecast || this._forecast.length === 0 ? d`<div>Loading forecast...</div>` : !this._hourlyForecast || this._hourlyForecast.length === 0 ? d`<div>Loading hourly forecast...</div>` : this._forecast.length > 0 && this._hourlyForecast.length > 0 ? d`<daily-forecast-diagram
          .config=${{ ...this.config, enable_animate_weather_icons: !0 }}
          .forecast=${[...this._forecast?.slice(0, 7) ?? []]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${A}
          .getWeatherIcon=${gt}
          .standalone=${!0}
        ></daily-forecast-diagram>` : d`` : d`<div>Entity not found: ${this.config.entity}</div>`;
  }
};
ze([
  m({ attribute: !1 })
], ge.prototype, "hass", 2);
ze([
  m({ attribute: !1 })
], ge.prototype, "config", 2);
ze([
  me()
], ge.prototype, "_forecast", 2);
ze([
  me()
], ge.prototype, "_hourlyForecast", 2);
ze([
  me()
], ge.prototype, "_forecastLoading", 2);
ge = ze([
  z(de)
], ge);
const $o = (r, e, t) => {
  if (!r)
    return d``;
  const i = {
    "clear-night": ko(t),
    cloudy: Co(t),
    fog: Mo(t),
    hail: So(t),
    lightning: Lo(t),
    "lightning-rainy": Ho(t),
    partlycloudy: e ? Go(t) : zo(t),
    pouring: No(t),
    rainy: To(t),
    snowy: Eo(t),
    "snowy-rainy": Oo(t),
    sunny: Ao(),
    windy: Jr(t),
    "windy-variant": Jr(t),
    exceptional: Do(t)
  };
  return r ? i[r] : d``;
}, ko = (r) => w`
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
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i;
  return w`
    <use href="#starIcon" x="0" y="0" transform="translate(${s},${n}) scale(0.5)"/>
    `;
})}
  </g>
`, Ao = () => w`
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
`, Co = (r) => w`
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
  
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i;
  return w`
    <g>
      <use href="#cloudIcon" x="0" y="0" transform="translate(${s},${n}) scale(0.5)"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
    </g>
    `;
})}
  `, Mo = (r) => w`
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
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i;
  return w`
    <g>
      <use href="#fogIcon" x="0" y="0" transform="translate(${s},${n}) scale(0.5)"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
    </g>
    `;
})}
  `, So = (r) => w`
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
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i;
  return w`
  <g>
    <use href="#hailIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(${s},${n})" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  `;
})}
  `, To = (r) => w`
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
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i, o = 1 * Math.random();
  return w`
    <g>
      <use href="#cloudRainGroup" x="0" y="-10" width="80" height="40" transform="scale(${o}.${o}) translate(${s},${n})" opacity="0.9"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
    </g>
    `;
})}
  
  `;
w`<g transform="translate(168,-30) scale(3)"><circle cx="24" cy="42" r="4" fill="#a8dadc"/><circle cx="40" cy="42" r="4" fill="#a8dadc"/><circle cx="32" cy="34" r="4" fill="#a8dadc"/><path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></g>`;
const No = (r) => w`
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
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 20 + i;
  return w`
    <line x1="${s}" y1="${n}" x2="${s}" y2="${n + 10}" stroke="url(#extremeRainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${n}; ${n + 20}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${n + 10}; ${n + 30}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="0.5s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, Jr = (r) => w`
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
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 50 + i;
  return w`
    <line x1="${s}" y1="${n}" x2="${s + 30}" y2="${n}" stroke="url(#windLineGradient)" stroke-width="4" stroke-linecap="round">
      <animate attributeName="x1" values="${s}; ${s + 10}; ${s}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="${s + 30}; ${s + 40}; ${s + 30}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0.4; 1" dur="3s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, Lo = (r) => w`
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
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i;
  return w`
    <g transform="translate(${s},${n}) scale(0.5)">
      <path fill="#facc15" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M30 35l-8 12h6l-8 12" opacity="0">
        <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" begin="${e * 2 % 10}s"/>
      </path>
    </g>
    `;
})}
  `, Ho = (r) => w`
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
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 20 + i;
  return w`
    <line x1="${s}" y1="${n}" x2="${s}" y2="${n + 10}" stroke="url(#thunderstormRainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${n}; ${n + 20}" dur="1s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${n + 10}; ${n + 30}" dur="1s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite"/>
    </line>
    `;
})}
  <!-- Lightning flashes -->
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i;
  return w`
    <g transform="translate(${s},${n}) scale(0.5)">
      <path fill="#facc15" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M30 35l-8 12h6l-8 12" opacity="0">
        <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" begin="${e * 2 % 10}s"/>
      </path>
    </g>
    `;
})}
  `, Oo = (r) => w`
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
  
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i;
  return w`
  <g>
    <use href="#sleetIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(${s},${n})" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  `;
})}
  `, Eo = (r) => w`
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
    <g id="cloudIconWithSnow">
    </g>

  </defs>
  
  <g>
  ${Array.from({ length: Math.ceil(r / 20) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 20 + i;
  return w`
    <g transform="translate(${s},${n}) scale(0.5)">
      <use href="#snowFlakeIcon" x="0" y="0" width="8" height="8" opacity="1"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,20" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite"/>
    </g>
    `;
})}
  </g>
  `, Go = (r) => w`
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
    <g id="partlyCloudyDayIcon">
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
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i, o = Math.floor(Math.random() * 2) + 1, a = 0.5 + Math.random() * 0.5, l = 44 + Math.floor(Math.random() * 100), c = 10 + Math.floor(Math.random() * 100);
  return w`
    <g>
      <use href="#partlyCloudyDayIcon" x="${s}" y="${n}" width="80" height="40" transform="scale(${o})" opacity="0">
        <animate attributeName="opacity" values="0;${a};${a};0" dur="${c}s" repeatCount="indefinite"/>
      </use>
      <animateTransform attributeName="transform" type="translate" values="-150,20;450,20" dur="${l}s" repeatCount="indefinite"/>
    </g>
    `;
})}
  `, zo = (r) => w`
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
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="60s" repeatCount="indefinite"/>
    </g>
  </defs>
  <!-- Moon -->
  <g>
    <use href="#moonIcon" x="200" y="50" width="100" height="100" opacity="0.9"/>
  </g>
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i, o = Math.floor(Math.random() * 2) + 1, a = 0.5 + Math.random() * 0.5, l = 44 + Math.floor(Math.random() * 100), c = 10 + Math.floor(Math.random() * 100);
  return console.log(l), w`
    <g>
      <use href="#partlyCloudyNighIcon" x="${s}" y="${n}" width="80" height="40" transform="scale(${o})" opacity="0">
        <animate attributeName="opacity" values="0;${a};${a};0" dur="${c}s" repeatCount="indefinite"/>
      </use>
      <animateTransform attributeName="transform" type="translate" values="-150,20;450,20" dur="${l}s" repeatCount="indefinite"/>
    </g>
    `;
})}
  `, Do = (r) => w`
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
  
  ${Array.from({ length: Math.ceil(r / 100) }, (e, t) => t).map((e) => {
  const t = Math.floor(Math.random() * 100), i = Math.floor(Math.random() * 10), n = (t - 50) / 5 + e * Math.floor(Math.random() * 25), s = e * 100 + i;
  return w`
  <g>
    <use href="#hurricaneIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(${s},${n})" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  `;
})}
  `, he = `${rr}-animated-background-card`, Ri = `${he}-editor`, Wi = [
  {
    name: "entity",
    required: !0,
    selector: { entity: { domain: "weather" } },
    description: "config.descr.entity"
  }
];
var Po = Object.defineProperty, Ro = Object.getOwnPropertyDescriptor, ur = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Ro(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && Po(e, t, n), n;
};
Ee({
  // Loads the language by returning a JSON structure for a given language
  loader: (r) => Ge[r]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard (BG)");
console.log("🎯 customElements registry available:", !!customElements);
let Ct = class extends H {
  hass;
  config;
  static get styles() {
    return G`
      :host {
        display: block;
        box-shadow: none;
        min-height: 260px;
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
  setConfig(r) {
    if (!r.entity)
      throw new Error("You need to define an entity");
    this.config = r;
  }
  getCardSize() {
    return 4;
  }
  static getStubConfig() {
    return {
      type: `custom:${he}`,
      entity: ""
    };
  }
  static getConfigElement() {
    return document.createElement(Ri);
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return Wi;
  }
  render() {
    if (nt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return d``;
    const r = At(this.hass, this.config.entity), e = r.attributes.temperature, t = r.state, i = this.clientWidth || 300;
    return d`
      <div>
        <div class="temperature">
          ${typeof e == "number" && !isNaN(e) ? e : "--"}°
        </div>
        ${t ? d`<div class="img-svg">
                <svg
                  viewBox="0 0 ${i} 200"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid slice"
                >
                  ${i > 0 ? $o(t, Di(this.hass, this.config), i) : w``}
                </svg>
              </div>
              <div class="condition">${A(t)}</div> ` : d``}
      </div>
    `;
  }
};
ur([
  m({ attribute: !1 })
], Ct.prototype, "hass", 2);
ur([
  m({ attribute: !1 })
], Ct.prototype, "config", 2);
Ct = ur([
  z(he)
], Ct);
console.log("✅ SwissWeatherCard (animated Background) fully loaded and registered");
var Wo = Object.defineProperty, Fo = Object.getOwnPropertyDescriptor, Et = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Fo(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && Wo(e, t, n), n;
};
Ee({
  // Loads the language by returning a JSON structure for a given language
  loader: (r) => Ge[r]
});
let it = class extends H {
  hass;
  lovelace;
  _config;
  constructor() {
    super(), console.log("🎨 SwissweatherCardEditor (BG) constructor called");
  }
  setConfig(r) {
    const e = { ...r }, t = ["entity", "sun_entity"];
    for (const i of t)
      e[i] === "" && delete e[i];
    this._config = e, this.requestUpdate();
  }
  static get styles() {
    return G`
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
    nt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
    const r = {
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
          <div class="group-title">${v("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${r}
            .schema=${[Wi.find((e) => e.name === "entity")].filter(Boolean)}
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
  _computeLabel = (r) => ({
    entity: v("config.entity"),
    sun_entity: v("config.sun_entity")
  })[r.name] || r.name;
  _computeHelper = (r) => r.description ? v(r.description) : "";
  _renderConfigPreview() {
    const r = { ...this._config };
    return r.type || (r.type = `custom:${he}`), Object.keys(r).forEach((e) => {
      (r[e] === void 0 || r[e] === "") && delete r[e];
    }), Object.entries(r).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join(`
`);
  }
  _valueChanged(r) {
    if (this._config || (this._config = {
      type: `custom:${he}`,
      entity: ""
    }), r.type === "value-changed") {
      const e = {}, { ...t } = r.detail.value || {}, i = {
        ...this._config,
        ...t,
        ...e,
        type: `custom:${he}`
      };
      Object.keys(i).forEach((n) => {
        (i[n] === "" || i[n] === void 0) && delete i[n];
      }), this._config = i, bt(this, "config-changed", { config: this._config });
    }
  }
};
Et([
  m({ attribute: !1 })
], it.prototype, "hass", 2);
Et([
  m({ attribute: !1 })
], it.prototype, "lovelace", 2);
Et([
  m({ attribute: !1 })
], it.prototype, "_config", 2);
it = Et([
  z(Ri)
], it);
console.log("📦 SwissWeather Card TypeScript file imported");
setTimeout(() => {
  const r = customElements.get("swissweather-card"), e = customElements.get("swissweather-card-editor");
  console.log("🔍 SwissWeather Card registration status:", r ? "SUCCESS ✅" : "FAILED ❌"), console.log("🔍 SwissWeather Editor registration status:", e ? "SUCCESS ✅" : "FAILED ❌"), r ? (console.log("🔍 Element constructor:", r), console.log("🔍 Element prototype:", r.prototype)) : (console.error('❌ Custom element "swissweather-card" was not registered!'), console.log("🔍 Checking custom elements registry..."));
}, 100);
console.log("📦 SwissWeather Card module loading started...");
console.log("📦 Browser support check:", {
  customElements: !!window.customElements,
  hasReflect: !!window.Reflect
});
pr({
  type: st,
  name: "SwissWeather Diagram Card",
  description: "A comprehensive weather card for Home Assistant with Swiss weather warnings and forecasts"
});
pr({
  type: de,
  name: "SwissWeather Daily Forecast Diagram Card",
  description: "A card to show daily weather forecast as diagram"
});
pr({
  type: he,
  name: "SwissWeather Animated Background Card Editor",
  description: "the SwissWeather Animated Background Card"
});
console.log(
  `%c 📦 SwissWeather Card module loading completed - version: ${Vi}`,
  "color: #ef5350; font-weight: 700;"
);
export {
  F as DailyForecastChart,
  J as DailyForecastDiagram,
  ge as ForecastDiagramCard,
  rt as ForecastDiagramCardEditor,
  K as ForecastTemperatureChart,
  Q as PrecipitationChart,
  U as SunshineChart,
  Ct as SwissWeatherBGCard,
  it as SwissWeatherBGCardEditor,
  ee as SwissWeatherCard,
  tt as SwissWeatherCardEditor,
  X as WindChart
};
//# sourceMappingURL=swissweather-card.js.map

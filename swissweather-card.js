const ne = {
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
      compact_mode: "Kompakter Modus"
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
    "lightning-rainy": "Blitz mit Regen",
    partlycloudy: "Teilweise bewölkt",
    pouring: "Starker Regen",
    rainy: "Regen",
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
    sunset: "Sonnenuntergang"
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
      compact_mode: "Compact Mode"
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
    sunset: "Sunset"
  }
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, pt = Y.ShadowRoot && (Y.ShadyCSS === void 0 || Y.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, gt = Symbol(), wt = /* @__PURE__ */ new WeakMap();
let Ut = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== gt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (pt && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = wt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && wt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const se = (n) => new Ut(typeof n == "string" ? n : n + "", void 0, gt), Rt = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce(((i, s, r) => i + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[r + 1]), n[0]);
  return new Ut(e, n, gt);
}, re = (n, t) => {
  if (pt) n.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const i = document.createElement("style"), s = Y.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, n.appendChild(i);
  }
}, bt = pt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return se(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: oe, defineProperty: ae, getOwnPropertyDescriptor: le, getOwnPropertyNames: ce, getOwnPropertySymbols: he, getPrototypeOf: de } = Object, it = globalThis, xt = it.trustedTypes, ue = xt ? xt.emptyScript : "", pe = it.reactiveElementPolyfillSupport, F = (n, t) => n, G = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? ue : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, _t = (n, t) => !oe(n, t), At = { attribute: !0, type: String, converter: G, reflect: !1, useDefault: !1, hasChanged: _t };
Symbol.metadata ??= Symbol("metadata"), it.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let P = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = At) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && ae(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: s, set: r } = le(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get: s, set(o) {
      const l = s?.call(this);
      r?.call(this, o), this.requestUpdate(t, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? At;
  }
  static _$Ei() {
    if (this.hasOwnProperty(F("elementProperties"))) return;
    const t = de(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(F("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(F("properties"))) {
      const e = this.properties, i = [...ce(e), ...he(e)];
      for (const s of i) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, s] of e) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const s = this._$Eu(e, i);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) e.unshift(bt(s));
    } else t !== void 0 && e.push(bt(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((t) => this.enableUpdating = t)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t) => t(this)));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return re(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((t) => t.hostConnected?.()));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((t) => t.hostDisconnected?.()));
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    const i = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const r = (i.converter?.toAttribute !== void 0 ? i.converter : G).toAttribute(e, i.type);
      this._$Em = t, r == null ? this.removeAttribute(s) : this.setAttribute(s, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const r = i.getPropertyOptions(s), o = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : G;
      this._$Em = s;
      const l = o.fromAttribute(e, r.type);
      this[s] = l ?? this._$Ej?.get(s) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, i) {
    if (t !== void 0) {
      const s = this.constructor, r = this[t];
      if (i ??= s.getPropertyOptions(t), !((i.hasChanged ?? _t)(r, e) || i.useDefault && i.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(s._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: s, wrapped: r }, o) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, o ?? e ?? this[t]), r !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [s, r] of this._$Ep) this[s] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [s, r] of i) {
        const { wrapped: o } = r, l = this[s];
        o !== !0 || this._$AL.has(s) || l === void 0 || this.C(s, void 0, r, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach(((i) => i.hostUpdate?.())), this.update(e)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach(((e) => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach(((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
P.elementStyles = [], P.shadowRootOptions = { mode: "open" }, P[F("elementProperties")] = /* @__PURE__ */ new Map(), P[F("finalized")] = /* @__PURE__ */ new Map(), pe?.({ ReactiveElement: P }), (it.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = globalThis, Q = ft.trustedTypes, St = Q ? Q.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, Ft = "$lit$", $ = `lit$${Math.random().toFixed(9).slice(2)}$`, jt = "?" + $, ge = `<${jt}>`, N = document, I = () => N.createComment(""), B = (n) => n === null || typeof n != "object" && typeof n != "function", mt = Array.isArray, _e = (n) => mt(n) || typeof n?.[Symbol.iterator] == "function", ot = `[ 	
\f\r]`, U = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ct = /-->/g, Et = />/g, x = RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Nt = /'/g, Wt = /"/g, It = /^(?:script|style|textarea|title)$/i, Bt = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), g = Bt(1), J = Bt(2), T = Symbol.for("lit-noChange"), m = Symbol.for("lit-nothing"), Mt = /* @__PURE__ */ new WeakMap(), S = N.createTreeWalker(N, 129);
function Vt(n, t) {
  if (!mt(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return St !== void 0 ? St.createHTML(t) : t;
}
const fe = (n, t) => {
  const e = n.length - 1, i = [];
  let s, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = U;
  for (let l = 0; l < e; l++) {
    const a = n[l];
    let c, p, d = -1, _ = 0;
    for (; _ < a.length && (o.lastIndex = _, p = o.exec(a), p !== null); ) _ = o.lastIndex, o === U ? p[1] === "!--" ? o = Ct : p[1] !== void 0 ? o = Et : p[2] !== void 0 ? (It.test(p[2]) && (s = RegExp("</" + p[2], "g")), o = x) : p[3] !== void 0 && (o = x) : o === x ? p[0] === ">" ? (o = s ?? U, d = -1) : p[1] === void 0 ? d = -2 : (d = o.lastIndex - p[2].length, c = p[1], o = p[3] === void 0 ? x : p[3] === '"' ? Wt : Nt) : o === Wt || o === Nt ? o = x : o === Ct || o === Et ? o = U : (o = x, s = void 0);
    const u = o === x && n[l + 1].startsWith("/>") ? " " : "";
    r += o === U ? a + ge : d >= 0 ? (i.push(c), a.slice(0, d) + Ft + a.slice(d) + $ + u) : a + $ + (d === -2 ? l : u);
  }
  return [Vt(n, r + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
let ct = class qt {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let r = 0, o = 0;
    const l = t.length - 1, a = this.parts, [c, p] = fe(t, e);
    if (this.el = qt.createElement(c, i), S.currentNode = this.el.content, e === 2 || e === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (s = S.nextNode()) !== null && a.length < l; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const d of s.getAttributeNames()) if (d.endsWith(Ft)) {
          const _ = p[o++], u = s.getAttribute(d).split($), y = /([.?@])?(.*)/.exec(_);
          a.push({ type: 1, index: r, name: y[2], strings: u, ctor: y[1] === "." ? ye : y[1] === "?" ? ve : y[1] === "@" ? $e : nt }), s.removeAttribute(d);
        } else d.startsWith($) && (a.push({ type: 6, index: r }), s.removeAttribute(d));
        if (It.test(s.tagName)) {
          const d = s.textContent.split($), _ = d.length - 1;
          if (_ > 0) {
            s.textContent = Q ? Q.emptyScript : "";
            for (let u = 0; u < _; u++) s.append(d[u], I()), S.nextNode(), a.push({ type: 2, index: ++r });
            s.append(d[_], I());
          }
        }
      } else if (s.nodeType === 8) if (s.data === jt) a.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = s.data.indexOf($, d + 1)) !== -1; ) a.push({ type: 7, index: r }), d += $.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const i = N.createElement("template");
    return i.innerHTML = t, i;
  }
};
function k(n, t, e = n, i) {
  if (t === T) return t;
  let s = i !== void 0 ? e._$Co?.[i] : e._$Cl;
  const r = B(t) ? void 0 : t._$litDirective$;
  return s?.constructor !== r && (s?._$AO?.(!1), r === void 0 ? s = void 0 : (s = new r(n), s._$AT(n, e, i)), i !== void 0 ? (e._$Co ??= [])[i] = s : e._$Cl = s), s !== void 0 && (t = k(n, s._$AS(n, t.values), s, i)), t;
}
let me = class {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: i } = this._$AD, s = (t?.creationScope ?? N).importNode(e, !0);
    S.currentNode = s;
    let r = S.nextNode(), o = 0, l = 0, a = i[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let c;
        a.type === 2 ? c = new yt(r, r.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (c = new we(r, this, t)), this._$AV.push(c), a = i[++l];
      }
      o !== a?.index && (r = S.nextNode(), o++);
    }
    return S.currentNode = N, s;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}, yt = class Kt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, i, s) {
    this.type = 2, this._$AH = m, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = s?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = k(this, t, e), B(t) ? t === m || t == null || t === "" ? (this._$AH !== m && this._$AR(), this._$AH = m) : t !== this._$AH && t !== T && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : _e(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== m && B(this._$AH) ? this._$AA.nextSibling.data = t : this.T(N.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: i } = t, s = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = ct.createElement(Vt(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === s) this._$AH.p(e);
    else {
      const r = new me(s, this), o = r.u(this.options);
      r.p(e), this.T(o), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = Mt.get(t.strings);
    return e === void 0 && Mt.set(t.strings, e = new ct(t)), e;
  }
  k(t) {
    mt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const r of t) s === e.length ? e.push(i = new Kt(this.O(I()), this.O(I()), this, this.options)) : i = e[s], i._$AI(r), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}, nt = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, s, r) {
    this.type = 1, this._$AH = m, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = m;
  }
  _$AI(t, e = this, i, s) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) t = k(this, t, e, 0), o = !B(t) || t !== this._$AH && t !== T, o && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = r[0], a = 0; a < r.length - 1; a++) c = k(this, l[i + a], e, a), c === T && (c = this._$AH[a]), o ||= !B(c) || c !== this._$AH[a], c === m ? t = m : t !== m && (t += (c ?? "") + r[a + 1]), this._$AH[a] = c;
    }
    o && !s && this.j(t);
  }
  j(t) {
    t === m ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}, ye = class extends nt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === m ? void 0 : t;
  }
}, ve = class extends nt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== m);
  }
}, $e = class extends nt {
  constructor(t, e, i, s, r) {
    super(t, e, i, s, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = k(this, t, e, 0) ?? m) === T) return;
    const i = this._$AH, s = t === m && i !== m || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, r = t !== m && (i === m || s);
    s && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}, we = class {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    k(this, t);
  }
};
const be = ft.litHtmlPolyfillSupport;
be?.(ct, yt), (ft.litHtmlVersions ??= []).push("3.3.1");
const xe = (n, t, e) => {
  const i = e?.renderBefore ?? t;
  let s = i._$litPart$;
  if (s === void 0) {
    const r = e?.renderBefore ?? null;
    i._$litPart$ = s = new yt(t.insertBefore(I(), r), r, void 0, e ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt = globalThis;
let E = class extends P {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = xe(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return T;
  }
};
E._$litElement$ = !0, E.finalized = !0, vt.litElementHydrateSupport?.({ LitElement: E });
const Ae = vt.litElementPolyfillSupport;
Ae?.({ LitElement: E });
(vt.litElementVersions ??= []).push("4.2.1");
const ht = "langChanged";
function Se(n, t, e) {
  return Object.entries(dt(t || {})).reduce((i, [s, r]) => i.replace(new RegExp(`{{[  ]*${s}[  ]*}}`, "gm"), String(dt(r))), n);
}
function Ce(n, t) {
  const e = n.split(".");
  let i = t.strings;
  for (; i != null && e.length > 0; )
    i = i[e.shift()];
  return i != null ? i.toString() : null;
}
function dt(n) {
  return typeof n == "function" ? n() : n;
}
const Ee = () => ({
  loader: () => Promise.resolve({}),
  empty: (n) => `[${n}]`,
  lookup: Ce,
  interpolate: Se,
  translationCache: {}
});
let V = Ee();
function Ne(n) {
  return V = Object.assign(Object.assign({}, V), n);
}
function We(n) {
  window.dispatchEvent(new CustomEvent(ht, { detail: n }));
}
function Me(n, t, e = V) {
  We({
    previousStrings: e.strings,
    previousLang: e.lang,
    lang: e.lang = n,
    strings: e.strings = t
  });
}
function Pe(n, t) {
  const e = (i) => n(i.detail);
  return window.addEventListener(ht, e, t), () => window.removeEventListener(ht, e);
}
async function Zt(n, t = V) {
  const e = await t.loader(n, t);
  t.translationCache = {}, Me(n, e, t);
}
function Te(n, t, e = V) {
  let i = e.translationCache[n] || (e.translationCache[n] = e.lookup(n, e) || e.empty(n, e));
  return t = t != null ? dt(t) : null, t != null ? e.interpolate(i, t, e) : i;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jt = { CHILD: 2 }, ke = (n) => (...t) => ({ _$litDirective$: n, values: t });
let Yt = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var at;
const X = window, z = X.trustedTypes, Pt = z ? z.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ut = "$lit$", w = `lit$${(Math.random() + "").slice(9)}$`, Gt = "?" + w, ze = `<${Gt}>`, W = document, tt = () => W.createComment(""), q = (n) => n === null || typeof n != "object" && typeof n != "function", Qt = Array.isArray, Le = (n) => Qt(n) || typeof n?.[Symbol.iterator] == "function", lt = `[ 	
\f\r]`, R = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Tt = /-->/g, kt = />/g, A = RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), zt = /'/g, Lt = /"/g, Xt = /^(?:script|style|textarea|title)$/i, L = Symbol.for("lit-noChange"), f = Symbol.for("lit-nothing"), Ot = /* @__PURE__ */ new WeakMap(), C = W.createTreeWalker(W, 129, null, !1);
function te(n, t) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Pt !== void 0 ? Pt.createHTML(t) : t;
}
const Oe = (n, t) => {
  const e = n.length - 1, i = [];
  let s, r = t === 2 ? "<svg>" : "", o = R;
  for (let l = 0; l < e; l++) {
    const a = n[l];
    let c, p, d = -1, _ = 0;
    for (; _ < a.length && (o.lastIndex = _, p = o.exec(a), p !== null); ) _ = o.lastIndex, o === R ? p[1] === "!--" ? o = Tt : p[1] !== void 0 ? o = kt : p[2] !== void 0 ? (Xt.test(p[2]) && (s = RegExp("</" + p[2], "g")), o = A) : p[3] !== void 0 && (o = A) : o === A ? p[0] === ">" ? (o = s ?? R, d = -1) : p[1] === void 0 ? d = -2 : (d = o.lastIndex - p[2].length, c = p[1], o = p[3] === void 0 ? A : p[3] === '"' ? Lt : zt) : o === Lt || o === zt ? o = A : o === Tt || o === kt ? o = R : (o = A, s = void 0);
    const u = o === A && n[l + 1].startsWith("/>") ? " " : "";
    r += o === R ? a + ze : d >= 0 ? (i.push(c), a.slice(0, d) + ut + a.slice(d) + w + u) : a + w + (d === -2 ? (i.push(void 0), l) : u);
  }
  return [te(n, r + (n[e] || "<?>") + (t === 2 ? "</svg>" : "")), i];
};
class K {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let r = 0, o = 0;
    const l = t.length - 1, a = this.parts, [c, p] = Oe(t, e);
    if (this.el = K.createElement(c, i), C.currentNode = this.el.content, e === 2) {
      const d = this.el.content, _ = d.firstChild;
      _.remove(), d.append(..._.childNodes);
    }
    for (; (s = C.nextNode()) !== null && a.length < l; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) {
          const d = [];
          for (const _ of s.getAttributeNames()) if (_.endsWith(ut) || _.startsWith(w)) {
            const u = p[o++];
            if (d.push(_), u !== void 0) {
              const y = s.getAttribute(u.toLowerCase() + ut).split(w), b = /([.?@])?(.*)/.exec(u);
              a.push({ type: 1, index: r, name: b[2], strings: y, ctor: b[1] === "." ? He : b[1] === "?" ? Re : b[1] === "@" ? Fe : rt });
            } else a.push({ type: 6, index: r });
          }
          for (const _ of d) s.removeAttribute(_);
        }
        if (Xt.test(s.tagName)) {
          const d = s.textContent.split(w), _ = d.length - 1;
          if (_ > 0) {
            s.textContent = z ? z.emptyScript : "";
            for (let u = 0; u < _; u++) s.append(d[u], tt()), C.nextNode(), a.push({ type: 2, index: ++r });
            s.append(d[_], tt());
          }
        }
      } else if (s.nodeType === 8) if (s.data === Gt) a.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = s.data.indexOf(w, d + 1)) !== -1; ) a.push({ type: 7, index: r }), d += w.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const i = W.createElement("template");
    return i.innerHTML = t, i;
  }
}
function O(n, t, e = n, i) {
  var s, r, o, l;
  if (t === L) return t;
  let a = i !== void 0 ? (s = e._$Co) === null || s === void 0 ? void 0 : s[i] : e._$Cl;
  const c = q(t) ? void 0 : t._$litDirective$;
  return a?.constructor !== c && ((r = a?._$AO) === null || r === void 0 || r.call(a, !1), c === void 0 ? a = void 0 : (a = new c(n), a._$AT(n, e, i)), i !== void 0 ? ((o = (l = e)._$Co) !== null && o !== void 0 ? o : l._$Co = [])[i] = a : e._$Cl = a), a !== void 0 && (t = O(n, a._$AS(n, t.values), a, i)), t;
}
class De {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var e;
    const { el: { content: i }, parts: s } = this._$AD, r = ((e = t?.creationScope) !== null && e !== void 0 ? e : W).importNode(i, !0);
    C.currentNode = r;
    let o = C.nextNode(), l = 0, a = 0, c = s[0];
    for (; c !== void 0; ) {
      if (l === c.index) {
        let p;
        c.type === 2 ? p = new st(o, o.nextSibling, this, t) : c.type === 1 ? p = new c.ctor(o, c.name, c.strings, this, t) : c.type === 6 && (p = new je(o, this, t)), this._$AV.push(p), c = s[++a];
      }
      l !== c?.index && (o = C.nextNode(), l++);
    }
    return C.currentNode = W, r;
  }
  v(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class st {
  constructor(t, e, i, s) {
    var r;
    this.type = 2, this._$AH = f, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cp = (r = s?.isConnected) === null || r === void 0 || r;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = O(this, t, e), q(t) ? t === f || t == null || t === "" ? (this._$AH !== f && this._$AR(), this._$AH = f) : t !== this._$AH && t !== L && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : Le(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== f && q(this._$AH) ? this._$AA.nextSibling.data = t : this.$(W.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: i, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = K.createElement(te(s.h, s.h[0]), this.options)), s);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r) this._$AH.v(i);
    else {
      const o = new De(r, this), l = o.u(this.options);
      o.v(i), this.$(l), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = Ot.get(t.strings);
    return e === void 0 && Ot.set(t.strings, e = new K(t)), e;
  }
  T(t) {
    Qt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const r of t) s === e.length ? e.push(i = new st(this.k(tt()), this.k(tt()), this, this.options)) : i = e[s], i._$AI(r), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class rt {
  constructor(t, e, i, s, r) {
    this.type = 1, this._$AH = f, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = f;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, s) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) t = O(this, t, e, 0), o = !q(t) || t !== this._$AH && t !== L, o && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = r[0], a = 0; a < r.length - 1; a++) c = O(this, l[i + a], e, a), c === L && (c = this._$AH[a]), o || (o = !q(c) || c !== this._$AH[a]), c === f ? t = f : t !== f && (t += (c ?? "") + r[a + 1]), this._$AH[a] = c;
    }
    o && !s && this.j(t);
  }
  j(t) {
    t === f ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class He extends rt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === f ? void 0 : t;
  }
}
const Ue = z ? z.emptyScript : "";
class Re extends rt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== f ? this.element.setAttribute(this.name, Ue) : this.element.removeAttribute(this.name);
  }
}
class Fe extends rt {
  constructor(t, e, i, s, r) {
    super(t, e, i, s, r), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = O(this, t, e, 0)) !== null && i !== void 0 ? i : f) === L) return;
    const s = this._$AH, r = t === f && s !== f || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== f && (s === f || r);
    r && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class je {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    O(this, t);
  }
}
const Dt = X.litHtmlPolyfillSupport;
Dt?.(K, st), ((at = X.litHtmlVersions) !== null && at !== void 0 ? at : X.litHtmlVersions = []).push("2.8.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ie = (n) => n.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = (n, t) => {
  var e, i;
  const s = n._$AN;
  if (s === void 0) return !1;
  for (const r of s) (i = (e = r)._$AO) === null || i === void 0 || i.call(e, t, !1), j(r, t);
  return !0;
}, et = (n) => {
  let t, e;
  do {
    if ((t = n._$AM) === void 0) break;
    e = t._$AN, e.delete(n), n = t;
  } while (e?.size === 0);
}, ee = (n) => {
  for (let t; t = n._$AM; n = t) {
    let e = t._$AN;
    if (e === void 0) t._$AN = e = /* @__PURE__ */ new Set();
    else if (e.has(n)) break;
    e.add(n), qe(t);
  }
};
function Be(n) {
  this._$AN !== void 0 ? (et(this), this._$AM = n, ee(this)) : this._$AM = n;
}
function Ve(n, t = !1, e = 0) {
  const i = this._$AH, s = this._$AN;
  if (s !== void 0 && s.size !== 0) if (t) if (Array.isArray(i)) for (let r = e; r < i.length; r++) j(i[r], !1), et(i[r]);
  else i != null && (j(i, !1), et(i));
  else j(this, n);
}
const qe = (n) => {
  var t, e, i, s;
  n.type == Jt.CHILD && ((t = (i = n)._$AP) !== null && t !== void 0 || (i._$AP = Ve), (e = (s = n)._$AQ) !== null && e !== void 0 || (s._$AQ = Be));
};
class Ke extends Yt {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, e, i) {
    super._$AT(t, e, i), ee(this), this.isConnected = t._$AU;
  }
  _$AO(t, e = !0) {
    var i, s;
    t !== this.isConnected && (this.isConnected = t, t ? (i = this.reconnected) === null || i === void 0 || i.call(this) : (s = this.disconnected) === null || s === void 0 || s.call(this)), e && (j(this, t), et(this));
  }
  setValue(t) {
    if (Ie(this._$Ct)) this._$Ct._$AI(t, this);
    else {
      const e = [...this._$Ct._$AH];
      e[this._$Ci] = t, this._$Ct._$AI(e, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
class Ze extends Ke {
  constructor() {
    super(...arguments), this.langChangedSubscription = null, this.getValue = (() => "");
  }
  /**
   * Sets up the directive by setting the getValue property and subscribing.
   * When subclassing LangChangedDirectiveBase this function should be call in the render function.
   * @param getValue
   */
  renderValue(t) {
    return this.getValue = t, this.subscribe(), this.getValue();
  }
  /**
   * Called when the lang changed event is dispatched.
   * @param e
   */
  langChanged(t) {
    this.setValue(this.getValue(t));
  }
  /**
   * Subscribes to the lang changed event.
   */
  subscribe() {
    this.langChangedSubscription == null && (this.langChangedSubscription = Pe(this.langChanged.bind(this)));
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
class Je extends Ze {
  render(t, e, i) {
    return this.renderValue(() => Te(t, e, i));
  }
}
const h = ke(Je);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ht extends Yt {
  constructor(t) {
    if (super(t), this.et = f, t.type !== Jt.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === f || t == null) return this.ft = void 0, this.et = t;
    if (t === L) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.et) return this.ft;
    this.et = t;
    const e = [t];
    return e.raw = e, this.ft = { _$litType$: this.constructor.resultType, strings: e, values: [] };
  }
}
Ht.directiveName = "unsafeHTML", Ht.resultType = 1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = (n) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(n, t);
  })) : customElements.define(n, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ye = { attribute: !0, type: String, converter: G, reflect: !1, hasChanged: _t }, Ge = (n = Ye, t, e) => {
  const { kind: i, metadata: s } = e;
  let r = globalThis.litPropertyMetadata.get(s);
  if (r === void 0 && globalThis.litPropertyMetadata.set(s, r = /* @__PURE__ */ new Map()), i === "setter" && ((n = Object.create(n)).wrapped = !0), r.set(e.name, n), i === "accessor") {
    const { name: o } = e;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(o, a, n);
    }, init(l) {
      return l !== void 0 && this.C(o, void 0, n, l), l;
    } };
  }
  if (i === "setter") {
    const { name: o } = e;
    return function(l) {
      const a = this[o];
      t.call(this, l), this.requestUpdate(o, a, n);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function D(n) {
  return (t, e) => typeof e == "object" ? Ge(n, t, e) : ((i, s, r) => {
    const o = s.hasOwnProperty(r);
    return s.constructor.createProperty(r, i), o ? Object.getOwnPropertyDescriptor(s, r) : void 0;
  })(n, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function $t(n) {
  return D({ ...n, state: !0, attribute: !1 });
}
var Qe = Object.defineProperty, Xe = Object.getOwnPropertyDescriptor, v = (n, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Xe(t, e) : t, r = n.length - 1, o; r >= 0; r--)
    (o = n[r]) && (s = (i ? o(t, e, s) : o(s)) || s);
  return i && s && Qe(t, e, s), s;
};
Ne({
  // Loads the language by returning a JSON structure for a given language
  loader: (n) => ne[n]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard");
console.log("🎯 customElements registry available:", !!customElements);
let M = class extends E {
  hass;
  config;
  _forecast = [];
  _hourlyForecast = [];
  _forecastLoading = !1;
  constructor() {
    super(), console.log("🔧 SwissweatherCard constructor called"), console.log("🔧 LitElement base:", E), console.log("🔧 customElement decorator applied");
  }
  connectedCallback() {
    super.connectedCallback(), console.log("🔌 SwissweatherCard connected to DOM"), console.log("🔌 Custom element defined:", customElements.get("swissweather-card"));
  }
  _lastEntityId;
  updated(n) {
    super.updated(n), this.hass && this.config && this.config.entity && this._lastEntityId !== this.config.entity && (this._lastEntityId = this.config.entity, this._loadForecast());
  }
  async _loadForecast() {
    if (!(!this.hass || !this.config?.entity || this._forecastLoading)) {
      this._forecastLoading = !0;
      try {
        const [n, t] = await Promise.all([
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
        ]), e = n?.response;
        e && e[this.config.entity] ? (this._forecast = e[this.config.entity].forecast || [], this.requestUpdate("_forecast")) : this._forecast = [];
        const i = t?.response;
        i && i[this.config.entity] ? (this._hourlyForecast = i[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [];
      } catch (n) {
        console.warn("⚠️ Forecast loading failed:", n), this._forecast = [], this._hourlyForecast = [];
      } finally {
        this._forecastLoading = !1;
      }
    }
  }
  static get styles() {
    return Rt`
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
        height: 50px;
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
  setConfig(n) {
    if (!n.entity)
      throw new Error("You need to define an entity");
    this.config = n, setTimeout(() => {
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
      compact_mode: !1
    };
  }
  static getConfigElement() {
    return document.createElement("swissweather-card-editor");
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return [
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
        name: "show_location",
        selector: {
          boolean: {}
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
      {
        name: "show_forecast",
        selector: {
          boolean: {}
        }
      },
      {
        name: "forecast_hours",
        selector: {
          number: {
            min: 6,
            max: 18,
            mode: "box"
          }
        }
      },
      {
        name: "show_temperature",
        selector: {
          boolean: {}
        }
      },
      {
        name: "show_precipitation",
        selector: {
          boolean: {}
        }
      },
      {
        name: "show_sunshine",
        selector: {
          boolean: {}
        }
      },
      {
        name: "show_warnings",
        selector: {
          boolean: {}
        }
      },
      {
        name: "compact_mode",
        selector: {
          boolean: {}
        }
      }
    ];
  }
  _getEntityState(n) {
    return this.hass?.states[n];
  }
  // Returns the appropriate MDI icon for a weather condition
  _getWeatherMdiIcon(n) {
    return {
      "clear-night": "mdi:weather-night",
      cloudy: "mdi:weather-cloudy",
      fog: "mdi:weather-fog",
      hail: "mdi:weather-hail",
      lightning: "mdi:weather-lightning",
      "lightning-rainy": "mdi:weather-lightning-rainy",
      partlycloudy: "mdi:weather-partly-cloudy",
      pouring: "mdi:weather-pouring",
      rainy: "mdi:weather-rainy",
      snowy: "mdi:weather-snowy",
      "snowy-rainy": "mdi:weather-snowy-rainy",
      sunny: "mdi:weather-sunny",
      windy: "mdi:weather-windy",
      "windy-variant": "mdi:weather-windy-variant",
      exceptional: "mdi:weather-hurricane"
    }[n] || "mdi:weather-sunny";
  }
  _getWarningLevel(n) {
    if (!n || n.length === 0) return "none";
    const t = Math.max(...n.map((e) => e.level || 0));
    return t >= 4 ? "danger" : t >= 3 ? "severe" : t >= 2 ? "warning" : "info";
  }
  _formatWindDirection(n) {
    const t = [
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
    ], e = Math.round(n / 22.5) % 16;
    return t[e];
  }
  _renderWarningSection(n) {
    const t = [];
    if (n?.attributes?.warning_levels && Array.isArray(n.attributes.warning_levels))
      for (let i = 0; i < n?.attributes.warning_levels.length; i++)
        t.push({
          id: `warning_${i}`,
          title: n?.attributes.warning_levels[i],
          level: n?.attributes.warning_levels[i],
          type: n?.attributes.warning_types[i],
          description: n?.attributes.warning_texts[i],
          valid_from: n.attributes.warning_valid_from[i],
          valid_to: n.attributes.warning_valid_to[i],
          link: n.attributes.warning_links[i],
          regions: [],
          phenomena: []
        });
    const e = this._getWarningLevel(t);
    return t.length > 0 ? g`
          <div class="warning-section ${e}">
            <div class="warning-icon">
              <ha-icon icon="mdi:alert" style="color: var(--error-color, #dc143c);"></ha-icon>
            </div>
            <div>
              <strong>${h("weather_warning")}</strong>
              <ul style="margin: 6px 0 0 0; padding-left: 18px;">
                ${t.map(
      (i) => g`
                    <li>
                      ${i.title && i.description && i.link && i.type ? g`<strong>${i.title}</strong>: ${i.type}<br />${i.description} -
                            <a
                              href="${i.link}"
                              target="_blank"
                              style="color: var(--primary-text-color, #fff); text-decoration: underline;"
                              >Link</a
                            >` : i.title && i.description && i.type ? g`<strong>${i.title}</strong>: ${i.type}<br />${i.description}` : i.title && i.description ? g`<strong>${i.title}</strong>: ${i.description}` : i.title ? g`<strong>${i.title}</strong>` : i.description || h("warnings")}
                    </li>
                  `
    )}
              </ul>
            </div>
          </div>
        ` : g``;
  }
  _renderForecastTemperature(n) {
    return this.config.show_temperature !== !1 ? this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, n).some((t) => typeof t.temperature == "number" && !isNaN(t.temperature)) ? g`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:thermometer"></ha-icon>
                ${h("temperature_hours", { hours: n })}
              </div>
              <div class="chart-line" style="position:relative;">
                ${this._hourlyForecast.slice(0, n).map((t) => {
      const e = typeof t.temperature == "number" && !isNaN(t.temperature) ? t.temperature : null;
      return g`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;margin-bottom:10px;"
                    >
                      <span
                        style="font-size:11px; color:#db4a34; writing-mode:vertical-rl; transform:rotate(180deg); min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${e !== null ? e.toFixed(1) + " °C" : ""}
                      </span>
                    </div>
                  `;
    })}
              </div>
              <div style="width:100%;height:90px;overflow-x:auto;">
                ${(() => {
      const t = this._hourlyForecast.slice(0, n).map(
        (u) => typeof u.temperature == "number" && !isNaN(u.temperature) ? u.temperature : null
      ), e = t.filter((u) => u !== null);
      if (e.length < 2) return "";
      const i = Math.min(...e), r = Math.max(...e) - i || 1, o = t.length, l = Math.max(360, Math.min(1600, o * 250)), a = 50, c = l / (o - 1), p = t.map((u, y) => u !== null ? `${y * c},${a - (u - i) / r * a}` : "").filter(Boolean).join(" ");
      return J`<svg width="${n === 6 ? "84%" : n === 12 ? "90%" : n === 18 ? "96%" : "100%"}" height="${a}" viewBox="0 0 ${l} ${a}" preserveAspectRatio="none" style="display:block;padding-left:${n === 6 ? "8%" : n === 12 ? "5%" : n === 18 ? "2%" : "0%"};">
                        <polyline points="${p}" fill="none" stroke="#db4a34" stroke-width="3" />
                        ${t.map((u, y) => u !== null ? J`<circle r="3" fill="#db4a34" cx="${y * c}" cy="${a - (u - i) / r * a}" />` : null)}
                        </svg>`;
    })()}
              </div>
              ${this._showHoursChartLabel(n)}
            </div>
          ` : g`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:thermometer"></ha-icon>
                ${h("temperature_hours", { hours: n })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${h("no_temperature_data")}
              </div>
            </div>
          ` : g``;
  }
  _renderForecastPrecipitation(n) {
    return this.config.show_precipitation !== !1 ? this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, n).some((t) => typeof t.precipitation == "number" && !isNaN(t.precipitation)) ? g`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-pouring"></ha-icon>
                ${h("precipitation_hours", { hours: n })}
              </div>
              <div class="chart-bars">
                ${this._hourlyForecast.slice(0, n).map((t) => {
      const e = typeof t.precipitation == "number" && !isNaN(t.precipitation) ? t.precipitation : null, i = e !== null ? Math.round(e * 10) : 2;
      return g`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
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
                      <div class="chart-bar-precipitation" style="height: ${i}px;"></div>
                    </div>
                  `;
    })}
              </div>
              ${this._showHoursChartLabel(n)}
            </div>
          ` : g`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-pouring"></ha-icon>
                ${h("precipitation_hours", { hours: n })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${h("no_precipitation_data")}
              </div>
            </div>
          ` : g``;
  }
  _renderForecastSunshine(n, t, e) {
    return this.config.show_sunshine !== !1 ? (
      // Type extension for sunshine chart (workaround)
      this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, e).some((i) => {
        const s = i;
        return typeof s.sunshine == "number" && !isNaN(s.sunshine) || typeof s.sunshine_duration == "number" && !isNaN(s.sunshine_duration);
      }) ? g`
            <div class="chart" style="position:relative;">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${h("sunshine_hours", { hours: e })}
              </div>
              <div class="chart-bars" style="position:relative;">
                ${(() => {
        const i = n?.attributes?.sunrise ? new Date(n.attributes.sunrise) : new Date((t?.attributes).next_rising) || null, s = n?.attributes?.sunset ? new Date(n.attributes.sunset) : new Date((t?.attributes).next_setting) || null, r = this._hourlyForecast[0]?.datetime ? new Date(this._hourlyForecast[0].datetime) : null;
        let o = -1, l = -1;
        return i && r && (o = Math.round(
          (i.getTime() - r.getTime()) / (3600 * 1e3) + 1
        )), s && r && (l = Math.round(
          (s.getTime() - r.getTime()) / (3600 * 1e3) + 1
        )), g`
                    ${o >= 0 && o < e ? g`
                          <div
                            style="position:absolute;left:calc(${o / e * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-up"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d;"
                              >${h("sunrise")}
                              ${i ? i.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }) : ""}</span
                            >
                          </div>
                        ` : ""}
                    ${l >= 0 && l < e ? g`
                          <div
                            style="position:absolute;left:calc(${l / e * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-down"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d;align-items:center;"
                              >${h("sunset")}
                              ${s ? s.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }) : ""}</span
                            >
                          </div>
                        ` : ""}
                  `;
      })()}
                ${this._hourlyForecast.slice(0, e).map((i) => {
        const s = i, r = typeof s.sunshine == "number" && !isNaN(s.sunshine) ? s.sunshine : typeof s.sunshine_duration == "number" && !isNaN(s.sunshine_duration) ? s.sunshine_duration : null, o = r !== null ? Math.round(r) : 2;
        return g`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#fbc02d; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${r !== null ? r.toFixed(0) + " min" : ""}
                      </span>
                      <div class="chart-bar-sunshine" style="height: ${o}px;"></div>
                    </div>
                  `;
      })}
              </div>
              ${this._showHoursChartLabel(e)}
            </div>
          ` : g`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${h("sunshine_hours", { hours: e })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${h("no_sunshine_data")}
              </div>
            </div>
          `
    ) : g``;
  }
  _renderForecastWind(n) {
    return this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, n).some((t) => typeof t.wind_speed == "number" && !isNaN(t.wind_speed)) ? g`
          <div class="chart">
            <div class="section-title">
              <ha-icon icon="mdi:weather-windy"></ha-icon>
              ${h("wind_hours", { hours: n })}
            </div>
            <div class="chart-line-wind" style="position:relative;">
              ${this._hourlyForecast.slice(0, n).map((t) => {
      const e = typeof t.wind_speed == "number" && !isNaN(t.wind_speed) ? t.wind_speed : null;
      return g`
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
              ${this._hourlyForecast.slice(0, n).map((t) => {
      const e = typeof t.wind_bearing == "number" && !isNaN(t.wind_bearing) ? t.wind_bearing : null;
      return g`
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
      const t = this._hourlyForecast.slice(0, n).map(
        (u) => typeof u.wind_speed == "number" && !isNaN(u.wind_speed) ? u.wind_speed : null
      ), e = t.filter((u) => u !== null);
      if (e.length < 2) return "";
      const i = Math.min(...e), r = Math.max(...e) - i || 1, o = t.length, l = Math.max(360, Math.min(1600, o * 250)), a = 50, c = l / (o - 1), p = t.map((u, y) => u !== null ? `${y * c},${a - (u - i) / r * a}` : "").filter(Boolean).join(" ");
      return J`<svg width="${n === 6 ? "84%" : n === 12 ? "90%" : n === 18 ? "96%" : "100%"}" height="${a}" viewBox="0 0 ${l} ${a}" preserveAspectRatio="none" style="display:block;padding-left:${n === 6 ? "8%" : n === 12 ? "5%" : n === 18 ? "2%" : "0%"};">
                <polyline points="${p}" fill="none" stroke="#44739e" stroke-width="3" />
                ${t.map((u, y) => u !== null ? J`<circle r="3" fill="#44739e" cx="${y * c}" cy="${a - (u - i) / r * a}" />` : null)}
              </svg>`;
    })()}
            </div>
            ${this._showHoursChartLabel(n)}
          </div>
        ` : g``;
  }
  _renderDailyForecast(n) {
    return this.config.show_forecast !== !1 ? this._forecastLoading && n.length === 0 ? g`
            <div class="forecast-section">
              <div class="section-title">
                <ha-icon icon="mdi:calendar"></ha-icon>
                ${h("7d_forecast")}
                <small
                  style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >${h("loading")}</small
                >
              </div>
              <div
                style="text-align: center; padding: 20px; color: var(--secondary-text-color, #666); font-style: italic;"
              >
                ⏳ ${h("loading_forecast")}<br />
                <small>Service: weather.get_forecasts</small>
              </div>
            </div>
          ` : n.length > 0 ? g`
              <div class="forecast-section">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${n.length === 7 ? h("7d_forecast") : h("xd_forecast", { days: n.length })}
                  <small
                    style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >
                    (${n.length} ${h("days_available")})
                  </small>
                </div>
                ${n.length < 7 ? g`
                      <div
                        style="text-align: center; color: var(--warning-color, #b8860b); font-size: 13px; margin-bottom: 8px;"
                      >
                        ${h("forecast_days_hint", { count: n.length })}
                      </div>
                    ` : ""}
                <div class="forecast-grid">
                  ${n.slice(0, 7).map(
      (t) => g`
                      <div class="forecast-day">
                        <div class="forecast-date">${this._formatDate(t.datetime)}</div>
                        <div class="forecast-icon">
                          <ha-icon
                            .icon=${this._getWeatherMdiIcon(t.condition)}
                            style="font-size: 24px; color: var(--state-icon-color, #44739e);"
                          ></ha-icon>
                        </div>
                        <div class="forecast-temps">
                          <span class="temp-high">${Math.round(t.temperature)}°</span>
                          <span class="temp-low"
                            >${Math.round(t.templow || t.temperature - 5)}°</span
                          >
                        </div>
                      </div>
                    `
    )}
                </div>
              </div>
            ` : g`
              <div class="forecast-section">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${h("7d_forecast")}
                  <small style="font-size: 12px; color: #666; margin-left: 10px;">
                    (0 ${h("days_available")})
                  </small>
                </div>
                <div style="text-align: center; padding: 20px; color: #666; font-style: italic;">
                  ⚠️ ${h("no_forecast_data")}<br />
                  <small>Entity: ${this.config.entity}</small><br />
                  <small>${h("check_devtools")}</small><br />
                  <small style="color: #999;">${h("try_other_entity")}</small>
                </div>
              </div>
            ` : g``;
  }
  render() {
    if (Zt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return g``;
    const n = this._getEntityState(this.config.entity), t = this._getEntityState(this.config.sun_entity || "sun.sun");
    if (!n)
      return g`<div>Entity not found: ${this.config.entity}</div>`;
    const e = this.config.show_location !== !1, i = this.config.location || h("location"), s = n.attributes.temperature, r = n.state, o = this._forecast, l = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null, a = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null, c = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null, p = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null, d = l ? parseFloat(l.state) : n.attributes.wind_speed || 0, _ = a ? parseFloat(a.state) : n.attributes.wind_bearing || 0, u = n.attributes.humidity || 0, y = n.attributes.pressure || 0, b = n.attributes.visibility || 0, H = this.config.forecast_hours ?? 6;
    return g`
      ${e ? g`
            <div class="header">
              <div class="location">${i}</div>
            </div>
          ` : ""}
      ${this.config.show_warnings ? this._renderWarningSection(p) : ""}

      <div class="current-weather">
        <div>
          <div class="current-temp">${s}°</div>
          <div class="condition">${h(r)}</div>
        </div>
        <div class="current-details">
          <div class="weather-icon">
            <ha-icon
              .icon=${this._getWeatherMdiIcon(r)}
              style="font-size: 64px; color: var(--state-icon-color, #44739e);"
            ></ha-icon>
          </div>
        </div>
      </div>

      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${h("current_weather")}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(d)} km/h</div>
          <div class="metric-label">${h("wind")}</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${_}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(_)}</div>
          <div class="metric-label">${h("direction")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${u}%</div>
          <div class="metric-label">${h("humidity")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${y} hPa</div>
          <div class="metric-label">${h("pressure")}</div>
        </div>
        ${c ? g`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                <div class="metric-value">${parseFloat(c.state).toFixed(1)}h</div>
                <div class="metric-label">${h("sunshine")}</div>
              </div>
            ` : ""}
        ${b > 0 ? g`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                <div class="metric-value">${b} km</div>
                <div class="metric-label">${h("visibility")}</div>
              </div>
            ` : ""}
      </div>

      ${this.config.show_temperature === !0 || this.config.show_precipitation === !0 || this.config.show_sunshine === !0 ? g`
            <div class="section-title">
              <ha-icon icon="mdi:clock"></ha-icon>
              ${h("forecast_hours", { hours: H })}
            </div>
          ` : ""}
      ${this._renderForecastTemperature(H)}
      ${this._renderForecastPrecipitation(H)}
      ${this._renderForecastSunshine(n, t, H)}
      ${this._renderForecastWind(H)} ${this._renderDailyForecast(o)}
    `;
  }
  _showHoursChartLabel(n) {
    return g`
      <div class="chart-labels">
        ${Array.from(
      { length: n },
      (t, e) => g`
            <div
              style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
            >
              <span>${e === 0 ? h("now") : h("hour", { h: e })}</span>
            </div>
          `
    )}
      </div>
    `;
  }
  _formatDate(n) {
    const t = new Date(n);
    return ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"][t.getDay()];
  }
};
v([
  D({ attribute: !1 })
], M.prototype, "hass", 2);
v([
  D({ attribute: !1 })
], M.prototype, "config", 2);
v([
  $t()
], M.prototype, "_forecast", 2);
v([
  $t()
], M.prototype, "_hourlyForecast", 2);
v([
  $t()
], M.prototype, "_forecastLoading", 2);
M = v([
  ie("swissweather-card")
], M);
let Z = class extends E {
  hass;
  lovelace;
  _config;
  setConfig(n) {
    const t = { ...n }, e = [
      "entity",
      "sun_entity",
      "wind_entity",
      "wind_direction_entity",
      "sunshine_entity",
      "precipitation_entity",
      "warning_entity"
    ];
    for (const i of e)
      t[i] === "" && delete t[i];
    this._config = t, this.requestUpdate();
  }
  static get styles() {
    return Rt`
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
      return g`<div>Loading...</div>`;
    Zt((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
    const n = [
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
        name: "show_location",
        selector: {
          boolean: {}
        }
      },
      {
        name: "location",
        selector: {
          text: {}
        }
      },
      {
        name: "sun_entity",
        selector: {
          entity: {
            domain: "sun"
          }
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
      {
        name: "show_forecast",
        selector: {
          boolean: {}
        }
      },
      {
        name: "forecast_hours",
        selector: {
          number: {
            min: 1,
            max: 24,
            mode: "box",
            unit_of_measurement: "h",
            step: 6
          }
        }
      },
      {
        name: "show_temperature",
        selector: {
          boolean: {}
        }
      },
      {
        name: "show_precipitation",
        selector: {
          boolean: {}
        }
      },
      {
        name: "show_sunshine",
        selector: {
          boolean: {}
        }
      },
      {
        name: "show_warnings",
        selector: {
          boolean: {}
        }
      },
      {
        name: "compact_mode",
        selector: {
          boolean: {}
        }
      }
    ], t = {
      entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
      show_location: this._config?.show_location ?? !0,
      location: this._config?.location ?? "",
      sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0,
      wind_entity: typeof this._config?.wind_entity == "string" ? this._config.wind_entity : void 0,
      wind_direction_entity: typeof this._config?.wind_direction_entity == "string" ? this._config.wind_direction_entity : void 0,
      sunshine_entity: typeof this._config?.sunshine_entity == "string" ? this._config.sunshine_entity : void 0,
      // precipitation_entity removed
      warning_entity: typeof this._config?.warning_entity == "string" ? this._config.warning_entity : void 0,
      show_forecast: this._config?.show_forecast ?? !1,
      forecast_hours: this._config?.forecast_hours ?? 6,
      show_temperature: this._config?.show_temperature ?? !1,
      show_precipitation: this._config?.show_precipitation ?? !1,
      show_sunshine: this._config?.show_sunshine ?? !1,
      show_warnings: this._config?.show_warnings ?? !1,
      compact_mode: this._config?.compact_mode ?? !1
    };
    return g`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Card</div>
          </div>
        </div>

        <!-- HA Form -->
        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${n}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._valueChanged}
        ></ha-form>

        <!-- Configuration Preview -->
        ${this._config?.entity ? g`
              <div class="preview">
                <div class="preview-title">📋 YAML-Config</div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            ` : ""}
      </div>
    `;
  }
  _computeLabel = (n) => ({
    entity: h("config.entity"),
    show_location: h("config.show_location"),
    sun_entity: h("config.sun_entity"),
    location: h("config.location"),
    wind_entity: h("config.wind_entity"),
    wind_direction_entity: h("config.wind_direction_entity"),
    sunshine_entity: h("config.sunshine_entity"),
    // precipitation_entity removed
    warning_entity: h("config.warning_entity"),
    show_forecast: h("config.show_forecast"),
    forecast_hours: h("config.forecast_hours"),
    show_temperature: h("config.show_temperature"),
    show_precipitation: h("config.show_precipitation"),
    show_sunshine: h("config.show_sunshine"),
    show_warnings: h("config.show_warnings"),
    compact_mode: h("config.compact_mode")
  })[n.name] || n.name;
  _renderConfigPreview() {
    const n = { ...this._config };
    return n.type || (n.type = "custom:swissweather-card"), Object.keys(n).forEach((t) => {
      (n[t] === void 0 || n[t] === "") && delete n[t];
    }), Object.entries(n).map(([t, e]) => typeof e == "string" ? `${t}: "${e}"` : `${t}: ${e}`).join(`
`);
  }
  _valueChanged(n) {
    if (this._config || (this._config = {
      type: "custom:swissweather-card",
      entity: "",
      location: "Schweiz",
      show_forecast: !0,
      show_temperature: !0,
      show_precipitation: !0,
      show_sunshine: !0,
      show_warnings: !0,
      compact_mode: !1
    }), n.type === "value-changed") {
      const t = {
        type: "custom:swissweather-card",
        ...n.detail.value
      };
      Object.keys(t).forEach((i) => {
        (t[i] === "" || t[i] === void 0) && delete t[i];
      }), this._config = t;
      const e = new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(e);
    }
  }
};
v([
  D({ attribute: !1 })
], Z.prototype, "hass", 2);
v([
  D({ attribute: !1 })
], Z.prototype, "lovelace", 2);
v([
  D({ attribute: !1 })
], Z.prototype, "_config", 2);
Z = v([
  ie("swissweather-card-editor")
], Z);
window.customCards || (window.customCards = []);
window.customCards.push({
  type: "swissweather-card",
  name: "SwissWeather Card",
  description: "Eine Custom Card für Schweizer Wetterinformationen im MeteoSchweiz-Design",
  preview: !0,
  documentationURL: "https://github.com/user/ha-swissweather-card"
});
console.log("✅ SwissWeatherCard fully loaded and registered");
export {
  M as SwissWeatherCard,
  Z as SwissweatherCardEditor
};
//# sourceMappingURL=swissweather-card.js.map

const hi = {
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
    sunset: "Sunset",
    valid_from: "Valid from",
    valid_to: "Valid to",
    unknown: "Unknown"
  }
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, De = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ie = Symbol(), st = /* @__PURE__ */ new WeakMap();
let Mt = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== Ie) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (De && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = st.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && st.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const di = (i) => new Mt(typeof i == "string" ? i : i + "", void 0, Ie), Rt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce(((s, n, r) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[r + 1]), i[0]);
  return new Mt(t, i, Ie);
}, pi = (i, e) => {
  if (De) i.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const s = document.createElement("style"), n = he.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = t.cssText, i.appendChild(s);
  }
}, rt = De ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return di(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ui, defineProperty: fi, getOwnPropertyDescriptor: gi, getOwnPropertyNames: mi, getOwnPropertySymbols: yi, getPrototypeOf: wi } = Object, xe = globalThis, at = xe.trustedTypes, vi = at ? at.emptyScript : "", xi = xe.reactiveElementPolyfillSupport, Y = (i, e) => i, pe = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? vi : null;
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
} }, Be = (i, e) => !ui(i, e), ot = { attribute: !0, type: String, converter: pe, reflect: !1, useDefault: !1, hasChanged: Be };
Symbol.metadata ??= Symbol("metadata"), xe.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let B = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = ot) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = Symbol(), n = this.getPropertyDescriptor(e, s, t);
      n !== void 0 && fi(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: n, set: r } = gi(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get: n, set(a) {
      const l = n?.call(this);
      r?.call(this, a), this.requestUpdate(e, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ot;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = wi(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const t = this.properties, s = [...mi(t), ...yi(t)];
      for (const n of s) this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [s, n] of t) this.elementProperties.set(s, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, s] of this.elementProperties) {
      const n = this._$Eu(t, s);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const n of s) t.unshift(rt(n));
    } else e !== void 0 && t.push(rt(e));
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
    return pi(e, this.constructor.elementStyles), e;
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
    const s = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, s);
    if (n !== void 0 && s.reflect === !0) {
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : pe).toAttribute(t, s.type);
      this._$Em = e, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const s = this.constructor, n = s._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const r = s.getPropertyOptions(n), a = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : pe;
      this._$Em = n;
      const l = a.fromAttribute(t, r.type);
      this[n] = l ?? this._$Ej?.get(n) ?? l, this._$Em = null;
    }
  }
  requestUpdate(e, t, s) {
    if (e !== void 0) {
      const n = this.constructor, r = this[e];
      if (s ??= n.getPropertyOptions(e), !((s.hasChanged ?? Be)(r, t) || s.useDefault && s.reflect && r === this._$Ej?.get(e) && !this.hasAttribute(n._$Eu(e, s)))) return;
      this.C(e, t, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: s, reflect: n, wrapped: r }, a) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), r !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (t = void 0), this._$AL.set(e, t)), n === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
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
        for (const [n, r] of this._$Ep) this[n] = r;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [n, r] of s) {
        const { wrapped: a } = r, l = this[n];
        a !== !0 || this._$AL.has(n) || l === void 0 || this.C(n, void 0, r, l);
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[Y("elementProperties")] = /* @__PURE__ */ new Map(), B[Y("finalized")] = /* @__PURE__ */ new Map(), xi?.({ ReactiveElement: B }), (xe.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ge = globalThis, ue = Ge.trustedTypes, lt = ue ? ue.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, zt = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, Pt = "?" + N, _i = `<${Pt}>`, L = document, ie = () => L.createComment(""), ne = (i) => i === null || typeof i != "object" && typeof i != "function", He = Array.isArray, bi = (i) => He(i) || typeof i?.[Symbol.iterator] == "function", Te = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ct = /-->/g, ht = />/g, R = RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), dt = /'/g, pt = /"/g, Wt = /^(?:script|style|textarea|title)$/i, Ut = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), p = Ut(1), le = Ut(2), G = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), ut = /* @__PURE__ */ new WeakMap(), P = L.createTreeWalker(L, 129);
function Lt(i, e) {
  if (!He(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return lt !== void 0 ? lt.createHTML(e) : e;
}
const $i = (i, e) => {
  const t = i.length - 1, s = [];
  let n, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = Q;
  for (let l = 0; l < t; l++) {
    const o = i[l];
    let c, h, d = -1, g = 0;
    for (; g < o.length && (a.lastIndex = g, h = a.exec(o), h !== null); ) g = a.lastIndex, a === Q ? h[1] === "!--" ? a = ct : h[1] !== void 0 ? a = ht : h[2] !== void 0 ? (Wt.test(h[2]) && (n = RegExp("</" + h[2], "g")), a = R) : h[3] !== void 0 && (a = R) : a === R ? h[0] === ">" ? (a = n ?? Q, d = -1) : h[1] === void 0 ? d = -2 : (d = a.lastIndex - h[2].length, c = h[1], a = h[3] === void 0 ? R : h[3] === '"' ? pt : dt) : a === pt || a === dt ? a = R : a === ct || a === ht ? a = Q : (a = R, n = void 0);
    const f = a === R && i[l + 1].startsWith("/>") ? " " : "";
    r += a === Q ? o + _i : d >= 0 ? (s.push(c), o.slice(0, d) + zt + o.slice(d) + N + f) : o + N + (d === -2 ? l : f);
  }
  return [Lt(i, r + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
let Me = class Ot {
  constructor({ strings: e, _$litType$: t }, s) {
    let n;
    this.parts = [];
    let r = 0, a = 0;
    const l = e.length - 1, o = this.parts, [c, h] = $i(e, t);
    if (this.el = Ot.createElement(c, s), P.currentNode = this.el.content, t === 2 || t === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (n = P.nextNode()) !== null && o.length < l; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const d of n.getAttributeNames()) if (d.endsWith(zt)) {
          const g = h[a++], f = n.getAttribute(d).split(N), m = /([.?@])?(.*)/.exec(g);
          o.push({ type: 1, index: r, name: m[2], strings: f, ctor: m[1] === "." ? Ai : m[1] === "?" ? Si : m[1] === "@" ? Ci : _e }), n.removeAttribute(d);
        } else d.startsWith(N) && (o.push({ type: 6, index: r }), n.removeAttribute(d));
        if (Wt.test(n.tagName)) {
          const d = n.textContent.split(N), g = d.length - 1;
          if (g > 0) {
            n.textContent = ue ? ue.emptyScript : "";
            for (let f = 0; f < g; f++) n.append(d[f], ie()), P.nextNode(), o.push({ type: 2, index: ++r });
            n.append(d[g], ie());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Pt) o.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = n.data.indexOf(N, d + 1)) !== -1; ) o.push({ type: 7, index: r }), d += N.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const s = L.createElement("template");
    return s.innerHTML = e, s;
  }
};
function H(i, e, t = i, s) {
  if (e === G) return e;
  let n = s !== void 0 ? t._$Co?.[s] : t._$Cl;
  const r = ne(e) ? void 0 : e._$litDirective$;
  return n?.constructor !== r && (n?._$AO?.(!1), r === void 0 ? n = void 0 : (n = new r(i), n._$AT(i, t, s)), s !== void 0 ? (t._$Co ??= [])[s] = n : t._$Cl = n), n !== void 0 && (e = H(i, n._$AS(i, e.values), n, s)), e;
}
let ki = class {
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
    const { el: { content: t }, parts: s } = this._$AD, n = (e?.creationScope ?? L).importNode(t, !0);
    P.currentNode = n;
    let r = P.nextNode(), a = 0, l = 0, o = s[0];
    for (; o !== void 0; ) {
      if (a === o.index) {
        let c;
        o.type === 2 ? c = new Fe(r, r.nextSibling, this, e) : o.type === 1 ? c = new o.ctor(r, o.name, o.strings, this, e) : o.type === 6 && (c = new Ti(r, this, e)), this._$AV.push(c), o = s[++l];
      }
      a !== o?.index && (r = P.nextNode(), a++);
    }
    return P.currentNode = L, n;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}, Fe = class Dt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, s, n) {
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = n, this._$Cv = n?.isConnected ?? !0;
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
    e = H(this, e, t), ne(e) ? e === _ || e == null || e === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : e !== this._$AH && e !== G && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : bi(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== _ && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: s } = e, n = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = Me.createElement(Lt(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === n) this._$AH.p(t);
    else {
      const r = new ki(n, this), a = r.u(this.options);
      r.p(t), this.T(a), this._$AH = r;
    }
  }
  _$AC(e) {
    let t = ut.get(e.strings);
    return t === void 0 && ut.set(e.strings, t = new Me(e)), t;
  }
  k(e) {
    He(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, n = 0;
    for (const r of e) n === t.length ? t.push(s = new Dt(this.O(ie()), this.O(ie()), this, this.options)) : s = t[n], s._$AI(r), n++;
    n < t.length && (this._$AR(s && s._$AB.nextSibling, n), t.length = n);
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
}, _e = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, n, r) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = _;
  }
  _$AI(e, t = this, s, n) {
    const r = this.strings;
    let a = !1;
    if (r === void 0) e = H(this, e, t, 0), a = !ne(e) || e !== this._$AH && e !== G, a && (this._$AH = e);
    else {
      const l = e;
      let o, c;
      for (e = r[0], o = 0; o < r.length - 1; o++) c = H(this, l[s + o], t, o), c === G && (c = this._$AH[o]), a ||= !ne(c) || c !== this._$AH[o], c === _ ? e = _ : e !== _ && (e += (c ?? "") + r[o + 1]), this._$AH[o] = c;
    }
    a && !n && this.j(e);
  }
  j(e) {
    e === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, Ai = class extends _e {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === _ ? void 0 : e;
  }
}, Si = class extends _e {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== _);
  }
}, Ci = class extends _e {
  constructor(e, t, s, n, r) {
    super(e, t, s, n, r), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = H(this, e, t, 0) ?? _) === G) return;
    const s = this._$AH, n = e === _ && s !== _ || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, r = e !== _ && (s === _ || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, Ti = class {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    H(this, e);
  }
};
const Ni = Ge.litHtmlPolyfillSupport;
Ni?.(Me, Fe), (Ge.litHtmlVersions ??= []).push("3.3.1");
const Ei = (i, e, t) => {
  const s = t?.renderBefore ?? e;
  let n = s._$litPart$;
  if (n === void 0) {
    const r = t?.renderBefore ?? null;
    s._$litPart$ = n = new Fe(e.insertBefore(ie(), r), r, void 0, t ?? {});
  }
  return n._$AI(i), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const je = globalThis;
let U = class extends B {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ei(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return G;
  }
};
U._$litElement$ = !0, U.finalized = !0, je.litElementHydrateSupport?.({ LitElement: U });
const Mi = je.litElementPolyfillSupport;
Mi?.({ LitElement: U });
(je.litElementVersions ??= []).push("4.2.1");
const Re = "langChanged";
function Ri(i, e, t) {
  return Object.entries(ze(e || {})).reduce((s, [n, r]) => s.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(ze(r))), i);
}
function zi(i, e) {
  const t = i.split(".");
  let s = e.strings;
  for (; s != null && t.length > 0; )
    s = s[t.shift()];
  return s != null ? s.toString() : null;
}
function ze(i) {
  return typeof i == "function" ? i() : i;
}
const Pi = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: zi,
  interpolate: Ri,
  translationCache: {}
});
let se = Pi();
function Wi(i) {
  return se = Object.assign(Object.assign({}, se), i);
}
function Ui(i) {
  window.dispatchEvent(new CustomEvent(Re, { detail: i }));
}
function Li(i, e, t = se) {
  Ui({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function Oi(i, e) {
  const t = (s) => i(s.detail);
  return window.addEventListener(Re, t, e), () => window.removeEventListener(Re, t);
}
async function It(i, e = se) {
  const t = await e.loader(i, e);
  e.translationCache = {}, Li(i, t, e);
}
function Di(i, e, t = se) {
  let s = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? ze(e) : null, e != null ? t.interpolate(s, e, t) : s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bt = { CHILD: 2 }, Ii = (i) => (...e) => ({ _$litDirective$: i, values: e });
let Gt = class {
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
var Ne;
const fe = window, F = fe.trustedTypes, ft = F ? F.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, Pe = "$lit$", E = `lit$${(Math.random() + "").slice(9)}$`, Ht = "?" + E, Bi = `<${Ht}>`, O = document, ge = () => O.createComment(""), re = (i) => i === null || typeof i != "object" && typeof i != "function", Ft = Array.isArray, Gi = (i) => Ft(i) || typeof i?.[Symbol.iterator] == "function", Ee = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, gt = /-->/g, mt = />/g, z = RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), yt = /'/g, wt = /"/g, jt = /^(?:script|style|textarea|title)$/i, j = Symbol.for("lit-noChange"), v = Symbol.for("lit-nothing"), vt = /* @__PURE__ */ new WeakMap(), W = O.createTreeWalker(O, 129, null, !1);
function qt(i, e) {
  if (!Array.isArray(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ft !== void 0 ? ft.createHTML(e) : e;
}
const Hi = (i, e) => {
  const t = i.length - 1, s = [];
  let n, r = e === 2 ? "<svg>" : "", a = K;
  for (let l = 0; l < t; l++) {
    const o = i[l];
    let c, h, d = -1, g = 0;
    for (; g < o.length && (a.lastIndex = g, h = a.exec(o), h !== null); ) g = a.lastIndex, a === K ? h[1] === "!--" ? a = gt : h[1] !== void 0 ? a = mt : h[2] !== void 0 ? (jt.test(h[2]) && (n = RegExp("</" + h[2], "g")), a = z) : h[3] !== void 0 && (a = z) : a === z ? h[0] === ">" ? (a = n ?? K, d = -1) : h[1] === void 0 ? d = -2 : (d = a.lastIndex - h[2].length, c = h[1], a = h[3] === void 0 ? z : h[3] === '"' ? wt : yt) : a === wt || a === yt ? a = z : a === gt || a === mt ? a = K : (a = z, n = void 0);
    const f = a === z && i[l + 1].startsWith("/>") ? " " : "";
    r += a === K ? o + Bi : d >= 0 ? (s.push(c), o.slice(0, d) + Pe + o.slice(d) + E + f) : o + E + (d === -2 ? (s.push(void 0), l) : f);
  }
  return [qt(i, r + (i[t] || "<?>") + (e === 2 ? "</svg>" : "")), s];
};
let We = class Vt {
  constructor({ strings: e, _$litType$: t }, s) {
    let n;
    this.parts = [];
    let r = 0, a = 0;
    const l = e.length - 1, o = this.parts, [c, h] = Hi(e, t);
    if (this.el = Vt.createElement(c, s), W.currentNode = this.el.content, t === 2) {
      const d = this.el.content, g = d.firstChild;
      g.remove(), d.append(...g.childNodes);
    }
    for (; (n = W.nextNode()) !== null && o.length < l; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const d = [];
          for (const g of n.getAttributeNames()) if (g.endsWith(Pe) || g.startsWith(E)) {
            const f = h[a++];
            if (d.push(g), f !== void 0) {
              const m = n.getAttribute(f.toLowerCase() + Pe).split(E), x = /([.?@])?(.*)/.exec(f);
              o.push({ type: 1, index: r, name: x[2], strings: m, ctor: x[1] === "." ? ji : x[1] === "?" ? Vi : x[1] === "@" ? Zi : be });
            } else o.push({ type: 6, index: r });
          }
          for (const g of d) n.removeAttribute(g);
        }
        if (jt.test(n.tagName)) {
          const d = n.textContent.split(E), g = d.length - 1;
          if (g > 0) {
            n.textContent = F ? F.emptyScript : "";
            for (let f = 0; f < g; f++) n.append(d[f], ge()), W.nextNode(), o.push({ type: 2, index: ++r });
            n.append(d[g], ge());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Ht) o.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = n.data.indexOf(E, d + 1)) !== -1; ) o.push({ type: 7, index: r }), d += E.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const s = O.createElement("template");
    return s.innerHTML = e, s;
  }
};
function q(i, e, t = i, s) {
  var n, r, a, l;
  if (e === j) return e;
  let o = s !== void 0 ? (n = t._$Co) === null || n === void 0 ? void 0 : n[s] : t._$Cl;
  const c = re(e) ? void 0 : e._$litDirective$;
  return o?.constructor !== c && ((r = o?._$AO) === null || r === void 0 || r.call(o, !1), c === void 0 ? o = void 0 : (o = new c(i), o._$AT(i, t, s)), s !== void 0 ? ((a = (l = t)._$Co) !== null && a !== void 0 ? a : l._$Co = [])[s] = o : t._$Cl = o), o !== void 0 && (e = q(i, o._$AS(i, e.values), o, s)), e;
}
let Fi = class {
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
    const { el: { content: s }, parts: n } = this._$AD, r = ((t = e?.creationScope) !== null && t !== void 0 ? t : O).importNode(s, !0);
    W.currentNode = r;
    let a = W.nextNode(), l = 0, o = 0, c = n[0];
    for (; c !== void 0; ) {
      if (l === c.index) {
        let h;
        c.type === 2 ? h = new Zt(a, a.nextSibling, this, e) : c.type === 1 ? h = new c.ctor(a, c.name, c.strings, this, e) : c.type === 6 && (h = new Qi(a, this, e)), this._$AV.push(h), c = n[++o];
      }
      l !== c?.index && (a = W.nextNode(), l++);
    }
    return W.currentNode = O, r;
  }
  v(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}, Zt = class Qt {
  constructor(e, t, s, n) {
    var r;
    this.type = 2, this._$AH = v, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = n, this._$Cp = (r = n?.isConnected) === null || r === void 0 || r;
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
    e = q(this, e, t), re(e) ? e === v || e == null || e === "" ? (this._$AH !== v && this._$AR(), this._$AH = v) : e !== this._$AH && e !== j && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : Gi(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== v && re(this._$AH) ? this._$AA.nextSibling.data = e : this.$(O.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var t;
    const { values: s, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = We.createElement(qt(n.h, n.h[0]), this.options)), n);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === r) this._$AH.v(s);
    else {
      const a = new Fi(r, this), l = a.u(this.options);
      a.v(s), this.$(l), this._$AH = a;
    }
  }
  _$AC(e) {
    let t = vt.get(e.strings);
    return t === void 0 && vt.set(e.strings, t = new We(e)), t;
  }
  T(e) {
    Ft(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, n = 0;
    for (const r of e) n === t.length ? t.push(s = new Qt(this.k(ge()), this.k(ge()), this, this.options)) : s = t[n], s._$AI(r), n++;
    n < t.length && (this._$AR(s && s._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const n = e.nextSibling;
      e.remove(), e = n;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cp = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
};
class be {
  constructor(e, t, s, n, r) {
    this.type = 1, this._$AH = v, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = v;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, s, n) {
    const r = this.strings;
    let a = !1;
    if (r === void 0) e = q(this, e, t, 0), a = !re(e) || e !== this._$AH && e !== j, a && (this._$AH = e);
    else {
      const l = e;
      let o, c;
      for (e = r[0], o = 0; o < r.length - 1; o++) c = q(this, l[s + o], t, o), c === j && (c = this._$AH[o]), a || (a = !re(c) || c !== this._$AH[o]), c === v ? e = v : e !== v && (e += (c ?? "") + r[o + 1]), this._$AH[o] = c;
    }
    a && !n && this.j(e);
  }
  j(e) {
    e === v ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
let ji = class extends be {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === v ? void 0 : e;
  }
};
const qi = F ? F.emptyScript : "";
let Vi = class extends be {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== v ? this.element.setAttribute(this.name, qi) : this.element.removeAttribute(this.name);
  }
}, Zi = class extends be {
  constructor(e, t, s, n, r) {
    super(e, t, s, n, r), this.type = 5;
  }
  _$AI(e, t = this) {
    var s;
    if ((e = (s = q(this, e, t, 0)) !== null && s !== void 0 ? s : v) === j) return;
    const n = this._$AH, r = e === v && n !== v || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, a = e !== v && (n === v || r);
    r && this.element.removeEventListener(this.name, this, n), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && s !== void 0 ? s : this.element, e) : this._$AH.handleEvent(e);
  }
};
class Qi {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const xt = fe.litHtmlPolyfillSupport;
xt?.(We, Zt), ((Ne = fe.litHtmlVersions) !== null && Ne !== void 0 ? Ne : fe.litHtmlVersions = []).push("2.8.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ki = (i) => i.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = (i, e) => {
  var t, s;
  const n = i._$AN;
  if (n === void 0) return !1;
  for (const r of n) (s = (t = r)._$AO) === null || s === void 0 || s.call(t, e, !1), ee(r, e);
  return !0;
}, me = (i) => {
  let e, t;
  do {
    if ((e = i._$AM) === void 0) break;
    t = e._$AN, t.delete(i), i = e;
  } while (t?.size === 0);
}, Kt = (i) => {
  for (let e; e = i._$AM; i = e) {
    let t = e._$AN;
    if (t === void 0) e._$AN = t = /* @__PURE__ */ new Set();
    else if (t.has(i)) break;
    t.add(i), Yi(e);
  }
};
function Xi(i) {
  this._$AN !== void 0 ? (me(this), this._$AM = i, Kt(this)) : this._$AM = i;
}
function Ji(i, e = !1, t = 0) {
  const s = this._$AH, n = this._$AN;
  if (n !== void 0 && n.size !== 0) if (e) if (Array.isArray(s)) for (let r = t; r < s.length; r++) ee(s[r], !1), me(s[r]);
  else s != null && (ee(s, !1), me(s));
  else ee(this, i);
}
const Yi = (i) => {
  var e, t, s, n;
  i.type == Bt.CHILD && ((e = (s = i)._$AP) !== null && e !== void 0 || (s._$AP = Ji), (t = (n = i)._$AQ) !== null && t !== void 0 || (n._$AQ = Xi));
};
class en extends Gt {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, t, s) {
    super._$AT(e, t, s), Kt(this), this.isConnected = e._$AU;
  }
  _$AO(e, t = !0) {
    var s, n;
    e !== this.isConnected && (this.isConnected = e, e ? (s = this.reconnected) === null || s === void 0 || s.call(this) : (n = this.disconnected) === null || n === void 0 || n.call(this)), t && (ee(this, e), me(this));
  }
  setValue(e) {
    if (Ki(this._$Ct)) this._$Ct._$AI(e, this);
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
class tn extends en {
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
    this.langChangedSubscription == null && (this.langChangedSubscription = Oi(this.langChanged.bind(this)));
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
class nn extends tn {
  render(e, t, s) {
    return this.renderValue(() => Di(e, t, s));
  }
}
const u = Ii(nn);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class _t extends Gt {
  constructor(e) {
    if (super(e), this.et = v, e.type !== Bt.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === v || e == null) return this.ft = void 0, this.et = e;
    if (e === j) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.et) return this.ft;
    this.et = e;
    const t = [e];
    return t.raw = t, this.ft = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
_t.directiveName = "unsafeHTML", _t.resultType = 1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xt = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer((() => {
    customElements.define(i, e);
  })) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const sn = { attribute: !0, type: String, converter: pe, reflect: !1, hasChanged: Be }, rn = (i = sn, e, t) => {
  const { kind: s, metadata: n } = t;
  let r = globalThis.litPropertyMetadata.get(n);
  if (r === void 0 && globalThis.litPropertyMetadata.set(n, r = /* @__PURE__ */ new Map()), s === "setter" && ((i = Object.create(i)).wrapped = !0), r.set(t.name, i), s === "accessor") {
    const { name: a } = t;
    return { set(l) {
      const o = e.get.call(this);
      e.set.call(this, l), this.requestUpdate(a, o, i);
    }, init(l) {
      return l !== void 0 && this.C(a, void 0, i, l), l;
    } };
  }
  if (s === "setter") {
    const { name: a } = t;
    return function(l) {
      const o = this[a];
      e.call(this, l), this.requestUpdate(a, o, i);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function V(i) {
  return (e, t) => typeof t == "object" ? rn(i, e, t) : ((s, n, r) => {
    const a = n.hasOwnProperty(r);
    return n.constructor.createProperty(r, s), a ? Object.getOwnPropertyDescriptor(n, r) : void 0;
  })(i, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function $e(i) {
  return V({ ...i, state: !0, attribute: !1 });
}
function qe() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var I = qe();
function Jt(i) {
  I = i;
}
var te = { exec: () => null };
function y(i, e = "") {
  let t = typeof i == "string" ? i : i.source, s = { replace: (n, r) => {
    let a = typeof r == "string" ? r : r.source;
    return a = a.replace($.caret, "$1"), t = t.replace(n, a), s;
  }, getRegex: () => new RegExp(t, e) };
  return s;
}
var $ = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (i) => new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}#`), htmlBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}<(?:[a-z].*>|!--)`, "i") }, an = /^(?:[ \t]*(?:\n|$))+/, on = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ln = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, oe = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, cn = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ve = /(?:[*+-]|\d{1,9}[.)])/, Yt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ei = y(Yt).replace(/bull/g, Ve).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), hn = y(Yt).replace(/bull/g, Ve).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Ze = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, dn = /^[^\n]+/, Qe = /(?!\s*\])(?:\\.|[^\[\]\\])+/, pn = y(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Qe).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), un = y(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ve).getRegex(), ke = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ke = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, fn = y("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Ke).replace("tag", ke).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ti = y(Ze).replace("hr", oe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ke).getRegex(), gn = y(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ti).getRegex(), Xe = { blockquote: gn, code: on, def: pn, fences: ln, heading: cn, hr: oe, html: fn, lheading: ei, list: un, newline: an, paragraph: ti, table: te, text: dn }, bt = y("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", oe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ke).getRegex(), mn = { ...Xe, lheading: hn, table: bt, paragraph: y(Ze).replace("hr", oe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", bt).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ke).getRegex() }, yn = { ...Xe, html: y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ke).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: te, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: y(Ze).replace("hr", oe).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ei).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, wn = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, vn = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ii = /^( {2,}|\\)\n(?!\s*$)/, xn = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ae = /[\p{P}\p{S}]/u, Je = /[\s\p{P}\p{S}]/u, ni = /[^\s\p{P}\p{S}]/u, _n = y(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Je).getRegex(), si = /(?!~)[\p{P}\p{S}]/u, bn = /(?!~)[\s\p{P}\p{S}]/u, $n = /(?:[^\s\p{P}\p{S}]|~)/u, kn = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, ri = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, An = y(ri, "u").replace(/punct/g, Ae).getRegex(), Sn = y(ri, "u").replace(/punct/g, si).getRegex(), ai = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Cn = y(ai, "gu").replace(/notPunctSpace/g, ni).replace(/punctSpace/g, Je).replace(/punct/g, Ae).getRegex(), Tn = y(ai, "gu").replace(/notPunctSpace/g, $n).replace(/punctSpace/g, bn).replace(/punct/g, si).getRegex(), Nn = y("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ni).replace(/punctSpace/g, Je).replace(/punct/g, Ae).getRegex(), En = y(/\\(punct)/, "gu").replace(/punct/g, Ae).getRegex(), Mn = y(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Rn = y(Ke).replace("(?:-->|$)", "-->").getRegex(), zn = y("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Rn).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ye = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Pn = y(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ye).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), oi = y(/^!?\[(label)\]\[(ref)\]/).replace("label", ye).replace("ref", Qe).getRegex(), li = y(/^!?\[(ref)\](?:\[\])?/).replace("ref", Qe).getRegex(), Wn = y("reflink|nolink(?!\\()", "g").replace("reflink", oi).replace("nolink", li).getRegex(), Ye = { _backpedal: te, anyPunctuation: En, autolink: Mn, blockSkip: kn, br: ii, code: vn, del: te, emStrongLDelim: An, emStrongRDelimAst: Cn, emStrongRDelimUnd: Nn, escape: wn, link: Pn, nolink: li, punctuation: _n, reflink: oi, reflinkSearch: Wn, tag: zn, text: xn, url: te }, Un = { ...Ye, link: y(/^!?\[(label)\]\((.*?)\)/).replace("label", ye).getRegex(), reflink: y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ye).getRegex() }, Ue = { ...Ye, emStrongRDelimAst: Tn, emStrongLDelim: Sn, url: y(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, Ln = { ...Ue, br: y(ii).replace("{2,}", "*").getRegex(), text: y(Ue.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ce = { normal: Xe, gfm: mn, pedantic: yn }, X = { normal: Ye, gfm: Ue, breaks: Ln, pedantic: Un }, On = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, $t = (i) => On[i];
function A(i, e) {
  if (e) {
    if ($.escapeTest.test(i)) return i.replace($.escapeReplace, $t);
  } else if ($.escapeTestNoEncode.test(i)) return i.replace($.escapeReplaceNoEncode, $t);
  return i;
}
function kt(i) {
  try {
    i = encodeURI(i).replace($.percentDecode, "%");
  } catch {
    return null;
  }
  return i;
}
function At(i, e) {
  let t = i.replace($.findPipe, (r, a, l) => {
    let o = !1, c = a;
    for (; --c >= 0 && l[c] === "\\"; ) o = !o;
    return o ? "|" : " |";
  }), s = t.split($.splitPipe), n = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e) if (s.length > e) s.splice(e);
  else for (; s.length < e; ) s.push("");
  for (; n < s.length; n++) s[n] = s[n].trim().replace($.slashPipe, "|");
  return s;
}
function J(i, e, t) {
  let s = i.length;
  if (s === 0) return "";
  let n = 0;
  for (; n < s && i.charAt(s - n - 1) === e; )
    n++;
  return i.slice(0, s - n);
}
function Dn(i, e) {
  if (i.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let s = 0; s < i.length; s++) if (i[s] === "\\") s++;
  else if (i[s] === e[0]) t++;
  else if (i[s] === e[1] && (t--, t < 0)) return s;
  return t > 0 ? -2 : -1;
}
function St(i, e, t, s, n) {
  let r = e.href, a = e.title || null, l = i[1].replace(n.other.outputLinkReplace, "$1");
  s.state.inLink = !0;
  let o = { type: i[0].charAt(0) === "!" ? "image" : "link", raw: t, href: r, title: a, text: l, tokens: s.inlineTokens(l) };
  return s.state.inLink = !1, o;
}
function In(i, e, t) {
  let s = i.match(t.other.indentCodeCompensation);
  if (s === null) return e;
  let n = s[1];
  return e.split(`
`).map((r) => {
    let a = r.match(t.other.beginningSpace);
    if (a === null) return r;
    let [l] = a;
    return l.length >= n.length ? r.slice(n.length) : r;
  }).join(`
`);
}
var we = class {
  options;
  rules;
  lexer;
  constructor(i) {
    this.options = i || I;
  }
  space(i) {
    let e = this.rules.block.newline.exec(i);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(i) {
    let e = this.rules.block.code.exec(i);
    if (e) {
      let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : J(t, `
`) };
    }
  }
  fences(i) {
    let e = this.rules.block.fences.exec(i);
    if (e) {
      let t = e[0], s = In(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: s };
    }
  }
  heading(i) {
    let e = this.rules.block.heading.exec(i);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let s = J(t, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (t = s.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(i) {
    let e = this.rules.block.hr.exec(i);
    if (e) return { type: "hr", raw: J(e[0], `
`) };
  }
  blockquote(i) {
    let e = this.rules.block.blockquote.exec(i);
    if (e) {
      let t = J(e[0], `
`).split(`
`), s = "", n = "", r = [];
      for (; t.length > 0; ) {
        let a = !1, l = [], o;
        for (o = 0; o < t.length; o++) if (this.rules.other.blockquoteStart.test(t[o])) l.push(t[o]), a = !0;
        else if (!a) l.push(t[o]);
        else break;
        t = t.slice(o);
        let c = l.join(`
`), h = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${c}` : c, n = n ? `${n}
${h}` : h;
        let d = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(h, r, !0), this.lexer.state.top = d, t.length === 0) break;
        let g = r.at(-1);
        if (g?.type === "code") break;
        if (g?.type === "blockquote") {
          let f = g, m = f.raw + `
` + t.join(`
`), x = this.blockquote(m);
          r[r.length - 1] = x, s = s.substring(0, s.length - f.raw.length) + x.raw, n = n.substring(0, n.length - f.text.length) + x.text;
          break;
        } else if (g?.type === "list") {
          let f = g, m = f.raw + `
` + t.join(`
`), x = this.list(m);
          r[r.length - 1] = x, s = s.substring(0, s.length - g.raw.length) + x.raw, n = n.substring(0, n.length - f.raw.length) + x.raw, t = m.substring(r.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: r, text: n };
    }
  }
  list(i) {
    let e = this.rules.block.list.exec(i);
    if (e) {
      let t = e[1].trim(), s = t.length > 1, n = { type: "list", raw: "", ordered: s, start: s ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = s ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = s ? t : "[*+-]");
      let r = this.rules.other.listItemRegex(t), a = !1;
      for (; i; ) {
        let o = !1, c = "", h = "";
        if (!(e = r.exec(i)) || this.rules.block.hr.test(i)) break;
        c = e[0], i = i.substring(c.length);
        let d = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (Se) => " ".repeat(3 * Se.length)), g = i.split(`
`, 1)[0], f = !d.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, h = d.trimStart()) : f ? m = e[1].length + 1 : (m = e[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, h = d.slice(m), m += e[1].length), f && this.rules.other.blankLine.test(g) && (c += g + `
`, i = i.substring(g.length + 1), o = !0), !o) {
          let Se = this.rules.other.nextBulletRegex(m), tt = this.rules.other.hrRegex(m), it = this.rules.other.fencesBeginRegex(m), nt = this.rules.other.headingBeginRegex(m), ci = this.rules.other.htmlBeginRegex(m);
          for (; i; ) {
            let Ce = i.split(`
`, 1)[0], Z;
            if (g = Ce, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), Z = g) : Z = g.replace(this.rules.other.tabCharGlobal, "    "), it.test(g) || nt.test(g) || ci.test(g) || Se.test(g) || tt.test(g)) break;
            if (Z.search(this.rules.other.nonSpaceChar) >= m || !g.trim()) h += `
` + Z.slice(m);
            else {
              if (f || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || it.test(d) || nt.test(d) || tt.test(d)) break;
              h += `
` + g;
            }
            !f && !g.trim() && (f = !0), c += Ce + `
`, i = i.substring(Ce.length + 1), d = Z.slice(m);
          }
        }
        n.loose || (a ? n.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (a = !0));
        let x = null, T;
        this.options.gfm && (x = this.rules.other.listIsTask.exec(h), x && (T = x[0] !== "[ ] ", h = h.replace(this.rules.other.listReplaceTask, ""))), n.items.push({ type: "list_item", raw: c, task: !!x, checked: T, loose: !1, text: h, tokens: [] }), n.raw += c;
      }
      let l = n.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      n.raw = n.raw.trimEnd();
      for (let o = 0; o < n.items.length; o++) if (this.lexer.state.top = !1, n.items[o].tokens = this.lexer.blockTokens(n.items[o].text, []), !n.loose) {
        let c = n.items[o].tokens.filter((d) => d.type === "space"), h = c.length > 0 && c.some((d) => this.rules.other.anyLine.test(d.raw));
        n.loose = h;
      }
      if (n.loose) for (let o = 0; o < n.items.length; o++) n.items[o].loose = !0;
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
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: s, title: n };
    }
  }
  table(i) {
    let e = this.rules.block.table.exec(i);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = At(e[1]), s = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), n = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], r = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === s.length) {
      for (let a of s) this.rules.other.tableAlignRight.test(a) ? r.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? r.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? r.align.push("left") : r.align.push(null);
      for (let a = 0; a < t.length; a++) r.header.push({ text: t[a], tokens: this.lexer.inline(t[a]), header: !0, align: r.align[a] });
      for (let a of n) r.rows.push(At(a, r.header.length).map((l, o) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: r.align[o] })));
      return r;
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
        let r = J(t.slice(0, -1), "\\");
        if ((t.length - r.length) % 2 === 0) return;
      } else {
        let r = Dn(e[2], "()");
        if (r === -2) return;
        if (r > -1) {
          let a = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + r;
          e[2] = e[2].substring(0, r), e[0] = e[0].substring(0, a).trim(), e[3] = "";
        }
      }
      let s = e[2], n = "";
      if (this.options.pedantic) {
        let r = this.rules.other.pedanticHrefTitle.exec(s);
        r && (s = r[1], n = r[3]);
      } else n = e[3] ? e[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? s = s.slice(1) : s = s.slice(1, -1)), St(e, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: n && n.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(i, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(i)) || (t = this.rules.inline.nolink.exec(i))) {
      let s = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = e[s.toLowerCase()];
      if (!n) {
        let r = t[0].charAt(0);
        return { type: "text", raw: r, text: r };
      }
      return St(t, n, t[0], this.lexer, this.rules);
    }
  }
  emStrong(i, e, t = "") {
    let s = this.rules.inline.emStrongLDelim.exec(i);
    if (!(!s || s[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !t || this.rules.inline.punctuation.exec(t))) {
      let n = [...s[0]].length - 1, r, a, l = n, o = 0, c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, e = e.slice(-1 * i.length + n); (s = c.exec(e)) != null; ) {
        if (r = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !r) continue;
        if (a = [...r].length, s[3] || s[4]) {
          l += a;
          continue;
        } else if ((s[5] || s[6]) && n % 3 && !((n + a) % 3)) {
          o += a;
          continue;
        }
        if (l -= a, l > 0) continue;
        a = Math.min(a, a + l + o);
        let h = [...s[0]][0].length, d = i.slice(0, n + s.index + h + a);
        if (Math.min(n, a) % 2) {
          let f = d.slice(1, -1);
          return { type: "em", raw: d, text: f, tokens: this.lexer.inlineTokens(f) };
        }
        let g = d.slice(2, -2);
        return { type: "strong", raw: d, text: g, tokens: this.lexer.inlineTokens(g) };
      }
    }
  }
  codespan(i) {
    let e = this.rules.inline.code.exec(i);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(t), n = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return s && n && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
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
        let n;
        do
          n = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (n !== e[0]);
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
}, S = class Le {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || I, this.options.tokenizer = this.options.tokenizer || new we(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: $, block: ce.normal, inline: X.normal };
    this.options.pedantic ? (t.block = ce.pedantic, t.inline = X.pedantic) : this.options.gfm && (t.block = ce.gfm, this.options.breaks ? t.inline = X.breaks : t.inline = X.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: ce, inline: X };
  }
  static lex(e, t) {
    return new Le(t).lex(e);
  }
  static lexInline(e, t) {
    return new Le(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace($.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let s = this.inlineQueue[t];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], s = !1) {
    for (this.options.pedantic && (e = e.replace($.tabCharGlobal, "    ").replace($.spaceLine, "")); e; ) {
      let n;
      if (this.options.extensions?.block?.some((a) => (n = a.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1)) continue;
      if (n = this.tokenizer.space(e)) {
        e = e.substring(n.raw.length);
        let a = t.at(-1);
        n.raw.length === 1 && a !== void 0 ? a.raw += `
` : t.push(n);
        continue;
      }
      if (n = this.tokenizer.code(e)) {
        e = e.substring(n.raw.length);
        let a = t.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + n.raw, a.text += `
` + n.text, this.inlineQueue.at(-1).src = a.text) : t.push(n);
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
        let a = t.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + n.raw, a.text += `
` + n.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title }, t.push(n));
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
      let r = e;
      if (this.options.extensions?.startBlock) {
        let a = 1 / 0, l = e.slice(1), o;
        this.options.extensions.startBlock.forEach((c) => {
          o = c.call({ lexer: this }, l), typeof o == "number" && o >= 0 && (a = Math.min(a, o));
        }), a < 1 / 0 && a >= 0 && (r = e.substring(0, a + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(r))) {
        let a = t.at(-1);
        s && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + n.raw, a.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(n), s = r.length !== e.length, e = e.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(e)) {
        e = e.substring(n.raw.length);
        let a = t.at(-1);
        a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + n.raw, a.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(n);
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
    let s = e, n = null;
    if (this.tokens.links) {
      let l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; ) l.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; ) s = s.slice(0, n.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; ) s = s.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let r = !1, a = "";
    for (; e; ) {
      r || (a = ""), r = !1;
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
      if (l = this.tokenizer.emStrong(e, s, a)) {
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
        this.options.extensions.startInline.forEach((g) => {
          d = g.call({ lexer: this }, h), typeof d == "number" && d >= 0 && (c = Math.min(c, d));
        }), c < 1 / 0 && c >= 0 && (o = e.substring(0, c + 1));
      }
      if (l = this.tokenizer.inlineText(o)) {
        e = e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (a = l.raw.slice(-1)), r = !0;
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
}, ve = class {
  options;
  parser;
  constructor(i) {
    this.options = i || I;
  }
  space(i) {
    return "";
  }
  code({ text: i, lang: e, escaped: t }) {
    let s = (e || "").match($.notSpaceStart)?.[0], n = i.replace($.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + A(s) + '">' + (t ? n : A(n, !0)) + `</code></pre>
` : "<pre><code>" + (t ? n : A(n, !0)) + `</code></pre>
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
    for (let a = 0; a < i.items.length; a++) {
      let l = i.items[a];
      s += this.listitem(l);
    }
    let n = e ? "ol" : "ul", r = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + n + r + `>
` + s + "</" + n + `>
`;
  }
  listitem(i) {
    let e = "";
    if (i.task) {
      let t = this.checkbox({ checked: !!i.checked });
      i.loose ? i.tokens[0]?.type === "paragraph" ? (i.tokens[0].text = t + " " + i.tokens[0].text, i.tokens[0].tokens && i.tokens[0].tokens.length > 0 && i.tokens[0].tokens[0].type === "text" && (i.tokens[0].tokens[0].text = t + " " + A(i.tokens[0].tokens[0].text), i.tokens[0].tokens[0].escaped = !0)) : i.tokens.unshift({ type: "text", raw: t + " ", text: t + " ", escaped: !0 }) : e += t + " ";
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
    let s = "";
    for (let n = 0; n < i.rows.length; n++) {
      let r = i.rows[n];
      t = "";
      for (let a = 0; a < r.length; a++) t += this.tablecell(r[a]);
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
    return `<code>${A(i, !0)}</code>`;
  }
  br(i) {
    return "<br>";
  }
  del({ tokens: i }) {
    return `<del>${this.parser.parseInline(i)}</del>`;
  }
  link({ href: i, title: e, tokens: t }) {
    let s = this.parser.parseInline(t), n = kt(i);
    if (n === null) return s;
    i = n;
    let r = '<a href="' + i + '"';
    return e && (r += ' title="' + A(e) + '"'), r += ">" + s + "</a>", r;
  }
  image({ href: i, title: e, text: t, tokens: s }) {
    s && (t = this.parser.parseInline(s, this.parser.textRenderer));
    let n = kt(i);
    if (n === null) return A(t);
    i = n;
    let r = `<img src="${i}" alt="${t}"`;
    return e && (r += ` title="${A(e)}"`), r += ">", r;
  }
  text(i) {
    return "tokens" in i && i.tokens ? this.parser.parseInline(i.tokens) : "escaped" in i && i.escaped ? i.text : A(i.text);
  }
}, et = class {
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
}, C = class Oe {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || I, this.options.renderer = this.options.renderer || new ve(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new et();
  }
  static parse(e, t) {
    return new Oe(t).parse(e);
  }
  static parseInline(e, t) {
    return new Oe(t).parseInline(e);
  }
  parse(e, t = !0) {
    let s = "";
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (this.options.extensions?.renderers?.[r.type]) {
        let l = r, o = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(l.type)) {
          s += o || "";
          continue;
        }
      }
      let a = r;
      switch (a.type) {
        case "space": {
          s += this.renderer.space(a);
          continue;
        }
        case "hr": {
          s += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          s += this.renderer.heading(a);
          continue;
        }
        case "code": {
          s += this.renderer.code(a);
          continue;
        }
        case "table": {
          s += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          s += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          s += this.renderer.list(a);
          continue;
        }
        case "html": {
          s += this.renderer.html(a);
          continue;
        }
        case "def": {
          s += this.renderer.def(a);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let l = a, o = this.renderer.text(l);
          for (; n + 1 < e.length && e[n + 1].type === "text"; ) l = e[++n], o += `
` + this.renderer.text(l);
          t ? s += this.renderer.paragraph({ type: "paragraph", raw: o, text: o, tokens: [{ type: "text", raw: o, text: o, escaped: !0 }] }) : s += o;
          continue;
        }
        default: {
          let l = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return s;
  }
  parseInline(e, t = this.renderer) {
    let s = "";
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (this.options.extensions?.renderers?.[r.type]) {
        let l = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          s += l || "";
          continue;
        }
      }
      let a = r;
      switch (a.type) {
        case "escape": {
          s += t.text(a);
          break;
        }
        case "html": {
          s += t.html(a);
          break;
        }
        case "link": {
          s += t.link(a);
          break;
        }
        case "image": {
          s += t.image(a);
          break;
        }
        case "strong": {
          s += t.strong(a);
          break;
        }
        case "em": {
          s += t.em(a);
          break;
        }
        case "codespan": {
          s += t.codespan(a);
          break;
        }
        case "br": {
          s += t.br(a);
          break;
        }
        case "del": {
          s += t.del(a);
          break;
        }
        case "text": {
          s += t.text(a);
          break;
        }
        default: {
          let l = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return s;
  }
}, de = class {
  options;
  block;
  constructor(i) {
    this.options = i || I;
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
    return this.block ? S.lex : S.lexInline;
  }
  provideParser() {
    return this.block ? C.parse : C.parseInline;
  }
}, Bn = class {
  defaults = qe();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = C;
  Renderer = ve;
  TextRenderer = et;
  Lexer = S;
  Tokenizer = we;
  Hooks = de;
  constructor(...i) {
    this.use(...i);
  }
  walkTokens(i, e) {
    let t = [];
    for (let s of i) switch (t = t.concat(e.call(this, s)), s.type) {
      case "table": {
        let n = s;
        for (let r of n.header) t = t.concat(this.walkTokens(r.tokens, e));
        for (let r of n.rows) for (let a of r) t = t.concat(this.walkTokens(a.tokens, e));
        break;
      }
      case "list": {
        let n = s;
        t = t.concat(this.walkTokens(n.items, e));
        break;
      }
      default: {
        let n = s;
        this.defaults.extensions?.childTokens?.[n.type] ? this.defaults.extensions.childTokens[n.type].forEach((r) => {
          let a = n[r].flat(1 / 0);
          t = t.concat(this.walkTokens(a, e));
        }) : n.tokens && (t = t.concat(this.walkTokens(n.tokens, e)));
      }
    }
    return t;
  }
  use(...i) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return i.forEach((t) => {
      let s = { ...t };
      if (s.async = this.defaults.async || s.async || !1, t.extensions && (t.extensions.forEach((n) => {
        if (!n.name) throw new Error("extension name required");
        if ("renderer" in n) {
          let r = e.renderers[n.name];
          r ? e.renderers[n.name] = function(...a) {
            let l = n.renderer.apply(this, a);
            return l === !1 && (l = r.apply(this, a)), l;
          } : e.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let r = e[n.level];
          r ? r.unshift(n.tokenizer) : e[n.level] = [n.tokenizer], n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [n.start] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (e.childTokens[n.name] = n.childTokens);
      }), s.extensions = e), t.renderer) {
        let n = this.defaults.renderer || new ve(this.defaults);
        for (let r in t.renderer) {
          if (!(r in n)) throw new Error(`renderer '${r}' does not exist`);
          if (["options", "parser"].includes(r)) continue;
          let a = r, l = t.renderer[a], o = n[a];
          n[a] = (...c) => {
            let h = l.apply(n, c);
            return h === !1 && (h = o.apply(n, c)), h || "";
          };
        }
        s.renderer = n;
      }
      if (t.tokenizer) {
        let n = this.defaults.tokenizer || new we(this.defaults);
        for (let r in t.tokenizer) {
          if (!(r in n)) throw new Error(`tokenizer '${r}' does not exist`);
          if (["options", "rules", "lexer"].includes(r)) continue;
          let a = r, l = t.tokenizer[a], o = n[a];
          n[a] = (...c) => {
            let h = l.apply(n, c);
            return h === !1 && (h = o.apply(n, c)), h;
          };
        }
        s.tokenizer = n;
      }
      if (t.hooks) {
        let n = this.defaults.hooks || new de();
        for (let r in t.hooks) {
          if (!(r in n)) throw new Error(`hook '${r}' does not exist`);
          if (["options", "block"].includes(r)) continue;
          let a = r, l = t.hooks[a], o = n[a];
          de.passThroughHooks.has(r) ? n[a] = (c) => {
            if (this.defaults.async) return Promise.resolve(l.call(n, c)).then((d) => o.call(n, d));
            let h = l.call(n, c);
            return o.call(n, h);
          } : n[a] = (...c) => {
            let h = l.apply(n, c);
            return h === !1 && (h = o.apply(n, c)), h;
          };
        }
        s.hooks = n;
      }
      if (t.walkTokens) {
        let n = this.defaults.walkTokens, r = t.walkTokens;
        s.walkTokens = function(a) {
          let l = [];
          return l.push(r.call(this, a)), n && (l = l.concat(n.call(this, a))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(i) {
    return this.defaults = { ...this.defaults, ...i }, this;
  }
  lexer(i, e) {
    return S.lex(i, e ?? this.defaults);
  }
  parser(i, e) {
    return C.parse(i, e ?? this.defaults);
  }
  parseMarkdown(i) {
    return (e, t) => {
      let s = { ...t }, n = { ...this.defaults, ...s }, r = this.onError(!!n.silent, !!n.async);
      if (this.defaults.async === !0 && s.async === !1) return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return r(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return r(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      n.hooks && (n.hooks.options = n, n.hooks.block = i);
      let a = n.hooks ? n.hooks.provideLexer() : i ? S.lex : S.lexInline, l = n.hooks ? n.hooks.provideParser() : i ? C.parse : C.parseInline;
      if (n.async) return Promise.resolve(n.hooks ? n.hooks.preprocess(e) : e).then((o) => a(o, n)).then((o) => n.hooks ? n.hooks.processAllTokens(o) : o).then((o) => n.walkTokens ? Promise.all(this.walkTokens(o, n.walkTokens)).then(() => o) : o).then((o) => l(o, n)).then((o) => n.hooks ? n.hooks.postprocess(o) : o).catch(r);
      try {
        n.hooks && (e = n.hooks.preprocess(e));
        let o = a(e, n);
        n.hooks && (o = n.hooks.processAllTokens(o)), n.walkTokens && this.walkTokens(o, n.walkTokens);
        let c = l(o, n);
        return n.hooks && (c = n.hooks.postprocess(c)), c;
      } catch (o) {
        return r(o);
      }
    };
  }
  onError(i, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, i) {
        let s = "<p>An error occurred:</p><pre>" + A(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(s) : s;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, D = new Bn();
function w(i, e) {
  return D.parse(i, e);
}
w.options = w.setOptions = function(i) {
  return D.setOptions(i), w.defaults = D.defaults, Jt(w.defaults), w;
};
w.getDefaults = qe;
w.defaults = I;
w.use = function(...i) {
  return D.use(...i), w.defaults = D.defaults, Jt(w.defaults), w;
};
w.walkTokens = function(i, e) {
  return D.walkTokens(i, e);
};
w.parseInline = D.parseInline;
w.Parser = C;
w.parser = C.parse;
w.Renderer = ve;
w.TextRenderer = et;
w.Lexer = S;
w.lexer = S.lex;
w.Tokenizer = we;
w.Hooks = de;
w.parse = w;
w.options;
w.setOptions;
w.use;
w.walkTokens;
w.parseInline;
C.parse;
S.lex;
const Gn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.92'%20x2='38.52'%20y1='18.75'%20y2='47.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='5%2032%2032;%20-15%2032%2032;%205%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M46.66%2036.2a16.66%2016.66%200%2001-16.78-16.55%2016.29%2016.29%200%2001.55-4.15A16.56%2016.56%200%201048.5%2036.1c-.61.06-1.22.1-1.84.1z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-5%2032%2032;%2015%2032%2032;%20-5%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Hn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/path%3e%3c/svg%3e", Fn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='27.5'%20x2='36.5'%20y1='50.21'%20y2='65.79'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20y1='44.21'%20y2='59.79'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2058h30'%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2052h30'%3e%3canimateTransform%20attributeName='transform'%20begin='-4s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3c/svg%3e", jn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.25'%20x2='24.75'%20y1='43.7'%20y2='46.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='30.25'%20x2='31.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='37.25'%20x2='38.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23a)'%20d='M24%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20d='M31%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20d='M38%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3c/svg%3e", qn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='16.5'%20x2='21.5'%20y1='19.67'%20y2='28.33'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='19'%20cy='24'%20r='5'%20fill='url(%23b)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2019%2024;%20360%2019%2024'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23f)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", Vn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23b)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", Ct = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Zn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='30.12'%20x2='31.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.67'%20x2='32.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='g'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M33.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M31%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='-1%20-6;%201%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2031%2045;%20360%2031%2045'/%3e%3canimate%20attributeName='opacity'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23d)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23f)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3c/svg%3e", Qn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='b'%20x1='23.31'%20x2='24.69'%20y1='44.3'%20y2='46.7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='30.31'%20x2='31.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3clinearGradient%20id='h'%20x1='37.31'%20x2='38.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3c/defs%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23e)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23f)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23h)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Kn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.97'%20x2='42.03'%20y1='14.63'%20y2='49.37'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43%2032a11%2011%200%2011-11-11%2011%2011%200%200111%2011zM25%2014.61l-.48%201a33.68%2033.68%200%2000-3.42%2017.82h0M39%2049.39l.48-1a33.68%2033.68%200%20003.42-17.82h0'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='360%2032%2032;%200%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Tt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='27.56'%20x2='38.27'%20y1='17.64'%20y2='36.19'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='19.96'%20x2='31.37'%20y1='29.03'%20y2='48.8'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e", Nt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Xn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='40.76'%20x2='50.83'%20y1='23'%20y2='40.46'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%239ca3af'/%3e%3cstop%20offset='.45'%20stop-color='%239ca3af'/%3e%3cstop%20offset='1'%20stop-color='%236b7280'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23848b98'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M34.23%2033.45a4.05%204.05%200%20004.05%204h16.51a4.34%204.34%200%2000.81-8.61%203.52%203.52%200%2000.06-.66%204.06%204.06%200%2000-6.13-3.48%206.08%206.08%200%2000-11.25%203.19%206.34%206.34%200%2000.18%201.46h-.18a4.05%204.05%200%2000-4.05%204.1z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-2.1%200;%202.1%200;%20-2.1%200'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/path%3e%3c/svg%3e", b = (i, e) => i ? (e || (e = "24px"), p`<ha-icon .icon="${i}" style="font-size:${e}" />`) : p`<ha-icon icon="mdi:weather-sunny" style="font-size:${e}" />`, Et = (i, e, t) => {
  if (!i)
    return b("mdi:weather-sunny", t);
  const s = {
    "clear-night": b("mdi:weather-night", t),
    cloudy: b("mdi:weather-cloudy", t),
    fog: b("mdi:weather-fog", t),
    hail: b("mdi:weather-hail", t),
    lightning: b("mdi:weather-lightning", t),
    "lightning-rainy": b("mdi:weather-lightning-rainy", t),
    partlycloudy: b("mdi:weather-partly-cloudy", t),
    pouring: b("mdi:weather-pouring", t),
    rainy: b("mdi:weather-rainy", t),
    snowy: b("mdi:weather-snowy", t),
    "snowy-rainy": b("mdi:weather-snowy-rainy", t),
    sunny: b("mdi:weather-sunny", t),
    windy: b("mdi:weather-windy", t),
    "windy-variant": b("mdi:weather-windy-variant", t),
    exceptional: b("mdi:weather-hurricane", t)
  }, n = {
    "clear-night": p`<img src="${Gn}" style="font-size:${t}" />`,
    cloudy: p`<img src="${Xn}" style="font-size:${t}" />`,
    fog: p`<img src="${Fn}}" style="font-size:${t}" />`,
    hail: p`<img src="${jn}" style="font-size:${t}" />`,
    lightning: p`<img src="${Vn}" style="font-size:${t}" />`,
    "lightning-rainy": p`<img src="${qn}" style="font-size:${t}" />`,
    partlycloudy: p`<img src="${Hn}" style="font-size:${t}" />`,
    pouring: p`<img src="${Ct}" style="font-size:${t}" />`,
    rainy: p`<img src="${Ct}" style="font-size:${t}" />`,
    snowy: p`<img src="${Zn}" style="font-size:${t}" />`,
    "snowy-rainy": p`<img src="${Qn}" style="font-size:${t}" />`,
    sunny: p`<img src="${Nt}" style="font-size:${t}" />`,
    windy: p`<img src="${Tt}" style="font-size:${t}" />`,
    "windy-variant": p`<img src="${Tt}" style="font-size:${t}" />`,
    exceptional: p`<img src="${Kn}" style="font-size:${t}" />`
  };
  return e === "mdi" ? s[i] || b("mdi:weather-sunny", t) : n[i] || p`<img src="${Nt}" />`;
};
var Jn = Object.defineProperty, Yn = Object.getOwnPropertyDescriptor, k = (i, e, t, s) => {
  for (var n = s > 1 ? void 0 : s ? Yn(e, t) : e, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (n = (s ? a(e, t, n) : a(n)) || n);
  return s && n && Jn(e, t, n), n;
};
Wi({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => hi[i]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard");
console.log("🎯 customElements registry available:", !!customElements);
let M = class extends U {
  hass;
  config;
  _forecast = [];
  _hourlyForecast = [];
  _forecastLoading = !1;
  constructor() {
    super(), console.log("🔧 SwissweatherCard constructor called"), console.log("🔧 LitElement base:", U), console.log("🔧 customElement decorator applied");
  }
  connectedCallback() {
    super.connectedCallback(), console.log("🔌 SwissweatherCard connected to DOM"), console.log("🔌 Custom element defined:", customElements.get("swissweather-card"));
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
        s && s[this.config.entity] ? (this._hourlyForecast = s[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [];
      } catch (i) {
        console.warn("⚠️ Forecast loading failed:", i), this._forecast = [], this._hourlyForecast = [];
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
        name: "show_warnings",
        selector: {
          boolean: {}
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
        name: "show_wind",
        selector: {
          boolean: {}
        }
      },
      {
        name: "enable_animate_weather_icons",
        selector: {
          boolean: {}
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
            mode: "box",
            unit_of_measurement: "h",
            step: 6
          }
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
      for (let r = 0; r < i?.attributes.warning_levels.length; r++)
        e.push({
          id: `warning_${r}`,
          title: i?.attributes.warning_levels[r],
          level: i?.attributes.warning_levels[r],
          type: i?.attributes.warning_types[r],
          description: i?.attributes.warning_texts[r],
          valid_from: i.attributes.warning_valid_from[r],
          valid_to: i.attributes.warning_valid_to[r],
          link: i.attributes.warning_links[r],
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
    const n = (r) => {
      this._openWarnings = { ...this._openWarnings, [r]: !this._openWarnings[r] }, this.requestUpdate();
    };
    return e.length > 0 ? p`
          <div class="warning-section ${t}">
            <div>
              <strong>${u("weather_warning")}</strong>
              <ul style="margin: 6px 0 0 0; padding-left: 18px;">
                ${e.map(
      (r) => p`
                    <li style="margin-bottom: 12px;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <ha-icon
                          icon="${s[r.type?.toLowerCase?.()] || s.default}"
                          style="color: var(--error-color, #dc143c);"
                        ></ha-icon>
                        <span style="font-weight:bold;">${r.title}</span>
                        ${r.link ? p`
                              <a
                                href="${r.link}"
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
                          @click=${() => n(r.id)}
                          style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;"
                          title="${this._openWarnings[r.id] ? u("collapse") : u("expand")}"
                          aria-label="${this._openWarnings[r.id] ? u("collapse") : u("expand")}"
                        >
                          <ha-icon
                            icon="${this._openWarnings[r.id] ? "mdi:chevron-up" : "mdi:chevron-down"}"
                          ></ha-icon>
                        </button>
                      </div>
                      ${this._openWarnings[r.id] && r.description ? p`
                            <div>
                              <strong>${u("valid_from")}: </strong>
                              ${r.valid_from ? new Date(r.valid_from).toLocaleString() : u("unknown")}
                              <strong>${u("valid_to")}: </strong>
                              ${r.valid_to ? new Date(r.valid_to).toLocaleString() : u("unknown")}
                            </div>
                            <div
                              style="color: var(--primary-text-color, #fff); font-size: 14px; line-height: 1.4; margin-left: 2px; margin-top: 4px;"
                              .innerHTML="${w.parse(r.description || "")}"
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
    return this.config.show_temperature !== !1 ? this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, i).some((e) => typeof e.temperature == "number" && !isNaN(e.temperature)) ? p`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:thermometer"></ha-icon>
                ${u("temperature_hours", { hours: i })}
              </div>
              <div class="chart-line" style="position:relative;">
                ${this._hourlyForecast.slice(0, i).map((e) => {
      const t = typeof e.temperature == "number" && !isNaN(e.temperature) ? e.temperature : null;
      return p`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;margin-bottom:10px;"
                    >
                      <span
                        style="font-size:11px; color:#db4a34; writing-mode:vertical-rl; transform:rotate(180deg); min-height:30px; font-variant-numeric:tabular-nums;"
                      >
                        ${t !== null ? t.toFixed(1) + " °C" : ""}
                      </span>
                    </div>
                  `;
    })}
              </div>
              <div style="width:100%;height:90px;overflow-x:auto;">
                ${(() => {
      const e = this._hourlyForecast.slice(0, i).map(
        (f) => typeof f.temperature == "number" && !isNaN(f.temperature) ? f.temperature : null
      ), t = e.filter((f) => f !== null);
      if (t.length < 2) return "";
      const s = Math.min(...t), r = Math.max(...t) - s || 1, a = e.length, l = Math.max(360, Math.min(1600, a * 250)), o = 50, c = l / (a - 1), h = e.map((f, m) => f !== null ? `${m * c},${o - (f - s) / r * o}` : "").filter(Boolean).join(" ");
      return le`<svg width="${i === 6 ? "84%" : i === 12 ? "90%" : i === 18 ? "96%" : "100%"}" height="${o}" viewBox="0 0 ${l} ${o}" preserveAspectRatio="none" style="display:block;padding-left:${i === 6 ? "8%" : i === 12 ? "5%" : i === 18 ? "2%" : "0%"};">
                        <polyline points="${h}" fill="none" stroke="#db4a34" stroke-width="3" />
                        ${e.map((f, m) => f !== null ? le`<circle r="3" fill="#db4a34" cx="${m * c}" cy="${o - (f - s) / r * o}" />` : null)}
                        </svg>`;
    })()}
              </div>
              ${this._showHoursChartLabel(i)}
            </div>
          ` : p`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:thermometer"></ha-icon>
                ${u("temperature_hours", { hours: i })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${u("no_temperature_data")}
              </div>
            </div>
          ` : p``;
  }
  _renderForecastPrecipitation(i) {
    return this.config.show_precipitation !== !1 ? this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, i).some((e) => typeof e.precipitation == "number" && !isNaN(e.precipitation)) ? p`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-pouring"></ha-icon>
                ${u("precipitation_hours", { hours: i })}
              </div>
              <div class="chart-bars">
                ${this._hourlyForecast.slice(0, i).map((e) => {
      const t = typeof e.precipitation == "number" && !isNaN(e.precipitation) ? e.precipitation : null, s = t !== null ? Math.round(t * 10) : 2;
      return p`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <div
                        style="height:32px; display:flex; align-items:flex-end; justify-content:center;"
                      >
                        <span
                          style="font-size:11px; color:#3498db; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                        >
                          ${t !== null ? t.toFixed(1) + " mm" : ""}
                        </span>
                      </div>
                      <div class="chart-bar-precipitation" style="height: ${s}px;"></div>
                    </div>
                  `;
    })}
              </div>
              ${this._showHoursChartLabel(i)}
            </div>
          ` : p`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-pouring"></ha-icon>
                ${u("precipitation_hours", { hours: i })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${u("no_precipitation_data")}
              </div>
            </div>
          ` : p``;
  }
  _renderForecastSunshine(i, e, t) {
    return this.config.show_sunshine !== !1 ? (
      // Type extension for sunshine chart (workaround)
      this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, t).some((s) => {
        const n = s;
        return typeof n.sunshine == "number" && !isNaN(n.sunshine) || typeof n.sunshine_duration == "number" && !isNaN(n.sunshine_duration);
      }) ? p`
            <div class="chart" style="position:relative;">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${u("sunshine_hours", { hours: t })}
              </div>
              <div class="chart-bars" style="position:relative;">
                ${(() => {
        const s = i?.attributes?.sunrise ? new Date(i.attributes.sunrise) : new Date((e?.attributes).next_rising) || null, n = i?.attributes?.sunset ? new Date(i.attributes.sunset) : new Date((e?.attributes).next_setting) || null, r = this._hourlyForecast[0]?.datetime ? new Date(this._hourlyForecast[0].datetime) : null;
        let a = -1, l = -1;
        return s && r && (a = Math.round(
          (s.getTime() - r.getTime()) / (3600 * 1e3) + 1
        )), n && r && (l = Math.round(
          (n.getTime() - r.getTime()) / (3600 * 1e3) + 1
        )), p`
                    ${a >= 0 && a < t ? p`
                          <div
                            style="position:absolute;left:calc(${a / t * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-up"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d;"
                              >${u("sunrise")}
                              ${s ? s.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }) : ""}</span
                            >
                          </div>
                        ` : ""}
                    ${l >= 0 && l < t ? p`
                          <div
                            style="position:absolute;left:calc(${l / t * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-down"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d;align-items:center;"
                              >${u("sunset")}
                              ${n ? n.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }) : ""}</span
                            >
                          </div>
                        ` : ""}
                  `;
      })()}
                ${this._hourlyForecast.slice(0, t).map((s) => {
        const n = s, r = typeof n.sunshine == "number" && !isNaN(n.sunshine) ? n.sunshine : typeof n.sunshine_duration == "number" && !isNaN(n.sunshine_duration) ? n.sunshine_duration : null, a = r !== null ? Math.round(r) : 2;
        return p`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#fbc02d; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${r !== null ? r.toFixed(0) + " min" : ""}
                      </span>
                      <div class="chart-bar-sunshine" style="height: ${a}px;"></div>
                    </div>
                  `;
      })}
              </div>
              ${this._showHoursChartLabel(t)}
            </div>
          ` : p`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${u("sunshine_hours", { hours: t })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${u("no_sunshine_data")}
              </div>
            </div>
          `
    ) : p``;
  }
  _renderForecastWind(i) {
    return this.config.show_sunshine !== !1 ? this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, i).some((e) => typeof e.wind_speed == "number" && !isNaN(e.wind_speed)) ? p`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-windy"></ha-icon>
                ${u("wind_hours", { hours: i })}
              </div>
              <div class="chart-line-wind" style="position:relative;">
                ${this._hourlyForecast.slice(0, i).map((e) => {
      const t = typeof e.wind_speed == "number" && !isNaN(e.wind_speed) ? e.wind_speed : null;
      return p`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#44739e; writing-mode:vertical-rl; transform:rotate(180deg); min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${t !== null ? t.toFixed(1) + " km/h" : ""}
                      </span>
                    </div>
                  `;
    })}
              </div>
              <div class="chart-line-wind" style="position:relative;">
                ${this._hourlyForecast.slice(0, i).map((e) => {
      const t = typeof e.wind_bearing == "number" && !isNaN(e.wind_bearing) ? e.wind_bearing : null;
      return p`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;"
                    >
                      <div class="wind-compass" style="width: 12px; height: 12px; margin: 0 auto;">
                        <div
                          class="wind-arrow"
                          style="transform: translate(-50%, -100%) rotate(${t !== null ? t : 0}deg);"
                        ></div>
                      </div>
                    </div>
                  `;
    })}
              </div>
              <div style="width:100%;height:90px;overflow-x:auto;">
                ${(() => {
      const e = this._hourlyForecast.slice(0, i).map(
        (f) => typeof f.wind_speed == "number" && !isNaN(f.wind_speed) ? f.wind_speed : null
      ), t = e.filter((f) => f !== null);
      if (t.length < 2) return "";
      const s = Math.min(...t), r = Math.max(...t) - s || 1, a = e.length, l = Math.max(360, Math.min(1600, a * 250)), o = 50, c = l / (a - 1), h = e.map((f, m) => f !== null ? `${m * c},${o - (f - s) / r * o}` : "").filter(Boolean).join(" ");
      return le`<svg width="${i === 6 ? "84%" : i === 12 ? "90%" : i === 18 ? "96%" : "100%"}" height="${o}" viewBox="0 0 ${l} ${o}" preserveAspectRatio="none" style="display:block;padding-left:${i === 6 ? "8%" : i === 12 ? "5%" : i === 18 ? "2%" : "0%"};">
                <polyline points="${h}" fill="none" stroke="#44739e" stroke-width="3" />
                ${e.map((f, m) => f !== null ? le`<circle r="3" fill="#44739e" cx="${m * c}" cy="${o - (f - s) / r * o}" />` : null)}
              </svg>`;
    })()}
              </div>
              ${this._showHoursChartLabel(i)}
            </div>
          ` : p`` : p``;
  }
  _renderDailyForecast(i) {
    return this.config.show_forecast !== !1 ? this._forecastLoading && i.length === 0 ? p`
            <div class="forecast-section">
              <div class="section-title">
                <ha-icon icon="mdi:calendar"></ha-icon>
                ${u("7d_forecast")}
                <small
                  style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >${u("loading")}</small
                >
              </div>
              <div
                style="text-align: center; padding: 20px; color: var(--secondary-text-color, #666); font-style: italic;"
              >
                ⏳ ${u("loading_forecast")}<br />
                <small>Service: weather.get_forecasts</small>
              </div>
            </div>
          ` : i.length > 0 ? p`
              <div class="forecast-section">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${i.length === 7 ? u("7d_forecast") : u("xd_forecast", { days: i.length })}
                  <small
                    style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >
                    (${i.length} ${u("days_available")})
                  </small>
                </div>
                ${i.length < 7 ? p`
                      <div
                        style="text-align: center; color: var(--warning-color, #b8860b); font-size: 13px; margin-bottom: 8px;"
                      >
                        ${u("forecast_days_hint", { count: i.length })}
                      </div>
                    ` : ""}
                <div class="forecast-grid">
                  ${i.slice(0, 7).map(
      (e) => p`
                      <div class="forecast-day">
                        <div class="forecast-date">${this._formatDate(e.datetime)}</div>
                        <div class="forecast-icon">
                          ${Et(
        e.condition,
        this.config.enable_animate_weather_icons ? "animated" : "mdi",
        "24px"
      )}
                        </div>
                        <div class="forecast-temps">
                          <span class="temp-high">${Math.round(e.temperature)}°</span>
                          <span class="temp-low"
                            >${Math.round(e.templow || e.temperature - 5)}°</span
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
                  ${u("7d_forecast")}
                  <small style="font-size: 12px; color: #666; margin-left: 10px;">
                    (0 ${u("days_available")})
                  </small>
                </div>
                <div style="text-align: center; padding: 20px; color: #666; font-style: italic;">
                  ⚠️ ${u("no_forecast_data")}<br />
                  <small>Entity: ${this.config.entity}</small><br />
                  <small>${u("check_devtools")}</small><br />
                  <small style="color: #999;">${u("try_other_entity")}</small>
                </div>
              </div>
            ` : p``;
  }
  _renderCurrentWeatherCompactMode(i, e, t, s, n, r) {
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
          <div class="metric-value">${s} hPa</div>
        </div>
        ${r ? p`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                  <div class="metric-value">${parseFloat(r.state).toFixed(1)}h</div>
                </div>
              ` : ""}
        ${n > 0 ? p`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                  <div class="metric-value">${n} km</div>
                </div>
              ` : ""}
      </div
      `;
  }
  _renderCurrentWeather(i, e, t, s, n, r) {
    return p`
      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${u("current_weather")}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(i)} km/h</div>
          <div class="metric-label">${u("wind")}</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${e}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(e)}</div>
          <div class="metric-label">${u("direction")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${t}%</div>
          <div class="metric-label">${u("humidity")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${s} hPa</div>
          <div class="metric-label">${u("pressure")}</div>
        </div>
        ${r ? p`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                <div class="metric-value">${parseFloat(r.state).toFixed(1)}h</div>
                <div class="metric-label">${u("sunshine")}</div>
              </div>
            ` : ""}
        ${n > 0 ? p`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                <div class="metric-value">${n} km</div>
                <div class="metric-label">${u("visibility")}</div>
              </div>
            ` : ""}
      </div>
    `;
  }
  _renderCurrentWeatherSection(i, e, t, s, n, r) {
    return p`
      <div class="current-weather-section">
        ${this.config.compact_mode === !0 ? p`
              ${this._renderCurrentWeatherCompactMode(
      e,
      i,
      t,
      s,
      n,
      r
    )}
            ` : p`
              ${this._renderCurrentWeather(
      e,
      i,
      t,
      s,
      n,
      r
    )}
            `}
      </div>
    `;
  }
  render() {
    if (It((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return p``;
    const i = this._getEntityState(this.config.entity), e = this._getEntityState(this.config.sun_entity || "sun.sun");
    if (!i)
      return p`<div>Entity not found: ${this.config.entity}</div>`;
    const t = this.config.show_location !== !1, s = this.config.location || u("location"), n = i.attributes.temperature, r = i.state, a = this._forecast, l = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null, o = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null, c = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null, h = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null, d = l ? parseFloat(l.state) : i.attributes.wind_speed || 0, g = o ? parseFloat(o.state) : i.attributes.wind_bearing || 0, f = i.attributes.humidity || 0, m = i.attributes.pressure || 0, x = i.attributes.visibility || 0, T = this.config.forecast_hours ?? 6;
    return p`
      ${t ? p`
            <div class="header">
              <div class="location">${s}</div>
            </div>
          ` : ""}
      ${this.config.show_warnings ? this._renderWarningSection(h) : ""}

      <div class="current-weather">
        <div>
          <div class="current-temp">${n}°</div>
          <div class="condition">${u(r)}</div>
        </div>
        <div class="current-details">
          <div
            class="weather-icon"
            style="color: var(--icon-color, #fff); width: 64px; height: 64px;"
          >
            ${Et(
      r,
      this.config.enable_animate_weather_icons ? "animated" : "mdi",
      "64px"
    )}
          </div>
        </div>
      </div>

      ${this._renderCurrentWeatherSection(
      d,
      g,
      f,
      m,
      x,
      c
    )}
      ${this.config.compact_mode === !1 && (this.config.show_temperature === !0 || this.config.show_precipitation === !0 || this.config.show_sunshine === !0) ? p`
            <div class="section-title">
              <ha-icon icon="mdi:clock"></ha-icon>
              ${u("forecast_hours", { hours: T })}
            </div>
          ` : ""}
      ${this._renderForecastTemperature(T)}
      ${this._renderForecastPrecipitation(T)}
      ${this._renderForecastSunshine(i, e, T)}
      ${this._renderForecastWind(T)} ${this._renderDailyForecast(a)}
    `;
  }
  _showHoursChartLabel(i) {
    return p`
      <div class="chart-labels">
        ${Array.from(
      { length: i },
      (e, t) => p`
            <div
              style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
            >
              <span>${t === 0 ? u("now") : u("hour", { h: t })}</span>
            </div>
          `
    )}
      </div>
    `;
  }
  _formatDate(i) {
    const e = new Date(i);
    return ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"][e.getDay()];
  }
};
k([
  V({ attribute: !1 })
], M.prototype, "hass", 2);
k([
  V({ attribute: !1 })
], M.prototype, "config", 2);
k([
  $e()
], M.prototype, "_forecast", 2);
k([
  $e()
], M.prototype, "_hourlyForecast", 2);
k([
  $e()
], M.prototype, "_forecastLoading", 2);
k([
  $e()
], M.prototype, "_openWarnings", 2);
M = k([
  Xt("swissweather-card")
], M);
let ae = class extends U {
  hass;
  lovelace;
  _config;
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
      return p`<div>Loading...</div>`;
    It((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
    const i = [
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
        name: "show_warnings",
        selector: {
          boolean: {}
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
        name: "show_wind",
        selector: {
          boolean: {}
        }
      },
      {
        name: "enable_animate_weather_icons",
        selector: {
          boolean: {}
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
            mode: "box",
            unit_of_measurement: "h",
            step: 6
          }
        }
      },
      {
        name: "compact_mode",
        selector: {
          boolean: {}
        }
      }
    ], e = {
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

        <!-- HA Form -->
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${i}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._valueChanged}
        ></ha-form>

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
  _computeLabel = (i) => ({
    entity: u("config.entity"),
    show_location: u("config.show_location"),
    sun_entity: u("config.sun_entity"),
    location: u("config.location"),
    wind_entity: u("config.wind_entity"),
    wind_direction_entity: u("config.wind_direction_entity"),
    sunshine_entity: u("config.sunshine_entity"),
    warning_entity: u("config.warning_entity"),
    show_forecast: u("config.show_forecast"),
    forecast_hours: u("config.forecast_hours"),
    show_temperature: u("config.show_temperature"),
    show_precipitation: u("config.show_precipitation"),
    show_sunshine: u("config.show_sunshine"),
    show_warnings: u("config.show_warnings"),
    show_wind: u("config.show_wind"),
    enable_animate_weather_icons: u("config.enable_animate_weather_icons"),
    compact_mode: u("config.compact_mode")
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
      const e = {
        type: "custom:swissweather-card",
        ...i.detail.value
      };
      Object.keys(e).forEach((s) => {
        (e[s] === "" || e[s] === void 0) && delete e[s];
      }), this._config = e;
      const t = new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(t);
    }
  }
};
k([
  V({ attribute: !1 })
], ae.prototype, "hass", 2);
k([
  V({ attribute: !1 })
], ae.prototype, "lovelace", 2);
k([
  V({ attribute: !1 })
], ae.prototype, "_config", 2);
ae = k([
  Xt("swissweather-card-editor")
], ae);
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
  ae as SwissweatherCardEditor
};
//# sourceMappingURL=swissweather-card.js.map

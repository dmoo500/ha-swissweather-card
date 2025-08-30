const Ui = {
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
const Le = globalThis, rt = Le.ShadowRoot && (Le.ShadyCSS === void 0 || Le.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, at = Symbol(), Tt = /* @__PURE__ */ new WeakMap();
let Jt = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== at) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (rt && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = Tt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && Tt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Di = (i) => new Jt(typeof i == "string" ? i : i + "", void 0, at), ei = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce(((s, n, r) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[r + 1]), i[0]);
  return new Jt(t, i, at);
}, Oi = (i, e) => {
  if (rt) i.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const s = document.createElement("style"), n = Le.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = t.cssText, i.appendChild(s);
  }
}, Lt = rt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return Di(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gi, defineProperty: Ii, getOwnPropertyDescriptor: Bi, getOwnPropertyNames: Fi, getOwnPropertySymbols: ji, getPrototypeOf: Vi } = Object, Oe = globalThis, Nt = Oe.trustedTypes, Zi = Nt ? Nt.emptyScript : "", qi = Oe.reactiveElementPolyfillSupport, ue = (i, e) => i, Ee = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Zi : null;
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
} }, ot = (i, e) => !Gi(i, e), Et = { attribute: !0, type: String, converter: Ee, reflect: !1, useDefault: !1, hasChanged: ot };
Symbol.metadata ??= Symbol("metadata"), Oe.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Et) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = Symbol(), n = this.getPropertyDescriptor(e, s, t);
      n !== void 0 && Ii(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: n, set: r } = Bi(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get: n, set(a) {
      const o = n?.call(this);
      r?.call(this, a), this.requestUpdate(e, o, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Et;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ue("elementProperties"))) return;
    const e = Vi(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ue("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ue("properties"))) {
      const t = this.properties, s = [...Fi(t), ...ji(t)];
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
      for (const n of s) t.unshift(Lt(n));
    } else e !== void 0 && t.push(Lt(e));
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
    return Oi(e, this.constructor.elementStyles), e;
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
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : Ee).toAttribute(t, s.type);
      this._$Em = e, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const s = this.constructor, n = s._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const r = s.getPropertyOptions(n), a = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : Ee;
      this._$Em = n;
      const o = a.fromAttribute(t, r.type);
      this[n] = o ?? this._$Ej?.get(n) ?? o, this._$Em = null;
    }
  }
  requestUpdate(e, t, s) {
    if (e !== void 0) {
      const n = this.constructor, r = this[e];
      if (s ??= n.getPropertyOptions(e), !((s.hasChanged ?? ot)(r, t) || s.useDefault && s.reflect && r === this._$Ej?.get(e) && !this.hasAttribute(n._$Eu(e, s)))) return;
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
        const { wrapped: a } = r, o = this[n];
        a !== !0 || this._$AL.has(n) || o === void 0 || this.C(n, void 0, r, o);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[ue("elementProperties")] = /* @__PURE__ */ new Map(), J[ue("finalized")] = /* @__PURE__ */ new Map(), qi?.({ ReactiveElement: J }), (Oe.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt = globalThis, Re = lt.trustedTypes, Rt = Re ? Re.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ti = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, ii = "?" + I, Qi = `<${ii}>`, Q = document, me = () => Q.createComment(""), ye = (i) => i === null || typeof i != "object" && typeof i != "function", ct = Array.isArray, Yi = (i) => ct(i) || typeof i?.[Symbol.iterator] == "function", Ve = `[ 	
\f\r]`, ce = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Pt = /-->/g, Wt = />/g, j = RegExp(`>|${Ve}(?:([^\\s"'>=/]+)(${Ve}*=${Ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), zt = /'/g, Ht = /"/g, ni = /^(?:script|style|textarea|title)$/i, si = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), p = si(1), P = si(2), te = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), Ut = /* @__PURE__ */ new WeakMap(), Z = Q.createTreeWalker(Q, 129);
function ri(i, e) {
  if (!ct(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Rt !== void 0 ? Rt.createHTML(e) : e;
}
const Ki = (i, e) => {
  const t = i.length - 1, s = [];
  let n, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = ce;
  for (let o = 0; o < t; o++) {
    const l = i[o];
    let c, h, d = -1, f = 0;
    for (; f < l.length && (a.lastIndex = f, h = a.exec(l), h !== null); ) f = a.lastIndex, a === ce ? h[1] === "!--" ? a = Pt : h[1] !== void 0 ? a = Wt : h[2] !== void 0 ? (ni.test(h[2]) && (n = RegExp("</" + h[2], "g")), a = j) : h[3] !== void 0 && (a = j) : a === j ? h[0] === ">" ? (a = n ?? ce, d = -1) : h[1] === void 0 ? d = -2 : (d = a.lastIndex - h[2].length, c = h[1], a = h[3] === void 0 ? j : h[3] === '"' ? Ht : zt) : a === Ht || a === zt ? a = j : a === Pt || a === Wt ? a = ce : (a = j, n = void 0);
    const u = a === j && i[o + 1].startsWith("/>") ? " " : "";
    r += a === ce ? l + Qi : d >= 0 ? (s.push(c), l.slice(0, d) + ti + l.slice(d) + I + u) : l + I + (d === -2 ? o : u);
  }
  return [ri(i, r + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
let Ke = class ai {
  constructor({ strings: e, _$litType$: t }, s) {
    let n;
    this.parts = [];
    let r = 0, a = 0;
    const o = e.length - 1, l = this.parts, [c, h] = Ki(e, t);
    if (this.el = ai.createElement(c, s), Z.currentNode = this.el.content, t === 2 || t === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (n = Z.nextNode()) !== null && l.length < o; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const d of n.getAttributeNames()) if (d.endsWith(ti)) {
          const f = h[a++], u = n.getAttribute(d).split(I), y = /([.?@])?(.*)/.exec(f);
          l.push({ type: 1, index: r, name: y[2], strings: u, ctor: y[1] === "." ? Ji : y[1] === "?" ? en : y[1] === "@" ? tn : Ge }), n.removeAttribute(d);
        } else d.startsWith(I) && (l.push({ type: 6, index: r }), n.removeAttribute(d));
        if (ni.test(n.tagName)) {
          const d = n.textContent.split(I), f = d.length - 1;
          if (f > 0) {
            n.textContent = Re ? Re.emptyScript : "";
            for (let u = 0; u < f; u++) n.append(d[u], me()), Z.nextNode(), l.push({ type: 2, index: ++r });
            n.append(d[f], me());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ii) l.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = n.data.indexOf(I, d + 1)) !== -1; ) l.push({ type: 7, index: r }), d += I.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const s = Q.createElement("template");
    return s.innerHTML = e, s;
  }
};
function ie(i, e, t = i, s) {
  if (e === te) return e;
  let n = s !== void 0 ? t._$Co?.[s] : t._$Cl;
  const r = ye(e) ? void 0 : e._$litDirective$;
  return n?.constructor !== r && (n?._$AO?.(!1), r === void 0 ? n = void 0 : (n = new r(i), n._$AT(i, t, s)), s !== void 0 ? (t._$Co ??= [])[s] = n : t._$Cl = n), n !== void 0 && (e = ie(i, n._$AS(i, e.values), n, s)), e;
}
let Xi = class {
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
    const { el: { content: t }, parts: s } = this._$AD, n = (e?.creationScope ?? Q).importNode(t, !0);
    Z.currentNode = n;
    let r = Z.nextNode(), a = 0, o = 0, l = s[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let c;
        l.type === 2 ? c = new ht(r, r.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(r, l.name, l.strings, this, e) : l.type === 6 && (c = new nn(r, this, e)), this._$AV.push(c), l = s[++o];
      }
      a !== l?.index && (r = Z.nextNode(), a++);
    }
    return Z.currentNode = Q, n;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}, ht = class oi {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, s, n) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = n, this._$Cv = n?.isConnected ?? !0;
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
    e = ie(this, e, t), ye(e) ? e === A || e == null || e === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : e !== this._$AH && e !== te && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Yi(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== A && ye(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Q.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: s } = e, n = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = Ke.createElement(ri(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === n) this._$AH.p(t);
    else {
      const r = new Xi(n, this), a = r.u(this.options);
      r.p(t), this.T(a), this._$AH = r;
    }
  }
  _$AC(e) {
    let t = Ut.get(e.strings);
    return t === void 0 && Ut.set(e.strings, t = new Ke(e)), t;
  }
  k(e) {
    ct(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, n = 0;
    for (const r of e) n === t.length ? t.push(s = new oi(this.O(me()), this.O(me()), this, this.options)) : s = t[n], s._$AI(r), n++;
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
}, Ge = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, n, r) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = A;
  }
  _$AI(e, t = this, s, n) {
    const r = this.strings;
    let a = !1;
    if (r === void 0) e = ie(this, e, t, 0), a = !ye(e) || e !== this._$AH && e !== te, a && (this._$AH = e);
    else {
      const o = e;
      let l, c;
      for (e = r[0], l = 0; l < r.length - 1; l++) c = ie(this, o[s + l], t, l), c === te && (c = this._$AH[l]), a ||= !ye(c) || c !== this._$AH[l], c === A ? e = A : e !== A && (e += (c ?? "") + r[l + 1]), this._$AH[l] = c;
    }
    a && !n && this.j(e);
  }
  j(e) {
    e === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, Ji = class extends Ge {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === A ? void 0 : e;
  }
}, en = class extends Ge {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== A);
  }
}, tn = class extends Ge {
  constructor(e, t, s, n, r) {
    super(e, t, s, n, r), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ie(this, e, t, 0) ?? A) === te) return;
    const s = this._$AH, n = e === A && s !== A || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, r = e !== A && (s === A || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, nn = class {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ie(this, e);
  }
};
const sn = lt.litHtmlPolyfillSupport;
sn?.(Ke, ht), (lt.litHtmlVersions ??= []).push("3.3.1");
const rn = (i, e, t) => {
  const s = t?.renderBefore ?? e;
  let n = s._$litPart$;
  if (n === void 0) {
    const r = t?.renderBefore ?? null;
    s._$litPart$ = n = new ht(e.insertBefore(me(), r), r, void 0, t ?? {});
  }
  return n._$AI(i), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt = globalThis;
let ee = class extends J {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = rn(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return te;
  }
};
ee._$litElement$ = !0, ee.finalized = !0, dt.litElementHydrateSupport?.({ LitElement: ee });
const an = dt.litElementPolyfillSupport;
an?.({ LitElement: ee });
(dt.litElementVersions ??= []).push("4.2.1");
const Xe = "langChanged";
function on(i, e, t) {
  return Object.entries(Je(e || {})).reduce((s, [n, r]) => s.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Je(r))), i);
}
function ln(i, e) {
  const t = i.split(".");
  let s = e.strings;
  for (; s != null && t.length > 0; )
    s = s[t.shift()];
  return s != null ? s.toString() : null;
}
function Je(i) {
  return typeof i == "function" ? i() : i;
}
const cn = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: ln,
  interpolate: on,
  translationCache: {}
});
let we = cn();
function hn(i) {
  return we = Object.assign(Object.assign({}, we), i);
}
function dn(i) {
  window.dispatchEvent(new CustomEvent(Xe, { detail: i }));
}
function pn(i, e, t = we) {
  dn({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function un(i, e) {
  const t = (s) => i(s.detail);
  return window.addEventListener(Xe, t, e), () => window.removeEventListener(Xe, t);
}
async function li(i, e = we) {
  const t = await e.loader(i, e);
  e.translationCache = {}, pn(i, t, e);
}
function fn(i, e, t = we) {
  let s = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? Je(e) : null, e != null ? t.interpolate(s, e, t) : s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ci = { CHILD: 2 }, gn = (i) => (...e) => ({ _$litDirective$: i, values: e });
let hi = class {
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
var Ze;
const Pe = window, ne = Pe.trustedTypes, Dt = ne ? ne.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, et = "$lit$", B = `lit$${(Math.random() + "").slice(9)}$`, di = "?" + B, mn = `<${di}>`, Y = document, We = () => Y.createComment(""), ve = (i) => i === null || typeof i != "object" && typeof i != "function", pi = Array.isArray, yn = (i) => pi(i) || typeof i?.[Symbol.iterator] == "function", qe = `[ 	
\f\r]`, he = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ot = /-->/g, Gt = />/g, V = RegExp(`>|${qe}(?:([^\\s"'>=/]+)(${qe}*=${qe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), It = /'/g, Bt = /"/g, ui = /^(?:script|style|textarea|title)$/i, se = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), Ft = /* @__PURE__ */ new WeakMap(), q = Y.createTreeWalker(Y, 129, null, !1);
function fi(i, e) {
  if (!Array.isArray(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Dt !== void 0 ? Dt.createHTML(e) : e;
}
const wn = (i, e) => {
  const t = i.length - 1, s = [];
  let n, r = e === 2 ? "<svg>" : "", a = he;
  for (let o = 0; o < t; o++) {
    const l = i[o];
    let c, h, d = -1, f = 0;
    for (; f < l.length && (a.lastIndex = f, h = a.exec(l), h !== null); ) f = a.lastIndex, a === he ? h[1] === "!--" ? a = Ot : h[1] !== void 0 ? a = Gt : h[2] !== void 0 ? (ui.test(h[2]) && (n = RegExp("</" + h[2], "g")), a = V) : h[3] !== void 0 && (a = V) : a === V ? h[0] === ">" ? (a = n ?? he, d = -1) : h[1] === void 0 ? d = -2 : (d = a.lastIndex - h[2].length, c = h[1], a = h[3] === void 0 ? V : h[3] === '"' ? Bt : It) : a === Bt || a === It ? a = V : a === Ot || a === Gt ? a = he : (a = V, n = void 0);
    const u = a === V && i[o + 1].startsWith("/>") ? " " : "";
    r += a === he ? l + mn : d >= 0 ? (s.push(c), l.slice(0, d) + et + l.slice(d) + B + u) : l + B + (d === -2 ? (s.push(void 0), o) : u);
  }
  return [fi(i, r + (i[t] || "<?>") + (e === 2 ? "</svg>" : "")), s];
};
let tt = class gi {
  constructor({ strings: e, _$litType$: t }, s) {
    let n;
    this.parts = [];
    let r = 0, a = 0;
    const o = e.length - 1, l = this.parts, [c, h] = wn(e, t);
    if (this.el = gi.createElement(c, s), q.currentNode = this.el.content, t === 2) {
      const d = this.el.content, f = d.firstChild;
      f.remove(), d.append(...f.childNodes);
    }
    for (; (n = q.nextNode()) !== null && l.length < o; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const d = [];
          for (const f of n.getAttributeNames()) if (f.endsWith(et) || f.startsWith(B)) {
            const u = h[a++];
            if (d.push(f), u !== void 0) {
              const y = n.getAttribute(u.toLowerCase() + et).split(B), b = /([.?@])?(.*)/.exec(u);
              l.push({ type: 1, index: r, name: b[2], strings: y, ctor: b[1] === "." ? xn : b[1] === "?" ? _n : b[1] === "@" ? $n : Ie });
            } else l.push({ type: 6, index: r });
          }
          for (const f of d) n.removeAttribute(f);
        }
        if (ui.test(n.tagName)) {
          const d = n.textContent.split(B), f = d.length - 1;
          if (f > 0) {
            n.textContent = ne ? ne.emptyScript : "";
            for (let u = 0; u < f; u++) n.append(d[u], We()), q.nextNode(), l.push({ type: 2, index: ++r });
            n.append(d[f], We());
          }
        }
      } else if (n.nodeType === 8) if (n.data === di) l.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = n.data.indexOf(B, d + 1)) !== -1; ) l.push({ type: 7, index: r }), d += B.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const s = Y.createElement("template");
    return s.innerHTML = e, s;
  }
};
function re(i, e, t = i, s) {
  var n, r, a, o;
  if (e === se) return e;
  let l = s !== void 0 ? (n = t._$Co) === null || n === void 0 ? void 0 : n[s] : t._$Cl;
  const c = ve(e) ? void 0 : e._$litDirective$;
  return l?.constructor !== c && ((r = l?._$AO) === null || r === void 0 || r.call(l, !1), c === void 0 ? l = void 0 : (l = new c(i), l._$AT(i, t, s)), s !== void 0 ? ((a = (o = t)._$Co) !== null && a !== void 0 ? a : o._$Co = [])[s] = l : t._$Cl = l), l !== void 0 && (e = re(i, l._$AS(i, e.values), l, s)), e;
}
let vn = class {
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
    const { el: { content: s }, parts: n } = this._$AD, r = ((t = e?.creationScope) !== null && t !== void 0 ? t : Y).importNode(s, !0);
    q.currentNode = r;
    let a = q.nextNode(), o = 0, l = 0, c = n[0];
    for (; c !== void 0; ) {
      if (o === c.index) {
        let h;
        c.type === 2 ? h = new mi(a, a.nextSibling, this, e) : c.type === 1 ? h = new c.ctor(a, c.name, c.strings, this, e) : c.type === 6 && (h = new kn(a, this, e)), this._$AV.push(h), c = n[++l];
      }
      o !== c?.index && (a = q.nextNode(), o++);
    }
    return q.currentNode = Y, r;
  }
  v(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}, mi = class yi {
  constructor(e, t, s, n) {
    var r;
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = n, this._$Cp = (r = n?.isConnected) === null || r === void 0 || r;
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
    e = re(this, e, t), ve(e) ? e === $ || e == null || e === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : e !== this._$AH && e !== se && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : yn(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== $ && ve(this._$AH) ? this._$AA.nextSibling.data = e : this.$(Y.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var t;
    const { values: s, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = tt.createElement(fi(n.h, n.h[0]), this.options)), n);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === r) this._$AH.v(s);
    else {
      const a = new vn(r, this), o = a.u(this.options);
      a.v(s), this.$(o), this._$AH = a;
    }
  }
  _$AC(e) {
    let t = Ft.get(e.strings);
    return t === void 0 && Ft.set(e.strings, t = new tt(e)), t;
  }
  T(e) {
    pi(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, n = 0;
    for (const r of e) n === t.length ? t.push(s = new yi(this.k(We()), this.k(We()), this, this.options)) : s = t[n], s._$AI(r), n++;
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
class Ie {
  constructor(e, t, s, n, r) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = $;
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
    if (r === void 0) e = re(this, e, t, 0), a = !ve(e) || e !== this._$AH && e !== se, a && (this._$AH = e);
    else {
      const o = e;
      let l, c;
      for (e = r[0], l = 0; l < r.length - 1; l++) c = re(this, o[s + l], t, l), c === se && (c = this._$AH[l]), a || (a = !ve(c) || c !== this._$AH[l]), c === $ ? e = $ : e !== $ && (e += (c ?? "") + r[l + 1]), this._$AH[l] = c;
    }
    a && !n && this.j(e);
  }
  j(e) {
    e === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
let xn = class extends Ie {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === $ ? void 0 : e;
  }
};
const bn = ne ? ne.emptyScript : "";
let _n = class extends Ie {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== $ ? this.element.setAttribute(this.name, bn) : this.element.removeAttribute(this.name);
  }
}, $n = class extends Ie {
  constructor(e, t, s, n, r) {
    super(e, t, s, n, r), this.type = 5;
  }
  _$AI(e, t = this) {
    var s;
    if ((e = (s = re(this, e, t, 0)) !== null && s !== void 0 ? s : $) === se) return;
    const n = this._$AH, r = e === $ && n !== $ || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, a = e !== $ && (n === $ || r);
    r && this.element.removeEventListener(this.name, this, n), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && s !== void 0 ? s : this.element, e) : this._$AH.handleEvent(e);
  }
};
class kn {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    re(this, e);
  }
}
const jt = Pe.litHtmlPolyfillSupport;
jt?.(tt, mi), ((Ze = Pe.litHtmlVersions) !== null && Ze !== void 0 ? Ze : Pe.litHtmlVersions = []).push("2.8.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const An = (i) => i.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fe = (i, e) => {
  var t, s;
  const n = i._$AN;
  if (n === void 0) return !1;
  for (const r of n) (s = (t = r)._$AO) === null || s === void 0 || s.call(t, e, !1), fe(r, e);
  return !0;
}, ze = (i) => {
  let e, t;
  do {
    if ((e = i._$AM) === void 0) break;
    t = e._$AN, t.delete(i), i = e;
  } while (t?.size === 0);
}, wi = (i) => {
  for (let e; e = i._$AM; i = e) {
    let t = e._$AN;
    if (t === void 0) e._$AN = t = /* @__PURE__ */ new Set();
    else if (t.has(i)) break;
    t.add(i), Mn(e);
  }
};
function Cn(i) {
  this._$AN !== void 0 ? (ze(this), this._$AM = i, wi(this)) : this._$AM = i;
}
function Sn(i, e = !1, t = 0) {
  const s = this._$AH, n = this._$AN;
  if (n !== void 0 && n.size !== 0) if (e) if (Array.isArray(s)) for (let r = t; r < s.length; r++) fe(s[r], !1), ze(s[r]);
  else s != null && (fe(s, !1), ze(s));
  else fe(this, i);
}
const Mn = (i) => {
  var e, t, s, n;
  i.type == ci.CHILD && ((e = (s = i)._$AP) !== null && e !== void 0 || (s._$AP = Sn), (t = (n = i)._$AQ) !== null && t !== void 0 || (n._$AQ = Cn));
};
class Tn extends hi {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, t, s) {
    super._$AT(e, t, s), wi(this), this.isConnected = e._$AU;
  }
  _$AO(e, t = !0) {
    var s, n;
    e !== this.isConnected && (this.isConnected = e, e ? (s = this.reconnected) === null || s === void 0 || s.call(this) : (n = this.disconnected) === null || n === void 0 || n.call(this)), t && (fe(this, e), ze(this));
  }
  setValue(e) {
    if (An(this._$Ct)) this._$Ct._$AI(e, this);
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
class Ln extends Tn {
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
    this.langChangedSubscription == null && (this.langChangedSubscription = un(this.langChanged.bind(this)));
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
class Nn extends Ln {
  render(e, t, s) {
    return this.renderValue(() => fn(e, t, s));
  }
}
const m = gn(Nn);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Vt extends hi {
  constructor(e) {
    if (super(e), this.et = $, e.type !== ci.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === $ || e == null) return this.ft = void 0, this.et = e;
    if (e === se) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.et) return this.ft;
    this.et = e;
    const t = [e];
    return t.raw = t, this.ft = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
Vt.directiveName = "unsafeHTML", Vt.resultType = 1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vi = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer((() => {
    customElements.define(i, e);
  })) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const En = { attribute: !0, type: String, converter: Ee, reflect: !1, hasChanged: ot }, Rn = (i = En, e, t) => {
  const { kind: s, metadata: n } = t;
  let r = globalThis.litPropertyMetadata.get(n);
  if (r === void 0 && globalThis.litPropertyMetadata.set(n, r = /* @__PURE__ */ new Map()), s === "setter" && ((i = Object.create(i)).wrapped = !0), r.set(t.name, i), s === "accessor") {
    const { name: a } = t;
    return { set(o) {
      const l = e.get.call(this);
      e.set.call(this, o), this.requestUpdate(a, l, i);
    }, init(o) {
      return o !== void 0 && this.C(a, void 0, i, o), o;
    } };
  }
  if (s === "setter") {
    const { name: a } = t;
    return function(o) {
      const l = this[a];
      e.call(this, o), this.requestUpdate(a, l, i);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function ae(i) {
  return (e, t) => typeof t == "object" ? Rn(i, e, t) : ((s, n, r) => {
    const a = n.hasOwnProperty(r);
    return n.constructor.createProperty(r, s), a ? Object.getOwnPropertyDescriptor(n, r) : void 0;
  })(i, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Be(i) {
  return ae({ ...i, state: !0, attribute: !1 });
}
function pt() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var X = pt();
function xi(i) {
  X = i;
}
var ge = { exec: () => null };
function v(i, e = "") {
  let t = typeof i == "string" ? i : i.source, s = { replace: (n, r) => {
    let a = typeof r == "string" ? r : r.source;
    return a = a.replace(T.caret, "$1"), t = t.replace(n, a), s;
  }, getRegex: () => new RegExp(t, e) };
  return s;
}
var T = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (i) => new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}#`), htmlBeginRegex: (i) => new RegExp(`^ {0,${Math.min(3, i - 1)}}<(?:[a-z].*>|!--)`, "i") }, Pn = /^(?:[ \t]*(?:\n|$))+/, Wn = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, zn = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, be = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Hn = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ut = /(?:[*+-]|\d{1,9}[.)])/, bi = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _i = v(bi).replace(/bull/g, ut).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Un = v(bi).replace(/bull/g, ut).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ft = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Dn = /^[^\n]+/, gt = /(?!\s*\])(?:\\.|[^\[\]\\])+/, On = v(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", gt).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Gn = v(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ut).getRegex(), Fe = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", mt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, In = v("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", mt).replace("tag", Fe).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), $i = v(ft).replace("hr", be).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Fe).getRegex(), Bn = v(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", $i).getRegex(), yt = { blockquote: Bn, code: Wn, def: On, fences: zn, heading: Hn, hr: be, html: In, lheading: _i, list: Gn, newline: Pn, paragraph: $i, table: ge, text: Dn }, Zt = v("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", be).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Fe).getRegex(), Fn = { ...yt, lheading: Un, table: Zt, paragraph: v(ft).replace("hr", be).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Zt).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Fe).getRegex() }, jn = { ...yt, html: v(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", mt).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: ge, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: v(ft).replace("hr", be).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", _i).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Vn = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Zn = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ki = /^( {2,}|\\)\n(?!\s*$)/, qn = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, je = /[\p{P}\p{S}]/u, wt = /[\s\p{P}\p{S}]/u, Ai = /[^\s\p{P}\p{S}]/u, Qn = v(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, wt).getRegex(), Ci = /(?!~)[\p{P}\p{S}]/u, Yn = /(?!~)[\s\p{P}\p{S}]/u, Kn = /(?:[^\s\p{P}\p{S}]|~)/u, Xn = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, Si = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Jn = v(Si, "u").replace(/punct/g, je).getRegex(), es = v(Si, "u").replace(/punct/g, Ci).getRegex(), Mi = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", ts = v(Mi, "gu").replace(/notPunctSpace/g, Ai).replace(/punctSpace/g, wt).replace(/punct/g, je).getRegex(), is = v(Mi, "gu").replace(/notPunctSpace/g, Kn).replace(/punctSpace/g, Yn).replace(/punct/g, Ci).getRegex(), ns = v("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ai).replace(/punctSpace/g, wt).replace(/punct/g, je).getRegex(), ss = v(/\\(punct)/, "gu").replace(/punct/g, je).getRegex(), rs = v(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), as = v(mt).replace("(?:-->|$)", "-->").getRegex(), os = v("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", as).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), He = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, ls = v(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", He).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ti = v(/^!?\[(label)\]\[(ref)\]/).replace("label", He).replace("ref", gt).getRegex(), Li = v(/^!?\[(ref)\](?:\[\])?/).replace("ref", gt).getRegex(), cs = v("reflink|nolink(?!\\()", "g").replace("reflink", Ti).replace("nolink", Li).getRegex(), vt = { _backpedal: ge, anyPunctuation: ss, autolink: rs, blockSkip: Xn, br: ki, code: Zn, del: ge, emStrongLDelim: Jn, emStrongRDelimAst: ts, emStrongRDelimUnd: ns, escape: Vn, link: ls, nolink: Li, punctuation: Qn, reflink: Ti, reflinkSearch: cs, tag: os, text: qn, url: ge }, hs = { ...vt, link: v(/^!?\[(label)\]\((.*?)\)/).replace("label", He).getRegex(), reflink: v(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", He).getRegex() }, it = { ...vt, emStrongRDelimAst: is, emStrongLDelim: es, url: v(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, ds = { ...it, br: v(ki).replace("{2,}", "*").getRegex(), text: v(it.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Te = { normal: yt, gfm: Fn, pedantic: jn }, de = { normal: vt, gfm: it, breaks: ds, pedantic: hs }, ps = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, qt = (i) => ps[i];
function z(i, e) {
  if (e) {
    if (T.escapeTest.test(i)) return i.replace(T.escapeReplace, qt);
  } else if (T.escapeTestNoEncode.test(i)) return i.replace(T.escapeReplaceNoEncode, qt);
  return i;
}
function Qt(i) {
  try {
    i = encodeURI(i).replace(T.percentDecode, "%");
  } catch {
    return null;
  }
  return i;
}
function Yt(i, e) {
  let t = i.replace(T.findPipe, (r, a, o) => {
    let l = !1, c = a;
    for (; --c >= 0 && o[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), s = t.split(T.splitPipe), n = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e) if (s.length > e) s.splice(e);
  else for (; s.length < e; ) s.push("");
  for (; n < s.length; n++) s[n] = s[n].trim().replace(T.slashPipe, "|");
  return s;
}
function pe(i, e, t) {
  let s = i.length;
  if (s === 0) return "";
  let n = 0;
  for (; n < s && i.charAt(s - n - 1) === e; )
    n++;
  return i.slice(0, s - n);
}
function us(i, e) {
  if (i.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let s = 0; s < i.length; s++) if (i[s] === "\\") s++;
  else if (i[s] === e[0]) t++;
  else if (i[s] === e[1] && (t--, t < 0)) return s;
  return t > 0 ? -2 : -1;
}
function Kt(i, e, t, s, n) {
  let r = e.href, a = e.title || null, o = i[1].replace(n.other.outputLinkReplace, "$1");
  s.state.inLink = !0;
  let l = { type: i[0].charAt(0) === "!" ? "image" : "link", raw: t, href: r, title: a, text: o, tokens: s.inlineTokens(o) };
  return s.state.inLink = !1, l;
}
function fs(i, e, t) {
  let s = i.match(t.other.indentCodeCompensation);
  if (s === null) return e;
  let n = s[1];
  return e.split(`
`).map((r) => {
    let a = r.match(t.other.beginningSpace);
    if (a === null) return r;
    let [o] = a;
    return o.length >= n.length ? r.slice(n.length) : r;
  }).join(`
`);
}
var Ue = class {
  options;
  rules;
  lexer;
  constructor(i) {
    this.options = i || X;
  }
  space(i) {
    let e = this.rules.block.newline.exec(i);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(i) {
    let e = this.rules.block.code.exec(i);
    if (e) {
      let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : pe(t, `
`) };
    }
  }
  fences(i) {
    let e = this.rules.block.fences.exec(i);
    if (e) {
      let t = e[0], s = fs(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: s };
    }
  }
  heading(i) {
    let e = this.rules.block.heading.exec(i);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let s = pe(t, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (t = s.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(i) {
    let e = this.rules.block.hr.exec(i);
    if (e) return { type: "hr", raw: pe(e[0], `
`) };
  }
  blockquote(i) {
    let e = this.rules.block.blockquote.exec(i);
    if (e) {
      let t = pe(e[0], `
`).split(`
`), s = "", n = "", r = [];
      for (; t.length > 0; ) {
        let a = !1, o = [], l;
        for (l = 0; l < t.length; l++) if (this.rules.other.blockquoteStart.test(t[l])) o.push(t[l]), a = !0;
        else if (!a) o.push(t[l]);
        else break;
        t = t.slice(l);
        let c = o.join(`
`), h = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${c}` : c, n = n ? `${n}
${h}` : h;
        let d = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(h, r, !0), this.lexer.state.top = d, t.length === 0) break;
        let f = r.at(-1);
        if (f?.type === "code") break;
        if (f?.type === "blockquote") {
          let u = f, y = u.raw + `
` + t.join(`
`), b = this.blockquote(y);
          r[r.length - 1] = b, s = s.substring(0, s.length - u.raw.length) + b.raw, n = n.substring(0, n.length - u.text.length) + b.text;
          break;
        } else if (f?.type === "list") {
          let u = f, y = u.raw + `
` + t.join(`
`), b = this.list(y);
          r[r.length - 1] = b, s = s.substring(0, s.length - f.raw.length) + b.raw, n = n.substring(0, n.length - u.raw.length) + b.raw, t = y.substring(r.at(-1).raw.length).split(`
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
        let l = !1, c = "", h = "";
        if (!(e = r.exec(i)) || this.rules.block.hr.test(i)) break;
        c = e[0], i = i.substring(c.length);
        let d = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (oe) => " ".repeat(3 * oe.length)), f = i.split(`
`, 1)[0], u = !d.trim(), y = 0;
        if (this.options.pedantic ? (y = 2, h = d.trimStart()) : u ? y = e[1].length + 1 : (y = e[2].search(this.rules.other.nonSpaceChar), y = y > 4 ? 1 : y, h = d.slice(y), y += e[1].length), u && this.rules.other.blankLine.test(f) && (c += f + `
`, i = i.substring(f.length + 1), l = !0), !l) {
          let oe = this.rules.other.nextBulletRegex(y), _e = this.rules.other.hrRegex(y), $e = this.rules.other.fencesBeginRegex(y), E = this.rules.other.headingBeginRegex(y), L = this.rules.other.htmlBeginRegex(y);
          for (; i; ) {
            let O = i.split(`
`, 1)[0], G;
            if (f = O, this.options.pedantic ? (f = f.replace(this.rules.other.listReplaceNesting, "  "), G = f) : G = f.replace(this.rules.other.tabCharGlobal, "    "), $e.test(f) || E.test(f) || L.test(f) || oe.test(f) || _e.test(f)) break;
            if (G.search(this.rules.other.nonSpaceChar) >= y || !f.trim()) h += `
` + G.slice(y);
            else {
              if (u || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || $e.test(d) || E.test(d) || _e.test(d)) break;
              h += `
` + f;
            }
            !u && !f.trim() && (u = !0), c += O + `
`, i = i.substring(O.length + 1), d = G.slice(y);
          }
        }
        n.loose || (a ? n.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (a = !0));
        let b = null, N;
        this.options.gfm && (b = this.rules.other.listIsTask.exec(h), b && (N = b[0] !== "[ ] ", h = h.replace(this.rules.other.listReplaceTask, ""))), n.items.push({ type: "list_item", raw: c, task: !!b, checked: N, loose: !1, text: h, tokens: [] }), n.raw += c;
      }
      let o = n.items.at(-1);
      if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else return;
      n.raw = n.raw.trimEnd();
      for (let l = 0; l < n.items.length; l++) if (this.lexer.state.top = !1, n.items[l].tokens = this.lexer.blockTokens(n.items[l].text, []), !n.loose) {
        let c = n.items[l].tokens.filter((d) => d.type === "space"), h = c.length > 0 && c.some((d) => this.rules.other.anyLine.test(d.raw));
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
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: s, title: n };
    }
  }
  table(i) {
    let e = this.rules.block.table.exec(i);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = Yt(e[1]), s = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), n = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], r = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === s.length) {
      for (let a of s) this.rules.other.tableAlignRight.test(a) ? r.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? r.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? r.align.push("left") : r.align.push(null);
      for (let a = 0; a < t.length; a++) r.header.push({ text: t[a], tokens: this.lexer.inline(t[a]), header: !0, align: r.align[a] });
      for (let a of n) r.rows.push(Yt(a, r.header.length).map((o, l) => ({ text: o, tokens: this.lexer.inline(o), header: !1, align: r.align[l] })));
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
        let r = pe(t.slice(0, -1), "\\");
        if ((t.length - r.length) % 2 === 0) return;
      } else {
        let r = us(e[2], "()");
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
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? s = s.slice(1) : s = s.slice(1, -1)), Kt(e, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: n && n.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
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
      return Kt(t, n, t[0], this.lexer, this.rules);
    }
  }
  emStrong(i, e, t = "") {
    let s = this.rules.inline.emStrongLDelim.exec(i);
    if (!(!s || s[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !t || this.rules.inline.punctuation.exec(t))) {
      let n = [...s[0]].length - 1, r, a, o = n, l = 0, c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, e = e.slice(-1 * i.length + n); (s = c.exec(e)) != null; ) {
        if (r = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !r) continue;
        if (a = [...r].length, s[3] || s[4]) {
          o += a;
          continue;
        } else if ((s[5] || s[6]) && n % 3 && !((n + a) % 3)) {
          l += a;
          continue;
        }
        if (o -= a, o > 0) continue;
        a = Math.min(a, a + o + l);
        let h = [...s[0]][0].length, d = i.slice(0, n + s.index + h + a);
        if (Math.min(n, a) % 2) {
          let u = d.slice(1, -1);
          return { type: "em", raw: d, text: u, tokens: this.lexer.inlineTokens(u) };
        }
        let f = d.slice(2, -2);
        return { type: "strong", raw: d, text: f, tokens: this.lexer.inlineTokens(f) };
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
}, U = class nt {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || X, this.options.tokenizer = this.options.tokenizer || new Ue(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: T, block: Te.normal, inline: de.normal };
    this.options.pedantic ? (t.block = Te.pedantic, t.inline = de.pedantic) : this.options.gfm && (t.block = Te.gfm, this.options.breaks ? t.inline = de.breaks : t.inline = de.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Te, inline: de };
  }
  static lex(e, t) {
    return new nt(t).lex(e);
  }
  static lexInline(e, t) {
    return new nt(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(T.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let s = this.inlineQueue[t];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], s = !1) {
    for (this.options.pedantic && (e = e.replace(T.tabCharGlobal, "    ").replace(T.spaceLine, "")); e; ) {
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
        let a = 1 / 0, o = e.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, o), typeof l == "number" && l >= 0 && (a = Math.min(a, l));
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
      let o = Object.keys(this.tokens.links);
      if (o.length > 0) for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; ) o.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; ) s = s.slice(0, n.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; ) s = s.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let r = !1, a = "";
    for (; e; ) {
      r || (a = ""), r = !1;
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
      if (o = this.tokenizer.emStrong(e, s, a)) {
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
        let c = 1 / 0, h = e.slice(1), d;
        this.options.extensions.startInline.forEach((f) => {
          d = f.call({ lexer: this }, h), typeof d == "number" && d >= 0 && (c = Math.min(c, d));
        }), c < 1 / 0 && c >= 0 && (l = e.substring(0, c + 1));
      }
      if (o = this.tokenizer.inlineText(l)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (a = o.raw.slice(-1)), r = !0;
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
}, De = class {
  options;
  parser;
  constructor(i) {
    this.options = i || X;
  }
  space(i) {
    return "";
  }
  code({ text: i, lang: e, escaped: t }) {
    let s = (e || "").match(T.notSpaceStart)?.[0], n = i.replace(T.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + z(s) + '">' + (t ? n : z(n, !0)) + `</code></pre>
` : "<pre><code>" + (t ? n : z(n, !0)) + `</code></pre>
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
      let o = i.items[a];
      s += this.listitem(o);
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
      i.loose ? i.tokens[0]?.type === "paragraph" ? (i.tokens[0].text = t + " " + i.tokens[0].text, i.tokens[0].tokens && i.tokens[0].tokens.length > 0 && i.tokens[0].tokens[0].type === "text" && (i.tokens[0].tokens[0].text = t + " " + z(i.tokens[0].tokens[0].text), i.tokens[0].tokens[0].escaped = !0)) : i.tokens.unshift({ type: "text", raw: t + " ", text: t + " ", escaped: !0 }) : e += t + " ";
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
    return `<code>${z(i, !0)}</code>`;
  }
  br(i) {
    return "<br>";
  }
  del({ tokens: i }) {
    return `<del>${this.parser.parseInline(i)}</del>`;
  }
  link({ href: i, title: e, tokens: t }) {
    let s = this.parser.parseInline(t), n = Qt(i);
    if (n === null) return s;
    i = n;
    let r = '<a href="' + i + '"';
    return e && (r += ' title="' + z(e) + '"'), r += ">" + s + "</a>", r;
  }
  image({ href: i, title: e, text: t, tokens: s }) {
    s && (t = this.parser.parseInline(s, this.parser.textRenderer));
    let n = Qt(i);
    if (n === null) return z(t);
    i = n;
    let r = `<img src="${i}" alt="${t}"`;
    return e && (r += ` title="${z(e)}"`), r += ">", r;
  }
  text(i) {
    return "tokens" in i && i.tokens ? this.parser.parseInline(i.tokens) : "escaped" in i && i.escaped ? i.text : z(i.text);
  }
}, xt = class {
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
}, D = class st {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || X, this.options.renderer = this.options.renderer || new De(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new xt();
  }
  static parse(e, t) {
    return new st(t).parse(e);
  }
  static parseInline(e, t) {
    return new st(t).parseInline(e);
  }
  parse(e, t = !0) {
    let s = "";
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (this.options.extensions?.renderers?.[r.type]) {
        let o = r, l = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o.type)) {
          s += l || "";
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
          let o = a, l = this.renderer.text(o);
          for (; n + 1 < e.length && e[n + 1].type === "text"; ) o = e[++n], l += `
` + this.renderer.text(o);
          t ? s += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: !0 }] }) : s += l;
          continue;
        }
        default: {
          let o = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
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
        let o = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          s += o || "";
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
          let o = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return s;
  }
}, Ne = class {
  options;
  block;
  constructor(i) {
    this.options = i || X;
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
    return this.block ? U.lex : U.lexInline;
  }
  provideParser() {
    return this.block ? D.parse : D.parseInline;
  }
}, gs = class {
  defaults = pt();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = D;
  Renderer = De;
  TextRenderer = xt;
  Lexer = U;
  Tokenizer = Ue;
  Hooks = Ne;
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
            let o = n.renderer.apply(this, a);
            return o === !1 && (o = r.apply(this, a)), o;
          } : e.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let r = e[n.level];
          r ? r.unshift(n.tokenizer) : e[n.level] = [n.tokenizer], n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [n.start] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (e.childTokens[n.name] = n.childTokens);
      }), s.extensions = e), t.renderer) {
        let n = this.defaults.renderer || new De(this.defaults);
        for (let r in t.renderer) {
          if (!(r in n)) throw new Error(`renderer '${r}' does not exist`);
          if (["options", "parser"].includes(r)) continue;
          let a = r, o = t.renderer[a], l = n[a];
          n[a] = (...c) => {
            let h = o.apply(n, c);
            return h === !1 && (h = l.apply(n, c)), h || "";
          };
        }
        s.renderer = n;
      }
      if (t.tokenizer) {
        let n = this.defaults.tokenizer || new Ue(this.defaults);
        for (let r in t.tokenizer) {
          if (!(r in n)) throw new Error(`tokenizer '${r}' does not exist`);
          if (["options", "rules", "lexer"].includes(r)) continue;
          let a = r, o = t.tokenizer[a], l = n[a];
          n[a] = (...c) => {
            let h = o.apply(n, c);
            return h === !1 && (h = l.apply(n, c)), h;
          };
        }
        s.tokenizer = n;
      }
      if (t.hooks) {
        let n = this.defaults.hooks || new Ne();
        for (let r in t.hooks) {
          if (!(r in n)) throw new Error(`hook '${r}' does not exist`);
          if (["options", "block"].includes(r)) continue;
          let a = r, o = t.hooks[a], l = n[a];
          Ne.passThroughHooks.has(r) ? n[a] = (c) => {
            if (this.defaults.async) return Promise.resolve(o.call(n, c)).then((d) => l.call(n, d));
            let h = o.call(n, c);
            return l.call(n, h);
          } : n[a] = (...c) => {
            let h = o.apply(n, c);
            return h === !1 && (h = l.apply(n, c)), h;
          };
        }
        s.hooks = n;
      }
      if (t.walkTokens) {
        let n = this.defaults.walkTokens, r = t.walkTokens;
        s.walkTokens = function(a) {
          let o = [];
          return o.push(r.call(this, a)), n && (o = o.concat(n.call(this, a))), o;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(i) {
    return this.defaults = { ...this.defaults, ...i }, this;
  }
  lexer(i, e) {
    return U.lex(i, e ?? this.defaults);
  }
  parser(i, e) {
    return D.parse(i, e ?? this.defaults);
  }
  parseMarkdown(i) {
    return (e, t) => {
      let s = { ...t }, n = { ...this.defaults, ...s }, r = this.onError(!!n.silent, !!n.async);
      if (this.defaults.async === !0 && s.async === !1) return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return r(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return r(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      n.hooks && (n.hooks.options = n, n.hooks.block = i);
      let a = n.hooks ? n.hooks.provideLexer() : i ? U.lex : U.lexInline, o = n.hooks ? n.hooks.provideParser() : i ? D.parse : D.parseInline;
      if (n.async) return Promise.resolve(n.hooks ? n.hooks.preprocess(e) : e).then((l) => a(l, n)).then((l) => n.hooks ? n.hooks.processAllTokens(l) : l).then((l) => n.walkTokens ? Promise.all(this.walkTokens(l, n.walkTokens)).then(() => l) : l).then((l) => o(l, n)).then((l) => n.hooks ? n.hooks.postprocess(l) : l).catch(r);
      try {
        n.hooks && (e = n.hooks.preprocess(e));
        let l = a(e, n);
        n.hooks && (l = n.hooks.processAllTokens(l)), n.walkTokens && this.walkTokens(l, n.walkTokens);
        let c = o(l, n);
        return n.hooks && (c = n.hooks.postprocess(c)), c;
      } catch (l) {
        return r(l);
      }
    };
  }
  onError(i, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, i) {
        let s = "<p>An error occurred:</p><pre>" + z(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(s) : s;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, K = new gs();
function x(i, e) {
  return K.parse(i, e);
}
x.options = x.setOptions = function(i) {
  return K.setOptions(i), x.defaults = K.defaults, xi(x.defaults), x;
};
x.getDefaults = pt;
x.defaults = X;
x.use = function(...i) {
  return K.use(...i), x.defaults = K.defaults, xi(x.defaults), x;
};
x.walkTokens = function(i, e) {
  return K.walkTokens(i, e);
};
x.parseInline = K.parseInline;
x.Parser = D;
x.parser = D.parse;
x.Renderer = De;
x.TextRenderer = xt;
x.Lexer = U;
x.lexer = U.lex;
x.Tokenizer = Ue;
x.Hooks = Ne;
x.parse = x;
x.options;
x.setOptions;
x.use;
x.walkTokens;
x.parseInline;
D.parse;
U.lex;
const ms = [
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
    name: "precipitation_entity",
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
    name: "show_precipitation",
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
], ys = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.92'%20x2='38.52'%20y1='18.75'%20y2='47.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='5%2032%2032;%20-15%2032%2032;%205%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M46.66%2036.2a16.66%2016.66%200%2001-16.78-16.55%2016.29%2016.29%200%2001.55-4.15A16.56%2016.56%200%201048.5%2036.1c-.61.06-1.22.1-1.84.1z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-5%2032%2032;%2015%2032%2032;%20-5%2032%2032'/%3e%3c/path%3e%3c/svg%3e", ws = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/path%3e%3c/svg%3e", vs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='16.5'%20x2='21.5'%20y1='19.67'%20y2='28.33'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='19'%20cy='24'%20r='5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2019%2024;%20360%2019%2024'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", xs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='13.58'%20x2='24.15'%20y1='15.57'%20y2='33.87'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='10%2019.22%2024.293;%20-10%2019.22%2024.293;%2010%2019.22%2024.293'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M29.33%2026.68a10.61%2010.61%200%2001-10.68-10.54A10.5%2010.5%200%200119%2013.5a10.54%2010.54%200%201011.5%2013.11%2011.48%2011.48%200%2001-1.17.07z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-10%2019.22%2024.293;%2010%2019.22%2024.293;%20-10%2019.22%2024.293'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", bs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='27.5'%20x2='36.5'%20y1='50.21'%20y2='65.79'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20y1='44.21'%20y2='59.79'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2058h30'%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2052h30'%3e%3canimateTransform%20attributeName='transform'%20begin='-4s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3c/svg%3e", _s = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.25'%20x2='24.75'%20y1='43.7'%20y2='46.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='30.25'%20x2='31.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='37.25'%20x2='38.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23a)'%20d='M24%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20d='M31%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20d='M38%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3c/svg%3e", $s = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='16.5'%20x2='21.5'%20y1='19.67'%20y2='28.33'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='19'%20cy='24'%20r='5'%20fill='url(%23b)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2019%2024;%20360%2019%2024'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23f)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", ks = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23b)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", As = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Cs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='30.12'%20x2='31.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.67'%20x2='32.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='g'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M33.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M31%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='-1%20-6;%201%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2031%2045;%20360%2031%2045'/%3e%3canimate%20attributeName='opacity'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23d)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23f)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3c/svg%3e", Ss = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='b'%20x1='23.31'%20x2='24.69'%20y1='44.3'%20y2='46.7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='30.31'%20x2='31.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3clinearGradient%20id='h'%20x1='37.31'%20x2='38.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3c/defs%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23e)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23f)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23h)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Ms = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.97'%20x2='42.03'%20y1='14.63'%20y2='49.37'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43%2032a11%2011%200%2011-11-11%2011%2011%200%200111%2011zM25%2014.61l-.48%201a33.68%2033.68%200%2000-3.42%2017.82h0M39%2049.39l.48-1a33.68%2033.68%200%20003.42-17.82h0'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='360%2032%2032;%200%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Xt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='27.56'%20x2='38.27'%20y1='17.64'%20y2='36.19'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='19.96'%20x2='31.37'%20y1='29.03'%20y2='48.8'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e", Qe = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Ts = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='52.7'%20x2='133.4'%20y1='9.6'%20y2='149.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%239ca3af'/%3e%3cstop%20offset='.5'%20stop-color='%239ca3af'/%3e%3cstop%20offset='1'%20stop-color='%236b7280'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='99.5'%20x2='232.6'%20y1='30.7'%20y2='261.4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%236b7280'/%3e%3cstop%20offset='.5'%20stop-color='%236b7280'/%3e%3cstop%20offset='1'%20stop-color='%234b5563'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='1381.3'%20x2='1399.5'%20y1='-1144.7'%20y2='-1097.4'%20gradientTransform='rotate(-9%208002.567%208233.063)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%230b65ed'/%3e%3cstop%20offset='.5'%20stop-color='%230a5ad4'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23c'%20id='d'%20x1='1436.7'%20x2='1454.9'%20y1='-1137'%20y2='-1089.7'%20gradientTransform='rotate(-9%208009.537%208233.037)'/%3e%3clinearGradient%20xlink:href='%23c'%20id='e'%20x1='1492.1'%20x2='1510.3'%20y1='-1129.3'%20y2='-1082.1'%20gradientTransform='rotate(-9%208016.566%208233.078)'/%3e%3csymbol%20id='g'%20viewBox='0%200%20200.3%20126.1'%3e%3cpath%20fill='url(%23a)'%20stroke='%23848b98'%20stroke-miterlimit='10'%20d='M.5%2093.2a32.4%2032.4%200%200032.4%2032.4h129.8v-.1l2.3.1a34.8%2034.8%200%20006.5-68.9%2032.4%2032.4%200%2000-48.5-33%2048.6%2048.6%200%2000-88.6%2037.1h-1.5A32.4%2032.4%200%2000.5%2093.1Z'/%3e%3c/symbol%3e%3csymbol%20id='h'%20viewBox='0%200%20350%20222'%3e%3cpath%20fill='url(%23b)'%20stroke='%235b6472'%20stroke-miterlimit='10'%20stroke-width='6'%20d='m291%20107-2.5.1A83.9%2083.9%200%2000135.6%2043%2056%2056%200%200051%2091a56.6%2056.6%200%2000.8%209A60%2060%200%200063%20219l4-.2v.2h224a56%2056%200%20000-112Z'/%3e%3c/symbol%3e%3csymbol%20id='f'%20overflow='visible'%20viewBox='0%200%20398%20222'%3e%3cuse%20xlink:href='%23g'%20width='200.3'%20height='126.1'%20transform='translate(198%2027)'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-9%200;%209%200;%20-9%200'/%3e%3c/use%3e%3cuse%20xlink:href='%23h'%20width='350'%20height='222'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-18%200;%2018%200;%20-18%200'/%3e%3c/use%3e%3c/symbol%3e%3csymbol%20id='i'%20overflow='visible'%20viewBox='0%200%20129%2057'%3e%3cpath%20fill='url(%23c)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M8.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x1'%20additive='sum'%20attributeName='transform'%20begin='0s;%20x1.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y1'%20attributeName='opacity'%20begin='0s;%20y1.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M64.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x2'%20additive='sum'%20attributeName='transform'%20begin='.33s;%20x2.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y2'%20attributeName='opacity'%20begin='.33s;%20y2.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M120.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x3'%20additive='sum'%20attributeName='transform'%20begin='-.33s;%20x3.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y3'%20attributeName='opacity'%20begin='-.33s;%20y3.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3cuse%20xlink:href='%23f'%20width='398'%20height='222'%20transform='translate(68.84%20145)'/%3e%3cuse%20xlink:href='%23i'%20width='129'%20height='57'%20transform='translate(191.5%20343.5)'/%3e%3c/svg%3e";
var Ls = "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z", Ns = "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z", Es = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z", Rs = "M15,6.79C16.86,7.86 18,9.85 18,12C18,22 6,22 6,22C7.25,21.06 8.38,19.95 9.34,18.71C9.38,18.66 9.41,18.61 9.44,18.55C9.69,18.06 9.5,17.46 9,17.21C7.14,16.14 6,14.15 6,12C6,2 18,2 18,2C16.75,2.94 15.62,4.05 14.66,5.29C14.62,5.34 14.59,5.39 14.56,5.45C14.31,5.94 14.5,6.54 15,6.79M12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14Z", Ps = "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z", Ws = "M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z", zs = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", Hs = "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z", Us = "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z", Ds = "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59", Os = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z", Gs = "M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z", Ni = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z", Is = "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z", Bs = "M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z";
const C = (i, e) => i ? (e || (e = "24px"), p`<ha-icon
    .icon="${i}"
    style="font-size:${e}; width: ${e}; height: ${e}"
  />`) : p`<ha-icon
      icon="mdi:weather-sunny"
      style="font-size:${e}; width: ${e}; height: ${e}"
    />`, M = (i, e) => i ? (e || (e = "24px"), P`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${i}" /></svg>`) : P`<svg height=${e} width=${e} viewport="0 0 48 48"><path d="${Ni}" /></svg>`, Ye = (i, e, t, s) => {
  if (!i)
    return C("mdi:weather-sunny", t);
  const n = {
    "clear-night": M(zs, t),
    cloudy: M(Ls, t),
    fog: M(Ns, t),
    hail: M(Es, t),
    lightning: M(Ps, t),
    "lightning-rainy": M(Ws, t),
    partlycloudy: M(Hs, t),
    pouring: M(Us, t),
    rainy: M(Ds, t),
    snowy: M(Os, t),
    "snowy-rainy": M(Gs, t),
    sunny: M(Ni, t),
    windy: M(Is, t),
    "windy-variant": M(Bs, t),
    exceptional: M(Rs, t)
  }, r = {
    "clear-night": C("mdi:weather-night", t),
    cloudy: C("mdi:weather-cloudy", t),
    fog: C("mdi:weather-fog", t),
    hail: C("mdi:weather-hail", t),
    lightning: C("mdi:weather-lightning", t),
    "lightning-rainy": C("mdi:weather-lightning-rainy", t),
    partlycloudy: C("mdi:weather-partly-cloudy", t),
    pouring: C("mdi:weather-pouring", t),
    rainy: C("mdi:weather-rainy", t),
    snowy: C("mdi:weather-snowy", t),
    "snowy-rainy": C("mdi:weather-snowy-rainy", t),
    sunny: C("mdi:weather-sunny", t),
    windy: C("mdi:weather-windy", t),
    "windy-variant": C("mdi:weather-windy-variant", t),
    exceptional: C("mdi:weather-hurricane", t)
  }, a = {
    "clear-night": p`<img src="${ys}" style="font-size:${t}" />`,
    cloudy: p`<img src="${ws}" style="font-size:${t}" />`,
    fog: p`<img src="${bs}}" style="font-size:${t}" />`,
    hail: p`<img src="${_s}" style="font-size:${t}" />`,
    lightning: p`<img src="${ks}" style="font-size:${t}" />`,
    "lightning-rainy": p`<img src="${$s}" style="font-size:${t}" />`,
    partlycloudy: p`<img
      src="${s ? vs : xs}"
      style="font-size:${t}"
    />`,
    pouring: p`<img src="${Ts}" style="font-size:${t}" />`,
    rainy: p`<img src="${As}" style="font-size:${t}" />`,
    snowy: p`<img src="${Cs}" style="font-size:${t}" />`,
    "snowy-rainy": p`<img src="${Ss}" style="font-size:${t}" />`,
    sunny: p`<img src="${Qe}" style="font-size:${t}" />`,
    windy: p`<img src="${Xt}" style="font-size:${t}" />`,
    "windy-variant": p`<img src="${Xt}" style="font-size:${t}" />`,
    exceptional: p`<img src="${Ms}" style="font-size:${t}" />`
  };
  return e === "mdi" ? r[i] || C("mdi:weather-sunny", t) : e === "mdiAsSVG" ? n[i] || p`<img src="${Qe}" />` : a[i] || p`<img src="${Qe}" />`;
};
var Fs = Object.defineProperty, js = Object.getOwnPropertyDescriptor, W = (i, e, t, s) => {
  for (var n = s > 1 ? void 0 : s ? js(e, t) : e, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (n = (s ? a(e, t, n) : a(n)) || n);
  return s && n && Fs(e, t, n), n;
};
hn({
  // Loads the language by returning a JSON structure for a given language
  loader: (i) => Ui[i]
});
console.log("🎯 About to apply @customElement decorator to SwissweatherCard");
console.log("🎯 customElements registry available:", !!customElements);
let F = class extends ee {
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
        s && s[this.config.entity] ? (this._hourlyForecast = s[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [];
      } catch (i) {
        console.warn("⚠️ Forecast loading failed:", i), this._forecast = [], this._hourlyForecast = [];
      } finally {
        this._forecastLoading = !1;
      }
    }
  }
  static get styles() {
    return ei`
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
      compact_mode: !1
    };
  }
  static getConfigElement() {
    return document.createElement("swissweather-card-editor");
  }
  // Schema for the visual editor
  static getConfigSchema() {
    return ms;
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
              <strong>${m("weather_warning")}</strong>
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
                          title="${this._openWarnings[r.id] ? m("collapse") : m("expand")}"
                          aria-label="${this._openWarnings[r.id] ? m("collapse") : m("expand")}"
                        >
                          <ha-icon
                            icon="${this._openWarnings[r.id] ? "mdi:chevron-up" : "mdi:chevron-down"}"
                          ></ha-icon>
                        </button>
                      </div>
                      ${this._openWarnings[r.id] && r.description ? p`
                            <div>
                              <strong>${m("valid_from")}: </strong>
                              ${r.valid_from ? new Date(r.valid_from).toLocaleString() : m("unknown")}
                              <strong>${m("valid_to")}: </strong>
                              ${r.valid_to ? new Date(r.valid_to).toLocaleString() : m("unknown")}
                            </div>
                            <div
                              style="color: var(--primary-text-color, #fff); font-size: 14px; line-height: 1.4; margin-left: 2px; margin-top: 4px;"
                              .innerHTML="${x.parse(r.description || "")}"
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
                ${m("temperature_hours", { hours: i })}
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
        (u) => typeof u.temperature == "number" && !isNaN(u.temperature) ? u.temperature : null
      ), t = e.filter((u) => u !== null);
      if (t.length < 2) return "";
      const s = Math.min(...t), r = Math.max(...t) - s || 1, a = e.length, o = Math.max(360, Math.min(1600, a * 250)), l = 50, c = o / (a - 1), h = e.map((u, y) => u !== null ? `${y * c},${l - (u - s) / r * l}` : "").filter(Boolean).join(" ");
      return P`<svg width="${i === 6 ? "84%" : i === 12 ? "90%" : i === 18 ? "96%" : "100%"}" height="${l}" viewBox="0 0 ${o} ${l}" preserveAspectRatio="none" style="display:block;padding-left:${i === 6 ? "8%" : i === 12 ? "5%" : i === 18 ? "2%" : "0%"};">
                        <polyline points="${h}" fill="none" stroke="#db4a34" stroke-width="3" />
                        ${e.map((u, y) => u !== null ? P`<circle r="3" fill="#db4a34" cx="${y * c}" cy="${l - (u - s) / r * l}" />` : null)}
                        </svg>`;
    })()}
              </div>
              ${this._showHoursChartLabel(i)}
            </div>
          ` : p`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:thermometer"></ha-icon>
                ${m("temperature_hours", { hours: i })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${m("no_temperature_data")}
              </div>
            </div>
          ` : p``;
  }
  _renderForecastPrecipitation(i) {
    return this.config.show_precipitation !== !1 ? this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, i).some((e) => typeof e.precipitation == "number" && !isNaN(e.precipitation)) ? p`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-pouring"></ha-icon>
                ${m("precipitation_hours", { hours: i })}
              </div>
              <div class="chart-bars">
                ${this._hourlyForecast.slice(0, i).map((e) => {
      const t = typeof e.precipitation == "number" && !isNaN(e.precipitation) ? e.precipitation : null, s = t !== null ? Math.round(t) : 2, n = typeof e.precipitation_probability == "number" && !isNaN(e.precipitation_probability) ? e.precipitation_probability : null, r = n !== null ? Math.round(n % 10) : 2;
      return p`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; position:relative;"
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
                      <div
                        class="chart-bar-precipitation-prob"
                        style="height: ${r}px; position:absolute; bottom:0; left:50%; transform:translateX(-50%); z-index:0; width:18px;"
                      ></div>
                      <div
                        class="chart-bar-precipitation"
                        style="height: ${s}px; position:relative; z-index:1; width:18px;"
                      ></div>
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
                ${m("precipitation_hours", { hours: i })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${m("no_precipitation_data")}
              </div>
            </div>
          ` : p``;
  }
  _renderForecastSunshine(i, e, t) {
    return this.config.show_sunshine !== !1 ? this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, t).some((s) => {
      const n = s;
      return typeof n.sunshine == "number" && !isNaN(n.sunshine) || typeof n.sunshine_duration == "number" && !isNaN(n.sunshine_duration);
    }) ? p`
            <div class="chart" style="position:relative;">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${m("sunshine_hours", { hours: t })}
              </div>
              <div class="chart-bars" style="position:relative;">
                ${(() => {
      const s = i?.attributes?.sunrise ? new Date(i.attributes.sunrise) : new Date((e?.attributes).next_rising) || null, n = i?.attributes?.sunset ? new Date(i.attributes.sunset) : new Date((e?.attributes).next_setting) || null, r = this._hourlyForecast[0]?.datetime ? new Date(this._hourlyForecast[0].datetime) : null;
      let a = -1, o = -1;
      return s && r && (a = Math.round(
        (s.getTime() - r.getTime()) / (3600 * 1e3) + 1
      )), n && r && (o = Math.round(
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
                              >${m("sunrise")}
                              ${s ? s.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      }) : ""}</span
                            >
                          </div>
                        ` : ""}
                    ${o >= 0 && o < t ? p`
                          <div
                            style="position:absolute;left:calc(${o / t * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-down"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d;align-items:center;"
                              >${m("sunset")}
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
                ${m("sunshine_hours", { hours: t })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${m("no_sunshine_data")}
              </div>
            </div>
          ` : p``;
  }
  _renderForecastWind(i) {
    return this.config.show_sunshine !== !1 ? this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, i).some((e) => typeof e.wind_speed == "number" && !isNaN(e.wind_speed)) ? p`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-windy"></ha-icon>
                ${m("wind_hours", { hours: i })}
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
        (u) => typeof u.wind_speed == "number" && !isNaN(u.wind_speed) ? u.wind_speed : null
      ), t = e.filter((u) => u !== null);
      if (t.length < 2) return "";
      const s = Math.min(...t), r = Math.max(...t) - s || 1, a = e.length, o = Math.max(360, Math.min(1600, a * 250)), l = 50, c = o / (a - 1), h = e.map((u, y) => u !== null ? `${y * c},${l - (u - s) / r * l}` : "").filter(Boolean).join(" ");
      return P`<svg width="${i === 6 ? "84%" : i === 12 ? "90%" : i === 18 ? "96%" : "100%"}" height="${l}" viewBox="0 0 ${o} ${l}" preserveAspectRatio="none" style="display:block;padding-left:${i === 6 ? "8%" : i === 12 ? "5%" : i === 18 ? "2%" : "0%"};">
                <polyline points="${h}" fill="none" stroke="#44739e" stroke-width="3" />
                ${e.map((u, y) => u !== null ? P`<circle r="3" fill="#44739e" cx="${y * c}" cy="${l - (u - s) / r * l}" />` : null)}
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
                ${m("7d_forecast")}
                <small
                  style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >${m("loading")}</small
                >
              </div>
              <div
                style="text-align: center; padding: 20px; color: var(--secondary-text-color, #666); font-style: italic;"
              >
                ⏳ ${m("loading_forecast")}<br />
                <small>Service: weather.get_forecasts</small>
              </div>
            </div>
          ` : i.length > 0 ? p`
              <div class="forecast-section">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${i.length === 7 ? m("7d_forecast") : m("xd_forecast", { days: i.length })}
                  <small
                    style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >
                    (${i.length} ${m("days_available")})
                  </small>
                </div>
                ${i.length < 7 ? p`
                      <div
                        style="text-align: center; color: var(--warning-color, #b8860b); font-size: 13px; margin-bottom: 8px;"
                      >
                        ${m("forecast_days_hint", { count: i.length })}
                      </div>
                    ` : ""}
                <div class="forecast-grid">
                  ${i.slice(0, 7).map(
      (e) => p`
                      <div class="forecast-day">
                        <div class="forecast-date">${this._formatDate(e.datetime)}</div>
                        <div class="forecast-icon">
                          ${Ye(
        e.condition,
        this.config.enable_animate_weather_icons ? "animated" : "mdi",
        "24px",
        this.isDay()
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
                  ${m("7d_forecast")}
                  <small style="font-size: 12px; color: #666; margin-left: 10px;">
                    (0 ${m("days_available")})
                  </small>
                </div>
                <div style="text-align: center; padding: 20px; color: #666; font-style: italic;">
                  ⚠️ ${m("no_forecast_data")}<br />
                  <small>Entity: ${this.config.entity}</small><br />
                  <small>${m("check_devtools")}</small><br />
                  <small style="color: #999;">${m("try_other_entity")}</small>
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
  _renderDailyForecastDiagram() {
    const i = this._forecast?.slice(0, 7) ?? [], e = this._hourlyForecast?.slice(0, i.length * 24) ?? [];
    if (!e.length) return p`<div>No hourly forecast available</div>`;
    const t = i.length, s = Math.max(180, t * 100), n = t > 0 ? s / t : 100, r = 200, o = n / 24;
    let l = 0;
    if (e.length > 0 && e[0].datetime) {
      const g = new Date(e[0].datetime);
      l = new Date(g.getFullYear(), g.getMonth(), g.getDate()).getTime();
    }
    const c = e.map((g) => typeof g.temperature == "number" ? g.temperature : null);
    let h = Math.min(...c.filter((g) => g !== null));
    const d = Math.max(...c.filter((g) => g !== null));
    h > 0 && (h = 0);
    const f = 13, u = 64, y = 20, b = 18, N = 8, oe = b + f + N + u + N + 2, _e = 32, $e = 60, E = oe + _e, L = E + $e, O = d - h || 1, G = e.map((g) => typeof g.precipitation == "number" ? g.precipitation : 0), bt = e.map(
      (g) => typeof g.precipitation_probability == "number" ? g.precipitation_probability % 10 : 0
    ), ke = Math.max(...G, ...bt, 1);
    function Ae(g, w) {
      const k = new Date(g.getFullYear(), g.getMonth(), g.getDate()).getTime(), S = Math.round((k - w) / 864e5), R = Math.round((g.getTime() - k) / (3600 * 1e3));
      return { dayIdx: S, hourInDay: R };
    }
    const Ei = c.map((g, w) => {
      if (!e[w] || !e[w].datetime) return "";
      const _ = new Date(e[w].datetime), { dayIdx: k, hourInDay: S } = Ae(_, l), R = k * n + S * o + o / 2;
      return g !== null ? `${R},${L - (g - h) / O * (L - E)}` : "";
    }).filter(Boolean).join(" "), Ce = Math.max(3, Math.floor(o) - 2), _t = L, $t = L - E;
    function Ri(g) {
      if (g <= 0) return "transparent";
      const w = [
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
      let _ = w[0], k = w[w.length - 1];
      for (let le = 1; le < w.length; le++)
        if (g < w[le].val) {
          k = w[le], _ = w[le - 1];
          break;
        }
      const S = (g - _.val) / (k.val - _.val), R = Math.round(_.color.r + (k.color.r - _.color.r) * S), H = Math.round(_.color.g + (k.color.g - _.color.g) * S), Me = Math.round(_.color.b + (k.color.b - _.color.b) * S);
      return `rgb(${R},${H},${Me})`;
    }
    const Pi = bt.map((g, w) => {
      if (!e[w] || !e[w].datetime) return null;
      const _ = new Date(e[w].datetime), { dayIdx: k, hourInDay: S } = Ae(_, l), R = k * n + S * o + o / 2 - Ce / 2, H = ke > 0 ? g / ke * $t : 0;
      return g > 0 ? P`<rect x="${R}" y="${_t - H}" width="${Ce}" height="${H}"
            fill="#988d8dff" opacity="0.4" rx="1.5"/>` : null;
    }), Wi = G.map((g, w) => {
      if (!e[w] || !e[w].datetime) return null;
      const _ = new Date(e[w].datetime), { dayIdx: k, hourInDay: S } = Ae(_, l), R = k * n + S * o + o / 2 - Ce / 2, H = ke > 0 ? g / ke * $t : 0, Me = Ri(g);
      return g > 0 ? P`<rect x="${R}" y="${_t - H}" width="${Ce}" height="${H}"
            fill="${Me}" opacity="1" rx="1.5"/>` : null;
    }), kt = [];
    if (t > 1 && e.length > 0)
      for (let g = 1; g < t; g++) {
        const w = new Date(l + g * 24 * 60 * 60 * 1e3), { dayIdx: _, hourInDay: k } = Ae(w, l), S = _ * n + k * o;
        kt.push(
          P`<line x1="${S}" y1="16" x2="${S}" y2="${r - 16}" stroke="#bbb" stroke-width="1" stroke-dasharray="2,2"/>`
        );
      }
    const At = [], Ct = 6;
    if (t > 0)
      for (let g = 0; g < t; g++) {
        const w = g * n + n / 2, _ = b + f, k = _ + N + Ct, S = k + u + N + Ct + 2, R = typeof i[g].templow == "number" ? Math.round(i[g].templow || i[g].temperature - 5) : "", H = typeof i[g].temperature == "number" ? Math.round(i[g].temperature) : "";
        At.push(P`
          <g>
            <!-- Weekday -->
            <text x="${w}" y="${_}" text-anchor="middle" font-size="${f}" fill="#888">
              ${new Date(i[g].datetime).toLocaleDateString(void 0, { weekday: "short" })}
            </text>
            <!-- Icon -->
            <foreignObject x="${w - u / 2}" y="${k}" width="${u}" height="${u}">
                ${Ye(i[g].condition || "", this.config.enable_animate_weather_icons ? "animated" : "mdiAsSVG", u + "px", !0)}
            </foreignObject>
            <!-- Min/Max temp -->
            <text class="weather-temp" x="${w}" y="${S}" text-anchor="middle" font-size="${y}"">${R}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${H}°</tspan></text>
          </g>
        `);
      }
    const St = [], Mt = 5 / O * (L - E), zi = Math.floor((L - E) / Mt), Se = /* @__PURE__ */ new Set();
    for (let g = 0; g <= zi; g++)
      Se.add(L - g * Mt);
    if (h > 0) {
      const g = L - (0 - h) / O * (L - E);
      g <= L && g >= E && Se.add(g);
    }
    const Hi = L - (h - h) / O * (L - E);
    return Se.add(Hi), Array.from(Se).sort((g, w) => w - g).forEach((g, w) => {
      St.push(
        P`<line x1="0" y1="${g}" x2="${s}" y2="${g}" stroke="#bbb" stroke-width="${w % 2 === 0 ? 2 : 1}" stroke-dasharray="${w % 2 === 0 ? "none" : "4,3"}" />`
      );
    }), p`
      <div class="chart">
        <svg width="100%" height="100%" viewBox="0 0 ${s} ${r}" style="display:block;">
          ${St} ${At} ${kt} ${Pi}
          <!-- Precipitation bars -->
          ${Wi}

          <polyline points="${Ei}" fill="none" stroke="#e74c3c" stroke-width="2" />
        </svg>
      </div>
    `;
  }
  _renderCurrentWeather(i, e, t, s, n, r) {
    return p`
      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${m("current_weather")}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(i)} km/h</div>
          <div class="metric-label">${m("wind")}</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${e}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(e)}</div>
          <div class="metric-label">${m("direction")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${t}%</div>
          <div class="metric-label">${m("humidity")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${s} hPa</div>
          <div class="metric-label">${m("pressure")}</div>
        </div>
        ${r ? p`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                <div class="metric-value">${parseFloat(r.state).toFixed(1)}h</div>
                <div class="metric-label">${m("sunshine")}</div>
              </div>
            ` : ""}
        ${n > 0 ? p`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                <div class="metric-value">${n} km</div>
                <div class="metric-label">${m("visibility")}</div>
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
      i,
      e,
      t,
      s,
      n,
      r
    )}
            ` : p`
              ${this._renderCurrentWeather(
      i,
      e,
      t,
      s,
      n,
      r
    )}
            `}
      </div>
    `;
  }
  isDay() {
    const i = /* @__PURE__ */ new Date(), e = this._getEntityState(this.config.entity), t = this._getEntityState(this.config.sun_entity || "sun.sun");
    let s = null, n = null;
    if (e && e.attributes && "sunrise" in e.attributes && "sunset" in e.attributes && e.attributes.sunrise && e.attributes.sunset)
      s = new Date(e.attributes.sunrise), n = new Date(e.attributes.sunset);
    else if (t?.attributes) {
      const r = t.attributes.next_rising ? new Date(t.attributes.next_rising) : null, a = t.attributes.next_setting ? new Date(t.attributes.next_setting) : null;
      if (r && a) {
        const o = r > i ? new Date(r.getTime() - 864e5) : r, l = a;
        s = o, n = l;
      }
    }
    return !s || !n ? !0 : i >= s && i < n;
  }
  render() {
    if (li((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config)
      return p``;
    const i = this._getEntityState(this.config.entity), e = this._getEntityState(this.config.sun_entity || "sun.sun");
    if (!i)
      return p`<div>Entity not found: ${this.config.entity}</div>`;
    const t = this.config.show_location !== !1, s = this.config.location || m("location"), n = i.attributes.temperature, r = i.state, a = this._forecast, o = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null, l = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null, c = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null, h = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null, d = o ? parseFloat(o.state) : i.attributes.wind_speed || 0, f = l ? parseFloat(l.state) : i.attributes.wind_bearing || 0, u = i.attributes.humidity || 0, y = i.attributes.pressure || 0, b = i.attributes.visibility || 0, N = this.config.forecast_hours ?? 6;
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
          <div class="condition">${m(r)}</div>
        </div>
        <div class="current-details">
          <div
            class="weather-icon"
            style="color: var(--icon-color, #fff); width: 64px; height: 64px;"
          >
            ${Ye(
      r,
      this.config.enable_animate_weather_icons ? "animated" : "mdi",
      "64px",
      this.isDay()
    )}
          </div>
        </div>
      </div>

      ${this._renderCurrentWeatherSection(
      d,
      f,
      u,
      y,
      b,
      c
    )}
      ${this.config.compact_mode === !1 && (this.config.show_temperature === !0 || this.config.show_precipitation === !0 || this.config.show_sunshine === !0) ? p`
            <div class="section-title">
              <ha-icon icon="mdi:clock"></ha-icon>
              ${m("forecast_hours", { hours: N })}
            </div>
          ` : ""}
      ${this._renderForecastTemperature(N)}
      ${this._renderForecastPrecipitation(N)}
      ${this._renderForecastSunshine(i, e, N)}
      ${this._renderForecastWind(N)}
      ${this.config.compact_mode === !0 && this.config.show_forecast === !0 ? this._renderDailyForecastDiagram() : p``}
      ${this.config.compact_mode === !1 ? this._renderDailyForecast(a) : p``}
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
              <span>${t === 0 ? m("now") : m("hour", { h: t })}</span>
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
W([
  ae({ attribute: !1 })
], F.prototype, "hass", 2);
W([
  ae({ attribute: !1 })
], F.prototype, "config", 2);
W([
  Be()
], F.prototype, "_forecast", 2);
W([
  Be()
], F.prototype, "_hourlyForecast", 2);
W([
  Be()
], F.prototype, "_forecastLoading", 2);
W([
  Be()
], F.prototype, "_openWarnings", 2);
F = W([
  vi("swissweather-card")
], F);
let xe = class extends ee {
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
    return ei`
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
    li((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
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
    entity: m("config.entity"),
    show_location: m("config.show_location"),
    sun_entity: m("config.sun_entity"),
    location: m("config.location"),
    wind_entity: m("config.wind_entity"),
    wind_direction_entity: m("config.wind_direction_entity"),
    sunshine_entity: m("config.sunshine_entity"),
    warning_entity: m("config.warning_entity"),
    show_forecast: m("config.show_forecast"),
    forecast_hours: m("config.forecast_hours"),
    show_temperature: m("config.show_temperature"),
    show_precipitation: m("config.show_precipitation"),
    show_sunshine: m("config.show_sunshine"),
    show_warnings: m("config.show_warnings"),
    show_wind: m("config.show_wind"),
    enable_animate_weather_icons: m("config.enable_animate_weather_icons"),
    compact_mode: m("config.compact_mode")
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
W([
  ae({ attribute: !1 })
], xe.prototype, "hass", 2);
W([
  ae({ attribute: !1 })
], xe.prototype, "lovelace", 2);
W([
  ae({ attribute: !1 })
], xe.prototype, "_config", 2);
xe = W([
  vi("swissweather-card-editor")
], xe);
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
  xe as SwissweatherCardEditor
};
//# sourceMappingURL=swissweather-card.js.map

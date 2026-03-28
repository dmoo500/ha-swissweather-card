//#region package.json
var e = "1.7.1-beta.7", t = globalThis, n = t.ShadowRoot && (t.ShadyCSS === void 0 || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, r = Symbol(), i = /* @__PURE__ */ new WeakMap(), a = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== r) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (n && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = i.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && i.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, o = (e) => new a(typeof e == "string" ? e : e + "", void 0, r), s = (e, ...t) => new a(e.length === 1 ? e[0] : t.reduce(((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1]), e[0]), e, r), c = (e, r) => {
	if (n) e.adoptedStyleSheets = r.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
	else for (let n of r) {
		let r = document.createElement("style"), i = t.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, e.appendChild(r);
	}
}, l = n ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return o(t);
})(e) : e, { is: u, defineProperty: d, getOwnPropertyDescriptor: ee, getOwnPropertyNames: f, getOwnPropertySymbols: p, getPrototypeOf: m } = Object, te = globalThis, ne = te.trustedTypes, re = ne ? ne.emptyScript : "", ie = te.reactiveElementPolyfillSupport, ae = (e, t) => e, oe = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? re : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, se = (e, t) => !u(e, t), h = {
	attribute: !0,
	type: String,
	converter: oe,
	reflect: !1,
	useDefault: !1,
	hasChanged: se
};
Symbol.metadata ??= Symbol("metadata"), te.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var g = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = h) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && d(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = ee(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? h;
	}
	static _$Ei() {
		if (this.hasOwnProperty(ae("elementProperties"))) return;
		let e = m(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(ae("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ae("properties"))) {
			let e = this.properties, t = [...f(e), ...p(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(l(e));
		} else e !== void 0 && t.push(l(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
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
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return c(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach(((e) => e.hostDisconnected?.()));
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? oe : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? oe : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n) {
		if (e !== void 0) {
			let r = this.constructor, i = this[e];
			if (n ??= r.getPropertyOptions(e), !((n.hasChanged ?? se)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(r._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((e) => e.hostUpdate?.())), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach(((e) => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
		this._$Eq &&= this._$Eq.forEach(((e) => this._$ET(e, this[e]))), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[ae("elementProperties")] = /* @__PURE__ */ new Map(), g[ae("finalized")] = /* @__PURE__ */ new Map(), ie?.({ ReactiveElement: g }), (te.reactiveElementVersions ??= []).push("2.1.1");
//#endregion
//#region node_modules/lit/node_modules/lit-html/lit-html.js
var ce = globalThis, le = ce.trustedTypes, ue = le ? le.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, _ = "$lit$", v = `lit$${Math.random().toFixed(9).slice(2)}$`, de = "?" + v, fe = `<${de}>`, y = document, b = () => y.createComment(""), x = (e) => e === null || typeof e != "object" && typeof e != "function", S = Array.isArray, pe = (e) => S(e) || typeof e?.[Symbol.iterator] == "function", me = "[ 	\n\f\r]", he = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, C = /-->/g, ge = />/g, w = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), _e = /'/g, ve = /"/g, ye = /^(?:script|style|textarea|title)$/i, be = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), T = be(1), E = be(2), xe = Symbol.for("lit-noChange"), D = Symbol.for("lit-nothing"), Se = /* @__PURE__ */ new WeakMap(), Ce = y.createTreeWalker(y, 129);
function we(e, t) {
	if (!S(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return ue === void 0 ? t : ue.createHTML(t);
}
var Te = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = he;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === he ? c[1] === "!--" ? o = C : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = w) : (ye.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = w) : o = ge : o === w ? c[0] === ">" ? (o = i ?? he, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? w : c[3] === "\"" ? ve : _e) : o === ve || o === _e ? o = w : o === C || o === ge ? o = he : (o = w, i = void 0);
		let d = o === w && e[t + 1].startsWith("/>") ? " " : "";
		a += o === he ? n + fe : l >= 0 ? (r.push(s), n.slice(0, l) + _ + n.slice(l) + v + d) : n + v + (l === -2 ? t : d);
	}
	return [we(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Ee = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Te(t, n);
		if (this.el = e.createElement(l, r), Ce.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = Ce.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(_)) {
					let t = u[o++], n = i.getAttribute(e).split(v), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? je : r[1] === "?" ? Me : r[1] === "@" ? Ne : Ae
					}), i.removeAttribute(e);
				} else e.startsWith(v) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (ye.test(i.tagName)) {
					let e = i.textContent.split(v), t = e.length - 1;
					if (t > 0) {
						i.textContent = le ? le.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], b()), Ce.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], b());
					}
				}
			} else if (i.nodeType === 8) if (i.data === de) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(v, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += v.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = y.createElement("template");
		return n.innerHTML = e, n;
	}
};
function De(e, t, n = e, r) {
	if (t === xe) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = x(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = De(e, i._$AS(e, t.values), i, r)), t;
}
var Oe = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? y).importNode(t, !0);
		Ce.currentNode = r;
		let i = Ce.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new ke(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Pe(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = Ce.nextNode(), a++);
		}
		return Ce.currentNode = y, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, ke = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = De(this, e, t), x(e) ? e === D || e == null || e === "" ? (this._$AH !== D && this._$AR(), this._$AH = D) : e !== this._$AH && e !== xe && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? pe(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== D && x(this._$AH) ? this._$AA.nextSibling.data = e : this.T(y.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Ee.createElement(we(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Oe(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Se.get(e.strings);
		return t === void 0 && Se.set(e.strings, t = new Ee(e)), t;
	}
	k(t) {
		S(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(b()), this.O(b()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = e.nextSibling;
			e.remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Ae = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = D, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = D;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = De(this, e, t, 0), a = !x(e) || e !== this._$AH && e !== xe, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = De(this, r[n + o], t, o), s === xe && (s = this._$AH[o]), a ||= !x(s) || s !== this._$AH[o], s === D ? e = D : e !== D && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, je = class extends Ae {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === D ? void 0 : e;
	}
}, Me = class extends Ae {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== D);
	}
}, Ne = class extends Ae {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = De(this, e, t, 0) ?? D) === xe) return;
		let n = this._$AH, r = e === D && n !== D || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== D && (n === D || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Pe = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		De(this, e);
	}
}, Fe = ce.litHtmlPolyfillSupport;
Fe?.(Ee, ke), (ce.litHtmlVersions ??= []).push("3.3.1");
var Ie = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new ke(t.insertBefore(b(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Le = globalThis, O = class extends g {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ie(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return xe;
	}
};
O._$litElement$ = !0, O.finalized = !0, Le.litElementHydrateSupport?.({ LitElement: O });
var Re = Le.litElementPolyfillSupport;
Re?.({ LitElement: O }), (Le.litElementVersions ??= []).push("4.2.1");
//#endregion
//#region node_modules/lit/node_modules/@lit/reactive-element/decorators/custom-element.js
var k = (e) => (t, n) => {
	n === void 0 ? customElements.define(e, t) : n.addInitializer((() => {
		customElements.define(e, t);
	}));
}, ze = {
	attribute: !0,
	type: String,
	converter: oe,
	reflect: !1,
	hasChanged: se
}, Be = (e = ze, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function A(e) {
	return (t, n) => typeof n == "object" ? Be(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
//#endregion
//#region node_modules/lit/node_modules/@lit/reactive-element/decorators/state.js
function j(e) {
	return A({
		...e,
		state: !0,
		attribute: !1
	});
}
//#endregion
//#region node_modules/lit/node_modules/@lit/reactive-element/decorators/base.js
var Ve = (e, t, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, n), n);
//#endregion
//#region node_modules/lit/node_modules/@lit/reactive-element/decorators/query.js
function He(e, t) {
	return (n, r, i) => {
		let a = (t) => t.renderRoot?.querySelector(e) ?? null;
		if (t) {
			let { get: e, set: t } = typeof r == "object" ? n : i ?? (() => {
				let e = Symbol();
				return {
					get() {
						return this[e];
					},
					set(t) {
						this[e] = t;
					}
				};
			})();
			return Ve(n, r, { get() {
				let n = e.call(this);
				return n === void 0 && (n = a(this), (n !== null || this.hasUpdated) && t.call(this, n)), n;
			} });
		}
		return Ve(n, r, { get() {
			return a(this);
		} });
	};
}
//#endregion
//#region \0@oxc-project+runtime@0.121.0/helpers/decorateMetadata.js
function M(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
//#endregion
//#region \0@oxc-project+runtime@0.121.0/helpers/decorate.js
function N(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region src/charts/daily-forecast-chart.ts
var P = class extends O {
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
	static styles = s`
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
  `;
	render() {
		let e = /* @__PURE__ */ new Date();
		e.setHours(0, 0, 0, 0);
		let t = Array.isArray(this.forecast) ? [...this.forecast] : [];
		this.startTomorrow && t.length > 0 && (t = t.filter((t) => {
			try {
				let n = new Date(t.datetime ?? t.date ?? "");
				return isNaN(n.getTime()) ? !0 : (n.setHours(0, 0, 0, 0), n.getTime() > e.getTime());
			} catch {
				return !0;
			}
		})), typeof this.maxDays == "number" && this.maxDays > 0 && (t = t.slice(0, this.maxDays));
		let n = ["forecast-section", this.compact ? "compact" : ""].filter(Boolean).join(" "), r = ["forecast-grid", this.compact ? "compact" : ""].filter(Boolean).join(" ");
		return this.config.show_forecast === !1 ? T`` : this.forecastLoading && this.forecast.length === 0 ? T`
            <div class="${n}">
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
          ` : t.length > 0 ? T`
              <div class="wrapper ${this.alignRight ? "align-right" : ""}">
                <div class="${n}">
                  ${this.compact ? T`` : T`
                        <div class="section-title">
                          <ha-icon icon="mdi:calendar"></ha-icon>
                          ${t.length === 7 ? this._t("7d_forecast") : this._t("xd_forecast", { days: t.length })}
                          <small
                            style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                          >
                            (${t.length} ${this._t("days_available")})
                          </small>
                        </div>
                      `}
                  <div class="${r}">
                    ${t.map((e) => T`
                        <div class="forecast-day ${this.compact ? "compact" : ""}">
                          <div class="forecast-date ${this.compact ? "compact" : ""}">
                            ${this.formatDate(e.datetime ?? e.date)}
                          </div>
                          <div class="forecast-icon ${this.compact ? "compact" : ""}">
                            ${this.getWeatherIcon(e.condition, this.config.enable_animate_weather_icons ? "animated" : "mdi", this.compact ? "20px" : "24px", !0)}
                          </div>
                          <div class="forecast-temps ${this.compact ? "compact" : ""}">
                            <span class="temp-high">${Math.round(e.temperature)}°</span>
                            <span class="temp-low"
                              >${Math.round(e.templow ?? e.temperature - 5)}°</span
                            >
                          </div>
                        </div>
                      `)}
                  </div>
                </div>
              </div>
            ` : T`
              <div class="${n}">
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
            `;
	}
};
N([A({ type: Array }), M("design:type", Array)], P.prototype, "forecast", void 0), N([A({ type: Boolean }), M("design:type", Object)], P.prototype, "forecastLoading", void 0), N([A({ type: Boolean }), M("design:type", Object)], P.prototype, "show_forecast", void 0), N([A({ type: Object }), M("design:type", Object)], P.prototype, "config", void 0), N([A({ type: Function }), M("design:type", Function)], P.prototype, "_t", void 0), N([A({ type: Function }), M("design:type", Function)], P.prototype, "getWeatherIcon", void 0), N([A({ type: Function }), M("design:type", Function)], P.prototype, "formatDate", void 0), N([A({ type: Boolean }), M("design:type", Boolean)], P.prototype, "compact", void 0), N([A({ type: Boolean }), M("design:type", Boolean)], P.prototype, "startTomorrow", void 0), N([A({ type: Number }), M("design:type", Number)], P.prototype, "maxDays", void 0), N([A({ type: Boolean }), M("design:type", Boolean)], P.prototype, "alignRight", void 0), P = N([k("daily-forecast-chart")], P);
//#endregion
//#region src/charts/forecast-temperature-chart.ts
var Ue = class extends O {
	hourlyForecast = [];
	forecastHours = 12;
	show_temperature = !0;
	_t;
	showHoursChartLabel;
	static styles = s`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 0;
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
    .chart {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: var(--chart-padding, 15px);
      margin-top: var(--chart-margin-top, 15px);
      margin-bottom: var(--chart-margin-bottom, 0);
      border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .chart-svg-area {
      width: 100%;
      overflow: hidden;
      border-radius: 4px;
      flex: 1;
      min-height: 0;
    }
  `;
	render() {
		if (this.show_temperature === !1) return T``;
		let e = this.hourlyForecast.slice(0, this.forecastHours).map((e) => typeof e.temperature == "number" && !isNaN(e.temperature) ? e.temperature : null), t = e.filter((e) => e !== null);
		return T`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          ${this._t("temperature_hours", { hours: this.forecastHours })}
          <span style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
            >°C</span
          >
        </div>
        <div class="chart-svg-area" style="aspect-ratio: 600 / 100; width: 100%;">
          ${(() => {
			if (t.length < 2) return T``;
			let n = e.length, r = Math.floor(Math.min(...t) / 5) * 5, i = Math.ceil(Math.max(...t) / 5) * 5;
			r === i && (r -= 5, i += 5);
			let a = i - r, o = 566 / (n - 1), s = (e) => 28 + e * o, c = (e) => 82 - (e - r) / a * 74, l = [];
			for (let e = r; e <= i; e += 5) {
				let t = c(e), n = e % 10 == 0;
				l.push(E`
                <line x1="${28}" y1="${t}" x2="${594}" y2="${t}"
                  stroke="#888" stroke-width="${n ? 1 : .6}"
                  stroke-dasharray="${n ? "4,3" : "2,3"}" opacity="0.6"/>
                <text x="${25}" y="${t}" text-anchor="end" dominant-baseline="middle"
                  font-size="8" fill="#888" opacity="0.8">${e}°</text>
              `);
			}
			let u = [];
			for (let e = 0; e < n; e++) {
				let t = s(e), r = this.hourlyForecast[e], i = r?.datetime ? new Date(r.datetime) : null;
				(i && i.getHours() % 3 == 0 || n <= 8) && u.push(E`
                  <line x1="${t}" y1="${8}" x2="${t}" y2="${82}"
                    stroke="#888" stroke-width="0.4" stroke-dasharray="2,3" opacity="0.3"/>
                  <text x="${t}" y="${98}" text-anchor="middle"
                    font-size="8" fill="#888" opacity="0.7">
                    ${i ? i.getHours() + "h" : ""}
                  </text>
                `);
			}
			return E`<svg width="100%" height="100%" viewBox="0 0 ${600} ${100}" preserveAspectRatio="none" style="display:block;">
              ${l}
              ${u}
              <polyline points="${e.map((e, t) => e === null ? "" : `${s(t)},${c(e)}`).filter(Boolean).join(" ")}" fill="none" stroke="#db4a34" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round"/>
              ${e.map((e, t) => e === null ? null : E`<circle cx="${s(t)}" cy="${c(e)}" r="2.5" fill="#db4a34"/>`)}
            </svg>`;
		})()}
        </div>
      </div>
    `;
	}
};
N([A({ type: Array }), M("design:type", Array)], Ue.prototype, "hourlyForecast", void 0), N([A({ type: Number }), M("design:type", Object)], Ue.prototype, "forecastHours", void 0), N([A({ type: Boolean }), M("design:type", Object)], Ue.prototype, "show_temperature", void 0), N([A({ type: Function }), M("design:type", Function)], Ue.prototype, "_t", void 0), N([A({ type: Function }), M("design:type", Function)], Ue.prototype, "showHoursChartLabel", void 0), Ue = N([k("forecast-temperature-chart")], Ue);
//#endregion
//#region src/charts/precipitation-chart.ts
var We = class extends O {
	hourlyForecast = [];
	forecastHours = 12;
	show_precipitation = !0;
	_t;
	showHoursChartLabel;
	static styles = s`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 0;
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
    .chart {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: var(--chart-padding, 15px);
      margin-top: var(--chart-margin-top, 15px);
      margin-bottom: var(--chart-margin-bottom, 0);
      border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .chart-svg-area {
      width: 100%;
      overflow: hidden;
      border-radius: 4px;
      flex: 1;
      min-height: 0;
    }
  `;
	render() {
		if (this.show_precipitation === !1) return T``;
		let e = this.hourlyForecast.slice(0, this.forecastHours), t = e.some((e) => typeof e.precipitation == "number" && !isNaN(e.precipitation));
		return this.hourlyForecast.length === 0 || !t ? T`
        <div class="chart">
          <div class="section-title">
            <ha-icon icon="mdi:weather-pouring"></ha-icon>
            ${this._t("precipitation_hours", { hours: this.forecastHours })}
          </div>
          <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
            ${this._t("no_precipitation_data")}
          </div>
        </div>
      ` : T`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:weather-pouring"></ha-icon>
          ${this._t("precipitation_hours", { hours: this.forecastHours })}
          <span style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
            >mm</span
          >
        </div>
        <div class="chart-svg-area" style="aspect-ratio: 600 / 100; width: 100%;">
          ${(() => {
			let t = e.length;
			if (t === 0) return T``;
			let n = e.map((e) => typeof e.precipitation == "number" && !isNaN(e.precipitation) ? e.precipitation : 0), r = Math.max(5, Math.ceil(Math.max(...n))), i = r, a = (e) => 82 - e / i * 74, o = 566 / t, s = (e) => 28 + e * o + o / 2, c = [
				1,
				2,
				3,
				5,
				8,
				10,
				15,
				20
			].filter((e) => e <= r);
			c.includes(r) || c.push(r);
			let l = [];
			for (let e of c) {
				let t = a(e), n = e % 5 == 0;
				l.push(E`
                <line x1="${28}" y1="${t}" x2="${594}" y2="${t}"
                  stroke="#888" stroke-width="${n ? 1 : .6}"
                  stroke-dasharray="${n ? "4,3" : "2,3"}" opacity="0.6"/>
                <text x="${25}" y="${t}" text-anchor="end" dominant-baseline="middle"
                  font-size="8" fill="#888" opacity="0.8">${e}</text>
              `);
			}
			l.push(E`
              <line x1="${28}" y1="${a(0)}" x2="${594}" y2="${a(0)}"
                stroke="#888" stroke-width="1" opacity="0.5"/>
              <text x="${25}" y="${a(0)}" text-anchor="end" dominant-baseline="middle"
                font-size="8" fill="#888" opacity="0.8">0</text>
            `);
			let u = [];
			for (let n = 0; n < t; n++) {
				let r = s(n), i = e[n]?.datetime ? new Date(e[n].datetime) : null;
				(i ? i.getHours() % 3 == 0 : t <= 8) && u.push(E`
                  <line x1="${r}" y1="${8}" x2="${r}" y2="${82}"
                    stroke="#888" stroke-width="0.4" stroke-dasharray="2,3" opacity="0.3"/>
                  <text x="${r}" y="${98}" text-anchor="middle"
                    font-size="8" fill="#888" opacity="0.7">
                    ${i ? i.getHours() + "h" : ""}
                  </text>
                `);
			}
			let d = [], ee = [], f = Math.max(2, o * .55);
			for (let n = 0; n < t; n++) {
				let t = e[n], r = s(n) - f / 2, o = typeof t.precipitation_probability == "number" && !isNaN(t.precipitation_probability) ? t.precipitation_probability : 0, c = typeof t.precipitation == "number" && !isNaN(t.precipitation) ? t.precipitation : 0, l = o / 100 * 5 / i * 74;
				if (o > 0 && d.push(E`
                  <rect x="${r}" y="${a(0) - l}" width="${f}" height="${l}"
                    fill="#87898e" opacity="0.35" rx="1.5"/>
                `), c > 0) {
					let e = c / i * 74;
					ee.push(E`
                  <rect x="${r}" y="${a(0) - e}" width="${f}" height="${e}"
                    fill="url(#precip-grad)" opacity="1" rx="1.5"/>
                `);
				}
			}
			return E`<svg width="100%" height="100%" viewBox="0 0 ${600} ${100}" preserveAspectRatio="none" style="display:block;">
              <defs>
                <linearGradient id="precip-grad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stop-color="#3498db"/>
                  <stop offset="100%" stop-color="#85c5e5"/>
                </linearGradient>
              </defs>
              ${l}
              ${u}
              ${d}
              ${ee}
            </svg>`;
		})()}
        </div>
      </div>
    `;
	}
};
N([A({ type: Array }), M("design:type", Array)], We.prototype, "hourlyForecast", void 0), N([A({ type: Number }), M("design:type", Object)], We.prototype, "forecastHours", void 0), N([A({ type: Boolean }), M("design:type", Object)], We.prototype, "show_precipitation", void 0), N([A({ type: Function }), M("design:type", Function)], We.prototype, "_t", void 0), N([A({ type: Function }), M("design:type", Function)], We.prototype, "showHoursChartLabel", void 0), We = N([k("precipitation-chart")], We);
//#endregion
//#region src/charts/sunshine-chart.ts
var F = class extends O {
	hourlyForecast = [];
	forecastHours = 12;
	show_sunshine = !0;
	weatherEntity;
	sun_entity;
	_t;
	showHoursChartLabel;
	static styles = s`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 0;
    }

    .chart {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: var(--chart-padding, 15px);
      margin-top: var(--chart-margin-top, 15px);
      margin-bottom: var(--chart-margin-bottom, 0);
      border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .chart-sunshine {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: var(--chart-padding, 15px);
      margin-top: var(--chart-margin-top, 15px);
      margin-bottom: var(--chart-margin-bottom, 0);
      border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .chart-bars {
      display: flex;
      justify-content: space-between;
      height: 80px;
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
  `;
	render() {
		return this.show_sunshine === !1 ? T`` : this.hourlyForecast.length > 0 && this.hourlyForecast.slice(0, this.forecastHours).some((e) => {
			let t = e;
			return typeof t.sunshine == "number" && !isNaN(t.sunshine) || typeof t.sunshine_duration == "number" && !isNaN(t.sunshine_duration);
		}) ? T`
            <div class="chart-sunshine" style="position:relative;">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${this._t("sunshine_hours", { hours: this.forecastHours })}
                <span
                  style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
                  >min</span
                >
              </div>
              <div class="chart-bars" style="position:relative;">
                ${(() => {
			let e = this.weatherEntity?.attributes?.sunrise ? new Date(this.weatherEntity.attributes.sunrise) : this.sun_entity?.attributes?.next_rising ? new Date((this.sun_entity?.attributes).next_rising) : null, t = this.weatherEntity?.attributes?.sunset ? new Date(this.weatherEntity.attributes.sunset) : this.sun_entity?.attributes?.next_setting ? new Date((this.sun_entity?.attributes).next_setting) : null, n = this.hourlyForecast[0]?.datetime ? new Date(this.hourlyForecast[0].datetime) : null, r = -1, i = -1;
			return e && n && (r = Math.round((e.getTime() - n.getTime()) / (3600 * 1e3))), t && n && (i = Math.round((t.getTime() - n.getTime()) / (3600 * 1e3))), T`
                    ${r >= 0 && r < this.forecastHours ? T`
                          <div
                            style="position:absolute;left:calc(${r / this.forecastHours * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-up"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d">
                              ${e ? e.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			}) : ""}</span
                            >
                          </div>
                        ` : ""}
                    ${i >= 0 && i < this.forecastHours ? T`
                          <div
                            style="position:absolute;left:calc(${i / this.forecastHours * 100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-down"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d;">
                              ${t ? t.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			}) : ""}</span
                            >
                          </div>
                        ` : ""}
                  `;
		})()}
                ${this.hourlyForecast.slice(0, this.forecastHours).map((e) => {
			let t = e, n = typeof t.sunshine == "number" && !isNaN(t.sunshine) ? t.sunshine : typeof t.sunshine_duration == "number" && !isNaN(t.sunshine_duration) ? t.sunshine_duration : null, r = n === null ? 2 : Math.round(n);
			return T`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#fbc02d; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${n === null ? "" : n.toFixed(0)}
                      </span>
                      <div class="chart-bar-sunshine" style="height: ${r}px;"></div>
                    </div>
                  `;
		})}
              </div>
              <div
                style="display:flex; justify-content:space-between; font-size:11px; color:var(--secondary-text-color, #888); margin-top:4px;"
              >
                ${this.hourlyForecast.slice(0, this.forecastHours).map((e) => {
			let t = e.datetime ? new Date(e.datetime) : null;
			return T`<div style="flex:1; text-align:center; overflow:hidden;">
                    ${t && t.getHours() % 3 == 0 && t ? t.getHours() + "h" : ""}
                  </div>`;
		})}
              </div>
            </div>
          ` : T`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${this._t("sunshine_hours", { hours: this.forecastHours })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${this._t("no_sunshine_data")}
              </div>
            </div>
          `;
	}
};
N([A({ type: Array }), M("design:type", Array)], F.prototype, "hourlyForecast", void 0), N([A({ type: Number }), M("design:type", Object)], F.prototype, "forecastHours", void 0), N([A({ type: Boolean }), M("design:type", Object)], F.prototype, "show_sunshine", void 0), N([A({ type: Object }), M("design:type", Object)], F.prototype, "weatherEntity", void 0), N([A({ type: Object }), M("design:type", Object)], F.prototype, "sun_entity", void 0), N([A({ type: Function }), M("design:type", Function)], F.prototype, "_t", void 0), N([A({ type: Function }), M("design:type", Function)], F.prototype, "showHoursChartLabel", void 0), F = N([k("sunshine-chart")], F);
//#endregion
//#region src/charts/wind-chart.ts
var Ge = class extends O {
	hourlyForecast = [];
	forecastHours = 12;
	show_wind = !0;
	_t;
	showHoursChartLabel;
	static styles = s`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 0;
    }

    .chart {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: var(--chart-padding, 15px);
      margin-top: var(--chart-margin-top, 15px);
      margin-bottom: var(--chart-margin-bottom, 0);
      border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
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
    .chart-svg-area {
      width: 100%;
      overflow: hidden;
      border-radius: 4px;
      flex: 1;
      min-height: 0;
    }
  `;
	render() {
		if (this.show_wind === !1) return T``;
		let e = this.hourlyForecast.slice(0, this.forecastHours), t = e.some((e) => typeof e.wind_speed == "number" && !isNaN(e.wind_speed));
		return e.length === 0 || !t ? T`` : T`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:weather-windy"></ha-icon>
          ${this._t("wind_hours", { hours: this.forecastHours })}
          <span style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
            >km/h</span
          >
        </div>
        <div class="chart-svg-area" style="aspect-ratio: 600 / 122; width: 100%;">
          ${(() => {
			let t = e.length;
			if (t < 2) return T``;
			let n = e.map((e) => typeof e.wind_speed == "number" && !isNaN(e.wind_speed) ? e.wind_speed : null), r = n.filter((e) => e !== null), i = Math.max(10, Math.ceil(Math.max(...r) / 5) * 5), a = i, o = (e) => 82 - e / a * 74, s = 566 / (t - 1), c = (e) => 28 + e * s, l = [];
			for (let e = 0; e <= i; e += 5) {
				let t = o(e), n = e % 10 == 0;
				l.push(E`
                <line x1="${28}" y1="${t}" x2="${594}" y2="${t}"
                  stroke="#888" stroke-width="${n ? 1 : .6}"
                  stroke-dasharray="${n ? "4,3" : "2,3"}" opacity="0.6"/>
                <text x="${25}" y="${t}" text-anchor="end" dominant-baseline="middle"
                  font-size="8" fill="#888" opacity="0.8">${e}</text>
              `);
			}
			let u = [];
			for (let n = 0; n < t; n++) {
				let r = c(n), i = e[n]?.datetime ? new Date(e[n].datetime) : null;
				(i ? i.getHours() % 3 == 0 : t <= 8) && u.push(E`
                  <line x1="${r}" y1="${8}" x2="${r}" y2="${82}"
                    stroke="#888" stroke-width="0.4" stroke-dasharray="2,3" opacity="0.3"/>
                  <text x="${r}" y="${98}" text-anchor="middle"
                    font-size="8" fill="#888" opacity="0.7">
                    ${i ? i.getHours() + "h" : ""}
                  </text>
                `);
			}
			return E`<svg width="100%" height="100%" viewBox="0 0 ${600} ${122}" preserveAspectRatio="none" style="display:block;">
              ${l}
              ${u}
              <polyline points="${n.map((e, t) => e === null ? "" : `${c(t)},${o(e)}`).filter(Boolean).join(" ")}" fill="none" stroke="#44739e" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round"/>
              ${n.map((e, t) => e === null ? null : E`<circle cx="${c(t)}" cy="${o(e)}" r="2.5" fill="#44739e"/>`)}
              ${e.map((e, t) => {
				let n = typeof e.wind_bearing == "number" && !isNaN(e.wind_bearing) ? e.wind_bearing : null;
				if (n === null) return null;
				let r = c(t), i = (n - 90) * (Math.PI / 180), a = r + 7 * Math.cos(i), o = 113 + 7 * Math.sin(i), s = i + Math.PI;
				return E`
                <circle cx="${r}" cy="${113}" r="${7}" fill="none" stroke="#44739e" stroke-width="0.8" opacity="0.5"/>
                <line x1="${r + 5 * Math.cos(s)}" y1="${113 + 5 * Math.sin(s)}" x2="${a}" y2="${o}"
                  stroke="#44739e" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
                <circle cx="${a}" cy="${o}" r="1.5" fill="#44739e" opacity="0.85"/>
              `;
			})}
            </svg>`;
		})()}
        </div>
      </div>
    `;
	}
};
N([A({ type: Array }), M("design:type", Array)], Ge.prototype, "hourlyForecast", void 0), N([A({ type: Number }), M("design:type", Object)], Ge.prototype, "forecastHours", void 0), N([A({ type: Boolean }), M("design:type", Object)], Ge.prototype, "show_wind", void 0), N([A({ type: Function }), M("design:type", Function)], Ge.prototype, "_t", void 0), N([A({ type: Function }), M("design:type", Function)], Ge.prototype, "showHoursChartLabel", void 0), Ge = N([k("wind-chart")], Ge);
//#endregion
//#region src/charts/daily-forecast-diagram.ts
var Ke = class extends O {
	forecast = [];
	hourlyForecast = [];
	config;
	getWeatherIcon;
	standalone = !1;
	_resizeObserver;
	_measuredWidth = 0;
	_measuredHeight = 0;
	static styles = s`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 0;
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
  `;
	getCSSVariable(e, t = "50") {
		let n = getComputedStyle(document.documentElement).getPropertyValue(e).trim();
		return Number.parseInt(n || t);
	}
	connectedCallback() {
		super.connectedCallback(), this._resizeObserver = new ResizeObserver((e) => {
			for (let t of e) {
				let e = Math.floor(t.contentRect.width), n = Math.floor(t.contentRect.height);
				n > 0 && n !== this._measuredHeight && (this._measuredHeight = n, this.requestUpdate()), e > 0 && e !== this._measuredWidth && (this._measuredWidth = e, this.requestUpdate());
			}
		}), this._resizeObserver.observe(this);
	}
	disconnectedCallback() {
		this._resizeObserver?.disconnect(), this._resizeObserver = void 0, super.disconnectedCallback();
	}
	render() {
		let e = this.forecast.slice(0, 7), t = this.hourlyForecast.slice(0, e.length * 24);
		if (!t.length) return T`<div>No hourly forecast available</div>`;
		let n = e.length, r = (this.standalone ? this.config.grid_options?.rows || 3 : 2) * 64 - 8, i = this.standalone ? this._measuredHeight > 0 ? this._measuredHeight : r : 200, a = this._measuredWidth;
		if (!a) {
			let e = this.getBoundingClientRect?.();
			a = e?.width ? Math.floor(e.width) : 400;
		}
		let o = a, s = i, c = s - 32, l = o - 16 - 0, u = Math.max(0, l - 16) / n, d = Math.min(120, Math.max(80, c * .35)), ee = Math.max(10, c * .05), f = c - d - ee, p = Math.min(u * .7, d * .4), m = Math.max(9, Math.round(d * .075)), te = Math.max(11, Math.round(d * .11)), ne = this.config?.diagram_labels ?? "compact", re = Math.max(8, Math.min(10, Math.round(f * .05))), ie = 26 + m, ae = ie + 10, oe = ae + p + 10, se = 16 + d + ee, h = u / 24, g = t.map((e) => typeof e.temperature == "number" ? e.temperature : null), ce = Math.min(...g.filter((e) => e !== null)), le = Math.max(...g.filter((e) => e !== null)), ue = se, _ = se + f, v = t.map((e) => {
			let t = e;
			return typeof t.precipitation == "number" ? t.precipitation : typeof t.rain == "number" ? t.rain : 0;
		}), de = t.map((e) => {
			let t = e, n = typeof t.precipitation_probability == "number" ? t.precipitation_probability : typeof t.probability_of_precipitation == "number" ? t.probability_of_precipitation : typeof t.pop == "number" ? t.pop <= 1 ? t.pop * 100 : t.pop : 0, r = Number(n);
			return Number.isFinite(r) ? Math.max(0, Math.min(100, r)) : 0;
		}), fe = {};
		e.forEach((e, t) => {
			let n = new Date(e.datetime), r = `${n.getFullYear()}-${n.getMonth()}-${n.getDate()}`;
			fe[r] = t;
		});
		function y(e) {
			let t = fe[`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`], n = e.getHours();
			return {
				dayIdx: t === void 0 ? -1 : t,
				hourInDay: n >= 0 && n < 24 ? n : -1
			};
		}
		let b = {};
		for (let e = 0; e < n; e++) for (let t = 0; t < 24; t++) {
			let n = `${e}-${t}`;
			b[n] = null;
		}
		t.forEach((e, t) => {
			if (e.datetime && g[t] !== null) {
				let r = new Date(e.datetime), { dayIdx: i, hourInDay: a } = y(r), o = `${i}-${a}`;
				i >= 0 && i < n && a >= 0 && a < 24 ? b[o] = {
					temp: g[t],
					precip: v[t],
					precipProb: de[t],
					originalIndex: t
				} : console.warn(`Data point ${t} outside bounds:`, {
					dayIdx: i,
					hourInDay: a,
					nDays: n,
					dt: r.toISOString()
				});
			}
		});
		let x = Math.floor(ce / 5) * 5, S = Math.ceil(le / 5) * 5;
		x > 0 && (x = 0), S < 0 && (S = 0);
		let pe = S - x, me = [], he = [];
		for (let e = 0; e < n; e++) for (let t = 0; t < 24; t++) {
			let n = b[`${e}-${t}`];
			if (n && n.temp !== null) {
				let r = 16 + e * u + t * h + h / 2, i = _ - (n.temp - x) / pe * (_ - ue);
				he.push(`${r},${i}`);
			}
		}
		he.length > 0 && me.push(E`
          <!-- Main temperature line -->
          <polyline points="${he.join(" ")}" fill="none" stroke="#e74c3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        `);
		let C = Math.max(3, Math.floor(h) - 2), ge = _, w = 5 / pe * (_ - ue) / 5;
		function _e(e) {
			if (e <= 0) return "transparent";
			let t = [
				{
					val: 0,
					color: {
						r: 89,
						g: 148,
						b: 177
					}
				},
				{
					val: 5,
					color: {
						r: 33,
						g: 150,
						b: 243
					}
				},
				{
					val: 10,
					color: {
						r: 0,
						g: 100,
						b: 0
					}
				},
				{
					val: 15,
					color: {
						r: 76,
						g: 175,
						b: 80
					}
				},
				{
					val: 20,
					color: {
						r: 255,
						g: 224,
						b: 102
					}
				}
			], n = t[0], r = t[t.length - 1];
			for (let i = 1; i < t.length; i++) if (e < t[i].val) {
				r = t[i], n = t[i - 1];
				break;
			}
			let i = (e - n.val) / (r.val - n.val);
			return `rgb(${Math.round(n.color.r + (r.color.r - n.color.r) * i)},${Math.round(n.color.g + (r.color.g - n.color.g) * i)},${Math.round(n.color.b + (r.color.b - n.color.b) * i)})`;
		}
		let ve = [];
		for (let e = 0; e < n; e++) for (let t = 0; t < 24; t++) {
			let n = b[`${e}-${t}`];
			if (n && n.precipProb > 0) {
				let r = 16 + e * u + t * h + h / 2 - C / 2, i = 16 + e * u, a = 16 + (e + 1) * u - C, o = Math.max(i, Math.min(a, r)), s = n.precipProb / 100 * 5 * w;
				ve.push(E`<rect x="${o}" y="${ge - s}" width="${C}" height="${s}" fill="#988d8dff" opacity="0.4" rx="1.5"/>`);
			}
		}
		let ye = [];
		for (let e = 0; e < n; e++) for (let t = 0; t < 24; t++) {
			let n = b[`${e}-${t}`];
			if (n && n.precip > 0) {
				let r = 16 + e * u + t * h + h / 2 - C / 2, i = 16 + e * u, a = 16 + (e + 1) * u - C, o = Math.max(i, Math.min(a, r)), s = n.precip * w, c = _e(n.precip);
				ye.push(E`<rect x="${o}" y="${ge - s}" width="${C}" height="${s}"
              fill="${c}" opacity="1" rx="1.5"/>`);
			}
		}
		let be = [];
		if (t.length > 0) for (let e = 0; e <= n; e++) {
			let t = 16 + e * u;
			be.push(E`<line x1="${t}" y1="${ue}" x2="${t}" y2="${_}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`);
		}
		let xe = [];
		if (n > 0) for (let t = 0; t < n; t++) {
			let n = 16 + t * u + u / 2, r = typeof e[t].templow == "number" ? Math.round(e[t].templow || e[t].temperature - 5) : "", i = typeof e[t].temperature == "number" ? Math.round(e[t].temperature) : "";
			xe.push(E`
        <g>
          <!-- Weekday -->
          <text x="${n}" y="${ie}" text-anchor="middle" font-size="${m}" class="weather-day">
            ${new Date(e[t].datetime).toLocaleDateString(void 0, { weekday: "short" })}
          </text>
          <!-- Icon -->
          <foreignObject x="${n - p / 2}" y="${ae}" width="${p}" height="${p}">
              ${this.getWeatherIcon(e[t].condition || "", this.config.enable_animate_weather_icons ? "animated" : "mdiAsSVG", p + "px", !0)}
          </foreignObject>
          <!-- Min/Max temp -->
          <text class="weather-temp" x="${n}" y="${oe}" text-anchor="middle" font-size="${te}">${r}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${i}°</tspan></text>
        </g>
      `);
		}
		let D = [], Se = /* @__PURE__ */ new Set();
		Se.add(x), x < 0 && S > 0 && Se.add(0), Se.add(S);
		for (let e = x; e <= S; e += 5) if (e % 5 == 0) {
			let t = ue + (S - e) / pe * (_ - ue);
			if (t >= ue && t <= _) {
				let n = e % 10 == 0;
				D.push(E`
            <line x1="${16}" y1="${t}" x2="${l}" y2="${t}"
              stroke="#ddd" stroke-width="${n ? 1 : .5}"
              stroke-dasharray="${n ? "none" : "2,2"}" opacity="0.6"/>
            ${ne === "none" ? E`` : ne === "full" ? n ? E`<text x="${20}" y="${t}" font-size="${re}" fill="#888" opacity="0.9" text-anchor="start" dominant-baseline="middle">${e}°</text>` : E`` : Se.has(e) ? E`<text x="${20}" y="${t}" font-size="${re}" fill="#888" opacity="0.9" text-anchor="start" dominant-baseline="middle">${e}°</text>` : E``}
          `);
			}
		}
		let Ce = E``;
		return T`
      <style>
        .chart {
        ${this.standalone === !1 ? "background: var(--card-background-color, #fff);margin-top: 15px;" : ""}
          border-radius: 12px;
          padding: 0;
          margin-bottom: var(--chart-margin-bottom, 0);
          border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
          overflow: hidden;
          position: relative; /* Enable absolute positioning for SVG overlay */
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }
        .chart svg {
          width: 100%;
          height: 100%;
        }
      </style>
      <div class="chart">
        <svg width="100%" height="100%" viewBox="0 0 ${o} ${s}" style="display:block;">
          <!-- Background grid lines (behind everything) -->
          ${D} ${be}
          <!-- Day groups (labels and icons) -->
          ${xe}
          <!-- Precipitation bars -->
          ${ve} ${ye}
          <!-- Right-side labels for mm and % -->
          ${Ce}
        </svg>

        <!-- Temperature lines in completely separate SVG overlay (continuous line, always on top) -->
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 ${o} ${s}"
          style="display:block; position: absolute; top: 0; left: 0; pointer-events: none;"
        >
          ${me}
        </svg>
      </div>
    `;
	}
};
N([A({ type: Array }), M("design:type", Array)], Ke.prototype, "forecast", void 0), N([A({ type: Array }), M("design:type", Array)], Ke.prototype, "hourlyForecast", void 0), N([A({ type: Object }), M("design:type", Object)], Ke.prototype, "config", void 0), N([A({ type: Function }), M("design:type", Function)], Ke.prototype, "getWeatherIcon", void 0), N([A({ type: Boolean }), M("design:type", Object)], Ke.prototype, "standalone", void 0), Ke = N([k("daily-forecast-diagram")], Ke);
//#endregion
//#region node_modules/lit-translate/config.js
var qe = "langChanged";
//#endregion
//#region node_modules/lit-translate/helpers.js
function Je(e, t, n) {
	return Object.entries(Xe(t || {})).reduce((e, [t, n]) => e.replace(RegExp(`{{[  ]*${t}[  ]*}}`, "gm"), String(Xe(n))), e);
}
function Ye(e, t) {
	let n = e.split("."), r = t.strings;
	for (; r != null && n.length > 0;) r = r[n.shift()];
	return r == null ? null : r.toString();
}
function Xe(e) {
	return typeof e == "function" ? e() : e;
}
var Ze = {
	loader: () => Promise.resolve({}),
	empty: (e) => `[${e}]`,
	lookup: Ye,
	interpolate: Je,
	translationCache: {}
};
function I(e) {
	return Ze = Object.assign(Object.assign({}, Ze), e);
}
function Qe(e) {
	window.dispatchEvent(new CustomEvent(qe, { detail: e }));
}
function $e(e, t, n = Ze) {
	Qe({
		previousStrings: n.strings,
		previousLang: n.lang,
		lang: n.lang = e,
		strings: n.strings = t
	});
}
function et(e, t) {
	let n = (t) => e(t.detail);
	return window.addEventListener(qe, n, t), () => window.removeEventListener(qe, n);
}
async function L(e, t = Ze) {
	let n = await t.loader(e, t);
	t.translationCache = {}, $e(e, n, t);
}
function R(e, t, n = Ze) {
	let r = n.translationCache[e] || (n.translationCache[e] = n.lookup(e, n) || n.empty(e, n));
	return t = t == null ? null : Xe(t), t == null ? r : n.interpolate(r, t, n);
}
//#endregion
//#region node_modules/lit-html/directive.js
var tt = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, nt = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), rt = class {
	constructor(e) {}
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
}, it = window, at = it.trustedTypes, ot = at ? at.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, st = "$lit$", z = `lit$${(Math.random() + "").slice(9)}$`, ct = "?" + z, lt = `<${ct}>`, ut = document, dt = () => ut.createComment(""), ft = (e) => e === null || typeof e != "object" && typeof e != "function", pt = Array.isArray, mt = (e) => pt(e) || typeof e?.[Symbol.iterator] == "function", ht = "[ 	\n\f\r]", gt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _t = /-->/g, vt = />/g, yt = RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), bt = /'/g, xt = /"/g, St = /^(?:script|style|textarea|title)$/i, Ct = Symbol.for("lit-noChange"), B = Symbol.for("lit-nothing"), wt = /* @__PURE__ */ new WeakMap(), Tt = ut.createTreeWalker(ut, 129, null, !1);
function Et(e, t) {
	if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return ot === void 0 ? t : ot.createHTML(t);
}
var Dt = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : "", o = gt;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === gt ? c[1] === "!--" ? o = _t : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = yt) : (St.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = yt) : o = vt : o === yt ? c[0] === ">" ? (o = i ?? gt, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? yt : c[3] === "\"" ? xt : bt) : o === xt || o === bt ? o = yt : o === _t || o === vt ? o = gt : (o = yt, i = void 0);
		let d = o === yt && e[t + 1].startsWith("/>") ? " " : "";
		a += o === gt ? n + lt : l >= 0 ? (r.push(s), n.slice(0, l) + st + n.slice(l) + z + d) : n + z + (l === -2 ? (r.push(void 0), t) : d);
	}
	return [Et(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : "")), r];
}, Ot = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Dt(t, n);
		if (this.el = e.createElement(l, r), Tt.currentNode = this.el.content, n === 2) {
			let e = this.el.content, t = e.firstChild;
			t.remove(), e.append(...t.childNodes);
		}
		for (; (i = Tt.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) {
					let e = [];
					for (let t of i.getAttributeNames()) if (t.endsWith(st) || t.startsWith(z)) {
						let n = u[o++];
						if (e.push(t), n !== void 0) {
							let e = i.getAttribute(n.toLowerCase() + st).split(z), t = /([.?@])?(.*)/.exec(n);
							c.push({
								type: 1,
								index: a,
								name: t[2],
								strings: e,
								ctor: t[1] === "." ? Nt : t[1] === "?" ? Ft : t[1] === "@" ? It : Mt
							});
						} else c.push({
							type: 6,
							index: a
						});
					}
					for (let t of e) i.removeAttribute(t);
				}
				if (St.test(i.tagName)) {
					let e = i.textContent.split(z), t = e.length - 1;
					if (t > 0) {
						i.textContent = at ? at.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], dt()), Tt.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], dt());
					}
				}
			} else if (i.nodeType === 8) if (i.data === ct) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(z, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += z.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = ut.createElement("template");
		return n.innerHTML = e, n;
	}
};
function kt(e, t, n = e, r) {
	var i, a;
	if (t === Ct) return t;
	let o = r === void 0 ? n._$Cl : n._$Co?.[r], s = ft(t) ? void 0 : t._$litDirective$;
	return o?.constructor !== s && ((i = o?._$AO) == null || i.call(o, !1), s === void 0 ? o = void 0 : (o = new s(e), o._$AT(e, n, r)), r === void 0 ? n._$Cl = o : ((a = n)._$Co ?? (a._$Co = []))[r] = o), o !== void 0 && (t = kt(e, o._$AS(e, t.values), o, r)), t;
}
var At = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? ut).importNode(t, !0);
		Tt.currentNode = r;
		let i = Tt.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new jt(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Lt(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = Tt.nextNode(), a++);
		}
		return Tt.currentNode = ut, r;
	}
	v(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, jt = class e {
	constructor(e, t, n, r) {
		var i;
		this.type = 2, this._$AH = B, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cp = (i = r?.isConnected) == null || i;
	}
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cp;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = kt(this, e, t), ft(e) ? e === B || e == null || e === "" ? (this._$AH !== B && this._$AR(), this._$AH = B) : e !== this._$AH && e !== Ct && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? mt(e) ? this.T(e) : this._(e) : this.$(e) : this.g(e);
	}
	k(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	$(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
	}
	_(e) {
		this._$AH !== B && ft(this._$AH) ? this._$AA.nextSibling.data = e : this.$(ut.createTextNode(e)), this._$AH = e;
	}
	g(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Ot.createElement(Et(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.v(t);
		else {
			let e = new At(r, this), n = e.u(this.options);
			e.v(t), this.$(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = wt.get(e.strings);
		return t === void 0 && wt.set(e.strings, t = new Ot(e)), t;
	}
	T(t) {
		pt(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.k(dt()), this.k(dt()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		var n;
		for ((n = this._$AP) == null || n.call(this, !1, !0, t); e && e !== this._$AB;) {
			let t = e.nextSibling;
			e.remove(), e = t;
		}
	}
	setConnected(e) {
		var t;
		this._$AM === void 0 && (this._$Cp = e, (t = this._$AP) == null || t.call(this, e));
	}
}, Mt = class {
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = B, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = B;
	}
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = kt(this, e, t, 0), a = !ft(e) || e !== this._$AH && e !== Ct, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = kt(this, r[n + o], t, o), s === Ct && (s = this._$AH[o]), a ||= !ft(s) || s !== this._$AH[o], s === B ? e = B : e !== B && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === B ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Nt = class extends Mt {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === B ? void 0 : e;
	}
}, Pt = at ? at.emptyScript : "", Ft = class extends Mt {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		e && e !== B ? this.element.setAttribute(this.name, Pt) : this.element.removeAttribute(this.name);
	}
}, It = class extends Mt {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = kt(this, e, t, 0) ?? B) === Ct) return;
		let n = this._$AH, r = e === B && n !== B || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== B && (n === B || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Lt = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		kt(this, e);
	}
}, Rt = {
	O: st,
	P: z,
	A: ct,
	C: 1,
	M: Dt,
	L: At,
	R: mt,
	D: kt,
	I: jt,
	V: Mt,
	H: Ft,
	N: It,
	U: Nt,
	F: Lt
}, zt = it.litHtmlPolyfillSupport;
zt?.(Ot, jt), (it.litHtmlVersions ??= []).push("2.8.0");
//#endregion
//#region node_modules/lit-html/directive-helpers.js
var { I: Bt } = Rt, Vt = (e) => e.strings === void 0, Ht = (e, t) => {
	var n, r;
	let i = e._$AN;
	if (i === void 0) return !1;
	for (let e of i) (r = (n = e)._$AO) == null || r.call(n, t, !1), Ht(e, t);
	return !0;
}, Ut = (e) => {
	let t, n;
	do {
		if ((t = e._$AM) === void 0) break;
		n = t._$AN, n.delete(e), e = t;
	} while (n?.size === 0);
}, Wt = (e) => {
	for (let t; t = e._$AM; e = t) {
		let n = t._$AN;
		if (n === void 0) t._$AN = n = /* @__PURE__ */ new Set();
		else if (n.has(e)) break;
		n.add(e), qt(t);
	}
};
function Gt(e) {
	this._$AN === void 0 ? this._$AM = e : (Ut(this), this._$AM = e, Wt(this));
}
function Kt(e, t = !1, n = 0) {
	let r = this._$AH, i = this._$AN;
	if (i !== void 0 && i.size !== 0) if (t) if (Array.isArray(r)) for (let e = n; e < r.length; e++) Ht(r[e], !1), Ut(r[e]);
	else r != null && (Ht(r, !1), Ut(r));
	else Ht(this, e);
}
var qt = (e) => {
	var t, n;
	e.type == tt.CHILD && ((t = e)._$AP ?? (t._$AP = Kt), (n = e)._$AQ ?? (n._$AQ = Gt));
}, Jt = class extends rt {
	constructor() {
		super(...arguments), this._$AN = void 0;
	}
	_$AT(e, t, n) {
		super._$AT(e, t, n), Wt(this), this.isConnected = e._$AU;
	}
	_$AO(e, t = !0) {
		var n, r;
		e !== this.isConnected && (this.isConnected = e, e ? (n = this.reconnected) == null || n.call(this) : (r = this.disconnected) == null || r.call(this)), t && (Ht(this, e), Ut(this));
	}
	setValue(e) {
		if (Vt(this._$Ct)) this._$Ct._$AI(e, this);
		else {
			let t = [...this._$Ct._$AH];
			t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
		}
	}
	disconnected() {}
	reconnected() {}
}, Yt = class extends Jt {
	constructor() {
		super(...arguments), this.langChangedSubscription = null, this.getValue = (() => "");
	}
	renderValue(e) {
		return this.getValue = e, this.subscribe(), this.getValue();
	}
	langChanged(e) {
		this.setValue(this.getValue(e));
	}
	subscribe() {
		this.langChangedSubscription ??= et(this.langChanged.bind(this));
	}
	unsubscribe() {
		this.langChangedSubscription != null && this.langChangedSubscription();
	}
	disconnected() {
		this.unsubscribe();
	}
	reconnected() {
		this.subscribe();
	}
}, V = nt(class extends Yt {
	render(e, t, n) {
		return this.renderValue(() => R(e, t, n));
	}
}), Xt = class extends rt {
	constructor(e) {
		if (super(e), this.et = B, e.type !== tt.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
	}
	render(e) {
		if (e === B || e == null) return this.ft = void 0, this.et = e;
		if (e === Ct) return e;
		if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
		if (e === this.et) return this.ft;
		this.et = e;
		let t = [e];
		return t.raw = t, this.ft = {
			_$litType$: this.constructor.resultType,
			strings: t,
			values: []
		};
	}
};
Xt.directiveName = "unsafeHTML", Xt.resultType = 1;
var Zt;
(function(e) {
	e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
})(Zt ||= {});
var Qt;
(function(e) {
	e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
})(Qt ||= {});
var $t = (e, t, n, r) => {
	r ||= {}, n ??= {};
	let i = new Event(t, {
		bubbles: r.bubbles === void 0 ? !0 : r.bubbles,
		cancelable: !!r.cancelable,
		composed: r.composed === void 0 ? !0 : r.composed
	});
	return i.detail = n, e.dispatchEvent(i), i;
}, H = {
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
			photo_mode: "Fotorealistischer Hintergrund (PoC)",
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
				photo_mode: "Experimenteller fotorealistischer Hintergrund mit atmosphärischen Overlays (PoC).",
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
			photo_mode: "Photorealistic Background (PoC)",
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
				photo_mode: "Experimental photorealistic background with atmospheric overlays (PoC).",
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
}, en = "swissweather", tn = `${en}-card`, nn = `${tn}-editor`, U = [
	{
		name: "entity",
		required: !0,
		description: "config.descr.entity",
		selector: { entity: { domain: "weather" } }
	},
	{
		name: "location",
		description: "config.descr.location",
		selector: { text: {} }
	},
	{
		name: "show_location",
		description: "config.descr.show_location",
		selector: { boolean: {} }
	},
	{
		name: "wind_entity",
		description: "config.descr.wind_entity",
		selector: { entity: { domain: "sensor" } }
	},
	{
		name: "wind_direction_entity",
		description: "config.descr.wind_direction_entity",
		selector: { entity: { domain: "sensor" } }
	},
	{
		name: "sunshine_entity",
		description: "config.descr.sunshine_entity",
		selector: { entity: { domain: "sensor" } }
	},
	{
		name: "warning_entity",
		description: "config.descr.warning_entity",
		selector: { entity: { domain: "sensor" } }
	},
	{
		name: "forecast_hours",
		description: "config.descr.forecast_hours",
		selector: { number: {
			min: 6,
			max: 18,
			step: 1
		} }
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
		selector: { select: {
			multiple: !0,
			options: [
				{
					value: "temperature",
					label: "config.descr.temperature"
				},
				{
					value: "precipitation",
					label: "config.descr.precipitation"
				},
				{
					value: "sunshine",
					label: "config.descr.sunshine"
				},
				{
					value: "wind",
					label: "config.descr.wind"
				},
				{
					value: "forecast",
					label: "config.descr.forecast"
				}
			]
		} }
	}
];
//#endregion
//#region src/cards/full-card/swissweather-card-editor.ts
I({ loader: (e) => H[e] });
var rn = class extends O {
	hass;
	lovelace;
	_config;
	constructor() {
		super(), console.log("🎨 SwissweatherCardEditor constructor called");
	}
	setConfig(e) {
		let t = { ...e };
		for (let e of [
			"entity",
			"sun_entity",
			"wind_entity",
			"wind_direction_entity",
			"sunshine_entity",
			"warning_entity"
		]) t[e] === "" && delete t[e];
		this._config = t, this.requestUpdate();
	}
	static get styles() {
		return s`
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
		let e = [
			{
				key: "temperature",
				label: R("config.chart_temperature") || "Temperature"
			},
			{
				key: "precipitation",
				label: R("config.chart_precipitation") || "Precipitation"
			},
			{
				key: "sunshine",
				label: R("config.chart_sunshine") || "Sunshine"
			},
			{
				key: "wind",
				label: R("config.chart_wind") || "Wind"
			},
			{
				key: "forecast",
				label: R("config.chart_forecast") || "Forecast"
			}
		], t = Array.isArray(this._config?.chart_order) ? this._config.chart_order : e.map((e) => e.key);
		if (!this.hass) return T`<div>Loading...</div>`;
		L((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let n = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			show_location: this._config?.show_location ?? !0,
			location: this._config?.location ?? "",
			sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0,
			wind_entity: typeof this._config?.wind_entity == "string" ? this._config.wind_entity : void 0,
			wind_direction_entity: typeof this._config?.wind_direction_entity == "string" ? this._config.wind_direction_entity : void 0,
			sunshine_entity: typeof this._config?.sunshine_entity == "string" ? this._config.sunshine_entity : void 0,
			warning_entity: typeof this._config?.warning_entity == "string" ? this._config.warning_entity : void 0,
			show_forecast: this._config?.show_forecast ?? !0,
			forecast_hours: this._config?.forecast_hours ?? 6,
			show_temperature: this._config?.show_temperature ?? !0,
			show_precipitation: this._config?.show_precipitation ?? !0,
			show_sunshine: this._config?.show_sunshine ?? !0,
			show_warnings: this._config?.show_warnings ?? !1,
			show_wind: this._config?.show_wind ?? !0,
			enable_animate_weather_icons: this._config?.enable_animate_weather_icons ?? !0,
			compact_mode: this._config?.compact_mode ?? !1
		};
		return T`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Full Card</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${R("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${n}
            .schema=${[
			U.find((e) => e.name === "entity"),
			U.find((e) => e.name === "location"),
			U.find((e) => e.name === "show_location")
		].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Sensors -->
        <div class="group">
          <div class="group-title">${R("config.group_sensors") || "Sensors"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${n}
            .schema=${[
			U.find((e) => e.name === "warning_entity"),
			U.find((e) => e.name === "precipitation_entity"),
			U.find((e) => e.name === "sun_entity"),
			U.find((e) => e.name === "sunshine_entity"),
			U.find((e) => e.name === "wind_entity"),
			U.find((e) => e.name === "wind_direction_entity")
		].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Display options -->
        <div class="group">
          <div class="group-title">${R("config.group_display") || "Display Options"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${n}
            .schema=${[
			U.find((e) => e.name === "forecast_hours"),
			U.find((e) => e.name === "show_forecast"),
			U.find((e) => e.name === "show_precipitation"),
			U.find((e) => e.name === "show_temperature"),
			U.find((e) => e.name === "show_sunshine"),
			U.find((e) => e.name === "show_wind"),
			U.find((e) => e.name === "enable_animate_weather_icons"),
			U.find((e) => e.name === "show_warnings"),
			U.find((e) => e.name === "compact_mode")
		].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <!-- Chart order -->
        <div class="group">
          <div class="group-title">${R("config.group_chart_order") || "Chart Order"}</div>
          <ul style="list-style:none;padding:0;margin:0;">
            ${t.map((n, r) => T` <li style="display:flex;align-items:center;margin-bottom:6px;">
                <span style="flex:1;">${e.find((e) => e.key === n)?.label || n}</span>
                <button
                  style="margin-left:8px;"
                  @click=${() => this._moveChart(r, -1)}
                  ?disabled=${r === 0}
                  title="${R("config.move_up") || "Up"}"
                >
                  ⬆️
                </button>
                <button
                  style="margin-left:2px;"
                  @click=${() => this._moveChart(r, 1)}
                  ?disabled=${r === t.length - 1}
                  title="${R("config.move_down") || "Down"}"
                >
                  ⬇️
                </button>
              </li>`)}
          </ul>
        </div>
        <!-- Configuration Preview -->
        ${this._config?.entity ? T`
              <div class="preview">
                <div class="preview-title">📋 YAML-Config</div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            ` : ""}
      </div>
    `;
	}
	_moveChart(e, t) {
		if (!this._config) return;
		let n = Array.isArray(this._config.chart_order) ? [...this._config.chart_order] : [
			"temperature",
			"precipitation",
			"sunshine",
			"wind",
			"forecast"
		], r = e + t;
		if (r < 0 || r >= n.length) return;
		let i = n[e];
		n[e] = n[r], n[r] = i, this._config = {
			...this._config,
			chart_order: n
		}, $t(this, "config-changed", { config: this._config }), this.requestUpdate();
	}
	_computeLabel = (e) => ({
		entity: R("config.entity"),
		show_location: R("config.show_location"),
		sun_entity: R("config.sun_entity"),
		location: R("config.location"),
		wind_entity: R("config.wind_entity"),
		wind_direction_entity: R("config.wind_direction_entity"),
		sunshine_entity: R("config.sunshine_entity"),
		warning_entity: R("config.warning_entity"),
		show_forecast: R("config.show_forecast"),
		forecast_hours: R("config.forecast_hours"),
		show_temperature: R("config.show_temperature"),
		show_precipitation: R("config.show_precipitation"),
		show_sunshine: R("config.show_sunshine"),
		show_warnings: R("config.show_warnings"),
		show_wind: R("config.show_wind"),
		enable_animate_weather_icons: R("config.enable_animate_weather_icons"),
		compact_mode: R("config.compact_mode")
	})[e.name] || e.name;
	_computeHelper = (e) => e.description ? R(e.description) : "";
	_renderConfigPreview() {
		let e = { ...this._config };
		return e.type ||= "custom:swissweather-card", Object.keys(e).forEach((t) => {
			(e[t] === void 0 || e[t] === "") && delete e[t];
		}), Object.entries(e).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join("\n");
	}
	_valueChanged(e) {
		if (this._config ||= {
			type: tn,
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
		}, e.type === "value-changed") {
			let t = {};
			this._config && this._config.chart_order !== void 0 && (t.chart_order = this._config.chart_order);
			let { ...n } = e.detail.value || {}, r = {
				...this._config,
				...n,
				...t,
				type: "custom:swissweather-card"
			};
			if (r.show_forecast !== !1) {
				let e = Array.isArray(r.chart_order) ? [...r.chart_order] : [
					"temperature",
					"precipitation",
					"sunshine",
					"wind",
					"forecast"
				];
				e.includes("forecast") || e.push("forecast"), r.chart_order = e;
			}
			Object.keys(r).forEach((e) => {
				(r[e] === "" || r[e] === void 0) && delete r[e];
			}), this._config = r, $t(this, "config-changed", { config: this._config });
		}
	}
};
N([A({ attribute: !1 }), M("design:type", Object)], rn.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], rn.prototype, "lovelace", void 0), N([A({ attribute: !1 }), M("design:type", Object)], rn.prototype, "_config", void 0), rn = N([k(nn), M("design:paramtypes", [])], rn);
//#endregion
//#region src/charts/index.ts
function an(e, t, n) {
	let r = n ? new Date(n) : /* @__PURE__ */ new Date();
	return T`
    <div class="chart-labels">
      ${Array.from({ length: e }, (e, t) => T`
          <div
            style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
          >
            <span>${new Date(r.getTime() + t * 60 * 60 * 1e3).toLocaleTimeString([], { hour: "2-digit" })}</span>
          </div>
        `)}
    </div>
  `;
}
function on(e) {
	return [
		"So",
		"Mo",
		"Di",
		"Mi",
		"Do",
		"Fr",
		"Sa"
	][new Date(e).getDay()];
}
//#endregion
//#region node_modules/marked/lib/marked.esm.js
function sn() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var cn = sn();
function ln(e) {
	cn = e;
}
var un = { exec: () => null };
function W(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(G.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var dn = (() => {
	try {
		return !0;
	} catch {
		return !1;
	}
})(), G = {
	codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] +\S/,
	listReplaceTask: /^\[[ xX]\] +/,
	listTaskCheckbox: /\[[ xX]\]/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
	hrRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
	fencesBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
	headingBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
	htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i"),
	blockquoteBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}>`)
}, fn = /^(?:[ \t]*(?:\n|$))+/, pn = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, mn = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, gn = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, _n = / {0,3}(?:[*+-]|\d{1,9}[.)])/, vn = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, yn = W(vn).replace(/bull/g, _n).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), bn = W(vn).replace(/bull/g, _n).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), xn = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Sn = /^[^\n]+/, Cn = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, wn = W(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Cn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Tn = W(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, _n).getRegex(), En = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Dn = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, On = W("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Dn).replace("tag", En).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), kn = W(xn).replace("hr", hn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", En).getRegex(), An = {
	blockquote: W(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", kn).getRegex(),
	code: pn,
	def: wn,
	fences: mn,
	heading: gn,
	hr: hn,
	html: On,
	lheading: yn,
	list: Tn,
	newline: fn,
	paragraph: kn,
	table: un,
	text: Sn
}, jn = W("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", En).getRegex(), Mn = {
	...An,
	lheading: bn,
	table: jn,
	paragraph: W(xn).replace("hr", hn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", jn).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", En).getRegex()
}, Nn = {
	...An,
	html: W("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Dn).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: un,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: W(xn).replace("hr", hn).replace("heading", " *#{1,6} *[^\n]").replace("lheading", yn).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Pn = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Fn = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, In = /^( {2,}|\\)\n(?!\s*$)/, Ln = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Rn = /[\p{P}\p{S}]/u, zn = /[\s\p{P}\p{S}]/u, Bn = /[^\s\p{P}\p{S}]/u, Vn = W(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, zn).getRegex(), Hn = /(?!~)[\p{P}\p{S}]/u, Un = /(?!~)[\s\p{P}\p{S}]/u, Wn = /(?:[^\s\p{P}\p{S}]|~)/u, Gn = W(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", dn ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Kn = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, qn = W(Kn, "u").replace(/punct/g, Rn).getRegex(), Jn = W(Kn, "u").replace(/punct/g, Hn).getRegex(), Yn = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Xn = W(Yn, "gu").replace(/notPunctSpace/g, Bn).replace(/punctSpace/g, zn).replace(/punct/g, Rn).getRegex(), Zn = W(Yn, "gu").replace(/notPunctSpace/g, Wn).replace(/punctSpace/g, Un).replace(/punct/g, Hn).getRegex(), Qn = W("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Bn).replace(/punctSpace/g, zn).replace(/punct/g, Rn).getRegex(), $n = W(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, Rn).getRegex(), er = W("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Bn).replace(/punctSpace/g, zn).replace(/punct/g, Rn).getRegex(), tr = W(/\\(punct)/, "gu").replace(/punct/g, Rn).getRegex(), nr = W(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), rr = W(Dn).replace("(?:-->|$)", "-->").getRegex(), ir = W("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", rr).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ar = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, or = W(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", ar).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), sr = W(/^!?\[(label)\]\[(ref)\]/).replace("label", ar).replace("ref", Cn).getRegex(), cr = W(/^!?\[(ref)\](?:\[\])?/).replace("ref", Cn).getRegex(), lr = W("reflink|nolink(?!\\()", "g").replace("reflink", sr).replace("nolink", cr).getRegex(), ur = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, dr = {
	_backpedal: un,
	anyPunctuation: tr,
	autolink: nr,
	blockSkip: Gn,
	br: In,
	code: Fn,
	del: un,
	delLDelim: un,
	delRDelim: un,
	emStrongLDelim: qn,
	emStrongRDelimAst: Xn,
	emStrongRDelimUnd: Qn,
	escape: Pn,
	link: or,
	nolink: cr,
	punctuation: Vn,
	reflink: sr,
	reflinkSearch: lr,
	tag: ir,
	text: Ln,
	url: un
}, fr = {
	...dr,
	link: W(/^!?\[(label)\]\((.*?)\)/).replace("label", ar).getRegex(),
	reflink: W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ar).getRegex()
}, pr = {
	...dr,
	emStrongRDelimAst: Zn,
	emStrongLDelim: Jn,
	delLDelim: $n,
	delRDelim: er,
	url: W(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ur).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: W(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ur).getRegex()
}, mr = {
	...pr,
	br: W(In).replace("{2,}", "*").getRegex(),
	text: W(pr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, hr = {
	normal: An,
	gfm: Mn,
	pedantic: Nn
}, gr = {
	normal: dr,
	gfm: pr,
	breaks: mr,
	pedantic: fr
}, _r = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, vr = (e) => _r[e];
function K(e, t) {
	if (t) {
		if (G.escapeTest.test(e)) return e.replace(G.escapeReplace, vr);
	} else if (G.escapeTestNoEncode.test(e)) return e.replace(G.escapeReplaceNoEncode, vr);
	return e;
}
function yr(e) {
	try {
		e = encodeURI(e).replace(G.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function br(e, t) {
	let n = e.replace(G.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(G.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) if (n.length > t) n.splice(t);
	else for (; n.length < t;) n.push("");
	for (; r < n.length; r++) n[r] = n[r].trim().replace(G.slashPipe, "|");
	return n;
}
function xr(e, t, n) {
	let r = e.length;
	if (r === 0) return "";
	let i = 0;
	for (; i < r;) {
		let a = e.charAt(r - i - 1);
		if (a === t && !n) i++;
		else if (a !== t && n) i++;
		else break;
	}
	return e.slice(0, r - i);
}
function Sr(e, t) {
	if (e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function Cr(e, t = 0) {
	let n = t, r = "";
	for (let t of e) if (t === "	") {
		let e = 4 - n % 4;
		r += " ".repeat(e), n += e;
	} else r += t, n++;
	return r;
}
function wr(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1");
	r.state.inLink = !0;
	let c = {
		type: e[0].charAt(0) === "!" ? "image" : "link",
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: r.inlineTokens(s)
	};
	return r.state.inLink = !1, c;
}
function Tr(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split("\n").map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return r.length >= i.length ? e.slice(i.length) : e;
	}).join("\n");
}
var Er = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || cn;
	}
	space(e) {
		let t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: "space",
			raw: t[0]
		};
	}
	code(e) {
		let t = this.rules.block.code.exec(e);
		if (t) {
			let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
			return {
				type: "code",
				raw: t[0],
				codeBlockStyle: "indented",
				text: this.options.pedantic ? e : xr(e, "\n")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = Tr(e, t[3] || "", this.rules);
			return {
				type: "code",
				raw: e,
				lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
				text: n
			};
		}
	}
	heading(e) {
		let t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let t = xr(e, "#");
				(this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
			}
			return {
				type: "heading",
				raw: t[0],
				depth: t[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let t = this.rules.block.hr.exec(e);
		if (t) return {
			type: "hr",
			raw: xr(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = xr(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o;
				for (o = 0; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
				else if (!t) a.push(e[o]);
				else break;
				e = e.slice(o);
				let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
				n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
				let l = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
				let u = i.at(-1);
				if (u?.type === "code") break;
				if (u?.type === "blockquote") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.blockquote(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - t.raw.length) + o.raw, r = r.substring(0, r.length - t.text.length) + o.text;
					break;
				} else if (u?.type === "list") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split("\n");
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: n,
				tokens: i,
				text: r
			};
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n = t[1].trim(), r = n.length > 1, i = {
				type: "list",
				raw: "",
				ordered: r,
				start: r ? +n.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
			let a = this.rules.other.listItemRegex(n), o = !1;
			for (; e;) {
				let n = !1, r = "", s = "";
				if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
				r = t[0], e = e.substring(r.length);
				let c = Cr(t[2].split("\n", 1)[0], t[1].length), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
				if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = c.search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
					let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d), ee = this.rules.other.blockquoteBeginRegex(d);
					for (; e;) {
						let f = e.split("\n", 1)[0], p;
						if (l = f, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), p = l) : p = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || ee.test(l) || t.test(l) || n.test(l)) break;
						if (p.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + p.slice(d);
						else {
							if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
							s += "\n" + l;
						}
						u = !l.trim(), r += f + "\n", e = e.substring(f.length + 1), c = p.slice(d);
					}
				}
				i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0)), i.items.push({
					type: "list_item",
					raw: r,
					task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
					loose: !1,
					text: s,
					tokens: []
				}), i.raw += r;
			}
			let s = i.items.at(-1);
			if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
			else return;
			i.raw = i.raw.trimEnd();
			for (let e of i.items) {
				if (this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []), e.task) {
					if (e.text = e.text.replace(this.rules.other.listReplaceTask, ""), e.tokens[0]?.type === "text" || e.tokens[0]?.type === "paragraph") {
						e.tokens[0].raw = e.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), e.tokens[0].text = e.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
						for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
							this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, "");
							break;
						}
					}
					let t = this.rules.other.listTaskCheckbox.exec(e.raw);
					if (t) {
						let n = {
							type: "checkbox",
							raw: t[0] + " ",
							checked: t[0] !== "[ ]"
						};
						e.checked = n.checked, i.loose ? e.tokens[0] && ["paragraph", "text"].includes(e.tokens[0].type) && "tokens" in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = n.raw + e.tokens[0].raw, e.tokens[0].text = n.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(n)) : e.tokens.unshift({
							type: "paragraph",
							raw: n.raw,
							text: n.raw,
							tokens: [n]
						}) : e.tokens.unshift(n);
					}
				}
				if (!i.loose) {
					let t = e.tokens.filter((e) => e.type === "space");
					i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
				}
			}
			if (i.loose) for (let e of i.items) {
				e.loose = !0;
				for (let t of e.tokens) t.type === "text" && (t.type = "paragraph");
			}
			return i;
		}
	}
	html(e) {
		let t = this.rules.block.html.exec(e);
		if (t) return {
			type: "html",
			block: !0,
			raw: t[0],
			pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
			text: t[0]
		};
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: t[0],
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = br(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
			type: "table",
			raw: t[0],
			header: [],
			align: [],
			rows: []
		};
		if (n.length === r.length) {
			for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? a.align.push("left") : a.align.push(null);
			for (let e = 0; e < n.length; e++) a.header.push({
				text: n[e],
				tokens: this.lexer.inline(n[e]),
				header: !0,
				align: a.align[e]
			});
			for (let e of i) a.rows.push(br(e, a.header.length).map((e, t) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: a.align[t]
			})));
			return a;
		}
	}
	lheading(e) {
		let t = this.rules.block.lheading.exec(e);
		if (t) {
			let e = t[1].trim();
			return {
				type: "heading",
				raw: t[0],
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	paragraph(e) {
		let t = this.rules.block.paragraph.exec(e);
		if (t) {
			let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
			return {
				type: "paragraph",
				raw: t[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let t = this.rules.block.text.exec(e);
		if (t) return {
			type: "text",
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		};
	}
	escape(e) {
		let t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: "escape",
			raw: t[0],
			text: t[1]
		};
	}
	tag(e) {
		let t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: t[0]
		};
	}
	link(e) {
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let e = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
				if (!this.rules.other.endAngleBracket.test(e)) return;
				let t = xr(e.slice(0, -1), "\\");
				if ((e.length - t.length) % 2 == 0) return;
			} else {
				let e = Sr(t[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
				}
			}
			let n = t[2], r = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(n);
				e && (n = e[1], r = e[3]);
			} else r = t[3] ? t[3].slice(1, -1) : "";
			return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), wr(t, {
				href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
				title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!e) {
				let e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return wr(n, e, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (c.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = c.exec(t)) != null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
				if (a = [...i].length, r[3] || r[4]) {
					o += a;
					continue;
				} else if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
					s += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o + s);
				let t = [...r[0]][0].length, c = e.slice(0, n + r.index + t + a);
				if (Math.min(n, a) % 2) {
					let e = c.slice(1, -1);
					return {
						type: "em",
						raw: c,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let l = c.slice(2, -2);
				return {
					type: "strong",
					raw: c,
					text: l,
					tokens: this.lexer.inlineTokens(l)
				};
			}
		}
	}
	codespan(e) {
		let t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return n && r && (e = e.substring(1, e.length - 1)), {
				type: "codespan",
				raw: t[0],
				text: e
			};
		}
	}
	br(e) {
		let t = this.rules.inline.br.exec(e);
		if (t) return {
			type: "br",
			raw: t[0]
		};
	}
	del(e, t, n = "") {
		let r = this.rules.inline.delLDelim.exec(e);
		if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = this.rules.inline.delRDelim;
			for (s.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = s.exec(t)) != null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i || (a = [...i].length, a !== n)) continue;
				if (r[3] || r[4]) {
					o += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o);
				let t = [...r[0]][0].length, s = e.slice(0, n + r.index + t + a), c = s.slice(n, -n);
				return {
					type: "del",
					raw: s,
					text: c,
					tokens: this.lexer.inlineTokens(c)
				};
			}
		}
	}
	autolink(e) {
		let t = this.rules.inline.autolink.exec(e);
		if (t) {
			let e, n;
			return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let t;
		if (t = this.rules.inline.url.exec(e)) {
			let e, n;
			if (t[2] === "@") e = t[0], n = "mailto:" + e;
			else {
				let r;
				do
					r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
				while (r !== t[0]);
				e = t[0], n = t[1] === "www." ? "http://" + t[0] : t[0];
			}
			return {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let t = this.rules.inline.text.exec(e);
		if (t) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: t[0],
				text: t[0],
				escaped: e
			};
		}
	}
}, q = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || cn, this.options.tokenizer = this.options.tokenizer || new Er(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let t = {
			other: G,
			block: hr.normal,
			inline: gr.normal
		};
		this.options.pedantic ? (t.block = hr.pedantic, t.inline = gr.pedantic) : this.options.gfm && (t.block = hr.gfm, this.options.breaks ? t.inline = gr.breaks : t.inline = gr.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: hr,
			inline: gr
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(G.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		for (this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(G.tabCharGlobal, "    ").replace(G.spaceLine, "")); e;) {
			let r;
			if (this.options.extensions?.block?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.space(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(r);
				continue;
			}
			if (r = this.tokenizer.code(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.at(-1).src = n.text) : t.push(r);
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
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
					href: r.href,
					title: r.title
				}, t.push(r));
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
			let i = e;
			if (this.options.extensions?.startBlock) {
				let t = Infinity, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < Infinity && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (this.state.top && (r = this.tokenizer.paragraph(i))) {
				let a = t.at(-1);
				n && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith("\n") ? "" : "\n") + r.raw, a.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
				continue;
			}
			if (r = this.tokenizer.text(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(r);
				continue;
			}
			if (e) {
				let t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break;
				} else throw Error(t);
			}
		}
		return this.state.top = !0, t;
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t;
	}
	inlineTokens(e, t = []) {
		this.tokenizer.lexer = this;
		let n = e, r = null;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			if (e.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;) e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		let i;
		for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
		let a = !1, o = "";
		for (; e;) {
			a || (o = ""), a = !1;
			let r;
			if (this.options.extensions?.inline?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.escape(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.tag(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.link(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.type === "text" && n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.emStrong(e, n, o)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.codespan(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.br(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.del(e, n, o)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.autolink(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (!this.state.inLink && (r = this.tokenizer.url(e))) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let i = e;
			if (this.options.extensions?.startInline) {
				let t = Infinity, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < Infinity && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (r = this.tokenizer.inlineText(i)) {
				e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (o = r.raw.slice(-1)), a = !0;
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (e) {
				let t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break;
				} else throw Error(t);
			}
		}
		return t;
	}
}, Dr = class {
	options;
	parser;
	constructor(e) {
		this.options = e || cn;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(G.notSpaceStart)?.[0], i = e.replace(G.endingNewline, "") + "\n";
		return r ? "<pre><code class=\"language-" + K(r) + "\">" + (n ? i : K(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : K(i, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
	}
	heading({ tokens: e, depth: t }) {
		return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
	}
	hr(e) {
		return "<hr>\n";
	}
	list(e) {
		let t = e.ordered, n = e.start, r = "";
		for (let t = 0; t < e.items.length; t++) {
			let n = e.items[t];
			r += this.listitem(n);
		}
		let i = t ? "ol" : "ul", a = t && n !== 1 ? " start=\"" + n + "\"" : "";
		return "<" + i + a + ">\n" + r + "</" + i + ">\n";
	}
	listitem(e) {
		return `<li>${this.parser.parse(e.tokens)}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let t = "", n = "";
		for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
		t += this.tablerow({ text: n });
		let r = "";
		for (let t = 0; t < e.rows.length; t++) {
			let i = e.rows[t];
			n = "";
			for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
			r += this.tablerow({ text: n });
		}
		return r &&= `<tbody>${r}</tbody>`, "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
		return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${K(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, tokens: n }) {
		let r = this.parser.parseInline(n), i = yr(e);
		if (i === null) return r;
		e = i;
		let a = "<a href=\"" + e + "\"";
		return t && (a += " title=\"" + K(t) + "\""), a += ">" + r + "</a>", a;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = yr(e);
		if (i === null) return K(n);
		e = i;
		let a = `<img src="${e}" alt="${K(n)}"`;
		return t && (a += ` title="${K(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : K(e.text);
	}
}, Or = class {
	strong({ text: e }) {
		return e;
	}
	em({ text: e }) {
		return e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e }) {
		return e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e }) {
		return "" + e;
	}
	image({ text: e }) {
		return "" + e;
	}
	br() {
		return "";
	}
	checkbox({ raw: e }) {
		return e;
	}
}, J = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || cn, this.options.renderer = this.options.renderer || new Dr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Or();
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e) {
		this.renderer.parser = this;
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (this.options.extensions?.renderers?.[r.type]) {
				let e = r, n = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (n !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(e.type)) {
					t += n || "";
					continue;
				}
			}
			let i = r;
			switch (i.type) {
				case "space":
					t += this.renderer.space(i);
					break;
				case "hr":
					t += this.renderer.hr(i);
					break;
				case "heading":
					t += this.renderer.heading(i);
					break;
				case "code":
					t += this.renderer.code(i);
					break;
				case "table":
					t += this.renderer.table(i);
					break;
				case "blockquote":
					t += this.renderer.blockquote(i);
					break;
				case "list":
					t += this.renderer.list(i);
					break;
				case "checkbox":
					t += this.renderer.checkbox(i);
					break;
				case "html":
					t += this.renderer.html(i);
					break;
				case "def":
					t += this.renderer.def(i);
					break;
				case "paragraph":
					t += this.renderer.paragraph(i);
					break;
				case "text":
					t += this.renderer.text(i);
					break;
				default: {
					let e = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return t;
	}
	parseInline(e, t = this.renderer) {
		this.renderer.parser = this;
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
				if (e !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(i.type)) {
					n += e || "";
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case "escape":
					n += t.text(a);
					break;
				case "html":
					n += t.html(a);
					break;
				case "link":
					n += t.link(a);
					break;
				case "image":
					n += t.image(a);
					break;
				case "checkbox":
					n += t.checkbox(a);
					break;
				case "strong":
					n += t.strong(a);
					break;
				case "em":
					n += t.em(a);
					break;
				case "codespan":
					n += t.codespan(a);
					break;
				case "br":
					n += t.br(a);
					break;
				case "del":
					n += t.del(a);
					break;
				case "text":
					n += t.text(a);
					break;
				default: {
					let e = "Token with \"" + a.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return n;
	}
}, kr = class {
	options;
	block;
	constructor(e) {
		this.options = e || cn;
	}
	static passThroughHooks = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	emStrongMask(e) {
		return e;
	}
	provideLexer() {
		return this.block ? q.lex : q.lexInline;
	}
	provideParser() {
		return this.block ? J.parse : J.parseInline;
	}
}, Ar = new class {
	defaults = sn();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = J;
	Renderer = Dr;
	TextRenderer = Or;
	Lexer = q;
	Tokenizer = Er;
	Hooks = kr;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
			case "table": {
				let e = r;
				for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
				for (let r of e.rows) for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
				break;
			}
			case "list": {
				let e = r;
				n = n.concat(this.walkTokens(e.items, t));
				break;
			}
			default: {
				let e = r;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
					let i = e[r].flat(Infinity);
					n = n.concat(this.walkTokens(i, t));
				}) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
			}
		}
		return n;
	}
	use(...e) {
		let t = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((e) => {
			let n = { ...e };
			if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error("extension name required");
				if ("renderer" in e) {
					let n = t.renderers[e.name];
					n ? t.renderers[e.name] = function(...t) {
						let r = e.renderer.apply(this, t);
						return r === !1 && (r = n.apply(this, t)), r;
					} : t.renderers[e.name] = e.renderer;
				}
				if ("tokenizer" in e) {
					if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
					let n = t[e.level];
					n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === "block" ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === "inline" && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
				}
				"childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
			}), n.extensions = t), e.renderer) {
				let t = this.defaults.renderer || new Dr(this.defaults);
				for (let n in e.renderer) {
					if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
					if (["options", "parser"].includes(n)) continue;
					let r = n, i = e.renderer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n || "";
					};
				}
				n.renderer = t;
			}
			if (e.tokenizer) {
				let t = this.defaults.tokenizer || new Er(this.defaults);
				for (let n in e.tokenizer) {
					if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(n)) continue;
					let r = n, i = e.tokenizer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.tokenizer = t;
			}
			if (e.hooks) {
				let t = this.defaults.hooks || new kr();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					kr.passThroughHooks.has(n) ? t[r] = (e) => {
						if (this.defaults.async && kr.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : t[r] = (...e) => {
						if (this.defaults.async) return (async () => {
							let n = await i.apply(t, e);
							return n === !1 && (n = await a.apply(t, e)), n;
						})();
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.hooks = t;
			}
			if (e.walkTokens) {
				let t = this.defaults.walkTokens, r = e.walkTokens;
				n.walkTokens = function(e) {
					let n = [];
					return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
				};
			}
			this.defaults = {
				...this.defaults,
				...n
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, t) {
		return q.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return J.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof t > "u" || t === null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer() : e ? q.lex : q.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser() : e ? J.parse : J.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer() : e ? q.lex : q.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser() : e ? J.parse : J.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + K(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}();
function Y(e, t) {
	return Ar.parse(e, t);
}
Y.options = Y.setOptions = function(e) {
	return Ar.setOptions(e), Y.defaults = Ar.defaults, ln(Y.defaults), Y;
}, Y.getDefaults = sn, Y.defaults = cn, Y.use = function(...e) {
	return Ar.use(...e), Y.defaults = Ar.defaults, ln(Y.defaults), Y;
}, Y.walkTokens = function(e, t) {
	return Ar.walkTokens(e, t);
}, Y.parseInline = Ar.parseInline, Y.Parser = J, Y.parser = J.parse, Y.Renderer = Dr, Y.TextRenderer = Or, Y.Lexer = q, Y.lexer = q.lex, Y.Tokenizer = Er, Y.Hooks = kr, Y.parse = Y, Y.options, Y.setOptions, Y.use, Y.walkTokens, Y.parseInline, J.parse, q.lex;
//#endregion
//#region src/icons/clear-night.svg
var jr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.92'%20x2='38.52'%20y1='18.75'%20y2='47.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='5%2032%2032;%20-15%2032%2032;%205%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M46.66%2036.2a16.66%2016.66%200%2001-16.78-16.55%2016.29%2016.29%200%2001.55-4.15A16.56%2016.56%200%201048.5%2036.1c-.61.06-1.22.1-1.84.1z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-5%2032%2032;%2015%2032%2032;%20-5%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Mr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/path%3e%3c/svg%3e", Nr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='16.5'%20x2='21.5'%20y1='19.67'%20y2='28.33'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='19'%20cy='24'%20r='5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2019%2024;%20360%2019%2024'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", Pr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='13.58'%20x2='24.15'%20y1='15.57'%20y2='33.87'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='10%2019.22%2024.293;%20-10%2019.22%2024.293;%2010%2019.22%2024.293'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M29.33%2026.68a10.61%2010.61%200%2001-10.68-10.54A10.5%2010.5%200%200119%2013.5a10.54%2010.54%200%201011.5%2013.11%2011.48%2011.48%200%2001-1.17.07z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-10%2019.22%2024.293;%2010%2019.22%2024.293;%20-10%2019.22%2024.293'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", Fr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='27.5'%20x2='36.5'%20y1='50.21'%20y2='65.79'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20y1='44.21'%20y2='59.79'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2058h30'%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2052h30'%3e%3canimateTransform%20attributeName='transform'%20begin='-4s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3c/svg%3e", Ir = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.25'%20x2='24.75'%20y1='43.7'%20y2='46.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='30.25'%20x2='31.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='37.25'%20x2='38.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23a)'%20d='M24%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20d='M31%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20d='M38%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3c/svg%3e", Lr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", Rr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23b)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", zr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Br = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='30.12'%20x2='31.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.67'%20x2='32.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='g'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M33.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M31%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='-1%20-6;%201%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2031%2045;%20360%2031%2045'/%3e%3canimate%20attributeName='opacity'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23d)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23f)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3c/svg%3e", Vr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='b'%20x1='23.31'%20x2='24.69'%20y1='44.3'%20y2='46.7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='30.31'%20x2='31.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3clinearGradient%20id='h'%20x1='37.31'%20x2='38.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3c/defs%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23e)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23f)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23h)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", Hr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.97'%20x2='42.03'%20y1='14.63'%20y2='49.37'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43%2032a11%2011%200%2011-11-11%2011%2011%200%200111%2011zM25%2014.61l-.48%201a33.68%2033.68%200%2000-3.42%2017.82h0M39%2049.39l.48-1a33.68%2033.68%200%20003.42-17.82h0'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='360%2032%2032;%200%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Ur = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='27.56'%20x2='38.27'%20y1='17.64'%20y2='36.19'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='19.96'%20x2='31.37'%20y1='29.03'%20y2='48.8'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e", Wr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e", Gr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='52.7'%20x2='133.4'%20y1='9.6'%20y2='149.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%239ca3af'/%3e%3cstop%20offset='.5'%20stop-color='%239ca3af'/%3e%3cstop%20offset='1'%20stop-color='%236b7280'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='99.5'%20x2='232.6'%20y1='30.7'%20y2='261.4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%236b7280'/%3e%3cstop%20offset='.5'%20stop-color='%236b7280'/%3e%3cstop%20offset='1'%20stop-color='%234b5563'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='1381.3'%20x2='1399.5'%20y1='-1144.7'%20y2='-1097.4'%20gradientTransform='rotate(-9%208002.567%208233.063)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%230b65ed'/%3e%3cstop%20offset='.5'%20stop-color='%230a5ad4'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23c'%20id='d'%20x1='1436.7'%20x2='1454.9'%20y1='-1137'%20y2='-1089.7'%20gradientTransform='rotate(-9%208009.537%208233.037)'/%3e%3clinearGradient%20xlink:href='%23c'%20id='e'%20x1='1492.1'%20x2='1510.3'%20y1='-1129.3'%20y2='-1082.1'%20gradientTransform='rotate(-9%208016.566%208233.078)'/%3e%3csymbol%20id='g'%20viewBox='0%200%20200.3%20126.1'%3e%3cpath%20fill='url(%23a)'%20stroke='%23848b98'%20stroke-miterlimit='10'%20d='M.5%2093.2a32.4%2032.4%200%200032.4%2032.4h129.8v-.1l2.3.1a34.8%2034.8%200%20006.5-68.9%2032.4%2032.4%200%2000-48.5-33%2048.6%2048.6%200%2000-88.6%2037.1h-1.5A32.4%2032.4%200%2000.5%2093.1Z'/%3e%3c/symbol%3e%3csymbol%20id='h'%20viewBox='0%200%20350%20222'%3e%3cpath%20fill='url(%23b)'%20stroke='%235b6472'%20stroke-miterlimit='10'%20stroke-width='6'%20d='m291%20107-2.5.1A83.9%2083.9%200%2000135.6%2043%2056%2056%200%200051%2091a56.6%2056.6%200%2000.8%209A60%2060%200%200063%20219l4-.2v.2h224a56%2056%200%20000-112Z'/%3e%3c/symbol%3e%3csymbol%20id='f'%20overflow='visible'%20viewBox='0%200%20398%20222'%3e%3cuse%20xlink:href='%23g'%20width='200.3'%20height='126.1'%20transform='translate(198%2027)'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-9%200;%209%200;%20-9%200'/%3e%3c/use%3e%3cuse%20xlink:href='%23h'%20width='350'%20height='222'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-18%200;%2018%200;%20-18%200'/%3e%3c/use%3e%3c/symbol%3e%3csymbol%20id='i'%20overflow='visible'%20viewBox='0%200%20129%2057'%3e%3cpath%20fill='url(%23c)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M8.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x1'%20additive='sum'%20attributeName='transform'%20begin='0s;%20x1.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y1'%20attributeName='opacity'%20begin='0s;%20y1.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M64.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x2'%20additive='sum'%20attributeName='transform'%20begin='.33s;%20x2.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y2'%20attributeName='opacity'%20begin='.33s;%20y2.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M120.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x3'%20additive='sum'%20attributeName='transform'%20begin='-.33s;%20x3.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y3'%20attributeName='opacity'%20begin='-.33s;%20y3.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3cuse%20xlink:href='%23f'%20width='398'%20height='222'%20transform='translate(68.84%20145)'/%3e%3cuse%20xlink:href='%23i'%20width='129'%20height='57'%20transform='translate(191.5%20343.5)'/%3e%3c/svg%3e", Kr = "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z", qr = "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z", Jr = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z", Yr = "M15,6.79C16.86,7.86 18,9.85 18,12C18,22 6,22 6,22C7.25,21.06 8.38,19.95 9.34,18.71C9.38,18.66 9.41,18.61 9.44,18.55C9.69,18.06 9.5,17.46 9,17.21C7.14,16.14 6,14.15 6,12C6,2 18,2 18,2C16.75,2.94 15.62,4.05 14.66,5.29C14.62,5.34 14.59,5.39 14.56,5.45C14.31,5.94 14.5,6.54 15,6.79M12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14Z", Xr = "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z", Zr = "M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z", Qr = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", $r = "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z", ei = "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z", ti = "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59", ni = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z", ri = "M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z", ii = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z", ai = "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z", oi = "M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z", X = (e, t) => e ? (t ||= "24px", T`<ha-icon
    .icon="${e}"
    style="font-size:${t}; width: ${t}; height: ${t}"
  />`) : T`<ha-icon
      icon="mdi:weather-sunny"
      style="font-size:${t}; width: ${t}; height: ${t}"
    />`, Z = (e, t) => e ? (t ||= "24px", E`<svg height=${t} width=${t} viewport="0 0 48 48"><path d="${e}" /></svg>`) : E`<svg height=${t} width=${t} viewport="0 0 48 48"><path d="${ii}" /></svg>`, si = (e, t, n, r) => {
	if (!e) return X("mdi:weather-sunny", n);
	let i = {
		"clear-night": Z(Qr, n),
		cloudy: Z(Kr, n),
		fog: Z(qr, n),
		hail: Z(Jr, n),
		lightning: Z(Xr, n),
		"lightning-rainy": Z(Zr, n),
		partlycloudy: Z($r, n),
		pouring: Z(ei, n),
		rainy: Z(ti, n),
		snowy: Z(ni, n),
		"snowy-rainy": Z(ri, n),
		sunny: Z(ii, n),
		windy: Z(ai, n),
		"windy-variant": Z(oi, n),
		exceptional: Z(Yr, n)
	}, a = {
		"clear-night": X("mdi:weather-night", n),
		cloudy: X("mdi:weather-cloudy", n),
		fog: X("mdi:weather-fog", n),
		hail: X("mdi:weather-hail", n),
		lightning: X("mdi:weather-lightning", n),
		"lightning-rainy": X("mdi:weather-lightning-rainy", n),
		partlycloudy: X("mdi:weather-partly-cloudy", n),
		pouring: X("mdi:weather-pouring", n),
		rainy: X("mdi:weather-rainy", n),
		snowy: X("mdi:weather-snowy", n),
		"snowy-rainy": X("mdi:weather-snowy-rainy", n),
		sunny: X("mdi:weather-sunny", n),
		windy: X("mdi:weather-windy", n),
		"windy-variant": X("mdi:weather-windy-variant", n),
		exceptional: X("mdi:weather-hurricane", n)
	}, o = {
		"clear-night": T`<img src="${jr}" style="font-size:${n}" />`,
		cloudy: T`<img src="${Mr}" style="font-size:${n}" />`,
		fog: T`<img src="${Fr}" style="font-size:${n}" />`,
		hail: T`<img src="${Ir}" style="font-size:${n}" />`,
		lightning: T`<img src="${Rr}" style="font-size:${n}" />`,
		"lightning-rainy": T`<img src="${Lr}" style="font-size:${n}" />`,
		partlycloudy: T`<img
      src="${r ? Nr : Pr}"
      style="font-size:${n}"
    />`,
		pouring: T`<img src="${Gr}" style="font-size:${n}" />`,
		rainy: T`<img src="${zr}" style="font-size:${n}" />`,
		snowy: T`<img src="${Br}" style="font-size:${n}" />`,
		"snowy-rainy": T`<img src="${Vr}" style="font-size:${n}" />`,
		sunny: T`<img src="${Wr}" style="font-size:${n}" />`,
		windy: T`<img src="${Ur}" style="font-size:${n}" />`,
		"windy-variant": T`<img src="${Ur}" style="font-size:${n}" />`,
		exceptional: T`<img src="${Hr}" style="font-size:${n}" />`
	};
	return t === "mdi" ? a[e] || X("mdi:weather-sunny", n) : t === "mdiAsSVG" ? i[e] || T`<img src="${"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e"}" />` : o[e] || T`<img src="${"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e"}" />`;
}, ci = (e, t) => e?.states[t], li = (e, t) => {
	let n = /* @__PURE__ */ new Date(), r = ci(e, t.entity), i = ci(e, t.sun_entity || "sun.sun"), a = null, o = null;
	if (r && r.attributes && "sunrise" in r.attributes && "sunset" in r.attributes && r.attributes.sunrise && r.attributes.sunset) a = new Date(r.attributes.sunrise), o = new Date(r.attributes.sunset);
	else if (i?.attributes) {
		let e = i.attributes.next_rising ? new Date(i.attributes.next_rising) : null, t = i.attributes.next_setting ? new Date(i.attributes.next_setting) : null;
		if (e && t) {
			let r = e > n ? /* @__PURE__ */ new Date(e.getTime() - 1440 * 60 * 1e3) : e, i = t;
			a = r, o = i;
		}
	}
	return !a || !o ? !0 : n >= a && n < o;
};
function ui(e) {
	let t = window;
	t.customCards = t.customCards || [], t.customCards.push({
		...e,
		preview: !0
	});
}
//#endregion
//#region src/cards/full-card/swissweather-card.ts
var di;
I({ loader: (e) => H[e] }), console.log("🎯 About to apply @customElement decorator to SwissweatherCard"), console.log("🎯 customElements registry available:", !!customElements);
var Q = class extends O {
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
	updated(e) {
		super.updated(e), this.hass && this.config && this.config.entity && this._lastEntityId !== this.config.entity && (this._lastEntityId = this.config.entity, this._loadForecast());
	}
	async _loadForecast() {
		if (!(!this.hass || !this.config?.entity || this._forecastLoading)) {
			this._forecastLoading = !0;
			try {
				let [e, t] = await Promise.all([this.hass.callWS({
					type: "call_service",
					domain: "weather",
					service: "get_forecasts",
					service_data: {
						entity_id: this.config.entity,
						type: "daily"
					},
					return_response: !0
				}), this.hass.callWS({
					type: "call_service",
					domain: "weather",
					service: "get_forecasts",
					service_data: {
						entity_id: this.config.entity,
						type: "hourly"
					},
					return_response: !0
				})]), n = e?.response;
				n && n[this.config.entity] ? (this._forecast = n[this.config.entity].forecast || [], this.requestUpdate("_forecast")) : this._forecast = [];
				let r = t?.response;
				r && r[this.config.entity] ? (this._hourlyForecast = r[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [], console.log("🟢 Forecast geladen:", {
					forecast: this._forecast,
					hourlyForecast: this._hourlyForecast
				});
			} catch (e) {
				console.warn("⚠️ Forecast loading failed:", e), this._forecast = [], this._hourlyForecast = [];
			} finally {
				this._forecastLoading = !1;
			}
		}
	}
	static get styles() {
		return s`
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
	setConfig(e) {
		if (!e.entity) throw Error("You need to define an entity");
		this.config = e, setTimeout(() => {
			this._loadForecast();
		}, 1e3);
	}
	getCardSize() {
		return 8;
	}
	static getStubConfig() {
		return {
			type: "custom:" + tn,
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
			chart_order: [
				"temperature",
				"precipitation",
				"sunshine",
				"wind",
				"forecast"
			]
		};
	}
	static getConfigElement() {
		return document.createElement(nn);
	}
	static getConfigSchema() {
		return U;
	}
	_getEntityState(e) {
		return this.hass?.states[e];
	}
	_getWarningLevel(e) {
		if (!e || e.length === 0) return "none";
		let t = Math.max(...e.map((e) => e.level || 0));
		return t >= 4 ? "danger" : t >= 3 ? "severe" : t >= 2 ? "warning" : "info";
	}
	_formatWindDirection(e) {
		return [
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
		][Math.round(e / 22.5) % 16];
	}
	_renderWarningSection(e) {
		let t = [];
		if (e?.attributes?.warning_levels && Array.isArray(e.attributes.warning_levels)) for (let n = 0; n < e?.attributes.warning_levels.length; n++) t.push({
			id: `warning_${n}`,
			title: e?.attributes.warning_levels[n],
			level: e?.attributes.warning_levels[n],
			type: e?.attributes.warning_types[n],
			description: e?.attributes.warning_texts[n],
			valid_from: e.attributes.warning_valid_from[n],
			valid_to: e.attributes.warning_valid_to[n],
			link: e.attributes.warning_links[n],
			regions: [],
			phenomena: []
		});
		let n = this._getWarningLevel(t), r = (e) => e >= 4 ? "#dc143c" : e >= 3 ? "#e17055" : e >= 2 ? "#f6c90e" : "var(--primary-text-color, #fff)", i = {
			storm: "mdi:weather-lightning",
			rain: "mdi:weather-pouring",
			snow: "mdi:snowflake",
			wind: "mdi:weather-windy",
			fog: "mdi:weather-fog",
			heat: "mdi:weather-sunny-alert",
			cold: "mdi:snowflake-alert",
			flood: "mdi:waves",
			default: "mdi:alert"
		};
		this._openWarnings ||= {};
		let a = (e) => {
			this._openWarnings = {
				...this._openWarnings,
				[e]: !this._openWarnings[e]
			}, this.requestUpdate();
		};
		return t.length > 0 ? T`
          <div class="warning-section ${n}">
            <div>
              <strong>${V("weather_warning")}</strong>
              <ul style="margin: 6px 0 0 0; padding-left: 18px;">
                ${t.map((e) => T`
                    <li style="margin-bottom: 12px;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <ha-icon
                          icon="${i[e.type?.toLowerCase?.()] || i.default}"
                          style="color: ${r(e.level)};"
                        ></ha-icon>
                        <span style="font-weight:bold;">${e.title}</span>
                        ${e.link ? T`
                              <a
                                href="${e.link}"
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
                          @click=${() => a(e.id)}
                          style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;"
                          title="${this._openWarnings[e.id] ? V("collapse") : V("expand")}"
                          aria-label="${this._openWarnings[e.id] ? V("collapse") : V("expand")}"
                        >
                          <ha-icon
                            icon="${this._openWarnings[e.id] ? "mdi:chevron-up" : "mdi:chevron-down"}"
                          ></ha-icon>
                        </button>
                      </div>
                      ${this._openWarnings[e.id] && e.description ? T`
                            <div>
                              <strong>${V("valid_from")}: </strong>
                              ${e.valid_from ? new Date(e.valid_from).toLocaleString() : V("unknown")}
                              <strong>${V("valid_to")}: </strong>
                              ${e.valid_to ? new Date(e.valid_to).toLocaleString() : V("unknown")}
                            </div>
                            <div
                              style="color: var(--primary-text-color, #fff); font-size: 14px; line-height: 1.4; margin-left: 2px; margin-top: 4px;"
                              .innerHTML="${Y.parse(e.description || "")}"
                            ></div>
                          ` : ""}
                    </li>
                  `)}
              </ul>
            </div>
          </div>
        ` : T``;
	}
	_openWarnings = {};
	_renderForecastTemperature(e) {
		let t = (e, t) => `${V(e, t)}`;
		return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? T`<forecast-temperature-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_temperature=${this.config.show_temperature !== !1}
          ._t=${V}
          .showHoursChartLabel=${(e) => an(e, t)}
        ></forecast-temperature-chart>` : T``;
	}
	_renderForecastPrecipitation(e) {
		let t = (e, t) => `${V(e, t)}`;
		return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? T`<precipitation-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_precipitation=${this.config.show_precipitation !== !1}
          ._t=${V}
          .showHoursChartLabel=${(e) => an(e, t)}
        ></precipitation-chart>` : T``;
	}
	_renderForecastSunshine(e, t, n) {
		let r = (e, t) => `${V(e, t)}`;
		return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? T`<sunshine-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${n}
          .show_sunshine=${this.config.show_sunshine !== !1}
          .weatherEntity=${e}
          .sun_entity=${t}
          ._t=${V}
          .showHoursChartLabel=${(e) => an(e, r)}
        ></sunshine-chart>` : T``;
	}
	_renderForecastWind(e) {
		let t = (e, t) => `${V(e, t)}`;
		return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? T`<wind-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_wind=${this.config.show_wind !== !1}
          ._t=${V}
          .showHoursChartLabel=${(e) => an(e, t)}
        ></wind-chart>` : T``;
	}
	_renderCurrentWeather(e, t, n, r, i, a) {
		return T`
      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${V("current_weather")}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(e)} km/h</div>
          <div class="metric-label">${V("wind")}</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${t}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(t)}</div>
          <div class="metric-label">${V("direction")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${n}%</div>
          <div class="metric-label">${V("humidity")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${r} hPa</div>
          <div class="metric-label">${V("pressure")}</div>
        </div>
        ${a ? T`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                <div class="metric-value">${parseFloat(a.state).toFixed(1)}h</div>
                <div class="metric-label">${V("sunshine")}</div>
              </div>
            ` : ""}
        ${i > 0 ? T`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                <div class="metric-value">${i} km</div>
                <div class="metric-label">${V("visibility")}</div>
              </div>
            ` : ""}
      </div>
    `;
	}
	_renderCurrentWeatherSection(e, t, n, r, i, a) {
		return T`
      <div class="current-weather-section">
        ${this.config.compact_mode === !0 ? T`
              ${this._renderCurrentWeatherCompactMode(e, t, n, r, i, a)}
            ` : T`
              ${this._renderCurrentWeather(e, t, n, r, i, a)}
            `}
      </div>
    `;
	}
	render() {
		if (L((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config) return T``;
		let e = this._getEntityState(this.config.entity), t = this._getEntityState(this.config.sun_entity || "sun.sun");
		if (!e) return T`<div>Entity not found: ${this.config.entity}</div>`;
		let n = this.config.show_location !== !1, r = this.config.location || V("location"), i = e.attributes.temperature, a = e.state, o = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null, s = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null, c = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null, l = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null, u = o ? parseFloat(o.state) : e.attributes.wind_speed || 0, d = s ? parseFloat(s.state) : e.attributes.wind_bearing || 0, ee = e.attributes.humidity || 0, f = e.attributes.pressure || 0, p = e.attributes.visibility || 0, m = this.config.forecast_hours ?? 6;
		return T`
      ${n ? T`
            <div class="header">
              <div class="location">${r}</div>
            </div>
          ` : ""}
      ${this.config.show_warnings ? this._renderWarningSection(l) : ""}

      <div class="current-weather">
        <div>
          <div class="current-temp">${i}°</div>
          <div class="condition">${V(a)}</div>
        </div>
        <div class="current-details">
          <div
            class="weather-icon"
            style="color: var(--icon-color, #fff); width: 64px; height: 64px;"
          >
            ${si(a, this.config.enable_animate_weather_icons ? "animated" : "mdi", "64px", li(this.hass, this.config))}
          </div>
        </div>
      </div>

      ${this._renderCurrentWeatherSection(u, d, ee, f, p, c)}
      ${this.config.show_temperature !== !1 || this.config.show_precipitation !== !1 || this.config.show_sunshine !== !1 || this.config.show_wind !== !1 || this.config.show_forecast !== !1 ? T`
            <div class="section-title">
              <ha-icon icon="mdi:clock"></ha-icon>
              ${V("forecast_hours", { hours: m })}
            </div>
          ` : ""}
      ${this._getEffectiveChartOrder().map((n) => {
			switch (n) {
				case "temperature": return this._renderForecastTemperature(m);
				case "precipitation": return this._renderForecastPrecipitation(m);
				case "sunshine": return this._renderForecastSunshine(e, t, m);
				case "wind": return this._renderForecastWind(m);
				case "forecast": return this._showDailyForecast();
				default: return "";
			}
		})}
    `;
	}
	_renderCurrentWeatherCompactMode(e, t, n, r, i, a) {
		return T`
      <div class="metrics-table">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(e)} km/h</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${t}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(t)}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${n}%</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${r} hPa</div>
        </div>
        ${a ? T`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                  <div class="metric-value">${parseFloat(a.state).toFixed(1)}h</div>
                </div>
              ` : ""}
        ${i > 0 ? T`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                  <div class="metric-value">${i} km</div>
                </div>
              ` : ""}
      </div
      `;
	}
	_showDailyForecast() {
		return this.config.show_forecast === !1 ? T`` : this.config.compact_mode === !0 ? this._renderDailyForecastDiagram() : this._renderDailyForecastChart();
	}
	_getEffectiveChartOrder() {
		let e = Array.isArray(this.config.chart_order) ? [...this.config.chart_order] : [
			"temperature",
			"precipitation",
			"sunshine",
			"wind",
			"forecast"
		];
		return this.config.show_forecast !== !1 && !e.includes("forecast") && e.push("forecast"), e;
	}
	_renderDailyForecastChart() {
		return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? T`<daily-forecast-chart
          .forecast=${this._forecast?.slice(0, 7) ?? []}
          .forecastLoading=${this._forecastLoading}
          .show_forecast=${this.config.show_forecast !== !1}
          .config=${this.config}
          ._t=${V}
          .getWeatherIcon=${si}
          .formatDate=${on}
        ></daily-forecast-chart>` : T``;
	}
	_renderDailyForecastDiagram() {
		return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? T`<daily-forecast-diagram
          .config=${this.config}
          .forecast=${[...this._forecast?.slice(0, 7) ?? []]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${V}
          .getWeatherIcon=${si}
          .standalone=${!1}
        ></daily-forecast-diagram>` : T``;
	}
};
N([A({ attribute: !1 }), M("design:type", Object)], Q.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], Q.prototype, "config", void 0), N([j(), M("design:type", Array)], Q.prototype, "_forecast", void 0), N([j(), M("design:type", Array)], Q.prototype, "_hourlyForecast", void 0), N([j(), M("design:type", Object)], Q.prototype, "_forecastLoading", void 0), N([j(), M("design:type", typeof (di = typeof Record < "u" && Record) == "function" ? di : Object)], Q.prototype, "_openWarnings", void 0), Q = N([k(tn), M("design:paramtypes", [])], Q);
//#endregion
//#region src/cards/forecast-diagram/const.ts
var fi = `${en}-forecast-diagram-card`, pi = `${fi}-editor`, mi = [{
	name: "entity",
	required: !0,
	selector: { entity: { domain: "weather" } },
	description: "config.descr.entity"
}];
//#endregion
//#region src/cards/forecast-diagram/forecast-diagram-card-editor.ts
I({ loader: (e) => H[e] });
var hi = class extends O {
	hass;
	lovelace;
	_config;
	constructor() {
		super(), console.log("🎨 SwissweatherCardEditor (Forecast Diagram) constructor called");
	}
	setConfig(e) {
		let t = { ...e };
		for (let e of ["entity", "sun_entity"]) t[e] === "" && delete t[e];
		this._config = t, this.requestUpdate();
	}
	static get styles() {
		return s`
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
		if (!this.hass) return T`<div>Loading...</div>`;
		L((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0
		};
		return T`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Forecast Diagram Card</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${R("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${[mi.find((e) => e.name === "entity")].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Sensors -->
        <div class="group">
          <div class="group-title">${R("config.group_sensors") || "Sensors"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${[mi.find((e) => e.name === "sun_entity")].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Configuration Preview -->
        ${this._config?.entity ? T`
              <div class="preview">
                <div class="preview-title">📋 YAML-Config</div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            ` : ""}
      </div>
    `;
	}
	_computeLabel = (e) => ({
		entity: R("config.entity"),
		sun_entity: R("config.sun_entity")
	})[e.name] || e.name;
	_computeHelper = (e) => e.description ? R(e.description) : "";
	_renderConfigPreview() {
		let e = { ...this._config };
		return e.type ||= "custom:" + fi, Object.keys(e).forEach((t) => {
			(e[t] === void 0 || e[t] === "") && delete e[t];
		}), Object.entries(e).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join("\n");
	}
	_valueChanged(e) {
		if (this._config ||= {
			type: `custom:${fi}`,
			entity: "",
			sun_entity: ""
		}, e.type === "value-changed") {
			let t = {}, { ...n } = e.detail.value || {}, r = {
				...this._config,
				...n,
				...t,
				type: "custom:" + fi
			};
			Object.keys(r).forEach((e) => {
				(r[e] === "" || r[e] === void 0) && delete r[e];
			}), this._config = r, $t(this, "config-changed", { config: this._config });
		}
	}
};
//#endregion
//#region src/cards/forecast-diagram/forecast-diagram-card.ts
N([A({ attribute: !1 }), M("design:type", Object)], hi.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], hi.prototype, "lovelace", void 0), N([A({ attribute: !1 }), M("design:type", Object)], hi.prototype, "_config", void 0), hi = N([k(pi), M("design:paramtypes", [])], hi), I({ loader: (e) => H[e] });
var gi = class extends O {
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
	updated(e) {
		super.updated(e);
	}
	static get styles() {
		return s`
      :host {
        display: block;
        height: 100%;
        box-sizing: border-box;
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
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        --chart-inner-border: none;
        --chart-padding: 0;
        --chart-margin-top: 0;
        --chart-margin-bottom: 0;
      }

      daily-forecast-diagram {
        display: block;
        width: 100%;
        height: 100%;
        min-height: 0;
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
				let [e, t] = await Promise.all([this.hass.callWS({
					type: "call_service",
					domain: "weather",
					service: "get_forecasts",
					service_data: {
						entity_id: this.config.entity,
						type: "daily"
					},
					return_response: !0
				}), this.hass.callWS({
					type: "call_service",
					domain: "weather",
					service: "get_forecasts",
					service_data: {
						entity_id: this.config.entity,
						type: "hourly"
					},
					return_response: !0
				})]), n = e?.response;
				n && n[this.config.entity] ? (this._forecast = n[this.config.entity].forecast || [], this.requestUpdate("_forecast")) : this._forecast = [];
				let r = t?.response;
				r && r[this.config.entity] ? (this._hourlyForecast = r[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [];
			} catch (e) {
				console.warn("⚠️ Forecast loading failed:", e), this._forecast = [], this._hourlyForecast = [];
			} finally {
				this._forecastLoading = !1;
			}
		}
	}
	setConfig(e) {
		if (!e.entity) throw Error("You need to define an entity");
		this.config = e, setTimeout(() => {
			this._loadForecast();
		}, 1e3);
	}
	static getStubConfig() {
		return {
			type: `custom:${fi}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(pi);
	}
	static getConfigSchema() {
		return mi;
	}
	getCardSize() {
		return this.config?.grid_options?.rows ?? 3;
	}
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
		let e = ci(this.hass, this.config.entity), t = this.config?.grid_options?.rows ?? 3;
		return this.style.setProperty("--card-grid-rows", t.toString()), e ? !this._forecast || this._forecast.length === 0 ? T`<div>Loading forecast...</div>` : !this._hourlyForecast || this._hourlyForecast.length === 0 ? T`<div>Loading hourly forecast...</div>` : this._forecast.length > 0 && this._hourlyForecast.length > 0 ? T`<daily-forecast-diagram
          .config=${{
			...this.config,
			enable_animate_weather_icons: !0
		}}
          .forecast=${[...this._forecast?.slice(0, 7) ?? []]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${V}
          .getWeatherIcon=${si}
          .standalone=${!0}
        ></daily-forecast-diagram>` : T`` : T`<div>Entity not found: ${this.config.entity}</div>`;
	}
};
N([A({ attribute: !1 }), M("design:type", Object)], gi.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], gi.prototype, "config", void 0), N([j(), M("design:type", Array)], gi.prototype, "_forecast", void 0), N([j(), M("design:type", Array)], gi.prototype, "_hourlyForecast", void 0), N([j(), M("design:type", Object)], gi.prototype, "_forecastLoading", void 0), gi = N([k(fi), M("design:paramtypes", [])], gi);
//#endregion
//#region src/cards/animated-background/effects/lightning-flash-effect.ts
var _i = () => E`
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
`, vi = (e, t, n) => {
	if (!e) return T``;
	let r = {
		"clear-night": yi(n || 400),
		cloudy: xi(n || 400),
		fog: Si(n || 400),
		hail: Ci(n || 400),
		lightning: Di(n || 400),
		"lightning-rainy": Oi(n || 400),
		partlycloudy: t ? Mi(n || 400) : Ni(n || 400),
		pouring: Ti(n || 400),
		rainy: wi(n || 400),
		snowy: ji(n || 400),
		"snowy-rainy": Ai(n || 400),
		sunny: bi(),
		windy: Ei(n || 400),
		"windy-variant": Ei(n || 400),
		exceptional: Pi(n || 400)
	};
	return e ? r[e] : T``;
}, yi = (e) => E`
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
  ${Array.from({ length: Math.ceil(e / 100) }, (e, t) => t).map((e) => {
	let t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), r = (t - 50) / 5 + e * Math.floor(Math.random() * 25);
	return E`
    <use href="#starIcon" x="0" y="0" transform="translate(${e * 100 + n},${r}) scale(0.5)"/>
    `;
})}
  </g>
`, bi = () => E`
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
`, xi = (e) => E`
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
  ${ki(e)}
  `, Si = (e) => E`
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
  ${ki(e)}
  `, Ci = (e) => E`
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
  ${Array.from({ length: Math.ceil(e / 100) }, (e, t) => t).map((e) => {
	let t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), r = (t - 50) / 5 + e * Math.floor(Math.random() * 25);
	return E`
  <g>
    <use href="#hailIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(${e * 100 + n},${r})" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  `;
})}
  `, wi = (e) => E`
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
  ${ki(e)}
  
  `;
E`<g transform="translate(168,-30) scale(3)"><circle cx="24" cy="42" r="4" fill="#a8dadc"/><circle cx="40" cy="42" r="4" fill="#a8dadc"/><circle cx="32" cy="34" r="4" fill="#a8dadc"/><path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></g>`;
var Ti = (e) => E`
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
  ${Array.from({ length: Math.ceil(e / 20) }, (e, t) => t).map((e) => {
	let t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), r = (t - 50) / 5 + e * Math.floor(Math.random() * 25), i = e * 20 + n;
	return E`
    <line x1="${i}" y1="${r}" x2="${i}" y2="${r + 10}" stroke="url(#extremeRainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${r}; ${r + 20}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${r + 10}; ${r + 30}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="0.5s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, Ei = (e) => E`
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
  ${Array.from({ length: Math.ceil(e / 50) }, (e, t) => t).map((e) => {
	let t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), r = (t - 50) / 5 + e * Math.floor(Math.random() * 25), i = e * 50 + n;
	return E`
    <line x1="${i}" y1="${r}" x2="${i + 30}" y2="${r}" stroke="url(#windLineGradient)" stroke-width="4" stroke-linecap="round">
      <animate attributeName="x1" values="${i}; ${i + 10}; ${i}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="${i + 30}; ${i + 40}; ${i + 30}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0.4; 1" dur="3s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, Di = (e) => E`
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
 
   ${ki(e)}
   
  <!-- Lightning flash effect that illuminates the entire background (full-size overlay) -->
  ${_i()}
  `, Oi = (e) => E`
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

  ${ki(e)}
  
  <!-- Lightning flash effect for rainy thunderstorms -->
  ${_i()}
  `, ki = (e) => E`
${Array.from({ length: Math.ceil(e / 10) }, (e, t) => t).map((e) => {
	let t = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 10), r = (t - 50) / 5 + e * Math.floor(Math.random() * 25), i = e * 100 + n, a = Math.floor(Math.random() * 2) + 1, o = 1 + Math.random() * 1, s = 44 + Math.floor(Math.random() * 90);
	return E`
    <g>
      <use href="#icon" x="${i}" y="${r}" width="80" height="40" transform="scale(${a})" opacity="0">
        <animate attributeName="opacity" values="0;${o};${o};0" dur="${s}s" repeatCount="indefinite"/>
      </use>
      <animateTransform attributeName="transform" type="translate" values="-150,20;450,20" dur="${s}s" repeatCount="indefinite"/>
    </g>
    `;
})}
  `, Ai = (e) => {
	let t = Math.max(2, Math.ceil(e / 190)), n = e / t;
	return E`
  <defs>
    <linearGradient id="sleetGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <linearGradient id="sleetRainDropGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#dbeafe" stop-opacity="0"/>
      <stop offset="30%" stop-color="#93c5fd" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.95"/>
    </linearGradient>
    <g id="sleetSnowFlake" stroke-linecap="round" stroke-linejoin="round">
      <g stroke="rgba(92, 126, 162, 0.55)" stroke-width="2.2">
        <line x1="0" y1="-3.8" x2="0" y2="3.8"/>
        <line x1="-3.2" y1="0" x2="3.2" y2="0"/>
        <line x1="-2.5" y1="-2.5" x2="2.5" y2="2.5"/>
        <line x1="-2.5" y1="2.5" x2="2.5" y2="-2.5"/>
      </g>
      <g stroke="#f4fbff" stroke-width="1.1">
        <line x1="0" y1="-3.8" x2="0" y2="3.8"/>
        <line x1="-3.2" y1="0" x2="3.2" y2="0"/>
        <line x1="-2.5" y1="-2.5" x2="2.5" y2="2.5"/>
        <line x1="-2.5" y1="2.5" x2="2.5" y2="-2.5"/>
      </g>
      <circle cx="0" cy="0" r="0.9" fill="#f8fdff" stroke="none"/>
    </g>
    <g id="sleetCloudIcon">
      <path fill="url(#sleetGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
  </defs>

  ${Array.from({ length: t }, (e, t) => E`
      <g transform="translate(${Math.round(t * n + n * .16)} ${Math.round(14 + t * 11 % 3 * 9)})">
        <g>
          <use href="#sleetCloudIcon" x="0" y="0" width="80" height="40" transform="scale(${1.45 + t % 2 * .18})" opacity="0.93"/>
          <animateTransform attributeName="transform" type="translate" values="0,0;14,0;0,0" dur="${16 + t % 3 * 3}s" repeatCount="indefinite"/>
        </g>

        ${Array.from({ length: 7 }, (e, n) => {
		let r = 15 + n * 8 + ((t + n) % 2 == 0 ? -1.2 : 1.2), i = 52 + n % 2 * 2, a = i + 16 + n % 3 * 3, o = (.82 + n % 3 * .14).toFixed(2), s = (-.16 * (t + n)).toFixed(2);
		return E`
            <line x1="${r}" y1="${i}" x2="${r + 1.8}" y2="${a}" stroke="url(#sleetRainDropGradient)" stroke-width="1.7" stroke-linecap="round" opacity="0.86">
              <animate attributeName="y1" values="${i};${i + 26}" dur="${o}s" repeatCount="indefinite" begin="${s}s"/>
              <animate attributeName="y2" values="${a};${a + 26}" dur="${o}s" repeatCount="indefinite" begin="${s}s"/>
              <animate attributeName="opacity" values="0;0.92;0.92;0" dur="${o}s" repeatCount="indefinite" begin="${s}s"/>
            </line>
          `;
	})}

        ${Array.from({ length: 10 }, (e, n) => {
		let r = 12 + n * 8 + (t + n) % 3 * 1.4, i = 54 + n % 3 * 2, a = (n % 2 == 0 ? -5 : 5) + (t % 2 == 0 ? 1.5 : -1.5), o = (3.9 + n % 4 * .65).toFixed(2), s = (-.25 * (t + n)).toFixed(2), c = (t + n) % 2 == 0 ? -14 : 14;
		return E`
            <g transform="translate(${r} ${i}) scale(${(.96 + n % 3 * .15).toFixed(2)})">
              <use href="#sleetSnowFlake" opacity="0.9"/>
              <animateTransform additive="sum" attributeName="transform" type="translate" values="0 0; ${a} 26; ${(-a * .3).toFixed(1)} 52" dur="${o}s" repeatCount="indefinite" begin="${s}s"/>
              <animateTransform additive="sum" attributeName="transform" type="rotate" values="0; ${c}; ${-c}" dur="${o}s" repeatCount="indefinite" begin="${s}s"/>
              <animate attributeName="opacity" values="0;0.96;0.96;0" dur="${o}s" repeatCount="indefinite" begin="${s}s"/>
            </g>
          `;
	})}
      </g>
    `)}
  `;
}, ji = (e) => {
	let t = Math.max(2, Math.ceil(e / 190)), n = e / t;
	return E`
  <defs>
    <linearGradient id="snowGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <radialGradient id="snowCore" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="100%" stop-color="#e6f4ff" stop-opacity="0.92"/>
    </radialGradient>
    <g id="snowCloudIcon">
      <path fill="url(#snowGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <g id="snowFlakeIcon" stroke-linecap="round" stroke-linejoin="round">
      <g stroke="rgba(82, 120, 160, 0.52)" stroke-width="2.2">
        <line x1="0" y1="-4.2" x2="0" y2="4.2"/>
        <line x1="-3.6" y1="0" x2="3.6" y2="0"/>
        <line x1="-3" y1="-3" x2="3" y2="3"/>
        <line x1="-3" y1="3" x2="3" y2="-3"/>
      </g>
      <g stroke="#f4fbff" stroke-width="1.15">
        <line x1="0" y1="-4.2" x2="0" y2="4.2"/>
        <line x1="-3.6" y1="0" x2="3.6" y2="0"/>
        <line x1="-3" y1="-3" x2="3" y2="3"/>
        <line x1="-3" y1="3" x2="3" y2="-3"/>
      </g>
      <circle cx="0" cy="0" r="1.05" fill="url(#snowCore)" stroke="none"/>
    </g>

  </defs>

  ${Array.from({ length: t }, (e, t) => E`
      <g transform="translate(${Math.round(t * n + n * .14)} ${Math.round(12 + t * 7 % 3 * 8)})">
        <g>
          <use href="#snowCloudIcon" x="0" y="0" width="80" height="40" transform="scale(${1.42 + t % 2 * .2})" opacity="0.93"/>
          <animateTransform attributeName="transform" type="translate" values="0,0;12,0;0,0" dur="${15 + t % 3 * 3}s" repeatCount="indefinite"/>
        </g>

        ${Array.from({ length: 14 }, (e, n) => {
		let r = 10 + n * 5.4 + n % 2 * 1.2, i = 52 + n % 3, a = (n % 2 == 0 ? -7 : 7) + (t % 2 == 0 ? 2 : -2), o = (4.5 + n % 4 * .62).toFixed(2), s = (-.22 * (t + n)).toFixed(2);
		return E`
            <g transform="translate(${r} ${i}) scale(${(.95 + n % 4 * .18).toFixed(2)})" opacity="0">
              <use href="#snowFlakeIcon"/>
              <animateTransform additive="sum" attributeName="transform" type="translate" values="0 0; ${a} 30; ${(-a * .3).toFixed(1)} 62" dur="${o}s" repeatCount="indefinite" begin="${s}s"/>
              <animateTransform additive="sum" attributeName="transform" type="rotate" values="0; 26; 340" dur="${o}s" repeatCount="indefinite" begin="${s}s"/>
              <animate attributeName="opacity" values="0;0.98;0.98;0" dur="${o}s" repeatCount="indefinite" begin="${s}s"/>
            </g>
          `;
	})}
      </g>
    `)}
  `;
}, Mi = (e) => E`
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
  ${ki(e)}
  `, Ni = (e) => E`
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
  ${ki(e)}
  `, Pi = (e) => E`
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
  
  ${ki(e)}
  `, Fi = `${en}-animated-background-card`, Ii = `${Fi}-editor`, Li = [
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
		selector: { select: {
			mode: "dropdown",
			options: [
				{
					value: "daily",
					label: "forecast_mode.daily"
				},
				{
					value: "hourly",
					label: "forecast_mode.hourly"
				},
				{
					value: "none",
					label: "forecast_mode.none"
				}
			]
		} },
		description: "config.descr.forecast_mode"
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
		selector: { number: {
			min: 12,
			max: 96,
			step: 1,
			mode: "box"
		} },
		description: "config.descr.temperature_font_size"
	},
	{
		name: "photo_mode",
		required: !1,
		selector: { boolean: {} },
		description: "config.descr.photo_mode"
	}
], $ = class extends O {
	hourlyForecast = [];
	forecastLoading = !1;
	show_forecast = !0;
	config = {};
	_t;
	getWeatherIcon;
	compact = !0;
	maxHours = 6;
	alignRight = !0;
	static styles = s`
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
  `;
	_fmtHour(e) {
		return new Date(e).toLocaleTimeString([], { hour: "2-digit" });
	}
	render() {
		if (this.show_forecast === !1 || this.config.show_forecast === !1) return T``;
		let e = (this.hourlyForecast || []).slice(0, Math.max(1, this.maxHours));
		return T`
      <div class="wrapper ${this.alignRight ? "align-right" : ""}">
        ${this.compact ? T`` : T`
              <div class="section-title">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                ${this._t("forecast_hours", { hours: e.length })}
              </div>
            `}
        <div class="grid">
          ${e.map((e) => T`
              <div class="tile">
                <div class="label">${this._fmtHour(e.datetime ?? e.time)}</div>
                <div class="icon">
                  ${this.getWeatherIcon(e.condition, this.config.enable_animate_weather_icons ? "animated" : "mdi", this.compact ? "18px" : "24px", !0)}
                </div>
                <div class="temps">
                  ${typeof e.temperature == "number" ? T`<span>${Math.round(e.temperature)}°</span>` : ""}
                </div>
              </div>
            `)}
        </div>
      </div>
    `;
	}
};
N([A({ type: Array }), M("design:type", Array)], $.prototype, "hourlyForecast", void 0), N([A({ type: Boolean }), M("design:type", Object)], $.prototype, "forecastLoading", void 0), N([A({ type: Boolean }), M("design:type", Object)], $.prototype, "show_forecast", void 0), N([A({ type: Object }), M("design:type", Object)], $.prototype, "config", void 0), N([A({ type: Function }), M("design:type", Function)], $.prototype, "_t", void 0), N([A({ type: Function }), M("design:type", Function)], $.prototype, "getWeatherIcon", void 0), N([A({ type: Boolean }), M("design:type", Boolean)], $.prototype, "compact", void 0), N([A({ type: Number }), M("design:type", Number)], $.prototype, "maxHours", void 0), N([A({ type: Boolean }), M("design:type", Boolean)], $.prototype, "alignRight", void 0), $ = N([k("hourly-forecast-chart")], $);
//#endregion
//#region src/cards/animated-background/swissweather-bg-card.ts
var Ri;
I({ loader: (e) => H[e] }), console.log("🎯 About to apply @customElement decorator to SwissweatherCard (BG)"), console.log("🎯 customElements registry available:", !!customElements);
var zi = class extends O {
	hass;
	config;
	_tempEl;
	_forecast = [];
	_hourly = [];
	_forecastLoading = !1;
	_hourlyLoading = !1;
	_lastEntityId;
	static get styles() {
		return s`
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

      .img-photo {
        position: absolute;
        margin-top: var(--bg-temp-img-top, 36px);
        inset: 0;
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        min-height: 200px;
        isolation: isolate;
        box-shadow: var(
          --ha-card-box-shadow,
          0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1))
        );
      }

      .photo-layer {
        position: absolute;
        inset: 0;
      }

      .photo-base {
        animation: bg-pan 34s ease-in-out infinite alternate;
      }

      .img-photo.mood-sunny.day .photo-base {
        background:
          radial-gradient(circle at 75% 20%, rgba(255, 250, 196, 0.95), rgba(255, 250, 196, 0) 45%),
          linear-gradient(
            160deg,
            rgba(123, 198, 250, 0.95) 0%,
            rgba(88, 163, 221, 0.92) 46%,
            rgba(67, 138, 191, 0.96) 100%
          );
      }

      .img-photo.mood-sunny.night .photo-base {
        background:
          radial-gradient(circle at 78% 18%, rgba(196, 225, 255, 0.25), rgba(196, 225, 255, 0) 40%),
          linear-gradient(
            165deg,
            rgba(27, 45, 75, 0.98) 0%,
            rgba(15, 26, 47, 0.98) 58%,
            rgba(9, 16, 32, 1) 100%
          );
      }

      .img-photo.mood-cloudy.day .photo-base {
        background:
          radial-gradient(circle at 30% 15%, rgba(226, 238, 245, 0.6), rgba(226, 238, 245, 0) 40%),
          linear-gradient(
            160deg,
            rgba(144, 168, 183, 0.95) 0%,
            rgba(122, 147, 165, 0.96) 52%,
            rgba(96, 121, 141, 0.98) 100%
          );
      }

      .img-photo.mood-cloudy.night .photo-base {
        background:
          radial-gradient(circle at 25% 12%, rgba(123, 140, 166, 0.24), rgba(123, 140, 166, 0) 44%),
          linear-gradient(
            165deg,
            rgba(40, 52, 71, 0.98) 0%,
            rgba(29, 40, 56, 0.98) 56%,
            rgba(20, 28, 40, 1) 100%
          );
      }

      .img-photo.mood-rainy.day .photo-base {
        background:
          radial-gradient(circle at 72% 8%, rgba(226, 239, 252, 0.35), rgba(226, 239, 252, 0) 45%),
          linear-gradient(
            168deg,
            rgba(95, 120, 139, 0.95) 0%,
            rgba(73, 97, 118, 0.97) 50%,
            rgba(54, 78, 96, 0.99) 100%
          );
      }

      .img-photo.mood-rainy.night .photo-base {
        background:
          radial-gradient(circle at 72% 12%, rgba(122, 145, 170, 0.14), rgba(122, 145, 170, 0) 42%),
          linear-gradient(
            168deg,
            rgba(25, 36, 54, 0.99) 0%,
            rgba(17, 26, 42, 1) 55%,
            rgba(10, 16, 27, 1) 100%
          );
      }

      .photo-clouds {
        background:
          radial-gradient(
            ellipse at 20% 25%,
            rgba(255, 255, 255, 0.26),
            rgba(255, 255, 255, 0) 52%
          ),
          radial-gradient(ellipse at 65% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 55%),
          radial-gradient(ellipse at 85% 20%, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 48%);
        filter: blur(6px);
        animation: cloud-drift 26s ease-in-out infinite alternate;
        opacity: 0.62;
      }

      .photo-clouds-front {
        background:
          radial-gradient(ellipse at 8% 36%, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0) 40%),
          radial-gradient(
            ellipse at 38% 32%,
            rgba(255, 255, 255, 0.36),
            rgba(255, 255, 255, 0) 44%
          ),
          radial-gradient(
            ellipse at 68% 38%,
            rgba(255, 255, 255, 0.34),
            rgba(255, 255, 255, 0) 42%
          ),
          radial-gradient(ellipse at 96% 34%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0) 41%);
        filter: blur(4px);
        animation: cloud-drift-front 14s ease-in-out infinite alternate;
        mix-blend-mode: screen;
        opacity: 0;
      }

      .photo-clouds-depth {
        background:
          radial-gradient(ellipse at 12% 62%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 52%),
          radial-gradient(
            ellipse at 50% 56%,
            rgba(255, 255, 255, 0.16),
            rgba(255, 255, 255, 0) 50%
          ),
          radial-gradient(ellipse at 82% 64%, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 55%);
        filter: blur(9px);
        animation: cloud-drift-depth 18s ease-in-out infinite alternate;
        opacity: 0;
      }

      .img-photo.mood-cloudy .photo-clouds,
      .img-photo.mood-rainy .photo-clouds {
        opacity: 0.95;
      }

      .img-photo.mood-cloudy .photo-clouds-front,
      .img-photo.mood-rainy .photo-clouds-front {
        opacity: 0.92;
      }

      .img-photo.mood-cloudy .photo-clouds-depth,
      .img-photo.mood-rainy .photo-clouds-depth {
        opacity: 0.72;
      }

      .img-photo.sun-bloom.day .photo-sun-rays {
        opacity: 0.8;
      }

      .img-photo.windy .photo-wind-streaks {
        opacity: 0.9;
      }

      .photo-rain {
        display: none;
      }

      .weather-particles {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
        z-index: 4;
      }

      .weather-cluster {
        position: absolute;
        top: 14%;
        width: 28%;
        height: 86%;
      }

      .weather-cluster.c1 {
        left: 4%;
      }

      .weather-cluster.c2 {
        left: 34%;
      }

      .weather-cluster.c3 {
        left: 64%;
      }

      .rain-drop {
        position: absolute;
        top: -14%;
        left: var(--x, 50%);
        width: var(--w, 2px);
        height: var(--h, 22px);
        border-radius: 999px;
        background: linear-gradient(
          to bottom,
          rgba(224, 241, 255, 0),
          rgba(224, 241, 255, 0.85) 35%,
          rgba(168, 214, 255, 0.9) 100%
        );
        filter: blur(0.2px);
        opacity: var(--opacity, 0.7);
        mix-blend-mode: screen;
        animation: rain-drop-fall var(--duration, 1.1s) linear infinite;
        animation-delay: var(--delay, 0s);
      }

      .snow-flake {
        position: absolute;
        top: -12%;
        left: var(--x, 50%);
        width: var(--size, 4px);
        height: var(--size, 4px);
        background: transparent;
        opacity: var(--opacity, 0.9);
        animation: snow-flake-fall var(--duration, 7s) linear infinite;
        animation-delay: var(--delay, 0s);
        z-index: 5;
      }

      .snow-flake::before,
      .snow-flake::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.98),
          rgba(222, 240, 255, 0.96)
        );
        border-radius: 999px;
      }

      .snow-flake::before {
        width: max(1px, calc(var(--size, 4px) * 0.22));
        height: var(--size, 4px);
        box-shadow:
          0 0 6px rgba(255, 255, 255, 0.8),
          0 0 2px rgba(210, 233, 255, 0.9);
      }

      .snow-flake::after {
        width: var(--size, 4px);
        height: max(1px, calc(var(--size, 4px) * 0.22));
      }

      .snow-flake i,
      .snow-flake b {
        position: absolute;
        left: 50%;
        top: 50%;
        width: max(1px, calc(var(--size, 4px) * 0.18));
        height: calc(var(--size, 4px) * 0.86);
        border-radius: 999px;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.92),
          rgba(216, 236, 255, 0.88)
        );
        transform-origin: center;
      }

      .snow-flake i {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      .snow-flake b {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      .photo-sun-rays {
        background: conic-gradient(
          from 20deg at 76% 20%,
          rgba(255, 249, 189, 0.28) 0deg,
          rgba(255, 249, 189, 0) 35deg,
          rgba(255, 246, 177, 0.24) 52deg,
          rgba(255, 246, 177, 0) 90deg,
          rgba(255, 247, 181, 0.28) 116deg,
          rgba(255, 247, 181, 0) 160deg,
          rgba(255, 249, 189, 0.22) 198deg,
          rgba(255, 249, 189, 0) 240deg,
          rgba(255, 250, 200, 0.26) 280deg,
          rgba(255, 250, 200, 0) 320deg,
          rgba(255, 249, 189, 0.28) 360deg
        );
        mix-blend-mode: screen;
        opacity: 0;
        animation: sun-ray-sweep 18s linear infinite;
        z-index: 2;
      }

      .photo-wind-streaks {
        background-image:
          linear-gradient(
            112deg,
            rgba(225, 239, 255, 0) 0%,
            rgba(225, 239, 255, 0.18) 26%,
            rgba(225, 239, 255, 0.34) 38%,
            rgba(225, 239, 255, 0) 54%
          ),
          linear-gradient(
            112deg,
            rgba(213, 233, 255, 0) 18%,
            rgba(213, 233, 255, 0.2) 34%,
            rgba(213, 233, 255, 0.3) 48%,
            rgba(213, 233, 255, 0) 64%
          );
        background-size:
          220% 100%,
          200% 100%;
        background-position:
          0% 20%,
          -36% 62%;
        opacity: 0;
        animation: wind-streak-sweep 2.6s linear infinite;
        z-index: 4;
        pointer-events: none;
        inset: 0 0 auto 0;
        height: 68%;
        -webkit-mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.82) 58%,
          rgba(0, 0, 0, 0) 100%
        );
        mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.82) 58%,
          rgba(0, 0, 0, 0) 100%
        );
        mix-blend-mode: screen;
      }

      .photo-lightning {
        background: radial-gradient(
          circle at 52% 26%,
          rgba(255, 246, 169, 0.95),
          rgba(255, 246, 169, 0) 52%
        );
        opacity: 0;
        mix-blend-mode: screen;
        animation: lightning-flash 7s infinite;
        z-index: 6;
      }

      .photo-lightning-bolt {
        position: absolute;
        top: 8%;
        left: 54%;
        width: 6px;
        height: 40%;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.9) 22%,
          rgba(255, 241, 168, 0.95) 100%
        );
        clip-path: polygon(48% 0, 70% 0, 44% 36%, 68% 36%, 30% 100%, 44% 56%, 24% 56%);
        filter: drop-shadow(0 0 8px rgba(255, 248, 190, 0.9));
        opacity: 0;
        animation: lightning-bolt 7s infinite;
        z-index: 7;
      }

      .photo-cloud-shadow {
        background:
          radial-gradient(ellipse at 22% 42%, rgba(16, 26, 40, 0.22), rgba(16, 26, 40, 0) 46%),
          radial-gradient(ellipse at 58% 40%, rgba(18, 30, 46, 0.18), rgba(18, 30, 46, 0) 44%),
          radial-gradient(ellipse at 85% 44%, rgba(18, 31, 48, 0.22), rgba(18, 31, 48, 0) 47%);
        animation: cloud-shadow-drift 20s ease-in-out infinite alternate;
        opacity: 0.5;
        mix-blend-mode: multiply;
      }

      .photo-vignette {
        background: radial-gradient(
          circle at center,
          rgba(0, 0, 0, 0) 52%,
          rgba(0, 0, 0, 0.33) 100%
        );
        z-index: 3;
      }

      .photo-grain {
        background-image: radial-gradient(rgba(255, 255, 255, 0.2) 0.6px, transparent 0.8px);
        background-size: 3px 3px;
        opacity: 0.1;
        mix-blend-mode: soft-light;
        animation: grain-shift 0.25s steps(2, end) infinite;
        z-index: 8;
      }

      @keyframes bg-pan {
        0% {
          transform: scale(1.02) translate3d(0, 0, 0);
        }
        100% {
          transform: scale(1.07) translate3d(-1.5%, -1.2%, 0);
        }
      }

      @keyframes cloud-drift {
        0% {
          transform: translate3d(-2%, 0, 0) scale(1.02);
        }
        100% {
          transform: translate3d(2%, -1%, 0) scale(1.06);
        }
      }

      @keyframes cloud-drift-depth {
        0% {
          transform: translate3d(2%, 1%, 0) scale(1.04);
        }
        100% {
          transform: translate3d(-3%, -1%, 0) scale(1.08);
        }
      }

      @keyframes cloud-drift-front {
        0% {
          transform: translate3d(-3%, 1%, 0) scale(1.03);
        }
        100% {
          transform: translate3d(4%, -1%, 0) scale(1.08);
        }
      }

      @keyframes cloud-shadow-drift {
        0% {
          transform: translate3d(-2%, 1%, 0) scale(1.01);
        }
        100% {
          transform: translate3d(2%, -1%, 0) scale(1.06);
        }
      }

      @keyframes rain-fall {
        0% {
          transform: translateY(-14px);
        }
        100% {
          transform: translateY(14px);
        }
      }

      @keyframes rain-drop-fall {
        0% {
          transform: translate3d(0, -12%, 0) rotate(10deg);
        }
        100% {
          transform: translate3d(var(--drift, 6px), 132%, 0) rotate(10deg);
        }
      }

      @keyframes snow-flake-fall {
        0% {
          top: -12%;
          transform: translate3d(0, 0, 0) rotate(0deg);
        }
        35% {
          transform: translate3d(var(--drift, 10px), 0, 0) rotate(120deg);
        }
        70% {
          transform: translate3d(var(--drift-back, -10px), 0, 0) rotate(220deg);
        }
        100% {
          top: 112%;
          transform: translate3d(0, 0, 0) rotate(360deg);
        }
      }

      @keyframes sun-ray-sweep {
        0% {
          transform: rotate(0deg) scale(1);
          opacity: 0.55;
        }
        50% {
          transform: rotate(8deg) scale(1.04);
          opacity: 0.9;
        }
        100% {
          transform: rotate(16deg) scale(1);
          opacity: 0.58;
        }
      }

      @keyframes wind-streak-sweep {
        0% {
          background-position:
            0% 20%,
            -36% 62%;
          opacity: 0.55;
        }
        50% {
          background-position:
            76% 24%,
            46% 66%;
          opacity: 0.95;
        }
        100% {
          background-position:
            156% 28%,
            128% 70%;
          opacity: 0.45;
        }
      }

      @keyframes lightning-bolt {
        0%,
        83%,
        100% {
          opacity: 0;
        }
        84% {
          opacity: 1;
        }
        85% {
          opacity: 0;
        }
        86% {
          opacity: 0.85;
        }
        87% {
          opacity: 0;
        }
      }

      @keyframes lightning-flash {
        0%,
        83%,
        100% {
          opacity: 0;
        }
        84% {
          opacity: 0.92;
        }
        85% {
          opacity: 0;
        }
        86% {
          opacity: 0.72;
        }
        87% {
          opacity: 0;
        }
      }

      @keyframes grain-shift {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(1px, 1px);
        }
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
        z-index: 12; /* above photo overlays */
      }
      .forecast-mini {
        position: absolute;
        bottom: 16px; /* align vertically with bottom spacing */
        right: 16px; /* align to the right edge */
        z-index: 12; /* keep charts above photo overlays */
        max-width: calc(100% - 32px); /* honor left/right margins */
        isolation: isolate;
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
	setConfig(e) {
		if (!e.entity) throw Error("You need to define an entity");
		this.config = e;
	}
	getCardSize() {
		return this.config?.grid_options?.rows ?? 4;
	}
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
			type: `custom:${Fi}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(Ii);
	}
	static getConfigSchema() {
		return Li;
	}
	updated(e) {
		if (super.updated(e), this.hass && this.config?.entity) {
			if (this._lastEntityId !== this.config.entity) {
				this._lastEntityId = this.config.entity;
				let e = this.config.forecast_mode || "daily";
				e === "daily" && this._loadDailyForecast(), e === "hourly" && this._loadHourlyForecast();
			}
			this.config.show_day_temps !== !1 && !this._forecastLoading && this._forecast.length === 0 && this._loadDailyForecast();
		}
	}
	render() {
		if (L((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config) return T``;
		let e = this.config?.grid_options?.rows ?? 3;
		this.style.setProperty("--card-grid-rows", e.toString());
		let t = ci(this.hass, this.config.entity), n = t.attributes.temperature, r = t.state, i = li(this.hass, this.config), a = this.clientWidth || 300, o = e * 64 - 8, s = this.config?.temperature_font_size, c = typeof s == "number" && s > 0 ? `${s}px` : "36px";
		this.style.setProperty("--bg-temp-font-size", c), this.style.setProperty("--bg-temp-img-top", `calc(${c})`);
		let l = this._forecast && this._forecast.length > 0 ? this._forecast[0] : t.attributes.forecast ? t.attributes.forecast[0] : null, u = this.config.sun_entity, d = u ? this.hass.states[u] : void 0, ee = d?.attributes?.next_rising ? new Date(d.attributes.next_rising) : void 0, f = d?.attributes?.next_setting ? new Date(d.attributes.next_setting) : void 0, p = (this.hass.selectedLanguage || this.hass.language || "en").replace("_", "-"), m = (e) => e ? e.toLocaleTimeString(p, {
			hour: "2-digit",
			minute: "2-digit"
		}) : "--:--";
		return T`
      <div>
        <div class="temperature">
          ${typeof n == "number" && !isNaN(n) ? n : "--"}°
        </div>
        ${r ? T`${this.config.photo_mode === !0 ? this._renderPhotoLikeBackground(r, i) : T`<div class="img-svg">
                    <svg
                      viewBox="0 0 ${a} ${o}"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      ${a > 0 ? vi(r, i, a) : E``}
                    </svg>
                  </div>`}
              ${l && this.config.show_day_temps !== !1 ? T`
                    <div class="forecast-temps">
                      <span class="temp-high">
                        <ha-icon icon="mdi:arrow-up-bold"></ha-icon> ${Math.round(l.temperature)}°
                      </span>
                      <span class="temp-low">
                        <ha-icon icon="mdi:arrow-down-bold"></ha-icon> ${Math.round(l.templow || l.temperature - 5)}°
                      </span>
                    </div>
                  ` : ""}
              ${u && this.config.show_sun_times !== !1 ? T`
                    <div class="sun-times">
                      <span title="${V("sunrise")}">
                        <ha-icon icon="mdi:weather-sunset-up"></ha-icon> ${m(ee)}
                      </span>
                      <span title="${V("sunset")}">
                        <ha-icon icon="mdi:weather-sunset-down"></ha-icon> ${m(f)}
                      </span>
                    </div>
                  ` : ""}
              ${(this.config.forecast_mode || "daily") === "daily" && this._forecast.length > 0 ? T`
                    <div class="forecast-mini">
                      <daily-forecast-chart
                        .forecast=${this._forecast?.slice(0, 7) ?? []}
                        .forecastLoading=${this._forecastLoading}
                        .show_forecast=${!0}
                        .config=${{
			...this.config,
			enable_animate_weather_icons: !0
		}}
                        .compact=${!0}
                        .startTomorrow=${!0}
                        .maxDays=${5}
                        .alignRight=${!0}
                        ._t=${V}
                        .getWeatherIcon=${si}
                        .formatDate=${on}
                      ></daily-forecast-chart>
                    </div>
                  ` : T``}
              ${(this.config.forecast_mode || "daily") === "hourly" && this._hourly.length > 0 ? T`
                    <div class="forecast-mini">
                      <hourly-forecast-chart
                        .hourlyForecast=${this._hourly}
                        .forecastLoading=${this._hourlyLoading}
                        .show_forecast=${!0}
                        .config=${{
			...this.config,
			enable_animate_weather_icons: !0
		}}
                        .compact=${!0}
                        .maxHours=${5}
                        .alignRight=${!0}
                        ._t=${V}
                        .getWeatherIcon=${si}
                      ></hourly-forecast-chart>
                    </div>
                  ` : T``}
              <div class="condition">${V(r)}</div> ` : T``}
      </div>
    `;
	}
	_resolvePhotoMood(e) {
		return [
			"rainy",
			"pouring",
			"lightning",
			"lightning-rainy",
			"snowy-rainy",
			"exceptional"
		].includes(e) ? "rainy" : [
			"cloudy",
			"partlycloudy",
			"fog",
			"windy",
			"windy-variant",
			"snowy",
			"hail"
		].includes(e) ? "cloudy" : "sunny";
	}
	_renderPhotoLikeBackground(e, t) {
		let n = this._resolvePhotoMood(e), r = e === "windy" || e === "windy-variant", i = t && (e === "sunny" || e === "partlycloudy"), a = n === "rainy" || e === "snowy-rainy" || e === "rainy" || e === "pouring", o = e === "snowy" || e === "snowy-rainy" || e === "hail", s = e === "lightning" || e === "lightning-rainy";
		return T`
      <div
        class="img-photo mood-${n} ${t ? "day" : "night"} ${r ? "windy" : ""} ${i ? "sun-bloom" : ""}"
      >
        <div class="photo-layer photo-base"></div>
        <div class="photo-layer photo-sun-rays"></div>
        <div class="photo-layer photo-clouds"></div>
        <div class="photo-layer photo-clouds-front"></div>
        <div class="photo-layer photo-clouds-depth"></div>
        <div class="photo-layer photo-wind-streaks"></div>
        <div class="photo-layer photo-cloud-shadow"></div>
        ${a || o ? T`<div class="photo-layer weather-particles">
              ${e === "snowy-rainy" ? T`${[
			"c1",
			"c2",
			"c3"
		].map((e) => T`<div class="weather-cluster ${e}">
                        ${a ? this._renderRainParticles(6, !0) : T``}
                        ${o ? this._renderSnowParticles(10, !0) : T``}
                      </div>`)}` : T`${a ? this._renderRainParticles(28, !1) : T``}
                  ${o ? this._renderSnowParticles(36, !1) : T``}`}
            </div>` : T``}
        ${s ? T`<div class="photo-layer photo-lightning"></div>
              <div class="photo-layer photo-lightning-bolt"></div>` : T``}
        <div class="photo-layer photo-vignette"></div>
        <div class="photo-layer photo-grain"></div>
      </div>
    `;
	}
	_renderRainParticles(e, t) {
		return Array.from({ length: e }, (e, n) => {
			let r = t ? 14 : 4, i = t ? 72 : 96, a = r + (n * 31 + 17) % 100 / 100 * i, o = (t ? .95 : .9 + n % 5 * .14).toFixed(2), s = (-1 * (n % 7 * .23)).toFixed(2), c = (t ? 15 : 14) + n % 4 * 5, l = (.46 + n % 4 * .11).toFixed(2), u = (n % 2 == 0 ? 5 : -5) + (n % 3 - 1) * 1.7, d = n % 3 == 0 ? 1.6 : 2.1;
			return T`<span
        class="rain-drop"
        style="--x:${a.toFixed(2)}%; --duration:${o}s; --delay:${s}s; --h:${c}px; --opacity:${l}; --drift:${u.toFixed(1)}px; --w:${d}px;"
      ></span>`;
		});
	}
	_renderSnowParticles(e, t) {
		return Array.from({ length: e }, (e, n) => {
			let r = t ? 12 : 2, i = t ? 76 : 98, a = r + (n * 29 + 7) % 100 / 100 * i, o = (t ? 6.1 : 5.6 + n % 5 * 1.1).toFixed(2), s = (-1 * (n % 9 * .7)).toFixed(2), c = (t ? 2.8 : 2.4 + n % 4 * 1.1).toFixed(1), l = (.52 + n % 4 * .11).toFixed(2), u = (n % 2 == 0 ? 13 : -13) + (n % 3 - 1) * 2.6, d = -u * .7;
			return T`<span
        class="snow-flake"
        style="--x:${a.toFixed(2)}%; --duration:${o}s; --delay:${s}s; --size:${c}px; --opacity:${l}; --drift:${u}px; --drift-back:${d.toFixed(1)}px;"
        ><i></i><b></b
      ></span>`;
		});
	}
	async _loadDailyForecast() {
		if (!(!this.hass || !this.config?.entity || this._forecastLoading)) {
			this._forecastLoading = !0;
			try {
				let e = (await this.hass.callWS({
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
			} catch (e) {
				console.warn("⚠️ BG Daily forecast loading failed:", e), this._forecast = [];
			} finally {
				this._forecastLoading = !1;
			}
		}
	}
	async _loadHourlyForecast() {
		if (!(!this.hass || !this.config?.entity || this._hourlyLoading)) {
			this._hourlyLoading = !0;
			try {
				let e = (await this.hass.callWS({
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
			} catch (e) {
				console.warn("⚠️ BG Hourly forecast loading failed:", e), this._hourly = [];
			} finally {
				this._hourlyLoading = !1;
			}
		}
	}
};
//#endregion
//#region src/cards/animated-background/swissweather-bg-card-editor.ts
N([A({ attribute: !1 }), M("design:type", Object)], zi.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], zi.prototype, "config", void 0), N([He(".temperature"), M("design:type", typeof (Ri = typeof HTMLElement < "u" && HTMLElement) == "function" ? Ri : Object)], zi.prototype, "_tempEl", void 0), N([j(), M("design:type", Array)], zi.prototype, "_forecast", void 0), N([j(), M("design:type", Array)], zi.prototype, "_hourly", void 0), zi = N([k(Fi)], zi), console.log("✅ SwissWeatherCard (animated Background) fully loaded and registered"), I({ loader: (e) => H[e] });
var Bi = class extends O {
	hass;
	lovelace;
	_config;
	constructor() {
		super(), console.log("🎨 SwissweatherCardEditor (BG) constructor called");
	}
	setConfig(e) {
		let t = { ...e };
		for (let e of ["entity", "sun_entity"]) t[e] === "" && delete t[e];
		this._config = t, this.requestUpdate();
	}
	static get styles() {
		return s`
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
		if (!this.hass) return T`<div>Loading...</div>`;
		L((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0,
			forecast_mode: typeof this._config?.forecast_mode == "string" ? this._config.forecast_mode : void 0,
			show_sun_times: typeof this._config?.show_sun_times == "boolean" ? this._config.show_sun_times : void 0,
			show_day_temps: typeof this._config?.show_day_temps == "boolean" ? this._config.show_day_temps : void 0,
			temperature_font_size: typeof this._config?.temperature_font_size == "number" ? this._config.temperature_font_size : void 0,
			photo_mode: typeof this._config?.photo_mode == "boolean" ? this._config.photo_mode : void 0
		}, t = Li.find((e) => e.name === "forecast_mode"), n = t ? {
			...t,
			selector: {
				...t.selector,
				select: {
					...t.selector.select,
					options: [
						{
							value: "daily",
							label: R("forecast_mode.daily")
						},
						{
							value: "hourly",
							label: R("forecast_mode.hourly")
						},
						{
							value: "none",
							label: R("forecast_mode.none")
						}
					]
				}
			}
		} : void 0;
		return T`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Animated Background Card (Experimental)</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${R("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${[
			Li.find((e) => e.name === "entity"),
			Li.find((e) => e.name === "sun_entity"),
			Li.find((e) => e.name === "temperature_font_size")
		].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Display -->
        <div class="group">
          <div class="group-title">${R("config.group_display") || "Display"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${[
			n,
			Li.find((e) => e.name === "show_day_temps"),
			Li.find((e) => e.name === "show_sun_times"),
			Li.find((e) => e.name === "photo_mode")
		].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Configuration Preview -->
        ${this._config?.entity ? T`
              <div class="preview">
                <div class="preview-title">📋 YAML-Config</div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            ` : ""}
      </div>
    `;
	}
	_computeLabel = (e) => ({
		entity: R("config.entity"),
		sun_entity: R("config.sun_entity"),
		forecast_mode: R("config.forecast_mode"),
		show_day_temps: R("config.show_day_temps"),
		show_sun_times: R("config.show_sun_times"),
		temperature_font_size: R("config.temperature_font_size"),
		photo_mode: R("config.photo_mode")
	})[e.name] || e.name;
	_computeHelper = (e) => e.description ? R(e.description) : "";
	_renderConfigPreview() {
		let e = { ...this._config };
		return e.type ||= `custom:${Fi}`, Object.keys(e).forEach((t) => {
			(e[t] === void 0 || e[t] === "") && delete e[t];
		}), Object.entries(e).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join("\n");
	}
	_valueChanged(e) {
		if (this._config ||= {
			type: `custom:${Fi}`,
			entity: ""
		}, e.type === "value-changed") {
			let t = {}, { ...n } = e.detail.value || {}, r = {
				...this._config,
				...n,
				...t,
				type: `custom:${Fi}`
			};
			delete r.show_forecast, Object.keys(r).forEach((e) => {
				(r[e] === "" || r[e] === void 0) && delete r[e];
			}), this._config = r, $t(this, "config-changed", { config: this._config });
		}
	}
};
N([A({ attribute: !1 }), M("design:type", Object)], Bi.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], Bi.prototype, "lovelace", void 0), N([A({ attribute: !1 }), M("design:type", Object)], Bi.prototype, "_config", void 0), Bi = N([k(Ii), M("design:paramtypes", [])], Bi);
//#endregion
//#region src/cards/hourly-charts/const.ts
var Vi = `${en}-temperature-card`, Hi = `${Vi}-editor`, Ui = `${en}-precipitation-card`, Wi = `${Ui}-editor`, Gi = `${en}-sunshine-card`, Ki = `${Gi}-editor`, qi = `${en}-wind-card`, Ji = `${qi}-editor`, Yi = [{
	name: "entity",
	required: !0,
	selector: { entity: { domain: "weather" } },
	description: "config.descr.entity"
}, {
	name: "forecast_hours",
	required: !1,
	selector: { number: {
		min: 6,
		max: 48,
		step: 1,
		mode: "box"
	} },
	description: "config.descr.forecast_hours"
}], Xi = [{
	name: "entity",
	required: !0,
	selector: { entity: { domain: "weather" } },
	description: "config.descr.entity"
}, {
	name: "forecast_hours",
	required: !1,
	selector: { number: {
		min: 6,
		max: 48,
		step: 1,
		mode: "box"
	} },
	description: "config.descr.forecast_hours"
}], Zi = [
	{
		name: "entity",
		required: !0,
		selector: { entity: { domain: "weather" } },
		description: "config.descr.entity"
	},
	{
		name: "forecast_hours",
		required: !1,
		selector: { number: {
			min: 6,
			max: 48,
			step: 1,
			mode: "box"
		} },
		description: "config.descr.forecast_hours"
	},
	{
		name: "sun_entity",
		required: !1,
		selector: { entity: { domain: "sun" } },
		description: "config.descr.sun_entity"
	},
	{
		name: "sunshine_entity",
		required: !1,
		selector: { entity: { domain: "sensor" } },
		description: "config.descr.sunshine_entity"
	}
], Qi = class extends O {
	hass;
	config;
	_hourlyForecast = [];
	_forecastLoading = !1;
	async _loadForecast() {
		if (!(!this.hass || !this.config?.entity || this._forecastLoading)) {
			this._forecastLoading = !0;
			try {
				let e = (await this.hass.callWS({
					type: "call_service",
					domain: "weather",
					service: "get_forecasts",
					service_data: {
						entity_id: this.config.entity,
						type: "hourly"
					},
					return_response: !0
				}))?.response;
				e && e[this.config.entity] ? (this._hourlyForecast = e[this.config.entity].forecast || [], this.requestUpdate("_hourlyForecast")) : this._hourlyForecast = [];
			} catch (e) {
				console.error(`[SwissWeather] Forecast load failed for ${this.config.entity}:`, e), this._hourlyForecast = [];
			} finally {
				this._forecastLoading = !1;
			}
		}
	}
	updated(e) {
		super.updated(e);
		let t = e.has("hass"), n = e.has("config");
		(t || n) && this._hourlyForecast.length === 0 && !this._forecastLoading && this._loadForecast();
	}
	setBaseConfig(e) {
		this.config = e, setTimeout(() => {
			this._loadForecast();
		}, 1e3);
	}
	getDefaultRows() {
		return 3;
	}
	setCardGridRows() {
		let e = this.config?.grid_options?.rows ?? this.getDefaultRows();
		this.style.setProperty("--card-grid-rows", e.toString());
	}
};
//#endregion
//#region src/cards/hourly-charts/temperature-card.ts
N([A({ attribute: !1 }), M("design:type", Object)], Qi.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], Qi.prototype, "config", void 0), N([j(), M("design:type", Array)], Qi.prototype, "_hourlyForecast", void 0), N([j(), M("design:type", Object)], Qi.prototype, "_forecastLoading", void 0), I({ loader: (e) => H[e] });
var $i = class extends Qi {
	static get styles() {
		return s`
      :host {
        display: block;
        height: 100%;
        box-sizing: border-box;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.1));
        font-family: var(
          --primary-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          sans-serif
        );
        color: var(--primary-text-color, #fff);
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        --chart-inner-border: none;
        --chart-padding: 8px 8px 4px;
        --chart-margin-top: 0;
        --chart-margin-bottom: 0;
      }
      .card-content {
        padding: 0;
        height: 100%;
        display: flex;
      }

      forecast-temperature-chart {
        display: block;
        flex: 1;
        min-height: 0;
      }
    `;
	}
	setConfig(e) {
		if (!e.entity) throw Error("You need to define an entity");
		this.setBaseConfig(e);
	}
	static getStubConfig() {
		return {
			type: `custom:${Vi}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(Hi);
	}
	static getConfigSchema() {
		return Yi;
	}
	getCardSize() {
		return this.config?.grid_options?.rows ?? 3;
	}
	getGridOptions() {
		return {
			rows: this.config?.grid_options?.rows ?? 3,
			columns: this.config?.grid_options?.columns ?? 12,
			min_columns: 6,
			max_columns: 48,
			min_rows: 3,
			max_rows: 6
		};
	}
	getDefaultRows() {
		return 3;
	}
	render() {
		if (!this.hass || !this.config) return T``;
		if (this.setCardGridRows(), !ci(this.hass, this.config.entity)) return T`<div class="card-content">Entity not found: ${this.config.entity}</div>`;
		if (this._hourlyForecast.length === 0) return T`<div class="card-content">Loading...</div>`;
		let e = this.config.forecast_hours ?? 12;
		return T`
      <div class="card-content">
        <forecast-temperature-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_temperature=${!0}
          ._t=${R}
        ></forecast-temperature-chart>
      </div>
    `;
	}
};
//#endregion
//#region src/cards/hourly-charts/temperature-card-editor.ts
$i = N([k(Vi)], $i), I({ loader: (e) => H[e] });
var ea = class extends O {
	hass;
	_config;
	setConfig(e) {
		let t = { ...e };
		t.entity === "" && delete t.entity, this._config = t, this.requestUpdate();
	}
	static get styles() {
		return s`
      .card-config {
        padding: 16px;
      }
      .header {
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--card-divider-color);
      }
      .header-title {
        font-size: 20px;
        font-weight: bold;
        color: var(--primary-text-color, #dc143c);
      }
      ha-form {
        display: block;
      }
    `;
	}
	render() {
		if (!this.hass) return T`<div>Loading...</div>`;
		L((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			forecast_hours: this._config?.forecast_hours ?? 12
		};
		return T`
      <div class="card-config">
        <div class="header">
          <div class="header-title">🌡️ SwissWeather Temperature Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Yi}
          .computeLabel=${(e) => ({
			entity: R("config.entity"),
			forecast_hours: R("config.forecast_hours") ?? "Forecast hours"
		})[e.name] ?? e.name}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
	}
	_valueChanged(e) {
		this._config ||= {
			type: `custom:${Vi}`,
			entity: ""
		};
		let t = {
			...this._config,
			...e.detail.value
		};
		$t(this, "config-changed", { config: t });
	}
};
//#endregion
//#region src/cards/hourly-charts/precipitation-card.ts
N([A({ attribute: !1 }), M("design:type", Object)], ea.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], ea.prototype, "_config", void 0), ea = N([k(Hi)], ea), I({ loader: (e) => H[e] });
var ta = class extends Qi {
	static get styles() {
		return s`
      :host {
        display: block;
        height: 100%;
        box-sizing: border-box;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.1));
        font-family: var(
          --primary-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          sans-serif
        );
        color: var(--primary-text-color, #fff);
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        --chart-inner-border: none;
        --chart-padding: 8px 8px 4px;
        --chart-margin-top: 0;
        --chart-margin-bottom: 0;
      }
      .card-content {
        padding: 0;
        height: 100%;
        display: flex;
      }

      precipitation-chart {
        display: block;
        flex: 1;
        min-height: 0;
      }
    `;
	}
	setConfig(e) {
		if (!e.entity) throw Error("You need to define an entity");
		this.setBaseConfig(e);
	}
	static getStubConfig() {
		return {
			type: `custom:${Ui}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(Wi);
	}
	static getConfigSchema() {
		return Yi;
	}
	getCardSize() {
		return this.config?.grid_options?.rows ?? 3;
	}
	getGridOptions() {
		return {
			rows: this.config?.grid_options?.rows ?? 3,
			columns: this.config?.grid_options?.columns ?? 12,
			min_columns: 6,
			max_columns: 48,
			min_rows: 3,
			max_rows: 6
		};
	}
	getDefaultRows() {
		return 3;
	}
	render() {
		if (!this.hass || !this.config) return T``;
		if (this.setCardGridRows(), !ci(this.hass, this.config.entity)) return T`<div class="card-content">Entity not found: ${this.config.entity}</div>`;
		if (this._hourlyForecast.length === 0) return T`<div class="card-content">Loading...</div>`;
		let e = this.config.forecast_hours ?? 12;
		return T`
      <div class="card-content">
        <precipitation-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_precipitation=${!0}
          ._t=${R}
        ></precipitation-chart>
      </div>
    `;
	}
};
//#endregion
//#region src/cards/hourly-charts/precipitation-card-editor.ts
ta = N([k(Ui)], ta), I({ loader: (e) => H[e] });
var na = class extends O {
	hass;
	_config;
	setConfig(e) {
		let t = { ...e };
		t.entity === "" && delete t.entity, this._config = t, this.requestUpdate();
	}
	static get styles() {
		return s`
      .card-config {
        padding: 16px;
      }
      .header {
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--card-divider-color);
      }
      .header-title {
        font-size: 20px;
        font-weight: bold;
        color: var(--primary-text-color, #dc143c);
      }
      ha-form {
        display: block;
      }
    `;
	}
	render() {
		if (!this.hass) return T`<div>Loading...</div>`;
		L((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			forecast_hours: this._config?.forecast_hours ?? 12
		};
		return T`
      <div class="card-config">
        <div class="header">
          <div class="header-title">🌧️ SwissWeather Precipitation Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Yi}
          .computeLabel=${(e) => ({
			entity: R("config.entity"),
			forecast_hours: R("config.forecast_hours") ?? "Forecast hours"
		})[e.name] ?? e.name}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
	}
	_valueChanged(e) {
		this._config ||= {
			type: `custom:${Ui}`,
			entity: ""
		};
		let t = {
			...this._config,
			...e.detail.value
		};
		$t(this, "config-changed", { config: t });
	}
};
//#endregion
//#region src/cards/hourly-charts/sunshine-card.ts
N([A({ attribute: !1 }), M("design:type", Object)], na.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], na.prototype, "_config", void 0), na = N([k(Wi)], na), I({ loader: (e) => H[e] });
var ra = class extends Qi {
	static get styles() {
		return s`
      :host {
        display: block;
        height: 100%;
        box-sizing: border-box;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.1));
        font-family: var(
          --primary-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          sans-serif
        );
        color: var(--primary-text-color, #fff);
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        --chart-inner-border: none;
        --chart-padding: 8px 8px 4px;
        --chart-margin-top: 0;
        --chart-margin-bottom: 0;
      }
      .card-content {
        padding: 0;
        height: 100%;
        display: flex;
      }

      sunshine-chart {
        display: block;
        flex: 1;
        min-height: 0;
      }
    `;
	}
	setConfig(e) {
		if (!e.entity) throw Error("You need to define an entity");
		this.setBaseConfig(e);
	}
	static getStubConfig() {
		return {
			type: `custom:${Gi}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(Ki);
	}
	static getConfigSchema() {
		return Zi;
	}
	getCardSize() {
		return this.config?.grid_options?.rows ?? 3;
	}
	getGridOptions() {
		return {
			rows: this.config?.grid_options?.rows ?? 3,
			columns: this.config?.grid_options?.columns ?? 12,
			min_columns: 6,
			max_columns: 48,
			min_rows: 3,
			max_rows: 6
		};
	}
	render() {
		if (!this.hass || !this.config) return T``;
		this.setCardGridRows();
		let e = ci(this.hass, this.config.entity);
		if (!e) return T`<div class="card-content">Entity not found: ${this.config.entity}</div>`;
		if (this._hourlyForecast.length === 0) return T`<div class="card-content">Loading...</div>`;
		let t = this.config.forecast_hours ?? 12, n = this.config.sun_entity ? ci(this.hass, this.config.sun_entity) : null;
		return T`
      <div class="card-content">
        <sunshine-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${t}
          .show_sunshine=${!0}
          .weatherEntity=${e}
          .sun_entity=${n}
          ._t=${R}
        ></sunshine-chart>
      </div>
    `;
	}
};
//#endregion
//#region src/cards/hourly-charts/sunshine-card-editor.ts
ra = N([k(Gi)], ra), I({ loader: (e) => H[e] });
var ia = class extends O {
	hass;
	_config;
	setConfig(e) {
		let t = { ...e };
		t.entity === "" && delete t.entity, t.sun_entity === "" && delete t.sun_entity, t.sunshine_entity === "" && delete t.sunshine_entity, this._config = t, this.requestUpdate();
	}
	static get styles() {
		return s`
      .card-config {
        padding: 16px;
      }
      .header {
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--card-divider-color);
      }
      .header-title {
        font-size: 20px;
        font-weight: bold;
        color: var(--primary-text-color, #dc143c);
      }
      ha-form {
        display: block;
      }
    `;
	}
	render() {
		if (!this.hass) return T`<div>Loading...</div>`;
		L((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			forecast_hours: this._config?.forecast_hours ?? 12,
			sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0,
			sunshine_entity: typeof this._config?.sunshine_entity == "string" ? this._config.sunshine_entity : void 0
		};
		return T`
      <div class="card-config">
        <div class="header">
          <div class="header-title">☀️ SwissWeather Sunshine Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Zi}
          .computeLabel=${(e) => ({
			entity: R("config.entity"),
			forecast_hours: R("config.forecast_hours") ?? "Forecast hours",
			sun_entity: R("config.sun_entity") ?? "Sun entity (sunrise/sunset markers)",
			sunshine_entity: R("config.sunshine_entity") ?? "Sunshine duration sensor (optional)"
		})[e.name] ?? e.name}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
	}
	_valueChanged(e) {
		this._config ||= {
			type: `custom:${Gi}`,
			entity: ""
		};
		let t = {
			...this._config,
			...e.detail.value
		};
		$t(this, "config-changed", { config: t });
	}
};
//#endregion
//#region src/cards/hourly-charts/wind-card.ts
N([A({ attribute: !1 }), M("design:type", Object)], ia.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], ia.prototype, "_config", void 0), ia = N([k(Ki)], ia), I({ loader: (e) => H[e] });
var aa = class extends Qi {
	static get styles() {
		return s`
      :host {
        display: block;
        height: 100%;
        box-sizing: border-box;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.1));
        font-family: var(
          --primary-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          sans-serif
        );
        color: var(--primary-text-color, #fff);
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        --chart-inner-border: none;
        --chart-padding: 8px 8px 4px;
        --chart-margin-top: 0;
        --chart-margin-bottom: 0;
      }
      .card-content {
        padding: 0;
        height: 100%;
        display: flex;
      }

      wind-chart {
        display: block;
        flex: 1;
        min-height: 0;
      }
    `;
	}
	setConfig(e) {
		if (!e.entity) throw Error("You need to define an entity");
		this.setBaseConfig(e);
	}
	static getStubConfig() {
		return {
			type: `custom:${qi}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(Ji);
	}
	static getConfigSchema() {
		return Xi;
	}
	getCardSize() {
		return this.config?.grid_options?.rows ?? 3;
	}
	getGridOptions() {
		return {
			rows: this.config?.grid_options?.rows ?? 3,
			columns: this.config?.grid_options?.columns ?? 12,
			min_columns: 6,
			max_columns: 48,
			min_rows: 3,
			max_rows: 6
		};
	}
	getDefaultRows() {
		return 3;
	}
	render() {
		if (this.setCardGridRows(), !this.hass || !this.config) return T``;
		let e = this.config.forecast_hours ?? 12;
		return this._hourlyForecast.length === 0 ? T`<div class="card-content">Loading...</div>` : T`
      <div class="card-content">
        <wind-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_wind=${!0}
          ._t=${R}
        ></wind-chart>
      </div>
    `;
	}
};
//#endregion
//#region src/cards/hourly-charts/wind-card-editor.ts
aa = N([k(qi)], aa), I({ loader: (e) => H[e] });
var oa = class extends O {
	hass;
	_config;
	setConfig(e) {
		let t = { ...e };
		t.entity === "" && delete t.entity, this._config = t, this.requestUpdate();
	}
	static get styles() {
		return s`
      .card-config {
        padding: 16px;
      }
      .header {
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--card-divider-color);
      }
      .header-title {
        font-size: 20px;
        font-weight: bold;
        color: var(--primary-text-color, #dc143c);
      }
      ha-form {
        display: block;
      }
    `;
	}
	render() {
		if (!this.hass) return T`<div>Loading...</div>`;
		L((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			forecast_hours: this._config?.forecast_hours ?? 12
		};
		return T`
      <div class="card-config">
        <div class="header">
          <div class="header-title">💨 SwissWeather Wind Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Xi}
          .computeLabel=${(e) => ({
			entity: R("config.entity"),
			forecast_hours: R("config.forecast_hours") ?? "Forecast hours"
		})[e.name] ?? e.name}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
	}
	_valueChanged(e) {
		this._config ||= {
			type: `custom:${qi}`,
			entity: ""
		};
		let t = {
			...this._config,
			...e.detail.value
		};
		$t(this, "config-changed", { config: t });
	}
};
N([A({ attribute: !1 }), M("design:type", Object)], oa.prototype, "hass", void 0), N([A({ attribute: !1 }), M("design:type", Object)], oa.prototype, "_config", void 0), oa = N([k(Ji)], oa), console.log("📦 SwissWeather Card TypeScript file imported"), setTimeout(() => {
	let e = customElements.get("swissweather-card"), t = customElements.get("swissweather-card-editor");
	console.log("🔍 SwissWeather Card registration status:", e ? "SUCCESS ✅" : "FAILED ❌"), console.log("🔍 SwissWeather Editor registration status:", t ? "SUCCESS ✅" : "FAILED ❌"), e ? (console.log("🔍 Element constructor:", e), console.log("🔍 Element prototype:", e.prototype)) : (console.error("❌ Custom element \"swissweather-card\" was not registered!"), console.log("🔍 Checking custom elements registry..."));
}, 100), console.log("📦 SwissWeather Card module loading started..."), console.log("📦 Browser support check:", {
	customElements: !!window.customElements,
	hasReflect: !!window.Reflect
}), ui({
	type: tn,
	name: "SwissWeather Diagram Card",
	description: "A comprehensive weather card for Home Assistant with Swiss weather warnings and forecasts"
}), ui({
	type: fi,
	name: "SwissWeather Daily Forecast Diagram Card",
	description: "A card to show daily weather forecast as diagram"
}), ui({
	type: Fi,
	name: "SwissWeather Animated Background Card (Experimental) Editor",
	description: "the SwissWeather Animated Background Card (Experimental)"
}), ui({
	type: Vi,
	name: "SwissWeather Temperature Chart Card",
	description: "Hourly temperature forecast chart as standalone card"
}), ui({
	type: Ui,
	name: "SwissWeather Precipitation Chart Card",
	description: "Hourly precipitation forecast chart as standalone card"
}), ui({
	type: Gi,
	name: "SwissWeather Sunshine Chart Card",
	description: "Hourly sunshine duration chart as standalone card"
}), ui({
	type: qi,
	name: "SwissWeather Wind Chart Card",
	description: "Hourly wind speed & direction chart as standalone card"
}), console.log(`%c 📦 SwissWeather Card module loading completed - version: ${e}`, "color: #ef5350; font-weight: 700;");
//#endregion
export { P as DailyForecastChart, Ke as DailyForecastDiagram, gi as ForecastDiagramCard, hi as ForecastDiagramCardEditor, Ue as ForecastTemperatureChart, ta as PrecipitationCard, na as PrecipitationCardEditor, We as PrecipitationChart, ra as SunshineCard, ia as SunshineCardEditor, F as SunshineChart, zi as SwissWeatherBGCard, Bi as SwissWeatherBGCardEditor, Q as SwissWeatherCard, rn as SwissWeatherCardEditor, $i as TemperatureCard, ea as TemperatureCardEditor, aa as WindCard, oa as WindCardEditor, Ge as WindChart };

//# sourceMappingURL=swissweather-card.js.map
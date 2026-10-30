//#region node_modules/lit/node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce(((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1]), e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, { is: l, defineProperty: u, getOwnPropertyDescriptor: d, getOwnPropertyNames: f, getOwnPropertySymbols: p, getPrototypeOf: m } = Object, h = globalThis, g = h.trustedTypes, ee = g ? g.emptyScript : "", te = h.reactiveElementPolyfillSupport, _ = (e, t) => e, ne = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ee : null;
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
}, re = (e, t) => !l(e, t), ie = {
	attribute: !0,
	type: String,
	converter: ne,
	reflect: !1,
	useDefault: !1,
	hasChanged: re
};
Symbol.metadata ??= Symbol("metadata"), h.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var ae = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = ie) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && u(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = d(this.prototype, e) ?? {
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
		return this.elementProperties.get(e) ?? ie;
	}
	static _$Ei() {
		if (this.hasOwnProperty(_("elementProperties"))) return;
		let e = m(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(_("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(_("properties"))) {
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
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
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
		return s(e, this.constructor.elementStyles), e;
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
			let i = (n.converter?.toAttribute === void 0 ? ne : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? ne : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n) {
		if (e !== void 0) {
			let r = this.constructor, i = this[e];
			if (n ??= r.getPropertyOptions(e), !((n.hasChanged ?? re)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(r._$Eu(e, n)))) return;
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
ae.elementStyles = [], ae.shadowRootOptions = { mode: "open" }, ae[_("elementProperties")] = /* @__PURE__ */ new Map(), ae[_("finalized")] = /* @__PURE__ */ new Map(), te?.({ ReactiveElement: ae }), (h.reactiveElementVersions ??= []).push("2.1.1");
//#endregion
//#region node_modules/lit/node_modules/lit-html/lit-html.js
var oe = globalThis, v = oe.trustedTypes, se = v ? v.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, ce = "$lit$", le = `lit$${Math.random().toFixed(9).slice(2)}$`, ue = "?" + le, de = `<${ue}>`, y = document, fe = () => y.createComment(""), pe = (e) => e === null || typeof e != "object" && typeof e != "function", me = Array.isArray, he = (e) => me(e) || typeof e?.[Symbol.iterator] == "function", ge = "[ 	\n\f\r]", b = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _e = /-->/g, ve = />/g, ye = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), be = /'/g, xe = /"/g, Se = /^(?:script|style|textarea|title)$/i, Ce = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), x = Ce(1), S = Ce(2), we = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Te = /* @__PURE__ */ new WeakMap(), Ee = y.createTreeWalker(y, 129);
function De(e, t) {
	if (!me(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return se === void 0 ? t : se.createHTML(t);
}
var Oe = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = b;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === b ? c[1] === "!--" ? o = _e : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = ye) : (Se.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = ye) : o = ve : o === ye ? c[0] === ">" ? (o = i ?? b, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? ye : c[3] === "\"" ? xe : be) : o === xe || o === be ? o = ye : o === _e || o === ve ? o = b : (o = ye, i = void 0);
		let d = o === ye && e[t + 1].startsWith("/>") ? " " : "";
		a += o === b ? n + de : l >= 0 ? (r.push(s), n.slice(0, l) + ce + n.slice(l) + le + d) : n + le + (l === -2 ? t : d);
	}
	return [De(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, ke = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Oe(t, n);
		if (this.el = e.createElement(l, r), Ee.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = Ee.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(ce)) {
					let t = u[o++], n = i.getAttribute(e).split(le), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Ne : r[1] === "?" ? Pe : r[1] === "@" ? Fe : Me
					}), i.removeAttribute(e);
				} else e.startsWith(le) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Se.test(i.tagName)) {
					let e = i.textContent.split(le), t = e.length - 1;
					if (t > 0) {
						i.textContent = v ? v.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], fe()), Ee.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], fe());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === ue) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(le, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += le.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = y.createElement("template");
		return n.innerHTML = e, n;
	}
};
function w(e, t, n = e, r) {
	if (t === we) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = pe(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = w(e, i._$AS(e, t.values), i, r)), t;
}
var Ae = class {
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
		Ee.currentNode = r;
		let i = Ee.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new je(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Ie(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = Ee.nextNode(), a++);
		}
		return Ee.currentNode = y, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, je = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = w(this, e, t), pe(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== we && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? he(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== C && pe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(y.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ke.createElement(De(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Ae(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Te.get(e.strings);
		return t === void 0 && Te.set(e.strings, t = new ke(e)), t;
	}
	k(t) {
		me(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(fe()), this.O(fe()), this, this.options)) : r = n[i], r._$AI(a), i++;
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
}, Me = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = C;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = w(this, e, t, 0), a = !pe(e) || e !== this._$AH && e !== we, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = w(this, r[n + o], t, o), s === we && (s = this._$AH[o]), a ||= !pe(s) || s !== this._$AH[o], s === C ? e = C : e !== C && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Ne = class extends Me {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === C ? void 0 : e;
	}
}, Pe = class extends Me {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== C);
	}
}, Fe = class extends Me {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = w(this, e, t, 0) ?? C) === we) return;
		let n = this._$AH, r = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== C && (n === C || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Ie = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		w(this, e);
	}
}, Le = oe.litHtmlPolyfillSupport;
Le?.(ke, je), (oe.litHtmlVersions ??= []).push("3.3.1");
var Re = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new je(t.insertBefore(fe(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, ze = globalThis, T = class extends ae {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Re(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return we;
	}
};
T._$litElement$ = !0, T.finalized = !0, ze.litElementHydrateSupport?.({ LitElement: T });
var Be = ze.litElementPolyfillSupport;
Be?.({ LitElement: T }), (ze.litElementVersions ??= []).push("4.2.1");
//#endregion
//#region node_modules/lit/node_modules/@lit/reactive-element/decorators/custom-element.js
var E = (e) => (t, n) => {
	n === void 0 ? customElements.define(e, t) : n.addInitializer((() => {
		customElements.define(e, t);
	}));
}, Ve = {
	attribute: !0,
	type: String,
	converter: ne,
	reflect: !1,
	hasChanged: re
}, He = (e = Ve, t, n) => {
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
function D(e) {
	return (t, n) => typeof n == "object" ? He(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
//#endregion
//#region node_modules/lit/node_modules/@lit/reactive-element/decorators/state.js
function O(e) {
	return D({
		...e,
		state: !0,
		attribute: !1
	});
}
//#endregion
//#region \0@oxc-project+runtime@0.154.0/helpers/esm/decorateMetadata.js
function k(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
//#endregion
//#region \0@oxc-project+runtime@0.154.0/helpers/esm/decorate.js
function A(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region src/charts/daily-forecast-chart.ts
var j = class extends T {
	constructor(...e) {
		super(...e), this.forecast = [], this.forecastLoading = !1, this.show_forecast = !0, this.config = {}, this.compact = !1, this.startTomorrow = !1, this.maxDays = 7, this.alignRight = !1;
	}
	static {
		this.styles = o`
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
	}
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
		return this.config.show_forecast === !1 ? x`` : this.forecastLoading && this.forecast.length === 0 ? x`
            <div class="${n}">
              <div class="section-title">
                <ha-icon icon="mdi:calendar"></ha-icon>
                ${this._t("hourly_charts.7d_forecast")}
                <small
                  style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >${this._t("hourly_charts.loading")}</small
                >
              </div>
              <div
                style="text-align: center; padding: 20px; color: var(--secondary-text-color, #666); font-style: italic;"
              >
                ⏳ ${this._t("hourly_charts.loading_forecast")}<br />
                <small>Service: weather.get_forecasts</small>
              </div>
            </div>
          ` : t.length > 0 ? x`
              <div class="wrapper ${this.alignRight ? "align-right" : ""}">
                <div class="${n}">
                  ${this.compact ? x`` : x`
                          <div class="section-title">
                            <ha-icon icon="mdi:calendar"></ha-icon>
                            ${t.length === 7 ? this._t("hourly_charts.7d_forecast") : this._t("hourly_charts.xd_forecast", { days: t.length })}
                            <small
                              style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                            >
                              (${t.length} ${this._t("hourly_charts.days_available")})
                            </small>
                          </div>
                        `}
                  <div class="${r}">
                    ${t.map((e) => x`
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
            ` : x`
              <div class="${n}">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${this._t("hourly_charts.7d_forecast")}
                  <small style="font-size: 12px; color: #666; margin-left: 10px;">
                    (0 ${this._t("hourly_charts.days_available")})
                  </small>
                </div>
                <div style="text-align: center; padding: 20px; color: #666; font-style: italic;">
                  ⚠️ ${this._t("hourly_charts.no_forecast_data")}<br />
                  <small>Entity: ${this.config.entity}</small><br />
                  <small>${this._t("hourly_charts.check_devtools")}</small><br />
                  <small style="color: #999;">${this._t("hourly_charts.try_other_entity")}</small>
                </div>
              </div>
            `;
	}
};
A([D({ type: Array }), k("design:type", Array)], j.prototype, "forecast", void 0), A([D({ type: Boolean }), k("design:type", Object)], j.prototype, "forecastLoading", void 0), A([D({ type: Boolean }), k("design:type", Object)], j.prototype, "show_forecast", void 0), A([D({ type: Object }), k("design:type", Object)], j.prototype, "config", void 0), A([D({ type: Function }), k("design:type", Function)], j.prototype, "_t", void 0), A([D({ type: Function }), k("design:type", Function)], j.prototype, "getWeatherIcon", void 0), A([D({ type: Function }), k("design:type", Function)], j.prototype, "formatDate", void 0), A([D({ type: Boolean }), k("design:type", Boolean)], j.prototype, "compact", void 0), A([D({ type: Boolean }), k("design:type", Boolean)], j.prototype, "startTomorrow", void 0), A([D({ type: Number }), k("design:type", Number)], j.prototype, "maxDays", void 0), A([D({ type: Boolean }), k("design:type", Boolean)], j.prototype, "alignRight", void 0), j = A([E("daily-forecast-chart")], j);
//#endregion
//#region src/charts/element-size-controller.ts
var Ue = class {
	constructor(e, t) {
		this._width = 0, this._height = 0, this.host = e, this.getElement = t, e.addController(this);
	}
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}
	hostConnected() {
		this.host.requestUpdate();
	}
	hostUpdated() {
		let e = this.getElement();
		e ? e !== this._observedElement && (this._observer?.disconnect(), this._observer = new ResizeObserver((e) => {
			let { width: t, height: n } = e[0].contentRect, r = Math.floor(t), i = Math.floor(n);
			(r > 0 && r !== this._width || i > 0 && i !== this._height) && (r > 0 && (this._width = r), i > 0 && (this._height = i), this.host.requestUpdate());
		}), this._observedElement = e, this._observer.observe(e)) : (this._observer?.disconnect(), this._observedElement = void 0);
	}
	hostDisconnected() {
		this._observer?.disconnect(), this._observer = void 0, this._observedElement = void 0;
	}
}, We = o`
  .chart-tooltip-target:focus-visible {
    outline: none;
    stroke: var(--primary-text-color, #222);
    stroke-width: 1;
    stroke-dasharray: 3 2;
  }

  #chart-tooltip {
    position: absolute;
    z-index: 2;
    top: 4px;
    left: 4px;
    right: 4px;
    width: fit-content;
    max-width: calc(100% - 24px);
    padding: 6px 8px;
    border-radius: 6px;
    background: var(--primary-background-color, #fff);
    color: var(--primary-text-color, #222);
    box-shadow: 0 2px 8px rgb(0 0 0 / 28%);
    font-size: 12px;
    pointer-events: auto;
  }
`, Ge = class {
	constructor(e) {
		this._focusDismissed = !1, this._documentKeydown = (e) => {
			this._label && "key" in e && e.key === "Escape" && (e.preventDefault(), this.dismiss());
		}, this.dismiss = () => {
			this._focusDismissed = !0, this._label !== void 0 && (this._label = void 0, this._removeEscapeListener(), this.host.requestUpdate());
		}, this.show = (e) => {
			let t = e.target, n = t && "getAttribute" in t && typeof t.getAttribute == "function" ? t.getAttribute("data-tooltip") : void 0;
			typeof n == "string" ? (this._label = n, this.host.requestUpdate()) : this.pointerLeave();
		}, this.focus = (e) => {
			this.show(e), this._focusedLabel = this._label, this._focusDismissed = !1;
		}, this.blur = () => {
			this._focusedLabel = void 0, this.dismiss();
		}, this.pointerLeave = () => {
			this._label = this._focusDismissed ? void 0 : this._focusedLabel, this.host.requestUpdate();
		}, this.activate = (e) => {
			this._focusDismissed = !1, this.show(e);
		}, this.preserveTooltip = (e) => {
			e.stopPropagation();
		}, this.preserveFocus = (e) => {
			e.preventDefault(), e.stopPropagation();
		}, this.keydown = (e) => {
			e.key === "Escape" ? (e.preventDefault(), this.dismiss()) : (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.activate(e));
		}, this.host = e, e.addController(this);
	}
	hostDisconnected() {
		this.blur(), this._removeEscapeListener();
	}
	hostUpdated() {
		let e = this._label ? this.host.ownerDocument : void 0;
		e !== this._escapeDocument && (this._removeEscapeListener(), this._escapeDocument = e, e?.addEventListener("keydown", this._documentKeydown, !0));
	}
	_removeEscapeListener() {
		this._escapeDocument?.removeEventListener("keydown", this._documentKeydown, !0), this._escapeDocument = void 0;
	}
	target(e, t, n, r, i) {
		return S`<rect
      class="chart-tooltip-target"
      x=${e} y=${t} width=${n} height=${r}
      fill="transparent" pointer-events="all"
      tabindex="0" role="button" aria-label=${i}
      aria-describedby="chart-tooltip" data-tooltip=${i}
    />`;
	}
	render(e, t = "chart-svg-area") {
		return x`<div
      class=${t}
      @pointerover=${this.show}
      @pointerleave=${this.pointerLeave}
      @click=${this.activate}
      @focusin=${this.focus}
      @focusout=${this.blur}
      @keydown=${this.keydown}
    >
      ${e}
      <div
        id="chart-tooltip"
        role="tooltip"
        ?hidden=${!this._label}
        @pointerdown=${this.preserveFocus}
        @pointerover=${this.preserveTooltip}
        @click=${this.preserveTooltip}
      >
        ${this._label}
      </div>
    </div>`;
	}
}, Ke = o`
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
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    flex: 1;
    min-height: var(--chart-svg-min-height, 100px);
  }

  ${We}
`, qe = class extends T {
	constructor(...e) {
		super(...e), this.hourlyForecast = [], this.forecastHours = 12, this.show_temperature = !0, this._chartSize = new Ue(this, () => this.renderRoot.querySelector(".chart-svg-area")), this._tooltip = new Ge(this);
	}
	static {
		this.styles = Ke;
	}
	render() {
		if (this.show_temperature === !1) return x``;
		let e = this.hourlyForecast.slice(0, this.forecastHours), t = e.map((e) => typeof e.temperature == "number" && !isNaN(e.temperature) ? e.temperature : null), n = t.filter((e) => e !== null);
		return x`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          ${this._t("hourly_charts.temperature_hours", { hours: this.forecastHours })}
          <span style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
            >°C</span
          >
        </div>
        ${this._tooltip.render((() => {
			if (n.length < 2) return x``;
			let r = t.length, i = this._chartSize.width > 0 ? this._chartSize.width : 600, a = this._chartSize.height > 0 ? this._chartSize.height : 100, o = i - 28 - 6, s = a - 8 - 18, c = Math.floor(Math.min(...n) / 5) * 5, l = Math.ceil(Math.max(...n) / 5) * 5;
			c === l && (c -= 5, l += 5);
			let u = l - c, d = o / (r - 1), f = (e) => 28 + e * d, p = (e) => 8 + s - (e - c) / u * s, m = [];
			for (let e = c; e <= l; e += 5) {
				let t = p(e), n = e % 10 == 0;
				m.push(S`
                <line x1="${28}" y1="${t}" x2="${i - 6}" y2="${t}"
                  stroke="#888" stroke-width="${n ? 1 : .6}"
                  stroke-dasharray="${n ? "4,3" : "2,3"}" opacity="0.6"/>
                <text x="${25}" y="${t}" text-anchor="end" dominant-baseline="middle"
                  font-size="8" fill="#888" opacity="0.8">${e}°</text>
              `);
			}
			let h = [];
			for (let e = 0; e < r; e++) {
				let t = f(e), n = this.hourlyForecast[e], i = n?.datetime ? new Date(n.datetime) : null;
				(i && i.getHours() % 3 == 0 || r <= 8) && h.push(S`
                  <line x1="${t}" y1="${8}" x2="${t}" y2="${8 + s}"
                    stroke="#888" stroke-width="0.4" stroke-dasharray="2,3" opacity="0.3"/>
                  <text x="${t}" y="${a - 2}" text-anchor="middle"
                    font-size="8" fill="#888" opacity="0.7">
                    ${i ? i.getHours() + "h" : ""}
                  </text>
                `);
			}
			return S`<svg width="100%" height="100%" viewBox="0 0 ${i} ${a}" style="display:block;">
              ${m}
              ${h}
              <polyline points="${t.map((e, t) => e === null ? "" : `${f(t)},${p(e)}`).filter(Boolean).join(" ")}" fill="none" stroke="#db4a34" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round"/>
              ${t.map((t, n) => t === null ? null : this._tooltip.target(Math.max(28, f(n) - d / 2), 8, n === 0 || n === r - 1 ? d / 2 : d, s, `${new Date(e[n].datetime).toLocaleString()}: ${t} °C`))}
            </svg>`;
		})())}
      </div>
    `;
	}
};
A([D({ type: Array }), k("design:type", Array)], qe.prototype, "hourlyForecast", void 0), A([D({ type: Number }), k("design:type", Object)], qe.prototype, "forecastHours", void 0), A([D({ type: Boolean }), k("design:type", Object)], qe.prototype, "show_temperature", void 0), A([D({ type: Function }), k("design:type", Function)], qe.prototype, "_t", void 0), qe = A([E("forecast-temperature-chart")], qe);
//#endregion
//#region src/charts/precipitation-values.ts
function Je(e) {
	return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function Ye(e) {
	let t = Je(e.precipitation) ?? Je(e.rain), n = Je(e.pop), r = Je(e.precipitation_probability) ?? Je(e.probability_of_precipitation) ?? (n === void 0 ? void 0 : n <= 1 ? n * 100 : n);
	return {
		amount: t,
		probability: r === void 0 ? void 0 : Math.max(0, Math.min(100, r))
	};
}
//#endregion
//#region src/charts/precipitation-chart.ts
var Xe = class extends T {
	constructor(...e) {
		super(...e), this.hourlyForecast = [], this.forecastHours = 12, this.show_precipitation = !0, this._chartSize = new Ue(this, () => this.renderRoot.querySelector(".chart-svg-area")), this._tooltip = new Ge(this);
	}
	static {
		this.styles = Ke;
	}
	render() {
		if (this.show_precipitation === !1) return x``;
		let e = this.hourlyForecast.slice(0, this.forecastHours), t = e.map(Ye), n = t.some((e) => e.amount !== void 0 || e.probability !== void 0);
		return this.hourlyForecast.length === 0 || !n ? x`
        <div class="chart">
          <div class="section-title">
            <ha-icon icon="mdi:weather-pouring"></ha-icon>
            ${this._t("hourly_charts.precipitation_hours", { hours: this.forecastHours })}
          </div>
          <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
            ${this._t("hourly_charts.no_precipitation_data")}
          </div>
        </div>
      ` : x`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:weather-pouring"></ha-icon>
          ${this._t("hourly_charts.precipitation_hours", { hours: this.forecastHours })}
          <span style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
            >mm</span
          >
        </div>
        ${this._tooltip.render((() => {
			let n = e.length;
			if (n === 0) return x``;
			let r = this._chartSize.width > 0 ? this._chartSize.width : 600, i = this._chartSize.height > 0 ? this._chartSize.height : 100, a = r - 28 - 6, o = i - 8 - 18, s = t.map((e) => e.amount ?? 0), c = Math.max(5, Math.ceil(Math.max(...s))), l = c, u = (e) => 8 + o - e / l * o, d = a / n, f = (e) => 28 + e * d + d / 2, p = [
				1,
				2,
				3,
				5,
				8,
				10,
				15,
				20
			].filter((e) => e <= c);
			p.includes(c) || p.push(c);
			let m = [];
			for (let e of p) {
				let t = u(e), n = e % 5 == 0;
				m.push(S`
                <line x1="${28}" y1="${t}" x2="${r - 6}" y2="${t}"
                  stroke="#888" stroke-width="${n ? 1 : .6}"
                  stroke-dasharray="${n ? "4,3" : "2,3"}" opacity="0.6"/>
                <text x="${25}" y="${t}" text-anchor="end" dominant-baseline="middle"
                  font-size="8" fill="#888" opacity="0.8">${e}</text>
              `);
			}
			m.push(S`
              <line x1="${28}" y1="${u(0)}" x2="${r - 6}" y2="${u(0)}"
                stroke="#888" stroke-width="1" opacity="0.5"/>
              <text x="${25}" y="${u(0)}" text-anchor="end" dominant-baseline="middle"
                font-size="8" fill="#888" opacity="0.8">0</text>
            `);
			let h = [];
			for (let t = 0; t < n; t++) {
				let r = f(t), a = e[t]?.datetime ? new Date(e[t].datetime) : null;
				(a ? a.getHours() % 3 == 0 : n <= 8) && h.push(S`
                  <line x1="${r}" y1="${8}" x2="${r}" y2="${8 + o}"
                    stroke="#888" stroke-width="0.4" stroke-dasharray="2,3" opacity="0.3"/>
                  <text x="${r}" y="${i - 2}" text-anchor="middle"
                    font-size="8" fill="#888" opacity="0.7">
                    ${a ? a.getHours() + "h" : ""}
                  </text>
                `);
			}
			let g = [], ee = [], te = [], _ = Math.max(2, d * .55);
			for (let r = 0; r < n; r++) {
				let n = e[r], i = f(r) - _ / 2, a = t[r], s = a.probability ?? 0, c = a.amount ?? 0, p = s / 100 * 5 / l * o;
				if (s > 0 && g.push(S`
                  <rect x="${i}" y="${u(0) - p}" width="${_}" height="${p}"
                    fill="#87898e" opacity="0.35" rx="1.5"/>
                `), c > 0) {
					let e = c / l * o;
					ee.push(S`
                  <rect x="${i}" y="${u(0) - e}" width="${_}" height="${e}"
                    fill="url(#precip-grad)" opacity="1" rx="1.5"/>
                `);
				}
				let m = [];
				a.amount !== void 0 && m.push(`${a.amount} mm`), a.probability !== void 0 && m.push(`${a.probability}%`), m.length > 0 && te.push(this._tooltip.target(28 + r * d, 8, d, o, `${new Date(n.datetime).toLocaleString()}: ${m.join(" · ")}`));
			}
			return S`<svg width="100%" height="100%" viewBox="0 0 ${r} ${i}" style="display:block;">
              <defs>
                <linearGradient id="precip-grad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stop-color="#3498db"/>
                  <stop offset="100%" stop-color="#85c5e5"/>
                </linearGradient>
              </defs>
              ${m}
              ${h}
              ${g}
              ${ee}
              ${te}
            </svg>`;
		})())}
      </div>
    `;
	}
};
A([D({ type: Array }), k("design:type", Array)], Xe.prototype, "hourlyForecast", void 0), A([D({ type: Number }), k("design:type", Object)], Xe.prototype, "forecastHours", void 0), A([D({ type: Boolean }), k("design:type", Object)], Xe.prototype, "show_precipitation", void 0), A([D({ type: Function }), k("design:type", Function)], Xe.prototype, "_t", void 0), Xe = A([E("precipitation-chart")], Xe);
//#endregion
//#region src/charts/sunshine-chart.ts
var Ze = class extends T {
	constructor(...e) {
		super(...e), this.hourlyForecast = [], this.forecastHours = 12, this.show_sunshine = !0;
	}
	static {
		this.styles = o`
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
	}
	render() {
		return this.show_sunshine === !1 ? x`` : this.hourlyForecast.length > 0 && this.hourlyForecast.slice(0, this.forecastHours).some((e) => {
			let t = e;
			return typeof t.sunshine == "number" && !isNaN(t.sunshine) || typeof t.sunshine_duration == "number" && !isNaN(t.sunshine_duration);
		}) ? x`
            <div class="chart-sunshine" style="position:relative;">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${this._t("hourly_charts.sunshine_hours", { hours: this.forecastHours })}
                <span
                  style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
                  >min</span
                >
              </div>
              <div class="chart-bars" style="position:relative;">
                ${(() => {
			let e = this.weatherEntity?.attributes?.sunrise ? new Date(this.weatherEntity.attributes.sunrise) : this.sun_entity?.attributes?.next_rising ? new Date((this.sun_entity?.attributes).next_rising) : null, t = this.weatherEntity?.attributes?.sunset ? new Date(this.weatherEntity.attributes.sunset) : this.sun_entity?.attributes?.next_setting ? new Date((this.sun_entity?.attributes).next_setting) : null, n = this.hourlyForecast[0]?.datetime ? new Date(this.hourlyForecast[0].datetime) : null, r = -1, i = -1;
			return e && n && (r = Math.round((e.getTime() - n.getTime()) / 36e5)), t && n && (i = Math.round((t.getTime() - n.getTime()) / 36e5)), x`
                    ${r >= 0 && r < this.forecastHours ? x`
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
                    ${i >= 0 && i < this.forecastHours ? x`
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
			return x`
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
			return x`<div style="flex:1; text-align:center; overflow:hidden;">
                    ${t && t.getHours() % 3 == 0 && t ? t.getHours() + "h" : ""}
                  </div>`;
		})}
              </div>
            </div>
          ` : x`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${this._t("hourly_charts.sunshine_hours", { hours: this.forecastHours })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${this._t("hourly_charts.no_sunshine_data")}
              </div>
            </div>
          `;
	}
};
A([D({ type: Array }), k("design:type", Array)], Ze.prototype, "hourlyForecast", void 0), A([D({ type: Number }), k("design:type", Object)], Ze.prototype, "forecastHours", void 0), A([D({ type: Boolean }), k("design:type", Object)], Ze.prototype, "show_sunshine", void 0), A([D({ type: Object }), k("design:type", Object)], Ze.prototype, "weatherEntity", void 0), A([D({ type: Object }), k("design:type", Object)], Ze.prototype, "sun_entity", void 0), A([D({ type: Function }), k("design:type", Function)], Ze.prototype, "_t", void 0), Ze = A([E("sunshine-chart")], Ze);
//#endregion
//#region src/charts/wind-chart.ts
var Qe = class extends T {
	constructor(...e) {
		super(...e), this.hourlyForecast = [], this.forecastHours = 12, this.show_wind = !0, this._chartSize = new Ue(this, () => this.renderRoot.querySelector(".chart-svg-area")), this._tooltip = new Ge(this);
	}
	static {
		this.styles = [Ke, o`
      :host {
        --chart-svg-min-height: 122px;
      }
    `];
	}
	render() {
		if (this.show_wind === !1) return x``;
		let e = this.hourlyForecast.slice(0, this.forecastHours), t = e.some((e) => typeof e.wind_speed == "number" && !isNaN(e.wind_speed));
		return e.length === 0 || !t ? x`` : x`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:weather-windy"></ha-icon>
          ${this._t("hourly_charts.wind_hours", { hours: this.forecastHours })}
          <span style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
            >km/h</span
          >
        </div>
        ${this._tooltip.render((() => {
			let t = e.length;
			if (t < 2) return x``;
			let n = this._chartSize.width > 0 ? this._chartSize.width : 600, r = this._chartSize.height > 0 ? this._chartSize.height : 122, i = n - 28 - 6, a = r - 8 - 40, o = e.map((e) => typeof e.wind_speed == "number" && !isNaN(e.wind_speed) ? e.wind_speed : null), s = o.filter((e) => e !== null), c = Math.max(10, Math.ceil(Math.max(...s) / 5) * 5), l = c, u = (e) => 8 + a - e / l * a, d = i / (t - 1), f = (e) => 28 + e * d, p = [];
			for (let e = 0; e <= c; e += 5) {
				let t = u(e), r = e % 10 == 0;
				p.push(S`
                <line x1="${28}" y1="${t}" x2="${n - 6}" y2="${t}"
                  stroke="#888" stroke-width="${r ? 1 : .6}"
                  stroke-dasharray="${r ? "4,3" : "2,3"}" opacity="0.6"/>
                <text x="${25}" y="${t}" text-anchor="end" dominant-baseline="middle"
                  font-size="8" fill="#888" opacity="0.8">${e}</text>
              `);
			}
			let m = [];
			for (let n = 0; n < t; n++) {
				let i = f(n), o = e[n]?.datetime ? new Date(e[n].datetime) : null;
				(o ? o.getHours() % 3 == 0 : t <= 8) && m.push(S`
                  <line x1="${i}" y1="${8}" x2="${i}" y2="${8 + a}"
                    stroke="#888" stroke-width="0.4" stroke-dasharray="2,3" opacity="0.3"/>
                  <text x="${i}" y="${r - 22 - 2}" text-anchor="middle"
                    font-size="8" fill="#888" opacity="0.7">
                    ${o ? o.getHours() + "h" : ""}
                  </text>
                `);
			}
			let h = o.map((e, t) => e === null ? "" : `${f(t)},${u(e)}`).filter(Boolean).join(" "), g = o.map((n, r) => n === null ? null : this._tooltip.target(Math.max(28, f(r) - d / 2), 8, r === 0 || r === t - 1 ? d / 2 : d, a, `${new Date(e[r].datetime).toLocaleString()}: ${n} km/h${typeof e[r].wind_bearing == "number" ? ` · ${e[r].wind_bearing}°` : ""}`)), ee = r - 11 + 2;
			return S`<svg width="100%" height="100%" viewBox="0 0 ${n} ${r}" style="display:block;">
              ${p}
              ${m}
              <polyline points="${h}" fill="none" stroke="#44739e" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round"/>
              ${g}
              ${e.map((e, t) => {
				let n = typeof e.wind_bearing == "number" && !isNaN(e.wind_bearing) ? e.wind_bearing : null;
				if (n === null) return null;
				let r = f(t), i = ee;
				return S`
                <circle cx="${r}" cy="${i}" r="${7}" fill="none" stroke="#44739e" stroke-width="0.8" opacity="0.5"/>
                <g transform="translate(${r} ${i}) rotate(${n})" fill="#44739e">
                  <path d="M 0 -6 L 3.5 0 L -3.5 0 Z"/>
                  <line x1="0" y1="-1" x2="0" y2="4"
                    stroke="#44739e" stroke-width="1.5" stroke-linecap="round"/>
                </g>
              `;
			})}
            </svg>`;
		})())}
      </div>
    `;
	}
};
A([D({ type: Array }), k("design:type", Array)], Qe.prototype, "hourlyForecast", void 0), A([D({ type: Number }), k("design:type", Object)], Qe.prototype, "forecastHours", void 0), A([D({ type: Boolean }), k("design:type", Object)], Qe.prototype, "show_wind", void 0), A([D({ type: Function }), k("design:type", Function)], Qe.prototype, "_t", void 0), Qe = A([E("wind-chart")], Qe);
//#endregion
//#region src/charts/forecast-date.ts
function $e(e) {
	let t = new Date(e);
	if (!Number.isNaN(t.getTime())) return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
}
function et(e, t) {
	let n = new Set(t);
	return e.filter((e) => {
		let t = $e(e.datetime);
		return t !== void 0 && n.has(t);
	});
}
//#endregion
//#region src/translations/index.ts
var tt = {
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
			show_forecast: "Wettervorhersage anzeigen",
			show_temperature: "Temperaturdiagramm anzeigen",
			show_precipitation: "Niederschlagsdiagramm anzeigen",
			show_sunshine: "Sonnenscheindauerdiagramm anzeigen",
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
			move_up: "Nach oben",
			move_down: "Nach unten",
			descr: {
				entity: "Die Wetter-Entity ist erforderlich und sollte von der Integration SwissWeather sein. Wenn eine andere Wetter Entity genutzt wird kann es passieren, das nicht alle Daten korrekt angezeigt werden.",
				location: "Zeigt diesen Namen als Standort an.",
				show_location: "Zeige den Standortnamen über dem aktuellen Wetter an",
				sun_entity: "Die Sonnen-Entity ist erforderlich, um Sonnenaufgangs- und Sonnenuntergangszeiten anzuzeigen.",
				wind_entity: "Die Wind-Entity wird benötigt, um die Windgeschwindigkeit anzuzeigen.",
				wind_direction_entity: "Die Windrichtungs-Entity wird benötigt, um die Windrichtung anzuzeigen.",
				sunshine_entity: "Die Sonnenscheindauer-Entity wird benötigt, um die Sonnenscheindauer anzuzeigen.",
				precipitation_entity: "Die Niederschlags-Entity wird benötigt, um die Niederschlagsprognose anzuzeigen.",
				show_forecast: "Blende den Wettervorhersage-Bereich ein oder aus. Die Vorhersage zeigt bis zu 7 Tage an, je nach dem was der Wetterdienst liefert.",
				show_temperature: "Zeige das Temperaturdiagramm an, mit den Vorhersage anhand der eingestellten Stunden",
				show_precipitation: "Zeige das Niederschlags an, mit den Vorhersage anhand der eingestellten Stunden",
				show_sunshine: "Zeige das Sonnenscheindauerdiagramm an, mit den Vorhersage anhand der eingestellten Stunden",
				show_wind: "Zeige das Winddiagramm an mit den Vorhersage anhand der eingestellten Stunden",
				enable_animate_weather_icons: "Zeige animierte Icons an. Wenn ausgeschaltet, werden statische Icons angezeigt.",
				compact_mode: "Im kompakten Modus werden weniger Details angezeigt für die Tagesvorhersage und den aktuellen Daten (z.B. Windrichtung)",
				forecast_hours: "Anzahl der Stunden für die Anzeige der stündlichen Vorhersage (Standard: 6, maximal 18)"
			}
		},
		warning: {
			config: {
				show_warnings: "Wetterwarnungen anzeigen",
				warning_entity: "Wetterwarnungen (Legacy)",
				primary_warning_entity: "Primäre Wetterwarnung",
				secondary_warning_entity: "Sekundäre Wetterwarnung",
				tertiary_warning_entity: "Tertiäre Wetterwarnung",
				descr: {
					show_warnings: "Zeige Wetterwarnungen an, wenn die Wetterwarnung Entity gesetzt ist und aktuelle Warnungen existieren.",
					warning_entity: "Legacy: Die Wetterwarnungen Entity wird von der ursprünglichen SwissWeather Integration angelegt (izacus/hass-swissweather). Wenn die neueren Ranked-Entities gesetzt sind, wird diese Entity ignoriert.",
					primary_warning_entity: "Primäre Wetterwarnung (*_primary_weather_warning) aus mastameista/hass-swissweather. Wenn gesetzt, wird das neue Ranked-Model aktiviert.",
					secondary_warning_entity: "Sekundäre Wetterwarnung (*_secondary_weather_warning) aus mastameista/hass-swissweather.",
					tertiary_warning_entity: "Tertiäre Wetterwarnung (*_tertiary_weather_warning) aus mastameista/hass-swissweather."
				}
			},
			weather_warning: "Wetterwarnung aktiv",
			weather_warnings: "{{count}} Wetterwarnungen aktiv",
			warnings: "Wetterwarnungen",
			warnings_none: "Keine aktiven Wetterwarnungen",
			warnings_additional: "+{{count}} weitere",
			valid_from: "Gültig ab",
			valid_to: "Gültig bis"
		},
		hourly_charts: {
			precipitation: "Niederschlag",
			precipitation_probability: "Niederschlagswahrscheinlichkeit",
			config: {
				entity: "Wetter Entity *",
				forecast_hours: "Prognose Stunden (Standard: 6)",
				sun_entity: "Sonnen Entity für Sonnenaufgang und Sonnenuntergang",
				sunshine_entity: "Sonnenscheindauer",
				descr: {
					entity: "Die Wetter-Entity ist erforderlich und sollte von der Integration SwissWeather sein.",
					forecast_hours: "Anzahl der Stunden für die Anzeige der stündlichen Vorhersage (Standard: 6, maximal 18)",
					sun_entity: "Die Sonnen-Entity wird für Sonnenaufgangs-/Untergangsmarkierungen im Diagramm benötigt.",
					sunshine_entity: "Die Sonnenscheindauer-Entity wird benötigt, um die Sonnenscheindauer anzuzeigen."
				}
			},
			forecast_hours: "Prognose (nächste {{hours}}h)",
			temperature_chart: "Temperatur (nächste 6h)",
			temperature_hours: "Temperatur (nächste {{hours}}h)",
			temperature_none: "Keine Temperaturdaten vorhanden",
			precipitation_hours: "Niederschlag (nächste {{hours}}h)",
			precipitation_none: "Keine Niederschlagsdaten vorhanden",
			no_precipitation_data: "Keine Niederschlagsdaten vorhanden",
			sunshine_chart: "Sonnenschein (nächste 6h)",
			sunshine_hours: "Sonnenschein (nächste {{hours}}h)",
			sunshine_none: "Keine Sonnenscheindaten vorhanden",
			no_sunshine_data: "Keine Sonnenscheindaten vorhanden",
			wind_hours: "Wind (nächste {{hours}}h)",
			wind_compass: "Richtung",
			loading: "Lädt...",
			loading_forecast: "Vorhersagedaten werden geladen...",
			check_devtools: "Prüfen Sie die Developer Tools → Services → weather.get_forecasts",
			try_other_entity: "Versuchen Sie eine andere Wetter-Entity",
			no_forecast_data: "Keine Vorhersagedaten verfügbar",
			no_forecast_data_hint: "Prüfen Sie die Developer Tools → Services → weather.get_forecasts",
			forecast_request_failed: "Vorhersage konnte nicht geladen werden. Details stehen in der Browser-Konsole.",
			retry_forecast: "Erneut versuchen",
			forecast_none: "Keine Forecast-Daten verfügbar",
			forecast_none_hint: "Prüfen Sie die Developer Tools → Services → weather.get_forecasts",
			forecast_loading: "Lädt...",
			forecast_days: "{{count}}-Tage-Prognose",
			forecast_days_7: "7-Tage-Prognose",
			"7d_forecast": "7-Tage-Prognose",
			xd_forecast: "Tages Prognose",
			days_available: "Verfügbare Tage",
			now: "Jetzt",
			hour: "{{h}}h"
		},
		bg_card: {
			config: {
				entity: "Wetter Entity *",
				sun_entity: "Sonnen Entity für Sonnenaufgang und Sonnenuntergang",
				forecast_mode: "Vorhersage-Modus",
				photo_mode: "Fotorealistischer Hintergrund (PoC)",
				show_day_temps: "Tages-Min/Max anzeigen",
				show_sun_times: "Sonnenauf-/-untergang anzeigen",
				temperature_font_size: "Temperatur Schriftgröße (px)",
				group_general: "Allgemeineinstellungen",
				group_display: "Anzeigeeinstellungen",
				descr: {
					entity: "Die Wetter-Entity ist erforderlich und sollte von der Integration SwissWeather sein.",
					sun_entity: "Die Sonnen-Entity ist erforderlich, um Sonnenaufgangs- und Sonnenuntergangszeiten anzuzeigen.",
					forecast_mode: "Wähle, ob in der BG-Card die Tages- oder Stunden-Vorhersage (oder keine) angezeigt wird.",
					show_day_temps: "Blende die Tages-Min/Max-Anzeige ein oder aus.",
					show_sun_times: "Blende die Anzeige von Sonnenaufgang/-untergang ein oder aus.",
					photo_mode: "Experimenteller fotorealistischer Hintergrund mit atmosphärischen Overlays (PoC).",
					temperature_font_size: "Schriftgröße der Temperaturanzeige in Pixel. Standard: 36"
				}
			},
			forecast_mode: {
				daily: "Täglich",
				hourly: "Stündlich",
				none: "Keine"
			},
			sunrise: "Sonnenaufgang",
			sunset: "Sonnenuntergang"
		},
		forecast_diagram: { config: {
			entity: "Wetter Entity *",
			sun_entity: "Sonnen Entity für Sonnenaufgang und Sonnenuntergang",
			group_general: "Allgemeineinstellungen",
			group_sensors: "Sensoren",
			descr: {
				entity: "Die Wetter-Entity ist erforderlich und sollte von der Integration SwissWeather sein.",
				sun_entity: "Die Sonnen-Entity ist erforderlich, um Sonnenaufgangs- und Sonnenuntergangszeiten anzuzeigen."
			}
		} },
		location: "Schweiz",
		wind: "Wind",
		direction: "Richtung",
		humidity: "Luftfeuchtigkeit",
		pressure: "Luftdruck",
		sunshine: "Sonnenschein",
		visibility: "Sicht",
		current_weather: "Aktuelles Wetter",
		unknown: "Unbekannt",
		collapse: "Einklappen",
		expand: "Ausklappen",
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
		pollen: {
			title: "Pollenbelastung",
			no_data: "Keine Pollen-Typen aktiviert",
			not_configured: "Keine Pollen-Sensoren konfiguriert. Bitte Karte einrichten und Stufen-Sensoren aus hass-swissweather zuweisen.",
			config: {
				level_sensor: "Stufen-Sensor",
				level_sensor_hint: "Pollen-Stufen-Sensor (SwissPollenLevelSensor aus izacus/hass-swissweather). Mögliche Werte: NONE / LOW / MEDIUM / STRONG / VERY_STRONG",
				raw_sensor: "Rohwert-Sensor (optional)",
				raw_sensor_hint: "Optionaler Rohwert-Sensor in Partikel/m³"
			},
			types: {
				birch: "Birke",
				grasses: "Gräser",
				alder: "Erle",
				hazel: "Hasel",
				beech: "Buche",
				ash: "Esche",
				oak: "Eiche"
			},
			levels: {
				none: "Keine",
				low: "Gering",
				medium: "Mittel",
				strong: "Stark",
				very_strong: "Sehr stark"
			}
		}
	},
	en: {
		config: {
			entity: "Weather Entity *",
			location: "Location",
			show_location: "Show Location",
			sun_entity: "Sun Entity to display sunrise and sunset times",
			wind_entity: "Wind Speed",
			wind_direction_entity: "Wind Direction",
			sunshine_entity: "Sunshine Duration",
			precipitation_entity: "Precipitation Forecast",
			show_forecast: "Show Weather Forecast",
			show_temperature: "Show Temperature Chart",
			show_precipitation: "Show Precipitation Chart",
			show_sunshine: "Show Sunshine Duration Chart",
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
			move_up: "Move up",
			move_down: "Move down",
			descr: {
				entity: "The weather entity is required and should be from the SwissWeather integration. If another weather entity is used, not all data may be displayed correctly.",
				location: "Displays this name as location.",
				show_location: "Show the location name above the current weather",
				sun_entity: "The sun entity is required to display sunrise and sunset times.",
				wind_entity: "The wind entity is required to display wind speed.",
				wind_direction_entity: "The wind direction entity is required to display wind direction.",
				sunshine_entity: "The sunshine entity is required to display sunshine duration.",
				precipitation_entity: "The precipitation entity is required to display the precipitation forecast.",
				show_forecast: "Toggle the weather forecast section on or off. The forecast shows up to 7 days depending on what the weather service provides.",
				show_temperature: "Show the temperature chart with the forecast based on the set hours",
				show_precipitation: "Show the precipitation chart with the forecast based on the set hours",
				show_sunshine: "Show the sunshine duration chart with the forecast based on the set hours",
				show_wind: "Show the wind chart with the forecast based on the set hours",
				enable_animate_weather_icons: "Show animated icons. If disabled, static icons are displayed.",
				compact_mode: "In compact mode, fewer details are displayed for the daily forecast and current data (e.g. wind direction)",
				forecast_hours: "Number of hours to show in the hourly forecast (default: 6, maximum 18)"
			}
		},
		warning: {
			config: {
				show_warnings: "Show Weather Warnings",
				warning_entity: "Weather Warnings (Legacy)",
				primary_warning_entity: "Primary Weather Warning",
				secondary_warning_entity: "Secondary Weather Warning",
				tertiary_warning_entity: "Tertiary Weather Warning",
				descr: {
					show_warnings: "Show weather warnings if the weather warning entity is set and the actual warning exists.",
					warning_entity: "Legacy: The weather warnings entity created by the original SwissWeather integration (izacus/hass-swissweather). Ignored when the ranked warning entities below are configured.",
					primary_warning_entity: "Primary weather warning entity (*_primary_weather_warning) from mastameista/hass-swissweather. When set, the new ranked model is activated.",
					secondary_warning_entity: "Secondary weather warning entity (*_secondary_weather_warning) from mastameista/hass-swissweather.",
					tertiary_warning_entity: "Tertiary weather warning entity (*_tertiary_weather_warning) from mastameista/hass-swissweather."
				}
			},
			weather_warning: "Weather warning active",
			weather_warnings: "{{count}} weather warnings active",
			warnings: "Weather warnings",
			warnings_none: "No active weather warnings",
			warnings_additional: "+{{count}} more",
			valid_from: "Valid from",
			valid_to: "Valid to"
		},
		hourly_charts: {
			precipitation: "precipitation",
			precipitation_probability: "precipitation probability",
			config: {
				entity: "Weather Entity *",
				forecast_hours: "Forecast Hours (default: 6)",
				sun_entity: "Sun Entity to display sunrise and sunset times",
				sunshine_entity: "Sunshine Duration",
				descr: {
					entity: "The weather entity is required and should be from the SwissWeather integration.",
					forecast_hours: "Number of hours to show in the hourly forecast (default: 6, maximum 18)",
					sun_entity: "The sun entity is required for sunrise/sunset markers in the chart.",
					sunshine_entity: "The sunshine entity is required to display sunshine duration."
				}
			},
			forecast_hours: "Forecast (next {{hours}}h)",
			temperature_chart: "Temperature (next 6h)",
			temperature_hours: "Temperature (next {{hours}}h)",
			temperature_none: "No temperature data available",
			precipitation_hours: "Precipitation (next {{hours}}h)",
			precipitation_none: "No precipitation data available",
			no_precipitation_data: "No precipitation data available",
			sunshine_chart: "Sunshine (next 6h)",
			sunshine_hours: "Sunshine (next {{hours}}h)",
			sunshine_none: "No sunshine data available",
			no_sunshine_data: "No sunshine data available",
			wind_hours: "Wind (next {{hours}}h)",
			wind_compass: "Direction",
			loading: "Loading...",
			loading_forecast: "Loading forecast data...",
			check_devtools: "Check Developer Tools → Services → weather.get_forecasts",
			try_other_entity: "Try a different weather entity",
			no_forecast_data: "No forecast data available",
			no_forecast_data_hint: "Check Developer Tools → Services → weather.get_forecasts",
			forecast_request_failed: "Could not load forecast. See the browser console for details.",
			retry_forecast: "Retry",
			forecast_none: "No forecast data available",
			forecast_none_hint: "Check Developer Tools → Services → weather.get_forecasts",
			forecast_loading: "Loading...",
			forecast_days: "{{count}}-day forecast",
			forecast_days_7: "7-day forecast",
			"7d_forecast": "7-day forecast",
			xd_forecast: "Daily forecast",
			days_available: "Available Days",
			now: "Now",
			hour: "{{h}}h"
		},
		bg_card: {
			config: {
				entity: "Weather Entity *",
				sun_entity: "Sun Entity to display sunrise and sunset times",
				forecast_mode: "Forecast Mode",
				photo_mode: "Photorealistic Background (PoC)",
				show_day_temps: "Show Day Min/Max",
				show_sun_times: "Show Sunrise/Sunset",
				temperature_font_size: "Temperature font size (px)",
				group_general: "General Settings",
				group_display: "Display Settings",
				descr: {
					entity: "The weather entity is required and should be from the SwissWeather integration.",
					sun_entity: "The sun entity is required to display sunrise and sunset times.",
					forecast_mode: "Choose whether the BG card shows the daily or hourly forecast (or none).",
					show_day_temps: "Toggle the per-day min/max display on or off.",
					show_sun_times: "Toggle the sunrise/sunset display on or off.",
					photo_mode: "Experimental photorealistic background with atmospheric overlays (PoC).",
					temperature_font_size: "Font size for the temperature label in pixels. Default: 36"
				}
			},
			forecast_mode: {
				daily: "Daily",
				hourly: "Hourly",
				none: "None"
			},
			sunrise: "Sunrise",
			sunset: "Sunset"
		},
		forecast_diagram: { config: {
			entity: "Weather Entity *",
			sun_entity: "Sun Entity to display sunrise and sunset times",
			group_general: "General Settings",
			group_sensors: "Sensors",
			descr: {
				entity: "The weather entity is required and should be from the SwissWeather integration.",
				sun_entity: "The sun entity is required to display sunrise and sunset times."
			}
		} },
		location: "Switzerland",
		wind: "Wind",
		direction: "Direction",
		humidity: "Humidity",
		pressure: "Pressure",
		sunshine: "Sunshine",
		visibility: "Visibility",
		current_weather: "Current Weather",
		unknown: "Unknown",
		collapse: "Collapse",
		expand: "Expand",
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
		pollen: {
			title: "Pollen levels",
			no_data: "No pollen types enabled",
			not_configured: "No pollen sensors configured. Please edit the card and assign level sensors from hass-swissweather.",
			config: {
				level_sensor: "Level sensor",
				level_sensor_hint: "Pollen level sensor (SwissPollenLevelSensor from izacus/hass-swissweather). Values: NONE / LOW / MEDIUM / STRONG / VERY_STRONG",
				raw_sensor: "Raw value sensor (optional)",
				raw_sensor_hint: "Optional raw value sensor in particles/m³"
			},
			types: {
				birch: "Birch",
				grasses: "Grasses",
				alder: "Alder",
				hazel: "Hazel",
				beech: "Beech",
				ash: "Ash",
				oak: "Oak"
			},
			levels: {
				none: "None",
				low: "Low",
				medium: "Medium",
				strong: "Strong",
				very_strong: "Very strong"
			}
		}
	},
	it: {
		config: {
			entity: "Entità meteo *",
			location: "Località",
			show_location: "Mostra località",
			sun_entity: "Entità sole per mostrare alba e tramonto",
			wind_entity: "Velocità del vento",
			wind_direction_entity: "Direzione del vento",
			sunshine_entity: "Durata del soleggiamento",
			precipitation_entity: "Previsione precipitazioni",
			show_forecast: "Mostra previsioni meteo",
			show_temperature: "Mostra grafico temperatura",
			show_precipitation: "Mostra grafico precipitazioni",
			show_sunshine: "Mostra grafico soleggiamento",
			show_wind: "Mostra grafico vento",
			enable_animate_weather_icons: "Abilita icone meteo animate",
			forecast_hours: "Ore di previsione (predefinito: 6)",
			compact_mode: "Modalità compatta",
			group_general: "Impostazioni generali",
			group_current: "Meteo attuale",
			group_forecast: "Previsioni meteo",
			group_charts: "Grafici",
			group_sensors: "Sensori",
			group_display: "Impostazioni di visualizzazione",
			group_chart_order: "Ordine dei grafici",
			chart_order: "Ordine dei grafici (es. temperature,precipitation,sunshine,wind)",
			chart_temperature: "Temperatura",
			chart_precipitation: "Precipitazioni",
			chart_sunshine: "Soleggiamento",
			chart_wind: "Vento",
			chart_forecast: "Grafico previsioni",
			move_up: "Sposta su",
			move_down: "Sposta giù",
			descr: {
				entity: "L'entità meteo è obbligatoria e dovrebbe provenire dall'integrazione SwissWeather. Se si usa un'altra entità meteo, non tutti i dati potrebbero essere visualizzati correttamente.",
				location: "Mostra questo nome come località.",
				show_location: "Mostra il nome della località sopra il meteo attuale",
				sun_entity: "L'entità sole è necessaria per mostrare gli orari di alba e tramonto.",
				wind_entity: "L'entità vento è necessaria per mostrare la velocità del vento.",
				wind_direction_entity: "L'entità direzione del vento è necessaria per mostrare la direzione del vento.",
				sunshine_entity: "L'entità soleggiamento è necessaria per mostrare la durata del soleggiamento.",
				precipitation_entity: "L'entità precipitazioni è necessaria per mostrare la previsione delle precipitazioni.",
				show_forecast: "Attiva o disattiva la sezione delle previsioni meteo. Le previsioni coprono fino a 7 giorni, a seconda di quanto fornito dal servizio meteo.",
				show_temperature: "Mostra il grafico della temperatura con la previsione per le ore impostate",
				show_precipitation: "Mostra il grafico delle precipitazioni con la previsione per le ore impostate",
				show_sunshine: "Mostra il grafico della durata del soleggiamento con la previsione per le ore impostate",
				show_wind: "Mostra il grafico del vento con la previsione per le ore impostate",
				enable_animate_weather_icons: "Mostra icone animate. Se disattivato, vengono mostrate icone statiche.",
				compact_mode: "In modalità compatta vengono mostrati meno dettagli per le previsioni giornaliere e i dati attuali (es. direzione del vento)",
				forecast_hours: "Numero di ore da mostrare nella previsione oraria (predefinito: 6, massimo 18)"
			}
		},
		warning: {
			config: {
				show_warnings: "Mostra allerte meteo",
				warning_entity: "Allerte meteo (legacy)",
				primary_warning_entity: "Allerta meteo primaria",
				secondary_warning_entity: "Allerta meteo secondaria",
				tertiary_warning_entity: "Allerta meteo terziaria",
				descr: {
					show_warnings: "Mostra le allerte meteo se l'entità allerte è impostata ed esiste un'allerta attiva.",
					warning_entity: "Legacy: l'entità allerte meteo creata dall'integrazione SwissWeather originale (izacus/hass-swissweather). Ignorata quando sono configurate le entità allerta classificate qui sotto.",
					primary_warning_entity: "Entità allerta meteo primaria (*_primary_weather_warning) da mastameista/hass-swissweather. Se impostata, attiva il nuovo modello a livelli.",
					secondary_warning_entity: "Entità allerta meteo secondaria (*_secondary_weather_warning) da mastameista/hass-swissweather.",
					tertiary_warning_entity: "Entità allerta meteo terziaria (*_tertiary_weather_warning) da mastameista/hass-swissweather."
				}
			},
			weather_warning: "Allerta meteo attiva",
			weather_warnings: "{{count}} allerte meteo attive",
			warnings: "Allerte meteo",
			warnings_none: "Nessuna allerta meteo attiva",
			warnings_additional: "+{{count}} altre",
			valid_from: "Valida dal",
			valid_to: "Valida fino al"
		},
		hourly_charts: {
			precipitation: "precipitazioni",
			precipitation_probability: "probabilità di precipitazioni",
			config: {
				entity: "Entità meteo *",
				forecast_hours: "Ore di previsione (predefinito: 6)",
				sun_entity: "Entità sole per mostrare alba e tramonto",
				sunshine_entity: "Durata del soleggiamento",
				descr: {
					entity: "L'entità meteo è obbligatoria e dovrebbe provenire dall'integrazione SwissWeather.",
					forecast_hours: "Numero di ore da mostrare nella previsione oraria (predefinito: 6, massimo 18)",
					sun_entity: "L'entità sole è necessaria per i marcatori di alba/tramonto nel grafico.",
					sunshine_entity: "L'entità soleggiamento è necessaria per mostrare la durata del soleggiamento."
				}
			},
			forecast_hours: "Previsione (prossime {{hours}}h)",
			temperature_chart: "Temperatura (prossime 6h)",
			temperature_hours: "Temperatura (prossime {{hours}}h)",
			temperature_none: "Nessun dato di temperatura disponibile",
			precipitation_hours: "Precipitazioni (prossime {{hours}}h)",
			precipitation_none: "Nessun dato sulle precipitazioni disponibile",
			no_precipitation_data: "Nessun dato sulle precipitazioni disponibile",
			sunshine_chart: "Soleggiamento (prossime 6h)",
			sunshine_hours: "Soleggiamento (prossime {{hours}}h)",
			sunshine_none: "Nessun dato sul soleggiamento disponibile",
			no_sunshine_data: "Nessun dato sul soleggiamento disponibile",
			wind_hours: "Vento (prossime {{hours}}h)",
			wind_compass: "Direzione",
			loading: "Caricamento...",
			loading_forecast: "Caricamento dati di previsione...",
			check_devtools: "Controlla Strumenti per sviluppatori → Azioni → weather.get_forecasts",
			try_other_entity: "Prova un'altra entità meteo",
			no_forecast_data: "Nessun dato di previsione disponibile",
			retry_forecast: "Riprova",
			forecast_request_failed: "Impossibile caricare le previsioni meteo",
			no_forecast_data_hint: "Controlla Strumenti per sviluppatori → Azioni → weather.get_forecasts",
			forecast_none: "Nessun dato di previsione disponibile",
			forecast_none_hint: "Controlla Strumenti per sviluppatori → Azioni → weather.get_forecasts",
			forecast_loading: "Caricamento...",
			forecast_days: "Previsione a {{count}} giorni",
			forecast_days_7: "Previsione a 7 giorni",
			"7d_forecast": "Previsione a 7 giorni",
			xd_forecast: "Previsione giornaliera",
			days_available: "giorni disponibili",
			now: "Ora",
			hour: "{{h}}h"
		},
		bg_card: {
			config: {
				entity: "Entità meteo *",
				sun_entity: "Entità sole per mostrare alba e tramonto",
				forecast_mode: "Modalità previsioni",
				photo_mode: "Sfondo fotorealistico (PoC)",
				show_day_temps: "Mostra min/max giornaliere",
				show_sun_times: "Mostra alba/tramonto",
				temperature_font_size: "Dimensione carattere temperatura (px)",
				group_general: "Impostazioni generali",
				group_display: "Impostazioni di visualizzazione",
				descr: {
					entity: "L'entità meteo è obbligatoria e dovrebbe provenire dall'integrazione SwissWeather.",
					sun_entity: "L'entità sole è necessaria per mostrare gli orari di alba e tramonto.",
					forecast_mode: "Scegli se la card sfondo mostra la previsione giornaliera, oraria o nessuna.",
					show_day_temps: "Attiva o disattiva la visualizzazione min/max per ogni giorno.",
					show_sun_times: "Attiva o disattiva la visualizzazione di alba/tramonto.",
					photo_mode: "Sfondo fotorealistico sperimentale con effetti atmosferici (PoC).",
					temperature_font_size: "Dimensione del carattere per la temperatura in pixel. Predefinito: 36"
				}
			},
			forecast_mode: {
				daily: "Giornaliera",
				hourly: "Oraria",
				none: "Nessuna"
			},
			sunrise: "Alba",
			sunset: "Tramonto"
		},
		forecast_diagram: { config: {
			entity: "Entità meteo *",
			sun_entity: "Entità sole per mostrare alba e tramonto",
			group_general: "Impostazioni generali",
			group_sensors: "Sensori",
			descr: {
				entity: "L'entità meteo è obbligatoria e dovrebbe provenire dall'integrazione SwissWeather.",
				sun_entity: "L'entità sole è necessaria per mostrare gli orari di alba e tramonto."
			}
		} },
		location: "Svizzera",
		wind: "Vento",
		direction: "Direzione",
		humidity: "Umidità",
		pressure: "Pressione",
		sunshine: "Soleggiamento",
		visibility: "Visibilità",
		current_weather: "Meteo attuale",
		unknown: "Sconosciuto",
		collapse: "Comprimi",
		expand: "Espandi",
		"clear-night": "Notte serena",
		cloudy: "Nuvoloso",
		exceptional: "Condizioni eccezionali",
		fog: "Nebbia",
		hail: "Grandine",
		lightning: "Temporale",
		"lightning-rainy": "Temporale con pioggia",
		partlycloudy: "Parzialmente nuvoloso",
		pouring: "Pioggia intensa",
		rainy: "Pioggia",
		snowy: "Neve",
		"snowy-rainy": "Neve mista a pioggia",
		sunny: "Soleggiato",
		windy: "Ventoso",
		"windy-variant": "Ventoso (variante)",
		"windy-variant-cloudy": "Ventoso e nuvoloso",
		"windy-variant-partlycloudy": "Ventoso e parzialmente nuvoloso",
		"windy-variant-rainy": "Ventoso con pioggia",
		"windy-variant-snowy": "Ventoso con neve",
		"windy-variant-snowy-rainy": "Ventoso con neve mista a pioggia",
		"windy-variant-sunny": "Ventoso e soleggiato",
		"windy-variant-clear-night": "Ventoso con notte serena",
		"windy-variant-fog": "Ventoso con nebbia",
		"windy-variant-hail": "Ventoso con grandine",
		"windy-variant-lightning": "Ventoso con temporale",
		"windy-variant-lightning-rainy": "Ventoso con temporale e pioggia",
		"windy-variant-pouring": "Ventoso con pioggia intensa",
		"windy-variant-exceptional": "Ventoso con condizioni eccezionali",
		pollen: {
			title: "Livelli di polline",
			no_data: "Nessun tipo di polline attivato",
			not_configured: "Nessun sensore pollini configurato. Modifica la card e assegna i sensori di livello da hass-swissweather.",
			config: {
				level_sensor: "Sensore di livello",
				level_sensor_hint: "Sensore livello pollini (SwissPollenLevelSensor da izacus/hass-swissweather). Valori: NONE / LOW / MEDIUM / STRONG / VERY_STRONG",
				raw_sensor: "Sensore valore grezzo (opzionale)",
				raw_sensor_hint: "Sensore opzionale del valore grezzo in particelle/m³"
			},
			types: {
				birch: "Betulla",
				grasses: "Graminacee",
				alder: "Ontano",
				hazel: "Nocciolo",
				beech: "Faggio",
				ash: "Frassino",
				oak: "Quercia"
			},
			levels: {
				none: "Assente",
				low: "Debole",
				medium: "Moderato",
				strong: "Forte",
				very_strong: "Molto forte"
			}
		}
	}
};
function M(e) {
	return tt[typeof e == "string" ? e.toLowerCase().replace(/_/g, "-").split("-")[0] : "en"] ?? tt.en;
}
//#endregion
//#region src/charts/daily-forecast-diagram.ts
var N = class extends T {
	constructor(...e) {
		super(...e), this.forecast = [], this.hourlyForecast = [], this.standalone = !1, this.language = "en", this._tooltip = new Ge(this), this._chartSize = new Ue(this, () => this);
	}
	static {
		this.styles = o`
    ${We}
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
	}
	render() {
		let e = M(this.language).hourly_charts, t = this.forecast.slice(0, 7), n = /* @__PURE__ */ new Map();
		t.forEach((e, t) => {
			let r = $e(e.datetime);
			r && n.set(r, t);
		});
		let r = et(this.hourlyForecast, n.keys());
		if (!r.length) return x`<div>No hourly forecast available</div>`;
		let i = t.length, a = (this.standalone ? this.config.grid_options?.rows || 3 : 2) * 64 - 8, o = this.standalone ? this._chartSize.height > 0 ? this._chartSize.height : a : 200, s = this._chartSize.width;
		if (!s) {
			let e = this.getBoundingClientRect?.();
			s = e?.width ? Math.floor(e.width) : 400;
		}
		let c = s, l = o, u = l - 32, d = c - 16 - 0, f = Math.max(0, d - 16) / i, p = Math.min(120, Math.max(80, u * .35)), m = Math.max(10, u * .05), h = u - p - m, g = Math.min(f * .7, p * .4), ee = Math.max(9, Math.round(p * .075)), te = Math.max(11, Math.round(p * .11)), _ = this.config?.diagram_labels ?? "compact", ne = Math.max(8, Math.min(10, Math.round(h * .05))), re = 26 + ee, ie = re + 10, ae = ie + g + 10, oe = 16 + p + m, v = f / 24, se = r.map((e) => typeof e.temperature == "number" ? e.temperature : null), ce = Math.min(...se.filter((e) => e !== null)), le = Math.max(...se.filter((e) => e !== null)), ue = (e) => {
			let t = r[e]?.datetime;
			return t ? new Date(t).toLocaleString(void 0, {
				weekday: "short",
				hour: "2-digit",
				minute: "2-digit"
			}) : "";
		}, de = oe, y = oe + h, fe = r.map(Ye), pe = fe.map((e) => e.amount ?? 0), me = fe.map((e) => e.probability ?? 0);
		function he(e) {
			let t = $e(e.toISOString()), r = t ? n.get(t) : void 0, i = e.getHours();
			return {
				dayIdx: r === void 0 ? -1 : r,
				hourInDay: i >= 0 && i < 24 ? i : -1
			};
		}
		let ge = {};
		for (let e = 0; e < i; e++) for (let t = 0; t < 24; t++) {
			let n = `${e}-${t}`;
			ge[n] = null;
		}
		r.forEach((e, t) => {
			if (e.datetime && se[t] !== null) {
				let { dayIdx: n, hourInDay: r } = he(new Date(e.datetime)), a = `${n}-${r}`;
				n >= 0 && n < i && r >= 0 && r < 24 && (ge[a] = {
					temp: se[t],
					precip: pe[t],
					precipProb: me[t],
					originalIndex: t
				});
			}
		});
		let b = Math.floor(ce / 5) * 5, _e = Math.ceil(le / 5) * 5;
		b > 0 && (b = 0), _e < 0 && (_e = 0);
		let ve = _e - b, ye = [], be = [];
		for (let e = 0; e < i; e++) for (let t = 0; t < 24; t++) {
			let n = ge[`${e}-${t}`];
			if (n && n.temp !== null) {
				let r = 16 + e * f + t * v + v / 2, i = y - (n.temp - b) / ve * (y - de);
				be.push(`${r},${i}`);
			}
		}
		be.length > 0 && ye.push(S`
          <!-- Main temperature line -->
          <polyline points="${be.join(" ")}" fill="none" stroke="#e74c3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pointer-events="none" />
        `);
		let xe = Math.max(3, Math.floor(v) - 2), Se = y, Ce = 5 / ve * (y - de) / 5;
		function we(e) {
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
		let C = [];
		for (let t = 0; t < i; t++) for (let n = 0; n < 24; n++) {
			let r = ge[`${t}-${n}`];
			if (r && r.precipProb > 0) {
				let i = 16 + t * f + n * v + v / 2 - xe / 2, a = 16 + t * f, o = 16 + (t + 1) * f - xe, s = Math.max(a, Math.min(o, i)), c = r.precipProb / 100 * 5 * Ce, l = `${ue(r.originalIndex)}: ${r.precipProb}% ${e.precipitation_probability}`;
				C.push(S`<rect x="${s}" y="${Se - c}" width="${xe}" height="${c}" fill="#988d8dff" opacity="0.4" rx="1.5"><title>${l}</title></rect>`);
			}
		}
		let Te = [];
		for (let t = 0; t < i; t++) for (let n = 0; n < 24; n++) {
			let r = ge[`${t}-${n}`];
			if (r && r.precip > 0) {
				let i = 16 + t * f + n * v + v / 2 - xe / 2, a = 16 + t * f, o = 16 + (t + 1) * f - xe, s = Math.max(a, Math.min(o, i)), c = r.precip * Ce, l = we(r.precip), u = `${ue(r.originalIndex)}: ${r.precip} mm ${e.precipitation}`;
				Te.push(S`<rect x="${s}" y="${Se - c}" width="${xe}" height="${c}"
              fill="${l}" opacity="1" rx="1.5"><title>${u}</title></rect>`);
			}
		}
		let Ee = [];
		for (let t = 0; t < i; t++) for (let n = 0; n < 24; n++) {
			let r = ge[`${t}-${n}`];
			if (!r) continue;
			let i = fe[r.originalIndex], a = [`${r.temp} °C`];
			i.amount !== void 0 && a.push(`${i.amount} mm ${e.precipitation}`), i.probability !== void 0 && a.push(`${i.probability}% ${e.precipitation_probability}`);
			let o = `${ue(r.originalIndex)}: ${a.join(", ")}`, s = 16 + t * f + n * v;
			Ee.push(this._tooltip.target(s, de, v, Math.max(0, y - de), o));
		}
		let De = [];
		if (r.length > 0) for (let e = 0; e <= i; e++) {
			let t = 16 + e * f;
			De.push(S`<line x1="${t}" y1="${de}" x2="${t}" y2="${y}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`);
		}
		let Oe = [];
		if (i > 0) for (let e = 0; e < i; e++) {
			let n = 16 + e * f + f / 2, r = typeof t[e].templow == "number" ? Math.round(t[e].templow || t[e].temperature - 5) : "", i = typeof t[e].temperature == "number" ? Math.round(t[e].temperature) : "";
			Oe.push(S`
        <g>
          <!-- Weekday -->
          <text x="${n}" y="${re}" text-anchor="middle" font-size="${ee}" class="weather-day">
            ${new Date(t[e].datetime).toLocaleDateString(void 0, { weekday: "short" })}
          </text>
          <!-- Icon -->
          <foreignObject x="${n - g / 2}" y="${ie}" width="${g}" height="${g}">
              ${this.getWeatherIcon(t[e].condition || "", this.config.enable_animate_weather_icons ? "animated" : "mdiAsSVG", g + "px", !0)}
          </foreignObject>
          <!-- Min/Max temp -->
          <text class="weather-temp" x="${n}" y="${ae}" text-anchor="middle" font-size="${te}">${r}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${i}°</tspan></text>
        </g>
      `);
		}
		let ke = [], w = /* @__PURE__ */ new Set();
		w.add(b), b < 0 && _e > 0 && w.add(0), w.add(_e);
		for (let e = b; e <= _e; e += 5) if (e % 5 == 0) {
			let t = de + (_e - e) / ve * (y - de);
			if (t >= de && t <= y) {
				let n = e % 10 == 0;
				ke.push(S`
            <line x1="${16}" y1="${t}" x2="${d}" y2="${t}"
              stroke="#ddd" stroke-width="${n ? 1 : .5}"
              stroke-dasharray="${n ? "none" : "2,2"}" opacity="0.6"/>
            ${_ === "none" ? S`` : _ === "full" ? n ? S`<text x="${20}" y="${t}" font-size="${ne}" fill="#888" opacity="0.9" text-anchor="start" dominant-baseline="middle">${e}°</text>` : S`` : w.has(e) ? S`<text x="${20}" y="${t}" font-size="${ne}" fill="#888" opacity="0.9" text-anchor="start" dominant-baseline="middle">${e}°</text>` : S``}
          `);
			}
		}
		let Ae = S``;
		return x`
      <style>
        .chart {
        ${this.standalone === !1 ? "background: var(--card-background-color, #fff);margin-top: 15px;" : ""}
          border-radius: 12px;
          padding: 0;
          margin-bottom: var(--chart-margin-bottom, 0);
          border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }
        .chart svg {
          width: 100%;
          height: 100%;
        }
      </style>
      ${this._tooltip.render(x`
          <svg width="100%" height="100%" viewBox="0 0 ${c} ${l}" style="display:block;">
            <!-- Background grid lines (behind everything) -->
            ${ke} ${De}
            <!-- Day groups (labels and icons) -->
            ${Oe}
            <!-- Precipitation bars -->
            ${C} ${Te} ${Ee}
            <!-- Right-side labels for mm and % -->
            ${Ae}
          </svg>

          <!-- Temperature lines in completely separate SVG overlay (continuous line, always on top) -->
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 ${c} ${l}"
            style="display:block; position: absolute; top: 0; left: 0; pointer-events: none;"
          >
            ${ye}
          </svg>
        `, "chart")}
    `;
	}
};
A([D({ type: Array }), k("design:type", Array)], N.prototype, "forecast", void 0), A([D({ type: Array }), k("design:type", Array)], N.prototype, "hourlyForecast", void 0), A([D({ type: Object }), k("design:type", Object)], N.prototype, "config", void 0), A([D({ type: Function }), k("design:type", Function)], N.prototype, "getWeatherIcon", void 0), A([D({ type: Boolean }), k("design:type", Object)], N.prototype, "standalone", void 0), A([D({ type: String }), k("design:type", Object)], N.prototype, "language", void 0), N = A([E("daily-forecast-diagram")], N);
//#endregion
//#region node_modules/lit-translate/config.js
var nt = "langChanged";
//#endregion
//#region node_modules/lit-translate/helpers.js
function rt(e, t, n) {
	return Object.entries(at(t || {})).reduce((e, [t, n]) => e.replace(RegExp(`{{[  ]*${t}[  ]*}}`, "gm"), String(at(n))), e);
}
function it(e, t) {
	let n = e.split("."), r = t.strings;
	for (; r != null && n.length > 0;) r = r[n.shift()];
	return r == null ? null : r.toString();
}
function at(e) {
	return typeof e == "function" ? e() : e;
}
var ot = {
	loader: () => Promise.resolve({}),
	empty: (e) => `[${e}]`,
	lookup: it,
	interpolate: rt,
	translationCache: {}
};
function P(e) {
	return ot = Object.assign(Object.assign({}, ot), e);
}
function st(e) {
	window.dispatchEvent(new CustomEvent(nt, { detail: e }));
}
function ct(e, t, n = ot) {
	st({
		previousStrings: n.strings,
		previousLang: n.lang,
		lang: n.lang = e,
		strings: n.strings = t
	});
}
function lt(e, t) {
	let n = (t) => e(t.detail);
	return window.addEventListener(nt, n, t), () => window.removeEventListener(nt, n);
}
async function F(e, t = ot) {
	let n = await t.loader(e, t);
	t.translationCache = {}, ct(e, n, t);
}
function I(e, t, n = ot) {
	let r = n.translationCache[e] || (n.translationCache[e] = n.lookup(e, n) || n.empty(e, n));
	return t = t == null ? null : at(t), t == null ? r : n.interpolate(r, t, n);
}
//#endregion
//#region node_modules/lit-html/directive.js
var ut = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, dt = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), ft = class {
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
}, pt = window, mt = pt.trustedTypes, ht = mt ? mt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, gt = "$lit$", _t = `lit$${(Math.random() + "").slice(9)}$`, vt = "?" + _t, yt = `<${vt}>`, bt = document, xt = () => bt.createComment(""), St = (e) => e === null || typeof e != "object" && typeof e != "function", Ct = Array.isArray, wt = (e) => Ct(e) || typeof e?.[Symbol.iterator] == "function", Tt = "[ 	\n\f\r]", Et = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Dt = /-->/g, Ot = />/g, kt = RegExp(`>|${Tt}(?:([^\\s"'>=/]+)(${Tt}*=${Tt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), At = /'/g, jt = /"/g, Mt = /^(?:script|style|textarea|title)$/i, Nt = Symbol.for("lit-noChange"), L = Symbol.for("lit-nothing"), Pt = /* @__PURE__ */ new WeakMap(), Ft = bt.createTreeWalker(bt, 129, null, !1);
function It(e, t) {
	if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return ht === void 0 ? t : ht.createHTML(t);
}
var Lt = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : "", o = Et;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === Et ? c[1] === "!--" ? o = Dt : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = kt) : (Mt.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = kt) : o = Ot : o === kt ? c[0] === ">" ? (o = i ?? Et, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? kt : c[3] === "\"" ? jt : At) : o === jt || o === At ? o = kt : o === Dt || o === Ot ? o = Et : (o = kt, i = void 0);
		let d = o === kt && e[t + 1].startsWith("/>") ? " " : "";
		a += o === Et ? n + yt : l >= 0 ? (r.push(s), n.slice(0, l) + gt + n.slice(l) + _t + d) : n + _t + (l === -2 ? (r.push(void 0), t) : d);
	}
	return [It(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : "")), r];
}, Rt = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Lt(t, n);
		if (this.el = e.createElement(l, r), Ft.currentNode = this.el.content, n === 2) {
			let e = this.el.content, t = e.firstChild;
			t.remove(), e.append(...t.childNodes);
		}
		for (; (i = Ft.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) {
					let e = [];
					for (let t of i.getAttributeNames()) if (t.endsWith(gt) || t.startsWith(_t)) {
						let n = u[o++];
						if (e.push(t), n !== void 0) {
							let e = i.getAttribute(n.toLowerCase() + gt).split(_t), t = /([.?@])?(.*)/.exec(n);
							c.push({
								type: 1,
								index: a,
								name: t[2],
								strings: e,
								ctor: t[1] === "." ? Ut : t[1] === "?" ? Gt : t[1] === "@" ? Kt : Ht
							});
						} else c.push({
							type: 6,
							index: a
						});
					}
					for (let t of e) i.removeAttribute(t);
				}
				if (Mt.test(i.tagName)) {
					let e = i.textContent.split(_t), t = e.length - 1;
					if (t > 0) {
						i.textContent = mt ? mt.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], xt()), Ft.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], xt());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === vt) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(_t, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += _t.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = bt.createElement("template");
		return n.innerHTML = e, n;
	}
};
function zt(e, t, n = e, r) {
	var i, a;
	if (t === Nt) return t;
	let o = r === void 0 ? n._$Cl : n._$Co?.[r], s = St(t) ? void 0 : t._$litDirective$;
	return o?.constructor !== s && ((i = o?._$AO) == null || i.call(o, !1), s === void 0 ? o = void 0 : (o = new s(e), o._$AT(e, n, r)), r === void 0 ? n._$Cl = o : ((a = n)._$Co ?? (a._$Co = []))[r] = o), o !== void 0 && (t = zt(e, o._$AS(e, t.values), o, r)), t;
}
var Bt = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? bt).importNode(t, !0);
		Ft.currentNode = r;
		let i = Ft.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Vt(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new qt(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = Ft.nextNode(), a++);
		}
		return Ft.currentNode = bt, r;
	}
	v(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Vt = class e {
	constructor(e, t, n, r) {
		var i;
		this.type = 2, this._$AH = L, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cp = (i = r?.isConnected) == null || i;
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
		e = zt(this, e, t), St(e) ? e === L || e == null || e === "" ? (this._$AH !== L && this._$AR(), this._$AH = L) : e !== this._$AH && e !== Nt && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? wt(e) ? this.T(e) : this._(e) : this.$(e) : this.g(e);
	}
	k(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	$(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
	}
	_(e) {
		this._$AH !== L && St(this._$AH) ? this._$AA.nextSibling.data = e : this.$(bt.createTextNode(e)), this._$AH = e;
	}
	g(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Rt.createElement(It(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.v(t);
		else {
			let e = new Bt(r, this), n = e.u(this.options);
			e.v(t), this.$(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Pt.get(e.strings);
		return t === void 0 && Pt.set(e.strings, t = new Rt(e)), t;
	}
	T(t) {
		Ct(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.k(xt()), this.k(xt()), this, this.options)) : r = n[i], r._$AI(a), i++;
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
}, Ht = class {
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = L, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = L;
	}
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = zt(this, e, t, 0), a = !St(e) || e !== this._$AH && e !== Nt, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = zt(this, r[n + o], t, o), s === Nt && (s = this._$AH[o]), a ||= !St(s) || s !== this._$AH[o], s === L ? e = L : e !== L && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === L ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Ut = class extends Ht {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === L ? void 0 : e;
	}
}, Wt = mt ? mt.emptyScript : "", Gt = class extends Ht {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		e && e !== L ? this.element.setAttribute(this.name, Wt) : this.element.removeAttribute(this.name);
	}
}, Kt = class extends Ht {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = zt(this, e, t, 0) ?? L) === Nt) return;
		let n = this._$AH, r = e === L && n !== L || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== L && (n === L || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, qt = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		zt(this, e);
	}
}, Jt = {
	O: gt,
	P: _t,
	A: vt,
	C: 1,
	M: Lt,
	L: Bt,
	R: wt,
	D: zt,
	I: Vt,
	V: Ht,
	H: Gt,
	N: Kt,
	U: Ut,
	F: qt
}, Yt = pt.litHtmlPolyfillSupport;
Yt?.(Rt, Vt), (pt.litHtmlVersions ??= []).push("2.8.0");
//#endregion
//#region node_modules/lit-html/directive-helpers.js
var { I: Xt } = Jt, Zt = (e) => e.strings === void 0, Qt = (e, t) => {
	var n, r;
	let i = e._$AN;
	if (i === void 0) return !1;
	for (let e of i) (r = (n = e)._$AO) == null || r.call(n, t, !1), Qt(e, t);
	return !0;
}, $t = (e) => {
	let t, n;
	do {
		if ((t = e._$AM) === void 0) break;
		n = t._$AN, n.delete(e), e = t;
	} while (n?.size === 0);
}, en = (e) => {
	for (let t; t = e._$AM; e = t) {
		let n = t._$AN;
		if (n === void 0) t._$AN = n = /* @__PURE__ */ new Set();
		else if (n.has(e)) break;
		n.add(e), rn(t);
	}
};
function tn(e) {
	this._$AN === void 0 ? this._$AM = e : ($t(this), this._$AM = e, en(this));
}
function nn(e, t = !1, n = 0) {
	let r = this._$AH, i = this._$AN;
	if (i !== void 0 && i.size !== 0) {
		if (t) {
			if (Array.isArray(r)) for (let e = n; e < r.length; e++) Qt(r[e], !1), $t(r[e]);
			else r != null && (Qt(r, !1), $t(r));
		} else Qt(this, e);
	}
}
var rn = (e) => {
	var t, n;
	e.type == ut.CHILD && ((t = e)._$AP ?? (t._$AP = nn), (n = e)._$AQ ?? (n._$AQ = tn));
}, an = class extends ft {
	constructor() {
		super(...arguments), this._$AN = void 0;
	}
	_$AT(e, t, n) {
		super._$AT(e, t, n), en(this), this.isConnected = e._$AU;
	}
	_$AO(e, t = !0) {
		var n, r;
		e !== this.isConnected && (this.isConnected = e, e ? (n = this.reconnected) == null || n.call(this) : (r = this.disconnected) == null || r.call(this)), t && (Qt(this, e), $t(this));
	}
	setValue(e) {
		if (Zt(this._$Ct)) this._$Ct._$AI(e, this);
		else {
			let t = [...this._$Ct._$AH];
			t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
		}
	}
	disconnected() {}
	reconnected() {}
}, on = class extends an {
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
		this.langChangedSubscription ??= lt(this.langChanged.bind(this));
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
}, R = dt(class extends on {
	render(e, t, n) {
		return this.renderValue(() => I(e, t, n));
	}
}), sn = class extends ft {
	constructor(e) {
		if (super(e), this.et = L, e.type !== ut.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
	}
	render(e) {
		if (e === L || e == null) return this.ft = void 0, this.et = e;
		if (e === Nt) return e;
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
sn.directiveName = "unsafeHTML", sn.resultType = 1;
var cn;
(function(e) {
	e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
})(cn ||= {});
var ln;
(function(e) {
	e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
})(ln ||= {});
var z = (e, t, n, r) => {
	r ||= {}, n ??= {};
	let i = new Event(t, {
		bubbles: r.bubbles === void 0 || r.bubbles,
		cancelable: !!r.cancelable,
		composed: r.composed === void 0 || r.composed
	});
	return i.detail = n, e.dispatchEvent(i), i;
}, un = o`
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
`, dn = "swissweather", fn = `${dn}-card`, pn = `${fn}-editor`, B = [
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
		description: "warning.config.descr.warning_entity",
		selector: { entity: { domain: "sensor" } }
	},
	{
		name: "primary_warning_entity",
		description: "warning.config.descr.primary_warning_entity",
		selector: { entity: { domain: "sensor" } }
	},
	{
		name: "secondary_warning_entity",
		description: "warning.config.descr.secondary_warning_entity",
		selector: { entity: { domain: "sensor" } }
	},
	{
		name: "tertiary_warning_entity",
		description: "warning.config.descr.tertiary_warning_entity",
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
		description: "warning.config.descr.show_warnings",
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
P({ loader: (e) => M(e) });
var mn = class extends T {
	constructor() {
		super(), this._computeLabel = (e) => ({
			entity: I("config.entity"),
			show_location: I("config.show_location"),
			sun_entity: I("config.sun_entity"),
			location: I("config.location"),
			wind_entity: I("config.wind_entity"),
			wind_direction_entity: I("config.wind_direction_entity"),
			sunshine_entity: I("config.sunshine_entity"),
			warning_entity: I("warning.config.warning_entity"),
			primary_warning_entity: I("warning.config.primary_warning_entity"),
			secondary_warning_entity: I("warning.config.secondary_warning_entity"),
			tertiary_warning_entity: I("warning.config.tertiary_warning_entity"),
			show_forecast: I("config.show_forecast"),
			forecast_hours: I("config.forecast_hours"),
			show_temperature: I("config.show_temperature"),
			show_precipitation: I("config.show_precipitation"),
			show_sunshine: I("config.show_sunshine"),
			show_warnings: I("warning.config.show_warnings"),
			show_wind: I("config.show_wind"),
			enable_animate_weather_icons: I("config.enable_animate_weather_icons"),
			compact_mode: I("config.compact_mode")
		})[e.name] || e.name, this._computeHelper = (e) => e.description ? I(e.description) : "";
	}
	setConfig(e) {
		let t = { ...e };
		for (let e of [
			"entity",
			"sun_entity",
			"wind_entity",
			"wind_direction_entity",
			"sunshine_entity",
			"warning_entity",
			"primary_warning_entity",
			"secondary_warning_entity",
			"tertiary_warning_entity"
		]) t[e] === "" && delete t[e];
		this._config = t, this.requestUpdate();
	}
	static {
		this.styles = un;
	}
	render() {
		let e = [
			{
				key: "temperature",
				label: I("config.chart_temperature") || "Temperature"
			},
			{
				key: "precipitation",
				label: I("config.chart_precipitation") || "Precipitation"
			},
			{
				key: "sunshine",
				label: I("config.chart_sunshine") || "Sunshine"
			},
			{
				key: "wind",
				label: I("config.chart_wind") || "Wind"
			},
			{
				key: "forecast",
				label: I("config.chart_forecast") || "Forecast"
			}
		], t = Array.isArray(this._config?.chart_order) ? this._config.chart_order : e.map((e) => e.key);
		if (!this.hass) return x`<div>Loading...</div>`;
		F((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let n = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			show_location: this._config?.show_location ?? !0,
			location: this._config?.location ?? "",
			sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0,
			wind_entity: typeof this._config?.wind_entity == "string" ? this._config.wind_entity : void 0,
			wind_direction_entity: typeof this._config?.wind_direction_entity == "string" ? this._config.wind_direction_entity : void 0,
			sunshine_entity: typeof this._config?.sunshine_entity == "string" ? this._config.sunshine_entity : void 0,
			warning_entity: typeof this._config?.warning_entity == "string" ? this._config.warning_entity : void 0,
			primary_warning_entity: typeof this._config?.primary_warning_entity == "string" ? this._config.primary_warning_entity : void 0,
			secondary_warning_entity: typeof this._config?.secondary_warning_entity == "string" ? this._config.secondary_warning_entity : void 0,
			tertiary_warning_entity: typeof this._config?.tertiary_warning_entity == "string" ? this._config.tertiary_warning_entity : void 0,
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
		return x`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Full Card</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${I("config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${n}
            .schema=${[
			B.find((e) => e.name === "entity"),
			B.find((e) => e.name === "location"),
			B.find((e) => e.name === "show_location")
		].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Sensors -->
        <div class="group">
          <div class="group-title">${I("config.group_sensors") || "Sensors"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${n}
            .schema=${[
			B.find((e) => e.name === "primary_warning_entity"),
			B.find((e) => e.name === "secondary_warning_entity"),
			B.find((e) => e.name === "tertiary_warning_entity"),
			B.find((e) => e.name === "warning_entity"),
			B.find((e) => e.name === "precipitation_entity"),
			B.find((e) => e.name === "sun_entity"),
			B.find((e) => e.name === "sunshine_entity"),
			B.find((e) => e.name === "wind_entity"),
			B.find((e) => e.name === "wind_direction_entity")
		].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Display options -->
        <div class="group">
          <div class="group-title">${I("config.group_display") || "Display Options"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${n}
            .schema=${[
			B.find((e) => e.name === "forecast_hours"),
			B.find((e) => e.name === "show_forecast"),
			B.find((e) => e.name === "show_precipitation"),
			B.find((e) => e.name === "show_temperature"),
			B.find((e) => e.name === "show_sunshine"),
			B.find((e) => e.name === "show_wind"),
			B.find((e) => e.name === "enable_animate_weather_icons"),
			B.find((e) => e.name === "show_warnings"),
			B.find((e) => e.name === "compact_mode")
		].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <!-- Chart order -->
        <div class="group">
          <div class="group-title">${I("config.group_chart_order") || "Chart Order"}</div>
          <ul style="list-style:none;padding:0;margin:0;">
            ${t.map((n, r) => x` <li style="display:flex;align-items:center;margin-bottom:6px;">
                <span style="flex:1;">${e.find((e) => e.key === n)?.label || n}</span>
                <button
                  style="margin-left:8px;"
                  @click=${() => this._moveChart(r, -1)}
                  ?disabled=${r === 0}
                  title="${I("config.move_up") || "Up"}"
                >
                  ⬆️
                </button>
                <button
                  style="margin-left:2px;"
                  @click=${() => this._moveChart(r, 1)}
                  ?disabled=${r === t.length - 1}
                  title="${I("config.move_down") || "Down"}"
                >
                  ⬇️
                </button>
              </li>`)}
          </ul>
        </div>
        <!-- Configuration Preview -->
        ${this._config?.entity ? x`
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
		}, z(this, "config-changed", { config: this._config }), this.requestUpdate();
	}
	_renderConfigPreview() {
		let e = { ...this._config };
		return e.type ||= "custom:swissweather-card", Object.keys(e).forEach((t) => {
			(e[t] === void 0 || e[t] === "") && delete e[t];
		}), Object.entries(e).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join("\n");
	}
	_valueChanged(e) {
		if (this._config ||= {
			type: fn,
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
			}), this._config = r, z(this, "config-changed", { config: this._config });
		}
	}
};
A([D({ attribute: !1 }), k("design:type", Object)], mn.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], mn.prototype, "lovelace", void 0), A([D({ attribute: !1 }), k("design:type", Object)], mn.prototype, "_config", void 0), mn = A([E(pn), k("design:paramtypes", [])], mn);
//#endregion
//#region src/cards/full-card/swissweather-card.styles.ts
var hn = o`
  :host {
    display: block;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: 16px;
    padding: 20px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1)));
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

  .hourly-forecast-title {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 24px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
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
//#endregion
//#region src/charts/index.ts
function gn(e, t) {
	let n = new Date(e), r = typeof t == "string" ? t.replace(/_/g, "-") : "en";
	try {
		return n.toLocaleDateString(r, { weekday: "short" });
	} catch {
		return n.toLocaleDateString("en", { weekday: "short" });
	}
}
//#endregion
//#region src/icons/clear-night.svg
var _n = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.92'%20x2='38.52'%20y1='18.75'%20y2='47.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='5%2032%2032;%20-15%2032%2032;%205%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M46.66%2036.2a16.66%2016.66%200%2001-16.78-16.55%2016.29%2016.29%200%2001.55-4.15A16.56%2016.56%200%201048.5%2036.1c-.61.06-1.22.1-1.84.1z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-5%2032%2032;%2015%2032%2032;%20-5%2032%2032'/%3e%3c/path%3e%3c/svg%3e", vn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'%3e%3canimateTransform%20attributeName='transform'%20dur='7s'%20repeatCount='indefinite'%20type='translate'%20values='-3%200;%203%200;%20-3%200'/%3e%3c/path%3e%3c/svg%3e", yn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='16.5'%20x2='21.5'%20y1='19.67'%20y2='28.33'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='19'%20cy='24'%20r='5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M19%2015.67V12.5m0%2023v-3.17m5.89-14.22l2.24-2.24M10.87%2032.13l2.24-2.24m0-11.78l-2.24-2.24m16.26%2016.26l-2.24-2.24M7.5%2024h3.17m19.83%200h-3.17'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2019%2024;%20360%2019%2024'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", bn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='13.58'%20x2='24.15'%20y1='15.57'%20y2='33.87'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='10%2019.22%2024.293;%20-10%2019.22%2024.293;%2010%2019.22%2024.293'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%2372b9d5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M29.33%2026.68a10.61%2010.61%200%2001-10.68-10.54A10.5%2010.5%200%200119%2013.5a10.54%2010.54%200%201011.5%2013.11%2011.48%2011.48%200%2001-1.17.07z'%3e%3canimateTransform%20attributeName='transform'%20dur='10s'%20repeatCount='indefinite'%20type='rotate'%20values='-10%2019.22%2024.293;%2010%2019.22%2024.293;%20-10%2019.22%2024.293'/%3e%3c/path%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3c/svg%3e", xn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='27.5'%20x2='36.5'%20y1='50.21'%20y2='65.79'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20y1='44.21'%20y2='59.79'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2058h30'%3e%3canimateTransform%20attributeName='transform'%20begin='0s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M17%2052h30'%3e%3canimateTransform%20attributeName='transform'%20begin='-4s'%20dur='5s'%20repeatCount='indefinite'%20type='translate'%20values='-4%200;%204%200;%20-4%200'/%3e%3c/path%3e%3c/svg%3e", Sn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.25'%20x2='24.75'%20y1='43.7'%20y2='46.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='30.25'%20x2='31.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='37.25'%20x2='38.75'%20y1='43.7'%20y2='46.3'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23a)'%20d='M24%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23c)'%20d='M31%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20d='M38%2043.5a1.5%201.5%200%20101.5%201.5%201.5%201.5%200%2000-1.5-1.5z'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2018;%20-4%2014'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.6s'%20repeatCount='indefinite'%20values='1;1;0'/%3e%3c/path%3e%3c/svg%3e", Cn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", wn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='26.74'%20x2='35.76'%20y1='37.88'%20y2='53.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='.45'%20stop-color='%23f7b23b'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='url(%23b)'%20stroke='%23f6a823'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M30%2036l-4%2012h4l-2%2010%2010-14h-6l4-8h-6z'%3e%3canimate%20attributeName='opacity'%20dur='2s'%20repeatCount='indefinite'%20values='1;%201;%201;%201;%201;%201;%200.1;%201;%200.1;%201;%201;%200.1;%201;%200.1;%201'/%3e%3c/path%3e%3c/svg%3e", Tn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='22.53'%20x2='25.47'%20y1='42.95'%20y2='48.05'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.53'%20x2='32.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='36.53'%20x2='39.47'%20y1='42.95'%20y2='48.05'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.4s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.39%2043.03l-.78%204.94'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.2s'%20dur='0.7s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", En = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='30.12'%20x2='31.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='29.67'%20x2='32.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='d'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='g'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='url(%23b)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='31'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23c)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M33.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M31%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='-1%20-6;%201%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2031%2045;%20360%2031%2045'/%3e%3canimate%20attributeName='opacity'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23d)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23e)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23f)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3c/svg%3e", Dn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='c'%20x1='22.56'%20x2='39.2'%20y1='21.96'%20y2='50.8'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='.45'%20stop-color='%23f3f7fe'/%3e%3cstop%20offset='1'%20stop-color='%23deeafb'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='23.12'%20x2='24.88'%20y1='43.48'%20y2='46.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2386c3db'/%3e%3cstop%20offset='.45'%20stop-color='%2386c3db'/%3e%3cstop%20offset='1'%20stop-color='%235eafcf'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='22.67'%20x2='25.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='e'%20x1='37.12'%20x2='38.88'%20y1='43.48'%20y2='46.52'%20xlink:href='%23a'/%3e%3clinearGradient%20id='f'%20x1='36.67'%20x2='39.33'%20y1='42.69'%20y2='47.31'%20xlink:href='%23a'/%3e%3clinearGradient%20id='b'%20x1='23.31'%20x2='24.69'%20y1='44.3'%20y2='46.7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234286ee'/%3e%3cstop%20offset='.45'%20stop-color='%234286ee'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='30.31'%20x2='31.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3clinearGradient%20id='h'%20x1='37.31'%20x2='38.69'%20y1='44.3'%20y2='46.7'%20xlink:href='%23b'/%3e%3c/defs%3e%3cpath%20fill='url(%23c)'%20stroke='%23e6effc'%20stroke-miterlimit='10'%20stroke-width='.5'%20d='M46.5%2031.5h-.32a10.49%2010.49%200%2000-19.11-8%207%207%200%2000-10.57%206%207.21%207.21%200%2000.1%201.14A7.5%207.5%200%200018%2045.5a4.19%204.19%200%2000.5%200v0h28a7%207%200%20000-14z'/%3e%3cg%3e%3ccircle%20cx='24'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23a)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23d)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M26.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M24%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2024%2045;%20360%2024%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-2s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='38'%20cy='45'%20r='1.25'%20fill='none'%20stroke='url(%23e)'%20stroke-miterlimit='10'/%3e%3cpath%20fill='none'%20stroke='url(%23f)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20d='M40.17%2046.25l-1.09-.63m-2.16-1.24l-1.09-.63M38%2042.5v1.25m0%203.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-6;%20-1%2012'/%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='9s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2038%2045;%20360%2038%2045'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='4s'%20repeatCount='indefinite'%20values='0;1;1;1;0'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M24.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23g)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M31.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-0.5s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23h)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M38.08%2045.01l-.16.98'%3e%3canimateTransform%20attributeName='transform'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20type='translate'%20values='1%20-5;%20-2%2010'/%3e%3canimate%20attributeName='opacity'%20begin='-1s'%20dur='1.5s'%20repeatCount='indefinite'%20values='0;1;1;0'/%3e%3c/path%3e%3c/svg%3e", On = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.97'%20x2='42.03'%20y1='14.63'%20y2='49.37'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3canimateTransform%20attributeName='gradientTransform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43%2032a11%2011%200%2011-11-11%2011%2011%200%200111%2011zM25%2014.61l-.48%201a33.68%2033.68%200%2000-3.42%2017.82h0M39%2049.39l.48-1a33.68%2033.68%200%20003.42-17.82h0'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20repeatCount='indefinite'%20type='rotate'%20values='360%2032%2032;%200%2032%2032'/%3e%3c/path%3e%3c/svg%3e", kn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='27.56'%20x2='38.27'%20y1='17.64'%20y2='36.19'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='.45'%20stop-color='%23d4d7dd'/%3e%3cstop%20offset='1'%20stop-color='%23bec1c6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='19.96'%20x2='31.37'%20y1='29.03'%20y2='48.8'%20xlink:href='%23a'/%3e%3c/defs%3e%3cpath%20fill='none'%20stroke='url(%23a)'%20stroke-dasharray='35%2022'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M43.64%2020a5%205%200%20113.61%208.46h-35.5'%3e%3canimate%20attributeName='stroke-dashoffset'%20dur='2s'%20repeatCount='indefinite'%20values='-57;%2057'/%3e%3c/path%3e%3cpath%20fill='none'%20stroke='url(%23b)'%20stroke-dasharray='24%2015'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M29.14%2044a5%205%200%20103.61-8.46h-21'%3e%3canimate%20attributeName='stroke-dashoffset'%20begin='-1.5s'%20dur='2s'%20repeatCount='indefinite'%20values='-39;%2039'/%3e%3c/path%3e%3c/svg%3e", An = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e", jn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='52.7'%20x2='133.4'%20y1='9.6'%20y2='149.3'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%239ca3af'/%3e%3cstop%20offset='.5'%20stop-color='%239ca3af'/%3e%3cstop%20offset='1'%20stop-color='%236b7280'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='99.5'%20x2='232.6'%20y1='30.7'%20y2='261.4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%236b7280'/%3e%3cstop%20offset='.5'%20stop-color='%236b7280'/%3e%3cstop%20offset='1'%20stop-color='%234b5563'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='1381.3'%20x2='1399.5'%20y1='-1144.7'%20y2='-1097.4'%20gradientTransform='rotate(-9%208002.567%208233.063)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%230b65ed'/%3e%3cstop%20offset='.5'%20stop-color='%230a5ad4'/%3e%3cstop%20offset='1'%20stop-color='%230950bc'/%3e%3c/linearGradient%3e%3clinearGradient%20xlink:href='%23c'%20id='d'%20x1='1436.7'%20x2='1454.9'%20y1='-1137'%20y2='-1089.7'%20gradientTransform='rotate(-9%208009.537%208233.037)'/%3e%3clinearGradient%20xlink:href='%23c'%20id='e'%20x1='1492.1'%20x2='1510.3'%20y1='-1129.3'%20y2='-1082.1'%20gradientTransform='rotate(-9%208016.566%208233.078)'/%3e%3csymbol%20id='g'%20viewBox='0%200%20200.3%20126.1'%3e%3cpath%20fill='url(%23a)'%20stroke='%23848b98'%20stroke-miterlimit='10'%20d='M.5%2093.2a32.4%2032.4%200%200032.4%2032.4h129.8v-.1l2.3.1a34.8%2034.8%200%20006.5-68.9%2032.4%2032.4%200%2000-48.5-33%2048.6%2048.6%200%2000-88.6%2037.1h-1.5A32.4%2032.4%200%2000.5%2093.1Z'/%3e%3c/symbol%3e%3csymbol%20id='h'%20viewBox='0%200%20350%20222'%3e%3cpath%20fill='url(%23b)'%20stroke='%235b6472'%20stroke-miterlimit='10'%20stroke-width='6'%20d='m291%20107-2.5.1A83.9%2083.9%200%2000135.6%2043%2056%2056%200%200051%2091a56.6%2056.6%200%2000.8%209A60%2060%200%200063%20219l4-.2v.2h224a56%2056%200%20000-112Z'/%3e%3c/symbol%3e%3csymbol%20id='f'%20overflow='visible'%20viewBox='0%200%20398%20222'%3e%3cuse%20xlink:href='%23g'%20width='200.3'%20height='126.1'%20transform='translate(198%2027)'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-9%200;%209%200;%20-9%200'/%3e%3c/use%3e%3cuse%20xlink:href='%23h'%20width='350'%20height='222'%3e%3canimateTransform%20additive='sum'%20attributeName='transform'%20dur='6s'%20repeatCount='indefinite'%20type='translate'%20values='-18%200;%2018%200;%20-18%200'/%3e%3c/use%3e%3c/symbol%3e%3csymbol%20id='i'%20overflow='visible'%20viewBox='0%200%20129%2057'%3e%3cpath%20fill='url(%23c)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M8.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x1'%20additive='sum'%20attributeName='transform'%20begin='0s;%20x1.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y1'%20attributeName='opacity'%20begin='0s;%20y1.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23d)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M64.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x2'%20additive='sum'%20attributeName='transform'%20begin='.33s;%20x2.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y2'%20attributeName='opacity'%20begin='.33s;%20y2.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3cpath%20fill='url(%23e)'%20stroke='%230a5ad4'%20stroke-miterlimit='10'%20d='M120.5%2056.5a8%208%200%2001-8-8v-40a8%208%200%200116%200v40a8%208%200%2001-8%208Z'%20opacity='0'%3e%3canimateTransform%20id='x3'%20additive='sum'%20attributeName='transform'%20begin='-.33s;%20x3.end+.33s'%20dur='.67s'%20type='translate'%20values='0%20-60;%200%2060'/%3e%3canimate%20id='y3'%20attributeName='opacity'%20begin='-.33s;%20y3.end+.33s'%20dur='.67s'%20keyTimes='0;%20.25;%201'%20values='0;%201;%200'/%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3cuse%20xlink:href='%23f'%20width='398'%20height='222'%20transform='translate(68.84%20145)'/%3e%3cuse%20xlink:href='%23i'%20width='129'%20height='57'%20transform='translate(191.5%20343.5)'/%3e%3c/svg%3e", Mn = "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z", Nn = "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z", Pn = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z", Fn = "M15,6.79C16.86,7.86 18,9.85 18,12C18,22 6,22 6,22C7.25,21.06 8.38,19.95 9.34,18.71C9.38,18.66 9.41,18.61 9.44,18.55C9.69,18.06 9.5,17.46 9,17.21C7.14,16.14 6,14.15 6,12C6,2 18,2 18,2C16.75,2.94 15.62,4.05 14.66,5.29C14.62,5.34 14.59,5.39 14.56,5.45C14.31,5.94 14.5,6.54 15,6.79M12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14Z", In = "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z", Ln = "M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z", Rn = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", zn = "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z", Bn = "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z", Vn = "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59", Hn = "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z", Un = "M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z", Wn = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z", Gn = "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z", Kn = "M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z", V = (e, t) => e ? (t ||= "24px", x`<ha-icon
    .icon="${e}"
    style="font-size:${t}; width: ${t}; height: ${t}"
  />`) : x`<ha-icon
      icon="mdi:weather-sunny"
      style="font-size:${t}; width: ${t}; height: ${t}"
    />`, H = (e, t) => e ? (t ||= "24px", S`<svg height=${t} width=${t} viewport="0 0 48 48"><path d="${e}" /></svg>`) : S`<svg height=${t} width=${t} viewport="0 0 48 48"><path d="${Wn}" /></svg>`, qn = (e, t, n, r) => {
	if (!e) return V("mdi:weather-sunny", n);
	let i = String(e).trim().toLowerCase(), a = {
		"clear-night": H(Rn, n),
		cloudy: H(Mn, n),
		fog: H(Nn, n),
		hail: H(Pn, n),
		lightning: H(In, n),
		"lightning-rainy": H(Ln, n),
		partlycloudy: H(zn, n),
		pouring: H(Bn, n),
		rainy: H(Vn, n),
		snowy: H(Hn, n),
		"snowy-rainy": H(Un, n),
		sunny: H(Wn, n),
		windy: H(Gn, n),
		"windy-variant": H(Kn, n),
		exceptional: H(Fn, n)
	}, o = {
		"clear-night": V("mdi:weather-night", n),
		cloudy: V("mdi:weather-cloudy", n),
		fog: V("mdi:weather-fog", n),
		hail: V("mdi:weather-hail", n),
		lightning: V("mdi:weather-lightning", n),
		"lightning-rainy": V("mdi:weather-lightning-rainy", n),
		partlycloudy: V("mdi:weather-partly-cloudy", n),
		pouring: V("mdi:weather-pouring", n),
		rainy: V("mdi:weather-rainy", n),
		snowy: V("mdi:weather-snowy", n),
		"snowy-rainy": V("mdi:weather-snowy-rainy", n),
		sunny: V("mdi:weather-sunny", n),
		windy: V("mdi:weather-windy", n),
		"windy-variant": V("mdi:weather-windy-variant", n),
		exceptional: V("mdi:weather-hurricane", n)
	}, s = {
		"clear-night": x`<img src="${_n}" style="font-size:${n}" />`,
		cloudy: x`<img src="${vn}" style="font-size:${n}" />`,
		fog: x`<img src="${xn}" style="font-size:${n}" />`,
		hail: x`<img src="${Sn}" style="font-size:${n}" />`,
		lightning: x`<img src="${wn}" style="font-size:${n}" />`,
		"lightning-rainy": x`<img src="${Cn}" style="font-size:${n}" />`,
		partlycloudy: x`<img
      src="${r ? yn : bn}"
      style="font-size:${n}"
    />`,
		pouring: x`<img src="${jn}" style="font-size:${n}" />`,
		rainy: x`<img src="${Tn}" style="font-size:${n}" />`,
		snowy: x`<img src="${En}" style="font-size:${n}" />`,
		"snowy-rainy": x`<img src="${Dn}" style="font-size:${n}" />`,
		sunny: x`<img src="${An}" style="font-size:${n}" />`,
		windy: x`<img src="${kn}" style="font-size:${n}" />`,
		"windy-variant": x`<img src="${kn}" style="font-size:${n}" />`,
		exceptional: x`<img src="${On}" style="font-size:${n}" />`
	};
	return t === "mdi" ? o[i] || V("mdi:weather-sunny", n) : t === "mdiAsSVG" ? a[i] || x`<img src="${"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e"}" />` : s[i] || x`<img src="${"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='26.75'%20x2='37.25'%20y1='22.91'%20y2='41.09'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='.45'%20stop-color='%23fbbf24'/%3e%3cstop%20offset='1'%20stop-color='%23f59e0b'/%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle%20cx='32'%20cy='32'%20r='10.5'%20fill='url(%23a)'%20stroke='%23f8af18'%20stroke-miterlimit='10'%20stroke-width='.5'/%3e%3cpath%20fill='none'%20stroke='%23fbbf24'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='3'%20d='M32%2015.71V9.5m0%2045v-6.21m11.52-27.81l4.39-4.39M16.09%2047.91l4.39-4.39m0-23l-4.39-4.39m31.82%2031.78l-4.39-4.39M15.71%2032H9.5m45%200h-6.21'%3e%3canimateTransform%20attributeName='transform'%20dur='45s'%20repeatCount='indefinite'%20type='rotate'%20values='0%2032%2032;%20360%2032%2032'/%3e%3c/path%3e%3c/svg%3e"}" />`;
}, Jn = (e, t) => e?.states[t], Yn = (e, t) => {
	let n = /* @__PURE__ */ new Date(), r = Jn(e, t.entity), i = Jn(e, t.sun_entity || "sun.sun");
	if (i?.state === "above_horizon") return !0;
	if (i?.state === "below_horizon") return !1;
	let a = null, o = null;
	if (r && r.attributes && "sunrise" in r.attributes && "sunset" in r.attributes && r.attributes.sunrise && r.attributes.sunset) a = new Date(r.attributes.sunrise), o = new Date(r.attributes.sunset);
	else if (i?.attributes) {
		let e = i.attributes.next_rising ? new Date(i.attributes.next_rising) : null, t = i.attributes.next_setting ? new Date(i.attributes.next_setting) : null;
		if (e && t) {
			let r = e > n ? /* @__PURE__ */ new Date(e.getTime() - 864e5) : e, i = t;
			a = r, o = i;
		}
	}
	return !a || !o || n >= a && n < o;
};
function Xn(e) {
	let t = window;
	t.customCards = t.customCards || [], t.customCards.push({
		...e,
		preview: !0
	});
}
//#endregion
//#region node_modules/marked/lib/marked.esm.js
function Zn() {
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
var Qn = Zn();
function $n(e) {
	Qn = e;
}
var er = { exec: () => null };
function tr(e) {
	let t = [];
	return (n) => {
		let r = Math.max(0, Math.min(3, n - 1)), i = t[r];
		return i || (i = e(r), t[r] = i), i;
	};
}
function U(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(W.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var nr = ((e = "") => {
	try {
		return !!RegExp("(?<=1)(?<!1)" + e);
	} catch {
		return !1;
	}
})(), W = {
	codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	endingSpaceTabChar: /[ \t]$/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	leadingSpaceTab: /^[ \t]+/,
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
	numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g,
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
	nextBulletRegex: tr((e) => RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
	hrRegex: tr((e) => RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),
	fencesBeginRegex: tr((e) => RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),
	headingBeginRegex: tr((e) => RegExp(`^ {0,${e}}#`)),
	htmlBeginRegex: tr((e) => RegExp(`^ {0,${e}}(?:</?(?:${_r})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`, "i")),
	blockquoteBeginRegex: tr((e) => RegExp(`^ {0,${e}}>`))
}, rr = /^(?:[ \t]*(?:\n|$))+/, ir = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ar = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, or = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, sr = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, cr = / {0,3}(?:[*+-]|\d{1,9}[.)])/, lr = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ur = U(lr).replace(/bull/g, cr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), dr = U(lr).replace(/bull/g, cr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), fr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/, pr = /^[^\n]+/, mr = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, hr = U(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", mr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), gr = U(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, cr).getRegex(), _r = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", vr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, yr = U("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", vr).replace("tag", _r).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), br = (e) => U(fr).replace("hr", or).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", e).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _r).getRegex(), xr = br(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/), Sr = br(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/), Cr = {
	blockquote: U(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Sr).getRegex(),
	code: ir,
	def: hr,
	fences: ar,
	heading: sr,
	hr: or,
	html: yr,
	lheading: ur,
	list: gr,
	newline: rr,
	paragraph: xr,
	table: er,
	text: pr
}, wr = U("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", or).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _r).getRegex(), Tr = {
	...Cr,
	lheading: dr,
	table: wr,
	paragraph: U(fr).replace("hr", or).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", wr).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _r).getRegex()
}, Er = {
	...Cr,
	html: U("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", vr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: er,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: U(fr).replace("hr", or).replace("heading", " *#{1,6} *[^\n]").replace("lheading", ur).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Dr = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Or = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, kr = /^( {2,}|\\)\n(?!\s*$)[ \t]*/, Ar = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, jr = /[\p{P}\p{S}]/u, Mr = /[\s\p{P}\p{S}]/u, Nr = /[^\s\p{P}\p{S}]/u, Pr = U(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Mr).getRegex(), Fr = /[\p{Pi}\p{Ps}"']/u, Ir = /(?!~)[\p{P}\p{S}]/u, Lr = /(?!~)[\s\p{P}\p{S}]/u, Rr = /(?:[^\s\p{P}\p{S}]|~)/u, zr = U(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", nr ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Br = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Vr = U(Br, "u").replace(/punct/g, jr).getRegex(), Hr = U(Br, "u").replace(/punct/g, Ir).getRegex(), Ur = U(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, "u").replace(/openQuote/g, Fr).replace(/punct/g, jr).getRegex(), Wr = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Gr = U(Wr, "gu").replace(/notPunctSpace/g, Nr).replace(/punctSpace/g, Mr).replace(/punct/g, jr).getRegex(), Kr = U(Wr, "gu").replace(/notPunctSpace/g, Rr).replace(/punctSpace/g, Lr).replace(/punct/g, Ir).getRegex(), qr = U("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Nr).replace(/punctSpace/g, Mr).replace(/punct/g, jr).getRegex(), Jr = U("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Nr).replace(/punctSpace/g, Mr).replace(/punct/g, jr).getRegex(), Yr = U("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Nr).replace(/punctSpace/g, Mr).replace(/punct/g, jr).getRegex(), Xr = U(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, jr).getRegex(), Zr = U("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Nr).replace(/punctSpace/g, Mr).replace(/punct/g, jr).getRegex(), Qr = U(/\\(punct)/, "gu").replace(/punct/g, jr).getRegex(), $r = U(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), ei = U(vr).replace("(?:-->|$)", "-->").getRegex(), ti = U("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ei).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ni = /\[(?:\\[\s\S]|[^\[\]\\])*\]/, ri = U(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets", ni).getRegex(), ii = U(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label", ri).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ai = U(/^!?\[(label)\]\[(ref)\]/).replace("label", ri).replace("ref", mr).getRegex(), oi = U(/^!?\[(ref)\](?:\[\])?/).replace("ref", mr).getRegex(), si = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/, ci = U(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets", ni).getRegex(), li = U("reflink|nolink(?!\\()", "g").replace("reflink", U(/^!?\[(label)\]\[(ref)\]/).replace("label", ci).replace("ref", si).getRegex()).replace("nolink", U(/^!?\[(ref)\](?:\[\])?/).replace("ref", si).getRegex()).getRegex(), ui = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, di = U(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g, /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(), fi = {
	_backpedal: er,
	anyPunctuation: Qr,
	autolink: $r,
	blockSkip: zr,
	br: kr,
	code: Or,
	del: er,
	delLDelim: er,
	delRDelim: er,
	emStrongLDelim: Vr,
	emStrongRDelimAst: Gr,
	emStrongRDelimUnd: Jr,
	escape: Dr,
	link: ii,
	nolink: oi,
	punctuation: Pr,
	reflink: ai,
	reflinkSearch: li,
	tag: ti,
	text: Ar,
	url: er
}, pi = {
	...fi,
	emStrongLDelim: Ur,
	emStrongRDelimAst: qr,
	emStrongRDelimUnd: Yr,
	link: U(/^!?\[(label)\]\((.*?)\)/).replace("label", ri).getRegex(),
	reflink: U(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ri).getRegex()
}, mi = {
	...fi,
	emStrongRDelimAst: Kr,
	emStrongLDelim: Hr,
	delLDelim: Xr,
	delRDelim: Zr,
	url: U(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol", di).replace("protocol", ui).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: U(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol", ui).replace(/emailProtocol/g, /(?:mailto|xmpp):/).getRegex()
}, hi = {
	...mi,
	br: U(kr).replace("{2,}", "*").getRegex(),
	text: U(mi.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, gi = {
	normal: Cr,
	gfm: Tr,
	pedantic: Er
}, _i = {
	normal: fi,
	gfm: mi,
	breaks: hi,
	pedantic: pi
}, vi = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, yi = (e) => vi[e];
function G(e, t) {
	if (t) {
		if (W.escapeTest.test(e)) return e.replace(W.escapeReplace, yi);
	} else if (W.escapeTestNoEncode.test(e)) return e.replace(W.escapeReplaceNoEncode, yi);
	return e;
}
function bi(e) {
	return e.replace(W.numericCharacterReference, (e, t, n) => {
		let r = t === void 0 ? Number.parseInt(n, 16) : Number.parseInt(t, 10);
		return r === 0 || r > 1114111 || r >= 55296 && r <= 57343 ? "�" : String.fromCodePoint(r);
	});
}
function xi(e) {
	try {
		e = encodeURI(e).replace(W.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function Si(e, t) {
	let n = e.replace(W.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(W.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) {
		if (n.length > t) n.splice(t);
		else for (; n.length < t;) n.push("");
	}
	for (; r < n.length; r++) n[r] = n[r].trim().replace(W.slashPipe, "|");
	return n;
}
function Ci(e, t, n) {
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
function wi(e) {
	let t = e.split("\n"), n = t.length - 1;
	for (; n >= 0 && W.blankLine.test(t[n]);) n--;
	return t.length - n <= 2 ? e : t.slice(0, n + 1).join("\n");
}
function Ti(e) {
	return e.trim().toLowerCase().toUpperCase().toLowerCase();
}
function Ei(e, t) {
	if (e.indexOf(t[0]) === -1 && e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function Di(e, t = 0) {
	let n = t, r = "";
	for (let t of e) if (t === "	") {
		let e = 4 - n % 4;
		r += " ".repeat(e), n += e;
	} else r += t, n++;
	return r;
}
function Oi(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1"), c = e[0].charAt(0) === "!";
	r.state.inLink = !0;
	let l = r.state.linkEmitted, u = r.state.inRawBlock;
	r.state.linkEmitted = !1;
	let d = r.inlineTokens(s), f = r.state.linkEmitted;
	if (r.state.linkEmitted = l, r.state.inLink = !1, !c) {
		if (f) {
			r.state.inRawBlock = u;
			return;
		}
		r.state.linkEmitted = !0;
	}
	return {
		type: c ? "image" : "link",
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: d
	};
}
function ki(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split("\n").map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return e.slice(Math.min(r.length, i.length));
	}).join("\n");
}
function Ai(e, t, n, r) {
	if (!t.includes("<")) return !1;
	for (let i = 0; i < t.length; i++) {
		if (t[i] === "\\") {
			i++;
			continue;
		}
		if (t[i] === "`") {
			let e = r.inline.code.exec(t.slice(i));
			if (e) {
				i += e[0].length - 1;
				continue;
			}
		}
		if (t[i] !== "<") continue;
		let a = e.slice(n + i), o = r.inline.tag.exec(a) || r.inline.autolink.exec(a);
		if (o) {
			if (o[0].length > t.length - i) return !0;
			i += o[0].length - 1;
		}
	}
	return !1;
}
var ji = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || Qn;
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
			let e = this.options.pedantic ? t[0] : wi(t[0]);
			return {
				type: "code",
				raw: e,
				codeBlockStyle: "indented",
				text: e.replace(this.rules.other.codeRemoveIndent, "")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = ki(e, t[3] || "", this.rules);
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
				let t = Ci(e, "#");
				(this.options.pedantic || !t || this.rules.other.endingSpaceTabChar.test(t)) && (e = t.trim());
			}
			return {
				type: "heading",
				raw: Ci(t[0], "\n"),
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
			raw: Ci(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = Ci(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o = 0;
				for (; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
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
					let t = u, a = e.join("\n"), o = t.raw + "\n" + a.replace(this.rules.other.blockquoteSetextReplace2, ""), s = this.blockquote(o);
					i[i.length - 1] = s;
					let c = o.substring(s.raw.length).replace(/^\n/, ""), l = c ? c.split("\n").length : 0, d = l ? e.slice(0, -l) : e;
					d.length > 0 && (n = `${n}
${d.join("\n")}`), r = r.substring(0, r.length - t.text.length) + s.text;
					break;
				}
				if (u?.type === "list") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split("\n");
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
				let c = t[2].split("\n", 1)[0], l = t[1].length, u = this.options.pedantic ? Di(c, l) : c.replace(this.rules.other.leadingSpaceTab, (e) => Di(e, l)), d = e.split("\n", 1)[0], f = !u.trim(), p = 0;
				if (this.options.pedantic ? (p = 2, s = u.trimStart()) : f ? p = l + 1 : (p = u.search(this.rules.other.nonSpaceChar), p = p > 4 ? 1 : p, s = u.slice(p), p += l), f && this.rules.other.blankLine.test(d) && (r += d + "\n", e = e.substring(d.length + 1), n = !0), !n) {
					let t = this.rules.other.nextBulletRegex(p), n = this.rules.other.hrRegex(p), i = this.rules.other.fencesBeginRegex(p), a = this.rules.other.headingBeginRegex(p), o = this.rules.other.htmlBeginRegex(p), c = this.rules.other.blockquoteBeginRegex(p);
					for (; e;) {
						let l = e.split("\n", 1)[0], m;
						if (d = l, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), m = d) : m = d.replace(this.rules.other.leadingSpaceTab, (e) => e.replace(this.rules.other.tabCharGlobal, "    ")), i.test(d) || a.test(d) || o.test(d) || c.test(d) || t.test(d) || n.test(d)) break;
						if (m.search(this.rules.other.nonSpaceChar) >= p || !d.trim()) s += "\n" + m.slice(p);
						else {
							if (f || u.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(u) || a.test(u) || n.test(u)) break;
							s += "\n" + d;
						}
						f = !d.trim(), r += l + "\n", e = e.substring(l.length + 1), u = m.slice(p);
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
			for (let e of i.items) if (this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []), !i.loose) {
				let t = e.tokens.filter((e) => e.type === "space");
				i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
			}
			for (let e of i.items) {
				let t = e.tokens[0];
				if (e.task && (t?.type === "text" || t?.type === "paragraph")) {
					e.text = e.text.replace(this.rules.other.listReplaceTask, ""), t.raw = t.raw.replace(this.rules.other.listReplaceTask, ""), t.text = t.text.replace(this.rules.other.listReplaceTask, "");
					for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
						this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, "");
						break;
					}
					let n = this.rules.other.listTaskCheckbox.exec(e.raw);
					if (n) {
						let t = {
							type: "checkbox",
							raw: n[0] + " ",
							checked: n[0] !== "[ ]"
						};
						e.checked = t.checked, i.loose ? e.tokens[0] && ["paragraph", "text"].includes(e.tokens[0].type) && "tokens" in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = t.raw + e.tokens[0].raw, e.tokens[0].text = t.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(t)) : e.tokens.unshift({
							type: "paragraph",
							raw: t.raw,
							text: t.raw,
							tokens: [t]
						}) : e.tokens.unshift(t);
					}
				} else e.task &&= !1;
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
		if (t) {
			let e = wi(t[0]);
			return {
				type: "html",
				block: !0,
				raw: e,
				pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
				text: e
			};
		}
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			if (!this.rules.other.startAngleBracket.test(t[2]) && Ei(t[2], "()") !== -1) return;
			let e = Ti(t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: Ci(t[0], "\n"),
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = Si(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
			type: "table",
			raw: Ci(t[0], "\n"),
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
			for (let e of i) a.rows.push(Si(e, a.header.length).map((e, t) => ({
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
				raw: Ci(t[0], "\n"),
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
		if (this.lexer.state.linkParenPossible === !1) return;
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let n = t[0].charAt(0) === "!" ? 2 : 1;
			if (!this.options.pedantic && Ai(e, t[1], n, this.rules)) return;
			let r = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
				if (!this.rules.other.endAngleBracket.test(r)) return;
				let e = Ci(r.slice(0, -1), "\\");
				if ((r.length - e.length) % 2 == 0) return;
			} else {
				let e = Ei(t[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
				}
			}
			let i = t[2], a = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(i);
				e && (i = e[1], a = e[3]);
			} else a = t[3] ? t[3].slice(1, -1) : "";
			return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (i = this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? i.slice(1) : i.slice(1, -1)), Oi(t, {
				href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
				title: a && a.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let r = n[0].charAt(0) === "!" ? 2 : 1;
			if (!this.options.pedantic && Ai(e, n[1], r, this.rules)) return;
			let i = t[Ti((n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "))];
			if (!i) {
				let e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return Oi(n, i, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))) {
			let i = [...r[0]].length - 1, a, o, s = i, c = 0, l = r[0][0], u = n === l, d = l === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (d.lastIndex = 0, t = t.slice(-1 * e.length + i); (r = d.exec(t)) !== null;) {
				if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
				if (o = [...a].length, r[3] || r[4]) {
					s += o;
					continue;
				}
				if (r[5] || r[6]) {
					if (i % 3 && !((i + o) % 3)) {
						c += o;
						continue;
					}
					if (u) break;
				}
				if (s -= o, s > 0) continue;
				o = Math.min(o, o + s + c);
				let t = [...r[0]][0].length, n = e.slice(0, i + r.index + t + o);
				if (Math.min(i, o) % 2) {
					let e = n.slice(1, -1);
					return {
						type: "em",
						raw: n,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let l = n.slice(2, -2);
				return {
					type: "strong",
					raw: n,
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
			for (s.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = s.exec(t)) !== null;) {
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
				autolink: !0,
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
				autolink: !0,
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
				text: e ? t[0] : bi(t[0]),
				escaped: e
			};
		}
	}
}, K = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || Qn, this.options.tokenizer = this.options.tokenizer || new ji(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			linkEmitted: !1,
			linkParenPossible: !0,
			top: !0
		};
		let t = {
			other: W,
			block: gi.normal,
			inline: _i.normal
		};
		this.options.pedantic ? (t.block = gi.pedantic, t.inline = _i.pedantic) : this.options.gfm && (t.block = gi.gfm, t.inline = this.options.breaks ? _i.breaks : _i.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: gi,
			inline: _i
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(W.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(W.tabCharGlobal, "    ").replace(W.spaceLine, ""));
		let r = 1 / 0;
		for (; e;) {
			if (e.length < r) r = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			let i;
			if (this.options.extensions?.block?.some((n) => (i = n.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1)) continue;
			if (i = this.tokenizer.space(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				i.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(i);
				continue;
			}
			if (i = this.tokenizer.code(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.text, this.inlineQueue.at(-1).src = n.text) : t.push(i);
				continue;
			}
			if ((i = this.tokenizer.fences(e)) || (i = this.tokenizer.heading(e)) || (i = this.tokenizer.hr(e)) || (i = this.tokenizer.blockquote(e)) || (i = this.tokenizer.list(e)) || (i = this.tokenizer.html(e))) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.def(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
					href: i.href,
					title: i.title
				}, t.push(i));
				continue;
			}
			if ((i = this.tokenizer.table(e)) || (i = this.tokenizer.lheading(e))) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			let a = e;
			if (this.options.extensions?.startBlock) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1));
			}
			if (this.state.top && (i = this.tokenizer.paragraph(a))) {
				let r = t.at(-1);
				n && r?.type === "paragraph" ? (r.raw += (r.raw.endsWith("\n") ? "" : "\n") + i.raw, r.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r.text) : t.push(i), n = a.length !== e.length, e = e.substring(i.raw.length);
			} else if (i = this.tokenizer.text(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(i);
			} else if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
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
	linkInText(e) {
		if (!e.includes("[")) return !1;
		let t = this.tokenizer.rules.inline.link;
		for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip)) if (t.test(n[0]) && e.charAt(n.index - 1) !== "!") return !0;
		for (let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
			let e = t[0], n = e.lastIndexOf("[");
			if (e.charAt(0) !== "!" && Object.hasOwn(this.tokens.links, Ti(e.slice(n + 1, -1))) && !(n > 1 && this.linkInText(e.slice(1, n - 1)))) return !0;
		}
		return !1;
	}
	inlineTokens(e, t = []) {
		this.tokenizer.lexer = this;
		let n = this.state.linkParenPossible;
		this.state.linkParenPossible = n && e.includes(")");
		try {
			return this.#e(e, t);
		} finally {
			this.state.linkParenPossible = n;
		}
	}
	#e(e, t) {
		let n = e;
		if (this.tokens.links && e.includes("[")) {
			let e = this.tokenizer.rules.inline.reflinkSearch, t = (n) => {
				let r = n.lastIndexOf("[");
				if (!Object.hasOwn(this.tokens.links, Ti(n.slice(r + 1, -1)))) return n;
				if (r > 1 && n.charAt(0) !== "!") {
					let i = n.slice(1, r - 1);
					if (this.linkInText(i)) return "[" + i.replace(e, t) + "][" + "a".repeat(n.length - r - 2) + "]";
				}
				return "[" + "a".repeat(n.length - 2) + "]";
			};
			n = n.replace(e, t);
		}
		n = n.replace(this.tokenizer.rules.inline.anyPunctuation, (e) => "+".repeat(e.length)), n = n.replace(this.tokenizer.rules.inline.blockSkip, (e, t, n) => {
			let r = n ? n.length : 0;
			return e.slice(0, r) + "[" + "a".repeat(e.length - r - 2) + "]";
		}), n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
		let r = !1, i = "", a = 1 / 0;
		for (; e;) {
			if (e.length < a) a = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			r || (i = ""), r = !1;
			let o;
			if (this.options.extensions?.inline?.some((n) => (o = n.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), !0) : !1)) continue;
			if ((o = this.tokenizer.escape(e)) || (o = this.tokenizer.tag(e)) || (o = this.tokenizer.link(e))) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(o.raw.length);
				let n = t.at(-1);
				o.type === "text" && n?.type === "text" ? (n.raw += o.raw, n.text += o.text) : t.push(o);
				continue;
			}
			if ((o = this.tokenizer.emStrong(e, n, i)) || (o = this.tokenizer.codespan(e)) || (o = this.tokenizer.br(e)) || (o = this.tokenizer.del(e, n, i)) || (o = this.tokenizer.autolink(e)) || !this.state.inLink && (o = this.tokenizer.url(e))) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			let s = e;
			if (this.options.extensions?.startInline) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1));
			}
			if (o = this.tokenizer.inlineText(s)) {
				e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (i = o.raw.slice(-1)), r = !0;
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += o.raw, n.text += o.text) : t.push(o);
			} else if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return t;
	}
	infiniteLoopError(e) {
		let t = "Infinite loop on byte: " + e;
		if (this.options.silent) console.error(t);
		else throw Error(t);
	}
}, Mi = class {
	options;
	parser;
	constructor(e) {
		this.options = e || Qn;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(W.notSpaceStart)?.[0], i = e ? e.replace(W.endingNewline, "") + "\n" : "";
		return r ? "<pre><code class=\"language-" + G(r) + "\">" + (n ? i : G(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : G(i, !0)) + "</code></pre>\n";
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
		return `<code>${G(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, text: n, tokens: r, autolink: i }) {
		let a = i ? G(n, !0) : this.parser.parseInline(r), o = xi(e);
		if (o === null) return a;
		e = G(o, i);
		let s = "<a href=\"" + e + "\"";
		return t && (s += " title=\"" + G(t) + "\""), s += ">" + a + "</a>", s;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = xi(e);
		if (i === null) return G(n);
		e = i;
		let a = `<img src="${G(e)}" alt="${G(n)}"`;
		return t && (a += ` title="${G(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : G(e.text);
	}
}, Ni = class {
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
}, q = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || Qn, this.options.renderer = this.options.renderer || new Mi(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ni();
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
					"checkbox",
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
					"checkbox",
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
}, Pi = class {
	options;
	block;
	constructor(e) {
		this.options = e || Qn;
	}
	static passThroughHooks = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
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
	provideLexer(e = this.block) {
		return e ? K.lex : K.lexInline;
	}
	provideParser(e = this.block) {
		return e ? q.parse : q.parseInline;
	}
}, Fi = new class {
	defaults = Zn();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = q;
	Renderer = Mi;
	TextRenderer = Ni;
	Lexer = K;
	Tokenizer = ji;
	Hooks = Pi;
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
					let i = e[r].flat(1 / 0);
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
				let t = this.defaults.renderer || new Mi(this.defaults);
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
				let t = this.defaults.tokenizer || new ji(this.defaults);
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
				let t = this.defaults.hooks || new Pi();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					t[r] = Pi.passThroughHooks.has(n) ? (e) => {
						if (this.defaults.async && Pi.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : (...e) => {
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
		return K.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return q.parse(e, t ?? this.defaults);
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
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer(e) : e ? K.lex : K.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser(e) : e ? q.parse : q.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer(e) : e ? K.lex : K.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser(e) : e ? q.parse : q.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + G(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}();
function J(e, t) {
	return Fi.parse(e, t);
}
J.options = J.setOptions = function(e) {
	return Fi.setOptions(e), J.defaults = Fi.defaults, $n(J.defaults), J;
}, J.getDefaults = Zn, J.defaults = Qn;
function Ii(...e) {
	return Fi.use(...e), J.defaults = Fi.defaults, $n(J.defaults), J;
}
J.use = Ii, J.walkTokens = function(e, t) {
	return Fi.walkTokens(e, t);
}, J.parseInline = Fi.parseInline, J.Parser = q, J.parser = q.parse, J.Renderer = Mi, J.TextRenderer = Ni, J.Lexer = K, J.lexer = K.lex, J.Tokenizer = ji, J.Hooks = Pi, J.parse = J, J.options, J.setOptions, J.walkTokens, J.parseInline, q.parse, K.lex;
//#endregion
//#region src/utils/warnings/shared.ts
function Li(e) {
	let t = document.createElement("template");
	t.innerHTML = e, t.content.querySelectorAll("script,style,iframe,object,embed,form,meta,base").forEach((e) => e.remove()), t.content.querySelectorAll("*").forEach((e) => {
		if (Array.from(e.attributes).forEach((t) => {
			/^on/i.test(t.name) && e.removeAttribute(t.name);
		}), e.tagName === "A") {
			let t = e.getAttribute("href") ?? "";
			/^https?:\/\//i.test(t) || e.removeAttribute("href");
		}
	});
	let n = document.createElement("div");
	return n.appendChild(t.content), n.innerHTML;
}
//#endregion
//#region src/utils/warnings/legacy.ts
function Ri(e, t, n) {
	let r = [];
	if (e.attributes.warning_levels && Array.isArray(e.attributes.warning_levels)) for (let t = 0; t < e.attributes.warning_levels.length; t++) r.push({
		id: `warning_${t}`,
		title: e.attributes.warning_levels[t],
		level: e.attributes.warning_levels[t],
		type: e.attributes.warning_types[t],
		description: e.attributes.warning_texts[t],
		valid_from: e.attributes.warning_valid_from[t],
		valid_to: e.attributes.warning_valid_to[t],
		link: e.attributes.warning_links[t],
		regions: [],
		phenomena: []
	});
	if (r.length === 0) return null;
	let i = Math.max(...r.map((e) => e.level || 0)), a = i >= 4 ? "danger" : i >= 3 ? "severe" : i >= 2 ? "warning" : "info", o = (e) => e >= 4 ? "#dc143c" : e >= 3 ? "#e17055" : e >= 2 ? "#f6c90e" : "var(--primary-text-color, #fff)", s = {
		storm: "mdi:weather-lightning",
		thunderstorms: "mdi:weather-lightning-rainy",
		rain: "mdi:weather-pouring",
		snow: "mdi:snowflake",
		wind: "mdi:weather-windy",
		fog: "mdi:weather-fog",
		heat: "mdi:weather-sunny-alert",
		heat_waves: "mdi:thermometer-high",
		cold: "mdi:snowflake-alert",
		frost: "mdi:snowflake-thermometer",
		thaw: "mdi:thermometer-high",
		flood: "mdi:waves-arrow-up",
		drought: "mdi:water-off",
		avalanches: "mdi:snowflake-alert",
		slippery_roads: "mdi:car-brake-alert",
		forest_fires: "mdi:fire-alert",
		earthquakes: "mdi:pulse",
		default: "mdi:alert"
	};
	return x`
    <div class="warning-section ${a}">
      <strong>${I("warning.weather_warning")}</strong>
      <ul style="margin: 6px 0 0 0; padding-left: 18px;">
        ${r.map((e) => x`
            <li style="margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <ha-icon
                  icon="${s[e.type?.toLowerCase?.()] || s.default}"
                  style="color: ${o(e.level)};"
                ></ha-icon>
                <span style="font-weight: bold;">${e.title}</span>
                ${e.link ? x`
                        <a
                          href="${e.link}"
                          target="_blank"
                          rel="noopener noreferrer"
                          style="color: var(--primary-text-color, #fff); text-decoration: underline; display: flex; align-items: center;"
                        >
                          <ha-icon icon="mdi:link-variant" style="font-size: 16px;"></ha-icon>
                        </a>
                      ` : ""}
                <button
                  @click=${() => n(e.id)}
                  style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;"
                  title="${t[e.id] ? I("collapse") : I("expand")}"
                  aria-label="${t[e.id] ? I("collapse") : I("expand")}"
                >
                  <ha-icon
                    icon="${t[e.id] ? "mdi:chevron-up" : "mdi:chevron-down"}"
                  ></ha-icon>
                </button>
              </div>
              ${t[e.id] && e.description ? x`
                      <div>
                        <strong>${I("warning.valid_from")}: </strong>
                        ${e.valid_from ? new Date(e.valid_from).toLocaleString() : I("unknown")}
                        <strong>${I("warning.valid_to")}: </strong>
                        ${e.valid_to ? new Date(e.valid_to).toLocaleString() : I("unknown")}
                      </div>
                      <div
                        style="font-size: 14px; line-height: 1.4; margin-top: 4px;"
                        .innerHTML="${Li(String(J.parse(e.description || "")))}"
                      ></div>
                    ` : ""}
            </li>
          `)}
      </ul>
    </div>
  `;
}
//#endregion
//#region src/utils/warnings/ranked.ts
function zi(e) {
	return {
		yellow: "#f6c90e",
		orange: "#e17055",
		red: "#dc143c",
		violet: "#8e44ad",
		gray: "var(--disabled-text-color, #9e9e9e)"
	}[e?.toLowerCase()] ?? "var(--primary-text-color, #fff)";
}
function Bi(e, t, n, r, i = 0) {
	let a = e.attributes;
	if (!a.has_warning) return null;
	let o = zi(a.icon_color), s = a.icon || "mdi:alert", c = a.warning_type || a.level_name || e.state, l = !!n[t], u = !!(a.html_text || a.text || a.links?.length);
	return x`
    <li style="margin-bottom: 12px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <ha-icon icon="${s}" style="color: ${o}; flex-shrink: 0;"></ha-icon>
        <div
          style="flex: 1; min-width: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 4px 8px;"
        >
          <span style="font-weight: bold;">${c}</span>
          ${a.level_name ? x`<span style="font-size: 12px; opacity: 0.8;">(${a.level_name})</span>` : ""}
          ${i > 0 ? x`<span
                  style="font-size: 12px; opacity: 0.75;"
                  title="${I("warning.warnings_additional", { count: i })}"
                >
                  +${i}
                </span>` : ""}
        </div>
        ${u ? x`
                <button
                  @click=${() => r(t)}
                  style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;flex-shrink:0;"
                  title="${I(l ? "collapse" : "expand")}"
                  aria-label="${I(l ? "collapse" : "expand")}"
                >
                  <ha-icon icon="${l ? "mdi:chevron-up" : "mdi:chevron-down"}"></ha-icon>
                </button>
              ` : ""}
      </div>
      ${l ? x`
              <div style="margin-top: 6px; font-size: 13px; opacity: 0.85;">
                ${a.valid_from || a.valid_to ? x`
                        <div style="margin-bottom: 4px;">
                          ${a.valid_from ? x`<strong>${I("warning.valid_from")}: </strong>${new Date(a.valid_from).toLocaleString()}&nbsp;` : ""}
                          ${a.valid_to ? x`<strong>${I("warning.valid_to")}: </strong>${new Date(a.valid_to).toLocaleString()}` : ""}
                        </div>
                      ` : ""}
                ${a.html_text ? x`<div
                        style="line-height: 1.4; margin-bottom: 4px;"
                        .innerHTML="${Li(a.html_text)}"
                      ></div>` : a.text ? x`<div style="line-height: 1.4; margin-bottom: 4px;">${a.text}</div>` : ""}
                ${a.links?.length ? x`
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                          ${a.links.map((e) => x`
                              <a
                                href="${e.url.startsWith("http") ? e.url : e.alt_url ?? e.url}"
                                target="_blank"
                                rel="noopener noreferrer"
                                style="color: var(--primary-text-color, #fff); text-decoration: underline; display: flex; align-items: center; gap: 4px;"
                              >
                                <ha-icon icon="mdi:link-variant" style="font-size: 14px;"></ha-icon>
                                ${e.text}
                              </a>
                            `)}
                        </div>
                      ` : ""}
              </div>
            ` : ""}
    </li>
  `;
}
function Vi(e, t, n, r, i) {
	let a = e.attributes;
	if (!a.has_warning) return null;
	let o = {
		red: "danger",
		violet: "danger",
		orange: "severe",
		yellow: "warning"
	}[a.icon_color?.toLowerCase()] ?? "info", s = !!t?.attributes?.has_warning, c = !!n?.attributes?.has_warning, l = a.additional_warning_count ?? 0, u = Math.max(l - +!!s - !!c, 0), d = 1 + l;
	return x`
    <div class="warning-section ${o}">
      <strong>${d === 1 ? I("warning.weather_warning") : I("warning.weather_warnings", { count: d })}</strong>
      <ul style="margin: 6px 0 0 0; padding-left: 18px;">
        ${[
		Bi(e, "primary", r, i, u),
		t ? Bi(t, "secondary", r, i) : null,
		n ? Bi(n, "tertiary", r, i) : null
	].filter(Boolean)}
      </ul>
    </div>
  `;
}
//#endregion
//#region src/utils/warning-renderer.ts
function Hi(e, t, n, r, i, a) {
	return t && t.attributes?.has_warning !== void 0 ? Vi(t, n, r, i, a) : e ? Ri(e, i, a) : null;
}
//#endregion
//#region src/utils/weather-forecast.ts
var Ui = 2e4;
function Wi(e, t) {
	if (typeof window < "u") {
		try {
			if (window.localStorage.getItem("swissweather-debug") !== "true") return;
		} catch (e) {
			console.warn("[SwissWeather] Cannot read forecast debug preference:", e);
			return;
		}
		console.debug(`[SwissWeather forecast] ${e}`, t);
	}
}
async function Gi(e, t, n) {
	let r = {
		type: "call_service",
		domain: "weather",
		service: "get_forecasts",
		service_data: {
			entity_id: t,
			type: n
		},
		return_response: !0
	}, i, a = Date.now();
	Wi("request started", {
		entityId: t,
		forecastType: n
	});
	try {
		let o = new Promise((e, t) => {
			i = setTimeout(() => t(/* @__PURE__ */ Error(`Forecast request timed out after ${Ui}ms`)), Ui);
		}), s = (await Promise.race([e.callWS(r), o]))?.response?.[t]?.forecast;
		return Wi("request completed", {
			entityId: t,
			forecastType: n,
			count: Array.isArray(s) ? s.length : 0,
			durationMs: Date.now() - a
		}), Array.isArray(s) ? s : [];
	} catch (e) {
		throw Wi("request failed", {
			entityId: t,
			forecastType: n,
			durationMs: Date.now() - a,
			error: e
		}), e;
	} finally {
		i !== void 0 && clearTimeout(i);
	}
}
async function Ki(e, t) {
	let [n, r] = await Promise.allSettled([Gi(e, t, "daily"), Gi(e, t, "hourly")]);
	return {
		daily: n.status === "fulfilled" ? { forecast: n.value } : {
			forecast: [],
			error: n.reason
		},
		hourly: r.status === "fulfilled" ? { forecast: r.value } : {
			forecast: [],
			error: r.reason
		}
	};
}
//#endregion
//#region src/cards/full-card/chart-order.ts
var qi = [
	"temperature",
	"precipitation",
	"sunshine",
	"wind",
	"forecast"
];
function Ji(e) {
	let t = Array.isArray(e.chartOrder) ? [...e.chartOrder] : [...qi];
	e.showForecast !== !1 && !t.includes("forecast") && t.push("forecast");
	let n = /* @__PURE__ */ new Set();
	e.showTemperature !== !1 && n.add("temperature"), e.showPrecipitation !== !1 && n.add("precipitation"), e.showSunshine !== !1 && n.add("sunshine"), e.showWind !== !1 && n.add("wind");
	let r = !1;
	return t.map((e) => {
		let t = n.has(e) && !r;
		return t && (r = !0), {
			chart: e,
			showHourlyTitle: t
		};
	});
}
//#endregion
//#region src/cards/full-card/swissweather-card.ts
P({ loader: (e) => M(e) });
var Y = class extends T {
	constructor(...e) {
		super(...e), this._forecast = [], this._hourlyForecast = [], this._forecastLoading = !1, this._forecastLoaded = !1, this._hourlyForecastError = !1, this._openWarnings = {}, this._forecastRequestId = 0, this._toggleWarning = (e) => {
			this._openWarnings = {
				...this._openWarnings,
				[e]: !this._openWarnings[e]
			}, this.requestUpdate();
		}, this._formatForecastDate = (e) => gn(e, this.hass?.selectedLanguage || this.hass?.language || "en");
	}
	updated(e) {
		super.updated(e), e.has("_hourlyForecast") && Wi("full card rendered", {
			entityId: this.config?.entity,
			hourlyCount: this._hourlyForecast.length,
			dailyCount: this._forecast.length
		}), this.hass && this.config && this.config.entity && this._lastEntityId !== this.config.entity && (this._lastEntityId = this.config.entity, this._loadForecast(this.config.entity));
	}
	async _loadForecast(e) {
		if (!this.hass || !e) return;
		let t = ++this._forecastRequestId;
		this._forecastLoading = !0, this._forecastLoaded = !1, this._hourlyForecastError = !1;
		try {
			let n = await Ki(this.hass, e);
			if (t !== this._forecastRequestId) return;
			this._forecast = n.daily.forecast, this._hourlyForecast = n.hourly.forecast, this._hourlyForecastError = !!n.hourly.error, n.daily.error && console.warn("⚠️ Daily forecast loading failed:", n.daily.error), n.hourly.error && console.warn("⚠️ Hourly forecast loading failed:", n.hourly.error);
		} catch (e) {
			if (t !== this._forecastRequestId) return;
			console.error("⚠️ Forecast loading failed:", e), this._forecast = [], this._hourlyForecast = [], this._hourlyForecastError = !0;
		} finally {
			t === this._forecastRequestId && (this._forecastLoading = !1, this._forecastLoaded = !0);
		}
	}
	static {
		this.styles = hn;
	}
	setConfig(e) {
		if (!e.entity) throw Error("You need to define an entity");
		this.config = e;
	}
	getCardSize() {
		return 8;
	}
	static getStubConfig() {
		return {
			type: "custom:" + fn,
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
		return document.createElement(pn);
	}
	static getConfigSchema() {
		return B;
	}
	_getEntityState(e) {
		return this.hass?.states[e];
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
	_renderWarningSection(e, t, n, r) {
		return Hi(e, t, n, r, this._openWarnings, this._toggleWarning);
	}
	_renderForecastTemperature(e) {
		return this._hourlyForecast.length > 0 ? x`<forecast-temperature-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_temperature=${this.config.show_temperature !== !1}
          ._t=${R}
        ></forecast-temperature-chart>` : x``;
	}
	_renderForecastPrecipitation(e) {
		return this._hourlyForecast.length > 0 ? x`<precipitation-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_precipitation=${this.config.show_precipitation !== !1}
          ._t=${R}
        ></precipitation-chart>` : x``;
	}
	_renderForecastSunshine(e, t, n) {
		return this._hourlyForecast.length > 0 ? x`<sunshine-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${n}
          .show_sunshine=${this.config.show_sunshine !== !1}
          .weatherEntity=${e}
          .sun_entity=${t}
          ._t=${R}
        ></sunshine-chart>` : x``;
	}
	_renderForecastWind(e) {
		return this._hourlyForecast.length > 0 ? x`<wind-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_wind=${this.config.show_wind !== !1}
          ._t=${R}
        ></wind-chart>` : x``;
	}
	_renderCurrentWeather(e, t, n, r, i, a) {
		return x`
      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${R("current_weather")}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(e)} km/h</div>
          <div class="metric-label">${R("wind")}</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${t}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(t)}</div>
          <div class="metric-label">${R("direction")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${n}%</div>
          <div class="metric-label">${R("humidity")}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${r} hPa</div>
          <div class="metric-label">${R("pressure")}</div>
        </div>
        ${a ? x`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                  <div class="metric-value">${parseFloat(a.state).toFixed(1)}h</div>
                  <div class="metric-label">${R("sunshine")}</div>
                </div>
              ` : ""}
        ${i > 0 ? x`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                  <div class="metric-value">${i} km</div>
                  <div class="metric-label">${R("visibility")}</div>
                </div>
              ` : ""}
      </div>
    `;
	}
	_renderCurrentWeatherSection(e, t, n, r, i, a) {
		return x`
      <div class="current-weather-section">
        ${this.config.compact_mode === !0 ? x`
                ${this._renderCurrentWeatherCompactMode(e, t, n, r, i, a)}
              ` : x`
                ${this._renderCurrentWeather(e, t, n, r, i, a)}
              `}
      </div>
    `;
	}
	render() {
		if (!this.hass || !this.config) return x``;
		let e = (this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2);
		e !== this._loadedLang && (this._loadedLang = e, F(e).then(() => this.requestUpdate()));
		let t = this._getEntityState(this.config.entity), n = this._getEntityState(this.config.sun_entity || "sun.sun");
		if (!t) return x`<div>Entity not found: ${this.config.entity}</div>`;
		let r = this.config.show_location !== !1, i = this.config.location || R("location"), a = t.attributes.temperature, o = t.state, s = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null, c = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null, l = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null, u = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null, d = this.config.primary_warning_entity ? this._getEntityState(this.config.primary_warning_entity) : null, f = this.config.secondary_warning_entity ? this._getEntityState(this.config.secondary_warning_entity) : null, p = this.config.tertiary_warning_entity ? this._getEntityState(this.config.tertiary_warning_entity) : null, m = s ? parseFloat(s.state) : t.attributes.wind_speed || 0, h = c ? parseFloat(c.state) : t.attributes.wind_bearing || 0, g = t.attributes.humidity || 0, ee = t.attributes.pressure || 0, te = t.attributes.visibility || 0, _ = this.config.forecast_hours ?? 6, ne = Ji({
			chartOrder: this.config.chart_order,
			showTemperature: this.config.show_temperature,
			showPrecipitation: this.config.show_precipitation,
			showSunshine: this.config.show_sunshine,
			showWind: this.config.show_wind,
			showForecast: this.config.show_forecast
		}).map(({ chart: e, showHourlyTitle: r }) => {
			let i = "", a = r && this._hourlyForecast.length > 0, o = r && this._forecastLoaded && this._hourlyForecast.length === 0 && !this._forecastLoading;
			switch (e) {
				case "temperature":
					i = this._renderForecastTemperature(_);
					break;
				case "precipitation":
					i = this._renderForecastPrecipitation(_);
					break;
				case "sunshine":
					i = this._renderForecastSunshine(t, n, _);
					break;
				case "wind":
					i = this._renderForecastWind(_);
					break;
				case "forecast": i = this._showDailyForecast();
			}
			return x`
        ${a ? x`
                <div class="section-title hourly-forecast-title">
                  <ha-icon icon="mdi:clock"></ha-icon>
                  ${R("hourly_charts.forecast_hours", { hours: _ })}
                </div>
              ` : ""}
        ${o ? x`<div class="forecast-error">
                ${R(this._hourlyForecastError ? "hourly_charts.forecast_request_failed" : "hourly_charts.no_forecast_data")}
              </div>` : ""}
        ${i}
      `;
		});
		return x`
      ${r ? x`
              <div class="header">
                <div class="location">${i}</div>
              </div>
            ` : ""}
      ${this.config.show_warnings ? this._renderWarningSection(u, d, f, p) : ""}

      <div class="current-weather">
        <div>
          <div class="current-temp">${a}°</div>
          <div class="condition">${R(o)}</div>
        </div>
        <div class="current-details">
          <div
            class="weather-icon"
            style="color: var(--icon-color, #fff); width: 64px; height: 64px;"
          >
            ${qn(o, this.config.enable_animate_weather_icons ? "animated" : "mdi", "64px", Yn(this.hass, this.config))}
          </div>
        </div>
      </div>

      ${this._renderCurrentWeatherSection(m, h, g, ee, te, l)}
      ${ne}
    `;
	}
	_renderCurrentWeatherCompactMode(e, t, n, r, i, a) {
		return x`
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
        ${a ? x`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                  <div class="metric-value">${parseFloat(a.state).toFixed(1)}h</div>
                </div>
              ` : ""}
        ${i > 0 ? x`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                  <div class="metric-value">${i} km</div>
                </div>
              ` : ""}
      </div>
    `;
	}
	_showDailyForecast() {
		return this.config.show_forecast === !1 ? x`` : this.config.compact_mode === !0 ? this._renderDailyForecastDiagram() : this._renderDailyForecastChart();
	}
	_renderDailyForecastChart() {
		return this._forecast.length > 0 ? x`<daily-forecast-chart
          .forecast=${this._forecast}
          .forecastLoading=${this._forecastLoading}
          .show_forecast=${this.config.show_forecast !== !1}
          .config=${this.config}
          ._t=${R}
          .getWeatherIcon=${qn}
          .formatDate=${this._formatForecastDate}
        ></daily-forecast-chart>` : x``;
	}
	_renderDailyForecastDiagram() {
		return this._forecast.length > 0 && this._hourlyForecast.length > 0 ? x`<daily-forecast-diagram
          .language=${this.hass.selectedLanguage || this.hass.language || "en"}
          .config=${this.config}
          .forecast=${[...this._forecast?.slice(0, 7) ?? []]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${R}
          .getWeatherIcon=${qn}
          .standalone=${!1}
        ></daily-forecast-diagram>` : this._forecast.length > 0 ? this._renderDailyForecastChart() : x``;
	}
};
A([D({ attribute: !1 }), k("design:type", Object)], Y.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], Y.prototype, "config", void 0), A([O(), k("design:type", Array)], Y.prototype, "_forecast", void 0), A([O(), k("design:type", Array)], Y.prototype, "_hourlyForecast", void 0), A([O(), k("design:type", Object)], Y.prototype, "_forecastLoading", void 0), A([O(), k("design:type", Object)], Y.prototype, "_forecastLoaded", void 0), A([O(), k("design:type", Object)], Y.prototype, "_hourlyForecastError", void 0), A([O(), k("design:type", typeof Record > "u" ? Object : Record)], Y.prototype, "_openWarnings", void 0), Y = A([E(fn)], Y);
//#endregion
//#region src/cards/forecast-diagram/const.ts
var Yi = `${dn}-forecast-diagram-card`, Xi = `${Yi}-editor`, Zi = [{
	name: "entity",
	required: !0,
	selector: { entity: { domain: "weather" } },
	description: "forecast_diagram.config.descr.entity"
}];
//#endregion
//#region src/cards/forecast-diagram/forecast-diagram-card-editor.ts
P({ loader: (e) => M(e) });
var Qi = class extends T {
	constructor() {
		super(), this._computeLabel = (e) => ({
			entity: I("forecast_diagram.config.entity"),
			sun_entity: I("forecast_diagram.config.sun_entity")
		})[e.name] || e.name, this._computeHelper = (e) => e.description ? I(e.description) : "";
	}
	setConfig(e) {
		let t = { ...e };
		for (let e of ["entity", "sun_entity"]) t[e] === "" && delete t[e];
		this._config = t, this.requestUpdate();
	}
	static get styles() {
		return o`
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
		if (!this.hass) return x`<div>Loading...</div>`;
		F((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0
		};
		return x`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Forecast Diagram Card</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${I("forecast_diagram.config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${[Zi.find((e) => e.name === "entity")].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Sensors -->
        <div class="group">
          <div class="group-title">${I("forecast_diagram.config.group_sensors") || "Sensors"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${[Zi.find((e) => e.name === "sun_entity")].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Configuration Preview -->
        ${this._config?.entity ? x`
                <div class="preview">
                  <div class="preview-title">📋 YAML-Config</div>
                  <div class="preview-config">${this._renderConfigPreview()}</div>
                </div>
              ` : ""}
      </div>
    `;
	}
	_renderConfigPreview() {
		let e = { ...this._config };
		return e.type ||= "custom:" + Yi, Object.keys(e).forEach((t) => {
			(e[t] === void 0 || e[t] === "") && delete e[t];
		}), Object.entries(e).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join("\n");
	}
	_valueChanged(e) {
		if (this._config ||= {
			type: `custom:${Yi}`,
			entity: "",
			sun_entity: ""
		}, e.type === "value-changed") {
			let t = {}, { ...n } = e.detail.value || {}, r = {
				...this._config,
				...n,
				...t,
				type: "custom:" + Yi
			};
			Object.keys(r).forEach((e) => {
				(r[e] === "" || r[e] === void 0) && delete r[e];
			}), this._config = r, z(this, "config-changed", { config: this._config });
		}
	}
};
//#endregion
//#region src/cards/forecast-diagram/forecast-diagram-card.ts
A([D({ attribute: !1 }), k("design:type", Object)], Qi.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], Qi.prototype, "lovelace", void 0), A([D({ attribute: !1 }), k("design:type", Object)], Qi.prototype, "_config", void 0), Qi = A([E(Xi), k("design:paramtypes", [])], Qi), P({ loader: (e) => M(e) });
var $i = class extends T {
	constructor() {
		super(), this._forecast = [], this._hourlyForecast = [], this._forecastLoading = !1;
	}
	connectedCallback() {
		super.connectedCallback();
	}
	updated(e) {
		super.updated(e);
	}
	static get styles() {
		return o`
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
		if (this.hass && this.config?.entity && !this._forecastLoading) {
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
			type: `custom:${Yi}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(Xi);
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
			min_columns: 12,
			max_columns: 48,
			min_rows: 3,
			max_rows: 8
		};
	}
	render() {
		let e = Jn(this.hass, this.config.entity), t = this.config?.grid_options?.rows ?? 3;
		return this.style.setProperty("--card-grid-rows", t.toString()), e ? !this._forecast || this._forecast.length === 0 ? x`<div>Loading forecast...</div>` : !this._hourlyForecast || this._hourlyForecast.length === 0 ? x`<div>Loading hourly forecast...</div>` : this._forecast.length > 0 && this._hourlyForecast.length > 0 ? x`<daily-forecast-diagram
          .language=${this.hass.selectedLanguage || this.hass.language || "en"}
          .config=${{
			...this.config,
			enable_animate_weather_icons: !0
		}}
          .forecast=${[...this._forecast?.slice(0, 7) ?? []]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${R}
          .getWeatherIcon=${qn}
          .standalone=${!0}
        ></daily-forecast-diagram>` : x`` : x`<div>Entity not found: ${this.config.entity}</div>`;
	}
};
A([D({ attribute: !1 }), k("design:type", Object)], $i.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], $i.prototype, "config", void 0), A([O(), k("design:type", Array)], $i.prototype, "_forecast", void 0), A([O(), k("design:type", Array)], $i.prototype, "_hourlyForecast", void 0), A([O(), k("design:type", Object)], $i.prototype, "_forecastLoading", void 0), $i = A([E(Yi), k("design:paramtypes", [])], $i);
//#endregion
//#region src/cards/animated-background/background/stable-random.ts
function X(e, t) {
	let n = Math.imul(e + 1, 2654435761) + Math.imul(t + 1, 2246822507);
	return n = Math.imul(n ^ n >>> 16, 2246822507), n = Math.imul(n ^ n >>> 13, 3266489909), ((n ^ n >>> 16) >>> 0) / 4294967296;
}
//#endregion
//#region src/cards/animated-background/background/shared.ts
var Z = (e) => S`
${Array.from({ length: Math.ceil(e / 10) }, (e, t) => t).map((e) => {
	let t = Math.floor(X(e, 1) * 100), n = Math.floor(X(e, 2) * 10), r = (t - 50) / 5 + e * Math.floor(X(e, 3) * 25), i = e * 100 + n, a = Math.floor(X(e, 4) * 2) + 1, o = 1 + X(e, 5), s = 44 + Math.floor(X(e, 6) * 90);
	return S`
    <g>
      <use href="#icon" x="${i}" y="${r}" width="80" height="40" transform="scale(${a})" opacity="0">
        <animate attributeName="opacity" values="0;${o};${o};0" dur="${s}s" repeatCount="indefinite"/>
      </use>
      <animateTransform attributeName="transform" type="translate" values="-150,20;450,20" dur="${s}s" repeatCount="indefinite"/>
    </g>
    `;
})}
  `, ea = (e) => S`
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
	let t = Math.floor(X(e, 1) * 100), n = Math.floor(X(e, 2) * 10), r = (t - 50) / 5 + e * Math.floor(X(e, 3) * 25);
	return S`
    <use href="#starIcon" x="0" y="0" transform="translate(${e * 100 + n},${r}) scale(0.5)"/>
    `;
})}
  </g>
`, ta = () => S`
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
`, na = (e) => S`
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
    </linearGradient>
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
  ${Z(e)}
  `, ra = (e) => S`
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
  ${Z(e)}
  `, ia = (e) => S`
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
  ${Z(e)}
  `, aa = (e) => S`
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
      <path fill="none" stroke="url(#fogLine1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30">
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </path>
    </g>
  </defs>
  <!-- background -->
  <rect width="100%" height="80%" fill="url(#background)" />
  ${Z(e)}
  `, oa = (e) => S`
  <defs>
    <linearGradient id="hailBackground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9eb7c6" />
      <stop offset="100%" stop-color="#87b9d3" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="hailGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <radialGradient id="hailStone" cx="32" cy="32" r="12" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#d9ecff"/>
      <stop offset="1" stop-color="#8ec0df"/>
    </radialGradient>
    <g id="hailIcon">
      <path fill="url(#hailGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <circle cx="24" cy="50" r="2.2" fill="url(#hailStone)">
        <animateTransform attributeName="transform" dur="0.9s" repeatCount="indefinite" type="translate" values="0 -7; 0 12"/>
        <animate attributeName="opacity" dur="0.9s" repeatCount="indefinite" values="1;1;0"/>
      </circle>
      <circle cx="32" cy="52" r="2.4" fill="url(#hailStone)">
        <animateTransform attributeName="transform" begin="-0.3s" dur="0.9s" repeatCount="indefinite" type="translate" values="0 -7; 0 12"/>
        <animate attributeName="opacity" begin="-0.3s" dur="0.9s" repeatCount="indefinite" values="1;1;0"/>
      </circle>
      <circle cx="40" cy="50" r="2.2" fill="url(#hailStone)">
        <animateTransform attributeName="transform" begin="-0.6s" dur="0.9s" repeatCount="indefinite" type="translate" values="0 -7; 0 12"/>
        <animate attributeName="opacity" begin="-0.6s" dur="0.9s" repeatCount="indefinite" values="1;1;0"/>
      </circle>
    </g>
  </defs>
  <rect width="100%" height="80%" fill="url(#hailBackground)" />
  ${Array.from({ length: Math.ceil(e / 100) }, (e, t) => t).map((e) => {
	let t = Math.floor(X(e, 1) * 100), n = Math.floor(X(e, 2) * 10), r = (t - 50) / 5 + e * Math.floor(X(e, 3) * 25);
	return S`
  <g>
    <use href="#hailIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(${e * 100 + n},${r})" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  `;
})}
  `, sa = (e) => S`
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
  ${Z(e)}

  `, ca = (e) => S`
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
	let t = Math.floor(X(e, 1) * 100), n = Math.floor(X(e, 2) * 10), r = (t - 50) / 5 + e * Math.floor(X(e, 3) * 25), i = e * 20 + n;
	return S`
    <line x1="${i}" y1="${r}" x2="${i}" y2="${r + 10}" stroke="url(#extremeRainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${r}; ${r + 20}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${r + 10}; ${r + 30}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="0.5s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, la = (e) => S`
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

  ${Z(e)}
  `, ua = (e) => S`
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

  ${Z(e)}
  `, da = () => S`
  <defs>
    <radialGradient id="lwStormFlashGradient" cx="50%" cy="20%" r="90%">
      <stop offset="0%" style="stop-color:#f5f8ff;stop-opacity:0.85" />
      <stop offset="20%" style="stop-color:#dbe8ff;stop-opacity:0.65" />
      <stop offset="55%" style="stop-color:#a8c6f0;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#7896c0;stop-opacity:0.08" />
    </radialGradient>

    <rect
      id="lwStormFlash"
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#lwStormFlashGradient)"
      opacity="0"
    >
      <animate
        attributeName="opacity"
        values="0;0.48;0;0.16;0;0"
        keyTimes="0;0.42;0.43;0.46;0.47;1"
        calcMode="discrete"
        dur="12s"
        repeatCount="indefinite"
      />
    </rect>

    <rect id="lwThunderRumble" x="0" y="0" width="100%" height="100%" fill="#dbe8ff" opacity="0">
      <animate
        attributeName="opacity"
        values="0;0;0.08;0.03;0"
        keyTimes="0;0.4;0.43;0.55;1"
        dur="12s"
        repeatCount="indefinite"
      />
    </rect>
  </defs>
  <use href="#lwStormFlash"/>
  <use href="#lwThunderRumble"/>
`, fa = (e) => S`
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
	let t = Math.floor(X(e, 1) * 100), n = Math.floor(X(e, 2) * 10), r = (t - 50) / 5 + e * Math.floor(X(e, 3) * 25), i = e * 50 + n;
	return S`
    <line x1="${i}" y1="${r}" x2="${i + 30}" y2="${r}" stroke="url(#windLineGradient)" stroke-width="4" stroke-linecap="round">
      <animate attributeName="x1" values="${i}; ${i + 10}; ${i}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="${i + 30}; ${i + 40}; ${i + 30}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0.4; 1" dur="3s" repeatCount="indefinite"/>
    </line>
    `;
})}
  `, pa = (e) => S`
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

   ${Z(e)}

  <!-- Lightning flash effect that illuminates the entire background (full-size overlay) -->
  ${da()}
  `, ma = (e) => S`
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

  ${Z(e)}

  <!-- Lightning flash effect for rainy thunderstorms -->
  ${da()}
  `, ha = (e) => S`
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

  ${Z(e)}
  `, ga = (e, t, n) => {
	if (!e) return x``;
	let r = n || 400;
	return {
		"clear-night": () => ea(r),
		cloudy: () => ia(r),
		fog: () => aa(r),
		hail: () => oa(r),
		lightning: () => pa(r),
		"lightning-rainy": () => ma(r),
		partlycloudy: () => t ? na(r) : ra(r),
		pouring: () => ca(r),
		rainy: () => sa(r),
		snowy: () => ua(r),
		"snowy-rainy": () => la(r),
		sunny: () => ta(),
		windy: () => fa(r),
		"windy-variant": () => fa(r),
		exceptional: () => ha(r)
	}[e]?.() ?? x``;
}, _a = `${dn}-animated-background-card`, va = `${_a}-editor`, ya = [
	{
		name: "entity",
		required: !0,
		selector: { entity: { domain: "weather" } },
		description: "bg_card.config.descr.entity"
	},
	{
		name: "sun_entity",
		required: !1,
		selector: { entity: { domain: "sun" } },
		description: "bg_card.config.descr.sun_entity"
	},
	{
		name: "show_sun_times",
		required: !1,
		selector: { boolean: {} },
		description: "bg_card.config.descr.show_sun_times"
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
		description: "bg_card.config.descr.forecast_mode"
	},
	{
		name: "show_day_temps",
		required: !1,
		selector: { boolean: {} },
		description: "bg_card.config.descr.show_day_temps"
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
		description: "bg_card.config.descr.temperature_font_size"
	},
	{
		name: "photo_mode",
		required: !1,
		selector: { boolean: {} },
		description: "bg_card.config.descr.photo_mode"
	}
], ba = o`
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
      top: var(--start-y, -12%);
      transform: translate3d(0, 0, 0) rotate(10deg);
    }
    100% {
      top: 112%;
      transform: translate3d(var(--drift, 6px), 0, 0) rotate(10deg);
    }
  }

  @keyframes hail-stone-fall {
    0% {
      top: -14%;
      transform: translate3d(0, 0, 0) scale(0.95);
    }
    82% {
      top: 96%;
      transform: translate3d(var(--drift, 4px), 0, 0) scale(1);
    }
    100% {
      top: 112%;
      transform: translate3d(calc(var(--drift, 4px) * 1.15), 0, 0) scale(0.92);
    }
  }

  @keyframes snow-flake-fall {
    0% {
      top: var(--start-y, -12%);
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

  @keyframes wind-streak-sweep-strong {
    0% {
      background-position:
        -46% 24%,
        -86% 68%;
      opacity: 0.66;
    }
    50% {
      background-position:
        72% 20%,
        38% 66%;
      opacity: 0.98;
    }
    100% {
      background-position:
        188% 16%,
        152% 62%;
      opacity: 0.62;
    }
  }

  @keyframes fog-drift {
    0% {
      transform: translate3d(-1.2%, 0.4%, 0) scale(1.01);
    }
    100% {
      transform: translate3d(1.8%, -0.6%, 0) scale(1.04);
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

  @keyframes night-stars-twinkle {
    0% {
      opacity: 0.72;
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      opacity: 1;
      transform: translate3d(0.4%, -0.3%, 0) scale(1.01);
    }
    100% {
      opacity: 0.82;
      transform: translate3d(-0.4%, 0.2%, 0) scale(1.02);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .img-photo *,
    .img-photo *::before,
    .img-photo *::after {
      animation: none !important;
      transition: none !important;
    }

    .img-photo .photo-lightning,
    .img-photo .photo-lightning-bolt {
      display: none !important;
    }
  }
`, xa = o`
  .condition,
  .forecast-temps,
  .sun-times,
  .forecast-mini {
    z-index: 1;
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
    color: var(--primary-text-color, #fff);
    max-width: calc(100% - 32px); /* honor left/right margins */
    display: flex;
    flex-direction: row;
    gap: 10px;
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
  }
  .forecast-mini {
    position: absolute;
    bottom: 16px; /* align vertically with bottom spacing */
    right: 16px; /* align to the right edge */
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
    color: var(--primary-text-color, #fff);
  }
  .temp-low {
    color: var(--primary-text-color, #fff);
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
`, Sa = o`
  :host {
    display: block;
    position: relative;
    isolation: isolate;
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

  .img-svg,
  .img-photo {
    z-index: 0;
    pointer-events: none;
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
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1)));
  }
`, Ca = o`
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
    top: var(--start-y, -14%);
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

  .hail-stone {
    position: absolute;
    top: -14%;
    left: var(--x, 50%);
    width: var(--size, 4.6px);
    height: var(--size, 4.6px);
    border-radius: 999px;
    background: radial-gradient(
      circle at 28% 28%,
      rgba(248, 253, 255, 1),
      rgba(199, 224, 246, 0.95) 70%,
      rgba(136, 174, 209, 0.92) 100%
    );
    box-shadow:
      inset -1px -1px 1px rgba(97, 137, 177, 0.52),
      0 0 6px rgba(228, 241, 255, 0.6);
    opacity: var(--opacity, 0.84);
    animation: hail-stone-fall var(--duration, 0.7s) linear infinite;
    animation-delay: var(--delay, 0s);
    z-index: 5;
  }

  .img-photo.mood-cloudy .hail-stone {
    filter: contrast(1.08) brightness(1.06);
  }

  .rain-drizzle {
    position: absolute;
    top: var(--start-y, -12%);
    left: var(--x, 50%);
    width: var(--w, 1.1px);
    height: var(--h, 11px);
    border-radius: 999px;
    background: linear-gradient(
      to bottom,
      rgba(234, 245, 255, 0),
      rgba(234, 245, 255, 0.55) 40%,
      rgba(182, 216, 246, 0.7) 100%
    );
    filter: blur(0.3px);
    opacity: var(--opacity, 0.4);
    mix-blend-mode: screen;
    animation: rain-drop-fall var(--duration, 1.45s) linear infinite;
    animation-delay: var(--delay, 0s);
    z-index: 4;
  }

  .snow-flake::before,
  .snow-flake::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(222, 240, 255, 0.96));
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
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.92), rgba(216, 236, 255, 0.88));
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

  .photo-night-stars {
    background-image:
      radial-gradient(circle at 8% 18%, rgba(255, 247, 201, 0.95) 0 1.2px, transparent 1.9px),
      radial-gradient(circle at 16% 34%, rgba(235, 242, 255, 0.95) 0 1px, transparent 1.7px),
      radial-gradient(circle at 24% 12%, rgba(255, 247, 201, 0.88) 0 1.4px, transparent 2.1px),
      radial-gradient(circle at 34% 28%, rgba(235, 242, 255, 0.92) 0 1.1px, transparent 1.8px),
      radial-gradient(circle at 42% 16%, rgba(255, 247, 201, 0.9) 0 1.3px, transparent 2px),
      radial-gradient(circle at 56% 24%, rgba(235, 242, 255, 0.95) 0 1px, transparent 1.8px),
      radial-gradient(circle at 68% 10%, rgba(255, 247, 201, 0.9) 0 1.5px, transparent 2.2px),
      radial-gradient(circle at 78% 22%, rgba(235, 242, 255, 0.9) 0 1.1px, transparent 1.8px),
      radial-gradient(circle at 88% 14%, rgba(255, 247, 201, 0.9) 0 1.3px, transparent 2px);
    opacity: 0;
    filter: drop-shadow(0 0 4px rgba(255, 244, 180, 0.22));
    animation: night-stars-twinkle 5.8s ease-in-out infinite alternate;
    z-index: 1;
    pointer-events: none;
  }

  .img-photo.clear-night .photo-night-stars {
    opacity: 0.92;
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
      circle at var(--flash-x, 52%) var(--flash-y, 26%),
      rgba(238, 246, 255, 0.76),
      rgba(190, 213, 250, 0) 56%
    );
    opacity: 0;
    mix-blend-mode: screen;
    animation: lightning-flash var(--flash-duration, 7s) infinite;
    animation-delay: var(--delay, 0s);
    z-index: 6;
  }

  .photo-lightning-bolt {
    position: absolute;
    top: var(--bolt-top, 8%);
    left: var(--bolt-left, 54%);
    width: var(--bolt-width, 6px);
    height: var(--bolt-height, 40%);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(245, 249, 255, 0.86) 22%,
      rgba(197, 218, 255, 0.92) 100%
    );
    clip-path: polygon(48% 0, 70% 0, 44% 36%, 68% 36%, 30% 100%, 44% 56%, 24% 56%);
    filter: drop-shadow(0 0 7px rgba(211, 228, 255, 0.76));
    opacity: 0;
    transform: rotate(var(--bolt-rotate, 0deg));
    animation: lightning-bolt var(--flash-duration, 7s) infinite;
    animation-delay: var(--delay, 0s);
    z-index: 7;
  }

  .photo-cloud-shadow {
    background:
      radial-gradient(ellipse at 22% 42%, rgba(42, 66, 94, 0.2), rgba(42, 66, 94, 0) 48%),
      radial-gradient(ellipse at 58% 40%, rgba(45, 70, 99, 0.16), rgba(45, 70, 99, 0) 46%),
      radial-gradient(ellipse at 85% 44%, rgba(42, 67, 96, 0.2), rgba(42, 67, 96, 0) 49%);
    animation: cloud-shadow-drift 20s ease-in-out infinite alternate;
    opacity: 0;
    mix-blend-mode: soft-light;
  }

  .img-photo.mood-cloudy .photo-cloud-shadow {
    opacity: 0.22;
  }

  .img-photo.mood-rainy .photo-cloud-shadow {
    opacity: 0.42;
  }

  .img-photo.partly-cloudy .photo-cloud-shadow {
    opacity: 0.12;
  }

  .photo-vignette {
    background: radial-gradient(circle at center, rgba(0, 0, 0, 0) 56%, rgba(0, 0, 0, 0.2) 100%);
    z-index: 3;
  }

  .photo-grain {
    background-image: radial-gradient(rgba(255, 255, 255, 0.2) 0.6px, transparent 0.8px);
    background-size: 3px 3px;
    opacity: 0.045;
    mix-blend-mode: soft-light;
    z-index: 8;
  }
`, wa = o`
  .photo-fog {
    background:
      radial-gradient(130% 62% at 18% 74%, rgba(235, 243, 250, 0.34), rgba(235, 243, 250, 0) 72%),
      radial-gradient(136% 66% at 72% 70%, rgba(229, 239, 248, 0.3), rgba(229, 239, 248, 0) 74%),
      linear-gradient(
        180deg,
        rgba(217, 229, 240, 0.08) 0%,
        rgba(217, 229, 240, 0.24) 46%,
        rgba(217, 229, 240, 0.38) 100%
      );
    mix-blend-mode: screen;
    opacity: 0;
    animation: fog-drift 24s ease-in-out infinite alternate;
    z-index: 3;
    pointer-events: none;
  }

  .img-photo.foggy .photo-fog {
    opacity: 0.88;
  }

  .img-photo.foggy .photo-clouds {
    filter: blur(16px) saturate(0.72) brightness(0.94);
    opacity: 0.6;
  }

  .img-photo.foggy .photo-clouds-front {
    filter: blur(13px) saturate(0.68) brightness(0.92);
    opacity: 0.46;
  }

  .img-photo.foggy .photo-clouds-depth {
    filter: blur(20px) saturate(0.65) brightness(0.9);
    opacity: 0.44;
  }

  .img-photo.foggy .photo-cloud-shadow {
    opacity: 0.16;
  }

  .img-photo.foggy .photo-wind-streaks {
    opacity: 0;
  }

  .img-photo.sun-bloom.day .photo-sun-rays {
    opacity: 0.8;
  }

  .img-photo.windy .photo-wind-streaks {
    opacity: 1;
    height: 78%;
    animation-duration: 1.7s;
    background-size:
      260% 100%,
      240% 100%;
    background-position:
      -18% 18%,
      -58% 60%;
    filter: blur(0.15px);
  }

  .img-photo.windy .photo-wind-streaks::after {
    content: '';
    position: absolute;
    inset: 4% -8% 0 -8%;
    background-image:
      linear-gradient(
        114deg,
        rgba(224, 241, 255, 0) 0%,
        rgba(224, 241, 255, 0.3) 24%,
        rgba(224, 241, 255, 0.45) 38%,
        rgba(224, 241, 255, 0) 58%
      ),
      linear-gradient(
        114deg,
        rgba(204, 229, 250, 0) 14%,
        rgba(204, 229, 250, 0.24) 34%,
        rgba(204, 229, 250, 0.38) 52%,
        rgba(204, 229, 250, 0) 70%
      );
    background-size:
      280% 100%,
      250% 100%;
    background-position:
      -46% 24%,
      -86% 68%;
    animation: wind-streak-sweep-strong 1.35s linear infinite;
    opacity: 0.88;
    mix-blend-mode: screen;
    pointer-events: none;
  }

  .img-photo.windy .photo-clouds {
    animation-duration: 20s;
  }

  .img-photo.windy .photo-clouds-front {
    animation-duration: 10s;
  }

  .img-photo.windy .photo-clouds-depth {
    animation-duration: 14s;
  }

  .photo-rain {
    display: none;
  }
`, Ta = o`
  ${o`
  .img-photo {
    position: absolute;
    margin-top: var(--bg-temp-img-top, 36px);
    inset: 0;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    min-height: 200px;
    isolation: isolate;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1)));
    transition:
      filter 1.1s ease,
      transform 1.1s ease;
  }

  .img-photo.day {
    filter: saturate(1.04) brightness(1.03) hue-rotate(0deg);
  }

  .img-photo.night {
    filter: saturate(0.86) brightness(0.82) hue-rotate(-8deg);
  }

  .photo-layer {
    position: absolute;
    inset: 0;
  }

  .photo-horizon {
    inset: 42% -10% -12%;
    background:
      radial-gradient(ellipse at 50% 100%, rgba(234, 243, 246, 0.42), transparent 68%),
      linear-gradient(180deg, transparent 0%, rgba(211, 227, 236, 0.16) 100%);
    opacity: 0;
    mix-blend-mode: screen;
    pointer-events: none;
    z-index: 2;
  }

  .img-photo.day .photo-horizon {
    opacity: 0.72;
  }

  .img-photo.night .photo-horizon {
    background: linear-gradient(180deg, transparent 0%, rgba(87, 118, 157, 0.2) 100%);
    opacity: 0.55;
  }

  .img-photo.mood-rainy .photo-horizon,
  .img-photo.foggy .photo-horizon {
    opacity: 0.24;
  }

  .photo-base {
    animation: bg-pan 34s ease-in-out infinite alternate;
  }

  .photo-circadian {
    opacity: 0;
    transition: opacity 1.1s ease;
    z-index: 1;
    pointer-events: none;
  }

  .img-photo.day .photo-circadian {
    background:
      radial-gradient(circle at 72% 16%, rgba(255, 239, 181, 0.26), rgba(255, 239, 181, 0) 44%),
      linear-gradient(180deg, rgba(255, 245, 209, 0.1) 0%, rgba(255, 255, 255, 0) 72%);
    mix-blend-mode: screen;
    opacity: 0.58;
  }

  .img-photo.night .photo-circadian {
    background:
      radial-gradient(circle at 26% 18%, rgba(127, 161, 214, 0.2), rgba(127, 161, 214, 0) 40%),
      linear-gradient(180deg, rgba(7, 15, 33, 0.3) 0%, rgba(4, 10, 24, 0.5) 100%);
    mix-blend-mode: multiply;
    opacity: 0.74;
  }

  .img-photo.mood-sunny.day .photo-base {
    background:
      radial-gradient(ellipse at 50% 100%, rgba(226, 238, 241, 0.55), transparent 66%),
      radial-gradient(circle at 76% 18%, rgba(255, 247, 207, 0.78), transparent 28%),
      linear-gradient(180deg, #5793be 0%, #82b8d8 54%, #b4cfdf 100%);
  }

  .img-photo.mood-sunny.night .photo-base {
    background:
      radial-gradient(circle at 78% 18%, rgba(80, 120, 160, 0.12), rgba(80, 120, 160, 0) 40%),
      linear-gradient(
        165deg,
        rgba(12, 24, 45, 0.99) 0%,
        rgba(8, 16, 32, 0.99) 58%,
        rgba(2, 6, 15, 1) 100%
      );
  }

  .img-photo.mood-sunny.clear-night .photo-base,
  .img-photo.clear-night .photo-base {
    background: linear-gradient(
      180deg,
      rgba(5, 16, 38, 0.99) 0%,
      rgba(4, 12, 28, 1) 52%,
      rgba(1, 6, 16, 1) 100%
    );
    animation: none;
  }

  .img-photo.clear-night .photo-clouds {
    opacity: 0;
  }

  .img-photo.clear-night .photo-clouds-front {
    opacity: 0;
  }

  .img-photo.clear-night .photo-clouds-depth {
    opacity: 0;
  }

  .img-photo.clear-night .photo-cloud-shadow {
    opacity: 0;
  }

  .img-photo.clear-night .photo-sun-rays {
    opacity: 0;
    animation: none;
    display: none;
  }

  .img-photo.mood-cloudy .photo-sun-rays {
    opacity: 0;
    animation: none;
    display: none;
  }

  .img-photo.partly-cloudy .photo-sun-rays {
    opacity: 0;
    animation: none;
    display: none;
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

  .img-photo.foggy.day .photo-base {
    background: linear-gradient(
      180deg,
      rgba(158, 176, 188, 0.98) 0%,
      rgba(146, 165, 179, 0.99) 54%,
      rgba(132, 152, 168, 1) 100%
    );
  }

  .img-photo.foggy.night .photo-base {
    background: linear-gradient(
      180deg,
      rgba(41, 54, 68, 0.99) 0%,
      rgba(33, 45, 59, 1) 52%,
      rgba(24, 35, 48, 1) 100%
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
`}
  ${o`
  .photo-clouds {
    background:
      radial-gradient(
        118% 86% at 6% 24%,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.08) 48%,
        rgba(255, 255, 255, 0) 62%
      ),
      radial-gradient(
        120% 90% at 28% 20%,
        rgba(255, 255, 255, 0.48),
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0) 64%
      ),
      radial-gradient(
        124% 92% at 50% 22%,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 64%
      ),
      radial-gradient(
        118% 88% at 72% 20%,
        rgba(255, 255, 255, 0.47),
        rgba(255, 255, 255, 0.08) 48%,
        rgba(255, 255, 255, 0) 62%
      ),
      radial-gradient(
        114% 84% at 95% 25%,
        rgba(255, 255, 255, 0.52),
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 64%
      ),
      linear-gradient(
        180deg,
        rgba(249, 253, 255, 0.42) 0%,
        rgba(233, 243, 252, 0.2) 34%,
        rgba(210, 224, 239, 0.04) 58%,
        rgba(210, 224, 239, 0) 74%
      ),
      linear-gradient(
        180deg,
        rgba(172, 194, 220, 0.18) 0%,
        rgba(172, 194, 220, 0.08) 46%,
        rgba(183, 205, 230, 0) 72%
      );
    filter: blur(5.5px) contrast(1.08) saturate(1.06) brightness(1.03);
    animation: cloud-drift 36s ease-in-out infinite alternate;
    opacity: 0;
  }

  .photo-clouds-front {
    background:
      radial-gradient(
        94% 74% at 0% 36%,
        rgba(255, 255, 255, 0.88),
        rgba(255, 255, 255, 0.16) 52%,
        rgba(255, 255, 255, 0) 66%
      ),
      radial-gradient(
        98% 76% at 22% 30%,
        rgba(255, 255, 255, 0.86),
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0) 64%
      ),
      radial-gradient(
        102% 78% at 48% 34%,
        rgba(255, 255, 255, 0.84),
        rgba(255, 255, 255, 0.16) 50%,
        rgba(255, 255, 255, 0) 66%
      ),
      radial-gradient(
        96% 74% at 74% 30%,
        rgba(255, 255, 255, 0.82),
        rgba(255, 255, 255, 0.14) 50%,
        rgba(255, 255, 255, 0) 64%
      ),
      radial-gradient(
        92% 72% at 100% 34%,
        rgba(255, 255, 255, 0.86),
        rgba(255, 255, 255, 0.16) 50%,
        rgba(255, 255, 255, 0) 66%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.34) 0%,
        rgba(242, 249, 255, 0.18) 44%,
        rgba(211, 226, 242, 0.1) 64%,
        rgba(255, 255, 255, 0) 74%
      );
    filter: blur(2.8px) contrast(1.12) saturate(1.05)
      drop-shadow(0 6px 8px rgba(122, 149, 178, 0.18));
    animation: cloud-drift-front 22s ease-in-out infinite alternate;
    mix-blend-mode: normal;
    opacity: 0;
  }

  .photo-clouds-depth {
    background:
      radial-gradient(
        118% 86% at 14% 68%,
        rgba(217, 232, 248, 0.42),
        rgba(255, 255, 255, 0.08) 52%,
        rgba(255, 255, 255, 0) 68%
      ),
      radial-gradient(
        122% 90% at 46% 62%,
        rgba(210, 226, 243, 0.36),
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0) 66%
      ),
      radial-gradient(
        118% 88% at 78% 70%,
        rgba(215, 231, 247, 0.38),
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0) 66%
      ),
      linear-gradient(
        180deg,
        rgba(193, 214, 237, 0.28) 0%,
        rgba(172, 198, 225, 0.14) 44%,
        rgba(162, 189, 217, 0) 72%
      );
    filter: blur(7.5px) saturate(1.04);
    animation: cloud-drift-depth 28s ease-in-out infinite alternate;
    opacity: 0;
  }

  .img-photo.mood-cloudy .photo-clouds {
    opacity: 0.88;
  }

  .img-photo.mood-cloudy .photo-clouds-front {
    opacity: 0.8;
  }

  .img-photo.mood-cloudy .photo-clouds-depth {
    opacity: 0.62;
  }

  .img-photo.mood-rainy .photo-clouds {
    opacity: 0.94;
  }

  .img-photo.mood-rainy .photo-clouds-front {
    opacity: 0.9;
  }

  .img-photo.mood-rainy .photo-clouds-depth {
    opacity: 0.8;
  }

  .img-photo.mood-cloudy.night .photo-clouds,
  .img-photo.mood-rainy.night .photo-clouds {
    filter: blur(7px) saturate(0.9) brightness(0.88);
  }

  .img-photo.mood-cloudy.night .photo-clouds-front,
  .img-photo.mood-rainy.night .photo-clouds-front {
    mix-blend-mode: normal;
    filter: blur(4.8px) brightness(0.8);
  }

  .img-photo.mood-cloudy.night .photo-clouds-depth,
  .img-photo.mood-rainy.night .photo-clouds-depth {
    filter: blur(9px) saturate(0.86) brightness(0.78);
    opacity: 0.7;
  }

  .img-photo.partly-cloudy .photo-clouds {
    opacity: 0.62;
    filter: blur(9px) saturate(0.95);
  }

  .img-photo.partly-cloudy .photo-clouds-front {
    opacity: 0.36;
    filter: blur(7px) brightness(0.98);
  }

  .img-photo.partly-cloudy .photo-clouds-depth {
    opacity: 0.28;
    filter: blur(13px) saturate(0.9);
  }

  .img-photo.partly-cloudy.night .photo-clouds {
    opacity: 0.54;
    filter: blur(10px) saturate(0.82) brightness(0.9);
  }

  .img-photo.partly-cloudy.night .photo-clouds-front {
    opacity: 0.3;
    filter: blur(8px) brightness(0.84);
    mix-blend-mode: normal;
  }

  .img-photo.partly-cloudy.night .photo-clouds-depth {
    opacity: 0.24;
    filter: blur(14px) saturate(0.8) brightness(0.84);
  }
`}
  ${wa}
`, Q = class extends T {
	constructor(...e) {
		super(...e), this.hourlyForecast = [], this.forecastLoading = !1, this.show_forecast = !0, this.config = {}, this.compact = !0, this.maxHours = 6, this.alignRight = !0;
	}
	static {
		this.styles = o`
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
	}
	_fmtHour(e) {
		return new Date(e).toLocaleTimeString([], { hour: "2-digit" });
	}
	render() {
		if (this.show_forecast === !1 || this.config.show_forecast === !1) return x``;
		let e = (this.hourlyForecast || []).slice(0, Math.max(1, this.maxHours));
		return x`
      <div class="wrapper ${this.alignRight ? "align-right" : ""}">
        ${this.compact ? x`` : x`
                <div class="section-title">
                  <ha-icon icon="mdi:clock-outline"></ha-icon>
                  ${this._t("hourly_charts.forecast_hours", { hours: e.length })}
                </div>
              `}
        <div class="grid">
          ${e.map((e) => x`
              <div class="tile">
                <div class="label">${this._fmtHour(e.datetime ?? e.time)}</div>
                <div class="icon">
                  ${this.getWeatherIcon(e.condition, this.config.enable_animate_weather_icons ? "animated" : "mdi", this.compact ? "18px" : "24px", !0)}
                </div>
                <div class="temps">
                  ${typeof e.temperature == "number" ? x`<span>${Math.round(e.temperature)}°</span>` : ""}
                </div>
              </div>
            `)}
        </div>
      </div>
    `;
	}
};
A([D({ type: Array }), k("design:type", Array)], Q.prototype, "hourlyForecast", void 0), A([D({ type: Boolean }), k("design:type", Object)], Q.prototype, "forecastLoading", void 0), A([D({ type: Boolean }), k("design:type", Object)], Q.prototype, "show_forecast", void 0), A([D({ type: Object }), k("design:type", Object)], Q.prototype, "config", void 0), A([D({ type: Function }), k("design:type", Function)], Q.prototype, "_t", void 0), A([D({ type: Function }), k("design:type", Function)], Q.prototype, "getWeatherIcon", void 0), A([D({ type: Boolean }), k("design:type", Boolean)], Q.prototype, "compact", void 0), A([D({ type: Number }), k("design:type", Number)], Q.prototype, "maxHours", void 0), A([D({ type: Boolean }), k("design:type", Boolean)], Q.prototype, "alignRight", void 0), Q = A([E("hourly-forecast-chart")], Q);
//#endregion
//#region src/cards/animated-background/effects/weather-particles.ts
function Ea(e, t, n = !1) {
	return Array.from({ length: e }, (e, r) => {
		let i = t ? 14 : 4, a = t ? 72 : 96, o = i + (r * 31 + 17) % 100 / 100 * a, s = (t ? .95 : .9 + r % 5 * .14).toFixed(2), c = (-1 * (r % 7 * .23)).toFixed(2), l = (t ? 15 : 14) + r % 4 * 5, u = (.46 + r % 4 * .11).toFixed(2), d = (r % 2 == 0 ? 5 : -5) + (r % 3 - 1) * 1.7, f = r % 3 == 0 ? 1.6 : 2.1, p = n ? `${(-8 + (r * 19 + 13) % 100).toFixed(1)}%` : "-14%";
		return x`<span
      class="rain-drop"
      style="--x:${o.toFixed(2)}%; --start-y:${p}; --duration:${s}s; --delay:${c}s; --h:${l}px; --opacity:${u}; --drift:${d.toFixed(1)}px; --w:${f}px;"
    ></span>`;
	});
}
function Da(e, t) {
	return Array.from({ length: e }, (e, n) => {
		let r = t ? 12 : 2, i = t ? 76 : 98, a = r + (n * 29 + 7) % 100 / 100 * i, o = (t ? 6.1 : 5.6 + n % 5 * 1.1).toFixed(2), s = (-1 * (n % 9 * .7)).toFixed(2), c = (t ? 2.8 : 2.4 + n % 4 * 1.1).toFixed(1), l = (.52 + n % 4 * .11).toFixed(2), u = (n % 2 == 0 ? 13 : -13) + (n % 3 - 1) * 2.6, d = -u * .7;
		return x`<span
      class="snow-flake"
      style="--x:${a.toFixed(2)}%; --duration:${o}s; --delay:${s}s; --size:${c}px; --opacity:${l}; --drift:${u}px; --drift-back:${d.toFixed(1)}px;"
      ><i></i><b></b
    ></span>`;
	});
}
function Oa(e, t, n = !1) {
	return Array.from({ length: e }, (e, r) => {
		let i = t ? 12 : 2, a = t ? 76 : 98, o = i + (r * 17 + 11) % 100 / 100 * a, s = (t ? 1.25 : 1.3 + r % 4 * .14).toFixed(2), c = (-1 * (r % 8 * .17)).toFixed(2), l = (t ? 8 : 7) + r % 3 * 2, u = (.22 + r % 4 * .07).toFixed(2), d = (r % 2 == 0 ? 2.5 : -2.5) + (r % 3 - 1) * 1.1, f = r % 2 == 0 ? 1 : 1.2, p = n ? `${(-8 + (r * 23 + 5) % 100).toFixed(1)}%` : "-12%";
		return x`<span
      class="rain-drizzle"
      style="--x:${o.toFixed(2)}%; --start-y:${p}; --duration:${s}s; --delay:${c}s; --h:${l}px; --opacity:${u}; --drift:${d.toFixed(1)}px; --w:${f}px;"
    ></span>`;
	});
}
function ka(e, t) {
	return Array.from({ length: e }, (e, n) => {
		let r = t ? 14 : 4, i = t ? 72 : 96, a = r + (n * 31 + 17) % 100 / 100 * i, o = (t ? .73 : .62 + n % 5 * .075).toFixed(2), s = (-1 * (n % 7 * .19)).toFixed(2), c = (.72 + n % 4 * .09).toFixed(2), l = (n % 2 == 0 ? 3.4 : -3.4) + (n % 3 - 1) * 1.3, u = n % 2 == 0 ? 4.3 : 5.1;
		return x`<span
      class="hail-stone"
      style="--x:${a.toFixed(2)}%; --duration:${o}s; --delay:${s}s; --opacity:${c}; --drift:${l.toFixed(1)}px; --size:${u}px;"
    ></span>`;
	});
}
function Aa() {
	return [{
		x: 28,
		y: 22,
		delay: "-4s",
		duration: "15s"
	}, {
		x: 72,
		y: 26,
		delay: "-11s",
		duration: "18s"
	}].map((e) => x`<div
        class="photo-layer photo-lightning"
        style="--flash-x:${e.x}%; --flash-y:${e.y}%; --delay:${e.delay}; --flash-duration:${e.duration};"
      ></div>`);
}
function ja() {
	return [{
		left: 27,
		top: 7,
		height: 38,
		width: 7,
		rotate: "-5deg",
		delay: "-4s",
		duration: "15s"
	}, {
		left: 69,
		top: 10,
		height: 42,
		width: 7,
		rotate: "4deg",
		delay: "-11s",
		duration: "18s"
	}].map((e) => x`<div
        class="photo-layer photo-lightning-bolt"
        style="--bolt-left:${e.left}%; --bolt-top:${e.top}%; --bolt-height:${e.height}%; --bolt-width:${e.width}px; --bolt-rotate:${e.rotate}; --delay:${e.delay}; --flash-duration:${e.duration};"
      ></div>`);
}
//#endregion
//#region src/cards/animated-background/swissweather-bg-card.ts
P({ loader: (e) => M(e) });
var Ma = class extends T {
	constructor(...e) {
		super(...e), this._forecast = [], this._hourly = [], this._forecastLoading = !1, this._hourlyLoading = !1, this._dailyRequestId = 0, this._hourlyRequestId = 0, this._prefersReducedMotion = !1, this._formatForecastDate = (e) => gn(e, this.hass?.selectedLanguage || this.hass?.language || "en");
	}
	connectedCallback() {
		super.connectedCallback();
		let e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = () => {
			this._prefersReducedMotion = e.matches, this._syncSvgAnimations();
		};
		this._prefersReducedMotion = e.matches, e.addEventListener("change", t), this._removeMotionPreferenceListener = () => e.removeEventListener("change", t);
	}
	disconnectedCallback() {
		this._removeMotionPreferenceListener?.(), this._removeMotionPreferenceListener = void 0, super.disconnectedCallback();
	}
	static {
		this.styles = [
			Sa,
			Ta,
			Ca,
			ba,
			xa
		];
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
			type: `custom:${_a}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(va);
	}
	static getConfigSchema() {
		return ya;
	}
	updated(e) {
		if (super.updated(e), this._syncSvgAnimations(), this.hass && this.config?.entity) {
			this._lastEntityId !== this.config.entity && (this._lastEntityId = this.config.entity, this._dailyRequestedEntityId = void 0, this._hourlyRequestedEntityId = void 0, this._dailyRequestId++, this._hourlyRequestId++, this._forecastLoading = !1, this._hourlyLoading = !1, this._forecast = [], this._hourly = []);
			let e = this.config.forecast_mode || "daily";
			(e === "daily" || this.config.show_day_temps !== !1) && this._loadDailyForecast(), e === "hourly" && this._loadHourlyForecast();
		}
	}
	_syncSvgAnimations() {
		for (let e of this.renderRoot.querySelectorAll(".img-svg svg")) "setCurrentTime" in e && typeof e.setCurrentTime == "function" && "pauseAnimations" in e && typeof e.pauseAnimations == "function" && "unpauseAnimations" in e && typeof e.unpauseAnimations == "function" && (this._prefersReducedMotion ? (e.setCurrentTime(30), e.pauseAnimations()) : e.unpauseAnimations());
	}
	render() {
		if (F((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), !this.hass || !this.config) return x``;
		let e = this.config?.grid_options?.rows ?? 3;
		this.style.setProperty("--card-grid-rows", e.toString());
		let t = Jn(this.hass, this.config.entity), n = t.attributes.temperature, r = t.state, i = Yn(this.hass, this.config), a = this.clientWidth || 300, o = e * 64 - 8, s = this.config?.temperature_font_size, c = typeof s == "number" && s > 0 ? `${s}px` : "36px";
		this.style.setProperty("--bg-temp-font-size", c), this.style.setProperty("--bg-temp-img-top", `calc(${c})`);
		let l = this._forecast && this._forecast.length > 0 ? this._forecast[0] : t.attributes.forecast ? t.attributes.forecast[0] : null, u = this.config.sun_entity, d = u ? this.hass.states[u] : void 0, f = d?.attributes?.next_rising ? new Date(d.attributes.next_rising) : void 0, p = d?.attributes?.next_setting ? new Date(d.attributes.next_setting) : void 0, m = (this.hass.selectedLanguage || this.hass.language || "en").replace("_", "-"), h = (e) => e ? e.toLocaleTimeString(m, {
			hour: "2-digit",
			minute: "2-digit"
		}) : "--:--";
		return x`
      <div>
        <div class="temperature">
          ${typeof n == "number" && !isNaN(n) ? n : "--"}°
        </div>
        ${r ? x`${this.config.photo_mode === !0 ? this._renderPhotoLikeBackground(r, i) : x`<div class="img-svg">
                        <svg
                          viewBox="0 0 ${a} ${o}"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          ${a > 0 ? ga(r, i, a) : S``}
                        </svg>
                      </div>`}
                ${l && this.config.show_day_temps !== !1 ? x`
                        <div class="forecast-temps">
                          <span class="temp-high">
                            <ha-icon icon="mdi:arrow-up-bold"></ha-icon>
                            ${Math.round(l.temperature)}°
                          </span>
                          <span class="temp-low">
                            <ha-icon icon="mdi:arrow-down-bold"></ha-icon> ${Math.round(l.templow || l.temperature - 5)}°
                          </span>
                        </div>
                      ` : ""}
                ${u && this.config.show_sun_times !== !1 && r !== "clear-night" ? x`
                        <div class="sun-times">
                          <span title="${R("bg_card.sunrise")}">
                            <ha-icon icon="mdi:weather-sunset-up"></ha-icon> ${h(f)}
                          </span>
                          <span title="${R("bg_card.sunset")}">
                            <ha-icon icon="mdi:weather-sunset-down"></ha-icon> ${h(p)}
                          </span>
                        </div>
                      ` : ""}
                ${(this.config.forecast_mode || "daily") === "daily" && this._forecast.length > 0 ? x`
                        <div class="forecast-mini">
                          <daily-forecast-chart
                            .forecast=${this._forecast}
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
                            ._t=${R}
                            .getWeatherIcon=${qn}
                            .formatDate=${this._formatForecastDate}
                          ></daily-forecast-chart>
                        </div>
                      ` : x``}
                ${(this.config.forecast_mode || "daily") === "hourly" && this._hourly.length > 0 ? x`
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
                            ._t=${R}
                            .getWeatherIcon=${qn}
                          ></hourly-forecast-chart>
                        </div>
                      ` : x``}
                <div class="condition">${R(r)}</div> ` : x``}
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
			"fog",
			"windy",
			"windy-variant",
			"snowy",
			"hail"
		].includes(e) ? "cloudy" : "sunny";
	}
	_renderPhotoLikeBackground(e, t) {
		let n = this._resolvePhotoMood(e), r = e === "clear-night", i = e === "fog", a = e === "partlycloudy", o = r || !t, s = e === "windy" || e === "windy-variant", c = t && (e === "sunny" || e === "partlycloudy"), l = n === "rainy" || e === "snowy-rainy" || e === "rainy" || e === "pouring", u = e === "snowy" || e === "snowy-rainy", d = e === "hail", f = e === "lightning" || e === "lightning-rainy", p = e === "snowy-rainy";
		return x`
      <div
        class="img-photo mood-${n} ${o ? "night" : "day"} ${r ? "clear-night" : ""} ${i ? "foggy" : ""} ${a ? "partly-cloudy" : ""} ${s ? "windy" : ""} ${c ? "sun-bloom" : ""}"
      >
        <div class="photo-layer photo-base"></div>
        <div class="photo-layer photo-circadian"></div>
        <div class="photo-layer photo-sun-rays"></div>
        ${r ? x`<div class="photo-layer photo-night-stars"></div>` : x``}
        <div class="photo-layer photo-clouds"></div>
        <div class="photo-layer photo-clouds-front"></div>
        <div class="photo-layer photo-clouds-depth"></div>
        <div class="photo-layer photo-horizon"></div>
        <div class="photo-layer photo-fog"></div>
        <div class="photo-layer photo-wind-streaks"></div>
        <div class="photo-layer photo-cloud-shadow"></div>
        ${l || u || d ? x`<div class="photo-layer weather-particles">
                ${p ? x`${[
			"c1",
			"c2",
			"c3"
		].map((e) => x`<div class="weather-cluster ${e}">
                            ${l ? Ea(6, !0) : x``}
                            ${u ? Da(10, !0) : x``}
                          </div>`)}` : x`${e === "pouring" ? Ea(68, !1, !0) : x``}
                      ${e === "pouring" ? Oa(28, !1, !0) : x``}
                      ${e === "rainy" ? Ea(66, !1, !0) : x``}
                      ${e === "rainy" ? Oa(22, !1, !0) : x``}
                      ${e === "lightning-rainy" ? Ea(54, !1) : x``}
                      ${e === "lightning-rainy" ? Oa(18, !1) : x``}
                      ${l && e !== "pouring" && e !== "rainy" && e !== "lightning-rainy" ? Ea(28, !1) : x``}
                      ${u ? Da(36, !1) : x``}
                      ${d ? ka(58, !1) : x``}`}
              </div>` : x``}
        ${f ? x`${Aa()} ${ja()}` : x``}
        <div class="photo-layer photo-vignette"></div>
        <div class="photo-layer photo-grain"></div>
      </div>
    `;
	}
	async _loadDailyForecast() {
		let e = this.config?.entity;
		if (!this.hass || !e || this._dailyRequestedEntityId === e) return;
		this._dailyRequestedEntityId = e;
		let t = ++this._dailyRequestId;
		this._forecastLoading = !0;
		try {
			let n = await Gi(this.hass, e, "daily");
			t === this._dailyRequestId && (this._forecast = n);
		} catch (e) {
			console.warn("⚠️ BG Daily forecast loading failed:", e), t === this._dailyRequestId && (this._forecast = []);
		} finally {
			t === this._dailyRequestId && (this._forecastLoading = !1);
		}
	}
	async _loadHourlyForecast() {
		let e = this.config?.entity;
		if (!this.hass || !e || this._hourlyRequestedEntityId === e) return;
		this._hourlyRequestedEntityId = e;
		let t = ++this._hourlyRequestId;
		this._hourlyLoading = !0;
		try {
			let n = await Gi(this.hass, e, "hourly");
			t === this._hourlyRequestId && (this._hourly = n);
		} catch (e) {
			console.warn("⚠️ BG Hourly forecast loading failed:", e), t === this._hourlyRequestId && (this._hourly = []);
		} finally {
			t === this._hourlyRequestId && (this._hourlyLoading = !1);
		}
	}
};
A([D({ attribute: !1 }), k("design:type", Object)], Ma.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], Ma.prototype, "config", void 0), A([O(), k("design:type", Array)], Ma.prototype, "_forecast", void 0), A([O(), k("design:type", Array)], Ma.prototype, "_hourly", void 0), Ma = A([E(_a)], Ma);
//#endregion
//#region src/cards/animated-background/swissweather-bg-card-editor.styles.ts
var Na = o`
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
//#endregion
//#region src/cards/animated-background/swissweather-bg-card-editor.ts
P({ loader: (e) => M(e) });
var Pa = class extends T {
	constructor() {
		super(), this._computeLabel = (e) => ({
			entity: I("bg_card.config.entity"),
			sun_entity: I("bg_card.config.sun_entity"),
			forecast_mode: I("bg_card.config.forecast_mode"),
			show_day_temps: I("bg_card.config.show_day_temps"),
			show_sun_times: I("bg_card.config.show_sun_times"),
			temperature_font_size: I("bg_card.config.temperature_font_size"),
			photo_mode: I("bg_card.config.photo_mode")
		})[e.name] || e.name, this._computeHelper = (e) => e.description ? I(e.description) : "";
	}
	setConfig(e) {
		let t = { ...e };
		for (let e of ["entity", "sun_entity"]) t[e] === "" && delete t[e];
		this._config = t, this.requestUpdate();
	}
	static {
		this.styles = Na;
	}
	render() {
		if (!this.hass) return x`<div>Loading...</div>`;
		F((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0,
			forecast_mode: typeof this._config?.forecast_mode == "string" ? this._config.forecast_mode : void 0,
			show_sun_times: typeof this._config?.show_sun_times == "boolean" ? this._config.show_sun_times : void 0,
			show_day_temps: typeof this._config?.show_day_temps == "boolean" ? this._config.show_day_temps : void 0,
			temperature_font_size: typeof this._config?.temperature_font_size == "number" ? this._config.temperature_font_size : void 0,
			photo_mode: typeof this._config?.photo_mode == "boolean" ? this._config.photo_mode : void 0
		}, t = ya.find((e) => e.name === "forecast_mode"), n = t ? {
			...t,
			selector: {
				...t.selector,
				select: {
					...t.selector.select,
					options: [
						{
							value: "daily",
							label: I("bg_card.forecast_mode.daily")
						},
						{
							value: "hourly",
							label: I("bg_card.forecast_mode.hourly")
						},
						{
							value: "none",
							label: I("bg_card.forecast_mode.none")
						}
					]
				}
			}
		} : void 0;
		return x`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Animated Background Card (Experimental)</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${I("bg_card.config.group_general") || "General"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${[
			ya.find((e) => e.name === "entity"),
			ya.find((e) => e.name === "sun_entity"),
			ya.find((e) => e.name === "temperature_font_size")
		].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Display -->
        <div class="group">
          <div class="group-title">${I("bg_card.config.group_display") || "Display"}</div>
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${[
			n,
			ya.find((e) => e.name === "show_day_temps"),
			ya.find((e) => e.name === "show_sun_times"),
			ya.find((e) => e.name === "photo_mode")
		].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Configuration Preview -->
        ${this._config?.entity ? x`
                <div class="preview">
                  <div class="preview-title">📋 YAML-Config</div>
                  <div class="preview-config">${this._renderConfigPreview()}</div>
                </div>
              ` : ""}
      </div>
    `;
	}
	_renderConfigPreview() {
		let e = { ...this._config };
		return e.type ||= `custom:${_a}`, Object.keys(e).forEach((t) => {
			(e[t] === void 0 || e[t] === "") && delete e[t];
		}), Object.entries(e).map(([e, t]) => typeof t == "string" ? `${e}: "${t}"` : `${e}: ${t}`).join("\n");
	}
	_valueChanged(e) {
		if (this._config ||= {
			type: `custom:${_a}`,
			entity: ""
		}, e.type === "value-changed") {
			let t = {}, { ...n } = e.detail.value || {}, r = {
				...this._config,
				...n,
				...t,
				type: `custom:${_a}`
			};
			delete r.show_forecast, Object.keys(r).forEach((e) => {
				(r[e] === "" || r[e] === void 0) && delete r[e];
			}), this._config = r, z(this, "config-changed", { config: this._config });
		}
	}
};
A([D({ attribute: !1 }), k("design:type", Object)], Pa.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], Pa.prototype, "lovelace", void 0), A([D({ attribute: !1 }), k("design:type", Object)], Pa.prototype, "_config", void 0), Pa = A([E(va), k("design:paramtypes", [])], Pa);
//#endregion
//#region src/cards/hourly-charts/const.ts
var Fa = `${dn}-temperature-card`, Ia = `${Fa}-editor`, La = `${dn}-precipitation-card`, Ra = `${La}-editor`, za = `${dn}-sunshine-card`, Ba = `${za}-editor`, Va = `${dn}-wind-card`, Ha = `${Va}-editor`, Ua = [{
	name: "entity",
	required: !0,
	selector: { entity: { domain: "weather" } },
	description: "hourly_charts.config.descr.entity"
}, {
	name: "forecast_hours",
	required: !1,
	selector: { number: {
		min: 6,
		max: 48,
		step: 1,
		mode: "box"
	} },
	description: "hourly_charts.config.descr.forecast_hours"
}], Wa = [{
	name: "entity",
	required: !0,
	selector: { entity: { domain: "weather" } },
	description: "hourly_charts.config.descr.entity"
}, {
	name: "forecast_hours",
	required: !1,
	selector: { number: {
		min: 6,
		max: 48,
		step: 1,
		mode: "box"
	} },
	description: "hourly_charts.config.descr.forecast_hours"
}], Ga = [
	{
		name: "entity",
		required: !0,
		selector: { entity: { domain: "weather" } },
		description: "hourly_charts.config.descr.entity"
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
		description: "hourly_charts.config.descr.forecast_hours"
	},
	{
		name: "sun_entity",
		required: !1,
		selector: { entity: { domain: "sun" } },
		description: "hourly_charts.config.descr.sun_entity"
	},
	{
		name: "sunshine_entity",
		required: !1,
		selector: { entity: { domain: "sensor" } },
		description: "hourly_charts.config.descr.sunshine_entity"
	}
], $ = class extends T {
	constructor(...e) {
		super(...e), this._hourlyForecast = [], this._forecastLoading = !1, this._forecastLoaded = !1, this._forecastError = !1, this._forecastRequestId = 0, this._chartTranslate = (e, t) => I(e, t);
	}
	_retryForecast() {
		!this._forecastLoading && this.config?.entity && this._loadForecast(this.config.entity);
	}
	async _loadForecast(e) {
		if (!this.hass || !e) return;
		let t = ++this._forecastRequestId;
		this._forecastLoading = !0, this._forecastLoaded = !1, this._forecastError = !1, Wi("card loading", {
			card: this.localName,
			entityId: e,
			requestId: t
		});
		try {
			let n = await Gi(this.hass, e, "hourly");
			t === this._forecastRequestId && (this._hourlyForecast = n);
		} catch (n) {
			console.error(`[SwissWeather] Forecast load failed for ${e}:`, n), t === this._forecastRequestId && (this._forecastError = !0, this._hourlyForecast = []);
		} finally {
			t === this._forecastRequestId && (this._forecastLoading = !1, this._forecastLoaded = !0, Wi("card settled", {
				card: this.localName,
				entityId: e,
				requestId: t,
				count: this._hourlyForecast.length,
				error: this._forecastError
			}));
		}
	}
	updated(e) {
		if (super.updated(e), this.hass) {
			let e = this.hass.selectedLanguage || this.hass.language || "en";
			e !== this._loadedLang && (this._loadedLang = e, F(e).then(() => {
				this._loadedLang === e && (this._chartTranslate = (e, t) => I(e, t), this.requestUpdate());
			}).catch((t) => {
				console.error(`[SwissWeather] Failed to load language ${e}:`, t);
			}));
		}
		(e.has("_hourlyForecast") || e.has("_forecastLoaded")) && Wi("card rendered", {
			card: this.localName,
			entityId: this.config?.entity,
			count: this._hourlyForecast.length,
			loading: this._forecastLoading,
			loaded: this._forecastLoaded
		}), this.hass && this.config?.entity && this._requestedEntityId !== this.config.entity && (this._requestedEntityId = this.config.entity, this._hourlyForecast = [], this._forecastLoaded = !1, this._loadForecast(this.config.entity));
	}
	setBaseConfig(e) {
		this.config = e, this._requestedEntityId !== e.entity && (this._requestedEntityId = void 0, this._hourlyForecast = [], this._forecastLoaded = !1);
	}
	_renderForecastStatus() {
		return x`<div class="card-content">
      ${this._forecastLoading || !this._forecastLoaded ? I("hourly_charts.forecast_loading") : this._forecastError ? I("hourly_charts.forecast_request_failed") : I("hourly_charts.no_forecast_data")}
      ${this._forecastLoaded && !this._forecastLoading ? x`<button type="button" @click=${this._retryForecast}>
              ${I("hourly_charts.retry_forecast")}
            </button>` : ""}
    </div>`;
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
A([D({ attribute: !1 }), k("design:type", Object)], $.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], $.prototype, "config", void 0), A([O(), k("design:type", Array)], $.prototype, "_hourlyForecast", void 0), A([O(), k("design:type", Object)], $.prototype, "_forecastLoading", void 0), A([O(), k("design:type", Object)], $.prototype, "_forecastLoaded", void 0), A([O(), k("design:type", Object)], $.prototype, "_forecastError", void 0), P({ loader: (e) => M(e) });
var Ka = class extends $ {
	static get styles() {
		return o`
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
			type: `custom:${Fa}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(Ia);
	}
	static getConfigSchema() {
		return Ua;
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
		if (!this.hass || !this.config) return x``;
		if (this.setCardGridRows(), !Jn(this.hass, this.config.entity)) return x`<div class="card-content">Entity not found: ${this.config.entity}</div>`;
		if (this._hourlyForecast.length === 0) return this._renderForecastStatus();
		let e = this.config.forecast_hours ?? 12;
		return x`
      <div class="card-content">
        <forecast-temperature-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_temperature=${!0}
          ._t=${this._chartTranslate}
        ></forecast-temperature-chart>
      </div>
    `;
	}
};
//#endregion
//#region src/cards/hourly-charts/temperature-card-editor.ts
Ka = A([E(Fa)], Ka), P({ loader: (e) => M(e) });
var qa = class extends T {
	setConfig(e) {
		let t = { ...e };
		t.entity === "" && delete t.entity, this._config = t, this.requestUpdate();
	}
	static get styles() {
		return o`
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
		if (!this.hass) return x`<div>Loading...</div>`;
		F((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			forecast_hours: this._config?.forecast_hours ?? 12
		};
		return x`
      <div class="card-config">
        <div class="header">
          <div class="header-title">🌡️ SwissWeather Temperature Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Ua}
          .computeLabel=${(e) => ({
			entity: I("hourly_charts.config.entity"),
			forecast_hours: I("hourly_charts.config.forecast_hours") ?? "Forecast hours"
		})[e.name] ?? e.name}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
	}
	_valueChanged(e) {
		this._config ||= {
			type: `custom:${Fa}`,
			entity: ""
		};
		let t = {
			...this._config,
			...e.detail.value
		};
		z(this, "config-changed", { config: t });
	}
};
//#endregion
//#region src/cards/hourly-charts/precipitation-card.ts
A([D({ attribute: !1 }), k("design:type", Object)], qa.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], qa.prototype, "_config", void 0), qa = A([E(Ia)], qa), P({ loader: (e) => M(e) });
var Ja = class extends $ {
	static get styles() {
		return o`
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
			type: `custom:${La}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(Ra);
	}
	static getConfigSchema() {
		return Ua;
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
		if (!this.hass || !this.config) return x``;
		if (this.setCardGridRows(), !Jn(this.hass, this.config.entity)) return x`<div class="card-content">Entity not found: ${this.config.entity}</div>`;
		if (this._hourlyForecast.length === 0) return this._renderForecastStatus();
		let e = this.config.forecast_hours ?? 12;
		return x`
      <div class="card-content">
        <precipitation-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_precipitation=${!0}
          ._t=${this._chartTranslate}
        ></precipitation-chart>
      </div>
    `;
	}
};
//#endregion
//#region src/cards/hourly-charts/precipitation-card-editor.ts
Ja = A([E(La)], Ja), P({ loader: (e) => M(e) });
var Ya = class extends T {
	setConfig(e) {
		let t = { ...e };
		t.entity === "" && delete t.entity, this._config = t, this.requestUpdate();
	}
	static get styles() {
		return o`
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
		if (!this.hass) return x`<div>Loading...</div>`;
		F((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			forecast_hours: this._config?.forecast_hours ?? 12
		};
		return x`
      <div class="card-config">
        <div class="header">
          <div class="header-title">🌧️ SwissWeather Precipitation Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Ua}
          .computeLabel=${(e) => ({
			entity: I("hourly_charts.config.entity"),
			forecast_hours: I("hourly_charts.config.forecast_hours") ?? "Forecast hours"
		})[e.name] ?? e.name}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
	}
	_valueChanged(e) {
		this._config ||= {
			type: `custom:${La}`,
			entity: ""
		};
		let t = {
			...this._config,
			...e.detail.value
		};
		z(this, "config-changed", { config: t });
	}
};
//#endregion
//#region src/cards/hourly-charts/sunshine-card.ts
A([D({ attribute: !1 }), k("design:type", Object)], Ya.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], Ya.prototype, "_config", void 0), Ya = A([E(Ra)], Ya), P({ loader: (e) => M(e) });
var Xa = class extends $ {
	static get styles() {
		return o`
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
			type: `custom:${za}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(Ba);
	}
	static getConfigSchema() {
		return Ga;
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
		if (!this.hass || !this.config) return x``;
		this.setCardGridRows();
		let e = Jn(this.hass, this.config.entity);
		if (!e) return x`<div class="card-content">Entity not found: ${this.config.entity}</div>`;
		if (this._hourlyForecast.length === 0) return this._renderForecastStatus();
		let t = this.config.forecast_hours ?? 12, n = this.config.sun_entity ? Jn(this.hass, this.config.sun_entity) : null;
		return x`
      <div class="card-content">
        <sunshine-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${t}
          .show_sunshine=${!0}
          .weatherEntity=${e}
          .sun_entity=${n}
          ._t=${this._chartTranslate}
        ></sunshine-chart>
      </div>
    `;
	}
};
//#endregion
//#region src/cards/hourly-charts/sunshine-card-editor.ts
Xa = A([E(za)], Xa), P({ loader: (e) => M(e) });
var Za = class extends T {
	setConfig(e) {
		let t = { ...e };
		t.entity === "" && delete t.entity, t.sun_entity === "" && delete t.sun_entity, t.sunshine_entity === "" && delete t.sunshine_entity, this._config = t, this.requestUpdate();
	}
	static get styles() {
		return o`
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
		if (!this.hass) return x`<div>Loading...</div>`;
		F((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			forecast_hours: this._config?.forecast_hours ?? 12,
			sun_entity: typeof this._config?.sun_entity == "string" ? this._config.sun_entity : void 0,
			sunshine_entity: typeof this._config?.sunshine_entity == "string" ? this._config.sunshine_entity : void 0
		};
		return x`
      <div class="card-config">
        <div class="header">
          <div class="header-title">☀️ SwissWeather Sunshine Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Ga}
          .computeLabel=${(e) => ({
			entity: I("hourly_charts.config.entity"),
			forecast_hours: I("hourly_charts.config.forecast_hours") ?? "Forecast hours",
			sun_entity: I("hourly_charts.config.sun_entity") ?? "Sun entity (sunrise/sunset markers)",
			sunshine_entity: I("hourly_charts.config.sunshine_entity") ?? "Sunshine duration sensor (optional)"
		})[e.name] ?? e.name}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
	}
	_valueChanged(e) {
		this._config ||= {
			type: `custom:${za}`,
			entity: ""
		};
		let t = {
			...this._config,
			...e.detail.value
		};
		z(this, "config-changed", { config: t });
	}
};
//#endregion
//#region src/cards/hourly-charts/wind-card.ts
A([D({ attribute: !1 }), k("design:type", Object)], Za.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], Za.prototype, "_config", void 0), Za = A([E(Ba)], Za), P({ loader: (e) => M(e) });
var Qa = class extends $ {
	static get styles() {
		return o`
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
			type: `custom:${Va}`,
			entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(Ha);
	}
	static getConfigSchema() {
		return Wa;
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
		if (this.setCardGridRows(), !this.hass || !this.config) return x``;
		let e = this.config.forecast_hours ?? 12;
		return this._hourlyForecast.length === 0 ? this._renderForecastStatus() : x`
      <div class="card-content">
        <wind-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${e}
          .show_wind=${!0}
          ._t=${this._chartTranslate}
        ></wind-chart>
      </div>
    `;
	}
};
//#endregion
//#region src/cards/hourly-charts/wind-card-editor.ts
Qa = A([E(Va)], Qa), P({ loader: (e) => M(e) });
var $a = class extends T {
	setConfig(e) {
		let t = { ...e };
		t.entity === "" && delete t.entity, this._config = t, this.requestUpdate();
	}
	static get styles() {
		return o`
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
		if (!this.hass) return x`<div>Loading...</div>`;
		F((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			entity: typeof this._config?.entity == "string" ? this._config.entity : void 0,
			forecast_hours: this._config?.forecast_hours ?? 12
		};
		return x`
      <div class="card-config">
        <div class="header">
          <div class="header-title">💨 SwissWeather Wind Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Wa}
          .computeLabel=${(e) => ({
			entity: I("hourly_charts.config.entity"),
			forecast_hours: I("hourly_charts.config.forecast_hours") ?? "Forecast hours"
		})[e.name] ?? e.name}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
	}
	_valueChanged(e) {
		this._config ||= {
			type: `custom:${Va}`,
			entity: ""
		};
		let t = {
			...this._config,
			...e.detail.value
		};
		z(this, "config-changed", { config: t });
	}
};
A([D({ attribute: !1 }), k("design:type", Object)], $a.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], $a.prototype, "_config", void 0), $a = A([E(Ha)], $a);
//#endregion
//#region src/cards/warnings/const.ts
var eo = `${dn}-warning-card`, to = `${eo}-editor`, no = [
	{
		name: "primary_warning_entity",
		required: !1,
		selector: { entity: { domain: "sensor" } },
		description: "warning.config.descr.primary_warning_entity"
	},
	{
		name: "secondary_warning_entity",
		required: !1,
		selector: { entity: { domain: "sensor" } },
		description: "warning.config.descr.secondary_warning_entity"
	},
	{
		name: "tertiary_warning_entity",
		required: !1,
		selector: { entity: { domain: "sensor" } },
		description: "warning.config.descr.tertiary_warning_entity"
	},
	{
		name: "warning_entity",
		required: !1,
		selector: { entity: { domain: "sensor" } },
		description: "warning.config.descr.warning_entity"
	}
];
//#endregion
//#region src/cards/warnings/warning-card.ts
P({ loader: (e) => M(e) });
var ro = class extends T {
	constructor(...e) {
		super(...e), this._openWarnings = {}, this._toggle = (e) => {
			this._openWarnings = {
				...this._openWarnings,
				[e]: !this._openWarnings[e]
			}, this.requestUpdate();
		};
	}
	static get styles() {
		return o`
      :host {
        display: block;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        padding: 16px;
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
      }

      .warning-section {
        border: 1px solid var(--warning-border-color, #ffeaa7);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 8px;
      }

      .warning-section.danger {
        background: linear-gradient(90deg, #f8d7da 0%, #f5c6cb 100%);
        border-color: var(--danger-border-color, #f1aeb5);
      }

      .warning-section.severe {
        background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%);
        border-color: var(--severe-border-color, #e17055);
      }

      .no-warnings {
        opacity: 0.6;
        font-size: 14px;
        text-align: center;
        padding: 8px 0;
      }
    `;
	}
	setConfig(e) {
		this.config = e;
	}
	getCardSize() {
		return 2;
	}
	static getStubConfig() {
		return {
			type: `custom:${eo}`,
			primary_warning_entity: "",
			secondary_warning_entity: "",
			tertiary_warning_entity: ""
		};
	}
	static getConfigElement() {
		return document.createElement(to);
	}
	static getConfigSchema() {
		return no;
	}
	_getEntityState(e) {
		return this.hass?.states[e];
	}
	render() {
		if (!this.hass || !this.config) return x``;
		let e = (this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2);
		e !== this._loadedLang && (this._loadedLang = e, F(e).then(() => this.requestUpdate()));
		let t = this.config.primary_warning_entity ? this._getEntityState(this.config.primary_warning_entity) : null, n = this.config.secondary_warning_entity ? this._getEntityState(this.config.secondary_warning_entity) : null, r = this.config.tertiary_warning_entity ? this._getEntityState(this.config.tertiary_warning_entity) : null, i = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null;
		return t && t.attributes?.has_warning !== void 0 && !t.attributes.has_warning ? x`<div class="no-warnings">${I("warning.warnings_none")}</div>` : Hi(i, t, n, r, this._openWarnings, this._toggle) || x`<div class="no-warnings">${I("warning.warnings_none")}</div>`;
	}
};
//#endregion
//#region src/cards/warnings/warning-card-editor.ts
A([D({ attribute: !1 }), k("design:type", Object)], ro.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], ro.prototype, "config", void 0), A([O(), k("design:type", typeof Record > "u" ? Object : Record)], ro.prototype, "_openWarnings", void 0), ro = A([E(eo)], ro), P({ loader: (e) => M(e) });
var io = class extends T {
	setConfig(e) {
		this._config = { ...e }, this.requestUpdate();
	}
	static get styles() {
		return o`
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
      .section-label {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--secondary-text-color);
        margin: 16px 0 4px;
      }
      ha-form {
        display: block;
      }
    `;
	}
	render() {
		if (!this.hass) return x`<div>Loading...</div>`;
		F((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2));
		let e = {
			primary_warning_entity: this._config?.primary_warning_entity,
			secondary_warning_entity: this._config?.secondary_warning_entity,
			tertiary_warning_entity: this._config?.tertiary_warning_entity,
			warning_entity: this._config?.warning_entity
		};
		return x`
      <div class="card-config">
        <div class="header">
          <div class="header-title">⚠️ SwissWeather Warning Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${no}
          .computeLabel=${(e) => ({
			primary_warning_entity: I("warning.config.primary_warning_entity"),
			secondary_warning_entity: I("warning.config.secondary_warning_entity"),
			tertiary_warning_entity: I("warning.config.tertiary_warning_entity"),
			warning_entity: I("warning.config.warning_entity")
		})[e.name] ?? e.name}
          .computeHelper=${(e) => ({
			primary_warning_entity: I("warning.config.descr.primary_warning_entity"),
			secondary_warning_entity: I("warning.config.descr.secondary_warning_entity"),
			tertiary_warning_entity: I("warning.config.descr.tertiary_warning_entity"),
			warning_entity: I("warning.config.descr.warning_entity")
		})[e.name] ?? ""}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
	}
	_valueChanged(e) {
		this._config ||= {
			type: `custom:${eo}`,
			entity: ""
		};
		let t = {
			...this._config,
			...e.detail.value
		};
		z(this, "config-changed", { config: t });
	}
};
A([D({ attribute: !1 }), k("design:type", Object)], io.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], io.prototype, "_config", void 0), io = A([E(to)], io);
//#endregion
//#region src/cards/pollen/const.ts
var ao = `${dn}-pollen-card`, oo = `${ao}-editor`, so = [
	"birch",
	"grasses",
	"alder",
	"hazel",
	"beech",
	"ash",
	"oak"
], co = [
	"NONE",
	"LOW",
	"MEDIUM",
	"STRONG",
	"VERY_STRONG"
];
//#endregion
//#region src/cards/pollen/pollen-card.ts
P({ loader: (e) => M(e) });
var lo = {
	NONE: "var(--pollen-none-color, #9e9e9e)",
	LOW: "var(--pollen-low-color, #4caf50)",
	MEDIUM: "var(--pollen-medium-color, #ff9800)",
	STRONG: "var(--pollen-strong-color, #f44336)",
	VERY_STRONG: "var(--pollen-very-strong-color, #9c27b0)"
};
function uo(e) {
	let t = e.toUpperCase().replace(/ /g, "_");
	return co.includes(t) ? t : "NONE";
}
function fo(e) {
	return e.length === 0 ? "NONE" : e.reduce((e, t) => co.indexOf(t) > co.indexOf(e) ? t : e);
}
var po = class extends T {
	constructor(...e) {
		super(...e), this._expanded = !1, this._toggle = () => {
			this._expanded = !this._expanded, this.requestUpdate();
		};
	}
	static get styles() {
		return o`
      :host {
        display: block;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        padding: 16px;
        box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.1));
        font-family: var(
          --primary-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          sans-serif
        );
        color: var(--primary-text-color);
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;
        background: none;
        border: none;
        padding: 0;
        width: 100%;
        text-align: left;
        color: inherit;
        font: inherit;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .title {
        font-size: 16px;
        font-weight: 600;
      }

      .overall-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
        color: #fff;
      }

      .chevron {
        font-size: 18px;
        transition: transform 0.2s ease;
        color: var(--secondary-text-color);
      }

      .chevron.open {
        transform: rotate(180deg);
      }

      .no-data {
        opacity: 0.6;
        font-size: 14px;
        text-align: center;
        padding: 8px 0;
      }

      .pollen-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .pollen-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 10px;
        padding: 8px 6px 6px;
        gap: 4px;
      }

      .pollen-name {
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        opacity: 0.85;
      }

      .pollen-level-dot {
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }

      .pollen-level-label {
        font-size: 11px;
        font-weight: 600;
        text-align: center;
      }

      .pollen-raw {
        font-size: 10px;
        opacity: 0.6;
        text-align: center;
      }
    `;
	}
	setConfig(e) {
		this.config = e;
	}
	getCardSize() {
		return 2;
	}
	static getStubConfig() {
		return { type: `custom:${ao}` };
	}
	static getConfigElement() {
		return document.createElement(oo);
	}
	static getConfigSchema() {
		return [];
	}
	_getEntityState(e) {
		if (e) return this.hass?.states[e];
	}
	render() {
		if (!this.hass || !this.config) return x``;
		let e = (this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2);
		e !== this._loadedLang && (this._loadedLang = e, F(e).then(() => this.requestUpdate()));
		let t = [], n = so.some((e) => !!this.config[`${e}_entity`]);
		for (let e of so) {
			if (this.config[`${e}_enabled`] === !1) continue;
			let n = this.config[`${e}_entity`], r = this._getEntityState(n);
			if (!r) continue;
			let i = uo(r.state), a = this._getEntityState(this.config[`${e}_raw_entity`]);
			t.push({
				type: e,
				level: i,
				raw: a ? a.state : void 0,
				unit: a?.attributes?.unit_of_measurement
			});
		}
		if (t.length === 0) return x`<div class="no-data">${I(n ? "pollen.no_data" : "pollen.not_configured")}</div>`;
		let r = fo(t.map((e) => e.level)), i = lo[r];
		return x`
      <button class="header" @click=${this._toggle} aria-expanded=${this._expanded}>
        <div class="header-left">
          <span class="title">🌿 ${I("pollen.title")}</span>
          <span class="overall-badge" style="background: ${i};">
            ${I(`pollen.levels.${r.toLowerCase()}`)}
          </span>
        </div>
        <span class="chevron ${this._expanded ? "open" : ""}">⌄</span>
      </button>

      ${this._expanded ? x`
              <div class="pollen-grid">
                ${t.map(({ type: e, level: t, raw: n, unit: r }) => x`
                    <div class="pollen-item">
                      <div class="pollen-name">${I(`pollen.types.${e}`)}</div>
                      <div
                        class="pollen-level-dot"
                        style="background: ${lo[t]};"
                      ></div>
                      <div class="pollen-level-label" style="color: ${lo[t]};">
                        ${I(`pollen.levels.${t.toLowerCase()}`)}
                      </div>
                      ${n === void 0 ? "" : x`<div class="pollen-raw">${n}${r ? "\xA0" + r : ""}</div>`}
                    </div>
                  `)}
              </div>
            ` : ""}
    `;
	}
};
//#endregion
//#region src/cards/pollen/pollen-card-editor.ts
A([D({ attribute: !1 }), k("design:type", Object)], po.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], po.prototype, "config", void 0), A([O(), k("design:type", Object)], po.prototype, "_expanded", void 0), po = A([E(ao)], po), P({ loader: (e) => M(e) });
var mo = class extends T {
	setConfig(e) {
		this._config = { ...e }, this.requestUpdate();
	}
	static get styles() {
		return o`
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
        color: var(--primary-text-color);
      }
      .pollen-type-block {
        margin-bottom: 12px;
        border: 1px solid var(--card-divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 10px;
        overflow: hidden;
      }
      .pollen-type-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 14px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        user-select: none;
      }
      .pollen-type-toggle {
        background: none;
        border: none;
        padding: 0;
        flex: 1;
        text-align: left;
        cursor: pointer;
        color: inherit;
        font: inherit;
      }
      .pollen-type-name {
        font-size: 14px;
        font-weight: 600;
      }
      .pollen-type-fields {
        padding: 8px 14px 4px;
      }
      .field-label {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        color: var(--secondary-text-color);
        margin: 8px 0 2px;
      }
      ha-form {
        display: block;
      }
    `;
	}
	render() {
		return this.hass ? (F((this.hass.selectedLanguage || this.hass.language || "en").substring(0, 2)), x`
      <div class="card-config">
        <div class="header">
          <div class="header-title">🌿 SwissWeather Pollen Card</div>
        </div>
        ${so.map((e) => this._renderTypeBlock(e))}
      </div>
    `) : x`<div>Loading...</div>`;
	}
	_renderTypeBlock(e) {
		let t = this._config?.[`${e}_enabled`] !== !1, n = `${e}_entity`, r = `${e}_raw_entity`, i = this._config?.[n] ?? void 0, a = this._config?.[r] ?? void 0;
		return x`
      <div class="pollen-type-block">
        <div class="pollen-type-header">
          <button class="pollen-type-toggle" @click=${() => this._toggleType(e, !t)}>
            <span class="pollen-type-name">${I(`pollen.types.${e}`)}</span>
          </button>
          <ha-switch
            .checked=${t}
            @change=${(t) => this._toggleType(e, t.target.checked)}
          ></ha-switch>
        </div>
        ${t ? x`
                <div class="pollen-type-fields">
                  <div class="field-label">${I("pollen.config.level_sensor")}</div>
                  <ha-form
                    .hass=${this.hass}
                    .data=${{ [n]: i }}
                    .schema=${[{
			name: n,
			required: !1,
			selector: { entity: { domain: "sensor" } }
		}]}
                    .computeLabel=${() => I("pollen.config.level_sensor")}
                    .computeHelper=${() => I("pollen.config.level_sensor_hint")}
                    @value-changed=${this._valueChanged}
                  ></ha-form>
                  <div class="field-label">${I("pollen.config.raw_sensor")}</div>
                  <ha-form
                    .hass=${this.hass}
                    .data=${{ [r]: a }}
                    .schema=${[{
			name: r,
			required: !1,
			selector: { entity: { domain: "sensor" } }
		}]}
                    .computeLabel=${() => I("pollen.config.raw_sensor")}
                    .computeHelper=${() => I("pollen.config.raw_sensor_hint")}
                    @value-changed=${this._valueChanged}
                  ></ha-form>
                </div>
              ` : ""}
      </div>
    `;
	}
	_toggleType(e, t) {
		let n = {
			...this._config,
			[`${e}_enabled`]: t
		};
		this._config = n, z(this, "config-changed", { config: n }), this.requestUpdate();
	}
	_valueChanged(e) {
		this._config ||= { type: `custom:${ao}` };
		let t = {
			...this._config,
			...e.detail.value
		};
		this._config = t, z(this, "config-changed", { config: t });
	}
};
A([D({ attribute: !1 }), k("design:type", Object)], mo.prototype, "hass", void 0), A([D({ attribute: !1 }), k("design:type", Object)], mo.prototype, "_config", void 0), mo = A([E(oo)], mo);
//#endregion
//#region src/index.ts
var ho = (e) => (t, n) => n.split(".")[0] === "weather" ? { config: {
	type: `custom:${e}`,
	entity: n
} } : null;
Xn({
	type: fn,
	name: "SwissWeather Diagram Card",
	description: "A comprehensive weather card for Home Assistant with Swiss weather warnings and forecasts",
	getEntitySuggestion: ho(fn)
}), Xn({
	type: Yi,
	name: "SwissWeather Daily Forecast Diagram Card",
	description: "A card to show daily weather forecast as diagram",
	getEntitySuggestion: ho(Yi)
}), Xn({
	type: _a,
	name: "SwissWeather Animated Background Card (Experimental) Editor",
	description: "the SwissWeather Animated Background Card (Experimental)",
	getEntitySuggestion: ho(_a)
}), Xn({
	type: Fa,
	name: "SwissWeather Temperature Chart Card",
	description: "Hourly temperature forecast chart as standalone card",
	getEntitySuggestion: ho(Fa)
}), Xn({
	type: La,
	name: "SwissWeather Precipitation Chart Card",
	description: "Hourly precipitation forecast chart as standalone card",
	getEntitySuggestion: ho(La)
}), Xn({
	type: za,
	name: "SwissWeather Sunshine Chart Card",
	description: "Hourly sunshine duration chart as standalone card",
	getEntitySuggestion: ho(za)
}), Xn({
	type: Va,
	name: "SwissWeather Wind Chart Card",
	description: "Hourly wind speed & direction chart as standalone card",
	getEntitySuggestion: ho(Va)
}), Xn({
	type: eo,
	name: "SwissWeather Warning Card",
	description: "Standalone weather warning card supporting ranked and legacy warning models",
	getEntitySuggestion: (e, t) => {
		if (t.split(".")[0] !== "sensor") return null;
		let n = t.toLowerCase();
		if (!n.includes("warning")) return null;
		let r;
		return r = n.includes("primary") ? "primary_warning_entity" : n.includes("secondary") ? "secondary_warning_entity" : n.includes("tertiary") ? "tertiary_warning_entity" : "warning_entity", { config: {
			type: `custom:${eo}`,
			[r]: t
		} };
	}
}), Xn({
	type: ao,
	name: "SwissWeather Pollen Card",
	description: "Displays current pollen levels for up to 7 pollen types from SwissWeather integration",
	getEntitySuggestion: (e, t) => {
		if (t.split(".")[0] !== "sensor") return null;
		let n = t.toLowerCase();
		if (!n.includes("pollen")) return null;
		let r = [
			"birch",
			"grasses",
			"alder",
			"hazel",
			"beech",
			"ash",
			"oak"
		].find((e) => n.includes(e));
		return r ? { config: {
			type: `custom:${ao}`,
			[`${r}_entity`]: t
		} } : null;
	}
});
//#endregion
export { j as DailyForecastChart, N as DailyForecastDiagram, $i as ForecastDiagramCard, Qi as ForecastDiagramCardEditor, qe as ForecastTemperatureChart, po as PollenCard, mo as PollenCardEditor, Ja as PrecipitationCard, Ya as PrecipitationCardEditor, Xe as PrecipitationChart, Xa as SunshineCard, Za as SunshineCardEditor, Ze as SunshineChart, Ma as SwissWeatherBGCard, Pa as SwissWeatherBGCardEditor, Y as SwissWeatherCard, mn as SwissWeatherCardEditor, Ka as TemperatureCard, qa as TemperatureCardEditor, ro as WarningCard, io as WarningCardEditor, Qa as WindCard, $a as WindCardEditor, Qe as WindChart };

//# sourceMappingURL=swissweather-card.js.map
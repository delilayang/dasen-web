(function() {
	(function(n) {
		var i = this || eval("this"),
			r = i.document,
			f = i.navigator,
			t = i.jQuery,
			u = i.JSON;
		(function(n) {
			"function" == typeof require && "object" == typeof exports && "object" == typeof module ? n(module.exports || exports, require) : "function" == typeof define && define.amd ? define(["exports", "require"], n) : n(i.ko = {})
		})(function(e, o) {
			function p(n, t) {
				return null === n || typeof n in b ? n === t : !1
			}
			function w(n, t, i, r) {
				s.d[n] = {
					init: function(n, u, f, e, o) {
						var c, h;
						return s.s(function() {
							var l = s.a.c(u()),
								e = !i != !l,
								f = !h;
							(f || t || e !== c) && (f && s.Y.la() && (h = s.a.ia(s.f.childNodes(n), !0)), e ? (f || s.f.T(n, s.a.ia(h)), s.Ca(r ? r(o, l) : o, n)) : s.f.ja(n), c = e)
						}, null, {
							o: n
						}), {
							controlsDescendantBindings: !0
						}
					}
				}, s.h.ha[n] = !1, s.f.Q[n] = !0
			}
			var s = "undefined" != typeof e ? e : {},
				b, l, h, c, v, y, a;
			s.b = function(n, t) {
				for (var i = n.split("."), u = s, r = 0; r < i.length - 1; r++) u = u[i[r]];
				u[i[i.length - 1]] = t
			}, s.A = function(n, t, i) {
				n[t] = i
			}, s.version = "3.2.0", s.b("version", s.version), s.a = function() {
				function o(n, t) {
					for (var i in n) n.hasOwnProperty(i) && t(i, n[i])
				}
				function y(n, t) {
					if (t) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
					return n
				}
				function v(n, t) {
					return n.__proto__ = t, n
				}
				var l = {
					__proto__: []
				}
				instanceof Array, h = {}, a = {}, c, e;
				return h[f && /Firefox\/2/i.test(f.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"], h.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "), o(h, function(n, t) {
					if (t.length) for (var i = 0, r = t.length; i < r; i++) a[t[i]] = n
				}), c = {
					propertychange: !0
				}, e = r &&
				function() {
					for (var t = 3, i = r.createElement("div"), u = i.getElementsByTagName("i"); i.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", u[0];);
					return 4 < t ? t : n
				}(), {
					vb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
					u: function(n, t) {
						for (var i = 0, r = n.length; i < r; i++) t(n[i], i)
					},
					m: function(n, t) {
						if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(n, t);
						for (var i = 0, r = n.length; i < r; i++) if (n[i] === t) return i;
						return -1
					},
					qb: function(n, t, i) {
						for (var r = 0, u = n.length; r < u; r++) if (t.call(i, n[r], r)) return n[r];
						return null
					},
					ua: function(n, t) {
						var i = s.a.m(n, t);
						0 < i ? n.splice(i, 1) : 0 === i && n.shift()
					},
					rb: function(n) {
						n = n || [];
						for (var i = [], t = 0, r = n.length; t < r; t++) 0 > s.a.m(i, n[t]) && i.push(n[t]);
						return i
					},
					Da: function(n, t) {
						n = n || [];
						for (var r = [], i = 0, u = n.length; i < u; i++) r.push(t(n[i], i));
						return r
					},
					ta: function(n, t) {
						n = n || [];
						for (var r = [], i = 0, u = n.length; i < u; i++) t(n[i], i) && r.push(n[i]);
						return r
					},
					ga: function(n, t) {
						if (t instanceof Array) n.push.apply(n, t);
						else for (var i = 0, r = t.length; i < r; i++) n.push(t[i]);
						return n
					},
					ea: function(n, t, i) {
						var r = s.a.m(s.a.Xa(n), t);
						0 > r ? i && n.push(t) : i || n.splice(r, 1)
					},
					xa: l,
					extend: y,
					za: v,
					Aa: l ? v : y,
					G: o,
					na: function(n, t) {
						if (!n) return n;
						var r = {},
							i;
						for (i in n) n.hasOwnProperty(i) && (r[i] = t(n[i], i, n));
						return r
					},
					Ka: function(n) {
						for (; n.firstChild;) s.removeNode(n.firstChild)
					},
					oc: function(n) {
						n = s.a.S(n);
						for (var i = r.createElement("div"), t = 0, u = n.length; t < u; t++) i.appendChild(s.R(n[t]));
						return i
					},
					ia: function(n, t) {
						for (var i, r = 0, f = n.length, u = []; r < f; r++) i = n[r].cloneNode(!0), u.push(t ? s.R(i) : i);
						return u
					},
					T: function(n, t) {
						if (s.a.Ka(n), t) for (var i = 0, r = t.length; i < r; i++) n.appendChild(t[i])
					},
					Lb: function(n, t) {
						var r = n.nodeType ? [n] : n;
						if (0 < r.length) {
							for (var f = r[0], e = f.parentNode, i = 0, u = t.length; i < u; i++) e.insertBefore(t[i], f);
							for (i = 0, u = r.length; i < u; i++) s.removeNode(r[i])
						}
					},
					ka: function(n, t) {
						if (n.length) {
							for (t = 8 === t.nodeType && t.parentNode || t; n.length && n[0].parentNode !== t;) n.shift();
							if (1 < n.length) {
								var i = n[0],
									r = n[n.length - 1];
								for (n.length = 0; i !== r;) if (n.push(i), i = i.nextSibling, !i) return;
								n.push(r)
							}
						}
						return n
					},
					Nb: function(n, t) {
						7 > e ? n.setAttribute("selected", t) : n.selected = t
					},
					cb: function(t) {
						return null === t || t === n ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
					},
					vc: function(n, t) {
						return n = n || "", t.length > n.length ? !1 : n.substring(0, t.length) === t
					},
					cc: function(n, t) {
						if (n === t) return !0;
						if (11 === n.nodeType) return !1;
						if (t.contains) return t.contains(3 === n.nodeType ? n.parentNode : n);
						if (t.compareDocumentPosition) return 16 == (t.compareDocumentPosition(n) & 16);
						for (; n && n != t;) n = n.parentNode;
						return !!n
					},
					Ja: function(n) {
						return s.a.cc(n, n.ownerDocument.documentElement)
					},
					ob: function(n) {
						return !!s.a.qb(n, s.a.Ja)
					},
					t: function(n) {
						return n && n.tagName && n.tagName.toLowerCase()
					},
					n: function(n, i, r) {
						var o = e && c[i],
							f, u;
						if (!o && t) t(n).bind(i, r);
						else if (o || "function" != typeof n.addEventListener) if ("undefined" != typeof n.attachEvent) f = function(t) {
							r.call(n, t)
						}, u = "on" + i, n.attachEvent(u, f), s.a.w.da(n, function() {
							n.detachEvent(u, f)
						});
						else throw Error("Browser doesn't support addEventListener or attachEvent");
						else n.addEventListener(i, r, !1)
					},
					oa: function(n, u) {
						if (!n || !n.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
						var f;
						if ("input" === s.a.t(n) && n.type && "click" == u.toLowerCase() ? (f = n.type, f = "checkbox" == f || "radio" == f) : f = !1, t && !f) t(n).trigger(u);
						else if ("function" == typeof r.createEvent) if ("function" == typeof n.dispatchEvent) f = r.createEvent(a[u] || "HTMLEvents"), f.initEvent(u, !0, !0, i, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, n), n.dispatchEvent(f);
						else throw Error("The supplied element doesn't support dispatchEvent");
						else if (f && n.click) n.click();
						else if ("undefined" != typeof n.fireEvent) n.fireEvent("on" + u);
						else throw Error("Browser doesn't support triggering events");
					},
					c: function(n) {
						return s.C(n) ? n() : n
					},
					Xa: function(n) {
						return s.C(n) ? n.v() : n
					},
					Ba: function(n, t, i) {
						if (t) {
							var u = /\S+/g,
								r = n.className.match(u) || [];
							s.a.u(t.match(u), function(n) {
								s.a.ea(r, n, i)
							}), n.className = r.join(" ")
						}
					},
					bb: function(t, i) {
						var u = s.a.c(i),
							r;
						(null === u || u === n) && (u = ""), r = s.f.firstChild(t), !r || 3 != r.nodeType || s.f.nextSibling(r) ? s.f.T(t, [t.ownerDocument.createTextNode(u)]) : r.data = u, s.a.fc(t)
					},
					Mb: function(n, t) {
						if (n.name = t, 7 >= e) try {
							n.mergeAttributes(r.createElement("<input name='" + n.name + "'/>"), !1)
						} catch (i) {}
					},
					fc: function(n) {
						9 <= e && (n = 1 == n.nodeType ? n : n.parentNode, n.style && (n.style.zoom = n.style.zoom))
					},
					dc: function(n) {
						if (e) {
							var t = n.style.width;
							n.style.width = 0, n.style.width = t
						}
					},
					sc: function(n, t) {
						n = s.a.c(n), t = s.a.c(t);
						for (var r = [], i = n; i <= t; i++) r.push(i);
						return r
					},
					S: function(n) {
						for (var i = [], t = 0, r = n.length; t < r; t++) i.push(n[t]);
						return i
					},
					yc: 6 === e,
					zc: 7 === e,
					L: e,
					xb: function(n, t) {
						for (var r = s.a.S(n.getElementsByTagName("input")).concat(s.a.S(n.getElementsByTagName("textarea"))), f = "string" == typeof t ?
						function(n) {
							return n.name === t
						} : function(n) {
							return t.test(n.name)
						}, u = [], i = r.length - 1; 0 <= i; i--) f(r[i]) && u.push(r[i]);
						return u
					},
					pc: function(n) {
						return "string" == typeof n && (n = s.a.cb(n)) ? u && u.parse ? u.parse(n) : new Function("return " + n)() : null
					},
					eb: function(n, t, i) {
						if (!u || !u.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
						return u.stringify(s.a.c(n), t, i)
					},
					qc: function(n, t, i) {
						var l, e, h, f, u, c;
						i = i || {};
						var a = i.params || {},
							v = i.includeFields || this.vb,
							l = n;
						if ("object" == typeof n && "form" === s.a.t(n)) for (l = n.action, e = v.length - 1; 0 <= e; e--) for (h = s.a.xb(n, v[e]), f = h.length - 1; 0 <= f; f--) a[h[f].name] = h[f].value;
						t = s.a.c(t), u = r.createElement("form"), u.style.display = "none", u.action = l, u.method = "post";
						for (c in t) n = r.createElement("input"), n.type = "hidden", n.name = c, n.value = s.a.eb(s.a.c(t[c])), u.appendChild(n);
						o(a, function(n, t) {
							var i = r.createElement("input");
							i.type = "hidden", i.name = n, i.value = t, u.appendChild(i)
						}), r.body.appendChild(u), i.submitter ? i.submitter(u) : u.submit(), setTimeout(function() {
							u.parentNode.removeChild(u)
						}, 0)
					}
				}
			}(), s.b("utils", s.a), s.b("utils.arrayForEach", s.a.u), s.b("utils.arrayFirst", s.a.qb), s.b("utils.arrayFilter", s.a.ta), s.b("utils.arrayGetDistinctValues", s.a.rb), s.b("utils.arrayIndexOf", s.a.m), s.b("utils.arrayMap", s.a.Da), s.b("utils.arrayPushAll", s.a.ga), s.b("utils.arrayRemoveItem", s.a.ua), s.b("utils.extend", s.a.extend), s.b("utils.fieldsIncludedWithJsonPost", s.a.vb), s.b("utils.getFormFields", s.a.xb), s.b("utils.peekObservable", s.a.Xa), s.b("utils.postJson", s.a.qc), s.b("utils.parseJson", s.a.pc), s.b("utils.registerEventHandler", s.a.n), s.b("utils.stringifyJson", s.a.eb), s.b("utils.range", s.a.sc), s.b("utils.toggleDomNodeCssClass", s.a.Ba), s.b("utils.triggerEvent", s.a.oa), s.b("utils.unwrapObservable", s.a.c), s.b("utils.objectForEach", s.a.G), s.b("utils.addOrRemoveItem", s.a.ea), s.b("unwrap", s.a.c), Function.prototype.bind || (Function.prototype.bind = function(n) {
				var i = this,
					t = Array.prototype.slice.call(arguments);
				return n = t.shift(), function() {
					return i.apply(n, t.concat(Array.prototype.slice.call(arguments)))
				}
			}), s.a.e = new function() {
				function r(r, f) {
					var e = r[t];
					if (!e || "null" === e || !i[e]) {
						if (!f) return n;
						e = r[t] = "ko" + u++, i[e] = {}
					}
					return i[e]
				}
				var u = 0,
					t = "__ko__" + +new Date,
					i = {};
				return {
					get: function(t, i) {
						var u = r(t, !1);
						return u === n ? n : u[i]
					},
					set: function(t, i, u) {
						(u !== n || r(t, !1) !== n) && (r(t, !0)[i] = u)
					},
					clear: function(n) {
						var r = n[t];
						return r ? (delete i[r], n[t] = null, !0) : !1
					},
					F: function() {
						return u+++t
					}
				}
			}, s.b("utils.domData", s.a.e), s.b("utils.domData.clear", s.a.e.clear), s.a.w = new function() {
				function u(t, r) {
					var u = s.a.e.get(t, i);
					return u === n && r && (u = [], s.a.e.set(t, i, u)), u
				}
				function r(n) {
					var t = u(n, !1),
						i;
					if (t) for (t = t.slice(0), i = 0; i < t.length; i++) t[i](n);
					if (s.a.e.clear(n), s.a.w.cleanExternalData(n), f[n.nodeType]) for (t = n.firstChild; n = t;) t = n.nextSibling, 8 === n.nodeType && r(n)
				}
				var i = s.a.e.F(),
					e = {
						1: !0,
						8: !0,
						9: !0
					},
					f = {
						1: !0,
						9: !0
					};
				return {
					da: function(n, t) {
						if ("function" != typeof t) throw Error("Callback must be a function");
						u(n, !0).push(t)
					},
					Kb: function(t, r) {
						var f = u(t, !1);
						f && (s.a.ua(f, r), 0 == f.length && s.a.e.set(t, i, n))
					},
					R: function(n) {
						var i, t, u;
						if (e[n.nodeType] && (r(n), f[n.nodeType])) for (i = [], s.a.ga(i, n.getElementsByTagName("*")), t = 0, u = i.length; t < u; t++) r(i[t]);
						return n
					},
					removeNode: function(n) {
						s.R(n), n.parentNode && n.parentNode.removeChild(n)
					},
					cleanExternalData: function(n) {
						t && "function" == typeof t.cleanData && t.cleanData([n])
					}
				}
			}, s.R = s.a.w.R, s.removeNode = s.a.w.removeNode, s.b("cleanNode", s.R), s.b("removeNode", s.removeNode), s.b("utils.domNodeDisposal", s.a.w), s.b("utils.domNodeDisposal.addDisposeCallback", s.a.w.da), s.b("utils.domNodeDisposal.removeDisposeCallback", s.a.w.Kb), function() {
				s.a.ba = function(n) {
					var u, f;
					if (t) {
						if (t.parseHTML) u = t.parseHTML(n) || [];
						else if ((u = t.clean([n])) && u[0]) {
							for (n = u[0]; n.parentNode && 11 !== n.parentNode.nodeType;) n = n.parentNode;
							n.parentNode && n.parentNode.removeChild(n)
						}
					} else {
						for (f = s.a.cb(n).toLowerCase(), u = r.createElement("div"), f = f.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !f.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!f.indexOf("<td") || !f.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""], n = "ignored<div>" + f[1] + n + f[2] + "</div>", "function" == typeof i.innerShiv ? u.appendChild(i.innerShiv(n)) : u.innerHTML = n; f[0]--;) u = u.lastChild;
						u = s.a.S(u.lastChild.childNodes)
					}
					return u
				}, s.a.$a = function(i, r) {
					if (s.a.Ka(i), r = s.a.c(r), null !== r && r !== n) if ("string" != typeof r && (r = r.toString()), t) t(i).html(r);
					else for (var f = s.a.ba(r), u = 0; u < f.length; u++) i.appendChild(f[u])
				}
			}(), s.b("utils.parseHtmlFragment", s.a.ba), s.b("utils.setHtml", s.a.$a), s.D = function() {
				function i(n, t) {
					var r;
					if (n) if (8 == n.nodeType) r = s.D.Gb(n.nodeValue), null != r && t.push({
						bc: n,
						mc: r
					});
					else if (1 == n.nodeType) for (var r = 0, u = n.childNodes, f = u.length; r < f; r++) i(u[r], t)
				}
				var t = {};
				return {
					Ua: function(n) {
						if ("function" != typeof n) throw Error("You can only pass a function to ko.memoization.memoize()");
						var i = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
						return t[i] = n, "<!--[ko_memo:" + i + "]-->"
					},
					Rb: function(i, r) {
						var u = t[i];
						if (u === n) throw Error("Couldn't find any memo with ID " + i + ". Perhaps it's already been unmemoized.");
						try {
							return u.apply(null, r || []), !0
						} finally {
							delete t[i]
						}
					},
					Sb: function(n, t) {
						var f = [],
							u, o, r, e;
						for (i(n, f), u = 0, o = f.length; u < o; u++) r = f[u].bc, e = [r], t && s.a.ga(e, t), s.D.Rb(f[u].mc, e), r.nodeValue = "", r.parentNode && r.parentNode.removeChild(r)
					},
					Gb: function(n) {
						return (n = n.match(/^\[ko_memo\:(.*?)\]$/)) ? n[1] : null
					}
				}
			}(), s.b("memoization", s.D), s.b("memoization.memoize", s.D.Ua), s.b("memoization.unmemoize", s.D.Rb), s.b("memoization.parseMemoText", s.D.Gb), s.b("memoization.unmemoizeDomNodeAndDescendants", s.D.Sb), s.La = {
				throttle: function(n, t) {
					n.throttleEvaluation = t;
					var i = null;
					return s.j({
						read: n,
						write: function(r) {
							clearTimeout(i), i = setTimeout(function() {
								n(r)
							}, t)
						}
					})
				},
				rateLimit: function(n, t) {
					var i, u, r;
					"number" == typeof t ? i = t : (i = t.timeout, u = t.method), r = "notifyWhenChangesStop" == u ? d : k, n.Ta(function(n) {
						return r(n, i)
					})
				},
				notify: function(n, t) {
					n.equalityComparer = "always" == t ? null : p
				}
			}, b = {
				undefined: 1,
				boolean: 1,
				number: 1,
				string: 1
			}, s.b("extenders", s.La), s.Pb = function(n, t, i) {
				this.target = n, this.wa = t, this.ac = i, this.Cb = !1, s.A(this, "dispose", this.K)
			}, s.Pb.prototype.K = function() {
				this.Cb = !0, this.ac()
			}, s.P = function() {
				s.a.Aa(this, s.P.fn), this.M = {}
			}, l = "change", h = {
				U: function(n, t, i) {
					var r = this,
						u;
					return i = i || l, u = new s.Pb(r, t ? n.bind(t) : n, function() {
						s.a.ua(r.M[i], u), r.nb && r.nb()
					}), r.va && r.va(i), r.M[i] || (r.M[i] = []), r.M[i].push(u), u
				},
				notifySubscribers: function(n, t) {
					if (t = t || l, this.Ab(t)) try {
						s.k.Ea();
						for (var u = this.M[t].slice(0), r = 0, i; i = u[r]; ++r) i.Cb || i.wa(n)
					} finally {
						s.k.end()
					}
				},
				Ta: function(n) {
					var t = this,
						e = s.C(t),
						u, r, i, f;
					t.qa || (t.qa = t.notifySubscribers, t.notifySubscribers = function(n, i) {
						i && i !== l ? "beforeChange" === i ? t.kb(n) : t.qa(n, i) : t.lb(n)
					}), f = n(function() {
						e && i === t && (i = t()), u = !1, t.Pa(r, i) && t.qa(r = i)
					}), t.lb = function(n) {
						u = !0, i = n, f()
					}, t.kb = function(n) {
						u || (r = n, t.qa(n, "beforeChange"))
					}
				},
				Ab: function(n) {
					return this.M[n] && this.M[n].length
				},
				yb: function() {
					var n = 0;
					return s.a.G(this.M, function(t, i) {
						n += i.length
					}), n
				},
				Pa: function(n, t) {
					return !this.equalityComparer || !this.equalityComparer(n, t)
				},
				extend: function(n) {
					var t = this;
					return n && s.a.G(n, function(n, i) {
						var r = s.La[n];
						"function" == typeof r && (t = r(t, i) || t)
					}), t
				}
			}, s.A(h, "subscribe", h.U), s.A(h, "extend", h.extend), s.A(h, "getSubscriptionsCount", h.yb), s.a.xa && s.a.za(h, Function.prototype), s.P.fn = h, s.Db = function(n) {
				return null != n && "function" == typeof n.U && "function" == typeof n.notifySubscribers
			}, s.b("subscribable", s.P), s.b("isSubscribable", s.Db), s.Y = s.k = function() {
				function i(i) {
					t.push(n), n = i
				}
				function r() {
					n = t.pop()
				}
				var t = [],
					n, u = 0;
				return {
					Ea: i,

					end: r,
					Jb: function(t) {
						if (n) {
							if (!s.Db(t)) throw Error("Only subscribable things can act as dependencies");
							n.wa(t, t.Vb || (t.Vb = ++u))
						}
					},
					B: function(n, t, u) {
						try {
							return i(), n.apply(t, u || [])
						} finally {
							r()
						}
					},
					la: function() {
						if (n) return n.s.la()
					},
					ma: function() {
						if (n) return n.ma
					}
				}
			}(), s.b("computedContext", s.Y), s.b("computedContext.getDependenciesCount", s.Y.la), s.b("computedContext.isInitial", s.Y.ma), s.b("computedContext.isSleeping", s.Y.Ac), s.p = function(n) {
				function t() {
					return 0 < arguments.length ? (t.Pa(i, arguments[0]) && (t.X(), i = arguments[0], t.W()), this) : (s.k.Jb(t), i)
				}
				var i = n;
				return s.P.call(t), s.a.Aa(t, s.p.fn), t.v = function() {
					return i
				}, t.W = function() {
					t.notifySubscribers(i)
				}, t.X = function() {
					t.notifySubscribers(i, "beforeChange")
				}, s.A(t, "peek", t.v), s.A(t, "valueHasMutated", t.W), s.A(t, "valueWillMutate", t.X), t
			}, s.p.fn = {
				equalityComparer: p
			}, c = s.p.rc = "__ko_proto__", s.p.fn[c] = s.p, s.a.xa && s.a.za(s.p.fn, s.P.fn), s.Ma = function(t, i) {
				return null === t || t === n || t[c] === n ? !1 : t[c] === i ? !0 : s.Ma(t[c], i)
			}, s.C = function(n) {
				return s.Ma(n, s.p)
			}, s.Ra = function(n) {
				return "function" == typeof n && n[c] === s.p || "function" == typeof n && n[c] === s.j && n.hc ? !0 : !1
			}, s.b("observable", s.p), s.b("isObservable", s.C), s.b("isWriteableObservable", s.Ra), s.b("isWritableObservable", s.Ra), s.aa = function(n) {
				if (n = n || [], "object" != typeof n || !("length" in n)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
				return n = s.p(n), s.a.Aa(n, s.aa.fn), n.extend({
					trackArrayChanges: !0
				})
			}, s.aa.fn = {
				remove: function(n) {
					for (var r, u = this.v(), i = [], f = "function" != typeof n || s.C(n) ?
					function(t) {
						return t === n
					} : n, t = 0; t < u.length; t++) r = u[t], f(r) && (0 === i.length && this.X(), i.push(r), u.splice(t, 1), t--);
					return i.length && this.W(), i
				},
				removeAll: function(t) {
					if (t === n) {
						var i = this.v(),
							r = i.slice(0);
						return this.X(), i.splice(0, i.length), this.W(), r
					}
					return t ? this.remove(function(n) {
						return 0 <= s.a.m(t, n)
					}) : []
				},
				destroy: function(n) {
					var i = this.v(),
						r = "function" != typeof n || s.C(n) ?
					function(t) {
						return t === n
					} : n, t;
					for (this.X(), t = i.length - 1; 0 <= t; t--) r(i[t]) && (i[t]._destroy = !0);
					this.W()
				},
				destroyAll: function(t) {
					return t === n ? this.destroy(function() {
						return !0
					}) : t ? this.destroy(function(n) {
						return 0 <= s.a.m(t, n)
					}) : []
				},
				indexOf: function(n) {
					var t = this();
					return s.a.m(t, n)
				},
				replace: function(n, t) {
					var i = this.indexOf(n);
					0 <= i && (this.X(), this.v()[i] = t, this.W())
				}
			}, s.a.u("pop push reverse shift sort splice unshift".split(" "), function(n) {
				s.aa.fn[n] = function() {
					var t = this.v();
					return this.X(), this.sb(t, n, arguments), t = t[n].apply(t, arguments), this.W(), t
				}
			}), s.a.u(["slice"], function(n) {
				s.aa.fn[n] = function() {
					var t = this();
					return t[n].apply(t, arguments)
				}
			}), s.a.xa && s.a.za(s.aa.fn, s.p.fn), s.b("observableArray", s.aa), v = "arrayChange", s.La.trackArrayChanges = function(n) {
				function f() {
					var f, u;
					r || (r = !0, f = n.notifySubscribers, n.notifySubscribers = function(n, t) {
						return t && t !== l || ++i, f.apply(this, arguments)
					}, u = [].concat(n.v() || []), t = null, n.U(function(r) {
						if (r = [].concat(r || []), n.Ab(v)) {
							var f;
							(!t || 1 < i) && (t = s.a.Fa(u, r, {
								sparse: !0

							})), f = t, f.length && n.notifySubscribers(f, v)
						}
						u = r, t = null, i = 0
					}))
				}
				if (!n.sb) {
					var r = !1,
						t = null,
						i = 0,
						u = n.U;
					n.U = n.subscribe = function(n, t, i) {
						return i === v && f(), u.apply(this, arguments)
					}, n.sb = function(n, u, f) {
						function c(n, t, i) {
							return l[l.length] = {
								status: n,
								value: t,
								index: i
							}
						}
						if (r && !i) {
							var l = [],
								e = n.length,
								h = f.length,
								o = 0;
							switch (u) {
							case "push":
								o = e;
							case "unshift":
								for (u = 0; u < h; u++) c("added", f[u], o + u);
								break;
							case "pop":
								o = e - 1;
							case "shift":
								e && c("deleted", n[o], o);
								break;
							case "splice":
								u = Math.min(Math.max(0, 0 > f[0] ? e + f[0] : f[0]), e);
								for (var e = 1 === h ? e : Math.min(u + (f[1] || 0), e), h = u + h - 2, o = Math.max(e, h), y = [], v = [], a = 2; u < o; ++u, ++a) u < e && v.push(c("deleted", n[u], u)), u < h && y.push(c("added", f[a], u));
								s.a.wb(v, y);
								break;
							default:
								return
							}
							t = l
						}
					}
				}
			}, s.s = s.j = function(t, i, r) {
				function nt() {
					s.a.G(l, function(n, t) {
						t.K()
					}), l = {}
				}
				function tt() {
					nt(), f = 0, g = !0, h = !1
				}
				function ot() {
					var n = u.throttleEvaluation;
					n && 0 <= n ? (clearTimeout(rt), rt = setTimeout(v, n)) : u.ib ? u.ib() : v()
				}
				function v(t) {
					var w, r, c, v;
					if (p) {
						if (k) throw Error("A 'pure' computed must not be called recursively");
					} else if (!g) {
						if (b && b()) {
							if (!d) {
								a();
								return
							}
						} else d = !1;
						if (p = !0, y) try {
							w = {}, s.k.Ea({
								wa: function(n, t) {
									w[t] || (w[t] = 1, ++f)
								},
								s: u,
								ma: n
							}), f = 0, o = e.call(i)
						} finally {
							s.k.end(), p = !1
						} else try {
							r = l, c = f, s.k.Ea({
								wa: function(n, t) {
									g || (c && r[t] ? (l[t] = r[t], ++f, delete r[t], --c) : l[t] || (l[t] = n.U(ot), ++f))
								},
								s: u,
								ma: k ? n : !f
							}), l = {}, f = 0;
							try {
								v = i ? e.call(i) : e()
							} finally {
								s.k.end(), c && s.a.G(r, function(n, t) {
									t.K()
								}), h = !1
							}
							u.Pa(o, v) && (u.notifySubscribers(o, "beforeChange"), o = v, !0 !== t && u.notifySubscribers(o))
						} finally {
							p = !1
						}
						f || a()
					}
				}
				function u() {
					if (0 < arguments.length) {
						if ("function" == typeof ft) ft.apply(i, arguments);
						else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
						return this
					}
					return s.k.Jb(u), h && v(!0), o
				}
				function et() {
					return h && !f && v(!0), o
				}
				function ut() {
					return h || 0 < f
				}
				var o, h = !0,
					p = !1,
					d = !1,
					g = !1,
					e = t,
					k = !1,
					y = !1,
					it;
				if (e && "object" == typeof e ? (r = e, e = r.read) : (r = r || {}, e || (e = r.read)), "function" != typeof e) throw Error("Pass a function that returns the value of the ko.computed");
				var ft = r.write,
					c = r.disposeWhenNodeIsRemoved || r.o || null,
					w = r.disposeWhen || r.Ia,
					b = w,
					a = tt,
					l = {},
					f = 0,
					rt = null;
				return i || (i = r.owner), s.P.call(u), s.a.Aa(u, s.j.fn), u.v = et, u.la = function() {
					return f
				}, u.hc = "function" == typeof r.write, u.K = function() {
					a()
				}, u.Z = ut, it = u.Ta, u.Ta = function(n) {
					it.call(u, n), u.ib = function() {
						u.kb(o), h = !0, u.lb(u)
					}
				}, r.pure ? (y = k = !0, u.va = function() {
					y && (y = !1, v(!0))
				}, u.nb = function() {
					u.yb() || (nt(), y = h = !0)
				}) : r.deferEvaluation && (u.va = function() {
					et(), delete u.va
				}), s.A(u, "peek", u.v), s.A(u, "dispose", u.K), s.A(u, "isActive", u.Z), s.A(u, "getDependenciesCount", u.la), c && (d = !0, c.nodeType && (b = function() {
					return !s.a.Ja(c) || w && w()
				})), y || r.deferEvaluation || v(), c && ut() && c.nodeType && (a = function() {
					s.a.w.Kb(c, a), tt()
				}, s.a.w.da(c, a)), u
			}, s.jc = function(n) {
				return s.Ma(n, s.j)
			}, h = s.p.rc, s.j[h] = s.p, s.j.fn = {
				equalityComparer: p
			}, s.j.fn[h] = s.j, s.a.xa && s.a.za(s.j.fn, s.P.fn), s.b("dependentObservable", s.j), s.b("computed", s.j), s.b("isComputed", s.jc), s.Ib = function(n, t) {
				return "function" == typeof n ? s.s(n, t, {
					pure: !0
				}) : (n = s.a.extend({}, n), n.pure = !0, s.s(n, t))
			}, s.b("pureComputed", s.Ib), function() {
				function i(u, f, e) {
					if (e = e || new t, u = f(u), "object" != typeof u || null === u || u === n || u instanceof Date || u instanceof String || u instanceof Number || u instanceof Boolean) return u;
					var o = u instanceof Array ? [] : {};
					return e.save(u, o), r(u, function(t) {
						var r = f(u[t]),
							s;
						switch (typeof r) {
						case "boolean":
						case "number":
						case "string":
						case "function":
							o[t] = r;
							break;
						case "object":
						case "undefined":
							s = e.get(r), o[t] = s !== n ? s : i(r, f, e)
						}
					}), o
				}
				function r(n, t) {
					if (n instanceof Array) {
						for (var i = 0; i < n.length; i++) t(i);
						"function" == typeof n.toJSON && t("toJSON")
					} else for (i in n) t(i)
				}
				function t() {
					this.keys = [], this.hb = []
				}
				s.Qb = function(n) {
					if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
					return i(n, function(n) {
						for (var t = 0; s.C(n) && 10 > t; t++) n = n();
						return n
					})
				}, s.toJSON = function(n, t, i) {
					return n = s.Qb(n), s.a.eb(n, t, i)
				}, t.prototype = {
					save: function(n, t) {
						var i = s.a.m(this.keys, n);
						0 <= i ? this.hb[i] = t : (this.keys.push(n), this.hb.push(t))
					},
					get: function(t) {
						return t = s.a.m(this.keys, t), 0 <= t ? this.hb[t] : n
					}
				}
			}(), s.b("toJS", s.Qb), s.b("toJSON", s.toJSON), function() {
				s.i = {
					q: function(t) {
						switch (s.a.t(t)) {
						case "option":
							return !0 === t.__ko__hasDomDataOptionValue__ ? s.a.e.get(t, s.d.options.Va) : 7 >= s.a.L ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
						case "select":
							return 0 <= t.selectedIndex ? s.i.q(t.options[t.selectedIndex]) : n;
						default:
							return t.value
						}
					},
					ca: function(t, i, r) {
						switch (s.a.t(t)) {
						case "option":
							switch (typeof i) {
							case "string":
								s.a.e.set(t, s.d.options.Va, n), "__ko__hasDomDataOptionValue__" in t && delete t.__ko__hasDomDataOptionValue__, t.value = i;
								break;
							default:
								s.a.e.set(t, s.d.options.Va, i), t.__ko__hasDomDataOptionValue__ = !0, t.value = "number" == typeof i ? i : ""
							}
							break;
						case "select":
							("" === i || null === i) && (i = n);
							for (var e = -1, u = 0, o = t.options.length, f; u < o; ++u) if (f = s.i.q(t.options[u]), f == i || "" == f && i === n) {
								e = u;
								break
							}(r || 0 <= e || i === n && 1 < t.size) && (t.selectedIndex = e);
							break;
						default:
							(null === i || i === n) && (i = ""), t.value = i
						}
					}
				}
			}(), s.b("selectExtensions", s.i), s.b("selectExtensions.readValue", s.i.q), s.b("selectExtensions.writeValue", s.i.ca), s.h = function() {
				function i(t) {
					var o, u, i;
					t = s.a.cb(t), 123 === t.charCodeAt(0) && (t = t.slice(1, -1));
					var a = [],
						h = t.match(n),
						c, f, l = 0;
					if (h) for (h.push(","), o = 0; u = h[o]; ++o) {
						if (i = u.charCodeAt(0), 44 === i) {
							if (0 >= l) {
								c && a.push(f ? {
									key: c,
									value: f.join("")
								} : {
									unknown: c
								}), c = f = l = 0;
								continue
							}
						} else if (58 === i) {
							if (!f) continue
						} else if (47 === i && o && 1 < u.length)(i = h[o - 1].match(e)) && !r[i[0]] && (t = t.substr(t.indexOf(u) + 1), h = t.match(n), h.push(","), o = -1, u = "/");
						else if (40 === i || 123 === i || 91 === i)++l;
						else if (41 === i || 125 === i || 93 === i)--l;
						else if (!c && !f) {
							c = 34 === i || 39 === i ? u.slice(1, -1) : u;
							continue
						}
						f ? f.push(u) : f = [u]
					}
					return a
				}
				var f = ["true", "false", "null", "undefined"],
					u = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
					n = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
					e = /[\])"'A-Za-z0-9_$]+$/,
					r = {
						"in": 1,
						"return": 1,
						"typeof": 1
					},
					t = {};
				return {
					ha: [],
					V: t,
					Wa: i,
					ya: function(n, r) {
						function o(n, i) {
							var c, r;
							if (!l) {
								if (r = s.getBindingHandler(n), r && r.preprocess && !(i = r.preprocess(i, n, o))) return;
								(r = t[n]) && (c = i, 0 <= s.a.m(f, c) ? c = !1 : (r = c.match(u), c = null === r ? !1 : r[1] ? "Object(" + r[1] + ")" + r[2] : c), r = c), r && e.push("'" + n + "':function(_z){" + c + "=_z}")
							}
							a && (i = "function(){return " + i + " }"), h.push("'" + n + "':" + i)
						}
						r = r || {};
						var h = [],
							e = [],
							a = r.valueAccessors,
							l = r.bindingParams,
							c = "string" == typeof n ? i(n) : n;
						return s.a.u(c, function(n) {
							o(n.key || n.unknown, n.value)
						}), e.length && o("_ko_property_writers", "{" + e.join(",") + " }"), h.join(",")
					},
					lc: function(n, t) {
						for (var i = 0; i < n.length; i++) if (n[i].key == t) return !0;
						return !1
					},
					pa: function(n, t, i, r, u) {
						n && s.C(n) ? !s.Ra(n) || u && n.v() === r || n(r) : (n = t.get("_ko_property_writers")) && n[i] && n[i](r)
					}
				}
			}(), s.b("expressionRewriting", s.h), s.b("expressionRewriting.bindingRewriteValidators", s.h.ha), s.b("expressionRewriting.parseObjectLiteral", s.h.Wa), s.b("expressionRewriting.preProcessBindings", s.h.ya), s.b("expressionRewriting._twoWayBindings", s.h.V), s.b("jsonExpressionRewriting", s.h), s.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", s.h.ya), function() {
				function n(n) {
					return 8 == n.nodeType && u.test(t ? n.text : n.nodeValue)
				}
				function i(n) {
					return 8 == n.nodeType && h.test(t ? n.text : n.nodeValue)
				}
				function f(t, r) {
					for (var u = t, f = 1, e = []; u = u.nextSibling;) {
						if (i(u) && (f--, 0 === f)) return e;
						e.push(u), n(u) && f++
					}
					if (!r) throw Error("Cannot find closing comment tag to match: " + t.nodeValue);
					return null
				}
				function e(n, t) {
					var i = f(n, t);
					return i ? 0 < i.length ? i[i.length - 1].nextSibling : n.nextSibling : null
				}
				var t = r && "<!--test-->" === r.createComment("test").text,
					u = t ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
					h = t ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
					o = {
						ul: !0,
						ol: !0
					};
				s.f = {
					Q: {},
					childNodes: function(t) {
						return n(t) ? f(t) : t.childNodes
					},
					ja: function(t) {
						if (n(t)) {
							t = s.f.childNodes(t);
							for (var i = 0, r = t.length; i < r; i++) s.removeNode(t[i])
						} else s.a.Ka(t)
					},
					T: function(t, i) {
						if (n(t)) {
							s.f.ja(t);
							for (var u = t.nextSibling, r = 0, f = i.length; r < f; r++) u.parentNode.insertBefore(i[r], u)
						} else s.a.T(t, i)
					},
					Hb: function(t, i) {
						n(t) ? t.parentNode.insertBefore(i, t.nextSibling) : t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i)
					},
					Bb: function(t, i, r) {
						r ? n(t) ? t.parentNode.insertBefore(i, r.nextSibling) : r.nextSibling ? t.insertBefore(i, r.nextSibling) : t.appendChild(i) : s.f.Hb(t, i)
					},
					firstChild: function(t) {
						return n(t) ? !t.nextSibling || i(t.nextSibling) ? null : t.nextSibling : t.firstChild
					},
					nextSibling: function(t) {
						return n(t) && (t = e(t)), t.nextSibling && i(t.nextSibling) ? null : t.nextSibling
					},
					gc: n,
					xc: function(n) {
						return (n = (t ? n.text : n.nodeValue).match(u)) ? n[1] : null
					},
					Fb: function(t) {
						var h, r, u, f;
						if (o[s.a.t(t)] && (h = t.firstChild, h)) do
						if (1 === h.nodeType) {
							if (r = h.firstChild, u = null, r) do u ? u.push(r) : n(r) ? (f = e(r, !0), f ? r = f : u = [r]) : i(r) && (u = [r]);
							while (r = r.nextSibling);
							if (r = u) for (u = h.nextSibling, f = 0; f < r.length; f++) u ? t.insertBefore(r[f], u) : t.appendChild(r[f])
						}
						while (h = h.nextSibling)
					}
				}
			}(), s.b("virtualElements", s.f), s.b("virtualElements.allowedBindings", s.f.Q), s.b("virtualElements.emptyNode", s.f.ja), s.b("virtualElements.insertAfter", s.f.Bb), s.b("virtualElements.prepend", s.f.Hb), s.b("virtualElements.setDomNodeChildren", s.f.T), function() {
				s.J = function() {
					this.Yb = {}
				}, s.a.extend(s.J.prototype, {
					nodeHasBindings: function(n) {
						switch (n.nodeType) {
						case 1:
							return null != n.getAttribute("data-bind") || s.g.getComponentNameForNode(n);
						case 8:
							return s.f.gc(n);
						default:
							return !1
						}
					},
					getBindings: function(n, t) {
						var i = this.getBindingsString(n, t),
							i = i ? this.parseBindingsString(i, t, n) : null;
						return s.g.mb(i, n, t, !1)
					},
					getBindingAccessors: function(n, t) {
						var i = this.getBindingsString(n, t),
							i = i ? this.parseBindingsString(i, t, n, {
								valueAccessors: !0
							}) : null;
						return s.g.mb(i, n, t, !0)
					},
					getBindingsString: function(n) {
						switch (n.nodeType) {
						case 1:
							return n.getAttribute("data-bind");
						case 8:
							return s.f.xc(n);
						default:
							return null
						}
					},
					parseBindingsString: function(n, t, i, r) {
						var e, f, u, h, o;
						try {
							return e = this.Yb, f = n + (r && r.valueAccessors || ""), (u = e[f]) || (o = "with($context){with($data||{}){return{" + s.h.ya(n, r) + "}}}", h = new Function("$context", "$element", o), u = e[f] = h), u(t, i)
						} catch (c) {
							throw c.message = "Unable to parse bindings.\nBindings value: " + n + "\nMessage: " + c.message, c;
						}
					}
				}), s.J.instance = new s.J
			}(), s.b("bindingProvider", s.J), function() {
				function v(n) {
					return function() {
						return n
					}
				}
				function e(n) {
					return n()
				}
				function c(n) {
					return s.a.na(s.k.B(n), function(t, i) {
						return function() {
							return n()[i]
						}
					})
				}
				function p(n, t) {
					return c(this.getBindings.bind(this, n, t))
				}
				function a(n, t, i) {
					var r, u = s.f.firstChild(t),
						e = s.J.instance,
						f = e.preprocessNode;
					if (f) {
						for (; r = u;) u = s.f.nextSibling(r), f.call(e, r);
						u = s.f.firstChild(t)
					}
					for (; r = u;) u = s.f.nextSibling(r), l(n, r, i)
				}
				function l(n, t, i) {
					var u = !0,
						r = 1 === t.nodeType;
					r && s.f.Fb(t), (r && i || s.J.instance.nodeHasBindings(t)) && (u = o(t, null, n, i).shouldBindDescendants), u && !h[s.a.t(t)] && a(n, t, !r)
				}
				function y(n) {
					var r = [],
						i = {},
						t = [];
					return s.a.G(n, function u(f) {
						if (!i[f]) {
							var e = s.getBindingHandler(f);
							e && (e.after && (t.push(f), s.a.u(e.after, function(i) {
								if (n[i]) {
									if (-1 !== s.a.m(t, i)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + t.join(", "));
									u(i)
								}
							}), t.length--), r.push({
								key: f,
								zb: e
							})), i[f] = !0
						}
					}), r
				}
				function o(t, i, r, f) {
					var v = s.a.e.get(t, u),
						o, a, l, c;
					if (!i) {
						if (v) throw Error("You cannot apply bindings multiple times to the same element.");
						s.a.e.set(t, u, !0)
					}
					if (!v && f && s.Ob(t, r), i && "function" != typeof i) o = i;
					else {
						var w = s.J.instance,
							b = w.getBindingAccessors || p,
							h = s.j(function() {
								return (o = i ? i(r, t) : b.call(w, t, r)) && r.I && r.I(), o
							}, null, {
								o: t
							});
						o && h.Z() || (h = null)
					}
					return o && (l = h ?
					function(n) {
						return function() {
							return e(h()[n])
						}
					} : function(n) {
						return o[n]
					}, c = function() {
						return s.a.na(h ? h() : o, e)
					}, c.get = function(n) {
						return o[n] && e(l(n))
					}, c.has = function(n) {
						return n in o
					}, f = y(o), s.a.u(f, function(i) {
						var e = i.zb.init,
							f = i.zb.update,
							u = i.key;
						if (8 === t.nodeType && !s.f.Q[u]) throw Error("The binding '" + u + "' cannot be used with virtual elements");
						try {
							"function" == typeof e && s.k.B(function() {
								var i = e(t, l(u), c, r.$data, r);
								if (i && i.controlsDescendantBindings) {
									if (a !== n) throw Error("Multiple bindings (" + a + " and " + u + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
									a = u
								}
							}), "function" == typeof f && s.j(function() {
								f(t, l(u), c, r.$data, r)
							}, null, {
								o: t
							})
						} catch (h) {
							throw h.message = 'Unable to process binding "' + u + ": " + o[u] + '"\nMessage: ' + h.message, h;
						}
					})), {
						shouldBindDescendants: a === n
					}
				}
				function r(n) {
					return n && n instanceof s.N ? n : new s.N(n)
				}
				var h, u, f;
				s.d = {}, h = {
					script: !0
				}, s.getBindingHandler = function(n) {
					return s.d[n]
				}, s.N = function(t, i, r, u) {
					var f = this,
						h = "function" == typeof t && !s.C(t),
						o, e = s.j(function() {
							var o = h ? t() : t,
								n = s.a.c(o);
							return i ? (i.I && i.I(), s.a.extend(f, i), e && (f.I = e)) : (f.$parents = [], f.$root = n, f.ko = s), f.$rawData = o, f.$data = n, r && (f[r] = n), u && u(f, i, n), f.$data
						}, null, {
							Ia: function() {
								return o && !s.a.ob(o)
							},
							o: !0
						});
					e.Z() && (f.I = e, e.equalityComparer = null, o = [], e.Tb = function(t) {
						o.push(t), s.a.w.da(t, function(t) {
							s.a.ua(o, t), o.length || (e.K(), f.I = e = n)
						})
					})
				}, s.N.prototype.createChildContext = function(n, t, i) {
					return new s.N(n, this, t, function(n, t) {
						n.$parentContext = t, n.$parent = t.$data, n.$parents = (t.$parents || []).slice(0), n.$parents.unshift(n.$parent), i && i(n)
					})
				}, s.N.prototype.extend = function(n) {
					return new s.N(this.I || this.$data, this, null, function(t, i) {
						t.$rawData = i.$rawData, s.a.extend(t, "function" == typeof n ? n() : n)
					})
				}, u = s.a.e.F(), f = s.a.e.F(), s.Ob = function(n, t) {
					if (2 == arguments.length) s.a.e.set(n, f, t), t.I && t.I.Tb(n);
					else return s.a.e.get(n, f)
				}, s.ra = function(n, t, i) {
					return 1 === n.nodeType && s.f.Fb(n), o(n, t, r(i), !0)
				}, s.Wb = function(n, t, i) {
					return i = r(i), s.ra(n, "function" == typeof t ? c(t.bind(null, i, n)) : s.a.na(t, v), i)
				}, s.Ca = function(n, t) {
					1 !== t.nodeType && 8 !== t.nodeType || a(r(n), t, !0)
				}, s.pb = function(n, u) {
					if (!t && i.jQuery && (t = i.jQuery), u && 1 !== u.nodeType && 8 !== u.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
					u = u || i.document.body, l(r(n), u, !0)
				}, s.Ha = function(t) {
					switch (t.nodeType) {
					case 1:
					case 8:
						var i = s.Ob(t);
						if (i) return i;
						if (t.parentNode) return s.Ha(t.parentNode)
					}
					return n
				}, s.$b = function(t) {
					return (t = s.Ha(t)) ? t.$data : n
				}, s.b("bindingHandlers", s.d), s.b("applyBindings", s.pb), s.b("applyBindingsToDescendants", s.Ca), s.b("applyBindingAccessorsToNode", s.ra), s.b("applyBindingsToNode", s.Wb), s.b("contextFor", s.Ha), s.b("dataFor", s.$b)
			}(), function(n) {
				function f(t, f) {
					var e = i.hasOwnProperty(t) ? i[t] : n,
						o;
					e || (e = i[t] = new s.P, u(t, function(n) {
						r[t] = n, delete i[t], o ? e.notifySubscribers(n) : setTimeout(function() {
							e.notifySubscribers(n)
						}, 0)
					}), o = !0), e.U(f)
				}
				function u(n, i) {
					t("getConfig", [n], function(r) {
						r ? t("loadComponent", [n, r], function(n) {
							i(n)
						}) : i(null)
					})
				}
				function t(i, r, u, f) {
					var e, h, o;
					if (f || (f = s.g.loaders.slice(0)), e = f.shift(), e) if (h = e[i], h) {
						if (o = !1, h.apply(e, r.concat(function(n) {
							o ? u(null) : null !== n ? u(n) : t(i, r, u, f)
						})) !== n && (o = !0, !e.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
					} else t(i, r, u, f);
					else u(null)
				}
				var i = {},
					r = {};
				s.g = {
					get: function(t, i) {
						var u = r.hasOwnProperty(t) ? r[t] : n;
						u ? setTimeout(function() {
							i(u)
						}, 0) : f(t, i)
					},
					tb: function(n) {
						delete r[n]
					},
					jb: t
				}, s.g.loaders = [], s.b("components", s.g), s.b("components.get", s.g.get), s.b("components.clearCachedDefinition", s.g.tb)
			}(), function() {
				function l(n, i, r, f) {
					function e() {
						0 == --c && f(o)
					}
					var o = {},
						c = 2,
						h = r.template;
					r = r.viewModel, h ? u(i, h, function(t) {
						s.g.jb("loadTemplate", [n, t], function(n) {
							o.template = n, e()
						})
					}) : e(), r ? u(i, r, function(i) {
						s.g.jb("loadViewModel", [n, i], function(n) {
							o[t] = n, e()
						})
					}) : e()
				}
				function e(n, i, r) {
					if ("function" == typeof i) r(function(n) {
						return new i(n)
					});
					else if ("function" == typeof i[t]) r(i[t]);
					else if ("instance" in i) {
						var u = i.instance;
						r(function() {
							return u
						})
					} else "viewModel" in i ? e(n, i.viewModel, r) : n("Unknown viewModel value: " + i)
				}
				function h(n) {
					switch (s.a.t(n)) {
					case "script":
						return s.a.ba(n.text);
					case "textarea":
						return s.a.ba(n.value);
					case "template":
						if (c(n.content)) return s.a.ia(n.content.childNodes)
					}
					return s.a.ia(n.childNodes)
				}
				function c(n) {
					return i.DocumentFragment ? n instanceof DocumentFragment : n && 11 === n.nodeType
				}
				function u(n, t, r) {
					"string" == typeof t.require ? o || i.require ? (o || i.require)([t.require], r) : n("Uses require, but no AMD loader is present") : r(t)
				}
				function f(n) {
					return function(t) {
						throw Error("Component '" + n + "': " + t);
					}
				}
				var n = {},
					t;
				s.g.tc = function(t, i) {
					if (!i) throw Error("Invalid configuration for " + t);
					if (s.g.Qa(t)) throw Error("Component " + t + " is already registered");
					n[t] = i
				}, s.g.Qa = function(t) {
					return t in n
				}, s.g.wc = function(t) {
					delete n[t], s.g.tb(t)
				}, s.g.ub = {
					getConfig: function(t, i) {
						i(n.hasOwnProperty(t) ? n[t] : null)
					},
					loadComponent: function(n, t, i) {
						var r = f(n);
						u(r, t, function(t) {
							l(n, r, t, i)
						})
					},
					loadTemplate: function(n, t, u) {
						if (n = f(n), "string" == typeof t) u(s.a.ba(t));
						else if (t instanceof Array) u(t);
						else if (c(t)) u(s.a.S(t.childNodes));
						else if (t.element) if (t = t.element, i.HTMLElement ? t instanceof HTMLElement : t && t.tagName && 1 === t.nodeType) u(h(t));
						else if ("string" == typeof t) {
							var e = r.getElementById(t);
							e ? u(h(e)) : n("Cannot find element with ID " + t)
						} else n("Unknown element type: " + t);
						else n("Unknown template value: " + t)
					},
					loadViewModel: function(n, t, i) {
						e(f(n), t, i)
					}
				}, t = "createViewModel", s.b("components.register", s.g.tc), s.b("components.isRegistered", s.g.Qa), s.b("components.unregister", s.g.wc), s.b("components.defaultLoader", s.g.ub), s.g.loaders.push(s.g.ub), s.g.Ub = n
			}(), function() {
				function t(t, i) {
					var r = t.getAttribute("params");
					if (r) {
						var r = n.parseBindingsString(r, i, t, {
							valueAccessors: !0,
							bindingParams: !0
						}),
							r = s.a.na(r, function(n) {
								return s.s(n, null, {
									o: t
								})
							}),
							u = s.a.na(r, function(n) {
								return n.Z() ? s.s(function() {
									return s.a.c(n())
								}, null, {
									o: t
								}) : n.v()
							});
						return u.hasOwnProperty("$raw") || (u.$raw = r), u
					}
					return {
						$raw: {}
					}
				}
				s.g.getComponentNameForNode = function(n) {
					return n = s.a.t(n), s.g.Qa(n) && n
				}, s.g.mb = function(n, i, r, u) {
					var e, f;
					if (1 === i.nodeType && (e = s.g.getComponentNameForNode(i), e)) {
						if (n = n || {}, n.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
						f = {
							name: e,
							params: t(i, r)
						}, n.component = u ?
						function() {
							return f
						} : f
					}
					return n
				};
				var n = new s.J;
				9 > s.a.L && (s.g.register = function(n) {
					return function(t) {
						return r.createElement(t), n.apply(this, arguments)
					}
				}(s.g.register), r.createDocumentFragment = function(n) {
					return function() {
						var i = n(),
							r = s.g.Ub,
							t;
						for (t in r) r.hasOwnProperty(t) && i.createElement(t);
						return i
					}
				}(r.createDocumentFragment))
			}(), function() {
				var n = 0;
				s.d.component = {
					init: function(t, i, r, u, f) {
						function h() {
							var n = e && e.dispose;
							"function" == typeof n && n.call(e), o = null
						}
						var e, o;
						return s.a.w.da(t, h), s.s(function() {
							var u = s.a.c(i()),
								r, l, c;
							if ("string" == typeof u ? r = u : (r = s.a.c(u.name), l = s.a.c(u.params)), !r) throw Error("No component name specified");
							c = o = ++n, s.g.get(r, function(n) {
								var i, u;
								if (o === c) {
									if (h(), !n) throw Error("Unknown component '" + r + "'");
									if (i = n.template, !i) throw Error("Component '" + r + "' has no template");
									i = s.a.ia(i), s.f.T(t, i), i = l, u = n.createViewModel, n = u ? u.call(n, i, {
										element: t
									}) : i, i = f.createChildContext(n), e = n, s.Ca(i, t)
								}
							})
						}, null, {
							o: t
						}), {
							controlsDescendantBindings: !0
						}
					}
				}, s.f.Q.component = !0
			}(), y = {
				"class": "className",
				"for": "htmlFor"
			}, s.d.attr = {
				update: function(t, i) {
					var r = s.a.c(i()) || {};
					s.a.G(r, function(i, r) {
						r = s.a.c(r);
						var u = !1 === r || null === r || r === n;
						u && t.removeAttribute(i), 8 >= s.a.L && i in y ? (i = y[i], u ? t.removeAttribute(i) : t[i] = r) : u || t.setAttribute(i, r.toString()), "name" === i && s.a.Mb(t, u ? "" : r.toString())
					})
				}
			}, function() {
				s.d.checked = {
					after: ["value", "attr"],
					init: function(t, i, r) {
						function c() {
							var c = t.checked,
								h = l ? e() : c,
								n;
							s.Y.ma() || u && !c || (n = s.k.B(i), f ? o !== h ? (c && (s.a.ea(n, h, !0), s.a.ea(n, o, !1)), o = h) : s.a.ea(n, h, c) : s.h.pa(n, r, "checked", h, !0))
						}
						function a() {
							var n = s.a.c(i());
							t.checked = f ? 0 <= s.a.m(n, e()) : h ? n : e() === n
						}
						var e = s.Ib(function() {
							return r.has("checkedValue") ? s.a.c(r.get("checkedValue")) : r.has("value") ? s.a.c(r.get("value")) : t.value
						}),
							h = "checkbox" == t.type,
							u = "radio" == t.type;
						if (h || u) {
							var f = h && s.a.c(i()) instanceof Array,
								o = f ? e() : n,
								l = u || f;
							u && !t.name && s.d.uniqueName.init(t, function() {
								return !0
							}), s.s(c, null, {
								o: t
							}), s.a.n(t, "click", c), s.s(a, null, {
								o: t
							})
						}
					}
				}, s.h.V.checked = !0, s.d.checkedValue = {
					update: function(n, t) {
						n.value = s.a.c(t())
					}
				}
			}(), s.d.css = {
				update: function(n, t) {
					var i = s.a.c(t());
					"object" == typeof i ? s.a.G(i, function(t, i) {
						i = s.a.c(i), s.a.Ba(n, t, i)
					}) : (i = String(i || ""), s.a.Ba(n, n.__ko__cssValue, !1), n.__ko__cssValue = i, s.a.Ba(n, i, !0))
				}
			}, s.d.enable = {
				update: function(n, t) {
					var i = s.a.c(t());
					i && n.disabled ? n.removeAttribute("disabled") : i || n.disabled || (n.disabled = !0)
				}
			}, s.d.disable = {
				update: function(n, t) {
					s.d.enable.update(n, function() {
						return !s.a.c(t())
					})
				}
			}, s.d.event = {
				init: function(n, t, i, r, u) {
					var f = t() || {};
					s.a.G(f, function(f) {
						"string" == typeof f && s.a.n(n, f, function(n) {
							var o, h = t()[f],
								e;
							if (h) {
								try {
									e = s.a.S(arguments), r = u.$data, e.unshift(r), o = h.apply(r, e)
								} finally {
									!0 !== o && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
								}!1 === i.get(f + "Bubble") && (n.cancelBubble = !0, n.stopPropagation && n.stopPropagation())
							}
						})
					})
				}
			}, s.d.foreach = {
				Eb: function(n) {
					return function() {
						var i = n(),
							t = s.a.Xa(i);
						return !t || "number" == typeof t.length ? {
							foreach: i,
							templateEngine: s.O.Oa
						} : (s.a.c(i), {
							foreach: t.data,
							as: t.as,
							includeDestroyed: t.includeDestroyed,
							afterAdd: t.afterAdd,
							beforeRemove: t.beforeRemove,
							afterRender: t.afterRender,
							beforeMove: t.beforeMove,
							afterMove: t.afterMove,
							templateEngine: s.O.Oa
						})
					}
				},
				init: function(n, t) {
					return s.d.template.init(n, s.d.foreach.Eb(t))
				},
				update: function(n, t, i, r, u) {
					return s.d.template.update(n, s.d.foreach.Eb(t), i, r, u)
				}
			}, s.h.ha.foreach = !1, s.f.Q.foreach = !0, s.d.hasfocus = {
				init: function(n, t, i) {
					function f(r) {
						var u, f;
						if (n.__ko_hasfocusUpdating = !0, u = n.ownerDocument, "activeElement" in u) {
							try {
								f = u.activeElement
							} catch (e) {
								f = u.body
							}
							r = f === n
						}
						u = t(), s.h.pa(u, i, "hasfocus", r, !0), n.__ko_hasfocusLastValue = r, n.__ko_hasfocusUpdating = !1
					}
					var u = f.bind(null, !0),
						r = f.bind(null, !1);
					s.a.n(n, "focus", u), s.a.n(n, "focusin", u), s.a.n(n, "blur", r), s.a.n(n, "focusout", r)
				},
				update: function(n, t) {
					var i = !! s.a.c(t());
					n.__ko_hasfocusUpdating || n.__ko_hasfocusLastValue === i || (i ? n.focus() : n.blur(), s.k.B(s.a.oa, null, [n, i ? "focusin" : "focusout"]))
				}
			}, s.h.V.hasfocus = !0, s.d.hasFocus = s.d.hasfocus, s.h.V.hasFocus = !0, s.d.html = {
				init: function() {
					return {
						controlsDescendantBindings: !0
					}
				},
				update: function(n, t) {
					s.a.$a(n, t())
				}
			}, w("if"), w("ifnot", !1, !0), w("with", !0, !1, function(n, t) {
				return n.createChildContext(t)
			}), a = {}, s.d.options = {
				init: function(n) {
					if ("select" !== s.a.t(n)) throw Error("options binding applies only to SELECT elements");
					for (; 0 < n.length;) n.remove(0);
					return {
						controlsDescendantBindings: !0
					}
				},
				update: function(t, i, r) {
					function c() {
						return s.a.ta(t.options, function(n) {
							return n.selected
						})
					}
					function v(n, t, i) {
						var r = typeof t;
						return "function" == r ? t(n) : "string" == r ? n[t] : i
					}
					function l(n, i) {
						if (f.length) {
							var r = 0 <= s.a.m(f, s.i.q(i[0]));
							s.a.Nb(i[0], r), h && !r && s.k.B(s.a.oa, null, [t, "change"])
						}
					}
					var o = 0 != t.length && t.multiple ? t.scrollTop : null,
						u = s.a.c(i()),
						y = r.get("optionsIncludeDestroyed"),
						e, f, h;
					i = {}, f = t.multiple ? s.a.Da(c(), s.i.q) : 0 <= t.selectedIndex ? [s.i.q(t.options[t.selectedIndex])] : [], u && ("undefined" == typeof u.length && (u = [u]), e = s.a.ta(u, function(t) {
						return y || t === n || null === t || !s.a.c(t._destroy)
					}), r.has("optionsCaption") && (u = s.a.c(r.get("optionsCaption")), null !== u && u !== n && e.unshift(a))), h = !1, i.beforeRemove = function(n) {
						t.removeChild(n)
					}, u = l, r.has("optionsAfterRender") && (u = function(t, i) {
						l(0, i), s.k.B(r.get("optionsAfterRender"), null, [i[0], t !== a ? t : n])
					}), s.a.Za(t, e, function(i, u, e) {
						return e.length && (f = e[0].selected ? [s.i.q(e[0])] : [], h = !0), u = t.ownerDocument.createElement("option"), i === a ? (s.a.bb(u, r.get("optionsCaption")), s.i.ca(u, n)) : (e = v(i, r.get("optionsValue"), i), s.i.ca(u, s.a.c(e)), i = v(i, r.get("optionsText"), e), s.a.bb(u, i)), [u]
					}, i, u), s.k.B(function() {
						r.get("valueAllowUnset") && r.has("value") ? s.i.ca(t, s.a.c(r.get("value")), !0) : (t.multiple ? f.length && c().length < f.length : f.length && 0 <= t.selectedIndex ? s.i.q(t.options[t.selectedIndex]) !== f[0] : f.length || 0 <= t.selectedIndex) && s.a.oa(t, "change")
					}), s.a.dc(t), o && 20 < Math.abs(o - t.scrollTop) && (t.scrollTop = o)
				}
			}, s.d.options.Va = s.a.e.F(), s.d.selectedOptions = {
				after: ["options", "foreach"],
				init: function(n, t, i) {
					s.a.n(n, "change", function() {
						var u = t(),
							r = [];
						s.a.u(n.getElementsByTagName("option"), function(n) {
							n.selected && r.push(s.i.q(n))
						}), s.h.pa(u, i, "selectedOptions", r)
					})
				},
				update: function(n, t) {
					if ("select" != s.a.t(n)) throw Error("values binding applies only to SELECT elements");
					var i = s.a.c(t());
					i && "number" == typeof i.length && s.a.u(n.getElementsByTagName("option"), function(n) {
						var t = 0 <= s.a.m(i, s.i.q(n));
						s.a.Nb(n, t)
					})
				}
			}, s.h.V.selectedOptions = !0, s.d.style = {
				update: function(t, i) {
					var r = s.a.c(i() || {});
					s.a.G(r, function(i, r) {
						r = s.a.c(r), (null === r || r === n || !1 === r) && (r = ""), t.style[i] = r
					})
				}
			}, s.d.submit = {
				init: function(n, t, i, r, u) {
					if ("function" != typeof t()) throw Error("The value for a submit binding must be a function");
					s.a.n(n, "submit", function(i) {
						var r, f = t();
						try {
							r = f.call(u.$data, n)
						} finally {
							!0 !== r && (i.preventDefault ? i.preventDefault() : i.returnValue = !1)
						}
					})
				}
			}, s.d.text = {
				init: function() {
					return {
						controlsDescendantBindings: !0
					}
				},
				update: function(n, t) {
					s.a.bb(n, t())
				}
			}, s.f.Q.text = !0, function() {
				if (i && i.navigator) var f = function(n) {
						if (n) return parseFloat(n[1])
					},
					h = i.opera && i.opera.version && parseInt(i.opera.version()),
					u = i.navigator.userAgent,
					c = f(u.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
					l = f(u.match(/Firefox\/([^ ]*)/));
				if (10 > s.a.L) var r = s.a.e.F(),
					t = s.a.e.F(),
					e = function(n) {
						var i = this.activeElement;
						(i = i && s.a.e.get(i, t)) && i(n)
					},
					o = function(n, i) {
						var u = n.ownerDocument;
						s.a.e.get(u, r) || (s.a.e.set(u, r, !0), s.a.n(u, "selectionchange", e)), s.a.e.set(n, t, i)
					};
				s.d.textInput = {
					init: function(t, i, r) {
						function u(n, i) {
							s.a.n(t, n, i)
						}
						function p() {
							var r = s.a.c(i());
							(null === r || r === n) && (r = ""), v !== n && r === v ? setTimeout(p, 4) : t.value !== r && (y = r, t.value = r)
						}
						function e() {
							a || (v = t.value, a = setTimeout(f, 4))
						}
						function f() {
							clearTimeout(a), v = a = n;
							var u = t.value;
							y !== u && (y = u, s.h.pa(i(), r, "textInput", u))
						}
						var y = t.value,
							a, v;
						10 > s.a.L ? (u("propertychange", function(n) {
							"value" === n.propertyName && f()
						}), 8 == s.a.L && (u("keyup", f), u("keydown", f)), 8 <= s.a.L && (o(t, f), u("dragend", e))) : (u("input", f), 5 > c && "textarea" === s.a.t(t) ? (u("keydown", e), u("paste", e), u("cut", e)) : 11 > h ? u("keydown", e) : 4 > l && (u("DOMAutoComplete", f), u("dragdrop", f), u("drop", f))), u("change", f), s.s(p, null, {
							o: t
						})
					}
				}, s.h.V.textInput = !0, s.d.textinput = {
					preprocess: function(n, t, i) {
						i("textInput", n)
					}
				}
			}(), s.d.uniqueName = {
				init: function(n, t) {
					if (t()) {
						var i = "ko_unique_" + ++s.d.uniqueName.Zb;
						s.a.Mb(n, i)
					}
				}
			}, s.d.uniqueName.Zb = 0, s.d.value = {
				after: ["options", "foreach"],
				init: function(n, t, i) {
					var f, h;
					if ("input" != n.tagName.toLowerCase() || "checkbox" != n.type && "radio" != n.type) {
						var u = ["change"],
							r = i.get("valueUpdate"),
							o = !1,
							e = null;
						r && ("string" == typeof r && (r = [r]), s.a.ga(u, r), u = s.a.rb(u)), f = function() {
							e = null, o = !1;
							var u = t(),
								r = s.i.q(n);
							s.h.pa(u, i, "value", r)
						}, !s.a.L || "input" != n.tagName.toLowerCase() || "text" != n.type || "off" == n.autocomplete || n.form && "off" == n.form.autocomplete || -1 != s.a.m(u, "propertychange") || (s.a.n(n, "propertychange", function() {
							o = !0
						}), s.a.n(n, "focus", function() {
							o = !1
						}), s.a.n(n, "blur", function() {
							o && f()
						})), s.a.u(u, function(t) {
							var i = f;
							s.a.vc(t, "after") && (i = function() {
								e = s.i.q(n), setTimeout(f, 0)
							}, t = t.substring(5)), s.a.n(n, t, i)
						}), h = function() {
							var r = s.a.c(t()),
								u = s.i.q(n),
								f;
							null !== e && r === e ? setTimeout(h, 0) : r !== u && ("select" === s.a.t(n) ? (f = i.get("valueAllowUnset"), u = function() {
								s.i.ca(n, r, f)
							}, u(), f || r === s.i.q(n) ? setTimeout(u, 0) : s.k.B(s.a.oa, null, [n, "change"])) : s.i.ca(n, r))
						}, s.s(h, null, {
							o: n
						})
					} else s.ra(n, {
						checkedValue: t
					})
				},
				update: function() {}
			}, s.h.V.value = !0, s.d.visible = {
				update: function(n, t) {
					var r = s.a.c(t()),
						i = "none" != n.style.display;
					r && !i ? n.style.display = "" : !r && i && (n.style.display = "none")
				}
			}, function(n) {
				s.d[n] = {
					init: function(t, i, r, u, f) {
						return s.d.event.init.call(this, t, function() {
							var t = {};
							return t[n] = i(), t
						}, r, u, f)
					}
				}
			}("click"), s.H = function() {}, s.H.prototype.renderTemplateSource = function() {
				throw Error("Override renderTemplateSource");
			}, s.H.prototype.createJavaScriptEvaluatorBlock = function() {
				throw Error("Override createJavaScriptEvaluatorBlock");
			}, s.H.prototype.makeTemplateSource = function(n, t) {
				if ("string" == typeof n) {
					t = t || r;
					var i = t.getElementById(n);
					if (!i) throw Error("Cannot find template with ID " + n);
					return new s.r.l(i)
				}
				if (1 == n.nodeType || 8 == n.nodeType) return new s.r.fa(n);
				throw Error("Unknown template type: " + n);
			}, s.H.prototype.renderTemplate = function(n, t, i, r) {
				return n = this.makeTemplateSource(n, r), this.renderTemplateSource(n, t, i)
			}, s.H.prototype.isTemplateRewritten = function(n, t) {
				return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(n, t).data("isRewritten")
			}, s.H.prototype.rewriteTemplate = function(n, t, i) {
				n = this.makeTemplateSource(n, i), t = t(n.text()), n.text(t), n.data("isRewritten", !0)
			}, s.b("templateEngine", s.H), s.fb = function() {
				function n(n, t, i, r) {
					var o, f, u, e;
					for (n = s.h.Wa(n), o = s.h.ha, f = 0; f < n.length; f++) if (u = n[f].key, o.hasOwnProperty(u)) if (e = o[u], "function" == typeof e) {
						if (u = e(n[f].value)) throw Error(u);
					} else if (!e) throw Error("This template engine does not support the '" + u + "' binding within its templates");
					return i = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + s.h.ya(n, {
						valueAccessors: !0
					}) + " } })()},'" + i.toLowerCase() + "')", r.createJavaScriptEvaluatorBlock(i) + t
				}
				var i = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
					t = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
				return {
					ec: function(n, t, i) {
						t.isTemplateRewritten(n, i) || t.rewriteTemplate(n, function(n) {
							return s.fb.nc(n, t)
						}, i)
					},
					nc: function(r, u) {
						return r.replace(i, function(t, i, r, f, e) {
							return n(e, i, r, u)
						}).replace(t, function(t, i) {
							return n(i, "<!-- ko -->", "#comment", u)
						})
					},
					Xb: function(n, t) {
						return s.D.Ua(function(i, r) {
							var u = i.nextSibling;
							u && u.nodeName.toLowerCase() === t && s.ra(u, n, r)
						})
					}
				}
			}(), s.b("__tr_ambtns", s.fb.Xb), function() {
				var i, t;
				s.r = {}, s.r.l = function(n) {
					this.l = n
				}, s.r.l.prototype.text = function() {
					var n = s.a.t(this.l),
						n = "script" === n ? "text" : "textarea" === n ? "value" : "innerHTML",
						t;
					if (0 == arguments.length) return this.l[n];
					t = arguments[0], "innerHTML" === n ? s.a.$a(this.l, t) : this.l[n] = t
				}, i = s.a.e.F() + "_", s.r.l.prototype.data = function(n) {
					if (1 === arguments.length) return s.a.e.get(this.l, i + n);
					s.a.e.set(this.l, i + n, arguments[1])
				}, t = s.a.e.F(), s.r.fa = function(n) {
					this.l = n
				}, s.r.fa.prototype = new s.r.l, s.r.fa.prototype.text = function() {
					if (0 == arguments.length) {
						var i = s.a.e.get(this.l, t) || {};
						return i.gb === n && i.Ga && (i.gb = i.Ga.innerHTML), i.gb
					}
					s.a.e.set(this.l, t, {
						gb: arguments[0]
					})
				}, s.r.l.prototype.nodes = function() {
					if (0 == arguments.length) return (s.a.e.get(this.l, t) || {}).Ga;
					s.a.e.set(this.l, t, {
						Ga: arguments[0]
					})
				}, s.b("templateSources", s.r), s.b("templateSources.domElement", s.r.l), s.b("templateSources.anonymousTemplate", s.r.fa)
			}(), function() {
				function u(n, t, i) {
					var r;
					for (t = s.f.nextSibling(t); n && (r = n) !== t;) n = s.f.nextSibling(r), i(r, n)
				}
				function e(n, t) {
					if (n.length) {
						var i = n[0],
							r = n[n.length - 1],
							o = i.parentNode,
							e = s.J.instance,
							f = e.preprocessNode;
						if (f) {
							if (u(i, r, function(n, t) {
								var o = n.previousSibling,
									u = f.call(e, n);
								u && (n === i && (i = u[0] || t), n === r && (r = u[u.length - 1] || o))
							}), n.length = 0, !i) return;
							i === r ? n.push(i) : (n.push(i, r), s.a.ka(n, o))
						}
						u(i, r, function(n) {
							1 !== n.nodeType && 8 !== n.nodeType || s.pb(t, n)
						}), u(i, r, function(n) {
							1 !== n.nodeType && 8 !== n.nodeType || s.D.Sb(n, [t])
						}), s.a.ka(n, o)
					}
				}
				function r(n) {
					return n.nodeType ? n : 0 < n.length ? n[0] : null
				}
				function f(n, i, u, f, o) {
					o = o || {};
					var h = n && r(n),
						h = h && h.ownerDocument,
						c = o.templateEngine || t;
					if (s.fb.ec(u, c, h), u = c.renderTemplate(u, f, o, h), "number" != typeof u.length || 0 < u.length && "number" != typeof u[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
					h = !1;
					switch (i) {
					case "replaceChildren":
						s.f.T(n, u), h = !0;
						break;
					case "replaceNode":
						s.a.Lb(n, u), h = !0;
						break;
					case "ignoreTargetNode":
						break;
					default:
						throw Error("Unknown renderMode: " + i);
					}
					return h && (e(u, f), o.afterRender && s.k.B(o.afterRender, null, [u, f.$data])), u
				}
				var t, i;
				s.ab = function(i) {
					if (i != n && !(i instanceof s.H)) throw Error("templateEngine must inherit from ko.templateEngine");
					t = i
				}, s.Ya = function(i, u, e, o, h) {
					if (e = e || {}, (e.templateEngine || t) == n) throw Error("Set a template engine before calling renderTemplate");
					if (h = h || "replaceChildren", o) {
						var c = r(o);
						return s.j(function() {
							var n = u && u instanceof s.N ? u : new s.N(s.a.c(u)),
								t = s.C(i) ? i() : "function" == typeof i ? i(n.$data, n) : i,
								n = f(o, h, t, n, e);
							"replaceNode" == h && (o = n, c = r(o))
						}, null, {
							Ia: function() {
								return !c || !s.a.Ja(c)
							},
							o: c && "replaceNode" == h ? c.parentNode : c
						})
					}
					return s.D.Ua(function(n) {
						s.Ya(i, u, e, n, "replaceNode")
					})
				}, s.uc = function(t, i, r, u, o) {
					function c(n, t) {
						e(t, h), r.afterRender && r.afterRender(t, n)
					}
					function l(n, i) {
						h = o.createChildContext(n, r.as, function(n) {
							n.$index = i
						});
						var u = s.C(t) ? t() : "function" == typeof t ? t(n, h) : t;
						return f(null, "ignoreTargetNode", u, h, r)
					}
					var h;
					return s.j(function() {
						var t = s.a.c(i) || [];
						"undefined" == typeof t.length && (t = [t]), t = s.a.ta(t, function(t) {
							return r.includeDestroyed || t === n || null === t || !s.a.c(t._destroy)
						}), s.k.B(s.a.Za, null, [u, t, l, r, c])
					}, null, {
						o: u
					})
				}, i = s.a.e.F(), s.d.template = {
					init: function(n, t) {
						var i = s.a.c(t());
						return "string" == typeof i || i.name ? s.f.ja(n) : (i = s.f.childNodes(n), i = s.a.oc(i), new s.r.fa(n).nodes(i)), {
							controlsDescendantBindings: !0
						}
					},
					update: function(t, r, u, f, e) {
						var h = r(),
							o;
						r = s.a.c(h), u = !0, f = null, "string" == typeof r ? r = {} : (h = r.name, "if" in r && (u = s.a.c(r["if"])), u && "ifnot" in r && (u = !s.a.c(r.ifnot)), o = s.a.c(r.data)), "foreach" in r ? f = s.uc(h || t, u && r.foreach || [], r, t, e) : u ? (e = "data" in r ? e.createChildContext(o, r.as) : e, f = s.Ya(h || t, e, r, t)) : s.f.ja(t), e = f, (o = s.a.e.get(t, i)) && "function" == typeof o.K && o.K(), s.a.e.set(t, i, e && e.Z() ? e : n)
					}
				}, s.h.ha.template = function(n) {
					return n = s.h.Wa(n), 1 == n.length && n[0].unknown || s.h.lc(n, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
				}, s.f.Q.template = !0
			}(), s.b("setTemplateEngine", s.ab), s.b("renderTemplate", s.Ya), s.a.wb = function(n, t, i) {
				if (n.length && t.length) for (var o, r, f, u, e = o = 0;
				(!i || e < i) && (f = n[o]); ++o) {
					for (r = 0; u = t[r]; ++r) if (f.value === u.value) {
						f.moved = u.index, u.moved = f.index, t.splice(r, 1), e = r = 0;
						break
					}
					e += r
				}
			}, s.a.Fa = function() {
				function n(n, t, i, r, u) {
					for (var o = Math.min, v = Math.max, y = [], c = n.length, f, h = t.length, l = h - c || 1, b = c + h + 1, a, p, w, e = 0; e <= c; e++) for (p = a, y.push(a = []), w = o(h, e + l), f = v(0, e - 1); f <= w; f++) a[f] = f ? e ? n[e - 1] === t[f - 1] ? p[f - 1] : o(p[f] || b, a[f - 1] || b) + 1 : f + 1 : e + 1;
					for (o = [], v = [], l = [], e = c, f = h; e || f;) h = y[e][f] - 1, f && h === y[e][f - 1] ? v.push(o[o.length] = {
						status: i,
						value: t[--f],
						index: f
					}) : e && h === y[e - 1][f] ? l.push(o[o.length] = {
						status: r,
						value: n[--e],
						index: e
					}) : (--f, --e, u.sparse || o.push({
						status: "retained",
						value: t[f]
					}));
					return s.a.wb(v, l, 10 * c), o.reverse()
				}
				return function(t, i, r) {
					return r = "boolean" == typeof r ? {
						dontLimitMoves: r
					} : r || {}, t = t || [], i = i || [], t.length <= i.length ? n(t, i, "added", "deleted", r) : n(i, t, "deleted", "added", r)
				}
			}(), s.b("utils.compareArrays", s.a.Fa), function() {
				function i(t, i, r, u, f) {
					var e = [],
						o = s.j(function() {
							var n = i(r, f, s.a.ka(e, t)) || [];
							0 < e.length && (s.a.Lb(e, n), u && s.k.B(u, null, [r, n, f])), e.length = 0, s.a.ga(e, n)
						}, null, {
							o: t,
							Ia: function() {
								return !s.a.ob(e)
							}
						});
					return {
						$: e,
						j: o.Z() ? o : n
					}
				}
				var t = s.a.e.F();
				s.a.Za = function(r, u, f, e, o) {
					function ut(n, t) {
						h = g[t], it !== t && (k[n] = h), h.Na(it++), s.a.ka(h.$, r), nt.push(h), w.push(h)
					}
					function y(n, t) {
						if (n) for (var i = 0, r = t.length; i < r; i++) t[i] && s.a.u(t[i].$, function(r) {
							n(r, i, t[i].sa)
						})
					}
					var c, v, rt;
					u = u || [], e = e || {};
					var v = s.a.e.get(r, t) === n,
						g = s.a.e.get(r, t) || [],
						d = s.a.Da(g, function(n) {
							return n.sa
						}),
						l = s.a.Fa(d, u, e.dontLimitMoves),
						nt = [],
						a = 0,
						it = 0,
						tt = [],
						w = [];
					u = [];
					for (var k = [], d = [], h, c = 0, p, b; p = l[c]; c++) switch (b = p.moved, p.status) {
					case "deleted":
						b === n && (h = g[a], h.j && h.j.K(), tt.push.apply(tt, s.a.ka(h.$, r)), e.beforeRemove && (u[c] = h, w.push(h))), a++;
						break;
					case "retained":
						ut(c, a++);
						break;
					case "added":
						b !== n ? ut(c, b) : (h = {
							sa: p.value,
							Na: s.p(it++)
						}, nt.push(h), w.push(h), v || (d[c] = h))
					}
					for (y(e.beforeMove, k), s.a.u(tt, e.beforeRemove ? s.R : s.removeNode), c = 0, v = s.f.firstChild(r); h = w[c]; c++) {
						for (h.$ || s.a.extend(h, i(r, f, h.sa, o, h.Na)), a = 0; l = h.$[a]; v = l.nextSibling, rt = l, a++) l !== v && s.f.Bb(r, l, rt);
						!h.ic && o && (o(h.sa, h.$, h.Na), h.ic = !0)
					}
					y(e.beforeRemove, u), y(e.afterMove, k), y(e.afterAdd, d), s.a.e.set(r, t, nt)
				}
			}(), s.b("utils.setDomNodeChildrenFromArrayMapping", s.a.Za), s.O = function() {
				this.allowTemplateRewriting = !1
			}, s.O.prototype = new s.H, s.O.prototype.renderTemplateSource = function(n) {
				var t = (9 > s.a.L ? 0 : n.nodes) ? n.nodes() : null;
				return t ? s.a.S(t.cloneNode(!0).childNodes) : (n = n.text(), s.a.ba(n))
			}, s.O.Oa = new s.O, s.ab(s.O.Oa), s.b("nativeTemplateEngine", s.O), function() {
				s.Sa = function() {
					var n = this.kc = function() {
							if (!t || !t.tmpl) return 0;
							try {
								if (0 <= t.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
							} catch (n) {}
							return 1
						}();
					this.renderTemplateSource = function(i, u, f) {
						if (f = f || {}, 2 > n) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
						var e = i.data("precompiled");
						return e || (e = i.text() || "", e = t.template(null, "{{ko_with $item.koBindingContext}}" + e + "{{/ko_with}}"), i.data("precompiled", e)), i = [u.$data], u = t.extend({
							koBindingContext: u
						}, f.templateOptions), u = t.tmpl(e, i, u), u.appendTo(r.createElement("div")), t.fragments = {}, u
					}, this.createJavaScriptEvaluatorBlock = function(n) {
						return "{{ko_code ((function() { return " + n + " })()) }}"
					}, this.addTemplate = function(n, t) {
						r.write("<script type='text/html' id='" + n + "'>" + t + "<\/script>")
					}, 0 < n && (t.tmpl.tag.ko_code = {
						open: "__.push($1 || '');"
					}, t.tmpl.tag.ko_with = {
						open: "with($1) {",
						close: "} "
					})
				}, s.Sa.prototype = new s.H;
				var n = new s.Sa;
				0 < n.kc && s.ab(n), s.b("jqueryTmplTemplateEngine", s.Sa)
			}()
		})
	})()
})(), function() {
	var y = this,
		et = y._,
		u = Array.prototype,
		k = Object.prototype,
		ft = Function.prototype,
		nt = u.push,
		t = u.slice,
		c = u.concat,
		r = k.toString,
		d = k.hasOwnProperty,
		tt = Array.isArray,
		g = Object.keys,
		v = ft.bind,
		n = function(t) {
			return t instanceof n ? t : this instanceof n ? void(this._wrapped = t) : new n(t)
		},
		i, l, s, f, e, h, p, o;
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports._ = n) : y._ = n, n.VERSION = "1.7.0", i = function(n, t, i) {
		if (t === void 0) return n;
		switch (null == i ? 3 : i) {
		case 1:
			return function(i) {
				return n.call(t, i)
			};
		case 2:
			return function(i, r) {
				return n.call(t, i, r)
			};
		case 3:
			return function(i, r, u) {
				return n.call(t, i, r, u)
			};
		case 4:
			return function(i, r, u, f) {
				return n.call(t, i, r, u, f)
			}
		}
		return function() {
			return n.apply(t, arguments)
		}
	}, n.iteratee = function(t, r, u) {
		return null == t ? n.identity : n.isFunction(t) ? i(t, r, u) : n.isObject(t) ? n.matches(t) : n.property(t)
	}, n.each = n.forEach = function(t, r, u) {
		var f, e, o;
		if (null == t) return t;
		if (r = i(r, u), e = t.length, e === +e) for (f = 0; e > f; f++) r(t[f], f, t);
		else for (o = n.keys(t), f = 0, e = o.length; e > f; f++) r(t[o[f]], o[f], t);
		return t
	}, n.map = n.collect = function(t, i, r) {
		if (null == t) return [];
		i = n.iteratee(i, r);
		for (var f, e = t.length !== +t.length && n.keys(t), o = (e || t).length, s = Array(o), u = 0; o > u; u++) f = e ? e[u] : u, s[u] = i(t[f], f, t);
		return s
	}, l = "Reduce of empty array with no initial value", n.reduce = n.foldl = n.inject = function(t, r, u, f) {
		null == t && (t = []), r = i(r, f, 4);
		var s, o = t.length !== +t.length && n.keys(t),
			h = (o || t).length,
			e = 0;
		if (arguments.length < 3) {
			if (!h) throw new TypeError(l);
			u = t[o ? o[e++] : e++]
		}
		for (; h > e; e++) s = o ? o[e] : e, u = r(u, t[s], s, t);
		return u
	}, n.reduceRight = n.foldr = function(t, r, u, f) {
		null == t && (t = []), r = i(r, f, 4);
		var s, o = t.length !== +t.length && n.keys(t),
			e = (o || t).length;
		if (arguments.length < 3) {
			if (!e) throw new TypeError(l);
			u = t[o ? o[--e] : --e]
		}
		for (; e--;) s = o ? o[e] : e, u = r(u, t[s], s, t);
		return u
	}, n.find = n.detect = function(t, i, r) {
		var u;
		return i = n.iteratee(i, r), n.some(t, function(n, t, r) {
			if (i(n, t, r)) return u = n, !0
		}), u
	}, n.filter = n.select = function(t, i, r) {
		var u = [];
		return null == t ? u : (i = n.iteratee(i, r), n.each(t, function(n, t, r) {
			i(n, t, r) && u.push(n)
		}), u)
	}, n.reject = function(t, i, r) {
		return n.filter(t, n.negate(n.iteratee(i)), r)
	}, n.every = n.all = function(t, i, r) {
		if (null == t) return !0;
		i = n.iteratee(i, r);
		for (var e, f = t.length !== +t.length && n.keys(t), o = (f || t).length, u = 0; o > u; u++) if (e = f ? f[u] : u, !i(t[e], e, t)) return !1;
		return !0
	}, n.some = n.any = function(t, i, r) {
		if (null == t) return !1;
		i = n.iteratee(i, r);
		for (var e, f = t.length !== +t.length && n.keys(t), o = (f || t).length, u = 0; o > u; u++) if (e = f ? f[u] : u, i(t[e], e, t)) return !0;
		return !1
	}, n.contains = n.include = function(t, i) {
		return null == t ? !1 : (t.length !== +t.length && (t = n.values(t)), n.indexOf(t, i) >= 0)
	}, n.invoke = function(i, r) {
		var f = t.call(arguments, 2),
			u = n.isFunction(r);
		return n.map(i, function(n) {
			return (u ? r : n[r]).apply(n, f)
		})
	}, n.pluck = function(t, i) {
		return n.map(t, n.property(i))
	}, n.where = function(t, i) {
		return n.filter(t, n.matches(i))
	}, n.findWhere = function(t, i) {
		return n.find(t, n.matches(i))
	}, n.max = function(t, i, r) {
		var o, e, u = -1 / 0,
			h = -1 / 0,
			f, s;
		if (null == i && null != t) for (t = t.length === +t.length ? t : n.values(t), f = 0, s = t.length; s > f; f++) o = t[f], o > u && (u = o);
		else i = n.iteratee(i, r), n.each(t, function(n, t, r) {
			e = i(n, t, r), (e > h || e === -1 / 0 && u === -1 / 0) && (u = n, h = e)
		});
		return u
	}, n.min = function(t, i, r) {
		var o, e, u = 1 / 0,
			h = 1 / 0,
			f, s;
		if (null == i && null != t) for (t = t.length === +t.length ? t : n.values(t), f = 0, s = t.length; s > f; f++) o = t[f], u > o && (u = o);
		else i = n.iteratee(i, r), n.each(t, function(n, t, r) {
			e = i(n, t, r), (h > e || 1 / 0 === e && 1 / 0 === u) && (u = n, h = e)
		});
		return u
	}, n.shuffle = function(t) {
		for (var u, f = t && t.length === +t.length ? t : n.values(t), e = f.length, r = Array(e), i = 0; e > i; i++) u = n.random(0, i), u !== i && (r[i] = r[u]), r[u] = f[i];
		return r
	}, n.sample = function(t, i, r) {
		return null == i || r ? (t.length !== +t.length && (t = n.values(t)), t[n.random(t.length - 1)]) : n.shuffle(t).slice(0, Math.max(0, i))
	}, n.sortBy = function(t, i, r) {
		return i = n.iteratee(i, r), n.pluck(n.map(t, function(n, t, r) {
			return {
				value: n,
				index: t,
				criteria: i(n, t, r)
			}
		}).sort(function(n, t) {
			var r = n.criteria,
				i = t.criteria;
			if (r !== i) {
				if (r > i || r === void 0) return 1;
				if (i > r || i === void 0) return -1
			}
			return n.index - t.index
		}), "value")
	}, s = function(t) {
		return function(i, r, u) {
			var f = {};
			return r = n.iteratee(r, u), n.each(i, function(n, u) {
				var e = r(n, u, i);
				t(f, n, e)
			}), f
		}
	}, n.groupBy = s(function(t, i, r) {
		n.has(t, r) ? t[r].push(i) : t[r] = [i]
	}), n.indexBy = s(function(n, t, i) {
		n[i] = t
	}), n.countBy = s(function(t, i, r) {
		n.has(t, r) ? t[r]++ : t[r] = 1
	}), n.sortedIndex = function(t, i, r, u) {
		var f;
		r = n.iteratee(r, u, 1);
		for (var s = r(i), e = 0, o = t.length; o > e;) f = e + o >>> 1, r(t[f]) < s ? e = f + 1 : o = f;
		return e
	}, n.toArray = function(i) {
		return i ? n.isArray(i) ? t.call(i) : i.length === +i.length ? n.map(i, n.identity) : n.values(i) : []
	}, n.size = function(t) {
		return null == t ? 0 : t.length === +t.length ? t.length : n.keys(t).length
	}, n.partition = function(t, i, r) {
		i = n.iteratee(i, r);
		var f = [],
			u = [];
		return n.each(t, function(n, t, r) {
			(i(n, t, r) ? f : u).push(n)
		}), [f, u]
	}, n.first = n.head = n.take = function(n, i, r) {
		if (null != n) return null == i || r ? n[0] : 0 > i ? [] : t.call(n, 0, i)
	}, n.initial = function(n, i, r) {
		return t.call(n, 0, Math.max(0, n.length - (null == i || r ? 1 : i)))
	}, n.last = function(n, i, r) {
		if (null != n) return null == i || r ? n[n.length - 1] : t.call(n, Math.max(n.length - i, 0))
	}, n.rest = n.tail = n.drop = function(n, i, r) {
		return t.call(n, null == i || r ? 1 : i)
	}, n.compact = function(t) {
		return n.filter(t, n.identity)
	}, f = function(t, i, r, u) {
		var o, s, e;
		if (i && n.every(t, n.isArray)) return c.apply(u, t);
		for (o = 0, s = t.length; s > o; o++) e = t[o], n.isArray(e) || n.isArguments(e) ? i ? nt.apply(u, e) : f(e, i, r, u) : r || u.push(e);
		return u
	}, n.flatten = function(n, t) {
		return f(n, t, !1, [])
	}, n.without = function(i) {
		return n.difference(i, t.call(arguments, 1))
	}, n.uniq = n.unique = function(t, i, r, u) {
		var f, h;
		if (null == t) return [];
		n.isBoolean(i) || (u = r, r = i, i = !1), null != r && (r = n.iteratee(r, u));
		for (var o = [], s = [], e = 0, c = t.length; c > e; e++) f = t[e], i ? (e && s === f || o.push(f), s = f) : r ? (h = r(f, e, t), n.indexOf(s, h) < 0 && (s.push(h), o.push(f))) : n.indexOf(o, f) < 0 && o.push(f);
		return o
	}, n.union = function() {
		return n.uniq(f(arguments, !0, !0, []))
	}, n.intersection = function(t) {
		var r, i;
		if (null == t) return [];
		for (var f = [], e = arguments.length, u = 0, o = t.length; o > u; u++) if (r = t[u], !n.contains(f, r)) {
			for (i = 1; e > i && n.contains(arguments[i], r); i++);
			i === e && f.push(r)
		}
		return f
	}, n.difference = function(i) {
		var r = f(t.call(arguments, 1), !0, !0, []);
		return n.filter(i, function(t) {
			return !n.contains(r, t)
		})
	}, n.zip = function(t) {
		if (null == t) return [];
		for (var r = n.max(arguments, "length").length, u = Array(r), i = 0; r > i; i++) u[i] = n.pluck(arguments, i);
		return u
	}, n.object = function(n, t) {
		if (null == n) return {};
		for (var r = {}, i = 0, u = n.length; u > i; i++) t ? r[n[i]] = t[i] : r[n[i][0]] = n[i][1];
		return r
	}, n.indexOf = function(t, i, r) {
		if (null == t) return -1;
		var u = 0,
			f = t.length;
		if (r) {
			if ("number" != typeof r) return u = n.sortedIndex(t, i), t[u] === i ? u : -1;
			u = 0 > r ? Math.max(0, f + r) : r
		}
		for (; f > u; u++) if (t[u] === i) return u;
		return -1
	}, n.lastIndexOf = function(n, t, i) {
		if (null == n) return -1;
		var r = n.length;
		for ("number" == typeof i && (r = 0 > i ? r + i + 1 : Math.min(r, i + 1)); --r >= 0;) if (n[r] === t) return r;
		return -1
	}, n.range = function(n, t, i) {
		arguments.length <= 1 && (t = n || 0, n = 0), i = i || 1;
		for (var u = Math.max(Math.ceil((t - n) / i), 0), f = Array(u), r = 0; u > r; r++, n += i) f[r] = n;
		return f
	}, e = function() {}, n.bind = function(i, r) {
		var u, f;
		if (v && i.bind === v) return v.apply(i, t.call(arguments, 1));
		if (!n.isFunction(i)) throw new TypeError("Bind must be called on a function");
		return u = t.call(arguments, 2), f = function() {
			var s, o;
			return this instanceof f ? (e.prototype = i.prototype, s = new e, e.prototype = null, o = i.apply(s, u.concat(t.call(arguments))), n.isObject(o) ? o : s) : i.apply(r, u.concat(t.call(arguments)))
		}
	}, n.partial = function(i) {
		var r = t.call(arguments, 1);
		return function() {
			for (var f = 0, t = r.slice(), u = 0, e = t.length; e > u; u++) t[u] === n && (t[u] = arguments[f++]);
			for (; f < arguments.length;) t.push(arguments[f++]);
			return i.apply(this, t)
		}
	}, n.bindAll = function(t) {
		var i, r, u = arguments.length;
		if (1 >= u) throw new Error("bindAll must be passed function names");
		for (i = 1; u > i; i++) r = arguments[i], t[r] = n.bind(t[r], t);
		return t
	}, n.memoize = function(t, i) {
		var r = function(u) {
				var e = r.cache,
					f = i ? i.apply(this, arguments) : u;
				return n.has(e, f) || (e[f] = t.apply(this, arguments)), e[f]
			};
		return r.cache = {}, r
	}, n.delay = function(n, i) {
		var r = t.call(arguments, 2);
		return setTimeout(function() {
			return n.apply(null, r)
		}, i)
	}, n.defer = function(i) {
		return n.delay.apply(n, [i, 1].concat(t.call(arguments, 1)))
	}, n.throttle = function(t, i, r) {
		var e, o, s, u = null,
			f = 0,
			h;
		return r || (r = {}), h = function() {
			f = r.leading === !1 ? 0 : n.now(), u = null, s = t.apply(e, o), u || (e = o = null)
		}, function() {
			var l = n.now(),
				c;
			return f || r.leading !== !1 || (f = l), c = i - (l - f), e = this, o = arguments, 0 >= c || c > i ? (clearTimeout(u), u = null, f = l, s = t.apply(e, o), u || (e = o = null)) : u || r.trailing === !1 || (u = setTimeout(h, c)), s
		}
	}, n.debounce = function(t, i, r) {
		var u, e, f, h, o, s = function() {
				var c = n.now() - h;
				i > c && c > 0 ? u = setTimeout(s, i - c) : (u = null, r || (o = t.apply(f, e), u || (f = e = null)))
			};
		return function() {
			f = this, e = arguments, h = n.now();
			var c = r && !u;
			return u || (u = setTimeout(s, i)), c && (o = t.apply(f, e), f = e = null), o
		}
	}, n.wrap = function(t, i) {
		return n.partial(i, t)
	}, n.negate = function(n) {
		return function() {
			return !n.apply(this, arguments)
		}
	}, n.compose = function() {
		var n = arguments,
			t = n.length - 1;
		return function() {
			for (var r = t, i = n[t].apply(this, arguments); r--;) i = n[r].call(this, i);
			return i
		}
	}, n.after = function(n, t) {
		return function() {
			if (--n < 1) return t.apply(this, arguments)
		}
	}, n.before = function(n, t) {
		var i;
		return function() {
			return --n > 0 ? i = t.apply(this, arguments) : t = null, i
		}
	}, n.once = n.partial(n.before, 2), n.keys = function(t) {
		var r, i;
		if (!n.isObject(t)) return [];
		if (g) return g(t);
		r = [];
		for (i in t) n.has(t, i) && r.push(i);
		return r
	}, n.values = function(t) {
		for (var f = n.keys(t), r = f.length, u = Array(r), i = 0; r > i; i++) u[i] = t[f[i]];
		return u
	}, n.pairs = function(t) {
		for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++) f[i] = [r[i], t[r[i]]];
		return f
	}, n.invert = function(t) {
		for (var u = {}, r = n.keys(t), i = 0, f = r.length; f > i; i++) u[t[r[i]]] = r[i];
		return u
	}, n.functions = n.methods = function(t) {
		var r = [],
			i;
		for (i in t) n.isFunction(t[i]) && r.push(i);
		return r.sort()
	}, n.extend = function(t) {
		if (!n.isObject(t)) return t;
		for (var r, i, u = 1, f = arguments.length; f > u; u++) {
			r = arguments[u];
			for (i in r) d.call(r, i) && (t[i] = r[i])
		}
		return t
	}, n.pick = function(r, u, f) {
		var e, s = {},
			l, h, o, a;
		if (null == r) return s;
		if (n.isFunction(u)) {
			u = i(u, f);
			for (e in r) l = r[e], u(l, e, r) && (s[e] = l)
		} else for (h = c.apply([], t.call(arguments, 1)), r = new Object(r), o = 0, a = h.length; a > o; o++) e = h[o], e in r && (s[e] = r[e]);
		return s
	}, n.omit = function(i, r, u) {
		if (n.isFunction(r)) r = n.negate(r);
		else {
			var f = n.map(c.apply([], t.call(arguments, 1)), String);
			r = function(t, i) {
				return !n.contains(f, i)
			}
		}
		return n.pick(i, r, u)
	}, n.defaults = function(t) {
		var r, f, u, i;
		if (!n.isObject(t)) return t;
		for (r = 1, f = arguments.length; f > r; r++) {
			u = arguments[r];
			for (i in u) t[i] === void 0 && (t[i] = u[i])
		}
		return t
	}, n.clone = function(t) {
		return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({}, t) : t
	}, n.tap = function(n, t) {
		return t(n), n
	}, h = function(t, i, u, f) {
		var a, v, s, o, e, c, l, y;
		if (t === i) return 0 !== t || 1 / t == 1 / i;
		if (null == t || null == i) return t === i;
		if (t instanceof n && (t = t._wrapped), i instanceof n && (i = i._wrapped), a = r.call(t), a !== r.call(i)) return !1;
		switch (a) {
		case "[object RegExp]":
		case "[object String]":
			return "" + t == "" + i;
		case "[object Number]":
			return +t != +t ? +i != +i : 0 == +t ? 1 / +t == 1 / i : +t == +i;
		case "[object Date]":
		case "[object Boolean]":
			return +t == +i
		}
		if ("object" != typeof t || "object" != typeof i) return !1;
		for (v = u.length; v--;) if (u[v] === t) return f[v] === i;
		if (s = t.constructor, o = i.constructor, s !== o && "constructor" in t && "constructor" in i && !(n.isFunction(s) && s instanceof s && n.isFunction(o) && o instanceof o)) return !1;
		if (u.push(t), f.push(i), "[object Array]" === a) {
			if (e = t.length, c = e === i.length) for (; e-- && (c = h(t[e], i[e], u, f)););
		} else if (y = n.keys(t), e = y.length, c = n.keys(i).length === e) for (; e-- && (l = y[e], c = n.has(i, l) && h(t[l], i[l], u, f)););
		return u.pop(), f.pop(), c
	}, n.isEqual = function(n, t) {
		return h(n, t, [], [])
	}, n.isEmpty = function(t) {
		if (null == t) return !0;
		if (n.isArray(t) || n.isString(t) || n.isArguments(t)) return 0 === t.length;
		for (var i in t) if (n.has(t, i)) return !1;
		return !0
	}, n.isElement = function(n) {
		return !(!n || 1 !== n.nodeType)
	}, n.isArray = tt ||
	function(n) {
		return "[object Array]" === r.call(n)
	}, n.isObject = function(n) {
		var t = typeof n;
		return "function" === t || "object" === t && !! n
	}, n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
		n["is" + t] = function(n) {
			return r.call(n) === "[object " + t + "]"
		}
	}), n.isArguments(arguments) || (n.isArguments = function(t) {
		return n.has(t, "callee")
	}), "function" != typeof / . / && (n.isFunction = function(n) {
		return "function" == typeof n || !1
	}), n.isFinite = function(n) {
		return isFinite(n) && !isNaN(parseFloat(n))
	}, n.isNaN = function(t) {
		return n.isNumber(t) && t !== +t
	}, n.isBoolean = function(n) {
		return n === !0 || n === !1 || "[object Boolean]" === r.call(n)
	}, n.isNull = function(n) {
		return null === n
	}, n.isUndefined = function(n) {
		return n === void 0
	}, n.has = function(n, t) {
		return null != n && d.call(n, t)
	}, n.noConflict = function() {
		return y._ = et, this
	}, n.identity = function(n) {
		return n
	}, n.constant = function(n) {
		return function() {
			return n
		}
	}, n.noop = function() {}, n.property = function(n) {
		return function(t) {
			return t[n]
		}
	}, n.matches = function(t) {
		var r = n.pairs(t),
			i = r.length;
		return function(n) {
			var t, f, u;
			if (null == n) return !i;
			for (n = new Object(n), t = 0; i > t; t++) if (f = r[t], u = f[0], f[1] !== n[u] || !(u in n)) return !1;
			return !0
		}
	}, n.times = function(n, t, r) {
		var f = Array(Math.max(0, n)),
			u;
		for (t = i(t, r, 1), u = 0; n > u; u++) f[u] = t(u);
		return f
	}, n.random = function(n, t) {
		return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
	}, n.now = Date.now ||
	function() {
		return +new Date
	};
	var w = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#x27;",
		"`": "&#x60;"
	},
		ot = n.invert(w),
		b = function(t) {
			var f = function(n) {
					return t[n]
				},
				i = "(?:" + n.keys(t).join("|") + ")",
				u = RegExp(i),
				r = RegExp(i, "g");
			return function(n) {
				return n = null == n ? "" : "" + n, u.test(n) ? n.replace(r, f) : n
			}
		};
	n.escape = b(w), n.unescape = b(ot), n.result = function(t, i) {
		if (null == t) return void 0;
		var r = t[i];
		return n.isFunction(r) ? t[i]() : r
	}, p = 0, n.uniqueId = function(n) {
		var t = ++p + "";
		return n ? n + t : t
	}, n.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var a = /(.)^/,
		ut = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		rt = /\\|'|\r|\n|\u2028|\u2029/g,
		it = function(n) {
			return "\\" + ut[n]
		};
	n.template = function(t, i, r) {
		var o, f, e;
		!i && r && (i = r), i = n.defaults({}, i, n.templateSettings);
		var h = RegExp([(i.escape || a).source, (i.interpolate || a).source, (i.evaluate || a).source].join("|") + "|$", "g"),
			s = 0,
			u = "__p+='";
		t.replace(h, function(n, i, r, f, e) {
			return u += t.slice(s, e).replace(rt, it), s = e + n.length, i ? u += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : r ? u += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : f && (u += "';\n" + f + "\n__p+='"), n
		}), u += "';\n", i.variable || (u = "with(obj||{}){\n" + u + "}\n"), u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
		try {
			o = new Function(i.variable || "obj", "_", u)
		} catch (c) {
			throw c.source = u, c;
		}
		return f = function(t) {
			return o.call(this, t, n)
		}, e = i.variable || "obj", f.source = "function(" + e + "){\n" + u + "}", f
	}, n.chain = function(t) {
		var i = n(t);
		return i._chain = !0, i
	}, o = function(t) {
		return this._chain ? n(t).chain() : t
	}, n.mixin = function(t) {
		n.each(n.functions(t), function(i) {
			var r = n[i] = t[i];
			n.prototype[i] = function() {
				var t = [this._wrapped];
				return nt.apply(t, arguments), o.call(this, r.apply(n, t))
			}
		})
	}, n.mixin(n), n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
		var i = u[t];
		n.prototype[t] = function() {
			var n = this._wrapped;
			return i.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], o.call(this, n)
		}
	}), n.each(["concat", "join", "slice"], function(t) {
		var i = u[t];
		n.prototype[t] = function() {
			return o.call(this, i.apply(this._wrapped, arguments))
		}
	}), n.prototype.value = function() {
		return this._wrapped
	}, "function" == typeof define && define.amd && define("underscore", [], function() {
		return n
	})
}.call(this), this.JSON || (this.JSON = {}), function() {
	function i(n) {
		return n < 10 ? "0" + n : n
	}
	function f(n) {
		return o.lastIndex = 0, o.test(n) ? '"' + n.replace(o, function(n) {
			var t = s[n];
			return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + n + '"'
	}
	function r(i, e) {
		var c, l, h, a, v = n,
			s, o = e[i];
		o && typeof o == "object" && typeof o.toJSON == "function" && (o = o.toJSON(i)), typeof t == "function" && (o = t.call(e, i, o));
		switch (typeof o) {
		case "string":
			return f(o);
		case "number":
			return isFinite(o) ? String(o) : "null";
		case "boolean":
		case "null":
			return String(o);
		case "object":
			if (!o) return "null";
			if (n += u, s = [], Object.prototype.toString.apply(o) === "[object Array]") {
				for (a = o.length, c = 0; c < a; c += 1) s[c] = r(c, o) || "null";
				return h = s.length === 0 ? "[]" : n ? "[\n" + n + s.join(",\n" + n) + "\n" + v + "]" : "[" + s.join(",") + "]", n = v, h
			}
			if (t && typeof t == "object") for (a = t.length, c = 0; c < a; c += 1) l = t[c], typeof l == "string" && (h = r(l, o), h && s.push(f(l) + (n ? ": " : ":") + h));
			else for (l in o) Object.hasOwnProperty.call(o, l) && (h = r(l, o), h && s.push(f(l) + (n ? ": " : ":") + h));
			return h = s.length === 0 ? "{}" : n ? "{\n" + n + s.join(",\n" + n) + "\n" + v + "}" : "{" + s.join(",") + "}", n = v, h
		}
	}
	typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function() {
		return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "Z" : null
	}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
		return this.valueOf()
	});
	var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		n, u, s = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		},
		t;
	typeof JSON.stringify != "function" && (JSON.stringify = function(i, f, e) {
		var o;
		if (n = "", u = "", typeof e == "number") for (o = 0; o < e; o += 1) u += " ";
		else typeof e == "string" && (u = e);
		if (t = f, f && typeof f != "function" && (typeof f != "object" || typeof f.length != "number")) throw new Error("JSON.stringify");
		return r("", {
			"": i
		})
	}), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
		function walk(n, t) {
			var r, u, i = n[t];
			if (i && typeof i == "object") for (r in i) Object.hasOwnProperty.call(i, r) && (u = walk(i, r), u !== undefined ? i[r] = u : delete i[r]);
			return reviver.call(n, t, i)
		}
		var j;
		if (text = String(text), e.lastIndex = 0, e.test(text) && (text = text.replace(e, function(n) {
			return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
		})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
			"": j
		}, "") : j;
		throw new SyntaxError("JSON.parse");
	})
}(), function(n) {
	function i(t) {
		var i = this.form,
			r;
		i.clk = this, this.type == "image" && (t.offsetX != undefined ? (i.clk_x = t.offsetX, i.clk_y = t.offsetY) : typeof n.fn.offset == "function" ? (r = n(this).offset(), i.clk_x = t.pageX - r.left, i.clk_y = t.pageY - r.top) : (i.clk_x = t.pageX - this.offsetLeft, i.clk_y = t.pageY - this.offsetTop)), setTimeout(function() {
			i.clk = i.clk_x = i.clk_y = null
		}, 10)
	}
	function t() {
		var i = this.formPluginId,
			t = n.fn.ajaxForm.optionHash[i];
		return n(this).ajaxSubmit(t), !1
	}
	n.fn.ajaxSubmit = function(t) {
		function l() {
			function o() {
				var ok, data, doc, ta;
				if (!l++) {
					f.detachEvent ? f.detachEvent("onload", o) : f.removeEventListener("load", o, !1), ok = !0;
					try {
						if (h) throw "timeout";
						doc = f.contentWindow ? f.contentWindow.document : f.contentDocument ? f.contentDocument : f.document, u.responseText = doc.body ? doc.body.innerHTML : null, u.responseXML = doc.XMLDocument ? doc.XMLDocument : doc, r.dataType == "json" || r.dataType == "script" ? (ta = doc.getElementsByTagName("textarea")[0], data = ta ? ta.value : u.responseText, r.dataType == "json" ? eval("data = " + data) : n.globalEval(data)) : r.dataType == "xml" ? (data = u.responseXML, data || u.responseText == null || (data = v(u.responseText))) : data = u.responseText
					} catch (e) {
						ok = !1, n.handleError(r, u, "error", e)
					}
					ok && (r.success(data, "success"), e && n.event.trigger("ajaxSuccess", [u, r])), e && n.event.trigger("ajaxComplete", [u, r]), e && !--n.active && n.event.trigger("ajaxStop"), r.complete && r.complete(u, ok ? "success" : "error"), setTimeout(function() {
						s.remove(), u.responseXML = null
					}, 100)
				}
			}
			function v(n, t) {
				return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(n)) : t = (new DOMParser).parseFromString(n, "text/xml"), t && t.documentElement && t.documentElement.tagName != "parsererror" ? t : null
			}
			var a = i[0],
				r = n.extend({}, n.ajaxSettings, t),
				c = "jqFormIO" + n.fn.ajaxSubmit.counter++,
				s = n('<iframe id="' + c + '" name="' + c + '" />'),
				f = s[0],
				y = n.browser.opera && window.opera.version() < 9,
				u, e, l, h;
			(n.browser.msie || y) && (f.src = 'javascript:false;document.write("");'), s.css({
				position: "absolute",
				top: "-1000px",
				left: "-1000px"
			}), u = {
				responseText: null,
				responseXML: null,
				status: 0,
				statusText: "n/a",
				getAllResponseHeaders: function() {},
				getResponseHeader: function() {},
				setRequestHeader: function() {}
			}, e = r.global, e && !n.active++ && n.event.trigger("ajaxStart"), e && n.event.trigger("ajaxSend", [u, r]), l = 0, h = 0, setTimeout(function() {
				s.appendTo("body"), f.attachEvent ? f.attachEvent("onload", o) : f.addEventListener("load", o, !1);
				var t = a.encoding ? "encoding" : "enctype",
					n = i.attr("target");
				i.attr({
					target: c,
					method: "POST",
					encAttr: "multipart/form-data",
					action: r.url
				}), r.timeout && setTimeout(function() {
					h = !0, o()
				}, r.timeout), a.submit(), i.attr("target", n)
			}, 10)
		}
		var f, s, h, i, r, c, o, e, u;
		if ((typeof t == "function" && (t = {
			success: t
		}), t = n.extend({
			url: this.attr("action") || window.location,
			type: this.attr("method") || "GET"
		}, t || {}), f = this.formToArray(t.semantic), t.beforeSubmit && t.beforeSubmit(f, this, t) === !1) || (s = {}, n.event.trigger("form.submit.validate", [f, this, t, s]), s.veto)) return this;
		for (h = n.param(f), t.type.toUpperCase() == "GET" ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + h, t.data = null) : t.data = h, i = this, r = [], t.resetForm && r.push(function() {
			i.resetForm()
		}), t.clearForm && r.push(function() {
			i.clearForm()
		}), !t.dataType && t.target ? (c = t.success, r.push(function(i) {
			n(t.target).attr("innerHTML", i).evalScripts().each(c, arguments)
		})) : t.success && r.push(t.success), t.success = function(n, t) {
			for (var u = 0, f = r.length; u < f; u++) r[u](n, t, i)
		}, o = n("input:file", this).fieldValue(), e = !1, u = 0; u < o.length; u++) o[u] && (e = !0);
		return t.iframe || e ? l() : n.ajax(t), n.event.trigger("form.submit.notify", [this, t]), this
	}, n.fn.ajaxSubmit.counter = 0, n.fn.ajaxForm = function(r) {
		return this.ajaxFormUnbind().submit(t).each(function() {
			this.formPluginId = n.fn.ajaxForm.counter++, n.fn.ajaxForm.optionHash[this.formPluginId] = r, n(":submit,input:image", this).click(i)
		})
	}, n.fn.ajaxForm.counter = 1, n.fn.ajaxForm.optionHash = {}, n.fn.ajaxFormUnbind = function() {
		return this.unbind("submit", t), this.each(function() {
			n(":submit,input:image", this).unbind("click", i)
		})
	}, n.fn.formToArray = function(t) {
		var e = [],
			i, l, o, f, c, v, a, u, h, s, r;
		if (this.length == 0 || (i = this[0], l = t ? i.getElementsByTagName("*") : i.elements, !l)) return e;
		for (u = 0, h = l.length; u < h; u++) if (o = l[u], r = o.name, r) {
			if (t && i.clk && o.type == "image") {
				o.disabled || i.clk != o || e.push({
					name: r + ".x",
					value: i.clk_x
				}, {
					name: r + ".y",
					value: i.clk_y
				});
				continue
			}
			if (f = n.fieldValue(o, !0), f && f.constructor == Array) for (c = 0, v = f.length; c < v; c++) e.push({
				name: r,
				value: f[c]
			});
			else f !== null && typeof f != "undefined" && e.push({
				name: r,
				value: f
			})
		}
		if (!t && i.clk) for (a = i.getElementsByTagName("input"), u = 0, h = a.length; u < h; u++) s = a[u], r = s.name, r && !s.disabled && s.type == "image" && i.clk == s && e.push({
			name: r + ".x",
			value: i.clk_x
		}, {
			name: r + ".y",
			value: i.clk_y
		});
		return e
	}, n.fn.formSerialize = function(t) {
		return n.param(this.formToArray(t))
	}, n.fn.fieldSerialize = function(t) {
		var i = [];
		return this.each(function() {
			var e = this.name,
				r, u, f;
			if (e) if (r = n.fieldValue(this, t), r && r.constructor == Array) for (u = 0, f = r.length; u < f; u++) i.push({
				name: e,
				value: r[u]
			});
			else r !== null && typeof r != "undefined" && i.push({
				name: this.name,
				value: r
			})
		}), n.param(i)
	}, n.fn.fieldValue = function(t) {
		for (var f, i, u = [], r = 0, e = this.length; r < e; r++)(f = this[r], i = n.fieldValue(f, t), i !== null && typeof i != "undefined" && (i.constructor != Array || i.length)) && (i.constructor == Array ? n.merge(u, i) : u.push(i));
		return u
	}, n.fieldValue = function(t, i) {
		var v = t.name,
			r = t.type,
			h = t.tagName.toLowerCase(),
			f, e, u, s;
		if (typeof i == "undefined" && (i = !0), i && (!v || t.disabled || r == "reset" || r == "button" || (r == "checkbox" || r == "radio") && !t.checked || (r == "submit" || r == "image") && t.form && t.form.clk != t || h == "select" && t.selectedIndex == -1)) return null;
		if (h == "select") {
			if (f = t.selectedIndex, f < 0) return null;
			var c = [],
				l = t.options,
				o = r == "select-one",
				a = o ? f + 1 : l.length;
			for (e = o ? f : 0; e < a; e++) if (u = l[e], u.selected) {
				if (s = n.browser.msie && !u.attributes.value.specified ? u.text : u.value, o) return s;
				c.push(s)
			}
			return c
		}
		return t.value
	}, n.fn.clearForm = function() {
		return this.each(function() {
			n("input,select,textarea", this).clearFields()
		})
	}, n.fn.clearFields = n.fn.clearInputs = function() {
		return this.each(function() {
			var n = this.type,
				t = this.tagName.toLowerCase();
			n == "text" || n == "password" || t == "textarea" ? this.value = "" : n == "checkbox" || n == "radio" ? this.checked = !1 : t == "select" && (this.selectedIndex = -1)
		})
	}, n.fn.resetForm = function() {
		return this.each(function() {
			typeof this.reset != "function" && (typeof this.reset != "object" || this.reset.nodeType) || this.reset()
		})
	}
}(jQuery), ZeroClipboard = {
	version: "1.0.7",
	clients: {},
	moviePath: "/Scripts/KC/ZeroClipboard.swf",
	nextId: 1,
	$: function(n) {
		return typeof n == "string" && (n = document.getElementById(n)), n.addClass || (n.hide = function() {
			this.style.display = "none"
		}, n.show = function() {
			this.style.display = ""
		}, n.addClass = function(n) {
			this.removeClass(n), this.className += " " + n
		}, n.removeClass = function(n) {
			for (var i = this.className.split(/\s+/), r = -1, t = 0; t < i.length; t++) i[t] == n && (r = t, t = i.length);
			return r > -1 && (i.splice(r, 1), this.className = i.join(" ")), this
		}, n.hasClass = function(n) {
			return !!this.className.match(new RegExp("\\s*" + n + "\\s*"))
		}), n
	},
	setMoviePath: function(n) {
		this.moviePath = n
	},
	dispatch: function(n, t, i) {
		var r = this.clients[n];
		r && r.receiveEvent(t, i)
	},
	register: function(n, t) {
		this.clients[n] = t
	},
	getDOMObjectPosition: function(n, t) {
		for (var i = {
			left: 0,
			top: 0,
			width: n.width ? n.width : n.offsetWidth,
			height: n.height ? n.height : n.offsetHeight
		}; n && n != t;) i.left += n.offsetLeft, i.top += n.offsetTop, n = n.offsetParent;
		return i
	},
	Client: function(n, t) {
		this.handlers = {}, this.id = t ? t : ZeroClipboard.nextId++, this.movieId = "ZeroClipboardMovie_" + this.id, ZeroClipboard.register(this.id, this), n && this.glue(n)
	},
	GetClient: function() {}
}, ZeroClipboard.Client.prototype = {
	id: 0,
	ready: !1,
	movie: null,
	clipText: "",
	handCursorEnabled: !0,
	cssEffects: !0,
	handlers: null,
	glue: function(n, t, i) {
		var f, u, r;
		if (this.domElement = ZeroClipboard.$(n), f = 1001, this.domElement.style.zIndex && (f = parseInt(this.domElement.style.zIndex, 10) + 1), typeof t == "string" ? t = ZeroClipboard.$(t) : typeof t == "undefined" && (t = document.getElementsByTagName("body")[0]), u = ZeroClipboard.getDOMObjectPosition(this.domElement, t), this.div = document.createElement("div"), r = this.div.style, r.position = "absolute", r.left = "" + u.left + "px", r.top = "" + u.top + "px", r.width = "" + u.width + "px", r.height = "" + u.height + "px", r.zIndex = f, typeof i == "object") for (addedStyle in i) r[addedStyle] = i[addedStyle];
		t.appendChild(this.div), this.div.innerHTML = this.getHTML(u.width, u.height)
	},
	getHTML: function(n, t) {
		var i = "",
			u = "id=" + this.id + "&width=" + n + "&height=" + t,
			r;
		return navigator.userAgent.match(/MSIE/) ? (r = location.href.match(/^https/i) ? "https://" : "http://", i += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + r + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + n + '" height="' + t + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + u + '"/><param name="wmode" value="transparent"/></object>') : i += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + n + '" height="' + t + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + u + '" wmode="transparent" />', i
	},
	hide: function() {
		this.div && (this.div.style.left = "-2000px")
	},
	show: function() {
		this.reposition()
	},
	destroyById: function() {
		var n = document.getElementById(this.movieId);
		n.parentElement.remove()
	},
	destroy: function() {
		if (this.domElement && this.div) {
			this.hide(), this.div.innerHTML = "";
			var n = document.getElementsByTagName("body")[0];
			try {
				n.removeChild(this.div)
			} catch (t) {}
			this.domElement = null, this.div = null
		}
	},
	reposition: function(n) {
		if (n && (this.domElement = ZeroClipboard.$(n), this.domElement || this.hide()), this.domElement && this.div) {
			var i = ZeroClipboard.getDOMObjectPosition(this.domElement),
				t = this.div.style;
			t.left = "" + i.left + "px", t.top = "" + i.top + "px"
		}
	},
	setText: function(n) {
		this.clipText = n, this.ready && this.movie.setText(n)
	},
	addEventListener: function(n, t) {
		n = n.toString().toLowerCase().replace(/^on/, ""), this.handlers[n] || (this.handlers[n] = []), this.handlers[n].push(t)
	},
	setHandCursor: function(n) {
		this.handCursorEnabled = n, this.ready && this.movie.setHandCursor(n)
	},
	setCSSEffects: function(n) {
		this.cssEffects = !! n
	},
	receiveEvent: function(n, t) {
		var r, u, f, i;
		n = n.toString().toLowerCase().replace(/^on/, "");
		switch (n) {
		case "load":
			if (this.movie = document.getElementById(this.movieId), !this.movie) {
				r = this, setTimeout(function() {
					r.receiveEvent("load", null)
				}, 1);
				return
			}
			if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
				r = this, setTimeout(function() {
					r.receiveEvent("load", null)
				}, 100), this.ready = !0;
				return
			}
			this.ready = !0, this.movie.setText(this.clipText), this.movie.setHandCursor(this.handCursorEnabled);
			break;
		case "mouseover":
			this.domElement && this.cssEffects && (this.domElement.addClass("hover"), this.recoverActive && this.domElement.addClass("active"));
			break;
		case "mouseout":
			this.domElement && this.cssEffects && (this.recoverActive = !1, this.domElement.hasClass("active") && (this.domElement.removeClass("active"), this.recoverActive = !0), this.domElement.removeClass("hover"));
			break;
		case "mousedown":
			this.domElement && this.cssEffects && this.domElement.addClass("active");
			break;
		case "mouseup":
			this.domElement && this.cssEffects && (this.domElement.removeClass("active"), this.recoverActive = !1)
		}
		if (this.handlers[n]) for (u = 0, f = this.handlers[n].length; u < f; u++) i = this.handlers[n][u], typeof i == "function" ? i(this, t) : typeof i == "object" && i.length == 2 ? i[0][i[1]](this, t) : typeof i == "string" && window[i](this, t)
	}
}, function(n, t) {
	"use strict";

	function l(t, r) {
		var u, f;
		if (n.isArray(t)) {
			for (u = t.length - 1; u >= 0; u--) f = t[u], n.type(t) === "object" || n.type(f) === "string" && i.transports[f] || (r.log("Invalid transport: " + f + ", removing it from the transports list."), t.splice(u, 1));
			t.length === 0 && (r.log("No transports remain within the specified transport array."), t = null)
		} else if (n.type(t) === "object" || i.transports[t] || t === "auto") {
			if (t === "auto" && i._.ieVersion <= 8) return ["longPolling"]
		} else r.log("Invalid transport: " + t.toString()), t = null;
		return t
	}
	function a(n) {
		return n === "http:" ? 80 : n === "https:" ? 443 : void 0
	}
	function o(n, t) {
		return t.match(/:\d+$/) ? t : t + ":" + a(n)
	}
	if (typeof n != "function") throw new Error("SignalR: jQuery not found. Please ensure jQuery is referenced before the SignalR.js file.");
	if (!t.JSON) throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");
	var i, s, e = t.document.readyState === "complete",
		f = n(t),
		r = {
			onStart: "onStart",
			onStarting: "onStarting",
			onReceived: "onReceived",
			onError: "onError",
			onConnectionSlow: "onConnectionSlow",
			onReconnecting: "onReconnecting",
			onReconnect: "onReconnect",
			onStateChanged: "onStateChanged",
			onDisconnect: "onDisconnect"
		},
		v = function(n, i) {
			if (i !== !1) {
				var r;
				typeof t.console != "undefined" && (r = "[" + (new Date).toTimeString() + "] SignalR: " + n, t.console.debug ? t.console.debug(r) : t.console.log && t.console.log(r))
			}
		},
		u = function(t, i, u) {
			return i === t.state ? (t.state = u, n(t).triggerHandler(r.onStateChanged, [{
				oldState: i,
				newState: u
			}]), !0) : !1
		},
		h = function(n) {
			return n.state === i.connectionState.disconnected
		},
		c = function(n) {
			var u, r;
			n._.configuredStopReconnectingTimeout || (r = function(n) {
				n.log("Couldn't reconnect within the configured timeout (" + n.disconnectTimeout + "ms), disconnecting."), n.stop(!1, !1)
			}, n.reconnecting(function() {
				var n = this;
				n.state === i.connectionState.reconnecting && (u = t.setTimeout(function() {
					r(n)
				}, n.disconnectTimeout))
			}), n.stateChanged(function(n) {
				n.oldState === i.connectionState.reconnecting && t.clearTimeout(u)
			}), n._.configuredStopReconnectingTimeout = !0)
		};
	i = function(n, t, r) {
		return new i.fn.init(n, t, r)
	}, i._ = {
		defaultContentType: "application/x-www-form-urlencoded; charset=UTF-8",
		ieVersion: function() {
			var i, n;
			return t.navigator.appName === "Microsoft Internet Explorer" && (n = /MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent), n && (i = t.parseFloat(n[1]))), i
		}()
	}, i.events = r, i.changeState = u, i.isDisconnecting = h, i.connectionState = {
		connecting: 0,
		connected: 1,
		reconnecting: 2,
		disconnected: 4
	}, i.hub = {
		start: function() {
			throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/hubs'><\/script>.");
		}
	}, f.load(function() {
		e = !0
	}), i.fn = i.prototype = {
		init: function(n, t, i) {
			this.url = n, this.qs = t, this._ = {}, typeof i == "boolean" && (this.logging = i)
		},
		isCrossDomain: function(i, r) {
			var u;
			return (i = n.trim(i), i.indexOf("http") !== 0) ? !1 : (r = r || t.location, u = t.document.createElement("a"), u.href = i, u.protocol + o(u.protocol, u.host) !== r.protocol + o(r.protocol, r.host))
		},
		ajaxDataType: "json",
		contentType: "application/json; charset=UTF-8",
		logging: !1,
		state: i.connectionState.disconnected,
		keepAliveData: {},
		reconnectDelay: 2e3,
		disconnectTimeout: 3e4,
		keepAliveWarnAt: 2 / 3,
		start: function(o, s) {
			var h = this,
				a = {
					waitForPageLoad: !0,
					transport: "auto",
					jsonp: !1
				},
				w, v = h._deferral || n.Deferred(),
				y = t.document.createElement("a"),
				p;
			if (n.type(o) === "function" ? s = o : n.type(o) === "object" && (n.extend(a, o), n.type(a.callback) === "function" && (s = a.callback)), a.transport = l(a.transport, h), !a.transport) throw new Error("SignalR: Invalid transport(s) specified, aborting start.");
			return !e && a.waitForPageLoad === !0 ? (f.load(function() {
				h._deferral = v, h.start(o, s)
			}), v.promise()) : (c(h), u(h, i.connectionState.disconnected, i.connectionState.connecting) === !1) ? (v.resolve(h), v.promise()) : (y.href = h.url, y.protocol && y.protocol !== ":" ? (h.protocol = y.protocol, h.host = y.host, h.baseUrl = y.protocol + "//" + y.host) : (h.protocol = t.document.location.protocol, h.host = t.document.location.host, h.baseUrl = h.protocol + "//" + h.host), h.wsProtocol = h.protocol === "https:" ? "wss://" : "ws://", a.transport === "auto" && a.jsonp === !0 && (a.transport = "longPolling"), this.isCrossDomain(h.url) && (h.log("Auto detected cross domain url."), a.transport === "auto" && (a.transport = ["webSockets", "longPolling"]), a.jsonp || (a.jsonp = !n.support.cors, a.jsonp && h.log("Using jsonp because this browser doesn't support CORS")), h.contentType = i._.defaultContentType), h.ajaxDataType = a.jsonp ? "jsonp" : "json", n(h).bind(r.onStart, function() {
				n.type(s) === "function" && s.call(h), v.resolve(h)
			}), w = function(t, e) {
				if (e = e || 0, e >= t.length) {
					h.transport || (n(h).triggerHandler(r.onError, ["SignalR: No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization."]), v.reject("SignalR: No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization."), h.stop());
					return
				}
				var o = t[e],
					s = n.type(o) === "object" ? o : i.transports[o];
				if (o.indexOf("_") === 0) {
					w(t, e + 1);
					return
				}
				s.start(h, function() {
					s.supportsKeepAlive && h.keepAliveData.activated && i.transports._logic.monitorKeepAlive(h), h.transport = s, u(h, i.connectionState.connecting, i.connectionState.connected), n(h).triggerHandler(r.onStart), f.unload(function() {
						h.stop(!1)
					})
				}, function() {
					w(t, e + 1)
				})
			}, p = h.url + "/negotiate", p = i.transports._logic.addQs(p, h), h.log("Negotiating with '" + p + "'."), n.ajax({
				url: p,
				global: !1,
				cache: !1,
				type: "GET",
				contentType: h.contentType,
				data: {},
				dataType: h.ajaxDataType,
				error: function(t) {
					n(h).triggerHandler(r.onError, [t.responseText]), v.reject("SignalR: Error during negotiation request: " + t.responseText), h.stop()
				},
				success: function(t) {
					var u = h.keepAliveData,
						e, f;
					if (h.appRelativeUrl = t.Url, h.id = t.ConnectionId, h.token = t.ConnectionToken, h.webSocketServerUrl = t.WebSocketServerUrl, h.disconnectTimeout = t.DisconnectTimeout * 1e3, t.KeepAliveTimeout ? (u.activated = !0, u.timeout = t.KeepAliveTimeout * 1e3, u.timeoutWarning = u.timeout * h.keepAliveWarnAt, u.checkInterval = (u.timeout - u.timeoutWarning) / 3) : u.activated = !1, !t.ProtocolVersion || t.ProtocolVersion !== "1.2") {
						n(h).triggerHandler(r.onError, ["You are using a version of the client that isn't compatible with the server. Client version 1.2, server version " + t.ProtocolVersion + "."]), v.reject("You are using a version of the client that isn't compatible with the server. Client version 1.2, server version " + t.ProtocolVersion + ".");
						return
					}
					n(h).triggerHandler(r.onStarting), e = [], f = [], n.each(i.transports, function(n) {
						if (n === "webSockets" && !t.TryWebSockets) return !0;
						f.push(n)
					}), n.isArray(a.transport) ? n.each(a.transport, function() {
						var t = this;
						(n.type(t) === "object" || n.type(t) === "string" && n.inArray("" + t, f) >= 0) && e.push(n.type(t) === "string" ? "" + t : t)
					}) : n.type(a.transport) === "object" || n.inArray(a.transport, f) >= 0 ? e.push(a.transport) : e = f, w(e)
				}
			}), v.promise())
		},
		starting: function(t) {
			var i = this;
			return n(i).bind(r.onStarting, function() {
				t.call(i)
			}), i
		},
		send: function(n) {
			var t = this;
			if (t.state === i.connectionState.disconnected) throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");
			if (t.state === i.connectionState.connecting) throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");
			return t.transport.send(t, n), t
		},
		received: function(t) {
			var i = this;
			return n(i).bind(r.onReceived, function(n, r) {
				t.call(i, r)
			}), i
		},
		stateChanged: function(t) {
			var i = this;
			return n(i).bind(r.onStateChanged, function(n, r) {
				t.call(i, r)
			}), i
		},
		error: function(t) {
			var i = this;
			return n(i).bind(r.onError, function(n, r) {
				t.call(i, r)
			}), i
		},
		disconnected: function(t) {
			var i = this;
			return n(i).bind(r.onDisconnect, function() {
				t.call(i)
			}), i
		},
		connectionSlow: function(t) {
			var i = this;
			return n(i).bind(r.onConnectionSlow, function() {
				t.call(i)
			}), i
		},
		reconnecting: function(t) {
			var i = this;
			return n(i).bind(r.onReconnecting, function() {
				t.call(i)
			}), i
		},
		reconnected: function(t) {
			var i = this;
			return n(i).bind(r.onReconnect, function() {
				t.call(i)
			}), i
		},
		stop: function(t, f) {
			var e = this;
			if (e.state !== i.connectionState.disconnected) {
				try {
					e.transport && (f !== !1 && e.transport.abort(e, t), e.transport.supportsKeepAlive && e.keepAliveData.activated && i.transports._logic.stopMonitoringKeepAlive(e), e.transport.stop(e), e.transport = null), n(e).triggerHandler(r.onDisconnect), delete e.messageId, delete e.groupsToken, delete e.id, delete e._deferral
				} finally {
					u(e, e.state, i.connectionState.disconnected)
				}
				return e
			}
		},
		log: function(n) {
			v(n, this.logging)
		}
	}, i.fn.init.prototype = i.fn, i.noConflict = function() {
		return n.connection === i && (n.connection = s), i
	}, n.connection && (s = n.connection), n.connection = n.signalR = i
}(window.jQuery, window), function(n, t) {
	"use strict";

	function u(f) {
		var e = f.keepAliveData,
			o, s;
		f.state === i.connectionState.connected && (o = new Date, o.setTime(o - e.lastKeepAlive), s = o.getTime(), s >= e.timeout ? (f.log("Keep alive timed out.  Notifying transport that connection has been lost."), f.transport.lostConnection(f)) : s >= e.timeoutWarning ? e.userNotified || (f.log("Keep alive has been missed, connection may be dead/slow."), n(f).triggerHandler(r.onConnectionSlow), e.userNotified = !0) : e.userNotified = !1), e.monitoring && t.setTimeout(function() {
			u(f)
		}, e.checkInterval)
	}
	function e(n) {
		return n.state === i.connectionState.connected || n.state === i.connectionState.reconnecting
	}
	var i = n.signalR,
		r = n.signalR.events,
		f = n.signalR.changeState;
	i.transports = {}, i.transports._logic = {
		pingServer: function(t, i) {
			var f = i === "webSockets" ? "" : t.baseUrl,
				u = f + t.appRelativeUrl + "/ping",
				r = n.Deferred();
			return u = this.addQs(u, t), n.ajax({
				url: u,
				global: !1,
				cache: !1,
				type: "GET",
				contentType: t.contentType,
				data: {},
				dataType: t.ajaxDataType,
				success: function(n) {
					n.Response === "pong" ? r.resolve() : r.reject("SignalR: Invalid ping response when pinging server: " + (n.responseText || n.statusText))
				},
				error: function(n) {
					r.reject("SignalR: Error pinging server: " + (n.responseText || n.statusText))
				}
			}), r.promise()
		},
		addQs: function(t, i) {
			var u = t.indexOf("?") !== -1 ? "&" : "?",
				r;
			if (!i.qs) return t;
			if (typeof i.qs == "object") return t + u + n.param(i.qs);
			if (typeof i.qs == "string") return r = i.qs.charAt(0), (r === "?" || r === "&") && (u = ""), t + u + i.qs;
			throw new Error("Connections query string property must be either a string or object.");
		},
		getUrl: function(n, i, r, u) {
			var o = i === "webSockets" ? "" : n.baseUrl,
				f = o + n.appRelativeUrl,
				e = "transport=" + i + "&connectionToken=" + t.encodeURIComponent(n.token);
			return n.data && (e += "&connectionData=" + t.encodeURIComponent(n.data)), n.groupsToken && (e += "&groupsToken=" + t.encodeURIComponent(n.groupsToken)), r ? (f += u ? "/poll" : "/reconnect", n.messageId && (e += "&messageId=" + t.encodeURIComponent(n.messageId))) : f += "/connect", f += "?" + e, f = this.addQs(f, n), f += "&tid=" + Math.floor(Math.random() * 11)
		},
		maximizePersistentResponse: function(n) {
			return {
				MessageId: n.C,
				Messages: n.M,
				Disconnect: typeof n.D != "undefined" ? !0 : !1,
				TimedOut: typeof n.T != "undefined" ? !0 : !1,
				LongPollDelay: n.L,
				GroupsToken: n.G
			}
		},
		updateGroups: function(n, t) {
			t && (n.groupsToken = t)
		},
		ajaxSend: function(u, f) {
			var e = u.url + "/send?transport=" + u.transport.name + "&connectionToken=" + t.encodeURIComponent(u.token);
			return e = this.addQs(e, u), n.ajax({
				url: e,
				global: !1,
				type: u.ajaxDataType === "jsonp" ? "GET" : "POST",
				contentType: i._.defaultContentType,
				dataType: u.ajaxDataType,
				data: {
					data: f
				},
				success: function(t) {
					t && n(u).triggerHandler(r.onReceived, [t])
				},
				error: function(t, i) {
					i !== "abort" && i !== "parsererror" && n(u).triggerHandler(r.onError, [t])
				}
			})
		},
		ajaxAbort: function(i, r) {
			if (typeof i.transport != "undefined") {
				r = typeof r == "undefined" ? !0 : r;
				var u = i.url + "/abort?transport=" + i.transport.name + "&connectionToken=" + t.encodeURIComponent(i.token);
				u = this.addQs(u, i), n.ajax({
					url: u,
					async: r,
					timeout: 1e3,
					global: !1,
					type: "POST",
					contentType: i.contentType,
					dataType: i.ajaxDataType,
					data: {}
				}), i.log("Fired ajax abort async = " + r)
			}
		},
		processMessages: function(t, i) {
			var u, f;
			if (t.transport) {
				if (f = n(t), t.transport.supportsKeepAlive && t.keepAliveData.activated && this.updateKeepAlive(t), !i) return;
				if (u = this.maximizePersistentResponse(i), u.Disconnect) {
					t.log("Disconnect command received from server"), t.stop(!1, !1);
					return
				}
				this.updateGroups(t, u.GroupsToken), u.Messages && n.each(u.Messages, function(n, t) {
					f.triggerHandler(r.onReceived, [t])
				}), u.MessageId && (t.messageId = u.MessageId)
			}
		},
		monitorKeepAlive: function(t) {
			var i = t.keepAliveData,
				f = this;
			i.monitoring ? t.log("Tried to monitor keep alive but it's already being monitored") : (i.monitoring = !0, f.updateKeepAlive(t), t.keepAliveData.reconnectKeepAliveUpdate = function() {
				f.updateKeepAlive(t)
			}, n(t).bind(r.onReconnect, t.keepAliveData.reconnectKeepAliveUpdate), t.log("Now monitoring keep alive with a warning timeout of " + i.timeoutWarning + " and a connection lost timeout of " + i.timeout), u(t))
		},
		stopMonitoringKeepAlive: function(t) {
			var i = t.keepAliveData;
			i.monitoring && (i.monitoring = !1, n(t).unbind(r.onReconnect, t.keepAliveData.reconnectKeepAliveUpdate), t.keepAliveData = {}, t.log("Stopping the monitoring of the keep alive"))
		},
		updateKeepAlive: function(n) {
			n.keepAliveData.lastKeepAlive = new Date
		},
		ensureReconnectingState: function(t) {
			return f(t, i.connectionState.connected, i.connectionState.reconnecting) === !0 && n(t).triggerHandler(r.onReconnecting), t.state === i.connectionState.reconnecting
		},
		clearReconnectTimeout: function(n) {
			n && n._.reconnectTimeout && (t.clearTimeout(n._.reconnectTimeout), delete n._.reconnectTimeout)
		},
		reconnect: function(n, r) {
			var u = i.transports[r],
				f = this;
			e(n) && !n._.reconnectTimeout && (n._.reconnectTimeout = t.setTimeout(function() {
				u.stop(n), f.ensureReconnectingState(n) && (n.log(r + " reconnecting"), u.start(n))
			}, n.reconnectDelay))
		},
		foreverFrame: {
			count: 0,
			connections: {}
		}
	}
}(window.jQuery, window), function(n, t) {
	"use strict";
	var r = n.signalR,
		u = n.signalR.events,
		f = n.signalR.changeState,
		i = r.transports._logic;
	r.transports.webSockets = {
		name: "webSockets",
		supportsKeepAlive: !0,
		send: function(n, t) {
			n.socket.send(t)
		},
		start: function(e, o, s) {
			var h, a = !1,
				l = this,
				c = !o,
				v = n(e);
			if (!t.WebSocket) {
				s();
				return
			}
			e.socket || (h = e.webSocketServerUrl ? e.webSocketServerUrl : e.wsProtocol + e.host, h += i.getUrl(e, this.name, c), e.log("Connecting to websocket endpoint '" + h + "'"), e.socket = new t.WebSocket(h), e.socket.onopen = function() {
				a = !0, e.log("Websocket opened"), i.clearReconnectTimeout(e), o ? o() : f(e, r.connectionState.reconnecting, r.connectionState.connected) === !0 && v.triggerHandler(u.onReconnect)
			}, e.socket.onclose = function(t) {
				if (this === e.socket) {
					if (a) typeof t.wasClean != "undefined" && t.wasClean === !1 ? (n(e).triggerHandler(u.onError, [t.reason]), e.log("Unclean disconnect from websocket." + t.reason)) : e.log("Websocket closed");
					else {
						s ? s() : c && l.reconnect(e);
						return
					}
					l.reconnect(e)
				}
			}, e.socket.onmessage = function(r) {
				var f = t.JSON.parse(r.data),
					o = n(e);
				f && (n.isEmptyObject(f) || f.M ? i.processMessages(e, f) : o.triggerHandler(u.onReceived, [f]))
			})
		},
		reconnect: function(n) {
			i.reconnect(n, this.name)
		},
		lostConnection: function(n) {
			this.reconnect(n)
		},
		stop: function(n) {
			i.clearReconnectTimeout(n), n.socket !== null && (n.log("Closing the Websocket"), n.socket.close(), n.socket = null)
		},
		abort: function() {}
	}
}(window.jQuery, window), function(n, t) {
	"use strict";
	var r = n.signalR,
		u = n.signalR.events,
		f = n.signalR.changeState,
		i = r.transports._logic;
	r.transports.serverSentEvents = {
		name: "serverSentEvents",
		supportsKeepAlive: !0,
		timeOut: 3e3,
		start: function(e, o, s) {
			var h = this,
				l = !1,
				y = n(e),
				c = !o,
				v, a;
			if (e.eventSource && (e.log("The connection already has an event source. Stopping it."), e.stop()), !t.EventSource) {
				s && (e.log("This browser doesn't support SSE."), s());
				return
			}
			v = i.getUrl(e, this.name, c);
			try {
				e.log("Attempting to connect to SSE endpoint '" + v + "'"), e.eventSource = new t.EventSource(v)
			} catch (p) {
				e.log("EventSource failed trying to connect with error " + p.Message), s ? s() : (y.triggerHandler(u.onError, [p]), c && h.reconnect(e));
				return
			}
			a = t.setTimeout(function() {
				l === !1 && (e.log("EventSource timed out trying to connect"), e.log("EventSource readyState: " + e.eventSource.readyState), c || h.stop(e), c ? e.eventSource.readyState !== t.EventSource.CONNECTING && e.eventSource.readyState !== t.EventSource.OPEN && h.reconnect(e) : s && s())
			}, h.timeOut), e.eventSource.addEventListener("open", function() {
				e.log("EventSource connected"), a && t.clearTimeout(a), i.clearReconnectTimeout(e), l === !1 && (l = !0, o ? o() : f(e, r.connectionState.reconnecting, r.connectionState.connected) === !0 && y.triggerHandler(u.onReconnect))
			}, !1), e.eventSource.addEventListener("message", function(n) {
				n.data !== "initialized" && i.processMessages(e, t.JSON.parse(n.data))
			}, !1), e.eventSource.addEventListener("error", function(n) {
				if (this === e.eventSource) {
					if (!l) {
						s && s();
						return
					}
					e.log("EventSource readyState: " + e.eventSource.readyState), n.eventPhase === t.EventSource.CLOSED ? (e.log("EventSource reconnecting due to the server connection ending"), h.reconnect(e)) : (e.log("EventSource error"), y.triggerHandler(u.onError))
				}
			}, !1)
		},
		reconnect: function(n) {
			i.reconnect(n, this.name)
		},
		lostConnection: function(n) {
			this.reconnect(n)
		},
		send: function(n, t) {
			i.ajaxSend(n, t)
		},
		stop: function(n) {
			i.clearReconnectTimeout(n), n && n.eventSource && (n.log("EventSource calling close()"), n.eventSource.close(), n.eventSource = null, delete n.eventSource)
		},
		abort: function(n, t) {
			i.ajaxAbort(n, t)
		}
	}
}(window.jQuery, window), function(n, t) {
	"use strict";
	var r = n.signalR,
		f = n.signalR.events,
		e = n.signalR.changeState,
		i = r.transports._logic,
		u = function() {
			var u = null,
				f = 1e3,
				i = 0;
			return {
				prevent: function() {
					r._.ieVersion <= 8 && (i === 0 && (u = t.setInterval(function() {
						var t = n("<iframe style='position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;' src=''></iframe>");
						n("body").append(t), t.remove(), t = null
					}, f)), i++)
				},
				cancel: function() {
					i === 1 && t.clearInterval(u), i > 0 && i--
				}
			}
		}();
	r.transports.foreverFrame = {
		name: "foreverFrame",
		supportsKeepAlive: !0,
		timeOut: 3e3,
		start: function(r, f, e) {
			var s = this,
				h = i.foreverFrame.count += 1,
				c, o = n("<iframe data-signalr-connection-id='" + r.id + "' style='position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;' src=''></iframe>");
			if (t.EventSource) {
				e && (r.log("This browser supports SSE, skipping Forever Frame."), e());
				return
			}
			u.prevent(), c = i.getUrl(r, this.name), c += "&frameId=" + h, n("body").append(o), o.prop("src", c), i.foreverFrame.connections[h] = r, r.log("Binding to iframe's readystatechange event."), o.bind("readystatechange", function() {
				n.inArray(this.readyState, ["loaded", "complete"]) >= 0 && (r.log("Forever frame iframe readyState changed to " + this.readyState + ", reconnecting"), s.reconnect(r))
			}), r.frame = o[0], r.frameId = h, f && (r.onSuccess = f), t.setTimeout(function() {
				r.onSuccess && (r.log("Failed to connect using forever frame source, it timed out after " + s.timeOut + "ms."), s.stop(r), e && e())
			}, s.timeOut)
		},
		reconnect: function(n) {
			var r = this;
			t.setTimeout(function() {
				if (n.frame && i.ensureReconnectingState(n)) {
					var u = n.frame,
						t = i.getUrl(n, r.name, !0) + "&frameId=" + n.frameId;
					n.log("Updating iframe src to '" + t + "'."), u.src = t
				}
			}, n.reconnectDelay)
		},
		lostConnection: function(n) {
			this.reconnect(n)
		},
		send: function(n, t) {
			i.ajaxSend(n, t)
		},
		receive: function(t, r) {
			var u;
			i.processMessages(t, r), t.frameMessageCount = (t.frameMessageCount || 0) + 1, t.frameMessageCount > 50 && (t.frameMessageCount = 0, u = t.frame.contentWindow || t.frame.contentDocument, u && u.document && n("body", u.document).empty())
		},
		stop: function(t) {
			var r = null;
			if (u.cancel(), t.frame) {
				if (t.frame.stop) t.frame.stop();
				else try {
					r = t.frame.contentWindow || t.frame.contentDocument, r.document && r.document.execCommand && r.document.execCommand("Stop")
				} catch (f) {
					t.log("SignalR: Error occured when stopping foreverFrame transport. Message = " + f.message)
				}
				n(t.frame).remove(), delete i.foreverFrame.connections[t.frameId], t.frame = null, t.frameId = null, delete t.frame, delete t.frameId, t.log("Stopping forever frame")
			}
		},
		abort: function(n, t) {
			i.ajaxAbort(n, t)
		},
		getConnection: function(n) {
			return i.foreverFrame.connections[n]
		},
		started: function(t) {
			t.onSuccess ? (t.onSuccess(), t.onSuccess = null, delete t.onSuccess) : e(t, r.connectionState.reconnecting, r.connectionState.connected) === !0 && n(t).triggerHandler(f.onReconnect)
		}
	}
}(window.jQuery, window), function(n, t) {
	"use strict";
	var r = n.signalR,
		f = n.signalR.events,
		e = n.signalR.changeState,
		u = n.signalR.isDisconnecting,
		i = r.transports._logic;
	r.transports.longPolling = {
		name: "longPolling",
		supportsKeepAlive: !1,
		reconnectDelay: 3e3,
		init: function(n, r) {
			var e = this,
				f, o = function(i) {
					u(n) === !1 && (n.log("SignalR: Server ping failed because '" + i + "', re-trying ping."), t.setTimeout(f, e.reconnectDelay))
				};
			n.log("SignalR: Initializing long polling connection with server."), f = function() {
				i.pingServer(n, e.name).done(r).fail(o)
			}, f()
		},
		start: function(o, s) {
			var l = this,
				v = !1,
				y = function() {
					v || (v = !0, s(), o.log("Longpolling connected"))
				},
				c = 0,
				h = null,
				a = function(i) {
					t.clearTimeout(h), h = null, e(o, r.connectionState.reconnecting, r.connectionState.connected) === !0 && (o.log("Raising the reconnect event"), n(i).triggerHandler(f.onReconnect))
				},
				p = 36e5;
			o.pollXhr && (o.log("Polling xhr requests already exists, aborting."), o.stop()), l.init(o, function() {
				o.messageId = null, t.setTimeout(function() {
					(function e(s, v) {
						var g = s.messageId,
							k = g === null,
							w = !k,
							d = !v,
							b = i.getUrl(s, l.name, w, d);
						u(s) !== !0 && (o.log("Attempting to connect to '" + b + "' using longPolling."), s.pollXhr = n.ajax({
							url: b,
							global: !1,
							cache: !1,
							type: "GET",
							dataType: o.ajaxDataType,
							contentType: o.contentType,
							success: function(r) {
								var o = 0,
									f;
								(c = 0, h !== null && a(), y(), r && (f = i.maximizePersistentResponse(r)), i.processMessages(s, r), f && n.type(f.LongPollDelay) === "number" && (o = f.LongPollDelay), f && f.Disconnect) || u(s) !== !0 && (o > 0 ? t.setTimeout(function() {
									e(s, !1)
								}, o) : e(s, !1))
							},
							error: function(u, a) {
								if (t.clearTimeout(h), h = null, a === "abort") {
									o.log("Aborted xhr requst.");
									return
								}
								c++, o.state !== r.connectionState.reconnecting && (o.log("An error occurred using longPolling. Status = " + a + ". " + u.responseText), n(s).triggerHandler(f.onError, [u.responseText])), i.ensureReconnectingState(s), l.init(s, function() {
									e(s, !0)
								})
							}
						}), w && v === !0 && (h = t.setTimeout(function() {
							a(s)
						}, Math.min(1e3 * (Math.pow(2, c) - 1), p))))
					})(o), t.setTimeout(function() {
						y()
					}, 250)
				}, 250)
			})
		},
		lostConnection: function() {
			throw new Error("Lost Connection not handled for LongPolling");
		},
		send: function(n, t) {
			i.ajaxSend(n, t)
		},
		stop: function(n) {
			n.pollXhr && (n.pollXhr.abort(), n.pollXhr = null, delete n.pollXhr)
		},
		abort: function(n, t) {
			i.ajaxAbort(n, t)
		}
	}
}(window.jQuery), function(n, t, i) {
	function y(t, i) {
		var u, f;
		if (n.isArray(t)) {
			for (u = t.length - 1; u >= 0; u--) f = t[u], n.type(f) === "string" && r.transports[f] || (i.log("Invalid transport: " + f + ", removing it from the transports list."), t.splice(u, 1));
			t.length === 0 && (i.log("No transports remain within the specified transport array."), t = null)
		} else if (r.transports[t] || t === "auto") {
			if (t === "auto" && r._.ieVersion <= 8) return ["longPolling"]
		} else i.log("Invalid transport: " + t.toString() + "."), t = null;
		return t
	}
	function k(n) {
		return n === "http:" ? 80 : n === "https:" ? 443 : void 0
	}
	function l(n, t) {
		return t.match(/:\d+$/) ? t : t + ":" + k(n)
	}
	function w(t, i) {
		var u = this,
			r = [];
		u.tryBuffer = function(i) {
			return t.state === n.signalR.connectionState.connecting ? (r.push(i), !0) : !1
		}, u.drain = function() {
			if (t.state === n.signalR.connectionState.connected) while (r.length > 0) i(r.shift())
		}, u.clear = function() {
			r = []
		}
	}
	var f = {
		nojQuery: "jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",
		noTransportOnInit: "No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",
		errorOnNegotiate: "Error during negotiation request.",
		stoppedWhileLoading: "The connection was stopped during page load.",
		stoppedWhileNegotiating: "The connection was stopped during the negotiate request.",
		errorParsingNegotiateResponse: "Error parsing negotiate response.",
		errorDuringStartRequest: "Error during start request. Stopping the connection.",
		stoppedDuringStartRequest: "The connection was stopped during the start request.",
		errorParsingStartResponse: "Error parsing start response: '{0}'. Stopping the connection.",
		invalidStartResponse: "Invalid start response: '{0}'. Stopping the connection.",
		protocolIncompatible: "You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",
		sendFailed: "Send failed.",
		parseFailed: "Failed at parsing response: {0}",
		longPollFailed: "Long polling request failed.",
		eventSourceFailedToConnect: "EventSource failed to connect.",
		eventSourceError: "Error raised by EventSource",
		webSocketClosed: "WebSocket closed.",
		pingServerFailedInvalidResponse: "Invalid ping response when pinging server: '{0}'.",
		pingServerFailed: "Failed to ping server.",
		pingServerFailedStatusCode: "Failed to ping server.  Server responded with status code {0}, stopping the connection.",
		pingServerFailedParse: "Failed to parse ping server response, stopping the connection.",
		noConnectionTransport: "Connection is in an invalid state, there is no transport active.",
		webSocketsInvalidState: "The Web Socket transport is in an invalid state, transitioning into reconnecting.",
		reconnectTimeout: "Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",
		reconnectWindowTimeout: "The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection."
	};
	if (typeof n != "function") throw new Error(f.nojQuery);
	var r, a, s = t.document.readyState === "complete",
		e = n(t),
		c = "__Negotiate Aborted__",
		u = {
			onStart: "onStart",
			onStarting: "onStarting",
			onReceived: "onReceived",
			onError: "onError",
			onConnectionSlow: "onConnectionSlow",
			onReconnecting: "onReconnecting",
			onReconnect: "onReconnect",
			onStateChanged: "onStateChanged",
			onDisconnect: "onDisconnect"
		},
		b = function(n, i) {
			if (i !== !1) {
				var r;
				typeof t.console != "undefined" && (r = "[" + (new Date).toTimeString() + "] SignalR: " + n, t.console.debug ? t.console.debug(r) : t.console.log && t.console.log(r))
			}
		},
		o = function(t, i, r) {
			return i === t.state ? (t.state = r, n(t).triggerHandler(u.onStateChanged, [{
				oldState: i,
				newState: r
			}]), !0) : !1
		},
		v = function(n) {
			return n.state === r.connectionState.disconnected
		},
		h = function(n) {
			return n._.keepAliveData.activated && n.transport.supportsKeepAlive(n)
		},
		p = function(i) {
			var e, f;
			i._.configuredStopReconnectingTimeout || (f = function(t) {
				var i = r._.format(r.resources.reconnectTimeout, t.disconnectTimeout);
				t.log(i), n(t).triggerHandler(u.onError, [r._.error(i, "TimeoutException")]), t.stop(!1, !1)
			}, i.reconnecting(function() {
				var n = this;
				n.state === r.connectionState.reconnecting && (e = t.setTimeout(function() {
					f(n)
				}, n.disconnectTimeout))
			}), i.stateChanged(function(n) {
				n.oldState === r.connectionState.reconnecting && t.clearTimeout(e)
			}), i._.configuredStopReconnectingTimeout = !0)
		};
	r = function(n, t, i) {
		return new r.fn.init(n, t, i)
	}, r._ = {
		defaultContentType: "application/x-www-form-urlencoded; charset=UTF-8",
		ieVersion: function() {
			var i, n;
			return t.navigator.appName === "Microsoft Internet Explorer" && (n = /MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent), n && (i = t.parseFloat(n[1]))), i
		}(),
		error: function(n, t, i) {
			var r = new Error(n);
			return r.source = t, typeof i != "undefined" && (r.context = i), r
		},
		transportError: function(n, t, r, u) {
			var f = this.error(n, r, u);
			return f.transport = t ? t.name : i, f
		},
		format: function() {
			for (var t = arguments[0], n = 0; n < arguments.length - 1; n++) t = t.replace("{" + n + "}", arguments[n + 1]);
			return t
		},
		firefoxMajorVersion: function(n) {
			var t = n.match(/Firefox\/(\d+)/);
			return !t || !t.length || t.length < 2 ? 0 : parseInt(t[1], 10)
		},
		configurePingInterval: function(i) {
			var f = i._.config,
				e = function(t) {
					n(i).triggerHandler(u.onError, [t])
				};
			f && !i._.pingIntervalId && f.pingInterval && (i._.pingIntervalId = t.setInterval(function() {
				r.transports._logic.pingServer(i).fail(e)
			}, f.pingInterval))
		}
	}, r.events = u, r.resources = f, r.ajaxDefaults = {
		processData: !0,
		timeout: null,
		async: !0,
		global: !1,
		cache: !1
	}, r.changeState = o, r.isDisconnecting = v, r.connectionState = {
		connecting: 0,
		connected: 1,
		reconnecting: 2,
		disconnected: 4
	}, r.hub = {
		start: function() {
			throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.");
		}
	}, e.load(function() {
		s = !0
	}), r.fn = r.prototype = {
		init: function(t, i, r) {
			var f = n(this);
			this.url = t, this.qs = i, this.lastError = null, this._ = {
				keepAliveData: {},
				connectingMessageBuffer: new w(this, function(n) {
					f.triggerHandler(u.onReceived, [n])
				}),
				onFailedTimeoutHandle: null,
				lastMessageAt: +new Date,
				lastActiveAt: +new Date,
				beatInterval: 5e3,
				beatHandle: null,
				totalTransportConnectTimeout: 0
			}, typeof r == "boolean" && (this.logging = r)
		},
		_parseResponse: function(n) {
			var t = this;
			return n ? typeof n == "string" ? t.json.parse(n) : n : n
		},
		_originalJson: t.JSON,
		json: t.JSON,
		isCrossDomain: function(i, r) {
			var u;
			return (i = n.trim(i), r = r || t.location, i.indexOf("http") !== 0) ? !1 : (u = t.document.createElement("a"), u.href = i, u.protocol + l(u.protocol, u.host) !== r.protocol + l(r.protocol, r.host))
		},
		ajaxDataType: "text",
		contentType: "application/json; charset=UTF-8",
		logging: !1,
		state: r.connectionState.disconnected,
		clientProtocol: "1.4",
		reconnectDelay: 2e3,
		transportConnectTimeout: 0,
		disconnectTimeout: 3e4,
		reconnectWindow: 3e4,
		keepAliveWarnAt: 2 / 3,
		start: function(i, l) {
			var a = this,
				v = {
					pingInterval: 3e5,
					waitForPageLoad: !0,
					transport: "auto",
					jsonp: !1
				},
				g, w = a._deferral || n.Deferred(),
				b = t.document.createElement("a"),
				k, d;
			if (a.lastError = null, a._deferral = w, !a.json) throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");
			if (n.type(i) === "function" ? l = i : n.type(i) === "object" && (n.extend(v, i), n.type(v.callback) === "function" && (l = v.callback)), v.transport = y(v.transport, a), !v.transport) throw new Error("SignalR: Invalid transport(s) specified, aborting start.");
			return (a._.config = v, !s && v.waitForPageLoad === !0) ? (a._.deferredStartHandler = function() {
				a.start(i, l)
			}, e.bind("load", a._.deferredStartHandler), w.promise()) : a.state === r.connectionState.connecting ? w.promise() : o(a, r.connectionState.disconnected, r.connectionState.connecting) === !1 ? (w.resolve(a), w.promise()) : (p(a), b.href = a.url, b.protocol && b.protocol !== ":" ? (a.protocol = b.protocol, a.host = b.host) : (a.protocol = t.document.location.protocol, a.host = b.host || t.document.location.host), a.baseUrl = a.protocol + "//" + a.host, a.wsProtocol = a.protocol === "https:" ? "wss://" : "ws://", v.transport === "auto" && v.jsonp === !0 && (v.transport = "longPolling"), a.url.indexOf("//") === 0 && (a.url = t.location.protocol + a.url, a.log("Protocol relative URL detected, normalizing it to '" + a.url + "'.")), this.isCrossDomain(a.url) && (a.log("Auto detected cross domain url."), v.transport === "auto" && (v.transport = ["webSockets", "serverSentEvents", "longPolling"]), typeof v.withCredentials == "undefined" && (v.withCredentials = !0), v.jsonp || (v.jsonp = !n.support.cors, v.jsonp && a.log("Using jsonp because this browser doesn't support CORS.")), a.contentType = r._.defaultContentType), a.withCredentials = v.withCredentials, a.ajaxDataType = v.jsonp ? "jsonp" : "text", n(a).bind(u.onStart, function() {
				n.type(l) === "function" && l.call(a), w.resolve(a)
			}), g = function(i, s) {
				var y = r._.error(f.noTransportOnInit);
				if (s = s || 0, s >= i.length) {
					n(a).triggerHandler(u.onError, [y]), w.reject(y), a.stop();
					return
				}
				if (a.state !== r.connectionState.disconnected) {
					var p = i[s],
						c = r.transports[p],
						l = !1,
						v = function() {
							l || (l = !0, t.clearTimeout(a._.onFailedTimeoutHandle), c.stop(a), g(i, s + 1))
						};
					a.transport = c;
					try {
						a._.onFailedTimeoutHandle = t.setTimeout(function() {
							a.log(c.name + " timed out when trying to connect."), v()
						}, a._.totalTransportConnectTimeout), c.start(a, function() {
							var i = function() {
									var f = r._.firefoxMajorVersion(t.navigator.userAgent) >= 11,
										i = !! a.withCredentials && f;
									a.log("The start request succeeded. Transitioning to the connected state."), h(a) && r.transports._logic.monitorKeepAlive(a), r.transports._logic.startHeartbeat(a), r._.configurePingInterval(a), o(a, r.connectionState.connecting, r.connectionState.connected) || a.log("WARNING! The connection was not in the connecting state."), a._.connectingMessageBuffer.drain(), n(a).triggerHandler(u.onStart), e.bind("unload", function() {
										a.log("Window unloading, stopping the connection."), a.stop(i)
									}), f && e.bind("beforeunload", function() {
										t.setTimeout(function() {
											a.stop(i)
										}, 0)
									})
								};
							if (!l) {
								if (l = !0, t.clearTimeout(a._.onFailedTimeoutHandle), a.state === r.connectionState.disconnected) return;
								a.log(c.name + " transport selected. Initiating start request."), r.transports._logic.ajaxStart(a, i)
							}
						}, v)
					} catch (b) {
						a.log(c.name + " transport threw '" + b.message + "' when attempting to start."), v()
					}
				}
			}, k = a.url + "/negotiate", d = function(t, i) {
				var e = r._.error(f.errorOnNegotiate, t, i._.negotiateRequest);
				n(i).triggerHandler(u.onError, e), w.reject(e), i.stop()
			}, n(a).triggerHandler(u.onStarting), k = r.transports._logic.prepareQueryString(a, k), a.log("Negotiating with '" + k + "'."), a._.negotiateRequest = r.transports._logic.ajax(a, {
				url: k,
				error: function(n, t) {
					t !== c ? d(n, a) : w.reject(r._.error(f.stoppedWhileNegotiating, null, a._.negotiateRequest))
				},
				success: function(t) {
					var i, e, h, o = [],
						s = [];
					try {
						i = a._parseResponse(t)
					} catch (c) {
						d(r._.error(f.errorParsingNegotiateResponse, c), a);
						return
					}
					if (e = a._.keepAliveData, a.appRelativeUrl = i.Url, a.id = i.ConnectionId, a.token = i.ConnectionToken, a.webSocketServerUrl = i.WebSocketServerUrl, a._.pollTimeout = i.ConnectionTimeout * 1e3 + 1e4, a.disconnectTimeout = i.DisconnectTimeout * 1e3, a._.totalTransportConnectTimeout = a.transportConnectTimeout + i.TransportConnectTimeout * 1e3, i.KeepAliveTimeout ? (e.activated = !0, e.timeout = i.KeepAliveTimeout * 1e3, e.timeoutWarning = e.timeout * a.keepAliveWarnAt, a._.beatInterval = (e.timeout - e.timeoutWarning) / 3) : e.activated = !1, a.reconnectWindow = a.disconnectTimeout + (e.timeout || 0), !i.ProtocolVersion || i.ProtocolVersion !== a.clientProtocol) {
						h = r._.error(r._.format(f.protocolIncompatible, a.clientProtocol, i.ProtocolVersion)), n(a).triggerHandler(u.onError, [h]), w.reject(h);
						return
					}
					n.each(r.transports, function(n) {
						if (n.indexOf("_") === 0 || n === "webSockets" && !i.TryWebSockets) return !0;
						s.push(n)
					}), n.isArray(v.transport) ? n.each(v.transport, function(t, i) {
						n.inArray(i, s) >= 0 && o.push(i)
					}) : v.transport === "auto" ? o = s : n.inArray(v.transport, s) >= 0 && o.push(v.transport), g(o)
				}
			}), w.promise())
		},
		starting: function(t) {
			var i = this;
			return n(i).bind(u.onStarting, function() {
				t.call(i)
			}), i
		},
		send: function(n) {
			var t = this;
			if (t.state === r.connectionState.disconnected) throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");
			if (t.state === r.connectionState.connecting) throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");
			return t.transport.send(t, n), t
		},
		received: function(t) {
			var i = this;
			return n(i).bind(u.onReceived, function(n, r) {
				t.call(i, r)
			}), i
		},
		stateChanged: function(t) {
			var i = this;
			return n(i).bind(u.onStateChanged, function(n, r) {
				t.call(i, r)
			}), i
		},
		error: function(t) {
			var i = this;
			return n(i).bind(u.onError, function(n, r, u) {
				i.lastError = r, t.call(i, r, u)
			}), i
		},
		disconnected: function(t) {
			var i = this;
			return n(i).bind(u.onDisconnect, function() {
				t.call(i)
			}), i
		},
		connectionSlow: function(t) {
			var i = this;
			return n(i).bind(u.onConnectionSlow, function() {
				t.call(i)
			}), i
		},
		reconnecting: function(t) {
			var i = this;
			return n(i).bind(u.onReconnecting, function() {
				t.call(i)
			}), i
		},
		reconnected: function(t) {
			var i = this;
			return n(i).bind(u.onReconnect, function() {
				t.call(i)
			}), i
		},
		stop: function(i, l) {
			var a = this,
				v = a._deferral;
			if (a._.deferredStartHandler && e.unbind("load", a._.deferredStartHandler), delete a._.config, delete a._.deferredStartHandler, !s && (!a._.config || a._.config.waitForPageLoad === !0)) {
				a.log("Stopping connection prior to negotiate."), v && v.reject(r._.error(f.stoppedWhileLoading));
				return
			}
			if (a.state !== r.connectionState.disconnected) return a.log("Stopping connection."), o(a, a.state, r.connectionState.disconnected), t.clearTimeout(a._.beatHandle), t.clearTimeout(a._.onFailedTimeoutHandle), t.clearInterval(a._.pingIntervalId), a.transport && (a.transport.stop(a), l !== !1 && a.transport.abort(a, i), h(a) && r.transports._logic.stopMonitoringKeepAlive(a), a.transport = null), a._.negotiateRequest && (a._.negotiateRequest.abort(c), delete a._.negotiateRequest), r.transports._logic.tryAbortStartRequest(a), n(a).triggerHandler(u.onDisconnect), delete a._deferral, delete a.messageId, delete a.groupsToken, delete a.id, delete a._.pingIntervalId, delete a._.lastMessageAt, delete a._.lastActiveAt, a._.connectingMessageBuffer.clear(), a
		},
		log: function(n) {
			b(n, this.logging)
		}
	}, r.fn.init.prototype = r.fn, r.noConflict = function() {
		return n.connection === r && (n.connection = a), r
	}, n.connection && (a = n.connection), n.connection = n.signalR = r
}(window.jQuery, window), function(n, t) {
	function o(n) {
		n._.keepAliveData.monitoring && s(n), r.markActive(n) && (n._.beatHandle = t.setTimeout(function() {
			o(n)
		}, n._.beatInterval))
	}
	function s(t) {
		var r = t._.keepAliveData,
			f;
		t.state === i.connectionState.connected && (f = +new Date - t._.lastMessageAt, f >= r.timeout ? (t.log("Keep alive timed out.  Notifying transport that connection has been lost."), t.transport.lostConnection(t)) : f >= r.timeoutWarning ? r.userNotified || (t.log("Keep alive has been missed, connection may be dead/slow."), n(t).triggerHandler(u.onConnectionSlow), r.userNotified = !0) : r.userNotified = !1)
	}
	function f(n, t) {
		var i = n.url + t;
		return n.transport && (i += "?transport=" + n.transport.name), r.prepareQueryString(n, i)
	}
	var i = n.signalR,
		u = n.signalR.events,
		h = n.signalR.changeState,
		e = "__Start Aborted__",
		r;
	i.transports = {}, r = i.transports._logic = {
		ajax: function(t, i) {
			return n.ajax(n.extend(!0, {}, n.signalR.ajaxDefaults, {
				type: "GET",
				data: {},
				xhrFields: {
					withCredentials: t.withCredentials
				},
				contentType: t.contentType,
				dataType: t.ajaxDataType
			}, i))
		},
		pingServer: function(t) {
			var e, f, u = n.Deferred();
			return t.transport ? (e = t.url + "/ping", e = r.addQs(e, t.qs), f = r.ajax(t, {
				url: e,
				success: function(n) {
					var r;
					try {
						r = t._parseResponse(n)
					} catch (e) {
						u.reject(i._.transportError(i.resources.pingServerFailedParse, t.transport, e, f)), t.stop();
						return
					}
					r.Response === "pong" ? u.resolve() : u.reject(i._.transportError(i._.format(i.resources.pingServerFailedInvalidResponse, n), t.transport, null, f))
				},
				error: function(n) {
					n.status === 401 || n.status === 403 ? (u.reject(i._.transportError(i._.format(i.resources.pingServerFailedStatusCode, n.status), t.transport, n, f)), t.stop()) : u.reject(i._.transportError(i.resources.pingServerFailed, t.transport, n, f))
				}
			})) : u.reject(i._.transportError(i.resources.noConnectionTransport, t.transport)), u.promise()
		},
		prepareQueryString: function(n, i) {
			var u;
			return u = r.addQs(i, "clientProtocol=" + n.clientProtocol), u = r.addQs(u, n.qs), n.token && (u += "&connectionToken=" + t.encodeURIComponent(n.token)), n.data && (u += "&connectionData=" + t.encodeURIComponent(n.data)), u
		},
		addQs: function(t, i) {
			var u = t.indexOf("?") !== -1 ? "&" : "?",
				r;
			if (!i) return t;
			if (typeof i == "object") return t + u + n.param(i);
			if (typeof i == "string") return r = i.charAt(0), (r === "?" || r === "&") && (u = ""), t + u + i;
			throw new Error("Query string property must be either a string or object.");
		},
		getUrl: function(n, i, u, f) {
			var s = i === "webSockets" ? "" : n.baseUrl,
				e = s + n.appRelativeUrl,
				o = "transport=" + i;
			return n.groupsToken && (o += "&groupsToken=" + t.encodeURIComponent(n.groupsToken)), u ? (e += f ? "/poll" : "/reconnect", n.messageId && (o += "&messageId=" + t.encodeURIComponent(n.messageId))) : e += "/connect", e += "?" + o, e = r.prepareQueryString(n, e), e + ("&tid=" + Math.floor(Math.random() * 11))
		},
		maximizePersistentResponse: function(n) {
			return {
				MessageId: n.C,
				Messages: n.M,
				Initialized: typeof n.S != "undefined" ? !0 : !1,
				Disconnect: typeof n.D != "undefined" ? !0 : !1,
				ShouldReconnect: typeof n.T != "undefined" ? !0 : !1,
				LongPollDelay: n.L,
				GroupsToken: n.G
			}
		},
		updateGroups: function(n, t) {
			t && (n.groupsToken = t)
		},
		stringifySend: function(n, t) {
			return typeof t == "string" || typeof t == "undefined" || t === null ? t : n.json.stringify(t)
		},
		ajaxSend: function(t, e) {
			var h = r.stringifySend(t, e),
				c = f(t, "/send"),
				o, s = function(t, r) {
					n(r).triggerHandler(u.onError, [i._.transportError(i.resources.sendFailed, r.transport, t, o), e])
				};
			return o = r.ajax(t, {
				url: c,
				type: t.ajaxDataType === "jsonp" ? "GET" : "POST",
				contentType: i._.defaultContentType,
				data: {
					data: h
				},
				success: function(n) {
					var i;
					if (n) {
						try {
							i = t._parseResponse(n)
						} catch (u) {
							s(u, t), t.stop();
							return
						}
						r.triggerReceived(t, i)
					}
				},
				error: function(n, i) {
					i !== "abort" && i !== "parsererror" && s(n, t)
				}
			})
		},
		ajaxAbort: function(n, t) {
			if (typeof n.transport != "undefined") {
				t = typeof t == "undefined" ? !0 : t;
				var i = f(n, "/abort");
				r.ajax(n, {
					url: i,
					async: t,
					timeout: 1e3,
					type: "POST"
				}), n.log("Fired ajax abort async = " + t + ".")
			}
		},
		ajaxStart: function(t, o) {
			var h = function(n) {
					var i = t._deferral;
					i && i.reject(n)
				},
				s = function(i) {
					t.log("The start request failed. Stopping the connection."), n(t).triggerHandler(u.onError, [i]), h(i), t.stop()
				};
			t._.startRequest = r.ajax(t, {
				url: f(t, "/start"),
				success: function(n, r, u) {
					var f;
					try {
						f = t._parseResponse(n)
					} catch (e) {
						s(i._.error(i._.format(i.resources.errorParsingStartResponse, n), e, u));
						return
					}
					f.Response === "started" ? o() : s(i._.error(i._.format(i.resources.invalidStartResponse, n), null, u))
				},
				error: function(n, r, u) {
					r !== e ? s(i._.error(i.resources.errorDuringStartRequest, u, n)) : (t.log("The start request aborted because connection.stop() was called."), h(i._.error(i.resources.stoppedDuringStartRequest, null, n)))
				}
			})
		},
		tryAbortStartRequest: function(n) {
			n._.startRequest && (n._.startRequest.abort(e), delete n._.startRequest)
		},
		tryInitialize: function(n, t) {
			n.Initialized && t()
		},
		triggerReceived: function(t, i) {
			t._.connectingMessageBuffer.tryBuffer(i) || n(t).triggerHandler(u.onReceived, [i])
		},
		processMessages: function(t, i, u) {
			var f;
			r.markLastMessage(t), i && (f = r.maximizePersistentResponse(i), r.updateGroups(t, f.GroupsToken), f.MessageId && (t.messageId = f.MessageId), f.Messages && (n.each(f.Messages, function(n, i) {
				r.triggerReceived(t, i)
			}), r.tryInitialize(f, u)))
		},
		monitorKeepAlive: function(t) {
			var i = t._.keepAliveData;
			i.monitoring ? t.log("Tried to monitor keep alive but it's already being monitored.") : (i.monitoring = !0, r.markLastMessage(t), t._.keepAliveData.reconnectKeepAliveUpdate = function() {
				r.markLastMessage(t)
			}, n(t).bind(u.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t.log("Now monitoring keep alive with a warning timeout of " + i.timeoutWarning + " and a connection lost timeout of " + i.timeout + "."))
		},
		stopMonitoringKeepAlive: function(t) {
			var i = t._.keepAliveData;
			i.monitoring && (i.monitoring = !1, n(t).unbind(u.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t._.keepAliveData = {}, t.log("Stopping the monitoring of the keep alive."))
		},
		startHeartbeat: function(n) {
			n._.lastActiveAt = +new Date, o(n)
		},
		markLastMessage: function(n) {
			n._.lastMessageAt = +new Date
		},
		markActive: function(n) {
			return r.verifyLastActive(n) ? (n._.lastActiveAt = +new Date, !0) : !1
		},
		isConnectedOrReconnecting: function(n) {
			return n.state === i.connectionState.connected || n.state === i.connectionState.reconnecting
		},
		ensureReconnectingState: function(t) {
			return h(t, i.connectionState.connected, i.connectionState.reconnecting) === !0 && n(t).triggerHandler(u.onReconnecting), t.state === i.connectionState.reconnecting
		},
		clearReconnectTimeout: function(n) {
			n && n._.reconnectTimeout && (t.clearTimeout(n._.reconnectTimeout), delete n._.reconnectTimeout)
		},
		verifyLastActive: function(t) {
			if (+new Date - t._.lastActiveAt >= t.reconnectWindow) {
				var r = i._.format(i.resources.reconnectWindowTimeout, new Date(t._.lastActiveAt), t.reconnectWindow);
				return t.log(r), n(t).triggerHandler(u.onError, [i._.error(r, "TimeoutException")]), t.stop(!1, !1), !1
			}
			return !0
		},
		reconnect: function(n, u) {
			var f = i.transports[u];
			if (r.isConnectedOrReconnecting(n) && !n._.reconnectTimeout) {
				if (!r.verifyLastActive(n)) return;
				n._.reconnectTimeout = t.setTimeout(function() {
					r.verifyLastActive(n) && (f.stop(n), r.ensureReconnectingState(n) && (n.log(u + " reconnecting."), f.start(n)))
				}, n.reconnectDelay)
			}
		},
		handleParseFailure: function(t, r, f, e, o) {
			t.state === i.connectionState.connecting ? (t.log("Failed to parse server response while attempting to connect."), e()) : (n(t).triggerHandler(u.onError, [i._.transportError(i._.format(i.resources.parseFailed, r), t.transport, f, o)]), t.stop())
		},
		foreverFrame: {
			count: 0,
			connections: {}
		}
	}
}(window.jQuery, window), function(n, t) {
	var r = n.signalR,
		u = n.signalR.events,
		f = n.signalR.changeState,
		i = r.transports._logic;
	r.transports.webSockets = {
		name: "webSockets",
		supportsKeepAlive: function() {
			return !0
		},
		send: function(t, f) {
			var e = i.stringifySend(t, f);
			try {
				t.socket.send(e)
			} catch (o) {
				n(t).triggerHandler(u.onError, [r._.transportError(r.resources.webSocketsInvalidState, t.transport, o, t.socket), f])
			}
		},
		start: function(e, o, s) {
			var h, a = !1,
				l = this,
				c = !o,
				v = n(e);
			if (!t.WebSocket) {
				s();
				return
			}
			e.socket || (h = e.webSocketServerUrl ? e.webSocketServerUrl : e.wsProtocol + e.host, h += i.getUrl(e, this.name, c), e.log("Connecting to websocket endpoint '" + h + "'."), e.socket = new t.WebSocket(h), e.socket.onopen = function() {
				a = !0, e.log("Websocket opened."), i.clearReconnectTimeout(e), f(e, r.connectionState.reconnecting, r.connectionState.connected) === !0 && v.triggerHandler(u.onReconnect)
			}, e.socket.onclose = function(t) {
				if (this === e.socket) {
					if (a) typeof t.wasClean != "undefined" && t.wasClean === !1 ? (n(e).triggerHandler(u.onError, [r._.transportError(r.resources.webSocketClosed, e.transport, t)]), e.log("Unclean disconnect from websocket: " + t.reason || "[no reason given].")) : e.log("Websocket closed.");
					else {
						s ? s() : c && l.reconnect(e);
						return
					}
					l.reconnect(e)
				}
			}, e.socket.onmessage = function(t) {
				var r;
				try {
					r = e._parseResponse(t.data)
				} catch (u) {
					i.handleParseFailure(e, t.data, u, s, t);
					return
				}
				r && (n.isEmptyObject(r) || r.M ? i.processMessages(e, r, o) : i.triggerReceived(e, r))
			})
		},
		reconnect: function(n) {
			i.reconnect(n, this.name)
		},
		lostConnection: function(n) {
			this.reconnect(n)
		},
		stop: function(n) {
			i.clearReconnectTimeout(n), n.socket && (n.log("Closing the Websocket."), n.socket.close(), n.socket = null)
		},
		abort: function(n, t) {
			i.ajaxAbort(n, t)
		}
	}
}(window.jQuery, window), function(n, t) {
	var r = n.signalR,
		u = n.signalR.events,
		e = n.signalR.changeState,
		i = r.transports._logic,
		f = function(n) {
			t.clearTimeout(n._.reconnectAttemptTimeoutHandle), delete n._.reconnectAttemptTimeoutHandle
		};
	r.transports.serverSentEvents = {
		name: "serverSentEvents",
		supportsKeepAlive: function() {
			return !0
		},
		timeOut: 3e3,
		start: function(o, s, h) {
			var l = this,
				c = !1,
				y = n(o),
				v = !s,
				a;
			if (o.eventSource && (o.log("The connection already has an event source. Stopping it."), o.stop()), !t.EventSource) {
				h && (o.log("This browser doesn't support SSE."), h());
				return
			}
			a = i.getUrl(o, this.name, v);
			try {
				o.log("Attempting to connect to SSE endpoint '" + a + "'."), o.eventSource = new t.EventSource(a, {
					withCredentials: o.withCredentials
				})
			} catch (p) {
				o.log("EventSource failed trying to connect with error " + p.Message + "."), h ? h() : (y.triggerHandler(u.onError, [r._.transportError(r.resources.eventSourceFailedToConnect, o.transport, p)]), v && l.reconnect(o));
				return
			}
			v && (o._.reconnectAttemptTimeoutHandle = t.setTimeout(function() {
				c === !1 && o.eventSource.readyState !== t.EventSource.OPEN && l.reconnect(o)
			}, l.timeOut)), o.eventSource.addEventListener("open", function() {
				o.log("EventSource connected."), f(o), i.clearReconnectTimeout(o), c === !1 && (c = !0, e(o, r.connectionState.reconnecting, r.connectionState.connected) === !0 && y.triggerHandler(u.onReconnect))
			}, !1), o.eventSource.addEventListener("message", function(n) {
				var t;
				if (n.data !== "initialized") {
					try {
						t = o._parseResponse(n.data)
					} catch (r) {
						i.handleParseFailure(o, n.data, r, h, n);
						return
					}
					i.processMessages(o, t, s)
				}
			}, !1), o.eventSource.addEventListener("error", function(n) {
				if (this === o.eventSource) {
					if (!c) {
						h && h();
						return
					}
					o.log("EventSource readyState: " + o.eventSource.readyState + "."), n.eventPhase === t.EventSource.CLOSED ? (o.log("EventSource reconnecting due to the server connection ending."), l.reconnect(o)) : (o.log("EventSource error."), y.triggerHandler(u.onError, [r._.transportError(r.resources.eventSourceError, o.transport, n)]))
				}
			}, !1)
		},
		reconnect: function(n) {
			i.reconnect(n, this.name)
		},
		lostConnection: function(n) {
			this.reconnect(n)
		},
		send: function(n, t) {
			i.ajaxSend(n, t)
		},
		stop: function(n) {
			f(n), i.clearReconnectTimeout(n), n && n.eventSource && (n.log("EventSource calling close()."), n.eventSource.close(), n.eventSource = null, delete n.eventSource)
		},
		abort: function(n, t) {
			i.ajaxAbort(n, t)
		}
	}
}(window.jQuery, window), function(n, t) {
	var r = n.signalR,
		e = n.signalR.events,
		o = n.signalR.changeState,
		i = r.transports._logic,
		u = function() {
			var n = t.document.createElement("iframe");
			return n.setAttribute("style", "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"), n
		},
		f = function() {
			var i = null,
				f = 1e3,
				n = 0;
			return {
				prevent: function() {
					r._.ieVersion <= 8 && (n === 0 && (i = t.setInterval(function() {
						var n = u();
						t.document.body.appendChild(n), t.document.body.removeChild(n), n = null
					}, f)), n++)
				},
				cancel: function() {
					n === 1 && t.clearInterval(i), n > 0 && n--
				}
			}
		}();
	r.transports.foreverFrame = {
		name: "foreverFrame",
		supportsKeepAlive: function() {
			return !0
		},
		iframeClearThreshold: 50,
		start: function(n, r, e) {
			var l = this,
				h = i.foreverFrame.count += 1,
				s, o = u(),
				c = function() {
					n.log("Forever frame iframe finished loading and is no longer receiving messages."), l.reconnect(n)
				};
			if (t.EventSource) {
				e && (n.log("This browser supports SSE, skipping Forever Frame."), e());
				return
			}
			o.setAttribute("data-signalr-connection-id", n.id), f.prevent(), s = i.getUrl(n, this.name), s += "&frameId=" + h, t.document.body.appendChild(o), n.log("Binding to iframe's load event."), o.addEventListener ? o.addEventListener("load", c, !1) : o.attachEvent && o.attachEvent("onload", c), o.src = s, i.foreverFrame.connections[h] = n, n.frame = o, n.frameId = h, r && (n.onSuccess = function() {
				n.log("Iframe transport started."), r()
			})
		},
		reconnect: function(n) {
			var r = this;
			i.isConnectedOrReconnecting(n) && i.verifyLastActive(n) && t.setTimeout(function() {
				if (i.verifyLastActive(n) && n.frame && i.ensureReconnectingState(n)) {
					var u = n.frame,
						t = i.getUrl(n, r.name, !0) + "&frameId=" + n.frameId;
					n.log("Updating iframe src to '" + t + "'."), u.src = t
				}
			}, n.reconnectDelay)
		},
		lostConnection: function(n) {
			this.reconnect(n)
		},
		send: function(n, t) {
			i.ajaxSend(n, t)
		},
		receive: function(t, u) {
			var f, e, o;
			if (t.json !== t._originalJson && (u = t._originalJson.stringify(u)), o = t._parseResponse(u), i.processMessages(t, o, t.onSuccess), t.state === n.signalR.connectionState.connected && (t.frameMessageCount = (t.frameMessageCount || 0) + 1, t.frameMessageCount > r.transports.foreverFrame.iframeClearThreshold && (t.frameMessageCount = 0, f = t.frame.contentWindow || t.frame.contentDocument, f && f.document && f.document.body))) for (e = f.document.body; e.firstChild;) e.removeChild(e.firstChild)
		},
		stop: function(n) {
			var r = null;
			if (f.cancel(), n.frame) {
				if (n.frame.stop) n.frame.stop();
				else try {
					r = n.frame.contentWindow || n.frame.contentDocument, r.document && r.document.execCommand && r.document.execCommand("Stop")
				} catch (u) {
					n.log("Error occured when stopping foreverFrame transport. Message = " + u.message + ".")
				}
				n.frame.parentNode === t.document.body && t.document.body.removeChild(n.frame), delete i.foreverFrame.connections[n.frameId], n.frame = null, n.frameId = null, delete n.frame, delete n.frameId, delete n.onSuccess, delete n.frameMessageCount, n.log("Stopping forever frame.")
			}
		},
		abort: function(n, t) {
			i.ajaxAbort(n, t)
		},
		getConnection: function(n) {
			return i.foreverFrame.connections[n]
		},
		started: function(t) {
			o(t, r.connectionState.reconnecting, r.connectionState.connected) === !0 && n(t).triggerHandler(e.onReconnect)
		}
	}
}(window.jQuery, window), function(n, t) {
	var r = n.signalR,
		f = n.signalR.events,
		e = n.signalR.changeState,
		u = n.signalR.isDisconnecting,
		i = r.transports._logic;
	r.transports.longPolling = {
		name: "longPolling",
		supportsKeepAlive: function() {
			return !1
		},
		reconnectDelay: 3e3,
		start: function(o, s, h) {
			var v = this,
				y = function() {
					y = n.noop, h = null, o.log("LongPolling connected."), s()
				},
				p = function() {
					return h ? (h(), h = null, o.log("LongPolling failed to connect."), !0) : !1
				},
				c = o._,
				l = 0,
				a = function(i) {
					t.clearTimeout(c.reconnectTimeoutId), c.reconnectTimeoutId = null, e(i, r.connectionState.reconnecting, r.connectionState.connected) === !0 && (i.log("Raising the reconnect event"), n(i).triggerHandler(f.onReconnect))
				},
				w = 36e5;
			o.pollXhr && (o.log("Polling xhr requests already exists, aborting."), o.stop()), o.messageId = null, c.reconnectTimeoutId = null, c.pollTimeoutId = t.setTimeout(function() {
				(function e(s, h) {
					var nt = s.messageId,
						d = nt === null,
						b = !d,
						g = !h,
						k = i.getUrl(s, v.name, b, g);
					u(s) !== !0 && (o.log("Opening long polling request to '" + k + "'."), s.pollXhr = i.ajax(o, {
						xhrFields: {
							onprogress: function() {
								i.markLastMessage(o)
							}
						},
						url: k,
						timeout: o._.pollTimeout,
						success: function(r) {
							var h, w = 0,
								f, v;
							o.log("Long poll complete."), l = 0;
							try {
								h = o._parseResponse(r)
							} catch (b) {
								i.handleParseFailure(s, r, b, p, s.pollXhr);
								return
							}(c.reconnectTimeoutId !== null && a(s), h && (f = i.maximizePersistentResponse(h)), i.processMessages(s, h, y), f && n.type(f.LongPollDelay) === "number" && (w = f.LongPollDelay), f && f.Disconnect) || u(s) !== !0 && (v = f && f.ShouldReconnect, !v || i.ensureReconnectingState(s)) && (w > 0 ? c.pollTimeoutId = t.setTimeout(function() {
								e(s, v)
							}, w) : e(s, v))
						},
						error: function(u, h) {
							if (t.clearTimeout(c.reconnectTimeoutId), c.reconnectTimeoutId = null, h === "abort") {
								o.log("Aborted xhr request.");
								return
							}
							if (!p()) {
								if (l++, o.state !== r.connectionState.reconnecting && (o.log("An error occurred using longPolling. Status = " + h + ".  Response = " + u.responseText + "."), n(s).triggerHandler(f.onError, [r._.transportError(r.resources.longPollFailed, o.transport, u, s.pollXhr)])), (o.state === r.connectionState.connected || o.state === r.connectionState.reconnecting) && !i.verifyLastActive(o)) return;
								if (!i.ensureReconnectingState(s)) return;
								c.pollTimeoutId = t.setTimeout(function() {
									e(s, !0)
								}, v.reconnectDelay)
							}
						}
					}), b && h === !0 && (c.reconnectTimeoutId = t.setTimeout(function() {
						a(s)
					}, Math.min(1e3 * (Math.pow(2, l) - 1), w))))
				})(o)
			}, 250)
		},
		lostConnection: function(n) {
			n.pollXhr && n.pollXhr.abort("lostConnection")
		},
		send: function(n, t) {
			i.ajaxSend(n, t)
		},
		stop: function(n) {
			t.clearTimeout(n._.pollTimeoutId), t.clearTimeout(n._.reconnectTimeoutId), delete n._.pollTimeoutId, delete n._.reconnectTimeoutId, n.pollXhr && (n.pollXhr.abort(), n.pollXhr = null, delete n.pollXhr)
		},
		abort: function(n, t) {
			i.ajaxAbort(n, t)
		}
	}
}(window.jQuery, window), function(n) {
	function r(n) {
		return n + e
	}
	function h(n, t, i) {
		for (var f = n.length, u = [], r = 0; r < f; r += 1) n.hasOwnProperty(r) && (u[r] = t.call(i, n[r], r, n));
		return u
	}
	function s(t) {
		return n.isFunction(t) ? null : n.type(t) === "undefined" ? null : t
	}
	function u(n) {
		for (var t in n) if (n.hasOwnProperty(t)) return !0;
		return !1
	}
	function f(n, t) {
		var r = n._.invocationCallbacks,
			i, f;
		u(r) && n.log("Clearing hub invocation callbacks with error: " + t + "."), n._.invocationCallbackId = 0, delete n._.invocationCallbacks, n._.invocationCallbacks = {};
		for (f in r) i = r[f], i.method.call(i.scope, {
			E: t
		})
	}
	function i(n, t) {
		return new i.fn.init(n, t)
	}
	function t(i, r) {
		var u = {
			qs: null,
			logging: !1,
			useDefaultPath: !0
		};
		return n.extend(u, r), (!i || u.useDefaultPath) && (i = (i || "") + "/signalr"), new t.fn.init(i, u)
	}
	var e = ".hubProxy",
		o = n.signalR;
	i.fn = i.prototype = {
		init: function(n, t) {
			this.state = {}, this.connection = n, this.hubName = t, this._ = {
				callbackMap: {}
			}
		},
		constructor: i,
		hasSubscriptions: function() {
			return u(this._.callbackMap)
		},
		on: function(t, i) {
			var f = this,
				u = f._.callbackMap;
			return t = t.toLowerCase(), u[t] || (u[t] = {}), u[t][i] = function(n, t) {
				i.apply(f, t)
			}, n(f).bind(r(t), u[t][i]), f
		},
		off: function(t, i) {
			var e = this,
				o = e._.callbackMap,
				f;
			return t = t.toLowerCase(), f = o[t], f && (f[i] ? (n(e).unbind(r(t), f[i]), delete f[i], u(f) || delete o[t]) : i || (n(e).unbind(r(t)), delete o[t])), e
		},
		invoke: function(t) {
			var i = this,
				r = i.connection,
				c = n.makeArray(arguments).slice(1),
				l = h(c, s),
				f = {
					H: i.hubName,
					M: t,
					A: l,
					I: r._.invocationCallbackId
				},
				u = n.Deferred(),
				e = function(f) {
					var e = i._maximizeHubResponse(f),
						h, s;
					n.extend(i.state, e.State), e.Progress ? u.notifyWith ? u.notifyWith(i, [e.Progress.Data]) : r._.progressjQueryVersionLogged || (r.log("A hub method invocation progress update was received but the version of jQuery in use (" + n.prototype.jquery + ") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."), r._.progressjQueryVersionLogged = !0) : e.Error ? (e.StackTrace && r.log(e.Error + "\n" + e.StackTrace + "."), h = e.IsHubException ? "HubException" : "Exception", s = o._.error(e.Error, h), s.data = e.ErrorData, r.log(i.hubName + "." + t + " failed to execute. Error: " + s.message), u.rejectWith(i, [s])) : (r.log("Invoked " + i.hubName + "." + t), u.resolveWith(i, [e.Result]))
				};
			return r._.invocationCallbacks[r._.invocationCallbackId.toString()] = {
				scope: i,
				method: e
			}, r._.invocationCallbackId += 1, n.isEmptyObject(i.state) || (f.S = i.state), r.log("Invoking " + i.hubName + "." + t), r.send(f), u.promise()
		},
		_maximizeHubResponse: function(n) {
			return {
				State: n.S,
				Result: n.R,
				Progress: n.P ? {
					Id: n.P.I,
					Data: n.P.D
				} : null,
				Id: n.I,
				IsHubException: n.H,
				Error: n.E,
				StackTrace: n.T,
				ErrorData: n.D
			}
		}
	}, i.fn.init.prototype = i.fn, t.fn = t.prototype = n.connection(), t.fn.init = function(t, i) {
		var e = {
			qs: null,
			logging: !1,
			useDefaultPath: !0
		},
			u = this;
		n.extend(e, i), n.signalR.fn.init.call(u, t, e.qs, e.logging), u.proxies = {}, u._.invocationCallbackId = 0, u._.invocationCallbacks = {}, u.received(function(t) {
			var f, o, e, i, h, s;
			t && (typeof t.P != "undefined" ? (e = t.P.I.toString(), i = u._.invocationCallbacks[e], i && i.method.call(i.scope, t)) : typeof t.I != "undefined" ? (e = t.I.toString(), i = u._.invocationCallbacks[e], i && (u._.invocationCallbacks[e] = null, delete u._.invocationCallbacks[e], i.method.call(i.scope, t))) : (f = this._maximizeClientHubInvocation(t), u.log("Triggering client hub event '" + f.Method + "' on hub '" + f.Hub + "'."), h = f.Hub.toLowerCase(), s = f.Method.toLowerCase(), o = this.proxies[h], n.extend(o.state, f.State), n(o).triggerHandler(r(s), [f.Args])))
		}), u.error(function(n, t) {
			var r, i;
			t && (r = t.I, i = u._.invocationCallbacks[r], i && (u._.invocationCallbacks[r] = null, delete u._.invocationCallbacks[r], i.method.call(i.scope, {
				E: n
			})))
		}), u.reconnecting(function() {
			u.transport && u.transport.name === "webSockets" && f(u, "Connection started reconnecting before invocation result was received.")
		}), u.disconnected(function() {
			f(u, "Connection was disconnected before invocation result was received.")
		})
	}, t.fn._maximizeClientHubInvocation = function(n) {
		return {
			Hub: n.H,
			Method: n.M,
			Args: n.A,
			State: n.S
		}
	}, t.fn._registerSubscribedHubs = function() {
		var t = this;
		t._subscribedToHubs || (t._subscribedToHubs = !0, t.starting(function() {
			var i = [];
			n.each(t.proxies, function(n) {
				this.hasSubscriptions() && (i.push({
					name: n
				}), t.log("Client subscribed to hub '" + n + "'."))
			}), i.length === 0 && t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to."), t.data = t.json.stringify(i)
		}))
	}, t.fn.createHubProxy = function(n) {
		n = n.toLowerCase();
		var t = this.proxies[n];
		return t || (t = i(this, n), this.proxies[n] = t), this._registerSubscribedHubs(), t
	}, t.fn.init.prototype = t.fn, n.hubConnection = t
}(window.jQuery, window), function(n) {
	n.signalR.version = "2.1.2"
}(window.jQuery), function(n) {
	"use strict";

	function f(t, i) {
		return function() {
			i.apply(t, n.makeArray(arguments))
		}
	}
	function u(t, i) {
		var s, r, u, o, e;
		for (s in t) if (t.hasOwnProperty(s)) {
			if (r = t[s], !r.hubName) continue;
			e = i ? r.on : r.off;
			for (u in r.client) if (r.client.hasOwnProperty(u)) {
				if (o = r.client[u], !n.isFunction(o)) continue;
				e.call(r, u, f(r, o))
			}
		}
	}
	if (typeof n.signalR != "function") throw new Error("SignalR: SignalR is not loaded. Please ensure jquery.signalR-x.js is referenced before ~/signalr/js.");
	var r = n.signalR;
	n.hubConnection.prototype.createHubProxies = function() {
		var n = {};
		return this.starting(function() {
			u(n, !0), this._registerSubscribedHubs()
		}).disconnected(function() {
			u(n, !1)
		}), n.mainHub = this.createHubProxy("mainHub"), n.mainHub.client = {}, n.mainHub.server = {}, n
	}, r.hub = n.hubConnection("/signalr", {
		useDefaultPath: !1
	}), n.extend(r, r.hub.createHubProxies())
}(window.jQuery, window), function(n, t) {
	function w(n, t) {
		var r = n.createElement("p"),
			i = n.getElementsByTagName("head")[0] || n.documentElement;
		return r.innerHTML = "x<style>" + t + "</style>", i.insertBefore(r.lastChild, i.firstChild)
	}
	function a() {
		var n = i.elements;
		return "string" == typeof n ? n.split(" ") : n
	}
	function o(n) {
		var t = h[n[s]];
		return t || (t = {}, e++, n[s] = e, h[e] = t), t
	}
	function c(n, i, u) {
		if (i || (i = t), r) return i.createElement(n);
		u || (u = o(i));
		var f;
		return f = u.cache[n] ? u.cache[n].cloneNode() : y.test(n) ? (u.cache[n] = u.createElem(n)).cloneNode() : u.createElem(n), f.canHaveChildren && !b.test(n) ? u.frag.appendChild(f) : f
	}
	function p(n, i) {
		if (n || (n = t), r) return n.createDocumentFragment();
		i = i || o(n);
		for (var e = i.frag.cloneNode(), u = 0, f = a(), s = f.length; s > u; u++) e.createElement(f[u]);
		return e
	}
	function k(n, t) {
		t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag()), n.createElement = function(r) {
			return i.shivMethods ? c(r, n, t) : t.createElem(r)
		}, n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + a().join().replace(/\w+/g, function(n) {
			return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")'
		}) + ");return n}")(i, t.frag)
	}
	function l(n) {
		n || (n = t);
		var f = o(n);
		return !i.shivCSS || u || f.hasCSS || (f.hasCSS = !! w(n, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), r || k(n, f), n
	}
	var u, r, v = "3.6.2pre",
		f = n.html5 || {},
		b = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
		y = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
		s = "_html5shiv",
		e = 0,
		h = {},
		i;
	(function() {
		try {
			var n = t.createElement("a");
			n.innerHTML = "<xyz></xyz>", u = "hidden" in n, r = 1 == n.childNodes.length ||
			function() {
				t.createElement("a");
				var n = t.createDocumentFragment();
				return n.cloneNode === void 0 || n.createDocumentFragment === void 0 || n.createElement === void 0
			}()
		} catch (i) {
			u = !0, r = !0
		}
	})(), i = {
		elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
		version: v,
		shivCSS: f.shivCSS !== !1,
		supportsUnknownElements: r,
		shivMethods: f.shivMethods !== !1,
		type: "default",
		shivDocument: l,
		createElement: c,
		createDocumentFragment: p
	}, n.html5 = i, l(t)
}(this, document), function(n) {
	typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
}(function(n) {
	function r(n) {
		return n
	}
	function f(n) {
		return decodeURIComponent(n.replace(u, " "))
	}
	function i(n) {
		n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return t.json ? JSON.parse(n) : n
		} catch (i) {}
	}
	var u = /\+/g,
		t = n.cookie = function(u, e, o) {
			var p, c, s, y;
			if (e !== undefined) return o = n.extend({}, t.defaults, o), typeof o.expires == "number" && (p = o.expires, c = o.expires = new Date, c.setDate(c.getDate() + p)), e = t.json ? JSON.stringify(e) : String(e), document.cookie = [t.raw ? u : encodeURIComponent(u), "=", t.raw ? e : encodeURIComponent(e), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("");
			var w = t.raw ? r : f,
				b = document.cookie.split("; "),
				h = u ? undefined : {};
			for (s = 0, y = b.length; s < y; s++) {
				var v = b[s].split("="),
					a = w(v.shift()),
					l = w(v.join("="));
				if (u && u === a) {
					h = i(l);
					break
				}
				u || (h[a] = i(l))
			}
			return h
		};
	t.defaults = {}, n.removeCookie = function(t, i) {
		return n.cookie(t) !== undefined ? (n.cookie(t, "", n.extend({}, i, {
			expires: -1
		})), !0) : !1
	}
}), function(n) {
	function i(n) {
		(n.attr("title") || typeof n.attr("original-title") != "string") && n.attr("original-title", n.attr("title") || "").removeAttr("title")
	}
	function t(t, r) {
		this.$element = n(t), this.options = r, this.enabled = !0, i(this.$element)
	}
	t.prototype = {
		show: function() {
			var o = this.getTitle(),
				i;
			if (o && this.enabled) {
				i = this.tip(), i.find(".tipsy-inner")[this.options.html ? "html" : "text"](o), i[0].className = "tipsy", i.remove().css({
					top: 0,
					left: 0,
					visibility: "hidden",
					display: "block"
				}).appendTo(document.body);
				var t = n.extend({}, this.$element.offset(), {
					width: this.$element[0].offsetWidth,
					height: this.$element[0].offsetHeight
				}),
					f = i[0].offsetWidth,
					e = i[0].offsetHeight,
					u = typeof this.options.gravity == "function" ? this.options.gravity.call(this.$element[0]) : this.options.gravity,
					r;
				switch (u.charAt(0)) {
				case "n":
					r = {
						top: t.top + t.height + this.options.offset,
						left: t.left + t.width / 2 - f / 2
					};
					break;
				case "s":
					r = {
						top: t.top - e - this.options.offset,
						left: t.left + t.width / 2 - f / 2
					};
					break;
				case "e":
					r = {
						top: t.top + t.height / 2 - e / 2,
						left: t.left - f - this.options.offset
					};
					break;
				case "w":
					r = {
						top: t.top + t.height / 2 - e / 2,
						left: t.left + t.width + this.options.offset
					}
				}
				u.length == 2 && (r.left = u.charAt(1) == "w" ? t.left + t.width / 2 - 15 : t.left + t.width / 2 - f + 15), i.css(r).addClass("tipsy-" + u), this.options.fade ? i.stop().css({
					opacity: 0,
					display: "block",
					visibility: "visible"
				}).animate({
					opacity: this.options.opacity
				}) : i.css({
					visibility: "visible",
					opacity: this.options.opacity
				})
			}
		},
		hide: function() {
			this.options.fade ? this.tip().stop().fadeOut(function() {
				n(this).remove()
			}) : this.tip().remove()
		},
		getTitle: function() {
			var r = this.$element,
				n = this.options,
				t;
			return i(r), n = this.options, typeof n.title == "string" ? t = r.attr(n.title == "title" ? "original-title" : n.title) : typeof n.title == "function" && (t = n.title.call(r[0])), t = ("" + t).replace(/(^\s*|\s*$)/, ""), t || n.fallback
		},
		tip: function() {
			return this.$tip || (this.$tip = n('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')), this.$tip
		},
		validate: function() {
			this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
		},
		enable: function() {
			this.enabled = !0
		},
		disable: function() {
			this.enabled = !1
		},
		toggleEnabled: function() {
			this.enabled = !this.enabled
		}
	}, n.fn.tipsy = function(i) {
		function r(r) {
			var u = n.data(r, "tipsy");
			return u || (u = new t(r, n.fn.tipsy.elementOptions(r, i)), n.data(r, "tipsy", u)), u
		}
		function o() {
			var n = r(this);
			n.hoverState = "in", i.delayIn == 0 ? n.show() : setTimeout(function() {
				n.hoverState == "in" && n.show()
			}, i.delayIn)
		}
		function s() {
			var n = r(this);
			n.hoverState = "out", i.delayOut == 0 ? n.hide() : setTimeout(function() {
				n.hoverState == "out" && n.hide()
			}, i.delayOut)
		}
		if (i === !0) return this.data("tipsy");
		if (typeof i == "string") return this.data("tipsy")[i]();
		if (i = n.extend({}, n.fn.tipsy.defaults, i), i.live || this.each(function() {
			r(this)
		}), i.trigger != "manual") {
			var u = i.on ? "on" : "bind",
				e = i.trigger == "hover" ? "mouseenter" : "focus",
				f = i.trigger == "hover" ? "mouseleave" : "blur";
			this[u](e, o)[u](f, s)
		}
		return this
	}, n.fn.tipsy.defaults = {
		delayIn: 0,
		delayOut: 0,
		fade: !1,
		fallback: "",
		gravity: "n",
		html: !1,
		live: !1,
		offset: 0,
		opacity: .8,
		title: "title",
		trigger: "hover"
	}, n.fn.tipsy.elementOptions = function(t, i) {
		return n.metadata ? n.extend({}, i, n(t).metadata()) : i
	}, n.fn.tipsy.autoNS = function() {
		return n(this).offset().top > n(document).scrollTop() + n(window).height() / 2 ? "s" : "n"
	}, n.fn.tipsy.autoWE = function() {
		return n(this).offset().left > n(document).scrollLeft() + n(window).width() / 2 ? "e" : "w"
	}
}(jQuery), !
function(n) {
	"function" == typeof define && define.amd ? define(["jquery"], n) : n("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function(n) {
	function a(t) {
		var i = {},
			r = /^jQuery\d+$/;
		return n.each(t.attributes, function(n, t) {
			t.specified && !r.test(t.name) && (i[t.name] = t.value)
		}), i
	}
	function f(i, r) {
		var f = this,
			u = n(f);
		if (f.value == u.attr("placeholder") && u.hasClass(t.customClass)) if (u.data("placeholder-password")) {
			if (u = u.hide().nextAll('input[type="password"]:first').show().attr("id", u.removeAttr("id").data("placeholder-id")), i === !0) return u[0].value = r;
			u.focus()
		} else f.value = "", u.removeClass(t.customClass), f == c() && f.select()
	}
	function e() {
		var r, e = this,
			i = n(e),
			u = this.id;
		if ("" === e.value) {
			if ("password" === e.type) {
				if (!i.data("placeholder-textinput")) {
					try {
						r = i.clone().prop({
							type: "text"
						})
					} catch (o) {
						r = n("<input>").attr(n.extend(a(this), {
							type: "text"
						}))
					}
					r.removeAttr("name").data({
						"placeholder-password": i,
						"placeholder-id": u
					}).bind("focus.placeholder", f), i.data({
						"placeholder-textinput": r,
						"placeholder-id": u
					}).before(r)
				}
				i = i.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", u).show()
			}
			i.addClass(t.customClass), i[0].value = i.attr("placeholder")
		} else i.removeClass(t.customClass)
	}
	function c() {
		try {
			return document.activeElement
		} catch (n) {}
	}
	var r, i, l = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
		u = "placeholder" in document.createElement("input") && !l,
		o = "placeholder" in document.createElement("textarea") && !l,
		s = n.valHooks,
		h = n.propHooks,
		t;
	u && o ? (i = n.fn.placeholder = function() {
		return this
	}, i.input = i.textarea = !0) : (t = {}, i = n.fn.placeholder = function(i) {
		var o = {
			customClass: "placeholder"
		},
			r;
		return t = n.extend({}, o, i), r = this, r.filter((u ? "textarea" : ":input") + "[placeholder]").not("." + t.customClass).bind({
			"focus.placeholder": f,
			"blur.placeholder": e
		}).data("placeholder-enabled", !0).trigger("blur.placeholder"), r
	}, i.input = u, i.textarea = o, r = {
		get: function(i) {
			var r = n(i),
				u = r.data("placeholder-password");
			return u ? u[0].value : r.data("placeholder-enabled") && r.hasClass(t.customClass) ? "" : i.value
		},
		set: function(i, r) {
			var u = n(i),
				o = u.data("placeholder-password");
			return o ? o[0].value = r : u.data("placeholder-enabled") ? ("" === r ? (i.value = r, i != c() && e.call(i)) : u.hasClass(t.customClass) ? f.call(i, !0, r) || (i.value = r) : i.value = r, u) : i.value = r
		}
	}, u || (s.input = r, h.value = r), o || (s.textarea = r, h.value = r), n(function() {
		n(document).delegate("form", "submit.placeholder", function() {
			var i = n("." + t.customClass, this).each(f);
			setTimeout(function() {
				i.each(e)
			}, 10)
		})
	}), n(window).bind("beforeunload.placeholder", function() {
		n("." + t.customClass).each(function() {
			this.value = ""
		})
	}))
}), function(n) {
	"function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery)
}(function(n) {
	n.cxCalendar = function() {
		for (var r, f, u, t = {
			dom: {},
			api: {}
		}, h = function(n) {
				return n && ("function" == typeof HTMLElement || "object" == typeof HTMLElement) && n instanceof HTMLElement ? !0 : n && n.nodeType && 1 === n.nodeType ? !0 : !1
			}, c = function(n) {
				return n && n.length && ("function" == typeof jQuery || "object" == typeof jQuery) && n instanceof jQuery ? !0 : !1
			}, l = !+"\v1", s = /^(\d+)[-.](\d+)[-.](\d+)$/, e = /^\d+$/, i = 0, o = arguments.length; i < o; i++) c(arguments[i]) ? r = arguments[i] : h(arguments[i]) ? r = n(arguments[i]) : "function" == typeof arguments[i] ? u = arguments[i] : "object" == typeof arguments[i] && (f = arguments[i]);
		if (!(1 > r.length)) return t.init = function() {
			var t = this;
			t.dom.el = r, t.settings = n.extend({}, n.cxCalendar.defaults, f, {
				startDate: t.dom.el.data("startDate"),
				endDate: t.dom.el.data("endDate"),
				type: t.dom.el.data("type"),
				wday: t.dom.el.data("wday"),
				position: t.dom.el.data("position"),
				baseClass: t.dom.el.data("baseClass"),
				language: t.dom.el.data("language")
			}), t.dom.el.val().length && (t.settings.date = l && s.test(t.dom.el.val()) ? t.dom.el.val().replace(/[\.\-]/g, "/") : t.dom.el.val()), t.setOptions(), t.build(!0), t.api = {
				show: function() {
					t.show()
				},
				hide: function() {
					t.hide()
				},
				getDate: function() {
					return t.getDate.apply(t, arguments)
				},
				setDate: function() {
					t.setDate.apply(t, arguments)
				},
				gotoDate: function() {
					t.gotoDate.apply(t, arguments)
				},
				clearDate: function() {
					t.clearDate()
				},
				setOptions: function() {
					t.setOptions.apply(t, arguments), t.build()
				}
			}, "function" == typeof u && u(t.api)
		}, t.getMonthDay = function(n) {
			return [31, 28 + (0 == n % 4 && 0 != n % 100 || 0 == n % 400 ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
		}, t.formatDate = function(n, t) {
			if ("string" == typeof n && "undefined" !== t) {
				"string" == typeof t && (t = t.replace(/[\.-]/g, "/"));
				var i = new Date(t),
					f, s, r, h, u, o, e;
				if (!isNaN(i.getTime())) return f = i.getFullYear(), s = f.toString(10).slice(-2), r = i.getMonth() + 1, h = 10 > r ? "0" + r : r, u = i.getDate(), o = 10 > u ? "0" + u : u, e = i.getTime(), i = i.toDateString(), n = n.replace(/STRING/g, i), n = n.replace(/TIME/g, e), n = n.replace(/YYYY/g, f), n = n.replace(/YY/g, s), n = n.replace(/MM/g, h), n = n.replace(/M/g, r), n = n.replace(/DD/g, o), n = n.replace(/D/g, u)
			}
		}, t.getLanguage = function(t) {
			return "object" == typeof t ? t : ("string" == typeof t ? t = t.toLowerCase() : "string" == typeof navigator.language ? t = navigator.language.toLowerCase() : "string" == typeof navigator.browserLanguage && (t = navigator.browserLanguage.toLowerCase()), "string" == typeof t && "object" == typeof n.cxCalendar.languages[t] ? n.cxCalendar.languages[t] : n.cxCalendar.languages["default"])
		}, t.setOptions = function(t) {
			var i;
			if ("object" == typeof t && n.extend(this.settings, t), t = "number" == typeof this.settings.startDate && 9999 >= this.settings.startDate ? new Date(this.settings.startDate, 0, 1) : new Date(this.settings.startDate), i = "number" == typeof this.settings.endDate && 9999 >= this.settings.endDate ? new Date(this.settings.endDate, 11, 31) : new Date(this.settings.endDate), (isNaN(t.getTime()) || isNaN(i.getTime()) || t.getFullYear() > i.getFullYear()) && (t = new Date(n.cxCalendar.defaults.startDate, 0, 1), i = new Date(n.cxCalendar.defaults.endDate, 11, 31)), this.minDate = {
				year: t.getFullYear(),
				month: t.getMonth() + 1,
				time: t.getTime()
			}, this.maxDate = {
				year: i.getFullYear(),
				month: i.getMonth() + 1,
				time: i.getTime()
			}, t = "number" == typeof this.settings.date && 9999 >= this.settings.date ? new Date(this.settings.date, 0, 1) : new Date(this.settings.date), isNaN(t.getTime()) && (t = new Date), this.defDate = t.getTime() < this.minDate.time ? n.extend({}, this.minDate) : t.getTime() > this.maxDate.time ? n.extend({}, this.maxDate) : {
				year: t.getFullYear(),
				month: t.getMonth() + 1,
				time: t.getTime()
			}, this.settings.saturday = 6 - this.settings.wday, this.settings.sunday = 7 <= 7 - this.settings.wday ? 0 : 7 - this.settings.wday, this.language = this.getLanguage(this.settings.language), t = this.language.holiday, t = Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t), t && this.language.holiday.length) for (this.holiday = {}, t = 0, i = this.language.holiday.length; t < i; t++) this.holiday[this.language.holiday[t].day] = this.language.holiday[t].name;
			else this.holiday = !1
		}, t.build = function(t) {
			var r, i;
			for (!0 === t && (this.dom.pane = n("<div></div>", {
				"class": "cxcalendar"
			}), this.dom.paneHd = n("<div></div>", {
				"class": "cxcalendar_hd"
			}).appendTo(this.dom.pane), this.dom.paneBd = n("<div></div>", {
				"class": "cxcalendar_bd"
			}).appendTo(this.dom.pane), this.dom.paneHd.html('<a class="prev" href="javascript://" rel="prev"></a><a class="next" href="javascript://" rel="next"></a>'), this.dom.dateTxt = n("<div></div>", {
				"class": "intxt"
			}).appendTo(this.dom.paneHd), this.dom.dateSet = n("<div></div>", {
				"class": "inset"
			}).appendTo(this.dom.paneHd), this.dom.yearSet = n("<select></select>", {
				"class": "year"
			}).appendTo(this.dom.dateSet), this.dom.monthSet = n("<select></select>", {
				"class": "month"
			}).appendTo(this.dom.dateSet), this.dom.weekSet = n("<ul></ul>", {
				"class": "week"
			}).appendTo(this.dom.paneBd), this.dom.daySet = n("<ul></ul>", {
				"class": "days"
			}).appendTo(this.dom.paneBd)), r = "", i = this.minDate.year; i <= this.maxDate.year; i++) r += '<option value="' + i + '">' + i + "</option>";
			for (this.dom.yearSet.html(r).val(this.defDate.year), r = "", i = 0; 12 > i; i++) r += '<option value="' + (i + 1) + '">' + this.language.monthList[i] + "</option>";
			for (this.dom.monthSet.html(r).val(this.defDate.month), r = "", i = 0; 7 > i; i++) r += "<li", i === this.settings.saturday ? r += ' class="sat"' : i === this.settings.sunday && (r += ' class="sun"'), r += ">", r += 7 > i + this.settings.wday ? this.language.weekList[i + this.settings.wday] : this.language.weekList[i + this.settings.wday - 7], r += "</li>";
			this.dom.weekSet.html(r), "string" == typeof this.settings.baseClass && (this.dom.pane.attr("class", "cxcalendar"), this.dom.pane.addClass(this.settings.baseClass)), this.gotoDate(this.defDate.year, this.defDate.month), !0 === t && (this.dom.pane.appendTo("body"), this.dom.blockBg = n("<div></div>", {
				"class": "cxcalendar_lock"
			}).appendTo("body"), this.bindEvents())
		}, t.bindEvents = function() {
			var t = this;
			t.dom.el.on("click", function() {
				t.show()
			});
			t.dom.blockBg.on("click", function() {
				t.hide()
			});
			t.dom.dateTxt.on("click", function() {
				t.dom.dateTxt.hide(), t.dom.dateSet.show()
			});
			t.dom.yearSet.on("change", function() {
				t.gotoDate(parseInt(t.dom.yearSet.val(), 10), parseInt(t.dom.monthSet.val(), 10))
			});
			t.dom.monthSet.on("change", function() {
				t.gotoDate(parseInt(t.dom.yearSet.val(), 10), parseInt(t.dom.monthSet.val(), 10))
			});
			t.dom.pane.on("click", "a", function() {
				switch (this.rel) {
				case "prev":
					return t.gotoDate(parseInt(t.dom.yearSet.val(), 10), parseInt(t.dom.monthSet.val(), 10) - 1), !1;
				case "next":
					return t.gotoDate(parseInt(t.dom.yearSet.val(), 10), parseInt(t.dom.monthSet.val(), 10) + 1), !1
				}
			});
			t.dom.daySet.on("click", "li", function() {
				var i = n(this);
				i.hasClass("del") || t.setDate(i.data("year"), i.data("month"), i.data("day"))
			})
		}, t.rebulidMonthSelect = function(n, t) {
			for (var u = t || 12, r = "", i = n || 1; i <= u; i++) r += '<option value="' + i + '">' + this.language.monthList[i - 1] + "</option>";
			this.dom.monthSet.html(r)
		}, t.show = function() {
			var i = this.settings.position,
				c = document.body.clientWidth,
				h = document.body.clientHeight,
				o = this.dom.pane.outerWidth(),
				f = this.dom.pane.outerHeight(),
				n = this.dom.el.offset().top,
				t = this.dom.el.offset().left,
				s = this.dom.el.outerWidth(),
				u = this.dom.el.outerHeight(),
				r = n + f + u > h ? n - f : n + u,
				e = t + o > c ? t - o - s : t;
			if ("string" == typeof i && i.length) switch (i) {
			case "top":
				r = n - f;
				break;
			case "topLeft":
			case "topRight":
				r = n - f, e = "topLeft" === i ? t - o + s : t;
				break;
			case "bottom":
				r = n + u;
				break;
			case "bottomLeft":
			case "bottomRight":
				r = n + u, e = "bottomLeft" === i ? t - o + s : t;
				break;
			case "left":
			case "right":
				r = n + f + u > h ? n + u - f : n, e = "left" === i ? t - o : t + s;
				break;
			case "leftTop":
			case "leftBottom":
				r = "leftTop" === i ? n + u - f : n, e = t - o;
				break;
			case "rightTop":
			case "rightBottom":
				r = "rightTop" === i ? n + u - f : n, e = t + s
			}
			this.dom.dateTxt.html('<span class="y">' + this.dom.yearSet.val() + '</span><span class="m">' + this.language.monthList[this.dom.monthSet.val() - 1] + "</span>"), this.dom.pane.css({
				top: r,
				left: e
			}).show(), this.dom.blockBg.css({
				width: c,
				height: h
			}).show()
		}, t.hide = function() {
			this.dom.pane.hide(), this.dom.blockBg.hide(), this.dom.dateSet.hide(), this.dom.dateTxt.show()
		}, t.getDate = function(n) {
			var t = this.dom.el.val();
			return t.length && (t = "string" == typeof n ? this.formatDate(n, t) : this.formatDate(this.settings.type, t)), t
		}, t.gotoDate = function(n, t) {
			var o, u, c;
			o = "number" == typeof n && 9999 >= n && "number" == typeof t ? new Date(n, t - 1, 1) : new Date(n), u = o.getFullYear(), c = o.getMonth() + 1, _theTime = o.getTime(), u < this.minDate.year || u <= this.minDate.year && c < this.minDate.month ? (u = this.minDate.year, c = this.minDate.month) : (u > this.maxDate.year || u >= this.maxDate.year && c > this.maxDate.month) && (u = this.maxDate.year, c = this.maxDate.month), u === this.minDate.year && u === this.maxDate.year ? this.rebulidMonthSelect(this.minDate.month, this.maxDate.month) : u === this.minDate.year ? this.rebulidMonthSelect(this.minDate.month, 12) : u === this.maxDate.year ? this.rebulidMonthSelect(1, this.maxDate.month) : this.rebulidMonthSelect(), o = c - 1;
			var a = this.getMonthDay(u),
				v = new Date(u, o, 1),
				b = new Date,
				nt = b.getFullYear(),
				tt = b.getMonth() + 1,
				b = b.getDate(),
				y = this.dom.el.val(),
				l, d, k, g;
			y.length && (e.test(y) && (y = parseInt(y, 10)), l = new Date(y), isNaN(l.getTime()) || (d = l.getFullYear(), k = l.getMonth() + 1, g = l.getDate())), v = v.getDay() - this.settings.wday, 0 > v && (v += 7);
			for (var y = 7 * Math.ceil((a[o] + v) / 7), i, s, r, h, f, w = "", p = 0; p < y; p++) f = [], s = u, r = c, i = p - v + 1, 0 >= i ? (f.push("other"), 1 >= r ? (s--, r = 12, i = a[11] + i) : (r--, i = a[o - 1] + i)) : i > a[o] && (f.push("other"), 12 <= r ? (s++, r = 1, i -= a[0]) : (r++, i -= a[o])), h = +new Date(s, r - 1, i), "object" == typeof l && s === d && r === k && i === g ? f.push("selected") : s === nt && r === tt && i === b && f.push("now"), p % 7 === this.settings.saturday ? f.push("sat") : p % 7 === this.settings.sunday && f.push("sun"), (h < this.minDate.time || h > this.maxDate.time) && f.push("del"), this.holiday ? "string" == typeof this.holiday["M" + r + "-" + i] ? (f.push("holiday"), h = this.holiday["M" + r + "-" + i]) : "string" == typeof this.holiday["D" + s + "-" + r + "-" + i] ? (f.push("holiday"), h = this.holiday["D" + s + "-" + r + "-" + i]) : h = s + "-" + r + "-" + i : h = s + "-" + r + "-" + i, w += "<li", f.length && (w += ' class="' + f.join(" ") + '"'), w += ' title="' + h + '"', w += ' data-year="' + s + '" data-month="' + r + '" data-day="' + i + '">' + i + "</li>";
			return this.dom.daySet.html(w), this.dom.dateTxt.html('<span class="y">' + u + '</span><span class="m">' + this.language.monthList[o] + "</span>"), this.dom.yearSet.val(u), this.dom.monthSet.val(c), this
		}, t.setDate = function(n, t, i) {
			i = "number" == typeof n && 9999 >= n && "number" == typeof t && "number" == typeof i ? new Date(n, t - 1, i) : new Date(n), isNaN(i.getTime()) || (n = i.getFullYear(), t = i.getMonth() + 1, _todayTime = i.getTime(), i = this.formatDate(this.settings.type, _todayTime), this.dom.el.val(i).trigger("change"), this.hide(), this.gotoDate(n, t))
		}, t.clearDate = function() {
			this.dom.el.val(""), this.hide()
		}, t.init(), this
	}, n.cxCalendar.defaults = {
		startDate: 1950,
		endDate: 2030,
		date: void 0,
		type: "YYYY-MM-DD",
		wday: 0,
		position: void 0,
		baseClass: void 0,
		language: void 0
	}, n.cxCalendar.languages = {
		"default": {
			monthList: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
			weekList: "日一二三四五六".split(""),
			holiday: []
		}
	}, n.fn.cxCalendar = function(t, i) {
		return this.each(function() {
			n.cxCalendar(this, t, i)
		}), this
	}
}), function(n) {
	n.fly = function(t, i) {
		var u = {
			version: "1.0.0",
			autoPlay: !0,
			vertex_Rtop: 20,
			speed: 1.2,
			start: {},
			end: {},
			onEnd: n.noop
		},
			r = n(t);
		this.init = function(n) {
			this.setOptions(n), this.settings.autoPlay && this.play()
		}, this.setOptions = function(t) {
			var f, i, e;
			t = this.settings = n.extend(!0, {}, u, t), f = t.start, i = t.end, r.css({
				marginTop: "0px",
				marginLeft: "0px",
				position: "fixed"
			}).appendTo("body"), null != i.width && null != i.height && n.extend(!0, f, {
				width: r.width(),
				height: r.height()
			}), e = Math.min(f.top, i.top) - Math.abs(f.left - i.left) / 3, e < t.vertex_Rtop && (e = Math.min(t.vertex_Rtop, Math.min(f.top, i.top)));
			var s = Math.sqrt(Math.pow(f.top - i.top, 2) + Math.pow(f.left - i.left, 2)),
				s = Math.ceil(Math.min(Math.max(Math.log(s) / .05 - 75, 30), 100) / t.speed),
				o = f.top == e ? 0 : -Math.sqrt((i.top - e) / (f.top - e)),
				f = (o * f.left - i.left) / (o - 1),
				i = i.left == f ? 0 : (i.top - e) / Math.pow(i.left - f, 2);
			n.extend(!0, t, {
				count: -1,
				steps: s,
				vertex_left: f,
				vertex_top: e,
				curvature: i
			})
		}, this.play = function() {
			this.move()
		}, this.move = function() {
			var t = this.settings,
				u = t.start,
				f = t.count,
				o = t.steps,
				i = t.end,
				s = u.left + (i.left - u.left) * f / o,
				c = 0 == t.curvature ? u.top + (i.top - u.top) * f / o : t.curvature * Math.pow(s - t.vertex_left, 2) + t.vertex_top;
			if (null != i.width && null != i.height) {
				var e = o / 2,
					h = i.width - (i.width - u.width) * Math.cos(f < e ? 0 : (f - e) / (o - e) * Math.PI / 2),
					u = i.height - (i.height - u.height) * Math.cos(f < e ? 0 : (f - e) / (o - e) * Math.PI / 2);
				r.css({
					width: h + "px",
					height: u + "px",
					"font-size": Math.min(h, u) + "px"
				})
			}
			r.css({
				left: s + "px",
				top: c + "px"
			}), t.count++, s = window.requestAnimationFrame(n.proxy(this.move, this)), f == o && (window.cancelAnimationFrame(s), t.onEnd.apply(this))
		}, this.destory = function() {
			r.remove()
		}, this.init(i)
	}, n.fn.fly = function(t) {
		return this.each(function() {
			void 0 == n(this).data("fly") && n(this).data("fly", new n.fly(this, t))
		})
	}
}(jQuery), function(n) {
	n.fn.slideshowLite = function() {
		return this.each(function() {
			function f(n) {
				1 >= i || (v = n ? setTimeout(function() {
					f(!1), t = t < i - 1 ? parseInt(t + 1) : 0, u(), f(!0)
				}, 3e3) : clearTimeout(v))
			}
			function u() {
				h.hide().eq(t).show(), c.get(0) && e && e.removeClass("active").eq(t).addClass("active")
			}
			var r = n(this),
				h = r.children(".slideshow-content:first").find("li"),
				c = r.children(".slideshow-page:first"),
				s, o;
			r.children(".slideshow-option:first");
			var a = r.children(".so-prev:first"),
				l = r.children(".so-next:first"),
				e = null,
				i = h.length,
				v = null,
				t = 0;
			if (n.each(h, function(t, i) {
				n(i).css("z-index", t)
			}), 1 >= i && (a.hide(), l.hide()), c.get(0) && 1 < i) {
				for (s = n("<ol>").appendTo(c), o = 0; o < i; o++) s.append('<li><a href="javascript:void(0);">' + parseInt(o + 1) + "</a></li>");
				e = s.children("li");
				e.on("mouseenter", function() {
					t = n(this).index(), u()
				})
			}
			u(), f(!0);
			r.on({
				mouseenter: function() {
					f(!1)
				},
				mouseleave: function() {
					f(!0)
				}
			});
			a.on("click", function() {
				t = 0 < t ? t - 1 : i - 1, u()
			});
			l.on("click", function() {
				t = t < i - 1 ? parseInt(t + 1) : 0, u()
			})
		})
	}
}(jQuery), function(n) {
	n.fn.dragsort = function(t) {
		var r = n.extend({}, n.fn.dragsort.defaults, t),
			u = [],
			i = null,
			f = null;
		return this.selector && n("head").append("<style type='text/css'>" + (this.selector.split(",").join(" " + r.dragSelector + ",") + " " + r.dragSelector) + " { cursor: pointer; }</style>"), this.each(function(t, e) {
			n(e).is("table") && n(e).children().size() == 1 && n(e).children().is("tbody") && (e = n(e).children().get(0));
			var o = {
				draggedItem: null,
				placeHolderItem: null,
				pos: null,
				offset: null,
				offsetLimit: null,
				scroll: null,
				container: e,
				init: function() {
					n(this.container).attr("data-listIdx", t).mousedown(this.grabItem).find(r.dragSelector).css("cursor", "pointer"), n(this.container).children(r.itemSelector).each(function(t) {
						n(this).attr("data-itemIdx", t)
					})
				},
				grabItem: function(t) {
					var f, e, o;
					if (!(t.which != 1 || n(t.target).is(r.dragSelectorExclude))) {
						for (f = t.target; !n(f).is("[data-listIdx='" + n(this).attr("data-listIdx") + "'] " + r.dragSelector);) {
							if (f == this) return;
							f = f.parentNode
						}
						return i != null && i.draggedItem != null && i.dropItem(), n(t.target).css("cursor", "move"), i = u[n(this).attr("data-listIdx")], i.draggedItem = n(f).closest(r.itemSelector), f = parseInt(i.draggedItem.css("marginTop")), e = parseInt(i.draggedItem.css("marginLeft")), i.offset = i.draggedItem.offset(), i.offset.top = t.pageY - i.offset.top + (isNaN(f) ? 0 : f) - 1, i.offset.left = t.pageX - i.offset.left + (isNaN(e) ? 0 : e) - 1, r.dragBetween || (f = n(i.container).outerHeight() == 0 ? Math.max(1, Math.round(.5 + n(i.container).children(r.itemSelector).size() * i.draggedItem.outerWidth() / n(i.container).outerWidth())) * i.draggedItem.outerHeight() : n(i.container).outerHeight(), i.offsetLimit = n(i.container).offset(), i.offsetLimit.right = i.offsetLimit.left + n(i.container).outerWidth() - i.draggedItem.outerWidth(), i.offsetLimit.bottom = i.offsetLimit.top + f - i.draggedItem.outerHeight()), f = i.draggedItem.height(), e = i.draggedItem.width(), o = i.draggedItem.attr("style"), i.draggedItem.attr("data-origStyle", o ? o : ""), r.itemSelector == "tr" ? (i.draggedItem.children().each(function() {
							n(this).width(n(this).width())
						}), i.placeHolderItem = i.draggedItem.clone().attr("data-placeHolder", !0), i.draggedItem.after(i.placeHolderItem), i.placeHolderItem.children().each(function() {
							n(this).css({
								borderWidth: 0,
								width: n(this).width() + 1,
								height: n(this).height() + 1
							}).html("&nbsp;")
						})) : (i.draggedItem.after(r.placeHolderTemplate), i.placeHolderItem = i.draggedItem.next().css({
							height: f,
							width: e
						}).attr("data-placeHolder", !0)), i.draggedItem.css({
							position: "absolute",
							opacity: .8,
							"z-index": 999,
							height: f,
							width: e
						}), n(u).each(function(n, t) {
							t.createDropTargets(), t.buildPositionTable()
						}), i.scroll = {
							moveX: 0,
							moveY: 0,
							maxX: n(document).width() - n(window).width(),
							maxY: n(document).height() - n(window).height()
						}, i.scroll.scrollY = window.setInterval(function() {
							if (r.scrollContainer != window) n(r.scrollContainer).scrollTop(n(r.scrollContainer).scrollTop() + i.scroll.moveY);
							else {
								var t = n(r.scrollContainer).scrollTop();
								(i.scroll.moveY > 0 && t < i.scroll.maxY || i.scroll.moveY < 0 && t > 0) && (n(r.scrollContainer).scrollTop(t + i.scroll.moveY), i.draggedItem.css("top", i.draggedItem.offset().top + i.scroll.moveY + 1))
							}
						}, 10), i.scroll.scrollX = window.setInterval(function() {
							if (r.scrollContainer != window) n(r.scrollContainer).scrollLeft(n(r.scrollContainer).scrollLeft() + i.scroll.moveX);
							else {
								var t = n(r.scrollContainer).scrollLeft();
								(i.scroll.moveX > 0 && t < i.scroll.maxX || i.scroll.moveX < 0 && t > 0) && (n(r.scrollContainer).scrollLeft(t + i.scroll.moveX), i.draggedItem.css("left", i.draggedItem.offset().left + i.scroll.moveX + 1))
							}
						}, 10), i.setPos(t.pageX, t.pageY), n(document).bind("selectstart", i.stopBubble), n(document).bind("mousemove", i.swapItems), n(document).bind("mouseup", i.dropItem), r.scrollContainer != window && n(window).bind("DOMMouseScroll mousewheel", i.wheel), !1
					}
				},
				setPos: function(t, u) {
					var e = u - this.offset.top,
						s = t - this.offset.left,
						o, f;
					r.dragBetween || (e = Math.min(this.offsetLimit.bottom, Math.max(e, this.offsetLimit.top)), s = Math.min(this.offsetLimit.right, Math.max(s, this.offsetLimit.left))), this.draggedItem.parents().each(function() {
						if (n(this).css("position") != "static" && (!n.browser.mozilla || n(this).css("display") != "table")) {
							var t = n(this).offset();
							return e -= t.top, s -= t.left, !1
						}
					}), r.scrollContainer == window ? (u -= n(window).scrollTop(), t -= n(window).scrollLeft(), u = Math.max(0, u - n(window).height() + 5) + Math.min(0, u - 5), t = Math.max(0, t - n(window).width() + 5) + Math.min(0, t - 5)) : (o = n(r.scrollContainer), f = o.offset(), u = Math.max(0, u - o.height() - f.top) + Math.min(0, u - f.top), t = Math.max(0, t - o.width() - f.left) + Math.min(0, t - f.left)), i.scroll.moveX = t == 0 ? 0 : t * r.scrollSpeed / Math.abs(t), i.scroll.moveY = u == 0 ? 0 : u * r.scrollSpeed / Math.abs(u), this.draggedItem.css({
						top: e,
						left: s
					})
				},
				wheel: function(t) {
					if ((n.browser.safari || n.browser.mozilla) && i && r.scrollContainer != window) {
						var f = n(r.scrollContainer),
							u = f.offset();
						t.pageX > u.left && t.pageX < u.left + f.width() && t.pageY > u.top && t.pageY < u.top + f.height() && (u = t.detail ? t.detail * 5 : t.wheelDelta / -2, f.scrollTop(f.scrollTop() + u), t.preventDefault())
					}
				},
				buildPositionTable: function() {
					var i = this.draggedItem == null ? null : this.draggedItem.get(0),
						t = [];
					n(this.container).children(r.itemSelector).each(function(r, u) {
						if (u != i) {
							var f = n(u).offset();
							f.right = f.left + n(u).width(), f.bottom = f.top + n(u).height(), f.elm = u, t.push(f)
						}
					}), this.pos = t
				},
				dropItem: function() {
					if (i.draggedItem != null) {
						n(i.container).find(r.dragSelector).css("cursor", "pointer"), i.placeHolderItem.before(i.draggedItem), i.draggedItem.attr("style", i.draggedItem.attr("data-origStyle")).removeAttr("data-origStyle"), i.placeHolderItem.remove(), n("[data-dropTarget]").remove(), window.clearInterval(i.scroll.scrollY), window.clearInterval(i.scroll.scrollX);
						var t = !1;
						return n(u).each(function() {
							n(this.container).children(r.itemSelector).each(function(i) {
								parseInt(n(this).attr("data-itemIdx")) != i && (t = !0, n(this).attr("data-itemIdx", i))
							})
						}), t && r.dragEnd.apply(i.draggedItem), i.draggedItem = null, n(document).unbind("selectstart", i.stopBubble), n(document).unbind("mousemove", i.swapItems), n(document).unbind("mouseup", i.dropItem), r.scrollContainer != window && n(window).unbind("DOMMouseScroll mousewheel", i.wheel), !1
					}
				},
				stopBubble: function() {
					return !1
				},
				swapItems: function(t) {
					if (i.draggedItem == null) return !1;
					i.setPos(t.pageX, t.pageY);
					for (var e = i.findPos(t.pageX, t.pageY), s = i, o = 0; e == -1 && r.dragBetween && o < u.length; o++) e = u[o].findPos(t.pageX, t.pageY), s = u[o];
					return e == -1 || n(s.pos[e].elm).attr("data-placeHolder") ? !1 : (f == null || f.top > i.draggedItem.offset().top || f.left > i.draggedItem.offset().left ? n(s.pos[e].elm).before(i.placeHolderItem) : n(s.pos[e].elm).after(i.placeHolderItem), n(u).each(function(n, t) {
						t.createDropTargets(), t.buildPositionTable()
					}), f = i.draggedItem.offset(), !1)
				},
				findPos: function(n, t) {
					for (var i = 0; i < this.pos.length; i++) if (this.pos[i].left < n && this.pos[i].right > n && this.pos[i].top < t && this.pos[i].bottom > t) return i;
					return -1
				},
				createDropTargets: function() {
					r.dragBetween && n(u).each(function() {
						var r = n(this.container).find("[data-placeHolder]"),
							t = n(this.container).find("[data-dropTarget]");
						r.size() > 0 && t.size() > 0 ? t.remove() : r.size() == 0 && t.size() == 0 && n(this.container).append(i.placeHolderItem.clone().removeAttr("data-placeHolder").attr("data-dropTarget", !0))
					})
				}
			};
			o.init(), u.push(o)
		}), this
	}, n.fn.dragsort.defaults = {
		itemSelector: "li",
		dragSelector: "li",
		dragSelectorExclude: "input, textarea, a[href]",
		dragEnd: function() {},
		dragBetween: !1,
		placeHolderTemplate: "<li>&nbsp;</li>",
		scrollContainer: window,
		scrollSpeed: 5
	}
}(jQuery), function(n) {
	function f() {
		n.each(t, function() {
			this.refresh(!0)
		})
	}
	var t = [],
		u = /^url\(["']?([^"'\)]*)["']?\);?$/i,
		r = /\.png$/i,
		i = !! window.createPopup && document.documentElement.currentStyle.minWidth == "undefined";
	n(window).resize(f), n.Poshytip = function(t, i) {
		this.$elm = n(t), this.opts = n.extend({}, n.fn.poshytip.defaults, i), this.$tip = n(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join("")).appendTo(document.body), this.$arrow = this.$tip.find("div.tip-arrow"), this.$inner = this.$tip.find("div.tip-inner"), this.disabled = !1, this.content = null, this.init()
	}, n.Poshytip.prototype = {
		init: function() {
			t.push(this);
			var i = this.$elm.attr("title");
			if (this.$elm.data("title.poshytip", i !== undefined ? i : null).data("poshytip", this), this.opts.showOn != "none") {
				this.$elm.bind({
					"mouseenter.poshytip": n.proxy(this.mouseenter, this),
					"mouseleave.poshytip": n.proxy(this.mouseleave, this)
				});
				switch (this.opts.showOn) {
				case "hover":
					this.opts.alignTo == "cursor" && this.$elm.bind("mousemove.poshytip", n.proxy(this.mousemove, this)), this.opts.allowTipHover && this.$tip.hover(n.proxy(this.clearTimeouts, this), n.proxy(this.mouseleave, this));
					break;
				case "focus":
					this.$elm.bind({
						"focus.poshytip": n.proxy(this.showDelayed, this),
						"blur.poshytip": n.proxy(this.hideDelayed, this)
					})
				}
			}
		},
		mouseenter: function() {
			if (this.disabled || (this.$elm.attr("title", ""), this.opts.showOn == "focus")) return !0;
			this.showDelayed()
		},
		mouseleave: function(n) {
			if (this.disabled || this.asyncAnimating && (this.$tip[0] === n.relatedTarget || jQuery.contains(this.$tip[0], n.relatedTarget))) return !0;
			if (!this.$tip.data("active")) {
				var t = this.$elm.data("title.poshytip");
				t !== null && this.$elm.attr("title", t)
			}
			if (this.opts.showOn == "focus") return !0;
			this.hideDelayed()
		},
		mousemove: function(n) {
			if (this.disabled) return !0;
			this.eventX = n.pageX, this.eventY = n.pageY, this.opts.followCursor && this.$tip.data("active") && (this.calcPos(), this.$tip.css({
				left: this.pos.l,
				top: this.pos.t
			}), this.pos.arrow && (this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow))
		},
		show: function() {
			this.disabled || this.$tip.data("active") || (this.reset(), this.update(), this.content) && (this.display(), this.opts.timeOnScreen && this.hideDelayed(this.opts.timeOnScreen))
		},
		showDelayed: function(t) {
			this.clearTimeouts(), this.showTimeout = setTimeout(n.proxy(this.show, this), typeof t == "number" ? t : this.opts.showTimeout)
		},
		hide: function() {
			!this.disabled && this.$tip.data("active") && this.display(!0)
		},
		hideDelayed: function(t) {
			this.clearTimeouts(), this.hideTimeout = setTimeout(n.proxy(this.hide, this), typeof t == "number" ? t : this.opts.hideTimeout)
		},
		reset: function() {
			this.$tip.queue([]).detach().css("visibility", "hidden").data("active", !1), this.$inner.find("*").poshytip("hide"), this.opts.fade && this.$tip.css("opacity", this.opacity), this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left", this.asyncAnimating = !1
		},
		update: function(n, t) {
			var r, u, i;
			if (!this.disabled) {
				if (r = n !== undefined, r) {
					if (t || (this.opts.content = n), !this.$tip.data("active")) return
				} else n = this.opts.content;
				u = this, i = typeof n == "function" ? n.call(this.$elm[0], function(n) {
					u.update(n)
				}) : n == "[title]" ? this.$elm.data("title.poshytip") : n, this.content !== i && (this.$inner.empty().append(i), this.content = i), this.refresh(r)
			}
		},
		refresh: function(t) {
			var v, s, f, h, e, a;
			if (!this.disabled) {
				if (t) {
					if (!this.$tip.data("active")) return;
					v = {
						left: this.$tip.css("left"),
						top: this.$tip.css("top")
					}
				}
				if (this.$tip.css({
					left: 0,
					top: 0
				}).appendTo(document.body), this.opacity === undefined && (this.opacity = this.$tip.css("opacity")), s = this.$tip.css("background-image").match(u), f = this.$arrow.css("background-image").match(u), s && (h = r.test(s[1]), i && h ? (this.$tip.css("background-image", "none"), this.$inner.css({
					margin: 0,
					border: 0,
					padding: 0
				}), s = h = !1) : this.$tip.prepend('<table class="tip-table" border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({
					border: 0,
					padding: 0,
					"background-image": "none",
					"background-color": "transparent"
				}).find(".tip-bg-image").css("background-image", 'url("' + s[1] + '")').end().find("td").eq(3).append(this.$inner), h && !n.support.opacity && (this.opts.fade = !1)), f && !n.support.opacity && (i && r.test(f[1]) && (f = !1, this.$arrow.css("background-image", "none")), this.opts.fade = !1), e = this.$tip.find("> table.tip-table"), i) {
					this.$tip[0].style.width = "", e.width("auto").find("td").eq(3).width("auto");
					var o = this.$tip.width(),
						l = parseInt(this.$tip.css("min-width")),
						c = parseInt(this.$tip.css("max-width"));
					!isNaN(l) && o < l ? o = l : !isNaN(c) && o > c && (o = c), this.$tip.add(e).width(o).eq(0).find("td").eq(3).width("100%")
				} else e[0] && e.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find("td").eq(3).width("100%");
				this.tipOuterW = this.$tip.outerWidth(), this.tipOuterH = this.$tip.outerHeight(), this.calcPos(), f && this.pos.arrow && (this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow, this.$arrow.css("visibility", "inherit")), t && this.opts.refreshAniDuration ? (this.asyncAnimating = !0, a = this, this.$tip.css(v).animate({
					left: this.pos.l,
					top: this.pos.t
				}, this.opts.refreshAniDuration, function() {
					a.asyncAnimating = !1
				})) : this.$tip.css({
					left: this.pos.l,
					top: this.pos.t
				})
			}
		},
		display: function(t) {
			var f = this.$tip.data("active"),
				e, u, i, r, s, o;
			(!f || t) && (f || !t) && (this.$tip.stop(), (this.opts.slide && this.pos.arrow || this.opts.fade) && (t && this.opts.hideAniDuration || !t && this.opts.showAniDuration) && (e = {}, u = {}, this.opts.slide && this.pos.arrow && (this.pos.arrow == "bottom" || this.pos.arrow == "top" ? (i = "top", r = "bottom") : (i = "left", r = "right"), s = parseInt(this.$tip.css(i)), e[i] = s + (t ? 0 : this.pos.arrow == r ? -this.opts.slideOffset : this.opts.slideOffset), u[i] = s + (t ? this.pos.arrow == r ? this.opts.slideOffset : -this.opts.slideOffset : 0) + "px"), this.opts.fade && (e.opacity = t ? this.$tip.css("opacity") : 0, u.opacity = t ? 0 : this.opacity), this.$tip.css(e).animate(u, this.opts[t ? "hideAniDuration" : "showAniDuration"])), t ? this.$tip.queue(n.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit"), f && (o = this.$elm.data("title.poshytip"), o !== null && this.$elm.attr("title", o)), this.$tip.data("active", !f))
		},
		disable: function() {
			this.reset(), this.disabled = !0
		},
		enable: function() {
			this.disabled = !1
		},
		destroy: function() {
			this.reset(), this.$tip.remove(), delete this.$tip, this.content = null, this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip"), t.splice(n.inArray(this, t), 1)
		},
		clearTimeouts: function() {
			this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0), this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0)
		},
		calcPos: function() {
			var t = {
				l: 0,
				t: 0,
				arrow: ""
			},
				o = n(window),
				i = {
					l: o.scrollLeft(),
					t: o.scrollTop(),
					w: o.width(),
					h: o.height()
				},
				f, c, s, u, l, e, h, r;
			this.opts.alignTo == "cursor" ? (f = c = s = this.eventX, u = l = e = this.eventY) : (h = this.$elm.offset(), r = {
				l: h.left,
				t: h.top,
				w: this.$elm.outerWidth(),
				h: this.$elm.outerHeight()
			}, f = r.l + (this.opts.alignX != "inner-right" ? 0 : r.w), c = f + Math.floor(r.w / 2), s = f + (this.opts.alignX != "inner-left" ? r.w : 0), u = r.t + (this.opts.alignY != "inner-bottom" ? 0 : r.h), l = u + Math.floor(r.h / 2), e = u + (this.opts.alignY != "inner-top" ? r.h : 0));
			switch (this.opts.alignX) {
			case "right":
			case "inner-left":
				t.l = s + this.opts.offsetX, this.opts.keepInViewport && t.l + this.tipOuterW > i.l + i.w && (t.l = i.l + i.w - this.tipOuterW), (this.opts.alignX == "right" || this.opts.alignY == "center") && (t.arrow = "left");
				break;
			case "center":
				t.l = c - Math.floor(this.tipOuterW / 2), this.opts.keepInViewport && (t.l + this.tipOuterW > i.l + i.w ? t.l = i.l + i.w - this.tipOuterW : t.l < i.l && (t.l = i.l));
				break;
			default:
				t.l = f - this.tipOuterW - this.opts.offsetX, this.opts.keepInViewport && t.l < i.l && (t.l = i.l), (this.opts.alignX == "left" || this.opts.alignY == "center") && (t.arrow = "right")
			}
			switch (this.opts.alignY) {
			case "bottom":
			case "inner-top":
				t.t = e + this.opts.offsetY, t.arrow && this.opts.alignTo != "cursor" || (t.arrow = "top"), this.opts.keepInViewport && t.t + this.tipOuterH > i.t + i.h && (t.t = u - this.tipOuterH - this.opts.offsetY, t.arrow == "top" && (t.arrow = "bottom"));
				break;
			case "center":
				t.t = l - Math.floor(this.tipOuterH / 2), this.opts.keepInViewport && (t.t + this.tipOuterH > i.t + i.h ? t.t = i.t + i.h - this.tipOuterH : t.t < i.t && (t.t = i.t));
				break;
			default:
				t.t = u - this.tipOuterH - this.opts.offsetY, t.arrow && this.opts.alignTo != "cursor" || (t.arrow = "bottom"), this.opts.keepInViewport && t.t < i.t && (t.t = e + this.opts.offsetY, t.arrow == "bottom" && (t.arrow = "top"))
			}
			this.pos = t
		}
	}, n.fn.poshytip = function(t) {
		var e, u, i, r, f;
		if (typeof t == "string") return e = arguments, u = t, Array.prototype.shift.call(e), u == "destroy" && (this.die ? this.die("mouseenter.poshytip").die("focus.poshytip") : n(document).undelegate(this.selector, "mouseenter.poshytip").undelegate(this.selector, "focus.poshytip")), this.each(function() {
			var t = n(this).data("poshytip");
			t && t[u] && t[u].apply(t, e)
		});
		if (i = n.extend({}, n.fn.poshytip.defaults, t), n("#poshytip-css-" + i.className)[0] || n(['<style id="poshytip-css-', i.className, '" type="text/css">', "div.", i.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", i.className, " table.tip-table, div.", i.className, " table.tip-table td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;vertical-align:middle;}", "div.", i.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", i.bgImageFrameSize, "px;width:", i.bgImageFrameSize, "px;overflow:hidden;}", "div.", i.className, " td.tip-right{background-position:100% 0;}", "div.", i.className, " td.tip-bottom{background-position:100% 100%;}", "div.", i.className, " td.tip-left{background-position:0 100%;}", "div.", i.className, " div.tip-inner{background-position:-", i.bgImageFrameSize, "px -", i.bgImageFrameSize, "px;}", "div.", i.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"].join("")).appendTo("head"), i.liveEvents && i.showOn != "none") {
			f = n.extend({}, i, {
				liveEvents: !1
			});
			switch (i.showOn) {
			case "hover":
				r = function() {
					var t = n(this);
					t.data("poshytip") || t.poshytip(f).poshytip("mouseenter")
				}, this.live ? this.live("mouseenter.poshytip", r) : n(document).delegate(this.selector, "mouseenter.poshytip", r);
				break;
			case "focus":
				r = function() {
					var t = n(this);
					t.data("poshytip") || t.poshytip(f).poshytip("showDelayed")
				}, this.live ? this.live("focus.poshytip", r) : n(document).delegate(this.selector, "focus.poshytip", r)
			}
			return this
		}
		return this.each(function() {
			new n.Poshytip(this, i)
		})
	}, n.fn.poshytip.defaults = {
		content: "[title]",
		className: "tip-yellow",
		bgImageFrameSize: 10,
		showTimeout: 500,
		hideTimeout: 100,
		timeOnScreen: 0,
		showOn: "hover",
		liveEvents: !1,
		alignTo: "cursor",
		alignX: "right",
		alignY: "top",
		offsetX: -22,
		offsetY: 18,
		keepInViewport: !0,
		allowTipHover: !0,
		followCursor: !1,
		fade: !0,
		slide: !0,
		slideOffset: 8,
		showAniDuration: 300,
		hideAniDuration: 300,
		refreshAniDuration: 200
	}
}(jQuery), !
function() {
	"use strict";

	function f(n) {
		n.fn.swiper = function(i) {
			var r;
			return n(this).each(function() {
				var n = new t(this, i);
				r || (r = n)
			}), r
		}
	}
	var n, t = function(i, r) {
			function f() {
				return "horizontal" === u.params.direction
			}
			function g(n) {
				return Math.floor(n)
			}
			function st() {
				u.autoplayTimeoutId = setTimeout(function() {
					u.params.loop ? (u.fixLoop(), u._slideNext()) : u.isEnd ? r.autoplayStopOnLast ? u.stopAutoplay() : u._slideTo(0) : u._slideNext()
				}, u.params.autoplay)
			}
			function ht(t, i) {
				var r = n(t.target),
					u;
				if (!r.is(i)) if ("string" == typeof i) r = r.parents(i);
				else if (i.nodeType) return r.parents().each(function(n, t) {
					t === i && (u = i)
				}), u ? i : void 0;
				if (0 !== r.length) return r[0]
			}
			function et(n, t) {
				t = t || {};
				var r = window.MutationObserver || window.WebkitMutationObserver,
					i = new r(function(n) {
						n.forEach(function(n) {
							u.onResize(!0), u.emit("onObserverUpdate", u, n)
						})
					});
				i.observe(n, {
					attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
					childList: "undefined" == typeof t.childList ? !0 : t.childList,
					characterData: "undefined" == typeof t.characterData ? !0 : t.characterData
				}), u.observers.push(i)
			}
			function at(n) {
				var t, h, s, e, r;
				if ((n.originalEvent && (n = n.originalEvent), t = n.keyCode || n.charCode, !u.params.allowSwipeToNext && (f() && 39 === t || !f() && 40 === t)) || !u.params.allowSwipeToPrev && (f() && 37 === t || !f() && 38 === t)) return !1;
				if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
					if (37 === t || 39 === t || 38 === t || 40 === t) {
						if (h = !1, u.container.parents(".swiper-slide").length > 0 && 0 === u.container.parents(".swiper-slide-active").length) return;
						var o = {
							left: window.pageXOffset,
							top: window.pageYOffset
						},
							c = window.innerWidth,
							l = window.innerHeight,
							i = u.container.offset();
						for (u.rtl && (i.left = i.left - u.container[0].scrollLeft), s = [
							[i.left, i.top],
							[i.left + u.width, i.top],
							[i.left, i.top + u.height],
							[i.left + u.width, i.top + u.height]
						], e = 0; e < s.length; e++) r = s[e], r[0] >= o.left && r[0] <= o.left + c && r[1] >= o.top && r[1] <= o.top + l && (h = !0);
						if (!h) return
					}
					f() ? ((37 === t || 39 === t) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (39 === t && !u.rtl || 37 === t && u.rtl) && u.slideNext(), (37 === t && !u.rtl || 39 === t && u.rtl) && u.slidePrev()) : ((38 === t || 40 === t) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 40 === t && u.slideNext(), 38 === t && u.slidePrev())
				}
			}
			function vt(n) {
				var r, t, i;
				if (n.originalEvent && (n = n.originalEvent), r = u.mousewheel.event, t = 0, n.detail) t = -n.detail;
				else if ("mousewheel" === r) if (u.params.mousewheelForceToAxis) if (f()) {
					if (!(Math.abs(n.wheelDeltaX) > Math.abs(n.wheelDeltaY))) return;
					t = n.wheelDeltaX
				} else {
					if (!(Math.abs(n.wheelDeltaY) > Math.abs(n.wheelDeltaX))) return;
					t = n.wheelDeltaY
				} else t = n.wheelDelta;
				else if ("DOMMouseScroll" === r) t = -n.detail;
				else if ("wheel" === r) if (u.params.mousewheelForceToAxis) if (f()) {
					if (!(Math.abs(n.deltaX) > Math.abs(n.deltaY))) return;
					t = -n.deltaX
				} else {
					if (!(Math.abs(n.deltaY) > Math.abs(n.deltaX))) return;
					t = -n.deltaY
				} else t = Math.abs(n.deltaX) > Math.abs(n.deltaY) ? -n.deltaX : -n.deltaY;
				if (u.params.mousewheelInvert && (t = -t), u.params.freeMode) {
					if (i = u.getWrapperTranslate() + t * u.params.mousewheelSensitivity, i > u.minTranslate() && (i = u.minTranslate()), i < u.maxTranslate() && (i = u.maxTranslate()), u.setWrapperTransition(0), u.setWrapperTranslate(i), u.updateProgress(), u.updateActiveIndex(), u.params.freeModeSticky && (clearTimeout(u.mousewheel.timeout), u.mousewheel.timeout = setTimeout(function() {
						u.slideReset()
					}, 300)), 0 === i || i === u.maxTranslate()) return
				} else {
					if ((new window.Date).getTime() - u.mousewheel.lastScrollTime > 60) if (0 > t) if (u.isEnd && !u.params.loop || u.animating) {
						if (u.params.mousewheelReleaseOnEdges) return !0
					} else u.slideNext();
					else if (u.isBeginning && !u.params.loop || u.animating) {
						if (u.params.mousewheelReleaseOnEdges) return !0
					} else u.slidePrev();
					u.mousewheel.lastScrollTime = (new window.Date).getTime()
				}
				return u.params.autoplay && u.stopAutoplay(), n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
			}
			function lt(t, i) {
				t = n(t);
				var e, r, u;
				e = t.attr("data-swiper-parallax") || "0", r = t.attr("data-swiper-parallax-x"), u = t.attr("data-swiper-parallax-y"), r || u ? (r = r || "0", u = u || "0") : f() ? (r = e, u = "0") : (u = e, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i + "%" : r * i + "px", u = u.indexOf("%") >= 0 ? parseInt(u, 10) * i + "%" : u * i + "px", t.transform("translate3d(" + r + ", " + u + ",0px)")
			}
			function ot(n) {
				return 0 !== n.indexOf("on") && (n = n[0] !== n[0].toUpperCase() ? "on" + n[0].toUpperCase() + n.substring(1) : "on" + n), n
			}
			var p, ct, s, d, u, a, nt, tt, it, rt;
			if (!(this instanceof t)) return new t(i, r);
			p = {
				direction: "horizontal",
				touchEventsTarget: "container",
				initialSlide: 0,
				speed: 300,
				autoplay: !1,
				autoplayDisableOnInteraction: !0,
				iOSEdgeSwipeDetection: !1,
				iOSEdgeSwipeThreshold: 20,
				freeMode: !1,
				freeModeMomentum: !0,
				freeModeMomentumRatio: 1,
				freeModeMomentumBounce: !0,
				freeModeMomentumBounceRatio: 1,
				freeModeSticky: !1,
				freeModeMinimumVelocity: .02,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				coverflow: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				},
				cube: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				},
				fade: {
					crossFade: !1
				},
				parallax: !1,
				scrollbar: null,
				scrollbarHide: !0,
				scrollbarDraggable: !1,
				scrollbarSnapOnRelease: !1,
				keyboardControl: !1,
				mousewheelControl: !1,
				mousewheelReleaseOnEdges: !1,
				mousewheelInvert: !1,
				mousewheelForceToAxis: !1,
				mousewheelSensitivity: 1,
				hashnav: !1,
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerColumnFill: "column",
				slidesPerGroup: 1,
				centeredSlides: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: .5,
				longSwipesMs: 300,
				followFinger: !0,
				onlyExternal: !1,
				threshold: 0,
				touchMoveStopPropagation: !0,
				pagination: null,
				paginationElement: "span",
				paginationClickable: !1,
				paginationHide: !1,
				paginationBulletRender: null,
				resistance: !0,
				resistanceRatio: .85,
				nextButton: null,
				prevButton: null,
				watchSlidesProgress: !1,
				watchSlidesVisibility: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				lazyLoading: !1,
				lazyLoadingInPrevNext: !1,
				lazyLoadingOnTransitionStart: !1,
				preloadImages: !0,
				updateOnImagesReady: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				loopedSlides: null,
				control: void 0,
				controlInverse: !1,
				controlBy: "slide",
				allowSwipeToPrev: !0,
				allowSwipeToNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				slideClass: "swiper-slide",
				slideActiveClass: "swiper-slide-active",
				slideVisibleClass: "swiper-slide-visible",
				slideDuplicateClass: "swiper-slide-duplicate",
				slideNextClass: "swiper-slide-next",
				slidePrevClass: "swiper-slide-prev",
				wrapperClass: "swiper-wrapper",
				bulletClass: "swiper-pagination-bullet",
				bulletActiveClass: "swiper-pagination-bullet-active",
				buttonDisabledClass: "swiper-button-disabled",
				paginationHiddenClass: "swiper-pagination-hidden",
				observer: !1,
				observeParents: !1,
				a11y: !1,
				prevSlideMessage: "Previous slide",
				nextSlideMessage: "Next slide",
				firstSlideMessage: "This is the first slide",
				lastSlideMessage: "This is the last slide",
				paginationBulletMessage: "Go to slide {{index}}",
				runCallbacksOnInit: !0
			}, ct = r && r.virtualTranslate, r = r || {};
			for (s in p) if ("undefined" == typeof r[s]) r[s] = p[s];
			else if ("object" == typeof r[s]) for (d in p[s])"undefined" == typeof r[s][d] && (r[s][d] = p[s][d]);
			if (u = this, u.params = r, u.classNames = [], "undefined" != typeof n && "undefined" != typeof Dom7 && (n = Dom7), ("undefined" != typeof n || (n = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (u.$ = n, u.container = n(i), 0 !== u.container.length)) {
				if (u.container.length > 1) return void u.container.each(function() {
					new t(this, r)
				});
				u.container[0].swiper = u, u.container.data("swiper", u), u.classNames.push("swiper-container-" + u.params.direction), u.params.freeMode && u.classNames.push("swiper-container-free-mode"), u.support.flexbox || (u.classNames.push("swiper-container-no-flexbox"), u.params.slidesPerColumn = 1), (u.params.parallax || u.params.watchSlidesVisibility) && (u.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(u.params.effect) >= 0 && (u.support.transforms3d ? (u.params.watchSlidesProgress = !0, u.classNames.push("swiper-container-3d")) : u.params.effect = "slide"), "slide" !== u.params.effect && u.classNames.push("swiper-container-" + u.params.effect), "cube" === u.params.effect && (u.params.resistanceRatio = 0, u.params.slidesPerView = 1, u.params.slidesPerColumn = 1, u.params.slidesPerGroup = 1, u.params.centeredSlides = !1, u.params.spaceBetween = 0, u.params.virtualTranslate = !0, u.params.setWrapperSize = !1), "fade" === u.params.effect && (u.params.slidesPerView = 1, u.params.slidesPerColumn = 1, u.params.slidesPerGroup = 1, u.params.watchSlidesProgress = !0, u.params.spaceBetween = 0, "undefined" == typeof ct && (u.params.virtualTranslate = !0)), u.params.grabCursor && u.support.touch && (u.params.grabCursor = !1), u.wrapper = u.container.children("." + u.params.wrapperClass), u.params.pagination && (u.paginationContainer = n(u.params.pagination), u.params.paginationClickable && u.paginationContainer.addClass("swiper-pagination-clickable")), u.rtl = f() && ("rtl" === u.container[0].dir.toLowerCase() || "rtl" === u.container.css("direction")), u.rtl && u.classNames.push("swiper-container-rtl"), u.rtl && (u.wrongRTL = "-webkit-box" === u.wrapper.css("display")), u.params.slidesPerColumn > 1 && u.classNames.push("swiper-container-multirow"), u.device.android && u.classNames.push("swiper-container-android"), u.container.addClass(u.classNames.join(" ")), u.translate = 0, u.progress = 0, u.velocity = 0, u.lockSwipeToNext = function() {
					u.params.allowSwipeToNext = !1
				}, u.lockSwipeToPrev = function() {
					u.params.allowSwipeToPrev = !1
				}, u.lockSwipes = function() {
					u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !1
				}, u.unlockSwipeToNext = function() {
					u.params.allowSwipeToNext = !0
				}, u.unlockSwipeToPrev = function() {
					u.params.allowSwipeToPrev = !0
				}, u.unlockSwipes = function() {
					u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !0
				}, u.params.grabCursor && (u.container[0].style.cursor = "move", u.container[0].style.cursor = "-webkit-grab", u.container[0].style.cursor = "-moz-grab", u.container[0].style.cursor = "grab"), u.imagesToLoad = [], u.imagesLoaded = 0, u.loadImage = function(n, t, i, r, u) {
					function e() {
						u && u()
					}
					var f;
					n.complete && r ? e() : t ? (f = new window.Image, f.onload = e, f.onerror = e, i && (f.srcset = i), t && (f.src = t)) : e()
				}, u.preloadImages = function() {
					function t() {
						"undefined" != typeof u && null !== u && (void 0 !== u.imagesLoaded && u.imagesLoaded++, u.imagesLoaded === u.imagesToLoad.length && (u.params.updateOnImagesReady && u.update(), u.emit("onImagesReady", u)))
					}
					u.imagesToLoad = u.container.find("img");
					for (var n = 0; n < u.imagesToLoad.length; n++) u.loadImage(u.imagesToLoad[n], u.imagesToLoad[n].currentSrc || u.imagesToLoad[n].getAttribute("src"), u.imagesToLoad[n].srcset || u.imagesToLoad[n].getAttribute("srcset"), !0, t)
				}, u.autoplayTimeoutId = void 0, u.autoplaying = !1, u.autoplayPaused = !1, u.startAutoplay = function() {
					return "undefined" != typeof u.autoplayTimeoutId ? !1 : u.params.autoplay ? u.autoplaying ? !1 : (u.autoplaying = !0, u.emit("onAutoplayStart", u), void st()) : !1
				}, u.stopAutoplay = function() {
					u.autoplayTimeoutId && (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId), u.autoplaying = !1, u.autoplayTimeoutId = void 0, u.emit("onAutoplayStop", u))
				}, u.pauseAutoplay = function(n) {
					u.autoplayPaused || (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId), u.autoplayPaused = !0, 0 === n ? (u.autoplayPaused = !1, st()) : u.wrapper.transitionEnd(function() {
						u && (u.autoplayPaused = !1, u.autoplaying ? st() : u.stopAutoplay())
					}))
				}, u.minTranslate = function() {
					return -u.snapGrid[0]
				}, u.maxTranslate = function() {
					return -u.snapGrid[u.snapGrid.length - 1]
				}, u.updateContainerSize = function() {
					var t, n;
					t = "undefined" != typeof u.params.width ? u.params.width : u.container[0].clientWidth, n = "undefined" != typeof u.params.height ? u.params.height : u.container[0].clientHeight, 0 === t && f() || 0 === n && !f() || (t = t - parseInt(u.container.css("padding-left"), 10) - parseInt(u.container.css("padding-right"), 10), n = n - parseInt(u.container.css("padding-top"), 10) - parseInt(u.container.css("padding-bottom"), 10), u.width = t, u.height = n, u.size = f() ? u.width : u.height)
				}, u.updateSlidesSize = function() {
					var l, s, h, o, e, c;
					u.slides = u.wrapper.children("." + u.params.slideClass), u.snapGrid = [], u.slidesGrid = [], u.slidesSizesGrid = [];
					var n, i = u.params.spaceBetween,
						r = -u.params.slidesOffsetBefore,
						p = 0,
						y = 0;
					"string" == typeof i && i.indexOf("%") >= 0 && (i = parseFloat(i.replace("%", "")) / 100 * u.size), u.virtualSize = -i, u.rtl ? u.slides.css({
						marginLeft: "",
						marginTop: ""
					}) : u.slides.css({
						marginRight: "",
						marginBottom: ""
					}), u.params.slidesPerColumn > 1 && (l = Math.floor(u.slides.length / u.params.slidesPerColumn) === u.slides.length / u.params.slidesPerColumn ? u.slides.length : Math.ceil(u.slides.length / u.params.slidesPerColumn) * u.params.slidesPerColumn, "auto" !== u.params.slidesPerView && "row" === u.params.slidesPerColumnFill && (l = Math.max(l, u.params.slidesPerView * u.params.slidesPerColumn)));
					var t, a = u.params.slidesPerColumn,
						v = l / a,
						w = v - (u.params.slidesPerColumn * v - u.slides.length);
					for (n = 0; n < u.slides.length; n++) t = 0, s = u.slides.eq(n), u.params.slidesPerColumn > 1 && ("column" === u.params.slidesPerColumnFill ? (o = Math.floor(n / a), e = n - o * a, (o > w || o === w && e === a - 1) && ++e >= a && (e = 0, o++), h = o + e * l / a, s.css({
						"-webkit-box-ordinal-group": h,
						"-moz-box-ordinal-group": h,
						"-ms-flex-order": h,
						"-webkit-order": h,
						order: h
					})) : (e = Math.floor(n / v), o = n - e * v), s.css({
						"margin-top": 0 !== e && u.params.spaceBetween && u.params.spaceBetween + "px"
					}).attr("data-swiper-column", o).attr("data-swiper-row", e)), "none" !== s.css("display") && ("auto" === u.params.slidesPerView ? (t = f() ? s.outerWidth(!0) : s.outerHeight(!0), u.params.roundLengths && (t = g(t))) : (t = (u.size - (u.params.slidesPerView - 1) * i) / u.params.slidesPerView, u.params.roundLengths && (t = g(t)), f() ? u.slides[n].style.width = t + "px" : u.slides[n].style.height = t + "px"), u.slides[n].swiperSlideSize = t, u.slidesSizesGrid.push(t), u.params.centeredSlides ? (r = r + t / 2 + p / 2 + i, 0 === n && (r = r - u.size / 2 - i), Math.abs(r) < .001 && (r = 0), y % u.params.slidesPerGroup == 0 && u.snapGrid.push(r), u.slidesGrid.push(r)) : (y % u.params.slidesPerGroup == 0 && u.snapGrid.push(r), u.slidesGrid.push(r), r = r + t + i), u.virtualSize += t + i, p = t, y++);
					if (u.virtualSize = Math.max(u.virtualSize, u.size) + u.params.slidesOffsetAfter, u.rtl && u.wrongRTL && ("slide" === u.params.effect || "coverflow" === u.params.effect) && u.wrapper.css({
						width: u.virtualSize + u.params.spaceBetween + "px"
					}), (!u.support.flexbox || u.params.setWrapperSize) && (f() ? u.wrapper.css({
						width: u.virtualSize + u.params.spaceBetween + "px"
					}) : u.wrapper.css({
						height: u.virtualSize + u.params.spaceBetween + "px"
					})), u.params.slidesPerColumn > 1 && (u.virtualSize = (t + u.params.spaceBetween) * l, u.virtualSize = Math.ceil(u.virtualSize / u.params.slidesPerColumn) - u.params.spaceBetween, u.wrapper.css({
						width: u.virtualSize + u.params.spaceBetween + "px"
					}), u.params.centeredSlides)) {
						for (c = [], n = 0; n < u.snapGrid.length; n++) u.snapGrid[n] < u.virtualSize + u.snapGrid[0] && c.push(u.snapGrid[n]);
						u.snapGrid = c
					}
					if (!u.params.centeredSlides) {
						for (c = [], n = 0; n < u.snapGrid.length; n++) u.snapGrid[n] <= u.virtualSize - u.size && c.push(u.snapGrid[n]);
						u.snapGrid = c, Math.floor(u.virtualSize - u.size) > Math.floor(u.snapGrid[u.snapGrid.length - 1]) && u.snapGrid.push(u.virtualSize - u.size)
					}
					0 === u.snapGrid.length && (u.snapGrid = [0]), 0 !== u.params.spaceBetween && (f() ? u.rtl ? u.slides.css({
						marginLeft: i + "px"
					}) : u.slides.css({
						marginRight: i + "px"
					}) : u.slides.css({
						marginBottom: i + "px"
					})), u.params.watchSlidesProgress && u.updateSlidesOffset()
				}, u.updateSlidesOffset = function() {
					for (var n = 0; n < u.slides.length; n++) u.slides[n].swiperSlideOffset = f() ? u.slides[n].offsetLeft : u.slides[n].offsetTop
				}, u.updateSlidesProgress = function(n) {
					var e, t, i, s;
					if ("undefined" == typeof n && (n = u.translate || 0), 0 !== u.slides.length) for ("undefined" == typeof u.slides[0].swiperSlideOffset && u.updateSlidesOffset(), e = -n, u.rtl && (e = n), u.container[0].getBoundingClientRect(), f() ? "left" : "top", f() ? "right" : "bottom", u.slides.removeClass(u.params.slideVisibleClass), t = 0; t < u.slides.length; t++) {
						if (i = u.slides[t], s = (e - i.swiperSlideOffset) / (i.swiperSlideSize + u.params.spaceBetween), u.params.watchSlidesVisibility) {
							var r = -(e - i.swiperSlideOffset),
								o = r + u.slidesSizesGrid[t],
								h = r >= 0 && r < u.size || o > 0 && o <= u.size || 0 >= r && o >= u.size;
							h && u.slides.eq(t).addClass(u.params.slideVisibleClass)
						}
						i.progress = u.rtl ? -s : s
					}
				}, u.updateProgress = function(n) {
					"undefined" == typeof n && (n = u.translate || 0);
					var t = u.maxTranslate() - u.minTranslate();
					0 === t ? (u.progress = 0, u.isBeginning = u.isEnd = !0) : (u.progress = (n - u.minTranslate()) / t, u.isBeginning = u.progress <= 0, u.isEnd = u.progress >= 1), u.isBeginning && u.emit("onReachBeginning", u), u.isEnd && u.emit("onReachEnd", u), u.params.watchSlidesProgress && u.updateSlidesProgress(n), u.emit("onProgress", u, u.progress)
				}, u.updateActiveIndex = function() {
					for (var t, r, i = u.rtl ? u.translate : -u.translate, n = 0; n < u.slidesGrid.length; n++)"undefined" != typeof u.slidesGrid[n + 1] ? i >= u.slidesGrid[n] && i < u.slidesGrid[n + 1] - (u.slidesGrid[n + 1] - u.slidesGrid[n]) / 2 ? t = n : i >= u.slidesGrid[n] && i < u.slidesGrid[n + 1] && (t = n + 1) : i >= u.slidesGrid[n] && (t = n);
					(0 > t || "undefined" == typeof t) && (t = 0), r = Math.floor(t / u.params.slidesPerGroup), r >= u.snapGrid.length && (r = u.snapGrid.length - 1), t !== u.activeIndex && (u.snapIndex = r, u.previousIndex = u.activeIndex, u.activeIndex = t, u.updateClasses())
				}, u.updateClasses = function() {
					var i, t;
					u.slides.removeClass(u.params.slideActiveClass + " " + u.params.slideNextClass + " " + u.params.slidePrevClass), i = u.slides.eq(u.activeIndex), (i.addClass(u.params.slideActiveClass), i.next("." + u.params.slideClass).addClass(u.params.slideNextClass), i.prev("." + u.params.slideClass).addClass(u.params.slidePrevClass), u.bullets && u.bullets.length > 0) && (u.bullets.removeClass(u.params.bulletActiveClass), u.params.loop ? (t = Math.ceil(u.activeIndex - u.loopedSlides) / u.params.slidesPerGroup, t > u.slides.length - 1 - 2 * u.loopedSlides && (t -= u.slides.length - 2 * u.loopedSlides), t > u.bullets.length - 1 && (t -= u.bullets.length)) : t = "undefined" != typeof u.snapIndex ? u.snapIndex : u.activeIndex || 0, u.paginationContainer.length > 1 ? u.bullets.each(function() {
						n(this).index() === t && n(this).addClass(u.params.bulletActiveClass)
					}) : u.bullets.eq(t).addClass(u.params.bulletActiveClass)), u.params.loop || (u.params.prevButton && (u.isBeginning ? (n(u.params.prevButton).addClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.disable(n(u.params.prevButton))) : (n(u.params.prevButton).removeClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.enable(n(u.params.prevButton)))), u.params.nextButton && (u.isEnd ? (n(u.params.nextButton).addClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.disable(n(u.params.nextButton))) : (n(u.params.nextButton).removeClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.enable(n(u.params.nextButton)))))
				}, u.updatePagination = function() {
					if (u.params.pagination && u.paginationContainer && u.paginationContainer.length > 0) {
						for (var t = "", i = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length, n = 0; i > n; n++) t += u.params.paginationBulletRender ? u.params.paginationBulletRender(n, u.params.bulletClass) : "<" + u.params.paginationElement + ' class="' + u.params.bulletClass + '"></' + u.params.paginationElement + ">";
						u.paginationContainer.html(t), u.bullets = u.paginationContainer.find("." + u.params.bulletClass), u.params.paginationClickable && u.params.a11y && u.a11y && u.a11y.initPagination()
					}
				}, u.update = function(n) {
					function r() {
						t = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate()), u.setWrapperTranslate(t), u.updateActiveIndex(), u.updateClasses()
					}
					if (u.updateContainerSize(), u.updateSlidesSize(), u.updateProgress(), u.updatePagination(), u.updateClasses(), u.params.scrollbar && u.scrollbar && u.scrollbar.set(), n) {
						var i, t;
						u.controller && u.controller.spline && (u.controller.spline = void 0), u.params.freeMode ? r() : (i = ("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0), i || r())
					}
				}, u.onResize = function(n) {
					var i = u.params.allowSwipeToPrev,
						r = u.params.allowSwipeToNext,
						t;
					(u.params.allowSwipeToPrev = u.params.allowSwipeToNext = !0, u.updateContainerSize(), u.updateSlidesSize(), ("auto" === u.params.slidesPerView || u.params.freeMode || n) && u.updatePagination(), u.params.scrollbar && u.scrollbar && u.scrollbar.set(), u.controller && u.controller.spline && (u.controller.spline = void 0), u.params.freeMode) ? (t = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate()), u.setWrapperTranslate(t), u.updateActiveIndex(), u.updateClasses()) : (u.updateClasses(), ("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0)), u.params.allowSwipeToPrev = i, u.params.allowSwipeToNext = r
				}, a = ["mousedown", "mousemove", "mouseup"], window.navigator.pointerEnabled ? a = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (a = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), u.touchEvents = {
					start: u.support.touch || !u.params.simulateTouch ? "touchstart" : a[0],
					move: u.support.touch || !u.params.simulateTouch ? "touchmove" : a[1],
					end: u.support.touch || !u.params.simulateTouch ? "touchend" : a[2]
				}, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === u.params.touchEventsTarget ? u.container : u.wrapper).addClass("swiper-wp8-" + u.params.direction), u.initEvents = function(t) {
					var e = t ? "off" : "on",
						i = t ? "removeEventListener" : "addEventListener",
						f = "container" === u.params.touchEventsTarget ? u.container[0] : u.wrapper[0],
						s = u.support.touch ? f : document,
						o = u.params.nested ? !0 : !1;
					u.browser.ie ? (f[i](u.touchEvents.start, u.onTouchStart, !1), s[i](u.touchEvents.move, u.onTouchMove, o), s[i](u.touchEvents.end, u.onTouchEnd, !1)) : (u.support.touch && (f[i](u.touchEvents.start, u.onTouchStart, !1), f[i](u.touchEvents.move, u.onTouchMove, o), f[i](u.touchEvents.end, u.onTouchEnd, !1)), !r.simulateTouch || u.device.ios || u.device.android || (f[i]("mousedown", u.onTouchStart, !1), document[i]("mousemove", u.onTouchMove, o), document[i]("mouseup", u.onTouchEnd, !1))), window[i]("resize", u.onResize), u.params.nextButton && (n(u.params.nextButton)[e]("click", u.onClickNext), u.params.a11y && u.a11y && n(u.params.nextButton)[e]("keydown", u.a11y.onEnterKey)), u.params.prevButton && (n(u.params.prevButton)[e]("click", u.onClickPrev), u.params.a11y && u.a11y && n(u.params.prevButton)[e]("keydown", u.a11y.onEnterKey)), u.params.pagination && u.params.paginationClickable && (n(u.paginationContainer)[e]("click", "." + u.params.bulletClass, u.onClickIndex), u.params.a11y && u.a11y && n(u.paginationContainer)[e]("keydown", "." + u.params.bulletClass, u.a11y.onEnterKey)), (u.params.preventClicks || u.params.preventClicksPropagation) && f[i]("click", u.preventClicks, !0)
				}, u.attachEvents = function() {
					u.initEvents()
				}, u.detachEvents = function() {
					u.initEvents(!0)
				}, u.allowClick = !0, u.preventClicks = function(n) {
					u.allowClick || (u.params.preventClicks && n.preventDefault(), u.params.preventClicksPropagation && u.animating && (n.stopPropagation(), n.stopImmediatePropagation()))
				}, u.onClickNext = function(n) {
					n.preventDefault(), (!u.isEnd || u.params.loop) && u.slideNext()
				}, u.onClickPrev = function(n) {
					n.preventDefault(), (!u.isBeginning || u.params.loop) && u.slidePrev()
				}, u.onClickIndex = function(t) {
					t.preventDefault();
					var i = n(this).index() * u.params.slidesPerGroup;
					u.params.loop && (i += u.loopedSlides), u.slideTo(i)
				}, u.updateClickedSlide = function(t) {
					var r = ht(t, "." + u.params.slideClass),
						o = !1,
						f, e, i;
					if (r) for (f = 0; f < u.slides.length; f++) u.slides[f] === r && (o = !0);
					if (!r || !o) return u.clickedSlide = void 0, void(u.clickedIndex = void 0);
					if (u.clickedSlide = r, u.clickedIndex = n(r).index(), u.params.slideToClickedSlide && void 0 !== u.clickedIndex && u.clickedIndex !== u.activeIndex) if (i = u.clickedIndex, u.params.loop) {
						if (u.animating) return;
						e = n(u.clickedSlide).attr("data-swiper-slide-index"), u.params.centeredSlides ? i < u.loopedSlides - u.params.slidesPerView / 2 || i > u.slides.length - u.loopedSlides + u.params.slidesPerView / 2 ? (u.fixLoop(), i = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
							u.slideTo(i)
						}, 0)) : u.slideTo(i) : i > u.slides.length - u.params.slidesPerView ? (u.fixLoop(), i = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
							u.slideTo(i)
						}, 0)) : u.slideTo(i)
					} else u.slideTo(i)
				};
				var h, c, k, y, e, o, b, v, w, ft = "input, select, textarea, button",
					ut = Date.now(),
					l = [];
				if (u.animating = !1, u.touches = {
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0,
					diff: 0
				}, u.onTouchStart = function(t) {
					var r, f, i;
					if (t.originalEvent && (t = t.originalEvent), nt = "touchstart" === t.type, nt || !("which" in t) || 3 !== t.which) {
						if (u.params.noSwiping && ht(t, "." + u.params.noSwipingClass)) return void(u.allowClick = !0);
						(!u.params.swipeHandler || ht(t, u.params.swipeHandler)) && (r = u.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, f = u.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY, u.device.ios && u.params.iOSEdgeSwipeDetection && r <= u.params.iOSEdgeSwipeThreshold || ((h = !0, c = !1, y = void 0, tt = void 0, u.touches.startX = r, u.touches.startY = f, k = Date.now(), u.allowClick = !0, u.updateContainerSize(), u.swipeDirection = void 0, u.params.threshold > 0 && (b = !1), "touchstart" !== t.type) && (i = !0, n(t.target).is(ft) && (i = !1), document.activeElement && n(document.activeElement).is(ft) && document.activeElement.blur(), i && t.preventDefault()), u.emit("onTouchStart", u, t)))
					}
				}, u.onTouchMove = function(t) {
					var a, i, s;
					if (t.originalEvent && (t = t.originalEvent), !(nt && "mousemove" === t.type || t.preventedByNestedSwiper)) {
						if (u.params.onlyExternal) return u.allowClick = !1, void(h && (u.touches.startX = u.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, u.touches.startY = u.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, k = Date.now()));
						if (nt && document.activeElement && t.target === document.activeElement && n(t.target).is(ft)) return c = !0, void(u.allowClick = !1);
						if ((u.emit("onTouchMove", u, t), !(t.targetTouches && t.targetTouches.length > 1)) && ((u.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, u.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, "undefined" == typeof y) && (a = 180 * Math.atan2(Math.abs(u.touches.currentY - u.touches.startY), Math.abs(u.touches.currentX - u.touches.startX)) / Math.PI, y = f() ? a > u.params.touchAngle : 90 - a > u.params.touchAngle), y && u.emit("onTouchMoveOpposite", u, t), "undefined" == typeof tt && u.browser.ieTouch && (u.touches.currentX !== u.touches.startX || u.touches.currentY !== u.touches.startY) && (tt = !0), h)) {
							if (y) return void(h = !1);
							if ((tt || !u.browser.ieTouch) && (u.allowClick = !1, u.emit("onSliderMove", u, t), t.preventDefault(), u.params.touchMoveStopPropagation && !u.params.nested && t.stopPropagation(), c || (r.loop && u.fixLoop(), o = u.getWrapperTranslate(), u.setWrapperTransition(0), u.animating && u.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), u.params.autoplay && u.autoplaying && (u.params.autoplayDisableOnInteraction ? u.stopAutoplay() : u.pauseAutoplay()), w = !1, u.params.grabCursor && (u.container[0].style.cursor = "move", u.container[0].style.cursor = "-webkit-grabbing", u.container[0].style.cursor = "-moz-grabbin", u.container[0].style.cursor = "grabbing")), c = !0, i = u.touches.diff = f() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY, i *= u.params.touchRatio, u.rtl && (i = -i), u.swipeDirection = i > 0 ? "prev" : "next", e = i + o, s = !0, i > 0 && e > u.minTranslate() ? (s = !1, u.params.resistance && (e = u.minTranslate() - 1 + Math.pow(-u.minTranslate() + o + i, u.params.resistanceRatio))) : 0 > i && e < u.maxTranslate() && (s = !1, u.params.resistance && (e = u.maxTranslate() + 1 - Math.pow(u.maxTranslate() - o - i, u.params.resistanceRatio))), s && (t.preventedByNestedSwiper = !0), !u.params.allowSwipeToNext && "next" === u.swipeDirection && o > e && (e = o), !u.params.allowSwipeToPrev && "prev" === u.swipeDirection && e > o && (e = o), u.params.followFinger)) {
								if (u.params.threshold > 0) {
									if (!(Math.abs(i) > u.params.threshold || b)) return void(e = o);
									if (!b) return b = !0, u.touches.startX = u.touches.currentX, u.touches.startY = u.touches.currentY, e = o, void(u.touches.diff = f() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY)
								}(u.params.freeMode || u.params.watchSlidesProgress) && u.updateActiveIndex(), u.params.freeMode && (0 === l.length && l.push({
									position: u.touches[f() ? "startX" : "startY"],
									time: k
								}), l.push({
									position: u.touches[f() ? "currentX" : "currentY"],
									time: (new window.Date).getTime()
								})), u.updateProgress(e), u.setWrapperTranslate(e)
							}
						}
					}
				}, u.onTouchEnd = function(t) {
					var it, b, s, nt, d, p, y, a, r, f, tt, ft;
					if (t.originalEvent && (t = t.originalEvent), u.emit("onTouchEnd", u, t), h) {
						if (u.params.grabCursor && c && h && (u.container[0].style.cursor = "move", u.container[0].style.cursor = "-webkit-grab", u.container[0].style.cursor = "-moz-grab", u.container[0].style.cursor = "grab"), it = Date.now(), b = it - k, u.allowClick && (u.updateClickedSlide(t), u.emit("onTap", u, t), 300 > b && it - ut > 300 && (v && clearTimeout(v), v = setTimeout(function() {
							u && (u.params.paginationHide && u.paginationContainer.length > 0 && !n(t.target).hasClass(u.params.bulletClass) && u.paginationContainer.toggleClass(u.params.paginationHiddenClass), u.emit("onClick", u, t))
						}, 300)), 300 > b && 300 > it - ut && (v && clearTimeout(v), u.emit("onDoubleTap", u, t))), ut = Date.now(), setTimeout(function() {
							u && (u.allowClick = !0)
						}, 0), !h || !c || !u.swipeDirection || 0 === u.touches.diff || e === o) return void(h = c = !1);
						if (h = c = !1, s = u.params.followFinger ? u.rtl ? u.translate : -u.translate : -e, u.params.freeMode) {
							if (s < -u.minTranslate()) return void u.slideTo(u.activeIndex);
							if (s > -u.maxTranslate()) return void(u.slides.length < u.snapGrid.length ? u.slideTo(u.snapGrid.length - 1) : u.slideTo(u.slides.length - 1));
							if (u.params.freeModeMomentum) {
								if (l.length > 1) {
									var rt = l.pop(),
										et = l.pop(),
										ht = rt.position - et.position,
										ot = rt.time - et.time;
									u.velocity = ht / ot, u.velocity = u.velocity / 2, Math.abs(u.velocity) < u.params.freeModeMinimumVelocity && (u.velocity = 0), (ot > 150 || (new window.Date).getTime() - rt.time > 300) && (u.velocity = 0)
								} else u.velocity = 0;
								l.length = 0;
								var g = 1e3 * u.params.freeModeMomentumRatio,
									st = u.velocity * g,
									i = u.translate + st;
								if (u.rtl && (i = -i), d = !1, p = 20 * Math.abs(u.velocity) * u.params.freeModeMomentumBounceRatio, i < u.maxTranslate()) u.params.freeModeMomentumBounce ? (i + u.maxTranslate() < -p && (i = u.maxTranslate() - p), nt = u.maxTranslate(), d = !0, w = !0) : i = u.maxTranslate();
								else if (i > u.minTranslate()) u.params.freeModeMomentumBounce ? (i - u.minTranslate() > p && (i = u.minTranslate() + p), nt = u.minTranslate(), d = !0, w = !0) : i = u.minTranslate();
								else if (u.params.freeModeSticky) {
									for (a = 0, a = 0; a < u.snapGrid.length; a += 1) if (u.snapGrid[a] > -i) {
										y = a;
										break
									}
									i = Math.abs(u.snapGrid[y] - i) < Math.abs(u.snapGrid[y - 1] - i) || "next" === u.swipeDirection ? u.snapGrid[y] : u.snapGrid[y - 1], u.rtl || (i = -i)
								}
								if (0 !== u.velocity) g = u.rtl ? Math.abs((-i - u.translate) / u.velocity) : Math.abs((i - u.translate) / u.velocity);
								else if (u.params.freeModeSticky) return void u.slideReset();
								u.params.freeModeMomentumBounce && d ? (u.updateProgress(nt), u.setWrapperTransition(g), u.setWrapperTranslate(i), u.onTransitionStart(), u.animating = !0, u.wrapper.transitionEnd(function() {
									u && w && (u.emit("onMomentumBounce", u), u.setWrapperTransition(u.params.speed), u.setWrapperTranslate(nt), u.wrapper.transitionEnd(function() {
										u && u.onTransitionEnd()
									}))
								})) : u.velocity ? (u.updateProgress(i), u.setWrapperTransition(g), u.setWrapperTranslate(i), u.onTransitionStart(), u.animating || (u.animating = !0, u.wrapper.transitionEnd(function() {
									u && u.onTransitionEnd()
								}))) : u.updateProgress(i), u.updateActiveIndex()
							}
							return void((!u.params.freeModeMomentum || b >= u.params.longSwipesMs) && (u.updateProgress(), u.updateActiveIndex()))
						}
						for (f = 0, tt = u.slidesSizesGrid[0], r = 0; r < u.slidesGrid.length; r += u.params.slidesPerGroup)"undefined" != typeof u.slidesGrid[r + u.params.slidesPerGroup] ? s >= u.slidesGrid[r] && s < u.slidesGrid[r + u.params.slidesPerGroup] && (f = r, tt = u.slidesGrid[r + u.params.slidesPerGroup] - u.slidesGrid[r]) : s >= u.slidesGrid[r] && (f = r, tt = u.slidesGrid[u.slidesGrid.length - 1] - u.slidesGrid[u.slidesGrid.length - 2]);
						if (ft = (s - u.slidesGrid[f]) / tt, b > u.params.longSwipesMs) {
							if (!u.params.longSwipes) return void u.slideTo(u.activeIndex);
							"next" === u.swipeDirection && (ft >= u.params.longSwipesRatio ? u.slideTo(f + u.params.slidesPerGroup) : u.slideTo(f)), "prev" === u.swipeDirection && (ft > 1 - u.params.longSwipesRatio ? u.slideTo(f + u.params.slidesPerGroup) : u.slideTo(f))
						} else {
							if (!u.params.shortSwipes) return void u.slideTo(u.activeIndex);
							"next" === u.swipeDirection && u.slideTo(f + u.params.slidesPerGroup), "prev" === u.swipeDirection && u.slideTo(f)
						}
					}
				}, u._slideTo = function(n, t) {
					return u.slideTo(n, t, !0, !0)
				}, u.slideTo = function(n, t, i, r) {
					var e, o;
					for ("undefined" == typeof i && (i = !0), "undefined" == typeof n && (n = 0), 0 > n && (n = 0), u.snapIndex = Math.floor(n / u.params.slidesPerGroup), u.snapIndex >= u.snapGrid.length && (u.snapIndex = u.snapGrid.length - 1), e = -u.snapGrid[u.snapIndex], u.params.autoplay && u.autoplaying && (r || !u.params.autoplayDisableOnInteraction ? u.pauseAutoplay(t) : u.stopAutoplay()), u.updateProgress(e), o = 0; o < u.slidesGrid.length; o++) - Math.floor(100 * e) >= Math.floor(100 * u.slidesGrid[o]) && (n = o);
					return !u.params.allowSwipeToNext && e < u.translate && e < u.minTranslate() ? !1 : !u.params.allowSwipeToPrev && e > u.translate && e > u.maxTranslate() && (u.activeIndex || 0) !== n ? !1 : ("undefined" == typeof t && (t = u.params.speed), u.previousIndex = u.activeIndex || 0, u.activeIndex = n, e === u.translate) ? (u.updateClasses(), !1) : (u.updateClasses(), u.onTransitionStart(i), f() ? e : 0, f() ? 0 : e, 0 === t ? (u.setWrapperTransition(0), u.setWrapperTranslate(e), u.onTransitionEnd(i)) : (u.setWrapperTransition(t), u.setWrapperTranslate(e), u.animating || (u.animating = !0, u.wrapper.transitionEnd(function() {
						u && u.onTransitionEnd(i)
					}))), !0)
				}, u.onTransitionStart = function(n) {
					"undefined" == typeof n && (n = !0), u.lazy && u.lazy.onTransitionStart(), n && (u.emit("onTransitionStart", u), u.activeIndex !== u.previousIndex && u.emit("onSlideChangeStart", u))
				}, u.onTransitionEnd = function(n) {
					u.animating = !1, u.setWrapperTransition(0), "undefined" == typeof n && (n = !0), u.lazy && u.lazy.onTransitionEnd(), n && (u.emit("onTransitionEnd", u), u.activeIndex !== u.previousIndex && u.emit("onSlideChangeEnd", u)), u.params.hashnav && u.hashnav && u.hashnav.setHash()
				}, u.slideNext = function(n, t, i) {
					return u.params.loop ? u.animating ? !1 : (u.fixLoop(), u.container[0].clientLeft, u.slideTo(u.activeIndex + u.params.slidesPerGroup, t, n, i)) : u.slideTo(u.activeIndex + u.params.slidesPerGroup, t, n, i)
				}, u._slideNext = function(n) {
					return u.slideNext(!0, n, !0)
				}, u.slidePrev = function(n, t, i) {
					return u.params.loop ? u.animating ? !1 : (u.fixLoop(), u.container[0].clientLeft, u.slideTo(u.activeIndex - 1, t, n, i)) : u.slideTo(u.activeIndex - 1, t, n, i)
				}, u._slidePrev = function(n) {
					return u.slidePrev(!0, n, !0)
				}, u.slideReset = function(n, t) {
					return u.slideTo(u.activeIndex, t, n)
				}, u.setWrapperTransition = function(n, t) {
					u.wrapper.transition(n), "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTransition(n), u.params.parallax && u.parallax && u.parallax.setTransition(n), u.params.scrollbar && u.scrollbar && u.scrollbar.setTransition(n), u.params.control && u.controller && u.controller.setTransition(n, t), u.emit("onSetTransition", u, n)
				}, u.setWrapperTranslate = function(n, t, i) {
					var e = 0,
						r = 0,
						o = 0;
					f() ? e = u.rtl ? -n : n : r = n, u.params.roundLengths && (e = g(e), r = g(r)), u.params.virtualTranslate || (u.support.transforms3d ? u.wrapper.transform("translate3d(" + e + "px, " + r + "px, " + o + "px)") : u.wrapper.transform("translate(" + e + "px, " + r + "px)")), u.translate = f() ? e : r, t && u.updateActiveIndex(), "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTranslate(u.translate), u.params.parallax && u.parallax && u.parallax.setTranslate(u.translate), u.params.scrollbar && u.scrollbar && u.scrollbar.setTranslate(u.translate), u.params.control && u.controller && u.controller.setTranslate(u.translate, i), u.emit("onSetTranslate", u, u.translate)
				}, u.getTranslate = function(n, t) {
					var f, i, r, e;
					return "undefined" == typeof t && (t = "x"), u.params.virtualTranslate ? u.rtl ? -u.translate : u.translate : (r = window.getComputedStyle(n, null), window.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function(n) {
						return n.replace(",", ".")
					}).join(", ")), e = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (e = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), f = e.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? e.m41 : 16 === f.length ? parseFloat(f[12]) : parseFloat(f[4])), "y" === t && (i = window.WebKitCSSMatrix ? e.m42 : 16 === f.length ? parseFloat(f[13]) : parseFloat(f[5])), u.rtl && i && (i = -i), i || 0)
				}, u.getWrapperTranslate = function(n) {
					return "undefined" == typeof n && (n = f() ? "x" : "y"), u.getTranslate(u.wrapper[0], n)
				}, u.observers = [], u.initObservers = function() {
					if (u.params.observeParents) for (var t = u.container.parents(), n = 0; n < t.length; n++) et(t[n]);
					et(u.container[0], {
						childList: !1
					}), et(u.wrapper[0], {
						attributes: !1
					})
				}, u.disconnectObservers = function() {
					for (var n = 0; n < u.observers.length; n++) u.observers[n].disconnect();
					u.observers = []
				}, u.createLoop = function() {
					var i, t, f, r;
					for (u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove(), i = u.wrapper.children("." + u.params.slideClass), "auto" !== u.params.slidesPerView || u.params.loopedSlides || (u.params.loopedSlides = i.length), u.loopedSlides = parseInt(u.params.loopedSlides || u.params.slidesPerView, 10), u.loopedSlides = u.loopedSlides + u.params.loopAdditionalSlides, u.loopedSlides > i.length && (u.loopedSlides = i.length), f = [], r = [], i.each(function(t, e) {
						var o = n(this);
						t < u.loopedSlides && r.push(e), t < i.length && t >= i.length - u.loopedSlides && f.push(e), o.attr("data-swiper-slide-index", t)
					}), t = 0; t < r.length; t++) u.wrapper.append(n(r[t].cloneNode(!0)).addClass(u.params.slideDuplicateClass));
					for (t = f.length - 1; t >= 0; t--) u.wrapper.prepend(n(f[t].cloneNode(!0)).addClass(u.params.slideDuplicateClass))
				}, u.destroyLoop = function() {
					u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove(), u.slides.removeAttr("data-swiper-slide-index")
				}, u.fixLoop = function() {
					var n;
					u.activeIndex < u.loopedSlides ? (n = u.slides.length - 3 * u.loopedSlides + u.activeIndex, n += u.loopedSlides, u.slideTo(n, 0, !1, !0)) : ("auto" === u.params.slidesPerView && u.activeIndex >= 2 * u.loopedSlides || u.activeIndex > u.slides.length - 2 * u.params.slidesPerView) && (n = -u.slides.length + u.activeIndex + u.loopedSlides, n += u.loopedSlides, u.slideTo(n, 0, !1, !0))
				}, u.appendSlide = function(n) {
					if (u.params.loop && u.destroyLoop(), "object" == typeof n && n.length) for (var t = 0; t < n.length; t++) n[t] && u.wrapper.append(n[t]);
					else u.wrapper.append(n);
					u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0)
				}, u.prependSlide = function(n) {
					var i, t;
					if (u.params.loop && u.destroyLoop(), i = u.activeIndex + 1, "object" == typeof n && n.length) {
						for (t = 0; t < n.length; t++) n[t] && u.wrapper.prepend(n[t]);
						i = u.activeIndex + n.length
					} else u.wrapper.prepend(n);
					u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0), u.slideTo(i, 0, !1)
				}, u.removeSlide = function(n) {
					var i, t, r;
					if (u.params.loop && (u.destroyLoop(), u.slides = u.wrapper.children("." + u.params.slideClass)), t = u.activeIndex, "object" == typeof n && n.length) {
						for (r = 0; r < n.length; r++) i = n[r], u.slides[i] && u.slides.eq(i).remove(), t > i && t--;
						t = Math.max(t, 0)
					} else i = n, u.slides[i] && u.slides.eq(i).remove(), t > i && t--, t = Math.max(t, 0);
					u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0), u.params.loop ? u.slideTo(t + u.loopedSlides, 0, !1) : u.slideTo(t, 0, !1)
				}, u.removeAllSlides = function() {
					for (var t = [], n = 0; n < u.slides.length; n++) t.push(n);
					u.removeSlide(t)
				}, u.effects = {
					fade: {
						setTranslate: function() {
							for (var r, e, i = 0; i < u.slides.length; i++) {
								var t = u.slides.eq(i),
									o = t[0].swiperSlideOffset,
									n = -o;
								u.params.virtualTranslate || (n -= u.translate), r = 0, f() || (r = n, n = 0), e = u.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0), t.css({
									opacity: e
								}).transform("translate3d(" + n + "px, " + r + "px, 0px)")
							}
						},
						setTransition: function(n) {
							if (u.slides.transition(n), u.params.virtualTranslate && 0 !== n) {
								var t = !1;
								u.slides.transitionEnd(function() {
									if (!t && u) {
										t = !0, u.animating = !1;
										for (var i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < i.length; n++) u.wrapper.trigger(i[n])
									}
								})
							}
						}
					},
					cube: {
						setTranslate: function() {
							var r, h = 0,
								t, k, o, s, y;
							for (u.params.cube.shadow && (f() ? (r = u.wrapper.find(".swiper-cube-shadow"), 0 === r.length && (r = n('<div class="swiper-cube-shadow"></div>'), u.wrapper.append(r)), r.css({
								height: u.width + "px"
							})) : (r = u.container.find(".swiper-cube-shadow"), 0 === r.length && (r = n('<div class="swiper-cube-shadow"></div>'), u.container.append(r)))), t = 0; t < u.slides.length; t++) {
								var i = u.slides.eq(t),
									c = 90 * t,
									a = Math.floor(c / 360);
								u.rtl && (c = -c, a = Math.floor(-c / 360));
								var v = Math.max(Math.min(i[0].progress, 1), -1),
									e = 0,
									b = 0,
									l = 0;
								t % 4 == 0 ? (e = 4 * -a * u.size, l = 0) : (t - 1) % 4 == 0 ? (e = 0, l = 4 * -a * u.size) : (t - 2) % 4 == 0 ? (e = u.size + 4 * a * u.size, l = u.size) : (t - 3) % 4 == 0 && (e = -u.size, l = 3 * u.size + 4 * u.size * a), u.rtl && (e = -e), f() || (b = e, e = 0), k = "rotateX(" + (f() ? 0 : -c) + "deg) rotateY(" + (f() ? c : 0) + "deg) translate3d(" + e + "px, " + b + "px, " + l + "px)", (1 >= v && v > -1 && (h = 90 * t + 90 * v, u.rtl && (h = 90 * -t - 90 * v)), i.transform(k), u.params.cube.slideShadows) && (o = f() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"), s = f() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom"), 0 === o.length && (o = n('<div class="swiper-slide-shadow-' + (f() ? "left" : "top") + '"></div>'), i.append(o)), 0 === s.length && (s = n('<div class="swiper-slide-shadow-' + (f() ? "right" : "bottom") + '"></div>'), i.append(s)), i[0].progress, o.length && (o[0].style.opacity = -i[0].progress), s.length && (s[0].style.opacity = i[0].progress))
							}
							if (u.wrapper.css({
								"-webkit-transform-origin": "50% 50% -" + u.size / 2 + "px",
								"-moz-transform-origin": "50% 50% -" + u.size / 2 + "px",
								"-ms-transform-origin": "50% 50% -" + u.size / 2 + "px",
								"transform-origin": "50% 50% -" + u.size / 2 + "px"
							}), u.params.cube.shadow) if (f()) r.transform("translate3d(0px, " + (u.width / 2 + u.params.cube.shadowOffset) + "px, " + -u.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.params.cube.shadowScale + ")");
							else {
								var w = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
									d = 1.5 - (Math.sin(2 * w * Math.PI / 360) / 2 + Math.cos(2 * w * Math.PI / 360) / 2),
									nt = u.params.cube.shadowScale,
									p = u.params.cube.shadowScale / d,
									g = u.params.cube.shadowOffset;
								r.transform("scale3d(" + nt + ", 1, " + p + ") translate3d(0px, " + (u.height / 2 + g) + "px, " + -u.height / 2 / p + "px) rotateX(-90deg)")
							}
							y = u.isSafari || u.isUiWebView ? -u.size / 2 : 0, u.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (f() ? 0 : h) + "deg) rotateY(" + (f() ? -h : 0) + "deg)")
						},
						setTransition: function(n) {
							u.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n), u.params.cube.shadow && !f() && u.container.find(".swiper-cube-shadow").transition(n)
						}
					},
					coverflow: {
						setTranslate: function() {
							for (var v, r, e, y, k = u.translate, p = f() ? -k + u.width / 2 : -k + u.height / 2, w = f() ? u.params.coverflow.rotate : -u.params.coverflow.rotate, nt = u.params.coverflow.depth, o = 0, d = u.slides.length; d > o; o++) {
								var i = u.slides.eq(o),
									b = u.slidesSizesGrid[o],
									g = i[0].swiperSlideOffset,
									t = (p - g - b / 2) / b * u.params.coverflow.modifier,
									h = f() ? w * t : 0,
									l = f() ? 0 : w * t,
									c = -nt * Math.abs(t),
									s = f() ? 0 : u.params.coverflow.stretch * t,
									a = f() ? u.params.coverflow.stretch * t : 0;
								Math.abs(a) < .001 && (a = 0), Math.abs(s) < .001 && (s = 0), Math.abs(c) < .001 && (c = 0), Math.abs(h) < .001 && (h = 0), Math.abs(l) < .001 && (l = 0), v = "translate3d(" + a + "px," + s + "px," + c + "px)  rotateX(" + l + "deg) rotateY(" + h + "deg)", (i.transform(v), i[0].style.zIndex = -Math.abs(Math.round(t)) + 1, u.params.coverflow.slideShadows) && (r = f() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"), e = f() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom"), 0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (f() ? "left" : "top") + '"></div>'), i.append(r)), 0 === e.length && (e = n('<div class="swiper-slide-shadow-' + (f() ? "right" : "bottom") + '"></div>'), i.append(e)), r.length && (r[0].style.opacity = t > 0 ? t : 0), e.length && (e[0].style.opacity = -t > 0 ? -t : 0))
							}
							u.browser.ie && (y = u.wrapper[0].style, y.perspectiveOrigin = p + "px 50%")
						},
						setTransition: function(n) {
							u.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n)
						}
					}
				}, u.lazy = {
					initialImageLoaded: !1,
					loadImageInSlide: function(t, i) {
						if ("undefined" != typeof t && ("undefined" == typeof i && (i = !0), 0 !== u.slides.length)) {
							var r = u.slides.eq(t),
								f = r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
							!r.hasClass("swiper-lazy") || r.hasClass("swiper-lazy-loaded") || r.hasClass("swiper-lazy-loading") || (f = f.add(r[0])), 0 !== f.length && f.each(function() {
								var t = n(this);
								t.addClass("swiper-lazy-loading");
								var o = t.attr("data-background"),
									e = t.attr("data-src"),
									f = t.attr("data-srcset");
								u.loadImage(t[0], e || o, f, !1, function() {
									var n, h, s;
									(o ? (t.css("background-image", "url(" + o + ")"), t.removeAttr("data-background")) : (f && (t.attr("srcset", f), t.removeAttr("data-srcset")), e && (t.attr("src", e), t.removeAttr("data-src"))), t.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), r.find(".swiper-lazy-preloader, .preloader").remove(), u.params.loop && i) && (n = r.attr("data-swiper-slide-index"), r.hasClass(u.params.slideDuplicateClass) ? (h = u.wrapper.children('[data-swiper-slide-index="' + n + '"]:not(.' + u.params.slideDuplicateClass + ")"), u.lazy.loadImageInSlide(h.index(), !1)) : (s = u.wrapper.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]'), u.lazy.loadImageInSlide(s.index(), !1))), u.emit("onLazyImageReady", u, r[0], t[0])
								}), u.emit("onLazyImageLoad", u, r[0], t[0])
							})
						}
					},
					load: function() {
						var t, r, i;
						if (u.params.watchSlidesVisibility) u.wrapper.children("." + u.params.slideVisibleClass).each(function() {
							u.lazy.loadImageInSlide(n(this).index())
						});
						else if (u.params.slidesPerView > 1) for (t = u.activeIndex; t < u.activeIndex + u.params.slidesPerView; t++) u.slides[t] && u.lazy.loadImageInSlide(t);
						else u.lazy.loadImageInSlide(u.activeIndex);
						if (u.params.lazyLoadingInPrevNext) if (u.params.slidesPerView > 1) {
							for (t = u.activeIndex + u.params.slidesPerView; t < u.activeIndex + u.params.slidesPerView + u.params.slidesPerView; t++) u.slides[t] && u.lazy.loadImageInSlide(t);
							for (t = u.activeIndex - u.params.slidesPerView; t < u.activeIndex; t++) u.slides[t] && u.lazy.loadImageInSlide(t)
						} else r = u.wrapper.children("." + u.params.slideNextClass), r.length > 0 && u.lazy.loadImageInSlide(r.index()), i = u.wrapper.children("." + u.params.slidePrevClass), i.length > 0 && u.lazy.loadImageInSlide(i.index())
					},
					onTransitionStart: function() {
						u.params.lazyLoading && (u.params.lazyLoadingOnTransitionStart || !u.params.lazyLoadingOnTransitionStart && !u.lazy.initialImageLoaded) && u.lazy.load()
					},
					onTransitionEnd: function() {
						u.params.lazyLoading && !u.params.lazyLoadingOnTransitionStart && u.lazy.load()
					}
				}, u.scrollbar = {
					isTouched: !1,
					setDragPosition: function(n) {
						var i = u.scrollbar,
							o = f() ? "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX || n.clientX : "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY || n.clientY,
							t = o - i.track.offset()[f() ? "left" : "top"] - i.dragSize / 2,
							r = -u.minTranslate() * i.moveDivider,
							e = -u.maxTranslate() * i.moveDivider;
						r > t ? t = r : t > e && (t = e), t = -t / i.moveDivider, u.updateProgress(t), u.setWrapperTranslate(t, !0)
					},
					dragStart: function(n) {
						var t = u.scrollbar;
						t.isTouched = !0, n.preventDefault(), n.stopPropagation(), t.setDragPosition(n), clearTimeout(t.dragTimeout), t.track.transition(0), u.params.scrollbarHide && t.track.css("opacity", 1), u.wrapper.transition(100), t.drag.transition(100), u.emit("onScrollbarDragStart", u)
					},
					dragMove: function(n) {
						var t = u.scrollbar;
						t.isTouched && (n.preventDefault ? n.preventDefault() : n.returnValue = !1, t.setDragPosition(n), u.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), u.emit("onScrollbarDragMove", u))
					},
					dragEnd: function() {
						var t = u.scrollbar;
						t.isTouched && (t.isTouched = !1, u.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
							t.track.css("opacity", 0), t.track.transition(400)
						}, 1e3)), u.emit("onScrollbarDragEnd", u), u.params.scrollbarSnapOnRelease && u.slideReset())
					},
					enableDraggable: function() {
						var t = u.scrollbar,
							i = u.support.touch ? t.track : document;
						n(t.track).on(u.touchEvents.start, t.dragStart), n(i).on(u.touchEvents.move, t.dragMove), n(i).on(u.touchEvents.end, t.dragEnd)
					},
					disableDraggable: function() {
						var t = u.scrollbar,
							i = u.support.touch ? t.track : document;
						n(t.track).off(u.touchEvents.start, t.dragStart), n(i).off(u.touchEvents.move, t.dragMove), n(i).off(u.touchEvents.end, t.dragEnd)
					},
					set: function() {
						if (u.params.scrollbar) {
							var t = u.scrollbar;
							t.track = n(u.params.scrollbar), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = n('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = f() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = u.size / u.virtualSize, t.moveDivider = t.divider * (t.trackSize / u.size), t.dragSize = t.trackSize * t.divider, f() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.track[0].style.display = t.divider >= 1 ? "none" : "", u.params.scrollbarHide && (t.track[0].style.opacity = 0)
						}
					},
					setTranslate: function() {
						if (u.params.scrollbar) {
							var t, n = u.scrollbar,
								i = (u.translate || 0, n.dragSize);
							t = (n.trackSize - n.dragSize) * u.progress, u.rtl && f() ? (t = -t, t > 0 ? (i = n.dragSize - t, t = 0) : -t + n.dragSize > n.trackSize && (i = n.trackSize + t)) : 0 > t ? (i = n.dragSize + t, t = 0) : t + n.dragSize > n.trackSize && (i = n.trackSize - t), f() ? (u.support.transforms3d ? n.drag.transform("translate3d(" + t + "px, 0, 0)") : n.drag.transform("translateX(" + t + "px)"), n.drag[0].style.width = i + "px") : (u.support.transforms3d ? n.drag.transform("translate3d(0px, " + t + "px, 0)") : n.drag.transform("translateY(" + t + "px)"), n.drag[0].style.height = i + "px"), u.params.scrollbarHide && (clearTimeout(n.timeout), n.track[0].style.opacity = 1, n.timeout = setTimeout(function() {
								n.track[0].style.opacity = 0, n.track.transition(400)
							}, 1e3))
						}
					},
					setTransition: function(n) {
						u.params.scrollbar && u.scrollbar.drag.transition(n)
					}
				}, u.controller = {
					LinearSpline: function(n, t) {
						var i, r, u;
						this.x = n, this.y = t, this.lastIndex = n.length - 1, this.x.length, this.interpolate = function(n) {
							return n ? (r = u(this.x, n), i = r - 1, (n - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
						}, u = function() {
							var n, t, i;
							return function(r, u) {
								for (t = -1, n = r.length; n - t > 1;) r[i = n + t >> 1] <= u ? t = i : n = i;
								return n
							}
						}()
					},
					getInterpolateFunction: function(n) {
						u.controller.spline || (u.controller.spline = u.params.loop ? new u.controller.LinearSpline(u.slidesGrid, n.slidesGrid) : new u.controller.LinearSpline(u.snapGrid, n.snapGrid))
					},
					setTranslate: function(n, i) {
						function s(t) {
							n = t.rtl && "horizontal" === t.params.direction ? -u.translate : u.translate, "slide" === u.params.controlBy && (u.controller.getInterpolateFunction(t), f = -u.controller.spline.interpolate(-n)), f && "container" !== u.params.controlBy || (o = (t.maxTranslate() - t.minTranslate()) / (u.maxTranslate() - u.minTranslate()), f = (n - u.minTranslate()) * o + t.minTranslate()), u.params.controlInverse && (f = t.maxTranslate() - f), t.updateProgress(f), t.setWrapperTranslate(f, !1, u), t.updateActiveIndex()
						}
						var o, f, r = u.params.control,
							e;
						if (u.isArray(r)) for (e = 0; e < r.length; e++) r[e] !== i && r[e] instanceof t && s(r[e]);
						else r instanceof t && i !== r && s(r)
					},
					setTransition: function(n, i) {
						function e(t) {
							t.setWrapperTransition(n, u), 0 !== n && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
								r && (t.params.loop && "slide" === u.params.controlBy && t.fixLoop(), t.onTransitionEnd())
							}))
						}
						var f, r = u.params.control;
						if (u.isArray(r)) for (f = 0; f < r.length; f++) r[f] !== i && r[f] instanceof t && e(r[f]);
						else r instanceof t && i !== r && e(r)
					}
				}, u.hashnav = {
					init: function() {
						var i, n, r, f;
						if (u.params.hashnav && (u.hashnav.initialized = !0, i = document.location.hash.replace("#", ""), i)) for (var o = 0, t = 0, e = u.slides.length; e > t; t++) n = u.slides.eq(t), r = n.attr("data-hash"), r !== i || n.hasClass(u.params.slideDuplicateClass) || (f = n.index(), u.slideTo(f, o, u.params.runCallbacksOnInit, !0))
					},
					setHash: function() {
						u.hashnav.initialized && u.params.hashnav && (document.location.hash = u.slides.eq(u.activeIndex).attr("data-hash") || "")
					}
				}, u.disableKeyboardControl = function() {
					n(document).off("keydown", at)
				}, u.enableKeyboardControl = function() {
					n(document).on("keydown", at)
				}, u.mousewheel = {
					event: !1,
					lastScrollTime: (new window.Date).getTime()
				}, u.params.mousewheelControl) {
					try {
						new window.WheelEvent("wheel"), u.mousewheel.event = "wheel"
					} catch (yt) {}
					u.mousewheel.event || void 0 === document.onmousewheel || (u.mousewheel.event = "mousewheel"), u.mousewheel.event || (u.mousewheel.event = "DOMMouseScroll")
				}
				u.disableMousewheelControl = function() {
					return u.mousewheel.event ? (u.container.off(u.mousewheel.event, vt), !0) : !1
				}, u.enableMousewheelControl = function() {
					return u.mousewheel.event ? (u.container.on(u.mousewheel.event, vt), !0) : !1
				}, u.parallax = {
					setTranslate: function() {
						u.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
							lt(this, u.progress)
						}), u.slides.each(function() {
							var t = n(this);
							t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
								var n = Math.min(Math.max(t[0].progress, -1), 1);
								lt(this, n)
							})
						})
					},
					setTransition: function(t) {
						"undefined" == typeof t && (t = u.params.speed), u.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
							var r = n(this),
								i = parseInt(r.attr("data-swiper-parallax-duration"), 10) || t;
							0 === t && (i = 0), r.transition(i)
						})
					}
				}, u._plugins = [];
				for (it in u.plugins) rt = u.plugins[it](u, u.params[it]), rt && u._plugins.push(rt);
				return u.callPlugins = function(n) {
					for (var t = 0; t < u._plugins.length; t++) n in u._plugins[t] && u._plugins[t][n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
				}, u.emitterEventListeners = {}, u.emit = function(n) {
					u.params[n] && u.params[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
					var t;
					if (u.emitterEventListeners[n]) for (t = 0; t < u.emitterEventListeners[n].length; t++) u.emitterEventListeners[n][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
					u.callPlugins && u.callPlugins(n, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
				}, u.on = function(n, t) {
					return n = ot(n), u.emitterEventListeners[n] || (u.emitterEventListeners[n] = []), u.emitterEventListeners[n].push(t), u
				}, u.off = function(n, t) {
					var i;
					if (n = ot(n), "undefined" == typeof t) return u.emitterEventListeners[n] = [], u;
					if (u.emitterEventListeners[n] && 0 !== u.emitterEventListeners[n].length) {
						for (i = 0; i < u.emitterEventListeners[n].length; i++) u.emitterEventListeners[n][i] === t && u.emitterEventListeners[n].splice(i, 1);
						return u
					}
				}, u.once = function(n, t) {
					n = ot(n);
					var i = function() {
							t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), u.off(n, i)
						};
					return u.on(n, i), u
				}, u.a11y = {
					makeFocusable: function(n) {
						return n.attr("tabIndex", "0"), n
					},
					addRole: function(n, t) {
						return n.attr("role", t), n
					},
					addLabel: function(n, t) {
						return n.attr("aria-label", t), n
					},
					disable: function(n) {
						return n.attr("aria-disabled", !0), n
					},
					enable: function(n) {
						return n.attr("aria-disabled", !1), n
					},
					onEnterKey: function(t) {
						13 === t.keyCode && (n(t.target).is(u.params.nextButton) ? (u.onClickNext(t), u.isEnd ? u.a11y.notify(u.params.lastSlideMessage) : u.a11y.notify(u.params.nextSlideMessage)) : n(t.target).is(u.params.prevButton) && (u.onClickPrev(t), u.isBeginning ? u.a11y.notify(u.params.firstSlideMessage) : u.a11y.notify(u.params.prevSlideMessage)), n(t.target).is("." + u.params.bulletClass) && n(t.target)[0].click())
					},
					liveRegion: n('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
					notify: function(n) {
						var t = u.a11y.liveRegion;
						0 !== t.length && (t.html(""), t.html(n))
					},
					init: function() {
						var i, t;
						u.params.nextButton && (i = n(u.params.nextButton), u.a11y.makeFocusable(i), u.a11y.addRole(i, "button"), u.a11y.addLabel(i, u.params.nextSlideMessage)), u.params.prevButton && (t = n(u.params.prevButton), u.a11y.makeFocusable(t), u.a11y.addRole(t, "button"), u.a11y.addLabel(t, u.params.prevSlideMessage)), n(u.container).append(u.a11y.liveRegion)
					},
					initPagination: function() {
						u.params.pagination && u.params.paginationClickable && u.bullets && u.bullets.length && u.bullets.each(function() {
							var t = n(this);
							u.a11y.makeFocusable(t), u.a11y.addRole(t, "button"), u.a11y.addLabel(t, u.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
						})
					},
					destroy: function() {
						u.a11y.liveRegion && u.a11y.liveRegion.length > 0 && u.a11y.liveRegion.remove()
					}
				}, u.init = function() {
					u.params.loop && u.createLoop(), u.updateContainerSize(), u.updateSlidesSize(), u.updatePagination(), u.params.scrollbar && u.scrollbar && (u.scrollbar.set(), u.params.scrollbarDraggable && u.scrollbar.enableDraggable()), "slide" !== u.params.effect && u.effects[u.params.effect] && (u.params.loop || u.updateProgress(), u.effects[u.params.effect].setTranslate()), u.params.loop ? u.slideTo(u.params.initialSlide + u.loopedSlides, 0, u.params.runCallbacksOnInit) : (u.slideTo(u.params.initialSlide, 0, u.params.runCallbacksOnInit), 0 === u.params.initialSlide && (u.parallax && u.params.parallax && u.parallax.setTranslate(), u.lazy && u.params.lazyLoading && (u.lazy.load(), u.lazy.initialImageLoaded = !0))), u.attachEvents(), u.params.observer && u.support.observer && u.initObservers(), u.params.preloadImages && !u.params.lazyLoading && u.preloadImages(), u.params.autoplay && u.startAutoplay(), u.params.keyboardControl && u.enableKeyboardControl && u.enableKeyboardControl(), u.params.mousewheelControl && u.enableMousewheelControl && u.enableMousewheelControl(), u.params.hashnav && u.hashnav && u.hashnav.init(), u.params.a11y && u.a11y && u.a11y.init(), u.emit("onInit", u)
				}, u.cleanupStyles = function() {
					u.container.removeClass(u.classNames.join(" ")).removeAttr("style"), u.wrapper.removeAttr("style"), u.slides && u.slides.length && u.slides.removeClass([u.params.slideVisibleClass, u.params.slideActiveClass, u.params.slideNextClass, u.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), u.paginationContainer && u.paginationContainer.length && u.paginationContainer.removeClass(u.params.paginationHiddenClass), u.bullets && u.bullets.length && u.bullets.removeClass(u.params.bulletActiveClass), u.params.prevButton && n(u.params.prevButton).removeClass(u.params.buttonDisabledClass), u.params.nextButton && n(u.params.nextButton).removeClass(u.params.buttonDisabledClass), u.params.scrollbar && u.scrollbar && (u.scrollbar.track && u.scrollbar.track.length && u.scrollbar.track.removeAttr("style"), u.scrollbar.drag && u.scrollbar.drag.length && u.scrollbar.drag.removeAttr("style"))
				}, u.destroy = function(n, t) {
					u.detachEvents(), u.stopAutoplay(), u.params.scrollbar && u.scrollbar && u.params.scrollbarDraggable && u.scrollbar.disableDraggable(), u.params.loop && u.destroyLoop(), t && u.cleanupStyles(), u.disconnectObservers(), u.params.keyboardControl && u.disableKeyboardControl && u.disableKeyboardControl(), u.params.mousewheelControl && u.disableMousewheelControl && u.disableMousewheelControl(), u.params.a11y && u.a11y && u.a11y.destroy(), u.emit("onDestroy"), n !== !1 && (u = null)
				}, u.init(), u
			}
		},
		u, r, i;
	for (t.prototype = {
		isSafari: function() {
			var n = navigator.userAgent.toLowerCase();
			return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0
		}(),
		isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
		isArray: function(n) {
			return "[object Array]" === Object.prototype.toString.apply(n)
		},
		browser: {
			ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
			ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
		},
		device: function() {
			var n = navigator.userAgent,
				u = n.match(/(Android);?[\s\/]+([\d.]+)?/),
				t = n.match(/(iPad).*OS\s([\d_]+)/),
				r = n.match(/(iPod)(.*OS\s([\d_]+))?/),
				i = !t && n.match(/(iPhone\sOS)\s([\d_]+)/);
			return {
				ios: t || i || r,
				android: u
			}
		}(),
		support: {
			touch: window.Modernizr && Modernizr.touch === !0 ||
			function() {
				return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
			}(),
			transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 ||
			function() {
				var n = document.createElement("div").style;
				return "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n
			}(),
			flexbox: function() {
				for (var i = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++) if (t[n] in i) return !0
			}(),
			observer: function() {
				return "MutationObserver" in window || "WebkitMutationObserver" in window
			}()
		},
		plugins: {}
	}, u = ["jQuery", "Zepto", "Dom7"], r = 0; r < u.length; r++) window[u[r]] && f(window[u[r]]);
	i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(n) {
		function u(f) {
			if (f.target === this) for (n.call(this, f), t = 0; t < i.length; t++) r.off(i[t], u)
		}
		var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
			r = this;
		if (n) for (t = 0; t < i.length; t++) r.on(i[t], u);
		return this
	}), "transform" in i.fn || (i.fn.transform = function(n) {
		for (var t, i = 0; i < this.length; i++) t = this[i].style, t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = n;
		return this
	}), "transition" in i.fn || (i.fn.transition = function(n) {
		var i, t;
		for ("string" != typeof n && (n += "ms"), i = 0; i < this.length; i++) t = this[i].style, t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = n;
		return this
	})), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
	"use strict";
	return window.Swiper
}), jQuery.fn.extend({
	jCountdown: function() {
		var ut = function(n) {
				this._target = n, this._width = 50, this._height = 64, this._frame = 1, this._totalFrames = 15, this._fps = 24, this._intervalId = -1, this._value = 0, this.stop = function() {
					clearInterval(this._intervalId)
				}, this.update = function(n) {
					if (n) {
						this.frame(1), this.stop();
						var t = this;
						this._intervalId = setInterval(function() {
							t.frame() == t.totalFrames() ? (clearInterval(t._intervalId), t.onFinish()) : t.frame(t.frame() + 1)
						}, Math.ceil(1e3 / this.fps()))
					} else this.frame(this.totalFrames())
				}, this.value = function(n, t) {
					if (void 0 == n) return this._value;
					this._value = n, this.update(t)
				}, this.onFinish = function() {}, this.destroy = function() {
					this.stop(), this._target = null
				}, this.width = function(n) {
					if (void 0 == n) return this._width;
					this._width = n
				}, this.height = function(n) {
					if (void 0 == n) return this._height;
					this._height = n
				}, this.frame = function(n) {
					if (void 0 == n) return this._frame;
					this._frame = n;
					var n = -(9 - this.value()) * this.width(),
						t = -(this.frame() - 1) * this.height();
					this._target.children(".text").css("background-position", n + "px " + t + "px")
				}, this.totalFrames = function(n) {
					if (void 0 == n) return this._totalFrames;
					this._totalFrames = n
				}, this.fps = function(n) {
					if (void 0 == n) return this._fps;
					this._fps = n
				}, this.update(!1)
			},
			rt = function(n) {
				this._target = n, this._width = 50, this._height = 64, this._frame = 1, this._totalFrames = 15, this._fps = 24, this._intervalId = -1, this._value = 0, this.stop = function() {
					clearInterval(this._intervalId)
				}, this.update = function(n) {
					if (n) {
						this.frame(1), this.stop();
						var t = this;
						this._intervalId = setInterval(function() {
							t.frame() == t.totalFrames() ? (clearInterval(t._intervalId), t.onFinish()) : t.frame(t.frame() + 1)
						}, Math.ceil(1e3 / this.fps()))
					} else this.frame(this.totalFrames())
				}, this.value = function(n, t) {
					if (void 0 == n) return this._value;
					this._value = n, this.update(t)
				}, this.onFinish = function() {}, this.destroy = function() {
					this.stop(), this._target = null
				}, this.width = function(n) {
					if (void 0 == n) return this._width;
					this._width = n
				}, this.height = function(n) {
					if (void 0 == n) return this._height;
					this._height = n
				}, this.frame = function(n) {
					if (void 0 == n) return this._frame;
					this._frame = n, n = -((1 + this.value()) * this.height()) + Math.sin((this.frame() - 1) / (this.totalFrames() - 1) * Math.PI / 2) * this.height(), this._target.children(".text").css("background-position", "0px " + n + "px")
				}, this.totalFrames = function(n) {
					if (void 0 == n) return this._totalFrames;
					this._totalFrames = n
				}, this.fps = function(n) {
					if (void 0 == n) return this._fps;
					this._fps = n
				}, this.update(!1)
			},
			et = function(n) {
				this._target = n, this._height = this._width = 60, this._frame = 1, this._totalFrames = 15, this._fps = 24, this._intervalId = -1, this._value = 0, this.stop = function() {
					clearInterval(this._intervalId)
				}, this.update = function(n) {
					if (n) {
						this.frame(1), this.stop();
						var t = this;
						this._intervalId = setInterval(function() {
							t.frame() == t.totalFrames() ? (clearInterval(t._intervalId), t.onFinish()) : t.frame(t.frame() + 1)
						}, Math.ceil(1e3 / this.fps()))
					} else this.frame(this.totalFrames())
				}, this.value = function(n, t) {
					if (void 0 == n) return this._value;
					this._value = n, this.update(t)
				}, this.onFinish = function() {}, this.destroy = function() {
					this.stop(), this._target = null
				}, this.width = function(n) {
					if (void 0 == n) return this._width;
					this._width = n
				}, this.height = function(n) {
					if (void 0 == n) return this._height;
					this._height = n
				}, this.frame = function(n) {
					if (void 0 == n) return this._frame;
					this._frame = n, n = this.value() + 1, 9 < n && (n = 0);
					var t = this.frame() / this.totalFrames(),
						i;.4 <= t && .6 >= t ? i = 0 : .4 >= t ? i = 1 - t / .4 : .6 <= t && (i = (t - .6) / .4), n = -(.5 < t ? this.value() : n) * this.height(), n -= 3 * (1 - i), this._target.children(".text").css("background-position", "0px " + n + "px").css("opacity", i), this._target.children(".cover").css("opacity", i)
				}, this.totalFrames = function(n) {
					if (void 0 == n) return this._totalFrames;
					this._totalFrames = n
				}, this.fps = function(n) {
					if (void 0 == n) return this._fps;
					this._fps = n
				}, this.update(!1)
			},
			ft = function(n) {
				this._target = n, this._height = this._width = 60, this._heightSmall = this._widthSmall = 42, this._frame = 1, this._totalFrames = 15, this._fps = 24, this._intervalId = -1, this._value = 0, this.stop = function() {
					clearInterval(this._intervalId)
				}, this.update = function(n) {
					if (n) {
						this.frame(1), this.stop();
						var t = this;
						this._intervalId = setInterval(function() {
							t.frame() == t.totalFrames() ? (clearInterval(t._intervalId), t.onFinish()) : t.frame(t.frame() + 1)
						}, Math.ceil(1e3 / this.fps()))
					} else this.frame(this.totalFrames())
				}, this.value = function(n, t) {
					if (void 0 == n) return this._value;
					this._value = n, this.update(t)
				}, this.onFinish = function() {}, this.destroy = function() {
					this.stop(), this._target = null
				}, this.width = function(n) {
					if (void 0 == n) return this._width;
					this._width = n
				}, this.height = function(n) {
					if (void 0 == n) return this._height;
					this._height = n
				}, this.frame = function(n) {
					if (void 0 == n) return this._frame;
					this._frame = n;
					var n = -this.value() * this.height(),
						t = Math.sin((this.frame() - 1) / (this.totalFrames() - 1) * Math.PI / 2);
					0 < t && .001 > t ? t = 0 : 0 > t && -.001 < t && (t = 0), this._target.children(".text").css("background-position", "0px " + n + "px").css("opacity", t)
				}, this.totalFrames = function(n) {
					if (void 0 == n) return this._totalFrames;
					this._totalFrames = n
				}, this.fps = function(n) {
					if (void 0 == n) return this._fps;
					this._fps = n
				}, this.update(!1)
			},
			tt = function() {
				this._days = [], this._hours = [], this._minutes = [], this._seconds = [], this._tickId = -1, this._tickDelay = 100, this._timeText = "", this._timeZone = 0, this._time = null, this.checkTime = function(n) {
					var t = new Date,
						r, i;
					if (this._time.getTime() < t.getTime() + 6e4 * t.getTimezoneOffset()) {
						for (t = 0; t < this._days.length; t++) this._days[t].value(0);
						for (t = 0; t < this._hours.length; t++) this._hours[t].value(0);
						for (t = 0; t < this._minutes.length; t++) this._minutes[t].value(0);
						for (t = 0; t < this._seconds.length; t++) this._seconds[t].value(0);
						return this.stop(), this.onFinish(), !0
					}
					if (r = this.timeFormat(this._time.getTime() - (t.getTime() + 6e4 * t.getTimezoneOffset()), this._days.length, this._hours.length, this._minutes.length, this._seconds.length).split(""), !isNaN(this._time)) {
						for (t = 0; t < this._days.length; t++) i = parseInt(r.shift(), 10), i != this._days[t].value() && this._days[t].value(i, n);
						for (t = 0; t < this._hours.length; t++) i = parseInt(r.shift(), 10), i != this._hours[t].value() && this._hours[t].value(i, n);
						for (t = 0; t < this._minutes.length; t++) i = parseInt(r.shift(), 10), i != this._minutes[t].value() && this._minutes[t].value(i, n);
						for (t = 0; t < this._seconds.length; t++) i = parseInt(r.shift(), 10), i != this._seconds[t].value() && this._seconds[t].value(i, n)
					}
					return !1
				}, this.textFormat = function(n, t, i) {
					for (n = n.toString(); n.length < t;) n = i + n;
					return n.length > t && (n = n.substr(n.length - t, t)), n
				}, this.timeFormat = function(n, t, i, r, u) {
					var n = Math.floor(n / 1e3),
						o = n % 60,
						e = Math.floor(n % 3600 / 60),
						f = Math.floor(n % 86400 / 3600);
					return this.textFormat(Math.floor(n / 86400), t, "0") + this.textFormat(f, i, "0") + this.textFormat(e, r, "0") + this.textFormat(o, u, "0")
				}, this.start = function() {
					var n, t;
					for (this.stop(), n = 0; n < this._days.length; n++) this._days[n].update();
					for (n = 0; n < this._hours.length; n++) this._hours[n].update();
					for (n = 0; n < this._minutes.length; n++) this._minutes[n].update();
					for (n = 0; n < this._seconds.length; n++) this._seconds[n].update();
					this.checkTime(!1) || (t = this, this._tickId = setInterval(function() {
						t.checkTime(!0)
					}, this._tickDelay))
				}, this.stop = function() {
					for (var n = 0; n < this._days.length; n++) this._days[n].stop();
					for (n = 0; n < this._hours.length; n++) this._hours[n].stop();
					for (n = 0; n < this._minutes.length; n++) this._minutes[n].stop();
					for (n = 0; n < this._seconds.length; n++) this._seconds[n].stop();
					clearInterval(this._tickId)
				}, this.onFinish = function() {}, this.destroy = function() {
					for (var n = 0; n < this._days.length; n++) this._days[n].destroy();
					for (n = 0; n < this._hours.length; n++) this._hours[n].destroy();
					for (n = 0; n < this._minutes.length; n++) this._minutes[n].destroy();
					for (n = 0; n < this._seconds.length; n++) this._seconds[n].destroy();
					this._days = [], this._hours = [], this._minutes = [], this._seconds = [], this.stop()
				}, this.items = function(n, t, i, r) {
					this._days = n, this._hours = t, this._minutes = i, this._seconds = r
				}, this.timeText = function(n) {
					if (void 0 == n) return this._timeText;
					this._timeText = n, this.time(this.timeText(), this.timeZone())
				}, this.timeZone = function(n) {
					if (void 0 == n) return this._timeZone;
					this._timeZone = n, this.time(this.timeText(), this.timeZone())
				}, this.time = function(n, t) {
					this._timeText = n, this._timeZone = t;
					var i = this._timeText.split("/").join(" ").split(":").join(" ").split(" "),
						e = parseInt(i[0], 10),
						o = parseInt(i[1], 10) - 1,
						f = parseInt(i[2], 10),
						r = parseInt(i[3], 10),
						u = parseInt(i[4], 10) - 60 * this._timeZone,
						i = parseInt(i[5], 10);
					this._time = new Date(e, o, f, r, u, i, 0), this.start()
				}
			},
			k = function() {
				return v.data("countdown")
			},
			d = function() {
				void 0 != k() && (k().destroy(), v.removeData("countdown"))
			},
			v, c, i, e, s, t, l, a, w, y, h;
		if (0 < arguments.length) if (v = this, c = k(), 1 == arguments.length && "object" == typeof arguments[0]) {
			void 0 != c && (d(), v.children().remove()), i = arguments[0], void 0 == k() ? (c = new tt, v.data("countdown", c), c = k()) : c = void 0;
			var o = parseInt(jQuery.browser.version, 10),
				tt = "string" == typeof i.timeText ? i.timeText : "",
				d = parseFloat(i.timeZone);
			isNaN(d) && (d = 0), e = "string" == typeof i.style ? i.style.toLowerCase() : "";
			switch (e) {
			case "flip":
				break;
			case "slide":
				break;
			case "crystal":
				break;
			case "metal":
				break;
			default:
				e = "flip"
			}
			s = "string" == typeof i.color ? i.color.toLowerCase() : "";
			switch (s) {
			case "black":
				break;
			case "white":
				break;
			default:
				s = "black"
			}
			t = parseInt(i.width, 10), 10 <= t || (t = 0), l = parseInt(i.textGroupSpace, 10), 0 <= l || (l = 15), a = parseInt(i.textSpace, 10), 0 < a || (a = 0), w = !1 != i.reflection, y = parseFloat(i.reflectionOpacity), 0 < y ? 100 < y && (y = 100) : y = 10, h = parseInt(i.reflectionBlur, 10), 0 < h ? 10 < h && (h = 10) : h = 0;
			var u = 2 < parseInt(i.dayTextNumber, 10) ? parseInt(i.dayTextNumber, 10) : 2,
				f = !1 != i.displayDay,
				it = !1 != i.displayHour,
				nt = !1 != i.displayMinute,
				g = !1 != i.displaySecond,
				b = !1 != i.displayLabel,
				i = "function" == typeof i.onFinish ? i.onFinish : function() {},
				n, r = "",
				p = "";
			if (n = '<div class="jCountdown">', f) {
				for (n += '<div class="group day' + (!it && !nt && !g ? " lastItem" : "") + '">', f = 0; f < u; f++) r = " item" + (f + 1), p = f == u - 1 ? " lastItem" : "", n += '<div class="container' + r + p + '">', ("slide" == e || "crystal" == e || "metal" == e) && (n += '<div class="cover"></div>'), n += '<div class="text"></div>', n += "</div>";
				b && (n += '<div class="label"></div>'), n += "</div>"
			}
			if (it) {
				for (n += '<div class="group hour' + (!nt && !g ? " lastItem" : "") + '">', f = 0; 2 > f; f++) r = " item" + (f + 1), p = 1 == f ? " lastItem" : "", n += '<div class="container' + r + p + '">', ("slide" == e || "crystal" == e || "metal" == e) && (n += '<div class="cover"></div>'), n += '<div class="text"></div>', n += "</div>";
				b && (n += '<div class="label"></div>'), n += "</div>"
			}
			if (nt) {
				for (n += '<div class="group minute' + (g ? "" : " lastItem") + '">', f = 0; 2 > f; f++) r = " item" + (f + 1), p = 1 == f ? " lastItem" : "", n += '<div class="container' + r + p + '">', ("slide" == e || "crystal" == e || "metal" == e) && (n += '<div class="cover"></div>'), n += '<div class="text"></div>', n += "</div>";
				b && (n += '<div class="label"></div>'), n += "</div>"
			}
			if (g) {
				for (n += '<div class="group second lastItem">', f = 0; 2 > f; f++) r = " item" + (f + 1), p = 1 == f ? " lastItem" : "", n += '<div class="container' + r + p + '">', ("slide" == e || "crystal" == e || "metal" == e) && (n += '<div class="cover"></div>'), n += '<div class="text"></div>', n += "</div>";
				b && (n += '<div class="label"></div>'), n += "</div>"
			}
			v.html(n + "</div>"), u = v.children(".jCountdown"), u.addClass(e), u.addClass(s), u.children(".group").css("margin-right", l + "px"), u.children(".group.lastItem").css("margin-right", "0px"), u.children(".group").children(".container").css("margin-right", a + "px"), u.children(".group").children(".container.lastItem").css("margin-right", "0px"), w && !(jQuery.browser.msie && 10 > o) && (reflectionObject = u.clone(), reflectionObject.addClass("reflection"), b && reflectionObject.addClass("displayLabel"), 100 != y && reflectionObject.css("opacity", y / 100), 0 != h && reflectionObject.addClass("blur" + h), u = u.add(reflectionObject)), r = jQuery('<div class="jCountdownContainer"></div>'), r.append(u), v.append(r), 0 != t && (s = jQuery('<div class="jCountdownScale"></div>'), s.append(u), r.append(s), l = s.width(), a = s.height(), t /= l, w = -(1 - t) * l / 2, y = -(1 - t) * a / 2, h = "scale(" + t + ")", r.width(l * t), r.height(a * t), jQuery.browser.msie && 8 >= o ? s.css("zoom", t) : (s.css("transform", h).css("-moz-transform", h).css("-webkit-transform", h).css("-o-transform", h).css("-ms-transform", h), s.css("left", w).css("top", y))), o = "", t = 0, s = [], l = [], a = [], w = [], r = function() {};
			switch (e) {
			case "flip":
				r = ut;
				break;
			case "slide":
				r = rt;
				break;
			case "crystal":
				r = ft;
				break;
			case "metal":
				r = et
			}
			for (t = 1, o = ".group.day>.container.item"; u.find(o + t).length;) s.push(new r(u.find(o + t))), t++;
			for (t = 1, o = ".group.hour>.container.item"; u.find(o + t).length;) l.push(new r(u.find(o + t))), t++;
			for (t = 1, o = ".group.minute>.container.item"; u.find(o + t).length;) a.push(new r(u.find(o + t))), t++;
			for (t = 1, o = ".group.second>.container.item"; u.find(o + t).length;) w.push(new r(u.find(o + t))), t++;
			c.items(s, l, a, w), c.onFinish = i, c.time(tt, d)
		} else if ("string" == typeof arguments[0] && void 0 != c) switch (arguments[0]) {
		case "stop":
			c.stop();
			break;
		case "start":
			c.start();
			break;
		case "destroy":
			d(), v.children().remove()
		}
		return this
	}
}), function(n) {
	var i = "tpui",
		t = "tp-ui",
		h = "icon-",
		o, s, e, r, u, f;
	n.tpUI = {
		_base: {},
		_vendors: ["ms", "moz", "webkit", "o"],
		_agent: function() {
			return o !== undefined ? o : o = navigator.userAgent.toLowerCase()
		},
		_device: function() {
			if (e !== undefined) return e;
			var t = this,
				n = t._agent();
			return $d = {}, $d.u = n, $d.os = {
				name: null,
				version: null
			}, $d.screenWidth = window.screen.width, $d.screenHeight = window.screen.height, $d.avaWidth = window.screen.availWidth, $d.avalHeight = window.screen.availHeight, $d.pageWidth = document.documentElement.clientWidth, $d.pageHeight = document.documentElement.clientHeight, $d.core = "", $d.mobile = t._isMobile(), $d.ios = n.indexOf("iphone os") > -1, $d.android = n.match(/(Android)/i), $d.iPhone = n.match(/(iPhone|ios)/i), $d.iPad = n.match(/(iPad|ios)/i), $d.webApp = n.indexOf("safari") == -1 || n.indexOf("mobile safari") == -1, e = $d
		},
		_isIE: function() {
			return r !== undefined ? r : r = this._agent().indexOf("msie") > -1 ? !0 : !1
		},
		_isMobile: function() {
			return u !== undefined ? u : u = navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i)
		},
		_isWebApp: function() {
			return f !== undefined ? f : f = this._agent().indexOf("webapp") > -1 ? !0 : !1
		},
		_obj: function(t, i) {
			var r = n.type(t) !== "object" ? n(t) : t;
			return i && i == !0 ? r[0] : r
		},
		_intRevise: function(n, t, i, r) {
			return n = parseFloat(n), t = t !== undefined ? parseFloat(t) : null, i = i !== undefined ? parseFloat(i) : null, r = r || !1, n = t !== null && n <= t ? r && i !== null ? i : t : n, n = i !== null && n >= i ? r && i !== null ? i : i : n
		},
		_valParse: function(n) {
			var t = {},
				n = n ? n.split(",") : [0],
				i = n.length;
			switch (i) {
			case 4:
				t = {
					top: parseInt(n[0]),
					right: parseInt(n[1]),
					bottom: parseInt(n[2]),
					left: parseInt(n[3])
				};
				break;
			case 3:
				t = {
					top: parseInt(n[0]),
					right: parseInt(n[1]),
					bottom: parseInt(n[2]),
					left: parseInt(n[1])
				};
				break;
			case 2:
				t = {
					top: parseInt(n[0]),
					right: parseInt(n[1]),
					bottom: parseInt(n[0]),
					left: parseInt(n[1])
				};
			default:
				t = {
					top: parseInt(n[0]),
					right: parseInt(n[0]),
					bottom: parseInt(n[0]),
					left: parseInt(n[0])
				}
			}
			return t
		},
		_decPlaces: function(n, t) {
			var n = n.toString().split("."),
				t = t || 0;
			return n[1] ? n[1].length : parseInt(t)
		},
		_interval: function(t, i, r) {
			return t = parseFloat(t), isNaN(t) && (t = 0), n.isNumeric(i) && t <= i && (t = i), n.isNumeric(r) && t >= r && (t = r), t
		},
		_dimensions: function(t) {
			var i = t[0];
			return i.nodeType === 9 ? {
				width: t.width(),
				height: t.height(),
				offset: {
					top: 0,
					left: 0
				}
			} : n.isWindow(i) ? {
				width: t.width(),
				height: t.height(),
				offset: {
					top: t.scrollTop(),
					left: t.scrollLeft()
				}
			} : i.preventDefault ? {
				width: 0,
				height: 0,
				offset: {
					top: t.pageY,
					left: t.pageX
				}
			} : {
				width: t.outerWidth(),
				height: t.outerHeight(),
				offset: t.offset()
			}
		},
		_scrollbarWidth: function() {
			if (s !== undefined) return s;
			var r = 0,
				i = 0,
				t = {};
			return t.base = n("<div>").css({
				display: "block",
				position: "absolute",
				width: "50px",
				height: "50px",
				overflow: "hidden"
			}).appendTo(n("body")), t.sub = n("<div>").css({
				width: "auto",
				height: "100px"
			}).appendTo(t.base), r = t.sub[0].offsetWidth, t.base.css("overflow", "scroll"), i = t.sub[0].offsetWidth, r === i && (i = t.base[0].clientWidth), t.base.remove(), s = r - i
		},
		_mousePoint: function(n, t) {
			var u = this,
				f = u._obj(n),
				n = u._obj(n, !0),
				i = f.width(),
				r = f.height(),
				o = (t.pageX - n.offsetLeft - i / 2) * (i > r ? r / i : 1),
				e = (t.pageY - n.offsetTop - r / 2) * (r > i ? i / r : 1);
			return Math.round((Math.atan2(e, o) * (180 / Math.PI) + 180) / 90 + 3) % 4
		},
		_event: function(n, t) {
			return n.originalEvent.touches ? (n = n.originalEvent, t !== undefined ? n.touches[t] || n.changedTouches[t] : n.touches) : n
		},
		_windowLock: function(t) {
			var f = this._scrollbarWidth(),
				r = n("body"),
				i = n("html"),
				u = n(window),
				t = t || !1,
				e = this._dimensions(u);
			t ? (r.css({
				overflow: "hidden"
			}), i.css({
				"margin-left": 0 - f,
				overflow: "hidden"
			})) : (r.css({
				overflow: "auto"
			}), i.css({
				"margin-left": 0,
				overflow: "auto"
			}))
		},
		_isInWindow: function(t, i) {
			var l = n(window),
				s = this._obj(t),
				u = this._dimensions(l),
				r = this._dimensions(s),
				c = !! (r.width || r.height) && s.css("display") !== "none";
			if (!c) return !1;
			var f = u.offset.left,
				e = u.offset.top,
				o = r.offset.left,
				h = r.offset.top;
			return i = n.extend({
				top: 0,
				left: 0
			}, i), h + r.height >= e && h - i.top <= e + u.height && o + r.width >= f && o - i.left <= f + u.width
		},
		_animationFrame: function() {
			for (var i = 0, t = this._vendors, n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
			window.requestAnimationFrame || (window.requestAnimationFrame = function(n) {
				var r = +new Date,
					t = Math.max(0, 16 - (r - i)),
					u = null;
				return i = r + t, window.setTimeout(function() {
					n(i)
				}, t)
			}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
				return clearTimeout(n)
			})
		},
		_uiItem: function() {
			return n("<div>").addClass(t + "-item")
		},
		_uiSub: function() {
			return n("<div>").addClass(t + "-sub")
		},
		_uiRefer: function() {
			return n("<div>").addClass(t + "-refer")
		},
		_uiHide: function() {
			return n("<div>").addClass(t + "-hide")
		},
		_uiMask: function() {
			return n("<div>").addClass(t + "-mask")
		},
		_uiClear: function() {
			return n("<div>").addClass(t + "-clear")
		},
		_uiForm: function() {
			return this._uiItem().addClass(t + "-forminput")
		},
		_uiIcon: function() {
			return n("<div>").addClass(t + "-icon").append("<i>&nbsp;</i>")
		},
		_uiHandle: function(i) {
			return n("<div>").addClass(t + "-sub " + t + "-handle").append("<span><em>" + i || "</em></span>")
		},
		_uiHandleLink: function(i) {
			return n("<div>").addClass(t + "-sub " + t + "-handle-link").append('<a href="javascript:void(0);"><em>' + i + "</em></a>")
		},
		_uiHandleButton: function(i) {
			return n("<div>").addClass(t + "-sub " + t + "-handle-button").append('<button type="button"><em>' + i + "</em></button>")
		},
		_uiImage: function(n, t) {
			return '<img src="' + n + '" alt="' + (t || "") + '" />'
		},
		_icon: function(i, r) {
			var u = this;
			r = r || i, n.each([null, "before", "after"], function(n, f) {
				var h = f ? "data-icon-" : "data-icon",
					e = f ? f : "",
					s = i.attr(h + e) || null,
					o = i.attr(h + e + "-patch") || null,
					f = f || "base";
				(s || o) && ($thisIcon = u._iconSet(f, s, o), e == "before" ? r.before($thisIcon).addClass(t + "-iconat-" + f) : r.after($thisIcon).addClass(t + "-iconat-" + f))
			})
		},
		_iconSet: function(n, i, r) {
			var u = this._uiIcon().addClass(t + "-icon-" + n);
			return i && u.addClass(h + i), r && u.empty().append(this._uiImage(r, n)), u
		},
		_gadgets: function(t, r, u) {
			var f = i + t,
				o = this,
				u = {},
				e = {};
			if (!n.isFunction(n[f])) {
				n.error("$." + f + "() 不存在!");
				return
			}
			u = u ? n[f].prototype : n[f], e = u._option || {}, n.fn[f] = function(t, i) {
				var o = typeof t == "string",
					u = o ? n.extend({}, e) : n.extend({}, e, t);
				return this.each(function(e, s) {
					if (n(s).get(0)) {
						var c = n(s),
							h = n.data(this, f);
						o ? (h || (h = n.data(this, f, new r(c, u))), h._init && h._init(e), h.$this.trigger(t, i)) : (h ? h._optionSet ? n.data(this, f, h._optionSet(u)) : "" : n.data(this, f, new r(c, u)), h = n.data(this, f), h._init && h._init(e))
					}
				})
			}
		}
	}, n.tpUI._animationFrame(), n.tpuiBacktop = function(t, i) {
		return this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(t), this.$document = n("html,body"), this.options = i, this.name = "backtop", this._uiEvent(), this
	}, n.tpuiBacktop.prototype = {
		_option: {
			speed: 600,
			easing: "swing",
			onBacktop: n.noop,
			version: "1.0"
		},
		_uiEvent: function() {
			var n = this;
			this.$this.on({
				"click.backtop": function(t) {
					t.preventDefault(), n._run()
				}
			})
		},
		_run: function() {
			var r = this,
				n = this.options,
				u = n.speed,
				t = n.easing,
				i = n.onBacktop;
			this.$document.stop(!0, !0).animate({
				scrollTop: 0
			}, u, t, function() {
				i.apply(r)
			})
		}
	}, n.tpUI._gadgets("Backtop", n.tpuiBacktop, n.tpuiBacktop.prototype), n.tpuiAnimation = {
		_animateEnd: "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationEnd",
		_item: {
			animate: null,
			callback: n.noop
		}
	}, n.fn[i + "Animation"] = function(t, i) {
		var f = this,
			r = n.tpuiAnimation,
			u = n.extend(!0, {}, r._item, {
				animate: t,
				callback: i
			});
		return this.each(function() {
			var i = n(this),
				t = u.animate,
				f = u.callback;
			i.removeClass(t).addClass(t).one(r._animateEnd, function() {
				i.removeClass(t), f.apply(this)
			})
		})
	}, n.tpuiPosition = function(i, r) {
		return this.$ui = this._ui, this.$this = this.$ui._obj(i), this.thisClass = t + "-" + this._name, this.typeClass = this.$this.attr("data-type") || "base", this.options = r, this.$this = this.$ui._obj(i), this.$refer = this.options.of ? this.$ui._obj(this.options.of) : n(window), this._uiEvent(), this
	}, n.tpuiPosition.prototype = {
		_ui: n.tpUI || {},
		_name: "position",
		_dataName: i + "Position",
		_option: {
			of: null,
			my: "left,top",
			at: "left,top",
			offset: null,
			speed: 600,
			easing: "swing",
			flip: "none",
			onFlip: n.noop,
			onRever: n.noop,
			onMoveEnd: n.noop,
			version: "2.0"
		},
		_init: function() {
			this._position()
		},
		_uiEvent: function() {
			var t = this;
			this.$this.on({
				_to: function(n, i) {
					var u = {},
						r = i ? i.split(",").slice(0, 2) : null;
					r && (u.x = r[0], u.y = r[1]), t._slideTo()
				},
				_update: function() {
					t._position()
				}
			})
		},
		_position: function() {
			this.thisSize = this.$ui._dimensions(this.$this), this.referSize = this.$ui._dimensions(this.$refer), this.offSet = this.$ui._valParse(this.options.offset || 0), this._operation(), this._moveTo()
		},
		_operation: function() {
			var n = this,
				r = this.options,
				t = r.at.split(/[^a-z]/).slice(0, 2),
				i = r.my.split(/[^a-z]/).slice(0, 2);
			t[0] = t[0] || "left", t[1] = t[1] || "top", i[0] = i[0] || "left", i[1] = i[1] || "top";
			switch (i[0]) {
			case "center":
				n.thisMyLeft = n.thisSize.width / 2;
				break;
			case "right":
				n.thisMyLeft = n.thisSize.width;
				break;
			case "left":
			default:
				n.thisMyLeft = 0
			}
			switch (i[1]) {
			case "middle":
				n.thisMyTop = n.thisSize.height / 2;
				break;
			case "bottom":
				n.thisMyTop = n.thisSize.height;
				break;
			case "top":
			default:
				n.thisMyTop = 0
			}
			switch (t[0]) {
			case "center":
				n.thisAtLeft = n.referSize.width / 2, n.thisAtLeft -= n.thisMyLeft, n.thisAtLeft += n.referSize.offset.left;
				break;
			case "right":
				n.thisAtLeft = n.referSize.width, n.thisAtLeft += n.thisMyLeft, n.thisAtLeft += n.referSize.offset.left;
				break;
			case "left":
			default:
				n.thisAtLeft = n.referSize.width, n.thisAtLeft -= n.thisMyLeft, n.thisAtLeft += n.referSize.offset.left
			}
			switch (t[1]) {
			case "middle":
				n.thisAtTop = n.referSize.height / 2, n.thisAtTop -= n.thisMyTop, n.thisAtTop += n.referSize.offset.top;
				break;
			case "bottom":
				n.thisAtTop = n.referSize.height, n.thisAtTop += n.thisMyTop, n.thisAtTop += n.referSize.offset.top;
				break;
			case "top":
			default:
				n.thisAtTop = n.referSize.height, n.thisAtTop -= n.thisMyTop, n.thisAtTop += n.referSize.offset.top
			}
		},
		_moveTo: function() {
			this.$this.css({
				position: "absolute",
				left: this.thisAtLeft,
				top: this.thisAtTop
			})
		},
		_slideTo: function() {
			var t = this;
			this.$this.css({
				position: "absolute"
			}).stop(!0, !1).animate({
				left: this.thisAtLeft,
				top: this.thisAtTop
			}, this.options.speed, this.options.easing, function() {
				this.options.onMoveEnd(t)
			})
		},
		_referArea: function() {
			var s = this,
				t = {},
				o = thisData.option,
				i = o.my.split(",").slice(0, 2),
				u = parseInt(thisData.baseSize.width),
				r = parseInt(thisData.baseSize.height),
				f = parseInt(thisData.referSize.width),
				e = parseInt(thisData.referSize.height);
			return t.flipArea = {}, t.flipArea.minX = 0, t.flipArea.maxX = f - u, t.flipArea.minY = 0, t.flipArea.maxY = e - r, i[0] == "center" ? (t.flipArea.minX = Math.floor(u / 2), t.flipArea.maxX = parseInt(f + t.flipArea.minX)) : i[0] == "right" && (t.flipArea.minX -= u), i[1] == "middle" ? (t.flipArea.minY = Math.floor(r / 2), t.flipArea.maxY = parseInt(e + t.flipArea.minY)) : i[0] == "bottom" && (t.flipArea.minY -= r), n.extend(thisData, t)
		}
	}, n.tpUI._gadgets("Position", n.tpuiPosition, n.tpuiPosition.prototype), n.tpuiDrag = function(i, r) {
		return this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.options = r, this.name = "drag", this.$uiHandle = this.options.handle ? this.$this.find(this.options.handle).eq(0) : this.$this, this.thisClass = t + "-" + this.name, this.canDrag = !1, this._uiEvent(), this
	}, n.tpuiDrag.prototype = {
		_option: {
			delay: 0,
			axis: "both",
			contain: "document",
			helper: "original",
			grid: !1,
			opacity: !1,
			handle: null,
			cancel: null,
			revert: !1,
			revertDuration: 0,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			zIndex: !1,
			onStart: n.noop,
			onMove: n.noop,
			onEnd: n.noop,
			version: "1.0"
		},
		_uiEvent: function() {
			var i = this,
				r = this.$ui,
				u = n(document);
			this.$uiHandle.on({
				"mousedown.dragStart touchstart.dragStart": function(n) {
					n.preventDefault(), n = r._event(n, 0), i.canDrag = !0, i.objSize = r._dimensions(i.$this), i.$this.css({
						position: "absolute"
					}), i.startMousePos = {
						x: n.pageX,
						y: n.pageY
					}, i.startObjPos = {
						x: i.startMousePos.x - i.objSize.offset.left,
						y: i.startMousePos.y - i.objSize.offset.top
					};
					i.options.onStart(i);
					u.on({
						"mousemove.dragMove touchmove.dragMove": function(n) {
							if (n = r._event(n, 0), i.canDrag) {
								i.moveMousePos = {
									x: n.pageX,
									y: n.pageY
								}, i.moveObjPos = {
									x: i.moveMousePos.x - i.startObjPos.x,
									y: i.moveMousePos.y - i.startObjPos.y
								}, i._moveTo();
								i.options.onMove(i)
							}
						},
						"mouseup.dragEnd mouseleave.dragEnd touchend.dragEnd touchcancel.dragEnd": function(n) {
							n = r._event(n, 0), i.canDrag = !1, i.endMousePos = {
								x: n.pageX,
								y: n.pageY
							}, i.dragDistance = {
								x: i.startMousePos.x - i.endMousePos.x,
								y: i.startMousePos.y - i.endMousePos.y
							}, i.options.revert, u.off("mousemove.dragMove touchmove.dragMove mouseup.dragEnd mouseleave.dragEnd touchend.dragEnd touchcancel.dragEnd");
							i.options.onEnd(i)
						}
					})
				}
			})
		},
		_revert: function() {},
		_moveTo: function() {
			var n = this;
			switch (n.options.axis) {
			case "x":
				n.$this.css({
					left: n.moveObjPos.x
				});
				break;
			case "y":
				n.$this.css({
					top: n.moveObjPos.y
				});
				break;
			case "both":
			default:
				n.$this.css({
					left: n.moveObjPos.x,
					top: n.moveObjPos.y
				})
			}
		}
	}, n.tpUI._gadgets("Drag", n.tpuiDrag, n.tpuiDrag.prototype), n.tpuiLoading = function(i, r) {
		return this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$win = n(window), this.options = r, this.name = "loading", this.thisClass = t + "-" + this.name, this.typeClass = this.options.typeClass, this.isShow = !1, this.delayOut = null, this.isBody = this.$this[0].tagName == "BODY" ? !0 : !1, this._create(), this
	}, n.tpuiLoading.prototype = {
		_option: {
			autoOpen: !1,
			outMode: "hide",
			delay: 0,
			escape: !0,
			image: !0,
			imagePath: null,
			imageName: null,
			info: !1,
			infoSet: null,
			inner: !1,
			innerSet: null,
			mask: !1,
			maskStyle: "base",
			referBox: null,
			speed: 600,
			title: !0,
			titleSet: "加载中",
			typeClass: "base",
			onCreate: n.noop,
			onShow: n.noop,
			onHide: n.noop,
			width: null,
			height: null,
			version: "2.0"
		},
		_init: function() {
			this.options.autoOpen && this._show()
		},
		_create: function() {
			var i = this.thisClass,
				t = this.options;
			this.isBody && (this.$loadWrap = n("<div>").css({
				position: "fixed",
				width: "100%",
				left: 0,
				top: 0,
				"z-index": 999
			}).appendTo(n("body"))), this.$uiThis = this.$ui._uiItem().addClass(i + " " + i + "-" + this.typeClass), this.$uiContent = this.$ui._uiSub().addClass(i + "-content").appendTo(this.$uiThis), this.$uiContentInner = this.$ui._uiSub().addClass(i + "-content-inner").appendTo(this.$uiContent), t.image && (this.$uiImage = this.$ui._uiSub().addClass(i + "-image " + i + "-image-base").appendTo(this.$uiContentInner), t.imageName && this.$uiImage.removeClass(i + "-image-base").addClass(t.imageName), t.imagePath && this.$uiImage.removeClass(i + "-image-base").append('<img src="' + t.imagePath + '" alt="" />')), t.title && (this.$uiTitle = this.$ui._uiSub().addClass(i + "-title").append("<h2><span>" + t.titleSet + "</span></h2>").appendTo(this.$uiContentInner)), t.info && (this.$uiTitle = this.$ui._uiSub().addClass(i + "-info").append("<p>" + t.infoSet + "</p>").appendTo(this.$uiContentInner)), t.refer && (this.$uiTitle = this.$ui._uiSub().addClass(this.thisClass + "-refer").append(t.referInner).appendTo(this.$uiContentInner)), t.mask && (this.$uiMask = this.$ui._uiMask().addClass(this.thisClass + "-" + t.maskStyle).appendTo(this.$uiThis)), this.$uiThis.appendTo(this.$loadWrap), this._uiEvent(), this._runInit();
			t.onCreate(this)
		},
		_uiEvent: function() {
			var n = this;
			this.$this.on({
				"_show.loading": function() {
					n._show()
				},
				"_hide.loading": function() {
					n._hide()
				},
				"_remove.loading": function() {
					n._remove()
				}
			})
		},
		_docBind: function() {
			var n = this,
				t = this.options;
			this.$win.on({
				"resize.loading": function() {
					n._runInit()
				},
				"keyup.loading": function(i) {
					i.preventDefault(), t.escape && i.keyCode == 27 && n._hide()
				}
			})
		},
		_docUnBind: function() {
			var n = this;
			this.$win.off("resize.loading keyup.loading")
		},
		_runInit: function() {
			var t = this,
				n = this.options;
			this.$uiThis.show(), this.isBody ? (this.thisSize = this.$ui._dimensions(this.$win), this.$uiThis.css({
				position: "absolute",
				left: 0,
				top: 0
			})) : this.thisSize = this.$ui._dimensions(this.$this), n.width && (this.thisSize.width = Math.abs(parseInt(n.width))), n.height && (this.thisSize.height = Math.abs(parseInt(n.height))), this.cntentSize || (this.cntentSize = this.$ui._dimensions(this.$uiContent)), this.$this.css("position") || this.$this.css("position", "relative"), this.$uiThis.css({
				width: this.thisSize.width,
				height: this.thisSize.height
			}), this.$uiContent.css({
				position: "absolute",
				top: "50%",
				left: "50%",
				"margin-top": 0 - t.cntentSize.height / 2,
				"margin-left": 0 - t.cntentSize.width / 2
			}), this.autoOpen || this.$uiThis.hide()
		},
		_show: function() {
			var n = this,
				t = this.options;
			this.isShow || (this.isShow = !0, n._docBind(), n.delayOut = clearTimeout(n.delayOut), this.$uiThis.stop(!0, !0).fadeIn(t.speed, function() {
				t.onShow(n);
				t.delay && t.delay > 0 && (n.delayOut = setTimeout(function() {
					n._hide()
				}, t.delay))
			}), this.isBody && this.$ui._windowLock(!0))
		},
		_hide: function() {
			var n = this,
				t = this.options;
			if (t.outMode == "remove") {
				n._remove();
				return
			}
			this.isShow && (this.isShow = !1, n._docUnBind(), n.delayOut = clearTimeout(n.delayOut), this.$uiThis.stop(!0, !0).fadeOut(t.speed, function() {
				t.onHide(n)
			}), this.isBody && this.$ui._windowLock(!1))
		},
		_remove: function() {
			var n = this,
				t = this.options;
			this.isShow && (this.isShow = !1, n._docUnBind(), n.delayOut = clearTimeout(n.delayOut), this.$uiThis.stop(!0, !1).fadeOut(t.speed, function() {
				n.$uiThis.remove(), n.$this.removeData(i + "Loading")
			}), this.isBody && this.$ui._windowLock(!1))
		}
	}, n.tpUI._gadgets("Loading", n.tpuiLoading, n.tpuiLoading.prototype), n.tpuiMedia = function(i) {
		return this.$ui = n.tpUI || {}, this.options = n.extend({}, this._option, i), this.type = this.options.type, this.isVideo = this.type == "video" ? !0 : !1, this.info = {
			mediaType: this.mediaSuffix
		}, this.struct = {}, this.thisClass = t + "-media", this.mediaObj = this.isVideo ? this._video() : this._audio(), this.media = this.mediaObj.get(0), this.media.controls = "controls", this._create(), this
	}, n.tpuiMedia.prototype = {
		_option: {
			type: "audio",
			box: null,
			autoPlay: !1,
			loop: 0,
			volume: 100,
			poster: null,
			width: null,
			height: null,
			onCreate: n.noop,
			tipsMode: n.noop,
			errorMode: n.noop,
			version: "1.0"
		},
		_isSupport: function() {},
		_create: function() {
			var r = this.$ui,
				u = this.options,
				t = this.thisClass,
				i = this.struct;
			this.$mediaBox = u.box ? r._obj(u.box) : n("body"), i.$uiThis = r._uiItem().addClass(t + " " + t + "-" + this.type).appendTo(this.$mediaBox), i.$uiPlayer = r._uiSub().addClass(t + "-player").append(this.mediaObj).appendTo(i.$uiThis), this._controlsEvent(), this._callBack("onCreate")
		},
		_controlsEvent: function() {
			var n = this,
				i = this.options,
				t = this.info;
			this.mediaObj.on({
				play: function() {
					n._play()
				},
				pushe: function() {
					n._pushe()
				},
				stop: function() {
					n._stop()
				},
				ended: function() {
					n.media.ended && n._callBack("onEnd")
				},
				waiting: function() {
					n._tips("播放源进度加载中...")
				},
				progress: function() {
					n._tips("媒体资源加载中...")
				},
				playing: function() {
					n._tips("媒体资源加载成功，开始播放")
				},
				seeking: function() {
					n._tips("正在调整到指定位置,请稍后")
				},
				seeked: function() {
					n._tips("已从指定位置开始播放")
				},
				stalled: function() {},
				abort: function() {},
				suspend: function() {},
				volumechange: function() {
					n._tips("音量已更改,当前音量：" + n.media.volume)
				},
				loadstart: function() {
					n.loadStartTime = new Date, n._callBack("onLoadStart")
				},
				loadedmetadata: function() {
					n.loadEndTime = new Date, n.loadTime = n.loadEndTime - n.loadStartTime, n._infoRead(), n._autoPlay(i.autoPlay), n._callBack("onLoadEnd")
				},
				timeupdate: function() {
					t.currentTime = n.media.currentTime, t.currentTimes = n._times(t.duration - t.currentTime)
				},
				error: function() {
					var i = n.media.error.code;
					switch (i) {
					case 1:
						n._error("取回过程被用户中止");
						break;
					case 2:
						n._error("资源文件加载错误");
						break;
					case 3:
						n._error("错误的播放源编码，请确保您播放的是对应格式的播放源");
						break;
					case 4:
						n._error("文件不存在，或不支持的文件格式");
						break;
					default:
						n._error("播放器出现未知错误")
					}
					return
				}
			})
		},
		_infoRead: function() {
			var t = this.media,
				n = this.info;
			n.file = t.currentSrc, n.readyState = t.readyState, n.networkState = t.networkState, n.playbackRate = t.playbackRate, n.muted = t.muted, n.volume = t.volume, n.duration = t.duration, n.durations = this._times(t.duration), n.currentTime = t.currentTime, n.currentTimes = this._times(t.currentTime)
		},
		_autoPlay: function(n) {
			this.media.autoplay = n
		},
		_audio: function() {
			return n("<audio>")
		},
		_video: function() {
			return n("<video>")
		},
		_load: function(n) {
			this.media.src = n, this.media.load()
		},
		_play: function(n) {
			n && this._load(n), this.media.play(), this._callBack("onPlay")
		},
		_stop: function() {
			this.media.pause(), this.media.currentTime = 0, this.isStoped = !0, this._callBack("onStop")
		},
		_pushe: function() {
			this.media.pause(), this._callBack("onPushed")
		},
		_volume: function(n) {
			this.media.volume = (parseInt(n) / 100).toFixed(1)
		},
		_muteToggle: function(n) {
			this.media.muted = n || !this.media.muted ? !0 : !1
		},
		_loop: function(n) {
			var t = this,
				n = parseInt(n);
			if (n >= 0) if (n == 0) this._play();
			else {
				this.playIndex = 0;
				this.mediaObj.on("ended", function() {
					setTimeout(function() {
						t.playIndex <= n && (t._play(), t.playIndex++)
					}, t.media.duration)
				})
			} else this.media.loop = !0, this._play()
		},
		_poster: function(n) {
			this.isVideo && (this.media.poster = n || this.options.poster || "")
		},
		_times: function(n, t) {
			var f = "",
				n = parseInt(n),
				u = n,
				i = 0,
				r = 0;
			return n >= 60 && (i = parseInt(n / 60), i = i < 10 ? "0" + i : i, u = parseInt(n % 60), u = u < 10 ? "0" + u : u, i > 60 && (r = parseInt(i / 60), r = r < 10 ? "0" + r : r, i = parseInt(i % 60), i = i < 10 ? "0" + i : i)), t ? f = r + ":" + i + ":" + u : (f += r ? r + ":" : "", f += i ? i + ":" : "", f += u), f
		},
		_callBack: function(n) {
			this.options[n] && this.options[n](this)
		},
		_tips: function(n) {
			this.options.tipsMode(n)
		},
		_error: function(n) {
			this.options.errorMode(n)
		}
	}, n.tpuiFormItem = {
		_version: "2.1.2",
		_baseEvent: function() {
			var n = this,
				r = n.struct,
				i = t + "-form-";
			this.$this.on({
				"disable.formDisable": function() {
					n.isDisabled = !0, r.$uiThis.addClass(i + "disabled"), n._attribute("disabled", "disabled")
				},
				"enable.formEnble": function() {
					n.isDisabled = !1, r.$uiThis.removeClass(i + "disabled"), n._attribute("disabled", !1)
				},
				"readonly.formReadonly": function() {
					n.isReadonly = !0, r.$uiThis.addClass(i + "readonly"), n._attribute("readonly", !1)
				},
				"writable.formWritable": function() {
					n.isReadonly = !1, r.$uiThis.removeClass(i + "readonly"), n._attribute("readonly", "readonly")
				}
			})
		},
		_initState: function() {
			this.isDisabled && this.$this.trigger("disable.formDisable"), this.isReadonly && this.$this.trigger("readonly.formReadonly")
		},
		_attribute: function(n, t) {
			t ? this.$this.attr(n, t).prop(n, !0) : this.$this.removeAttr(n).prop(n, !1)
		},
		_checked: function(n, i, r) {
			i ? (r.addClass(t + "-active"), this._attribute("checked", "checked")) : (r.removeClass(t + "-active"), this._attribute("checked", null))
		},
		_numerInit: function(n, t) {
			return parseFloat(this.$this.attr(n)) || t
		},
		_isDisable: function() {
			return this.$this[0].disabled
		},
		_isReadonly: function() {
			return this.$this[0].readonly
		}
	}, n.tpuiButton = function(i) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].tagName === "A" || this.$this[0].tagName === "BUTTON" || this.$this[0].type === "submit" || this.$this[0].type === "reset" || this.$this[0].type === "button") return this.name = "button", this.thisClass = t + "-" + this.name, this.typeClass = this.$this.attr("data-type") || "default", this._create(), this
	}, n.tpuiButton.prototype = n.extend({}, n.tpuiFormItem, {
		_init: function() {
			this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState()
		},
		_create: function() {
			var t = this.thisClass,
				n = this.struct = {};
			n.$uiThis = this.$ui._uiForm().addClass(t + "-noselect " + t + " " + t + "-" + this.typeClass), this.$this.before(n.$uiThis), n.$uiBase = this.$ui._uiSub().addClass(t + "-base").append(this.$this).appendTo(n.$uiThis), this.$ui._icon(this.$this, n.$uiBase)
		}
	}), n.tpUI._gadgets("Button", n.tpuiButton, n.tpuiButton.prototype), n.tpuiText = function(i) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].type === "text" || this.$this[0].type === "password" || this.$this[0].tagName === "INPUT") return this.name = "text", this.thisClass = t + "-" + this.name, this.typeClass = this.$this.attr("data-type") || "base", this._create(), this
	}, n.tpuiText.prototype = n.extend({}, n.tpuiFormItem, {
		_init: function() {
			this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState()
		},
		_create: function() {
			var t = this.thisClass,
				n = this.struct = {};
			n.$uiThis = this.$ui._uiForm().addClass(t + " " + t + "-" + this.typeClass), this.$this.before(n.$uiThis), n.$uiBase = this.$ui._uiSub().addClass(t + "-base").append(this.$this).appendTo(n.$uiThis), this.$ui._icon(this.$this, n.$uiBase)
		}
	}), n.tpUI._gadgets("Text", n.tpuiText, n.tpuiText.prototype), n.tpuiTextarea = function(i) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].tagName === "TEXTAREA") return this.name = "textarea", this.thisClass = t + "-" + this.name, this.typeClass = this.$this.attr("data-type") || "base", this._create(), this
	}, n.tpuiTextarea.prototype = n.extend({}, n.tpuiFormItem, {
		_init: function() {
			this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState()
		},
		_create: function() {
			var t = this.thisClass,
				n = this.struct = {};
			n.$uiThis = this.$ui._uiForm().addClass(t + " " + t + "-" + this.typeClass), this.$this.before(n.$uiThis), n.$uiBase = this.$ui._uiSub().addClass(t + "-base").append(this.$this).appendTo(n.$uiThis)
		}
	}), n.tpUI._gadgets("Textarea", n.tpuiTextarea, n.tpuiTextarea.prototype), n.tpuiRadio = function(i, r) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].tagName === "INPUT" || this.$this[0].type === "radio") return this.options = r, this.name = "radio", this.struct = {}, this.thisClass = t + "-" + this.name, this._create(), this
	}, n.tpuiRadio.prototype = n.extend({}, n.tpuiFormItem, {
		_init: function() {
			this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState(), this._checked(this.$this, this.$this.is(":checked"), this.struct.$uiThis)
		},
		_create: function() {
			var t = this.thisClass,
				n = this.struct || {};
			n.$uiThis = this.$ui._uiForm().addClass(t), n.$uiBase = this.$ui._uiSub().addClass(t + "-base").appendTo(n.$uiThis), n.$uiHandle = this.$ui._uiHandleLink("&nbsp;").addClass(t + "-handle").appendTo(n.$uiThis), this.$this.before(n.$uiThis).appendTo(n.$uiBase), this._uiEvent()
		},
		_uiEvent: function() {
			var t = this,
				i = this.struct;
			this.nameAttr = this.$this.attr("name") || null, this.radioGroup = this.nameAttr ? n("input[name='" + this.nameAttr + "']") : this.$this;
			this.$this.on({
				"click.radioClick": function(n) {
					n.preventDefault(), i.$uiHandle.triggerHandler("click"), n.stopPropagation()
				},
				"change.radioChange": function() {
					t.isDisabled || t.isReadonly || t._radioEach()
				},
				"changeToggle.radioChangeToggle": function(r, u) {
					t._checked(n(this), u, i.$uiThis)
				}
			});
			i.$uiHandle.on({
				"click.radioToggle touchstart.radioToggle": function() {
					t.isDisabled || t.isReadonly || (t.$this.is(":checked") || t._checked(t.$this, !0, i.$uiThis), t.$this.triggerHandler("change"))
				}
			})
		},
		_radioEach: function() {
			n.each(this.radioGroup, function(t, i) {
				n(i).trigger("changeToggle", n(i)[0].checked)
			})
		}
	}), n.tpUI._gadgets("Radio", n.tpuiRadio, n.tpuiRadio.prototype), n.tpuiCheckbox = function(i, r) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].tagName === "INPUT" || this.$this[0].type === "checkbox") return this.options = r, this.name = "checkbox", this.thisClass = t + "-" + this.name, this._create(), this
	}, n.tpuiCheckbox.prototype = n.extend({}, n.tpuiFormItem, {
		_init: function() {
			this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState(), this._checked(this.$this, this.$this.is(":checked"), this.struct.$uiThis)
		},
		_create: function() {
			var t = this.thisClass,
				n = this.struct = {};
			n.$uiThis = this.$ui._uiForm().addClass(t), n.$uiBase = this.$ui._uiSub().addClass(t + "-base").appendTo(n.$uiThis), n.$uiHandle = this.$ui._uiHandleLink("&nbsp;").addClass(t + "-handle").appendTo(n.$uiThis), this.$this.before(n.$uiThis).appendTo(n.$uiBase), this._uiEvent()
		},
		_uiEvent: function() {
			var n = this,
				t = this.struct;
			this.$this.on({
				"click.checkboxClick": function(n) {
					n.preventDefault(), t.$uiHandle.triggerHandler("click"), n.stopPropagation()
				},
				"change.checkboxChange": function() {
					n.isDisabled || n.isReadonly || n._checked(n.$this, n.$this.is(":checked"), n.struct.$uiThis)
				}
			});
			t.$uiHandle.on({
				"click.checkboxToggle touchcancel.checkboxToggle": function() {
					n.isDisabled || n.isReadonly || (n.$this.is(":checked") ? n._checked(n.$this, !1, t.$uiThis) : n._checked(n.$this, !0, t.$uiThis), n.$this.trigger("change"))
				}
			})
		}
	}), n.tpUI._gadgets("Checkbox", n.tpuiCheckbox, n.tpuiCheckbox.prototype), n.tpuiSwitch = function(i, r) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].tagName === "INPUT" || this.$this[0].type === "checkbox") return this.name = "switch", this.options = r, this.thisClass = t + "-" + this.name, this._create(), this
	}, n.tpuiSwitch.prototype = n.extend({}, n.tpuiFormItem, {
		_option: {
			onTitle: "开",
			offTitle: "关",
			version: "2.0"
		},
		_init: function() {
			this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState(), this._checked(this.$this, this.$this.is(":checked"), this.struct.$uiThis)
		},
		_create: function() {
			var t = this.thisClass,
				i = this.options,
				n = this.struct = {};
			n.$uiThis = this.$ui._uiForm().addClass(t), n.$uiBase = this.$ui._uiSub().addClass(t + "-base").appendTo(n.$uiThis), n.$uiRefer = this.$ui._uiSub().addClass(t + "-refer").append('<span class="' + t + '-color-on">&nbsp;</span>').append('<span class="' + t + '-color-off">&nbsp;</span>').append('<em class="' + t + '-text-on"><i>' + i.onTitle + "<i></em>").append('<em class="' + t + '-text-off"><i>' + i.offTitle + "<i></em>").appendTo(n.$uiThis), n.$uiHandle = this.$ui._uiHandleLink("&nbsp;").addClass(t + "-handle").appendTo(n.$uiThis), this.$this.before(n.$uiThis).appendTo(n.$uiBase), this._uiEvent()
		},
		_uiEvent: function() {
			var t = this,
				i = this.struct;
			this.$this.on({
				"click.switchClick": function(n) {
					n.preventDefault(), i.$uiHandle.triggerHandler("click"), n.stopPropagation()
				},
				"change.switchChange": function() {
					t.isDisabled || t.isReadonly || t._checked(n(this), n(this).is(":checked"), i.$uiThis)
				}
			});
			i.$uiHandle.on({
				"click.switchToggle touchcancel.switchToggle": function(n) {
					(n.preventDefault(), t.isDisabled || t.isReadonly) || (t.$this.is(":checked") ? t._checked(t.$this, !1, i.$uiThis) : t._checked(t.$this, !0, i.$uiThis), t.$this.trigger("change"))
				}
			})
		}
	}), n.tpUI._gadgets("Switch", n.tpuiSwitch, n.tpuiSwitch.prototype), n.tpuiFile = function(i, r) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].tagName === "INPUT" || this.$this[0].type === "file") return this.name = "file", this.options = r, this.thisClass = t + "-" + this.name, this.value = this.$this.val(), this._create(), this
	}, n.tpuiFile.prototype = n.extend({}, n.tpuiFormItem, {
		_init: function() {
			this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState()
		},
		_create: function() {
			var i = this.thisClass,
				t = this.struct = {};
			t.$uiThis = this.$ui._uiForm().addClass(i), t.$uiBase = this.$ui._uiSub().addClass(i + "-base").appendTo(t.$uiThis), t.$uiRefer = this.$ui._uiSub().addClass(i + "-refer").appendTo(t.$uiThis), t.$uiReferInput = n("<input>").attr({
				type: "text",
				placeholder: this.$this.attr("placeholder") || "请选择文件"
			}).appendTo(t.$uiRefer).tpuiText(), t.$uiHandle = this.$ui._uiSub().addClass(i + "-handle").appendTo(t.$uiThis), t.$uiHandleBtn = n('<button type="button">选择文件</button>').appendTo(t.$uiHandle).tpuiButton(), this.$this.before(t.$uiThis).appendTo(t.$uiBase), this._uiEvent()
		},
		_uiEvent: function() {
			var t = this,
				i = this.struct;
			this.$this.on({
				"click.fileToggle touchcancel.fileToggle": function() {
					t.isDisabled || t.isReadonly
				},
				"change.fileChange": function() {
					t.isDisabled || t.isReadonly || t._fileSet(n(this).val(), i.$uiReferInput)
				}
			});
			i.$uiHandleBtn.add(i.$uiReferInput).on({
				"click.fileToggle touchcancel.fileToggle": function() {
					t.isDisabled || t.isReadonly || t.$this.trigger("click")
				}
			});
			i.$uiReferInput.on({
				"keyup.fileInput": function() {
					t.isDisabled || t.isReadonly || t._fileSet(n(this).val(), i.$uiReferInput)
				}
			})
		},
		_fileSet: function(n, t) {
			this.value = n, this.value !== "" && t.val(this.value)
		}
	}), n.tpUI._gadgets("File", n.tpuiFile, n.tpuiFile.prototype), n.tpuiNumber = function(i, r) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].type === "number" || this.$this[0].type === "text" || this.$this[0].tagName === "INPUT") return this.name = "number", this.thisClass = t + "-" + this.name, this.options = r, this.$window = n(window), this._create(), this
	}, n.tpuiNumber.prototype = n.extend({}, n.tpuiFormItem, {
		_option: {
			type: "base",
			addtoTitle: "+",
			reduceTitle: "-",
			width: null,
			height: null,
			version: "2.0.1"
		},
		_init: function() {
			this.min = this.$this.attr("min") !== undefined ? parseFloat(this.$this.attr("min")) : null, this.max = this.$this.attr("max") !== undefined ? parseFloat(this.$this.attr("max")) : null, this.step = this.$this.attr("step") !== undefined ? parseFloat(this.$this.attr("step")) : 1, this.fixed = this.$ui._decPlaces(this.step), this.startInt = (this.min !== null ? this.min : 0).toFixed(this.fixed), this.offsetInt = (this.min !== null ? this.min : 0) + this.step, this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState(), this.value = parseFloat(this.$this.val()), this._operation("init")
		},
		_create: function() {
			var t = this.thisClass,
				i = this.options,
				n = this.struct = {};
			n.$uiThis = this.$ui._uiForm().addClass(t + " " + t + "-" + i.type), n.$uiBase = this.$ui._uiSub().addClass(t + "-refer").appendTo(n.$uiThis), n.$uiAddto = this.$ui._uiHandleButton(i.addtoTitle).addClass(t + "-option " + t + "-addto").appendTo(n.$uiThis), n.$uiReduce = this.$ui._uiHandleButton(i.reduceTitle).addClass(t + "-option " + t + "-reduce").appendTo(n.$uiThis), this.$this.before(n.$uiThis).appendTo(n.$uiBase), this._uiEvent()
		},
		_uiEvent: function() {
			var t = this,
				i = this.struct,
				r = n(window);
			this.$this.on({
				"focus.numberFocus": function() {
					t._keyAdjust(!0)
				},
				"blur.numberBlur": function() {
					t._keyAdjust(!1)
				},
				"keyup.numberInputEnd": function() {},
				"change.numberChange": function() {
					t._operation("change", !1)
				}
			});
			i.$uiAddto.on({
				"click.numberAddto touchstart.numberAddto": function(n) {
					n.preventDefault(), t._addto()
				}
			});
			i.$uiReduce.on({
				"click.numberReduce touchstart.numberReduce": function(n) {
					n.preventDefault(), t._reduce()
				}
			})
		},
		_keyAdjust: function(n) {
			var i = this,
				t = "keydown.numberChange";
			if (n) this.$window.on(t, function(n) {
				return n.keyCode == 38 || n.keyCode == 39 ? (n.preventDefault(), i._addto(), !1) : n.keyCode == 37 || n.keyCode == 40 ? (n.preventDefault(), i._reduce(), !1) : void 0
			});
			else this.$window.off(t)
		},
		_addto: function() {
			this._operation("addto", !0)
		},
		_reduce: function() {
			this._operation("reduce", !0)
		},
		_operation: function(n, t) {
			if (!this.isDisabled && !this.isReadonly) {
				this.value = this.$this.val() ? parseFloat(this.$this.val()) : 0;
				switch (n) {
				case "addto":
					this.value += this.step;
					break;
				case "reduce":
					this.value -= this.step;
					break;
				case "init":
				case "change":
				default:
					this.value = this.value
				}
				this._realValue(this.value), this.$this.val(this.value), t && this.$this.trigger("change")
			}
		},
		_realValue: function(n) {
			return this.value = this._toStep(n).toFixed(this.fixed), this.min !== null && this.value <= this.min && (this.value = this.min), this.max !== null && this.value >= this.max && (this.value = this.max), this.value
		},
		_stepOffset: function(n) {
			return this.fixed >= 1 ? (n / this.step).toFixed(this.fixed) : n / this.step
		},
		_inStep: function(n) {
			return this._stepOffset(n) - parseInt(this._stepOffset(n)) == 0
		},
		_toStep: function(n) {
			return this._inStep(n) ? parseFloat(n) : Math.round(this._stepOffset(n) - 1) * this.step
		}
	}), n.tpUI._gadgets("Number", n.tpuiNumber, n.tpuiNumber.prototype), n.tpuiSelect = function(i, r) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].tagName === "SELECT") return this.name = "select", this.thisClass = t + "-" + this.name, this.options = r, this.isMobile = this.$ui._isMobile(), this.isAndroid = this.$ui._device().android, this.$window = n(window), this.$document = n(document), this.base = {}, this.struct = {}, this.base.$child = this.$this.children(), this.base.$options = this.$this.find("option"), this.selected = this.base.$options.filter(":selected").index() || 0, this._create(), this
	}, n.tpuiSelect.prototype = n.extend({}, n.tpuiFormItem, {
		_init: function() {
			this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState(), this._selected(), this._resize(), this._position()
		},
		_create: function() {
			var i = this,
				t = this.thisClass,
				r = this.base,
				n = this.struct;
			n.$uiThis = this.$ui._uiForm().addClass(t), this.isAndroid && n.$uiThis.addClass(t + "-android"), n.$uiBase = this.$ui._uiSub().addClass(t + "-base").appendTo(n.$uiThis), n.$uiHead = this.$ui._uiSub().addClass(t + "-head").appendTo(n.$uiThis), n.$uiTitle = this.$ui._uiHandleLink("加载中...").addClass(t + "-value").appendTo(n.$uiHead), n.$uiArrowToggle = this.$ui._uiHandleLink("&nbsp;").addClass(t + "-arrow").appendTo(n.$uiHead), this.$ui._icon(this.$this, n.$uiTitle), n.$uiContent = this.$ui._uiSub().addClass(t + "-content").appendTo(n.$uiThis).hide(), n.$uiContentList = this.$ui._uiSub().addClass(t + "-content-list").append(this._list()).appendTo(n.$uiContent), n.$uiContentSub = n.$uiContentList.find("." + t + "-sub"), n.$titleRefer = n.$uiTitle.children("a:first"), this.$this.before(n.$uiThis).appendTo(n.$uiBase), this._uiEvent()
		},
		_uiEvent: function() {
			var t = this,
				r = this.thisClass,
				i = this.struct;
			this.$this.on({
				"change.selectChange": function() {
					t.isDisabled || t.isReadonly || (t.selected = t.base.$options.index(n(this).find("option:selected")[0]), t._selected())
				},
				"_toggle.selectToggle": function() {
					t._toggle()
				}
			});
			i.$uiHead.on({
				"click.selectClick touchend.selectClick": function(n) {
					(n.preventDefault(), t.isDisabled || t.isReadonly) || (t.isMobile ? t.$this.trigger("focus") : t._toggle())
				}
			});
			i.$uiContentSub.on({
				"click.selectSelected touchcancel.selectSelected": function() {
					t.isDisabled || t.isReadonly || (t.selected = t.struct.$uiContentSub.index(n(this)[0]), t._selected(), t.$this.trigger("change"), t._hide())
				}
			})
		},
		_selected: function() {
			var n = this.struct;
			n.$titleRefer.text(this.base.$options.eq(this.selected).text()), this.isMobile || n.$uiContentSub.removeClass(t + "-active").eq(this.selected).addClass(t + "-active"), this.base.$options.removeAttr("selected").prop("selected", !1).eq(this.selected).attr("selected", "selected").prop("selected", !0)
		},
		_toggle: function() {
			this.struct.$uiContent.is(":visible") ? this._hide() : this._show()
		},
		_show: function() {
			var r = this,
				h = this.$ui,
				u = this.thisClass,
				f = this.struct,
				s = f.$uiThis,
				e = f.$uiHead,
				o = f.$uiContent;
			n("." + u).css({
				"z-index": 1
			}), n("." + u + "-head").removeClass(t + "-form-focus"), n("." + u + "-content:visible").hide(), e.addClass(t + "-form-focus"), s.css({
				"z-index": 99
			}), o.show(0, function() {
				r._position();
				r.$window.on({
					"scroll.selectPos resize.selectPos": function() {
						r._position()
					}
				});
				r.$document.on({
					"click.selectBlank": function(i) {
						n(i.target).closest("." + u).length <= 0 && (e.removeClass(t + "-form-focus"), r._hide())
					}
				})
			})
		},
		_hide: function() {
			var u = this,
				f = this.$ui,
				r = this.$window,
				n = this.$document,
				t = this.struct,
				i = t.$uiContent;
			i.hide(0, function() {
				r.off("scroll.selectPos resize.selectPos"), n.off("click.selectBlank")
			})
		},
		_active: function(n) {
			var f = [1, 999],
				e = t + "-form-focus",
				u = this.struct,
				i = u.$uiHead,
				r = u.$uiThis;
			n ? (i.addClass(e), r.css({
				"z-index": f[1]
			})) : (i.removeClass(e), r.css({
				"z-index": f[0]
			}))
		},
		_list: function(t) {
			var r = this,
				i = null,
				f = this.thisClass,
				u = t || this.base.$child;
			return i = this.$ui._uiSub().addClass(f + "-option"), n.each(u, function(t, u) {
				var f = n(u),
					e = f.children();
				f[0].tagName === "OPTGROUP" ? i.append(r._subGroup(f)) : i.append(r._subItem(f))
			}), i
		},
		_subGroup: function(n) {
			var t = this.$ui,
				r = this.thisClass,
				i = null,
				f = null,
				u = null,
				e = null;
			return i = t._uiSub().addClass(r + "-group"), f = t._uiSub().addClass(r + "-group-head").appendTo(i), u = t._uiHandle(n.attr("label") || "").addClass(r + "-value").appendTo(f), e = t._uiHandleLink("&nbsp;").addClass(r + "-group-arrow").appendTo(u), t._icon(n, u), this._list(n.children()).appendTo(i), i
		},
		_subItem: function(n) {
			var i = this.$ui,
				r = this.thisClass,
				t = null,
				u = null,
				f = null;
			return t = i._uiSub().addClass(r + "-sub"), u = i._uiHandleLink(n.text()).addClass(r + "-value").appendTo(t), f = i._uiHandleLink("&nbsp;").addClass(r + "-checker").appendTo(t), i._icon(n, u), t
		},
		_resize: function() {
			var t = this,
				n = this.struct,
				r = n.$uiContentList,
				i = this.$ui._dimensions(n.$uiArrowToggle);
			this.selectWidth || (n.$uiContent.css({
				position: "relative"
			}).show(0, function() {
				t.selectWidth = t.$ui._dimensions(r).width, n.$uiContent.css({
					position: "absolute"
				}).hide()
			}), n.$titleRefer.css({
				width: t.selectWidth + parseInt(i.height)
			}))
		},
		_position: function() {
			var i = this,
				t = this.struct,
				n = this.surface = {};
			n.window = this.$ui._dimensions(this.$window), n.select = this.$ui._dimensions(t.$uiHead), n.content = this.$ui._dimensions(t.$uiContent), n.contentList = this.$ui._dimensions(t.$uiContentList), n.maxHeight = this.$this.attr("data-height") || Math.floor(parseInt(n.window.height) / 2), n.listHeight = parseInt(n.contentList.height), n.listOffsetTop = parseInt(n.contentList.offset.top), n.listMaxHeight = n.listHeight >= n.maxHeight ? n.maxHeight : "auto", t.$uiContentList.height(parseInt(n.listMaxHeight))
		}
	}), n.tpUI._gadgets("Select", n.tpuiSelect, n.tpuiSelect.prototype), n.tpuiProgress = function(i, r) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].tagName !== "INPUT" || this.$this[0].type !== "text") {
			n.error('请使用 input type="text" 表单构建进度条。');
			return
		}
		return this.name = "progress", this.thisClass = t + "-" + this.name, this.options = r, this._create(), this
	}, n.tpuiProgress.prototype = n.extend({}, n.tpuiFormItem, {
		_option: {
			output: "default",
			direction: "x",
			width: null,
			height: null,
			progress: !0,
			surplus: !1,
			onCreate: n.noop,
			onStart: n.noop,
			onEnd: n.noop,
			onUpdate: n.noop,
			version: "1.0"
		},
		_init: function() {
			this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState(), this.min = this._numerInit("min", 0), this.max = this._numerInit("max", 100), this.interval = this.max - this.min, this.distance == undefined && (this.distance = this.min), this._run(this.$this.val(), 1)
		},
		_create: function() {
			var t = this.struct = {},
				i = this.options,
				r = this.thisClass;
			t.$uiThis = this.$ui._uiForm().addClass(r), t.$uiBase = this.$ui._uiSub().addClass(r + "-base").appendTo(t.$uiThis), t.$uiRefer = this.$ui._uiSub().addClass(r + "-refer").appendTo(t.$uiThis), i.progress && (t.$uiProgress = n("<span>").addClass(r + "-bands " + r + "-progress").appendTo(t.$uiRefer)), i.surplus && (t.$uiSurplus = n("<span>").addClass(r + "-bands " + r + "-surplus").appendTo(t.$uiRefer)), this.$this.before(t.$uiThis).appendTo(t.$uiBase);
			switch (i.direction) {
			case "y":
				i.direction = "y", t.$uiThis.addClass(r + "-vertical");
				break;
			case "x":
			default:
				i.direction = "x", t.$uiThis.addClass(r + "-horizontal")
			}
			i.width && t.$uiThis.width(i.width), i.height && t.$uiThis.height(i.height), this._uiEvent(), this.created = !0;
			i.onCreate(this)
		},
		_uiEvent: function() {
			var t = this;
			this.$this.on({
				"_update.progressUpdate": function(n) {
					n.preventDefault(), t._init()
				},
				"_to.progressTo": function(i, r) {
					t.isDisabled || t.isReadonly || (n(this).val(r), t._run(r))
				}
			})
		},
		_run: function(t, i) {
			var r = this,
				f = this.options,
				u = this.struct,
				i = i,
				t = t || this.min;
			i == 1 ? (r._operation(t), r._progressSet()) : n({
				counter: r.distance
			}).stop(!0, !0).animate({
				counter: t
			}, {
				step: function(n) {
					r._operation(n), r._progressSet()
				}
			}), this.distance = t
		},
		_operation: function(n) {
			this.value = this.$ui._interval(Math.round(n), this.min, this.max), this.lave = this.interval - this.value, this.progress = Math.round((this.value - this.min) / this.interval * 100), this.progress = this.$ui._interval(this.progress, 0, 100), this.surplus = 100 - this.progress, this.progressRatio = this.progress / 100, this.surplusRatio = this.surplus / 100
		},
		_inputOutput: function() {
			var n = this,
				t = this.options;
			switch (t.output) {
			case "progress":
				n.$this[0].value = n.progress;
				break;
			case "progress-ratio":
				n.$this[0].value = n.progressRatio;
				break;
			case "surplus":
				n.$this.val(n.surplus);
				break;
			case "surplus-ratio":
				n.$this[0].value = n.surplusRatio;
				break;
			case "both":
				n.$this.val(n.value + "/" + n.lave);
				break;
			case "lave":
				n.$this.val(n.lave);
				break;
			case "default":
			case "value":
			default:
				n.$this.val(n.value)
			}
		},
		_progressSet: function() {
			var n = this.options,
				t = this.struct;
			this._inputOutput(), n.progress && (n.direction == "x" ? t.$uiProgress.width(this.progress + "%") : t.$uiProgress.height(this.progress + "%")), n.surplus && (n.direction == "x" ? t.$uiSurplus.width(this.surplus + "%") : t.$uiSurplus.height(this.surplus + "%"));
			n.onUpdate(this.progress, this.progressRatio, this);
			if (this.ratio <= this.min) n.onStart(this.progress, this.progressRatio, this);
			if (this.ratio >= this.max) n.onEnd(this.progress, this.progressRatio, this)
		}
	}), n.tpUI._gadgets("Progress", n.tpuiProgress, n.tpuiProgress.prototype), n.tpuiVerification = function(i) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.imagePatch = this.$this.attr("data-image"), this.imagePatch && (this.$this[0].tagName === "INPUT" || this.$this[0].type === "text")) return this.name = "verification", this.thisClass = t + "-" + this.name, this.typeClass = this.$this.attr("data-type") || "default", this.tips = this.$this.attr("data-tips") || "点击刷新验证码", this.optionHandle = this.$this.attr("data-option") || !1, this.struct = {}, this._create(), this
	}, n.tpuiVerification.prototype = n.extend({}, n.tpuiFormItem, {
		_init: function() {
			this._reload(), this.isDisabled = this._isDisable(), this.isReadonly = this._isReadonly(), this._baseEvent(), this._initState()
		},
		_create: function() {
			var i = this.$ui,
				n = this.struct,
				t = this.thisClass,
				u = this.typeClass,
				r = this.tips;
			n.$uiThis = i._uiForm().addClass(t + " " + t + "-" + u), n.$uiBase = i._uiSub().addClass(t + "-sub " + t + "-base").appendTo(n.$uiThis), this.$this.before(n.$uiThis).appendTo(n.$uiBase), i._icon(this.$this, this.$this), n.$uiImageHandle = i._uiSub().addClass(t + "-sub " + t + "-image").attr("title", r).append('<a href="javascript:void(0);"><img src="" alt="' + r + '" /></a>').appendTo(n.$uiThis), n.$uiImage = n.$uiImageHandle.find("img:first"), this.optionHandle && (n.$uiOptionHandle = i._uiSub().addClass(t + "-sub " + t + "-option").append('<a href="javascript:void(0);">' + this.optionHandle + "</a>").appendTo(n.$uiThis), n.$uiOptionHandle = n.$uiOptionHandle.children("a:first").attr("title", r)), this._uiEvent()
		},
		_uiEvent: function() {
			var t = this,
				n = this.struct;
			n.$uiImageHandle.add(n.$uiOptionHandle).on({
				"click.verificationReload": function(n) {
					n.preventDefault(), t._reload()
				}
			})
		},
		_reload: function() {
			this.isDisabled || (this.struct.$uiImage[0].src = this.imagePatch)
		}
	}), n.tpUI._gadgets("Verification", n.tpuiVerification, n.tpuiVerification.prototype), n.tpuiVerREG = {
		_RegConf: {
			integer: /^[-]{0,1}[0-9]{1,}$/,
			number: /^[0-9]+$/,
			decimal: /^[-]{0,1}(\d+)[\.]+(\d+)$/,
			dobWord: /^[^\x00-\xff]+$/,
			cn: /[\u4E00-\u9FA5]/,
			username: /^(?!_)(?!.*?_$)[0-9a-zA-Z\_]+$/,
			nicName: /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
			cnName: /^[\u4E00-\u9FA5]{2,4}$/,
			letterOrNum: /^[0-9a-zA-Z]+$/,
			password: /^(\w){6,20}$/,
			qq: /^[1-9][0-9]{5,10}$/,
			mobile: /^(1[0-9]{10})$/,
			phone: /^(([0+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,4}))?$/,
			email: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
			url: /^http:\/\/(?:[\w-\.]{0,255})(?:(?:\/?[^\s]{0,255}){0,255})/g,
			monney: /^([\u0024\u00A2\u00A3\u00A4\u20AC\u00A5\u20B1\20B9\uFFE5]\s*)(\d+,?)+\.?\d*\s*$/,
			ip: /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/,
			date: /^(\d{2,4})\-(\d{1,2})\-(\d{1,2})$/,
			time: /^(\d{1,2}):(\d{1,2}):(\d{1,2})$/,
			dateTime: /^(\d{2,4})\-(\d{1,2})\-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/,
			version: "1.0"
		},
		_isNull: function(t) {
			return t == "" || n.trim(t) == "" ? !0 : /^[ ]+$/.test(t)
		},
		_isOver: function(n, t, i) {
			return this._isNull(n) || n.length < parseInt(t) || n.length > parseInt(i) ? !0 : !1
		},
		_isInteger: function(n) {
			return this._RegConf.integer.test(n)
		},
		_isHasCN: function(n) {
			return this._RegConf.cn.test(n)
		},
		_isUsername: function(n) {
			return !n || this._isNull(n) ? !1 : this._RegConf.username.test(n)
		},
		_isStartOf: function(str, checkStr) {
			return !str || this._isNull(str) || !checkStr ? !1 : str == checkStr ? !0 : eval("/^(" + checkStr + ")/").test(str)
		},
		_isEndOf: function(str, checkStr) {
			return !str || this._isNull(str) || !checkStr ? !1 : str == checkStr ? !0 : eval("/(.*?" + checkStr + "$)/").test(str)
		},
		_isIndexOf: function(str, checkStr) {
			return !str || this._isNull(str) || !checkStr ? !1 : str == checkStr ? !0 : eval("/(" + checkStr + ".*?)/").test(str)
		},
		_isEmail: function(n) {
			return !n || this._isNull(n) || !this._isIndexOf(n, "@") ? !1 : this._RegConf.email.test(n)
		},
		_isUrl: function(n) {
			return !n || this._isNull(n) ? !1 : this._RegConf.url.test(n)
		},
		_isIP: function(n) {
			return !n || this._isNull(n) ? !1 : this._RegConf.ip.test(n)
		},
		_isMobile: function(n) {
			return !n || this._isNull(n) ? !1 : this._RegConf.mobile.test(n)
		},
		_isPhone: function(n) {
			return !n || this._isNull(n) ? !1 : this._RegConf.phone.test(n)
		},
		_isQQ: function(n) {
			return !n || this._isNull(n) || !this._RegConf.number.test(n) ? !1 : this._RegConf.qq.test(n)
		},
		_isDate: function(n) {
			return !n || this._isNull(n) ? !1 : this._RegConf.date.test(n)
		}
	}, n.tpuiFormTipsy = function(i) {
		return this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.name = "form-tipsy", this.thisClass = t + "-" + this.name, this.tipsy = {}, this._uiEvent(), this
	}, n.tpuiFormTipsy.prototype = {
		version: "1.0.3",
		_messgaeItem: {
			message: null,
			html: !1,
			icon: !1,
			gravity: "sw",
			offset: 5,
			appendTo: null,
			delayIn: 0,
			delayOut: 0,
			onShow: n.noop,
			onHide: n.noop,
			version: "1.0"
		},
		_uiEvent: function() {
			var n = this;
			this.$this.on({
				"_default.formTipsy": function(t, i) {
					n._hide(), n._tipsy(i)
				},
				"_danger.formTipsy": function(t, i) {
					n._hide(), n._tipsy(i, "danger")
				},
				"_success.formTipsy": function(t, i) {
					n._hide(), n._tipsy(i, "success")
				},
				"_warning.formTipsy": function(t, i) {
					n._hide(), n._tipsy(i, "warning")
				},
				"_hide.formTipsy": function() {
					n._hide()
				}
			})
		},
		_tipsy: function(i, r) {
			var e = this.$ui,
				f = this.thisClass,
				u = this._message(i),
				h = f + "-" + u.gravity,
				s = r ? f + "-" + r : f + "-default",
				o = u.appendTo || n("body");
			u.message && (this.$uiTipsy = e._uiItem().addClass(f + " " + h + " " + s).appendTo(o), this.$uiInnner = e._uiSub().addClass(f + "-inner").appendTo(this.$uiTipsy), u.icon && (this.$uiIcon = n("<i>").addClass(t + "-icon").appendTo(this.$uiInnner), this.$uiTipsy.addClass(f + "-icon-on")), this.$uiInnner[this.tipsy.html ? "text" : "append"](u.message), u.appendTo || (this.$uiTipsy.css({
				position: "absolute",
				left: 0,
				top: 0
			}), this._position(u.gravity)))
		},
		_hide: function() {
			this.$uiTipsy && this.$uiTipsy.remove()
		},
		_message: function(t) {
			return n.extend(!0, {}, this._messgaeItem, n.isPlainObject(t) ? t : {
				message: t
			})
		},
		_position: function(n) {
			var c = this.$ui,
				o = c._dimensions(this.$this),
				l = c._dimensions(this.$uiTipsy),
				t = {},
				e = parseInt(o.width),
				h = parseInt(o.height),
				r = parseInt(o.offset.top),
				i = parseInt(o.offset.left),
				f = parseInt(l.width),
				s = parseInt(l.height),
				u = 0;
			switch (n.charAt(0)) {
			case "n":
				t = {
					top: r + h + u,
					left: i + (e / 2 - f / 2)
				};
				break;
			case "s":
				t = {
					top: r - s - u,
					left: i + (e / 2 - f / 2)
				};
				break;
			case "e":
				t = {
					top: r + h / 2 - s / 2,
					left: i - f - u
				};
				break;
			case "w":
				t = {
					top: r + h / 2 - s / 2,
					left: i + e + u
				}
			}
			n.length == 2 && (t.left = n.charAt(1) == "w" ? i : i + (e - f)), this.$uiTipsy.css(t)
		}
	}, n.tpUI._gadgets("FormTipsy", n.tpuiFormTipsy, n.tpuiFormTipsy.prototype), n.tpuiNotify = function(t, i) {
		return this.$ui = n.tpUI || {}, this.name = "notify", this.thisClass = "tp-ui-" + this.name, n.type(t) == "object" ? this.options = n.extend({}, this._option, t) : n.type(t) == "string" ? (this.dataName = t, this.options = i && n.type(i) == "object" ? n.extend({}, this._option, i) : n.extend({}, this._option)) : this.options = n.extend({}, this._option), this.dataCache = {}, this.itemLength = 0, this.isDisabled = !1, this.isMobile = this.$ui._isMobile(), this
	}, n.tpuiNotify.prototype = {
		_option: {
			size: 320,
			innerBox: null,
			position: "center,top",
			hideMode: "hide",
			doUpdate: n.noop,
			doAdd: n.noop,
			doShow: n.noop,
			doHide: n.noop,
			doRemove: n.noop,
			doClean: n.noop,
			onCreate: n.noop,
			onEnabled: n.noop,
			onDisabled: n.noop,
			version: "1.0.1"
		},
		_itemOption: {
			image: null,
			title: null,
			notify: null,
			buttons: null,
			pendAt: "default",
			status: "default",
			timeout: 5e3,
			speed: 600,
			onCheck: n.noop,
			onShow: n.noop,
			onHide: n.noop,
			onRemove: n.noop,
			version: "2.0.1"
		},
		_init: function() {
			var i = this,
				t = this.options;
			if (!this.$notify) {
				this.$notifyList = n("<div>").addClass(this.thisClass + "-content"), t.innerBox ? (this.$notify = this.$ui._obj(t.innerBox).append(this.$notifyList), this.$notifyList.css({
					position: "relative",
					width: "auto"
				})) : (this.$notify = this.$ui._obj("body"), this.$notifyBase = n("<div>").addClass(this.thisClass).appendTo(this.$notify), this.$notifyList.css({
					width: Math.abs(parseInt(t.size))
				}).appendTo(this.$notifyBase), this._position());
				this.options.onCreate(this)
			}
		},
		_item: function(t) {
			var u = this,
				r = this.thisClass,
				i = {};
			i.$row = n("<div>").addClass(r + "-row"), i.options = t, i.timeOut = null, i.$item = n("<div>").addClass(r + "-item " + r + "-" + t.status).appendTo(i.$row), t.image && (i.$item.addClass(r + "-image-item"), i.$contents = n("<div>").addClass(this.thisClass + "-image").appendTo(i.$item), t.image.indexOf("/") == 0 ? i.$contents.append('<span><img src="' + t.image + '"></span>') : i.$contents.append('<span class="' + t.image + '">&nbsp;</span>')), i.$content = n("<div>").addClass(r + "-message").appendTo(i.$item), t.title && (i.$title = n("<h4>").append("<span>" + t.title + "</span>").appendTo(i.$content)), t.notify && (i.$contents = n("<p>").append(t.notify).appendTo(i.$content)), i.$buttonGroup = n("<div>").addClass(r + "-button-group").appendTo(i.$item), t.buttons ? (i.$item.addClass(r + "-button-item"), n.each(t.buttons, function(r, u) {
				var f = n("<button>").text(r).on({
					click: function() {
						u(t, i)
					}
				}).appendTo(i.$buttonGroup).tpuiButton()
			})) : (i.$item.addClass(r + "-close-item"), i.$close = n("<div>").addClass(r + "-button " + r + "-close").append('<a href="javascript:void(0);"><em>关闭</em></a>').on({
				"click.notify": function() {
					u._remove(i)
				}
			}).appendTo(i.$buttonGroup), this.isMobile || i.$close.hide());
			i.$row.on({
				"_show.notify": function() {
					u._show(i)
				},
				"_hide.notify": function() {
					u._hide(i)
				},
				"_remove.notify": function() {
					u._remove(i)
				},
				"click.notify": function(i) {
					if (n(i.target).closest("." + r + "-button").length === 0) t.onCheck(t)
				},
				"mouseenter.notify": function() {
					i.$close && !this.isMobile && i.$close.stop(!0, !0).fadeIn(), i.timeOut && (i.timeOut = clearTimeout(i.timeOut))
				},
				"mouseleave.notify": function() {
					i.$close && !this.isMobile && i.$close.stop(!0, !0).fadeOut(), t.timeout && t.timeout > 0 && (i.timeOut = setTimeout(function() {
						u._hide(i)
					}, Math.abs(parseInt(t.timeout))))
				}
			});
			return t.timeout && t.timeout > 0 && (i.timeOut = setTimeout(function() {
				switch (u.options.hideMode) {
				case "remove":
					u._remove(i);
					break;
				case "hide":
				default:
					u._hide(i)
				}
			}, Math.abs(parseInt(t.timeout)))), i
		},
		_add: function(t, i) {
			if (!this.isDisabled) {
				if (n.type(t) !== "string" && n.type(t) !== "object") {
					n.error("消息内容需为字符串或消息对象格式，请重新指定消息内容！");
					return
				}
				this._init();
				var u = {},
					r = null;
				n.type(t) == "string" ? n.extend(u, this._itemOption, {
					notify: t,
					status: this._status(i)
				}) : n.extend(u, this._itemOption, t), r = this._item(u, this.thisClass);
				switch (u.pendAt) {
				case "after":
					r.$row.appendTo(this.$notifyList);
					break;
				case "before":
				case "default":
				default:
					r.$row.prependTo(this.$notifyList)
				}
				this._update(), this.options.doAdd(this), this._show(r)
			}
		},
		_show: function(n) {
			var t = this,
				r = n.options,
				i = r.speed;
			n.$item.show(), n.$row.hide().stop(!0, !0).slideDown(i).dequeue().fadeIn(i, function() {
				t._update(), t.options.doShow(t)
			})
		},
		_hide: function(n) {
			var t = this,
				r = n.options,
				i = r.speed;
			rowSize = this.$ui._dimensions(n.$row).height, n.$row.stop(!0, !0).fadeOut(i).dequeue().slideUp(i, function() {
				n.$item.hide(), t._update(), t.options.doHide(t)
			})
		},
		_remove: function(t) {
			var r = this,
				f = t.options,
				i = f.speed,
				u = this.$ui._dimensions(t.$row).height;
			t.$row.stop(!0, !0).animate({
				"margin-top": u
			}, i).dequeue().fadeOut(i).dequeue().slideUp(i, function() {
				n(this).empty().remove(), r._update(), r.options.doRemove(r)
			})
		},
		_clean: function() {
			this.$notifyList.children().remove(), this.$notifyList.empty(), this._update(), this.options.doClean(this)
		},
		_empty: function() {
			_self._clean()
		},
		_update: function() {
			this.itemLength = this.$notifyList.children().length, this.options.doUpdate(this)
		},
		_enabled: function() {
			this.isDisabled = !1
		},
		_disabled: function() {
			this.isDisabled = !0
		},
		_status: function(n) {
			var t = n || "base";
			switch (t) {
			case "success":
				t = "success";
				break;
			case "danger":
				t = "danger";
				break;
			case "warning":
				t = "warning";
				break;
			case "base":
			default:
				t = "base"
			}
			return t
		},
		_position: function() {
			var t = {},
				n = this.options.position.split(","),
				i = this.options.size + 10;
			if (n.length <= 1) switch (n) {
			case "right":
				n = ["right", "top"];
				break;
			case "left":
				n = ["right", "top"];
				break;
			case "center":
			default:
				n = ["center", "top"]
			}
			switch (n[0]) {
			case "left":
				t.left = 0;
				break;
			case "right":
				t.left = "100%", t.marginLeft = 0 - i;
				break;
			case "right":
			default:
				t.left = "50%", t.marginLeft = 0 - i / 2
			}
			switch (n[1]) {
			case "bottom":
				t.top = "100%";
				break;
			case "top":
			default:
				t.top = 0
			}
			this.$notifyBase.css(t), n[1] == "bottom" && this.$notifyList.css({
				bottom: 0
			})
		}
	}, n.tpuiMenu = function(i, r) {
		if (this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this = this.$ui._obj(i), this.$sub = this.$this.children(), this.$item = this.$this.find("li"), this.$this[0].tagName === "UL" || this.$this[0].tagName === "OL") return this.options = r, this.name = "menu", this.thisClass = t + "-" + this.name, this.typeClass = this.$this.attr("data-type") || "base", this._create(), this
	}, n.tpuiMenu.prototype = {
		_option: {
			startInt: 0,
			toggleOther: !1,
			targetIndex: null,
			arrow: !0,
			speed: "normal",
			easing: "swing",
			onCreate: n.noop,
			onShow: n.noop,
			onHide: n.noop,
			version: "2.0.4"
		},
		_init: function() {
			var t = this.options,
				n;
			this.playInt = parseInt(t.startInt), t.targetIndex && (this.playInt = this._active() || this.playInt), this._showAll(!0), n = this.$item.eq(this.playInt), n.parents("li").length > 0 ? this._show(n.parents("li." + this.thisClass + "-sub"), !0) : this._show(n, !0)
		},
		_create: function() {
			this.$uiThis = this.$ui._uiItem().addClass(this.thisClass), this.$this.after(this.$uiThis), this.$uiMenu = this._menus(this.$this, this.options.arrow).appendTo(this.$uiThis), this.$uiMenuHead = this.$uiThis.find("." + this.thisClass + "-base"), this.$uiMenuArrow = this.$uiThis.find("." + this.thisClass + "-arrow"), this._uiEvent();
			this.options.onCreate(this)
		},
		_menus: function(t, i) {
			var f = this,
				u = this.$ui,
				e = t,
				o = t.children(),
				r = this.thisClass,
				i = i || !1;
			return n.each(o, function(t, e) {
				var o = n(e),
					h = o.children().eq(0),
					c = o.children("ul") || o.children("ol") || null,
					v, l, a, s;
				!n.isEmptyObject(c) && c.get(0) ? (o.addClass(r + "-sub " + r + "-sub-group "), s = u._uiSub().addClass(r + "-base " + r + "-head").append(h).appendTo(o), u._icon(h), i && (v = u._uiHandleButton("&nbsp;").addClass(r + "-arrow").appendTo(s), s.addClass(r + "-base-arrow")), l = u._uiSub().addClass(r + "-submenu").appendTo(o), a = f._menus(c, i).appendTo(l)) : (o.addClass(r + "-sub"), s = u._uiSub().addClass(r + "-base").append(h).appendTo(o), f.$ui._icon(h))
			}), e
		},
		_uiEvent: function() {
			var t = this;
			this.$this.on({
				_show: function(n, i) {
					t.playInt = parseInt(i), t._toggle(t.playInt, !0)
				},
				_hide: function(n, i) {
					t.playInt = parseInt(i), t._toggle(t.playInt, !1)
				}
			});
			this.$uiMenuHead.on({
				click: function() {
					t.playInt = t._headIndex(n(this)), t._toggle()
				}
			})
		},
		_active: function() {
			return this.$target = this.$this.find("li." + this.options.targetIndex.match(/[a-z0-9\-\_]+/)[0] + ":first"), this._itemIndex(this.$target)
		},
		_headIndex: function(n) {
			return this.$uiMenuHead.index(n[0])
		},
		_itemIndex: function(n) {
			return this.$item.index(n[0])
		},
		_toggle: function(n, i) {
			var r = this.$item.eq(n || this.playInt || 0);
			this[r.hasClass(t + "-active") ? "_hide" : "_show"](r, i)
		},
		_show: function(n, i) {
			var o = this,
				r = this.options,
				u = t + "-active",
				s = n.children("." + this.thisClass + "-submenu"),
				f = i ? 0 : r.speed,
				e = i ? "swing" : r.easing;
			r.toggleOther && this._hide(n.siblings("li." + u), i), n.addClass(u), s.stop(!0, !0).slideDown(f, e, function() {
				r.onShow(o)
			})
		},
		_hide: function(i, r) {
			var s = this,
				u = this.options,
				h = t + "-active",
				o = i.find("." + this.thisClass + "-submenu"),
				f = r ? 0 : u.speed,
				e = r ? "swing" : u.easing;
			i.removeClass(t + "-active"), o.stop(!0, !0).slideUp(f, e, function() {
				n(this).parents("li:first").removeClass(t + "-active");
				u.onHide(s)
			})
		},
		_isOpen: function() {
			return this.$item.eq(parseInt(this.playInt)).children("." + this.thisClass + "-submenu").is(":visible")
		},
		_showAll: function(n) {
			this._show(this.$item, n)
		},
		_hideAll: function(n) {
			this._hide(this.$item, n)
		}
	}, n.tpUI._gadgets("Menu", n.tpuiMenu, n.tpuiMenu.prototype), n.tpuiMarquee = function(i, r) {
		return this.$ui = n.tpUI || {}, this.$window = n(window), this.name = "marquee", this.thisClass = t + "-" + this.name, this.keyCode = {
			prev: [37, 38, 65, 87, 187, 188],
			next: [39, 40, 68, 83, 189, 190],
			tab: [9]
		}, this.options = r, this.$this = this.$ui._obj(i), this.$sub = this.$this.children(), this.typeClass = this.$this.attr("data-type") || this.options.type || "base", this.struct = {}, this.isMode = this.options.mode ? !0 : !1, this.length = this.$sub.length, this.step = this._step(this.options.step), this.now = 0, this.scroll = 0, this.canFlip = !0, this._canFlip(), this.playInt = null, this.scrolling = !1, this.scrollType = "next", this.animating = !1, this.autoPlayInited = !1, this._create(), this
	}, n.tpuiMarquee.prototype = {
		_option: {
			type: "base",
			mode: !1,
			direction: "x",
			keyboardFlip: !0,
			tabFlip: !0,
			modeSize: 1,
			step: 1,
			speed: 600,
			easing: "swing",
			autoPlay: !0,
			timer: 5e3,
			option: !0,
			prevText: "上翻",
			nextText: "下翻",
			optionToggle: !0,
			delay: 20,
			hoverMode: "stop",
			onCreate: n.noop,
			onFlip: n.noop,
			onReady: n.noop,
			onEnd: n.noop,
			version: "3.0.3"
		},
		_init: function() {
			this._runInit(), this._play()
		},
		_canFlip: function() {
			this.length <= this.step && (this.canFlip = !1)
		},
		_create: function() {
			var i = this.$ui,
				t = this.thisClass,
				r = this.options,
				n = this.struct;
			n.$uiThis = i._uiItem().addClass(t + " " + t + "-" + this.typeClass), n.$uiContent = i._uiSub().addClass(t + "-content").appendTo(n.$uiThis), n.$uiContentList = i._uiSub().addClass(t + "-content-list").appendTo(n.$uiContent), n.$uiSubClone = this.$sub.clone(!0).addClass(t + "-sub-clone").appendTo(this.$this), this.$this.before(n.$uiThis).appendTo(n.$uiContentList), this._options(), n.$uiSub = this.$this.children(), this.useLength = n.$uiSub.length, this.grid = this.$ui._dimensions(n.$uiSub.eq(0)), this._uiEvent()
		},
		_destroy: function() {
			var n = this;
			this._stop(), this.$this.off("marqueePrev marqueeNext marqueePlay marqueeStop marqueeDestroy"), this.struct.$uiThis.before(this.$this), this.struct.$uiSubClone.remove(), this.struct.$uiThis.remove(), this.$this.removeData("tpuiMarquee")
		},
		_options: function() {
			if (!this.isMode && this.options.option) {
				var i = this,
					u = this.$ui,
					t = this.thisClass,
					r = this.options,
					n = this.struct;
				n.$uiOptionPrev = u._uiHandleLink(r.prevText).addClass(t + "-option " + t + "-prev").on({
					"click.marqueeOptionPrev touchend.marqueeOptionPrev": function(n) {
						i.$this.trigger("_prev"), n.preventDefault()
					}
				}).appendTo(n.$uiThis), n.$uiOptionNext = u._uiHandleLink(r.nextText).addClass(t + "-option " + t + "-next").on({
					"click.marqueeOptionPrev touchend.marqueeOptionPrev": function(n) {
						i.$this.trigger("_next"), n.preventDefault()
					}
				}).appendTo(n.$uiThis), n.$uiOption = n.$uiThis.children("." + t + "-option")
			}
		},
		_step: function(n) {
			var i = 0,
				t = this.length;
			return this.step = Math.abs(Math.round(parseInt(n))), this.step <= i && (this.step = i), this.step >= t && (this.step = t), this.step
		},
		_runInit: function() {
			var t = this.struct,
				n = this.options.direction == "x" ? !0 : !1;
			this._optionToggle(!1), t.$uiThis.addClass(this.thisClass + (n ? "-hor" : "-ver")), t.$uiContentList.css(n ? "width" : "height", this.grid[n ? "width" : "height"] * this.useLength)
		},
		_play: function() {
			var n = this,
				t = this.options,
				r = t.autoPlay,
				u = parseInt(t.delay),
				i = parseInt(t.timer);
			this._stop(), this.isMode ? this.scrolling = setTimeout(function() {
				n["_" + n.scrollType]()
			}, 30) : r && (n.playInt = clearTimeout(n.playInt), this.playInt = setTimeout(function() {
				n._next(), n._play()
			}, i))
		},
		_stop: function() {
			var n = this.options.autoPlay;
			this.isMode ? this.scrolling = clearTimeout(this.scrolling) : this.playInt = clearTimeout(this.playInt)
		},
		_prev: function() {
			var t = this,
				n = "prev",
				i = this.options,
				r = parseInt(i.delay);
			this.scrollType !== n && (this.scrollType = n), this.isMode ? (this._stop(), this.scrolling = setTimeout(function() {
				t._scrollMode(n), t._prev()
			}, 30)) : this._slideMode(n)
		},
		_next: function() {
			var t = this,
				n = "next",
				i = this.options;
			this.scrollType !== n && (this.scrollType = n), this.isMode ? (this._stop(), this.scrolling = setTimeout(function() {
				t._scrollMode(n), t._next()
			}, 30)) : this._slideMode(n)
		},
		_uiEvent: function() {
			var n = this,
				i = this.struct,
				r = this.options,
				t = this.$this;
			t.on({
				"_prev.marquee": function() {
					n._prev()
				},
				"_next.marquee": function() {
					n._next()
				},
				"_play.marquee": function() {
					n._play()
				},
				"_stop.marquee": function() {
					n._stop()
				},
				"_destroy.marquee": function() {
					n._destroy()
				}
			});
			i.$uiThis.on({
				"mouseenter.marqueeEnter touchstart.marqueeEnter": function() {
					n.playInt && (n.autoPlayInited = !0, n._stop()), n._optionToggle(!0), n._keyBoardToggle(!0), n._marqueeHover(!0)
				},
				"mouseleave.marqueeOut touchend.marqueeOut": function() {
					n.autoPlayInited && (n._play(), n.autoPlayInited = !1), n._optionToggle(!1), n._keyBoardToggle(!1), n._marqueeHover(!1)
				}
			})
		},
		_optionToggle: function(n) {
			this.struct.$uiOption && this.options.optionToggle && (n ? this.struct.$uiOption.stop(!0, !0).fadeIn() : this.struct.$uiOption.stop(!0, !0).fadeOut())
		},
		_keyBoardToggle: function(n) {
			if (this.options.keyboardFlip) {
				var r = this,
					t = this.$window,
					i = "keydown.marqueeKeyCheck";
				if (n) t.on(i, function(n) {
					r._keyBoardEvent(n)
				});
				else t.off(i)
			}
		},
		_keyBoardEvent: function(n) {
			var o = this,
				e = this.keyCode,
				u = this.options,
				t = u.keyboardFlip,
				f = u.tabFlip,
				i = n.keyCode,
				r = this.$this;
			return !t || n.metaKey || n.shiftKey || n.ctrlKey || n.altKey ? !1 : t && this._isKeyCode("prev", i) ? (r.trigger("_prev"), n.preventDefault(), !1) : t && this._isKeyCode("next", i) ? (r.trigger("_next"), n.preventDefault(), !1) : !this.isMode && f && this._isKeyCode("tab", i) ? (r.trigger("_next"), n.preventDefault(), !1) : void 0
		},
		_isKeyCode: function(t, i) {
			return i && n.inArray(i, this.keyCode[t]) !== -1 ? !0 : !1
		},
		_marqueeHover: function(n) {
			var u, f;
			if (this.isMode) {
				var i = this,
					s = this.options,
					t = s.hoverMode,
					e = "mousemove.scrillPoint",
					o = this.struct,
					r = o.$uiThis;
				if (n) {
					if (t == "stop" && i._stop(), t == "enter") {
						u = 0, f = this.$ui._dimensions(r), uiOffsetLeft = f.offset.left, multiple = Math.round(f.width / 2), reEvent = null;
						r.on(e, function(n) {
							n.preventDefault(), u = n.pageX - uiOffsetLeft, reEvent = reEvent ? clearTimeout(reEvent) : setTimeout(function() {
								u <= multiple ? i._prev() : i._next(), reEvent = clearTimeout(reEvent)
							}, 30)
						})
					}
				} else t == "stop" && i._play(), t == "enter" && r.off(e)
			}
		},
		_scrollMode: function(n) {
			var r = parseInt(this.options.modeSize),
				u = this.options.direction,
				i = this.struct.$uiContentList,
				t = null;
			n == "prev" ? this.scroll += r : this.scroll -= r, this._scrollReset(n);
			switch (u) {
			case "y":
				t = "translate3d( 0, " + this.scroll + "px, 0 )", i.css({
					transform: t,
					"-webkit-transform": t,
					"-moz-transform": t,
					"-ms-transform": t
				});
				break;
			case "x":
			default:
				t = "translate3d( " + this.scroll + "px, 0, 0 )", i.css({
					transform: t,
					"-webkit-transform": t,
					"-moz-transform": t,
					"-ms-transform": t
				})
			}
		},
		_scrollReset: function(n) {
			var t = this,
				i = 0 - (this.options.direction == "x" ? this.grid.width : this.grid.height);
			n == "prev" ? t.scroll <= 0 && (t._subShift(1, "prepend"), t.scroll = i) : t.scroll <= i && (t._subShift(1, "append"), t.scroll = 0)
		},
		_slideMode: function(n) {
			if (!this.animating) {
				var t = this,
					i = this.options,
					u = i.direction == "x" ? !0 : !1,
					r = this.struct.$uiContentList,
					s = this.grid[u ? "width" : "height"] * this.step,
					h = u ? {
						left: "-" + s + "px"
					} : {
						top: "-" + s + "px"
					},
					c = u ? {
						left: "0px"
					} : {
						top: "0px"
					},
					f = i.speed,
					e = i.easing,
					o = i.onFlip;
				t.animating = !0, n == "prev" ? (t._subShift(t.step, "prepend"), r.css(h).stop(!0, !1).animate(c, f, e, function() {
					t.animating = !1, o.apply(t)
				})) : r.stop(!0, !1).animate(h, f, e, function() {
					t._subShift(t.step, "append"), r.css(c), t.animating = !1, o.apply(t)
				})
			}
		},
		_subShift: function(n, t) {
			for (var i = this.$this, r = 0; r < n; r++) t == "prepend" ? i.children(":last").prependTo(i) : i.children(":first").appendTo(i)
		}
	}, n.tpUI._gadgets("Marquee", n.tpuiMarquee, n.tpuiMarquee.prototype), n.tpuiDialog = function(i, r) {
		return this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.name = "dialog", this.thisClass = t + "-" + this.name, this.typeClass = this.$this.attr("data-type") || "base", this.options = r, this.$window = n(window), this.$document = n(document), this.struct = {}, this.size = {}, this.isOpen = !1, this.uiClose = !1, this.scrollLock = this.options.scrollLock, this._create(), this.resize = null, this
	}, n.tpuiDialog.prototype = {
		_option: {
			autoOpen: !1,
			modal: !1,
			removeMode: !1,
			escape: !0,
			draggable: !0,
			resizable: !0,
			mask: !0,
			maskClose: !0,
			maskClass: "base",
			head: !0,
			title: null,
			buttons: null,
			width: 440,
			height: null,
			autoResize: !0,
			offset: 20,
			pushTo: null,
			positionAt: "center,middle",
			positionMy: "center,middle",
			scrollLock: !1,
			onCreate: n.noop,
			onOpen: n.noop,
			onClose: n.noop,
			onDragStart: n.noop,
			onDragMove: n.noop,
			onDragEnd: n.noop,
			onResizeStart: n.noop,
			onResizeSet: n.noop,
			onResizeEnd: n.noop,
			version: "2.0.2"
		},
		_optionSet: function(t) {
			return this.options = n.extend({}, this.options, t), this
		},
		_init: function() {
			var n = this.options;
			n.autoOpen && this._open()
		},
		_create: function() {
			var e = this,
				u = this.$ui,
				r = this.options,
				i = this.thisClass,
				t = this.struct,
				f = u._obj(r.pushTo);
			t.$uiThis = u._uiItem().addClass(i + " " + i + "-" + this.typeClass).tpuiPosition({
				my: r.positionMy,
				at: r.positionAt
			}).appendTo(f.get(0) ? f : n("body")), t.$uiInner = u._uiSub().addClass(i + "-inner").appendTo(t.$uiThis), t.$uiContent = u._uiSub().addClass(i + "-content").append(this.$this).appendTo(t.$uiInner), this._head(), this._buttons(), t.$uiClose = u._uiHandleLink("关闭").attr("title", "点击关闭窗口").addClass(i + "-close"), t.$uiHead ? t.$uiClose.appendTo(t.$uiHead) : (t.$uiThis.addClass(i + "-headless"), t.$uiClose.appendTo(t.$uiInner)), r.mask && (t.$uiMask = n("." + i + "-mask").get(0) ? n("." + i + "-mask").eq(0) : u._uiMask().addClass(i + "-mask " + i + "-mask-" + r.maskClass).appendTo(n("body")), t.$uiMask.hide()), t.$uiThis.hide(), this._uiEvent(), r.onCreate.apply(this)
		},
		_head: function() {
			var f = this,
				t = this.$this,
				u = this.$ui,
				r = this.options,
				i = this.thisClass,
				n = this.struct;
			(this.title = r.title || t.attr("title") || t.attr("data-title") || null, r.head && this.title) && (t.removeAttr("title data-icon-before data-icon-after"), n.$uiHead = u._uiSub().addClass(i + "-head").attr("title", "按住拖动可更改窗口位置").prependTo(n.$uiInner), n.$uiTitle = u._uiSub().addClass(i + "-title").append("<span>" + this.title.replace(/<[^>]+>/g, "") + "</span>").appendTo(n.$uiHead), u._icon(t, n.$uiTitle.children("span")), r.draggable && n.$uiThis.tpuiDrag({
				handle: "." + i + "-head"
			}))
		},
		_buttons: function() {
			if (this.options.buttons) {
				var r = this,
					e = this.$this,
					f = this.$ui,
					u = this.options,
					i = this.thisClass,
					t = this.struct;
				t.$uiButtons && t.$uiButtons.remove(), t.$uiButtons = f._uiSub().addClass(i + "-buttons").appendTo(t.$uiInner), n.each(u.buttons, function(i, u) {
					var f = n("<button>" + i.replace(/<[^>]+>/g, "") + "</button>").on({
						"click.dialogButtonClick touchend.dialogButtonClick": function() {
							u(r)
						}
					}).appendTo(t.$uiButtons).tpuiButton()
				}), t.$uiButtonItem = t.$uiButtons.children()
			}
		},
		_uiEvent: function() {
			var n = this,
				i = this.$this,
				r = this.options,
				t = this.struct;
			i.on({
				"_open.dialogOpen": function() {
					n._open()
				},
				"_close.dialogClose": function() {
					n._close()
				}
			});
			t.$uiClose.on({
				"click.dialogClose touchend.dialogClose": function(t) {
					t.preventDefault(), n.uiClose = !0, n._close()
				}
			})
		},
		_open: function() {
			if (!this.isOpen) {
				var n = this,
					r = this.$ui,
					i = this.options,
					t = this.struct;
				t.$uiThis.show(1, function() {
					n.uiClose = !1, n.isOpen = !0, n._winddowEventToggle(), n.$this.show().find(":text:first").focus(), n._resize();
					i.onOpen(n)
				}), this._maskToggle(!0), this.scrollLock && r._windowLock(!0)
			}
		},
		_close: function(n) {
			if (this.isOpen) {
				var t = this,
					u = this.$ui,
					i = this.options,
					n = i.removeMode,
					r = this.struct;
				r.$uiThis.hide(1, function() {
					t.isOpen = !1;
					i.onClose(t);
					n && r.$uiThis.empty().remove(), t.scrollLock && u._windowLock(!1)
				}), this._maskToggle(!1), this._winddowEventToggle()
			}
		},
		_maskToggle: function(n) {
			var r = this,
				u = this.options.maskClose,
				f = this.speed,
				t = this.struct.$uiMask,
				i = "click.dialogClose touchend.dialogClose";
			t && (n ? t.on(i, function(n) {
				n.preventDefault(), u && (r.uiClose = !0, r._close())
			}).show() : t.off(i).hide())
		},
		_winddowEventToggle: function() {
			var t = this,
				f = this.struct,
				u = this.thisClass,
				i = this.$window,
				r = this.$document;
			if (this.isOpen) {
				r.on({
					"click.dialogBlank touchend.dialogBlank": function(i) {
						n(i.target).closest("." + u).length <= 0 && n(i.target).closest("." + u + "-mask").length <= 0 && t._close()
					}
				});
				i.on({
					"scroll.dialogScroll resize.dialogResize orientationchange.dialogResize": function(n) {
						t._resize(), n.preventDefault()
					},
					"keyup.dialogEsc": function(n) {
						n.keyCode == 27 && (t.uiClose = !0, t._close(), n.preventDefault())
					}
				})
			} else r.off("click.dialogBlank touchend.dialogBlank"), i.off("scroll.dialogScroll resize.dialogResize orientationchange.dialogResize keyup.dialogEsc")
		},
		_resize: function() {
			var t = this,
				n = this.$ui;
			struct = this.struct, options = this.options, scrollSize = n._scrollbarWidth(), size = this.size, size.offset = 40, size.thisSize = n._dimensions(this.$this), size.windowSize = n._dimensions(this.$window), size.content = n._dimensions(struct.$uiContent), size.exclude || (size.exclude = 0, size.exclude = struct.$uiHead ? n._dimensions(struct.$uiHead).height : 0, size.exclude += struct.$uiButtons ? n._dimensions(struct.$uiButtons).height : 0), size.max = {
				width: size.windowSize.width - size.offset,
				height: size.windowSize.height - size.offset - size.exclude
			}, size.base || (size.base = {
				width: Math.abs(parseInt(options.width)) || "auto",
				height: Math.abs(parseInt(options.height)) || "auto"
			}, size.now = {
				width: size.base.width,
				height: size.base.height
			}), size.now.width = size.max.width <= size.now.width ? size.max.width : size.base.width == "auto" ? size.max.width <= size.thisSize.width ? size.max.width : "auto" : size.max.width <= size.base.width ? size.max.width : size.base.width, size.now.height = size.max.height <= size.now.height ? size.max.height : size.base.height == "auto" ? size.max.height <= size.thisSize.height ? size.max.height : "auto" : size.max.height <= size.base.height ? size.max.height : size.base.height, struct.$uiContent.css(size.now), struct.$uiThis.tpuiPosition("update")
		}
	}, n.tpUI._gadgets("Dialog", n.tpuiDialog, n.tpuiDialog.prototype), n.tpuiTab = function(i, r) {
		return this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.name = "tab", this.thisClass = t + "-" + this.name, this.typeClass = this.$this.attr("data-type") || "base", this.options = r, this.$this = this.$ui._obj(i), this.$sub = this.$this.children(), this.subLength = this.$sub.length, this._create(), this
	}, n.tpuiTab.prototype = {
		_option: {
			startInt: 0,
			autoPlay: !1,
			timer: 5e3,
			mode: "display",
			direction: "x",
			speed: 600,
			easing: "swing",
			tabAttr: "title",
			tabBox: null,
			tabEvent: "click",
			refer: !1,
			referBox: null,
			referEvent: "click",
			option: !0,
			optionToggle: !0,
			optionPrev: "上翻",
			optionNext: "下翻",
			onCreate: n.noop,
			onFlip: n.noop,
			version: "2.0"
		},
		_init: function() {
			this.tabInt = parseInt(this.options.startInt), this.autoPlay = null, this._flip()
		},
		_create: function() {
			var n = this;
			this.$uiThis = this.$ui._uiItem().addClass(this.thisClass + " " + this.thisClass + "-" + this.typeClass).appendTo(this.$this), this.$uiContent = this.$ui._uiSub().addClass(this.thisClass + "-content").appendTo(this.$uiThis), this.$uiContentList = this.$ui._uiSub().addClass(this.thisClass + "-content-list").append(this.$sub).appendTo(this.$uiContent), this.$uiContentSub = this.$uiContentList.children(), this._tab(), this.options.refer && this._refer(), this._uiEvent();
			this.options.onCreate(this)
		},
		_tab: function() {
			var t = this;
			this.$uiTab = this.$ui._uiSub().addClass(this.thisClass + "-nav"), this.$uiTabList = this.$ui._uiSub().addClass(this.thisClass + "-nav-list").appendTo(this.$uiTab), n.each(this.$sub, function(i, r) {
				var e = n(r).attr(t.options.tabAttr) || i,
					u = null,
					f = null;
				t.options.tabAttr == "title" && n(r).removeAttr("title"), n(r).appendTo(t.$uiContentList), u = t.$ui._uiSub().appendTo(t.$uiTabList), f = t.$ui._uiHandleLink(e).appendTo(u), t.$ui._icon(n(r), f)
			}), this.options.tabBox ? this.$uiTab.appendTo(this.$ui._obj(this.options.tabBox)) : this.$uiTab.appendTo(this.$uiThis), this.$uiTabSub = this.$uiTabList.children()
		},
		_refer: function() {
			var i = this,
				n, t;
			for (this.$uiRefer = this.options.referBox ? this.$ui._obj(this.options.referBox) : this.$ui._uiSub().addClass(this.thisClass + "-refer").appendTo(this.$uiThis), this.$uiReferList = this.$ui._uiSub().addClass(this.thisClass + "-refer-list").appendTo(this.$uiRefer), n = 1; n <= this.subLength; n++) t = $ui._uiHandleLink(n).appendTo(i.$uiReferList);
			this.$uiReferSub = this.$uiReferList.children()
		},
		_uiEvent: function() {
			var t = this;
			switch (this.options.tabEvent) {
			case "hover":
				this.$uiTabSub.on({
					mouseenter: function() {
						t.tabInt = n(this).index(), t._flip()
					}
				});
				break;
			case "click":
			default:
				this.$uiTabSub.on({
					click: function() {
						t.tabInt = n(this).index(), t._flip()
					}
				})
			}
			if (this.options.refer) switch (option.referEvent) {
			case "hover":
				this.$uiReferSub.on({
					mouseenter: function() {
						t.tabInt = n(this).index(), t._flip()
					}
				});
				break;
			case "click":
			default:
				this.$uiReferSub.on({
					click: function() {
						t.tabInt = n(this).index(), t._flip()
					}
				})
			}
		},
		_flip: function() {
			this.$uiContentSub.removeClass(t + "-active").hide().eq(this.tabInt).addClass(t + "-active").show(), this.$uiTabSub.removeClass(t + "-active").eq(this.tabInt).addClass(t + "-active"), this.options.refer && this.$uiReferSub.removeClass(t + "-active").eq(this.tabInt).addClass(t + "-active")
		}
	}, n.tpUI._gadgets("Tab", n.tpuiTab, n.tpuiTab.prototype), n.tpuiAccordion = function(i, r) {
		return this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$sub = this.$this.children(), this.name = "accordion", this.thisClass = t + "-" + this.name, this.typeClass = this.$this.attr("data-type") || "base", this.options = r, this.subLength = this.$sub.length, this._create(), this
	}, n.tpuiAccordion.prototype = {
		_option: {
			startInt: 0,
			toggle: !0,
			autoOpen: !0,
			toggleOther: !0,
			toggleEvent: "click",
			speed: 400,
			easing: "swing",
			onCreate: n.noop,
			onShow: n.noop,
			onHide: n.noop,
			version: "2.0"
		},
		_init: function() {
			this.playInt = parseInt(this.options.startInt), this._run("run")
		},
		_create: function() {
			var r = this;
			this.$uiThis = this.$ui._uiItem().addClass(this.thisClass + " " + this.thisClass + "-" + this.typeClass).appendTo(this.$this), n.each(this.$sub, function(t, i) {
				var u = n(i);
				titleSet = u.attr("title") || u.attr("data-title") || "", u.attr("title") && u.removeAttr("title");
				var e = r.$ui._uiItem().addClass(r.thisClass + "-sub").appendTo(r.$uiThis),
					f = r.$ui._uiSub().addClass(r.thisClass + "-head").appendTo(e),
					o = r.$ui._uiHandleLink(titleSet).addClass(r.thisClass + "-title").appendTo(f),
					h = r.$ui._uiHandleLink("&nbsp;").addClass(r.thisClass + "-arrow").appendTo(f),
					s = r.$ui._uiSub().addClass(r.thisClass + "-content").hide().append(u).appendTo(e);
				r.$ui._icon(u, o)
			}), this.$uiSub = this.$uiThis.children(), this._uiEvent();
			this.options.onCreate(this)
		},
		_run: function(n) {
			var t = this,
				r = t._effect,
				i = "_" + n;
			r._slide[i](t)
		},
		_uiEvent: function() {
			var i = this;
			this.$this.on({
				_show: function(n, t) {
					i.playInt = t, i._run("show")
				},
				_hide: function(n, t) {
					i.playInt = t, i._run("hide")
				}
			});
			this.$uiSub.find("." + this.thisClass + "-head").on({
				click: function() {
					i.playInt = n(this).parent().index(), i._run("toggle")
				}
			})
		},
		_effect: {
			_accorLoad: function(n) {
				var i = {};
				return i.activeClass = t + "-active", i.contentClass = "." + n.thisClass + "-content:first", i.$sub = n.$uiSub, i.$subContent = i.$sub.children(i.contentClass), i.$subVis = n.$uiThis.children("." + i.activeClass), i.$subVisContent = i.$subVis.children(i.contentClass), i.$subThis = i.$sub.eq(n.playInt), i.$subThisContent = i.$subThis.children(i.contentClass), n.runObj = i, n
			},
			_slide: {
				_run: function(n) {
					n.options.toggle ? this._toggle(n) : this._show(n)
				},
				_toggle: function(n) {
					var t = n._effect._accorLoad(n),
						r = t.options,
						i = t.runObj;
					i.$subThisContent.is(":visible") ? this._hide(t) : this._show(t)
				},
				_show: function(n) {
					var i = n._effect._accorLoad(n),
						t = i.options,
						r = i.runObj;
					t.toggleOther && this._hide(i), r.$subThis.addClass(r.activeClass), r.$subThisContent.stop(!0, !1).slideDown(t.speed, t.easing, function() {
						t.onShow(i)
					})
				},
				_hide: function(n) {
					var r = n._effect._accorLoad(n),
						t = r.options,
						i = r.runObj;
					t.toggleOther && (i.$subVis.removeClass(i.activeClass), i.$subVisContent.stop(!0, !1).slideUp(t.speed, t.easing, function() {
						t.onHide(r)
					})), i.$subThis.removeClass(i.activeClass), i.$subThisContent.stop(!0, !1).slideUp(t.speed, t.easing, function() {
						t.onHide(r)
					})
				}
			}
		}
	}, n.tpUI._gadgets("Accordion", n.tpuiAccordion, n.tpuiAccordion.prototype), n.tpuiPasswordStrength = function(i, r) {
		return this.$ui = n.tpUI || {}, this.$this = this.$ui._obj(i), this.$this[0].type !== "password", this.options = r, this.struct = {}, this.thisClass = t + "-password-strength", this.typeName = this.$this.attr("data-type") || this.options.type, this.typeClass = this.thisClass + "-" + this.typeName, this.mode = this.options.mode, this.modeLength = this.mode.length, this.activeMode = null, this.modeInterval = 100 / this.modeLength, this.score = 0, this.active = 0, this._create(), this
	}, n.tpuiPasswordStrength.prototype = {
		_option: {
			type: "progress",
			title: "密码强度：",
			score: "密码强度综合评分<em>%S%</em>",
			tagMode: 1,
			proposal: !0,
			synch: !1,
			mode: [
				[{
					name: "weak",
					value: 0,
					tag: "较弱",
					tips: "安全性较差，强烈建议使用更为复杂的组合",
					callback: n.noop
				}],
				[{
					name: "general",
					value: 1,
					tag: "一般",
					tips: "安全性一般，建议使用数字、字母和符合组合",
					callback: n.noop
				}],
				[{
					name: "powerful",
					value: 2,
					tag: "较强",
					tips: "太棒了，您设置的密码已经足够安全了",
					callback: n.noop
				}]
			],
			width: null,
			height: null,
			onCreate: n.noop,
			version: "1.0"
		},
		_init: function() {
			this._typeUpdate(), this._toggle(!1)
		},
		_create: function() {
			var f = this,
				r = this.$ui,
				t = this.struct,
				i = this.thisClass,
				u = this.typeClass;
			t.$uiThis = r._uiItem().addClass(i + " " + u), t.$base = r._uiItem().addClass(i + "-base").appendTo(t.$uiThis), t.$referInput = n("<input>").attr({
				type: "hidden",
				readonly: "readonly"
			}).prop("readonly", !0).appendTo(t.$base), this.$this.after(t.$uiThis);
			switch (this.typeName) {
			case "progress":
				t = f._typeProgress(t)
			}
			this._uiEvent()
		},
		_typeProgress: function(n) {
			var u = this,
				i = this.$ui,
				t = this.thisClass,
				r = this.options;
			return r.title && (n.$main = i._uiItem().addClass(t + "-title").append("<span>" + r.title + "</span>").appendTo(n.$uiThis)), n.$main = i._uiItem().addClass(t + "-main").appendTo(n.$uiThis), n.$progressBar = i._uiItem().addClass(t + "-progress-box").appendTo(n.$main), n.$progress = i._uiItem().append("&nbsp;").addClass(t + "-progress-bar").appendTo(n.$progressBar), r.tagMode && r.tagMode > 0 && (n.$tagBox = i._uiItem().addClass(t + "-tag-box").appendTo(n.$main)), r.score && (n.$score = i._uiItem().addClass(t + "-score").appendTo(n.$main)), n
		},
		_typeProgressUpdate: function() {
			var t = this,
				n = this.activeMode;
			$struct = this.struct, tagItemClass = this.thisClass + "-tag-item " + this.thisClass + "-", $struct.$tagBox.html('<span class="' + tagItemClass + n.name + '" title="' + n.tips + '">' + n.tag + "</span>"), $struct.$progress.stop(!0, !1).animate({
				width: t.score + "%"
			})
		},
		_typeUpdate: function() {
			var n = this;
			this._score(), this._modeRead(), this._scoreTips(), this.struct.$referInput.val(this.active);
			switch (this.typeName) {
			case "progress":
				n._typeProgressUpdate();
				break;
			case "radian":
				n._typeRadianUpdate();
				break;
			case "default":
			default:
				n._typeDefaultUpdate()
			}
		},
		_uiEvent: function() {
			var t = this,
				n = !1;
			this.$this.on({
				"focus.passwordStrengthToggle": function() {
					n = !0, t._toggle(!0)
				},
				"blur.passwordStrengthToggle": function() {
					n = !1, t._toggle(!1)
				},
				"keyup.passwordStrengthCheck": function() {
					n && t._typeUpdate()
				}
			})
		},
		_toggle: function(n) {
			var t = this.struct.$uiThis,
				i = t.is(":visible");
			this.options.synch && t.toggle(n)
		},
		_score: function() {
			var n = this.$this.val(),
				t;
			return (this.score = 0, n == "") ? this.score : (n.length >= 1 && (this.score += 10), /[0-9]{1,}/g.test(n) && (this.score += 10), /[a-z]{1,}/g.test(n) && (this.score += 10), /[A-Z]{1,}/g.test(n) && (this.score += 20), /[\~\@\#\$\%\&\_\-\+\.\?]+?/g.test(n) && (this.score += 25), t = n.match(/([\~\@\#\$\%\&\_\-\+\.\?]+?)/g), t && t.length >= 2 && (this.score += 25), this.score)
		},
		_modeRead: function() {
			var i = null,
				n = 0,
				t = this.struct;
			switch (this.score) {
			case 0:
				n = 0;
				break;
			case 100:
				n = this.modeLength - 1;
				break;
			default:
				n = Math.floor(Math.abs(this.score - this.modeInterval) / this.modeInterval)
			}
			n > 0 && n == this.active || (this.activeMode = this.mode[n][0], this.active = n)
		},
		_scoreTips: function() {
			this.options.score && this.options.score.match(/%S%/) && this.struct.$score.html("<span>" + this.options.score.replace(/%S%/g, this.score) + "</span>")
		}
	}, n.tpUI._gadgets("PasswordStrength", n.tpuiPasswordStrength, n.tpuiPasswordStrength.prototype)
}(jQuery), function(n) {
	n.projectionBanner = function() {
		function r() {
			i.is(":visible") ? i.hide(1, function() {
				f.off("click.bannerHide")
			}) : i.show(1, function() {
				f.one("click", function() {
					n.cookie(t, !0), r()
				})
			})
		}
		var u = n("#projection-topic"),
			i = u.find(".item:first"),
			f = u.find(".close:first"),
			t = "kc-banner-toggled",
			e = n.cookie(t) && n.cookie(t) == "true" ? !0 : !1;
		e || r()
	}, n.lotteryChart = function(t) {
		return this.$window = n(window), this.$document = n(document), this.$body = n("body"), this.$lotteryChartBox = t, this.chartDimension = this._dimension(this.$lotteryChartBox), this
	}, n.lotteryChart.prototype = {
		_resize: function() {},
		_tableItemToggle: function(n, t, i) {
			n.toggleClass(t, i)
		},
		_omissionToggle: function(t) {
			this._tableItemToggle(n("td.lc-omission"), "lc-omission-hide", t)
		},
		_splitToggle: function(t) {
			this._tableItemToggle(n("tr.lc-split"), "lc-split-hide", t)
		},
		_cross: function() {
			var r = this,
				t = r.chartDimension,
				i = n("<div>").addClass("lc-cross lc-cross-line").appendTo(this.$lotteryChartBox),
				u = n("<span>").addClass("lccl-hor").css({
					width: t.width * 3,
					height: "1px",
					"margin-left": 0 - t.width
				}).appendTo(i),
				u = n("<span>").addClass("lccl-ver").css({
					width: "1px",
					height: t.height * 3,
					"margin-top": 0 - t.height
				}).appendTo(i);
			return i
		},
		_crossToggle: function(n) {
			var t = this,
				r = "mouseover.crossCheck",
				u = "mouseout.crossCheck",
				i = this.$lotteryChartBox;
			if (this.$cross || (this.$cross = this._cross()), this.$cross.fadeTo(300, n ? 1 : 0), n) i.on({
				"mouseover.crossCheck": function() {
					t._crossMoveEvent(!0)
				},
				"mouseout.crossCheck": function() {
					t._crossMoveEvent(!1)
				}
			});
			else i.off(r + " " + u), t._crossMoveEvent(!1)
		},
		_crossMoveEvent: function(n) {
			var r = this.$document,
				u = this.$cross,
				t = this.chartDimension,
				i = "mousemove.lcCrossCheck",
				n = n || !1;
			if (n) r.on(i, function(n) {
				n.preventDefault(), u.stop(!0, !0).animate({
					left: n.pageX - t.left,
					top: n.pageY - t.top
				})
			});
			else r.off(i)
		},
		_drawLine: function(t, i, r, u, f) {
			var tt = this,
				b = null,
				h = null,
				g = i.children("span:first"),
				nt = r.children("span:first"),
				w = 3,
				l = 0,
				d = 0,
				a = 0,
				k = 0,
				e = this._dimension(g),
				s = this._dimension(nt),
				c = e,
				v = c.width / w,
				p = c.height / w,
				o = {},
				y = this._dimension(t);
			o = {
				left: Math.min(e.left, s.left),
				top: Math.min(e.top, s.top),
				width: parseInt(Math.abs(e.left - s.left) + c.width),
				height: parseInt(Math.abs(e.top - s.top) + c.height)
			}, b = n('<canvas width="' + o.width + '" height="' + o.height + '">').css({
				position: "absolute",
				"z-index": 99,
				left: o.left - y.left,
				top: o.top - y.top
			}).prependTo(t), h = b[0].getContext("2d"), h.lineWidth = f || 1, h.lineJoin = "round", h.strokeStyle = u || "#0000", d = e.top - o.top + (c.height - p), l = e.left - o.left + c.width / 2, k = s.top - o.top + p, a = s.left - o.left + c.width / 2, e.left < s.left && (l = l + v, a = a - v), e.left > s.left && (l = l - v, a = a + v), h.moveTo(l, d), h.lineTo(a, k), h.stroke()
		},
		_dimension: function(n) {
			var t = n.offset();
			return {
				width: parseInt(n.outerWidth()),
				height: parseInt(n.outerHeight()),
				left: parseInt(t.left),
				top: parseInt(t.top)
			}
		}
	}, n.kcScratch = function(t, i) {
		return this.$this = n.tpUI._obj(t), this.options = n.extend(!0, {}, this._options, i), this
	}, n.kcScratch.prototype = {
		_options: {
			autoFilll: !0,
			width: null,
			height: null,
			fillImage: null,
			fillColor: "#aaaaaa",
			brusheSize: 5,
			scratchPatch: null,
			bindFor: null,
			onFrom: null,
			onCreate: n.noop,
			onFill: n.noop,
			onScratch: n.noop,
			onClear: n.noop,
			version: "1.0"
		},
		_init: function() {
			var i = this,
				t = this.options;
			this.isFilled = !1, this.thisBase = n.tpUI._dimensions(this.$this), this.width = t.width ? parseInt(t.width) : this.thisBase.width - 10, this.height = t.height ? parseInt(t.height) : this.thisBase.height - 10, this.$canvas = this._canvas(this.width, this.height), this.context = this.$canvas.get(0).getContext("2d"), this.brusheSize = t.brusheSize ? parseInt(t.brusheSize) : 5, this.scratchPatch = t.scratchPatch, t.autoFilll && this._fill(), this._uiEvent();
			t.onCreate(this)
		},
		_uiEvent: function() {
			var n = this,
				r = this.options,
				t = this.$this,
				i = this.context;
			t.off(".scratch").on({
				"_fill.scratch": function() {
					n._fill()
				},
				"_scratch.scratch": function() {
					n._scratch()
				},
				"_clear.scratch": function() {
					n._clear()
				}
			})
		},
		_canvas: function(t, i) {
			return this.$canvas ? this.$canvas : n("<canvas>").attr({
				width: parseInt(t || _self.width),
				height: parseInt(i || _self.height)
			}).append("您的浏览器不支持HTML5 canvas 标签，请更换其他浏览器").appendTo(this.$this)
		},
		_fill: function() {
			var n = this,
				i = this.options,
				t = this.context,
				u = this.width,
				r = this.height;
			if (this.$canvas.stop(!0, !0).fadeTo(1, 1), i.fillImage) this.fillImage = new Image, this.fillImage.src = i.fillImage, this.fillImage.onload = function() {
				t.fillStyle = t.createPattern(n.fillImage, "repeat"), t.fillRect(0, 0, u, r), n.isFilled = !0;
				i.onFill(n)
			};
			else {
				this.fillColor = i.fillColor || "#aaa", t.fillStyle = n.fillColor, t.fillRect(0, 0, u, r), n.isFilled = !0;
				i.onFill(n)
			}
		},
		_scratch: function() {
			function c() {
				if (f >= v - 1) {
					h.$canvas.stop(!0, !0).fadeTo(1, .5), h.isFilled = !1, a.onScratch.apply(h);
					return
				}
				n >= e && (f++, i = o[f].split(","), t = parseInt(i[0]), r = parseInt(i[1]), e = (r - t) / s, n = t), u = setTimeout(function() {
					u = u ? clearTimeout(u) : null, n <= e && (l.clearRect(n * Math.random(1, 5), n * Math.random(1, 5), r, s * Math.random(1, 10)), n += s), c()
				}, 3)
			}
			if (this.isFilled) {
				if (!this.scratchPatch) {
					this._clear();
					return
				}
				var h = this,
					a = this.options,
					s = this.brusheSize,
					l = this.context,
					o = this.scratchPatch.split("|"),
					v = o.length,
					f = 0,
					i = o[f].split(","),
					t = parseInt(i[0]),
					r = parseInt(i[1]),
					e = r - t,
					n = t,
					u = null;
				c()
			}
		},
		_clear: function() {
			if (this.isFilled) {
				this.context.clearRect(0, 0, this.width, this.height), this.isFilled = !1;
				this.options.onClear(this)
			}
		}
	}, n.fn.kcScratch = function(t) {
		var u = n.kcScratch,
			i = "kcScratch",
			r = typeof t == "string";
		return this.each(function(f, e) {
			var h = this,
				o = n(e),
				s = n.data(o, i);
			s || (s = n.data(o, i, new u(o, r ? {} : t)), s._init()), r ? o.trigger(t) : s._init()
		})
	}
}(jQuery), JsEncryptHelper = {
	des: function(n, t, i, r, u) {
		var lt = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756],
			ct = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344],
			at = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584],
			ft = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928],
			st = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080],
			ht = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312],
			et = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154],
			ot = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696],
			d = JsEncryptHelper.des_createKeys(n),
			s = 0,
			w, h, o, vt, p, a, e, f, v, y, nt, l, g, rt, tt, ut = t.length,
			b = 0,
			it = d.length == 32 ? 3 : 9,
			k, c;
		for (v = it == 3 ? i ? [0, 32, 2] : [30, -2, -2] : i ? [0, 32, 2, 62, 30, -2, 64, 96, 2] : [94, 62, -2, 32, 64, 2, 30, -2, -2], t += "\x00\x00\x00\x00\x00\x00\x00\x00", k = "", c = "", r == 1 && (y = u.charCodeAt(s++) << 24 | u.charCodeAt(s++) << 16 | u.charCodeAt(s++) << 8 | u.charCodeAt(s++), l = u.charCodeAt(s++) << 24 | u.charCodeAt(s++) << 16 | u.charCodeAt(s++) << 8 | u.charCodeAt(s++), s = 0); s < ut;) {
			for (i ? (e = t.charCodeAt(s++) << 16 | t.charCodeAt(s++), f = t.charCodeAt(s++) << 16 | t.charCodeAt(s++)) : (e = t.charCodeAt(s++) << 24 | t.charCodeAt(s++) << 16 | t.charCodeAt(s++) << 8 | t.charCodeAt(s++), f = t.charCodeAt(s++) << 24 | t.charCodeAt(s++) << 16 | t.charCodeAt(s++) << 8 | t.charCodeAt(s++)), r == 1 && (i ? (e ^= y, f ^= l) : (nt = y, g = l, y = e, l = f)), o = (e >>> 4 ^ f) & 252645135, f ^= o, e ^= o << 4, o = (e >>> 16 ^ f) & 65535, f ^= o, e ^= o << 16, o = (f >>> 2 ^ e) & 858993459, e ^= o, f ^= o << 2, o = (f >>> 8 ^ e) & 16711935, e ^= o, f ^= o << 8, o = (e >>> 1 ^ f) & 1431655765, f ^= o, e ^= o << 1, e = e << 1 | e >>> 31, f = f << 1 | f >>> 31, h = 0; h < it; h += 3) {
				for (rt = v[h + 1], tt = v[h + 2], w = v[h]; w != rt; w += tt) p = f ^ d[w], a = (f >>> 4 | f << 28) ^ d[w + 1], o = e, e = f, f = o ^ (ct[p >>> 24 & 63] | ft[p >>> 16 & 63] | ht[p >>> 8 & 63] | ot[p & 63] | lt[a >>> 24 & 63] | at[a >>> 16 & 63] | st[a >>> 8 & 63] | et[a & 63]);
				o = e, e = f, f = o
			}
			e = e >>> 1 | e << 31, f = f >>> 1 | f << 31, o = (e >>> 1 ^ f) & 1431655765, f ^= o, e ^= o << 1, o = (f >>> 8 ^ e) & 16711935, e ^= o, f ^= o << 8, o = (f >>> 2 ^ e) & 858993459, e ^= o, f ^= o << 2, o = (e >>> 16 ^ f) & 65535, f ^= o, e ^= o << 16, o = (e >>> 4 ^ f) & 252645135, f ^= o, e ^= o << 4, r == 1 && (i ? (y = e, l = f) : (e ^= nt, f ^= g)), c += i ? String.fromCharCode(e >>> 24, e >>> 16 & 255, e >>> 8 & 255, e & 255, f >>> 24, f >>> 16 & 255, f >>> 8 & 255, f & 255) : String.fromCharCode(e >>> 16 & 65535, e & 65535, f >>> 16 & 65535, f & 65535), b += i ? 16 : 8, b == 512 && (k += c, c = "", b = 0)
		}
		return k + c
	},
	stringToHex: function(n) {
		for (var i = "", r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], t = 0; t < n.length; t++) i += r[n.charCodeAt(t) >> 4] + r[n.charCodeAt(t) & 15];
		return i
	},
	hexTostring: function(n) {
		for (var r = "", i, t = 0; t < n.length; t += 2) i = parseInt(n.substring(t, t + 2), 16), r += String.fromCharCode(i);
		return r
	},
	Encrypt: function(n, t) {
		return (t || t == 0 || t == "0" || t == !1 || t == "false") && n && (t = t.toString(), n = n.toString(), (t || t == 0 || t == "0" || t == !1 || t == "false") && n) ? JsEncryptHelper.stringToHex(JsEncryptHelper.des(n, t, 1, 0)) : ""
	}
}, String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "")
}, String.prototype.trimAll = function() {
	return this.replace(/\s*/g, "")
}, String.prototype.replaceFormat = function(n) {
	var t = /{(\d+)}/gm;
	return this.replace(t, function(t, i) {
		return n[~~i]
	})
}, String.prototype.replaceAll = function(n, t) {
	return this.replace(new RegExp(n, "gm"), t)
}, String.prototype.startWith = function(n) {
	return typeof n != "string" ? !1 : this.indexOf(n) == 0
}, String.prototype.endWith = function(n) {
	if (typeof n != "string") return !1;
	var t = this.length - n.length;
	return t >= 0 && this.lastIndexOf(n) === t
}, String.prototype.getLastString = function(n) {
	return this.substr(this.length - n)
}, String.prototype.toArray = function() {
	for (var t = [], n = 0; n < this.length; n++) t.push(this[n]);
	return t
}, String.prototype.IsPassStrong = function() {
	return this.length < 6 ? !1 : this.match(/^\d+$/) ? !1 : this.match(/^[A-Za-z]+$/) ? !1 : !0
}, String.prototype.sortAsc = function() {
	return this.toArray().sort().join("")
}, String.prototype.sortDesc = function() {
	return this.toArray().sort().reverse().join("")
}, String.prototype.maxShow = function(n, t) {
	if (n = n || 20, t) {
		var i = parseInt(n / 2);
		return this.length > n ? this.substr(0, i - 1) + "..." + this.substr(this.length - (n - i - 1)) : this
	}
	return this.length > n ? this.substr(0, n - 2) + "..." : this
}, String.prototype.toSingleSep = function(n) {
	for (var u = this.split(n), r = [], i, t = 0; t < u.length; t++) i = u[t], i != "" && r.push(i);
	return r.join(n)
}, Number.prototype.toFixedNum = function(n) {
	return parseFloat(this.toFixed(n))
}, String.prototype.toFixedNum = function(n) {
	var t = parseFloat(this);
	return parseFloat(t.toFixed(n))
}, Array.prototype.each = function(n) {
	for (var t = 0; t < this.length; t++) if (n(this[t], t) == !1) break;
	return this
}, Array.prototype.where = function(n) {
	var t = [];
	return this.each(function(i, r) {
		n(i, r) == !0 && t.push(i)
	}), t
}, Array.prototype.first = function() {
	return this.length == 0 ? null : this[0]
}, Array.prototype.last = function() {
	return this.length == 0 ? null : this[this.length - 1]
}, Array.prototype.take = function(n) {
	for (var i = [], t = 0; t < n; t++) i.push(this[t]);
	return i
}, Array.prototype.skip = function(n) {
	for (var i = [], t = n; t < this.length; t++) i.push(this[t]);
	return i
}, Array.prototype.dive = function(n) {
	for (var i = [], t = 0; t < this.length; t++) n.indexOf(this[t]) == -1 && i.push(this[t]);
	return i
}, Array.prototype.distinct = function() {
	for (var u = {}, r = [], f = this.length, t, i, n = 0; n < f; n++) t = this[n], i = typeof t + t, u[i] === undefined && (r.push(t), u[i] = 1);
	return r
}, Array.prototype.select = function(n) {
	var t = [];
	return this.each(function(i, r) {
		n(i, r) && t.push(i)
	}), t
}, Array.prototype.remove = function(n) {
	var i = [],
		t;
	return this.each(function(t, r) {
		n(t, r) && i.push(r)
	}), t = this, i.reverse().each(function(n) {
		t.splice(n, 1)
	}), t
}, Array.prototype.removeElement = function(n) {
	return this.remove(function(t) {
		return t == n
	})
}, Array.prototype.removeAt = function() {
	return this.remove(function(n, t) {
		return t == t
	})
}